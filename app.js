(function(){
var module={exports:{}};var exports=module.exports;
function require(id){
  if(id==="react") return window.__vendor("react");
  if(id==="react/jsx-runtime") return window.__vendor("react/jsx-runtime");
  if(id==="react-dom") return window.__vendor("react-dom");
  if(id==="react-dom/client") return window.__vendor("react-dom/client");
  if(id==="tone") return window.Tone;
  throw new Error("unbundled module: "+id);
}
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FullCount;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Tone = __importStar(require("tone"));
/* ═══ PITCH DATA ═══ */
const PD = {
    highSchool: { label: "High School", icon: "\u{1F3EB}", timer: 2.8,
        fastball: { s: [70, 85], h: [-4, -2], v: [5, 7] }, sinker: { s: [68, 82], h: [-8, -5], v: [1, 4] },
        cutter: { s: [65, 78], h: [1, 3], v: [4, 6] }, slider: { s: [60, 72], h: [2, 6], v: [0, 3] },
        curveball: { s: [55, 68], h: [3, 6], v: [-4, -1] }, changeup: { s: [58, 72], h: [-5, -3], v: [2, 5] },
        splitter: { s: [62, 74], h: [-3, -1], v: [-2, 2] } },
    college: { label: "College", icon: "\u{1F393}", timer: 2.4,
        fastball: { s: [85, 93], h: [-5, -3], v: [7, 10] }, sinker: { s: [82, 90], h: [-10, -6], v: [2, 5] },
        cutter: { s: [80, 88], h: [1, 4], v: [5, 8] }, slider: { s: [75, 84], h: [3, 8], v: [1, 4] },
        curveball: { s: [68, 78], h: [4, 8], v: [-5, -2] }, changeup: { s: [72, 82], h: [-7, -4], v: [3, 6] },
        splitter: { s: [78, 86], h: [-4, -1], v: [-1, 3] } },
    minors: { label: "Minors", icon: "\u26BE", timer: 2.0,
        fastball: { s: [90, 97], h: [-6, -3], v: [8, 11] }, sinker: { s: [87, 94], h: [-12, -7], v: [2, 6] },
        cutter: { s: [84, 91], h: [2, 5], v: [6, 9] }, slider: { s: [80, 88], h: [4, 12], v: [1, 4] },
        curveball: { s: [73, 82], h: [5, 10], v: [-6, -2] }, changeup: { s: [78, 86], h: [-8, -5], v: [3, 7] },
        splitter: { s: [82, 90], h: [-5, -2], v: [-2, 3] } },
    pro: { label: "Pro (MLB)", icon: "\u{1F3C6}", timer: 1.6,
        fastball: { s: [94, 101], h: [-7, -4], v: [9, 13] }, sinker: { s: [91, 97], h: [-14, -9], v: [3, 7] },
        cutter: { s: [87, 94], h: [2, 6], v: [6, 10] }, slider: { s: [83, 92], h: [5, 15], v: [0, 4] },
        curveball: { s: [76, 85], h: [5, 12], v: [-7, -3] }, changeup: { s: [82, 89], h: [-9, -6], v: [4, 7] },
        splitter: { s: [85, 93], h: [-5, -2], v: [-3, 2] } }
};
const PN = { fastball: "4-Seam FB", sinker: "Sinker", cutter: "Cutter", slider: "Slider", curveball: "Curveball", changeup: "Changeup", splitter: "Splitter" };
const PCOL = { fastball: "#ff4444", sinker: "#ff8833", cutter: "#ddcc22", slider: "#33cc55", curveball: "#4488ff", changeup: "#bb55ff", splitter: "#ff55aa" };
/* ═══ DESIGN TOKENS ═══ */
const T = {
    night: "#04070C", panel: "#0A1119", panel2: "#101C27", line: "#1A2836",
    chalk: "#EDEFE6", muted: "#7E8EA0", dim: "#3A4658", faint: "#22303F",
    gold: "#FFCF3D", goldD: "#B8891A", goldDim: "#8A6B18",
    ball: "#2F6FE4", strike: "#E03B3B", green: "#2FBF57", blue: "#3B82F6"
};
const FD = "Anton, Impact, sans-serif"; // display / verdicts
const FU = "'Barlow Condensed', 'Arial Narrow', sans-serif"; // UI labels
const FM = "'JetBrains Mono', ui-monospace, monospace"; // data readouts
const FONTS = "https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap";
/* ═══ MOTION — one stylesheet for every screen. Everything here is
   presentation only: verdict stamp, panel reveal, timer urgency, streak
   heat, button press, and the menu's mount sequence. No gameplay timing
   is keyed to any of these animations. ═══ */
const CSS = [
    "@keyframes bcStamp{0%{opacity:0;transform:scale(1.22) translateY(-3px)}55%{opacity:1;transform:scale(0.965)}100%{opacity:1;transform:scale(1)}}",
    "@keyframes bcPanel{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}",
    "@keyframes bcFlash{0%{box-shadow:0 0 0 2px var(--vc),0 0 34px var(--vc)}100%{box-shadow:0 0 0 0 rgba(0,0,0,0),0 0 0 rgba(0,0,0,0)}}",
    "@keyframes bcPulse{0%,100%{box-shadow:0 0 6px var(--tc)}50%{box-shadow:0 0 18px var(--tc),0 0 34px var(--tc)}}",
    "@keyframes bcFlame{0%{opacity:0.82;transform:translateY(0) scale(1)}30%{opacity:1;transform:translateY(-1px) scale(1.06)}60%{opacity:0.9;transform:translateY(0.5px) scale(0.98)}100%{opacity:0.82;transform:translateY(0) scale(1)}}",
    "@keyframes bcRise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}",
    "@keyframes bcDrift{from{transform:scale(1.05) translate(-0.6%,0.4%)}to{transform:scale(1.09) translate(0.7%,-0.5%)}}",
    ".bc-btn{transform:translateZ(0);transition:transform 0.09s cubic-bezier(.2,.8,.3,1),filter 0.12s ease}",
    ".bc-btn.is-down{transform:scale(0.962) translateZ(0);filter:brightness(1.12)}",
    ".bc-card{transition:transform 0.1s cubic-bezier(.2,.8,.3,1),border-color 0.15s,box-shadow 0.15s,background 0.15s}",
    ".bc-card:active{transform:scale(0.968)}",
    ".bc-stamp{animation:bcStamp 0.24s cubic-bezier(.22,1.35,.36,1) both}",
    ".bc-panel{animation:bcPanel 0.13s ease-out both}",
    ".bc-flash{animation:bcFlash 0.55s ease-out both}",
    ".bc-flame{animation:bcFlame 0.42s ease-in-out infinite;display:inline-block;transform-origin:50% 80%}",
    ".bc-rise{animation:bcRise 0.5s cubic-bezier(.2,.8,.3,1) both}",
    ".bc-drift{animation:bcDrift 24s ease-in-out infinite alternate;transform-origin:50% 45%;will-change:transform}",
    "@media (prefers-reduced-motion: reduce){.bc-stamp,.bc-panel,.bc-flash,.bc-flame,.bc-rise,.bc-drift{animation:none !important}}"
].join("\n");
function MotionStyle() { return (0, jsx_runtime_1.jsx)("style", { children: CSS }); }
/* ═══ BALL ICON — a real baseball, seen the way the classic photo shows
   it: one seam sweeps across the face in a wide arc and the other only
   peeks in at the top-right edge. Stitches are red chevrons straddling
   the seam at even arc-length, apex on the thread line. ═══ */
function bezPt(t, P) {
    var u = 1 - t;
    return [u * u * u * P[0][0] + 3 * u * u * t * P[1][0] + 3 * u * t * t * P[2][0] + t * t * t * P[3][0],
        u * u * u * P[0][1] + 3 * u * u * t * P[1][1] + 3 * u * t * t * P[2][1] + t * t * t * P[3][1]];
}
// sample a chain of cubic segments at even arc-length; returns [x, y, tx, ty]
function seamSamples(segs, spacing) {
    var pts = [];
    segs.forEach(function (P) { for (var i = 0; i <= 60; i++)
        pts.push(bezPt(i / 60, P)); });
    var out = [], acc = 0, next = spacing * 0.5;
    for (var i = 1; i < pts.length; i++) {
        var dx = pts[i][0] - pts[i - 1][0], dy = pts[i][1] - pts[i - 1][1], L = Math.hypot(dx, dy);
        if (L === 0)
            continue;
        while (acc + L >= next) {
            var f = (next - acc) / L;
            out.push([pts[i - 1][0] + dx * f, pts[i - 1][1] + dy * f, dx / L, dy / L]);
            next += spacing;
        }
        acc += L;
    }
    return out;
}
function BallIcon({ size }) {
    // the big front seam: in at the left, over the crown, down the right, out the bottom
    var FRONT = [[[0, 31], [12, 11], [40, 8], [46, 36]], [[46, 36], [50, 52], [42, 60], [33, 64]]];
    // the far seam, clipped by the edge of the ball at the top-right
    var BACK = [[[35, 0], [52, 4], [63, 18], [64, 40]]];
    var pathOf = function (segs) {
        return segs.map(function (P, i) {
            return (i === 0 ? "M" + P[0][0] + " " + P[0][1] + " " : "") + "C " + P[1][0] + " " + P[1][1] + ", " + P[2][0] + " " + P[2][1] + ", " + P[3][0] + " " + P[3][1];
        }).join(" ");
    };
    var chev = [];
    var lay = function (segs, key, w, back) {
        seamSamples(segs, 2.75).forEach(function (q, i) {
            var x = q[0], y = q[1], tx = q[2], ty = q[3], nx = -ty, ny = tx;
            // V: apex on the seam, two arms trailing back and out
            var ax = x - tx * back + nx * w, ay = y - ty * back + ny * w;
            var bx = x - tx * back - nx * w, by = y - ty * back - ny * w;
            chev.push((0, jsx_runtime_1.jsx)("path", { d: "M" + ax.toFixed(2) + " " + ay.toFixed(2) + " L" + x.toFixed(2) + " " + y.toFixed(2) + " L" + bx.toFixed(2) + " " + by.toFixed(2), stroke: "#C4231F", strokeWidth: "1.4", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, key + i));
        });
    };
    lay(FRONT, "f", 1.95, 2.2);
    lay(BACK, "b", 1.85, 2.0);
    return ((0, jsx_runtime_1.jsxs)("svg", { className: "bc-rise", width: size, height: size, viewBox: "0 0 64 64", style: { marginBottom: 6, filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.75))" }, children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("radialGradient", { id: "ballLeather", cx: "34%", cy: "30%", r: "78%", children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", stopColor: "#FFFFFF" }), (0, jsx_runtime_1.jsx)("stop", { offset: "48%", stopColor: "#F7F3EA" }), (0, jsx_runtime_1.jsx)("stop", { offset: "82%", stopColor: "#DCD3BE" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", stopColor: "#A99C7E" })] }), (0, jsx_runtime_1.jsxs)("radialGradient", { id: "ballRim", cx: "50%", cy: "50%", r: "50%", children: [(0, jsx_runtime_1.jsx)("stop", { offset: "80%", stopColor: "rgba(0,0,0,0)" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", stopColor: "rgba(60,45,20,0.38)" })] }), (0, jsx_runtime_1.jsxs)("radialGradient", { id: "ballSpec", cx: "50%", cy: "50%", r: "50%", children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", stopColor: "rgba(255,255,255,0.8)" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", stopColor: "rgba(255,255,255,0)" })] }), (0, jsx_runtime_1.jsx)("clipPath", { id: "ballClip", children: (0, jsx_runtime_1.jsx)("circle", { cx: "32", cy: "32", r: "30.5" }) })] }), (0, jsx_runtime_1.jsx)("circle", { cx: "32", cy: "32", r: "30.5", fill: "url(#ballLeather)" }), (0, jsx_runtime_1.jsx)("circle", { cx: "32", cy: "32", r: "30.5", fill: "url(#ballRim)" }), (0, jsx_runtime_1.jsxs)("g", { clipPath: "url(#ballClip)", children: [(0, jsx_runtime_1.jsx)("path", { d: pathOf(FRONT), stroke: "rgba(110,90,60,0.5)", strokeWidth: "1.1", fill: "none" }), (0, jsx_runtime_1.jsx)("path", { d: pathOf(BACK), stroke: "rgba(110,90,60,0.5)", strokeWidth: "1.1", fill: "none" }), chev] }), (0, jsx_runtime_1.jsx)("ellipse", { cx: "21", cy: "19", rx: "8", ry: "5.5", fill: "url(#ballSpec)", transform: "rotate(-32 21 19)" }), (0, jsx_runtime_1.jsx)("circle", { cx: "32", cy: "32", r: "30.5", fill: "none", stroke: "rgba(70,55,30,0.45)", strokeWidth: "0.8" })] }));
}
/* Display-only counter: eases a number from its previous value to the new
   one over ~350ms. The underlying stat is never touched. */
function useTicker(target, ms) {
    var st = (0, react_1.useState)(target), shown = st[0], setShown = st[1];
    var fromRef = (0, react_1.useRef)(target);
    (0, react_1.useEffect)(function () {
        var from = fromRef.current, to = target;
        if (from === to)
            return;
        var t0 = performance.now(), raf = 0, dur = ms || 350;
        var step = function (now) {
            var k = Math.min(1, (now - t0) / dur);
            var e = 1 - Math.pow(1 - k, 3);
            var v = Math.round(from + (to - from) * e);
            setShown(v);
            if (k < 1)
                raf = requestAnimationFrame(step);
            else
                fromRef.current = to;
        };
        raf = requestAnimationFrame(step);
        return function () { cancelAnimationFrame(raf); fromRef.current = to; };
    }, [target]);
    return shown;
}
/* ═══ THE TWO CLUBS ═══
   Visitors travel in road grays with a scarlet top; the home nine wear
   navy over whites. Whoever is batting wears their kit, whoever is in the
   field wears theirs, and the sides swap when the inning turns over. ═══ */
const TEAMS = [
    { abbr: "VIS", name: "VISITORS", jersey: "#8E2028", pants: "#A9AEB8", cap: "#6E141B", trim: "#EDE7D8", accent: "#E0564E" },
    { abbr: "HOM", name: "HOME NINE", jersey: "#1D2C56", pants: "#D2D7E0", cap: "#16224C", trim: "#E8B820", accent: "#4A88F0" }
];
function shade(hex, f) {
    var n = parseInt(hex.slice(1), 16), r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
    if (f >= 0) {
        r += (255 - r) * f;
        g += (255 - g) * f;
        b += (255 - b) * f;
    }
    else {
        r *= 1 + f;
        g *= 1 + f;
        b *= 1 + f;
    }
    return "#" + [r, g, b].map(function (v) {
        return ("0" + Math.round(Math.max(0, Math.min(255, v))).toString(16)).slice(-2);
    }).join("");
}
var UNI_CACHE = {};
function uni(tm) {
    if (UNI_CACHE[tm.abbr])
        return UNI_CACHE[tm.abbr];
    var u = {
        jL: shade(tm.jersey, 0.36), jM: tm.jersey, jD: shade(tm.jersey, -0.36),
        pL: shade(tm.pants, 0.16), pM: tm.pants, pD: shade(tm.pants, -0.26),
        seam: shade(tm.pants, -0.55), belt: shade(tm.jersey, -0.58),
        slv: shade(tm.jersey, 0.20), cuff: shade(tm.jersey, -0.50),
        cap: tm.cap, capL: shade(tm.cap, 0.44), capD: shade(tm.cap, -0.40),
        helL: shade(tm.jersey, 0.44), helM: shade(tm.jersey, -0.06), helD: shade(tm.jersey, -0.52),
        trim: tm.trim, accent: tm.accent, num: "#F2F5FA", skin: "#C7A080",
        gear: shade(tm.jersey, -0.18), gearL: shade(tm.jersey, 0.26)
    };
    UNI_CACHE[tm.abbr] = u;
    return u;
}
function kits(half) { return { bat: TEAMS[half], fld: TEAMS[1 - half] }; }
function rng(a, b, r) { return (r || Math.random)() * (b - a) + a; }
let curBat = "right";
function genPitch(lv, rand) {
    var R = rand || Math.random;
    var d = PD[lv], types = Object.keys(PN), type = types[Math.floor(R() * types.length)];
    var p = d[type], speed = Math.round(rng(p.s[0], p.s[1], R)), hB = rng(p.h[0], p.h[1], R), vB = rng(p.v[0], p.v[1], R);
    var fx, fy;
    if (R() < 0.5) {
        fx = rng(-8, 8, R);
        fy = rng(-11, 11, R);
    }
    else {
        var s = Math.floor(R() * 4);
        if (s === 0) {
            fx = rng(-16, -9, R);
            fy = rng(-14, 14, R);
        }
        else if (s === 1) {
            fx = rng(9, 16, R);
            fy = rng(-14, 14, R);
        }
        else if (s === 2) {
            fx = rng(-14, 14, R);
            fy = rng(12, 20, R);
        }
        else {
            fx = rng(-14, 14, R);
            fy = rng(-20, -12, R);
        }
    }
    // Rule fix: if ANY part of the ball touches the zone it's a strike.
    // Zone half-width 8.5in, half-height 12in; ball radius ~1.45in.
    var BALL_R = 1.45;
    return { type, speed, hB, vB, sx: rng(-1.5, 1.5, R), fx, fy, isK: Math.abs(fx) <= 8.5 + BALL_R && Math.abs(fy) <= 12 + BALL_R, timer: d.timer };
}
/* ═══ GAME STATE ENGINE — counts, outs, bases, and a real line score.
   Three full innings, each with a top and a bottom: the visitors bat in
   the top, the home nine in the bottom, and the game ends after the
   bottom of the third. The umpire's call STANDS, right or wrong, just
   like real life. ═══ */
var INNINGS = 3;
function freshGame() {
    var blank = function () { var a = [], i; for (i = 0; i < INNINGS; i++)
        a.push(null); return a; };
    var line = [blank(), blank()];
    line[0][0] = 0; // top of the first is underway
    return { inning: 1, half: 0, outs: 0, balls: 0, strikes: 0,
        bases: [false, false, false], runs: [0, 0], hits: [0, 0], line: line };
}
function advanceGame(g, kind) {
    var ng = { inning: g.inning, half: g.half, outs: g.outs, balls: g.balls, strikes: g.strikes,
        bases: g.bases.slice(), runs: g.runs.slice(), hits: g.hits.slice(),
        line: [g.line[0].slice(), g.line[1].slice()] };
    var bt = ng.half; // the side at bat gets the runs and hits
    var note = "", newBatter = false, scored = 0;
    var score = function (n) {
        ng.runs[bt] += n;
        scored += n;
        ng.line[bt][ng.inning - 1] = (ng.line[bt][ng.inning - 1] || 0) + n;
    };
    if (kind === "ball") {
        ng.balls++;
        if (ng.balls >= 4) {
            note = "BALL FOUR \u2014 WALK";
            if (ng.bases[0] && ng.bases[1] && ng.bases[2])
                score(1);
            else if (ng.bases[0] && ng.bases[1])
                ng.bases[2] = true;
            else if (ng.bases[0])
                ng.bases[1] = true;
            ng.bases[0] = true;
            newBatter = true;
        }
    }
    else if (kind === "strike" || kind === "miss") {
        ng.strikes++;
        if (ng.strikes >= 3) {
            note = "STRIKE THREE \u2014 OUT";
            ng.outs++;
            newBatter = true;
        }
    }
    else if (kind === "foul") {
        if (ng.strikes < 2)
            ng.strikes++;
    }
    else if (kind === "out") {
        ng.outs++;
        newBatter = true;
    }
    else if (kind === "single" || kind === "double" || kind === "hr") {
        ng.hits[bt]++;
        var adv = kind === "single" ? 1 : kind === "double" ? 2 : 4;
        var nb = [false, false, false], runsIn = 0;
        for (var bi = 0; bi < 3; bi++) {
            if (ng.bases[bi]) {
                var to = bi + adv;
                if (to >= 3)
                    runsIn++;
                else
                    nb[to] = true;
            }
        }
        if (adv >= 4)
            runsIn++;
        else
            nb[adv - 1] = true;
        if (runsIn > 0)
            score(runsIn);
        ng.bases = nb;
        newBatter = true;
    }
    if (newBatter) {
        ng.balls = 0;
        ng.strikes = 0;
    }
    if (ng.outs >= 3) {
        ng.outs = 0;
        ng.bases = [false, false, false];
        ng.balls = 0;
        ng.strikes = 0;
        if (ng.half === 0)
            ng.half = 1; // to the bottom of the same inning
        else {
            ng.half = 0;
            ng.inning++;
        } // new inning, visitors up again
        if (ng.inning <= INNINGS && ng.line[ng.half][ng.inning - 1] == null)
            ng.line[ng.half][ng.inning - 1] = 0;
        note = note ? note + " \u2014 SIDE RETIRED" : "SIDE RETIRED";
    }
    return { ng: ng, note: note, nb: newBatter, runs: scored, gameOver: ng.inning > INNINGS };
}
/* ═══ HIGH SCORES — persisted via window.storage (claude.ai artifacts).
   Fails quietly anywhere that API doesn't exist. ═══ */
var MEM_SCORES = []; // session fallback if persistent storage is unavailable
async function loadScores() {
    try {
        var r = await window.storage.get("bluecall-scores");
        var list = r && r.value ? JSON.parse(r.value) : [];
        if (Array.isArray(list)) {
            MEM_SCORES = list;
            return list;
        }
        return MEM_SCORES.slice();
    }
    catch (e) {
        return MEM_SCORES.slice();
    }
}
async function saveScore(entry) {
    var list;
    try {
        list = await loadScores();
    }
    catch (e) {
        list = MEM_SCORES.slice();
    }
    if (!list.some(function (e2) { return e2.id === entry.id; })) {
        list.push(entry);
        list.sort(function (a, b) { return b.score - a.score; });
        list = list.slice(0, 10);
    }
    MEM_SCORES = list; // always keep the session copy current
    try {
        await window.storage.set("bluecall-scores", JSON.stringify(list));
    }
    catch (e) { }
    return list;
}
/* ═══ POINTS — harder calls are worth more. m = inches from the
   strike/ball boundary (ball radius included). ═══ */
function edgeMargin(p) {
    return p.isK
        ? Math.min(9.95 - Math.abs(p.fx), 13.45 - Math.abs(p.fy))
        : Math.max(Math.abs(p.fx) - 9.95, Math.abs(p.fy) - 13.45);
}
var LVL_MULT = { highSchool: 1, college: 1.25, minors: 1.5, pro: 2 };
function callPoints(m) {
    if (m <= 1.2)
        return { base: 500, label: "PAINTED THE EDGE!" };
    if (m <= 3)
        return { base: 300, label: "Tough call" };
    if (m <= 6)
        return { base: 150, label: "Solid call" };
    return { base: 100, label: "Routine call" };
}
/* ═══ SOUND (Tone.js): mitt pop, bat crack, crowd ambience that swells.
   Initialized on first user gesture; fails silently if audio is blocked. ═══ */
var SND = { ready: false, on: true };
function sndInit() {
    if (SND.ready)
        return;
    try {
        Tone.start();
        SND.thump = new Tone.MembraneSynth({ octaves: 4, pitchDecay: 0.02 }).toDestination();
        SND.thump.volume.value = -6;
        SND.pop = new Tone.NoiseSynth({ noise: { type: "white" }, envelope: { attack: 0.001, decay: 0.06, sustain: 0 } }).toDestination();
        SND.pop.volume.value = -14;
        SND.crack = new Tone.NoiseSynth({ noise: { type: "pink" }, envelope: { attack: 0.0005, decay: 0.05, sustain: 0 } }).toDestination();
        SND.crack.volume.value = -7;
        SND.crowdFilter = new Tone.Filter(380, "lowpass").toDestination();
        SND.crowdGain = new Tone.Gain(0.015).connect(SND.crowdFilter);
        SND.crowdNoise = new Tone.Noise("brown").connect(SND.crowdGain).start();
        SND.ready = true;
    }
    catch (e) { }
}
function sfx(kind) {
    if (!SND.ready || !SND.on)
        return;
    try {
        var now = Tone.now();
        if (kind === "pop") {
            SND.thump.triggerAttackRelease("G1", "16n", now);
            SND.pop.triggerAttackRelease("32n", now);
        }
        else if (kind === "crack") {
            SND.crack.triggerAttackRelease("16n", now);
            SND.thump.triggerAttackRelease("C3", "32n", now);
        }
        else if (kind === "cheer") {
            SND.crowdGain.gain.rampTo(0.16, 0.08);
            SND.crowdGain.gain.rampTo(0.015, 1.6);
        }
        else if (kind === "boo") {
            SND.thump.triggerAttackRelease("F0", "8n", now);
            SND.crowdGain.gain.rampTo(0.12, 0.15);
            SND.crowdGain.gain.rampTo(0.015, 1.3);
        }
        else if (kind === "roar") {
            SND.crowdGain.gain.rampTo(0.3, 0.1);
            SND.crowdGain.gain.rampTo(0.015, 2.6);
        }
    }
    catch (e) { }
}
/* ═══ ANNOUNCER ═══ */
var ANN = {
    edge: ["Painted the black on that one, partner!", "Right on the corner \u2014 what a call!", "That's an artist's strike zone."],
    good: ["Good call, Blue.", "He's seeing them well tonight.", "Textbook zone right there."],
    miss: ["Ohh, he missed that one badly.", "The crowd lets him hear it!", "That pitch was NOT where he called it."],
    slow: ["Asleep at the wheel, Blue!", "The hesitation costs him.", "Make a call out there!"],
    k: ["Punched him out! Have a seat.", "Strike three \u2014 sit down!", "Rung up! Down goes the batter."],
    walk: ["Ball four, take your base.", "The free pass is issued."],
    hr: ["That ball is GONE!", "Kiss it goodbye!", "Way back... and OUTTA HERE!"],
    hit: ["Base knock!", "That one finds grass.", "Stroked into the outfield."],
    out: ["Routine play, one away.", "He squeezes it for the out."],
    foul: ["Spoiled it foul.", "Fights it off to stay alive."],
    missSw: ["He cuts and misses!", "Swing and a miss \u2014 filthy pitch."]
};
function annPick(k) { var a = ANN[k] || ANN.good; return a[Math.floor(Math.random() * a.length)]; }
function dailySeed() { var d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
/* ═══ DETERMINISTIC RNG (crowd / texture stays still between frames) ═══ */
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
/* ═══ RETINA CANVAS — the single biggest visual win on a phone.
   Every canvas draws into a device-pixel backing store and works in
   logical coordinates, so lines, seams and type stay razor sharp. ═══ */
var CW = 380, CH = 440, CONTACT_P = 0.861;
function dprOf() { return Math.min((typeof window !== "undefined" && window.devicePixelRatio) || 1, 2.5); }
function prepCanvas(c, W, H) {
    var d = dprOf();
    var pw = Math.round(W * d), ph = Math.round(H * d);
    if (c.width !== pw || c.height !== ph) {
        c.width = pw;
        c.height = ph;
    }
    var ctx = c.getContext("2d");
    ctx.setTransform(d, 0, 0, d, 0, 0);
    return ctx;
}
/* ═══ STATIC STADIUM BACKGROUND (rendered once, cached per DPR) ═══
   Layer stack, far to near: sky → light banks → volumetric beams →
   upper deck crowd → bleachers → wall + foul poles → warning track →
   outfield turf with mow rings and light pools → infield clay →
   chalk → mound → plate. Every texture is deterministic so nothing
   crawls or flickers between frames. */
var BG_CACHE = null, BG_KEY = "";
var LB_CACHE = null, LB_MASK = null; // offscreen scratch for the batter's lower body
var JB_CACHE = null, JB_MASK = null; // and for his jersey + arms
function buildBackground(W, H) {
    var key = W + "x" + H + "@" + dprOf();
    if (BG_CACHE && BG_KEY === key)
        return BG_CACHE;
    var d = dprOf();
    var c = document.createElement("canvas");
    c.width = Math.round(W * d);
    c.height = Math.round(H * d);
    var ctx = c.getContext("2d");
    ctx.scale(d, d);
    var rnd = mulberry32(20260609);
    var deckT = H * 0.048, deckB = H * 0.128;
    var bleachT = deckB, bleachB = H * 0.150;
    var wallT = H * 0.150, wallB = H * 0.202;
    var trackT = wallB, trackB = H * 0.222;
    var grsT = trackB, grsB = H * 0.50;
    var moundY = H * 0.34, plateY = H * 0.82;
    // ── Night sky: deep at the top, warming toward the park's light dome ──
    var skyG = ctx.createLinearGradient(0, 0, 0, deckT);
    skyG.addColorStop(0, "#02050B");
    skyG.addColorStop(0.45, "#070F1E");
    skyG.addColorStop(0.82, "#0E1B31");
    skyG.addColorStop(1, "#17293F");
    ctx.fillStyle = skyG;
    ctx.fillRect(0, 0, W, deckT);
    // light dome — the glow a lit ballpark throws into the sky
    var domeG = ctx.createRadialGradient(W / 2, deckT + 6, 4, W / 2, deckT + 6, W * 0.62);
    domeG.addColorStop(0, "rgba(255,232,178,0.16)");
    domeG.addColorStop(0.5, "rgba(190,200,220,0.05)");
    domeG.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = domeG;
    ctx.fillRect(0, 0, W, deckT + 4);
    for (var st = 0; st < 44; st++) {
        var sy = rnd() * deckT * 0.75;
        ctx.fillStyle = "rgba(228,238,255," + (0.10 + rnd() * 0.34 * (1 - sy / deckT)) + ")";
        ctx.fillRect(rnd() * W, sy, rnd() < 0.15 ? 1.6 : 1, 1);
    }
    // ── Light banks. Four towers: two tall on the corners, two low mid ──
    var TOWERS = [
        { x: 0.085, y: H * 0.016, w: 19, big: 1 },
        { x: 0.915, y: H * 0.016, w: 19, big: 1 },
        { x: 0.320, y: H * 0.028, w: 13, big: 0 },
        { x: 0.680, y: H * 0.028, w: 13, big: 0 }
    ];
    TOWERS.forEach(function (t) {
        var lx = W * t.x, by = t.y;
        var hg = ctx.createRadialGradient(lx, by + 5, 2, lx, by + 5, t.big ? 66 : 44);
        hg.addColorStop(0, "rgba(255,243,206," + (t.big ? 0.34 : 0.22) + ")");
        hg.addColorStop(0.38, "rgba(255,240,200,0.11)");
        hg.addColorStop(1, "rgba(255,244,205,0)");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(lx, by + 5, t.big ? 66 : 44, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#232D3D";
        ctx.fillRect(lx - 1.4, by + 8, 2.8, deckT - by - 6);
        ctx.fillStyle = "rgba(255,255,255,0.07)";
        ctx.fillRect(lx - 1.4, by + 8, 0.9, deckT - by - 6);
        ctx.fillStyle = "#151E2C";
        ctx.fillRect(lx - t.w, by - 5, t.w * 2, t.big ? 13 : 10);
        ctx.strokeStyle = "rgba(126,142,168,0.42)";
        ctx.lineWidth = 0.7;
        ctx.strokeRect(lx - t.w, by - 5, t.w * 2, t.big ? 13 : 10);
        var cols = t.big ? 6 : 4, rows = t.big ? 2 : 2;
        for (var r2 = 0; r2 < rows; r2++)
            for (var cI = 0; cI < cols; cI++) {
                var bx0 = lx - t.w + 3 + cI * ((t.w * 2 - 6) / (cols - 1));
                var by0 = by - 1 + r2 * (t.big ? 5 : 4);
                ctx.fillStyle = "rgba(255,250,222,0.96)";
                ctx.beginPath();
                ctx.arc(bx0, by0, 1.7, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "rgba(255,246,200,0.30)";
                ctx.beginPath();
                ctx.arc(bx0, by0, 3.4, 0, Math.PI * 2);
                ctx.fill();
            }
    });
    // ── Upper deck: crowd, aisles, railings, roof shadow ──
    var stG = ctx.createLinearGradient(0, deckT, 0, deckB);
    stG.addColorStop(0, "#0D141F");
    stG.addColorStop(0.5, "#16202E");
    stG.addColorStop(1, "#1E2B3C");
    ctx.fillStyle = stG;
    ctx.fillRect(0, deckT, W, deckB - deckT);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, deckT, W, 3.5); // roof overhang shadow
    ctx.fillStyle = "#2C3E56";
    ctx.fillRect(0, deckT + 3.5, W, 1);
    var crowdPal = ["#6E7A90", "#8A7460", "#9A5750", "#54668E", "#728672", "#A89470",
        "#4A5470", "#92929F", "#B5A487", "#3E4A64", "#7E6A80"];
    for (var ry = deckT + 7; ry < deckB - 2; ry += 4.4) {
        var depth = (ry - deckT) / (deckB - deckT);
        for (var rx = 2; rx < W; rx += 4.0) {
            if (rnd() < 0.85) {
                ctx.fillStyle = crowdPal[Math.floor(rnd() * crowdPal.length)];
                ctx.globalAlpha = (0.34 + rnd() * 0.34) * (0.55 + depth * 0.55);
                ctx.beginPath();
                ctx.arc(rx + rnd() * 1.5, ry + rnd() * 1.3, 1.3, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    ctx.globalAlpha = 1;
    // a handful of phone screens in the dark — reads instantly as a crowd
    for (var ph2 = 0; ph2 < 16; ph2++) {
        ctx.fillStyle = "rgba(206,228,255," + (0.5 + rnd() * 0.4) + ")";
        ctx.fillRect(rnd() * W, deckT + 8 + rnd() * (deckB - deckT - 12), 1.5, 1.2);
    }
    ctx.fillStyle = "rgba(6,10,16,0.62)";
    [0.155, 0.385, 0.615, 0.845].forEach(function (ax) { ctx.fillRect(W * ax - 2, deckT + 4, 4, deckB - deckT - 4); });
    var washG = ctx.createLinearGradient(0, deckT, 0, deckB);
    washG.addColorStop(0, "rgba(255,234,186,0.13)");
    washG.addColorStop(1, "rgba(255,234,186,0)");
    ctx.fillStyle = washG;
    ctx.fillRect(0, deckT, W, deckB - deckT);
    // ── Center-field scoreboard tucked into the deck ──
    var sbL = W * 0.615, sbR = W * 0.875, sbT = deckT + 8, sbB = deckB - 6;
    ctx.fillStyle = "#060A11";
    ctx.fillRect(sbL, sbT, sbR - sbL, sbB - sbT);
    ctx.strokeStyle = "rgba(120,140,170,0.35)";
    ctx.lineWidth = 1;
    ctx.strokeRect(sbL, sbT, sbR - sbL, sbB - sbT);
    for (var sr = sbT + 4; sr < sbB - 2; sr += 4.2) {
        for (var sc = sbL + 4; sc < sbR - 3; sc += 3.2) {
            if (rnd() < 0.42) {
                ctx.fillStyle = rnd() < 0.78 ? "rgba(255,178,44,0.85)" : "rgba(90,220,120,0.8)";
                ctx.fillRect(sc, sr, 1.6, 1.6);
            }
        }
    }
    var sbGlow = ctx.createRadialGradient((sbL + sbR) / 2, (sbT + sbB) / 2, 2, (sbL + sbR) / 2, (sbT + sbB) / 2, 46);
    sbGlow.addColorStop(0, "rgba(255,176,50,0.13)");
    sbGlow.addColorStop(1, "rgba(255,176,50,0)");
    ctx.fillStyle = sbGlow;
    ctx.fillRect(sbL - 40, sbT - 20, (sbR - sbL) + 80, (sbB - sbT) + 40);
    // ── Lower bleachers strip above the wall ──
    var blG = ctx.createLinearGradient(0, bleachT, 0, bleachB);
    blG.addColorStop(0, "#1A2534");
    blG.addColorStop(1, "#0F1A26");
    ctx.fillStyle = blG;
    ctx.fillRect(0, bleachT, W, bleachB - bleachT);
    for (var by2 = bleachT + 3; by2 < bleachB - 1; by2 += 4.2) {
        for (var bx2 = 2; bx2 < W; bx2 += 4.6) {
            if (rnd() < 0.6) {
                ctx.fillStyle = crowdPal[Math.floor(rnd() * crowdPal.length)];
                ctx.globalAlpha = 0.28 + rnd() * 0.25;
                ctx.beginPath();
                ctx.arc(bx2, by2, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    ctx.globalAlpha = 1;
    // ── Outfield wall: padding, seams, ad panels, distance markers ──
    var wG = ctx.createLinearGradient(0, wallT, 0, wallB);
    wG.addColorStop(0, "#0F4020");
    wG.addColorStop(0.55, "#0C3319");
    wG.addColorStop(1, "#082712");
    ctx.fillStyle = wG;
    ctx.fillRect(0, wallT, W, wallB - wallT);
    ctx.fillStyle = "#F0CC2E";
    ctx.fillRect(0, wallT, W, 2.6);
    ctx.fillStyle = "rgba(255,240,160,0.28)";
    ctx.fillRect(0, wallT + 2.6, W, 1.2);
    ctx.strokeStyle = "rgba(255,255,255,0.055)";
    ctx.lineWidth = 1;
    for (var sx2 = 0; sx2 < W; sx2 += W / 12) {
        ctx.beginPath();
        ctx.moveTo(sx2, wallT + 4);
        ctx.lineTo(sx2, wallB);
        ctx.stroke();
    }
    ctx.fillStyle = "rgba(226,238,255,0.055)";
    ctx.fillRect(W * 0.05, wallT + 9, W * 0.15, wallB - wallT - 17);
    ctx.fillRect(W * 0.80, wallT + 9, W * 0.15, wallB - wallT - 17);
    ctx.font = "600 8px sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(238,244,232,0.30)";
    ctx.fillText("382", W * 0.24, wallB - 6);
    ctx.fillText("398", W * 0.76, wallB - 6);
    ctx.textAlign = "left";
    // batter's eye — the dark center panel real parks use
    ctx.fillStyle = "#06200E";
    ctx.fillRect(W * 0.395, wallT + 2.6, W * 0.21, wallB - wallT - 2.6);
    ctx.strokeStyle = "rgba(0,0,0,0.5)";
    ctx.lineWidth = 1;
    ctx.strokeRect(W * 0.395, wallT + 2.6, W * 0.21, wallB - wallT - 2.6);
    // ── Foul poles ──
    [0.038, 0.962].forEach(function (fp) {
        var px = W * fp;
        ctx.fillStyle = "rgba(255,214,58,0.16)";
        ctx.fillRect(px - 3, H * 0.026, 6, wallT - H * 0.026);
        ctx.fillStyle = "#FFD63A";
        ctx.fillRect(px - 1.2, H * 0.026, 2.4, wallT - H * 0.026 + 3);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillRect(px - 1.2, H * 0.026, 0.8, wallT - H * 0.026);
    });
    // ── Warning track ──
    var trG = ctx.createLinearGradient(0, trackT, 0, trackB);
    trG.addColorStop(0, "#6B5336");
    trG.addColorStop(1, "#7E6342");
    ctx.fillStyle = trG;
    ctx.fillRect(0, trackT, W, trackB - trackT);
    for (var tk = 0; tk < 180; tk++) {
        ctx.fillStyle = rnd() < 0.5 ? "rgba(40,28,14,0.20)" : "rgba(255,232,196,0.10)";
        ctx.fillRect(rnd() * W, trackT + rnd() * (trackB - trackT), 1.4, 1);
    }
    // ── Outfield turf: gradient, radial mow rings, blade texture ──
    var grassG = ctx.createLinearGradient(0, grsT, 0, grsB);
    grassG.addColorStop(0, "#124A1A");
    grassG.addColorStop(0.45, "#1D7024");
    grassG.addColorStop(1, "#28882F");
    ctx.fillStyle = grassG;
    ctx.fillRect(0, grsT, W, grsB - grsT);
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, grsT, W, grsB - grsT);
    ctx.clip();
    var mowCx = W / 2, mowCy = H * 0.95;
    for (var mr = H * 0.44, mi = 0; mr < H * 0.96; mr += H * 0.040, mi++) {
        ctx.strokeStyle = mi % 2 === 0 ? "rgba(224,255,214,0.048)" : "rgba(0,26,6,0.058)";
        ctx.lineWidth = H * 0.020;
        ctx.beginPath();
        ctx.arc(mowCx, mowCy, mr, Math.PI, Math.PI * 2);
        ctx.stroke();
    }
    for (var gb = 0; gb < 1400; gb++) {
        var gx = rnd() * W, gy = grsT + rnd() * (grsB - grsT);
        ctx.strokeStyle = rnd() < 0.5 ? "rgba(0,40,10,0.10)" : "rgba(190,255,180,0.075)";
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(gx, gy);
        ctx.lineTo(gx + (rnd() - 0.5) * 1.2, gy - 1.4 - rnd());
        ctx.stroke();
    }
    ctx.restore();
    // ── Volumetric beams from the light banks: the park's signature look ──
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    TOWERS.forEach(function (t) {
        var lx = W * t.x, ly = t.y + 4;
        var reach = t.big ? H * 0.56 : H * 0.44;
        var g2 = ctx.createLinearGradient(lx, ly, lx, ly + reach);
        g2.addColorStop(0, "rgba(255,244,206," + (t.big ? 0.16 : 0.10) + ")");
        g2.addColorStop(0.30, "rgba(255,238,192," + (t.big ? 0.075 : 0.05) + ")");
        g2.addColorStop(1, "rgba(255,236,190,0)");
        ctx.fillStyle = g2;
        var spread = t.big ? 128 : 92, aim = (W / 2 - lx) * 0.55;
        ctx.beginPath();
        ctx.moveTo(lx - (t.big ? 15 : 10), ly);
        ctx.lineTo(lx + (t.big ? 15 : 10), ly);
        ctx.lineTo(lx + aim + spread, ly + reach);
        ctx.lineTo(lx + aim - spread, ly + reach);
        ctx.closePath();
        ctx.fill();
    });
    // pools of light where the beams land on the turf
    [[0.22, 0.40], [0.78, 0.40], [0.50, 0.36]].forEach(function (p3) {
        var pg = ctx.createRadialGradient(W * p3[0], H * p3[1], 4, W * p3[0], H * p3[1], W * 0.40);
        pg.addColorStop(0, "rgba(255,244,208,0.085)");
        pg.addColorStop(1, "rgba(255,244,208,0)");
        ctx.fillStyle = pg;
        ctx.fillRect(0, grsT - 10, W, H);
    });
    ctx.restore();
    // ── Atmospheric haze band: pushes the outfield back in depth ──
    var hz = ctx.createLinearGradient(0, wallT - 6, 0, grsT + H * 0.10);
    hz.addColorStop(0, "rgba(150,178,205,0.13)");
    hz.addColorStop(1, "rgba(150,178,205,0)");
    ctx.fillStyle = hz;
    ctx.fillRect(0, wallT - 6, W, grsT + H * 0.10 - wallT);
    // ── Infield clay (perspective trapezoid) ──
    var dirtPath = function () {
        ctx.beginPath();
        ctx.moveTo(W * 0.20, H * 0.40);
        ctx.lineTo(W * 0.80, H * 0.40);
        ctx.lineTo(W * 1.4, H);
        ctx.lineTo(-W * 0.4, H);
        ctx.closePath();
    };
    var dirtG = ctx.createLinearGradient(0, H * 0.40, 0, H);
    dirtG.addColorStop(0, "#7A6440");
    dirtG.addColorStop(0.32, "#987E4C");
    dirtG.addColorStop(0.66, "#AE9159");
    dirtG.addColorStop(1, "#9B8352");
    dirtPath();
    ctx.fillStyle = dirtG;
    ctx.fill();
    ctx.save();
    dirtPath();
    ctx.clip();
    for (var sp = 0; sp < 620; sp++) {
        var px2 = rnd() * W * 1.6 - W * 0.3, py2 = H * 0.40 + rnd() * H * 0.6;
        ctx.fillStyle = rnd() < 0.5 ? "rgba(56,40,20,0.11)" : "rgba(255,242,214,0.075)";
        ctx.fillRect(px2, py2, 1.5 + rnd() * 1.7, 1 + rnd());
    }
    ctx.strokeStyle = "rgba(0,0,0,0.045)";
    ctx.lineWidth = 3;
    for (var da = 0; da < 6; da++) {
        ctx.beginPath();
        ctx.ellipse(W / 2, H * 0.84, 58 + da * 32, 17 + da * 10, 0, Math.PI * 1.05, Math.PI * 1.95);
        ctx.stroke();
    }
    // cleat scuffs around the plate — where every batter digs in
    for (var cs = 0; cs < 46; cs++) {
        var cx3 = W / 2 + (rnd() - 0.5) * 150, cy3 = plateY - 24 + rnd() * 52;
        ctx.strokeStyle = "rgba(58,42,22,0.13)";
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(cx3, cy3);
        ctx.lineTo(cx3 + (rnd() - 0.5) * 7, cy3 + rnd() * 3);
        ctx.stroke();
    }
    // on-deck circles
    [-1, 1].forEach(function (sd) {
        ctx.strokeStyle = "rgba(238,240,226,0.14)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.ellipse(W / 2 + sd * W * 0.42, H * 0.70, 24, 8, 0, 0, Math.PI * 2);
        ctx.stroke();
    });
    ctx.restore();
    // ── Infield grass arc by the mound ──
    ctx.fillStyle = "#26802F";
    ctx.beginPath();
    ctx.ellipse(W / 2, H * 0.42, W * 0.245, H * 0.062, 0, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(226,255,214,0.05)";
    ctx.beginPath();
    ctx.ellipse(W / 2, H * 0.42, W * 0.165, H * 0.042, 0, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(0,30,8,0.20)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(W / 2, H * 0.42, W * 0.245, H * 0.062, 0, Math.PI, Math.PI * 2);
    ctx.stroke();
    // ── Chalk baselines: bright, slightly dusty, with a soft bloom ──
    var chalkLine = function (x1, y1, x2, y2) {
        ctx.strokeStyle = "rgba(255,255,255,0.09)";
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.strokeStyle = "rgba(248,250,240,0.40)";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.55)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    };
    chalkLine(W / 2 - 16, H * 0.83, W * 0.10, H * 0.405);
    chalkLine(W / 2 + 16, H * 0.83, W * 0.90, H * 0.405);
    // ── Mound ──
    ctx.fillStyle = "rgba(0,0,0,0.14)";
    ctx.beginPath();
    ctx.ellipse(W / 2, moundY + 4, 46, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    var mG = ctx.createRadialGradient(W / 2 - 8, moundY - 5, 2, W / 2, moundY, 44);
    mG.addColorStop(0, "#B39262");
    mG.addColorStop(0.62, "#8C7249");
    mG.addColorStop(1, "rgba(108,86,54,0.12)");
    ctx.fillStyle = mG;
    ctx.beginPath();
    ctx.ellipse(W / 2, moundY, 43, 14.5, 0, 0, Math.PI * 2);
    ctx.fill();
    // landing hole in front of the rubber
    ctx.fillStyle = "rgba(58,44,24,0.22)";
    ctx.beginPath();
    ctx.ellipse(W / 2 + 3, moundY + 6, 11, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#DEDAD2";
    ctx.fillRect(W / 2 - 8, moundY - 1.5, 16, 3);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillRect(W / 2 - 8, moundY - 1.5, 16, 0.9);
    ctx.fillStyle = "rgba(0,0,0,0.22)";
    ctx.fillRect(W / 2 - 8, moundY + 1.2, 16, 1.2);
    // ── Plate area: dirt halo, boxes, catcher's box, home plate ──
    var pdG = ctx.createRadialGradient(W / 2, plateY + 8, 2, W / 2, plateY + 8, 100);
    pdG.addColorStop(0, "rgba(158,128,78,0.24)");
    pdG.addColorStop(1, "rgba(80,65,40,0)");
    ctx.fillStyle = pdG;
    ctx.beginPath();
    ctx.ellipse(W / 2, plateY + 8, 114, 36, 0, 0, Math.PI * 2);
    ctx.fill();
    var box = function (x, y, w, h) {
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 4.5;
        ctx.strokeRect(x, y, w, h);
        ctx.strokeStyle = "rgba(248,250,240,0.30)";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, w, h);
    };
    box(W / 2 - 56, plateY - 26, 32, 48);
    box(W / 2 + 24, plateY - 26, 32, 48);
    ctx.strokeStyle = "rgba(248,250,240,0.24)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 20, plateY + 14);
    ctx.lineTo(W / 2 - 20, plateY + 52);
    ctx.moveTo(W / 2 + 20, plateY + 14);
    ctx.lineTo(W / 2 + 20, plateY + 52);
    ctx.stroke();
    var hpG = ctx.createLinearGradient(W / 2, plateY - 7, W / 2, plateY + 10);
    hpG.addColorStop(0, "#FAF7EE");
    hpG.addColorStop(0.55, "#E4DFD1");
    hpG.addColorStop(1, "#BEB8A6");
    ctx.fillStyle = hpG;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 14, plateY - 7);
    ctx.lineTo(W / 2 + 14, plateY - 7);
    ctx.lineTo(W / 2 + 14, plateY + 2);
    ctx.lineTo(W / 2, plateY + 10);
    ctx.lineTo(W / 2 - 14, plateY + 2);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "rgba(56,46,32,0.5)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.fillRect(W / 2 - 14, plateY - 7, 28, 1.2);
    BG_CACHE = c;
    BG_KEY = key;
    return c;
}
/* ═══ GAME CANVAS — night-game broadcast view ═══ */
function GameCanvas({ pitch, prog, wPhase, kit }) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var c = ref.current;
        if (!c)
            return;
        var W = CW, H = CH;
        var ctx = prepCanvas(c, W, H);
        // ── Camera shake: a short kick on bat contact and a lighter one on
        //    the mitt pop. Derived from prog so it never desyncs from play. ──
        var shake = 0;
        if (pitch && pitch.swing && pitch.out !== "miss" && prog >= CONTACT_P)
            shake = Math.max(0, 1 - (prog - CONTACT_P) / 0.11) * (pitch.out === "hr" ? 4.2 : 2.6);
        else if (pitch && (!pitch.swing || pitch.out === "miss") && prog >= 0.93)
            shake = Math.max(0, 1 - (prog - 0.93) / 0.09) * 1.3;
        ctx.save();
        if (shake > 0.02)
            ctx.translate(Math.sin(prog * 271) * shake, Math.cos(prog * 331) * shake * 0.7);
        ctx.clearRect(-8, -8, W + 16, H + 16);
        ctx.drawImage(buildBackground(W, H), 0, 0, W, H);
        var moundY = H * 0.34;
        var plateY = H * 0.82;
        var K = kit || kits(0);
        var UB = uni(K.bat), UF = uni(K.fld); // batting side / fielding side
        var lerp = function (a, b, t) { return a + (b - a) * t; };
        var lerpP = function (a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)]; };
        var limb = function (x1, y1, x2, y2, w1, w2, fill) {
            var dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
            var nx = -dy / L, ny = dx / L;
            ctx.fillStyle = fill;
            ctx.beginPath();
            ctx.moveTo(x1 + nx * w1, y1 + ny * w1);
            ctx.lineTo(x2 + nx * w2, y2 + ny * w2);
            ctx.lineTo(x2 - nx * w2, y2 - ny * w2);
            ctx.lineTo(x1 - nx * w1, y1 - ny * w1);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x1, y1, w1, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x2, y2, w2, 0, Math.PI * 2);
            ctx.fill();
        };
        // thin rim light along a limb, as if lit from the tower behind
        var rim = function (x1, y1, x2, y2, w) {
            var dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
            var nx = -dy / L * w, ny = dx / L * w;
            ctx.strokeStyle = "rgba(196,220,255,0.20)";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(x1 + nx, y1 + ny);
            ctx.lineTo(x2 + nx, y2 + ny);
            ctx.stroke();
        };
        var easedG = 0;
        if (pitch && prog > 0) {
            var tG0 = Math.min(prog, 1);
            easedG = tG0 < 0.12 ? (tG0 / 0.12) * 0.05 : 0.05 + ((tG0 - 0.12) / 0.88) * 0.95;
        }
        /* ── PITCHER — keyframed full-body delivery with tapered limbs.
           Joint positions (not stick angles) are keyframed through the real
           phases of a delivery: set → leg lift → stride/arm break → cocked →
           release → follow-through, with smoothstep blending between poses. ── */
        var PK = [
            { t: 0.00, lean: 0, drop: 0, lK: [3, 7], lF: [4, 14], bK: [-3, 7], bF: [-4, 14], tE: [-5, -7], tH: [-1, -9], gE: [5, -7], gH: [0, -9], ball: 0, dip: 0 },
            { t: 0.30, lean: -1.2, drop: 0.5, lK: [5.5, -3], lF: [4.5, 3], bK: [-2.5, 7], bF: [-3.5, 14], tE: [-5, -7], tH: [-1, -9], gE: [5, -7], gH: [0, -9], ball: 0, dip: 0 },
            { t: 0.55, lean: 0, drop: 2.5, lK: [6, 6], lF: [10, 13], bK: [-3, 8], bF: [-4, 14], tE: [-7, -5], tH: [-11, -12], gE: [6, -9], gH: [9.5, -8], ball: 1, dip: 0 },
            { t: 0.70, lean: 0.6, drop: 3, lK: [7, 7], lF: [11, 14], bK: [-3, 9], bF: [-4.5, 14], tE: [-8, -13], tH: [-6, -20], gE: [6, -10], gH: [7, -13], ball: 1, dip: 0 },
            { t: 0.84, lean: 2.2, drop: 3.5, lK: [7, 7], lF: [11, 14], bK: [-4, 10], bF: [-6, 14], tE: [-2, -16], tH: [2, -21], gE: [4, -6], gH: [2, -3], ball: 0, dip: 0.8 },
            { t: 1.00, lean: 3.2, drop: 4, lK: [7, 7], lF: [11, 14], bK: [-2, 2], bF: [-8, -2], tE: [5, -7], tH: [9, -1], gE: [3, -5], gH: [1, -2], ball: 0, dip: 1.8 }
        ];
        var drawPitcher = function (wp2) {
            var pose = PK[PK.length - 1];
            if (wp2 < 1) {
                for (var ki = 0; ki < PK.length - 1; ki++) {
                    if (wp2 >= PK[ki].t && wp2 <= PK[ki + 1].t) {
                        var seg = (wp2 - PK[ki].t) / (PK[ki + 1].t - PK[ki].t);
                        seg = seg * seg * (3 - 2 * seg);
                        var A = PK[ki], B = PK[ki + 1];
                        pose = { lean: lerp(A.lean, B.lean, seg), drop: lerp(A.drop, B.drop, seg),
                            lK: lerpP(A.lK, B.lK, seg), lF: lerpP(A.lF, B.lF, seg),
                            bK: lerpP(A.bK, B.bK, seg), bF: lerpP(A.bF, B.bF, seg),
                            tE: lerpP(A.tE, B.tE, seg), tH: lerpP(A.tH, B.tH, seg),
                            gE: lerpP(A.gE, B.gE, seg), gH: lerpP(A.gH, B.gH, seg),
                            ball: seg < 0.5 ? A.ball : B.ball, dip: lerp(A.dip, B.dip, seg) };
                        break;
                    }
                }
            }
            ctx.save();
            ctx.translate(W / 2, moundY - 16);
            var PANT = UF.pM, PANTD = UF.pD, SKIN = UF.skin, SLV = UF.slv;
            var shY = -12 + pose.drop * 0.5, shX = pose.lean * 0.8;
            // dust kicked up by the plant foot right around release
            if (wp2 > 0.78) {
                var dz = Math.min(1, (wp2 - 0.78) / 0.22);
                ctx.fillStyle = "rgba(186,158,110," + (0.24 * (1 - dz * 0.5)) + ")";
                ctx.beginPath();
                ctx.ellipse(pose.lF[0] + 2, pose.lF[1] + 1, 5 + dz * 7, 2 + dz * 2.4, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.fillStyle = "rgba(0,0,0,0.34)";
            ctx.beginPath();
            ctx.ellipse(1, 15, 12.5, 3.1, 0, 0, Math.PI * 2);
            ctx.fill();
            limb(-2.5, 0, pose.bK[0], pose.bK[1], 2.8, 2.2, PANTD);
            limb(pose.bK[0], pose.bK[1], pose.bF[0], pose.bF[1], 2.1, 1.4, PANTD);
            ctx.fillStyle = "#1E222A";
            ctx.beginPath();
            ctx.ellipse(pose.bF[0], pose.bF[1] + 0.5, 2.6, 1.4, 0, 0, Math.PI * 2);
            ctx.fill();
            var tG = ctx.createLinearGradient(shX - 5, shY, 4, 1);
            tG.addColorStop(0, UF.jL);
            tG.addColorStop(0.6, UF.jM);
            tG.addColorStop(1, UF.jD);
            ctx.fillStyle = tG;
            ctx.beginPath();
            ctx.moveTo(-4, 1);
            ctx.lineTo(4, 1);
            ctx.lineTo(shX + 5, shY);
            ctx.lineTo(shX - 5, shY);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(shX, shY, 5, 2.4, 0, Math.PI, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "rgba(0,0,0,0.09)";
            ctx.beginPath();
            ctx.moveTo(shX + 5, shY);
            ctx.lineTo(4, 1);
            ctx.lineTo(1.5, 1);
            ctx.lineTo(shX + 2, shY);
            ctx.closePath();
            ctx.fill();
            // jersey placket + piping
            ctx.strokeStyle = UF.trim;
            ctx.globalAlpha = 0.5;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(shX * 0.5, shY + 1);
            ctx.lineTo(0, 1);
            ctx.stroke();
            ctx.globalAlpha = 1;
            ctx.fillStyle = UF.belt;
            ctx.fillRect(-4, -0.4, 8, 1.9);
            limb(2.5, 0, pose.lK[0], pose.lK[1], 2.8, 2.2, PANT);
            limb(pose.lK[0], pose.lK[1], pose.lF[0], pose.lF[1], 2.1, 1.4, PANT);
            ctx.fillStyle = "#1E222A";
            ctx.beginPath();
            ctx.ellipse(pose.lF[0], pose.lF[1] + 0.5, 2.6, 1.4, 0, 0, Math.PI * 2);
            ctx.fill();
            var hX = shX + pose.lean * 0.25, hY = shY - 5.4 + pose.dip;
            ctx.fillStyle = SKIN;
            var neckH = Math.max(0, shY - (hY + 3.2) + 1.2);
            ctx.fillRect(hX - 1.2, hY + 3.2, 2.4, neckH);
            ctx.beginPath();
            ctx.arc(hX, hY, 3.6, 0, Math.PI * 2);
            ctx.fill();
            var capG = ctx.createLinearGradient(hX - 3, hY - 4, hX + 3, hY + 1);
            capG.addColorStop(0, UF.capL);
            capG.addColorStop(1, UF.capD);
            ctx.fillStyle = capG;
            ctx.beginPath();
            ctx.arc(hX, hY - 0.6, 3.7, Math.PI * 0.95, Math.PI * 2.05);
            ctx.fill();
            ctx.fillRect(hX - 3.7, hY - 1.4, 7.4, 1.1);
            ctx.strokeStyle = "rgba(180,205,255,0.30)";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.arc(hX, hY - 0.9, 3.2, Math.PI * 1.05, Math.PI * 1.6);
            ctx.stroke();
            limb(shX + 4.2, shY + 0.6, pose.gE[0], pose.gE[1], 1.9, 1.6, SLV);
            limb(pose.gE[0], pose.gE[1], pose.gH[0], pose.gH[1], 1.5, 1.1, SKIN);
            var glG = ctx.createRadialGradient(pose.gH[0] - 1, pose.gH[1] - 1, 0.5, pose.gH[0], pose.gH[1], 3);
            glG.addColorStop(0, "#7C4E1E");
            glG.addColorStop(1, "#4B2C0E");
            ctx.fillStyle = glG;
            ctx.beginPath();
            ctx.arc(pose.gH[0], pose.gH[1], 2.9, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(200,150,80,0.55)";
            ctx.lineWidth = 0.6;
            ctx.stroke();
            limb(shX - 4.2, shY + 0.6, pose.tE[0], pose.tE[1], 1.9, 1.6, SLV);
            limb(pose.tE[0], pose.tE[1], pose.tH[0], pose.tH[1], 1.5, 1.1, SKIN);
            rim(shX - 4.2, shY + 0.6, pose.tE[0], pose.tE[1], 1.9);
            if (pose.ball) {
                ctx.fillStyle = "#F8F3E7";
                ctx.beginPath();
                ctx.arc(pose.tH[0], pose.tH[1], 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        };
        drawPitcher(wPhase);
        /* ── BATTER (colored, shaded, on near side of plate) ── */
        var bIsRight = curBat === "right";
        var bCx = bIsRight ? W / 2 + 50 : W / 2 - 50;
        var bf = bIsRight ? 1 : -1;
        var bFeet = plateY + 22;
        var bKnees = plateY - 6;
        var bWaist = plateY - 34;
        var bChest = plateY - 56;
        var bShldr = plateY - 60;
        var bHead = plateY - 78;
        /* ── LOWER BODY: load, leg kick, stride, plant, back-foot pivot ──
           Every hitter loads and strides at the pitch whether he ends up
           swinging or not, so the legs by themselves never give the call
           away — it's the bat and the back-foot spin that separate a hack
           from a take. The load starts with the pitcher's delivery, the
           front foot lands as the ball arrives, and on a swing the back heel
           comes up onto the toe as the hips clear.
    
           Knee and foot positions are keyframed rather than solved, because
           a leg kick rotates mostly in depth: from this camera the raised
           thigh really is foreshortened, the same way the pitcher's is. ── */
        var legT, settle = 0;
        if (!pitch || prog <= 0)
            legT = (wPhase || 0) * 0.16; // rocking into the load
        else {
            var eG2 = easedG;
            var full = eG2 <= 0.84 ? 0.16 + (eG2 / 0.84) * 0.34
                : 0.50 + Math.min(1, (eG2 - 0.84) / 0.16) * 0.50;
            if (pitch.swing)
                legT = full;
            else {
                legT = Math.min(full, pitch.check ? 0.58 : 0.50); // strides, then holds
                // Once the ball is by him he resets his feet. This has to blend
                // STRAIGHT to the stance pose rather than rewinding the timeline —
                // running it backwards would replay the stride and the leg kick, and
                // his front foot would come off the dirt a second time.
                if (prog > 1)
                    settle = Math.min((prog - 1) / 0.55, 1);
            }
        }
        var HY = bWaist + 8, GY = bFeet + 2; // hip line and the dirt
        // dx/dy shift the whole upper body; knee y is off HY, foot y off GY
        var LEGK = [
            { t: 0.00, dx: 0.0, dy: 0.0, lK: [-8, 24], lF: [-9, 0], bK: [9, 24], bF: [11, 0], toe: 0.00, air: 0 },
            { t: 0.18, dx: 1.8, dy: 2.2, lK: [2, 8], lF: [6, -18], bK: [10, 26], bF: [11, 0], toe: 0.04, air: 1 },
            { t: 0.34, dx: 0.9, dy: 2.8, lK: [-6, 18], lF: [-15, -7], bK: [9, 27], bF: [11, 0], toe: 0.10, air: 1 },
            { t: 0.50, dx: -1.5, dy: 1.0, lK: [-11, 25], lF: [-16, 0], bK: [7, 23], bF: [11, 0], toe: 0.45, air: 0 },
            { t: 0.75, dx: -3.0, dy: 0.0, lK: [-12, 26], lF: [-16, 0], bK: [2, 23], bF: [10, -2], toe: 0.85, air: 0 },
            { t: 1.00, dx: -4.2, dy: -1.0, lK: [-12, 26], lF: [-16, 0], bK: [-1, 24], bF: [9, -4], toe: 1.00, air: 0 }
        ];
        var legPose = LEGK[LEGK.length - 1];
        if (legT < 1) {
            for (var li = 0; li < LEGK.length - 1; li++) {
                if (legT >= LEGK[li].t && legT <= LEGK[li + 1].t) {
                    var lsg = (legT - LEGK[li].t) / (LEGK[li + 1].t - LEGK[li].t);
                    lsg = lsg * lsg * (3 - 2 * lsg);
                    var LA = LEGK[li], LB = LEGK[li + 1];
                    legPose = { dx: lerp(LA.dx, LB.dx, lsg), dy: lerp(LA.dy, LB.dy, lsg),
                        lK: lerpP(LA.lK, LB.lK, lsg), lF: lerpP(LA.lF, LB.lF, lsg),
                        bK: lerpP(LA.bK, LB.bK, lsg), bF: lerpP(LA.bF, LB.bF, lsg),
                        toe: lerp(LA.toe, LB.toe, lsg), air: lerp(LA.air, LB.air, lsg) };
                    break;
                }
            }
        }
        if (settle > 0) {
            var sm = settle * settle * (3 - 2 * settle);
            var ST = LEGK[0];
            legPose = { dx: lerp(legPose.dx, ST.dx, sm), dy: lerp(legPose.dy, ST.dy, sm),
                lK: lerpP(legPose.lK, ST.lK, sm), lF: lerpP(legPose.lF, ST.lF, sm),
                bK: lerpP(legPose.bK, ST.bK, sm), bF: lerpP(legPose.bF, ST.bF, sm),
                toe: lerp(legPose.toe, ST.toe, sm), air: lerp(legPose.air, 0, sm) };
        }
        var bodyDx = legPose.dx, bodyDy = legPose.dy;
        ctx.save();
        ctx.translate(bCx, 0);
        var pantsG = ctx.createLinearGradient(-16, bWaist, 16, bFeet);
        pantsG.addColorStop(0, UB.pL);
        pantsG.addColorStop(0.5, UB.pM);
        pantsG.addColorStop(1, UB.pD);
        var hipLx = (-6 + bodyDx) * bf, hipBx = (6 + bodyDx) * bf, hipY = HY + bodyDy;
        var lKx = (legPose.lK[0] + bodyDx) * bf, lKy = HY + legPose.lK[1] + bodyDy;
        var lFx = legPose.lF[0] * bf, lFy = GY + legPose.lF[1];
        var bKx = (legPose.bK[0] + bodyDx) * bf, bKy = HY + legPose.bK[1] + bodyDy;
        var bFx = legPose.bF[0] * bf, bFy = GY + legPose.bF[1];
        // a cleat, rotated up onto its toe as the heel lifts
        var cleat = function (fx, fy, toe) {
            ctx.save();
            ctx.translate(fx - 5 * bf, fy);
            ctx.rotate(-toe * 0.62 * bf);
            ctx.fillStyle = shade(UB.cap, -0.35);
            ctx.beginPath();
            ctx.moveTo(0, 2.6);
            ctx.lineTo(10 * bf, 2.6);
            ctx.lineTo(10 * bf, -1);
            ctx.quadraticCurveTo(5 * bf, -2.5, 0, -1.7);
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle = "rgba(214,228,255,0.15)";
            ctx.fillRect(0, 1.2, 10 * bf, 1.1);
            ctx.restore();
        };
        var pantStripe = function (x1, y1, x2, y2, x3, y3) {
            ctx.strokeStyle = UB.seam;
            ctx.globalAlpha = 0.30;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x3, y3);
            ctx.stroke();
            ctx.globalAlpha = 1;
        };
        // ground shadows, one per foot — they shrink when a foot is in the air
        ctx.fillStyle = "rgba(0,0,0,0.34)";
        ctx.beginPath();
        ctx.ellipse(bFx, GY + 3, 11, 3.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1 - legPose.air * 0.6;
        ctx.beginPath();
        ctx.ellipse(lFx, GY + 3, 10 - legPose.air * 2, 3.2 - legPose.air, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        // toe drag mark when the back heel comes up
        if (legPose.toe > 0.5) {
            ctx.fillStyle = "rgba(186,158,110," + (0.22 * (legPose.toe - 0.5) / 0.5) + ")";
            ctx.beginPath();
            ctx.ellipse(bFx + 4 * bf, GY + 2, 7, 2.4, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        // dust kicked up when the front foot lands (on the dirt, under the leg)
        if (legT > 0.44 && legT < 0.74) {
            var dz2 = (legT - 0.44) / 0.30;
            ctx.fillStyle = "rgba(186,158,110," + (0.28 * (1 - dz2)) + ")";
            ctx.beginPath();
            ctx.ellipse(lFx, lFy + 1, 6 + dz2 * 11, 2.2 + dz2 * 2.8, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        /* ── LOWER BODY: one piece of cloth.
           The seat and both legs are filled as a single silhouette with one
           gradient, on an offscreen canvas, and every bit of form — the far
           leg turning away, the seat's crown, the hem shadow, the inseam —
           is painted on afterwards with source-atop so it can only land on
           the pants. Nothing is outlined, so there is no seam where the
           seat meets a thigh: the legs grow out of the hips because they
           are literally the same shape. Order inside the union still puts
           the lead leg over the hip, and the far leg's shade is applied
           before the lead leg goes down so it never darkens the near thigh. ── */
        var dLB = dprOf(), LBW = 96, LBH = 84, LBY = bWaist - 6;
        if (!LB_CACHE)
            LB_CACHE = document.createElement("canvas");
        if (LB_CACHE.width !== Math.round(LBW * dLB) || LB_CACHE.height !== Math.round(LBH * dLB)) {
            LB_CACHE.width = Math.round(LBW * dLB);
            LB_CACHE.height = Math.round(LBH * dLB);
        }
        if (!LB_MASK)
            LB_MASK = document.createElement("canvas");
        if (LB_MASK.width !== LB_CACHE.width || LB_MASK.height !== LB_CACHE.height) {
            LB_MASK.width = LB_CACHE.width;
            LB_MASK.height = LB_CACHE.height;
        }
        var oc = LB_CACHE.getContext("2d"), om = LB_MASK.getContext("2d");
        oc.setTransform(1, 0, 0, 1, 0, 0);
        om.setTransform(1, 0, 0, 1, 0, 0);
        oc.clearRect(0, 0, LB_CACHE.width, LB_CACHE.height);
        om.clearRect(0, 0, LB_MASK.width, LB_MASK.height);
        // same coordinate frame as the main ctx here: x about the batter, y absolute
        oc.setTransform(dLB, 0, 0, dLB, LBW / 2 * dLB, -LBY * dLB);
        om.setTransform(dLB, 0, 0, dLB, LBW / 2 * dLB, -LBY * dLB);
        oc.globalCompositeOperation = "source-over";
        om.globalCompositeOperation = "source-over";
        var limbOn = function (c, x1, y1, x2, y2, w1, w2, fill) {
            var dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
            var nx = -dy / L, ny = dx / L;
            c.fillStyle = fill;
            c.beginPath();
            c.moveTo(x1 + nx * w1, y1 + ny * w1);
            c.lineTo(x2 + nx * w2, y2 + ny * w2);
            c.lineTo(x2 - nx * w2, y2 - ny * w2);
            c.lineTo(x1 - nx * w1, y1 - ny * w1);
            c.closePath();
            c.fill();
            c.beginPath();
            c.arc(x1, y1, w1, 0, Math.PI * 2);
            c.fill();
            c.beginPath();
            c.arc(x2, y2, w2, 0, Math.PI * 2);
            c.fill();
        };
        var pantsO = oc.createLinearGradient(-16, bWaist, 16, bFeet);
        pantsO.addColorStop(0, UB.pL);
        pantsO.addColorStop(0.5, UB.pM);
        pantsO.addColorStop(1, UB.pD);
        var pelvisPath = function (c) {
            c.beginPath();
            c.moveTo(0, bWaist + 12.5);
            c.quadraticCurveTo(-7.5 * bf, bWaist + 13.6, -11.4 * bf, bWaist + 9);
            c.bezierCurveTo(-12.6 * bf, bWaist + 6, -12.3 * bf, bWaist + 2.5, -11.2 * bf, bWaist);
            c.lineTo(11.2 * bf, bWaist);
            c.bezierCurveTo(12.5 * bf, bWaist + 2.8, 13.5 * bf, bWaist + 7.5, 11.8 * bf, bWaist + 10.6);
            c.quadraticCurveTo(7.5 * bf, bWaist + 13.8, 0, bWaist + 12.5);
            c.closePath();
        };
        // 1. far leg
        limbOn(oc, hipBx, hipY, bKx, bKy, 5.4, 3.6, pantsO);
        limbOn(oc, bKx, bKy, bFx, bFy, 3.2, 2.4, pantsO);
        // 2. seat, riding the weight shift with the torso
        oc.save();
        oc.translate(bodyDx * bf, bodyDy);
        pelvisPath(oc);
        oc.fillStyle = pantsO;
        oc.fill();
        oc.restore();
        // 3. far leg turns away from the light: fades in from nothing at the
        //    hip so it melts into the seat instead of butting against it.
        //    The leg is stamped solid on a mask first, then the gradient is
        //    keyed into it with source-in — one flat layer of shade, so the
        //    overlapping joint circles can't stack up into dark blobs.
        limbOn(om, hipBx, hipY, bKx, bKy, 5.4, 3.6, "#000");
        limbOn(om, bKx, bKy, bFx, bFy, 3.2, 2.4, "#000");
        om.globalCompositeOperation = "source-in";
        var farG = om.createLinearGradient(0, hipY, 0, bFy);
        farG.addColorStop(0, "rgba(10,14,22,0)");
        farG.addColorStop(0.30, "rgba(10,14,22,0.24)");
        farG.addColorStop(1, "rgba(10,14,22,0.28)");
        om.fillStyle = farG;
        om.fillRect(-LBW / 2, LBY, LBW, LBH);
        om.globalCompositeOperation = "source-over";
        oc.globalCompositeOperation = "source-atop";
        oc.drawImage(LB_MASK, -LBW / 2, LBY, LBW, LBH);
        // 4. lead leg, over the hip
        oc.globalCompositeOperation = "source-over";
        limbOn(oc, hipLx, hipY, lKx, lKy, 5.4, 3.7, pantsO);
        limbOn(oc, lKx, lKy, lFx, lFy, 3.3, 2.5, pantsO);
        // 5. form, painted only where cloth already is
        oc.globalCompositeOperation = "source-atop";
        oc.save();
        oc.translate(bodyDx * bf, bodyDy);
        var seatG = oc.createRadialGradient(8.4 * bf, bWaist + 4.4, 1, 7.6 * bf, bWaist + 7, 14);
        seatG.addColorStop(0, "rgba(255,255,255,0.16)");
        seatG.addColorStop(0.55, "rgba(255,255,255,0)");
        oc.fillStyle = seatG;
        oc.fillRect(-20, bWaist - 1, 40, 18);
        var seatSh = oc.createRadialGradient(7.6 * bf, bWaist + 7, 7, 7.6 * bf, bWaist + 7, 15);
        seatSh.addColorStop(0, "rgba(0,0,0,0)");
        seatSh.addColorStop(1, "rgba(0,0,0,0.16)");
        oc.fillStyle = seatSh;
        oc.fillRect(-20, bWaist - 1, 40, 18);
        var hipSh = oc.createLinearGradient(0, bWaist, 0, bWaist + 8);
        hipSh.addColorStop(0, "rgba(0,0,0,0.28)"); // jersey hem falling on the pants
        hipSh.addColorStop(1, "rgba(0,0,0,0)");
        oc.fillStyle = hipSh;
        oc.fillRect(-20, bWaist, 40, 9);
        var crotchG = oc.createRadialGradient(0, bWaist + 12.5, 0, 0, bWaist + 12, 7.5);
        crotchG.addColorStop(0, "rgba(0,0,0,0.34)");
        crotchG.addColorStop(1, "rgba(0,0,0,0)");
        oc.fillStyle = crotchG;
        oc.fillRect(-9, bWaist + 4, 18, 14);
        oc.restore();
        // knee caps catch a little light
        [[lKx, lKy, 3.7], [bKx, bKy, 3.6]].forEach(function (kk) {
            var kg = oc.createRadialGradient(kk[0] - 1, kk[1] - 1, 0, kk[0], kk[1], kk[2] + 2);
            kg.addColorStop(0, "rgba(255,255,255,0.10)");
            kg.addColorStop(1, "rgba(255,255,255,0)");
            oc.fillStyle = kg;
            oc.fillRect(kk[0] - 7, kk[1] - 7, 14, 14);
        });
        // a whisper of shade at the ankles so the cuffs sit on the shoes
        [[lFx, lFy], [bFx, bFy]].forEach(function (ff) {
            var ag = oc.createLinearGradient(0, ff[1] - 8, 0, ff[1]);
            ag.addColorStop(0, "rgba(0,0,0,0)");
            ag.addColorStop(1, "rgba(0,0,0,0.20)");
            oc.fillStyle = ag;
            oc.fillRect(ff[0] - 8, ff[1] - 8, 16, 8);
        });
        oc.globalCompositeOperation = "source-over";
        ctx.drawImage(LB_CACHE, -LBW / 2, LBY, LBW, LBH);
        // pant stripes and shoes go on over the finished pants
        pantStripe(hipBx + 3 * bf, hipY, bKx + 2.5 * bf, bKy, bFx + 2 * bf, bFy - 2);
        pantStripe(hipLx - 3 * bf, hipY, lKx - 2.5 * bf, lKy, lFx - 2 * bf, lFy - 2);
        cleat(bFx, bFy, legPose.toe);
        cleat(lFx, lFy, 0);
        // ── everything from the hips up rides the weight shift ──
        ctx.save();
        ctx.translate(bodyDx * bf, bodyDy);
        ctx.fillStyle = pantsG;
        ctx.strokeStyle = UB.seam;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        // Torso only: the seat belongs to the legs now. The path closes just
        // under the belt line so the belt hides the join.
        ctx.moveTo(-11.2 * bf, bWaist + 2);
        ctx.lineTo(-11.2 * bf, bWaist);
        ctx.bezierCurveTo(-14.6 * bf, bWaist - 9, -15.4 * bf, bShldr + 11, -13 * bf, bShldr);
        ctx.lineTo(-12 * bf, bShldr);
        ctx.lineTo(-5, bShldr - 2);
        ctx.lineTo(-5, bHead + 12);
        ctx.arc(0, bHead, 12, Math.PI * 1.1, Math.PI * -0.1, true);
        ctx.lineTo(5, bHead + 12);
        ctx.lineTo(5, bShldr - 2);
        ctx.lineTo(12 * bf, bShldr);
        ctx.lineTo(13 * bf, bShldr);
        ctx.bezierCurveTo(15.4 * bf, bShldr + 11, 14.6 * bf, bWaist - 9, 11.2 * bf, bWaist);
        ctx.lineTo(11.2 * bf, bWaist + 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // (jersey, number, belt: painted with the arms as one piece below)
        ctx.restore();
        ctx.save();
        ctx.translate(bodyDx * bf, bodyDy);
        ctx.fillStyle = UB.jM;
        ctx.fillRect(-5.3, bHead + 10, 10.6, (bShldr - 2) - (bHead + 10) + 4);
        ctx.fillStyle = UB.skin;
        ctx.beginPath();
        ctx.moveTo(-3.2, bHead + 8);
        ctx.lineTo(3.2, bHead + 8);
        ctx.lineTo(4.2, bShldr + 1);
        ctx.lineTo(-4.2, bShldr + 1);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "rgba(0,0,0,0.14)";
        ctx.fillRect(-3.2, bHead + 8, 6.4, 2.2);
        // Helmet — one-piece glossy shell with molded earflap
        ctx.save();
        ctx.scale(bf, 1);
        ctx.fillStyle = UB.skin;
        ctx.beginPath();
        ctx.ellipse(-4, bHead + 6, 5.2, 5.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(0,0,0,0.14)";
        ctx.beginPath();
        ctx.ellipse(-4, bHead + 4.4, 5.2, 2.4, 0, Math.PI, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = UB.helD;
        ctx.beginPath();
        ctx.ellipse(-9.5, bHead - 4.5, 5.6, 2.3, -0.55, 0, Math.PI * 2);
        ctx.fill();
        var helG = ctx.createRadialGradient(-3, bHead - 7, 1.5, 0, bHead, 14);
        helG.addColorStop(0, UB.helL);
        helG.addColorStop(0.42, UB.helM);
        helG.addColorStop(1, UB.helD);
        ctx.fillStyle = helG;
        ctx.beginPath();
        ctx.arc(0, bHead, 12, Math.PI * 0.78, Math.PI * 2.30);
        ctx.quadraticCurveTo(3, bHead + 9.5, -2, bHead + 9.5);
        ctx.quadraticCurveTo(-4.5, bHead + 10, -5.5, bHead + 13);
        ctx.quadraticCurveTo(-11.5, bHead + 14, -11.5, bHead + 6.5);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "rgba(6,10,26,0.6)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-4.8, bHead + 7.5);
        ctx.quadraticCurveTo(-8, bHead + 10, -10.2, bHead + 7);
        ctx.stroke();
        ctx.strokeStyle = "rgba(206,224,255,0.6)";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(0, bHead, 9.8, Math.PI * 1.08, Math.PI * 1.55);
        ctx.stroke();
        ctx.strokeStyle = "rgba(206,224,255,0.18)";
        ctx.lineWidth = 3.2;
        ctx.beginPath();
        ctx.arc(0, bHead, 8.2, Math.PI * 1.05, Math.PI * 1.62);
        ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.beginPath();
        ctx.ellipse(-2.5, bHead - 7.5, 2.6, 1.1, -0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        /* ── SWING ──────────────────────────────────────────────────────
           The bat is a rigid 30-unit lever: we keyframe the GRIP position and
           the bat's ANGLE, never the tip, so the barrel always stays the same
           length and sweeps through a real arc instead of sliding across the
           screen. Angles only ever decrease, which walks the barrel from
           cocked-up behind the ear, over the back shoulder, through the zone,
           and around into the wrap.
    
           Both arms are then solved with two-bone IK from the shoulders down
           to where the hands actually are. Upper arm and forearm hold true
           length, so the elbows fold deep in the load and straighten through
           contact the way a hitter's do — no more rubber-band arms. ── */
        var swT = 0, isCheck = false;
        if (pitch && pitch.swing) {
            swT = prog > 1 ? 1 : Math.max(0, Math.min(1, (easedG - 0.72) / 0.24));
        }
        else if (pitch && pitch.check) {
            isCheck = true;
            var peak = pitch.went ? 0.42 : 0.28;
            var cRaw = Math.max(0, Math.min(1, (easedG - 0.76) / 0.14));
            swT = peak * (cRaw * cRaw * (3 - 2 * cRaw));
            if (prog > 1 && !pitch.went)
                swT = peak * (1 - Math.min((prog - 1) / 0.35, 1) * 0.85);
        }
        var BAT_L = 30; // bat length, constant for the whole swing
        var HC = [-5, bWaist - 9]; // grip at contact: out front, about belt high
        // Where the barrel has to be to meet THIS pitch.
        var ctX = -27, ctY = (bChest + bKnees) / 2;
        if (pitch && (pitch.swing || pitch.check)) {
            var pbx = W / 2 + (pitch.fx / 17) * 28;
            var pby = (bChest + bKnees) / 2 - (pitch.fy / 24) * ((bKnees - bChest) * 0.5);
            ctX = Math.max(-36, Math.min(-20, (pbx - bCx) * bf - bodyDx));
            ctY = Math.max(bChest + 2, Math.min(bKnees - 2, pby));
        }
        // Aim the bat straight at the ball from a fixed grip. A pitch at the
        // knees drops the barrel; one up gets a level-to-uphill plane. Same
        // hands, different swing plane — exactly how it works.
        var angC = Math.atan2(ctY - HC[1], ctX - HC[0]);
        if (angC > 0)
            angC -= Math.PI * 2; // keep the whole swing on one branch
        var SWK = [
            { t: 0.00, h: [12, bChest - 13], a: -1.21 }, // stance, barrel cocked up
            { t: 0.22, h: [13, bChest - 15], a: -1.33 }, // load, hands gather back
            { t: 0.50, h: HC, a: angC }, // contact, on the ball
            { t: 1.00, h: [-8, bChest - 14], a: angC - 2.35 } // wrap finish
        ];
        var swPose = function (t) {
            var A = SWK[0], B = SWK[SWK.length - 1];
            for (var si = 0; si < SWK.length - 1; si++) {
                if (t >= SWK[si].t && t <= SWK[si + 1].t) {
                    A = SWK[si];
                    B = SWK[si + 1];
                    break;
                }
            }
            var f = (t - A.t) / ((B.t - A.t) || 1);
            f = f * f * (3 - 2 * f);
            var an = lerp(A.a, B.a, f);
            return { hx: lerp(A.h[0], B.h[0], f) * bf, hy: lerp(A.h[1], B.h[1], f),
                dx: Math.cos(an) * bf, dy: Math.sin(an) };
        };
        var sp0 = swPose(swT);
        var hndX = sp0.hx, hndY = sp0.hy;
        var tipX = hndX + sp0.dx * BAT_L, tipY = hndY + sp0.dy * BAT_L;
        var knbX = hndX - sp0.dx * 5.2, knbY = hndY - sp0.dy * 5.2;
        // Hands stack on the handle: top hand toward the barrel, bottom toward
        // the knob, both riding the bat axis so the grip never comes apart.
        var topX = hndX + sp0.dx * 2.4, topY = hndY + sp0.dy * 2.4;
        var botX = hndX - sp0.dx * 2.2, botY = hndY - sp0.dy * 2.2;
        // Two-bone IK. Given shoulder and hand, find the elbow that keeps both
        // bones at true length; of the two solutions take the one that hangs
        // lower, which is where a hitter's elbows sit.
        var UPA = 13.0, FOR = 12.0;
        var solveElbow = function (sx, sy, hx, hy) {
            var dx2 = hx - sx, dy2 = hy - sy;
            var d2 = Math.hypot(dx2, dy2) || 0.001;
            var dc = Math.min(d2, UPA + FOR - 0.6);
            var a2 = (UPA * UPA - FOR * FOR + dc * dc) / (2 * dc);
            var hh = Math.sqrt(Math.max(0, UPA * UPA - a2 * a2));
            var ux = dx2 / d2, uy = dy2 / d2;
            var mx2 = sx + ux * a2, my2 = sy + uy * a2;
            var e1 = [mx2 - uy * hh, my2 + ux * hh];
            var e2 = [mx2 + uy * hh, my2 - ux * hh];
            return e1[1] >= e2[1] ? e1 : e2;
        };
        var bShX = 10 * bf, fShX = -8 * bf, shY2 = bShldr + 3;
        var fEl = solveElbow(fShX, shY2, botX, botY);
        var bEl = solveElbow(bShX, shY2, topX, topY);
        /* ── UPPER BODY: one piece of cloth, same idea as the pants.
           The jersey and both sleeves are one silhouette on an offscreen
           canvas: every piece is outlined first, then everything is filled
           with the one jersey gradient, so the only outline that survives is
           the outer edge of the whole shape and the sleeves simply continue
           the body. Number and belt go on the torso before the sleeves so an
           arm can cross them. Form is painted on with source-atop: shoulder
           caps, the crease where the arm meets the ribs, and shade along the
           underside of each sleeve. Forearms and cuffs go on last. ── */
        var dJB = dprOf(), JBW = 80, JBH = 64, JBY = bHead - 8;
        if (!JB_CACHE)
            JB_CACHE = document.createElement("canvas");
        if (!JB_MASK)
            JB_MASK = document.createElement("canvas");
        if (JB_CACHE.width !== Math.round(JBW * dJB) || JB_CACHE.height !== Math.round(JBH * dJB)) {
            JB_CACHE.width = Math.round(JBW * dJB);
            JB_CACHE.height = Math.round(JBH * dJB);
            JB_MASK.width = JB_CACHE.width;
            JB_MASK.height = JB_CACHE.height;
        }
        var jc = JB_CACHE.getContext("2d"), jm = JB_MASK.getContext("2d");
        jc.setTransform(1, 0, 0, 1, 0, 0);
        jm.setTransform(1, 0, 0, 1, 0, 0);
        jc.clearRect(0, 0, JB_CACHE.width, JB_CACHE.height);
        jm.clearRect(0, 0, JB_MASK.width, JB_MASK.height);
        // this frame == the hips-up local frame of the main ctx
        jc.setTransform(dJB, 0, 0, dJB, JBW / 2 * dJB, -JBY * dJB);
        jm.setTransform(dJB, 0, 0, dJB, JBW / 2 * dJB, -JBY * dJB);
        jc.globalCompositeOperation = "source-over";
        jm.globalCompositeOperation = "source-over";
        var jerseyPath = function (c) {
            c.beginPath();
            c.moveTo(-13 * bf, bShldr);
            c.lineTo(13 * bf, bShldr);
            c.bezierCurveTo(15.4 * bf, bShldr + 11, 14.6 * bf, bWaist - 9, 11.2 * bf, bWaist + 1.5);
            c.lineTo(-11.2 * bf, bWaist + 1.5);
            c.bezierCurveTo(-14.6 * bf, bWaist - 9, -15.4 * bf, bShldr + 11, -13 * bf, bShldr);
            c.closePath();
        };
        var jerG = jc.createLinearGradient(-14 * bf, bShldr, 14 * bf, bWaist);
        jerG.addColorStop(0, UB.jL);
        jerG.addColorStop(0.5, UB.jM);
        jerG.addColorStop(1, UB.jD);
        var SLW = 3.4, SLE = 2.7; // sleeve width at shoulder / elbow
        // 1. outline every piece: only the union's outer edge will survive
        jc.strokeStyle = UB.seam;
        jc.lineWidth = 2.0;
        jc.lineJoin = "round";
        jerseyPath(jc);
        jc.stroke();
        var sleeveOutline = function (sx, sy, ex, ey) {
            var dx = ex - sx, dy = ey - sy, L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
            jc.beginPath();
            jc.moveTo(sx + nx * SLW, sy + ny * SLW);
            jc.lineTo(ex + nx * SLE, ey + ny * SLE);
            jc.lineTo(ex - nx * SLE, ey - ny * SLE);
            jc.lineTo(sx - nx * SLW, sy - ny * SLW);
            jc.closePath();
            jc.stroke();
            jc.beginPath();
            jc.arc(sx, sy, SLW, 0, Math.PI * 2);
            jc.stroke();
            jc.beginPath();
            jc.arc(ex, ey, SLE, 0, Math.PI * 2);
            jc.stroke();
        };
        sleeveOutline(fShX, shY2, fEl[0], fEl[1]);
        sleeveOutline(bShX, shY2, bEl[0], bEl[1]);
        // 2. the torso, with everything that lives on it
        jerseyPath(jc);
        jc.fillStyle = jerG;
        jc.fill();
        // number on the back, squeezed because it wraps away from us
        jc.save();
        jc.translate(8.4 * bf, bWaist - 10);
        jc.rotate(bf * 0.07);
        jc.scale(0.46, 0.94);
        jc.globalAlpha = 0.5;
        jc.fillStyle = UB.num;
        jc.font = "700 15px " + FU;
        jc.textAlign = "center";
        jc.textBaseline = "middle";
        jc.fillText("27", 0, 0);
        jc.restore();
        // piping down the lead side
        jc.strokeStyle = shade(UB.accent, 0.45) + "55";
        jc.lineWidth = 1.4;
        jc.beginPath();
        jc.moveTo(-13 * bf, bShldr);
        jc.bezierCurveTo(-15.4 * bf, bShldr + 11, -14.6 * bf, bWaist - 9, -11.2 * bf, bWaist + 1.5);
        jc.stroke();
        // belt
        jc.fillStyle = UB.belt;
        jc.fillRect(-11.1, bWaist - 0.4, 22.2, 3.4);
        jc.fillStyle = "rgba(200,215,245,0.20)";
        jc.fillRect(-11.1, bWaist - 0.4, 22.2, 0.9);
        jc.fillStyle = shade(UB.trim, -0.1); // buckle, centred on the body
        jc.fillRect(-2.2, bWaist - 0.4, 4.4, 3.4);
        // collar
        jc.fillStyle = UB.jD;
        jc.beginPath();
        jc.ellipse(0, bShldr + 1.2, 6.8, 3, 0, Math.PI, Math.PI * 2);
        jc.fill();
        // 3. sleeves, lead arm under the back arm, both in the jersey gradient
        limbOn(jc, fShX, shY2, fEl[0], fEl[1], SLW, SLE, jerG);
        limbOn(jc, bShX, shY2, bEl[0], bEl[1], SLW, SLE, jerG);
        // 4. form, only where cloth already is
        jc.globalCompositeOperation = "source-atop";
        // shade along the underside of each sleeve, flattened through the
        // mask so the joint circles can't stack
        var sleeveShade = function (sx, sy, ex, ey, amt) {
            jm.globalCompositeOperation = "source-over";
            jm.clearRect(-JBW / 2, JBY, JBW, JBH);
            limbOn(jm, sx, sy, ex, ey, SLW, SLE, "#000");
            var dx = ex - sx, dy = ey - sy, L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
            if (ny < 0) {
                nx = -nx;
                ny = -ny;
            } // n points down-screen
            var mx = (sx + ex) / 2, my = (sy + ey) / 2;
            var g = jm.createLinearGradient(mx - nx * SLW, my - ny * SLW, mx + nx * SLW, my + ny * SLW);
            g.addColorStop(0, "rgba(255,255,255,0.10)");
            g.addColorStop(0.45, "rgba(255,255,255,0)");
            g.addColorStop(0.55, "rgba(0,0,0,0)");
            g.addColorStop(1, "rgba(0,0,0," + amt + ")");
            jm.globalCompositeOperation = "source-in";
            jm.fillStyle = g;
            jm.fillRect(-JBW / 2, JBY, JBW, JBH);
            jc.drawImage(JB_MASK, -JBW / 2, JBY, JBW, JBH);
        };
        sleeveShade(fShX, shY2, fEl[0], fEl[1], 0.30); // far arm, a touch darker
        sleeveShade(bShX, shY2, bEl[0], bEl[1], 0.22);
        // shoulder caps catch the light; a crease where each arm meets the ribs
        [[fShX, -1], [bShX, 1]].forEach(function (sh) {
            var cap = jc.createRadialGradient(sh[0], shY2 - 1.2, 0.5, sh[0], shY2 - 0.5, 5.2);
            cap.addColorStop(0, "rgba(255,255,255,0.16)");
            cap.addColorStop(1, "rgba(255,255,255,0)");
            jc.fillStyle = cap;
            jc.fillRect(sh[0] - 7, shY2 - 7, 14, 14);
            var inX = sh[0] - Math.sign(sh[0]) * 2.6;
            var pit = jc.createRadialGradient(inX, shY2 + 5.2, 0, inX, shY2 + 5, 5.4);
            pit.addColorStop(0, "rgba(0,0,0,0.20)");
            pit.addColorStop(1, "rgba(0,0,0,0)");
            jc.fillStyle = pit;
            jc.fillRect(inX - 7, shY2 - 2, 14, 14);
        });
        // 5. forearms and cuffs go on over the cloth
        jc.globalCompositeOperation = "source-over";
        var forearm = function (ex, ey, hx, hy, w1, w2) {
            limbOn(jc, ex, ey, hx, hy, w1, w2, UB.skin);
            // cuff: a band of trim where the sleeve ends on the arm
            var dx = hx - ex, dy = hy - ey, L = Math.hypot(dx, dy) || 1;
            var ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
            var cx0 = ex + ux * 1.2, cy0 = ey + uy * 1.2;
            jc.strokeStyle = UB.trim;
            jc.globalAlpha = 0.7;
            jc.lineWidth = 1.2;
            jc.lineCap = "butt";
            jc.beginPath();
            jc.moveTo(cx0 + nx * (w1 + 0.4), cy0 + ny * (w1 + 0.4));
            jc.lineTo(cx0 - nx * (w1 + 0.4), cy0 - ny * (w1 + 0.4));
            jc.stroke();
            jc.globalAlpha = 1;
        };
        forearm(fEl[0], fEl[1], botX, botY, 2.4, 1.8);
        forearm(bEl[0], bEl[1], topX, topY, 2.5, 1.9);
        // forearm form: light on top, a little shade underneath, through the mask
        var forearmShade = function (ex, ey, hx, hy, w1, w2) {
            jm.globalCompositeOperation = "source-over";
            jm.clearRect(-JBW / 2, JBY, JBW, JBH);
            limbOn(jm, ex, ey, hx, hy, w1, w2, "#000");
            var dx = hx - ex, dy = hy - ey, L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
            if (ny < 0) {
                nx = -nx;
                ny = -ny;
            }
            var mx = (ex + hx) / 2, my = (ey + hy) / 2;
            var g = jm.createLinearGradient(mx - nx * w1, my - ny * w1, mx + nx * w1, my + ny * w1);
            g.addColorStop(0, "rgba(255,255,255,0.12)");
            g.addColorStop(0.5, "rgba(255,255,255,0)");
            g.addColorStop(0.5, "rgba(0,0,0,0)");
            g.addColorStop(1, "rgba(0,0,0,0.20)");
            jm.globalCompositeOperation = "source-in";
            jm.fillStyle = g;
            jm.fillRect(-JBW / 2, JBY, JBW, JBH);
            jc.globalCompositeOperation = "source-atop";
            jc.drawImage(JB_MASK, -JBW / 2, JBY, JBW, JBH);
        };
        forearmShade(fEl[0], fEl[1], botX, botY, 2.4, 1.8);
        forearmShade(bEl[0], bEl[1], topX, topY, 2.5, 1.9);
        jc.globalCompositeOperation = "source-over";
        ctx.drawImage(JB_CACHE, -JBW / 2, JBY, JBW, JBH);
        // whip blur through the fast part of a full swing
        if (!isCheck && swT > 0.24 && swT < 0.88) {
            ctx.lineCap = "round";
            for (var gi = 1; gi <= 3; gi++) {
                var gp = swPose(Math.max(0, swT - gi * 0.055));
                ctx.strokeStyle = "rgba(224,186,124," + (0.26 - gi * 0.07).toFixed(2) + ")";
                ctx.lineWidth = 5.2 - gi * 0.5;
                ctx.beginPath();
                ctx.moveTo(gp.hx, gp.hy);
                ctx.lineTo(gp.hx + gp.dx * BAT_L, gp.hy + gp.dy * BAT_L);
                ctx.stroke();
            }
        }
        // Bat: knob, tapered handle, barrel, sheen
        var bmX = lerp(hndX, tipX, 0.42), bmY = lerp(hndY, tipY, 0.42);
        var batG = ctx.createLinearGradient(knbX, knbY, tipX, tipY);
        batG.addColorStop(0, "#8E6229");
        batG.addColorStop(0.5, "#B98643");
        batG.addColorStop(1, "#E0BC7E");
        ctx.strokeStyle = batG;
        ctx.lineCap = "round";
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        ctx.moveTo(knbX, knbY);
        ctx.lineTo(bmX, bmY);
        ctx.stroke();
        ctx.lineWidth = 6.2;
        ctx.beginPath();
        ctx.moveTo(bmX, bmY);
        ctx.lineTo(tipX, tipY);
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,244,212,0.5)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(lerp(hndX, tipX, 0.6), lerp(hndY, tipY, 0.6) - 1.2);
        ctx.lineTo(lerp(hndX, tipX, 0.94), lerp(hndY, tipY, 0.94) - 1.2);
        ctx.stroke();
        ctx.fillStyle = "#7C5222";
        ctx.beginPath();
        ctx.arc(knbX, knbY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        // batting gloves last so they sit on top of the handle
        ctx.fillStyle = "#EDEFF5";
        ctx.strokeStyle = "rgba(56,66,98,0.55)";
        ctx.lineWidth = 0.8;
        [[botX, botY, 3.2], [topX, topY, 3.4]].forEach(function (g3) {
            ctx.beginPath();
            ctx.arc(g3[0], g3[1], g3[2], 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        });
        ctx.restore(); // hips-up weight shift
        ctx.restore(); // batter origin
        /* ── CATCHER — tracks the incoming pitch with the mitt ── */
        var gTx = null, gTyW = null;
        if (pitch) {
            gTx = W / 2 + (pitch.fx / 17) * 28;
            gTyW = (bChest + bKnees) / 2 - (pitch.fy / 24) * ((bKnees - bChest) * 0.5);
        }
        var track = 0;
        if (pitch && prog > 0) {
            var tc = Math.min(prog, 1);
            var ec = tc < 0.12 ? (tc / 0.12) * 0.05 : 0.05 + ((tc - 0.12) / 0.88) * 0.95;
            track = Math.max(0, Math.min(1, (ec - 0.45) / 0.40));
            track = track * track * (3 - 2 * track);
        }
        var ret = prog > 1 ? Math.min((prog - 1) / 0.45, 1) : 0;
        ret = ret * ret * (3 - 2 * ret);
        var eff = track * (1 - ret);
        var catY = plateY + 38;
        var lxT = gTx === null ? -8 : gTx - W / 2;
        var lyTw = gTyW === null ? catY - 14 : gTyW;
        var shiftX = Math.max(-12, Math.min(12, lxT * 0.4)) * eff;
        var lift = eff * Math.min(8, Math.max(0, (catY - 14) - lyTw - 30) * 0.22);
        ctx.save();
        ctx.translate(W / 2 + shiftX, catY - lift);
        var lyT = lyTw - (catY - lift);
        var mx = lerp(-8, lxT - shiftX, eff);
        var my = lerp(-14, lyT, eff);
        ctx.fillStyle = "rgba(0,0,0,0.36)";
        ctx.beginPath();
        ctx.ellipse(0, 24 + lift, 33, 6.2, 0, 0, Math.PI * 2);
        ctx.fill();
        var cbG = ctx.createRadialGradient(-7, -15, 4, 0, -6, 27);
        cbG.addColorStop(0, UF.gearL);
        cbG.addColorStop(0.65, UF.gear);
        cbG.addColorStop(1, UF.jD);
        ctx.fillStyle = cbG;
        ctx.beginPath();
        ctx.ellipse(0, -6, 22, 18, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(126,150,200,0.30)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.strokeStyle = "rgba(146,166,214,0.32)";
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(-17, -12);
        ctx.quadraticCurveTo(0, -16, 17, -12);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-19, -4);
        ctx.quadraticCurveTo(0, -8, 19, -4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-18, 4);
        ctx.quadraticCurveTo(0, 0, 18, 4);
        ctx.stroke();
        // uniform number across the back
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = UF.num;
        ctx.font = "700 13px " + FU;
        ctx.textAlign = "center";
        ctx.fillText("14", 0, -3);
        ctx.restore();
        ctx.textAlign = "left";
        var chG = ctx.createRadialGradient(-5, -33, 2, 0, -28, 14);
        chG.addColorStop(0, UF.capL);
        chG.addColorStop(1, UF.capD);
        ctx.fillStyle = chG;
        ctx.beginPath();
        ctx.arc(0, -28, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(190,214,255,0.28)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(0, -28, 10.4, Math.PI * 1.05, Math.PI * 1.6);
        ctx.stroke();
        ctx.strokeStyle = "rgba(184,198,220,0.72)";
        ctx.lineWidth = 1.1;
        for (var mi2 = -8; mi2 <= 8; mi2 += 3.5) {
            ctx.beginPath();
            ctx.moveTo(mi2, -37);
            ctx.lineTo(mi2, -20);
            ctx.stroke();
        }
        for (var mj2 = -36; mj2 <= -20; mj2 += 4) {
            ctx.beginPath();
            ctx.moveTo(-9, mj2);
            ctx.lineTo(9, mj2);
            ctx.stroke();
        }
        ctx.fillStyle = UF.jD;
        ctx.beginPath();
        ctx.ellipse(-14, 14, 7, 12, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(14, 14, 7, 12, 0.3, 0, Math.PI * 2);
        ctx.fill();
        var sgG = ctx.createLinearGradient(-18, 4, -8, 24);
        sgG.addColorStop(0, "rgba(206,214,228,0.86)");
        sgG.addColorStop(1, "rgba(140,150,168,0.72)");
        ctx.fillStyle = sgG;
        ctx.beginPath();
        ctx.ellipse(-13.4, 14, 4, 10.5, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(13.4, 14, 4, 10.5, 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(84,94,116,0.55)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-15, 7);
        ctx.lineTo(-12, 21);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(15, 7);
        ctx.lineTo(12, 21);
        ctx.stroke();
        var elX = (-9 + mx) / 2 - 2, elY = (-14 + my) / 2 + 1.5;
        limb(-9, -14, elX, elY, 2.6, 2.2, UF.gear);
        limb(elX, elY, mx, my, 2.2, 1.8, UF.gear);
        // mitt catch flex + dust puff right after the pop
        var pop = (prog > 0.93 && prog < 1.30 && (!pitch || !pitch.swing || pitch.out === "miss"))
            ? Math.max(0, 1 - (prog - 0.93) / 0.37) : 0;
        var mScale = 1 + pop * 0.14;
        var mitG = ctx.createRadialGradient(mx - 3, my - 4, 1, mx, my, 13);
        mitG.addColorStop(0, "#8E5722");
        mitG.addColorStop(0.6, "#6E4118");
        mitG.addColorStop(1, "#472708");
        ctx.fillStyle = mitG;
        ctx.beginPath();
        ctx.ellipse(mx, my, 11 * mScale, 13 * mScale, -0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(206,156,86,0.6)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.fillStyle = "#43240A";
        ctx.beginPath();
        ctx.ellipse(mx, my, 7 * mScale, 8 * mScale, -0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(228,190,132,0.45)";
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.arc(mx, my, 9.6 * mScale, Math.PI * 0.6, Math.PI * 1.5);
        ctx.stroke();
        // webbing
        ctx.strokeStyle = "rgba(232,196,140,0.30)";
        ctx.lineWidth = 0.7;
        for (var wv = -1; wv <= 1; wv++) {
            ctx.beginPath();
            ctx.moveTo(mx - 7 + wv * 2, my - 9);
            ctx.lineTo(mx + 6 + wv * 2, my - 3);
            ctx.stroke();
        }
        if (pop > 0.02) {
            ctx.fillStyle = "rgba(255,246,222," + (0.30 * pop) + ")";
            ctx.beginPath();
            ctx.arc(mx, my, 16 + (1 - pop) * 16, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
        /* ── BALL (perspective flight; struck balls leave the bat) ── */
        if (pitch && prog > 0) {
            var t6 = Math.min(prog, 1);
            var eased = t6 < 0.12 ? (t6 / 0.12) * 0.05 : 0.05 + ((t6 - 0.12) / 0.88) * 0.95;
            var sXb = W / 2 + 2 + pitch.sx * 2;
            var sYb = moundY - 34;
            var zoneT = bChest, zoneB = bKnees;
            var zoneCx = W / 2, zoneW2 = 28, zoneH2 = zoneB - zoneT;
            var eXb = zoneCx + (pitch.fx / 17) * zoneW2;
            var eCYb = (zoneT + zoneB) / 2;
            var eYb = eCYb - (pitch.fy / 24) * (zoneH2 * 0.5);
            var contact = pitch.swing && pitch.out !== "miss";
            var ballAlpha = contact
                ? (prog < CONTACT_P ? 1 : 0)
                : (eased > 0.85 ? Math.max(0, 1 - (eased - 0.85) / 0.15) : 1);
            if (ballAlpha > 0) {
                var c1x = sXb + (eXb - sXb) * 0.33, c1y = sYb + (eYb - sYb) * 0.33 - 5;
                var c2x = sXb + (eXb - sXb) * 0.72 + pitch.hB * 3.4;
                var c2y = sYb + (eYb - sYb) * 0.72 + pitch.vB * -3.4;
                var bez = function (tt) {
                    var u = 1 - tt;
                    return [
                        u * u * u * sXb + 3 * u * u * tt * c1x + 3 * u * tt * tt * c2x + tt * tt * tt * eXb,
                        u * u * u * sYb + 3 * u * u * tt * c1y + 3 * u * tt * tt * c2y + tt * tt * tt * eYb
                    ];
                };
                var bp = bez(eased), bx = bp[0], by = bp[1];
                var ballR = 0.9 + Math.pow(eased, 1.55) * 10;
                var shadY = lerp(moundY + 10, plateY + 8, eased);
                ctx.globalAlpha = ballAlpha;
                ctx.fillStyle = "rgba(0,0,0," + (0.10 + eased * 0.16) + ")";
                ctx.beginPath();
                ctx.ellipse(bx, shadY, ballR * 0.9, ballR * 0.28, 0, 0, Math.PI * 2);
                ctx.fill();
                var tailT = Math.max(0, eased - 0.07);
                var tp = bez(tailT);
                var strk = ctx.createLinearGradient(tp[0], tp[1], bx, by);
                strk.addColorStop(0, "rgba(255,255,255,0)");
                strk.addColorStop(0.6, PCOL[pitch.type] + "34");
                strk.addColorStop(1, "rgba(255,255,255,0.5)");
                ctx.strokeStyle = strk;
                ctx.lineWidth = Math.max(1, ballR * 0.9);
                ctx.lineCap = "round";
                ctx.beginPath();
                ctx.moveTo(tp[0], tp[1]);
                ctx.lineTo(bx, by);
                ctx.stroke();
                for (var ti = 1; ti <= 14; ti++) {
                    var tt2 = Math.max(0, eased - ti * 0.012);
                    var dp = bez(tt2);
                    var trR = Math.max(0.3, ballR - ti * 0.5);
                    ctx.globalAlpha = Math.max(0, 0.28 - ti * 0.019) * ballAlpha;
                    ctx.fillStyle = PCOL[pitch.type];
                    ctx.beginPath();
                    ctx.arc(dp[0], dp[1], trR, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = ballAlpha;
                // bloom: the ball catches the tower lights as it gets close
                if (ballR > 2.5) {
                    ctx.save();
                    ctx.globalCompositeOperation = "lighter";
                    var blm = ctx.createRadialGradient(bx, by, ballR * 0.4, bx, by, ballR * 3.2);
                    blm.addColorStop(0, "rgba(255,250,232," + (0.10 + eased * 0.16) + ")");
                    blm.addColorStop(0.4, PCOL[pitch.type] + "18");
                    blm.addColorStop(1, "rgba(0,0,0,0)");
                    ctx.fillStyle = blm;
                    ctx.beginPath();
                    ctx.arc(bx, by, ballR * 3.2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
                var bGr = ctx.createRadialGradient(bx - ballR * 0.34, by - ballR * 0.36, 0, bx, by, ballR);
                bGr.addColorStop(0, "#FFFFFF");
                bGr.addColorStop(0.32, "#FAF5EC");
                bGr.addColorStop(0.68, "#DED2BE");
                bGr.addColorStop(1, "#A2957A");
                ctx.fillStyle = bGr;
                ctx.beginPath();
                ctx.arc(bx, by, ballR, 0, Math.PI * 2);
                ctx.fill();
                if (ballR > 2.6) {
                    var SPIN = {
                        fastball: { rate: 26, dir: -1, tilt: 0.05 },
                        sinker: { rate: 22, dir: -1, tilt: -0.55 },
                        cutter: { rate: 24, dir: -1, tilt: 0.45 },
                        slider: { rate: 28, dir: 1, tilt: 1.15 },
                        curveball: { rate: 20, dir: 1, tilt: 0.15 },
                        changeup: { rate: 12, dir: -1, tilt: -0.35 },
                        splitter: { rate: 6, dir: 1, tilt: 0.05 }
                    };
                    var sp = SPIN[pitch.type] || SPIN.fastball;
                    var th = sp.tilt + eased * sp.rate * sp.dir;
                    ctx.save();
                    ctx.translate(bx, by);
                    ctx.rotate(th);
                    ctx.strokeStyle = "#C42020";
                    ctx.lineWidth = Math.max(0.8, ballR * 0.1);
                    ctx.beginPath();
                    ctx.arc(-ballR * 0.12, 0, ballR * 0.48, -0.85, 0.85);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(ballR * 0.12, 0, ballR * 0.48, Math.PI - 0.85, Math.PI + 0.85);
                    ctx.stroke();
                    if (ballR > 5) {
                        ctx.strokeStyle = "rgba(160,140,110,0.35)";
                        ctx.lineWidth = Math.max(0.5, ballR * 0.05);
                        ctx.beginPath();
                        ctx.arc(-ballR * 0.12, 0, ballR * 0.48, -0.85, 0.85);
                        ctx.stroke();
                    }
                    if (sp.rate >= 20 && ballR > 4.5) {
                        ctx.strokeStyle = "rgba(196,32,32,0.17)";
                        ctx.lineWidth = ballR * 0.2;
                        ctx.beginPath();
                        ctx.arc(0, 0, ballR * 0.55, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                    ctx.restore();
                    ctx.fillStyle = "rgba(255,255,255,0.9)";
                    ctx.beginPath();
                    ctx.arc(bx - ballR * 0.35, by - ballR * 0.4, ballR * 0.17, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
            }
            /* ── struck ball: contact flash, then exit flight by outcome ── */
            if (contact && prog >= CONTACT_P) {
                var og = Math.min(1, (prog - CONTACT_P) / 0.55);
                if (og < 0.20) {
                    var fl = 1 - og / 0.20;
                    ctx.save();
                    ctx.globalCompositeOperation = "lighter";
                    var cg = ctx.createRadialGradient(eXb, eYb, 1, eXb, eYb, 30 + fl * 18);
                    cg.addColorStop(0, "rgba(255,248,220," + (0.6 * fl) + ")");
                    cg.addColorStop(1, "rgba(255,220,140,0)");
                    ctx.fillStyle = cg;
                    ctx.beginPath();
                    ctx.arc(eXb, eYb, 30 + fl * 18, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.strokeStyle = "rgba(255,250,232," + fl + ")";
                    ctx.lineWidth = 2;
                    for (var fa = 0; fa < 8; fa++) {
                        var an = fa * Math.PI / 4 + 0.3;
                        ctx.beginPath();
                        ctx.moveTo(eXb + Math.cos(an) * 5, eYb + Math.sin(an) * 5);
                        ctx.lineTo(eXb + Math.cos(an) * (12 + fl * 9), eYb + Math.sin(an) * (12 + fl * 9));
                        ctx.stroke();
                    }
                    ctx.restore();
                }
                var pullDir = (curBat === "right") ? -1 : 1;
                var oTx, oTy;
                if (pitch.out === "foul") {
                    oTx = W / 2 - pullDir * W * 0.55;
                    oTy = -24;
                }
                else if (pitch.out === "hr") {
                    oTx = W / 2 + pullDir * W * 0.30 + pitch.fx * 2;
                    oTy = H * 0.06;
                }
                else if (pitch.out === "double") {
                    oTx = W / 2 + pullDir * W * 0.34 + pitch.fx * 2;
                    oTy = H * 0.17;
                }
                else if (pitch.out === "single") {
                    oTx = W / 2 + pitch.fx * 5 + pullDir * W * 0.12;
                    oTy = H * 0.30;
                }
                else {
                    oTx = W / 2 + pitch.fx * 5;
                    oTy = H * 0.26;
                }
                var ogE = 1 - (1 - og) * (1 - og);
                var arc = function (tt) { return Math.sin(Math.PI * tt) * 26; };
                var obx = lerp(eXb, oTx, ogE);
                var oby = lerp(eYb, oTy, ogE) - arc(ogE);
                var oR = Math.max(1.2, 7 * (1 - ogE * 0.85));
                for (var pi2 = 1; pi2 <= 3; pi2++) {
                    var pgE = Math.max(0, ogE - pi2 * 0.05);
                    ctx.fillStyle = "rgba(255,255,255," + (0.22 - pi2 * 0.06) + ")";
                    ctx.beginPath();
                    ctx.arc(lerp(eXb, oTx, pgE), lerp(eYb, oTy, pgE) - arc(pgE), oR * (0.85 - pi2 * 0.12), 0, Math.PI * 2);
                    ctx.fill();
                }
                var obG = ctx.createRadialGradient(obx - oR * 0.3, oby - oR * 0.3, 0, obx, oby, oR);
                obG.addColorStop(0, "#FFFFFF");
                obG.addColorStop(1, "#C2B698");
                ctx.fillStyle = obG;
                ctx.beginPath();
                ctx.arc(obx, oby, oR, 0, Math.PI * 2);
                ctx.fill();
                // flash bulbs pop in the deck on a home run
                if (pitch.out === "hr" && og > 0.08) {
                    var fr = mulberry32(Math.floor(prog * 900));
                    for (var fb = 0; fb < 14; fb++) {
                        ctx.fillStyle = "rgba(255,255,255," + (0.35 + fr() * 0.55) + ")";
                        var fx3 = fr() * W, fy3 = H * 0.052 + fr() * H * 0.09;
                        ctx.beginPath();
                        ctx.arc(fx3, fy3, 1 + fr() * 1.4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        }
        ctx.restore(); // end camera shake
        /* ── SPEED GUN: broadcast bug with LED digits ── */
        if (pitch && prog > 0.35) {
            var gx0 = W - 86, gy0 = 8, gw = 78, gh = 36;
            ctx.fillStyle = "rgba(4,8,14,0.85)";
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(gx0, gy0, gw, gh, 7);
            }
            else {
                ctx.rect(gx0, gy0, gw, gh);
            }
            ctx.fill();
            ctx.strokeStyle = "rgba(255,207,61,0.28)";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = "rgba(255,207,61,0.55)";
            ctx.font = "600 8px " + FM;
            ctx.textAlign = "left";
            ctx.fillText("MPH", gx0 + 9, gy0 + 13);
            ctx.save();
            ctx.shadowColor = "rgba(255,207,61,0.75)";
            ctx.shadowBlur = 9;
            ctx.fillStyle = "#FFCF3D";
            ctx.font = "700 21px " + FM;
            ctx.textAlign = "right";
            ctx.fillText(String(pitch.speed), gx0 + gw - 9, gy0 + 29);
            ctx.restore();
            ctx.textAlign = "left";
        }
        /* ── Broadcast grade: vignette + a touch of lens bloom ── */
        var vg = ctx.createRadialGradient(W / 2, H * 0.5, H * 0.30, W / 2, H * 0.5, H * 0.80);
        vg.addColorStop(0, "rgba(0,0,0,0)");
        vg.addColorStop(0.72, "rgba(2,5,10,0.20)");
        vg.addColorStop(1, "rgba(2,5,10,0.52)");
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
        // cool highlight bias at the top, warm at the field — subtle color grade
        var grade = ctx.createLinearGradient(0, 0, 0, H);
        grade.addColorStop(0, "rgba(70,110,180,0.055)");
        grade.addColorStop(0.55, "rgba(255,220,160,0.02)");
        grade.addColorStop(1, "rgba(255,190,110,0.045)");
        ctx.fillStyle = grade;
        ctx.fillRect(0, 0, W, H);
    }, [pitch, prog, wPhase, kit]);
    return ((0, jsx_runtime_1.jsx)("canvas", { ref: ref, style: { width: CW, maxWidth: "100%", maxHeight: "100%", aspectRatio: CW + " / " + CH, display: "block", borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.02)" } }));
}
/* ═══ ZONE REPLAY — uniform true scale sized so the FULL pitch range
   (up to 16in wide, 20in high, plus the ball) always fits on canvas ═══ */
function ZoneReplay({ pitch, swung, check }) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!pitch)
            return;
        var c = ref.current;
        if (!c)
            return;
        var W = 230, H = 268;
        var ctx = prepCanvas(c, W, H);
        ctx.clearRect(0, 0, W, H);
        var bgG = ctx.createLinearGradient(0, 0, 0, H);
        bgG.addColorStop(0, "#070C14");
        bgG.addColorStop(1, "#0B1420");
        ctx.fillStyle = bgG;
        ctx.fillRect(0, 0, W, H);
        // faint field horizon so it reads as the catcher's view
        ctx.fillStyle = "rgba(30,90,44,0.10)";
        ctx.fillRect(0, H * 0.72, W, H * 0.28);
        var s = 5.4;
        var zW = 17 * s, zH = 24 * s;
        var zL = W / 2 - zW / 2, zR = W / 2 + zW / 2, zT = H / 2 - zH / 2, zB = H / 2 + zH / 2;
        var verdictC = swung || check ? T.gold : (pitch.isK ? T.green : T.strike);
        ctx.fillStyle = "rgba(26,48,80,0.20)";
        ctx.fillRect(zL, zT, zW, zH);
        ctx.strokeStyle = "rgba(140,160,180,0.11)";
        ctx.lineWidth = 1;
        for (var i = 1; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(zL + zW / 3 * i, zT);
            ctx.lineTo(zL + zW / 3 * i, zB);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(zL, zT + zH / 3 * i);
            ctx.lineTo(zR, zT + zH / 3 * i);
            ctx.stroke();
        }
        ctx.save();
        ctx.shadowColor = "rgba(255,207,61,0.55)";
        ctx.shadowBlur = 8;
        ctx.strokeStyle = T.gold;
        ctx.lineWidth = 2;
        ctx.strokeRect(zL, zT, zW, zH);
        ctx.restore();
        // corner ticks
        ctx.strokeStyle = "rgba(255,207,61,0.85)";
        ctx.lineWidth = 2.6;
        [[zL, zT, 1, 1], [zR, zT, -1, 1], [zL, zB, 1, -1], [zR, zB, -1, -1]].forEach(function (k) {
            ctx.beginPath();
            ctx.moveTo(k[0] + 9 * k[2], k[1]);
            ctx.lineTo(k[0], k[1]);
            ctx.lineTo(k[0], k[1] + 9 * k[3]);
            ctx.stroke();
        });
        ctx.fillStyle = "#3A4858";
        ctx.font = "600 9px " + FM;
        ctx.textAlign = "center";
        ctx.fillText("HIGH", W / 2, zT - 6);
        ctx.fillText("LOW", W / 2, zB + 13);
        var bx2 = W / 2 + pitch.fx * s, by2 = H / 2 - pitch.fy * s;
        var ballPx = 1.45 * s;
        // short break tail showing which way the pitch moved
        var tx = bx2 - pitch.hB * 3.2, ty = by2 + pitch.vB * 3.2;
        var tg = ctx.createLinearGradient(tx, ty, bx2, by2);
        tg.addColorStop(0, "rgba(255,255,255,0)");
        tg.addColorStop(1, PCOL[pitch.type] + "80");
        ctx.strokeStyle = tg;
        ctx.lineWidth = ballPx * 1.5;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(bx2, by2);
        ctx.stroke();
        var gl2 = ctx.createRadialGradient(bx2, by2, 0, bx2, by2, 26);
        gl2.addColorStop(0, verdictC + "44");
        gl2.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gl2;
        ctx.beginPath();
        ctx.arc(bx2, by2, 26, 0, Math.PI * 2);
        ctx.fill();
        var bg2 = ctx.createRadialGradient(bx2 - ballPx * 0.35, by2 - ballPx * 0.35, 0, bx2, by2, ballPx);
        bg2.addColorStop(0, "#FFFFFF");
        bg2.addColorStop(0.5, PCOL[pitch.type]);
        bg2.addColorStop(1, shade(PCOL[pitch.type], -0.25));
        // soft drop shadow lifts the ball off the zone grid
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.65)";
        ctx.shadowBlur = 9;
        ctx.shadowOffsetY = 3;
        ctx.fillStyle = bg2;
        ctx.beginPath();
        ctx.arc(bx2, by2, ballPx, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        ctx.strokeStyle = verdictC;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.fillStyle = "rgba(255,255,255,0.85)";
        ctx.beginPath();
        ctx.arc(bx2 - ballPx * 0.32, by2 - ballPx * 0.36, ballPx * 0.16, 0, Math.PI * 2);
        ctx.fill();
        if (swung || check) {
            ctx.fillStyle = T.gold;
            ctx.font = "700 8px " + FM;
            ctx.textAlign = "center";
            ctx.fillText(swung ? "BATTER SWUNG \u2014 NO CALL" : "CHECK-SWING APPEAL", W / 2, 14);
        }
        var lx = Math.max(36, Math.min(W - 36, bx2));
        var below = by2 + ballPx + 28 <= H - 2;
        var ly1 = below ? by2 + ballPx + 13 : by2 - ballPx - 18;
        var ly2 = below ? by2 + ballPx + 26 : by2 - ballPx - 6;
        ctx.save();
        if ("letterSpacing" in ctx)
            ctx.letterSpacing = "1.2px";
        ctx.shadowColor = "rgba(0,0,0,0.85)";
        ctx.shadowBlur = 5;
        ctx.shadowOffsetY = 1;
        ctx.fillStyle = PCOL[pitch.type];
        ctx.font = "700 12px " + FU;
        ctx.textAlign = "center";
        ctx.fillText(PN[pitch.type].toUpperCase(), lx, ly1);
        ctx.fillStyle = "#8A9AAC";
        ctx.font = "600 9px " + FM;
        ctx.fillText(pitch.speed + " MPH", lx, ly2 + 1);
        ctx.restore();
        ctx.textAlign = "left";
    }, [pitch, swung, check]);
    return (0, jsx_runtime_1.jsx)("canvas", { ref: ref, style: { width: 230, maxWidth: "100%", maxHeight: "100%", aspectRatio: "230 / 268", display: "block", margin: "0 auto", borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 6px 24px rgba(0,0,0,0.5)" } });
}
/* ═══ OVERHEAD FIELD ═══════════════════════════════════════════════
   On any batted ball the broadcast cuts to the wide shot. Home sits at
   the bottom, the foul lines fan out to the wall, and we watch the ball
   and every runner at once. Geometry is derived from real proportions:
   90ft between bases, the mound 60.5ft out, the outfield deeper to
   center than down the lines. ═══ */
function fieldGeom(W, H) {
    return { hx: W * 0.5, hy: H * 0.885, R: W * 0.196, Rf: W * 0.600, Rc: W * 0.829 };
}
function wallR(g, a) {
    var k = Math.min(1, Math.abs(a) / (Math.PI / 4));
    return g.Rc - (g.Rc - g.Rf) * Math.pow(k, 1.7);
}
function polarPt(g, a, d) { return [g.hx + Math.sin(a) * d, g.hy - Math.cos(a) * d]; }
function baseXY(g, i) {
    if (i === 0)
        return [g.hx + g.R, g.hy - g.R];
    if (i === 1)
        return [g.hx, g.hy - 2 * g.R];
    if (i === 2)
        return [g.hx - g.R, g.hy - g.R];
    return [g.hx, g.hy];
}
function fielderSpots(g) {
    return [polarPt(g, 0, g.R * 0.94), [g.hx, g.hy + 20],
        polarPt(g, 0.62, g.R * 1.44), polarPt(g, 0.30, g.R * 2.02),
        polarPt(g, -0.30, g.R * 2.02), polarPt(g, -0.62, g.R * 1.44),
        polarPt(g, -0.60, g.Rc * 0.72), polarPt(g, 0.02, g.Rc * 0.80),
        polarPt(g, 0.60, g.Rc * 0.72)];
}
function polyPoint(pts, f) {
    if (pts.length < 2)
        return pts[0].slice();
    var segs = [], total = 0, i;
    for (i = 0; i < pts.length - 1; i++) {
        var L = Math.hypot(pts[i + 1][0] - pts[i][0], pts[i + 1][1] - pts[i][1]);
        segs.push(L);
        total += L;
    }
    var d = f * total;
    for (i = 0; i < segs.length; i++) {
        if (d <= segs[i] || i === segs.length - 1) {
            var u = segs[i] ? Math.min(1, d / segs[i]) : 0;
            return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * u, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * u];
        }
        d -= segs[i];
    }
    return pts[pts.length - 1].slice();
}
/* How this particular ball was struck. Everything is derived from a seed
   stored on the pitch, so the play looks identical on every frame. */
var PLAY_MS = { foul: 1500, out: 2500, single: 2500, double: 3000, hr: 4000 };
function hitPlan(g, p, bat, bases) {
    var seed = (p && p.hitSeed != null) ? p.hitSeed : 0.5;
    var s2 = (seed * 7919) % 1;
    var pull = bat === "right" ? -1 : 1; // a righty pulls toward left field
    var out = p.out, a, dist, kind, tLand;
    if (out === "foul") {
        kind = "foul";
        a = (seed < 0.35 ? -pull : pull) * (Math.PI / 4 + 0.17 + s2 * 0.28);
        dist = 108 + s2 * 60;
        tLand = 0.52;
    }
    else if (out === "hr") {
        kind = "hr";
        a = (pull * 0.40 + (seed - 0.5) * 0.70) * (Math.PI / 4);
        tLand = 0.62;
    }
    else if (out === "out") {
        if (seed < 0.45) {
            kind = "ground";
            a = (pull * 0.30 + (seed - 0.22) * 1.5) * (Math.PI / 4);
            dist = 88 + s2 * 36;
            tLand = 0.26;
        }
        else {
            kind = "fly";
            a = (pull * 0.30 + (seed - 0.72) * 1.2) * (Math.PI / 4);
            dist = 224 + s2 * 58;
            tLand = 0.46;
        }
    }
    else if (out === "single") {
        kind = "single";
        a = (pull * 0.25 + (seed - 0.5) * 1.1) * (Math.PI / 4);
        dist = 184 + s2 * 46;
        tLand = 0.42;
    }
    else {
        kind = "double";
        a = (pull * 0.50 + (seed - 0.5) * 0.6) * (Math.PI / 4);
        dist = 246 + s2 * 42;
        tLand = 0.46;
    }
    if (kind !== "foul")
        a = Math.max(-Math.PI / 4 + 0.04, Math.min(Math.PI / 4 - 0.04, a));
    if (kind === "hr")
        dist = wallR(g, a) + 22;
    // Only a home run clears the fence. The wall is much closer down the lines
    // than to center, so a deep pull-side ball has to be pulled back inside it
    // — otherwise the ball (and the fielder chasing it) end up in the seats.
    else if (kind !== "foul")
        dist = Math.min(dist, wallR(g, a) - 18);
    var adv = out === "single" ? 1 : out === "double" ? 2 : out === "hr" ? 4 : 0;
    var runners = [], i;
    if (adv > 0) {
        runners.push({ from: -1, n: adv, batter: true });
        for (i = 0; i < 3; i++)
            if (bases[i])
                runners.push({ from: i, n: Math.min(adv, 3 - i) });
    }
    else {
        runners.push({ from: -1, n: 1, batter: true, retired: out === "out", tease: out === "foul" });
        for (i = 0; i < 3; i++)
            if (bases[i])
                runners.push({ from: i, n: 0 });
    }
    var maxN = 1;
    runners.forEach(function (r) { if (r.n > maxN)
        maxN = r.n; });
    return { kind: kind, ang: a, dist: dist, tLand: tLand, target: polarPt(g, a, dist),
        runners: runners, maxN: maxN, adv: adv };
}
var OFB_CACHE = null, OFB_KEY = "";
function buildOverhead(W, H) {
    var key = W + "x" + H + "@" + dprOf();
    if (OFB_CACHE && OFB_KEY === key)
        return OFB_CACHE;
    var d = dprOf();
    var c = document.createElement("canvas");
    c.width = Math.round(W * d);
    c.height = Math.round(H * d);
    var ctx = c.getContext("2d");
    ctx.scale(d, d);
    var rnd = mulberry32(714232);
    var g = fieldGeom(W, H);
    var FQ = Math.PI / 4;
    ctx.fillStyle = "#050A11";
    ctx.fillRect(0, 0, W, H);
    // stands ringing the park
    var stG = ctx.createRadialGradient(g.hx, g.hy, g.Rf * 0.9, g.hx, g.hy, g.Rc * 1.28);
    stG.addColorStop(0, "#0D1724");
    stG.addColorStop(1, "#060B13");
    ctx.fillStyle = stG;
    ctx.fillRect(0, 0, W, H);
    for (var cr = 0; cr < 900; cr++) {
        var ca = (rnd() - 0.5) * Math.PI * 1.85, cd = wallR(g, Math.max(-FQ, Math.min(FQ, ca))) + 14 + rnd() * 96;
        var cp = polarPt(g, ca, cd);
        if (cp[0] < -6 || cp[0] > W + 6 || cp[1] < -6 || cp[1] > H + 6)
            continue;
        ctx.fillStyle = rnd() < 0.5 ? "rgba(120,136,164,0.30)" : "rgba(150,132,110,0.26)";
        ctx.beginPath();
        ctx.arc(cp[0], cp[1], 1.1, 0, Math.PI * 2);
        ctx.fill();
    }
    // foul-territory grass, just outside the lines
    ctx.fillStyle = "#12431C";
    [-1, 1].forEach(function (sd) {
        ctx.beginPath();
        ctx.moveTo(g.hx, g.hy);
        for (var q = 0; q <= 1.001; q += 0.1) {
            var aa = sd * (FQ + q * 0.30);
            var pp = polarPt(g, aa, wallR(g, FQ) * 0.94);
            ctx.lineTo(pp[0], pp[1]);
        }
        ctx.closePath();
        ctx.fill();
    });
    // fair territory
    var fairPath = function () {
        ctx.beginPath();
        ctx.moveTo(g.hx, g.hy);
        for (var q = -1; q <= 1.001; q += 0.05) {
            var pp = polarPt(g, q * FQ, wallR(g, q * FQ));
            ctx.lineTo(pp[0], pp[1]);
        }
        ctx.closePath();
    };
    var grG = ctx.createRadialGradient(g.hx, g.hy, 20, g.hx, g.hy, g.Rc);
    grG.addColorStop(0, "#2A8A33");
    grG.addColorStop(0.55, "#1F7527");
    grG.addColorStop(1, "#155A1D");
    fairPath();
    ctx.fillStyle = grG;
    ctx.fill();
    ctx.save();
    fairPath();
    ctx.clip();
    // radial mow wedges, the way outfields are cut
    for (var wd = 0; wd < 14; wd++) {
        if (wd % 2)
            continue;
        var a0 = -FQ + (wd / 14) * FQ * 2, a1 = -FQ + ((wd + 1) / 14) * FQ * 2;
        ctx.fillStyle = "rgba(226,255,214,0.045)";
        ctx.beginPath();
        ctx.moveTo(g.hx, g.hy);
        ctx.lineTo.apply(ctx, polarPt(g, a0, g.Rc * 1.1));
        ctx.lineTo.apply(ctx, polarPt(g, a1, g.Rc * 1.1));
        ctx.closePath();
        ctx.fill();
    }
    for (var gb = 0; gb < 1100; gb++) {
        var bx = rnd() * W, by = g.hy - rnd() * g.Rc;
        ctx.strokeStyle = rnd() < 0.5 ? "rgba(0,42,10,0.10)" : "rgba(196,255,186,0.07)";
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + (rnd() - 0.5), by - 1.3);
        ctx.stroke();
    }
    // warning track hugging the wall
    ctx.lineWidth = 11;
    ctx.strokeStyle = "#7A6142";
    ctx.beginPath();
    for (var q2 = -1; q2 <= 1.001; q2 += 0.04) {
        var wp = polarPt(g, q2 * FQ, wallR(g, q2 * FQ) - 6);
        if (q2 <= -1)
            ctx.moveTo(wp[0], wp[1]);
        else
            ctx.lineTo(wp[0], wp[1]);
    }
    ctx.stroke();
    ctx.restore();
    // infield clay sector, then the grass diamond inside it
    var Ri = g.R * 2.42;
    ctx.beginPath();
    ctx.moveTo(g.hx, g.hy);
    for (var q3 = -1; q3 <= 1.001; q3 += 0.05)
        ctx.lineTo.apply(ctx, polarPt(g, q3 * FQ, Ri));
    ctx.closePath();
    var clG = ctx.createRadialGradient(g.hx, g.hy - g.R, 10, g.hx, g.hy - g.R, Ri);
    clG.addColorStop(0, "#B29760");
    clG.addColorStop(1, "#8E7548");
    ctx.fillStyle = clG;
    ctx.fill();
    ctx.save();
    ctx.clip();
    for (var sp2 = 0; sp2 < 420; sp2++) {
        ctx.fillStyle = rnd() < 0.5 ? "rgba(56,40,20,0.11)" : "rgba(255,242,214,0.08)";
        ctx.fillRect(g.hx - Ri + rnd() * Ri * 2, g.hy - Ri + rnd() * Ri, 1.5 + rnd() * 1.6, 1 + rnd());
    }
    ctx.restore();
    var cen = [g.hx, g.hy - g.R];
    var inset = function (i, amt) {
        var b = baseXY(g, i), dx = cen[0] - b[0], dy = cen[1] - b[1], L = Math.hypot(dx, dy) || 1;
        return [b[0] + dx / L * amt, b[1] + dy / L * amt];
    };
    ctx.fillStyle = "#24842E";
    ctx.beginPath();
    var dm = [inset(3, 15), inset(0, 15), inset(1, 15), inset(2, 15)];
    ctx.moveTo(dm[0][0], dm[0][1]);
    dm.slice(1).forEach(function (pt2) { ctx.lineTo(pt2[0], pt2[1]); });
    ctx.closePath();
    ctx.fill();
    // base paths and the dirt cutouts
    ctx.strokeStyle = "#AC9058";
    ctx.lineWidth = 13;
    ctx.lineJoin = "round";
    ctx.beginPath();
    var order = [3, 0, 1, 2];
    order.forEach(function (bi, k) { var b = baseXY(g, bi); if (k === 0)
        ctx.moveTo(b[0], b[1]);
    else
        ctx.lineTo(b[0], b[1]); });
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#AC9058";
    ctx.beginPath();
    ctx.arc(g.hx, g.hy, 25, 0, Math.PI * 2);
    ctx.fill();
    var mnd = polarPt(g, 0, g.R * 0.94);
    ctx.beginPath();
    ctx.arc(mnd[0], mnd[1], 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(60,44,22,0.14)";
    ctx.beginPath();
    ctx.arc(mnd[0], mnd[1], 17, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#E6E2DA";
    ctx.fillRect(mnd[0] - 4, mnd[1] - 1.2, 8, 2.4);
    // foul lines out to the poles
    ctx.lineCap = "round";
    [-1, 1].forEach(function (sd) {
        var fp = polarPt(g, sd * FQ, wallR(g, FQ));
        ctx.strokeStyle = "rgba(255,255,255,0.10)";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(g.hx, g.hy);
        ctx.lineTo(fp[0], fp[1]);
        ctx.stroke();
        ctx.strokeStyle = "rgba(248,250,240,0.62)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(g.hx, g.hy);
        ctx.lineTo(fp[0], fp[1]);
        ctx.stroke();
        ctx.fillStyle = "#FFD63A";
        ctx.beginPath();
        ctx.arc(fp[0], fp[1], 3.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255,214,58,0.22)";
        ctx.beginPath();
        ctx.arc(fp[0], fp[1], 8, 0, Math.PI * 2);
        ctx.fill();
    });
    // the wall itself
    ctx.strokeStyle = "#0E4020";
    ctx.lineWidth = 5;
    ctx.beginPath();
    for (var q4 = -1; q4 <= 1.001; q4 += 0.03) {
        var wp2 = polarPt(g, q4 * FQ, wallR(g, q4 * FQ));
        if (q4 <= -1)
            ctx.moveTo(wp2[0], wp2[1]);
        else
            ctx.lineTo(wp2[0], wp2[1]);
    }
    ctx.stroke();
    ctx.strokeStyle = "rgba(240,204,46,0.85)";
    ctx.lineWidth = 1.6;
    ctx.stroke();
    // bases
    [0, 1, 2].forEach(function (i) {
        var b = baseXY(g, i);
        ctx.save();
        ctx.translate(b[0], b[1]);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = "#F4F2EA";
        ctx.fillRect(-4.6, -4.6, 9.2, 9.2);
        ctx.strokeStyle = "rgba(70,60,44,0.55)";
        ctx.lineWidth = 0.9;
        ctx.strokeRect(-4.6, -4.6, 9.2, 9.2);
        ctx.restore();
    });
    ctx.fillStyle = "#F4F2EA";
    ctx.beginPath();
    ctx.moveTo(g.hx - 5, g.hy - 5);
    ctx.lineTo(g.hx + 5, g.hy - 5);
    ctx.lineTo(g.hx + 5, g.hy + 1);
    ctx.lineTo(g.hx, g.hy + 6);
    ctx.lineTo(g.hx - 5, g.hy + 1);
    ctx.closePath();
    ctx.fill();
    // stadium light wash + vignette to match the broadcast view
    var lw = ctx.createRadialGradient(g.hx, g.hy - g.Rc * 0.35, 30, g.hx, g.hy - g.Rc * 0.35, g.Rc * 1.1);
    lw.addColorStop(0, "rgba(255,244,206,0.06)");
    lw.addColorStop(1, "rgba(255,244,206,0)");
    ctx.fillStyle = lw;
    ctx.fillRect(0, 0, W, H);
    var vg = ctx.createRadialGradient(W / 2, H * 0.55, H * 0.30, W / 2, H * 0.55, H * 0.82);
    vg.addColorStop(0, "rgba(0,0,0,0)");
    vg.addColorStop(1, "rgba(2,5,10,0.55)");
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
    OFB_CACHE = c;
    OFB_KEY = key;
    return c;
}
function FieldView({ pitch, bases, t, bat, kit }) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var c = ref.current;
        if (!c || !pitch)
            return;
        var W = CW, H = CH;
        var ctx = prepCanvas(c, W, H);
        var g = fieldGeom(W, H);
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(buildOverhead(W, H), 0, 0, W, H);
        var K = kit || kits(0);
        var UB = uni(K.bat), UF = uni(K.fld);
        var plan = hitPlan(g, pitch, bat, bases);
        var lerp2 = function (a, b, u) { return a + (b - a) * u; };
        var home = baseXY(g, 3);
        var spots = fielderSpots(g);
        // ── who is going to field it ──
        var nearest = 0, nd = 1e9;
        spots.forEach(function (sp, i) {
            if (i === 1)
                return; // the catcher stays home
            var dd = Math.hypot(sp[0] - plan.target[0], sp[1] - plan.target[1]);
            if (dd < nd) {
                nd = dd;
                nearest = i;
            }
        });
        // ── ball flight ──
        var bu = Math.min(1, t / plan.tLand);
        var be = 1 - Math.pow(1 - bu, 2.1); // jumps off the bat, decays
        var bpos = [lerp2(home[0], plan.target[0], be), lerp2(home[1], plan.target[1], be)];
        var airborne = plan.kind === "fly" || plan.kind === "hr" || plan.kind === "double" || plan.kind === "single" || plan.kind === "foul";
        var loft = airborne ? Math.sin(Math.PI * bu) : 0;
        var ballLive = true, ballFade = 1;
        if (plan.kind === "hr") {
            if (t > 0.78)
                ballFade = Math.max(0, 1 - (t - 0.78) / 0.14);
        }
        else if (plan.kind === "foul") {
            if (t > 0.66)
                ballFade = Math.max(0, 1 - (t - 0.66) / 0.16);
        }
        if (plan.kind === "hr" && t > plan.tLand) {
            // keep sailing past the wall
            var ov = (t - plan.tLand) / 0.30;
            bpos = polarPt(g, plan.ang, plan.dist + ov * 70);
        }
        if (ballFade <= 0)
            ballLive = false;
        // ── fielder converges, then throws ──
        var fpos = spots.map(function (sp) { return sp.slice(); });
        var conv = Math.max(0, Math.min(1, (t - 0.05) / Math.max(0.08, plan.tLand - 0.02)));
        conv = conv * conv * (3 - 2 * conv);
        if (plan.kind !== "hr" && plan.kind !== "foul") {
            fpos[nearest] = [lerp2(spots[nearest][0], plan.target[0], conv),
                lerp2(spots[nearest][1], plan.target[1], conv)];
        }
        /* ── The rest of the defense breaks with the ball. Whoever isn't
           chasing it rotates to a bag: the middle infielder on the far side
           of the ball covers second (the near one goes out as the relay man),
           the first baseman takes his bag, and third gets covered whenever a
           runner is heading for it. They're in position before the throw
           lands, the way a real rotation works. ── */
        var covU = Math.max(0, Math.min(1, (t - 0.06) / Math.max(0.12, plan.tLand)));
        covU = covU * covU * (3 - 2 * covU);
        var receiver = -1;
        var pick = function (pref, alt) { return pref === nearest ? alt : pref; };
        var assign = [];
        if (plan.kind === "ground") {
            receiver = pick(2, 0); // first baseman, or the pitcher covering
            assign.push([receiver, baseXY(g, 0)]);
        }
        else if (plan.kind === "single" || plan.kind === "double") {
            var mid = plan.ang < 0 ? 3 : 4; // 2B covers on balls to left, SS on balls to right
            var oth = mid === 3 ? 4 : 3;
            if (mid === nearest) {
                var sw = mid;
                mid = oth;
                oth = sw;
            }
            receiver = mid;
            assign.push([mid, baseXY(g, 1)]);
            assign.push([oth, [lerp2(plan.target[0], baseXY(g, 1)[0], 0.44),
                    lerp2(plan.target[1], baseXY(g, 1)[1], 0.44)]]); // relay man
            if (plan.runners.some(function (r) { return r.n > 0 && r.from + r.n === 2; }))
                assign.push([pick(5, 0), baseXY(g, 2)]); // somebody is going to third
            assign.push([pick(2, 0), baseXY(g, 0)]);
        }
        else if (plan.kind === "fly") {
            assign.push([pick(3, 4), baseXY(g, 1)]); // middle infield drifts over on the catch
        }
        assign.forEach(function (as) {
            if (as[0] === nearest)
                return;
            fpos[as[0]] = [lerp2(spots[as[0]][0], as[1][0], covU),
                lerp2(spots[as[0]][1], as[1][1], covU)];
        });
        // caught / fielded — the ball rides with the fielder afterwards
        var caught = plan.kind !== "hr" && plan.kind !== "foul" && t >= plan.tLand;
        var throwT = -1, throwTo = null;
        if (plan.kind === "ground") {
            throwT = (t - plan.tLand - 0.04) / 0.26;
            throwTo = baseXY(g, 0);
        }
        else if (plan.kind === "single" || plan.kind === "double") {
            throwT = (t - plan.tLand - 0.12) / 0.34;
            throwTo = baseXY(g, plan.kind === "single" ? 1 : 1);
        }
        if (caught && throwTo && throwT > 0) {
            var tu = Math.min(1, throwT);
            bpos = [lerp2(plan.target[0], throwTo[0], tu), lerp2(plan.target[1], throwTo[1], tu)];
            loft = Math.sin(Math.PI * tu) * 0.55;
            // the throw line
            ctx.strokeStyle = "rgba(255,255,255,0.16)";
            ctx.lineWidth = 1.2;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(plan.target[0], plan.target[1]);
            ctx.lineTo(bpos[0], bpos[1]);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        else if (caught) {
            bpos = plan.target.slice();
            loft = 0;
        }
        // ── the ball's path so far, as a dotted arc ──
        if (ballLive) {
            ctx.strokeStyle = plan.kind === "foul" ? "rgba(255,207,61,0.35)" : "rgba(255,255,255,0.34)";
            ctx.lineWidth = 1.6;
            ctx.setLineDash([2, 5]);
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(home[0], home[1]);
            ctx.lineTo(bpos[0], bpos[1]);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        // ── fielders ──
        fpos.forEach(function (sp, i) {
            ctx.fillStyle = "rgba(0,0,0,0.35)";
            ctx.beginPath();
            ctx.ellipse(sp[0], sp[1] + 3, 5.4, 2.4, 0, 0, Math.PI * 2);
            ctx.fill();
            var fg = ctx.createRadialGradient(sp[0] - 1.6, sp[1] - 2, 0.5, sp[0], sp[1], 6);
            fg.addColorStop(0, UF.pL);
            fg.addColorStop(1, UF.pD);
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.arc(sp[0], sp[1], 5.2, 0, Math.PI * 2);
            ctx.fill();
            // cap crown so you can tell the sides apart from above
            ctx.fillStyle = UF.cap;
            ctx.beginPath();
            ctx.arc(sp[0], sp[1], 2.9, 0, Math.PI * 2);
            ctx.fill();
            var live = i === nearest || (i === receiver && throwT > 0);
            ctx.strokeStyle = live ? "rgba(255,207,61,0.9)" : shade(UF.jM, -0.2);
            ctx.lineWidth = live ? 1.9 : 1.3;
            ctx.stroke();
        });
        // ── runners ──
        var scoreFlash = 0;
        plan.runners.forEach(function (r) {
            var f;
            if (r.tease)
                f = Math.sin(Math.PI * Math.min(t / 0.5, 1)) * 0.22;
            else if (r.n === 0)
                f = Math.sin(t * 7) * 0.035; // a short lead off the bag
            else
                f = Math.max(0, Math.min(1, (t - 0.06) * plan.maxN / (0.86 * r.n)));
            var pts = [baseXY(g, r.from < 0 ? 3 : r.from)];
            var lim = r.n === 0 ? 1 : r.n;
            for (var k = 1; k <= lim; k++) {
                var idx = r.from + k;
                pts.push(baseXY(g, idx >= 3 ? 3 : idx));
                if (idx >= 3)
                    break;
            }
            if (r.retired) {
                var stopAt = plan.kind === "fly" ? 0.62 : 0.80;
                f = Math.min(f, stopAt);
            }
            var pos = polyPoint(pts, f);
            var scored = r.n > 0 && (r.from + r.n) >= 3 && f >= 1;
            var arrive = 0.06 + 0.86 * r.n / plan.maxN;
            if (scored && t > arrive && t < arrive + 0.30)
                scoreFlash = Math.max(scoreFlash, 1 - (t - arrive) / 0.30);
            if (scored && t > arrive + 0.30)
                return; // he's in the dugout
            var retiredNow = r.retired && ((plan.kind === "fly" && t > plan.tLand + 0.06) || (plan.kind === "ground" && t > 0.66));
            ctx.fillStyle = "rgba(0,0,0,0.4)";
            ctx.beginPath();
            ctx.ellipse(pos[0], pos[1] + 3.5, 6, 2.6, 0, 0, Math.PI * 2);
            ctx.fill();
            var rg = ctx.createRadialGradient(pos[0] - 1.8, pos[1] - 2.2, 0.5, pos[0], pos[1], 6.4);
            if (retiredNow) {
                rg.addColorStop(0, "#8E9AAE");
                rg.addColorStop(1, "#4A5468");
            }
            else {
                rg.addColorStop(0, UB.jL);
                rg.addColorStop(1, UB.jD);
            }
            ctx.fillStyle = rg;
            ctx.beginPath();
            ctx.arc(pos[0], pos[1], 5.8, 0, Math.PI * 2);
            ctx.fill();
            if (!retiredNow) {
                ctx.fillStyle = UB.helD;
                ctx.beginPath();
                ctx.arc(pos[0], pos[1], 3.0, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.strokeStyle = retiredNow ? "rgba(224,59,59,0.9)" : (r.batter ? "rgba(255,207,61,0.95)" : UB.trim + "CC");
            ctx.lineWidth = 1.7;
            ctx.stroke();
            if (retiredNow) {
                ctx.strokeStyle = "#E03B3B";
                ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.moveTo(pos[0] - 3.4, pos[1] - 3.4);
                ctx.lineTo(pos[0] + 3.4, pos[1] + 3.4);
                ctx.moveTo(pos[0] + 3.4, pos[1] - 3.4);
                ctx.lineTo(pos[0] - 3.4, pos[1] + 3.4);
                ctx.stroke();
            }
        });
        // ── the ball on top of everything ──
        if (ballLive) {
            ctx.globalAlpha = ballFade;
            var br = 3.1 + loft * 2.2;
            ctx.fillStyle = "rgba(0,0,0," + (0.30 - loft * 0.16) + ")";
            ctx.beginPath();
            ctx.ellipse(bpos[0], bpos[1] + 2 + loft * 5, br * 0.85, br * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            var glw = ctx.createRadialGradient(bpos[0], bpos[1], 1, bpos[0], bpos[1], br * 3.4);
            glw.addColorStop(0, "rgba(255,250,230,0.30)");
            glw.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glw;
            ctx.beginPath();
            ctx.arc(bpos[0], bpos[1], br * 3.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            var bg2 = ctx.createRadialGradient(bpos[0] - br * 0.35, bpos[1] - br * 0.35, 0, bpos[0], bpos[1], br);
            bg2.addColorStop(0, "#FFFFFF");
            bg2.addColorStop(1, "#CFC4AA");
            ctx.fillStyle = bg2;
            ctx.beginPath();
            ctx.arc(bpos[0], bpos[1], br, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        // ── a run crossing the plate ──
        if (scoreFlash > 0) {
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            var sg = ctx.createRadialGradient(home[0], home[1], 2, home[0], home[1], 34);
            sg.addColorStop(0, "rgba(255,214,80," + (0.55 * scoreFlash) + ")");
            sg.addColorStop(1, "rgba(255,214,80,0)");
            ctx.fillStyle = sg;
            ctx.beginPath();
            ctx.arc(home[0], home[1], 34, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            ctx.fillStyle = "rgba(255,207,61," + scoreFlash + ")";
            ctx.font = "700 12px " + FU;
            ctx.textAlign = "center";
            ctx.fillText("RUN SCORES", home[0], home[1] + 30);
            ctx.textAlign = "left";
        }
        // ── the call, once the play has developed ──
        var LBL = { foul: ["FOUL BALL", T.gold], ground: ["OUT AT FIRST", T.strike], fly: ["CAUGHT \u2014 OUT", T.strike],
            single: ["BASE HIT", T.green], double: ["DOUBLE", T.green], hr: ["HOME RUN", T.gold] };
        var lb = LBL[plan.kind];
        var lt = plan.kind === "hr" ? 0.30 : plan.kind === "foul" ? 0.55 : 0.62;
        if (lb && t > lt) {
            var la = Math.min(1, (t - lt) / 0.14);
            ctx.save();
            ctx.globalAlpha = la;
            ctx.fillStyle = "rgba(4,8,14,0.82)";
            ctx.beginPath();
            if (ctx.roundRect)
                ctx.roundRect(W / 2 - 84, 14, 168, 32, 8);
            else
                ctx.rect(W / 2 - 84, 14, 168, 32);
            ctx.fill();
            ctx.strokeStyle = lb[1] + "66";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = lb[1];
            ctx.font = "22px " + FD;
            ctx.textAlign = "center";
            ctx.shadowColor = lb[1] + "88";
            ctx.shadowBlur = 12;
            ctx.fillText(lb[0], W / 2, 38);
            ctx.restore();
            ctx.textAlign = "left";
        }
        // ── wide-shot label so the cut reads as a camera change ──
        ctx.fillStyle = "rgba(120,140,164,0.5)";
        ctx.font = "600 9px " + FM;
        ctx.textAlign = "left";
        ctx.fillText("CENTER FIELD CAM", 12, H - 12);
        ctx.fillStyle = K.bat.jersey;
        ctx.fillRect(W - 96, H - 20, 3, 10);
        ctx.fillStyle = "rgba(190,206,226,0.65)";
        ctx.textAlign = "right";
        ctx.fillText(K.bat.abbr + " BATTING", W - 12, H - 12);
        ctx.textAlign = "left";
    }, [pitch, t, bases, bat, kit]);
    return (0, jsx_runtime_1.jsx)("canvas", { ref: ref, style: { width: CW, maxWidth: "100%", maxHeight: "100%", aspectRatio: CW + " / " + CH, display: "block", borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.7)" } });
}
/* ═══ SHARED UI BITS ═══ */
function Btn(props) {
    var base = {
        border: "none", borderRadius: 13, cursor: "pointer", fontFamily: FU,
        fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase",
        WebkitTapHighlightColor: "transparent", userSelect: "none", touchAction: "manipulation"
    };
    // Physical-key edge: soft top highlight and a darker bottom lip, layered
    // under whatever outer glow the caller asked for.
    var outer = props.style && props.style.boxShadow ? props.style.boxShadow + ", " : "";
    var merged = Object.assign({}, base, props.style, {
        boxShadow: outer + "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -2px 0 rgba(0,0,0,0.30)"
    });
    var down = function (e) { e.currentTarget.classList.add("is-down"); };
    var up = function (e) { e.currentTarget.classList.remove("is-down"); };
    var rest = Object.assign({}, props);
    delete rest.style;
    delete rest.className;
    return (0, jsx_runtime_1.jsx)("button", { ...rest, className: "bc-btn " + (props.className || ""), style: merged, onPointerDown: down, onPointerUp: up, onPointerLeave: up, onPointerCancel: up, onTouchStart: down, onTouchEnd: up, onTouchCancel: up });
}
function Pip({ on, c }) {
    return (0, jsx_runtime_1.jsx)("span", { style: { width: 7, height: 7, borderRadius: "50%", display: "inline-block",
            background: on ? c : "#0C1520",
            boxShadow: on ? "0 0 7px " + c + ", inset 0 -1px 1px rgba(255,255,255,0.35)" : "inset 0 0 0 1px " + T.faint } });
}
function PipRow({ label, n, total, c }) {
    var a = [];
    for (var i = 0; i < total; i++)
        a.push(i);
    return (0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 3 }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.dim, fontSize: 9, fontFamily: FM, fontWeight: 700, letterSpacing: 0.5 }, children: label }), a.map(function (i) { return (0, jsx_runtime_1.jsx)(Pip, { on: i < n, c: c }, i); })] });
}
function ScoreBoard({ gm, final }) {
    var cols = [];
    for (var i = 0; i < INNINGS; i++)
        cols.push(i);
    var cellStyle = function (live) {
        return { textAlign: "center", fontFamily: FM, fontSize: 12, fontWeight: 700,
            padding: "3px 0", color: live ? T.gold : "#C08C1E",
            background: live ? "rgba(255,207,61,0.10)" : "transparent",
            borderRadius: 3, textShadow: live ? "0 0 8px rgba(255,207,61,0.6)" : "none" };
    };
    var head = { textAlign: "center", fontFamily: FM, fontSize: 9, color: T.dim, fontWeight: 700, letterSpacing: 0.5 };
    var grid = { display: "grid", gridTemplateColumns: "48px repeat(" + INNINGS + ",1fr) 7px 26px 24px",
        alignItems: "center", columnGap: 2 };
    return ((0, jsx_runtime_1.jsxs)("div", { style: { width: "100%", padding: "6px 9px 7px", boxSizing: "border-box",
            background: "linear-gradient(180deg,#0A121B,#060C13)", border: "1px solid " + T.line,
            borderRadius: 11, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: grid, children: [(0, jsx_runtime_1.jsx)("div", {}), cols.map(function (i) { return (0, jsx_runtime_1.jsx)("div", { style: head, children: i + 1 }, i); }), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, head, { color: T.muted }), children: "R" }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, head, { color: T.muted }), children: "H" })] }), [0, 1].map(function (ti) {
                var tm = TEAMS[ti];
                var atBat = !final && gm.half === ti && gm.inning <= INNINGS;
                return ((0, jsx_runtime_1.jsxs)("div", { style: grid, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 4, minWidth: 0 }, children: [(0, jsx_runtime_1.jsx)("span", { style: { width: 3, height: 13, borderRadius: 2, background: tm.jersey,
                                        boxShadow: "0 0 0 1px " + tm.trim + "55", flexShrink: 0 } }), (0, jsx_runtime_1.jsx)("span", { style: { fontFamily: FU, fontWeight: 700, fontSize: 12, letterSpacing: 0.8,
                                        color: atBat ? T.chalk : "#6E7E92" }, children: tm.abbr }), (0, jsx_runtime_1.jsx)("span", { style: { width: 7, fontSize: 8, color: T.gold, lineHeight: 1 }, children: atBat ? "\u25C0" : "" })] }), cols.map(function (i) {
                            var v = gm.line[ti][i];
                            var live = !final && atBat && gm.inning - 1 === i;
                            return (0, jsx_runtime_1.jsx)("div", { style: cellStyle(live), children: v == null ? "\u00B7" : v }, i);
                        }), (0, jsx_runtime_1.jsx)("div", { style: { width: 1, height: 14, background: T.line, margin: "0 auto" } }), (0, jsx_runtime_1.jsx)("div", { style: { textAlign: "center", fontFamily: FM, fontSize: 14, fontWeight: 700,
                                color: T.chalk, textShadow: "0 0 9px rgba(237,239,230,0.28)" }, children: gm.runs[ti] }), (0, jsx_runtime_1.jsx)("div", { style: { textAlign: "center", fontFamily: FM, fontSize: 12, color: T.muted }, children: gm.hits[ti] })] }, ti));
            })] }));
}
function BasesIcon({ bases }) {
    var sq = function (x, y, on, key) {
        return (0, jsx_runtime_1.jsx)("rect", { x: x, y: y, width: "6.4", height: "6.4", transform: "rotate(45 " + (x + 3.2) + " " + (y + 3.2) + ")", fill: on ? T.gold : "none", stroke: on ? T.gold : "#2C3A4E", strokeWidth: "1.3" }, key);
    };
    var any = bases[0] || bases[1] || bases[2];
    return ((0, jsx_runtime_1.jsxs)("svg", { width: "26", height: "16", viewBox: "0 0 26 16", style: { display: "block",
            filter: any ? "drop-shadow(0 0 4px rgba(255,207,61,0.55))" : "none" }, children: [sq(9.8, 1, bases[1], "b2"), sq(16, 6.4, bases[0], "b1"), sq(3.6, 6.4, bases[2], "b3")] }));
}
/* ═══ HIGH SCORES MODAL ═══ */
function HighScoresModal({ onClose }) {
    var hs = (0, react_1.useState)(null), scores = hs[0], setScores = hs[1];
    (0, react_1.useEffect)(function () {
        var on = true;
        loadScores().then(function (l) { if (on)
            setScores(l); });
        return function () { on = false; };
    }, []);
    var fmtD = function (d) { try {
        return new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric" });
    }
    catch (e) {
        return "";
    } };
    var medal = ["\u{1F947}", "\u{1F948}", "\u{1F949}"];
    return ((0, jsx_runtime_1.jsx)("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 110, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, boxSizing: "border-box" }, onClick: onClose, children: (0, jsx_runtime_1.jsxs)("div", { onClick: function (e) { e.stopPropagation(); }, style: { background: "linear-gradient(160deg," + T.panel + "," + T.panel2 + ")", border: "1px solid " + T.line, borderRadius: 18, padding: "20px 16px", maxWidth: 360, width: "100%", maxHeight: "80vh", overflowY: "auto", boxShadow: "0 24px 70px rgba(0,0,0,0.75)" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center", marginBottom: 14 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: T.gold, fontFamily: FD, fontSize: 26, letterSpacing: 1, lineHeight: 1, textShadow: "0 0 22px rgba(255,207,61,0.35)" }, children: "ALL-TIME TOP CALLS" }), (0, jsx_runtime_1.jsx)("div", { style: { color: T.dim, fontSize: 10, fontFamily: FM, letterSpacing: 2.5, marginTop: 5 }, children: "YOUR 10 BEST GAMES" })] }), scores === null && (0, jsx_runtime_1.jsx)("div", { style: { color: T.dim, textAlign: "center", fontSize: 12, padding: "14px 0", fontFamily: FU }, children: "Loading scores" }), scores && scores.length === 0 && (0, jsx_runtime_1.jsxs)("div", { style: { color: T.muted, textAlign: "center", fontSize: 13, padding: "18px 0", fontFamily: FU, lineHeight: 1.6 }, children: ["No games in the books yet.", (0, jsx_runtime_1.jsx)("br", {}), "Get out there and call one, Blue."] }), scores && scores.map(function (e, i) {
                    return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 9, padding: "8px 9px", borderRadius: 10, marginBottom: 5, background: i === 0 ? "rgba(255,207,61,0.07)" : "rgba(4,8,14,0.6)", border: "1px solid " + (i === 0 ? "rgba(255,207,61,0.32)" : T.line) }, children: [(0, jsx_runtime_1.jsx)("span", { style: { width: 24, textAlign: "center", fontSize: i < 3 ? 14 : 11, color: T.dim, fontFamily: FM }, children: i < 3 ? medal[i] : (i + 1) + "." }), (0, jsx_runtime_1.jsxs)("span", { style: { flex: 1, color: i === 0 ? T.gold : T.chalk, fontWeight: 700, fontFamily: FM, fontSize: 13 }, children: [e.score.toLocaleString(), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: 9, fontWeight: 400, color: T.dim }, children: " pts" })] }), (0, jsx_runtime_1.jsxs)("span", { style: { fontSize: 10, color: T.muted, fontFamily: FM, textAlign: "right", lineHeight: 1.5 }, children: [e.lvl, " ", "\u2022", " ", e.acc, "%", e.d ? (0, jsx_runtime_1.jsxs)("span", { style: { color: T.faint }, children: [(0, jsx_runtime_1.jsx)("br", {}), fmtD(e.d)] }) : null] })] }, i));
                }), (0, jsx_runtime_1.jsx)(Btn, { onClick: onClose, style: { width: "100%", marginTop: 10, padding: 12, background: "#101A24", color: T.muted, border: "1px solid " + T.line, fontSize: 14 }, children: "Close" })] }) }));
}
/* ═══ MENU BACKDROP ═══ */
function MenuBackdrop() {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var c = ref.current;
        if (!c)
            return;
        var ctx = prepCanvas(c, CW, CH);
        ctx.drawImage(buildBackground(CW, CH), 0, 0, CW, CH);
        var vg = ctx.createRadialGradient(CW / 2, CH * 0.42, 70, CW / 2, CH * 0.5, CH * 0.82);
        vg.addColorStop(0, "rgba(2,5,9,0.58)");
        vg.addColorStop(0.6, "rgba(2,5,9,0.84)");
        vg.addColorStop(1, "rgba(2,5,9,0.97)");
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, CW, CH);
    }, []);
    return (0, jsx_runtime_1.jsx)("canvas", { ref: ref, className: "bc-drift", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 } });
}
/* ═══ TIMER ═══ */
function TimerBar({ left, max }) {
    var p = Math.max(0, (left / max) * 100);
    var clr = p > 50 ? T.green : p > 25 ? "#EAB308" : T.strike;
    var urgent = p <= 25;
    return ((0, jsx_runtime_1.jsx)("div", { style: { width: "100%", height: 9, background: "#070C12", borderRadius: 5, overflow: "hidden", border: "1px solid " + T.faint, boxSizing: "border-box", position: "relative" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { width: p + "%", height: "100%", position: "relative",
                background: "linear-gradient(180deg," + clr + "ff 0%," + clr + "cc 55%," + clr + "88 100%)",
                borderRadius: 4, transition: "width 0.08s linear, background 0.25s",
                boxShadow: "0 0 10px " + clr + "aa",
                "--tc": clr + "cc",
                animation: urgent ? "bcPulse 0.5s ease-in-out infinite" : "none" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { position: "absolute", right: 0, top: 0, bottom: 0, width: 2, background: "rgba(255,255,255,0.85)", boxShadow: "0 0 6px rgba(255,255,255,0.9)" } }), (0, jsx_runtime_1.jsx)("div", { style: { position: "absolute", left: 0, right: 0, top: 0, height: "45%", background: "linear-gradient(180deg,rgba(255,255,255,0.30),rgba(255,255,255,0))", borderRadius: "4px 4px 0 0" } })] }) }));
}
/* ═══ TUTORIAL ═══ */
function Tutorial({ onClose }) {
    var ps = (0, react_1.useState)(0), pg = ps[0], sPg = ps[1];
    var pages = [
        { t: "Welcome, Blue", x: "You are the home plate umpire. The view is from behind the plate looking toward the pitcher — just like a broadcast strike zone camera.\n\nWatch the pitcher wind up and deliver. The ball flies toward you with realistic break and speed. Make the call before time runs out." },
        { t: "How It Works", x: "1) Hit Throw Pitch to start the windup\n2) Watch the ball release and fly toward you\n3) Tap BALL or STRIKE before the timer expires\n4) The strike zone replay reveals where it crossed\n\nIf the batter SWINGS there is nothing to call — watch the play. A game runs three full innings — top and bottom of each — with a line score up top for both clubs." },
        { t: "Reading Pitches", x: "FASTBALLS — Straight and fast\nSINKERS — Drop plus armside run\nSLIDERS / CUTTERS — Late glove-side break\nCURVEBALLS — Big drop, visible hump\nCHANGEUPS — Looks like a fastball, dives late\nSPLITTERS — Falls off the table" },
        { t: "Pro Tips", x: "Zone runs knees to mid-chest. Edge of the ball on the edge of the zone IS a strike.\n\nCHECK SWINGS: watch the bat — did he go around? Call it.\n\nFULL COUNTS pay double. A bases-loaded punchout pays triple.\n\nDaily Gauntlet: the same 9 pro pitches for everyone, every day." },
        { t: "Difficulty", x: "HIGH SCHOOL — 70-85 mph, 2.8s\nCOLLEGE — 85-93 mph, 2.4s\nMINORS — 90-97 mph, 2.0s\nPRO — 94-101 mph, 1.6s" },
        { t: "Scoring", x: "POINTS PER CORRECT CALL\nEdge of the zone 500 | Tough 300\nSolid 150 | Routine 100\n\nMultiplied by level (Pro is 2x) and your\nstreak heat (up to 2x at 20 straight).\n\nYour call STANDS, right or wrong." }
    ];
    var p2 = pages[pg];
    return ((0, jsx_runtime_1.jsx)("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.93)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, boxSizing: "border-box" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { background: "linear-gradient(160deg," + T.panel + "," + T.panel2 + ")", borderRadius: 18, padding: "20px 18px", maxWidth: 400, width: "100%", border: "1px solid " + T.line, boxShadow: "0 24px 70px rgba(0,0,0,0.75)" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "baseline", gap: 9, marginBottom: 12 }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.goldDim, fontFamily: FM, fontSize: 11, fontWeight: 700, letterSpacing: 1 }, children: "0" + (pg + 1) }), (0, jsx_runtime_1.jsx)("span", { style: { flex: 1, height: 1, background: T.line } }), (0, jsx_runtime_1.jsx)("h2", { style: { color: T.gold, margin: 0, fontFamily: FD, fontSize: 24, letterSpacing: 0.5, lineHeight: 1 }, children: p2.t.toUpperCase() })] }), (0, jsx_runtime_1.jsx)("div", { style: { color: "#A8B4C4", fontSize: 12.5, lineHeight: 1.75, whiteSpace: "pre-line", fontFamily: FM, minHeight: 170 }, children: p2.x }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", gap: 6, marginTop: 14, justifyContent: "center" }, children: pages.map(function (_, i) { return (0, jsx_runtime_1.jsx)("div", { onClick: function () { sPg(i); }, style: { width: i === pg ? 18 : 8, height: 8, borderRadius: 4, cursor: "pointer", background: i === pg ? T.gold : "#1C2836", transition: "width 0.2s" } }, i); }) }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 10, marginTop: 14, justifyContent: "center" }, children: [pg > 0 && (0, jsx_runtime_1.jsx)(Btn, { onClick: function () { sPg(pg - 1); }, style: { padding: "10px 18px", background: "#101A24", color: T.muted, border: "1px solid " + T.line, fontSize: 13 }, children: "Back" }), pg < pages.length - 1
                            ? (0, jsx_runtime_1.jsx)(Btn, { onClick: function () { sPg(pg + 1); }, style: { padding: "10px 20px", background: T.gold, color: "#0A1018", fontSize: 13 }, children: "Next" })
                            : (0, jsx_runtime_1.jsx)(Btn, { onClick: onClose, style: { padding: "10px 26px", background: "linear-gradient(135deg,#2FBF57,#17913C)", color: "#fff", fontSize: 14 }, children: "Play ball" })] })] }) }));
}
/* ═══ UMP SCORECARD — the post-game report card, in the style of the
   published umpire scorecards. Everything here is computed from the
   pitch log after the fact; nothing feeds back into play.

   Run impact is an ESTIMATE: the ball-vs-strike swing in run expectancy
   for the count, scaled by the base-out situation. ═══ */
var CARD_F = "-apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif";
var CNT_SWING = { "0-0": 0.08, "1-0": 0.09, "2-0": 0.12, "3-0": 0.16, "0-1": 0.09, "1-1": 0.11, "2-1": 0.15, "3-1": 0.22, "0-2": 0.13, "1-2": 0.17, "2-2": 0.22, "3-2": 0.35 };
function missRuns(e) {
    var base = CNT_SWING[e.balls + "-" + e.strikes] || 0.10;
    var on = (e.bases[0] ? 1 : 0) + (e.bases[1] ? 1 : 0) + (e.bases[2] ? 1 : 0);
    var f = 1 + 0.45 * on + (on > 0 && e.outs === 2 ? 0.25 : 0);
    return base * Math.min(f, 2.4);
}
// expected accuracy for a taken pitch, by how close to the edge it was
function xAccOf(m) { return m <= 0.5 ? 0.62 : m <= 1.2 ? 0.72 : m <= 2.5 ? 0.86 : m <= 5 ? 0.95 : 0.99; }
function ordinal(n) { return n + (n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"); }
function situationText(e) {
    var o = e.outs === 1 ? "1 out" : e.outs + " outs";
    var r = [];
    if (e.bases[0])
        r.push("first");
    if (e.bases[1])
        r.push("second");
    if (e.bases[2])
        r.push("third");
    var b = r.length === 0 ? "bases empty" : r.length === 3 ? "bases loaded"
        : (r.length === 1 ? "runner on " : "runners on ") + (r.length === 2 ? r[0] + " and " + r[1] : r[0]);
    return o + ", " + b;
}
/* Estimated Ump Zone: a soft vote of the calls actually made, weighted by
   distance, with a light prior toward the true zone so a handful of
   pitches still draws something sensible. Positive = "he'd call that a
   strike". */
function euzVote(taken, x, y, skip) {
    var v = (Math.abs(x) <= 8.5 + 1.45 && Math.abs(y) <= 12 + 1.45) ? 0.35 : -0.35;
    for (var i = 0; i < taken.length; i++) {
        if (i === skip)
            continue;
        var e = taken[i], dx = e.fx - x, dy = e.fy - y;
        v += Math.exp(-(dx * dx + dy * dy) / (2 * 2.8 * 2.8)) * (e.call === "strike" ? 1 : -1);
    }
    return v;
}
function Donut({ pct, label, sub }) {
    var r = 26, c = 2 * Math.PI * r, k = Math.max(0, Math.min(100, pct)) / 100;
    return ((0, jsx_runtime_1.jsxs)("svg", { width: "70", height: "70", viewBox: "0 0 70 70", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "35", cy: "35", r: r, fill: "none", stroke: "#E4E4E0", strokeWidth: "8" }), (0, jsx_runtime_1.jsx)("circle", { cx: "35", cy: "35", r: r, fill: "none", stroke: "#151515", strokeWidth: "8", strokeLinecap: "butt", strokeDasharray: (c * k) + " " + c, transform: "rotate(-90 35 35)" }), (0, jsx_runtime_1.jsx)("text", { x: "35", y: "34", textAnchor: "middle", fontFamily: CARD_F, fontWeight: "700", fontSize: "15", fill: "#111", children: label }), (0, jsx_runtime_1.jsx)("text", { x: "35", y: "45", textAnchor: "middle", fontFamily: CARD_F, fontSize: "7.5", fill: "#333", children: sub })] }));
}
function MissedCallsPlot({ taken, ranked }) {
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var c = ref.current;
        if (!c)
            return;
        var W = 156, H = 196, s = 4;
        var ctx = prepCanvas(c, W, H);
        ctx.clearRect(0, 0, W, H);
        var cx = W / 2, cy = H / 2;
        var X = function (fx) { return cx + fx * s; }, Y = function (fy) { return cy - fy * s; };
        // estimated ump zone: 1-inch cells unioned into a single path and
        // filled once, so overlaps don't stack into a grid pattern
        ctx.fillStyle = "rgba(226,150,150,0.42)";
        ctx.beginPath();
        for (var gx = -17; gx <= 17; gx += 0.5)
            for (var gy = -21; gy <= 21; gy += 0.5) {
                if (euzVote(taken, gx, gy, -1) > 0)
                    ctx.rect(X(gx) - s * 0.33, Y(gy) - s * 0.33, s * 0.66, s * 0.66);
            }
        ctx.fill();
        // true zone
        ctx.strokeStyle = "#151515";
        ctx.lineWidth = 1.2;
        ctx.strokeRect(X(-8.5), Y(12), 17 * s, 24 * s);
        // taken pitches called correctly: faint, so the misses carry the plot
        ctx.fillStyle = "rgba(60,60,60,0.16)";
        taken.forEach(function (e) {
            if (!e.ok)
                return;
            ctx.beginPath();
            ctx.arc(X(e.fx), Y(e.fy), 2.2, 0, Math.PI * 2);
            ctx.fill();
        });
        // misses at true ball size
        taken.forEach(function (e) {
            if (e.ok)
                return;
            ctx.fillStyle = e.timedOut ? "rgba(120,120,120,0.85)" : "rgba(208,74,74,0.88)";
            ctx.beginPath();
            ctx.arc(X(e.fx), Y(e.fy), 1.45 * s, 0, Math.PI * 2);
            ctx.fill();
        });
        // number the impactful ones
        ctx.font = "700 10px " + CARD_F;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ranked.forEach(function (e, i) {
            var px = X(e.fx), py = Y(e.fy);
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(px, py, 5.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#151515";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = "#111";
            ctx.fillText(String(i + 1), px, py + 0.5);
        });
    }, [taken, ranked]);
    return (0, jsx_runtime_1.jsx)("canvas", { ref: ref, style: { width: 156, height: 196, display: "block", margin: "0 auto" } });
}
function UmpScorecard({ log, game, lvlLabel, onClose }) {
    var taken = log.filter(function (e) { return !e.check; });
    var nT = taken.length, nOk = taken.filter(function (e) { return e.ok; }).length;
    var acc = nT ? nOk / nT : 0;
    var xAcc = nT ? taken.reduce(function (a, e) { return a + xAccOf(e.m); }, 0) / nT : 0;
    var rel = (acc - xAcc) * 100;
    var fewer = (xAcc - acc) * nT;
    // favor: a miss helps whoever it helped
    var favor = [0, 0];
    taken.forEach(function (e) {
        if (e.ok || e.timedOut)
            return;
        var runs = missRuns(e);
        var bat = e.half, fld = 1 - e.half;
        if (e.call === "strike")
            favor[fld] += runs;
        else
            favor[bat] += runs;
    });
    var net = favor[1] - favor[0], favTeam = net > 0 ? TEAMS[1] : TEAMS[0];
    // consistency: does each call agree with his own estimated zone?
    var agree = 0, ballsInEUZ = 0, strikesOutEUZ = 0;
    taken.forEach(function (e, i) {
        var v = euzVote(taken, e.fx, e.fy, i);
        var inZ = v > 0;
        if ((e.call === "strike") === inZ)
            agree++;
        else if (e.call === "ball")
            ballsInEUZ++;
        else
            strikesOutEUZ++;
    });
    var cons = nT ? agree / nT : 0;
    var ranked = taken.filter(function (e) { return !e.ok && !e.timedOut; })
        .sort(function (a, b) { return missRuns(b) - missRuns(a); }).slice(0, 3);
    var byCall = function (kind) {
        var g = taken.filter(function (e) { return e.call === kind; });
        var ok = g.filter(function (e) { return e.ok; }).length;
        var xa = g.length ? g.reduce(function (a, e) { return a + xAccOf(e.m); }, 0) / g.length : 0;
        return { n: g.length, pct: g.length ? ok / g.length : 0, avg: xa };
    };
    var cb = byCall("ball"), cs = byCall("strike");
    var d = new Date();
    var dateStr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()] + ", " +
        ("0" + (d.getMonth() + 1)).slice(-2) + "/" + ("0" + d.getDate()).slice(-2) + "/" + d.getFullYear();
    var P = function (v) { return Math.round(v * 100) + "%"; };
    var H3 = { fontFamily: CARD_F, fontWeight: 700, fontSize: 12.5, color: "#111", lineHeight: 1.15 };
    var small = { fontFamily: CARD_F, fontSize: 8.6, color: "#222", lineHeight: 1.25 };
    var Bar = function (props) {
        if (!props.n)
            return ((0, jsx_runtime_1.jsxs)("div", { style: { height: 16, marginTop: 4, marginBottom: 2, fontFamily: CARD_F, fontSize: 10, color: "#666", lineHeight: "16px" }, children: ["no ", props.kind, " called tonight"] }));
        return ((0, jsx_runtime_1.jsxs)("div", { style: { position: "relative", height: 16, background: "#E9E9E4", marginTop: 4, marginBottom: 2 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { width: P(props.v), height: "100%", background: props.c } }), (0, jsx_runtime_1.jsx)("div", { style: { position: "absolute", top: -2, bottom: -2, left: P(props.avg), borderLeft: "1.5px dashed #222" } }), (0, jsx_runtime_1.jsx)("div", { style: { position: "absolute", right: -38, top: 0, fontFamily: CARD_F, fontWeight: 700, fontSize: 12, color: "#111" }, children: P(props.v) }), (0, jsx_runtime_1.jsx)("div", { style: { position: "absolute", left: "calc(" + P(props.avg) + " - 10px)", top: -12, fontFamily: CARD_F, fontSize: 7.5, color: "#333" }, children: "avg." })] }));
    };
    return ((0, jsx_runtime_1.jsx)("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 50, background: "rgba(2,5,10,0.86)", overflowY: "auto", WebkitOverflowScrolling: "touch", padding: "18px 12px 40px", boxSizing: "border-box" }, children: (0, jsx_runtime_1.jsxs)("div", { onClick: function (e) { e.stopPropagation(); }, className: "bc-panel", style: { background: "#FAFAF8", color: "#111", borderRadius: 10, maxWidth: 340, margin: "0 auto", padding: "14px 14px 16px", boxShadow: "0 24px 70px rgba(0,0,0,0.8)", textAlign: "center" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontFamily: CARD_F, fontWeight: 800, fontSize: 26, letterSpacing: -0.5, color: "#111" }, children: "Blue" }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", marginTop: 2 }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontWeight: 700, fontSize: 15, color: "#111" }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[0].jersey }, children: TEAMS[0].abbr }), " vs. ", (0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[1].jersey }, children: TEAMS[1].abbr }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[0].jersey }, children: game.runs[0] }), " \u00A0-\u00A0 ", (0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[1].jersey }, children: game.runs[1] })] }), (0, jsx_runtime_1.jsxs)("svg", { width: "58", height: "66", viewBox: "0 0 58 66", children: [(0, jsx_runtime_1.jsx)("path", { d: "M8 8 Q29 -6 50 8 L52 30 Q50 58 29 64 Q8 58 6 30 Z", fill: "#111" }), (0, jsx_runtime_1.jsx)("path", { d: "M14 22 Q29 14 44 22 L44 28 Q29 21 14 28 Z", fill: "#FAFAF8" }), (0, jsx_runtime_1.jsx)("path", { d: "M22 34 Q29 30 36 34 L36 40 Q29 36 22 40 Z", fill: "#FAFAF8" }), (0, jsx_runtime_1.jsx)("circle", { cx: "29", cy: "48", r: "3", fill: "#FAFAF8" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontWeight: 700, fontSize: 13.5, color: "#111" }, children: [dateStr.split(", ")[0], ",", (0, jsx_runtime_1.jsx)("br", {}), dateStr.split(", ")[1]] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontSize: 9, color: "#333", marginTop: 2 }, children: ["Full Count ", "\u00B7", " ", lvlLabel, (0, jsx_runtime_1.jsx)("br", {}), nT, " taken pitches, ", log.length - nT, " check-swing appeals"] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 4, marginTop: 12, alignItems: "start" }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Overall", (0, jsx_runtime_1.jsx)("br", {}), "Accuracy"] }), (0, jsx_runtime_1.jsx)(Donut, { pct: acc * 100, label: P(acc), sub: "xAcc: " + P(xAcc) }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: ["Called ", nOk, " of ", nT, (0, jsx_runtime_1.jsx)("br", {}), "taken pitches correctly"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Relative", (0, jsx_runtime_1.jsx)("br", {}), "Accuracy"] }), (0, jsx_runtime_1.jsxs)("div", { style: { height: 70, display: "flex", flexDirection: "column", justifyContent: "center" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontWeight: 800, fontSize: 22, color: "#111" }, children: [(rel >= 0 ? "+" : "") + rel.toFixed(1), "%"] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontSize: 9, color: "#222" }, children: [rel >= 0 ? "above" : "below", " expected"] })] }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: [Math.abs(fewer).toFixed(1), " ", fewer > 0 ? "fewer" : "more", " correct", (0, jsx_runtime_1.jsx)("br", {}), "calls than expected"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Overall", (0, jsx_runtime_1.jsx)("br", {}), "Favor"] }), (0, jsx_runtime_1.jsxs)("div", { style: { height: 70, display: "flex", flexDirection: "column", justifyContent: "center" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontFamily: CARD_F, fontWeight: 800, fontSize: 22, color: Math.abs(net) < 0.005 ? "#111" : favTeam.jersey }, children: Math.abs(net) < 0.005 ? "even" : (net > 0 ? "+" : "+") + Math.abs(net).toFixed(2) }), (0, jsx_runtime_1.jsx)("div", { style: { fontFamily: CARD_F, fontSize: 9, color: Math.abs(net) < 0.005 ? "#222" : favTeam.jersey }, children: Math.abs(net) < 0.005 ? "no lean" : "runs for " + favTeam.abbr })] }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: ["est. run impact of", (0, jsx_runtime_1.jsx)("br", {}), "missed calls"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Overall", (0, jsx_runtime_1.jsx)("br", {}), "Consistency"] }), (0, jsx_runtime_1.jsx)(Donut, { pct: cons * 100, label: P(cons), sub: "own zone" }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: [ballsInEUZ, " called balls inside EUZ", (0, jsx_runtime_1.jsx)("br", {}), strikesOutEUZ, " called strikes outside"] })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "156px 1fr", gap: 8, marginTop: 14, textAlign: "left" }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14, textAlign: "center" }), children: "All Missed Calls" }), (0, jsx_runtime_1.jsxs)("div", { style: Object.assign({}, small, { textAlign: "center", marginBottom: 4 }), children: ["true zone and ", (0, jsx_runtime_1.jsx)("span", { style: { color: "#C8403C" }, children: "Estimated Ump Zone (EUZ)" })] }), (0, jsx_runtime_1.jsx)(MissedCallsPlot, { taken: taken, ranked: ranked })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14 }), children: "Impactful Missed Calls" }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, small, { marginBottom: 6 }), children: "largest estimated changes in run expectancy" }), ranked.length === 0 && (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, small, { fontStyle: "italic", marginTop: 10 }), children: "None. A perfect night behind the dish." }), ranked.map(function (e, i) {
                                    return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "14px 1fr", marginBottom: 8 }, children: [(0, jsx_runtime_1.jsxs)("div", { style: Object.assign({}, small, { fontWeight: 700 }), children: [i + 1, ":"] }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: [(e.half === 0 ? "Top" : "Bottom") + " of the " + ordinal(e.inning), (0, jsx_runtime_1.jsx)("br", {}), situationText(e), (0, jsx_runtime_1.jsx)("br", {}), e.balls + "-" + e.strikes + " count, " + (e.call === "strike" ? "ball is called a strike" : "strike is called a ball"), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { color: "#555" }, children: "\u2248 " + missRuns(e).toFixed(2) + " runs for " + (e.call === "strike" ? TEAMS[1 - e.half].abbr : TEAMS[e.half].abbr) })] })] }, i));
                                })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "left", marginTop: 6, paddingRight: 40 }, children: [(0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14 }), children: "Accuracy on called balls" }), (0, jsx_runtime_1.jsx)("div", { style: { position: "relative", marginTop: 12 }, children: (0, jsx_runtime_1.jsx)(Bar, { v: cb.pct, avg: cb.avg, n: cb.n, kind: "balls", c: "#8DC48A" }) }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14, marginTop: 12 }), children: "and strikes" }), (0, jsx_runtime_1.jsx)("div", { style: { position: "relative", marginTop: 12 }, children: (0, jsx_runtime_1.jsx)(Bar, { v: cs.pct, avg: cs.avg, n: cs.n, kind: "strikes", c: "#C9625E" }) })] }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, small, { color: "#666", marginTop: 12 }), children: "Run impact and expected accuracy are estimates from the count, base-out state and edge distance." }), (0, jsx_runtime_1.jsx)(Btn, { onClick: onClose, style: { width: "100%", padding: 12, marginTop: 12, background: "#151515", color: "#FAFAF8", fontSize: 14 }, children: "Close" })] }) }));
}
/* ═══ GAME OVER ═══ */
function GameOver({ stats, game, promo, gameId, lvlLabel, daily, log, onRestart, onMenu }) {
    var pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    var scS = (0, react_1.useState)(false), showCard = scS[0], setShowCard = scS[1];
    var gr = pct >= 95 ? "A+" : pct >= 90 ? "A" : pct >= 85 ? "B" : pct >= 80 ? "C" : "D";
    var gc2 = { "A+": T.green, A: T.green, B: T.blue, C: "#EAB308", D: T.strike };
    var rkS = (0, react_1.useState)(0), rank = rkS[0], setRank = rkS[1];
    (0, react_1.useEffect)(function () {
        if (stats.total <= 0)
            return;
        var on = true;
        saveScore({ id: gameId, score: stats.score, lvl: lvlLabel, acc: pct, d: Date.now() }).then(function (l) {
            if (!on)
                return;
            var r = l.findIndex(function (e) { return e.id === gameId; });
            if (r >= 0)
                setRank(r + 1);
        }).catch(function () { });
        return function () { on = false; };
    }, []);
    var items = daily
        ? [["ACCURACY", pct + "%", gc2[gr]], ["GRADE", gr, gc2[gr]], ["BEST STREAK", stats.bestStreak, T.gold], ["CALLS", stats.total, T.chalk]]
        : [["ACCURACY", pct + "%", gc2[gr]], ["GRADE", gr, gc2[gr]], ["BEST STREAK", stats.bestStreak, T.gold], ["CALLS", stats.total, T.chalk]];
    return ((0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center", padding: "22px 18px", background: "linear-gradient(170deg," + T.panel + "," + T.panel2 + ")", borderRadius: 20, border: "1px solid " + T.line, maxWidth: 360, margin: "0 auto", boxShadow: "0 24px 70px rgba(0,0,0,0.7)" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontSize: 46, color: T.gold, fontFamily: FD, letterSpacing: 6, lineHeight: 1, textShadow: "0 0 30px rgba(255,207,61,0.35)" }, children: "FINAL" }), (0, jsx_runtime_1.jsx)("h2", { style: { color: T.chalk, fontFamily: FU, fontWeight: 600, margin: "6px 0 2px", fontSize: 19, letterSpacing: 0.5 }, children: "That's the ballgame" }), (0, jsx_runtime_1.jsx)("p", { style: { color: T.dim, fontSize: 11, margin: "0 0 14px", fontFamily: FM }, children: daily ? "Today's 9-pitch gauntlet \u2014 a new one tomorrow" : INNINGS + " innings in the books" }), (0, jsx_runtime_1.jsxs)("div", { style: { background: "rgba(255,207,61,0.05)", border: "1px solid rgba(255,207,61,0.24)", borderRadius: 14, padding: "12px", marginBottom: 14 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: T.goldDim, fontSize: 9, letterSpacing: 2.5, fontFamily: FM }, children: "FINAL SCORE" }), (0, jsx_runtime_1.jsx)("div", { style: { color: T.gold, fontSize: 40, fontFamily: FD, letterSpacing: 1, lineHeight: 1.1, textShadow: "0 0 26px rgba(255,207,61,0.35)" }, children: stats.score.toLocaleString() }), rank === 1 && (0, jsx_runtime_1.jsxs)("div", { style: { color: T.gold, fontSize: 12, fontWeight: 700, fontFamily: FU, letterSpacing: 1.5, marginTop: 3 }, children: ["\u2605", " NEW TOP SCORE ", "\u2605"] }), rank > 1 && (0, jsx_runtime_1.jsxs)("div", { style: { color: "#B89A3A", fontSize: 11, marginTop: 3, fontFamily: FM }, children: ["Top 10 finish ", "\u2014", " #", rank] })] }), !daily && (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: 10 }, children: (0, jsx_runtime_1.jsx)(ScoreBoard, { gm: game, final: true }) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }, children: items.map(function (item, i) {
                    return ((0, jsx_runtime_1.jsxs)("div", { style: { background: "#050A11", borderRadius: 12, padding: "10px 12px", border: "1px solid " + T.line, textAlign: "left" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: T.dim, fontSize: 9, letterSpacing: 1.6, marginBottom: 2, fontFamily: FM }, children: item[0] }), (0, jsx_runtime_1.jsx)("div", { style: { color: item[2], fontSize: 24, fontFamily: FD, letterSpacing: 0.5, lineHeight: 1.1 }, children: String(item[1]) })] }, i));
                }) }), promo && (0, jsx_runtime_1.jsxs)("div", { style: { background: "linear-gradient(135deg,#166534,#15803D)", borderRadius: 12, padding: 12, marginBottom: 12, border: "1px solid #2FBF57" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: "#BBF7D0", fontFamily: FD, fontSize: 18, letterSpacing: 2 }, children: "PROMOTED" }), (0, jsx_runtime_1.jsxs)("div", { style: { color: "#86EFAC", fontSize: 12, fontFamily: FU, letterSpacing: 0.5 }, children: ["Called up to ", promo] })] }), !daily && (0, jsx_runtime_1.jsxs)(Btn, { onClick: function () { setShowCard(true); }, style: { width: "100%", padding: 13, marginBottom: 9, background: "linear-gradient(180deg,#F7F7F4,#E4E4DE)", color: "#141414", fontSize: 14, border: "1px solid #B8B8B0" }, children: ["\u{1F3AF}", "\u00A0 Ump scorecard"] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 9 }, children: [(0, jsx_runtime_1.jsx)(Btn, { onClick: onRestart, style: { flex: 1, padding: 14, background: "linear-gradient(135deg,#2FBF57,#17913C)", color: "#fff", fontSize: 15, boxShadow: "0 6px 20px rgba(47,191,87,0.28)" }, children: "Play again" }), (0, jsx_runtime_1.jsx)(Btn, { onClick: onMenu, style: { flex: 1, padding: 14, background: "#0A1018", color: T.muted, border: "1px solid " + T.line, fontSize: 15 }, children: "Menu" })] }), showCard && (0, jsx_runtime_1.jsx)(UmpScorecard, { log: log || [], game: game, lvlLabel: lvlLabel, onClose: function () { setShowCard(false); } })] }));
}
/* ═══════════════════════ MAIN ═══════════════════════ */
function FullCount() {
    var screenS = (0, react_1.useState)("menu"), screen = screenS[0], setScreen = screenS[1];
    var tutS = (0, react_1.useState)(false), showTut = tutS[0], setShowTut = tutS[1];
    var lvlS = (0, react_1.useState)("highSchool"), level = lvlS[0], setLevel = lvlS[1];
    var carS = (0, react_1.useState)(false), career = carS[0], setCareer = carS[1];
    var clS = (0, react_1.useState)("highSchool"), cLvl = clS[0], setCLvl = clS[1];
    var pitchS = (0, react_1.useState)(null), pitch = pitchS[0], setPitch = pitchS[1];
    var phaseS = (0, react_1.useState)("waiting"), phase = phaseS[0], setPhase = phaseS[1];
    var progS = (0, react_1.useState)(0), prog = progS[0], setProg = progS[1];
    var ppS = (0, react_1.useState)(0), playProg = ppS[0], setPlayProg = ppS[1]; // overhead wide-shot clock
    var wpS = (0, react_1.useState)(0), wPh = wpS[0], setWPh = wpS[1];
    var tlS = (0, react_1.useState)(0), tLeft = tlS[0], setTLeft = tlS[1];
    var stS = (0, react_1.useState)({ correct: 0, wrong: 0, total: 0, streak: 0, bestStreak: 0, score: 0 }), stats = stS[0], setStats = stS[1];
    var giS = (0, react_1.useState)(0), gameId = giS[0], setGameId = giS[1];
    var gmS = (0, react_1.useState)(freshGame), gm = gmS[0], setGm = gmS[1];
    var ovS = (0, react_1.useState)(false), over = ovS[0], setOver = ovS[1];
    var dyS = (0, react_1.useState)(false), daily = dyS[0], setDaily = dyS[1];
    var anS = (0, react_1.useState)(""), ann = anS[0], setAnn = anS[1];
    var snS = (0, react_1.useState)(true), sndOn = snS[0], setSndOn = snS[1];
    var hmS = (0, react_1.useState)(false), showHS = hmS[0], setShowHS = hmS[1];
    var dRng = (0, react_1.useRef)(null);
    var rmS = (0, react_1.useState)(null), rMsg = rmS[0], setRMsg = rmS[1];
    var logRef = (0, react_1.useRef)([]); // every call this game, for the post-game scorecard (recording only)
    var shownScore = useTicker(stats.score, 350); // display only
    var prS = (0, react_1.useState)(null), promo = prS[0], setPromo = prS[1];
    var aRef = (0, react_1.useRef)(null), tRef = (0, react_1.useRef)(null), phRef = (0, react_1.useRef)(phase);
    phRef.current = phase;
    var statsRef = (0, react_1.useRef)(stats);
    statsRef.current = stats;
    var gidRef = (0, react_1.useRef)(0);
    var newBatRef = (0, react_1.useRef)(false); // true once the current hitter's at-bat has ended
    var aLvl = daily ? "pro" : (career ? cLvl : level);
    var startGame = (0, react_1.useCallback)(function (c) {
        setCareer(c);
        if (c)
            setCLvl("highSchool");
        setDaily(false);
        curBat = Math.random() > 0.5 ? "right" : "left";
        newBatRef.current = false;
        setScreen("playing");
        setStats({ correct: 0, wrong: 0, total: 0, streak: 0, bestStreak: 0, score: 0 });
        logRef.current = [];
        var gid = Date.now();
        setGameId(gid);
        gidRef.current = gid;
        setGm(freshGame());
        setOver(false);
        setPromo(null);
        setPhase("waiting");
        setPitch(null);
        setRMsg(null);
        setAnn("");
    }, []);
    var startDaily = (0, react_1.useCallback)(function () {
        dRng.current = mulberry32(dailySeed());
        setDaily(true);
        setCareer(false);
        curBat = Math.random() > 0.5 ? "right" : "left";
        newBatRef.current = false;
        setScreen("playing");
        setStats({ correct: 0, wrong: 0, total: 0, streak: 0, bestStreak: 0, score: 0 });
        logRef.current = [];
        var gid = Date.now();
        setGameId(gid);
        gidRef.current = gid;
        setGm(freshGame());
        setOver(false);
        setPromo(null);
        setPhase("waiting");
        setPitch(null);
        setRMsg(null);
        setAnn("");
    }, []);
    var finishGame = (0, react_1.useCallback)(function () {
        setOver(true);
        setTimeout(function () {
            var ls = ["highSchool", "college", "minors", "pro"];
            var ci = ls.indexOf(career ? cLvl : level);
            setStats(function (s) {
                var pc = s.total > 0 ? (s.correct / s.total) * 100 : 0;
                if (career && pc >= 85 && s.total >= 15 && ci < 3) {
                    var nl = ls[ci + 1];
                    setPromo(PD[nl].label);
                    setCLvl(nl);
                }
                return s;
            });
            var fs = statsRef.current;
            if (fs.total > 0) {
                saveScore({ id: gidRef.current, score: fs.score,
                    lvl: daily ? "Daily" : PD[career ? cLvl : level].label,
                    acc: Math.round((fs.correct / fs.total) * 100), d: Date.now() });
            }
            setScreen("gameover");
        }, 2000);
    }, [career, cLvl, level, daily]);
    var handleRes = (0, react_1.useCallback)(function (p, call) {
        if (tRef.current)
            cancelAnimationFrame(tRef.current);
        setPhase("result");
        var ok, msg, pts = 0;
        var heat = 1 + Math.min(stats.streak + 1, 20) * 0.05;
        var lvm = LVL_MULT[daily ? "pro" : (career ? cLvl : level)];
        if (p.check) {
            ok = call === null ? false : ((call === "strike") === p.went);
            pts = ok ? Math.round(250 * lvm * heat) : 0;
            if (call === null)
                msg = { t: "TOO SLOW", s: "He " + (p.went ? "WENT AROUND" : "held up"), c: T.strike };
            else if (ok)
                msg = { t: "GOOD EYE +" + pts, s: p.went ? "He went around \u2014 strike" : "He held up \u2014 ball", c: T.green };
            else
                msg = { t: "MISSED IT", s: p.went ? "He clearly went around" : "He held up on that one", c: T.strike };
            setAnn(annPick(ok ? "good" : "miss"));
        }
        else {
            ok = call === null ? false : (call === "strike" && p.isK) || (call === "ball" && !p.isK);
            var m = edgeMargin(p), tier = callPoints(m);
            var press = 1, pLab = "";
            if (!daily) {
                if (gm.balls === 3 && gm.strikes === 2) {
                    press = 2;
                    pLab = "  FULL COUNT \u00D72";
                }
                if (call === "strike" && gm.strikes === 2 && gm.bases[0] && gm.bases[1] && gm.bases[2]) {
                    press = 3;
                    pLab = "  BASES-LOADED PUNCHOUT \u00D73";
                }
            }
            pts = ok ? Math.round(tier.base * lvm * heat * press) : 0;
            if (call === null) {
                msg = { t: "TOO SLOW", s: "That was a " + (p.isK ? "STRIKE" : "BALL"), c: T.strike };
                setAnn(annPick("slow"));
            }
            else if (ok) {
                msg = { t: "CORRECT +" + pts, s: tier.label + (heat > 1.05 ? "  \u00D7" + heat.toFixed(2) + " heat" : "") + pLab, c: T.green };
                setAnn(annPick(m <= 1.2 ? "edge" : "good"));
            }
            else {
                msg = { t: "MISSED IT", s: "That was a " + (p.isK ? "STRIKE" : "BALL") + (m <= 1.2 ? " \u2014 by a hair" : ""), c: T.strike };
                setAnn(annPick("miss"));
            }
        }
        if (ok && pts >= 300)
            sfx("cheer");
        if (!ok && call !== null)
            sfx("boo");
        setStats(function (prev) {
            var ns = ok ? prev.streak + 1 : 0;
            return { correct: prev.correct + (ok ? 1 : 0), wrong: prev.wrong + (ok ? 0 : 1), total: prev.total + 1, streak: ns, bestStreak: Math.max(prev.bestStreak, ns), score: prev.score + pts };
        });
        if (daily) {
            // the gauntlet is nine unrelated pitches, so a fresh hitter each time
            newBatRef.current = true;
            setRMsg(msg);
            if (stats.total + 1 >= 9)
                finishGame();
            return;
        }
        var effCall;
        if (p.check)
            effCall = call === null ? (p.went ? "strike" : "ball") : call;
        else
            effCall = call === null ? (p.isK ? "strike" : "ball") : call;
        logRef.current.push({ inning: gm.inning, half: gm.half, outs: gm.outs, balls: gm.balls, strikes: gm.strikes,
            bases: gm.bases.slice(), fx: p.fx, fy: p.fy, isK: p.isK, check: !!p.check, went: !!p.went,
            call: effCall, timedOut: call === null, ok: ok, m: p.check ? 0 : edgeMargin(p), type: p.type, speed: p.speed });
        var res = advanceGame(gm, effCall);
        if (res.nb)
            newBatRef.current = true;
        if (res.note) {
            msg.n = res.note;
            if (res.note.indexOf("STRIKE THREE") >= 0) {
                setAnn(annPick("k"));
                sfx("cheer");
            }
            else if (res.note.indexOf("WALK") >= 0)
                setAnn(annPick("walk"));
        }
        setRMsg(msg);
        setGm(res.ng);
        if (res.gameOver)
            finishGame();
    }, [gm, finishGame, stats.streak, stats.total, career, cLvl, level, daily]);
    var handleSwing = (0, react_1.useCallback)(function (p) {
        setPhase("result");
        var M = { miss: { t: "SWING AND A MISS", s: "Strike on the swing" },
            foul: { t: "FOUL BALL", s: "Off the bat and out of play" },
            out: { t: "IN PLAY \u2014 OUT", s: Math.random() < 0.5 ? "Caught for the out" : "Ground ball, retired at first" },
            single: { t: "BASE HIT", s: "Lined into the outfield" },
            double: { t: "DOUBLE", s: "Into the gap for two bags" },
            hr: { t: "HOME RUN", s: "Gone \u2014 over the wall" } };
        var msg = Object.assign({ c: T.gold }, M[p.out]);
        var AK = { miss: "missSw", foul: "foul", out: "out", single: "hit", double: "hit", hr: "hr" };
        setAnn(annPick(AK[p.out] || "good"));
        if (p.out === "hr")
            sfx("roar");
        else if (p.out === "single" || p.out === "double")
            sfx("cheer");
        var res = advanceGame(gm, p.out);
        if (res.nb)
            newBatRef.current = true;
        if (res.note)
            msg.n = res.note;
        setRMsg(msg);
        setGm(res.ng);
        if (res.gameOver)
            finishGame();
    }, [gm, finishGame]);
    var throwP = (0, react_1.useCallback)(function () {
        sndInit();
        var lv = daily ? "pro" : (career ? cLvl : level);
        var np = daily ? genPitch("pro", dRng.current) : genPitch(lv);
        if (!daily) {
            if (Math.random() < (np.isK ? 0.34 : 0.12)) {
                np.swing = true;
                np.hitSeed = Math.random(); // fixes spray angle, depth and who fields it
                var r = Math.random();
                if (r < 0.34)
                    np.out = "miss";
                else if (r < 0.62)
                    np.out = "foul";
                else {
                    var r2 = Math.random();
                    np.out = r2 < 0.45 ? "out" : r2 < 0.75 ? "single" : r2 < 0.90 ? "double" : "hr";
                }
            }
            else if (!np.isK && Math.random() < 0.10) {
                np.check = true;
                np.went = Math.random() < 0.5;
            }
        }
        // The hitter only changes sides when a NEW hitter steps in — never
        // mid at-bat.
        if (newBatRef.current) {
            curBat = Math.random() > 0.5 ? "right" : "left";
            newBatRef.current = false;
        }
        setPitch(np);
        setPhase("windup");
        setProg(0);
        setRMsg(null);
        setWPh(0);
        setPlayProg(0);
        var ws = performance.now(), wd = 950;
        var crackFired = false, popFired = false;
        var aw = function (n) {
            var w = Math.min((n - ws) / wd, 1);
            setWPh(w);
            if (w < 1) {
                aRef.current = requestAnimationFrame(aw);
            }
            else {
                setPhase("pitching");
                var ps2 = performance.now(), pd = 550 + Math.random() * 160;
                var ap = function (n2) {
                    var p2 = Math.min((n2 - ps2) / pd, 1);
                    setProg(p2);
                    if (np.swing && np.out !== "miss" && !crackFired && p2 >= 0.861) {
                        crackFired = true;
                        sfx("crack");
                    }
                    if ((!np.swing || np.out === "miss") && !popFired && p2 >= 0.93) {
                        popFired = true;
                        sfx("pop");
                    }
                    if (p2 < 1) {
                        aRef.current = requestAnimationFrame(ap);
                    }
                    else if (np.swing) {
                        // A swing and miss just plays out behind the plate. Anything the
                        // bat actually touches gets the wide shot: hold the broadcast
                        // angle long enough to see the ball leave, then cut overhead and
                        // run the play — ball, fielders and every runner.
                        setPhase("swingplay");
                        var ss = performance.now();
                        var contacted = np.out !== "miss";
                        var swEnd = contacted ? 1.30 : 1.6;
                        var sk = function (n4) {
                            var sp2 = Math.min(1 + (n4 - ss) / 1000, swEnd);
                            setProg(sp2);
                            if (sp2 < swEnd) {
                                aRef.current = requestAnimationFrame(sk);
                                return;
                            }
                            if (!contacted) {
                                handleSwing(np);
                                return;
                            }
                            setPhase("fieldplay");
                            var fs = performance.now(), fd = PLAY_MS[np.out] || 2500;
                            var fk = function (n5) {
                                var fp = Math.min((n5 - fs) / fd, 1);
                                setPlayProg(fp);
                                if (fp < 1) {
                                    aRef.current = requestAnimationFrame(fk);
                                }
                                else {
                                    handleSwing(np);
                                }
                            };
                            aRef.current = requestAnimationFrame(fk);
                        };
                        aRef.current = requestAnimationFrame(sk);
                    }
                    else {
                        setPhase("deciding");
                        setTLeft(np.timer);
                        var ts = performance.now();
                        var tk = function (n3) {
                            if (phRef.current !== "deciding")
                                return;
                            var rem = np.timer - (n3 - ts) / 1000;
                            setProg(Math.min(1 + (n3 - ts) / 1000, 1.5));
                            if (rem <= 0) {
                                setTLeft(0);
                                handleRes(np, null);
                                return;
                            }
                            setTLeft(rem);
                            tRef.current = requestAnimationFrame(tk);
                        };
                        tRef.current = requestAnimationFrame(tk);
                    }
                };
                aRef.current = requestAnimationFrame(ap);
            }
        };
        aRef.current = requestAnimationFrame(aw);
    }, [level, cLvl, career, daily, handleRes, handleSwing]);
    var makeCall = (0, react_1.useCallback)(function (call) { if (phase !== "deciding" || !pitch)
        return; handleRes(pitch, call); }, [phase, pitch, handleRes]);
    (0, react_1.useEffect)(function () { return function () { if (aRef.current)
        cancelAnimationFrame(aRef.current); if (tRef.current)
        cancelAnimationFrame(tRef.current); }; }, []);
    (0, react_1.useEffect)(function () {
        var h = function (e) {
            if (phase === "deciding") {
                if (e.key === "s" || e.key === "S")
                    makeCall("strike");
                if (e.key === "b" || e.key === "B")
                    makeCall("ball");
            }
            if ((phase === "result" || phase === "waiting") && (e.key === " " || e.key === "Enter")) {
                e.preventDefault();
                if (phase === "waiting" || (phase === "result" && !over))
                    throwP();
            }
        };
        window.addEventListener("keydown", h);
        return function () { window.removeEventListener("keydown", h); };
    }, [phase, makeCall, throwP, over]);
    var sI = stats.streak >= 20 ? "MAX" : stats.streak >= 10 ? "HOT" : stats.streak >= 5 ? "ON" : "";
    var ld = PD[aLvl];
    // In the gauntlet there is no home side, so the visitors just keep hitting.
    var kit = kits(daily ? 0 : (gm.half === 1 ? 1 : 0));
    /* ── MENU ── */
    if (screen === "menu")
        return ((0, jsx_runtime_1.jsxs)("div", { style: { minHeight: "100vh", position: "relative", overflow: "hidden", background: T.night, fontFamily: FU, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 20px", boxSizing: "border-box" }, children: [(0, jsx_runtime_1.jsx)("link", { href: FONTS, rel: "stylesheet" }), (0, jsx_runtime_1.jsx)(MotionStyle, {}), (0, jsx_runtime_1.jsx)(MenuBackdrop, {}), (0, jsx_runtime_1.jsxs)("div", { style: { position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 352 }, children: [(0, jsx_runtime_1.jsx)(BallIcon, { size: 66 }), (0, jsx_runtime_1.jsx)("h1", { className: "bc-rise", style: { fontFamily: FD, color: T.gold, fontSize: "clamp(40px,13vw,56px)", margin: 0, letterSpacing: 1, lineHeight: 0.92, whiteSpace: "nowrap", animationDelay: "60ms", textShadow: "0 0 44px rgba(255,207,61,0.42), 0 4px 0 rgba(0,0,0,0.65)" }, children: "FULL COUNT" }), (0, jsx_runtime_1.jsxs)("div", { className: "bc-rise", style: { display: "flex", alignItems: "center", gap: 10, margin: "8px 0 22px", animationDelay: "120ms" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { width: 34, height: 1, background: "linear-gradient(90deg,transparent," + T.goldDim + ")" } }), (0, jsx_runtime_1.jsx)("p", { style: { color: "#B89A3A", fontSize: 10, margin: 0, fontFamily: FM, letterSpacing: 4.5 }, children: "UMPIRE SIMULATOR" }), (0, jsx_runtime_1.jsx)("div", { style: { width: 34, height: 1, background: "linear-gradient(90deg," + T.goldDim + ",transparent)" } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bc-rise", style: { marginBottom: 18, width: "100%", animationDelay: "180ms" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: T.goldDim, fontSize: 9.5, marginBottom: 9, textAlign: "center", letterSpacing: 3.5, fontFamily: FM }, children: "TONIGHT'S ASSIGNMENT" }), (0, jsx_runtime_1.jsx)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: Object.entries(PD).map(function (entry, ci) {
                                        var k = entry[0], v = entry[1], on = level === k;
                                        return ((0, jsx_runtime_1.jsxs)("button", { className: "bc-card bc-rise", onClick: function () { setLevel(k); }, style: { padding: "10px 9px 9px", animationDelay: (220 + ci * 60) + "ms", background: on ? "linear-gradient(165deg,rgba(52,40,8,0.96),rgba(14,11,3,0.96))" : "linear-gradient(180deg,rgba(9,16,25,0.88),rgba(5,10,17,0.86))", border: "1px solid " + (on ? T.gold : "#1C2A3E"), borderTop: "3px solid " + (on ? T.gold : "#1C2A3E"), borderRadius: "3px 3px 12px 12px", cursor: "pointer", textAlign: "left", boxShadow: (on ? "0 0 26px rgba(255,207,61,0.22), " : "") + "inset 0 1px 0 rgba(255,255,255," + (on ? "0.14" : "0.06") + "), inset 0 -1px 0 rgba(0,0,0,0.35)", WebkitTapHighlightColor: "transparent", userSelect: "none", touchAction: "manipulation" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: on ? T.gold : "#7A8AA0", fontSize: 15, fontWeight: 700, fontFamily: FU, letterSpacing: 0.8, textTransform: "uppercase" }, children: v.label }), (0, jsx_runtime_1.jsx)("div", { style: { fontSize: 13, opacity: on ? 1 : 0.4 }, children: v.icon })] }), (0, jsx_runtime_1.jsxs)("div", { style: { color: on ? "#FFB020" : "#374A64", fontSize: 10, marginTop: 5, fontFamily: FM }, children: [v.fastball.s[0], "-", v.fastball.s[1], " MPH"] }), (0, jsx_runtime_1.jsxs)("div", { style: { color: on ? "#A07818" : "#2A3850", fontSize: 10, marginTop: 1, fontFamily: FM }, children: [v.timer, "s CLOCK"] })] }, k));
                                    }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bc-rise", style: { display: "flex", flexDirection: "column", gap: 9, width: "100%", animationDelay: "460ms" }, children: [(0, jsx_runtime_1.jsxs)(Btn, { onClick: function () { startGame(false); }, style: { padding: 16, background: "linear-gradient(135deg,#2FBF57,#158339)", color: "#fff", fontSize: 17, boxShadow: "0 6px 22px rgba(47,191,87,0.26)" }, children: ["\u26BE", "\u00A0 Quick game"] }), (0, jsx_runtime_1.jsxs)(Btn, { onClick: function () { startGame(true); }, style: { padding: 16, background: "linear-gradient(135deg,#3B82F6,#1B47B8)", color: "#fff", fontSize: 17, boxShadow: "0 6px 22px rgba(59,130,246,0.26)" }, children: ["\u{1F3C6}", "\u00A0 Career mode"] }), (0, jsx_runtime_1.jsxs)(Btn, { onClick: startDaily, style: { padding: "13px 14px", background: "linear-gradient(135deg,#B8860B,#7E5D06)", color: "#FFF7DF", border: "1px solid rgba(255,215,0,0.3)", fontSize: 15, textAlign: "left", lineHeight: 1.35 }, children: ["\u{1F4C5}", "\u00A0 Daily gauntlet", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { fontSize: 10.5, fontWeight: 500, opacity: 0.82, letterSpacing: 0.6, textTransform: "none" }, children: "9 pro pitches, the same for everyone today" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 9 }, children: [(0, jsx_runtime_1.jsx)(Btn, { onClick: function () { setShowHS(true); }, style: { flex: 1, padding: 13, background: "rgba(5,10,17,0.7)", color: T.gold, border: "1px solid rgba(255,207,61,0.32)", fontSize: 14 }, children: "High scores" }), (0, jsx_runtime_1.jsx)(Btn, { onClick: function () { setShowTut(true); }, style: { flex: 1, padding: 13, background: "rgba(5,10,17,0.7)", color: "#8A9AB0", border: "1px solid #1C2A3E", fontSize: 14 }, children: "How to play" })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "bc-rise", style: { color: T.faint, fontSize: 9.5, marginTop: 18, fontFamily: FM, letterSpacing: 1.8, textAlign: "center", animationDelay: "560ms" }, children: "CALL 'EM LIKE YOU SEE 'EM" })] }), showTut && (0, jsx_runtime_1.jsx)(Tutorial, { onClose: function () { setShowTut(false); } }), showHS && (0, jsx_runtime_1.jsx)(HighScoresModal, { onClose: function () { setShowHS(false); } })] }));
    /* ── GAME OVER ── */
    if (screen === "gameover")
        return ((0, jsx_runtime_1.jsxs)("div", { style: { minHeight: "100vh", background: "radial-gradient(120% 90% at 50% 0%, #0E1A26 0%, #060C14 55%, " + T.night + " 100%)", fontFamily: FU, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, boxSizing: "border-box" }, children: [(0, jsx_runtime_1.jsx)("link", { href: FONTS, rel: "stylesheet" }), (0, jsx_runtime_1.jsx)(MotionStyle, {}), (0, jsx_runtime_1.jsx)(GameOver, { stats: stats, game: gm, promo: promo, gameId: gameId, daily: daily, log: logRef.current, lvlLabel: daily ? "Daily" : PD[aLvl].label, onRestart: daily ? startDaily : function () { startGame(career); }, onMenu: function () { setScreen("menu"); } })] }));
    /* ── PLAYING ── */
    return ((0, jsx_runtime_1.jsxs)("div", { style: { minHeight: "100vh", maxHeight: "100vh", overflow: "hidden", background: "radial-gradient(120% 80% at 50% 8%, #0C1724 0%, #060C14 50%, " + T.night + " 100%)", fontFamily: FU, display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 10px 14px", boxSizing: "border-box" }, children: [(0, jsx_runtime_1.jsx)("link", { href: FONTS, rel: "stylesheet" }), (0, jsx_runtime_1.jsx)(MotionStyle, {}), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: CW, flexShrink: 0 }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { setScreen("menu"); }, style: { background: "none", border: "none", color: T.dim, cursor: "pointer", fontSize: 12, padding: "4px 6px", fontFamily: FU, letterSpacing: 1, textTransform: "uppercase" }, children: "Menu" }), (0, jsx_runtime_1.jsx)("div", { style: { color: T.gold, fontFamily: FU, fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }, children: daily ? "Daily Gauntlet" : ld.label + (career ? " \u00B7 Career" : "") }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { SND.on = !sndOn; setSndOn(!sndOn); }, style: { background: "none", border: "none", cursor: "pointer", fontSize: 13, padding: "4px 5px", opacity: sndOn ? 0.85 : 0.35 }, children: sndOn ? "\u{1F50A}" : "\u{1F507}" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { setShowTut(true); }, style: { background: "none", border: "none", color: T.dim, cursor: "pointer", fontSize: 12, padding: "4px 6px", fontFamily: FU, letterSpacing: 1, textTransform: "uppercase" }, children: "Tips" })] })] }), !daily && (0, jsx_runtime_1.jsx)("div", { style: { width: "100%", maxWidth: CW, marginTop: 6 }, children: (0, jsx_runtime_1.jsx)(ScoreBoard, { gm: gm }) }), (0, jsx_runtime_1.jsxs)("div", { style: { width: "100%", maxWidth: CW, margin: "5px 0 4px", padding: "7px 10px", boxSizing: "border-box", background: "linear-gradient(180deg,#0B131C,#070D14)", border: "1px solid " + T.line, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)", flexShrink: 0 }, children: [daily ? ((0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.dim, fontSize: 9, fontFamily: FM, fontWeight: 700, letterSpacing: 0.5 }, children: "PITCH" }), [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (i) { return (0, jsx_runtime_1.jsx)(Pip, { on: i < stats.total, c: T.gold }, i); })] })) : ((0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 9 }, children: [(0, jsx_runtime_1.jsxs)("span", { style: { color: T.gold, fontFamily: FM, fontWeight: 700, fontSize: 12 }, title: gm.half === 0 ? "top" : "bottom", children: [gm.half === 0 ? "\u25B2" : "\u25BC", Math.min(gm.inning, INNINGS)] }), (0, jsx_runtime_1.jsx)(PipRow, { label: "B", n: gm.balls, total: 3, c: T.green }), (0, jsx_runtime_1.jsx)(PipRow, { label: "S", n: gm.strikes, total: 2, c: T.gold }), (0, jsx_runtime_1.jsx)(PipRow, { label: "O", n: gm.outs, total: 2, c: T.strike }), (0, jsx_runtime_1.jsx)(BasesIcon, { bases: gm.bases })] })), (0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-flex", alignItems: "baseline", gap: 7 }, children: [stats.streak >= 3 && (0, jsx_runtime_1.jsxs)("span", { style: { color: T.gold, fontFamily: FM, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, display: "inline-flex", alignItems: "baseline", gap: 2 }, children: [(0, jsx_runtime_1.jsx)("span", { className: "bc-flame", style: { fontSize: 9, filter: "drop-shadow(0 0 4px rgba(255,150,40,0.9))" }, children: "\u{1F525}" }), sI ? sI + " " : "", stats.streak] }), (0, jsx_runtime_1.jsx)("span", { style: { color: T.gold, fontFamily: FM, fontWeight: 700, fontSize: 13, fontVariantNumeric: "tabular-nums", textShadow: "0 0 10px rgba(255,207,61,0.45)" }, children: shownScore.toLocaleString() })] })] }), (0, jsx_runtime_1.jsx)("div", { style: { height: 15, marginBottom: 3, textAlign: "center", color: "#5A6A80", fontSize: 10.5, fontFamily: FM, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%", maxWidth: CW, flexShrink: 0, opacity: ann ? 1 : 0, transition: "opacity 0.25s" }, children: ann ? "\u{1F399} " + ann : "\u00A0" }), (0, jsx_runtime_1.jsx)("div", { style: { flex: "1 1 auto", minHeight: 0, marginBottom: 6, display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", width: "100%" }, children: phase === "result" && pitch ? ((0, jsx_runtime_1.jsxs)("div", { className: "bc-panel", style: { textAlign: "center", width: 268, maxWidth: "100%" }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "bc-flash", style: { "--vc": ((rMsg && rMsg.c) || "#888"), marginBottom: 9, padding: "11px 14px", borderRadius: 13, background: "linear-gradient(180deg,rgba(9,16,25,0.86),rgba(4,8,14,0.82))", border: "1px solid " + ((rMsg && rMsg.c) || "#888") + "66", borderLeft: "3px solid " + ((rMsg && rMsg.c) || "#888") }, children: [(0, jsx_runtime_1.jsx)("div", { className: "bc-stamp", style: { fontSize: 24, fontFamily: FD, letterSpacing: 1, lineHeight: 1.15, color: (rMsg && rMsg.c) || T.chalk, textShadow: "0 0 24px " + ((rMsg && rMsg.c) || "#888") + "77, 0 2px 0 rgba(0,0,0,0.55)" }, children: rMsg && rMsg.t }), (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { color: "#8A9AB0", fontSize: 12, fontFamily: FU, letterSpacing: 0.4, marginTop: 2, animationDelay: "120ms" }, children: rMsg && rMsg.s }), rMsg && rMsg.n && (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { color: T.gold, fontSize: 10.5, marginTop: 5, fontWeight: 700, letterSpacing: 1.8, fontFamily: FM, animationDelay: "200ms" }, children: rMsg.n })] }), (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { color: T.faint, fontSize: 9, marginBottom: 5, letterSpacing: 2.5, fontFamily: FM, animationDelay: "90ms" }, children: "STRIKE ZONE REPLAY" }), (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { animationDelay: "90ms" }, children: (0, jsx_runtime_1.jsx)(ZoneReplay, { pitch: pitch, swung: !!pitch.swing, check: !!pitch.check }) })] }, stats.total)) : phase === "fieldplay" && pitch ? ((0, jsx_runtime_1.jsx)(FieldView, { pitch: pitch, bases: gm.bases, t: playProg, bat: curBat, kit: kit })) : ((0, jsx_runtime_1.jsx)(GameCanvas, { pitch: pitch, prog: prog, wPhase: wPh, kit: kit })) }), (0, jsx_runtime_1.jsxs)("div", { style: { width: "100%", maxWidth: CW, flexShrink: 0 }, children: [phase === "deciding" && pitch && ((0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: 8 }, children: [(0, jsx_runtime_1.jsx)(TimerBar, { left: tLeft, max: pitch.timer }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center", color: "#A8B4C4", fontSize: 12, marginTop: 5, fontWeight: 700, fontFamily: FM, letterSpacing: 1.5 }, children: [pitch.check ? "DID HE GO?" : "MAKE THE CALL", " ", (0, jsx_runtime_1.jsxs)("span", { style: { color: T.dim }, children: [tLeft.toFixed(1), "s"] })] })] })), phase === "waiting" && (0, jsx_runtime_1.jsx)(Btn, { onClick: throwP, style: { width: "100%", padding: 18, background: "linear-gradient(135deg,#FFCF3D,#D4A010)", color: "#0A1018", fontSize: 18, boxShadow: "0 6px 24px rgba(255,207,61,0.24)" }, children: "Throw pitch" }), (phase === "windup" || phase === "pitching" || phase === "swingplay" || phase === "fieldplay") && (0, jsx_runtime_1.jsx)("div", { style: { textAlign: "center", padding: 17, color: T.faint, fontSize: 11, fontFamily: FM, letterSpacing: 2.5 }, children: phase === "pitching" ? "HERE IT COMES" : phase === "fieldplay" ? "THE PLAY IS ON" : "\u00A0" }), phase === "deciding" && ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 11 }, children: [(0, jsx_runtime_1.jsx)(Btn, { onClick: function () { makeCall("ball"); }, style: { flex: 1, padding: "20px 0", background: "linear-gradient(160deg,#4A88F0,#1B47B8)", color: "#fff", fontSize: 21, letterSpacing: pitch && pitch.check ? 1 : 3.5, boxShadow: "0 6px 20px rgba(47,111,228,0.3), inset 0 1px 0 rgba(255,255,255,0.28)" }, children: pitch && pitch.check ? "No swing" : "Ball" }), (0, jsx_runtime_1.jsx)(Btn, { onClick: function () { makeCall("strike"); }, style: { flex: 1, padding: "20px 0", background: "linear-gradient(160deg,#F05252,#A81818)", color: "#fff", fontSize: 21, letterSpacing: pitch && pitch.check ? 1 : 3.5, boxShadow: "0 6px 20px rgba(224,59,59,0.3), inset 0 1px 0 rgba(255,255,255,0.28)" }, children: pitch && pitch.check ? "He went!" : "Strike" })] })), phase === "result" && !over && (0, jsx_runtime_1.jsx)(Btn, { onClick: throwP, style: { width: "100%", padding: 17, marginTop: 4, background: "linear-gradient(135deg,#FFCF3D,#D4A010)", color: "#0A1018", fontSize: 17, boxShadow: "0 6px 24px rgba(255,207,61,0.22)" }, children: "Next pitch" })] }), showTut && (0, jsx_runtime_1.jsx)(Tutorial, { onClose: function () { setShowTut(false); } })] }));
}
window.__Game = module.exports.default || module.exports;
})();
