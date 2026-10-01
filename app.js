/* Full Count — built 2026-10-01 from the game JSX. Do not edit; rebuild instead. */
(function(){var module={exports:{}},exports=module.exports;
function require(id){
  if(id==="react") return window.__vendor("react");
  if(id==="react/jsx-runtime") return window.__vendor("react/jsx-runtime");
  if(id==="react-dom") return window.__vendor("react-dom");
  if(id==="react-dom/client") return window.__vendor("react-dom/client");
  if(id==="tone") return window.Tone;
  throw new Error("unknown module "+id);
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
    "@keyframes bcBanner{0%{opacity:0;transform:translateY(-8px) scaleX(0.7)}60%{opacity:1;transform:translateY(0) scaleX(1.03)}100%{opacity:1;transform:translateY(0) scaleX(1)}}",
    "@keyframes bcSheen{0%{transform:translateX(-120%) skewX(-20deg)}100%{transform:translateX(260%) skewX(-20deg)}}",
    ".bc-banner{animation:bcBanner 0.34s cubic-bezier(.2,1.25,.4,1) both}",
    ".bc-sheen{animation:bcSheen 0.9s 0.18s ease-out both}",
    "@media (prefers-reduced-motion: reduce){.bc-stamp,.bc-panel,.bc-flash,.bc-flame,.bc-rise,.bc-drift,.bc-banner,.bc-sheen{animation:none !important}}"
].join("\n");
function MotionStyle() { return (0, jsx_runtime_1.jsx)("style", { children: CSS }); }
/* ═══ STRIKEOUT / WALK BANNER — a broadcast strip across the top of the
   result panel. Red with a K for a strikeout (the scorekeeper's backwards
   K when he's caught looking), blue with BB for a walk. About a button
   tall, so it never covers the field or the zone replay. ═══ */
function EventBanner({ ev }) {
    if (!ev)
        return null;
    var isK = ev.kind === "K";
    var col = isK ? T.strike : T.ball;
    var title = isK ? "STRIKEOUT" : "WALK";
    var sub = isK ? (ev.look ? "Caught looking" : "Swinging")
        : (ev.run ? "Ball four \u2014 forces in a run" : "Ball four \u2014 take your base");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bc-banner", style: { position: "relative", overflow: "hidden", display: "flex", alignItems: "stretch", flexShrink: 0,
            height: 46, marginBottom: 8, borderRadius: 10, border: "1px solid " + col + "88",
            background: "linear-gradient(90deg," + col + "33,rgba(6,10,16,0.92) 55%)",
            boxShadow: "0 0 22px " + col + "44, inset 0 1px 0 rgba(255,255,255,0.08)" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { width: 50, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "linear-gradient(160deg," + col + "," + shade(col, -0.35) + ")", boxShadow: "inset -1px 0 0 rgba(255,255,255,0.15)" }, children: (0, jsx_runtime_1.jsx)("span", { style: { fontFamily: FD, fontSize: isK ? 32 : 24, color: "#fff", lineHeight: 1, letterSpacing: isK ? 0 : 1,
                        display: "inline-block", transform: isK && ev.look ? "scaleX(-1)" : "none", textShadow: "0 2px 0 rgba(0,0,0,0.35)" }, children: isK ? "K" : "BB" }) }), (0, jsx_runtime_1.jsxs)("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "0 12px", minWidth: 0 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontFamily: FD, fontSize: 22, letterSpacing: 2.5, lineHeight: 1, color: "#fff", textShadow: "0 0 14px " + col + "99" }, children: title }), (0, jsx_runtime_1.jsx)("div", { style: { fontFamily: FM, fontSize: 10, fontWeight: 700, letterSpacing: 1, color: shade(col, 0.45), marginTop: 3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }, children: sub })] }), (0, jsx_runtime_1.jsx)("div", { className: "bc-sheen", style: { position: "absolute", top: 0, bottom: 0, left: 0, width: "35%", pointerEvents: "none",
                    background: "linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.22),rgba(255,255,255,0))" } })] }));
}
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
/* Count-aware pitching (game mode only). A pitcher who is behind has to
   come into the zone, usually with a fastball; ahead, especially with two
   strikes, he expands with breaking stuff and buries it below the knees.
   ZONE_BY_COUNT is the chance of the in-zone branch below (it was a flat
   0.5 before). With no count (the Daily Gauntlet) genPitch draws exactly
   as it always has, so everyone's daily pitches are unchanged. */
var ZONE_BY_COUNT = { "0-0": 0.52, "1-0": 0.56, "2-0": 0.62, "3-0": 0.70,
    "0-1": 0.46, "1-1": 0.50, "2-1": 0.56, "3-1": 0.64,
    "0-2": 0.30, "1-2": 0.36, "2-2": 0.44, "3-2": 0.56 };
var MIX_BEHIND = { fastball: 3, sinker: 2, cutter: 1.5, slider: 1, curveball: 0.7, changeup: 1, splitter: 0.7 };
var MIX_TWO_K = { fastball: 1, sinker: 0.8, cutter: 1, slider: 1.8, curveball: 1.6, changeup: 1.4, splitter: 1.6 };
function pickType(R, cnt) {
    var types = Object.keys(PN);
    var w = cnt.b === 3 || cnt.b - cnt.s >= 2 ? MIX_BEHIND : cnt.s === 2 ? MIX_TWO_K : null;
    if (!w)
        return types[Math.floor(R() * types.length)];
    var tot = 0, i;
    for (i = 0; i < types.length; i++)
        tot += w[types[i]];
    var x = R() * tot;
    for (i = 0; i < types.length; i++) {
        x -= w[types[i]];
        if (x < 0)
            return types[i];
    }
    return types[types.length - 1];
}
function genPitch(lv, rand, cnt) {
    var R = rand || Math.random;
    var d = PD[lv], types = Object.keys(PN), type = cnt ? pickType(R, cnt) : types[Math.floor(R() * types.length)];
    var p = d[type], speed = Math.round(rng(p.s[0], p.s[1], R)), hB = rng(p.h[0], p.h[1], R), vB = rng(p.v[0], p.v[1], R);
    var fx, fy, pZone = cnt ? ZONE_BY_COUNT[cnt.b + "-" + cnt.s] : 0.5;
    if (R() < pZone) {
        fx = rng(-8, 8, R);
        fy = rng(-11, 11, R);
    }
    else {
        var s = cnt && cnt.s === 2 && R() < 0.5 ? 3 : Math.floor(R() * 4); // two strikes: half the chase pitches go in the dirt
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
   the top, the home nine in the bottom. Regulation is three innings:
   the bottom of the third is skipped if the home side already leads, a
   walk-off ends it on the spot, and a tie goes to extra innings. The umpire's call STANDS, right or wrong, just
   like real life. ═══ */
var INNINGS = 3;
var MAX_INNINGS = 9; // extra innings stop here and the game goes down as a tie
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
    else if (kind && typeof kind === "object") {
        // a ball in play from resolvePlay(): each runner to his base, outs, a hit
        if (kind.hit)
            ng.hits[bt]++;
        ng.outs += kind.outs;
        newBatter = true;
        var nbp = [false, false, false], runsP = 0;
        kind.moves.forEach(function (m) { if (m.to === "out")
            return; if (m.to >= 3)
            runsP++;
        else
            nbp[m.to] = true; });
        // a run doesn't count when the play makes the third out (every such
        // third out here is a force or the batter retired at first)
        if (runsP > 0 && ng.outs < 3)
            score(runsP);
        ng.bases = nbp;
    }
    else if (kind === "out" || kind === "fout") {
        ng.outs++;
        newBatter = true; // fly out (or unspecified): runners hold
    }
    else if (kind === "gout") {
        // Ground ball. With a man on first the play is the force at second:
        // the runner from first is out, the batter is safe at first on the
        // fielder's choice, and runners forced along move up one base (a run
        // scores with the bases loaded, unless the force is the third out).
        // With first base open the batter is thrown out at first and runners hold.
        ng.outs++;
        newBatter = true;
        if (g.bases[0]) {
            var loaded = g.bases[0] && g.bases[1] && g.bases[2];
            if (loaded && ng.outs < 3)
                score(1);
            ng.bases = [true, false, g.bases[1] || g.bases[2]];
        }
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
    // Walk-off: the home side goes ahead in the bottom of the last inning
    // (or any extra inning) and the game is over right there.
    if (bt === 1 && ng.inning >= INNINGS && ng.runs[1] > ng.runs[0]) {
        note = note ? note + " \u2014 WALK-OFF" : "WALK-OFF";
        return { ng: ng, note: note, nb: newBatter, runs: scored, gameOver: true };
    }
    var over = false;
    if (ng.outs >= 3) {
        ng.outs = 0;
        ng.bases = [false, false, false];
        ng.balls = 0;
        ng.strikes = 0;
        note = note ? note + " \u2014 SIDE RETIRED" : "SIDE RETIRED";
        if (ng.half === 0) {
            if (ng.inning >= INNINGS && ng.runs[1] > ng.runs[0]) {
                ng.line[1][ng.inning - 1] = "X"; // home already ahead: bottom half not needed
                over = true;
            }
            else
                ng.half = 1; // to the bottom of the same inning
        }
        else if (ng.inning >= INNINGS && (ng.runs[0] !== ng.runs[1] || ng.inning >= MAX_INNINGS)) {
            over = true; // regulation (or the extra-inning cap) is done
        }
        else {
            ng.half = 0;
            ng.inning++; // new inning, visitors up again
            if (ng.line[0].length < ng.inning) {
                ng.line[0].push(null);
                ng.line[1].push(null);
            } // extras
        }
        if (!over && ng.line[ng.half][ng.inning - 1] == null)
            ng.line[ng.half][ng.inning - 1] = 0;
    }
    return { ng: ng, note: note, nb: newBatter, runs: scored, gameOver: over };
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
/* ═══ CAREER STATS — lifetime totals across every game and gauntlet,
   persisted the same way as the high scores (session copy if storage is
   unavailable). Updates run through one queue so they never overwrite
   each other. Recording only; nothing here feeds back into play. ═══ */
var CAREER_KEY = "fullcount-career";
var ZX = [9.95, 3.32], ZY = [13.45, 4.48]; // zone edges (ball radius in) and thirds
function zoneBin(v, e) { var a = Math.abs(v); var k = a > e[0] ? 2 : a > e[1] ? 1 : 0; return v < 0 ? 2 - k : 2 + k; }
function freshCareer() {
    var grid = [], i;
    for (i = 0; i < 25; i++)
        grid.push([0, 0]);
    var bt = {};
    Object.keys(PN).forEach(function (k) { bt[k] = [0, 0]; });
    return { v: 1, calls: 0, ok: 0, timeouts: 0, edge: [0, 0], checks: [0, 0], games: 0, bestStreak: 0,
        byType: bt, grid: grid, daily: { last: "", streak: 0, best: 0, days: 0 } };
}
var MEM_CAREER = freshCareer();
async function loadCareer() {
    try {
        var r = await window.storage.get(CAREER_KEY);
        var c = r && r.value ? JSON.parse(r.value) : null;
        if (c && c.v === 1) {
            MEM_CAREER = c;
            return JSON.parse(JSON.stringify(c));
        }
    }
    catch (e) { }
    return JSON.parse(JSON.stringify(MEM_CAREER));
}
var CAREER_Q = Promise.resolve();
function updateCareer(fn) {
    CAREER_Q = CAREER_Q.then(loadCareer).then(async function (c) {
        fn(c);
        MEM_CAREER = c;
        try {
            await window.storage.set(CAREER_KEY, JSON.stringify(c));
        }
        catch (e) { }
        return c;
    }).catch(function () { return MEM_CAREER; });
    return CAREER_Q;
}
function getCareer() { return CAREER_Q.then(loadCareer).catch(function () { return MEM_CAREER; }); }
function dayKey(d) { d = d || new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }
// the streak is alive only if the last gauntlet was today or yesterday
function liveStreak(dl) {
    var y = new Date();
    y.setDate(y.getDate() - 1);
    return dl && (dl.last === dayKey() || dl.last === dayKey(y)) ? dl.streak : 0;
}
// fold a batch of calls (and, at the end of a game, the game itself) into the totals
function recordCalls(calls, fin) {
    if (!calls.length && !fin)
        return CAREER_Q;
    return updateCareer(function (c) {
        calls.forEach(function (e) {
            c.calls++;
            if (e.ok)
                c.ok++;
            if (e.timedOut)
                c.timeouts++;
            if (e.check) {
                c.checks[0]++;
                if (e.ok)
                    c.checks[1]++;
                return;
            }
            if (e.m <= 1.2) {
                c.edge[0]++;
                if (e.ok)
                    c.edge[1]++;
            }
            var t = c.byType[e.type];
            if (t) {
                t[0]++;
                if (e.ok)
                    t[1]++;
            }
            var g = c.grid[zoneBin(-e.fy, ZY) * 5 + zoneBin(e.fx, ZX)];
            g[0]++;
            if (e.ok)
                g[1]++;
        });
        if (fin) {
            c.bestStreak = Math.max(c.bestStreak, fin.bestStreak || 0);
            if (fin.daily && fin.done) {
                var today = dayKey(), y = new Date();
                y.setDate(y.getDate() - 1);
                if (c.daily.last !== today) {
                    c.daily.streak = c.daily.last === dayKey(y) ? c.daily.streak + 1 : 1;
                    c.daily.best = Math.max(c.daily.best, c.daily.streak);
                    c.daily.days++;
                    c.daily.last = today;
                }
            }
            else if (fin.done)
                c.games++;
        }
    });
}
/* ═══ DAILY SHARE — a spoiler-free result card, one square per pitch. ═══ */
function shareSquares(calls) {
    return calls.map(function (e) { return e.timedOut ? "\u2B1B" : !e.ok ? "\u{1F7E5}" : e.m <= 1.2 ? "\u{1F7E8}" : "\u{1F7E9}"; }).join("");
}
function shareText(calls, stats, streak) {
    var d = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    return "Full Count \u26BE Daily Gauntlet\n" + d + "\n" + stats.correct + "/" + calls.length + " correct, " +
        stats.score.toLocaleString() + " pts\n" + shareSquares(calls) + (streak >= 2 ? "\n\u{1F525} " + streak + "-day streak" : "");
}
async function shareOrCopy(text) {
    if (navigator.share) {
        try {
            await navigator.share({ text: text });
            return "shared";
        }
        catch (e) {
            if (e && e.name === "AbortError")
                return "cancelled";
        }
    }
    try {
        await navigator.clipboard.writeText(text);
        return "copied";
    }
    catch (e) { }
    try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (ok)
            return "copied";
    }
    catch (e) { }
    return "failed";
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
   Built like a photograph rather than painted. The field is ray-cast
   pixel by pixel through one real camera: 17 ft behind the plate and
   12 ft up — closer and lower than a broadcast "high home", more like an
   umpire's eye line — with home plate landing at 0.80H. Every player is
   placed through the same lens (camPt), so the plate circle, the
   infield grass, the mound, the dirt arc, the wall and the bleachers
   all land where they would through a real camera. Mow stripes, clay
   grain and the crowd are computed in world feet and box-filtered to
   each pixel's footprint, so they recede without shimmering. Sky, light
   banks, chalk, plate, rubber and scoreboard are vector overlays. ═══ */
var BG_CACHE = null, BG_KEY = "";
var LB_CACHE = null, LB_MASK = null; // offscreen scratch for the batter's lower body
var JB_CACHE = null, JB_MASK = null; // and for his jersey + arms
var CAM_D = 17, CAM_H = 12, CAM_YH = 0.150, CAM_F = 0.921; // ft behind plate, ft up, horizon (×H), focal (×H)
// The players were drawn for the old 24-ft camera; batter and catcher are
// scaled by how much closer this one is, the pitcher stays true size.
var NEAR_S = CAM_F * 24 / CAM_D;
var ARC_R = 95; // infield dirt arc, ft from the rubber (regulation)
function camPt(W, H, x, z, h) {
    var t = Math.max(0.5, z + CAM_D);
    return [W / 2 + H * CAM_F * x / t, H * CAM_YH + H * CAM_F * (CAM_H - (h || 0)) / t];
}
function camGround(W, H, sx, sy) {
    var t = H * CAM_F * CAM_H / Math.max(0.5, sy - H * CAM_YH);
    return [(sx - W / 2) * t / (H * CAM_F), t - CAM_D];
}
function hash2(x, y) {
    var h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263)) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vnoise(x, y) {
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    var a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), e = hash2(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + e) * u * v;
}
function sstep(a, b, x) { var t = (x - a) / (b - a); t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); }
/* Monotone cubic (PCHIP) through keyframes. Per-segment smoothstep makes
   every joint stop dead at every key, which reads as a stutter; this is
   C1-smooth straight through the keys, so motion carries, yet it never
   overshoots a key (a foot can't dip through the dirt). The first and
   last keys are at rest. */
