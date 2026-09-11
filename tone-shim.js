/* Tone.js shim — implements only the surface Full Count actually uses:
   start / now / MembraneSynth / NoiseSynth / Filter / Gain / Noise.
   Real Tone.js is ~200KB and would need a CDN; this is ~4KB and offline.
   Sound design intent is preserved: pitched membrane thump, filtered
   noise bursts for mitt pop and bat crack, and a brown-noise crowd bed
   whose gain ramps for cheers, boos and roars. */
(function () {
  var ctx = null;

  function AC() {
    if (!ctx) {
      var C = window.AudioContext || window.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    return ctx;
  }

  // "G1" / "C3" / "F0" -> Hz
  var SEMI = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function noteHz(n) {
    if (typeof n === "number") return n;
    var m = /^([A-Ga-g])([#b]?)(-?\d+)$/.exec(String(n).trim());
    if (!m) return 110;
    var s = SEMI[m[1].toUpperCase()] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0);
    var midi = (parseInt(m[3], 10) + 1) * 12 + s;
    return 440 * Math.pow(2, (midi - 69) / 12);
  }
  // "16n" / "32n" / "8n" -> seconds, at Tone's default 120bpm
  function durSec(d) {
    if (typeof d === "number") return d;
    var m = /^(\d+)n$/.exec(String(d).trim());
    return m ? 2 / parseInt(m[1], 10) : 0.1;
  }
  function dbGain(db) { return Math.pow(10, db / 20); }

  // A volume node exposing Tone's `.value` in dB.
  function Vol(node) {
    var o = { _n: node, _v: 0 };
    Object.defineProperty(o, "value", {
      get: function () { return this._v; },
      set: function (db) { this._v = db; try { this._n.gain.value = dbGain(db); } catch (e) {} }
    });
    return o;
  }

  function noiseBuffer(type) {
    var c = AC(); if (!c) return null;
    var len = c.sampleRate * 2;
    var buf = c.createBuffer(1, len, c.sampleRate);
    var d = buf.getChannelData(0);
    if (type === "brown") {
      var last = 0;
      for (var i = 0; i < len; i++) {
        var w = Math.random() * 2 - 1;
        last = (last + 0.02 * w) / 1.02;
        d[i] = last * 3.5;
      }
    } else if (type === "pink") {
      var b0 = 0, b1 = 0, b2 = 0;
      for (var k = 0; k < len; k++) {
        var w2 = Math.random() * 2 - 1;
        b0 = 0.99765 * b0 + w2 * 0.0990460;
        b1 = 0.96300 * b1 + w2 * 0.2965164;
        b2 = 0.57000 * b2 + w2 * 1.0526913;
        d[k] = (b0 + b1 + b2 + w2 * 0.1848) * 0.3;
      }
    } else {
      for (var n = 0; n < len; n++) d[n] = Math.random() * 2 - 1;
    }
    return buf;
  }

  function Base() {
    var c = AC();
    this._out = c ? c.createGain() : null;
    this.volume = Vol(this._out || { gain: {} });
  }
  Base.prototype.toDestination = function () {
    var c = AC();
    if (c && this._out) this._out.connect(c.destination);
    return this;
  };
  Base.prototype.connect = function (dest) {
    if (this._out && dest && dest._in) this._out.connect(dest._in);
    return this;
  };

  function MembraneSynth(opt) {
    Base.call(this);
    opt = opt || {};
    this.pitchDecay = opt.pitchDecay == null ? 0.05 : opt.pitchDecay;
    this.octaves = opt.octaves == null ? 4 : opt.octaves;
  }
  MembraneSynth.prototype = Object.create(Base.prototype);
  MembraneSynth.prototype.triggerAttackRelease = function (note, dur, when) {
    var c = AC(); if (!c || !this._out) return;
    var t = when == null ? c.currentTime : when;
    var f = noteHz(note), d = durSec(dur);
    var osc = c.createOscillator(), g = c.createGain();
    osc.type = "sine";
    // the pitch envelope is what makes a membrane read as a drum hit
    osc.frequency.setValueAtTime(f * Math.pow(2, this.octaves), t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(f, 1), t + this.pitchDecay);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(1, t + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.06);
    osc.connect(g); g.connect(this._out);
    osc.start(t); osc.stop(t + d + 0.12);
  };

  function NoiseSynth(opt) {
    Base.call(this);
    opt = opt || {};
    this.type = (opt.noise && opt.noise.type) || "white";
    var e = opt.envelope || {};
    this.attack = e.attack == null ? 0.005 : e.attack;
    this.decay = e.decay == null ? 0.1 : e.decay;
    this.sustain = e.sustain == null ? 0 : e.sustain;
    this._buf = null;
  }
  NoiseSynth.prototype = Object.create(Base.prototype);
  NoiseSynth.prototype.triggerAttackRelease = function (dur, when) {
    var c = AC(); if (!c || !this._out) return;
    if (!this._buf) this._buf = noiseBuffer(this.type);
    if (!this._buf) return;
    var t = when == null ? c.currentTime : when;
    var src = c.createBufferSource(), g = c.createGain();
    src.buffer = this._buf;
    src.loop = true;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(1, t + Math.max(this.attack, 0.001));
    g.gain.exponentialRampToValueAtTime(0.0001, t + this.attack + this.decay);
    src.connect(g); g.connect(this._out);
    src.start(t); src.stop(t + this.attack + this.decay + 0.05);
  };

  function Filter(freq, type) {
    var c = AC();
    this._f = c ? c.createBiquadFilter() : null;
    if (this._f) { this._f.type = type || "lowpass"; this._f.frequency.value = freq || 350; }
    this._in = this._f;
    this._out = this._f;
    this.volume = Vol({ gain: {} });
  }
  Filter.prototype.toDestination = function () {
    var c = AC();
    if (c && this._f) this._f.connect(c.destination);
    return this;
  };
  Filter.prototype.connect = function (d) {
    if (this._f && d && d._in) this._f.connect(d._in);
    return this;
  };

  // Param wrapper giving Tone's rampTo()
  function Param(ap) {
    return {
      _p: ap,
      get value() { return ap ? ap.value : 0; },
      set value(v) { if (ap) ap.value = v; },
      rampTo: function (v, time) {
        var c = AC(); if (!c || !ap) return;
        var t = c.currentTime;
        // cancelAndHold isn't universal; hold the current value manually
        try { ap.cancelScheduledValues(t); } catch (e) {}
        try { ap.setValueAtTime(ap.value, t); } catch (e) {}
        ap.linearRampToValueAtTime(v, t + (time == null ? 0.1 : time));
      }
    };
  }

  function Gain(v) {
    var c = AC();
    this._g = c ? c.createGain() : null;
    if (this._g) this._g.gain.value = v == null ? 1 : v;
    this._in = this._g;
    this._out = this._g;
    this.gain = Param(this._g ? this._g.gain : null);
  }
  Gain.prototype.toDestination = function () {
    var c = AC(); if (c && this._g) this._g.connect(c.destination); return this;
  };
  Gain.prototype.connect = function (d) {
    if (this._g && d && d._in) this._g.connect(d._in);
    return this;
  };

  function Noise(type) {
    var c = AC();
    this.type = type || "white";
    this._g = c ? c.createGain() : null;
    this._out = this._g;
    this._src = null;
  }
  Noise.prototype.connect = function (d) {
    if (this._g && d && d._in) this._g.connect(d._in);
    return this;
  };
  Noise.prototype.toDestination = function () {
    var c = AC(); if (c && this._g) this._g.connect(c.destination); return this;
  };
  Noise.prototype.start = function () {
    var c = AC(); if (!c || !this._g || this._src) return this;
    var buf = noiseBuffer(this.type);
    if (!buf) return this;
    var s = c.createBufferSource();
    s.buffer = buf; s.loop = true;
    s.connect(this._g); s.start(0);
    this._src = s;
    return this;
  };
  Noise.prototype.stop = function () {
    if (this._src) { try { this._src.stop(); } catch (e) {} this._src = null; }
    return this;
  };

  window.Tone = {
    start: function () {
      var c = AC();
      if (!c) return Promise.resolve();
      // iOS mutes Web Audio when the ringer switch is off unless the audio
      // session is declared as playback.
      try {
        if (navigator.audioSession) navigator.audioSession.type = "playback";
      } catch (e) {}
      return c.state === "suspended" ? c.resume() : Promise.resolve();
    },
    now: function () { var c = AC(); return c ? c.currentTime : 0; },
    getContext: function () { return AC(); },
    MembraneSynth: MembraneSynth,
    NoiseSynth: NoiseSynth,
    Filter: Filter,
    Gain: Gain,
    Noise: Noise
  };
})();
