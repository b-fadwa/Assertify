import { q as qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-FBGdLX05.js';
import { q as qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__, F, c as ce } from './qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__-8RC_LqNr.js';
import { q as qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__, I as Ii$1 } from './qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__-Dddk7f1s.js';
import { R as R5$1, F as F5$1, x as x3$1, Z as Z4$1, C as C0$1, H as H0$1, V as V0$1, d as d4, a as a1$1, o as o2$1, J as J2$1, k as keyframes, w as withEmotionCache, b as C1, u as u4, T as ThemeContext, L as L2$1 } from './emotion-react.browser.esm-NEgb9cUP.js';
import './qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__-If-MPiLV.js';
import './_commonjsHelpers-BFTU3MAI.js';

var define_process_env_default = {};
var HT = Object.defineProperty;
var sv = (e4) => {
  throw TypeError(e4);
};
var WT = (e4, t, r) => t in e4 ? HT(e4, t, { enumerable: true, configurable: true, writable: true, value: r }) : e4[t] = r;
var Ee = (e4, t, r) => WT(e4, typeof t != "symbol" ? t + "" : t, r), Wu = (e4, t, r) => t.has(e4) || sv("Cannot " + r);
var ue = (e4, t, r) => (Wu(e4, t, "read from private field"), r ? r.call(e4) : t.get(e4)), Wt = (e4, t, r) => t.has(e4) ? sv("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e4) : t.set(e4, r), gt = (e4, t, r, n) => (Wu(e4, t, "write to private field"), t.set(e4, r), r), Be = (e4, t, r) => (Wu(e4, t, "access private method"), r);
const uR = ({
  children: e4,
  container: t = document.body
}) => qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__.createPortal(e4, t);
var lv = function(t) {
  return t.reduce(function(r, n) {
    var o = n[0], a = n[1];
    return r[o] = a, r;
  }, {});
}, cv = typeof window < "u" && window.document && window.document.createElement ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useLayoutEffect : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect, rr = "top", Nr = "bottom", Mr = "right", nr = "left", Id = "auto", za = [rr, Nr, Mr, nr], co = "start", Ta = "end", fR = "clippingParents", B0 = "viewport", Fo = "popper", dR = "reference", uv = /* @__PURE__ */ za.reduce(function(e4, t) {
  return e4.concat([t + "-" + co, t + "-" + Ta]);
}, []), j0 = /* @__PURE__ */ [].concat(za, [Id]).reduce(function(e4, t) {
  return e4.concat([t, t + "-" + co, t + "-" + Ta]);
}, []), pR = "beforeRead", hR = "read", gR = "afterRead", vR = "beforeMain", mR = "main", bR = "afterMain", yR = "beforeWrite", wR = "write", xR = "afterWrite", _R = [pR, hR, gR, vR, mR, bR, yR, wR, xR];
function sn(e4) {
  return e4 ? (e4.nodeName || "").toLowerCase() : null;
}
function vr(e4) {
  if (e4 == null)
    return window;
  if (e4.toString() !== "[object Window]") {
    var t = e4.ownerDocument;
    return t && t.defaultView || window;
  }
  return e4;
}
function ki(e4) {
  var t = vr(e4).Element;
  return e4 instanceof t || e4 instanceof Element;
}
function Ir(e4) {
  var t = vr(e4).HTMLElement;
  return e4 instanceof t || e4 instanceof HTMLElement;
}
function Nd(e4) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = vr(e4).ShadowRoot;
  return e4 instanceof t || e4 instanceof ShadowRoot;
}
function SR(e4) {
  var t = e4.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !Ir(a) || !sn(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(l) {
      var c = o[l];
      c === false ? a.removeAttribute(l) : a.setAttribute(l, c === true ? "" : c);
    }));
  });
}
function ER(e4) {
  var t = e4.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, l = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), c = l.reduce(function(u, d) {
        return u[d] = "", u;
      }, {});
      !Ir(o) || !sn(o) || (Object.assign(o.style, c), Object.keys(a).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
const kR = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: SR,
  effect: ER,
  requires: ["computeStyles"]
};
function on(e4) {
  return e4.split("-")[0];
}
var Ei = Math.max, Rl = Math.min, uo = Math.round;
function Yf() {
  var e4 = navigator.userAgentData;
  return e4 != null && e4.brands && Array.isArray(e4.brands) ? e4.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function U0() {
  return !/^((?!chrome|android).)*safari/i.test(Yf());
}
function fo(e4, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e4.getBoundingClientRect(), o = 1, a = 1;
  t && Ir(e4) && (o = e4.offsetWidth > 0 && uo(n.width) / e4.offsetWidth || 1, a = e4.offsetHeight > 0 && uo(n.height) / e4.offsetHeight || 1);
  var l = ki(e4) ? vr(e4) : window, c = l.visualViewport, u = !U0() && r, d = (n.left + (u && c ? c.offsetLeft : 0)) / o, p = (n.top + (u && c ? c.offsetTop : 0)) / a, h = n.width / o, g = n.height / a;
  return {
    width: h,
    height: g,
    top: p,
    right: d + h,
    bottom: p + g,
    left: d,
    x: d,
    y: p
  };
}
function Md(e4) {
  var t = fo(e4), r = e4.offsetWidth, n = e4.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e4.offsetLeft,
    y: e4.offsetTop,
    width: r,
    height: n
  };
}
function V0(e4, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e4.contains(t))
    return true;
  if (r && Nd(r)) {
    var n = t;
    do {
      if (n && e4.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function Rn(e4) {
  return vr(e4).getComputedStyle(e4);
}
function OR(e4) {
  return ["table", "td", "th"].indexOf(sn(e4)) >= 0;
}
function ei(e4) {
  return ((ki(e4) ? e4.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e4.document
  )) || window.document).documentElement;
}
function Xl(e4) {
  return sn(e4) === "html" ? e4 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e4.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e4.parentNode || // DOM Element detected
    (Nd(e4) ? e4.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ei(e4)
  );
}
function fv(e4) {
  return !Ir(e4) || // https://github.com/popperjs/popper-core/issues/837
  Rn(e4).position === "fixed" ? null : e4.offsetParent;
}
function AR(e4) {
  var t = /firefox/i.test(Yf()), r = /Trident/i.test(Yf());
  if (r && Ir(e4)) {
    var n = Rn(e4);
    if (n.position === "fixed")
      return null;
  }
  var o = Xl(e4);
  for (Nd(o) && (o = o.host); Ir(o) && ["html", "body"].indexOf(sn(o)) < 0; ) {
    var a = Rn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Fa(e4) {
  for (var t = vr(e4), r = fv(e4); r && OR(r) && Rn(r).position === "static"; )
    r = fv(r);
  return r && (sn(r) === "html" || sn(r) === "body" && Rn(r).position === "static") ? t : r || AR(e4) || t;
}
function $d(e4) {
  return ["top", "bottom"].indexOf(e4) >= 0 ? "x" : "y";
}
function _a(e4, t, r) {
  return Ei(e4, Rl(t, r));
}
function TR(e4, t, r) {
  var n = _a(e4, t, r);
  return n > r ? r : n;
}
function q0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function G0(e4) {
  return Object.assign({}, q0(), e4);
}
function K0(e4, t) {
  return t.reduce(function(r, n) {
    return r[n] = e4, r;
  }, {});
}
var RR = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, G0(typeof t != "number" ? t : K0(t, za));
};
function CR(e4) {
  var t, r = e4.state, n = e4.name, o = e4.options, a = r.elements.arrow, l = r.modifiersData.popperOffsets, c = on(r.placement), u = $d(c), d = [nr, Mr].indexOf(c) >= 0, p = d ? "height" : "width";
  if (!(!a || !l)) {
    var h = RR(o.padding, r), g = Md(a), y = u === "y" ? rr : nr, _ = u === "y" ? Nr : Mr, v = r.rects.reference[p] + r.rects.reference[u] - l[u] - r.rects.popper[p], b = l[u] - r.rects.reference[u], m = Fa(a), w = m ? u === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, x = v / 2 - b / 2, k = h[y], E = w - g[p] - h[_], R = w / 2 - g[p] / 2 + x, z = _a(k, R, E), A = u;
    r.modifiersData[n] = (t = {}, t[A] = z, t.centerOffset = z - R, t);
  }
}
function PR(e4) {
  var t = e4.state, r = e4.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || V0(t.elements.popper, o) && (t.elements.arrow = o));
}
const IR = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: CR,
  effect: PR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function po(e4) {
  return e4.split("-")[1];
}
var NR = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function MR(e4, t) {
  var r = e4.x, n = e4.y, o = t.devicePixelRatio || 1;
  return {
    x: uo(r * o) / o || 0,
    y: uo(n * o) / o || 0
  };
}
function dv(e4) {
  var t, r = e4.popper, n = e4.popperRect, o = e4.placement, a = e4.variation, l = e4.offsets, c = e4.position, u = e4.gpuAcceleration, d = e4.adaptive, p = e4.roundOffsets, h = e4.isFixed, g = l.x, y = g === void 0 ? 0 : g, _ = l.y, v = _ === void 0 ? 0 : _, b = typeof p == "function" ? p({
    x: y,
    y: v
  }) : {
    x: y,
    y: v
  };
  y = b.x, v = b.y;
  var m = l.hasOwnProperty("x"), w = l.hasOwnProperty("y"), x = nr, k = rr, E = window;
  if (d) {
    var R = Fa(r), z = "clientHeight", A = "clientWidth";
    if (R === vr(r) && (R = ei(r), Rn(R).position !== "static" && c === "absolute" && (z = "scrollHeight", A = "scrollWidth")), R = R, o === rr || (o === nr || o === Mr) && a === Ta) {
      k = Nr;
      var P = h && R === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[z]
      );
      v -= P - n.height, v *= u ? 1 : -1;
    }
    if (o === nr || (o === rr || o === Nr) && a === Ta) {
      x = Mr;
      var B = h && R === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[A]
      );
      y -= B - n.width, y *= u ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: c
  }, d && NR), N = p === true ? MR({
    x: y,
    y: v
  }, vr(r)) : {
    x: y,
    y: v
  };
  if (y = N.x, v = N.y, u) {
    var j;
    return Object.assign({}, $, (j = {}, j[k] = w ? "0" : "", j[x] = m ? "0" : "", j.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", j));
  }
  return Object.assign({}, $, (t = {}, t[k] = w ? v + "px" : "", t[x] = m ? y + "px" : "", t.transform = "", t));
}
function $R(e4) {
  var t = e4.state, r = e4.options, n = r.gpuAcceleration, o = n === void 0 ? true : n, a = r.adaptive, l = a === void 0 ? true : a, c = r.roundOffsets, u = c === void 0 ? true : c, d = {
    placement: on(t.placement),
    variation: po(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dv(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dv(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const DR = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: $R,
  data: {}
};
var Ds = {
  passive: true
};
function LR(e4) {
  var t = e4.state, r = e4.instance, n = e4.options, o = n.scroll, a = o === void 0 ? true : o, l = n.resize, c = l === void 0 ? true : l, u = vr(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(p) {
    p.addEventListener("scroll", r.update, Ds);
  }), c && u.addEventListener("resize", r.update, Ds), function() {
    a && d.forEach(function(p) {
      p.removeEventListener("scroll", r.update, Ds);
    }), c && u.removeEventListener("resize", r.update, Ds);
  };
}
const zR = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: LR,
  data: {}
};
var FR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function vl(e4) {
  return e4.replace(/left|right|bottom|top/g, function(t) {
    return FR[t];
  });
}
var HR = {
  start: "end",
  end: "start"
};
function pv(e4) {
  return e4.replace(/start|end/g, function(t) {
    return HR[t];
  });
}
function Dd(e4) {
  var t = vr(e4), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ld(e4) {
  return fo(ei(e4)).left + Dd(e4).scrollLeft;
}
function WR(e4, t) {
  var r = vr(e4), n = ei(e4), o = r.visualViewport, a = n.clientWidth, l = n.clientHeight, c = 0, u = 0;
  if (o) {
    a = o.width, l = o.height;
    var d = U0();
    (d || !d && t === "fixed") && (c = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: l,
    x: c + Ld(e4),
    y: u
  };
}
function BR(e4) {
  var t, r = ei(e4), n = Dd(e4), o = (t = e4.ownerDocument) == null ? void 0 : t.body, a = Ei(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = Ei(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), c = -n.scrollLeft + Ld(e4), u = -n.scrollTop;
  return Rn(o || r).direction === "rtl" && (c += Ei(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: l,
    x: c,
    y: u
  };
}
function zd(e4) {
  var t = Rn(e4), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Z0(e4) {
  return ["html", "body", "#document"].indexOf(sn(e4)) >= 0 ? e4.ownerDocument.body : Ir(e4) && zd(e4) ? e4 : Z0(Xl(e4));
}
function Sa(e4, t) {
  var r;
  t === void 0 && (t = []);
  var n = Z0(e4), o = n === ((r = e4.ownerDocument) == null ? void 0 : r.body), a = vr(n), l = o ? [a].concat(a.visualViewport || [], zd(n) ? n : []) : n, c = t.concat(l);
  return o ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Sa(Xl(l)))
  );
}
function Xf(e4) {
  return Object.assign({}, e4, {
    left: e4.x,
    top: e4.y,
    right: e4.x + e4.width,
    bottom: e4.y + e4.height
  });
}
function jR(e4, t) {
  var r = fo(e4, false, t === "fixed");
  return r.top = r.top + e4.clientTop, r.left = r.left + e4.clientLeft, r.bottom = r.top + e4.clientHeight, r.right = r.left + e4.clientWidth, r.width = e4.clientWidth, r.height = e4.clientHeight, r.x = r.left, r.y = r.top, r;
}
function hv(e4, t, r) {
  return t === B0 ? Xf(WR(e4, r)) : ki(t) ? jR(t, r) : Xf(BR(ei(e4)));
}
function UR(e4) {
  var t = Sa(Xl(e4)), r = ["absolute", "fixed"].indexOf(Rn(e4).position) >= 0, n = r && Ir(e4) ? Fa(e4) : e4;
  return ki(n) ? t.filter(function(o) {
    return ki(o) && V0(o, n) && sn(o) !== "body";
  }) : [];
}
function VR(e4, t, r, n) {
  var o = t === "clippingParents" ? UR(e4) : [].concat(t), a = [].concat(o, [r]), l = a[0], c = a.reduce(function(u, d) {
    var p = hv(e4, d, n);
    return u.top = Ei(p.top, u.top), u.right = Rl(p.right, u.right), u.bottom = Rl(p.bottom, u.bottom), u.left = Ei(p.left, u.left), u;
  }, hv(e4, l, n));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Y0(e4) {
  var t = e4.reference, r = e4.element, n = e4.placement, o = n ? on(n) : null, a = n ? po(n) : null, l = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, u;
  switch (o) {
    case rr:
      u = {
        x: l,
        y: t.y - r.height
      };
      break;
    case Nr:
      u = {
        x: l,
        y: t.y + t.height
      };
      break;
    case Mr:
      u = {
        x: t.x + t.width,
        y: c
      };
      break;
    case nr:
      u = {
        x: t.x - r.width,
        y: c
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? $d(o) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (a) {
      case co:
        u[d] = u[d] - (t[p] / 2 - r[p] / 2);
        break;
      case Ta:
        u[d] = u[d] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return u;
}
function Ra(e4, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e4.placement : n, a = r.strategy, l = a === void 0 ? e4.strategy : a, c = r.boundary, u = c === void 0 ? fR : c, d = r.rootBoundary, p = d === void 0 ? B0 : d, h = r.elementContext, g = h === void 0 ? Fo : h, y = r.altBoundary, _ = y === void 0 ? false : y, v = r.padding, b = v === void 0 ? 0 : v, m = G0(typeof b != "number" ? b : K0(b, za)), w = g === Fo ? dR : Fo, x = e4.rects.popper, k = e4.elements[_ ? w : g], E = VR(ki(k) ? k : k.contextElement || ei(e4.elements.popper), u, p, l), R = fo(e4.elements.reference), z = Y0({
    reference: R,
    element: x,
    placement: o
  }), A = Xf(Object.assign({}, x, z)), P = g === Fo ? A : R, B = {
    top: E.top - P.top + m.top,
    bottom: P.bottom - E.bottom + m.bottom,
    left: E.left - P.left + m.left,
    right: P.right - E.right + m.right
  }, $ = e4.modifiersData.offset;
  if (g === Fo && $) {
    var N = $[o];
    Object.keys(B).forEach(function(j) {
      var F = [Mr, Nr].indexOf(j) >= 0 ? 1 : -1, I = [rr, Nr].indexOf(j) >= 0 ? "y" : "x";
      B[j] += N[I] * F;
    });
  }
  return B;
}
function qR(e4, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, l = r.padding, c = r.flipVariations, u = r.allowedAutoPlacements, d = u === void 0 ? j0 : u, p = po(n), h = p ? c ? uv : uv.filter(function(_) {
    return po(_) === p;
  }) : za, g = h.filter(function(_) {
    return d.indexOf(_) >= 0;
  });
  g.length === 0 && (g = h);
  var y = g.reduce(function(_, v) {
    return _[v] = Ra(e4, {
      placement: v,
      boundary: o,
      rootBoundary: a,
      padding: l
    })[on(v)], _;
  }, {});
  return Object.keys(y).sort(function(_, v) {
    return y[_] - y[v];
  });
}
function GR(e4) {
  if (on(e4) === Id)
    return [];
  var t = vl(e4);
  return [pv(e4), t, pv(t)];
}
function KR(e4) {
  var t = e4.state, r = e4.options, n = e4.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? true : o, l = r.altAxis, c = l === void 0 ? true : l, u = r.fallbackPlacements, d = r.padding, p = r.boundary, h = r.rootBoundary, g = r.altBoundary, y = r.flipVariations, _ = y === void 0 ? true : y, v = r.allowedAutoPlacements, b = t.options.placement, m = on(b), w = m === b, x = u || (w || !_ ? [vl(b)] : GR(b)), k = [b].concat(x).reduce(function(X, ae) {
      return X.concat(on(ae) === Id ? qR(t, {
        placement: ae,
        boundary: p,
        rootBoundary: h,
        padding: d,
        flipVariations: _,
        allowedAutoPlacements: v
      }) : ae);
    }, []), E = t.rects.reference, R = t.rects.popper, z = /* @__PURE__ */ new Map(), A = true, P = k[0], B = 0; B < k.length; B++) {
      var $ = k[B], N = on($), j = po($) === co, F = [rr, Nr].indexOf(N) >= 0, I = F ? "width" : "height", K = Ra(t, {
        placement: $,
        boundary: p,
        rootBoundary: h,
        altBoundary: g,
        padding: d
      }), Y = F ? j ? Mr : nr : j ? Nr : rr;
      E[I] > R[I] && (Y = vl(Y));
      var G = vl(Y), ge = [];
      if (a && ge.push(K[N] <= 0), c && ge.push(K[Y] <= 0, K[G] <= 0), ge.every(function(X) {
        return X;
      })) {
        P = $, A = false;
        break;
      }
      z.set($, ge);
    }
    if (A)
      for (var L = _ ? 3 : 1, V = function(ae) {
        var oe = k.find(function(ie) {
          var ce = z.get(ie);
          if (ce)
            return ce.slice(0, ae).every(function(de) {
              return de;
            });
        });
        if (oe)
          return P = oe, "break";
      }, te = L; te > 0; te--) {
        var Q = V(te);
        if (Q === "break") break;
      }
    t.placement !== P && (t.modifiersData[n]._skip = true, t.placement = P, t.reset = true);
  }
}
const ZR = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: KR,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function gv(e4, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e4.top - t.height - r.y,
    right: e4.right - t.width + r.x,
    bottom: e4.bottom - t.height + r.y,
    left: e4.left - t.width - r.x
  };
}
function vv(e4) {
  return [rr, Mr, Nr, nr].some(function(t) {
    return e4[t] >= 0;
  });
}
function YR(e4) {
  var t = e4.state, r = e4.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, l = Ra(t, {
    elementContext: "reference"
  }), c = Ra(t, {
    altBoundary: true
  }), u = gv(l, n), d = gv(c, o, a), p = vv(u), h = vv(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": h
  });
}
const XR = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: YR
};
function JR(e4, t, r) {
  var n = on(e4), o = [nr, rr].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e4
  })) : r, l = a[0], c = a[1];
  return l = l || 0, c = (c || 0) * o, [nr, Mr].indexOf(n) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function QR(e4) {
  var t = e4.state, r = e4.options, n = e4.name, o = r.offset, a = o === void 0 ? [0, 0] : o, l = j0.reduce(function(p, h) {
    return p[h] = JR(h, t.rects, a), p;
  }, {}), c = l[t.placement], u = c.x, d = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = l;
}
const eC = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: QR
};
function tC(e4) {
  var t = e4.state, r = e4.name;
  t.modifiersData[r] = Y0({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const rC = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: tC,
  data: {}
};
function nC(e4) {
  return e4 === "x" ? "y" : "x";
}
function iC(e4) {
  var t = e4.state, r = e4.options, n = e4.name, o = r.mainAxis, a = o === void 0 ? true : o, l = r.altAxis, c = l === void 0 ? false : l, u = r.boundary, d = r.rootBoundary, p = r.altBoundary, h = r.padding, g = r.tether, y = g === void 0 ? true : g, _ = r.tetherOffset, v = _ === void 0 ? 0 : _, b = Ra(t, {
    boundary: u,
    rootBoundary: d,
    padding: h,
    altBoundary: p
  }), m = on(t.placement), w = po(t.placement), x = !w, k = $d(m), E = nC(k), R = t.modifiersData.popperOffsets, z = t.rects.reference, A = t.rects.popper, P = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, B = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, N = {
    x: 0,
    y: 0
  };
  if (R) {
    if (a) {
      var j, F = k === "y" ? rr : nr, I = k === "y" ? Nr : Mr, K = k === "y" ? "height" : "width", Y = R[k], G = Y + b[F], ge = Y - b[I], L = y ? -A[K] / 2 : 0, V = w === co ? z[K] : A[K], te = w === co ? -A[K] : -z[K], Q = t.elements.arrow, X = y && Q ? Md(Q) : {
        width: 0,
        height: 0
      }, ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : q0(), oe = ae[F], ie = ae[I], ce = _a(0, z[K], X[K]), de = x ? z[K] / 2 - L - ce - oe - B.mainAxis : V - ce - oe - B.mainAxis, fe = x ? -z[K] / 2 + L + ce + ie + B.mainAxis : te + ce + ie + B.mainAxis, we = t.elements.arrow && Fa(t.elements.arrow), Z = we ? k === "y" ? we.clientTop || 0 : we.clientLeft || 0 : 0, He = (j = $ == null ? void 0 : $[k]) != null ? j : 0, he = Y + de - He - Z, Pt = Y + fe - He, un = _a(y ? Rl(G, he) : G, Y, y ? Ei(ge, Pt) : ge);
      R[k] = un, N[k] = un - Y;
    }
    if (c) {
      var Ut, qa = k === "x" ? rr : nr, yc = k === "x" ? Nr : Mr, ir = R[E], zt = E === "y" ? "height" : "width", Cn = ir + b[qa], ii = ir - b[yc], So = [rr, nr].indexOf(m) !== -1, Pn = (Ut = $ == null ? void 0 : $[E]) != null ? Ut : 0, Ga = So ? Cn : ir - z[zt] - A[zt] - Pn + B.altAxis, In = So ? ir + z[zt] + A[zt] - Pn - B.altAxis : ii, fn = y && So ? TR(Ga, ir, In) : _a(y ? Ga : Cn, ir, y ? In : ii);
      R[E] = fn, N[E] = fn - ir;
    }
    t.modifiersData[n] = N;
  }
}
const oC = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: iC,
  requiresIfExists: ["offset"]
};
function aC(e4) {
  return {
    scrollLeft: e4.scrollLeft,
    scrollTop: e4.scrollTop
  };
}
function sC(e4) {
  return e4 === vr(e4) || !Ir(e4) ? Dd(e4) : aC(e4);
}
function lC(e4) {
  var t = e4.getBoundingClientRect(), r = uo(t.width) / e4.offsetWidth || 1, n = uo(t.height) / e4.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function cC(e4, t, r) {
  r === void 0 && (r = false);
  var n = Ir(t), o = Ir(t) && lC(t), a = ei(t), l = fo(e4, o, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((sn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zd(a)) && (c = sC(t)), Ir(t) ? (u = fo(t, true), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Ld(a))), {
    x: l.left + c.scrollLeft - u.x,
    y: l.top + c.scrollTop - u.y,
    width: l.width,
    height: l.height
  };
}
function uC(e4) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e4.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var l = [].concat(a.requires || [], a.requiresIfExists || []);
    l.forEach(function(c) {
      if (!r.has(c)) {
        var u = t.get(c);
        u && o(u);
      }
    }), n.push(a);
  }
  return e4.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function fC(e4) {
  var t = uC(e4);
  return _R.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function dC(e4) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e4());
      });
    })), t;
  };
}
function pC(e4) {
  var t = e4.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var mv = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bv() {
  for (var e4 = arguments.length, t = new Array(e4), r = 0; r < e4; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function hC(e4) {
  e4 === void 0 && (e4 = {});
  var t = e4, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? mv : o;
  return function(c, u, d) {
    d === void 0 && (d = a);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, mv, a),
      modifiersData: {},
      elements: {
        reference: c,
        popper: u
      },
      attributes: {},
      styles: {}
    }, h = [], g = false, y = {
      state: p,
      setOptions: function(m) {
        var w = typeof m == "function" ? m(p.options) : m;
        v(), p.options = Object.assign({}, a, p.options, w), p.scrollParents = {
          reference: ki(c) ? Sa(c) : c.contextElement ? Sa(c.contextElement) : [],
          popper: Sa(u)
        };
        var x = fC(pC([].concat(n, p.options.modifiers)));
        return p.orderedModifiers = x.filter(function(k) {
          return k.enabled;
        }), _(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!g) {
          var m = p.elements, w = m.reference, x = m.popper;
          if (bv(w, x)) {
            p.rects = {
              reference: cC(w, Fa(x), p.options.strategy === "fixed"),
              popper: Md(x)
            }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function(B) {
              return p.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var k = 0; k < p.orderedModifiers.length; k++) {
              if (p.reset === true) {
                p.reset = false, k = -1;
                continue;
              }
              var E = p.orderedModifiers[k], R = E.fn, z = E.options, A = z === void 0 ? {} : z, P = E.name;
              typeof R == "function" && (p = R({
                state: p,
                options: A,
                name: P,
                instance: y
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: dC(function() {
        return new Promise(function(b) {
          y.forceUpdate(), b(p);
        });
      }),
      destroy: function() {
        v(), g = true;
      }
    };
    if (!bv(c, u))
      return y;
    y.setOptions(d).then(function(b) {
      !g && d.onFirstUpdate && d.onFirstUpdate(b);
    });
    function _() {
      p.orderedModifiers.forEach(function(b) {
        var m = b.name, w = b.options, x = w === void 0 ? {} : w, k = b.effect;
        if (typeof k == "function") {
          var E = k({
            state: p,
            name: m,
            instance: y,
            options: x
          }), R = function() {
          };
          h.push(E || R);
        }
      });
    }
    function v() {
      h.forEach(function(b) {
        return b();
      }), h = [];
    }
    return y;
  };
}
var gC = [zR, rC, DR, kR, eC, ZR, oC, IR, XR], vC = /* @__PURE__ */ hC({
  defaultModifiers: gC
}), Ls = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function X0(e4) {
  return e4 && e4.__esModule && Object.prototype.hasOwnProperty.call(e4, "default") ? e4.default : e4;
}
var ju, yv;
function mC() {
  if (yv) return ju;
  yv = 1;
  var e4 = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", n = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function o(a, l) {
    if (a === l) return true;
    if (a && l && typeof a == "object" && typeof l == "object") {
      if (a.constructor !== l.constructor) return false;
      var c, u, d;
      if (Array.isArray(a)) {
        if (c = a.length, c != l.length) return false;
        for (u = c; u-- !== 0; )
          if (!o(a[u], l[u])) return false;
        return true;
      }
      var p;
      if (t && a instanceof Map && l instanceof Map) {
        if (a.size !== l.size) return false;
        for (p = a.entries(); !(u = p.next()).done; )
          if (!l.has(u.value[0])) return false;
        for (p = a.entries(); !(u = p.next()).done; )
          if (!o(u.value[1], l.get(u.value[0]))) return false;
        return true;
      }
      if (r && a instanceof Set && l instanceof Set) {
        if (a.size !== l.size) return false;
        for (p = a.entries(); !(u = p.next()).done; )
          if (!l.has(u.value[0])) return false;
        return true;
      }
      if (n && ArrayBuffer.isView(a) && ArrayBuffer.isView(l)) {
        if (c = a.length, c != l.length) return false;
        for (u = c; u-- !== 0; )
          if (a[u] !== l[u]) return false;
        return true;
      }
      if (a.constructor === RegExp) return a.source === l.source && a.flags === l.flags;
      if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf == "function" && typeof l.valueOf == "function") return a.valueOf() === l.valueOf();
      if (a.toString !== Object.prototype.toString && typeof a.toString == "function" && typeof l.toString == "function") return a.toString() === l.toString();
      if (d = Object.keys(a), c = d.length, c !== Object.keys(l).length) return false;
      for (u = c; u-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(l, d[u])) return false;
      if (e4 && a instanceof Element) return false;
      for (u = c; u-- !== 0; )
        if (!((d[u] === "_owner" || d[u] === "__v" || d[u] === "__o") && a.$$typeof) && !o(a[d[u]], l[d[u]]))
          return false;
      return true;
    }
    return a !== a && l !== l;
  }
  return ju = function(l, c) {
    try {
      return o(l, c);
    } catch (u) {
      if ((u.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw u;
    }
  }, ju;
}
var bC = mC();
const yC = /* @__PURE__ */ X0(bC);
var wC = [], J0 = function(t, r, n) {
  n === void 0 && (n = {});
  var o = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), a = {
    onFirstUpdate: n.onFirstUpdate,
    placement: n.placement || "bottom",
    strategy: n.strategy || "absolute",
    modifiers: n.modifiers || wC
  }, l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState({
    styles: {
      popper: {
        position: a.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), c = l[0], u = l[1], d = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function(y) {
        var _ = y.state, v = Object.keys(_.elements);
        qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__.flushSync(function() {
          u({
            styles: lv(v.map(function(b) {
              return [b, _.styles[b] || {}];
            })),
            attributes: lv(v.map(function(b) {
              return [b, _.attributes[b]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), p = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(function() {
    var g = {
      onFirstUpdate: a.onFirstUpdate,
      placement: a.placement,
      strategy: a.strategy,
      modifiers: [].concat(a.modifiers, [d, {
        name: "applyStyles",
        enabled: false
      }])
    };
    return yC(o.current, g) ? o.current || g : (o.current = g, g);
  }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, d]), h = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef();
  return cv(function() {
    h.current && h.current.setOptions(p);
  }, [p]), cv(function() {
    if (!(t == null || r == null)) {
      var g = n.createPopper || vC, y = g(t, r, p);
      return h.current = y, function() {
        y.destroy(), h.current = null;
      };
    }
  }, [t, r, n.createPopper]), {
    state: h.current ? h.current.state : null,
    styles: c.styles,
    attributes: c.attributes,
    update: h.current ? h.current.update : null,
    forceUpdate: h.current ? h.current.forceUpdate : null
  };
};
const xC = (e4) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 z-[1999]", onClick: e4.onClick }), _C = F.forwardRef(({ children: e4, style: t, attributes: r }, n) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: {
      ...t,
      zIndex: 2e3
    },
    ...r,
    ref: n,
    className: "w-60 rounded border rounded border border-grey-50 bg-grey-900 shadow-2xl",
    "data-cy": "dialogBody",
    children: e4
  }
)), i4 = ({
  referenceElement: e4,
  placement: t,
  isOpen: r,
  children: n,
  onClose: o
}) => {
  const [a, l] = F.useState(null), { styles: c, attributes: u } = J0(e4, a, {
    placement: t || "bottom-start"
  }), d = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(() => {
    o && o();
  }, [o]);
  return r ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(uR, { children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(xC, { onClick: () => d() }),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      _C,
      {
        ref: l,
        style: c.popper,
        attributes: u.popper,
        children: n
      }
    )
  ] }) : null;
};
var Uu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var wv;
function Q0() {
  return wv || (wv = 1, (function(e4) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (a = o(a, n(c)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var l = "";
        for (var c in a)
          t.call(a, c) && a[c] && (l = o(l, c));
        return l;
      }
      function o(a, l) {
        return l ? a ? a + " " + l : a + l : a;
      }
      e4.exports ? (r.default = r, e4.exports = r) : window.classNames = r;
    })();
  })(Uu)), Uu.exports;
}
var SC = Q0();
const it = /* @__PURE__ */ X0(SC);
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e4) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e4[n] = r[n]);
    }
    return e4;
  }, yi.apply(this, arguments);
}
const EC = ["children", "options"], xv = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e4, t) => (e4[t.toLowerCase()] = t, e4), { class: "className", for: "htmlFor" }), _v = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, kC = ["style", "script", "pre"], OC = ["src", "href", "data", "formAction", "srcDoc", "action"], AC = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, TC = /\n{2,}$/, Sv = /^(\s*>[\s\S]*?)(?=\n\n|$)/, RC = /^ *> ?/gm, CC = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, PC = /^ {2,}\n/, IC = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, Ev = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, kv = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, NC = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, MC = /^(?:\n *)*\n/, $C = /\r\n?/g, DC = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, LC = /^\[\^([^\]]+)]/, zC = /\f/g, FC = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, HC = /^\s*?\[(x|\s)\]/, Ov = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Av = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Tv = /^([^\n]+)\n *(=|-)\2{2,} *\n/, Vu = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, WC = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Rv = /^<!--[\s\S]*?(?:-->)/, BC = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, qu = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, jC = /^\{.*\}$/, UC = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, VC = /^<([^ >]+[:@\/][^ >]+)>/, qC = /-([a-z])?/gi, Cv = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, GC = /^[^\n]+(?:  \n|\n{2,})/, KC = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, ZC = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, YC = /^\[([^\]]*)\] ?\[([^\]]*)\]/, XC = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, JC = /\t/g, QC = /(^ *\||\| *$)/g, eP = /^ *:-+: *$/, tP = /^ *:-+ *$/, rP = /^ *-+: *$/, Jl = (e4) => `(?=[\\s\\S]+?\\1${e4 ? "\\1" : ""})`, Ql = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", nP = RegExp(`^([*_])\\1${Jl(1)}${Ql}\\1\\1(?!\\1)`), iP = RegExp(`^([*_])${Jl(0)}${Ql}\\1(?!\\1)`), oP = RegExp(`^(==)${Jl(0)}${Ql}\\1`), aP = RegExp(`^(~~)${Jl(0)}${Ql}\\1`), sP = /^(:[a-zA-Z0-9-_]+:)/, lP = /^\\([^0-9A-Za-z\s])/, cP = /\\([^0-9A-Za-z\s])/g, uP = /^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/, fP = /^\n+/, dP = /^([ \t]*)/, pP = /(?:^|\n)( *)$/, Fd = "(?:\\d+\\.)", Hd = "(?:[*+-])";
function ey(e4) {
  return "( *)(" + (e4 === 1 ? Fd : Hd) + ") +";
}
const ty = ey(1), ry = ey(2);
function ny(e4) {
  return RegExp("^" + (e4 === 1 ? ty : ry));
}
const hP = ny(1), gP = ny(2);
function iy(e4) {
  return RegExp("^" + (e4 === 1 ? ty : ry) + "[^\\n]*(?:\\n(?!\\1" + (e4 === 1 ? Fd : Hd) + " )[^\\n]*)*(\\n|$)", "gm");
}
const vP = iy(1), mP = iy(2);
function oy(e4) {
  const t = e4 === 1 ? Fd : Hd;
  return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const ay = oy(1), sy = oy(2);
function Pv(e4, t) {
  const r = t === 1, n = r ? ay : sy, o = r ? vP : mP, a = r ? hP : gP;
  return { t: (l) => a.test(l), o: ho(function(l, c) {
    const u = pP.exec(c.prevCapture);
    return u && (c.list || !c.inline && !c.simple) ? n.exec(l = u[1] + l) : null;
  }), i: 1, u(l, c, u) {
    const d = r ? +l[2] : void 0, p = l[0].replace(TC, `
`).match(o);
    let h = false;
    return { items: p.map(function(g, y) {
      const _ = a.exec(g)[0].length, v = RegExp("^ {1," + _ + "}", "gm"), b = g.replace(v, "").replace(a, ""), m = y === p.length - 1, w = b.indexOf(`

`) !== -1 || m && h;
      h = w;
      const x = u.inline, k = u.list;
      let E;
      u.list = true, w ? (u.inline = false, E = Ea(b) + `

`) : (u.inline = true, E = Ea(b));
      const R = c(E, u);
      return u.inline = x, u.list = k, R;
    }), ordered: r, start: d };
  }, l: (l, c, u) => e4(l.ordered ? "ol" : "ul", { key: u.key, start: l.type === "20" ? l.start : void 0 }, l.items.map(function(d, p) {
    return e4("li", { key: p }, c(d, u));
  })) };
}
const bP = RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), yP = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
function Iv(e4) {
  return typeof e4 == "string";
}
function Ea(e4) {
  let t = e4.length;
  for (; t > 0 && e4[t - 1] <= " "; ) t--;
  return e4.slice(0, t);
}
function ml(e4, t) {
  return e4.startsWith(t);
}
function wP(e4, t, r) {
  if (Array.isArray(r)) {
    for (let n = 0; n < r.length; n++) if (ml(e4, r[n])) return true;
    return false;
  }
  return r(e4, t);
}
function Ho(e4) {
  return e4.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function xP(e4) {
  return rP.test(e4) ? "right" : eP.test(e4) ? "center" : tP.test(e4) ? "left" : null;
}
function Nv(e4, t, r, n) {
  const o = r.inTable;
  r.inTable = true;
  let a = [[]], l = "";
  function c() {
    if (!l) return;
    const u = a[a.length - 1];
    u.push.apply(u, t(l, r)), l = "";
  }
  return e4.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((u, d, p) => {
    u.trim() === "|" && (c(), n) ? d !== 0 && d !== p.length - 1 && a.push([]) : l += u;
  }), c(), r.inTable = o, a;
}
function _P(e4, t, r) {
  r.inline = true;
  const n = e4[2] ? e4[2].replace(QC, "").split("|").map(xP) : [], o = e4[3] ? (function(l, c, u) {
    return l.trim().split(`
`).map(function(d) {
      return Nv(d, c, u, true);
    });
  })(e4[3], t, r) : [], a = Nv(e4[1], t, r, !!o.length);
  return r.inline = false, o.length ? { align: n, cells: o, header: a, type: "25" } : { children: a, type: "21" };
}
function Mv(e4, t) {
  return e4.align[t] == null ? {} : { textAlign: e4.align[t] };
}
function ho(e4) {
  return e4.inline = 1, e4;
}
function hi(e4) {
  return ho(function(t, r) {
    return r.inline ? e4.exec(t) : null;
  });
}
function Bn(e4) {
  return ho(function(t, r) {
    return r.inline || r.simple ? e4.exec(t) : null;
  });
}
function xn(e4) {
  return function(t, r) {
    return r.inline || r.simple ? null : e4.exec(t);
  };
}
function zs(e4) {
  return ho(function(t) {
    return e4.exec(t);
  });
}
const SP = /(javascript|vbscript|data(?!:image)):/i;
function EP(e4) {
  try {
    const t = decodeURIComponent(e4).replace(/[^A-Za-z0-9/:]/g, "");
    if (SP.test(t)) return null;
  } catch {
    return null;
  }
  return e4;
}
function Zr(e4) {
  return e4 && e4.replace(cP, "$1");
}
function bl(e4, t, r) {
  const n = r.inline || false, o = r.simple || false;
  r.inline = true, r.simple = true;
  const a = e4(t, r);
  return r.inline = n, r.simple = o, a;
}
function kP(e4, t, r) {
  const n = r.inline || false, o = r.simple || false;
  r.inline = false, r.simple = true;
  const a = e4(t, r);
  return r.inline = n, r.simple = o, a;
}
function OP(e4, t, r) {
  const n = r.inline || false;
  r.inline = false;
  const o = e4(t, r);
  return r.inline = n, o;
}
const Gu = (e4, t, r) => ({ children: bl(t, e4[2], r) });
function Ku() {
  return {};
}
function Zu() {
  return null;
}
function AP(...e4) {
  return e4.filter(Boolean).join(" ");
}
function Yu(e4, t, r) {
  let n = e4;
  const o = t.split(".");
  for (; o.length && (n = n[o[0]], n !== void 0); ) o.shift();
  return n || r;
}
function TP(e4 = "", t = {}) {
  t.overrides = t.overrides || {}, t.namedCodesToUnicode = t.namedCodesToUnicode ? yi({}, _v, t.namedCodesToUnicode) : _v;
  const r = t.slugify || Ho, n = t.sanitizer || EP, o = t.createElement || qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement, a = [Sv, Ev, kv, t.enforceAtxHeadings ? Av : Ov, Tv, Cv, ay, sy], l = [...a, GC, Vu, Rv, qu];
  function c(m, w) {
    for (let x = 0; x < m.length; x++) if (m[x].test(w)) return true;
    return false;
  }
  function u(m, w, ...x) {
    const k = Yu(t.overrides, m + ".props", {});
    return o((function(E, R) {
      const z = Yu(R, E);
      return z ? typeof z == "function" || typeof z == "object" && "render" in z ? z : Yu(R, E + ".component", E) : E;
    })(m, t.overrides), yi({}, w, k, { className: AP(w == null ? void 0 : w.className, k.className) || void 0 }), ...x);
  }
  function d(m) {
    m = m.replace(FC, "");
    let w = false;
    t.forceInline ? w = true : t.forceBlock || (w = XC.test(m) === false);
    const x = v(_(w ? m : Ea(m).replace(fP, "") + `

`, { inline: w }));
    for (; Iv(x[x.length - 1]) && !x[x.length - 1].trim(); ) x.pop();
    if (t.wrapper === null) return x;
    const k = t.wrapper || (w ? "span" : "div");
    let E;
    if (x.length > 1 || t.forceWrapper) E = x;
    else {
      if (x.length === 1) return E = x[0], typeof E == "string" ? u("span", { key: "outer" }, E) : E;
      E = null;
    }
    return o(k, { key: "outer" }, E);
  }
  function p(m, w) {
    if (!w || !w.trim()) return null;
    const x = w.match(AC);
    return x ? x.reduce(function(k, E) {
      const R = E.indexOf("=");
      if (R !== -1) {
        const z = (function($) {
          return $.indexOf("-") !== -1 && $.match(BC) === null && ($ = $.replace(qC, function(N, j) {
            return j.toUpperCase();
          })), $;
        })(E.slice(0, R)).trim(), A = (function($) {
          const N = $[0];
          return (N === '"' || N === "'") && $.length >= 2 && $[$.length - 1] === N ? $.slice(1, -1) : $;
        })(E.slice(R + 1).trim()), P = xv[z] || z;
        if (P === "ref") return k;
        const B = k[P] = (function($, N, j, F) {
          return N === "style" ? (function(I) {
            const K = [];
            let Y = "", G = false, ge = false, L = "";
            if (!I) return K;
            for (let te = 0; te < I.length; te++) {
              const Q = I[te];
              if (Q !== '"' && Q !== "'" || G || (ge ? Q === L && (ge = false, L = "") : (ge = true, L = Q)), Q === "(" && Y.endsWith("url") ? G = true : Q === ")" && G && (G = false), Q !== ";" || ge || G) Y += Q;
              else {
                const X = Y.trim();
                if (X) {
                  const ae = X.indexOf(":");
                  if (ae > 0) {
                    const oe = X.slice(0, ae).trim(), ie = X.slice(ae + 1).trim();
                    K.push([oe, ie]);
                  }
                }
                Y = "";
              }
            }
            const V = Y.trim();
            if (V) {
              const te = V.indexOf(":");
              if (te > 0) {
                const Q = V.slice(0, te).trim(), X = V.slice(te + 1).trim();
                K.push([Q, X]);
              }
            }
            return K;
          })(j).reduce(function(I, [K, Y]) {
            return I[K.replace(/(-[a-z])/g, (G) => G[1].toUpperCase())] = F(Y, $, K), I;
          }, {}) : OC.indexOf(N) !== -1 ? F(Zr(j), $, N) : (j.match(jC) && (j = Zr(j.slice(1, j.length - 1))), j === "true" || j !== "false" && j);
        })(m, z, A, n);
        typeof B == "string" && (Vu.test(B) || qu.test(B)) && (k[P] = d(B.trim()));
      } else E !== "style" && (k[xv[E] || E] = true);
      return k;
    }, {}) : null;
  }
  const h = [], g = {}, y = { 0: { t: [">"], o: xn(Sv), i: 1, u(m, w, x) {
    const [, k, E] = m[0].replace(RC, "").match(CC);
    return { alert: k, children: w(E, x) };
  }, l(m, w, x) {
    const k = { key: x.key };
    return m.alert && (k.className = "markdown-alert-" + r(m.alert.toLowerCase(), Ho), m.children.unshift({ attrs: {}, children: [{ type: "27", text: m.alert }], noInnerParse: true, type: "11", tag: "header" })), u("blockquote", k, w(m.children, x));
  } }, 1: { t: ["  "], o: zs(PC), i: 1, u: Ku, l: (m, w, x) => u("br", { key: x.key }) }, 2: { t: ["--", "__", "**", "- ", "* ", "_ "], o: xn(IC), i: 1, u: Ku, l: (m, w, x) => u("hr", { key: x.key }) }, 3: { t: ["    "], o: xn(kv), i: 0, u: (m) => ({ lang: void 0, text: Zr(Ea(m[0].replace(/^ {4}/gm, ""))) }), l: (m, w, x) => u("pre", { key: x.key }, u("code", yi({}, m.attrs, { className: m.lang ? "lang-" + m.lang : "" }), m.text)) }, 4: { t: ["```", "~~~"], o: xn(Ev), i: 0, u: (m) => ({ attrs: p("code", m[3] || ""), lang: m[2] || void 0, text: m[4], type: "3" }) }, 5: { t: ["`"], o: Bn(NC), i: 3, u: (m) => ({ text: Zr(m[2]) }), l: (m, w, x) => u("code", { key: x.key }, m.text) }, 6: { t: ["[^"], o: xn(DC), i: 0, u: (m) => (h.push({ footnote: m[2], identifier: m[1] }), {}), l: Zu }, 7: { t: ["[^"], o: hi(LC), i: 1, u: (m) => ({ target: "#" + r(m[1], Ho), text: m[1] }), l: (m, w, x) => u("a", { key: x.key, href: n(m.target, "a", "href") }, u("sup", { key: x.key }, m.text)) }, 8: { t: ["[ ]", "[x]"], o: hi(HC), i: 1, u: (m) => ({ completed: m[1].toLowerCase() === "x" }), l: (m, w, x) => u("input", { checked: m.completed, key: x.key, readOnly: true, type: "checkbox" }) }, 9: { t: ["#"], o: xn(t.enforceAtxHeadings ? Av : Ov), i: 1, u: (m, w, x) => ({ children: bl(w, m[2], x), id: r(m[2], Ho), level: m[1].length }), l: (m, w, x) => u("h" + m.level, { id: m.id, key: x.key }, w(m.children, x)) }, 10: { t: (m) => {
    const w = m.indexOf(`
`);
    return w > 0 && w < m.length - 1 && (m[w + 1] === "=" || m[w + 1] === "-");
  }, o: xn(Tv), i: 0, u: (m, w, x) => ({ children: bl(w, m[1], x), level: m[2] === "=" ? 1 : 2, type: "9" }) }, 11: { t: ["<"], o: zs(Vu), i: 1, u(m, w, x) {
    const [, k] = m[3].match(dP), E = RegExp("^" + k, "gm"), R = m[3].replace(E, ""), z = c(l, R) ? OP : bl, A = m[1].toLowerCase(), P = kC.indexOf(A) !== -1, B = (P ? A : m[1]).trim(), $ = { attrs: p(B, m[2]), noInnerParse: P, tag: B };
    if (x.inAnchor = x.inAnchor || A === "a", P) $.text = m[3];
    else {
      const N = x.inHTML;
      x.inHTML = true, $.children = z(w, R, x), x.inHTML = N;
    }
    return x.inAnchor = false, $;
  }, l: (m, w, x) => u(m.tag, yi({ key: x.key }, m.attrs), m.text || (m.children ? w(m.children, x) : "")) }, 13: { t: ["<"], o: zs(qu), i: 1, u(m) {
    const w = m[1].trim();
    return { attrs: p(w, m[2] || ""), tag: w };
  }, l: (m, w, x) => u(m.tag, yi({}, m.attrs, { key: x.key })) }, 12: { t: ["<!--"], o: zs(Rv), i: 1, u: () => ({}), l: Zu }, 14: { t: ["!["], o: Bn(yP), i: 1, u: (m) => ({ alt: Zr(m[1]), target: Zr(m[2]), title: Zr(m[3]) }), l: (m, w, x) => u("img", { key: x.key, alt: m.alt || void 0, title: m.title || void 0, src: n(m.target, "img", "src") }) }, 15: { t: ["["], o: hi(bP), i: 3, u: (m, w, x) => ({ children: kP(w, m[1], x), target: Zr(m[2]), title: Zr(m[3]) }), l: (m, w, x) => u("a", { key: x.key, href: n(m.target, "a", "href"), title: m.title }, w(m.children, x)) }, 16: { t: ["<"], o: hi(VC), i: 0, u(m) {
    let w = m[1], x = false;
    return w.indexOf("@") !== -1 && w.indexOf("//") === -1 && (x = true, w = w.replace("mailto:", "")), { children: [{ text: w, type: "27" }], target: x ? "mailto:" + w : w, type: "15" };
  } }, 17: { t: (m, w) => !w.inAnchor && !t.disableAutoLink && (ml(m, "http://") || ml(m, "https://")), o: hi(UC), i: 0, u: (m) => ({ children: [{ text: m[1], type: "27" }], target: m[1], title: void 0, type: "15" }) }, 20: Pv(u, 1), 33: Pv(u, 2), 19: { t: [`
`], o: xn(MC), i: 3, u: Ku, l: () => `
` }, 21: { o: ho(function(m, w) {
    if (w.inline || w.simple || w.inHTML && m.indexOf(`

`) === -1 && w.prevCapture.indexOf(`

`) === -1) return null;
    let x = "", k = 0;
    for (; ; ) {
      const R = m.indexOf(`
`, k), z = m.slice(k, R === -1 ? void 0 : R + 1);
      if (c(a, z) || (x += z, R === -1 || !z.trim())) break;
      k = R + 1;
    }
    const E = Ea(x);
    return E === "" ? null : [x, , E];
  }), i: 3, u: Gu, l: (m, w, x) => u("p", { key: x.key }, w(m.children, x)) }, 22: { t: ["["], o: hi(KC), i: 0, u: (m) => (g[m[1]] = { target: m[2], title: m[4] }, {}), l: Zu }, 23: { t: ["!["], o: Bn(ZC), i: 0, u: (m) => ({ alt: m[1] ? Zr(m[1]) : void 0, ref: m[2] }), l: (m, w, x) => g[m.ref] ? u("img", { key: x.key, alt: m.alt, src: n(g[m.ref].target, "img", "src"), title: g[m.ref].title }) : null }, 24: { t: (m) => m[0] === "[" && m.indexOf("](") === -1, o: hi(YC), i: 0, u: (m, w, x) => ({ children: w(m[1], x), fallbackChildren: m[0], ref: m[2] }), l: (m, w, x) => g[m.ref] ? u("a", { key: x.key, href: n(g[m.ref].target, "a", "href"), title: g[m.ref].title }, w(m.children, x)) : u("span", { key: x.key }, m.fallbackChildren) }, 25: { t: ["|"], o: xn(Cv), i: 1, u: _P, l(m, w, x) {
    const k = m;
    return u("table", { key: x.key }, u("thead", null, u("tr", null, k.header.map(function(E, R) {
      return u("th", { key: R, style: Mv(k, R) }, w(E, x));
    }))), u("tbody", null, k.cells.map(function(E, R) {
      return u("tr", { key: R }, E.map(function(z, A) {
        return u("td", { key: A, style: Mv(k, A) }, w(z, x));
      }));
    })));
  } }, 27: { o: ho(function(m, w) {
    let x;
    return ml(m, ":") && (x = sP.exec(m)), x || uP.exec(m);
  }), i: 4, u(m) {
    const w = m[0];
    return { text: w.indexOf("&") === -1 ? w : w.replace(WC, (x, k) => t.namedCodesToUnicode[k] || x) };
  }, l: (m) => m.text }, 28: { t: ["**", "__"], o: Bn(nP), i: 2, u: (m, w, x) => ({ children: w(m[2], x) }), l: (m, w, x) => u("strong", { key: x.key }, w(m.children, x)) }, 29: { t: (m) => {
    const w = m[0];
    return (w === "*" || w === "_") && m[1] !== w;
  }, o: Bn(iP), i: 3, u: (m, w, x) => ({ children: w(m[2], x) }), l: (m, w, x) => u("em", { key: x.key }, w(m.children, x)) }, 30: { t: ["\\"], o: Bn(lP), i: 1, u: (m) => ({ text: m[1], type: "27" }) }, 31: { t: ["=="], o: Bn(oP), i: 3, u: Gu, l: (m, w, x) => u("mark", { key: x.key }, w(m.children, x)) }, 32: { t: ["~~"], o: Bn(aP), i: 3, u: Gu, l: (m, w, x) => u("del", { key: x.key }, w(m.children, x)) } };
  t.disableParsingRawHTML === true && (delete y[11], delete y[13]);
  const _ = (function(m) {
    var w = Object.keys(m);
    function x(k, E) {
      var R = [];
      if (E.prevCapture = E.prevCapture || "", k.trim()) for (; k; ) for (var z = 0; z < w.length; ) {
        var A = w[z], P = m[A];
        if (!P.t || wP(k, E, P.t)) {
          var B = P.o(k, E);
          if (B && B[0]) {
            k = k.substring(B[0].length);
            var $ = P.u(B, x, E);
            E.prevCapture += B[0], $.type || ($.type = A), R.push($);
            break;
          }
          z++;
        } else z++;
      }
      return E.prevCapture = "", R;
    }
    return w.sort(function(k, E) {
      return m[k].i - m[E].i || (k < E ? -1 : 1);
    }), function(k, E) {
      return x((function(R) {
        return R.replace($C, `
`).replace(zC, "").replace(JC, "    ");
      })(k), E);
    };
  })(y), v = /* @__PURE__ */ (function(m, w) {
    return function x(k, E = {}) {
      if (Array.isArray(k)) {
        const R = E.key, z = [];
        let A = false;
        for (let P = 0; P < k.length; P++) {
          E.key = P;
          const B = x(k[P], E), $ = Iv(B);
          $ && A ? z[z.length - 1] += B : B !== null && z.push(B), A = $;
        }
        return E.key = R, z;
      }
      return (function(R, z, A) {
        const P = m[R.type].l;
        return w ? w(() => P(R, z, A), R, z, A) : P(R, z, A);
      })(k, x, E);
    };
  })(y, t.renderRule), b = d(e4);
  return h.length ? u("div", null, b, u("footer", { key: "footer" }, h.map(function(m) {
    return u("div", { id: r(m.identifier, Ho), key: m.identifier }, m.identifier, v(_(m.footnote, { inline: true })));
  }))) : b;
}
const Cl = (e4) => {
  let { children: t = "", options: r } = e4, n = (function(o, a) {
    if (o == null) return {};
    var l, c, u = {}, d = Object.keys(o);
    for (c = 0; c < d.length; c++) a.indexOf(l = d[c]) >= 0 || (u[l] = o[l]);
    return u;
  })(e4, EC);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.cloneElement(TP(t, r), n);
}, $v = ({ kind: e4, customIcon: t }) => {
  const r = {
    "text-yellow-400": e4 === "warning",
    "text-red-500": e4 === "danger" || e4 === "error",
    "text-primary": e4 === "info",
    "text-green-500": e4 === "message"
  };
  if (t)
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(t, { className: it("flex-none size-6", r) });
  switch (e4) {
    case "error":
    case "danger":
      return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(u4, { className: it("flex-none size-6", r) });
    case "info":
      return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5$1, { className: it("flex-none size-6", r) }) });
    case "warning":
      return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(x3$1, { className: it("flex-none size-6", r) }) });
    case "message":
      return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5$1, { className: it("flex-none size-6", r) }) });
    default:
      return null;
  }
}, o4 = ({
  id: e4,
  onClose: t,
  kind: r,
  message: n,
  markdown: o,
  customIcon: a
}) => {
  const l = ({ className: c } = {}) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      onClick: t,
      className: it("flex justify-center p-1", c),
      children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(C1, { className: "size-4 font-thin stroke-current" })
    }
  );
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: it(
        "relative flex items-center rounded-lg py-2 px-4 text-sm text-slate-500 bg-white shadow-md"
      ),
      children: typeof n == "string" ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "w-full flex justify-between gap-x-3", children: [
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "pt-1", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx($v, { kind: r, customIcon: a }) }),
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center gap-1 prose", children: o ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Cl, { children: n }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: n }) }),
        l()
      ] }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-2 justify-between", children: n.filter((c) => c.messages.length > 0).map((c) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
          c.title && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "flex items-center gap-1 font-bold capitalize", children: [
            /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx($v, { kind: r, customIcon: a }),
            /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { children: [
              c.title,
              " :"
            ] })
          ] }),
          /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "ul",
            {
              className: it("list-disc", {
                "px-12": c.title,
                "px-6": !c.title
              }),
              children: c.messages.map((u) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("li", { children: o ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Cl, { children: u }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: u }) }))
            }
          )
        ] })) }),
        l({
          className: "absolute top-1 right-1"
        })
      ] })
    },
    e4
  );
}, RP = ({
  children: e4,
  size: t,
  className: r,
  ...n
}) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: { "--width": `${t || 24}px` },
    className: it("h-6 flex items-center pr-1 w-[--width]", r),
    ...n,
    children: e4
  }
);
var Xu = {}, Wo = {}, Fs = {}, Dv;
function ly() {
  if (Dv) return Fs;
  Dv = 1, Object.defineProperty(Fs, "__esModule", {
    value: true
  }), Fs.default = r;
  let e4;
  const t = new Uint8Array(16);
  function r() {
    if (!e4 && (e4 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e4))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return e4(t);
  }
  return Fs;
}
var Zi = {}, Bo = {}, jo = {}, Lv;
function CP() {
  if (Lv) return jo;
  Lv = 1, Object.defineProperty(jo, "__esModule", {
    value: true
  }), jo.default = void 0;
  var e4 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return jo.default = e4, jo;
}
var zv;
function ec() {
  if (zv) return Bo;
  zv = 1, Object.defineProperty(Bo, "__esModule", {
    value: true
  }), Bo.default = void 0;
  var e4 = t(/* @__PURE__ */ CP());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o) {
    return typeof o == "string" && e4.default.test(o);
  }
  var n = r;
  return Bo.default = n, Bo;
}
var Fv;
function tc() {
  if (Fv) return Zi;
  Fv = 1, Object.defineProperty(Zi, "__esModule", {
    value: true
  }), Zi.default = void 0, Zi.unsafeStringify = n;
  var e4 = t(/* @__PURE__ */ ec());
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  const r = [];
  for (let l = 0; l < 256; ++l)
    r.push((l + 256).toString(16).slice(1));
  function n(l, c = 0) {
    return r[l[c + 0]] + r[l[c + 1]] + r[l[c + 2]] + r[l[c + 3]] + "-" + r[l[c + 4]] + r[l[c + 5]] + "-" + r[l[c + 6]] + r[l[c + 7]] + "-" + r[l[c + 8]] + r[l[c + 9]] + "-" + r[l[c + 10]] + r[l[c + 11]] + r[l[c + 12]] + r[l[c + 13]] + r[l[c + 14]] + r[l[c + 15]];
  }
  function o(l, c = 0) {
    const u = n(l, c);
    if (!(0, e4.default)(u))
      throw TypeError("Stringified UUID is invalid");
    return u;
  }
  var a = o;
  return Zi.default = a, Zi;
}
var Hv;
function PP() {
  if (Hv) return Wo;
  Hv = 1, Object.defineProperty(Wo, "__esModule", {
    value: true
  }), Wo.default = void 0;
  var e4 = r(/* @__PURE__ */ ly()), t = /* @__PURE__ */ tc();
  function r(d) {
    return d && d.__esModule ? d : { default: d };
  }
  let n, o, a = 0, l = 0;
  function c(d, p, h) {
    let g = p && h || 0;
    const y = p || new Array(16);
    d = d || {};
    let _ = d.node || n, v = d.clockseq !== void 0 ? d.clockseq : o;
    if (_ == null || v == null) {
      const E = d.random || (d.rng || e4.default)();
      _ == null && (_ = n = [E[0] | 1, E[1], E[2], E[3], E[4], E[5]]), v == null && (v = o = (E[6] << 8 | E[7]) & 16383);
    }
    let b = d.msecs !== void 0 ? d.msecs : Date.now(), m = d.nsecs !== void 0 ? d.nsecs : l + 1;
    const w = b - a + (m - l) / 1e4;
    if (w < 0 && d.clockseq === void 0 && (v = v + 1 & 16383), (w < 0 || b > a) && d.nsecs === void 0 && (m = 0), m >= 1e4)
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    a = b, l = m, o = v, b += 122192928e5;
    const x = ((b & 268435455) * 1e4 + m) % 4294967296;
    y[g++] = x >>> 24 & 255, y[g++] = x >>> 16 & 255, y[g++] = x >>> 8 & 255, y[g++] = x & 255;
    const k = b / 4294967296 * 1e4 & 268435455;
    y[g++] = k >>> 8 & 255, y[g++] = k & 255, y[g++] = k >>> 24 & 15 | 16, y[g++] = k >>> 16 & 255, y[g++] = v >>> 8 | 128, y[g++] = v & 255;
    for (let E = 0; E < 6; ++E)
      y[g + E] = _[E];
    return p || (0, t.unsafeStringify)(y);
  }
  var u = c;
  return Wo.default = u, Wo;
}
var Uo = {}, jn = {}, Vo = {}, Wv;
function cy() {
  if (Wv) return Vo;
  Wv = 1, Object.defineProperty(Vo, "__esModule", {
    value: true
  }), Vo.default = void 0;
  var e4 = t(/* @__PURE__ */ ec());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o) {
    if (!(0, e4.default)(o))
      throw TypeError("Invalid UUID");
    let a;
    const l = new Uint8Array(16);
    return l[0] = (a = parseInt(o.slice(0, 8), 16)) >>> 24, l[1] = a >>> 16 & 255, l[2] = a >>> 8 & 255, l[3] = a & 255, l[4] = (a = parseInt(o.slice(9, 13), 16)) >>> 8, l[5] = a & 255, l[6] = (a = parseInt(o.slice(14, 18), 16)) >>> 8, l[7] = a & 255, l[8] = (a = parseInt(o.slice(19, 23), 16)) >>> 8, l[9] = a & 255, l[10] = (a = parseInt(o.slice(24, 36), 16)) / 1099511627776 & 255, l[11] = a / 4294967296 & 255, l[12] = a >>> 24 & 255, l[13] = a >>> 16 & 255, l[14] = a >>> 8 & 255, l[15] = a & 255, l;
  }
  var n = r;
  return Vo.default = n, Vo;
}
var Bv;
function uy() {
  if (Bv) return jn;
  Bv = 1, Object.defineProperty(jn, "__esModule", {
    value: true
  }), jn.URL = jn.DNS = void 0, jn.default = l;
  var e4 = /* @__PURE__ */ tc(), t = r(/* @__PURE__ */ cy());
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function n(c) {
    c = unescape(encodeURIComponent(c));
    const u = [];
    for (let d = 0; d < c.length; ++d)
      u.push(c.charCodeAt(d));
    return u;
  }
  const o = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  jn.DNS = o;
  const a = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  jn.URL = a;
  function l(c, u, d) {
    function p(h, g, y, _) {
      var v;
      if (typeof h == "string" && (h = n(h)), typeof g == "string" && (g = (0, t.default)(g)), ((v = g) === null || v === void 0 ? void 0 : v.length) !== 16)
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let b = new Uint8Array(16 + h.length);
      if (b.set(g), b.set(h, g.length), b = d(b), b[6] = b[6] & 15 | u, b[8] = b[8] & 63 | 128, y) {
        _ = _ || 0;
        for (let m = 0; m < 16; ++m)
          y[_ + m] = b[m];
        return y;
      }
      return (0, e4.unsafeStringify)(b);
    }
    try {
      p.name = c;
    } catch {
    }
    return p.DNS = o, p.URL = a, p;
  }
  return jn;
}
var qo = {}, jv;
function IP() {
  if (jv) return qo;
  jv = 1, Object.defineProperty(qo, "__esModule", {
    value: true
  }), qo.default = void 0;
  function e4(y) {
    if (typeof y == "string") {
      const _ = unescape(encodeURIComponent(y));
      y = new Uint8Array(_.length);
      for (let v = 0; v < _.length; ++v)
        y[v] = _.charCodeAt(v);
    }
    return t(n(o(y), y.length * 8));
  }
  function t(y) {
    const _ = [], v = y.length * 32, b = "0123456789abcdef";
    for (let m = 0; m < v; m += 8) {
      const w = y[m >> 5] >>> m % 32 & 255, x = parseInt(b.charAt(w >>> 4 & 15) + b.charAt(w & 15), 16);
      _.push(x);
    }
    return _;
  }
  function r(y) {
    return (y + 64 >>> 9 << 4) + 14 + 1;
  }
  function n(y, _) {
    y[_ >> 5] |= 128 << _ % 32, y[r(_) - 1] = _;
    let v = 1732584193, b = -271733879, m = -1732584194, w = 271733878;
    for (let x = 0; x < y.length; x += 16) {
      const k = v, E = b, R = m, z = w;
      v = u(v, b, m, w, y[x], 7, -680876936), w = u(w, v, b, m, y[x + 1], 12, -389564586), m = u(m, w, v, b, y[x + 2], 17, 606105819), b = u(b, m, w, v, y[x + 3], 22, -1044525330), v = u(v, b, m, w, y[x + 4], 7, -176418897), w = u(w, v, b, m, y[x + 5], 12, 1200080426), m = u(m, w, v, b, y[x + 6], 17, -1473231341), b = u(b, m, w, v, y[x + 7], 22, -45705983), v = u(v, b, m, w, y[x + 8], 7, 1770035416), w = u(w, v, b, m, y[x + 9], 12, -1958414417), m = u(m, w, v, b, y[x + 10], 17, -42063), b = u(b, m, w, v, y[x + 11], 22, -1990404162), v = u(v, b, m, w, y[x + 12], 7, 1804603682), w = u(w, v, b, m, y[x + 13], 12, -40341101), m = u(m, w, v, b, y[x + 14], 17, -1502002290), b = u(b, m, w, v, y[x + 15], 22, 1236535329), v = d(v, b, m, w, y[x + 1], 5, -165796510), w = d(w, v, b, m, y[x + 6], 9, -1069501632), m = d(m, w, v, b, y[x + 11], 14, 643717713), b = d(b, m, w, v, y[x], 20, -373897302), v = d(v, b, m, w, y[x + 5], 5, -701558691), w = d(w, v, b, m, y[x + 10], 9, 38016083), m = d(m, w, v, b, y[x + 15], 14, -660478335), b = d(b, m, w, v, y[x + 4], 20, -405537848), v = d(v, b, m, w, y[x + 9], 5, 568446438), w = d(w, v, b, m, y[x + 14], 9, -1019803690), m = d(m, w, v, b, y[x + 3], 14, -187363961), b = d(b, m, w, v, y[x + 8], 20, 1163531501), v = d(v, b, m, w, y[x + 13], 5, -1444681467), w = d(w, v, b, m, y[x + 2], 9, -51403784), m = d(m, w, v, b, y[x + 7], 14, 1735328473), b = d(b, m, w, v, y[x + 12], 20, -1926607734), v = p(v, b, m, w, y[x + 5], 4, -378558), w = p(w, v, b, m, y[x + 8], 11, -2022574463), m = p(m, w, v, b, y[x + 11], 16, 1839030562), b = p(b, m, w, v, y[x + 14], 23, -35309556), v = p(v, b, m, w, y[x + 1], 4, -1530992060), w = p(w, v, b, m, y[x + 4], 11, 1272893353), m = p(m, w, v, b, y[x + 7], 16, -155497632), b = p(b, m, w, v, y[x + 10], 23, -1094730640), v = p(v, b, m, w, y[x + 13], 4, 681279174), w = p(w, v, b, m, y[x], 11, -358537222), m = p(m, w, v, b, y[x + 3], 16, -722521979), b = p(b, m, w, v, y[x + 6], 23, 76029189), v = p(v, b, m, w, y[x + 9], 4, -640364487), w = p(w, v, b, m, y[x + 12], 11, -421815835), m = p(m, w, v, b, y[x + 15], 16, 530742520), b = p(b, m, w, v, y[x + 2], 23, -995338651), v = h(v, b, m, w, y[x], 6, -198630844), w = h(w, v, b, m, y[x + 7], 10, 1126891415), m = h(m, w, v, b, y[x + 14], 15, -1416354905), b = h(b, m, w, v, y[x + 5], 21, -57434055), v = h(v, b, m, w, y[x + 12], 6, 1700485571), w = h(w, v, b, m, y[x + 3], 10, -1894986606), m = h(m, w, v, b, y[x + 10], 15, -1051523), b = h(b, m, w, v, y[x + 1], 21, -2054922799), v = h(v, b, m, w, y[x + 8], 6, 1873313359), w = h(w, v, b, m, y[x + 15], 10, -30611744), m = h(m, w, v, b, y[x + 6], 15, -1560198380), b = h(b, m, w, v, y[x + 13], 21, 1309151649), v = h(v, b, m, w, y[x + 4], 6, -145523070), w = h(w, v, b, m, y[x + 11], 10, -1120210379), m = h(m, w, v, b, y[x + 2], 15, 718787259), b = h(b, m, w, v, y[x + 9], 21, -343485551), v = a(v, k), b = a(b, E), m = a(m, R), w = a(w, z);
    }
    return [v, b, m, w];
  }
  function o(y) {
    if (y.length === 0)
      return [];
    const _ = y.length * 8, v = new Uint32Array(r(_));
    for (let b = 0; b < _; b += 8)
      v[b >> 5] |= (y[b / 8] & 255) << b % 32;
    return v;
  }
  function a(y, _) {
    const v = (y & 65535) + (_ & 65535);
    return (y >> 16) + (_ >> 16) + (v >> 16) << 16 | v & 65535;
  }
  function l(y, _) {
    return y << _ | y >>> 32 - _;
  }
  function c(y, _, v, b, m, w) {
    return a(l(a(a(_, y), a(b, w)), m), v);
  }
  function u(y, _, v, b, m, w, x) {
    return c(_ & v | ~_ & b, y, _, m, w, x);
  }
  function d(y, _, v, b, m, w, x) {
    return c(_ & b | v & ~b, y, _, m, w, x);
  }
  function p(y, _, v, b, m, w, x) {
    return c(_ ^ v ^ b, y, _, m, w, x);
  }
  function h(y, _, v, b, m, w, x) {
    return c(v ^ (_ | ~b), y, _, m, w, x);
  }
  var g = e4;
  return qo.default = g, qo;
}
var Uv;
function NP() {
  if (Uv) return Uo;
  Uv = 1, Object.defineProperty(Uo, "__esModule", {
    value: true
  }), Uo.default = void 0;
  var e4 = r(/* @__PURE__ */ uy()), t = r(/* @__PURE__ */ IP());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var o = (0, e4.default)("v3", 48, t.default);
  return Uo.default = o, Uo;
}
var Go = {}, Ko = {}, Vv;
function MP() {
  if (Vv) return Ko;
  Vv = 1, Object.defineProperty(Ko, "__esModule", {
    value: true
  }), Ko.default = void 0;
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  return Ko.default = t, Ko;
}
var qv;
function $P() {
  if (qv) return Go;
  qv = 1, Object.defineProperty(Go, "__esModule", {
    value: true
  }), Go.default = void 0;
  var e4 = n(/* @__PURE__ */ MP()), t = n(/* @__PURE__ */ ly()), r = /* @__PURE__ */ tc();
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function o(l, c, u) {
    if (e4.default.randomUUID && !c && !l)
      return e4.default.randomUUID();
    l = l || {};
    const d = l.random || (l.rng || t.default)();
    if (d[6] = d[6] & 15 | 64, d[8] = d[8] & 63 | 128, c) {
      u = u || 0;
      for (let p = 0; p < 16; ++p)
        c[u + p] = d[p];
      return c;
    }
    return (0, r.unsafeStringify)(d);
  }
  var a = o;
  return Go.default = a, Go;
}
var Zo = {}, Yo = {}, Gv;
function DP() {
  if (Gv) return Yo;
  Gv = 1, Object.defineProperty(Yo, "__esModule", {
    value: true
  }), Yo.default = void 0;
  function e4(o, a, l, c) {
    switch (o) {
      case 0:
        return a & l ^ ~a & c;
      case 1:
        return a ^ l ^ c;
      case 2:
        return a & l ^ a & c ^ l & c;
      case 3:
        return a ^ l ^ c;
    }
  }
  function t(o, a) {
    return o << a | o >>> 32 - a;
  }
  function r(o) {
    const a = [1518500249, 1859775393, 2400959708, 3395469782], l = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof o == "string") {
      const p = unescape(encodeURIComponent(o));
      o = [];
      for (let h = 0; h < p.length; ++h)
        o.push(p.charCodeAt(h));
    } else Array.isArray(o) || (o = Array.prototype.slice.call(o));
    o.push(128);
    const c = o.length / 4 + 2, u = Math.ceil(c / 16), d = new Array(u);
    for (let p = 0; p < u; ++p) {
      const h = new Uint32Array(16);
      for (let g = 0; g < 16; ++g)
        h[g] = o[p * 64 + g * 4] << 24 | o[p * 64 + g * 4 + 1] << 16 | o[p * 64 + g * 4 + 2] << 8 | o[p * 64 + g * 4 + 3];
      d[p] = h;
    }
    d[u - 1][14] = (o.length - 1) * 8 / Math.pow(2, 32), d[u - 1][14] = Math.floor(d[u - 1][14]), d[u - 1][15] = (o.length - 1) * 8 & 4294967295;
    for (let p = 0; p < u; ++p) {
      const h = new Uint32Array(80);
      for (let m = 0; m < 16; ++m)
        h[m] = d[p][m];
      for (let m = 16; m < 80; ++m)
        h[m] = t(h[m - 3] ^ h[m - 8] ^ h[m - 14] ^ h[m - 16], 1);
      let g = l[0], y = l[1], _ = l[2], v = l[3], b = l[4];
      for (let m = 0; m < 80; ++m) {
        const w = Math.floor(m / 20), x = t(g, 5) + e4(w, y, _, v) + b + a[w] + h[m] >>> 0;
        b = v, v = _, _ = t(y, 30) >>> 0, y = g, g = x;
      }
      l[0] = l[0] + g >>> 0, l[1] = l[1] + y >>> 0, l[2] = l[2] + _ >>> 0, l[3] = l[3] + v >>> 0, l[4] = l[4] + b >>> 0;
    }
    return [l[0] >> 24 & 255, l[0] >> 16 & 255, l[0] >> 8 & 255, l[0] & 255, l[1] >> 24 & 255, l[1] >> 16 & 255, l[1] >> 8 & 255, l[1] & 255, l[2] >> 24 & 255, l[2] >> 16 & 255, l[2] >> 8 & 255, l[2] & 255, l[3] >> 24 & 255, l[3] >> 16 & 255, l[3] >> 8 & 255, l[3] & 255, l[4] >> 24 & 255, l[4] >> 16 & 255, l[4] >> 8 & 255, l[4] & 255];
  }
  var n = r;
  return Yo.default = n, Yo;
}
var Kv;
function LP() {
  if (Kv) return Zo;
  Kv = 1, Object.defineProperty(Zo, "__esModule", {
    value: true
  }), Zo.default = void 0;
  var e4 = r(/* @__PURE__ */ uy()), t = r(/* @__PURE__ */ DP());
  function r(a) {
    return a && a.__esModule ? a : { default: a };
  }
  var o = (0, e4.default)("v5", 80, t.default);
  return Zo.default = o, Zo;
}
var Xo = {}, Zv;
function zP() {
  if (Zv) return Xo;
  Zv = 1, Object.defineProperty(Xo, "__esModule", {
    value: true
  }), Xo.default = void 0;
  var e4 = "00000000-0000-0000-0000-000000000000";
  return Xo.default = e4, Xo;
}
var Jo = {}, Yv;
function FP() {
  if (Yv) return Jo;
  Yv = 1, Object.defineProperty(Jo, "__esModule", {
    value: true
  }), Jo.default = void 0;
  var e4 = t(/* @__PURE__ */ ec());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o) {
    if (!(0, e4.default)(o))
      throw TypeError("Invalid UUID");
    return parseInt(o.slice(14, 15), 16);
  }
  var n = r;
  return Jo.default = n, Jo;
}
var Xv;
function HP() {
  return Xv || (Xv = 1, (function(e4) {
    Object.defineProperty(e4, "__esModule", {
      value: true
    }), Object.defineProperty(e4, "NIL", {
      enumerable: true,
      get: function() {
        return a.default;
      }
    }), Object.defineProperty(e4, "parse", {
      enumerable: true,
      get: function() {
        return d.default;
      }
    }), Object.defineProperty(e4, "stringify", {
      enumerable: true,
      get: function() {
        return u.default;
      }
    }), Object.defineProperty(e4, "v1", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e4, "v3", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e4, "v4", {
      enumerable: true,
      get: function() {
        return n.default;
      }
    }), Object.defineProperty(e4, "v5", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    }), Object.defineProperty(e4, "validate", {
      enumerable: true,
      get: function() {
        return c.default;
      }
    }), Object.defineProperty(e4, "version", {
      enumerable: true,
      get: function() {
        return l.default;
      }
    });
    var t = p(/* @__PURE__ */ PP()), r = p(/* @__PURE__ */ NP()), n = p(/* @__PURE__ */ $P()), o = p(/* @__PURE__ */ LP()), a = p(/* @__PURE__ */ zP()), l = p(/* @__PURE__ */ FP()), c = p(/* @__PURE__ */ ec()), u = p(/* @__PURE__ */ tc()), d = p(/* @__PURE__ */ cy());
    function p(h) {
      return h && h.__esModule ? h : { default: h };
    }
  })(Xu)), Xu;
}
var Ju, Jv;
function WP() {
  if (Jv) return Ju;
  Jv = 1;
  function e4(t, r) {
    if (!t || !r || !t.length || !r.length)
      throw new Error("Bad alphabet");
    this.srcAlphabet = t, this.dstAlphabet = r;
  }
  return e4.prototype.convert = function(t) {
    var r, n, o, a = {}, l = this.srcAlphabet.length, c = this.dstAlphabet.length, u = t.length, d = typeof t == "string" ? "" : [];
    if (!this.isValid(t))
      throw new Error('Number "' + t + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    if (this.srcAlphabet === this.dstAlphabet)
      return t;
    for (r = 0; r < u; r++)
      a[r] = this.srcAlphabet.indexOf(t[r]);
    do {
      for (n = 0, o = 0, r = 0; r < u; r++)
        n = n * l + a[r], n >= c ? (a[o++] = parseInt(n / c, 10), n = n % c) : o > 0 && (a[o++] = 0);
      u = o, d = this.dstAlphabet.slice(n, n + 1).concat(d);
    } while (o !== 0);
    return d;
  }, e4.prototype.isValid = function(t) {
    for (var r = 0; r < t.length; ++r)
      if (this.srcAlphabet.indexOf(t[r]) === -1)
        return false;
    return true;
  }, Ju = e4, Ju;
}
var Qu, Qv;
function BP() {
  if (Qv) return Qu;
  Qv = 1;
  var e4 = WP();
  function t(r, n) {
    var o = new e4(r, n);
    return function(a) {
      return o.convert(a);
    };
  }
  return t.BIN = "01", t.OCT = "01234567", t.DEC = "0123456789", t.HEX = "0123456789abcdef", Qu = t, Qu;
}
var ef, em;
function jP() {
  if (em) return ef;
  em = 1;
  const { v4: e4, validate: t } = /* @__PURE__ */ HP(), r = BP(), n = {
    cookieBase90: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
    flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    uuid25Base36: "0123456789abcdefghijklmnopqrstuvwxyz"
  }, o = {
    consistentLength: true
  };
  let a;
  const l = (d, p, h) => {
    const g = p(d.toLowerCase().replace(/-/g, ""));
    return !h || !h.consistentLength ? g : g.padStart(
      h.shortIdLength,
      h.paddingChar
    );
  }, c = (d, p) => {
    const g = p(d).padStart(32, "0").match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
    return [g[1], g[2], g[3], g[4], g[5]].join("-");
  }, u = (d) => Math.ceil(Math.log(2 ** 128) / Math.log(d));
  return ef = (() => {
    const d = (p, h) => {
      const g = p || n.flickrBase58, y = { ...o, ...h };
      if ([...new Set(Array.from(g))].length !== g.length)
        throw new Error("The provided Alphabet has duplicate characters resulting in unreliable results");
      const _ = u(g.length), v = {
        shortIdLength: _,
        consistentLength: y.consistentLength,
        paddingChar: g[0]
      }, b = r(r.HEX, g), m = r(g, r.HEX), w = () => l(e4(), b, v), k = {
        alphabet: g,
        fromUUID: (E) => l(E, b, v),
        maxLength: _,
        generate: w,
        new: w,
        toUUID: (E) => c(E, m),
        uuid: e4,
        validate: (E, R = false) => {
          if (!E || typeof E != "string") return false;
          const z = y.consistentLength ? E.length === _ : E.length <= _, A = E.split("").every((P) => g.includes(P));
          return R === false ? z && A : z && A && t(c(E, m));
        }
      };
      return Object.freeze(k), k;
    };
    return d.constants = n, d.uuid = e4, d.generate = () => (a || (a = d(n.flickrBase58).generate), a()), d;
  })(), ef;
}
var Oi = jP();
const UP = ({
  depth: e4,
  height: t = 24,
  width: r = 11,
  showLines: n = true,
  stroke: o = "rgb(241, 245, 249)"
}) => {
  const a = `indent_line_${Oi.generate()}`;
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "svg",
    {
      viewBox: `0 0 ${11 * e4} ${t}`,
      width: `${11 * e4}`,
      height: t,
      children: [
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "pattern",
          {
            id: a,
            x: "0",
            y: "0",
            width: r,
            height: t,
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "line",
              {
                x1: r / 2,
                y1: "0",
                x2: r / 2,
                y2: t,
                stroke: o
              }
            )
          }
        ) }),
        n ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: `url(#${a})`,
            x: "0",
            y: "0",
            width: `${11 * e4}`,
            height: t
          }
        ) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: n ? `url(#${a})` : "",
            x: "0",
            y: "0",
            width: 0,
            height: t
          }
        )
      ]
    }
  );
}, VP = ({ show: e4, expanded: t, onClick: r, variant: n = "arrow" }) => e4 ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    className: "flex h-6 w-5 items-center",
    onClick: (o) => r && r(o),
    children: (() => {
      switch (n) {
        case "arrow":
          return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            V0$1,
            {
              className: it([
                "h-3 w-3 transform text-grey-50 transition ease-in-out",
                {
                  "rotate-0": t,
                  "-rotate-90": !t
                }
              ])
            }
          );
        case "caret":
          return t ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0$1, {}) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(d4, {});
        default:
          return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0$1, { className: "h-3 w-3 transform text-grey-50 transition ease-in-out" });
      }
    })()
  }
) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex h-6 w-3 items-center" }), fy = ({
  node: e4,
  depth: t,
  expandedKeys: r,
  selectedKeys: n,
  actions: o,
  searchQuery: a,
  renderNode: l,
  onNodeClick: c
}) => {
  var y;
  const { key: u, children: d } = e4, p = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(
    () => ({
      expanded: r.includes(e4.key),
      selected: n.includes(e4.key)
    }),
    [r, e4.key, n]
  ), h = l && typeof l == "function" ? l(e4, t, p, o, a) : KP(e4, t, p, c);
  return !((y = e4.options) != null && y.filterable) || !a || e4.title.toLowerCase().includes(a.toLowerCase()) ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center space-x-2", children: h }, u),
    GP(
      d || [],
      t,
      a,
      r,
      n,
      p.expanded,
      o,
      c,
      l
    )
  ] }) : null;
}, qP = function(e4, t) {
  var l;
  const { title: r, icon: n, subtitle: o } = e4;
  let a = null;
  return n && (a = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(RP, { children: n })), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "div",
    {
      className: "flex flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-nowrap",
      draggable: (l = e4.options) == null ? void 0 : l.draggable,
      onClick: () => {
        t && t(e4);
      },
      children: [
        a,
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            style: {
              lineHeight: "24px",
              fontSize: 11
            },
            children: r
          }
        ),
        o && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mx-1 min-w-0 text-xxs italic text-fd-gray-mild", children: o })
      ]
    }
  );
}, GP = function(e4, t, r, n, o, a, l, c, u) {
  return e4.length && a ? e4.map((d) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    fy,
    {
      actions: l,
      node: d,
      searchQuery: r,
      depth: t + 1,
      expandedKeys: n,
      selectedKeys: o,
      onNodeClick: c,
      renderNode: u
    },
    d.key
  )) : null;
}, KP = function(e4, t, r, n) {
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(UP, { showLines: true, depth: t }),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      VP,
      {
        show: e4.children && e4.children.length > 0 || false,
        expanded: r.expanded
      }
    ),
    qP(e4, n)
  ] });
}, Hs = (e4) => (t) => e4 === t, a4 = function({
  treeData: t,
  renderNode: r,
  onNodeClick: n,
  onExpandNode: o,
  searchQuery: a,
  expandedKeys: l,
  expandCondition: c = "always",
  encapsulated: u,
  className: d
}) {
  const [p, h] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(() => ({
    expandedKeys: l || [],
    selectedKeys: []
  }));
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    c === "when-collapsed" && p.expandedKeys.length > 0 || h({
      ...p,
      expandedKeys: l || p.expandedKeys
    });
  }, [l]);
  const g = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(
    (m) => {
      if (!m) return;
      const w = p.expandedKeys.findIndex(Hs(m.key));
      let x = [];
      w === -1 ? (x = [...p.expandedKeys, m.key], h(() => ({
        ...p,
        expandedKeys: x
      })), o && o(x)) : (x = p.expandedKeys.filter((k) => k !== m.key), h(() => ({
        ...p,
        expandedKeys: x
      })), o && o(x));
    },
    [p]
  ), y = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(
    (m) => {
      var x;
      if (!((x = m == null ? void 0 : m.options) != null && x.selectable)) return;
      p.selectedKeys.findIndex(Hs(m.key)) === -1 && h({
        ...p,
        selectedKeys: [...p.selectedKeys, m.key]
      });
    },
    [p]
  ), _ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(
    (m) => {
      var x;
      if (!((x = m == null ? void 0 : m.options) != null && x.selectable)) return;
      p.selectedKeys.findIndex(Hs(m.key)) === -1 && h({ ...p, selectedKeys: [m.key] });
    },
    [p]
  ), v = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(
    (m) => {
      var x;
      if (!((x = m == null ? void 0 : m.options) != null && x.selectable)) {
        h({ ...p, selectedKeys: [] });
        return;
      }
      p.selectedKeys.findIndex(Hs(m.key)) !== -1 && h({
        ...p,
        selectedKeys: p.selectedKeys.filter((k) => k !== m.key)
      });
    },
    [p]
  ), b = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(
    () => ({
      expand: g,
      select: y,
      selectSingle: _,
      deselect: v
    }),
    [v, g, y, _]
  );
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: it("fd-tree", d, {
        "pl-2 mb-1 rounded border bg-grey-900 p-1": u
      }),
      children: t.map((m) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        fy,
        {
          node: m,
          searchQuery: a || "",
          depth: 0,
          expandedKeys: p.expandedKeys,
          selectedKeys: p.selectedKeys,
          actions: b,
          renderNode: r,
          onNodeClick: n
        },
        m.key
      ))
    }
  );
};
function tf(e4) {
  return e4.of && e4.children ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e4.children }) : null;
}
function pt() {
  return pt = Object.assign ? Object.assign.bind() : function(e4) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e4[n] = r[n]);
    }
    return e4;
  }, pt.apply(null, arguments);
}
function ZP(e4) {
  for (var t = 0, r, n = 0, o = e4.length; o >= 4; ++n, o -= 4)
    r = e4.charCodeAt(n) & 255 | (e4.charCodeAt(++n) & 255) << 8 | (e4.charCodeAt(++n) & 255) << 16 | (e4.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e4.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e4.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e4.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var YP = {
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
function dy(e4) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e4(r)), t[r];
  };
}
var XP = /[A-Z]|^ms/g, JP = /_EMO_([^_]+?)_([^]*?)_EMO_/g, py = function(t) {
  return t.charCodeAt(1) === 45;
}, tm = function(t) {
  return t != null && typeof t != "boolean";
}, rf = /* @__PURE__ */ dy(function(e4) {
  return py(e4) ? e4 : e4.replace(XP, "-$&").toLowerCase();
}), rm = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(JP, function(n, o, a) {
          return tn = {
            name: o,
            styles: a,
            next: tn
          }, o;
        });
  }
  return YP[t] !== 1 && !py(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ca(e4, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return tn = {
          name: o.name,
          styles: o.styles,
          next: tn
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var l = a.next;
        if (l !== void 0)
          for (; l !== void 0; )
            tn = {
              name: l.name,
              styles: l.styles,
              next: tn
            }, l = l.next;
        var c = a.styles + ";";
        return c;
      }
      return QP(e4, t, r);
    }
    case "function": {
      if (e4 !== void 0) {
        var u = tn, d = r(e4);
        return tn = u, Ca(e4, t, d);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var h = t[p];
  return h !== void 0 ? h : p;
}
function QP(e4, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ca(e4, t, r[o]) + ";";
  else
    for (var a in r) {
      var l = r[a];
      if (typeof l != "object") {
        var c = l;
        t != null && t[c] !== void 0 ? n += a + "{" + t[c] + "}" : tm(c) && (n += rf(a) + ":" + rm(a, c) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var u = 0; u < l.length; u++)
          tm(l[u]) && (n += rf(a) + ":" + rm(a, l[u]) + ";");
      else {
        var d = Ca(e4, t, l);
        switch (a) {
          case "animation":
          case "animationName": {
            n += rf(a) + ":" + d + ";";
            break;
          }
          default:
            n += a + "{" + d + "}";
        }
      }
    }
  return n;
}
var nm = /label:\s*([^\s;{]+)\s*(;|$)/g, tn;
function eI(e4, t, r) {
  if (e4.length === 1 && typeof e4[0] == "object" && e4[0] !== null && e4[0].styles !== void 0)
    return e4[0];
  var n = true, o = "";
  tn = void 0;
  var a = e4[0];
  if (a == null || a.raw === void 0)
    n = false, o += Ca(r, t, a);
  else {
    var l = a;
    o += l[0];
  }
  for (var c = 1; c < e4.length; c++)
    if (o += Ca(r, t, e4[c]), n) {
      var u = a;
      o += u[c];
    }
  nm.lastIndex = 0;
  for (var d = "", p; (p = nm.exec(o)) !== null; )
    d += "-" + p[1];
  var h = ZP(o) + d;
  return {
    name: h,
    styles: o,
    next: tn
  };
}
var tI = function(t) {
  return t();
}, rI = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useInsertionEffect ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useInsertionEffect : false, nI = rI || tI, iI = true;
function oI(e4, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e4[o] !== void 0 ? t.push(e4[o] + ";") : o && (n += o + " ");
  }), n;
}
var hy = function(t, r, n) {
  var o = t.key + "-" + r.name;
  (n === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  iI === false) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, aI = function(t, r, n) {
  hy(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, true), a = a.next;
    while (a !== void 0);
  }
}, sI = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, lI = /* @__PURE__ */ dy(
  function(e4) {
    return sI.test(e4) || e4.charCodeAt(0) === 111 && e4.charCodeAt(1) === 110 && e4.charCodeAt(2) < 91;
  }
  /* Z+1 */
), cI = lI, uI = function(t) {
  return t !== "theme";
}, im = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? cI : uI;
}, om = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(l) {
      return t.__emotion_forwardProp(l) && a(l);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, fI = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return hy(r, n, o), nI(function() {
    return aI(r, n, o);
  }), null;
}, dI = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, l;
  r !== void 0 && (a = r.label, l = r.target);
  var c = om(t, r, n), u = c || im(o), d = !u("as");
  return function() {
    var p = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && h.push("label:" + a + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      var g = p[0];
      h.push(g[0]);
      for (var y = p.length, _ = 1; _ < y; _++)
        h.push(p[_], g[_]);
    }
    var v = withEmotionCache(function(b, m, w) {
      var x = d && b.as || o, k = "", E = [], R = b;
      if (b.theme == null) {
        R = {};
        for (var z in b)
          R[z] = b[z];
        R.theme = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(ThemeContext);
      }
      typeof b.className == "string" ? k = oI(m.registered, E, b.className) : b.className != null && (k = b.className + " ");
      var A = eI(h.concat(E), m.registered, R);
      k += m.key + "-" + A.name, l !== void 0 && (k += " " + l);
      var P = d && c === void 0 ? im(x) : u, B = {};
      for (var $ in b)
        d && $ === "as" || P($) && (B[$] = b[$]);
      return B.className = k, w && (B.ref = w), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, null, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(fI, {
        cache: m,
        serialized: A,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(x, B));
    });
    return v.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = h, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
      value: function() {
        return "." + l;
      }
    }), v.withComponent = function(b, m) {
      var w = e(b, pt({}, r, m, {
        shouldForwardProp: om(v, m, true)
      }));
      return w.apply(void 0, h);
    }, v;
  };
}, pI = [
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
], Pl = dI.bind(null);
pI.forEach(function(e4) {
  Pl[e4] = Pl(e4);
});
var hI = function(e4) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e4) ? e4[0] : e4;
  return t.ownerDocument.body;
}, Yi = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Bs = {}, nf = 0, gy = function(e4) {
  return e4 && (e4.host || gy(e4.parentNode));
}, gI = function(e4, t) {
  return t.map(function(r) {
    if (e4.contains(r))
      return r;
    var n = gy(r);
    return n && e4.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e4, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, vI = function(e4, t, r, n) {
  var o = gI(t, Array.isArray(e4) ? e4 : [e4]);
  Bs[r] || (Bs[r] = /* @__PURE__ */ new WeakMap());
  var a = Bs[r], l = [], c = /* @__PURE__ */ new Set(), u = new Set(o), d = function(h) {
    !h || c.has(h) || (c.add(h), d(h.parentNode));
  };
  o.forEach(d);
  var p = function(h) {
    !h || u.has(h) || Array.prototype.forEach.call(h.children, function(g) {
      if (c.has(g))
        p(g);
      else
        try {
          var y = g.getAttribute(n), _ = y !== null && y !== "false", v = (Yi.get(g) || 0) + 1, b = (a.get(g) || 0) + 1;
          Yi.set(g, v), a.set(g, b), l.push(g), v === 1 && _ && Ws.set(g, true), b === 1 && g.setAttribute(r, "true"), _ || g.setAttribute(n, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", g, m);
        }
    });
  };
  return p(t), c.clear(), nf++, function() {
    l.forEach(function(h) {
      var g = Yi.get(h) - 1, y = a.get(h) - 1;
      Yi.set(h, g), a.set(h, y), g || (Ws.has(h) || h.removeAttribute(n), Ws.delete(h)), y || h.removeAttribute(r);
    }), nf--, nf || (Yi = /* @__PURE__ */ new WeakMap(), Yi = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Bs = {});
  };
}, mI = function(e4, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e4) ? e4 : [e4]), o = hI(e4);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), vI(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, Jf = function(e4, t) {
  return Jf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Jf(e4, t);
};
function rc(e4, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Jf(e4, t);
  function r() {
    this.constructor = e4;
  }
  e4.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var rn = function() {
  return rn = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, rn.apply(this, arguments);
};
function vy(e4, t) {
  var r = {};
  for (var n in e4) Object.prototype.hasOwnProperty.call(e4, n) && t.indexOf(n) < 0 && (r[n] = e4[n]);
  if (e4 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e4); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, n[o]) && (r[n[o]] = e4[n[o]]);
  return r;
}
function Qf(e4) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e4[t], n = 0;
  if (r) return r.call(e4);
  if (e4 && typeof e4.length == "number") return {
    next: function() {
      return e4 && n >= e4.length && (e4 = void 0), { value: e4 && e4[n++], done: !e4 };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ed(e4, t) {
  var r = typeof Symbol == "function" && e4[Symbol.iterator];
  if (!r) return e4;
  var n = r.call(e4), o, a = [], l;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; ) a.push(o.value);
  } catch (c) {
    l = { error: c };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (l) throw l.error;
    }
  }
  return a;
}
function Il(e4, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, a; n < o; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e4.concat(a || Array.prototype.slice.call(t));
}
var yl = "right-scroll-bar-position", wl = "width-before-scroll-bar", bI = "with-scroll-bars-hidden", yI = "--removed-body-scroll-bar-size";
function of(e4, t) {
  return typeof e4 == "function" ? e4(t) : e4 && (e4.current = t), e4;
}
function wI(e4, t) {
  var r = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(function() {
    return {
      // value
      value: e4,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var xI = typeof window < "u" ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useLayoutEffect : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect, am = /* @__PURE__ */ new WeakMap();
function _I(e4, t) {
  var r = wI(null, function(n) {
    return e4.forEach(function(o) {
      return of(o, n);
    });
  });
  return xI(function() {
    var n = am.get(r);
    if (n) {
      var o = new Set(n), a = new Set(e4), l = r.current;
      o.forEach(function(c) {
        a.has(c) || of(c, null);
      }), a.forEach(function(c) {
        o.has(c) || of(c, l);
      });
    }
    am.set(r, e4);
  }, [e4]), r;
}
function SI(e4) {
  return e4;
}
function EI(e4, t) {
  t === void 0 && (t = SI);
  var r = [], n = false, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e4;
    },
    useMedium: function(a) {
      var l = t(a, n);
      return r.push(l), function() {
        r = r.filter(function(c) {
          return c !== l;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = true; r.length; ) {
        var l = r;
        r = [], l.forEach(a);
      }
      r = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = true;
      var l = [];
      if (r.length) {
        var c = r;
        r = [], c.forEach(a), l = r;
      }
      var u = function() {
        var p = l;
        l = [], p.forEach(a);
      }, d = function() {
        return Promise.resolve().then(u);
      };
      d(), r = {
        push: function(p) {
          l.push(p), d();
        },
        filter: function(p) {
          return l = l.filter(p), r;
        }
      };
    }
  };
  return o;
}
function kI(e4) {
  e4 === void 0 && (e4 = {});
  var t = EI(null);
  return t.options = rn({ async: true, ssr: false }, e4), t;
}
var my = function(e4) {
  var t = e4.sideCar, r = vy(e4, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(n, rn({}, r));
};
my.isSideCarExport = true;
function OI(e4, t) {
  return e4.useMedium(t), my;
}
var by = kI(), af = function() {
}, nc = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(function(e4, t) {
  var r = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), n = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState({
    onScrollCapture: af,
    onWheelCapture: af,
    onTouchMoveCapture: af
  }), o = n[0], a = n[1], l = e4.forwardProps, c = e4.children, u = e4.className, d = e4.removeScrollBar, p = e4.enabled, h = e4.shards, g = e4.sideCar, y = e4.noRelative, _ = e4.noIsolation, v = e4.inert, b = e4.allowPinchZoom, m = e4.as, w = m === void 0 ? "div" : m, x = e4.gapMode, k = vy(e4, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = g, R = _I([r, t]), z = rn(rn({}, k), o);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment,
    null,
    p && qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(E, { sideCar: by, removeScrollBar: d, shards: h, noRelative: y, noIsolation: _, inert: v, setCallbacks: a, allowPinchZoom: !!b, lockRef: r, gapMode: x }),
    l ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.cloneElement(qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Children.only(c), rn(rn({}, z), { ref: R })) : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(w, rn({}, z, { className: u, ref: R }), c)
  );
});
nc.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
nc.classNames = {
  fullWidth: wl,
  zeroRight: yl
};
var AI = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function TI() {
  if (!document)
    return null;
  var e4 = document.createElement("style");
  e4.type = "text/css";
  var t = AI();
  return t && e4.setAttribute("nonce", t), e4;
}
function RI(e4, t) {
  e4.styleSheet ? e4.styleSheet.cssText = t : e4.appendChild(document.createTextNode(t));
}
function CI(e4) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e4);
}
var PI = function() {
  var e4 = 0, t = null;
  return {
    add: function(r) {
      e4 == 0 && (t = TI()) && (RI(t, r), CI(t)), e4++;
    },
    remove: function() {
      e4--, !e4 && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, II = function() {
  var e4 = PI();
  return function(t, r) {
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(function() {
      return e4.add(t), function() {
        e4.remove();
      };
    }, [t && r]);
  };
}, yy = function() {
  var e4 = II(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e4(n, o), null;
  };
  return t;
}, NI = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sf = function(e4) {
  return parseInt(e4 || "", 10) || 0;
}, MI = function(e4) {
  var t = window.getComputedStyle(document.body), r = t[e4 === "padding" ? "paddingLeft" : "marginLeft"], n = t[e4 === "padding" ? "paddingTop" : "marginTop"], o = t[e4 === "padding" ? "paddingRight" : "marginRight"];
  return [sf(r), sf(n), sf(o)];
}, $I = function(e4) {
  if (e4 === void 0 && (e4 = "margin"), typeof window > "u")
    return NI;
  var t = MI(e4), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, DI = yy(), oo = "data-scroll-locked", LI = function(e4, t, r, n) {
  var o = e4.left, a = e4.top, l = e4.right, c = e4.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(bI, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(c, "px ").concat(n, `;
  }
  body[`).concat(oo, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(c, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(yl, ` {
    right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(wl, ` {
    margin-right: `).concat(c, "px ").concat(n, `;
  }
  
  .`).concat(yl, " .").concat(yl, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(wl, " .").concat(wl, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(oo, `] {
    `).concat(yI, ": ").concat(c, `px;
  }
`);
}, sm = function() {
  var e4 = parseInt(document.body.getAttribute(oo) || "0", 10);
  return isFinite(e4) ? e4 : 0;
}, zI = function() {
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(function() {
    return document.body.setAttribute(oo, (sm() + 1).toString()), function() {
      var e4 = sm() - 1;
      e4 <= 0 ? document.body.removeAttribute(oo) : document.body.setAttribute(oo, e4.toString());
    };
  }, []);
}, FI = function(e4) {
  var t = e4.noRelative, r = e4.noImportant, n = e4.gapMode, o = n === void 0 ? "margin" : n;
  zI();
  var a = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(function() {
    return $I(o);
  }, [o]);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(DI, { styles: LI(a, !t, o, r ? "" : "!important") });
}, td = false;
if (typeof window < "u")
  try {
    var js = Object.defineProperty({}, "passive", {
      get: function() {
        return td = true, true;
      }
    });
    window.addEventListener("test", js, js), window.removeEventListener("test", js, js);
  } catch {
    td = false;
  }
var Xi = td ? { passive: false } : false, HI = function(e4) {
  return e4.tagName === "TEXTAREA";
}, wy = function(e4, t) {
  if (!(e4 instanceof Element))
    return false;
  var r = window.getComputedStyle(e4);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !HI(e4) && r[t] === "visible")
  );
}, WI = function(e4) {
  return wy(e4, "overflowY");
}, BI = function(e4) {
  return wy(e4, "overflowX");
}, lm = function(e4, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = xy(e4, n);
    if (o) {
      var a = _y(e4, n), l = a[1], c = a[2];
      if (l > c)
        return true;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return false;
}, jI = function(e4) {
  var t = e4.scrollTop, r = e4.scrollHeight, n = e4.clientHeight;
  return [
    t,
    r,
    n
  ];
}, UI = function(e4) {
  var t = e4.scrollLeft, r = e4.scrollWidth, n = e4.clientWidth;
  return [
    t,
    r,
    n
  ];
}, xy = function(e4, t) {
  return e4 === "v" ? WI(t) : BI(t);
}, _y = function(e4, t) {
  return e4 === "v" ? jI(t) : UI(t);
}, VI = function(e4, t) {
  return e4 === "h" && t === "rtl" ? -1 : 1;
}, qI = function(e4, t, r, n, o) {
  var a = VI(e4, window.getComputedStyle(t).direction), l = a * n, c = r.target, u = t.contains(c), d = false, p = l > 0, h = 0, g = 0;
  do {
    if (!c)
      break;
    var y = _y(e4, c), _ = y[0], v = y[1], b = y[2], m = v - b - a * _;
    (_ || m) && xy(e4, c) && (h += m, g += _);
    var w = c.parentNode;
    c = w && w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? w.host : w;
  } while (
    // portaled content
    !u && c !== document.body || // self content
    u && (t.contains(c) || t === c)
  );
  return (p && Math.abs(h) < 1 || !p && Math.abs(g) < 1) && (d = true), d;
}, Us = function(e4) {
  return "changedTouches" in e4 ? [e4.changedTouches[0].clientX, e4.changedTouches[0].clientY] : [0, 0];
}, cm = function(e4) {
  return [e4.deltaX, e4.deltaY];
}, um = function(e4) {
  return e4 && "current" in e4 ? e4.current : e4;
}, GI = function(e4, t) {
  return e4[0] === t[0] && e4[1] === t[1];
}, KI = function(e4) {
  return `
  .block-interactivity-`.concat(e4, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e4, ` {pointer-events: all;}
`);
}, ZI = 0, Ji = [];
function YI(e4) {
  var t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef([]), r = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef([0, 0]), n = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(), o = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(ZI++)[0], a = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(yy)[0], l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(e4);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(function() {
    l.current = e4;
  }, [e4]), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(function() {
    if (e4.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = Il([e4.lockRef.current], (e4.shards || []).map(um), true).filter(Boolean);
      return v.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e4.inert, e4.lockRef.current, e4.shards]);
  var c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(v, b) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !l.current.allowPinchZoom;
    var m = Us(v), w = r.current, x = "deltaX" in v ? v.deltaX : w[0] - m[0], k = "deltaY" in v ? v.deltaY : w[1] - m[1], E, R = v.target, z = Math.abs(x) > Math.abs(k) ? "h" : "v";
    if ("touches" in v && z === "h" && R.type === "range")
      return false;
    var A = lm(z, R);
    if (!A)
      return true;
    if (A ? E = z : (E = z === "v" ? "h" : "v", A = lm(z, R)), !A)
      return false;
    if (!n.current && "changedTouches" in v && (x || k) && (n.current = E), !E)
      return true;
    var P = n.current || E;
    return qI(P, b, v, P === "h" ? x : k);
  }, []), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(v) {
    var b = v;
    if (!(!Ji.length || Ji[Ji.length - 1] !== a)) {
      var m = "deltaY" in b ? cm(b) : Us(b), w = t.current.filter(function(E) {
        return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && GI(E.delta, m);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var x = (l.current.shards || []).map(um).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), k = x.length > 0 ? c(b, x[0]) : !l.current.noIsolation;
        k && b.cancelable && b.preventDefault();
      }
    }
  }, []), d = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(v, b, m, w) {
    var x = { name: v, delta: b, target: m, should: w, shadowParent: XI(m) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== x;
      });
    }, 1);
  }, []), p = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(v) {
    r.current = Us(v), n.current = void 0;
  }, []), h = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(v) {
    d(v.type, cm(v), v.target, c(v, e4.lockRef.current));
  }, []), g = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(v) {
    d(v.type, Us(v), v.target, c(v, e4.lockRef.current));
  }, []);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(function() {
    return Ji.push(a), e4.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", u, Xi), document.addEventListener("touchmove", u, Xi), document.addEventListener("touchstart", p, Xi), function() {
      Ji = Ji.filter(function(v) {
        return v !== a;
      }), document.removeEventListener("wheel", u, Xi), document.removeEventListener("touchmove", u, Xi), document.removeEventListener("touchstart", p, Xi);
    };
  }, []);
  var y = e4.removeScrollBar, _ = e4.inert;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment,
    null,
    _ ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(a, { styles: KI(o) }) : null,
    y ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(FI, { noRelative: e4.noRelative, gapMode: e4.gapMode }) : null
  );
}
function XI(e4) {
  for (var t = null; e4 !== null; )
    e4 instanceof ShadowRoot && (t = e4.host, e4 = e4.host), e4 = e4.parentNode;
  return t;
}
const JI = OI(by, YI);
var Sy = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(function(e4, t) {
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(nc, rn({}, e4, { ref: t, sideCar: JI }));
});
Sy.classNames = nc.classNames;
const QI = globalThis != null && globalThis.document ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useLayoutEffect : () => {
}, e2 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useId || (() => {
});
let t2 = 0;
function Ey(e4) {
  const [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(e2());
  return QI((() => {
    r(((n) => n ?? String(t2++)));
  }), [e4]), (t ? `radix-${t}` : "");
}
function ky(...e4) {
  return (t) => e4.forEach(((r) => (function(n, o) {
    typeof n == "function" ? n(o) : n != null && (n.current = o);
  })(r, t)));
}
function ti(...e4) {
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(ky(...e4), e4);
}
const Oy = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { children: r, ...n } = e4;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Children.toArray(r).some(fm) ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, null, qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Children.map(r, ((o) => fm(o) ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(rd, pt({}, n, { ref: t }), o.props.children) : o))) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(rd, pt({}, n, { ref: t }), r);
}));
Oy.displayName = "Slot";
const rd = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { children: r, ...n } = e4;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.isValidElement(r) ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.cloneElement(r, { ...r2(n, r.props), ref: ky(t, r.ref) }) : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Children.count(r) > 1 ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Children.only(null) : null;
}));
rd.displayName = "SlotClone";
const Ay = ({ children: e4 }) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, null, e4);
function fm(e4) {
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.isValidElement(e4) && e4.type === Ay;
}
function r2(e4, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e4[n], a = t[n];
    /^on[A-Z]/.test(n) ? r[n] = (...l) => {
      a == null || a(...l), o == null || o(...l);
    } : n === "style" ? r[n] = { ...o, ...a } : n === "className" && (r[n] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e4, ...r };
}
const ri = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e4, t) => ({ ...e4, [t]: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((r, n) => {
  const { asChild: o, ...a } = r, l = o ? Oy : t;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    window[Symbol.for("radix-ui")] = true;
  }), []), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(l, pt({}, a, { ref: n }));
})) })), {}), dm = globalThis != null && globalThis.document ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useLayoutEffect : () => {
}, Wd = (e4) => {
  const { present: t, children: r } = e4, n = (function(l) {
    const [c, u] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(), d = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef({}), p = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(l), h = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef("none"), g = l ? "mounted" : "unmounted", [y, _] = (function(v, b) {
      return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useReducer(((m, w) => {
        const x = b[m][w];
        return x ?? m;
      }), v);
    })(g, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
      const v = Vs(d.current);
      h.current = y === "mounted" ? v : "none";
    }), [y]), dm((() => {
      const v = d.current, b = p.current;
      if (b !== l) {
        const m = h.current, w = Vs(v);
        l ? _("MOUNT") : w === "none" || (v == null ? void 0 : v.display) === "none" ? _("UNMOUNT") : _(b && m !== w ? "ANIMATION_OUT" : "UNMOUNT"), p.current = l;
      }
    }), [l, _]), dm((() => {
      if (c) {
        const v = (m) => {
          const w = Vs(d.current).includes(m.animationName);
          m.target === c && w && _("ANIMATION_END");
        }, b = (m) => {
          m.target === c && (h.current = Vs(d.current));
        };
        return c.addEventListener("animationstart", b), c.addEventListener("animationcancel", v), c.addEventListener("animationend", v), () => {
          c.removeEventListener("animationstart", b), c.removeEventListener("animationcancel", v), c.removeEventListener("animationend", v);
        };
      }
      _("ANIMATION_END");
    }), [c, _]), { isPresent: ["mounted", "unmountSuspended"].includes(y), ref: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(((v) => {
      v && (d.current = getComputedStyle(v)), u(v);
    }), []) };
  })(t), o = typeof r == "function" ? r({ present: n.isPresent }) : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Children.only(r), a = ti(n.ref, o.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.cloneElement(o, { ref: a }) : null;
};
function Vs(e4) {
  return (e4 == null ? void 0 : e4.animationName) || "none";
}
Wd.displayName = "Presence";
let lf = 0;
function n2() {
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    var e4, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e4 = r[0]) !== null && e4 !== void 0 ? e4 : pm()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : pm()), lf++, () => {
      lf === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(((n) => n.remove())), lf--;
    };
  }), []);
}
function pm() {
  const e4 = document.createElement("span");
  return e4.setAttribute("data-radix-focus-guard", ""), e4.tabIndex = 0, e4.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e4;
}
const i2 = globalThis != null && globalThis.document ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useLayoutEffect : () => {
}, Bd = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  var r, n;
  const { containerRef: o, style: a, ...l } = e4, c = (r = o == null ? void 0 : o.current) !== null && r !== void 0 ? r : globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, [, u] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState({});
  return i2((() => {
    u({});
  }), []), c ? /* @__PURE__ */ Ii$1.createPortal(/* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.div, pt({ "data-radix-portal": "" }, l, { ref: t, style: c === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...a } : void 0 })), c) : null;
}));
function Ai(e4) {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(e4);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    t.current = e4;
  })), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo((() => (...r) => {
    var n;
    return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
  }), []);
}
const hm = { bubbles: false, cancelable: true }, o2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { loop: r = false, trapped: n = false, onMountAutoFocus: o, onUnmountAutoFocus: a, ...l } = e4, [c, u] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null), d = Ai(o), p = Ai(a), h = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), g = ti(t, ((v) => u(v))), y = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    if (n) {
      let v = function(m) {
        if (y.paused || !c) return;
        const w = m.target;
        c.contains(w) ? h.current = w : gi(h.current, { select: true });
      }, b = function(m) {
        !y.paused && c && (c.contains(m.relatedTarget) || gi(h.current, { select: true }));
      };
      return document.addEventListener("focusin", v), document.addEventListener("focusout", b), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", b);
      };
    }
  }), [n, c, y.paused]), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    if (c) {
      mm.add(y);
      const b = document.activeElement;
      if (!c.contains(b)) {
        const m = new Event("focusScope.autoFocusOnMount", hm);
        c.addEventListener("focusScope.autoFocusOnMount", d), c.dispatchEvent(m), m.defaultPrevented || ((function(w, { select: x = false } = {}) {
          const k = document.activeElement;
          for (const E of w) if (gi(E, { select: x }), document.activeElement !== k) return;
        })((v = gm(c), v.filter(((w) => w.tagName !== "A"))), { select: true }), document.activeElement === b && gi(c));
      }
      return () => {
        c.removeEventListener("focusScope.autoFocusOnMount", d), setTimeout((() => {
          const m = new Event("focusScope.autoFocusOnUnmount", hm);
          c.addEventListener("focusScope.autoFocusOnUnmount", p), c.dispatchEvent(m), m.defaultPrevented || gi(b ?? document.body, { select: true }), c.removeEventListener("focusScope.autoFocusOnUnmount", p), mm.remove(y);
        }), 0);
      };
    }
    var v;
  }), [c, d, p, y]);
  const _ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(((v) => {
    if (!r && !n || y.paused) return;
    const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, m = document.activeElement;
    if (b && m) {
      const w = v.currentTarget, [x, k] = (function(E) {
        const R = gm(E), z = vm(R, E), A = vm(R.reverse(), E);
        return [z, A];
      })(w);
      x && k ? v.shiftKey || m !== k ? v.shiftKey && m === x && (v.preventDefault(), r && gi(k, { select: true })) : (v.preventDefault(), r && gi(x, { select: true })) : m === w && v.preventDefault();
    }
  }), [r, n, y.paused]);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.div, pt({ tabIndex: -1 }, l, { ref: g, onKeyDown: _ }));
}));
function gm(e4) {
  const t = [], r = document.createTreeWalker(e4, NodeFilter.SHOW_ELEMENT, { acceptNode: (n) => {
    const o = n.tagName === "INPUT" && n.type === "hidden";
    return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function vm(e4, t) {
  for (const r of e4) if (!a2(r, { upTo: t })) return r;
}
function a2(e4, { upTo: t }) {
  if (getComputedStyle(e4).visibility === "hidden") return true;
  for (; e4; ) {
    if (t !== void 0 && e4 === t) return false;
    if (getComputedStyle(e4).display === "none") return true;
    e4 = e4.parentElement;
  }
  return false;
}
function gi(e4, { select: t = false } = {}) {
  if (e4 && e4.focus) {
    const r = document.activeElement;
    e4.focus({ preventScroll: true }), e4 !== r && (function(n) {
      return n instanceof HTMLInputElement && "select" in n;
    })(e4) && t && e4.select();
  }
}
const mm = /* @__PURE__ */ (function() {
  let e4 = [];
  return { add(t) {
    const r = e4[0];
    t !== r && (r == null || r.pause()), e4 = bm(e4, t), e4.unshift(t);
  }, remove(t) {
    var r;
    e4 = bm(e4, t), (r = e4[0]) === null || r === void 0 || r.resume();
  } };
})();
function bm(e4, t) {
  const r = [...e4], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Ty(e4) {
  const t = Ai(e4);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    const r = (n) => {
      n.key === "Escape" && t(n);
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }), [t]);
}
const s2 = globalThis != null && globalThis.document ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useLayoutEffect : () => {
};
let ym, qs = 0;
function l2({ disabled: e4 }) {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
  s2((() => {
    if (e4) {
      let r = function() {
        qs--, qs === 0 && (document.body.style.pointerEvents = ym);
      }, n = function(o) {
        t.current = o.pointerType !== "mouse";
      };
      return qs === 0 && (ym = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", qs++, document.addEventListener("pointerup", n), () => {
        t.current ? document.addEventListener("click", r, { once: true }) : r(), document.removeEventListener("pointerup", n);
      };
    }
  }), [e4]);
}
function pr(e4, t, { checkForDefaultPrevented: r = true } = {}) {
  return function(n) {
    if (e4 == null || e4(n), r === false || !n.defaultPrevented) return t == null ? void 0 : t(n);
  };
}
const c2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), u2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { disableOutsidePointerEvents: r = false, onEscapeKeyDown: n, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: l, onDismiss: c, ...u } = e4, d = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(c2), [p, h] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null), [, g] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState({}), y = ti(t, ((R) => h(R))), _ = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), b = _.indexOf(v), m = p ? _.indexOf(p) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, x = m >= b, k = (function(R) {
    const z = Ai(R), A = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
    return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
      const P = ($) => {
        $.target && !A.current && xm("dismissableLayer.pointerDownOutside", z, { originalEvent: $ }), A.current = false;
      }, B = window.setTimeout((() => {
        document.addEventListener("pointerdown", P);
      }), 0);
      return () => {
        window.clearTimeout(B), document.removeEventListener("pointerdown", P);
      };
    }), [z]), { onPointerDownCapture: () => A.current = true };
  })(((R) => {
    const z = R.target, A = [...d.branches].some(((P) => P.contains(z)));
    x && !A && (o == null || o(R), l == null || l(R), R.defaultPrevented || c == null || c());
  })), E = (function(R) {
    const z = Ai(R), A = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
    return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
      const P = (B) => {
        B.target && !A.current && xm("dismissableLayer.focusOutside", z, { originalEvent: B });
      };
      return document.addEventListener("focusin", P), () => document.removeEventListener("focusin", P);
    }), [z]), { onFocusCapture: () => A.current = true, onBlurCapture: () => A.current = false };
  })(((R) => {
    const z = R.target;
    [...d.branches].some(((A) => A.contains(z))) || (a == null || a(R), l == null || l(R), R.defaultPrevented || c == null || c());
  }));
  return Ty(((R) => {
    m === d.layers.size - 1 && (n == null || n(R), R.defaultPrevented || c == null || c());
  })), l2({ disabled: r }), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    p && (r && d.layersWithOutsidePointerEventsDisabled.add(p), d.layers.add(p), wm());
  }), [p, r, d]), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => () => {
    p && (d.layers.delete(p), d.layersWithOutsidePointerEventsDisabled.delete(p), wm());
  }), [p, d]), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    const R = () => g({});
    return document.addEventListener("dismissableLayer.update", R), () => document.removeEventListener("dismissableLayer.update", R);
  }), []), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.div, pt({}, u, { ref: y, style: { pointerEvents: w ? x ? "auto" : "none" : void 0, ...e4.style }, onFocusCapture: pr(e4.onFocusCapture, E.onFocusCapture), onBlurCapture: pr(e4.onBlurCapture, E.onBlurCapture), onPointerDownCapture: pr(e4.onPointerDownCapture, k.onPointerDownCapture) }));
}));
function wm() {
  const e4 = new Event("dismissableLayer.update");
  document.dispatchEvent(e4);
}
function xm(e4, t, r) {
  const n = r.originalEvent.target, o = new CustomEvent(e4, { bubbles: false, cancelable: true, detail: r });
  return t && n.addEventListener(e4, t, { once: true }), !n.dispatchEvent(o);
}
function _m(e4) {
  const [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(void 0);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    if (e4) {
      const n = new ResizeObserver(((o) => {
        if (!Array.isArray(o) || !o.length) return;
        const a = o[0];
        let l, c;
        if ("borderBoxSize" in a) {
          const u = a.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          l = d.inlineSize, c = d.blockSize;
        } else {
          const u = e4.getBoundingClientRect();
          l = u.width, c = u.height;
        }
        r({ width: l, height: c });
      }));
      return n.observe(e4, { box: "border-box" }), () => n.unobserve(e4);
    }
    r(void 0);
  }), [e4]), t;
}
function f2(e4, t) {
  const r = mi.get(e4);
  return r === void 0 ? (mi.set(e4, { rect: {}, callbacks: [t] }), mi.size === 1 && (nd = requestAnimationFrame(Ry))) : (r.callbacks.push(t), t(e4.getBoundingClientRect())), () => {
    const n = mi.get(e4);
    if (n === void 0) return;
    const o = n.callbacks.indexOf(t);
    o > -1 && n.callbacks.splice(o, 1), n.callbacks.length === 0 && (mi.delete(e4), mi.size === 0 && cancelAnimationFrame(nd));
  };
}
let nd;
const mi = /* @__PURE__ */ new Map();
function Ry() {
  const e4 = [];
  mi.forEach(((t, r) => {
    const n = r.getBoundingClientRect();
    var o, a;
    o = t.rect, a = n, (o.width !== a.width || o.height !== a.height || o.top !== a.top || o.right !== a.right || o.bottom !== a.bottom || o.left !== a.left) && (t.rect = n, e4.push(t));
  })), e4.forEach(((t) => {
    t.callbacks.forEach(((r) => r(t.rect)));
  })), nd = requestAnimationFrame(Ry);
}
function Cy(e4) {
  const [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState();
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    if (e4) {
      const n = f2(e4, r);
      return () => {
        r(void 0), n();
      };
    }
  }), [e4]), t;
}
function jd(e4, t = []) {
  let r = [];
  const n = () => {
    const o = r.map(((a) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(a)));
    return function(a) {
      const l = (a == null ? void 0 : a[e4]) || o;
      return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo((() => ({ [`__scope${e4}`]: { ...a, [e4]: l } })), [a, l]);
    };
  };
  return n.scopeName = e4, [function(o, a) {
    const l = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(a), c = r.length;
    function u(d) {
      const { scope: p, children: h, ...g } = d, y = (p == null ? void 0 : p[e4][c]) || l, _ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo((() => g), Object.values(g));
      return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(y.Provider, { value: _ }, h);
    }
    return r = [...r, a], u.displayName = o + "Provider", [u, function(d, p) {
      const h = (p == null ? void 0 : p[e4][c]) || l, g = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(h);
      if (g) return g;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }];
  }, d2(n, ...t)];
}
function d2(...e4) {
  const t = e4[0];
  if (e4.length === 1) return t;
  const r = () => {
    const n = e4.map(((o) => ({ useScope: o(), scopeName: o.scopeName })));
    return function(o) {
      const a = n.reduce(((l, { useScope: c, scopeName: u }) => ({ ...l, ...c(o)[`__scope${u}`] })), {});
      return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo((() => ({ [`__scope${t.scopeName}`]: a })), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function p2({ anchorRect: e4, popperSize: t, arrowSize: r, arrowOffset: n = 0, side: o, sideOffset: a = 0, align: l, alignOffset: c = 0, shouldAvoidCollisions: u = true, collisionBoundariesRect: d, collisionTolerance: p = 0 }) {
  if (!e4 || !t || !d) return { popperStyles: h2, arrowStyles: cf };
  const h = (function(z, A, P = 0, B = 0, $) {
    const N = $ ? $.height : 0, j = Sm(A, z, "x"), F = Sm(A, z, "y"), I = F.before - P - N, K = F.after + P + N, Y = j.before - P - N, G = j.after + P + N;
    return { top: { start: { x: j.start + B, y: I }, center: { x: j.center, y: I }, end: { x: j.end - B, y: I } }, right: { start: { x: G, y: F.start + B }, center: { x: G, y: F.center }, end: { x: G, y: F.end - B } }, bottom: { start: { x: j.start + B, y: K }, center: { x: j.center, y: K }, end: { x: j.end - B, y: K } }, left: { start: { x: Y, y: F.start + B }, center: { x: Y, y: F.center }, end: { x: Y, y: F.end - B } } };
  })(t, e4, a, c, r), g = h[o][l];
  if (u === false) {
    const z = Em(g);
    let A = cf;
    return r && (A = Om({ popperSize: t, arrowSize: r, arrowOffset: n, side: o, align: l })), { popperStyles: { ...z, "--radix-popper-transform-origin": km(t, o, l, n, r) }, arrowStyles: A, placedSide: o, placedAlign: l };
  }
  const y = DOMRect.fromRect({ ...t, ...g }), _ = (v = d, b = p, DOMRect.fromRect({ width: v.width - 2 * b, height: v.height - 2 * b, x: v.left + b, y: v.top + b }));
  var v, b;
  const m = Tm(y, _), w = h[Am(o)][l], x = (function(z, A, P) {
    const B = Am(z);
    return A[z] && !P[B] ? B : z;
  })(o, m, Tm(DOMRect.fromRect({ ...t, ...w }), _)), k = (function(z, A, P, B, $) {
    const N = P === "top" || P === "bottom", j = N ? "left" : "top", F = N ? "right" : "bottom", I = N ? "width" : "height", K = A[I] > z[I];
    return (B === "start" || B === "center") && ($[j] && K || $[F] && !K) ? "end" : (B === "end" || B === "center") && ($[F] && K || $[j] && !K) ? "start" : B;
  })(t, e4, o, l, m), E = Em(h[x][k]);
  let R = cf;
  return r && (R = Om({ popperSize: t, arrowSize: r, arrowOffset: n, side: x, align: k })), { popperStyles: { ...E, "--radix-popper-transform-origin": km(t, x, k, n, r) }, arrowStyles: R, placedSide: x, placedAlign: k };
}
function Sm(e4, t, r) {
  const n = e4[r === "x" ? "left" : "top"], o = r === "x" ? "width" : "height", a = e4[o], l = t[o];
  return { before: n - l, start: n, center: n + (a - l) / 2, end: n + a - l, after: n + a };
}
function Em(e4) {
  return { position: "absolute", top: 0, left: 0, minWidth: "max-content", willChange: "transform", transform: `translate3d(${Math.round(e4.x + window.scrollX)}px, ${Math.round(e4.y + window.scrollY)}px, 0)` };
}
function km(e4, t, r, n, o) {
  const a = t === "top" || t === "bottom", l = o ? o.width : 0, c = o ? o.height : 0, u = l / 2 + n;
  let d = "", p = "";
  return a ? (d = { start: `${u}px`, center: "center", end: e4.width - u + "px" }[r], p = t === "top" ? `${e4.height + c}px` : -c + "px") : (d = t === "left" ? `${e4.width + c}px` : -c + "px", p = { start: `${u}px`, center: "center", end: e4.height - u + "px" }[r]), `${d} ${p}`;
}
const h2 = { position: "fixed", top: 0, left: 0, opacity: 0, transform: "translate3d(0, -200%, 0)" }, cf = { position: "absolute", opacity: 0 };
function Om({ popperSize: e4, arrowSize: t, arrowOffset: r, side: n, align: o }) {
  const a = (e4.width - t.width) / 2, l = (e4.height - t.width) / 2, c = { top: 0, right: 90, bottom: 180, left: -90 }[n], u = Math.max(t.width, t.height), d = { width: `${u}px`, height: `${u}px`, transform: `rotate(${c}deg)`, willChange: "transform", position: "absolute", [n]: "100%", direction: g2(n, o) };
  return n !== "top" && n !== "bottom" || (o === "start" && (d.left = `${r}px`), o === "center" && (d.left = `${a}px`), o === "end" && (d.right = `${r}px`)), n !== "left" && n !== "right" || (o === "start" && (d.top = `${r}px`), o === "center" && (d.top = `${l}px`), o === "end" && (d.bottom = `${r}px`)), d;
}
function g2(e4, t) {
  return (e4 !== "top" && e4 !== "right" || t !== "end") && (e4 !== "bottom" && e4 !== "left" || t === "end") ? "ltr" : "rtl";
}
function Am(e4) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e4];
}
function Tm(e4, t) {
  return { top: e4.top < t.top, right: e4.right > t.right, bottom: e4.bottom > t.bottom, left: e4.left < t.left };
}
const [Py, ic] = jd("Popper"), [v2, Iy] = Py("Popper"), m2 = (e4) => {
  const { __scopePopper: t, children: r } = e4, [n, o] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(v2, { scope: t, anchor: n, onAnchorChange: o }, r);
}, b2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { __scopePopper: r, virtualRef: n, ...o } = e4, a = Iy("PopperAnchor", r), l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), c = ti(t, l);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    a.onAnchorChange((n == null ? void 0 : n.current) || l.current);
  })), n ? null : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.div, pt({}, o, { ref: c }));
})), [y2, s4] = Py("PopperContent"), w2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { __scopePopper: r, side: n = "bottom", sideOffset: o, align: a = "center", alignOffset: l, collisionTolerance: c, avoidCollisions: u = true, ...d } = e4, p = Iy("PopperContent", r), [h, g] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(), y = Cy(p.anchor), [_, v] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null), b = _m(_), [m, w] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null), x = _m(m), k = ti(t, ((N) => v(N))), E = (function() {
    const [N, j] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(void 0);
    return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
      let F;
      function I() {
        j({ width: window.innerWidth, height: window.innerHeight });
      }
      function K() {
        window.clearTimeout(F), F = window.setTimeout(I, 100);
      }
      return I(), window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
    }), []), N;
  })(), R = E ? DOMRect.fromRect({ ...E, x: 0, y: 0 }) : void 0, { popperStyles: z, arrowStyles: A, placedSide: P, placedAlign: B } = p2({ anchorRect: y, popperSize: b, arrowSize: x, arrowOffset: h, side: n, sideOffset: o, align: a, alignOffset: l, shouldAvoidCollisions: u, collisionBoundariesRect: R, collisionTolerance: c }), $ = P !== void 0;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement("div", { style: z, "data-radix-popper-content-wrapper": "" }, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(y2, { scope: r, arrowStyles: A, onArrowChange: w, onArrowOffsetChange: g }, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.div, pt({ "data-side": P, "data-align": B }, d, { style: { ...d.style, animation: $ ? void 0 : "none" }, ref: k }))));
})), Ny = m2, My = b2, $y = w2;
function Dy({ prop: e4, defaultProp: t, onChange: r = (() => {
}) }) {
  const [n, o] = (function({ defaultProp: u, onChange: d }) {
    const p = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(u), [h] = p, g = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(h), y = Ai(d);
    return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
      g.current !== h && (y(h), g.current = h);
    }), [h, g, y]), p;
  })({ defaultProp: t, onChange: r }), a = e4 !== void 0, l = a ? e4 : n, c = Ai(r);
  return [l, qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(((u) => {
    if (a) {
      const d = u, p = typeof u == "function" ? d(e4) : u;
      p !== e4 && c(p);
    } else o(u);
  }), [a, e4, o, c])];
}
const [x2] = jd("Popover", [ic]), Ud = ic(), [_2, Ha] = x2("Popover"), S2 = (e4) => {
  const { __scopePopover: t, children: r, open: n, defaultOpen: o, onOpenChange: a, modal: l = false } = e4, c = Ud(t), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), [d, p] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(false), [h = false, g] = Dy({ prop: n, defaultProp: o, onChange: a });
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Ny, c, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(_2, { scope: t, contentId: Ey(), triggerRef: u, open: h, onOpenChange: g, onOpenToggle: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => g(((y) => !y))), [g]), hasCustomAnchor: d, onCustomAnchorAdd: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => p(true)), []), onCustomAnchorRemove: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => p(false)), []), modal: l }, r));
}, E2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { __scopePopover: r, ...n } = e4, o = Ha("PopoverTrigger", r), a = Ud(r), l = ti(t, o.triggerRef), c = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.button, pt({ type: "button", "aria-haspopup": "dialog", "aria-expanded": o.open, "aria-controls": o.contentId, "data-state": zy(o.open) }, n, { ref: l, onClick: pr(e4.onClick, o.onOpenToggle) }));
  return o.hasCustomAnchor ? c : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(My, pt({ asChild: true }, a), c);
})), k2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { forceMount: r, ...n } = e4, o = Ha("PopoverContent", e4.__scopePopover);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Wd, { present: r || o.open }, o.modal ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(O2, pt({}, n, { ref: t })) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(A2, pt({}, n, { ref: t })));
})), O2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { allowPinchZoom: r, portalled: n = true, ...o } = e4, a = Ha("PopoverContent", e4.__scopePopover), l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), c = ti(t, l), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    const p = l.current;
    if (p) return mI(p);
  }), []);
  const d = n ? Bd : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(d, null, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Sy, { allowPinchZoom: r }, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Ly, pt({}, o, { ref: c, trapFocus: a.open, disableOutsidePointerEvents: true, onCloseAutoFocus: pr(e4.onCloseAutoFocus, ((p) => {
    var h;
    p.preventDefault(), u.current || (h = a.triggerRef.current) === null || h === void 0 || h.focus();
  })), onPointerDownOutside: pr(e4.onPointerDownOutside, ((p) => {
    const h = p.detail.originalEvent, g = h.button === 0 && h.ctrlKey === true, y = h.button === 2 || g;
    u.current = y;
  }), { checkForDefaultPrevented: false }), onFocusOutside: pr(e4.onFocusOutside, ((p) => p.preventDefault()), { checkForDefaultPrevented: false }) }))));
})), A2 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { portalled: r = true, ...n } = e4, o = Ha("PopoverContent", e4.__scopePopover), a = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false), l = r ? Bd : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(l, null, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Ly, pt({}, n, { ref: t, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (c) => {
    var u, d;
    (u = e4.onCloseAutoFocus) === null || u === void 0 || u.call(e4, c), c.defaultPrevented || (a.current || (d = o.triggerRef.current) === null || d === void 0 || d.focus(), c.preventDefault()), a.current = false;
  }, onInteractOutside: (c) => {
    var u, d;
    (u = e4.onInteractOutside) === null || u === void 0 || u.call(e4, c), c.defaultPrevented || (a.current = true);
    const p = c.target;
    !((d = o.triggerRef.current) === null || d === void 0) && d.contains(p) && c.preventDefault();
  } })));
})), Ly = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { __scopePopover: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: l, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: p, ...h } = e4, g = Ha("PopoverContent", r), y = Ud(r);
  return n2(), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(o2, { asChild: true, loop: true, trapped: n, onMountAutoFocus: o, onUnmountAutoFocus: a }, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(u2, { asChild: true, disableOutsidePointerEvents: l, onInteractOutside: p, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onDismiss: () => g.onOpenChange(false) }, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement($y, pt({ "data-state": zy(g.open), role: "dialog", id: g.contentId }, y, h, { ref: t, style: { ...h.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)" } }))));
}));
function zy(e4) {
  return e4 ? "open" : "closed";
}
const T2 = S2, R2 = E2, C2 = k2;
var xl = /* @__PURE__ */ ((e4) => (e4.VIDEO = "video", e4.CAROUSEL = "carousel", e4.TEXT = "text", e4))(xl || {}), uf = {}, Qo = {}, Gs = {}, Ks = {}, Zs = { exports: {} };
var df, Nm;
function Vd() {
  if (Nm) return df;
  Nm = 1;
  var e4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return df = e4, df;
}
var vf, Lm;
function D2() {
  if (Lm) return vf;
  Lm = 1;
  var e4 = /* @__PURE__ */ Vd();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, vf = function() {
    function n(l, c, u, d, p, h) {
      if (h !== e4) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, vf;
}
var zm;
function L2() {
  if (zm) return Zs.exports;
  if (zm = 1, false) ; else
    Zs.exports = /* @__PURE__ */ D2()();
  return Zs.exports;
}
var Fm;
function z2() {
  return Fm || (Fm = 1, (function(e4) {
    (function(t, r) {
      r(e4, F, /* @__PURE__ */ L2());
    })(Ks, function(t, r, n) {
      Object.defineProperty(t, "__esModule", {
        value: true
      }), t.setHasSupportToCaptureOption = _;
      var o = l(r), a = l(n);
      function l(w) {
        return w && w.__esModule ? w : {
          default: w
        };
      }
      var c = Object.assign || function(w) {
        for (var x = 1; x < arguments.length; x++) {
          var k = arguments[x];
          for (var E in k)
            Object.prototype.hasOwnProperty.call(k, E) && (w[E] = k[E]);
        }
        return w;
      };
      function u(w, x) {
        var k = {};
        for (var E in w)
          x.indexOf(E) >= 0 || Object.prototype.hasOwnProperty.call(w, E) && (k[E] = w[E]);
        return k;
      }
      function d(w, x) {
        if (!(w instanceof x))
          throw new TypeError("Cannot call a class as a function");
      }
      var p = /* @__PURE__ */ (function() {
        function w(x, k) {
          for (var E = 0; E < k.length; E++) {
            var R = k[E];
            R.enumerable = R.enumerable || false, R.configurable = true, "value" in R && (R.writable = true), Object.defineProperty(x, R.key, R);
          }
        }
        return function(x, k, E) {
          return k && w(x.prototype, k), E && w(x, E), x;
        };
      })();
      function h(w, x) {
        if (!w)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return x && (typeof x == "object" || typeof x == "function") ? x : w;
      }
      function g(w, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof x);
        w.prototype = Object.create(x && x.prototype, {
          constructor: {
            value: w,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(w, x) : w.__proto__ = x);
      }
      var y = false;
      function _(w) {
        y = w;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          _(true);
        } }));
      } catch {
      }
      function v() {
        var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return y ? w : w.capture;
      }
      function b(w) {
        if ("touches" in w) {
          var x = w.touches[0], k = x.pageX, E = x.pageY;
          return { x: k, y: E };
        }
        var R = w.screenX, z = w.screenY;
        return { x: R, y: z };
      }
      var m = (function(w) {
        g(x, w);
        function x() {
          var k;
          d(this, x);
          for (var E = arguments.length, R = Array(E), z = 0; z < E; z++)
            R[z] = arguments[z];
          var A = h(this, (k = x.__proto__ || Object.getPrototypeOf(x)).call.apply(k, [this].concat(R)));
          return A._handleSwipeStart = A._handleSwipeStart.bind(A), A._handleSwipeMove = A._handleSwipeMove.bind(A), A._handleSwipeEnd = A._handleSwipeEnd.bind(A), A._onMouseDown = A._onMouseDown.bind(A), A._onMouseMove = A._onMouseMove.bind(A), A._onMouseUp = A._onMouseUp.bind(A), A._setSwiperRef = A._setSwiperRef.bind(A), A;
        }
        return p(x, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, v({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, v({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(E) {
            this.props.allowMouseEvents && (this.mouseDown = true, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(E));
          }
        }, {
          key: "_onMouseMove",
          value: function(E) {
            this.mouseDown && this._handleSwipeMove(E);
          }
        }, {
          key: "_onMouseUp",
          value: function(E) {
            this.mouseDown = false, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(E);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(E) {
            var R = b(E), z = R.x, A = R.y;
            this.moveStart = { x: z, y: A }, this.props.onSwipeStart(E);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(E) {
            if (this.moveStart) {
              var R = b(E), z = R.x, A = R.y, P = z - this.moveStart.x, B = A - this.moveStart.y;
              this.moving = true;
              var $ = this.props.onSwipeMove({
                x: P,
                y: B
              }, E);
              $ && E.cancelable && E.preventDefault(), this.movePosition = { deltaX: P, deltaY: B };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(E) {
            this.props.onSwipeEnd(E);
            var R = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -R ? this.props.onSwipeLeft(1, E) : this.movePosition.deltaX > R && this.props.onSwipeRight(1, E), this.movePosition.deltaY < -R ? this.props.onSwipeUp(1, E) : this.movePosition.deltaY > R && this.props.onSwipeDown(1, E)), this.moveStart = null, this.moving = false, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(E) {
            this.swiper = E, this.props.innerRef(E);
          }
        }, {
          key: "render",
          value: function() {
            var E = this.props;
            E.tagName;
            var R = E.className, z = E.style, A = E.children;
            E.allowMouseEvents, E.onSwipeUp, E.onSwipeDown, E.onSwipeLeft, E.onSwipeRight, E.onSwipeStart, E.onSwipeMove, E.onSwipeEnd, E.innerRef, E.tolerance;
            var P = u(E, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return o.default.createElement(
              this.props.tagName,
              c({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: R,
                style: z
              }, P),
              A
            );
          }
        }]), x;
      })(r.Component);
      m.displayName = "ReactSwipe", m.propTypes = {
        tagName: a.default.string,
        className: a.default.string,
        style: a.default.object,
        children: a.default.node,
        allowMouseEvents: a.default.bool,
        onSwipeUp: a.default.func,
        onSwipeDown: a.default.func,
        onSwipeLeft: a.default.func,
        onSwipeRight: a.default.func,
        onSwipeStart: a.default.func,
        onSwipeMove: a.default.func,
        onSwipeEnd: a.default.func,
        innerRef: a.default.func,
        tolerance: a.default.number.isRequired
      }, m.defaultProps = {
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
      }, t.default = m;
    });
  })(Ks)), Ks;
}
var Hm;
function Wy() {
  return Hm || (Hm = 1, (function(e4) {
    (function(t, r) {
      r(e4, z2());
    })(Gs, function(t, r) {
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var n = o(r);
      function o(a) {
        return a && a.__esModule ? a : {
          default: a
        };
      }
      t.default = n.default;
    });
  })(Gs)), Gs;
}
var ea = {}, Wm;
function By() {
  if (Wm) return ea;
  Wm = 1, Object.defineProperty(ea, "__esModule", {
    value: true
  }), ea.default = void 0;
  var e4 = t(Q0());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o, a, l) {
    return a in o ? Object.defineProperty(o, a, { value: l, enumerable: true, configurable: true, writable: true }) : o[a] = l, o;
  }
  var n = {
    ROOT: function(a) {
      return (0, e4.default)(r({
        "carousel-root": true
      }, a || "", !!a));
    },
    CAROUSEL: function(a) {
      return (0, e4.default)({
        carousel: true,
        "carousel-slider": a
      });
    },
    WRAPPER: function(a, l) {
      return (0, e4.default)({
        "thumbs-wrapper": !a,
        "slider-wrapper": a,
        "axis-horizontal": l === "horizontal",
        "axis-vertical": l !== "horizontal"
      });
    },
    SLIDER: function(a, l) {
      return (0, e4.default)({
        thumbs: !a,
        slider: a,
        animated: !l
      });
    },
    ITEM: function(a, l, c) {
      return (0, e4.default)({
        thumb: !a,
        slide: a,
        selected: l,
        previous: c
      });
    },
    ARROW_PREV: function(a) {
      return (0, e4.default)({
        "control-arrow control-prev": true,
        "control-disabled": a
      });
    },
    ARROW_NEXT: function(a) {
      return (0, e4.default)({
        "control-arrow control-next": true,
        "control-disabled": a
      });
    },
    DOT: function(a) {
      return (0, e4.default)({
        dot: true,
        selected: a
      });
    }
  };
  return ea.default = n, ea;
}
var ta = {}, ra = {}, Bm;
function F2() {
  if (Bm) return ra;
  Bm = 1, Object.defineProperty(ra, "__esModule", {
    value: true
  }), ra.outerWidth = void 0;
  var e4 = function(r) {
    var n = r.offsetWidth, o = getComputedStyle(r);
    return n += parseInt(o.marginLeft) + parseInt(o.marginRight), n;
  };
  return ra.outerWidth = e4, ra;
}
var na = {}, jm;
function qd() {
  if (jm) return na;
  jm = 1, Object.defineProperty(na, "__esModule", {
    value: true
  }), na.default = void 0;
  var e4 = function(r, n, o) {
    var a = r === 0 ? r : r + n, l = o === "horizontal" ? [a, 0, 0] : [0, a, 0], c = "translate3d", u = "(" + l.join(",") + ")";
    return c + u;
  };
  return na.default = e4, na;
}
var ia = {}, Um;
function jy() {
  if (Um) return ia;
  Um = 1, Object.defineProperty(ia, "__esModule", {
    value: true
  }), ia.default = void 0;
  var e4 = function() {
    return window;
  };
  return ia.default = e4, ia;
}
var Vm;
function Uy() {
  if (Vm) return ta;
  Vm = 1, Object.defineProperty(ta, "__esModule", {
    value: true
  }), ta.default = void 0;
  var e4 = u(F), t = l(By()), r = F2(), n = l(qd()), o = l(Wy()), a = l(jy());
  function l(A) {
    return A && A.__esModule ? A : { default: A };
  }
  function c() {
    if (typeof WeakMap != "function") return null;
    var A = /* @__PURE__ */ new WeakMap();
    return c = function() {
      return A;
    }, A;
  }
  function u(A) {
    if (A && A.__esModule)
      return A;
    if (A === null || d(A) !== "object" && typeof A != "function")
      return { default: A };
    var P = c();
    if (P && P.has(A))
      return P.get(A);
    var B = {}, $ = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var N in A)
      if (Object.prototype.hasOwnProperty.call(A, N)) {
        var j = $ ? Object.getOwnPropertyDescriptor(A, N) : null;
        j && (j.get || j.set) ? Object.defineProperty(B, N, j) : B[N] = A[N];
      }
    return B.default = A, P && P.set(A, B), B;
  }
  function d(A) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? d = function(B) {
      return typeof B;
    } : d = function(B) {
      return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
    }, d(A);
  }
  function p() {
    return p = Object.assign || function(A) {
      for (var P = 1; P < arguments.length; P++) {
        var B = arguments[P];
        for (var $ in B)
          Object.prototype.hasOwnProperty.call(B, $) && (A[$] = B[$]);
      }
      return A;
    }, p.apply(this, arguments);
  }
  function h(A, P) {
    if (!(A instanceof P))
      throw new TypeError("Cannot call a class as a function");
  }
  function g(A, P) {
    for (var B = 0; B < P.length; B++) {
      var $ = P[B];
      $.enumerable = $.enumerable || false, $.configurable = true, "value" in $ && ($.writable = true), Object.defineProperty(A, $.key, $);
    }
  }
  function y(A, P, B) {
    return P && g(A.prototype, P), A;
  }
  function _(A, P) {
    if (typeof P != "function" && P !== null)
      throw new TypeError("Super expression must either be null or a function");
    A.prototype = Object.create(P && P.prototype, { constructor: { value: A, writable: true, configurable: true } }), P && v(A, P);
  }
  function v(A, P) {
    return v = Object.setPrototypeOf || function($, N) {
      return $.__proto__ = N, $;
    }, v(A, P);
  }
  function b(A) {
    var P = x();
    return function() {
      var $ = k(A), N;
      if (P) {
        var j = k(this).constructor;
        N = Reflect.construct($, arguments, j);
      } else
        N = $.apply(this, arguments);
      return m(this, N);
    };
  }
  function m(A, P) {
    return P && (d(P) === "object" || typeof P == "function") ? P : w(A);
  }
  function w(A) {
    if (A === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
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
  function k(A) {
    return k = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
      return B.__proto__ || Object.getPrototypeOf(B);
    }, k(A);
  }
  function E(A, P, B) {
    return P in A ? Object.defineProperty(A, P, { value: B, enumerable: true, configurable: true, writable: true }) : A[P] = B, A;
  }
  var R = function(P) {
    return P.hasOwnProperty("key");
  }, z = /* @__PURE__ */ (function(A) {
    _(B, A);
    var P = b(B);
    function B($) {
      var N;
      return h(this, B), N = P.call(this, $), E(w(N), "itemsWrapperRef", void 0), E(w(N), "itemsListRef", void 0), E(w(N), "thumbsRef", void 0), E(w(N), "setItemsWrapperRef", function(j) {
        N.itemsWrapperRef = j;
      }), E(w(N), "setItemsListRef", function(j) {
        N.itemsListRef = j;
      }), E(w(N), "setThumbsRef", function(j, F) {
        N.thumbsRef || (N.thumbsRef = []), N.thumbsRef[F] = j;
      }), E(w(N), "updateSizes", function() {
        if (!(!N.props.children || !N.itemsWrapperRef || !N.thumbsRef)) {
          var j = e4.Children.count(N.props.children), F = N.itemsWrapperRef.clientWidth, I = N.props.thumbWidth ? N.props.thumbWidth : (0, r.outerWidth)(N.thumbsRef[0]), K = Math.floor(F / I), Y = K < j, G = Y ? j - K : 0;
          N.setState(function(ge, L) {
            return {
              itemSize: I,
              visibleItems: K,
              firstItem: Y ? N.getFirstItem(L.selectedItem) : 0,
              lastPosition: G,
              showArrows: Y
            };
          });
        }
      }), E(w(N), "handleClickItem", function(j, F, I) {
        if (!R(I) || I.key === "Enter") {
          var K = N.props.onSelectItem;
          typeof K == "function" && K(j, F);
        }
      }), E(w(N), "onSwipeStart", function() {
        N.setState({
          swiping: true
        });
      }), E(w(N), "onSwipeEnd", function() {
        N.setState({
          swiping: false
        });
      }), E(w(N), "onSwipeMove", function(j) {
        var F = j.x;
        if (!N.state.itemSize || !N.itemsWrapperRef || !N.state.visibleItems)
          return false;
        var I = 0, K = e4.Children.count(N.props.children), Y = -(N.state.firstItem * 100) / N.state.visibleItems, G = Math.max(K - N.state.visibleItems, 0), ge = -G * 100 / N.state.visibleItems;
        Y === I && F > 0 && (F = 0), Y === ge && F < 0 && (F = 0);
        var L = N.itemsWrapperRef.clientWidth, V = Y + 100 / (L / F);
        return N.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(te) {
          N.itemsListRef.style[te] = (0, n.default)(V, "%", N.props.axis);
        }), true;
      }), E(w(N), "slideRight", function(j) {
        N.moveTo(N.state.firstItem - (typeof j == "number" ? j : 1));
      }), E(w(N), "slideLeft", function(j) {
        N.moveTo(N.state.firstItem + (typeof j == "number" ? j : 1));
      }), E(w(N), "moveTo", function(j) {
        j = j < 0 ? 0 : j, j = j >= N.state.lastPosition ? N.state.lastPosition : j, N.setState({
          firstItem: j
        });
      }), N.state = {
        selectedItem: $.selectedItem,
        swiping: false,
        showArrows: false,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, N;
    }
    return y(B, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(N) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== N.children && this.updateSizes();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyThumbs();
      }
    }, {
      key: "setupThumbs",
      value: function() {
        (0, a.default)().addEventListener("resize", this.updateSizes), (0, a.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
      }
    }, {
      key: "destroyThumbs",
      value: function() {
        (0, a.default)().removeEventListener("resize", this.updateSizes), (0, a.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      }
    }, {
      key: "getFirstItem",
      value: function(N) {
        var j = N;
        return N >= this.state.lastPosition && (j = this.state.lastPosition), N < this.state.firstItem + this.state.visibleItems && (j = this.state.firstItem), N < this.state.firstItem && (j = N), j;
      }
    }, {
      key: "renderItems",
      value: function() {
        var N = this;
        return this.props.children.map(function(j, F) {
          var I = t.default.ITEM(false, F === N.state.selectedItem), K = {
            key: F,
            ref: function(G) {
              return N.setThumbsRef(G, F);
            },
            className: I,
            onClick: N.handleClickItem.bind(N, F, N.props.children[F]),
            onKeyDown: N.handleClickItem.bind(N, F, N.props.children[F]),
            "aria-label": "".concat(N.props.labels.item, " ").concat(F + 1),
            style: {
              width: N.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e4.default.createElement("li", p({}, K, {
            role: "button",
            tabIndex: 0
          }), j);
        });
      }
    }, {
      key: "render",
      value: function() {
        var N = this;
        if (!this.props.children)
          return null;
        var j = e4.Children.count(this.props.children) > 1, F = this.state.showArrows && this.state.firstItem > 0, I = this.state.showArrows && this.state.firstItem < this.state.lastPosition, K = {}, Y = -this.state.firstItem * (this.state.itemSize || 0), G = (0, n.default)(Y, "px", this.props.axis), ge = this.props.transitionTime + "ms";
        return K = {
          WebkitTransform: G,
          MozTransform: G,
          MsTransform: G,
          OTransform: G,
          transform: G,
          msTransform: G,
          WebkitTransitionDuration: ge,
          MozTransitionDuration: ge,
          MsTransitionDuration: ge,
          OTransitionDuration: ge,
          transitionDuration: ge,
          msTransitionDuration: ge
        }, /* @__PURE__ */ e4.default.createElement("div", {
          className: t.default.CAROUSEL(false)
        }, /* @__PURE__ */ e4.default.createElement("div", {
          className: t.default.WRAPPER(false),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e4.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_PREV(!F),
          onClick: function() {
            return N.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), j ? /* @__PURE__ */ e4.default.createElement(o.default, {
          tagName: "ul",
          className: t.default.SLIDER(false, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: K,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e4.default.createElement("ul", {
          className: t.default.SLIDER(false, this.state.swiping),
          ref: function(V) {
            return N.setItemsListRef(V);
          },
          style: K
        }, this.renderItems()), /* @__PURE__ */ e4.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_NEXT(!I),
          onClick: function() {
            return N.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), B;
  })(e4.Component);
  return ta.default = z, E(z, "displayName", "Thumbs"), E(z, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), ta;
}
var oa = {}, qm;
function H2() {
  if (qm) return oa;
  qm = 1, Object.defineProperty(oa, "__esModule", {
    value: true
  }), oa.default = void 0;
  var e4 = function() {
    return document;
  };
  return oa.default = e4, oa;
}
var fr = {}, Gm;
function Vy() {
  if (Gm) return fr;
  Gm = 1, Object.defineProperty(fr, "__esModule", {
    value: true
  }), fr.setPosition = fr.getPosition = fr.isKeyboardEvent = fr.defaultStatusFormatter = fr.noop = void 0;
  var e4 = F, t = r(qd());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var n = function() {
  };
  fr.noop = n;
  var o = function(d, p) {
    return "".concat(d, " of ").concat(p);
  };
  fr.defaultStatusFormatter = o;
  var a = function(d) {
    return d ? d.hasOwnProperty("key") : false;
  };
  fr.isKeyboardEvent = a;
  var l = function(d, p) {
    if (p.infiniteLoop && ++d, d === 0)
      return 0;
    var h = e4.Children.count(p.children);
    if (p.centerMode && p.axis === "horizontal") {
      var g = -d * p.centerSlidePercentage, y = h - 1;
      return d && (d !== y || p.infiniteLoop) ? g += (100 - p.centerSlidePercentage) / 2 : d === y && (g += 100 - p.centerSlidePercentage), g;
    }
    return -d * 100;
  };
  fr.getPosition = l;
  var c = function(d, p) {
    var h = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(g) {
      h[g] = (0, t.default)(d, "%", p);
    }), h;
  };
  return fr.setPosition = c, fr;
}
var Fr = {}, Km;
function W2() {
  if (Km) return Fr;
  Km = 1, Object.defineProperty(Fr, "__esModule", {
    value: true
  }), Fr.fadeAnimationHandler = Fr.slideStopSwipingHandler = Fr.slideSwipeAnimationHandler = Fr.slideAnimationHandler = void 0;
  var e4 = F, t = n(qd()), r = Vy();
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function o(h, g) {
    var y = Object.keys(h);
    if (Object.getOwnPropertySymbols) {
      var _ = Object.getOwnPropertySymbols(h);
      g && (_ = _.filter(function(v) {
        return Object.getOwnPropertyDescriptor(h, v).enumerable;
      })), y.push.apply(y, _);
    }
    return y;
  }
  function a(h) {
    for (var g = 1; g < arguments.length; g++) {
      var y = arguments[g] != null ? arguments[g] : {};
      g % 2 ? o(Object(y), true).forEach(function(_) {
        l(h, _, y[_]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(y)) : o(Object(y)).forEach(function(_) {
        Object.defineProperty(h, _, Object.getOwnPropertyDescriptor(y, _));
      });
    }
    return h;
  }
  function l(h, g, y) {
    return g in h ? Object.defineProperty(h, g, { value: y, enumerable: true, configurable: true, writable: true }) : h[g] = y, h;
  }
  var c = function(g, y) {
    var _ = {}, v = y.selectedItem, b = v, m = e4.Children.count(g.children) - 1, w = g.infiniteLoop && (v < 0 || v > m);
    if (w)
      return b < 0 ? g.centerMode && g.centerSlidePercentage && g.axis === "horizontal" ? _.itemListStyle = (0, r.setPosition)(-(m + 2) * g.centerSlidePercentage - (100 - g.centerSlidePercentage) / 2, g.axis) : _.itemListStyle = (0, r.setPosition)(-(m + 2) * 100, g.axis) : b > m && (_.itemListStyle = (0, r.setPosition)(0, g.axis)), _;
    var x = (0, r.getPosition)(v, g), k = (0, t.default)(x, "%", g.axis), E = g.transitionTime + "ms";
    return _.itemListStyle = {
      WebkitTransform: k,
      msTransform: k,
      OTransform: k,
      transform: k
    }, y.swiping || (_.itemListStyle = a(a({}, _.itemListStyle), {}, {
      WebkitTransitionDuration: E,
      MozTransitionDuration: E,
      OTransitionDuration: E,
      transitionDuration: E,
      msTransitionDuration: E
    })), _;
  };
  Fr.slideAnimationHandler = c;
  var u = function(g, y, _, v) {
    var b = {}, m = y.axis === "horizontal", w = e4.Children.count(y.children), x = 0, k = (0, r.getPosition)(_.selectedItem, y), E = y.infiniteLoop ? (0, r.getPosition)(w - 1, y) - 100 : (0, r.getPosition)(w - 1, y), R = m ? g.x : g.y, z = R;
    k === x && R > 0 && (z = 0), k === E && R < 0 && (z = 0);
    var A = k + 100 / (_.itemSize / z), P = Math.abs(R) > y.swipeScrollTolerance;
    return y.infiniteLoop && P && (_.selectedItem === 0 && A > -100 ? A -= w * 100 : _.selectedItem === w - 1 && A < -w * 100 && (A += w * 100)), (!y.preventMovementUntilSwipeScrollTolerance || P || _.swipeMovementStarted) && (_.swipeMovementStarted || v({
      swipeMovementStarted: true
    }), b.itemListStyle = (0, r.setPosition)(A, y.axis)), P && !_.cancelClick && v({
      cancelClick: true
    }), b;
  };
  Fr.slideSwipeAnimationHandler = u;
  var d = function(g, y) {
    var _ = (0, r.getPosition)(y.selectedItem, g), v = (0, r.setPosition)(_, g.axis);
    return {
      itemListStyle: v
    };
  };
  Fr.slideStopSwipingHandler = d;
  var p = function(g, y) {
    var _ = g.transitionTime + "ms", v = "ease-in-out", b = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: v,
      msTransitionTimingFunction: v,
      MozTransitionTimingFunction: v,
      WebkitTransitionTimingFunction: v,
      OTransitionTimingFunction: v
    };
    return y.swiping || (b = a(a({}, b), {}, {
      WebkitTransitionDuration: _,
      MozTransitionDuration: _,
      OTransitionDuration: _,
      transitionDuration: _,
      msTransitionDuration: _
    })), {
      slideStyle: b,
      selectedStyle: a(a({}, b), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: a({}, b)
    };
  };
  return Fr.fadeAnimationHandler = p, Fr;
}
var Zm;
function B2() {
  if (Zm) return Qo;
  Zm = 1, Object.defineProperty(Qo, "__esModule", {
    value: true
  }), Qo.default = void 0;
  var e4 = p(F), t = u(Wy()), r = u(By()), n = u(Uy()), o = u(H2()), a = u(jy()), l = Vy(), c = W2();
  function u($) {
    return $ && $.__esModule ? $ : { default: $ };
  }
  function d() {
    if (typeof WeakMap != "function") return null;
    var $ = /* @__PURE__ */ new WeakMap();
    return d = function() {
      return $;
    }, $;
  }
  function p($) {
    if ($ && $.__esModule)
      return $;
    if ($ === null || h($) !== "object" && typeof $ != "function")
      return { default: $ };
    var N = d();
    if (N && N.has($))
      return N.get($);
    var j = {}, F = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var I in $)
      if (Object.prototype.hasOwnProperty.call($, I)) {
        var K = F ? Object.getOwnPropertyDescriptor($, I) : null;
        K && (K.get || K.set) ? Object.defineProperty(j, I, K) : j[I] = $[I];
      }
    return j.default = $, N && N.set($, j), j;
  }
  function h($) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? h = function(j) {
      return typeof j;
    } : h = function(j) {
      return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
    }, h($);
  }
  function g() {
    return g = Object.assign || function($) {
      for (var N = 1; N < arguments.length; N++) {
        var j = arguments[N];
        for (var F in j)
          Object.prototype.hasOwnProperty.call(j, F) && ($[F] = j[F]);
      }
      return $;
    }, g.apply(this, arguments);
  }
  function y($, N) {
    var j = Object.keys($);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols($);
      N && (F = F.filter(function(I) {
        return Object.getOwnPropertyDescriptor($, I).enumerable;
      })), j.push.apply(j, F);
    }
    return j;
  }
  function _($) {
    for (var N = 1; N < arguments.length; N++) {
      var j = arguments[N] != null ? arguments[N] : {};
      N % 2 ? y(Object(j), true).forEach(function(F) {
        P($, F, j[F]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties($, Object.getOwnPropertyDescriptors(j)) : y(Object(j)).forEach(function(F) {
        Object.defineProperty($, F, Object.getOwnPropertyDescriptor(j, F));
      });
    }
    return $;
  }
  function v($, N) {
    if (!($ instanceof N))
      throw new TypeError("Cannot call a class as a function");
  }
  function b($, N) {
    for (var j = 0; j < N.length; j++) {
      var F = N[j];
      F.enumerable = F.enumerable || false, F.configurable = true, "value" in F && (F.writable = true), Object.defineProperty($, F.key, F);
    }
  }
  function m($, N, j) {
    return N && b($.prototype, N), $;
  }
  function w($, N) {
    if (typeof N != "function" && N !== null)
      throw new TypeError("Super expression must either be null or a function");
    $.prototype = Object.create(N && N.prototype, { constructor: { value: $, writable: true, configurable: true } }), N && x($, N);
  }
  function x($, N) {
    return x = Object.setPrototypeOf || function(F, I) {
      return F.__proto__ = I, F;
    }, x($, N);
  }
  function k($) {
    var N = z();
    return function() {
      var F = A($), I;
      if (N) {
        var K = A(this).constructor;
        I = Reflect.construct(F, arguments, K);
      } else
        I = F.apply(this, arguments);
      return E(this, I);
    };
  }
  function E($, N) {
    return N && (h(N) === "object" || typeof N == "function") ? N : R($);
  }
  function R($) {
    if ($ === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return $;
  }
  function z() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function A($) {
    return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(j) {
      return j.__proto__ || Object.getPrototypeOf(j);
    }, A($);
  }
  function P($, N, j) {
    return N in $ ? Object.defineProperty($, N, { value: j, enumerable: true, configurable: true, writable: true }) : $[N] = j, $;
  }
  var B = /* @__PURE__ */ (function($) {
    w(j, $);
    var N = k(j);
    function j(F) {
      var I;
      v(this, j), I = N.call(this, F), P(R(I), "thumbsRef", void 0), P(R(I), "carouselWrapperRef", void 0), P(R(I), "listRef", void 0), P(R(I), "itemsRef", void 0), P(R(I), "timer", void 0), P(R(I), "animationHandler", void 0), P(R(I), "setThumbsRef", function(Y) {
        I.thumbsRef = Y;
      }), P(R(I), "setCarouselWrapperRef", function(Y) {
        I.carouselWrapperRef = Y;
      }), P(R(I), "setListRef", function(Y) {
        I.listRef = Y;
      }), P(R(I), "setItemsRef", function(Y, G) {
        I.itemsRef || (I.itemsRef = []), I.itemsRef[G] = Y;
      }), P(R(I), "autoPlay", function() {
        e4.Children.count(I.props.children) <= 1 || (I.clearAutoPlay(), I.props.autoPlay && (I.timer = setTimeout(function() {
          I.increment();
        }, I.props.interval)));
      }), P(R(I), "clearAutoPlay", function() {
        I.timer && clearTimeout(I.timer);
      }), P(R(I), "resetAutoPlay", function() {
        I.clearAutoPlay(), I.autoPlay();
      }), P(R(I), "stopOnHover", function() {
        I.setState({
          isMouseEntered: true
        }, I.clearAutoPlay);
      }), P(R(I), "startOnLeave", function() {
        I.setState({
          isMouseEntered: false
        }, I.autoPlay);
      }), P(R(I), "isFocusWithinTheCarousel", function() {
        return I.carouselWrapperRef ? !!((0, o.default)().activeElement === I.carouselWrapperRef || I.carouselWrapperRef.contains((0, o.default)().activeElement)) : false;
      }), P(R(I), "navigateWithKeyboard", function(Y) {
        if (I.isFocusWithinTheCarousel()) {
          var G = I.props.axis, ge = G === "horizontal", L = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, V = ge ? L.ArrowRight : L.ArrowDown, te = ge ? L.ArrowLeft : L.ArrowUp;
          V === Y.keyCode ? I.increment() : te === Y.keyCode && I.decrement();
        }
      }), P(R(I), "updateSizes", function() {
        if (!(!I.state.initialized || !I.itemsRef || I.itemsRef.length === 0)) {
          var Y = I.props.axis === "horizontal", G = I.itemsRef[0];
          if (G) {
            var ge = Y ? G.clientWidth : G.clientHeight;
            I.setState({
              itemSize: ge
            }), I.thumbsRef && I.thumbsRef.updateSizes();
          }
        }
      }), P(R(I), "setMountState", function() {
        I.setState({
          hasMount: true
        }), I.updateSizes();
      }), P(R(I), "handleClickItem", function(Y, G) {
        if (e4.Children.count(I.props.children) !== 0) {
          if (I.state.cancelClick) {
            I.setState({
              cancelClick: false
            });
            return;
          }
          I.props.onClickItem(Y, G), Y !== I.state.selectedItem && I.setState({
            selectedItem: Y
          });
        }
      }), P(R(I), "handleOnChange", function(Y, G) {
        e4.Children.count(I.props.children) <= 1 || I.props.onChange(Y, G);
      }), P(R(I), "handleClickThumb", function(Y, G) {
        I.props.onClickThumb(Y, G), I.moveTo(Y);
      }), P(R(I), "onSwipeStart", function(Y) {
        I.setState({
          swiping: true
        }), I.props.onSwipeStart(Y);
      }), P(R(I), "onSwipeEnd", function(Y) {
        I.setState({
          swiping: false,
          cancelClick: false,
          swipeMovementStarted: false
        }), I.props.onSwipeEnd(Y), I.clearAutoPlay(), I.state.autoPlay && I.autoPlay();
      }), P(R(I), "onSwipeMove", function(Y, G) {
        I.props.onSwipeMove(G);
        var ge = I.props.swipeAnimationHandler(Y, I.props, I.state, I.setState.bind(R(I)));
        return I.setState(_({}, ge)), !!Object.keys(ge).length;
      }), P(R(I), "decrement", function() {
        var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        I.moveTo(I.state.selectedItem - (typeof Y == "number" ? Y : 1));
      }), P(R(I), "increment", function() {
        var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        I.moveTo(I.state.selectedItem + (typeof Y == "number" ? Y : 1));
      }), P(R(I), "moveTo", function(Y) {
        if (typeof Y == "number") {
          var G = e4.Children.count(I.props.children) - 1;
          Y < 0 && (Y = I.props.infiniteLoop ? G : 0), Y > G && (Y = I.props.infiniteLoop ? 0 : G), I.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: Y
          }), I.state.autoPlay && I.state.isMouseEntered === false && I.resetAutoPlay();
        }
      }), P(R(I), "onClickNext", function() {
        I.increment(1);
      }), P(R(I), "onClickPrev", function() {
        I.decrement(1);
      }), P(R(I), "onSwipeForward", function() {
        I.increment(1), I.props.emulateTouch && I.setState({
          cancelClick: true
        });
      }), P(R(I), "onSwipeBackwards", function() {
        I.decrement(1), I.props.emulateTouch && I.setState({
          cancelClick: true
        });
      }), P(R(I), "changeItem", function(Y) {
        return function(G) {
          (!(0, l.isKeyboardEvent)(G) || G.key === "Enter") && I.moveTo(Y);
        };
      }), P(R(I), "selectItem", function(Y) {
        I.setState(_({
          previousItem: I.state.selectedItem
        }, Y), function() {
          I.setState(I.animationHandler(I.props, I.state));
        }), I.handleOnChange(Y.selectedItem, e4.Children.toArray(I.props.children)[Y.selectedItem]);
      }), P(R(I), "getInitialImage", function() {
        var Y = I.props.selectedItem, G = I.itemsRef && I.itemsRef[Y], ge = G && G.getElementsByTagName("img") || [];
        return ge[0];
      }), P(R(I), "getVariableItemHeight", function(Y) {
        var G = I.itemsRef && I.itemsRef[Y];
        if (I.state.hasMount && G && G.children.length) {
          var ge = G.children[0].getElementsByTagName("img") || [];
          if (ge.length > 0) {
            var L = ge[0];
            if (!L.complete) {
              var V = function X() {
                I.forceUpdate(), L.removeEventListener("load", X);
              };
              L.addEventListener("load", V);
            }
          }
          var te = ge[0] || G.children[0], Q = te.clientHeight;
          return Q > 0 ? Q : null;
        }
        return null;
      });
      var K = {
        initialized: false,
        previousItem: F.selectedItem,
        selectedItem: F.selectedItem,
        hasMount: false,
        isMouseEntered: false,
        autoPlay: F.autoPlay,
        swiping: false,
        swipeMovementStarted: false,
        cancelClick: false,
        itemSize: 1,
        itemListStyle: {},
        slideStyle: {},
        selectedStyle: {},
        prevStyle: {}
      };
      return I.animationHandler = typeof F.animationHandler == "function" && F.animationHandler || F.animationHandler === "fade" && c.fadeAnimationHandler || c.slideAnimationHandler, I.state = _(_({}, K), I.animationHandler(F, K)), I;
    }
    return m(j, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(I, K) {
        !I.children && this.props.children && !this.state.initialized && this.setupCarousel(), !I.autoFocus && this.props.autoFocus && this.forceFocus(), K.swiping && !this.state.swiping && this.setState(_({}, this.props.stopSwipingHandler(this.props, this.state))), (I.selectedItem !== this.props.selectedItem || I.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), I.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
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
        var I = this;
        this.bindEvents(), this.state.autoPlay && e4.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: true
        }, function() {
          var K = I.getInitialImage();
          K && !K.complete ? K.addEventListener("load", I.setMountState) : I.setMountState();
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
        var I = this.carouselWrapperRef;
        this.props.stopOnHover && I && (I.addEventListener("mouseenter", this.stopOnHover), I.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var I = this.carouselWrapperRef;
        this.props.stopOnHover && I && (I.removeEventListener("mouseenter", this.stopOnHover), I.removeEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "bindEvents",
      value: function() {
        (0, a.default)().addEventListener("resize", this.updateSizes), (0, a.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, o.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "unbindEvents",
      value: function() {
        (0, a.default)().removeEventListener("resize", this.updateSizes), (0, a.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        var I = this.getInitialImage();
        I && I.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, o.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var I;
        (I = this.carouselWrapperRef) === null || I === void 0 || I.focus();
      }
    }, {
      key: "renderItems",
      value: function(I) {
        var K = this;
        return this.props.children ? e4.Children.map(this.props.children, function(Y, G) {
          var ge = G === K.state.selectedItem, L = G === K.state.previousItem, V = ge && K.state.selectedStyle || L && K.state.prevStyle || K.state.slideStyle || {};
          K.props.centerMode && K.props.axis === "horizontal" && (V = _(_({}, V), {}, {
            minWidth: K.props.centerSlidePercentage + "%"
          })), K.state.swiping && K.state.swipeMovementStarted && (V = _(_({}, V), {}, {
            pointerEvents: "none"
          }));
          var te = {
            ref: function(X) {
              return K.setItemsRef(X, G);
            },
            key: "itemKey" + G + (I ? "clone" : ""),
            className: r.default.ITEM(true, G === K.state.selectedItem, G === K.state.previousItem),
            onClick: K.handleClickItem.bind(K, G, Y),
            style: V
          };
          return /* @__PURE__ */ e4.default.createElement("li", te, K.props.renderItem(Y, {
            isSelected: G === K.state.selectedItem,
            isPrevious: G === K.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var I = this, K = this.props, Y = K.showIndicators, G = K.labels, ge = K.renderIndicator, L = K.children;
        return Y ? /* @__PURE__ */ e4.default.createElement("ul", {
          className: "control-dots"
        }, e4.Children.map(L, function(V, te) {
          return ge && ge(I.changeItem(te), te === I.state.selectedItem, te, G.item);
        })) : null;
      }
    }, {
      key: "renderStatus",
      value: function() {
        return this.props.showStatus ? /* @__PURE__ */ e4.default.createElement("p", {
          className: "carousel-status"
        }, this.props.statusFormatter(this.state.selectedItem + 1, e4.Children.count(this.props.children))) : null;
      }
    }, {
      key: "renderThumbs",
      value: function() {
        return !this.props.showThumbs || !this.props.children || e4.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ e4.default.createElement(n.default, {
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
        var I = this;
        if (!this.props.children || e4.Children.count(this.props.children) === 0)
          return null;
        var K = this.props.swipeable && e4.Children.count(this.props.children) > 1, Y = this.props.axis === "horizontal", G = this.props.showArrows && e4.Children.count(this.props.children) > 1, ge = G && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false, L = G && (this.state.selectedItem < e4.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false, V = this.renderItems(true), te = V.shift(), Q = V.pop(), X = {
          className: r.default.SLIDER(true, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, ae = {};
        if (Y) {
          if (X.onSwipeLeft = this.onSwipeForward, X.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var oe = this.getVariableItemHeight(this.state.selectedItem);
            ae.height = oe || "auto";
          }
        } else
          X.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, X.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, X.style = _(_({}, X.style), {}, {
            height: this.state.itemSize
          }), ae.height = this.state.itemSize;
        return /* @__PURE__ */ e4.default.createElement("div", {
          "aria-label": this.props.ariaLabel,
          className: r.default.ROOT(this.props.className),
          ref: this.setCarouselWrapperRef,
          tabIndex: this.props.useKeyboardArrows ? 0 : void 0
        }, /* @__PURE__ */ e4.default.createElement("div", {
          className: r.default.CAROUSEL(true),
          style: {
            width: this.props.width
          }
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, ge, this.props.labels.leftArrow), /* @__PURE__ */ e4.default.createElement("div", {
          className: r.default.WRAPPER(true, this.props.axis),
          style: ae
        }, K ? /* @__PURE__ */ e4.default.createElement(t.default, g({
          tagName: "ul",
          innerRef: this.setListRef
        }, X, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && Q, this.renderItems(), this.props.infiniteLoop && te) : /* @__PURE__ */ e4.default.createElement("ul", {
          className: r.default.SLIDER(true, this.state.swiping),
          ref: function(ce) {
            return I.setListRef(ce);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && Q, this.renderItems(), this.props.infiniteLoop && te)), this.props.renderArrowNext(this.onClickNext, L, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), j;
  })(e4.default.Component);
  return Qo.default = B, P(B, "displayName", "Carousel"), P(B, "defaultProps", {
    ariaLabel: void 0,
    axis: "horizontal",
    centerSlidePercentage: 80,
    interval: 3e3,
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    onClickItem: l.noop,
    onClickThumb: l.noop,
    onChange: l.noop,
    onSwipeStart: function() {
    },
    onSwipeEnd: function() {
    },
    onSwipeMove: function() {
      return false;
    },
    preventMovementUntilSwipeScrollTolerance: false,
    renderArrowPrev: function(N, j, F) {
      return /* @__PURE__ */ e4.default.createElement("button", {
        type: "button",
        "aria-label": F,
        className: r.default.ARROW_PREV(!j),
        onClick: N
      });
    },
    renderArrowNext: function(N, j, F) {
      return /* @__PURE__ */ e4.default.createElement("button", {
        type: "button",
        "aria-label": F,
        className: r.default.ARROW_NEXT(!j),
        onClick: N
      });
    },
    renderIndicator: function(N, j, F, I) {
      return /* @__PURE__ */ e4.default.createElement("li", {
        className: r.default.DOT(j),
        onClick: N,
        onKeyDown: N,
        value: F,
        key: F,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(I, " ").concat(F + 1)
      });
    },
    renderItem: function(N) {
      return N;
    },
    renderThumbs: function(N) {
      var j = e4.Children.map(N, function(F) {
        var I = F;
        if (F.type !== "img" && (I = e4.Children.toArray(F.props.children).find(function(K) {
          return K.type === "img";
        })), !!I)
          return I;
      });
      return j.filter(function(F) {
        return F;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : j;
    },
    statusFormatter: l.defaultStatusFormatter,
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
    swipeAnimationHandler: c.slideSwipeAnimationHandler,
    stopSwipingHandler: c.slideStopSwipingHandler
  }), Qo;
}
var Ym = {};
function j2() {
  return Ym;
}
var Jm;
function U2() {
  return Jm || (Jm = 1, (function(e4) {
    Object.defineProperty(e4, "__esModule", {
      value: true
    }), Object.defineProperty(e4, "Carousel", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e4, "CarouselProps", {
      enumerable: true,
      get: function() {
        return r.CarouselProps;
      }
    }), Object.defineProperty(e4, "Thumbs", {
      enumerable: true,
      get: function() {
        return n.default;
      }
    });
    var t = o(B2()), r = j2(), n = o(Uy());
    function o(a) {
      return a && a.__esModule ? a : { default: a };
    }
  })(uf)), uf;
}
var V2 = U2();
const q2 = ({ tip: e4 }) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-full grid pb-8 px-8 place-content-center", children: qy(e4, true) }), G2 = ({ pages: e4 }) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "min-h-[10rem] w-96", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  V2.Carousel,
  {
    autoPlay: false,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    children: e4 && e4.map((t) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(q2, { tip: t }, t.key))
  }
) }), K2 = ({ body: e4, isInsideCarousel: t }) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "article",
  {
    className: it([
      "prose prose-sm max-h-[10rem] overflow-auto p-1  px-2 text-left text-[12px] text-grey-100 ",
      {
        "w-60": !t
      }
    ]),
    children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      Cl,
      {
        children: e4,
        options: {
          overrides: {
            a: {
              component: ({ children: r, ...n }) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "a",
                {
                  ...n,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-start text-primary-dark",
                  children: [
                    r,
                    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2$1, { className: "ml-1 mt-px h-4 w-4" })
                  ]
                }
              )
            }
          }
        }
      }
    )
  }
), Z2 = ({
  video: e4,
  body: t,
  title: r,
  isInsideCarousel: n
}) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
  "div",
  {
    className: it([
      {
        "flex flex-row": !n,
        "flex max-h-[10rem] flex-col overflow-y-auto": n
      }
    ]),
    children: [
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          className: it([
            {
              "mr-1": !n,
              "mb-1": n
            }
          ]),
          children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "iframe",
            {
              height: n ? "auto" : 90,
              width: n ? "100%" : 160,
              src: e4 == null ? void 0 : e4.link,
              title: r,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          )
        }
      ),
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "article",
        {
          className: it([
            "prose prose-sm p-1 text-left text-xs text-grey-100",
            {
              "w-60 overflow-auto": !n,
              "-mt-6": n
            }
          ]),
          children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            Cl,
            {
              children: t || "",
              options: {
                overrides: {
                  a: {
                    component: ({ children: o, ...a }) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                      "a",
                      {
                        ...a,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-start",
                        children: [
                          o,
                          /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2$1, { className: "ml-1 mt-px h-4 w-4" })
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
), qy = (e4, t) => {
  switch (e4.type) {
    case xl.TEXT:
      return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(K2, { body: e4.body, isInsideCarousel: t });
    case xl.VIDEO:
      return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        Z2,
        {
          video: e4.video,
          body: e4.body,
          title: e4.title,
          isInsideCarousel: t
        }
      );
    case xl.CAROUSEL:
      return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(G2, { pages: e4.pages });
  }
}, Gy = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(void 0);
function Qm(e4, t) {
  const r = [];
  return e4.forEach((n) => {
    n.key === t && r.push(n);
  }), r;
}
const l4 = ({
  children: e4,
  enabled: t,
  baseUrl: r = "https://raw.githubusercontent.com/4d/Web-studio-TIPS/main"
}) => {
  const [{ tips: n, show: o }, a] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState({
    tips: {},
    show: true
  });
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    const c = new AbortController();
    try {
      fetch(
        `${r}/tips.json`,
        // 'tips.json',
        { signal: c.signal }
      ).then((u) => u.json()).then((u) => {
        const d = u.reduce((p, h) => Qm(u, h.key).length > 1 ? {
          ...p,
          [h.key]: {
            type: "carousel",
            pages: Qm(u, h.key)
          }
        } : {
          ...p,
          [h.key]: h
        }, {});
        a((p) => ({ ...p, tips: d }));
      });
    } catch {
    }
    return () => {
      c.abort();
    };
  }, []);
  const l = () => {
    a((c) => ({ ...c, show: !o }));
  };
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Gy.Provider, { value: { tips: n, toggleTips: l, show: o, enabled: t }, children: e4 });
}, Y2 = (e4) => {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(Gy);
  if (t === void 0)
    throw new Error("useTip must be used within a TipsContext");
  return {
    tip: e4 ? t.tips[e4] : null,
    toggleTips: t.toggleTips,
    show: t.show,
    enabled: t.enabled
  };
}, X2 = Pl(R2)`
  &[data-state='open'] > * {
    display: block !important;
  }
`, J2 = ({ tipKey: e4, side: t = "right", alwaysOn: r, asButton: n = false }) => {
  const { tip: o, enabled: a } = Y2(e4), [l, c] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(false), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    if (u.current) {
      const d = new IntersectionObserver((p) => {
        p[0].isIntersecting || c(false);
      });
      return d.observe(u.current), () => {
        u.current && d.unobserve(u.current);
      };
    }
  }, []), o && a ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(T2, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      X2,
      {
        ref: u,
        className: it("focus:outline-none", {
          "rounded p-1 text-gray-100 hover:bg-primary-hover": n
        }),
        onClick: (d) => d.stopPropagation(),
        children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: it("group-hover:block", { hidden: !r }), children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(a1$1, { className: "h-4 w-4 text-yellow-300" }) })
      }
    ),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      C2,
      {
        side: t,
        sideOffset: 5,
        onClick: (d) => d.stopPropagation(),
        children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative rounded border border-grey-50 bg-grey-900 p-2 text-xs text-white shadow-2xl", children: qy(o) })
      }
    )
  ] }) : null;
};
var Q2 = Object.defineProperty, eN = (e4, t, r) => t in e4 ? Q2(e4, t, { enumerable: true, configurable: true, writable: true, value: r }) : e4[t] = r, mf = (e4, t, r) => (eN(e4, typeof t != "symbol" ? t + "" : t, r), r);
let tN = class {
  constructor() {
    mf(this, "current", this.detect()), mf(this, "handoffState", "pending"), mf(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
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
}, ao = new tN(), ln = (e4, t) => {
  ao.isServer ? qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(e4, t) : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useLayoutEffect(e4, t);
};
function so(e4) {
  let t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(e4);
  return ln(() => {
    t.current = e4;
  }, [e4]), t;
}
let Bt = function(e4) {
  let t = so(e4);
  return F.useCallback((...r) => t.current(...r), [t]);
};
function rN(e4, t, r) {
  let [n, o] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(r), a = e4 !== void 0, l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(a), c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
  return a && !l.current && !c.current ? (c.current = true, l.current = a, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !a && l.current && !u.current && (u.current = true, l.current = a, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [a ? e4 : n, Bt((d) => (a || o(d), t == null ? void 0 : t(d)))];
}
function nN(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Wa() {
  let e4 = [], t = { addEventListener(r, n, o, a) {
    return r.addEventListener(n, o, a), t.add(() => r.removeEventListener(n, o, a));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: true };
    return nN(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = false;
    });
  }, style(r, n, o) {
    let a = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: o }), this.add(() => {
      Object.assign(r.style, { [n]: a });
    });
  }, group(r) {
    let n = Wa();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e4.push(r), () => {
      let n = e4.indexOf(r);
      if (n >= 0) for (let o of e4.splice(n, 1)) o();
    };
  }, dispose() {
    for (let r of e4.splice(0)) r();
  } };
  return t;
}
function Gd() {
  let [e4] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(Wa);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => () => e4.dispose(), [e4]), e4;
}
function iN() {
  let e4 = typeof document > "u";
  return "useSyncExternalStore" in ce ? ((t) => t.useSyncExternalStore)(ce)(() => () => {
  }, () => false, () => !e4) : false;
}
function Kd() {
  let e4 = iN(), [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(ao.isHandoffComplete);
  return t && ao.isHandoffComplete === false && r(false), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    t !== true && r(true);
  }, [t]), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => ao.handoff(), []), e4 ? false : t;
}
var eb;
let Zd = (eb = F.useId) != null ? eb : function() {
  let e4 = Kd(), [t, r] = F.useState(e4 ? () => ao.nextId() : null);
  return ln(() => {
    t === null && r(ao.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function nn(e4, t, ...r) {
  if (e4 in t) {
    let o = t[e4];
    return typeof o == "function" ? o(...r) : o;
  }
  let n = new Error(`Tried to handle "${e4}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, nn), n;
}
function tb(e4) {
  var t;
  if (e4.type) return e4.type;
  let r = (t = e4.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function oN(e4, t) {
  let [r, n] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(() => tb(e4));
  return ln(() => {
    n(tb(e4));
  }, [e4.type, e4.as]), ln(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button");
  }, [r, t]), r;
}
let aN = Symbol();
function Ba(...e4) {
  let t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(e4);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    t.current = e4;
  }, [e4]);
  let r = Bt((n) => {
    for (let o of t.current) o != null && (typeof o == "function" ? o(n) : o.current = n);
  });
  return e4.every((n) => n == null || (n == null ? void 0 : n[aN])) ? void 0 : r;
}
function Nl(...e4) {
  return Array.from(new Set(e4.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var Ky = ((e4) => (e4[e4.None = 0] = "None", e4[e4.RenderStrategy = 1] = "RenderStrategy", e4[e4.Static = 2] = "Static", e4))(Ky || {}), Jn = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(Jn || {});
function Pi({ ourProps: e4, theirProps: t, slot: r, defaultTag: n, features: o, visible: a = true, name: l, mergeRefs: c }) {
  c = c ?? sN;
  let u = Zy(t, e4);
  if (a) return Xs(u, r, n, l, c);
  let d = o ?? 0;
  if (d & 2) {
    let { static: p = false, ...h } = u;
    if (p) return Xs(h, r, n, l, c);
  }
  if (d & 1) {
    let { unmount: p = true, ...h } = u;
    return nn(p ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Xs({ ...h, hidden: true, style: { display: "none" } }, r, n, l, c);
    } });
  }
  return Xs(u, r, n, l, c);
}
function Xs(e4, t = {}, r, n, o) {
  let { as: a = r, children: l, refName: c = "ref", ...u } = bf(e4, ["unmount", "static"]), d = e4.ref !== void 0 ? { [c]: e4.ref } : {}, p = typeof l == "function" ? l(t) : l;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t));
  let h = {};
  if (t) {
    let g = false, y = [];
    for (let [_, v] of Object.entries(t)) typeof v == "boolean" && (g = true), v === true && y.push(_);
    g && (h["data-headlessui-state"] = y.join(" "));
  }
  if (a === qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment && Object.keys(id(u)).length > 0) {
    if (!qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.isValidElement(p) || Array.isArray(p) && p.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(u).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
    let g = p.props, y = typeof (g == null ? void 0 : g.className) == "function" ? (...v) => Nl(g == null ? void 0 : g.className(...v), u.className) : Nl(g == null ? void 0 : g.className, u.className), _ = y ? { className: y } : {};
    return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.cloneElement(p, Object.assign({}, Zy(p.props, id(bf(u, ["ref"]))), h, d, { ref: o(p.ref, d.ref) }, _));
  }
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(a, Object.assign({}, bf(u, ["ref"]), a !== qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment && d, a !== qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment && h), p);
}
function sN(...e4) {
  return e4.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e4) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function Zy(...e4) {
  if (e4.length === 0) return {};
  if (e4.length === 1) return e4[0];
  let t = {}, r = {};
  for (let n of e4) for (let o in n) o.startsWith("on") && typeof n[o] == "function" ? (r[o] != null || (r[o] = []), r[o].push(n[o])) : t[o] = n[o];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r) Object.assign(t, { [n](o, ...a) {
    let l = r[n];
    for (let c of l) {
      if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) && o.defaultPrevented) return;
      c(o, ...a);
    }
  } });
  return t;
}
function Ii(e4) {
  var t;
  return Object.assign(qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(e4), { displayName: (t = e4.displayName) != null ? t : e4.name });
}
function id(e4) {
  let t = Object.assign({}, e4);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function bf(e4, t = []) {
  let r = Object.assign({}, e4);
  for (let n of t) n in r && delete r[n];
  return r;
}
let lN = "div";
var Yy = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(Yy || {});
function cN(e4, t) {
  var r;
  let { features: n = 1, ...o } = e4, a = { ref: t, "aria-hidden": (n & 2) === 2 ? true : (r = o["aria-hidden"]) != null ? r : void 0, hidden: (n & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return Pi({ ourProps: a, theirProps: o, slot: {}, defaultTag: lN, name: "Hidden" });
}
let uN = Ii(cN), Yd = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null);
Yd.displayName = "OpenClosedContext";
var kn = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(kn || {});
function Xy() {
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(Yd);
}
function fN({ value: e4, children: t }) {
  return F.createElement(Yd.Provider, { value: e4 }, t);
}
function dN(e4) {
  let t = e4.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return n && pN(r) ? false : n;
}
function pN(e4) {
  if (!e4) return false;
  let t = e4.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return false;
    t = t.previousElementSibling;
  }
  return true;
}
function hN(e4) {
  var t, r;
  let n = (t = e4 == null ? void 0 : e4.form) != null ? t : e4.closest("form");
  if (n) {
    for (let o of n.elements) if (o !== e4 && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
      o.click();
      return;
    }
    (r = n.requestSubmit) == null || r.call(n);
  }
}
var od = ((e4) => (e4.Space = " ", e4.Enter = "Enter", e4.Escape = "Escape", e4.Backspace = "Backspace", e4.Delete = "Delete", e4.ArrowLeft = "ArrowLeft", e4.ArrowUp = "ArrowUp", e4.ArrowRight = "ArrowRight", e4.ArrowDown = "ArrowDown", e4.Home = "Home", e4.End = "End", e4.PageUp = "PageUp", e4.PageDown = "PageDown", e4.Tab = "Tab", e4))(od || {});
function Xd() {
  let e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
  return ln(() => (e4.current = true, () => {
    e4.current = false;
  }), []), e4;
}
let Jy = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null);
function Qy() {
  let e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(Jy);
  if (e4 === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Qy), t;
  }
  return e4;
}
function gN() {
  let [e4, t] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState([]);
  return [e4.length > 0 ? e4.join(" ") : void 0, qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => function(r) {
    let n = Bt((a) => (t((l) => [...l, a]), () => t((l) => {
      let c = l.slice(), u = c.indexOf(a);
      return u !== -1 && c.splice(u, 1), c;
    }))), o = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => ({ register: n, slot: r.slot, name: r.name, props: r.props }), [n, r.slot, r.name, r.props]);
    return F.createElement(Jy.Provider, { value: o }, r.children);
  }, [t])];
}
let vN = "p";
function mN(e4, t) {
  let r = Zd(), { id: n = `headlessui-description-${r}`, ...o } = e4, a = Qy(), l = Ba(t);
  ln(() => a.register(n), [n, a.register]);
  let c = { ref: l, ...a.props, id: n };
  return Pi({ ourProps: c, theirProps: o, slot: a.slot || {}, defaultTag: vN, name: a.name || "Description" });
}
let bN = Ii(mN), yN = Object.assign(bN, {}), ew = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null);
function tw() {
  let e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(ew);
  if (e4 === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, tw), t;
  }
  return e4;
}
function wN() {
  let [e4, t] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState([]);
  return [e4.length > 0 ? e4.join(" ") : void 0, qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => function(r) {
    let n = Bt((a) => (t((l) => [...l, a]), () => t((l) => {
      let c = l.slice(), u = c.indexOf(a);
      return u !== -1 && c.splice(u, 1), c;
    }))), o = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => ({ register: n, slot: r.slot, name: r.name, props: r.props }), [n, r.slot, r.name, r.props]);
    return F.createElement(ew.Provider, { value: o }, r.children);
  }, [t])];
}
let xN = "label";
function _N(e4, t) {
  let r = Zd(), { id: n = `headlessui-label-${r}`, passive: o = false, ...a } = e4, l = tw(), c = Ba(t);
  ln(() => l.register(n), [n, l.register]);
  let u = { ref: c, ...l.props, id: n };
  return o && ("onClick" in u && (delete u.htmlFor, delete u.onClick), "onClick" in a && delete a.onClick), Pi({ ourProps: u, theirProps: a, slot: l.slot || {}, defaultTag: xN, name: l.name || "Label" });
}
let SN = Ii(_N), EN = Object.assign(SN, {});
function kN(e4 = 0) {
  let [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(e4), n = Xd(), o = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((u) => {
    n.current && r((d) => d | u);
  }, [t, n]), a = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((u) => !!(t & u), [t]), l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((u) => {
    n.current && r((d) => d & ~u);
  }, [r, n]), c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((u) => {
    n.current && r((d) => d ^ u);
  }, [r]);
  return { flags: t, addFlag: o, hasFlag: a, removeFlag: l, toggleFlag: c };
}
let Jd = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null);
Jd.displayName = "GroupContext";
let ON = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment;
function AN(e4) {
  var t;
  let [r, n] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null), [o, a] = wN(), [l, c] = gN(), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => ({ switch: r, setSwitch: n, labelledby: o, describedby: l }), [r, n, o, l]), d = {}, p = e4;
  return F.createElement(c, { name: "Switch.Description" }, F.createElement(a, { name: "Switch.Label", props: { htmlFor: (t = u.switch) == null ? void 0 : t.id, onClick(h) {
    r && (h.currentTarget.tagName === "LABEL" && h.preventDefault(), r.click(), r.focus({ preventScroll: true }));
  } } }, F.createElement(Jd.Provider, { value: u }, Pi({ ourProps: d, theirProps: p, defaultTag: ON, name: "Switch.Group" }))));
}
let TN = "button";
function RN(e4, t) {
  var r;
  let n = Zd(), { id: o = `headlessui-switch-${n}`, checked: a, defaultChecked: l = false, onChange: c, disabled: u = false, name: d, value: p, form: h, ...g } = e4, y = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(Jd), _ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), v = Ba(_, t, y === null ? null : y.setSwitch), [b, m] = rN(a, c, l), w = Bt(() => m == null ? void 0 : m(!b)), x = Bt((P) => {
    if (dN(P.currentTarget)) return P.preventDefault();
    P.preventDefault(), w();
  }), k = Bt((P) => {
    P.key === od.Space ? (P.preventDefault(), w()) : P.key === od.Enter && hN(P.currentTarget);
  }), E = Bt((P) => P.preventDefault()), R = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => ({ checked: b }), [b]), z = { id: o, ref: v, role: "switch", type: oN(e4, _), tabIndex: e4.tabIndex === -1 ? 0 : (r = e4.tabIndex) != null ? r : 0, "aria-checked": b, "aria-labelledby": y == null ? void 0 : y.labelledby, "aria-describedby": y == null ? void 0 : y.describedby, disabled: u, onClick: x, onKeyUp: k, onKeyPress: E }, A = Gd();
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    var P;
    let B = (P = _.current) == null ? void 0 : P.closest("form");
    B && l !== void 0 && A.addEventListener(B, "reset", () => {
      m(l);
    });
  }, [_, m]), F.createElement(F.Fragment, null, d != null && b && F.createElement(uN, { features: Yy.Hidden, ...id({ as: "input", type: "checkbox", hidden: true, readOnly: true, disabled: u, form: h, checked: b, name: d, value: p }) }), Pi({ ourProps: z, theirProps: g, slot: R, defaultTag: TN, name: "Switch" }));
}
let CN = Ii(RN), PN = AN, IN = Object.assign(CN, { Group: PN, Label: EN, Description: yN });
function NN(e4) {
  let t = { called: false };
  return (...r) => {
    if (!t.called) return t.called = true, e4(...r);
  };
}
function yf(e4, ...t) {
  e4 && t.length > 0 && e4.classList.add(...t);
}
function wf(e4, ...t) {
  e4 && t.length > 0 && e4.classList.remove(...t);
}
function MN(e4, t) {
  let r = Wa();
  if (!e4) return r.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e4), [a, l] = [n, o].map((u) => {
    let [d = 0] = u.split(",").filter(Boolean).map((p) => p.includes("ms") ? parseFloat(p) : parseFloat(p) * 1e3).sort((p, h) => h - p);
    return d;
  }), c = a + l;
  if (c !== 0) {
    r.group((d) => {
      d.setTimeout(() => {
        t(), d.dispose();
      }, c), d.addEventListener(e4, "transitionrun", (p) => {
        p.target === p.currentTarget && d.dispose();
      });
    });
    let u = r.addEventListener(e4, "transitionend", (d) => {
      d.target === d.currentTarget && (t(), u());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function $N(e4, t, r, n) {
  let o = r ? "enter" : "leave", a = Wa(), l = n !== void 0 ? NN(n) : () => {
  };
  o === "enter" && (e4.removeAttribute("hidden"), e4.style.display = "");
  let c = nn(o, { enter: () => t.enter, leave: () => t.leave }), u = nn(o, { enter: () => t.enterTo, leave: () => t.leaveTo }), d = nn(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return wf(e4, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), yf(e4, ...t.base, ...c, ...d), a.nextFrame(() => {
    wf(e4, ...t.base, ...c, ...d), yf(e4, ...t.base, ...c, ...u), MN(e4, () => (wf(e4, ...t.base, ...c), yf(e4, ...t.base, ...t.entered), l()));
  }), a.dispose;
}
function DN({ immediate: e4, container: t, direction: r, classes: n, onStart: o, onStop: a }) {
  let l = Xd(), c = Gd(), u = so(r);
  ln(() => {
    e4 && (u.current = "enter");
  }, [e4]), ln(() => {
    let d = Wa();
    c.add(d.dispose);
    let p = t.current;
    if (p && u.current !== "idle" && l.current) return d.dispose(), o.current(u.current), d.add($N(p, n.current, u.current === "enter", () => {
      d.dispose(), a.current(u.current);
    })), d.dispose;
  }, [r]);
}
function Un(e4 = "") {
  return e4.split(/\s+/).filter((t) => t.length > 1);
}
let oc = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null);
oc.displayName = "TransitionContext";
var LN = ((e4) => (e4.Visible = "visible", e4.Hidden = "hidden", e4))(LN || {});
function zN() {
  let e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(oc);
  if (e4 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e4;
}
function FN() {
  let e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(ac);
  if (e4 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e4;
}
let ac = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null);
ac.displayName = "NestingContext";
function sc(e4) {
  return "children" in e4 ? sc(e4.children) : e4.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function rw(e4, t) {
  let r = so(e4), n = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef([]), o = Xd(), a = Gd(), l = Bt((y, _ = Jn.Hidden) => {
    let v = n.current.findIndex(({ el: b }) => b === y);
    v !== -1 && (nn(_, { [Jn.Unmount]() {
      n.current.splice(v, 1);
    }, [Jn.Hidden]() {
      n.current[v].state = "hidden";
    } }), a.microTask(() => {
      var b;
      !sc(n) && o.current && ((b = r.current) == null || b.call(r));
    }));
  }), c = Bt((y) => {
    let _ = n.current.find(({ el: v }) => v === y);
    return _ ? _.state !== "visible" && (_.state = "visible") : n.current.push({ el: y, state: "visible" }), () => l(y, Jn.Unmount);
  }), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef([]), d = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(Promise.resolve()), p = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef({ enter: [], leave: [], idle: [] }), h = Bt((y, _, v) => {
    u.current.splice(0), t && (t.chains.current[_] = t.chains.current[_].filter(([b]) => b !== y)), t == null || t.chains.current[_].push([y, new Promise((b) => {
      u.current.push(b);
    })]), t == null || t.chains.current[_].push([y, new Promise((b) => {
      Promise.all(p.current[_].map(([m, w]) => w)).then(() => b());
    })]), _ === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => v(_)) : v(_);
  }), g = Bt((y, _, v) => {
    Promise.all(p.current[_].splice(0).map(([b, m]) => m)).then(() => {
      var b;
      (b = u.current.shift()) == null || b();
    }).then(() => v(_));
  });
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => ({ children: n, register: c, unregister: l, onStart: h, onStop: g, wait: d, chains: p }), [c, l, n, h, g, p, d]);
}
function HN() {
}
let WN = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function rb(e4) {
  var t;
  let r = {};
  for (let n of WN) r[n] = (t = e4[n]) != null ? t : HN;
  return r;
}
function BN(e4) {
  let t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(rb(e4));
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    t.current = rb(e4);
  }, [e4]), t;
}
let jN = "div", nw = Ky.RenderStrategy;
function UN(e4, t) {
  var r, n;
  let { beforeEnter: o, afterEnter: a, beforeLeave: l, afterLeave: c, enter: u, enterFrom: d, enterTo: p, entered: h, leave: g, leaveFrom: y, leaveTo: _, ...v } = e4, b = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), m = Ba(b, t), w = (r = v.unmount) == null || r ? Jn.Unmount : Jn.Hidden, { show: x, appear: k, initial: E } = zN(), [R, z] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(x ? "visible" : "hidden"), A = FN(), { register: P, unregister: B } = A;
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => P(b), [P, b]), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    if (w === Jn.Hidden && b.current) {
      if (x && R !== "visible") {
        z("visible");
        return;
      }
      return nn(R, { hidden: () => B(b), visible: () => P(b) });
    }
  }, [R, b, P, B, x, w]);
  let $ = so({ base: Un(v.className), enter: Un(u), enterFrom: Un(d), enterTo: Un(p), entered: Un(h), leave: Un(g), leaveFrom: Un(y), leaveTo: Un(_) }), N = BN({ beforeEnter: o, afterEnter: a, beforeLeave: l, afterLeave: c }), j = Kd();
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    if (j && R === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [b, R, j]);
  let F$1 = E && !k, I = k && x && E, K = !j || F$1 ? "idle" : x ? "enter" : "leave", Y = kN(0), G = Bt((X) => nn(X, { enter: () => {
    Y.addFlag(kn.Opening), N.current.beforeEnter();
  }, leave: () => {
    Y.addFlag(kn.Closing), N.current.beforeLeave();
  }, idle: () => {
  } })), ge = Bt((X) => nn(X, { enter: () => {
    Y.removeFlag(kn.Opening), N.current.afterEnter();
  }, leave: () => {
    Y.removeFlag(kn.Closing), N.current.afterLeave();
  }, idle: () => {
  } })), L = rw(() => {
    z("hidden"), B(b);
  }, A), V = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
  DN({ immediate: I, container: b, classes: $, direction: K, onStart: so((X) => {
    V.current = true, L.onStart(b, X, G);
  }), onStop: so((X) => {
    V.current = false, L.onStop(b, X, ge), X === "leave" && !sc(L) && (z("hidden"), B(b));
  }) });
  let te = v, Q = { ref: m };
  return I ? te = { ...te, className: Nl(v.className, ...$.current.enter, ...$.current.enterFrom) } : V.current && (te.className = Nl(v.className, (n = b.current) == null ? void 0 : n.className), te.className === "" && delete te.className), F.createElement(ac.Provider, { value: L }, F.createElement(fN, { value: nn(R, { visible: kn.Open, hidden: kn.Closed }) | Y.flags }, Pi({ ourProps: Q, theirProps: te, defaultTag: jN, features: nw, visible: R === "visible", name: "Transition.Child" })));
}
function VN(e4, t) {
  let { show: r, appear: n = false, unmount: o = true, ...a } = e4, l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), c = Ba(l, t);
  Kd();
  let u = Xy();
  if (r === void 0 && u !== null && (r = (u & kn.Open) === kn.Open), ![true, false].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [d, p] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(r ? "visible" : "hidden"), h = rw(() => {
    p("hidden");
  }), [g, y] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(true), _ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef([r]);
  ln(() => {
    g !== false && _.current[_.current.length - 1] !== r && (_.current.push(r), y(false));
  }, [_, r]);
  let v = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => ({ show: r, appear: n, initial: g }), [r, n, g]);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    if (r) p("visible");
    else if (!sc(h)) p("hidden");
    else {
      let x = l.current;
      if (!x) return;
      let k = x.getBoundingClientRect();
      k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && p("hidden");
    }
  }, [r, h]);
  let b = { unmount: o }, m = Bt(() => {
    var x;
    g && y(false), (x = e4.beforeEnter) == null || x.call(e4);
  }), w = Bt(() => {
    var x;
    g && y(false), (x = e4.beforeLeave) == null || x.call(e4);
  });
  return F.createElement(ac.Provider, { value: h }, F.createElement(oc.Provider, { value: v }, Pi({ ourProps: { ...b, as: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, children: F.createElement(iw, { ref: c, ...b, ...a, beforeEnter: m, beforeLeave: w }) }, theirProps: {}, defaultTag: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, features: nw, visible: d === "visible", name: "Transition" })));
}
function qN(e4, t) {
  let r = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(oc) !== null, n = Xy() !== null;
  return F.createElement(F.Fragment, null, !r && n ? F.createElement(ad, { ref: t, ...e4 }) : F.createElement(iw, { ref: t, ...e4 }));
}
let ad = Ii(VN), iw = Ii(UN), GN = Ii(qN), Ml = Object.assign(ad, { Child: GN, Root: ad });
const xf = {
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
}, KN = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(({ onChange: e4, value: t, size: r = "md", className: n = "ml-auto" }, o) => {
  const a = (l) => {
    e4(l);
  };
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: it("flex items-center", n), children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    IN,
    {
      as: "span",
      ref: o,
      checked: t,
      onChange: a,
      onKeyDown: (l) => {
        l.key === "Enter" && a(!t);
      },
      className: `${t ? "bg-primary-dark" : "bg-grey-200"}
relative inline-flex shrink-0 ${xf[r].container} cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
      children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: `${t ? xf[r].translate : "translate-x-0"}
pointer-events-none inline-block ${xf[r].switch} transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        }
      )
    }
  ) });
});
function Qd() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var Ni = Qd();
function ow(e4) {
  Ni = e4;
}
var ka = { exec: () => null };
function Fe(e4, t = "") {
  let r = typeof e4 == "string" ? e4 : e4.source, n = { replace: (o, a) => {
    let l = typeof a == "string" ? a : a.source;
    return l = l.replace(Zt.caret, "$1"), r = r.replace(o, l), n;
  }, getRegex: () => new RegExp(r, t) };
  return n;
}
var Zt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e4) => new RegExp(`^( {0,3}${e4})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e4) => new RegExp(`^ {0,${Math.min(3, e4 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e4) => new RegExp(`^ {0,${Math.min(3, e4 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e4) => new RegExp(`^ {0,${Math.min(3, e4 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e4) => new RegExp(`^ {0,${Math.min(3, e4 - 1)}}#`), htmlBeginRegex: (e4) => new RegExp(`^ {0,${Math.min(3, e4 - 1)}}<(?:[a-z].*>|!--)`, "i") }, ZN = /^(?:[ \t]*(?:\n|$))+/, YN = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, XN = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ja = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, JN = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ep = /(?:[*+-]|\d{1,9}[.)])/, aw = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, sw = Fe(aw).replace(/bull/g, ep).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), QN = Fe(aw).replace(/bull/g, ep).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), tp = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, eM = /^[^\n]+/, rp = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, tM = Fe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", rp).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), rM = Fe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ep).getRegex(), lc = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", np = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, nM = Fe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", np).replace("tag", lc).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), lw = Fe(tp).replace("hr", ja).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", lc).getRegex(), iM = Fe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", lw).getRegex(), ip = { blockquote: iM, code: YN, def: tM, fences: XN, heading: JN, hr: ja, html: nM, lheading: sw, list: rM, newline: ZN, paragraph: lw, table: ka, text: eM }, nb = Fe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ja).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", lc).getRegex(), oM = { ...ip, lheading: QN, table: nb, paragraph: Fe(tp).replace("hr", ja).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", nb).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", lc).getRegex() }, aM = { ...ip, html: Fe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", np).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ka, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Fe(tp).replace("hr", ja).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", sw).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, sM = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, lM = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, cw = /^( {2,}|\\)\n(?!\s*$)/, cM = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, cc = /[\p{P}\p{S}]/u, op = /[\s\p{P}\p{S}]/u, uw = /[^\s\p{P}\p{S}]/u, uM = Fe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, op).getRegex(), fw = /(?!~)[\p{P}\p{S}]/u, fM = /(?!~)[\s\p{P}\p{S}]/u, dM = /(?:[^\s\p{P}\p{S}]|~)/u, pM = /\[(?:[^\[\]`]|`[^`]*?`)*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, dw = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, hM = Fe(dw, "u").replace(/punct/g, cc).getRegex(), gM = Fe(dw, "u").replace(/punct/g, fw).getRegex(), pw = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", vM = Fe(pw, "gu").replace(/notPunctSpace/g, uw).replace(/punctSpace/g, op).replace(/punct/g, cc).getRegex(), mM = Fe(pw, "gu").replace(/notPunctSpace/g, dM).replace(/punctSpace/g, fM).replace(/punct/g, fw).getRegex(), bM = Fe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, uw).replace(/punctSpace/g, op).replace(/punct/g, cc).getRegex(), yM = Fe(/\\(punct)/, "gu").replace(/punct/g, cc).getRegex(), wM = Fe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), xM = Fe(np).replace("(?:-->|$)", "-->").getRegex(), _M = Fe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", xM).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), $l = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, SM = Fe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", $l).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), hw = Fe(/^!?\[(label)\]\[(ref)\]/).replace("label", $l).replace("ref", rp).getRegex(), gw = Fe(/^!?\[(ref)\](?:\[\])?/).replace("ref", rp).getRegex(), EM = Fe("reflink|nolink(?!\\()", "g").replace("reflink", hw).replace("nolink", gw).getRegex(), ib = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, ap = { _backpedal: ka, anyPunctuation: yM, autolink: wM, blockSkip: pM, br: cw, code: lM, del: ka, emStrongLDelim: hM, emStrongRDelimAst: vM, emStrongRDelimUnd: bM, escape: sM, link: SM, nolink: gw, punctuation: uM, reflink: hw, reflinkSearch: EM, tag: _M, text: cM, url: ka }, kM = { ...ap, link: Fe(/^!?\[(label)\]\((.*?)\)/).replace("label", $l).getRegex(), reflink: Fe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", $l).getRegex() }, sd = { ...ap, emStrongRDelimAst: mM, emStrongLDelim: gM, url: Fe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ib).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Fe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ib).getRegex() }, OM = { ...sd, br: Fe(cw).replace("{2,}", "*").getRegex(), text: Fe(sd.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Js = { normal: ip, gfm: oM, pedantic: aM }, aa = { normal: ap, gfm: sd, breaks: OM, pedantic: kM }, AM = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ob = (e4) => AM[e4];
function Jr(e4, t) {
  if (t) {
    if (Zt.escapeTest.test(e4)) return e4.replace(Zt.escapeReplace, ob);
  } else if (Zt.escapeTestNoEncode.test(e4)) return e4.replace(Zt.escapeReplaceNoEncode, ob);
  return e4;
}
function ab(e4) {
  try {
    e4 = encodeURI(e4).replace(Zt.percentDecode, "%");
  } catch {
    return null;
  }
  return e4;
}
function sb(e4, t) {
  var a;
  let r = e4.replace(Zt.findPipe, (l, c, u) => {
    let d = false, p = c;
    for (; --p >= 0 && u[p] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = r.split(Zt.splitPipe), o = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((a = n.at(-1)) != null && a.trim()) && n.pop(), t) if (n.length > t) n.splice(t);
  else for (; n.length < t; ) n.push("");
  for (; o < n.length; o++) n[o] = n[o].trim().replace(Zt.slashPipe, "|");
  return n;
}
function sa(e4, t, r) {
  let n = e4.length;
  if (n === 0) return "";
  let o = 0;
  for (; o < n && e4.charAt(n - o - 1) === t; )
    o++;
  return e4.slice(0, n - o);
}
function TM(e4, t) {
  if (e4.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let n = 0; n < e4.length; n++) if (e4[n] === "\\") n++;
  else if (e4[n] === t[0]) r++;
  else if (e4[n] === t[1] && (r--, r < 0)) return n;
  return r > 0 ? -2 : -1;
}
function lb(e4, t, r, n, o) {
  let a = t.href, l = t.title || null, c = e4[1].replace(o.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let u = { type: e4[0].charAt(0) === "!" ? "image" : "link", raw: r, href: a, title: l, text: c, tokens: n.inlineTokens(c) };
  return n.state.inLink = false, u;
}
function RM(e4, t, r) {
  let n = e4.match(r.other.indentCodeCompensation);
  if (n === null) return t;
  let o = n[1];
  return t.split(`
`).map((a) => {
    let l = a.match(r.other.beginningSpace);
    if (l === null) return a;
    let [c] = l;
    return c.length >= o.length ? a.slice(o.length) : a;
  }).join(`
`);
}
var Dl = class {
  constructor(t) {
    Ee(this, "options");
    Ee(this, "rules");
    Ee(this, "lexer");
    this.options = t || Ni;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let n = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : sa(n, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let n = r[0], o = RM(n, r[3] || "", this.rules);
      return { type: "code", raw: n, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: o };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let n = r[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let o = sa(n, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (n = o.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: sa(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let n = sa(r[0], `
`).split(`
`), o = "", a = "", l = [];
      for (; n.length > 0; ) {
        let c = false, u = [], d;
        for (d = 0; d < n.length; d++) if (this.rules.other.blockquoteStart.test(n[d])) u.push(n[d]), c = true;
        else if (!c) u.push(n[d]);
        else break;
        n = n.slice(d);
        let p = u.join(`
`), h = p.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        o = o ? `${o}
${p}` : p, a = a ? `${a}
${h}` : h;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(h, l, true), this.lexer.state.top = g, n.length === 0) break;
        let y = l.at(-1);
        if ((y == null ? void 0 : y.type) === "code") break;
        if ((y == null ? void 0 : y.type) === "blockquote") {
          let _ = y, v = _.raw + `
` + n.join(`
`), b = this.blockquote(v);
          l[l.length - 1] = b, o = o.substring(0, o.length - _.raw.length) + b.raw, a = a.substring(0, a.length - _.text.length) + b.text;
          break;
        } else if ((y == null ? void 0 : y.type) === "list") {
          let _ = y, v = _.raw + `
` + n.join(`
`), b = this.list(v);
          l[l.length - 1] = b, o = o.substring(0, o.length - y.raw.length) + b.raw, a = a.substring(0, a.length - _.raw.length) + b.raw, n = v.substring(l.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: l, text: a };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let n = r[1].trim(), o = n.length > 1, a = { type: "list", raw: "", ordered: o, start: o ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = o ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = o ? n : "[*+-]");
      let l = this.rules.other.listItemRegex(n), c = false;
      for (; t; ) {
        let d = false, p = "", h = "";
        if (!(r = l.exec(t)) || this.rules.block.hr.test(t)) break;
        p = r[0], t = t.substring(p.length);
        let g = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (w) => " ".repeat(3 * w.length)), y = t.split(`
`, 1)[0], _ = !g.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, h = g.trimStart()) : _ ? v = r[1].length + 1 : (v = r[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, h = g.slice(v), v += r[1].length), _ && this.rules.other.blankLine.test(y) && (p += y + `
`, t = t.substring(y.length + 1), d = true), !d) {
          let w = this.rules.other.nextBulletRegex(v), x = this.rules.other.hrRegex(v), k = this.rules.other.fencesBeginRegex(v), E = this.rules.other.headingBeginRegex(v), R = this.rules.other.htmlBeginRegex(v);
          for (; t; ) {
            let z = t.split(`
`, 1)[0], A;
            if (y = z, this.options.pedantic ? (y = y.replace(this.rules.other.listReplaceNesting, "  "), A = y) : A = y.replace(this.rules.other.tabCharGlobal, "    "), k.test(y) || E.test(y) || R.test(y) || w.test(y) || x.test(y)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= v || !y.trim()) h += `
` + A.slice(v);
            else {
              if (_ || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || k.test(g) || E.test(g) || x.test(g)) break;
              h += `
` + y;
            }
            !_ && !y.trim() && (_ = true), p += z + `
`, t = t.substring(z.length + 1), g = A.slice(v);
          }
        }
        a.loose || (c ? a.loose = true : this.rules.other.doubleBlankLine.test(p) && (c = true));
        let b = null, m;
        this.options.gfm && (b = this.rules.other.listIsTask.exec(h), b && (m = b[0] !== "[ ] ", h = h.replace(this.rules.other.listReplaceTask, ""))), a.items.push({ type: "list_item", raw: p, task: !!b, checked: m, loose: false, text: h, tokens: [] }), a.raw += p;
      }
      let u = a.items.at(-1);
      if (u) u.raw = u.raw.trimEnd(), u.text = u.text.trimEnd();
      else return;
      a.raw = a.raw.trimEnd();
      for (let d = 0; d < a.items.length; d++) if (this.lexer.state.top = false, a.items[d].tokens = this.lexer.blockTokens(a.items[d].text, []), !a.loose) {
        let p = a.items[d].tokens.filter((g) => g.type === "space"), h = p.length > 0 && p.some((g) => this.rules.other.anyLine.test(g.raw));
        a.loose = h;
      }
      if (a.loose) for (let d = 0; d < a.items.length; d++) a.items[d].loose = true;
      return a;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: true, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let n = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), o = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: n, raw: r[0], href: o, title: a };
    }
  }
  table(t) {
    var c;
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let n = sb(r[1]), o = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (c = r[3]) != null && c.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], l = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (n.length === o.length) {
      for (let u of o) this.rules.other.tableAlignRight.test(u) ? l.align.push("right") : this.rules.other.tableAlignCenter.test(u) ? l.align.push("center") : this.rules.other.tableAlignLeft.test(u) ? l.align.push("left") : l.align.push(null);
      for (let u = 0; u < n.length; u++) l.header.push({ text: n[u], tokens: this.lexer.inline(n[u]), header: true, align: l.align[u] });
      for (let u of a) l.rows.push(sb(u, l.header.length).map((d, p) => ({ text: d, tokens: this.lexer.inline(d), header: false, align: l.align[p] })));
      return l;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let n = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let n = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let l = sa(n.slice(0, -1), "\\");
        if ((n.length - l.length) % 2 === 0) return;
      } else {
        let l = TM(r[2], "()");
        if (l === -2) return;
        if (l > -1) {
          let c = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + l;
          r[2] = r[2].substring(0, l), r[0] = r[0].substring(0, c).trim(), r[3] = "";
        }
      }
      let o = r[2], a = "";
      if (this.options.pedantic) {
        let l = this.rules.other.pedanticHrefTitle.exec(o);
        l && (o = l[1], a = l[3]);
      } else a = r[3] ? r[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? o = o.slice(1) : o = o.slice(1, -1)), lb(r, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let n;
    if ((n = this.rules.inline.reflink.exec(t)) || (n = this.rules.inline.nolink.exec(t))) {
      let o = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = r[o.toLowerCase()];
      if (!a) {
        let l = n[0].charAt(0);
        return { type: "text", raw: l, text: l };
      }
      return lb(n, a, n[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, n = "") {
    let o = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!o || o[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let a = [...o[0]].length - 1, l, c, u = a, d = 0, p = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, r = r.slice(-1 * t.length + a); (o = p.exec(r)) != null; ) {
        if (l = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !l) continue;
        if (c = [...l].length, o[3] || o[4]) {
          u += c;
          continue;
        } else if ((o[5] || o[6]) && a % 3 && !((a + c) % 3)) {
          d += c;
          continue;
        }
        if (u -= c, u > 0) continue;
        c = Math.min(c, c + u + d);
        let h = [...o[0]][0].length, g = t.slice(0, a + o.index + h + c);
        if (Math.min(a, c) % 2) {
          let _ = g.slice(1, -1);
          return { type: "em", raw: g, text: _, tokens: this.lexer.inlineTokens(_) };
        }
        let y = g.slice(2, -2);
        return { type: "strong", raw: g, text: y, tokens: this.lexer.inlineTokens(y) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let n = r[2].replace(this.rules.other.newLineCharGlobal, " "), o = this.rules.other.nonSpaceChar.test(n), a = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return o && a && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: r[0], text: n };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let n, o;
      return r[2] === "@" ? (n = r[1], o = "mailto:" + n) : (n = r[1], o = n), { type: "link", raw: r[0], text: n, href: o, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(t) {
    var n;
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let o, a;
      if (r[2] === "@") o = r[0], a = "mailto:" + o;
      else {
        let l;
        do
          l = r[0], r[0] = ((n = this.rules.inline._backpedal.exec(r[0])) == null ? void 0 : n[0]) ?? "";
        while (l !== r[0]);
        o = r[0], r[1] === "www." ? a = "http://" + r[0] : a = r[0];
      }
      return { type: "link", raw: r[0], text: o, href: a, tokens: [{ type: "text", raw: o, text: o }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: n };
    }
  }
}, Hr = class ld {
  constructor(t) {
    Ee(this, "tokens");
    Ee(this, "options");
    Ee(this, "state");
    Ee(this, "tokenizer");
    Ee(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ni, this.options.tokenizer = this.options.tokenizer || new Dl(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let r = { other: Zt, block: Js.normal, inline: aa.normal };
    this.options.pedantic ? (r.block = Js.pedantic, r.inline = aa.pedantic) : this.options.gfm && (r.block = Js.gfm, this.options.breaks ? r.inline = aa.breaks : r.inline = aa.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: Js, inline: aa };
  }
  static lex(t, r) {
    return new ld(r).lex(t);
  }
  static lexInline(t, r) {
    return new ld(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Zt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let n = this.inlineQueue[r];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], n = false) {
    var o, a, l;
    for (this.options.pedantic && (t = t.replace(Zt.tabCharGlobal, "    ").replace(Zt.spaceLine, "")); t; ) {
      let c;
      if ((a = (o = this.options.extensions) == null ? void 0 : o.block) != null && a.some((d) => (c = d.call({ lexer: this }, t, r)) ? (t = t.substring(c.raw.length), r.push(c), true) : false)) continue;
      if (c = this.tokenizer.space(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        c.raw.length === 1 && d !== void 0 ? d.raw += `
` : r.push(c);
        continue;
      }
      if (c = this.tokenizer.code(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        (d == null ? void 0 : d.type) === "paragraph" || (d == null ? void 0 : d.type) === "text" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.text, this.inlineQueue.at(-1).src = d.text) : r.push(c);
        continue;
      }
      if (c = this.tokenizer.fences(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.heading(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.hr(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.blockquote(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.list(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.html(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.def(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        (d == null ? void 0 : d.type) === "paragraph" || (d == null ? void 0 : d.type) === "text" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.raw, this.inlineQueue.at(-1).src = d.text) : this.tokens.links[c.tag] || (this.tokens.links[c.tag] = { href: c.href, title: c.title }, r.push(c));
        continue;
      }
      if (c = this.tokenizer.table(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.lheading(t)) {
        t = t.substring(c.raw.length), r.push(c);
        continue;
      }
      let u = t;
      if ((l = this.options.extensions) != null && l.startBlock) {
        let d = 1 / 0, p = t.slice(1), h;
        this.options.extensions.startBlock.forEach((g) => {
          h = g.call({ lexer: this }, p), typeof h == "number" && h >= 0 && (d = Math.min(d, h));
        }), d < 1 / 0 && d >= 0 && (u = t.substring(0, d + 1));
      }
      if (this.state.top && (c = this.tokenizer.paragraph(u))) {
        let d = r.at(-1);
        n && (d == null ? void 0 : d.type) === "paragraph" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = d.text) : r.push(c), n = u.length !== t.length, t = t.substring(c.raw.length);
        continue;
      }
      if (c = this.tokenizer.text(t)) {
        t = t.substring(c.raw.length);
        let d = r.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += (d.raw.endsWith(`
`) ? "" : `
`) + c.raw, d.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = d.text) : r.push(c);
        continue;
      }
      if (t) {
        let d = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else throw new Error(d);
      }
    }
    return this.state.top = true, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    var c, u, d, p, h;
    let n = t, o = null;
    if (this.tokens.links) {
      let g = Object.keys(this.tokens.links);
      if (g.length > 0) for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) g.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, o.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) n = n.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = ((u = (c = this.options.hooks) == null ? void 0 : c.emStrongMask) == null ? void 0 : u.call({ lexer: this }, n)) ?? n;
    let a = false, l = "";
    for (; t; ) {
      a || (l = ""), a = false;
      let g;
      if ((p = (d = this.options.extensions) == null ? void 0 : d.inline) != null && p.some((_) => (g = _.call({ lexer: this }, t, r)) ? (t = t.substring(g.raw.length), r.push(g), true) : false)) continue;
      if (g = this.tokenizer.escape(t)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (g = this.tokenizer.tag(t)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (g = this.tokenizer.link(t)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (g = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(g.raw.length);
        let _ = r.at(-1);
        g.type === "text" && (_ == null ? void 0 : _.type) === "text" ? (_.raw += g.raw, _.text += g.text) : r.push(g);
        continue;
      }
      if (g = this.tokenizer.emStrong(t, n, l)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (g = this.tokenizer.codespan(t)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (g = this.tokenizer.br(t)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (g = this.tokenizer.del(t)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (g = this.tokenizer.autolink(t)) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      if (!this.state.inLink && (g = this.tokenizer.url(t))) {
        t = t.substring(g.raw.length), r.push(g);
        continue;
      }
      let y = t;
      if ((h = this.options.extensions) != null && h.startInline) {
        let _ = 1 / 0, v = t.slice(1), b;
        this.options.extensions.startInline.forEach((m) => {
          b = m.call({ lexer: this }, v), typeof b == "number" && b >= 0 && (_ = Math.min(_, b));
        }), _ < 1 / 0 && _ >= 0 && (y = t.substring(0, _ + 1));
      }
      if (g = this.tokenizer.inlineText(y)) {
        t = t.substring(g.raw.length), g.raw.slice(-1) !== "_" && (l = g.raw.slice(-1)), a = true;
        let _ = r.at(-1);
        (_ == null ? void 0 : _.type) === "text" ? (_.raw += g.raw, _.text += g.text) : r.push(g);
        continue;
      }
      if (t) {
        let _ = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(_);
          break;
        } else throw new Error(_);
      }
    }
    return r;
  }
}, Ll = class {
  constructor(t) {
    Ee(this, "options");
    Ee(this, "parser");
    this.options = t || Ni;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: n }) {
    var l;
    let o = (l = (r || "").match(Zt.notSpaceStart)) == null ? void 0 : l[0], a = t.replace(Zt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Jr(o) + '">' + (n ? a : Jr(a, true)) + `</code></pre>
` : "<pre><code>" + (n ? a : Jr(a, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, n = t.start, o = "";
    for (let c = 0; c < t.items.length; c++) {
      let u = t.items[c];
      o += this.listitem(u);
    }
    let a = r ? "ol" : "ul", l = r && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + a + l + `>
` + o + "</" + a + `>
`;
  }
  listitem(t) {
    var n;
    let r = "";
    if (t.task) {
      let o = this.checkbox({ checked: !!t.checked });
      t.loose ? ((n = t.tokens[0]) == null ? void 0 : n.type) === "paragraph" ? (t.tokens[0].text = o + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = o + " " + Jr(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = true)) : t.tokens.unshift({ type: "text", raw: o + " ", text: o + " ", escaped: true }) : r += o + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", n = "";
    for (let a = 0; a < t.header.length; a++) n += this.tablecell(t.header[a]);
    r += this.tablerow({ text: n });
    let o = "";
    for (let a = 0; a < t.rows.length; a++) {
      let l = t.rows[a];
      n = "";
      for (let c = 0; c < l.length; c++) n += this.tablecell(l[c]);
      o += this.tablerow({ text: n });
    }
    return o && (o = `<tbody>${o}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + o + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), n = t.header ? "th" : "td";
    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + r + `</${n}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${Jr(t, true)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: n }) {
    let o = this.parser.parseInline(n), a = ab(t);
    if (a === null) return o;
    t = a;
    let l = '<a href="' + t + '"';
    return r && (l += ' title="' + Jr(r) + '"'), l += ">" + o + "</a>", l;
  }
  image({ href: t, title: r, text: n, tokens: o }) {
    o && (n = this.parser.parseInline(o, this.parser.textRenderer));
    let a = ab(t);
    if (a === null) return Jr(n);
    t = a;
    let l = `<img src="${t}" alt="${n}"`;
    return r && (l += ` title="${Jr(r)}"`), l += ">", l;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Jr(t.text);
  }
}, sp = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, Wr = class cd {
  constructor(t) {
    Ee(this, "options");
    Ee(this, "renderer");
    Ee(this, "textRenderer");
    this.options = t || Ni, this.options.renderer = this.options.renderer || new Ll(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new sp();
  }
  static parse(t, r) {
    return new cd(r).parse(t);
  }
  static parseInline(t, r) {
    return new cd(r).parseInline(t);
  }
  parse(t, r = true) {
    var o, a;
    let n = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((a = (o = this.options.extensions) == null ? void 0 : o.renderers) != null && a[c.type]) {
        let d = c, p = this.options.extensions.renderers[d.type].call({ parser: this }, d);
        if (p !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(d.type)) {
          n += p || "";
          continue;
        }
      }
      let u = c;
      switch (u.type) {
        case "space": {
          n += this.renderer.space(u);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(u);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(u);
          continue;
        }
        case "code": {
          n += this.renderer.code(u);
          continue;
        }
        case "table": {
          n += this.renderer.table(u);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(u);
          continue;
        }
        case "list": {
          n += this.renderer.list(u);
          continue;
        }
        case "html": {
          n += this.renderer.html(u);
          continue;
        }
        case "def": {
          n += this.renderer.def(u);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(u);
          continue;
        }
        case "text": {
          let d = u, p = this.renderer.text(d);
          for (; l + 1 < t.length && t[l + 1].type === "text"; ) d = t[++l], p += `
` + this.renderer.text(d);
          r ? n += this.renderer.paragraph({ type: "paragraph", raw: p, text: p, tokens: [{ type: "text", raw: p, text: p, escaped: true }] }) : n += p;
          continue;
        }
        default: {
          let d = 'Token with "' + u.type + '" type was not found.';
          if (this.options.silent) return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return n;
  }
  parseInline(t, r = this.renderer) {
    var o, a;
    let n = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((a = (o = this.options.extensions) == null ? void 0 : o.renderers) != null && a[c.type]) {
        let d = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (d !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(c.type)) {
          n += d || "";
          continue;
        }
      }
      let u = c;
      switch (u.type) {
        case "escape": {
          n += r.text(u);
          break;
        }
        case "html": {
          n += r.html(u);
          break;
        }
        case "link": {
          n += r.link(u);
          break;
        }
        case "image": {
          n += r.image(u);
          break;
        }
        case "strong": {
          n += r.strong(u);
          break;
        }
        case "em": {
          n += r.em(u);
          break;
        }
        case "codespan": {
          n += r.codespan(u);
          break;
        }
        case "br": {
          n += r.br(u);
          break;
        }
        case "del": {
          n += r.del(u);
          break;
        }
        case "text": {
          n += r.text(u);
          break;
        }
        default: {
          let d = 'Token with "' + u.type + '" type was not found.';
          if (this.options.silent) return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return n;
  }
}, gl, ha = (gl = class {
  constructor(t) {
    Ee(this, "options");
    Ee(this, "block");
    this.options = t || Ni;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? Hr.lex : Hr.lexInline;
  }
  provideParser() {
    return this.block ? Wr.parse : Wr.parseInline;
  }
}, Ee(gl, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ee(gl, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), gl), vw = class {
  constructor(...t) {
    Ee(this, "defaults", Qd());
    Ee(this, "options", this.setOptions);
    Ee(this, "parse", this.parseMarkdown(true));
    Ee(this, "parseInline", this.parseMarkdown(false));
    Ee(this, "Parser", Wr);
    Ee(this, "Renderer", Ll);
    Ee(this, "TextRenderer", sp);
    Ee(this, "Lexer", Hr);
    Ee(this, "Tokenizer", Dl);
    Ee(this, "Hooks", ha);
    this.use(...t);
  }
  walkTokens(t, r) {
    var o, a;
    let n = [];
    for (let l of t) switch (n = n.concat(r.call(this, l)), l.type) {
      case "table": {
        let c = l;
        for (let u of c.header) n = n.concat(this.walkTokens(u.tokens, r));
        for (let u of c.rows) for (let d of u) n = n.concat(this.walkTokens(d.tokens, r));
        break;
      }
      case "list": {
        let c = l;
        n = n.concat(this.walkTokens(c.items, r));
        break;
      }
      default: {
        let c = l;
        (a = (o = this.defaults.extensions) == null ? void 0 : o.childTokens) != null && a[c.type] ? this.defaults.extensions.childTokens[c.type].forEach((u) => {
          let d = c[u].flat(1 / 0);
          n = n.concat(this.walkTokens(d, r));
        }) : c.tokens && (n = n.concat(this.walkTokens(c.tokens, r)));
      }
    }
    return n;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((n) => {
      let o = { ...n };
      if (o.async = this.defaults.async || o.async || false, n.extensions && (n.extensions.forEach((a) => {
        if (!a.name) throw new Error("extension name required");
        if ("renderer" in a) {
          let l = r.renderers[a.name];
          l ? r.renderers[a.name] = function(...c) {
            let u = a.renderer.apply(this, c);
            return u === false && (u = l.apply(this, c)), u;
          } : r.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let l = r[a.level];
          l ? l.unshift(a.tokenizer) : r[a.level] = [a.tokenizer], a.start && (a.level === "block" ? r.startBlock ? r.startBlock.push(a.start) : r.startBlock = [a.start] : a.level === "inline" && (r.startInline ? r.startInline.push(a.start) : r.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (r.childTokens[a.name] = a.childTokens);
      }), o.extensions = r), n.renderer) {
        let a = this.defaults.renderer || new Ll(this.defaults);
        for (let l in n.renderer) {
          if (!(l in a)) throw new Error(`renderer '${l}' does not exist`);
          if (["options", "parser"].includes(l)) continue;
          let c = l, u = n.renderer[c], d = a[c];
          a[c] = (...p) => {
            let h = u.apply(a, p);
            return h === false && (h = d.apply(a, p)), h || "";
          };
        }
        o.renderer = a;
      }
      if (n.tokenizer) {
        let a = this.defaults.tokenizer || new Dl(this.defaults);
        for (let l in n.tokenizer) {
          if (!(l in a)) throw new Error(`tokenizer '${l}' does not exist`);
          if (["options", "rules", "lexer"].includes(l)) continue;
          let c = l, u = n.tokenizer[c], d = a[c];
          a[c] = (...p) => {
            let h = u.apply(a, p);
            return h === false && (h = d.apply(a, p)), h;
          };
        }
        o.tokenizer = a;
      }
      if (n.hooks) {
        let a = this.defaults.hooks || new ha();
        for (let l in n.hooks) {
          if (!(l in a)) throw new Error(`hook '${l}' does not exist`);
          if (["options", "block"].includes(l)) continue;
          let c = l, u = n.hooks[c], d = a[c];
          ha.passThroughHooks.has(l) ? a[c] = (p) => {
            if (this.defaults.async && ha.passThroughHooksRespectAsync.has(l)) return (async () => {
              let g = await u.call(a, p);
              return d.call(a, g);
            })();
            let h = u.call(a, p);
            return d.call(a, h);
          } : a[c] = (...p) => {
            if (this.defaults.async) return (async () => {
              let g = await u.apply(a, p);
              return g === false && (g = await d.apply(a, p)), g;
            })();
            let h = u.apply(a, p);
            return h === false && (h = d.apply(a, p)), h;
          };
        }
        o.hooks = a;
      }
      if (n.walkTokens) {
        let a = this.defaults.walkTokens, l = n.walkTokens;
        o.walkTokens = function(c) {
          let u = [];
          return u.push(l.call(this, c)), a && (u = u.concat(a.call(this, c))), u;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return Hr.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return Wr.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, n) => {
      let o = { ...n }, a = { ...this.defaults, ...o }, l = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === true && o.async === false) return l(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return l(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let c = a.hooks ? await a.hooks.preprocess(r) : r, u = await (a.hooks ? await a.hooks.provideLexer() : t ? Hr.lex : Hr.lexInline)(c, a), d = a.hooks ? await a.hooks.processAllTokens(u) : u;
        a.walkTokens && await Promise.all(this.walkTokens(d, a.walkTokens));
        let p = await (a.hooks ? await a.hooks.provideParser() : t ? Wr.parse : Wr.parseInline)(d, a);
        return a.hooks ? await a.hooks.postprocess(p) : p;
      })().catch(l);
      try {
        a.hooks && (r = a.hooks.preprocess(r));
        let c = (a.hooks ? a.hooks.provideLexer() : t ? Hr.lex : Hr.lexInline)(r, a);
        a.hooks && (c = a.hooks.processAllTokens(c)), a.walkTokens && this.walkTokens(c, a.walkTokens);
        let u = (a.hooks ? a.hooks.provideParser() : t ? Wr.parse : Wr.parseInline)(c, a);
        return a.hooks && (u = a.hooks.postprocess(u)), u;
      } catch (c) {
        return l(c);
      }
    };
  }
  onError(t, r) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let o = "<p>An error occurred:</p><pre>" + Jr(n.message + "", true) + "</pre>";
        return r ? Promise.resolve(o) : o;
      }
      if (r) return Promise.reject(n);
      throw n;
    };
  }
}, Ti = new vw();
function Qe(e4, t) {
  return Ti.parse(e4, t);
}
Qe.options = Qe.setOptions = function(e4) {
  return Ti.setOptions(e4), Qe.defaults = Ti.defaults, ow(Qe.defaults), Qe;
};
Qe.getDefaults = Qd;
Qe.defaults = Ni;
Qe.use = function(...e4) {
  return Ti.use(...e4), Qe.defaults = Ti.defaults, ow(Qe.defaults), Qe;
};
Qe.walkTokens = function(e4, t) {
  return Ti.walkTokens(e4, t);
};
Qe.parseInline = Ti.parseInline;
Qe.Parser = Wr;
Qe.parser = Wr.parse;
Qe.Renderer = Ll;
Qe.TextRenderer = sp;
Qe.Lexer = Hr;
Qe.lexer = Hr.lex;
Qe.Tokenizer = Dl;
Qe.Hooks = ha;
Qe.parse = Qe;
Qe.options;
Qe.setOptions;
Qe.use;
Qe.walkTokens;
Qe.parseInline;
Wr.parse;
Hr.lex;
const CM = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, mw = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g, PM = RegExp(mw.source), cb = (e4 = "") => PM.test(e4) ? e4.replace(mw, (t) => CM[t] || "'") : e4, ub = (e4, t) => {
  if (!t) return e4;
  try {
    return new URL(e4, t).href;
  } catch {
    return e4;
  }
};
var IM = class {
  constructor(e4) {
    Ee(this, "renderer");
    this.renderer = e4.renderer;
  }
  parse(e4) {
    this.renderer.elIdList.push(0);
    const t = e4.map((r) => {
      switch (r.type) {
        case "space":
          return null;
        case "heading": {
          const n = r.depth;
          return this.renderer.heading(this.parseInline(r.tokens), n);
        }
        case "paragraph":
          return this.renderer.paragraph(this.parseInline(r.tokens));
        case "text": {
          const n = r;
          return n.tokens ? this.parseInline(n.tokens) : r.text;
        }
        case "blockquote": {
          const n = r, o = this.parse(n.tokens);
          return this.renderer.blockquote(o);
        }
        case "list": {
          const n = r;
          this.renderer.elIdList.push(0);
          const o = n.items.map((a) => {
            const l = [];
            return a.task && l.push(this.renderer.checkbox(a.checked ?? false)), l.push(this.parse(a.tokens)), this.renderer.listItem(l);
          });
          return this.renderer.elIdList.pop(), this.renderer.list(o, r.ordered, r.ordered ? r.start : void 0);
        }
        case "code":
          return this.renderer.code(r.text, r.lang);
        case "html":
          return this.renderer.html(r.text);
        case "table": {
          const n = r;
          this.renderer.elIdList.push(0);
          const o = n.header.map((d, p) => this.renderer.tableCell(this.parseInline(d.tokens), {
            header: true,
            align: r.align[p]
          }));
          this.renderer.elIdList.pop();
          const a = this.renderer.tableRow(o), l = this.renderer.tableHeader(a);
          this.renderer.elIdList.push(0);
          const c = n.rows.map((d) => {
            this.renderer.elIdList.push(0);
            const p = d.map((h, g) => this.renderer.tableCell(this.parseInline(h.tokens), {
              header: false,
              align: r.align[g]
            }));
            return this.renderer.elIdList.pop(), this.renderer.tableRow(p);
          });
          this.renderer.elIdList.pop();
          const u = this.renderer.tableBody(c);
          return this.renderer.table([l, u]);
        }
        case "hr":
          return this.renderer.hr();
        default:
          return console.warn(`Token with "${r.type}" type was not found`), null;
      }
    });
    return this.renderer.elIdList.pop(), t;
  }
  parseInline(e4 = []) {
    this.renderer.elIdList.push(0);
    const t = e4.map((r) => {
      switch (r.type) {
        case "text":
          return this.renderer.text(cb(r.text));
        case "strong":
          return this.renderer.strong(this.parseInline(r.tokens));
        case "em":
          return this.renderer.em(this.parseInline(r.tokens));
        case "del":
          return this.renderer.del(this.parseInline(r.tokens));
        case "codespan":
          return this.renderer.codespan(cb(r.text));
        case "link":
          return this.renderer.link(r.href, this.parseInline(r.tokens));
        case "image":
          return this.renderer.image(r.href, r.text, r.title);
        case "html":
          return this.renderer.html(r.text);
        case "br":
          return this.renderer.br();
        case "escape":
          return this.renderer.text(r.text);
        default:
          return console.warn(`Token with "${r.type}" type was not found`), null;
      }
    });
    return this.renderer.elIdList.pop(), t;
  }
}, NM = IM, Zn, nt, bt, ud, H0, MM = (H0 = class {
  constructor(e4 = {}) {
    Wt(this, nt);
    Ee(this, "elIdList", []);
    Wt(this, Zn);
    const { renderer: t } = e4;
    gt(this, Zn, e4), t && typeof t == "object" && Object.entries(t).forEach(([r, n]) => {
      const o = r, a = n;
      !this[o] || o === "elementId" || o === "elIdList" || typeof a != "function" || Object.defineProperty(this, o, {
        value(...l) {
          return Be(this, nt, ud).call(this), a.apply(this, l);
        },
        writable: true,
        enumerable: true,
        configurable: true
      });
    });
  }
  get elementId() {
    return this.elIdList.join("-");
  }
  heading(e4, t) {
    return Be(this, nt, bt).call(this, `h${t}`, e4);
  }
  paragraph(e4) {
    return Be(this, nt, bt).call(this, "p", e4);
  }
  link(e4, t) {
    const r = ub(e4, ue(this, Zn).baseURL), n = ue(this, Zn).openLinksInNewTab ? "_blank" : null;
    return Be(this, nt, bt).call(this, "a", t, {
      href: r,
      target: n
    });
  }
  image(e4, t, r = null) {
    const n = ub(e4, ue(this, Zn).baseURL);
    return Be(this, nt, bt).call(this, "img", null, {
      src: n,
      alt: t,
      title: r
    });
  }
  codespan(e4, t = null) {
    const r = t ? `${ue(this, Zn).langPrefix}${t}` : null;
    return Be(this, nt, bt).call(this, "code", e4, { className: r });
  }
  code(e4, t) {
    return Be(this, nt, bt).call(this, "pre", this.codespan(e4, t));
  }
  blockquote(e4) {
    return Be(this, nt, bt).call(this, "blockquote", e4);
  }
  list(e4, t, r) {
    return Be(this, nt, bt).call(this, t ? "ol" : "ul", e4, t && r !== 1 ? { start: r } : {});
  }
  listItem(e4) {
    return Be(this, nt, bt).call(this, "li", e4);
  }
  checkbox(e4) {
    return Be(this, nt, bt).call(this, "input", null, {
      type: "checkbox",
      disabled: true,
      checked: e4
    });
  }
  table(e4) {
    return Be(this, nt, bt).call(this, "table", e4);
  }
  tableHeader(e4) {
    return Be(this, nt, bt).call(this, "thead", e4);
  }
  tableBody(e4) {
    return Be(this, nt, bt).call(this, "tbody", e4);
  }
  tableRow(e4) {
    return Be(this, nt, bt).call(this, "tr", e4);
  }
  tableCell(e4, t) {
    const r = t.header ? "th" : "td";
    return Be(this, nt, bt).call(this, r, e4, { align: t.align });
  }
  strong(e4) {
    return Be(this, nt, bt).call(this, "strong", e4);
  }
  em(e4) {
    return Be(this, nt, bt).call(this, "em", e4);
  }
  del(e4) {
    return Be(this, nt, bt).call(this, "del", e4);
  }
  text(e4) {
    return e4;
  }
  html(e4) {
    return e4;
  }
  hr() {
    return Be(this, nt, bt).call(this, "hr");
  }
  br() {
    return Be(this, nt, bt).call(this, "br");
  }
}, Zn = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakSet(), bt = function(e4, t = null, r = {}) {
  const n = {
    key: `marked-react-${this.elementId}`,
    suppressHydrationWarning: true
  };
  return Be(this, nt, ud).call(this), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(e4, {
    ...r,
    ...n
  }, t);
}, ud = function() {
  this.elIdList[this.elIdList.length - 1] += 1;
}, H0), $M = MM;
const DM = (e4) => {
  if (e4.value && typeof e4.value != "string") throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof e4.value}`);
  if (e4.children && typeof e4.children != "string") throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof e4.children}`);
}, LM = {
  isInline: false,
  breaks: false,
  gfm: true,
  baseURL: void 0,
  openLinksInNewTab: true,
  langPrefix: "language-",
  renderer: void 0
}, zM = new vw(), FM = (e4) => {
  DM(e4);
  const t = {
    ...LM,
    ...e4
  }, r = t.instance ?? zM, n = {
    breaks: t.breaks,
    gfm: t.gfm,
    tokenizer: r.defaults.tokenizer
  }, o = t.value ?? t.children ?? "", a = t.isInline ? r.Lexer.lexInline(o, n) : r.lexer(o, n), l = { renderer: new $M({
    renderer: t.renderer,
    baseURL: t.baseURL,
    openLinksInNewTab: t.openLinksInNewTab,
    langPrefix: t.langPrefix
  }) }, c = new NM(l), u = t.isInline ? c.parseInline(a) : c.parse(a);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, null, u);
};
var HM = FM, WM = HM;
const g4 = ({
  children: e4,
  label: t,
  placement: r = "top",
  className: n,
  isDisabled: o,
  container: a
}) => {
  const [l, c] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(
    null
  ), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), [d, p] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null), [h, g] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(false), { styles: y, attributes: _ } = J0(l, d, {
    placement: r,
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
  }), v = F.Children.map(e4, (b) => F.isValidElement(b) ? F.cloneElement(b, {
    ref: c,
    onMouseEnter: () => g(true),
    onMouseLeave: () => {
      u.current = setTimeout(() => g(false), 50);
    }
  }) : b);
  return o ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: v }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    v,
    h && t && Ii$1.createPortal(
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: p,
          style: y.popper,
          ..._.popper,
          className: it(
            "z-10 select-none rounded bg-purple-200 font-poppins font-medium text-s px-2 py-0.5 text-purple-900 shadow-md",
            n
          ),
          onMouseEnter: () => {
            u.current && clearTimeout(u.current), g(true);
          },
          onMouseLeave: () => g(false),
          children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(WM, { openLinksInNewTab: true, children: t })
        }
      ),
      a || document.body
    )
  ] });
}, BM = keyframes`
  to {
    fill: url(#d);
    stroke-dashoffset: 0;
  }
`, jM = Pl.svg`
  & .e {
    fill: url(#d);
  }

  & #tail {
    stroke: url(#d);
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${BM} 1.5s ease-in-out infinite alternate-reverse;
  }

  & #circle {
    stroke: #fff;
    stroke-width: 2;
    fill: #fff;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }
`, v4 = ({
  message: e4,
  version: t
}) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-fd-gray-default text-white", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col text-center", children: [
  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative mr-4 self-center", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center rounded", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(jM, { className: "h-60 w-60", viewBox: "0 0 143.14 136.27", children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("linearGradient", { id: "d", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "0%", stopColor: "#2743a6", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#ffa4c0; #2743a6;",
          dur: "6s",
          repeatCount: "indefinite"
        }
      ) }),
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "100%", stopColor: "#ffa4c0", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#2743a6; #ffa4c0;",
          dur: "2ds",
          repeatCount: "indefinite"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "a" }),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "b", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "c", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("g", { children: [
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "tail",
          className: "e",
          d: "M134.13,79.9l.25-1.2h-21.87l-.21,.7c-.03,.08-2.41,7.72-7.11,14.56-5.87,8.54-12.57,12.63-12.63,12.67l-1,.6,24.25,28.96h27.33l-22.61-26.46c2.2-2.67,10.06-13.09,13.6-29.83Z"
        }
      ),
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "circle",
          className: "f",
          d: "M83.08,113.64l18.93,22.6-33.68,.03-11.17-.03c-9.38,.01-18.55-2.45-26.56-7.11-2.94-1.71-5.72-3.71-8.29-6-8.79-7.8-17.6-19.72-20.92-37.37-.01-.02-.02-.03-.03-.05v-.09c-1.68-9.04-1.93-19.58,0-31.84C8.57,21.67,36.68-.66,69.93,.02c12.81,.27,25.06,4.28,35.59,11.48,.31,.2,.62,.41,.92,.62,.25,.18,.5,.35,.74,.53,8.82,6.31,16.06,14.69,21.02,24.42,.17,.33,.34,.65,.5,.98,.1,.21,.2,.41,.3,.61,4.35,8.92,6.63,18.54,6.54,28.06,0,.36,.02,.71,.02,1.06,0,.82-.03,1.62-.06,2.43h-22c.04-.81,.06-1.61,.06-2.43,0-1.52-.08-3.02-.23-4.5-2.68-22.17-21.26-39.86-43.98-40.63-4.43-.15-8.75,.29-12.88,1.28-.02,0-.04,.01-.05,.01-.48,.12-.95,.24-1.42,.38-.97,.26-1.94,.56-2.89,.9-.23,.07-.46,.15-.69,.24-6.2,2.27-11.84,5.87-16.59,10.67-8.99,9.09-13.84,21.44-13.3,33.9,0,19.98,17.86,39.48,35.59,42.56,6.4,1.37,24.04,1.24,25.96,1.05Z"
        }
      )
    ] }) }) })
  ] }) }) }),
  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "text-xs text-grey-200", children: t }),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h2", { className: "text-lg text-grey-100", children: e4 })
  ] })
] }) });
var ga = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var UM = ga.exports, fb;
function VM() {
  return fb || (fb = 1, (function(e4, t) {
    (function() {
      var r, n = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", d = 500, p = "__lodash_placeholder__", h = 1, g = 2, y = 4, _ = 1, v = 2, b = 1, m = 2, w = 4, x = 8, k = 16, E = 32, R = 64, z = 128, A = 256, P = 512, B = 30, $ = "...", N = 800, j = 16, F = 1, I = 2, K = 3, Y = 1 / 0, G = 9007199254740991, ge = 17976931348623157e292, L = NaN, V = 4294967295, te = V - 1, Q = V >>> 1, X = [
        ["ary", z],
        ["bind", b],
        ["bindKey", m],
        ["curry", x],
        ["curryRight", k],
        ["flip", P],
        ["partial", E],
        ["partialRight", R],
        ["rearg", A]
      ], ae = "[object Arguments]", oe = "[object Array]", ie = "[object AsyncFunction]", ce = "[object Boolean]", de = "[object Date]", fe = "[object DOMException]", we = "[object Error]", Z = "[object Function]", He = "[object GeneratorFunction]", he = "[object Map]", Pt = "[object Number]", un = "[object Null]", Ut = "[object Object]", qa = "[object Promise]", yc = "[object Proxy]", ir = "[object RegExp]", zt = "[object Set]", Cn = "[object String]", ii = "[object Symbol]", So = "[object Undefined]", Pn = "[object WeakMap]", Ga = "[object WeakSet]", In = "[object ArrayBuffer]", fn = "[object DataView]", wc = "[object Float32Array]", xc = "[object Float64Array]", _c = "[object Int8Array]", Sc = "[object Int16Array]", Ec = "[object Int32Array]", kc = "[object Uint8Array]", Oc = "[object Uint8ClampedArray]", Ac = "[object Uint16Array]", Tc = "[object Uint32Array]", s1 = /\b__p \+= '';/g, l1 = /\b(__p \+=) '' \+/g, c1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ip = /&(?:amp|lt|gt|quot|#39);/g, Np = /[&<>"']/g, u1 = RegExp(Ip.source), f1 = RegExp(Np.source), d1 = /<%-([\s\S]+?)%>/g, p1 = /<%([\s\S]+?)%>/g, Mp = /<%=([\s\S]+?)%>/g, h1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, g1 = /^\w*$/, v1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rc = /[\\^$.*+?()[\]{}|]/g, m1 = RegExp(Rc.source), Cc = /^\s+/, b1 = /\s/, y1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, w1 = /\{\n\/\* \[wrapped with (.+)\] \*/, x1 = /,? & /, _1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, S1 = /[()=,{}\[\]\/\s]/, E1 = /\\(\\)?/g, k1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, $p = /\w*$/, O1 = /^[-+]0x[0-9a-f]+$/i, A1 = /^0b[01]+$/i, T1 = /^\[object .+?Constructor\]$/, R1 = /^0o[0-7]+$/i, C1 = /^(?:0|[1-9]\d*)$/, P1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ka = /($^)/, I1 = /['\n\r\u2028\u2029\\]/g, Za = "\\ud800-\\udfff", N1 = "\\u0300-\\u036f", M1 = "\\ufe20-\\ufe2f", $1 = "\\u20d0-\\u20ff", Dp = N1 + M1 + $1, Lp = "\\u2700-\\u27bf", zp = "a-z\\xdf-\\xf6\\xf8-\\xff", D1 = "\\xac\\xb1\\xd7\\xf7", L1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", z1 = "\\u2000-\\u206f", F1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fp = "A-Z\\xc0-\\xd6\\xd8-\\xde", Hp = "\\ufe0e\\ufe0f", Wp = D1 + L1 + z1 + F1, Pc = "['’]", H1 = "[" + Za + "]", Bp = "[" + Wp + "]", Ya = "[" + Dp + "]", jp = "\\d+", W1 = "[" + Lp + "]", Up = "[" + zp + "]", Vp = "[^" + Za + Wp + jp + Lp + zp + Fp + "]", Ic = "\\ud83c[\\udffb-\\udfff]", B1 = "(?:" + Ya + "|" + Ic + ")", qp = "[^" + Za + "]", Nc = "(?:\\ud83c[\\udde6-\\uddff]){2}", Mc = "[\\ud800-\\udbff][\\udc00-\\udfff]", $i = "[" + Fp + "]", Gp = "\\u200d", Kp = "(?:" + Up + "|" + Vp + ")", j1 = "(?:" + $i + "|" + Vp + ")", Zp = "(?:" + Pc + "(?:d|ll|m|re|s|t|ve))?", Yp = "(?:" + Pc + "(?:D|LL|M|RE|S|T|VE))?", Xp = B1 + "?", Jp = "[" + Hp + "]?", U1 = "(?:" + Gp + "(?:" + [qp, Nc, Mc].join("|") + ")" + Jp + Xp + ")*", V1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", q1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Qp = Jp + Xp + U1, G1 = "(?:" + [W1, Nc, Mc].join("|") + ")" + Qp, K1 = "(?:" + [qp + Ya + "?", Ya, Nc, Mc, H1].join("|") + ")", Z1 = RegExp(Pc, "g"), Y1 = RegExp(Ya, "g"), $c = RegExp(Ic + "(?=" + Ic + ")|" + K1 + Qp, "g"), X1 = RegExp([
        $i + "?" + Up + "+" + Zp + "(?=" + [Bp, $i, "$"].join("|") + ")",
        j1 + "+" + Yp + "(?=" + [Bp, $i + Kp, "$"].join("|") + ")",
        $i + "?" + Kp + "+" + Zp,
        $i + "+" + Yp,
        q1,
        V1,
        jp,
        G1
      ].join("|"), "g"), J1 = RegExp("[" + Gp + Za + Dp + Hp + "]"), Q1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, e_ = [
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
      ], t_ = -1, at = {};
      at[wc] = at[xc] = at[_c] = at[Sc] = at[Ec] = at[kc] = at[Oc] = at[Ac] = at[Tc] = true, at[ae] = at[oe] = at[In] = at[ce] = at[fn] = at[de] = at[we] = at[Z] = at[he] = at[Pt] = at[Ut] = at[ir] = at[zt] = at[Cn] = at[Pn] = false;
      var rt = {};
      rt[ae] = rt[oe] = rt[In] = rt[fn] = rt[ce] = rt[de] = rt[wc] = rt[xc] = rt[_c] = rt[Sc] = rt[Ec] = rt[he] = rt[Pt] = rt[Ut] = rt[ir] = rt[zt] = rt[Cn] = rt[ii] = rt[kc] = rt[Oc] = rt[Ac] = rt[Tc] = true, rt[we] = rt[Z] = rt[Pn] = false;
      var r_ = {
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
      }, n_ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, i_ = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, o_ = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, a_ = parseFloat, s_ = parseInt, eh = typeof Ls == "object" && Ls && Ls.Object === Object && Ls, l_ = typeof self == "object" && self && self.Object === Object && self, It = eh || l_ || Function("return this")(), Dc = t && !t.nodeType && t, oi = Dc && true && e4 && !e4.nodeType && e4, th = oi && oi.exports === Dc, Lc = th && eh.process, wr = (function() {
        try {
          var U = oi && oi.require && oi.require("util").types;
          return U || Lc && Lc.binding && Lc.binding("util");
        } catch {
        }
      })(), rh = wr && wr.isArrayBuffer, nh = wr && wr.isDate, ih = wr && wr.isMap, oh = wr && wr.isRegExp, ah = wr && wr.isSet, sh = wr && wr.isTypedArray;
      function or(U, ee, J) {
        switch (J.length) {
          case 0:
            return U.call(ee);
          case 1:
            return U.call(ee, J[0]);
          case 2:
            return U.call(ee, J[0], J[1]);
          case 3:
            return U.call(ee, J[0], J[1], J[2]);
        }
        return U.apply(ee, J);
      }
      function c_(U, ee, J, ve) {
        for (var Oe = -1, ze = U == null ? 0 : U.length; ++Oe < ze; ) {
          var _t = U[Oe];
          ee(ve, _t, J(_t), U);
        }
        return ve;
      }
      function xr(U, ee) {
        for (var J = -1, ve = U == null ? 0 : U.length; ++J < ve && ee(U[J], J, U) !== false; )
          ;
        return U;
      }
      function u_(U, ee) {
        for (var J = U == null ? 0 : U.length; J-- && ee(U[J], J, U) !== false; )
          ;
        return U;
      }
      function lh(U, ee) {
        for (var J = -1, ve = U == null ? 0 : U.length; ++J < ve; )
          if (!ee(U[J], J, U))
            return false;
        return true;
      }
      function Nn(U, ee) {
        for (var J = -1, ve = U == null ? 0 : U.length, Oe = 0, ze = []; ++J < ve; ) {
          var _t = U[J];
          ee(_t, J, U) && (ze[Oe++] = _t);
        }
        return ze;
      }
      function Xa(U, ee) {
        var J = U == null ? 0 : U.length;
        return !!J && Di(U, ee, 0) > -1;
      }
      function zc(U, ee, J) {
        for (var ve = -1, Oe = U == null ? 0 : U.length; ++ve < Oe; )
          if (J(ee, U[ve]))
            return true;
        return false;
      }
      function st(U, ee) {
        for (var J = -1, ve = U == null ? 0 : U.length, Oe = Array(ve); ++J < ve; )
          Oe[J] = ee(U[J], J, U);
        return Oe;
      }
      function Mn(U, ee) {
        for (var J = -1, ve = ee.length, Oe = U.length; ++J < ve; )
          U[Oe + J] = ee[J];
        return U;
      }
      function Fc(U, ee, J, ve) {
        var Oe = -1, ze = U == null ? 0 : U.length;
        for (ve && ze && (J = U[++Oe]); ++Oe < ze; )
          J = ee(J, U[Oe], Oe, U);
        return J;
      }
      function f_(U, ee, J, ve) {
        var Oe = U == null ? 0 : U.length;
        for (ve && Oe && (J = U[--Oe]); Oe--; )
          J = ee(J, U[Oe], Oe, U);
        return J;
      }
      function Hc(U, ee) {
        for (var J = -1, ve = U == null ? 0 : U.length; ++J < ve; )
          if (ee(U[J], J, U))
            return true;
        return false;
      }
      var d_ = Wc("length");
      function p_(U) {
        return U.split("");
      }
      function h_(U) {
        return U.match(_1) || [];
      }
      function ch(U, ee, J) {
        var ve;
        return J(U, function(Oe, ze, _t) {
          if (ee(Oe, ze, _t))
            return ve = ze, false;
        }), ve;
      }
      function Ja(U, ee, J, ve) {
        for (var Oe = U.length, ze = J + (ve ? 1 : -1); ve ? ze-- : ++ze < Oe; )
          if (ee(U[ze], ze, U))
            return ze;
        return -1;
      }
      function Di(U, ee, J) {
        return ee === ee ? O_(U, ee, J) : Ja(U, uh, J);
      }
      function g_(U, ee, J, ve) {
        for (var Oe = J - 1, ze = U.length; ++Oe < ze; )
          if (ve(U[Oe], ee))
            return Oe;
        return -1;
      }
      function uh(U) {
        return U !== U;
      }
      function fh(U, ee) {
        var J = U == null ? 0 : U.length;
        return J ? jc(U, ee) / J : L;
      }
      function Wc(U) {
        return function(ee) {
          return ee == null ? r : ee[U];
        };
      }
      function Bc(U) {
        return function(ee) {
          return U == null ? r : U[ee];
        };
      }
      function dh(U, ee, J, ve, Oe) {
        return Oe(U, function(ze, _t, tt) {
          J = ve ? (ve = false, ze) : ee(J, ze, _t, tt);
        }), J;
      }
      function v_(U, ee) {
        var J = U.length;
        for (U.sort(ee); J--; )
          U[J] = U[J].value;
        return U;
      }
      function jc(U, ee) {
        for (var J, ve = -1, Oe = U.length; ++ve < Oe; ) {
          var ze = ee(U[ve]);
          ze !== r && (J = J === r ? ze : J + ze);
        }
        return J;
      }
      function Uc(U, ee) {
        for (var J = -1, ve = Array(U); ++J < U; )
          ve[J] = ee(J);
        return ve;
      }
      function m_(U, ee) {
        return st(ee, function(J) {
          return [J, U[J]];
        });
      }
      function ph(U) {
        return U && U.slice(0, mh(U) + 1).replace(Cc, "");
      }
      function ar(U) {
        return function(ee) {
          return U(ee);
        };
      }
      function Vc(U, ee) {
        return st(ee, function(J) {
          return U[J];
        });
      }
      function Eo(U, ee) {
        return U.has(ee);
      }
      function hh(U, ee) {
        for (var J = -1, ve = U.length; ++J < ve && Di(ee, U[J], 0) > -1; )
          ;
        return J;
      }
      function gh(U, ee) {
        for (var J = U.length; J-- && Di(ee, U[J], 0) > -1; )
          ;
        return J;
      }
      function b_(U, ee) {
        for (var J = U.length, ve = 0; J--; )
          U[J] === ee && ++ve;
        return ve;
      }
      var y_ = Bc(r_), w_ = Bc(n_);
      function x_(U) {
        return "\\" + o_[U];
      }
      function __(U, ee) {
        return U == null ? r : U[ee];
      }
      function Li(U) {
        return J1.test(U);
      }
      function S_(U) {
        return Q1.test(U);
      }
      function E_(U) {
        for (var ee, J = []; !(ee = U.next()).done; )
          J.push(ee.value);
        return J;
      }
      function qc(U) {
        var ee = -1, J = Array(U.size);
        return U.forEach(function(ve, Oe) {
          J[++ee] = [Oe, ve];
        }), J;
      }
      function vh(U, ee) {
        return function(J) {
          return U(ee(J));
        };
      }
      function $n(U, ee) {
        for (var J = -1, ve = U.length, Oe = 0, ze = []; ++J < ve; ) {
          var _t = U[J];
          (_t === ee || _t === p) && (U[J] = p, ze[Oe++] = J);
        }
        return ze;
      }
      function Qa(U) {
        var ee = -1, J = Array(U.size);
        return U.forEach(function(ve) {
          J[++ee] = ve;
        }), J;
      }
      function k_(U) {
        var ee = -1, J = Array(U.size);
        return U.forEach(function(ve) {
          J[++ee] = [ve, ve];
        }), J;
      }
      function O_(U, ee, J) {
        for (var ve = J - 1, Oe = U.length; ++ve < Oe; )
          if (U[ve] === ee)
            return ve;
        return -1;
      }
      function A_(U, ee, J) {
        for (var ve = J + 1; ve--; )
          if (U[ve] === ee)
            return ve;
        return ve;
      }
      function zi(U) {
        return Li(U) ? R_(U) : d_(U);
      }
      function $r(U) {
        return Li(U) ? C_(U) : p_(U);
      }
      function mh(U) {
        for (var ee = U.length; ee-- && b1.test(U.charAt(ee)); )
          ;
        return ee;
      }
      var T_ = Bc(i_);
      function R_(U) {
        for (var ee = $c.lastIndex = 0; $c.test(U); )
          ++ee;
        return ee;
      }
      function C_(U) {
        return U.match($c) || [];
      }
      function P_(U) {
        return U.match(X1) || [];
      }
      var I_ = (function U(ee) {
        ee = ee == null ? It : Fi.defaults(It.Object(), ee, Fi.pick(It, e_));
        var J = ee.Array, ve = ee.Date, Oe = ee.Error, ze = ee.Function, _t = ee.Math, tt = ee.Object, Gc = ee.RegExp, N_ = ee.String, _r = ee.TypeError, es = J.prototype, M_ = ze.prototype, Hi = tt.prototype, ts = ee["__core-js_shared__"], rs = M_.toString, Ge = Hi.hasOwnProperty, $_ = 0, bh = (function() {
          var i = /[^.]+$/.exec(ts && ts.keys && ts.keys.IE_PROTO || "");
          return i ? "Symbol(src)_1." + i : "";
        })(), ns = Hi.toString, D_ = rs.call(tt), L_ = It._, z_ = Gc(
          "^" + rs.call(Ge).replace(Rc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), is = th ? ee.Buffer : r, Dn = ee.Symbol, os = ee.Uint8Array, yh = is ? is.allocUnsafe : r, as = vh(tt.getPrototypeOf, tt), wh = tt.create, xh = Hi.propertyIsEnumerable, ss = es.splice, _h = Dn ? Dn.isConcatSpreadable : r, ko = Dn ? Dn.iterator : r, ai = Dn ? Dn.toStringTag : r, ls = (function() {
          try {
            var i = fi(tt, "defineProperty");
            return i({}, "", {}), i;
          } catch {
          }
        })(), F_ = ee.clearTimeout !== It.clearTimeout && ee.clearTimeout, H_ = ve && ve.now !== It.Date.now && ve.now, W_ = ee.setTimeout !== It.setTimeout && ee.setTimeout, cs = _t.ceil, us = _t.floor, Kc = tt.getOwnPropertySymbols, B_ = is ? is.isBuffer : r, Sh = ee.isFinite, j_ = es.join, U_ = vh(tt.keys, tt), St = _t.max, Ft = _t.min, V_ = ve.now, q_ = ee.parseInt, Eh = _t.random, G_ = es.reverse, Zc = fi(ee, "DataView"), Oo = fi(ee, "Map"), Yc = fi(ee, "Promise"), Wi = fi(ee, "Set"), Ao = fi(ee, "WeakMap"), To = fi(tt, "create"), fs = Ao && new Ao(), Bi = {}, K_ = di(Zc), Z_ = di(Oo), Y_ = di(Yc), X_ = di(Wi), J_ = di(Ao), ds = Dn ? Dn.prototype : r, Ro = ds ? ds.valueOf : r, kh = ds ? ds.toString : r;
        function T(i) {
          if (ht(i) && !Ae(i) && !(i instanceof Me)) {
            if (i instanceof Sr)
              return i;
            if (Ge.call(i, "__wrapped__"))
              return Og(i);
          }
          return new Sr(i);
        }
        var ji = /* @__PURE__ */ (function() {
          function i() {
          }
          return function(s) {
            if (!ft(s))
              return {};
            if (wh)
              return wh(s);
            i.prototype = s;
            var f = new i();
            return i.prototype = r, f;
          };
        })();
        function ps() {
        }
        function Sr(i, s) {
          this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = r;
        }
        T.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: d1,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: p1,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Mp,
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
            _: T
          }
        }, T.prototype = ps.prototype, T.prototype.constructor = T, Sr.prototype = ji(ps.prototype), Sr.prototype.constructor = Sr;
        function Me(i) {
          this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = V, this.__views__ = [];
        }
        function Q_() {
          var i = new Me(this.__wrapped__);
          return i.__actions__ = Xt(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Xt(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Xt(this.__views__), i;
        }
        function eS() {
          if (this.__filtered__) {
            var i = new Me(this);
            i.__dir__ = -1, i.__filtered__ = true;
          } else
            i = this.clone(), i.__dir__ *= -1;
          return i;
        }
        function tS() {
          var i = this.__wrapped__.value(), s = this.__dir__, f = Ae(i), S = s < 0, O = f ? i.length : 0, C = pE(0, O, this.__views__), M = C.start, H = C.end, q = H - M, re = S ? H : M - 1, ne = this.__iteratees__, se = ne.length, pe = 0, ye = Ft(q, this.__takeCount__);
          if (!f || !S && O == q && ye == q)
            return Zh(i, this.__actions__);
          var _e = [];
          e:
            for (; q-- && pe < ye; ) {
              re += s;
              for (var Ce = -1, Se = i[re]; ++Ce < se; ) {
                var Ne = ne[Ce], De = Ne.iteratee, cr = Ne.type, Gt = De(Se);
                if (cr == I)
                  Se = Gt;
                else if (!Gt) {
                  if (cr == F)
                    continue e;
                  break e;
                }
              }
              _e[pe++] = Se;
            }
          return _e;
        }
        Me.prototype = ji(ps.prototype), Me.prototype.constructor = Me;
        function si(i) {
          var s = -1, f = i == null ? 0 : i.length;
          for (this.clear(); ++s < f; ) {
            var S = i[s];
            this.set(S[0], S[1]);
          }
        }
        function rS() {
          this.__data__ = To ? To(null) : {}, this.size = 0;
        }
        function nS(i) {
          var s = this.has(i) && delete this.__data__[i];
          return this.size -= s ? 1 : 0, s;
        }
        function iS(i) {
          var s = this.__data__;
          if (To) {
            var f = s[i];
            return f === u ? r : f;
          }
          return Ge.call(s, i) ? s[i] : r;
        }
        function oS(i) {
          var s = this.__data__;
          return To ? s[i] !== r : Ge.call(s, i);
        }
        function aS(i, s) {
          var f = this.__data__;
          return this.size += this.has(i) ? 0 : 1, f[i] = To && s === r ? u : s, this;
        }
        si.prototype.clear = rS, si.prototype.delete = nS, si.prototype.get = iS, si.prototype.has = oS, si.prototype.set = aS;
        function dn(i) {
          var s = -1, f = i == null ? 0 : i.length;
          for (this.clear(); ++s < f; ) {
            var S = i[s];
            this.set(S[0], S[1]);
          }
        }
        function sS() {
          this.__data__ = [], this.size = 0;
        }
        function lS(i) {
          var s = this.__data__, f = hs(s, i);
          if (f < 0)
            return false;
          var S = s.length - 1;
          return f == S ? s.pop() : ss.call(s, f, 1), --this.size, true;
        }
        function cS(i) {
          var s = this.__data__, f = hs(s, i);
          return f < 0 ? r : s[f][1];
        }
        function uS(i) {
          return hs(this.__data__, i) > -1;
        }
        function fS(i, s) {
          var f = this.__data__, S = hs(f, i);
          return S < 0 ? (++this.size, f.push([i, s])) : f[S][1] = s, this;
        }
        dn.prototype.clear = sS, dn.prototype.delete = lS, dn.prototype.get = cS, dn.prototype.has = uS, dn.prototype.set = fS;
        function pn(i) {
          var s = -1, f = i == null ? 0 : i.length;
          for (this.clear(); ++s < f; ) {
            var S = i[s];
            this.set(S[0], S[1]);
          }
        }
        function dS() {
          this.size = 0, this.__data__ = {
            hash: new si(),
            map: new (Oo || dn)(),
            string: new si()
          };
        }
        function pS(i) {
          var s = Os(this, i).delete(i);
          return this.size -= s ? 1 : 0, s;
        }
        function hS(i) {
          return Os(this, i).get(i);
        }
        function gS(i) {
          return Os(this, i).has(i);
        }
        function vS(i, s) {
          var f = Os(this, i), S = f.size;
          return f.set(i, s), this.size += f.size == S ? 0 : 1, this;
        }
        pn.prototype.clear = dS, pn.prototype.delete = pS, pn.prototype.get = hS, pn.prototype.has = gS, pn.prototype.set = vS;
        function li(i) {
          var s = -1, f = i == null ? 0 : i.length;
          for (this.__data__ = new pn(); ++s < f; )
            this.add(i[s]);
        }
        function mS(i) {
          return this.__data__.set(i, u), this;
        }
        function bS(i) {
          return this.__data__.has(i);
        }
        li.prototype.add = li.prototype.push = mS, li.prototype.has = bS;
        function Dr(i) {
          var s = this.__data__ = new dn(i);
          this.size = s.size;
        }
        function yS() {
          this.__data__ = new dn(), this.size = 0;
        }
        function wS(i) {
          var s = this.__data__, f = s.delete(i);
          return this.size = s.size, f;
        }
        function xS(i) {
          return this.__data__.get(i);
        }
        function _S(i) {
          return this.__data__.has(i);
        }
        function SS(i, s) {
          var f = this.__data__;
          if (f instanceof dn) {
            var S = f.__data__;
            if (!Oo || S.length < o - 1)
              return S.push([i, s]), this.size = ++f.size, this;
            f = this.__data__ = new pn(S);
          }
          return f.set(i, s), this.size = f.size, this;
        }
        Dr.prototype.clear = yS, Dr.prototype.delete = wS, Dr.prototype.get = xS, Dr.prototype.has = _S, Dr.prototype.set = SS;
        function Oh(i, s) {
          var f = Ae(i), S = !f && pi(i), O = !f && !S && Wn(i), C = !f && !S && !O && Gi(i), M = f || S || O || C, H = M ? Uc(i.length, N_) : [], q = H.length;
          for (var re in i)
            (s || Ge.call(i, re)) && !(M && // Safari 9 has enumerable `arguments.length` in strict mode.
            (re == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            O && (re == "offset" || re == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            C && (re == "buffer" || re == "byteLength" || re == "byteOffset") || // Skip index properties.
            mn(re, q))) && H.push(re);
          return H;
        }
        function Ah(i) {
          var s = i.length;
          return s ? i[su(0, s - 1)] : r;
        }
        function ES(i, s) {
          return As(Xt(i), ci(s, 0, i.length));
        }
        function kS(i) {
          return As(Xt(i));
        }
        function Xc(i, s, f) {
          (f !== r && !Lr(i[s], f) || f === r && !(s in i)) && hn(i, s, f);
        }
        function Co(i, s, f) {
          var S = i[s];
          (!(Ge.call(i, s) && Lr(S, f)) || f === r && !(s in i)) && hn(i, s, f);
        }
        function hs(i, s) {
          for (var f = i.length; f--; )
            if (Lr(i[f][0], s))
              return f;
          return -1;
        }
        function OS(i, s, f, S) {
          return Ln(i, function(O, C, M) {
            s(S, O, f(O), M);
          }), S;
        }
        function Th(i, s) {
          return i && Gr(s, Tt(s), i);
        }
        function AS(i, s) {
          return i && Gr(s, Qt(s), i);
        }
        function hn(i, s, f) {
          s == "__proto__" && ls ? ls(i, s, {
            configurable: true,
            enumerable: true,
            value: f,
            writable: true
          }) : i[s] = f;
        }
        function Jc(i, s) {
          for (var f = -1, S = s.length, O = J(S), C = i == null; ++f < S; )
            O[f] = C ? r : Iu(i, s[f]);
          return O;
        }
        function ci(i, s, f) {
          return i === i && (f !== r && (i = i <= f ? i : f), s !== r && (i = i >= s ? i : s)), i;
        }
        function Er(i, s, f, S, O, C) {
          var M, H = s & h, q = s & g, re = s & y;
          if (f && (M = O ? f(i, S, O, C) : f(i)), M !== r)
            return M;
          if (!ft(i))
            return i;
          var ne = Ae(i);
          if (ne) {
            if (M = gE(i), !H)
              return Xt(i, M);
          } else {
            var se = Ht(i), pe = se == Z || se == He;
            if (Wn(i))
              return Jh(i, H);
            if (se == Ut || se == ae || pe && !O) {
              if (M = q || pe ? {} : mg(i), !H)
                return q ? iE(i, AS(M, i)) : nE(i, Th(M, i));
            } else {
              if (!rt[se])
                return O ? i : {};
              M = vE(i, se, H);
            }
          }
          C || (C = new Dr());
          var ye = C.get(i);
          if (ye)
            return ye;
          C.set(i, M), qg(i) ? i.forEach(function(Se) {
            M.add(Er(Se, s, f, Se, i, C));
          }) : Ug(i) && i.forEach(function(Se, Ne) {
            M.set(Ne, Er(Se, s, f, Ne, i, C));
          });
          var _e = re ? q ? bu : mu : q ? Qt : Tt, Ce = ne ? r : _e(i);
          return xr(Ce || i, function(Se, Ne) {
            Ce && (Ne = Se, Se = i[Ne]), Co(M, Ne, Er(Se, s, f, Ne, i, C));
          }), M;
        }
        function TS(i) {
          var s = Tt(i);
          return function(f) {
            return Rh(f, i, s);
          };
        }
        function Rh(i, s, f) {
          var S = f.length;
          if (i == null)
            return !S;
          for (i = tt(i); S--; ) {
            var O = f[S], C = s[O], M = i[O];
            if (M === r && !(O in i) || !C(M))
              return false;
          }
          return true;
        }
        function Ch(i, s, f) {
          if (typeof i != "function")
            throw new _r(l);
          return Lo(function() {
            i.apply(r, f);
          }, s);
        }
        function Po(i, s, f, S) {
          var O = -1, C = Xa, M = true, H = i.length, q = [], re = s.length;
          if (!H)
            return q;
          f && (s = st(s, ar(f))), S ? (C = zc, M = false) : s.length >= o && (C = Eo, M = false, s = new li(s));
          e:
            for (; ++O < H; ) {
              var ne = i[O], se = f == null ? ne : f(ne);
              if (ne = S || ne !== 0 ? ne : 0, M && se === se) {
                for (var pe = re; pe--; )
                  if (s[pe] === se)
                    continue e;
                q.push(ne);
              } else C(s, se, S) || q.push(ne);
            }
          return q;
        }
        var Ln = ng(qr), Ph = ng(eu, true);
        function RS(i, s) {
          var f = true;
          return Ln(i, function(S, O, C) {
            return f = !!s(S, O, C), f;
          }), f;
        }
        function gs(i, s, f) {
          for (var S = -1, O = i.length; ++S < O; ) {
            var C = i[S], M = s(C);
            if (M != null && (H === r ? M === M && !lr(M) : f(M, H)))
              var H = M, q = C;
          }
          return q;
        }
        function CS(i, s, f, S) {
          var O = i.length;
          for (f = Re(f), f < 0 && (f = -f > O ? 0 : O + f), S = S === r || S > O ? O : Re(S), S < 0 && (S += O), S = f > S ? 0 : Kg(S); f < S; )
            i[f++] = s;
          return i;
        }
        function Ih(i, s) {
          var f = [];
          return Ln(i, function(S, O, C) {
            s(S, O, C) && f.push(S);
          }), f;
        }
        function Nt(i, s, f, S, O) {
          var C = -1, M = i.length;
          for (f || (f = bE), O || (O = []); ++C < M; ) {
            var H = i[C];
            s > 0 && f(H) ? s > 1 ? Nt(H, s - 1, f, S, O) : Mn(O, H) : S || (O[O.length] = H);
          }
          return O;
        }
        var Qc = ig(), Nh = ig(true);
        function qr(i, s) {
          return i && Qc(i, s, Tt);
        }
        function eu(i, s) {
          return i && Nh(i, s, Tt);
        }
        function vs(i, s) {
          return Nn(s, function(f) {
            return bn(i[f]);
          });
        }
        function ui(i, s) {
          s = Fn(s, i);
          for (var f = 0, S = s.length; i != null && f < S; )
            i = i[Kr(s[f++])];
          return f && f == S ? i : r;
        }
        function Mh(i, s, f) {
          var S = s(i);
          return Ae(i) ? S : Mn(S, f(i));
        }
        function Vt(i) {
          return i == null ? i === r ? So : un : ai && ai in tt(i) ? dE(i) : kE(i);
        }
        function tu(i, s) {
          return i > s;
        }
        function PS(i, s) {
          return i != null && Ge.call(i, s);
        }
        function IS(i, s) {
          return i != null && s in tt(i);
        }
        function NS(i, s, f) {
          return i >= Ft(s, f) && i < St(s, f);
        }
        function ru(i, s, f) {
          for (var S = f ? zc : Xa, O = i[0].length, C = i.length, M = C, H = J(C), q = 1 / 0, re = []; M--; ) {
            var ne = i[M];
            M && s && (ne = st(ne, ar(s))), q = Ft(ne.length, q), H[M] = !f && (s || O >= 120 && ne.length >= 120) ? new li(M && ne) : r;
          }
          ne = i[0];
          var se = -1, pe = H[0];
          e:
            for (; ++se < O && re.length < q; ) {
              var ye = ne[se], _e = s ? s(ye) : ye;
              if (ye = f || ye !== 0 ? ye : 0, !(pe ? Eo(pe, _e) : S(re, _e, f))) {
                for (M = C; --M; ) {
                  var Ce = H[M];
                  if (!(Ce ? Eo(Ce, _e) : S(i[M], _e, f)))
                    continue e;
                }
                pe && pe.push(_e), re.push(ye);
              }
            }
          return re;
        }
        function MS(i, s, f, S) {
          return qr(i, function(O, C, M) {
            s(S, f(O), C, M);
          }), S;
        }
        function Io(i, s, f) {
          s = Fn(s, i), i = xg(i, s);
          var S = i == null ? i : i[Kr(Or(s))];
          return S == null ? r : or(S, i, f);
        }
        function $h(i) {
          return ht(i) && Vt(i) == ae;
        }
        function $S(i) {
          return ht(i) && Vt(i) == In;
        }
        function DS(i) {
          return ht(i) && Vt(i) == de;
        }
        function No(i, s, f, S, O) {
          return i === s ? true : i == null || s == null || !ht(i) && !ht(s) ? i !== i && s !== s : LS(i, s, f, S, No, O);
        }
        function LS(i, s, f, S, O, C) {
          var M = Ae(i), H = Ae(s), q = M ? oe : Ht(i), re = H ? oe : Ht(s);
          q = q == ae ? Ut : q, re = re == ae ? Ut : re;
          var ne = q == Ut, se = re == Ut, pe = q == re;
          if (pe && Wn(i)) {
            if (!Wn(s))
              return false;
            M = true, ne = false;
          }
          if (pe && !ne)
            return C || (C = new Dr()), M || Gi(i) ? hg(i, s, f, S, O, C) : uE(i, s, q, f, S, O, C);
          if (!(f & _)) {
            var ye = ne && Ge.call(i, "__wrapped__"), _e = se && Ge.call(s, "__wrapped__");
            if (ye || _e) {
              var Ce = ye ? i.value() : i, Se = _e ? s.value() : s;
              return C || (C = new Dr()), O(Ce, Se, f, S, C);
            }
          }
          return pe ? (C || (C = new Dr()), fE(i, s, f, S, O, C)) : false;
        }
        function zS(i) {
          return ht(i) && Ht(i) == he;
        }
        function nu(i, s, f, S) {
          var O = f.length, C = O, M = !S;
          if (i == null)
            return !C;
          for (i = tt(i); O--; ) {
            var H = f[O];
            if (M && H[2] ? H[1] !== i[H[0]] : !(H[0] in i))
              return false;
          }
          for (; ++O < C; ) {
            H = f[O];
            var q = H[0], re = i[q], ne = H[1];
            if (M && H[2]) {
              if (re === r && !(q in i))
                return false;
            } else {
              var se = new Dr();
              if (S)
                var pe = S(re, ne, q, i, s, se);
              if (!(pe === r ? No(ne, re, _ | v, S, se) : pe))
                return false;
            }
          }
          return true;
        }
        function Dh(i) {
          if (!ft(i) || wE(i))
            return false;
          var s = bn(i) ? z_ : T1;
          return s.test(di(i));
        }
        function FS(i) {
          return ht(i) && Vt(i) == ir;
        }
        function HS(i) {
          return ht(i) && Ht(i) == zt;
        }
        function WS(i) {
          return ht(i) && Ns(i.length) && !!at[Vt(i)];
        }
        function Lh(i) {
          return typeof i == "function" ? i : i == null ? er : typeof i == "object" ? Ae(i) ? Hh(i[0], i[1]) : Fh(i) : ov(i);
        }
        function iu(i) {
          if (!Do(i))
            return U_(i);
          var s = [];
          for (var f in tt(i))
            Ge.call(i, f) && f != "constructor" && s.push(f);
          return s;
        }
        function BS(i) {
          if (!ft(i))
            return EE(i);
          var s = Do(i), f = [];
          for (var S in i)
            S == "constructor" && (s || !Ge.call(i, S)) || f.push(S);
          return f;
        }
        function ou(i, s) {
          return i < s;
        }
        function zh(i, s) {
          var f = -1, S = Jt(i) ? J(i.length) : [];
          return Ln(i, function(O, C, M) {
            S[++f] = s(O, C, M);
          }), S;
        }
        function Fh(i) {
          var s = wu(i);
          return s.length == 1 && s[0][2] ? yg(s[0][0], s[0][1]) : function(f) {
            return f === i || nu(f, i, s);
          };
        }
        function Hh(i, s) {
          return _u(i) && bg(s) ? yg(Kr(i), s) : function(f) {
            var S = Iu(f, i);
            return S === r && S === s ? Nu(f, i) : No(s, S, _ | v);
          };
        }
        function ms(i, s, f, S, O) {
          i !== s && Qc(s, function(C, M) {
            if (O || (O = new Dr()), ft(C))
              jS(i, s, M, f, ms, S, O);
            else {
              var H = S ? S(Eu(i, M), C, M + "", i, s, O) : r;
              H === r && (H = C), Xc(i, M, H);
            }
          }, Qt);
        }
        function jS(i, s, f, S, O, C, M) {
          var H = Eu(i, f), q = Eu(s, f), re = M.get(q);
          if (re) {
            Xc(i, f, re);
            return;
          }
          var ne = C ? C(H, q, f + "", i, s, M) : r, se = ne === r;
          if (se) {
            var pe = Ae(q), ye = !pe && Wn(q), _e = !pe && !ye && Gi(q);
            ne = q, pe || ye || _e ? Ae(H) ? ne = H : vt(H) ? ne = Xt(H) : ye ? (se = false, ne = Jh(q, true)) : _e ? (se = false, ne = Qh(q, true)) : ne = [] : zo(q) || pi(q) ? (ne = H, pi(H) ? ne = Zg(H) : (!ft(H) || bn(H)) && (ne = mg(q))) : se = false;
          }
          se && (M.set(q, ne), O(ne, q, S, C, M), M.delete(q)), Xc(i, f, ne);
        }
        function Wh(i, s) {
          var f = i.length;
          if (f)
            return s += s < 0 ? f : 0, mn(s, f) ? i[s] : r;
        }
        function Bh(i, s, f) {
          s.length ? s = st(s, function(C) {
            return Ae(C) ? function(M) {
              return ui(M, C.length === 1 ? C[0] : C);
            } : C;
          }) : s = [er];
          var S = -1;
          s = st(s, ar(xe()));
          var O = zh(i, function(C, M, H) {
            var q = st(s, function(re) {
              return re(C);
            });
            return { criteria: q, index: ++S, value: C };
          });
          return v_(O, function(C, M) {
            return rE(C, M, f);
          });
        }
        function US(i, s) {
          return jh(i, s, function(f, S) {
            return Nu(i, S);
          });
        }
        function jh(i, s, f) {
          for (var S = -1, O = s.length, C = {}; ++S < O; ) {
            var M = s[S], H = ui(i, M);
            f(H, M) && Mo(C, Fn(M, i), H);
          }
          return C;
        }
        function VS(i) {
          return function(s) {
            return ui(s, i);
          };
        }
        function au(i, s, f, S) {
          var O = S ? g_ : Di, C = -1, M = s.length, H = i;
          for (i === s && (s = Xt(s)), f && (H = st(i, ar(f))); ++C < M; )
            for (var q = 0, re = s[C], ne = f ? f(re) : re; (q = O(H, ne, q, S)) > -1; )
              H !== i && ss.call(H, q, 1), ss.call(i, q, 1);
          return i;
        }
        function Uh(i, s) {
          for (var f = i ? s.length : 0, S = f - 1; f--; ) {
            var O = s[f];
            if (f == S || O !== C) {
              var C = O;
              mn(O) ? ss.call(i, O, 1) : uu(i, O);
            }
          }
          return i;
        }
        function su(i, s) {
          return i + us(Eh() * (s - i + 1));
        }
        function qS(i, s, f, S) {
          for (var O = -1, C = St(cs((s - i) / (f || 1)), 0), M = J(C); C--; )
            M[S ? C : ++O] = i, i += f;
          return M;
        }
        function lu(i, s) {
          var f = "";
          if (!i || s < 1 || s > G)
            return f;
          do
            s % 2 && (f += i), s = us(s / 2), s && (i += i);
          while (s);
          return f;
        }
        function Pe(i, s) {
          return ku(wg(i, s, er), i + "");
        }
        function GS(i) {
          return Ah(Ki(i));
        }
        function KS(i, s) {
          var f = Ki(i);
          return As(f, ci(s, 0, f.length));
        }
        function Mo(i, s, f, S) {
          if (!ft(i))
            return i;
          s = Fn(s, i);
          for (var O = -1, C = s.length, M = C - 1, H = i; H != null && ++O < C; ) {
            var q = Kr(s[O]), re = f;
            if (q === "__proto__" || q === "constructor" || q === "prototype")
              return i;
            if (O != M) {
              var ne = H[q];
              re = S ? S(ne, q, H) : r, re === r && (re = ft(ne) ? ne : mn(s[O + 1]) ? [] : {});
            }
            Co(H, q, re), H = H[q];
          }
          return i;
        }
        var Vh = fs ? function(i, s) {
          return fs.set(i, s), i;
        } : er, ZS = ls ? function(i, s) {
          return ls(i, "toString", {
            configurable: true,
            enumerable: false,
            value: $u(s),
            writable: true
          });
        } : er;
        function YS(i) {
          return As(Ki(i));
        }
        function kr(i, s, f) {
          var S = -1, O = i.length;
          s < 0 && (s = -s > O ? 0 : O + s), f = f > O ? O : f, f < 0 && (f += O), O = s > f ? 0 : f - s >>> 0, s >>>= 0;
          for (var C = J(O); ++S < O; )
            C[S] = i[S + s];
          return C;
        }
        function XS(i, s) {
          var f;
          return Ln(i, function(S, O, C) {
            return f = s(S, O, C), !f;
          }), !!f;
        }
        function bs(i, s, f) {
          var S = 0, O = i == null ? S : i.length;
          if (typeof s == "number" && s === s && O <= Q) {
            for (; S < O; ) {
              var C = S + O >>> 1, M = i[C];
              M !== null && !lr(M) && (f ? M <= s : M < s) ? S = C + 1 : O = C;
            }
            return O;
          }
          return cu(i, s, er, f);
        }
        function cu(i, s, f, S) {
          var O = 0, C = i == null ? 0 : i.length;
          if (C === 0)
            return 0;
          s = f(s);
          for (var M = s !== s, H = s === null, q = lr(s), re = s === r; O < C; ) {
            var ne = us((O + C) / 2), se = f(i[ne]), pe = se !== r, ye = se === null, _e = se === se, Ce = lr(se);
            if (M)
              var Se = S || _e;
            else re ? Se = _e && (S || pe) : H ? Se = _e && pe && (S || !ye) : q ? Se = _e && pe && !ye && (S || !Ce) : ye || Ce ? Se = false : Se = S ? se <= s : se < s;
            Se ? O = ne + 1 : C = ne;
          }
          return Ft(C, te);
        }
        function qh(i, s) {
          for (var f = -1, S = i.length, O = 0, C = []; ++f < S; ) {
            var M = i[f], H = s ? s(M) : M;
            if (!f || !Lr(H, q)) {
              var q = H;
              C[O++] = M === 0 ? 0 : M;
            }
          }
          return C;
        }
        function Gh(i) {
          return typeof i == "number" ? i : lr(i) ? L : +i;
        }
        function sr(i) {
          if (typeof i == "string")
            return i;
          if (Ae(i))
            return st(i, sr) + "";
          if (lr(i))
            return kh ? kh.call(i) : "";
          var s = i + "";
          return s == "0" && 1 / i == -Y ? "-0" : s;
        }
        function zn(i, s, f) {
          var S = -1, O = Xa, C = i.length, M = true, H = [], q = H;
          if (f)
            M = false, O = zc;
          else if (C >= o) {
            var re = s ? null : lE(i);
            if (re)
              return Qa(re);
            M = false, O = Eo, q = new li();
          } else
            q = s ? [] : H;
          e:
            for (; ++S < C; ) {
              var ne = i[S], se = s ? s(ne) : ne;
              if (ne = f || ne !== 0 ? ne : 0, M && se === se) {
                for (var pe = q.length; pe--; )
                  if (q[pe] === se)
                    continue e;
                s && q.push(se), H.push(ne);
              } else O(q, se, f) || (q !== H && q.push(se), H.push(ne));
            }
          return H;
        }
        function uu(i, s) {
          return s = Fn(s, i), i = xg(i, s), i == null || delete i[Kr(Or(s))];
        }
        function Kh(i, s, f, S) {
          return Mo(i, s, f(ui(i, s)), S);
        }
        function ys(i, s, f, S) {
          for (var O = i.length, C = S ? O : -1; (S ? C-- : ++C < O) && s(i[C], C, i); )
            ;
          return f ? kr(i, S ? 0 : C, S ? C + 1 : O) : kr(i, S ? C + 1 : 0, S ? O : C);
        }
        function Zh(i, s) {
          var f = i;
          return f instanceof Me && (f = f.value()), Fc(s, function(S, O) {
            return O.func.apply(O.thisArg, Mn([S], O.args));
          }, f);
        }
        function fu(i, s, f) {
          var S = i.length;
          if (S < 2)
            return S ? zn(i[0]) : [];
          for (var O = -1, C = J(S); ++O < S; )
            for (var M = i[O], H = -1; ++H < S; )
              H != O && (C[O] = Po(C[O] || M, i[H], s, f));
          return zn(Nt(C, 1), s, f);
        }
        function Yh(i, s, f) {
          for (var S = -1, O = i.length, C = s.length, M = {}; ++S < O; ) {
            var H = S < C ? s[S] : r;
            f(M, i[S], H);
          }
          return M;
        }
        function du(i) {
          return vt(i) ? i : [];
        }
        function pu(i) {
          return typeof i == "function" ? i : er;
        }
        function Fn(i, s) {
          return Ae(i) ? i : _u(i, s) ? [i] : kg(We(i));
        }
        var JS = Pe;
        function Hn(i, s, f) {
          var S = i.length;
          return f = f === r ? S : f, !s && f >= S ? i : kr(i, s, f);
        }
        var Xh = F_ || function(i) {
          return It.clearTimeout(i);
        };
        function Jh(i, s) {
          if (s)
            return i.slice();
          var f = i.length, S = yh ? yh(f) : new i.constructor(f);
          return i.copy(S), S;
        }
        function hu(i) {
          var s = new i.constructor(i.byteLength);
          return new os(s).set(new os(i)), s;
        }
        function QS(i, s) {
          var f = s ? hu(i.buffer) : i.buffer;
          return new i.constructor(f, i.byteOffset, i.byteLength);
        }
        function eE(i) {
          var s = new i.constructor(i.source, $p.exec(i));
          return s.lastIndex = i.lastIndex, s;
        }
        function tE(i) {
          return Ro ? tt(Ro.call(i)) : {};
        }
        function Qh(i, s) {
          var f = s ? hu(i.buffer) : i.buffer;
          return new i.constructor(f, i.byteOffset, i.length);
        }
        function eg(i, s) {
          if (i !== s) {
            var f = i !== r, S = i === null, O = i === i, C = lr(i), M = s !== r, H = s === null, q = s === s, re = lr(s);
            if (!H && !re && !C && i > s || C && M && q && !H && !re || S && M && q || !f && q || !O)
              return 1;
            if (!S && !C && !re && i < s || re && f && O && !S && !C || H && f && O || !M && O || !q)
              return -1;
          }
          return 0;
        }
        function rE(i, s, f) {
          for (var S = -1, O = i.criteria, C = s.criteria, M = O.length, H = f.length; ++S < M; ) {
            var q = eg(O[S], C[S]);
            if (q) {
              if (S >= H)
                return q;
              var re = f[S];
              return q * (re == "desc" ? -1 : 1);
            }
          }
          return i.index - s.index;
        }
        function tg(i, s, f, S) {
          for (var O = -1, C = i.length, M = f.length, H = -1, q = s.length, re = St(C - M, 0), ne = J(q + re), se = !S; ++H < q; )
            ne[H] = s[H];
          for (; ++O < M; )
            (se || O < C) && (ne[f[O]] = i[O]);
          for (; re--; )
            ne[H++] = i[O++];
          return ne;
        }
        function rg(i, s, f, S) {
          for (var O = -1, C = i.length, M = -1, H = f.length, q = -1, re = s.length, ne = St(C - H, 0), se = J(ne + re), pe = !S; ++O < ne; )
            se[O] = i[O];
          for (var ye = O; ++q < re; )
            se[ye + q] = s[q];
          for (; ++M < H; )
            (pe || O < C) && (se[ye + f[M]] = i[O++]);
          return se;
        }
        function Xt(i, s) {
          var f = -1, S = i.length;
          for (s || (s = J(S)); ++f < S; )
            s[f] = i[f];
          return s;
        }
        function Gr(i, s, f, S) {
          var O = !f;
          f || (f = {});
          for (var C = -1, M = s.length; ++C < M; ) {
            var H = s[C], q = S ? S(f[H], i[H], H, f, i) : r;
            q === r && (q = i[H]), O ? hn(f, H, q) : Co(f, H, q);
          }
          return f;
        }
        function nE(i, s) {
          return Gr(i, xu(i), s);
        }
        function iE(i, s) {
          return Gr(i, gg(i), s);
        }
        function ws(i, s) {
          return function(f, S) {
            var O = Ae(f) ? c_ : OS, C = s ? s() : {};
            return O(f, i, xe(S, 2), C);
          };
        }
        function Ui(i) {
          return Pe(function(s, f) {
            var S = -1, O = f.length, C = O > 1 ? f[O - 1] : r, M = O > 2 ? f[2] : r;
            for (C = i.length > 3 && typeof C == "function" ? (O--, C) : r, M && qt(f[0], f[1], M) && (C = O < 3 ? r : C, O = 1), s = tt(s); ++S < O; ) {
              var H = f[S];
              H && i(s, H, S, C);
            }
            return s;
          });
        }
        function ng(i, s) {
          return function(f, S) {
            if (f == null)
              return f;
            if (!Jt(f))
              return i(f, S);
            for (var O = f.length, C = s ? O : -1, M = tt(f); (s ? C-- : ++C < O) && S(M[C], C, M) !== false; )
              ;
            return f;
          };
        }
        function ig(i) {
          return function(s, f, S) {
            for (var O = -1, C = tt(s), M = S(s), H = M.length; H--; ) {
              var q = M[i ? H : ++O];
              if (f(C[q], q, C) === false)
                break;
            }
            return s;
          };
        }
        function oE(i, s, f) {
          var S = s & b, O = $o(i);
          function C() {
            var M = this && this !== It && this instanceof C ? O : i;
            return M.apply(S ? f : this, arguments);
          }
          return C;
        }
        function og(i) {
          return function(s) {
            s = We(s);
            var f = Li(s) ? $r(s) : r, S = f ? f[0] : s.charAt(0), O = f ? Hn(f, 1).join("") : s.slice(1);
            return S[i]() + O;
          };
        }
        function Vi(i) {
          return function(s) {
            return Fc(nv(rv(s).replace(Z1, "")), i, "");
          };
        }
        function $o(i) {
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return new i();
              case 1:
                return new i(s[0]);
              case 2:
                return new i(s[0], s[1]);
              case 3:
                return new i(s[0], s[1], s[2]);
              case 4:
                return new i(s[0], s[1], s[2], s[3]);
              case 5:
                return new i(s[0], s[1], s[2], s[3], s[4]);
              case 6:
                return new i(s[0], s[1], s[2], s[3], s[4], s[5]);
              case 7:
                return new i(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
            }
            var f = ji(i.prototype), S = i.apply(f, s);
            return ft(S) ? S : f;
          };
        }
        function aE(i, s, f) {
          var S = $o(i);
          function O() {
            for (var C = arguments.length, M = J(C), H = C, q = qi(O); H--; )
              M[H] = arguments[H];
            var re = C < 3 && M[0] !== q && M[C - 1] !== q ? [] : $n(M, q);
            if (C -= re.length, C < f)
              return ug(
                i,
                s,
                xs,
                O.placeholder,
                r,
                M,
                re,
                r,
                r,
                f - C
              );
            var ne = this && this !== It && this instanceof O ? S : i;
            return or(ne, this, M);
          }
          return O;
        }
        function ag(i) {
          return function(s, f, S) {
            var O = tt(s);
            if (!Jt(s)) {
              var C = xe(f, 3);
              s = Tt(s), f = function(H) {
                return C(O[H], H, O);
              };
            }
            var M = i(s, f, S);
            return M > -1 ? O[C ? s[M] : M] : r;
          };
        }
        function sg(i) {
          return vn(function(s) {
            var f = s.length, S = f, O = Sr.prototype.thru;
            for (i && s.reverse(); S--; ) {
              var C = s[S];
              if (typeof C != "function")
                throw new _r(l);
              if (O && !M && ks(C) == "wrapper")
                var M = new Sr([], true);
            }
            for (S = M ? S : f; ++S < f; ) {
              C = s[S];
              var H = ks(C), q = H == "wrapper" ? yu(C) : r;
              q && Su(q[0]) && q[1] == (z | x | E | A) && !q[4].length && q[9] == 1 ? M = M[ks(q[0])].apply(M, q[3]) : M = C.length == 1 && Su(C) ? M[H]() : M.thru(C);
            }
            return function() {
              var re = arguments, ne = re[0];
              if (M && re.length == 1 && Ae(ne))
                return M.plant(ne).value();
              for (var se = 0, pe = f ? s[se].apply(this, re) : ne; ++se < f; )
                pe = s[se].call(this, pe);
              return pe;
            };
          });
        }
        function xs(i, s, f, S, O, C, M, H, q, re) {
          var ne = s & z, se = s & b, pe = s & m, ye = s & (x | k), _e = s & P, Ce = pe ? r : $o(i);
          function Se() {
            for (var Ne = arguments.length, De = J(Ne), cr = Ne; cr--; )
              De[cr] = arguments[cr];
            if (ye)
              var Gt = qi(Se), ur = b_(De, Gt);
            if (S && (De = tg(De, S, O, ye)), C && (De = rg(De, C, M, ye)), Ne -= ur, ye && Ne < re) {
              var mt = $n(De, Gt);
              return ug(
                i,
                s,
                xs,
                Se.placeholder,
                f,
                De,
                mt,
                H,
                q,
                re - Ne
              );
            }
            var zr = se ? f : this, wn = pe ? zr[i] : i;
            return Ne = De.length, H ? De = OE(De, H) : _e && Ne > 1 && De.reverse(), ne && q < Ne && (De.length = q), this && this !== It && this instanceof Se && (wn = Ce || $o(wn)), wn.apply(zr, De);
          }
          return Se;
        }
        function lg(i, s) {
          return function(f, S) {
            return MS(f, i, s(S), {});
          };
        }
        function _s(i, s) {
          return function(f, S) {
            var O;
            if (f === r && S === r)
              return s;
            if (f !== r && (O = f), S !== r) {
              if (O === r)
                return S;
              typeof f == "string" || typeof S == "string" ? (f = sr(f), S = sr(S)) : (f = Gh(f), S = Gh(S)), O = i(f, S);
            }
            return O;
          };
        }
        function gu(i) {
          return vn(function(s) {
            return s = st(s, ar(xe())), Pe(function(f) {
              var S = this;
              return i(s, function(O) {
                return or(O, S, f);
              });
            });
          });
        }
        function Ss(i, s) {
          s = s === r ? " " : sr(s);
          var f = s.length;
          if (f < 2)
            return f ? lu(s, i) : s;
          var S = lu(s, cs(i / zi(s)));
          return Li(s) ? Hn($r(S), 0, i).join("") : S.slice(0, i);
        }
        function sE(i, s, f, S) {
          var O = s & b, C = $o(i);
          function M() {
            for (var H = -1, q = arguments.length, re = -1, ne = S.length, se = J(ne + q), pe = this && this !== It && this instanceof M ? C : i; ++re < ne; )
              se[re] = S[re];
            for (; q--; )
              se[re++] = arguments[++H];
            return or(pe, O ? f : this, se);
          }
          return M;
        }
        function cg(i) {
          return function(s, f, S) {
            return S && typeof S != "number" && qt(s, f, S) && (f = S = r), s = yn(s), f === r ? (f = s, s = 0) : f = yn(f), S = S === r ? s < f ? 1 : -1 : yn(S), qS(s, f, S, i);
          };
        }
        function Es(i) {
          return function(s, f) {
            return typeof s == "string" && typeof f == "string" || (s = Ar(s), f = Ar(f)), i(s, f);
          };
        }
        function ug(i, s, f, S, O, C, M, H, q, re) {
          var ne = s & x, se = ne ? M : r, pe = ne ? r : M, ye = ne ? C : r, _e = ne ? r : C;
          s |= ne ? E : R, s &= ~(ne ? R : E), s & w || (s &= -4);
          var Ce = [
            i,
            s,
            O,
            ye,
            se,
            _e,
            pe,
            H,
            q,
            re
          ], Se = f.apply(r, Ce);
          return Su(i) && _g(Se, Ce), Se.placeholder = S, Sg(Se, i, s);
        }
        function vu(i) {
          var s = _t[i];
          return function(f, S) {
            if (f = Ar(f), S = S == null ? 0 : Ft(Re(S), 292), S && Sh(f)) {
              var O = (We(f) + "e").split("e"), C = s(O[0] + "e" + (+O[1] + S));
              return O = (We(C) + "e").split("e"), +(O[0] + "e" + (+O[1] - S));
            }
            return s(f);
          };
        }
        var lE = Wi && 1 / Qa(new Wi([, -0]))[1] == Y ? function(i) {
          return new Wi(i);
        } : zu;
        function fg(i) {
          return function(s) {
            var f = Ht(s);
            return f == he ? qc(s) : f == zt ? k_(s) : m_(s, i(s));
          };
        }
        function gn(i, s, f, S, O, C, M, H) {
          var q = s & m;
          if (!q && typeof i != "function")
            throw new _r(l);
          var re = S ? S.length : 0;
          if (re || (s &= -97, S = O = r), M = M === r ? M : St(Re(M), 0), H = H === r ? H : Re(H), re -= O ? O.length : 0, s & R) {
            var ne = S, se = O;
            S = O = r;
          }
          var pe = q ? r : yu(i), ye = [
            i,
            s,
            f,
            S,
            O,
            ne,
            se,
            C,
            M,
            H
          ];
          if (pe && SE(ye, pe), i = ye[0], s = ye[1], f = ye[2], S = ye[3], O = ye[4], H = ye[9] = ye[9] === r ? q ? 0 : i.length : St(ye[9] - re, 0), !H && s & (x | k) && (s &= -25), !s || s == b)
            var _e = oE(i, s, f);
          else s == x || s == k ? _e = aE(i, s, H) : (s == E || s == (b | E)) && !O.length ? _e = sE(i, s, f, S) : _e = xs.apply(r, ye);
          var Ce = pe ? Vh : _g;
          return Sg(Ce(_e, ye), i, s);
        }
        function dg(i, s, f, S) {
          return i === r || Lr(i, Hi[f]) && !Ge.call(S, f) ? s : i;
        }
        function pg(i, s, f, S, O, C) {
          return ft(i) && ft(s) && (C.set(s, i), ms(i, s, r, pg, C), C.delete(s)), i;
        }
        function cE(i) {
          return zo(i) ? r : i;
        }
        function hg(i, s, f, S, O, C) {
          var M = f & _, H = i.length, q = s.length;
          if (H != q && !(M && q > H))
            return false;
          var re = C.get(i), ne = C.get(s);
          if (re && ne)
            return re == s && ne == i;
          var se = -1, pe = true, ye = f & v ? new li() : r;
          for (C.set(i, s), C.set(s, i); ++se < H; ) {
            var _e = i[se], Ce = s[se];
            if (S)
              var Se = M ? S(Ce, _e, se, s, i, C) : S(_e, Ce, se, i, s, C);
            if (Se !== r) {
              if (Se)
                continue;
              pe = false;
              break;
            }
            if (ye) {
              if (!Hc(s, function(Ne, De) {
                if (!Eo(ye, De) && (_e === Ne || O(_e, Ne, f, S, C)))
                  return ye.push(De);
              })) {
                pe = false;
                break;
              }
            } else if (!(_e === Ce || O(_e, Ce, f, S, C))) {
              pe = false;
              break;
            }
          }
          return C.delete(i), C.delete(s), pe;
        }
        function uE(i, s, f, S, O, C, M) {
          switch (f) {
            case fn:
              if (i.byteLength != s.byteLength || i.byteOffset != s.byteOffset)
                return false;
              i = i.buffer, s = s.buffer;
            case In:
              return !(i.byteLength != s.byteLength || !C(new os(i), new os(s)));
            case ce:
            case de:
            case Pt:
              return Lr(+i, +s);
            case we:
              return i.name == s.name && i.message == s.message;
            case ir:
            case Cn:
              return i == s + "";
            case he:
              var H = qc;
            case zt:
              var q = S & _;
              if (H || (H = Qa), i.size != s.size && !q)
                return false;
              var re = M.get(i);
              if (re)
                return re == s;
              S |= v, M.set(i, s);
              var ne = hg(H(i), H(s), S, O, C, M);
              return M.delete(i), ne;
            case ii:
              if (Ro)
                return Ro.call(i) == Ro.call(s);
          }
          return false;
        }
        function fE(i, s, f, S, O, C) {
          var M = f & _, H = mu(i), q = H.length, re = mu(s), ne = re.length;
          if (q != ne && !M)
            return false;
          for (var se = q; se--; ) {
            var pe = H[se];
            if (!(M ? pe in s : Ge.call(s, pe)))
              return false;
          }
          var ye = C.get(i), _e = C.get(s);
          if (ye && _e)
            return ye == s && _e == i;
          var Ce = true;
          C.set(i, s), C.set(s, i);
          for (var Se = M; ++se < q; ) {
            pe = H[se];
            var Ne = i[pe], De = s[pe];
            if (S)
              var cr = M ? S(De, Ne, pe, s, i, C) : S(Ne, De, pe, i, s, C);
            if (!(cr === r ? Ne === De || O(Ne, De, f, S, C) : cr)) {
              Ce = false;
              break;
            }
            Se || (Se = pe == "constructor");
          }
          if (Ce && !Se) {
            var Gt = i.constructor, ur = s.constructor;
            Gt != ur && "constructor" in i && "constructor" in s && !(typeof Gt == "function" && Gt instanceof Gt && typeof ur == "function" && ur instanceof ur) && (Ce = false);
          }
          return C.delete(i), C.delete(s), Ce;
        }
        function vn(i) {
          return ku(wg(i, r, Rg), i + "");
        }
        function mu(i) {
          return Mh(i, Tt, xu);
        }
        function bu(i) {
          return Mh(i, Qt, gg);
        }
        var yu = fs ? function(i) {
          return fs.get(i);
        } : zu;
        function ks(i) {
          for (var s = i.name + "", f = Bi[s], S = Ge.call(Bi, s) ? f.length : 0; S--; ) {
            var O = f[S], C = O.func;
            if (C == null || C == i)
              return O.name;
          }
          return s;
        }
        function qi(i) {
          var s = Ge.call(T, "placeholder") ? T : i;
          return s.placeholder;
        }
        function xe() {
          var i = T.iteratee || Du;
          return i = i === Du ? Lh : i, arguments.length ? i(arguments[0], arguments[1]) : i;
        }
        function Os(i, s) {
          var f = i.__data__;
          return yE(s) ? f[typeof s == "string" ? "string" : "hash"] : f.map;
        }
        function wu(i) {
          for (var s = Tt(i), f = s.length; f--; ) {
            var S = s[f], O = i[S];
            s[f] = [S, O, bg(O)];
          }
          return s;
        }
        function fi(i, s) {
          var f = __(i, s);
          return Dh(f) ? f : r;
        }
        function dE(i) {
          var s = Ge.call(i, ai), f = i[ai];
          try {
            i[ai] = r;
            var S = true;
          } catch {
          }
          var O = ns.call(i);
          return S && (s ? i[ai] = f : delete i[ai]), O;
        }
        var xu = Kc ? function(i) {
          return i == null ? [] : (i = tt(i), Nn(Kc(i), function(s) {
            return xh.call(i, s);
          }));
        } : Fu, gg = Kc ? function(i) {
          for (var s = []; i; )
            Mn(s, xu(i)), i = as(i);
          return s;
        } : Fu, Ht = Vt;
        (Zc && Ht(new Zc(new ArrayBuffer(1))) != fn || Oo && Ht(new Oo()) != he || Yc && Ht(Yc.resolve()) != qa || Wi && Ht(new Wi()) != zt || Ao && Ht(new Ao()) != Pn) && (Ht = function(i) {
          var s = Vt(i), f = s == Ut ? i.constructor : r, S = f ? di(f) : "";
          if (S)
            switch (S) {
              case K_:
                return fn;
              case Z_:
                return he;
              case Y_:
                return qa;
              case X_:
                return zt;
              case J_:
                return Pn;
            }
          return s;
        });
        function pE(i, s, f) {
          for (var S = -1, O = f.length; ++S < O; ) {
            var C = f[S], M = C.size;
            switch (C.type) {
              case "drop":
                i += M;
                break;
              case "dropRight":
                s -= M;
                break;
              case "take":
                s = Ft(s, i + M);
                break;
              case "takeRight":
                i = St(i, s - M);
                break;
            }
          }
          return { start: i, end: s };
        }
        function hE(i) {
          var s = i.match(w1);
          return s ? s[1].split(x1) : [];
        }
        function vg(i, s, f) {
          s = Fn(s, i);
          for (var S = -1, O = s.length, C = false; ++S < O; ) {
            var M = Kr(s[S]);
            if (!(C = i != null && f(i, M)))
              break;
            i = i[M];
          }
          return C || ++S != O ? C : (O = i == null ? 0 : i.length, !!O && Ns(O) && mn(M, O) && (Ae(i) || pi(i)));
        }
        function gE(i) {
          var s = i.length, f = new i.constructor(s);
          return s && typeof i[0] == "string" && Ge.call(i, "index") && (f.index = i.index, f.input = i.input), f;
        }
        function mg(i) {
          return typeof i.constructor == "function" && !Do(i) ? ji(as(i)) : {};
        }
        function vE(i, s, f) {
          var S = i.constructor;
          switch (s) {
            case In:
              return hu(i);
            case ce:
            case de:
              return new S(+i);
            case fn:
              return QS(i, f);
            case wc:
            case xc:
            case _c:
            case Sc:
            case Ec:
            case kc:
            case Oc:
            case Ac:
            case Tc:
              return Qh(i, f);
            case he:
              return new S();
            case Pt:
            case Cn:
              return new S(i);
            case ir:
              return eE(i);
            case zt:
              return new S();
            case ii:
              return tE(i);
          }
        }
        function mE(i, s) {
          var f = s.length;
          if (!f)
            return i;
          var S = f - 1;
          return s[S] = (f > 1 ? "& " : "") + s[S], s = s.join(f > 2 ? ", " : " "), i.replace(y1, `{
/* [wrapped with ` + s + `] */
`);
        }
        function bE(i) {
          return Ae(i) || pi(i) || !!(_h && i && i[_h]);
        }
        function mn(i, s) {
          var f = typeof i;
          return s = s ?? G, !!s && (f == "number" || f != "symbol" && C1.test(i)) && i > -1 && i % 1 == 0 && i < s;
        }
        function qt(i, s, f) {
          if (!ft(f))
            return false;
          var S = typeof s;
          return (S == "number" ? Jt(f) && mn(s, f.length) : S == "string" && s in f) ? Lr(f[s], i) : false;
        }
        function _u(i, s) {
          if (Ae(i))
            return false;
          var f = typeof i;
          return f == "number" || f == "symbol" || f == "boolean" || i == null || lr(i) ? true : g1.test(i) || !h1.test(i) || s != null && i in tt(s);
        }
        function yE(i) {
          var s = typeof i;
          return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? i !== "__proto__" : i === null;
        }
        function Su(i) {
          var s = ks(i), f = T[s];
          if (typeof f != "function" || !(s in Me.prototype))
            return false;
          if (i === f)
            return true;
          var S = yu(f);
          return !!S && i === S[0];
        }
        function wE(i) {
          return !!bh && bh in i;
        }
        var xE = ts ? bn : Hu;
        function Do(i) {
          var s = i && i.constructor, f = typeof s == "function" && s.prototype || Hi;
          return i === f;
        }
        function bg(i) {
          return i === i && !ft(i);
        }
        function yg(i, s) {
          return function(f) {
            return f == null ? false : f[i] === s && (s !== r || i in tt(f));
          };
        }
        function _E(i) {
          var s = Ps(i, function(S) {
            return f.size === d && f.clear(), S;
          }), f = s.cache;
          return s;
        }
        function SE(i, s) {
          var f = i[1], S = s[1], O = f | S, C = O < (b | m | z), M = S == z && f == x || S == z && f == A && i[7].length <= s[8] || S == (z | A) && s[7].length <= s[8] && f == x;
          if (!(C || M))
            return i;
          S & b && (i[2] = s[2], O |= f & b ? 0 : w);
          var H = s[3];
          if (H) {
            var q = i[3];
            i[3] = q ? tg(q, H, s[4]) : H, i[4] = q ? $n(i[3], p) : s[4];
          }
          return H = s[5], H && (q = i[5], i[5] = q ? rg(q, H, s[6]) : H, i[6] = q ? $n(i[5], p) : s[6]), H = s[7], H && (i[7] = H), S & z && (i[8] = i[8] == null ? s[8] : Ft(i[8], s[8])), i[9] == null && (i[9] = s[9]), i[0] = s[0], i[1] = O, i;
        }
        function EE(i) {
          var s = [];
          if (i != null)
            for (var f in tt(i))
              s.push(f);
          return s;
        }
        function kE(i) {
          return ns.call(i);
        }
        function wg(i, s, f) {
          return s = St(s === r ? i.length - 1 : s, 0), function() {
            for (var S = arguments, O = -1, C = St(S.length - s, 0), M = J(C); ++O < C; )
              M[O] = S[s + O];
            O = -1;
            for (var H = J(s + 1); ++O < s; )
              H[O] = S[O];
            return H[s] = f(M), or(i, this, H);
          };
        }
        function xg(i, s) {
          return s.length < 2 ? i : ui(i, kr(s, 0, -1));
        }
        function OE(i, s) {
          for (var f = i.length, S = Ft(s.length, f), O = Xt(i); S--; ) {
            var C = s[S];
            i[S] = mn(C, f) ? O[C] : r;
          }
          return i;
        }
        function Eu(i, s) {
          if (!(s === "constructor" && typeof i[s] == "function") && s != "__proto__")
            return i[s];
        }
        var _g = Eg(Vh), Lo = W_ || function(i, s) {
          return It.setTimeout(i, s);
        }, ku = Eg(ZS);
        function Sg(i, s, f) {
          var S = s + "";
          return ku(i, mE(S, AE(hE(S), f)));
        }
        function Eg(i) {
          var s = 0, f = 0;
          return function() {
            var S = V_(), O = j - (S - f);
            if (f = S, O > 0) {
              if (++s >= N)
                return arguments[0];
            } else
              s = 0;
            return i.apply(r, arguments);
          };
        }
        function As(i, s) {
          var f = -1, S = i.length, O = S - 1;
          for (s = s === r ? S : s; ++f < s; ) {
            var C = su(f, O), M = i[C];
            i[C] = i[f], i[f] = M;
          }
          return i.length = s, i;
        }
        var kg = _E(function(i) {
          var s = [];
          return i.charCodeAt(0) === 46 && s.push(""), i.replace(v1, function(f, S, O, C) {
            s.push(O ? C.replace(E1, "$1") : S || f);
          }), s;
        });
        function Kr(i) {
          if (typeof i == "string" || lr(i))
            return i;
          var s = i + "";
          return s == "0" && 1 / i == -Y ? "-0" : s;
        }
        function di(i) {
          if (i != null) {
            try {
              return rs.call(i);
            } catch {
            }
            try {
              return i + "";
            } catch {
            }
          }
          return "";
        }
        function AE(i, s) {
          return xr(X, function(f) {
            var S = "_." + f[0];
            s & f[1] && !Xa(i, S) && i.push(S);
          }), i.sort();
        }
        function Og(i) {
          if (i instanceof Me)
            return i.clone();
          var s = new Sr(i.__wrapped__, i.__chain__);
          return s.__actions__ = Xt(i.__actions__), s.__index__ = i.__index__, s.__values__ = i.__values__, s;
        }
        function TE(i, s, f) {
          (f ? qt(i, s, f) : s === r) ? s = 1 : s = St(Re(s), 0);
          var S = i == null ? 0 : i.length;
          if (!S || s < 1)
            return [];
          for (var O = 0, C = 0, M = J(cs(S / s)); O < S; )
            M[C++] = kr(i, O, O += s);
          return M;
        }
        function RE(i) {
          for (var s = -1, f = i == null ? 0 : i.length, S = 0, O = []; ++s < f; ) {
            var C = i[s];
            C && (O[S++] = C);
          }
          return O;
        }
        function CE() {
          var i = arguments.length;
          if (!i)
            return [];
          for (var s = J(i - 1), f = arguments[0], S = i; S--; )
            s[S - 1] = arguments[S];
          return Mn(Ae(f) ? Xt(f) : [f], Nt(s, 1));
        }
        var PE = Pe(function(i, s) {
          return vt(i) ? Po(i, Nt(s, 1, vt, true)) : [];
        }), IE = Pe(function(i, s) {
          var f = Or(s);
          return vt(f) && (f = r), vt(i) ? Po(i, Nt(s, 1, vt, true), xe(f, 2)) : [];
        }), NE = Pe(function(i, s) {
          var f = Or(s);
          return vt(f) && (f = r), vt(i) ? Po(i, Nt(s, 1, vt, true), r, f) : [];
        });
        function ME(i, s, f) {
          var S = i == null ? 0 : i.length;
          return S ? (s = f || s === r ? 1 : Re(s), kr(i, s < 0 ? 0 : s, S)) : [];
        }
        function $E(i, s, f) {
          var S = i == null ? 0 : i.length;
          return S ? (s = f || s === r ? 1 : Re(s), s = S - s, kr(i, 0, s < 0 ? 0 : s)) : [];
        }
        function DE(i, s) {
          return i && i.length ? ys(i, xe(s, 3), true, true) : [];
        }
        function LE(i, s) {
          return i && i.length ? ys(i, xe(s, 3), true) : [];
        }
        function zE(i, s, f, S) {
          var O = i == null ? 0 : i.length;
          return O ? (f && typeof f != "number" && qt(i, s, f) && (f = 0, S = O), CS(i, s, f, S)) : [];
        }
        function Ag(i, s, f) {
          var S = i == null ? 0 : i.length;
          if (!S)
            return -1;
          var O = f == null ? 0 : Re(f);
          return O < 0 && (O = St(S + O, 0)), Ja(i, xe(s, 3), O);
        }
        function Tg(i, s, f) {
          var S = i == null ? 0 : i.length;
          if (!S)
            return -1;
          var O = S - 1;
          return f !== r && (O = Re(f), O = f < 0 ? St(S + O, 0) : Ft(O, S - 1)), Ja(i, xe(s, 3), O, true);
        }
        function Rg(i) {
          var s = i == null ? 0 : i.length;
          return s ? Nt(i, 1) : [];
        }
        function FE(i) {
          var s = i == null ? 0 : i.length;
          return s ? Nt(i, Y) : [];
        }
        function HE(i, s) {
          var f = i == null ? 0 : i.length;
          return f ? (s = s === r ? 1 : Re(s), Nt(i, s)) : [];
        }
        function WE(i) {
          for (var s = -1, f = i == null ? 0 : i.length, S = {}; ++s < f; ) {
            var O = i[s];
            S[O[0]] = O[1];
          }
          return S;
        }
        function Cg(i) {
          return i && i.length ? i[0] : r;
        }
        function BE(i, s, f) {
          var S = i == null ? 0 : i.length;
          if (!S)
            return -1;
          var O = f == null ? 0 : Re(f);
          return O < 0 && (O = St(S + O, 0)), Di(i, s, O);
        }
        function jE(i) {
          var s = i == null ? 0 : i.length;
          return s ? kr(i, 0, -1) : [];
        }
        var UE = Pe(function(i) {
          var s = st(i, du);
          return s.length && s[0] === i[0] ? ru(s) : [];
        }), VE = Pe(function(i) {
          var s = Or(i), f = st(i, du);
          return s === Or(f) ? s = r : f.pop(), f.length && f[0] === i[0] ? ru(f, xe(s, 2)) : [];
        }), qE = Pe(function(i) {
          var s = Or(i), f = st(i, du);
          return s = typeof s == "function" ? s : r, s && f.pop(), f.length && f[0] === i[0] ? ru(f, r, s) : [];
        });
        function GE(i, s) {
          return i == null ? "" : j_.call(i, s);
        }
        function Or(i) {
          var s = i == null ? 0 : i.length;
          return s ? i[s - 1] : r;
        }
        function KE(i, s, f) {
          var S = i == null ? 0 : i.length;
          if (!S)
            return -1;
          var O = S;
          return f !== r && (O = Re(f), O = O < 0 ? St(S + O, 0) : Ft(O, S - 1)), s === s ? A_(i, s, O) : Ja(i, uh, O, true);
        }
        function ZE(i, s) {
          return i && i.length ? Wh(i, Re(s)) : r;
        }
        var YE = Pe(Pg);
        function Pg(i, s) {
          return i && i.length && s && s.length ? au(i, s) : i;
        }
        function XE(i, s, f) {
          return i && i.length && s && s.length ? au(i, s, xe(f, 2)) : i;
        }
        function JE(i, s, f) {
          return i && i.length && s && s.length ? au(i, s, r, f) : i;
        }
        var QE = vn(function(i, s) {
          var f = i == null ? 0 : i.length, S = Jc(i, s);
          return Uh(i, st(s, function(O) {
            return mn(O, f) ? +O : O;
          }).sort(eg)), S;
        });
        function ek(i, s) {
          var f = [];
          if (!(i && i.length))
            return f;
          var S = -1, O = [], C = i.length;
          for (s = xe(s, 3); ++S < C; ) {
            var M = i[S];
            s(M, S, i) && (f.push(M), O.push(S));
          }
          return Uh(i, O), f;
        }
        function Ou(i) {
          return i == null ? i : G_.call(i);
        }
        function tk(i, s, f) {
          var S = i == null ? 0 : i.length;
          return S ? (f && typeof f != "number" && qt(i, s, f) ? (s = 0, f = S) : (s = s == null ? 0 : Re(s), f = f === r ? S : Re(f)), kr(i, s, f)) : [];
        }
        function rk(i, s) {
          return bs(i, s);
        }
        function nk(i, s, f) {
          return cu(i, s, xe(f, 2));
        }
        function ik(i, s) {
          var f = i == null ? 0 : i.length;
          if (f) {
            var S = bs(i, s);
            if (S < f && Lr(i[S], s))
              return S;
          }
          return -1;
        }
        function ok(i, s) {
          return bs(i, s, true);
        }
        function ak(i, s, f) {
          return cu(i, s, xe(f, 2), true);
        }
        function sk(i, s) {
          var f = i == null ? 0 : i.length;
          if (f) {
            var S = bs(i, s, true) - 1;
            if (Lr(i[S], s))
              return S;
          }
          return -1;
        }
        function lk(i) {
          return i && i.length ? qh(i) : [];
        }
        function ck(i, s) {
          return i && i.length ? qh(i, xe(s, 2)) : [];
        }
        function uk(i) {
          var s = i == null ? 0 : i.length;
          return s ? kr(i, 1, s) : [];
        }
        function fk(i, s, f) {
          return i && i.length ? (s = f || s === r ? 1 : Re(s), kr(i, 0, s < 0 ? 0 : s)) : [];
        }
        function dk(i, s, f) {
          var S = i == null ? 0 : i.length;
          return S ? (s = f || s === r ? 1 : Re(s), s = S - s, kr(i, s < 0 ? 0 : s, S)) : [];
        }
        function pk(i, s) {
          return i && i.length ? ys(i, xe(s, 3), false, true) : [];
        }
        function hk(i, s) {
          return i && i.length ? ys(i, xe(s, 3)) : [];
        }
        var gk = Pe(function(i) {
          return zn(Nt(i, 1, vt, true));
        }), vk = Pe(function(i) {
          var s = Or(i);
          return vt(s) && (s = r), zn(Nt(i, 1, vt, true), xe(s, 2));
        }), mk = Pe(function(i) {
          var s = Or(i);
          return s = typeof s == "function" ? s : r, zn(Nt(i, 1, vt, true), r, s);
        });
        function bk(i) {
          return i && i.length ? zn(i) : [];
        }
        function yk(i, s) {
          return i && i.length ? zn(i, xe(s, 2)) : [];
        }
        function wk(i, s) {
          return s = typeof s == "function" ? s : r, i && i.length ? zn(i, r, s) : [];
        }
        function Au(i) {
          if (!(i && i.length))
            return [];
          var s = 0;
          return i = Nn(i, function(f) {
            if (vt(f))
              return s = St(f.length, s), true;
          }), Uc(s, function(f) {
            return st(i, Wc(f));
          });
        }
        function Ig(i, s) {
          if (!(i && i.length))
            return [];
          var f = Au(i);
          return s == null ? f : st(f, function(S) {
            return or(s, r, S);
          });
        }
        var xk = Pe(function(i, s) {
          return vt(i) ? Po(i, s) : [];
        }), _k = Pe(function(i) {
          return fu(Nn(i, vt));
        }), Sk = Pe(function(i) {
          var s = Or(i);
          return vt(s) && (s = r), fu(Nn(i, vt), xe(s, 2));
        }), Ek = Pe(function(i) {
          var s = Or(i);
          return s = typeof s == "function" ? s : r, fu(Nn(i, vt), r, s);
        }), kk = Pe(Au);
        function Ok(i, s) {
          return Yh(i || [], s || [], Co);
        }
        function Ak(i, s) {
          return Yh(i || [], s || [], Mo);
        }
        var Tk = Pe(function(i) {
          var s = i.length, f = s > 1 ? i[s - 1] : r;
          return f = typeof f == "function" ? (i.pop(), f) : r, Ig(i, f);
        });
        function Ng(i) {
          var s = T(i);
          return s.__chain__ = true, s;
        }
        function Rk(i, s) {
          return s(i), i;
        }
        function Ts(i, s) {
          return s(i);
        }
        var Ck = vn(function(i) {
          var s = i.length, f = s ? i[0] : 0, S = this.__wrapped__, O = function(C) {
            return Jc(C, i);
          };
          return s > 1 || this.__actions__.length || !(S instanceof Me) || !mn(f) ? this.thru(O) : (S = S.slice(f, +f + (s ? 1 : 0)), S.__actions__.push({
            func: Ts,
            args: [O],
            thisArg: r
          }), new Sr(S, this.__chain__).thru(function(C) {
            return s && !C.length && C.push(r), C;
          }));
        });
        function Pk() {
          return Ng(this);
        }
        function Ik() {
          return new Sr(this.value(), this.__chain__);
        }
        function Nk() {
          this.__values__ === r && (this.__values__ = Gg(this.value()));
          var i = this.__index__ >= this.__values__.length, s = i ? r : this.__values__[this.__index__++];
          return { done: i, value: s };
        }
        function Mk() {
          return this;
        }
        function $k(i) {
          for (var s, f = this; f instanceof ps; ) {
            var S = Og(f);
            S.__index__ = 0, S.__values__ = r, s ? O.__wrapped__ = S : s = S;
            var O = S;
            f = f.__wrapped__;
          }
          return O.__wrapped__ = i, s;
        }
        function Dk() {
          var i = this.__wrapped__;
          if (i instanceof Me) {
            var s = i;
            return this.__actions__.length && (s = new Me(this)), s = s.reverse(), s.__actions__.push({
              func: Ts,
              args: [Ou],
              thisArg: r
            }), new Sr(s, this.__chain__);
          }
          return this.thru(Ou);
        }
        function Lk() {
          return Zh(this.__wrapped__, this.__actions__);
        }
        var zk = ws(function(i, s, f) {
          Ge.call(i, f) ? ++i[f] : hn(i, f, 1);
        });
        function Fk(i, s, f) {
          var S = Ae(i) ? lh : RS;
          return f && qt(i, s, f) && (s = r), S(i, xe(s, 3));
        }
        function Hk(i, s) {
          var f = Ae(i) ? Nn : Ih;
          return f(i, xe(s, 3));
        }
        var Wk = ag(Ag), Bk = ag(Tg);
        function jk(i, s) {
          return Nt(Rs(i, s), 1);
        }
        function Uk(i, s) {
          return Nt(Rs(i, s), Y);
        }
        function Vk(i, s, f) {
          return f = f === r ? 1 : Re(f), Nt(Rs(i, s), f);
        }
        function Mg(i, s) {
          var f = Ae(i) ? xr : Ln;
          return f(i, xe(s, 3));
        }
        function $g(i, s) {
          var f = Ae(i) ? u_ : Ph;
          return f(i, xe(s, 3));
        }
        var qk = ws(function(i, s, f) {
          Ge.call(i, f) ? i[f].push(s) : hn(i, f, [s]);
        });
        function Gk(i, s, f, S) {
          i = Jt(i) ? i : Ki(i), f = f && !S ? Re(f) : 0;
          var O = i.length;
          return f < 0 && (f = St(O + f, 0)), Ms(i) ? f <= O && i.indexOf(s, f) > -1 : !!O && Di(i, s, f) > -1;
        }
        var Kk = Pe(function(i, s, f) {
          var S = -1, O = typeof s == "function", C = Jt(i) ? J(i.length) : [];
          return Ln(i, function(M) {
            C[++S] = O ? or(s, M, f) : Io(M, s, f);
          }), C;
        }), Zk = ws(function(i, s, f) {
          hn(i, f, s);
        });
        function Rs(i, s) {
          var f = Ae(i) ? st : zh;
          return f(i, xe(s, 3));
        }
        function Yk(i, s, f, S) {
          return i == null ? [] : (Ae(s) || (s = s == null ? [] : [s]), f = S ? r : f, Ae(f) || (f = f == null ? [] : [f]), Bh(i, s, f));
        }
        var Xk = ws(function(i, s, f) {
          i[f ? 0 : 1].push(s);
        }, function() {
          return [[], []];
        });
        function Jk(i, s, f) {
          var S = Ae(i) ? Fc : dh, O = arguments.length < 3;
          return S(i, xe(s, 4), f, O, Ln);
        }
        function Qk(i, s, f) {
          var S = Ae(i) ? f_ : dh, O = arguments.length < 3;
          return S(i, xe(s, 4), f, O, Ph);
        }
        function eO(i, s) {
          var f = Ae(i) ? Nn : Ih;
          return f(i, Is(xe(s, 3)));
        }
        function tO(i) {
          var s = Ae(i) ? Ah : GS;
          return s(i);
        }
        function rO(i, s, f) {
          (f ? qt(i, s, f) : s === r) ? s = 1 : s = Re(s);
          var S = Ae(i) ? ES : KS;
          return S(i, s);
        }
        function nO(i) {
          var s = Ae(i) ? kS : YS;
          return s(i);
        }
        function iO(i) {
          if (i == null)
            return 0;
          if (Jt(i))
            return Ms(i) ? zi(i) : i.length;
          var s = Ht(i);
          return s == he || s == zt ? i.size : iu(i).length;
        }
        function oO(i, s, f) {
          var S = Ae(i) ? Hc : XS;
          return f && qt(i, s, f) && (s = r), S(i, xe(s, 3));
        }
        var aO = Pe(function(i, s) {
          if (i == null)
            return [];
          var f = s.length;
          return f > 1 && qt(i, s[0], s[1]) ? s = [] : f > 2 && qt(s[0], s[1], s[2]) && (s = [s[0]]), Bh(i, Nt(s, 1), []);
        }), Cs = H_ || function() {
          return It.Date.now();
        };
        function sO(i, s) {
          if (typeof s != "function")
            throw new _r(l);
          return i = Re(i), function() {
            if (--i < 1)
              return s.apply(this, arguments);
          };
        }
        function Dg(i, s, f) {
          return s = f ? r : s, s = i && s == null ? i.length : s, gn(i, z, r, r, r, r, s);
        }
        function Lg(i, s) {
          var f;
          if (typeof s != "function")
            throw new _r(l);
          return i = Re(i), function() {
            return --i > 0 && (f = s.apply(this, arguments)), i <= 1 && (s = r), f;
          };
        }
        var Tu = Pe(function(i, s, f) {
          var S = b;
          if (f.length) {
            var O = $n(f, qi(Tu));
            S |= E;
          }
          return gn(i, S, s, f, O);
        }), zg = Pe(function(i, s, f) {
          var S = b | m;
          if (f.length) {
            var O = $n(f, qi(zg));
            S |= E;
          }
          return gn(s, S, i, f, O);
        });
        function Fg(i, s, f) {
          s = f ? r : s;
          var S = gn(i, x, r, r, r, r, r, s);
          return S.placeholder = Fg.placeholder, S;
        }
        function Hg(i, s, f) {
          s = f ? r : s;
          var S = gn(i, k, r, r, r, r, r, s);
          return S.placeholder = Hg.placeholder, S;
        }
        function Wg(i, s, f) {
          var S, O, C, M, H, q, re = 0, ne = false, se = false, pe = true;
          if (typeof i != "function")
            throw new _r(l);
          s = Ar(s) || 0, ft(f) && (ne = !!f.leading, se = "maxWait" in f, C = se ? St(Ar(f.maxWait) || 0, s) : C, pe = "trailing" in f ? !!f.trailing : pe);
          function ye(mt) {
            var zr = S, wn = O;
            return S = O = r, re = mt, M = i.apply(wn, zr), M;
          }
          function _e(mt) {
            return re = mt, H = Lo(Ne, s), ne ? ye(mt) : M;
          }
          function Ce(mt) {
            var zr = mt - q, wn = mt - re, av = s - zr;
            return se ? Ft(av, C - wn) : av;
          }
          function Se(mt) {
            var zr = mt - q, wn = mt - re;
            return q === r || zr >= s || zr < 0 || se && wn >= C;
          }
          function Ne() {
            var mt = Cs();
            if (Se(mt))
              return De(mt);
            H = Lo(Ne, Ce(mt));
          }
          function De(mt) {
            return H = r, pe && S ? ye(mt) : (S = O = r, M);
          }
          function cr() {
            H !== r && Xh(H), re = 0, S = q = O = H = r;
          }
          function Gt() {
            return H === r ? M : De(Cs());
          }
          function ur() {
            var mt = Cs(), zr = Se(mt);
            if (S = arguments, O = this, q = mt, zr) {
              if (H === r)
                return _e(q);
              if (se)
                return Xh(H), H = Lo(Ne, s), ye(q);
            }
            return H === r && (H = Lo(Ne, s)), M;
          }
          return ur.cancel = cr, ur.flush = Gt, ur;
        }
        var lO = Pe(function(i, s) {
          return Ch(i, 1, s);
        }), cO = Pe(function(i, s, f) {
          return Ch(i, Ar(s) || 0, f);
        });
        function uO(i) {
          return gn(i, P);
        }
        function Ps(i, s) {
          if (typeof i != "function" || s != null && typeof s != "function")
            throw new _r(l);
          var f = function() {
            var S = arguments, O = s ? s.apply(this, S) : S[0], C = f.cache;
            if (C.has(O))
              return C.get(O);
            var M = i.apply(this, S);
            return f.cache = C.set(O, M) || C, M;
          };
          return f.cache = new (Ps.Cache || pn)(), f;
        }
        Ps.Cache = pn;
        function Is(i) {
          if (typeof i != "function")
            throw new _r(l);
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return !i.call(this);
              case 1:
                return !i.call(this, s[0]);
              case 2:
                return !i.call(this, s[0], s[1]);
              case 3:
                return !i.call(this, s[0], s[1], s[2]);
            }
            return !i.apply(this, s);
          };
        }
        function fO(i) {
          return Lg(2, i);
        }
        var dO = JS(function(i, s) {
          s = s.length == 1 && Ae(s[0]) ? st(s[0], ar(xe())) : st(Nt(s, 1), ar(xe()));
          var f = s.length;
          return Pe(function(S) {
            for (var O = -1, C = Ft(S.length, f); ++O < C; )
              S[O] = s[O].call(this, S[O]);
            return or(i, this, S);
          });
        }), Ru = Pe(function(i, s) {
          var f = $n(s, qi(Ru));
          return gn(i, E, r, s, f);
        }), Bg = Pe(function(i, s) {
          var f = $n(s, qi(Bg));
          return gn(i, R, r, s, f);
        }), pO = vn(function(i, s) {
          return gn(i, A, r, r, r, s);
        });
        function hO(i, s) {
          if (typeof i != "function")
            throw new _r(l);
          return s = s === r ? s : Re(s), Pe(i, s);
        }
        function gO(i, s) {
          if (typeof i != "function")
            throw new _r(l);
          return s = s == null ? 0 : St(Re(s), 0), Pe(function(f) {
            var S = f[s], O = Hn(f, 0, s);
            return S && Mn(O, S), or(i, this, O);
          });
        }
        function vO(i, s, f) {
          var S = true, O = true;
          if (typeof i != "function")
            throw new _r(l);
          return ft(f) && (S = "leading" in f ? !!f.leading : S, O = "trailing" in f ? !!f.trailing : O), Wg(i, s, {
            leading: S,
            maxWait: s,
            trailing: O
          });
        }
        function mO(i) {
          return Dg(i, 1);
        }
        function bO(i, s) {
          return Ru(pu(s), i);
        }
        function yO() {
          if (!arguments.length)
            return [];
          var i = arguments[0];
          return Ae(i) ? i : [i];
        }
        function wO(i) {
          return Er(i, y);
        }
        function xO(i, s) {
          return s = typeof s == "function" ? s : r, Er(i, y, s);
        }
        function _O(i) {
          return Er(i, h | y);
        }
        function SO(i, s) {
          return s = typeof s == "function" ? s : r, Er(i, h | y, s);
        }
        function EO(i, s) {
          return s == null || Rh(i, s, Tt(s));
        }
        function Lr(i, s) {
          return i === s || i !== i && s !== s;
        }
        var kO = Es(tu), OO = Es(function(i, s) {
          return i >= s;
        }), pi = $h(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? $h : function(i) {
          return ht(i) && Ge.call(i, "callee") && !xh.call(i, "callee");
        }, Ae = J.isArray, AO = rh ? ar(rh) : $S;
        function Jt(i) {
          return i != null && Ns(i.length) && !bn(i);
        }
        function vt(i) {
          return ht(i) && Jt(i);
        }
        function TO(i) {
          return i === true || i === false || ht(i) && Vt(i) == ce;
        }
        var Wn = B_ || Hu, RO = nh ? ar(nh) : DS;
        function CO(i) {
          return ht(i) && i.nodeType === 1 && !zo(i);
        }
        function PO(i) {
          if (i == null)
            return true;
          if (Jt(i) && (Ae(i) || typeof i == "string" || typeof i.splice == "function" || Wn(i) || Gi(i) || pi(i)))
            return !i.length;
          var s = Ht(i);
          if (s == he || s == zt)
            return !i.size;
          if (Do(i))
            return !iu(i).length;
          for (var f in i)
            if (Ge.call(i, f))
              return false;
          return true;
        }
        function IO(i, s) {
          return No(i, s);
        }
        function NO(i, s, f) {
          f = typeof f == "function" ? f : r;
          var S = f ? f(i, s) : r;
          return S === r ? No(i, s, r, f) : !!S;
        }
        function Cu(i) {
          if (!ht(i))
            return false;
          var s = Vt(i);
          return s == we || s == fe || typeof i.message == "string" && typeof i.name == "string" && !zo(i);
        }
        function MO(i) {
          return typeof i == "number" && Sh(i);
        }
        function bn(i) {
          if (!ft(i))
            return false;
          var s = Vt(i);
          return s == Z || s == He || s == ie || s == yc;
        }
        function jg(i) {
          return typeof i == "number" && i == Re(i);
        }
        function Ns(i) {
          return typeof i == "number" && i > -1 && i % 1 == 0 && i <= G;
        }
        function ft(i) {
          var s = typeof i;
          return i != null && (s == "object" || s == "function");
        }
        function ht(i) {
          return i != null && typeof i == "object";
        }
        var Ug = ih ? ar(ih) : zS;
        function $O(i, s) {
          return i === s || nu(i, s, wu(s));
        }
        function DO(i, s, f) {
          return f = typeof f == "function" ? f : r, nu(i, s, wu(s), f);
        }
        function LO(i) {
          return Vg(i) && i != +i;
        }
        function zO(i) {
          if (xE(i))
            throw new Oe(a);
          return Dh(i);
        }
        function FO(i) {
          return i === null;
        }
        function HO(i) {
          return i == null;
        }
        function Vg(i) {
          return typeof i == "number" || ht(i) && Vt(i) == Pt;
        }
        function zo(i) {
          if (!ht(i) || Vt(i) != Ut)
            return false;
          var s = as(i);
          if (s === null)
            return true;
          var f = Ge.call(s, "constructor") && s.constructor;
          return typeof f == "function" && f instanceof f && rs.call(f) == D_;
        }
        var Pu = oh ? ar(oh) : FS;
        function WO(i) {
          return jg(i) && i >= -G && i <= G;
        }
        var qg = ah ? ar(ah) : HS;
        function Ms(i) {
          return typeof i == "string" || !Ae(i) && ht(i) && Vt(i) == Cn;
        }
        function lr(i) {
          return typeof i == "symbol" || ht(i) && Vt(i) == ii;
        }
        var Gi = sh ? ar(sh) : WS;
        function BO(i) {
          return i === r;
        }
        function jO(i) {
          return ht(i) && Ht(i) == Pn;
        }
        function UO(i) {
          return ht(i) && Vt(i) == Ga;
        }
        var VO = Es(ou), qO = Es(function(i, s) {
          return i <= s;
        });
        function Gg(i) {
          if (!i)
            return [];
          if (Jt(i))
            return Ms(i) ? $r(i) : Xt(i);
          if (ko && i[ko])
            return E_(i[ko]());
          var s = Ht(i), f = s == he ? qc : s == zt ? Qa : Ki;
          return f(i);
        }
        function yn(i) {
          if (!i)
            return i === 0 ? i : 0;
          if (i = Ar(i), i === Y || i === -Y) {
            var s = i < 0 ? -1 : 1;
            return s * ge;
          }
          return i === i ? i : 0;
        }
        function Re(i) {
          var s = yn(i), f = s % 1;
          return s === s ? f ? s - f : s : 0;
        }
        function Kg(i) {
          return i ? ci(Re(i), 0, V) : 0;
        }
        function Ar(i) {
          if (typeof i == "number")
            return i;
          if (lr(i))
            return L;
          if (ft(i)) {
            var s = typeof i.valueOf == "function" ? i.valueOf() : i;
            i = ft(s) ? s + "" : s;
          }
          if (typeof i != "string")
            return i === 0 ? i : +i;
          i = ph(i);
          var f = A1.test(i);
          return f || R1.test(i) ? s_(i.slice(2), f ? 2 : 8) : O1.test(i) ? L : +i;
        }
        function Zg(i) {
          return Gr(i, Qt(i));
        }
        function GO(i) {
          return i ? ci(Re(i), -G, G) : i === 0 ? i : 0;
        }
        function We(i) {
          return i == null ? "" : sr(i);
        }
        var KO = Ui(function(i, s) {
          if (Do(s) || Jt(s)) {
            Gr(s, Tt(s), i);
            return;
          }
          for (var f in s)
            Ge.call(s, f) && Co(i, f, s[f]);
        }), Yg = Ui(function(i, s) {
          Gr(s, Qt(s), i);
        }), $s = Ui(function(i, s, f, S) {
          Gr(s, Qt(s), i, S);
        }), ZO = Ui(function(i, s, f, S) {
          Gr(s, Tt(s), i, S);
        }), YO = vn(Jc);
        function XO(i, s) {
          var f = ji(i);
          return s == null ? f : Th(f, s);
        }
        var JO = Pe(function(i, s) {
          i = tt(i);
          var f = -1, S = s.length, O = S > 2 ? s[2] : r;
          for (O && qt(s[0], s[1], O) && (S = 1); ++f < S; )
            for (var C = s[f], M = Qt(C), H = -1, q = M.length; ++H < q; ) {
              var re = M[H], ne = i[re];
              (ne === r || Lr(ne, Hi[re]) && !Ge.call(i, re)) && (i[re] = C[re]);
            }
          return i;
        }), QO = Pe(function(i) {
          return i.push(r, pg), or(Xg, r, i);
        });
        function eA(i, s) {
          return ch(i, xe(s, 3), qr);
        }
        function tA(i, s) {
          return ch(i, xe(s, 3), eu);
        }
        function rA(i, s) {
          return i == null ? i : Qc(i, xe(s, 3), Qt);
        }
        function nA(i, s) {
          return i == null ? i : Nh(i, xe(s, 3), Qt);
        }
        function iA(i, s) {
          return i && qr(i, xe(s, 3));
        }
        function oA(i, s) {
          return i && eu(i, xe(s, 3));
        }
        function aA(i) {
          return i == null ? [] : vs(i, Tt(i));
        }
        function sA(i) {
          return i == null ? [] : vs(i, Qt(i));
        }
        function Iu(i, s, f) {
          var S = i == null ? r : ui(i, s);
          return S === r ? f : S;
        }
        function lA(i, s) {
          return i != null && vg(i, s, PS);
        }
        function Nu(i, s) {
          return i != null && vg(i, s, IS);
        }
        var cA = lg(function(i, s, f) {
          s != null && typeof s.toString != "function" && (s = ns.call(s)), i[s] = f;
        }, $u(er)), uA = lg(function(i, s, f) {
          s != null && typeof s.toString != "function" && (s = ns.call(s)), Ge.call(i, s) ? i[s].push(f) : i[s] = [f];
        }, xe), fA = Pe(Io);
        function Tt(i) {
          return Jt(i) ? Oh(i) : iu(i);
        }
        function Qt(i) {
          return Jt(i) ? Oh(i, true) : BS(i);
        }
        function dA(i, s) {
          var f = {};
          return s = xe(s, 3), qr(i, function(S, O, C) {
            hn(f, s(S, O, C), S);
          }), f;
        }
        function pA(i, s) {
          var f = {};
          return s = xe(s, 3), qr(i, function(S, O, C) {
            hn(f, O, s(S, O, C));
          }), f;
        }
        var hA = Ui(function(i, s, f) {
          ms(i, s, f);
        }), Xg = Ui(function(i, s, f, S) {
          ms(i, s, f, S);
        }), gA = vn(function(i, s) {
          var f = {};
          if (i == null)
            return f;
          var S = false;
          s = st(s, function(C) {
            return C = Fn(C, i), S || (S = C.length > 1), C;
          }), Gr(i, bu(i), f), S && (f = Er(f, h | g | y, cE));
          for (var O = s.length; O--; )
            uu(f, s[O]);
          return f;
        });
        function vA(i, s) {
          return Jg(i, Is(xe(s)));
        }
        var mA = vn(function(i, s) {
          return i == null ? {} : US(i, s);
        });
        function Jg(i, s) {
          if (i == null)
            return {};
          var f = st(bu(i), function(S) {
            return [S];
          });
          return s = xe(s), jh(i, f, function(S, O) {
            return s(S, O[0]);
          });
        }
        function bA(i, s, f) {
          s = Fn(s, i);
          var S = -1, O = s.length;
          for (O || (O = 1, i = r); ++S < O; ) {
            var C = i == null ? r : i[Kr(s[S])];
            C === r && (S = O, C = f), i = bn(C) ? C.call(i) : C;
          }
          return i;
        }
        function yA(i, s, f) {
          return i == null ? i : Mo(i, s, f);
        }
        function wA(i, s, f, S) {
          return S = typeof S == "function" ? S : r, i == null ? i : Mo(i, s, f, S);
        }
        var Qg = fg(Tt), ev = fg(Qt);
        function xA(i, s, f) {
          var S = Ae(i), O = S || Wn(i) || Gi(i);
          if (s = xe(s, 4), f == null) {
            var C = i && i.constructor;
            O ? f = S ? new C() : [] : ft(i) ? f = bn(C) ? ji(as(i)) : {} : f = {};
          }
          return (O ? xr : qr)(i, function(M, H, q) {
            return s(f, M, H, q);
          }), f;
        }
        function _A(i, s) {
          return i == null ? true : uu(i, s);
        }
        function SA(i, s, f) {
          return i == null ? i : Kh(i, s, pu(f));
        }
        function EA(i, s, f, S) {
          return S = typeof S == "function" ? S : r, i == null ? i : Kh(i, s, pu(f), S);
        }
        function Ki(i) {
          return i == null ? [] : Vc(i, Tt(i));
        }
        function kA(i) {
          return i == null ? [] : Vc(i, Qt(i));
        }
        function OA(i, s, f) {
          return f === r && (f = s, s = r), f !== r && (f = Ar(f), f = f === f ? f : 0), s !== r && (s = Ar(s), s = s === s ? s : 0), ci(Ar(i), s, f);
        }
        function AA(i, s, f) {
          return s = yn(s), f === r ? (f = s, s = 0) : f = yn(f), i = Ar(i), NS(i, s, f);
        }
        function TA(i, s, f) {
          if (f && typeof f != "boolean" && qt(i, s, f) && (s = f = r), f === r && (typeof s == "boolean" ? (f = s, s = r) : typeof i == "boolean" && (f = i, i = r)), i === r && s === r ? (i = 0, s = 1) : (i = yn(i), s === r ? (s = i, i = 0) : s = yn(s)), i > s) {
            var S = i;
            i = s, s = S;
          }
          if (f || i % 1 || s % 1) {
            var O = Eh();
            return Ft(i + O * (s - i + a_("1e-" + ((O + "").length - 1))), s);
          }
          return su(i, s);
        }
        var RA = Vi(function(i, s, f) {
          return s = s.toLowerCase(), i + (f ? tv(s) : s);
        });
        function tv(i) {
          return Mu(We(i).toLowerCase());
        }
        function rv(i) {
          return i = We(i), i && i.replace(P1, y_).replace(Y1, "");
        }
        function CA(i, s, f) {
          i = We(i), s = sr(s);
          var S = i.length;
          f = f === r ? S : ci(Re(f), 0, S);
          var O = f;
          return f -= s.length, f >= 0 && i.slice(f, O) == s;
        }
        function PA(i) {
          return i = We(i), i && f1.test(i) ? i.replace(Np, w_) : i;
        }
        function IA(i) {
          return i = We(i), i && m1.test(i) ? i.replace(Rc, "\\$&") : i;
        }
        var NA = Vi(function(i, s, f) {
          return i + (f ? "-" : "") + s.toLowerCase();
        }), MA = Vi(function(i, s, f) {
          return i + (f ? " " : "") + s.toLowerCase();
        }), $A = og("toLowerCase");
        function DA(i, s, f) {
          i = We(i), s = Re(s);
          var S = s ? zi(i) : 0;
          if (!s || S >= s)
            return i;
          var O = (s - S) / 2;
          return Ss(us(O), f) + i + Ss(cs(O), f);
        }
        function LA(i, s, f) {
          i = We(i), s = Re(s);
          var S = s ? zi(i) : 0;
          return s && S < s ? i + Ss(s - S, f) : i;
        }
        function zA(i, s, f) {
          i = We(i), s = Re(s);
          var S = s ? zi(i) : 0;
          return s && S < s ? Ss(s - S, f) + i : i;
        }
        function FA(i, s, f) {
          return f || s == null ? s = 0 : s && (s = +s), q_(We(i).replace(Cc, ""), s || 0);
        }
        function HA(i, s, f) {
          return (f ? qt(i, s, f) : s === r) ? s = 1 : s = Re(s), lu(We(i), s);
        }
        function WA() {
          var i = arguments, s = We(i[0]);
          return i.length < 3 ? s : s.replace(i[1], i[2]);
        }
        var BA = Vi(function(i, s, f) {
          return i + (f ? "_" : "") + s.toLowerCase();
        });
        function jA(i, s, f) {
          return f && typeof f != "number" && qt(i, s, f) && (s = f = r), f = f === r ? V : f >>> 0, f ? (i = We(i), i && (typeof s == "string" || s != null && !Pu(s)) && (s = sr(s), !s && Li(i)) ? Hn($r(i), 0, f) : i.split(s, f)) : [];
        }
        var UA = Vi(function(i, s, f) {
          return i + (f ? " " : "") + Mu(s);
        });
        function VA(i, s, f) {
          return i = We(i), f = f == null ? 0 : ci(Re(f), 0, i.length), s = sr(s), i.slice(f, f + s.length) == s;
        }
        function qA(i, s, f) {
          var S = T.templateSettings;
          f && qt(i, s, f) && (s = r), i = We(i), s = $s({}, s, S, dg);
          var O = $s({}, s.imports, S.imports, dg), C = Tt(O), M = Vc(O, C), H, q, re = 0, ne = s.interpolate || Ka, se = "__p += '", pe = Gc(
            (s.escape || Ka).source + "|" + ne.source + "|" + (ne === Mp ? k1 : Ka).source + "|" + (s.evaluate || Ka).source + "|$",
            "g"
          ), ye = "//# sourceURL=" + (Ge.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++t_ + "]") + `
`;
          i.replace(pe, function(Se, Ne, De, cr, Gt, ur) {
            return De || (De = cr), se += i.slice(re, ur).replace(I1, x_), Ne && (H = true, se += `' +
__e(` + Ne + `) +
'`), Gt && (q = true, se += `';
` + Gt + `;
__p += '`), De && (se += `' +
((__t = (` + De + `)) == null ? '' : __t) +
'`), re = ur + Se.length, Se;
          }), se += `';
`;
          var _e = Ge.call(s, "variable") && s.variable;
          if (!_e)
            se = `with (obj) {
` + se + `
}
`;
          else if (S1.test(_e))
            throw new Oe(c);
          se = (q ? se.replace(s1, "") : se).replace(l1, "$1").replace(c1, "$1;"), se = "function(" + (_e || "obj") + `) {
` + (_e ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (H ? ", __e = _.escape" : "") + (q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + se + `return __p
}`;
          var Ce = iv(function() {
            return ze(C, ye + "return " + se).apply(r, M);
          });
          if (Ce.source = se, Cu(Ce))
            throw Ce;
          return Ce;
        }
        function GA(i) {
          return We(i).toLowerCase();
        }
        function KA(i) {
          return We(i).toUpperCase();
        }
        function ZA(i, s, f) {
          if (i = We(i), i && (f || s === r))
            return ph(i);
          if (!i || !(s = sr(s)))
            return i;
          var S = $r(i), O = $r(s), C = hh(S, O), M = gh(S, O) + 1;
          return Hn(S, C, M).join("");
        }
        function YA(i, s, f) {
          if (i = We(i), i && (f || s === r))
            return i.slice(0, mh(i) + 1);
          if (!i || !(s = sr(s)))
            return i;
          var S = $r(i), O = gh(S, $r(s)) + 1;
          return Hn(S, 0, O).join("");
        }
        function XA(i, s, f) {
          if (i = We(i), i && (f || s === r))
            return i.replace(Cc, "");
          if (!i || !(s = sr(s)))
            return i;
          var S = $r(i), O = hh(S, $r(s));
          return Hn(S, O).join("");
        }
        function JA(i, s) {
          var f = B, S = $;
          if (ft(s)) {
            var O = "separator" in s ? s.separator : O;
            f = "length" in s ? Re(s.length) : f, S = "omission" in s ? sr(s.omission) : S;
          }
          i = We(i);
          var C = i.length;
          if (Li(i)) {
            var M = $r(i);
            C = M.length;
          }
          if (f >= C)
            return i;
          var H = f - zi(S);
          if (H < 1)
            return S;
          var q = M ? Hn(M, 0, H).join("") : i.slice(0, H);
          if (O === r)
            return q + S;
          if (M && (H += q.length - H), Pu(O)) {
            if (i.slice(H).search(O)) {
              var re, ne = q;
              for (O.global || (O = Gc(O.source, We($p.exec(O)) + "g")), O.lastIndex = 0; re = O.exec(ne); )
                var se = re.index;
              q = q.slice(0, se === r ? H : se);
            }
          } else if (i.indexOf(sr(O), H) != H) {
            var pe = q.lastIndexOf(O);
            pe > -1 && (q = q.slice(0, pe));
          }
          return q + S;
        }
        function QA(i) {
          return i = We(i), i && u1.test(i) ? i.replace(Ip, T_) : i;
        }
        var eT = Vi(function(i, s, f) {
          return i + (f ? " " : "") + s.toUpperCase();
        }), Mu = og("toUpperCase");
        function nv(i, s, f) {
          return i = We(i), s = f ? r : s, s === r ? S_(i) ? P_(i) : h_(i) : i.match(s) || [];
        }
        var iv = Pe(function(i, s) {
          try {
            return or(i, r, s);
          } catch (f) {
            return Cu(f) ? f : new Oe(f);
          }
        }), tT = vn(function(i, s) {
          return xr(s, function(f) {
            f = Kr(f), hn(i, f, Tu(i[f], i));
          }), i;
        });
        function rT(i) {
          var s = i == null ? 0 : i.length, f = xe();
          return i = s ? st(i, function(S) {
            if (typeof S[1] != "function")
              throw new _r(l);
            return [f(S[0]), S[1]];
          }) : [], Pe(function(S) {
            for (var O = -1; ++O < s; ) {
              var C = i[O];
              if (or(C[0], this, S))
                return or(C[1], this, S);
            }
          });
        }
        function nT(i) {
          return TS(Er(i, h));
        }
        function $u(i) {
          return function() {
            return i;
          };
        }
        function iT(i, s) {
          return i == null || i !== i ? s : i;
        }
        var oT = sg(), aT = sg(true);
        function er(i) {
          return i;
        }
        function Du(i) {
          return Lh(typeof i == "function" ? i : Er(i, h));
        }
        function sT(i) {
          return Fh(Er(i, h));
        }
        function lT(i, s) {
          return Hh(i, Er(s, h));
        }
        var cT = Pe(function(i, s) {
          return function(f) {
            return Io(f, i, s);
          };
        }), uT = Pe(function(i, s) {
          return function(f) {
            return Io(i, f, s);
          };
        });
        function Lu(i, s, f) {
          var S = Tt(s), O = vs(s, S);
          f == null && !(ft(s) && (O.length || !S.length)) && (f = s, s = i, i = this, O = vs(s, Tt(s)));
          var C = !(ft(f) && "chain" in f) || !!f.chain, M = bn(i);
          return xr(O, function(H) {
            var q = s[H];
            i[H] = q, M && (i.prototype[H] = function() {
              var re = this.__chain__;
              if (C || re) {
                var ne = i(this.__wrapped__), se = ne.__actions__ = Xt(this.__actions__);
                return se.push({ func: q, args: arguments, thisArg: i }), ne.__chain__ = re, ne;
              }
              return q.apply(i, Mn([this.value()], arguments));
            });
          }), i;
        }
        function fT() {
          return It._ === this && (It._ = L_), this;
        }
        function zu() {
        }
        function dT(i) {
          return i = Re(i), Pe(function(s) {
            return Wh(s, i);
          });
        }
        var pT = gu(st), hT = gu(lh), gT = gu(Hc);
        function ov(i) {
          return _u(i) ? Wc(Kr(i)) : VS(i);
        }
        function vT(i) {
          return function(s) {
            return i == null ? r : ui(i, s);
          };
        }
        var mT = cg(), bT = cg(true);
        function Fu() {
          return [];
        }
        function Hu() {
          return false;
        }
        function yT() {
          return {};
        }
        function wT() {
          return "";
        }
        function xT() {
          return true;
        }
        function _T(i, s) {
          if (i = Re(i), i < 1 || i > G)
            return [];
          var f = V, S = Ft(i, V);
          s = xe(s), i -= V;
          for (var O = Uc(S, s); ++f < i; )
            s(f);
          return O;
        }
        function ST(i) {
          return Ae(i) ? st(i, Kr) : lr(i) ? [i] : Xt(kg(We(i)));
        }
        function ET(i) {
          var s = ++$_;
          return We(i) + s;
        }
        var kT = _s(function(i, s) {
          return i + s;
        }, 0), OT = vu("ceil"), AT = _s(function(i, s) {
          return i / s;
        }, 1), TT = vu("floor");
        function RT(i) {
          return i && i.length ? gs(i, er, tu) : r;
        }
        function CT(i, s) {
          return i && i.length ? gs(i, xe(s, 2), tu) : r;
        }
        function PT(i) {
          return fh(i, er);
        }
        function IT(i, s) {
          return fh(i, xe(s, 2));
        }
        function NT(i) {
          return i && i.length ? gs(i, er, ou) : r;
        }
        function MT(i, s) {
          return i && i.length ? gs(i, xe(s, 2), ou) : r;
        }
        var $T = _s(function(i, s) {
          return i * s;
        }, 1), DT = vu("round"), LT = _s(function(i, s) {
          return i - s;
        }, 0);
        function zT(i) {
          return i && i.length ? jc(i, er) : 0;
        }
        function FT(i, s) {
          return i && i.length ? jc(i, xe(s, 2)) : 0;
        }
        return T.after = sO, T.ary = Dg, T.assign = KO, T.assignIn = Yg, T.assignInWith = $s, T.assignWith = ZO, T.at = YO, T.before = Lg, T.bind = Tu, T.bindAll = tT, T.bindKey = zg, T.castArray = yO, T.chain = Ng, T.chunk = TE, T.compact = RE, T.concat = CE, T.cond = rT, T.conforms = nT, T.constant = $u, T.countBy = zk, T.create = XO, T.curry = Fg, T.curryRight = Hg, T.debounce = Wg, T.defaults = JO, T.defaultsDeep = QO, T.defer = lO, T.delay = cO, T.difference = PE, T.differenceBy = IE, T.differenceWith = NE, T.drop = ME, T.dropRight = $E, T.dropRightWhile = DE, T.dropWhile = LE, T.fill = zE, T.filter = Hk, T.flatMap = jk, T.flatMapDeep = Uk, T.flatMapDepth = Vk, T.flatten = Rg, T.flattenDeep = FE, T.flattenDepth = HE, T.flip = uO, T.flow = oT, T.flowRight = aT, T.fromPairs = WE, T.functions = aA, T.functionsIn = sA, T.groupBy = qk, T.initial = jE, T.intersection = UE, T.intersectionBy = VE, T.intersectionWith = qE, T.invert = cA, T.invertBy = uA, T.invokeMap = Kk, T.iteratee = Du, T.keyBy = Zk, T.keys = Tt, T.keysIn = Qt, T.map = Rs, T.mapKeys = dA, T.mapValues = pA, T.matches = sT, T.matchesProperty = lT, T.memoize = Ps, T.merge = hA, T.mergeWith = Xg, T.method = cT, T.methodOf = uT, T.mixin = Lu, T.negate = Is, T.nthArg = dT, T.omit = gA, T.omitBy = vA, T.once = fO, T.orderBy = Yk, T.over = pT, T.overArgs = dO, T.overEvery = hT, T.overSome = gT, T.partial = Ru, T.partialRight = Bg, T.partition = Xk, T.pick = mA, T.pickBy = Jg, T.property = ov, T.propertyOf = vT, T.pull = YE, T.pullAll = Pg, T.pullAllBy = XE, T.pullAllWith = JE, T.pullAt = QE, T.range = mT, T.rangeRight = bT, T.rearg = pO, T.reject = eO, T.remove = ek, T.rest = hO, T.reverse = Ou, T.sampleSize = rO, T.set = yA, T.setWith = wA, T.shuffle = nO, T.slice = tk, T.sortBy = aO, T.sortedUniq = lk, T.sortedUniqBy = ck, T.split = jA, T.spread = gO, T.tail = uk, T.take = fk, T.takeRight = dk, T.takeRightWhile = pk, T.takeWhile = hk, T.tap = Rk, T.throttle = vO, T.thru = Ts, T.toArray = Gg, T.toPairs = Qg, T.toPairsIn = ev, T.toPath = ST, T.toPlainObject = Zg, T.transform = xA, T.unary = mO, T.union = gk, T.unionBy = vk, T.unionWith = mk, T.uniq = bk, T.uniqBy = yk, T.uniqWith = wk, T.unset = _A, T.unzip = Au, T.unzipWith = Ig, T.update = SA, T.updateWith = EA, T.values = Ki, T.valuesIn = kA, T.without = xk, T.words = nv, T.wrap = bO, T.xor = _k, T.xorBy = Sk, T.xorWith = Ek, T.zip = kk, T.zipObject = Ok, T.zipObjectDeep = Ak, T.zipWith = Tk, T.entries = Qg, T.entriesIn = ev, T.extend = Yg, T.extendWith = $s, Lu(T, T), T.add = kT, T.attempt = iv, T.camelCase = RA, T.capitalize = tv, T.ceil = OT, T.clamp = OA, T.clone = wO, T.cloneDeep = _O, T.cloneDeepWith = SO, T.cloneWith = xO, T.conformsTo = EO, T.deburr = rv, T.defaultTo = iT, T.divide = AT, T.endsWith = CA, T.eq = Lr, T.escape = PA, T.escapeRegExp = IA, T.every = Fk, T.find = Wk, T.findIndex = Ag, T.findKey = eA, T.findLast = Bk, T.findLastIndex = Tg, T.findLastKey = tA, T.floor = TT, T.forEach = Mg, T.forEachRight = $g, T.forIn = rA, T.forInRight = nA, T.forOwn = iA, T.forOwnRight = oA, T.get = Iu, T.gt = kO, T.gte = OO, T.has = lA, T.hasIn = Nu, T.head = Cg, T.identity = er, T.includes = Gk, T.indexOf = BE, T.inRange = AA, T.invoke = fA, T.isArguments = pi, T.isArray = Ae, T.isArrayBuffer = AO, T.isArrayLike = Jt, T.isArrayLikeObject = vt, T.isBoolean = TO, T.isBuffer = Wn, T.isDate = RO, T.isElement = CO, T.isEmpty = PO, T.isEqual = IO, T.isEqualWith = NO, T.isError = Cu, T.isFinite = MO, T.isFunction = bn, T.isInteger = jg, T.isLength = Ns, T.isMap = Ug, T.isMatch = $O, T.isMatchWith = DO, T.isNaN = LO, T.isNative = zO, T.isNil = HO, T.isNull = FO, T.isNumber = Vg, T.isObject = ft, T.isObjectLike = ht, T.isPlainObject = zo, T.isRegExp = Pu, T.isSafeInteger = WO, T.isSet = qg, T.isString = Ms, T.isSymbol = lr, T.isTypedArray = Gi, T.isUndefined = BO, T.isWeakMap = jO, T.isWeakSet = UO, T.join = GE, T.kebabCase = NA, T.last = Or, T.lastIndexOf = KE, T.lowerCase = MA, T.lowerFirst = $A, T.lt = VO, T.lte = qO, T.max = RT, T.maxBy = CT, T.mean = PT, T.meanBy = IT, T.min = NT, T.minBy = MT, T.stubArray = Fu, T.stubFalse = Hu, T.stubObject = yT, T.stubString = wT, T.stubTrue = xT, T.multiply = $T, T.nth = ZE, T.noConflict = fT, T.noop = zu, T.now = Cs, T.pad = DA, T.padEnd = LA, T.padStart = zA, T.parseInt = FA, T.random = TA, T.reduce = Jk, T.reduceRight = Qk, T.repeat = HA, T.replace = WA, T.result = bA, T.round = DT, T.runInContext = U, T.sample = tO, T.size = iO, T.snakeCase = BA, T.some = oO, T.sortedIndex = rk, T.sortedIndexBy = nk, T.sortedIndexOf = ik, T.sortedLastIndex = ok, T.sortedLastIndexBy = ak, T.sortedLastIndexOf = sk, T.startCase = UA, T.startsWith = VA, T.subtract = LT, T.sum = zT, T.sumBy = FT, T.template = qA, T.times = _T, T.toFinite = yn, T.toInteger = Re, T.toLength = Kg, T.toLower = GA, T.toNumber = Ar, T.toSafeInteger = GO, T.toString = We, T.toUpper = KA, T.trim = ZA, T.trimEnd = YA, T.trimStart = XA, T.truncate = JA, T.unescape = QA, T.uniqueId = ET, T.upperCase = eT, T.upperFirst = Mu, T.each = Mg, T.eachRight = $g, T.first = Cg, Lu(T, (function() {
          var i = {};
          return qr(T, function(s, f) {
            Ge.call(T.prototype, f) || (i[f] = s);
          }), i;
        })(), { chain: false }), T.VERSION = n, xr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
          T[i].placeholder = T;
        }), xr(["drop", "take"], function(i, s) {
          Me.prototype[i] = function(f) {
            f = f === r ? 1 : St(Re(f), 0);
            var S = this.__filtered__ && !s ? new Me(this) : this.clone();
            return S.__filtered__ ? S.__takeCount__ = Ft(f, S.__takeCount__) : S.__views__.push({
              size: Ft(f, V),
              type: i + (S.__dir__ < 0 ? "Right" : "")
            }), S;
          }, Me.prototype[i + "Right"] = function(f) {
            return this.reverse()[i](f).reverse();
          };
        }), xr(["filter", "map", "takeWhile"], function(i, s) {
          var f = s + 1, S = f == F || f == K;
          Me.prototype[i] = function(O) {
            var C = this.clone();
            return C.__iteratees__.push({
              iteratee: xe(O, 3),
              type: f
            }), C.__filtered__ = C.__filtered__ || S, C;
          };
        }), xr(["head", "last"], function(i, s) {
          var f = "take" + (s ? "Right" : "");
          Me.prototype[i] = function() {
            return this[f](1).value()[0];
          };
        }), xr(["initial", "tail"], function(i, s) {
          var f = "drop" + (s ? "" : "Right");
          Me.prototype[i] = function() {
            return this.__filtered__ ? new Me(this) : this[f](1);
          };
        }), Me.prototype.compact = function() {
          return this.filter(er);
        }, Me.prototype.find = function(i) {
          return this.filter(i).head();
        }, Me.prototype.findLast = function(i) {
          return this.reverse().find(i);
        }, Me.prototype.invokeMap = Pe(function(i, s) {
          return typeof i == "function" ? new Me(this) : this.map(function(f) {
            return Io(f, i, s);
          });
        }), Me.prototype.reject = function(i) {
          return this.filter(Is(xe(i)));
        }, Me.prototype.slice = function(i, s) {
          i = Re(i);
          var f = this;
          return f.__filtered__ && (i > 0 || s < 0) ? new Me(f) : (i < 0 ? f = f.takeRight(-i) : i && (f = f.drop(i)), s !== r && (s = Re(s), f = s < 0 ? f.dropRight(-s) : f.take(s - i)), f);
        }, Me.prototype.takeRightWhile = function(i) {
          return this.reverse().takeWhile(i).reverse();
        }, Me.prototype.toArray = function() {
          return this.take(V);
        }, qr(Me.prototype, function(i, s) {
          var f = /^(?:filter|find|map|reject)|While$/.test(s), S = /^(?:head|last)$/.test(s), O = T[S ? "take" + (s == "last" ? "Right" : "") : s], C = S || /^find/.test(s);
          O && (T.prototype[s] = function() {
            var M = this.__wrapped__, H = S ? [1] : arguments, q = M instanceof Me, re = H[0], ne = q || Ae(M), se = function(Ne) {
              var De = O.apply(T, Mn([Ne], H));
              return S && pe ? De[0] : De;
            };
            ne && f && typeof re == "function" && re.length != 1 && (q = ne = false);
            var pe = this.__chain__, ye = !!this.__actions__.length, _e = C && !pe, Ce = q && !ye;
            if (!C && ne) {
              M = Ce ? M : new Me(this);
              var Se = i.apply(M, H);
              return Se.__actions__.push({ func: Ts, args: [se], thisArg: r }), new Sr(Se, pe);
            }
            return _e && Ce ? i.apply(this, H) : (Se = this.thru(se), _e ? S ? Se.value()[0] : Se.value() : Se);
          });
        }), xr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
          var s = es[i], f = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", S = /^(?:pop|shift)$/.test(i);
          T.prototype[i] = function() {
            var O = arguments;
            if (S && !this.__chain__) {
              var C = this.value();
              return s.apply(Ae(C) ? C : [], O);
            }
            return this[f](function(M) {
              return s.apply(Ae(M) ? M : [], O);
            });
          };
        }), qr(Me.prototype, function(i, s) {
          var f = T[s];
          if (f) {
            var S = f.name + "";
            Ge.call(Bi, S) || (Bi[S] = []), Bi[S].push({ name: s, func: f });
          }
        }), Bi[xs(r, m).name] = [{
          name: "wrapper",
          func: r
        }], Me.prototype.clone = Q_, Me.prototype.reverse = eS, Me.prototype.value = tS, T.prototype.at = Ck, T.prototype.chain = Pk, T.prototype.commit = Ik, T.prototype.next = Nk, T.prototype.plant = $k, T.prototype.reverse = Dk, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = Lk, T.prototype.first = T.prototype.head, ko && (T.prototype[ko] = Mk), T;
      }), Fi = I_();
      oi ? ((oi.exports = Fi)._ = Fi, Dc._ = Fi) : It._ = Fi;
    }).call(UM);
  })(ga, ga.exports)), ga.exports;
}
var Xe = VM();
const db = {
  FdSave: Z4$1,
  FdWarningDanger: x3$1,
  FdInfoCircle: F5$1,
  FdInfoBold: R5$1
};
var bw = /* @__PURE__ */ ((e4) => (e4.ALERT = "alert", e4.CONFIRM = "confirm", e4))(bw || {}), lo = /* @__PURE__ */ ((e4) => (e4.PRIMARY = "primary", e4.WARNING = "warning", e4.DANGER = "danger", e4))(lo || {}), va = /* @__PURE__ */ ((e4) => (e4.CONFIRMED = "confirmed", e4.CANCELED = "canceled", e4))(va || {});
const yw = {
  [lo.PRIMARY]: {
    icon: "blue-500",
    button: "primary-dark"
  },
  [lo.DANGER]: {
    icon: "red-500",
    button: "primary-dark"
  },
  [lo.WARNING]: {
    icon: "yellow-400",
    button: "primary-dark"
  }
}, _f = ({
  color: e4 = lo.PRIMARY,
  variant: t = "solid",
  children: r,
  autoFocus: n,
  ...o
}) => {
  const a = yw[e4].button, l = t === "outlined" ? `bg-transparent text-white border border-white hover:border-white hover:bg-white hover:text-${a}` : `text-white bg-${a} border border-${a} hover:border-white hover:bg-primary-hover hover:text-white`;
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      autoFocus: n,
      className: it(
        "w-16 rounded px-2 py-1 text-xs font-medium hover:font-bold focus:outline-none",
        l
      ),
      ...o,
      children: r
    }
  );
}, qM = ({
  name: e4,
  color: t = lo.PRIMARY,
  className: r = "w-8 h-8"
}) => {
  const n = db[e4] || db.FdInfoCircle, o = `text-${yw[t].icon}`;
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(n, { className: it(r, o) });
}, m4 = ({
  id: e4,
  title: t,
  message: r,
  icon: n,
  type: o,
  color: a,
  zIndex: l = 3e3,
  views: c,
  width: u = 520,
  hasOverlay: d = true,
  container: p,
  onClose: h,
  onEdit: g
}) => {
  const y = (b) => {
    h({
      id: e4,
      reason: b
    });
  };
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    function b(m) {
      m.key === "Escape" && y(va.CANCELED);
    }
    return window.addEventListener("keyup", b), () => {
      window.removeEventListener("keyup", b);
    };
  }, []);
  const _ = Xe.merge(
    Xe.values(c == null ? void 0 : c.toggles).flatMap((b) => b.value ? b.warnings || [] : []),
    c == null ? void 0 : c.tips
  ), v = (b, m) => {
    var x;
    if (!(c != null && c.toggles)) return;
    const w = Xe.cloneDeep(c);
    (x = w.toggles) != null && x[b] && (w.toggles[b].value = m), g({
      id: e4,
      views: w
    });
  };
  return Ii$1.createPortal(
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ml, { appear: true, show: true, as: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: it(
          "absolute inset-0 flex h-full w-full items-center justify-center overflow-y-auto",
          { "bg-black bg-opacity-80": d }
        ),
        style: { zIndex: l },
        onClick: () => y(va.CANCELED),
        children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          Ml.Child,
          {
            as: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "div",
              {
                "data-cy": "confirmation-modal-cy",
                className: "relative rounded-md border border-grey-50 bg-grey-900",
                style: { width: u },
                onClick: (b) => b.stopPropagation(),
                children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 px-12", children: [
                  n ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qM, { name: n, color: a, className: "w-6 h-6" }) }) : null,
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(GM, { condition: t, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h4", { className: "w-full text-wrap text-lg font-bold leading-6 text-white text-center", children: t }) }),
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: "w-full text-wrap text-center text-sm font-medium text-white", children: r }),
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-xs text-white", children: Xe.values(c == null ? void 0 : c.toggles).map((b) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { htmlFor: b.key, className: "flex items-center", children: [
                    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      KN,
                      {
                        size: "xs",
                        value: b.value,
                        onChange: (m) => v(b.key, m)
                      }
                    ),
                    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "ml-1", children: b.title })
                  ] }) }, b.key)) }),
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(KM, { warnings: _ }),
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center gap-4", children: o === bw.CONFIRM ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
                    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      _f,
                      {
                        autoFocus: true,
                        color: a,
                        onClick: () => y(va.CONFIRMED),
                        children: "Confirm"
                      }
                    ),
                    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      _f,
                      {
                        color: a,
                        variant: "outlined",
                        onClick: () => y(va.CANCELED),
                        children: "Cancel"
                      }
                    )
                  ] }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(_f, { autoFocus: true, onClick: () => y(), children: "OK" }) })
                ] })
              }
            )
          }
        )
      }
    ) }),
    p || document.body
  );
}, GM = (e4) => e4.condition ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e4.children }) : null, KM = (e4) => e4.warnings ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ml, { appear: true, show: !!e4.warnings.length, as: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-1 rounded-sm bg-grey-600 p-2 text-xs text-white", children: e4.warnings.map((t, r) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  Ml.Child,
  {
    as: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 items-center gap-1 rounded-sm px-2 py-1", children: [
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        x3$1,
        {
          className: it(
            {
              "h-3 w-3": true,
              "text-yellow-500": t.type === "warning",
              "text-red-400": t.type === "error",
              "text-primary-dark": t.type === "info"
            },
            "mr-3"
          )
        }
      ),
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex-1", children: t.message })
    ] })
  },
  `modal-warnings-${r}`
)) }) }) : null;
(function() {
  try {
    const e4 = document.createElement("style");
    e4.setAttribute("data-vite-dev-id", "ui-components.css"), e4.textContent = `/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}:root:not(#\\#),:host:not(#\\#){--color-green-500:oklch(72.3% .219 149.579);--color-blue-500:oklch(62.3% .214 259.815);--color-pink-500:oklch(65.6% .241 354.308);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-400:oklch(70.7% .022 261.325);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.65rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--text-5xl:3rem;--text-5xl--line-height:1;--text-6xl:3.75rem;--text-6xl--line-height:1;--text-7xl:4.5rem;--text-7xl--line-height:1;--text-8xl:6rem;--text-8xl--line-height:1;--text-9xl:8rem;--text-9xl--line-height:1;--font-weight-thin:100;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-xs:.125rem;--radius-md:.375rem;--radius-lg:.5rem;--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--animate-bounce:bounce 1s infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--color-grey-50:var(--ws-grey-50);--color-grey-100:var(--ws-grey-100);--color-grey-200:var(--ws-grey-200);--color-grey-300:var(--ws-grey-300);--color-grey-400:var(--ws-grey-400);--color-grey-500:var(--ws-grey-500);--color-grey-600:var(--ws-grey-600);--color-grey-700:var(--ws-grey-700);--color-grey-800:var(--ws-grey-800);--color-primary-500:var(--ws-primary-500);--color-primary-600:var(--ws-primary-600);--color-primary-700:var(--ws-primary-700);--color-positive-200:var(--ws-positive-200);--color-positive-400:var(--ws-positive-400);--color-positive-500:var(--ws-positive-500);--color-positive-600:var(--ws-positive-600);--color-warning-500:var(--ws-warning-500);--color-warning-600:var(--ws-warning-600);--color-negative-400:var(--ws-negative-400);--color-negative-500:var(--ws-negative-500);--color-negative-600:var(--ws-negative-600);--text-xxs:.55rem;--text-s:.75rem;--min-height-6:1.5rem;--color-canvas-default:var(--ws-bg-default);--color-canvas-subtle:var(--ws-grey-100);--color-panel:var(--ws-grey-300);--color-panel-subtle:var(--ws-grey-200);--color-card:var(--ws-card-bg);--color-card-border:var(--ws-card-border);--color-body:var(--ws-bg-foreground);--color-body-bg:var(--ws-bg-default);--color-body-light:var(--ws-grey-100);--color-muted:var(--ws-grey-200);--color-neutral:var(--ws-grey-200);--color-button-text:var(--ws-button-fg);--color-primary:var(--ws-primary-default);--color-primary-hover:var(--ws-primary-hover);--color-primary-light:var(--ws-primary-light);--color-primary-dark:var(--ws-primary-dark);--color-positive:var(--ws-positive-500);--color-positive-hover:var(--ws-positive-hover);--color-positive-text:var(--ws-positive-text);--color-positive-bg:var(--ws-positive-bg);--color-positive-light:var(--ws-positive-light);--color-positive-dark:var(--ws-positive-dark);--color-negative:var(--ws-negative-500);--color-negative-hover:var(--ws-negative-hover);--color-negative-text:var(--ws-negative-text);--color-negative-bg:var(--ws-negative-bg);--color-negative-light:var(--ws-negative-light);--color-negative-dark:var(--ws-negative-dark);--color-warning:var(--ws-warning-500);--color-warning-hover:var(--ws-warning-hover);--color-warning-text:var(--ws-warning-text);--color-warning-bg:var(--ws-warning-bg);--color-warning-light:var(--ws-warning-light);--color-warning-dark:var(--ws-warning-dark);--color-input-bg:var(--ws-input-bg);--color-input-border:var(--ws-input-border);--color-input-text:var(--ws-input-text);--color-input-placeholder:var(--ws-input-placeholder);--color-input-focus-border:var(--ws-input-focus-border);--color-select-bg:var(--ws-select-bg);--color-select-border:var(--ws-select-border);--color-select-text:var(--ws-select-text);--color-select-list-bg:var(--ws-select-list-bg);--color-input-option-hover-bg:var(--ws-input-option-hover-bg);--color-input-option-active-bg:var(--ws-input-option-active-bg);--color-input-option-active-text:var(--ws-input-option-active-text);--color-input-error-border:var(--ws-input-error-border);--color-input-error-bg:var(--ws-input-error-bg);--color-input-warning-border:var(--ws-input-warning-border);--color-input-warning-bg:var(--ws-input-warning-bg);--color-input-message-bg:var(--ws-input-message-bg);--color-input-message-text:var(--ws-input-message-text);--color-inactive-text:var(--ws-inactive-text);--color-panel-0:var(--ws-panel-0);--color-panel-1:var(--ws-panel-1);--color-panel-2:var(--ws-panel-2);--color-panel-3:var(--ws-panel-3);--color-panel-4:var(--ws-panel-4);--color-tab-bg-default:var(--ws-tab-bg-default);--color-tab-border:var(--ws-tab-border);--color-tab-active-bg:var(--ws-tab-active-bg);--color-tab-active-fg:var(--ws-tab-active-fg);--color-tab-inactive-bg:var(--ws-tab-inactive-bg);--color-tab-inactive-fg:var(--ws-tab-inactive-fg);--color-panel-border:var(--ws-panel-border)}.pointer-events-auto:not(#\\#){pointer-events:auto}.pointer-events-none:not(#\\#){pointer-events:none}.visible:not(#\\#){visibility:visible}.sr-only:not(#\\#){clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute:not(#\\#){position:absolute}.fixed:not(#\\#){position:fixed}.relative:not(#\\#){position:relative}.static:not(#\\#){position:static}.inset-0:not(#\\#){inset:calc(var(--spacing)*0)}.-top-1\\/5:not(#\\#){top:-20%}.top-0:not(#\\#){top:calc(var(--spacing)*0)}.top-1:not(#\\#){top:calc(var(--spacing)*1)}.top-full:not(#\\#){top:100%}.-right-12:not(#\\#){right:calc(var(--spacing)*-12)}.right-0:not(#\\#){right:calc(var(--spacing)*0)}.right-1:not(#\\#){right:calc(var(--spacing)*1)}.bottom-0:not(#\\#){bottom:calc(var(--spacing)*0)}.bottom-full:not(#\\#){bottom:100%}.left-0:not(#\\#){left:calc(var(--spacing)*0)}.left-0\\.5:not(#\\#){left:calc(var(--spacing)*.5)}.left-1\\/2:not(#\\#){left:50%}.left-3\\.5:not(#\\#){left:calc(var(--spacing)*3.5)}.left-4:not(#\\#){left:calc(var(--spacing)*4)}.left-4\\.5:not(#\\#){left:calc(var(--spacing)*4.5)}.left-5\\.5:not(#\\#){left:calc(var(--spacing)*5.5)}.left-full:not(#\\#){left:100%}.z-1:not(#\\#){z-index:1}.z-2:not(#\\#){z-index:2}.z-10:not(#\\#){z-index:10}.z-40:not(#\\#){z-index:40}.z-50:not(#\\#){z-index:50}.z-60:not(#\\#){z-index:60}.z-9999:not(#\\#){z-index:9999}.container:not(#\\#){width:100%}@media(min-width:40rem){.container:not(#\\#){max-width:40rem}}@media(min-width:48rem){.container:not(#\\#){max-width:48rem}}@media(min-width:64rem){.container:not(#\\#){max-width:64rem}}@media(min-width:80rem){.container:not(#\\#){max-width:80rem}}@media(min-width:96rem){.container:not(#\\#){max-width:96rem}}.m-0:not(#\\#){margin:calc(var(--spacing)*0)}.m-0\\.5:not(#\\#){margin:calc(var(--spacing)*.5)}.m-px:not(#\\#){margin:1px}.mx-1:not(#\\#){margin-inline:calc(var(--spacing)*1)}.-my-1:not(#\\#){margin-block:calc(var(--spacing)*-1)}.my-1:not(#\\#){margin-block:calc(var(--spacing)*1)}.mt-1:not(#\\#){margin-top:calc(var(--spacing)*1)}.mt-2:not(#\\#){margin-top:calc(var(--spacing)*2)}.mt-4:not(#\\#){margin-top:calc(var(--spacing)*4)}.mt-8:not(#\\#){margin-top:calc(var(--spacing)*8)}.mr-1:not(#\\#){margin-right:calc(var(--spacing)*1)}.mr-2:not(#\\#){margin-right:calc(var(--spacing)*2)}.mb-1:not(#\\#){margin-bottom:calc(var(--spacing)*1)}.mb-2:not(#\\#){margin-bottom:calc(var(--spacing)*2)}.mb-4:not(#\\#){margin-bottom:calc(var(--spacing)*4)}.ml-1:not(#\\#){margin-left:calc(var(--spacing)*1)}.ml-1\\.5:not(#\\#){margin-left:calc(var(--spacing)*1.5)}.ml-2:not(#\\#){margin-left:calc(var(--spacing)*2)}.box-border:not(#\\#){box-sizing:border-box}.flex:not(#\\#){display:flex}.grid:not(#\\#){display:grid}.hidden:not(#\\#){display:none}.inline:not(#\\#){display:inline}.inline-block:not(#\\#){display:inline-block}.inline-flex:not(#\\#){display:inline-flex}.table:not(#\\#){display:table}.size-1\\.5:not(#\\#){width:calc(var(--spacing)*1.5);height:calc(var(--spacing)*1.5)}.size-1\\.75:not(#\\#){width:calc(var(--spacing)*1.75);height:calc(var(--spacing)*1.75)}.size-2:not(#\\#){width:calc(var(--spacing)*2);height:calc(var(--spacing)*2)}.size-2\\.5:not(#\\#){width:calc(var(--spacing)*2.5);height:calc(var(--spacing)*2.5)}.size-3:not(#\\#){width:calc(var(--spacing)*3);height:calc(var(--spacing)*3)}.size-3\\.5:not(#\\#){width:calc(var(--spacing)*3.5);height:calc(var(--spacing)*3.5)}.size-3\\.25:not(#\\#){width:calc(var(--spacing)*3.25);height:calc(var(--spacing)*3.25)}.size-4:not(#\\#){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-5:not(#\\#){width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.size-6:not(#\\#){width:calc(var(--spacing)*6);height:calc(var(--spacing)*6)}.size-fit:not(#\\#){width:fit-content;height:fit-content}.h-2:not(#\\#){height:calc(var(--spacing)*2)}.h-3:not(#\\#){height:calc(var(--spacing)*3)}.h-3\\.5:not(#\\#){height:calc(var(--spacing)*3.5)}.h-4:not(#\\#){height:calc(var(--spacing)*4)}.h-4\\.5:not(#\\#){height:calc(var(--spacing)*4.5)}.h-5:not(#\\#){height:calc(var(--spacing)*5)}.h-5\\.5:not(#\\#){height:calc(var(--spacing)*5.5)}.h-6:not(#\\#){height:calc(var(--spacing)*6)}.h-7:not(#\\#){height:calc(var(--spacing)*7)}.h-7\\.5:not(#\\#){height:calc(var(--spacing)*7.5)}.h-8:not(#\\#){height:calc(var(--spacing)*8)}.h-10:not(#\\#){height:calc(var(--spacing)*10)}.h-14:not(#\\#){height:calc(var(--spacing)*14)}.h-20:not(#\\#){height:calc(var(--spacing)*20)}.h-100:not(#\\#){height:calc(var(--spacing)*100)}.h-fit:not(#\\#){height:fit-content}.h-full:not(#\\#){height:100%}.max-h-\\[400px\\]:not(#\\#){max-height:400px}.max-h-full:not(#\\#){max-height:100%}.min-h-5:not(#\\#){min-height:calc(var(--spacing)*5)}.min-h-6:not(#\\#){min-height:var(--min-height-6)}.min-h-7:not(#\\#){min-height:calc(var(--spacing)*7)}.min-h-\\[100px\\]:not(#\\#){min-height:100px}.min-h-fit:not(#\\#){min-height:fit-content}.min-h-screen:not(#\\#){min-height:100vh}.w-0\\.5:not(#\\#){width:calc(var(--spacing)*.5)}.w-1\\/2:not(#\\#){width:50%}.w-3:not(#\\#){width:calc(var(--spacing)*3)}.w-3\\.5:not(#\\#){width:calc(var(--spacing)*3.5)}.w-4:not(#\\#){width:calc(var(--spacing)*4)}.w-5:not(#\\#){width:calc(var(--spacing)*5)}.w-6:not(#\\#){width:calc(var(--spacing)*6)}.w-7:not(#\\#){width:calc(var(--spacing)*7)}.w-8:not(#\\#){width:calc(var(--spacing)*8)}.w-9:not(#\\#){width:calc(var(--spacing)*9)}.w-11:not(#\\#){width:calc(var(--spacing)*11)}.w-16:not(#\\#){width:calc(var(--spacing)*16)}.w-20:not(#\\#){width:calc(var(--spacing)*20)}.w-32:not(#\\#){width:calc(var(--spacing)*32)}.w-48:not(#\\#){width:calc(var(--spacing)*48)}.w-52:not(#\\#){width:calc(var(--spacing)*52)}.w-60:not(#\\#){width:calc(var(--spacing)*60)}.w-64:not(#\\#){width:calc(var(--spacing)*64)}.w-80:not(#\\#){width:calc(var(--spacing)*80)}.w-96:not(#\\#){width:calc(var(--spacing)*96)}.w-auto:not(#\\#){width:auto}.w-fit:not(#\\#){width:fit-content}.w-full:not(#\\#){width:100%}.w-px:not(#\\#){width:1px}.max-w-100:not(#\\#){max-width:calc(var(--spacing)*100)}.max-w-\\[300px\\]:not(#\\#){max-width:300px}.max-w-md:not(#\\#){max-width:var(--container-md)}.min-w-0:not(#\\#){min-width:calc(var(--spacing)*0)}.min-w-3\\.5:not(#\\#){min-width:calc(var(--spacing)*3.5)}.min-w-4\\.5:not(#\\#){min-width:calc(var(--spacing)*4.5)}.min-w-5:not(#\\#){min-width:calc(var(--spacing)*5)}.min-w-7\\.5:not(#\\#){min-width:calc(var(--spacing)*7.5)}.min-w-50:not(#\\#){min-width:calc(var(--spacing)*50)}.min-w-\\[150px\\]:not(#\\#){min-width:150px}.min-w-fit:not(#\\#){min-width:fit-content}.min-w-full:not(#\\#){min-width:100%}.flex-1:not(#\\#){flex:1}.flex-3:not(#\\#){flex:3}.flex-none:not(#\\#){flex:none}.shrink-0:not(#\\#){flex-shrink:0}.origin-top-right:not(#\\#){transform-origin:100% 0}.-translate-x-1\\/2:not(#\\#){--tw-translate-x: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-x-full:not(#\\#){--tw-translate-x:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0:not(#\\#){--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full:not(#\\#){--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-full:not(#\\#){--tw-translate-y:-100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-0:not(#\\#){--tw-translate-y:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-1\\/2:not(#\\#){--tw-translate-y: 50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-y-full:not(#\\#){--tw-translate-y:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.scale-0:not(#\\#){--tw-scale-x:0%;--tw-scale-y:0%;--tw-scale-z:0%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-95:not(#\\#){--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-100:not(#\\#){--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x)var(--tw-scale-y)}.scale-110:not(#\\#){--tw-scale-x:110%;--tw-scale-y:110%;--tw-scale-z:110%;scale:var(--tw-scale-x)var(--tw-scale-y)}.-rotate-45:not(#\\#){rotate:-45deg}.rotate-45:not(#\\#){rotate:45deg}.rotate-90:not(#\\#){rotate:90deg}.rotate-180:not(#\\#){rotate:180deg}.transform:not(#\\#){transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-bounce:not(#\\#){animation:var(--animate-bounce)}.cursor-auto:not(#\\#){cursor:auto}.cursor-not-allowed:not(#\\#){cursor:not-allowed}.cursor-pointer:not(#\\#){cursor:pointer}.cursor-se-resize:not(#\\#){cursor:se-resize}.resize:not(#\\#){resize:both}.resize-none:not(#\\#){resize:none}.list-disc:not(#\\#){list-style-type:disc}.appearance-none:not(#\\#){-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-2:not(#\\#){grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3:not(#\\#){grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col:not(#\\#){flex-direction:column}.flex-row:not(#\\#){flex-direction:row}.flex-wrap:not(#\\#){flex-wrap:wrap}.place-content-center:not(#\\#){place-content:center}.place-items-center:not(#\\#){place-items:center}.content-center:not(#\\#){align-content:center}.items-center:not(#\\#){align-items:center}.items-end:not(#\\#){align-items:flex-end}.items-start:not(#\\#){align-items:flex-start}.justify-around:not(#\\#){justify-content:space-around}.justify-between:not(#\\#){justify-content:space-between}.justify-center:not(#\\#){justify-content:center}.gap-0\\.5:not(#\\#){gap:calc(var(--spacing)*.5)}.gap-1:not(#\\#){gap:calc(var(--spacing)*1)}.gap-1\\.5:not(#\\#){gap:calc(var(--spacing)*1.5)}.gap-2:not(#\\#){gap:calc(var(--spacing)*2)}.gap-2\\.5:not(#\\#){gap:calc(var(--spacing)*2.5)}.gap-3:not(#\\#){gap:calc(var(--spacing)*3)}.gap-4:not(#\\#){gap:calc(var(--spacing)*4)}.gap-6:not(#\\#){gap:calc(var(--spacing)*6)}.gap-8:not(#\\#){gap:calc(var(--spacing)*8)}.gap-10:not(#\\#){gap:calc(var(--spacing)*10)}.gap-14:not(#\\#){gap:calc(var(--spacing)*14)}:where(.space-y-1>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*3)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*3)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-5>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*5)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*5)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*6)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*6)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-8>:not(:last-child)):not(#\\#){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*8)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*8)*calc(1 - var(--tw-space-y-reverse)))}.gap-x-1:not(#\\#){column-gap:calc(var(--spacing)*1)}.gap-x-2:not(#\\#){column-gap:calc(var(--spacing)*2)}.gap-x-3:not(#\\#){column-gap:calc(var(--spacing)*3)}.gap-x-4:not(#\\#){column-gap:calc(var(--spacing)*4)}.gap-x-20:not(#\\#){column-gap:calc(var(--spacing)*20)}:where(.space-x-4>:not(:last-child)):not(#\\#){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*4)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-x-reverse)))}.truncate:not(#\\#){text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-hidden:not(#\\#){overflow:hidden}.overflow-y-auto:not(#\\#){overflow-y:auto}.rounded:not(#\\#){border-radius:.25rem}.rounded-full:not(#\\#){border-radius:3.40282e38px}.rounded-lg:not(#\\#){border-radius:var(--radius-lg)}.rounded-md:not(#\\#){border-radius:var(--radius-md)}.rounded-xs:not(#\\#){border-radius:var(--radius-xs)}.rounded-t:not(#\\#){border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-none:not(#\\#){border-top-left-radius:0;border-top-right-radius:0}.rounded-b-none:not(#\\#){border-bottom-right-radius:0;border-bottom-left-radius:0}.border:not(#\\#){border-style:var(--tw-border-style);border-width:1px}.border-0:not(#\\#){border-style:var(--tw-border-style);border-width:0}.border-2:not(#\\#){border-style:var(--tw-border-style);border-width:2px}.border-t:not(#\\#){border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-0:not(#\\#){border-top-style:var(--tw-border-style);border-top-width:0}.border-r:not(#\\#){border-right-style:var(--tw-border-style);border-right-width:1px}.border-b:not(#\\#){border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-b-0:not(#\\#){border-bottom-style:var(--tw-border-style);border-bottom-width:0}.border-dashed:not(#\\#){--tw-border-style:dashed;border-style:dashed}.border-body:not(#\\#){border-color:var(--color-body)}.border-body-light:not(#\\#){border-color:var(--color-body-light)}.border-canvas-default:not(#\\#){border-color:var(--color-canvas-default)}.border-card-border:not(#\\#){border-color:var(--color-card-border)}.border-grey-100:not(#\\#){border-color:var(--color-grey-100)}.border-grey-200:not(#\\#){border-color:var(--color-grey-200)}.border-input-border:not(#\\#){border-color:var(--color-input-border)}.border-input-error-border:not(#\\#){border-color:var(--color-input-error-border)}.border-input-focus-border:not(#\\#){border-color:var(--color-input-focus-border)}.border-input-warning-border:not(#\\#){border-color:var(--color-input-warning-border)}.border-negative:not(#\\#){border-color:var(--color-negative)}.border-negative-400:not(#\\#){border-color:var(--color-negative-400)}.border-negative-500:not(#\\#){border-color:var(--color-negative-500)}.border-neutral:not(#\\#){border-color:var(--color-neutral)}.border-panel:not(#\\#){border-color:var(--color-panel)}.border-panel-border:not(#\\#){border-color:var(--color-panel-border)}.border-panel-subtle:not(#\\#){border-color:var(--color-panel-subtle)}.border-positive:not(#\\#){border-color:var(--color-positive)}.border-positive-500:not(#\\#){border-color:var(--color-positive-500)}.border-positive-text:not(#\\#){border-color:var(--color-positive-text)}.border-primary:not(#\\#){border-color:var(--color-primary)}.border-primary-700:not(#\\#){border-color:var(--color-primary-700)}.border-primary-hover:not(#\\#){border-color:var(--color-primary-hover)}.border-select-border:not(#\\#){border-color:var(--color-select-border)}.border-tab-border:not(#\\#){border-color:var(--color-tab-border)}.border-transparent:not(#\\#){border-color:#0000}.border-warning:not(#\\#){border-color:var(--color-warning)}.border-warning-500:not(#\\#){border-color:var(--color-warning-500)}.border-warning-bg:not(#\\#){border-color:var(--color-warning-bg)}.border-white:not(#\\#){border-color:var(--color-white)}.bg-blue-500:not(#\\#){background-color:var(--color-blue-500)}.bg-body:not(#\\#){background-color:var(--color-body)}.bg-body-bg:not(#\\#){background-color:var(--color-body-bg)}.bg-canvas-default:not(#\\#){background-color:var(--color-canvas-default)}.bg-canvas-subtle:not(#\\#){background-color:var(--color-canvas-subtle)}.bg-card:not(#\\#){background-color:var(--color-card)}.bg-grey-50:not(#\\#){background-color:var(--color-grey-50)}.bg-grey-200:not(#\\#){background-color:var(--color-grey-200)}.bg-grey-300:not(#\\#){background-color:var(--color-grey-300)}.bg-grey-400:not(#\\#){background-color:var(--color-grey-400)}.bg-grey-500:not(#\\#){background-color:var(--color-grey-500)}.bg-grey-600:not(#\\#){background-color:var(--color-grey-600)}.bg-grey-700:not(#\\#){background-color:var(--color-grey-700)}.bg-grey-800:not(#\\#){background-color:var(--color-grey-800)}.bg-input-bg:not(#\\#){background-color:var(--color-input-bg)}.bg-input-border:not(#\\#){background-color:var(--color-input-border)}.bg-input-error-bg:not(#\\#){background-color:var(--color-input-error-bg)}.bg-input-message-bg:not(#\\#){background-color:var(--color-input-message-bg)}.bg-input-option-active-bg:not(#\\#){background-color:var(--color-input-option-active-bg)}.bg-input-option-hover-bg:not(#\\#){background-color:var(--color-input-option-hover-bg)}.bg-input-warning-bg:not(#\\#){background-color:var(--color-input-warning-bg)}.bg-negative:not(#\\#){background-color:var(--color-negative)}.bg-negative-400:not(#\\#){background-color:var(--color-negative-400)}.bg-negative-500:not(#\\#){background-color:var(--color-negative-500)}.bg-negative-bg:not(#\\#){background-color:var(--color-negative-bg)}.bg-negative-hover:not(#\\#){background-color:var(--color-negative-hover)}.bg-negative-light:not(#\\#){background-color:var(--color-negative-light)}.bg-panel:not(#\\#){background-color:var(--color-panel)}.bg-panel-0:not(#\\#){background-color:var(--color-panel-0)}.bg-panel-1:not(#\\#){background-color:var(--color-panel-1)}.bg-panel-2:not(#\\#){background-color:var(--color-panel-2)}.bg-panel-3:not(#\\#){background-color:var(--color-panel-3)}.bg-panel-4:not(#\\#){background-color:var(--color-panel-4)}.bg-panel-subtle:not(#\\#){background-color:var(--color-panel-subtle)}.bg-positive:not(#\\#){background-color:var(--color-positive)}.bg-positive-200:not(#\\#){background-color:var(--color-positive-200)}.bg-positive-500:not(#\\#){background-color:var(--color-positive-500)}.bg-positive-bg:not(#\\#){background-color:var(--color-positive-bg)}.bg-positive-hover:not(#\\#){background-color:var(--color-positive-hover)}.bg-positive-light:not(#\\#){background-color:var(--color-positive-light)}.bg-primary:not(#\\#){background-color:var(--color-primary)}.bg-primary-500:not(#\\#){background-color:var(--color-primary-500)}.bg-primary-600:not(#\\#){background-color:var(--color-primary-600)}.bg-primary-hover:not(#\\#){background-color:var(--color-primary-hover)}.bg-primary-light:not(#\\#){background-color:var(--color-primary-light)}.bg-primary\\/30:not(#\\#){background-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.bg-primary\\/30:not(#\\#){background-color:color-mix(in oklab,var(--color-primary)30%,transparent)}}.bg-select-bg:not(#\\#){background-color:var(--color-select-bg)}.bg-select-list-bg:not(#\\#){background-color:var(--color-select-list-bg)}.bg-tab-active-bg:not(#\\#){background-color:var(--color-tab-active-bg)}.bg-tab-bg-default:not(#\\#){background-color:var(--color-tab-bg-default)}.bg-tab-inactive-bg:not(#\\#){background-color:var(--color-tab-inactive-bg)}.bg-transparent:not(#\\#){background-color:#0000}.bg-warning:not(#\\#){background-color:var(--color-warning)}.bg-warning-500:not(#\\#){background-color:var(--color-warning-500)}.bg-warning-bg:not(#\\#){background-color:var(--color-warning-bg)}.bg-warning-hover:not(#\\#){background-color:var(--color-warning-hover)}.bg-warning-light:not(#\\#){background-color:var(--color-warning-light)}.bg-white:not(#\\#){background-color:var(--color-white)}.bg-linear-to-r:not(#\\#){--tw-gradient-position:to right}@supports (background-image:linear-gradient(in lab,red,red)){.bg-linear-to-r:not(#\\#){--tw-gradient-position:to right in oklab}}.bg-linear-to-r:not(#\\#){background-image:linear-gradient(var(--tw-gradient-stops))}.from-green-500:not(#\\#){--tw-gradient-from:var(--color-green-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.from-primary:not(#\\#){--tw-gradient-from:var(--color-primary);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-blue-500:not(#\\#){--tw-gradient-to:var(--color-blue-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.to-pink-500:not(#\\#){--tw-gradient-to:var(--color-pink-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.stroke-current:not(#\\#){stroke:currentColor}.p-0:not(#\\#){padding:calc(var(--spacing)*0)}.p-0\\.5:not(#\\#){padding:calc(var(--spacing)*.5)}.p-1:not(#\\#){padding:calc(var(--spacing)*1)}.p-1\\!{padding:calc(var(--spacing)*1)!important}.p-1\\.5:not(#\\#){padding:calc(var(--spacing)*1.5)}.p-2:not(#\\#){padding:calc(var(--spacing)*2)}.p-2\\.5:not(#\\#){padding:calc(var(--spacing)*2.5)}.p-3:not(#\\#){padding:calc(var(--spacing)*3)}.p-4:not(#\\#){padding:calc(var(--spacing)*4)}.p-6:not(#\\#){padding:calc(var(--spacing)*6)}.p-8:not(#\\#){padding:calc(var(--spacing)*8)}.p-10:not(#\\#){padding:calc(var(--spacing)*10)}.p-50:not(#\\#){padding:calc(var(--spacing)*50)}.p-px:not(#\\#){padding:1px}.px-0\\.5:not(#\\#){padding-inline:calc(var(--spacing)*.5)}.px-1:not(#\\#){padding-inline:calc(var(--spacing)*1)}.px-1\\.5:not(#\\#){padding-inline:calc(var(--spacing)*1.5)}.px-2:not(#\\#){padding-inline:calc(var(--spacing)*2)}.px-3:not(#\\#){padding-inline:calc(var(--spacing)*3)}.px-4:not(#\\#){padding-inline:calc(var(--spacing)*4)}.px-6:not(#\\#){padding-inline:calc(var(--spacing)*6)}.px-7:not(#\\#){padding-inline:calc(var(--spacing)*7)}.px-8:not(#\\#){padding-inline:calc(var(--spacing)*8)}.py-0\\.5:not(#\\#){padding-block:calc(var(--spacing)*.5)}.py-1:not(#\\#){padding-block:calc(var(--spacing)*1)}.py-1\\.5:not(#\\#){padding-block:calc(var(--spacing)*1.5)}.py-2:not(#\\#){padding-block:calc(var(--spacing)*2)}.py-3:not(#\\#){padding-block:calc(var(--spacing)*3)}.pt-0\\.5:not(#\\#){padding-top:calc(var(--spacing)*.5)}.pt-1:not(#\\#){padding-top:calc(var(--spacing)*1)}.pt-1\\.5:not(#\\#){padding-top:calc(var(--spacing)*1.5)}.pt-2:not(#\\#){padding-top:calc(var(--spacing)*2)}.pl-1:not(#\\#){padding-left:calc(var(--spacing)*1)}.pl-4:not(#\\#){padding-left:calc(var(--spacing)*4)}.text-center:not(#\\#){text-align:center}.text-left:not(#\\#){text-align:left}.text-2xl:not(#\\#){font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl:not(#\\#){font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl:not(#\\#){font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-5xl:not(#\\#){font-size:var(--text-5xl);line-height:var(--tw-leading,var(--text-5xl--line-height))}.text-6xl:not(#\\#){font-size:var(--text-6xl);line-height:var(--tw-leading,var(--text-6xl--line-height))}.text-7xl:not(#\\#){font-size:var(--text-7xl);line-height:var(--tw-leading,var(--text-7xl--line-height))}.text-8xl:not(#\\#){font-size:var(--text-8xl);line-height:var(--tw-leading,var(--text-8xl--line-height))}.text-9xl:not(#\\#){font-size:var(--text-9xl);line-height:var(--tw-leading,var(--text-9xl--line-height))}.text-base:not(#\\#){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg:not(#\\#){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm:not(#\\#){font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl:not(#\\#){font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs:not(#\\#){font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-s:not(#\\#){font-size:var(--text-s)}.text-xxs:not(#\\#){font-size:var(--text-xxs)}.leading-3:not(#\\#){--tw-leading:calc(var(--spacing)*3);line-height:calc(var(--spacing)*3)}.leading-4:not(#\\#){--tw-leading:calc(var(--spacing)*4);line-height:calc(var(--spacing)*4)}.leading-5:not(#\\#){--tw-leading:calc(var(--spacing)*5);line-height:calc(var(--spacing)*5)}.leading-none:not(#\\#){--tw-leading:1;line-height:1}.font-bold:not(#\\#){--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium:not(#\\#){--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold:not(#\\#){--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-thin:not(#\\#){--tw-font-weight:var(--font-weight-thin);font-weight:var(--font-weight-thin)}.whitespace-nowrap:not(#\\#){white-space:nowrap}.text-body:not(#\\#){color:var(--color-body)}.text-button-text:not(#\\#){color:var(--color-button-text)}.text-gray-50:not(#\\#){color:var(--color-gray-50)}.text-gray-400:not(#\\#){color:var(--color-gray-400)}.text-grey-100:not(#\\#){color:var(--color-grey-100)}.text-grey-200:not(#\\#){color:var(--color-grey-200)}.text-grey-300:not(#\\#){color:var(--color-grey-300)}.text-grey-700:not(#\\#){color:var(--color-grey-700)}.text-inactive-text:not(#\\#){color:var(--color-inactive-text)}.text-inherit:not(#\\#){color:inherit}.text-input-message-text:not(#\\#){color:var(--color-input-message-text)}.text-input-option-active-text:not(#\\#){color:var(--color-input-option-active-text)}.text-input-placeholder:not(#\\#){color:var(--color-input-placeholder)}.text-input-text:not(#\\#){color:var(--color-input-text)}.text-muted:not(#\\#){color:var(--color-muted)}.text-negative:not(#\\#){color:var(--color-negative)}.text-negative-500:not(#\\#){color:var(--color-negative-500)}.text-negative-dark:not(#\\#){color:var(--color-negative-dark)}.text-negative-text:not(#\\#){color:var(--color-negative-text)}.text-panel-subtle:not(#\\#){color:var(--color-panel-subtle)}.text-positive:not(#\\#){color:var(--color-positive)}.text-positive-500:not(#\\#){color:var(--color-positive-500)}.text-positive-600:not(#\\#){color:var(--color-positive-600)}.text-positive-dark:not(#\\#){color:var(--color-positive-dark)}.text-positive-text:not(#\\#),.text-positive-text\\/70:not(#\\#){color:var(--color-positive-text)}@supports (color:color-mix(in lab,red,red)){.text-positive-text\\/70:not(#\\#){color:color-mix(in oklab,var(--color-positive-text)70%,transparent)}}.text-primary:not(#\\#){color:var(--color-primary)}.text-primary-dark:not(#\\#){color:var(--color-primary-dark)}.text-primary-hover:not(#\\#){color:var(--color-primary-hover)}.text-select-text:not(#\\#){color:var(--color-select-text)}.text-tab-active-fg:not(#\\#){color:var(--color-tab-active-fg)}.text-tab-inactive-fg:not(#\\#){color:var(--color-tab-inactive-fg)}.text-warning:not(#\\#){color:var(--color-warning)}.text-warning-dark:not(#\\#){color:var(--color-warning-dark)}.text-warning-text:not(#\\#){color:var(--color-warning-text)}.capitalize:not(#\\#){text-transform:capitalize}.italic:not(#\\#){font-style:italic}.decoration-transparent:not(#\\#){text-decoration-color:#0000}.opacity-0:not(#\\#){opacity:0}.opacity-50:not(#\\#){opacity:.5}.opacity-60:not(#\\#){opacity:.6}.opacity-80:not(#\\#){opacity:.8}.opacity-100:not(#\\#){opacity:1}.shadow:not(#\\#){--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-inner:not(#\\#){--tw-shadow:inset 0 2px 4px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg:not(#\\#){--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md:not(#\\#){--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs:not(#\\#){--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(0px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-1:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-input-error-border:not(#\\#){--tw-ring-color:var(--color-input-error-border)}.ring-input-focus-border:not(#\\#){--tw-ring-color:var(--color-input-focus-border)}.ring-input-warning-border:not(#\\#){--tw-ring-color:var(--color-input-warning-border)}.ring-positive:not(#\\#){--tw-ring-color:var(--color-positive)}.outline-hidden:not(#\\#){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.outline-hidden:not(#\\#){outline-offset:2px;outline:2px solid #0000}}.outline:not(#\\#),.outline-1:not(#\\#){outline-style:var(--tw-outline-style);outline-width:1px}.outline-canvas-default:not(#\\#){outline-color:var(--color-canvas-default)}.outline-primary:not(#\\#){outline-color:var(--color-primary)}.blur:not(#\\#){--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter:not(#\\#){filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition:not(#\\#){transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all:not(#\\#){transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors:not(#\\#){transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform:not(#\\#){transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150:not(#\\#){--tw-duration:.15s;transition-duration:.15s}.duration-200:not(#\\#){--tw-duration:.2s;transition-duration:.2s}.duration-300:not(#\\#){--tw-duration:.3s;transition-duration:.3s}.ease-in-out:not(#\\#){--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out:not(#\\#){--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-solid:not(#\\#){--tw-outline-style:solid;outline-style:solid}.select-none:not(#\\#){-webkit-user-select:none;user-select:none}@media(hover:hover){.group-hover\\:flex:is(:where(.group):hover *):not(#\\#){display:flex}.group-hover\\:grid:is(:where(.group):hover *):not(#\\#){display:grid}.group-hover\\:border-body:is(:where(.group):hover *):not(#\\#){border-color:var(--color-body)}.group-hover\\:border-negative-text:is(:where(.group):hover *):not(#\\#){border-color:var(--color-negative-text)}.group-hover\\:border-positive-text:is(:where(.group):hover *):not(#\\#){border-color:var(--color-positive-text)}.group-hover\\:border-warning-text:is(:where(.group):hover *):not(#\\#){border-color:var(--color-warning-text)}.group-hover\\:bg-grey-400:is(:where(.group):hover *):not(#\\#){background-color:var(--color-grey-400)}.group-hover\\:bg-negative-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-negative-hover)}.group-hover\\:bg-negative-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-negative-light)}.group-hover\\:bg-positive-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-positive-hover)}.group-hover\\:bg-positive-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-positive-light)}.group-hover\\:bg-primary-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-primary-hover)}.group-hover\\:bg-primary-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-primary-light)}.group-hover\\:bg-warning-hover:is(:where(.group):hover *):not(#\\#){background-color:var(--color-warning-hover)}.group-hover\\:bg-warning-light:is(:where(.group):hover *):not(#\\#){background-color:var(--color-warning-light)}.group-hover\\:opacity-100:is(:where(.group):hover *):not(#\\#){opacity:1}}.placeholder\\:text-input-placeholder:not(#\\#)::placeholder{color:var(--color-input-placeholder)}.placeholder\\:opacity-60:not(#\\#)::placeholder{opacity:.6}.first\\:-ml-1\\.5:first-child:not(#\\#){margin-left:calc(var(--spacing)*-1.5)}.first\\:rounded-t:first-child:not(#\\#){border-top-left-radius:.25rem;border-top-right-radius:.25rem}.first\\:rounded-l:first-child:not(#\\#){border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.last\\:-mr-1\\.5:last-child:not(#\\#){margin-right:calc(var(--spacing)*-1.5)}.last\\:rounded-r:last-child:not(#\\#){border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.last\\:rounded-b:last-child:not(#\\#){border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.only\\:-mx-0\\.5:only-child:not(#\\#){margin-inline:calc(var(--spacing)*-.5)}.only\\:rounded:only-child:not(#\\#){border-radius:.25rem}.focus-within\\:border-input-error-border:focus-within:not(#\\#){border-color:var(--color-input-error-border)}.focus-within\\:border-input-focus-border:focus-within:not(#\\#){border-color:var(--color-input-focus-border)}.focus-within\\:border-input-warning-border:focus-within:not(#\\#){border-color:var(--color-input-warning-border)}.focus-within\\:border-positive:focus-within:not(#\\#){border-color:var(--color-positive)}@media(hover:hover){.hover\\:border-black:hover:not(#\\#){border-color:var(--color-black)}.hover\\:border-canvas-subtle:hover:not(#\\#){border-color:var(--color-canvas-subtle)}.hover\\:border-negative-hover:hover:not(#\\#){border-color:var(--color-negative-hover)}.hover\\:border-positive-hover:hover:not(#\\#){border-color:var(--color-positive-hover)}.hover\\:border-primary-hover:hover:not(#\\#){border-color:var(--color-primary-hover)}.hover\\:border-warning-hover:hover:not(#\\#){border-color:var(--color-warning-hover)}.hover\\:bg-canvas-subtle:hover:not(#\\#){background-color:var(--color-canvas-subtle)}.hover\\:bg-grey-500:hover:not(#\\#){background-color:var(--color-grey-500)}.hover\\:bg-grey-700:hover:not(#\\#){background-color:var(--color-grey-700)}.hover\\:bg-input-option-hover-bg:hover:not(#\\#){background-color:var(--color-input-option-hover-bg)}.hover\\:bg-negative:hover:not(#\\#){background-color:var(--color-negative)}.hover\\:bg-negative-600:hover:not(#\\#){background-color:var(--color-negative-600)}.hover\\:bg-negative-hover:hover:not(#\\#){background-color:var(--color-negative-hover)}.hover\\:bg-positive:hover:not(#\\#){background-color:var(--color-positive)}.hover\\:bg-positive-600:hover:not(#\\#){background-color:var(--color-positive-600)}.hover\\:bg-positive-hover:hover:not(#\\#){background-color:var(--color-positive-hover)}.hover\\:bg-primary-600:hover:not(#\\#){background-color:var(--color-primary-600)}.hover\\:bg-primary-hover:hover:not(#\\#){background-color:var(--color-primary-hover)}.hover\\:bg-primary\\/20:hover:not(#\\#){background-color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-primary\\/20:hover:not(#\\#){background-color:color-mix(in oklab,var(--color-primary)20%,transparent)}}.hover\\:bg-transparent:hover:not(#\\#){background-color:#0000}.hover\\:bg-warning:hover:not(#\\#){background-color:var(--color-warning)}.hover\\:bg-warning-600:hover:not(#\\#){background-color:var(--color-warning-600)}.hover\\:bg-warning-hover:hover:not(#\\#){background-color:var(--color-warning-hover)}.hover\\:text-body:hover:not(#\\#){color:var(--color-body)}.hover\\:text-button-text:hover:not(#\\#){color:var(--color-button-text)}.hover\\:text-gray-50:hover:not(#\\#){color:var(--color-gray-50)}.hover\\:text-grey-200:hover:not(#\\#){color:var(--color-grey-200)}.hover\\:text-negative-400:hover:not(#\\#){color:var(--color-negative-400)}.hover\\:text-negative-hover:hover:not(#\\#){color:var(--color-negative-hover)}.hover\\:text-positive-400:hover:not(#\\#){color:var(--color-positive-400)}.hover\\:text-positive-hover:hover:not(#\\#){color:var(--color-positive-hover)}.hover\\:text-positive-text:hover:not(#\\#){color:var(--color-positive-text)}.hover\\:text-primary-hover:hover:not(#\\#){color:var(--color-primary-hover)}.hover\\:text-tab-active-fg:hover:not(#\\#){color:var(--color-tab-active-fg)}.hover\\:text-warning-hover:hover:not(#\\#){color:var(--color-warning-hover)}.hover\\:decoration-current:hover:not(#\\#){text-decoration-color:currentColor}}.focus\\:bg-transparent:focus:not(#\\#){background-color:#0000}.focus\\:ring-2:focus:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-negative:focus:not(#\\#){--tw-ring-color:var(--color-negative)}.focus\\:ring-positive:focus:not(#\\#){--tw-ring-color:var(--color-positive)}.focus\\:ring-primary:focus:not(#\\#){--tw-ring-color:var(--color-primary)}.focus\\:ring-warning:focus:not(#\\#){--tw-ring-color:var(--color-warning)}.focus\\:ring-offset-0:focus:not(#\\#){--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:ring-offset-2:focus:not(#\\#){--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-hidden:focus:not(#\\#){--tw-outline-style:none;outline-style:none}@media(forced-colors:active){.focus\\:outline-hidden:focus:not(#\\#){outline-offset:2px;outline:2px solid #0000}}.focus-visible\\:ring-2:focus-visible:not(#\\#){--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus-visible\\:ring-primary:focus-visible:not(#\\#){--tw-ring-color:var(--color-primary)}.focus-visible\\:ring-offset-2:focus-visible:not(#\\#){--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}:root:not(#\\#){--ws-primary-50:#f2ddff;--ws-primary-100:#edd0ff;--ws-primary-300:#d0acef;--ws-primary-400:#c190ea;--ws-primary-600:#935ebf;--ws-primary-800:#563374;--ws-primary-900:#381e4f;--ws-primary-950:#29133c;--ws-positive-50:#ecf9f2;--ws-positive-100:#d9f2e6;--ws-positive-300:#8ed9b3;--ws-positive-400:#68cd99;--ws-positive-700:#28734d;--ws-positive-800:#28734d;--ws-positive-900:#0d261a;--ws-positive-950:#07130d;--ws-warning-50:#fff7e6;--ws-warning-100:#ffefcc;--ws-warning-300:#fed066;--ws-warning-400:#fdc133;--ws-warning-700:#986a00;--ws-warning-800:#654700;--ws-warning-900:#332300;--ws-warning-950:#191200;--ws-negative-50:#feeeee;--ws-negative-100:#fcdcdc;--ws-negative-300:#f69797;--ws-negative-400:#f37575;--ws-negative-700:#9a3232;--ws-negative-800:#6e2222;--ws-negative-900:#431212;--ws-negative-950:#2e0a0a;--ws-grey-300:#535353;--ws-grey-400:#484848;--ws-grey-600:#3f3f3f;--ws-palette-primary-200:#e0c7f5;--ws-palette-primary-500:#b174e5;--ws-palette-primary-700:#75499a;--ws-button-bg:var(--vscode-button-background,var(--theia-button-background,var(--ws-palette-primary-500)));--ws-button-fg:var(--vscode-button-foreground,var(--theia-button-foreground,var(--ws-palette-white)));--ws-primary-default:var(--ws-button-bg);--ws-button-text:var(--ws-button-fg);--ws-primary-hover:var(--vscode-button-hoverBackground,var(--theia-button-hoverBackground,var(--ws-palette-primary-700)));--ws-primary-light:var(--vscode-editorInfo-foreground,var(--theia-button-hoverBackground,var(--ws-palette-primary-200)));--ws-primary-dark:var(--vscode-editor-lineHighlightBackground,var(--theia-button-hoverBackground,var(--ws-palette-primary-700)));--ws-primary-200:var(--ws-primary-light);--ws-primary-500:var(--ws-primary-default);--ws-primary-700:var(--ws-primary-hover);--ws-palette-positive-200:#b3e6cc;--ws-palette-positive-500:#42c080;--ws-palette-positive-600:#359a66;--ws-positive-dark:var(--vscode-gitDecoration-addedResourceForeground,var(--ws-palette-positive-600));--ws-positive-hover:var(--ws-positive-dark);--ws-positive-bg:var(--ws-palette-positive-100);--ws-positive-light:var(--ws-palette-positive-200);--ws-positive-border:var(--ws-positive-500);--ws-positive-text:var(--ws-positive-500);--ws-positive-500:var(--vscode-testing-iconPassed,var(--ws-palette-positive-500));--ws-positive-200:var(--ws-positive-light);--ws-positive-600:var(--ws-positive-dark);--ws-palette-warning-200:#fee099;--ws-palette-warning-500:#fdb100;--ws-palette-warning-600:#ca8e00;--ws-warning-hover:var(--ws-warning-600);--ws-warning-text:var(--ws-warning-500);--ws-warning-border:var(--ws-warning-500);--ws-warning-500:var(--vscode-list-warningForeground,var(--ws-palette-warning-500));--ws-warning-bg:var(--vscode-inputValidation-warningBackground,var(--ws-palette-warning-500));--ws-warning-light:var(--vscode-inputValidation-warningBackground,var(--ws-palette-warning-200));--ws-warning-dark:var(--vscode-inputValidation-warningBackground,var(--ws-palette-warning-600));--ws-warning-200:var(--ws-warning-light);--ws-warning-600:var(--ws-warning-dark);--ws-palette-negative-200:#f9baba;--ws-palette-negative-500:#f05252;--ws-palette-negative-600:#c54242;--ws-negative-hover:var(--ws-negative-600);--ws-negative-text:var(--ws-negative-500);--ws-negative-500:var(--vscode-errorForeground,var(--ws-palette-negative-500));--ws-negative-light:var(--vscode-inputValidation-errorBackground,var(--ws-palette-negative-200));--ws-negative-dark:var(--vscode-inputValidation-errorBackground,var(--ws-palette-negative-600));--ws-negative-200:var(--ws-negative-light);--ws-negative-600:var(--ws-negative-dark);--ws-palette-white:#fff;--ws-palette-grey-50:#f1f5f9;--ws-palette-grey-100:#ccc;--ws-palette-grey-200:#888;--ws-palette-grey-300:#535353;--ws-palette-grey-400:#484848;--ws-palette-grey-500:#444;--ws-palette-grey-600:#3f3f3f;--ws-palette-grey-700:#393939;--ws-palette-grey-800:#383838;--ws-palette-grey-900:#262626;--ws-palette-grey-950:#151515;--ws-bg-default:var(--vscode-editor-background,var(--theia-editor-background,var(--ws-palette-white)));--ws-bg-foreground:var(--vscode-editor-foreground,var(--theia-panel-foreground,var(--ws-palette-grey-50)));--ws-grey-50:var(--ws-bg-foreground);--ws-grey-100:var(--vscode-panel-background,var(--theia-panel-background,var(--ws-palette-grey-100)));--ws-grey-950:var(--vscode-panel-border,var(--theia-border-color,var(--ws-palette-grey-950)));--ws-grey-500:var(--vscode-descriptionForeground,var(--ws-palette-grey-500));--ws-grey-800:var(--vscode-descriptionForeground,var(--ws-palette-grey-800));--ws-card-bg:var(--vscode-editorGroupHeader-tabsBackground,var(--theia-editor-group-header-background,var(--ws-palette-grey-900)));--ws-card-border:var(--vscode-editorGroupHeader-tabsBorder,var(--theia-editor-group-header-background,var(--ws-palette-grey-50)));--ws-palette-input-bg:#1e1e1e;--ws-palette-input-border:#3c3c3c;--ws-palette-input-text:#ccc;--ws-palette-input-placeholder:#8c8c8c;--ws-palette-input-focus-border:#007acc;--ws-input-bg:var(--vscode-input-background,var(--theia-input-background,var(--ws-palette-input-bg)));--ws-input-border:var(--vscode-input-border,var(--theia-input-border,var(--ws-palette-input-border)));--ws-input-text:var(--vscode-input-foreground,var(--theia-input-foreground,var(--ws-palette-input-text)));--ws-input-placeholder:var(--vscode-input-placeholderForeground,var(--theia-input-placeholderForeground,var(--ws-palette-input-placeholder)));--ws-input-focus-border:var(--vscode-focusBorder,var(--theia-focusBorder,var(--ws-palette-primary-500)));--ws-select-bg:var(--vscode-dropdown-background,var(--theia-dropdown-background,var(--ws-input-bg)));--ws-select-border:var(--vscode-dropdown-border,var(--theia-dropdown-border,var(--ws-input-border)));--ws-select-text:var(--vscode-dropdown-foreground,var(--theia-dropdown-foreground,var(--ws-input-text)));--ws-select-list-bg:var(--vscode-dropdown-listBackground,var(--theia-dropdown-listBackground,var(--ws-palette-input-bg)));--ws-input-option-hover-bg:var(--vscode-list-hoverBackground,var(--theia-list-hoverBackground,var(--ws-palette-primary-700)));--ws-input-option-active-bg:var(--vscode-list-activeSelectionBackground,var(--theia-list-activeSelectionBackground,var(--ws-palette-primary-500)));--ws-input-option-active-text:var(--vscode-list-activeSelectionForeground,var(--theia-list-activeSelectionForeground,var(--ws-palette-white)));--ws-input-error-border:var(--vscode-inputValidation-errorBorder,var(--theia-inputValidation-errorBorder,var(--ws-palette-negative-500)));--ws-input-error-bg:var(--vscode-inputValidation-errorBackground,var(--theia-inputValidation-errorBackground,var(--ws-palette-negative-200)));--ws-input-warning-border:var(--vscode-inputValidation-warningBorder,var(--theia-inputValidation-warningBorder,var(--ws-palette-warning-500)));--ws-input-warning-bg:var(--vscode-inputValidation-warningBackground,var(--theia-inputValidation-warningBackground,var(--ws-palette-warning-200)));--ws-input-info-bg:var(--vscode-panel-background,var(--theia-inputValidation-infoBackground,var(--ws-palette-primary-200)));--ws-input-message-bg:var(--vscode-editor-lineHighlightBackground,var(--theia-inputValidation-infoBackground,var(--ws-palette-primary-200)));--ws-input-message-text:var(--vscode-editorInfo-foreground,var(--theia-inputValidation-infoForeground,var(--ws-palette-primary-500)));--ws-inactive-text:var(--vscode-disabledForeground,var(--theia-disabled-foreground,var(--ws-palette-grey-200)));--ws-disable-bg:var(--vscode-editorInfo-foreground,var(--theia-button-disabledBackground,var(--ws-palette-grey-300)));--ws-panel-0:var(--vscode-editor-background,var(--theia-editor-background,var(--ws-palette-grey-950)));--ws-panel-1:var(--vscode-sideBar-background,var(--theia-sideBar-background,var(--ws-palette-grey-700)));--ws-panel-2:var(--vscode-panel-background,var(--theia-panel-background,var(--ws-palette-grey-900)));--ws-panel-3:var(--vscode-editorGroupHeader-tabsBackground,var(--theia-editor-group-header-background,var(--ws-palette-grey-900)));--ws-panel-4:var(--vscode-editorWidget-background,var(--theia-editorWidget-background,var(--ws-palette-grey-300)));--ws-panel-border-subtle:var(--vscode-panel-border,var(--theia-border-color,var(--ws-palette-grey-200)));--ws-panel-border-strong:var(--vscode-contrastBorder,var(--theia-contrastBorder,var(--ws-palette-grey-300)));--ws-tab-bg-default:var(--vscode-editorGroupHeader-tabsBackground,var(--ws-palette-grey-900));--ws-tab-border:var(--vscode-tab-border,var(--ws-palette-grey-950));--ws-tab-active-bg:var(--vscode-tab-activeBackground,var(--ws-palette-grey-800));--ws-tab-active-fg:var(--vscode-tab-activeForeground,var(--ws-bg-foreground));--ws-tab-inactive-bg:var(--vscode-tab-inactiveBackground,var(--ws-palette-grey-900));--ws-tab-inactive-fg:var(--vscode-tab-inactiveForeground,var(--ws-palette-grey-200));--ws-tab-hover-bg:var(--vscode-tab-hoverBackground,var(--ws-palette-grey-700));--ws-panel-header-bg:var(--vscode-sideBarSectionHeader-background,var(--ws-palette-grey-800));--ws-panel-header-fg:var(--vscode-sideBarSectionHeader-foreground,var(--ws-bg-foreground));--ws-panel-bg:var(--vscode-panel-background,var(--ws-bg-default));--ws-panel-border:var(--vscode-panel-border,var(--ws-palette-grey-950));--ws-panel-title-active-border:var(--vscode-panelTitle-activeBorder,var(--ws-palette-primary-500));--ws-panel-title-active-fg:var(--vscode-panelTitle-activeForeground,var(--ws-bg-foreground));--ws-panel-title-inactive-fg:var(--vscode-panelTitle-inactiveForeground,var(--ws-palette-grey-100))}.center-absolute:not(#\\#){--tw-translate-x: -50% ;--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y);transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,);position:absolute;top:50%;left:50%}.ws-group:hover .ws-checkbox-hover-target{opacity:1!important}.simplebar-scrollbar:not(#\\#):before{background-color:#ccc}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}[data-simplebar]{position:relative;flex-direction:column;flex-wrap:wrap;justify-content:flex-start;align-content:flex-start;align-items:flex-start}.simplebar-wrapper{overflow:hidden;width:inherit;height:inherit;max-width:inherit;max-height:inherit}.simplebar-mask{direction:inherit;position:absolute;overflow:hidden;padding:0;margin:0;left:0;top:0;bottom:0;right:0;width:auto!important;height:auto!important;z-index:0}.simplebar-offset{direction:inherit!important;box-sizing:inherit!important;resize:none!important;position:absolute;top:0;left:0;bottom:0;right:0;padding:0;margin:0;-webkit-overflow-scrolling:touch}.simplebar-content-wrapper{direction:inherit;box-sizing:border-box!important;position:relative;display:block;height:100%;width:auto;max-width:100%;max-height:100%;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.simplebar-content-wrapper::-webkit-scrollbar,.simplebar-hide-scrollbar::-webkit-scrollbar{display:none;width:0;height:0}.simplebar-content:after,.simplebar-content:before{content:" ";display:table}.simplebar-placeholder{max-height:100%;max-width:100%;width:100%;pointer-events:none}.simplebar-height-auto-observer-wrapper{box-sizing:inherit!important;height:100%;width:100%;max-width:1px;position:relative;float:left;max-height:1px;overflow:hidden;z-index:-1;padding:0;margin:0;pointer-events:none;flex-grow:inherit;flex-shrink:0;flex-basis:0}.simplebar-height-auto-observer{box-sizing:inherit;display:block;opacity:0;position:absolute;top:0;left:0;height:1000%;width:1000%;min-height:1px;min-width:1px;overflow:hidden;pointer-events:none;z-index:-1}.simplebar-track{z-index:1;position:absolute;right:0;bottom:0;pointer-events:none;overflow:hidden}[data-simplebar].simplebar-dragging,[data-simplebar].simplebar-dragging .simplebar-content{pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-simplebar].simplebar-dragging .simplebar-track{pointer-events:all}.simplebar-scrollbar{position:absolute;left:0;right:0;min-height:10px}.simplebar-scrollbar:before{position:absolute;content:"";background:#000;border-radius:7px;left:2px;right:2px;opacity:0;transition:opacity .2s .5s linear}.simplebar-scrollbar.simplebar-visible:before{opacity:.5;transition-delay:0s;transition-duration:0s}.simplebar-track.simplebar-vertical{top:0;width:11px}.simplebar-scrollbar:before{top:2px;bottom:2px;left:2px;right:2px}.simplebar-track.simplebar-horizontal{left:0;height:11px}.simplebar-track.simplebar-horizontal .simplebar-scrollbar{right:auto;left:0;top:0;bottom:0;min-height:0;min-width:10px;width:auto}[data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical{right:auto;left:0}.simplebar-dummy-scrollbar-size{direction:rtl;position:fixed;opacity:0;visibility:hidden;height:500px;width:500px;overflow-y:hidden;overflow-x:scroll;-ms-overflow-style:scrollbar!important}.simplebar-dummy-scrollbar-size>div{width:200%;height:200%;margin:10px 0}.simplebar-hide-scrollbar{position:fixed;left:0;visibility:hidden;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}
`, document.head.appendChild(e4);
  } catch (e4) {
    console.error("vite-plugin-inject-css: failed to inject css", e4);
  }
})();
const ZM = (e4) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e4, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "path",
  {
    d: "M21.66 6.28a.5.5 0 0 0 0-.697l-.967-.993a.5.5 0 0 0-.716 0L8.499 16.373 4.023 11.78a.5.5 0 0 0-.716 0l-.967.993a.5.5 0 0 0 0 .697l5.889 6.046.014-.014a.377.377 0 0 0 .54 0L21.66 6.28Z",
    fill: "currentColor"
  }
) }), ww = (e4) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e4, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "path",
  {
    d: "M4.497 5.361a.5.5 0 0 0 0 .707L10.429 12l-5.932 5.932a.5.5 0 0 0 0 .707l.864.864a.5.5 0 0 0 .707 0L12 13.571l5.932 5.932a.5.5 0 0 0 .707 0l.864-.864a.5.5 0 0 0 0-.707L13.571 12l5.932-5.932a.5.5 0 0 0 0-.707l-.864-.864a.5.5 0 0 0-.707 0L12 10.429 6.068 4.497a.5.5 0 0 0-.707 0l-.864.864Z",
    fill: "currentColor"
  }
) }), YM = (e4) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", ...e4, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "path",
  {
    d: "M20.673 5.133c.136.24.053.55-.185.69l-16.25 9.623a.487.487 0 0 1-.676-.18l-.497-.884a.513.513 0 0 1 .185-.69L19.5 4.069c.238-.141.54-.06.676.18l.497.884ZM20.938 9.657c.136.24.053.55-.185.69L7.925 17.944a.487.487 0 0 1-.676-.181l-.497-.884a.513.513 0 0 1 .185-.69l12.829-7.597c.237-.14.54-.06.675.181l.497.884ZM20.16 15.376c.237-.14.32-.45.184-.69l-.497-.884a.487.487 0 0 0-.676-.18l-7.695 4.556a.513.513 0 0 0-.185.69l.498.884c.135.24.437.322.675.181l7.695-4.557Z",
    fill: "currentColor"
  }
) }), XM = (e4, t) => {
  const r = new Array(e4.length + t.length);
  for (let n = 0; n < e4.length; n++)
    r[n] = e4[n];
  for (let n = 0; n < t.length; n++)
    r[e4.length + n] = t[n];
  return r;
}, JM = (e4, t) => ({
  classGroupId: e4,
  validator: t
}), xw = (e4 = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e4,
  validators: t,
  classGroupId: r
}), zl = "-", pb = [], QM = "arbitrary..", e$ = (e4) => {
  const t = r$(e4), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e4;
  return {
    getClassGroupId: (o) => {
      if (o.startsWith("[") && o.endsWith("]"))
        return t$(o);
      const a = o.split(zl), l = a[0] === "" && a.length > 1 ? 1 : 0;
      return _w(a, l, t);
    },
    getConflictingClassGroupIds: (o, a) => {
      if (a) {
        const l = n[o], c = r[o];
        return l ? c ? XM(c, l) : l : c || pb;
      }
      return r[o] || pb;
    }
  };
}, _w = (e4, t, r) => {
  if (e4.length - t === 0)
    return r.classGroupId;
  const n = e4[t], o = r.nextPart.get(n);
  if (o) {
    const u = _w(e4, t + 1, o);
    if (u) return u;
  }
  const a = r.validators;
  if (a === null)
    return;
  const l = t === 0 ? e4.join(zl) : e4.slice(t).join(zl), c = a.length;
  for (let u = 0; u < c; u++) {
    const d = a[u];
    if (d.validator(l))
      return d.classGroupId;
  }
}, t$ = (e4) => e4.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e4.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? QM + n : void 0;
})(), r$ = (e4) => {
  const {
    theme: t,
    classGroups: r
  } = e4;
  return n$(r, t);
}, n$ = (e4, t) => {
  const r = xw();
  for (const n in e4) {
    const o = e4[n];
    lp(o, r, n, t);
  }
  return r;
}, lp = (e4, t, r, n) => {
  const o = e4.length;
  for (let a = 0; a < o; a++) {
    const l = e4[a];
    i$(l, t, r, n);
  }
}, i$ = (e4, t, r, n) => {
  if (typeof e4 == "string") {
    o$(e4, t, r);
    return;
  }
  if (typeof e4 == "function") {
    a$(e4, t, r, n);
    return;
  }
  s$(e4, t, r, n);
}, o$ = (e4, t, r) => {
  const n = e4 === "" ? t : Sw(t, e4);
  n.classGroupId = r;
}, a$ = (e4, t, r, n) => {
  if (l$(e4)) {
    lp(e4(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(JM(r, e4));
}, s$ = (e4, t, r, n) => {
  const o = Object.entries(e4), a = o.length;
  for (let l = 0; l < a; l++) {
    const [c, u] = o[l];
    lp(u, Sw(t, c), r, n);
  }
}, Sw = (e4, t) => {
  let r = e4;
  const n = t.split(zl), o = n.length;
  for (let a = 0; a < o; a++) {
    const l = n[a];
    let c = r.nextPart.get(l);
    c || (c = xw(), r.nextPart.set(l, c)), r = c;
  }
  return r;
}, l$ = (e4) => "isThemeGetter" in e4 && e4.isThemeGetter === true, c$ = (e4) => {
  if (e4 < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const o = (a, l) => {
    r[a] = l, t++, t > e4 && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let l = r[a];
      if (l !== void 0)
        return l;
      if ((l = n[a]) !== void 0)
        return o(a, l), l;
    },
    set(a, l) {
      a in r ? r[a] = l : o(a, l);
    }
  };
}, fd = "!", hb = ":", u$ = [], gb = (e4, t, r, n, o) => ({
  modifiers: e4,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), f$ = (e4) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e4;
  let n = (o) => {
    const a = [];
    let l = 0, c = 0, u = 0, d;
    const p = o.length;
    for (let v = 0; v < p; v++) {
      const b = o[v];
      if (l === 0 && c === 0) {
        if (b === hb) {
          a.push(o.slice(u, v)), u = v + 1;
          continue;
        }
        if (b === "/") {
          d = v;
          continue;
        }
      }
      b === "[" ? l++ : b === "]" ? l-- : b === "(" ? c++ : b === ")" && c--;
    }
    const h = a.length === 0 ? o : o.slice(u);
    let g = h, y = false;
    h.endsWith(fd) ? (g = h.slice(0, -1), y = true) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(fd) && (g = h.slice(1), y = true)
    );
    const _ = d && d > u ? d - u : void 0;
    return gb(a, y, g, _);
  };
  if (t) {
    const o = t + hb, a = n;
    n = (l) => l.startsWith(o) ? a(l.slice(o.length)) : gb(u$, false, l, void 0, true);
  }
  if (r) {
    const o = n;
    n = (a) => r({
      className: a,
      parseClassName: o
    });
  }
  return n;
}, d$ = (e4) => {
  const t = /* @__PURE__ */ new Map();
  return e4.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let o = [];
    for (let a = 0; a < r.length; a++) {
      const l = r[a], c = l[0] === "[", u = t.has(l);
      c || u ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(l)) : o.push(l);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, p$ = (e4) => ({
  cache: c$(e4.cacheSize),
  parseClassName: f$(e4),
  sortModifiers: d$(e4),
  ...e$(e4)
}), h$ = /\s+/, g$ = (e4, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, l = [], c = e4.trim().split(h$);
  let u = "";
  for (let d = c.length - 1; d >= 0; d -= 1) {
    const p = c[d], {
      isExternal: h,
      modifiers: g,
      hasImportantModifier: y,
      baseClassName: _,
      maybePostfixModifierPosition: v
    } = r(p);
    if (h) {
      u = p + (u.length > 0 ? " " + u : u);
      continue;
    }
    let b = !!v, m = n(b ? _.substring(0, v) : _);
    if (!m) {
      if (!b) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (m = n(_), !m) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      b = false;
    }
    const w = g.length === 0 ? "" : g.length === 1 ? g[0] : a(g).join(":"), x = y ? w + fd : w, k = x + m;
    if (l.indexOf(k) > -1)
      continue;
    l.push(k);
    const E = o(m, b);
    for (let R = 0; R < E.length; ++R) {
      const z = E[R];
      l.push(x + z);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
}, v$ = (...e4) => {
  let t = 0, r, n, o = "";
  for (; t < e4.length; )
    (r = e4[t++]) && (n = Ew(r)) && (o && (o += " "), o += n);
  return o;
}, Ew = (e4) => {
  if (typeof e4 == "string")
    return e4;
  let t, r = "";
  for (let n = 0; n < e4.length; n++)
    e4[n] && (t = Ew(e4[n])) && (r && (r += " "), r += t);
  return r;
}, vb = (e4, ...t) => {
  let r, n, o, a;
  const l = (u) => {
    const d = t.reduce((p, h) => h(p), e4());
    return r = p$(d), n = r.cache.get, o = r.cache.set, a = c, c(u);
  }, c = (u) => {
    const d = n(u);
    if (d)
      return d;
    const p = g$(u, r);
    return o(u, p), p;
  };
  return a = l, (...u) => a(v$(...u));
}, m$ = [], Et = (e4) => {
  const t = (r) => r[e4] || m$;
  return t.isThemeGetter = true, t;
}, kw = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ow = /^\((?:(\w[\w-]*):)?(.+)\)$/i, b$ = /^\d+\/\d+$/, y$ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, w$ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, x$ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, _$ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, S$ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Qi = (e4) => b$.test(e4), Ie = (e4) => !!e4 && !Number.isNaN(Number(e4)), Vn = (e4) => !!e4 && Number.isInteger(Number(e4)), Sf = (e4) => e4.endsWith("%") && Ie(e4.slice(0, -1)), _n = (e4) => y$.test(e4), E$ = () => true, k$ = (e4) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  w$.test(e4) && !x$.test(e4)
), Aw = () => false, O$ = (e4) => _$.test(e4), A$ = (e4) => S$.test(e4), T$ = (e4) => !me(e4) && !be(e4), R$ = (e4) => bo(e4, Cw, Aw), me = (e4) => kw.test(e4), vi = (e4) => bo(e4, Pw, k$), Ef = (e4) => bo(e4, M$, Ie), mb = (e4) => bo(e4, Tw, Aw), C$ = (e4) => bo(e4, Rw, A$), Qs = (e4) => bo(e4, Iw, O$), be = (e4) => Ow.test(e4), la = (e4) => yo(e4, Pw), P$ = (e4) => yo(e4, $$), bb = (e4) => yo(e4, Tw), I$ = (e4) => yo(e4, Cw), N$ = (e4) => yo(e4, Rw), el = (e4) => yo(e4, Iw, true), bo = (e4, t, r) => {
  const n = kw.exec(e4);
  return n ? n[1] ? t(n[1]) : r(n[2]) : false;
}, yo = (e4, t, r = false) => {
  const n = Ow.exec(e4);
  return n ? n[1] ? t(n[1]) : r : false;
}, Tw = (e4) => e4 === "position" || e4 === "percentage", Rw = (e4) => e4 === "image" || e4 === "url", Cw = (e4) => e4 === "length" || e4 === "size" || e4 === "bg-size", Pw = (e4) => e4 === "length", M$ = (e4) => e4 === "number", $$ = (e4) => e4 === "family-name", Iw = (e4) => e4 === "shadow", yb = () => {
  const e4 = Et("color"), t = Et("font"), r = Et("text"), n = Et("font-weight"), o = Et("tracking"), a = Et("leading"), l = Et("breakpoint"), c = Et("container"), u = Et("spacing"), d = Et("radius"), p = Et("shadow"), h = Et("inset-shadow"), g = Et("text-shadow"), y = Et("drop-shadow"), _ = Et("blur"), v = Et("perspective"), b = Et("aspect"), m = Et("ease"), w = Et("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], E = () => [...k(), be, me], R = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", "contain", "none"], A = () => [be, me, u], P = () => [Qi, "full", "auto", ...A()], B = () => [Vn, "none", "subgrid", be, me], $ = () => ["auto", {
    span: ["full", Vn, be, me]
  }, Vn, be, me], N = () => [Vn, "auto", be, me], j = () => ["auto", "min", "max", "fr", be, me], F = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], I = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...A()], Y = () => [Qi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...A()], G = () => [e4, be, me], ge = () => [...k(), bb, mb, {
    position: [be, me]
  }], L = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], V = () => ["auto", "cover", "contain", I$, R$, {
    size: [be, me]
  }], te = () => [Sf, la, vi], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    be,
    me
  ], X = () => ["", Ie, la, vi], ae = () => ["solid", "dashed", "dotted", "double"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ie = () => [Ie, Sf, bb, mb], ce = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    be,
    me
  ], de = () => ["none", Ie, be, me], fe = () => ["none", Ie, be, me], we = () => [Ie, be, me], Z = () => [Qi, "full", ...A()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [_n],
      breakpoint: [_n],
      color: [E$],
      container: [_n],
      "drop-shadow": [_n],
      ease: ["in", "out", "in-out"],
      font: [T$],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [_n],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [_n],
      shadow: [_n],
      spacing: ["px", Ie],
      text: [_n],
      "text-shadow": [_n],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Qi, me, be, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ie, me, be, c]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: P()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: P()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Vn, "auto", be, me]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Qi, "full", "auto", c, ...A()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Ie, Qi, "auto", "initial", "none", me]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ie, be, me]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ie, be, me]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Vn, "first", "last", "none", be, me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": B()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: $()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": B()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: $()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: A()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": A()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": A()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...F(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...I(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...I()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...F()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...I(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": F()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...I(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...I()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: A()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: A()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: A()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: A()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: A()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: A()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: A()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: A()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: A()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": A()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": A()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [c, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          c,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          c,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [l]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, la, vi]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, be, Ef]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Sf, me]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [P$, me, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, be, me]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Ie, "none", be, Ef]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...A()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", be, me]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", be, me]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: G()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: G()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ae(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ie, "from-font", "auto", be, vi]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: G()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Ie, "auto", be, me]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: A()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", be, me]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", be, me]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ge()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: L()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: V()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Vn, be, me],
          radial: ["", be, me],
          conic: [Vn, be, me]
        }, N$, C$]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: G()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: te()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: te()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: te()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: G()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: G()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: G()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Q()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Q()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Q()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Q()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Q()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Q()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Q()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Q()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Q()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Q()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Q()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Q()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Q()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Q()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Q()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: X()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": X()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": X()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": X()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": X()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": X()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": X()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": X()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": X()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": X()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": X()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ae(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ae(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: G()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": G()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": G()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": G()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": G()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": G()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": G()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": G()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": G()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: G()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ae(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ie, be, me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ie, la, vi]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: G()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          el,
          Qs
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: G()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, el, Qs]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": G()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: X()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: G()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Ie, vi]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": G()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": X()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": G()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, el, Qs]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": G()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ie, be, me]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Ie]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ie()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ie()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": G()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": G()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ie()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ie()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": G()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": G()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ie()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ie()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": G()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": G()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ie()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ie()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": G()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": G()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ie()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ie()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": G()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": G()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ie()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ie()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": G()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": G()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ie()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ie()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": G()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": G()
      }],
      "mask-image-radial": [{
        "mask-radial": [be, me]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ie()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ie()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": G()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": G()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ie]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ie()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ie()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": G()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": G()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ge()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: L()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: V()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", be, me]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          be,
          me
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ce()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Ie, be, me]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ie, be, me]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          y,
          el,
          Qs
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": G()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Ie, be, me]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ie, be, me]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ie, be, me]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ie, be, me]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ie, be, me]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          be,
          me
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ce()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Ie, be, me]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ie, be, me]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ie, be, me]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ie, be, me]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ie, be, me]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ie, be, me]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ie, be, me]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ie, be, me]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": A()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": A()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": A()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", be, me]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Ie, "initial", be, me]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", m, be, me]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Ie, be, me]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, be, me]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, be, me]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: de()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": de()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": de()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": de()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: fe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": fe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": fe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": fe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: we()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": we()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": we()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [be, me, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Z()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Z()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Z()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Z()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: G()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: G()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", be, me]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", be, me]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...G()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ie, la, vi, Ef]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...G()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, D$ = (e4, {
  cacheSize: t,
  prefix: r,
  experimentalParseClassName: n,
  extend: o = {},
  override: a = {}
}) => (ma(e4, "cacheSize", t), ma(e4, "prefix", r), ma(e4, "experimentalParseClassName", n), tl(e4.theme, a.theme), tl(e4.classGroups, a.classGroups), tl(e4.conflictingClassGroups, a.conflictingClassGroups), tl(e4.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), ma(e4, "orderSensitiveModifiers", a.orderSensitiveModifiers), rl(e4.theme, o.theme), rl(e4.classGroups, o.classGroups), rl(e4.conflictingClassGroups, o.conflictingClassGroups), rl(e4.conflictingClassGroupModifiers, o.conflictingClassGroupModifiers), Nw(e4, o, "orderSensitiveModifiers"), e4), ma = (e4, t, r) => {
  r !== void 0 && (e4[t] = r);
}, tl = (e4, t) => {
  if (t)
    for (const r in t)
      ma(e4, r, t[r]);
}, rl = (e4, t) => {
  if (t)
    for (const r in t)
      Nw(e4, t, r);
}, Nw = (e4, t, r) => {
  const n = t[r];
  n !== void 0 && (e4[r] = e4[r] ? e4[r].concat(n) : n);
}, L$ = (e4, ...t) => typeof e4 == "function" ? vb(yb, e4, ...t) : vb(() => D$(yb(), e4), ...t);
function Mw(e4) {
  return e4 && e4.__esModule && Object.prototype.hasOwnProperty.call(e4, "default") ? e4.default : e4;
}
var wb = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var xb;
function z$() {
  return xb || (xb = 1, (function(e4) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (a = o(a, n(c)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var l = "";
        for (var c in a)
          t.call(a, c) && a[c] && (l = o(l, c));
        return l;
      }
      function o(a, l) {
        return l ? a ? a + " " + l : a + l : a;
      }
      e4.exports ? (r.default = r, e4.exports = r) : window.classNames = r;
    })();
  })(wb)), wb.exports;
}
var F$ = z$();
const wo = /* @__PURE__ */ Mw(F$), H$ = L$({
  extend: {
    classGroups: {
      "font-size": ["text-xxs", "text-xs", "text-s", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl", "text-7xl", "text-8xl", "text-9xl"],
      "text-color": [
        "text-body",
        "text-muted",
        "text-inactive-text",
        "text-button-text",
        "text-positive-text",
        "text-negative-text",
        "text-negative",
        "text-warning-text",
        "text-input-text",
        "text-select-text",
        "text-input-message-text",
        "text-placeholder"
      ]
    }
  }
});
function Te(...e4) {
  return H$(wo(e4));
}
const Ua = {
  sm: {
    checkbox: "size-4",
    hoverSquare: "size-2.5",
    text: "text-xs",
    spacing: "gap-1",
    icon: "size-3.25"
  },
  md: {
    checkbox: "size-5",
    hoverSquare: "size-3.5",
    text: "text-sm",
    spacing: "gap-1.5",
    icon: "size-4"
  },
  lg: {
    checkbox: "size-6",
    hoverSquare: "size-4",
    text: "text-base",
    spacing: "gap-2",
    icon: "size-5"
  }
}, Cr = {
  primary: {
    checked: "bg-primary border-primary",
    unchecked: "border border-body bg-transparent",
    checkedHover: "hover:bg-primary-hover hover:border-primary-hover",
    hoverSquare: "bg-primary-hover",
    focus: "focus:ring-primary",
    label: "text-body"
  },
  positive: {
    checked: "bg-positive border-positive",
    unchecked: "border border-positive bg-transparent",
    checkedHover: "hover:bg-positive-hover hover:border-positive-hover",
    hoverSquare: "bg-positive-hover",
    focus: "focus:ring-positive",
    label: "text-positive"
  },
  warning: {
    checked: "bg-warning border-warning",
    unchecked: "border border-warning bg-transparent",
    checkedHover: "hover:bg-warning-hover hover:border-warning-hover",
    hoverSquare: "bg-warning-hover",
    focus: "focus:ring-warning",
    label: "text-warning"
  },
  negative: {
    checked: "bg-negative border-negative",
    unchecked: "border border-negative bg-transparent",
    checkedHover: "hover:bg-negative-hover hover:border-negative-hover",
    hoverSquare: "bg-negative-hover",
    focus: "focus:ring-negative",
    label: "text-negative"
  }
}, W$ = `
  appearance-none border rounded transition-all duration-200
  focus:ring-2 focus:ring-offset-2 focus:outline-hidden
  relative
`, B$ = (e4, t, r) => {
  const { isChecked: n, isIndeterminate: o, isDisabled: a, isInvalid: l } = r, c = n || o;
  return Te(
    W$,
    Ua[e4].checkbox,
    { "cursor-pointer": !a },
    l ? {
      // Invalid state uses negative color scheme
      [Cr.negative.checked]: c,
      [Cr.negative.unchecked]: !c,
      // Hover states (only when not disabled)
      [Cr.negative.checkedHover]: !a && c,
      // Focus and disabled states
      [Cr.negative.focus]: !a,
      "border-panel-subtle": a
    } : {
      // Checked/unchecked state styles
      [Cr[t].checked]: c && !a,
      [Cr[t].unchecked]: !c && !a,
      // Hover states (only when not disabled)
      [Cr[t].checkedHover]: !a && c,
      // Focus and disabled states
      [Cr[t].focus]: !a,
      "border-panel-subtle": a,
      "bg-panel-subtle": a && c
    }
  );
}, j$ = (e4, t, r) => {
  const { isDisabled: n, isInvalid: o } = r;
  return Te(
    Ua[e4].text,
    o ? {
      [Cr.negative.label]: o
    } : {
      "text-muted": n,
      [Cr[t].label]: !n,
      "cursor-pointer": !n
    }
  );
}, U$ = (e4) => Te(
  "inline-flex items-center ws-group",
  Ua[e4].spacing
), V$ = (e4, t, r) => Te(
  "center-absolute rounded-xs transition-all duration-200 opacity-0  ws-checkbox-hover-target",
  Ua[e4].hoverSquare,
  {
    [Cr.negative.hoverSquare]: r,
    [Cr[t].hoverSquare]: !r
  }
), q$ = (e4) => `${Ua[e4].icon} text-body`, G$ = (e4) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "svg",
  {
    className: `absolute inset-0 ${e4.className}`,
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ...e4,
    children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "2",
        fill: "none"
      }
    )
  }
), K$ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    label: e4,
    isDisabled: t = false,
    isInvalid: r = false,
    isRequired: n = false,
    size: o = "md",
    color: a = "primary",
    onChange: l,
    onFocus: c,
    onBlur: u,
    value: d,
    defaultValue: p,
    name: h,
    id: g,
    ...y
  }, _) => {
    const [v, b] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(p), m = d === true || v === true, w = d === null, x = m || w, k = {
      isChecked: m,
      isIndeterminate: w,
      isDisabled: t,
      isInvalid: r
    }, E = B$(o, a, k), R = j$(o, a, k), z = U$(o), A = V$(o, a, r), P = q$(o);
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { "data-qui": "Checkbox", className: z, children: [
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: E, children: [
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "input",
          {
            ref: _,
            type: "checkbox",
            className: "sr-only",
            checked: m,
            disabled: t,
            required: n,
            onChange: (B) => {
              d === void 0 && b(B.target.checked), l == null || l(B);
            },
            onFocus: c,
            onBlur: u,
            name: h,
            id: g,
            ...y
          }
        ),
        x && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "center-absolute", children: w ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(G$, { className: P }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ZM, { className: P }) }),
        !x && !t && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: A })
      ] }),
      e4 && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: R, children: [
        e4,
        n && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "text-negative ml-1", children: "*" })
      ] })
    ] });
  }
);
K$.displayName = "Checkbox";
const Va = {
  sm: {
    container: "gap-2",
    radio: "size-3",
    label: "text-xs",
    dot: "size-2",
    hoverDot: "size-1.5"
  },
  md: {
    container: "gap-2.5",
    radio: "size-4",
    label: "text-sm",
    dot: "size-2.5",
    hoverDot: "size-2"
  },
  lg: {
    container: "gap-3",
    radio: "size-6",
    label: "text-base",
    dot: "size-4",
    hoverDot: "size-3"
  }
}, Pa = {
  primary: {
    radio: "border-body-light group-hover:border-body",
    radioInvalid: "border-negative",
    dot: "bg-primary group-hover:bg-primary-hover",
    hoverDot: "bg-primary-hover",
    label: "text-body"
  },
  positive: {
    radio: "border-positive group-hover:border-positive-text",
    radioInvalid: "border-negative",
    dot: "bg-positive group-hover:bg-positive-hover",
    hoverDot: "bg-positive-bg",
    label: "text-positive-text"
  },
  warning: {
    radio: "border-warning group-hover:border-warning-text",
    radioInvalid: "border-negative",
    dot: "bg-warning group-hover:bg-warning-hover",
    hoverDot: "bg-warning-bg",
    label: "text-warning-text"
  },
  negative: {
    radio: "border-negative group-hover:border-negative-text",
    radioInvalid: "border-negative",
    dot: "bg-negative group-hover:bg-negative-hover",
    hoverDot: "bg-negative-bg",
    label: "text-negative"
  }
}, Z$ = `
  relative rounded-full border transition-all duration-200 ease-in-out bg-transparent
  focus:outline-hidden focus:ring-2 focus:ring-offset-0
  cursor-pointer peer
`, Y$ = (e4, t, r) => {
  const { isDisabled: n, isInvalid: o } = r;
  return wo(
    Z$,
    Va[e4].radio,
    o ? Pa[t].radioInvalid : {
      [Pa[t].radio]: !n,
      "cursor-not-allowed opacity-60": n
    }
  );
}, X$ = (e4, t, r) => {
  const { checked: n, isDisabled: o, isInvalid: a } = r;
  return wo(
    "center-absolute rounded-full transition-all duration-200 ease-in-out",
    Va[e4].dot,
    a ? "bg-negative" : {
      [Pa[t].dot]: !o,
      "border-neutral": o,
      "opacity-0 scale-0": !n,
      "opacity-100 scale-100": n && !o
    }
  );
}, J$ = (e4, t, r) => wo(
  "center-absolute rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100",
  Va[e4].hoverDot,
  {
    [Pa[t].hoverDot]: !r,
    "bg-negative-bg": r
  }
), Q$ = (e4, t, r) => {
  const { isDisabled: n, isInvalid: o } = r;
  return wo(
    "cursor-pointer select-none transition-colors duration-200",
    Va[e4].label,
    o ? {
      "text-negative": o
    } : {
      [Pa[t].label]: !n,
      "text-muted": n
    }
  );
}, eD = (e4, t) => wo(
  "inline-flex items-center group",
  Va[e4].container,
  t
), tD = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null), rD = () => {
  const e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(tD);
  if (!e4)
    throw new Error("Radio.Item must be used within Radio.Group");
  return e4;
}, nD = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    value: e4,
    label: t,
    size: r,
    color: n,
    isDisabled: o,
    isInvalid: a,
    isRequired: l,
    className: c,
    ...u
  }, d) => {
    const p = rD(), h = r ?? p.size, g = n ?? p.color, y = o ?? p.isDisabled, _ = a ?? p.isInvalid, v = l ?? p.isRequired, b = p.value === e4, m = {
      checked: b,
      isDisabled: y,
      isInvalid: _
    }, w = Y$(h, g, m), x = X$(h, g, m), k = J$(h, g, _), E = Q$(h, g, m), R = eD(h, c), z = () => {
      y || p.onChange(e4);
    };
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { "data-qui": "RadioItem", className: R, children: [
      /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "input",
          {
            ref: d,
            type: "radio",
            value: e4,
            checked: b,
            disabled: y,
            required: v,
            "aria-invalid": _,
            "aria-label": t ? void 0 : u["aria-label"],
            name: p.name,
            onChange: z,
            className: "sr-only",
            ...u
          }
        ),
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: w, children: [
          /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: x }),
          !b && !y && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: k })
        ] })
      ] }),
      t && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: E, children: [
        t,
        v && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "text-negative ml-1", children: "*" })
      ] })
    ] });
  }
);
nD.displayName = "RadioItem";
const $w = {
  sm: {
    container: "h-4.5 p-1 rounded",
    text: "text-xxs"
  },
  md: {
    container: "h-6 p-1 rounded",
    text: "text-s"
  },
  lg: {
    container: "h-7 p-1 rounded",
    text: "text-sm"
  },
  xl: {
    container: "h-7.5 p-1 rounded",
    text: "text-lg"
  }
}, iD = {
  primary: {
    bg: {
      solid: "bg-primary",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-primary",
      ghost: "text-primary"
    },
    border: {
      solid: "border-primary",
      outline: "border-primary",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-primary-hover hover:border-primary-hover",
      outline: "hover:border-black hover:text-primary-hover",
      ghost: "hover:bg-primary-hover hover:text-body"
    }
  },
  white: {
    bg: {
      solid: "bg-white",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-primary",
      outline: "text-body",
      ghost: "text-body"
    },
    border: {
      solid: "border-white",
      outline: "border-white",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-canvas-subtle hover:border-canvas-subtle",
      outline: "hover:border-canvas hover:text-canvas",
      ghost: "hover:bg-primary-hover hover:text-body"
    }
  },
  positive: {
    bg: {
      solid: "bg-positive",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-positive-text",
      ghost: "text-positive-text"
    },
    border: {
      solid: "border-positive",
      outline: "border-positive",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-positive-hover hover:border-positive-hover",
      outline: "hover:border-positive-hover hover:text-positive-hover",
      ghost: "hover:bg-positive-hover hover:text-body"
    }
  },
  warning: {
    bg: {
      solid: "bg-warning",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-warning-text",
      ghost: "text-warning-text"
    },
    border: {
      solid: "border-warning",
      outline: "border-warning",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-warning-hover hover:border-warning-hover",
      outline: "hover:border-warning-hover hover:text-warning-hover",
      ghost: "hover:bg-warning-hover hover:text-body"
    }
  },
  negative: {
    bg: {
      solid: "bg-negative",
      outline: "bg-transparent",
      ghost: "bg-transparent"
    },
    text: {
      solid: "text-button-text",
      outline: "text-negative",
      ghost: "text-negative"
    },
    border: {
      solid: "border-negative",
      outline: "border-negative",
      ghost: "border-transparent"
    },
    hover: {
      solid: "hover:bg-negative-hover hover:border-negative-hover",
      outline: "hover:border-negative-hover hover:text-negative-hover",
      ghost: "hover:bg-negative-hover hover:text-body"
    }
  }
}, oD = (e4, t, r, n) => {
  const o = $w[e4], a = iD[r], l = Te(
    "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-hidden border",
    { "cursor-pointer": !n },
    o.container
  );
  return n ? Te(l, "text-inactive-text", {
    "border-panel": t !== "ghost" && t === "solid",
    "border-panel-subtle": t === "outline",
    "bg-panel": t === "solid",
    "bg-transparent ": t === "outline" || t === "ghost",
    "border-transparent": t === "ghost"
  }) : Te(
    l,
    a.bg[t],
    a.text[t],
    a.hover[t],
    a.border[t]
  );
}, aD = (e4) => Te(
  "flex items-center justify-center gap-1",
  $w[e4].text
), sD = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    size: e4 = "md",
    variant: t = "solid",
    color: r = "primary",
    className: n,
    children: o,
    disabled: a,
    ...l
  }, c) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      "data-qui": "Button",
      ref: c,
      type: "button",
      className: Te(
        oD(e4, t, r, a),
        aD(e4),
        n
      ),
      disabled: a,
      ...l,
      children: o
    }
  )
);
sD.displayName = "Button";
const lD = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null), Dw = () => {
  const e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(lD);
  if (!e4)
    throw new Error("Input components must be used within Input.Root");
  return e4;
}, Lw = {
  sm: {
    group: "h-5 min-h-fit",
    input: "text-2.25",
    message: "text-2.25 p-1.5",
    icon: "text-sm"
  },
  md: {
    group: "h-6 min-h-fit",
    input: "text-xs",
    message: "text-xs p-2",
    icon: "text-base"
  },
  lg: {
    group: "h-7 min-h-fit",
    input: "text-s",
    message: "text-s p-2.5",
    icon: "text-lg"
  }
}, zw = {
  primary: {
    border: "border border-input-border focus-within:border-input-focus-border",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-input-focus-border",
    text: "text-input-text",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-input-message-text",
    messageBackground: "bg-input-message-bg",
    icon: "text-input-text",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  },
  positive: {
    border: "border border-input-border focus-within:border-positive",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-positive",
    text: "text-input-text",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-positive-dark",
    messageBackground: "bg-positive-light",
    icon: "text-positive-text",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  },
  warning: {
    border: "border border-input-border focus-within:border-input-warning-border",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-input-warning-border",
    text: "text-input-text",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-warning-dark",
    messageBackground: "bg-input-warning-bg",
    icon: "text-warning-text",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  },
  negative: {
    border: "border border-input-border focus-within:border-input-error-border",
    borderInvalid: "ring-input-error-border",
    borderMessage: "ring-input-error-border",
    text: "text-input-text",
    placeholder: "placeholder:text-input-placeholder",
    messageText: "text-negative-dark",
    messageBackground: "bg-input-error-bg",
    icon: "text-negative",
    action: "text-input-text",
    actionHover: "hover:text-body hover:bg-primary-hover"
  }
}, cD = ({
  size: e4,
  color: t
}) => Te(
  "bg-transparent ring-0 w-full",
  "focus:outline-hidden",
  [Lw[e4].input],
  zw[t].placeholder
), _b = ({
  size: e4,
  color: t
}) => Te(
  "bg-transparent ring-0 w-full h-fit resize-none py-0.5",
  "focus:outline-hidden",
  Lw[e4].input,
  zw[t].placeholder
);
function Fl(e4) {
  var t = typeof e4;
  return e4 != null && (t == "object" || t == "function");
}
var uD = typeof global == "object" && global && global.Object === Object && global, fD = typeof self == "object" && self && self.Object === Object && self, Fw = uD || fD || Function("return this")(), kf = function() {
  return Fw.Date.now();
}, dD = /\s/;
function pD(e4) {
  for (var t = e4.length; t-- && dD.test(e4.charAt(t)); )
    ;
  return t;
}
var hD = /^\s+/;
function gD(e4) {
  return e4 && e4.slice(0, pD(e4) + 1).replace(hD, "");
}
var Hl = Fw.Symbol, Hw = Object.prototype, vD = Hw.hasOwnProperty, mD = Hw.toString, ca = Hl ? Hl.toStringTag : void 0;
function bD(e4) {
  var t = vD.call(e4, ca), r = e4[ca];
  try {
    e4[ca] = void 0;
    var n = true;
  } catch {
  }
  var o = mD.call(e4);
  return n && (t ? e4[ca] = r : delete e4[ca]), o;
}
var yD = Object.prototype, wD = yD.toString;
function xD(e4) {
  return wD.call(e4);
}
var _D = "[object Null]", SD = "[object Undefined]", Sb = Hl ? Hl.toStringTag : void 0;
function ED(e4) {
  return e4 == null ? e4 === void 0 ? SD : _D : Sb && Sb in Object(e4) ? bD(e4) : xD(e4);
}
function kD(e4) {
  return e4 != null && typeof e4 == "object";
}
var OD = "[object Symbol]";
function AD(e4) {
  return typeof e4 == "symbol" || kD(e4) && ED(e4) == OD;
}
var Eb = NaN, TD = /^[-+]0x[0-9a-f]+$/i, RD = /^0b[01]+$/i, CD = /^0o[0-7]+$/i, PD = parseInt;
function kb(e4) {
  if (typeof e4 == "number")
    return e4;
  if (AD(e4))
    return Eb;
  if (Fl(e4)) {
    var t = typeof e4.valueOf == "function" ? e4.valueOf() : e4;
    e4 = Fl(t) ? t + "" : t;
  }
  if (typeof e4 != "string")
    return e4 === 0 ? e4 : +e4;
  e4 = gD(e4);
  var r = RD.test(e4);
  return r || CD.test(e4) ? PD(e4.slice(2), r ? 2 : 8) : TD.test(e4) ? Eb : +e4;
}
var ID = "Expected a function", ND = Math.max, MD = Math.min;
function _l(e4, t, r) {
  var n, o, a, l, c, u, d = 0, p = false, h = false, g = true;
  if (typeof e4 != "function")
    throw new TypeError(ID);
  t = kb(t) || 0, Fl(r) && (p = !!r.leading, h = "maxWait" in r, a = h ? ND(kb(r.maxWait) || 0, t) : a, g = "trailing" in r ? !!r.trailing : g);
  function y(R) {
    var z = n, A = o;
    return n = o = void 0, d = R, l = e4.apply(A, z), l;
  }
  function _(R) {
    return d = R, c = setTimeout(m, t), p ? y(R) : l;
  }
  function v(R) {
    var z = R - u, A = R - d, P = t - z;
    return h ? MD(P, a - A) : P;
  }
  function b(R) {
    var z = R - u, A = R - d;
    return u === void 0 || z >= t || z < 0 || h && A >= a;
  }
  function m() {
    var R = kf();
    if (b(R))
      return w(R);
    c = setTimeout(m, v(R));
  }
  function w(R) {
    return c = void 0, g && n ? y(R) : (n = o = void 0, l);
  }
  function x() {
    c !== void 0 && clearTimeout(c), d = 0, n = u = o = c = void 0;
  }
  function k() {
    return c === void 0 ? l : w(kf());
  }
  function E() {
    var R = kf(), z = b(R);
    if (n = arguments, o = this, u = R, z) {
      if (c === void 0)
        return _(u);
      if (h)
        return clearTimeout(c), c = setTimeout(m, t), y(u);
    }
    return c === void 0 && (c = setTimeout(m, t)), l;
  }
  return E.cancel = x, E.flush = k, E;
}
var $D = "Expected a function";
function DD(e4, t, r) {
  var n = true, o = true;
  if (typeof e4 != "function")
    throw new TypeError($D);
  return Fl(r) && (n = "leading" in r ? !!r.leading : n, o = "trailing" in r ? !!r.trailing : o), _l(e4, t, {
    leading: n,
    maxWait: t,
    trailing: o
  });
}
var no = function() {
  return no = Object.assign || function(e4) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e4[o] = t[o]);
    }
    return e4;
  }, no.apply(this, arguments);
};
function Ww(e4) {
  return !e4 || !e4.ownerDocument || !e4.ownerDocument.defaultView ? window : e4.ownerDocument.defaultView;
}
function Bw(e4) {
  return !e4 || !e4.ownerDocument ? document : e4.ownerDocument;
}
var jw = function(e4) {
  var t = {}, r = Array.prototype.reduce.call(e4, function(n, o) {
    var a = o.name.match(/data-simplebar-(.+)/);
    if (a) {
      var l = a[1].replace(/\W+(.)/g, function(c, u) {
        return u.toUpperCase();
      });
      switch (o.value) {
        case "true":
          n[l] = true;
          break;
        case "false":
          n[l] = false;
          break;
        case void 0:
          n[l] = true;
          break;
        default:
          n[l] = o.value;
      }
    }
    return n;
  }, t);
  return r;
};
function Uw(e4, t) {
  var r;
  e4 && (r = e4.classList).add.apply(r, t.split(" "));
}
function Vw(e4, t) {
  e4 && t.split(" ").forEach(function(r) {
    e4.classList.remove(r);
  });
}
function qw(e4) {
  return ".".concat(e4.split(" ").join("."));
}
var cp = !!(typeof window < "u" && window.document && window.document.createElement), LD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  addClasses: Uw,
  canUseDOM: cp,
  classNamesToQuery: qw,
  getElementDocument: Bw,
  getElementWindow: Ww,
  getOptions: jw,
  removeClasses: Vw
}), ro = null, Ob = null;
cp && window.addEventListener("resize", function() {
  Ob !== window.devicePixelRatio && (Ob = window.devicePixelRatio, ro = null);
});
function Ab() {
  if (ro === null) {
    if (typeof document > "u")
      return ro = 0, ro;
    var e4 = document.body, t = document.createElement("div");
    t.classList.add("simplebar-hide-scrollbar"), e4.appendChild(t);
    var r = t.getBoundingClientRect().right;
    e4.removeChild(t), ro = r;
  }
  return ro;
}
var qn = Ww, Of = Bw, zD = jw, Gn = Uw, Kn = Vw, tr = qw, ua = (
  /** @class */
  (function() {
    function e4(t, r) {
      r === void 0 && (r = {});
      var n = this;
      if (this.removePreventClickId = null, this.minScrollbarWidth = 20, this.stopScrollDelay = 175, this.isScrolling = false, this.isMouseEntering = false, this.isDragging = false, this.scrollXTicking = false, this.scrollYTicking = false, this.wrapperEl = null, this.contentWrapperEl = null, this.contentEl = null, this.offsetEl = null, this.maskEl = null, this.placeholderEl = null, this.heightAutoObserverWrapperEl = null, this.heightAutoObserverEl = null, this.rtlHelpers = null, this.scrollbarWidth = 0, this.resizeObserver = null, this.mutationObserver = null, this.elStyles = null, this.isRtl = null, this.mouseX = 0, this.mouseY = 0, this.onMouseMove = function() {
      }, this.onWindowResize = function() {
      }, this.onStopScrolling = function() {
      }, this.onMouseEntered = function() {
      }, this.onScroll = function() {
        var o = qn(n.el);
        n.scrollXTicking || (o.requestAnimationFrame(n.scrollX), n.scrollXTicking = true), n.scrollYTicking || (o.requestAnimationFrame(n.scrollY), n.scrollYTicking = true), n.isScrolling || (n.isScrolling = true, Gn(n.el, n.classNames.scrolling)), n.showScrollbar("x"), n.showScrollbar("y"), n.onStopScrolling();
      }, this.scrollX = function() {
        n.axis.x.isOverflowing && n.positionScrollbar("x"), n.scrollXTicking = false;
      }, this.scrollY = function() {
        n.axis.y.isOverflowing && n.positionScrollbar("y"), n.scrollYTicking = false;
      }, this._onStopScrolling = function() {
        Kn(n.el, n.classNames.scrolling), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isScrolling = false;
      }, this.onMouseEnter = function() {
        n.isMouseEntering || (Gn(n.el, n.classNames.mouseEntered), n.showScrollbar("x"), n.showScrollbar("y"), n.isMouseEntering = true), n.onMouseEntered();
      }, this._onMouseEntered = function() {
        Kn(n.el, n.classNames.mouseEntered), n.options.autoHide && (n.hideScrollbar("x"), n.hideScrollbar("y")), n.isMouseEntering = false;
      }, this._onMouseMove = function(o) {
        n.mouseX = o.clientX, n.mouseY = o.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function() {
        n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1;
      }, this._onWindowResize = function() {
        n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar();
      }, this.onPointerEvent = function(o) {
        if (!(!n.axis.x.track.el || !n.axis.y.track.el || !n.axis.x.scrollbar.el || !n.axis.y.scrollbar.el)) {
          var a, l;
          n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (a = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (l = n.isWithinBounds(n.axis.y.track.rect)), (a || l) && (o.stopPropagation(), o.type === "pointerdown" && o.pointerType !== "touch" && (a && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(o, "x") : n.onTrackClick(o, "x")), l && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(o, "y") : n.onTrackClick(o, "y"))));
        }
      }, this.drag = function(o) {
        var a, l, c, u, d, p, h, g, y, _, v;
        if (!(!n.draggedAxis || !n.contentWrapperEl)) {
          var b, m = n.axis[n.draggedAxis].track, w = (l = (a = m.rect) === null || a === void 0 ? void 0 : a[n.axis[n.draggedAxis].sizeAttr]) !== null && l !== void 0 ? l : 0, x = n.axis[n.draggedAxis].scrollbar, k = (u = (c = n.contentWrapperEl) === null || c === void 0 ? void 0 : c[n.axis[n.draggedAxis].scrollSizeAttr]) !== null && u !== void 0 ? u : 0, E = parseInt((p = (d = n.elStyles) === null || d === void 0 ? void 0 : d[n.axis[n.draggedAxis].sizeAttr]) !== null && p !== void 0 ? p : "0px", 10);
          o.preventDefault(), o.stopPropagation(), n.draggedAxis === "y" ? b = o.pageY : b = o.pageX;
          var R = b - ((g = (h = m.rect) === null || h === void 0 ? void 0 : h[n.axis[n.draggedAxis].offsetAttr]) !== null && g !== void 0 ? g : 0) - n.axis[n.draggedAxis].dragOffset;
          R = n.draggedAxis === "x" && n.isRtl ? ((_ = (y = m.rect) === null || y === void 0 ? void 0 : y[n.axis[n.draggedAxis].sizeAttr]) !== null && _ !== void 0 ? _ : 0) - x.size - R : R;
          var z = R / (w - x.size), A = z * (k - E);
          n.draggedAxis === "x" && n.isRtl && (A = !((v = e4.getRtlHelpers()) === null || v === void 0) && v.isScrollingToNegative ? -A : A), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = A;
        }
      }, this.onEndDrag = function(o) {
        n.isDragging = false;
        var a = Of(n.el), l = qn(n.el);
        o.preventDefault(), o.stopPropagation(), Kn(n.el, n.classNames.dragging), n.onStopScrolling(), a.removeEventListener("mousemove", n.drag, true), a.removeEventListener("mouseup", n.onEndDrag, true), n.removePreventClickId = l.setTimeout(function() {
          a.removeEventListener("click", n.preventClick, true), a.removeEventListener("dblclick", n.preventClick, true), n.removePreventClickId = null;
        });
      }, this.preventClick = function(o) {
        o.preventDefault(), o.stopPropagation();
      }, this.el = t, this.options = no(no({}, e4.defaultOptions), r), this.classNames = no(no({}, e4.defaultOptions.classNames), r.classNames), this.axis = {
        x: {
          scrollOffsetAttr: "scrollLeft",
          sizeAttr: "width",
          scrollSizeAttr: "scrollWidth",
          offsetSizeAttr: "offsetWidth",
          offsetAttr: "left",
          overflowAttr: "overflowX",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        },
        y: {
          scrollOffsetAttr: "scrollTop",
          sizeAttr: "height",
          scrollSizeAttr: "scrollHeight",
          offsetSizeAttr: "offsetHeight",
          offsetAttr: "top",
          overflowAttr: "overflowY",
          dragOffset: 0,
          isOverflowing: true,
          forceVisible: false,
          track: { size: null, el: null, rect: null, isVisible: false },
          scrollbar: { size: null, el: null, rect: null, isVisible: false }
        }
      }, typeof this.el != "object" || !this.el.nodeName)
        throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));
      this.onMouseMove = DD(this._onMouseMove, 64), this.onWindowResize = _l(this._onWindowResize, 64, { leading: true }), this.onStopScrolling = _l(this._onStopScrolling, this.stopScrollDelay), this.onMouseEntered = _l(this._onMouseEntered, this.stopScrollDelay), this.init();
    }
    return e4.getRtlHelpers = function() {
      if (e4.rtlHelpers)
        return e4.rtlHelpers;
      var t = document.createElement("div");
      t.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
      var r = t.firstElementChild, n = r == null ? void 0 : r.firstElementChild;
      if (!n)
        return null;
      document.body.appendChild(r), r.scrollLeft = 0;
      var o = e4.getOffset(r), a = e4.getOffset(n);
      r.scrollLeft = -999;
      var l = e4.getOffset(n);
      return document.body.removeChild(r), e4.rtlHelpers = {
        // determines if the scrolling is responding with negative values
        isScrollOriginAtZero: o.left !== a.left,
        // determines if the origin scrollbar position is inverted or not (positioned on left or right)
        isScrollingToNegative: a.left !== l.left
      }, e4.rtlHelpers;
    }, e4.prototype.getScrollbarWidth = function() {
      try {
        return this.contentWrapperEl && getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Ab();
      } catch {
        return Ab();
      }
    }, e4.getOffset = function(t) {
      var r = t.getBoundingClientRect(), n = Of(t), o = qn(t);
      return {
        top: r.top + (o.pageYOffset || n.documentElement.scrollTop),
        left: r.left + (o.pageXOffset || n.documentElement.scrollLeft)
      };
    }, e4.prototype.init = function() {
      cp && (this.initDOM(), this.rtlHelpers = e4.getRtlHelpers(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e4.prototype.initDOM = function() {
      var t, r;
      this.wrapperEl = this.el.querySelector(tr(this.classNames.wrapper)), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector(tr(this.classNames.contentWrapper)), this.contentEl = this.options.contentNode || this.el.querySelector(tr(this.classNames.contentEl)), this.offsetEl = this.el.querySelector(tr(this.classNames.offset)), this.maskEl = this.el.querySelector(tr(this.classNames.mask)), this.placeholderEl = this.findChild(this.wrapperEl, tr(this.classNames.placeholder)), this.heightAutoObserverWrapperEl = this.el.querySelector(tr(this.classNames.heightAutoObserverWrapperEl)), this.heightAutoObserverEl = this.el.querySelector(tr(this.classNames.heightAutoObserverEl)), this.axis.x.track.el = this.findChild(this.el, "".concat(tr(this.classNames.track)).concat(tr(this.classNames.horizontal))), this.axis.y.track.el = this.findChild(this.el, "".concat(tr(this.classNames.track)).concat(tr(this.classNames.vertical))), this.axis.x.scrollbar.el = ((t = this.axis.x.track.el) === null || t === void 0 ? void 0 : t.querySelector(tr(this.classNames.scrollbar))) || null, this.axis.y.scrollbar.el = ((r = this.axis.y.track.el) === null || r === void 0 ? void 0 : r.querySelector(tr(this.classNames.scrollbar))) || null, this.options.autoHide || (Gn(this.axis.x.scrollbar.el, this.classNames.visible), Gn(this.axis.y.scrollbar.el, this.classNames.visible));
    }, e4.prototype.initListeners = function() {
      var t = this, r, n = qn(this.el);
      if (this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("pointerdown", this.onPointerEvent, true), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), (r = this.contentWrapperEl) === null || r === void 0 || r.addEventListener("scroll", this.onScroll), n.addEventListener("resize", this.onWindowResize), !!this.contentEl) {
        if (window.ResizeObserver) {
          var o = false, a = n.ResizeObserver || ResizeObserver;
          this.resizeObserver = new a(function() {
            o && n.requestAnimationFrame(function() {
              t.recalculate();
            });
          }), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), n.requestAnimationFrame(function() {
            o = true;
          });
        }
        this.mutationObserver = new n.MutationObserver(function() {
          n.requestAnimationFrame(function() {
            t.recalculate();
          });
        }), this.mutationObserver.observe(this.contentEl, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    }, e4.prototype.recalculate = function() {
      if (!(!this.heightAutoObserverEl || !this.contentEl || !this.contentWrapperEl || !this.wrapperEl || !this.placeholderEl)) {
        var t = qn(this.el);
        this.elStyles = t.getComputedStyle(this.el), this.isRtl = this.elStyles.direction === "rtl";
        var r = this.contentEl.offsetWidth, n = this.heightAutoObserverEl.offsetHeight <= 1, o = this.heightAutoObserverEl.offsetWidth <= 1 || r > 0, a = this.contentWrapperEl.offsetWidth, l = this.elStyles.overflowX, c = this.elStyles.overflowY;
        this.contentEl.style.padding = "".concat(this.elStyles.paddingTop, " ").concat(this.elStyles.paddingRight, " ").concat(this.elStyles.paddingBottom, " ").concat(this.elStyles.paddingLeft), this.wrapperEl.style.margin = "-".concat(this.elStyles.paddingTop, " -").concat(this.elStyles.paddingRight, " -").concat(this.elStyles.paddingBottom, " -").concat(this.elStyles.paddingLeft);
        var u = this.contentEl.scrollHeight, d = this.contentEl.scrollWidth;
        this.contentWrapperEl.style.height = n ? "auto" : "100%", this.placeholderEl.style.width = o ? "".concat(r || d, "px") : "auto", this.placeholderEl.style.height = "".concat(u, "px");
        var p = this.contentWrapperEl.offsetHeight;
        this.axis.x.isOverflowing = r !== 0 && d > r, this.axis.y.isOverflowing = u > p, this.axis.x.isOverflowing = l === "hidden" ? false : this.axis.x.isOverflowing, this.axis.y.isOverflowing = c === "hidden" ? false : this.axis.y.isOverflowing, this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true, this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true, this.hideNativeScrollbar();
        var h = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, g = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
        this.axis.x.isOverflowing = this.axis.x.isOverflowing && d > a - g, this.axis.y.isOverflowing = this.axis.y.isOverflowing && u > p - h, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el && (this.axis.x.scrollbar.el.style.width = "".concat(this.axis.x.scrollbar.size, "px")), this.axis.y.scrollbar.el && (this.axis.y.scrollbar.el.style.height = "".concat(this.axis.y.scrollbar.size, "px")), this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
      }
    }, e4.prototype.getScrollbarSize = function(t) {
      var r, n;
      if (t === void 0 && (t = "y"), !this.axis[t].isOverflowing || !this.contentEl)
        return 0;
      var o = this.contentEl[this.axis[t].scrollSizeAttr], a = (n = (r = this.axis[t].track.el) === null || r === void 0 ? void 0 : r[this.axis[t].offsetSizeAttr]) !== null && n !== void 0 ? n : 0, l = a / o, c;
      return c = Math.max(~~(l * a), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (c = Math.min(c, this.options.scrollbarMaxSize)), c;
    }, e4.prototype.positionScrollbar = function(t) {
      var r, n, o;
      t === void 0 && (t = "y");
      var a = this.axis[t].scrollbar;
      if (!(!this.axis[t].isOverflowing || !this.contentWrapperEl || !a.el || !this.elStyles)) {
        var l = this.contentWrapperEl[this.axis[t].scrollSizeAttr], c = ((r = this.axis[t].track.el) === null || r === void 0 ? void 0 : r[this.axis[t].offsetSizeAttr]) || 0, u = parseInt(this.elStyles[this.axis[t].sizeAttr], 10), d = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
        d = t === "x" && this.isRtl && !((n = e4.getRtlHelpers()) === null || n === void 0) && n.isScrollOriginAtZero ? -d : d, t === "x" && this.isRtl && (d = !((o = e4.getRtlHelpers()) === null || o === void 0) && o.isScrollingToNegative ? d : -d);
        var p = d / (l - u), h = ~~((c - a.size) * p);
        h = t === "x" && this.isRtl ? -h + (c - a.size) : h, a.el.style.transform = t === "x" ? "translate3d(".concat(h, "px, 0, 0)") : "translate3d(0, ".concat(h, "px, 0)");
      }
    }, e4.prototype.toggleTrackVisibility = function(t) {
      t === void 0 && (t = "y");
      var r = this.axis[t].track.el, n = this.axis[t].scrollbar.el;
      !r || !n || !this.contentWrapperEl || (this.axis[t].isOverflowing || this.axis[t].forceVisible ? (r.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll", this.el.classList.add("".concat(this.classNames.scrollable, "-").concat(t))) : (r.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden", this.el.classList.remove("".concat(this.classNames.scrollable, "-").concat(t))), this.axis[t].isOverflowing ? n.style.display = "block" : n.style.display = "none");
    }, e4.prototype.showScrollbar = function(t) {
      t === void 0 && (t = "y"), this.axis[t].isOverflowing && !this.axis[t].scrollbar.isVisible && (Gn(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = true);
    }, e4.prototype.hideScrollbar = function(t) {
      t === void 0 && (t = "y"), !this.isDragging && this.axis[t].isOverflowing && this.axis[t].scrollbar.isVisible && (Kn(this.axis[t].scrollbar.el, this.classNames.visible), this.axis[t].scrollbar.isVisible = false);
    }, e4.prototype.hideNativeScrollbar = function() {
      this.offsetEl && (this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px", this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-".concat(this.scrollbarWidth, "px") : "0px");
    }, e4.prototype.onMouseMoveForAxis = function(t) {
      t === void 0 && (t = "y");
      var r = this.axis[t];
      !r.track.el || !r.scrollbar.el || (r.track.rect = r.track.el.getBoundingClientRect(), r.scrollbar.rect = r.scrollbar.el.getBoundingClientRect(), this.isWithinBounds(r.track.rect) ? (this.showScrollbar(t), Gn(r.track.el, this.classNames.hover), this.isWithinBounds(r.scrollbar.rect) ? Gn(r.scrollbar.el, this.classNames.hover) : Kn(r.scrollbar.el, this.classNames.hover)) : (Kn(r.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t)));
    }, e4.prototype.onMouseLeaveForAxis = function(t) {
      t === void 0 && (t = "y"), Kn(this.axis[t].track.el, this.classNames.hover), Kn(this.axis[t].scrollbar.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(t);
    }, e4.prototype.onDragStart = function(t, r) {
      var n;
      r === void 0 && (r = "y"), this.isDragging = true;
      var o = Of(this.el), a = qn(this.el), l = this.axis[r].scrollbar, c = r === "y" ? t.pageY : t.pageX;
      this.axis[r].dragOffset = c - (((n = l.rect) === null || n === void 0 ? void 0 : n[this.axis[r].offsetAttr]) || 0), this.draggedAxis = r, Gn(this.el, this.classNames.dragging), o.addEventListener("mousemove", this.drag, true), o.addEventListener("mouseup", this.onEndDrag, true), this.removePreventClickId === null ? (o.addEventListener("click", this.preventClick, true), o.addEventListener("dblclick", this.preventClick, true)) : (a.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e4.prototype.onTrackClick = function(t, r) {
      var n = this, o, a, l, c;
      r === void 0 && (r = "y");
      var u = this.axis[r];
      if (!(!this.options.clickOnTrack || !u.scrollbar.el || !this.contentWrapperEl)) {
        t.preventDefault();
        var d = qn(this.el);
        this.axis[r].scrollbar.rect = u.scrollbar.el.getBoundingClientRect();
        var p = this.axis[r].scrollbar, h = (a = (o = p.rect) === null || o === void 0 ? void 0 : o[this.axis[r].offsetAttr]) !== null && a !== void 0 ? a : 0, g = parseInt((c = (l = this.elStyles) === null || l === void 0 ? void 0 : l[this.axis[r].sizeAttr]) !== null && c !== void 0 ? c : "0px", 10), y = this.contentWrapperEl[this.axis[r].scrollOffsetAttr], _ = r === "y" ? this.mouseY - h : this.mouseX - h, v = _ < 0 ? -1 : 1, b = v === -1 ? y - g : y + g, m = 40, w = function() {
          n.contentWrapperEl && (v === -1 ? y > b && (y -= m, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = y, d.requestAnimationFrame(w)) : y < b && (y += m, n.contentWrapperEl[n.axis[r].scrollOffsetAttr] = y, d.requestAnimationFrame(w)));
        };
        w();
      }
    }, e4.prototype.getContentElement = function() {
      return this.contentEl;
    }, e4.prototype.getScrollElement = function() {
      return this.contentWrapperEl;
    }, e4.prototype.removeListeners = function() {
      var t = qn(this.el);
      this.el.removeEventListener("mouseenter", this.onMouseEnter), this.el.removeEventListener("pointerdown", this.onPointerEvent, true), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.onMouseMove.cancel(), this.onWindowResize.cancel(), this.onStopScrolling.cancel(), this.onMouseEntered.cancel();
    }, e4.prototype.unMount = function() {
      this.removeListeners();
    }, e4.prototype.isWithinBounds = function(t) {
      return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height;
    }, e4.prototype.findChild = function(t, r) {
      var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      return Array.prototype.filter.call(t.children, function(o) {
        return n.call(o, r);
      })[0];
    }, e4.rtlHelpers = null, e4.defaultOptions = {
      forceVisible: false,
      clickOnTrack: true,
      scrollbarMinSize: 25,
      scrollbarMaxSize: 0,
      ariaLabel: "scrollable content",
      tabIndex: 0,
      classNames: {
        contentEl: "simplebar-content",
        contentWrapper: "simplebar-content-wrapper",
        offset: "simplebar-offset",
        mask: "simplebar-mask",
        wrapper: "simplebar-wrapper",
        placeholder: "simplebar-placeholder",
        scrollbar: "simplebar-scrollbar",
        track: "simplebar-track",
        heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
        heightAutoObserverEl: "simplebar-height-auto-observer",
        visible: "simplebar-visible",
        horizontal: "simplebar-horizontal",
        vertical: "simplebar-vertical",
        hover: "simplebar-hover",
        dragging: "simplebar-dragging",
        scrolling: "simplebar-scrolling",
        scrollable: "simplebar-scrollable",
        mouseEntered: "simplebar-mouse-entered"
      },
      scrollableNode: null,
      contentNode: null,
      autoHide: true
    }, e4.getOptions = zD, e4.helpers = LD, e4;
  })()
), dr = function() {
  return dr = Object.assign || function(e4) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e4[o] = t[o]);
    }
    return e4;
  }, dr.apply(this, arguments);
};
function FD(e4, t) {
  var r = {};
  for (var n in e4) Object.prototype.hasOwnProperty.call(e4, n) && t.indexOf(n) < 0 && (r[n] = e4[n]);
  if (e4 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e4); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, n[o]) && (r[n[o]] = e4[n[o]]);
  return r;
}
var up = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(function(e4, t) {
  var r = e4.children, n = e4.scrollableNodeProps, o = n === void 0 ? {} : n, a = FD(e4, ["children", "scrollableNodeProps"]), l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(), c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(), d = {}, p = {};
  Object.keys(a).forEach(function(y) {
    Object.prototype.hasOwnProperty.call(ua.defaultOptions, y) ? d[y] = a[y] : p[y] = a[y];
  });
  var h = dr(dr({}, ua.defaultOptions.classNames), d.classNames), g = dr(dr({}, o), { className: "".concat(h.contentWrapper).concat(o.className ? " ".concat(o.className) : ""), tabIndex: d.tabIndex || ua.defaultOptions.tabIndex, role: "region", "aria-label": d.ariaLabel || ua.defaultOptions.ariaLabel });
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(function() {
    var y;
    return c.current = g.ref ? g.ref.current : c.current, l.current && (y = new ua(l.current, dr(dr(dr({}, d), c.current && {
      scrollableNode: c.current
    }), u.current && {
      contentNode: u.current
    })), typeof t == "function" ? t(y) : t && (t.current = y)), function() {
      y == null || y.unMount(), y = null, typeof t == "function" && t(null);
    };
  }, []), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
    "div",
    dr({ "data-simplebar": "init", ref: l }, p),
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
      "div",
      { className: h.wrapper },
      qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
        "div",
        { className: h.heightAutoObserverWrapperEl },
        qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement("div", { className: h.heightAutoObserverEl })
      ),
      qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
        "div",
        { className: h.mask },
        qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement("div", { className: h.offset }, typeof r == "function" ? r({
          scrollableNodeRef: c,
          scrollableNodeProps: dr(dr({}, g), { ref: c }),
          contentNodeRef: u,
          contentNodeProps: {
            className: h.contentEl,
            ref: u
          }
        }) : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
          "div",
          dr({}, g),
          qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement("div", { className: h.contentEl }, r)
        ))
      ),
      qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement("div", { className: h.placeholder })
    ),
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
      "div",
      { className: "".concat(h.track, " ").concat(h.horizontal) },
      qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement("div", { className: h.scrollbar })
    ),
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(
      "div",
      { className: "".concat(h.track, " ").concat(h.vertical) },
      qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement("div", { className: h.scrollbar })
    )
  );
});
up.displayName = "SimpleBar";
const HD = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ className: e4, ...t }, r) => {
    const { size: n, color: o, isInvalid: a, isDisabled: l } = Dw(), { isDisabled: c, isReadOnly: u, ...d } = t;
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "input",
      {
        ref: r,
        disabled: l || c,
        readOnly: u || false,
        "aria-invalid": a,
        className: Te(cD({ size: n, color: o }), e4),
        ...d
      }
    );
  }
);
qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ className: e4, autoHeight: t, ...r }, n) => {
    const { size: o, color: a, isInvalid: l, isDisabled: c, setHasArea: u } = Dw(), d = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), p = n || d, h = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null);
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => (u(true), () => {
      u(false);
    }), [u]);
    const g = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(() => {
      if (d.current) {
        const w = d.current;
        w.style.height = "auto", w.style.height = `${w.scrollHeight}px`;
      }
    }, []), y = (w) => {
      var x;
      g(), (x = r.onInput) == null || x.call(r, w);
    };
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
      g();
    }, [g, r.value]);
    const _ = (w) => {
      w.preventDefault();
      const x = h.current;
      if (!x) return;
      const k = w.clientY, E = x.offsetHeight, R = (A) => {
        const P = E + (A.clientY - k);
        P > 30 && (x.style.height = P + "px");
      }, z = () => {
        document.removeEventListener("mousemove", R), document.removeEventListener("mouseup", z);
      };
      document.addEventListener("mousemove", R), document.addEventListener("mouseup", z);
    }, { isDisabled: v, isReadOnly: b, ...m } = r;
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      "div",
      {
        ref: h,
        className: "w-full relative",
        style: t ? void 0 : { height: "120px" },
        children: [
          t ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "textarea",
            {
              ref: p,
              rows: 1,
              className: Te(_b({ size: o, color: a }), e4),
              disabled: c || v,
              onInput: y,
              readOnly: b || false,
              "aria-invalid": l,
              style: { overflow: "hidden" },
              ...m
            }
          ) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(up, { style: { height: "100%" }, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "textarea",
            {
              ref: p,
              rows: 1,
              className: Te(_b({ size: o, color: a }), e4),
              disabled: c || v,
              onInput: y,
              readOnly: b || false,
              "aria-invalid": l,
              style: { height: "auto", overflow: "hidden", width: "100%" },
              ...m
            }
          ) }),
          !t && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "div",
            {
              className: "absolute right-0 bottom-0 -translate-x-full -translate-y-full size-1.75 text-sm cursor-se-resize z-10",
              onMouseDown: _,
              children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(YM, {})
            }
          )
        ]
      }
    );
  }
);
HD.displayName = "InputField";
const Ia = {
  primary: {
    container: "bg-primary-light",
    text: "text-primary-dark",
    icon: "text-primary-dark",
    button: "hover:bg-primary-hover hover:text-body"
  },
  positive: {
    container: "bg-positive-light",
    text: "text-positive-dark",
    icon: "text-positive-dark",
    button: "hover:bg-positive hover:text-body"
  },
  negative: {
    container: "bg-negative-light",
    text: "text-negative-dark",
    icon: "text-negative-dark",
    button: "hover:bg-negative hover:text-body"
  },
  warning: {
    container: "bg-warning-light",
    text: "text-warning-dark",
    icon: "text-warning-dark",
    button: "hover:bg-warning hover:text-body"
  }
}, WD = ({ color: e4 }) => Te(
  "h-6 absolute py-0.5 px-1 rounded whitespace-nowrap flex items-center gap-1",
  Ia[e4].container,
  Ia[e4].icon
), BD = ({ color: e4 }) => Te(
  "text-xs font-medium leading-3",
  Ia[e4].text
), jD = ({ color: e4 }) => Te(
  "p-0.5 rounded cursor-pointer",
  Ia[e4].button,
  Ia[e4].icon
), UD = ({
  label: e4,
  color: t = "primary",
  position: r = "up",
  showCloseButton: n = false,
  icon: o,
  children: a,
  delay: l = 2e3,
  trigger: c = "hover"
}) => {
  const [u, d] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(false), [p, h] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(false), [g, y] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState({
    position: r,
    transform: ""
  }), _ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), v = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), b = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), m = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(() => {
    if (!_.current || !v.current) return;
    const A = _.current.getBoundingClientRect(), P = v.current.getBoundingClientRect(), B = window.innerWidth, $ = window.innerHeight, N = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
      B
    ), j = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      $
    ), F = 4;
    let I = r, K = {
      position: I,
      transform: ""
    };
    const Y = {
      up: {
        fits: A.top - P.height - F >= 0,
        styles: {
          bottom: `calc(100% + ${F}px)`,
          left: "50%",
          transform: "translateX(-50%)"
        }
      },
      "up-start": {
        fits: A.top - P.height - F >= 0 && A.left + P.width <= B,
        styles: {
          bottom: `calc(100% + ${F}px)`,
          left: "0",
          transform: "translateX(0)"
        }
      },
      "up-end": {
        fits: A.top - P.height - F >= 0 && A.right - P.width >= 0,
        styles: {
          bottom: `calc(100% + ${F}px)`,
          right: "0",
          transform: "translateX(0)"
        }
      },
      down: {
        fits: A.bottom + P.height + F <= $ && A.bottom + P.height + F <= j,
        styles: {
          top: `calc(100% + ${F}px)`,
          left: "50%",
          transform: "translateX(-50%)"
        }
      },
      "down-start": {
        fits: A.bottom + P.height + F <= $ && A.bottom + P.height + F <= j && A.left + P.width <= B,
        styles: {
          top: `calc(100% + ${F}px)`,
          left: "0",
          transform: "translateX(0)"
        }
      },
      "down-end": {
        fits: A.bottom + P.height + F <= $ && A.bottom + P.height + F <= j && A.right - P.width >= 0,
        styles: {
          top: `calc(100% + ${F}px)`,
          right: "0",
          transform: "translateX(0)"
        }
      },
      left: {
        fits: A.left - P.width - F >= 0,
        styles: {
          right: `calc(100% + ${F}px)`,
          top: "50%",
          transform: "translateY(-50%)"
        }
      },
      "left-start": {
        fits: A.left - P.width - F >= 0 && A.top + P.height <= $,
        styles: {
          right: `calc(100% + ${F}px)`,
          top: "0",
          transform: "translateY(0)"
        }
      },
      "left-end": {
        fits: A.left - P.width - F >= 0 && A.bottom - P.height >= 0,
        styles: {
          right: `calc(100% + ${F}px)`,
          bottom: "0",
          transform: "translateY(0)"
        }
      },
      right: {
        fits: A.right + P.width + F <= B && A.right + P.width + F <= N,
        styles: {
          left: `calc(100% + ${F}px)`,
          top: "50%",
          transform: "translateY(-50%)"
        }
      },
      "right-start": {
        fits: A.right + P.width + F <= B && A.right + P.width + F <= N && A.top + P.height <= $,
        styles: {
          left: `calc(100% + ${F}px)`,
          top: "0",
          transform: "translateY(0)"
        }
      },
      "right-end": {
        fits: A.right + P.width + F <= B && A.right + P.width + F <= N && A.bottom - P.height >= 0,
        styles: {
          left: `calc(100% + ${F}px)`,
          bottom: "0",
          transform: "translateY(0)"
        }
      }
    }, G = A.left + A.width / 2 - P.width / 2, ge = A.left + A.width / 2 + P.width / 2;
    if ((r === "up" || r === "down") && (G < 0 || ge > B) && (Y[r].fits = false), Y[r].fits)
      K = { position: r, ...Y[r].styles };
    else {
      const L = [
        "up",
        "up-start",
        "up-end",
        "down",
        "down-start",
        "down-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end"
      ].find((V) => Y[V].fits);
      if (L)
        I = L, K = {
          position: I,
          ...Y[L].styles
        };
      else {
        const V = {
          up: A.top,
          "up-start": A.top,
          "up-end": A.top,
          down: Math.min(
            $ - A.bottom,
            j - A.bottom
          ),
          "down-start": Math.min(
            $ - A.bottom,
            j - A.bottom
          ),
          "down-end": Math.min(
            $ - A.bottom,
            j - A.bottom
          ),
          left: A.left,
          "left-start": A.left,
          "left-end": A.left,
          right: Math.min(
            B - A.right,
            N - A.right
          ),
          "right-start": Math.min(
            B - A.right,
            N - A.right
          ),
          "right-end": Math.min(
            B - A.right,
            N - A.right
          )
        }, te = Object.entries(V).reduce(
          (Q, [X, ae]) => ae > Q.space ? { position: X, space: ae } : Q,
          { position: "up", space: 0 }
        ).position;
        I = te, K = { position: I, ...Y[te].styles };
      }
    }
    y(K);
  }, [r]), w = () => {
    c === "click" && (d(true), b.current && clearTimeout(b.current), b.current = setTimeout(() => {
      p || d(false);
    }, l));
  }, x = (A) => {
    A.stopPropagation(), d(false), b.current && clearTimeout(b.current);
  }, k = () => {
    h(true), b.current && clearTimeout(b.current);
  }, E = () => {
    h(false), u && (b.current = setTimeout(() => {
      d(false);
    }, l));
  }, R = () => {
    c === "hover" && d(true);
  }, z = () => {
    c === "hover" && d(false);
  };
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    if (u && v.current) {
      const A = requestAnimationFrame(() => {
        m();
      });
      return () => cancelAnimationFrame(A);
    }
  }, [u, e4, m]), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    const A = () => {
      u && m();
    }, P = () => {
      u && m();
    };
    return window.addEventListener("resize", A), window.addEventListener("scroll", P, true), () => {
      window.removeEventListener("resize", A), window.removeEventListener("scroll", P, true), b.current && clearTimeout(b.current);
    };
  }, [u, m]), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "div",
    {
      "data-qui": "Tooltip",
      ref: _,
      onClick: w,
      onMouseEnter: R,
      onMouseLeave: z,
      className: "relative h-full flex items-center",
      children: [
        a,
        u && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
          "div",
          {
            ref: v,
            role: "tooltip",
            className: WD({
              color: t
            }),
            style: {
              position: "absolute",
              left: g.left,
              right: g.right,
              top: g.top,
              bottom: g.bottom,
              transform: g.transform,
              zIndex: 1e3
            },
            onMouseEnter: k,
            onMouseLeave: E,
            children: [
              o && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { children: o }),
              /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: BD({ color: t }), children: e4 }),
              n && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "div",
                {
                  onClick: x,
                  className: jD({ color: t }),
                  role: "button",
                  children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ww, {})
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var Tb;
(function(e4) {
  e4.DragStart = "dragStart", e4.DragMove = "dragMove", e4.DragEnd = "dragEnd", e4.DragCancel = "dragCancel", e4.DragOver = "dragOver", e4.RegisterDroppable = "registerDroppable", e4.SetDroppableDisabled = "setDroppableDisabled", e4.UnregisterDroppable = "unregisterDroppable";
})(Tb || (Tb = {}));
const VD = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
var io;
(function(e4) {
  e4[e4.Forward = 1] = "Forward", e4[e4.Backward = -1] = "Backward";
})(io || (io = {}));
var Rb;
(function(e4) {
  e4.Click = "click", e4.DragStart = "dragstart", e4.Keydown = "keydown", e4.ContextMenu = "contextmenu", e4.Resize = "resize", e4.SelectionChange = "selectionchange", e4.VisibilityChange = "visibilitychange";
})(Rb || (Rb = {}));
var Pr;
(function(e4) {
  e4.Space = "Space", e4.Down = "ArrowDown", e4.Right = "ArrowRight", e4.Left = "ArrowLeft", e4.Up = "ArrowUp", e4.Esc = "Escape", e4.Enter = "Enter", e4.Tab = "Tab";
})(Pr || (Pr = {}));
Pr.Space, Pr.Enter, Pr.Esc, Pr.Space, Pr.Enter, Pr.Tab;
var Cb;
(function(e4) {
  e4[e4.RightClick = 2] = "RightClick";
})(Cb || (Cb = {}));
var Pb;
(function(e4) {
  e4[e4.Pointer = 0] = "Pointer", e4[e4.DraggableRect = 1] = "DraggableRect";
})(Pb || (Pb = {}));
var Ib;
(function(e4) {
  e4[e4.TreeOrder = 0] = "TreeOrder", e4[e4.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Ib || (Ib = {}));
io.Backward + "", io.Forward + "", io.Backward + "", io.Forward + "";
var dd;
(function(e4) {
  e4[e4.Always = 0] = "Always", e4[e4.BeforeDragging = 1] = "BeforeDragging", e4[e4.WhileDragging = 2] = "WhileDragging";
})(dd || (dd = {}));
var pd;
(function(e4) {
  e4.Optimized = "optimized";
})(pd || (pd = {}));
dd.WhileDragging, pd.Optimized;
({
  ...VD
});
var Nb;
(function(e4) {
  e4[e4.Uninitialized = 0] = "Uninitialized", e4[e4.Initializing = 1] = "Initializing", e4[e4.Initialized = 2] = "Initialized";
})(Nb || (Nb = {}));
Pr.Down, Pr.Right, Pr.Up, Pr.Left;
const qD = (e4, t) => {
  const r = Te(
    "group flex items-center justify-between space-x-4",
    "rounded-t px-2 text-xs",
    "focus:outline-hidden"
  );
  return e4 && !t ? Te(
    r,
    "z-2 border border-b-0 border-tab-border",
    "bg-tab-active-bg font-semibold text-tab-active-fg"
  ) : t && !e4 ? Te(
    r,
    "border border-transparent bg-tab-inactive-bg text-inactive-text"
  ) : Te(
    r,
    "border border-transparent bg-tab-inactive-bg text-tab-inactive-fg",
    "hover:text-tab-active-fg"
  );
}, GD = F.forwardRef(({ isActive: e4 = false, isDesactive: t = false, children: r, ...n }, o) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { "data-qui": "TabNavContainer", className: qD(e4, t), ref: o, ...n, children: r }));
GD.displayName = "TabNavContainer";
var xt = function() {
  return xt = Object.assign || function(e4) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e4[o] = t[o]);
    }
    return e4;
  }, xt.apply(this, arguments);
}, Mb = {
  width: "100%",
  height: "10px",
  top: "0px",
  left: "0px",
  cursor: "row-resize"
}, $b = {
  width: "10px",
  height: "100%",
  top: "0px",
  left: "0px",
  cursor: "col-resize"
}, nl = {
  width: "20px",
  height: "20px",
  position: "absolute",
  zIndex: 1
}, KD = {
  top: xt(xt({}, Mb), { top: "-5px" }),
  right: xt(xt({}, $b), { left: void 0, right: "-5px" }),
  bottom: xt(xt({}, Mb), { top: void 0, bottom: "-5px" }),
  left: xt(xt({}, $b), { left: "-5px" }),
  topRight: xt(xt({}, nl), { right: "-10px", top: "-10px", cursor: "ne-resize" }),
  bottomRight: xt(xt({}, nl), { right: "-10px", bottom: "-10px", cursor: "se-resize" }),
  bottomLeft: xt(xt({}, nl), { left: "-10px", bottom: "-10px", cursor: "sw-resize" }),
  topLeft: xt(xt({}, nl), { left: "-10px", top: "-10px", cursor: "nw-resize" })
}, ZD = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.memo(function(e4) {
  var t = e4.onResizeStart, r = e4.direction, n = e4.children, o = e4.replaceStyles, a = e4.className, l = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(d) {
    t(d, r);
  }, [t, r]), c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(d) {
    t(d, r);
  }, [t, r]), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(function() {
    return xt(xt({ position: "absolute", userSelect: "none" }, KD[r]), o ?? {});
  }, [o, r]);
  return qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: a || void 0, style: u, onMouseDown: l, onTouchStart: c, children: n });
}), YD = /* @__PURE__ */ (function() {
  var e4 = function(t, r) {
    return e4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, o) {
      n.__proto__ = o;
    } || function(n, o) {
      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (n[a] = o[a]);
    }, e4(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e4(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
})(), Qr = function() {
  return Qr = Object.assign || function(e4) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e4[o] = t[o]);
    }
    return e4;
  }, Qr.apply(this, arguments);
}, XD = {
  width: "auto",
  height: "auto"
}, il = function(e4, t, r) {
  return Math.max(Math.min(e4, r), t);
}, Db = function(e4, t, r) {
  var n = Math.round(e4 / t);
  return n * t + r * (n - 1);
}, eo = function(e4, t) {
  return new RegExp(e4, "i").test(t);
}, ol = function(e4) {
  return !!(e4.touches && e4.touches.length);
}, JD = function(e4) {
  return !!((e4.clientX || e4.clientX === 0) && (e4.clientY || e4.clientY === 0));
}, Lb = function(e4, t, r) {
  r === void 0 && (r = 0);
  var n = t.reduce(function(a, l, c) {
    return Math.abs(l - e4) < Math.abs(t[a] - e4) ? c : a;
  }, 0), o = Math.abs(t[n] - e4);
  return r === 0 || o < r ? t[n] : e4;
}, Af = function(e4) {
  return e4 = e4.toString(), e4 === "auto" || e4.endsWith("px") || e4.endsWith("%") || e4.endsWith("vh") || e4.endsWith("vw") || e4.endsWith("vmax") || e4.endsWith("vmin") ? e4 : "".concat(e4, "px");
}, al = function(e4, t, r, n) {
  if (e4 && typeof e4 == "string") {
    if (e4.endsWith("px"))
      return Number(e4.replace("px", ""));
    if (e4.endsWith("%")) {
      var o = Number(e4.replace("%", "")) / 100;
      return t * o;
    }
    if (e4.endsWith("vw")) {
      var o = Number(e4.replace("vw", "")) / 100;
      return r * o;
    }
    if (e4.endsWith("vh")) {
      var o = Number(e4.replace("vh", "")) / 100;
      return n * o;
    }
  }
  return e4;
}, QD = function(e4, t, r, n, o, a, l) {
  return n = al(n, e4.width, t, r), o = al(o, e4.height, t, r), a = al(a, e4.width, t, r), l = al(l, e4.height, t, r), {
    maxWidth: typeof n > "u" ? void 0 : Number(n),
    maxHeight: typeof o > "u" ? void 0 : Number(o),
    minWidth: typeof a > "u" ? void 0 : Number(a),
    minHeight: typeof l > "u" ? void 0 : Number(l)
  };
}, eL = function(e4) {
  return Array.isArray(e4) ? e4 : [e4, e4];
}, tL = [
  "as",
  "ref",
  "style",
  "className",
  "grid",
  "gridGap",
  "snap",
  "bounds",
  "boundsByDirection",
  "size",
  "defaultSize",
  "minWidth",
  "minHeight",
  "maxWidth",
  "maxHeight",
  "lockAspectRatio",
  "lockAspectRatioExtraWidth",
  "lockAspectRatioExtraHeight",
  "enable",
  "handleStyles",
  "handleClasses",
  "handleWrapperStyle",
  "handleWrapperClass",
  "children",
  "onResizeStart",
  "onResize",
  "onResizeStop",
  "handleComponent",
  "scale",
  "resizeRatio",
  "snapGap"
], zb = "__resizable_base__", rL = (
  /** @class */
  (function(e4) {
    YD(t, e4);
    function t(r) {
      var n, o, a, l, c = e4.call(this, r) || this;
      return c.ratio = 1, c.resizable = null, c.parentLeft = 0, c.parentTop = 0, c.resizableLeft = 0, c.resizableRight = 0, c.resizableTop = 0, c.resizableBottom = 0, c.targetLeft = 0, c.targetTop = 0, c.delta = {
        width: 0,
        height: 0
      }, c.appendBase = function() {
        if (!c.resizable || !c.window)
          return null;
        var u = c.parentNode;
        if (!u)
          return null;
        var d = c.window.document.createElement("div");
        return d.style.width = "100%", d.style.height = "100%", d.style.position = "absolute", d.style.transform = "scale(0, 0)", d.style.left = "0", d.style.flex = "0 0 100%", d.classList ? d.classList.add(zb) : d.className += zb, u.appendChild(d), d;
      }, c.removeBase = function(u) {
        var d = c.parentNode;
        d && d.removeChild(u);
      }, c.state = {
        isResizing: false,
        width: (o = (n = c.propsSize) === null || n === void 0 ? void 0 : n.width) !== null && o !== void 0 ? o : "auto",
        height: (l = (a = c.propsSize) === null || a === void 0 ? void 0 : a.height) !== null && l !== void 0 ? l : "auto",
        direction: "right",
        original: {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        },
        backgroundStyle: {
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0)",
          cursor: "auto",
          opacity: 0,
          position: "fixed",
          zIndex: 9999,
          top: "0",
          left: "0",
          bottom: "0",
          right: "0"
        },
        flexBasis: void 0
      }, c.onResizeStart = c.onResizeStart.bind(c), c.onMouseMove = c.onMouseMove.bind(c), c.onMouseUp = c.onMouseUp.bind(c), c;
    }
    return Object.defineProperty(t.prototype, "parentNode", {
      get: function() {
        return this.resizable ? this.resizable.parentNode : null;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "window", {
      get: function() {
        return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "propsSize", {
      get: function() {
        return this.props.size || this.props.defaultSize || XD;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "size", {
      get: function() {
        var r = 0, n = 0;
        if (this.resizable && this.window) {
          var o = this.resizable.offsetWidth, a = this.resizable.offsetHeight, l = this.resizable.style.position;
          l !== "relative" && (this.resizable.style.position = "relative"), r = this.resizable.style.width !== "auto" ? this.resizable.offsetWidth : o, n = this.resizable.style.height !== "auto" ? this.resizable.offsetHeight : a, this.resizable.style.position = l;
        }
        return { width: r, height: n };
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "sizeStyle", {
      get: function() {
        var r = this, n = this.props.size, o = function(c) {
          var u;
          if (typeof r.state[c] > "u" || r.state[c] === "auto")
            return "auto";
          if (r.propsSize && r.propsSize[c] && !((u = r.propsSize[c]) === null || u === void 0) && u.toString().endsWith("%")) {
            if (r.state[c].toString().endsWith("%"))
              return r.state[c].toString();
            var d = r.getParentSize(), p = Number(r.state[c].toString().replace("px", "")), h = p / d[c] * 100;
            return "".concat(h, "%");
          }
          return Af(r.state[c]);
        }, a = n && typeof n.width < "u" && !this.state.isResizing ? Af(n.width) : o("width"), l = n && typeof n.height < "u" && !this.state.isResizing ? Af(n.height) : o("height");
        return { width: a, height: l };
      },
      enumerable: false,
      configurable: true
    }), t.prototype.getParentSize = function() {
      if (!this.parentNode)
        return this.window ? { width: this.window.innerWidth, height: this.window.innerHeight } : { width: 0, height: 0 };
      var r = this.appendBase();
      if (!r)
        return { width: 0, height: 0 };
      var n = false, o = this.parentNode.style.flexWrap;
      o !== "wrap" && (n = true, this.parentNode.style.flexWrap = "wrap"), r.style.position = "relative", r.style.minWidth = "100%", r.style.minHeight = "100%";
      var a = {
        width: r.offsetWidth,
        height: r.offsetHeight
      };
      return n && (this.parentNode.style.flexWrap = o), this.removeBase(r), a;
    }, t.prototype.bindEvents = function() {
      this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
        capture: true,
        passive: false
      }), this.window.addEventListener("touchend", this.onMouseUp));
    }, t.prototype.unbindEvents = function() {
      this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, true), this.window.removeEventListener("touchend", this.onMouseUp));
    }, t.prototype.componentDidMount = function() {
      if (!(!this.resizable || !this.window)) {
        var r = this.window.getComputedStyle(this.resizable);
        this.setState({
          width: this.state.width || this.size.width,
          height: this.state.height || this.size.height,
          flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0
        });
      }
    }, t.prototype.componentWillUnmount = function() {
      this.window && this.unbindEvents();
    }, t.prototype.createSizeForCssProperty = function(r, n) {
      var o = this.propsSize && this.propsSize[n];
      return this.state[n] === "auto" && this.state.original[n] === r && (typeof o > "u" || o === "auto") ? "auto" : r;
    }, t.prototype.calculateNewMaxFromBoundary = function(r, n) {
      var o = this.props.boundsByDirection, a = this.state.direction, l = o && eo("left", a), c = o && eo("top", a), u, d;
      if (this.props.bounds === "parent") {
        var p = this.parentNode;
        p && (u = l ? this.resizableRight - this.parentLeft : p.offsetWidth + (this.parentLeft - this.resizableLeft), d = c ? this.resizableBottom - this.parentTop : p.offsetHeight + (this.parentTop - this.resizableTop));
      } else this.props.bounds === "window" ? this.window && (u = l ? this.resizableRight : this.window.innerWidth - this.resizableLeft, d = c ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (u = l ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), d = c ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
      return u && Number.isFinite(u) && (r = r && r < u ? r : u), d && Number.isFinite(d) && (n = n && n < d ? n : d), { maxWidth: r, maxHeight: n };
    }, t.prototype.calculateNewSizeFromDirection = function(r, n) {
      var o = this.props.scale || 1, a = eL(this.props.resizeRatio || 1), l = a[0], c = a[1], u = this.state, d = u.direction, p = u.original, h = this.props, g = h.lockAspectRatio, y = h.lockAspectRatioExtraHeight, _ = h.lockAspectRatioExtraWidth, v = p.width, b = p.height, m = y || 0, w = _ || 0;
      return eo("right", d) && (v = p.width + (r - p.x) * l / o, g && (b = (v - w) / this.ratio + m)), eo("left", d) && (v = p.width - (r - p.x) * l / o, g && (b = (v - w) / this.ratio + m)), eo("bottom", d) && (b = p.height + (n - p.y) * c / o, g && (v = (b - m) * this.ratio + w)), eo("top", d) && (b = p.height - (n - p.y) * c / o, g && (v = (b - m) * this.ratio + w)), { newWidth: v, newHeight: b };
    }, t.prototype.calculateNewSizeFromAspectRatio = function(r, n, o, a) {
      var l = this.props, c = l.lockAspectRatio, u = l.lockAspectRatioExtraHeight, d = l.lockAspectRatioExtraWidth, p = typeof a.width > "u" ? 10 : a.width, h = typeof o.width > "u" || o.width < 0 ? r : o.width, g = typeof a.height > "u" ? 10 : a.height, y = typeof o.height > "u" || o.height < 0 ? n : o.height, _ = u || 0, v = d || 0;
      if (c) {
        var b = (g - _) * this.ratio + v, m = (y - _) * this.ratio + v, w = (p - v) / this.ratio + _, x = (h - v) / this.ratio + _, k = Math.max(p, b), E = Math.min(h, m), R = Math.max(g, w), z = Math.min(y, x);
        r = il(r, k, E), n = il(n, R, z);
      } else
        r = il(r, p, h), n = il(n, g, y);
      return { newWidth: r, newHeight: n };
    }, t.prototype.setBoundingClientRect = function() {
      var r = 1 / (this.props.scale || 1);
      if (this.props.bounds === "parent") {
        var n = this.parentNode;
        if (n) {
          var o = n.getBoundingClientRect();
          this.parentLeft = o.left * r, this.parentTop = o.top * r;
        }
      }
      if (this.props.bounds && typeof this.props.bounds != "string") {
        var a = this.props.bounds.getBoundingClientRect();
        this.targetLeft = a.left * r, this.targetTop = a.top * r;
      }
      if (this.resizable) {
        var l = this.resizable.getBoundingClientRect(), c = l.left, u = l.top, d = l.right, p = l.bottom;
        this.resizableLeft = c * r, this.resizableRight = d * r, this.resizableTop = u * r, this.resizableBottom = p * r;
      }
    }, t.prototype.onResizeStart = function(r, n) {
      if (!(!this.resizable || !this.window)) {
        var o = 0, a = 0;
        if (r.nativeEvent && JD(r.nativeEvent) ? (o = r.nativeEvent.clientX, a = r.nativeEvent.clientY) : r.nativeEvent && ol(r.nativeEvent) && (o = r.nativeEvent.touches[0].clientX, a = r.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable) {
          var l = this.props.onResizeStart(r, n, this.resizable);
          if (l === false)
            return;
        }
        this.props.size && (typeof this.props.size.height < "u" && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), typeof this.props.size.width < "u" && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
        var c, u = this.window.getComputedStyle(this.resizable);
        if (u.flexBasis !== "auto") {
          var d = this.parentNode;
          if (d) {
            var p = this.window.getComputedStyle(d).flexDirection;
            this.flexDir = p.startsWith("row") ? "row" : "column", c = u.flexBasis;
          }
        }
        this.setBoundingClientRect(), this.bindEvents();
        var h = {
          original: {
            x: o,
            y: a,
            width: this.size.width,
            height: this.size.height
          },
          isResizing: true,
          backgroundStyle: Qr(Qr({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(r.target).cursor || "auto" }),
          direction: n,
          flexBasis: c
        };
        this.setState(h);
      }
    }, t.prototype.onMouseMove = function(r) {
      var n = this;
      if (!(!this.state.isResizing || !this.resizable || !this.window)) {
        if (this.window.TouchEvent && ol(r))
          try {
            r.preventDefault(), r.stopPropagation();
          } catch {
          }
        var o = this.props, a = o.maxWidth, l = o.maxHeight, c = o.minWidth, u = o.minHeight, d = ol(r) ? r.touches[0].clientX : r.clientX, p = ol(r) ? r.touches[0].clientY : r.clientY, h = this.state, g = h.direction, y = h.original, _ = h.width, v = h.height, b = this.getParentSize(), m = QD(b, this.window.innerWidth, this.window.innerHeight, a, l, c, u);
        a = m.maxWidth, l = m.maxHeight, c = m.minWidth, u = m.minHeight;
        var w = this.calculateNewSizeFromDirection(d, p), x = w.newHeight, k = w.newWidth, E = this.calculateNewMaxFromBoundary(a, l);
        this.props.snap && this.props.snap.x && (k = Lb(k, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (x = Lb(x, this.props.snap.y, this.props.snapGap));
        var R = this.calculateNewSizeFromAspectRatio(k, x, { width: E.maxWidth, height: E.maxHeight }, { width: c, height: u });
        if (k = R.newWidth, x = R.newHeight, this.props.grid) {
          var z = Db(k, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), A = Db(x, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), P = this.props.snapGap || 0, B = P === 0 || Math.abs(z - k) <= P ? z : k, $ = P === 0 || Math.abs(A - x) <= P ? A : x;
          k = B, x = $;
        }
        var N = {
          width: k - y.width,
          height: x - y.height
        };
        if (this.delta = N, _ && typeof _ == "string") {
          if (_.endsWith("%")) {
            var j = k / b.width * 100;
            k = "".concat(j, "%");
          } else if (_.endsWith("vw")) {
            var F = k / this.window.innerWidth * 100;
            k = "".concat(F, "vw");
          } else if (_.endsWith("vh")) {
            var I = k / this.window.innerHeight * 100;
            k = "".concat(I, "vh");
          }
        }
        if (v && typeof v == "string") {
          if (v.endsWith("%")) {
            var j = x / b.height * 100;
            x = "".concat(j, "%");
          } else if (v.endsWith("vw")) {
            var F = x / this.window.innerWidth * 100;
            x = "".concat(F, "vw");
          } else if (v.endsWith("vh")) {
            var I = x / this.window.innerHeight * 100;
            x = "".concat(I, "vh");
          }
        }
        var K = {
          width: this.createSizeForCssProperty(k, "width"),
          height: this.createSizeForCssProperty(x, "height")
        };
        this.flexDir === "row" ? K.flexBasis = K.width : this.flexDir === "column" && (K.flexBasis = K.height);
        var Y = this.state.width !== K.width, G = this.state.height !== K.height, ge = this.state.flexBasis !== K.flexBasis, L = Y || G || ge;
        L && qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__.flushSync(function() {
          n.setState(K);
        }), this.props.onResize && L && this.props.onResize(r, g, this.resizable, N);
      }
    }, t.prototype.onMouseUp = function(r) {
      var n, o, a = this.state, l = a.isResizing, c = a.direction;
      a.original, !(!l || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(r, c, this.resizable, this.delta), this.props.size && this.setState({ width: (n = this.props.size.width) !== null && n !== void 0 ? n : "auto", height: (o = this.props.size.height) !== null && o !== void 0 ? o : "auto" }), this.unbindEvents(), this.setState({
        isResizing: false,
        backgroundStyle: Qr(Qr({}, this.state.backgroundStyle), { cursor: "auto" })
      }));
    }, t.prototype.updateSize = function(r) {
      var n, o;
      this.setState({ width: (n = r.width) !== null && n !== void 0 ? n : "auto", height: (o = r.height) !== null && o !== void 0 ? o : "auto" });
    }, t.prototype.renderResizer = function() {
      var r = this, n = this.props, o = n.enable, a = n.handleStyles, l = n.handleClasses, c = n.handleWrapperStyle, u = n.handleWrapperClass, d = n.handleComponent;
      if (!o)
        return null;
      var p = Object.keys(o).map(function(h) {
        return o[h] !== false ? qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ZD, { direction: h, onResizeStart: r.onResizeStart, replaceStyles: a && a[h], className: l && l[h], children: d && d[h] ? d[h] : null }, h) : null;
      });
      return qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: u, style: c, children: p });
    }, t.prototype.render = function() {
      var r = this, n = Object.keys(this.props).reduce(function(l, c) {
        return tL.indexOf(c) !== -1 || (l[c] = r.props[c]), l;
      }, {}), o = Qr(Qr(Qr({ position: "relative", userSelect: this.state.isResizing ? "none" : "auto" }, this.props.style), this.sizeStyle), { maxWidth: this.props.maxWidth, maxHeight: this.props.maxHeight, minWidth: this.props.minWidth, minHeight: this.props.minHeight, boxSizing: "border-box", flexShrink: 0 });
      this.state.flexBasis && (o.flexBasis = this.state.flexBasis);
      var a = this.props.as || "div";
      return qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(a, Qr({ style: o, className: this.props.className }, n, {
        // `ref` is after `extendsProps` to ensure this one wins over a version
        // passed in
        ref: function(l) {
          l && (r.resizable = l);
        },
        children: [this.state.isResizing && qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { style: this.state.backgroundStyle }), this.props.children, this.renderResizer()]
      }));
    }, t.defaultProps = {
      as: "div",
      onResizeStart: function() {
      },
      onResize: function() {
      },
      onResizeStop: function() {
      },
      enable: {
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true
      },
      style: {},
      grid: [1, 1],
      gridGap: [0, 0],
      lockAspectRatio: false,
      lockAspectRatioExtraWidth: 0,
      lockAspectRatioExtraHeight: 0,
      scale: 1,
      resizeRatio: 1,
      snapGap: 0
    }, t;
  })(qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.PureComponent)
);
const nL = {
  0: "bg-panel-0",
  1: "bg-panel-1",
  2: "bg-panel-2",
  3: "bg-panel-3",
  4: "bg-panel-4"
}, iL = {
  tabs: "border-tab-border",
  primary: "border-primary",
  normal: "border-panel-border"
}, Gw = ({
  depth: e4 = 0,
  className: t,
  contentType: r,
  disabled: n
}) => Te(
  "transition-colors duration-200",
  {
    "text-body": !n,
    "text-inactive-text": n
  },
  r ? iL[r] : "border-panel-border",
  nL[e4],
  t
), oL = (e4) => {
  if (!e4) return {};
  const t = {}, r = e4.match(/min-w-\[(\d+)px\]/);
  r && (t.minWidth = parseInt(r[1], 10));
  const n = e4.match(/max-w-\[(\d+)px\]/);
  n && (t.maxWidth = parseInt(n[1], 10));
  const o = e4.match(/min-h-\[(\d+)px\]/);
  o && (t.minHeight = parseInt(o[1], 10));
  const a = e4.match(/max-h-\[(\d+)px\]/);
  return a && (t.maxHeight = parseInt(a[1], 10)), t;
}, Kw = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    children: e4,
    width: t,
    height: r,
    minWidth: n = 10,
    minHeight: o = 10,
    maxWidth: a,
    maxHeight: l,
    defaultWidth: c,
    defaultHeight: u,
    defaultSize: d,
    size: p,
    grid: h,
    snap: g,
    lockAspectRatio: y = false,
    enable: _,
    handleStyles: v = {},
    handleClasses: b = {},
    handleComponent: m = {},
    style: w = {},
    className: x,
    onResizeStart: k,
    onResize: E,
    onResizeStop: R,
    scale: z = 1,
    bounds: A,
    snapGap: P,
    as: B = "div",
    depth: $,
    disabled: N
  }, j) => {
    const F = Gw({
      depth: $,
      className: x,
      disabled: N
    }), I = oL(x), K = p ? { size: p } : t !== void 0 || r !== void 0 ? {
      size: {
        width: t ?? "auto",
        height: r ?? "auto"
      }
    } : {}, Y = d ? { defaultSize: d } : c !== void 0 || u !== void 0 ? {
      defaultSize: {
        width: c ?? "auto",
        height: u ?? "auto"
      }
    } : {}, G = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null);
    return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useImperativeHandle(j, () => {
      var ge;
      return (ge = G.current) == null ? void 0 : ge.resizable;
    }), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      rL,
      {
        "data-qui": "Resizable",
        ref: G,
        ...K,
        ...Y,
        minWidth: n ?? I.minWidth,
        minHeight: o ?? I.minHeight,
        maxWidth: a ?? I.maxWidth,
        maxHeight: l ?? I.maxHeight,
        grid: h,
        snap: g,
        lockAspectRatio: y,
        enable: _,
        handleStyles: v,
        handleClasses: b,
        handleComponent: m,
        style: w,
        className: Te("relative box-border", F),
        onResizeStart: k,
        onResize: E,
        onResizeStop: R,
        scale: z,
        bounds: A,
        snapGap: P,
        as: B,
        children: e4
      }
    );
  }
);
Kw.displayName = "Resizable";
const Zw = ({ isDragging: e4 = false, className: t }) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    className: Te(
      "absolute inset-0 flex items-center justify-center transition-colors",
      {
        "bg-primary/30": e4
      },
      t
    ),
    children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: Te("h-full w-full transition-all", {
          "bg-primary": e4,
          "bg-transparent hover:bg-primary/20": !e4
        })
      }
    )
  }
);
Zw.displayName = "Handle";
qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null);
const Yw = F.forwardRef(
  ({ depth: e4 = 0, className: t, children: r, contentType: n, disabled: o, ...a }, l) => {
    const c = Gw({
      depth: e4,
      className: t,
      contentType: n,
      disabled: o
    });
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { "data-qui": "Panel", ref: l, className: c, "aria-disabled": o, ...a, children: r });
  }
);
Yw.displayName = "Panel";
const uc = {
  sm: {
    container: "h-5 px-0.5 gap-1 rounded",
    text: "text-xxs leading-3",
    icon: "text-s",
    iconButton: "text-s p-0.5 cursor-pointer"
  },
  md: {
    container: "h-5.5 px-1 gap-1 rounded",
    text: "text-xs leading-4",
    icon: "text-sm",
    iconButton: " text-sm p-0.5 cursor-pointer"
  },
  lg: {
    container: "h-6 px-1.5 gap-1.5 rounded",
    text: "text-s leading-none",
    icon: "text-base",
    iconButton: "text-base p-0.5 cursor-pointer"
  }
}, Sl = {
  primary: {
    bg: "bg-primary",
    text: "text-body",
    border: "border-primary",
    buttonHover: "hover:bg-primary-hover"
  },
  white: {
    bg: "bg-canvas-default",
    text: "text-primary",
    border: "border-canvas-default",
    buttonHover: "hover:bg-primary-hover hover:text-body"
  },
  positive: {
    bg: "bg-positive",
    text: "text-body",
    border: "border-positive",
    buttonHover: "hover:bg-positive-hover"
  },
  warning: {
    bg: "bg-warning",
    text: "text-body",
    border: "border-warning",
    buttonHover: "hover:bg-warning-hover"
  },
  negative: {
    bg: "bg-negative",
    text: "text-body",
    border: "border-negative",
    buttonHover: "hover:bg-negative-hover"
  }
}, aL = (e4, t) => Te(
  "inline-flex items-center justify-center font-medium border",
  uc[e4].container,
  Sl[t].bg,
  Sl[t].text,
  Sl[t].border
), sL = (e4, t, r) => Te({
  [uc[e4].icon]: !r,
  "bg-canvas-default outline-canvas-default text-primary": r && t !== "white" || r,
  "bg-primary outline-primary text-body": r && t === "white" && !r,
  "outline-solid outline-1 h-full py-0.5 grid place-items-center -my-1 only:-mx-0.5 first:-ml-1.5 last:-mr-1.5 only:rounded first:rounded-l last:rounded-r": r || r
}), lL = (e4) => Te(uc[e4].text), Xw = (e4, t) => Te(
  "inline-flex items-center justify-center rounded transition-colors duration-200 focus:outline-hidden ",
  uc[e4].iconButton,
  Sl[t].buttonHover
), Jw = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null), fc = () => {
  const e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(Jw);
  if (!e4)
    throw new Error("Pill components must be used within a Pill.Root");
  return e4;
}, fp = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ size: e4 = "md", color: t = "primary", className: r, children: n, ...o }, a) => {
    const l = {
      size: e4,
      color: t
    };
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Jw.Provider, { value: l, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        "data-qui": "Pill",
        ref: a,
        className: Te(aL(e4, t), r),
        ...o,
        children: n
      }
    ) });
  }
);
fp.displayName = "Pill.Root";
const dp = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ className: e4, children: t, ...r }, n) => {
    const { size: o } = fc();
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "span",
      {
        ref: n,
        className: Te(lL(o), e4),
        ...r,
        children: t
      }
    );
  }
);
dp.displayName = "Pill.Text";
const pp = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ className: e4, children: t, label: r, position: n, ...o }, a) => {
    const { size: l, color: c } = fc(), u = !!r, d = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "span",
      {
        ref: a,
        className: Te(
          sL(l, c, u),
          e4
        ),
        ...o,
        children: t
      }
    );
    return u ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(UD, { label: r || "", position: n || "up", children: d }) : d;
  }
);
pp.displayName = "Pill.Icon";
const Qw = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ className: e4, children: t, ...r }, n) => {
    const { size: o, color: a } = fc();
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "button",
      {
        ref: n,
        type: "button",
        className: Te(Xw(o, a), e4),
        ...r,
        children: t
      }
    );
  }
);
Qw.displayName = "Pill.Button";
const hp = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    className: e4,
    onClose: t,
    "aria-label": r = "Remove pill",
    children: n,
    ...o
  }, a) => {
    const { size: l, color: c } = fc();
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "button",
      {
        ref: a,
        type: "button",
        className: Te(Xw(l, c), e4),
        onClick: t,
        "aria-label": r,
        ...o,
        children: n || /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ww, {})
      }
    );
  }
);
hp.displayName = "Pill.Close";
const ex = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    size: e4 = "md",
    color: t = "primary",
    label: r,
    icon: n,
    onClose: o,
    closable: a = false,
    className: l,
    ...c
  }, u) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    fp,
    {
      ref: u,
      size: e4,
      color: t,
      className: l,
      ...c,
      children: [
        n && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(pp, { children: n }),
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(dp, { children: r }),
        a && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(hp, { onClose: o })
      ]
    }
  )
);
ex.displayName = "Pill";
Object.assign(ex, {
  Root: fp,
  Text: dp,
  Icon: pp,
  Button: Qw,
  Close: hp
});
const cL = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(null), dc = () => {
  const e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(cL);
  if (!e4)
    throw new Error(
      "Select compound components must be used within Select.Root"
    );
  return e4;
}, pc = {
  sm: {
    trigger: "h-5 min-h-fit",
    control: "min-h-5 p-0.5 gap-1",
    input: "text-2.25 h-3.5",
    placeholder: "text-2.25",
    singleValue: "text-2.25",
    multiValue: "h-3.5 px-0.5 gap-1 text-2",
    multiValueLabel: "text-2",
    multiValueRemove: "w-3 h-3",
    indicatorsContainer: "gap-1",
    clearIndicator: "p-0.5 size-3",
    dropdownIndicator: "p-0.5 size-3",
    indicatorSeparator: "h-3",
    loadingIndicator: "w-3 h-3",
    menu: "m-0",
    menuList: "py-1",
    option: "px-1 py-0.5 text-xs",
    group: "pt-1",
    groupHeading: "px-2 py-0.5 text-2",
    noOptionsMessage: "px-2 py-1 text-2.25",
    loadingMessage: "px-2 py-1 text-2.25",
    message: "text-2.25 p-1.5",
    icon: "text-sm"
  },
  md: {
    trigger: "h-6 min-h-fit",
    control: "min-h-6 p-1 gap-1.5",
    input: "text-xs h-4",
    placeholder: "text-xs",
    singleValue: "text-xs",
    multiValue: "h-4 p-1 gap-1 text-2.5",
    multiValueLabel: "text-2.5",
    multiValueRemove: "w-3.5 h-3.5",
    indicatorsContainer: "gap-1",
    clearIndicator: "p-0.5 size-4",
    dropdownIndicator: "p-0.5 size-4",
    indicatorSeparator: "h-4",
    loadingIndicator: "w-4 h-4",
    menu: "m-0",
    menuList: "my-1",
    option: "px-2 py-1 text-s",
    group: "pt-1.5",
    groupHeading: "px-3 py-1 text-2.5",
    noOptionsMessage: "px-2 py-1.5 text-xs",
    loadingMessage: "px-3 py-1.5 text-xs",
    message: "text-xs p-2",
    icon: "text-base"
  },
  lg: {
    trigger: "h-7 min-h-fit",
    control: "min-h-7 p-1.5 gap-2",
    input: "text-s h-5",
    placeholder: "text-s",
    singleValue: "text-s",
    multiValue: "h-5 px-1.5 gap-1.5 text-xs",
    multiValueLabel: "text-xs",
    multiValueRemove: "w-4 h-4",
    indicatorsContainer: "gap-1.5",
    clearIndicator: "p-0.5 size-5",
    dropdownIndicator: "p-1 size-5",
    indicatorSeparator: "h-5",
    loadingIndicator: "w-5 h-5",
    menu: "m-0",
    menuList: "py-1.5",
    option: "px-3 py-2 text-sm",
    group: "pt-2",
    groupHeading: "px-4 py-1.5 text-xs",
    noOptionsMessage: "px-4 py-2 text-s",
    loadingMessage: "px-4 py-2 text-s",
    message: "text-s p-2.5",
    icon: "text-lg"
  }
}, An = {
  primary: {
    // Control
    control: "cursor-pointer bg-select-bg text-select-text",
    controlFocused: "border-input-focus-border",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-select-bg border-input-error-border text-select-text",
    // Placeholder
    placeholder: "text-input-placeholder placeholder:opacity-60",
    // Single value
    singleValue: "text-select-text",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-primary",
    // Menu
    menu: "bg-select-list-bg border-select-border shadow-lg",
    menuList: "scrollbar-thin scrollbar-thumb-input-border scrollbar-track-transparent",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-primary-dark",
    messageBackground: "bg-input-message-bg",
    messageBorder: "border-input-info-border",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  },
  positive: {
    // Control
    control: "cursor-pointer bg-select-bg text-select-text",
    controlFocused: "border-positive",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-select-bg border-input-error-border text-select-text",
    // Placeholder
    placeholder: "text-input-placeholder placeholder:opacity-60",
    // Single value
    singleValue: "text-select-text",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-positive",
    // Menu
    menu: "bg-select-list-bg border-select-border shadow-lg",
    menuList: "",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-positive-dark",
    messageBackground: "bg-positive-light",
    messageBorder: "border-positive",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  },
  warning: {
    // Control
    control: "cursor-pointer bg-select-bg text-select-text",
    controlFocused: "border-input-warning-border",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-select-bg border-input-error-border text-select-text",
    // Placeholder
    placeholder: "text-input-placeholder placeholder:opacity-60",
    // Single value
    singleValue: "text-select-text",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-warning",
    // Menu
    menu: "bg-select-list-bg border-select-border shadow-lg",
    menuList: "bg-select-list-bg border-select-border shadow-lg",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-warning-dark",
    messageBackground: "bg-input-warning-bg",
    messageBorder: "border-input-warning-border",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  },
  negative: {
    // Control
    control: "cursor-pointer bg-select-bg text-select-text",
    controlFocused: "border-input-error-border",
    controlDisabled: "opacity-60",
    controlInvalid: "bg-select-bg border-input-error-border text-select-text",
    // Placeholder
    placeholder: "text-input-placeholder placeholder:opacity-60",
    // Single value
    singleValue: "text-select-text",
    singleValueDisabled: "text-input-placeholder",
    // Multi value
    multiValue: "bg-input-option-active-bg text-input-option-active-text",
    multiValueLabel: "text-input-option-active-text",
    multiValueRemove: "text-input-option-active-text hover:bg-input-option-hover-bg hover:text-body rounded-xs p-px",
    multiValueRemoveHover: "hover:bg-input-option-hover-bg",
    multiValueDisabled: "bg-canvas-subtle text-muted",
    // Indicators
    clearIndicator: "text-input-text hover:text-body cursor-pointer",
    clearIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    dropdownIndicator: "text-input-text",
    dropdownIndicatorHover: "hover:text-body hover:bg-input-option-hover-bg",
    indicatorSeparator: "bg-input-border",
    loadingIndicator: "text-negative",
    // Menu
    menu: "bg-select-list-bg border-select-border shadow-lg",
    menuList: "scrollbar-thin scrollbar-thumb-input-border scrollbar-track-transparent",
    // Options
    option: "text-select-text cursor-pointer",
    optionFocused: "bg-input-option-hover-bg text-body",
    optionSelected: "bg-input-option-active-bg text-input-option-active-text",
    optionDisabled: "text-input-placeholder cursor-not-allowed",
    // Groups
    group: "",
    groupHeading: "text-input-placeholder font-semibold",
    // Messages
    noOptionsMessage: "text-input-placeholder",
    loadingMessage: "text-input-placeholder",
    // Helper message
    message: "text-negative-dark",
    messageBackground: "bg-input-error-bg",
    messageBorder: "border-input-error-border",
    // Icons
    icon: "text-input-text",
    iconAction: "text-input-text hover:text-body",
    iconActionHover: "hover:text-body hover:bg-input-option-hover-bg"
  }
}, uL = ({
  size: e4,
  color: t,
  isDisabled: r,
  isFocused: n,
  isInvalid: o,
  hasMessage: a
}) => Te(
  "flex items-center justify-between border border-select-border only:rounded first:rounded-t last:rounded-b",
  pc[e4].control,
  o && !n ? An[t].controlInvalid : An[t].control,
  {
    [An[t].controlFocused]: n && !a,
    [An[t].controlDisabled]: r,
    "border-0 ring-1": a,
    [An[t].messageBorder]: a
  }
), fL = ({
  size: e4,
  color: t
}) => Te(
  "bg-transparent border-0 outline-hidden flex-1 min-w-7.5 px-1",
  pc[e4].input,
  An[t].placeholder
), dL = ({
  size: e4,
  placement: t,
  hasMessage: r,
  color: n
}) => {
  const o = {
    auto: "top-full rounded-t-none",
    bottom: "top-full rounded-t-none",
    top: "bottom-full rounded-b-none"
  };
  return Te(
    "absolute w-full z-50 rounded overflow-hidden border border-t-0",
    An.primary.menu,
    {
      [An[n].messageBorder]: r
    },
    o[t || "auto"],
    pc[e4].menu
  );
}, pL = ({ size: e4 }) => Te(
  "overflow-y-auto",
  pc[e4].menuList,
  An.primary.menuList
);
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(e4) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e4[n] = r[n]);
    }
    return e4;
  }, yt.apply(null, arguments);
}
var sl = { exports: {} };
var Cf, jb;
function gp() {
  if (jb) return Cf;
  jb = 1;
  var e4 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Cf = e4, Cf;
}
var Nf, Kb;
function wL() {
  if (Kb) return Nf;
  Kb = 1;
  var e4 = /* @__PURE__ */ gp();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Nf = function() {
    function n(l, c, u, d, p, h) {
      if (h !== e4) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Nf;
}
var Zb;
function xL() {
  if (Zb) return sl.exports;
  if (Zb = 1, false) ; else
    sl.exports = /* @__PURE__ */ wL()();
  return sl.exports;
}
var _L = /* @__PURE__ */ xL();
const le = /* @__PURE__ */ Mw(_L);
var Mf = { exports: {} }, qe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yb;
function SL() {
  if (Yb) return qe;
  Yb = 1;
  var e4 = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), _;
  _ = Symbol.for("react.module.reference");
  function v(b) {
    if (typeof b == "object" && b !== null) {
      var m = b.$$typeof;
      switch (m) {
        case e4:
          switch (b = b.type, b) {
            case r:
            case o:
            case n:
            case d:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case l:
                case u:
                case g:
                case h:
                case a:
                  return b;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return qe.ContextConsumer = l, qe.ContextProvider = a, qe.Element = e4, qe.ForwardRef = u, qe.Fragment = r, qe.Lazy = g, qe.Memo = h, qe.Portal = t, qe.Profiler = o, qe.StrictMode = n, qe.Suspense = d, qe.SuspenseList = p, qe.isAsyncMode = function() {
    return false;
  }, qe.isConcurrentMode = function() {
    return false;
  }, qe.isContextConsumer = function(b) {
    return v(b) === l;
  }, qe.isContextProvider = function(b) {
    return v(b) === a;
  }, qe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e4;
  }, qe.isForwardRef = function(b) {
    return v(b) === u;
  }, qe.isFragment = function(b) {
    return v(b) === r;
  }, qe.isLazy = function(b) {
    return v(b) === g;
  }, qe.isMemo = function(b) {
    return v(b) === h;
  }, qe.isPortal = function(b) {
    return v(b) === t;
  }, qe.isProfiler = function(b) {
    return v(b) === o;
  }, qe.isStrictMode = function(b) {
    return v(b) === n;
  }, qe.isSuspense = function(b) {
    return v(b) === d;
  }, qe.isSuspenseList = function(b) {
    return v(b) === p;
  }, qe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === o || b === n || b === d || b === p || b === y || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === h || b.$$typeof === a || b.$$typeof === l || b.$$typeof === u || b.$$typeof === _ || b.getModuleId !== void 0);
  }, qe.typeOf = v, qe;
}
var Jb;
function kL() {
  return Jb || (Jb = 1, Mf.exports = SL() ), Mf.exports;
}
kL();
const e0 = (e4) => typeof e4 == "object" && e4 != null && e4.nodeType === 1, t0 = (e4, t) => (!t || e4 !== "hidden") && e4 !== "visible" && e4 !== "clip", ll = (e4, t) => {
  if (e4.clientHeight < e4.scrollHeight || e4.clientWidth < e4.scrollWidth) {
    const r = getComputedStyle(e4, null);
    return t0(r.overflowY, t) || t0(r.overflowX, t) || ((n) => {
      const o = ((a) => {
        if (!a.ownerDocument || !a.ownerDocument.defaultView) return null;
        try {
          return a.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!o && (o.clientHeight < n.scrollHeight || o.clientWidth < n.scrollWidth);
    })(e4);
  }
  return false;
}, cl = (e4, t, r, n, o, a, l, c) => a < e4 && l > t || a > e4 && l < t ? 0 : a <= e4 && c <= r || l >= t && c >= r ? a - e4 - n : l > t && c < r || a < e4 && c > r ? l - t + o : 0, OL = (e4) => e4.parentElement ?? (e4.getRootNode().host || null), AL = (e4, t) => {
  var r, n, o, a;
  if (typeof document > "u") return [];
  const { inline: l, boundary: c, skipOverflowHiddenElements: u } = t, d = typeof c == "function" ? c : (j) => j !== c;
  if (!e0(e4)) throw new TypeError("Invalid target");
  const p = document.scrollingElement || document.documentElement, h = [];
  let g = e4;
  for (; e0(g) && d(g); ) {
    if (g = OL(g), g === p) {
      h.push(g);
      break;
    }
    g != null && g === document.body && ll(g) && !ll(document.documentElement) || g != null && ll(g, u) && h.push(g);
  }
  const y = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, _ = (a = (o = window.visualViewport) == null ? void 0 : o.height) != null ? a : innerHeight, { scrollX: v, scrollY: b } = window, { height: m, width: w, top: x, right: k, bottom: E, left: R } = e4.getBoundingClientRect(), { top: z, right: A, left: P } = ((j) => {
    const F = window.getComputedStyle(j);
    return { top: parseFloat(F.scrollMarginTop) || 0, right: parseFloat(F.scrollMarginRight) || 0, bottom: parseFloat(F.scrollMarginBottom) || 0, left: parseFloat(F.scrollMarginLeft) || 0 };
  })(e4);
  let B = x - z, $ = l === "center" ? R + w / 2 - P + A : l === "end" ? k + A : R - P;
  const N = [];
  for (let j = 0; j < h.length; j++) {
    const F = h[j], { height: I, width: K, top: Y, right: G, bottom: ge, left: L } = F.getBoundingClientRect();
    if (x >= 0 && R >= 0 && E <= _ && k <= y && (F === p && !ll(F) || x >= Y && E <= ge && R >= L && k <= G)) return N;
    const V = getComputedStyle(F), te = parseInt(V.borderLeftWidth, 10), Q = parseInt(V.borderTopWidth, 10), X = parseInt(V.borderRightWidth, 10), ae = parseInt(V.borderBottomWidth, 10);
    let oe = 0, ie = 0;
    const ce = "offsetWidth" in F ? F.offsetWidth - F.clientWidth - te - X : 0, de = "offsetHeight" in F ? F.offsetHeight - F.clientHeight - Q - ae : 0, fe = "offsetWidth" in F ? F.offsetWidth === 0 ? 0 : K / F.offsetWidth : 0, we = "offsetHeight" in F ? F.offsetHeight === 0 ? 0 : I / F.offsetHeight : 0;
    if (p === F) oe = cl(b, b + _, _, Q, ae, b + B, b + B + m, m), ie = l === "start" ? $ : l === "center" ? $ - y / 2 : l === "end" ? $ - y : cl(v, v + y, y, te, X, v + $, v + $ + w, w), oe = Math.max(0, oe + b), ie = Math.max(0, ie + v);
    else {
      oe = cl(Y, ge, I, Q, ae + de, B, B + m, m), ie = l === "start" ? $ - L - te : l === "center" ? $ - (L + K / 2) + ce / 2 : l === "end" ? $ - G + X + ce : cl(L, G, K, te, X + ce, $, $ + w, w);
      const { scrollLeft: Z, scrollTop: He } = F;
      oe = we === 0 ? 0 : Math.max(0, Math.min(He + oe / we, F.scrollHeight - I / we + de)), ie = fe === 0 ? 0 : Math.max(0, Math.min(Z + ie / fe, F.scrollWidth - K / fe + ce)), B += He - oe, $ += Z - ie;
    }
    N.push({ el: F, top: oe, left: ie });
  }
  return N;
};
var go = function() {
  return go = Object.assign || function(e4) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e4[o] = t[o]);
    }
    return e4;
  }, go.apply(this, arguments);
};
function nx(e4, t) {
  if (e4) {
    var r = AL(e4, {
      boundary: t
    });
    r.forEach(function(n) {
      var o = n.el, a = n.top, l = n.left;
      o.scrollTop = a, o.scrollLeft = l;
    });
  }
}
function UL(e4, t) {
  return t.changes;
}
var Oa = {
  itemToString: function(e4) {
    return e4 ? String(e4) : "";
  },
  itemToKey: function(e4) {
    return e4;
  },
  stateReducer: UL,
  scrollIntoView: nx,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
var Ol = {
  environment: le.shape({
    addEventListener: le.func.isRequired,
    removeEventListener: le.func.isRequired,
    document: le.shape({
      createElement: le.func.isRequired,
      getElementById: le.func.isRequired,
      activeElement: le.any.isRequired,
      body: le.any.isRequired
    }).isRequired,
    Node: le.func.isRequired
  }),
  itemToString: le.func,
  itemToKey: le.func,
  stateReducer: le.func
}, _x = yt({}, Ol, {
  getA11yStatusMessage: le.func,
  highlightedIndex: le.number,
  defaultHighlightedIndex: le.number,
  initialHighlightedIndex: le.number,
  isOpen: le.bool,
  defaultIsOpen: le.bool,
  initialIsOpen: le.bool,
  selectedItem: le.any,
  initialSelectedItem: le.any,
  defaultSelectedItem: le.any,
  id: le.string,
  labelId: le.string,
  menuId: le.string,
  getItemId: le.func,
  toggleButtonId: le.string,
  onSelectedItemChange: le.func,
  onHighlightedIndexChange: le.func,
  onStateChange: le.func,
  onIsOpenChange: le.func,
  scrollIntoView: le.func
}); go(go({}, _x), { items: le.array.isRequired, isItemDisabled: le.func });
go(go({}, Oa), { isItemDisabled: function() {
  return false;
} });
yt({}, _x, {
  items: le.array.isRequired,
  isItemDisabled: le.func,
  inputValue: le.string,
  defaultInputValue: le.string,
  initialInputValue: le.string,
  inputId: le.string,
  onInputValueChange: le.func
});
yt({}, Oa, {
  isItemDisabled: function() {
    return false;
  }
});
({
  stateReducer: Ol.stateReducer,
  itemToKey: Ol.itemToKey,
  environment: Ol.environment,
  selectedItems: le.array,
  initialSelectedItems: le.array,
  defaultSelectedItems: le.array,
  getA11yStatusMessage: le.func,
  activeIndex: le.number,
  initialActiveIndex: le.number,
  defaultActiveIndex: le.number,
  onActiveIndexChange: le.func,
  onSelectedItemsChange: le.func,
  keyNavigationNext: le.string,
  keyNavigationPrevious: le.string
});
Oa.itemToKey, Oa.stateReducer, Oa.environment;
const ZL = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    className: e4,
    children: t,
    isFocused: r,
    isDisabled: n,
    ...o
  }, a) => {
    const {
      size: l,
      color: c,
      isDisabled: u,
      hasMessage: d,
      downshift: p,
      isInvalid: h
    } = dc(), g = n ?? u, y = r ?? p.isOpen;
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        ref: a,
        className: Te(
          uL({
            size: l,
            color: c,
            isDisabled: g,
            isFocused: !!y,
            isInvalid: h && !p.isOpen,
            hasMessage: d
          }),
          e4
        ),
        "aria-disabled": g,
        "aria-invalid": h,
        role: "combobox",
        tabIndex: g ? -1 : 0,
        ...o,
        children: t
      }
    );
  }
), YL = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ isHidden: e4, inputClassName: t, ...r }, n) => {
    const { size: o, color: a } = dc();
    return e4 ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "input",
      {
        ref: n,
        type: "text",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none"
        },
        tabIndex: -1,
        ...r
      }
    ) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "input",
      {
        ref: n,
        type: "text",
        className: Te(fL({ size: o, color: a }), t),
        ...r
      }
    );
  }
), XL = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ className: e4, children: t, placement: r, ...n }, o) => {
    const { size: a, hasMessage: l, color: c } = dc();
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        "data-qui": "SelectMenu",
        ref: o,
        className: Te(
          dL({ size: a, placement: r, hasMessage: l, color: c }),
          e4
        ),
        ...n,
        children: t
      }
    );
  }
), JL = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({ className: e4, children: t, maxHeight: r = 300, ...n }, o) => {
    const { size: a } = dc();
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      up,
      {
        scrollableNodeProps: { ref: o },
        className: Te(pL({ size: a }), e4),
        style: { maxHeight: r },
        ...n,
        children: t
      }
    );
  }
);
ZL.displayName = "Select.Control";
YL.displayName = "Select.Input";
XL.displayName = "Select.Menu";
JL.displayName = "Select.MenuList";
qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(void 0);
const QL = ({
  active: e4,
  disabled: t,
  error: r,
  isOpen: n,
  className: o
}) => Te(
  // Base classes
  "flex w-full items-center justify-between text-left leading-5 transition-colors duration-200",
  {
    // Interactive cursor
    "cursor-pointer": !t,
    // Disabled State
    "text-inactive-text": t,
    // Active State (Selected)
    // Using bg-primary-dark/hover as requested in snippets for active state
    "bg-primary hover:bg-primary-hover text-tab-active-fg": e4 && !t,
    // Error State
    "text-negative": r && !e4 && !t,
    // Open State (Expanded but not necessarily active)
    "bg-primary": n && !e4 && !t,
    // Default State (if not active/disabled/error)
    "text-tab-inactive-fg": !e4 && !t && !r,
    // Hover State (only applied if not disabled)
    // Using opacity or specific hover color
    "hover:bg-primary-hover hover:text-tab-active-fg": !t && !e4
  },
  o
), e5 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(
  ({
    active: e4,
    disabled: t,
    error: r,
    isOpen: n,
    className: o,
    children: a,
    as: l = "div",
    ...c
  }, u) => {
    const d = QL({
      active: e4,
      disabled: t,
      error: r,
      isOpen: n,
      className: o
    });
    return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      l,
      {
        "data-qui": "ListItem",
        ref: u,
        className: d,
        "aria-disabled": t,
        "aria-selected": e4,
        "aria-invalid": r,
        "aria-expanded": n,
        role: c.onClick ? "button" : "listitem",
        ...c,
        children: a
      }
    );
  }
);
e5.displayName = "ListItem";
var t5 = /* @__PURE__ */ ((e4) => (e4[e4.MIN = 0.5] = "MIN", e4[e4.MAX = 10] = "MAX", e4[e4.STEP = 0.5] = "STEP", e4[e4.INIT = 1] = "INIT", e4[e4.TRANSITION = 200] = "TRANSITION", e4))(t5 || {});
const b4 = ({
  zoom: e4,
  minZoom: t = 0.5,
  maxZoom: r = 10,
  handleZoomIn: n,
  handleZoomOut: o
}) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(Yw, { className: "flex items-center rounded p-1", depth: 4, children: [
  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    o2$1,
    {
      onClick: o,
      className: it("h-5 w-5 p-1", {
        "text-grey-200": e4 <= t,
        "cursor-pointer rounded hover:bg-purple-800": e4 > t
      })
    }
  ),
  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "mx-1 w-10 select-none text-center text-xs", children: [
    (e4 * 100).toFixed(0),
    "%"
  ] }),
  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    J2$1,
    {
      onClick: n,
      className: it("h-5 w-5 p-1", {
        "text-grey-200": e4 >= r,
        "cursor-pointer rounded hover:bg-purple-800": e4 < r
      })
    }
  )
] }), r5 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.span, pt({}, e4, { ref: t, style: { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal", ...e4.style } })))), n5 = r5;
function c0(e4) {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef({ value: e4, previous: e4 });
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo((() => (t.current.value !== e4 && (t.current.previous = t.current.value, t.current.value = e4), t.current.previous)), [e4]);
}
const [Sx] = jd("Tooltip", [ic]), bp = ic(), i5 = 700, [y4, o5] = Sx("TooltipProvider", { isOpenDelayed: true, delayDuration: i5, onOpen: () => {
}, onClose: () => {
} }), [a5, hc] = Sx("Tooltip"), s5 = (e4) => {
  const { __scopeTooltip: t, children: r, open: n, defaultOpen: o = false, onOpenChange: a, delayDuration: l } = e4, c = o5("Tooltip", t), u = bp(t), [d, p] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(null), h = Ey(), g = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(0), y = l ?? c.delayDuration, _ = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false), { onOpen: v, onClose: b } = c, [m = false, w] = Dy({ prop: n, defaultProp: o, onChange: (R) => {
    R && (document.dispatchEvent(new CustomEvent("tooltip.open")), v()), a == null || a(R);
  } }), x = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo((() => m ? _.current ? "delayed-open" : "instant-open" : "closed"), [m]), k = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => {
    window.clearTimeout(g.current), _.current = false, w(true);
  }), [w]), E = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => {
    window.clearTimeout(g.current), g.current = window.setTimeout((() => {
      _.current = true, w(true);
    }), y);
  }), [y, w]);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => () => window.clearTimeout(g.current)), []), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Ny, u, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(a5, { scope: t, contentId: h, open: m, stateAttribute: x, trigger: d, onTriggerChange: p, onTriggerEnter: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => {
    c.isOpenDelayed ? E() : k();
  }), [c.isOpenDelayed, E, k]), onOpen: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(k, [k]), onClose: qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => {
    window.clearTimeout(g.current), w(false), b();
  }), [w, b]) }, r));
}, l5 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { __scopeTooltip: r, ...n } = e4, o = hc("TooltipTrigger", r), a = bp(r), l = ti(t, o.onTriggerChange), c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false), u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback((() => c.current = false), []);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => () => document.removeEventListener("mouseup", u)), [u]), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(My, pt({ asChild: true }, a), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(ri.button, pt({ "aria-describedby": o.open ? o.contentId : void 0, "data-state": o.stateAttribute }, n, { ref: l, onMouseEnter: pr(e4.onMouseEnter, o.onTriggerEnter), onMouseLeave: pr(e4.onMouseLeave, o.onClose), onMouseDown: pr(e4.onMouseDown, (() => {
    o.onClose(), c.current = true, document.addEventListener("mouseup", u, { once: true });
  })), onFocus: pr(e4.onFocus, (() => {
    c.current || o.onOpen();
  })), onBlur: pr(e4.onBlur, o.onClose), onClick: pr(e4.onClick, ((d) => {
    d.detail === 0 && o.onClose();
  })) })));
})), c5 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { forceMount: r, ...n } = e4, o = hc("TooltipContent", e4.__scopeTooltip);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Wd, { present: r || o.open }, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(u5, pt({ ref: t }, n)));
})), u5 = /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.forwardRef(((e4, t) => {
  const { __scopeTooltip: r, children: n, "aria-label": o, portalled: a = true, ...l } = e4, c = hc("TooltipContent", r), u = bp(r), d = a ? Bd : qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Fragment, { onClose: p } = c;
  return Ty((() => p())), qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => (document.addEventListener("tooltip.open", p), () => document.removeEventListener("tooltip.open", p))), [p]), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(d, null, /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(f5, { __scopeTooltip: r }), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement($y, pt({ "data-state": c.stateAttribute }, u, l, { ref: t, style: { ...l.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)" } }), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(Ay, null, n), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createElement(n5, { id: c.contentId, role: "tooltip" }, o || n)));
}));
function f5(e4) {
  const { __scopeTooltip: t } = e4, r = hc("CheckTriggerMoved", t), n = Cy(r.trigger), o = n == null ? void 0 : n.left, a = c0(o), l = n == null ? void 0 : n.top, c = c0(l), u = r.onClose;
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect((() => {
    (a !== void 0 && a !== o || c !== void 0 && c !== l) && u();
  }), [u, a, c, o, l]), null;
}
const d5 = s5, p5 = l5, h5 = c5;
function w4(e4) {
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(d5, { delayDuration: e4.delayDuration, open: e4.open, children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(p5, { tabIndex: -1, asChild: true, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { children: e4.children }) }),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      h5,
      {
        side: e4.side,
        sideOffset: e4.sideOffset,
        alignOffset: e4.alignOffset,
        children: [
          typeof e4.message == "string" && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: "max-w-[240px] rounded-md bg-primary-light px-1 py-2 text-s font-semibold text-primary-dark", children: e4.message }),
          typeof e4.message != "string" && e4.message
        ]
      }
    )
  ] });
}
const to = 30, Df = 500, x4 = (e4) => {
  const [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(to), [n, o] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(false), a = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(), l = t > to, c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    e4.isOpen && !l && r(Df), !e4.isOpen && l && r(to);
  }, [e4.isOpen]), /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "relative w-full select-none isolate", style: { zIndex: 49 }, children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      Kw,
      {
        enable: {
          top: true
        },
        className: "w-full select-none border-t",
        size: { height: t, width: "100%" },
        maxHeight: 700,
        minHeight: to,
        onResizeStart: () => {
          o(true), a.current && Date.now() - a.current < 200 ? r(l ? to : Df) : a.current = Date.now();
        },
        onResize: (u, d, p) => {
          c.current && cancelAnimationFrame(c.current), c.current = requestAnimationFrame(() => {
            var h;
            (h = e4.onResize) == null || h.call(e4), c.current = null;
          });
        },
        onResizeStop: (u, d, p, h) => {
          r(t + h.height), o(false);
        },
        handleComponent: {
          top: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Zw, { isDragging: n })
        },
        depth: 1
      }
    ),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      "div",
      {
        "data-cy": "contextualPanel",
        className: "absolute inset-0 flex flex-col overflow-hidden",
        id: `__cp-${Xe.kebabCase(e4.path)}`,
        children: [
          /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
            "div",
            {
              className: it("flex justify-between items-center px-3 py-0.5", {
                "flex-1": !l
              }),
              children: [
                /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "group flex items-center justify-start", children: [
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "mr-2 text-sm text-fd-gray-lighter", children: "Contextual panel" }),
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", {}),
                  e4.tipKey ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(J2, { tipKey: e4.tipKey, alwaysOn: true, asButton: true }) : null,
                  /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "button",
                    {
                      className: "rounded p-1 text-white hover:bg-primary-hover focus:outline-none",
                      onClick: () => {
                        l ? (r(to), e4.onClose()) : (r(Df), e4.onOpen());
                      },
                      children: l ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(C0$1, { className: "h-4 w-4 text-white" }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(H0$1, { className: "h-4 w-4 text-white" })
                    }
                  )
                ] }),
                e4.headerRightSide
              ]
            }
          ),
          /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(tf, { of: l, children: [
            /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(tf, { of: e4.render, children: e4.render }),
            /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(tf, { of: !e4.render, children: e4.children })
          ] })
        ]
      }
    )
  ] });
};
function g5({
  children: e4,
  viewBox: t = "0 0 24 24",
  ...r
}) {
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "svg",
    {
      viewBox: t,
      width: "1em",
      height: "1em",
      fill: "none",
      className: "base-icon",
      ...Xe.omit(r, "isIndeterminate", "isChecked"),
      children: e4
    }
  );
}
function v5(e4) {
  const t = e4.isIndeterminate ? "M2 12h20" : "M4 11.5L9 17L20 6";
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(g5, { viewBox: "0 0 24 24", ...e4, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: t
    }
  ) });
}
function _4({
  isChecked: e4,
  isIndeterminate: t,
  isInvalid: r,
  icon: n,
  label: o,
  className: a = "",
  style: l,
  ...c
}) {
  const u = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null), d = n || /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(v5, {}), p = c.checked ?? e4;
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    u.current && (u.current.indeterminate = !!t);
  }, [t]);
  const h = p || t, g = ["base-checkbox-container", a].join(" ");
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { className: g, style: l, "data-invalid": r, children: [
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "input",
      {
        ref: u,
        type: "checkbox",
        className: "base-checkbox-input",
        checked: p,
        ...c,
        "aria-invalid": r || void 0
      }
    ),
    /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "base-checkbox-control", children: h && d && // Use cloneElement to inject necessary props
    qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.cloneElement(d, {
      isChecked: p,
      isIndeterminate: t,
      className: "base-checkbox-icon"
    }) }),
    o && /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "base-checkbox-label", children: o })
  ] });
}
function S4(e4, t) {
  const r = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(false);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    if (r.current) return e4();
    r.current = true;
  }, t);
}
const Lf = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function zf(e4, t, r, n) {
  e4.addEventListener ? e4.addEventListener(t, r, n) : e4.attachEvent && e4.attachEvent("on".concat(t), r);
}
function da(e4, t, r, n) {
  e4.removeEventListener ? e4.removeEventListener(t, r, n) : e4.detachEvent && e4.detachEvent("on".concat(t), r);
}
function Ex(e4, t) {
  const r = t.slice(0, t.length - 1);
  for (let n = 0; n < r.length; n++) r[n] = e4[r[n].toLowerCase()];
  return r;
}
function kx(e4) {
  typeof e4 != "string" && (e4 = ""), e4 = e4.replace(/\s/g, "");
  const t = e4.split(",");
  let r = t.lastIndexOf("");
  for (; r >= 0; )
    t[r - 1] += ",", t.splice(r, 1), r = t.lastIndexOf("");
  return t;
}
function m5(e4, t) {
  const r = e4.length >= t.length ? e4 : t, n = e4.length >= t.length ? t : e4;
  let o = true;
  for (let a = 0; a < r.length; a++)
    n.indexOf(r[a]) === -1 && (o = false);
  return o;
}
const Na = {
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
  /// https://w3c.github.io/uievents/#events-keyboard-key-location
  arrowup: 38,
  arrowdown: 40,
  arrowleft: 37,
  arrowright: 39,
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
  "-": Lf ? 173 : 189,
  "=": Lf ? 61 : 187,
  ";": Lf ? 59 : 186,
  "'": 222,
  "{": 219,
  "}": 221,
  "[": 219,
  "]": 221,
  "\\": 220
}, Ur = {
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
  meta: 91,
  command: 91
}, ba = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, Dt = {
  16: false,
  18: false,
  17: false,
  91: false
}, dt = {};
for (let e4 = 1; e4 < 20; e4++)
  Na["f".concat(e4)] = 111 + e4;
let ct = [], Aa = null, Ox = "all";
const En = /* @__PURE__ */ new Map(), xo = (e4) => Na[e4.toLowerCase()] || Ur[e4.toLowerCase()] || e4.toUpperCase().charCodeAt(0), b5 = (e4) => Object.keys(Na).find((t) => Na[t] === e4), y5 = (e4) => Object.keys(Ur).find((t) => Ur[t] === e4);
function Ax(e4) {
  Ox = e4 || "all";
}
function Ma() {
  return Ox || "all";
}
function w5() {
  return ct.slice(0);
}
function x5() {
  return ct.map((e4) => b5(e4) || y5(e4) || String.fromCharCode(e4));
}
function _5() {
  const e4 = [];
  return Object.keys(dt).forEach((t) => {
    dt[t].forEach((r) => {
      let {
        key: n,
        scope: o,
        mods: a,
        shortcut: l
      } = r;
      e4.push({
        scope: o,
        shortcut: l,
        mods: a,
        keys: n.split("+").map((c) => xo(c))
      });
    });
  }), e4;
}
function S5(e4) {
  const t = e4.target || e4.srcElement, {
    tagName: r
  } = t;
  let n = true;
  const o = r === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(t.type);
  return (t.isContentEditable || (o || r === "TEXTAREA" || r === "SELECT") && !t.readOnly) && (n = false), n;
}
function E5(e4) {
  return typeof e4 == "string" && (e4 = xo(e4)), ct.indexOf(e4) !== -1;
}
function k5(e4, t) {
  let r, n;
  e4 || (e4 = Ma());
  for (const o in dt)
    if (Object.prototype.hasOwnProperty.call(dt, o))
      for (r = dt[o], n = 0; n < r.length; )
        r[n].scope === e4 ? r.splice(n, 1).forEach((l) => {
          let {
            element: c
          } = l;
          return yp(c);
        }) : n++;
  Ma() === e4 && Ax(t || "all");
}
function O5(e4) {
  let t = e4.keyCode || e4.which || e4.charCode;
  e4.key && e4.key.toLowerCase() === "capslock" && (t = xo(e4.key));
  const r = ct.indexOf(t);
  if (r >= 0 && ct.splice(r, 1), e4.key && e4.key.toLowerCase() === "meta" && ct.splice(0, ct.length), (t === 93 || t === 224) && (t = 91), t in Dt) {
    Dt[t] = false;
    for (const n in Ur) Ur[n] === t && (Br[n] = false);
  }
}
function Tx(e4) {
  if (typeof e4 > "u")
    Object.keys(dt).forEach((o) => {
      Array.isArray(dt[o]) && dt[o].forEach((a) => fl(a)), delete dt[o];
    }), yp(null);
  else if (Array.isArray(e4))
    e4.forEach((o) => {
      o.key && fl(o);
    });
  else if (typeof e4 == "object")
    e4.key && fl(e4);
  else if (typeof e4 == "string") {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      r[n - 1] = arguments[n];
    let [o, a] = r;
    typeof o == "function" && (a = o, o = ""), fl({
      key: e4,
      scope: o,
      method: a,
      splitKey: "+"
    });
  }
}
const fl = (e4) => {
  let {
    key: t,
    scope: r,
    method: n,
    splitKey: o = "+"
  } = e4;
  kx(t).forEach((l) => {
    const c = l.split(o), u = c.length, d = c[u - 1], p = d === "*" ? "*" : xo(d);
    if (!dt[p]) return;
    r || (r = Ma());
    const h = u > 1 ? Ex(Ur, c) : [], g = [];
    dt[p] = dt[p].filter((y) => {
      const v = (n ? y.method === n : true) && y.scope === r && m5(y.mods, h);
      return v && g.push(y.element), !v;
    }), g.forEach((y) => yp(y));
  });
};
function u0(e4, t, r, n) {
  if (t.element !== n)
    return;
  let o;
  if (t.scope === r || t.scope === "all") {
    o = t.mods.length > 0;
    for (const a in Dt)
      Object.prototype.hasOwnProperty.call(Dt, a) && (!Dt[a] && t.mods.indexOf(+a) > -1 || Dt[a] && t.mods.indexOf(+a) === -1) && (o = false);
    (t.mods.length === 0 && !Dt[16] && !Dt[18] && !Dt[17] && !Dt[91] || o || t.shortcut === "*") && (t.keys = [], t.keys = t.keys.concat(ct), t.method(e4, t) === false && (e4.preventDefault ? e4.preventDefault() : e4.returnValue = false, e4.stopPropagation && e4.stopPropagation(), e4.cancelBubble && (e4.cancelBubble = true)));
  }
}
function f0(e4, t) {
  const r = dt["*"];
  let n = e4.keyCode || e4.which || e4.charCode;
  if (e4.key && e4.key.toLowerCase() === "capslock" || !Br.filter.call(this, e4)) return;
  if ((n === 93 || n === 224) && (n = 91), ct.indexOf(n) === -1 && n !== 229 && ct.push(n), ["metaKey", "ctrlKey", "altKey", "shiftKey"].forEach((c) => {
    const u = ba[c];
    e4[c] && ct.indexOf(u) === -1 ? ct.push(u) : !e4[c] && ct.indexOf(u) > -1 ? ct.splice(ct.indexOf(u), 1) : c === "metaKey" && e4[c] && (ct = ct.filter((d) => d in ba || d === n));
  }), n in Dt) {
    Dt[n] = true;
    for (const c in Ur)
      if (Object.prototype.hasOwnProperty.call(Ur, c)) {
        const u = ba[Ur[c]];
        Br[c] = e4[u];
      }
    if (!r) return;
  }
  for (const c in Dt)
    Object.prototype.hasOwnProperty.call(Dt, c) && (Dt[c] = e4[ba[c]]);
  e4.getModifierState && !(e4.altKey && !e4.ctrlKey) && e4.getModifierState("AltGraph") && (ct.indexOf(17) === -1 && ct.push(17), ct.indexOf(18) === -1 && ct.push(18), Dt[17] = true, Dt[18] = true);
  const o = Ma();
  if (r)
    for (let c = 0; c < r.length; c++)
      r[c].scope === o && (e4.type === "keydown" && r[c].keydown || e4.type === "keyup" && r[c].keyup) && u0(e4, r[c], o, t);
  if (!(n in dt)) return;
  const a = dt[n], l = a.length;
  for (let c = 0; c < l; c++)
    if ((e4.type === "keydown" && a[c].keydown || e4.type === "keyup" && a[c].keyup) && a[c].key) {
      const u = a[c], {
        splitKey: d
      } = u, p = u.key.split(d), h = [];
      for (let g = 0; g < p.length; g++)
        h.push(xo(p[g]));
      h.sort().join("") === ct.sort().join("") && u0(e4, u, o, t);
    }
}
function Br(e4, t, r) {
  ct = [];
  const n = kx(e4);
  let o = [], a = "all", l = document, c = 0, u = false, d = true, p = "+", h = false, g = false;
  for (r === void 0 && typeof t == "function" && (r = t), Object.prototype.toString.call(t) === "[object Object]" && (t.scope && (a = t.scope), t.element && (l = t.element), t.keyup && (u = t.keyup), t.keydown !== void 0 && (d = t.keydown), t.capture !== void 0 && (h = t.capture), typeof t.splitKey == "string" && (p = t.splitKey), t.single === true && (g = true)), typeof t == "string" && (a = t), g && Tx(e4, a); c < n.length; c++)
    e4 = n[c].split(p), o = [], e4.length > 1 && (o = Ex(Ur, e4)), e4 = e4[e4.length - 1], e4 = e4 === "*" ? "*" : xo(e4), e4 in dt || (dt[e4] = []), dt[e4].push({
      keyup: u,
      keydown: d,
      scope: a,
      mods: o,
      shortcut: n[c],
      method: r,
      key: n[c],
      splitKey: p,
      element: l
    });
  if (typeof l < "u" && window) {
    if (!En.has(l)) {
      const y = function() {
        let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return f0(v, l);
      }, _ = function() {
        let v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        f0(v, l), O5(v);
      };
      En.set(l, {
        keydownListener: y,
        keyupListenr: _,
        capture: h
      }), zf(l, "keydown", y, h), zf(l, "keyup", _, h);
    }
    if (!Aa) {
      const y = () => {
        ct = [];
      };
      Aa = {
        listener: y,
        capture: h
      }, zf(window, "focus", y, h);
    }
  }
}
function A5(e4) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(dt).forEach((r) => {
    dt[r].filter((o) => o.scope === t && o.shortcut === e4).forEach((o) => {
      o && o.method && o.method();
    });
  });
}
function yp(e4) {
  const t = Object.values(dt).flat();
  if (t.findIndex((n) => {
    let {
      element: o
    } = n;
    return o === e4;
  }) < 0) {
    const {
      keydownListener: n,
      keyupListenr: o,
      capture: a
    } = En.get(e4) || {};
    n && o && (da(e4, "keyup", o, a), da(e4, "keydown", n, a), En.delete(e4));
  }
  if ((t.length <= 0 || En.size <= 0) && (Object.keys(En).forEach((o) => {
    const {
      keydownListener: a,
      keyupListenr: l,
      capture: c
    } = En.get(o) || {};
    a && l && (da(o, "keyup", l, c), da(o, "keydown", a, c), En.delete(o));
  }), En.clear(), Object.keys(dt).forEach((o) => delete dt[o]), Aa)) {
    const {
      listener: o,
      capture: a
    } = Aa;
    da(window, "focus", o, a), Aa = null;
  }
}
const Ff = {
  getPressedKeyString: x5,
  setScope: Ax,
  getScope: Ma,
  deleteScope: k5,
  getPressedKeyCodes: w5,
  getAllKeyCodes: _5,
  isPressed: E5,
  filter: S5,
  trigger: A5,
  unbind: Tx,
  keyMap: Na,
  modifier: Ur,
  modifierMap: ba
};
for (const e4 in Ff)
  Object.prototype.hasOwnProperty.call(Ff, e4) && (Br[e4] = Ff[e4]);
if (typeof window < "u") {
  const e4 = window.hotkeys;
  Br.noConflict = (t) => (t && window.hotkeys === Br && (window.hotkeys = e4), Br), window.hotkeys = Br;
}
Br.filter = () => true;
function E4(e4, t, r, n) {
  r instanceof Array && (n = r, r = void 0), n = n || [], r = r || {};
  const { preventDefault: o = true } = r, a = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(
    (c, u) => {
      o && c.preventDefault(), setTimeout(() => t(c, u));
    },
    n
  ), l = () => {
    Br.unbind(e4, a);
  };
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => (Br(e4, r, a), l), [e4, r, a]);
}
const k4 = (e4) => {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    const r = (n) => {
      t.current && !t.current.contains(n.target) && e4(n);
    };
    return document.addEventListener("click", r, true), () => {
      document.removeEventListener("click", r, true);
    };
  }, [e4]), t;
};
function O4(e4) {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef();
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    t.current = e4;
  }, [e4]), t.current;
}
function A4(e4) {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(e4);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    t.current = e4;
  }, [e4]), t;
}
function T4(e4) {
  const t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null);
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    e4 && (typeof e4 == "function" ? e4(t.current) : e4.current = t.current);
  }), t;
}
function R4(e4) {
  const [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(e4), n = (a, l) => {
    r((c) => ({
      ...c,
      features: {
        ...c.features,
        [a]: {
          enabled: l
        }
      }
    }));
  }, o = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(
    (...a) => a.every((l) => {
      var c;
      return (c = t.features[l]) == null ? void 0 : c.enabled;
    }),
    [t.features]
  );
  return {
    setFeature: n,
    isFeatureEnabled: o
  };
}
const Rx = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.createContext(""), C4 = (e4) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Rx.Provider, { value: e4.value, children: e4.children }), P4 = () => {
  const e4 = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useContext(Rx);
  if (typeof e4 != "string")
    throw new Error(
      "Error while calling useIdentity! Context has incorrect type (expected string)"
    );
  return e4;
};
function I4(e4) {
  const [t, r] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(e4), n = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(() => T5(t, r), []);
  return {
    state: t,
    actions: {
      ...n,
      set: (o) => {
        r(
          typeof o == "function" ? o : (a) => ({
            ...a,
            ...o
          })
        );
      }
    }
  };
}
function T5(e4, t = () => {
}) {
  return Object.keys(e4).reduce(
    (n, o) => ({
      ...n,
      [`set${Xe.upperFirst(o)}`]: (a) => t((l) => ({
        ...l,
        [o]: a
      }))
    }),
    {}
  );
}
const N4 = (e4, t, r = {}) => {
  r = {
    timeout: 200,
    ...r
  };
  const n = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(), o = () => {
    n.current && (clearTimeout(n.current), n.current = null);
  };
  return qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(
    (a, ...l) => {
      o(), t && a.detail === 1 && (n.current = setTimeout(() => {
        t(a, ...l);
      }, r.timeout)), a.detail % 2 === 0 && e4(a, ...l);
    },
    [t, e4, r.timeout]
  );
};
function Lt(e4) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Error("[Immer] minified error nr: " + e4 + (r.length ? " " + r.map((function(l) {
    return "'" + l + "'";
  })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function vo(e4) {
  return !!e4 && !!e4[mr];
}
function Ri(e4) {
  var t;
  return !!e4 && ((function(r) {
    if (!r || typeof r != "object") return false;
    var n = Object.getPrototypeOf(r);
    if (n === null) return true;
    var o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
    return o === Object || typeof o == "function" && Function.toString.call(o) === D5;
  })(e4) || Array.isArray(e4) || !!e4[y0] || !!(!((t = e4.constructor) === null || t === void 0) && t[y0]) || wp(e4) || xp(e4));
}
function $a(e4, t, r) {
  r === void 0 && (r = false), _o(e4) === 0 ? (r ? Object.keys : kp)(e4).forEach((function(n) {
    r && typeof n == "symbol" || t(n, e4[n], e4);
  })) : e4.forEach((function(n, o) {
    return t(o, n, e4);
  }));
}
function _o(e4) {
  var t = e4[mr];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e4) ? 1 : wp(e4) ? 2 : xp(e4) ? 3 : 0;
}
function md(e4, t) {
  return _o(e4) === 2 ? e4.has(t) : Object.prototype.hasOwnProperty.call(e4, t);
}
function R5(e4, t) {
  return _o(e4) === 2 ? e4.get(t) : e4[t];
}
function Cx(e4, t, r) {
  var n = _o(e4);
  n === 2 ? e4.set(t, r) : n === 3 ? e4.add(r) : e4[t] = r;
}
function C5(e4, t) {
  return e4 === t ? e4 !== 0 || 1 / e4 == 1 / t : e4 != e4 && t != t;
}
function wp(e4) {
  return N5 && e4 instanceof Map;
}
function xp(e4) {
  return M5 && e4 instanceof Set;
}
function bi(e4) {
  return e4.o || e4.t;
}
function _p(e4) {
  if (Array.isArray(e4)) return Array.prototype.slice.call(e4);
  var t = L5(e4);
  delete t[mr];
  for (var r = kp(t), n = 0; n < r.length; n++) {
    var o = r[n], a = t[o];
    a.writable === false && (a.writable = true, a.configurable = true), (a.get || a.set) && (t[o] = { configurable: true, writable: true, enumerable: a.enumerable, value: e4[o] });
  }
  return Object.create(Object.getPrototypeOf(e4), t);
}
function Da(e4, t) {
  return t === void 0 && (t = false), Sp(e4) || vo(e4) || !Ri(e4) || (_o(e4) > 1 && (e4.set = e4.add = e4.clear = e4.delete = P5), Object.freeze(e4), t && $a(e4, (function(r, n) {
    return Da(n, true);
  }), true)), e4;
}
function P5() {
  Lt(2);
}
function Sp(e4) {
  return e4 == null || typeof e4 != "object" || Object.isFrozen(e4);
}
function an(e4) {
  var t = z5[e4];
  return t || Lt(18, e4), t;
}
function d0() {
  return mo;
}
function Hf(e4, t) {
  t && (an("Patches"), e4.u = [], e4.s = [], e4.v = t);
}
function Bl(e4) {
  bd(e4), e4.p.forEach(I5), e4.p = null;
}
function bd(e4) {
  e4 === mo && (mo = e4.l);
}
function p0(e4) {
  return mo = { p: [], l: mo, h: e4, m: true, _: 0 };
}
function I5(e4) {
  var t = e4[mr];
  t.i === 0 || t.i === 1 ? t.j() : t.g = true;
}
function Wf(e4, t) {
  t._ = t.p.length;
  var r = t.p[0], n = e4 !== void 0 && e4 !== r;
  return t.h.O || an("ES5").S(t, e4, n), n ? (r[mr].P && (Bl(t), Lt(4)), Ri(e4) && (e4 = jl(t, e4), t.l || Ul(t, e4)), t.u && an("Patches").M(r[mr].t, e4, t.u, t.s)) : e4 = jl(t, r, []), Bl(t), t.u && t.v(t.u, t.s), e4 !== Ix ? e4 : void 0;
}
function jl(e4, t, r) {
  if (Sp(t)) return t;
  var n = t[mr];
  if (!n) return $a(t, (function(c, u) {
    return h0(e4, n, t, c, u, r);
  }), true), t;
  if (n.A !== e4) return t;
  if (!n.P) return Ul(e4, n.t, true), n.t;
  if (!n.I) {
    n.I = true, n.A._--;
    var o = n.i === 4 || n.i === 5 ? n.o = _p(n.k) : n.o, a = o, l = false;
    n.i === 3 && (a = new Set(o), o.clear(), l = true), $a(a, (function(c, u) {
      return h0(e4, n, o, c, u, r, l);
    })), Ul(e4, o, false), r && e4.u && an("Patches").N(n, r, e4.u, e4.s);
  }
  return n.o;
}
function h0(e4, t, r, n, o, a, l) {
  if (vo(o)) {
    var c = jl(e4, o, a && t && t.i !== 3 && !md(t.R, n) ? a.concat(n) : void 0);
    if (Cx(r, n, c), !vo(c)) return;
    e4.m = false;
  } else l && r.add(o);
  if (Ri(o) && !Sp(o)) {
    if (!e4.h.D && e4._ < 1) return;
    jl(e4, o), t && t.A.l || Ul(e4, o);
  }
}
function Ul(e4, t, r) {
  r === void 0 && (r = false), !e4.l && e4.h.D && e4.m && Da(t, r);
}
function Bf(e4, t) {
  var r = e4[mr];
  return (r ? bi(r) : e4)[t];
}
function g0(e4, t) {
  if (t in e4) for (var r = Object.getPrototypeOf(e4); r; ) {
    var n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Object.getPrototypeOf(r);
  }
}
function yd(e4) {
  e4.P || (e4.P = true, e4.l && yd(e4.l));
}
function jf(e4) {
  e4.o || (e4.o = _p(e4.t));
}
function wd(e4, t, r) {
  var n = wp(t) ? an("MapSet").F(t, r) : xp(t) ? an("MapSet").T(t, r) : e4.O ? (function(o, a) {
    var l = Array.isArray(o), c = { i: l ? 1 : 0, A: a ? a.A : d0(), P: false, I: false, R: {}, l: a, t: o, k: null, o: null, j: null, C: false }, u = c, d = xd;
    l && (u = [c], d = ya);
    var p = Proxy.revocable(u, d), h = p.revoke, g = p.proxy;
    return c.k = g, c.j = h, g;
  })(t, r) : an("ES5").J(t, r);
  return (r ? r.A : d0()).p.push(n), n;
}
function Px(e4) {
  return vo(e4) || Lt(22, e4), (function t(r) {
    if (!Ri(r)) return r;
    var n, o = r[mr], a = _o(r);
    if (o) {
      if (!o.P && (o.i < 4 || !an("ES5").K(o))) return o.t;
      o.I = true, n = v0(r, a), o.I = false;
    } else n = v0(r, a);
    return $a(n, (function(l, c) {
      o && R5(o.t, l) === c || Cx(n, l, t(c));
    })), a === 3 ? new Set(n) : n;
  })(e4);
}
function v0(e4, t) {
  switch (t) {
    case 2:
      return new Map(e4);
    case 3:
      return Array.from(e4);
  }
  return _p(e4);
}
var m0, mo, Ep = typeof Symbol < "u" && typeof Symbol("x") == "symbol", N5 = typeof Map < "u", M5 = typeof Set < "u", b0 = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u", Ix = Ep ? Symbol.for("immer-nothing") : ((m0 = {})["immer-nothing"] = true, m0), y0 = Ep ? Symbol.for("immer-draftable") : "__$immer_draftable", mr = Ep ? Symbol.for("immer-state") : "__$immer_state", D5 = "" + Object.prototype.constructor, kp = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e4) {
  return Object.getOwnPropertyNames(e4).concat(Object.getOwnPropertySymbols(e4));
} : Object.getOwnPropertyNames, L5 = Object.getOwnPropertyDescriptors || function(e4) {
  var t = {};
  return kp(e4).forEach((function(r) {
    t[r] = Object.getOwnPropertyDescriptor(e4, r);
  })), t;
}, z5 = {}, xd = { get: function(e4, t) {
  if (t === mr) return e4;
  var r = bi(e4);
  if (!md(r, t)) return (function(o, a, l) {
    var c, u = g0(a, l);
    return u ? "value" in u ? u.value : (c = u.get) === null || c === void 0 ? void 0 : c.call(o.k) : void 0;
  })(e4, r, t);
  var n = r[t];
  return e4.I || !Ri(n) ? n : n === Bf(e4.t, t) ? (jf(e4), e4.o[t] = wd(e4.A.h, n, e4)) : n;
}, has: function(e4, t) {
  return t in bi(e4);
}, ownKeys: function(e4) {
  return Reflect.ownKeys(bi(e4));
}, set: function(e4, t, r) {
  var n = g0(bi(e4), t);
  if (n != null && n.set) return n.set.call(e4.k, r), true;
  if (!e4.P) {
    var o = Bf(bi(e4), t), a = o == null ? void 0 : o[mr];
    if (a && a.t === r) return e4.o[t] = r, e4.R[t] = false, true;
    if (C5(r, o) && (r !== void 0 || md(e4.t, t))) return true;
    jf(e4), yd(e4);
  }
  return e4.o[t] === r && (r !== void 0 || t in e4.o) || Number.isNaN(r) && Number.isNaN(e4.o[t]) || (e4.o[t] = r, e4.R[t] = true), true;
}, deleteProperty: function(e4, t) {
  return Bf(e4.t, t) !== void 0 || t in e4.t ? (e4.R[t] = false, jf(e4), yd(e4)) : delete e4.R[t], e4.o && delete e4.o[t], true;
}, getOwnPropertyDescriptor: function(e4, t) {
  var r = bi(e4), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: true, configurable: e4.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty: function() {
  Lt(11);
}, getPrototypeOf: function(e4) {
  return Object.getPrototypeOf(e4.t);
}, setPrototypeOf: function() {
  Lt(12);
} }, ya = {};
$a(xd, (function(e4, t) {
  ya[e4] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
})), ya.deleteProperty = function(e4, t) {
  return ya.set.call(this, e4, t, void 0);
}, ya.set = function(e4, t, r) {
  return xd.set.call(this, e4[0], t, r, e4[0]);
};
var F5 = (function() {
  function e4(r) {
    var n = this;
    this.O = b0, this.D = true, this.produce = function(o, a, l) {
      if (typeof o == "function" && typeof a != "function") {
        var c = a;
        a = o;
        var u = n;
        return function(v) {
          var b = this;
          v === void 0 && (v = c);
          for (var m = arguments.length, w = Array(m > 1 ? m - 1 : 0), x = 1; x < m; x++) w[x - 1] = arguments[x];
          return u.produce(v, (function(k) {
            var E;
            return (E = a).call.apply(E, [b, k].concat(w));
          }));
        };
      }
      var d;
      if (typeof a != "function" && Lt(6), l !== void 0 && typeof l != "function" && Lt(7), Ri(o)) {
        var p = p0(n), h = wd(n, o, void 0), g = true;
        try {
          d = a(h), g = false;
        } finally {
          g ? Bl(p) : bd(p);
        }
        return typeof Promise < "u" && d instanceof Promise ? d.then((function(v) {
          return Hf(p, l), Wf(v, p);
        }), (function(v) {
          throw Bl(p), v;
        })) : (Hf(p, l), Wf(d, p));
      }
      if (!o || typeof o != "object") {
        if ((d = a(o)) === void 0 && (d = o), d === Ix && (d = void 0), n.D && Da(d, true), l) {
          var y = [], _ = [];
          an("Patches").M(o, d, y, _), l(y, _);
        }
        return d;
      }
      Lt(21, o);
    }, this.produceWithPatches = function(o, a) {
      if (typeof o == "function") return function(d) {
        for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++) h[g - 1] = arguments[g];
        return n.produceWithPatches(d, (function(y) {
          return o.apply(void 0, [y].concat(h));
        }));
      };
      var l, c, u = n.produce(o, a, (function(d, p) {
        l = d, c = p;
      }));
      return typeof Promise < "u" && u instanceof Promise ? u.then((function(d) {
        return [d, l, c];
      })) : [u, l, c];
    }, typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies), typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
  }
  var t = e4.prototype;
  return t.createDraft = function(r) {
    Ri(r) || Lt(8), vo(r) && (r = Px(r));
    var n = p0(this), o = wd(this, r, void 0);
    return o[mr].C = true, bd(n), o;
  }, t.finishDraft = function(r, n) {
    var o = r && r[mr];
    var a = o.A;
    return Hf(a, n), Wf(void 0, a);
  }, t.setAutoFreeze = function(r) {
    this.D = r;
  }, t.setUseProxies = function(r) {
    r && !b0 && Lt(20), this.O = r;
  }, t.applyPatches = function(r, n) {
    var o;
    for (o = n.length - 1; o >= 0; o--) {
      var a = n[o];
      if (a.path.length === 0 && a.op === "replace") {
        r = a.value;
        break;
      }
    }
    o > -1 && (n = n.slice(o + 1));
    var l = an("Patches").$;
    return vo(r) ? l(r, n) : this.produce(r, (function(c) {
      return l(c, n);
    }));
  }, e4;
})(), br = new F5(), H5 = br.produce;
br.produceWithPatches.bind(br);
br.setAutoFreeze.bind(br);
br.setUseProxies.bind(br);
br.applyPatches.bind(br);
br.createDraft.bind(br);
br.finishDraft.bind(br);
function W5(e4) {
  var t = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState(function() {
    return Da(typeof e4 == "function" ? e4() : e4, true);
  }), r = t[1];
  return [t[0], qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useCallback(function(n) {
    r(typeof n == "function" ? H5(n) : Da(n));
  }, [])];
}
const M4 = (e4, t, r) => {
  const [n, o] = W5(e4), a = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useRef(null);
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useEffect(() => {
    var u;
    return r && (a.current = void 0 , (u = a.current) == null || u.init(e4)), () => {
      var d, p;
      (p = (d = a.current) == null ? void 0 : d.disconnect) == null || p.call(d);
    };
  }, []);
  const l = t && typeof t == "object" ? t : {}, c = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useMemo(
    () => Object.keys(l).reduce((u, d) => ({
      ...u,
      [d]: (p) => (o((h) => {
        var g;
        l[d](h, p), (g = a.current) == null || g.send(
          {
            type: l[d].name
          },
          Px(h)
        );
      }), c)
    }), {}),
    [o]
  );
  return { state: n, dispatch: c };
};
function Tn(e4) {
  return typeof e4 == "function";
}
function Nx(e4) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e4(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Vf = Nx(function(e4) {
  return function(r) {
    e4(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function _d(e4, t) {
  if (e4) {
    var r = e4.indexOf(t);
    0 <= r && e4.splice(r, 1);
  }
}
var gc = (function() {
  function e4(t) {
    this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e4.prototype.unsubscribe = function() {
    var t, r, n, o, a;
    if (!this.closed) {
      this.closed = true;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var c = Qf(l), u = c.next(); !u.done; u = c.next()) {
              var d = u.value;
              d.remove(this);
            }
          } catch (v) {
            t = { error: v };
          } finally {
            try {
              u && !u.done && (r = c.return) && r.call(c);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          l.remove(this);
      var p = this.initialTeardown;
      if (Tn(p))
        try {
          p();
        } catch (v) {
          a = v instanceof Vf ? v.errors : [v];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var g = Qf(h), y = g.next(); !y.done; y = g.next()) {
            var _ = y.value;
            try {
              w0(_);
            } catch (v) {
              a = a ?? [], v instanceof Vf ? a = Il(Il([], ed(a)), ed(v.errors)) : a.push(v);
            }
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            y && !y.done && (o = g.return) && o.call(g);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new Vf(a);
    }
  }, e4.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        w0(t);
      else {
        if (t instanceof e4) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e4.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e4.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e4.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && _d(r, t);
  }, e4.prototype.remove = function(t) {
    var r = this._finalizers;
    r && _d(r, t), t instanceof e4 && t._removeParent(this);
  }, e4.EMPTY = (function() {
    var t = new e4();
    return t.closed = true, t;
  })(), e4;
})(), Mx = gc.EMPTY;
function $x(e4) {
  return e4 instanceof gc || e4 && "closed" in e4 && Tn(e4.remove) && Tn(e4.add) && Tn(e4.unsubscribe);
}
function w0(e4) {
  Tn(e4) ? e4() : e4.unsubscribe();
}
var j5 = {
  Promise: void 0
}, U5 = {
  setTimeout: function(e4, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Il([e4, t], ed(r)));
  },
  clearTimeout: function(e4) {
    return clearTimeout(e4);
  },
  delegate: void 0
};
function V5(e4) {
  U5.setTimeout(function() {
    throw e4;
  });
}
function x0() {
}
function Al(e4) {
  e4();
}
var Dx = (function(e4) {
  rc(t, e4);
  function t(r) {
    var n = e4.call(this) || this;
    return n.isStopped = false, r ? (n.destination = r, $x(r) && r.add(n)) : n.destination = K5, n;
  }
  return t.create = function(r, n, o) {
    return new Sd(r, n, o);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = true, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e4.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
})(gc), q5 = (function() {
  function e4(t) {
    this.partialObserver = t;
  }
  return e4.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        dl(n);
      }
  }, e4.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        dl(n);
      }
    else
      dl(t);
  }, e4.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        dl(r);
      }
  }, e4;
})(), Sd = (function(e4) {
  rc(t, e4);
  function t(r, n, o) {
    var a = e4.call(this) || this, l;
    return Tn(r) || !r ? l = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: o ?? void 0
    } : l = r, a.destination = new q5(l), a;
  }
  return t;
})(Dx);
function dl(e4) {
  V5(e4);
}
function G5(e4) {
  throw e4;
}
var K5 = {
  closed: true,
  next: x0,
  error: G5,
  complete: x0
}, Z5 = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function Y5(e4) {
  return e4;
}
function X5(e4) {
  return e4.length === 0 ? Y5 : e4.length === 1 ? e4[0] : function(r) {
    return e4.reduce(function(n, o) {
      return o(n);
    }, r);
  };
}
var _0 = (function() {
  function e4(t) {
    t && (this._subscribe = t);
  }
  return e4.prototype.lift = function(t) {
    var r = new e4();
    return r.source = this, r.operator = t, r;
  }, e4.prototype.subscribe = function(t, r, n) {
    var o = this, a = Q5(t) ? t : new Sd(t, r, n);
    return Al(function() {
      var l = o, c = l.operator, u = l.source;
      a.add(c ? c.call(a, u) : u ? o._subscribe(a) : o._trySubscribe(a));
    }), a;
  }, e4.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e4.prototype.forEach = function(t, r) {
    var n = this;
    return r = S0(r), new r(function(o, a) {
      var l = new Sd({
        next: function(c) {
          try {
            t(c);
          } catch (u) {
            a(u), l.unsubscribe();
          }
        },
        error: a,
        complete: o
      });
      n.subscribe(l);
    });
  }, e4.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e4.prototype[Z5] = function() {
    return this;
  }, e4.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return X5(t)(this);
  }, e4.prototype.toPromise = function(t) {
    var r = this;
    return t = S0(t), new t(function(n, o) {
      var a;
      r.subscribe(function(l) {
        return a = l;
      }, function(l) {
        return o(l);
      }, function() {
        return n(a);
      });
    });
  }, e4.create = function(t) {
    return new e4(t);
  }, e4;
})();
function S0(e4) {
  var t;
  return (t = e4 ?? j5.Promise) !== null && t !== void 0 ? t : Promise;
}
function J5(e4) {
  return e4 && Tn(e4.next) && Tn(e4.error) && Tn(e4.complete);
}
function Q5(e4) {
  return e4 && e4 instanceof Dx || J5(e4) && $x(e4);
}
var ez = Nx(function(e4) {
  return function() {
    e4(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), cn = (function(e4) {
  rc(t, e4);
  function t() {
    var r = e4.call(this) || this;
    return r.closed = false, r.currentObservers = null, r.observers = [], r.isStopped = false, r.hasError = false, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var n = new E0(this, this);
    return n.operator = r, n;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ez();
  }, t.prototype.next = function(r) {
    var n = this;
    Al(function() {
      var o, a;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var l = Qf(n.currentObservers), c = l.next(); !c.done; c = l.next()) {
            var u = c.value;
            u.next(r);
          }
        } catch (d) {
          o = { error: d };
        } finally {
          try {
            c && !c.done && (a = l.return) && a.call(l);
          } finally {
            if (o) throw o.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var n = this;
    Al(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = true, n.thrownError = r;
        for (var o = n.observers; o.length; )
          o.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    Al(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = true;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: false,
    configurable: true
  }), t.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), e4.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var n = this, o = this, a = o.hasError, l = o.isStopped, c = o.observers;
    return a || l ? Mx : (this.currentObservers = null, c.push(r), new gc(function() {
      n.currentObservers = null, _d(c, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var n = this, o = n.hasError, a = n.thrownError, l = n.isStopped;
    o ? r.error(a) : l && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new _0();
    return r.source = this, r;
  }, t.create = function(r, n) {
    return new E0(r, n);
  }, t;
})(_0), E0 = (function(e4) {
  rc(t, e4);
  function t(r, n) {
    var o = e4.call(this) || this;
    return o.destination = r, o.source = n, o;
  }
  return t.prototype.next = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r);
  }, t.prototype.error = function(r) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r);
  }, t.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, t.prototype._subscribe = function(r) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Mx;
  }, t;
})(cn), tz = /* @__PURE__ */ ((e4) => (e4.RELOAD = "reload", e4.RECOMPUTE = "recompute", e4))(tz || {}), rz = /* @__PURE__ */ ((e4) => (e4.RENAME = "rename", e4.TYPE_CHANGE = "type-change", e4))(rz || {});
const $4 = new cn(), D4 = new cn(), nz = new cn();
var iz = /* @__PURE__ */ ((e4) => (e4.SAVE_ALL = "save-all", e4))(iz || {});
const L4 = new cn();
var oz = /* @__PURE__ */ ((e4) => (e4.WILL_SAVE = "will-save", e4.DID_SAVE = "did-save", e4.WILL_CREATE = "will-create", e4.WILL_RENAME = "will-rename", e4.WILL_DELETE = "will-delete", e4.DID_CREATE = "did-create", e4.DID_RENAME = "did-rename", e4.DID_DELETE = "did-delete", e4.DIAGNOSTIC_REFRESH = "diagnostic-refresh", e4))(oz || {});
const z4 = new cn();
var az = /* @__PURE__ */ ((e4) => (e4.RESEND_BREAKPOINTS = "resend-breakpoints", e4))(az || {});
const F4 = new cn(), H4 = new cn();
var Vl = /* @__PURE__ */ ((e4) => (e4.EVENT_STARTED = "event-started", e4.EVENT_ENDED = "event-ended", e4.EVENT_EMITED = "event-emited", e4.REQUEST_SENT = "request-sent", e4))(Vl || {});
const Ed = new cn(), W4 = new cn(), Lx = 31;
var zx = ((e4) => (e4.EMPTY = "Please enter a valid name", e4.LENGTH_EXCEEDED = `The name is too long, it should not exceed ${Lx} characters`, e4.SHOULD_START_WITH_LETTER = "The name can only start with a letter or a Japanese character", e4.INVALID = "Invalid name", e4))(zx || {});
function Op(e4) {
  if (e4 === "")
    throw new Error(
      "Please enter a valid name"
      /* EMPTY */
    );
  if (e4.length > Lx)
    throw new Error(zx.LENGTH_EXCEEDED);
  if (!/^[a-zA-Z\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF]/.test(e4))
    throw new Error(
      "The name can only start with a letter or a Japanese character"
      /* SHOULD_START_WITH_LETTER */
    );
  if (!/^[\w\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF-]+$/i.test(e4))
    throw new Error(
      "Invalid name"
      /* INVALID */
    );
  return true;
}
function B4(e4) {
  if (!e4) return null;
  if (typeof e4 == "string")
    try {
      Op(e4);
    } catch (t) {
      return t.message;
    }
}
function j4(e4, t) {
  let r = "";
  if (["array", "object"].includes(t))
    try {
      const n = JSON.parse(e4);
      t === "array" && (!Array.isArray(n) || !Xe.isObject(n)) && (r = `Invalid value for type ${t}`), t === "object" && (!Xe.isObject(n) || Array.isArray(n)) && (r = `Invalid value for type ${t}`);
    } catch {
      r = `Invalid value for type ${t}`;
    }
  return t === "date" && (new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
  ).test(e4) || (r = `Invalid value for type ${t}`)), t === "number" && isNaN(+e4) && (r = `Invalid value for type ${t}`), ["boolean", "bool"].includes(t) && typeof e4 != "boolean" && !["true", "false"].includes(e4) && (r = `Invalid value for type ${t}`), r;
}
function sz() {
  return {
    PLACEHOLDER_PREFIX: `@!MASK_${Date.now().toString(36) + Math.random().toString(36).substring(2, 8)}_`,
    counter: 0
  };
}
function Ap(e4) {
  const { PLACEHOLDER_PREFIX: t, counter: r } = sz();
  let n = r;
  const o = [], a = "@!", l = (p) => (o.push(p), `${t}${n++}${a}`);
  let c = e4.replace(
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
    l
  );
  c = c.replace(
    /([\{\s]\s*\w+\s*)(:\s*\d+)/g,
    (p, h, g) => h + l(g)
  ), c = c.replace(/:\d{2}:\d{2}/g, l);
  const u = new RegExp(":(?!4D\\.\\w+)[CPK]?\\d+", "g");
  let d = c.replace(u, "");
  for (let p = 0; p < o.length; p++) {
    const g = `${t}${p}${a}`.replace(
      /([.*+?^${}()|[\]\\])/g,
      "\\$1"
    ), y = new RegExp(g, "g");
    d = d.replace(y, o[p]);
  }
  return d;
}
var Fx = /* @__PURE__ */ ((e4) => (e4.METHODS = "method", e4.WEBFORMS = "webform", e4.CLASSES = "class", e4.WELCOME = "welcome", e4.SETTINGS = "settings", e4.ROOT = "root", e4.REPORTS = "report", e4))(Fx || {});
const wi = {
  CLASSES: "Classes",
  METHODS: "Methods",
  SHARED: "Shared",
  WEBFORMS: "WebForms",
  CLASSES_FOLDER: "ClassesFolder",
  REPORTS: "Reports",
  DEBUGGER: "Debugger"
};
var $t = /* @__PURE__ */ ((e4) => (e4.FOLDER = "folder", e4.WEBFORM = "webform", e4.REPORT = "report", e4.METHOD = "method", e4.CLASS = "class", e4.CLASS_FOLDER = "classfolder", e4.DEBUGGER = "debugger", e4.WELCOME = "welcome", e4.SETTINGS = "settings", e4.METHODS = "method", e4.WEBFORMS = "webform", e4.CLASSES = "class", e4.DEBUGGERS = "debugger", e4.MODELS = "models", e4.ROLES = "roles", e4.HTTP_HANDLERS = "http-handlers", e4.LOCALIZATION = "localization", e4.MODEL = "model", e4.DATA_EXPLORER = "dataexplorer", e4.MOBILE = "mobile", e4.MOBILEFORM = "mform", e4.FILE = "file", e4.TEXT = "text", e4))($t || {}), Mi = /* @__PURE__ */ ((e4) => (e4.GET_FOLDER = "getFolder", e4.GET = "get", e4.SAVE = "save", e4.RENAME = "rename", e4.DROP = "drop", e4.ADD_FOLDER = "addFolder", e4.CREATE_FOLDER = "mkdir", e4.RENAME_FOLDER = "renameFolder", e4.DROP_FOLDER = "dropFolder", e4.REMOVE_ITEM = "removeItem", e4.MOVE_ITEM = "moveItem", e4.GET_INFO = "getInfo", e4.SAVE_CONTENT = "save", e4.UPDATE_CHECK = "update:check", e4.UPDATE_INSTALL = "update:install", e4.GET_APP_SETTINGS = "getWebServerInfo", e4.GET_FILE_CONTENT = "getFileContent", e4.SET_FILE_CONTENT = "setFileContent", e4.GET_FILES_INFO = "getFilesInfo", e4))(Mi || {}), Hx = /* @__PURE__ */ ((e4) => (e4[e4.DISABLED = 0] = "DISABLED", e4[e4.ENABLED = 1] = "ENABLED", e4))(Hx || {});
const lz = "roles.json", cz = "qodlyApp.json", U4 = "model.4DModel", uz = "HTTPHandlers.json", fz = "Shared/i18n.json";
function V4(e4) {
  const t = Wx(e4);
  switch (t) {
    case $t.SETTINGS:
      return {
        filename: "Settings",
        type: t
      };
    case $t.HTTP_HANDLERS:
      return {
        filename: "HTTP Handlers",
        type: t
      };
    case $t.ROLES:
      return {
        filename: "Roles & Privileges",
        type: t
      };
    case $t.LOCALIZATION:
      return {
        filename: "Localization",
        type: t
      };
    case $t.MODEL:
      return {
        filename: "Model",
        type: t
      };
    default: {
      const r = e4.split("/"), [n] = r[1].split(".");
      return {
        filename: n,
        type: t
      };
    }
  }
}
function Wx(e4) {
  const t = e4.split("."), r = t.pop(), n = t.join(".").split("/")[0];
  switch (true) {
    case r === "4DModel":
      return $t.MODEL;
    case r === "WebForm":
      return $t.WEBFORM;
    case (["4dm", "4qs", "4qm"].includes(r) && n === wi.METHODS):
      return $t.METHOD;
    case (["4dm", "4qs", "4qm"].includes(r) && n === wi.CLASSES):
      return $t.CLASS;
    case e4 === lz:
      return $t.ROLES;
    case e4 === uz:
      return $t.HTTP_HANDLERS;
    case e4 === cz:
      return $t.SETTINGS;
    case e4 === fz:
      return $t.LOCALIZATION;
    default:
      return $t.TEXT;
  }
}
function q4(e4, t = false) {
  switch (e4) {
    case wi.REPORTS:
    case "report":
      return "QoDoc";
    case wi.WEBFORMS:
    case "webform":
      return "WebForm";
    case "Mobile":
    case "mform":
      return "MForm";
    case "class":
    case "method":
    case wi.CLASSES:
    case wi.METHODS:
      return t ? "4qs" : "4dm";
    default:
      return "";
  }
}
function G4(e4, t = "") {
  const r = new RegExp("(?<=\\/)(\\w+)(?=\\.)").exec(e4);
  return r ? r[1] : t;
}
class dz {
  constructor() {
    this.current = Promise.resolve();
  }
  lock() {
    let t;
    const r = new Promise((o) => {
      t = o;
    }), n = this.current.then(() => t);
    return this.current = r, n;
  }
}
function Bx() {
  const e4 = new dz();
  return async (t) => {
    const r = await e4.lock();
    try {
      const n = await t();
      return r(), n;
    } catch (n) {
      console.error(n), r();
      return;
    }
  };
}
const pz = Xe.curry(
  (e4, t, r) => e4 && Xe.get(r, e4) === t
), K4 = Xe.curry((e4, t, r) => Xe.get(r, e4) !== t), Z4 = Xe.curry((e4, t) => Xe.get(t, "id") !== e4), Y4 = Xe.curry((e4, t) => Xe.get(t, "id") === e4), X4 = Xe.curry((e4, t) => Xe.get(t, "path") === e4);
function J4(e4 = "id", t, r) {
  return r.findIndex(pz(e4, t)) !== -1;
}
function Q4(e4) {
  if (!e4) return "";
  const { id: t, namespace: r } = e4;
  return r && t ? `${r}:${t}` : t;
}
function hz(e4) {
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
  ].includes(e4.type || "");
}
function eF(e4) {
  return e4.type === "object";
}
function gz(e4) {
  var t;
  return e4.kind === "relatedEntities" || ((t = e4.type) == null ? void 0 : t.includes("Selection")) || e4.behavior === "relatedEntities";
}
function vz(e4) {
  return e4.kind === "relatedEntity" || e4.behavior === "relatedEntity" || !hz(e4);
}
function tF(e4) {
  return gz(e4) || vz(e4);
}
function rF(e4) {
  return e4.applyTo === "dataStore";
}
function nF(e4) {
  return e4.applyTo === "dataClass";
}
function iF(e4) {
  return e4.applyTo === "entity";
}
function oF(e4) {
  return e4.applyTo === "entityCollection";
}
function aF(e4) {
  return e4.type === "entity";
}
function sF(e4) {
  return e4.type === "entitysel";
}
function mz(e4) {
  return e4.dataType === "array";
}
function bz(e4) {
  return e4.dataType === "object";
}
function yz(e4) {
  return e4.type === "scalar";
}
function lF(e4) {
  return mz(e4) || bz(e4) || yz(e4);
}
const cF = (e4) => e4 != null && e4.type === "entity", uF = (e4) => e4.type === "entitysel", fF = (e4) => e4.type === "array" || e4.type === "scalar" && e4.dataType === "array", dF = (e4) => e4.type === "object" || e4.type === "scalar" && e4.dataType === "object", pF = (e4) => e4.type === "scalar" && e4.dataType === "date";
function hF() {
  return new Promise((e4, t) => {
    window.addEventListener("bundle:ready", (r) => r.data ? e4() : t(r.caughtErr));
  });
}
function gF() {
  return new Promise((e4) => {
    window.addEventListener("i18n:ready", () => e4());
  });
}
var ql = /* @__PURE__ */ ((e4) => (e4.capable = "capable", e4.incapable = "incapable", e4.indifferent = "indifferent", e4))(ql || {}), wz = /* @__PURE__ */ ((e4) => (e4.soap = "soap", e4.web = "web", e4.sql = "sql", e4.rest = "rest", e4))(wz || {}), jx = /* @__PURE__ */ ((e4) => (e4.table = "table", e4.catalog = "catalog", e4.currentRecord = "currentRecord", e4.currentSelection = "currentSelection", e4))(jx || {});
const vF = {
  publishedSoap: "soap",
  publishedWeb: "web",
  publishedSql: "sql",
  publishedRest: "rest"
  /* rest */
};
function mF(e4) {
  var a;
  let t = {};
  try {
    const l = ((a = e4.match(/\/\/%attributes = (.*)/)) == null ? void 0 : a[1]) || "";
    t = JSON.parse(l);
  } catch {
  }
  const { published4DMobile: r, ...n } = t;
  return {
    ...{
      invisible: false,
      shared: false,
      executedOnServer: false,
      preemptive: ql.indifferent,
      publishedSoap: false,
      publishedWsdl: false,
      publishedWeb: false,
      publishedSql: false,
      publishedRest: !!r,
      publishedRestOptions: r || {
        table: "",
        scope: jx.table
      }
    },
    ...n
  };
}
function xz(e4) {
  const t = {};
  return e4.invisible && (t.invisible = true), e4.shared && (t.shared = true), e4.executedOnServer && (t.executedOnServer = true), e4.preemptive && [ql.capable, ql.incapable].includes(e4.preemptive) && (t.preemptive = e4.preemptive), e4.publishedSoap && (t.publishedSoap = true, e4.publishedWsdl && (t.publishedWsdl = true)), e4.publishedWeb && (t.publishedWeb = true), e4.publishedSql && (t.publishedSql = true), e4.publishedRest && e4.publishedRestOptions && (t.published4DMobile = e4.publishedRestOptions), JSON.stringify(t).replace(/"(true|false)"/g, "$1");
}
function bF(e4, t, r = false) {
  const n = Xe.isString(t) ? t : xz(t);
  if (!r && _z(e4))
    return e4;
  const o = Sz(e4);
  return `//%attributes = ${n}\r
${o}`;
}
function _z(e4) {
  return /^\/\/%attributes.*(?:\r\n|\n)?/g.test(e4);
}
function Sz(e4) {
  return e4.replace(/^\/\/%attributes.*(?:\r\n|\n)?/g, "");
}
const yF = () => Oi.uuid().replaceAll("-", "").toUpperCase(), wF = (e4) => e4.toLowerCase().replace(/[^a-z0-9]/g, "_").replace(/_{2,}/g, "_").replace(/^_|_$/g, "");
var Ye = /* @__PURE__ */ ((e4) => (e4.DATACLASS = "dataclass", e4.METHOD = "method", e4.ATTRIBUTE = "attribute", e4.DATASTORE = "datastore", e4.SINGLETON = "singleton", e4.SINGLETON_METHOD = "singletonMethod", e4))(Ye || {}), ut = /* @__PURE__ */ ((e4) => (e4.DS_METHOD = "dsMethod", e4.DATACLASS_METHOD = "dataclassMethod", e4.ENTITY_METHOD = "entityMethod", e4.ENTITY_SEL_METHOD = "entityselMethod", e4))(ut || {});
const Ez = [
  Ye.DATASTORE,
  Ye.DATACLASS,
  Ye.ATTRIBUTE,
  Ye.SINGLETON_METHOD,
  Ye.SINGLETON,
  Ye.METHOD,
  ut.DS_METHOD,
  ut.DATACLASS_METHOD,
  ut.ENTITY_METHOD,
  ut.ENTITY_SEL_METHOD
], k0 = (e4) => [
  ut.DS_METHOD,
  ut.ENTITY_METHOD,
  ut.DATACLASS_METHOD
].includes(e4) ? Ye.METHOD : e4, Gl = "guest", Ux = [
  {
    key: "read",
    label: "Read",
    canApplyTo: [
      Ye.DATASTORE,
      Ye.DATACLASS,
      Ye.ATTRIBUTE
    ]
  },
  {
    key: "create",
    label: "Create",
    canApplyTo: [
      Ye.DATASTORE,
      Ye.DATACLASS,
      Ye.ATTRIBUTE
    ]
  },
  {
    key: "update",
    label: "Update",
    canApplyTo: [
      Ye.DATASTORE,
      Ye.DATACLASS,
      Ye.ATTRIBUTE
    ]
  },
  {
    key: "drop",
    label: "Delete",
    canApplyTo: [
      Ye.DATASTORE,
      Ye.DATACLASS,
      Ye.ATTRIBUTE
    ]
  },
  {
    key: "execute",
    label: "Execute",
    canApplyTo: [
      Ye.DATASTORE,
      Ye.DATACLASS,
      Ye.METHOD,
      ut.DS_METHOD,
      ut.DATACLASS_METHOD,
      ut.ENTITY_METHOD,
      ut.ENTITY_SEL_METHOD,
      Ye.SINGLETON,
      Ye.SINGLETON_METHOD
    ]
  },
  {
    key: "promote",
    label: "Promote",
    canApplyTo: [
      Ye.METHOD,
      ut.DS_METHOD,
      ut.DATACLASS_METHOD,
      ut.ENTITY_METHOD,
      ut.ENTITY_SEL_METHOD,
      Ye.SINGLETON_METHOD
    ]
  }
];
function Vr(e4, ...t) {
  return Array.from(/* @__PURE__ */ new Set([...e4, ...t]));
}
function kz(e4) {
  const t = {}, r = /* @__PURE__ */ new Map();
  e4.forEach((u) => {
    const d = u.id || Oi.generate();
    t[d] = {
      ...u,
      id: d,
      parents: [],
      includes: Vr(u.includes || []),
      resources: []
    }, r.set(u.privilege, d);
  }), Object.entries(t).forEach(([u, d]) => {
    const p = d.includes.map((h) => {
      const g = r.get(h);
      return g ? (t[g].parents = Vr(t[g].parents, g), g) : "";
    }).filter(Boolean);
    t[u] = {
      ...d,
      includes: p
    };
  });
  const n = Oz(t), o = /* @__PURE__ */ new Set();
  function a(u) {
    o.add(u.id), u.includes = u.includes.filter((d) => !o.has(d));
  }
  if (n.forEach(a), n.forEach((u) => u.parents = []), n.forEach((u) => {
    u.includes.forEach((d) => t[d].parents.push(u.id));
  }), Object.values(t).find(
    ({ privilege: u }) => u === Gl
  )) return t;
  const c = Oi.generate();
  return {
    [c]: {
      id: c,
      privilege: Gl,
      includes: [],
      parents: [],
      resources: []
    },
    ...t
  };
}
function Oz(e4) {
  return Object.values(e4).sort(
    (t, r) => t.parents.length - r.parents.length
  );
}
function Tp(e4, t) {
  const r = t[e4];
  let n = [];
  return r && r.parents.forEach((o) => {
    n = Vr(n, ...Tp(o, t), o);
  }), n;
}
function kd(e4, t) {
  const r = t[e4];
  let n = [];
  return r && r.includes.forEach((o) => {
    n = Vr(n, ...kd(o, t), o);
  }), n;
}
function xF(e4, t) {
  const r = t[e4];
  if (!r)
    return [];
  const n = [e4, ...Tp(e4, t), ...r.includes];
  return Object.keys(t).filter((o) => !n.includes(o));
}
function _F(e4, t) {
  return t[e4] ? Object.keys(t).reduce((n, o) => o === e4 ? n : {
    ...n,
    [o]: {
      ...t[o],
      parents: t[o].parents.filter((a) => a !== e4),
      includes: t[o].includes.filter((a) => a !== e4)
    }
  }, {}) : t;
}
function SF(e4, t, r) {
  const n = r[e4], o = r[t];
  return !n || !o ? r : {
    ...r,
    [e4]: {
      ...r[e4],
      includes: Vr(n.includes, t)
    },
    [t]: {
      ...r[t],
      parents: Vr(o.parents, e4)
    }
  };
}
function EF(e4, t, r) {
  const n = r[e4], o = r[t];
  return !n || !o ? r : {
    ...r,
    [e4]: {
      ...r[e4],
      includes: r[e4].includes.filter((a) => a !== t)
    },
    [t]: {
      ...r[t],
      parents: r[t].parents.filter((a) => a !== e4)
    }
  };
}
function kF(e4, t) {
  Op(e4), Object.entries(t).forEach(([, { privilege: n }]) => {
    if (e4.toLowerCase() === n.toLowerCase())
      throw new Error(`There's already a Privilege with the name ${e4}`);
  });
  const r = Oi.generate();
  return {
    [r]: {
      id: r,
      privilege: e4,
      includes: [],
      parents: [],
      resources: []
    },
    ...t
  };
}
function OF(e4, t, r) {
  if (!e4)
    throw new Error("Please enter a name");
  if (!r[t])
    throw new Error("Invalid privilege");
  return Object.entries(r).forEach(([, { privilege: n, id: o }]) => {
    if (e4.toLowerCase() === n.toLowerCase() && t !== o)
      throw new Error(`There's already a Privilege with the name ${e4}`);
  }), {
    ...r,
    [t]: {
      ...r[t],
      privilege: e4
    }
  };
}
function AF(e4, t) {
  return e4.map((r) => ni(r, t));
}
function ni(e4, t) {
  return t[e4] ? t[e4] : null;
}
function Az({ applyTo: e4, type: t, ...r }) {
  return Object.entries(r).reduce((n, [o, a]) => {
    const l = Xe.find(Ux, ["key", o]);
    return !l || !l.canApplyTo.includes(t) || (typeof a == "string" ? a.split(",") : a).forEach((u) => {
      n[u] = Vr(n[u] || [], o);
    }), n;
  }, {});
}
const O0 = (e4, t = false) => ["read", "create", "update", "delete"].includes(e4.toLowerCase()) ? `All ${t ? "dataclasses and " : ""}attributes have the '${e4.toLowerCase()}' permission` : e4.toLowerCase() === "execute" ? `All functions defined ${t ? "through the model (DataStore, Dataclasses, Entity selections, Entities) have the execute permission" : "on this Dataclass, Entity selection class, Entity class have the execute permission"}` : `All ${t ? "dataclasses, " : ""}attributes and functions have the '${e4.toLowerCase()}' permission`;
function Vx(e4) {
  return {
    permissions: Ux.filter(
      ({ canApplyTo: t }) => t.includes(e4.type)
    ).map(({ key: t, label: r }) => {
      const n = { name: t, from: [] };
      switch (e4.type) {
        case Ye.DATASTORE:
          return {
            ...n,
            info: O0(r, true)
          };
        case Ye.DATACLASS:
          return {
            ...n,
            info: O0(r)
          };
        default:
          return n;
      }
    }),
    resource: e4.applyTo,
    type: e4.type
  };
}
function Tz(e4, t) {
  const r = Rz(t), n = {};
  return e4.filter(({ type: o }) => Ez.includes(o)).forEach((o) => {
    const a = Az(o);
    Object.entries(a).forEach(([l, c]) => {
      var p;
      const u = (p = r[l]) == null ? void 0 : p.id;
      if (!u)
        return;
      n[u] = n[u] || { ...t[u] };
      let d = Xe.find(n[u].resources, {
        resource: o.applyTo,
        type: o.type
      });
      d || (d = Vx(o), n[u].resources.push(d)), d.permissions = d.permissions.map((h) => ({
        ...h,
        checked: h.checked || c.includes(h.name)
      }));
    });
  }), {
    ...t,
    ...n
  };
}
function Rz(e4) {
  return Object.values(e4).reduce(
    (t, r) => ({
      ...t,
      [r.privilege]: r
    }),
    {}
  );
}
function TF(e4) {
  var r;
  if (!e4)
    throw new Error("Invalid roles data");
  const t = kz(e4.privileges || []);
  return {
    forceLogin: (e4 == null ? void 0 : e4.forceLogin) || false,
    restrictedByDefault: (e4 == null ? void 0 : e4.restrictedByDefault) || false,
    privileges: Tz(((r = e4 == null ? void 0 : e4.permissions) == null ? void 0 : r.allowed) || [], t),
    roles: ((e4 == null ? void 0 : e4.roles) || []).map(({ id: n = Oi.generate(), role: o, privileges: a = [] }) => ({
      id: n,
      role: o,
      privileges: Vr(a).map(
        (l) => {
          var c;
          return (c = Object.values(t).find(
            ({ privilege: u }) => u === l
          )) == null ? void 0 : c.id;
        }
      ).filter(Boolean)
    })).reduce((n, o) => ({
      ...n,
      [o.id]: {
        ...o
      }
    }), {})
  };
}
function RF(e4) {
  const t = Object.values(e4.privileges).filter(({ includes: n }) => n.length === 0).map(({ id: n }) => n), r = [
    ...t,
    ...t.map((n) => Tp(n, e4.privileges).reverse())
  ].flat().filter((n, o, a) => a.indexOf(n) === o).map((n) => e4.privileges[n]);
  return {
    forceLogin: e4.forceLogin || false,
    restrictedByDefault: e4.restrictedByDefault || false,
    permissions: {
      allowed: Object.values(e4.privileges).reduce(
        (n, o) => (o.resources.forEach(({ permissions: a, resource: l, type: c }) => {
          let u = Xe.find(n, {
            applyTo: l,
            type: k0(c)
          });
          u || (u = {
            applyTo: l,
            type: k0(c)
          }, n.push(u)), a.forEach(({ name: d, checked: p }) => {
            p && u && (u[d] = u[d] || [], u[d].push(o.privilege));
          });
        }), n),
        []
      )
    },
    privileges: r.filter(({ privilege: n }) => n !== Gl).map(({ id: n, includes: o, privilege: a }) => ({
      id: n,
      privilege: a,
      includes: o.map((l) => e4.privileges[l].privilege)
    })),
    roles: Object.values(e4.roles).map((n) => ({
      ...n,
      privileges: n.privileges.map((o) => {
        var a;
        return (a = e4.privileges[o]) == null ? void 0 : a.privilege;
      }).filter(Boolean)
    }))
  };
}
function CF(e4, t) {
  const r = t[e4], n = {
    children: [],
    links: [],
    parents: [],
    selected: e4
  };
  if (!r)
    return n;
  function o(c, u, d = []) {
    const p = c.reduce(
      (h, g) => [...h, ...t[g][u]],
      []
    );
    return p.length === 0 ? d : (d.push(p), o(p, u, d));
  }
  function a(c) {
    const u = [], d = [];
    for (let p = c.length - 1; p >= 0; p -= 1) {
      const h = c[p].filter((g) => u.includes(g) ? false : (u.push(g), true));
      h.length > 0 && d.unshift(Vr(h));
    }
    return d;
  }
  function l(c, u) {
    const d = [];
    return c.reduce((p, h) => (h.forEach((g) => {
      t[g][u === "parents" ? "includes" : "parents"].forEach((_) => {
        d.includes(_) && p.push(
          u === "parents" ? {
            source: g,
            target: _
          } : {
            source: _,
            target: g
          }
        );
      }), d.push(g);
    }), p), []);
  }
  return n.children = o([e4], "includes"), n.children = a(n.children), n.parents = o([e4], "parents"), n.parents = a(n.parents), n.links = [
    ...l([[e4], ...n.parents], "parents"),
    ...l([[e4], ...n.children], "includes")
  ], n;
}
function PF(e4, t, r) {
  const n = ni(e4, r);
  if (!n || Xe.find(n.resources, {
    resource: t.applyTo,
    type: t.type
  }))
    return r;
  const o = {
    ...n,
    resources: [...n.resources, Vx(t)]
  };
  return {
    ...r,
    [e4]: o
  };
}
function IF(e4, t, r) {
  const n = ni(e4, r);
  if (!n) return r;
  const o = {
    ...n,
    resources: n.resources.filter(
      ({ resource: a, type: l }) => a !== t.applyTo || l !== t.type
    )
  };
  return {
    ...r,
    [e4]: o
  };
}
function NF(e4, t) {
  const r = Object.entries(e4).map(([n, o]) => {
    const a = ni(n, t);
    if (!a) return { [n]: t[n] };
    const l = {
      ...a,
      resources: a.resources.filter(
        ({ resource: c, type: u }) => !o.some(
          (d) => d.applyTo === c && d.type === u
        )
      )
    };
    return {
      [n]: l
    };
  }).reduce((n, o) => ({ ...n, ...o }), {});
  return {
    ...t,
    ...r
  };
}
function MF(e4, t) {
  const r = ni(e4, t);
  if (!r) return t;
  const n = {
    ...r,
    resources: r.resources.filter((o) => o.permissions.some((a) => a.from.length)).map((o) => ({
      ...o,
      permissions: o.permissions.map((a) => ({ ...a, checked: false }))
    }))
  };
  return {
    ...t,
    [e4]: n
  };
}
function $F(e4, t, r, n) {
  const o = ni(e4, n);
  if (!o) return n;
  const l = Xe.find(o.resources, {
    type: t.type,
    resource: t.resource
  }) ? {
    ...o,
    resources: o.resources.map((c) => c.type === t.type && c.resource === t.resource ? {
      ...c,
      permissions: t.permissions.map((u) => u.name === r.name ? {
        ...u,
        checked: !u.checked,
        from: []
      } : u)
    } : c)
  } : {
    ...o,
    resources: [
      ...o.resources,
      {
        ...t,
        permissions: t.permissions.map((c) => ({
          ...c,
          checked: r.name === c.name,
          from: []
        }))
      }
    ]
  };
  return {
    ...n,
    [e4]: l
  };
}
function DF(e4, t) {
  var u;
  const r = Cz(e4, t) || [], n = ((u = ni(e4, t)) == null ? void 0 : u.resources) || [], l = ([...r, ...n].filter(
    ({ type: d }) => [
      ut.DS_METHOD,
      ut.DATACLASS_METHOD,
      ut.ENTITY_METHOD,
      ut.ENTITY_SEL_METHOD
    ].includes(d)
  ) || []).map(({ resource: d }) => d);
  return Object.entries(t).reduce(
    (d, [p, { resources: h }]) => (h.filter(
      ({ resource: g, type: y }) => [
        ut.DS_METHOD,
        ut.DATACLASS_METHOD,
        ut.ENTITY_METHOD,
        ut.ENTITY_SEL_METHOD
      ].includes(y) && l.includes(g)
    ).forEach(({ permissions: g, resource: y }) => {
      var v;
      ((v = g.find(
        ({ name: b }) => b === "promote"
      )) == null ? void 0 : v.checked) && (d[y] = Vr(d[y] || [], p));
    }), d),
    {}
  );
}
function Cz(e4, t) {
  var l;
  const r = ni(e4, t);
  if (!r) return [];
  const n = (l = Object.values(t).find(
    (c) => c.privilege === Gl
  )) == null ? void 0 : l.id;
  return (n && n !== e4 ? Vr(kd(e4, t), n) : kd(e4, t)).reduce(
    (c, u) => (t[u].resources.forEach((p) => {
      if (p.permissions.filter(
        ({ checked: y, name: _ }) => y && _ !== "promote"
      ).length === 0)
        return;
      const g = Xe.find(c, {
        type: p.type,
        resource: p.resource
      });
      if (!g) {
        c.push({
          ...p,
          permissions: p.permissions.map((y) => ({
            ...y,
            from: y.checked ? [u] : [],
            checked: false
          }))
        });
        return;
      }
      g.permissions = g.permissions.map((y, _) => {
        let { from: v = [] } = y;
        return p.permissions[_].checked && !v.includes(u) && (v = [...v, u]), {
          ...y,
          from: v,
          checked: y.checked
        };
      });
    }), c),
    Xe.clone(
      r.resources.map((c) => ({
        ...c,
        permissions: c.permissions.map(({ checked: u, ...d }) => ({
          ...d,
          checked: !!u
        }))
      }))
    )
  );
}
const LF = (e4, t, r) => {
  const n = {
    id: e4,
    role: t,
    privileges: []
  };
  return {
    ...r,
    [n.id]: n
  };
}, zF = (e4, t) => t[e4] ? Object.values(t).reduce((r, n) => e4 === n.id || n.role === "" ? r : {
  ...r,
  [n.id]: n
}, {}) : t, FF = (e4, t) => {
  if (Op(e4.role), Object.values(t).find((n) => n.role === e4.role))
    throw new Error(`a role with the name ${e4.role} already exists`);
  return Object.values(t).reduce((n, o) => e4.id === o.id ? {
    ...n,
    [e4.id]: e4
  } : {
    ...n,
    [o.id]: o
  }, {});
}, At = "/rest/$designer", vc = "/rest/$designer-ext";
function HF(...e4) {
  return (t) => {
    if (e4.length === 0)
      return t;
    const r = { ...t };
    return e4.forEach((n) => {
      typeof r[n] == "string" && (r[n] = new Date(r[n]));
    }), r;
  };
}
class A0 extends Error {
  constructor(t, r, n) {
    super(), this.url = t, this.response = r, this.data = n;
  }
  log() {
    console.error("Error while sending the request", this);
  }
}
async function Je(e4, t) {
  var o;
  Ed.next({ action: Vl.REQUEST_SENT });
  const r = await window.fetch(e4, t);
  if (/401/.test(r.status.toString()) && (window.location.href = "/login.html?redirect=studio"), /^[45]/.test(r.status.toString())) {
    let a;
    try {
      const l = await r.json();
      ((o = l == null ? void 0 : l.__ERROR) == null ? void 0 : o.some(
        (u) => u.errCode === 1651
      )) && Ed.next({
        action: Vl.EVENT_EMITED,
        payload: {
          eventName: "onsessionexpired"
        }
      }), a = new A0(e4, r, l);
    } catch {
      a = new A0(e4, r);
    }
    throw a.log(), a;
  }
  return await r.json();
}
function WF(e4) {
  return Ed.next({ action: Vl.REQUEST_SENT }), e4;
}
var Xr = {}, Mt = {}, T0;
function xi() {
  if (T0) return Mt;
  T0 = 1;
  var e4 = Mt.ValidationError = function(v, b, m, w, x, k) {
    if (Array.isArray(w) ? (this.path = w, this.property = w.reduce(function(R, z) {
      return R + c(z);
    }, "instance")) : w !== void 0 && (this.property = w), v && (this.message = v), m) {
      var E = m.$id || m.id;
      this.schema = E || m;
    }
    b !== void 0 && (this.instance = b), this.name = x, this.argument = k, this.stack = this.toString();
  };
  e4.prototype.toString = function() {
    return this.property + " " + this.message;
  };
  var t = Mt.ValidatorResult = function(v, b, m, w) {
    this.instance = v, this.schema = b, this.options = m, this.path = w.path, this.propertyPath = w.propertyPath, this.errors = [], this.throwError = m && m.throwError, this.throwFirst = m && m.throwFirst, this.throwAll = m && m.throwAll, this.disableFormat = m && m.disableFormat === true;
  };
  t.prototype.addError = function(v) {
    var b;
    if (typeof v == "string")
      b = new e4(v, this.instance, this.schema, this.path);
    else {
      if (!v) throw new Error("Missing error detail");
      if (!v.message) throw new Error("Missing error message");
      if (!v.name) throw new Error("Missing validator type");
      b = new e4(v.message, this.instance, this.schema, this.path, v.name, v.argument);
    }
    if (this.errors.push(b), this.throwFirst)
      throw new n(this);
    if (this.throwError)
      throw b;
    return b;
  }, t.prototype.importErrors = function(v) {
    typeof v == "string" || v && v.validatorType ? this.addError(v) : v && v.errors && (this.errors = this.errors.concat(v.errors));
  };
  function r(_, v) {
    return v + ": " + _.toString() + `
`;
  }
  t.prototype.toString = function(v) {
    return this.errors.map(r).join("");
  }, Object.defineProperty(t.prototype, "valid", { get: function() {
    return !this.errors.length;
  } }), Mt.ValidatorResultError = n;
  function n(_) {
    typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, n), this.instance = _.instance, this.schema = _.schema, this.options = _.options, this.errors = _.errors;
  }
  n.prototype = new Error(), n.prototype.constructor = n, n.prototype.name = "Validation Error";
  var o = Mt.SchemaError = function _(v, b) {
    this.message = v, this.schema = b, Error.call(this, v), typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, _);
  };
  o.prototype = Object.create(
    Error.prototype,
    {
      constructor: { value: o, enumerable: false },
      name: { value: "SchemaError", enumerable: false }
    }
  );
  var a = Mt.SchemaContext = function(v, b, m, w, x) {
    this.schema = v, this.options = b, Array.isArray(m) ? (this.path = m, this.propertyPath = m.reduce(function(k, E) {
      return k + c(E);
    }, "instance")) : this.propertyPath = m, this.base = w, this.schemas = x;
  };
  a.prototype.resolve = function(v) {
    return y(this.base, v);
  }, a.prototype.makeChild = function(v, b) {
    var m = b === void 0 ? this.path : this.path.concat([b]), w = v.$id || v.id;
    let x = y(this.base, w || "");
    var k = new a(v, this.options, m, x, Object.create(this.schemas));
    return w && !k.schemas[x] && (k.schemas[x] = v), k;
  };
  var l = Mt.FORMAT_REGEXPS = {
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
    "utc-millisec": function(_) {
      return typeof _ == "string" && parseFloat(_) === parseInt(_, 10) && !isNaN(_);
    },
    // 7.3.8. regex
    regex: function(_) {
      var v = true;
      try {
        new RegExp(_);
      } catch {
        v = false;
      }
      return v;
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
  l.regexp = l.regex, l.pattern = l.regex, l.ipv4 = l["ip-address"], Mt.isFormat = function(v, b, m) {
    if (typeof v == "string" && l[b] !== void 0) {
      if (l[b] instanceof RegExp)
        return l[b].test(v);
      if (typeof l[b] == "function")
        return l[b](v);
    } else if (m && m.customFormats && typeof m.customFormats[b] == "function")
      return m.customFormats[b](v);
    return true;
  };
  var c = Mt.makeSuffix = function(v) {
    return v = v.toString(), !v.match(/[.\s\[\]]/) && !v.match(/^[\d]/) ? "." + v : v.match(/^\d+$/) ? "[" + v + "]" : "[" + JSON.stringify(v) + "]";
  };
  Mt.deepCompareStrict = function _(v, b) {
    if (typeof v != typeof b)
      return false;
    if (Array.isArray(v))
      return !Array.isArray(b) || v.length !== b.length ? false : v.every(function(x, k) {
        return _(v[k], b[k]);
      });
    if (typeof v == "object") {
      if (!v || !b)
        return v === b;
      var m = Object.keys(v), w = Object.keys(b);
      return m.length !== w.length ? false : m.every(function(x) {
        return _(v[x], b[x]);
      });
    }
    return v === b;
  };
  function u(_, v, b, m) {
    typeof b == "object" ? v[m] = h(_[m], b) : _.indexOf(b) === -1 && v.push(b);
  }
  function d(_, v, b) {
    v[b] = _[b];
  }
  function p(_, v, b, m) {
    typeof v[m] != "object" || !v[m] ? b[m] = v[m] : _[m] ? b[m] = h(_[m], v[m]) : b[m] = v[m];
  }
  function h(_, v) {
    var b = Array.isArray(v), m = b && [] || {};
    return b ? (_ = _ || [], m = m.concat(_), v.forEach(u.bind(null, _, m))) : (_ && typeof _ == "object" && Object.keys(_).forEach(d.bind(null, _, m)), Object.keys(v).forEach(p.bind(null, _, v, m))), m;
  }
  Mt.deepMerge = h, Mt.objectGetPath = function(v, b) {
    for (var m = b.split("/").slice(1), w; typeof (w = m.shift()) == "string"; ) {
      var x = decodeURIComponent(w.replace(/~0/, "~").replace(/~1/g, "/"));
      if (!(x in v)) return;
      v = v[x];
    }
    return v;
  };
  function g(_) {
    return "/" + encodeURIComponent(_).replace(/~/g, "%7E");
  }
  Mt.encodePath = function(v) {
    return v.map(g).join("");
  }, Mt.getDecimalPlaces = function(v) {
    var b = 0;
    if (isNaN(v)) return b;
    typeof v != "number" && (v = Number(v));
    var m = v.toString().split("e");
    if (m.length === 2) {
      if (m[1][0] !== "-")
        return b;
      b = Number(m[1].slice(1));
    }
    var w = m[0].split(".");
    return w.length === 2 && (b += w[1].length), b;
  }, Mt.isSchema = function(v) {
    return typeof v == "object" && v || typeof v == "boolean";
  };
  var y = Mt.resolveUrl = function(v, b) {
    const m = new URL(b, new URL(v, "resolve://"));
    if (m.protocol === "resolve:") {
      const { pathname: w, search: x, hash: k } = m;
      return w + x + k;
    }
    return m.toString();
  };
  return Mt;
}
var qf, R0;
function Pz() {
  if (R0) return qf;
  R0 = 1;
  var e4 = xi(), t = e4.ValidatorResult, r = e4.SchemaError, n = {};
  n.ignoreProperties = {
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
  var o = n.validators = {};
  o.type = function(h, g, y, _) {
    if (h === void 0)
      return null;
    var v = new t(h, g, y, _), b = Array.isArray(g.type) ? g.type : [g.type];
    if (!b.some(this.testType.bind(this, h, g, y, _))) {
      var m = b.map(function(w) {
        if (w) {
          var x = w.$id || w.id;
          return x ? "<" + x + ">" : w + "";
        }
      });
      v.addError({
        name: "type",
        argument: m,
        message: "is not of a type(s) " + m
      });
    }
    return v;
  };
  function a(p, h, g, y, _) {
    var v = h.throwError, b = h.throwAll;
    h.throwError = false, h.throwAll = false;
    var m = this.validateSchema(p, _, h, g);
    return h.throwError = v, h.throwAll = b, !m.valid && y instanceof Function && y(m), m.valid;
  }
  o.anyOf = function(h, g, y, _) {
    if (h === void 0)
      return null;
    var v = new t(h, g, y, _), b = new t(h, g, y, _);
    if (!Array.isArray(g.anyOf))
      throw new r("anyOf must be an array");
    if (!g.anyOf.some(
      a.bind(
        this,
        h,
        y,
        _,
        function(w) {
          b.importErrors(w);
        }
      )
    )) {
      var m = g.anyOf.map(function(w, x) {
        var k = w.$id || w.id;
        return k ? "<" + k + ">" : w.title && JSON.stringify(w.title) || w.$ref && "<" + w.$ref + ">" || "[subschema " + x + "]";
      });
      y.nestedErrors && v.importErrors(b), v.addError({
        name: "anyOf",
        argument: m,
        message: "is not any of " + m.join(",")
      });
    }
    return v;
  }, o.allOf = function(h, g, y, _) {
    if (h === void 0)
      return null;
    if (!Array.isArray(g.allOf))
      throw new r("allOf must be an array");
    var v = new t(h, g, y, _), b = this;
    return g.allOf.forEach(function(m, w) {
      var x = b.validateSchema(h, m, y, _);
      if (!x.valid) {
        var k = m.$id || m.id, E = k || m.title && JSON.stringify(m.title) || m.$ref && "<" + m.$ref + ">" || "[subschema " + w + "]";
        v.addError({
          name: "allOf",
          argument: { id: E, length: x.errors.length, valid: x },
          message: "does not match allOf schema " + E + " with " + x.errors.length + " error[s]:"
        }), v.importErrors(x);
      }
    }), v;
  }, o.oneOf = function(h, g, y, _) {
    if (h === void 0)
      return null;
    if (!Array.isArray(g.oneOf))
      throw new r("oneOf must be an array");
    var v = new t(h, g, y, _), b = new t(h, g, y, _), m = g.oneOf.filter(
      a.bind(
        this,
        h,
        y,
        _,
        function(x) {
          b.importErrors(x);
        }
      )
    ).length, w = g.oneOf.map(function(x, k) {
      var E = x.$id || x.id;
      return E || x.title && JSON.stringify(x.title) || x.$ref && "<" + x.$ref + ">" || "[subschema " + k + "]";
    });
    return m !== 1 && (y.nestedErrors && v.importErrors(b), v.addError({
      name: "oneOf",
      argument: w,
      message: "is not exactly one from " + w.join(",")
    })), v;
  }, o.if = function(h, g, y, _) {
    if (h === void 0) return null;
    if (!e4.isSchema(g.if)) throw new Error('Expected "if" keyword to be a schema');
    var v = a.call(this, h, y, _, null, g.if), b = new t(h, g, y, _), m;
    if (v) {
      if (g.then === void 0) return;
      if (!e4.isSchema(g.then)) throw new Error('Expected "then" keyword to be a schema');
      m = this.validateSchema(h, g.then, y, _.makeChild(g.then)), b.importErrors(m);
    } else {
      if (g.else === void 0) return;
      if (!e4.isSchema(g.else)) throw new Error('Expected "else" keyword to be a schema');
      m = this.validateSchema(h, g.else, y, _.makeChild(g.else)), b.importErrors(m);
    }
    return b;
  };
  function l(p, h) {
    if (Object.hasOwnProperty.call(p, h)) return p[h];
    if (h in p) {
      for (; p = Object.getPrototypeOf(p); )
        if (Object.propertyIsEnumerable.call(p, h)) return p[h];
    }
  }
  o.propertyNames = function(h, g, y, _) {
    if (this.types.object(h)) {
      var v = new t(h, g, y, _), b = g.propertyNames !== void 0 ? g.propertyNames : {};
      if (!e4.isSchema(b)) throw new r('Expected "propertyNames" to be a schema (object or boolean)');
      for (var m in h)
        if (l(h, m) !== void 0) {
          var w = this.validateSchema(m, b, y, _.makeChild(b));
          v.importErrors(w);
        }
      return v;
    }
  }, o.properties = function(h, g, y, _) {
    if (this.types.object(h)) {
      var v = new t(h, g, y, _), b = g.properties || {};
      for (var m in b) {
        var w = b[m];
        if (w !== void 0) {
          if (w === null)
            throw new r('Unexpected null, expected schema in "properties"');
          typeof y.preValidateProperty == "function" && y.preValidateProperty(h, m, w, y, _);
          var x = l(h, m), k = this.validateSchema(x, w, y, _.makeChild(w, m));
          k.instance !== v.instance[m] && (v.instance[m] = k.instance), v.importErrors(k);
        }
      }
      return v;
    }
  };
  function c(p, h, g, y, _, v) {
    if (this.types.object(p) && !(h.properties && h.properties[_] !== void 0))
      if (h.additionalProperties === false)
        v.addError({
          name: "additionalProperties",
          argument: _,
          message: "is not allowed to have the additional property " + JSON.stringify(_)
        });
      else {
        var b = h.additionalProperties || {};
        typeof g.preValidateProperty == "function" && g.preValidateProperty(p, _, b, g, y);
        var m = this.validateSchema(p[_], b, g, y.makeChild(b, _));
        m.instance !== v.instance[_] && (v.instance[_] = m.instance), v.importErrors(m);
      }
  }
  o.patternProperties = function(h, g, y, _) {
    if (this.types.object(h)) {
      var v = new t(h, g, y, _), b = g.patternProperties || {};
      for (var m in h) {
        var w = true;
        for (var x in b) {
          var k = b[x];
          if (k !== void 0) {
            if (k === null)
              throw new r('Unexpected null, expected schema in "patternProperties"');
            try {
              var E = new RegExp(x, "u");
            } catch {
              E = new RegExp(x);
            }
            if (E.test(m)) {
              w = false, typeof y.preValidateProperty == "function" && y.preValidateProperty(h, m, k, y, _);
              var R = this.validateSchema(h[m], k, y, _.makeChild(k, m));
              R.instance !== v.instance[m] && (v.instance[m] = R.instance), v.importErrors(R);
            }
          }
        }
        w && c.call(this, h, g, y, _, m, v);
      }
      return v;
    }
  }, o.additionalProperties = function(h, g, y, _) {
    if (this.types.object(h)) {
      if (g.patternProperties)
        return null;
      var v = new t(h, g, y, _);
      for (var b in h)
        c.call(this, h, g, y, _, b, v);
      return v;
    }
  }, o.minProperties = function(h, g, y, _) {
    if (this.types.object(h)) {
      var v = new t(h, g, y, _), b = Object.keys(h);
      return b.length >= g.minProperties || v.addError({
        name: "minProperties",
        argument: g.minProperties,
        message: "does not meet minimum property length of " + g.minProperties
      }), v;
    }
  }, o.maxProperties = function(h, g, y, _) {
    if (this.types.object(h)) {
      var v = new t(h, g, y, _), b = Object.keys(h);
      return b.length <= g.maxProperties || v.addError({
        name: "maxProperties",
        argument: g.maxProperties,
        message: "does not meet maximum property length of " + g.maxProperties
      }), v;
    }
  }, o.items = function(h, g, y, _) {
    var v = this;
    if (this.types.array(h) && g.items !== void 0) {
      var b = new t(h, g, y, _);
      return h.every(function(m, w) {
        if (Array.isArray(g.items))
          var x = g.items[w] === void 0 ? g.additionalItems : g.items[w];
        else
          var x = g.items;
        if (x === void 0)
          return true;
        if (x === false)
          return b.addError({
            name: "items",
            message: "additionalItems not permitted"
          }), false;
        var k = v.validateSchema(m, x, y, _.makeChild(x, w));
        return k.instance !== b.instance[w] && (b.instance[w] = k.instance), b.importErrors(k), true;
      }), b;
    }
  }, o.contains = function(h, g, y, _) {
    var v = this;
    if (this.types.array(h) && g.contains !== void 0) {
      if (!e4.isSchema(g.contains)) throw new Error('Expected "contains" keyword to be a schema');
      var b = new t(h, g, y, _), m = h.some(function(w, x) {
        var k = v.validateSchema(w, g.contains, y, _.makeChild(g.contains, x));
        return k.errors.length === 0;
      });
      return m === false && b.addError({
        name: "contains",
        argument: g.contains,
        message: "must contain an item matching given schema"
      }), b;
    }
  }, o.minimum = function(h, g, y, _) {
    if (this.types.number(h)) {
      var v = new t(h, g, y, _);
      return g.exclusiveMinimum && g.exclusiveMinimum === true ? h > g.minimum || v.addError({
        name: "minimum",
        argument: g.minimum,
        message: "must be greater than " + g.minimum
      }) : h >= g.minimum || v.addError({
        name: "minimum",
        argument: g.minimum,
        message: "must be greater than or equal to " + g.minimum
      }), v;
    }
  }, o.maximum = function(h, g, y, _) {
    if (this.types.number(h)) {
      var v = new t(h, g, y, _);
      return g.exclusiveMaximum && g.exclusiveMaximum === true ? h < g.maximum || v.addError({
        name: "maximum",
        argument: g.maximum,
        message: "must be less than " + g.maximum
      }) : h <= g.maximum || v.addError({
        name: "maximum",
        argument: g.maximum,
        message: "must be less than or equal to " + g.maximum
      }), v;
    }
  }, o.exclusiveMinimum = function(h, g, y, _) {
    if (typeof g.exclusiveMinimum != "boolean" && this.types.number(h)) {
      var v = new t(h, g, y, _), b = h > g.exclusiveMinimum;
      return b || v.addError({
        name: "exclusiveMinimum",
        argument: g.exclusiveMinimum,
        message: "must be strictly greater than " + g.exclusiveMinimum
      }), v;
    }
  }, o.exclusiveMaximum = function(h, g, y, _) {
    if (typeof g.exclusiveMaximum != "boolean" && this.types.number(h)) {
      var v = new t(h, g, y, _), b = h < g.exclusiveMaximum;
      return b || v.addError({
        name: "exclusiveMaximum",
        argument: g.exclusiveMaximum,
        message: "must be strictly less than " + g.exclusiveMaximum
      }), v;
    }
  };
  var u = function(h, g, y, _, v, b) {
    if (this.types.number(h)) {
      var m = g[v];
      if (m == 0)
        throw new r(v + " cannot be zero");
      var w = new t(h, g, y, _), x = e4.getDecimalPlaces(h), k = e4.getDecimalPlaces(m), E = Math.max(x, k), R = Math.pow(10, E);
      return Math.round(h * R) % Math.round(m * R) !== 0 && w.addError({
        name: v,
        argument: m,
        message: b + JSON.stringify(m)
      }), w;
    }
  };
  o.multipleOf = function(h, g, y, _) {
    return u.call(this, h, g, y, _, "multipleOf", "is not a multiple of (divisible by) ");
  }, o.divisibleBy = function(h, g, y, _) {
    return u.call(this, h, g, y, _, "divisibleBy", "is not divisible by (multiple of) ");
  }, o.required = function(h, g, y, _) {
    var v = new t(h, g, y, _);
    return h === void 0 && g.required === true ? v.addError({
      name: "required",
      message: "is required"
    }) : this.types.object(h) && Array.isArray(g.required) && g.required.forEach(function(b) {
      l(h, b) === void 0 && v.addError({
        name: "required",
        argument: b,
        message: "requires property " + JSON.stringify(b)
      });
    }), v;
  }, o.pattern = function(h, g, y, _) {
    if (this.types.string(h)) {
      var v = new t(h, g, y, _), b = g.pattern;
      try {
        var m = new RegExp(b, "u");
      } catch {
        m = new RegExp(b);
      }
      return h.match(m) || v.addError({
        name: "pattern",
        argument: g.pattern,
        message: "does not match pattern " + JSON.stringify(g.pattern.toString())
      }), v;
    }
  }, o.format = function(h, g, y, _) {
    if (h !== void 0) {
      var v = new t(h, g, y, _);
      return !v.disableFormat && !e4.isFormat(h, g.format, this) && v.addError({
        name: "format",
        argument: g.format,
        message: "does not conform to the " + JSON.stringify(g.format) + " format"
      }), v;
    }
  }, o.minLength = function(h, g, y, _) {
    if (this.types.string(h)) {
      var v = new t(h, g, y, _), b = h.match(/[\uDC00-\uDFFF]/g), m = h.length - (b ? b.length : 0);
      return m >= g.minLength || v.addError({
        name: "minLength",
        argument: g.minLength,
        message: "does not meet minimum length of " + g.minLength
      }), v;
    }
  }, o.maxLength = function(h, g, y, _) {
    if (this.types.string(h)) {
      var v = new t(h, g, y, _), b = h.match(/[\uDC00-\uDFFF]/g), m = h.length - (b ? b.length : 0);
      return m <= g.maxLength || v.addError({
        name: "maxLength",
        argument: g.maxLength,
        message: "does not meet maximum length of " + g.maxLength
      }), v;
    }
  }, o.minItems = function(h, g, y, _) {
    if (this.types.array(h)) {
      var v = new t(h, g, y, _);
      return h.length >= g.minItems || v.addError({
        name: "minItems",
        argument: g.minItems,
        message: "does not meet minimum length of " + g.minItems
      }), v;
    }
  }, o.maxItems = function(h, g, y, _) {
    if (this.types.array(h)) {
      var v = new t(h, g, y, _);
      return h.length <= g.maxItems || v.addError({
        name: "maxItems",
        argument: g.maxItems,
        message: "does not meet maximum length of " + g.maxItems
      }), v;
    }
  };
  function d(p, h, g) {
    var y, _ = g.length;
    for (y = h + 1, _; y < _; y++)
      if (e4.deepCompareStrict(p, g[y]))
        return false;
    return true;
  }
  return o.uniqueItems = function(h, g, y, _) {
    if (g.uniqueItems === true && this.types.array(h)) {
      var v = new t(h, g, y, _);
      return h.every(d) || v.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
      }), v;
    }
  }, o.dependencies = function(h, g, y, _) {
    if (this.types.object(h)) {
      var v = new t(h, g, y, _);
      for (var b in g.dependencies)
        if (h[b] !== void 0) {
          var m = g.dependencies[b], w = _.makeChild(m, b);
          if (typeof m == "string" && (m = [m]), Array.isArray(m))
            m.forEach(function(k) {
              h[k] === void 0 && v.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: w.propertyPath,
                message: "property " + k + " not found, required by " + w.propertyPath
              });
            });
          else {
            var x = this.validateSchema(h, m, y, w);
            v.instance !== x.instance && (v.instance = x.instance), x && x.errors.length && (v.addError({
              name: "dependencies",
              argument: w.propertyPath,
              message: "does not meet dependency required by " + w.propertyPath
            }), v.importErrors(x));
          }
        }
      return v;
    }
  }, o.enum = function(h, g, y, _) {
    if (h === void 0)
      return null;
    if (!Array.isArray(g.enum))
      throw new r("enum expects an array", g);
    var v = new t(h, g, y, _);
    return g.enum.some(e4.deepCompareStrict.bind(null, h)) || v.addError({
      name: "enum",
      argument: g.enum,
      message: "is not one of enum values: " + g.enum.map(String).join(",")
    }), v;
  }, o.const = function(h, g, y, _) {
    if (h === void 0)
      return null;
    var v = new t(h, g, y, _);
    return e4.deepCompareStrict(g.const, h) || v.addError({
      name: "const",
      argument: g.const,
      message: "does not exactly match expected constant: " + g.const
    }), v;
  }, o.not = o.disallow = function(h, g, y, _) {
    var v = this;
    if (h === void 0) return null;
    var b = new t(h, g, y, _), m = g.not || g.disallow;
    return m ? (Array.isArray(m) || (m = [m]), m.forEach(function(w) {
      if (v.testType(h, g, y, _, w)) {
        var x = w && (w.$id || w.id), k = x || w;
        b.addError({
          name: "not",
          argument: k,
          message: "is of prohibited type " + k
        });
      }
    }), b) : null;
  }, qf = n, qf;
}
var pl = {}, C0;
function Od() {
  if (C0) return pl;
  C0 = 1;
  var e4 = xi();
  pl.SchemaScanResult = t;
  function t(r, n) {
    this.id = r, this.ref = n;
  }
  return pl.scan = function(n, o) {
    function a(p, h) {
      if (!h || typeof h != "object") return;
      if (h.$ref) {
        let v = e4.resolveUrl(p, h.$ref);
        d[v] = d[v] ? d[v] + 1 : 0;
        return;
      }
      var g = h.$id || h.id;
      let y = e4.resolveUrl(p, g);
      var _ = g ? y : p;
      if (_) {
        if (_.indexOf("#") < 0 && (_ += "#"), u[_]) {
          if (!e4.deepCompareStrict(u[_], h))
            throw new Error("Schema <" + _ + "> already exists with different definition");
          return u[_];
        }
        u[_] = h, _[_.length - 1] == "#" && (u[_.substring(0, _.length - 1)] = h);
      }
      l(_ + "/items", Array.isArray(h.items) ? h.items : [h.items]), l(_ + "/extends", Array.isArray(h.extends) ? h.extends : [h.extends]), a(_ + "/additionalItems", h.additionalItems), c(_ + "/properties", h.properties), a(_ + "/additionalProperties", h.additionalProperties), c(_ + "/definitions", h.definitions), c(_ + "/patternProperties", h.patternProperties), c(_ + "/dependencies", h.dependencies), l(_ + "/disallow", h.disallow), l(_ + "/allOf", h.allOf), l(_ + "/anyOf", h.anyOf), l(_ + "/oneOf", h.oneOf), a(_ + "/not", h.not);
    }
    function l(p, h) {
      if (Array.isArray(h))
        for (var g = 0; g < h.length; g++)
          a(p + "/" + g, h[g]);
    }
    function c(p, h) {
      if (!(!h || typeof h != "object"))
        for (var g in h)
          a(p + "/" + g, h[g]);
    }
    var u = {}, d = {};
    return a(n, o), new t(u, d);
  }, pl;
}
var Gf, P0;
function Iz() {
  if (P0) return Gf;
  P0 = 1;
  var e4 = Pz(), t = xi(), r = Od().scan, n = t.ValidatorResult, o = t.ValidatorResultError, a = t.SchemaError, l = t.SchemaContext, c = "/", u = function h() {
    this.customFormats = Object.create(h.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(p), this.attributes = Object.create(e4.validators);
  };
  u.prototype.customFormats = {}, u.prototype.schemas = null, u.prototype.types = null, u.prototype.attributes = null, u.prototype.unresolvedRefs = null, u.prototype.addSchema = function(g, y) {
    var _ = this;
    if (!g)
      return null;
    var v = r(y || c, g), b = y || g.$id || g.id;
    for (var m in v.id)
      this.schemas[m] = v.id[m];
    for (var m in v.ref)
      this.unresolvedRefs.push(m);
    return this.unresolvedRefs = this.unresolvedRefs.filter(function(w) {
      return typeof _.schemas[w] > "u";
    }), this.schemas[b];
  }, u.prototype.addSubSchemaArray = function(g, y) {
    if (Array.isArray(y))
      for (var _ = 0; _ < y.length; _++)
        this.addSubSchema(g, y[_]);
  }, u.prototype.addSubSchemaObject = function(g, y) {
    if (!(!y || typeof y != "object"))
      for (var _ in y)
        this.addSubSchema(g, y[_]);
  }, u.prototype.setSchemas = function(g) {
    this.schemas = g;
  }, u.prototype.getSchema = function(g) {
    return this.schemas[g];
  }, u.prototype.validate = function(g, y, _, v) {
    if (typeof y != "boolean" && typeof y != "object" || y === null)
      throw new a("Expected `schema` to be an object or boolean");
    _ || (_ = {});
    var b = y.$id || y.id;
    let m = t.resolveUrl(_.base, b || "");
    if (!v) {
      v = new l(y, _, [], m, Object.create(this.schemas)), v.schemas[m] || (v.schemas[m] = y);
      var w = r(m, y);
      for (var x in w.id) {
        var k = w.id[x];
        v.schemas[x] = k;
      }
    }
    if (_.required && g === void 0) {
      var E = new n(g, y, _, v);
      return E.addError("is required, but is undefined"), E;
    }
    var E = this.validateSchema(g, y, _, v);
    if (E) {
      if (_.throwAll && E.errors.length)
        throw new o(E);
    } else throw new Error("Result undefined");
    return E;
  };
  function d(h) {
    var g = typeof h == "string" ? h : h.$ref;
    return typeof g == "string" ? g : false;
  }
  u.prototype.validateSchema = function(g, y, _, v) {
    var b = new n(g, y, _, v);
    if (typeof y == "boolean")
      y === true ? y = {} : y === false && (y = { type: [] });
    else if (!y)
      throw new Error("schema is undefined");
    if (y.extends)
      if (Array.isArray(y.extends)) {
        var m = { schema: y, ctx: v };
        y.extends.forEach(this.schemaTraverser.bind(this, m)), y = m.schema, m.schema = null, m.ctx = null, m = null;
      } else
        y = t.deepMerge(y, this.superResolve(y.extends, v));
    var w = d(y);
    if (w) {
      var x = this.resolve(y, w, v), k = new l(x.subschema, _, v.path, x.switchSchema, v.schemas);
      return this.validateSchema(g, x.subschema, _, k);
    }
    var E = _ && _.skipAttributes || [];
    for (var R in y)
      if (!e4.ignoreProperties[R] && E.indexOf(R) < 0) {
        var z = null, A = this.attributes[R];
        if (A)
          z = A.call(this, g, y, _, v);
        else if (_.allowUnknownAttributes === false)
          throw new a("Unsupported attribute: " + R, y);
        z && b.importErrors(z);
      }
    if (typeof _.rewrite == "function") {
      var P = _.rewrite.call(this, g, y, _, v);
      b.instance = P;
    }
    return b;
  }, u.prototype.schemaTraverser = function(g, y) {
    g.schema = t.deepMerge(g.schema, this.superResolve(y, g.ctx));
  }, u.prototype.superResolve = function(g, y) {
    var _ = d(g);
    return _ ? this.resolve(g, _, y).subschema : g;
  }, u.prototype.resolve = function(g, y, _) {
    if (y = _.resolve(y), _.schemas[y])
      return { subschema: _.schemas[y], switchSchema: y };
    let b = new URL(y, "thismessage::/").hash;
    var m = b && b.length && y.substr(0, y.length - b.length);
    if (!m || !_.schemas[m])
      throw new a("no such schema <" + y + ">", g);
    var w = t.objectGetPath(_.schemas[m], b.substr(1));
    if (w === void 0)
      throw new a("no such schema " + b + " located in <" + m + ">", g);
    return { subschema: w, switchSchema: y };
  }, u.prototype.testType = function(g, y, _, v, b) {
    if (b !== void 0) {
      if (b === null)
        throw new a('Unexpected null in "type" keyword');
      if (typeof this.types[b] == "function")
        return this.types[b].call(this, g);
      if (b && typeof b == "object") {
        var m = this.validateSchema(g, b, _, v);
        return m === void 0 || !(m && m.errors.length);
      }
      return true;
    }
  };
  var p = u.prototype.types = {};
  return p.string = function(g) {
    return typeof g == "string";
  }, p.number = function(g) {
    return typeof g == "number" && isFinite(g);
  }, p.integer = function(g) {
    return typeof g == "number" && g % 1 === 0;
  }, p.boolean = function(g) {
    return typeof g == "boolean";
  }, p.array = function(g) {
    return Array.isArray(g);
  }, p.null = function(g) {
    return g === null;
  }, p.date = function(g) {
    return g instanceof Date;
  }, p.any = function(g) {
    return true;
  }, p.object = function(g) {
    return g && typeof g == "object" && !Array.isArray(g) && !(g instanceof Date);
  }, Gf = u, Gf;
}
var I0;
function Nz() {
  if (I0) return Xr;
  I0 = 1;
  var e4 = Xr.Validator = Iz();
  return Xr.ValidatorResult = xi().ValidatorResult, Xr.ValidatorResultError = xi().ValidatorResultError, Xr.ValidationError = xi().ValidationError, Xr.SchemaError = xi().SchemaError, Xr.SchemaScanResult = Od().SchemaScanResult, Xr.scan = Od().scan, Xr.validate = function(t, r, n) {
    var o = new e4();
    return o.validate(t, r, n);
  }, Xr;
}
var Mz = Nz();
const qx = (e4, t, r) => {
  const n = e4 instanceof RegExp ? N0(e4, r) : e4, o = t instanceof RegExp ? N0(t, r) : t, a = n !== null && o != null && $z(n, o, r);
  return a && {
    start: a[0],
    end: a[1],
    pre: r.slice(0, a[0]),
    body: r.slice(a[0] + n.length, a[1]),
    post: r.slice(a[1] + o.length)
  };
}, N0 = (e4, t) => {
  const r = t.match(e4);
  return r ? r[0] : null;
}, $z = (e4, t, r) => {
  let n, o, a, l, c, u = r.indexOf(e4), d = r.indexOf(t, u + 1), p = u;
  if (u >= 0 && d > 0) {
    if (e4 === t)
      return [u, d];
    for (n = [], a = r.length; p >= 0 && !c; ) {
      if (p === u)
        n.push(p), u = r.indexOf(e4, p + 1);
      else if (n.length === 1) {
        const h = n.pop();
        h !== void 0 && (c = [h, d]);
      } else
        o = n.pop(), o !== void 0 && o < a && (a = o, l = d), d = r.indexOf(t, p + 1);
      p = u < d && u >= 0 ? u : d;
    }
    n.length && l !== void 0 && (c = [a, l]);
  }
  return c;
}, Gx = "\0SLASH" + Math.random() + "\0", Kx = "\0OPEN" + Math.random() + "\0", Rp = "\0CLOSE" + Math.random() + "\0", Zx = "\0COMMA" + Math.random() + "\0", Yx = "\0PERIOD" + Math.random() + "\0", Dz = new RegExp(Gx, "g"), Lz = new RegExp(Kx, "g"), zz = new RegExp(Rp, "g"), Fz = new RegExp(Zx, "g"), Hz = new RegExp(Yx, "g"), Wz = /\\\\/g, Bz = /\\{/g, jz = /\\}/g, Uz = /\\,/g, Vz = /\\./g;
function Kf(e4) {
  return isNaN(e4) ? e4.charCodeAt(0) : parseInt(e4, 10);
}
function qz(e4) {
  return e4.replace(Wz, Gx).replace(Bz, Kx).replace(jz, Rp).replace(Uz, Zx).replace(Vz, Yx);
}
function Gz(e4) {
  return e4.replace(Dz, "\\").replace(Lz, "{").replace(zz, "}").replace(Fz, ",").replace(Hz, ".");
}
function Xx(e4) {
  if (!e4)
    return [""];
  const t = [], r = qx("{", "}", e4);
  if (!r)
    return e4.split(",");
  const { pre: n, body: o, post: a } = r, l = n.split(",");
  l[l.length - 1] += "{" + o + "}";
  const c = Xx(a);
  return a.length && (l[l.length - 1] += c.shift(), l.push.apply(l, c)), t.push.apply(t, l), t;
}
function Kz(e4) {
  return e4 ? (e4.slice(0, 2) === "{}" && (e4 = "\\{\\}" + e4.slice(2)), wa(qz(e4), true).map(Gz)) : [];
}
function Zz(e4) {
  return "{" + e4 + "}";
}
function Yz(e4) {
  return /^-?0\d/.test(e4);
}
function Xz(e4, t) {
  return e4 <= t;
}
function Jz(e4, t) {
  return e4 >= t;
}
function wa(e4, t) {
  const r = [], n = qx("{", "}", e4);
  if (!n)
    return [e4];
  const o = n.pre, a = n.post.length ? wa(n.post, false) : [""];
  if (/\$$/.test(n.pre))
    for (let l = 0; l < a.length; l++) {
      const c = o + "{" + n.body + "}" + a[l];
      r.push(c);
    }
  else {
    const l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(n.body), c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(n.body), u = l || c, d = n.body.indexOf(",") >= 0;
    if (!u && !d)
      return n.post.match(/,(?!,).*\}/) ? (e4 = n.pre + "{" + n.body + Rp + n.post, wa(e4)) : [e4];
    let p;
    if (u)
      p = n.body.split(/\.\./);
    else if (p = Xx(n.body), p.length === 1 && p[0] !== void 0 && (p = wa(p[0], false).map(Zz), p.length === 1))
      return a.map((g) => n.pre + p[0] + g);
    let h;
    if (u && p[0] !== void 0 && p[1] !== void 0) {
      const g = Kf(p[0]), y = Kf(p[1]), _ = Math.max(p[0].length, p[1].length);
      let v = p.length === 3 && p[2] !== void 0 ? Math.abs(Kf(p[2])) : 1, b = Xz;
      y < g && (v *= -1, b = Jz);
      const w = p.some(Yz);
      h = [];
      for (let x = g; b(x, y); x += v) {
        let k;
        if (c)
          k = String.fromCharCode(x), k === "\\" && (k = "");
        else if (k = String(x), w) {
          const E = _ - k.length;
          if (E > 0) {
            const R = new Array(E + 1).join("0");
            x < 0 ? k = "-" + R + k.slice(1) : k = R + k;
          }
        }
        h.push(k);
      }
    } else {
      h = [];
      for (let g = 0; g < p.length; g++)
        h.push.apply(h, wa(p[g], false));
    }
    for (let g = 0; g < h.length; g++)
      for (let y = 0; y < a.length; y++) {
        const _ = o + h[g] + a[y];
        (!t || u || _) && r.push(_);
      }
  }
  return r;
}
const Qz = 1024 * 64, Kl = (e4) => {
  if (typeof e4 != "string")
    throw new TypeError("invalid pattern");
  if (e4.length > Qz)
    throw new TypeError("pattern is too long");
}, e3 = {
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
}, pa = (e4) => e4.replace(/[[\]\\-]/g, "\\$&"), t3 = (e4) => e4.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), M0 = (e4) => e4.join(""), r3 = (e4, t) => {
  const r = t;
  if (e4.charAt(r) !== "[")
    throw new Error("not in a brace expression");
  const n = [], o = [];
  let a = r + 1, l = false, c = false, u = false, d = false, p = r, h = "";
  e: for (; a < e4.length; ) {
    const v = e4.charAt(a);
    if ((v === "!" || v === "^") && a === r + 1) {
      d = true, a++;
      continue;
    }
    if (v === "]" && l && !u) {
      p = a + 1;
      break;
    }
    if (l = true, v === "\\" && !u) {
      u = true, a++;
      continue;
    }
    if (v === "[" && !u) {
      for (const [b, [m, w, x]] of Object.entries(e3))
        if (e4.startsWith(b, a)) {
          if (h)
            return ["$.", false, e4.length - r, true];
          a += b.length, x ? o.push(m) : n.push(m), c = c || w;
          continue e;
        }
    }
    if (u = false, h) {
      v > h ? n.push(pa(h) + "-" + pa(v)) : v === h && n.push(pa(v)), h = "", a++;
      continue;
    }
    if (e4.startsWith("-]", a + 1)) {
      n.push(pa(v + "-")), a += 2;
      continue;
    }
    if (e4.startsWith("-", a + 1)) {
      h = v, a += 2;
      continue;
    }
    n.push(pa(v)), a++;
  }
  if (p < a)
    return ["", false, 0, false];
  if (!n.length && !o.length)
    return ["$.", false, e4.length - r, true];
  if (o.length === 0 && n.length === 1 && /^\\?.$/.test(n[0]) && !d) {
    const v = n[0].length === 2 ? n[0].slice(-1) : n[0];
    return [t3(v), false, p - r, false];
  }
  const g = "[" + (d ? "^" : "") + M0(n) + "]", y = "[" + (d ? "" : "^") + M0(o) + "]";
  return [n.length && o.length ? "(" + g + "|" + y + ")" : n.length ? g : y, c, p - r, true];
}, xa = (e4, { windowsPathsNoEscape: t = false } = {}) => t ? e4.replace(/\[([^\/\\])\]/g, "$1") : e4.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), n3 = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), $0 = (e4) => n3.has(e4), i3 = "(?!(?:^|/)\\.\\.?(?:$|/))", hl = "(?!\\.)", o3 = /* @__PURE__ */ new Set(["[", "."]), a3 = /* @__PURE__ */ new Set(["..", "."]), s3 = new Set("().*{}+?[]^$\\!"), l3 = (e4) => e4.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Cp = "[^/]", D0 = Cp + "*?", L0 = Cp + "+?";
var kt, Rt, On, lt, wt, Yn, _i, Xn, en, Si, La, Ci, Jx, Qn, Tl, Ad, Qx;
const Kt = class Kt2 {
  constructor(t, r, n = {}) {
    Wt(this, Ci);
    Ee(this, "type");
    Wt(this, kt);
    Wt(this, Rt);
    Wt(this, On, false);
    Wt(this, lt, []);
    Wt(this, wt);
    Wt(this, Yn);
    Wt(this, _i);
    Wt(this, Xn, false);
    Wt(this, en);
    Wt(this, Si);
    Wt(this, La, false);
    this.type = t, t && gt(this, Rt, true), gt(this, wt, r), gt(this, kt, ue(this, wt) ? ue(ue(this, wt), kt) : this), gt(this, en, ue(this, kt) === this ? n : ue(ue(this, kt), en)), gt(this, _i, ue(this, kt) === this ? [] : ue(ue(this, kt), _i)), t === "!" && !ue(ue(this, kt), Xn) && ue(this, _i).push(this), gt(this, Yn, ue(this, wt) ? ue(ue(this, wt), lt).length : 0);
  }
  get hasMagic() {
    if (ue(this, Rt) !== void 0)
      return ue(this, Rt);
    for (const t of ue(this, lt))
      if (typeof t != "string" && (t.type || t.hasMagic))
        return gt(this, Rt, true);
    return ue(this, Rt);
  }
  // reconstructs the pattern
  toString() {
    return ue(this, Si) !== void 0 ? ue(this, Si) : this.type ? gt(this, Si, this.type + "(" + ue(this, lt).map((t) => String(t)).join("|") + ")") : gt(this, Si, ue(this, lt).map((t) => String(t)).join(""));
  }
  push(...t) {
    for (const r of t)
      if (r !== "") {
        if (typeof r != "string" && !(r instanceof Kt2 && ue(r, wt) === this))
          throw new Error("invalid part: " + r);
        ue(this, lt).push(r);
      }
  }
  toJSON() {
    var r;
    const t = this.type === null ? ue(this, lt).slice().map((n) => typeof n == "string" ? n : n.toJSON()) : [this.type, ...ue(this, lt).map((n) => n.toJSON())];
    return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === ue(this, kt) || ue(ue(this, kt), Xn) && ((r = ue(this, wt)) == null ? void 0 : r.type) === "!") && t.push({}), t;
  }
  isStart() {
    var r;
    if (ue(this, kt) === this)
      return true;
    if (!((r = ue(this, wt)) != null && r.isStart()))
      return false;
    if (ue(this, Yn) === 0)
      return true;
    const t = ue(this, wt);
    for (let n = 0; n < ue(this, Yn); n++) {
      const o = ue(t, lt)[n];
      if (!(o instanceof Kt2 && o.type === "!"))
        return false;
    }
    return true;
  }
  isEnd() {
    var r, n, o;
    if (ue(this, kt) === this || ((r = ue(this, wt)) == null ? void 0 : r.type) === "!")
      return true;
    if (!((n = ue(this, wt)) != null && n.isEnd()))
      return false;
    if (!this.type)
      return (o = ue(this, wt)) == null ? void 0 : o.isEnd();
    const t = ue(this, wt) ? ue(ue(this, wt), lt).length : 0;
    return ue(this, Yn) === t - 1;
  }
  copyIn(t) {
    typeof t == "string" ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    const r = new Kt2(this.type, t);
    for (const n of ue(this, lt))
      r.copyIn(n);
    return r;
  }
  static fromGlob(t, r = {}) {
    var o;
    const n = new Kt2(null, void 0, r);
    return Be(o = Kt2, Qn, Tl).call(o, t, n, 0, r), n;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== ue(this, kt))
      return ue(this, kt).toMMPattern();
    const t = this.toString(), [r, n, o, a] = this.toRegExpSource();
    if (!(o || ue(this, Rt) || ue(this, en).nocase && !ue(this, en).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
      return n;
    const c = (ue(this, en).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, c), {
      _src: r,
      _glob: t
    });
  }
  get options() {
    return ue(this, en);
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
  toRegExpSource(t) {
    var u;
    const r = t ?? !!ue(this, en).dot;
    if (ue(this, kt) === this && Be(this, Ci, Jx).call(this), !this.type) {
      const d = this.isStart() && this.isEnd(), p = ue(this, lt).map((_) => {
        var x;
        const [v, b, m, w] = typeof _ == "string" ? Be(x = Kt2, Qn, Qx).call(x, _, ue(this, Rt), d) : _.toRegExpSource(t);
        return gt(this, Rt, ue(this, Rt) || m), gt(this, On, ue(this, On) || w), v;
      }).join("");
      let h = "";
      if (this.isStart() && typeof ue(this, lt)[0] == "string" && !(ue(this, lt).length === 1 && a3.has(ue(this, lt)[0]))) {
        const v = o3, b = (
          // dots are allowed, and the pattern starts with [ or .
          r && v.has(p.charAt(0)) || // the pattern starts with \., and then [ or .
          p.startsWith("\\.") && v.has(p.charAt(2)) || // the pattern starts with \.\., and then [ or .
          p.startsWith("\\.\\.") && v.has(p.charAt(4))
        ), m = !r && !t && v.has(p.charAt(0));
        h = b ? i3 : m ? hl : "";
      }
      let g = "";
      return this.isEnd() && ue(ue(this, kt), Xn) && ((u = ue(this, wt)) == null ? void 0 : u.type) === "!" && (g = "(?:$|\\/)"), [
        h + p + g,
        xa(p),
        gt(this, Rt, !!ue(this, Rt)),
        ue(this, On)
      ];
    }
    const n = this.type === "*" || this.type === "+", o = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = Be(this, Ci, Ad).call(this, r);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const d = this.toString();
      return gt(this, lt, [d]), this.type = null, gt(this, Rt, void 0), [d, xa(this.toString()), false, false];
    }
    let l = !n || t || r || !hl ? "" : Be(this, Ci, Ad).call(this, true);
    l === a && (l = ""), l && (a = `(?:${a})(?:${l})*?`);
    let c = "";
    if (this.type === "!" && ue(this, La))
      c = (this.isStart() && !r ? hl : "") + L0;
    else {
      const d = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !r && !t ? hl : "") + D0 + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`;
      c = o + a + d;
    }
    return [
      c,
      xa(a),
      gt(this, Rt, !!ue(this, Rt)),
      ue(this, On)
    ];
  }
};
kt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), lt = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakSet(), Jx = function() {
  if (this !== ue(this, kt))
    throw new Error("should only call on root");
  if (ue(this, Xn))
    return this;
  this.toString(), gt(this, Xn, true);
  let t;
  for (; t = ue(this, _i).pop(); ) {
    if (t.type !== "!")
      continue;
    let r = t, n = ue(r, wt);
    for (; n; ) {
      for (let o = ue(r, Yn) + 1; !n.type && o < ue(n, lt).length; o++)
        for (const a of ue(t, lt)) {
          if (typeof a == "string")
            throw new Error("string part in extglob AST??");
          a.copyIn(ue(n, lt)[o]);
        }
      r = n, n = ue(r, wt);
    }
  }
  return this;
}, Qn = /* @__PURE__ */ new WeakSet(), Tl = function(t, r, n, o) {
  var y, _;
  let a = false, l = false, c = -1, u = false;
  if (r.type === null) {
    let v = n, b = "";
    for (; v < t.length; ) {
      const m = t.charAt(v++);
      if (a || m === "\\") {
        a = !a, b += m;
        continue;
      }
      if (l) {
        v === c + 1 ? (m === "^" || m === "!") && (u = true) : m === "]" && !(v === c + 2 && u) && (l = false), b += m;
        continue;
      } else if (m === "[") {
        l = true, c = v, u = false, b += m;
        continue;
      }
      if (!o.noext && $0(m) && t.charAt(v) === "(") {
        r.push(b), b = "";
        const w = new Kt(m, r);
        v = Be(y = Kt, Qn, Tl).call(y, t, w, v, o), r.push(w);
        continue;
      }
      b += m;
    }
    return r.push(b), v;
  }
  let d = n + 1, p = new Kt(null, r);
  const h = [];
  let g = "";
  for (; d < t.length; ) {
    const v = t.charAt(d++);
    if (a || v === "\\") {
      a = !a, g += v;
      continue;
    }
    if (l) {
      d === c + 1 ? (v === "^" || v === "!") && (u = true) : v === "]" && !(d === c + 2 && u) && (l = false), g += v;
      continue;
    } else if (v === "[") {
      l = true, c = d, u = false, g += v;
      continue;
    }
    if ($0(v) && t.charAt(d) === "(") {
      p.push(g), g = "";
      const b = new Kt(v, p);
      p.push(b), d = Be(_ = Kt, Qn, Tl).call(_, t, b, d, o);
      continue;
    }
    if (v === "|") {
      p.push(g), g = "", h.push(p), p = new Kt(null, r);
      continue;
    }
    if (v === ")")
      return g === "" && ue(r, lt).length === 0 && gt(r, La, true), p.push(g), g = "", r.push(...h, p), d;
    g += v;
  }
  return r.type = null, gt(r, Rt, void 0), gt(r, lt, [t.substring(n - 1)]), d;
}, Ad = function(t) {
  return ue(this, lt).map((r) => {
    if (typeof r == "string")
      throw new Error("string type in extglob ast??");
    const [n, o, a, l] = r.toRegExpSource(t);
    return gt(this, On, ue(this, On) || l), n;
  }).filter((r) => !(this.isStart() && this.isEnd()) || !!r).join("|");
}, Qx = function(t, r, n = false) {
  let o = false, a = "", l = false;
  for (let c = 0; c < t.length; c++) {
    const u = t.charAt(c);
    if (o) {
      o = false, a += (s3.has(u) ? "\\" : "") + u;
      continue;
    }
    if (u === "\\") {
      c === t.length - 1 ? a += "\\\\" : o = true;
      continue;
    }
    if (u === "[") {
      const [d, p, h, g] = r3(t, c);
      if (h) {
        a += d, l = l || p, c += h - 1, r = r || g;
        continue;
      }
    }
    if (u === "*") {
      n && t === "*" ? a += L0 : a += D0, r = true;
      continue;
    }
    if (u === "?") {
      a += Cp, r = true;
      continue;
    }
    a += l3(u);
  }
  return [a, xa(t), !!r, l];
}, Wt(Kt, Qn);
let Zl = Kt;
const c3 = (e4, { windowsPathsNoEscape: t = false } = {}) => t ? e4.replace(/[?*()[\]]/g, "[$&]") : e4.replace(/[?*()[\]\\]/g, "\\$&"), jt = (e4, t, r = {}) => (Kl(t), !r.nocomment && t.charAt(0) === "#" ? false : new mc(t, r).match(e4)), u3 = /^\*+([^+@!?\*\[\(]*)$/, f3 = (e4) => (t) => !t.startsWith(".") && t.endsWith(e4), d3 = (e4) => (t) => t.endsWith(e4), p3 = (e4) => (e4 = e4.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(e4)), h3 = (e4) => (e4 = e4.toLowerCase(), (t) => t.toLowerCase().endsWith(e4)), g3 = /^\*+\.\*+$/, v3 = (e4) => !e4.startsWith(".") && e4.includes("."), m3 = (e4) => e4 !== "." && e4 !== ".." && e4.includes("."), b3 = /^\.\*+$/, y3 = (e4) => e4 !== "." && e4 !== ".." && e4.startsWith("."), w3 = /^\*+$/, x3 = (e4) => e4.length !== 0 && !e4.startsWith("."), _3 = (e4) => e4.length !== 0 && e4 !== "." && e4 !== "..", S3 = /^\?+([^+@!?\*\[\(]*)?$/, E3 = ([e4, t = ""]) => {
  const r = e1([e4]);
  return t ? (t = t.toLowerCase(), (n) => r(n) && n.toLowerCase().endsWith(t)) : r;
}, k3 = ([e4, t = ""]) => {
  const r = t1([e4]);
  return t ? (t = t.toLowerCase(), (n) => r(n) && n.toLowerCase().endsWith(t)) : r;
}, O3 = ([e4, t = ""]) => {
  const r = t1([e4]);
  return t ? (n) => r(n) && n.endsWith(t) : r;
}, A3 = ([e4, t = ""]) => {
  const r = e1([e4]);
  return t ? (n) => r(n) && n.endsWith(t) : r;
}, e1 = ([e4]) => {
  const t = e4.length;
  return (r) => r.length === t && !r.startsWith(".");
}, t1 = ([e4]) => {
  const t = e4.length;
  return (r) => r.length === t && r !== "." && r !== "..";
}, r1 = typeof process == "object" && process ? typeof define_process_env_default == "object" && define_process_env_default && define_process_env_default.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", z0 = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, T3 = r1 === "win32" ? z0.win32.sep : z0.posix.sep;
jt.sep = T3;
const Rr = Symbol("globstar **");
jt.GLOBSTAR = Rr;
const R3 = "[^/]", C3 = R3 + "*?", P3 = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", I3 = "(?:(?!(?:\\/|^)\\.).)*?", N3 = (e4, t = {}) => (r) => jt(r, e4, t);
jt.filter = N3;
const Tr = (e4, t = {}) => Object.assign({}, e4, t), M3 = (e4) => {
  if (!e4 || typeof e4 != "object" || !Object.keys(e4).length)
    return jt;
  const t = jt;
  return Object.assign((n, o, a = {}) => t(n, o, Tr(e4, a)), {
    Minimatch: class extends t.Minimatch {
      constructor(o, a = {}) {
        super(o, Tr(e4, a));
      }
      static defaults(o) {
        return t.defaults(Tr(e4, o)).Minimatch;
      }
    },
    AST: class extends t.AST {
      /* c8 ignore start */
      constructor(o, a, l = {}) {
        super(o, a, Tr(e4, l));
      }
      /* c8 ignore stop */
      static fromGlob(o, a = {}) {
        return t.AST.fromGlob(o, Tr(e4, a));
      }
    },
    unescape: (n, o = {}) => t.unescape(n, Tr(e4, o)),
    escape: (n, o = {}) => t.escape(n, Tr(e4, o)),
    filter: (n, o = {}) => t.filter(n, Tr(e4, o)),
    defaults: (n) => t.defaults(Tr(e4, n)),
    makeRe: (n, o = {}) => t.makeRe(n, Tr(e4, o)),
    braceExpand: (n, o = {}) => t.braceExpand(n, Tr(e4, o)),
    match: (n, o, a = {}) => t.match(n, o, Tr(e4, a)),
    sep: t.sep,
    GLOBSTAR: Rr
  });
};
jt.defaults = M3;
const n1 = (e4, t = {}) => (Kl(e4), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e4) ? [e4] : Kz(e4));
jt.braceExpand = n1;
const $3 = (e4, t = {}) => new mc(e4, t).makeRe();
jt.makeRe = $3;
const D3 = (e4, t, r = {}) => {
  const n = new mc(t, r);
  return e4 = e4.filter((o) => n.match(o)), n.options.nonull && !e4.length && e4.push(t), e4;
};
jt.match = D3;
const F0 = /[?*]|[+@!]\(.*?\)|\[|\]/, L3 = (e4) => e4.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class mc {
  constructor(t, r = {}) {
    Ee(this, "options");
    Ee(this, "set");
    Ee(this, "pattern");
    Ee(this, "windowsPathsNoEscape");
    Ee(this, "nonegate");
    Ee(this, "negate");
    Ee(this, "comment");
    Ee(this, "empty");
    Ee(this, "preserveMultipleSlashes");
    Ee(this, "partial");
    Ee(this, "globSet");
    Ee(this, "globParts");
    Ee(this, "nocase");
    Ee(this, "isWindows");
    Ee(this, "platform");
    Ee(this, "windowsNoMagicRoot");
    Ee(this, "regexp");
    Kl(t), r = r || {}, this.options = r, this.pattern = t, this.platform = r.platform || r1, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!r.nonegate, this.comment = false, this.empty = false, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return true;
    for (const t of this.set)
      for (const r of t)
        if (typeof r != "string")
          return true;
    return false;
  }
  debug(...t) {
  }
  make() {
    const t = this.pattern, r = this.options;
    if (!r.nocomment && t.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!t) {
      this.empty = true;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], r.debug && (this.debug = (...a) => console.error(...a)), this.debug(this.pattern, this.globSet);
    const n = this.globSet.map((a) => this.slashSplit(a));
    this.globParts = this.preprocess(n), this.debug(this.pattern, this.globParts);
    let o = this.globParts.map((a, l, c) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const u = a[0] === "" && a[1] === "" && (a[2] === "?" || !F0.test(a[2])) && !F0.test(a[3]), d = /^[a-z]:/i.test(a[0]);
        if (u)
          return [...a.slice(0, 4), ...a.slice(4).map((p) => this.parse(p))];
        if (d)
          return [a[0], ...a.slice(1).map((p) => this.parse(p))];
      }
      return a.map((u) => this.parse(u));
    });
    if (this.debug(this.pattern, o), this.set = o.filter((a) => a.indexOf(false) === -1), this.isWindows)
      for (let a = 0; a < this.set.length; a++) {
        const l = this.set[a];
        l[0] === "" && l[1] === "" && this.globParts[a][2] === "?" && typeof l[3] == "string" && /^[a-z]:$/i.test(l[3]) && (l[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(t) {
    if (this.options.noglobstar)
      for (let n = 0; n < t.length; n++)
        for (let o = 0; o < t[n].length; o++)
          t[n][o] === "**" && (t[n][o] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : r >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t), t;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(t) {
    return t.map((r) => {
      let n = -1;
      for (; (n = r.indexOf("**", n + 1)) !== -1; ) {
        let o = n;
        for (; r[o + 1] === "**"; )
          o++;
        o !== n && r.splice(n, o - n);
      }
      return r;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(t) {
    return t.map((r) => (r = r.reduce((n, o) => {
      const a = n[n.length - 1];
      return o === "**" && a === "**" ? n : o === ".." && a && a !== ".." && a !== "." && a !== "**" ? (n.pop(), n) : (n.push(o), n);
    }, []), r.length === 0 ? [""] : r));
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let r = false;
    do {
      if (r = false, !this.preserveMultipleSlashes) {
        for (let o = 1; o < t.length - 1; o++) {
          const a = t[o];
          o === 1 && a === "" && t[0] === "" || (a === "." || a === "") && (r = true, t.splice(o, 1), o--);
        }
        t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (r = true, t.pop());
      }
      let n = 0;
      for (; (n = t.indexOf("..", n + 1)) !== -1; ) {
        const o = t[n - 1];
        o && o !== "." && o !== ".." && o !== "**" && (r = true, t.splice(n - 1, 2), n -= 2);
      }
    } while (r);
    return t.length === 0 ? [""] : t;
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
  firstPhasePreProcess(t) {
    let r = false;
    do {
      r = false;
      for (let n of t) {
        let o = -1;
        for (; (o = n.indexOf("**", o + 1)) !== -1; ) {
          let l = o;
          for (; n[l + 1] === "**"; )
            l++;
          l > o && n.splice(o + 1, l - o);
          let c = n[o + 1];
          const u = n[o + 2], d = n[o + 3];
          if (c !== ".." || !u || u === "." || u === ".." || !d || d === "." || d === "..")
            continue;
          r = true, n.splice(o, 1);
          const p = n.slice(0);
          p[o] = "**", t.push(p), o--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let l = 1; l < n.length - 1; l++) {
            const c = n[l];
            l === 1 && c === "" && n[0] === "" || (c === "." || c === "") && (r = true, n.splice(l, 1), l--);
          }
          n[0] === "." && n.length === 2 && (n[1] === "." || n[1] === "") && (r = true, n.pop());
        }
        let a = 0;
        for (; (a = n.indexOf("..", a + 1)) !== -1; ) {
          const l = n[a - 1];
          if (l && l !== "." && l !== ".." && l !== "**") {
            r = true;
            const u = a === 1 && n[a + 1] === "**" ? ["."] : [];
            n.splice(a - 1, 2, ...u), n.length === 0 && n.push(""), a -= 2;
          }
        }
      }
    } while (r);
    return t;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(t) {
    for (let r = 0; r < t.length - 1; r++)
      for (let n = r + 1; n < t.length; n++) {
        const o = this.partsMatch(t[r], t[n], !this.preserveMultipleSlashes);
        if (o) {
          t[r] = [], t[n] = o;
          break;
        }
      }
    return t.filter((r) => r.length);
  }
  partsMatch(t, r, n = false) {
    let o = 0, a = 0, l = [], c = "";
    for (; o < t.length && a < r.length; )
      if (t[o] === r[a])
        l.push(c === "b" ? r[a] : t[o]), o++, a++;
      else if (n && t[o] === "**" && r[a] === t[o + 1])
        l.push(t[o]), o++;
      else if (n && r[a] === "**" && t[o] === r[a + 1])
        l.push(r[a]), a++;
      else if (t[o] === "*" && r[a] && (this.options.dot || !r[a].startsWith(".")) && r[a] !== "**") {
        if (c === "b")
          return false;
        c = "a", l.push(t[o]), o++, a++;
      } else if (r[a] === "*" && t[o] && (this.options.dot || !t[o].startsWith(".")) && t[o] !== "**") {
        if (c === "a")
          return false;
        c = "b", l.push(r[a]), o++, a++;
      } else
        return false;
    return t.length === r.length && l;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const t = this.pattern;
    let r = false, n = 0;
    for (let o = 0; o < t.length && t.charAt(o) === "!"; o++)
      r = !r, n++;
    n && (this.pattern = t.slice(n)), this.negate = r;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(t, r, n = false) {
    const o = this.options;
    if (this.isWindows) {
      const v = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), b = !v && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]), m = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), w = !m && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]), x = b ? 3 : v ? 0 : void 0, k = w ? 3 : m ? 0 : void 0;
      if (typeof x == "number" && typeof k == "number") {
        const [E, R] = [t[x], r[k]];
        E.toLowerCase() === R.toLowerCase() && (r[k] = E, k > x ? r = r.slice(k) : x > k && (t = t.slice(x)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, { file: t, pattern: r }), this.debug("matchOne", t.length, r.length);
    for (var l = 0, c = 0, u = t.length, d = r.length; l < u && c < d; l++, c++) {
      this.debug("matchOne loop");
      var p = r[c], h = t[l];
      if (this.debug(r, p, h), p === false)
        return false;
      if (p === Rr) {
        this.debug("GLOBSTAR", [r, p, h]);
        var g = l, y = c + 1;
        if (y === d) {
          for (this.debug("** at the end"); l < u; l++)
            if (t[l] === "." || t[l] === ".." || !o.dot && t[l].charAt(0) === ".")
              return false;
          return true;
        }
        for (; g < u; ) {
          var _ = t[g];
          if (this.debug(`
globstar while`, t, g, r, y, _), this.matchOne(t.slice(g), r.slice(y), n))
            return this.debug("globstar found match!", g, u, _), true;
          if (_ === "." || _ === ".." || !o.dot && _.charAt(0) === ".") {
            this.debug("dot detected!", t, g, r, y);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), g++;
        }
        return !!(n && (this.debug(`
>>> no match, partial?`, t, g, r, y), g === u));
      }
      let v;
      if (typeof p == "string" ? (v = h === p, this.debug("string match", p, h, v)) : (v = p.test(h), this.debug("pattern match", p, h, v)), !v)
        return false;
    }
    if (l === u && c === d)
      return true;
    if (l === u)
      return n;
    if (c === d)
      return l === u - 1 && t[l] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return n1(this.pattern, this.options);
  }
  parse(t) {
    Kl(t);
    const r = this.options;
    if (t === "**")
      return Rr;
    if (t === "")
      return "";
    let n, o = null;
    (n = t.match(w3)) ? o = r.dot ? _3 : x3 : (n = t.match(u3)) ? o = (r.nocase ? r.dot ? h3 : p3 : r.dot ? d3 : f3)(n[1]) : (n = t.match(S3)) ? o = (r.nocase ? r.dot ? k3 : E3 : r.dot ? O3 : A3)(n) : (n = t.match(g3)) ? o = r.dot ? m3 : v3 : (n = t.match(b3)) && (o = y3);
    const a = Zl.fromGlob(t, this.options).toMMPattern();
    return o && typeof a == "object" && Reflect.defineProperty(a, "test", { value: o }), a;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const t = this.set;
    if (!t.length)
      return this.regexp = false, this.regexp;
    const r = this.options, n = r.noglobstar ? C3 : r.dot ? P3 : I3, o = new Set(r.nocase ? ["i"] : []);
    let a = t.map((u) => {
      const d = u.map((p) => {
        if (p instanceof RegExp)
          for (const h of p.flags.split(""))
            o.add(h);
        return typeof p == "string" ? L3(p) : p === Rr ? Rr : p._src;
      });
      return d.forEach((p, h) => {
        const g = d[h + 1], y = d[h - 1];
        p !== Rr || y === Rr || (y === void 0 ? g !== void 0 && g !== Rr ? d[h + 1] = "(?:\\/|" + n + "\\/)?" + g : d[h] = n : g === void 0 ? d[h - 1] = y + "(?:\\/|" + n + ")?" : g !== Rr && (d[h - 1] = y + "(?:\\/|\\/" + n + "\\/)" + g, d[h + 1] = Rr));
      }), d.filter((p) => p !== Rr).join("/");
    }).join("|");
    const [l, c] = t.length > 1 ? ["(?:", ")"] : ["", ""];
    a = "^" + l + a + c + "$", this.negate && (a = "^(?!" + a + ").+$");
    try {
      this.regexp = new RegExp(a, [...o].join(""));
    } catch {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/);
  }
  match(t, r = this.partial) {
    if (this.debug("match", t, this.pattern), this.comment)
      return false;
    if (this.empty)
      return t === "";
    if (t === "/" && r)
      return true;
    const n = this.options;
    this.isWindows && (t = t.split("\\").join("/"));
    const o = this.slashSplit(t);
    this.debug(this.pattern, "split", o);
    const a = this.set;
    this.debug(this.pattern, "set", a);
    let l = o[o.length - 1];
    if (!l)
      for (let c = o.length - 2; !l && c >= 0; c--)
        l = o[c];
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      let d = o;
      if (n.matchBase && u.length === 1 && (d = [l]), this.matchOne(d, u, r))
        return n.flipNegate ? true : !this.negate;
    }
    return n.flipNegate ? false : this.negate;
  }
  static defaults(t) {
    return jt.defaults(t).Minimatch;
  }
}
jt.AST = Zl;
jt.Minimatch = mc;
jt.escape = c3;
jt.unescape = xa;
const Yl = "/$shared", z3 = {
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
  "**/shared_app_events.json": {
    parser: "json",
    content: []
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
  "**/i18n.json": {
    parser: "json",
    content: {
      keys: {},
      userLang: {
        primary: "",
        supported: []
      }
    },
    schema: {
      type: "object",
      properties: {
        keys: {
          type: "object"
        },
        userLang: {
          type: "object",
          properties: {
            primary: { type: "string" },
            supported: {
              type: "array",
              items: { type: "string" }
            }
          },
          required: ["primary", "supported"]
        }
      },
      required: ["keys", "userLang"]
    }
  },
  "**/*.json": {
    parser: "json",
    content: {}
  }
};
function i1(e4) {
  const t = Object.entries(z3).find(
    ([r]) => jt(e4, r)
  );
  return t == null ? void 0 : t[1];
}
function Pp(e4) {
  var n;
  const t = (n = i1(e4)) == null ? void 0 : n.content;
  if (!t) return;
  const r = e4.replace(`${Yl}/`, "Shared/");
  a1({
    name: r,
    content: t,
    asText: typeof t == "string"
  });
}
async function UF() {
  const e4 = [
    "CustomComponents/manifest.json",
    "shared_app_events.json",
    "shared_css.json",
    "saved_conditions.json",
    "i18n.json"
  ];
  for (const t of e4)
    try {
      await Je(`${Yl}/${t}?t=${Date.now()}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
    } catch (r) {
      o1(r) && Pp(`${Yl}/${t}`);
    }
}
function bc({
  path: e4,
  createIfNotExists: t = false
}) {
  const r = `${Yl}/${e4}`;
  return Je(`${r}?t=${Date.now()}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((n) => {
    const o = i1(e4);
    let a = n;
    if (!o) return a;
    if (typeof a == "string")
      try {
        switch (o.parser) {
          case "json":
            a = JSON.parse(a);
            break;
          default:
            break;
        }
      } catch {
        throw new Error("Cannot parse");
      }
    if (o.schema && !new Mz.Validator().validate(a, o.schema).valid)
      throw new Error("Invalid Schema");
    return a;
  }).catch((n) => {
    if (o1(n) && t) {
      const o = F3(n, e4);
      nz.next({
        message: o,
        kind: "warning"
      }), Pp(r);
    }
    throw n;
  });
}
function o1(e4) {
  var t;
  return ((t = e4 == null ? void 0 : e4.response) == null ? void 0 : t.status) === 404 || (e4 == null ? void 0 : e4.message) === "Invalid Schema" || (e4 == null ? void 0 : e4.message) === "Cannot parse" || (e4 == null ? void 0 : e4.name) === "SyntaxError";
}
function F3(e4, t) {
  var r;
  switch (true) {
    case ((e4 == null ? void 0 : e4.message) === "Cannot parse " || (e4 == null ? void 0 : e4.name) === "SyntaxError"):
      return `Cannot parse file '${t}', resetting...`;
    case (e4 == null ? void 0 : e4.message) === "Invalid Schema":
      return `File '${t}' is corrupt, resetting...`;
    case ((r = e4 == null ? void 0 : e4.response) == null ? void 0 : r.status) === 404:
      return `File '${t}' not found, creating...`;
    default:
      return e4 == null ? void 0 : e4.message;
  }
}
function VF(e4) {
  return Je(vc, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function qF(e4) {
  return Je(vc, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
const H3 = () => {
  const { host: e4, protocol: t } = window.location, r = t === "https:";
  return {
    projectOpened: false,
    remoteDebuggerMode: Hx.DISABLED,
    baseUrl: "",
    qodly: true,
    urls: {
      renderer: "/$lib/renderer/",
      debugger: `ws${r ? "s" : ""}://${e4}/remoteDebugger`,
      lsp: `ws${r ? "s" : ""}://${e4}/LSP`
    },
    isRestActive: true
  };
};
async function GF() {
  const { hostname: e4, host: t, protocol: r } = window.location, n = r === "https:";
  try {
    const o = await Je(At, {
      method: "POST",
      body: JSON.stringify({
        verb: Mi.GET_APP_SETTINGS
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }), a = (() => {
      if (o.rendererPath)
        return o.rendererPath;
      const l = `http://${e4}:${o.webServerHTTPPort}`, c = `https://${e4}:${o.webServerHTTPSPort}`;
      return o.webServerHTTPPort && o.webServerHTTPSPort ? n ? c : l : o.webServerHTTPPort ? l : c;
    })();
    return {
      projectOpened: o.webServerHTTPSPort > 0 || o.webServerHTTPPort > 0,
      remoteDebuggerMode: o.remoteDebuggerMode,
      baseUrl: a,
      qodly: typeof o.qodly > "u" ? true : o.qodly,
      urls: {
        renderer: o.rendererPath || `${a}/$lib/renderer/`,
        debugger: `ws${n ? "s" : ""}://${t}/remoteDebugger`,
        lsp: `ws${n ? "s" : ""}://${t}/LSP`
      },
      isRestActive: o.isRESTActive
    };
  } catch (o) {
    return console.error(o), H3();
  }
}
async function W3(e4) {
  return await Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function KF(...e4) {
  return (await Promise.all(
    e4.map(
      (n) => W3({
        root: n,
        verb: Mi.GET_FOLDER
      })
    )
  )).map(
    ({ children: n }) => n.map(({ name: o, date: a, type: l }) => ({
      name: o,
      type: l,
      date: a,
      path: `${l}/${o}`
    }))
  ).flat();
}
function ZF(e4, t = {}) {
  const { sanitize: r = true } = t;
  return Je(`/rest/$getWebForm/${e4}`, {
    method: "GET"
  }).then((n) => {
    if (!(n != null && n.components) || !r)
      return n;
    const o = /* @__PURE__ */ new Map();
    return {
      ...n,
      // generate a unique id for webform loaders (fixes qs#397)
      // since the same webform loader might be used inside another webform loader
      components: Xe.entries(n.components).map(([a, l]) => {
        const c = a, { resolvedName: u } = l.type;
        if (u === "WebformLoader") {
          const d = Oi.generate();
          o.set(a, d), a = d;
        }
        return [a, l, c];
      }).reduce((a, [l, c, u]) => {
        var d;
        return c.nodes && (c.nodes = c.nodes.map((p) => o.get(p) || p)), c.linkedNodes && (c.linkedNodes = Xe.entries(c.linkedNodes).reduce(
          (p, [h, g]) => ({
            ...p,
            [h]: o.get(g) || g
          }),
          {}
        )), (d = c.props) != null && d.events && (c.props.events = c.props.events.map(
          (p) => (p.type === "navigation" && p.loader && (p.loader = o.get(p.loader) || p.loader), p)
        )), {
          ...a,
          [l]: {
            ...c,
            props: {
              ...c.props,
              __originalID: u
            }
          }
        };
      }, {})
    };
  });
}
function YF(e4) {
  return Je(At, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(e4)
  }).then((t) => ({
    ...t,
    content: [$t.METHOD, $t.CLASS].includes(
      t.type
    ) ? Ap(t.content) : t.content
  }));
}
function XF(e4) {
  return e4.type === "folder" ? Je(vc, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }) : Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function JF(e4) {
  return e4.type === "folder" ? (await Je(vc, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted : (await Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
function QF(e4) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function e9(e4) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function t9(e4) {
  return (await Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
async function r9(...e4) {
  return await Je(At, {
    method: "POST",
    body: JSON.stringify({
      verb: Mi.GET_FILES_INFO,
      files: e4
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function n9(e4) {
  const t = await Je("/api/login", {
    method: "POST",
    body: JSON.stringify({
      accessKey: e4
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return t.isLogged && t.success;
}
async function i9() {
  return await Je(
    "/rest/$catalog/$all?$metadata=full",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
}
async function o9(e4) {
  try {
    const t = false ? "/i18n/languages.json" : `/$lib/${e4 ? "studio" : "renderer"}/i18n/languages.json`, n = await (await fetch(t)).text(), { supported: o } = JSON.parse(n);
    return o;
  } catch {
    return [];
  }
}
async function a9({
  name: e4,
  path: t = "",
  root: r = "root",
  asText: n = false
}) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify({
      verb: "getFileContent",
      root: r,
      path: t,
      name: e4,
      asText: n
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  });
}
async function s9(e4 = {}) {
  try {
    return await bc({
      path: "shared_datasources.json",
      ...e4
    });
  } catch {
    return {};
  }
}
async function l9(e4 = {}) {
  try {
    return await bc({
      path: "shared_app_events.json",
      ...e4
    });
  } catch {
    return [];
  }
}
async function c9(e4 = {}) {
  try {
    return await bc({
      path: "shared_css.json",
      ...e4
    });
  } catch {
    return { classes: [] };
  }
}
async function u9(e4 = {}) {
  try {
    return await bc({
      path: "saved_conditions.json",
      ...e4
    });
  } catch {
    return { conditions: [] };
  }
}
async function f9() {
  try {
    return await Je(
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
async function d9() {
  try {
    return await (await fetch(`monaco_theme.json?t=${Date.now()}`)).json();
  } catch {
    return null;
  }
}
const B3 = Bx(), p9 = async (e4) => {
  const t = {
    verb: Mi.SET_FILE_CONTENT,
    asText: false,
    name: "shared_datasources.json",
    path: "",
    root: "shared",
    content: e4
  };
  return B3(async () => (await Je(At, {
    method: "POST",
    body: JSON.stringify(t),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e4));
}, j3 = Bx(), h9 = async (e4) => {
  const t = {
    verb: Mi.SET_FILE_CONTENT,
    asText: false,
    name: "shared_app_events.json",
    path: "",
    root: "shared",
    content: e4
  };
  return j3(async () => (await Je(At, {
    method: "POST",
    body: JSON.stringify(t),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e4));
}, a1 = async (e4) => {
  const t = await Je(At, {
    method: "POST",
    body: JSON.stringify({
      ...e4,
      verb: Mi.SET_FILE_CONTENT,
      root: Fx.ROOT
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), r = Wx(
    `${e4.path || "Sources"}/${e4.name}`
  );
  return {
    ...t,
    type: r,
    size: 0
  };
}, g9 = async (e4) => await a1({
  name: "crafted_components.json",
  path: wi.WEBFORMS,
  content: e4
});
function v9(e4) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function m9(e4) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function b9(e4) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function y9(e4) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((t) => Array.isArray(t) ? t : {
    ...t,
    content: ["4dm", "4qm", "4qs"].includes(t.ext) ? Ap(t.content) : t.content
  }).catch((t) => {
    var r, n;
    throw ((n = (r = t.data) == null ? void 0 : r.__ERROR[0]) == null ? void 0 : n.errCode) === 1839 && Pp(e4.path), t;
  });
}
function w9(e4) {
  return Je(At, {
    method: "POST",
    body: JSON.stringify(e4),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function U3(e4) {
  const t = new RegExp(/^\((.+)(?=\))/gi).exec(e4);
  return t !== null ? t[1] : "";
}
function V3(e4) {
  const t = new RegExp(/(->)(.*)/gi).exec(e4);
  if (t !== null)
    return t[0].replace("->", "");
  const r = /:([^)]*)$/.exec(e4);
  return r !== null ? `result : ${r[1].trim()}` : "";
}
function q3(e4) {
  const t = U3(e4).split(/[;,]/g).filter(Boolean).map((o) => {
    const a = o.split(":")[0].trim(), l = o.split(":")[1].trim();
    return {
      name: a,
      type: l
    };
  }), r = V3(e4), n = r ? {
    name: r.split(":")[0].trim(),
    type: r.split(":")[1].trim()
  } : {
    name: "result",
    type: "Variable"
  };
  return {
    params: t,
    result: n
  };
}
async function x9(e4, t) {
  const n = e4.split(".").pop();
  try {
    const o = await Je(At, {
      method: "POST",
      body: JSON.stringify({
        verb: "getFunctionContent",
        className: t,
        functionName: n
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    o.content = Ap(o.content);
    const { params: a, result: l } = q3(o.parameters);
    return {
      ...o,
      params: a,
      returns: l
    };
  } catch (o) {
    return console.error(o), {
      className: t,
      functionName: n,
      filePath: e4,
      content: "",
      params: []
    };
  }
}
var G3 = /* @__PURE__ */ ((e4) => (e4.STUDIO_LOADED = "UA-1-0", e4.WELCOME_TOUR_INIT = "UA-1-3", e4.WELCOME_TOUR_END = "UA-1-4", e4))(G3 || {});
function _9(e4, t) {
  fetch("/api/v1/activity", {
    body: JSON.stringify({
      AID: e4,
      ...t
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).catch((r) => {
  });
}
function S9(e4) {
  window.pagesense = window.pagesense || [], window.pagesense.push(["trackEvent", e4]);
}
var K3 = /* @__PURE__ */ ((e4) => (e4.LOCAL = "local", e4.SHARED = "shared", e4.THEME = "theme", e4))(K3 || {}), Z3 = /* @__PURE__ */ ((e4) => (e4[e4.METHOD = 1] = "METHOD", e4[e4.CLASS = 10] = "CLASS", e4))(Z3 || {}), Y3 = /* @__PURE__ */ ((e4) => (e4.WelCome = "WelCome", e4.ActionPanel = "ActionPanel", e4.SideBar = "SideBar", e4.Settings = "Settings", e4.Main = "Main", e4.Explorer = "Explorer", e4.Header = "Header", e4.ComponentList = "ComponentList", e4))(Y3 || {}), X3 = /* @__PURE__ */ ((e4) => (e4[e4.FILE_NOT_FOUND = 1839] = "FILE_NOT_FOUND", e4[e4.JSON_MALFORMED = 554] = "JSON_MALFORMED", e4[e4.JSON_MALFORMED_AT_LINE = 550] = "JSON_MALFORMED_AT_LINE", e4))(X3 || {});
const E9 = {
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
}, k9 = {
  Code: {
    key: "editors:code",
    config: { language: "4d", theme: "fd-dark" }
  },
  WebForm: {
    key: "editors:webforms"
  }
};

export { At as API_PREFIX, v4 as AppLoader, g5 as BaseCheckboxIcon, _4 as Checkbox, KN as ControlledSwitch, E9 as DATASOURCE_THEMES, rz as DatasourcesActions, az as DebuggerActions, v5 as DefaultCheckboxIcon, Mi as DesignerRequestVerb, i4 as Dialog, _C as DialogBody, G3 as EActivity, k9 as EDITOR, Y3 as EIDENTIFIERS, Ye as EPermissionType, X3 as ERROR_CODES, ut as ESubPermissionType, K3 as EWebFormStyleClassScope, vc as EXT_API_PREFIX, $t as FileFolderType, w4 as FloatingTooltip, wi as FolderRootPath, Fx as FolderRootType, A0 as HTTPError, uz as HTTP_HANDLERS_TAB_PATH, ql as IPreemptive, wz as IPublished, jx as IPublishedRestScope, C4 as IdentityProvider, tf as Incase, UP as IndentLines, fz as LOCALIZATION_TAB_PATH, jM as LogoSVG, oz as LspActions, Lx as MAX_FILE_NAME_LENGTH, U4 as MODEL_TAB_PATH, m4 as Modal, va as ModalCloseReason, lo as ModalColor, db as ModalIcons, bw as ModalType, dz as Mutex, zx as NameError, xC as Overlay, Df as PANEL_EXPANDED_HEIGHT, to as PANEL_INITIAL_HEIGHT, Ux as PERMISSIONS, x4 as Panel, uR as Portal, vF as PublishOptions, lz as ROLES_TAB_PATH, Hx as RemoteDebuggerMode, cz as SETTINGS_TAB_PATH, Yl as SHARED_API_PREFIX, Z3 as SourceCodeDescriptor, VP as Switcher, iz as TabEventsActions, J2 as Tip, l4 as TipsProvider, o4 as Toast, g4 as Tooltip, a4 as Tree, RP as TreeIcon, fy as TreeNode, tz as WebformActions, Vl as WebformEventsActions, b4 as ZoomComponent, t5 as ZoomLevel, fF as _isArrayDatasource, dF as _isObjectDatasource, Az as actionsToPrivs, bF as addAttributesToContent, QF as addFolder, PF as addPermission, SF as addPrivilegeIn, xF as allowed, pz as by, Y4 as byId, X4 as byPath, WF as callServerSideParser, VF as checkUpdates, kd as children, v9 as createFolder, kF as createPrivilege, LF as createRole, $4 as datasourcesSubject, F4 as debuggerSubject, JF as dropFile, t9 as dropFolder, J4 as exists, G4 as extractWebformName, yF as generateUUID, GF as getAppSettings, i9 as getCatalog, Q4 as getDatasourceId, H3 as getDefaultAppSettings, Rz as getDictByName, YF as getFile, a9 as getFileContent, q4 as getFileExtentionFromType, V4 as getFilenameAndTypeFromPath, r9 as getFilesInfo, W3 as getFolder, KF as getFolders, x9 as getFunctionContent, CF as getGraphData, Cz as getInheritedResources, d9 as getMonacoTheme, y9 as getNodeInfo, ni as getPrivilegeById, DF as getPromotions, Vx as getResourceFromType, u9 as getSavedConditions, l9 as getSharedAppEvents, c9 as getSharedCSS, s9 as getSharedDatasources, bc as getSharedResource, o9 as getSupportedLanguages, Wx as getTypeFromExtension, f9 as getUserPrivileges, ZF as getWebForm, _z as hasAttributesString, Je as http, W4 as i18nSubject, UF as initializeDefaultProjectFiles, qF as installUpdates, mz as isArrayDatasource, nF as isDataClassMethod, rF as isDataStoreMethod, pF as isDateDatasource, cF as isEntity, aF as isEntityDatasource, iF as isEntityMethod, uF as isEntitySelection, sF as isEntitySelectionDatasource, oF as isEntitySelectionMethod, eF as isObjectAttribute, bz as isObjectDatasource, tF as isRelatedAttribute, gz as isRelatedEntitiesAttribute, vz as isRelatedEntityAttribute, yz as isScalarDatasource, hz as isSimpleAttribute, lF as isSimpleDatasource, hF as loadDS, gF as loadI18n, _9 as log, n9 as login, z4 as lspSubject, b9 as moveItem, K4 as outBy, Z4 as outById, Tp as parents, mF as parseAttributes, AF as populateShallow, Bx as queue, Sz as removeAttributesString, m9 as removeItem, NF as removeMultiplePermissions, IF as removePermission, _F as removePrivilege, EF as removePrivilegeFrom, zF as removeRole, XF as renameFile, e9 as renameFolder, OF as renamePrivilege, MF as resetResources, RF as rolesToAPI, Ap as sanitizeContent, wF as sanitizeNameCY, Tz as sanitizePermissions, kz as sanitizePrivileges, TF as sanitizeRoles, w9 as saveContent, FF as saveRole, g9 as setCraftedComponents, a1 as setFileContent, h9 as setSharedAppEvents, p9 as setSharedSources, Oz as sortPrivileges, xz as stringifyAttributes, L4 as tabEventsSubject, H4 as tasksManagerSubject, nz as toastSubject, $F as togglePermission, S9 as trackEvent, HF as transformDates, Pp as tryCreateSharedResource, Vr as uniquePush, S4 as useDidMountEffect, N4 as useDoubleClick, M4 as useEnhancedState, R4 as useFeatureFlags, T4 as useForwardedRef, E4 as useHotkeys, P4 as useIdentity, k4 as useOutsideClick, O4 as usePrevious, I4 as useStateObject, A4 as useStateRef, Y2 as useTip, Op as validateName, B4 as validateServerSide, j4 as validateValue, Ed as webformEventsSubject, D4 as webformSubject };