function pchip(ts, vs, t) {
    var n = ts.length;
    if (t <= ts[0])
        return vs[0];
    if (t >= ts[n - 1])
        return vs[n - 1];
    var k = 0;
    while (k < n - 2 && t > ts[k + 1])
        k++;
    var slope = function (i) { return (vs[i + 1] - vs[i]) / (ts[i + 1] - ts[i]); };
    var tan = function (i) {
        if (i === 0 || i === n - 1)
            return 0;
        var d0 = slope(i - 1), d1 = slope(i);
        if (d0 * d1 <= 0)
            return 0;
        var h0 = ts[i] - ts[i - 1], h1 = ts[i + 1] - ts[i], w1 = 2 * h1 + h0, w2 = h1 + 2 * h0;
        return (w1 + w2) / (w1 / d0 + w2 / d1);
    };
    var h = ts[k + 1] - ts[k], s = (t - ts[k]) / h, s2 = s * s, s3 = s2 * s;
    return (2 * s3 - 3 * s2 + 1) * vs[k] + (s3 - 2 * s2 + s) * h * tan(k)
        + (-2 * s3 + 3 * s2) * vs[k + 1] + (s3 - s2) * h * tan(k + 1);
}
// every numeric or [x, y] field of a keyframe list, interpolated at t
function keyPose(keys, t) {
    var ts = keys.map(function (k) { return k.t; }), out = {};
    Object.keys(keys[0]).forEach(function (f) {
        if (f === "t")
            return;
        if (Array.isArray(keys[0][f]))
            out[f] = [pchip(ts, keys.map(function (k) { return k[f][0]; }), t),
                pchip(ts, keys.map(function (k) { return k[f][1]; }), t)];
        else
            out[f] = pchip(ts, keys.map(function (k) { return k[f]; }), t);
    });
    return out;
}
// a ±1 square wave (period 2 cells), box-filtered over w cells: mow
// stripes fade to an even tone instead of aliasing once they're sub-pixel
function triW(p) { var m = p - 2 * Math.floor(p / 2); return 1 - Math.abs(m - 1); }
function fsq(p, w) {
    if (w < 0.002)
        return (p - 2 * Math.floor(p / 2)) < 1 ? 1 : -1;
    if (w >= 2)
        return 0;
    return (triW(p + w / 2) - triW(p - w / 2)) / w;
}
function wallDist(a) { var k = Math.min(1, Math.abs(a) / (Math.PI / 4)); return 400 - 72 * Math.pow(k, 1.6); }
function hexRGB(h) { var n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
/* One surface shader for both cameras. x, z in feet (home plate at the
   origin, z toward center field); fp = feet per device pixel; edge = feet
   to the wall / stands (warning track inside 15 ft); cam = perspective
   haze and falloff. Real MLB layout: 13-ft plate circle, 9-ft mound,
   dirt baselines, infield grass square, dirt arc off the rubber. */
function fieldShade(x, z, fp, grain, edge, cam, out) {
    var r0 = Math.sqrt(x * x + z * z);
    var u = (z + x) * 0.70711, v = (z - x) * 0.70711;
    var mz = z - 58.4, dM = 9 - Math.sqrt(x * x + mz * mz);
    var c1 = x - 63.64, c3 = x + 63.64, cz = z - 63.64;
    var dCut = 13 - Math.sqrt(Math.min(c1 * c1, c3 * c3) + cz * cz);
    var az = z - 60.5, dArc = ARC_R - Math.sqrt(x * x + az * az);
    var fair = (z - Math.abs(x)) * 0.70711;
    var dSq = Math.min(u - 3, v - 3, 87 - u, 87 - v);
    var D = Math.max(13 - r0, dM, dCut, Math.min(3 - Math.abs(v), u, 90 - u), Math.min(3 - Math.abs(u), v, 90 - v), Math.min(dArc, fair + 3, -dSq));
    var w = Math.max(0.3, fp * 0.8);
    var dirtA = sstep(-w, w, D), trackA = sstep(15 + w, 15 - w, edge);
    // grass: a baseline-aligned checkerboard, filtered to the pixel
    var cw = fp / 15;
    var chk = fsq(u / 15, cw) * fsq(v / 15, cw);
    var gl = 1 + 0.058 * chk
        + (vnoise(x * 0.09 + 11, z * 0.09) - 0.5) * 0.12 / (1 + fp * fp * 0.06)
        + grain * 0.05;
    gl *= 1 - 0.09 * sstep(-2.5, 0, D); // the lip where grass meets clay
    var gR = 56 * gl, gG = 102 * gl, gB = 46 * gl;
    // clay: two octaves of grain, rake rings, and worn-in spots
    var n1 = (vnoise(x * 0.5 + 3, z * 0.5) - 0.5) / (1 + fp * fp * 1.2);
    var n2 = (vnoise(x * 2.1 + 17, z * 2.1 + 9) - 0.5) / (1 + fp * fp * 20);
    var dl = 1 + n1 * 0.16 + n2 * 0.13 + grain * 0.07;
    dl += Math.sin(r0 * 17) * 0.022 / (1 + fp * fp * 400);
    var bx = Math.abs(x) - 3.1, bz = z + 0.2;
    dl -= 0.12 * Math.exp(-(bx * bx * 0.6 + bz * bz * 0.35)); // both boxes
    dl -= 0.08 * Math.exp(-(x * x * 0.25 + (z + 4.2) * (z + 4.2) * 0.3)); // the catcher
    var lx = x - 1.2, lz = z - 54.8;
    dl -= 0.12 * Math.exp(-(lx * lx + lz * lz) * 0.35); // landing hole
    dl *= 1 - 0.10 * (1 - sstep(0, 2, D)); // damp edge by the grass
    var inMd = sstep(-1, 1, dM);
    dl *= 1 + 0.07 * inMd * sstep(0, 9, dM); // the crown of the mound
    var worked = Math.max(sstep(-1, 1, 13 - r0), inMd);
    var dR = (152 - 12 * worked) * dl, dG = (108 - 11 * worked) * dl, dB = (72 - 8 * worked) * dl;
    var tl = 1 + (vnoise(x * 0.7, z * 0.7) - 0.5) * 0.14 / (1 + fp * fp) + grain * 0.06;
    var R = gR + (dR - gR) * dirtA, G = gG + (dG - gG) * dirtA, B = gB + (dB - gB) * dirtA;
    R += (118 * tl - R) * trackA;
    G += (86 * tl - G) * trackA;
    B += (62 * tl - B) * trackA;
    var L, hz;
    if (cam) {
        L = 1.02 + 0.07 * Math.exp(-(x * x + (z - 70) * (z - 70)) / 9000) - 0.14 * sstep(140, 420, z);
        hz = 0.22 * sstep(60, 420, z);
    }
    else {
        L = 1.0 + 0.07 * Math.exp(-(x * x + (z - 80) * (z - 80)) / 12000) - 0.10 * sstep(260, 460, r0);
        hz = 0;
    }
    out[0] = R * L * (1 - hz) + 66 * hz;
    out[1] = G * L * (1 - hz) + 80 * hz;
    out[2] = B * L * (1 - hz) + 98 * hz;
}
var CROWD_SHIRTS = [[128, 44, 48], [44, 56, 92], [196, 194, 188], [62, 66, 74], [156, 124, 84], [92, 112, 142],
    [176, 64, 52], [32, 36, 44], [214, 204, 184], [74, 102, 74], [146, 146, 156], [88, 60, 92]];
var CROWD_GAP = [14, 18, 24];
var CROWD_SKIN = [[200, 160, 126], [152, 106, 78], [112, 78, 58], [224, 190, 160], [84, 58, 44]];
function buildBackground(W, H) {
    var key = W + "x" + H + "@" + dprOf();
    if (BG_CACHE && BG_KEY === key)
        return BG_CACHE;
    if (!BG_JOB || BG_JOB.key !== key)
        BG_JOB = backgroundJob(W, H, key);
    BG_JOB.run(Infinity); // finishes whatever the idle-time build (warmCaches) hasn't done yet
    return BG_CACHE;
}
/* The same build as a resumable job: everything before the ray-cast runs
   now, the ray-cast runs some rows per call, and everything after it runs
   once the last row is in. Same rows, same order, same random stream, so
   it comes out pixel for pixel what a one-shot build makes. */
function backgroundJob(W, H, key) {
    var d = dprOf();
    var c = document.createElement("canvas");
    c.width = Math.round(W * d);
    c.height = Math.round(H * d);
    var ctx = c.getContext("2d");
    ctx.scale(d, d);
    var rnd = mulberry32(20260609);
    var yh = H * CAM_YH;
    var P = function (x, z, h) { return camPt(W, H, x, z, h); };
    // ── Night sky, warming into the glow the lit park throws up ──
    var skyG = ctx.createLinearGradient(0, 0, 0, yh);
    skyG.addColorStop(0, "#02050A");
    skyG.addColorStop(0.5, "#08111F");
    skyG.addColorStop(1, "#16243A");
    ctx.fillStyle = skyG;
    ctx.fillRect(0, 0, W, yh + 2);
    var domeG = ctx.createRadialGradient(W / 2, yh * 0.6, 4, W / 2, yh * 0.6, W * 0.7);
    domeG.addColorStop(0, "rgba(255,226,180,0.12)");
    domeG.addColorStop(1, "rgba(255,226,180,0)");
    ctx.fillStyle = domeG;
    ctx.fillRect(0, 0, W, yh + 2);
    for (var st = 0; st < 24; st++) {
        ctx.fillStyle = "rgba(228,238,255," + (0.12 + rnd() * 0.3) + ")";
        ctx.fillRect(rnd() * W, rnd() * yh * 0.25, 0.8, 0.8);
    }
    // ── Ray-cast pass: turf and clay, the wall, the bleachers ──
    var PW = c.width, PH = c.height;
    var lay = document.createElement("canvas");
    lay.width = PW;
    lay.height = PH;
    var lc = lay.getContext("2d");
    var img = lc.createImageData(PW, PH), px = img.data, col = [0, 0, 0];
    var homeC = hexRGB(TEAMS[1].jersey);
    var D2 = CAM_D * CAM_D, K = 0.58, hB0 = 11, hTop = 60;
    var rayRow = function (j) {
        var sy = (j + 0.5) / d;
        var dyUp = (yh - sy) / (H * CAM_F);
        var tg = sy > yh + 0.2 ? H * CAM_F * CAM_H / (sy - yh) : 0;
        var zg = tg - CAM_D;
        var fpg = Math.max(tg / (H * CAM_F), tg * tg / (H * CAM_F * CAM_H)) / d;
        for (var i = 0; i < PW; i++) {
            var sx = (i + 0.5) / d, o = (j * PW + i) * 4;
            var dx = (sx - W / 2) / (H * CAM_F);
            var grain = hash2(i, j) - 0.5;
            if (tg > 0) {
                var xg = dx * tg, rg = Math.sqrt(xg * xg + zg * zg);
                var dwg = wallDist(Math.atan2(xg, zg));
                if (rg < dwg) {
                    fieldShade(xg, zg, fpg, grain, dwg - rg, true, col);
                    px[o] = col[0];
                    px[o + 1] = col[1];
                    px[o + 2] = col[2];
                    px[o + 3] = 255;
                    continue;
                }
            }
            // up off the grass: the wall, the bleachers, or open sky
            var q2 = 1 + dx * dx, q = Math.sqrt(q2);
            var aw = Math.atan(dx), dwa = wallDist(aw);
            var tW = (CAM_D + Math.sqrt(D2 - q2 * (D2 - dwa * dwa))) / q2;
            aw = Math.atan2(dx * tW, tW - CAM_D);
            dwa = wallDist(aw);
            tW = (CAM_D + Math.sqrt(D2 - q2 * (D2 - dwa * dwa))) / q2;
            var xw = dx * tW, hW = CAM_H + dyUp * tW;
            var eye = Math.abs(xw) < 38;
            var R = 0, G = 0, B = 0, A = 255;
            if (hW <= 8) {
                // padded wall, seams every few yards, the yellow home-run line on top
                var sm = ((aw * dwa / 9.5) % 1 + 1) % 1, sd = Math.min(sm, 1 - sm);
                var wl = (1 - 0.22 * (1 - sstep(0, 0.05, sd))) * (0.84 + 0.16 * sstep(0, 3, hW)) + grain * 0.05;
                if (hW > 7.4) {
                    R = 226;
                    G = 190;
                    B = 52;
                }
                else {
                    R = 30 * wl;
                    G = 72 * wl;
                    B = 50 * wl;
                }
            }
            else if (eye && hW <= 34) {
                // batter's eye: flat, dark, no texture a hitter could pick up
                var el = 0.92 + grain * 0.05 + (vnoise(xw * 0.4, hW * 0.4) - 0.5) * 0.10;
                R = 13 * el;
                G = 25 * el;
                B = 20 * el;
            }
            else {
                var rS0 = dwa + 6, den = dyUp - K * q;
                var tS = den < 0 ? (hB0 - K * (CAM_D / q + rS0) - CAM_H) / den : -1;
                var hS = CAM_H + dyUp * tS;
                var rB = rS0 + (hTop - hB0) / K;
                if (!eye && tS > tW && hS <= hTop) {
                    if (hS < hB0) {
                        // front face of the stands, with the rail on top
                        if (hS > hB0 - 0.7) {
                            R = 118;
                            G = 124;
                            B = 132;
                        }
                        else {
                            R = 22 + grain * 4;
                            G = 34 + grain * 4;
                            B = 40 + grain * 4;
                        }
                    }
                    else {
                        var rr = (hS - hB0) / K;
                        var rowF = rr / 2.9, row = Math.floor(rowF), fr = rowF - row;
                        var aS = Math.atan2(dx * tS, tS - CAM_D);
                        var sF = aS * (rS0 + rr) / 1.85, seat = Math.floor(sF), fc = sF - seat;
                        var lit = (1.0 - 0.5 * (hS - hB0) / (hTop - hB0)) * 0.74;
                        if ((((seat % 17) + 17) % 17) === 0) {
                            var cl = fr < 0.18 ? 0.7 : 1;
                            R = 92 * cl;
                            G = 94 * cl;
                            B = 98 * cl;
                        }
                        else {
                            var hs = hash2(seat * 7 + 3, row * 13 + 5);
                            if (hs > 0.8) {
                                if (fr > 0.45 && fc > 0.12 && fc < 0.88) {
                                    R = 30;
                                    G = 46;
                                    B = 70;
                                }
                                else {
                                    R = 16;
                                    G = 21;
                                    B = 30;
                                }
                            }
                            else if (fr > 0.74 && fc > 0.24 && fc < 0.76) {
                                var sk = CROWD_SKIN[Math.floor(hash2(seat + 11, row) * 5)];
                                R = sk[0];
                                G = sk[1];
                                B = sk[2];
                            }
                            else if (fr > 0.26 && fc > 0.08 && fc < 0.92) {
                                var sh = hash2(seat, row + 999) < 0.3 ? homeC
                                    : CROWD_SHIRTS[Math.floor(hash2(seat + 3, row + 77) * CROWD_SHIRTS.length)];
                                R = sh[0];
                                G = sh[1];
                                B = sh[2];
                            }
                            else {
                                R = 14;
                                G = 18;
                                B = 24;
                            }
                        }
                        R = R * lit * 0.75 + 40 * 0.25;
                        G = G * lit * 0.75 + 50 * 0.25;
                        B = B * lit * 0.75 + 64 * 0.25;
                    }
                }
                else {
                    // behind the last row: the concourse facade, or open sky
                    var tB = (CAM_D + Math.sqrt(D2 - q2 * (D2 - rB * rB))) / q2;
                    var hBk = CAM_H + dyUp * tB;
                    if (hBk < hTop + 8) {
                        var fa = ((Math.atan2(dx * tB, tB - CAM_D) * rB / 7) % 1 + 1) % 1;
                        if (hBk > hTop + 5.4 && hBk < hTop + 6.8 && fa < 0.16) {
                            R = 255;
                            G = 236;
                            B = 196;
                        }
                        else if (hBk < hTop + 1.2) {
                            R = 50;
                            G = 58;
                            B = 70;
                        }
                        else {
                            R = 18 + grain * 4;
                            G = 24 + grain * 4;
                            B = 34 + grain * 4;
                        }
                    }
                    else
                        A = 0;
                }
            }
            px[o] = R;
            px[o + 1] = G;
            px[o + 2] = B;
            px[o + 3] = A;
        }
    };
    var finishBuild = function () {
        lc.putImageData(img, 0, 0);
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(lay, 0, 0);
        ctx.restore();
        // ── Light banks on their towers above the grandstand ──
        var facadeY = P(0, 520, hTop + 8)[1];
        var TOWERS = [
            { x: 0.07, y: H * 0.020, w: 16, big: 1 },
            { x: 0.93, y: H * 0.020, w: 16, big: 1 },
            { x: 0.29, y: H * 0.032, w: 10, big: 0 },
            { x: 0.71, y: H * 0.032, w: 10, big: 0 }
        ];
        TOWERS.forEach(function (t) {
            var lx = W * t.x, by = t.y, bh = t.big ? 10 : 7.5;
            ctx.fillStyle = "#1A212C";
            ctx.fillRect(lx - 1, by + bh - 4, 2, Math.max(2, facadeY - by - bh + 6));
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            var hg = ctx.createRadialGradient(lx, by + bh / 2, 1, lx, by + bh / 2, t.big ? 44 : 30);
            hg.addColorStop(0, "rgba(255,244,214," + (t.big ? 0.30 : 0.20) + ")");
            hg.addColorStop(0.25, "rgba(255,240,205,0.08)");
            hg.addColorStop(1, "rgba(255,240,205,0)");
            ctx.fillStyle = hg;
            ctx.fillRect(lx - 50, by - 45, 100, 100);
            ctx.restore();
            ctx.fillStyle = "#10151D";
            ctx.fillRect(lx - t.w, by - bh / 2, t.w * 2, bh);
            var cols = t.big ? 8 : 5, rows = t.big ? 3 : 2;
            for (var r2 = 0; r2 < rows; r2++)
                for (var cI = 0; cI < cols; cI++) {
                    var cx0 = lx - t.w + 1.6 + cI * ((t.w * 2 - 3.2) / cols);
                    var cy0 = by - bh / 2 + 1.3 + r2 * ((bh - 2.6) / rows);
                    ctx.fillStyle = "rgba(255,251,232,0.95)";
                    ctx.fillRect(cx0, cy0, (t.w * 2 - 3.2) / cols - 0.9, (bh - 2.6) / rows - 0.8);
                }
        });
        // ── Right-center scoreboard, sitting on the bleachers ──
        var sbA = P(60, 480, 80), sbB = P(150, 480, 48);
        var sbL = sbA[0], sbT = sbA[1], sbR = sbB[0], sbBt = sbB[1];
        ctx.fillStyle = "#0A0F16";
        ctx.fillRect(sbL + (sbR - sbL) * 0.18, sbBt, 2, 5);
        ctx.fillRect(sbL + (sbR - sbL) * 0.8, sbBt, 2, 5);
        ctx.fillStyle = "#04070B";
        ctx.fillRect(sbL, sbT, sbR - sbL, sbBt - sbT);
        ctx.strokeStyle = "rgba(110,126,150,0.35)";
        ctx.lineWidth = 0.7;
        ctx.strokeRect(sbL, sbT, sbR - sbL, sbBt - sbT);
        var vpR = sbL + (sbR - sbL) * 0.38;
        var vg0 = ctx.createLinearGradient(0, sbT, 0, sbBt);
        vg0.addColorStop(0, "#15243A");
        vg0.addColorStop(0.42, "#284A30");
        vg0.addColorStop(1, "#3C6A2E");
        ctx.fillStyle = vg0;
        ctx.fillRect(sbL + 1.4, sbT + 1.4, vpR - sbL - 2.4, sbBt - sbT - 2.8);
        ctx.fillStyle = "rgba(196,150,104,0.55)"; // a soft "live" shot of the diamond
        var vcx = (sbL + vpR) / 2, vcy = sbBt - (sbBt - sbT) * 0.3;
        ctx.beginPath();
        ctx.moveTo(vcx, vcy - 5);
        ctx.lineTo(vcx + 9, vcy);
        ctx.lineTo(vcx, vcy + 4);
        ctx.lineTo(vcx - 9, vcy);
        ctx.closePath();
        ctx.fill();
        for (var sr = sbT + 3; sr < sbBt - 2; sr += 2.6) {
            for (var sc = vpR + 2; sc < sbR - 2; sc += 1.9) {
                if (rnd() < 0.44) {
                    ctx.fillStyle = rnd() < 0.8 ? "rgba(255,176,46,0.85)" : "rgba(236,240,246,0.8)";
                    ctx.fillRect(sc, sr, 1.1, 1.1);
                }
            }
        }
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        var sbGlow = ctx.createRadialGradient((sbL + sbR) / 2, (sbT + sbBt) / 2, 2, (sbL + sbR) / 2, (sbT + sbBt) / 2, 44);
        sbGlow.addColorStop(0, "rgba(255,176,60,0.07)");
        sbGlow.addColorStop(1, "rgba(255,176,60,0)");
        ctx.fillStyle = sbGlow;
        ctx.fillRect(sbL - 40, sbT - 30, (sbR - sbL) + 80, (sbBt - sbT) + 60);
        ctx.restore();
        // ── Distance markers painted on the padding ──
        ctx.save();
        ctx.fillStyle = "rgba(236,238,228,0.80)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        [[0, "400"], [-0.31, "375"], [0.31, "375"]].forEach(function (m) {
            var dd = wallDist(m[0]), zz = dd * Math.cos(m[0]);
            var p0 = P(dd * Math.sin(m[0]), zz, 4.2);
            ctx.font = "700 " + Math.max(4, H * CAM_F * 5.4 / (zz + CAM_D)).toFixed(1) + "px " + FU;
            ctx.fillText(m[1], p0[0], p0[1]);
        });
        ctx.restore();
        // ── Haze hanging over the outfield under the lights ──
        var wallY = P(0, 400, 0)[1];
        var hz = ctx.createLinearGradient(0, wallY - 24, 0, wallY + 14);
        hz.addColorStop(0, "rgba(150,172,200,0)");
        hz.addColorStop(0.6, "rgba(150,172,200,0.07)");
        hz.addColorStop(1, "rgba(150,172,200,0)");
        ctx.fillStyle = hz;
        ctx.fillRect(0, wallY - 24, W, 38);
        // ── Chalk: foul lines, batter's boxes, catcher's box ──
        var quad = function (pts, fill) {
            ctx.fillStyle = fill;
            ctx.beginPath();
            pts.forEach(function (qp, k) { var pp = P(qp[0], qp[1], qp[2] || 0); if (k)
                ctx.lineTo(pp[0], pp[1]);
            else
                ctx.moveTo(pp[0], pp[1]); });
            ctx.closePath();
            ctx.fill();
        };
        var chalk = function (x1, z1, x2, z2, wd, al) {
            var L = Math.hypot(x2 - x1, z2 - z1), n = Math.max(1, Math.round(L / 1.5));
            var nx = -(z2 - z1) / L * wd / 2, nz = (x2 - x1) / L * wd / 2;
            for (var k = 0; k < n; k++) {
                var f0 = k / n, f1 = (k + 1) / n;
                var ax = x1 + (x2 - x1) * f0, az2 = z1 + (z2 - z1) * f0, bx2 = x1 + (x2 - x1) * f1, bz2 = z1 + (z2 - z1) * f1;
                quad([[ax + nx, az2 + nz], [bx2 + nx, bz2 + nz], [bx2 - nx, bz2 - nz], [ax - nx, az2 - nz]], "rgba(238,236,226," + (al * (0.72 + rnd() * 0.28)).toFixed(3) + ")");
            }
        };
        chalk(3, 3, 80, 80, 0.3, 0.85);
        chalk(-3, 3, -80, 80, 0.3, 0.85);
        [-1, 1].forEach(function (s) {
            chalk(1.21 * s, -3, 1.21 * s, 3, 0.25, 0.42); // inside line, scuffed by the hitters
            chalk(5.21 * s, -3, 5.21 * s, 3, 0.25, 0.60);
            chalk(1.21 * s, 3, 5.21 * s, 3, 0.25, 0.60);
            chalk(1.21 * s, -3, 5.21 * s, -3, 0.25, 0.55);
            chalk(1.79 * s, -3, 1.79 * s, -11, 0.25, 0.48); // catcher's box
        });
        // ── Home plate: white rubber in its black bevel, dusted with clay ──
        var PL = [[-0.708, 0.708], [0.708, 0.708], [0.708, 0], [0, -0.708], [-0.708, 0]];
        quad([[-0.79, 0.77], [0.79, 0.77], [0.79, -0.03], [0, -0.81], [-0.79, -0.03]], "rgba(34,28,22,0.9)");
        var pA = P(0, 0.708), pB = P(0, -0.708);
        var hpG = ctx.createLinearGradient(0, pA[1], 0, pB[1]);
        hpG.addColorStop(0, "#F3F0E7");
        hpG.addColorStop(1, "#D2CCBD");
        quad(PL, hpG);
        ctx.save();
        ctx.beginPath();
        PL.forEach(function (qp, k) { var pp = P(qp[0], qp[1]); if (k)
            ctx.lineTo(pp[0], pp[1]);
        else
            ctx.moveTo(pp[0], pp[1]); });
        ctx.closePath();
        ctx.clip();
        for (var du = 0; du < 14; du++) {
            ctx.fillStyle = "rgba(150,110,72," + (0.06 + rnd() * 0.10) + ")";
            ctx.beginPath();
            ctx.ellipse(pB[0] + (rnd() - 0.5) * 26, pA[1] + rnd() * (pB[1] - pA[1]), 1 + rnd() * 3, 0.6 + rnd() * 1.2, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
        // ── Pitching rubber and second base ──
        quad([[-1, 60.3], [1, 60.3], [1, 59.8], [-1, 59.8]], "#E2DED4");
        quad([[-1, 59.8, 0], [1, 59.8, 0], [1, 59.8, 0.18], [-1, 59.8, 0.18]], "#A9A498");
        quad([[0, 128.2], [0.884, 127.3], [0, 126.4], [-0.884, 127.3]], "#F2F0E8");
        BG_CACHE = c;
        BG_KEY = key;
        flushWaiters(BG_WAIT); // the home screen may be waiting to show it
    };
    var jNext = 0, jDone = false;
    return { key: key, run: function (ms) {
            var t0 = performance.now();
            while (jNext < PH) {
                rayRow(jNext++);
                if (performance.now() - t0 > ms)
                    break;
            }
            if (jNext >= PH && !jDone) {
                jDone = true;
                finishBuild();
            }
            return jDone;
        } };
}
/* ═══ IDLE-TIME BUILDS — the stadium and the overhead wide shot are both
   ray-cast pixel by pixel, about half a second apiece. Built on demand,
   they froze the home screen as it opened and the game the first time a
   ball was put in play. warmCaches builds them a few rows at a time, and
   only while nothing on the field is moving (home screen, before a pitch,
   the result screen), so both are ready before they're needed. Anything
   needed sooner just finishes on the spot, exactly as before. ═══ */
var BG_JOB = null, OFB_JOB = null, BG_WAIT = [];
var WARM = { hold: false, on: false };
function cacheKey(W, H) { return W + "x" + H + "@" + dprOf(); }
function flushWaiters(list) { list.splice(0).forEach(function (f) { try {
    f();
}
catch (e) { } }); }
function warmCaches() {
    if (WARM.on || typeof document === "undefined")
        return;
    WARM.on = true;
    var tick = function () {
        try {
            if (WARM.hold) {
                setTimeout(tick, 150);
                return;
            }
            var key = cacheKey(CW, CH);
            if (!(BG_CACHE && BG_KEY === key)) {
                if (!BG_JOB || BG_JOB.key !== key)
                    BG_JOB = backgroundJob(CW, CH, key);
                BG_JOB.run(7);
            }
            else if (!(OFB_CACHE && OFB_KEY === key)) {
                if (!OFB_JOB || OFB_JOB.key !== key)
                    OFB_JOB = overheadJob(CW, CH, key);
                OFB_JOB.run(7);
            }
            else {
                WARM.on = false;
                return;
            }
            setTimeout(tick, 0);
        }
        catch (e) {
            WARM.on = false;
        }
    };
    setTimeout(tick, 0);
}
/* ═══ BROADCAST GRADE — the vignette and colour grade laid over the game
   view never move, so, like the stadium, they're painted once into a
   clear overlay (cached per DPR) and copied over each frame. Two
   full-screen gradient fills every frame were half of all the drawing
   the game view did. ═══ */
var GRADE_CACHE = null, GRADE_KEY = "";
function buildGrade(W, H) {
    var key = cacheKey(W, H);
    if (GRADE_CACHE && GRADE_KEY === key)
        return GRADE_CACHE;
    var d = dprOf();
    var c = document.createElement("canvas");
    c.width = Math.round(W * d);
    c.height = Math.round(H * d);
    var ctx = c.getContext("2d");
    ctx.scale(d, d);
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
    GRADE_CACHE = c;
    GRADE_KEY = key;
    return c;
}
/* ═══ SCORE BUGS — the MPH gun and the COUNT box change at most once a
   pitch, so each is painted into a small sprite laid on the game canvas's
   own device-pixel grid, then copied into every frame. Their glowing
   digits use a canvas shadow blur, which is slow on iPhone; it now runs
   once per value instead of every frame. A sprite repaints if a web font
   finishes loading after it was made. ═══ */
var BUG_SPRITES = {}, FONT_EPOCH = 0;
try {
    document.fonts.addEventListener("loadingdone", function () { FONT_EPOCH++; });
}
catch (e) { }
function bugSprite(slot, text, x, y, w, h, paint) {
    var d = dprOf(), m = 14;
    var fs = typeof document !== "undefined" && document.fonts ? document.fonts.status : "";
    var k = text + "|" + [x, y, w, h, d, FONT_EPOCH].join(",") + fs;
    var s = BUG_SPRITES[slot];
    if (!s || s.k !== k) {
        var X0 = Math.floor((x - m) * d), Y0 = Math.floor((y - m) * d);
        var X1 = Math.ceil((x + w + m) * d), Y1 = Math.ceil((y + h + m) * d);
        var c = s ? s.c : document.createElement("canvas");
        c.width = X1 - X0;
        c.height = Y1 - Y0; // (re)sizing also clears it
        var sc = c.getContext("2d");
        sc.setTransform(d, 0, 0, d, -X0, -Y0); // the game canvas's own pixel grid
        paint(sc);
        s = BUG_SPRITES[slot] = { k: k, c: c, x: X0, y: Y0 };
    }
    return s;
}
function blitBug(ctx, s) {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(s.c, s.x, s.y);
    ctx.restore();
}
/* ═══ GAME CANVAS — night-game broadcast view ═══ */
function GameCanvas({ pitch, prog, wPhase, kit, count }) {
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
        var plateY = camPt(W, H, 0, 0)[1]; // both come straight out of the camera
        var moundY = camPt(W, H, 0, 60.3)[1];
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
        /* Every player casts a faint shadow off each of the four light banks
           — two out past the outfield, two up behind home — the star of
           shadows you see under stadium lights. Worked out on the ground in
           feet and projected back through the broadcast camera. */
        var LIGHTS = [[-250, 430], [250, 430], [-215, -130], [215, -130]];
        var castShadows = function (fx, fy, hgt, wid, alpha, ns) {
            ns = ns || 1; // >1 when called inside the scaled batter/catcher group
            var toL = function (p) { return [W / 2 + (p[0] - W / 2) / ns, plateY + (p[1] - plateY) / ns]; };
            var gp = camGround(W, H, W / 2 + ns * (fx - W / 2), plateY + ns * (fy - plateY)), xw = gp[0], zw = gp[1];
            LIGHTS.forEach(function (L) {
                var dxl = xw - L[0], dzl = zw - L[1], dl = Math.sqrt(dxl * dxl + dzl * dzl) || 1;
                var len = Math.min(hgt * dl / (140 - hgt), hgt * 1.15);
                var tip = toL(camPt(W, H, xw + dxl / dl * len, zw + dzl / dl * len, 0));
                var sdx = tip[0] - fx, sdy = tip[1] - fy, sl = Math.hypot(sdx, sdy) || 1;
                ctx.save();
                ctx.translate(fx, fy);
                ctx.rotate(Math.atan2(sdy, sdx));
                var sg = ctx.createLinearGradient(0, 0, sl, 0);
                sg.addColorStop(0, "rgba(0,0,0," + alpha + ")");
                sg.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = sg;
                ctx.beginPath();
                ctx.ellipse(sl * 0.45, 0, sl * 0.55, wid, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });
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
        /* ── PITCHER — a small 3-D rig, the same idea as the hitter ─────────
           A right-hander, built in real feet around the rubber: X to our
           right, Y up, Z toward center field (so home plate is -Z, toward us).
           Hips and shoulders turn separately (hips lead), the torso bends
           forward over his front leg, hands are keyed in his BODY frame so
           they turn with him, and elbows and knees come from 3-D two-bone IK
           with pole directions. Everything is projected through the real
           broadcast camera (then drawn a touch larger than life, PS) and
           painted back to front by true depth — so a hand behind his head is
           hidden by it, and his far leg sits behind his near one.
    
           His clock is unchanged: the windup runs keys 0 -> 0.84 (release on
           the windup's last frame, so the ball leaves from his hand), and the
           follow-through plays on to 1.35 while the ball is in flight.
             0.00 set        hands together at the chest, facing home
             0.30 lift       turned side-on, knee up to the belt and across
             0.55 break      stride starts, throwing hand down and back,
             (0.63, arm)     throwing arm swung out behind him, fully extended,
                             glove reaching for the plate
             0.70 strike     front foot down ~4.8 ft toward home, hips opening,
                             arm cocked up beside his head where you can see it
             0.84 release    shoulders square and past, torso bent over, hand
                             out in front at the release point
             1.00 finish     bent over toward the plate, throwing arm across to
                             the outside of his front knee, back leg up behind
                             him heel-up, mostly hidden by his body
             1.18, 1.35      back leg down beside the front, into a crouched
                             fielding position with the glove up */
        var PS = 1.12; // drawn a touch larger than life so the delivery reads at this distance
        var PKT = [0.00, 0.30, 0.55, 0.70, 0.84, 1.00, 1.18, 1.35];
        /* The throwing arm gets one extra pose, at 0.63: after the hand break it
           swings down, back and OUT behind him, fully extended, before the
           elbow comes up to shoulder height and the forearm lays up into the
           cock. Without it the hand's path cut straight through his shoulder —
           the arm folded to 159 deg (forearm lying on the upper arm) and the
           elbow whipped round. The cock is now a real right angle, and he's
           extended out front at release. Every other body part keeps PKT. */
        var PKTA = [0.00, 0.30, 0.55, 0.63, 0.70, 0.78, 0.84, 0.90, 1.00, 1.18, 1.35];
        /* The throw itself is a whip, not a push. From the cock (0.70) the
           ELBOW drives forward to shoulder height while the forearm lays back
           — hand trailing behind the elbow (0.78, layback). Then the forearm
           snaps over the top in an arc, high beside his head, and he lets go
           out in front with the arm nearly straight (0.84); the hand keeps
           going down and across (0.90) to the outside of his front knee. The
           hand is fastest at release, not before it. Through the layback and
           release the hand rides OUTSIDE the elbow — the forearm angles a little
           out, away from his head (a three-quarter slot) — instead of leaning
           in across his cap. Seen from behind the plate most of that is depth,
           so the hand also climbs above his cap at 0.78 and drives DOWN at us
           to a release in front of his face; otherwise it hung beside his head
           and then jumped across his chest in a single frame. */
        var PK3 = {
            pc: [[0, 2.9, 0.1], [0, 2.95, 0.15], [0.05, 2.6, -0.9], [0.2, 2.1, -2.4], [0.25, 2.0, -2.9], [0.25, 1.9, -3.3], [0.1, 2.2, -3.5], [0, 2.2, -3.7]],
            hip: [0, 80, 75, 45, 0, -40, -20, 0], // hip turn, deg (+ = side-on, chest toward 3B)
            sho: [0, 85, 85, 50, -10, -70, -30, 0], // shoulder turn
            lean: [5, 0, 0, 5, 30, 40, 25, 20], // forward bend, deg
            lh: [0, 0, 0, 0, 0.5, 1, 1, 1], // bend along his chest (0) -> toward home plate (1)
            lf: [[0.45, 0, 0.25], [0.05, 1.1, 0.25], [0.35, 0.45, -2.6], [0.5, 0, -4.8], [0.5, 0, -4.8], [0.5, 0, -4.8], [0.5, 0, -4.8], [0.5, 0, -4.8]],
            rf: [[-0.4, 0, 0.05], [-0.15, 0, 0], [-0.15, 0, 0], [-0.15, 0, 0], [-0.1, 0, -0.5], [-0.25, 1.05, -2.2], [-0.6, 0.15, -4.1], [-0.65, 0, -4.3]],
            rheel: [0, 0, 0, 0.2, 0.6, 0, 0, 0],
            // throwing arm: on its own timeline (PKTA) with one extra pose at 0.63
            th: [[-0.05, -0.55, 0.5], [0, -0.45, 0.45], [-0.75, -1.1, -0.35], [-2.1, -0.35, -0.5], [-1.45, 0.95, -0.35], [-1.5, 1.55, 0.0], [-1.1, 0.95, 1.3], [-0.55, -0.05, 1.8], [-1.38, -1.25, 1.05], [-0.1, -1.0, 0.6], [-0.25, -0.85, 0.75]],
            gh: [[0.05, -0.55, 0.58], [0.05, -0.45, 0.53], [1.2, -0.15, 0.25], [1.5, -0.1, -0.1], [1.0, -0.75, 0.6], [0.6, -1.15, 0.5], [0.55, -0.7, 0.8], [0.35, -0.6, 0.95]],
            // throwing elbow directions, chosen so they never line up with the arm
            // itself (that's what lets an IK elbow flip): back as the arm swings
            // down and out behind him, then out-and-down through the cock
            // and release, down again on the finish
            tp: [[-0.6, -1, 0], [-0.6, -1, 0], [0, 0.3, -1], [-0.1, 0, -1], [-0.6, -1, -0.2], [-0.1, -0.5, 1], [-0.3, -0.8, 0.4], [-0.5, -1, 0.2], [-0.3, -1, 0.2], [-0.5, -1, 0], [-0.6, -1, 0]],
            gp: [[0.6, -1, 0], [0.6, -1, 0], [0.2, -0.8, -0.6], [0.2, -0.6, -1], [0.5, -1, -0.2], [0.6, -1, 0], [0.6, -1, 0], [0.6, -1, 0]]
        };
        var PP0 = camPt(W, H, 0, 60.3, 0);
        var PP = function (p) {
            var q = camPt(W, H, p[0], 60.3 + p[2], p[1]);
            return [PP0[0] + (q[0] - PP0[0]) * PS, PP0[1] - 2 + (q[1] - PP0[1]) * PS];
        };
        var kPx = PS * H * CAM_F / (CAM_D + 60.3); // px per foot at the rubber
        var NEARP = function (p) { return -p[2] + 0.1 * p[1]; };
        var pAdd = function (a, b, k) { k = k == null ? 1 : k; return [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k]; };
        var pSub = function (a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; };
        var pDot = function (a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; };
        var pLen = function (a) { return Math.sqrt(pDot(a, a)); };
        var pIK = function (S0, E0, L1, L2, pole) {
            var dv = pSub(E0, S0), dl = pLen(dv) || 1e-3, u = [dv[0] / dl, dv[1] / dl, dv[2] / dl];
            var dc = Math.min(dl, L1 + L2 - 0.02), a = (L1 * L1 - L2 * L2 + dc * dc) / (2 * dc);
            var hh = Math.sqrt(Math.max(0, L1 * L1 - a * a));
            var pd = pDot(pole, u), q = [pole[0] - pd * u[0], pole[1] - pd * u[1], pole[2] - pd * u[2]], ql = pLen(q);
            if (ql < 1e-4) {
                q = [0, 0, -1];
                ql = 1;
            }
            return pAdd(pAdd(S0, u, a), q, hh / ql);
        };
        var pRig = function (pt) {
            var ch = function (arr) { return pchip(PKT, arr, pt); };
            var ch3 = function (arr) { return [0, 1, 2].map(function (i) { return ch(arr.map(function (v) { return v[i]; })); }); };
            var Pc = ch3(PK3.pc);
            var yh = ch(PK3.hip) * Math.PI / 180, ys = ch(PK3.sho) * Math.PI / 180, th = ch(PK3.lean) * Math.PI / 180;
            var rH = [Math.cos(yh), 0, -Math.sin(yh)], fH = [-Math.sin(yh), 0, -Math.cos(yh)];
            var f0 = [-Math.sin(ys), 0, -Math.cos(ys)]; // where his chest faces
            // He bends toward bd: along his chest in the windup, but toward home
            // plate — the direction of the throw — on the finish, while his chest
            // has turned to first base. (Bending along the chest there leaned him
            // off sideways.) The body frame is rebuilt around that spine.
            var lh = ch(PK3.lh), bx = lerp(f0[0], 0, lh), bz = lerp(f0[2], -1, lh), bL = Math.hypot(bx, bz) || 1;
            var bd = [bx / bL, 0, bz / bL];
            var u = [bd[0] * Math.sin(th), Math.cos(th), bd[2] * Math.sin(th)];
            var fdot = pDot(f0, u), fv = [f0[0] - fdot * u[0], f0[1] - fdot * u[1], f0[2] - fdot * u[2]], fL = pLen(fv) || 1;
            var f = [fv[0] / fL, fv[1] / fL, fv[2] / fL];
            var r = [f[1] * u[2] - f[2] * u[1], f[2] * u[0] - f[0] * u[2], f[0] * u[1] - f[1] * u[0]]; // his glove side
            var C = pAdd(Pc, u, 1.95); // shoulder centre
            var body = function (v) { return pAdd(pAdd(pAdd(C, r, v[0]), u, v[1]), f, v[2]); };
            var dir = function (v) { var d = pAdd(pAdd(r.map(function (c) { return c * v[0]; }), u, v[1]), f, v[2]), l = pLen(d) || 1; return [d[0] / l, d[1] / l, d[2] / l]; };
            var GS = pAdd(C, r, 0.62), TS = pAdd(C, r, -0.62);
            var LH = pAdd(Pc, rH, 0.30), RH = pAdd(Pc, rH, -0.30);
            var LF = ch3(PK3.lf), RF = ch3(PK3.rf), rheel = ch(PK3.rheel);
            var LA = pAdd(LF, [0, 1, 0], 0.25), RA = pAdd(RF, [0, 1, 0], 0.25 + rheel * 0.3);
            var kneePole = [fH[0], 0.35, fH[2]];
            // once his back foot is up off the dirt the knee hangs DOWN with the
            // heel up behind him, instead of kicking forward and out to the side
            var rl = sstep(0.25, 0.8, RF[1]);
            var kneePoleR = [lerp(fH[0], 0, rl), lerp(0.35, -1, rl), lerp(fH[2], -0.3, rl)];
            var chA3 = function (arr) { return [0, 1, 2].map(function (i) { return pchip(PKTA, arr.map(function (v) { return v[i]; }), pt); }); };
            var TH = body(chA3(PK3.th)), GH = body(ch3(PK3.gh));
            return { Pc: Pc, C: C, r: r, u: u, f: f, rH: rH, fH: fH, GS: GS, TS: TS, LH: LH, RH: RH, LF: LF, RF: RF, LA: LA, RA: RA,
                LK: pIK(LH, LA, 1.55, 1.5, kneePole), RK: pIK(RH, RA, 1.55, 1.5, kneePoleR),
                TH: TH, GH: GH, TE: pIK(TS, TH, 0.95, 0.95, dir(chA3(PK3.tp))), GE: pIK(GS, GH, 0.95, 0.95, dir(ch3(PK3.gp))),
                head: pAdd(C, u, 0.78), neck: pAdd(C, u, 0.25) };
        };
        // his release point, which is exactly where the ball's flight begins
        var PREL = PP(pRig(0.84).TH);
        var REL3 = pRig(0.84).TH; // the same hand in world feet (for the ball's depth)
        var drawPitcher = function (pt) {
            var R3 = pRig(pt);
            var SKIN = UF.skin;
            castShadows(PP([R3.Pc[0], 0, R3.Pc[2]])[0], PP([R3.Pc[0], 0, R3.Pc[2]])[1] + 1, 6.2, 2.4, 0.11);
            var gpc = PP([R3.Pc[0], 0, R3.Pc[2]]);
            ctx.fillStyle = "rgba(0,0,0,0.32)";
            ctx.beginPath();
            ctx.ellipse(gpc[0] + 1, gpc[1] + 0.5, 1.5 * kPx, 0.42 * kPx, 0, 0, Math.PI * 2);
            ctx.fill();
            // dust kicked up by the plant foot around foot strike and release
            if (pt > 0.66) {
                var dz = Math.min(1, (pt - 0.66) / 0.34), pf = PP([R3.LF[0], 0, R3.LF[2]]);
                ctx.fillStyle = "rgba(186,158,110," + (0.22 * (1 - dz * 0.6)).toFixed(3) + ")";
                ctx.beginPath();
                ctx.ellipse(pf[0] + 1, pf[1] + 1, 3 + dz * 6, 1.2 + dz * 1.8, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            // the release point varies a touch side to side pitch to pitch; the
            // hand carries the same offset through release
            var relW = sstep(0.62, 0.80, pt) * (1 - sstep(0.90, 1.05, pt));
            var relDx = (pitch ? pitch.sx * 2 : 0) * relW;
            var S = function (p) { return PP(p); };
            var leg = function (Hp, Kp, Ap, Fp, far) {
                var h = S(Hp), k = S(Kp), a = S(Ap), fo = S(Fp);
                var pc = far ? UF.pD : UF.pM;
                var thigh = function () { limb(h[0], h[1], k[0], k[1], 0.40 * kPx, 0.30 * kPx, pc); };
                var shin = function () {
                    var m = [lerp(k[0], a[0], 0.45), lerp(k[1], a[1], 0.45)];
                    limb(k[0], k[1], m[0], m[1], 0.30 * kPx, 0.27 * kPx, pc); // pants to mid-calf
                    limb(m[0], m[1], a[0], a[1], 0.26 * kPx, 0.20 * kPx, far ? shade(UF.jD, -0.3) : UF.jD); // high socks
                    ctx.fillStyle = "#14161B";
                    ctx.beginPath();
                    ctx.ellipse((a[0] + fo[0]) / 2, Math.max(a[1], fo[1]) + 0.2, 0.36 * kPx, 0.2 * kPx, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = "rgba(220,226,236,0.30)";
                    ctx.fillRect((a[0] + fo[0]) / 2 - 0.3 * kPx, Math.max(a[1], fo[1]) + 0.2 * kPx, 0.6 * kPx, 0.45);
                };
                // The two halves of the leg go down back to front as well: when his
                // back leg comes up behind him on the finish, the knee bends and the
                // calf, sock and shoe are FARTHER from us than the thigh, so they go
                // first and the thigh covers them (they were painting over it).
                var mid3 = function (p, q) { return [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2, (p[2] + q[2]) / 2]; };
                if (NEARP(mid3(Kp, Ap)) < NEARP(mid3(Hp, Kp))) {
                    shin();
                    thigh();
                }
                else {
                    thigh();
                    shin();
                }
            };
            var arm = function (Sp, Ep, Hp, dark) {
                var s = S(Sp), e = S(Ep), h = S(Hp);
                limb(s[0], s[1], e[0], e[1], 0.30 * kPx, 0.25 * kPx, dark ? shade(UF.jM, -0.25) : UF.jM); // sleeve + upper arm
                limb(e[0], e[1], h[0], h[1], 0.22 * kPx, 0.17 * kPx, shade(UF.jD, -0.1)); // undershirt forearm
                return h;
            };
            // torso and pelvis: hulls of projected rings, like the hitter's
            var hullOf = function (pts) {
                pts.sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; });
                var cr = function (o, p, q) { return (p[0] - o[0]) * (q[1] - o[1]) - (p[1] - o[1]) * (q[0] - o[0]); };
                var lo = [], up = [];
                pts.forEach(function (p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0)
                    lo.pop(); lo.push(p); });
                for (var i = pts.length - 1; i >= 0; i--) {
                    var p = pts[i];
                    while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0)
                        up.pop();
                    up.push(p);
                }
                lo.pop();
                up.pop();
                return lo.concat(up);
            };
            var ring = function (out, c, a1, r1, a2, r2, n) {
                for (var i = 0; i < n; i++) {
                    var t = i / n * Math.PI * 2;
                    out.push(S(pAdd(pAdd(c, a1, r1 * Math.cos(t)), a2, r2 * Math.sin(t))));
                }
            };
            var fillHull = function (h, fill) { ctx.fillStyle = fill; ctx.beginPath(); h.forEach(function (p, i) { if (i)
                ctx.lineTo(p[0], p[1]);
            else
                ctx.moveTo(p[0], p[1]); }); ctx.closePath(); ctx.fill(); };
            var belt = pAdd(R3.Pc, [0, 1, 0], 0.5);
            var drawTorso = function () {
                var pv = [];
                ring(pv, belt, R3.rH, 0.52, R3.fH, 0.34, 16);
                ring(pv, R3.Pc, R3.rH, 0.54, R3.fH, 0.38, 16);
                fillHull(hullOf(pv), UF.pM); // pelvis
                var tp = [];
                ring(tp, pAdd(R3.C, R3.u, 0.05), R3.r, 0.66, R3.f, 0.33, 18);
                ring(tp, pAdd(R3.C, R3.u, -0.65), R3.r, 0.58, R3.f, 0.37, 18);
                ring(tp, belt, R3.rH, 0.50, R3.fH, 0.33, 14);
                ring(tp, pAdd(R3.C, R3.u, 0.22), R3.r, 0.18, R3.f, 0.16, 10);
                var th2 = hullOf(tp), top = S(R3.C), bot = S(belt);
                var tG = ctx.createLinearGradient(top[0] - 4, top[1], bot[0] + 4, bot[1]);
                tG.addColorStop(0, UF.jL);
                tG.addColorStop(0.55, UF.jM);
                tG.addColorStop(1, UF.jD);
                fillHull(th2, tG);
                // the side of his chest turned away from us falls into shade
                ctx.save();
                fillHull(th2, "rgba(0,0,0,0)");
                ctx.clip();
                var sx0 = S(pAdd(R3.C, R3.r, -0.7))[0], sx1 = S(pAdd(R3.C, R3.r, 0.7))[0];
                var sideDark = Math.max(0, R3.r[2]); // glove side turning away
                var sg = ctx.createLinearGradient(sx0, 0, sx1, 0);
                sg.addColorStop(0, "rgba(0,0,0," + (0.22 * Math.max(0, -R3.r[2])).toFixed(3) + ")");
                sg.addColorStop(1, "rgba(0,0,0," + (0.22 * sideDark).toFixed(3) + ")");
                ctx.fillStyle = sg;
                ctx.fillRect(Math.min(sx0, sx1) - 4, top[1] - 6, Math.abs(sx1 - sx0) + 8, bot[1] - top[1] + 10);
                ctx.restore();
                // placket down the front (only while his chest faces us) and the belt
                var faceUs = Math.max(0, -R3.f[2]);
                if (faceUs > 0.3) {
                    var pk0 = S(pAdd(pAdd(R3.C, R3.f, 0.33), R3.u, -0.05)), pk1 = S(pAdd(belt, R3.fH, 0.33));
                    ctx.strokeStyle = UF.trim;
                    ctx.globalAlpha = 0.45 * faceUs;
                    ctx.lineWidth = 0.55;
                    ctx.beginPath();
                    ctx.moveTo(pk0[0], pk0[1]);
                    ctx.lineTo(pk1[0], pk1[1]);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
                var bl = [];
                ring(bl, belt, R3.rH, 0.51, R3.fH, 0.34, 20);
                ctx.strokeStyle = UF.belt;
                ctx.lineWidth = 0.28 * kPx;
                var bL = bl.reduce(function (m, p) { return p[0] < m[0] ? p : m; }), bR = bl.reduce(function (m, p) { return p[0] > m[0] ? p : m; });
                ctx.beginPath();
                ctx.moveTo(bL[0], bL[1]);
                ctx.lineTo(bR[0], bR[1]);
                ctx.stroke();
            };
            var drawHead = function () {
                var hd = S(R3.head), nk = S(R3.neck), hr = 0.42 * kPx;
                ctx.fillStyle = shade(SKIN, -0.12); // neck, running down into the collar
                ctx.beginPath();
                ctx.moveTo(hd[0] - hr * 0.45, hd[1] + hr * 0.6);
                ctx.lineTo(hd[0] + hr * 0.45, hd[1] + hr * 0.6);
                ctx.lineTo(nk[0] + hr * 0.7, nk[1] + 0.8);
                ctx.lineTo(nk[0] - hr * 0.7, nk[1] + 0.8);
                ctx.closePath();
                ctx.fill();
                ctx.fillStyle = SKIN;
                ctx.beginPath();
                ctx.ellipse(hd[0], hd[1], hr * 0.88, hr, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "rgba(20,12,6,0.34)"; // his face under the brim
                ctx.beginPath();
                ctx.ellipse(hd[0], hd[1] + hr * 0.05, hr * 0.88, hr * 0.58, 0, 0, Math.PI * 2);
                ctx.fill();
                var capG = ctx.createLinearGradient(hd[0] - hr, hd[1] - hr * 1.2, hd[0] + hr, hd[1]);
                capG.addColorStop(0, UF.capL);
                capG.addColorStop(1, UF.capD);
                ctx.fillStyle = capG;
                ctx.beginPath();
                ctx.arc(hd[0], hd[1] - hr * 0.25, hr * 0.93, Math.PI, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = UF.capD; // brim, toward the plate
                ctx.beginPath();
                ctx.ellipse(hd[0], hd[1] - hr * 0.18, hr * 1.15, hr * 0.3, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "rgba(180,205,255,0.22)";
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.arc(hd[0], hd[1] - hr * 0.35, hr * 0.8, Math.PI * 1.1, Math.PI * 1.6);
                ctx.stroke();
            };
            var drawGloveArm = function () {
                var h = arm(R3.GS, R3.GE, R3.GH, NEARP(R3.GS) < NEARP(R3.C));
                var gw = 0.34 * kPx;
                var glG = ctx.createRadialGradient(h[0] - gw * 0.3, h[1] - gw * 0.35, 0.3, h[0], h[1], gw * 1.2);
                glG.addColorStop(0, "#6A4320");
                glG.addColorStop(1, "#2C1A0A");
                ctx.fillStyle = glG;
                ctx.beginPath();
                ctx.ellipse(h[0], h[1] - gw * 0.2, gw * 0.85, gw, 0.15, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "rgba(190,140,80,0.35)";
                ctx.lineWidth = 0.35;
                ctx.stroke();
            };
            var drawThrowArm = function () {
                var s = S(R3.TS), e = S(R3.TE), h = S(R3.TH);
                h[0] += relDx;
                // whip blur: through the snap the forearm and hand smear along their
                // path over the last frame, like the bat's — that's what sells a throw
                if (pt > 0.76 && pt < 0.94) {
                    for (var gi = 3; gi >= 1; gi--) {
                        var Rg = pRig(pt - gi * 0.011), ge = S(Rg.TE), gh2 = S(Rg.TH);
                        gh2[0] += relDx;
                        ctx.globalAlpha = 0.34 - gi * 0.08;
                        limb(ge[0], ge[1], gh2[0], gh2[1], 0.20 * kPx, 0.15 * kPx, shade(UF.jD, 0.15));
                    }
                    ctx.globalAlpha = 1;
                }
                limb(s[0], s[1], e[0], e[1], 0.30 * kPx, 0.25 * kPx, NEARP(R3.TS) < NEARP(R3.C) ? shade(UF.jM, -0.25) : UF.jM);
                limb(e[0], e[1], h[0], h[1], 0.22 * kPx, 0.17 * kPx, shade(UF.jD, -0.1));
                rim(s[0], s[1], e[0], e[1], 0.30 * kPx);
                ctx.fillStyle = SKIN;
                ctx.beginPath();
                ctx.arc(h[0], h[1], 0.17 * kPx, 0, Math.PI * 2);
                ctx.fill();
                if (pt >= 0.425 && pt <= 0.84) { // the ball, from hand break to release
                    ctx.fillStyle = "#F6F1E4";
                    ctx.beginPath();
                    ctx.arc(h[0], h[1] - 0.4, Math.max(1.05, 0.14 * kPx), 0, Math.PI * 2);
                    ctx.fill();
                }
            };
            var mid = function (a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]; };
            var parts = [
                { n: NEARP(mid(R3.LH, R3.LA)), f: function () { leg(R3.LH, R3.LK, R3.LA, R3.LF, NEARP(R3.LA) < NEARP(R3.RA)); } },
                { n: NEARP(mid(R3.RH, R3.RA)), f: function () { leg(R3.RH, R3.RK, R3.RA, R3.RF, NEARP(R3.RA) < NEARP(R3.LA)); } },
                { n: NEARP(R3.C) - 0.05, f: drawTorso },
                { n: NEARP(R3.head), f: drawHead },
                { n: NEARP(mid(R3.GE, R3.GH)) + 0.02, f: drawGloveArm },
                { n: NEARP(mid(R3.TE, R3.TH)) + 0.02, f: drawThrowArm }
            ];
            parts.sort(function (a, b) { return a.n - b.n; }).forEach(function (p) { p.f(); });
        };
        // windup maps onto keys 0 -> 0.84 (release lands on the last windup
        // frame); once the ball is in flight his follow-through runs on to 1.35
        drawPitcher(pitch && prog > 0 ? Math.min(1.35, 0.84 + prog * 0.6) : 0.84 * (wPhase || 0));
        /* ── BATTER (colored, shaded, on near side of plate) ── */
        var bIsRight = curBat === "right";
        // From behind the plate a right-handed hitter stands in the box on
        // the third-base side — the umpire's left — and a lefty on the right.
        var bCx = bIsRight ? W / 2 - 50 : W / 2 + 50;
        var bf = bIsRight ? -1 : 1;
        var bFeet = plateY + 22;
        var bKnees = plateY - 6;
        var bWaist = plateY - 34;
        var bChest = plateY - 56;
        var bShldr = plateY - 60;
        var bHead = plateY - 71;
        var zTop = (bShldr + bWaist) / 2, zBot = plateY - 2; // letters-to-knees on the figure
        var zoneY = function (fy) { return (zTop + zBot) / 2 - (fy / 12) * ((zBot - zTop) / 2); };
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
        /* Legs in 3-D, like the upper body. Each key plants the feet in the
           box in feet: X away from the plate, Z toward the mound, plus how
           high the front foot is lifted. In the stance his feet are one ahead
           of the other along the box (front foot toward the mound, so it sits
           higher on screen, back foot nearer us), not side by side. Knees are
           solved from the real hip joints, so each hip drives its own leg.
           dx / dy still shift the upper body in pixels, exactly as before.
           Same key times. */
        var LEGK = [
            { t: 0.00, dx: 0.0, dy: 0.0, lFx: -0.05, lFz: 1.15, lFl: 0.00, bFx: 0.10, bFz: -1.15, toe: 0.00, air: 0 },
            { t: 0.18, dx: 1.8, dy: 2.2, lFx: 0.05, lFz: 0.60, lFl: 0.55, bFx: 0.10, bFz: -1.15, toe: 0.04, air: 1 },
            { t: 0.34, dx: 0.9, dy: 2.8, lFx: -0.10, lFz: 1.50, lFl: 0.20, bFx: 0.10, bFz: -1.15, toe: 0.10, air: 1 },
            { t: 0.50, dx: -1.5, dy: 1.0, lFx: -0.15, lFz: 1.75, lFl: 0.00, bFx: 0.10, bFz: -1.15, toe: 0.45, air: 0 },
            { t: 0.75, dx: -3.0, dy: 0.0, lFx: -0.15, lFz: 1.75, lFl: 0.00, bFx: 0.12, bFz: -1.10, toe: 0.85, air: 0 },
            { t: 1.00, dx: -4.2, dy: -1.0, lFx: -0.15, lFz: 1.75, lFl: 0.00, bFx: 0.14, bFz: -1.05, toe: 1.00, air: 0 }
        ];
        // smooth through the keys, so the stride, plant and pivot flow into
        // each other instead of pausing at every key
        var legPose = keyPose(LEGK, Math.min(legT, 1));
        if (settle > 0) {
            var sm = settle * settle * (3 - 2 * settle);
            var ST = LEGK[0];
            var LP0 = legPose;
            legPose = {};
            Object.keys(LP0).forEach(function (k) { legPose[k] = lerp(LP0[k], k === "air" ? 0 : ST[k], sm); });
        }
        var bodyDx = legPose.dx, bodyDy = legPose.dy;
        // How far his shoulders have opened toward the pitcher. In the stance
        // we see him three-quarters from behind with his shoulders closed; as
        // he swings he rotates open and his back squares up to us. (Read-only
        // copy of the swing clock below — nothing here changes its timing.)
        /* The swing clock, rebuilt for smoothness. Measured at 60 fps the old
           one ran the whole swing in 9 frames — a 2-frame load, a 62-px jump
           in one frame, and a 4-frame follow-through that slammed to a stop.
           Contact still lands at exactly CONTACT_P (key 0.50), so nothing the
           game decides moves. Every hitter now gathers his hands on every
           pitch — so a load never tips a swing — and a swing launches,
           accelerates into the ball, and decelerates through a full finish. */
        var loadU = function (p) {
            var l = 0.22 * sstep(0.35, 0.66, p);
            if (p > 1)
                l *= 1 - sstep(1, 1.45, p); // on a take the hands settle back after the ball goes by
            return l;
        };
        var swingU = function (p) {
            if (p < 0.66)
                return loadU(p);
            if (p < CONTACT_P)
                return 0.22 + 0.28 * Math.pow((p - 0.66) / (CONTACT_P - 0.66), 1.8);
            var y = Math.min(1, (p - CONTACT_P) / 0.36);
            return 0.5 + 0.5 * (1 - (1 - y) * (1 - y));
        };
        var opT = 0;
        if (pitch && pitch.swing)
            opT = swingU(prog);
        else if (pitch && pitch.check)
            opT = Math.max(loadU(prog), (pitch.went ? 0.60 : 0.30) * Math.max(0, Math.min(1, (easedG - 0.76) / 0.14)));
        var op = sstep(0.30, 0.62, opT);
        // Swing key times and the torso / hip turn (degrees from facing the
        // plate toward the mound). Used by the 3-D upper-body rig below; the
        // hip turn also sets how wide the pelvis and belt read from here.
        var RIG_T = [0, 0.22, 0.38, 0.50, 0.68, 0.82, 1.00];
        var RIG_YAW = [14, 6, 22, 55, 95, 118, 128], RIG_HIP = [22, 16, 50, 92, 112, 122, 128]; // hips lead, shoulders ~halfway open at contact
        // After a check swing where he went, he brings the bat straight back to
        // his stance: every channel of the rig blends from the check pose back
        // to the stance pose (rather than rewinding the swing, which would drag
        // the barrel back down through the slot). Held-up checks already settle.
        var rbChk = (pitch && pitch.check && pitch.went) ? sstep(1.02, 1.42, prog) : 0;
        var yawH = lerp(pchip(RIG_T, RIG_HIP, opT), RIG_HIP[0], rbChk) * Math.PI / 180;
        var hwc = Math.sqrt(Math.pow(0.66 * Math.sin(yawH), 2) + Math.pow(0.42 * Math.cos(yawH), 2)) / 0.66;
        var cw = 1;
        /* ── NEAR GROUP: batter and catcher are drawn in their original
           coordinates and scaled up about the plate by NEAR_S, because the
           camera is now that much closer to them than to the mound. The ball's
           end point goes through the same scale so it still meets the bat,
           the mitt and the zone exactly. ── */
        ctx.save();
        ctx.translate(W / 2, plateY);
        ctx.scale(NEAR_S, NEAR_S);
        ctx.translate(-W / 2, -plateY);
        castShadows(bCx, bFeet + 2, 6.1, 7.5, 0.085, NEAR_S);
        ctx.save();
        ctx.translate(bCx, 0);
        var pantsG = ctx.createLinearGradient(-16, bWaist, 16, bFeet);
        pantsG.addColorStop(0, UB.pL);
        pantsG.addColorStop(0.5, UB.pM);
        pantsG.addColorStop(1, UB.pD);
        /* The pelvis lives in the same 3-D space as the torso rig and turns by
           the same hip yaw, so in the stance the hips are side-on with the
           shoulders (front hip farther from us and higher on screen, back hip
           nearer and lower) instead of a back-view seat squared up to the
           mound. Hip joints sit 0.3 ft either side of centre, 0.55 ft below
           the belt, projected through the same lens as everything else. */
        /* PAR3: perspective parallax. The camera is behind the plate and the
           hitter stands ~3 ft to the side, so anything of his that is farther
           from us also slides toward the plate on screen (x ~ X / depth). Per
           foot of depth that is 0.175 ft sideways. Without it his front foot
           hides straight behind his back leg. */
        var PAR3 = 0.175;
        var PJ = function (p) { return [(p[0] - PAR3 * p[2]) * 16.8 * bf, bWaist - p[1] * 16.8 - p[2] * 16.8 * 0.6]; };
        var rHp = [Math.sin(yawH), 0, Math.cos(yawH)], fHp = [-Math.cos(yawH), 0, Math.sin(yawH)];
        var hL0 = PJ([rHp[0] * 0.30, -0.55, rHp[2] * 0.30]), hB0 = PJ([-rHp[0] * 0.30, -0.55, -rHp[2] * 0.30]);
        // each hip joint is where the turned pelvis actually puts it
        var hipLx = hL0[0] + bodyDx * bf, hipLy = hL0[1] + bodyDy; // front hip
        var hipBx = hB0[0] + bodyDx * bf, hipBy = hB0[1] + bodyDy; // back hip
        // world-space hips (ft; the belt is 3.45 ft up) and feet on the dirt
        var LGS = 16.8, THI = 1.45, SHN = 1.42;
        var toW = function (sx, sy) { return [sx / (LGS * bf), 3.45 - (sy - bWaist) / LGS]; };
        var hipW = function (side) {
            var p = toW(side > 0 ? hipLx : hipBx, side > 0 ? hipLy : hipBy), z = rHp[2] * 0.30 * side;
            return [p[0] + PAR3 * z, p[1] - z * 0.6, z]; // undo the lens (parallax, depth lift)
        };
        var HLw = hipW(1), HBw = hipW(-1);
        var LFw = [legPose.lFx, legPose.lFl, legPose.lFz], BFw = [legPose.bFx, 0, legPose.bFz]; // shoes on the dirt
        // Each leg ends at the ANKLE, 0.28 ft up (plus the back heel's lift as
        // he pivots onto his toe), so the pant leg stops at the top of the shoe
        // instead of running down through it.
        var bHeel = 0.30 * legPose.toe;
        var LAw = [LFw[0], LFw[1] + 0.28, LFw[2]], BAw = [BFw[0], 0.28 + bHeel, BFw[2]];
        var PG = function (p) { return [(p[0] - PAR3 * p[2]) * LGS * bf, GY - p[1] * LGS - p[2] * LGS * 0.6]; }; // ground-anchored lens
        // knees: two-bone IK in 3-D. Which way a knee bends comes from a pole
        // direction: toward where his hips face in the stance, and for the back
        // knee, increasingly toward the front leg as he pivots onto his toe —
        // it drives inward to meet the front knee. (Aiming it where the hips
        // face at the finish, ~128 deg round, splayed it away from the front
        // leg, which from behind reads as a knee bending backwards.)
        var kneeW = function (H3, F3, pole) {
            var dx3 = F3[0] - H3[0], dy3 = F3[1] - H3[1], dz3 = F3[2] - H3[2], dl = Math.sqrt(dx3 * dx3 + dy3 * dy3 + dz3 * dz3) || 1e-3;
            var ux = dx3 / dl, uy = dy3 / dl, uz = dz3 / dl, dc = Math.min(dl, THI + SHN - 0.02);
            var a = (THI * THI - SHN * SHN + dc * dc) / (2 * dc), hh = Math.sqrt(Math.max(0, THI * THI - a * a));
            var px = pole[0], py = pole[1], pz = pole[2], pd = px * ux + py * uy + pz * uz;
            var qx = px - pd * ux, qy = py - pd * uy, qz = pz - pd * uz, ql = Math.sqrt(qx * qx + qy * qy + qz * qz) || 1;
            return [H3[0] + ux * a + qx / ql * hh, H3[1] + uy * a + qy / ql * hh, H3[2] + uz * a + qz / ql * hh];
        };
        var tfx = LAw[0] - HBw[0], tfz = LAw[2] - HBw[2], tfl = Math.hypot(tfx, tfz) || 1;
        var kIn = sstep(0, 1, legPose.toe); // 0 in the stance -> 1 up on his toe
        var backPole = [lerp(fHp[0], tfx / tfl, kIn), 0.15, lerp(fHp[2], tfz / tfl, kIn)];
        var lKp = PG(kneeW(HLw, LAw, [fHp[0], 0.15, fHp[2]])), bKp = PG(kneeW(HBw, BAw, backPole));
        var lFp = PG(LAw), bFp = PG(BAw), lFg = PG([LFw[0], 0, LFw[2]]), bFg = PG([BFw[0], 0, BFw[2]]);
        var lKx = lKp[0], lKy = lKp[1], lFx = lFp[0], lFy = lFp[1];
        var bKx = bKp[0], bKy = bKp[1], bFx = bFp[0], bFy = bFp[1];
        /* A shoe in 3-D, standing on the dirt: heel under the ankle, toe
           pointing toward the plate (the back foot's toe swings round toward
           the mound as he pivots), and the heel rises about the toe as it
           lifts. Its silhouette is the hull of the projected sole and upper,
           drawn onto the pants canvas in depth order with the legs. */
        var shoeOn = function (c, Fw, dir, heel) {
            var dl = Math.hypot(dir[0], dir[2]) || 1, ux = dir[0] / dl, uz = dir[2] / dl, nx = -uz, nz = ux;
            var pts = [], sole = [];
            [[-0.22, 0, 0.16], [-0.22, 0.30, 0.13], [0.20, 0.22, 0.15], [0.58, 0.12, 0.12], [0.62, 0, 0.12], [0.2, 0, 0.17]].forEach(function (q) {
                var lift = heel * (0.62 - q[0]) / 0.84; // pivots about the toe
                [-1, 1].forEach(function (sd) {
                    var p = PG([Fw[0] + ux * q[0] + nx * q[2] * sd, Fw[1] + q[1] + lift, Fw[2] + uz * q[0] + nz * q[2] * sd]);
                    pts.push(p);
                    if (q[1] === 0)
                        sole.push(p);
                });
            });
            pts.sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; });
            var lo2 = [], up2 = [];
            pts.forEach(function (p) { while (lo2.length >= 2 && crsP(lo2[lo2.length - 2], lo2[lo2.length - 1], p) <= 0)
                lo2.pop(); lo2.push(p); });
            for (var k = pts.length - 1; k >= 0; k--) {
                var pk = pts[k];
                while (up2.length >= 2 && crsP(up2[up2.length - 2], up2[up2.length - 1], pk) <= 0)
                    up2.pop();
                up2.push(pk);
            }
            lo2.pop();
            up2.pop();
            var hull = lo2.concat(up2);
            c.fillStyle = shade(UB.cap, -0.35);
            c.beginPath();
            hull.forEach(function (p, k) { if (k)
                c.lineTo(p[0], p[1]);
            else
                c.moveTo(p[0], p[1]); });
            c.closePath();
            c.fill();
            // the light catches the top of the toe box, and the sole edge
            var tb = PG([Fw[0] + ux * 0.40, Fw[1] + 0.17 + heel * 0.26, Fw[2] + uz * 0.40]);
            c.fillStyle = "rgba(214,228,255,0.16)";
            c.beginPath();
            c.ellipse(tb[0], tb[1], 2.6, 1.1, 0, 0, Math.PI * 2);
            c.fill();
            var yMax = sole.reduce(function (m, p) { return Math.max(m, p[1]); }, -1e9);
            c.strokeStyle = "rgba(220,226,236,0.22)";
            c.lineWidth = 0.8;
            c.beginPath();
            c.moveTo(Math.min.apply(null, sole.map(function (p) { return p[0]; })), yMax - 0.6);
            c.lineTo(Math.max.apply(null, sole.map(function (p) { return p[0]; })), yMax - 0.6);
            c.stroke();
        };
        var frontDir = [-0.92, 0, 0.38];
        var backDir = [lerp(-0.97, -0.30, legPose.toe), 0, lerp(-0.10, 0.95, legPose.toe)];
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
        ctx.ellipse(bFg[0], bFg[1] + 1, 11, 3.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1 - legPose.air * 0.6;
        ctx.beginPath();
        ctx.ellipse(lFx, lFg[1] + 1, 10 - legPose.air * 2, 3.2 - legPose.air, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        // toe drag mark when the back heel comes up
        if (legPose.toe > 0.5) {
            ctx.fillStyle = "rgba(186,158,110," + (0.22 * (legPose.toe - 0.5) / 0.5) + ")";
            ctx.beginPath();
            ctx.ellipse(bFg[0] + 4 * bf, bFg[1] + 1, 7, 2.4, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        // dust kicked up when the front foot lands (on the dirt, under the leg)
        if (legT > 0.44 && legT < 0.74) {
            var dz2 = (legT - 0.44) / 0.30;
            ctx.fillStyle = "rgba(186,158,110," + (0.28 * (1 - dz2)) + ")";
            ctx.beginPath();
            ctx.ellipse(lFg[0], lFg[1] + 1, 6 + dz2 * 11, 2.2 + dz2 * 2.8, 0, 0, Math.PI * 2);
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
        var dLB = dprOf() * NEAR_S, LBW = 96, LBH = 84, LBY = bWaist - 6;
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
        // pelvis silhouette: hull of three projected rings — the belt line
        // (the same ring the jersey's waist uses, so they meet cleanly), the
        // seat bulging out behind him, and the tops of the thighs
        var pelvisPts = [];
        var ringP = function (y, back, ra, rb, n) {
            for (var i = 0; i < n; i++) {
                var th = i / n * Math.PI * 2, ca = ra * Math.cos(th), sb = rb * Math.sin(th);
                pelvisPts.push(PJ([rHp[0] * ca + fHp[0] * (sb - back), y, rHp[2] * ca + fHp[2] * (sb - back)]));
            }
        };
        ringP(0.02, 0, 0.66, 0.42, 20);
        ringP(-0.42, 0.08, 0.64, 0.50, 20);
        ringP(-0.74, 0, 0.44, 0.34, 16);
        pelvisPts.sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; });
        var crsP = function (o, p, q) { return (p[0] - o[0]) * (q[1] - o[1]) - (p[1] - o[1]) * (q[0] - o[0]); };
        var loP = [], upP = [];
        pelvisPts.forEach(function (p) { while (loP.length >= 2 && crsP(loP[loP.length - 2], loP[loP.length - 1], p) <= 0)
            loP.pop(); loP.push(p); });
        for (var pi3 = pelvisPts.length - 1; pi3 >= 0; pi3--) {
            var pp3 = pelvisPts[pi3];
            while (upP.length >= 2 && crsP(upP[upP.length - 2], upP[upP.length - 1], pp3) <= 0)
                upP.pop();
            upP.push(pp3);
        }
        loP.pop();
        upP.pop();
        var pelvisHull = loP.concat(upP);
        var pelvisPath = function (c) {
            c.beginPath();
            pelvisHull.forEach(function (p, k) { if (k)
                c.lineTo(p[0], p[1]);
            else
                c.moveTo(p[0], p[1]); });
            c.closePath();
        };
        /* Draw order follows real depth. Seen side-on, his FRONT leg is the
           far one, so it goes down first and takes its shade while it's alone
           on the canvas; then the seat; then the near (back) leg over both.
           Where the legs cross as his hips open, the near leg now covers the
           far one instead of the far leg's shaded shape painting over it. */
        // 0. front shoe (far), under its own pant cuff and anything nearer
        shoeOn(oc, LFw, frontDir, 0);
        // 1. front leg (far), shaded as it turns away from the light: the shade
        //    fades in from nothing at the hip so it melts into the seat. It's
        //    stamped solid on a mask, then the gradient is keyed in with
        //    source-in, so overlapping joint circles can't stack into blobs.
        limbOn(oc, hipLx, hipLy, lKx, lKy, 5.4, 3.7, pantsO);
        limbOn(oc, lKx, lKy, lFx, lFy, 3.3, 2.5, pantsO);
        limbOn(om, hipLx, hipLy, lKx, lKy, 5.4, 3.7, "#000");
        limbOn(om, lKx, lKy, lFx, lFy, 3.3, 2.5, "#000");
        om.globalCompositeOperation = "source-in";
        var farG = om.createLinearGradient(0, hipLy, 0, lFy);
        farG.addColorStop(0, "rgba(10,14,22,0)");
        farG.addColorStop(0.30, "rgba(10,14,22,0.24)");
        farG.addColorStop(1, "rgba(10,14,22,0.28)");
        om.fillStyle = farG;
        om.fillRect(-LBW / 2, LBY, LBW, LBH);
        om.globalCompositeOperation = "source-over";
        oc.globalCompositeOperation = "source-atop";
        oc.drawImage(LB_MASK, -LBW / 2, LBY, LBW, LBH);
        oc.globalCompositeOperation = "source-over";
        // 2. seat, riding the weight shift with the torso
        oc.save();
        oc.translate(bodyDx * bf, bodyDy);
        pelvisPath(oc);
        oc.fillStyle = pantsO;
        oc.fill();
        oc.restore();
        // 3. back shoe, then the back leg (near) over the hip and the far leg,
        //    its cuff sitting on the top of the shoe
        shoeOn(oc, BFw, backDir, bHeel);
        limbOn(oc, hipBx, hipBy, bKx, bKy, 5.4, 3.6, pantsO);
        limbOn(oc, bKx, bKy, bFx, bFy, 3.2, 2.4, pantsO);
        // 5. form, painted only where cloth already is
        oc.globalCompositeOperation = "source-atop";
        oc.save();
        oc.translate(bodyDx * bf, bodyDy);
        var seatP = PJ([-fHp[0] * 0.40, -0.30, -fHp[2] * 0.40]);
        var seatG = oc.createRadialGradient(seatP[0] + 0.8 * bf, seatP[1] - 2.6, 1, seatP[0], seatP[1], 14);
        seatG.addColorStop(0, "rgba(255,255,255,0.16)");
        seatG.addColorStop(0.55, "rgba(255,255,255,0)");
        oc.fillStyle = seatG;
        oc.fillRect(-20, bWaist - 1, 40, 18);
        var seatSh = oc.createRadialGradient(seatP[0], seatP[1], 7, seatP[0], seatP[1], 15);
        seatSh.addColorStop(0, "rgba(0,0,0,0)");
        seatSh.addColorStop(1, "rgba(0,0,0,0.16)");
        oc.fillStyle = seatSh;
        oc.fillRect(-20, bWaist - 1, 40, 18);
        var hipSh = oc.createLinearGradient(0, bWaist, 0, bWaist + 8);
        hipSh.addColorStop(0, "rgba(0,0,0,0.28)"); // jersey hem falling on the pants
        hipSh.addColorStop(1, "rgba(0,0,0,0)");
        oc.fillStyle = hipSh;
        oc.fillRect(-20, bWaist, 40, 9);
        var crP = PJ([fHp[0] * 0.12, -0.74, fHp[2] * 0.12]);
        var crotchG = oc.createRadialGradient(crP[0], crP[1], 0, crP[0], crP[1] - 0.5, 7.5);
        crotchG.addColorStop(0, "rgba(0,0,0,0.34)");
        crotchG.addColorStop(1, "rgba(0,0,0,0)");
        oc.fillStyle = crotchG;
        oc.fillRect(crP[0] - 9, crP[1] - 8, 18, 14);
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
        pantStripe(hipBx + 3 * bf, hipBy, bKx + 2.5 * bf, bKy, bFx + 2 * bf, bFy - 2);
        // ── everything from the hips up rides the weight shift ──
        ctx.save();
        ctx.translate(bodyDx * bf, bodyDy);
        /* ── UPPER BODY + SWING: a small 3-D rig, projected ─────────────────
           The torso, both shoulders, both arms and the bat live in real 3-D
           feet around the hitter's spine and are projected through the same
           camera as the field: sideways is sideways, height is height, and
           depth (toward the mound) shows as height from this raised lens.
           Because nothing is keyed in screen space any more, the shoulders
           can't drift apart, the arms can't fold through the helmet, and at
           the finish the arms really are on the far side of his head.
    
           X = away from the plate (mirrored by bf), Y = up from the belt,
           Z = toward the pitcher. yaw is how far his chest has turned from
           the plate toward the mound. Hands are keyed in his BODY frame
           (toward the front shoulder / up / out in front of the chest), so
           they turn with him. The bat is keyed by compass direction and
           elevation, one continuous turn; at contact it is aimed from the
           hands at this pitch. Elbows come from 3-D two-bone IK with pole
           directions, again in the body frame. Everything is then drawn back
           to front by its real depth. ── */
        var swT = 0, isCheck = false;
        if (pitch && pitch.swing) {
            swT = prog > 1 ? 1 : Math.max(0, Math.min(1, (easedG - 0.72) / 0.24));
        }
        else if (pitch && pitch.check) {
            isCheck = true;
            var peak = pitch.went ? 0.60 : 0.30; // went: barrel past the front of the plate (contact key is 0.50); held: stops short
            var cRaw = Math.max(0, Math.min(1, (easedG - 0.76) / 0.14));
            swT = peak * (cRaw * cRaw * (3 - 2 * cRaw));
            if (prog > 1 && !pitch.went)
                swT = peak * (1 - Math.min((prog - 1) / 0.35, 1) * 0.85);
        }
        // the rebuilt clock above drives what's drawn (contact is unchanged)
        if (pitch && pitch.swing)
            swT = swingU(prog);
        else if (pitch)
            swT = Math.max(swT, loadU(prog));
        var S3 = 16.8, DEP3 = 0.6, SH3 = 1.37, BAT3 = 2.8, UPA3 = 0.95, FOR3 = 0.92;
        var P3 = function (p) { return [(p[0] - PAR3 * p[2]) * S3 * bf, bWaist - p[1] * S3 - p[2] * S3 * DEP3]; };
        var NEAR3 = function (p) { return 0.57 * p[1] - 0.82 * p[2]; }; // bigger = nearer this camera
        var add3 = function (a, b, k) { k = k == null ? 1 : k; return [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k]; };
        var sub3 = function (a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; };
        var dot3 = function (a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; };
        var len3 = function (a) { return Math.sqrt(dot3(a, a)); };
        var nrm3 = function (a) { var l = len3(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
        var UP3 = [0, 1, 0];
        var frame3 = function (yawDeg, lean) {
            var yy = yawDeg * Math.PI / 180;
            var r = [Math.sin(yy), 0, Math.cos(yy)], f = [-Math.cos(yy), 0, Math.sin(yy)];
            return { r: r, f: f, C: add3([0, SH3, 0], f, lean) };
        };
        var fromBody = function (F, v) { return add3(add3(add3(F.C, F.r, v[0]), UP3, v[1]), F.f, v[2]); };
        var toBody = function (F, p) { var dd = sub3(p, F.C); return [dot3(dd, F.r), dd[1], dot3(dd, F.f)]; };
        var batDir = function (az, el) {
            var a = az * Math.PI / 180, e = el * Math.PI / 180;
            return [Math.cos(a) * Math.cos(e), Math.sin(e), Math.sin(a) * Math.cos(e)];
        };
        // keys: stance, load, slot, contact, extension, pull side, finish
        var KEY = {
            yaw: RIG_YAW,
            lean: [0.30, 0.32, 0.36, 0.30, 0.22, 0.15, 0.10],
            roll: [-0.04, -0.02, 0.08, 0.18, 0.10, 0.03, -0.04], // + = front shoulder higher
            hands: [[-0.42, 0.06, 0.26], [-0.55, 0.10, 0.18], [-0.24, -0.50, 0.50], null,
                [0.25, -0.30, 1.15], [0.55, 0.05, 0.85], [0.70, 0.25, 0.30]],
            az: [-55, -65, -95, null, -265, -360, -535], // compass of the barrel: -90 = at the catcher
            el: [52, 38, -10, null, 8, 20, -8],
            pR: [[-0.6, 0.25, -0.5], [-0.6, 0.25, -0.5], [-0.2, -1, 0], [-0.1, -1, 0.1], [0, -1, 0], [0, -1, 0.3], [0, -1, 0.5]],
            pL: [[0.3, -1, 0.3], [0.3, -1, 0.3], [0.2, -1, 0.4], [0.1, -1, 0.2], [0, -1, 0], [0.4, -0.6, 0.2], [0.6, 0.4, 0.3]]
        };
        // contact: aim the bat from the hands at where THIS pitch crosses
        var Fc = frame3(KEY.yaw[3], KEY.lean[3]);
        var ball3 = [-2.6, -1.0, 0.8];
        if (pitch && (pitch.swing || pitch.check)) {
            var aimFx = pitch.check ? 0 : pitch.fx, aimFy = pitch.check ? 0 : pitch.fy;
            var bxs = (W / 2 + (aimFx / 17) * 28 - bCx) - bodyDx * bf, bys = zoneY(aimFy) - bodyDy;
            ball3 = [bxs / (S3 * bf) + PAR3 * 0.8, (bWaist - bys - 0.8 * S3 * DEP3) / S3, 0.8];
        }
        var dirC = nrm3(sub3(ball3, fromBody(Fc, [0.05, -0.75, 0.75])));
        KEY.hands[3] = toBody(Fc, add3(ball3, dirC, -2.05));
        var azC = Math.atan2(dirC[2], dirC[0]) * 180 / Math.PI;
        while (azC > -90)
            azC -= 360;
        while (azC < -270)
            azC += 360;
        KEY.az[3] = Math.max(-250, Math.min(-110, azC));
        KEY.el[3] = Math.max(-45, Math.min(25, Math.asin(dirC[1]) * 180 / Math.PI));
        var rig = function (u, rb) {
            var ch = function (arr) { var v = pchip(RIG_T, arr, u); return rb ? lerp(v, arr[0], rb) : v; };
            var ch3 = function (arr) { return [0, 1, 2].map(function (i) { return ch(arr.map(function (v) { return v[i]; })); }); };
            var F = frame3(ch(KEY.yaw), ch(KEY.lean));
            var roll = ch(KEY.roll);
            var L = add3(add3(F.C, F.r, 0.62), UP3, roll), R = add3(add3(F.C, F.r, -0.62), UP3, -roll);
            var G = fromBody(F, ch3(KEY.hands));
            var dv = batDir(ch(KEY.az), ch(KEY.el));
            // if a key asks for more reach than his arms have, bring the grip in
            // rather than letting a hand come off the handle
            [[L, -0.12], [R, 0.13]].forEach(function (sa) {
                var hand = add3(G, dv, sa[1]), dd = sub3(hand, sa[0]), dl = len3(dd), reach = UPA3 + FOR3 - 0.03;
                if (dl > reach)
                    G = add3(G, dd, -(dl - reach) / dl);
            });
            var pole = function (v) { return nrm3(add3(add3(F.r.map(function (c) { return c * v[0]; }), UP3, v[1]), F.f, v[2])); };
            return { F: F, L: L, R: R, G: G, d: dv, poleL: pole(ch3(KEY.pL)), poleR: pole(ch3(KEY.pR)), hipYaw: ch(RIG_HIP),
                bot: add3(G, dv, -0.12), top: add3(G, dv, 0.13), knob: add3(G, dv, -0.30), tip: add3(G, dv, BAT3 - 0.30) };
        };
        var ik3 = function (S0, Hh, pole) {
            var dv = sub3(Hh, S0), dl = len3(dv) || 1e-3, u = [dv[0] / dl, dv[1] / dl, dv[2] / dl];
            var dc = Math.min(dl, UPA3 + FOR3 - 0.02);
            var a = (UPA3 * UPA3 - FOR3 * FOR3 + dc * dc) / (2 * dc), hh = Math.sqrt(Math.max(0, UPA3 * UPA3 - a * a));
            var pd = dot3(pole, u), q = [pole[0] - pd * u[0], pole[1] - pd * u[1], pole[2] - pd * u[2]], ql = len3(q);
            if (ql < 1e-4) {
                q = [0, -1, 0];
                ql = 1;
            }
            return add3(add3(S0, u, a), q, hh / ql);
        };
        var RG = rig(swT, rbChk);
        var F3 = RG.F, sinY = F3.r[0], cosY = F3.r[2];
        var eL = ik3(RG.L, RG.bot, RG.poleL), eR = ik3(RG.R, RG.top, RG.poleR);
        var pL = P3(RG.L), pR = P3(RG.R), pEL = P3(eL), pER = P3(eR), pBot = P3(RG.bot), pTop = P3(RG.top);
        var headC = add3(add3(F3.C, UP3, 0.83), F3.f, 0.06), pHead = P3(headC);
        var neckB = add3(F3.C, UP3, 0.22);
        // torso silhouette: convex hull of projected rings at the shoulders,
        // the rib cage and the belt, the trapezius into the neck, and both
        // shoulder caps — a real torso seen from wherever he's turned to
        var hullPts = [];
        var ring3 = function (c, ax1, r1, ax2, r2, n, tiltUp) {
            for (var i = 0; i < n; i++) {
                var th = i / n * Math.PI * 2, ct = Math.cos(th), st = Math.sin(th);
                var p = add3(add3(c, ax1, r1 * ct), ax2, r2 * st);
                if (tiltUp)
                    p = add3(p, UP3, tiltUp * ct);
                hullPts.push(P3(p));
            }
        };
        var rollNow = lerp(pchip(RIG_T, KEY.roll, swT), KEY.roll[0], rbChk);
        ring3(add3(F3.C, UP3, 0.04), F3.r, 0.74, F3.f, 0.36, 22, rollNow);
        ring3(add3(add3(F3.C, UP3, -0.58), F3.f, -0.06), F3.r, 0.64, F3.f, 0.42, 22, 0);
        var hy3 = RG.hipYaw * Math.PI / 180, rH = [Math.sin(hy3), 0, Math.cos(hy3)], fH = [-Math.cos(hy3), 0, Math.sin(hy3)];
        ring3([0, 0.06, 0], rH, 0.66, fH, 0.42, 18, 0);
        ring3(add3(F3.C, UP3, 0.26), F3.r, 0.21, F3.f, 0.19, 12, 0);
        [pL, pR].forEach(function (pp) {
            for (var i = 0; i < 12; i++) {
                var th = i / 12 * Math.PI * 2;
                hullPts.push([pp[0] + Math.cos(th) * 3.6, pp[1] + Math.sin(th) * 3.6]);
            }
        });
        hullPts.sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; });
        var crs = function (o, p, q) { return (p[0] - o[0]) * (q[1] - o[1]) - (p[1] - o[1]) * (q[0] - o[0]); };
        var lo = [], up = [];
        hullPts.forEach(function (p) { while (lo.length >= 2 && crs(lo[lo.length - 2], lo[lo.length - 1], p) <= 0)
            lo.pop(); lo.push(p); });
        for (var hi = hullPts.length - 1; hi >= 0; hi--) {
            var hp = hullPts[hi];
            while (up.length >= 2 && crs(up[up.length - 2], up[up.length - 1], hp) <= 0)
                up.pop();
            up.push(hp);
        }
        lo.pop();
        up.pop();
        var torsoHull = lo.concat(up);
        var torsoPath = function (c) {
            c.beginPath();
            torsoHull.forEach(function (p, k) { if (k)
                c.lineTo(p[0], p[1]);
            else
                c.moveTo(p[0], p[1]); });
            c.closePath();
        };
        /* Jersey, sleeves and forearms: one offscreen piece, as before. Every
           jersey part is outlined first so only the union's outer edge keeps a
           seam line, then the parts are filled back to front by depth. */
        var dJB = dprOf() * NEAR_S, JBW = 96, JBH = 80, JBY = bHead - 14;
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
        var jc = JB_CACHE.getContext("2d");
        jc.setTransform(1, 0, 0, 1, 0, 0);
        jc.clearRect(0, 0, JB_CACHE.width, JB_CACHE.height);
        jc.setTransform(dJB, 0, 0, dJB, JBW / 2 * dJB, -JBY * dJB);
        jc.globalCompositeOperation = "source-over";
        var jerG = jc.createLinearGradient(-14, bShldr - 6, 14, bWaist);
        jerG.addColorStop(0, UB.jL);
        jerG.addColorStop(0.5, UB.jM);
        jerG.addColorStop(1, UB.jD);
        var farJ = shade(UB.jM, -0.26);
        var SLW = 3.4, SLE = 2.7;
        var sleeveOutline = function (a, b) {
            var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L, ny = dx / L;
            jc.beginPath();
            jc.moveTo(a[0] + nx * SLW, a[1] + ny * SLW);
            jc.lineTo(b[0] + nx * SLE, b[1] + ny * SLE);
            jc.lineTo(b[0] - nx * SLE, b[1] - ny * SLE);
            jc.lineTo(a[0] - nx * SLW, a[1] - ny * SLW);
            jc.closePath();
            jc.stroke();
            jc.beginPath();
            jc.arc(a[0], a[1], SLW, 0, Math.PI * 2);
            jc.stroke();
            jc.beginPath();
            jc.arc(b[0], b[1], SLE, 0, Math.PI * 2);
            jc.stroke();
        };
        jc.strokeStyle = UB.seam;
        jc.lineWidth = 2.0;
        jc.lineJoin = "round";
        torsoPath(jc);
        jc.stroke();
        sleeveOutline(pL, pEL);
        sleeveOutline(pR, pER);
        var nTorso = NEAR3(add3(F3.C, UP3, -0.4));
        var drawTorso = function () {
            torsoPath(jc);
            jc.fillStyle = jerG;
            jc.fill();
            jc.save();
            torsoPath(jc);
            jc.clip();
            // the side turned away from the lights falls into shade
            var sdX = P3(add3(F3.C, F3.f, 0.4))[0], sbX = P3(add3(F3.C, F3.f, -0.4))[0];
            var sg = jc.createLinearGradient(sbX, 0, sdX, 0);
            sg.addColorStop(0, "rgba(0,0,0,0)");
            sg.addColorStop(1, "rgba(0,0,0,0.22)");
            jc.fillStyle = sg;
            jc.fillRect(-JBW / 2, JBY, JBW, JBH);
            // number on his back, laid onto the back plane: edge-on in the
            // stance, square to us once he has turned through
            var backVis = Math.max(0, sinY);
            if (backVis > 0.25) {
                var nb = P3(add3(add3(F3.C, UP3, -0.5), F3.f, -0.42));
                jc.save();
                jc.translate(nb[0], nb[1]);
                jc.transform(sinY, -bf * cosY * DEP3, 0, 1, 0, 0); // reads correctly for both sides of the plate
                jc.scale(0.9, 0.94);
                jc.globalAlpha = 0.5 * sstep(0.25, 0.6, backVis);
                jc.fillStyle = UB.num;
                jc.font = "700 15px " + FU;
                jc.textAlign = "center";
                jc.textBaseline = "middle";
                jc.fillText("27", 0, 0);
                jc.restore();
            }
            jc.restore();
            // belt across the projected waist, and the collar at the neck
            var wx = torsoHull.reduce(function (m, p) { return p[1] > bWaist - 4 ? [Math.min(m[0], p[0]), Math.max(m[1], p[0])] : m; }, [1e9, -1e9]);
            if (wx[0] < wx[1]) {
                jc.fillStyle = UB.belt;
                jc.fillRect(wx[0] + 0.5, bWaist - 0.4, wx[1] - wx[0] - 1, 3.4);
                jc.fillStyle = "rgba(200,215,245,0.20)";
                jc.fillRect(wx[0] + 0.5, bWaist - 0.4, wx[1] - wx[0] - 1, 0.9);
            }
            var pN = P3(neckB);
            jc.fillStyle = UB.jD;
            jc.beginPath();
            jc.ellipse(pN[0], pN[1] + 1.2, 4.6, 2.2, 0, 0, Math.PI * 2);
            jc.fill();
        };
        var drawSleeve = function (a, b, far) { limbOn(jc, a[0], a[1], b[0], b[1], SLW, SLE, far ? farJ : jerG); };
        var drawForearm = function (a, b, far) {
            limbOn(jc, a[0], a[1], b[0], b[1], 2.4, 1.8, far ? shade(UB.skin, -0.22) : UB.skin);
            var dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
            jc.strokeStyle = UB.trim;
            jc.globalAlpha = 0.7;
            jc.lineWidth = 1.2;
            jc.lineCap = "butt";
            jc.beginPath();
            jc.moveTo(a[0] + ux * 1.2 - uy * 2.8, a[1] + uy * 1.2 + ux * 2.8);
            jc.lineTo(a[0] + ux * 1.2 + uy * 2.8, a[1] + uy * 1.2 - ux * 2.8);
            jc.stroke();
            jc.globalAlpha = 1;
        };
        var mid3 = function (a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]; };
        var parts = [
            { n: nTorso, f: drawTorso },
            { n: NEAR3(mid3(RG.L, eL)), f: function () { drawSleeve(pL, pEL, NEAR3(mid3(RG.L, eL)) < nTorso); } },
            { n: NEAR3(mid3(RG.R, eR)), f: function () { drawSleeve(pR, pER, NEAR3(mid3(RG.R, eR)) < nTorso); } },
            { n: NEAR3(mid3(eL, RG.bot)) + 0.001, f: function () { drawForearm(pEL, pBot, NEAR3(mid3(eL, RG.bot)) < nTorso); } },
            { n: NEAR3(mid3(eR, RG.top)) + 0.001, f: function () { drawForearm(pER, pTop, NEAR3(mid3(eR, RG.top)) < nTorso); } }
        ];
        parts.sort(function (a, b) { return a.n - b.n; }).forEach(function (p) { p.f(); });
        // ── head: neck and helmet at his projected head position ──
        var drawHead = function () {
            var pN = P3(neckB);
            ctx.fillStyle = shade(UB.skin, -0.3); // the back of the neck, in the helmet's shadow
            ctx.beginPath();
            ctx.moveTo(pHead[0] - 2.1, pHead[1] + 4.5);
            ctx.lineTo(pHead[0] + 2.1, pHead[1] + 4.5);
            ctx.lineTo(pN[0] + 3.0, pN[1] + 1.5);
            ctx.lineTo(pN[0] - 3.0, pN[1] + 1.5);
            ctx.closePath();
            ctx.fill();
            ctx.save();
            ctx.translate(pHead[0], pHead[1] - bHead);
            // Helmet — one-piece glossy shell with molded earflap
            ctx.save();
            ctx.scale(bf, 1);
            // helmet drawn at 0.72 about its own centre: real helmet size on a 6-ft hitter
            ctx.translate(0, bHead);
            ctx.scale(0.72, 0.72);
            ctx.translate(0, -bHead);
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
            ctx.restore();
        };
        // ── the bat, its whip blur, and the batting gloves ──
        var drawBat = function () {
            if (!isCheck && pitch && pitch.swing && prog > 0.74 && prog < 1.02) {
                ctx.lineCap = "round";
                for (var gi = 1; gi <= 4; gi++) {
                    var gr = rig(swingU(prog - gi * 0.007)), ga = P3(gr.G), gt = P3(gr.tip);
                    ctx.strokeStyle = "rgba(224,186,124," + (0.22 - gi * 0.045).toFixed(3) + ")";
                    ctx.lineWidth = 5.4 - gi * 0.4;
                    ctx.beginPath();
                    ctx.moveTo(ga[0], ga[1]);
                    ctx.lineTo(gt[0], gt[1]);
                    ctx.stroke();
                }
            }
            var kn = P3(RG.knob), tp = P3(RG.tip), bm = P3(add3(RG.G, RG.d, 0.9));
            var batG = ctx.createLinearGradient(kn[0], kn[1], tp[0], tp[1]);
            batG.addColorStop(0, "#8E6229");
            batG.addColorStop(0.5, "#B98643");
            batG.addColorStop(1, "#E0BC7E");
            ctx.strokeStyle = batG;
            ctx.lineCap = "round";
            ctx.lineWidth = 2.8;
            ctx.beginPath();
            ctx.moveTo(kn[0], kn[1]);
            ctx.lineTo(bm[0], bm[1]);
            ctx.stroke();
            ctx.lineWidth = 6.2;
            ctx.beginPath();
            ctx.moveTo(bm[0], bm[1]);
            ctx.lineTo(tp[0], tp[1]);
            ctx.stroke();
            ctx.strokeStyle = "rgba(255,244,212,0.5)";
            ctx.lineWidth = 1.2;
            var s1 = P3(add3(RG.G, RG.d, 1.5)), s2 = P3(add3(RG.G, RG.d, 2.4));
            ctx.beginPath();
            ctx.moveTo(s1[0], s1[1] - 1.2);
            ctx.lineTo(s2[0], s2[1] - 1.2);
            ctx.stroke();
            ctx.fillStyle = "#7C5222";
            ctx.beginPath();
            ctx.arc(kn[0], kn[1], 2.5, 0, Math.PI * 2);
            ctx.fill();
        };
        var drawGloves = function () {
            ctx.fillStyle = "#EDEFF5";
            ctx.strokeStyle = "rgba(56,66,98,0.55)";
            ctx.lineWidth = 0.8;
            [[pBot, 3.2], [pTop, 3.4]].forEach(function (g3) {
                ctx.beginPath();
                ctx.arc(g3[0][0], g3[0][1], g3[1], 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });
        };
        // body, head, bat and hands — back to front
        var order = [
            { n: nTorso, f: function () { ctx.drawImage(JB_CACHE, -JBW / 2, JBY, JBW, JBH); } },
            { n: NEAR3(headC), f: drawHead },
            { n: NEAR3(add3(RG.G, RG.d, 1.1)), f: drawBat },
            { n: NEAR3(RG.G) + 0.02, f: drawGloves }
        ];
        order.sort(function (a, b) { return a.n - b.n; }).forEach(function (o) { o.f(); });
        ctx.restore(); // hips-up weight shift
        ctx.restore(); // batter origin
        /* ── CATCHER — tracks the incoming pitch with the mitt ── */
        var gTx = null, gTyW = null;
        if (pitch) {
            gTx = W / 2 + (pitch.fx / 17) * 28;
            gTyW = zoneY(pitch.fy);
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
        castShadows(W / 2 + shiftX, catY + 22, 3.6, 12, 0.07, NEAR_S);
        ctx.save();
        ctx.translate(W / 2 + shiftX, catY - lift);
        var lyT = lyTw - (catY - lift);
        var mx = lerp(-19, lxT - shiftX, eff); // rests on his left knee, then gives a target
        var my = lerp(-4, lyT, eff);
        // ── contact shadow under the crouch ──
        var csG = ctx.createRadialGradient(0, 23 + lift, 2, 0, 23 + lift, 34);
        csG.addColorStop(0, "rgba(0,0,0,0.44)");
        csG.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = csG;
        ctx.beginPath();
        ctx.ellipse(0, 23 + lift, 34, 7.5, 0, 0, Math.PI * 2);
        ctx.fill();
        /* Seen from behind in his crouch: the backs of his cleats, socks and
           guard straps, the shin-guard shells flaring past his knees, his seat,
           a jersey back crossed by the chest-protector harness, and the shell
           of a hockey-style helmet. The mitt shows its back — the pocket faces
           the pitcher, not us. */
        var GEAR = UF.gear, GEARL = UF.gearL, GEARD = shade(UF.gear, -0.45);
        // shin-guard shells flaring out past the knees
        [-1, 1].forEach(function (s) {
            var sgG = ctx.createLinearGradient(s * 13, -2, s * 24, 16);
            sgG.addColorStop(0, GEARL);
            sgG.addColorStop(0.55, GEAR);
            sgG.addColorStop(1, GEARD);
            ctx.fillStyle = sgG;
            ctx.beginPath();
            ctx.moveTo(s * 12, -1);
            ctx.bezierCurveTo(s * 20, -4, s * 25, 1, s * 24.5, 7);
            ctx.bezierCurveTo(s * 24, 12, s * 21.5, 17, s * 18, 19.5);
            ctx.lineTo(s * 12, 18);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "rgba(0,0,0,0.35)";
            ctx.lineWidth = 0.9; // knee-cap hinge
            ctx.beginPath();
            ctx.moveTo(s * 17, 3.5);
            ctx.quadraticCurveTo(s * 21.5, 4.5, s * 24.3, 6.5);
            ctx.stroke();
            ctx.strokeStyle = "rgba(220,232,255,0.22)";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(s * 14, -1.5);
            ctx.bezierCurveTo(s * 20, -3.6, s * 24, 1, s * 24, 5);
            ctx.stroke();
        });
        // knee savers, calves in the team socks, guard straps
        [-1, 1].forEach(function (s) {
            ctx.fillStyle = "#16181D";
            ctx.beginPath();
            ctx.ellipse(s * 12.5, 4, 5.5, 3.6, s * 0.25, 0, Math.PI * 2);
            ctx.fill();
            var cfG = ctx.createLinearGradient(s * 8, 4, s * 18, 18);
            cfG.addColorStop(0, shade(UF.jD, 0.12));
            cfG.addColorStop(1, shade(UF.jD, -0.35));
            ctx.fillStyle = cfG;
            ctx.beginPath();
            ctx.moveTo(s * 8, 6);
            ctx.bezierCurveTo(s * 11, 3.5, s * 17.5, 4.5, s * 18.5, 9);
            ctx.bezierCurveTo(s * 19, 13, s * 17.5, 17, s * 15.5, 18.5);
            ctx.lineTo(s * 9.5, 18.5);
            ctx.bezierCurveTo(s * 8, 14, s * 7.5, 9, s * 8, 6);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "#101114";
            ctx.lineWidth = 1.5;
            [9.5, 14].forEach(function (yy) {
                ctx.beginPath();
                ctx.moveTo(s * 8.2, yy);
                ctx.quadraticCurveTo(s * 13.5, yy + 1.4, s * 18.8, yy - 0.6);
                ctx.stroke();
            });
        });
        // cleats, up on the balls of his feet: heels and soles toward us
        [-1, 1].forEach(function (s) {
            ctx.save();
            ctx.translate(s * 13.5, 20.5);
            ctx.rotate(s * 0.18);
            var shG = ctx.createLinearGradient(0, -3, 0, 4);
            shG.addColorStop(0, "#2A2D34");
            shG.addColorStop(1, "#0B0C0F");
            ctx.fillStyle = shG;
            ctx.beginPath();
            ctx.ellipse(0, 0, 5.4, 3.4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "rgba(210,214,222,0.5)";
            ctx.fillRect(-4.2, 2.0, 8.4, 1.1);
            ctx.restore();
        });
        // his seat, resting down on his heels
        var ptG = ctx.createRadialGradient(-5, 2, 2, 0, 7, 21);
        ptG.addColorStop(0, UF.pL);
        ptG.addColorStop(0.6, UF.pM);
        ptG.addColorStop(1, UF.pD);
        ctx.fillStyle = ptG;
        ctx.beginPath();
        ctx.moveTo(-14.5, -2);
        ctx.bezierCurveTo(-19.5, 2, -19, 12, -12, 15.5);
        ctx.bezierCurveTo(-6, 18, 6, 18, 12, 15.5);
        ctx.bezierCurveTo(19, 12, 19.5, 2, 14.5, -2);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = shade(UF.pM, -0.4);
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(0.5, 9, 0, 16.5);
        ctx.stroke();
        ctx.globalAlpha = 1;
        var fold = ctx.createLinearGradient(0, -2, 0, 5);
        fold.addColorStop(0, "rgba(0,0,0,0.32)");
        fold.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = fold;
        ctx.fillRect(-16, -2, 32, 7);
        // jersey back, leaning in over the plate
        var bkG = ctx.createLinearGradient(0, -27, 0, 0);
        bkG.addColorStop(0, UF.jL);
        bkG.addColorStop(0.45, UF.jM);
        bkG.addColorStop(1, UF.jD);
        ctx.fillStyle = bkG;
        ctx.beginPath();
        ctx.moveTo(-14, 0);
        ctx.bezierCurveTo(-17, -8, -21.5, -16, -20.5, -22);
        ctx.quadraticCurveTo(-19.5, -27.5, -11, -27.5);
        ctx.lineTo(11, -27.5);
        ctx.quadraticCurveTo(19.5, -27.5, 20.5, -22);
        ctx.bezierCurveTo(21.5, -16, 17, -8, 14, 0);
        ctx.closePath();
        ctx.fill();
        var spG = ctx.createLinearGradient(-6, 0, 6, 0); // the valley of the spine
        spG.addColorStop(0, "rgba(0,0,0,0)");
        spG.addColorStop(0.5, "rgba(0,0,0,0.16)");
        spG.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = spG;
        ctx.fillRect(-6, -26, 12, 26);
        ctx.save();
        ctx.globalAlpha = 0.55;
        ctx.fillStyle = UF.num;
        ctx.font = "700 11px " + FU;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("14", 0, -9);
        ctx.restore();
        ctx.textAlign = "left";
        ctx.textBaseline = "alphabetic";
        // chest-protector harness: an X across the back and a waist strap
        ctx.strokeStyle = "#0E0F12";
        ctx.lineWidth = 2.3;
        ctx.lineCap = "butt";
        ctx.beginPath();
        ctx.moveTo(-12, -27);
        ctx.quadraticCurveTo(-2, -15, 12.5, -4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(12, -27);
        ctx.quadraticCurveTo(2, -15, -12.5, -4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-15.5, -12.5);
        ctx.quadraticCurveTo(0, -11, 15.5, -12.5);
        ctx.stroke();
        ctx.fillStyle = "#2B2E36";
        ctx.fillRect(-2.2, -13.6, 4.4, 3.2);
        ctx.strokeStyle = "rgba(210,220,240,0.16)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(-11.5, -27.5);
        ctx.quadraticCurveTo(-2, -16, 12, -5);
        ctx.stroke();
        // protector shoulder caps
        [-1, 1].forEach(function (s) {
            var scG = ctx.createRadialGradient(s * 15, -28, 1, s * 16, -25, 7);
            scG.addColorStop(0, GEARL);
            scG.addColorStop(1, GEARD);
            ctx.fillStyle = scG;
            ctx.beginPath();
            ctx.ellipse(s * 16.5, -25, 6.2, 4.2, s * 0.25, 0, Math.PI * 2);
            ctx.fill();
        });
        // throwing hand tucked down behind the right calf, out of harm's way
        limb(16, -21, 20.5, -8, 3.3, 2.8, UF.jM);
        limb(20.5, -8, 14.5, 6, 2.4, 2.0, shade(UF.jD, -0.15));
        ctx.fillStyle = UF.skin;
        ctx.beginPath();
        ctx.ellipse(14, 7.2, 2.4, 2.0, 0.4, 0, Math.PI * 2);
        ctx.fill();
        // glove arm reaching out to the target (goes behind the helmet)
        var gsX = -15.5, gsY = -21;
        var gL = Math.hypot(mx - gsX, my - gsY) || 1;
        var bend = Math.max(0, 1 - gL / 32) * 7 + 2;
        var elX = (gsX + mx) / 2 - bend * 0.8, elY = (gsY + my) / 2 + bend * 0.6;
        limb(gsX, gsY, elX, elY, 3.3, 2.7, UF.jM);
        limb(elX, elY, mx + 1, my + 5, 2.5, 2.1, shade(UF.jD, -0.15));
        // helmet: collar, mask-cage bars poking out past the shell, the shell
        ctx.fillStyle = shade(UF.jD, -0.2);
        ctx.beginPath();
        ctx.ellipse(0, -27.5, 6.5, 2.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(170,178,190,0.85)";
        ctx.lineWidth = 1.1;
        [-1, 1].forEach(function (s) {
            ctx.beginPath();
            ctx.moveTo(s * 7.2, -39);
            ctx.quadraticCurveTo(s * 10.4, -33, s * 8, -27.5);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(s * 8.3, -34);
            ctx.lineTo(s * 10, -33.2);
            ctx.stroke();
        });
        var hmG = ctx.createRadialGradient(-3.2, -40, 1, 0, -34, 11);
        hmG.addColorStop(0, GEARL);
        hmG.addColorStop(0.5, GEAR);
        hmG.addColorStop(1, GEARD);
        ctx.fillStyle = hmG;
        ctx.beginPath();
        ctx.moveTo(-7.6, -29.5);
        ctx.bezierCurveTo(-9.6, -35, -8.4, -43.2, 0, -43.6);
        ctx.bezierCurveTo(8.4, -43.2, 9.6, -35, 7.6, -29.5);
        ctx.quadraticCurveTo(0, -27, -7.6, -29.5);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.38)";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(-7.2, -33.5);
        ctx.quadraticCurveTo(0, -31.4, 7.2, -33.5);
        ctx.stroke();
        ctx.fillStyle = "#121317";
        ctx.fillRect(-2.6, -32.6, 5.2, 1.6);
        ctx.fillStyle = "rgba(255,255,255,0.30)";
        ctx.beginPath();
        ctx.ellipse(-3, -40.2, 3.2, 1.3, -0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(200,220,255,0.22)";
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.arc(0, -35.5, 7.4, Math.PI * 1.08, Math.PI * 1.55);
        ctx.stroke();
        // the mitt, from the back: the glove gives a touch on the pop
        var pop = (prog > 0.93 && prog < 1.30 && (!pitch || !pitch.swing || pitch.out === "miss"))
            ? Math.max(0, 1 - (prog - 0.93) / 0.37) : 0;
        var mS = 1 + pop * 0.08, myP = my + pop * 1.4;
        ctx.save();
        ctx.translate(mx, myP);
        ctx.scale(mS, mS);
        ctx.rotate(-0.12);
        var mtG = ctx.createRadialGradient(-2.5, -4, 1, 0, 0, 12);
        mtG.addColorStop(0, "#7A4A20");
        mtG.addColorStop(0.55, "#5A3312");
        mtG.addColorStop(1, "#301907");
        ctx.fillStyle = mtG;
        ctx.beginPath();
        ctx.moveTo(-6.5, 8.5);
        ctx.bezierCurveTo(-11, 4, -11, -7, -5.5, -10.5);
        ctx.bezierCurveTo(-1, -13, 6, -12, 9, -6.5);
        ctx.bezierCurveTo(11, -2, 10, 5, 6.5, 8.5);
        ctx.quadraticCurveTo(0, 10.5, -6.5, 8.5);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "rgba(214,170,110,0.55)";
        ctx.lineWidth = 0.9;
        ctx.setLineDash([1.2, 1.3]);
        ctx.beginPath();
        ctx.moveTo(-9.6, 3);
        ctx.bezierCurveTo(-10.4, -6, -5, -11.4, 0.5, -11.6);
        ctx.bezierCurveTo(5.5, -11.6, 9.4, -7, 9.8, -2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(0,0,0,0.22)";
        ctx.beginPath();
        ctx.ellipse(-0.5, 2.5, 5.4, 4.2, -0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#23150A";
        ctx.beginPath();
        ctx.ellipse(-0.8, 7.2, 5.2, 2, -0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(230,200,150,0.35)";
        ctx.fillRect(-2.6, 6.4, 3.2, 1.2);
        ctx.strokeStyle = "rgba(255,226,180,0.30)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(-0.5, -1, 9.4, Math.PI * 1.15, Math.PI * 1.6);
        ctx.stroke();
        ctx.restore();
        // leather dust off the pocket
        if (pop > 0.02) {
            for (var pd = 0; pd < 6; pd++) {
                var pa = -Math.PI * 0.5 + (pd - 2.5) * 0.45, pr = 9 + (1 - pop) * 10;
                ctx.fillStyle = "rgba(210,190,160," + (0.22 * pop).toFixed(3) + ")";
                ctx.beginPath();
                ctx.arc(mx + Math.cos(pa) * pr, myP + Math.sin(pa) * pr * 0.8, 1.1 + (1 - pop) * 1.4, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
        ctx.restore(); // end of the near group
        /* ── BALL (perspective flight; struck balls leave the bat) ── */
        if (pitch && prog > 0) {
            var t6 = Math.min(prog, 1);
            /* Seen from behind the plate a pitch is mostly coming AT you, so it
               has to move through depth, not slide down the screen. sB is how far
               the ball has travelled in real feet (steady speed out of the hand,
               at the plate on CONTACT_P, where the bat and the mitt both meet it);
               eased is where that puts it on screen through the camera: slow and
               small out in front of the pitcher, then growing fast as it arrives.
               The flight window, the endpoint and every other clock are unchanged. */
            var bZ0 = CAM_D + 60.3 + REL3[2], bZ1 = CAM_D; // camera depth at the hand, at the plate
            var sOfP = function (pp) { return Math.min(1, pp / CONTACT_P); };
            var wOfS = function (s) { return s * bZ1 / ((1 - s) * bZ0 + s * bZ1); };
            var sB = sOfP(t6), eased = wOfS(sB);
            var sXb = PREL[0] + pitch.sx * 2; // the pitcher's release hand (his 3-D rig at release)
            var sYb = PREL[1] - 0.4; // the ball sat just above his fingers
            var zoneT = bChest, zoneB = bKnees;
            var zoneCx = W / 2, zoneW2 = 28, zoneH2 = zoneB - zoneT;
            var eXb = zoneCx + NEAR_S * (pitch.fx / 17) * zoneW2;
            var eCYb = (zoneT + zoneB) / 2;
            var eYb = plateY + NEAR_S * (zoneY(pitch.fy) - plateY);
            var contact = pitch.swing && pitch.out !== "miss";
            var ballAlpha = contact
                ? (prog < CONTACT_P ? 1 : 0)
                : (t6 > CONTACT_P ? Math.max(0, 1 - (t6 - CONTACT_P) / (1 - CONTACT_P)) : 1); // in the mitt, then gone
            if (ballAlpha > 0) {
                // The path bows against the break, so the ball starts on one line
                // and breaks late toward where it crosses. Drop = gravity less the
                // pitch's induced rise: a riding fastball barely humps, a curveball
                // climbs and falls off the table. The endpoint never moves.
                var dropIn = 16 - pitch.vB;
                var c1x = sXb + (eXb - sXb) * 0.33 - pitch.hB * 1.0 * NEAR_S, c1y = sYb + (eYb - sYb) * 0.33 - dropIn * 0.9 * NEAR_S;
                var c2x = sXb + (eXb - sXb) * 0.72 - pitch.hB * 2.4 * NEAR_S;
                var c2y = sYb + (eYb - sYb) * 0.72 - dropIn * 1.9 * NEAR_S;
                var bez = function (tt) {
                    var u = 1 - tt;
                    return [
                        u * u * u * sXb + 3 * u * u * tt * c1x + 3 * u * tt * tt * c2x + tt * tt * tt * eXb,
                        u * u * u * sYb + 3 * u * u * tt * c1y + 3 * u * tt * tt * c2y + tt * tt * tt * eYb
                    ];
                };
                var bp = bez(eased), bx = bp[0], by = bp[1];
                // true radius at the plate (1.45 in on a 17-in plate) plus 5% so it reads
                // true size at its real depth (+5%), never smaller than the ball he was holding
                var ballR = Math.max(1.05, 2.39 * 1.05 * NEAR_S * CAM_D / (CAM_D + (bZ0 - bZ1) * (1 - sB)));
                var shadY = lerp(moundY + 10, plateY + 8 * NEAR_S, eased);
                ctx.globalAlpha = ballAlpha;
                ctx.fillStyle = "rgba(0,0,0," + (0.10 + eased * 0.16) + ")";
                ctx.beginPath();
                ctx.ellipse(bx, shadY, ballR * 0.9, ballR * 0.28, 0, 0, Math.PI * 2);
                ctx.fill();
                // broadcast pitch tracer: a hairline in the pitch's colour from the
                // release point to the ball, the way TV pitch tracking draws it
                ctx.save();
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                // the tracer comes up once the ball is clear of him, so nothing trails out of his hand
                ctx.strokeStyle = PCOL[pitch.type];
                ctx.globalAlpha = 0.32 * ballAlpha * sstep(0.18, 0.45, sB);
                ctx.lineWidth = 1.1;
                ctx.beginPath();
                for (var ti = 0; ti <= 24; ti++) {
                    var trp = bez(eased * ti / 24);
                    if (ti)
                        ctx.lineTo(trp[0], trp[1]);
                    else
                        ctx.moveTo(trp[0], trp[1]);
                }
                ctx.stroke();
                ctx.restore();
                // motion blur: the ball smears along its path over a frame
                var tp = bez(wOfS(sOfP(Math.max(0, t6 - 0.03))));
                var strk = ctx.createLinearGradient(tp[0], tp[1], bx, by);
                strk.addColorStop(0, "rgba(245,242,232,0)");
                strk.addColorStop(1, "rgba(245,242,232,0.42)");
                ctx.strokeStyle = strk;
                ctx.lineCap = "round";
                ctx.lineWidth = Math.max(0.8, ballR * 1.5);
                ctx.beginPath();
                ctx.moveTo(tp[0], tp[1]);
                ctx.lineTo(bx, by);
                ctx.stroke();
                ctx.globalAlpha = ballAlpha;
                // a soft specular halo, just enough to read under the lights
                {
                    var blm = ctx.createRadialGradient(bx, by, ballR * 0.8, bx, by, ballR * 2.6);
                    blm.addColorStop(0, "rgba(255,252,240," + (0.10 + eased * 0.08).toFixed(3) + ")");
                    blm.addColorStop(1, "rgba(255,252,240,0)");
                    ctx.fillStyle = blm;
                    ctx.beginPath();
                    ctx.arc(bx, by, ballR * 2.6, 0, Math.PI * 2);
                    ctx.fill();
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
                    var th = sp.tilt + sB * sp.rate * sp.dir;
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
                    var cg = ctx.createRadialGradient(eXb, eYb, 0.5, eXb, eYb, 14 + fl * 6);
                    cg.addColorStop(0, "rgba(255,250,236," + (0.42 * fl).toFixed(3) + ")");
                    cg.addColorStop(1, "rgba(255,240,210,0)");
                    ctx.fillStyle = cg;
                    ctx.beginPath();
                    ctx.arc(eXb, eYb, 14 + fl * 6, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = "rgba(230,220,200," + (0.28 * fl).toFixed(3) + ")";
                    for (var fa = 0; fa < 5; fa++) {
                        var an = fa * 1.26 + 0.4, dr2 = 4 + (1 - fl) * 9;
                        ctx.beginPath();
                        ctx.arc(eXb + Math.cos(an) * dr2, eYb + Math.sin(an) * dr2 * 0.7, 0.9, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.restore();
                }
                /* Off the bat along the same line the overhead wide shot plays it on
                   (sprayOf: this hit's spray angle and what kind of ball it is), at
                   a real batted-ball speed and launch angle, in real time, projected
                   through this camera. The camera sits right behind the plate, so a
                   ball heading for the landing spot in a frame or two was gone
                   before you could see it (a slice foul looked like a swing and a
                   miss). Now it's in view for as long as it would really be: a foul
                   slicing toward the seats, a grounder skipping toward short, a fly
                   climbing out of the top. It leaves from the bat itself, easing out
                   of the near group's scale into the camera's. */
                var sprB = sprayOf(pitch, curBat), sprS = Math.sin(sprB.ang), sprC = Math.cos(sprB.ang);
                var sprL = { ground: [125, -12], single: [145, 11], double: [150, 17], fly: [135, 33], hr: [160, 27], foul: [85, 36] }[sprB.kind] || [140, 15];
                var sprVh = sprL[0] * Math.cos(sprL[1] * Math.PI / 180), sprVv = sprL[0] * Math.sin(sprL[1] * Math.PI / 180); // ft/s along the ground, and up
                var sprH0 = 3, sprC0 = camPt(W, H, 0, 0, sprH0); // bat-on-ball height, ft
                var sprAt = function (tau) {
                    var r = sprVh * tau, h = sprH0 + sprVv * tau - 16 * tau * tau;
                    if (h < 0) { // on the ground: hops that die away
                        var d1 = sprVh * (sprVv + Math.sqrt(sprVv * sprVv + 64 * sprH0)) / 32, hop = r - d1;
                        h = 2.2 * Math.abs(Math.sin(hop / 28 * Math.PI)) * Math.exp(-hop / 40);
                    }
                    var q = camPt(W, H, r * sprS, r * sprC, h), w = sstep(0, 0.12, tau);
                    return [q[0] + (1 - w) * (eXb - sprC0[0]), q[1] + (1 - w) * (eYb - sprC0[1]), r * sprC, w];
                };
                var sprT = og * 0.49; // seconds since contact (the cut comes ~0.39 s in)
                var sprP = sprAt(sprT), obx = sprP[0], oby = sprP[1];
                var oR = Math.max(1.0, 2.5 * NEAR_S * (1 - 0.23 * sprP[3]) * CAM_D / (CAM_D + Math.max(0, sprP[2])));
                var sprG = sprAt(Math.max(0, sprT - 0.035)), gpx = sprG[0], gpy = sprG[1];
                var osG = ctx.createLinearGradient(gpx, gpy, obx, oby);
                osG.addColorStop(0, "rgba(245,242,232,0)");
                osG.addColorStop(1, "rgba(245,242,232,0.45)");
                ctx.strokeStyle = osG;
                ctx.lineCap = "round";
                ctx.lineWidth = Math.max(1, oR * 1.3);
                ctx.beginPath();
                ctx.moveTo(gpx, gpy);
                ctx.lineTo(obx, oby);
                ctx.stroke();
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
        /* ── SPEED GUN: broadcast bug with LED digits. Painted once per pitch
           into a sprite and copied into each frame (see bugSprite). ── */
        if (pitch && prog > 0.35) {
            var gx0 = W - 86, gy0 = 8, gw = 78, gh = 36;
            blitBug(ctx, bugSprite("gun", String(pitch.speed), gx0, gy0, gw, gh, function (ctx) {
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
            }));
        }
        /* ── COUNT: balls-strikes bug in the top-left corner, the speed gun's twin ── */
        if (count) {
            var kx0 = 8, ky0 = 8, kw = 78, kh = 36;
            blitBug(ctx, bugSprite("count", count, kx0, ky0, kw, kh, function (ctx) {
                ctx.fillStyle = "rgba(4,8,14,0.85)";
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(kx0, ky0, kw, kh, 7);
                }
                else {
                    ctx.rect(kx0, ky0, kw, kh);
                }
                ctx.fill();
                ctx.strokeStyle = "rgba(237,239,230,0.22)";
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.fillStyle = "rgba(237,239,230,0.55)";
                ctx.font = "600 8px " + FM;
                ctx.textAlign = "left";
                ctx.fillText("COUNT", kx0 + 9, ky0 + 13);
                ctx.save();
                ctx.shadowColor = "rgba(237,239,230,0.6)";
                ctx.shadowBlur = 8;
                ctx.fillStyle = "#F4F2EA";
                ctx.font = "700 21px " + FM;
                ctx.textAlign = "right";
                ctx.fillText(count, kx0 + kw - 9, ky0 + 29);
                ctx.restore();
                ctx.textAlign = "left";
            }));
        }
        /* ── Broadcast grade: vignette + a touch of lens bloom. It never moves,
           so it's painted once (buildGrade) and copied over the frame pixel
           for pixel. ── */
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(buildGrade(W, H), 0, 0);
        ctx.restore();
        // Redraw only when something on screen changes. The game hands over a
        // fresh (identical) kit object on every render, which used to repaint
        // this still frame 60 times a second while the umpire made the call.
    }, [pitch, prog, wPhase, kit && kit.bat, kit && kit.fld, count]);
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
        ctx.fillStyle = "#070C14";
        ctx.fillRect(0, 0, W, H); // one flat color, top to bottom
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
        bg2.addColorStop(0.55, "#F1EBDD");
        bg2.addColorStop(1, "#B9AD92");
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
        ctx.save();
        ctx.beginPath();
        ctx.arc(bx2, by2, ballPx - 0.6, 0, Math.PI * 2);
        ctx.clip();
        ctx.strokeStyle = "#C42020";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx2 - ballPx * 0.95, by2, ballPx * 0.62, -0.95, 0.95);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(bx2 + ballPx * 0.95, by2, ballPx * 0.62, Math.PI - 0.95, Math.PI + 0.95);
        ctx.stroke();
        ctx.restore();
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
    return (0, jsx_runtime_1.jsx)("canvas", { ref: ref, style: { height: 268, width: "auto", minHeight: 0, flex: "0 1 auto", maxWidth: "100%", maxHeight: "100%", aspectRatio: "230 / 268", display: "block", margin: "0 auto", borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 6px 24px rgba(0,0,0,0.5)" } });
}
/* ═══ OVERHEAD FIELD ═══════════════════════════════════════════════
   On any batted ball the broadcast cuts to the wide shot. Home sits at
   the bottom, the foul lines fan out to the wall, and we watch the ball
   and every runner at once. Geometry is derived from real proportions:
   90ft between bases, the mound 60.5ft out, the outfield deeper to
   center than down the lines. ═══ */
/* One true scale for everything in the wide shot: S is pixels per foot,
   the bases are 90 ft apart (R, home to first) and the fence is the same
   one the broadcast camera sees (wallDist: 400 ft to centre, 328 down the
   lines), sized so both foul poles stay in frame. The diamond used to sit
   on a grid 1.41x too big for the park around it, which made the infield
   look far too large. */
function fieldGeom(W, H) {
    var S = (W / 2 - 8) / (wallDist(Math.PI / 4) * Math.SQRT1_2);
    return { hx: W * 0.5, hy: H * 0.885, S: S, R: 90 * S, Rf: wallDist(Math.PI / 4) * S, Rc: wallDist(0) * S };
}
function wallR(g, a) { return wallDist(a) * g.S; }
function polarPt(g, a, d) { return [g.hx + Math.sin(a) * d, g.hy - Math.cos(a) * d]; }
function baseXY(g, i) {
    var D = g.R * Math.SQRT1_2;
    if (i === 0)
        return [g.hx + D, g.hy - D];
    if (i === 1)
        return [g.hx, g.hy - 2 * D];
    if (i === 2)
        return [g.hx - D, g.hy - D];
    return [g.hx, g.hy];
}
// where each fielder sets up, at real depths (feet from home plate):
// pitcher on the mound, the corners 112, middle infield 147, outfield 292-318
function fielderSpots(g) {
    var F = g.S;
    return [polarPt(g, 0, 58.4 * F), [g.hx, g.hy + 20],
        polarPt(g, 0.62, 112 * F), polarPt(g, 0.30, 147 * F),
        polarPt(g, -0.30, 147 * F), polarPt(g, -0.62, 112 * F),
        polarPt(g, -0.60, 292 * F), polarPt(g, 0.02, 318 * F),
        polarPt(g, 0.60, 292 * F)];
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
// A ball in play that becomes an out is a grounder or a fly ball; the
// per-hit seed decides it, and the engine, the overhead animation and the
// result message all read it from here so they always agree.
function groundOut(p) { return ((p && p.hitSeed != null) ? p.hitSeed : 0.5) < 0.45; }
function frac(x) { return x - Math.floor(x); }
/* ═══ RESOLVING A BALL IN PLAY ═══
   Where every runner ends up — used by the game engine, the overhead
   animation and the result message alike, so the three always agree.
   Every "chance" is read from the per-hit seed (the same one that sets
   the ball's direction and depth), so a given hit always plays out the
   same way. moves: [{ from, to, outAt }] — from -1 is the batter, bases
   0-2, 3 = home (a run); to "out" means retired at base outAt.
     single    runner from 3rd scores; from 2nd scores ~62% (else to 3rd);
               from 1st goes first-to-third ~28% when third is open
     double    runners from 2nd/3rd score; from 1st scores ~42% (else 3rd)
     grounder  ~7% infield hit (batter beats it; forced runners move up).
               Man on first, <2 outs: double play ~50% (6-4-3), otherwise
               force at second with the batter safe. First open: out at
               first, runners hold.
     fly ball  <2 outs: runner on 3rd tags and scores if it's deep enough
               (the depth hitPlan gives it), runner on 2nd tags to 3rd on
               a deep one; otherwise runners hold. */
function resolvePlay(p, bases, outs) {
    var sd = (p && p.hitSeed != null) ? p.hitSeed : 0.5;
    var depth = frac(sd * 7919); // the same depth hitPlan uses
    var rA = frac(sd * 7919 * 29 + 0.31), rB = frac(sd * 7919 * 37 + 0.57);
    var on = [!!bases[0], !!bases[1], !!bases[2]], M = [];
    var add = function (from, to, outAt) { M.push({ from: from, to: to, outAt: outAt }); };
    var forced = function () {
        if (on[1])
            add(1, 2);
        if (on[2])
            add(2, on[1] ? 3 : 2);
    };
    var type = null, nOuts = 0, hit = false;
    if (p.out === "hr") {
        type = "hr";
        hit = true;
        for (var i = 2; i >= 0; i--)
            if (on[i])
                add(i, 3);
        add(-1, 3);
    }
    else if (p.out === "single") {
        type = "single";
        hit = true;
        if (on[2])
            add(2, 3);
        var twoScores = on[1] && rA < 0.62;
        if (on[1])
            add(1, twoScores ? 3 : 2);
        if (on[0])
            add(0, (rB < 0.28 && (!on[1] || twoScores)) ? 2 : 1);
        add(-1, 0);
    }
    else if (p.out === "double") {
        type = "double";
        hit = true;
        if (on[2])
            add(2, 3);
        if (on[1])
            add(1, 3);
        if (on[0])
            add(0, rA < 0.42 ? 3 : 2);
        add(-1, 1);
    }
    else if (p.out === "out") {
        if (groundOut(p)) {
            if (rA < 0.07) { // infield hit
                type = "ihit";
                hit = true;
                if (on[0]) {
                    add(0, 1);
                    if (on[1])
                        add(1, 2);
                    if (on[2])
                        add(2, on[1] ? 3 : 2);
                }
                else {
                    if (on[1])
                        add(1, 1);
                    if (on[2])
                        add(2, 2);
                }
                add(-1, 0);
            }
            else if (on[0]) {
                if (outs < 2 && rB < 0.5) {
                    type = "dp";
                    nOuts = 2;
                    add(0, "out", 1);
                    forced();
                    add(-1, "out", 0);
                }
                else {
                    type = "fc";
                    nOuts = 1;
                    add(0, "out", 1);
                    forced();
                    add(-1, 0);
                }
            }
            else {
                type = "ground";
                nOuts = 1;
                if (on[1])
                    add(1, 1);
                if (on[2])
                    add(2, 2);
                add(-1, "out", 0);
            }
        }
        else {
            type = "fly";
            nOuts = 1;
            var tag = outs < 2, scores3 = tag && on[2] && depth >= 0.28;
            if (on[2])
                add(2, scores3 ? 3 : 2);
            if (scores3)
                type = "sacfly";
            if (on[1])
                add(1, (tag && depth >= 0.6 && (!on[2] || scores3)) ? 2 : 1);
            if (on[0])
                add(0, 0);
            add(-1, "out", -1);
        }
    }
    return { type: type, moves: M, outs: nOuts, hit: hit };
}
/* Where a struck ball goes: its spray angle (radians off the centre line,
   + toward first base), how far it carries in real feet, and what kind of
   ball it is — all read from the per-hit seed. The broadcast camera and the
   overhead wide shot both fly this, so the ball leaves the bat toward the
   same spot it lands in the wide shot. */
function sprayOf(p, bat) {
    var seed = (p && p.hitSeed != null) ? p.hitSeed : 0.5;
    var s2 = (seed * 7919) % 1;
    var pull = bat === "right" ? -1 : 1; // a righty pulls toward left field
    var out = p.out, a, ft, kind, tLand;
    if (out === "foul") {
        kind = "foul";
        a = (seed < 0.35 ? -pull : pull) * (Math.PI / 4 + 0.17 + s2 * 0.28);
        ft = 95 + s2 * 70;
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
            ft = 82 + s2 * 48;
            tLand = 0.26;
        }
        else {
            kind = "fly";
            a = (pull * 0.30 + (seed - 0.72) * 1.2) * (Math.PI / 4);
            ft = 255 + s2 * 70;
            tLand = 0.46;
        }
    }
    else if (out === "single") {
        kind = "single";
        a = (pull * 0.25 + (seed - 0.5) * 1.1) * (Math.PI / 4);
        ft = 215 + s2 * 60;
        tLand = 0.42;
    }
    else {
        kind = "double";
        a = (pull * 0.50 + (seed - 0.5) * 0.6) * (Math.PI / 4);
        ft = 300 + s2 * 70;
        tLand = 0.46;
    }
    if (kind !== "foul")
        a = Math.max(-Math.PI / 4 + 0.04, Math.min(Math.PI / 4 - 0.04, a));
    if (kind === "hr")
        ft = wallDist(a) + 25;
    // Only a home run clears the fence. The wall is much closer down the lines
    // than to center, so a deep pull-side ball has to be pulled back inside it
    // — otherwise the ball (and the fielder chasing it) end up in the seats.
    else if (kind !== "foul")
        ft = Math.min(ft, wallDist(a) - 22);
    return { kind: kind, ang: a, ft: ft, tLand: tLand };
}
function hitPlan(g, p, bat, bases) {
    var sp = sprayOf(p, bat);
    var out = p.out, kind = sp.kind, a = sp.ang, dist = sp.ft * g.S, tLand = sp.tLand;
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
var OV_K = 1; // overhead turf and diamond share one true scale (see fieldGeom)
/* The wide shot, as the blimp sees it: the same surface shader as the
   broadcast camera, looked at straight down — checkerboard turf, the
   plate circle, dirt baselines and the infield arc, foul ground running
   out to the seats, the dugouts, and a seating bowl full of people. */
function buildOverhead(W, H) {
    var key = W + "x" + H + "@" + dprOf();
    if (OFB_CACHE && OFB_KEY === key)
        return OFB_CACHE;
    if (!OFB_JOB || OFB_JOB.key !== key)
        OFB_JOB = overheadJob(W, H, key);
    OFB_JOB.run(Infinity); // finishes whatever the idle-time build hasn't done yet
    return OFB_CACHE;
}
// resumable, exactly like backgroundJob
function overheadJob(W, H, key) {
    var d = dprOf();
    var c = document.createElement("canvas");
    c.width = Math.round(W * d);
    c.height = Math.round(H * d);
    var ctx = c.getContext("2d");
    ctx.scale(d, d);
    var rnd = mulberry32(714232);
    var g = fieldGeom(W, H);
    var FQ = Math.PI / 4;
    var S = g.R / 90; // canvas px per foot
    var poleD = wallR(g, FQ) / S, FOUL_W = 44, BACK_R = 60;
    var PW = c.width, PH = c.height;
    var img = ctx.createImageData(PW, PH), px = img.data, col = [0, 0, 0];
    var homeC = hexRGB(TEAMS[1].jersey);
    var fp = 1 / (S * d), w = Math.max(0.3, fp * 0.8);
    var rayRow = function (j) {
        var z = (g.hy - (j + 0.5) / d) / S;
        for (var i = 0; i < PW; i++) {
            var x = ((i + 0.5) / d - g.hx) / S, o = (j * PW + i) * 4;
            var r0 = Math.sqrt(x * x + z * z), a = Math.atan2(x, z);
            var u = (z + x) * 0.70711, v = (z - x) * 0.70711;
            var grain = hash2(i, j) - 0.5;
            // feet inside the playing surface (negative = up in the seats)
            var fairSD = Math.min((z - Math.abs(x)) * 0.70711 + 1, wallR(g, Math.max(-FQ, Math.min(FQ, a))) / S - r0);
            var foul1 = Math.min(FOUL_W + v, 6 - v, poleD - u, u + 30);
            var foul3 = Math.min(FOUL_W + u, 6 - u, poleD - v, v + 30);
            var edge = Math.max(fairSD, foul1, foul3, BACK_R - r0);
            var R = 0, G = 0, B = 0, fA = sstep(-w, w, edge);
            if (fA < 1) {
                var e = -edge;
                if (e < 3) {
                    if (e > 2.2) {
                        R = 128;
                        G = 132;
                        B = 138;
                    }
                    else {
                        R = 26 + grain * 5;
                        G = 62 + grain * 5;
                        B = 44 + grain * 5;
                    }
                }
                else if (e > 128) {
                    R = 8 + grain * 3;
                    G = 11 + grain * 3;
                    B = 16 + grain * 3;
                }
                else if (e > 112) {
                    var rl = e < 114 ? 1.6 : 1; // roof edge catching the lights
                    R = 24 * rl + grain * 4;
                    G = 28 * rl + grain * 4;
                    B = 34 * rl + grain * 4;
                }
                else {
                    /* Seats run along the stand they sit in: rows parallel to its front
                       edge, seats evenly spaced along it. (They used to be spaced around
                       home plate, which sheared the seats down the lines into streaks.) */
                    var along;
                    if (edge === foul1)
                        along = Math.min(FOUL_W + v, 6 - v) <= Math.min(poleD - u, u + 30) ? u : v;
                    else if (edge === foul3)
                        along = Math.min(FOUL_W + u, 6 - u) <= Math.min(poleD - v, v + 30) ? v : u;
                    else
                        along = a * r0;
                    var SW = 2.3, RH = 3.3; // a touch larger than life so each fan reads
                    var rr = e - 3, rowF = rr / RH, row = Math.floor(rowF), fr = rowF - row;
                    var sF = along / SW, seat = Math.floor(sF), fc = sF - seat;
                    var lit = 0.9 - 0.45 * Math.min(1, rr / 110);
                    if ((((seat % 16) + 16) % 16) === 0) {
                        R = 88;
                        G = 90;
                        B = 94;
                    }
                    else {
                        var hs = hash2(seat * 7 + 3, row * 13 + 5);
                        if (hs > 0.82) {
                            if (fr > 0.2 && fr < 0.8) {
                                R = 30;
                                G = 46;
                                B = 70;
                            }
                            else {
                                R = 15;
                                G = 20;
                                B = 28;
                            }
                        }
                        else {
                            // one fan per seat seen from above: shoulders in a shirt, a head
                            // (mostly hair or a cap) on top. 3x3 samples per pixel give each
                            // fan a clean edge instead of a smear.
                            var sh = hash2(seat, row + 999) < 0.3 ? homeC
                                : CROWD_SHIRTS[Math.floor(hash2(seat + 3, row + 77) * CROWD_SHIRTS.length)];
                            var hc = hash2(seat + 5, row + 3);
                            var hh = hc < 0.14 ? CROWD_SKIN[Math.floor(hc * 35)] : hc < 0.36 ? homeC : hc < 0.58 ? [74, 58, 42] : [30, 26, 24];
                            var ds = fp / SW, dr = fp / RH;
                            R = 0;
                            G = 0;
                            B = 0;
                            for (var sy = -1; sy <= 1; sy++)
                                for (var sx = -1; sx <= 1; sx++) {
                                    var qx = fc + sx * ds / 3 - 0.5, qy = fr + sy * dr / 3 - 0.5;
                                    var cc = qx * qx + (qy + 0.06) * (qy + 0.06) < 0.042 ? hh
                                        : (Math.abs(qy) < 0.35 && Math.abs(qx) < 0.41) ? sh : CROWD_GAP;
                                    R += cc[0];
                                    G += cc[1];
                                    B += cc[2];
                                }
                            R /= 9;
                            G /= 9;
                            B /= 9;
                        }
                    }
                    R = R * lit * 0.8 + 36 * 0.2;
                    G = G * lit * 0.8 + 44 * 0.2;
                    B = B * lit * 0.8 + 58 * 0.2;
                }
            }
            if (fA > 0) {
                // Turf, bases, runners and fielders share one true scale, so the
                // mound, cutouts and baselines sit right under the players.
                fieldShade(x * OV_K, z * OV_K, fp * OV_K, grain, edge, false, col);
                R += (col[0] - R) * fA;
                G += (col[1] - G) * fA;
                B += (col[2] - B) * fA;
            }
            px[o] = R;
            px[o + 1] = G;
            px[o + 2] = B;
            px[o + 3] = 255;
        }
    };
    var finishBuild = function () {
        ctx.putImageData(img, 0, 0);
        var F = function (fx, fz) { return [g.hx + fx * S, g.hy - fz * S]; }; // feet → canvas
        var UV = function (uu, vv) { return F((uu - vv) * 0.70711, (uu + vv) * 0.70711); };
        // dugouts cut into the seats along each line
        [[1, 0], [-1, 0]].forEach(function (sd) {
            var pts = sd[0] > 0
                ? [UV(45, -FOUL_W + 0.5), UV(105, -FOUL_W + 0.5), UV(105, -FOUL_W - 9), UV(45, -FOUL_W - 9)]
                : [UV(-FOUL_W + 0.5, 45), UV(-FOUL_W + 0.5, 105), UV(-FOUL_W - 9, 105), UV(-FOUL_W - 9, 45)];
            ctx.fillStyle = "#0B0F15";
            ctx.beginPath();
            pts.forEach(function (p, k) { if (k)
                ctx.lineTo(p[0], p[1]);
            else
                ctx.moveTo(p[0], p[1]); });
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = "rgba(150,160,172,0.55)";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(pts[0][0], pts[0][1]);
            ctx.lineTo(pts[1][0], pts[1][1]);
            ctx.stroke();
        });
        // chalk: foul lines to the poles, the batter's boxes
        var home = F(0, 0);
        ctx.lineCap = "round";
        [-1, 1].forEach(function (sd) {
            var fpP = polarPt(g, sd * FQ, wallR(g, FQ));
            ctx.strokeStyle = "rgba(240,238,228,0.82)";
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(home[0] + sd * 2.6, home[1] - 2.6);
            ctx.lineTo(fpP[0], fpP[1]);
            ctx.stroke();
            ctx.fillStyle = "rgba(0,0,0,0.4)"; // foul pole and its shadow
            ctx.beginPath();
            ctx.arc(fpP[0] + 1.2, fpP[1] + 1, 1.8, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#F2CC34";
            ctx.beginPath();
            ctx.arc(fpP[0], fpP[1], 1.6, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.strokeStyle = "rgba(240,238,228,0.55)";
        ctx.lineWidth = 0.6;
        [-1, 1].forEach(function (sd) {
            var b0 = F(sd * 1.21, 3), b1 = F(sd * 5.21, -3);
            ctx.strokeRect(Math.min(b0[0], b1[0]), b0[1], Math.abs(b1[0] - b0[0]), b1[1] - b0[1]);
        });
        // bases (drawn a little larger than life so they read), plate, rubber
        [0, 1, 2].forEach(function (i) {
            var b = baseXY(g, i);
            ctx.save();
            ctx.translate(b[0], b[1]);
            ctx.rotate(Math.PI / 4);
            ctx.fillStyle = "rgba(0,0,0,0.35)";
            ctx.fillRect(-1.3, -1.3, 3.8, 3.8);
            ctx.fillStyle = "#F4F2EA";
            ctx.fillRect(-1.9, -1.9, 3.8, 3.8);
            ctx.restore();
        });
        ctx.fillStyle = "#F4F2EA";
        ctx.beginPath();
        ctx.moveTo(g.hx - 1.8, g.hy - 1.8);
        ctx.lineTo(g.hx + 1.8, g.hy - 1.8);
        ctx.lineTo(g.hx + 1.8, g.hy + 0.3);
        ctx.lineTo(g.hx, g.hy + 2);
        ctx.lineTo(g.hx - 1.8, g.hy + 0.3);
        ctx.closePath();
        ctx.fill();
        var rub = F(0, 60.1 / OV_K);
        ctx.fillStyle = "#E6E2DA";
        ctx.fillRect(rub[0] - 1.4, rub[1] - 0.45, 2.8, 0.9);
        // stadium light wash + vignette to match the broadcast view
        var lw = ctx.createRadialGradient(g.hx, g.hy - g.Rc * 0.35, 30, g.hx, g.hy - g.Rc * 0.35, g.Rc * 1.1);
        lw.addColorStop(0, "rgba(255,244,206,0.05)");
        lw.addColorStop(1, "rgba(255,244,206,0)");
        ctx.fillStyle = lw;
        ctx.fillRect(0, 0, W, H);
        var vg = ctx.createRadialGradient(W / 2, H * 0.55, H * 0.30, W / 2, H * 0.55, H * 0.82);
        vg.addColorStop(0, "rgba(0,0,0,0)");
        vg.addColorStop(1, "rgba(2,5,10,0.50)");
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
        OFB_CACHE = c;
        OFB_KEY = key;
    };
    var jNext = 0, jDone = false;
    return { key: key, run: function (ms) {
            var t0 = performance.now();
            while (jNext < PH) {
                rayRow(jNext++);
                if (performance.now() - t0 > ms)
                    break;
            }
            if (jNext >= PH && !jDone) {
                jDone = true;
                finishBuild();
            }
            return jDone;
        } };
}
function FieldView({ pitch, bases, outs, t, bat, kit }) {
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
        var FT = g.R / 90; // px per foot
        spots.forEach(function (sp, i) {
            if (i === 1)
                return; // the catcher stays home
            // the pitcher only fields a comebacker he can get to off the mound,
            // not grounders 40-60 ft away that his infielders are there for
            if (i === 0 && !(plan.kind === "ground" && Math.hypot(sp[0] - plan.target[0], sp[1] - plan.target[1]) < 28 * FT))
                return;
            var dd = Math.hypot(sp[0] - plan.target[0], sp[1] - plan.target[1]);
            if (dd < nd) {
                nd = dd;
                nearest = i;
            }
        });
        // ── ball flight ──
        // A home run carries into the seats and STAYS where it lands. How far
        // past the fence comes from the same per-hit seed as the rest of the
        // play (10-53 ft), so a given hit always lands in the same spot.
        var hrLand = null, hrFt = 0;
        if (plan.kind === "hr") {
            var hsd = (pitch && pitch.hitSeed != null) ? pitch.hitSeed : 0.5;
            var landD = wallR(g, plan.ang) + (0.2 + 0.8 * ((hsd * 7919 * 13) % 1)) * 53 * g.S;
            // deep to centre it can't come down under the call banner at the top
            landD = Math.min(landD, (g.hy - 56) / Math.max(0.2, Math.cos(plan.ang)));
            hrLand = polarPt(g, plan.ang, landD);
            hrFt = Math.round(landD / (g.R / 90)); // 90 ft between bases sets the scale
        }
        var flyTo = hrLand || plan.target;
        var bu = Math.min(1, t / plan.tLand);
        var be = 1 - Math.pow(1 - bu, 2.1); // jumps off the bat, decays
        var bpos = [lerp2(home[0], flyTo[0], be), lerp2(home[1], flyTo[1], be)];
        var airborne = plan.kind === "fly" || plan.kind === "hr" || plan.kind === "double" || plan.kind === "single" || plan.kind === "foul";
        var loft = airborne ? Math.sin(Math.PI * bu) : 0;
        var ballLive = true, ballFade = 1;
        if (plan.kind === "foul") {
            if (t > 0.66)
                ballFade = Math.max(0, 1 - (t - 0.66) / 0.16);
        }
        if (ballFade <= 0)
            ballLive = false;
        // ── fielder converges, then throws ──
        // What happened on this ball: the same resolution the engine applied.
        var RP = resolvePlay(pitch, bases, outs || 0);
        var PT = RP.type || plan.kind; // single double hr ground fc dp ihit fly sacfly foul
        var runsCount = !((outs || 0) + RP.outs >= 3); // runs on a play that ends the inning don't count
        var fpos = spots.map(function (sp) { return sp.slice(); });
        var conv = Math.max(0, Math.min(1, (t - 0.05) / Math.max(0.08, plan.tLand - 0.02)));
        conv = conv * conv * (3 - 2 * conv);
        if (plan.kind !== "hr" && plan.kind !== "foul") {
            fpos[nearest] = [lerp2(spots[nearest][0], plan.target[0], conv),
                lerp2(spots[nearest][1], plan.target[1], conv)];
        }
        /* ── The rest of the defense breaks with the ball. Whoever isn't
           chasing it rotates to a bag: on a force or a double play the middle
           infielder away from the ball takes second and the first baseman his
           bag; on a hit the far middle infielder takes second and the near one
           goes out as the relay man; third gets covered when a runner is
           heading there. They're in position before the throw lands. ── */
        var covU = Math.max(0, Math.min(1, (t - 0.06) / Math.max(0.12, plan.tLand)));
        covU = covU * covU * (3 - 2 * covU);
        var receiver = -1, receiver2 = -1;
        var pick = function (pref, alt) { return pref === nearest ? alt : pref; };
        var assign = [];
        if (PT === "fc" || PT === "dp") {
            receiver = plan.ang < 0 ? pick(3, 4) : pick(4, 3);
            receiver2 = pick(2, 0);
            assign.push([receiver, baseXY(g, 1)]);
            assign.push([receiver2, baseXY(g, 0)]);
        }
        else if (PT === "ground" || PT === "ihit") {
            receiver = pick(2, 0); // first baseman, or the pitcher covering
            assign.push([receiver, baseXY(g, 0)]);
        }
        else if (PT === "single" || PT === "double") {
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
            if (RP.moves.some(function (m) { return m.to === 2 && m.from < 2; }))
                assign.push([pick(5, 0), baseXY(g, 2)]); // somebody is going to third
            assign.push([pick(2, 0), baseXY(g, 0)]);
        }
        else if (PT === "fly") {
            receiver = pick(3, 4);
            assign.push([receiver, baseXY(g, 1)]); // middle infield drifts over on the catch
        }
        else if (PT === "sacfly") {
            receiver = 1; // the catcher takes the throw home
            assign.push([pick(5, 0), baseXY(g, 2)]);
        }
        assign.forEach(function (as) {
            if (as[0] === nearest || as[0] === 1)
                return;
            fpos[as[0]] = [lerp2(spots[as[0]][0], as[1][0], covU),
                lerp2(spots[as[0]][1], as[1][1], covU)];
        });
        // caught / fielded — the ball rides with the fielder afterwards
        var caught = plan.kind !== "hr" && plan.kind !== "foul" && t >= plan.tLand;
        /* Throws, timed against the runners below (a runner covers 90 ft in
           about 1.1 s of play time, PB):
             ground  quick throw to first, beats the batter
             fc      to second for the force, beats the runner from first
             dp      to second, then the pivot man's relay to first — just
                     beats the batter: a real 6-4-3
             ihit    from deep in the hole, a step late at first
             single / double  fielded and thrown in to second after the batter
                     is on his bag
             fly     caught and thrown back in to second
             sacfly  caught, throw home — late behind the runner tagging from third */
        var PB = 1100 / (PLAY_MS[pitch.out] || 2500);
        var thrStart = -1, thrDur = 1, throwTo = null, seg2 = null;
        var L = plan.tLand;
        if (PT === "ground") {
            thrStart = L + 0.03;
            thrDur = 0.10;
            throwTo = baseXY(g, 0);
        }
        else if (PT === "fc") {
            thrStart = L + 0.03;
            thrDur = 0.09;
            throwTo = baseXY(g, 1);
        }
        else if (PT === "dp") {
            thrStart = L + 0.03;
            thrDur = 0.07;
            throwTo = baseXY(g, 1);
            seg2 = { start: L + 0.12, dur: 0.08, from: baseXY(g, 1), to: baseXY(g, 0) };
        }
        else if (PT === "ihit") {
            thrStart = L + 0.08;
            thrDur = 0.22;
            throwTo = baseXY(g, 0);
        }
        else if (PT === "single") {
            thrStart = L + 0.06;
            thrDur = 0.30;
            throwTo = baseXY(g, 1);
        }
        else if (PT === "double") {
            thrStart = L + 0.08;
            thrDur = 0.36;
            throwTo = baseXY(g, 1);
        } // from the gap, via the relay
        else if (PT === "fly") {
            thrStart = L + 0.16;
            thrDur = 0.26;
            throwTo = baseXY(g, 1);
        }
        else if (PT === "sacfly") {
            thrStart = L + 0.10;
            thrDur = 0.42;
            throwTo = home;
        }
        var tArrive = thrStart + thrDur, tArrive2 = seg2 ? seg2.start + seg2.dur : -1;
        var throwT = throwTo ? (t - thrStart) / thrDur : -1;
        if (caught && throwTo && throwT > 0) {
            var tu = Math.min(1, throwT), tfrom = plan.target, tto = throwTo;
            if (seg2 && t > seg2.start) {
                tu = Math.min(1, (t - seg2.start) / seg2.dur);
                tfrom = seg2.from;
                tto = seg2.to;
            }
            bpos = [lerp2(tfrom[0], tto[0], tu), lerp2(tfrom[1], tto[1], tu)];
            loft = Math.sin(Math.PI * tu) * 0.55;
            // the throw line
            ctx.strokeStyle = "rgba(255,255,255,0.16)";
            ctx.lineWidth = 1.2;
            ctx.setLineDash([3, 4]);
            ctx.beginPath();
            ctx.moveTo(tfrom[0], tfrom[1]);
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
            ctx.strokeStyle = plan.kind === "foul" ? "rgba(255,207,61,0.30)" : "rgba(255,255,255,0.26)";
            ctx.lineWidth = 1.1;
            ctx.setLineDash([2, 4]);
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(home[0], home[1]);
            ctx.lineTo(bpos[0], bpos[1]);
            ctx.stroke();
            ctx.setLineDash([]);
        }
        /* ── players from the blimp: shoulders, cap or helmet, legs and
           arms pumping when they run, and a faint shadow off each of the
           four light banks. Drawn a little larger than life so they read. ── */
        var SHD = [[0.72, 0.55], [-0.72, 0.55], [0.6, -0.62], [-0.6, -0.62]];
        var figure = function (x, y, face, jer, pnt, head, run, ph, helmet) {
            SHD.forEach(function (sd) {
                ctx.fillStyle = "rgba(0,0,0,0.12)";
                ctx.beginPath();
                ctx.ellipse(x + sd[0] * 4.4, y + sd[1] * 4.4, 4.2, 1.7, Math.atan2(sd[1], sd[0]), 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.fillStyle = "rgba(0,0,0,0.30)";
            ctx.beginPath();
            ctx.ellipse(x, y + 0.6, 3.2, 2.4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(face);
            var st = Math.sin(ph) * 2.3 * run;
            if (run > 0.01) {
                ctx.fillStyle = pnt;
                ctx.beginPath();
                ctx.ellipse(st, 1.3, 1.9, 1.0, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(-st, -1.3, 1.9, 1.0, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = shade(jer, -0.15);
                ctx.beginPath();
                ctx.ellipse(-st * 0.8, 3.1, 1.5, 0.9, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(st * 0.8, -3.1, 1.5, 0.9, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            var tg = ctx.createLinearGradient(-2.2, -3.4, 2.2, 3.4);
            tg.addColorStop(0, shade(jer, 0.32));
            tg.addColorStop(1, shade(jer, -0.28));
            ctx.fillStyle = tg;
            ctx.beginPath();
            ctx.ellipse(-0.2, 0, 2.0, 3.4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = head;
            ctx.beginPath();
            ctx.arc(0.2, 0, 1.55, 0, Math.PI * 2);
            ctx.fill();
            if (!helmet) {
                ctx.beginPath();
                ctx.ellipse(1.5, 0, 1.0, 1.25, 0, -Math.PI / 2, Math.PI / 2);
                ctx.fill();
            }
            ctx.fillStyle = "rgba(255,255,255," + (helmet ? 0.45 : 0.18) + ")";
            ctx.beginPath();
            ctx.arc(-0.3, -0.5, 0.6, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };
        var ring = function (x, y, c2) {
            ctx.strokeStyle = c2;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.ellipse(x, y + 0.8, 6.8, 5.2, 0, 0, Math.PI * 2);
            ctx.stroke();
        };
        // ── fielders ──
        fpos.forEach(function (sp, i) {
            var moved = Math.hypot(sp[0] - spots[i][0], sp[1] - spots[i][1]);
            var going = moved > 1.2 && (i === nearest ? conv < 0.995 : covU < 0.995);
            var face = Math.atan2(bpos[1] - sp[1], bpos[0] - sp[0]);
            var live = i === nearest || (i === receiver && throwT > 0) || (i === receiver2 && seg2 && t > seg2.start);
            if (live)
                ring(sp[0], sp[1], "rgba(255,207,61,0.75)");
            figure(sp[0], sp[1], face, UF.jM, UF.pM, UF.cap, going ? 1 : 0, t * 70 + i * 1.7, false);
        });
        /* ── runners, in real time ──
           Each runner runs at a runner's pace (PB per 90 ft) from the moment he
           breaks, to the base resolvePlay sent him to:
             hits      all run on contact; a runner going two or three bases
                       runs hard enough to get there before the cut ends; on a
                       single the batter rounds first and comes back; a homer
                       is a trot that still circles the bases in time
             grounders the batter runs through first; the runner from first is
                       forced at second on a force or double play; forced
                       runners move up; runners who aren't forced hold
             fly balls runners drift off and tag back up — or tag and go after
                       the catch (sac fly, or second-to-third on a deep one);
                       with two outs they're off on contact
           Runs that don't count (the play ended the inning) get no flash. */
        var scoreFlash = 0;
        var twoOut = (outs || 0) >= 2;
        var sm = function (x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
        var basePt = function (i) { return (i < 0 || i >= 3) ? home : baseXY(g, i); };
        var along = function (from, b, through) {
            if (through && from < 0 && b > 1) { // running through first, down the line
                var fb = baseXY(g, 0);
                return [fb[0] + (fb[0] - home[0]) * (b - 1), fb[1] + (fb[1] - home[1]) * (b - 1)];
            }
            b = Math.max(-0.2, b);
            var k = Math.max(0, Math.floor(b)), u = b - k, A = basePt(from + k), B = basePt(from + k + 1);
            if (b < 0) {
                A = basePt(from);
                B = basePt(from + 1);
                u = b;
            }
            return [lerp2(A[0], B[0], u), lerp2(A[1], B[1], u)];
        };
        var RUN = RP.type
            ? RP.moves.map(function (m) { var T0 = m.to === "out" ? m.outAt : m.to; return { from: m.from, n: T0 - m.from, out: m.to === "out", batter: m.from < 0 }; })
            : plan.runners.map(function (r) { return { from: r.from, n: r.n || 0, out: false, batter: !!r.batter, tease: r.tease }; });
        var runState = function (r, tt) {
            var run = function (start, lead, pb) { return lead + Math.max(0, tt - start) / pb; };
            if (r.tease)
                return { b: Math.sin(Math.PI * Math.min(tt / 0.5, 1)) * 0.22 }; // foul: a few steps and back
            if (PT === "single" || PT === "double" || PT === "hr") {
                var st = r.batter ? 0.07 : 0.03, ld = r.batter ? 0 : 0.10;
                var pb = PT === "hr" ? 0.77 / 4 : Math.min(PB, (0.92 - st) / Math.max(0.5, r.n - ld));
                var b = Math.min(r.n, run(st, ld, pb)), arr = st + (r.n - ld) * pb;
                if (r.batter && PT === "single" && tt > arr) // rounds first, back to the bag
                    b = 1 + 0.22 * Math.sin(Math.PI * Math.min(1, (tt - arr) / 0.32));
                return { b: b, arr: arr, counts: true };
            }
            if (PT === "ground" || PT === "fc" || PT === "dp" || PT === "ihit") {
                if (r.batter) {
                    var safe = PT === "fc" || PT === "ihit";
                    var hb = run(0.07, 0, PB), bb = Math.min(1, hb);
                    if (hb > 1)
                        bb = 1 + 0.14 * sm((hb - 1) / 0.3) - (safe ? 0.14 * sm((hb - 1.45) / 0.45) : 0);
                    var outT = PT === "dp" ? tArrive2 : tArrive;
                    return { b: bb, through: true, out: !safe && tt >= outT };
                }
                if (r.out)
                    return { b: Math.min(1, run(0.06, 0.10, PB)), out: tt >= tArrive }; // forced out at second
                if (r.n > 0)
                    return { b: Math.min(r.n, run(0.06, 0.10, PB)), arr: 0.06 + (r.n - 0.10) * PB, counts: runsCount };
                return { b: Math.sin(tt * 7) * 0.035 }; // not forced: holds
            }
            if (PT === "fly" || PT === "sacfly") {
                if (r.batter)
                    return { b: Math.min(0.72, run(0.07, 0, PB * 1.25)), through: true, out: tt >= L + 0.02 };
                if (r.n > 0) { // tags up, goes on the catch
                    var tb = Math.min(r.n, run(L + 0.02, 0, 0.40));
                    return { b: tb, arr: L + 0.02 + r.n * 0.40, counts: runsCount };
                }
                if (twoOut)
                    return { b: Math.min(1, run(0.02, 0.10, PB) - Math.max(0, run(L + 0.05, 0, PB))) }; // off on contact; stops at the catch
                var off = 0.10 + 0.18 * sm(tt / (L * 0.8)); // drift off...
                if (tt > L)
                    off = 0.28 * (1 - sm((tt - L) / 0.25)); // ...and tag back up
                return { b: off };
            }
            return { b: Math.sin(tt * 7) * 0.035 };
        };
        RUN.forEach(function (r) {
            var from = r.from, S0 = runState(r, t);
            var pos = along(from, S0.b, S0.through);
            var scored = from + S0.b >= 3 - 1e-6 && S0.arr != null;
            if (scored && S0.counts && t > S0.arr && t < S0.arr + 0.30)
                scoreFlash = Math.max(scoreFlash, 1 - (t - S0.arr) / 0.30);
            if (scored && t > S0.arr + 0.30)
                return; // he's in the dugout
            var retiredNow = !!S0.out;
            var sA = runState(r, t - 0.012), sB = runState(r, t + 0.012);
            var pA = along(from, sA.b, sA.through), pB = along(from, sB.b, sB.through);
            var moving = Math.abs(sB.b - sA.b) > 0.004;
            var rFace = moving ? Math.atan2(pB[1] - pA[1], pB[0] - pA[0]) : Math.atan2(home[1] - pos[1], home[0] - pos[0]);
            if (r.batter && !retiredNow)
                ring(pos[0], pos[1], "rgba(255,207,61,0.8)");
            if (retiredNow)
                figure(pos[0], pos[1], rFace, "#7E8898", "#5A6272", "#4A5262", 0, 0, true);
            else
                figure(pos[0], pos[1], rFace, UB.jM, UB.pM, UB.helM, moving ? 1 : 0, t * 80 + (r.from + 2) * 2.1, true);
            if (retiredNow) {
                ctx.strokeStyle = "#E03B3B";
                ctx.lineWidth = 1.6;
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
            var br = 2.2 + loft * 2.0;
            ctx.fillStyle = "rgba(0,0,0," + (0.30 - loft * 0.16) + ")";
            ctx.beginPath();
            ctx.ellipse(bpos[0], bpos[1] + 2 + loft * 5, br * 0.85, br * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            var glw = ctx.createRadialGradient(bpos[0], bpos[1], 1, bpos[0], bpos[1], br * 2.2);
            glw.addColorStop(0, "rgba(255,250,230,0.14)");
            glw.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glw;
            ctx.beginPath();
            ctx.arc(bpos[0], bpos[1], br * 2.2, 0, Math.PI * 2);
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
        // ── home run: where it came down, and how far ──
        if (hrLand && t > plan.tLand) {
            var hla = Math.min(1, (t - plan.tLand) / 0.08);
            // a ring on the seats where it landed
            ctx.strokeStyle = "rgba(255,207,61," + (0.75 * hla).toFixed(3) + ")";
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.ellipse(hrLand[0], hrLand[1] + 1, 6.5, 4.8, 0, 0, Math.PI * 2);
            ctx.stroke();
            // broadcast-style distance tag, kept on screen and clear of the call banner
            var tagTxt = hrFt + " FT";
            ctx.font = "700 11px " + FM;
            var tw2 = ctx.measureText(tagTxt).width + 12, th2 = 17;
            var right = hrLand[0] + 10 + tw2 < W - 6;
            var tx = right ? hrLand[0] + 10 : hrLand[0] - 10 - tw2;
            var ty = hrLand[1] < 62 ? hrLand[1] + 9 : hrLand[1] - th2 - 7;
            ty = Math.max(50, Math.min(H - 40, ty));
            ctx.save();
            ctx.globalAlpha = hla;
            ctx.strokeStyle = "rgba(255,207,61,0.7)";
            ctx.lineWidth = 0.9; // leader line
            ctx.beginPath();
            ctx.moveTo(hrLand[0] + (right ? 4 : -4), hrLand[1]);
            ctx.lineTo(right ? tx : tx + tw2, ty + th2 / 2);
            ctx.stroke();
            ctx.fillStyle = "rgba(4,8,14,0.86)";
            ctx.beginPath();
            if (ctx.roundRect)
                ctx.roundRect(tx, ty, tw2, th2, 4);
            else
                ctx.rect(tx, ty, tw2, th2);
            ctx.fill();
            ctx.strokeStyle = "rgba(255,207,61,0.55)";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = T.gold;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(tagTxt, tx + tw2 / 2, ty + th2 / 2 + 0.5);
            ctx.restore();
            ctx.textAlign = "left";
            ctx.textBaseline = "alphabetic";
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
        var LBL = { foul: ["FOUL BALL", T.gold], ground: ["OUT AT FIRST", T.strike], fc: ["FORCE OUT AT SECOND", T.strike],
            dp: ["DOUBLE PLAY", T.strike], ihit: ["INFIELD HIT", T.green], fly: ["CAUGHT \u2014 OUT", T.strike],
            sacfly: ["SACRIFICE FLY", T.gold], single: ["BASE HIT", T.green], double: ["DOUBLE", T.green], hr: ["HOME RUN", T.gold] };
        var lb = LBL[PT];
        var lt = PT === "hr" ? 0.30 : PT === "foul" ? 0.55 : PT === "dp" ? tArrive2 + 0.04 : (PT === "ground" || PT === "fc") ? tArrive + 0.04
            : PT === "ihit" ? 0.07 + PB + 0.04 : PT === "fly" ? L + 0.06 : PT === "sacfly" ? L + 0.44 : 0.62;
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
    }, [pitch, t, bases, outs, bat, kit]);
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
    var cols = [], NI = Math.max(INNINGS, gm.line[0].length);
    for (var i = 0; i < NI; i++)
        cols.push(i);
    var cellStyle = function (live) {
        return { textAlign: "center", fontFamily: FM, fontSize: 12, fontWeight: 700,
            padding: "3px 0", color: live ? T.gold : "#C08C1E",
            background: live ? "rgba(255,207,61,0.10)" : "transparent",
            borderRadius: 3, textShadow: live ? "0 0 8px rgba(255,207,61,0.6)" : "none" };
    };
    var head = { textAlign: "center", fontFamily: FM, fontSize: 9, color: T.dim, fontWeight: 700, letterSpacing: 0.5 };
    var grid = { display: "grid", gridTemplateColumns: "48px repeat(" + NI + ",1fr) 7px 26px 24px",
        alignItems: "center", columnGap: 2 };
    return ((0, jsx_runtime_1.jsxs)("div", { style: { width: "100%", padding: "6px 9px 7px", boxSizing: "border-box",
            background: "linear-gradient(180deg,#0A121B,#060C13)", border: "1px solid " + T.line,
            borderRadius: 11, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: grid, children: [(0, jsx_runtime_1.jsx)("div", {}), cols.map(function (i) { return (0, jsx_runtime_1.jsx)("div", { style: head, children: i + 1 }, i); }), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, head, { color: T.muted }), children: "R" }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, head, { color: T.muted }), children: "H" })] }), [0, 1].map(function (ti) {
                var tm = TEAMS[ti];
                var atBat = !final && gm.half === ti;
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
/* ═══ DAILY SHARE CARD — shown on the gauntlet's final screen ═══ */
function DailyShareCard({ calls, stats }) {
    var stS = (0, react_1.useState)(0), streak = stS[0], setStreak = stS[1];
    var msS = (0, react_1.useState)(""), msg = msS[0], setMsg = msS[1];
    (0, react_1.useEffect)(function () {
        var on = true;
        getCareer().then(function (c) { if (on)
            setStreak(c.daily.last === dayKey() ? c.daily.streak : 0); });
        return function () { on = false; };
    }, []);
    var col = function (e) { return e.timedOut ? "#2A3441" : !e.ok ? T.strike : e.m <= 1.2 ? T.gold : T.green; };
    var doShare = function () {
        shareOrCopy(shareText(calls, stats, streak)).then(function (r) {
            setMsg(r === "copied" ? "Copied \u2014 paste it anywhere" : r === "shared" ? "Shared" : r === "failed" ? "Couldn't open sharing on this device" : "");
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: { background: "rgba(4,8,14,0.6)", border: "1px solid " + T.line, borderRadius: 14, padding: "12px 12px 10px", marginBottom: 12 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center", gap: 5, marginBottom: 9 }, children: calls.map(function (e, i) { return (0, jsx_runtime_1.jsx)("div", { title: e.timedOut ? "Too slow" : e.ok ? (e.m <= 1.2 ? "Edge call" : "Correct") : "Missed", style: { width: 26, height: 26, borderRadius: 5, background: col(e), boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.25)" } }, i); }) }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "center", gap: 12, color: T.dim, fontSize: 10, fontFamily: FM, marginBottom: 10 }, children: [(0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.green }, children: "\u25A0" }), " correct"] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.gold }, children: "\u25A0" }), " edge"] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.strike }, children: "\u25A0" }), " missed"] }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("span", { style: { color: "#4A5568" }, children: "\u25A0" }), " too slow"] })] }), streak >= 2 && (0, jsx_runtime_1.jsxs)("div", { style: { color: T.gold, fontFamily: FU, fontWeight: 700, fontSize: 14, letterSpacing: 0.5, marginBottom: 9 }, children: ["\u{1F525}", " ", streak, "-day streak"] }), (0, jsx_runtime_1.jsxs)(Btn, { onClick: doShare, style: { width: "100%", padding: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(180deg,#FFD84F,#E9A70F)", color: "#1C1303", fontSize: 16 }, children: [(0, jsx_runtime_1.jsx)("svg", { width: "15", height: "15", viewBox: "0 0 24 24", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M12 15V3M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6", fill: "none", stroke: "currentColor", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }) }), "Share result"] }), msg && (0, jsx_runtime_1.jsx)("div", { style: { color: T.muted, fontSize: 11, fontFamily: FM, marginTop: 7 }, children: msg })] }));
}
/* ═══ CAREER STATS — lifetime numbers, a zone map of where you get it
   right, and accuracy by pitch type. ═══ */
function CareerStatsModal({ onClose }) {
    var cs = (0, react_1.useState)(null), c = cs[0], setC = cs[1];
    var rsS = (0, react_1.useState)(false), arm = rsS[0], setArm = rsS[1];
    (0, react_1.useEffect)(function () { var on = true; getCareer().then(function (x) { if (on)
        setC(x); }); return function () { on = false; }; }, []);
    (0, react_1.useEffect)(function () {
        var k = function (e) { if (e.key === "Escape")
            onClose(); };
        window.addEventListener("keydown", k);
        return function () { window.removeEventListener("keydown", k); };
    }, [onClose]);
    var pct = function (a) { return a[0] ? Math.round(100 * a[1] / a[0]) + "%" : "\u2014"; };
    var heat = function (a) {
        if (!a[0])
            return "rgba(255,255,255,0.03)";
        var r = a[1] / a[0], t = Math.max(0, Math.min(1, (r - 0.5) / 0.5));
        var h = t * 125;
        return "hsla(" + h + ",70%,45%," + (0.28 + 0.55 * Math.min(1, a[0] / 8)) + ")";
    };
    var reset = function () {
        if (!arm) {
            setArm(true);
            return;
        }
        updateCareer(function (x) { var f = freshCareer(); Object.keys(x).forEach(function (k) { delete x[k]; }); Object.assign(x, f); })
            .then(function (x) { setC(JSON.parse(JSON.stringify(x))); setArm(false); });
    };
    var tile = function (label, val, color) {
        return ((0, jsx_runtime_1.jsxs)("div", { style: { background: "rgba(4,8,14,0.6)", border: "1px solid " + T.line, borderRadius: 10, padding: "8px 4px 7px", textAlign: "center" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: color || T.chalk, fontFamily: FD, fontSize: 24, lineHeight: 1 }, children: val }), (0, jsx_runtime_1.jsx)("div", { style: { color: T.dim, fontSize: 9, fontFamily: FM, letterSpacing: 1.2, marginTop: 4 }, children: label })] }, label));
    };
    var sec = function (t) { return (0, jsx_runtime_1.jsx)("div", { style: { color: T.goldDim, fontSize: 9, fontFamily: FM, letterSpacing: 2.2, margin: "14px 0 7px" }, children: t }); };
    var CW = 44, CH = 40; // zone-map cell size
    return ((0, jsx_runtime_1.jsx)("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.9)", zIndex: 110, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, boxSizing: "border-box" }, onClick: onClose, children: (0, jsx_runtime_1.jsxs)("div", { onClick: function (e) { e.stopPropagation(); }, style: { background: "linear-gradient(160deg," + T.panel + "," + T.panel2 + ")", border: "1px solid " + T.line, borderRadius: 18, padding: "18px 16px", maxWidth: 380, width: "100%", maxHeight: "88vh", overflowY: "auto", boxShadow: "0 24px 70px rgba(0,0,0,0.75)" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 9 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { flex: 1, color: T.gold, fontFamily: FD, fontSize: 26, letterSpacing: 1, lineHeight: 1, textShadow: "0 0 22px rgba(255,207,61,0.35)" }, children: "CAREER STATS" }), (0, jsx_runtime_1.jsx)("button", { className: "bc-card", onClick: onClose, "aria-label": "Close stats", style: { width: 32, height: 32, flexShrink: 0, borderRadius: "50%", border: "1px solid " + T.line, background: "#101A24", color: T.muted, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }, children: (0, jsx_runtime_1.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 1.5l9 9M10.5 1.5l-9 9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })] }), !c && (0, jsx_runtime_1.jsx)("div", { style: { color: T.dim, textAlign: "center", fontSize: 12, padding: "24px 0", fontFamily: FU }, children: "Loading stats" }), c && c.calls === 0 && (0, jsx_runtime_1.jsxs)("div", { style: { color: T.muted, textAlign: "center", fontSize: 13, padding: "24px 0 10px", fontFamily: FU, lineHeight: 1.6 }, children: ["No calls on the books yet.", (0, jsx_runtime_1.jsx)("br", {}), "Play a game or the Daily Gauntlet and your numbers show up here."] }), c && c.calls > 0 && (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginTop: 14 }, children: [tile("CALLS", c.calls.toLocaleString()), tile("ACCURACY", pct([c.calls, c.ok]), T.green), tile("BEST RUN", c.bestStreak, T.gold), tile("GAMES", c.games)] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginTop: 6 }, children: [tile("EDGE CALLS", pct(c.edge), T.gold), tile("CHECK SWINGS", pct(c.checks)), tile("TOO SLOW", c.timeouts, c.timeouts ? T.strike : T.chalk)] }), sec("WHERE YOU GET IT RIGHT \u2014 UMPIRE'S VIEW"), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: (0, jsx_runtime_1.jsxs)("svg", { width: CW * 5, height: CH * 5 + 4, viewBox: "0 0 " + (CW * 5) + " " + (CH * 5 + 4), role: "img", "aria-label": "Accuracy by pitch location", children: [c.grid.map(function (a, i) {
                                        var col = i % 5, row = Math.floor(i / 5), x = col * CW, y = row * CH, inZ = col > 0 && col < 4 && row > 0 && row < 4;
                                        return ((0, jsx_runtime_1.jsxs)("g", { children: [(0, jsx_runtime_1.jsx)("rect", { x: x + 1.5, y: y + 1.5, width: CW - 3, height: CH - 3, rx: 4, fill: heat(a), stroke: inZ ? "none" : "rgba(255,255,255,0.05)" }), (0, jsx_runtime_1.jsx)("text", { x: x + CW / 2, y: y + CH / 2 + (a[0] ? 1 : 4), textAnchor: "middle", fill: a[0] ? "#fff" : "rgba(255,255,255,0.18)", fontFamily: FU, fontWeight: "700", fontSize: a[0] ? 13 : 11, children: a[0] ? Math.round(100 * a[1] / a[0]) + "%" : "\u2014" }), a[0] > 0 && (0, jsx_runtime_1.jsx)("text", { x: x + CW / 2, y: y + CH / 2 + 13, textAnchor: "middle", fill: "rgba(255,255,255,0.45)", fontFamily: FM, fontSize: 8, children: a[0] })] }, i));
                                    }), (0, jsx_runtime_1.jsx)("rect", { x: CW + 0.5, y: CH + 0.5, width: CW * 3 - 1, height: CH * 3 - 1, fill: "none", stroke: T.chalk, strokeWidth: "1.5", strokeDasharray: "4 3", opacity: "0.7" }), (0, jsx_runtime_1.jsx)("path", { d: "M" + (CW * 2.1) + " " + (CH * 5 + 1) + "h" + (CW * 0.8), stroke: "rgba(255,255,255,0.35)", strokeWidth: "3", strokeLinecap: "round" })] }) }), (0, jsx_runtime_1.jsx)("div", { style: { color: T.dim, fontSize: 10, fontFamily: FM, textAlign: "center", marginTop: 4 }, children: "Dashed box is the zone. Small number is calls." }), sec("BY PITCH TYPE"), Object.keys(PN).map(function (k) {
                            var a = c.byType[k] || [0, 0], r = a[0] ? a[1] / a[0] : 0;
                            return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 5, fontFamily: FU }, children: [(0, jsx_runtime_1.jsx)("div", { style: { width: 78, color: T.chalk, fontSize: 13, fontWeight: 600 }, children: PN[k] }), (0, jsx_runtime_1.jsx)("div", { style: { flex: 1, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.06)", overflow: "hidden" }, children: (0, jsx_runtime_1.jsx)("div", { style: { width: (r * 100) + "%", height: "100%", background: r >= 0.85 ? T.green : r >= 0.7 ? T.gold : T.strike } }) }), (0, jsx_runtime_1.jsxs)("div", { style: { width: 70, textAlign: "right", color: T.muted, fontSize: 12, fontFamily: FM }, children: [a[0] ? Math.round(r * 100) + "%" : "\u2014", " ", (0, jsx_runtime_1.jsx)("span", { style: { color: T.faint }, children: a[0] })] })] }, k));
                        }), sec("DAILY GAUNTLET"), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 }, children: [tile("STREAK", liveStreak(c.daily), T.gold), tile("BEST STREAK", c.daily.best), tile("DAYS PLAYED", c.daily.days)] }), (0, jsx_runtime_1.jsx)("button", { onClick: reset, style: { display: "block", margin: "16px auto 2px", background: "none", border: "none", color: arm ? T.strike : T.faint, fontFamily: FU, fontSize: 12, fontWeight: 600, letterSpacing: 0.5, cursor: "pointer", padding: "6px 10px" }, children: arm ? "Tap again to erase all stats" : "Reset stats" })] })] }) }));
}
/* ═══ MENU BACKDROP ═══ */
function MenuBackdrop() {
    var ref = (0, react_1.useRef)(null);
    // Drawn straight away when the stadium is already built, as before. On a
    // cold start the home screen no longer freezes while it's made: it builds
    // in idle time (warmCaches) and fades in once it's ready.
    var shS = (0, react_1.useState)(function () { return !!(BG_CACHE && BG_KEY === cacheKey(CW, CH)); }), bdOn = shS[0], setBdOn = shS[1];
    (0, react_1.useEffect)(function () {
        var on = true;
        var paint = function () {
            var c = ref.current;
            if (!on || !c)
                return;
            var ctx = prepCanvas(c, CW, CH);
            ctx.drawImage(buildBackground(CW, CH), 0, 0, CW, CH);
            var vg = ctx.createRadialGradient(CW / 2, CH * 0.42, 70, CW / 2, CH * 0.5, CH * 0.82);
            vg.addColorStop(0, "rgba(2,5,9,0.58)");
            vg.addColorStop(0.6, "rgba(2,5,9,0.84)");
            vg.addColorStop(1, "rgba(2,5,9,0.97)");
            ctx.fillStyle = vg;
            ctx.fillRect(0, 0, CW, CH);
            setBdOn(true);
        };
        if (BG_CACHE && BG_KEY === cacheKey(CW, CH))
            paint();
        else
            BG_WAIT.push(paint);
        warmCaches();
        return function () { on = false; };
    }, []);
    return (0, jsx_runtime_1.jsx)("canvas", { ref: ref, className: "bc-drift", style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0, opacity: bdOn ? 1 : 0, transition: "opacity 0.45s ease-out" } });
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
    // Every number here is read from the game or checked against it: level
    // speeds and clocks come straight from PD, and the rest matches genPitch,
    // edgeMargin/callPoints, LVL_MULT, handleRes and advanceGame.
    var pad = function (t, n) { t = String(t); while (t.length < n)
        t += " "; return t; };
    var lvLines = pad("", 12) + pad("MPH", 8) + pad("CLOCK", 7) + "POINTS\n" + Object.keys(PD).map(function (k) {
        var v = PD[k];
        return pad(k === "pro" ? "PRO" : v.label.toUpperCase(), 12) + pad(v.fastball.s[0] + "-" + v.fastball.s[1], 8) + pad(v.timer.toFixed(1) + "s", 7) + LVL_MULT[k] + "x";
    }).join("\n");
    var pages = [
        { t: "Welcome, Blue", x: "You are the home plate umpire, watching from behind the plate as the pitcher winds up and delivers.\n\nThe ball comes at you with real break and speed. Call it a ball or a strike before the clock runs out." },
        { t: "How It Works", x: "1) Tap Throw pitch to start the windup\n2) Tap BALL or STRIKE before the clock runs out\n3) The strike zone replay shows where it crossed\n\nIf the batter swings, there is nothing to call \u2014 just watch the play.\n\nIf time runs out, it counts as a miss: no points, your streak resets, and the correct call goes on the count." },
        { t: "The Game", x: "Three innings, top and bottom, with a line score for both clubs.\n\nThe bottom of the 3rd is skipped if the home team is already ahead. A walk-off ends it on the spot, and a tie goes to extra innings.\n\nYour call STANDS, right or wrong. It goes on the count, just like a real game." },
        { t: "Reading Pitches", x: "FASTBALLS \u2014 Straight and fast\nSINKERS \u2014 Drop plus armside run\nSLIDERS / CUTTERS \u2014 Late glove-side break\nCURVEBALLS \u2014 Big drop, visible hump\nCHANGEUPS \u2014 Looks like a fastball, dives late\nSPLITTERS \u2014 Falls off the table\n\nPitchers work the count: behind, they come after hitters with fastballs in the zone; with two strikes, expect breaking balls in the dirt." },
        { t: "Pro Tips", x: "The zone runs from the knees to the letters. If any part of the ball touches it, it's a strike.\n\nCHECK SWINGS: the buttons change to NO SWING and HE WENT! Watch the bat \u2014 did he go around?\n\nDAILY GAUNTLET: 9 pro pitches, the same for everyone and new each day. Nobody swings, so you call all nine." },
        { t: "Difficulty", x: "Fastball speed, time to make the call, and the points multiplier at each level.\n\n" + lvLines },
        { t: "Scoring", x: "POINTS PER CORRECT CALL\nEdge (within ~1 in)   500\nTough (within 3 in)   300\nSolid (within 6 in)   150\nRoutine               100\nCheck swing           250\n\nTimes your level (up to 2x) and streak heat (up to 2x at 20 straight).\n\nFull count pays double; a bases-loaded strike three pays triple. Neither applies in the Daily Gauntlet." }
    ];
    // Escape closes it too, the same as the X
    (0, react_1.useEffect)(function () {
        var k = function (e) { if (e.key === "Escape")
            onClose(); };
        window.addEventListener("keydown", k);
        return function () { window.removeEventListener("keydown", k); };
    }, [onClose]);
    var p2 = pages[pg];
    return ((0, jsx_runtime_1.jsx)("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.93)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, boxSizing: "border-box" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { background: "linear-gradient(160deg," + T.panel + "," + T.panel2 + ")", borderRadius: 18, padding: "20px 18px", maxWidth: 400, width: "100%", border: "1px solid " + T.line, boxShadow: "0 24px 70px rgba(0,0,0,0.75)" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "baseline", gap: 9, marginBottom: 12 }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.goldDim, fontFamily: FM, fontSize: 11, fontWeight: 700, letterSpacing: 1 }, children: "0" + (pg + 1) }), (0, jsx_runtime_1.jsx)("h2", { style: { color: T.gold, margin: 0, fontFamily: FD, fontSize: 24, letterSpacing: 0.5, lineHeight: 1 }, children: p2.t.toUpperCase() }), (0, jsx_runtime_1.jsx)("span", { style: { flex: 1, height: 1, background: T.line, alignSelf: "center" } }), (0, jsx_runtime_1.jsx)("button", { className: "bc-card", onClick: onClose, "aria-label": "Close how to play", style: { alignSelf: "center", width: 32, height: 32, marginLeft: 2, flexShrink: 0, borderRadius: "50%", border: "1px solid " + T.line, background: "#101A24", color: T.muted, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, WebkitTapHighlightColor: "transparent" }, children: (0, jsx_runtime_1.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 1.5l9 9M10.5 1.5l-9 9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) })] }), (0, jsx_runtime_1.jsx)("div", { style: { color: "#A8B4C4", fontSize: 12.5, lineHeight: 1.75, whiteSpace: "pre-wrap", fontFamily: FM, minHeight: 290 }, children: p2.x }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", gap: 6, marginTop: 14, justifyContent: "center" }, children: pages.map(function (_, i) { return (0, jsx_runtime_1.jsx)("div", { onClick: function () { sPg(i); }, style: { width: i === pg ? 18 : 8, height: 8, borderRadius: 4, cursor: "pointer", background: i === pg ? T.gold : "#1C2836", transition: "width 0.2s" } }, i); }) }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 10, marginTop: 14, justifyContent: "center" }, children: [pg > 0 && (0, jsx_runtime_1.jsx)(Btn, { onClick: function () { sPg(pg - 1); }, style: { padding: "10px 18px", background: "#101A24", color: T.muted, border: "1px solid " + T.line, fontSize: 13 }, children: "Back" }), pg < pages.length - 1
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
    (0, react_1.useEffect)(function () {
        var k = function (e) { if (e.key === "Escape")
            onClose(); };
        window.addEventListener("keydown", k);
        return function () { window.removeEventListener("keydown", k); };
    }, [onClose]);
    return ((0, jsx_runtime_1.jsxs)("div", { onClick: onClose, style: { position: "fixed", inset: 0, zIndex: 50, background: "rgba(2,5,10,0.86)", overflowY: "auto", WebkitOverflowScrolling: "touch", padding: "max(58px, calc(env(safe-area-inset-top) + 46px)) 12px 40px", boxSizing: "border-box" }, children: [(0, jsx_runtime_1.jsx)("button", { className: "bc-card", onClick: function (e) { e.stopPropagation(); onClose(); }, "aria-label": "Close scorecard", style: { position: "fixed", top: "max(12px, env(safe-area-inset-top))", right: "max(12px, calc(50% - 170px))", zIndex: 51, width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.18)", background: "rgba(16,26,36,0.92)", color: "#E6EAF0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0, boxShadow: "0 4px 14px rgba(0,0,0,0.5)", WebkitTapHighlightColor: "transparent" }, children: (0, jsx_runtime_1.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 12 12", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("path", { d: "M1.5 1.5l9 9M10.5 1.5l-9 9", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }), (0, jsx_runtime_1.jsxs)("div", { onClick: function (e) { e.stopPropagation(); }, className: "bc-panel", style: { background: "#FAFAF8", color: "#111", borderRadius: 10, maxWidth: 340, margin: "0 auto", padding: "14px 14px 16px", boxShadow: "0 24px 70px rgba(0,0,0,0.8)", textAlign: "center" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontFamily: CARD_F, fontWeight: 800, fontSize: 26, letterSpacing: -0.5, color: "#111" }, children: "Blue" }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", marginTop: 2 }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontWeight: 700, fontSize: 15, color: "#111" }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[0].jersey }, children: TEAMS[0].abbr }), " vs. ", (0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[1].jersey }, children: TEAMS[1].abbr }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[0].jersey }, children: game.runs[0] }), " \u00A0-\u00A0 ", (0, jsx_runtime_1.jsx)("span", { style: { color: TEAMS[1].jersey }, children: game.runs[1] })] }), (0, jsx_runtime_1.jsxs)("svg", { width: "58", height: "66", viewBox: "0 0 58 66", children: [(0, jsx_runtime_1.jsx)("path", { d: "M8 8 Q29 -6 50 8 L52 30 Q50 58 29 64 Q8 58 6 30 Z", fill: "#111" }), (0, jsx_runtime_1.jsx)("path", { d: "M14 22 Q29 14 44 22 L44 28 Q29 21 14 28 Z", fill: "#FAFAF8" }), (0, jsx_runtime_1.jsx)("path", { d: "M22 34 Q29 30 36 34 L36 40 Q29 36 22 40 Z", fill: "#FAFAF8" }), (0, jsx_runtime_1.jsx)("circle", { cx: "29", cy: "48", r: "3", fill: "#FAFAF8" })] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontWeight: 700, fontSize: 13.5, color: "#111" }, children: [dateStr.split(", ")[0], ",", (0, jsx_runtime_1.jsx)("br", {}), dateStr.split(", ")[1]] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontSize: 9, color: "#333", marginTop: 2 }, children: ["Full Count ", "\u00B7", " ", lvlLabel, (0, jsx_runtime_1.jsx)("br", {}), nT, " taken pitches, ", log.length - nT, " check-swing appeals"] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 4, marginTop: 12, alignItems: "start" }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Overall", (0, jsx_runtime_1.jsx)("br", {}), "Accuracy"] }), (0, jsx_runtime_1.jsx)(Donut, { pct: acc * 100, label: P(acc), sub: "xAcc: " + P(xAcc) }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: ["Called ", nOk, " of ", nT, (0, jsx_runtime_1.jsx)("br", {}), "taken pitches correctly"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Relative", (0, jsx_runtime_1.jsx)("br", {}), "Accuracy"] }), (0, jsx_runtime_1.jsxs)("div", { style: { height: 70, display: "flex", flexDirection: "column", justifyContent: "center" }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontWeight: 800, fontSize: 22, color: "#111" }, children: [(rel >= 0 ? "+" : "") + rel.toFixed(1), "%"] }), (0, jsx_runtime_1.jsxs)("div", { style: { fontFamily: CARD_F, fontSize: 9, color: "#222" }, children: [rel >= 0 ? "above" : "below", " expected"] })] }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: [Math.abs(fewer).toFixed(1), " ", fewer > 0 ? "fewer" : "more", " correct", (0, jsx_runtime_1.jsx)("br", {}), "calls than expected"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Overall", (0, jsx_runtime_1.jsx)("br", {}), "Favor"] }), (0, jsx_runtime_1.jsxs)("div", { style: { height: 70, display: "flex", flexDirection: "column", justifyContent: "center" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontFamily: CARD_F, fontWeight: 800, fontSize: 22, color: Math.abs(net) < 0.005 ? "#111" : favTeam.jersey }, children: Math.abs(net) < 0.005 ? "even" : (net > 0 ? "+" : "+") + Math.abs(net).toFixed(2) }), (0, jsx_runtime_1.jsx)("div", { style: { fontFamily: CARD_F, fontSize: 9, color: Math.abs(net) < 0.005 ? "#222" : favTeam.jersey }, children: Math.abs(net) < 0.005 ? "no lean" : "runs for " + favTeam.abbr })] }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: ["est. run impact of", (0, jsx_runtime_1.jsx)("br", {}), "missed calls"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { style: H3, children: ["Overall", (0, jsx_runtime_1.jsx)("br", {}), "Consistency"] }), (0, jsx_runtime_1.jsx)(Donut, { pct: cons * 100, label: P(cons), sub: "own zone" }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: [ballsInEUZ, " called balls inside EUZ", (0, jsx_runtime_1.jsx)("br", {}), strikesOutEUZ, " called strikes outside"] })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "156px 1fr", gap: 8, marginTop: 14, textAlign: "left" }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14, textAlign: "center" }), children: "All Missed Calls" }), (0, jsx_runtime_1.jsxs)("div", { style: Object.assign({}, small, { textAlign: "center", marginBottom: 4 }), children: ["true zone and ", (0, jsx_runtime_1.jsx)("span", { style: { color: "#C8403C" }, children: "Estimated Ump Zone (EUZ)" })] }), (0, jsx_runtime_1.jsx)(MissedCallsPlot, { taken: taken, ranked: ranked })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14 }), children: "Impactful Missed Calls" }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, small, { marginBottom: 6 }), children: "largest estimated changes in run expectancy" }), ranked.length === 0 && (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, small, { fontStyle: "italic", marginTop: 10 }), children: "None. A perfect night behind the dish." }), ranked.map(function (e, i) {
                                        return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "14px 1fr", marginBottom: 8 }, children: [(0, jsx_runtime_1.jsxs)("div", { style: Object.assign({}, small, { fontWeight: 700 }), children: [i + 1, ":"] }), (0, jsx_runtime_1.jsxs)("div", { style: small, children: [(e.half === 0 ? "Top" : "Bottom") + " of the " + ordinal(e.inning), (0, jsx_runtime_1.jsx)("br", {}), situationText(e), (0, jsx_runtime_1.jsx)("br", {}), e.balls + "-" + e.strikes + " count, " + (e.call === "strike" ? "ball is called a strike" : "strike is called a ball"), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: { color: "#555" }, children: "\u2248 " + missRuns(e).toFixed(2) + " runs for " + (e.call === "strike" ? TEAMS[1 - e.half].abbr : TEAMS[e.half].abbr) })] })] }, i));
                                    })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "left", marginTop: 6, paddingRight: 40 }, children: [(0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14 }), children: "Accuracy on called balls" }), (0, jsx_runtime_1.jsx)("div", { style: { position: "relative", marginTop: 12 }, children: (0, jsx_runtime_1.jsx)(Bar, { v: cb.pct, avg: cb.avg, n: cb.n, kind: "balls", c: "#8DC48A" }) }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, H3, { fontSize: 14, marginTop: 12 }), children: "and strikes" }), (0, jsx_runtime_1.jsx)("div", { style: { position: "relative", marginTop: 12 }, children: (0, jsx_runtime_1.jsx)(Bar, { v: cs.pct, avg: cs.avg, n: cs.n, kind: "strikes", c: "#C9625E" }) })] }), (0, jsx_runtime_1.jsx)("div", { style: Object.assign({}, small, { color: "#666", marginTop: 12 }), children: "Run impact and expected accuracy are estimates from the count, base-out state and edge distance." })] })] }));
}
/* ═══ GAME OVER ═══ */
function GameOver({ stats, game, gameId, lvlLabel, daily, log, calls, onRestart, onMenu }) {
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
    return ((0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center", padding: "22px 18px", background: "linear-gradient(170deg," + T.panel + "," + T.panel2 + ")", borderRadius: 20, border: "1px solid " + T.line, maxWidth: 360, margin: "0 auto", boxShadow: "0 24px 70px rgba(0,0,0,0.7)" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { fontSize: 46, color: T.gold, fontFamily: FD, letterSpacing: 6, lineHeight: 1, textShadow: "0 0 30px rgba(255,207,61,0.35)" }, children: "FINAL" }), (0, jsx_runtime_1.jsx)("h2", { style: { color: T.chalk, fontFamily: FU, fontWeight: 600, margin: "6px 0 2px", fontSize: 19, letterSpacing: 0.5 }, children: "That's the ballgame" }), (0, jsx_runtime_1.jsx)("p", { style: { color: T.dim, fontSize: 11, margin: "0 0 14px", fontFamily: FM }, children: daily ? "Today's 9-pitch gauntlet \u2014 a new one tomorrow" : game.line[0].length + " innings in the books" }), (0, jsx_runtime_1.jsxs)("div", { style: { background: "rgba(255,207,61,0.05)", border: "1px solid rgba(255,207,61,0.24)", borderRadius: 14, padding: "12px", marginBottom: 14 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: T.goldDim, fontSize: 9, letterSpacing: 2.5, fontFamily: FM }, children: "FINAL SCORE" }), (0, jsx_runtime_1.jsx)("div", { style: { color: T.gold, fontSize: 40, fontFamily: FD, letterSpacing: 1, lineHeight: 1.1, textShadow: "0 0 26px rgba(255,207,61,0.35)" }, children: stats.score.toLocaleString() }), rank === 1 && (0, jsx_runtime_1.jsxs)("div", { style: { color: T.gold, fontSize: 12, fontWeight: 700, fontFamily: FU, letterSpacing: 1.5, marginTop: 3 }, children: ["\u2605", " NEW TOP SCORE ", "\u2605"] }), rank > 1 && (0, jsx_runtime_1.jsxs)("div", { style: { color: "#B89A3A", fontSize: 11, marginTop: 3, fontFamily: FM }, children: ["Top 10 finish ", "\u2014", " #", rank] })] }), !daily && (0, jsx_runtime_1.jsx)("div", { style: { marginBottom: 10 }, children: (0, jsx_runtime_1.jsx)(ScoreBoard, { gm: game, final: true }) }), daily && calls && calls.length > 0 && (0, jsx_runtime_1.jsx)(DailyShareCard, { calls: calls, stats: stats }), (0, jsx_runtime_1.jsx)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }, children: items.map(function (item, i) {
                    return ((0, jsx_runtime_1.jsxs)("div", { style: { background: "#050A11", borderRadius: 12, padding: "10px 12px", border: "1px solid " + T.line, textAlign: "left" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: T.dim, fontSize: 9, letterSpacing: 1.6, marginBottom: 2, fontFamily: FM }, children: item[0] }), (0, jsx_runtime_1.jsx)("div", { style: { color: item[2], fontSize: 24, fontFamily: FD, letterSpacing: 0.5, lineHeight: 1.1 }, children: String(item[1]) })] }, i));
                }) }), !daily && (0, jsx_runtime_1.jsxs)(Btn, { onClick: function () { setShowCard(true); }, style: { width: "100%", padding: 13, marginBottom: 9, background: "linear-gradient(180deg,#F7F7F4,#E4E4DE)", color: "#141414", fontSize: 14, border: "1px solid #B8B8B0" }, children: ["\u{1F3AF}", "\u00A0 Ump scorecard"] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 9 }, children: [(0, jsx_runtime_1.jsx)(Btn, { onClick: onRestart, style: { flex: 1, padding: 14, background: "linear-gradient(135deg,#2FBF57,#17913C)", color: "#fff", fontSize: 15, boxShadow: "0 6px 20px rgba(47,191,87,0.28)" }, children: "Play again" }), (0, jsx_runtime_1.jsx)(Btn, { onClick: onMenu, style: { flex: 1, padding: 14, background: "#0A1018", color: T.muted, border: "1px solid " + T.line, fontSize: 15 }, children: "Menu" })] }), showCard && (0, jsx_runtime_1.jsx)(UmpScorecard, { log: log || [], game: game, lvlLabel: lvlLabel, onClose: function () { setShowCard(false); } })] }));
}
/* ═══════════════════════ MAIN ═══════════════════════ */
function FullCount() {
    var screenS = (0, react_1.useState)("menu"), screen = screenS[0], setScreen = screenS[1];
    var tutS = (0, react_1.useState)(false), showTut = tutS[0], setShowTut = tutS[1];
    var lvlS = (0, react_1.useState)("highSchool"), level = lvlS[0], setLevel = lvlS[1];
    // Career mode was removed. These stay fixed so every level lookup
    // (career?cLvl:level) reads the level picked on the home screen.
    var career = false, cLvl = level;
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
    var aRef = (0, react_1.useRef)(null), tRef = (0, react_1.useRef)(null), phRef = (0, react_1.useRef)(phase);
    phRef.current = phase;
    WARM.hold = screen === "playing" && phase !== "waiting" && phase !== "result"; // idle-time builds wait while the field is moving
    var statsRef = (0, react_1.useRef)(stats);
    statsRef.current = stats;
    var gmRef = (0, react_1.useRef)(gm);
    gmRef.current = gm; // live count for count-aware pitching
    var callsRef = (0, react_1.useRef)([]), flushedRef = (0, react_1.useRef)(0); // every call this game/gauntlet, for career stats + share card
    var flushCalls = function (fin) { var c = callsRef.current.slice(flushedRef.current); flushedRef.current = callsRef.current.length; return recordCalls(c, fin); };
    var stS = (0, react_1.useState)(false), showStats = stS[0], setShowStats = stS[1];
    var dsS = (0, react_1.useState)(null), dStat = dsS[0], setDStat = dsS[1]; // daily streak for the home screen
    var gidRef = (0, react_1.useRef)(0);
    var newBatRef = (0, react_1.useRef)(false); // true once the current hitter's at-bat has ended
    var aLvl = daily ? "pro" : (career ? cLvl : level);
    var startGame = (0, react_1.useCallback)(function () {
        setDaily(false);
        curBat = Math.random() > 0.5 ? "right" : "left";
        newBatRef.current = false;
        setScreen("playing");
        setStats({ correct: 0, wrong: 0, total: 0, streak: 0, bestStreak: 0, score: 0 });
        logRef.current = [];
        callsRef.current = [];
        flushedRef.current = 0;
        var gid = Date.now();
        setGameId(gid);
        gidRef.current = gid;
        setGm(freshGame());
        setOver(false);
        setPhase("waiting");
        setPitch(null);
        setRMsg(null);
        setAnn("");
    }, []);
    var startDaily = (0, react_1.useCallback)(function () {
        dRng.current = mulberry32(dailySeed());
        setDaily(true);
        curBat = Math.random() > 0.5 ? "right" : "left";
        newBatRef.current = false;
        setScreen("playing");
        setStats({ correct: 0, wrong: 0, total: 0, streak: 0, bestStreak: 0, score: 0 });
        logRef.current = [];
        callsRef.current = [];
        flushedRef.current = 0;
        var gid = Date.now();
        setGameId(gid);
        gidRef.current = gid;
        setGm(freshGame());
        setOver(false);
        setPhase("waiting");
        setPitch(null);
        setRMsg(null);
        setAnn("");
    }, []);
    var finishGame = (0, react_1.useCallback)(function () {
        setOver(true);
        flushCalls({ daily: daily, done: true, bestStreak: statsRef.current.bestStreak });
        setTimeout(function () {
            var fs = statsRef.current;
            if (fs.total > 0) {
                saveScore({ id: gidRef.current, score: fs.score,
                    lvl: daily ? "Daily" : PD[level].label,
                    acc: Math.round((fs.correct / fs.total) * 100), d: Date.now() });
            }
            setScreen("gameover");
        }, 2000);
    }, [level, daily]);
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
        callsRef.current.push({ type: p.type, fx: p.fx, fy: p.fy, check: !!p.check, ok: ok, timedOut: call === null, m: p.check ? 0 : edgeMargin(p) }); // career stats (recording only)
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
                msg.ev = { kind: "K", look: !(p.check && p.went) };
            }
            else if (res.note.indexOf("WALK") >= 0) {
                setAnn(annPick("walk"));
                if (res.note.indexOf("BALL FOUR") >= 0)
                    msg.ev = { kind: "BB", run: res.runs > 0 };
            }
        }
        setRMsg(msg);
        setGm(res.ng);
        if (res.gameOver)
            finishGame();
    }, [gm, finishGame, stats.streak, stats.total, career, cLvl, level, daily]);
    var handleSwing = (0, react_1.useCallback)(function (p) {
        setPhase("result");
        var play = (p.out === "miss" || p.out === "foul") ? null : resolvePlay(p, gm.bases, gm.outs);
        var M = { miss: ["SWING AND A MISS", "Strike on the swing"], foul: ["FOUL BALL", "Off the bat and out of play"],
            single: ["BASE HIT", "Lined into the outfield"], double: ["DOUBLE", "Into the gap for two bags"], hr: ["HOME RUN", "Gone \u2014 over the wall"],
            ground: ["GROUND OUT", "Retired at first"], fc: ["FIELDER'S CHOICE", "Force out at second \u2014 batter safe at first"],
            dp: ["DOUBLE PLAY", "Turned two \u2014 6-4-3"], ihit: ["INFIELD HIT", "Beats the throw to first"],
            fly: ["FLY OUT", "Caught for the out"], sacfly: ["SACRIFICE FLY", "Tags and scores from third"] };
        var key = play ? play.type : p.out, mt = M[key];
        var msg = { t: mt[0], s: mt[1], c: T.gold };
        var AK = { miss: "missSw", foul: "foul", hr: "hr", single: "hit", double: "hit", ihit: "hit", ground: "out", fc: "out", dp: "out", fly: "out", sacfly: "out" };
        setAnn(annPick(AK[key] || "good"));
        if (key === "hr")
            sfx("roar");
        else if (key === "single" || key === "double" || key === "ihit" || key === "sacfly")
            sfx("cheer");
        var res = advanceGame(gm, play || p.out);
        if (res.runs > 0 && key !== "hr")
            msg.s += " \u2014 " + (res.runs === 1 ? "a run scores" : res.runs + " runs score");
        if (res.nb)
            newBatRef.current = true;
        if (res.note)
            msg.n = res.note;
        if (res.note && res.note.indexOf("STRIKE THREE") >= 0)
            msg.ev = { kind: "K", look: false };
        setRMsg(msg);
        setGm(res.ng);
        if (res.gameOver)
            finishGame();
    }, [gm, finishGame]);
    var throwP = (0, react_1.useCallback)(function () {
        sndInit();
        var lv = daily ? "pro" : (career ? cLvl : level);
        var np = daily ? genPitch("pro", dRng.current) : genPitch(lv, null, { b: gmRef.current.balls, s: gmRef.current.strikes });
        if (!daily) {
            if (Math.random() < (np.isK ? 0.34 : 0.12)) {
                np.swing = true;
                np.hitSeed = Math.random(); // fixes spray angle, depth and who fields it
                // swing outcomes: miss 30%, foul 26%, in play 44%; in play: out 38%,
                // single 34%, double 17%, homer 11% (was 34/28/38 and 45/30/15/10)
                var r = Math.random();
                if (r < 0.30)
                    np.out = "miss";
                else if (r < 0.56)
                    np.out = "foul";
                else {
                    var r2 = Math.random();
                    np.out = r2 < 0.38 ? "out" : r2 < 0.72 ? "single" : r2 < 0.89 ? "double" : "hr";
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
                // Flight time scales with the pitch's speed, as in real life (time is
                // inversely proportional to speed): 630 ms at 90 mph, so Pro plays the
                // same on average as before, a 101 mph fastball gets there in 561 ms
                // and a 76 mph curve takes 746 ms. Slower levels get slower pitches.
                // Same speed, same time — no random jitter.
                var ps2 = performance.now(), pd = Math.max(480, Math.min(1000, 630 * 90 / np.speed));
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
    (0, react_1.useEffect)(function () {
        if (screen !== "menu")
            return;
        var on = true;
        getCareer().then(function (c) { if (on)
            setDStat(c.daily); });
        return function () { on = false; };
    }, [screen]);
    var makeCall = (0, react_1.useCallback)(function (call) { if (phase !== "deciding" || !pitch)
        return; handleRes(pitch, call); }, [phase, pitch, handleRes]);
    (0, react_1.useEffect)(function () { return function () { if (aRef.current)
        cancelAnimationFrame(aRef.current); if (tRef.current)
        cancelAnimationFrame(tRef.current); }; }, []);
    (0, react_1.useEffect)(function () { warmCaches(); }, [screen]); // have the stadium and the wide shot built before they're needed
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
    /* ── MENU ── Broadcast-graphics style: slanted TV-style bars for the level
       strip and every button. The slant sits on an inner layer, so the
       button itself keeps its press-scale feedback. ── */
    if (screen === "menu") {
        var dDone = dStat && dStat.last === dayKey(), dLive = liveStreak(dStat);
        var dSub = dDone ? "Done for today" + (dLive >= 2 ? " \u2014 " + dLive + "-day streak" : "") + ". New pitches tomorrow."
            : (dLive >= 1 ? "Keep your " + dLive + "-day streak alive: 9 pro pitches" : "9 pro pitches, the same for everyone today");
        var LV_SHORT = { highSchool: "High school", college: "College", minors: "Minors", pro: "Pro" };
        var today = new Date(), MON = today.toLocaleDateString("en-US", { month: "short" }).toUpperCase(), DAY = today.getDate();
        return ((0, jsx_runtime_1.jsxs)("div", { style: { minHeight: "100vh", position: "relative", overflow: "hidden", background: T.night, fontFamily: FU, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "max(24px, env(safe-area-inset-top)) 20px max(24px, env(safe-area-inset-bottom))", boxSizing: "border-box" }, children: [(0, jsx_runtime_1.jsx)("link", { href: FONTS, rel: "stylesheet" }), (0, jsx_runtime_1.jsx)(MotionStyle, {}), (0, jsx_runtime_1.jsx)(MenuBackdrop, {}), (0, jsx_runtime_1.jsxs)("div", { style: { position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 352 }, children: [(0, jsx_runtime_1.jsx)(BallIcon, { size: 62 }), (0, jsx_runtime_1.jsx)("h1", { className: "bc-rise", style: { fontFamily: FD, color: T.gold, fontSize: "clamp(40px,13vw,56px)", fontWeight: 400, margin: 0, letterSpacing: 1, lineHeight: 0.92, whiteSpace: "nowrap", animationDelay: "60ms", textShadow: "0 0 44px rgba(255,207,61,0.42), 0 4px 0 rgba(0,0,0,0.65)" }, children: "FULL COUNT" }), (0, jsx_runtime_1.jsxs)("div", { className: "bc-rise", style: { display: "flex", alignItems: "center", gap: 10, margin: "8px 0 20px", animationDelay: "120ms" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { width: 34, height: 1, background: "linear-gradient(90deg,transparent," + T.goldDim + ")" } }), (0, jsx_runtime_1.jsx)("p", { style: { color: "#B89A3A", fontSize: 10, margin: 0, fontFamily: FM, letterSpacing: 4.5 }, children: "UMPIRE SIMULATOR" }), (0, jsx_runtime_1.jsx)("div", { style: { width: 34, height: 1, background: "linear-gradient(90deg," + T.goldDim + ",transparent)" } })] }), (0, jsx_runtime_1.jsx)("div", { className: "bc-rise", role: "radiogroup", "aria-label": "Level", style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5, width: "100%", padding: "0 6px", boxSizing: "border-box", marginBottom: 16, animationDelay: "180ms" }, children: Object.keys(PD).map(function (k) {
                                var v = PD[k], on = level === k;
                                return ((0, jsx_runtime_1.jsx)("button", { role: "radio", "aria-checked": on, "aria-label": v.label, className: "bc-card", onClick: function () { setLevel(k); }, style: { padding: 0, border: "none", background: "none", cursor: "pointer", fontFamily: FU, WebkitTapHighlightColor: "transparent" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { transform: "skewX(-12deg)", padding: "8px 2px 7px", background: on ? "linear-gradient(180deg,#FFD84F,#E9A70F)" : "rgba(10,20,36,0.88)", borderBottom: "3px solid " + (on ? "#8A5E00" : "#22406E"), boxShadow: on ? "0 0 18px rgba(255,207,61,0.3)" : "none" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { transform: "skewX(12deg)", color: on ? "#1C1303" : "rgba(237,239,230,0.8)", fontSize: 14, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", whiteSpace: "nowrap" }, children: k === "highSchool" ? "H.S." : LV_SHORT[k] }), (0, jsx_runtime_1.jsxs)("div", { style: { transform: "skewX(12deg)", color: on ? "#4A3405" : "rgba(237,239,230,0.42)", fontSize: 11, fontWeight: 600, marginTop: 1 }, children: [v.fastball.s[1], " mph"] })] }) }, k));
                            }) }), (0, jsx_runtime_1.jsxs)("div", { className: "bc-rise", style: { display: "flex", flexDirection: "column", gap: 9, width: "100%", padding: "0 6px", boxSizing: "border-box", animationDelay: "260ms" }, children: [(0, jsx_runtime_1.jsx)("button", { className: "bc-card", onClick: function () { startGame(); }, style: { padding: 0, border: "none", background: "none", cursor: "pointer", WebkitTapHighlightColor: "transparent" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { transform: "skewX(-12deg)", display: "flex", alignItems: "stretch", background: "linear-gradient(180deg,#FFD84F,#E9A70F)", boxShadow: "0 8px 26px rgba(233,167,15,0.3), inset 0 1px 0 rgba(255,255,255,0.5)" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { width: 58, background: "#0D2046", display: "flex", alignItems: "center", justifyContent: "center" }, children: (0, jsx_runtime_1.jsx)("div", { style: { transform: "skewX(12deg)", display: "flex" }, children: (0, jsx_runtime_1.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 24 24", "aria-hidden": "true", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "10", fill: "#FBF7EC", stroke: "rgba(0,0,0,0.25)", strokeWidth: "1" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.2 4.6c2.2 2.1 2.9 4.6 2.9 7.4s-0.7 5.3-2.9 7.4M17.8 4.6c-2.2 2.1-2.9 4.6-2.9 7.4s0.7 5.3 2.9 7.4", fill: "none", stroke: "#C8322A", strokeWidth: "1.6", strokeDasharray: "1.6 1.4" })] }) }) }), (0, jsx_runtime_1.jsx)("div", { style: { transform: "skewX(12deg)", flex: 1, fontFamily: FD, fontSize: 30, lineHeight: "60px", color: "#1C1303", letterSpacing: 1.5, fontWeight: 400 }, children: "PLAY BALL" })] }) }), (0, jsx_runtime_1.jsx)("button", { className: "bc-card", onClick: startDaily, style: { padding: 0, border: "none", background: "none", cursor: "pointer", WebkitTapHighlightColor: "transparent", textAlign: "left" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { transform: "skewX(-12deg)", display: "flex", alignItems: "stretch", background: "linear-gradient(180deg,#173463,#0D2046)", borderBottom: "3px solid " + T.gold }, children: [(0, jsx_runtime_1.jsxs)("div", { style: { background: T.strike, padding: "0 10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: 48 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { transform: "skewX(12deg)", color: "#fff", fontFamily: FU, fontSize: 11, fontWeight: 700, letterSpacing: 1, lineHeight: 1 }, children: MON }), (0, jsx_runtime_1.jsx)("div", { style: { transform: "skewX(12deg)", color: "#fff", fontFamily: FD, fontSize: 22, lineHeight: 1.05, fontWeight: 400 }, children: DAY })] }), (0, jsx_runtime_1.jsxs)("div", { style: { transform: "skewX(12deg)", flex: 1, padding: "9px 14px 8px", fontFamily: FU }, children: [(0, jsx_runtime_1.jsx)("div", { style: { color: "#fff", fontSize: 18, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }, children: "Daily gauntlet" }), (0, jsx_runtime_1.jsx)("div", { style: { color: "rgba(220,230,255,0.7)", fontSize: 12.5, fontWeight: 500 }, children: dSub })] })] }) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", gap: 9 }, children: [["High scores", function () { setShowHS(true); }, T.gold], ["Stats", function () { setShowStats(true); }, "#8FD3A6"], ["How to play", function () { setShowTut(true); }, "#B8C4D6"]].map(function (it) {
                                        return ((0, jsx_runtime_1.jsx)("button", { className: "bc-card", onClick: it[1], style: { flex: 1, padding: 0, border: "none", background: "none", cursor: "pointer", WebkitTapHighlightColor: "transparent" }, children: (0, jsx_runtime_1.jsx)("div", { style: { transform: "skewX(-12deg)", padding: "11px 4px", background: "rgba(10,20,36,0.88)", borderBottom: "3px solid #22406E" }, children: (0, jsx_runtime_1.jsx)("div", { style: { transform: "skewX(12deg)", color: it[2], fontFamily: FU, fontSize: 14, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", whiteSpace: "nowrap" }, children: it[0] }) }) }, it[0]));
                                    }) })] })] }), showTut && (0, jsx_runtime_1.jsx)(Tutorial, { onClose: function () { setShowTut(false); } }), showHS && (0, jsx_runtime_1.jsx)(HighScoresModal, { onClose: function () { setShowHS(false); } }), showStats && (0, jsx_runtime_1.jsx)(CareerStatsModal, { onClose: function () { setShowStats(false); getCareer().then(function (c) { setDStat(c.daily); }); } })] }));
    }
    /* ── GAME OVER ── */
    if (screen === "gameover")
        return ((0, jsx_runtime_1.jsxs)("div", { style: { minHeight: "100vh", background: "radial-gradient(120% 90% at 50% 0%, #0E1A26 0%, #060C14 55%, " + T.night + " 100%)", fontFamily: FU, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, boxSizing: "border-box" }, children: [(0, jsx_runtime_1.jsx)("link", { href: FONTS, rel: "stylesheet" }), (0, jsx_runtime_1.jsx)(MotionStyle, {}), (0, jsx_runtime_1.jsx)(GameOver, { stats: stats, game: gm, gameId: gameId, daily: daily, log: logRef.current, calls: callsRef.current, lvlLabel: daily ? "Daily" : PD[aLvl].label, onRestart: daily ? startDaily : function () { startGame(); }, onMenu: function () { setScreen("menu"); } })] }));
    /* ── PLAYING ── */
    return ((0, jsx_runtime_1.jsxs)("div", { style: { minHeight: "100vh", maxHeight: "100vh", overflow: "hidden", background: "radial-gradient(120% 80% at 50% 8%, #0C1724 0%, #060C14 50%, " + T.night + " 100%)", fontFamily: FU, display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 10px 14px", boxSizing: "border-box" }, children: [(0, jsx_runtime_1.jsx)("link", { href: FONTS, rel: "stylesheet" }), (0, jsx_runtime_1.jsx)(MotionStyle, {}), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", maxWidth: CW, flexShrink: 0 }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { flushCalls({ daily: daily, done: false, bestStreak: statsRef.current.bestStreak }); setScreen("menu"); }, style: { background: "none", border: "none", color: T.dim, cursor: "pointer", fontSize: 12, padding: "4px 6px", fontFamily: FU, letterSpacing: 1, textTransform: "uppercase" }, children: "Menu" }), (0, jsx_runtime_1.jsx)("div", { style: { color: T.gold, fontFamily: FU, fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }, children: daily ? "Daily Gauntlet" : ld.label }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center" }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { SND.on = !sndOn; setSndOn(!sndOn); }, style: { background: "none", border: "none", cursor: "pointer", fontSize: 13, padding: "4px 5px", opacity: sndOn ? 0.85 : 0.35 }, children: sndOn ? "\u{1F50A}" : "\u{1F507}" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { setShowTut(true); }, style: { background: "none", border: "none", color: T.dim, cursor: "pointer", fontSize: 12, padding: "4px 6px", fontFamily: FU, letterSpacing: 1, textTransform: "uppercase" }, children: "Tips" })] })] }), !daily && (0, jsx_runtime_1.jsx)("div", { style: { width: "100%", maxWidth: CW, marginTop: 6 }, children: (0, jsx_runtime_1.jsx)(ScoreBoard, { gm: gm, final: over }) }), (0, jsx_runtime_1.jsxs)("div", { style: { width: "100%", maxWidth: CW, margin: "5px 0 4px", padding: "7px 10px", boxSizing: "border-box", background: "linear-gradient(180deg,#0B131C,#070D14)", border: "1px solid " + T.line, borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)", flexShrink: 0 }, children: [daily ? ((0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [(0, jsx_runtime_1.jsx)("span", { style: { color: T.dim, fontSize: 9, fontFamily: FM, fontWeight: 700, letterSpacing: 0.5 }, children: "PITCH" }), [0, 1, 2, 3, 4, 5, 6, 7, 8].map(function (i) { return (0, jsx_runtime_1.jsx)(Pip, { on: i < stats.total, c: T.gold }, i); })] })) : ((0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 9 }, children: [(0, jsx_runtime_1.jsxs)("span", { style: { color: T.gold, fontFamily: FM, fontWeight: 700, fontSize: 12 }, title: gm.half === 0 ? "top" : "bottom", children: [gm.half === 0 ? "\u25B2" : "\u25BC", gm.inning] }), (0, jsx_runtime_1.jsx)(PipRow, { label: "B", n: gm.balls, total: 3, c: T.green }), (0, jsx_runtime_1.jsx)(PipRow, { label: "S", n: gm.strikes, total: 2, c: T.gold }), (0, jsx_runtime_1.jsx)(PipRow, { label: "O", n: gm.outs, total: 2, c: T.strike }), (0, jsx_runtime_1.jsx)(BasesIcon, { bases: gm.bases })] })), (0, jsx_runtime_1.jsxs)("span", { style: { display: "inline-flex", alignItems: "baseline", gap: 7 }, children: [stats.streak >= 3 && (0, jsx_runtime_1.jsxs)("span", { style: { color: T.gold, fontFamily: FM, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, display: "inline-flex", alignItems: "baseline", gap: 2 }, children: [(0, jsx_runtime_1.jsx)("span", { className: "bc-flame", style: { fontSize: 9, filter: "drop-shadow(0 0 4px rgba(255,150,40,0.9))" }, children: "\u{1F525}" }), sI ? sI + " " : "", stats.streak] }), (0, jsx_runtime_1.jsx)("span", { style: { color: T.gold, fontFamily: FM, fontWeight: 700, fontSize: 13, fontVariantNumeric: "tabular-nums", textShadow: "0 0 10px rgba(255,207,61,0.45)" }, children: shownScore.toLocaleString() })] })] }), (0, jsx_runtime_1.jsx)("div", { style: { height: 15, marginBottom: 3, textAlign: "center", color: "#5A6A80", fontSize: 10.5, fontFamily: FM, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%", maxWidth: CW, flexShrink: 0, opacity: ann ? 1 : 0, transition: "opacity 0.25s" }, children: ann ? "\u{1F399} " + ann : "\u00A0" }), (0, jsx_runtime_1.jsx)("div", { style: { flex: "1 1 auto", minHeight: 0, marginBottom: 6, display: "flex", flexDirection: phase === "result" ? "column" : "row", justifyContent: "center", alignItems: "center", overflow: "hidden", width: "100%" }, children: phase === "result" && pitch ? ((0, jsx_runtime_1.jsxs)("div", { className: "bc-panel", style: { textAlign: "center", width: 268, maxWidth: "100%", maxHeight: "100%", minHeight: 0, flex: "0 1 auto", display: "flex", flexDirection: "column" }, children: [rMsg && rMsg.ev && (0, jsx_runtime_1.jsx)(EventBanner, { ev: rMsg.ev }), (0, jsx_runtime_1.jsxs)("div", { className: "bc-flash", style: { "--vc": ((rMsg && rMsg.c) || "#888"), flexShrink: 0, marginBottom: 9, padding: "11px 14px", borderRadius: 13, background: "linear-gradient(180deg,rgba(9,16,25,0.86),rgba(4,8,14,0.82))", border: "1px solid " + ((rMsg && rMsg.c) || "#888") + "66", borderLeft: "3px solid " + ((rMsg && rMsg.c) || "#888") }, children: [(0, jsx_runtime_1.jsx)("div", { className: "bc-stamp", style: { fontSize: 24, fontFamily: FD, letterSpacing: 1, lineHeight: 1.15, color: (rMsg && rMsg.c) || T.chalk, textShadow: "0 0 24px " + ((rMsg && rMsg.c) || "#888") + "77, 0 2px 0 rgba(0,0,0,0.55)" }, children: rMsg && rMsg.t }), (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { color: "#8A9AB0", fontSize: 12, fontFamily: FU, letterSpacing: 0.4, marginTop: 2, animationDelay: "120ms" }, children: rMsg && rMsg.s }), rMsg && rMsg.n && (rMsg.ev ? rMsg.n.replace(/^(STRIKE THREE \u2014 OUT|BALL FOUR \u2014 WALK)( \u2014 )?/, "") : rMsg.n) && (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { color: T.gold, fontSize: 10.5, marginTop: 5, fontWeight: 700, letterSpacing: 1.8, fontFamily: FM, animationDelay: "200ms" }, children: rMsg.ev ? rMsg.n.replace(/^(STRIKE THREE \u2014 OUT|BALL FOUR \u2014 WALK)( \u2014 )?/, "") : rMsg.n })] }), (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { color: T.faint, fontSize: 9, marginBottom: 5, letterSpacing: 2.5, fontFamily: FM, animationDelay: "90ms", flexShrink: 0 }, children: "STRIKE ZONE REPLAY" }), (0, jsx_runtime_1.jsx)("div", { className: "bc-panel", style: { animationDelay: "90ms", flex: "1 1 auto", minHeight: 0, display: "flex", flexDirection: "column", alignItems: "center" }, children: (0, jsx_runtime_1.jsx)(ZoneReplay, { pitch: pitch, swung: !!pitch.swing, check: !!pitch.check }) })] }, stats.total)) : phase === "fieldplay" && pitch ? ((0, jsx_runtime_1.jsx)(FieldView, { pitch: pitch, bases: gm.bases, outs: gm.outs, t: playProg, bat: curBat, kit: kit })) : ((0, jsx_runtime_1.jsx)(GameCanvas, { pitch: pitch, prog: prog, wPhase: wPh, kit: kit, count: daily ? null : gm.balls + "-" + gm.strikes })) }), (0, jsx_runtime_1.jsxs)("div", { style: { width: "100%", maxWidth: CW, flexShrink: 0 }, children: [phase === "deciding" && pitch && ((0, jsx_runtime_1.jsxs)("div", { style: { marginBottom: 8 }, children: [(0, jsx_runtime_1.jsx)(TimerBar, { left: tLeft, max: pitch.timer }), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center", color: "#A8B4C4", fontSize: 12, marginTop: 5, fontWeight: 700, fontFamily: FM, letterSpacing: 1.5 }, children: [pitch.check ? "DID HE GO?" : "MAKE THE CALL", " ", (0, jsx_runtime_1.jsxs)("span", { style: { color: T.dim }, children: [tLeft.toFixed(1), "s"] })] })] })), phase === "waiting" && (0, jsx_runtime_1.jsx)(Btn, { onClick: throwP, style: { width: "100%", padding: 18, background: "linear-gradient(135deg,#FFCF3D,#D4A010)", color: "#0A1018", fontSize: 18, boxShadow: "0 6px 24px rgba(255,207,61,0.24)" }, children: "Throw pitch" }), (phase === "windup" || phase === "pitching" || phase === "swingplay" || phase === "fieldplay") && (0, jsx_runtime_1.jsx)("div", { style: { textAlign: "center", padding: 17, color: T.faint, fontSize: 11, fontFamily: FM, letterSpacing: 2.5 }, children: phase === "pitching" ? "HERE IT COMES" : phase === "fieldplay" ? "THE PLAY IS ON" : "\u00A0" }), phase === "deciding" && ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: 11 }, children: [(0, jsx_runtime_1.jsx)(Btn, { onClick: function () { makeCall("ball"); }, style: { flex: 1, padding: "20px 0", background: "linear-gradient(160deg,#4A88F0,#1B47B8)", color: "#fff", fontSize: 21, letterSpacing: pitch && pitch.check ? 1 : 3.5, boxShadow: "0 6px 20px rgba(47,111,228,0.3), inset 0 1px 0 rgba(255,255,255,0.28)" }, children: pitch && pitch.check ? "No swing" : "Ball" }), (0, jsx_runtime_1.jsx)(Btn, { onClick: function () { makeCall("strike"); }, style: { flex: 1, padding: "20px 0", background: "linear-gradient(160deg,#F05252,#A81818)", color: "#fff", fontSize: 21, letterSpacing: pitch && pitch.check ? 1 : 3.5, boxShadow: "0 6px 20px rgba(224,59,59,0.3), inset 0 1px 0 rgba(255,255,255,0.28)" }, children: pitch && pitch.check ? "He went!" : "Strike" })] })), phase === "result" && !over && (0, jsx_runtime_1.jsx)(Btn, { onClick: throwP, style: { width: "100%", padding: 17, marginTop: 4, background: "linear-gradient(135deg,#FFCF3D,#D4A010)", color: "#0A1018", fontSize: 17, boxShadow: "0 6px 24px rgba(255,207,61,0.22)" }, children: "Next pitch" })] }), showTut && (0, jsx_runtime_1.jsx)(Tutorial, { onClose: function () { setShowTut(false); } })] }));
}

window.__Game = module.exports.default || module.exports;
})();
