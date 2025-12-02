import { q as qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-C8b325vj.js';
import { q as qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__, F, o as oe } from './qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__-Ddss5I0C.js';
import { q as qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__, M as Mi$1 } from './qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__-DNYH2Lwv.js';
import { R as R5, F as F5, x as x3, Z as Z4, V as V0, d as d4, a as a1, o as o2, J as J2, k as keyframes, w as withEmotionCache, C as C1, u as u4, T as ThemeContext, L as L2 } from './emotion-react.browser.esm-CmotHgrU.js';
import './qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__-C_RToFvF.js';
import './_commonjsHelpers-BFTU3MAI.js';

var define_process_env_default = {};
var O_ = Object.defineProperty;
var Md = (e2) => {
  throw TypeError(e2);
};
var A_ = (e2, r, n) => r in e2 ? O_(e2, r, { enumerable: true, configurable: true, writable: true, value: n }) : e2[r] = n;
var tt = (e2, r, n) => A_(e2, typeof r != "symbol" ? r + "" : r, n), Au = (e2, r, n) => r.has(e2) || Md("Cannot " + n);
var te = (e2, r, n) => (Au(e2, r, "read from private field"), n ? n.call(e2) : r.get(e2)), Pt = (e2, r, n) => r.has(e2) ? Md("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e2) : r.set(e2, n), Ve = (e2, r, n, o) => (Au(e2, r, "write to private field"), r.set(e2, n), n), Qr = (e2, r, n) => (Au(e2, r, "access private method"), n);
const j_ = ({ children: e2 }) => qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__.createPortal(e2, document.querySelector("body"));
var Id = function(r) {
  return r.reduce(function(n, o) {
    var a = o[0], u = o[1];
    return n[a] = u, n;
  }, {});
}, Ld = typeof window < "u" && window.document && window.document.createElement ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useLayoutEffect : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect, Ct = "top", er = "bottom", tr = "right", Rt = "left", Ml = "auto", vo = [Ct, er, tr, Rt], ai = "start", uo = "end", q_ = "clippingParents", qh = "viewport", Ri = "popper", Z_ = "reference", Fd = /* @__PURE__ */ vo.reduce(function(e2, r) {
  return e2.concat([r + "-" + ai, r + "-" + uo]);
}, []), Zh = /* @__PURE__ */ [].concat(vo, [Ml]).reduce(function(e2, r) {
  return e2.concat([r, r + "-" + ai, r + "-" + uo]);
}, []), K_ = "beforeRead", G_ = "read", V_ = "afterRead", Y_ = "beforeMain", X_ = "main", J_ = "afterMain", Q_ = "beforeWrite", eE = "write", tE = "afterWrite", rE = [K_, G_, V_, Y_, X_, J_, Q_, eE, tE];
function _r(e2) {
  return e2 ? (e2.nodeName || "").toLowerCase() : null;
}
function Wt(e2) {
  if (e2 == null)
    return window;
  if (e2.toString() !== "[object Window]") {
    var r = e2.ownerDocument;
    return r && r.defaultView || window;
  }
  return e2;
}
function Mn(e2) {
  var r = Wt(e2).Element;
  return e2 instanceof r || e2 instanceof Element;
}
function Qt(e2) {
  var r = Wt(e2).HTMLElement;
  return e2 instanceof r || e2 instanceof HTMLElement;
}
function Il(e2) {
  if (typeof ShadowRoot > "u")
    return false;
  var r = Wt(e2).ShadowRoot;
  return e2 instanceof r || e2 instanceof ShadowRoot;
}
function nE(e2) {
  var r = e2.state;
  Object.keys(r.elements).forEach(function(n) {
    var o = r.styles[n] || {}, a = r.attributes[n] || {}, u = r.elements[n];
    !Qt(u) || !_r(u) || (Object.assign(u.style, o), Object.keys(a).forEach(function(f) {
      var d = a[f];
      d === false ? u.removeAttribute(f) : u.setAttribute(f, d === true ? "" : d);
    }));
  });
}
function iE(e2) {
  var r = e2.state, n = {
    popper: {
      position: r.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(r.elements.popper.style, n.popper), r.styles = n, r.elements.arrow && Object.assign(r.elements.arrow.style, n.arrow), function() {
    Object.keys(r.elements).forEach(function(o) {
      var a = r.elements[o], u = r.attributes[o] || {}, f = Object.keys(r.styles.hasOwnProperty(o) ? r.styles[o] : n[o]), d = f.reduce(function(w, S) {
        return w[S] = "", w;
      }, {});
      !Qt(a) || !_r(a) || (Object.assign(a.style, d), Object.keys(u).forEach(function(w) {
        a.removeAttribute(w);
      }));
    });
  };
}
const oE = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: nE,
  effect: iE,
  requires: ["computeStyles"]
};
function Sr(e2) {
  return e2.split("-")[0];
}
var Cn = Math.max, Na = Math.min, si = Math.round;
function dl() {
  var e2 = navigator.userAgentData;
  return e2 != null && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function Kh() {
  return !/^((?!chrome|android).)*safari/i.test(dl());
}
function ui(e2, r, n) {
  r === void 0 && (r = false), n === void 0 && (n = false);
  var o = e2.getBoundingClientRect(), a = 1, u = 1;
  r && Qt(e2) && (a = e2.offsetWidth > 0 && si(o.width) / e2.offsetWidth || 1, u = e2.offsetHeight > 0 && si(o.height) / e2.offsetHeight || 1);
  var f = Mn(e2) ? Wt(e2) : window, d = f.visualViewport, w = !Kh() && n, S = (o.left + (w && d ? d.offsetLeft : 0)) / a, y = (o.top + (w && d ? d.offsetTop : 0)) / u, h = o.width / a, l = o.height / u;
  return {
    width: h,
    height: l,
    top: y,
    right: S + h,
    bottom: y + l,
    left: S,
    x: S,
    y
  };
}
function Ll(e2) {
  var r = ui(e2), n = e2.offsetWidth, o = e2.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - o) <= 1 && (o = r.height), {
    x: e2.offsetLeft,
    y: e2.offsetTop,
    width: n,
    height: o
  };
}
function Gh(e2, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e2.contains(r))
    return true;
  if (n && Il(n)) {
    var o = r;
    do {
      if (o && e2.isSameNode(o))
        return true;
      o = o.parentNode || o.host;
    } while (o);
  }
  return false;
}
function Wr(e2) {
  return Wt(e2).getComputedStyle(e2);
}
function aE(e2) {
  return ["table", "td", "th"].indexOf(_r(e2)) >= 0;
}
function fn(e2) {
  return ((Mn(e2) ? e2.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e2.document
  )) || window.document).documentElement;
}
function Za(e2) {
  return _r(e2) === "html" ? e2 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e2.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e2.parentNode || // DOM Element detected
    (Il(e2) ? e2.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fn(e2)
  );
}
function $d(e2) {
  return !Qt(e2) || // https://github.com/popperjs/popper-core/issues/837
  Wr(e2).position === "fixed" ? null : e2.offsetParent;
}
function sE(e2) {
  var r = /firefox/i.test(dl()), n = /Trident/i.test(dl());
  if (n && Qt(e2)) {
    var o = Wr(e2);
    if (o.position === "fixed")
      return null;
  }
  var a = Za(e2);
  for (Il(a) && (a = a.host); Qt(a) && ["html", "body"].indexOf(_r(a)) < 0; ) {
    var u = Wr(a);
    if (u.transform !== "none" || u.perspective !== "none" || u.contain === "paint" || ["transform", "perspective"].indexOf(u.willChange) !== -1 || r && u.willChange === "filter" || r && u.filter && u.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function mo(e2) {
  for (var r = Wt(e2), n = $d(e2); n && aE(n) && Wr(n).position === "static"; )
    n = $d(n);
  return n && (_r(n) === "html" || _r(n) === "body" && Wr(n).position === "static") ? r : n || sE(e2) || r;
}
function Fl(e2) {
  return ["top", "bottom"].indexOf(e2) >= 0 ? "x" : "y";
}
function oo(e2, r, n) {
  return Cn(e2, Na(r, n));
}
function uE(e2, r, n) {
  var o = oo(e2, r, n);
  return o > n ? n : o;
}
function Vh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Yh(e2) {
  return Object.assign({}, Vh(), e2);
}
function Xh(e2, r) {
  return r.reduce(function(n, o) {
    return n[o] = e2, n;
  }, {});
}
var lE = function(r, n) {
  return r = typeof r == "function" ? r(Object.assign({}, n.rects, {
    placement: n.placement
  })) : r, Yh(typeof r != "number" ? r : Xh(r, vo));
};
function fE(e2) {
  var r, n = e2.state, o = e2.name, a = e2.options, u = n.elements.arrow, f = n.modifiersData.popperOffsets, d = Sr(n.placement), w = Fl(d), S = [Rt, tr].indexOf(d) >= 0, y = S ? "height" : "width";
  if (!(!u || !f)) {
    var h = lE(a.padding, n), l = Ll(u), p = w === "y" ? Ct : Rt, m = w === "y" ? er : tr, c = n.rects.reference[y] + n.rects.reference[w] - f[w] - n.rects.popper[y], g = f[w] - n.rects.reference[w], b = mo(u), E = b ? w === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, x = c / 2 - g / 2, P = h[p], T = E - l[y] - h[m], M = E / 2 - l[y] / 2 + x, B = oo(P, M, T), F = w;
    n.modifiersData[o] = (r = {}, r[F] = B, r.centerOffset = B - M, r);
  }
}
function cE(e2) {
  var r = e2.state, n = e2.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = r.elements.popper.querySelector(a), !a) || Gh(r.elements.popper, a) && (r.elements.arrow = a));
}
const dE = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: fE,
  effect: cE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function li(e2) {
  return e2.split("-")[1];
}
var pE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function hE(e2, r) {
  var n = e2.x, o = e2.y, a = r.devicePixelRatio || 1;
  return {
    x: si(n * a) / a || 0,
    y: si(o * a) / a || 0
  };
}
function Dd(e2) {
  var r, n = e2.popper, o = e2.popperRect, a = e2.placement, u = e2.variation, f = e2.offsets, d = e2.position, w = e2.gpuAcceleration, S = e2.adaptive, y = e2.roundOffsets, h = e2.isFixed, l = f.x, p = l === void 0 ? 0 : l, m = f.y, c = m === void 0 ? 0 : m, g = typeof y == "function" ? y({
    x: p,
    y: c
  }) : {
    x: p,
    y: c
  };
  p = g.x, c = g.y;
  var b = f.hasOwnProperty("x"), E = f.hasOwnProperty("y"), x = Rt, P = Ct, T = window;
  if (S) {
    var M = mo(n), B = "clientHeight", F = "clientWidth";
    if (M === Wt(n) && (M = fn(n), Wr(M).position !== "static" && d === "absolute" && (B = "scrollHeight", F = "scrollWidth")), M = M, a === Ct || (a === Rt || a === tr) && u === uo) {
      P = er;
      var k = h && M === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[B]
      );
      c -= k - o.height, c *= w ? 1 : -1;
    }
    if (a === Rt || (a === Ct || a === er) && u === uo) {
      x = tr;
      var Y = h && M === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[F]
      );
      p -= Y - o.width, p *= w ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: d
  }, S && pE), L = y === true ? hE({
    x: p,
    y: c
  }, Wt(n)) : {
    x: p,
    y: c
  };
  if (p = L.x, c = L.y, w) {
    var U;
    return Object.assign({}, W, (U = {}, U[P] = E ? "0" : "", U[x] = b ? "0" : "", U.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + c + "px)" : "translate3d(" + p + "px, " + c + "px, 0)", U));
  }
  return Object.assign({}, W, (r = {}, r[P] = E ? c + "px" : "", r[x] = b ? p + "px" : "", r.transform = "", r));
}
function vE(e2) {
  var r = e2.state, n = e2.options, o = n.gpuAcceleration, a = o === void 0 ? true : o, u = n.adaptive, f = u === void 0 ? true : u, d = n.roundOffsets, w = d === void 0 ? true : d, S = {
    placement: Sr(r.placement),
    variation: li(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: a,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Dd(Object.assign({}, S, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: f,
    roundOffsets: w
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Dd(Object.assign({}, S, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: w
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const mE = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: vE,
  data: {}
};
var ca = {
  passive: true
};
function gE(e2) {
  var r = e2.state, n = e2.instance, o = e2.options, a = o.scroll, u = a === void 0 ? true : a, f = o.resize, d = f === void 0 ? true : f, w = Wt(r.elements.popper), S = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return u && S.forEach(function(y) {
    y.addEventListener("scroll", n.update, ca);
  }), d && w.addEventListener("resize", n.update, ca), function() {
    u && S.forEach(function(y) {
      y.removeEventListener("scroll", n.update, ca);
    }), d && w.removeEventListener("resize", n.update, ca);
  };
}
const yE = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: gE,
  data: {}
};
var wE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ra(e2) {
  return e2.replace(/left|right|bottom|top/g, function(r) {
    return wE[r];
  });
}
var bE = {
  start: "end",
  end: "start"
};
function Nd(e2) {
  return e2.replace(/start|end/g, function(r) {
    return bE[r];
  });
}
function $l(e2) {
  var r = Wt(e2), n = r.pageXOffset, o = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: o
  };
}
function Dl(e2) {
  return ui(fn(e2)).left + $l(e2).scrollLeft;
}
function SE(e2, r) {
  var n = Wt(e2), o = fn(e2), a = n.visualViewport, u = o.clientWidth, f = o.clientHeight, d = 0, w = 0;
  if (a) {
    u = a.width, f = a.height;
    var S = Kh();
    (S || !S && r === "fixed") && (d = a.offsetLeft, w = a.offsetTop);
  }
  return {
    width: u,
    height: f,
    x: d + Dl(e2),
    y: w
  };
}
function _E(e2) {
  var r, n = fn(e2), o = $l(e2), a = (r = e2.ownerDocument) == null ? void 0 : r.body, u = Cn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), f = Cn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), d = -o.scrollLeft + Dl(e2), w = -o.scrollTop;
  return Wr(a || n).direction === "rtl" && (d += Cn(n.clientWidth, a ? a.clientWidth : 0) - u), {
    width: u,
    height: f,
    x: d,
    y: w
  };
}
function Nl(e2) {
  var r = Wr(e2), n = r.overflow, o = r.overflowX, a = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function Jh(e2) {
  return ["html", "body", "#document"].indexOf(_r(e2)) >= 0 ? e2.ownerDocument.body : Qt(e2) && Nl(e2) ? e2 : Jh(Za(e2));
}
function ao(e2, r) {
  var n;
  r === void 0 && (r = []);
  var o = Jh(e2), a = o === ((n = e2.ownerDocument) == null ? void 0 : n.body), u = Wt(o), f = a ? [u].concat(u.visualViewport || [], Nl(o) ? o : []) : o, d = r.concat(f);
  return a ? d : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    d.concat(ao(Za(f)))
  );
}
function pl(e2) {
  return Object.assign({}, e2, {
    left: e2.x,
    top: e2.y,
    right: e2.x + e2.width,
    bottom: e2.y + e2.height
  });
}
function EE(e2, r) {
  var n = ui(e2, false, r === "fixed");
  return n.top = n.top + e2.clientTop, n.left = n.left + e2.clientLeft, n.bottom = n.top + e2.clientHeight, n.right = n.left + e2.clientWidth, n.width = e2.clientWidth, n.height = e2.clientHeight, n.x = n.left, n.y = n.top, n;
}
function kd(e2, r, n) {
  return r === qh ? pl(SE(e2, n)) : Mn(r) ? EE(r, n) : pl(_E(fn(e2)));
}
function xE(e2) {
  var r = ao(Za(e2)), n = ["absolute", "fixed"].indexOf(Wr(e2).position) >= 0, o = n && Qt(e2) ? mo(e2) : e2;
  return Mn(o) ? r.filter(function(a) {
    return Mn(a) && Gh(a, o) && _r(a) !== "body";
  }) : [];
}
function OE(e2, r, n, o) {
  var a = r === "clippingParents" ? xE(e2) : [].concat(r), u = [].concat(a, [n]), f = u[0], d = u.reduce(function(w, S) {
    var y = kd(e2, S, o);
    return w.top = Cn(y.top, w.top), w.right = Na(y.right, w.right), w.bottom = Na(y.bottom, w.bottom), w.left = Cn(y.left, w.left), w;
  }, kd(e2, f, o));
  return d.width = d.right - d.left, d.height = d.bottom - d.top, d.x = d.left, d.y = d.top, d;
}
function Qh(e2) {
  var r = e2.reference, n = e2.element, o = e2.placement, a = o ? Sr(o) : null, u = o ? li(o) : null, f = r.x + r.width / 2 - n.width / 2, d = r.y + r.height / 2 - n.height / 2, w;
  switch (a) {
    case Ct:
      w = {
        x: f,
        y: r.y - n.height
      };
      break;
    case er:
      w = {
        x: f,
        y: r.y + r.height
      };
      break;
    case tr:
      w = {
        x: r.x + r.width,
        y: d
      };
      break;
    case Rt:
      w = {
        x: r.x - n.width,
        y: d
      };
      break;
    default:
      w = {
        x: r.x,
        y: r.y
      };
  }
  var S = a ? Fl(a) : null;
  if (S != null) {
    var y = S === "y" ? "height" : "width";
    switch (u) {
      case ai:
        w[S] = w[S] - (r[y] / 2 - n[y] / 2);
        break;
      case uo:
        w[S] = w[S] + (r[y] / 2 - n[y] / 2);
        break;
    }
  }
  return w;
}
function lo(e2, r) {
  r === void 0 && (r = {});
  var n = r, o = n.placement, a = o === void 0 ? e2.placement : o, u = n.strategy, f = u === void 0 ? e2.strategy : u, d = n.boundary, w = d === void 0 ? q_ : d, S = n.rootBoundary, y = S === void 0 ? qh : S, h = n.elementContext, l = h === void 0 ? Ri : h, p = n.altBoundary, m = p === void 0 ? false : p, c = n.padding, g = c === void 0 ? 0 : c, b = Yh(typeof g != "number" ? g : Xh(g, vo)), E = l === Ri ? Z_ : Ri, x = e2.rects.popper, P = e2.elements[m ? E : l], T = OE(Mn(P) ? P : P.contextElement || fn(e2.elements.popper), w, y, f), M = ui(e2.elements.reference), B = Qh({
    reference: M,
    element: x,
    placement: a
  }), F = pl(Object.assign({}, x, B)), k = l === Ri ? F : M, Y = {
    top: T.top - k.top + b.top,
    bottom: k.bottom - T.bottom + b.bottom,
    left: T.left - k.left + b.left,
    right: k.right - T.right + b.right
  }, W = e2.modifiersData.offset;
  if (l === Ri && W) {
    var L = W[a];
    Object.keys(Y).forEach(function(U) {
      var H = [tr, er].indexOf(U) >= 0 ? 1 : -1, R = [Ct, er].indexOf(U) >= 0 ? "y" : "x";
      Y[U] += L[R] * H;
    });
  }
  return Y;
}
function AE(e2, r) {
  r === void 0 && (r = {});
  var n = r, o = n.placement, a = n.boundary, u = n.rootBoundary, f = n.padding, d = n.flipVariations, w = n.allowedAutoPlacements, S = w === void 0 ? Zh : w, y = li(o), h = y ? d ? Fd : Fd.filter(function(m) {
    return li(m) === y;
  }) : vo, l = h.filter(function(m) {
    return S.indexOf(m) >= 0;
  });
  l.length === 0 && (l = h);
  var p = l.reduce(function(m, c) {
    return m[c] = lo(e2, {
      placement: c,
      boundary: a,
      rootBoundary: u,
      padding: f
    })[Sr(c)], m;
  }, {});
  return Object.keys(p).sort(function(m, c) {
    return p[m] - p[c];
  });
}
function TE(e2) {
  if (Sr(e2) === Ml)
    return [];
  var r = Ra(e2);
  return [Nd(e2), r, Nd(r)];
}
function PE(e2) {
  var r = e2.state, n = e2.options, o = e2.name;
  if (!r.modifiersData[o]._skip) {
    for (var a = n.mainAxis, u = a === void 0 ? true : a, f = n.altAxis, d = f === void 0 ? true : f, w = n.fallbackPlacements, S = n.padding, y = n.boundary, h = n.rootBoundary, l = n.altBoundary, p = n.flipVariations, m = p === void 0 ? true : p, c = n.allowedAutoPlacements, g = r.options.placement, b = Sr(g), E = b === g, x = w || (E || !m ? [Ra(g)] : TE(g)), P = [g].concat(x).reduce(function(ie, fe) {
      return ie.concat(Sr(fe) === Ml ? AE(r, {
        placement: fe,
        boundary: y,
        rootBoundary: h,
        padding: S,
        flipVariations: m,
        allowedAutoPlacements: c
      }) : fe);
    }, []), T = r.rects.reference, M = r.rects.popper, B = /* @__PURE__ */ new Map(), F = true, k = P[0], Y = 0; Y < P.length; Y++) {
      var W = P[Y], L = Sr(W), U = li(W) === ai, H = [Ct, er].indexOf(L) >= 0, R = H ? "width" : "height", X = lo(r, {
        placement: W,
        boundary: y,
        rootBoundary: h,
        altBoundary: l,
        padding: S
      }), G = H ? U ? tr : Rt : U ? er : Ct;
      T[R] > M[R] && (G = Ra(G));
      var ee = Ra(G), ue = [];
      if (u && ue.push(X[L] <= 0), d && ue.push(X[G] <= 0, X[ee] <= 0), ue.every(function(ie) {
        return ie;
      })) {
        k = W, F = false;
        break;
      }
      B.set(W, ue);
    }
    if (F)
      for (var j = m ? 3 : 1, Q = function(fe) {
        var de = P.find(function(ge) {
          var me = B.get(ge);
          if (me)
            return me.slice(0, fe).every(function(_e) {
              return _e;
            });
        });
        if (de)
          return k = de, "break";
      }, oe = j; oe > 0; oe--) {
        var le = Q(oe);
        if (le === "break") break;
      }
    r.placement !== k && (r.modifiersData[o]._skip = true, r.placement = k, r.reset = true);
  }
}
const CE = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: PE,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function Wd(e2, r, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e2.top - r.height - n.y,
    right: e2.right - r.width + n.x,
    bottom: e2.bottom - r.height + n.y,
    left: e2.left - r.width - n.x
  };
}
function Ud(e2) {
  return [Ct, tr, er, Rt].some(function(r) {
    return e2[r] >= 0;
  });
}
function RE(e2) {
  var r = e2.state, n = e2.name, o = r.rects.reference, a = r.rects.popper, u = r.modifiersData.preventOverflow, f = lo(r, {
    elementContext: "reference"
  }), d = lo(r, {
    altBoundary: true
  }), w = Wd(f, o), S = Wd(d, a, u), y = Ud(w), h = Ud(S);
  r.modifiersData[n] = {
    referenceClippingOffsets: w,
    popperEscapeOffsets: S,
    isReferenceHidden: y,
    hasPopperEscaped: h
  }, r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-reference-hidden": y,
    "data-popper-escaped": h
  });
}
const ME = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: RE
};
function IE(e2, r, n) {
  var o = Sr(e2), a = [Rt, Ct].indexOf(o) >= 0 ? -1 : 1, u = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e2
  })) : n, f = u[0], d = u[1];
  return f = f || 0, d = (d || 0) * a, [Rt, tr].indexOf(o) >= 0 ? {
    x: d,
    y: f
  } : {
    x: f,
    y: d
  };
}
function LE(e2) {
  var r = e2.state, n = e2.options, o = e2.name, a = n.offset, u = a === void 0 ? [0, 0] : a, f = Zh.reduce(function(y, h) {
    return y[h] = IE(h, r.rects, u), y;
  }, {}), d = f[r.placement], w = d.x, S = d.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += w, r.modifiersData.popperOffsets.y += S), r.modifiersData[o] = f;
}
const FE = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: LE
};
function $E(e2) {
  var r = e2.state, n = e2.name;
  r.modifiersData[n] = Qh({
    reference: r.rects.reference,
    element: r.rects.popper,
    placement: r.placement
  });
}
const DE = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: $E,
  data: {}
};
function NE(e2) {
  return e2 === "x" ? "y" : "x";
}
function kE(e2) {
  var r = e2.state, n = e2.options, o = e2.name, a = n.mainAxis, u = a === void 0 ? true : a, f = n.altAxis, d = f === void 0 ? false : f, w = n.boundary, S = n.rootBoundary, y = n.altBoundary, h = n.padding, l = n.tether, p = l === void 0 ? true : l, m = n.tetherOffset, c = m === void 0 ? 0 : m, g = lo(r, {
    boundary: w,
    rootBoundary: S,
    padding: h,
    altBoundary: y
  }), b = Sr(r.placement), E = li(r.placement), x = !E, P = Fl(b), T = NE(P), M = r.modifiersData.popperOffsets, B = r.rects.reference, F = r.rects.popper, k = typeof c == "function" ? c(Object.assign({}, r.rects, {
    placement: r.placement
  })) : c, Y = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), W = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (M) {
    if (u) {
      var U, H = P === "y" ? Ct : Rt, R = P === "y" ? er : tr, X = P === "y" ? "height" : "width", G = M[P], ee = G + g[H], ue = G - g[R], j = p ? -F[X] / 2 : 0, Q = E === ai ? B[X] : F[X], oe = E === ai ? -F[X] : -B[X], le = r.elements.arrow, ie = p && le ? Ll(le) : {
        width: 0,
        height: 0
      }, fe = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : Vh(), de = fe[H], ge = fe[R], me = oo(0, B[X], ie[X]), _e = x ? B[X] / 2 - j - me - de - Y.mainAxis : Q - me - de - Y.mainAxis, Oe = x ? -B[X] / 2 + j + me + ge + Y.mainAxis : oe + me + ge + Y.mainAxis, Be = r.elements.arrow && mo(r.elements.arrow), re = Be ? P === "y" ? Be.clientTop || 0 : Be.clientLeft || 0 : 0, ht = (U = W == null ? void 0 : W[P]) != null ? U : 0, ot = G + _e - ht - re, cr = G + Oe - ht, bo = oo(p ? Na(ee, ot) : ee, G, p ? Cn(ue, cr) : ue);
      M[P] = bo, L[P] = bo - G;
    }
    if (d) {
      var Ut, So = P === "x" ? Ct : Rt, is = P === "x" ? er : tr, Mt = M[T], vt = T === "y" ? "height" : "width", zr = Mt + g[So], dn = Mt - g[is], hi = [Ct, Rt].indexOf(b) !== -1, Br = (Ut = W == null ? void 0 : W[T]) != null ? Ut : 0, _o = hi ? zr : Mt - B[vt] - F[vt] - Br + Y.altAxis, Hr = hi ? Mt + B[vt] + F[vt] - Br - Y.altAxis : dn, xr = p && hi ? uE(_o, Mt, Hr) : oo(p ? _o : zr, Mt, p ? Hr : dn);
      M[T] = xr, L[T] = xr - Mt;
    }
    r.modifiersData[o] = L;
  }
}
const WE = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: kE,
  requiresIfExists: ["offset"]
};
function UE(e2) {
  return {
    scrollLeft: e2.scrollLeft,
    scrollTop: e2.scrollTop
  };
}
function zE(e2) {
  return e2 === Wt(e2) || !Qt(e2) ? $l(e2) : UE(e2);
}
function BE(e2) {
  var r = e2.getBoundingClientRect(), n = si(r.width) / e2.offsetWidth || 1, o = si(r.height) / e2.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function HE(e2, r, n) {
  n === void 0 && (n = false);
  var o = Qt(r), a = Qt(r) && BE(r), u = fn(r), f = ui(e2, a, n), d = {
    scrollLeft: 0,
    scrollTop: 0
  }, w = {
    x: 0,
    y: 0
  };
  return (o || !o && !n) && ((_r(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Nl(u)) && (d = zE(r)), Qt(r) ? (w = ui(r, true), w.x += r.clientLeft, w.y += r.clientTop) : u && (w.x = Dl(u))), {
    x: f.left + d.scrollLeft - w.x,
    y: f.top + d.scrollTop - w.y,
    width: f.width,
    height: f.height
  };
}
function jE(e2) {
  var r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e2.forEach(function(u) {
    r.set(u.name, u);
  });
  function a(u) {
    n.add(u.name);
    var f = [].concat(u.requires || [], u.requiresIfExists || []);
    f.forEach(function(d) {
      if (!n.has(d)) {
        var w = r.get(d);
        w && a(w);
      }
    }), o.push(u);
  }
  return e2.forEach(function(u) {
    n.has(u.name) || a(u);
  }), o;
}
function qE(e2) {
  var r = jE(e2);
  return rE.reduce(function(n, o) {
    return n.concat(r.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function ZE(e2) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e2());
      });
    })), r;
  };
}
function KE(e2) {
  var r = e2.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, {
      options: Object.assign({}, a.options, o.options),
      data: Object.assign({}, a.data, o.data)
    }) : o, n;
  }, {});
  return Object.keys(r).map(function(n) {
    return r[n];
  });
}
var zd = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Bd() {
  for (var e2 = arguments.length, r = new Array(e2), n = 0; n < e2; n++)
    r[n] = arguments[n];
  return !r.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function GE(e2) {
  e2 === void 0 && (e2 = {});
  var r = e2, n = r.defaultModifiers, o = n === void 0 ? [] : n, a = r.defaultOptions, u = a === void 0 ? zd : a;
  return function(d, w, S) {
    S === void 0 && (S = u);
    var y = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zd, u),
      modifiersData: {},
      elements: {
        reference: d,
        popper: w
      },
      attributes: {},
      styles: {}
    }, h = [], l = false, p = {
      state: y,
      setOptions: function(b) {
        var E = typeof b == "function" ? b(y.options) : b;
        c(), y.options = Object.assign({}, u, y.options, E), y.scrollParents = {
          reference: Mn(d) ? ao(d) : d.contextElement ? ao(d.contextElement) : [],
          popper: ao(w)
        };
        var x = qE(KE([].concat(o, y.options.modifiers)));
        return y.orderedModifiers = x.filter(function(P) {
          return P.enabled;
        }), m(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!l) {
          var b = y.elements, E = b.reference, x = b.popper;
          if (Bd(E, x)) {
            y.rects = {
              reference: HE(E, mo(x), y.options.strategy === "fixed"),
              popper: Ll(x)
            }, y.reset = false, y.placement = y.options.placement, y.orderedModifiers.forEach(function(Y) {
              return y.modifiersData[Y.name] = Object.assign({}, Y.data);
            });
            for (var P = 0; P < y.orderedModifiers.length; P++) {
              if (y.reset === true) {
                y.reset = false, P = -1;
                continue;
              }
              var T = y.orderedModifiers[P], M = T.fn, B = T.options, F = B === void 0 ? {} : B, k = T.name;
              typeof M == "function" && (y = M({
                state: y,
                options: F,
                name: k,
                instance: p
              }) || y);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ZE(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(y);
        });
      }),
      destroy: function() {
        c(), l = true;
      }
    };
    if (!Bd(d, w))
      return p;
    p.setOptions(S).then(function(g) {
      !l && S.onFirstUpdate && S.onFirstUpdate(g);
    });
    function m() {
      y.orderedModifiers.forEach(function(g) {
        var b = g.name, E = g.options, x = E === void 0 ? {} : E, P = g.effect;
        if (typeof P == "function") {
          var T = P({
            state: y,
            name: b,
            instance: p,
            options: x
          }), M = function() {
          };
          h.push(T || M);
        }
      });
    }
    function c() {
      h.forEach(function(g) {
        return g();
      }), h = [];
    }
    return p;
  };
}
var VE = [yE, DE, mE, oE, FE, CE, WE, dE, ME], YE = /* @__PURE__ */ GE({
  defaultModifiers: VE
}), da = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ev(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var Pu, Hd;
function XE() {
  if (Hd) return Pu;
  Hd = 1;
  var e2 = typeof Element < "u", r = typeof Map == "function", n = typeof Set == "function", o = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(u, f) {
    if (u === f) return true;
    if (u && f && typeof u == "object" && typeof f == "object") {
      if (u.constructor !== f.constructor) return false;
      var d, w, S;
      if (Array.isArray(u)) {
        if (d = u.length, d != f.length) return false;
        for (w = d; w-- !== 0; )
          if (!a(u[w], f[w])) return false;
        return true;
      }
      var y;
      if (r && u instanceof Map && f instanceof Map) {
        if (u.size !== f.size) return false;
        for (y = u.entries(); !(w = y.next()).done; )
          if (!f.has(w.value[0])) return false;
        for (y = u.entries(); !(w = y.next()).done; )
          if (!a(w.value[1], f.get(w.value[0]))) return false;
        return true;
      }
      if (n && u instanceof Set && f instanceof Set) {
        if (u.size !== f.size) return false;
        for (y = u.entries(); !(w = y.next()).done; )
          if (!f.has(w.value[0])) return false;
        return true;
      }
      if (o && ArrayBuffer.isView(u) && ArrayBuffer.isView(f)) {
        if (d = u.length, d != f.length) return false;
        for (w = d; w-- !== 0; )
          if (u[w] !== f[w]) return false;
        return true;
      }
      if (u.constructor === RegExp) return u.source === f.source && u.flags === f.flags;
      if (u.valueOf !== Object.prototype.valueOf && typeof u.valueOf == "function" && typeof f.valueOf == "function") return u.valueOf() === f.valueOf();
      if (u.toString !== Object.prototype.toString && typeof u.toString == "function" && typeof f.toString == "function") return u.toString() === f.toString();
      if (S = Object.keys(u), d = S.length, d !== Object.keys(f).length) return false;
      for (w = d; w-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(f, S[w])) return false;
      if (e2 && u instanceof Element) return false;
      for (w = d; w-- !== 0; )
        if (!((S[w] === "_owner" || S[w] === "__v" || S[w] === "__o") && u.$$typeof) && !a(u[S[w]], f[S[w]]))
          return false;
      return true;
    }
    return u !== u && f !== f;
  }
  return Pu = function(f, d) {
    try {
      return a(f, d);
    } catch (w) {
      if ((w.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw w;
    }
  }, Pu;
}
var JE = XE();
const QE = /* @__PURE__ */ ev(JE);
var ex = [], tv = function(r, n, o) {
  o === void 0 && (o = {});
  var a = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), u = {
    onFirstUpdate: o.onFirstUpdate,
    placement: o.placement || "bottom",
    strategy: o.strategy || "absolute",
    modifiers: o.modifiers || ex
  }, f = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState({
    styles: {
      popper: {
        position: u.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), d = f[0], w = f[1], S = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function(p) {
        var m = p.state, c = Object.keys(m.elements);
        qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__.flushSync(function() {
          w({
            styles: Id(c.map(function(g) {
              return [g, m.styles[g] || {}];
            })),
            attributes: Id(c.map(function(g) {
              return [g, m.attributes[g]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), y = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(function() {
    var l = {
      onFirstUpdate: u.onFirstUpdate,
      placement: u.placement,
      strategy: u.strategy,
      modifiers: [].concat(u.modifiers, [S, {
        name: "applyStyles",
        enabled: false
      }])
    };
    return QE(a.current, l) ? a.current || l : (a.current = l, l);
  }, [u.onFirstUpdate, u.placement, u.strategy, u.modifiers, S]), h = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef();
  return Ld(function() {
    h.current && h.current.setOptions(y);
  }, [y]), Ld(function() {
    if (!(r == null || n == null)) {
      var l = o.createPopper || YE, p = l(r, n, y);
      return h.current = p, function() {
        p.destroy(), h.current = null;
      };
    }
  }, [r, n, o.createPopper]), {
    state: h.current ? h.current.state : null,
    styles: d.styles,
    attributes: d.attributes,
    update: h.current ? h.current.update : null,
    forceUpdate: h.current ? h.current.forceUpdate : null
  };
};
const tx = (e2) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 z-[1999]", onClick: e2.onClick }), rx = F.forwardRef(({ children: e2, style: r, attributes: n }, o) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: {
      ...r,
      zIndex: 2e3
    },
    ...n,
    ref: o,
    className: "w-60 rounded border rounded border border-grey-50 bg-grey-900 shadow-2xl",
    "data-cy": "dialogBody",
    children: e2
  }
)), dM = ({
  referenceElement: e2,
  placement: r,
  isOpen: n,
  children: o,
  onClose: a
}) => {
  const [u, f] = F.useState(null), { styles: d, attributes: w } = tv(e2, u, {
    placement: r || "bottom-start"
  }), S = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(() => {
    a && a();
  }, [a]);
  return n ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(j_, { children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(tx, { onClick: () => S() }),
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      rx,
      {
        ref: f,
        style: d.popper,
        attributes: w.popper,
        children: o
      }
    )
  ] }) : null;
};
var Cu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var jd;
function rv() {
  return jd || (jd = 1, (function(e2) {
    (function() {
      var r = {}.hasOwnProperty;
      function n() {
        for (var u = "", f = 0; f < arguments.length; f++) {
          var d = arguments[f];
          d && (u = a(u, o(d)));
        }
        return u;
      }
      function o(u) {
        if (typeof u == "string" || typeof u == "number")
          return u;
        if (typeof u != "object")
          return "";
        if (Array.isArray(u))
          return n.apply(null, u);
        if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
          return u.toString();
        var f = "";
        for (var d in u)
          r.call(u, d) && u[d] && (f = a(f, d));
        return f;
      }
      function a(u, f) {
        return f ? u ? u + " " + f : u + f : u;
      }
      e2.exports ? (n.default = n, e2.exports = n) : window.classNames = n;
    })();
  })(Cu)), Cu.exports;
}
var nx = rv();
const Je = /* @__PURE__ */ ev(nx);
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e2[o] = n[o]);
    }
    return e2;
  }, xn.apply(this, arguments);
}
const ix = ["children", "options"], ve = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" };
var qd;
(function(e2) {
  e2[e2.MAX = 0] = "MAX", e2[e2.HIGH = 1] = "HIGH", e2[e2.MED = 2] = "MED", e2[e2.LOW = 3] = "LOW", e2[e2.MIN = 4] = "MIN";
})(qd || (qd = {}));
const Zd = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e2, r) => (e2[r.toLowerCase()] = r, e2), { class: "className", for: "htmlFor" }), Kd = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, ox = ["style", "script"], ax = ["src", "href", "data", "formAction", "srcDoc", "action"], sx = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, ux = /mailto:/i, lx = /\n{2,}$/, nv = /^(\s*>[\s\S]*?)(?=\n\n|$)/, fx = /^ *> ?/gm, cx = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, dx = /^ {2,}\n/, px = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, iv = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, ov = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, hx = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, vx = /^(?:\n *)*\n/, mx = /\r\n?/g, gx = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, yx = /^\[\^([^\]]+)]/, wx = /\f/g, bx = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, Sx = /^\s*?\[(x|\s)\]/, av = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, sv = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, uv = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, hl = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, _x = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, lv = /^<!--[\s\S]*?(?:-->)/, Ex = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, vl = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, xx = /^\{.*\}$/, Ox = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Ax = /^<([^ >]+@[^ >]+)>/, Tx = /^<([^ >]+:\/[^ >]+)>/, Px = /-([a-z])?/gi, fv = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, Cx = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Rx = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Mx = /^\[([^\]]*)\] ?\[([^\]]*)\]/, Ix = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Lx = /\t/g, Fx = /(^ *\||\| *$)/g, $x = /^ *:-+: *$/, Dx = /^ *:-+ *$/, Nx = /^ *-+: *$/, Ka = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", kx = new RegExp(`^([*_])\\1${Ka}\\1\\1(?!\\1)`), Wx = new RegExp(`^([*_])${Ka}\\1(?!\\1)`), Ux = new RegExp(`^(==)${Ka}\\1`), zx = new RegExp(`^(~~)${Ka}\\1`), Bx = /^\\([^0-9A-Za-z\s])/, Gd = /\\([^0-9A-Za-z\s])/g, Hx = /^([\s\S](?:(?!  |[0-9]\.)[^=*_~\-\n<`\\\[!])*)/, jx = /^\n+/, qx = /^([ \t]*)/, Zx = /\\([^\\])/g, Kx = /(?:^|\n)( *)$/, kl = "(?:\\d+\\.)", Wl = "(?:[*+-])";
function cv(e2) {
  return "( *)(" + (e2 === 1 ? kl : Wl) + ") +";
}
const dv = cv(1), pv = cv(2);
function hv(e2) {
  return new RegExp("^" + (e2 === 1 ? dv : pv));
}
const Gx = hv(1), Vx = hv(2);
function vv(e2) {
  return new RegExp("^" + (e2 === 1 ? dv : pv) + "[^\\n]*(?:\\n(?!\\1" + (e2 === 1 ? kl : Wl) + " )[^\\n]*)*(\\n|$)", "gm");
}
const Yx = vv(1), Xx = vv(2);
function mv(e2) {
  const r = e2 === 1 ? kl : Wl;
  return new RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)");
}
const gv = mv(1), yv = mv(2);
function Vd(e2, r) {
  const n = r === 1, o = n ? gv : yv, a = n ? Yx : Xx, u = n ? Gx : Vx;
  return { match: fi(function(f, d) {
    const w = Kx.exec(d.prevCapture);
    return w && (d.list || !d.inline && !d.simple) ? o.exec(f = w[1] + f) : null;
  }), order: 1, parse(f, d, w) {
    const S = n ? +f[2] : void 0, y = f[0].replace(lx, `
`).match(a);
    let h = false;
    return { items: y.map(function(l, p) {
      const m = u.exec(l)[0].length, c = new RegExp("^ {1," + m + "}", "gm"), g = l.replace(c, "").replace(u, ""), b = p === y.length - 1, E = g.indexOf(`

`) !== -1 || b && h;
      h = E;
      const x = w.inline, P = w.list;
      let T;
      w.list = true, E ? (w.inline = false, T = fo(g) + `

`) : (w.inline = true, T = fo(g));
      const M = d(T, w);
      return w.inline = x, w.list = P, M;
    }), ordered: n, start: S };
  }, render: (f, d, w) => e2(f.ordered ? "ol" : "ul", { key: w.key, start: f.type === ve.orderedList ? f.start : void 0 }, f.items.map(function(S, y) {
    return e2("li", { key: y }, d(S, w));
  })) };
}
const Jx = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Qx = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, wv = [nv, iv, ov, av, uv, sv, fv, gv, yv], eO = [...wv, /^[^\n]+(?:  \n|\n{2,})/, hl, lv, vl];
function fo(e2) {
  let r = e2.length;
  for (; r > 0 && e2[r - 1] <= " "; ) r--;
  return e2.slice(0, r);
}
function Mi(e2) {
  return e2.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function tO(e2) {
  return Nx.test(e2) ? "right" : $x.test(e2) ? "center" : Dx.test(e2) ? "left" : null;
}
function Yd(e2, r, n, o) {
  const a = n.inTable;
  n.inTable = true;
  let u = [[]], f = "";
  function d() {
    if (!f) return;
    const w = u[u.length - 1];
    w.push.apply(w, r(f, n)), f = "";
  }
  return e2.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((w, S, y) => {
    w.trim() === "|" && (d(), o) ? S !== 0 && S !== y.length - 1 && u.push([]) : f += w;
  }), d(), n.inTable = a, u;
}
function rO(e2, r, n) {
  n.inline = true;
  const o = e2[2] ? e2[2].replace(Fx, "").split("|").map(tO) : [], a = e2[3] ? (function(f, d, w) {
    return f.trim().split(`
`).map(function(S) {
      return Yd(S, d, w, true);
    });
  })(e2[3], r, n) : [], u = Yd(e2[1], r, n, !!a.length);
  return n.inline = false, a.length ? { align: o, cells: a, header: u, type: ve.table } : { children: u, type: ve.paragraph };
}
function Xd(e2, r) {
  return e2.align[r] == null ? {} : { textAlign: e2.align[r] };
}
function fi(e2) {
  return e2.inline = 1, e2;
}
function en(e2) {
  return fi(function(r, n) {
    return n.inline ? e2.exec(r) : null;
  });
}
function tn(e2) {
  return fi(function(r, n) {
    return n.inline || n.simple ? e2.exec(r) : null;
  });
}
function Fr(e2) {
  return function(r, n) {
    return n.inline || n.simple ? null : e2.exec(r);
  };
}
function Ii(e2) {
  return fi(function(r) {
    return e2.exec(r);
  });
}
function nO(e2, r) {
  if (r.inline || r.simple) return null;
  let n = "";
  e2.split(`
`).every((a) => (a += `
`, !wv.some((u) => u.test(a)) && (n += a, !!a.trim())));
  const o = fo(n);
  return o == "" ? null : [n, , o];
}
const iO = /(javascript|vbscript|data(?!:image)):/i;
function oO(e2) {
  try {
    const r = decodeURIComponent(e2).replace(/[^A-Za-z0-9/:]/g, "");
    if (iO.test(r)) return null;
  } catch {
    return null;
  }
  return e2;
}
function Jd(e2) {
  return e2.replace(Zx, "$1");
}
function Ma(e2, r, n) {
  const o = n.inline || false, a = n.simple || false;
  n.inline = true, n.simple = true;
  const u = e2(r, n);
  return n.inline = o, n.simple = a, u;
}
function aO(e2, r, n) {
  const o = n.inline || false, a = n.simple || false;
  n.inline = false, n.simple = true;
  const u = e2(r, n);
  return n.inline = o, n.simple = a, u;
}
function sO(e2, r, n) {
  const o = n.inline || false;
  n.inline = false;
  const a = e2(r, n);
  return n.inline = o, a;
}
const Ru = (e2, r, n) => ({ children: Ma(r, e2[2], n) });
function Mu() {
  return {};
}
function Iu() {
  return null;
}
function uO(...e2) {
  return e2.filter(Boolean).join(" ");
}
function Lu(e2, r, n) {
  let o = e2;
  const a = r.split(".");
  for (; a.length && (o = o[a[0]], o !== void 0); ) a.shift();
  return o || n;
}
function lO(e2 = "", r = {}) {
  function n(l, p, ...m) {
    const c = Lu(r.overrides, `${l}.props`, {});
    return r.createElement((function(g, b) {
      const E = Lu(b, g);
      return E ? typeof E == "function" || typeof E == "object" && "render" in E ? E : Lu(b, `${g}.component`, g) : g;
    })(l, r.overrides), xn({}, p, c, { className: uO(p == null ? void 0 : p.className, c.className) || void 0 }), ...m);
  }
  function o(l) {
    l = l.replace(bx, "");
    let p = false;
    r.forceInline ? p = true : r.forceBlock || (p = Ix.test(l) === false);
    const m = S(w(p ? l : `${fo(l).replace(jx, "")}

`, { inline: p }));
    for (; typeof m[m.length - 1] == "string" && !m[m.length - 1].trim(); ) m.pop();
    if (r.wrapper === null) return m;
    const c = r.wrapper || (p ? "span" : "div");
    let g;
    if (m.length > 1 || r.forceWrapper) g = m;
    else {
      if (m.length === 1) return g = m[0], typeof g == "string" ? n("span", { key: "outer" }, g) : g;
      g = null;
    }
    return r.createElement(c, { key: "outer" }, g);
  }
  function a(l, p) {
    const m = p.match(sx);
    return m ? m.reduce(function(c, g) {
      const b = g.indexOf("=");
      if (b !== -1) {
        const E = (function(M) {
          return M.indexOf("-") !== -1 && M.match(Ex) === null && (M = M.replace(Px, function(B, F) {
            return F.toUpperCase();
          })), M;
        })(g.slice(0, b)).trim(), x = (function(M) {
          const B = M[0];
          return (B === '"' || B === "'") && M.length >= 2 && M[M.length - 1] === B ? M.slice(1, -1) : M;
        })(g.slice(b + 1).trim()), P = Zd[E] || E;
        if (P === "ref") return c;
        const T = c[P] = (function(M, B, F, k) {
          return B === "style" ? (function(Y) {
            const W = [];
            let L = "", U = false, H = false, R = "";
            if (!Y) return W;
            for (let G = 0; G < Y.length; G++) {
              const ee = Y[G];
              if (ee !== '"' && ee !== "'" || U || (H ? ee === R && (H = false, R = "") : (H = true, R = ee)), ee === "(" && L.endsWith("url") ? U = true : ee === ")" && U && (U = false), ee !== ";" || H || U) L += ee;
              else {
                const ue = L.trim();
                if (ue) {
                  const j = ue.indexOf(":");
                  if (j > 0) {
                    const Q = ue.slice(0, j).trim(), oe = ue.slice(j + 1).trim();
                    W.push([Q, oe]);
                  }
                }
                L = "";
              }
            }
            const X = L.trim();
            if (X) {
              const G = X.indexOf(":");
              if (G > 0) {
                const ee = X.slice(0, G).trim(), ue = X.slice(G + 1).trim();
                W.push([ee, ue]);
              }
            }
            return W;
          })(F).reduce(function(Y, [W, L]) {
            return Y[W.replace(/(-[a-z])/g, (U) => U[1].toUpperCase())] = k(L, M, W), Y;
          }, {}) : ax.indexOf(B) !== -1 ? k(F, M, B) : (F.match(xx) && (F = F.slice(1, F.length - 1)), F === "true" || F !== "false" && F);
        })(l, E, x, r.sanitizer);
        typeof T == "string" && (hl.test(T) || vl.test(T)) && (c[P] = o(T.trim()));
      } else g !== "style" && (c[Zd[g] || g] = true);
      return c;
    }, {}) : null;
  }
  r.overrides = r.overrides || {}, r.sanitizer = r.sanitizer || oO, r.slugify = r.slugify || Mi, r.namedCodesToUnicode = r.namedCodesToUnicode ? xn({}, Kd, r.namedCodesToUnicode) : Kd, r.createElement = r.createElement || qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement;
  const u = [], f = {}, d = { [ve.blockQuote]: { match: Fr(nv), order: 1, parse(l, p, m) {
    const [, c, g] = l[0].replace(fx, "").match(cx);
    return { alert: c, children: p(g, m) };
  }, render(l, p, m) {
    const c = { key: m.key };
    return l.alert && (c.className = "markdown-alert-" + r.slugify(l.alert.toLowerCase(), Mi), l.children.unshift({ attrs: {}, children: [{ type: ve.text, text: l.alert }], noInnerParse: true, type: ve.htmlBlock, tag: "header" })), n("blockquote", c, p(l.children, m));
  } }, [ve.breakLine]: { match: Ii(dx), order: 1, parse: Mu, render: (l, p, m) => n("br", { key: m.key }) }, [ve.breakThematic]: { match: Fr(px), order: 1, parse: Mu, render: (l, p, m) => n("hr", { key: m.key }) }, [ve.codeBlock]: { match: Fr(ov), order: 0, parse: (l) => ({ lang: void 0, text: fo(l[0].replace(/^ {4}/gm, "")).replace(Gd, "$1") }), render: (l, p, m) => n("pre", { key: m.key }, n("code", xn({}, l.attrs, { className: l.lang ? `lang-${l.lang}` : "" }), l.text)) }, [ve.codeFenced]: { match: Fr(iv), order: 0, parse: (l) => ({ attrs: a("code", l[3] || ""), lang: l[2] || void 0, text: l[4], type: ve.codeBlock }) }, [ve.codeInline]: { match: tn(hx), order: 3, parse: (l) => ({ text: l[2].replace(Gd, "$1") }), render: (l, p, m) => n("code", { key: m.key }, l.text) }, [ve.footnote]: { match: Fr(gx), order: 0, parse: (l) => (u.push({ footnote: l[2], identifier: l[1] }), {}), render: Iu }, [ve.footnoteReference]: { match: en(yx), order: 1, parse: (l) => ({ target: `#${r.slugify(l[1], Mi)}`, text: l[1] }), render: (l, p, m) => n("a", { key: m.key, href: r.sanitizer(l.target, "a", "href") }, n("sup", { key: m.key }, l.text)) }, [ve.gfmTask]: { match: en(Sx), order: 1, parse: (l) => ({ completed: l[1].toLowerCase() === "x" }), render: (l, p, m) => n("input", { checked: l.completed, key: m.key, readOnly: true, type: "checkbox" }) }, [ve.heading]: { match: Fr(r.enforceAtxHeadings ? sv : av), order: 1, parse: (l, p, m) => ({ children: Ma(p, l[2], m), id: r.slugify(l[2], Mi), level: l[1].length }), render: (l, p, m) => n(`h${l.level}`, { id: l.id, key: m.key }, p(l.children, m)) }, [ve.headingSetext]: { match: Fr(uv), order: 0, parse: (l, p, m) => ({ children: Ma(p, l[1], m), level: l[2] === "=" ? 1 : 2, type: ve.heading }) }, [ve.htmlBlock]: { match: Ii(hl), order: 1, parse(l, p, m) {
    const [, c] = l[3].match(qx), g = new RegExp(`^${c}`, "gm"), b = l[3].replace(g, ""), E = (x = b, eO.some((F) => F.test(x)) ? sO : Ma);
    var x;
    const P = l[1].toLowerCase(), T = ox.indexOf(P) !== -1, M = (T ? P : l[1]).trim(), B = { attrs: a(M, l[2]), noInnerParse: T, tag: M };
    return m.inAnchor = m.inAnchor || P === "a", T ? B.text = l[3] : B.children = E(p, b, m), m.inAnchor = false, B;
  }, render: (l, p, m) => n(l.tag, xn({ key: m.key }, l.attrs), l.text || (l.children ? p(l.children, m) : "")) }, [ve.htmlSelfClosing]: { match: Ii(vl), order: 1, parse(l) {
    const p = l[1].trim();
    return { attrs: a(p, l[2] || ""), tag: p };
  }, render: (l, p, m) => n(l.tag, xn({}, l.attrs, { key: m.key })) }, [ve.htmlComment]: { match: Ii(lv), order: 1, parse: () => ({}), render: Iu }, [ve.image]: { match: tn(Qx), order: 1, parse: (l) => ({ alt: l[1], target: Jd(l[2]), title: l[3] }), render: (l, p, m) => n("img", { key: m.key, alt: l.alt || void 0, title: l.title || void 0, src: r.sanitizer(l.target, "img", "src") }) }, [ve.link]: { match: en(Jx), order: 3, parse: (l, p, m) => ({ children: aO(p, l[1], m), target: Jd(l[2]), title: l[3] }), render: (l, p, m) => n("a", { key: m.key, href: r.sanitizer(l.target, "a", "href"), title: l.title }, p(l.children, m)) }, [ve.linkAngleBraceStyleDetector]: { match: en(Tx), order: 0, parse: (l) => ({ children: [{ text: l[1], type: ve.text }], target: l[1], type: ve.link }) }, [ve.linkBareUrlDetector]: { match: fi((l, p) => p.inAnchor || r.disableAutoLink ? null : en(Ox)(l, p)), order: 0, parse: (l) => ({ children: [{ text: l[1], type: ve.text }], target: l[1], title: void 0, type: ve.link }) }, [ve.linkMailtoDetector]: { match: en(Ax), order: 0, parse(l) {
    let p = l[1], m = l[1];
    return ux.test(m) || (m = "mailto:" + m), { children: [{ text: p.replace("mailto:", ""), type: ve.text }], target: m, type: ve.link };
  } }, [ve.orderedList]: Vd(n, 1), [ve.unorderedList]: Vd(n, 2), [ve.newlineCoalescer]: { match: Fr(vx), order: 3, parse: Mu, render: () => `
` }, [ve.paragraph]: { match: fi(nO), order: 3, parse: Ru, render: (l, p, m) => n("p", { key: m.key }, p(l.children, m)) }, [ve.ref]: { match: en(Cx), order: 0, parse: (l) => (f[l[1]] = { target: l[2], title: l[4] }, {}), render: Iu }, [ve.refImage]: { match: tn(Rx), order: 0, parse: (l) => ({ alt: l[1] || void 0, ref: l[2] }), render: (l, p, m) => f[l.ref] ? n("img", { key: m.key, alt: l.alt, src: r.sanitizer(f[l.ref].target, "img", "src"), title: f[l.ref].title }) : null }, [ve.refLink]: { match: en(Mx), order: 0, parse: (l, p, m) => ({ children: p(l[1], m), fallbackChildren: l[0], ref: l[2] }), render: (l, p, m) => f[l.ref] ? n("a", { key: m.key, href: r.sanitizer(f[l.ref].target, "a", "href"), title: f[l.ref].title }, p(l.children, m)) : n("span", { key: m.key }, l.fallbackChildren) }, [ve.table]: { match: Fr(fv), order: 1, parse: rO, render(l, p, m) {
    const c = l;
    return n("table", { key: m.key }, n("thead", null, n("tr", null, c.header.map(function(g, b) {
      return n("th", { key: b, style: Xd(c, b) }, p(g, m));
    }))), n("tbody", null, c.cells.map(function(g, b) {
      return n("tr", { key: b }, g.map(function(E, x) {
        return n("td", { key: x, style: Xd(c, x) }, p(E, m));
      }));
    })));
  } }, [ve.text]: { match: Ii(Hx), order: 4, parse: (l) => ({ text: l[0].replace(_x, (p, m) => r.namedCodesToUnicode[m] ? r.namedCodesToUnicode[m] : p) }), render: (l) => l.text }, [ve.textBolded]: { match: tn(kx), order: 2, parse: (l, p, m) => ({ children: p(l[2], m) }), render: (l, p, m) => n("strong", { key: m.key }, p(l.children, m)) }, [ve.textEmphasized]: { match: tn(Wx), order: 3, parse: (l, p, m) => ({ children: p(l[2], m) }), render: (l, p, m) => n("em", { key: m.key }, p(l.children, m)) }, [ve.textEscaped]: { match: tn(Bx), order: 1, parse: (l) => ({ text: l[1], type: ve.text }) }, [ve.textMarked]: { match: tn(Ux), order: 3, parse: Ru, render: (l, p, m) => n("mark", { key: m.key }, p(l.children, m)) }, [ve.textStrikethroughed]: { match: tn(zx), order: 3, parse: Ru, render: (l, p, m) => n("del", { key: m.key }, p(l.children, m)) } };
  r.disableParsingRawHTML === true && (delete d[ve.htmlBlock], delete d[ve.htmlSelfClosing]);
  const w = (function(l) {
    let p = Object.keys(l);
    function m(c, g) {
      let b, E, x = [], P = "", T = "";
      for (g.prevCapture = g.prevCapture || ""; c; ) {
        let M = 0;
        for (; M < p.length; ) {
          if (P = p[M], b = l[P], g.inline && !b.match.inline) {
            M++;
            continue;
          }
          const B = b.match(c, g);
          if (B) {
            T = B[0], g.prevCapture += T, c = c.substring(T.length), E = b.parse(B, m, g), E.type == null && (E.type = P), x.push(E);
            break;
          }
          M++;
        }
      }
      return g.prevCapture = "", x;
    }
    return p.sort(function(c, g) {
      let b = l[c].order, E = l[g].order;
      return b !== E ? b - E : c < g ? -1 : 1;
    }), function(c, g) {
      return m((function(b) {
        return b.replace(mx, `
`).replace(wx, "").replace(Lx, "    ");
      })(c), g);
    };
  })(d), S = (y = /* @__PURE__ */ (function(l, p) {
    return function(m, c, g) {
      const b = l[m.type].render;
      return p ? p(() => b(m, c, g), m, c, g) : b(m, c, g);
    };
  })(d, r.renderRule), function l(p, m = {}) {
    if (Array.isArray(p)) {
      const c = m.key, g = [];
      let b = false;
      for (let E = 0; E < p.length; E++) {
        m.key = E;
        const x = l(p[E], m), P = typeof x == "string";
        P && b ? g[g.length - 1] += x : x !== null && g.push(x), b = P;
      }
      return m.key = c, g;
    }
    return y(p, l, m);
  });
  var y;
  const h = o(e2);
  return u.length ? n("div", null, h, n("footer", { key: "footer" }, u.map(function(l) {
    return n("div", { id: r.slugify(l.identifier, Mi), key: l.identifier }, l.identifier, S(w(l.footnote, { inline: true })));
  }))) : h;
}
const ka = (e2) => {
  let { children: r = "", options: n } = e2, o = (function(a, u) {
    if (a == null) return {};
    var f, d, w = {}, S = Object.keys(a);
    for (d = 0; d < S.length; d++) u.indexOf(f = S[d]) >= 0 || (w[f] = a[f]);
    return w;
  })(e2, ix);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.cloneElement(lO(r, n), o);
}, Qd = ({ kind: e2, customIcon: r }) => {
  if (r)
    return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(r, { className: "mr-1 h-6 w-6 flex-none" });
  switch (e2) {
    case "error":
    case "danger":
      return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(u4, { className: "flex-none h-6 w-6" });
    case "info":
      return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5, { className: "flex-none h-6 w-6" }) });
    case "warning":
      return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(x3, { className: "flex-none h-6 w-6" }) });
    case "message":
      return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5, { className: "flex-none h-6 w-6" }) });
    default:
      return null;
  }
}, pM = ({
  id: e2,
  onClose: r,
  kind: n,
  message: o,
  markdown: a,
  customIcon: u
}) => {
  const f = ({ className: d } = {}) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      onClick: r,
      className: Je("flex items-center justify-center p-1", d),
      children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(C1, { className: "h-5 w-5 font-thin stroke-current" })
    }
  );
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: Je(
        "relative flex items-center rounded-lg py-2 px-4 font-semibold",
        {
          "bg-yellow-100 text-yellow-400": n === "warning",
          "bg-red-200 text-red-500": n === "danger" || n === "error",
          "bg-primary-light text-primary": n === "info",
          "bg-green-200 text-green-500": n === "message"
        }
      ),
      children: typeof o == "string" ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "w-full flex items-center justify-between gap-x-3", children: [
        /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Qd, { kind: n, customIcon: u }),
          a ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ka, { children: o }) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: o })
        ] }),
        f()
      ] }) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-2 justify-between", children: o.filter((d) => d.messages.length > 0).map((d) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
          d.title && /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "flex items-center gap-1 font-bold capitalize", children: [
            /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Qd, { kind: n, customIcon: u }),
            /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { children: [
              d.title,
              " :"
            ] })
          ] }),
          /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "ul",
            {
              className: Je("list-disc", {
                "px-12": d.title,
                "px-6": !d.title
              }),
              children: d.messages.map((w) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("li", { children: a ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ka, { children: w }) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: w }) }))
            }
          )
        ] })) }),
        f({
          className: "absolute top-1 right-1"
        })
      ] })
    },
    e2
  );
}, fO = ({
  children: e2,
  size: r,
  className: n,
  ...o
}) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: { "--width": `${r || 24}px` },
    className: Je("h-6 flex items-center pr-1 w-[--width]", n),
    ...o,
    children: e2
  }
);
var Fu = {}, Li = {}, pa = {}, ep;
function bv() {
  if (ep) return pa;
  ep = 1, Object.defineProperty(pa, "__esModule", {
    value: true
  }), pa.default = n;
  let e2;
  const r = new Uint8Array(16);
  function n() {
    if (!e2 && (e2 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e2))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return e2(r);
  }
  return pa;
}
var Jn = {}, Fi = {}, $i = {}, tp;
function cO() {
  if (tp) return $i;
  tp = 1, Object.defineProperty($i, "__esModule", {
    value: true
  }), $i.default = void 0;
  var e2 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return $i.default = e2, $i;
}
var rp;
function Ga() {
  if (rp) return Fi;
  rp = 1, Object.defineProperty(Fi, "__esModule", {
    value: true
  }), Fi.default = void 0;
  var e2 = r(/* @__PURE__ */ cO());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a) {
    return typeof a == "string" && e2.default.test(a);
  }
  var o = n;
  return Fi.default = o, Fi;
}
var np;
function Va() {
  if (np) return Jn;
  np = 1, Object.defineProperty(Jn, "__esModule", {
    value: true
  }), Jn.default = void 0, Jn.unsafeStringify = o;
  var e2 = r(/* @__PURE__ */ Ga());
  function r(f) {
    return f && f.__esModule ? f : { default: f };
  }
  const n = [];
  for (let f = 0; f < 256; ++f)
    n.push((f + 256).toString(16).slice(1));
  function o(f, d = 0) {
    return n[f[d + 0]] + n[f[d + 1]] + n[f[d + 2]] + n[f[d + 3]] + "-" + n[f[d + 4]] + n[f[d + 5]] + "-" + n[f[d + 6]] + n[f[d + 7]] + "-" + n[f[d + 8]] + n[f[d + 9]] + "-" + n[f[d + 10]] + n[f[d + 11]] + n[f[d + 12]] + n[f[d + 13]] + n[f[d + 14]] + n[f[d + 15]];
  }
  function a(f, d = 0) {
    const w = o(f, d);
    if (!(0, e2.default)(w))
      throw TypeError("Stringified UUID is invalid");
    return w;
  }
  var u = a;
  return Jn.default = u, Jn;
}
var ip;
function dO() {
  if (ip) return Li;
  ip = 1, Object.defineProperty(Li, "__esModule", {
    value: true
  }), Li.default = void 0;
  var e2 = n(/* @__PURE__ */ bv()), r = /* @__PURE__ */ Va();
  function n(S) {
    return S && S.__esModule ? S : { default: S };
  }
  let o, a, u = 0, f = 0;
  function d(S, y, h) {
    let l = y && h || 0;
    const p = y || new Array(16);
    S = S || {};
    let m = S.node || o, c = S.clockseq !== void 0 ? S.clockseq : a;
    if (m == null || c == null) {
      const T = S.random || (S.rng || e2.default)();
      m == null && (m = o = [T[0] | 1, T[1], T[2], T[3], T[4], T[5]]), c == null && (c = a = (T[6] << 8 | T[7]) & 16383);
    }
    let g = S.msecs !== void 0 ? S.msecs : Date.now(), b = S.nsecs !== void 0 ? S.nsecs : f + 1;
    const E = g - u + (b - f) / 1e4;
    if (E < 0 && S.clockseq === void 0 && (c = c + 1 & 16383), (E < 0 || g > u) && S.nsecs === void 0 && (b = 0), b >= 1e4)
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    u = g, f = b, a = c, g += 122192928e5;
    const x = ((g & 268435455) * 1e4 + b) % 4294967296;
    p[l++] = x >>> 24 & 255, p[l++] = x >>> 16 & 255, p[l++] = x >>> 8 & 255, p[l++] = x & 255;
    const P = g / 4294967296 * 1e4 & 268435455;
    p[l++] = P >>> 8 & 255, p[l++] = P & 255, p[l++] = P >>> 24 & 15 | 16, p[l++] = P >>> 16 & 255, p[l++] = c >>> 8 | 128, p[l++] = c & 255;
    for (let T = 0; T < 6; ++T)
      p[l + T] = m[T];
    return y || (0, r.unsafeStringify)(p);
  }
  var w = d;
  return Li.default = w, Li;
}
var Di = {}, rn = {}, Ni = {}, op;
function Sv() {
  if (op) return Ni;
  op = 1, Object.defineProperty(Ni, "__esModule", {
    value: true
  }), Ni.default = void 0;
  var e2 = r(/* @__PURE__ */ Ga());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a) {
    if (!(0, e2.default)(a))
      throw TypeError("Invalid UUID");
    let u;
    const f = new Uint8Array(16);
    return f[0] = (u = parseInt(a.slice(0, 8), 16)) >>> 24, f[1] = u >>> 16 & 255, f[2] = u >>> 8 & 255, f[3] = u & 255, f[4] = (u = parseInt(a.slice(9, 13), 16)) >>> 8, f[5] = u & 255, f[6] = (u = parseInt(a.slice(14, 18), 16)) >>> 8, f[7] = u & 255, f[8] = (u = parseInt(a.slice(19, 23), 16)) >>> 8, f[9] = u & 255, f[10] = (u = parseInt(a.slice(24, 36), 16)) / 1099511627776 & 255, f[11] = u / 4294967296 & 255, f[12] = u >>> 24 & 255, f[13] = u >>> 16 & 255, f[14] = u >>> 8 & 255, f[15] = u & 255, f;
  }
  var o = n;
  return Ni.default = o, Ni;
}
var ap;
function _v() {
  if (ap) return rn;
  ap = 1, Object.defineProperty(rn, "__esModule", {
    value: true
  }), rn.URL = rn.DNS = void 0, rn.default = f;
  var e2 = /* @__PURE__ */ Va(), r = n(/* @__PURE__ */ Sv());
  function n(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function o(d) {
    d = unescape(encodeURIComponent(d));
    const w = [];
    for (let S = 0; S < d.length; ++S)
      w.push(d.charCodeAt(S));
    return w;
  }
  const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  rn.DNS = a;
  const u = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  rn.URL = u;
  function f(d, w, S) {
    function y(h, l, p, m) {
      var c;
      if (typeof h == "string" && (h = o(h)), typeof l == "string" && (l = (0, r.default)(l)), ((c = l) === null || c === void 0 ? void 0 : c.length) !== 16)
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let g = new Uint8Array(16 + h.length);
      if (g.set(l), g.set(h, l.length), g = S(g), g[6] = g[6] & 15 | w, g[8] = g[8] & 63 | 128, p) {
        m = m || 0;
        for (let b = 0; b < 16; ++b)
          p[m + b] = g[b];
        return p;
      }
      return (0, e2.unsafeStringify)(g);
    }
    try {
      y.name = d;
    } catch {
    }
    return y.DNS = a, y.URL = u, y;
  }
  return rn;
}
var ki = {}, sp;
function pO() {
  if (sp) return ki;
  sp = 1, Object.defineProperty(ki, "__esModule", {
    value: true
  }), ki.default = void 0;
  function e2(p) {
    if (typeof p == "string") {
      const m = unescape(encodeURIComponent(p));
      p = new Uint8Array(m.length);
      for (let c = 0; c < m.length; ++c)
        p[c] = m.charCodeAt(c);
    }
    return r(o(a(p), p.length * 8));
  }
  function r(p) {
    const m = [], c = p.length * 32, g = "0123456789abcdef";
    for (let b = 0; b < c; b += 8) {
      const E = p[b >> 5] >>> b % 32 & 255, x = parseInt(g.charAt(E >>> 4 & 15) + g.charAt(E & 15), 16);
      m.push(x);
    }
    return m;
  }
  function n(p) {
    return (p + 64 >>> 9 << 4) + 14 + 1;
  }
  function o(p, m) {
    p[m >> 5] |= 128 << m % 32, p[n(m) - 1] = m;
    let c = 1732584193, g = -271733879, b = -1732584194, E = 271733878;
    for (let x = 0; x < p.length; x += 16) {
      const P = c, T = g, M = b, B = E;
      c = w(c, g, b, E, p[x], 7, -680876936), E = w(E, c, g, b, p[x + 1], 12, -389564586), b = w(b, E, c, g, p[x + 2], 17, 606105819), g = w(g, b, E, c, p[x + 3], 22, -1044525330), c = w(c, g, b, E, p[x + 4], 7, -176418897), E = w(E, c, g, b, p[x + 5], 12, 1200080426), b = w(b, E, c, g, p[x + 6], 17, -1473231341), g = w(g, b, E, c, p[x + 7], 22, -45705983), c = w(c, g, b, E, p[x + 8], 7, 1770035416), E = w(E, c, g, b, p[x + 9], 12, -1958414417), b = w(b, E, c, g, p[x + 10], 17, -42063), g = w(g, b, E, c, p[x + 11], 22, -1990404162), c = w(c, g, b, E, p[x + 12], 7, 1804603682), E = w(E, c, g, b, p[x + 13], 12, -40341101), b = w(b, E, c, g, p[x + 14], 17, -1502002290), g = w(g, b, E, c, p[x + 15], 22, 1236535329), c = S(c, g, b, E, p[x + 1], 5, -165796510), E = S(E, c, g, b, p[x + 6], 9, -1069501632), b = S(b, E, c, g, p[x + 11], 14, 643717713), g = S(g, b, E, c, p[x], 20, -373897302), c = S(c, g, b, E, p[x + 5], 5, -701558691), E = S(E, c, g, b, p[x + 10], 9, 38016083), b = S(b, E, c, g, p[x + 15], 14, -660478335), g = S(g, b, E, c, p[x + 4], 20, -405537848), c = S(c, g, b, E, p[x + 9], 5, 568446438), E = S(E, c, g, b, p[x + 14], 9, -1019803690), b = S(b, E, c, g, p[x + 3], 14, -187363961), g = S(g, b, E, c, p[x + 8], 20, 1163531501), c = S(c, g, b, E, p[x + 13], 5, -1444681467), E = S(E, c, g, b, p[x + 2], 9, -51403784), b = S(b, E, c, g, p[x + 7], 14, 1735328473), g = S(g, b, E, c, p[x + 12], 20, -1926607734), c = y(c, g, b, E, p[x + 5], 4, -378558), E = y(E, c, g, b, p[x + 8], 11, -2022574463), b = y(b, E, c, g, p[x + 11], 16, 1839030562), g = y(g, b, E, c, p[x + 14], 23, -35309556), c = y(c, g, b, E, p[x + 1], 4, -1530992060), E = y(E, c, g, b, p[x + 4], 11, 1272893353), b = y(b, E, c, g, p[x + 7], 16, -155497632), g = y(g, b, E, c, p[x + 10], 23, -1094730640), c = y(c, g, b, E, p[x + 13], 4, 681279174), E = y(E, c, g, b, p[x], 11, -358537222), b = y(b, E, c, g, p[x + 3], 16, -722521979), g = y(g, b, E, c, p[x + 6], 23, 76029189), c = y(c, g, b, E, p[x + 9], 4, -640364487), E = y(E, c, g, b, p[x + 12], 11, -421815835), b = y(b, E, c, g, p[x + 15], 16, 530742520), g = y(g, b, E, c, p[x + 2], 23, -995338651), c = h(c, g, b, E, p[x], 6, -198630844), E = h(E, c, g, b, p[x + 7], 10, 1126891415), b = h(b, E, c, g, p[x + 14], 15, -1416354905), g = h(g, b, E, c, p[x + 5], 21, -57434055), c = h(c, g, b, E, p[x + 12], 6, 1700485571), E = h(E, c, g, b, p[x + 3], 10, -1894986606), b = h(b, E, c, g, p[x + 10], 15, -1051523), g = h(g, b, E, c, p[x + 1], 21, -2054922799), c = h(c, g, b, E, p[x + 8], 6, 1873313359), E = h(E, c, g, b, p[x + 15], 10, -30611744), b = h(b, E, c, g, p[x + 6], 15, -1560198380), g = h(g, b, E, c, p[x + 13], 21, 1309151649), c = h(c, g, b, E, p[x + 4], 6, -145523070), E = h(E, c, g, b, p[x + 11], 10, -1120210379), b = h(b, E, c, g, p[x + 2], 15, 718787259), g = h(g, b, E, c, p[x + 9], 21, -343485551), c = u(c, P), g = u(g, T), b = u(b, M), E = u(E, B);
    }
    return [c, g, b, E];
  }
  function a(p) {
    if (p.length === 0)
      return [];
    const m = p.length * 8, c = new Uint32Array(n(m));
    for (let g = 0; g < m; g += 8)
      c[g >> 5] |= (p[g / 8] & 255) << g % 32;
    return c;
  }
  function u(p, m) {
    const c = (p & 65535) + (m & 65535);
    return (p >> 16) + (m >> 16) + (c >> 16) << 16 | c & 65535;
  }
  function f(p, m) {
    return p << m | p >>> 32 - m;
  }
  function d(p, m, c, g, b, E) {
    return u(f(u(u(m, p), u(g, E)), b), c);
  }
  function w(p, m, c, g, b, E, x) {
    return d(m & c | ~m & g, p, m, b, E, x);
  }
  function S(p, m, c, g, b, E, x) {
    return d(m & g | c & ~g, p, m, b, E, x);
  }
  function y(p, m, c, g, b, E, x) {
    return d(m ^ c ^ g, p, m, b, E, x);
  }
  function h(p, m, c, g, b, E, x) {
    return d(c ^ (m | ~g), p, m, b, E, x);
  }
  var l = e2;
  return ki.default = l, ki;
}
var up;
function hO() {
  if (up) return Di;
  up = 1, Object.defineProperty(Di, "__esModule", {
    value: true
  }), Di.default = void 0;
  var e2 = n(/* @__PURE__ */ _v()), r = n(/* @__PURE__ */ pO());
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = (0, e2.default)("v3", 48, r.default);
  return Di.default = a, Di;
}
var Wi = {}, Ui = {}, lp;
function vO() {
  if (lp) return Ui;
  lp = 1, Object.defineProperty(Ui, "__esModule", {
    value: true
  }), Ui.default = void 0;
  var r = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  return Ui.default = r, Ui;
}
var fp;
function mO() {
  if (fp) return Wi;
  fp = 1, Object.defineProperty(Wi, "__esModule", {
    value: true
  }), Wi.default = void 0;
  var e2 = o(/* @__PURE__ */ vO()), r = o(/* @__PURE__ */ bv()), n = /* @__PURE__ */ Va();
  function o(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function a(f, d, w) {
    if (e2.default.randomUUID && !d && !f)
      return e2.default.randomUUID();
    f = f || {};
    const S = f.random || (f.rng || r.default)();
    if (S[6] = S[6] & 15 | 64, S[8] = S[8] & 63 | 128, d) {
      w = w || 0;
      for (let y = 0; y < 16; ++y)
        d[w + y] = S[y];
      return d;
    }
    return (0, n.unsafeStringify)(S);
  }
  var u = a;
  return Wi.default = u, Wi;
}
var zi = {}, Bi = {}, cp;
function gO() {
  if (cp) return Bi;
  cp = 1, Object.defineProperty(Bi, "__esModule", {
    value: true
  }), Bi.default = void 0;
  function e2(a, u, f, d) {
    switch (a) {
      case 0:
        return u & f ^ ~u & d;
      case 1:
        return u ^ f ^ d;
      case 2:
        return u & f ^ u & d ^ f & d;
      case 3:
        return u ^ f ^ d;
    }
  }
  function r(a, u) {
    return a << u | a >>> 32 - u;
  }
  function n(a) {
    const u = [1518500249, 1859775393, 2400959708, 3395469782], f = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof a == "string") {
      const y = unescape(encodeURIComponent(a));
      a = [];
      for (let h = 0; h < y.length; ++h)
        a.push(y.charCodeAt(h));
    } else Array.isArray(a) || (a = Array.prototype.slice.call(a));
    a.push(128);
    const d = a.length / 4 + 2, w = Math.ceil(d / 16), S = new Array(w);
    for (let y = 0; y < w; ++y) {
      const h = new Uint32Array(16);
      for (let l = 0; l < 16; ++l)
        h[l] = a[y * 64 + l * 4] << 24 | a[y * 64 + l * 4 + 1] << 16 | a[y * 64 + l * 4 + 2] << 8 | a[y * 64 + l * 4 + 3];
      S[y] = h;
    }
    S[w - 1][14] = (a.length - 1) * 8 / Math.pow(2, 32), S[w - 1][14] = Math.floor(S[w - 1][14]), S[w - 1][15] = (a.length - 1) * 8 & 4294967295;
    for (let y = 0; y < w; ++y) {
      const h = new Uint32Array(80);
      for (let b = 0; b < 16; ++b)
        h[b] = S[y][b];
      for (let b = 16; b < 80; ++b)
        h[b] = r(h[b - 3] ^ h[b - 8] ^ h[b - 14] ^ h[b - 16], 1);
      let l = f[0], p = f[1], m = f[2], c = f[3], g = f[4];
      for (let b = 0; b < 80; ++b) {
        const E = Math.floor(b / 20), x = r(l, 5) + e2(E, p, m, c) + g + u[E] + h[b] >>> 0;
        g = c, c = m, m = r(p, 30) >>> 0, p = l, l = x;
      }
      f[0] = f[0] + l >>> 0, f[1] = f[1] + p >>> 0, f[2] = f[2] + m >>> 0, f[3] = f[3] + c >>> 0, f[4] = f[4] + g >>> 0;
    }
    return [f[0] >> 24 & 255, f[0] >> 16 & 255, f[0] >> 8 & 255, f[0] & 255, f[1] >> 24 & 255, f[1] >> 16 & 255, f[1] >> 8 & 255, f[1] & 255, f[2] >> 24 & 255, f[2] >> 16 & 255, f[2] >> 8 & 255, f[2] & 255, f[3] >> 24 & 255, f[3] >> 16 & 255, f[3] >> 8 & 255, f[3] & 255, f[4] >> 24 & 255, f[4] >> 16 & 255, f[4] >> 8 & 255, f[4] & 255];
  }
  var o = n;
  return Bi.default = o, Bi;
}
var dp;
function yO() {
  if (dp) return zi;
  dp = 1, Object.defineProperty(zi, "__esModule", {
    value: true
  }), zi.default = void 0;
  var e2 = n(/* @__PURE__ */ _v()), r = n(/* @__PURE__ */ gO());
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = (0, e2.default)("v5", 80, r.default);
  return zi.default = a, zi;
}
var Hi = {}, pp;
function wO() {
  if (pp) return Hi;
  pp = 1, Object.defineProperty(Hi, "__esModule", {
    value: true
  }), Hi.default = void 0;
  var e2 = "00000000-0000-0000-0000-000000000000";
  return Hi.default = e2, Hi;
}
var ji = {}, hp;
function bO() {
  if (hp) return ji;
  hp = 1, Object.defineProperty(ji, "__esModule", {
    value: true
  }), ji.default = void 0;
  var e2 = r(/* @__PURE__ */ Ga());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a) {
    if (!(0, e2.default)(a))
      throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var o = n;
  return ji.default = o, ji;
}
var vp;
function SO() {
  return vp || (vp = 1, (function(e2) {
    Object.defineProperty(e2, "__esModule", {
      value: true
    }), Object.defineProperty(e2, "NIL", {
      enumerable: true,
      get: function() {
        return u.default;
      }
    }), Object.defineProperty(e2, "parse", {
      enumerable: true,
      get: function() {
        return S.default;
      }
    }), Object.defineProperty(e2, "stringify", {
      enumerable: true,
      get: function() {
        return w.default;
      }
    }), Object.defineProperty(e2, "v1", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e2, "v3", {
      enumerable: true,
      get: function() {
        return n.default;
      }
    }), Object.defineProperty(e2, "v4", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    }), Object.defineProperty(e2, "v5", {
      enumerable: true,
      get: function() {
        return a.default;
      }
    }), Object.defineProperty(e2, "validate", {
      enumerable: true,
      get: function() {
        return d.default;
      }
    }), Object.defineProperty(e2, "version", {
      enumerable: true,
      get: function() {
        return f.default;
      }
    });
    var r = y(/* @__PURE__ */ dO()), n = y(/* @__PURE__ */ hO()), o = y(/* @__PURE__ */ mO()), a = y(/* @__PURE__ */ yO()), u = y(/* @__PURE__ */ wO()), f = y(/* @__PURE__ */ bO()), d = y(/* @__PURE__ */ Ga()), w = y(/* @__PURE__ */ Va()), S = y(/* @__PURE__ */ Sv());
    function y(h) {
      return h && h.__esModule ? h : { default: h };
    }
  })(Fu)), Fu;
}
var $u, mp;
function _O() {
  if (mp) return $u;
  mp = 1;
  function e2(r, n) {
    if (!r || !n || !r.length || !n.length)
      throw new Error("Bad alphabet");
    this.srcAlphabet = r, this.dstAlphabet = n;
  }
  return e2.prototype.convert = function(r) {
    var n, o, a, u = {}, f = this.srcAlphabet.length, d = this.dstAlphabet.length, w = r.length, S = typeof r == "string" ? "" : [];
    if (!this.isValid(r))
      throw new Error('Number "' + r + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    if (this.srcAlphabet === this.dstAlphabet)
      return r;
    for (n = 0; n < w; n++)
      u[n] = this.srcAlphabet.indexOf(r[n]);
    do {
      for (o = 0, a = 0, n = 0; n < w; n++)
        o = o * f + u[n], o >= d ? (u[a++] = parseInt(o / d, 10), o = o % d) : a > 0 && (u[a++] = 0);
      w = a, S = this.dstAlphabet.slice(o, o + 1).concat(S);
    } while (a !== 0);
    return S;
  }, e2.prototype.isValid = function(r) {
    for (var n = 0; n < r.length; ++n)
      if (this.srcAlphabet.indexOf(r[n]) === -1)
        return false;
    return true;
  }, $u = e2, $u;
}
var Du, gp;
function EO() {
  if (gp) return Du;
  gp = 1;
  var e2 = _O();
  function r(n, o) {
    var a = new e2(n, o);
    return function(u) {
      return a.convert(u);
    };
  }
  return r.BIN = "01", r.OCT = "01234567", r.DEC = "0123456789", r.HEX = "0123456789abcdef", Du = r, Du;
}
var Nu, yp;
function xO() {
  if (yp) return Nu;
  yp = 1;
  const { v4: e2, validate: r } = /* @__PURE__ */ SO(), n = EO(), o = {
    cookieBase90: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
    flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    uuid25Base36: "0123456789abcdefghijklmnopqrstuvwxyz"
  }, a = {
    consistentLength: true
  };
  let u;
  const f = (S, y, h) => {
    const l = y(S.toLowerCase().replace(/-/g, ""));
    return !h || !h.consistentLength ? l : l.padStart(
      h.shortIdLength,
      h.paddingChar
    );
  }, d = (S, y) => {
    const l = y(S).padStart(32, "0").match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
    return [l[1], l[2], l[3], l[4], l[5]].join("-");
  }, w = (S) => Math.ceil(Math.log(2 ** 128) / Math.log(S));
  return Nu = (() => {
    const S = (y, h) => {
      const l = y || o.flickrBase58, p = { ...a, ...h };
      if ([...new Set(Array.from(l))].length !== l.length)
        throw new Error("The provided Alphabet has duplicate characters resulting in unreliable results");
      const m = w(l.length), c = {
        shortIdLength: m,
        consistentLength: p.consistentLength,
        paddingChar: l[0]
      }, g = n(n.HEX, l), b = n(l, n.HEX), E = () => f(e2(), g, c), P = {
        alphabet: l,
        fromUUID: (T) => f(T, g, c),
        maxLength: m,
        generate: E,
        new: E,
        toUUID: (T) => d(T, b),
        uuid: e2,
        validate: (T, M = false) => {
          if (!T || typeof T != "string") return false;
          const B = p.consistentLength ? T.length === m : T.length <= m, F = T.split("").every((k) => l.includes(k));
          return M === false ? B && F : B && F && r(d(T, b));
        }
      };
      return Object.freeze(P), P;
    };
    return S.constants = o, S.uuid = e2, S.generate = () => (u || (u = S(o.flickrBase58).generate), u()), S;
  })(), Nu;
}
var Ul = xO();
const OO = ({
  depth: e2,
  height: r = 24,
  width: n = 11,
  showLines: o = true,
  stroke: a = "rgb(241, 245, 249)"
}) => {
  const u = `indent_line_${Ul.generate()}`;
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "svg",
    {
      viewBox: `0 0 ${11 * e2} 24`,
      width: `${11 * e2}`,
      height: r,
      children: [
        /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "pattern",
          {
            id: u,
            x: "0",
            y: "0",
            width: n,
            height: r,
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "line",
              {
                x1: n / 2,
                y1: "0",
                x2: n / 2,
                y2: r,
                stroke: a
              }
            )
          }
        ) }),
        o ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: `url(#${u})`,
            x: "0",
            y: "0",
            width: `${11 * e2}`,
            height: r
          }
        ) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: o ? `url(#${u})` : "",
            x: "0",
            y: "0",
            width: 0,
            height: r
          }
        )
      ]
    }
  );
}, AO = ({ show: e2, expanded: r, onClick: n, variant: o = "arrow" }) => e2 ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    className: "flex h-6 w-5 items-center",
    onClick: (a) => n && n(a),
    children: (() => {
      switch (o) {
        case "arrow":
          return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            V0,
            {
              className: Je([
                "h-3 w-3 transform text-grey-50 transition ease-in-out",
                {
                  "rotate-0": r,
                  "-rotate-90": !r
                }
              ])
            }
          );
        case "caret":
          return r ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0, {}) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(d4, {});
        default:
          return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0, { className: "h-3 w-3 transform text-grey-50 transition ease-in-out" });
      }
    })()
  }
) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex h-6 w-3 items-center" }), Ev = ({
  node: e2,
  depth: r,
  expandedKeys: n,
  selectedKeys: o,
  actions: a,
  searchQuery: u,
  renderNode: f,
  onNodeClick: d
}) => {
  var p;
  const { key: w, children: S } = e2, y = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(
    () => ({
      expanded: n.includes(e2.key),
      selected: o.includes(e2.key)
    }),
    [n, e2.key, o]
  ), h = f && typeof f == "function" ? f(e2, r, y, a, u) : CO(e2, r, y, d);
  return !((p = e2.options) != null && p.filterable) || !u || e2.title.toLowerCase().includes(u.toLowerCase()) ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center space-x-2", children: h }, w),
    PO(
      S || [],
      r,
      u,
      n,
      o,
      y.expanded,
      a,
      d,
      f
    )
  ] }) : null;
}, TO = function(e2, r) {
  var f;
  const { title: n, icon: o, subtitle: a } = e2;
  let u = null;
  return o && (u = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(fO, { children: o })), /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "div",
    {
      className: "flex flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-nowrap",
      draggable: (f = e2.options) == null ? void 0 : f.draggable,
      onClick: () => {
        r && r(e2);
      },
      children: [
        u,
        /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            style: {
              lineHeight: "24px",
              fontSize: 11
            },
            children: n
          }
        ),
        a && /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mx-1 min-w-0 text-xxs italic text-fd-gray-mild", children: a })
      ]
    }
  );
}, PO = function(e2, r, n, o, a, u, f, d, w) {
  return e2.length && u ? e2.map((S) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    Ev,
    {
      actions: f,
      node: S,
      searchQuery: n,
      depth: r + 1,
      expandedKeys: o,
      selectedKeys: a,
      onNodeClick: d,
      renderNode: w
    },
    S.key
  )) : null;
}, CO = function(e2, r, n, o) {
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(OO, { showLines: true, depth: r }),
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      AO,
      {
        show: e2.children && e2.children.length > 0 || false,
        expanded: n.expanded
      }
    ),
    TO(e2, o)
  ] });
}, ha = (e2) => (r) => e2 === r, hM = function({
  treeData: r,
  renderNode: n,
  onNodeClick: o,
  onExpandNode: a,
  searchQuery: u,
  expandedKeys: f,
  expandCondition: d = "always",
  encapsulated: w,
  className: S
}) {
  const [y, h] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(() => ({
    expandedKeys: f || [],
    selectedKeys: []
  }));
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    d === "when-collapsed" && y.expandedKeys.length > 0 || h({
      ...y,
      expandedKeys: f || y.expandedKeys
    });
  }, [f]);
  const l = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(
    (b) => {
      if (!b) return;
      const E = y.expandedKeys.findIndex(ha(b.key));
      let x = [];
      E === -1 ? (x = [...y.expandedKeys, b.key], h(() => ({
        ...y,
        expandedKeys: x
      })), a && a(x)) : (x = y.expandedKeys.filter((P) => P !== b.key), h(() => ({
        ...y,
        expandedKeys: x
      })), a && a(x));
    },
    [y]
  ), p = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(
    (b) => {
      var x;
      if (!((x = b == null ? void 0 : b.options) != null && x.selectable)) return;
      y.selectedKeys.findIndex(ha(b.key)) === -1 && h({
        ...y,
        selectedKeys: [...y.selectedKeys, b.key]
      });
    },
    [y]
  ), m = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(
    (b) => {
      var x;
      if (!((x = b == null ? void 0 : b.options) != null && x.selectable)) return;
      y.selectedKeys.findIndex(ha(b.key)) === -1 && h({ ...y, selectedKeys: [b.key] });
    },
    [y]
  ), c = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(
    (b) => {
      var x;
      if (!((x = b == null ? void 0 : b.options) != null && x.selectable)) {
        h({ ...y, selectedKeys: [] });
        return;
      }
      y.selectedKeys.findIndex(ha(b.key)) !== -1 && h({
        ...y,
        selectedKeys: y.selectedKeys.filter((P) => P !== b.key)
      });
    },
    [y]
  ), g = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(
    () => ({
      expand: l,
      select: p,
      selectSingle: m,
      deselect: c
    }),
    [c, l, p, m]
  );
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: Je("fd-tree", S, {
        "pl-2 mb-1 rounded border bg-grey-900 p-1": w
      }),
      children: r.map((b) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        Ev,
        {
          node: b,
          searchQuery: u || "",
          depth: 0,
          expandedKeys: y.expandedKeys,
          selectedKeys: y.selectedKeys,
          actions: g,
          renderNode: n,
          onNodeClick: o
        },
        b.key
      ))
    }
  );
};
function vM(e2) {
  return e2.of && e2.children ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e2.children }) : null;
}
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (e2[o] = n[o]);
    }
    return e2;
  }, ut.apply(null, arguments);
}
function RO(e2) {
  for (var r = 0, n, o = 0, a = e2.length; a >= 4; ++o, a -= 4)
    n = e2.charCodeAt(o) & 255 | (e2.charCodeAt(++o) & 255) << 8 | (e2.charCodeAt(++o) & 255) << 16 | (e2.charCodeAt(++o) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, r = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e2.charCodeAt(o + 2) & 255) << 16;
    case 2:
      r ^= (e2.charCodeAt(o + 1) & 255) << 8;
    case 1:
      r ^= e2.charCodeAt(o) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var MO = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function xv(e2) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return r[n] === void 0 && (r[n] = e2(n)), r[n];
  };
}
var IO = /[A-Z]|^ms/g, LO = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ov = function(r) {
  return r.charCodeAt(1) === 45;
}, wp = function(r) {
  return r != null && typeof r != "boolean";
}, ku = /* @__PURE__ */ xv(function(e2) {
  return Ov(e2) ? e2 : e2.replace(IO, "-$&").toLowerCase();
}), bp = function(r, n) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(LO, function(o, a, u) {
          return gr = {
            name: a,
            styles: u,
            next: gr
          }, a;
        });
  }
  return MO[r] !== 1 && !Ov(r) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function co(e2, r, n) {
  if (n == null)
    return "";
  var o = n;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var a = n;
      if (a.anim === 1)
        return gr = {
          name: a.name,
          styles: a.styles,
          next: gr
        }, a.name;
      var u = n;
      if (u.styles !== void 0) {
        var f = u.next;
        if (f !== void 0)
          for (; f !== void 0; )
            gr = {
              name: f.name,
              styles: f.styles,
              next: gr
            }, f = f.next;
        var d = u.styles + ";";
        return d;
      }
      return FO(e2, r, n);
    }
    case "function": {
      if (e2 !== void 0) {
        var w = gr, S = n(e2);
        return gr = w, co(e2, r, S);
      }
      break;
    }
  }
  var y = n;
  if (r == null)
    return y;
  var h = r[y];
  return h !== void 0 ? h : y;
}
function FO(e2, r, n) {
  var o = "";
  if (Array.isArray(n))
    for (var a = 0; a < n.length; a++)
      o += co(e2, r, n[a]) + ";";
  else
    for (var u in n) {
      var f = n[u];
      if (typeof f != "object") {
        var d = f;
        r != null && r[d] !== void 0 ? o += u + "{" + r[d] + "}" : wp(d) && (o += ku(u) + ":" + bp(u, d) + ";");
      } else if (Array.isArray(f) && typeof f[0] == "string" && (r == null || r[f[0]] === void 0))
        for (var w = 0; w < f.length; w++)
          wp(f[w]) && (o += ku(u) + ":" + bp(u, f[w]) + ";");
      else {
        var S = co(e2, r, f);
        switch (u) {
          case "animation":
          case "animationName": {
            o += ku(u) + ":" + S + ";";
            break;
          }
          default:
            o += u + "{" + S + "}";
        }
      }
    }
  return o;
}
var Sp = /label:\s*([^\s;{]+)\s*(;|$)/g, gr;
function $O(e2, r, n) {
  if (e2.length === 1 && typeof e2[0] == "object" && e2[0] !== null && e2[0].styles !== void 0)
    return e2[0];
  var o = true, a = "";
  gr = void 0;
  var u = e2[0];
  if (u == null || u.raw === void 0)
    o = false, a += co(n, r, u);
  else {
    var f = u;
    a += f[0];
  }
  for (var d = 1; d < e2.length; d++)
    if (a += co(n, r, e2[d]), o) {
      var w = u;
      a += w[d];
    }
  Sp.lastIndex = 0;
  for (var S = "", y; (y = Sp.exec(a)) !== null; )
    S += "-" + y[1];
  var h = RO(a) + S;
  return {
    name: h,
    styles: a,
    next: gr
  };
}
var DO = function(r) {
  return r();
}, NO = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useInsertionEffect ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useInsertionEffect : false, kO = NO || DO, WO = true;
function UO(e2, r, n) {
  var o = "";
  return n.split(" ").forEach(function(a) {
    e2[a] !== void 0 ? r.push(e2[a] + ";") : a && (o += a + " ");
  }), o;
}
var Av = function(r, n, o) {
  var a = r.key + "-" + n.name;
  (o === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  WO === false) && r.registered[a] === void 0 && (r.registered[a] = n.styles);
}, zO = function(r, n, o) {
  Av(r, n, o);
  var a = r.key + "-" + n.name;
  if (r.inserted[n.name] === void 0) {
    var u = n;
    do
      r.insert(n === u ? "." + a : "", u, r.sheet, true), u = u.next;
    while (u !== void 0);
  }
}, BO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, HO = /* @__PURE__ */ xv(
  function(e2) {
    return BO.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jO = HO, qO = function(r) {
  return r !== "theme";
}, _p = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? jO : qO;
}, Ep = function(r, n, o) {
  var a;
  if (n) {
    var u = n.shouldForwardProp;
    a = r.__emotion_forwardProp && u ? function(f) {
      return r.__emotion_forwardProp(f) && u(f);
    } : u;
  }
  return typeof a != "function" && o && (a = r.__emotion_forwardProp), a;
}, ZO = function(r) {
  var n = r.cache, o = r.serialized, a = r.isStringTag;
  return Av(n, o, a), kO(function() {
    return zO(n, o, a);
  }), null;
}, KO = function e(r, n) {
  var o = r.__emotion_real === r, a = o && r.__emotion_base || r, u, f;
  n !== void 0 && (u = n.label, f = n.target);
  var d = Ep(r, n, o), w = d || _p(a), S = !w("as");
  return function() {
    var y = arguments, h = o && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (u !== void 0 && h.push("label:" + u + ";"), y[0] == null || y[0].raw === void 0)
      h.push.apply(h, y);
    else {
      var l = y[0];
      h.push(l[0]);
      for (var p = y.length, m = 1; m < p; m++)
        h.push(y[m], l[m]);
    }
    var c = withEmotionCache(function(g, b, E) {
      var x = S && g.as || a, P = "", T = [], M = g;
      if (g.theme == null) {
        M = {};
        for (var B in g)
          M[B] = g[B];
        M.theme = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(ThemeContext);
      }
      typeof g.className == "string" ? P = UO(b.registered, T, g.className) : g.className != null && (P = g.className + " ");
      var F = $O(h.concat(T), b.registered, M);
      P += b.key + "-" + F.name, f !== void 0 && (P += " " + f);
      var k = S && d === void 0 ? _p(x) : w, Y = {};
      for (var W in g)
        S && W === "as" || k(W) && (Y[W] = g[W]);
      return Y.className = P, E && (Y.ref = E), /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment, null, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(ZO, {
        cache: b,
        serialized: F,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(x, Y));
    });
    return c.displayName = u !== void 0 ? u : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", c.defaultProps = r.defaultProps, c.__emotion_real = c, c.__emotion_base = a, c.__emotion_styles = h, c.__emotion_forwardProp = d, Object.defineProperty(c, "toString", {
      value: function() {
        return "." + f;
      }
    }), c.withComponent = function(g, b) {
      var E = e(g, ut({}, n, b, {
        shouldForwardProp: Ep(c, b, true)
      }));
      return E.apply(void 0, h);
    }, c;
  };
}, GO = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Wa = KO.bind(null);
GO.forEach(function(e2) {
  Wa[e2] = Wa(e2);
});
var VO = function(e2) {
  if (typeof document > "u")
    return null;
  var r = Array.isArray(e2) ? e2[0] : e2;
  return r.ownerDocument.body;
}, Qn = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), ma = {}, Wu = 0, Tv = function(e2) {
  return e2 && (e2.host || Tv(e2.parentNode));
}, YO = function(e2, r) {
  return r.map(function(n) {
    if (e2.contains(n))
      return n;
    var o = Tv(n);
    return o && e2.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e2, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, XO = function(e2, r, n, o) {
  var a = YO(r, Array.isArray(e2) ? e2 : [e2]);
  ma[n] || (ma[n] = /* @__PURE__ */ new WeakMap());
  var u = ma[n], f = [], d = /* @__PURE__ */ new Set(), w = new Set(a), S = function(h) {
    !h || d.has(h) || (d.add(h), S(h.parentNode));
  };
  a.forEach(S);
  var y = function(h) {
    !h || w.has(h) || Array.prototype.forEach.call(h.children, function(l) {
      if (d.has(l))
        y(l);
      else
        try {
          var p = l.getAttribute(o), m = p !== null && p !== "false", c = (Qn.get(l) || 0) + 1, g = (u.get(l) || 0) + 1;
          Qn.set(l, c), u.set(l, g), f.push(l), c === 1 && m && va.set(l, true), g === 1 && l.setAttribute(n, "true"), m || l.setAttribute(o, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", l, b);
        }
    });
  };
  return y(r), d.clear(), Wu++, function() {
    f.forEach(function(h) {
      var l = Qn.get(h) - 1, p = u.get(h) - 1;
      Qn.set(h, l), u.set(h, p), l || (va.has(h) || h.removeAttribute(o), va.delete(h)), p || h.removeAttribute(n);
    }), Wu--, Wu || (Qn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), ma = {});
  };
}, JO = function(e2, r, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e2) ? e2 : [e2]), a = VO(e2);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), XO(o, a, n, "aria-hidden")) : function() {
    return null;
  };
}, ml = function(e2, r) {
  return ml = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
    n.__proto__ = o;
  } || function(n, o) {
    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
  }, ml(e2, r);
};
function Ya(e2, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  ml(e2, r);
  function n() {
    this.constructor = e2;
  }
  e2.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
}
var yr = function() {
  return yr = Object.assign || function(r) {
    for (var n, o = 1, a = arguments.length; o < a; o++) {
      n = arguments[o];
      for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && (r[u] = n[u]);
    }
    return r;
  }, yr.apply(this, arguments);
};
function Pv(e2, r) {
  var n = {};
  for (var o in e2) Object.prototype.hasOwnProperty.call(e2, o) && r.indexOf(o) < 0 && (n[o] = e2[o]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e2); a < o.length; a++)
      r.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, o[a]) && (n[o[a]] = e2[o[a]]);
  return n;
}
function gl(e2) {
  var r = typeof Symbol == "function" && Symbol.iterator, n = r && e2[r], o = 0;
  if (n) return n.call(e2);
  if (e2 && typeof e2.length == "number") return {
    next: function() {
      return e2 && o >= e2.length && (e2 = void 0), { value: e2 && e2[o++], done: !e2 };
    }
  };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function yl(e2, r) {
  var n = typeof Symbol == "function" && e2[Symbol.iterator];
  if (!n) return e2;
  var o = n.call(e2), a, u = [], f;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = o.next()).done; ) u.push(a.value);
  } catch (d) {
    f = { error: d };
  } finally {
    try {
      a && !a.done && (n = o.return) && n.call(o);
    } finally {
      if (f) throw f.error;
    }
  }
  return u;
}
function Ua(e2, r, n) {
  if (n || arguments.length === 2) for (var o = 0, a = r.length, u; o < a; o++)
    (u || !(o in r)) && (u || (u = Array.prototype.slice.call(r, 0, o)), u[o] = r[o]);
  return e2.concat(u || Array.prototype.slice.call(r));
}
var Ia = "right-scroll-bar-position", La = "width-before-scroll-bar", QO = "with-scroll-bars-hidden", eA = "--removed-body-scroll-bar-size";
function Uu(e2, r) {
  return typeof e2 == "function" ? e2(r) : e2 && (e2.current = r), e2;
}
function tA(e2, r) {
  var n = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(function() {
    return {
      // value
      value: e2,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var a = n.value;
          a !== o && (n.value = o, n.callback(o, a));
        }
      }
    };
  })[0];
  return n.callback = r, n.facade;
}
var rA = typeof window < "u" ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useLayoutEffect : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect, xp = /* @__PURE__ */ new WeakMap();
function nA(e2, r) {
  var n = tA(null, function(o) {
    return e2.forEach(function(a) {
      return Uu(a, o);
    });
  });
  return rA(function() {
    var o = xp.get(n);
    if (o) {
      var a = new Set(o), u = new Set(e2), f = n.current;
      a.forEach(function(d) {
        u.has(d) || Uu(d, null);
      }), u.forEach(function(d) {
        a.has(d) || Uu(d, f);
      });
    }
    xp.set(n, e2);
  }, [e2]), n;
}
function iA(e2) {
  return e2;
}
function oA(e2, r) {
  r === void 0 && (r = iA);
  var n = [], o = false, a = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e2;
    },
    useMedium: function(u) {
      var f = r(u, o);
      return n.push(f), function() {
        n = n.filter(function(d) {
          return d !== f;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (o = true; n.length; ) {
        var f = n;
        n = [], f.forEach(u);
      }
      n = {
        push: function(d) {
          return u(d);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(u) {
      o = true;
      var f = [];
      if (n.length) {
        var d = n;
        n = [], d.forEach(u), f = n;
      }
      var w = function() {
        var y = f;
        f = [], y.forEach(u);
      }, S = function() {
        return Promise.resolve().then(w);
      };
      S(), n = {
        push: function(y) {
          f.push(y), S();
        },
        filter: function(y) {
          return f = f.filter(y), n;
        }
      };
    }
  };
  return a;
}
function aA(e2) {
  e2 === void 0 && (e2 = {});
  var r = oA(null);
  return r.options = yr({ async: true, ssr: false }, e2), r;
}
var Cv = function(e2) {
  var r = e2.sideCar, n = Pv(e2, ["sideCar"]);
  if (!r)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = r.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(o, yr({}, n));
};
Cv.isSideCarExport = true;
function sA(e2, r) {
  return e2.useMedium(r), Cv;
}
var Rv = aA(), zu = function() {
}, Xa = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef(function(e2, r) {
  var n = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), o = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState({
    onScrollCapture: zu,
    onWheelCapture: zu,
    onTouchMoveCapture: zu
  }), a = o[0], u = o[1], f = e2.forwardProps, d = e2.children, w = e2.className, S = e2.removeScrollBar, y = e2.enabled, h = e2.shards, l = e2.sideCar, p = e2.noRelative, m = e2.noIsolation, c = e2.inert, g = e2.allowPinchZoom, b = e2.as, E = b === void 0 ? "div" : b, x = e2.gapMode, P = Pv(e2, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), T = l, M = nA([n, r]), B = yr(yr({}, P), a);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(
    qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment,
    null,
    y && qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(T, { sideCar: Rv, removeScrollBar: S, shards: h, noRelative: p, noIsolation: m, inert: c, setCallbacks: u, allowPinchZoom: !!g, lockRef: n, gapMode: x }),
    f ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.cloneElement(qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Children.only(d), yr(yr({}, B), { ref: M })) : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(E, yr({}, B, { className: w, ref: M }), d)
  );
});
Xa.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
Xa.classNames = {
  fullWidth: La,
  zeroRight: Ia
};
var uA = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function lA() {
  if (!document)
    return null;
  var e2 = document.createElement("style");
  e2.type = "text/css";
  var r = uA();
  return r && e2.setAttribute("nonce", r), e2;
}
function fA(e2, r) {
  e2.styleSheet ? e2.styleSheet.cssText = r : e2.appendChild(document.createTextNode(r));
}
function cA(e2) {
  var r = document.head || document.getElementsByTagName("head")[0];
  r.appendChild(e2);
}
var dA = function() {
  var e2 = 0, r = null;
  return {
    add: function(n) {
      e2 == 0 && (r = lA()) && (fA(r, n), cA(r)), e2++;
    },
    remove: function() {
      e2--, !e2 && r && (r.parentNode && r.parentNode.removeChild(r), r = null);
    }
  };
}, pA = function() {
  var e2 = dA();
  return function(r, n) {
    qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(function() {
      return e2.add(r), function() {
        e2.remove();
      };
    }, [r && n]);
  };
}, Mv = function() {
  var e2 = pA(), r = function(n) {
    var o = n.styles, a = n.dynamic;
    return e2(o, a), null;
  };
  return r;
}, hA = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bu = function(e2) {
  return parseInt(e2 || "", 10) || 0;
}, vA = function(e2) {
  var r = window.getComputedStyle(document.body), n = r[e2 === "padding" ? "paddingLeft" : "marginLeft"], o = r[e2 === "padding" ? "paddingTop" : "marginTop"], a = r[e2 === "padding" ? "paddingRight" : "marginRight"];
  return [Bu(n), Bu(o), Bu(a)];
}, mA = function(e2) {
  if (e2 === void 0 && (e2 = "margin"), typeof window > "u")
    return hA;
  var r = vA(e2), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: r[0],
    top: r[1],
    right: r[2],
    gap: Math.max(0, o - n + r[2] - r[0])
  };
}, gA = Mv(), ri = "data-scroll-locked", yA = function(e2, r, n, o) {
  var a = e2.left, u = e2.top, f = e2.right, d = e2.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(QO, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(d, "px ").concat(o, `;
  }
  body[`).concat(ri, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    r && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(u, `px;
    padding-right: `).concat(f, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(d, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(d, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ia, ` {
    right: `).concat(d, "px ").concat(o, `;
  }
  
  .`).concat(La, ` {
    margin-right: `).concat(d, "px ").concat(o, `;
  }
  
  .`).concat(Ia, " .").concat(Ia, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(La, " .").concat(La, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ri, `] {
    `).concat(eA, ": ").concat(d, `px;
  }
`);
}, Op = function() {
  var e2 = parseInt(document.body.getAttribute(ri) || "0", 10);
  return isFinite(e2) ? e2 : 0;
}, wA = function() {
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(function() {
    return document.body.setAttribute(ri, (Op() + 1).toString()), function() {
      var e2 = Op() - 1;
      e2 <= 0 ? document.body.removeAttribute(ri) : document.body.setAttribute(ri, e2.toString());
    };
  }, []);
}, bA = function(e2) {
  var r = e2.noRelative, n = e2.noImportant, o = e2.gapMode, a = o === void 0 ? "margin" : o;
  wA();
  var u = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(function() {
    return mA(a);
  }, [a]);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(gA, { styles: yA(u, !r, a, n ? "" : "!important") });
}, wl = false;
if (typeof window < "u")
  try {
    var ga = Object.defineProperty({}, "passive", {
      get: function() {
        return wl = true, true;
      }
    });
    window.addEventListener("test", ga, ga), window.removeEventListener("test", ga, ga);
  } catch {
    wl = false;
  }
var ei = wl ? { passive: false } : false, SA = function(e2) {
  return e2.tagName === "TEXTAREA";
}, Iv = function(e2, r) {
  if (!(e2 instanceof Element))
    return false;
  var n = window.getComputedStyle(e2);
  return (
    // not-not-scrollable
    n[r] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !SA(e2) && n[r] === "visible")
  );
}, _A = function(e2) {
  return Iv(e2, "overflowY");
}, EA = function(e2) {
  return Iv(e2, "overflowX");
}, Ap = function(e2, r) {
  var n = r.ownerDocument, o = r;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var a = Lv(e2, o);
    if (a) {
      var u = Fv(e2, o), f = u[1], d = u[2];
      if (f > d)
        return true;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return false;
}, xA = function(e2) {
  var r = e2.scrollTop, n = e2.scrollHeight, o = e2.clientHeight;
  return [
    r,
    n,
    o
  ];
}, OA = function(e2) {
  var r = e2.scrollLeft, n = e2.scrollWidth, o = e2.clientWidth;
  return [
    r,
    n,
    o
  ];
}, Lv = function(e2, r) {
  return e2 === "v" ? _A(r) : EA(r);
}, Fv = function(e2, r) {
  return e2 === "v" ? xA(r) : OA(r);
}, AA = function(e2, r) {
  return e2 === "h" && r === "rtl" ? -1 : 1;
}, TA = function(e2, r, n, o, a) {
  var u = AA(e2, window.getComputedStyle(r).direction), f = u * o, d = n.target, w = r.contains(d), S = false, y = f > 0, h = 0, l = 0;
  do {
    if (!d)
      break;
    var p = Fv(e2, d), m = p[0], c = p[1], g = p[2], b = c - g - u * m;
    (m || b) && Lv(e2, d) && (h += b, l += m);
    var E = d.parentNode;
    d = E && E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? E.host : E;
  } while (
    // portaled content
    !w && d !== document.body || // self content
    w && (r.contains(d) || r === d)
  );
  return (y && Math.abs(h) < 1 || !y && Math.abs(l) < 1) && (S = true), S;
}, ya = function(e2) {
  return "changedTouches" in e2 ? [e2.changedTouches[0].clientX, e2.changedTouches[0].clientY] : [0, 0];
}, Tp = function(e2) {
  return [e2.deltaX, e2.deltaY];
}, Pp = function(e2) {
  return e2 && "current" in e2 ? e2.current : e2;
}, PA = function(e2, r) {
  return e2[0] === r[0] && e2[1] === r[1];
}, CA = function(e2) {
  return `
  .block-interactivity-`.concat(e2, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e2, ` {pointer-events: all;}
`);
}, RA = 0, ti = [];
function MA(e2) {
  var r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef([]), n = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef([0, 0]), o = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(), a = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(RA++)[0], u = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(Mv)[0], f = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(e2);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(function() {
    f.current = e2;
  }, [e2]), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(function() {
    if (e2.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var c = Ua([e2.lockRef.current], (e2.shards || []).map(Pp), true).filter(Boolean);
      return c.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), c.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e2.inert, e2.lockRef.current, e2.shards]);
  var d = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(function(c, g) {
    if ("touches" in c && c.touches.length === 2 || c.type === "wheel" && c.ctrlKey)
      return !f.current.allowPinchZoom;
    var b = ya(c), E = n.current, x = "deltaX" in c ? c.deltaX : E[0] - b[0], P = "deltaY" in c ? c.deltaY : E[1] - b[1], T, M = c.target, B = Math.abs(x) > Math.abs(P) ? "h" : "v";
    if ("touches" in c && B === "h" && M.type === "range")
      return false;
    var F = Ap(B, M);
    if (!F)
      return true;
    if (F ? T = B : (T = B === "v" ? "h" : "v", F = Ap(B, M)), !F)
      return false;
    if (!o.current && "changedTouches" in c && (x || P) && (o.current = T), !T)
      return true;
    var k = o.current || T;
    return TA(k, g, c, k === "h" ? x : P);
  }, []), w = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(function(c) {
    var g = c;
    if (!(!ti.length || ti[ti.length - 1] !== u)) {
      var b = "deltaY" in g ? Tp(g) : ya(g), E = r.current.filter(function(T) {
        return T.name === g.type && (T.target === g.target || g.target === T.shadowParent) && PA(T.delta, b);
      })[0];
      if (E && E.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!E) {
        var x = (f.current.shards || []).map(Pp).filter(Boolean).filter(function(T) {
          return T.contains(g.target);
        }), P = x.length > 0 ? d(g, x[0]) : !f.current.noIsolation;
        P && g.cancelable && g.preventDefault();
      }
    }
  }, []), S = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(function(c, g, b, E) {
    var x = { name: c, delta: g, target: b, should: E, shadowParent: IA(b) };
    r.current.push(x), setTimeout(function() {
      r.current = r.current.filter(function(P) {
        return P !== x;
      });
    }, 1);
  }, []), y = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(function(c) {
    n.current = ya(c), o.current = void 0;
  }, []), h = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(function(c) {
    S(c.type, Tp(c), c.target, d(c, e2.lockRef.current));
  }, []), l = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(function(c) {
    S(c.type, ya(c), c.target, d(c, e2.lockRef.current));
  }, []);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(function() {
    return ti.push(u), e2.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: l
    }), document.addEventListener("wheel", w, ei), document.addEventListener("touchmove", w, ei), document.addEventListener("touchstart", y, ei), function() {
      ti = ti.filter(function(c) {
        return c !== u;
      }), document.removeEventListener("wheel", w, ei), document.removeEventListener("touchmove", w, ei), document.removeEventListener("touchstart", y, ei);
    };
  }, []);
  var p = e2.removeScrollBar, m = e2.inert;
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(
    qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment,
    null,
    m ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(u, { styles: CA(a) }) : null,
    p ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(bA, { noRelative: e2.noRelative, gapMode: e2.gapMode }) : null
  );
}
function IA(e2) {
  for (var r = null; e2 !== null; )
    e2 instanceof ShadowRoot && (r = e2.host, e2 = e2.host), e2 = e2.parentNode;
  return r;
}
const LA = sA(Rv, MA);
var $v = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef(function(e2, r) {
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(Xa, yr({}, e2, { ref: r, sideCar: LA }));
});
$v.classNames = Xa.classNames;
const FA = globalThis != null && globalThis.document ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useLayoutEffect : () => {
}, $A = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useId || (() => {
});
let DA = 0;
function NA(e2) {
  const [r, n] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState($A());
  return FA(() => {
    n((o) => o ?? String(DA++));
  }, [e2]), e2 || (r ? `radix-${r}` : "");
}
function Dv(...e2) {
  return (r) => e2.forEach((n) => (function(o, a) {
    typeof o == "function" ? o(a) : o != null && (o.current = a);
  })(n, r));
}
function $n(...e2) {
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(Dv(...e2), e2);
}
const Nv = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { children: n, ...o } = e2;
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Children.toArray(n).some(Cp) ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment, null, qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Children.map(n, (a) => Cp(a) ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(bl, ut({}, o, { ref: r }), a.props.children) : a)) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(bl, ut({}, o, { ref: r }), n);
});
Nv.displayName = "Slot";
const bl = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { children: n, ...o } = e2;
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.isValidElement(n) ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.cloneElement(n, { ...WA(o, n.props), ref: Dv(r, n.ref) }) : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Children.count(n) > 1 ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Children.only(null) : null;
});
bl.displayName = "SlotClone";
const kA = ({ children: e2 }) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment, null, e2);
function Cp(e2) {
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.isValidElement(e2) && e2.type === kA;
}
function WA(e2, r) {
  const n = { ...r };
  for (const o in r) {
    const a = e2[o], u = r[o];
    /^on[A-Z]/.test(o) ? n[o] = (...f) => {
      u == null || u(...f), a == null || a(...f);
    } : o === "style" ? n[o] = { ...a, ...u } : o === "className" && (n[o] = [a, u].filter(Boolean).join(" "));
  }
  return { ...e2, ...n };
}
const di = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e2, r) => ({ ...e2, [r]: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((n, o) => {
  const { asChild: a, ...u } = n, f = a ? Nv : r;
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    window[Symbol.for("radix-ui")] = true;
  }, []), /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(f, ut({}, u, { ref: o }));
}) }), {}), Rp = globalThis != null && globalThis.document ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useLayoutEffect : () => {
}, kv = (e2) => {
  const { present: r, children: n } = e2, o = (function(f) {
    const [d, w] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(), S = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef({}), y = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(f), h = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef("none"), l = f ? "mounted" : "unmounted", [p, m] = (function(c, g) {
      return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useReducer((b, E) => {
        const x = g[b][E];
        return x ?? b;
      }, c);
    })(l, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
      const c = wa(S.current);
      h.current = p === "mounted" ? c : "none";
    }, [p]), Rp(() => {
      const c = S.current, g = y.current;
      if (g !== f) {
        const b = h.current, E = wa(c);
        f ? m("MOUNT") : E === "none" || (c == null ? void 0 : c.display) === "none" ? m("UNMOUNT") : m(g && b !== E ? "ANIMATION_OUT" : "UNMOUNT"), y.current = f;
      }
    }, [f, m]), Rp(() => {
      if (d) {
        const c = (b) => {
          const E = wa(S.current).includes(b.animationName);
          b.target === d && E && m("ANIMATION_END");
        }, g = (b) => {
          b.target === d && (h.current = wa(S.current));
        };
        return d.addEventListener("animationstart", g), d.addEventListener("animationcancel", c), d.addEventListener("animationend", c), () => {
          d.removeEventListener("animationstart", g), d.removeEventListener("animationcancel", c), d.removeEventListener("animationend", c);
        };
      }
      m("ANIMATION_END");
    }, [d, m]), { isPresent: ["mounted", "unmountSuspended"].includes(p), ref: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback((c) => {
      c && (S.current = getComputedStyle(c)), w(c);
    }, []) };
  })(r), a = typeof n == "function" ? n({ present: o.isPresent }) : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Children.only(n), u = $n(o.ref, a.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.cloneElement(a, { ref: u }) : null;
};
function wa(e2) {
  return (e2 == null ? void 0 : e2.animationName) || "none";
}
kv.displayName = "Presence";
let Hu = 0;
function UA() {
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    var e2, r;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e2 = n[0]) !== null && e2 !== void 0 ? e2 : Mp()), document.body.insertAdjacentElement("beforeend", (r = n[1]) !== null && r !== void 0 ? r : Mp()), Hu++, () => {
      Hu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), Hu--;
    };
  }, []);
}
function Mp() {
  const e2 = document.createElement("span");
  return e2.setAttribute("data-radix-focus-guard", ""), e2.tabIndex = 0, e2.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e2;
}
const zA = globalThis != null && globalThis.document ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useLayoutEffect : () => {
}, Wv = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  var n, o;
  const { containerRef: a, style: u, ...f } = e2, d = (n = a == null ? void 0 : a.current) !== null && n !== void 0 ? n : globalThis == null || (o = globalThis.document) === null || o === void 0 ? void 0 : o.body, [, w] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState({});
  return zA(() => {
    w({});
  }, []), d ? /* @__PURE__ */ Mi$1.createPortal(/* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(di.div, ut({ "data-radix-portal": "" }, f, { ref: r, style: d === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...u } : void 0 })), d) : null;
});
function In(e2) {
  const r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(e2);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => (...n) => {
    var o;
    return (o = r.current) === null || o === void 0 ? void 0 : o.call(r, ...n);
  }, []);
}
const Ip = { bubbles: false, cancelable: true }, BA = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { loop: n = false, trapped: o = false, onMountAutoFocus: a, onUnmountAutoFocus: u, ...f } = e2, [d, w] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(null), S = In(a), y = In(u), h = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), l = $n(r, (c) => w(c)), p = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (o) {
      let c = function(b) {
        if (p.paused || !d) return;
        const E = b.target;
        d.contains(E) ? h.current = E : _n(h.current, { select: true });
      }, g = function(b) {
        !p.paused && d && (d.contains(b.relatedTarget) || _n(h.current, { select: true }));
      };
      return document.addEventListener("focusin", c), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", c), document.removeEventListener("focusout", g);
      };
    }
  }, [o, d, p.paused]), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (d) {
      $p.add(p);
      const g = document.activeElement;
      if (!d.contains(g)) {
        const b = new Event("focusScope.autoFocusOnMount", Ip);
        d.addEventListener("focusScope.autoFocusOnMount", S), d.dispatchEvent(b), b.defaultPrevented || ((function(E, { select: x = false } = {}) {
          const P = document.activeElement;
          for (const T of E) if (_n(T, { select: x }), document.activeElement !== P) return;
        })((c = Lp(d), c.filter((E) => E.tagName !== "A")), { select: true }), document.activeElement === g && _n(d));
      }
      return () => {
        d.removeEventListener("focusScope.autoFocusOnMount", S), setTimeout(() => {
          const b = new Event("focusScope.autoFocusOnUnmount", Ip);
          d.addEventListener("focusScope.autoFocusOnUnmount", y), d.dispatchEvent(b), b.defaultPrevented || _n(g ?? document.body, { select: true }), d.removeEventListener("focusScope.autoFocusOnUnmount", y), $p.remove(p);
        }, 0);
      };
    }
    var c;
  }, [d, S, y, p]);
  const m = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback((c) => {
    if (!n && !o || p.paused) return;
    const g = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, b = document.activeElement;
    if (g && b) {
      const E = c.currentTarget, [x, P] = (function(T) {
        const M = Lp(T), B = Fp(M, T), F = Fp(M.reverse(), T);
        return [B, F];
      })(E);
      x && P ? c.shiftKey || b !== P ? c.shiftKey && b === x && (c.preventDefault(), n && _n(P, { select: true })) : (c.preventDefault(), n && _n(x, { select: true })) : b === E && c.preventDefault();
    }
  }, [n, o, p.paused]);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(di.div, ut({ tabIndex: -1 }, f, { ref: l, onKeyDown: m }));
});
function Lp(e2) {
  const r = [], n = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) r.push(n.currentNode);
  return r;
}
function Fp(e2, r) {
  for (const n of e2) if (!HA(n, { upTo: r })) return n;
}
function HA(e2, { upTo: r }) {
  if (getComputedStyle(e2).visibility === "hidden") return true;
  for (; e2; ) {
    if (r !== void 0 && e2 === r) return false;
    if (getComputedStyle(e2).display === "none") return true;
    e2 = e2.parentElement;
  }
  return false;
}
function _n(e2, { select: r = false } = {}) {
  if (e2 && e2.focus) {
    const n = document.activeElement;
    e2.focus({ preventScroll: true }), e2 !== n && (function(o) {
      return o instanceof HTMLInputElement && "select" in o;
    })(e2) && r && e2.select();
  }
}
const $p = /* @__PURE__ */ (function() {
  let e2 = [];
  return { add(r) {
    const n = e2[0];
    r !== n && (n == null || n.pause()), e2 = Dp(e2, r), e2.unshift(r);
  }, remove(r) {
    var n;
    e2 = Dp(e2, r), (n = e2[0]) === null || n === void 0 || n.resume();
  } };
})();
function Dp(e2, r) {
  const n = [...e2], o = n.indexOf(r);
  return o !== -1 && n.splice(o, 1), n;
}
function jA(e2) {
  const r = In(e2);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [r]);
}
const qA = globalThis != null && globalThis.document ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useLayoutEffect : () => {
};
let Np, ba = 0;
function ZA({ disabled: e2 }) {
  const r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
  qA(() => {
    if (e2) {
      let n = function() {
        ba--, ba === 0 && (document.body.style.pointerEvents = Np);
      }, o = function(a) {
        r.current = a.pointerType !== "mouse";
      };
      return ba === 0 && (Np = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", ba++, document.addEventListener("pointerup", o), () => {
        r.current ? document.addEventListener("click", n, { once: true }) : n(), document.removeEventListener("pointerup", o);
      };
    }
  }, [e2]);
}
function Rn(e2, r, { checkForDefaultPrevented: n = true } = {}) {
  return function(o) {
    if (e2 == null || e2(o), n === false || !o.defaultPrevented) return r == null ? void 0 : r(o);
  };
}
const KA = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), GA = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { disableOutsidePointerEvents: n = false, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: u, onInteractOutside: f, onDismiss: d, ...w } = e2, S = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(KA), [y, h] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(null), [, l] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState({}), p = $n(r, (M) => h(M)), m = Array.from(S.layers), [c] = [...S.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(c), b = y ? m.indexOf(y) : -1, E = S.layersWithOutsidePointerEventsDisabled.size > 0, x = b >= g, P = (function(M) {
    const B = In(M), F = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
    return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
      const k = (W) => {
        W.target && !F.current && Wp("dismissableLayer.pointerDownOutside", B, { originalEvent: W }), F.current = false;
      }, Y = window.setTimeout(() => {
        document.addEventListener("pointerdown", k);
      }, 0);
      return () => {
        window.clearTimeout(Y), document.removeEventListener("pointerdown", k);
      };
    }, [B]), { onPointerDownCapture: () => F.current = true };
  })((M) => {
    const B = M.target, F = [...S.branches].some((k) => k.contains(B));
    x && !F && (a == null || a(M), f == null || f(M), M.defaultPrevented || d == null || d());
  }), T = (function(M) {
    const B = In(M), F = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
    return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
      const k = (Y) => {
        Y.target && !F.current && Wp("dismissableLayer.focusOutside", B, { originalEvent: Y });
      };
      return document.addEventListener("focusin", k), () => document.removeEventListener("focusin", k);
    }, [B]), { onFocusCapture: () => F.current = true, onBlurCapture: () => F.current = false };
  })((M) => {
    const B = M.target;
    [...S.branches].some((F) => F.contains(B)) || (u == null || u(M), f == null || f(M), M.defaultPrevented || d == null || d());
  });
  return jA((M) => {
    b === S.layers.size - 1 && (o == null || o(M), M.defaultPrevented || d == null || d());
  }), ZA({ disabled: n }), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    y && (n && S.layersWithOutsidePointerEventsDisabled.add(y), S.layers.add(y), kp());
  }, [y, n, S]), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => () => {
    y && (S.layers.delete(y), S.layersWithOutsidePointerEventsDisabled.delete(y), kp());
  }, [y, S]), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    const M = () => l({});
    return document.addEventListener("dismissableLayer.update", M), () => document.removeEventListener("dismissableLayer.update", M);
  }, []), /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(di.div, ut({}, w, { ref: p, style: { pointerEvents: E ? x ? "auto" : "none" : void 0, ...e2.style }, onFocusCapture: Rn(e2.onFocusCapture, T.onFocusCapture), onBlurCapture: Rn(e2.onBlurCapture, T.onBlurCapture), onPointerDownCapture: Rn(e2.onPointerDownCapture, P.onPointerDownCapture) }));
});
function kp() {
  const e2 = new Event("dismissableLayer.update");
  document.dispatchEvent(e2);
}
function Wp(e2, r, n) {
  const o = n.originalEvent.target, a = new CustomEvent(e2, { bubbles: false, cancelable: true, detail: n });
  return r && o.addEventListener(e2, r, { once: true }), !o.dispatchEvent(a);
}
function Up(e2) {
  const [r, n] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(void 0);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (e2) {
      const o = new ResizeObserver((a) => {
        if (!Array.isArray(a) || !a.length) return;
        const u = a[0];
        let f, d;
        if ("borderBoxSize" in u) {
          const w = u.borderBoxSize, S = Array.isArray(w) ? w[0] : w;
          f = S.inlineSize, d = S.blockSize;
        } else {
          const w = e2.getBoundingClientRect();
          f = w.width, d = w.height;
        }
        n({ width: f, height: d });
      });
      return o.observe(e2, { box: "border-box" }), () => o.unobserve(e2);
    }
    n(void 0);
  }, [e2]), r;
}
function VA(e2, r) {
  const n = En.get(e2);
  return n === void 0 ? (En.set(e2, { rect: {}, callbacks: [r] }), En.size === 1 && (Sl = requestAnimationFrame(Uv))) : (n.callbacks.push(r), r(e2.getBoundingClientRect())), () => {
    const o = En.get(e2);
    if (o === void 0) return;
    const a = o.callbacks.indexOf(r);
    a > -1 && o.callbacks.splice(a, 1), o.callbacks.length === 0 && (En.delete(e2), En.size === 0 && cancelAnimationFrame(Sl));
  };
}
let Sl;
const En = /* @__PURE__ */ new Map();
function Uv() {
  const e2 = [];
  En.forEach((r, n) => {
    const o = n.getBoundingClientRect();
    var a, u;
    a = r.rect, u = o, (a.width !== u.width || a.height !== u.height || a.top !== u.top || a.right !== u.right || a.bottom !== u.bottom || a.left !== u.left) && (r.rect = o, e2.push(r));
  }), e2.forEach((r) => {
    r.callbacks.forEach((n) => n(r.rect));
  }), Sl = requestAnimationFrame(Uv);
}
function YA(e2) {
  const [r, n] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState();
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (e2) {
      const o = VA(e2, n);
      return () => {
        n(void 0), o();
      };
    }
  }, [e2]), r;
}
function zv(e2, r = []) {
  let n = [];
  const o = () => {
    const a = n.map((u) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(u));
    return function(u) {
      const f = (u == null ? void 0 : u[e2]) || a;
      return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ [`__scope${e2}`]: { ...u, [e2]: f } }), [u, f]);
    };
  };
  return o.scopeName = e2, [function(a, u) {
    const f = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(u), d = n.length;
    function w(S) {
      const { scope: y, children: h, ...l } = S, p = (y == null ? void 0 : y[e2][d]) || f, m = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => l, Object.values(l));
      return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(p.Provider, { value: m }, h);
    }
    return n = [...n, u], w.displayName = a + "Provider", [w, function(S, y) {
      const h = (y == null ? void 0 : y[e2][d]) || f, l = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(h);
      if (l) return l;
      if (u !== void 0) return u;
      throw new Error(`\`${S}\` must be used within \`${a}\``);
    }];
  }, XA(o, ...r)];
}
function XA(...e2) {
  const r = e2[0];
  if (e2.length === 1) return r;
  const n = () => {
    const o = e2.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function(a) {
      const u = o.reduce((f, { useScope: d, scopeName: w }) => ({ ...f, ...d(a)[`__scope${w}`] }), {});
      return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ [`__scope${r.scopeName}`]: u }), [u]);
    };
  };
  return n.scopeName = r.scopeName, n;
}
function JA({ anchorRect: e2, popperSize: r, arrowSize: n, arrowOffset: o = 0, side: a, sideOffset: u = 0, align: f, alignOffset: d = 0, shouldAvoidCollisions: w = true, collisionBoundariesRect: S, collisionTolerance: y = 0 }) {
  if (!e2 || !r || !S) return { popperStyles: QA, arrowStyles: ju };
  const h = (function(B, F, k = 0, Y = 0, W) {
    const L = W ? W.height : 0, U = zp(F, B, "x"), H = zp(F, B, "y"), R = H.before - k - L, X = H.after + k + L, G = U.before - k - L, ee = U.after + k + L;
    return { top: { start: { x: U.start + Y, y: R }, center: { x: U.center, y: R }, end: { x: U.end - Y, y: R } }, right: { start: { x: ee, y: H.start + Y }, center: { x: ee, y: H.center }, end: { x: ee, y: H.end - Y } }, bottom: { start: { x: U.start + Y, y: X }, center: { x: U.center, y: X }, end: { x: U.end - Y, y: X } }, left: { start: { x: G, y: H.start + Y }, center: { x: G, y: H.center }, end: { x: G, y: H.end - Y } } };
  })(r, e2, u, d, n), l = h[a][f];
  if (w === false) {
    const B = Bp(l);
    let F = ju;
    return n && (F = jp({ popperSize: r, arrowSize: n, arrowOffset: o, side: a, align: f })), { popperStyles: { ...B, "--radix-popper-transform-origin": Hp(r, a, f, o, n) }, arrowStyles: F, placedSide: a, placedAlign: f };
  }
  const p = DOMRect.fromRect({ ...r, ...l }), m = (c = S, g = y, DOMRect.fromRect({ width: c.width - 2 * g, height: c.height - 2 * g, x: c.left + g, y: c.top + g }));
  var c, g;
  const b = Zp(p, m), E = h[qp(a)][f], x = (function(B, F, k) {
    const Y = qp(B);
    return F[B] && !k[Y] ? Y : B;
  })(a, b, Zp(DOMRect.fromRect({ ...r, ...E }), m)), P = (function(B, F, k, Y, W) {
    const L = k === "top" || k === "bottom", U = L ? "left" : "top", H = L ? "right" : "bottom", R = L ? "width" : "height", X = F[R] > B[R];
    return (Y === "start" || Y === "center") && (W[U] && X || W[H] && !X) ? "end" : (Y === "end" || Y === "center") && (W[H] && X || W[U] && !X) ? "start" : Y;
  })(r, e2, a, f, b), T = Bp(h[x][P]);
  let M = ju;
  return n && (M = jp({ popperSize: r, arrowSize: n, arrowOffset: o, side: x, align: P })), { popperStyles: { ...T, "--radix-popper-transform-origin": Hp(r, x, P, o, n) }, arrowStyles: M, placedSide: x, placedAlign: P };
}
function zp(e2, r, n) {
  const o = e2[n === "x" ? "left" : "top"], a = n === "x" ? "width" : "height", u = e2[a], f = r[a];
  return { before: o - f, start: o, center: o + (u - f) / 2, end: o + u - f, after: o + u };
}
function Bp(e2) {
  return { position: "absolute", top: 0, left: 0, minWidth: "max-content", willChange: "transform", transform: `translate3d(${Math.round(e2.x + window.scrollX)}px, ${Math.round(e2.y + window.scrollY)}px, 0)` };
}
function Hp(e2, r, n, o, a) {
  const u = r === "top" || r === "bottom", f = a ? a.width : 0, d = a ? a.height : 0, w = f / 2 + o;
  let S = "", y = "";
  return u ? (S = { start: `${w}px`, center: "center", end: e2.width - w + "px" }[n], y = r === "top" ? `${e2.height + d}px` : -d + "px") : (S = r === "left" ? `${e2.width + d}px` : -d + "px", y = { start: `${w}px`, center: "center", end: e2.height - w + "px" }[n]), `${S} ${y}`;
}
const QA = { position: "fixed", top: 0, left: 0, opacity: 0, transform: "translate3d(0, -200%, 0)" }, ju = { position: "absolute", opacity: 0 };
function jp({ popperSize: e2, arrowSize: r, arrowOffset: n, side: o, align: a }) {
  const u = (e2.width - r.width) / 2, f = (e2.height - r.width) / 2, d = { top: 0, right: 90, bottom: 180, left: -90 }[o], w = Math.max(r.width, r.height), S = { width: `${w}px`, height: `${w}px`, transform: `rotate(${d}deg)`, willChange: "transform", position: "absolute", [o]: "100%", direction: eT(o, a) };
  return o !== "top" && o !== "bottom" || (a === "start" && (S.left = `${n}px`), a === "center" && (S.left = `${u}px`), a === "end" && (S.right = `${n}px`)), o !== "left" && o !== "right" || (a === "start" && (S.top = `${n}px`), a === "center" && (S.top = `${f}px`), a === "end" && (S.bottom = `${n}px`)), S;
}
function eT(e2, r) {
  return (e2 !== "top" && e2 !== "right" || r !== "end") && (e2 !== "bottom" && e2 !== "left" || r === "end") ? "ltr" : "rtl";
}
function qp(e2) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e2];
}
function Zp(e2, r) {
  return { top: e2.top < r.top, right: e2.right > r.right, bottom: e2.bottom > r.bottom, left: e2.left < r.left };
}
const [Bv, Hv] = zv("Popper"), [tT, jv] = Bv("Popper"), rT = (e2) => {
  const { __scopePopper: r, children: n } = e2, [o, a] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(null);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(tT, { scope: r, anchor: o, onAnchorChange: a }, n);
}, nT = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopper: n, virtualRef: o, ...a } = e2, u = jv("PopperAnchor", n), f = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), d = $n(r, f);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    u.onAnchorChange((o == null ? void 0 : o.current) || f.current);
  }), o ? null : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(di.div, ut({}, a, { ref: d }));
}), [iT, mM] = Bv("PopperContent"), oT = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopper: n, side: o = "bottom", sideOffset: a, align: u = "center", alignOffset: f, collisionTolerance: d, avoidCollisions: w = true, ...S } = e2, y = jv("PopperContent", n), [h, l] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(), p = YA(y.anchor), [m, c] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(null), g = Up(m), [b, E] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(null), x = Up(b), P = $n(r, (L) => c(L)), T = (function() {
    const [L, U] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(void 0);
    return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
      let H;
      function R() {
        U({ width: window.innerWidth, height: window.innerHeight });
      }
      function X() {
        window.clearTimeout(H), H = window.setTimeout(R, 100);
      }
      return R(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
    }, []), L;
  })(), M = T ? DOMRect.fromRect({ ...T, x: 0, y: 0 }) : void 0, { popperStyles: B, arrowStyles: F, placedSide: k, placedAlign: Y } = JA({ anchorRect: p, popperSize: g, arrowSize: x, arrowOffset: h, side: o, sideOffset: a, align: u, alignOffset: f, shouldAvoidCollisions: w, collisionBoundariesRect: M, collisionTolerance: d }), W = k !== void 0;
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement("div", { style: B, "data-radix-popper-content-wrapper": "" }, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(iT, { scope: n, arrowStyles: F, onArrowChange: E, onArrowOffsetChange: l }, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(di.div, ut({ "data-side": k, "data-align": Y }, S, { style: { ...S.style, animation: W ? void 0 : "none" }, ref: P }))));
}), aT = rT, sT = nT, uT = oT;
function lT({ prop: e2, defaultProp: r, onChange: n = () => {
} }) {
  const [o, a] = (function({ defaultProp: w, onChange: S }) {
    const y = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(w), [h] = y, l = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(h), p = In(S);
    return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
      l.current !== h && (p(h), l.current = h);
    }, [h, l, p]), y;
  })({ defaultProp: r, onChange: n }), u = e2 !== void 0, f = u ? e2 : o, d = In(n);
  return [f, qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback((w) => {
    if (u) {
      const S = w, y = typeof w == "function" ? S(e2) : w;
      y !== e2 && d(y);
    } else a(w);
  }, [u, e2, a, d])];
}
const [fT] = zv("Popover", [Hv]), zl = Hv(), [cT, go] = fT("Popover"), dT = (e2) => {
  const { __scopePopover: r, children: n, open: o, defaultOpen: a, onOpenChange: u, modal: f = false } = e2, d = zl(r), w = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), [S, y] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(false), [h = false, l] = lT({ prop: o, defaultProp: a, onChange: u });
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(aT, d, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(cT, { scope: r, contentId: NA(), triggerRef: w, open: h, onOpenChange: l, onOpenToggle: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(() => l((p) => !p), [l]), hasCustomAnchor: S, onCustomAnchorAdd: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(() => y(true), []), onCustomAnchorRemove: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(() => y(false), []), modal: f }, n));
}, pT = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopover: n, ...o } = e2, a = go("PopoverTrigger", n), u = zl(n), f = $n(r, a.triggerRef), d = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(di.button, ut({ type: "button", "aria-haspopup": "dialog", "aria-expanded": a.open, "aria-controls": a.contentId, "data-state": Zv(a.open) }, o, { ref: f, onClick: Rn(e2.onClick, a.onOpenToggle) }));
  return a.hasCustomAnchor ? d : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(sT, ut({ asChild: true }, u), d);
}), hT = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { forceMount: n, ...o } = e2, a = go("PopoverContent", e2.__scopePopover);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(kv, { present: n || a.open }, a.modal ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(vT, ut({}, o, { ref: r })) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(mT, ut({}, o, { ref: r })));
}), vT = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { allowPinchZoom: n, portalled: o = true, ...a } = e2, u = go("PopoverContent", e2.__scopePopover), f = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), d = $n(r, f), w = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    const y = f.current;
    if (y) return JO(y);
  }, []);
  const S = o ? Wv : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment;
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(S, null, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement($v, { allowPinchZoom: n }, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(qv, ut({}, a, { ref: d, trapFocus: u.open, disableOutsidePointerEvents: true, onCloseAutoFocus: Rn(e2.onCloseAutoFocus, (y) => {
    var h;
    y.preventDefault(), w.current || (h = u.triggerRef.current) === null || h === void 0 || h.focus();
  }), onPointerDownOutside: Rn(e2.onPointerDownOutside, (y) => {
    const h = y.detail.originalEvent, l = h.button === 0 && h.ctrlKey === true, p = h.button === 2 || l;
    w.current = p;
  }, { checkForDefaultPrevented: false }), onFocusOutside: Rn(e2.onFocusOutside, (y) => y.preventDefault(), { checkForDefaultPrevented: false }) }))));
}), mT = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { portalled: n = true, ...o } = e2, a = go("PopoverContent", e2.__scopePopover), u = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false), f = n ? Wv : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment;
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(f, null, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(qv, ut({}, o, { ref: r, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (d) => {
    var w, S;
    (w = e2.onCloseAutoFocus) === null || w === void 0 || w.call(e2, d), d.defaultPrevented || (u.current || (S = a.triggerRef.current) === null || S === void 0 || S.focus(), d.preventDefault()), u.current = false;
  }, onInteractOutside: (d) => {
    var w, S;
    (w = e2.onInteractOutside) === null || w === void 0 || w.call(e2, d), d.defaultPrevented || (u.current = true);
    const y = d.target;
    !((S = a.triggerRef.current) === null || S === void 0) && S.contains(y) && d.preventDefault();
  } })));
}), qv = /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef((e2, r) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: u, disableOutsidePointerEvents: f, onEscapeKeyDown: d, onPointerDownOutside: w, onFocusOutside: S, onInteractOutside: y, ...h } = e2, l = go("PopoverContent", n), p = zl(n);
  return UA(), /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(BA, { asChild: true, loop: true, trapped: o, onMountAutoFocus: a, onUnmountAutoFocus: u }, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(GA, { asChild: true, disableOutsidePointerEvents: f, onInteractOutside: y, onEscapeKeyDown: d, onPointerDownOutside: w, onFocusOutside: S, onDismiss: () => l.onOpenChange(false) }, /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(uT, ut({ "data-state": Zv(l.open), role: "dialog", id: l.contentId }, p, h, { ref: r, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)" } }))));
});
function Zv(e2) {
  return e2 ? "open" : "closed";
}
const gT = dT, yT = pT, wT = hT;
var Fa = /* @__PURE__ */ ((e2) => (e2.VIDEO = "video", e2.CAROUSEL = "carousel", e2.TEXT = "text", e2))(Fa || {}), qu = {}, qi = {}, Sa = {}, _a = {}, Ea = { exports: {} };
var Ku, Xp;
function Bl() {
  if (Xp) return Ku;
  Xp = 1;
  var e2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ku = e2, Ku;
}
var Xu, th;
function OT() {
  if (th) return Xu;
  th = 1;
  var e2 = /* @__PURE__ */ Bl();
  function r() {
  }
  function n() {
  }
  return n.resetWarningCache = r, Xu = function() {
    function o(f, d, w, S, y, h) {
      if (h !== e2) {
        var l = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw l.name = "Invariant Violation", l;
      }
    }
    o.isRequired = o;
    function a() {
      return o;
    }
    var u = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: a,
      element: o,
      elementType: o,
      instanceOf: a,
      node: o,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: r
    };
    return u.PropTypes = u, u;
  }, Xu;
}
var rh;
function AT() {
  if (rh) return Ea.exports;
  if (rh = 1, false) ; else
    Ea.exports = /* @__PURE__ */ OT()();
  return Ea.exports;
}
var nh;
function TT() {
  return nh || (nh = 1, (function(e2) {
    (function(r, n) {
      n(e2, F, /* @__PURE__ */ AT());
    })(_a, function(r, n, o) {
      Object.defineProperty(r, "__esModule", {
        value: true
      }), r.setHasSupportToCaptureOption = m;
      var a = f(n), u = f(o);
      function f(E) {
        return E && E.__esModule ? E : {
          default: E
        };
      }
      var d = Object.assign || function(E) {
        for (var x = 1; x < arguments.length; x++) {
          var P = arguments[x];
          for (var T in P)
            Object.prototype.hasOwnProperty.call(P, T) && (E[T] = P[T]);
        }
        return E;
      };
      function w(E, x) {
        var P = {};
        for (var T in E)
          x.indexOf(T) >= 0 || Object.prototype.hasOwnProperty.call(E, T) && (P[T] = E[T]);
        return P;
      }
      function S(E, x) {
        if (!(E instanceof x))
          throw new TypeError("Cannot call a class as a function");
      }
      var y = /* @__PURE__ */ (function() {
        function E(x, P) {
          for (var T = 0; T < P.length; T++) {
            var M = P[T];
            M.enumerable = M.enumerable || false, M.configurable = true, "value" in M && (M.writable = true), Object.defineProperty(x, M.key, M);
          }
        }
        return function(x, P, T) {
          return P && E(x.prototype, P), T && E(x, T), x;
        };
      })();
      function h(E, x) {
        if (!E)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return x && (typeof x == "object" || typeof x == "function") ? x : E;
      }
      function l(E, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof x);
        E.prototype = Object.create(x && x.prototype, {
          constructor: {
            value: E,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(E, x) : E.__proto__ = x);
      }
      var p = false;
      function m(E) {
        p = E;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          m(true);
        } }));
      } catch {
      }
      function c() {
        var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return p ? E : E.capture;
      }
      function g(E) {
        if ("touches" in E) {
          var x = E.touches[0], P = x.pageX, T = x.pageY;
          return { x: P, y: T };
        }
        var M = E.screenX, B = E.screenY;
        return { x: M, y: B };
      }
      var b = (function(E) {
        l(x, E);
        function x() {
          var P;
          S(this, x);
          for (var T = arguments.length, M = Array(T), B = 0; B < T; B++)
            M[B] = arguments[B];
          var F = h(this, (P = x.__proto__ || Object.getPrototypeOf(x)).call.apply(P, [this].concat(M)));
          return F._handleSwipeStart = F._handleSwipeStart.bind(F), F._handleSwipeMove = F._handleSwipeMove.bind(F), F._handleSwipeEnd = F._handleSwipeEnd.bind(F), F._onMouseDown = F._onMouseDown.bind(F), F._onMouseMove = F._onMouseMove.bind(F), F._onMouseUp = F._onMouseUp.bind(F), F._setSwiperRef = F._setSwiperRef.bind(F), F;
        }
        return y(x, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, c({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, c({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(T) {
            this.props.allowMouseEvents && (this.mouseDown = true, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(T));
          }
        }, {
          key: "_onMouseMove",
          value: function(T) {
            this.mouseDown && this._handleSwipeMove(T);
          }
        }, {
          key: "_onMouseUp",
          value: function(T) {
            this.mouseDown = false, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(T);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(T) {
            var M = g(T), B = M.x, F = M.y;
            this.moveStart = { x: B, y: F }, this.props.onSwipeStart(T);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(T) {
            if (this.moveStart) {
              var M = g(T), B = M.x, F = M.y, k = B - this.moveStart.x, Y = F - this.moveStart.y;
              this.moving = true;
              var W = this.props.onSwipeMove({
                x: k,
                y: Y
              }, T);
              W && T.cancelable && T.preventDefault(), this.movePosition = { deltaX: k, deltaY: Y };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(T) {
            this.props.onSwipeEnd(T);
            var M = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -M ? this.props.onSwipeLeft(1, T) : this.movePosition.deltaX > M && this.props.onSwipeRight(1, T), this.movePosition.deltaY < -M ? this.props.onSwipeUp(1, T) : this.movePosition.deltaY > M && this.props.onSwipeDown(1, T)), this.moveStart = null, this.moving = false, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(T) {
            this.swiper = T, this.props.innerRef(T);
          }
        }, {
          key: "render",
          value: function() {
            var T = this.props;
            T.tagName;
            var M = T.className, B = T.style, F = T.children;
            T.allowMouseEvents, T.onSwipeUp, T.onSwipeDown, T.onSwipeLeft, T.onSwipeRight, T.onSwipeStart, T.onSwipeMove, T.onSwipeEnd, T.innerRef, T.tolerance;
            var k = w(T, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return a.default.createElement(
              this.props.tagName,
              d({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: M,
                style: B
              }, k),
              F
            );
          }
        }]), x;
      })(n.Component);
      b.displayName = "ReactSwipe", b.propTypes = {
        tagName: u.default.string,
        className: u.default.string,
        style: u.default.object,
        children: u.default.node,
        allowMouseEvents: u.default.bool,
        onSwipeUp: u.default.func,
        onSwipeDown: u.default.func,
        onSwipeLeft: u.default.func,
        onSwipeRight: u.default.func,
        onSwipeStart: u.default.func,
        onSwipeMove: u.default.func,
        onSwipeEnd: u.default.func,
        innerRef: u.default.func,
        tolerance: u.default.number.isRequired
      }, b.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function() {
        },
        onSwipeDown: function() {
        },
        onSwipeLeft: function() {
        },
        onSwipeRight: function() {
        },
        onSwipeStart: function() {
        },
        onSwipeMove: function() {
        },
        onSwipeEnd: function() {
        },
        innerRef: function() {
        },
        tolerance: 0
      }, r.default = b;
    });
  })(_a)), _a;
}
var ih;
function Vv() {
  return ih || (ih = 1, (function(e2) {
    (function(r, n) {
      n(e2, TT());
    })(Sa, function(r, n) {
      Object.defineProperty(r, "__esModule", {
        value: true
      });
      var o = a(n);
      function a(u) {
        return u && u.__esModule ? u : {
          default: u
        };
      }
      r.default = o.default;
    });
  })(Sa)), Sa;
}
var Zi = {}, oh;
function Yv() {
  if (oh) return Zi;
  oh = 1, Object.defineProperty(Zi, "__esModule", {
    value: true
  }), Zi.default = void 0;
  var e2 = r(rv());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function n(a, u, f) {
    return u in a ? Object.defineProperty(a, u, { value: f, enumerable: true, configurable: true, writable: true }) : a[u] = f, a;
  }
  var o = {
    ROOT: function(u) {
      return (0, e2.default)(n({
        "carousel-root": true
      }, u || "", !!u));
    },
    CAROUSEL: function(u) {
      return (0, e2.default)({
        carousel: true,
        "carousel-slider": u
      });
    },
    WRAPPER: function(u, f) {
      return (0, e2.default)({
        "thumbs-wrapper": !u,
        "slider-wrapper": u,
        "axis-horizontal": f === "horizontal",
        "axis-vertical": f !== "horizontal"
      });
    },
    SLIDER: function(u, f) {
      return (0, e2.default)({
        thumbs: !u,
        slider: u,
        animated: !f
      });
    },
    ITEM: function(u, f, d) {
      return (0, e2.default)({
        thumb: !u,
        slide: u,
        selected: f,
        previous: d
      });
    },
    ARROW_PREV: function(u) {
      return (0, e2.default)({
        "control-arrow control-prev": true,
        "control-disabled": u
      });
    },
    ARROW_NEXT: function(u) {
      return (0, e2.default)({
        "control-arrow control-next": true,
        "control-disabled": u
      });
    },
    DOT: function(u) {
      return (0, e2.default)({
        dot: true,
        selected: u
      });
    }
  };
  return Zi.default = o, Zi;
}
var Ki = {}, Gi = {}, ah;
function PT() {
  if (ah) return Gi;
  ah = 1, Object.defineProperty(Gi, "__esModule", {
    value: true
  }), Gi.outerWidth = void 0;
  var e2 = function(n) {
    var o = n.offsetWidth, a = getComputedStyle(n);
    return o += parseInt(a.marginLeft) + parseInt(a.marginRight), o;
  };
  return Gi.outerWidth = e2, Gi;
}
var Vi = {}, sh;
function Hl() {
  if (sh) return Vi;
  sh = 1, Object.defineProperty(Vi, "__esModule", {
    value: true
  }), Vi.default = void 0;
  var e2 = function(n, o, a) {
    var u = n === 0 ? n : n + o, f = a === "horizontal" ? [u, 0, 0] : [0, u, 0], d = "translate3d", w = "(" + f.join(",") + ")";
    return d + w;
  };
  return Vi.default = e2, Vi;
}
var Yi = {}, uh;
function Xv() {
  if (uh) return Yi;
  uh = 1, Object.defineProperty(Yi, "__esModule", {
    value: true
  }), Yi.default = void 0;
  var e2 = function() {
    return window;
  };
  return Yi.default = e2, Yi;
}
var lh;
function Jv() {
  if (lh) return Ki;
  lh = 1, Object.defineProperty(Ki, "__esModule", {
    value: true
  }), Ki.default = void 0;
  var e2 = w(F), r = f(Yv()), n = PT(), o = f(Hl()), a = f(Vv()), u = f(Xv());
  function f(F) {
    return F && F.__esModule ? F : { default: F };
  }
  function d() {
    if (typeof WeakMap != "function") return null;
    var F = /* @__PURE__ */ new WeakMap();
    return d = function() {
      return F;
    }, F;
  }
  function w(F) {
    if (F && F.__esModule)
      return F;
    if (F === null || S(F) !== "object" && typeof F != "function")
      return { default: F };
    var k = d();
    if (k && k.has(F))
      return k.get(F);
    var Y = {}, W = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var L in F)
      if (Object.prototype.hasOwnProperty.call(F, L)) {
        var U = W ? Object.getOwnPropertyDescriptor(F, L) : null;
        U && (U.get || U.set) ? Object.defineProperty(Y, L, U) : Y[L] = F[L];
      }
    return Y.default = F, k && k.set(F, Y), Y;
  }
  function S(F) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? S = function(Y) {
      return typeof Y;
    } : S = function(Y) {
      return Y && typeof Symbol == "function" && Y.constructor === Symbol && Y !== Symbol.prototype ? "symbol" : typeof Y;
    }, S(F);
  }
  function y() {
    return y = Object.assign || function(F) {
      for (var k = 1; k < arguments.length; k++) {
        var Y = arguments[k];
        for (var W in Y)
          Object.prototype.hasOwnProperty.call(Y, W) && (F[W] = Y[W]);
      }
      return F;
    }, y.apply(this, arguments);
  }
  function h(F, k) {
    if (!(F instanceof k))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(F, k) {
    for (var Y = 0; Y < k.length; Y++) {
      var W = k[Y];
      W.enumerable = W.enumerable || false, W.configurable = true, "value" in W && (W.writable = true), Object.defineProperty(F, W.key, W);
    }
  }
  function p(F, k, Y) {
    return k && l(F.prototype, k), F;
  }
  function m(F, k) {
    if (typeof k != "function" && k !== null)
      throw new TypeError("Super expression must either be null or a function");
    F.prototype = Object.create(k && k.prototype, { constructor: { value: F, writable: true, configurable: true } }), k && c(F, k);
  }
  function c(F, k) {
    return c = Object.setPrototypeOf || function(W, L) {
      return W.__proto__ = L, W;
    }, c(F, k);
  }
  function g(F) {
    var k = x();
    return function() {
      var W = P(F), L;
      if (k) {
        var U = P(this).constructor;
        L = Reflect.construct(W, arguments, U);
      } else
        L = W.apply(this, arguments);
      return b(this, L);
    };
  }
  function b(F, k) {
    return k && (S(k) === "object" || typeof k == "function") ? k : E(F);
  }
  function E(F) {
    if (F === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return F;
  }
  function x() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function P(F) {
    return P = Object.setPrototypeOf ? Object.getPrototypeOf : function(Y) {
      return Y.__proto__ || Object.getPrototypeOf(Y);
    }, P(F);
  }
  function T(F, k, Y) {
    return k in F ? Object.defineProperty(F, k, { value: Y, enumerable: true, configurable: true, writable: true }) : F[k] = Y, F;
  }
  var M = function(k) {
    return k.hasOwnProperty("key");
  }, B = /* @__PURE__ */ (function(F) {
    m(Y, F);
    var k = g(Y);
    function Y(W) {
      var L;
      return h(this, Y), L = k.call(this, W), T(E(L), "itemsWrapperRef", void 0), T(E(L), "itemsListRef", void 0), T(E(L), "thumbsRef", void 0), T(E(L), "setItemsWrapperRef", function(U) {
        L.itemsWrapperRef = U;
      }), T(E(L), "setItemsListRef", function(U) {
        L.itemsListRef = U;
      }), T(E(L), "setThumbsRef", function(U, H) {
        L.thumbsRef || (L.thumbsRef = []), L.thumbsRef[H] = U;
      }), T(E(L), "updateSizes", function() {
        if (!(!L.props.children || !L.itemsWrapperRef || !L.thumbsRef)) {
          var U = e2.Children.count(L.props.children), H = L.itemsWrapperRef.clientWidth, R = L.props.thumbWidth ? L.props.thumbWidth : (0, n.outerWidth)(L.thumbsRef[0]), X = Math.floor(H / R), G = X < U, ee = G ? U - X : 0;
          L.setState(function(ue, j) {
            return {
              itemSize: R,
              visibleItems: X,
              firstItem: G ? L.getFirstItem(j.selectedItem) : 0,
              lastPosition: ee,
              showArrows: G
            };
          });
        }
      }), T(E(L), "handleClickItem", function(U, H, R) {
        if (!M(R) || R.key === "Enter") {
          var X = L.props.onSelectItem;
          typeof X == "function" && X(U, H);
        }
      }), T(E(L), "onSwipeStart", function() {
        L.setState({
          swiping: true
        });
      }), T(E(L), "onSwipeEnd", function() {
        L.setState({
          swiping: false
        });
      }), T(E(L), "onSwipeMove", function(U) {
        var H = U.x;
        if (!L.state.itemSize || !L.itemsWrapperRef || !L.state.visibleItems)
          return false;
        var R = 0, X = e2.Children.count(L.props.children), G = -(L.state.firstItem * 100) / L.state.visibleItems, ee = Math.max(X - L.state.visibleItems, 0), ue = -ee * 100 / L.state.visibleItems;
        G === R && H > 0 && (H = 0), G === ue && H < 0 && (H = 0);
        var j = L.itemsWrapperRef.clientWidth, Q = G + 100 / (j / H);
        return L.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(oe) {
          L.itemsListRef.style[oe] = (0, o.default)(Q, "%", L.props.axis);
        }), true;
      }), T(E(L), "slideRight", function(U) {
        L.moveTo(L.state.firstItem - (typeof U == "number" ? U : 1));
      }), T(E(L), "slideLeft", function(U) {
        L.moveTo(L.state.firstItem + (typeof U == "number" ? U : 1));
      }), T(E(L), "moveTo", function(U) {
        U = U < 0 ? 0 : U, U = U >= L.state.lastPosition ? L.state.lastPosition : U, L.setState({
          firstItem: U
        });
      }), L.state = {
        selectedItem: W.selectedItem,
        swiping: false,
        showArrows: false,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, L;
    }
    return p(Y, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(L) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== L.children && this.updateSizes();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyThumbs();
      }
    }, {
      key: "setupThumbs",
      value: function() {
        (0, u.default)().addEventListener("resize", this.updateSizes), (0, u.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
      }
    }, {
      key: "destroyThumbs",
      value: function() {
        (0, u.default)().removeEventListener("resize", this.updateSizes), (0, u.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      }
    }, {
      key: "getFirstItem",
      value: function(L) {
        var U = L;
        return L >= this.state.lastPosition && (U = this.state.lastPosition), L < this.state.firstItem + this.state.visibleItems && (U = this.state.firstItem), L < this.state.firstItem && (U = L), U;
      }
    }, {
      key: "renderItems",
      value: function() {
        var L = this;
        return this.props.children.map(function(U, H) {
          var R = r.default.ITEM(false, H === L.state.selectedItem), X = {
            key: H,
            ref: function(ee) {
              return L.setThumbsRef(ee, H);
            },
            className: R,
            onClick: L.handleClickItem.bind(L, H, L.props.children[H]),
            onKeyDown: L.handleClickItem.bind(L, H, L.props.children[H]),
            "aria-label": "".concat(L.props.labels.item, " ").concat(H + 1),
            style: {
              width: L.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e2.default.createElement("li", y({}, X, {
            role: "button",
            tabIndex: 0
          }), U);
        });
      }
    }, {
      key: "render",
      value: function() {
        var L = this;
        if (!this.props.children)
          return null;
        var U = e2.Children.count(this.props.children) > 1, H = this.state.showArrows && this.state.firstItem > 0, R = this.state.showArrows && this.state.firstItem < this.state.lastPosition, X = {}, G = -this.state.firstItem * (this.state.itemSize || 0), ee = (0, o.default)(G, "px", this.props.axis), ue = this.props.transitionTime + "ms";
        return X = {
          WebkitTransform: ee,
          MozTransform: ee,
          MsTransform: ee,
          OTransform: ee,
          transform: ee,
          msTransform: ee,
          WebkitTransitionDuration: ue,
          MozTransitionDuration: ue,
          MsTransitionDuration: ue,
          OTransitionDuration: ue,
          transitionDuration: ue,
          msTransitionDuration: ue
        }, /* @__PURE__ */ e2.default.createElement("div", {
          className: r.default.CAROUSEL(false)
        }, /* @__PURE__ */ e2.default.createElement("div", {
          className: r.default.WRAPPER(false),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e2.default.createElement("button", {
          type: "button",
          className: r.default.ARROW_PREV(!H),
          onClick: function() {
            return L.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), U ? /* @__PURE__ */ e2.default.createElement(a.default, {
          tagName: "ul",
          className: r.default.SLIDER(false, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: X,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e2.default.createElement("ul", {
          className: r.default.SLIDER(false, this.state.swiping),
          ref: function(Q) {
            return L.setItemsListRef(Q);
          },
          style: X
        }, this.renderItems()), /* @__PURE__ */ e2.default.createElement("button", {
          type: "button",
          className: r.default.ARROW_NEXT(!R),
          onClick: function() {
            return L.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), Y;
  })(e2.Component);
  return Ki.default = B, T(B, "displayName", "Thumbs"), T(B, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), Ki;
}
var Xi = {}, fh;
function CT() {
  if (fh) return Xi;
  fh = 1, Object.defineProperty(Xi, "__esModule", {
    value: true
  }), Xi.default = void 0;
  var e2 = function() {
    return document;
  };
  return Xi.default = e2, Xi;
}
var kt = {}, ch;
function Qv() {
  if (ch) return kt;
  ch = 1, Object.defineProperty(kt, "__esModule", {
    value: true
  }), kt.setPosition = kt.getPosition = kt.isKeyboardEvent = kt.defaultStatusFormatter = kt.noop = void 0;
  var e2 = F, r = n(Hl());
  function n(w) {
    return w && w.__esModule ? w : { default: w };
  }
  var o = function() {
  };
  kt.noop = o;
  var a = function(S, y) {
    return "".concat(S, " of ").concat(y);
  };
  kt.defaultStatusFormatter = a;
  var u = function(S) {
    return S ? S.hasOwnProperty("key") : false;
  };
  kt.isKeyboardEvent = u;
  var f = function(S, y) {
    if (y.infiniteLoop && ++S, S === 0)
      return 0;
    var h = e2.Children.count(y.children);
    if (y.centerMode && y.axis === "horizontal") {
      var l = -S * y.centerSlidePercentage, p = h - 1;
      return S && (S !== p || y.infiniteLoop) ? l += (100 - y.centerSlidePercentage) / 2 : S === p && (l += 100 - y.centerSlidePercentage), l;
    }
    return -S * 100;
  };
  kt.getPosition = f;
  var d = function(S, y) {
    var h = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(l) {
      h[l] = (0, r.default)(S, "%", y);
    }), h;
  };
  return kt.setPosition = d, kt;
}
var ar = {}, dh;
function RT() {
  if (dh) return ar;
  dh = 1, Object.defineProperty(ar, "__esModule", {
    value: true
  }), ar.fadeAnimationHandler = ar.slideStopSwipingHandler = ar.slideSwipeAnimationHandler = ar.slideAnimationHandler = void 0;
  var e2 = F, r = o(Hl()), n = Qv();
  function o(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function a(h, l) {
    var p = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var m = Object.getOwnPropertySymbols(h);
      l && (m = m.filter(function(c) {
        return Object.getOwnPropertyDescriptor(h, c).enumerable;
      })), p.push.apply(p, m);
    }
    return p;
  }
  function u(h) {
    for (var l = 1; l < arguments.length; l++) {
      var p = arguments[l] != null ? arguments[l] : {};
      l % 2 ? a(Object(p), true).forEach(function(m) {
        f(h, m, p[m]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(p)) : a(Object(p)).forEach(function(m) {
        Object.defineProperty(h, m, Object.getOwnPropertyDescriptor(p, m));
      });
    }
    return h;
  }
  function f(h, l, p) {
    return l in h ? Object.defineProperty(h, l, { value: p, enumerable: true, configurable: true, writable: true }) : h[l] = p, h;
  }
  var d = function(l, p) {
    var m = {}, c = p.selectedItem, g = c, b = e2.Children.count(l.children) - 1, E = l.infiniteLoop && (c < 0 || c > b);
    if (E)
      return g < 0 ? l.centerMode && l.centerSlidePercentage && l.axis === "horizontal" ? m.itemListStyle = (0, n.setPosition)(-(b + 2) * l.centerSlidePercentage - (100 - l.centerSlidePercentage) / 2, l.axis) : m.itemListStyle = (0, n.setPosition)(-(b + 2) * 100, l.axis) : g > b && (m.itemListStyle = (0, n.setPosition)(0, l.axis)), m;
    var x = (0, n.getPosition)(c, l), P = (0, r.default)(x, "%", l.axis), T = l.transitionTime + "ms";
    return m.itemListStyle = {
      WebkitTransform: P,
      msTransform: P,
      OTransform: P,
      transform: P
    }, p.swiping || (m.itemListStyle = u(u({}, m.itemListStyle), {}, {
      WebkitTransitionDuration: T,
      MozTransitionDuration: T,
      OTransitionDuration: T,
      transitionDuration: T,
      msTransitionDuration: T
    })), m;
  };
  ar.slideAnimationHandler = d;
  var w = function(l, p, m, c) {
    var g = {}, b = p.axis === "horizontal", E = e2.Children.count(p.children), x = 0, P = (0, n.getPosition)(m.selectedItem, p), T = p.infiniteLoop ? (0, n.getPosition)(E - 1, p) - 100 : (0, n.getPosition)(E - 1, p), M = b ? l.x : l.y, B = M;
    P === x && M > 0 && (B = 0), P === T && M < 0 && (B = 0);
    var F = P + 100 / (m.itemSize / B), k = Math.abs(M) > p.swipeScrollTolerance;
    return p.infiniteLoop && k && (m.selectedItem === 0 && F > -100 ? F -= E * 100 : m.selectedItem === E - 1 && F < -E * 100 && (F += E * 100)), (!p.preventMovementUntilSwipeScrollTolerance || k || m.swipeMovementStarted) && (m.swipeMovementStarted || c({
      swipeMovementStarted: true
    }), g.itemListStyle = (0, n.setPosition)(F, p.axis)), k && !m.cancelClick && c({
      cancelClick: true
    }), g;
  };
  ar.slideSwipeAnimationHandler = w;
  var S = function(l, p) {
    var m = (0, n.getPosition)(p.selectedItem, l), c = (0, n.setPosition)(m, l.axis);
    return {
      itemListStyle: c
    };
  };
  ar.slideStopSwipingHandler = S;
  var y = function(l, p) {
    var m = l.transitionTime + "ms", c = "ease-in-out", g = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: c,
      msTransitionTimingFunction: c,
      MozTransitionTimingFunction: c,
      WebkitTransitionTimingFunction: c,
      OTransitionTimingFunction: c
    };
    return p.swiping || (g = u(u({}, g), {}, {
      WebkitTransitionDuration: m,
      MozTransitionDuration: m,
      OTransitionDuration: m,
      transitionDuration: m,
      msTransitionDuration: m
    })), {
      slideStyle: g,
      selectedStyle: u(u({}, g), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: u({}, g)
    };
  };
  return ar.fadeAnimationHandler = y, ar;
}
var ph;
function MT() {
  if (ph) return qi;
  ph = 1, Object.defineProperty(qi, "__esModule", {
    value: true
  }), qi.default = void 0;
  var e2 = y(F), r = w(Vv()), n = w(Yv()), o = w(Jv()), a = w(CT()), u = w(Xv()), f = Qv(), d = RT();
  function w(W) {
    return W && W.__esModule ? W : { default: W };
  }
  function S() {
    if (typeof WeakMap != "function") return null;
    var W = /* @__PURE__ */ new WeakMap();
    return S = function() {
      return W;
    }, W;
  }
  function y(W) {
    if (W && W.__esModule)
      return W;
    if (W === null || h(W) !== "object" && typeof W != "function")
      return { default: W };
    var L = S();
    if (L && L.has(W))
      return L.get(W);
    var U = {}, H = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var R in W)
      if (Object.prototype.hasOwnProperty.call(W, R)) {
        var X = H ? Object.getOwnPropertyDescriptor(W, R) : null;
        X && (X.get || X.set) ? Object.defineProperty(U, R, X) : U[R] = W[R];
      }
    return U.default = W, L && L.set(W, U), U;
  }
  function h(W) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? h = function(U) {
      return typeof U;
    } : h = function(U) {
      return U && typeof Symbol == "function" && U.constructor === Symbol && U !== Symbol.prototype ? "symbol" : typeof U;
    }, h(W);
  }
  function l() {
    return l = Object.assign || function(W) {
      for (var L = 1; L < arguments.length; L++) {
        var U = arguments[L];
        for (var H in U)
          Object.prototype.hasOwnProperty.call(U, H) && (W[H] = U[H]);
      }
      return W;
    }, l.apply(this, arguments);
  }
  function p(W, L) {
    var U = Object.keys(W);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(W);
      L && (H = H.filter(function(R) {
        return Object.getOwnPropertyDescriptor(W, R).enumerable;
      })), U.push.apply(U, H);
    }
    return U;
  }
  function m(W) {
    for (var L = 1; L < arguments.length; L++) {
      var U = arguments[L] != null ? arguments[L] : {};
      L % 2 ? p(Object(U), true).forEach(function(H) {
        k(W, H, U[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(W, Object.getOwnPropertyDescriptors(U)) : p(Object(U)).forEach(function(H) {
        Object.defineProperty(W, H, Object.getOwnPropertyDescriptor(U, H));
      });
    }
    return W;
  }
  function c(W, L) {
    if (!(W instanceof L))
      throw new TypeError("Cannot call a class as a function");
  }
  function g(W, L) {
    for (var U = 0; U < L.length; U++) {
      var H = L[U];
      H.enumerable = H.enumerable || false, H.configurable = true, "value" in H && (H.writable = true), Object.defineProperty(W, H.key, H);
    }
  }
  function b(W, L, U) {
    return L && g(W.prototype, L), W;
  }
  function E(W, L) {
    if (typeof L != "function" && L !== null)
      throw new TypeError("Super expression must either be null or a function");
    W.prototype = Object.create(L && L.prototype, { constructor: { value: W, writable: true, configurable: true } }), L && x(W, L);
  }
  function x(W, L) {
    return x = Object.setPrototypeOf || function(H, R) {
      return H.__proto__ = R, H;
    }, x(W, L);
  }
  function P(W) {
    var L = B();
    return function() {
      var H = F$1(W), R;
      if (L) {
        var X = F$1(this).constructor;
        R = Reflect.construct(H, arguments, X);
      } else
        R = H.apply(this, arguments);
      return T(this, R);
    };
  }
  function T(W, L) {
    return L && (h(L) === "object" || typeof L == "function") ? L : M(W);
  }
  function M(W) {
    if (W === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return W;
  }
  function B() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function F$1(W) {
    return F$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function(U) {
      return U.__proto__ || Object.getPrototypeOf(U);
    }, F$1(W);
  }
  function k(W, L, U) {
    return L in W ? Object.defineProperty(W, L, { value: U, enumerable: true, configurable: true, writable: true }) : W[L] = U, W;
  }
  var Y = /* @__PURE__ */ (function(W) {
    E(U, W);
    var L = P(U);
    function U(H) {
      var R;
      c(this, U), R = L.call(this, H), k(M(R), "thumbsRef", void 0), k(M(R), "carouselWrapperRef", void 0), k(M(R), "listRef", void 0), k(M(R), "itemsRef", void 0), k(M(R), "timer", void 0), k(M(R), "animationHandler", void 0), k(M(R), "setThumbsRef", function(G) {
        R.thumbsRef = G;
      }), k(M(R), "setCarouselWrapperRef", function(G) {
        R.carouselWrapperRef = G;
      }), k(M(R), "setListRef", function(G) {
        R.listRef = G;
      }), k(M(R), "setItemsRef", function(G, ee) {
        R.itemsRef || (R.itemsRef = []), R.itemsRef[ee] = G;
      }), k(M(R), "autoPlay", function() {
        e2.Children.count(R.props.children) <= 1 || (R.clearAutoPlay(), R.props.autoPlay && (R.timer = setTimeout(function() {
          R.increment();
        }, R.props.interval)));
      }), k(M(R), "clearAutoPlay", function() {
        R.timer && clearTimeout(R.timer);
      }), k(M(R), "resetAutoPlay", function() {
        R.clearAutoPlay(), R.autoPlay();
      }), k(M(R), "stopOnHover", function() {
        R.setState({
          isMouseEntered: true
        }, R.clearAutoPlay);
      }), k(M(R), "startOnLeave", function() {
        R.setState({
          isMouseEntered: false
        }, R.autoPlay);
      }), k(M(R), "isFocusWithinTheCarousel", function() {
        return R.carouselWrapperRef ? !!((0, a.default)().activeElement === R.carouselWrapperRef || R.carouselWrapperRef.contains((0, a.default)().activeElement)) : false;
      }), k(M(R), "navigateWithKeyboard", function(G) {
        if (R.isFocusWithinTheCarousel()) {
          var ee = R.props.axis, ue = ee === "horizontal", j = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, Q = ue ? j.ArrowRight : j.ArrowDown, oe = ue ? j.ArrowLeft : j.ArrowUp;
          Q === G.keyCode ? R.increment() : oe === G.keyCode && R.decrement();
        }
      }), k(M(R), "updateSizes", function() {
        if (!(!R.state.initialized || !R.itemsRef || R.itemsRef.length === 0)) {
          var G = R.props.axis === "horizontal", ee = R.itemsRef[0];
          if (ee) {
            var ue = G ? ee.clientWidth : ee.clientHeight;
            R.setState({
              itemSize: ue
            }), R.thumbsRef && R.thumbsRef.updateSizes();
          }
        }
      }), k(M(R), "setMountState", function() {
        R.setState({
          hasMount: true
        }), R.updateSizes();
      }), k(M(R), "handleClickItem", function(G, ee) {
        if (e2.Children.count(R.props.children) !== 0) {
          if (R.state.cancelClick) {
            R.setState({
              cancelClick: false
            });
            return;
          }
          R.props.onClickItem(G, ee), G !== R.state.selectedItem && R.setState({
            selectedItem: G
          });
        }
      }), k(M(R), "handleOnChange", function(G, ee) {
        e2.Children.count(R.props.children) <= 1 || R.props.onChange(G, ee);
      }), k(M(R), "handleClickThumb", function(G, ee) {
        R.props.onClickThumb(G, ee), R.moveTo(G);
      }), k(M(R), "onSwipeStart", function(G) {
        R.setState({
          swiping: true
        }), R.props.onSwipeStart(G);
      }), k(M(R), "onSwipeEnd", function(G) {
        R.setState({
          swiping: false,
          cancelClick: false,
          swipeMovementStarted: false
        }), R.props.onSwipeEnd(G), R.clearAutoPlay(), R.state.autoPlay && R.autoPlay();
      }), k(M(R), "onSwipeMove", function(G, ee) {
        R.props.onSwipeMove(ee);
        var ue = R.props.swipeAnimationHandler(G, R.props, R.state, R.setState.bind(M(R)));
        return R.setState(m({}, ue)), !!Object.keys(ue).length;
      }), k(M(R), "decrement", function() {
        var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        R.moveTo(R.state.selectedItem - (typeof G == "number" ? G : 1));
      }), k(M(R), "increment", function() {
        var G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        R.moveTo(R.state.selectedItem + (typeof G == "number" ? G : 1));
      }), k(M(R), "moveTo", function(G) {
        if (typeof G == "number") {
          var ee = e2.Children.count(R.props.children) - 1;
          G < 0 && (G = R.props.infiniteLoop ? ee : 0), G > ee && (G = R.props.infiniteLoop ? 0 : ee), R.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: G
          }), R.state.autoPlay && R.state.isMouseEntered === false && R.resetAutoPlay();
        }
      }), k(M(R), "onClickNext", function() {
        R.increment(1);
      }), k(M(R), "onClickPrev", function() {
        R.decrement(1);
      }), k(M(R), "onSwipeForward", function() {
        R.increment(1), R.props.emulateTouch && R.setState({
          cancelClick: true
        });
      }), k(M(R), "onSwipeBackwards", function() {
        R.decrement(1), R.props.emulateTouch && R.setState({
          cancelClick: true
        });
      }), k(M(R), "changeItem", function(G) {
        return function(ee) {
          (!(0, f.isKeyboardEvent)(ee) || ee.key === "Enter") && R.moveTo(G);
        };
      }), k(M(R), "selectItem", function(G) {
        R.setState(m({
          previousItem: R.state.selectedItem
        }, G), function() {
          R.setState(R.animationHandler(R.props, R.state));
        }), R.handleOnChange(G.selectedItem, e2.Children.toArray(R.props.children)[G.selectedItem]);
      }), k(M(R), "getInitialImage", function() {
        var G = R.props.selectedItem, ee = R.itemsRef && R.itemsRef[G], ue = ee && ee.getElementsByTagName("img") || [];
        return ue[0];
      }), k(M(R), "getVariableItemHeight", function(G) {
        var ee = R.itemsRef && R.itemsRef[G];
        if (R.state.hasMount && ee && ee.children.length) {
          var ue = ee.children[0].getElementsByTagName("img") || [];
          if (ue.length > 0) {
            var j = ue[0];
            if (!j.complete) {
              var Q = function ie() {
                R.forceUpdate(), j.removeEventListener("load", ie);
              };
              j.addEventListener("load", Q);
            }
          }
          var oe = ue[0] || ee.children[0], le = oe.clientHeight;
          return le > 0 ? le : null;
        }
        return null;
      });
      var X = {
        initialized: false,
        previousItem: H.selectedItem,
        selectedItem: H.selectedItem,
        hasMount: false,
        isMouseEntered: false,
        autoPlay: H.autoPlay,
        swiping: false,
        swipeMovementStarted: false,
        cancelClick: false,
        itemSize: 1,
        itemListStyle: {},
        slideStyle: {},
        selectedStyle: {},
        prevStyle: {}
      };
      return R.animationHandler = typeof H.animationHandler == "function" && H.animationHandler || H.animationHandler === "fade" && d.fadeAnimationHandler || d.slideAnimationHandler, R.state = m(m({}, X), R.animationHandler(H, X)), R;
    }
    return b(U, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(R, X) {
        !R.children && this.props.children && !this.state.initialized && this.setupCarousel(), !R.autoFocus && this.props.autoFocus && this.forceFocus(), X.swiping && !this.state.swiping && this.setState(m({}, this.props.stopSwipingHandler(this.props, this.state))), (R.selectedItem !== this.props.selectedItem || R.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), R.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
          autoPlay: this.props.autoPlay
        }));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyCarousel();
      }
    }, {
      key: "setupCarousel",
      value: function() {
        var R = this;
        this.bindEvents(), this.state.autoPlay && e2.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: true
        }, function() {
          var X = R.getInitialImage();
          X && !X.complete ? X.addEventListener("load", R.setMountState) : R.setMountState();
        });
      }
    }, {
      key: "destroyCarousel",
      value: function() {
        this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay());
      }
    }, {
      key: "setupAutoPlay",
      value: function() {
        this.autoPlay();
        var R = this.carouselWrapperRef;
        this.props.stopOnHover && R && (R.addEventListener("mouseenter", this.stopOnHover), R.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var R = this.carouselWrapperRef;
        this.props.stopOnHover && R && (R.removeEventListener("mouseenter", this.stopOnHover), R.removeEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "bindEvents",
      value: function() {
        (0, u.default)().addEventListener("resize", this.updateSizes), (0, u.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, a.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "unbindEvents",
      value: function() {
        (0, u.default)().removeEventListener("resize", this.updateSizes), (0, u.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        var R = this.getInitialImage();
        R && R.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, a.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var R;
        (R = this.carouselWrapperRef) === null || R === void 0 || R.focus();
      }
    }, {
      key: "renderItems",
      value: function(R) {
        var X = this;
        return this.props.children ? e2.Children.map(this.props.children, function(G, ee) {
          var ue = ee === X.state.selectedItem, j = ee === X.state.previousItem, Q = ue && X.state.selectedStyle || j && X.state.prevStyle || X.state.slideStyle || {};
          X.props.centerMode && X.props.axis === "horizontal" && (Q = m(m({}, Q), {}, {
            minWidth: X.props.centerSlidePercentage + "%"
          })), X.state.swiping && X.state.swipeMovementStarted && (Q = m(m({}, Q), {}, {
            pointerEvents: "none"
          }));
          var oe = {
            ref: function(ie) {
              return X.setItemsRef(ie, ee);
            },
            key: "itemKey" + ee + (R ? "clone" : ""),
            className: n.default.ITEM(true, ee === X.state.selectedItem, ee === X.state.previousItem),
            onClick: X.handleClickItem.bind(X, ee, G),
            style: Q
          };
          return /* @__PURE__ */ e2.default.createElement("li", oe, X.props.renderItem(G, {
            isSelected: ee === X.state.selectedItem,
            isPrevious: ee === X.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var R = this, X = this.props, G = X.showIndicators, ee = X.labels, ue = X.renderIndicator, j = X.children;
        return G ? /* @__PURE__ */ e2.default.createElement("ul", {
          className: "control-dots"
        }, e2.Children.map(j, function(Q, oe) {
          return ue && ue(R.changeItem(oe), oe === R.state.selectedItem, oe, ee.item);
        })) : null;
      }
    }, {
      key: "renderStatus",
      value: function() {
        return this.props.showStatus ? /* @__PURE__ */ e2.default.createElement("p", {
          className: "carousel-status"
        }, this.props.statusFormatter(this.state.selectedItem + 1, e2.Children.count(this.props.children))) : null;
      }
    }, {
      key: "renderThumbs",
      value: function() {
        return !this.props.showThumbs || !this.props.children || e2.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ e2.default.createElement(o.default, {
          ref: this.setThumbsRef,
          onSelectItem: this.handleClickThumb,
          selectedItem: this.state.selectedItem,
          transitionTime: this.props.transitionTime,
          thumbWidth: this.props.thumbWidth,
          labels: this.props.labels,
          emulateTouch: this.props.emulateTouch
        }, this.props.renderThumbs(this.props.children));
      }
    }, {
      key: "render",
      value: function() {
        var R = this;
        if (!this.props.children || e2.Children.count(this.props.children) === 0)
          return null;
        var X = this.props.swipeable && e2.Children.count(this.props.children) > 1, G = this.props.axis === "horizontal", ee = this.props.showArrows && e2.Children.count(this.props.children) > 1, ue = ee && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false, j = ee && (this.state.selectedItem < e2.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false, Q = this.renderItems(true), oe = Q.shift(), le = Q.pop(), ie = {
          className: n.default.SLIDER(true, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, fe = {};
        if (G) {
          if (ie.onSwipeLeft = this.onSwipeForward, ie.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var de = this.getVariableItemHeight(this.state.selectedItem);
            fe.height = de || "auto";
          }
        } else
          ie.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, ie.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, ie.style = m(m({}, ie.style), {}, {
            height: this.state.itemSize
          }), fe.height = this.state.itemSize;
        return /* @__PURE__ */ e2.default.createElement("div", {
          "aria-label": this.props.ariaLabel,
          className: n.default.ROOT(this.props.className),
          ref: this.setCarouselWrapperRef,
          tabIndex: this.props.useKeyboardArrows ? 0 : void 0
        }, /* @__PURE__ */ e2.default.createElement("div", {
          className: n.default.CAROUSEL(true),
          style: {
            width: this.props.width
          }
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, ue, this.props.labels.leftArrow), /* @__PURE__ */ e2.default.createElement("div", {
          className: n.default.WRAPPER(true, this.props.axis),
          style: fe
        }, X ? /* @__PURE__ */ e2.default.createElement(r.default, l({
          tagName: "ul",
          innerRef: this.setListRef
        }, ie, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && le, this.renderItems(), this.props.infiniteLoop && oe) : /* @__PURE__ */ e2.default.createElement("ul", {
          className: n.default.SLIDER(true, this.state.swiping),
          ref: function(me) {
            return R.setListRef(me);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && le, this.renderItems(), this.props.infiniteLoop && oe)), this.props.renderArrowNext(this.onClickNext, j, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), U;
  })(e2.default.Component);
  return qi.default = Y, k(Y, "displayName", "Carousel"), k(Y, "defaultProps", {
    ariaLabel: void 0,
    axis: "horizontal",
    centerSlidePercentage: 80,
    interval: 3e3,
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    onClickItem: f.noop,
    onClickThumb: f.noop,
    onChange: f.noop,
    onSwipeStart: function() {
    },
    onSwipeEnd: function() {
    },
    onSwipeMove: function() {
      return false;
    },
    preventMovementUntilSwipeScrollTolerance: false,
    renderArrowPrev: function(L, U, H) {
      return /* @__PURE__ */ e2.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: n.default.ARROW_PREV(!U),
        onClick: L
      });
    },
    renderArrowNext: function(L, U, H) {
      return /* @__PURE__ */ e2.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: n.default.ARROW_NEXT(!U),
        onClick: L
      });
    },
    renderIndicator: function(L, U, H, R) {
      return /* @__PURE__ */ e2.default.createElement("li", {
        className: n.default.DOT(U),
        onClick: L,
        onKeyDown: L,
        value: H,
        key: H,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(R, " ").concat(H + 1)
      });
    },
    renderItem: function(L) {
      return L;
    },
    renderThumbs: function(L) {
      var U = e2.Children.map(L, function(H) {
        var R = H;
        if (H.type !== "img" && (R = e2.Children.toArray(H.props.children).find(function(X) {
          return X.type === "img";
        })), !!R)
          return R;
      });
      return U.filter(function(H) {
        return H;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : U;
    },
    statusFormatter: f.defaultStatusFormatter,
    selectedItem: 0,
    showArrows: true,
    showIndicators: true,
    showStatus: true,
    showThumbs: true,
    stopOnHover: true,
    swipeScrollTolerance: 5,
    swipeable: true,
    transitionTime: 350,
    verticalSwipe: "standard",
    width: "100%",
    animationHandler: "slide",
    swipeAnimationHandler: d.slideSwipeAnimationHandler,
    stopSwipingHandler: d.slideStopSwipingHandler
  }), qi;
}
var hh = {};
function IT() {
  return hh;
}
var mh;
function LT() {
  return mh || (mh = 1, (function(e2) {
    Object.defineProperty(e2, "__esModule", {
      value: true
    }), Object.defineProperty(e2, "Carousel", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e2, "CarouselProps", {
      enumerable: true,
      get: function() {
        return n.CarouselProps;
      }
    }), Object.defineProperty(e2, "Thumbs", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    });
    var r = a(MT()), n = IT(), o = a(Jv());
    function a(u) {
      return u && u.__esModule ? u : { default: u };
    }
  })(qu)), qu;
}
var FT = LT();
const $T = ({ tip: e2 }) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-full grid pb-8 px-8 place-content-center", children: em(e2, true) }), DT = ({ pages: e2 }) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "min-h-[10rem] w-96", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  FT.Carousel,
  {
    autoPlay: false,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    children: e2 && e2.map((r) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx($T, { tip: r }, r.key))
  }
) }), NT = ({ body: e2, isInsideCarousel: r }) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "article",
  {
    className: Je([
      "prose prose-sm max-h-[10rem] overflow-auto p-1  px-2 text-left text-[12px] text-grey-100 ",
      {
        "w-60": !r
      }
    ]),
    children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      ka,
      {
        children: e2,
        options: {
          overrides: {
            a: {
              component: ({ children: n, ...o }) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "a",
                {
                  ...o,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-start text-primary-dark",
                  children: [
                    n,
                    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2, { className: "ml-1 mt-px h-4 w-4" })
                  ]
                }
              )
            }
          }
        }
      }
    )
  }
), kT = ({
  video: e2,
  body: r,
  title: n,
  isInsideCarousel: o
}) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
  "div",
  {
    className: Je([
      {
        "flex flex-row": !o,
        "flex max-h-[10rem] flex-col overflow-y-auto": o
      }
    ]),
    children: [
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          className: Je([
            {
              "mr-1": !o,
              "mb-1": o
            }
          ]),
          children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "iframe",
            {
              height: o ? "auto" : 90,
              width: o ? "100%" : 160,
              src: e2 == null ? void 0 : e2.link,
              title: n,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          )
        }
      ),
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "article",
        {
          className: Je([
            "prose prose-sm p-1 text-left text-xs text-grey-100",
            {
              "w-60 overflow-auto": !o,
              "-mt-6": o
            }
          ]),
          children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            ka,
            {
              children: r || "",
              options: {
                overrides: {
                  a: {
                    component: ({ children: a, ...u }) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                      "a",
                      {
                        ...u,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-start",
                        children: [
                          a,
                          /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2, { className: "ml-1 mt-px h-4 w-4" })
                        ]
                      }
                    )
                  }
                }
              }
            }
          )
        }
      )
    ]
  }
), em = (e2, r) => {
  switch (e2.type) {
    case Fa.TEXT:
      return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(NT, { body: e2.body, isInsideCarousel: r });
    case Fa.VIDEO:
      return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        kT,
        {
          video: e2.video,
          body: e2.body,
          title: e2.title,
          isInsideCarousel: r
        }
      );
    case Fa.CAROUSEL:
      return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(DT, { pages: e2.pages });
  }
}, tm = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(void 0);
function gh(e2, r) {
  const n = [];
  return e2.forEach((o) => {
    o.key === r && n.push(o);
  }), n;
}
const yM = ({
  children: e2,
  enabled: r,
  baseUrl: n = "https://raw.githubusercontent.com/4d/Web-studio-TIPS/main"
}) => {
  const [{ tips: o, show: a }, u] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState({
    tips: {},
    show: true
  });
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    const d = new AbortController();
    try {
      fetch(
        `${n}/tips.json`,
        // 'tips.json',
        { signal: d.signal }
      ).then((w) => w.json()).then((w) => {
        const S = w.reduce((y, h) => gh(w, h.key).length > 1 ? {
          ...y,
          [h.key]: {
            type: "carousel",
            pages: gh(w, h.key)
          }
        } : {
          ...y,
          [h.key]: h
        }, {});
        u((y) => ({ ...y, tips: S }));
      });
    } catch {
    }
    return () => {
      d.abort();
    };
  }, []);
  const f = () => {
    u((d) => ({ ...d, show: !a }));
  };
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(tm.Provider, { value: { tips: o, toggleTips: f, show: a, enabled: r }, children: e2 });
}, WT = (e2) => {
  const r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(tm);
  if (r === void 0)
    throw new Error("useTip must be used within a TipsContext");
  return {
    tip: e2 ? r.tips[e2] : null,
    toggleTips: r.toggleTips,
    show: r.show,
    enabled: r.enabled
  };
}, UT = Wa(yT)`
  &[data-state='open'] > * {
    display: block !important;
  }
`, wM = ({ tipKey: e2, side: r = "right", alwaysOn: n, asButton: o = false }) => {
  const { tip: a, enabled: u } = WT(e2), [f, d] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(false), w = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (w.current) {
      const S = new IntersectionObserver((y) => {
        y[0].isIntersecting || d(false);
      });
      return S.observe(w.current), () => {
        w.current && S.unobserve(w.current);
      };
    }
  }, []), a && u ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(gT, { open: f, onOpenChange: d, children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      UT,
      {
        ref: w,
        className: Je("focus:outline-none", {
          "rounded p-1 text-gray-100 hover:bg-primary-hover": o
        }),
        onClick: (S) => S.stopPropagation(),
        children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: Je("group-hover:block", { hidden: !n }), children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(a1, { className: "h-4 w-4 text-yellow-300" }) })
      }
    ),
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      wT,
      {
        side: r,
        sideOffset: 5,
        onClick: (S) => S.stopPropagation(),
        children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative rounded border border-grey-50 bg-grey-900 p-2 text-xs text-white shadow-2xl", children: em(a) })
      }
    )
  ] }) : null;
};
var zT = Object.defineProperty, BT = (e2, r, n) => r in e2 ? zT(e2, r, { enumerable: true, configurable: true, writable: true, value: n }) : e2[r] = n, Ju = (e2, r, n) => (BT(e2, typeof r != "symbol" ? r + "" : r, n), n);
let HT = class {
  constructor() {
    Ju(this, "current", this.detect()), Ju(this, "handoffState", "pending"), Ju(this, "currentId", 0);
  }
  set(r) {
    this.current !== r && (this.handoffState = "pending", this.currentId = 0, this.current = r);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, ni = new HT(), Er = (e2, r) => {
  ni.isServer ? qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(e2, r) : qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useLayoutEffect(e2, r);
};
function ii(e2) {
  let r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(e2);
  return Er(() => {
    r.current = e2;
  }, [e2]), r;
}
let yt = function(e2) {
  let r = ii(e2);
  return F.useCallback((...n) => r.current(...n), [r]);
};
function jT(e2, r, n) {
  let [o, a] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(n), u = e2 !== void 0, f = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(u), d = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false), w = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
  return u && !f.current && !d.current ? (d.current = true, f.current = u, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !u && f.current && !w.current && (w.current = true, f.current = u, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [u ? e2 : o, yt((S) => (u || a(S), r == null ? void 0 : r(S)))];
}
function qT(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((r) => setTimeout(() => {
    throw r;
  }));
}
function yo() {
  let e2 = [], r = { addEventListener(n, o, a, u) {
    return n.addEventListener(o, a, u), r.add(() => n.removeEventListener(o, a, u));
  }, requestAnimationFrame(...n) {
    let o = requestAnimationFrame(...n);
    return r.add(() => cancelAnimationFrame(o));
  }, nextFrame(...n) {
    return r.requestAnimationFrame(() => r.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let o = setTimeout(...n);
    return r.add(() => clearTimeout(o));
  }, microTask(...n) {
    let o = { current: true };
    return qT(() => {
      o.current && n[0]();
    }), r.add(() => {
      o.current = false;
    });
  }, style(n, o, a) {
    let u = n.style.getPropertyValue(o);
    return Object.assign(n.style, { [o]: a }), this.add(() => {
      Object.assign(n.style, { [o]: u });
    });
  }, group(n) {
    let o = yo();
    return n(o), this.add(() => o.dispose());
  }, add(n) {
    return e2.push(n), () => {
      let o = e2.indexOf(n);
      if (o >= 0) for (let a of e2.splice(o, 1)) a();
    };
  }, dispose() {
    for (let n of e2.splice(0)) n();
  } };
  return r;
}
function jl() {
  let [e2] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(yo);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => () => e2.dispose(), [e2]), e2;
}
function ZT() {
  let e2 = typeof document > "u";
  return "useSyncExternalStore" in oe ? ((r) => r.useSyncExternalStore)(oe)(() => () => {
  }, () => false, () => !e2) : false;
}
function ql() {
  let e2 = ZT(), [r, n] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(ni.isHandoffComplete);
  return r && ni.isHandoffComplete === false && n(false), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    r !== true && n(true);
  }, [r]), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => ni.handoff(), []), e2 ? false : r;
}
var yh;
let Zl = (yh = F.useId) != null ? yh : function() {
  let e2 = ql(), [r, n] = F.useState(e2 ? () => ni.nextId() : null);
  return Er(() => {
    r === null && n(ni.nextId());
  }, [r]), r != null ? "" + r : void 0;
};
function wr(e2, r, ...n) {
  if (e2 in r) {
    let a = r[e2];
    return typeof a == "function" ? a(...n) : a;
  }
  let o = new Error(`Tried to handle "${e2}" but there is no handler defined. Only defined handlers are: ${Object.keys(r).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, wr), o;
}
function wh(e2) {
  var r;
  if (e2.type) return e2.type;
  let n = (r = e2.as) != null ? r : "button";
  if (typeof n == "string" && n.toLowerCase() === "button") return "button";
}
function KT(e2, r) {
  let [n, o] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(() => wh(e2));
  return Er(() => {
    o(wh(e2));
  }, [e2.type, e2.as]), Er(() => {
    n || r.current && r.current instanceof HTMLButtonElement && !r.current.hasAttribute("type") && o("button");
  }, [n, r]), n;
}
let GT = Symbol();
function wo(...e2) {
  let r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(e2);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }, [e2]);
  let n = yt((o) => {
    for (let a of r.current) a != null && (typeof a == "function" ? a(o) : a.current = o);
  });
  return e2.every((o) => o == null || (o == null ? void 0 : o[GT])) ? void 0 : n;
}
function za(...e2) {
  return Array.from(new Set(e2.flatMap((r) => typeof r == "string" ? r.split(" ") : []))).filter(Boolean).join(" ");
}
var rm = ((e2) => (e2[e2.None = 0] = "None", e2[e2.RenderStrategy = 1] = "RenderStrategy", e2[e2.Static = 2] = "Static", e2))(rm || {}), sn = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(sn || {});
function Dn({ ourProps: e2, theirProps: r, slot: n, defaultTag: o, features: a, visible: u = true, name: f, mergeRefs: d }) {
  d = d ?? VT;
  let w = nm(r, e2);
  if (u) return Oa(w, n, o, f, d);
  let S = a ?? 0;
  if (S & 2) {
    let { static: y = false, ...h } = w;
    if (y) return Oa(h, n, o, f, d);
  }
  if (S & 1) {
    let { unmount: y = true, ...h } = w;
    return wr(y ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Oa({ ...h, hidden: true, style: { display: "none" } }, n, o, f, d);
    } });
  }
  return Oa(w, n, o, f, d);
}
function Oa(e2, r = {}, n, o, a) {
  let { as: u = n, children: f, refName: d = "ref", ...w } = Qu(e2, ["unmount", "static"]), S = e2.ref !== void 0 ? { [d]: e2.ref } : {}, y = typeof f == "function" ? f(r) : f;
  "className" in w && w.className && typeof w.className == "function" && (w.className = w.className(r));
  let h = {};
  if (r) {
    let l = false, p = [];
    for (let [m, c] of Object.entries(r)) typeof c == "boolean" && (l = true), c === true && p.push(m);
    l && (h["data-headlessui-state"] = p.join(" "));
  }
  if (u === qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment && Object.keys(_l(w)).length > 0) {
    if (!qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.isValidElement(y) || Array.isArray(y) && y.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(w).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
    let l = y.props, p = typeof (l == null ? void 0 : l.className) == "function" ? (...c) => za(l == null ? void 0 : l.className(...c), w.className) : za(l == null ? void 0 : l.className, w.className), m = p ? { className: p } : {};
    return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.cloneElement(y, Object.assign({}, nm(y.props, _l(Qu(w, ["ref"]))), h, S, { ref: a(y.ref, S.ref) }, m));
  }
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createElement(u, Object.assign({}, Qu(w, ["ref"]), u !== qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment && S, u !== qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment && h), y);
}
function VT(...e2) {
  return e2.every((r) => r == null) ? void 0 : (r) => {
    for (let n of e2) n != null && (typeof n == "function" ? n(r) : n.current = r);
  };
}
function nm(...e2) {
  if (e2.length === 0) return {};
  if (e2.length === 1) return e2[0];
  let r = {}, n = {};
  for (let o of e2) for (let a in o) a.startsWith("on") && typeof o[a] == "function" ? (n[a] != null || (n[a] = []), n[a].push(o[a])) : r[a] = o[a];
  if (r.disabled || r["aria-disabled"]) return Object.assign(r, Object.fromEntries(Object.keys(n).map((o) => [o, void 0])));
  for (let o in n) Object.assign(r, { [o](a, ...u) {
    let f = n[o];
    for (let d of f) {
      if ((a instanceof Event || (a == null ? void 0 : a.nativeEvent) instanceof Event) && a.defaultPrevented) return;
      d(a, ...u);
    }
  } });
  return r;
}
function Nn(e2) {
  var r;
  return Object.assign(qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef(e2), { displayName: (r = e2.displayName) != null ? r : e2.name });
}
function _l(e2) {
  let r = Object.assign({}, e2);
  for (let n in r) r[n] === void 0 && delete r[n];
  return r;
}
function Qu(e2, r = []) {
  let n = Object.assign({}, e2);
  for (let o of r) o in n && delete n[o];
  return n;
}
let YT = "div";
var im = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(im || {});
function XT(e2, r) {
  var n;
  let { features: o = 1, ...a } = e2, u = { ref: r, "aria-hidden": (o & 2) === 2 ? true : (n = a["aria-hidden"]) != null ? n : void 0, hidden: (o & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
  return Dn({ ourProps: u, theirProps: a, slot: {}, defaultTag: YT, name: "Hidden" });
}
let JT = Nn(XT), Kl = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(null);
Kl.displayName = "OpenClosedContext";
var Dr = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(Dr || {});
function om() {
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(Kl);
}
function QT({ value: e2, children: r }) {
  return F.createElement(Kl.Provider, { value: e2 }, r);
}
function eP(e2) {
  let r = e2.parentElement, n = null;
  for (; r && !(r instanceof HTMLFieldSetElement); ) r instanceof HTMLLegendElement && (n = r), r = r.parentElement;
  let o = (r == null ? void 0 : r.getAttribute("disabled")) === "";
  return o && tP(n) ? false : o;
}
function tP(e2) {
  if (!e2) return false;
  let r = e2.previousElementSibling;
  for (; r !== null; ) {
    if (r instanceof HTMLLegendElement) return false;
    r = r.previousElementSibling;
  }
  return true;
}
function rP(e2) {
  var r, n;
  let o = (r = e2 == null ? void 0 : e2.form) != null ? r : e2.closest("form");
  if (o) {
    for (let a of o.elements) if (a !== e2 && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
      a.click();
      return;
    }
    (n = o.requestSubmit) == null || n.call(o);
  }
}
var El = ((e2) => (e2.Space = " ", e2.Enter = "Enter", e2.Escape = "Escape", e2.Backspace = "Backspace", e2.Delete = "Delete", e2.ArrowLeft = "ArrowLeft", e2.ArrowUp = "ArrowUp", e2.ArrowRight = "ArrowRight", e2.ArrowDown = "ArrowDown", e2.Home = "Home", e2.End = "End", e2.PageUp = "PageUp", e2.PageDown = "PageDown", e2.Tab = "Tab", e2))(El || {});
function Gl() {
  let e2 = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
  return Er(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
let am = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(null);
function sm() {
  let e2 = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(am);
  if (e2 === null) {
    let r = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r, sm), r;
  }
  return e2;
}
function nP() {
  let [e2, r] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState([]);
  return [e2.length > 0 ? e2.join(" ") : void 0, qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => function(n) {
    let o = yt((u) => (r((f) => [...f, u]), () => r((f) => {
      let d = f.slice(), w = d.indexOf(u);
      return w !== -1 && d.splice(w, 1), d;
    }))), a = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ register: o, slot: n.slot, name: n.name, props: n.props }), [o, n.slot, n.name, n.props]);
    return F.createElement(am.Provider, { value: a }, n.children);
  }, [r])];
}
let iP = "p";
function oP(e2, r) {
  let n = Zl(), { id: o = `headlessui-description-${n}`, ...a } = e2, u = sm(), f = wo(r);
  Er(() => u.register(o), [o, u.register]);
  let d = { ref: f, ...u.props, id: o };
  return Dn({ ourProps: d, theirProps: a, slot: u.slot || {}, defaultTag: iP, name: u.name || "Description" });
}
let aP = Nn(oP), sP = Object.assign(aP, {}), um = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(null);
function lm() {
  let e2 = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(um);
  if (e2 === null) {
    let r = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(r, lm), r;
  }
  return e2;
}
function uP() {
  let [e2, r] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState([]);
  return [e2.length > 0 ? e2.join(" ") : void 0, qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => function(n) {
    let o = yt((u) => (r((f) => [...f, u]), () => r((f) => {
      let d = f.slice(), w = d.indexOf(u);
      return w !== -1 && d.splice(w, 1), d;
    }))), a = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ register: o, slot: n.slot, name: n.name, props: n.props }), [o, n.slot, n.name, n.props]);
    return F.createElement(um.Provider, { value: a }, n.children);
  }, [r])];
}
let lP = "label";
function fP(e2, r) {
  let n = Zl(), { id: o = `headlessui-label-${n}`, passive: a = false, ...u } = e2, f = lm(), d = wo(r);
  Er(() => f.register(o), [o, f.register]);
  let w = { ref: d, ...f.props, id: o };
  return a && ("onClick" in w && (delete w.htmlFor, delete w.onClick), "onClick" in u && delete u.onClick), Dn({ ourProps: w, theirProps: u, slot: f.slot || {}, defaultTag: lP, name: f.name || "Label" });
}
let cP = Nn(fP), dP = Object.assign(cP, {});
function pP(e2 = 0) {
  let [r, n] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(e2), o = Gl(), a = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback((w) => {
    o.current && n((S) => S | w);
  }, [r, o]), u = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback((w) => !!(r & w), [r]), f = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback((w) => {
    o.current && n((S) => S & ~w);
  }, [n, o]), d = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback((w) => {
    o.current && n((S) => S ^ w);
  }, [n]);
  return { flags: r, addFlag: a, hasFlag: u, removeFlag: f, toggleFlag: d };
}
let Vl = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(null);
Vl.displayName = "GroupContext";
let hP = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment;
function vP(e2) {
  var r;
  let [n, o] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(null), [a, u] = uP(), [f, d] = nP(), w = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ switch: n, setSwitch: o, labelledby: a, describedby: f }), [n, o, a, f]), S = {}, y = e2;
  return F.createElement(d, { name: "Switch.Description" }, F.createElement(u, { name: "Switch.Label", props: { htmlFor: (r = w.switch) == null ? void 0 : r.id, onClick(h) {
    n && (h.currentTarget.tagName === "LABEL" && h.preventDefault(), n.click(), n.focus({ preventScroll: true }));
  } } }, F.createElement(Vl.Provider, { value: w }, Dn({ ourProps: S, theirProps: y, defaultTag: hP, name: "Switch.Group" }))));
}
let mP = "button";
function gP(e2, r) {
  var n;
  let o = Zl(), { id: a = `headlessui-switch-${o}`, checked: u, defaultChecked: f = false, onChange: d, disabled: w = false, name: S, value: y, form: h, ...l } = e2, p = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(Vl), m = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), c = wo(m, r, p === null ? null : p.setSwitch), [g, b] = jT(u, d, f), E = yt(() => b == null ? void 0 : b(!g)), x = yt((k) => {
    if (eP(k.currentTarget)) return k.preventDefault();
    k.preventDefault(), E();
  }), P = yt((k) => {
    k.key === El.Space ? (k.preventDefault(), E()) : k.key === El.Enter && rP(k.currentTarget);
  }), T = yt((k) => k.preventDefault()), M = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ checked: g }), [g]), B = { id: a, ref: c, role: "switch", type: KT(e2, m), tabIndex: e2.tabIndex === -1 ? 0 : (n = e2.tabIndex) != null ? n : 0, "aria-checked": g, "aria-labelledby": p == null ? void 0 : p.labelledby, "aria-describedby": p == null ? void 0 : p.describedby, disabled: w, onClick: x, onKeyUp: P, onKeyPress: T }, F$1 = jl();
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    var k;
    let Y = (k = m.current) == null ? void 0 : k.closest("form");
    Y && f !== void 0 && F$1.addEventListener(Y, "reset", () => {
      b(f);
    });
  }, [m, b]), F.createElement(F.Fragment, null, S != null && g && F.createElement(JT, { features: im.Hidden, ..._l({ as: "input", type: "checkbox", hidden: true, readOnly: true, disabled: w, form: h, checked: g, name: S, value: y }) }), Dn({ ourProps: B, theirProps: l, slot: M, defaultTag: mP, name: "Switch" }));
}
let yP = Nn(gP), wP = vP, bP = Object.assign(yP, { Group: wP, Label: dP, Description: sP });
function SP(e2) {
  let r = { called: false };
  return (...n) => {
    if (!r.called) return r.called = true, e2(...n);
  };
}
function el(e2, ...r) {
  e2 && r.length > 0 && e2.classList.add(...r);
}
function tl(e2, ...r) {
  e2 && r.length > 0 && e2.classList.remove(...r);
}
function _P(e2, r) {
  let n = yo();
  if (!e2) return n.dispose;
  let { transitionDuration: o, transitionDelay: a } = getComputedStyle(e2), [u, f] = [o, a].map((w) => {
    let [S = 0] = w.split(",").filter(Boolean).map((y) => y.includes("ms") ? parseFloat(y) : parseFloat(y) * 1e3).sort((y, h) => h - y);
    return S;
  }), d = u + f;
  if (d !== 0) {
    n.group((S) => {
      S.setTimeout(() => {
        r(), S.dispose();
      }, d), S.addEventListener(e2, "transitionrun", (y) => {
        y.target === y.currentTarget && S.dispose();
      });
    });
    let w = n.addEventListener(e2, "transitionend", (S) => {
      S.target === S.currentTarget && (r(), w());
    });
  } else r();
  return n.add(() => r()), n.dispose;
}
function EP(e2, r, n, o) {
  let a = n ? "enter" : "leave", u = yo(), f = o !== void 0 ? SP(o) : () => {
  };
  a === "enter" && (e2.removeAttribute("hidden"), e2.style.display = "");
  let d = wr(a, { enter: () => r.enter, leave: () => r.leave }), w = wr(a, { enter: () => r.enterTo, leave: () => r.leaveTo }), S = wr(a, { enter: () => r.enterFrom, leave: () => r.leaveFrom });
  return tl(e2, ...r.base, ...r.enter, ...r.enterTo, ...r.enterFrom, ...r.leave, ...r.leaveFrom, ...r.leaveTo, ...r.entered), el(e2, ...r.base, ...d, ...S), u.nextFrame(() => {
    tl(e2, ...r.base, ...d, ...S), el(e2, ...r.base, ...d, ...w), _P(e2, () => (tl(e2, ...r.base, ...d), el(e2, ...r.base, ...r.entered), f()));
  }), u.dispose;
}
function xP({ immediate: e2, container: r, direction: n, classes: o, onStart: a, onStop: u }) {
  let f = Gl(), d = jl(), w = ii(n);
  Er(() => {
    e2 && (w.current = "enter");
  }, [e2]), Er(() => {
    let S = yo();
    d.add(S.dispose);
    let y = r.current;
    if (y && w.current !== "idle" && f.current) return S.dispose(), a.current(w.current), S.add(EP(y, o.current, w.current === "enter", () => {
      S.dispose(), u.current(w.current);
    })), S.dispose;
  }, [n]);
}
function nn(e2 = "") {
  return e2.split(/\s+/).filter((r) => r.length > 1);
}
let Ja = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(null);
Ja.displayName = "TransitionContext";
var OP = ((e2) => (e2.Visible = "visible", e2.Hidden = "hidden", e2))(OP || {});
function AP() {
  let e2 = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(Ja);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
function TP() {
  let e2 = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(Qa);
  if (e2 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e2;
}
let Qa = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(null);
Qa.displayName = "NestingContext";
function es(e2) {
  return "children" in e2 ? es(e2.children) : e2.current.filter(({ el: r }) => r.current !== null).filter(({ state: r }) => r === "visible").length > 0;
}
function fm(e2, r) {
  let n = ii(e2), o = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef([]), a = Gl(), u = jl(), f = yt((p, m = sn.Hidden) => {
    let c = o.current.findIndex(({ el: g }) => g === p);
    c !== -1 && (wr(m, { [sn.Unmount]() {
      o.current.splice(c, 1);
    }, [sn.Hidden]() {
      o.current[c].state = "hidden";
    } }), u.microTask(() => {
      var g;
      !es(o) && a.current && ((g = n.current) == null || g.call(n));
    }));
  }), d = yt((p) => {
    let m = o.current.find(({ el: c }) => c === p);
    return m ? m.state !== "visible" && (m.state = "visible") : o.current.push({ el: p, state: "visible" }), () => f(p, sn.Unmount);
  }), w = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef([]), S = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(Promise.resolve()), y = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef({ enter: [], leave: [], idle: [] }), h = yt((p, m, c) => {
    w.current.splice(0), r && (r.chains.current[m] = r.chains.current[m].filter(([g]) => g !== p)), r == null || r.chains.current[m].push([p, new Promise((g) => {
      w.current.push(g);
    })]), r == null || r.chains.current[m].push([p, new Promise((g) => {
      Promise.all(y.current[m].map(([b, E]) => E)).then(() => g());
    })]), m === "enter" ? S.current = S.current.then(() => r == null ? void 0 : r.wait.current).then(() => c(m)) : c(m);
  }), l = yt((p, m, c) => {
    Promise.all(y.current[m].splice(0).map(([g, b]) => b)).then(() => {
      var g;
      (g = w.current.shift()) == null || g();
    }).then(() => c(m));
  });
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ children: o, register: d, unregister: f, onStart: h, onStop: l, wait: S, chains: y }), [d, f, o, h, l, y, S]);
}
function PP() {
}
let CP = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function bh(e2) {
  var r;
  let n = {};
  for (let o of CP) n[o] = (r = e2[o]) != null ? r : PP;
  return n;
}
function RP(e2) {
  let r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(bh(e2));
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    r.current = bh(e2);
  }, [e2]), r;
}
let MP = "div", cm = rm.RenderStrategy;
function IP(e2, r) {
  var n, o;
  let { beforeEnter: a, afterEnter: u, beforeLeave: f, afterLeave: d, enter: w, enterFrom: S, enterTo: y, entered: h, leave: l, leaveFrom: p, leaveTo: m, ...c } = e2, g = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), b = wo(g, r), E = (n = c.unmount) == null || n ? sn.Unmount : sn.Hidden, { show: x, appear: P, initial: T } = AP(), [M, B] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(x ? "visible" : "hidden"), F$1 = TP(), { register: k, unregister: Y } = F$1;
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => k(g), [k, g]), qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (E === sn.Hidden && g.current) {
      if (x && M !== "visible") {
        B("visible");
        return;
      }
      return wr(M, { hidden: () => Y(g), visible: () => k(g) });
    }
  }, [M, g, k, Y, x, E]);
  let W = ii({ base: nn(c.className), enter: nn(w), enterFrom: nn(S), enterTo: nn(y), entered: nn(h), leave: nn(l), leaveFrom: nn(p), leaveTo: nn(m) }), L = RP({ beforeEnter: a, afterEnter: u, beforeLeave: f, afterLeave: d }), U = ql();
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (U && M === "visible" && g.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [g, M, U]);
  let H = T && !P, R = P && x && T, X = !U || H ? "idle" : x ? "enter" : "leave", G = pP(0), ee = yt((ie) => wr(ie, { enter: () => {
    G.addFlag(Dr.Opening), L.current.beforeEnter();
  }, leave: () => {
    G.addFlag(Dr.Closing), L.current.beforeLeave();
  }, idle: () => {
  } })), ue = yt((ie) => wr(ie, { enter: () => {
    G.removeFlag(Dr.Opening), L.current.afterEnter();
  }, leave: () => {
    G.removeFlag(Dr.Closing), L.current.afterLeave();
  }, idle: () => {
  } })), j = fm(() => {
    B("hidden"), Y(g);
  }, F$1), Q = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
  xP({ immediate: R, container: g, classes: W, direction: X, onStart: ii((ie) => {
    Q.current = true, j.onStart(g, ie, ee);
  }), onStop: ii((ie) => {
    Q.current = false, j.onStop(g, ie, ue), ie === "leave" && !es(j) && (B("hidden"), Y(g));
  }) });
  let oe = c, le = { ref: b };
  return R ? oe = { ...oe, className: za(c.className, ...W.current.enter, ...W.current.enterFrom) } : Q.current && (oe.className = za(c.className, (o = g.current) == null ? void 0 : o.className), oe.className === "" && delete oe.className), F.createElement(Qa.Provider, { value: j }, F.createElement(QT, { value: wr(M, { visible: Dr.Open, hidden: Dr.Closed }) | G.flags }, Dn({ ourProps: le, theirProps: oe, defaultTag: MP, features: cm, visible: M === "visible", name: "Transition.Child" })));
}
function LP(e2, r) {
  let { show: n, appear: o = false, unmount: a = true, ...u } = e2, f = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null), d = wo(f, r);
  ql();
  let w = om();
  if (n === void 0 && w !== null && (n = (w & Dr.Open) === Dr.Open), ![true, false].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [S, y] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(n ? "visible" : "hidden"), h = fm(() => {
    y("hidden");
  }), [l, p] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(true), m = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef([n]);
  Er(() => {
    l !== false && m.current[m.current.length - 1] !== n && (m.current.push(n), p(false));
  }, [m, n]);
  let c = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => ({ show: n, appear: o, initial: l }), [n, o, l]);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (n) y("visible");
    else if (!es(h)) y("hidden");
    else {
      let x = f.current;
      if (!x) return;
      let P = x.getBoundingClientRect();
      P.x === 0 && P.y === 0 && P.width === 0 && P.height === 0 && y("hidden");
    }
  }, [n, h]);
  let g = { unmount: a }, b = yt(() => {
    var x;
    l && p(false), (x = e2.beforeEnter) == null || x.call(e2);
  }), E = yt(() => {
    var x;
    l && p(false), (x = e2.beforeLeave) == null || x.call(e2);
  });
  return F.createElement(Qa.Provider, { value: h }, F.createElement(Ja.Provider, { value: c }, Dn({ ourProps: { ...g, as: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment, children: F.createElement(dm, { ref: d, ...g, ...u, beforeEnter: b, beforeLeave: E }) }, theirProps: {}, defaultTag: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment, features: cm, visible: S === "visible", name: "Transition" })));
}
function FP(e2, r) {
  let n = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(Ja) !== null, o = om() !== null;
  return F.createElement(F.Fragment, null, !n && o ? F.createElement(xl, { ref: r, ...e2 }) : F.createElement(dm, { ref: r, ...e2 }));
}
let xl = Nn(LP), dm = Nn(IP), $P = Nn(FP), Ba = Object.assign(xl, { Child: $P, Root: xl });
const rl = {
  xs: {
    switch: "h-2.5 w-2.5",
    translate: "translate-x-2.5",
    container: "w-6 h-3.5"
  },
  sm: {
    switch: "h-3.5 w-3.5",
    translate: "translate-x-[0.85rem]",
    container: "h-4.5 w-8"
  },
  md: {
    switch: "h-4 w-4",
    translate: "translate-x-3",
    container: "h-5 w-8"
  },
  lg: {
    switch: "h-4 w-4",
    translate: "translate-x-3",
    container: "h-5 w-8"
  }
}, DP = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.forwardRef(({ onChange: e2, value: r, size: n = "md", className: o = "ml-auto" }, a) => {
  const u = (f) => {
    e2(f);
  };
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: Je("flex items-center", o), children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    bP,
    {
      as: "span",
      ref: a,
      checked: r,
      onChange: u,
      onKeyDown: (f) => {
        f.key === "Enter" && u(!r);
      },
      className: `${r ? "bg-primary-dark" : "bg-grey-200"}
relative inline-flex shrink-0 ${rl[n].container} cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
      children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: `${r ? rl[n].translate : "translate-x-0"}
pointer-events-none inline-block ${rl[n].switch} transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        }
      )
    }
  ) });
}), SM = ({
  children: e2,
  label: r,
  placement: n = "top",
  className: o
}) => {
  const [a, u] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(
    null
  ), [f, d] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(null), [w, S] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(false), { styles: y, attributes: h } = tv(a, f, {
    placement: n,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8]
        }
      },
      {
        name: "preventOverflow",
        options: {
          rootBoundary: "viewport",
          padding: 8
        }
      }
    ]
  }), l = F.Children.map(e2, (p) => F.isValidElement(p) ? F.cloneElement(p, {
    ref: u,
    onMouseEnter: () => S(true),
    onMouseLeave: () => S(false)
  }) : p);
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    l,
    w && Mi$1.createPortal(
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: d,
          style: y.popper,
          ...h.popper,
          className: Je(
            "z-10 select-none rounded bg-gray-50 px-2 py-1 text-xs text-gray-800",
            o
          ),
          children: r
        }
      ),
      document.querySelector("body")
    )
  ] });
}, NP = keyframes`
  to {
    fill: url(#d);
    stroke-dashoffset: 0;
  }
`, kP = Wa.svg`
  & .e {
    fill: url(#d);
  }

  & #tail {
    stroke: url(#d);
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${NP} 1.5s ease-in-out infinite alternate-reverse;
  }

  & #circle {
    stroke: #fff;
    stroke-width: 2;
    fill: #fff;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }
`, _M = ({
  message: e2,
  version: r
}) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-fd-gray-default text-white", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col text-center", children: [
  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative mr-4 self-center", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center rounded", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(kP, { className: "h-60 w-60", viewBox: "0 0 143.14 136.27", children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("linearGradient", { id: "d", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "0%", stopColor: "#2743a6", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#ffa4c0; #2743a6;",
          dur: "6s",
          repeatCount: "indefinite"
        }
      ) }),
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "100%", stopColor: "#ffa4c0", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#2743a6; #ffa4c0;",
          dur: "2ds",
          repeatCount: "indefinite"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "a" }),
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "b", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "c", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("g", { children: [
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "tail",
          className: "e",
          d: "M134.13,79.9l.25-1.2h-21.87l-.21,.7c-.03,.08-2.41,7.72-7.11,14.56-5.87,8.54-12.57,12.63-12.63,12.67l-1,.6,24.25,28.96h27.33l-22.61-26.46c2.2-2.67,10.06-13.09,13.6-29.83Z"
        }
      ),
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "circle",
          className: "f",
          d: "M83.08,113.64l18.93,22.6-33.68,.03-11.17-.03c-9.38,.01-18.55-2.45-26.56-7.11-2.94-1.71-5.72-3.71-8.29-6-8.79-7.8-17.6-19.72-20.92-37.37-.01-.02-.02-.03-.03-.05v-.09c-1.68-9.04-1.93-19.58,0-31.84C8.57,21.67,36.68-.66,69.93,.02c12.81,.27,25.06,4.28,35.59,11.48,.31,.2,.62,.41,.92,.62,.25,.18,.5,.35,.74,.53,8.82,6.31,16.06,14.69,21.02,24.42,.17,.33,.34,.65,.5,.98,.1,.21,.2,.41,.3,.61,4.35,8.92,6.63,18.54,6.54,28.06,0,.36,.02,.71,.02,1.06,0,.82-.03,1.62-.06,2.43h-22c.04-.81,.06-1.61,.06-2.43,0-1.52-.08-3.02-.23-4.5-2.68-22.17-21.26-39.86-43.98-40.63-4.43-.15-8.75,.29-12.88,1.28-.02,0-.04,.01-.05,.01-.48,.12-.95,.24-1.42,.38-.97,.26-1.94,.56-2.89,.9-.23,.07-.46,.15-.69,.24-6.2,2.27-11.84,5.87-16.59,10.67-8.99,9.09-13.84,21.44-13.3,33.9,0,19.98,17.86,39.48,35.59,42.56,6.4,1.37,24.04,1.24,25.96,1.05Z"
        }
      )
    ] }) }) })
  ] }) }) }),
  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "text-xs text-grey-200", children: r }),
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h2", { className: "text-lg text-grey-100", children: e2 })
  ] })
] }) });
var eo = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var WP = eo.exports, Sh;
function UP() {
  return Sh || (Sh = 1, (function(e2, r) {
    (function() {
      var n, o = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", d = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", S = 500, y = "__lodash_placeholder__", h = 1, l = 2, p = 4, m = 1, c = 2, g = 1, b = 2, E = 4, x = 8, P = 16, T = 32, M = 64, B = 128, F = 256, k = 512, Y = 30, W = "...", L = 800, U = 16, H = 1, R = 2, X = 3, G = 1 / 0, ee = 9007199254740991, ue = 17976931348623157e292, j = NaN, Q = 4294967295, oe = Q - 1, le = Q >>> 1, ie = [
        ["ary", B],
        ["bind", g],
        ["bindKey", b],
        ["curry", x],
        ["curryRight", P],
        ["flip", k],
        ["partial", T],
        ["partialRight", M],
        ["rearg", F]
      ], fe = "[object Arguments]", de = "[object Array]", ge = "[object AsyncFunction]", me = "[object Boolean]", _e = "[object Date]", Oe = "[object DOMException]", Be = "[object Error]", re = "[object Function]", ht = "[object GeneratorFunction]", ot = "[object Map]", cr = "[object Number]", bo = "[object Null]", Ut = "[object Object]", So = "[object Promise]", is = "[object Proxy]", Mt = "[object RegExp]", vt = "[object Set]", zr = "[object String]", dn = "[object Symbol]", hi = "[object Undefined]", Br = "[object WeakMap]", _o = "[object WeakSet]", Hr = "[object ArrayBuffer]", xr = "[object DataView]", os = "[object Float32Array]", as = "[object Float64Array]", ss = "[object Int8Array]", us = "[object Int16Array]", ls = "[object Int32Array]", fs = "[object Uint8Array]", cs = "[object Uint8ClampedArray]", ds = "[object Uint16Array]", ps = "[object Uint32Array]", Zm = /\b__p \+= '';/g, Km = /\b(__p \+=) '' \+/g, Gm = /(__e\(.*?\)|\b__t\)) \+\n'';/g, tf = /&(?:amp|lt|gt|quot|#39);/g, rf = /[&<>"']/g, Vm = RegExp(tf.source), Ym = RegExp(rf.source), Xm = /<%-([\s\S]+?)%>/g, Jm = /<%([\s\S]+?)%>/g, nf = /<%=([\s\S]+?)%>/g, Qm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eg = /^\w*$/, tg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hs = /[\\^$.*+?()[\]{}|]/g, rg = RegExp(hs.source), vs = /^\s+/, ng = /\s/, ig = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, og = /\{\n\/\* \[wrapped with (.+)\] \*/, ag = /,? & /, sg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ug = /[()=,{}\[\]\/\s]/, lg = /\\(\\)?/g, fg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, of = /\w*$/, cg = /^[-+]0x[0-9a-f]+$/i, dg = /^0b[01]+$/i, pg = /^\[object .+?Constructor\]$/, hg = /^0o[0-7]+$/i, vg = /^(?:0|[1-9]\d*)$/, mg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Eo = /($^)/, gg = /['\n\r\u2028\u2029\\]/g, xo = "\\ud800-\\udfff", yg = "\\u0300-\\u036f", wg = "\\ufe20-\\ufe2f", bg = "\\u20d0-\\u20ff", af = yg + wg + bg, sf = "\\u2700-\\u27bf", uf = "a-z\\xdf-\\xf6\\xf8-\\xff", Sg = "\\xac\\xb1\\xd7\\xf7", _g = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Eg = "\\u2000-\\u206f", xg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", lf = "A-Z\\xc0-\\xd6\\xd8-\\xde", ff = "\\ufe0e\\ufe0f", cf = Sg + _g + Eg + xg, ms = "['’]", Og = "[" + xo + "]", df = "[" + cf + "]", Oo = "[" + af + "]", pf = "\\d+", Ag = "[" + sf + "]", hf = "[" + uf + "]", vf = "[^" + xo + cf + pf + sf + uf + lf + "]", gs = "\\ud83c[\\udffb-\\udfff]", Tg = "(?:" + Oo + "|" + gs + ")", mf = "[^" + xo + "]", ys = "(?:\\ud83c[\\udde6-\\uddff]){2}", ws = "[\\ud800-\\udbff][\\udc00-\\udfff]", kn = "[" + lf + "]", gf = "\\u200d", yf = "(?:" + hf + "|" + vf + ")", Pg = "(?:" + kn + "|" + vf + ")", wf = "(?:" + ms + "(?:d|ll|m|re|s|t|ve))?", bf = "(?:" + ms + "(?:D|LL|M|RE|S|T|VE))?", Sf = Tg + "?", _f = "[" + ff + "]?", Cg = "(?:" + gf + "(?:" + [mf, ys, ws].join("|") + ")" + _f + Sf + ")*", Rg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Mg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ef = _f + Sf + Cg, Ig = "(?:" + [Ag, ys, ws].join("|") + ")" + Ef, Lg = "(?:" + [mf + Oo + "?", Oo, ys, ws, Og].join("|") + ")", Fg = RegExp(ms, "g"), $g = RegExp(Oo, "g"), bs = RegExp(gs + "(?=" + gs + ")|" + Lg + Ef, "g"), Dg = RegExp([
        kn + "?" + hf + "+" + wf + "(?=" + [df, kn, "$"].join("|") + ")",
        Pg + "+" + bf + "(?=" + [df, kn + yf, "$"].join("|") + ")",
        kn + "?" + yf + "+" + wf,
        kn + "+" + bf,
        Mg,
        Rg,
        pf,
        Ig
      ].join("|"), "g"), Ng = RegExp("[" + gf + xo + af + ff + "]"), kg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Wg = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Ug = -1, ke = {};
      ke[os] = ke[as] = ke[ss] = ke[us] = ke[ls] = ke[fs] = ke[cs] = ke[ds] = ke[ps] = true, ke[fe] = ke[de] = ke[Hr] = ke[me] = ke[xr] = ke[_e] = ke[Be] = ke[re] = ke[ot] = ke[cr] = ke[Ut] = ke[Mt] = ke[vt] = ke[zr] = ke[Br] = false;
      var Ne = {};
      Ne[fe] = Ne[de] = Ne[Hr] = Ne[xr] = Ne[me] = Ne[_e] = Ne[os] = Ne[as] = Ne[ss] = Ne[us] = Ne[ls] = Ne[ot] = Ne[cr] = Ne[Ut] = Ne[Mt] = Ne[vt] = Ne[zr] = Ne[dn] = Ne[fs] = Ne[cs] = Ne[ds] = Ne[ps] = true, Ne[Be] = Ne[re] = Ne[Br] = false;
      var zg = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Bg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Hg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, jg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, qg = parseFloat, Zg = parseInt, xf = typeof da == "object" && da && da.Object === Object && da, Kg = typeof self == "object" && self && self.Object === Object && self, ft = xf || Kg || Function("return this")(), Ss = r && !r.nodeType && r, pn = Ss && true && e2 && !e2.nodeType && e2, Of = pn && pn.exports === Ss, _s = Of && xf.process, zt = (function() {
        try {
          var $ = pn && pn.require && pn.require("util").types;
          return $ || _s && _s.binding && _s.binding("util");
        } catch {
        }
      })(), Af = zt && zt.isArrayBuffer, Tf = zt && zt.isDate, Pf = zt && zt.isMap, Cf = zt && zt.isRegExp, Rf = zt && zt.isSet, Mf = zt && zt.isTypedArray;
      function It($, q, z) {
        switch (z.length) {
          case 0:
            return $.call(q);
          case 1:
            return $.call(q, z[0]);
          case 2:
            return $.call(q, z[0], z[1]);
          case 3:
            return $.call(q, z[0], z[1], z[2]);
        }
        return $.apply(q, z);
      }
      function Gg($, q, z, ae) {
        for (var ye = -1, Pe = $ == null ? 0 : $.length; ++ye < Pe; ) {
          var Qe = $[ye];
          q(ae, Qe, z(Qe), $);
        }
        return ae;
      }
      function Bt($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length; ++z < ae && q($[z], z, $) !== false; )
          ;
        return $;
      }
      function Vg($, q) {
        for (var z = $ == null ? 0 : $.length; z-- && q($[z], z, $) !== false; )
          ;
        return $;
      }
      function If($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length; ++z < ae; )
          if (!q($[z], z, $))
            return false;
        return true;
      }
      function jr($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length, ye = 0, Pe = []; ++z < ae; ) {
          var Qe = $[z];
          q(Qe, z, $) && (Pe[ye++] = Qe);
        }
        return Pe;
      }
      function Ao($, q) {
        var z = $ == null ? 0 : $.length;
        return !!z && Wn($, q, 0) > -1;
      }
      function Es($, q, z) {
        for (var ae = -1, ye = $ == null ? 0 : $.length; ++ae < ye; )
          if (z(q, $[ae]))
            return true;
        return false;
      }
      function We($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length, ye = Array(ae); ++z < ae; )
          ye[z] = q($[z], z, $);
        return ye;
      }
      function qr($, q) {
        for (var z = -1, ae = q.length, ye = $.length; ++z < ae; )
          $[ye + z] = q[z];
        return $;
      }
      function xs($, q, z, ae) {
        var ye = -1, Pe = $ == null ? 0 : $.length;
        for (ae && Pe && (z = $[++ye]); ++ye < Pe; )
          z = q(z, $[ye], ye, $);
        return z;
      }
      function Yg($, q, z, ae) {
        var ye = $ == null ? 0 : $.length;
        for (ae && ye && (z = $[--ye]); ye--; )
          z = q(z, $[ye], ye, $);
        return z;
      }
      function Os($, q) {
        for (var z = -1, ae = $ == null ? 0 : $.length; ++z < ae; )
          if (q($[z], z, $))
            return true;
        return false;
      }
      var Xg = As("length");
      function Jg($) {
        return $.split("");
      }
      function Qg($) {
        return $.match(sg) || [];
      }
      function Lf($, q, z) {
        var ae;
        return z($, function(ye, Pe, Qe) {
          if (q(ye, Pe, Qe))
            return ae = Pe, false;
        }), ae;
      }
      function To($, q, z, ae) {
        for (var ye = $.length, Pe = z + (ae ? 1 : -1); ae ? Pe-- : ++Pe < ye; )
          if (q($[Pe], Pe, $))
            return Pe;
        return -1;
      }
      function Wn($, q, z) {
        return q === q ? cy($, q, z) : To($, Ff, z);
      }
      function ey($, q, z, ae) {
        for (var ye = z - 1, Pe = $.length; ++ye < Pe; )
          if (ae($[ye], q))
            return ye;
        return -1;
      }
      function Ff($) {
        return $ !== $;
      }
      function $f($, q) {
        var z = $ == null ? 0 : $.length;
        return z ? Ps($, q) / z : j;
      }
      function As($) {
        return function(q) {
          return q == null ? n : q[$];
        };
      }
      function Ts($) {
        return function(q) {
          return $ == null ? n : $[q];
        };
      }
      function Df($, q, z, ae, ye) {
        return ye($, function(Pe, Qe, Fe) {
          z = ae ? (ae = false, Pe) : q(z, Pe, Qe, Fe);
        }), z;
      }
      function ty($, q) {
        var z = $.length;
        for ($.sort(q); z--; )
          $[z] = $[z].value;
        return $;
      }
      function Ps($, q) {
        for (var z, ae = -1, ye = $.length; ++ae < ye; ) {
          var Pe = q($[ae]);
          Pe !== n && (z = z === n ? Pe : z + Pe);
        }
        return z;
      }
      function Cs($, q) {
        for (var z = -1, ae = Array($); ++z < $; )
          ae[z] = q(z);
        return ae;
      }
      function ry($, q) {
        return We(q, function(z) {
          return [z, $[z]];
        });
      }
      function Nf($) {
        return $ && $.slice(0, zf($) + 1).replace(vs, "");
      }
      function Lt($) {
        return function(q) {
          return $(q);
        };
      }
      function Rs($, q) {
        return We(q, function(z) {
          return $[z];
        });
      }
      function vi($, q) {
        return $.has(q);
      }
      function kf($, q) {
        for (var z = -1, ae = $.length; ++z < ae && Wn(q, $[z], 0) > -1; )
          ;
        return z;
      }
      function Wf($, q) {
        for (var z = $.length; z-- && Wn(q, $[z], 0) > -1; )
          ;
        return z;
      }
      function ny($, q) {
        for (var z = $.length, ae = 0; z--; )
          $[z] === q && ++ae;
        return ae;
      }
      var iy = Ts(zg), oy = Ts(Bg);
      function ay($) {
        return "\\" + jg[$];
      }
      function sy($, q) {
        return $ == null ? n : $[q];
      }
      function Un($) {
        return Ng.test($);
      }
      function uy($) {
        return kg.test($);
      }
      function ly($) {
        for (var q, z = []; !(q = $.next()).done; )
          z.push(q.value);
        return z;
      }
      function Ms($) {
        var q = -1, z = Array($.size);
        return $.forEach(function(ae, ye) {
          z[++q] = [ye, ae];
        }), z;
      }
      function Uf($, q) {
        return function(z) {
          return $(q(z));
        };
      }
      function Zr($, q) {
        for (var z = -1, ae = $.length, ye = 0, Pe = []; ++z < ae; ) {
          var Qe = $[z];
          (Qe === q || Qe === y) && ($[z] = y, Pe[ye++] = z);
        }
        return Pe;
      }
      function Po($) {
        var q = -1, z = Array($.size);
        return $.forEach(function(ae) {
          z[++q] = ae;
        }), z;
      }
      function fy($) {
        var q = -1, z = Array($.size);
        return $.forEach(function(ae) {
          z[++q] = [ae, ae];
        }), z;
      }
      function cy($, q, z) {
        for (var ae = z - 1, ye = $.length; ++ae < ye; )
          if ($[ae] === q)
            return ae;
        return -1;
      }
      function dy($, q, z) {
        for (var ae = z + 1; ae--; )
          if ($[ae] === q)
            return ae;
        return ae;
      }
      function zn($) {
        return Un($) ? hy($) : Xg($);
      }
      function rr($) {
        return Un($) ? vy($) : Jg($);
      }
      function zf($) {
        for (var q = $.length; q-- && ng.test($.charAt(q)); )
          ;
        return q;
      }
      var py = Ts(Hg);
      function hy($) {
        for (var q = bs.lastIndex = 0; bs.test($); )
          ++q;
        return q;
      }
      function vy($) {
        return $.match(bs) || [];
      }
      function my($) {
        return $.match(Dg) || [];
      }
      var gy = function $(q) {
        q = q == null ? ft : Bn.defaults(ft.Object(), q, Bn.pick(ft, Wg));
        var z = q.Array, ae = q.Date, ye = q.Error, Pe = q.Function, Qe = q.Math, Fe = q.Object, Is = q.RegExp, yy = q.String, Ht = q.TypeError, Co = z.prototype, wy = Pe.prototype, Hn = Fe.prototype, Ro = q["__core-js_shared__"], Mo = wy.toString, Le = Hn.hasOwnProperty, by = 0, Bf = (function() {
          var t = /[^.]+$/.exec(Ro && Ro.keys && Ro.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), Io = Hn.toString, Sy = Mo.call(Fe), _y = ft._, Ey = Is(
          "^" + Mo.call(Le).replace(hs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Lo = Of ? q.Buffer : n, Kr = q.Symbol, Fo = q.Uint8Array, Hf = Lo ? Lo.allocUnsafe : n, $o = Uf(Fe.getPrototypeOf, Fe), jf = Fe.create, qf = Hn.propertyIsEnumerable, Do = Co.splice, Zf = Kr ? Kr.isConcatSpreadable : n, mi = Kr ? Kr.iterator : n, hn = Kr ? Kr.toStringTag : n, No = (function() {
          try {
            var t = wn(Fe, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), xy = q.clearTimeout !== ft.clearTimeout && q.clearTimeout, Oy = ae && ae.now !== ft.Date.now && ae.now, Ay = q.setTimeout !== ft.setTimeout && q.setTimeout, ko = Qe.ceil, Wo = Qe.floor, Ls = Fe.getOwnPropertySymbols, Ty = Lo ? Lo.isBuffer : n, Kf = q.isFinite, Py = Co.join, Cy = Uf(Fe.keys, Fe), et = Qe.max, mt = Qe.min, Ry = ae.now, My = q.parseInt, Gf = Qe.random, Iy = Co.reverse, Fs = wn(q, "DataView"), gi = wn(q, "Map"), $s = wn(q, "Promise"), jn = wn(q, "Set"), yi = wn(q, "WeakMap"), wi = wn(Fe, "create"), Uo = yi && new yi(), qn = {}, Ly = bn(Fs), Fy = bn(gi), $y = bn($s), Dy = bn(jn), Ny = bn(yi), zo = Kr ? Kr.prototype : n, bi = zo ? zo.valueOf : n, Vf = zo ? zo.toString : n;
        function O(t) {
          if (Ze(t) && !we(t) && !(t instanceof Ae)) {
            if (t instanceof jt)
              return t;
            if (Le.call(t, "__wrapped__"))
              return Yc(t);
          }
          return new jt(t);
        }
        var Zn = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(i) {
            if (!He(i))
              return {};
            if (jf)
              return jf(i);
            t.prototype = i;
            var s = new t();
            return t.prototype = n, s;
          };
        })();
        function Bo() {
        }
        function jt(t, i) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = n;
        }
        O.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Xm,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Jm,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: nf,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: O
          }
        }, O.prototype = Bo.prototype, O.prototype.constructor = O, jt.prototype = Zn(Bo.prototype), jt.prototype.constructor = jt;
        function Ae(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Q, this.__views__ = [];
        }
        function ky() {
          var t = new Ae(this.__wrapped__);
          return t.__actions__ = xt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = xt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = xt(this.__views__), t;
        }
        function Wy() {
          if (this.__filtered__) {
            var t = new Ae(this);
            t.__dir__ = -1, t.__filtered__ = true;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Uy() {
          var t = this.__wrapped__.value(), i = this.__dir__, s = we(t), v = i < 0, _ = s ? t.length : 0, A = J0(0, _, this.__views__), C = A.start, I = A.end, N = I - C, Z = v ? I : C - 1, V = this.__iteratees__, J = V.length, ne = 0, se = mt(N, this.__takeCount__);
          if (!s || !v && _ == N && se == N)
            return wc(t, this.__actions__);
          var pe = [];
          e:
            for (; N-- && ne < se; ) {
              Z += i;
              for (var Se = -1, he = t[Z]; ++Se < J; ) {
                var xe = V[Se], Te = xe.iteratee, Dt = xe.type, _t = Te(he);
                if (Dt == R)
                  he = _t;
                else if (!_t) {
                  if (Dt == H)
                    continue e;
                  break e;
                }
              }
              pe[ne++] = he;
            }
          return pe;
        }
        Ae.prototype = Zn(Bo.prototype), Ae.prototype.constructor = Ae;
        function vn(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++i < s; ) {
            var v = t[i];
            this.set(v[0], v[1]);
          }
        }
        function zy() {
          this.__data__ = wi ? wi(null) : {}, this.size = 0;
        }
        function By(t) {
          var i = this.has(t) && delete this.__data__[t];
          return this.size -= i ? 1 : 0, i;
        }
        function Hy(t) {
          var i = this.__data__;
          if (wi) {
            var s = i[t];
            return s === w ? n : s;
          }
          return Le.call(i, t) ? i[t] : n;
        }
        function jy(t) {
          var i = this.__data__;
          return wi ? i[t] !== n : Le.call(i, t);
        }
        function qy(t, i) {
          var s = this.__data__;
          return this.size += this.has(t) ? 0 : 1, s[t] = wi && i === n ? w : i, this;
        }
        vn.prototype.clear = zy, vn.prototype.delete = By, vn.prototype.get = Hy, vn.prototype.has = jy, vn.prototype.set = qy;
        function Or(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++i < s; ) {
            var v = t[i];
            this.set(v[0], v[1]);
          }
        }
        function Zy() {
          this.__data__ = [], this.size = 0;
        }
        function Ky(t) {
          var i = this.__data__, s = Ho(i, t);
          if (s < 0)
            return false;
          var v = i.length - 1;
          return s == v ? i.pop() : Do.call(i, s, 1), --this.size, true;
        }
        function Gy(t) {
          var i = this.__data__, s = Ho(i, t);
          return s < 0 ? n : i[s][1];
        }
        function Vy(t) {
          return Ho(this.__data__, t) > -1;
        }
        function Yy(t, i) {
          var s = this.__data__, v = Ho(s, t);
          return v < 0 ? (++this.size, s.push([t, i])) : s[v][1] = i, this;
        }
        Or.prototype.clear = Zy, Or.prototype.delete = Ky, Or.prototype.get = Gy, Or.prototype.has = Vy, Or.prototype.set = Yy;
        function Ar(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.clear(); ++i < s; ) {
            var v = t[i];
            this.set(v[0], v[1]);
          }
        }
        function Xy() {
          this.size = 0, this.__data__ = {
            hash: new vn(),
            map: new (gi || Or)(),
            string: new vn()
          };
        }
        function Jy(t) {
          var i = ta(this, t).delete(t);
          return this.size -= i ? 1 : 0, i;
        }
        function Qy(t) {
          return ta(this, t).get(t);
        }
        function e0(t) {
          return ta(this, t).has(t);
        }
        function t0(t, i) {
          var s = ta(this, t), v = s.size;
          return s.set(t, i), this.size += s.size == v ? 0 : 1, this;
        }
        Ar.prototype.clear = Xy, Ar.prototype.delete = Jy, Ar.prototype.get = Qy, Ar.prototype.has = e0, Ar.prototype.set = t0;
        function mn(t) {
          var i = -1, s = t == null ? 0 : t.length;
          for (this.__data__ = new Ar(); ++i < s; )
            this.add(t[i]);
        }
        function r0(t) {
          return this.__data__.set(t, w), this;
        }
        function n0(t) {
          return this.__data__.has(t);
        }
        mn.prototype.add = mn.prototype.push = r0, mn.prototype.has = n0;
        function nr(t) {
          var i = this.__data__ = new Or(t);
          this.size = i.size;
        }
        function i0() {
          this.__data__ = new Or(), this.size = 0;
        }
        function o0(t) {
          var i = this.__data__, s = i.delete(t);
          return this.size = i.size, s;
        }
        function a0(t) {
          return this.__data__.get(t);
        }
        function s0(t) {
          return this.__data__.has(t);
        }
        function u0(t, i) {
          var s = this.__data__;
          if (s instanceof Or) {
            var v = s.__data__;
            if (!gi || v.length < a - 1)
              return v.push([t, i]), this.size = ++s.size, this;
            s = this.__data__ = new Ar(v);
          }
          return s.set(t, i), this.size = s.size, this;
        }
        nr.prototype.clear = i0, nr.prototype.delete = o0, nr.prototype.get = a0, nr.prototype.has = s0, nr.prototype.set = u0;
        function Yf(t, i) {
          var s = we(t), v = !s && Sn(t), _ = !s && !v && Jr(t), A = !s && !v && !_ && Yn(t), C = s || v || _ || A, I = C ? Cs(t.length, yy) : [], N = I.length;
          for (var Z in t)
            (i || Le.call(t, Z)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            _ && (Z == "offset" || Z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            A && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || // Skip index properties.
            Rr(Z, N))) && I.push(Z);
          return I;
        }
        function Xf(t) {
          var i = t.length;
          return i ? t[Zs(0, i - 1)] : n;
        }
        function l0(t, i) {
          return ra(xt(t), gn(i, 0, t.length));
        }
        function f0(t) {
          return ra(xt(t));
        }
        function Ds(t, i, s) {
          (s !== n && !ir(t[i], s) || s === n && !(i in t)) && Tr(t, i, s);
        }
        function Si(t, i, s) {
          var v = t[i];
          (!(Le.call(t, i) && ir(v, s)) || s === n && !(i in t)) && Tr(t, i, s);
        }
        function Ho(t, i) {
          for (var s = t.length; s--; )
            if (ir(t[s][0], i))
              return s;
          return -1;
        }
        function c0(t, i, s, v) {
          return Gr(t, function(_, A, C) {
            i(v, _, s(_), C);
          }), v;
        }
        function Jf(t, i) {
          return t && pr(i, at(i), t);
        }
        function d0(t, i) {
          return t && pr(i, At(i), t);
        }
        function Tr(t, i, s) {
          i == "__proto__" && No ? No(t, i, {
            configurable: true,
            enumerable: true,
            value: s,
            writable: true
          }) : t[i] = s;
        }
        function Ns(t, i) {
          for (var s = -1, v = i.length, _ = z(v), A = t == null; ++s < v; )
            _[s] = A ? n : gu(t, i[s]);
          return _;
        }
        function gn(t, i, s) {
          return t === t && (s !== n && (t = t <= s ? t : s), i !== n && (t = t >= i ? t : i)), t;
        }
        function qt(t, i, s, v, _, A) {
          var C, I = i & h, N = i & l, Z = i & p;
          if (s && (C = _ ? s(t, v, _, A) : s(t)), C !== n)
            return C;
          if (!He(t))
            return t;
          var V = we(t);
          if (V) {
            if (C = e1(t), !I)
              return xt(t, C);
          } else {
            var J = gt(t), ne = J == re || J == ht;
            if (Jr(t))
              return _c(t, I);
            if (J == Ut || J == fe || ne && !_) {
              if (C = N || ne ? {} : zc(t), !I)
                return N ? H0(t, d0(C, t)) : B0(t, Jf(C, t));
            } else {
              if (!Ne[J])
                return _ ? t : {};
              C = t1(t, J, I);
            }
          }
          A || (A = new nr());
          var se = A.get(t);
          if (se)
            return se;
          A.set(t, C), md(t) ? t.forEach(function(he) {
            C.add(qt(he, i, s, he, t, A));
          }) : hd(t) && t.forEach(function(he, xe) {
            C.set(xe, qt(he, i, s, xe, t, A));
          });
          var pe = Z ? N ? nu : ru : N ? At : at, Se = V ? n : pe(t);
          return Bt(Se || t, function(he, xe) {
            Se && (xe = he, he = t[xe]), Si(C, xe, qt(he, i, s, xe, t, A));
          }), C;
        }
        function p0(t) {
          var i = at(t);
          return function(s) {
            return Qf(s, t, i);
          };
        }
        function Qf(t, i, s) {
          var v = s.length;
          if (t == null)
            return !v;
          for (t = Fe(t); v--; ) {
            var _ = s[v], A = i[_], C = t[_];
            if (C === n && !(_ in t) || !A(C))
              return false;
          }
          return true;
        }
        function ec(t, i, s) {
          if (typeof t != "function")
            throw new Ht(f);
          return Pi(function() {
            t.apply(n, s);
          }, i);
        }
        function _i(t, i, s, v) {
          var _ = -1, A = Ao, C = true, I = t.length, N = [], Z = i.length;
          if (!I)
            return N;
          s && (i = We(i, Lt(s))), v ? (A = Es, C = false) : i.length >= a && (A = vi, C = false, i = new mn(i));
          e:
            for (; ++_ < I; ) {
              var V = t[_], J = s == null ? V : s(V);
              if (V = v || V !== 0 ? V : 0, C && J === J) {
                for (var ne = Z; ne--; )
                  if (i[ne] === J)
                    continue e;
                N.push(V);
              } else A(i, J, v) || N.push(V);
            }
          return N;
        }
        var Gr = Tc(dr), tc = Tc(Ws, true);
        function h0(t, i) {
          var s = true;
          return Gr(t, function(v, _, A) {
            return s = !!i(v, _, A), s;
          }), s;
        }
        function jo(t, i, s) {
          for (var v = -1, _ = t.length; ++v < _; ) {
            var A = t[v], C = i(A);
            if (C != null && (I === n ? C === C && !$t(C) : s(C, I)))
              var I = C, N = A;
          }
          return N;
        }
        function v0(t, i, s, v) {
          var _ = t.length;
          for (s = be(s), s < 0 && (s = -s > _ ? 0 : _ + s), v = v === n || v > _ ? _ : be(v), v < 0 && (v += _), v = s > v ? 0 : yd(v); s < v; )
            t[s++] = i;
          return t;
        }
        function rc(t, i) {
          var s = [];
          return Gr(t, function(v, _, A) {
            i(v, _, A) && s.push(v);
          }), s;
        }
        function ct(t, i, s, v, _) {
          var A = -1, C = t.length;
          for (s || (s = n1), _ || (_ = []); ++A < C; ) {
            var I = t[A];
            i > 0 && s(I) ? i > 1 ? ct(I, i - 1, s, v, _) : qr(_, I) : v || (_[_.length] = I);
          }
          return _;
        }
        var ks = Pc(), nc = Pc(true);
        function dr(t, i) {
          return t && ks(t, i, at);
        }
        function Ws(t, i) {
          return t && nc(t, i, at);
        }
        function qo(t, i) {
          return jr(i, function(s) {
            return Mr(t[s]);
          });
        }
        function yn(t, i) {
          i = Yr(i, t);
          for (var s = 0, v = i.length; t != null && s < v; )
            t = t[hr(i[s++])];
          return s && s == v ? t : n;
        }
        function ic(t, i, s) {
          var v = i(t);
          return we(t) ? v : qr(v, s(t));
        }
        function bt(t) {
          return t == null ? t === n ? hi : bo : hn && hn in Fe(t) ? X0(t) : f1(t);
        }
        function Us(t, i) {
          return t > i;
        }
        function m0(t, i) {
          return t != null && Le.call(t, i);
        }
        function g0(t, i) {
          return t != null && i in Fe(t);
        }
        function y0(t, i, s) {
          return t >= mt(i, s) && t < et(i, s);
        }
        function zs(t, i, s) {
          for (var v = s ? Es : Ao, _ = t[0].length, A = t.length, C = A, I = z(A), N = 1 / 0, Z = []; C--; ) {
            var V = t[C];
            C && i && (V = We(V, Lt(i))), N = mt(V.length, N), I[C] = !s && (i || _ >= 120 && V.length >= 120) ? new mn(C && V) : n;
          }
          V = t[0];
          var J = -1, ne = I[0];
          e:
            for (; ++J < _ && Z.length < N; ) {
              var se = V[J], pe = i ? i(se) : se;
              if (se = s || se !== 0 ? se : 0, !(ne ? vi(ne, pe) : v(Z, pe, s))) {
                for (C = A; --C; ) {
                  var Se = I[C];
                  if (!(Se ? vi(Se, pe) : v(t[C], pe, s)))
                    continue e;
                }
                ne && ne.push(pe), Z.push(se);
              }
            }
          return Z;
        }
        function w0(t, i, s, v) {
          return dr(t, function(_, A, C) {
            i(v, s(_), A, C);
          }), v;
        }
        function Ei(t, i, s) {
          i = Yr(i, t), t = qc(t, i);
          var v = t == null ? t : t[hr(Kt(i))];
          return v == null ? n : It(v, t, s);
        }
        function oc(t) {
          return Ze(t) && bt(t) == fe;
        }
        function b0(t) {
          return Ze(t) && bt(t) == Hr;
        }
        function S0(t) {
          return Ze(t) && bt(t) == _e;
        }
        function xi(t, i, s, v, _) {
          return t === i ? true : t == null || i == null || !Ze(t) && !Ze(i) ? t !== t && i !== i : _0(t, i, s, v, xi, _);
        }
        function _0(t, i, s, v, _, A) {
          var C = we(t), I = we(i), N = C ? de : gt(t), Z = I ? de : gt(i);
          N = N == fe ? Ut : N, Z = Z == fe ? Ut : Z;
          var V = N == Ut, J = Z == Ut, ne = N == Z;
          if (ne && Jr(t)) {
            if (!Jr(i))
              return false;
            C = true, V = false;
          }
          if (ne && !V)
            return A || (A = new nr()), C || Yn(t) ? kc(t, i, s, v, _, A) : V0(t, i, N, s, v, _, A);
          if (!(s & m)) {
            var se = V && Le.call(t, "__wrapped__"), pe = J && Le.call(i, "__wrapped__");
            if (se || pe) {
              var Se = se ? t.value() : t, he = pe ? i.value() : i;
              return A || (A = new nr()), _(Se, he, s, v, A);
            }
          }
          return ne ? (A || (A = new nr()), Y0(t, i, s, v, _, A)) : false;
        }
        function E0(t) {
          return Ze(t) && gt(t) == ot;
        }
        function Bs(t, i, s, v) {
          var _ = s.length, A = _, C = !v;
          if (t == null)
            return !A;
          for (t = Fe(t); _--; ) {
            var I = s[_];
            if (C && I[2] ? I[1] !== t[I[0]] : !(I[0] in t))
              return false;
          }
          for (; ++_ < A; ) {
            I = s[_];
            var N = I[0], Z = t[N], V = I[1];
            if (C && I[2]) {
              if (Z === n && !(N in t))
                return false;
            } else {
              var J = new nr();
              if (v)
                var ne = v(Z, V, N, t, i, J);
              if (!(ne === n ? xi(V, Z, m | c, v, J) : ne))
                return false;
            }
          }
          return true;
        }
        function ac(t) {
          if (!He(t) || o1(t))
            return false;
          var i = Mr(t) ? Ey : pg;
          return i.test(bn(t));
        }
        function x0(t) {
          return Ze(t) && bt(t) == Mt;
        }
        function O0(t) {
          return Ze(t) && gt(t) == vt;
        }
        function A0(t) {
          return Ze(t) && ua(t.length) && !!ke[bt(t)];
        }
        function sc(t) {
          return typeof t == "function" ? t : t == null ? Tt : typeof t == "object" ? we(t) ? fc(t[0], t[1]) : lc(t) : Cd(t);
        }
        function Hs(t) {
          if (!Ti(t))
            return Cy(t);
          var i = [];
          for (var s in Fe(t))
            Le.call(t, s) && s != "constructor" && i.push(s);
          return i;
        }
        function T0(t) {
          if (!He(t))
            return l1(t);
          var i = Ti(t), s = [];
          for (var v in t)
            v == "constructor" && (i || !Le.call(t, v)) || s.push(v);
          return s;
        }
        function js(t, i) {
          return t < i;
        }
        function uc(t, i) {
          var s = -1, v = Ot(t) ? z(t.length) : [];
          return Gr(t, function(_, A, C) {
            v[++s] = i(_, A, C);
          }), v;
        }
        function lc(t) {
          var i = ou(t);
          return i.length == 1 && i[0][2] ? Hc(i[0][0], i[0][1]) : function(s) {
            return s === t || Bs(s, t, i);
          };
        }
        function fc(t, i) {
          return su(t) && Bc(i) ? Hc(hr(t), i) : function(s) {
            var v = gu(s, t);
            return v === n && v === i ? yu(s, t) : xi(i, v, m | c);
          };
        }
        function Zo(t, i, s, v, _) {
          t !== i && ks(i, function(A, C) {
            if (_ || (_ = new nr()), He(A))
              P0(t, i, C, s, Zo, v, _);
            else {
              var I = v ? v(lu(t, C), A, C + "", t, i, _) : n;
              I === n && (I = A), Ds(t, C, I);
            }
          }, At);
        }
        function P0(t, i, s, v, _, A, C) {
          var I = lu(t, s), N = lu(i, s), Z = C.get(N);
          if (Z) {
            Ds(t, s, Z);
            return;
          }
          var V = A ? A(I, N, s + "", t, i, C) : n, J = V === n;
          if (J) {
            var ne = we(N), se = !ne && Jr(N), pe = !ne && !se && Yn(N);
            V = N, ne || se || pe ? we(I) ? V = I : Ke(I) ? V = xt(I) : se ? (J = false, V = _c(N, true)) : pe ? (J = false, V = Ec(N, true)) : V = [] : Ci(N) || Sn(N) ? (V = I, Sn(I) ? V = wd(I) : (!He(I) || Mr(I)) && (V = zc(N))) : J = false;
          }
          J && (C.set(N, V), _(V, N, v, A, C), C.delete(N)), Ds(t, s, V);
        }
        function cc(t, i) {
          var s = t.length;
          if (s)
            return i += i < 0 ? s : 0, Rr(i, s) ? t[i] : n;
        }
        function dc(t, i, s) {
          i.length ? i = We(i, function(A) {
            return we(A) ? function(C) {
              return yn(C, A.length === 1 ? A[0] : A);
            } : A;
          }) : i = [Tt];
          var v = -1;
          i = We(i, Lt(ce()));
          var _ = uc(t, function(A, C, I) {
            var N = We(i, function(Z) {
              return Z(A);
            });
            return { criteria: N, index: ++v, value: A };
          });
          return ty(_, function(A, C) {
            return z0(A, C, s);
          });
        }
        function C0(t, i) {
          return pc(t, i, function(s, v) {
            return yu(t, v);
          });
        }
        function pc(t, i, s) {
          for (var v = -1, _ = i.length, A = {}; ++v < _; ) {
            var C = i[v], I = yn(t, C);
            s(I, C) && Oi(A, Yr(C, t), I);
          }
          return A;
        }
        function R0(t) {
          return function(i) {
            return yn(i, t);
          };
        }
        function qs(t, i, s, v) {
          var _ = v ? ey : Wn, A = -1, C = i.length, I = t;
          for (t === i && (i = xt(i)), s && (I = We(t, Lt(s))); ++A < C; )
            for (var N = 0, Z = i[A], V = s ? s(Z) : Z; (N = _(I, V, N, v)) > -1; )
              I !== t && Do.call(I, N, 1), Do.call(t, N, 1);
          return t;
        }
        function hc(t, i) {
          for (var s = t ? i.length : 0, v = s - 1; s--; ) {
            var _ = i[s];
            if (s == v || _ !== A) {
              var A = _;
              Rr(_) ? Do.call(t, _, 1) : Vs(t, _);
            }
          }
          return t;
        }
        function Zs(t, i) {
          return t + Wo(Gf() * (i - t + 1));
        }
        function M0(t, i, s, v) {
          for (var _ = -1, A = et(ko((i - t) / (s || 1)), 0), C = z(A); A--; )
            C[v ? A : ++_] = t, t += s;
          return C;
        }
        function Ks(t, i) {
          var s = "";
          if (!t || i < 1 || i > ee)
            return s;
          do
            i % 2 && (s += t), i = Wo(i / 2), i && (t += t);
          while (i);
          return s;
        }
        function Ee(t, i) {
          return fu(jc(t, i, Tt), t + "");
        }
        function I0(t) {
          return Xf(Xn(t));
        }
        function L0(t, i) {
          var s = Xn(t);
          return ra(s, gn(i, 0, s.length));
        }
        function Oi(t, i, s, v) {
          if (!He(t))
            return t;
          i = Yr(i, t);
          for (var _ = -1, A = i.length, C = A - 1, I = t; I != null && ++_ < A; ) {
            var N = hr(i[_]), Z = s;
            if (N === "__proto__" || N === "constructor" || N === "prototype")
              return t;
            if (_ != C) {
              var V = I[N];
              Z = v ? v(V, N, I) : n, Z === n && (Z = He(V) ? V : Rr(i[_ + 1]) ? [] : {});
            }
            Si(I, N, Z), I = I[N];
          }
          return t;
        }
        var vc = Uo ? function(t, i) {
          return Uo.set(t, i), t;
        } : Tt, F0 = No ? function(t, i) {
          return No(t, "toString", {
            configurable: true,
            enumerable: false,
            value: bu(i),
            writable: true
          });
        } : Tt;
        function $0(t) {
          return ra(Xn(t));
        }
        function Zt(t, i, s) {
          var v = -1, _ = t.length;
          i < 0 && (i = -i > _ ? 0 : _ + i), s = s > _ ? _ : s, s < 0 && (s += _), _ = i > s ? 0 : s - i >>> 0, i >>>= 0;
          for (var A = z(_); ++v < _; )
            A[v] = t[v + i];
          return A;
        }
        function D0(t, i) {
          var s;
          return Gr(t, function(v, _, A) {
            return s = i(v, _, A), !s;
          }), !!s;
        }
        function Ko(t, i, s) {
          var v = 0, _ = t == null ? v : t.length;
          if (typeof i == "number" && i === i && _ <= le) {
            for (; v < _; ) {
              var A = v + _ >>> 1, C = t[A];
              C !== null && !$t(C) && (s ? C <= i : C < i) ? v = A + 1 : _ = A;
            }
            return _;
          }
          return Gs(t, i, Tt, s);
        }
        function Gs(t, i, s, v) {
          var _ = 0, A = t == null ? 0 : t.length;
          if (A === 0)
            return 0;
          i = s(i);
          for (var C = i !== i, I = i === null, N = $t(i), Z = i === n; _ < A; ) {
            var V = Wo((_ + A) / 2), J = s(t[V]), ne = J !== n, se = J === null, pe = J === J, Se = $t(J);
            if (C)
              var he = v || pe;
            else Z ? he = pe && (v || ne) : I ? he = pe && ne && (v || !se) : N ? he = pe && ne && !se && (v || !Se) : se || Se ? he = false : he = v ? J <= i : J < i;
            he ? _ = V + 1 : A = V;
          }
          return mt(A, oe);
        }
        function mc(t, i) {
          for (var s = -1, v = t.length, _ = 0, A = []; ++s < v; ) {
            var C = t[s], I = i ? i(C) : C;
            if (!s || !ir(I, N)) {
              var N = I;
              A[_++] = C === 0 ? 0 : C;
            }
          }
          return A;
        }
        function gc(t) {
          return typeof t == "number" ? t : $t(t) ? j : +t;
        }
        function Ft(t) {
          if (typeof t == "string")
            return t;
          if (we(t))
            return We(t, Ft) + "";
          if ($t(t))
            return Vf ? Vf.call(t) : "";
          var i = t + "";
          return i == "0" && 1 / t == -G ? "-0" : i;
        }
        function Vr(t, i, s) {
          var v = -1, _ = Ao, A = t.length, C = true, I = [], N = I;
          if (s)
            C = false, _ = Es;
          else if (A >= a) {
            var Z = i ? null : K0(t);
            if (Z)
              return Po(Z);
            C = false, _ = vi, N = new mn();
          } else
            N = i ? [] : I;
          e:
            for (; ++v < A; ) {
              var V = t[v], J = i ? i(V) : V;
              if (V = s || V !== 0 ? V : 0, C && J === J) {
                for (var ne = N.length; ne--; )
                  if (N[ne] === J)
                    continue e;
                i && N.push(J), I.push(V);
              } else _(N, J, s) || (N !== I && N.push(J), I.push(V));
            }
          return I;
        }
        function Vs(t, i) {
          return i = Yr(i, t), t = qc(t, i), t == null || delete t[hr(Kt(i))];
        }
        function yc(t, i, s, v) {
          return Oi(t, i, s(yn(t, i)), v);
        }
        function Go(t, i, s, v) {
          for (var _ = t.length, A = v ? _ : -1; (v ? A-- : ++A < _) && i(t[A], A, t); )
            ;
          return s ? Zt(t, v ? 0 : A, v ? A + 1 : _) : Zt(t, v ? A + 1 : 0, v ? _ : A);
        }
        function wc(t, i) {
          var s = t;
          return s instanceof Ae && (s = s.value()), xs(i, function(v, _) {
            return _.func.apply(_.thisArg, qr([v], _.args));
          }, s);
        }
        function Ys(t, i, s) {
          var v = t.length;
          if (v < 2)
            return v ? Vr(t[0]) : [];
          for (var _ = -1, A = z(v); ++_ < v; )
            for (var C = t[_], I = -1; ++I < v; )
              I != _ && (A[_] = _i(A[_] || C, t[I], i, s));
          return Vr(ct(A, 1), i, s);
        }
        function bc(t, i, s) {
          for (var v = -1, _ = t.length, A = i.length, C = {}; ++v < _; ) {
            var I = v < A ? i[v] : n;
            s(C, t[v], I);
          }
          return C;
        }
        function Xs(t) {
          return Ke(t) ? t : [];
        }
        function Js(t) {
          return typeof t == "function" ? t : Tt;
        }
        function Yr(t, i) {
          return we(t) ? t : su(t, i) ? [t] : Vc(Re(t));
        }
        var N0 = Ee;
        function Xr(t, i, s) {
          var v = t.length;
          return s = s === n ? v : s, !i && s >= v ? t : Zt(t, i, s);
        }
        var Sc = xy || function(t) {
          return ft.clearTimeout(t);
        };
        function _c(t, i) {
          if (i)
            return t.slice();
          var s = t.length, v = Hf ? Hf(s) : new t.constructor(s);
          return t.copy(v), v;
        }
        function Qs(t) {
          var i = new t.constructor(t.byteLength);
          return new Fo(i).set(new Fo(t)), i;
        }
        function k0(t, i) {
          var s = i ? Qs(t.buffer) : t.buffer;
          return new t.constructor(s, t.byteOffset, t.byteLength);
        }
        function W0(t) {
          var i = new t.constructor(t.source, of.exec(t));
          return i.lastIndex = t.lastIndex, i;
        }
        function U0(t) {
          return bi ? Fe(bi.call(t)) : {};
        }
        function Ec(t, i) {
          var s = i ? Qs(t.buffer) : t.buffer;
          return new t.constructor(s, t.byteOffset, t.length);
        }
        function xc(t, i) {
          if (t !== i) {
            var s = t !== n, v = t === null, _ = t === t, A = $t(t), C = i !== n, I = i === null, N = i === i, Z = $t(i);
            if (!I && !Z && !A && t > i || A && C && N && !I && !Z || v && C && N || !s && N || !_)
              return 1;
            if (!v && !A && !Z && t < i || Z && s && _ && !v && !A || I && s && _ || !C && _ || !N)
              return -1;
          }
          return 0;
        }
        function z0(t, i, s) {
          for (var v = -1, _ = t.criteria, A = i.criteria, C = _.length, I = s.length; ++v < C; ) {
            var N = xc(_[v], A[v]);
            if (N) {
              if (v >= I)
                return N;
              var Z = s[v];
              return N * (Z == "desc" ? -1 : 1);
            }
          }
          return t.index - i.index;
        }
        function Oc(t, i, s, v) {
          for (var _ = -1, A = t.length, C = s.length, I = -1, N = i.length, Z = et(A - C, 0), V = z(N + Z), J = !v; ++I < N; )
            V[I] = i[I];
          for (; ++_ < C; )
            (J || _ < A) && (V[s[_]] = t[_]);
          for (; Z--; )
            V[I++] = t[_++];
          return V;
        }
        function Ac(t, i, s, v) {
          for (var _ = -1, A = t.length, C = -1, I = s.length, N = -1, Z = i.length, V = et(A - I, 0), J = z(V + Z), ne = !v; ++_ < V; )
            J[_] = t[_];
          for (var se = _; ++N < Z; )
            J[se + N] = i[N];
          for (; ++C < I; )
            (ne || _ < A) && (J[se + s[C]] = t[_++]);
          return J;
        }
        function xt(t, i) {
          var s = -1, v = t.length;
          for (i || (i = z(v)); ++s < v; )
            i[s] = t[s];
          return i;
        }
        function pr(t, i, s, v) {
          var _ = !s;
          s || (s = {});
          for (var A = -1, C = i.length; ++A < C; ) {
            var I = i[A], N = v ? v(s[I], t[I], I, s, t) : n;
            N === n && (N = t[I]), _ ? Tr(s, I, N) : Si(s, I, N);
          }
          return s;
        }
        function B0(t, i) {
          return pr(t, au(t), i);
        }
        function H0(t, i) {
          return pr(t, Wc(t), i);
        }
        function Vo(t, i) {
          return function(s, v) {
            var _ = we(s) ? Gg : c0, A = i ? i() : {};
            return _(s, t, ce(v, 2), A);
          };
        }
        function Kn(t) {
          return Ee(function(i, s) {
            var v = -1, _ = s.length, A = _ > 1 ? s[_ - 1] : n, C = _ > 2 ? s[2] : n;
            for (A = t.length > 3 && typeof A == "function" ? (_--, A) : n, C && St(s[0], s[1], C) && (A = _ < 3 ? n : A, _ = 1), i = Fe(i); ++v < _; ) {
              var I = s[v];
              I && t(i, I, v, A);
            }
            return i;
          });
        }
        function Tc(t, i) {
          return function(s, v) {
            if (s == null)
              return s;
            if (!Ot(s))
              return t(s, v);
            for (var _ = s.length, A = i ? _ : -1, C = Fe(s); (i ? A-- : ++A < _) && v(C[A], A, C) !== false; )
              ;
            return s;
          };
        }
        function Pc(t) {
          return function(i, s, v) {
            for (var _ = -1, A = Fe(i), C = v(i), I = C.length; I--; ) {
              var N = C[t ? I : ++_];
              if (s(A[N], N, A) === false)
                break;
            }
            return i;
          };
        }
        function j0(t, i, s) {
          var v = i & g, _ = Ai(t);
          function A() {
            var C = this && this !== ft && this instanceof A ? _ : t;
            return C.apply(v ? s : this, arguments);
          }
          return A;
        }
        function Cc(t) {
          return function(i) {
            i = Re(i);
            var s = Un(i) ? rr(i) : n, v = s ? s[0] : i.charAt(0), _ = s ? Xr(s, 1).join("") : i.slice(1);
            return v[t]() + _;
          };
        }
        function Gn(t) {
          return function(i) {
            return xs(Td(Ad(i).replace(Fg, "")), t, "");
          };
        }
        function Ai(t) {
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new t();
              case 1:
                return new t(i[0]);
              case 2:
                return new t(i[0], i[1]);
              case 3:
                return new t(i[0], i[1], i[2]);
              case 4:
                return new t(i[0], i[1], i[2], i[3]);
              case 5:
                return new t(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var s = Zn(t.prototype), v = t.apply(s, i);
            return He(v) ? v : s;
          };
        }
        function q0(t, i, s) {
          var v = Ai(t);
          function _() {
            for (var A = arguments.length, C = z(A), I = A, N = Vn(_); I--; )
              C[I] = arguments[I];
            var Z = A < 3 && C[0] !== N && C[A - 1] !== N ? [] : Zr(C, N);
            if (A -= Z.length, A < s)
              return Fc(
                t,
                i,
                Yo,
                _.placeholder,
                n,
                C,
                Z,
                n,
                n,
                s - A
              );
            var V = this && this !== ft && this instanceof _ ? v : t;
            return It(V, this, C);
          }
          return _;
        }
        function Rc(t) {
          return function(i, s, v) {
            var _ = Fe(i);
            if (!Ot(i)) {
              var A = ce(s, 3);
              i = at(i), s = function(I) {
                return A(_[I], I, _);
              };
            }
            var C = t(i, s, v);
            return C > -1 ? _[A ? i[C] : C] : n;
          };
        }
        function Mc(t) {
          return Cr(function(i) {
            var s = i.length, v = s, _ = jt.prototype.thru;
            for (t && i.reverse(); v--; ) {
              var A = i[v];
              if (typeof A != "function")
                throw new Ht(f);
              if (_ && !C && ea(A) == "wrapper")
                var C = new jt([], true);
            }
            for (v = C ? v : s; ++v < s; ) {
              A = i[v];
              var I = ea(A), N = I == "wrapper" ? iu(A) : n;
              N && uu(N[0]) && N[1] == (B | x | T | F) && !N[4].length && N[9] == 1 ? C = C[ea(N[0])].apply(C, N[3]) : C = A.length == 1 && uu(A) ? C[I]() : C.thru(A);
            }
            return function() {
              var Z = arguments, V = Z[0];
              if (C && Z.length == 1 && we(V))
                return C.plant(V).value();
              for (var J = 0, ne = s ? i[J].apply(this, Z) : V; ++J < s; )
                ne = i[J].call(this, ne);
              return ne;
            };
          });
        }
        function Yo(t, i, s, v, _, A, C, I, N, Z) {
          var V = i & B, J = i & g, ne = i & b, se = i & (x | P), pe = i & k, Se = ne ? n : Ai(t);
          function he() {
            for (var xe = arguments.length, Te = z(xe), Dt = xe; Dt--; )
              Te[Dt] = arguments[Dt];
            if (se)
              var _t = Vn(he), Nt = ny(Te, _t);
            if (v && (Te = Oc(Te, v, _, se)), A && (Te = Ac(Te, A, C, se)), xe -= Nt, se && xe < Z) {
              var Ge = Zr(Te, _t);
              return Fc(
                t,
                i,
                Yo,
                he.placeholder,
                s,
                Te,
                Ge,
                I,
                N,
                Z - xe
              );
            }
            var or = J ? s : this, Lr = ne ? or[t] : t;
            return xe = Te.length, I ? Te = c1(Te, I) : pe && xe > 1 && Te.reverse(), V && N < xe && (Te.length = N), this && this !== ft && this instanceof he && (Lr = Se || Ai(Lr)), Lr.apply(or, Te);
          }
          return he;
        }
        function Ic(t, i) {
          return function(s, v) {
            return w0(s, t, i(v), {});
          };
        }
        function Xo(t, i) {
          return function(s, v) {
            var _;
            if (s === n && v === n)
              return i;
            if (s !== n && (_ = s), v !== n) {
              if (_ === n)
                return v;
              typeof s == "string" || typeof v == "string" ? (s = Ft(s), v = Ft(v)) : (s = gc(s), v = gc(v)), _ = t(s, v);
            }
            return _;
          };
        }
        function eu(t) {
          return Cr(function(i) {
            return i = We(i, Lt(ce())), Ee(function(s) {
              var v = this;
              return t(i, function(_) {
                return It(_, v, s);
              });
            });
          });
        }
        function Jo(t, i) {
          i = i === n ? " " : Ft(i);
          var s = i.length;
          if (s < 2)
            return s ? Ks(i, t) : i;
          var v = Ks(i, ko(t / zn(i)));
          return Un(i) ? Xr(rr(v), 0, t).join("") : v.slice(0, t);
        }
        function Z0(t, i, s, v) {
          var _ = i & g, A = Ai(t);
          function C() {
            for (var I = -1, N = arguments.length, Z = -1, V = v.length, J = z(V + N), ne = this && this !== ft && this instanceof C ? A : t; ++Z < V; )
              J[Z] = v[Z];
            for (; N--; )
              J[Z++] = arguments[++I];
            return It(ne, _ ? s : this, J);
          }
          return C;
        }
        function Lc(t) {
          return function(i, s, v) {
            return v && typeof v != "number" && St(i, s, v) && (s = v = n), i = Ir(i), s === n ? (s = i, i = 0) : s = Ir(s), v = v === n ? i < s ? 1 : -1 : Ir(v), M0(i, s, v, t);
          };
        }
        function Qo(t) {
          return function(i, s) {
            return typeof i == "string" && typeof s == "string" || (i = Gt(i), s = Gt(s)), t(i, s);
          };
        }
        function Fc(t, i, s, v, _, A, C, I, N, Z) {
          var V = i & x, J = V ? C : n, ne = V ? n : C, se = V ? A : n, pe = V ? n : A;
          i |= V ? T : M, i &= ~(V ? M : T), i & E || (i &= -4);
          var Se = [
            t,
            i,
            _,
            se,
            J,
            pe,
            ne,
            I,
            N,
            Z
          ], he = s.apply(n, Se);
          return uu(t) && Zc(he, Se), he.placeholder = v, Kc(he, t, i);
        }
        function tu(t) {
          var i = Qe[t];
          return function(s, v) {
            if (s = Gt(s), v = v == null ? 0 : mt(be(v), 292), v && Kf(s)) {
              var _ = (Re(s) + "e").split("e"), A = i(_[0] + "e" + (+_[1] + v));
              return _ = (Re(A) + "e").split("e"), +(_[0] + "e" + (+_[1] - v));
            }
            return i(s);
          };
        }
        var K0 = jn && 1 / Po(new jn([, -0]))[1] == G ? function(t) {
          return new jn(t);
        } : Eu;
        function $c(t) {
          return function(i) {
            var s = gt(i);
            return s == ot ? Ms(i) : s == vt ? fy(i) : ry(i, t(i));
          };
        }
        function Pr(t, i, s, v, _, A, C, I) {
          var N = i & b;
          if (!N && typeof t != "function")
            throw new Ht(f);
          var Z = v ? v.length : 0;
          if (Z || (i &= -97, v = _ = n), C = C === n ? C : et(be(C), 0), I = I === n ? I : be(I), Z -= _ ? _.length : 0, i & M) {
            var V = v, J = _;
            v = _ = n;
          }
          var ne = N ? n : iu(t), se = [
            t,
            i,
            s,
            v,
            _,
            V,
            J,
            A,
            C,
            I
          ];
          if (ne && u1(se, ne), t = se[0], i = se[1], s = se[2], v = se[3], _ = se[4], I = se[9] = se[9] === n ? N ? 0 : t.length : et(se[9] - Z, 0), !I && i & (x | P) && (i &= -25), !i || i == g)
            var pe = j0(t, i, s);
          else i == x || i == P ? pe = q0(t, i, I) : (i == T || i == (g | T)) && !_.length ? pe = Z0(t, i, s, v) : pe = Yo.apply(n, se);
          var Se = ne ? vc : Zc;
          return Kc(Se(pe, se), t, i);
        }
        function Dc(t, i, s, v) {
          return t === n || ir(t, Hn[s]) && !Le.call(v, s) ? i : t;
        }
        function Nc(t, i, s, v, _, A) {
          return He(t) && He(i) && (A.set(i, t), Zo(t, i, n, Nc, A), A.delete(i)), t;
        }
        function G0(t) {
          return Ci(t) ? n : t;
        }
        function kc(t, i, s, v, _, A) {
          var C = s & m, I = t.length, N = i.length;
          if (I != N && !(C && N > I))
            return false;
          var Z = A.get(t), V = A.get(i);
          if (Z && V)
            return Z == i && V == t;
          var J = -1, ne = true, se = s & c ? new mn() : n;
          for (A.set(t, i), A.set(i, t); ++J < I; ) {
            var pe = t[J], Se = i[J];
            if (v)
              var he = C ? v(Se, pe, J, i, t, A) : v(pe, Se, J, t, i, A);
            if (he !== n) {
              if (he)
                continue;
              ne = false;
              break;
            }
            if (se) {
              if (!Os(i, function(xe, Te) {
                if (!vi(se, Te) && (pe === xe || _(pe, xe, s, v, A)))
                  return se.push(Te);
              })) {
                ne = false;
                break;
              }
            } else if (!(pe === Se || _(pe, Se, s, v, A))) {
              ne = false;
              break;
            }
          }
          return A.delete(t), A.delete(i), ne;
        }
        function V0(t, i, s, v, _, A, C) {
          switch (s) {
            case xr:
              if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
                return false;
              t = t.buffer, i = i.buffer;
            case Hr:
              return !(t.byteLength != i.byteLength || !A(new Fo(t), new Fo(i)));
            case me:
            case _e:
            case cr:
              return ir(+t, +i);
            case Be:
              return t.name == i.name && t.message == i.message;
            case Mt:
            case zr:
              return t == i + "";
            case ot:
              var I = Ms;
            case vt:
              var N = v & m;
              if (I || (I = Po), t.size != i.size && !N)
                return false;
              var Z = C.get(t);
              if (Z)
                return Z == i;
              v |= c, C.set(t, i);
              var V = kc(I(t), I(i), v, _, A, C);
              return C.delete(t), V;
            case dn:
              if (bi)
                return bi.call(t) == bi.call(i);
          }
          return false;
        }
        function Y0(t, i, s, v, _, A) {
          var C = s & m, I = ru(t), N = I.length, Z = ru(i), V = Z.length;
          if (N != V && !C)
            return false;
          for (var J = N; J--; ) {
            var ne = I[J];
            if (!(C ? ne in i : Le.call(i, ne)))
              return false;
          }
          var se = A.get(t), pe = A.get(i);
          if (se && pe)
            return se == i && pe == t;
          var Se = true;
          A.set(t, i), A.set(i, t);
          for (var he = C; ++J < N; ) {
            ne = I[J];
            var xe = t[ne], Te = i[ne];
            if (v)
              var Dt = C ? v(Te, xe, ne, i, t, A) : v(xe, Te, ne, t, i, A);
            if (!(Dt === n ? xe === Te || _(xe, Te, s, v, A) : Dt)) {
              Se = false;
              break;
            }
            he || (he = ne == "constructor");
          }
          if (Se && !he) {
            var _t = t.constructor, Nt = i.constructor;
            _t != Nt && "constructor" in t && "constructor" in i && !(typeof _t == "function" && _t instanceof _t && typeof Nt == "function" && Nt instanceof Nt) && (Se = false);
          }
          return A.delete(t), A.delete(i), Se;
        }
        function Cr(t) {
          return fu(jc(t, n, Qc), t + "");
        }
        function ru(t) {
          return ic(t, at, au);
        }
        function nu(t) {
          return ic(t, At, Wc);
        }
        var iu = Uo ? function(t) {
          return Uo.get(t);
        } : Eu;
        function ea(t) {
          for (var i = t.name + "", s = qn[i], v = Le.call(qn, i) ? s.length : 0; v--; ) {
            var _ = s[v], A = _.func;
            if (A == null || A == t)
              return _.name;
          }
          return i;
        }
        function Vn(t) {
          var i = Le.call(O, "placeholder") ? O : t;
          return i.placeholder;
        }
        function ce() {
          var t = O.iteratee || Su;
          return t = t === Su ? sc : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function ta(t, i) {
          var s = t.__data__;
          return i1(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
        }
        function ou(t) {
          for (var i = at(t), s = i.length; s--; ) {
            var v = i[s], _ = t[v];
            i[s] = [v, _, Bc(_)];
          }
          return i;
        }
        function wn(t, i) {
          var s = sy(t, i);
          return ac(s) ? s : n;
        }
        function X0(t) {
          var i = Le.call(t, hn), s = t[hn];
          try {
            t[hn] = n;
            var v = true;
          } catch {
          }
          var _ = Io.call(t);
          return v && (i ? t[hn] = s : delete t[hn]), _;
        }
        var au = Ls ? function(t) {
          return t == null ? [] : (t = Fe(t), jr(Ls(t), function(i) {
            return qf.call(t, i);
          }));
        } : xu, Wc = Ls ? function(t) {
          for (var i = []; t; )
            qr(i, au(t)), t = $o(t);
          return i;
        } : xu, gt = bt;
        (Fs && gt(new Fs(new ArrayBuffer(1))) != xr || gi && gt(new gi()) != ot || $s && gt($s.resolve()) != So || jn && gt(new jn()) != vt || yi && gt(new yi()) != Br) && (gt = function(t) {
          var i = bt(t), s = i == Ut ? t.constructor : n, v = s ? bn(s) : "";
          if (v)
            switch (v) {
              case Ly:
                return xr;
              case Fy:
                return ot;
              case $y:
                return So;
              case Dy:
                return vt;
              case Ny:
                return Br;
            }
          return i;
        });
        function J0(t, i, s) {
          for (var v = -1, _ = s.length; ++v < _; ) {
            var A = s[v], C = A.size;
            switch (A.type) {
              case "drop":
                t += C;
                break;
              case "dropRight":
                i -= C;
                break;
              case "take":
                i = mt(i, t + C);
                break;
              case "takeRight":
                t = et(t, i - C);
                break;
            }
          }
          return { start: t, end: i };
        }
        function Q0(t) {
          var i = t.match(og);
          return i ? i[1].split(ag) : [];
        }
        function Uc(t, i, s) {
          i = Yr(i, t);
          for (var v = -1, _ = i.length, A = false; ++v < _; ) {
            var C = hr(i[v]);
            if (!(A = t != null && s(t, C)))
              break;
            t = t[C];
          }
          return A || ++v != _ ? A : (_ = t == null ? 0 : t.length, !!_ && ua(_) && Rr(C, _) && (we(t) || Sn(t)));
        }
        function e1(t) {
          var i = t.length, s = new t.constructor(i);
          return i && typeof t[0] == "string" && Le.call(t, "index") && (s.index = t.index, s.input = t.input), s;
        }
        function zc(t) {
          return typeof t.constructor == "function" && !Ti(t) ? Zn($o(t)) : {};
        }
        function t1(t, i, s) {
          var v = t.constructor;
          switch (i) {
            case Hr:
              return Qs(t);
            case me:
            case _e:
              return new v(+t);
            case xr:
              return k0(t, s);
            case os:
            case as:
            case ss:
            case us:
            case ls:
            case fs:
            case cs:
            case ds:
            case ps:
              return Ec(t, s);
            case ot:
              return new v();
            case cr:
            case zr:
              return new v(t);
            case Mt:
              return W0(t);
            case vt:
              return new v();
            case dn:
              return U0(t);
          }
        }
        function r1(t, i) {
          var s = i.length;
          if (!s)
            return t;
          var v = s - 1;
          return i[v] = (s > 1 ? "& " : "") + i[v], i = i.join(s > 2 ? ", " : " "), t.replace(ig, `{
/* [wrapped with ` + i + `] */
`);
        }
        function n1(t) {
          return we(t) || Sn(t) || !!(Zf && t && t[Zf]);
        }
        function Rr(t, i) {
          var s = typeof t;
          return i = i ?? ee, !!i && (s == "number" || s != "symbol" && vg.test(t)) && t > -1 && t % 1 == 0 && t < i;
        }
        function St(t, i, s) {
          if (!He(s))
            return false;
          var v = typeof i;
          return (v == "number" ? Ot(s) && Rr(i, s.length) : v == "string" && i in s) ? ir(s[i], t) : false;
        }
        function su(t, i) {
          if (we(t))
            return false;
          var s = typeof t;
          return s == "number" || s == "symbol" || s == "boolean" || t == null || $t(t) ? true : eg.test(t) || !Qm.test(t) || i != null && t in Fe(i);
        }
        function i1(t) {
          var i = typeof t;
          return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
        }
        function uu(t) {
          var i = ea(t), s = O[i];
          if (typeof s != "function" || !(i in Ae.prototype))
            return false;
          if (t === s)
            return true;
          var v = iu(s);
          return !!v && t === v[0];
        }
        function o1(t) {
          return !!Bf && Bf in t;
        }
        var a1 = Ro ? Mr : Ou;
        function Ti(t) {
          var i = t && t.constructor, s = typeof i == "function" && i.prototype || Hn;
          return t === s;
        }
        function Bc(t) {
          return t === t && !He(t);
        }
        function Hc(t, i) {
          return function(s) {
            return s == null ? false : s[t] === i && (i !== n || t in Fe(s));
          };
        }
        function s1(t) {
          var i = aa(t, function(v) {
            return s.size === S && s.clear(), v;
          }), s = i.cache;
          return i;
        }
        function u1(t, i) {
          var s = t[1], v = i[1], _ = s | v, A = _ < (g | b | B), C = v == B && s == x || v == B && s == F && t[7].length <= i[8] || v == (B | F) && i[7].length <= i[8] && s == x;
          if (!(A || C))
            return t;
          v & g && (t[2] = i[2], _ |= s & g ? 0 : E);
          var I = i[3];
          if (I) {
            var N = t[3];
            t[3] = N ? Oc(N, I, i[4]) : I, t[4] = N ? Zr(t[3], y) : i[4];
          }
          return I = i[5], I && (N = t[5], t[5] = N ? Ac(N, I, i[6]) : I, t[6] = N ? Zr(t[5], y) : i[6]), I = i[7], I && (t[7] = I), v & B && (t[8] = t[8] == null ? i[8] : mt(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = _, t;
        }
        function l1(t) {
          var i = [];
          if (t != null)
            for (var s in Fe(t))
              i.push(s);
          return i;
        }
        function f1(t) {
          return Io.call(t);
        }
        function jc(t, i, s) {
          return i = et(i === n ? t.length - 1 : i, 0), function() {
            for (var v = arguments, _ = -1, A = et(v.length - i, 0), C = z(A); ++_ < A; )
              C[_] = v[i + _];
            _ = -1;
            for (var I = z(i + 1); ++_ < i; )
              I[_] = v[_];
            return I[i] = s(C), It(t, this, I);
          };
        }
        function qc(t, i) {
          return i.length < 2 ? t : yn(t, Zt(i, 0, -1));
        }
        function c1(t, i) {
          for (var s = t.length, v = mt(i.length, s), _ = xt(t); v--; ) {
            var A = i[v];
            t[v] = Rr(A, s) ? _[A] : n;
          }
          return t;
        }
        function lu(t, i) {
          if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
            return t[i];
        }
        var Zc = Gc(vc), Pi = Ay || function(t, i) {
          return ft.setTimeout(t, i);
        }, fu = Gc(F0);
        function Kc(t, i, s) {
          var v = i + "";
          return fu(t, r1(v, d1(Q0(v), s)));
        }
        function Gc(t) {
          var i = 0, s = 0;
          return function() {
            var v = Ry(), _ = U - (v - s);
            if (s = v, _ > 0) {
              if (++i >= L)
                return arguments[0];
            } else
              i = 0;
            return t.apply(n, arguments);
          };
        }
        function ra(t, i) {
          var s = -1, v = t.length, _ = v - 1;
          for (i = i === n ? v : i; ++s < i; ) {
            var A = Zs(s, _), C = t[A];
            t[A] = t[s], t[s] = C;
          }
          return t.length = i, t;
        }
        var Vc = s1(function(t) {
          var i = [];
          return t.charCodeAt(0) === 46 && i.push(""), t.replace(tg, function(s, v, _, A) {
            i.push(_ ? A.replace(lg, "$1") : v || s);
          }), i;
        });
        function hr(t) {
          if (typeof t == "string" || $t(t))
            return t;
          var i = t + "";
          return i == "0" && 1 / t == -G ? "-0" : i;
        }
        function bn(t) {
          if (t != null) {
            try {
              return Mo.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function d1(t, i) {
          return Bt(ie, function(s) {
            var v = "_." + s[0];
            i & s[1] && !Ao(t, v) && t.push(v);
          }), t.sort();
        }
        function Yc(t) {
          if (t instanceof Ae)
            return t.clone();
          var i = new jt(t.__wrapped__, t.__chain__);
          return i.__actions__ = xt(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
        }
        function p1(t, i, s) {
          (s ? St(t, i, s) : i === n) ? i = 1 : i = et(be(i), 0);
          var v = t == null ? 0 : t.length;
          if (!v || i < 1)
            return [];
          for (var _ = 0, A = 0, C = z(ko(v / i)); _ < v; )
            C[A++] = Zt(t, _, _ += i);
          return C;
        }
        function h1(t) {
          for (var i = -1, s = t == null ? 0 : t.length, v = 0, _ = []; ++i < s; ) {
            var A = t[i];
            A && (_[v++] = A);
          }
          return _;
        }
        function v1() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var i = z(t - 1), s = arguments[0], v = t; v--; )
            i[v - 1] = arguments[v];
          return qr(we(s) ? xt(s) : [s], ct(i, 1));
        }
        var m1 = Ee(function(t, i) {
          return Ke(t) ? _i(t, ct(i, 1, Ke, true)) : [];
        }), g1 = Ee(function(t, i) {
          var s = Kt(i);
          return Ke(s) && (s = n), Ke(t) ? _i(t, ct(i, 1, Ke, true), ce(s, 2)) : [];
        }), y1 = Ee(function(t, i) {
          var s = Kt(i);
          return Ke(s) && (s = n), Ke(t) ? _i(t, ct(i, 1, Ke, true), n, s) : [];
        });
        function w1(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (i = s || i === n ? 1 : be(i), Zt(t, i < 0 ? 0 : i, v)) : [];
        }
        function b1(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (i = s || i === n ? 1 : be(i), i = v - i, Zt(t, 0, i < 0 ? 0 : i)) : [];
        }
        function S1(t, i) {
          return t && t.length ? Go(t, ce(i, 3), true, true) : [];
        }
        function _1(t, i) {
          return t && t.length ? Go(t, ce(i, 3), true) : [];
        }
        function E1(t, i, s, v) {
          var _ = t == null ? 0 : t.length;
          return _ ? (s && typeof s != "number" && St(t, i, s) && (s = 0, v = _), v0(t, i, s, v)) : [];
        }
        function Xc(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var _ = s == null ? 0 : be(s);
          return _ < 0 && (_ = et(v + _, 0)), To(t, ce(i, 3), _);
        }
        function Jc(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var _ = v - 1;
          return s !== n && (_ = be(s), _ = s < 0 ? et(v + _, 0) : mt(_, v - 1)), To(t, ce(i, 3), _, true);
        }
        function Qc(t) {
          var i = t == null ? 0 : t.length;
          return i ? ct(t, 1) : [];
        }
        function x1(t) {
          var i = t == null ? 0 : t.length;
          return i ? ct(t, G) : [];
        }
        function O1(t, i) {
          var s = t == null ? 0 : t.length;
          return s ? (i = i === n ? 1 : be(i), ct(t, i)) : [];
        }
        function A1(t) {
          for (var i = -1, s = t == null ? 0 : t.length, v = {}; ++i < s; ) {
            var _ = t[i];
            v[_[0]] = _[1];
          }
          return v;
        }
        function ed(t) {
          return t && t.length ? t[0] : n;
        }
        function T1(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var _ = s == null ? 0 : be(s);
          return _ < 0 && (_ = et(v + _, 0)), Wn(t, i, _);
        }
        function P1(t) {
          var i = t == null ? 0 : t.length;
          return i ? Zt(t, 0, -1) : [];
        }
        var C1 = Ee(function(t) {
          var i = We(t, Xs);
          return i.length && i[0] === t[0] ? zs(i) : [];
        }), R1 = Ee(function(t) {
          var i = Kt(t), s = We(t, Xs);
          return i === Kt(s) ? i = n : s.pop(), s.length && s[0] === t[0] ? zs(s, ce(i, 2)) : [];
        }), M1 = Ee(function(t) {
          var i = Kt(t), s = We(t, Xs);
          return i = typeof i == "function" ? i : n, i && s.pop(), s.length && s[0] === t[0] ? zs(s, n, i) : [];
        });
        function I1(t, i) {
          return t == null ? "" : Py.call(t, i);
        }
        function Kt(t) {
          var i = t == null ? 0 : t.length;
          return i ? t[i - 1] : n;
        }
        function L1(t, i, s) {
          var v = t == null ? 0 : t.length;
          if (!v)
            return -1;
          var _ = v;
          return s !== n && (_ = be(s), _ = _ < 0 ? et(v + _, 0) : mt(_, v - 1)), i === i ? dy(t, i, _) : To(t, Ff, _, true);
        }
        function F1(t, i) {
          return t && t.length ? cc(t, be(i)) : n;
        }
        var $1 = Ee(td);
        function td(t, i) {
          return t && t.length && i && i.length ? qs(t, i) : t;
        }
        function D1(t, i, s) {
          return t && t.length && i && i.length ? qs(t, i, ce(s, 2)) : t;
        }
        function N1(t, i, s) {
          return t && t.length && i && i.length ? qs(t, i, n, s) : t;
        }
        var k1 = Cr(function(t, i) {
          var s = t == null ? 0 : t.length, v = Ns(t, i);
          return hc(t, We(i, function(_) {
            return Rr(_, s) ? +_ : _;
          }).sort(xc)), v;
        });
        function W1(t, i) {
          var s = [];
          if (!(t && t.length))
            return s;
          var v = -1, _ = [], A = t.length;
          for (i = ce(i, 3); ++v < A; ) {
            var C = t[v];
            i(C, v, t) && (s.push(C), _.push(v));
          }
          return hc(t, _), s;
        }
        function cu(t) {
          return t == null ? t : Iy.call(t);
        }
        function U1(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (s && typeof s != "number" && St(t, i, s) ? (i = 0, s = v) : (i = i == null ? 0 : be(i), s = s === n ? v : be(s)), Zt(t, i, s)) : [];
        }
        function z1(t, i) {
          return Ko(t, i);
        }
        function B1(t, i, s) {
          return Gs(t, i, ce(s, 2));
        }
        function H1(t, i) {
          var s = t == null ? 0 : t.length;
          if (s) {
            var v = Ko(t, i);
            if (v < s && ir(t[v], i))
              return v;
          }
          return -1;
        }
        function j1(t, i) {
          return Ko(t, i, true);
        }
        function q1(t, i, s) {
          return Gs(t, i, ce(s, 2), true);
        }
        function Z1(t, i) {
          var s = t == null ? 0 : t.length;
          if (s) {
            var v = Ko(t, i, true) - 1;
            if (ir(t[v], i))
              return v;
          }
          return -1;
        }
        function K1(t) {
          return t && t.length ? mc(t) : [];
        }
        function G1(t, i) {
          return t && t.length ? mc(t, ce(i, 2)) : [];
        }
        function V1(t) {
          var i = t == null ? 0 : t.length;
          return i ? Zt(t, 1, i) : [];
        }
        function Y1(t, i, s) {
          return t && t.length ? (i = s || i === n ? 1 : be(i), Zt(t, 0, i < 0 ? 0 : i)) : [];
        }
        function X1(t, i, s) {
          var v = t == null ? 0 : t.length;
          return v ? (i = s || i === n ? 1 : be(i), i = v - i, Zt(t, i < 0 ? 0 : i, v)) : [];
        }
        function J1(t, i) {
          return t && t.length ? Go(t, ce(i, 3), false, true) : [];
        }
        function Q1(t, i) {
          return t && t.length ? Go(t, ce(i, 3)) : [];
        }
        var ew = Ee(function(t) {
          return Vr(ct(t, 1, Ke, true));
        }), tw = Ee(function(t) {
          var i = Kt(t);
          return Ke(i) && (i = n), Vr(ct(t, 1, Ke, true), ce(i, 2));
        }), rw = Ee(function(t) {
          var i = Kt(t);
          return i = typeof i == "function" ? i : n, Vr(ct(t, 1, Ke, true), n, i);
        });
        function nw(t) {
          return t && t.length ? Vr(t) : [];
        }
        function iw(t, i) {
          return t && t.length ? Vr(t, ce(i, 2)) : [];
        }
        function ow(t, i) {
          return i = typeof i == "function" ? i : n, t && t.length ? Vr(t, n, i) : [];
        }
        function du(t) {
          if (!(t && t.length))
            return [];
          var i = 0;
          return t = jr(t, function(s) {
            if (Ke(s))
              return i = et(s.length, i), true;
          }), Cs(i, function(s) {
            return We(t, As(s));
          });
        }
        function rd(t, i) {
          if (!(t && t.length))
            return [];
          var s = du(t);
          return i == null ? s : We(s, function(v) {
            return It(i, n, v);
          });
        }
        var aw = Ee(function(t, i) {
          return Ke(t) ? _i(t, i) : [];
        }), sw = Ee(function(t) {
          return Ys(jr(t, Ke));
        }), uw = Ee(function(t) {
          var i = Kt(t);
          return Ke(i) && (i = n), Ys(jr(t, Ke), ce(i, 2));
        }), lw = Ee(function(t) {
          var i = Kt(t);
          return i = typeof i == "function" ? i : n, Ys(jr(t, Ke), n, i);
        }), fw = Ee(du);
        function cw(t, i) {
          return bc(t || [], i || [], Si);
        }
        function dw(t, i) {
          return bc(t || [], i || [], Oi);
        }
        var pw = Ee(function(t) {
          var i = t.length, s = i > 1 ? t[i - 1] : n;
          return s = typeof s == "function" ? (t.pop(), s) : n, rd(t, s);
        });
        function nd(t) {
          var i = O(t);
          return i.__chain__ = true, i;
        }
        function hw(t, i) {
          return i(t), t;
        }
        function na(t, i) {
          return i(t);
        }
        var vw = Cr(function(t) {
          var i = t.length, s = i ? t[0] : 0, v = this.__wrapped__, _ = function(A) {
            return Ns(A, t);
          };
          return i > 1 || this.__actions__.length || !(v instanceof Ae) || !Rr(s) ? this.thru(_) : (v = v.slice(s, +s + (i ? 1 : 0)), v.__actions__.push({
            func: na,
            args: [_],
            thisArg: n
          }), new jt(v, this.__chain__).thru(function(A) {
            return i && !A.length && A.push(n), A;
          }));
        });
        function mw() {
          return nd(this);
        }
        function gw() {
          return new jt(this.value(), this.__chain__);
        }
        function yw() {
          this.__values__ === n && (this.__values__ = gd(this.value()));
          var t = this.__index__ >= this.__values__.length, i = t ? n : this.__values__[this.__index__++];
          return { done: t, value: i };
        }
        function ww() {
          return this;
        }
        function bw(t) {
          for (var i, s = this; s instanceof Bo; ) {
            var v = Yc(s);
            v.__index__ = 0, v.__values__ = n, i ? _.__wrapped__ = v : i = v;
            var _ = v;
            s = s.__wrapped__;
          }
          return _.__wrapped__ = t, i;
        }
        function Sw() {
          var t = this.__wrapped__;
          if (t instanceof Ae) {
            var i = t;
            return this.__actions__.length && (i = new Ae(this)), i = i.reverse(), i.__actions__.push({
              func: na,
              args: [cu],
              thisArg: n
            }), new jt(i, this.__chain__);
          }
          return this.thru(cu);
        }
        function _w() {
          return wc(this.__wrapped__, this.__actions__);
        }
        var Ew = Vo(function(t, i, s) {
          Le.call(t, s) ? ++t[s] : Tr(t, s, 1);
        });
        function xw(t, i, s) {
          var v = we(t) ? If : h0;
          return s && St(t, i, s) && (i = n), v(t, ce(i, 3));
        }
        function Ow(t, i) {
          var s = we(t) ? jr : rc;
          return s(t, ce(i, 3));
        }
        var Aw = Rc(Xc), Tw = Rc(Jc);
        function Pw(t, i) {
          return ct(ia(t, i), 1);
        }
        function Cw(t, i) {
          return ct(ia(t, i), G);
        }
        function Rw(t, i, s) {
          return s = s === n ? 1 : be(s), ct(ia(t, i), s);
        }
        function id(t, i) {
          var s = we(t) ? Bt : Gr;
          return s(t, ce(i, 3));
        }
        function od(t, i) {
          var s = we(t) ? Vg : tc;
          return s(t, ce(i, 3));
        }
        var Mw = Vo(function(t, i, s) {
          Le.call(t, s) ? t[s].push(i) : Tr(t, s, [i]);
        });
        function Iw(t, i, s, v) {
          t = Ot(t) ? t : Xn(t), s = s && !v ? be(s) : 0;
          var _ = t.length;
          return s < 0 && (s = et(_ + s, 0)), la(t) ? s <= _ && t.indexOf(i, s) > -1 : !!_ && Wn(t, i, s) > -1;
        }
        var Lw = Ee(function(t, i, s) {
          var v = -1, _ = typeof i == "function", A = Ot(t) ? z(t.length) : [];
          return Gr(t, function(C) {
            A[++v] = _ ? It(i, C, s) : Ei(C, i, s);
          }), A;
        }), Fw = Vo(function(t, i, s) {
          Tr(t, s, i);
        });
        function ia(t, i) {
          var s = we(t) ? We : uc;
          return s(t, ce(i, 3));
        }
        function $w(t, i, s, v) {
          return t == null ? [] : (we(i) || (i = i == null ? [] : [i]), s = v ? n : s, we(s) || (s = s == null ? [] : [s]), dc(t, i, s));
        }
        var Dw = Vo(function(t, i, s) {
          t[s ? 0 : 1].push(i);
        }, function() {
          return [[], []];
        });
        function Nw(t, i, s) {
          var v = we(t) ? xs : Df, _ = arguments.length < 3;
          return v(t, ce(i, 4), s, _, Gr);
        }
        function kw(t, i, s) {
          var v = we(t) ? Yg : Df, _ = arguments.length < 3;
          return v(t, ce(i, 4), s, _, tc);
        }
        function Ww(t, i) {
          var s = we(t) ? jr : rc;
          return s(t, sa(ce(i, 3)));
        }
        function Uw(t) {
          var i = we(t) ? Xf : I0;
          return i(t);
        }
        function zw(t, i, s) {
          (s ? St(t, i, s) : i === n) ? i = 1 : i = be(i);
          var v = we(t) ? l0 : L0;
          return v(t, i);
        }
        function Bw(t) {
          var i = we(t) ? f0 : $0;
          return i(t);
        }
        function Hw(t) {
          if (t == null)
            return 0;
          if (Ot(t))
            return la(t) ? zn(t) : t.length;
          var i = gt(t);
          return i == ot || i == vt ? t.size : Hs(t).length;
        }
        function jw(t, i, s) {
          var v = we(t) ? Os : D0;
          return s && St(t, i, s) && (i = n), v(t, ce(i, 3));
        }
        var qw = Ee(function(t, i) {
          if (t == null)
            return [];
          var s = i.length;
          return s > 1 && St(t, i[0], i[1]) ? i = [] : s > 2 && St(i[0], i[1], i[2]) && (i = [i[0]]), dc(t, ct(i, 1), []);
        }), oa = Oy || function() {
          return ft.Date.now();
        };
        function Zw(t, i) {
          if (typeof i != "function")
            throw new Ht(f);
          return t = be(t), function() {
            if (--t < 1)
              return i.apply(this, arguments);
          };
        }
        function ad(t, i, s) {
          return i = s ? n : i, i = t && i == null ? t.length : i, Pr(t, B, n, n, n, n, i);
        }
        function sd(t, i) {
          var s;
          if (typeof i != "function")
            throw new Ht(f);
          return t = be(t), function() {
            return --t > 0 && (s = i.apply(this, arguments)), t <= 1 && (i = n), s;
          };
        }
        var pu = Ee(function(t, i, s) {
          var v = g;
          if (s.length) {
            var _ = Zr(s, Vn(pu));
            v |= T;
          }
          return Pr(t, v, i, s, _);
        }), ud = Ee(function(t, i, s) {
          var v = g | b;
          if (s.length) {
            var _ = Zr(s, Vn(ud));
            v |= T;
          }
          return Pr(i, v, t, s, _);
        });
        function ld(t, i, s) {
          i = s ? n : i;
          var v = Pr(t, x, n, n, n, n, n, i);
          return v.placeholder = ld.placeholder, v;
        }
        function fd(t, i, s) {
          i = s ? n : i;
          var v = Pr(t, P, n, n, n, n, n, i);
          return v.placeholder = fd.placeholder, v;
        }
        function cd(t, i, s) {
          var v, _, A, C, I, N, Z = 0, V = false, J = false, ne = true;
          if (typeof t != "function")
            throw new Ht(f);
          i = Gt(i) || 0, He(s) && (V = !!s.leading, J = "maxWait" in s, A = J ? et(Gt(s.maxWait) || 0, i) : A, ne = "trailing" in s ? !!s.trailing : ne);
          function se(Ge) {
            var or = v, Lr = _;
            return v = _ = n, Z = Ge, C = t.apply(Lr, or), C;
          }
          function pe(Ge) {
            return Z = Ge, I = Pi(xe, i), V ? se(Ge) : C;
          }
          function Se(Ge) {
            var or = Ge - N, Lr = Ge - Z, Rd = i - or;
            return J ? mt(Rd, A - Lr) : Rd;
          }
          function he(Ge) {
            var or = Ge - N, Lr = Ge - Z;
            return N === n || or >= i || or < 0 || J && Lr >= A;
          }
          function xe() {
            var Ge = oa();
            if (he(Ge))
              return Te(Ge);
            I = Pi(xe, Se(Ge));
          }
          function Te(Ge) {
            return I = n, ne && v ? se(Ge) : (v = _ = n, C);
          }
          function Dt() {
            I !== n && Sc(I), Z = 0, v = N = _ = I = n;
          }
          function _t() {
            return I === n ? C : Te(oa());
          }
          function Nt() {
            var Ge = oa(), or = he(Ge);
            if (v = arguments, _ = this, N = Ge, or) {
              if (I === n)
                return pe(N);
              if (J)
                return Sc(I), I = Pi(xe, i), se(N);
            }
            return I === n && (I = Pi(xe, i)), C;
          }
          return Nt.cancel = Dt, Nt.flush = _t, Nt;
        }
        var Kw = Ee(function(t, i) {
          return ec(t, 1, i);
        }), Gw = Ee(function(t, i, s) {
          return ec(t, Gt(i) || 0, s);
        });
        function Vw(t) {
          return Pr(t, k);
        }
        function aa(t, i) {
          if (typeof t != "function" || i != null && typeof i != "function")
            throw new Ht(f);
          var s = function() {
            var v = arguments, _ = i ? i.apply(this, v) : v[0], A = s.cache;
            if (A.has(_))
              return A.get(_);
            var C = t.apply(this, v);
            return s.cache = A.set(_, C) || A, C;
          };
          return s.cache = new (aa.Cache || Ar)(), s;
        }
        aa.Cache = Ar;
        function sa(t) {
          if (typeof t != "function")
            throw new Ht(f);
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, i[0]);
              case 2:
                return !t.call(this, i[0], i[1]);
              case 3:
                return !t.call(this, i[0], i[1], i[2]);
            }
            return !t.apply(this, i);
          };
        }
        function Yw(t) {
          return sd(2, t);
        }
        var Xw = N0(function(t, i) {
          i = i.length == 1 && we(i[0]) ? We(i[0], Lt(ce())) : We(ct(i, 1), Lt(ce()));
          var s = i.length;
          return Ee(function(v) {
            for (var _ = -1, A = mt(v.length, s); ++_ < A; )
              v[_] = i[_].call(this, v[_]);
            return It(t, this, v);
          });
        }), hu = Ee(function(t, i) {
          var s = Zr(i, Vn(hu));
          return Pr(t, T, n, i, s);
        }), dd = Ee(function(t, i) {
          var s = Zr(i, Vn(dd));
          return Pr(t, M, n, i, s);
        }), Jw = Cr(function(t, i) {
          return Pr(t, F, n, n, n, i);
        });
        function Qw(t, i) {
          if (typeof t != "function")
            throw new Ht(f);
          return i = i === n ? i : be(i), Ee(t, i);
        }
        function eb(t, i) {
          if (typeof t != "function")
            throw new Ht(f);
          return i = i == null ? 0 : et(be(i), 0), Ee(function(s) {
            var v = s[i], _ = Xr(s, 0, i);
            return v && qr(_, v), It(t, this, _);
          });
        }
        function tb(t, i, s) {
          var v = true, _ = true;
          if (typeof t != "function")
            throw new Ht(f);
          return He(s) && (v = "leading" in s ? !!s.leading : v, _ = "trailing" in s ? !!s.trailing : _), cd(t, i, {
            leading: v,
            maxWait: i,
            trailing: _
          });
        }
        function rb(t) {
          return ad(t, 1);
        }
        function nb(t, i) {
          return hu(Js(i), t);
        }
        function ib() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return we(t) ? t : [t];
        }
        function ob(t) {
          return qt(t, p);
        }
        function ab(t, i) {
          return i = typeof i == "function" ? i : n, qt(t, p, i);
        }
        function sb(t) {
          return qt(t, h | p);
        }
        function ub(t, i) {
          return i = typeof i == "function" ? i : n, qt(t, h | p, i);
        }
        function lb(t, i) {
          return i == null || Qf(t, i, at(i));
        }
        function ir(t, i) {
          return t === i || t !== t && i !== i;
        }
        var fb = Qo(Us), cb = Qo(function(t, i) {
          return t >= i;
        }), Sn = oc(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? oc : function(t) {
          return Ze(t) && Le.call(t, "callee") && !qf.call(t, "callee");
        }, we = z.isArray, db = Af ? Lt(Af) : b0;
        function Ot(t) {
          return t != null && ua(t.length) && !Mr(t);
        }
        function Ke(t) {
          return Ze(t) && Ot(t);
        }
        function pb(t) {
          return t === true || t === false || Ze(t) && bt(t) == me;
        }
        var Jr = Ty || Ou, hb = Tf ? Lt(Tf) : S0;
        function vb(t) {
          return Ze(t) && t.nodeType === 1 && !Ci(t);
        }
        function mb(t) {
          if (t == null)
            return true;
          if (Ot(t) && (we(t) || typeof t == "string" || typeof t.splice == "function" || Jr(t) || Yn(t) || Sn(t)))
            return !t.length;
          var i = gt(t);
          if (i == ot || i == vt)
            return !t.size;
          if (Ti(t))
            return !Hs(t).length;
          for (var s in t)
            if (Le.call(t, s))
              return false;
          return true;
        }
        function gb(t, i) {
          return xi(t, i);
        }
        function yb(t, i, s) {
          s = typeof s == "function" ? s : n;
          var v = s ? s(t, i) : n;
          return v === n ? xi(t, i, n, s) : !!v;
        }
        function vu(t) {
          if (!Ze(t))
            return false;
          var i = bt(t);
          return i == Be || i == Oe || typeof t.message == "string" && typeof t.name == "string" && !Ci(t);
        }
        function wb(t) {
          return typeof t == "number" && Kf(t);
        }
        function Mr(t) {
          if (!He(t))
            return false;
          var i = bt(t);
          return i == re || i == ht || i == ge || i == is;
        }
        function pd(t) {
          return typeof t == "number" && t == be(t);
        }
        function ua(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ee;
        }
        function He(t) {
          var i = typeof t;
          return t != null && (i == "object" || i == "function");
        }
        function Ze(t) {
          return t != null && typeof t == "object";
        }
        var hd = Pf ? Lt(Pf) : E0;
        function bb(t, i) {
          return t === i || Bs(t, i, ou(i));
        }
        function Sb(t, i, s) {
          return s = typeof s == "function" ? s : n, Bs(t, i, ou(i), s);
        }
        function _b(t) {
          return vd(t) && t != +t;
        }
        function Eb(t) {
          if (a1(t))
            throw new ye(u);
          return ac(t);
        }
        function xb(t) {
          return t === null;
        }
        function Ob(t) {
          return t == null;
        }
        function vd(t) {
          return typeof t == "number" || Ze(t) && bt(t) == cr;
        }
        function Ci(t) {
          if (!Ze(t) || bt(t) != Ut)
            return false;
          var i = $o(t);
          if (i === null)
            return true;
          var s = Le.call(i, "constructor") && i.constructor;
          return typeof s == "function" && s instanceof s && Mo.call(s) == Sy;
        }
        var mu = Cf ? Lt(Cf) : x0;
        function Ab(t) {
          return pd(t) && t >= -ee && t <= ee;
        }
        var md = Rf ? Lt(Rf) : O0;
        function la(t) {
          return typeof t == "string" || !we(t) && Ze(t) && bt(t) == zr;
        }
        function $t(t) {
          return typeof t == "symbol" || Ze(t) && bt(t) == dn;
        }
        var Yn = Mf ? Lt(Mf) : A0;
        function Tb(t) {
          return t === n;
        }
        function Pb(t) {
          return Ze(t) && gt(t) == Br;
        }
        function Cb(t) {
          return Ze(t) && bt(t) == _o;
        }
        var Rb = Qo(js), Mb = Qo(function(t, i) {
          return t <= i;
        });
        function gd(t) {
          if (!t)
            return [];
          if (Ot(t))
            return la(t) ? rr(t) : xt(t);
          if (mi && t[mi])
            return ly(t[mi]());
          var i = gt(t), s = i == ot ? Ms : i == vt ? Po : Xn;
          return s(t);
        }
        function Ir(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Gt(t), t === G || t === -G) {
            var i = t < 0 ? -1 : 1;
            return i * ue;
          }
          return t === t ? t : 0;
        }
        function be(t) {
          var i = Ir(t), s = i % 1;
          return i === i ? s ? i - s : i : 0;
        }
        function yd(t) {
          return t ? gn(be(t), 0, Q) : 0;
        }
        function Gt(t) {
          if (typeof t == "number")
            return t;
          if ($t(t))
            return j;
          if (He(t)) {
            var i = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = He(i) ? i + "" : i;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = Nf(t);
          var s = dg.test(t);
          return s || hg.test(t) ? Zg(t.slice(2), s ? 2 : 8) : cg.test(t) ? j : +t;
        }
        function wd(t) {
          return pr(t, At(t));
        }
        function Ib(t) {
          return t ? gn(be(t), -ee, ee) : t === 0 ? t : 0;
        }
        function Re(t) {
          return t == null ? "" : Ft(t);
        }
        var Lb = Kn(function(t, i) {
          if (Ti(i) || Ot(i)) {
            pr(i, at(i), t);
            return;
          }
          for (var s in i)
            Le.call(i, s) && Si(t, s, i[s]);
        }), bd = Kn(function(t, i) {
          pr(i, At(i), t);
        }), fa = Kn(function(t, i, s, v) {
          pr(i, At(i), t, v);
        }), Fb = Kn(function(t, i, s, v) {
          pr(i, at(i), t, v);
        }), $b = Cr(Ns);
        function Db(t, i) {
          var s = Zn(t);
          return i == null ? s : Jf(s, i);
        }
        var Nb = Ee(function(t, i) {
          t = Fe(t);
          var s = -1, v = i.length, _ = v > 2 ? i[2] : n;
          for (_ && St(i[0], i[1], _) && (v = 1); ++s < v; )
            for (var A = i[s], C = At(A), I = -1, N = C.length; ++I < N; ) {
              var Z = C[I], V = t[Z];
              (V === n || ir(V, Hn[Z]) && !Le.call(t, Z)) && (t[Z] = A[Z]);
            }
          return t;
        }), kb = Ee(function(t) {
          return t.push(n, Nc), It(Sd, n, t);
        });
        function Wb(t, i) {
          return Lf(t, ce(i, 3), dr);
        }
        function Ub(t, i) {
          return Lf(t, ce(i, 3), Ws);
        }
        function zb(t, i) {
          return t == null ? t : ks(t, ce(i, 3), At);
        }
        function Bb(t, i) {
          return t == null ? t : nc(t, ce(i, 3), At);
        }
        function Hb(t, i) {
          return t && dr(t, ce(i, 3));
        }
        function jb(t, i) {
          return t && Ws(t, ce(i, 3));
        }
        function qb(t) {
          return t == null ? [] : qo(t, at(t));
        }
        function Zb(t) {
          return t == null ? [] : qo(t, At(t));
        }
        function gu(t, i, s) {
          var v = t == null ? n : yn(t, i);
          return v === n ? s : v;
        }
        function Kb(t, i) {
          return t != null && Uc(t, i, m0);
        }
        function yu(t, i) {
          return t != null && Uc(t, i, g0);
        }
        var Gb = Ic(function(t, i, s) {
          i != null && typeof i.toString != "function" && (i = Io.call(i)), t[i] = s;
        }, bu(Tt)), Vb = Ic(function(t, i, s) {
          i != null && typeof i.toString != "function" && (i = Io.call(i)), Le.call(t, i) ? t[i].push(s) : t[i] = [s];
        }, ce), Yb = Ee(Ei);
        function at(t) {
          return Ot(t) ? Yf(t) : Hs(t);
        }
        function At(t) {
          return Ot(t) ? Yf(t, true) : T0(t);
        }
        function Xb(t, i) {
          var s = {};
          return i = ce(i, 3), dr(t, function(v, _, A) {
            Tr(s, i(v, _, A), v);
          }), s;
        }
        function Jb(t, i) {
          var s = {};
          return i = ce(i, 3), dr(t, function(v, _, A) {
            Tr(s, _, i(v, _, A));
          }), s;
        }
        var Qb = Kn(function(t, i, s) {
          Zo(t, i, s);
        }), Sd = Kn(function(t, i, s, v) {
          Zo(t, i, s, v);
        }), eS = Cr(function(t, i) {
          var s = {};
          if (t == null)
            return s;
          var v = false;
          i = We(i, function(A) {
            return A = Yr(A, t), v || (v = A.length > 1), A;
          }), pr(t, nu(t), s), v && (s = qt(s, h | l | p, G0));
          for (var _ = i.length; _--; )
            Vs(s, i[_]);
          return s;
        });
        function tS(t, i) {
          return _d(t, sa(ce(i)));
        }
        var rS = Cr(function(t, i) {
          return t == null ? {} : C0(t, i);
        });
        function _d(t, i) {
          if (t == null)
            return {};
          var s = We(nu(t), function(v) {
            return [v];
          });
          return i = ce(i), pc(t, s, function(v, _) {
            return i(v, _[0]);
          });
        }
        function nS(t, i, s) {
          i = Yr(i, t);
          var v = -1, _ = i.length;
          for (_ || (_ = 1, t = n); ++v < _; ) {
            var A = t == null ? n : t[hr(i[v])];
            A === n && (v = _, A = s), t = Mr(A) ? A.call(t) : A;
          }
          return t;
        }
        function iS(t, i, s) {
          return t == null ? t : Oi(t, i, s);
        }
        function oS(t, i, s, v) {
          return v = typeof v == "function" ? v : n, t == null ? t : Oi(t, i, s, v);
        }
        var Ed = $c(at), xd = $c(At);
        function aS(t, i, s) {
          var v = we(t), _ = v || Jr(t) || Yn(t);
          if (i = ce(i, 4), s == null) {
            var A = t && t.constructor;
            _ ? s = v ? new A() : [] : He(t) ? s = Mr(A) ? Zn($o(t)) : {} : s = {};
          }
          return (_ ? Bt : dr)(t, function(C, I, N) {
            return i(s, C, I, N);
          }), s;
        }
        function sS(t, i) {
          return t == null ? true : Vs(t, i);
        }
        function uS(t, i, s) {
          return t == null ? t : yc(t, i, Js(s));
        }
        function lS(t, i, s, v) {
          return v = typeof v == "function" ? v : n, t == null ? t : yc(t, i, Js(s), v);
        }
        function Xn(t) {
          return t == null ? [] : Rs(t, at(t));
        }
        function fS(t) {
          return t == null ? [] : Rs(t, At(t));
        }
        function cS(t, i, s) {
          return s === n && (s = i, i = n), s !== n && (s = Gt(s), s = s === s ? s : 0), i !== n && (i = Gt(i), i = i === i ? i : 0), gn(Gt(t), i, s);
        }
        function dS(t, i, s) {
          return i = Ir(i), s === n ? (s = i, i = 0) : s = Ir(s), t = Gt(t), y0(t, i, s);
        }
        function pS(t, i, s) {
          if (s && typeof s != "boolean" && St(t, i, s) && (i = s = n), s === n && (typeof i == "boolean" ? (s = i, i = n) : typeof t == "boolean" && (s = t, t = n)), t === n && i === n ? (t = 0, i = 1) : (t = Ir(t), i === n ? (i = t, t = 0) : i = Ir(i)), t > i) {
            var v = t;
            t = i, i = v;
          }
          if (s || t % 1 || i % 1) {
            var _ = Gf();
            return mt(t + _ * (i - t + qg("1e-" + ((_ + "").length - 1))), i);
          }
          return Zs(t, i);
        }
        var hS = Gn(function(t, i, s) {
          return i = i.toLowerCase(), t + (s ? Od(i) : i);
        });
        function Od(t) {
          return wu(Re(t).toLowerCase());
        }
        function Ad(t) {
          return t = Re(t), t && t.replace(mg, iy).replace($g, "");
        }
        function vS(t, i, s) {
          t = Re(t), i = Ft(i);
          var v = t.length;
          s = s === n ? v : gn(be(s), 0, v);
          var _ = s;
          return s -= i.length, s >= 0 && t.slice(s, _) == i;
        }
        function mS(t) {
          return t = Re(t), t && Ym.test(t) ? t.replace(rf, oy) : t;
        }
        function gS(t) {
          return t = Re(t), t && rg.test(t) ? t.replace(hs, "\\$&") : t;
        }
        var yS = Gn(function(t, i, s) {
          return t + (s ? "-" : "") + i.toLowerCase();
        }), wS = Gn(function(t, i, s) {
          return t + (s ? " " : "") + i.toLowerCase();
        }), bS = Cc("toLowerCase");
        function SS(t, i, s) {
          t = Re(t), i = be(i);
          var v = i ? zn(t) : 0;
          if (!i || v >= i)
            return t;
          var _ = (i - v) / 2;
          return Jo(Wo(_), s) + t + Jo(ko(_), s);
        }
        function _S(t, i, s) {
          t = Re(t), i = be(i);
          var v = i ? zn(t) : 0;
          return i && v < i ? t + Jo(i - v, s) : t;
        }
        function ES(t, i, s) {
          t = Re(t), i = be(i);
          var v = i ? zn(t) : 0;
          return i && v < i ? Jo(i - v, s) + t : t;
        }
        function xS(t, i, s) {
          return s || i == null ? i = 0 : i && (i = +i), My(Re(t).replace(vs, ""), i || 0);
        }
        function OS(t, i, s) {
          return (s ? St(t, i, s) : i === n) ? i = 1 : i = be(i), Ks(Re(t), i);
        }
        function AS() {
          var t = arguments, i = Re(t[0]);
          return t.length < 3 ? i : i.replace(t[1], t[2]);
        }
        var TS = Gn(function(t, i, s) {
          return t + (s ? "_" : "") + i.toLowerCase();
        });
        function PS(t, i, s) {
          return s && typeof s != "number" && St(t, i, s) && (i = s = n), s = s === n ? Q : s >>> 0, s ? (t = Re(t), t && (typeof i == "string" || i != null && !mu(i)) && (i = Ft(i), !i && Un(t)) ? Xr(rr(t), 0, s) : t.split(i, s)) : [];
        }
        var CS = Gn(function(t, i, s) {
          return t + (s ? " " : "") + wu(i);
        });
        function RS(t, i, s) {
          return t = Re(t), s = s == null ? 0 : gn(be(s), 0, t.length), i = Ft(i), t.slice(s, s + i.length) == i;
        }
        function MS(t, i, s) {
          var v = O.templateSettings;
          s && St(t, i, s) && (i = n), t = Re(t), i = fa({}, i, v, Dc);
          var _ = fa({}, i.imports, v.imports, Dc), A = at(_), C = Rs(_, A), I, N, Z = 0, V = i.interpolate || Eo, J = "__p += '", ne = Is(
            (i.escape || Eo).source + "|" + V.source + "|" + (V === nf ? fg : Eo).source + "|" + (i.evaluate || Eo).source + "|$",
            "g"
          ), se = "//# sourceURL=" + (Le.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ug + "]") + `
`;
          t.replace(ne, function(he, xe, Te, Dt, _t, Nt) {
            return Te || (Te = Dt), J += t.slice(Z, Nt).replace(gg, ay), xe && (I = true, J += `' +
__e(` + xe + `) +
'`), _t && (N = true, J += `';
` + _t + `;
__p += '`), Te && (J += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), Z = Nt + he.length, he;
          }), J += `';
`;
          var pe = Le.call(i, "variable") && i.variable;
          if (!pe)
            J = `with (obj) {
` + J + `
}
`;
          else if (ug.test(pe))
            throw new ye(d);
          J = (N ? J.replace(Zm, "") : J).replace(Km, "$1").replace(Gm, "$1;"), J = "function(" + (pe || "obj") + `) {
` + (pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (I ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
          var Se = Pd(function() {
            return Pe(A, se + "return " + J).apply(n, C);
          });
          if (Se.source = J, vu(Se))
            throw Se;
          return Se;
        }
        function IS(t) {
          return Re(t).toLowerCase();
        }
        function LS(t) {
          return Re(t).toUpperCase();
        }
        function FS(t, i, s) {
          if (t = Re(t), t && (s || i === n))
            return Nf(t);
          if (!t || !(i = Ft(i)))
            return t;
          var v = rr(t), _ = rr(i), A = kf(v, _), C = Wf(v, _) + 1;
          return Xr(v, A, C).join("");
        }
        function $S(t, i, s) {
          if (t = Re(t), t && (s || i === n))
            return t.slice(0, zf(t) + 1);
          if (!t || !(i = Ft(i)))
            return t;
          var v = rr(t), _ = Wf(v, rr(i)) + 1;
          return Xr(v, 0, _).join("");
        }
        function DS(t, i, s) {
          if (t = Re(t), t && (s || i === n))
            return t.replace(vs, "");
          if (!t || !(i = Ft(i)))
            return t;
          var v = rr(t), _ = kf(v, rr(i));
          return Xr(v, _).join("");
        }
        function NS(t, i) {
          var s = Y, v = W;
          if (He(i)) {
            var _ = "separator" in i ? i.separator : _;
            s = "length" in i ? be(i.length) : s, v = "omission" in i ? Ft(i.omission) : v;
          }
          t = Re(t);
          var A = t.length;
          if (Un(t)) {
            var C = rr(t);
            A = C.length;
          }
          if (s >= A)
            return t;
          var I = s - zn(v);
          if (I < 1)
            return v;
          var N = C ? Xr(C, 0, I).join("") : t.slice(0, I);
          if (_ === n)
            return N + v;
          if (C && (I += N.length - I), mu(_)) {
            if (t.slice(I).search(_)) {
              var Z, V = N;
              for (_.global || (_ = Is(_.source, Re(of.exec(_)) + "g")), _.lastIndex = 0; Z = _.exec(V); )
                var J = Z.index;
              N = N.slice(0, J === n ? I : J);
            }
          } else if (t.indexOf(Ft(_), I) != I) {
            var ne = N.lastIndexOf(_);
            ne > -1 && (N = N.slice(0, ne));
          }
          return N + v;
        }
        function kS(t) {
          return t = Re(t), t && Vm.test(t) ? t.replace(tf, py) : t;
        }
        var WS = Gn(function(t, i, s) {
          return t + (s ? " " : "") + i.toUpperCase();
        }), wu = Cc("toUpperCase");
        function Td(t, i, s) {
          return t = Re(t), i = s ? n : i, i === n ? uy(t) ? my(t) : Qg(t) : t.match(i) || [];
        }
        var Pd = Ee(function(t, i) {
          try {
            return It(t, n, i);
          } catch (s) {
            return vu(s) ? s : new ye(s);
          }
        }), US = Cr(function(t, i) {
          return Bt(i, function(s) {
            s = hr(s), Tr(t, s, pu(t[s], t));
          }), t;
        });
        function zS(t) {
          var i = t == null ? 0 : t.length, s = ce();
          return t = i ? We(t, function(v) {
            if (typeof v[1] != "function")
              throw new Ht(f);
            return [s(v[0]), v[1]];
          }) : [], Ee(function(v) {
            for (var _ = -1; ++_ < i; ) {
              var A = t[_];
              if (It(A[0], this, v))
                return It(A[1], this, v);
            }
          });
        }
        function BS(t) {
          return p0(qt(t, h));
        }
        function bu(t) {
          return function() {
            return t;
          };
        }
        function HS(t, i) {
          return t == null || t !== t ? i : t;
        }
        var jS = Mc(), qS = Mc(true);
        function Tt(t) {
          return t;
        }
        function Su(t) {
          return sc(typeof t == "function" ? t : qt(t, h));
        }
        function ZS(t) {
          return lc(qt(t, h));
        }
        function KS(t, i) {
          return fc(t, qt(i, h));
        }
        var GS = Ee(function(t, i) {
          return function(s) {
            return Ei(s, t, i);
          };
        }), VS = Ee(function(t, i) {
          return function(s) {
            return Ei(t, s, i);
          };
        });
        function _u(t, i, s) {
          var v = at(i), _ = qo(i, v);
          s == null && !(He(i) && (_.length || !v.length)) && (s = i, i = t, t = this, _ = qo(i, at(i)));
          var A = !(He(s) && "chain" in s) || !!s.chain, C = Mr(t);
          return Bt(_, function(I) {
            var N = i[I];
            t[I] = N, C && (t.prototype[I] = function() {
              var Z = this.__chain__;
              if (A || Z) {
                var V = t(this.__wrapped__), J = V.__actions__ = xt(this.__actions__);
                return J.push({ func: N, args: arguments, thisArg: t }), V.__chain__ = Z, V;
              }
              return N.apply(t, qr([this.value()], arguments));
            });
          }), t;
        }
        function YS() {
          return ft._ === this && (ft._ = _y), this;
        }
        function Eu() {
        }
        function XS(t) {
          return t = be(t), Ee(function(i) {
            return cc(i, t);
          });
        }
        var JS = eu(We), QS = eu(If), e_ = eu(Os);
        function Cd(t) {
          return su(t) ? As(hr(t)) : R0(t);
        }
        function t_(t) {
          return function(i) {
            return t == null ? n : yn(t, i);
          };
        }
        var r_ = Lc(), n_ = Lc(true);
        function xu() {
          return [];
        }
        function Ou() {
          return false;
        }
        function i_() {
          return {};
        }
        function o_() {
          return "";
        }
        function a_() {
          return true;
        }
        function s_(t, i) {
          if (t = be(t), t < 1 || t > ee)
            return [];
          var s = Q, v = mt(t, Q);
          i = ce(i), t -= Q;
          for (var _ = Cs(v, i); ++s < t; )
            i(s);
          return _;
        }
        function u_(t) {
          return we(t) ? We(t, hr) : $t(t) ? [t] : xt(Vc(Re(t)));
        }
        function l_(t) {
          var i = ++by;
          return Re(t) + i;
        }
        var f_ = Xo(function(t, i) {
          return t + i;
        }, 0), c_ = tu("ceil"), d_ = Xo(function(t, i) {
          return t / i;
        }, 1), p_ = tu("floor");
        function h_(t) {
          return t && t.length ? jo(t, Tt, Us) : n;
        }
        function v_(t, i) {
          return t && t.length ? jo(t, ce(i, 2), Us) : n;
        }
        function m_(t) {
          return $f(t, Tt);
        }
        function g_(t, i) {
          return $f(t, ce(i, 2));
        }
        function y_(t) {
          return t && t.length ? jo(t, Tt, js) : n;
        }
        function w_(t, i) {
          return t && t.length ? jo(t, ce(i, 2), js) : n;
        }
        var b_ = Xo(function(t, i) {
          return t * i;
        }, 1), S_ = tu("round"), __ = Xo(function(t, i) {
          return t - i;
        }, 0);
        function E_(t) {
          return t && t.length ? Ps(t, Tt) : 0;
        }
        function x_(t, i) {
          return t && t.length ? Ps(t, ce(i, 2)) : 0;
        }
        return O.after = Zw, O.ary = ad, O.assign = Lb, O.assignIn = bd, O.assignInWith = fa, O.assignWith = Fb, O.at = $b, O.before = sd, O.bind = pu, O.bindAll = US, O.bindKey = ud, O.castArray = ib, O.chain = nd, O.chunk = p1, O.compact = h1, O.concat = v1, O.cond = zS, O.conforms = BS, O.constant = bu, O.countBy = Ew, O.create = Db, O.curry = ld, O.curryRight = fd, O.debounce = cd, O.defaults = Nb, O.defaultsDeep = kb, O.defer = Kw, O.delay = Gw, O.difference = m1, O.differenceBy = g1, O.differenceWith = y1, O.drop = w1, O.dropRight = b1, O.dropRightWhile = S1, O.dropWhile = _1, O.fill = E1, O.filter = Ow, O.flatMap = Pw, O.flatMapDeep = Cw, O.flatMapDepth = Rw, O.flatten = Qc, O.flattenDeep = x1, O.flattenDepth = O1, O.flip = Vw, O.flow = jS, O.flowRight = qS, O.fromPairs = A1, O.functions = qb, O.functionsIn = Zb, O.groupBy = Mw, O.initial = P1, O.intersection = C1, O.intersectionBy = R1, O.intersectionWith = M1, O.invert = Gb, O.invertBy = Vb, O.invokeMap = Lw, O.iteratee = Su, O.keyBy = Fw, O.keys = at, O.keysIn = At, O.map = ia, O.mapKeys = Xb, O.mapValues = Jb, O.matches = ZS, O.matchesProperty = KS, O.memoize = aa, O.merge = Qb, O.mergeWith = Sd, O.method = GS, O.methodOf = VS, O.mixin = _u, O.negate = sa, O.nthArg = XS, O.omit = eS, O.omitBy = tS, O.once = Yw, O.orderBy = $w, O.over = JS, O.overArgs = Xw, O.overEvery = QS, O.overSome = e_, O.partial = hu, O.partialRight = dd, O.partition = Dw, O.pick = rS, O.pickBy = _d, O.property = Cd, O.propertyOf = t_, O.pull = $1, O.pullAll = td, O.pullAllBy = D1, O.pullAllWith = N1, O.pullAt = k1, O.range = r_, O.rangeRight = n_, O.rearg = Jw, O.reject = Ww, O.remove = W1, O.rest = Qw, O.reverse = cu, O.sampleSize = zw, O.set = iS, O.setWith = oS, O.shuffle = Bw, O.slice = U1, O.sortBy = qw, O.sortedUniq = K1, O.sortedUniqBy = G1, O.split = PS, O.spread = eb, O.tail = V1, O.take = Y1, O.takeRight = X1, O.takeRightWhile = J1, O.takeWhile = Q1, O.tap = hw, O.throttle = tb, O.thru = na, O.toArray = gd, O.toPairs = Ed, O.toPairsIn = xd, O.toPath = u_, O.toPlainObject = wd, O.transform = aS, O.unary = rb, O.union = ew, O.unionBy = tw, O.unionWith = rw, O.uniq = nw, O.uniqBy = iw, O.uniqWith = ow, O.unset = sS, O.unzip = du, O.unzipWith = rd, O.update = uS, O.updateWith = lS, O.values = Xn, O.valuesIn = fS, O.without = aw, O.words = Td, O.wrap = nb, O.xor = sw, O.xorBy = uw, O.xorWith = lw, O.zip = fw, O.zipObject = cw, O.zipObjectDeep = dw, O.zipWith = pw, O.entries = Ed, O.entriesIn = xd, O.extend = bd, O.extendWith = fa, _u(O, O), O.add = f_, O.attempt = Pd, O.camelCase = hS, O.capitalize = Od, O.ceil = c_, O.clamp = cS, O.clone = ob, O.cloneDeep = sb, O.cloneDeepWith = ub, O.cloneWith = ab, O.conformsTo = lb, O.deburr = Ad, O.defaultTo = HS, O.divide = d_, O.endsWith = vS, O.eq = ir, O.escape = mS, O.escapeRegExp = gS, O.every = xw, O.find = Aw, O.findIndex = Xc, O.findKey = Wb, O.findLast = Tw, O.findLastIndex = Jc, O.findLastKey = Ub, O.floor = p_, O.forEach = id, O.forEachRight = od, O.forIn = zb, O.forInRight = Bb, O.forOwn = Hb, O.forOwnRight = jb, O.get = gu, O.gt = fb, O.gte = cb, O.has = Kb, O.hasIn = yu, O.head = ed, O.identity = Tt, O.includes = Iw, O.indexOf = T1, O.inRange = dS, O.invoke = Yb, O.isArguments = Sn, O.isArray = we, O.isArrayBuffer = db, O.isArrayLike = Ot, O.isArrayLikeObject = Ke, O.isBoolean = pb, O.isBuffer = Jr, O.isDate = hb, O.isElement = vb, O.isEmpty = mb, O.isEqual = gb, O.isEqualWith = yb, O.isError = vu, O.isFinite = wb, O.isFunction = Mr, O.isInteger = pd, O.isLength = ua, O.isMap = hd, O.isMatch = bb, O.isMatchWith = Sb, O.isNaN = _b, O.isNative = Eb, O.isNil = Ob, O.isNull = xb, O.isNumber = vd, O.isObject = He, O.isObjectLike = Ze, O.isPlainObject = Ci, O.isRegExp = mu, O.isSafeInteger = Ab, O.isSet = md, O.isString = la, O.isSymbol = $t, O.isTypedArray = Yn, O.isUndefined = Tb, O.isWeakMap = Pb, O.isWeakSet = Cb, O.join = I1, O.kebabCase = yS, O.last = Kt, O.lastIndexOf = L1, O.lowerCase = wS, O.lowerFirst = bS, O.lt = Rb, O.lte = Mb, O.max = h_, O.maxBy = v_, O.mean = m_, O.meanBy = g_, O.min = y_, O.minBy = w_, O.stubArray = xu, O.stubFalse = Ou, O.stubObject = i_, O.stubString = o_, O.stubTrue = a_, O.multiply = b_, O.nth = F1, O.noConflict = YS, O.noop = Eu, O.now = oa, O.pad = SS, O.padEnd = _S, O.padStart = ES, O.parseInt = xS, O.random = pS, O.reduce = Nw, O.reduceRight = kw, O.repeat = OS, O.replace = AS, O.result = nS, O.round = S_, O.runInContext = $, O.sample = Uw, O.size = Hw, O.snakeCase = TS, O.some = jw, O.sortedIndex = z1, O.sortedIndexBy = B1, O.sortedIndexOf = H1, O.sortedLastIndex = j1, O.sortedLastIndexBy = q1, O.sortedLastIndexOf = Z1, O.startCase = CS, O.startsWith = RS, O.subtract = __, O.sum = E_, O.sumBy = x_, O.template = MS, O.times = s_, O.toFinite = Ir, O.toInteger = be, O.toLength = yd, O.toLower = IS, O.toNumber = Gt, O.toSafeInteger = Ib, O.toString = Re, O.toUpper = LS, O.trim = FS, O.trimEnd = $S, O.trimStart = DS, O.truncate = NS, O.unescape = kS, O.uniqueId = l_, O.upperCase = WS, O.upperFirst = wu, O.each = id, O.eachRight = od, O.first = ed, _u(O, (function() {
          var t = {};
          return dr(O, function(i, s) {
            Le.call(O.prototype, s) || (t[s] = i);
          }), t;
        })(), { chain: false }), O.VERSION = o, Bt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          O[t].placeholder = O;
        }), Bt(["drop", "take"], function(t, i) {
          Ae.prototype[t] = function(s) {
            s = s === n ? 1 : et(be(s), 0);
            var v = this.__filtered__ && !i ? new Ae(this) : this.clone();
            return v.__filtered__ ? v.__takeCount__ = mt(s, v.__takeCount__) : v.__views__.push({
              size: mt(s, Q),
              type: t + (v.__dir__ < 0 ? "Right" : "")
            }), v;
          }, Ae.prototype[t + "Right"] = function(s) {
            return this.reverse()[t](s).reverse();
          };
        }), Bt(["filter", "map", "takeWhile"], function(t, i) {
          var s = i + 1, v = s == H || s == X;
          Ae.prototype[t] = function(_) {
            var A = this.clone();
            return A.__iteratees__.push({
              iteratee: ce(_, 3),
              type: s
            }), A.__filtered__ = A.__filtered__ || v, A;
          };
        }), Bt(["head", "last"], function(t, i) {
          var s = "take" + (i ? "Right" : "");
          Ae.prototype[t] = function() {
            return this[s](1).value()[0];
          };
        }), Bt(["initial", "tail"], function(t, i) {
          var s = "drop" + (i ? "" : "Right");
          Ae.prototype[t] = function() {
            return this.__filtered__ ? new Ae(this) : this[s](1);
          };
        }), Ae.prototype.compact = function() {
          return this.filter(Tt);
        }, Ae.prototype.find = function(t) {
          return this.filter(t).head();
        }, Ae.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, Ae.prototype.invokeMap = Ee(function(t, i) {
          return typeof t == "function" ? new Ae(this) : this.map(function(s) {
            return Ei(s, t, i);
          });
        }), Ae.prototype.reject = function(t) {
          return this.filter(sa(ce(t)));
        }, Ae.prototype.slice = function(t, i) {
          t = be(t);
          var s = this;
          return s.__filtered__ && (t > 0 || i < 0) ? new Ae(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), i !== n && (i = be(i), s = i < 0 ? s.dropRight(-i) : s.take(i - t)), s);
        }, Ae.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, Ae.prototype.toArray = function() {
          return this.take(Q);
        }, dr(Ae.prototype, function(t, i) {
          var s = /^(?:filter|find|map|reject)|While$/.test(i), v = /^(?:head|last)$/.test(i), _ = O[v ? "take" + (i == "last" ? "Right" : "") : i], A = v || /^find/.test(i);
          _ && (O.prototype[i] = function() {
            var C = this.__wrapped__, I = v ? [1] : arguments, N = C instanceof Ae, Z = I[0], V = N || we(C), J = function(xe) {
              var Te = _.apply(O, qr([xe], I));
              return v && ne ? Te[0] : Te;
            };
            V && s && typeof Z == "function" && Z.length != 1 && (N = V = false);
            var ne = this.__chain__, se = !!this.__actions__.length, pe = A && !ne, Se = N && !se;
            if (!A && V) {
              C = Se ? C : new Ae(this);
              var he = t.apply(C, I);
              return he.__actions__.push({ func: na, args: [J], thisArg: n }), new jt(he, ne);
            }
            return pe && Se ? t.apply(this, I) : (he = this.thru(J), pe ? v ? he.value()[0] : he.value() : he);
          });
        }), Bt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var i = Co[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", v = /^(?:pop|shift)$/.test(t);
          O.prototype[t] = function() {
            var _ = arguments;
            if (v && !this.__chain__) {
              var A = this.value();
              return i.apply(we(A) ? A : [], _);
            }
            return this[s](function(C) {
              return i.apply(we(C) ? C : [], _);
            });
          };
        }), dr(Ae.prototype, function(t, i) {
          var s = O[i];
          if (s) {
            var v = s.name + "";
            Le.call(qn, v) || (qn[v] = []), qn[v].push({ name: i, func: s });
          }
        }), qn[Yo(n, b).name] = [{
          name: "wrapper",
          func: n
        }], Ae.prototype.clone = ky, Ae.prototype.reverse = Wy, Ae.prototype.value = Uy, O.prototype.at = vw, O.prototype.chain = mw, O.prototype.commit = gw, O.prototype.next = yw, O.prototype.plant = bw, O.prototype.reverse = Sw, O.prototype.toJSON = O.prototype.valueOf = O.prototype.value = _w, O.prototype.first = O.prototype.head, mi && (O.prototype[mi] = ww), O;
      }, Bn = gy();
      pn ? ((pn.exports = Bn)._ = Bn, Ss._ = Bn) : ft._ = Bn;
    }).call(WP);
  })(eo, eo.exports)), eo.exports;
}
var Xe = UP();
const _h = {
  FdSave: Z4,
  FdWarningDanger: x3,
  FdInfoCircle: F5,
  FdInfoBold: R5
};
var pm = /* @__PURE__ */ ((e2) => (e2.ALERT = "alert", e2.CONFIRM = "confirm", e2))(pm || {}), oi = /* @__PURE__ */ ((e2) => (e2.PRIMARY = "primary", e2.WARNING = "warning", e2.DANGER = "danger", e2))(oi || {}), to = /* @__PURE__ */ ((e2) => (e2.CONFIRMED = "confirmed", e2.CANCELED = "canceled", e2))(to || {});
const hm = {
  [oi.PRIMARY]: {
    icon: "blue-500",
    button: "primary-dark"
  },
  [oi.DANGER]: {
    icon: "red-500",
    button: "primary-dark"
  },
  [oi.WARNING]: {
    icon: "yellow-400",
    button: "primary-dark"
  }
}, nl = ({
  color: e2 = oi.PRIMARY,
  variant: r = "solid",
  children: n,
  autoFocus: o,
  ...a
}) => {
  const u = hm[e2].button, f = r === "outlined" ? `bg-transparent text-white border border-white hover:border-white hover:bg-white hover:text-${u}` : `text-white bg-${u} border border-${u} hover:border-white hover:bg-primary-hover hover:text-white`;
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      autoFocus: o,
      className: Je(
        "w-16 rounded px-2 py-1 text-xs font-medium hover:font-bold focus:outline-none",
        f
      ),
      ...a,
      children: n
    }
  );
}, zP = ({
  name: e2,
  color: r = oi.PRIMARY,
  className: n = "w-8 h-8"
}) => {
  const o = _h[e2] || _h.FdInfoCircle, a = `text-${hm[r].icon}`;
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(o, { className: Je(n, a) });
}, EM = ({
  id: e2,
  title: r,
  message: n,
  icon: o,
  type: a,
  color: u,
  zIndex: f = 3e3,
  views: d,
  width: w = 520,
  hasOverlay: S = true,
  onClose: y,
  onEdit: h
}) => {
  const l = (c) => {
    y({
      id: e2,
      reason: c
    });
  };
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    function c(g) {
      g.key === "Escape" && l(to.CANCELED);
    }
    return window.addEventListener("keyup", c), () => {
      window.removeEventListener("keyup", c);
    };
  }, []);
  const p = Xe.merge(
    Xe.values(d == null ? void 0 : d.toggles).flatMap((c) => c.value ? c.warnings || [] : []),
    d == null ? void 0 : d.tips
  ), m = (c, g) => {
    var E;
    if (!(d != null && d.toggles)) return;
    const b = Xe.cloneDeep(d);
    (E = b.toggles) != null && E[c] && (b.toggles[c].value = g), h({
      id: e2,
      views: b
    });
  };
  return Mi$1.createPortal(
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ba, { appear: true, show: true, as: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: Je(
          "absolute inset-0 flex h-full w-full items-center justify-center overflow-y-auto",
          { "bg-black bg-opacity-80": S }
        ),
        style: { zIndex: f },
        onClick: () => l(to.CANCELED),
        children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          Ba.Child,
          {
            as: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "div",
              {
                "data-cy": "confirmation-modal-cy",
                className: "relative rounded-md border border-grey-50 bg-grey-900",
                style: { width: w },
                onClick: (c) => c.stopPropagation(),
                children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 px-12", children: [
                  o ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(zP, { name: o, color: u, className: "w-6 h-6" }) }) : null,
                  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BP, { condition: r, children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h4", { className: "w-full text-wrap text-lg font-bold leading-6 text-white text-center", children: r }) }),
                  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: "w-full text-wrap text-center text-sm font-medium text-white", children: n }),
                  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-xs text-white", children: Xe.values(d == null ? void 0 : d.toggles).map((c) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { htmlFor: c.key, className: "flex items-center", children: [
                    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      DP,
                      {
                        size: "xs",
                        value: c.value,
                        onChange: (g) => m(c.key, g)
                      }
                    ),
                    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "ml-1", children: c.title })
                  ] }) }, c.key)) }),
                  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(HP, { warnings: p }),
                  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center gap-4", children: a === pm.CONFIRM ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
                    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      nl,
                      {
                        autoFocus: true,
                        color: u,
                        onClick: () => l(to.CONFIRMED),
                        children: "Confirm"
                      }
                    ),
                    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      nl,
                      {
                        color: u,
                        variant: "outlined",
                        onClick: () => l(to.CANCELED),
                        children: "Cancel"
                      }
                    )
                  ] }) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(nl, { autoFocus: true, onClick: () => l(), children: "OK" }) })
                ] })
              }
            )
          }
        )
      }
    ) }),
    document.querySelector("body")
  );
}, BP = (e2) => e2.condition ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e2.children }) : null, HP = (e2) => e2.warnings ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ba, { appear: true, show: !!e2.warnings.length, as: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-1 rounded-sm bg-grey-600 p-2 text-xs text-white", children: e2.warnings.map((r, n) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  Ba.Child,
  {
    as: qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 items-center gap-1 rounded-sm px-2 py-1", children: [
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        x3,
        {
          className: Je(
            {
              "h-3 w-3": true,
              "text-yellow-500": r.type === "warning",
              "text-red-400": r.type === "error",
              "text-primary-dark": r.type === "info"
            },
            "mr-3"
          )
        }
      ),
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex-1", children: r.message })
    ] })
  },
  `modal-warnings-${n}`
)) }) }) : null;
var jP = /* @__PURE__ */ ((e2) => (e2[e2.MIN = 1] = "MIN", e2[e2.MAX = 10] = "MAX", e2[e2.STEP = 0.5] = "STEP", e2[e2.INIT = 1] = "INIT", e2[e2.TRANSITION = 200] = "TRANSITION", e2))(jP || {});
const xM = ({
  zoom: e2,
  minZoom: r = 1,
  maxZoom: n = 10,
  handleZoomIn: o,
  handleZoomOut: a
}) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center rounded bg-grey-300 p-1", children: [
  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    o2,
    {
      onClick: a,
      className: Je("h-5 w-5 p-1", {
        "text-grey-200": e2 <= r,
        "cursor-pointer rounded hover:bg-purple-800": e2 > r
      })
    }
  ),
  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "mx-1 w-10 select-none text-center text-xs", children: [
    (e2 * 100).toFixed(0),
    "%"
  ] }),
  /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    J2,
    {
      onClick: o,
      className: Je("h-5 w-5 p-1", {
        "text-grey-200": e2 >= n,
        "cursor-pointer rounded hover:bg-purple-800": e2 < n
      })
    }
  )
] });
function OM(e2, r) {
  const n = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(false);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (n.current) return e2();
    n.current = true;
  }, r);
}
const il = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function ol(e2, r, n, o) {
  e2.addEventListener ? e2.addEventListener(r, n, o) : e2.attachEvent && e2.attachEvent("on".concat(r), n);
}
function Ji(e2, r, n, o) {
  e2.removeEventListener ? e2.removeEventListener(r, n, o) : e2.detachEvent && e2.detachEvent("on".concat(r), n);
}
function vm(e2, r) {
  const n = r.slice(0, r.length - 1);
  for (let o = 0; o < n.length; o++) n[o] = e2[n[o].toLowerCase()];
  return n;
}
function mm(e2) {
  typeof e2 != "string" && (e2 = ""), e2 = e2.replace(/\s/g, "");
  const r = e2.split(",");
  let n = r.lastIndexOf("");
  for (; n >= 0; )
    r[n - 1] += ",", r.splice(n, 1), n = r.lastIndexOf("");
  return r;
}
function qP(e2, r) {
  const n = e2.length >= r.length ? e2 : r, o = e2.length >= r.length ? r : e2;
  let a = true;
  for (let u = 0; u < n.length; u++)
    o.indexOf(n[u]) === -1 && (a = false);
  return a;
}
const ci = {
  backspace: 8,
  "⌫": 8,
  tab: 9,
  clear: 12,
  enter: 13,
  "↩": 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  "⇪": 20,
  ",": 188,
  ".": 190,
  "/": 191,
  "`": 192,
  "-": il ? 173 : 189,
  "=": il ? 61 : 187,
  ";": il ? 59 : 186,
  "'": 222,
  "[": 219,
  "]": 221,
  "\\": 220
}, lr = {
  // shiftKey
  "⇧": 16,
  shift: 16,
  // altKey
  "⌥": 18,
  alt: 18,
  option: 18,
  // ctrlKey
  "⌃": 17,
  ctrl: 17,
  control: 17,
  // metaKey
  "⌘": 91,
  cmd: 91,
  command: 91
}, ro = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, pt = {
  16: false,
  18: false,
  17: false,
  91: false
}, qe = {};
for (let e2 = 1; e2 < 20; e2++)
  ci["f".concat(e2)] = 111 + e2;
let ze = [], so = null, gm = "all";
const $r = /* @__PURE__ */ new Map(), Ln = (e2) => ci[e2.toLowerCase()] || lr[e2.toLowerCase()] || e2.toUpperCase().charCodeAt(0), ZP = (e2) => Object.keys(ci).find((r) => ci[r] === e2), KP = (e2) => Object.keys(lr).find((r) => lr[r] === e2);
function ym(e2) {
  gm = e2 || "all";
}
function po() {
  return gm || "all";
}
function GP() {
  return ze.slice(0);
}
function VP() {
  return ze.map((e2) => ZP(e2) || KP(e2) || String.fromCharCode(e2));
}
function YP() {
  const e2 = [];
  return Object.keys(qe).forEach((r) => {
    qe[r].forEach((n) => {
      let {
        key: o,
        scope: a,
        mods: u,
        shortcut: f
      } = n;
      e2.push({
        scope: a,
        shortcut: f,
        mods: u,
        keys: o.split("+").map((d) => Ln(d))
      });
    });
  }), e2;
}
function XP(e2) {
  const r = e2.target || e2.srcElement, {
    tagName: n
  } = r;
  let o = true;
  const a = n === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(r.type);
  return (r.isContentEditable || (a || n === "TEXTAREA" || n === "SELECT") && !r.readOnly) && (o = false), o;
}
function JP(e2) {
  return typeof e2 == "string" && (e2 = Ln(e2)), ze.indexOf(e2) !== -1;
}
function QP(e2, r) {
  let n, o;
  e2 || (e2 = po());
  for (const a in qe)
    if (Object.prototype.hasOwnProperty.call(qe, a))
      for (n = qe[a], o = 0; o < n.length; )
        n[o].scope === e2 ? n.splice(o, 1).forEach((f) => {
          let {
            element: d
          } = f;
          return Yl(d);
        }) : o++;
  po() === e2 && ym(r || "all");
}
function eC(e2) {
  let r = e2.keyCode || e2.which || e2.charCode;
  e2.key && (r = Ln(e2.key));
  const n = ze.indexOf(r);
  if (n >= 0 && ze.splice(n, 1), e2.key && e2.key.toLowerCase() === "meta" && ze.splice(0, ze.length), (r === 93 || r === 224) && (r = 91), r in pt) {
    pt[r] = false;
    for (const o in lr) lr[o] === r && (ur[o] = false);
  }
}
function wm(e2) {
  if (typeof e2 > "u")
    Object.keys(qe).forEach((a) => {
      Array.isArray(qe[a]) && qe[a].forEach((u) => Aa(u)), delete qe[a];
    }), Yl(null);
  else if (Array.isArray(e2))
    e2.forEach((a) => {
      a.key && Aa(a);
    });
  else if (typeof e2 == "object")
    e2.key && Aa(e2);
  else if (typeof e2 == "string") {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    let [a, u] = n;
    typeof a == "function" && (u = a, a = ""), Aa({
      key: e2,
      scope: a,
      method: u,
      splitKey: "+"
    });
  }
}
const Aa = (e2) => {
  let {
    key: r,
    scope: n,
    method: o,
    splitKey: a = "+"
  } = e2;
  mm(r).forEach((f) => {
    const d = f.split(a), w = d.length, S = d[w - 1], y = S === "*" ? "*" : Ln(S);
    if (!qe[y]) return;
    n || (n = po());
    const h = w > 1 ? vm(lr, d) : [], l = [];
    qe[y] = qe[y].filter((p) => {
      const c = (o ? p.method === o : true) && p.scope === n && qP(p.mods, h);
      return c && l.push(p.element), !c;
    }), l.forEach((p) => Yl(p));
  });
};
function Eh(e2, r, n, o) {
  if (r.element !== o)
    return;
  let a;
  if (r.scope === n || r.scope === "all") {
    a = r.mods.length > 0;
    for (const u in pt)
      Object.prototype.hasOwnProperty.call(pt, u) && (!pt[u] && r.mods.indexOf(+u) > -1 || pt[u] && r.mods.indexOf(+u) === -1) && (a = false);
    (r.mods.length === 0 && !pt[16] && !pt[18] && !pt[17] && !pt[91] || a || r.shortcut === "*") && (r.keys = [], r.keys = r.keys.concat(ze), r.method(e2, r) === false && (e2.preventDefault ? e2.preventDefault() : e2.returnValue = false, e2.stopPropagation && e2.stopPropagation(), e2.cancelBubble && (e2.cancelBubble = true)));
  }
}
function xh(e2, r) {
  const n = qe["*"];
  let o = e2.keyCode || e2.which || e2.charCode;
  if (e2.key && (o = Ln(e2.key)), o === ci.capslock || !ur.filter.call(this, e2)) return;
  if ((o === 93 || o === 224) && (o = 91), ze.indexOf(o) === -1 && o !== 229 && ze.push(o), ["metaKey", "ctrlKey", "altKey", "shiftKey"].forEach((d) => {
    const w = ro[d];
    e2[d] && ze.indexOf(w) === -1 ? ze.push(w) : !e2[d] && ze.indexOf(w) > -1 ? ze.splice(ze.indexOf(w), 1) : d === "metaKey" && e2[d] && (ze = ze.filter((S) => S in ro || S === o));
  }), o in pt) {
    pt[o] = true;
    for (const d in lr)
      if (Object.prototype.hasOwnProperty.call(lr, d)) {
        const w = ro[lr[d]];
        ur[d] = e2[w];
      }
    if (!n) return;
  }
  for (const d in pt)
    Object.prototype.hasOwnProperty.call(pt, d) && (pt[d] = e2[ro[d]]);
  e2.getModifierState && !(e2.altKey && !e2.ctrlKey) && e2.getModifierState("AltGraph") && (ze.indexOf(17) === -1 && ze.push(17), ze.indexOf(18) === -1 && ze.push(18), pt[17] = true, pt[18] = true);
  const a = po();
  if (n)
    for (let d = 0; d < n.length; d++)
      n[d].scope === a && (e2.type === "keydown" && n[d].keydown || e2.type === "keyup" && n[d].keyup) && Eh(e2, n[d], a, r);
  if (!(o in qe)) return;
  const u = qe[o], f = u.length;
  for (let d = 0; d < f; d++)
    if ((e2.type === "keydown" && u[d].keydown || e2.type === "keyup" && u[d].keyup) && u[d].key) {
      const w = u[d], {
        splitKey: S
      } = w, y = w.key.split(S), h = [];
      for (let l = 0; l < y.length; l++)
        h.push(Ln(y[l]));
      h.sort().join("") === ze.sort().join("") && Eh(e2, w, a, r);
    }
}
function ur(e2, r, n) {
  ze = [];
  const o = mm(e2);
  let a = [], u = "all", f = document, d = 0, w = false, S = true, y = "+", h = false, l = false;
  for (n === void 0 && typeof r == "function" && (n = r), Object.prototype.toString.call(r) === "[object Object]" && (r.scope && (u = r.scope), r.element && (f = r.element), r.keyup && (w = r.keyup), r.keydown !== void 0 && (S = r.keydown), r.capture !== void 0 && (h = r.capture), typeof r.splitKey == "string" && (y = r.splitKey), r.single === true && (l = true)), typeof r == "string" && (u = r), l && wm(e2, u); d < o.length; d++)
    e2 = o[d].split(y), a = [], e2.length > 1 && (a = vm(lr, e2)), e2 = e2[e2.length - 1], e2 = e2 === "*" ? "*" : Ln(e2), e2 in qe || (qe[e2] = []), qe[e2].push({
      keyup: w,
      keydown: S,
      scope: u,
      mods: a,
      shortcut: o[d],
      method: n,
      key: o[d],
      splitKey: y,
      element: f
    });
  if (typeof f < "u" && window) {
    if (!$r.has(f)) {
      const p = function() {
        let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return xh(c, f);
      }, m = function() {
        let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        xh(c, f), eC(c);
      };
      $r.set(f, {
        keydownListener: p,
        keyupListenr: m,
        capture: h
      }), ol(f, "keydown", p, h), ol(f, "keyup", m, h);
    }
    if (!so) {
      const p = () => {
        ze = [];
      };
      so = {
        listener: p,
        capture: h
      }, ol(window, "focus", p, h);
    }
  }
}
function tC(e2) {
  let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(qe).forEach((n) => {
    qe[n].filter((a) => a.scope === r && a.shortcut === e2).forEach((a) => {
      a && a.method && a.method();
    });
  });
}
function Yl(e2) {
  const r = Object.values(qe).flat();
  if (r.findIndex((o) => {
    let {
      element: a
    } = o;
    return a === e2;
  }) < 0) {
    const {
      keydownListener: o,
      keyupListenr: a,
      capture: u
    } = $r.get(e2) || {};
    o && a && (Ji(e2, "keyup", a, u), Ji(e2, "keydown", o, u), $r.delete(e2));
  }
  if ((r.length <= 0 || $r.size <= 0) && (Object.keys($r).forEach((a) => {
    const {
      keydownListener: u,
      keyupListenr: f,
      capture: d
    } = $r.get(a) || {};
    u && f && (Ji(a, "keyup", f, d), Ji(a, "keydown", u, d), $r.delete(a));
  }), $r.clear(), Object.keys(qe).forEach((a) => delete qe[a]), so)) {
    const {
      listener: a,
      capture: u
    } = so;
    Ji(window, "focus", a, u), so = null;
  }
}
const al = {
  getPressedKeyString: VP,
  setScope: ym,
  getScope: po,
  deleteScope: QP,
  getPressedKeyCodes: GP,
  getAllKeyCodes: YP,
  isPressed: JP,
  filter: XP,
  trigger: tC,
  unbind: wm,
  keyMap: ci,
  modifier: lr,
  modifierMap: ro
};
for (const e2 in al)
  Object.prototype.hasOwnProperty.call(al, e2) && (ur[e2] = al[e2]);
if (typeof window < "u") {
  const e2 = window.hotkeys;
  ur.noConflict = (r) => (r && window.hotkeys === ur && (window.hotkeys = e2), ur), window.hotkeys = ur;
}
ur.filter = () => true;
function AM(e2, r, n, o) {
  n instanceof Array && (o = n, n = void 0), o = o || [], n = n || {};
  const { preventDefault: a = true } = n, u = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(
    (d, w) => {
      a && d.preventDefault(), setTimeout(() => r(d, w));
    },
    o
  ), f = () => {
    ur.unbind(e2, u);
  };
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => (ur(e2, n, u), f), [e2, n, u]);
}
const TM = (e2) => {
  const r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    const n = (o) => {
      r.current && !r.current.contains(o.target) && e2(o);
    };
    return document.addEventListener("click", n, true), () => {
      document.removeEventListener("click", n, true);
    };
  }, [e2]), r;
};
function PM(e2) {
  const r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef();
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }, [e2]), r.current;
}
function CM(e2) {
  const r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(e2);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    r.current = e2;
  }, [e2]), r;
}
function RM(e2) {
  const r = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    e2 && (typeof e2 == "function" ? e2(r.current) : e2.current = r.current);
  }), r;
}
function MM(e2) {
  const [r, n] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(e2), o = (u, f) => {
    n((d) => ({
      ...d,
      features: {
        ...d.features,
        [u]: {
          enabled: f
        }
      }
    }));
  }, a = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(
    (...u) => u.every((f) => {
      var d;
      return (d = r.features[f]) == null ? void 0 : d.enabled;
    }),
    [r.features]
  );
  return {
    setFeature: o,
    isFeatureEnabled: a
  };
}
const bm = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.createContext(""), IM = (e2) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(bm.Provider, { value: e2.value, children: e2.children }), LM = () => {
  const e2 = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useContext(bm);
  if (typeof e2 != "string")
    throw new Error(
      "Error while calling useIdentity! Context has incorrect type (expected string)"
    );
  return e2;
};
function FM(e2) {
  const [r, n] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(e2), o = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useMemo(() => rC(r, n), []);
  return {
    state: r,
    actions: {
      ...o,
      set: (a) => {
        n(
          typeof a == "function" ? a : (u) => ({
            ...u,
            ...a
          })
        );
      }
    }
  };
}
function rC(e2, r = () => {
}) {
  return Object.keys(e2).reduce(
    (o, a) => ({
      ...o,
      [`set${Xe.upperFirst(a)}`]: (u) => r((f) => ({
        ...f,
        [a]: u
      }))
    }),
    {}
  );
}
const $M = (e2, r, n = {}) => {
  n = {
    timeout: 200,
    ...n
  };
  const o = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(), a = () => {
    o.current && (clearTimeout(o.current), o.current = null);
  };
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useCallback(
    (u, ...f) => {
      a(), r && u.detail === 1 && (o.current = setTimeout(() => {
        r(u, ...f);
      }, n.timeout)), u.detail % 2 === 0 && e2(u, ...f);
    },
    [r, e2, n.timeout]
  );
};
function kr(e2) {
  return typeof e2 == "function";
}
function Sm(e2) {
  var r = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, n = e2(r);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var sl = Sm(function(e2) {
  return function(n) {
    e2(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(o, a) {
      return a + 1 + ") " + o.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ol(e2, r) {
  if (e2) {
    var n = e2.indexOf(r);
    0 <= n && e2.splice(n, 1);
  }
}
var ts = (function() {
  function e2(r) {
    this.initialTeardown = r, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e2.prototype.unsubscribe = function() {
    var r, n, o, a, u;
    if (!this.closed) {
      this.closed = true;
      var f = this._parentage;
      if (f)
        if (this._parentage = null, Array.isArray(f))
          try {
            for (var d = gl(f), w = d.next(); !w.done; w = d.next()) {
              var S = w.value;
              S.remove(this);
            }
          } catch (c) {
            r = { error: c };
          } finally {
            try {
              w && !w.done && (n = d.return) && n.call(d);
            } finally {
              if (r) throw r.error;
            }
          }
        else
          f.remove(this);
      var y = this.initialTeardown;
      if (kr(y))
        try {
          y();
        } catch (c) {
          u = c instanceof sl ? c.errors : [c];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var l = gl(h), p = l.next(); !p.done; p = l.next()) {
            var m = p.value;
            try {
              Oh(m);
            } catch (c) {
              u = u ?? [], c instanceof sl ? u = Ua(Ua([], yl(u)), yl(c.errors)) : u.push(c);
            }
          }
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            p && !p.done && (a = l.return) && a.call(l);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (u)
        throw new sl(u);
    }
  }, e2.prototype.add = function(r) {
    var n;
    if (r && r !== this)
      if (this.closed)
        Oh(r);
      else {
        if (r instanceof e2) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(r);
      }
  }, e2.prototype._hasParent = function(r) {
    var n = this._parentage;
    return n === r || Array.isArray(n) && n.includes(r);
  }, e2.prototype._addParent = function(r) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(r), n) : n ? [n, r] : r;
  }, e2.prototype._removeParent = function(r) {
    var n = this._parentage;
    n === r ? this._parentage = null : Array.isArray(n) && Ol(n, r);
  }, e2.prototype.remove = function(r) {
    var n = this._finalizers;
    n && Ol(n, r), r instanceof e2 && r._removeParent(this);
  }, e2.EMPTY = (function() {
    var r = new e2();
    return r.closed = true, r;
  })(), e2;
})(), _m = ts.EMPTY;
function Em(e2) {
  return e2 instanceof ts || e2 && "closed" in e2 && kr(e2.remove) && kr(e2.add) && kr(e2.unsubscribe);
}
function Oh(e2) {
  kr(e2) ? e2() : e2.unsubscribe();
}
var nC = {
  Promise: void 0
}, iC = {
  setTimeout: function(e2, r) {
    for (var n = [], o = 2; o < arguments.length; o++)
      n[o - 2] = arguments[o];
    return setTimeout.apply(void 0, Ua([e2, r], yl(n)));
  },
  clearTimeout: function(e2) {
    return clearTimeout(e2);
  },
  delegate: void 0
};
function oC(e2) {
  iC.setTimeout(function() {
    throw e2;
  });
}
function Ah() {
}
function $a(e2) {
  e2();
}
var xm = (function(e2) {
  Ya(r, e2);
  function r(n) {
    var o = e2.call(this) || this;
    return o.isStopped = false, n ? (o.destination = n, Em(n) && n.add(o)) : o.destination = uC, o;
  }
  return r.create = function(n, o, a) {
    return new Al(n, o, a);
  }, r.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, r.prototype.error = function(n) {
    this.isStopped || (this.isStopped = true, this._error(n));
  }, r.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e2.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(n) {
    this.destination.next(n);
  }, r.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
})(ts), aC = (function() {
  function e2(r) {
    this.partialObserver = r;
  }
  return e2.prototype.next = function(r) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(r);
      } catch (o) {
        Ta(o);
      }
  }, e2.prototype.error = function(r) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(r);
      } catch (o) {
        Ta(o);
      }
    else
      Ta(r);
  }, e2.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (n) {
        Ta(n);
      }
  }, e2;
})(), Al = (function(e2) {
  Ya(r, e2);
  function r(n, o, a) {
    var u = e2.call(this) || this, f;
    return kr(n) || !n ? f = {
      next: n ?? void 0,
      error: o ?? void 0,
      complete: a ?? void 0
    } : f = n, u.destination = new aC(f), u;
  }
  return r;
})(xm);
function Ta(e2) {
  oC(e2);
}
function sC(e2) {
  throw e2;
}
var uC = {
  closed: true,
  next: Ah,
  error: sC,
  complete: Ah
}, lC = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function fC(e2) {
  return e2;
}
function cC(e2) {
  return e2.length === 0 ? fC : e2.length === 1 ? e2[0] : function(n) {
    return e2.reduce(function(o, a) {
      return a(o);
    }, n);
  };
}
var Th = (function() {
  function e2(r) {
    r && (this._subscribe = r);
  }
  return e2.prototype.lift = function(r) {
    var n = new e2();
    return n.source = this, n.operator = r, n;
  }, e2.prototype.subscribe = function(r, n, o) {
    var a = this, u = pC(r) ? r : new Al(r, n, o);
    return $a(function() {
      var f = a, d = f.operator, w = f.source;
      u.add(d ? d.call(u, w) : w ? a._subscribe(u) : a._trySubscribe(u));
    }), u;
  }, e2.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (n) {
      r.error(n);
    }
  }, e2.prototype.forEach = function(r, n) {
    var o = this;
    return n = Ph(n), new n(function(a, u) {
      var f = new Al({
        next: function(d) {
          try {
            r(d);
          } catch (w) {
            u(w), f.unsubscribe();
          }
        },
        error: u,
        complete: a
      });
      o.subscribe(f);
    });
  }, e2.prototype._subscribe = function(r) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r);
  }, e2.prototype[lC] = function() {
    return this;
  }, e2.prototype.pipe = function() {
    for (var r = [], n = 0; n < arguments.length; n++)
      r[n] = arguments[n];
    return cC(r)(this);
  }, e2.prototype.toPromise = function(r) {
    var n = this;
    return r = Ph(r), new r(function(o, a) {
      var u;
      n.subscribe(function(f) {
        return u = f;
      }, function(f) {
        return a(f);
      }, function() {
        return o(u);
      });
    });
  }, e2.create = function(r) {
    return new e2(r);
  }, e2;
})();
function Ph(e2) {
  var r;
  return (r = e2 ?? nC.Promise) !== null && r !== void 0 ? r : Promise;
}
function dC(e2) {
  return e2 && kr(e2.next) && kr(e2.error) && kr(e2.complete);
}
function pC(e2) {
  return e2 && e2 instanceof xm || dC(e2) && Em(e2);
}
var hC = Sm(function(e2) {
  return function() {
    e2(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), cn = (function(e2) {
  Ya(r, e2);
  function r() {
    var n = e2.call(this) || this;
    return n.closed = false, n.currentObservers = null, n.observers = [], n.isStopped = false, n.hasError = false, n.thrownError = null, n;
  }
  return r.prototype.lift = function(n) {
    var o = new Ch(this, this);
    return o.operator = n, o;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new hC();
  }, r.prototype.next = function(n) {
    var o = this;
    $a(function() {
      var a, u;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var f = gl(o.currentObservers), d = f.next(); !d.done; d = f.next()) {
            var w = d.value;
            w.next(n);
          }
        } catch (S) {
          a = { error: S };
        } finally {
          try {
            d && !d.done && (u = f.return) && u.call(f);
          } finally {
            if (a) throw a.error;
          }
        }
      }
    });
  }, r.prototype.error = function(n) {
    var o = this;
    $a(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = true, o.thrownError = n;
        for (var a = o.observers; a.length; )
          a.shift().error(n);
      }
    });
  }, r.prototype.complete = function() {
    var n = this;
    $a(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = true;
        for (var o = n.observers; o.length; )
          o.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), r.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e2.prototype._trySubscribe.call(this, n);
  }, r.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, r.prototype._innerSubscribe = function(n) {
    var o = this, a = this, u = a.hasError, f = a.isStopped, d = a.observers;
    return u || f ? _m : (this.currentObservers = null, d.push(n), new ts(function() {
      o.currentObservers = null, Ol(d, n);
    }));
  }, r.prototype._checkFinalizedStatuses = function(n) {
    var o = this, a = o.hasError, u = o.thrownError, f = o.isStopped;
    a ? n.error(u) : f && n.complete();
  }, r.prototype.asObservable = function() {
    var n = new Th();
    return n.source = this, n;
  }, r.create = function(n, o) {
    return new Ch(n, o);
  }, r;
})(Th), Ch = (function(e2) {
  Ya(r, e2);
  function r(n, o) {
    var a = e2.call(this) || this;
    return a.destination = n, a.source = o, a;
  }
  return r.prototype.next = function(n) {
    var o, a;
    (a = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || a === void 0 || a.call(o, n);
  }, r.prototype.error = function(n) {
    var o, a;
    (a = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || a === void 0 || a.call(o, n);
  }, r.prototype.complete = function() {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || o === void 0 || o.call(n);
  }, r.prototype._subscribe = function(n) {
    var o, a;
    return (a = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(n)) !== null && a !== void 0 ? a : _m;
  }, r;
})(cn), vC = /* @__PURE__ */ ((e2) => (e2.RELOAD = "reload", e2.RECOMPUTE = "recompute", e2))(vC || {}), mC = /* @__PURE__ */ ((e2) => (e2.RENAME = "rename", e2.TYPE_CHANGE = "type-change", e2))(mC || {});
const DM = new cn(), NM = new cn(), gC = new cn();
var yC = /* @__PURE__ */ ((e2) => (e2.SAVE_ALL = "save-all", e2))(yC || {});
const kM = new cn();
var wC = /* @__PURE__ */ ((e2) => (e2.WILL_SAVE = "will-save", e2.DID_SAVE = "did-save", e2.WILL_CREATE = "will-create", e2.WILL_RENAME = "will-rename", e2.WILL_DELETE = "will-delete", e2.DID_CREATE = "did-create", e2.DID_RENAME = "did-rename", e2.DID_DELETE = "did-delete", e2.DIAGNOSTIC_REFRESH = "diagnostic-refresh", e2))(wC || {});
const WM = new cn();
var bC = /* @__PURE__ */ ((e2) => (e2.RESEND_BREAKPOINTS = "resend-breakpoints", e2))(bC || {});
const UM = new cn(), zM = new cn(), Om = 31;
var Am = ((e2) => (e2.EMPTY = "Please enter a valid name", e2.LENGTH_EXCEEDED = `The name is too long, it should not exceed ${Om} characters`, e2.SHOULD_START_WITH_LETTER = "The name can only start with a letter or a Japanese character", e2.INVALID = "Invalid name", e2))(Am || {});
function SC(e2) {
  if (e2 === "")
    throw new Error(
      "Please enter a valid name"
      /* EMPTY */
    );
  if (e2.length > Om)
    throw new Error(Am.LENGTH_EXCEEDED);
  if (!/^[a-zA-Z\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF]/.test(e2))
    throw new Error(
      "The name can only start with a letter or a Japanese character"
      /* SHOULD_START_WITH_LETTER */
    );
  if (!/^[\w\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF-]+$/i.test(e2))
    throw new Error(
      "Invalid name"
      /* INVALID */
    );
  return true;
}
function BM(e2) {
  if (!e2) return null;
  if (typeof e2 == "string")
    try {
      SC(e2);
    } catch (r) {
      return r.message;
    }
}
function HM(e2, r) {
  let n = "";
  if (["array", "object"].includes(r))
    try {
      const o = JSON.parse(e2);
      r === "array" && (!Array.isArray(o) || !Xe.isObject(o)) && (n = `Invalid value for type ${r}`), r === "object" && (!Xe.isObject(o) || Array.isArray(o)) && (n = `Invalid value for type ${r}`);
    } catch {
      n = `Invalid value for type ${r}`;
    }
  return r === "date" && (new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
  ).test(e2) || (n = `Invalid value for type ${r}`)), r === "number" && isNaN(+e2) && (n = `Invalid value for type ${r}`), ["boolean", "bool"].includes(r) && typeof e2 != "boolean" && !["true", "false"].includes(e2) && (n = `Invalid value for type ${r}`), n;
}
function Xl(e2) {
  const r = new RegExp(
    ':(?!4D\\.\\w+)[CPK]?\\d+(?=(?:[^"{}\\[\\]\\\\]*(?:\\\\.|"(?:[^"{}\\[\\]\\\\]*\\\\.)*[^"{}\\[\\]\\\\]*"))*[^"}\\]]*$)',
    "gm"
  );
  return e2.replace(r, "");
}
var Tm = /* @__PURE__ */ ((e2) => (e2.METHODS = "method", e2.WEBFORMS = "webform", e2.CLASSES = "class", e2.WELCOME = "welcome", e2.SETTINGS = "settings", e2.ROOT = "root", e2.REPORTS = "report", e2))(Tm || {});
const On = {
  CLASSES: "Classes",
  METHODS: "Methods",
  SHARED: "Shared",
  WEBFORMS: "WebForms",
  CLASSES_FOLDER: "ClassesFolder",
  REPORTS: "Reports",
  DEBUGGER: "Debugger"
};
var sr = /* @__PURE__ */ ((e2) => (e2.FOLDER = "folder", e2.WEBFORM = "webform", e2.REPORT = "report", e2.METHOD = "method", e2.CLASS = "class", e2.CLASS_FOLDER = "classfolder", e2.DEBUGGER = "debugger", e2.WELCOME = "welcome", e2.SETTINGS = "settings", e2.METHODS = "method", e2.WEBFORMS = "webform", e2.CLASSES = "class", e2.DEBUGGERS = "debugger", e2.MODELS = "models", e2.ROLES = "roles", e2.HTTP_HANDLERS = "http-handlers", e2.LOCALIZATION = "localization", e2.MODEL = "model", e2.DATA_EXPLORER = "dataexplorer", e2.MOBILE = "mobile", e2.MOBILEFORM = "mform", e2.FILE = "file", e2.TEXT = "text", e2))(sr || {}), pi = /* @__PURE__ */ ((e2) => (e2.GET_FOLDER = "getFolder", e2.GET = "get", e2.SAVE = "save", e2.RENAME = "rename", e2.DROP = "drop", e2.ADD_FOLDER = "addFolder", e2.CREATE_FOLDER = "mkdir", e2.RENAME_FOLDER = "renameFolder", e2.DROP_FOLDER = "dropFolder", e2.REMOVE_ITEM = "removeItem", e2.MOVE_ITEM = "moveItem", e2.GET_INFO = "getInfo", e2.SAVE_CONTENT = "save", e2.UPDATE_CHECK = "update:check", e2.UPDATE_INSTALL = "update:install", e2.GET_APP_SETTINGS = "getWebServerInfo", e2.GET_FILE_CONTENT = "getFileContent", e2.SET_FILE_CONTENT = "setFileContent", e2.GET_FILES_INFO = "getFilesInfo", e2))(pi || {}), Pm = /* @__PURE__ */ ((e2) => (e2[e2.DISABLED = 0] = "DISABLED", e2[e2.ENABLED = 1] = "ENABLED", e2))(Pm || {});
const _C = "roles.json", EC = "qodlyApp.json", jM = "model.4DModel", xC = "HTTPHandlers.json", qM = "Localization/i18n";
function OC(e2) {
  const r = e2.split("."), n = r.pop(), o = r.join(".").split("/")[0];
  switch (true) {
    case n === "4DModel":
      return sr.MODEL;
    case n === "WebForm":
      return sr.WEBFORM;
    case (["4dm", "4qs", "4qm"].includes(n) && o === On.METHODS):
      return sr.METHOD;
    case (["4dm", "4qs", "4qm"].includes(n) && o === On.CLASSES):
      return sr.CLASS;
    case e2 === _C:
      return sr.ROLES;
    case e2 === xC:
      return sr.HTTP_HANDLERS;
    case e2 === EC:
      return sr.SETTINGS;
    default:
      return sr.TEXT;
  }
}
function ZM(e2, r = false) {
  switch (e2) {
    case On.REPORTS:
    case "report":
      return "QoDoc";
    case On.WEBFORMS:
    case "webform":
      return "WebForm";
    case "Mobile":
    case "mform":
      return "MForm";
    case "class":
    case "method":
    case On.CLASSES:
    case On.METHODS:
      return r ? "4qs" : "4dm";
    default:
      return "";
  }
}
function KM(e2, r = "") {
  const n = new RegExp("(?<=\\/)(\\w+)(?=\\.)").exec(e2);
  return n ? n[1] : r;
}
class AC {
  constructor() {
    this.current = Promise.resolve();
  }
  lock() {
    let r;
    const n = new Promise((a) => {
      r = a;
    }), o = this.current.then(() => r);
    return this.current = n, o;
  }
}
function TC() {
  const e2 = new AC();
  return async (r) => {
    const n = await e2.lock();
    try {
      const o = await r();
      return n(), o;
    } catch (o) {
      console.error(o), n();
      return;
    }
  };
}
const PC = Xe.curry(
  (e2, r, n) => e2 && Xe.get(n, e2) === r
), GM = Xe.curry((e2, r, n) => Xe.get(n, e2) !== r), VM = Xe.curry((e2, r) => Xe.get(r, "id") !== e2), YM = Xe.curry((e2, r) => Xe.get(r, "id") === e2), XM = Xe.curry((e2, r) => Xe.get(r, "path") === e2);
function JM(e2 = "id", r, n) {
  return n.findIndex(PC(e2, r)) !== -1;
}
function QM(e2) {
  if (!e2) return "";
  const { id: r, namespace: n } = e2;
  return n && r ? `${n}:${r}` : r;
}
function CC(e2) {
  return [
    "bool",
    "word",
    "string",
    "text",
    "uuid",
    "short",
    "long",
    "number",
    "long64",
    "duration",
    "object",
    "date",
    "image",
    "blob"
  ].includes(e2.type || "");
}
function eI(e2) {
  return e2.type === "object";
}
function RC(e2) {
  var r;
  return e2.kind === "relatedEntities" || ((r = e2.type) == null ? void 0 : r.includes("Selection")) || e2.behavior === "relatedEntities";
}
function MC(e2) {
  return e2.kind === "relatedEntity" || e2.behavior === "relatedEntity" || !CC(e2);
}
function tI(e2) {
  return RC(e2) || MC(e2);
}
function rI(e2) {
  return e2.applyTo === "dataStore";
}
function nI(e2) {
  return e2.applyTo === "dataClass";
}
function iI(e2) {
  return e2.applyTo === "entity";
}
function oI(e2) {
  return e2.applyTo === "entityCollection";
}
function aI(e2) {
  return e2.type === "entity";
}
function sI(e2) {
  return e2.type === "entitysel";
}
function IC(e2) {
  return e2.dataType === "array";
}
function LC(e2) {
  return e2.dataType === "object";
}
function FC(e2) {
  return e2.type === "scalar";
}
function uI(e2) {
  return IC(e2) || LC(e2) || FC(e2);
}
const lI = (e2) => e2 != null && e2.type === "entity", fI = (e2) => e2.type === "entitysel", cI = (e2) => e2.type === "array" || e2.type === "scalar" && e2.dataType === "array", dI = (e2) => e2.type === "object" || e2.type === "scalar" && e2.dataType === "object", pI = (e2) => e2.type === "scalar" && e2.dataType === "date";
function hI() {
  return new Promise((e2, r) => {
    window.addEventListener("bundle:ready", (n) => n.data ? e2() : r(n.caughtErr));
  });
}
function vI() {
  return new Promise((e2) => {
    window.addEventListener("i18n:ready", () => e2());
  });
}
var Ha = /* @__PURE__ */ ((e2) => (e2.capable = "capable", e2.incapable = "incapable", e2.indifferent = "indifferent", e2))(Ha || {}), $C = /* @__PURE__ */ ((e2) => (e2.soap = "soap", e2.web = "web", e2.sql = "sql", e2.rest = "rest", e2))($C || {}), Cm = /* @__PURE__ */ ((e2) => (e2.table = "table", e2.catalog = "catalog", e2.currentRecord = "currentRecord", e2.currentSelection = "currentSelection", e2))(Cm || {});
const mI = {
  publishedSoap: "soap",
  publishedWeb: "web",
  publishedSql: "sql",
  publishedRest: "rest"
  /* rest */
};
function gI(e2) {
  var u;
  let r = {};
  try {
    const f = ((u = e2.match(/\/\/%attributes = (.*)/)) == null ? void 0 : u[1]) || "";
    r = JSON.parse(f);
  } catch {
  }
  const { published4DMobile: n, ...o } = r;
  return {
    ...{
      invisible: false,
      shared: false,
      executedOnServer: false,
      preemptive: Ha.indifferent,
      publishedSoap: false,
      publishedWsdl: false,
      publishedWeb: false,
      publishedSql: false,
      publishedRest: !!n,
      publishedRestOptions: n || {
        table: "",
        scope: Cm.table
      }
    },
    ...o
  };
}
function DC(e2) {
  const r = {};
  return e2.invisible && (r.invisible = true), e2.shared && (r.shared = true), e2.executedOnServer && (r.executedOnServer = true), e2.preemptive && [Ha.capable, Ha.incapable].includes(e2.preemptive) && (r.preemptive = e2.preemptive), e2.publishedSoap && (r.publishedSoap = true, e2.publishedWsdl && (r.publishedWsdl = true)), e2.publishedWeb && (r.publishedWeb = true), e2.publishedSql && (r.publishedSql = true), e2.publishedRest && e2.publishedRestOptions && (r.published4DMobile = e2.publishedRestOptions), JSON.stringify(r).replace(/"(true|false)"/g, "$1");
}
function yI(e2, r, n = false) {
  const o = Xe.isString(r) ? r : DC(r);
  if (!n && NC(e2))
    return e2;
  const a = kC(e2);
  return `//%attributes = ${o}\r
${a}`;
}
function NC(e2) {
  return /^\/\/%attributes.*(?:\r\n|\n)?/g.test(e2);
}
function kC(e2) {
  return e2.replace(/^\/\/%attributes.*(?:\r\n|\n)?/g, "");
}
const wI = () => Ul.uuid().replaceAll("-", "").toUpperCase(), lt = "/rest/$designer", rs = "/rest/$designer-ext";
function bI(...e2) {
  return (r) => {
    if (e2.length === 0)
      return r;
    const n = { ...r };
    return e2.forEach((o) => {
      typeof n[o] == "string" && (n[o] = new Date(n[o]));
    }), n;
  };
}
class Rh extends Error {
  constructor(r, n, o) {
    super(), this.url = r, this.response = n, this.data = o;
  }
  log() {
    console.error("Error while sending the request", this);
  }
}
async function De(e2, r) {
  const n = await window.fetch(e2, r);
  if (/401/.test(n.status.toString()) && (window.location.href = "/login.html?redirect=studio"), /^[45]/.test(n.status.toString())) {
    let a;
    try {
      const u = await n.json();
      a = new Rh(e2, n, u);
    } catch {
      a = new Rh(e2, n);
    }
    throw a.log(), a;
  }
  return await n.json();
}
var vr = {}, dt = {}, Mh;
function An() {
  if (Mh) return dt;
  Mh = 1;
  var e2 = dt.ValidationError = function(c, g, b, E, x, P) {
    if (Array.isArray(E) ? (this.path = E, this.property = E.reduce(function(M, B) {
      return M + d(B);
    }, "instance")) : E !== void 0 && (this.property = E), c && (this.message = c), b) {
      var T = b.$id || b.id;
      this.schema = T || b;
    }
    g !== void 0 && (this.instance = g), this.name = x, this.argument = P, this.stack = this.toString();
  };
  e2.prototype.toString = function() {
    return this.property + " " + this.message;
  };
  var r = dt.ValidatorResult = function(c, g, b, E) {
    this.instance = c, this.schema = g, this.options = b, this.path = E.path, this.propertyPath = E.propertyPath, this.errors = [], this.throwError = b && b.throwError, this.throwFirst = b && b.throwFirst, this.throwAll = b && b.throwAll, this.disableFormat = b && b.disableFormat === true;
  };
  r.prototype.addError = function(c) {
    var g;
    if (typeof c == "string")
      g = new e2(c, this.instance, this.schema, this.path);
    else {
      if (!c) throw new Error("Missing error detail");
      if (!c.message) throw new Error("Missing error message");
      if (!c.name) throw new Error("Missing validator type");
      g = new e2(c.message, this.instance, this.schema, this.path, c.name, c.argument);
    }
    if (this.errors.push(g), this.throwFirst)
      throw new o(this);
    if (this.throwError)
      throw g;
    return g;
  }, r.prototype.importErrors = function(c) {
    typeof c == "string" || c && c.validatorType ? this.addError(c) : c && c.errors && (this.errors = this.errors.concat(c.errors));
  };
  function n(m, c) {
    return c + ": " + m.toString() + `
`;
  }
  r.prototype.toString = function(c) {
    return this.errors.map(n).join("");
  }, Object.defineProperty(r.prototype, "valid", { get: function() {
    return !this.errors.length;
  } }), dt.ValidatorResultError = o;
  function o(m) {
    typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, o), this.instance = m.instance, this.schema = m.schema, this.options = m.options, this.errors = m.errors;
  }
  o.prototype = new Error(), o.prototype.constructor = o, o.prototype.name = "Validation Error";
  var a = dt.SchemaError = function m(c, g) {
    this.message = c, this.schema = g, Error.call(this, c), typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, m);
  };
  a.prototype = Object.create(
    Error.prototype,
    {
      constructor: { value: a, enumerable: false },
      name: { value: "SchemaError", enumerable: false }
    }
  );
  var u = dt.SchemaContext = function(c, g, b, E, x) {
    this.schema = c, this.options = g, Array.isArray(b) ? (this.path = b, this.propertyPath = b.reduce(function(P, T) {
      return P + d(T);
    }, "instance")) : this.propertyPath = b, this.base = E, this.schemas = x;
  };
  u.prototype.resolve = function(c) {
    return p(this.base, c);
  }, u.prototype.makeChild = function(c, g) {
    var b = g === void 0 ? this.path : this.path.concat([g]), E = c.$id || c.id;
    let x = p(this.base, E || "");
    var P = new u(c, this.options, b, x, Object.create(this.schemas));
    return E && !P.schemas[x] && (P.schemas[x] = c), P;
  };
  var f = dt.FORMAT_REGEXPS = {
    // 7.3.1. Dates, Times, and Duration
    "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
    date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
    time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
    duration: /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
    // 7.3.2. Email Addresses
    // TODO: fix the email production
    email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
    // 7.3.3. Hostnames
    // 7.3.4. IP Addresses
    "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    // FIXME whitespace is invalid
    ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    // 7.3.5. Resource Identifiers
    // TODO: A more accurate regular expression for "uri" goes:
    // [A-Za-z][+\-.0-9A-Za-z]*:((/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?)?#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])|/?%[0-9A-Fa-f]{2}|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*(#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?)?
    uri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
    iri: /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
    uuid: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    // 7.3.6. uri-template
    "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
    // 7.3.7. JSON Pointers
    "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
    "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
    // hostname regex from: http://stackoverflow.com/a/1420225/5628
    hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "utc-millisec": function(m) {
      return typeof m == "string" && parseFloat(m) === parseInt(m, 10) && !isNaN(m);
    },
    // 7.3.8. regex
    regex: function(m) {
      var c = true;
      try {
        new RegExp(m);
      } catch {
        c = false;
      }
      return c;
    },
    // Other definitions
    // "style" was removed from JSON Schema in draft-4 and is deprecated
    style: /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
    // "color" was removed from JSON Schema in draft-4 and is deprecated
    color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    phone: /^\+(?:[0-9] ?){6,14}[0-9]$/,
    alpha: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/
  };
  f.regexp = f.regex, f.pattern = f.regex, f.ipv4 = f["ip-address"], dt.isFormat = function(c, g, b) {
    if (typeof c == "string" && f[g] !== void 0) {
      if (f[g] instanceof RegExp)
        return f[g].test(c);
      if (typeof f[g] == "function")
        return f[g](c);
    } else if (b && b.customFormats && typeof b.customFormats[g] == "function")
      return b.customFormats[g](c);
    return true;
  };
  var d = dt.makeSuffix = function(c) {
    return c = c.toString(), !c.match(/[.\s\[\]]/) && !c.match(/^[\d]/) ? "." + c : c.match(/^\d+$/) ? "[" + c + "]" : "[" + JSON.stringify(c) + "]";
  };
  dt.deepCompareStrict = function m(c, g) {
    if (typeof c != typeof g)
      return false;
    if (Array.isArray(c))
      return !Array.isArray(g) || c.length !== g.length ? false : c.every(function(x, P) {
        return m(c[P], g[P]);
      });
    if (typeof c == "object") {
      if (!c || !g)
        return c === g;
      var b = Object.keys(c), E = Object.keys(g);
      return b.length !== E.length ? false : b.every(function(x) {
        return m(c[x], g[x]);
      });
    }
    return c === g;
  };
  function w(m, c, g, b) {
    typeof g == "object" ? c[b] = h(m[b], g) : m.indexOf(g) === -1 && c.push(g);
  }
  function S(m, c, g) {
    c[g] = m[g];
  }
  function y(m, c, g, b) {
    typeof c[b] != "object" || !c[b] ? g[b] = c[b] : m[b] ? g[b] = h(m[b], c[b]) : g[b] = c[b];
  }
  function h(m, c) {
    var g = Array.isArray(c), b = g && [] || {};
    return g ? (m = m || [], b = b.concat(m), c.forEach(w.bind(null, m, b))) : (m && typeof m == "object" && Object.keys(m).forEach(S.bind(null, m, b)), Object.keys(c).forEach(y.bind(null, m, c, b))), b;
  }
  dt.deepMerge = h, dt.objectGetPath = function(c, g) {
    for (var b = g.split("/").slice(1), E; typeof (E = b.shift()) == "string"; ) {
      var x = decodeURIComponent(E.replace(/~0/, "~").replace(/~1/g, "/"));
      if (!(x in c)) return;
      c = c[x];
    }
    return c;
  };
  function l(m) {
    return "/" + encodeURIComponent(m).replace(/~/g, "%7E");
  }
  dt.encodePath = function(c) {
    return c.map(l).join("");
  }, dt.getDecimalPlaces = function(c) {
    var g = 0;
    if (isNaN(c)) return g;
    typeof c != "number" && (c = Number(c));
    var b = c.toString().split("e");
    if (b.length === 2) {
      if (b[1][0] !== "-")
        return g;
      g = Number(b[1].slice(1));
    }
    var E = b[0].split(".");
    return E.length === 2 && (g += E[1].length), g;
  }, dt.isSchema = function(c) {
    return typeof c == "object" && c || typeof c == "boolean";
  };
  var p = dt.resolveUrl = function(c, g) {
    const b = new URL(g, new URL(c, "resolve://"));
    if (b.protocol === "resolve:") {
      const { pathname: E, search: x, hash: P } = b;
      return E + x + P;
    }
    return b.toString();
  };
  return dt;
}
var ul, Ih;
function WC() {
  if (Ih) return ul;
  Ih = 1;
  var e2 = An(), r = e2.ValidatorResult, n = e2.SchemaError, o = {};
  o.ignoreProperties = {
    // informative properties
    id: true,
    default: true,
    description: true,
    title: true,
    // arguments to other properties
    additionalItems: true,
    then: true,
    else: true,
    // special-handled properties
    $schema: true,
    $ref: true,
    extends: true
  };
  var a = o.validators = {};
  a.type = function(h, l, p, m) {
    if (h === void 0)
      return null;
    var c = new r(h, l, p, m), g = Array.isArray(l.type) ? l.type : [l.type];
    if (!g.some(this.testType.bind(this, h, l, p, m))) {
      var b = g.map(function(E) {
        if (E) {
          var x = E.$id || E.id;
          return x ? "<" + x + ">" : E + "";
        }
      });
      c.addError({
        name: "type",
        argument: b,
        message: "is not of a type(s) " + b
      });
    }
    return c;
  };
  function u(y, h, l, p, m) {
    var c = h.throwError, g = h.throwAll;
    h.throwError = false, h.throwAll = false;
    var b = this.validateSchema(y, m, h, l);
    return h.throwError = c, h.throwAll = g, !b.valid && p instanceof Function && p(b), b.valid;
  }
  a.anyOf = function(h, l, p, m) {
    if (h === void 0)
      return null;
    var c = new r(h, l, p, m), g = new r(h, l, p, m);
    if (!Array.isArray(l.anyOf))
      throw new n("anyOf must be an array");
    if (!l.anyOf.some(
      u.bind(
        this,
        h,
        p,
        m,
        function(E) {
          g.importErrors(E);
        }
      )
    )) {
      var b = l.anyOf.map(function(E, x) {
        var P = E.$id || E.id;
        return P ? "<" + P + ">" : E.title && JSON.stringify(E.title) || E.$ref && "<" + E.$ref + ">" || "[subschema " + x + "]";
      });
      p.nestedErrors && c.importErrors(g), c.addError({
        name: "anyOf",
        argument: b,
        message: "is not any of " + b.join(",")
      });
    }
    return c;
  }, a.allOf = function(h, l, p, m) {
    if (h === void 0)
      return null;
    if (!Array.isArray(l.allOf))
      throw new n("allOf must be an array");
    var c = new r(h, l, p, m), g = this;
    return l.allOf.forEach(function(b, E) {
      var x = g.validateSchema(h, b, p, m);
      if (!x.valid) {
        var P = b.$id || b.id, T = P || b.title && JSON.stringify(b.title) || b.$ref && "<" + b.$ref + ">" || "[subschema " + E + "]";
        c.addError({
          name: "allOf",
          argument: { id: T, length: x.errors.length, valid: x },
          message: "does not match allOf schema " + T + " with " + x.errors.length + " error[s]:"
        }), c.importErrors(x);
      }
    }), c;
  }, a.oneOf = function(h, l, p, m) {
    if (h === void 0)
      return null;
    if (!Array.isArray(l.oneOf))
      throw new n("oneOf must be an array");
    var c = new r(h, l, p, m), g = new r(h, l, p, m), b = l.oneOf.filter(
      u.bind(
        this,
        h,
        p,
        m,
        function(x) {
          g.importErrors(x);
        }
      )
    ).length, E = l.oneOf.map(function(x, P) {
      var T = x.$id || x.id;
      return T || x.title && JSON.stringify(x.title) || x.$ref && "<" + x.$ref + ">" || "[subschema " + P + "]";
    });
    return b !== 1 && (p.nestedErrors && c.importErrors(g), c.addError({
      name: "oneOf",
      argument: E,
      message: "is not exactly one from " + E.join(",")
    })), c;
  }, a.if = function(h, l, p, m) {
    if (h === void 0) return null;
    if (!e2.isSchema(l.if)) throw new Error('Expected "if" keyword to be a schema');
    var c = u.call(this, h, p, m, null, l.if), g = new r(h, l, p, m), b;
    if (c) {
      if (l.then === void 0) return;
      if (!e2.isSchema(l.then)) throw new Error('Expected "then" keyword to be a schema');
      b = this.validateSchema(h, l.then, p, m.makeChild(l.then)), g.importErrors(b);
    } else {
      if (l.else === void 0) return;
      if (!e2.isSchema(l.else)) throw new Error('Expected "else" keyword to be a schema');
      b = this.validateSchema(h, l.else, p, m.makeChild(l.else)), g.importErrors(b);
    }
    return g;
  };
  function f(y, h) {
    if (Object.hasOwnProperty.call(y, h)) return y[h];
    if (h in y) {
      for (; y = Object.getPrototypeOf(y); )
        if (Object.propertyIsEnumerable.call(y, h)) return y[h];
    }
  }
  a.propertyNames = function(h, l, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, l, p, m), g = l.propertyNames !== void 0 ? l.propertyNames : {};
      if (!e2.isSchema(g)) throw new n('Expected "propertyNames" to be a schema (object or boolean)');
      for (var b in h)
        if (f(h, b) !== void 0) {
          var E = this.validateSchema(b, g, p, m.makeChild(g));
          c.importErrors(E);
        }
      return c;
    }
  }, a.properties = function(h, l, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, l, p, m), g = l.properties || {};
      for (var b in g) {
        var E = g[b];
        if (E !== void 0) {
          if (E === null)
            throw new n('Unexpected null, expected schema in "properties"');
          typeof p.preValidateProperty == "function" && p.preValidateProperty(h, b, E, p, m);
          var x = f(h, b), P = this.validateSchema(x, E, p, m.makeChild(E, b));
          P.instance !== c.instance[b] && (c.instance[b] = P.instance), c.importErrors(P);
        }
      }
      return c;
    }
  };
  function d(y, h, l, p, m, c) {
    if (this.types.object(y) && !(h.properties && h.properties[m] !== void 0))
      if (h.additionalProperties === false)
        c.addError({
          name: "additionalProperties",
          argument: m,
          message: "is not allowed to have the additional property " + JSON.stringify(m)
        });
      else {
        var g = h.additionalProperties || {};
        typeof l.preValidateProperty == "function" && l.preValidateProperty(y, m, g, l, p);
        var b = this.validateSchema(y[m], g, l, p.makeChild(g, m));
        b.instance !== c.instance[m] && (c.instance[m] = b.instance), c.importErrors(b);
      }
  }
  a.patternProperties = function(h, l, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, l, p, m), g = l.patternProperties || {};
      for (var b in h) {
        var E = true;
        for (var x in g) {
          var P = g[x];
          if (P !== void 0) {
            if (P === null)
              throw new n('Unexpected null, expected schema in "patternProperties"');
            try {
              var T = new RegExp(x, "u");
            } catch {
              T = new RegExp(x);
            }
            if (T.test(b)) {
              E = false, typeof p.preValidateProperty == "function" && p.preValidateProperty(h, b, P, p, m);
              var M = this.validateSchema(h[b], P, p, m.makeChild(P, b));
              M.instance !== c.instance[b] && (c.instance[b] = M.instance), c.importErrors(M);
            }
          }
        }
        E && d.call(this, h, l, p, m, b, c);
      }
      return c;
    }
  }, a.additionalProperties = function(h, l, p, m) {
    if (this.types.object(h)) {
      if (l.patternProperties)
        return null;
      var c = new r(h, l, p, m);
      for (var g in h)
        d.call(this, h, l, p, m, g, c);
      return c;
    }
  }, a.minProperties = function(h, l, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, l, p, m), g = Object.keys(h);
      return g.length >= l.minProperties || c.addError({
        name: "minProperties",
        argument: l.minProperties,
        message: "does not meet minimum property length of " + l.minProperties
      }), c;
    }
  }, a.maxProperties = function(h, l, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, l, p, m), g = Object.keys(h);
      return g.length <= l.maxProperties || c.addError({
        name: "maxProperties",
        argument: l.maxProperties,
        message: "does not meet maximum property length of " + l.maxProperties
      }), c;
    }
  }, a.items = function(h, l, p, m) {
    var c = this;
    if (this.types.array(h) && l.items !== void 0) {
      var g = new r(h, l, p, m);
      return h.every(function(b, E) {
        if (Array.isArray(l.items))
          var x = l.items[E] === void 0 ? l.additionalItems : l.items[E];
        else
          var x = l.items;
        if (x === void 0)
          return true;
        if (x === false)
          return g.addError({
            name: "items",
            message: "additionalItems not permitted"
          }), false;
        var P = c.validateSchema(b, x, p, m.makeChild(x, E));
        return P.instance !== g.instance[E] && (g.instance[E] = P.instance), g.importErrors(P), true;
      }), g;
    }
  }, a.contains = function(h, l, p, m) {
    var c = this;
    if (this.types.array(h) && l.contains !== void 0) {
      if (!e2.isSchema(l.contains)) throw new Error('Expected "contains" keyword to be a schema');
      var g = new r(h, l, p, m), b = h.some(function(E, x) {
        var P = c.validateSchema(E, l.contains, p, m.makeChild(l.contains, x));
        return P.errors.length === 0;
      });
      return b === false && g.addError({
        name: "contains",
        argument: l.contains,
        message: "must contain an item matching given schema"
      }), g;
    }
  }, a.minimum = function(h, l, p, m) {
    if (this.types.number(h)) {
      var c = new r(h, l, p, m);
      return l.exclusiveMinimum && l.exclusiveMinimum === true ? h > l.minimum || c.addError({
        name: "minimum",
        argument: l.minimum,
        message: "must be greater than " + l.minimum
      }) : h >= l.minimum || c.addError({
        name: "minimum",
        argument: l.minimum,
        message: "must be greater than or equal to " + l.minimum
      }), c;
    }
  }, a.maximum = function(h, l, p, m) {
    if (this.types.number(h)) {
      var c = new r(h, l, p, m);
      return l.exclusiveMaximum && l.exclusiveMaximum === true ? h < l.maximum || c.addError({
        name: "maximum",
        argument: l.maximum,
        message: "must be less than " + l.maximum
      }) : h <= l.maximum || c.addError({
        name: "maximum",
        argument: l.maximum,
        message: "must be less than or equal to " + l.maximum
      }), c;
    }
  }, a.exclusiveMinimum = function(h, l, p, m) {
    if (typeof l.exclusiveMinimum != "boolean" && this.types.number(h)) {
      var c = new r(h, l, p, m), g = h > l.exclusiveMinimum;
      return g || c.addError({
        name: "exclusiveMinimum",
        argument: l.exclusiveMinimum,
        message: "must be strictly greater than " + l.exclusiveMinimum
      }), c;
    }
  }, a.exclusiveMaximum = function(h, l, p, m) {
    if (typeof l.exclusiveMaximum != "boolean" && this.types.number(h)) {
      var c = new r(h, l, p, m), g = h < l.exclusiveMaximum;
      return g || c.addError({
        name: "exclusiveMaximum",
        argument: l.exclusiveMaximum,
        message: "must be strictly less than " + l.exclusiveMaximum
      }), c;
    }
  };
  var w = function(h, l, p, m, c, g) {
    if (this.types.number(h)) {
      var b = l[c];
      if (b == 0)
        throw new n(c + " cannot be zero");
      var E = new r(h, l, p, m), x = e2.getDecimalPlaces(h), P = e2.getDecimalPlaces(b), T = Math.max(x, P), M = Math.pow(10, T);
      return Math.round(h * M) % Math.round(b * M) !== 0 && E.addError({
        name: c,
        argument: b,
        message: g + JSON.stringify(b)
      }), E;
    }
  };
  a.multipleOf = function(h, l, p, m) {
    return w.call(this, h, l, p, m, "multipleOf", "is not a multiple of (divisible by) ");
  }, a.divisibleBy = function(h, l, p, m) {
    return w.call(this, h, l, p, m, "divisibleBy", "is not divisible by (multiple of) ");
  }, a.required = function(h, l, p, m) {
    var c = new r(h, l, p, m);
    return h === void 0 && l.required === true ? c.addError({
      name: "required",
      message: "is required"
    }) : this.types.object(h) && Array.isArray(l.required) && l.required.forEach(function(g) {
      f(h, g) === void 0 && c.addError({
        name: "required",
        argument: g,
        message: "requires property " + JSON.stringify(g)
      });
    }), c;
  }, a.pattern = function(h, l, p, m) {
    if (this.types.string(h)) {
      var c = new r(h, l, p, m), g = l.pattern;
      try {
        var b = new RegExp(g, "u");
      } catch {
        b = new RegExp(g);
      }
      return h.match(b) || c.addError({
        name: "pattern",
        argument: l.pattern,
        message: "does not match pattern " + JSON.stringify(l.pattern.toString())
      }), c;
    }
  }, a.format = function(h, l, p, m) {
    if (h !== void 0) {
      var c = new r(h, l, p, m);
      return !c.disableFormat && !e2.isFormat(h, l.format, this) && c.addError({
        name: "format",
        argument: l.format,
        message: "does not conform to the " + JSON.stringify(l.format) + " format"
      }), c;
    }
  }, a.minLength = function(h, l, p, m) {
    if (this.types.string(h)) {
      var c = new r(h, l, p, m), g = h.match(/[\uDC00-\uDFFF]/g), b = h.length - (g ? g.length : 0);
      return b >= l.minLength || c.addError({
        name: "minLength",
        argument: l.minLength,
        message: "does not meet minimum length of " + l.minLength
      }), c;
    }
  }, a.maxLength = function(h, l, p, m) {
    if (this.types.string(h)) {
      var c = new r(h, l, p, m), g = h.match(/[\uDC00-\uDFFF]/g), b = h.length - (g ? g.length : 0);
      return b <= l.maxLength || c.addError({
        name: "maxLength",
        argument: l.maxLength,
        message: "does not meet maximum length of " + l.maxLength
      }), c;
    }
  }, a.minItems = function(h, l, p, m) {
    if (this.types.array(h)) {
      var c = new r(h, l, p, m);
      return h.length >= l.minItems || c.addError({
        name: "minItems",
        argument: l.minItems,
        message: "does not meet minimum length of " + l.minItems
      }), c;
    }
  }, a.maxItems = function(h, l, p, m) {
    if (this.types.array(h)) {
      var c = new r(h, l, p, m);
      return h.length <= l.maxItems || c.addError({
        name: "maxItems",
        argument: l.maxItems,
        message: "does not meet maximum length of " + l.maxItems
      }), c;
    }
  };
  function S(y, h, l) {
    var p, m = l.length;
    for (p = h + 1, m; p < m; p++)
      if (e2.deepCompareStrict(y, l[p]))
        return false;
    return true;
  }
  return a.uniqueItems = function(h, l, p, m) {
    if (l.uniqueItems === true && this.types.array(h)) {
      var c = new r(h, l, p, m);
      return h.every(S) || c.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
      }), c;
    }
  }, a.dependencies = function(h, l, p, m) {
    if (this.types.object(h)) {
      var c = new r(h, l, p, m);
      for (var g in l.dependencies)
        if (h[g] !== void 0) {
          var b = l.dependencies[g], E = m.makeChild(b, g);
          if (typeof b == "string" && (b = [b]), Array.isArray(b))
            b.forEach(function(P) {
              h[P] === void 0 && c.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: E.propertyPath,
                message: "property " + P + " not found, required by " + E.propertyPath
              });
            });
          else {
            var x = this.validateSchema(h, b, p, E);
            c.instance !== x.instance && (c.instance = x.instance), x && x.errors.length && (c.addError({
              name: "dependencies",
              argument: E.propertyPath,
              message: "does not meet dependency required by " + E.propertyPath
            }), c.importErrors(x));
          }
        }
      return c;
    }
  }, a.enum = function(h, l, p, m) {
    if (h === void 0)
      return null;
    if (!Array.isArray(l.enum))
      throw new n("enum expects an array", l);
    var c = new r(h, l, p, m);
    return l.enum.some(e2.deepCompareStrict.bind(null, h)) || c.addError({
      name: "enum",
      argument: l.enum,
      message: "is not one of enum values: " + l.enum.map(String).join(",")
    }), c;
  }, a.const = function(h, l, p, m) {
    if (h === void 0)
      return null;
    var c = new r(h, l, p, m);
    return e2.deepCompareStrict(l.const, h) || c.addError({
      name: "const",
      argument: l.const,
      message: "does not exactly match expected constant: " + l.const
    }), c;
  }, a.not = a.disallow = function(h, l, p, m) {
    var c = this;
    if (h === void 0) return null;
    var g = new r(h, l, p, m), b = l.not || l.disallow;
    return b ? (Array.isArray(b) || (b = [b]), b.forEach(function(E) {
      if (c.testType(h, l, p, m, E)) {
        var x = E && (E.$id || E.id), P = x || E;
        g.addError({
          name: "not",
          argument: P,
          message: "is of prohibited type " + P
        });
      }
    }), g) : null;
  }, ul = o, ul;
}
var Pa = {}, Lh;
function Tl() {
  if (Lh) return Pa;
  Lh = 1;
  var e2 = An();
  Pa.SchemaScanResult = r;
  function r(n, o) {
    this.id = n, this.ref = o;
  }
  return Pa.scan = function(o, a) {
    function u(y, h) {
      if (!h || typeof h != "object") return;
      if (h.$ref) {
        let c = e2.resolveUrl(y, h.$ref);
        S[c] = S[c] ? S[c] + 1 : 0;
        return;
      }
      var l = h.$id || h.id;
      let p = e2.resolveUrl(y, l);
      var m = l ? p : y;
      if (m) {
        if (m.indexOf("#") < 0 && (m += "#"), w[m]) {
          if (!e2.deepCompareStrict(w[m], h))
            throw new Error("Schema <" + m + "> already exists with different definition");
          return w[m];
        }
        w[m] = h, m[m.length - 1] == "#" && (w[m.substring(0, m.length - 1)] = h);
      }
      f(m + "/items", Array.isArray(h.items) ? h.items : [h.items]), f(m + "/extends", Array.isArray(h.extends) ? h.extends : [h.extends]), u(m + "/additionalItems", h.additionalItems), d(m + "/properties", h.properties), u(m + "/additionalProperties", h.additionalProperties), d(m + "/definitions", h.definitions), d(m + "/patternProperties", h.patternProperties), d(m + "/dependencies", h.dependencies), f(m + "/disallow", h.disallow), f(m + "/allOf", h.allOf), f(m + "/anyOf", h.anyOf), f(m + "/oneOf", h.oneOf), u(m + "/not", h.not);
    }
    function f(y, h) {
      if (Array.isArray(h))
        for (var l = 0; l < h.length; l++)
          u(y + "/" + l, h[l]);
    }
    function d(y, h) {
      if (!(!h || typeof h != "object"))
        for (var l in h)
          u(y + "/" + l, h[l]);
    }
    var w = {}, S = {};
    return u(o, a), new r(w, S);
  }, Pa;
}
var ll, Fh;
function UC() {
  if (Fh) return ll;
  Fh = 1;
  var e2 = WC(), r = An(), n = Tl().scan, o = r.ValidatorResult, a = r.ValidatorResultError, u = r.SchemaError, f = r.SchemaContext, d = "/", w = function h() {
    this.customFormats = Object.create(h.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(y), this.attributes = Object.create(e2.validators);
  };
  w.prototype.customFormats = {}, w.prototype.schemas = null, w.prototype.types = null, w.prototype.attributes = null, w.prototype.unresolvedRefs = null, w.prototype.addSchema = function(l, p) {
    var m = this;
    if (!l)
      return null;
    var c = n(p || d, l), g = p || l.$id || l.id;
    for (var b in c.id)
      this.schemas[b] = c.id[b];
    for (var b in c.ref)
      this.unresolvedRefs.push(b);
    return this.unresolvedRefs = this.unresolvedRefs.filter(function(E) {
      return typeof m.schemas[E] > "u";
    }), this.schemas[g];
  }, w.prototype.addSubSchemaArray = function(l, p) {
    if (Array.isArray(p))
      for (var m = 0; m < p.length; m++)
        this.addSubSchema(l, p[m]);
  }, w.prototype.addSubSchemaObject = function(l, p) {
    if (!(!p || typeof p != "object"))
      for (var m in p)
        this.addSubSchema(l, p[m]);
  }, w.prototype.setSchemas = function(l) {
    this.schemas = l;
  }, w.prototype.getSchema = function(l) {
    return this.schemas[l];
  }, w.prototype.validate = function(l, p, m, c) {
    if (typeof p != "boolean" && typeof p != "object" || p === null)
      throw new u("Expected `schema` to be an object or boolean");
    m || (m = {});
    var g = p.$id || p.id;
    let b = r.resolveUrl(m.base, g || "");
    if (!c) {
      c = new f(p, m, [], b, Object.create(this.schemas)), c.schemas[b] || (c.schemas[b] = p);
      var E = n(b, p);
      for (var x in E.id) {
        var P = E.id[x];
        c.schemas[x] = P;
      }
    }
    if (m.required && l === void 0) {
      var T = new o(l, p, m, c);
      return T.addError("is required, but is undefined"), T;
    }
    var T = this.validateSchema(l, p, m, c);
    if (T) {
      if (m.throwAll && T.errors.length)
        throw new a(T);
    } else throw new Error("Result undefined");
    return T;
  };
  function S(h) {
    var l = typeof h == "string" ? h : h.$ref;
    return typeof l == "string" ? l : false;
  }
  w.prototype.validateSchema = function(l, p, m, c) {
    var g = new o(l, p, m, c);
    if (typeof p == "boolean")
      p === true ? p = {} : p === false && (p = { type: [] });
    else if (!p)
      throw new Error("schema is undefined");
    if (p.extends)
      if (Array.isArray(p.extends)) {
        var b = { schema: p, ctx: c };
        p.extends.forEach(this.schemaTraverser.bind(this, b)), p = b.schema, b.schema = null, b.ctx = null, b = null;
      } else
        p = r.deepMerge(p, this.superResolve(p.extends, c));
    var E = S(p);
    if (E) {
      var x = this.resolve(p, E, c), P = new f(x.subschema, m, c.path, x.switchSchema, c.schemas);
      return this.validateSchema(l, x.subschema, m, P);
    }
    var T = m && m.skipAttributes || [];
    for (var M in p)
      if (!e2.ignoreProperties[M] && T.indexOf(M) < 0) {
        var B = null, F = this.attributes[M];
        if (F)
          B = F.call(this, l, p, m, c);
        else if (m.allowUnknownAttributes === false)
          throw new u("Unsupported attribute: " + M, p);
        B && g.importErrors(B);
      }
    if (typeof m.rewrite == "function") {
      var k = m.rewrite.call(this, l, p, m, c);
      g.instance = k;
    }
    return g;
  }, w.prototype.schemaTraverser = function(l, p) {
    l.schema = r.deepMerge(l.schema, this.superResolve(p, l.ctx));
  }, w.prototype.superResolve = function(l, p) {
    var m = S(l);
    return m ? this.resolve(l, m, p).subschema : l;
  }, w.prototype.resolve = function(l, p, m) {
    if (p = m.resolve(p), m.schemas[p])
      return { subschema: m.schemas[p], switchSchema: p };
    let g = new URL(p, "thismessage::/").hash;
    var b = g && g.length && p.substr(0, p.length - g.length);
    if (!b || !m.schemas[b])
      throw new u("no such schema <" + p + ">", l);
    var E = r.objectGetPath(m.schemas[b], g.substr(1));
    if (E === void 0)
      throw new u("no such schema " + g + " located in <" + b + ">", l);
    return { subschema: E, switchSchema: p };
  }, w.prototype.testType = function(l, p, m, c, g) {
    if (g !== void 0) {
      if (g === null)
        throw new u('Unexpected null in "type" keyword');
      if (typeof this.types[g] == "function")
        return this.types[g].call(this, l);
      if (g && typeof g == "object") {
        var b = this.validateSchema(l, g, m, c);
        return b === void 0 || !(b && b.errors.length);
      }
      return true;
    }
  };
  var y = w.prototype.types = {};
  return y.string = function(l) {
    return typeof l == "string";
  }, y.number = function(l) {
    return typeof l == "number" && isFinite(l);
  }, y.integer = function(l) {
    return typeof l == "number" && l % 1 === 0;
  }, y.boolean = function(l) {
    return typeof l == "boolean";
  }, y.array = function(l) {
    return Array.isArray(l);
  }, y.null = function(l) {
    return l === null;
  }, y.date = function(l) {
    return l instanceof Date;
  }, y.any = function(l) {
    return true;
  }, y.object = function(l) {
    return l && typeof l == "object" && !Array.isArray(l) && !(l instanceof Date);
  }, ll = w, ll;
}
var $h;
function zC() {
  if ($h) return vr;
  $h = 1;
  var e2 = vr.Validator = UC();
  return vr.ValidatorResult = An().ValidatorResult, vr.ValidatorResultError = An().ValidatorResultError, vr.ValidationError = An().ValidationError, vr.SchemaError = An().SchemaError, vr.SchemaScanResult = Tl().SchemaScanResult, vr.scan = Tl().scan, vr.validate = function(r, n, o) {
    var a = new e2();
    return a.validate(r, n, o);
  }, vr;
}
var BC = zC();
const Rm = (e2, r, n) => {
  const o = e2 instanceof RegExp ? Dh(e2, n) : e2, a = r instanceof RegExp ? Dh(r, n) : r, u = o !== null && a != null && HC(o, a, n);
  return u && {
    start: u[0],
    end: u[1],
    pre: n.slice(0, u[0]),
    body: n.slice(u[0] + o.length, u[1]),
    post: n.slice(u[1] + a.length)
  };
}, Dh = (e2, r) => {
  const n = r.match(e2);
  return n ? n[0] : null;
}, HC = (e2, r, n) => {
  let o, a, u, f, d, w = n.indexOf(e2), S = n.indexOf(r, w + 1), y = w;
  if (w >= 0 && S > 0) {
    if (e2 === r)
      return [w, S];
    for (o = [], u = n.length; y >= 0 && !d; ) {
      if (y === w)
        o.push(y), w = n.indexOf(e2, y + 1);
      else if (o.length === 1) {
        const h = o.pop();
        h !== void 0 && (d = [h, S]);
      } else
        a = o.pop(), a !== void 0 && a < u && (u = a, f = S), S = n.indexOf(r, y + 1);
      y = w < S && w >= 0 ? w : S;
    }
    o.length && f !== void 0 && (d = [u, f]);
  }
  return d;
}, Mm = "\0SLASH" + Math.random() + "\0", Im = "\0OPEN" + Math.random() + "\0", Jl = "\0CLOSE" + Math.random() + "\0", Lm = "\0COMMA" + Math.random() + "\0", Fm = "\0PERIOD" + Math.random() + "\0", jC = new RegExp(Mm, "g"), qC = new RegExp(Im, "g"), ZC = new RegExp(Jl, "g"), KC = new RegExp(Lm, "g"), GC = new RegExp(Fm, "g"), VC = /\\\\/g, YC = /\\{/g, XC = /\\}/g, JC = /\\,/g, QC = /\\./g;
function fl(e2) {
  return isNaN(e2) ? e2.charCodeAt(0) : parseInt(e2, 10);
}
function eR(e2) {
  return e2.replace(VC, Mm).replace(YC, Im).replace(XC, Jl).replace(JC, Lm).replace(QC, Fm);
}
function tR(e2) {
  return e2.replace(jC, "\\").replace(qC, "{").replace(ZC, "}").replace(KC, ",").replace(GC, ".");
}
function $m(e2) {
  if (!e2)
    return [""];
  const r = [], n = Rm("{", "}", e2);
  if (!n)
    return e2.split(",");
  const { pre: o, body: a, post: u } = n, f = o.split(",");
  f[f.length - 1] += "{" + a + "}";
  const d = $m(u);
  return u.length && (f[f.length - 1] += d.shift(), f.push.apply(f, d)), r.push.apply(r, f), r;
}
function rR(e2) {
  return e2 ? (e2.slice(0, 2) === "{}" && (e2 = "\\{\\}" + e2.slice(2)), no(eR(e2), true).map(tR)) : [];
}
function nR(e2) {
  return "{" + e2 + "}";
}
function iR(e2) {
  return /^-?0\d/.test(e2);
}
function oR(e2, r) {
  return e2 <= r;
}
function aR(e2, r) {
  return e2 >= r;
}
function no(e2, r) {
  const n = [], o = Rm("{", "}", e2);
  if (!o)
    return [e2];
  const a = o.pre, u = o.post.length ? no(o.post, false) : [""];
  if (/\$$/.test(o.pre))
    for (let f = 0; f < u.length; f++) {
      const d = a + "{" + o.body + "}" + u[f];
      n.push(d);
    }
  else {
    const f = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body), d = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body), w = f || d, S = o.body.indexOf(",") >= 0;
    if (!w && !S)
      return o.post.match(/,(?!,).*\}/) ? (e2 = o.pre + "{" + o.body + Jl + o.post, no(e2)) : [e2];
    let y;
    if (w)
      y = o.body.split(/\.\./);
    else if (y = $m(o.body), y.length === 1 && y[0] !== void 0 && (y = no(y[0], false).map(nR), y.length === 1))
      return u.map((l) => o.pre + y[0] + l);
    let h;
    if (w && y[0] !== void 0 && y[1] !== void 0) {
      const l = fl(y[0]), p = fl(y[1]), m = Math.max(y[0].length, y[1].length);
      let c = y.length === 3 && y[2] !== void 0 ? Math.abs(fl(y[2])) : 1, g = oR;
      p < l && (c *= -1, g = aR);
      const E = y.some(iR);
      h = [];
      for (let x = l; g(x, p); x += c) {
        let P;
        if (d)
          P = String.fromCharCode(x), P === "\\" && (P = "");
        else if (P = String(x), E) {
          const T = m - P.length;
          if (T > 0) {
            const M = new Array(T + 1).join("0");
            x < 0 ? P = "-" + M + P.slice(1) : P = M + P;
          }
        }
        h.push(P);
      }
    } else {
      h = [];
      for (let l = 0; l < y.length; l++)
        h.push.apply(h, no(y[l], false));
    }
    for (let l = 0; l < h.length; l++)
      for (let p = 0; p < u.length; p++) {
        const m = a + h[l] + u[p];
        (!r || w || m) && n.push(m);
      }
  }
  return n;
}
const sR = 1024 * 64, ja = (e2) => {
  if (typeof e2 != "string")
    throw new TypeError("invalid pattern");
  if (e2.length > sR)
    throw new TypeError("pattern is too long");
}, uR = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
  "[:alpha:]": ["\\p{L}\\p{Nl}", true],
  "[:ascii:]": ["\\x00-\\x7f", false],
  "[:blank:]": ["\\p{Zs}\\t", true],
  "[:cntrl:]": ["\\p{Cc}", true],
  "[:digit:]": ["\\p{Nd}", true],
  "[:graph:]": ["\\p{Z}\\p{C}", true, true],
  "[:lower:]": ["\\p{Ll}", true],
  "[:print:]": ["\\p{C}", true],
  "[:punct:]": ["\\p{P}", true],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
  "[:upper:]": ["\\p{Lu}", true],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
  "[:xdigit:]": ["A-Fa-f0-9", false]
}, Qi = (e2) => e2.replace(/[[\]\\-]/g, "\\$&"), lR = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Nh = (e2) => e2.join(""), fR = (e2, r) => {
  const n = r;
  if (e2.charAt(n) !== "[")
    throw new Error("not in a brace expression");
  const o = [], a = [];
  let u = n + 1, f = false, d = false, w = false, S = false, y = n, h = "";
  e: for (; u < e2.length; ) {
    const c = e2.charAt(u);
    if ((c === "!" || c === "^") && u === n + 1) {
      S = true, u++;
      continue;
    }
    if (c === "]" && f && !w) {
      y = u + 1;
      break;
    }
    if (f = true, c === "\\" && !w) {
      w = true, u++;
      continue;
    }
    if (c === "[" && !w) {
      for (const [g, [b, E, x]] of Object.entries(uR))
        if (e2.startsWith(g, u)) {
          if (h)
            return ["$.", false, e2.length - n, true];
          u += g.length, x ? a.push(b) : o.push(b), d = d || E;
          continue e;
        }
    }
    if (w = false, h) {
      c > h ? o.push(Qi(h) + "-" + Qi(c)) : c === h && o.push(Qi(c)), h = "", u++;
      continue;
    }
    if (e2.startsWith("-]", u + 1)) {
      o.push(Qi(c + "-")), u += 2;
      continue;
    }
    if (e2.startsWith("-", u + 1)) {
      h = c, u += 2;
      continue;
    }
    o.push(Qi(c)), u++;
  }
  if (y < u)
    return ["", false, 0, false];
  if (!o.length && !a.length)
    return ["$.", false, e2.length - n, true];
  if (a.length === 0 && o.length === 1 && /^\\?.$/.test(o[0]) && !S) {
    const c = o[0].length === 2 ? o[0].slice(-1) : o[0];
    return [lR(c), false, y - n, false];
  }
  const l = "[" + (S ? "^" : "") + Nh(o) + "]", p = "[" + (S ? "" : "^") + Nh(a) + "]";
  return [o.length && a.length ? "(" + l + "|" + p + ")" : o.length ? l : p, d, y - n, true];
}, io = (e2, { windowsPathsNoEscape: r = false } = {}) => r ? e2.replace(/\[([^\/\\])\]/g, "$1") : e2.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), cR = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), kh = (e2) => cR.has(e2), dR = "(?!(?:^|/)\\.\\.?(?:$|/))", Ca = "(?!\\.)", pR = /* @__PURE__ */ new Set(["[", "."]), hR = /* @__PURE__ */ new Set(["..", "."]), vR = new Set("().*{}+?[]^$\\!"), mR = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Ql = "[^/]", Wh = Ql + "*?", Uh = Ql + "+?";
var rt, st, Nr, Ue, Ye, on, Tn, an, mr, Pn, ho, Fn, Dm, un, Da, Pl, Nm;
const Et = class Et2 {
  constructor(r, n, o = {}) {
    Pt(this, Fn);
    tt(this, "type");
    Pt(this, rt);
    Pt(this, st);
    Pt(this, Nr, false);
    Pt(this, Ue, []);
    Pt(this, Ye);
    Pt(this, on);
    Pt(this, Tn);
    Pt(this, an, false);
    Pt(this, mr);
    Pt(this, Pn);
    Pt(this, ho, false);
    this.type = r, r && Ve(this, st, true), Ve(this, Ye, n), Ve(this, rt, te(this, Ye) ? te(te(this, Ye), rt) : this), Ve(this, mr, te(this, rt) === this ? o : te(te(this, rt), mr)), Ve(this, Tn, te(this, rt) === this ? [] : te(te(this, rt), Tn)), r === "!" && !te(te(this, rt), an) && te(this, Tn).push(this), Ve(this, on, te(this, Ye) ? te(te(this, Ye), Ue).length : 0);
  }
  get hasMagic() {
    if (te(this, st) !== void 0)
      return te(this, st);
    for (const r of te(this, Ue))
      if (typeof r != "string" && (r.type || r.hasMagic))
        return Ve(this, st, true);
    return te(this, st);
  }
  // reconstructs the pattern
  toString() {
    return te(this, Pn) !== void 0 ? te(this, Pn) : this.type ? Ve(this, Pn, this.type + "(" + te(this, Ue).map((r) => String(r)).join("|") + ")") : Ve(this, Pn, te(this, Ue).map((r) => String(r)).join(""));
  }
  push(...r) {
    for (const n of r)
      if (n !== "") {
        if (typeof n != "string" && !(n instanceof Et2 && te(n, Ye) === this))
          throw new Error("invalid part: " + n);
        te(this, Ue).push(n);
      }
  }
  toJSON() {
    var n;
    const r = this.type === null ? te(this, Ue).slice().map((o) => typeof o == "string" ? o : o.toJSON()) : [this.type, ...te(this, Ue).map((o) => o.toJSON())];
    return this.isStart() && !this.type && r.unshift([]), this.isEnd() && (this === te(this, rt) || te(te(this, rt), an) && ((n = te(this, Ye)) == null ? void 0 : n.type) === "!") && r.push({}), r;
  }
  isStart() {
    var n;
    if (te(this, rt) === this)
      return true;
    if (!((n = te(this, Ye)) != null && n.isStart()))
      return false;
    if (te(this, on) === 0)
      return true;
    const r = te(this, Ye);
    for (let o = 0; o < te(this, on); o++) {
      const a = te(r, Ue)[o];
      if (!(a instanceof Et2 && a.type === "!"))
        return false;
    }
    return true;
  }
  isEnd() {
    var n, o, a;
    if (te(this, rt) === this || ((n = te(this, Ye)) == null ? void 0 : n.type) === "!")
      return true;
    if (!((o = te(this, Ye)) != null && o.isEnd()))
      return false;
    if (!this.type)
      return (a = te(this, Ye)) == null ? void 0 : a.isEnd();
    const r = te(this, Ye) ? te(te(this, Ye), Ue).length : 0;
    return te(this, on) === r - 1;
  }
  copyIn(r) {
    typeof r == "string" ? this.push(r) : this.push(r.clone(this));
  }
  clone(r) {
    const n = new Et2(this.type, r);
    for (const o of te(this, Ue))
      n.copyIn(o);
    return n;
  }
  static fromGlob(r, n = {}) {
    var a;
    const o = new Et2(null, void 0, n);
    return Qr(a = Et2, un, Da).call(a, r, o, 0, n), o;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== te(this, rt))
      return te(this, rt).toMMPattern();
    const r = this.toString(), [n, o, a, u] = this.toRegExpSource();
    if (!(a || te(this, st) || te(this, mr).nocase && !te(this, mr).nocaseMagicOnly && r.toUpperCase() !== r.toLowerCase()))
      return o;
    const d = (te(this, mr).nocase ? "i" : "") + (u ? "u" : "");
    return Object.assign(new RegExp(`^${n}$`, d), {
      _src: n,
      _glob: r
    });
  }
  get options() {
    return te(this, mr);
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(r) {
    var w;
    const n = r ?? !!te(this, mr).dot;
    if (te(this, rt) === this && Qr(this, Fn, Dm).call(this), !this.type) {
      const S = this.isStart() && this.isEnd(), y = te(this, Ue).map((m) => {
        var x;
        const [c, g, b, E] = typeof m == "string" ? Qr(x = Et2, un, Nm).call(x, m, te(this, st), S) : m.toRegExpSource(r);
        return Ve(this, st, te(this, st) || b), Ve(this, Nr, te(this, Nr) || E), c;
      }).join("");
      let h = "";
      if (this.isStart() && typeof te(this, Ue)[0] == "string" && !(te(this, Ue).length === 1 && hR.has(te(this, Ue)[0]))) {
        const c = pR, g = (
          // dots are allowed, and the pattern starts with [ or .
          n && c.has(y.charAt(0)) || // the pattern starts with \., and then [ or .
          y.startsWith("\\.") && c.has(y.charAt(2)) || // the pattern starts with \.\., and then [ or .
          y.startsWith("\\.\\.") && c.has(y.charAt(4))
        ), b = !n && !r && c.has(y.charAt(0));
        h = g ? dR : b ? Ca : "";
      }
      let l = "";
      return this.isEnd() && te(te(this, rt), an) && ((w = te(this, Ye)) == null ? void 0 : w.type) === "!" && (l = "(?:$|\\/)"), [
        h + y + l,
        io(y),
        Ve(this, st, !!te(this, st)),
        te(this, Nr)
      ];
    }
    const o = this.type === "*" || this.type === "+", a = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let u = Qr(this, Fn, Pl).call(this, n);
    if (this.isStart() && this.isEnd() && !u && this.type !== "!") {
      const S = this.toString();
      return Ve(this, Ue, [S]), this.type = null, Ve(this, st, void 0), [S, io(this.toString()), false, false];
    }
    let f = !o || r || n || !Ca ? "" : Qr(this, Fn, Pl).call(this, true);
    f === u && (f = ""), f && (u = `(?:${u})(?:${f})*?`);
    let d = "";
    if (this.type === "!" && te(this, ho))
      d = (this.isStart() && !n ? Ca : "") + Uh;
    else {
      const S = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !n && !r ? Ca : "") + Wh + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && f ? ")" : this.type === "*" && f ? ")?" : `)${this.type}`;
      d = a + u + S;
    }
    return [
      d,
      io(u),
      Ve(this, st, !!te(this, st)),
      te(this, Nr)
    ];
  }
};
rt = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakSet(), Dm = function() {
  if (this !== te(this, rt))
    throw new Error("should only call on root");
  if (te(this, an))
    return this;
  this.toString(), Ve(this, an, true);
  let r;
  for (; r = te(this, Tn).pop(); ) {
    if (r.type !== "!")
      continue;
    let n = r, o = te(n, Ye);
    for (; o; ) {
      for (let a = te(n, on) + 1; !o.type && a < te(o, Ue).length; a++)
        for (const u of te(r, Ue)) {
          if (typeof u == "string")
            throw new Error("string part in extglob AST??");
          u.copyIn(te(o, Ue)[a]);
        }
      n = o, o = te(n, Ye);
    }
  }
  return this;
}, un = /* @__PURE__ */ new WeakSet(), Da = function(r, n, o, a) {
  var p, m;
  let u = false, f = false, d = -1, w = false;
  if (n.type === null) {
    let c = o, g = "";
    for (; c < r.length; ) {
      const b = r.charAt(c++);
      if (u || b === "\\") {
        u = !u, g += b;
        continue;
      }
      if (f) {
        c === d + 1 ? (b === "^" || b === "!") && (w = true) : b === "]" && !(c === d + 2 && w) && (f = false), g += b;
        continue;
      } else if (b === "[") {
        f = true, d = c, w = false, g += b;
        continue;
      }
      if (!a.noext && kh(b) && r.charAt(c) === "(") {
        n.push(g), g = "";
        const E = new Et(b, n);
        c = Qr(p = Et, un, Da).call(p, r, E, c, a), n.push(E);
        continue;
      }
      g += b;
    }
    return n.push(g), c;
  }
  let S = o + 1, y = new Et(null, n);
  const h = [];
  let l = "";
  for (; S < r.length; ) {
    const c = r.charAt(S++);
    if (u || c === "\\") {
      u = !u, l += c;
      continue;
    }
    if (f) {
      S === d + 1 ? (c === "^" || c === "!") && (w = true) : c === "]" && !(S === d + 2 && w) && (f = false), l += c;
      continue;
    } else if (c === "[") {
      f = true, d = S, w = false, l += c;
      continue;
    }
    if (kh(c) && r.charAt(S) === "(") {
      y.push(l), l = "";
      const g = new Et(c, y);
      y.push(g), S = Qr(m = Et, un, Da).call(m, r, g, S, a);
      continue;
    }
    if (c === "|") {
      y.push(l), l = "", h.push(y), y = new Et(null, n);
      continue;
    }
    if (c === ")")
      return l === "" && te(n, Ue).length === 0 && Ve(n, ho, true), y.push(l), l = "", n.push(...h, y), S;
    l += c;
  }
  return n.type = null, Ve(n, st, void 0), Ve(n, Ue, [r.substring(o - 1)]), S;
}, Pl = function(r) {
  return te(this, Ue).map((n) => {
    if (typeof n == "string")
      throw new Error("string type in extglob ast??");
    const [o, a, u, f] = n.toRegExpSource(r);
    return Ve(this, Nr, te(this, Nr) || f), o;
  }).filter((n) => !(this.isStart() && this.isEnd()) || !!n).join("|");
}, Nm = function(r, n, o = false) {
  let a = false, u = "", f = false;
  for (let d = 0; d < r.length; d++) {
    const w = r.charAt(d);
    if (a) {
      a = false, u += (vR.has(w) ? "\\" : "") + w;
      continue;
    }
    if (w === "\\") {
      d === r.length - 1 ? u += "\\\\" : a = true;
      continue;
    }
    if (w === "[") {
      const [S, y, h, l] = fR(r, d);
      if (h) {
        u += S, f = f || y, d += h - 1, n = n || l;
        continue;
      }
    }
    if (w === "*") {
      o && r === "*" ? u += Uh : u += Wh, n = true;
      continue;
    }
    if (w === "?") {
      u += Ql, n = true;
      continue;
    }
    u += mR(w);
  }
  return [u, io(r), !!n, f];
}, Pt(Et, un);
let qa = Et;
const gR = (e2, { windowsPathsNoEscape: r = false } = {}) => r ? e2.replace(/[?*()[\]]/g, "[$&]") : e2.replace(/[?*()[\]\\]/g, "\\$&"), wt = (e2, r, n = {}) => (ja(r), !n.nocomment && r.charAt(0) === "#" ? false : new ns(r, n).match(e2)), yR = /^\*+([^+@!?\*\[\(]*)$/, wR = (e2) => (r) => !r.startsWith(".") && r.endsWith(e2), bR = (e2) => (r) => r.endsWith(e2), SR = (e2) => (e2 = e2.toLowerCase(), (r) => !r.startsWith(".") && r.toLowerCase().endsWith(e2)), _R = (e2) => (e2 = e2.toLowerCase(), (r) => r.toLowerCase().endsWith(e2)), ER = /^\*+\.\*+$/, xR = (e2) => !e2.startsWith(".") && e2.includes("."), OR = (e2) => e2 !== "." && e2 !== ".." && e2.includes("."), AR = /^\.\*+$/, TR = (e2) => e2 !== "." && e2 !== ".." && e2.startsWith("."), PR = /^\*+$/, CR = (e2) => e2.length !== 0 && !e2.startsWith("."), RR = (e2) => e2.length !== 0 && e2 !== "." && e2 !== "..", MR = /^\?+([^+@!?\*\[\(]*)?$/, IR = ([e2, r = ""]) => {
  const n = km([e2]);
  return r ? (r = r.toLowerCase(), (o) => n(o) && o.toLowerCase().endsWith(r)) : n;
}, LR = ([e2, r = ""]) => {
  const n = Wm([e2]);
  return r ? (r = r.toLowerCase(), (o) => n(o) && o.toLowerCase().endsWith(r)) : n;
}, FR = ([e2, r = ""]) => {
  const n = Wm([e2]);
  return r ? (o) => n(o) && o.endsWith(r) : n;
}, $R = ([e2, r = ""]) => {
  const n = km([e2]);
  return r ? (o) => n(o) && o.endsWith(r) : n;
}, km = ([e2]) => {
  const r = e2.length;
  return (n) => n.length === r && !n.startsWith(".");
}, Wm = ([e2]) => {
  const r = e2.length;
  return (n) => n.length === r && n !== "." && n !== "..";
}, Um = typeof process == "object" && process ? typeof define_process_env_default == "object" && define_process_env_default && define_process_env_default.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", zh = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, DR = Um === "win32" ? zh.win32.sep : zh.posix.sep;
wt.sep = DR;
const Yt = Symbol("globstar **");
wt.GLOBSTAR = Yt;
const NR = "[^/]", kR = NR + "*?", WR = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", UR = "(?:(?!(?:\\/|^)\\.).)*?", zR = (e2, r = {}) => (n) => wt(n, e2, r);
wt.filter = zR;
const Vt = (e2, r = {}) => Object.assign({}, e2, r), BR = (e2) => {
  if (!e2 || typeof e2 != "object" || !Object.keys(e2).length)
    return wt;
  const r = wt;
  return Object.assign((o, a, u = {}) => r(o, a, Vt(e2, u)), {
    Minimatch: class extends r.Minimatch {
      constructor(a, u = {}) {
        super(a, Vt(e2, u));
      }
      static defaults(a) {
        return r.defaults(Vt(e2, a)).Minimatch;
      }
    },
    AST: class extends r.AST {
      /* c8 ignore start */
      constructor(a, u, f = {}) {
        super(a, u, Vt(e2, f));
      }
      /* c8 ignore stop */
      static fromGlob(a, u = {}) {
        return r.AST.fromGlob(a, Vt(e2, u));
      }
    },
    unescape: (o, a = {}) => r.unescape(o, Vt(e2, a)),
    escape: (o, a = {}) => r.escape(o, Vt(e2, a)),
    filter: (o, a = {}) => r.filter(o, Vt(e2, a)),
    defaults: (o) => r.defaults(Vt(e2, o)),
    makeRe: (o, a = {}) => r.makeRe(o, Vt(e2, a)),
    braceExpand: (o, a = {}) => r.braceExpand(o, Vt(e2, a)),
    match: (o, a, u = {}) => r.match(o, a, Vt(e2, u)),
    sep: r.sep,
    GLOBSTAR: Yt
  });
};
wt.defaults = BR;
const zm = (e2, r = {}) => (ja(e2), r.nobrace || !/\{(?:(?!\{).)*\}/.test(e2) ? [e2] : rR(e2));
wt.braceExpand = zm;
const HR = (e2, r = {}) => new ns(e2, r).makeRe();
wt.makeRe = HR;
const jR = (e2, r, n = {}) => {
  const o = new ns(r, n);
  return e2 = e2.filter((a) => o.match(a)), o.options.nonull && !e2.length && e2.push(r), e2;
};
wt.match = jR;
const Bh = /[?*]|[+@!]\(.*?\)|\[|\]/, qR = (e2) => e2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class ns {
  constructor(r, n = {}) {
    tt(this, "options");
    tt(this, "set");
    tt(this, "pattern");
    tt(this, "windowsPathsNoEscape");
    tt(this, "nonegate");
    tt(this, "negate");
    tt(this, "comment");
    tt(this, "empty");
    tt(this, "preserveMultipleSlashes");
    tt(this, "partial");
    tt(this, "globSet");
    tt(this, "globParts");
    tt(this, "nocase");
    tt(this, "isWindows");
    tt(this, "platform");
    tt(this, "windowsNoMagicRoot");
    tt(this, "regexp");
    ja(r), n = n || {}, this.options = n, this.pattern = r, this.platform = n.platform || Um, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!n.windowsPathsNoEscape || n.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!n.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!n.nonegate, this.comment = false, this.empty = false, this.partial = !!n.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = n.windowsNoMagicRoot !== void 0 ? n.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return true;
    for (const r of this.set)
      for (const n of r)
        if (typeof n != "string")
          return true;
    return false;
  }
  debug(...r) {
  }
  make() {
    const r = this.pattern, n = this.options;
    if (!n.nocomment && r.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!r) {
      this.empty = true;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], n.debug && (this.debug = (...u) => console.error(...u)), this.debug(this.pattern, this.globSet);
    const o = this.globSet.map((u) => this.slashSplit(u));
    this.globParts = this.preprocess(o), this.debug(this.pattern, this.globParts);
    let a = this.globParts.map((u, f, d) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const w = u[0] === "" && u[1] === "" && (u[2] === "?" || !Bh.test(u[2])) && !Bh.test(u[3]), S = /^[a-z]:/i.test(u[0]);
        if (w)
          return [...u.slice(0, 4), ...u.slice(4).map((y) => this.parse(y))];
        if (S)
          return [u[0], ...u.slice(1).map((y) => this.parse(y))];
      }
      return u.map((w) => this.parse(w));
    });
    if (this.debug(this.pattern, a), this.set = a.filter((u) => u.indexOf(false) === -1), this.isWindows)
      for (let u = 0; u < this.set.length; u++) {
        const f = this.set[u];
        f[0] === "" && f[1] === "" && this.globParts[u][2] === "?" && typeof f[3] == "string" && /^[a-z]:$/i.test(f[3]) && (f[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(r) {
    if (this.options.noglobstar)
      for (let o = 0; o < r.length; o++)
        for (let a = 0; a < r[o].length; a++)
          r[o][a] === "**" && (r[o][a] = "*");
    const { optimizationLevel: n = 1 } = this.options;
    return n >= 2 ? (r = this.firstPhasePreProcess(r), r = this.secondPhasePreProcess(r)) : n >= 1 ? r = this.levelOneOptimize(r) : r = this.adjascentGlobstarOptimize(r), r;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(r) {
    return r.map((n) => {
      let o = -1;
      for (; (o = n.indexOf("**", o + 1)) !== -1; ) {
        let a = o;
        for (; n[a + 1] === "**"; )
          a++;
        a !== o && n.splice(o, a - o);
      }
      return n;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(r) {
    return r.map((n) => (n = n.reduce((o, a) => {
      const u = o[o.length - 1];
      return a === "**" && u === "**" ? o : a === ".." && u && u !== ".." && u !== "." && u !== "**" ? (o.pop(), o) : (o.push(a), o);
    }, []), n.length === 0 ? [""] : n));
  }
  levelTwoFileOptimize(r) {
    Array.isArray(r) || (r = this.slashSplit(r));
    let n = false;
    do {
      if (n = false, !this.preserveMultipleSlashes) {
        for (let a = 1; a < r.length - 1; a++) {
          const u = r[a];
          a === 1 && u === "" && r[0] === "" || (u === "." || u === "") && (n = true, r.splice(a, 1), a--);
        }
        r[0] === "." && r.length === 2 && (r[1] === "." || r[1] === "") && (n = true, r.pop());
      }
      let o = 0;
      for (; (o = r.indexOf("..", o + 1)) !== -1; ) {
        const a = r[o - 1];
        a && a !== "." && a !== ".." && a !== "**" && (n = true, r.splice(o - 1, 2), o -= 2);
      }
    } while (n);
    return r.length === 0 ? [""] : r;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(r) {
    let n = false;
    do {
      n = false;
      for (let o of r) {
        let a = -1;
        for (; (a = o.indexOf("**", a + 1)) !== -1; ) {
          let f = a;
          for (; o[f + 1] === "**"; )
            f++;
          f > a && o.splice(a + 1, f - a);
          let d = o[a + 1];
          const w = o[a + 2], S = o[a + 3];
          if (d !== ".." || !w || w === "." || w === ".." || !S || S === "." || S === "..")
            continue;
          n = true, o.splice(a, 1);
          const y = o.slice(0);
          y[a] = "**", r.push(y), a--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let f = 1; f < o.length - 1; f++) {
            const d = o[f];
            f === 1 && d === "" && o[0] === "" || (d === "." || d === "") && (n = true, o.splice(f, 1), f--);
          }
          o[0] === "." && o.length === 2 && (o[1] === "." || o[1] === "") && (n = true, o.pop());
        }
        let u = 0;
        for (; (u = o.indexOf("..", u + 1)) !== -1; ) {
          const f = o[u - 1];
          if (f && f !== "." && f !== ".." && f !== "**") {
            n = true;
            const w = u === 1 && o[u + 1] === "**" ? ["."] : [];
            o.splice(u - 1, 2, ...w), o.length === 0 && o.push(""), u -= 2;
          }
        }
      }
    } while (n);
    return r;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(r) {
    for (let n = 0; n < r.length - 1; n++)
      for (let o = n + 1; o < r.length; o++) {
        const a = this.partsMatch(r[n], r[o], !this.preserveMultipleSlashes);
        if (a) {
          r[n] = [], r[o] = a;
          break;
        }
      }
    return r.filter((n) => n.length);
  }
  partsMatch(r, n, o = false) {
    let a = 0, u = 0, f = [], d = "";
    for (; a < r.length && u < n.length; )
      if (r[a] === n[u])
        f.push(d === "b" ? n[u] : r[a]), a++, u++;
      else if (o && r[a] === "**" && n[u] === r[a + 1])
        f.push(r[a]), a++;
      else if (o && n[u] === "**" && r[a] === n[u + 1])
        f.push(n[u]), u++;
      else if (r[a] === "*" && n[u] && (this.options.dot || !n[u].startsWith(".")) && n[u] !== "**") {
        if (d === "b")
          return false;
        d = "a", f.push(r[a]), a++, u++;
      } else if (n[u] === "*" && r[a] && (this.options.dot || !r[a].startsWith(".")) && r[a] !== "**") {
        if (d === "a")
          return false;
        d = "b", f.push(n[u]), a++, u++;
      } else
        return false;
    return r.length === n.length && f;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const r = this.pattern;
    let n = false, o = 0;
    for (let a = 0; a < r.length && r.charAt(a) === "!"; a++)
      n = !n, o++;
    o && (this.pattern = r.slice(o)), this.negate = n;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(r, n, o = false) {
    const a = this.options;
    if (this.isWindows) {
      const c = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), g = !c && r[0] === "" && r[1] === "" && r[2] === "?" && /^[a-z]:$/i.test(r[3]), b = typeof n[0] == "string" && /^[a-z]:$/i.test(n[0]), E = !b && n[0] === "" && n[1] === "" && n[2] === "?" && typeof n[3] == "string" && /^[a-z]:$/i.test(n[3]), x = g ? 3 : c ? 0 : void 0, P = E ? 3 : b ? 0 : void 0;
      if (typeof x == "number" && typeof P == "number") {
        const [T, M] = [r[x], n[P]];
        T.toLowerCase() === M.toLowerCase() && (n[P] = T, P > x ? n = n.slice(P) : x > P && (r = r.slice(x)));
      }
    }
    const { optimizationLevel: u = 1 } = this.options;
    u >= 2 && (r = this.levelTwoFileOptimize(r)), this.debug("matchOne", this, { file: r, pattern: n }), this.debug("matchOne", r.length, n.length);
    for (var f = 0, d = 0, w = r.length, S = n.length; f < w && d < S; f++, d++) {
      this.debug("matchOne loop");
      var y = n[d], h = r[f];
      if (this.debug(n, y, h), y === false)
        return false;
      if (y === Yt) {
        this.debug("GLOBSTAR", [n, y, h]);
        var l = f, p = d + 1;
        if (p === S) {
          for (this.debug("** at the end"); f < w; f++)
            if (r[f] === "." || r[f] === ".." || !a.dot && r[f].charAt(0) === ".")
              return false;
          return true;
        }
        for (; l < w; ) {
          var m = r[l];
          if (this.debug(`
globstar while`, r, l, n, p, m), this.matchOne(r.slice(l), n.slice(p), o))
            return this.debug("globstar found match!", l, w, m), true;
          if (m === "." || m === ".." || !a.dot && m.charAt(0) === ".") {
            this.debug("dot detected!", r, l, n, p);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), l++;
        }
        return !!(o && (this.debug(`
>>> no match, partial?`, r, l, n, p), l === w));
      }
      let c;
      if (typeof y == "string" ? (c = h === y, this.debug("string match", y, h, c)) : (c = y.test(h), this.debug("pattern match", y, h, c)), !c)
        return false;
    }
    if (f === w && d === S)
      return true;
    if (f === w)
      return o;
    if (d === S)
      return f === w - 1 && r[f] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return zm(this.pattern, this.options);
  }
  parse(r) {
    ja(r);
    const n = this.options;
    if (r === "**")
      return Yt;
    if (r === "")
      return "";
    let o, a = null;
    (o = r.match(PR)) ? a = n.dot ? RR : CR : (o = r.match(yR)) ? a = (n.nocase ? n.dot ? _R : SR : n.dot ? bR : wR)(o[1]) : (o = r.match(MR)) ? a = (n.nocase ? n.dot ? LR : IR : n.dot ? FR : $R)(o) : (o = r.match(ER)) ? a = n.dot ? OR : xR : (o = r.match(AR)) && (a = TR);
    const u = qa.fromGlob(r, this.options).toMMPattern();
    return a && typeof u == "object" && Reflect.defineProperty(u, "test", { value: a }), u;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const r = this.set;
    if (!r.length)
      return this.regexp = false, this.regexp;
    const n = this.options, o = n.noglobstar ? kR : n.dot ? WR : UR, a = new Set(n.nocase ? ["i"] : []);
    let u = r.map((w) => {
      const S = w.map((y) => {
        if (y instanceof RegExp)
          for (const h of y.flags.split(""))
            a.add(h);
        return typeof y == "string" ? qR(y) : y === Yt ? Yt : y._src;
      });
      return S.forEach((y, h) => {
        const l = S[h + 1], p = S[h - 1];
        y !== Yt || p === Yt || (p === void 0 ? l !== void 0 && l !== Yt ? S[h + 1] = "(?:\\/|" + o + "\\/)?" + l : S[h] = o : l === void 0 ? S[h - 1] = p + "(?:\\/|" + o + ")?" : l !== Yt && (S[h - 1] = p + "(?:\\/|\\/" + o + "\\/)" + l, S[h + 1] = Yt));
      }), S.filter((y) => y !== Yt).join("/");
    }).join("|");
    const [f, d] = r.length > 1 ? ["(?:", ")"] : ["", ""];
    u = "^" + f + u + d + "$", this.negate && (u = "^(?!" + u + ").+$");
    try {
      this.regexp = new RegExp(u, [...a].join(""));
    } catch {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(r) {
    return this.preserveMultipleSlashes ? r.split("/") : this.isWindows && /^\/\/[^\/]+/.test(r) ? ["", ...r.split(/\/+/)] : r.split(/\/+/);
  }
  match(r, n = this.partial) {
    if (this.debug("match", r, this.pattern), this.comment)
      return false;
    if (this.empty)
      return r === "";
    if (r === "/" && n)
      return true;
    const o = this.options;
    this.isWindows && (r = r.split("\\").join("/"));
    const a = this.slashSplit(r);
    this.debug(this.pattern, "split", a);
    const u = this.set;
    this.debug(this.pattern, "set", u);
    let f = a[a.length - 1];
    if (!f)
      for (let d = a.length - 2; !f && d >= 0; d--)
        f = a[d];
    for (let d = 0; d < u.length; d++) {
      const w = u[d];
      let S = a;
      if (o.matchBase && w.length === 1 && (S = [f]), this.matchOne(S, w, n))
        return o.flipNegate ? true : !this.negate;
    }
    return o.flipNegate ? false : this.negate;
  }
  static defaults(r) {
    return wt.defaults(r).Minimatch;
  }
}
wt.AST = qa;
wt.Minimatch = ns;
wt.escape = gR;
wt.unescape = io;
const Bm = "/$shared", ZR = {
  "**/saved_conditions.json": {
    parser: "json",
    content: {
      conditions: []
    },
    schema: {
      type: "object",
      properties: {
        conditions: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["conditions"]
    }
  },
  "**/shared_datasources.json": {
    parser: "json",
    content: {},
    schema: {
      type: "object",
      additionalProperties: true,
      patternProperties: {
        "^.*$": {
          type: "array"
        }
      }
    }
  },
  "**/shared_css.json": {
    parser: "json",
    content: {
      classes: []
    },
    schema: {
      type: "object",
      properties: {
        classes: {
          type: "array",
          items: {
            type: "object"
          }
        }
      },
      required: ["classes"]
    }
  },
  "**/CustomComponents/manifest.json": {
    parser: "json",
    content: [],
    schema: {
      type: "array",
      items: {
        type: "object"
      }
    }
  },
  "**/crafted_components.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/HTTPHandlers.json": {
    parser: "json",
    content: [],
    schema: { type: "array" }
  },
  "**/*.json": {
    parser: "json",
    content: {}
  }
};
function Hm(e2) {
  const r = Object.entries(ZR).find(
    ([n]) => wt(e2, n)
  );
  return r == null ? void 0 : r[1];
}
function jm(e2) {
  var o;
  const r = (o = Hm(e2)) == null ? void 0 : o.content;
  if (!r) return;
  const n = e2.replace(`${Bm}/`, "Shared/");
  qm({
    name: n,
    content: r,
    asText: typeof r == "string"
  });
}
function ef({
  path: e2,
  createIfNotExists: r = false
}) {
  const n = `${Bm}/${e2}`;
  return De(`${n}?t=${Date.now()}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((o) => {
    const a = Hm(e2);
    let u = o;
    if (!a) return u;
    if (typeof u == "string")
      try {
        switch (a.parser) {
          case "json":
            u = JSON.parse(u);
            break;
          default:
            break;
        }
      } catch {
        throw new Error("Cannot parse");
      }
    if (a.schema && !new BC.Validator().validate(u, a.schema).valid)
      throw new Error("Invalid Schema");
    return u;
  }).catch((o) => {
    if (KR(o) && r) {
      const a = GR(o, e2);
      gC.next({
        message: a,
        kind: "warning"
      }), jm(n);
    }
    throw o;
  });
}
function KR(e2) {
  var r;
  return ((r = e2 == null ? void 0 : e2.response) == null ? void 0 : r.status) === 404 || (e2 == null ? void 0 : e2.message) === "Invalid Schema" || (e2 == null ? void 0 : e2.message) === "Cannot parse" || (e2 == null ? void 0 : e2.name) === "SyntaxError";
}
function GR(e2, r) {
  var n;
  switch (true) {
    case ((e2 == null ? void 0 : e2.message) === "Cannot parse " || (e2 == null ? void 0 : e2.name) === "SyntaxError"):
      return `Cannot parse file '${r}', resetting...`;
    case (e2 == null ? void 0 : e2.message) === "Invalid Schema":
      return `File '${r}' is corrupt, resetting...`;
    case ((n = e2 == null ? void 0 : e2.response) == null ? void 0 : n.status) === 404:
      return `File '${r}' not found, creating...`;
    default:
      return e2 == null ? void 0 : e2.message;
  }
}
function EI(e2) {
  return De(rs, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function xI(e2) {
  return De(rs, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
const VR = () => {
  const { host: e2, protocol: r } = window.location, n = r === "https:";
  return {
    projectOpened: false,
    remoteDebuggerMode: Pm.DISABLED,
    baseUrl: "",
    qodly: true,
    urls: {
      renderer: "/$lib/renderer/",
      debugger: `ws${n ? "s" : ""}://${e2}/remoteDebugger`,
      lsp: `ws${n ? "s" : ""}://${e2}/LSP`
    },
    isRestActive: true
  };
};
async function OI() {
  const { hostname: e2, host: r, protocol: n } = window.location, o = n === "https:";
  try {
    const a = await De(lt, {
      method: "POST",
      body: JSON.stringify({
        verb: pi.GET_APP_SETTINGS
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }), u = (() => {
      if (a.rendererPath)
        return a.rendererPath;
      const f = `http://${e2}:${a.webServerHTTPPort}`, d = `https://${e2}:${a.webServerHTTPSPort}`;
      return a.webServerHTTPPort && a.webServerHTTPSPort ? o ? d : f : a.webServerHTTPPort ? f : d;
    })();
    return {
      projectOpened: a.webServerHTTPSPort > 0 || a.webServerHTTPPort > 0,
      remoteDebuggerMode: a.remoteDebuggerMode,
      baseUrl: u,
      qodly: typeof a.qodly > "u" ? true : a.qodly,
      urls: {
        renderer: a.rendererPath || `${u}/$lib/renderer/`,
        debugger: `ws${o ? "s" : ""}://${r}/remoteDebugger`,
        lsp: `ws${o ? "s" : ""}://${r}/LSP`
      },
      isRestActive: a.isRESTActive
    };
  } catch (a) {
    return console.error(a), VR();
  }
}
async function YR(e2) {
  return await De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function AI(...e2) {
  return (await Promise.all(
    e2.map(
      (o) => YR({
        root: o,
        verb: pi.GET_FOLDER
      })
    )
  )).map(
    ({ children: o }) => o.map(({ name: a, date: u, type: f }) => ({
      name: a,
      type: f,
      date: u,
      path: `${f}/${a}`
    }))
  ).flat();
}
function TI(e2, r = {}) {
  const { sanitize: n = true } = r;
  return De(`/rest/$getWebForm/${e2}`, {
    method: "GET"
  }).then((o) => {
    if (!(o != null && o.components) || !n)
      return o;
    const a = /* @__PURE__ */ new Map();
    return {
      ...o,
      // generate a unique id for webform loaders (fixes qs#397)
      // since the same webform loader might be used inside another webform loader
      components: Xe.entries(o.components).map(([u, f]) => {
        const d = u, { resolvedName: w } = f.type;
        if (w === "WebformLoader") {
          const S = Ul.generate();
          a.set(u, S), u = S;
        }
        return [u, f, d];
      }).reduce((u, [f, d, w]) => {
        var S;
        return d.nodes && (d.nodes = d.nodes.map((y) => a.get(y) || y)), d.linkedNodes && (d.linkedNodes = Xe.entries(d.linkedNodes).reduce(
          (y, [h, l]) => ({
            ...y,
            [h]: a.get(l) || l
          }),
          {}
        )), (S = d.props) != null && S.events && (d.props.events = d.props.events.map(
          (y) => (y.type === "navigation" && y.loader && (y.loader = a.get(y.loader) || y.loader), y)
        )), {
          ...u,
          [f]: {
            ...d,
            props: {
              ...d.props,
              __originalID: w
            }
          }
        };
      }, {})
    };
  });
}
function PI(e2) {
  return De(lt, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(e2)
  }).then((r) => ({
    ...r,
    content: [sr.METHOD, sr.CLASS].includes(
      r.type
    ) ? Xl(r.content) : r.content
  }));
}
function CI(e2) {
  return e2.type === "folder" ? De(rs, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }) : De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function RI(e2) {
  return e2.type === "folder" ? (await De(rs, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted : (await De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
function MI(e2) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function II(e2) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function LI(e2) {
  return (await De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
async function FI(...e2) {
  return await De(lt, {
    method: "POST",
    body: JSON.stringify({
      verb: pi.GET_FILES_INFO,
      files: e2
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function $I(e2) {
  const r = await De("/api/login", {
    method: "POST",
    body: JSON.stringify({
      accessKey: e2
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return r.isLogged && r.success;
}
async function DI() {
  return await De(
    "/rest/$catalog/$all?$metadata=full",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
}
async function NI() {
  try {
    const e2 = false ? "/i18n/languages.json" : "/$lib/studio/i18n/languages.json", n = await (await fetch(e2)).text(), { supported: o } = JSON.parse(n);
    return o;
  } catch {
    return [];
  }
}
async function kI({
  name: e2,
  path: r = "",
  root: n = "root",
  asText: o = false
}) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify({
      verb: "getFileContent",
      root: n,
      path: r,
      name: e2,
      asText: o
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  });
}
async function WI(e2 = {}) {
  try {
    return await ef({
      path: "shared_datasources.json",
      ...e2
    });
  } catch {
    return {};
  }
}
async function UI(e2 = {}) {
  try {
    return await ef({
      path: "shared_css.json",
      ...e2
    });
  } catch {
    return { classes: [] };
  }
}
async function zI(e2 = {}) {
  try {
    return await ef({
      path: "saved_conditions.json",
      ...e2
    });
  } catch {
    return { conditions: [] };
  }
}
async function BI() {
  try {
    return await De(
      "/rest/$info/privileges",
      {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      }
    );
  } catch {
    return { privileges: [] };
  }
}
async function HI() {
  try {
    return await (await fetch(`monaco_theme.json?t=${Date.now()}`)).json();
  } catch {
    return null;
  }
}
const XR = TC(), jI = async (e2) => {
  const r = {
    verb: pi.SET_FILE_CONTENT,
    asText: false,
    name: "shared_datasources.json",
    path: "",
    root: "shared",
    content: e2
  };
  return XR(async () => (await De(lt, {
    method: "POST",
    body: JSON.stringify(r),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e2));
}, qm = async (e2) => {
  const r = await De(lt, {
    method: "POST",
    body: JSON.stringify({
      ...e2,
      verb: pi.SET_FILE_CONTENT,
      root: Tm.ROOT
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), n = OC(
    `${e2.path || "Sources"}/${e2.name}`
  );
  return {
    ...r,
    type: n,
    size: 0
  };
}, qI = async (e2) => await qm({
  name: "crafted_components.json",
  path: On.WEBFORMS,
  content: e2
});
function ZI(e2) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function KI(e2) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function GI(e2) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function VI(e2) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((r) => Array.isArray(r) ? r : {
    ...r,
    content: ["4dm", "4qm", "4qs"].includes(r.ext) ? Xl(r.content) : r.content
  }).catch((r) => {
    var n, o;
    throw ((o = (n = r.data) == null ? void 0 : n.__ERROR[0]) == null ? void 0 : o.errCode) === 1839 && jm(e2.path), r;
  });
}
function YI(e2) {
  return De(lt, {
    method: "POST",
    body: JSON.stringify(e2),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function JR(e2) {
  const r = new RegExp(/^\((.+)(?=\))/gi).exec(e2);
  return r !== null ? r[1] : "";
}
function QR(e2) {
  const r = new RegExp(/(->)(.*)/gi).exec(e2);
  if (r !== null)
    return r[0].replace("->", "");
  const n = /:([^)]*)$/.exec(e2);
  return n !== null ? `result : ${n[1].trim()}` : "";
}
function eM(e2) {
  const r = JR(e2).split(/[;,]/g).filter(Boolean).map((a) => {
    const u = a.split(":")[0].trim(), f = a.split(":")[1].trim();
    return {
      name: u,
      type: f
    };
  }), n = QR(e2), o = n ? {
    name: n.split(":")[0].trim(),
    type: n.split(":")[1].trim()
  } : {
    name: "result",
    type: "Variable"
  };
  return {
    params: r,
    result: o
  };
}
async function XI(e2, r) {
  const o = e2.split(".").pop();
  try {
    const a = await De(lt, {
      method: "POST",
      body: JSON.stringify({
        verb: "getFunctionContent",
        className: r,
        functionName: o
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    a.content = Xl(a.content);
    const { params: u, result: f } = eM(a.parameters);
    return {
      ...a,
      params: u,
      returns: f
    };
  } catch (a) {
    return console.error(a), {
      className: r,
      functionName: o,
      filePath: e2,
      content: "",
      params: []
    };
  }
}
var tM = /* @__PURE__ */ ((e2) => (e2.STUDIO_LOADED = "UA-1-0", e2.WELCOME_TOUR_INIT = "UA-1-3", e2.WELCOME_TOUR_END = "UA-1-4", e2))(tM || {});
function JI(e2, r) {
  fetch("/api/v1/activity", {
    body: JSON.stringify({
      AID: e2,
      ...r
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).catch((n) => {
  });
}
function QI(e2) {
  window.pagesense = window.pagesense || [], window.pagesense.push(["trackEvent", e2]);
}
var rM = /* @__PURE__ */ ((e2) => (e2.LOCAL = "local", e2.SHARED = "shared", e2.THEME = "theme", e2))(rM || {}), nM = /* @__PURE__ */ ((e2) => (e2[e2.METHOD = 1] = "METHOD", e2[e2.CLASS = 10] = "CLASS", e2))(nM || {}), iM = /* @__PURE__ */ ((e2) => (e2.WelCome = "WelCome", e2.ActionPanel = "ActionPanel", e2.SideBar = "SideBar", e2.Settings = "Settings", e2.Main = "Main", e2.Explorer = "Explorer", e2.Header = "Header", e2.ComponentList = "ComponentList", e2))(iM || {}), oM = /* @__PURE__ */ ((e2) => (e2[e2.FILE_NOT_FOUND = 1839] = "FILE_NOT_FOUND", e2[e2.JSON_MALFORMED = 554] = "JSON_MALFORMED", e2[e2.JSON_MALFORMED_AT_LINE = 550] = "JSON_MALFORMED_AT_LINE", e2))(oM || {});
const eL = {
  transparent: {
    backgroundColor: "transparent"
  },
  black: {
    backgroundColor: "#4a4a4a",
    color: "white",
    padding: "3px 5px",
    borderRadius: 5
  },
  grey: {
    backgroundColor: "#e8e8e8",
    color: "#262626",
    padding: "3px 5px",
    borderRadius: 5
  }
}, tL = {
  Code: {
    key: "editors:code",
    config: { language: "4d", theme: "fd-dark" }
  },
  WebForm: {
    key: "editors:webforms"
  }
};

export { lt as API_PREFIX, _M as AppLoader, DP as ControlledSwitch, eL as DATASOURCE_THEMES, mC as DatasourcesActions, bC as DebuggerActions, pi as DesignerRequestVerb, dM as Dialog, rx as DialogBody, tM as EActivity, tL as EDITOR, iM as EIDENTIFIERS, oM as ERROR_CODES, rM as EWebFormStyleClassScope, rs as EXT_API_PREFIX, sr as FileFolderType, On as FolderRootPath, Tm as FolderRootType, Rh as HTTPError, xC as HTTP_HANDLERS_PATH, Ha as IPreemptive, $C as IPublished, Cm as IPublishedRestScope, IM as IdentityProvider, vM as Incase, OO as IndentLines, qM as LOCALIZATION_PATH, kP as LogoSVG, wC as LspActions, Om as MAX_FILE_NAME_LENGTH, jM as MODEL_TAB_PATH, EM as Modal, to as ModalCloseReason, oi as ModalColor, _h as ModalIcons, pm as ModalType, AC as Mutex, Am as NameError, tx as Overlay, j_ as Portal, mI as PublishOptions, _C as ROLES_TAB_PATH, Pm as RemoteDebuggerMode, EC as SETTINGS_TAB_PATH, Bm as SHARED_API_PREFIX, nM as SourceCodeDescriptor, AO as Switcher, yC as TabEventsActions, wM as Tip, yM as TipsProvider, pM as Toast, SM as Tooltip, hM as Tree, fO as TreeIcon, Ev as TreeNode, vC as WebformActions, xM as ZoomComponent, jP as ZoomLevel, cI as _isArrayDatasource, dI as _isObjectDatasource, yI as addAttributesToContent, MI as addFolder, PC as by, YM as byId, XM as byPath, EI as checkUpdates, ZI as createFolder, DM as datasourcesSubject, UM as debuggerSubject, RI as dropFile, LI as dropFolder, JM as exists, KM as extractWebformName, wI as generateUUID, OI as getAppSettings, DI as getCatalog, QM as getDatasourceId, VR as getDefaultAppSettings, PI as getFile, kI as getFileContent, ZM as getFileExtentionFromType, FI as getFilesInfo, YR as getFolder, AI as getFolders, XI as getFunctionContent, HI as getMonacoTheme, VI as getNodeInfo, zI as getSavedConditions, UI as getSharedCSS, WI as getSharedDatasources, ef as getSharedResource, NI as getSupportedLanguages, OC as getTypeFromExtension, BI as getUserPrivileges, TI as getWebForm, NC as hasAttributesString, De as http, xI as installUpdates, IC as isArrayDatasource, nI as isDataClassMethod, rI as isDataStoreMethod, pI as isDateDatasource, lI as isEntity, aI as isEntityDatasource, iI as isEntityMethod, fI as isEntitySelection, sI as isEntitySelectionDatasource, oI as isEntitySelectionMethod, eI as isObjectAttribute, LC as isObjectDatasource, tI as isRelatedAttribute, RC as isRelatedEntitiesAttribute, MC as isRelatedEntityAttribute, FC as isScalarDatasource, CC as isSimpleAttribute, uI as isSimpleDatasource, hI as loadDS, vI as loadI18n, JI as log, $I as login, WM as lspSubject, GI as moveItem, GM as outBy, VM as outById, gI as parseAttributes, TC as queue, kC as removeAttributesString, KI as removeItem, CI as renameFile, II as renameFolder, Xl as sanitizeContent, YI as saveContent, qI as setCraftedComponents, qm as setFileContent, jI as setSharedSources, DC as stringifyAttributes, kM as tabEventsSubject, zM as tasksManagerSubject, gC as toastSubject, QI as trackEvent, bI as transformDates, jm as tryCreateSharedResource, OM as useDidMountEffect, $M as useDoubleClick, MM as useFeatureFlags, RM as useForwardedRef, AM as useHotkeys, LM as useIdentity, TM as useOutsideClick, PM as usePrevious, FM as useStateObject, CM as useStateRef, WT as useTip, SC as validateName, BM as validateServerSide, HM as validateValue, NM as webformSubject };
