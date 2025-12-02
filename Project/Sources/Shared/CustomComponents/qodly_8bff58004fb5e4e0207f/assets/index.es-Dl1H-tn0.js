import { q as qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DU4PkoF4.js';
import { q as qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__, o, N } from './qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__-Ce2zDrQn.js';
import { q as qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__, b } from './qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__-CAf6bgMw.js';
import { at as R5, H as F5, ax as x3, l as Z4, F as V0, b2 as d4, cD as a1, cE as o2$1, X as J2$1, k as keyframes, w as withEmotionCache, L as C1, S as u4, T as ThemeContext, bw as L2$1 } from './index.es-Cv6aJD34.js';
import './qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__-DnKYtz-H.js';
import './_commonjsHelpers-BFTU3MAI.js';

var define_process_env_default = {};
var I_ = Object.defineProperty;
var yp = (e3) => {
  throw TypeError(e3);
};
var L_ = (e3, t, r) => t in e3 ? I_(e3, t, { enumerable: true, configurable: true, writable: true, value: r }) : e3[t] = r;
var ve = (e3, t, r) => L_(e3, typeof t != "symbol" ? t + "" : t, r), Qu = (e3, t, r) => t.has(e3) || yp("Cannot " + r);
var te = (e3, t, r) => (Qu(e3, t, "read from private field"), r ? r.call(e3) : t.get(e3)), xt = (e3, t, r) => t.has(e3) ? yp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e3) : t.set(e3, r), Xe = (e3, t, r, o) => (Qu(e3, t, "write to private field"), t.set(e3, r), r), $e = (e3, t, r) => (Qu(e3, t, "access private method"), r);
const X_ = ({ children: e3 }) => qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__.createPortal(e3, document.querySelector("body"));
var wp = function(t) {
  return t.reduce(function(r, o) {
    var a = o[0], s = o[1];
    return r[a] = s, r;
  }, {});
}, bp = typeof window < "u" && window.document && window.document.createElement ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useLayoutEffect : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect, Mt = "top", ar = "bottom", sr = "right", Ft = "left", cc = "auto", Po = [Mt, ar, sr, Ft], mi = "start", _o = "end", J_ = "clippingParents", Gg = "viewport", Wi = "popper", Q_ = "reference", Sp = /* @__PURE__ */ Po.reduce(function(e3, t) {
  return e3.concat([t + "-" + mi, t + "-" + _o]);
}, []), Kg = /* @__PURE__ */ [].concat(Po, [cc]).reduce(function(e3, t) {
  return e3.concat([t, t + "-" + mi, t + "-" + _o]);
}, []), eE = "beforeRead", tE = "read", rE = "afterRead", nE = "beforeMain", iE = "main", oE = "afterMain", aE = "beforeWrite", sE = "write", uE = "afterWrite", lE = [eE, tE, rE, nE, iE, oE, aE, sE, uE];
function Cr(e3) {
  return e3 ? (e3.nodeName || "").toLowerCase() : null;
}
function jt(e3) {
  if (e3 == null)
    return window;
  if (e3.toString() !== "[object Window]") {
    var t = e3.ownerDocument;
    return t && t.defaultView || window;
  }
  return e3;
}
function Wn(e3) {
  var t = jt(e3).Element;
  return e3 instanceof t || e3 instanceof Element;
}
function or(e3) {
  var t = jt(e3).HTMLElement;
  return e3 instanceof t || e3 instanceof HTMLElement;
}
function fc(e3) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = jt(e3).ShadowRoot;
  return e3 instanceof t || e3 instanceof ShadowRoot;
}
function cE(e3) {
  var t = e3.state;
  Object.keys(t.elements).forEach(function(r) {
    var o = t.styles[r] || {}, a = t.attributes[r] || {}, s = t.elements[r];
    !or(s) || !Cr(s) || (Object.assign(s.style, o), Object.keys(a).forEach(function(l) {
      var c = a[l];
      c === false ? s.removeAttribute(l) : s.setAttribute(l, c === true ? "" : c);
    }));
  });
}
function fE(e3) {
  var t = e3.state, r = {
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
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], s = t.attributes[o] || {}, l = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]), c = l.reduce(function(h, y) {
        return h[y] = "", h;
      }, {});
      !or(a) || !Cr(a) || (Object.assign(a.style, c), Object.keys(s).forEach(function(h) {
        a.removeAttribute(h);
      }));
    });
  };
}
const dE = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: cE,
  effect: fE,
  requires: ["computeStyles"]
};
function kr(e3) {
  return e3.split("-")[0];
}
var Dn = Math.max, rs = Math.min, yi = Math.round;
function Bl() {
  var e3 = navigator.userAgentData;
  return e3 != null && e3.brands && Array.isArray(e3.brands) ? e3.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Vg() {
  return !/^((?!chrome|android).)*safari/i.test(Bl());
}
function wi(e3, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var o = e3.getBoundingClientRect(), a = 1, s = 1;
  t && or(e3) && (a = e3.offsetWidth > 0 && yi(o.width) / e3.offsetWidth || 1, s = e3.offsetHeight > 0 && yi(o.height) / e3.offsetHeight || 1);
  var l = Wn(e3) ? jt(e3) : window, c = l.visualViewport, h = !Vg() && r, y = (o.left + (h && c ? c.offsetLeft : 0)) / a, v = (o.top + (h && c ? c.offsetTop : 0)) / s, g = o.width / a, p = o.height / s;
  return {
    width: g,
    height: p,
    top: v,
    right: y + g,
    bottom: v + p,
    left: y,
    x: y,
    y: v
  };
}
function dc(e3) {
  var t = wi(e3), r = e3.offsetWidth, o = e3.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e3.offsetLeft,
    y: e3.offsetTop,
    width: r,
    height: o
  };
}
function Yg(e3, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e3.contains(t))
    return true;
  if (r && fc(r)) {
    var o = t;
    do {
      if (o && e3.isSameNode(o))
        return true;
      o = o.parentNode || o.host;
    } while (o);
  }
  return false;
}
function Kr(e3) {
  return jt(e3).getComputedStyle(e3);
}
function pE(e3) {
  return ["table", "td", "th"].indexOf(Cr(e3)) >= 0;
}
function wn(e3) {
  return ((Wn(e3) ? e3.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e3.document
  )) || window.document).documentElement;
}
function gs(e3) {
  return Cr(e3) === "html" ? e3 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e3.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e3.parentNode || // DOM Element detected
    (fc(e3) ? e3.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wn(e3)
  );
}
function xp(e3) {
  return !or(e3) || // https://github.com/popperjs/popper-core/issues/837
  Kr(e3).position === "fixed" ? null : e3.offsetParent;
}
function hE(e3) {
  var t = /firefox/i.test(Bl()), r = /Trident/i.test(Bl());
  if (r && or(e3)) {
    var o = Kr(e3);
    if (o.position === "fixed")
      return null;
  }
  var a = gs(e3);
  for (fc(a) && (a = a.host); or(a) && ["html", "body"].indexOf(Cr(a)) < 0; ) {
    var s = Kr(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function ko(e3) {
  for (var t = jt(e3), r = xp(e3); r && pE(r) && Kr(r).position === "static"; )
    r = xp(r);
  return r && (Cr(r) === "html" || Cr(r) === "body" && Kr(r).position === "static") ? t : r || hE(e3) || t;
}
function pc(e3) {
  return ["top", "bottom"].indexOf(e3) >= 0 ? "x" : "y";
}
function yo(e3, t, r) {
  return Dn(e3, rs(t, r));
}
function gE(e3, t, r) {
  var o = yo(e3, t, r);
  return o > r ? r : o;
}
function Xg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Jg(e3) {
  return Object.assign({}, Xg(), e3);
}
function Qg(e3, t) {
  return t.reduce(function(r, o) {
    return r[o] = e3, r;
  }, {});
}
var vE = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, Jg(typeof t != "number" ? t : Qg(t, Po));
};
function mE(e3) {
  var t, r = e3.state, o = e3.name, a = e3.options, s = r.elements.arrow, l = r.modifiersData.popperOffsets, c = kr(r.placement), h = pc(c), y = [Ft, sr].indexOf(c) >= 0, v = y ? "height" : "width";
  if (!(!s || !l)) {
    var g = vE(a.padding, r), p = dc(s), w = h === "y" ? Mt : Ft, S = h === "y" ? ar : sr, f = r.rects.reference[v] + r.rects.reference[h] - l[h] - r.rects.popper[v], b = l[h] - r.rects.reference[h], d = ko(s), x = d ? h === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, _ = f / 2 - b / 2, R = g[w], A = x - p[v] - g[S], C = x / 2 - p[v] / 2 + _, W = yo(R, C, A), L = h;
    r.modifiersData[o] = (t = {}, t[L] = W, t.centerOffset = W - C, t);
  }
}
function yE(e3) {
  var t = e3.state, r = e3.options, o = r.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Yg(t.elements.popper, a) && (t.elements.arrow = a));
}
const wE = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: mE,
  effect: yE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function bi(e3) {
  return e3.split("-")[1];
}
var bE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function SE(e3, t) {
  var r = e3.x, o = e3.y, a = t.devicePixelRatio || 1;
  return {
    x: yi(r * a) / a || 0,
    y: yi(o * a) / a || 0
  };
}
function _p(e3) {
  var t, r = e3.popper, o = e3.popperRect, a = e3.placement, s = e3.variation, l = e3.offsets, c = e3.position, h = e3.gpuAcceleration, y = e3.adaptive, v = e3.roundOffsets, g = e3.isFixed, p = l.x, w = p === void 0 ? 0 : p, S = l.y, f = S === void 0 ? 0 : S, b = typeof v == "function" ? v({
    x: w,
    y: f
  }) : {
    x: w,
    y: f
  };
  w = b.x, f = b.y;
  var d = l.hasOwnProperty("x"), x = l.hasOwnProperty("y"), _ = Ft, R = Mt, A = window;
  if (y) {
    var C = ko(r), W = "clientHeight", L = "clientWidth";
    if (C === jt(r) && (C = wn(r), Kr(C).position !== "static" && c === "absolute" && (W = "scrollHeight", L = "scrollWidth")), C = C, a === Mt || (a === Ft || a === sr) && s === _o) {
      R = ar;
      var M = g && C === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[W]
      );
      f -= M - o.height, f *= h ? 1 : -1;
    }
    if (a === Ft || (a === Mt || a === ar) && s === _o) {
      _ = sr;
      var j = g && C === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[L]
      );
      w -= j - o.width, w *= h ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: c
  }, y && bE), I = v === true ? SE({
    x: w,
    y: f
  }, jt(r)) : {
    x: w,
    y: f
  };
  if (w = I.x, f = I.y, h) {
    var B;
    return Object.assign({}, D, (B = {}, B[R] = x ? "0" : "", B[_] = d ? "0" : "", B.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + w + "px, " + f + "px)" : "translate3d(" + w + "px, " + f + "px, 0)", B));
  }
  return Object.assign({}, D, (t = {}, t[R] = x ? f + "px" : "", t[_] = d ? w + "px" : "", t.transform = "", t));
}
function xE(e3) {
  var t = e3.state, r = e3.options, o = r.gpuAcceleration, a = o === void 0 ? true : o, s = r.adaptive, l = s === void 0 ? true : s, c = r.roundOffsets, h = c === void 0 ? true : c, y = {
    placement: kr(t.placement),
    variation: bi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, _p(Object.assign({}, y, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: l,
    roundOffsets: h
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, _p(Object.assign({}, y, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: h
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const _E = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: xE,
  data: {}
};
var Aa = {
  passive: true
};
function EE(e3) {
  var t = e3.state, r = e3.instance, o = e3.options, a = o.scroll, s = a === void 0 ? true : a, l = o.resize, c = l === void 0 ? true : l, h = jt(t.elements.popper), y = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && y.forEach(function(v) {
    v.addEventListener("scroll", r.update, Aa);
  }), c && h.addEventListener("resize", r.update, Aa), function() {
    s && y.forEach(function(v) {
      v.removeEventListener("scroll", r.update, Aa);
    }), c && h.removeEventListener("resize", r.update, Aa);
  };
}
const OE = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: EE,
  data: {}
};
var AE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ka(e3) {
  return e3.replace(/left|right|bottom|top/g, function(t) {
    return AE[t];
  });
}
var TE = {
  start: "end",
  end: "start"
};
function Ep(e3) {
  return e3.replace(/start|end/g, function(t) {
    return TE[t];
  });
}
function hc(e3) {
  var t = jt(e3), r = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: o
  };
}
function gc(e3) {
  return wi(wn(e3)).left + hc(e3).scrollLeft;
}
function RE(e3, t) {
  var r = jt(e3), o = wn(e3), a = r.visualViewport, s = o.clientWidth, l = o.clientHeight, c = 0, h = 0;
  if (a) {
    s = a.width, l = a.height;
    var y = Vg();
    (y || !y && t === "fixed") && (c = a.offsetLeft, h = a.offsetTop);
  }
  return {
    width: s,
    height: l,
    x: c + gc(e3),
    y: h
  };
}
function PE(e3) {
  var t, r = wn(e3), o = hc(e3), a = (t = e3.ownerDocument) == null ? void 0 : t.body, s = Dn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Dn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), c = -o.scrollLeft + gc(e3), h = -o.scrollTop;
  return Kr(a || r).direction === "rtl" && (c += Dn(r.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: l,
    x: c,
    y: h
  };
}
function vc(e3) {
  var t = Kr(e3), r = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + o);
}
function ev(e3) {
  return ["html", "body", "#document"].indexOf(Cr(e3)) >= 0 ? e3.ownerDocument.body : or(e3) && vc(e3) ? e3 : ev(gs(e3));
}
function wo(e3, t) {
  var r;
  t === void 0 && (t = []);
  var o = ev(e3), a = o === ((r = e3.ownerDocument) == null ? void 0 : r.body), s = jt(o), l = a ? [s].concat(s.visualViewport || [], vc(o) ? o : []) : o, c = t.concat(l);
  return a ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(wo(gs(l)))
  );
}
function Ul(e3) {
  return Object.assign({}, e3, {
    left: e3.x,
    top: e3.y,
    right: e3.x + e3.width,
    bottom: e3.y + e3.height
  });
}
function kE(e3, t) {
  var r = wi(e3, false, t === "fixed");
  return r.top = r.top + e3.clientTop, r.left = r.left + e3.clientLeft, r.bottom = r.top + e3.clientHeight, r.right = r.left + e3.clientWidth, r.width = e3.clientWidth, r.height = e3.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Op(e3, t, r) {
  return t === Gg ? Ul(RE(e3, r)) : Wn(t) ? kE(t, r) : Ul(PE(wn(e3)));
}
function CE(e3) {
  var t = wo(gs(e3)), r = ["absolute", "fixed"].indexOf(Kr(e3).position) >= 0, o = r && or(e3) ? ko(e3) : e3;
  return Wn(o) ? t.filter(function(a) {
    return Wn(a) && Yg(a, o) && Cr(a) !== "body";
  }) : [];
}
function $E(e3, t, r, o) {
  var a = t === "clippingParents" ? CE(e3) : [].concat(t), s = [].concat(a, [r]), l = s[0], c = s.reduce(function(h, y) {
    var v = Op(e3, y, o);
    return h.top = Dn(v.top, h.top), h.right = rs(v.right, h.right), h.bottom = rs(v.bottom, h.bottom), h.left = Dn(v.left, h.left), h;
  }, Op(e3, l, o));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function tv(e3) {
  var t = e3.reference, r = e3.element, o = e3.placement, a = o ? kr(o) : null, s = o ? bi(o) : null, l = t.x + t.width / 2 - r.width / 2, c = t.y + t.height / 2 - r.height / 2, h;
  switch (a) {
    case Mt:
      h = {
        x: l,
        y: t.y - r.height
      };
      break;
    case ar:
      h = {
        x: l,
        y: t.y + t.height
      };
      break;
    case sr:
      h = {
        x: t.x + t.width,
        y: c
      };
      break;
    case Ft:
      h = {
        x: t.x - r.width,
        y: c
      };
      break;
    default:
      h = {
        x: t.x,
        y: t.y
      };
  }
  var y = a ? pc(a) : null;
  if (y != null) {
    var v = y === "y" ? "height" : "width";
    switch (s) {
      case mi:
        h[y] = h[y] - (t[v] / 2 - r[v] / 2);
        break;
      case _o:
        h[y] = h[y] + (t[v] / 2 - r[v] / 2);
        break;
    }
  }
  return h;
}
function Eo(e3, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, a = o === void 0 ? e3.placement : o, s = r.strategy, l = s === void 0 ? e3.strategy : s, c = r.boundary, h = c === void 0 ? J_ : c, y = r.rootBoundary, v = y === void 0 ? Gg : y, g = r.elementContext, p = g === void 0 ? Wi : g, w = r.altBoundary, S = w === void 0 ? false : w, f = r.padding, b = f === void 0 ? 0 : f, d = Jg(typeof b != "number" ? b : Qg(b, Po)), x = p === Wi ? Q_ : Wi, _ = e3.rects.popper, R = e3.elements[S ? x : p], A = $E(Wn(R) ? R : R.contextElement || wn(e3.elements.popper), h, v, l), C = wi(e3.elements.reference), W = tv({
    reference: C,
    element: _,
    placement: a
  }), L = Ul(Object.assign({}, _, W)), M = p === Wi ? L : C, j = {
    top: A.top - M.top + d.top,
    bottom: M.bottom - A.bottom + d.bottom,
    left: A.left - M.left + d.left,
    right: M.right - A.right + d.right
  }, D = e3.modifiersData.offset;
  if (p === Wi && D) {
    var I = D[a];
    Object.keys(j).forEach(function(B) {
      var H = [sr, ar].indexOf(B) >= 0 ? 1 : -1, k = [Mt, ar].indexOf(B) >= 0 ? "y" : "x";
      j[B] += I[k] * H;
    });
  }
  return j;
}
function IE(e3, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, a = r.boundary, s = r.rootBoundary, l = r.padding, c = r.flipVariations, h = r.allowedAutoPlacements, y = h === void 0 ? Kg : h, v = bi(o), g = v ? c ? Sp : Sp.filter(function(S) {
    return bi(S) === v;
  }) : Po, p = g.filter(function(S) {
    return y.indexOf(S) >= 0;
  });
  p.length === 0 && (p = g);
  var w = p.reduce(function(S, f) {
    return S[f] = Eo(e3, {
      placement: f,
      boundary: a,
      rootBoundary: s,
      padding: l
    })[kr(f)], S;
  }, {});
  return Object.keys(w).sort(function(S, f) {
    return w[S] - w[f];
  });
}
function LE(e3) {
  if (kr(e3) === cc)
    return [];
  var t = Ka(e3);
  return [Ep(e3), t, Ep(t)];
}
function ME(e3) {
  var t = e3.state, r = e3.options, o = e3.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = r.mainAxis, s = a === void 0 ? true : a, l = r.altAxis, c = l === void 0 ? true : l, h = r.fallbackPlacements, y = r.padding, v = r.boundary, g = r.rootBoundary, p = r.altBoundary, w = r.flipVariations, S = w === void 0 ? true : w, f = r.allowedAutoPlacements, b = t.options.placement, d = kr(b), x = d === b, _ = h || (x || !S ? [Ka(b)] : LE(b)), R = [b].concat(_).reduce(function(re, le) {
      return re.concat(kr(le) === cc ? IE(t, {
        placement: le,
        boundary: v,
        rootBoundary: g,
        padding: y,
        flipVariations: S,
        allowedAutoPlacements: f
      }) : le);
    }, []), A = t.rects.reference, C = t.rects.popper, W = /* @__PURE__ */ new Map(), L = true, M = R[0], j = 0; j < R.length; j++) {
      var D = R[j], I = kr(D), B = bi(D) === mi, H = [Mt, ar].indexOf(I) >= 0, k = H ? "width" : "height", X = Eo(t, {
        placement: D,
        boundary: v,
        rootBoundary: g,
        altBoundary: p,
        padding: y
      }), V = H ? B ? sr : Ft : B ? ar : Mt;
      A[k] > C[k] && (V = Ka(V));
      var ee = Ka(V), fe = [];
      if (s && fe.push(X[I] <= 0), c && fe.push(X[V] <= 0, X[ee] <= 0), fe.every(function(re) {
        return re;
      })) {
        M = D, L = false;
        break;
      }
      W.set(D, fe);
    }
    if (L)
      for (var q = S ? 3 : 1, J = function(le) {
        var ce = R.find(function(me) {
          var ge = W.get(me);
          if (ge)
            return ge.slice(0, le).every(function(xe) {
              return xe;
            });
        });
        if (ce)
          return M = ce, "break";
      }, oe = q; oe > 0; oe--) {
        var se = J(oe);
        if (se === "break") break;
      }
    t.placement !== M && (t.modifiersData[o]._skip = true, t.placement = M, t.reset = true);
  }
}
const FE = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: ME,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function Ap(e3, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e3.top - t.height - r.y,
    right: e3.right - t.width + r.x,
    bottom: e3.bottom - t.height + r.y,
    left: e3.left - t.width - r.x
  };
}
function Tp(e3) {
  return [Mt, sr, ar, Ft].some(function(t) {
    return e3[t] >= 0;
  });
}
function NE(e3) {
  var t = e3.state, r = e3.name, o = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, l = Eo(t, {
    elementContext: "reference"
  }), c = Eo(t, {
    altBoundary: true
  }), h = Ap(l, o), y = Ap(c, a, s), v = Tp(h), g = Tp(y);
  t.modifiersData[r] = {
    referenceClippingOffsets: h,
    popperEscapeOffsets: y,
    isReferenceHidden: v,
    hasPopperEscaped: g
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": v,
    "data-popper-escaped": g
  });
}
const DE = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: NE
};
function zE(e3, t, r) {
  var o = kr(e3), a = [Ft, Mt].indexOf(o) >= 0 ? -1 : 1, s = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e3
  })) : r, l = s[0], c = s[1];
  return l = l || 0, c = (c || 0) * a, [Ft, sr].indexOf(o) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  };
}
function WE(e3) {
  var t = e3.state, r = e3.options, o = e3.name, a = r.offset, s = a === void 0 ? [0, 0] : a, l = Kg.reduce(function(v, g) {
    return v[g] = zE(g, t.rects, s), v;
  }, {}), c = l[t.placement], h = c.x, y = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += h, t.modifiersData.popperOffsets.y += y), t.modifiersData[o] = l;
}
const BE = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: WE
};
function UE(e3) {
  var t = e3.state, r = e3.name;
  t.modifiersData[r] = tv({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const HE = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: UE,
  data: {}
};
function qE(e3) {
  return e3 === "x" ? "y" : "x";
}
function jE(e3) {
  var t = e3.state, r = e3.options, o = e3.name, a = r.mainAxis, s = a === void 0 ? true : a, l = r.altAxis, c = l === void 0 ? false : l, h = r.boundary, y = r.rootBoundary, v = r.altBoundary, g = r.padding, p = r.tether, w = p === void 0 ? true : p, S = r.tetherOffset, f = S === void 0 ? 0 : S, b = Eo(t, {
    boundary: h,
    rootBoundary: y,
    padding: g,
    altBoundary: v
  }), d = kr(t.placement), x = bi(t.placement), _ = !x, R = pc(d), A = qE(R), C = t.modifiersData.popperOffsets, W = t.rects.reference, L = t.rects.popper, M = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, j = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (C) {
    if (s) {
      var B, H = R === "y" ? Mt : Ft, k = R === "y" ? ar : sr, X = R === "y" ? "height" : "width", V = C[R], ee = V + b[H], fe = V - b[k], q = w ? -L[X] / 2 : 0, J = x === mi ? W[X] : L[X], oe = x === mi ? -L[X] : -W[X], se = t.elements.arrow, re = w && se ? dc(se) : {
        width: 0,
        height: 0
      }, le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xg(), ce = le[H], me = le[k], ge = yo(0, W[X], re[X]), xe = _ ? W[X] / 2 - q - ge - ce - j.mainAxis : J - ge - ce - j.mainAxis, Oe = _ ? -W[X] / 2 + q + ge + me + j.mainAxis : oe + ge + me + j.mainAxis, Ge = t.elements.arrow && ko(t.elements.arrow), ne = Ge ? R === "y" ? Ge.clientTop || 0 : Ge.clientLeft || 0 : 0, yt = (B = D == null ? void 0 : D[R]) != null ? B : 0, ct = V + xe - yt - ne, wr = V + Oe - yt, Mo = yo(w ? rs(ee, ct) : ee, V, w ? Dn(fe, wr) : fe);
      C[R] = Mo, I[R] = Mo - V;
    }
    if (c) {
      var Zt, Fo = R === "x" ? Mt : Ft, Cs = R === "x" ? ar : sr, Nt = C[A], wt = A === "y" ? "height" : "width", Xr = Nt + b[Fo], bn = Nt - b[Cs], Ei = [Mt, Ft].indexOf(d) !== -1, Jr = (Zt = D == null ? void 0 : D[A]) != null ? Zt : 0, No = Ei ? Xr : Nt - W[wt] - L[wt] - Jr + j.altAxis, Qr = Ei ? Nt + W[wt] + L[wt] - Jr - j.altAxis : bn, Ir = w && Ei ? gE(No, Nt, Qr) : yo(w ? No : Xr, Nt, w ? Qr : bn);
      C[A] = Ir, I[A] = Ir - Nt;
    }
    t.modifiersData[o] = I;
  }
}
const ZE = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: jE,
  requiresIfExists: ["offset"]
};
function GE(e3) {
  return {
    scrollLeft: e3.scrollLeft,
    scrollTop: e3.scrollTop
  };
}
function KE(e3) {
  return e3 === jt(e3) || !or(e3) ? hc(e3) : GE(e3);
}
function VE(e3) {
  var t = e3.getBoundingClientRect(), r = yi(t.width) / e3.offsetWidth || 1, o = yi(t.height) / e3.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function YE(e3, t, r) {
  r === void 0 && (r = false);
  var o = or(t), a = or(t) && VE(t), s = wn(t), l = wi(e3, a, r), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((Cr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vc(s)) && (c = KE(t)), or(t) ? (h = wi(t, true), h.x += t.clientLeft, h.y += t.clientTop) : s && (h.x = gc(s))), {
    x: l.left + c.scrollLeft - h.x,
    y: l.top + c.scrollTop - h.y,
    width: l.width,
    height: l.height
  };
}
function XE(e3) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
  e3.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    r.add(s.name);
    var l = [].concat(s.requires || [], s.requiresIfExists || []);
    l.forEach(function(c) {
      if (!r.has(c)) {
        var h = t.get(c);
        h && a(h);
      }
    }), o.push(s);
  }
  return e3.forEach(function(s) {
    r.has(s.name) || a(s);
  }), o;
}
function JE(e3) {
  var t = XE(e3);
  return lE.reduce(function(r, o) {
    return r.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function QE(e3) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e3());
      });
    })), t;
  };
}
function eO(e3) {
  var t = e3.reduce(function(r, o) {
    var a = r[o.name];
    return r[o.name] = a ? Object.assign({}, a, o, {
      options: Object.assign({}, a.options, o.options),
      data: Object.assign({}, a.data, o.data)
    }) : o, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var Rp = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Pp() {
  for (var e3 = arguments.length, t = new Array(e3), r = 0; r < e3; r++)
    t[r] = arguments[r];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function tO(e3) {
  e3 === void 0 && (e3 = {});
  var t = e3, r = t.defaultModifiers, o = r === void 0 ? [] : r, a = t.defaultOptions, s = a === void 0 ? Rp : a;
  return function(c, h, y) {
    y === void 0 && (y = s);
    var v = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Rp, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: h
      },
      attributes: {},
      styles: {}
    }, g = [], p = false, w = {
      state: v,
      setOptions: function(d) {
        var x = typeof d == "function" ? d(v.options) : d;
        f(), v.options = Object.assign({}, s, v.options, x), v.scrollParents = {
          reference: Wn(c) ? wo(c) : c.contextElement ? wo(c.contextElement) : [],
          popper: wo(h)
        };
        var _ = JE(eO([].concat(o, v.options.modifiers)));
        return v.orderedModifiers = _.filter(function(R) {
          return R.enabled;
        }), S(), w.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var d = v.elements, x = d.reference, _ = d.popper;
          if (Pp(x, _)) {
            v.rects = {
              reference: YE(x, ko(_), v.options.strategy === "fixed"),
              popper: dc(_)
            }, v.reset = false, v.placement = v.options.placement, v.orderedModifiers.forEach(function(j) {
              return v.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var R = 0; R < v.orderedModifiers.length; R++) {
              if (v.reset === true) {
                v.reset = false, R = -1;
                continue;
              }
              var A = v.orderedModifiers[R], C = A.fn, W = A.options, L = W === void 0 ? {} : W, M = A.name;
              typeof C == "function" && (v = C({
                state: v,
                options: L,
                name: M,
                instance: w
              }) || v);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: QE(function() {
        return new Promise(function(b) {
          w.forceUpdate(), b(v);
        });
      }),
      destroy: function() {
        f(), p = true;
      }
    };
    if (!Pp(c, h))
      return w;
    w.setOptions(y).then(function(b) {
      !p && y.onFirstUpdate && y.onFirstUpdate(b);
    });
    function S() {
      v.orderedModifiers.forEach(function(b) {
        var d = b.name, x = b.options, _ = x === void 0 ? {} : x, R = b.effect;
        if (typeof R == "function") {
          var A = R({
            state: v,
            name: d,
            instance: w,
            options: _
          }), C = function() {
          };
          g.push(A || C);
        }
      });
    }
    function f() {
      g.forEach(function(b) {
        return b();
      }), g = [];
    }
    return w;
  };
}
var rO = [OE, HE, _E, dE, BE, FE, ZE, wE, DE], nO = /* @__PURE__ */ tO({
  defaultModifiers: rO
}), Ta = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rv(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
var tl, kp;
function iO() {
  if (kp) return tl;
  kp = 1;
  var e3 = typeof Element < "u", t = typeof Map == "function", r = typeof Set == "function", o = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function a(s, l) {
    if (s === l) return true;
    if (s && l && typeof s == "object" && typeof l == "object") {
      if (s.constructor !== l.constructor) return false;
      var c, h, y;
      if (Array.isArray(s)) {
        if (c = s.length, c != l.length) return false;
        for (h = c; h-- !== 0; )
          if (!a(s[h], l[h])) return false;
        return true;
      }
      var v;
      if (t && s instanceof Map && l instanceof Map) {
        if (s.size !== l.size) return false;
        for (v = s.entries(); !(h = v.next()).done; )
          if (!l.has(h.value[0])) return false;
        for (v = s.entries(); !(h = v.next()).done; )
          if (!a(h.value[1], l.get(h.value[0]))) return false;
        return true;
      }
      if (r && s instanceof Set && l instanceof Set) {
        if (s.size !== l.size) return false;
        for (v = s.entries(); !(h = v.next()).done; )
          if (!l.has(h.value[0])) return false;
        return true;
      }
      if (o && ArrayBuffer.isView(s) && ArrayBuffer.isView(l)) {
        if (c = s.length, c != l.length) return false;
        for (h = c; h-- !== 0; )
          if (s[h] !== l[h]) return false;
        return true;
      }
      if (s.constructor === RegExp) return s.source === l.source && s.flags === l.flags;
      if (s.valueOf !== Object.prototype.valueOf && typeof s.valueOf == "function" && typeof l.valueOf == "function") return s.valueOf() === l.valueOf();
      if (s.toString !== Object.prototype.toString && typeof s.toString == "function" && typeof l.toString == "function") return s.toString() === l.toString();
      if (y = Object.keys(s), c = y.length, c !== Object.keys(l).length) return false;
      for (h = c; h-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(l, y[h])) return false;
      if (e3 && s instanceof Element) return false;
      for (h = c; h-- !== 0; )
        if (!((y[h] === "_owner" || y[h] === "__v" || y[h] === "__o") && s.$$typeof) && !a(s[y[h]], l[y[h]]))
          return false;
      return true;
    }
    return s !== s && l !== l;
  }
  return tl = function(l, c) {
    try {
      return a(l, c);
    } catch (h) {
      if ((h.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw h;
    }
  }, tl;
}
var oO = iO();
const aO = /* @__PURE__ */ rv(oO);
var sO = [], nv = function(t, r, o) {
  o === void 0 && (o = {});
  var a = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), s = {
    onFirstUpdate: o.onFirstUpdate,
    placement: o.placement || "bottom",
    strategy: o.strategy || "absolute",
    modifiers: o.modifiers || sO
  }, l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState({
    styles: {
      popper: {
        position: s.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), c = l[0], h = l[1], y = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function(w) {
        var S = w.state, f = Object.keys(S.elements);
        qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__.flushSync(function() {
          h({
            styles: wp(f.map(function(b) {
              return [b, S.styles[b] || {}];
            })),
            attributes: wp(f.map(function(b) {
              return [b, S.attributes[b]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []), v = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(function() {
    var p = {
      onFirstUpdate: s.onFirstUpdate,
      placement: s.placement,
      strategy: s.strategy,
      modifiers: [].concat(s.modifiers, [y, {
        name: "applyStyles",
        enabled: false
      }])
    };
    return aO(a.current, p) ? a.current || p : (a.current = p, p);
  }, [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, y]), g = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef();
  return bp(function() {
    g.current && g.current.setOptions(v);
  }, [v]), bp(function() {
    if (!(t == null || r == null)) {
      var p = o.createPopper || nO, w = p(t, r, v);
      return g.current = w, function() {
        w.destroy(), g.current = null;
      };
    }
  }, [t, r, o.createPopper]), {
    state: g.current ? g.current.state : null,
    styles: c.styles,
    attributes: c.attributes,
    update: g.current ? g.current.update : null,
    forceUpdate: g.current ? g.current.forceUpdate : null
  };
};
const uO = (e3) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 z-[1999]", onClick: e3.onClick }), lO = o.forwardRef(({ children: e3, style: t, attributes: r }, o) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: {
      ...t,
      zIndex: 2e3
    },
    ...r,
    ref: o,
    className: "w-60 rounded border rounded border border-grey-50 bg-grey-900 shadow-2xl",
    "data-cy": "dialogBody",
    children: e3
  }
)), fI = ({
  referenceElement: e3,
  placement: t,
  isOpen: r,
  children: o$1,
  onClose: a
}) => {
  const [s, l] = o.useState(null), { styles: c, attributes: h } = nv(e3, s, {
    placement: t || "bottom-start"
  }), y = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(() => {
    a && a();
  }, [a]);
  return r ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(X_, { children: [
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(uO, { onClick: () => y() }),
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      lO,
      {
        ref: l,
        style: c.popper,
        attributes: h.popper,
        children: o$1
      }
    )
  ] }) : null;
};
var rl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Cp;
function iv() {
  return Cp || (Cp = 1, (function(e3) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (s = a(s, o(c)));
        }
        return s;
      }
      function o(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var l = "";
        for (var c in s)
          t.call(s, c) && s[c] && (l = a(l, c));
        return l;
      }
      function a(s, l) {
        return l ? s ? s + " " + l : s + l : s;
      }
      e3.exports ? (r.default = r, e3.exports = r) : window.classNames = r;
    })();
  })(rl)), rl.exports;
}
var cO = iv();
const nt = /* @__PURE__ */ rv(cO);
function In() {
  return In = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e3[o] = r[o]);
    }
    return e3;
  }, In.apply(this, arguments);
}
const fO = ["children", "options"], $p = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e3, t) => (e3[t.toLowerCase()] = t, e3), { class: "className", for: "htmlFor" }), Ip = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, dO = ["style", "script", "pre"], pO = ["src", "href", "data", "formAction", "srcDoc", "action"], hO = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, gO = /\n{2,}$/, Lp = /^(\s*>[\s\S]*?)(?=\n\n|$)/, vO = /^ *> ?/gm, mO = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, yO = /^ {2,}\n/, wO = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, Mp = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, Fp = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, bO = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, SO = /^(?:\n *)*\n/, xO = /\r\n?/g, _O = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, EO = /^\[\^([^\]]+)]/, OO = /\f/g, AO = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, TO = /^\s*?\[(x|\s)\]/, Np = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Dp = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, zp = /^([^\n]+)\n *(=|-)\2{2,} *\n/, nl = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, RO = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Wp = /^<!--[\s\S]*?(?:-->)/, PO = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, il = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, kO = /^\{.*\}$/, CO = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, $O = /^<([^ >]+[:@\/][^ >]+)>/, IO = /-([a-z])?/gi, Bp = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, LO = /^[^\n]+(?:  \n|\n{2,})/, MO = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, FO = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, NO = /^\[([^\]]*)\] ?\[([^\]]*)\]/, DO = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, zO = /\t/g, WO = /(^ *\||\| *$)/g, BO = /^ *:-+: *$/, UO = /^ *:-+ *$/, HO = /^ *-+: *$/, vs = (e3) => `(?=[\\s\\S]+?\\1${e3 ? "\\1" : ""})`, ms = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", qO = RegExp(`^([*_])\\1${vs(1)}${ms}\\1\\1(?!\\1)`), jO = RegExp(`^([*_])${vs(0)}${ms}\\1(?!\\1)`), ZO = RegExp(`^(==)${vs(0)}${ms}\\1`), GO = RegExp(`^(~~)${vs(0)}${ms}\\1`), KO = /^(:[a-zA-Z0-9-_]+:)/, VO = /^\\([^0-9A-Za-z\s])/, YO = /\\([^0-9A-Za-z\s])/g, XO = /^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/, JO = /^\n+/, QO = /^([ \t]*)/, eA = /(?:^|\n)( *)$/, mc = "(?:\\d+\\.)", yc = "(?:[*+-])";
function ov(e3) {
  return "( *)(" + (e3 === 1 ? mc : yc) + ") +";
}
const av = ov(1), sv = ov(2);
function uv(e3) {
  return RegExp("^" + (e3 === 1 ? av : sv));
}
const tA = uv(1), rA = uv(2);
function lv(e3) {
  return RegExp("^" + (e3 === 1 ? av : sv) + "[^\\n]*(?:\\n(?!\\1" + (e3 === 1 ? mc : yc) + " )[^\\n]*)*(\\n|$)", "gm");
}
const nA = lv(1), iA = lv(2);
function cv(e3) {
  const t = e3 === 1 ? mc : yc;
  return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
const fv = cv(1), dv = cv(2);
function Up(e3, t) {
  const r = t === 1, o = r ? fv : dv, a = r ? nA : iA, s = r ? tA : rA;
  return { t: (l) => s.test(l), o: Si(function(l, c) {
    const h = eA.exec(c.prevCapture);
    return h && (c.list || !c.inline && !c.simple) ? o.exec(l = h[1] + l) : null;
  }), i: 1, u(l, c, h) {
    const y = r ? +l[2] : void 0, v = l[0].replace(gO, `
`).match(a);
    let g = false;
    return { items: v.map(function(p, w) {
      const S = s.exec(p)[0].length, f = RegExp("^ {1," + S + "}", "gm"), b = p.replace(f, "").replace(s, ""), d = w === v.length - 1, x = b.indexOf(`

`) !== -1 || d && g;
      g = x;
      const _ = h.inline, R = h.list;
      let A;
      h.list = true, x ? (h.inline = false, A = bo(b) + `

`) : (h.inline = true, A = bo(b));
      const C = c(A, h);
      return h.inline = _, h.list = R, C;
    }), ordered: r, start: y };
  }, l: (l, c, h) => e3(l.ordered ? "ol" : "ul", { key: h.key, start: l.type === "20" ? l.start : void 0 }, l.items.map(function(y, v) {
    return e3("li", { key: v }, c(y, h));
  })) };
}
const oA = RegExp(`^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), aA = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
function Hp(e3) {
  return typeof e3 == "string";
}
function bo(e3) {
  let t = e3.length;
  for (; t > 0 && e3[t - 1] <= " "; ) t--;
  return e3.slice(0, t);
}
function Va(e3, t) {
  return e3.startsWith(t);
}
function sA(e3, t, r) {
  if (Array.isArray(r)) {
    for (let o = 0; o < r.length; o++) if (Va(e3, r[o])) return true;
    return false;
  }
  return r(e3, t);
}
function Bi(e3) {
  return e3.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function uA(e3) {
  return HO.test(e3) ? "right" : BO.test(e3) ? "center" : UO.test(e3) ? "left" : null;
}
function qp(e3, t, r, o) {
  const a = r.inTable;
  r.inTable = true;
  let s = [[]], l = "";
  function c() {
    if (!l) return;
    const h = s[s.length - 1];
    h.push.apply(h, t(l, r)), l = "";
  }
  return e3.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((h, y, v) => {
    h.trim() === "|" && (c(), o) ? y !== 0 && y !== v.length - 1 && s.push([]) : l += h;
  }), c(), r.inTable = a, s;
}
function lA(e3, t, r) {
  r.inline = true;
  const o = e3[2] ? e3[2].replace(WO, "").split("|").map(uA) : [], a = e3[3] ? (function(l, c, h) {
    return l.trim().split(`
`).map(function(y) {
      return qp(y, c, h, true);
    });
  })(e3[3], t, r) : [], s = qp(e3[1], t, r, !!a.length);
  return r.inline = false, a.length ? { align: o, cells: a, header: s, type: "25" } : { children: s, type: "21" };
}
function jp(e3, t) {
  return e3.align[t] == null ? {} : { textAlign: e3.align[t] };
}
function Si(e3) {
  return e3.inline = 1, e3;
}
function kn(e3) {
  return Si(function(t, r) {
    return r.inline ? e3.exec(t) : null;
  });
}
function cn(e3) {
  return Si(function(t, r) {
    return r.inline || r.simple ? e3.exec(t) : null;
  });
}
function Hr(e3) {
  return function(t, r) {
    return r.inline || r.simple ? null : e3.exec(t);
  };
}
function Ra(e3) {
  return Si(function(t) {
    return e3.exec(t);
  });
}
const cA = /(javascript|vbscript|data(?!:image)):/i;
function fA(e3) {
  try {
    const t = decodeURIComponent(e3).replace(/[^A-Za-z0-9/:]/g, "");
    if (cA.test(t)) return null;
  } catch {
    return null;
  }
  return e3;
}
function _r(e3) {
  return e3 && e3.replace(YO, "$1");
}
function Ya(e3, t, r) {
  const o = r.inline || false, a = r.simple || false;
  r.inline = true, r.simple = true;
  const s = e3(t, r);
  return r.inline = o, r.simple = a, s;
}
function dA(e3, t, r) {
  const o = r.inline || false, a = r.simple || false;
  r.inline = false, r.simple = true;
  const s = e3(t, r);
  return r.inline = o, r.simple = a, s;
}
function pA(e3, t, r) {
  const o = r.inline || false;
  r.inline = false;
  const a = e3(t, r);
  return r.inline = o, a;
}
const ol = (e3, t, r) => ({ children: Ya(t, e3[2], r) });
function al() {
  return {};
}
function sl() {
  return null;
}
function hA(...e3) {
  return e3.filter(Boolean).join(" ");
}
function ul(e3, t, r) {
  let o = e3;
  const a = t.split(".");
  for (; a.length && (o = o[a[0]], o !== void 0); ) a.shift();
  return o || r;
}
function gA(e3 = "", t = {}) {
  t.overrides = t.overrides || {}, t.namedCodesToUnicode = t.namedCodesToUnicode ? In({}, Ip, t.namedCodesToUnicode) : Ip;
  const r = t.slugify || Bi, o = t.sanitizer || fA, a = t.createElement || qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement, s = [Lp, Mp, Fp, t.enforceAtxHeadings ? Dp : Np, zp, Bp, fv, dv], l = [...s, LO, nl, Wp, il];
  function c(d, x) {
    for (let _ = 0; _ < d.length; _++) if (d[_].test(x)) return true;
    return false;
  }
  function h(d, x, ..._) {
    const R = ul(t.overrides, d + ".props", {});
    return a((function(A, C) {
      const W = ul(C, A);
      return W ? typeof W == "function" || typeof W == "object" && "render" in W ? W : ul(C, A + ".component", A) : A;
    })(d, t.overrides), In({}, x, R, { className: hA(x == null ? void 0 : x.className, R.className) || void 0 }), ..._);
  }
  function y(d) {
    d = d.replace(AO, "");
    let x = false;
    t.forceInline ? x = true : t.forceBlock || (x = DO.test(d) === false);
    const _ = f(S(x ? d : bo(d).replace(JO, "") + `

`, { inline: x }));
    for (; Hp(_[_.length - 1]) && !_[_.length - 1].trim(); ) _.pop();
    if (t.wrapper === null) return _;
    const R = t.wrapper || (x ? "span" : "div");
    let A;
    if (_.length > 1 || t.forceWrapper) A = _;
    else {
      if (_.length === 1) return A = _[0], typeof A == "string" ? h("span", { key: "outer" }, A) : A;
      A = null;
    }
    return a(R, { key: "outer" }, A);
  }
  function v(d, x) {
    if (!x || !x.trim()) return null;
    const _ = x.match(hO);
    return _ ? _.reduce(function(R, A) {
      const C = A.indexOf("=");
      if (C !== -1) {
        const W = (function(D) {
          return D.indexOf("-") !== -1 && D.match(PO) === null && (D = D.replace(IO, function(I, B) {
            return B.toUpperCase();
          })), D;
        })(A.slice(0, C)).trim(), L = (function(D) {
          const I = D[0];
          return (I === '"' || I === "'") && D.length >= 2 && D[D.length - 1] === I ? D.slice(1, -1) : D;
        })(A.slice(C + 1).trim()), M = $p[W] || W;
        if (M === "ref") return R;
        const j = R[M] = (function(D, I, B, H) {
          return I === "style" ? (function(k) {
            const X = [];
            let V = "", ee = false, fe = false, q = "";
            if (!k) return X;
            for (let oe = 0; oe < k.length; oe++) {
              const se = k[oe];
              if (se !== '"' && se !== "'" || ee || (fe ? se === q && (fe = false, q = "") : (fe = true, q = se)), se === "(" && V.endsWith("url") ? ee = true : se === ")" && ee && (ee = false), se !== ";" || fe || ee) V += se;
              else {
                const re = V.trim();
                if (re) {
                  const le = re.indexOf(":");
                  if (le > 0) {
                    const ce = re.slice(0, le).trim(), me = re.slice(le + 1).trim();
                    X.push([ce, me]);
                  }
                }
                V = "";
              }
            }
            const J = V.trim();
            if (J) {
              const oe = J.indexOf(":");
              if (oe > 0) {
                const se = J.slice(0, oe).trim(), re = J.slice(oe + 1).trim();
                X.push([se, re]);
              }
            }
            return X;
          })(B).reduce(function(k, [X, V]) {
            return k[X.replace(/(-[a-z])/g, (ee) => ee[1].toUpperCase())] = H(V, D, X), k;
          }, {}) : pO.indexOf(I) !== -1 ? H(_r(B), D, I) : (B.match(kO) && (B = _r(B.slice(1, B.length - 1))), B === "true" || B !== "false" && B);
        })(d, W, L, o);
        typeof j == "string" && (nl.test(j) || il.test(j)) && (R[M] = y(j.trim()));
      } else A !== "style" && (R[$p[A] || A] = true);
      return R;
    }, {}) : null;
  }
  const g = [], p = {}, w = { 0: { t: [">"], o: Hr(Lp), i: 1, u(d, x, _) {
    const [, R, A] = d[0].replace(vO, "").match(mO);
    return { alert: R, children: x(A, _) };
  }, l(d, x, _) {
    const R = { key: _.key };
    return d.alert && (R.className = "markdown-alert-" + r(d.alert.toLowerCase(), Bi), d.children.unshift({ attrs: {}, children: [{ type: "27", text: d.alert }], noInnerParse: true, type: "11", tag: "header" })), h("blockquote", R, x(d.children, _));
  } }, 1: { t: ["  "], o: Ra(yO), i: 1, u: al, l: (d, x, _) => h("br", { key: _.key }) }, 2: { t: ["--", "__", "**", "- ", "* ", "_ "], o: Hr(wO), i: 1, u: al, l: (d, x, _) => h("hr", { key: _.key }) }, 3: { t: ["    "], o: Hr(Fp), i: 0, u: (d) => ({ lang: void 0, text: _r(bo(d[0].replace(/^ {4}/gm, ""))) }), l: (d, x, _) => h("pre", { key: _.key }, h("code", In({}, d.attrs, { className: d.lang ? "lang-" + d.lang : "" }), d.text)) }, 4: { t: ["```", "~~~"], o: Hr(Mp), i: 0, u: (d) => ({ attrs: v("code", d[3] || ""), lang: d[2] || void 0, text: d[4], type: "3" }) }, 5: { t: ["`"], o: cn(bO), i: 3, u: (d) => ({ text: _r(d[2]) }), l: (d, x, _) => h("code", { key: _.key }, d.text) }, 6: { t: ["[^"], o: Hr(_O), i: 0, u: (d) => (g.push({ footnote: d[2], identifier: d[1] }), {}), l: sl }, 7: { t: ["[^"], o: kn(EO), i: 1, u: (d) => ({ target: "#" + r(d[1], Bi), text: d[1] }), l: (d, x, _) => h("a", { key: _.key, href: o(d.target, "a", "href") }, h("sup", { key: _.key }, d.text)) }, 8: { t: ["[ ]", "[x]"], o: kn(TO), i: 1, u: (d) => ({ completed: d[1].toLowerCase() === "x" }), l: (d, x, _) => h("input", { checked: d.completed, key: _.key, readOnly: true, type: "checkbox" }) }, 9: { t: ["#"], o: Hr(t.enforceAtxHeadings ? Dp : Np), i: 1, u: (d, x, _) => ({ children: Ya(x, d[2], _), id: r(d[2], Bi), level: d[1].length }), l: (d, x, _) => h("h" + d.level, { id: d.id, key: _.key }, x(d.children, _)) }, 10: { t: (d) => {
    const x = d.indexOf(`
`);
    return x > 0 && x < d.length - 1 && (d[x + 1] === "=" || d[x + 1] === "-");
  }, o: Hr(zp), i: 0, u: (d, x, _) => ({ children: Ya(x, d[1], _), level: d[2] === "=" ? 1 : 2, type: "9" }) }, 11: { t: ["<"], o: Ra(nl), i: 1, u(d, x, _) {
    const [, R] = d[3].match(QO), A = RegExp("^" + R, "gm"), C = d[3].replace(A, ""), W = c(l, C) ? pA : Ya, L = d[1].toLowerCase(), M = dO.indexOf(L) !== -1, j = (M ? L : d[1]).trim(), D = { attrs: v(j, d[2]), noInnerParse: M, tag: j };
    if (_.inAnchor = _.inAnchor || L === "a", M) D.text = d[3];
    else {
      const I = _.inHTML;
      _.inHTML = true, D.children = W(x, C, _), _.inHTML = I;
    }
    return _.inAnchor = false, D;
  }, l: (d, x, _) => h(d.tag, In({ key: _.key }, d.attrs), d.text || (d.children ? x(d.children, _) : "")) }, 13: { t: ["<"], o: Ra(il), i: 1, u(d) {
    const x = d[1].trim();
    return { attrs: v(x, d[2] || ""), tag: x };
  }, l: (d, x, _) => h(d.tag, In({}, d.attrs, { key: _.key })) }, 12: { t: ["<!--"], o: Ra(Wp), i: 1, u: () => ({}), l: sl }, 14: { t: ["!["], o: cn(aA), i: 1, u: (d) => ({ alt: _r(d[1]), target: _r(d[2]), title: _r(d[3]) }), l: (d, x, _) => h("img", { key: _.key, alt: d.alt || void 0, title: d.title || void 0, src: o(d.target, "img", "src") }) }, 15: { t: ["["], o: kn(oA), i: 3, u: (d, x, _) => ({ children: dA(x, d[1], _), target: _r(d[2]), title: _r(d[3]) }), l: (d, x, _) => h("a", { key: _.key, href: o(d.target, "a", "href"), title: d.title }, x(d.children, _)) }, 16: { t: ["<"], o: kn($O), i: 0, u(d) {
    let x = d[1], _ = false;
    return x.indexOf("@") !== -1 && x.indexOf("//") === -1 && (_ = true, x = x.replace("mailto:", "")), { children: [{ text: x, type: "27" }], target: _ ? "mailto:" + x : x, type: "15" };
  } }, 17: { t: (d, x) => !x.inAnchor && !t.disableAutoLink && (Va(d, "http://") || Va(d, "https://")), o: kn(CO), i: 0, u: (d) => ({ children: [{ text: d[1], type: "27" }], target: d[1], title: void 0, type: "15" }) }, 20: Up(h, 1), 33: Up(h, 2), 19: { t: [`
`], o: Hr(SO), i: 3, u: al, l: () => `
` }, 21: { o: Si(function(d, x) {
    if (x.inline || x.simple || x.inHTML && d.indexOf(`

`) === -1 && x.prevCapture.indexOf(`

`) === -1) return null;
    let _ = "", R = 0;
    for (; ; ) {
      const C = d.indexOf(`
`, R), W = d.slice(R, C === -1 ? void 0 : C + 1);
      if (c(s, W) || (_ += W, C === -1 || !W.trim())) break;
      R = C + 1;
    }
    const A = bo(_);
    return A === "" ? null : [_, , A];
  }), i: 3, u: ol, l: (d, x, _) => h("p", { key: _.key }, x(d.children, _)) }, 22: { t: ["["], o: kn(MO), i: 0, u: (d) => (p[d[1]] = { target: d[2], title: d[4] }, {}), l: sl }, 23: { t: ["!["], o: cn(FO), i: 0, u: (d) => ({ alt: d[1] ? _r(d[1]) : void 0, ref: d[2] }), l: (d, x, _) => p[d.ref] ? h("img", { key: _.key, alt: d.alt, src: o(p[d.ref].target, "img", "src"), title: p[d.ref].title }) : null }, 24: { t: (d) => d[0] === "[" && d.indexOf("](") === -1, o: kn(NO), i: 0, u: (d, x, _) => ({ children: x(d[1], _), fallbackChildren: d[0], ref: d[2] }), l: (d, x, _) => p[d.ref] ? h("a", { key: _.key, href: o(p[d.ref].target, "a", "href"), title: p[d.ref].title }, x(d.children, _)) : h("span", { key: _.key }, d.fallbackChildren) }, 25: { t: ["|"], o: Hr(Bp), i: 1, u: lA, l(d, x, _) {
    const R = d;
    return h("table", { key: _.key }, h("thead", null, h("tr", null, R.header.map(function(A, C) {
      return h("th", { key: C, style: jp(R, C) }, x(A, _));
    }))), h("tbody", null, R.cells.map(function(A, C) {
      return h("tr", { key: C }, A.map(function(W, L) {
        return h("td", { key: L, style: jp(R, L) }, x(W, _));
      }));
    })));
  } }, 27: { o: Si(function(d, x) {
    let _;
    return Va(d, ":") && (_ = KO.exec(d)), _ || XO.exec(d);
  }), i: 4, u(d) {
    const x = d[0];
    return { text: x.indexOf("&") === -1 ? x : x.replace(RO, (_, R) => t.namedCodesToUnicode[R] || _) };
  }, l: (d) => d.text }, 28: { t: ["**", "__"], o: cn(qO), i: 2, u: (d, x, _) => ({ children: x(d[2], _) }), l: (d, x, _) => h("strong", { key: _.key }, x(d.children, _)) }, 29: { t: (d) => {
    const x = d[0];
    return (x === "*" || x === "_") && d[1] !== x;
  }, o: cn(jO), i: 3, u: (d, x, _) => ({ children: x(d[2], _) }), l: (d, x, _) => h("em", { key: _.key }, x(d.children, _)) }, 30: { t: ["\\"], o: cn(VO), i: 1, u: (d) => ({ text: d[1], type: "27" }) }, 31: { t: ["=="], o: cn(ZO), i: 3, u: ol, l: (d, x, _) => h("mark", { key: _.key }, x(d.children, _)) }, 32: { t: ["~~"], o: cn(GO), i: 3, u: ol, l: (d, x, _) => h("del", { key: _.key }, x(d.children, _)) } };
  t.disableParsingRawHTML === true && (delete w[11], delete w[13]);
  const S = (function(d) {
    var x = Object.keys(d);
    function _(R, A) {
      var C = [];
      if (A.prevCapture = A.prevCapture || "", R.trim()) for (; R; ) for (var W = 0; W < x.length; ) {
        var L = x[W], M = d[L];
        if (!M.t || sA(R, A, M.t)) {
          var j = M.o(R, A);
          if (j && j[0]) {
            R = R.substring(j[0].length);
            var D = M.u(j, _, A);
            A.prevCapture += j[0], D.type || (D.type = L), C.push(D);
            break;
          }
          W++;
        } else W++;
      }
      return A.prevCapture = "", C;
    }
    return x.sort(function(R, A) {
      return d[R].i - d[A].i || (R < A ? -1 : 1);
    }), function(R, A) {
      return _((function(C) {
        return C.replace(xO, `
`).replace(OO, "").replace(zO, "    ");
      })(R), A);
    };
  })(w), f = /* @__PURE__ */ (function(d, x) {
    return function _(R, A = {}) {
      if (Array.isArray(R)) {
        const C = A.key, W = [];
        let L = false;
        for (let M = 0; M < R.length; M++) {
          A.key = M;
          const j = _(R[M], A), D = Hp(j);
          D && L ? W[W.length - 1] += j : j !== null && W.push(j), L = D;
        }
        return A.key = C, W;
      }
      return (function(C, W, L) {
        const M = d[C.type].l;
        return x ? x(() => M(C, W, L), C, W, L) : M(C, W, L);
      })(R, _, A);
    };
  })(w, t.renderRule), b = y(e3);
  return g.length ? h("div", null, b, h("footer", { key: "footer" }, g.map(function(d) {
    return h("div", { id: r(d.identifier, Bi), key: d.identifier }, d.identifier, f(S(d.footnote, { inline: true })));
  }))) : b;
}
const ns = (e3) => {
  let { children: t = "", options: r } = e3, o = (function(a, s) {
    if (a == null) return {};
    var l, c, h = {}, y = Object.keys(a);
    for (c = 0; c < y.length; c++) s.indexOf(l = y[c]) >= 0 || (h[l] = a[l]);
    return h;
  })(e3, fO);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.cloneElement(gA(t, r), o);
}, Zp = ({ kind: e3, customIcon: t }) => {
  if (t)
    return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(t, { className: "mr-1 h-6 w-6 flex-none" });
  switch (e3) {
    case "error":
    case "danger":
      return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(u4, { className: "flex-none h-6 w-6" });
    case "info":
      return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5, { className: "flex-none h-6 w-6" }) });
    case "warning":
      return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(x3, { className: "flex-none h-6 w-6" }) });
    case "message":
      return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(R5, { className: "flex-none h-6 w-6" }) });
    default:
      return null;
  }
}, dI = ({
  id: e3,
  onClose: t,
  kind: r,
  message: o,
  markdown: a,
  customIcon: s
}) => {
  const l = ({ className: c } = {}) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      onClick: t,
      className: nt("flex items-center justify-center p-1", c),
      children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(C1, { className: "h-5 w-5 font-thin stroke-current" })
    }
  );
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: nt(
        "relative flex items-center rounded-lg py-2 px-4 font-semibold",
        {
          "bg-yellow-100 text-yellow-400": r === "warning",
          "bg-red-200 text-red-500": r === "danger" || r === "error",
          "bg-primary-light text-primary": r === "info",
          "bg-green-200 text-green-500": r === "message"
        }
      ),
      children: typeof o == "string" ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "w-full flex items-center justify-between gap-x-3", children: [
        /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Zp, { kind: r, customIcon: s }),
          a ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ns, { children: o }) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: o })
        ] }),
        l()
      ] }) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-2 justify-between", children: o.filter((c) => c.messages.length > 0).map((c) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
          c.title && /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "flex items-center gap-1 font-bold capitalize", children: [
            /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Zp, { kind: r, customIcon: s }),
            /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { children: [
              c.title,
              " :"
            ] })
          ] }),
          /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "ul",
            {
              className: nt("list-disc", {
                "px-12": c.title,
                "px-6": !c.title
              }),
              children: c.messages.map((h) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("li", { children: a ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ns, { children: h }) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: h }) }))
            }
          )
        ] })) }),
        l({
          className: "absolute top-1 right-1"
        })
      ] })
    },
    e3
  );
}, vA = ({
  children: e3,
  size: t,
  className: r,
  ...o
}) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    style: { "--width": `${t || 24}px` },
    className: nt("h-6 flex items-center pr-1 w-[--width]", r),
    ...o,
    children: e3
  }
);
var ll = {}, Ui = {}, Pa = {}, Gp;
function pv() {
  if (Gp) return Pa;
  Gp = 1, Object.defineProperty(Pa, "__esModule", {
    value: true
  }), Pa.default = r;
  let e3;
  const t = new Uint8Array(16);
  function r() {
    if (!e3 && (e3 = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !e3))
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return e3(t);
  }
  return Pa;
}
var li = {}, Hi = {}, qi = {}, Kp;
function mA() {
  if (Kp) return qi;
  Kp = 1, Object.defineProperty(qi, "__esModule", {
    value: true
  }), qi.default = void 0;
  var e3 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  return qi.default = e3, qi;
}
var Vp;
function ys() {
  if (Vp) return Hi;
  Vp = 1, Object.defineProperty(Hi, "__esModule", {
    value: true
  }), Hi.default = void 0;
  var e3 = t(/* @__PURE__ */ mA());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    return typeof a == "string" && e3.default.test(a);
  }
  var o = r;
  return Hi.default = o, Hi;
}
var Yp;
function ws() {
  if (Yp) return li;
  Yp = 1, Object.defineProperty(li, "__esModule", {
    value: true
  }), li.default = void 0, li.unsafeStringify = o;
  var e3 = t(/* @__PURE__ */ ys());
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  const r = [];
  for (let l = 0; l < 256; ++l)
    r.push((l + 256).toString(16).slice(1));
  function o(l, c = 0) {
    return r[l[c + 0]] + r[l[c + 1]] + r[l[c + 2]] + r[l[c + 3]] + "-" + r[l[c + 4]] + r[l[c + 5]] + "-" + r[l[c + 6]] + r[l[c + 7]] + "-" + r[l[c + 8]] + r[l[c + 9]] + "-" + r[l[c + 10]] + r[l[c + 11]] + r[l[c + 12]] + r[l[c + 13]] + r[l[c + 14]] + r[l[c + 15]];
  }
  function a(l, c = 0) {
    const h = o(l, c);
    if (!(0, e3.default)(h))
      throw TypeError("Stringified UUID is invalid");
    return h;
  }
  var s = a;
  return li.default = s, li;
}
var Xp;
function yA() {
  if (Xp) return Ui;
  Xp = 1, Object.defineProperty(Ui, "__esModule", {
    value: true
  }), Ui.default = void 0;
  var e3 = r(/* @__PURE__ */ pv()), t = /* @__PURE__ */ ws();
  function r(y) {
    return y && y.__esModule ? y : { default: y };
  }
  let o, a, s = 0, l = 0;
  function c(y, v, g) {
    let p = v && g || 0;
    const w = v || new Array(16);
    y = y || {};
    let S = y.node || o, f = y.clockseq !== void 0 ? y.clockseq : a;
    if (S == null || f == null) {
      const A = y.random || (y.rng || e3.default)();
      S == null && (S = o = [A[0] | 1, A[1], A[2], A[3], A[4], A[5]]), f == null && (f = a = (A[6] << 8 | A[7]) & 16383);
    }
    let b = y.msecs !== void 0 ? y.msecs : Date.now(), d = y.nsecs !== void 0 ? y.nsecs : l + 1;
    const x = b - s + (d - l) / 1e4;
    if (x < 0 && y.clockseq === void 0 && (f = f + 1 & 16383), (x < 0 || b > s) && y.nsecs === void 0 && (d = 0), d >= 1e4)
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    s = b, l = d, a = f, b += 122192928e5;
    const _ = ((b & 268435455) * 1e4 + d) % 4294967296;
    w[p++] = _ >>> 24 & 255, w[p++] = _ >>> 16 & 255, w[p++] = _ >>> 8 & 255, w[p++] = _ & 255;
    const R = b / 4294967296 * 1e4 & 268435455;
    w[p++] = R >>> 8 & 255, w[p++] = R & 255, w[p++] = R >>> 24 & 15 | 16, w[p++] = R >>> 16 & 255, w[p++] = f >>> 8 | 128, w[p++] = f & 255;
    for (let A = 0; A < 6; ++A)
      w[p + A] = S[A];
    return v || (0, t.unsafeStringify)(w);
  }
  var h = c;
  return Ui.default = h, Ui;
}
var ji = {}, fn = {}, Zi = {}, Jp;
function hv() {
  if (Jp) return Zi;
  Jp = 1, Object.defineProperty(Zi, "__esModule", {
    value: true
  }), Zi.default = void 0;
  var e3 = t(/* @__PURE__ */ ys());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e3.default)(a))
      throw TypeError("Invalid UUID");
    let s;
    const l = new Uint8Array(16);
    return l[0] = (s = parseInt(a.slice(0, 8), 16)) >>> 24, l[1] = s >>> 16 & 255, l[2] = s >>> 8 & 255, l[3] = s & 255, l[4] = (s = parseInt(a.slice(9, 13), 16)) >>> 8, l[5] = s & 255, l[6] = (s = parseInt(a.slice(14, 18), 16)) >>> 8, l[7] = s & 255, l[8] = (s = parseInt(a.slice(19, 23), 16)) >>> 8, l[9] = s & 255, l[10] = (s = parseInt(a.slice(24, 36), 16)) / 1099511627776 & 255, l[11] = s / 4294967296 & 255, l[12] = s >>> 24 & 255, l[13] = s >>> 16 & 255, l[14] = s >>> 8 & 255, l[15] = s & 255, l;
  }
  var o = r;
  return Zi.default = o, Zi;
}
var Qp;
function gv() {
  if (Qp) return fn;
  Qp = 1, Object.defineProperty(fn, "__esModule", {
    value: true
  }), fn.URL = fn.DNS = void 0, fn.default = l;
  var e3 = /* @__PURE__ */ ws(), t = r(/* @__PURE__ */ hv());
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function o(c) {
    c = unescape(encodeURIComponent(c));
    const h = [];
    for (let y = 0; y < c.length; ++y)
      h.push(c.charCodeAt(y));
    return h;
  }
  const a = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
  fn.DNS = a;
  const s = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
  fn.URL = s;
  function l(c, h, y) {
    function v(g, p, w, S) {
      var f;
      if (typeof g == "string" && (g = o(g)), typeof p == "string" && (p = (0, t.default)(p)), ((f = p) === null || f === void 0 ? void 0 : f.length) !== 16)
        throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
      let b = new Uint8Array(16 + g.length);
      if (b.set(p), b.set(g, p.length), b = y(b), b[6] = b[6] & 15 | h, b[8] = b[8] & 63 | 128, w) {
        S = S || 0;
        for (let d = 0; d < 16; ++d)
          w[S + d] = b[d];
        return w;
      }
      return (0, e3.unsafeStringify)(b);
    }
    try {
      v.name = c;
    } catch {
    }
    return v.DNS = a, v.URL = s, v;
  }
  return fn;
}
var Gi = {}, eh;
function wA() {
  if (eh) return Gi;
  eh = 1, Object.defineProperty(Gi, "__esModule", {
    value: true
  }), Gi.default = void 0;
  function e3(w) {
    if (typeof w == "string") {
      const S = unescape(encodeURIComponent(w));
      w = new Uint8Array(S.length);
      for (let f = 0; f < S.length; ++f)
        w[f] = S.charCodeAt(f);
    }
    return t(o(a(w), w.length * 8));
  }
  function t(w) {
    const S = [], f = w.length * 32, b = "0123456789abcdef";
    for (let d = 0; d < f; d += 8) {
      const x = w[d >> 5] >>> d % 32 & 255, _ = parseInt(b.charAt(x >>> 4 & 15) + b.charAt(x & 15), 16);
      S.push(_);
    }
    return S;
  }
  function r(w) {
    return (w + 64 >>> 9 << 4) + 14 + 1;
  }
  function o(w, S) {
    w[S >> 5] |= 128 << S % 32, w[r(S) - 1] = S;
    let f = 1732584193, b = -271733879, d = -1732584194, x = 271733878;
    for (let _ = 0; _ < w.length; _ += 16) {
      const R = f, A = b, C = d, W = x;
      f = h(f, b, d, x, w[_], 7, -680876936), x = h(x, f, b, d, w[_ + 1], 12, -389564586), d = h(d, x, f, b, w[_ + 2], 17, 606105819), b = h(b, d, x, f, w[_ + 3], 22, -1044525330), f = h(f, b, d, x, w[_ + 4], 7, -176418897), x = h(x, f, b, d, w[_ + 5], 12, 1200080426), d = h(d, x, f, b, w[_ + 6], 17, -1473231341), b = h(b, d, x, f, w[_ + 7], 22, -45705983), f = h(f, b, d, x, w[_ + 8], 7, 1770035416), x = h(x, f, b, d, w[_ + 9], 12, -1958414417), d = h(d, x, f, b, w[_ + 10], 17, -42063), b = h(b, d, x, f, w[_ + 11], 22, -1990404162), f = h(f, b, d, x, w[_ + 12], 7, 1804603682), x = h(x, f, b, d, w[_ + 13], 12, -40341101), d = h(d, x, f, b, w[_ + 14], 17, -1502002290), b = h(b, d, x, f, w[_ + 15], 22, 1236535329), f = y(f, b, d, x, w[_ + 1], 5, -165796510), x = y(x, f, b, d, w[_ + 6], 9, -1069501632), d = y(d, x, f, b, w[_ + 11], 14, 643717713), b = y(b, d, x, f, w[_], 20, -373897302), f = y(f, b, d, x, w[_ + 5], 5, -701558691), x = y(x, f, b, d, w[_ + 10], 9, 38016083), d = y(d, x, f, b, w[_ + 15], 14, -660478335), b = y(b, d, x, f, w[_ + 4], 20, -405537848), f = y(f, b, d, x, w[_ + 9], 5, 568446438), x = y(x, f, b, d, w[_ + 14], 9, -1019803690), d = y(d, x, f, b, w[_ + 3], 14, -187363961), b = y(b, d, x, f, w[_ + 8], 20, 1163531501), f = y(f, b, d, x, w[_ + 13], 5, -1444681467), x = y(x, f, b, d, w[_ + 2], 9, -51403784), d = y(d, x, f, b, w[_ + 7], 14, 1735328473), b = y(b, d, x, f, w[_ + 12], 20, -1926607734), f = v(f, b, d, x, w[_ + 5], 4, -378558), x = v(x, f, b, d, w[_ + 8], 11, -2022574463), d = v(d, x, f, b, w[_ + 11], 16, 1839030562), b = v(b, d, x, f, w[_ + 14], 23, -35309556), f = v(f, b, d, x, w[_ + 1], 4, -1530992060), x = v(x, f, b, d, w[_ + 4], 11, 1272893353), d = v(d, x, f, b, w[_ + 7], 16, -155497632), b = v(b, d, x, f, w[_ + 10], 23, -1094730640), f = v(f, b, d, x, w[_ + 13], 4, 681279174), x = v(x, f, b, d, w[_], 11, -358537222), d = v(d, x, f, b, w[_ + 3], 16, -722521979), b = v(b, d, x, f, w[_ + 6], 23, 76029189), f = v(f, b, d, x, w[_ + 9], 4, -640364487), x = v(x, f, b, d, w[_ + 12], 11, -421815835), d = v(d, x, f, b, w[_ + 15], 16, 530742520), b = v(b, d, x, f, w[_ + 2], 23, -995338651), f = g(f, b, d, x, w[_], 6, -198630844), x = g(x, f, b, d, w[_ + 7], 10, 1126891415), d = g(d, x, f, b, w[_ + 14], 15, -1416354905), b = g(b, d, x, f, w[_ + 5], 21, -57434055), f = g(f, b, d, x, w[_ + 12], 6, 1700485571), x = g(x, f, b, d, w[_ + 3], 10, -1894986606), d = g(d, x, f, b, w[_ + 10], 15, -1051523), b = g(b, d, x, f, w[_ + 1], 21, -2054922799), f = g(f, b, d, x, w[_ + 8], 6, 1873313359), x = g(x, f, b, d, w[_ + 15], 10, -30611744), d = g(d, x, f, b, w[_ + 6], 15, -1560198380), b = g(b, d, x, f, w[_ + 13], 21, 1309151649), f = g(f, b, d, x, w[_ + 4], 6, -145523070), x = g(x, f, b, d, w[_ + 11], 10, -1120210379), d = g(d, x, f, b, w[_ + 2], 15, 718787259), b = g(b, d, x, f, w[_ + 9], 21, -343485551), f = s(f, R), b = s(b, A), d = s(d, C), x = s(x, W);
    }
    return [f, b, d, x];
  }
  function a(w) {
    if (w.length === 0)
      return [];
    const S = w.length * 8, f = new Uint32Array(r(S));
    for (let b = 0; b < S; b += 8)
      f[b >> 5] |= (w[b / 8] & 255) << b % 32;
    return f;
  }
  function s(w, S) {
    const f = (w & 65535) + (S & 65535);
    return (w >> 16) + (S >> 16) + (f >> 16) << 16 | f & 65535;
  }
  function l(w, S) {
    return w << S | w >>> 32 - S;
  }
  function c(w, S, f, b, d, x) {
    return s(l(s(s(S, w), s(b, x)), d), f);
  }
  function h(w, S, f, b, d, x, _) {
    return c(S & f | ~S & b, w, S, d, x, _);
  }
  function y(w, S, f, b, d, x, _) {
    return c(S & b | f & ~b, w, S, d, x, _);
  }
  function v(w, S, f, b, d, x, _) {
    return c(S ^ f ^ b, w, S, d, x, _);
  }
  function g(w, S, f, b, d, x, _) {
    return c(f ^ (S | ~b), w, S, d, x, _);
  }
  var p = e3;
  return Gi.default = p, Gi;
}
var th;
function bA() {
  if (th) return ji;
  th = 1, Object.defineProperty(ji, "__esModule", {
    value: true
  }), ji.default = void 0;
  var e3 = r(/* @__PURE__ */ gv()), t = r(/* @__PURE__ */ wA());
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var a = (0, e3.default)("v3", 48, t.default);
  return ji.default = a, ji;
}
var Ki = {}, Vi = {}, rh;
function SA() {
  if (rh) return Vi;
  rh = 1, Object.defineProperty(Vi, "__esModule", {
    value: true
  }), Vi.default = void 0;
  var t = {
    randomUUID: typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  };
  return Vi.default = t, Vi;
}
var nh;
function xA() {
  if (nh) return Ki;
  nh = 1, Object.defineProperty(Ki, "__esModule", {
    value: true
  }), Ki.default = void 0;
  var e3 = o(/* @__PURE__ */ SA()), t = o(/* @__PURE__ */ pv()), r = /* @__PURE__ */ ws();
  function o(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function a(l, c, h) {
    if (e3.default.randomUUID && !c && !l)
      return e3.default.randomUUID();
    l = l || {};
    const y = l.random || (l.rng || t.default)();
    if (y[6] = y[6] & 15 | 64, y[8] = y[8] & 63 | 128, c) {
      h = h || 0;
      for (let v = 0; v < 16; ++v)
        c[h + v] = y[v];
      return c;
    }
    return (0, r.unsafeStringify)(y);
  }
  var s = a;
  return Ki.default = s, Ki;
}
var Yi = {}, Xi = {}, ih;
function _A() {
  if (ih) return Xi;
  ih = 1, Object.defineProperty(Xi, "__esModule", {
    value: true
  }), Xi.default = void 0;
  function e3(a, s, l, c) {
    switch (a) {
      case 0:
        return s & l ^ ~s & c;
      case 1:
        return s ^ l ^ c;
      case 2:
        return s & l ^ s & c ^ l & c;
      case 3:
        return s ^ l ^ c;
    }
  }
  function t(a, s) {
    return a << s | a >>> 32 - s;
  }
  function r(a) {
    const s = [1518500249, 1859775393, 2400959708, 3395469782], l = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof a == "string") {
      const v = unescape(encodeURIComponent(a));
      a = [];
      for (let g = 0; g < v.length; ++g)
        a.push(v.charCodeAt(g));
    } else Array.isArray(a) || (a = Array.prototype.slice.call(a));
    a.push(128);
    const c = a.length / 4 + 2, h = Math.ceil(c / 16), y = new Array(h);
    for (let v = 0; v < h; ++v) {
      const g = new Uint32Array(16);
      for (let p = 0; p < 16; ++p)
        g[p] = a[v * 64 + p * 4] << 24 | a[v * 64 + p * 4 + 1] << 16 | a[v * 64 + p * 4 + 2] << 8 | a[v * 64 + p * 4 + 3];
      y[v] = g;
    }
    y[h - 1][14] = (a.length - 1) * 8 / Math.pow(2, 32), y[h - 1][14] = Math.floor(y[h - 1][14]), y[h - 1][15] = (a.length - 1) * 8 & 4294967295;
    for (let v = 0; v < h; ++v) {
      const g = new Uint32Array(80);
      for (let d = 0; d < 16; ++d)
        g[d] = y[v][d];
      for (let d = 16; d < 80; ++d)
        g[d] = t(g[d - 3] ^ g[d - 8] ^ g[d - 14] ^ g[d - 16], 1);
      let p = l[0], w = l[1], S = l[2], f = l[3], b = l[4];
      for (let d = 0; d < 80; ++d) {
        const x = Math.floor(d / 20), _ = t(p, 5) + e3(x, w, S, f) + b + s[x] + g[d] >>> 0;
        b = f, f = S, S = t(w, 30) >>> 0, w = p, p = _;
      }
      l[0] = l[0] + p >>> 0, l[1] = l[1] + w >>> 0, l[2] = l[2] + S >>> 0, l[3] = l[3] + f >>> 0, l[4] = l[4] + b >>> 0;
    }
    return [l[0] >> 24 & 255, l[0] >> 16 & 255, l[0] >> 8 & 255, l[0] & 255, l[1] >> 24 & 255, l[1] >> 16 & 255, l[1] >> 8 & 255, l[1] & 255, l[2] >> 24 & 255, l[2] >> 16 & 255, l[2] >> 8 & 255, l[2] & 255, l[3] >> 24 & 255, l[3] >> 16 & 255, l[3] >> 8 & 255, l[3] & 255, l[4] >> 24 & 255, l[4] >> 16 & 255, l[4] >> 8 & 255, l[4] & 255];
  }
  var o = r;
  return Xi.default = o, Xi;
}
var oh;
function EA() {
  if (oh) return Yi;
  oh = 1, Object.defineProperty(Yi, "__esModule", {
    value: true
  }), Yi.default = void 0;
  var e3 = r(/* @__PURE__ */ gv()), t = r(/* @__PURE__ */ _A());
  function r(s) {
    return s && s.__esModule ? s : { default: s };
  }
  var a = (0, e3.default)("v5", 80, t.default);
  return Yi.default = a, Yi;
}
var Ji = {}, ah;
function OA() {
  if (ah) return Ji;
  ah = 1, Object.defineProperty(Ji, "__esModule", {
    value: true
  }), Ji.default = void 0;
  var e3 = "00000000-0000-0000-0000-000000000000";
  return Ji.default = e3, Ji;
}
var Qi = {}, sh;
function AA() {
  if (sh) return Qi;
  sh = 1, Object.defineProperty(Qi, "__esModule", {
    value: true
  }), Qi.default = void 0;
  var e3 = t(/* @__PURE__ */ ys());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a) {
    if (!(0, e3.default)(a))
      throw TypeError("Invalid UUID");
    return parseInt(a.slice(14, 15), 16);
  }
  var o = r;
  return Qi.default = o, Qi;
}
var uh;
function TA() {
  return uh || (uh = 1, (function(e3) {
    Object.defineProperty(e3, "__esModule", {
      value: true
    }), Object.defineProperty(e3, "NIL", {
      enumerable: true,
      get: function() {
        return s.default;
      }
    }), Object.defineProperty(e3, "parse", {
      enumerable: true,
      get: function() {
        return y.default;
      }
    }), Object.defineProperty(e3, "stringify", {
      enumerable: true,
      get: function() {
        return h.default;
      }
    }), Object.defineProperty(e3, "v1", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e3, "v3", {
      enumerable: true,
      get: function() {
        return r.default;
      }
    }), Object.defineProperty(e3, "v4", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    }), Object.defineProperty(e3, "v5", {
      enumerable: true,
      get: function() {
        return a.default;
      }
    }), Object.defineProperty(e3, "validate", {
      enumerable: true,
      get: function() {
        return c.default;
      }
    }), Object.defineProperty(e3, "version", {
      enumerable: true,
      get: function() {
        return l.default;
      }
    });
    var t = v(/* @__PURE__ */ yA()), r = v(/* @__PURE__ */ bA()), o = v(/* @__PURE__ */ xA()), a = v(/* @__PURE__ */ EA()), s = v(/* @__PURE__ */ OA()), l = v(/* @__PURE__ */ AA()), c = v(/* @__PURE__ */ ys()), h = v(/* @__PURE__ */ ws()), y = v(/* @__PURE__ */ hv());
    function v(g) {
      return g && g.__esModule ? g : { default: g };
    }
  })(ll)), ll;
}
var cl, lh;
function RA() {
  if (lh) return cl;
  lh = 1;
  function e3(t, r) {
    if (!t || !r || !t.length || !r.length)
      throw new Error("Bad alphabet");
    this.srcAlphabet = t, this.dstAlphabet = r;
  }
  return e3.prototype.convert = function(t) {
    var r, o, a, s = {}, l = this.srcAlphabet.length, c = this.dstAlphabet.length, h = t.length, y = typeof t == "string" ? "" : [];
    if (!this.isValid(t))
      throw new Error('Number "' + t + '" contains of non-alphabetic digits (' + this.srcAlphabet + ")");
    if (this.srcAlphabet === this.dstAlphabet)
      return t;
    for (r = 0; r < h; r++)
      s[r] = this.srcAlphabet.indexOf(t[r]);
    do {
      for (o = 0, a = 0, r = 0; r < h; r++)
        o = o * l + s[r], o >= c ? (s[a++] = parseInt(o / c, 10), o = o % c) : a > 0 && (s[a++] = 0);
      h = a, y = this.dstAlphabet.slice(o, o + 1).concat(y);
    } while (a !== 0);
    return y;
  }, e3.prototype.isValid = function(t) {
    for (var r = 0; r < t.length; ++r)
      if (this.srcAlphabet.indexOf(t[r]) === -1)
        return false;
    return true;
  }, cl = e3, cl;
}
var fl, ch;
function PA() {
  if (ch) return fl;
  ch = 1;
  var e3 = RA();
  function t(r, o) {
    var a = new e3(r, o);
    return function(s) {
      return a.convert(s);
    };
  }
  return t.BIN = "01", t.OCT = "01234567", t.DEC = "0123456789", t.HEX = "0123456789abcdef", fl = t, fl;
}
var dl, fh;
function kA() {
  if (fh) return dl;
  fh = 1;
  const { v4: e3, validate: t } = /* @__PURE__ */ TA(), r = PA(), o = {
    cookieBase90: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
    flickrBase58: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
    uuid25Base36: "0123456789abcdefghijklmnopqrstuvwxyz"
  }, a = {
    consistentLength: true
  };
  let s;
  const l = (y, v, g) => {
    const p = v(y.toLowerCase().replace(/-/g, ""));
    return !g || !g.consistentLength ? p : p.padStart(
      g.shortIdLength,
      g.paddingChar
    );
  }, c = (y, v) => {
    const p = v(y).padStart(32, "0").match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);
    return [p[1], p[2], p[3], p[4], p[5]].join("-");
  }, h = (y) => Math.ceil(Math.log(2 ** 128) / Math.log(y));
  return dl = (() => {
    const y = (v, g) => {
      const p = v || o.flickrBase58, w = { ...a, ...g };
      if ([...new Set(Array.from(p))].length !== p.length)
        throw new Error("The provided Alphabet has duplicate characters resulting in unreliable results");
      const S = h(p.length), f = {
        shortIdLength: S,
        consistentLength: w.consistentLength,
        paddingChar: p[0]
      }, b = r(r.HEX, p), d = r(p, r.HEX), x = () => l(e3(), b, f), R = {
        alphabet: p,
        fromUUID: (A) => l(A, b, f),
        maxLength: S,
        generate: x,
        new: x,
        toUUID: (A) => c(A, d),
        uuid: e3,
        validate: (A, C = false) => {
          if (!A || typeof A != "string") return false;
          const W = w.consistentLength ? A.length === S : A.length <= S, L = A.split("").every((M) => p.includes(M));
          return C === false ? W && L : W && L && t(c(A, d));
        }
      };
      return Object.freeze(R), R;
    };
    return y.constants = o, y.uuid = e3, y.generate = () => (s || (s = y(o.flickrBase58).generate), s()), y;
  })(), dl;
}
var wc = kA();
const CA = ({
  depth: e3,
  height: t = 24,
  width: r = 11,
  showLines: o = true,
  stroke: a = "rgb(241, 245, 249)"
}) => {
  const s = `indent_line_${wc.generate()}`;
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "svg",
    {
      viewBox: `0 0 ${11 * e3} ${t}`,
      width: `${11 * e3}`,
      height: t,
      children: [
        /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "pattern",
          {
            id: s,
            x: "0",
            y: "0",
            width: r,
            height: t,
            patternUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "line",
              {
                x1: r / 2,
                y1: "0",
                x2: r / 2,
                y2: t,
                stroke: a
              }
            )
          }
        ) }),
        o ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: `url(#${s})`,
            x: "0",
            y: "0",
            width: `${11 * e3}`,
            height: t
          }
        ) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "rect",
          {
            fill: o ? `url(#${s})` : "",
            x: "0",
            y: "0",
            width: 0,
            height: t
          }
        )
      ]
    }
  );
}, $A = ({ show: e3, expanded: t, onClick: r, variant: o = "arrow" }) => e3 ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "div",
  {
    className: "flex h-6 w-5 items-center",
    onClick: (a) => r && r(a),
    children: (() => {
      switch (o) {
        case "arrow":
          return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            V0,
            {
              className: nt([
                "h-3 w-3 transform text-grey-50 transition ease-in-out",
                {
                  "rotate-0": t,
                  "-rotate-90": !t
                }
              ])
            }
          );
        case "caret":
          return t ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0, {}) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(d4, {});
        default:
          return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V0, { className: "h-3 w-3 transform text-grey-50 transition ease-in-out" });
      }
    })()
  }
) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex h-6 w-3 items-center" }), vv = ({
  node: e3,
  depth: t,
  expandedKeys: r,
  selectedKeys: o,
  actions: a,
  searchQuery: s,
  renderNode: l,
  onNodeClick: c
}) => {
  var w;
  const { key: h, children: y } = e3, v = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(
    () => ({
      expanded: r.includes(e3.key),
      selected: o.includes(e3.key)
    }),
    [r, e3.key, o]
  ), g = l && typeof l == "function" ? l(e3, t, v, a, s) : MA(e3, t, v, c);
  return !((w = e3.options) != null && w.filterable) || !s || e3.title.toLowerCase().includes(s.toLowerCase()) ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center space-x-2", children: g }, h),
    LA(
      y || [],
      t,
      s,
      r,
      o,
      v.expanded,
      a,
      c,
      l
    )
  ] }) : null;
}, IA = function(e3, t) {
  var l;
  const { title: r, icon: o, subtitle: a } = e3;
  let s = null;
  return o && (s = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(vA, { children: o })), /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "div",
    {
      className: "flex flex-1 select-none items-center overflow-hidden text-ellipsis whitespace-nowrap",
      draggable: (l = e3.options) == null ? void 0 : l.draggable,
      onClick: () => {
        t && t(e3);
      },
      children: [
        s,
        /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            style: {
              lineHeight: "24px",
              fontSize: 11
            },
            children: r
          }
        ),
        a && /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "mx-1 min-w-0 text-xxs italic text-fd-gray-mild", children: a })
      ]
    }
  );
}, LA = function(e3, t, r, o, a, s, l, c, h) {
  return e3.length && s ? e3.map((y) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    vv,
    {
      actions: l,
      node: y,
      searchQuery: r,
      depth: t + 1,
      expandedKeys: o,
      selectedKeys: a,
      onNodeClick: c,
      renderNode: h
    },
    y.key
  )) : null;
}, MA = function(e3, t, r, o) {
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(CA, { showLines: true, depth: t }),
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      $A,
      {
        show: e3.children && e3.children.length > 0 || false,
        expanded: r.expanded
      }
    ),
    IA(e3, o)
  ] });
}, ka = (e3) => (t) => e3 === t, pI = function({
  treeData: t,
  renderNode: r,
  onNodeClick: o,
  onExpandNode: a,
  searchQuery: s,
  expandedKeys: l,
  expandCondition: c = "always",
  encapsulated: h,
  className: y
}) {
  const [v, g] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(() => ({
    expandedKeys: l || [],
    selectedKeys: []
  }));
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    c === "when-collapsed" && v.expandedKeys.length > 0 || g({
      ...v,
      expandedKeys: l || v.expandedKeys
    });
  }, [l]);
  const p = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(
    (d) => {
      if (!d) return;
      const x = v.expandedKeys.findIndex(ka(d.key));
      let _ = [];
      x === -1 ? (_ = [...v.expandedKeys, d.key], g(() => ({
        ...v,
        expandedKeys: _
      })), a && a(_)) : (_ = v.expandedKeys.filter((R) => R !== d.key), g(() => ({
        ...v,
        expandedKeys: _
      })), a && a(_));
    },
    [v]
  ), w = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(
    (d) => {
      var _;
      if (!((_ = d == null ? void 0 : d.options) != null && _.selectable)) return;
      v.selectedKeys.findIndex(ka(d.key)) === -1 && g({
        ...v,
        selectedKeys: [...v.selectedKeys, d.key]
      });
    },
    [v]
  ), S = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(
    (d) => {
      var _;
      if (!((_ = d == null ? void 0 : d.options) != null && _.selectable)) return;
      v.selectedKeys.findIndex(ka(d.key)) === -1 && g({ ...v, selectedKeys: [d.key] });
    },
    [v]
  ), f = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(
    (d) => {
      var _;
      if (!((_ = d == null ? void 0 : d.options) != null && _.selectable)) {
        g({ ...v, selectedKeys: [] });
        return;
      }
      v.selectedKeys.findIndex(ka(d.key)) !== -1 && g({
        ...v,
        selectedKeys: v.selectedKeys.filter((R) => R !== d.key)
      });
    },
    [v]
  ), b = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(
    () => ({
      expand: p,
      select: w,
      selectSingle: S,
      deselect: f
    }),
    [f, p, w, S]
  );
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: nt("fd-tree", y, {
        "pl-2 mb-1 rounded border bg-grey-900 p-1": h
      }),
      children: t.map((d) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        vv,
        {
          node: d,
          searchQuery: s || "",
          depth: 0,
          expandedKeys: v.expandedKeys,
          selectedKeys: v.selectedKeys,
          actions: b,
          renderNode: r,
          onNodeClick: o
        },
        d.key
      ))
    }
  );
};
function hI(e3) {
  return e3.of && e3.children ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e3.children }) : null;
}
function pt() {
  return pt = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (e3[o] = r[o]);
    }
    return e3;
  }, pt.apply(null, arguments);
}
function FA(e3) {
  for (var t = 0, r, o = 0, a = e3.length; a >= 4; ++o, a -= 4)
    r = e3.charCodeAt(o) & 255 | (e3.charCodeAt(++o) & 255) << 8 | (e3.charCodeAt(++o) & 255) << 16 | (e3.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e3.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e3.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e3.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var NA = {
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
function mv(e3) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e3(r)), t[r];
  };
}
var DA = /[A-Z]|^ms/g, zA = /_EMO_([^_]+?)_([^]*?)_EMO_/g, yv = function(t) {
  return t.charCodeAt(1) === 45;
}, dh = function(t) {
  return t != null && typeof t != "boolean";
}, pl = /* @__PURE__ */ mv(function(e3) {
  return yv(e3) ? e3 : e3.replace(DA, "-$&").toLowerCase();
}), ph = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(zA, function(o, a, s) {
          return Tr = {
            name: a,
            styles: s,
            next: Tr
          }, a;
        });
  }
  return NA[t] !== 1 && !yv(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Oo(e3, t, r) {
  if (r == null)
    return "";
  var o = r;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var a = r;
      if (a.anim === 1)
        return Tr = {
          name: a.name,
          styles: a.styles,
          next: Tr
        }, a.name;
      var s = r;
      if (s.styles !== void 0) {
        var l = s.next;
        if (l !== void 0)
          for (; l !== void 0; )
            Tr = {
              name: l.name,
              styles: l.styles,
              next: Tr
            }, l = l.next;
        var c = s.styles + ";";
        return c;
      }
      return WA(e3, t, r);
    }
    case "function": {
      if (e3 !== void 0) {
        var h = Tr, y = r(e3);
        return Tr = h, Oo(e3, t, y);
      }
      break;
    }
  }
  var v = r;
  if (t == null)
    return v;
  var g = t[v];
  return g !== void 0 ? g : v;
}
function WA(e3, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var a = 0; a < r.length; a++)
      o += Oo(e3, t, r[a]) + ";";
  else
    for (var s in r) {
      var l = r[s];
      if (typeof l != "object") {
        var c = l;
        t != null && t[c] !== void 0 ? o += s + "{" + t[c] + "}" : dh(c) && (o += pl(s) + ":" + ph(s, c) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && (t == null || t[l[0]] === void 0))
        for (var h = 0; h < l.length; h++)
          dh(l[h]) && (o += pl(s) + ":" + ph(s, l[h]) + ";");
      else {
        var y = Oo(e3, t, l);
        switch (s) {
          case "animation":
          case "animationName": {
            o += pl(s) + ":" + y + ";";
            break;
          }
          default:
            o += s + "{" + y + "}";
        }
      }
    }
  return o;
}
var hh = /label:\s*([^\s;{]+)\s*(;|$)/g, Tr;
function BA(e3, t, r) {
  if (e3.length === 1 && typeof e3[0] == "object" && e3[0] !== null && e3[0].styles !== void 0)
    return e3[0];
  var o = true, a = "";
  Tr = void 0;
  var s = e3[0];
  if (s == null || s.raw === void 0)
    o = false, a += Oo(r, t, s);
  else {
    var l = s;
    a += l[0];
  }
  for (var c = 1; c < e3.length; c++)
    if (a += Oo(r, t, e3[c]), o) {
      var h = s;
      a += h[c];
    }
  hh.lastIndex = 0;
  for (var y = "", v; (v = hh.exec(a)) !== null; )
    y += "-" + v[1];
  var g = FA(a) + y;
  return {
    name: g,
    styles: a,
    next: Tr
  };
}
var UA = function(t) {
  return t();
}, HA = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useInsertionEffect ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useInsertionEffect : false, qA = HA || UA, jA = true;
function ZA(e3, t, r) {
  var o = "";
  return r.split(" ").forEach(function(a) {
    e3[a] !== void 0 ? t.push(e3[a] + ";") : a && (o += a + " ");
  }), o;
}
var wv = function(t, r, o) {
  var a = t.key + "-" + r.name;
  (o === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  jA === false) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
}, GA = function(t, r, o) {
  wv(t, r, o);
  var a = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var s = r;
    do
      t.insert(r === s ? "." + a : "", s, t.sheet, true), s = s.next;
    while (s !== void 0);
  }
}, KA = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, VA = /* @__PURE__ */ mv(
  function(e3) {
    return KA.test(e3) || e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) < 91;
  }
  /* Z+1 */
), YA = VA, XA = function(t) {
  return t !== "theme";
}, gh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? YA : XA;
}, vh = function(t, r, o) {
  var a;
  if (r) {
    var s = r.shouldForwardProp;
    a = t.__emotion_forwardProp && s ? function(l) {
      return t.__emotion_forwardProp(l) && s(l);
    } : s;
  }
  return typeof a != "function" && o && (a = t.__emotion_forwardProp), a;
}, JA = function(t) {
  var r = t.cache, o = t.serialized, a = t.isStringTag;
  return wv(r, o, a), qA(function() {
    return GA(r, o, a);
  }), null;
}, QA = function e(t, r) {
  var o = t.__emotion_real === t, a = o && t.__emotion_base || t, s, l;
  r !== void 0 && (s = r.label, l = r.target);
  var c = vh(t, r, o), h = c || gh(a), y = !h("as");
  return function() {
    var v = arguments, g = o && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && g.push("label:" + s + ";"), v[0] == null || v[0].raw === void 0)
      g.push.apply(g, v);
    else {
      var p = v[0];
      g.push(p[0]);
      for (var w = v.length, S = 1; S < w; S++)
        g.push(v[S], p[S]);
    }
    var f = withEmotionCache(function(b, d, x) {
      var _ = y && b.as || a, R = "", A = [], C = b;
      if (b.theme == null) {
        C = {};
        for (var W in b)
          C[W] = b[W];
        C.theme = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(ThemeContext);
      }
      typeof b.className == "string" ? R = ZA(d.registered, A, b.className) : b.className != null && (R = b.className + " ");
      var L = BA(g.concat(A), d.registered, C);
      R += d.key + "-" + L.name, l !== void 0 && (R += " " + l);
      var M = y && c === void 0 ? gh(_) : h, j = {};
      for (var D in b)
        y && D === "as" || M(D) && (j[D] = b[D]);
      return j.className = R, x && (j.ref = x), /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, null, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(JA, {
        cache: d,
        serialized: L,
        isStringTag: typeof _ == "string"
      }), /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(_, j));
    });
    return f.displayName = s !== void 0 ? s : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", f.defaultProps = t.defaultProps, f.__emotion_real = f, f.__emotion_base = a, f.__emotion_styles = g, f.__emotion_forwardProp = c, Object.defineProperty(f, "toString", {
      value: function() {
        return "." + l;
      }
    }), f.withComponent = function(b, d) {
      var x = e(b, pt({}, r, d, {
        shouldForwardProp: vh(f, d, true)
      }));
      return x.apply(void 0, g);
    }, f;
  };
}, eT = [
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
], is = QA.bind(null);
eT.forEach(function(e3) {
  is[e3] = is(e3);
});
var tT = function(e3) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e3) ? e3[0] : e3;
  return t.ownerDocument.body;
}, ci = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), $a = {}, hl = 0, bv = function(e3) {
  return e3 && (e3.host || bv(e3.parentNode));
}, rT = function(e3, t) {
  return t.map(function(r) {
    if (e3.contains(r))
      return r;
    var o = bv(r);
    return o && e3.contains(o) ? o : (console.error("aria-hidden", r, "in not contained inside", e3, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, nT = function(e3, t, r, o) {
  var a = rT(t, Array.isArray(e3) ? e3 : [e3]);
  $a[r] || ($a[r] = /* @__PURE__ */ new WeakMap());
  var s = $a[r], l = [], c = /* @__PURE__ */ new Set(), h = new Set(a), y = function(g) {
    !g || c.has(g) || (c.add(g), y(g.parentNode));
  };
  a.forEach(y);
  var v = function(g) {
    !g || h.has(g) || Array.prototype.forEach.call(g.children, function(p) {
      if (c.has(p))
        v(p);
      else
        try {
          var w = p.getAttribute(o), S = w !== null && w !== "false", f = (ci.get(p) || 0) + 1, b = (s.get(p) || 0) + 1;
          ci.set(p, f), s.set(p, b), l.push(p), f === 1 && S && Ca.set(p, true), b === 1 && p.setAttribute(r, "true"), S || p.setAttribute(o, "true");
        } catch (d) {
          console.error("aria-hidden: cannot operate on ", p, d);
        }
    });
  };
  return v(t), c.clear(), hl++, function() {
    l.forEach(function(g) {
      var p = ci.get(g) - 1, w = s.get(g) - 1;
      ci.set(g, p), s.set(g, w), p || (Ca.has(g) || g.removeAttribute(o), Ca.delete(g)), w || g.removeAttribute(r);
    }), hl--, hl || (ci = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), $a = {});
  };
}, iT = function(e3, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var o = Array.from(Array.isArray(e3) ? e3 : [e3]), a = tT(e3);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), nT(o, a, r, "aria-hidden")) : function() {
    return null;
  };
}, Hl = function(e3, t) {
  return Hl = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
    r.__proto__ = o;
  } || function(r, o) {
    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
  }, Hl(e3, t);
};
function bs(e3, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Hl(e3, t);
  function r() {
    this.constructor = e3;
  }
  e3.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Rr = function() {
  return Rr = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, Rr.apply(this, arguments);
};
function Sv(e3, t) {
  var r = {};
  for (var o in e3) Object.prototype.hasOwnProperty.call(e3, o) && t.indexOf(o) < 0 && (r[o] = e3[o]);
  if (e3 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, o = Object.getOwnPropertySymbols(e3); a < o.length; a++)
      t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, o[a]) && (r[o[a]] = e3[o[a]]);
  return r;
}
function ql(e3) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e3[t], o = 0;
  if (r) return r.call(e3);
  if (e3 && typeof e3.length == "number") return {
    next: function() {
      return e3 && o >= e3.length && (e3 = void 0), { value: e3 && e3[o++], done: !e3 };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function jl(e3, t) {
  var r = typeof Symbol == "function" && e3[Symbol.iterator];
  if (!r) return e3;
  var o = r.call(e3), a, s = [], l;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = o.next()).done; ) s.push(a.value);
  } catch (c) {
    l = { error: c };
  } finally {
    try {
      a && !a.done && (r = o.return) && r.call(o);
    } finally {
      if (l) throw l.error;
    }
  }
  return s;
}
function os(e3, t, r) {
  if (r || arguments.length === 2) for (var o = 0, a = t.length, s; o < a; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e3.concat(s || Array.prototype.slice.call(t));
}
var Xa = "right-scroll-bar-position", Ja = "width-before-scroll-bar", oT = "with-scroll-bars-hidden", aT = "--removed-body-scroll-bar-size";
function gl(e3, t) {
  return typeof e3 == "function" ? e3(t) : e3 && (e3.current = t), e3;
}
function sT(e3, t) {
  var r = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(function() {
    return {
      // value
      value: e3,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(o) {
          var a = r.value;
          a !== o && (r.value = o, r.callback(o, a));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var uT = typeof window < "u" ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useLayoutEffect : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect, mh = /* @__PURE__ */ new WeakMap();
function lT(e3, t) {
  var r = sT(null, function(o) {
    return e3.forEach(function(a) {
      return gl(a, o);
    });
  });
  return uT(function() {
    var o = mh.get(r);
    if (o) {
      var a = new Set(o), s = new Set(e3), l = r.current;
      a.forEach(function(c) {
        s.has(c) || gl(c, null);
      }), s.forEach(function(c) {
        a.has(c) || gl(c, l);
      });
    }
    mh.set(r, e3);
  }, [e3]), r;
}
function cT(e3) {
  return e3;
}
function fT(e3, t) {
  t === void 0 && (t = cT);
  var r = [], o = false, a = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e3;
    },
    useMedium: function(s) {
      var l = t(s, o);
      return r.push(l), function() {
        r = r.filter(function(c) {
          return c !== l;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (o = true; r.length; ) {
        var l = r;
        r = [], l.forEach(s);
      }
      r = {
        push: function(c) {
          return s(c);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      o = true;
      var l = [];
      if (r.length) {
        var c = r;
        r = [], c.forEach(s), l = r;
      }
      var h = function() {
        var v = l;
        l = [], v.forEach(s);
      }, y = function() {
        return Promise.resolve().then(h);
      };
      y(), r = {
        push: function(v) {
          l.push(v), y();
        },
        filter: function(v) {
          return l = l.filter(v), r;
        }
      };
    }
  };
  return a;
}
function dT(e3) {
  e3 === void 0 && (e3 = {});
  var t = fT(null);
  return t.options = Rr({ async: true, ssr: false }, e3), t;
}
var xv = function(e3) {
  var t = e3.sideCar, r = Sv(e3, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(o, Rr({}, r));
};
xv.isSideCarExport = true;
function pT(e3, t) {
  return e3.useMedium(t), xv;
}
var _v = dT(), vl = function() {
}, Ss = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(function(e3, t) {
  var r = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), o = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState({
    onScrollCapture: vl,
    onWheelCapture: vl,
    onTouchMoveCapture: vl
  }), a = o[0], s = o[1], l = e3.forwardProps, c = e3.children, h = e3.className, y = e3.removeScrollBar, v = e3.enabled, g = e3.shards, p = e3.sideCar, w = e3.noRelative, S = e3.noIsolation, f = e3.inert, b = e3.allowPinchZoom, d = e3.as, x = d === void 0 ? "div" : d, _ = e3.gapMode, R = Sv(e3, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), A = p, C = lT([r, t]), W = Rr(Rr({}, R), a);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(
    qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment,
    null,
    v && qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(A, { sideCar: _v, removeScrollBar: y, shards: g, noRelative: w, noIsolation: S, inert: f, setCallbacks: s, allowPinchZoom: !!b, lockRef: r, gapMode: _ }),
    l ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.cloneElement(qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Children.only(c), Rr(Rr({}, W), { ref: C })) : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(x, Rr({}, W, { className: h, ref: C }), c)
  );
});
Ss.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
Ss.classNames = {
  fullWidth: Ja,
  zeroRight: Xa
};
var hT = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function gT() {
  if (!document)
    return null;
  var e3 = document.createElement("style");
  e3.type = "text/css";
  var t = hT();
  return t && e3.setAttribute("nonce", t), e3;
}
function vT(e3, t) {
  e3.styleSheet ? e3.styleSheet.cssText = t : e3.appendChild(document.createTextNode(t));
}
function mT(e3) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e3);
}
var yT = function() {
  var e3 = 0, t = null;
  return {
    add: function(r) {
      e3 == 0 && (t = gT()) && (vT(t, r), mT(t)), e3++;
    },
    remove: function() {
      e3--, !e3 && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, wT = function() {
  var e3 = yT();
  return function(t, r) {
    qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(function() {
      return e3.add(t), function() {
        e3.remove();
      };
    }, [t && r]);
  };
}, Ev = function() {
  var e3 = wT(), t = function(r) {
    var o = r.styles, a = r.dynamic;
    return e3(o, a), null;
  };
  return t;
}, bT = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ml = function(e3) {
  return parseInt(e3 || "", 10) || 0;
}, ST = function(e3) {
  var t = window.getComputedStyle(document.body), r = t[e3 === "padding" ? "paddingLeft" : "marginLeft"], o = t[e3 === "padding" ? "paddingTop" : "marginTop"], a = t[e3 === "padding" ? "paddingRight" : "marginRight"];
  return [ml(r), ml(o), ml(a)];
}, xT = function(e3) {
  if (e3 === void 0 && (e3 = "margin"), typeof window > "u")
    return bT;
  var t = ST(e3), r = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - r + t[2] - t[0])
  };
}, _T = Ev(), pi = "data-scroll-locked", ET = function(e3, t, r, o) {
  var a = e3.left, s = e3.top, l = e3.right, c = e3.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(oT, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(c, "px ").concat(o, `;
  }
  body[`).concat(pi, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    r === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(o, `;
    `),
    r === "padding" && "padding-right: ".concat(c, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Xa, ` {
    right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Ja, ` {
    margin-right: `).concat(c, "px ").concat(o, `;
  }
  
  .`).concat(Xa, " .").concat(Xa, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Ja, " .").concat(Ja, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(pi, `] {
    `).concat(aT, ": ").concat(c, `px;
  }
`);
}, yh = function() {
  var e3 = parseInt(document.body.getAttribute(pi) || "0", 10);
  return isFinite(e3) ? e3 : 0;
}, OT = function() {
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(function() {
    return document.body.setAttribute(pi, (yh() + 1).toString()), function() {
      var e3 = yh() - 1;
      e3 <= 0 ? document.body.removeAttribute(pi) : document.body.setAttribute(pi, e3.toString());
    };
  }, []);
}, AT = function(e3) {
  var t = e3.noRelative, r = e3.noImportant, o = e3.gapMode, a = o === void 0 ? "margin" : o;
  OT();
  var s = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(function() {
    return xT(a);
  }, [a]);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(_T, { styles: ET(s, !t, a, r ? "" : "!important") });
}, Zl = false;
if (typeof window < "u")
  try {
    var Ia = Object.defineProperty({}, "passive", {
      get: function() {
        return Zl = true, true;
      }
    });
    window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
  } catch {
    Zl = false;
  }
var fi = Zl ? { passive: false } : false, TT = function(e3) {
  return e3.tagName === "TEXTAREA";
}, Ov = function(e3, t) {
  if (!(e3 instanceof Element))
    return false;
  var r = window.getComputedStyle(e3);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !TT(e3) && r[t] === "visible")
  );
}, RT = function(e3) {
  return Ov(e3, "overflowY");
}, PT = function(e3) {
  return Ov(e3, "overflowX");
}, wh = function(e3, t) {
  var r = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var a = Av(e3, o);
    if (a) {
      var s = Tv(e3, o), l = s[1], c = s[2];
      if (l > c)
        return true;
    }
    o = o.parentNode;
  } while (o && o !== r.body);
  return false;
}, kT = function(e3) {
  var t = e3.scrollTop, r = e3.scrollHeight, o = e3.clientHeight;
  return [
    t,
    r,
    o
  ];
}, CT = function(e3) {
  var t = e3.scrollLeft, r = e3.scrollWidth, o = e3.clientWidth;
  return [
    t,
    r,
    o
  ];
}, Av = function(e3, t) {
  return e3 === "v" ? RT(t) : PT(t);
}, Tv = function(e3, t) {
  return e3 === "v" ? kT(t) : CT(t);
}, $T = function(e3, t) {
  return e3 === "h" && t === "rtl" ? -1 : 1;
}, IT = function(e3, t, r, o, a) {
  var s = $T(e3, window.getComputedStyle(t).direction), l = s * o, c = r.target, h = t.contains(c), y = false, v = l > 0, g = 0, p = 0;
  do {
    if (!c)
      break;
    var w = Tv(e3, c), S = w[0], f = w[1], b = w[2], d = f - b - s * S;
    (S || d) && Av(e3, c) && (g += d, p += S);
    var x = c.parentNode;
    c = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !h && c !== document.body || // self content
    h && (t.contains(c) || t === c)
  );
  return (v && Math.abs(g) < 1 || !v && Math.abs(p) < 1) && (y = true), y;
}, La = function(e3) {
  return "changedTouches" in e3 ? [e3.changedTouches[0].clientX, e3.changedTouches[0].clientY] : [0, 0];
}, bh = function(e3) {
  return [e3.deltaX, e3.deltaY];
}, Sh = function(e3) {
  return e3 && "current" in e3 ? e3.current : e3;
}, LT = function(e3, t) {
  return e3[0] === t[0] && e3[1] === t[1];
}, MT = function(e3) {
  return `
  .block-interactivity-`.concat(e3, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e3, ` {pointer-events: all;}
`);
}, FT = 0, di = [];
function NT(e3) {
  var t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef([]), r = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef([0, 0]), o = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(), a = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(FT++)[0], s = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(Ev)[0], l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(e3);
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(function() {
    l.current = e3;
  }, [e3]), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(function() {
    if (e3.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var f = os([e3.lockRef.current], (e3.shards || []).map(Sh), true).filter(Boolean);
      return f.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), f.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e3.inert, e3.lockRef.current, e3.shards]);
  var c = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(function(f, b) {
    if ("touches" in f && f.touches.length === 2 || f.type === "wheel" && f.ctrlKey)
      return !l.current.allowPinchZoom;
    var d = La(f), x = r.current, _ = "deltaX" in f ? f.deltaX : x[0] - d[0], R = "deltaY" in f ? f.deltaY : x[1] - d[1], A, C = f.target, W = Math.abs(_) > Math.abs(R) ? "h" : "v";
    if ("touches" in f && W === "h" && C.type === "range")
      return false;
    var L = wh(W, C);
    if (!L)
      return true;
    if (L ? A = W : (A = W === "v" ? "h" : "v", L = wh(W, C)), !L)
      return false;
    if (!o.current && "changedTouches" in f && (_ || R) && (o.current = A), !A)
      return true;
    var M = o.current || A;
    return IT(M, b, f, M === "h" ? _ : R);
  }, []), h = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(function(f) {
    var b = f;
    if (!(!di.length || di[di.length - 1] !== s)) {
      var d = "deltaY" in b ? bh(b) : La(b), x = t.current.filter(function(A) {
        return A.name === b.type && (A.target === b.target || b.target === A.shadowParent) && LT(A.delta, d);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var _ = (l.current.shards || []).map(Sh).filter(Boolean).filter(function(A) {
          return A.contains(b.target);
        }), R = _.length > 0 ? c(b, _[0]) : !l.current.noIsolation;
        R && b.cancelable && b.preventDefault();
      }
    }
  }, []), y = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(function(f, b, d, x) {
    var _ = { name: f, delta: b, target: d, should: x, shadowParent: DT(d) };
    t.current.push(_), setTimeout(function() {
      t.current = t.current.filter(function(R) {
        return R !== _;
      });
    }, 1);
  }, []), v = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(function(f) {
    r.current = La(f), o.current = void 0;
  }, []), g = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(function(f) {
    y(f.type, bh(f), f.target, c(f, e3.lockRef.current));
  }, []), p = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(function(f) {
    y(f.type, La(f), f.target, c(f, e3.lockRef.current));
  }, []);
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(function() {
    return di.push(s), e3.setCallbacks({
      onScrollCapture: g,
      onWheelCapture: g,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", h, fi), document.addEventListener("touchmove", h, fi), document.addEventListener("touchstart", v, fi), function() {
      di = di.filter(function(f) {
        return f !== s;
      }), document.removeEventListener("wheel", h, fi), document.removeEventListener("touchmove", h, fi), document.removeEventListener("touchstart", v, fi);
    };
  }, []);
  var w = e3.removeScrollBar, S = e3.inert;
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(
    qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment,
    null,
    S ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(s, { styles: MT(a) }) : null,
    w ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(AT, { noRelative: e3.noRelative, gapMode: e3.gapMode }) : null
  );
}
function DT(e3) {
  for (var t = null; e3 !== null; )
    e3 instanceof ShadowRoot && (t = e3.host, e3 = e3.host), e3 = e3.parentNode;
  return t;
}
const zT = pT(_v, NT);
var Rv = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(function(e3, t) {
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(Ss, Rr({}, e3, { ref: t, sideCar: zT }));
});
Rv.classNames = Ss.classNames;
const WT = globalThis != null && globalThis.document ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useLayoutEffect : () => {
}, BT = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useId || (() => {
});
let UT = 0;
function HT(e3) {
  const [t, r] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(BT());
  return WT((() => {
    r(((o) => o ?? String(UT++)));
  }), [e3]), e3 || (t ? `radix-${t}` : "");
}
function Pv(...e3) {
  return (t) => e3.forEach(((r) => (function(o, a) {
    typeof o == "function" ? o(a) : o != null && (o.current = a);
  })(r, t)));
}
function qn(...e3) {
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(Pv(...e3), e3);
}
const kv = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { children: r, ...o } = e3;
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Children.toArray(r).some(xh) ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, null, qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Children.map(r, ((a) => xh(a) ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(Gl, pt({}, o, { ref: t }), a.props.children) : a))) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(Gl, pt({}, o, { ref: t }), r);
}));
kv.displayName = "Slot";
const Gl = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { children: r, ...o } = e3;
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.isValidElement(r) ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.cloneElement(r, { ...jT(o, r.props), ref: Pv(t, r.ref) }) : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Children.count(r) > 1 ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Children.only(null) : null;
}));
Gl.displayName = "SlotClone";
const qT = ({ children: e3 }) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, null, e3);
function xh(e3) {
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.isValidElement(e3) && e3.type === qT;
}
function jT(e3, t) {
  const r = { ...t };
  for (const o in t) {
    const a = e3[o], s = t[o];
    /^on[A-Z]/.test(o) ? r[o] = (...l) => {
      s == null || s(...l), a == null || a(...l);
    } : o === "style" ? r[o] = { ...a, ...s } : o === "className" && (r[o] = [a, s].filter(Boolean).join(" "));
  }
  return { ...e3, ...r };
}
const xi = ["a", "button", "div", "h2", "h3", "img", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e3, t) => ({ ...e3, [t]: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((r, o) => {
  const { asChild: a, ...s } = r, l = a ? kv : t;
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    window[Symbol.for("radix-ui")] = true;
  }), []), /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(l, pt({}, s, { ref: o }));
})) })), {}), _h = globalThis != null && globalThis.document ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useLayoutEffect : () => {
}, Cv = (e3) => {
  const { present: t, children: r } = e3, o = (function(l) {
    const [c, h] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(), y = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef({}), v = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(l), g = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef("none"), p = l ? "mounted" : "unmounted", [w, S] = (function(f, b) {
      return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useReducer(((d, x) => {
        const _ = b[d][x];
        return _ ?? d;
      }), f);
    })(p, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
    return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
      const f = Ma(y.current);
      g.current = w === "mounted" ? f : "none";
    }), [w]), _h((() => {
      const f = y.current, b = v.current;
      if (b !== l) {
        const d = g.current, x = Ma(f);
        l ? S("MOUNT") : x === "none" || (f == null ? void 0 : f.display) === "none" ? S("UNMOUNT") : S(b && d !== x ? "ANIMATION_OUT" : "UNMOUNT"), v.current = l;
      }
    }), [l, S]), _h((() => {
      if (c) {
        const f = (d) => {
          const x = Ma(y.current).includes(d.animationName);
          d.target === c && x && S("ANIMATION_END");
        }, b = (d) => {
          d.target === c && (g.current = Ma(y.current));
        };
        return c.addEventListener("animationstart", b), c.addEventListener("animationcancel", f), c.addEventListener("animationend", f), () => {
          c.removeEventListener("animationstart", b), c.removeEventListener("animationcancel", f), c.removeEventListener("animationend", f);
        };
      }
      S("ANIMATION_END");
    }), [c, S]), { isPresent: ["mounted", "unmountSuspended"].includes(w), ref: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(((f) => {
      f && (y.current = getComputedStyle(f)), h(f);
    }), []) };
  })(t), a = typeof r == "function" ? r({ present: o.isPresent }) : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Children.only(r), s = qn(o.ref, a.ref);
  return typeof r == "function" || o.isPresent ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.cloneElement(a, { ref: s }) : null;
};
function Ma(e3) {
  return (e3 == null ? void 0 : e3.animationName) || "none";
}
Cv.displayName = "Presence";
let yl = 0;
function ZT() {
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    var e3, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e3 = r[0]) !== null && e3 !== void 0 ? e3 : Eh()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : Eh()), yl++, () => {
      yl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(((o) => o.remove())), yl--;
    };
  }), []);
}
function Eh() {
  const e3 = document.createElement("span");
  return e3.setAttribute("data-radix-focus-guard", ""), e3.tabIndex = 0, e3.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e3;
}
const GT = globalThis != null && globalThis.document ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useLayoutEffect : () => {
}, $v = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  var r, o;
  const { containerRef: a, style: s, ...l } = e3, c = (r = a == null ? void 0 : a.current) !== null && r !== void 0 ? r : globalThis == null || (o = globalThis.document) === null || o === void 0 ? void 0 : o.body, [, h] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState({});
  return GT((() => {
    h({});
  }), []), c ? /* @__PURE__ */ b.createPortal(/* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(xi.div, pt({ "data-radix-portal": "" }, l, { ref: t, style: c === document.body ? { position: "absolute", top: 0, left: 0, zIndex: 2147483647, ...s } : void 0 })), c) : null;
}));
function Bn(e3) {
  const t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(e3);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    t.current = e3;
  })), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo((() => (...r) => {
    var o;
    return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...r);
  }), []);
}
const Oh = { bubbles: false, cancelable: true }, KT = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { loop: r = false, trapped: o = false, onMountAutoFocus: a, onUnmountAutoFocus: s, ...l } = e3, [c, h] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(null), y = Bn(a), v = Bn(s), g = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), p = qn(t, ((f) => h(f))), w = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    if (o) {
      let f = function(d) {
        if (w.paused || !c) return;
        const x = d.target;
        c.contains(x) ? g.current = x : Cn(g.current, { select: true });
      }, b = function(d) {
        !w.paused && c && (c.contains(d.relatedTarget) || Cn(g.current, { select: true }));
      };
      return document.addEventListener("focusin", f), document.addEventListener("focusout", b), () => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", b);
      };
    }
  }), [o, c, w.paused]), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    if (c) {
      Rh.add(w);
      const b = document.activeElement;
      if (!c.contains(b)) {
        const d = new Event("focusScope.autoFocusOnMount", Oh);
        c.addEventListener("focusScope.autoFocusOnMount", y), c.dispatchEvent(d), d.defaultPrevented || ((function(x, { select: _ = false } = {}) {
          const R = document.activeElement;
          for (const A of x) if (Cn(A, { select: _ }), document.activeElement !== R) return;
        })((f = Ah(c), f.filter(((x) => x.tagName !== "A"))), { select: true }), document.activeElement === b && Cn(c));
      }
      return () => {
        c.removeEventListener("focusScope.autoFocusOnMount", y), setTimeout((() => {
          const d = new Event("focusScope.autoFocusOnUnmount", Oh);
          c.addEventListener("focusScope.autoFocusOnUnmount", v), c.dispatchEvent(d), d.defaultPrevented || Cn(b ?? document.body, { select: true }), c.removeEventListener("focusScope.autoFocusOnUnmount", v), Rh.remove(w);
        }), 0);
      };
    }
    var f;
  }), [c, y, v, w]);
  const S = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(((f) => {
    if (!r && !o || w.paused) return;
    const b = f.key === "Tab" && !f.altKey && !f.ctrlKey && !f.metaKey, d = document.activeElement;
    if (b && d) {
      const x = f.currentTarget, [_, R] = (function(A) {
        const C = Ah(A), W = Th(C, A), L = Th(C.reverse(), A);
        return [W, L];
      })(x);
      _ && R ? f.shiftKey || d !== R ? f.shiftKey && d === _ && (f.preventDefault(), r && Cn(R, { select: true })) : (f.preventDefault(), r && Cn(_, { select: true })) : d === x && f.preventDefault();
    }
  }), [r, o, w.paused]);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(xi.div, pt({ tabIndex: -1 }, l, { ref: p, onKeyDown: S }));
}));
function Ah(e3) {
  const t = [], r = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Th(e3, t) {
  for (const r of e3) if (!VT(r, { upTo: t })) return r;
}
function VT(e3, { upTo: t }) {
  if (getComputedStyle(e3).visibility === "hidden") return true;
  for (; e3; ) {
    if (t !== void 0 && e3 === t) return false;
    if (getComputedStyle(e3).display === "none") return true;
    e3 = e3.parentElement;
  }
  return false;
}
function Cn(e3, { select: t = false } = {}) {
  if (e3 && e3.focus) {
    const r = document.activeElement;
    e3.focus({ preventScroll: true }), e3 !== r && (function(o) {
      return o instanceof HTMLInputElement && "select" in o;
    })(e3) && t && e3.select();
  }
}
const Rh = /* @__PURE__ */ (function() {
  let e3 = [];
  return { add(t) {
    const r = e3[0];
    t !== r && (r == null || r.pause()), e3 = Ph(e3, t), e3.unshift(t);
  }, remove(t) {
    var r;
    e3 = Ph(e3, t), (r = e3[0]) === null || r === void 0 || r.resume();
  } };
})();
function Ph(e3, t) {
  const r = [...e3], o = r.indexOf(t);
  return o !== -1 && r.splice(o, 1), r;
}
function YT(e3) {
  const t = Bn(e3);
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }), [t]);
}
const XT = globalThis != null && globalThis.document ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useLayoutEffect : () => {
};
let kh, Fa = 0;
function JT({ disabled: e3 }) {
  const t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
  XT((() => {
    if (e3) {
      let r = function() {
        Fa--, Fa === 0 && (document.body.style.pointerEvents = kh);
      }, o = function(a) {
        t.current = a.pointerType !== "mouse";
      };
      return Fa === 0 && (kh = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", Fa++, document.addEventListener("pointerup", o), () => {
        t.current ? document.addEventListener("click", r, { once: true }) : r(), document.removeEventListener("pointerup", o);
      };
    }
  }), [e3]);
}
function zn(e3, t, { checkForDefaultPrevented: r = true } = {}) {
  return function(o) {
    if (e3 == null || e3(o), r === false || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
const QT = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), eR = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { disableOutsidePointerEvents: r = false, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: l, onDismiss: c, ...h } = e3, y = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(QT), [v, g] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(null), [, p] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState({}), w = qn(t, ((C) => g(C))), S = Array.from(y.layers), [f] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), b = S.indexOf(f), d = v ? S.indexOf(v) : -1, x = y.layersWithOutsidePointerEventsDisabled.size > 0, _ = d >= b, R = (function(C) {
    const W = Bn(C), L = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
    return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
      const M = (D) => {
        D.target && !L.current && $h("dismissableLayer.pointerDownOutside", W, { originalEvent: D }), L.current = false;
      }, j = window.setTimeout((() => {
        document.addEventListener("pointerdown", M);
      }), 0);
      return () => {
        window.clearTimeout(j), document.removeEventListener("pointerdown", M);
      };
    }), [W]), { onPointerDownCapture: () => L.current = true };
  })(((C) => {
    const W = C.target, L = [...y.branches].some(((M) => M.contains(W)));
    _ && !L && (a == null || a(C), l == null || l(C), C.defaultPrevented || c == null || c());
  })), A = (function(C) {
    const W = Bn(C), L = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
    return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
      const M = (j) => {
        j.target && !L.current && $h("dismissableLayer.focusOutside", W, { originalEvent: j });
      };
      return document.addEventListener("focusin", M), () => document.removeEventListener("focusin", M);
    }), [W]), { onFocusCapture: () => L.current = true, onBlurCapture: () => L.current = false };
  })(((C) => {
    const W = C.target;
    [...y.branches].some(((L) => L.contains(W))) || (s == null || s(C), l == null || l(C), C.defaultPrevented || c == null || c());
  }));
  return YT(((C) => {
    d === y.layers.size - 1 && (o == null || o(C), C.defaultPrevented || c == null || c());
  })), JT({ disabled: r }), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    v && (r && y.layersWithOutsidePointerEventsDisabled.add(v), y.layers.add(v), Ch());
  }), [v, r, y]), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => () => {
    v && (y.layers.delete(v), y.layersWithOutsidePointerEventsDisabled.delete(v), Ch());
  }), [v, y]), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    const C = () => p({});
    return document.addEventListener("dismissableLayer.update", C), () => document.removeEventListener("dismissableLayer.update", C);
  }), []), /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(xi.div, pt({}, h, { ref: w, style: { pointerEvents: x ? _ ? "auto" : "none" : void 0, ...e3.style }, onFocusCapture: zn(e3.onFocusCapture, A.onFocusCapture), onBlurCapture: zn(e3.onBlurCapture, A.onBlurCapture), onPointerDownCapture: zn(e3.onPointerDownCapture, R.onPointerDownCapture) }));
}));
function Ch() {
  const e3 = new Event("dismissableLayer.update");
  document.dispatchEvent(e3);
}
function $h(e3, t, r) {
  const o = r.originalEvent.target, a = new CustomEvent(e3, { bubbles: false, cancelable: true, detail: r });
  return t && o.addEventListener(e3, t, { once: true }), !o.dispatchEvent(a);
}
function Ih(e3) {
  const [t, r] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(void 0);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    if (e3) {
      const o = new ResizeObserver(((a) => {
        if (!Array.isArray(a) || !a.length) return;
        const s = a[0];
        let l, c;
        if ("borderBoxSize" in s) {
          const h = s.borderBoxSize, y = Array.isArray(h) ? h[0] : h;
          l = y.inlineSize, c = y.blockSize;
        } else {
          const h = e3.getBoundingClientRect();
          l = h.width, c = h.height;
        }
        r({ width: l, height: c });
      }));
      return o.observe(e3, { box: "border-box" }), () => o.unobserve(e3);
    }
    r(void 0);
  }), [e3]), t;
}
function tR(e3, t) {
  const r = $n.get(e3);
  return r === void 0 ? ($n.set(e3, { rect: {}, callbacks: [t] }), $n.size === 1 && (Kl = requestAnimationFrame(Iv))) : (r.callbacks.push(t), t(e3.getBoundingClientRect())), () => {
    const o = $n.get(e3);
    if (o === void 0) return;
    const a = o.callbacks.indexOf(t);
    a > -1 && o.callbacks.splice(a, 1), o.callbacks.length === 0 && ($n.delete(e3), $n.size === 0 && cancelAnimationFrame(Kl));
  };
}
let Kl;
const $n = /* @__PURE__ */ new Map();
function Iv() {
  const e3 = [];
  $n.forEach(((t, r) => {
    const o = r.getBoundingClientRect();
    var a, s;
    a = t.rect, s = o, (a.width !== s.width || a.height !== s.height || a.top !== s.top || a.right !== s.right || a.bottom !== s.bottom || a.left !== s.left) && (t.rect = o, e3.push(t));
  })), e3.forEach(((t) => {
    t.callbacks.forEach(((r) => r(t.rect)));
  })), Kl = requestAnimationFrame(Iv);
}
function rR(e3) {
  const [t, r] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState();
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    if (e3) {
      const o = tR(e3, r);
      return () => {
        r(void 0), o();
      };
    }
  }), [e3]), t;
}
function Lv(e3, t = []) {
  let r = [];
  const o = () => {
    const a = r.map(((s) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(s)));
    return function(s) {
      const l = (s == null ? void 0 : s[e3]) || a;
      return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo((() => ({ [`__scope${e3}`]: { ...s, [e3]: l } })), [s, l]);
    };
  };
  return o.scopeName = e3, [function(a, s) {
    const l = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(s), c = r.length;
    function h(y) {
      const { scope: v, children: g, ...p } = y, w = (v == null ? void 0 : v[e3][c]) || l, S = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo((() => p), Object.values(p));
      return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(w.Provider, { value: S }, g);
    }
    return r = [...r, s], h.displayName = a + "Provider", [h, function(y, v) {
      const g = (v == null ? void 0 : v[e3][c]) || l, p = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(g);
      if (p) return p;
      if (s !== void 0) return s;
      throw new Error(`\`${y}\` must be used within \`${a}\``);
    }];
  }, nR(o, ...t)];
}
function nR(...e3) {
  const t = e3[0];
  if (e3.length === 1) return t;
  const r = () => {
    const o = e3.map(((a) => ({ useScope: a(), scopeName: a.scopeName })));
    return function(a) {
      const s = o.reduce(((l, { useScope: c, scopeName: h }) => ({ ...l, ...c(a)[`__scope${h}`] })), {});
      return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo((() => ({ [`__scope${t.scopeName}`]: s })), [s]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function iR({ anchorRect: e3, popperSize: t, arrowSize: r, arrowOffset: o = 0, side: a, sideOffset: s = 0, align: l, alignOffset: c = 0, shouldAvoidCollisions: h = true, collisionBoundariesRect: y, collisionTolerance: v = 0 }) {
  if (!e3 || !t || !y) return { popperStyles: oR, arrowStyles: wl };
  const g = (function(W, L, M = 0, j = 0, D) {
    const I = D ? D.height : 0, B = Lh(L, W, "x"), H = Lh(L, W, "y"), k = H.before - M - I, X = H.after + M + I, V = B.before - M - I, ee = B.after + M + I;
    return { top: { start: { x: B.start + j, y: k }, center: { x: B.center, y: k }, end: { x: B.end - j, y: k } }, right: { start: { x: ee, y: H.start + j }, center: { x: ee, y: H.center }, end: { x: ee, y: H.end - j } }, bottom: { start: { x: B.start + j, y: X }, center: { x: B.center, y: X }, end: { x: B.end - j, y: X } }, left: { start: { x: V, y: H.start + j }, center: { x: V, y: H.center }, end: { x: V, y: H.end - j } } };
  })(t, e3, s, c, r), p = g[a][l];
  if (h === false) {
    const W = Mh(p);
    let L = wl;
    return r && (L = Nh({ popperSize: t, arrowSize: r, arrowOffset: o, side: a, align: l })), { popperStyles: { ...W, "--radix-popper-transform-origin": Fh(t, a, l, o, r) }, arrowStyles: L, placedSide: a, placedAlign: l };
  }
  const w = DOMRect.fromRect({ ...t, ...p }), S = (f = y, b = v, DOMRect.fromRect({ width: f.width - 2 * b, height: f.height - 2 * b, x: f.left + b, y: f.top + b }));
  var f, b;
  const d = zh(w, S), x = g[Dh(a)][l], _ = (function(W, L, M) {
    const j = Dh(W);
    return L[W] && !M[j] ? j : W;
  })(a, d, zh(DOMRect.fromRect({ ...t, ...x }), S)), R = (function(W, L, M, j, D) {
    const I = M === "top" || M === "bottom", B = I ? "left" : "top", H = I ? "right" : "bottom", k = I ? "width" : "height", X = L[k] > W[k];
    return (j === "start" || j === "center") && (D[B] && X || D[H] && !X) ? "end" : (j === "end" || j === "center") && (D[H] && X || D[B] && !X) ? "start" : j;
  })(t, e3, a, l, d), A = Mh(g[_][R]);
  let C = wl;
  return r && (C = Nh({ popperSize: t, arrowSize: r, arrowOffset: o, side: _, align: R })), { popperStyles: { ...A, "--radix-popper-transform-origin": Fh(t, _, R, o, r) }, arrowStyles: C, placedSide: _, placedAlign: R };
}
function Lh(e3, t, r) {
  const o = e3[r === "x" ? "left" : "top"], a = r === "x" ? "width" : "height", s = e3[a], l = t[a];
  return { before: o - l, start: o, center: o + (s - l) / 2, end: o + s - l, after: o + s };
}
function Mh(e3) {
  return { position: "absolute", top: 0, left: 0, minWidth: "max-content", willChange: "transform", transform: `translate3d(${Math.round(e3.x + window.scrollX)}px, ${Math.round(e3.y + window.scrollY)}px, 0)` };
}
function Fh(e3, t, r, o, a) {
  const s = t === "top" || t === "bottom", l = a ? a.width : 0, c = a ? a.height : 0, h = l / 2 + o;
  let y = "", v = "";
  return s ? (y = { start: `${h}px`, center: "center", end: e3.width - h + "px" }[r], v = t === "top" ? `${e3.height + c}px` : -c + "px") : (y = t === "left" ? `${e3.width + c}px` : -c + "px", v = { start: `${h}px`, center: "center", end: e3.height - h + "px" }[r]), `${y} ${v}`;
}
const oR = { position: "fixed", top: 0, left: 0, opacity: 0, transform: "translate3d(0, -200%, 0)" }, wl = { position: "absolute", opacity: 0 };
function Nh({ popperSize: e3, arrowSize: t, arrowOffset: r, side: o, align: a }) {
  const s = (e3.width - t.width) / 2, l = (e3.height - t.width) / 2, c = { top: 0, right: 90, bottom: 180, left: -90 }[o], h = Math.max(t.width, t.height), y = { width: `${h}px`, height: `${h}px`, transform: `rotate(${c}deg)`, willChange: "transform", position: "absolute", [o]: "100%", direction: aR(o, a) };
  return o !== "top" && o !== "bottom" || (a === "start" && (y.left = `${r}px`), a === "center" && (y.left = `${s}px`), a === "end" && (y.right = `${r}px`)), o !== "left" && o !== "right" || (a === "start" && (y.top = `${r}px`), a === "center" && (y.top = `${l}px`), a === "end" && (y.bottom = `${r}px`)), y;
}
function aR(e3, t) {
  return (e3 !== "top" && e3 !== "right" || t !== "end") && (e3 !== "bottom" && e3 !== "left" || t === "end") ? "ltr" : "rtl";
}
function Dh(e3) {
  return { top: "bottom", right: "left", bottom: "top", left: "right" }[e3];
}
function zh(e3, t) {
  return { top: e3.top < t.top, right: e3.right > t.right, bottom: e3.bottom > t.bottom, left: e3.left < t.left };
}
const [Mv, Fv] = Lv("Popper"), [sR, Nv] = Mv("Popper"), uR = (e3) => {
  const { __scopePopper: t, children: r } = e3, [o, a] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(null);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(sR, { scope: t, anchor: o, onAnchorChange: a }, r);
}, lR = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopper: r, virtualRef: o, ...a } = e3, s = Nv("PopperAnchor", r), l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), c = qn(t, l);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    s.onAnchorChange((o == null ? void 0 : o.current) || l.current);
  })), o ? null : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(xi.div, pt({}, a, { ref: c }));
})), [cR, gI] = Mv("PopperContent"), fR = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopper: r, side: o = "bottom", sideOffset: a, align: s = "center", alignOffset: l, collisionTolerance: c, avoidCollisions: h = true, ...y } = e3, v = Nv("PopperContent", r), [g, p] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(), w = rR(v.anchor), [S, f] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(null), b = Ih(S), [d, x] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(null), _ = Ih(d), R = qn(t, ((I) => f(I))), A = (function() {
    const [I, B] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(void 0);
    return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
      let H;
      function k() {
        B({ width: window.innerWidth, height: window.innerHeight });
      }
      function X() {
        window.clearTimeout(H), H = window.setTimeout(k, 100);
      }
      return k(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
    }), []), I;
  })(), C = A ? DOMRect.fromRect({ ...A, x: 0, y: 0 }) : void 0, { popperStyles: W, arrowStyles: L, placedSide: M, placedAlign: j } = iR({ anchorRect: w, popperSize: b, arrowSize: _, arrowOffset: g, side: o, sideOffset: a, align: s, alignOffset: l, shouldAvoidCollisions: h, collisionBoundariesRect: C, collisionTolerance: c }), D = M !== void 0;
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement("div", { style: W, "data-radix-popper-content-wrapper": "" }, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(cR, { scope: r, arrowStyles: L, onArrowChange: x, onArrowOffsetChange: p }, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(xi.div, pt({ "data-side": M, "data-align": j }, y, { style: { ...y.style, animation: D ? void 0 : "none" }, ref: R }))));
})), dR = uR, pR = lR, hR = fR;
function gR({ prop: e3, defaultProp: t, onChange: r = (() => {
}) }) {
  const [o, a] = (function({ defaultProp: h, onChange: y }) {
    const v = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(h), [g] = v, p = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(g), w = Bn(y);
    return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
      p.current !== g && (w(g), p.current = g);
    }), [g, p, w]), v;
  })({ defaultProp: t, onChange: r }), s = e3 !== void 0, l = s ? e3 : o, c = Bn(r);
  return [l, qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(((h) => {
    if (s) {
      const y = h, v = typeof h == "function" ? y(e3) : h;
      v !== e3 && c(v);
    } else a(h);
  }), [s, e3, a, c])];
}
const [vR] = Lv("Popover", [Fv]), bc = Fv(), [mR, Co] = vR("Popover"), yR = (e3) => {
  const { __scopePopover: t, children: r, open: o, defaultOpen: a, onOpenChange: s, modal: l = false } = e3, c = bc(t), h = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), [y, v] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(false), [g = false, p] = gR({ prop: o, defaultProp: a, onChange: s });
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(dR, c, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(mR, { scope: t, contentId: HT(), triggerRef: h, open: g, onOpenChange: p, onOpenToggle: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback((() => p(((w) => !w))), [p]), hasCustomAnchor: y, onCustomAnchorAdd: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback((() => v(true)), []), onCustomAnchorRemove: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback((() => v(false)), []), modal: l }, r));
}, wR = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopover: r, ...o } = e3, a = Co("PopoverTrigger", r), s = bc(r), l = qn(t, a.triggerRef), c = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(xi.button, pt({ type: "button", "aria-haspopup": "dialog", "aria-expanded": a.open, "aria-controls": a.contentId, "data-state": zv(a.open) }, o, { ref: l, onClick: zn(e3.onClick, a.onOpenToggle) }));
  return a.hasCustomAnchor ? c : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(pR, pt({ asChild: true }, s), c);
})), bR = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { forceMount: r, ...o } = e3, a = Co("PopoverContent", e3.__scopePopover);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(Cv, { present: r || a.open }, a.modal ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(SR, pt({}, o, { ref: t })) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(xR, pt({}, o, { ref: t })));
})), SR = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { allowPinchZoom: r, portalled: o = true, ...a } = e3, s = Co("PopoverContent", e3.__scopePopover), l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), c = qn(t, l), h = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect((() => {
    const v = l.current;
    if (v) return iT(v);
  }), []);
  const y = o ? $v : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment;
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(y, null, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(Rv, { allowPinchZoom: r }, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(Dv, pt({}, a, { ref: c, trapFocus: s.open, disableOutsidePointerEvents: true, onCloseAutoFocus: zn(e3.onCloseAutoFocus, ((v) => {
    var g;
    v.preventDefault(), h.current || (g = s.triggerRef.current) === null || g === void 0 || g.focus();
  })), onPointerDownOutside: zn(e3.onPointerDownOutside, ((v) => {
    const g = v.detail.originalEvent, p = g.button === 0 && g.ctrlKey === true, w = g.button === 2 || p;
    h.current = w;
  }), { checkForDefaultPrevented: false }), onFocusOutside: zn(e3.onFocusOutside, ((v) => v.preventDefault()), { checkForDefaultPrevented: false }) }))));
})), xR = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { portalled: r = true, ...o } = e3, a = Co("PopoverContent", e3.__scopePopover), s = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false), l = r ? $v : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment;
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(l, null, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(Dv, pt({}, o, { ref: t, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (c) => {
    var h, y;
    (h = e3.onCloseAutoFocus) === null || h === void 0 || h.call(e3, c), c.defaultPrevented || (s.current || (y = a.triggerRef.current) === null || y === void 0 || y.focus(), c.preventDefault()), s.current = false;
  }, onInteractOutside: (c) => {
    var h, y;
    (h = e3.onInteractOutside) === null || h === void 0 || h.call(e3, c), c.defaultPrevented || (s.current = true);
    const v = c.target;
    !((y = a.triggerRef.current) === null || y === void 0) && y.contains(v) && c.preventDefault();
  } })));
})), Dv = /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(((e3, t) => {
  const { __scopePopover: r, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: l, onEscapeKeyDown: c, onPointerDownOutside: h, onFocusOutside: y, onInteractOutside: v, ...g } = e3, p = Co("PopoverContent", r), w = bc(r);
  return ZT(), /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(KT, { asChild: true, loop: true, trapped: o, onMountAutoFocus: a, onUnmountAutoFocus: s }, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(eR, { asChild: true, disableOutsidePointerEvents: l, onInteractOutside: v, onEscapeKeyDown: c, onPointerDownOutside: h, onFocusOutside: y, onDismiss: () => p.onOpenChange(false) }, /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(hR, pt({ "data-state": zv(p.open), role: "dialog", id: p.contentId }, w, g, { ref: t, style: { ...g.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)" } }))));
}));
function zv(e3) {
  return e3 ? "open" : "closed";
}
const _R = yR, ER = wR, OR = bR;
var Qa = /* @__PURE__ */ ((e3) => (e3.VIDEO = "video", e3.CAROUSEL = "carousel", e3.TEXT = "text", e3))(Qa || {}), bl = {}, eo = {}, Na = {}, Da = {}, za = { exports: {} };
var xl, qh;
function Sc() {
  if (qh) return xl;
  qh = 1;
  var e3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xl = e3, xl;
}
var Al, Kh;
function CR() {
  if (Kh) return Al;
  Kh = 1;
  var e3 = /* @__PURE__ */ Sc();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Al = function() {
    function o(l, c, h, y, v, g) {
      if (g !== e3) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    o.isRequired = o;
    function a() {
      return o;
    }
    var s = {
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
      checkPropTypes: r,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Al;
}
var Vh;
function $R() {
  if (Vh) return za.exports;
  if (Vh = 1, false) ; else
    za.exports = /* @__PURE__ */ CR()();
  return za.exports;
}
var Yh;
function IR() {
  return Yh || (Yh = 1, (function(e3) {
    (function(t, r) {
      r(e3, o, /* @__PURE__ */ $R());
    })(Da, function(t, r, o) {
      Object.defineProperty(t, "__esModule", {
        value: true
      }), t.setHasSupportToCaptureOption = S;
      var a = l(r), s = l(o);
      function l(x) {
        return x && x.__esModule ? x : {
          default: x
        };
      }
      var c = Object.assign || function(x) {
        for (var _ = 1; _ < arguments.length; _++) {
          var R = arguments[_];
          for (var A in R)
            Object.prototype.hasOwnProperty.call(R, A) && (x[A] = R[A]);
        }
        return x;
      };
      function h(x, _) {
        var R = {};
        for (var A in x)
          _.indexOf(A) >= 0 || Object.prototype.hasOwnProperty.call(x, A) && (R[A] = x[A]);
        return R;
      }
      function y(x, _) {
        if (!(x instanceof _))
          throw new TypeError("Cannot call a class as a function");
      }
      var v = /* @__PURE__ */ (function() {
        function x(_, R) {
          for (var A = 0; A < R.length; A++) {
            var C = R[A];
            C.enumerable = C.enumerable || false, C.configurable = true, "value" in C && (C.writable = true), Object.defineProperty(_, C.key, C);
          }
        }
        return function(_, R, A) {
          return R && x(_.prototype, R), A && x(_, A), _;
        };
      })();
      function g(x, _) {
        if (!x)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _ && (typeof _ == "object" || typeof _ == "function") ? _ : x;
      }
      function p(x, _) {
        if (typeof _ != "function" && _ !== null)
          throw new TypeError("Super expression must either be null or a function, not " + typeof _);
        x.prototype = Object.create(_ && _.prototype, {
          constructor: {
            value: x,
            enumerable: false,
            writable: true,
            configurable: true
          }
        }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(x, _) : x.__proto__ = _);
      }
      var w = false;
      function S(x) {
        w = x;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function() {
          S(true);
        } }));
      } catch {
      }
      function f() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return w ? x : x.capture;
      }
      function b(x) {
        if ("touches" in x) {
          var _ = x.touches[0], R = _.pageX, A = _.pageY;
          return { x: R, y: A };
        }
        var C = x.screenX, W = x.screenY;
        return { x: C, y: W };
      }
      var d = (function(x) {
        p(_, x);
        function _() {
          var R;
          y(this, _);
          for (var A = arguments.length, C = Array(A), W = 0; W < A; W++)
            C[W] = arguments[W];
          var L = g(this, (R = _.__proto__ || Object.getPrototypeOf(_)).call.apply(R, [this].concat(C)));
          return L._handleSwipeStart = L._handleSwipeStart.bind(L), L._handleSwipeMove = L._handleSwipeMove.bind(L), L._handleSwipeEnd = L._handleSwipeEnd.bind(L), L._onMouseDown = L._onMouseDown.bind(L), L._onMouseMove = L._onMouseMove.bind(L), L._onMouseUp = L._onMouseUp.bind(L), L._setSwiperRef = L._setSwiperRef.bind(L), L;
        }
        return v(_, [{
          key: "componentDidMount",
          value: function() {
            this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, f({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, f({
              capture: true,
              passive: false
            }));
          }
        }, {
          key: "_onMouseDown",
          value: function(A) {
            this.props.allowMouseEvents && (this.mouseDown = true, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(A));
          }
        }, {
          key: "_onMouseMove",
          value: function(A) {
            this.mouseDown && this._handleSwipeMove(A);
          }
        }, {
          key: "_onMouseUp",
          value: function(A) {
            this.mouseDown = false, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(A);
          }
        }, {
          key: "_handleSwipeStart",
          value: function(A) {
            var C = b(A), W = C.x, L = C.y;
            this.moveStart = { x: W, y: L }, this.props.onSwipeStart(A);
          }
        }, {
          key: "_handleSwipeMove",
          value: function(A) {
            if (this.moveStart) {
              var C = b(A), W = C.x, L = C.y, M = W - this.moveStart.x, j = L - this.moveStart.y;
              this.moving = true;
              var D = this.props.onSwipeMove({
                x: M,
                y: j
              }, A);
              D && A.cancelable && A.preventDefault(), this.movePosition = { deltaX: M, deltaY: j };
            }
          }
        }, {
          key: "_handleSwipeEnd",
          value: function(A) {
            this.props.onSwipeEnd(A);
            var C = this.props.tolerance;
            this.moving && this.movePosition && (this.movePosition.deltaX < -C ? this.props.onSwipeLeft(1, A) : this.movePosition.deltaX > C && this.props.onSwipeRight(1, A), this.movePosition.deltaY < -C ? this.props.onSwipeUp(1, A) : this.movePosition.deltaY > C && this.props.onSwipeDown(1, A)), this.moveStart = null, this.moving = false, this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function(A) {
            this.swiper = A, this.props.innerRef(A);
          }
        }, {
          key: "render",
          value: function() {
            var A = this.props;
            A.tagName;
            var C = A.className, W = A.style, L = A.children;
            A.allowMouseEvents, A.onSwipeUp, A.onSwipeDown, A.onSwipeLeft, A.onSwipeRight, A.onSwipeStart, A.onSwipeMove, A.onSwipeEnd, A.innerRef, A.tolerance;
            var M = h(A, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return a.default.createElement(
              this.props.tagName,
              c({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className: C,
                style: W
              }, M),
              L
            );
          }
        }]), _;
      })(r.Component);
      d.displayName = "ReactSwipe", d.propTypes = {
        tagName: s.default.string,
        className: s.default.string,
        style: s.default.object,
        children: s.default.node,
        allowMouseEvents: s.default.bool,
        onSwipeUp: s.default.func,
        onSwipeDown: s.default.func,
        onSwipeLeft: s.default.func,
        onSwipeRight: s.default.func,
        onSwipeStart: s.default.func,
        onSwipeMove: s.default.func,
        onSwipeEnd: s.default.func,
        innerRef: s.default.func,
        tolerance: s.default.number.isRequired
      }, d.defaultProps = {
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
      }, t.default = d;
    });
  })(Da)), Da;
}
var Xh;
function Uv() {
  return Xh || (Xh = 1, (function(e3) {
    (function(t, r) {
      r(e3, IR());
    })(Na, function(t, r) {
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      var o = a(r);
      function a(s) {
        return s && s.__esModule ? s : {
          default: s
        };
      }
      t.default = o.default;
    });
  })(Na)), Na;
}
var to = {}, Jh;
function Hv() {
  if (Jh) return to;
  Jh = 1, Object.defineProperty(to, "__esModule", {
    value: true
  }), to.default = void 0;
  var e3 = t(iv());
  function t(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a, s, l) {
    return s in a ? Object.defineProperty(a, s, { value: l, enumerable: true, configurable: true, writable: true }) : a[s] = l, a;
  }
  var o = {
    ROOT: function(s) {
      return (0, e3.default)(r({
        "carousel-root": true
      }, s || "", !!s));
    },
    CAROUSEL: function(s) {
      return (0, e3.default)({
        carousel: true,
        "carousel-slider": s
      });
    },
    WRAPPER: function(s, l) {
      return (0, e3.default)({
        "thumbs-wrapper": !s,
        "slider-wrapper": s,
        "axis-horizontal": l === "horizontal",
        "axis-vertical": l !== "horizontal"
      });
    },
    SLIDER: function(s, l) {
      return (0, e3.default)({
        thumbs: !s,
        slider: s,
        animated: !l
      });
    },
    ITEM: function(s, l, c) {
      return (0, e3.default)({
        thumb: !s,
        slide: s,
        selected: l,
        previous: c
      });
    },
    ARROW_PREV: function(s) {
      return (0, e3.default)({
        "control-arrow control-prev": true,
        "control-disabled": s
      });
    },
    ARROW_NEXT: function(s) {
      return (0, e3.default)({
        "control-arrow control-next": true,
        "control-disabled": s
      });
    },
    DOT: function(s) {
      return (0, e3.default)({
        dot: true,
        selected: s
      });
    }
  };
  return to.default = o, to;
}
var ro = {}, no = {}, Qh;
function LR() {
  if (Qh) return no;
  Qh = 1, Object.defineProperty(no, "__esModule", {
    value: true
  }), no.outerWidth = void 0;
  var e3 = function(r) {
    var o = r.offsetWidth, a = getComputedStyle(r);
    return o += parseInt(a.marginLeft) + parseInt(a.marginRight), o;
  };
  return no.outerWidth = e3, no;
}
var io = {}, eg;
function xc() {
  if (eg) return io;
  eg = 1, Object.defineProperty(io, "__esModule", {
    value: true
  }), io.default = void 0;
  var e3 = function(r, o, a) {
    var s = r === 0 ? r : r + o, l = a === "horizontal" ? [s, 0, 0] : [0, s, 0], c = "translate3d", h = "(" + l.join(",") + ")";
    return c + h;
  };
  return io.default = e3, io;
}
var oo = {}, tg;
function qv() {
  if (tg) return oo;
  tg = 1, Object.defineProperty(oo, "__esModule", {
    value: true
  }), oo.default = void 0;
  var e3 = function() {
    return window;
  };
  return oo.default = e3, oo;
}
var rg;
function jv() {
  if (rg) return ro;
  rg = 1, Object.defineProperty(ro, "__esModule", {
    value: true
  }), ro.default = void 0;
  var e3 = h(o), t = l(Hv()), r = LR(), o$1 = l(xc()), a = l(Uv()), s = l(qv());
  function l(L) {
    return L && L.__esModule ? L : { default: L };
  }
  function c() {
    if (typeof WeakMap != "function") return null;
    var L = /* @__PURE__ */ new WeakMap();
    return c = function() {
      return L;
    }, L;
  }
  function h(L) {
    if (L && L.__esModule)
      return L;
    if (L === null || y(L) !== "object" && typeof L != "function")
      return { default: L };
    var M = c();
    if (M && M.has(L))
      return M.get(L);
    var j = {}, D = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var I in L)
      if (Object.prototype.hasOwnProperty.call(L, I)) {
        var B = D ? Object.getOwnPropertyDescriptor(L, I) : null;
        B && (B.get || B.set) ? Object.defineProperty(j, I, B) : j[I] = L[I];
      }
    return j.default = L, M && M.set(L, j), j;
  }
  function y(L) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? y = function(j) {
      return typeof j;
    } : y = function(j) {
      return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
    }, y(L);
  }
  function v() {
    return v = Object.assign || function(L) {
      for (var M = 1; M < arguments.length; M++) {
        var j = arguments[M];
        for (var D in j)
          Object.prototype.hasOwnProperty.call(j, D) && (L[D] = j[D]);
      }
      return L;
    }, v.apply(this, arguments);
  }
  function g(L, M) {
    if (!(L instanceof M))
      throw new TypeError("Cannot call a class as a function");
  }
  function p(L, M) {
    for (var j = 0; j < M.length; j++) {
      var D = M[j];
      D.enumerable = D.enumerable || false, D.configurable = true, "value" in D && (D.writable = true), Object.defineProperty(L, D.key, D);
    }
  }
  function w(L, M, j) {
    return M && p(L.prototype, M), L;
  }
  function S(L, M) {
    if (typeof M != "function" && M !== null)
      throw new TypeError("Super expression must either be null or a function");
    L.prototype = Object.create(M && M.prototype, { constructor: { value: L, writable: true, configurable: true } }), M && f(L, M);
  }
  function f(L, M) {
    return f = Object.setPrototypeOf || function(D, I) {
      return D.__proto__ = I, D;
    }, f(L, M);
  }
  function b(L) {
    var M = _();
    return function() {
      var D = R(L), I;
      if (M) {
        var B = R(this).constructor;
        I = Reflect.construct(D, arguments, B);
      } else
        I = D.apply(this, arguments);
      return d(this, I);
    };
  }
  function d(L, M) {
    return M && (y(M) === "object" || typeof M == "function") ? M : x(L);
  }
  function x(L) {
    if (L === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return L;
  }
  function _() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function R(L) {
    return R = Object.setPrototypeOf ? Object.getPrototypeOf : function(j) {
      return j.__proto__ || Object.getPrototypeOf(j);
    }, R(L);
  }
  function A(L, M, j) {
    return M in L ? Object.defineProperty(L, M, { value: j, enumerable: true, configurable: true, writable: true }) : L[M] = j, L;
  }
  var C = function(M) {
    return M.hasOwnProperty("key");
  }, W = /* @__PURE__ */ (function(L) {
    S(j, L);
    var M = b(j);
    function j(D) {
      var I;
      return g(this, j), I = M.call(this, D), A(x(I), "itemsWrapperRef", void 0), A(x(I), "itemsListRef", void 0), A(x(I), "thumbsRef", void 0), A(x(I), "setItemsWrapperRef", function(B) {
        I.itemsWrapperRef = B;
      }), A(x(I), "setItemsListRef", function(B) {
        I.itemsListRef = B;
      }), A(x(I), "setThumbsRef", function(B, H) {
        I.thumbsRef || (I.thumbsRef = []), I.thumbsRef[H] = B;
      }), A(x(I), "updateSizes", function() {
        if (!(!I.props.children || !I.itemsWrapperRef || !I.thumbsRef)) {
          var B = e3.Children.count(I.props.children), H = I.itemsWrapperRef.clientWidth, k = I.props.thumbWidth ? I.props.thumbWidth : (0, r.outerWidth)(I.thumbsRef[0]), X = Math.floor(H / k), V = X < B, ee = V ? B - X : 0;
          I.setState(function(fe, q) {
            return {
              itemSize: k,
              visibleItems: X,
              firstItem: V ? I.getFirstItem(q.selectedItem) : 0,
              lastPosition: ee,
              showArrows: V
            };
          });
        }
      }), A(x(I), "handleClickItem", function(B, H, k) {
        if (!C(k) || k.key === "Enter") {
          var X = I.props.onSelectItem;
          typeof X == "function" && X(B, H);
        }
      }), A(x(I), "onSwipeStart", function() {
        I.setState({
          swiping: true
        });
      }), A(x(I), "onSwipeEnd", function() {
        I.setState({
          swiping: false
        });
      }), A(x(I), "onSwipeMove", function(B) {
        var H = B.x;
        if (!I.state.itemSize || !I.itemsWrapperRef || !I.state.visibleItems)
          return false;
        var k = 0, X = e3.Children.count(I.props.children), V = -(I.state.firstItem * 100) / I.state.visibleItems, ee = Math.max(X - I.state.visibleItems, 0), fe = -ee * 100 / I.state.visibleItems;
        V === k && H > 0 && (H = 0), V === fe && H < 0 && (H = 0);
        var q = I.itemsWrapperRef.clientWidth, J = V + 100 / (q / H);
        return I.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(oe) {
          I.itemsListRef.style[oe] = (0, o$1.default)(J, "%", I.props.axis);
        }), true;
      }), A(x(I), "slideRight", function(B) {
        I.moveTo(I.state.firstItem - (typeof B == "number" ? B : 1));
      }), A(x(I), "slideLeft", function(B) {
        I.moveTo(I.state.firstItem + (typeof B == "number" ? B : 1));
      }), A(x(I), "moveTo", function(B) {
        B = B < 0 ? 0 : B, B = B >= I.state.lastPosition ? I.state.lastPosition : B, I.setState({
          firstItem: B
        });
      }), I.state = {
        selectedItem: D.selectedItem,
        swiping: false,
        showArrows: false,
        firstItem: 0,
        visibleItems: 0,
        lastPosition: 0
      }, I;
    }
    return w(j, [{
      key: "componentDidMount",
      value: function() {
        this.setupThumbs();
      }
    }, {
      key: "componentDidUpdate",
      value: function(I) {
        this.props.selectedItem !== this.state.selectedItem && this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        }), this.props.children !== I.children && this.updateSizes();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.destroyThumbs();
      }
    }, {
      key: "setupThumbs",
      value: function() {
        (0, s.default)().addEventListener("resize", this.updateSizes), (0, s.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes();
      }
    }, {
      key: "destroyThumbs",
      value: function() {
        (0, s.default)().removeEventListener("resize", this.updateSizes), (0, s.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      }
    }, {
      key: "getFirstItem",
      value: function(I) {
        var B = I;
        return I >= this.state.lastPosition && (B = this.state.lastPosition), I < this.state.firstItem + this.state.visibleItems && (B = this.state.firstItem), I < this.state.firstItem && (B = I), B;
      }
    }, {
      key: "renderItems",
      value: function() {
        var I = this;
        return this.props.children.map(function(B, H) {
          var k = t.default.ITEM(false, H === I.state.selectedItem), X = {
            key: H,
            ref: function(ee) {
              return I.setThumbsRef(ee, H);
            },
            className: k,
            onClick: I.handleClickItem.bind(I, H, I.props.children[H]),
            onKeyDown: I.handleClickItem.bind(I, H, I.props.children[H]),
            "aria-label": "".concat(I.props.labels.item, " ").concat(H + 1),
            style: {
              width: I.props.thumbWidth
            }
          };
          return /* @__PURE__ */ e3.default.createElement("li", v({}, X, {
            role: "button",
            tabIndex: 0
          }), B);
        });
      }
    }, {
      key: "render",
      value: function() {
        var I = this;
        if (!this.props.children)
          return null;
        var B = e3.Children.count(this.props.children) > 1, H = this.state.showArrows && this.state.firstItem > 0, k = this.state.showArrows && this.state.firstItem < this.state.lastPosition, X = {}, V = -this.state.firstItem * (this.state.itemSize || 0), ee = (0, o$1.default)(V, "px", this.props.axis), fe = this.props.transitionTime + "ms";
        return X = {
          WebkitTransform: ee,
          MozTransform: ee,
          MsTransform: ee,
          OTransform: ee,
          transform: ee,
          msTransform: ee,
          WebkitTransitionDuration: fe,
          MozTransitionDuration: fe,
          MsTransitionDuration: fe,
          OTransitionDuration: fe,
          transitionDuration: fe,
          msTransitionDuration: fe
        }, /* @__PURE__ */ e3.default.createElement("div", {
          className: t.default.CAROUSEL(false)
        }, /* @__PURE__ */ e3.default.createElement("div", {
          className: t.default.WRAPPER(false),
          ref: this.setItemsWrapperRef
        }, /* @__PURE__ */ e3.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_PREV(!H),
          onClick: function() {
            return I.slideRight();
          },
          "aria-label": this.props.labels.leftArrow
        }), B ? /* @__PURE__ */ e3.default.createElement(a.default, {
          tagName: "ul",
          className: t.default.SLIDER(false, this.state.swiping),
          onSwipeLeft: this.slideLeft,
          onSwipeRight: this.slideRight,
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: X,
          innerRef: this.setItemsListRef,
          allowMouseEvents: this.props.emulateTouch
        }, this.renderItems()) : /* @__PURE__ */ e3.default.createElement("ul", {
          className: t.default.SLIDER(false, this.state.swiping),
          ref: function(J) {
            return I.setItemsListRef(J);
          },
          style: X
        }, this.renderItems()), /* @__PURE__ */ e3.default.createElement("button", {
          type: "button",
          className: t.default.ARROW_NEXT(!k),
          onClick: function() {
            return I.slideLeft();
          },
          "aria-label": this.props.labels.rightArrow
        })));
      }
    }]), j;
  })(e3.Component);
  return ro.default = W, A(W, "displayName", "Thumbs"), A(W, "defaultProps", {
    axis: "horizontal",
    labels: {
      leftArrow: "previous slide / item",
      rightArrow: "next slide / item",
      item: "slide item"
    },
    selectedItem: 0,
    thumbWidth: 80,
    transitionTime: 350
  }), ro;
}
var ao = {}, ng;
function MR() {
  if (ng) return ao;
  ng = 1, Object.defineProperty(ao, "__esModule", {
    value: true
  }), ao.default = void 0;
  var e3 = function() {
    return document;
  };
  return ao.default = e3, ao;
}
var qt = {}, ig;
function Zv() {
  if (ig) return qt;
  ig = 1, Object.defineProperty(qt, "__esModule", {
    value: true
  }), qt.setPosition = qt.getPosition = qt.isKeyboardEvent = qt.defaultStatusFormatter = qt.noop = void 0;
  var e3 = o, t = r(xc());
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var o$1 = function() {
  };
  qt.noop = o$1;
  var a = function(y, v) {
    return "".concat(y, " of ").concat(v);
  };
  qt.defaultStatusFormatter = a;
  var s = function(y) {
    return y ? y.hasOwnProperty("key") : false;
  };
  qt.isKeyboardEvent = s;
  var l = function(y, v) {
    if (v.infiniteLoop && ++y, y === 0)
      return 0;
    var g = e3.Children.count(v.children);
    if (v.centerMode && v.axis === "horizontal") {
      var p = -y * v.centerSlidePercentage, w = g - 1;
      return y && (y !== w || v.infiniteLoop) ? p += (100 - v.centerSlidePercentage) / 2 : y === w && (p += 100 - v.centerSlidePercentage), p;
    }
    return -y * 100;
  };
  qt.getPosition = l;
  var c = function(y, v) {
    var g = {};
    return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(p) {
      g[p] = (0, t.default)(y, "%", v);
    }), g;
  };
  return qt.setPosition = c, qt;
}
var dr = {}, og;
function FR() {
  if (og) return dr;
  og = 1, Object.defineProperty(dr, "__esModule", {
    value: true
  }), dr.fadeAnimationHandler = dr.slideStopSwipingHandler = dr.slideSwipeAnimationHandler = dr.slideAnimationHandler = void 0;
  var e3 = o, t = o$1(xc()), r = Zv();
  function o$1(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function a(g, p) {
    var w = Object.keys(g);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(g);
      p && (S = S.filter(function(f) {
        return Object.getOwnPropertyDescriptor(g, f).enumerable;
      })), w.push.apply(w, S);
    }
    return w;
  }
  function s(g) {
    for (var p = 1; p < arguments.length; p++) {
      var w = arguments[p] != null ? arguments[p] : {};
      p % 2 ? a(Object(w), true).forEach(function(S) {
        l(g, S, w[S]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(g, Object.getOwnPropertyDescriptors(w)) : a(Object(w)).forEach(function(S) {
        Object.defineProperty(g, S, Object.getOwnPropertyDescriptor(w, S));
      });
    }
    return g;
  }
  function l(g, p, w) {
    return p in g ? Object.defineProperty(g, p, { value: w, enumerable: true, configurable: true, writable: true }) : g[p] = w, g;
  }
  var c = function(p, w) {
    var S = {}, f = w.selectedItem, b = f, d = e3.Children.count(p.children) - 1, x = p.infiniteLoop && (f < 0 || f > d);
    if (x)
      return b < 0 ? p.centerMode && p.centerSlidePercentage && p.axis === "horizontal" ? S.itemListStyle = (0, r.setPosition)(-(d + 2) * p.centerSlidePercentage - (100 - p.centerSlidePercentage) / 2, p.axis) : S.itemListStyle = (0, r.setPosition)(-(d + 2) * 100, p.axis) : b > d && (S.itemListStyle = (0, r.setPosition)(0, p.axis)), S;
    var _ = (0, r.getPosition)(f, p), R = (0, t.default)(_, "%", p.axis), A = p.transitionTime + "ms";
    return S.itemListStyle = {
      WebkitTransform: R,
      msTransform: R,
      OTransform: R,
      transform: R
    }, w.swiping || (S.itemListStyle = s(s({}, S.itemListStyle), {}, {
      WebkitTransitionDuration: A,
      MozTransitionDuration: A,
      OTransitionDuration: A,
      transitionDuration: A,
      msTransitionDuration: A
    })), S;
  };
  dr.slideAnimationHandler = c;
  var h = function(p, w, S, f) {
    var b = {}, d = w.axis === "horizontal", x = e3.Children.count(w.children), _ = 0, R = (0, r.getPosition)(S.selectedItem, w), A = w.infiniteLoop ? (0, r.getPosition)(x - 1, w) - 100 : (0, r.getPosition)(x - 1, w), C = d ? p.x : p.y, W = C;
    R === _ && C > 0 && (W = 0), R === A && C < 0 && (W = 0);
    var L = R + 100 / (S.itemSize / W), M = Math.abs(C) > w.swipeScrollTolerance;
    return w.infiniteLoop && M && (S.selectedItem === 0 && L > -100 ? L -= x * 100 : S.selectedItem === x - 1 && L < -x * 100 && (L += x * 100)), (!w.preventMovementUntilSwipeScrollTolerance || M || S.swipeMovementStarted) && (S.swipeMovementStarted || f({
      swipeMovementStarted: true
    }), b.itemListStyle = (0, r.setPosition)(L, w.axis)), M && !S.cancelClick && f({
      cancelClick: true
    }), b;
  };
  dr.slideSwipeAnimationHandler = h;
  var y = function(p, w) {
    var S = (0, r.getPosition)(w.selectedItem, p), f = (0, r.setPosition)(S, p.axis);
    return {
      itemListStyle: f
    };
  };
  dr.slideStopSwipingHandler = y;
  var v = function(p, w) {
    var S = p.transitionTime + "ms", f = "ease-in-out", b = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      transitionTimingFunction: f,
      msTransitionTimingFunction: f,
      MozTransitionTimingFunction: f,
      WebkitTransitionTimingFunction: f,
      OTransitionTimingFunction: f
    };
    return w.swiping || (b = s(s({}, b), {}, {
      WebkitTransitionDuration: S,
      MozTransitionDuration: S,
      OTransitionDuration: S,
      transitionDuration: S,
      msTransitionDuration: S
    })), {
      slideStyle: b,
      selectedStyle: s(s({}, b), {}, {
        opacity: 1,
        position: "relative"
      }),
      prevStyle: s({}, b)
    };
  };
  return dr.fadeAnimationHandler = v, dr;
}
var ag;
function NR() {
  if (ag) return eo;
  ag = 1, Object.defineProperty(eo, "__esModule", {
    value: true
  }), eo.default = void 0;
  var e3 = v(o), t = h(Uv()), r = h(Hv()), o$1 = h(jv()), a = h(MR()), s = h(qv()), l = Zv(), c = FR();
  function h(D) {
    return D && D.__esModule ? D : { default: D };
  }
  function y() {
    if (typeof WeakMap != "function") return null;
    var D = /* @__PURE__ */ new WeakMap();
    return y = function() {
      return D;
    }, D;
  }
  function v(D) {
    if (D && D.__esModule)
      return D;
    if (D === null || g(D) !== "object" && typeof D != "function")
      return { default: D };
    var I = y();
    if (I && I.has(D))
      return I.get(D);
    var B = {}, H = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in D)
      if (Object.prototype.hasOwnProperty.call(D, k)) {
        var X = H ? Object.getOwnPropertyDescriptor(D, k) : null;
        X && (X.get || X.set) ? Object.defineProperty(B, k, X) : B[k] = D[k];
      }
    return B.default = D, I && I.set(D, B), B;
  }
  function g(D) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? g = function(B) {
      return typeof B;
    } : g = function(B) {
      return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
    }, g(D);
  }
  function p() {
    return p = Object.assign || function(D) {
      for (var I = 1; I < arguments.length; I++) {
        var B = arguments[I];
        for (var H in B)
          Object.prototype.hasOwnProperty.call(B, H) && (D[H] = B[H]);
      }
      return D;
    }, p.apply(this, arguments);
  }
  function w(D, I) {
    var B = Object.keys(D);
    if (Object.getOwnPropertySymbols) {
      var H = Object.getOwnPropertySymbols(D);
      I && (H = H.filter(function(k) {
        return Object.getOwnPropertyDescriptor(D, k).enumerable;
      })), B.push.apply(B, H);
    }
    return B;
  }
  function S(D) {
    for (var I = 1; I < arguments.length; I++) {
      var B = arguments[I] != null ? arguments[I] : {};
      I % 2 ? w(Object(B), true).forEach(function(H) {
        M(D, H, B[H]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(B)) : w(Object(B)).forEach(function(H) {
        Object.defineProperty(D, H, Object.getOwnPropertyDescriptor(B, H));
      });
    }
    return D;
  }
  function f(D, I) {
    if (!(D instanceof I))
      throw new TypeError("Cannot call a class as a function");
  }
  function b(D, I) {
    for (var B = 0; B < I.length; B++) {
      var H = I[B];
      H.enumerable = H.enumerable || false, H.configurable = true, "value" in H && (H.writable = true), Object.defineProperty(D, H.key, H);
    }
  }
  function d(D, I, B) {
    return I && b(D.prototype, I), D;
  }
  function x(D, I) {
    if (typeof I != "function" && I !== null)
      throw new TypeError("Super expression must either be null or a function");
    D.prototype = Object.create(I && I.prototype, { constructor: { value: D, writable: true, configurable: true } }), I && _(D, I);
  }
  function _(D, I) {
    return _ = Object.setPrototypeOf || function(H, k) {
      return H.__proto__ = k, H;
    }, _(D, I);
  }
  function R(D) {
    var I = W();
    return function() {
      var H = L(D), k;
      if (I) {
        var X = L(this).constructor;
        k = Reflect.construct(H, arguments, X);
      } else
        k = H.apply(this, arguments);
      return A(this, k);
    };
  }
  function A(D, I) {
    return I && (g(I) === "object" || typeof I == "function") ? I : C(D);
  }
  function C(D) {
    if (D === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return D;
  }
  function W() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
    if (typeof Proxy == "function") return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      })), true;
    } catch {
      return false;
    }
  }
  function L(D) {
    return L = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
      return B.__proto__ || Object.getPrototypeOf(B);
    }, L(D);
  }
  function M(D, I, B) {
    return I in D ? Object.defineProperty(D, I, { value: B, enumerable: true, configurable: true, writable: true }) : D[I] = B, D;
  }
  var j = /* @__PURE__ */ (function(D) {
    x(B, D);
    var I = R(B);
    function B(H) {
      var k;
      f(this, B), k = I.call(this, H), M(C(k), "thumbsRef", void 0), M(C(k), "carouselWrapperRef", void 0), M(C(k), "listRef", void 0), M(C(k), "itemsRef", void 0), M(C(k), "timer", void 0), M(C(k), "animationHandler", void 0), M(C(k), "setThumbsRef", function(V) {
        k.thumbsRef = V;
      }), M(C(k), "setCarouselWrapperRef", function(V) {
        k.carouselWrapperRef = V;
      }), M(C(k), "setListRef", function(V) {
        k.listRef = V;
      }), M(C(k), "setItemsRef", function(V, ee) {
        k.itemsRef || (k.itemsRef = []), k.itemsRef[ee] = V;
      }), M(C(k), "autoPlay", function() {
        e3.Children.count(k.props.children) <= 1 || (k.clearAutoPlay(), k.props.autoPlay && (k.timer = setTimeout(function() {
          k.increment();
        }, k.props.interval)));
      }), M(C(k), "clearAutoPlay", function() {
        k.timer && clearTimeout(k.timer);
      }), M(C(k), "resetAutoPlay", function() {
        k.clearAutoPlay(), k.autoPlay();
      }), M(C(k), "stopOnHover", function() {
        k.setState({
          isMouseEntered: true
        }, k.clearAutoPlay);
      }), M(C(k), "startOnLeave", function() {
        k.setState({
          isMouseEntered: false
        }, k.autoPlay);
      }), M(C(k), "isFocusWithinTheCarousel", function() {
        return k.carouselWrapperRef ? !!((0, a.default)().activeElement === k.carouselWrapperRef || k.carouselWrapperRef.contains((0, a.default)().activeElement)) : false;
      }), M(C(k), "navigateWithKeyboard", function(V) {
        if (k.isFocusWithinTheCarousel()) {
          var ee = k.props.axis, fe = ee === "horizontal", q = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          }, J = fe ? q.ArrowRight : q.ArrowDown, oe = fe ? q.ArrowLeft : q.ArrowUp;
          J === V.keyCode ? k.increment() : oe === V.keyCode && k.decrement();
        }
      }), M(C(k), "updateSizes", function() {
        if (!(!k.state.initialized || !k.itemsRef || k.itemsRef.length === 0)) {
          var V = k.props.axis === "horizontal", ee = k.itemsRef[0];
          if (ee) {
            var fe = V ? ee.clientWidth : ee.clientHeight;
            k.setState({
              itemSize: fe
            }), k.thumbsRef && k.thumbsRef.updateSizes();
          }
        }
      }), M(C(k), "setMountState", function() {
        k.setState({
          hasMount: true
        }), k.updateSizes();
      }), M(C(k), "handleClickItem", function(V, ee) {
        if (e3.Children.count(k.props.children) !== 0) {
          if (k.state.cancelClick) {
            k.setState({
              cancelClick: false
            });
            return;
          }
          k.props.onClickItem(V, ee), V !== k.state.selectedItem && k.setState({
            selectedItem: V
          });
        }
      }), M(C(k), "handleOnChange", function(V, ee) {
        e3.Children.count(k.props.children) <= 1 || k.props.onChange(V, ee);
      }), M(C(k), "handleClickThumb", function(V, ee) {
        k.props.onClickThumb(V, ee), k.moveTo(V);
      }), M(C(k), "onSwipeStart", function(V) {
        k.setState({
          swiping: true
        }), k.props.onSwipeStart(V);
      }), M(C(k), "onSwipeEnd", function(V) {
        k.setState({
          swiping: false,
          cancelClick: false,
          swipeMovementStarted: false
        }), k.props.onSwipeEnd(V), k.clearAutoPlay(), k.state.autoPlay && k.autoPlay();
      }), M(C(k), "onSwipeMove", function(V, ee) {
        k.props.onSwipeMove(ee);
        var fe = k.props.swipeAnimationHandler(V, k.props, k.state, k.setState.bind(C(k)));
        return k.setState(S({}, fe)), !!Object.keys(fe).length;
      }), M(C(k), "decrement", function() {
        var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        k.moveTo(k.state.selectedItem - (typeof V == "number" ? V : 1));
      }), M(C(k), "increment", function() {
        var V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
        k.moveTo(k.state.selectedItem + (typeof V == "number" ? V : 1));
      }), M(C(k), "moveTo", function(V) {
        if (typeof V == "number") {
          var ee = e3.Children.count(k.props.children) - 1;
          V < 0 && (V = k.props.infiniteLoop ? ee : 0), V > ee && (V = k.props.infiniteLoop ? 0 : ee), k.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: V
          }), k.state.autoPlay && k.state.isMouseEntered === false && k.resetAutoPlay();
        }
      }), M(C(k), "onClickNext", function() {
        k.increment(1);
      }), M(C(k), "onClickPrev", function() {
        k.decrement(1);
      }), M(C(k), "onSwipeForward", function() {
        k.increment(1), k.props.emulateTouch && k.setState({
          cancelClick: true
        });
      }), M(C(k), "onSwipeBackwards", function() {
        k.decrement(1), k.props.emulateTouch && k.setState({
          cancelClick: true
        });
      }), M(C(k), "changeItem", function(V) {
        return function(ee) {
          (!(0, l.isKeyboardEvent)(ee) || ee.key === "Enter") && k.moveTo(V);
        };
      }), M(C(k), "selectItem", function(V) {
        k.setState(S({
          previousItem: k.state.selectedItem
        }, V), function() {
          k.setState(k.animationHandler(k.props, k.state));
        }), k.handleOnChange(V.selectedItem, e3.Children.toArray(k.props.children)[V.selectedItem]);
      }), M(C(k), "getInitialImage", function() {
        var V = k.props.selectedItem, ee = k.itemsRef && k.itemsRef[V], fe = ee && ee.getElementsByTagName("img") || [];
        return fe[0];
      }), M(C(k), "getVariableItemHeight", function(V) {
        var ee = k.itemsRef && k.itemsRef[V];
        if (k.state.hasMount && ee && ee.children.length) {
          var fe = ee.children[0].getElementsByTagName("img") || [];
          if (fe.length > 0) {
            var q = fe[0];
            if (!q.complete) {
              var J = function re() {
                k.forceUpdate(), q.removeEventListener("load", re);
              };
              q.addEventListener("load", J);
            }
          }
          var oe = fe[0] || ee.children[0], se = oe.clientHeight;
          return se > 0 ? se : null;
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
      return k.animationHandler = typeof H.animationHandler == "function" && H.animationHandler || H.animationHandler === "fade" && c.fadeAnimationHandler || c.slideAnimationHandler, k.state = S(S({}, X), k.animationHandler(H, X)), k;
    }
    return d(B, [{
      key: "componentDidMount",
      value: function() {
        this.props.children && this.setupCarousel();
      }
    }, {
      key: "componentDidUpdate",
      value: function(k, X) {
        !k.children && this.props.children && !this.state.initialized && this.setupCarousel(), !k.autoFocus && this.props.autoFocus && this.forceFocus(), X.swiping && !this.state.swiping && this.setState(S({}, this.props.stopSwipingHandler(this.props, this.state))), (k.selectedItem !== this.props.selectedItem || k.centerMode !== this.props.centerMode) && (this.updateSizes(), this.moveTo(this.props.selectedItem)), k.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({
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
        var k = this;
        this.bindEvents(), this.state.autoPlay && e3.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({
          initialized: true
        }, function() {
          var X = k.getInitialImage();
          X && !X.complete ? X.addEventListener("load", k.setMountState) : k.setMountState();
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
        var k = this.carouselWrapperRef;
        this.props.stopOnHover && k && (k.addEventListener("mouseenter", this.stopOnHover), k.addEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "destroyAutoPlay",
      value: function() {
        this.clearAutoPlay();
        var k = this.carouselWrapperRef;
        this.props.stopOnHover && k && (k.removeEventListener("mouseenter", this.stopOnHover), k.removeEventListener("mouseleave", this.startOnLeave));
      }
    }, {
      key: "bindEvents",
      value: function() {
        (0, s.default)().addEventListener("resize", this.updateSizes), (0, s.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, a.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "unbindEvents",
      value: function() {
        (0, s.default)().removeEventListener("resize", this.updateSizes), (0, s.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        var k = this.getInitialImage();
        k && k.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, a.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }, {
      key: "forceFocus",
      value: function() {
        var k;
        (k = this.carouselWrapperRef) === null || k === void 0 || k.focus();
      }
    }, {
      key: "renderItems",
      value: function(k) {
        var X = this;
        return this.props.children ? e3.Children.map(this.props.children, function(V, ee) {
          var fe = ee === X.state.selectedItem, q = ee === X.state.previousItem, J = fe && X.state.selectedStyle || q && X.state.prevStyle || X.state.slideStyle || {};
          X.props.centerMode && X.props.axis === "horizontal" && (J = S(S({}, J), {}, {
            minWidth: X.props.centerSlidePercentage + "%"
          })), X.state.swiping && X.state.swipeMovementStarted && (J = S(S({}, J), {}, {
            pointerEvents: "none"
          }));
          var oe = {
            ref: function(re) {
              return X.setItemsRef(re, ee);
            },
            key: "itemKey" + ee + (k ? "clone" : ""),
            className: r.default.ITEM(true, ee === X.state.selectedItem, ee === X.state.previousItem),
            onClick: X.handleClickItem.bind(X, ee, V),
            style: J
          };
          return /* @__PURE__ */ e3.default.createElement("li", oe, X.props.renderItem(V, {
            isSelected: ee === X.state.selectedItem,
            isPrevious: ee === X.state.previousItem
          }));
        }) : [];
      }
    }, {
      key: "renderControls",
      value: function() {
        var k = this, X = this.props, V = X.showIndicators, ee = X.labels, fe = X.renderIndicator, q = X.children;
        return V ? /* @__PURE__ */ e3.default.createElement("ul", {
          className: "control-dots"
        }, e3.Children.map(q, function(J, oe) {
          return fe && fe(k.changeItem(oe), oe === k.state.selectedItem, oe, ee.item);
        })) : null;
      }
    }, {
      key: "renderStatus",
      value: function() {
        return this.props.showStatus ? /* @__PURE__ */ e3.default.createElement("p", {
          className: "carousel-status"
        }, this.props.statusFormatter(this.state.selectedItem + 1, e3.Children.count(this.props.children))) : null;
      }
    }, {
      key: "renderThumbs",
      value: function() {
        return !this.props.showThumbs || !this.props.children || e3.Children.count(this.props.children) === 0 ? null : /* @__PURE__ */ e3.default.createElement(o$1.default, {
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
        var k = this;
        if (!this.props.children || e3.Children.count(this.props.children) === 0)
          return null;
        var X = this.props.swipeable && e3.Children.count(this.props.children) > 1, V = this.props.axis === "horizontal", ee = this.props.showArrows && e3.Children.count(this.props.children) > 1, fe = ee && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false, q = ee && (this.state.selectedItem < e3.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false, J = this.renderItems(true), oe = J.shift(), se = J.pop(), re = {
          className: r.default.SLIDER(true, this.state.swiping),
          onSwipeMove: this.onSwipeMove,
          onSwipeStart: this.onSwipeStart,
          onSwipeEnd: this.onSwipeEnd,
          style: this.state.itemListStyle,
          tolerance: this.props.swipeScrollTolerance
        }, le = {};
        if (V) {
          if (re.onSwipeLeft = this.onSwipeForward, re.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
            var ce = this.getVariableItemHeight(this.state.selectedItem);
            le.height = ce || "auto";
          }
        } else
          re.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward, re.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards, re.style = S(S({}, re.style), {}, {
            height: this.state.itemSize
          }), le.height = this.state.itemSize;
        return /* @__PURE__ */ e3.default.createElement("div", {
          "aria-label": this.props.ariaLabel,
          className: r.default.ROOT(this.props.className),
          ref: this.setCarouselWrapperRef,
          tabIndex: this.props.useKeyboardArrows ? 0 : void 0
        }, /* @__PURE__ */ e3.default.createElement("div", {
          className: r.default.CAROUSEL(true),
          style: {
            width: this.props.width
          }
        }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, fe, this.props.labels.leftArrow), /* @__PURE__ */ e3.default.createElement("div", {
          className: r.default.WRAPPER(true, this.props.axis),
          style: le
        }, X ? /* @__PURE__ */ e3.default.createElement(t.default, p({
          tagName: "ul",
          innerRef: this.setListRef
        }, re, {
          allowMouseEvents: this.props.emulateTouch
        }), this.props.infiniteLoop && se, this.renderItems(), this.props.infiniteLoop && oe) : /* @__PURE__ */ e3.default.createElement("ul", {
          className: r.default.SLIDER(true, this.state.swiping),
          ref: function(ge) {
            return k.setListRef(ge);
          },
          style: this.state.itemListStyle || {}
        }, this.props.infiniteLoop && se, this.renderItems(), this.props.infiniteLoop && oe)), this.props.renderArrowNext(this.onClickNext, q, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
      }
    }]), B;
  })(e3.default.Component);
  return eo.default = j, M(j, "displayName", "Carousel"), M(j, "defaultProps", {
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
    renderArrowPrev: function(I, B, H) {
      return /* @__PURE__ */ e3.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: r.default.ARROW_PREV(!B),
        onClick: I
      });
    },
    renderArrowNext: function(I, B, H) {
      return /* @__PURE__ */ e3.default.createElement("button", {
        type: "button",
        "aria-label": H,
        className: r.default.ARROW_NEXT(!B),
        onClick: I
      });
    },
    renderIndicator: function(I, B, H, k) {
      return /* @__PURE__ */ e3.default.createElement("li", {
        className: r.default.DOT(B),
        onClick: I,
        onKeyDown: I,
        value: H,
        key: H,
        role: "button",
        tabIndex: 0,
        "aria-label": "".concat(k, " ").concat(H + 1)
      });
    },
    renderItem: function(I) {
      return I;
    },
    renderThumbs: function(I) {
      var B = e3.Children.map(I, function(H) {
        var k = H;
        if (H.type !== "img" && (k = e3.Children.toArray(H.props.children).find(function(X) {
          return X.type === "img";
        })), !!k)
          return k;
      });
      return B.filter(function(H) {
        return H;
      }).length === 0 ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : B;
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
  }), eo;
}
var sg = {};
function DR() {
  return sg;
}
var lg;
function zR() {
  return lg || (lg = 1, (function(e3) {
    Object.defineProperty(e3, "__esModule", {
      value: true
    }), Object.defineProperty(e3, "Carousel", {
      enumerable: true,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e3, "CarouselProps", {
      enumerable: true,
      get: function() {
        return r.CarouselProps;
      }
    }), Object.defineProperty(e3, "Thumbs", {
      enumerable: true,
      get: function() {
        return o.default;
      }
    });
    var t = a(NR()), r = DR(), o = a(jv());
    function a(s) {
      return s && s.__esModule ? s : { default: s };
    }
  })(bl)), bl;
}
var WR = zR();
const BR = ({ tip: e3 }) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-full grid pb-8 px-8 place-content-center", children: Gv(e3, true) }), UR = ({ pages: e3 }) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "min-h-[10rem] w-96", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  WR.Carousel,
  {
    autoPlay: false,
    infiniteLoop: true,
    showThumbs: false,
    showArrows: true,
    showStatus: false,
    children: e3 && e3.map((t) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BR, { tip: t }, t.key))
  }
) }), HR = ({ body: e3, isInsideCarousel: t }) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  "article",
  {
    className: nt([
      "prose prose-sm max-h-[10rem] overflow-auto p-1  px-2 text-left text-[12px] text-grey-100 ",
      {
        "w-60": !t
      }
    ]),
    children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      ns,
      {
        children: e3,
        options: {
          overrides: {
            a: {
              component: ({ children: r, ...o }) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "a",
                {
                  ...o,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-start text-primary-dark",
                  children: [
                    r,
                    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2$1, { className: "ml-1 mt-px h-4 w-4" })
                  ]
                }
              )
            }
          }
        }
      }
    )
  }
), qR = ({
  video: e3,
  body: t,
  title: r,
  isInsideCarousel: o
}) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
  "div",
  {
    className: nt([
      {
        "flex flex-row": !o,
        "flex max-h-[10rem] flex-col overflow-y-auto": o
      }
    ]),
    children: [
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          className: nt([
            {
              "mr-1": !o,
              "mb-1": o
            }
          ]),
          children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "iframe",
            {
              height: o ? "auto" : 90,
              width: o ? "100%" : 160,
              src: e3 == null ? void 0 : e3.link,
              title: r,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            }
          )
        }
      ),
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "article",
        {
          className: nt([
            "prose prose-sm p-1 text-left text-xs text-grey-100",
            {
              "w-60 overflow-auto": !o,
              "-mt-6": o
            }
          ]),
          children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            ns,
            {
              children: t || "",
              options: {
                overrides: {
                  a: {
                    component: ({ children: a, ...s }) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                      "a",
                      {
                        ...s,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-start",
                        children: [
                          a,
                          /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(L2$1, { className: "ml-1 mt-px h-4 w-4" })
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
), Gv = (e3, t) => {
  switch (e3.type) {
    case Qa.TEXT:
      return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(HR, { body: e3.body, isInsideCarousel: t });
    case Qa.VIDEO:
      return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qR,
        {
          video: e3.video,
          body: e3.body,
          title: e3.title,
          isInsideCarousel: t
        }
      );
    case Qa.CAROUSEL:
      return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(UR, { pages: e3.pages });
  }
}, Kv = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(void 0);
function cg(e3, t) {
  const r = [];
  return e3.forEach((o) => {
    o.key === t && r.push(o);
  }), r;
}
const vI = ({
  children: e3,
  enabled: t,
  baseUrl: r = "https://raw.githubusercontent.com/4d/Web-studio-TIPS/main"
}) => {
  const [{ tips: o, show: a }, s] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState({
    tips: {},
    show: true
  });
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    const c = new AbortController();
    try {
      fetch(
        `${r}/tips.json`,
        // 'tips.json',
        { signal: c.signal }
      ).then((h) => h.json()).then((h) => {
        const y = h.reduce((v, g) => cg(h, g.key).length > 1 ? {
          ...v,
          [g.key]: {
            type: "carousel",
            pages: cg(h, g.key)
          }
        } : {
          ...v,
          [g.key]: g
        }, {});
        s((v) => ({ ...v, tips: y }));
      });
    } catch {
    }
    return () => {
      c.abort();
    };
  }, []);
  const l = () => {
    s((c) => ({ ...c, show: !a }));
  };
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Kv.Provider, { value: { tips: o, toggleTips: l, show: a, enabled: t }, children: e3 });
}, jR = (e3) => {
  const t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(Kv);
  if (t === void 0)
    throw new Error("useTip must be used within a TipsContext");
  return {
    tip: e3 ? t.tips[e3] : null,
    toggleTips: t.toggleTips,
    show: t.show,
    enabled: t.enabled
  };
}, ZR = is(ER)`
  &[data-state='open'] > * {
    display: block !important;
  }
`, mI = ({ tipKey: e3, side: t = "right", alwaysOn: r, asButton: o = false }) => {
  const { tip: a, enabled: s } = jR(e3), [l, c] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(false), h = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    if (h.current) {
      const y = new IntersectionObserver((v) => {
        v[0].isIntersecting || c(false);
      });
      return y.observe(h.current), () => {
        h.current && y.unobserve(h.current);
      };
    }
  }, []), a && s ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(_R, { open: l, onOpenChange: c, children: [
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      ZR,
      {
        ref: h,
        className: nt("focus:outline-none", {
          "rounded p-1 text-gray-100 hover:bg-primary-hover": o
        }),
        onClick: (y) => y.stopPropagation(),
        children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: nt("group-hover:block", { hidden: !r }), children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(a1, { className: "h-4 w-4 text-yellow-300" }) })
      }
    ),
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      OR,
      {
        side: t,
        sideOffset: 5,
        onClick: (y) => y.stopPropagation(),
        children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative rounded border border-grey-50 bg-grey-900 p-2 text-xs text-white shadow-2xl", children: Gv(a) })
      }
    )
  ] }) : null;
};
var GR = Object.defineProperty, KR = (e3, t, r) => t in e3 ? GR(e3, t, { enumerable: true, configurable: true, writable: true, value: r }) : e3[t] = r, Tl = (e3, t, r) => (KR(e3, typeof t != "symbol" ? t + "" : t, r), r);
let VR = class {
  constructor() {
    Tl(this, "current", this.detect()), Tl(this, "handoffState", "pending"), Tl(this, "currentId", 0);
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
}, hi = new VR(), $r = (e3, t) => {
  hi.isServer ? qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(e3, t) : qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useLayoutEffect(e3, t);
};
function gi(e3) {
  let t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(e3);
  return $r(() => {
    t.current = e3;
  }, [e3]), t;
}
let Et = function(e3) {
  let t = gi(e3);
  return o.useCallback((...r) => t.current(...r), [t]);
};
function YR(e3, t, r) {
  let [o, a] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(r), s = e3 !== void 0, l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(s), c = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false), h = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
  return s && !l.current && !c.current ? (c.current = true, l.current = s, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !s && l.current && !h.current && (h.current = true, l.current = s, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [s ? e3 : o, Et((y) => (s || a(y), t == null ? void 0 : t(y)))];
}
function XR(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function $o() {
  let e3 = [], t = { addEventListener(r, o, a, s) {
    return r.addEventListener(o, a, s), t.add(() => r.removeEventListener(o, a, s));
  }, requestAnimationFrame(...r) {
    let o = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(o));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let o = setTimeout(...r);
    return t.add(() => clearTimeout(o));
  }, microTask(...r) {
    let o = { current: true };
    return XR(() => {
      o.current && r[0]();
    }), t.add(() => {
      o.current = false;
    });
  }, style(r, o, a) {
    let s = r.style.getPropertyValue(o);
    return Object.assign(r.style, { [o]: a }), this.add(() => {
      Object.assign(r.style, { [o]: s });
    });
  }, group(r) {
    let o = $o();
    return r(o), this.add(() => o.dispose());
  }, add(r) {
    return e3.push(r), () => {
      let o = e3.indexOf(r);
      if (o >= 0) for (let a of e3.splice(o, 1)) a();
    };
  }, dispose() {
    for (let r of e3.splice(0)) r();
  } };
  return t;
}
function _c() {
  let [e3] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState($o);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => () => e3.dispose(), [e3]), e3;
}
function JR() {
  let e3 = typeof document > "u";
  return "useSyncExternalStore" in N ? ((t) => t.useSyncExternalStore)(N)(() => () => {
  }, () => false, () => !e3) : false;
}
function Ec() {
  let e3 = JR(), [t, r] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(hi.isHandoffComplete);
  return t && hi.isHandoffComplete === false && r(false), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    t !== true && r(true);
  }, [t]), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => hi.handoff(), []), e3 ? false : t;
}
var fg;
let Oc = (fg = o.useId) != null ? fg : function() {
  let e3 = Ec(), [t, r] = o.useState(e3 ? () => hi.nextId() : null);
  return $r(() => {
    t === null && r(hi.nextId());
  }, [t]), t != null ? "" + t : void 0;
};
function Pr(e3, t, ...r) {
  if (e3 in t) {
    let a = t[e3];
    return typeof a == "function" ? a(...r) : a;
  }
  let o = new Error(`Tried to handle "${e3}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, Pr), o;
}
function dg(e3) {
  var t;
  if (e3.type) return e3.type;
  let r = (t = e3.as) != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button") return "button";
}
function QR(e3, t) {
  let [r, o] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(() => dg(e3));
  return $r(() => {
    o(dg(e3));
  }, [e3.type, e3.as]), $r(() => {
    r || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && o("button");
  }, [r, t]), r;
}
let eP = Symbol();
function Io(...e3) {
  let t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(e3);
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    t.current = e3;
  }, [e3]);
  let r = Et((o) => {
    for (let a of t.current) a != null && (typeof a == "function" ? a(o) : a.current = o);
  });
  return e3.every((o) => o == null || (o == null ? void 0 : o[eP])) ? void 0 : r;
}
function as(...e3) {
  return Array.from(new Set(e3.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var Vv = ((e3) => (e3[e3.None = 0] = "None", e3[e3.RenderStrategy = 1] = "RenderStrategy", e3[e3.Static = 2] = "Static", e3))(Vv || {}), vn = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(vn || {});
function jn({ ourProps: e3, theirProps: t, slot: r, defaultTag: o, features: a, visible: s = true, name: l, mergeRefs: c }) {
  c = c ?? tP;
  let h = Yv(t, e3);
  if (s) return Ba(h, r, o, l, c);
  let y = a ?? 0;
  if (y & 2) {
    let { static: v = false, ...g } = h;
    if (v) return Ba(g, r, o, l, c);
  }
  if (y & 1) {
    let { unmount: v = true, ...g } = h;
    return Pr(v ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Ba({ ...g, hidden: true, style: { display: "none" } }, r, o, l, c);
    } });
  }
  return Ba(h, r, o, l, c);
}
function Ba(e3, t = {}, r, o, a) {
  let { as: s = r, children: l, refName: c = "ref", ...h } = Rl(e3, ["unmount", "static"]), y = e3.ref !== void 0 ? { [c]: e3.ref } : {}, v = typeof l == "function" ? l(t) : l;
  "className" in h && h.className && typeof h.className == "function" && (h.className = h.className(t));
  let g = {};
  if (t) {
    let p = false, w = [];
    for (let [S, f] of Object.entries(t)) typeof f == "boolean" && (p = true), f === true && w.push(S);
    p && (g["data-headlessui-state"] = w.join(" "));
  }
  if (s === qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment && Object.keys(Vl(h)).length > 0) {
    if (!qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.isValidElement(v) || Array.isArray(v) && v.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(h).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
    let p = v.props, w = typeof (p == null ? void 0 : p.className) == "function" ? (...f) => as(p == null ? void 0 : p.className(...f), h.className) : as(p == null ? void 0 : p.className, h.className), S = w ? { className: w } : {};
    return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.cloneElement(v, Object.assign({}, Yv(v.props, Vl(Rl(h, ["ref"]))), g, y, { ref: a(v.ref, y.ref) }, S));
  }
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(s, Object.assign({}, Rl(h, ["ref"]), s !== qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment && y, s !== qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment && g), v);
}
function tP(...e3) {
  return e3.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e3) r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function Yv(...e3) {
  if (e3.length === 0) return {};
  if (e3.length === 1) return e3[0];
  let t = {}, r = {};
  for (let o of e3) for (let a in o) a.startsWith("on") && typeof o[a] == "function" ? (r[a] != null || (r[a] = []), r[a].push(o[a])) : t[a] = o[a];
  if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map((o) => [o, void 0])));
  for (let o in r) Object.assign(t, { [o](a, ...s) {
    let l = r[o];
    for (let c of l) {
      if ((a instanceof Event || (a == null ? void 0 : a.nativeEvent) instanceof Event) && a.defaultPrevented) return;
      c(a, ...s);
    }
  } });
  return t;
}
function Zn(e3) {
  var t;
  return Object.assign(qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(e3), { displayName: (t = e3.displayName) != null ? t : e3.name });
}
function Vl(e3) {
  let t = Object.assign({}, e3);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
function Rl(e3, t = []) {
  let r = Object.assign({}, e3);
  for (let o of t) o in r && delete r[o];
  return r;
}
let rP = "div";
var Xv = ((e3) => (e3[e3.None = 1] = "None", e3[e3.Focusable = 2] = "Focusable", e3[e3.Hidden = 4] = "Hidden", e3))(Xv || {});
function nP(e3, t) {
  var r;
  let { features: o = 1, ...a } = e3, s = { ref: t, "aria-hidden": (o & 2) === 2 ? true : (r = a["aria-hidden"]) != null ? r : void 0, hidden: (o & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
  return jn({ ourProps: s, theirProps: a, slot: {}, defaultTag: rP, name: "Hidden" });
}
let iP = Zn(nP), Ac = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(null);
Ac.displayName = "OpenClosedContext";
var jr = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(jr || {});
function Jv() {
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(Ac);
}
function oP({ value: e3, children: t }) {
  return o.createElement(Ac.Provider, { value: e3 }, t);
}
function aP(e3) {
  let t = e3.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); ) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let o = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return o && sP(r) ? false : o;
}
function sP(e3) {
  if (!e3) return false;
  let t = e3.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return false;
    t = t.previousElementSibling;
  }
  return true;
}
function uP(e3) {
  var t, r;
  let o = (t = e3 == null ? void 0 : e3.form) != null ? t : e3.closest("form");
  if (o) {
    for (let a of o.elements) if (a !== e3 && (a.tagName === "INPUT" && a.type === "submit" || a.tagName === "BUTTON" && a.type === "submit" || a.nodeName === "INPUT" && a.type === "image")) {
      a.click();
      return;
    }
    (r = o.requestSubmit) == null || r.call(o);
  }
}
var Yl = ((e3) => (e3.Space = " ", e3.Enter = "Enter", e3.Escape = "Escape", e3.Backspace = "Backspace", e3.Delete = "Delete", e3.ArrowLeft = "ArrowLeft", e3.ArrowUp = "ArrowUp", e3.ArrowRight = "ArrowRight", e3.ArrowDown = "ArrowDown", e3.Home = "Home", e3.End = "End", e3.PageUp = "PageUp", e3.PageDown = "PageDown", e3.Tab = "Tab", e3))(Yl || {});
function Tc() {
  let e3 = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
  return $r(() => (e3.current = true, () => {
    e3.current = false;
  }), []), e3;
}
let Qv = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(null);
function em() {
  let e3 = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(Qv);
  if (e3 === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, em), t;
  }
  return e3;
}
function lP() {
  let [e3, t] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState([]);
  return [e3.length > 0 ? e3.join(" ") : void 0, qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => function(r) {
    let o$1 = Et((s) => (t((l) => [...l, s]), () => t((l) => {
      let c = l.slice(), h = c.indexOf(s);
      return h !== -1 && c.splice(h, 1), c;
    }))), a = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => ({ register: o$1, slot: r.slot, name: r.name, props: r.props }), [o$1, r.slot, r.name, r.props]);
    return o.createElement(Qv.Provider, { value: a }, r.children);
  }, [t])];
}
let cP = "p";
function fP(e3, t) {
  let r = Oc(), { id: o = `headlessui-description-${r}`, ...a } = e3, s = em(), l = Io(t);
  $r(() => s.register(o), [o, s.register]);
  let c = { ref: l, ...s.props, id: o };
  return jn({ ourProps: c, theirProps: a, slot: s.slot || {}, defaultTag: cP, name: s.name || "Description" });
}
let dP = Zn(fP), pP = Object.assign(dP, {}), tm = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(null);
function rm() {
  let e3 = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(tm);
  if (e3 === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, rm), t;
  }
  return e3;
}
function hP() {
  let [e3, t] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState([]);
  return [e3.length > 0 ? e3.join(" ") : void 0, qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => function(r) {
    let o$1 = Et((s) => (t((l) => [...l, s]), () => t((l) => {
      let c = l.slice(), h = c.indexOf(s);
      return h !== -1 && c.splice(h, 1), c;
    }))), a = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => ({ register: o$1, slot: r.slot, name: r.name, props: r.props }), [o$1, r.slot, r.name, r.props]);
    return o.createElement(tm.Provider, { value: a }, r.children);
  }, [t])];
}
let gP = "label";
function vP(e3, t) {
  let r = Oc(), { id: o = `headlessui-label-${r}`, passive: a = false, ...s } = e3, l = rm(), c = Io(t);
  $r(() => l.register(o), [o, l.register]);
  let h = { ref: c, ...l.props, id: o };
  return a && ("onClick" in h && (delete h.htmlFor, delete h.onClick), "onClick" in s && delete s.onClick), jn({ ourProps: h, theirProps: s, slot: l.slot || {}, defaultTag: gP, name: l.name || "Label" });
}
let mP = Zn(vP), yP = Object.assign(mP, {});
function wP(e3 = 0) {
  let [t, r] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(e3), o = Tc(), a = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback((h) => {
    o.current && r((y) => y | h);
  }, [t, o]), s = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback((h) => !!(t & h), [t]), l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback((h) => {
    o.current && r((y) => y & ~h);
  }, [r, o]), c = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback((h) => {
    o.current && r((y) => y ^ h);
  }, [r]);
  return { flags: t, addFlag: a, hasFlag: s, removeFlag: l, toggleFlag: c };
}
let Rc = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(null);
Rc.displayName = "GroupContext";
let bP = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment;
function SP(e3) {
  var t;
  let [r, o$1] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(null), [a, s] = hP(), [l, c] = lP(), h = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => ({ switch: r, setSwitch: o$1, labelledby: a, describedby: l }), [r, o$1, a, l]), y = {}, v = e3;
  return o.createElement(c, { name: "Switch.Description" }, o.createElement(s, { name: "Switch.Label", props: { htmlFor: (t = h.switch) == null ? void 0 : t.id, onClick(g) {
    r && (g.currentTarget.tagName === "LABEL" && g.preventDefault(), r.click(), r.focus({ preventScroll: true }));
  } } }, o.createElement(Rc.Provider, { value: h }, jn({ ourProps: y, theirProps: v, defaultTag: bP, name: "Switch.Group" }))));
}
let xP = "button";
function _P(e3, t) {
  var r;
  let o$1 = Oc(), { id: a = `headlessui-switch-${o$1}`, checked: s, defaultChecked: l = false, onChange: c, disabled: h = false, name: y, value: v, form: g, ...p } = e3, w = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(Rc), S = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), f = Io(S, t, w === null ? null : w.setSwitch), [b, d] = YR(s, c, l), x = Et(() => d == null ? void 0 : d(!b)), _ = Et((M) => {
    if (aP(M.currentTarget)) return M.preventDefault();
    M.preventDefault(), x();
  }), R = Et((M) => {
    M.key === Yl.Space ? (M.preventDefault(), x()) : M.key === Yl.Enter && uP(M.currentTarget);
  }), A = Et((M) => M.preventDefault()), C = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => ({ checked: b }), [b]), W = { id: a, ref: f, role: "switch", type: QR(e3, S), tabIndex: e3.tabIndex === -1 ? 0 : (r = e3.tabIndex) != null ? r : 0, "aria-checked": b, "aria-labelledby": w == null ? void 0 : w.labelledby, "aria-describedby": w == null ? void 0 : w.describedby, disabled: h, onClick: _, onKeyUp: R, onKeyPress: A }, L = _c();
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    var M;
    let j = (M = S.current) == null ? void 0 : M.closest("form");
    j && l !== void 0 && L.addEventListener(j, "reset", () => {
      d(l);
    });
  }, [S, d]), o.createElement(o.Fragment, null, y != null && b && o.createElement(iP, { features: Xv.Hidden, ...Vl({ as: "input", type: "checkbox", hidden: true, readOnly: true, disabled: h, form: g, checked: b, name: y, value: v }) }), jn({ ourProps: W, theirProps: p, slot: C, defaultTag: xP, name: "Switch" }));
}
let EP = Zn(_P), OP = SP, AP = Object.assign(EP, { Group: OP, Label: yP, Description: pP });
function TP(e3) {
  let t = { called: false };
  return (...r) => {
    if (!t.called) return t.called = true, e3(...r);
  };
}
function Pl(e3, ...t) {
  e3 && t.length > 0 && e3.classList.add(...t);
}
function kl(e3, ...t) {
  e3 && t.length > 0 && e3.classList.remove(...t);
}
function RP(e3, t) {
  let r = $o();
  if (!e3) return r.dispose;
  let { transitionDuration: o, transitionDelay: a } = getComputedStyle(e3), [s, l] = [o, a].map((h) => {
    let [y = 0] = h.split(",").filter(Boolean).map((v) => v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3).sort((v, g) => g - v);
    return y;
  }), c = s + l;
  if (c !== 0) {
    r.group((y) => {
      y.setTimeout(() => {
        t(), y.dispose();
      }, c), y.addEventListener(e3, "transitionrun", (v) => {
        v.target === v.currentTarget && y.dispose();
      });
    });
    let h = r.addEventListener(e3, "transitionend", (y) => {
      y.target === y.currentTarget && (t(), h());
    });
  } else t();
  return r.add(() => t()), r.dispose;
}
function PP(e3, t, r, o) {
  let a = r ? "enter" : "leave", s = $o(), l = o !== void 0 ? TP(o) : () => {
  };
  a === "enter" && (e3.removeAttribute("hidden"), e3.style.display = "");
  let c = Pr(a, { enter: () => t.enter, leave: () => t.leave }), h = Pr(a, { enter: () => t.enterTo, leave: () => t.leaveTo }), y = Pr(a, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return kl(e3, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Pl(e3, ...t.base, ...c, ...y), s.nextFrame(() => {
    kl(e3, ...t.base, ...c, ...y), Pl(e3, ...t.base, ...c, ...h), RP(e3, () => (kl(e3, ...t.base, ...c), Pl(e3, ...t.base, ...t.entered), l()));
  }), s.dispose;
}
function kP({ immediate: e3, container: t, direction: r, classes: o, onStart: a, onStop: s }) {
  let l = Tc(), c = _c(), h = gi(r);
  $r(() => {
    e3 && (h.current = "enter");
  }, [e3]), $r(() => {
    let y = $o();
    c.add(y.dispose);
    let v = t.current;
    if (v && h.current !== "idle" && l.current) return y.dispose(), a.current(h.current), y.add(PP(v, o.current, h.current === "enter", () => {
      y.dispose(), s.current(h.current);
    })), y.dispose;
  }, [r]);
}
function dn(e3 = "") {
  return e3.split(/\s+/).filter((t) => t.length > 1);
}
let xs = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(null);
xs.displayName = "TransitionContext";
var CP = ((e3) => (e3.Visible = "visible", e3.Hidden = "hidden", e3))(CP || {});
function $P() {
  let e3 = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(xs);
  if (e3 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e3;
}
function IP() {
  let e3 = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(_s);
  if (e3 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e3;
}
let _s = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(null);
_s.displayName = "NestingContext";
function Es(e3) {
  return "children" in e3 ? Es(e3.children) : e3.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function nm(e3, t) {
  let r = gi(e3), o = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef([]), a = Tc(), s = _c(), l = Et((w, S = vn.Hidden) => {
    let f = o.current.findIndex(({ el: b }) => b === w);
    f !== -1 && (Pr(S, { [vn.Unmount]() {
      o.current.splice(f, 1);
    }, [vn.Hidden]() {
      o.current[f].state = "hidden";
    } }), s.microTask(() => {
      var b;
      !Es(o) && a.current && ((b = r.current) == null || b.call(r));
    }));
  }), c = Et((w) => {
    let S = o.current.find(({ el: f }) => f === w);
    return S ? S.state !== "visible" && (S.state = "visible") : o.current.push({ el: w, state: "visible" }), () => l(w, vn.Unmount);
  }), h = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef([]), y = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(Promise.resolve()), v = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef({ enter: [], leave: [], idle: [] }), g = Et((w, S, f) => {
    h.current.splice(0), t && (t.chains.current[S] = t.chains.current[S].filter(([b]) => b !== w)), t == null || t.chains.current[S].push([w, new Promise((b) => {
      h.current.push(b);
    })]), t == null || t.chains.current[S].push([w, new Promise((b) => {
      Promise.all(v.current[S].map(([d, x]) => x)).then(() => b());
    })]), S === "enter" ? y.current = y.current.then(() => t == null ? void 0 : t.wait.current).then(() => f(S)) : f(S);
  }), p = Et((w, S, f) => {
    Promise.all(v.current[S].splice(0).map(([b, d]) => d)).then(() => {
      var b;
      (b = h.current.shift()) == null || b();
    }).then(() => f(S));
  });
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => ({ children: o, register: c, unregister: l, onStart: g, onStop: p, wait: y, chains: v }), [c, l, o, g, p, v, y]);
}
function LP() {
}
let MP = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function pg(e3) {
  var t;
  let r = {};
  for (let o of MP) r[o] = (t = e3[o]) != null ? t : LP;
  return r;
}
function FP(e3) {
  let t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(pg(e3));
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    t.current = pg(e3);
  }, [e3]), t;
}
let NP = "div", im = Vv.RenderStrategy;
function DP(e3, t) {
  var r, o$1;
  let { beforeEnter: a, afterEnter: s, beforeLeave: l, afterLeave: c, enter: h, enterFrom: y, enterTo: v, entered: g, leave: p, leaveFrom: w, leaveTo: S, ...f } = e3, b = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), d = Io(b, t), x = (r = f.unmount) == null || r ? vn.Unmount : vn.Hidden, { show: _, appear: R, initial: A } = $P(), [C, W] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(_ ? "visible" : "hidden"), L = IP(), { register: M, unregister: j } = L;
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => M(b), [M, b]), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    if (x === vn.Hidden && b.current) {
      if (_ && C !== "visible") {
        W("visible");
        return;
      }
      return Pr(C, { hidden: () => j(b), visible: () => M(b) });
    }
  }, [C, b, M, j, _, x]);
  let D = gi({ base: dn(f.className), enter: dn(h), enterFrom: dn(y), enterTo: dn(v), entered: dn(g), leave: dn(p), leaveFrom: dn(w), leaveTo: dn(S) }), I = FP({ beforeEnter: a, afterEnter: s, beforeLeave: l, afterLeave: c }), B = Ec();
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    if (B && C === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [b, C, B]);
  let H = A && !R, k = R && _ && A, X = !B || H ? "idle" : _ ? "enter" : "leave", V = wP(0), ee = Et((re) => Pr(re, { enter: () => {
    V.addFlag(jr.Opening), I.current.beforeEnter();
  }, leave: () => {
    V.addFlag(jr.Closing), I.current.beforeLeave();
  }, idle: () => {
  } })), fe = Et((re) => Pr(re, { enter: () => {
    V.removeFlag(jr.Opening), I.current.afterEnter();
  }, leave: () => {
    V.removeFlag(jr.Closing), I.current.afterLeave();
  }, idle: () => {
  } })), q = nm(() => {
    W("hidden"), j(b);
  }, L), J = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
  kP({ immediate: k, container: b, classes: D, direction: X, onStart: gi((re) => {
    J.current = true, q.onStart(b, re, ee);
  }), onStop: gi((re) => {
    J.current = false, q.onStop(b, re, fe), re === "leave" && !Es(q) && (W("hidden"), j(b));
  }) });
  let oe = f, se = { ref: d };
  return k ? oe = { ...oe, className: as(f.className, ...D.current.enter, ...D.current.enterFrom) } : J.current && (oe.className = as(f.className, (o$1 = b.current) == null ? void 0 : o$1.className), oe.className === "" && delete oe.className), o.createElement(_s.Provider, { value: q }, o.createElement(oP, { value: Pr(C, { visible: jr.Open, hidden: jr.Closed }) | V.flags }, jn({ ourProps: se, theirProps: oe, defaultTag: NP, features: im, visible: C === "visible", name: "Transition.Child" })));
}
function zP(e3, t) {
  let { show: r, appear: o$1 = false, unmount: a = true, ...s } = e3, l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), c = Io(l, t);
  Ec();
  let h = Jv();
  if (r === void 0 && h !== null && (r = (h & jr.Open) === jr.Open), ![true, false].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [y, v] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(r ? "visible" : "hidden"), g = nm(() => {
    v("hidden");
  }), [p, w] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(true), S = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef([r]);
  $r(() => {
    p !== false && S.current[S.current.length - 1] !== r && (S.current.push(r), w(false));
  }, [S, r]);
  let f = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => ({ show: r, appear: o$1, initial: p }), [r, o$1, p]);
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    if (r) v("visible");
    else if (!Es(g)) v("hidden");
    else {
      let _ = l.current;
      if (!_) return;
      let R = _.getBoundingClientRect();
      R.x === 0 && R.y === 0 && R.width === 0 && R.height === 0 && v("hidden");
    }
  }, [r, g]);
  let b = { unmount: a }, d = Et(() => {
    var _;
    p && w(false), (_ = e3.beforeEnter) == null || _.call(e3);
  }), x = Et(() => {
    var _;
    p && w(false), (_ = e3.beforeLeave) == null || _.call(e3);
  });
  return o.createElement(_s.Provider, { value: g }, o.createElement(xs.Provider, { value: f }, jn({ ourProps: { ...b, as: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, children: o.createElement(om, { ref: c, ...b, ...s, beforeEnter: d, beforeLeave: x }) }, theirProps: {}, defaultTag: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, features: im, visible: y === "visible", name: "Transition" })));
}
function WP(e3, t) {
  let r = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(xs) !== null, o$1 = Jv() !== null;
  return o.createElement(o.Fragment, null, !r && o$1 ? o.createElement(Xl, { ref: t, ...e3 }) : o.createElement(om, { ref: t, ...e3 }));
}
let Xl = Zn(zP), om = Zn(DP), BP = Zn(WP), ss = Object.assign(Xl, { Child: BP, Root: Xl });
const Cl = {
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
}, UP = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.forwardRef(({ onChange: e3, value: t, size: r = "md", className: o = "ml-auto" }, a) => {
  const s = (l) => {
    e3(l);
  };
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: nt("flex items-center", o), children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    AP,
    {
      as: "span",
      ref: a,
      checked: t,
      onChange: s,
      onKeyDown: (l) => {
        l.key === "Enter" && s(!t);
      },
      className: `${t ? "bg-primary-dark" : "bg-grey-200"}
relative inline-flex shrink-0 ${Cl[r].container} cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`,
      children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "span",
        {
          "aria-hidden": "true",
          className: `${t ? Cl[r].translate : "translate-x-0"}
pointer-events-none inline-block ${Cl[r].switch} transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        }
      )
    }
  ) });
});
function Pc() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var Gn = Pc();
function am(e3) {
  Gn = e3;
}
var So = { exec: () => null };
function ke(e3, t = "") {
  let r = typeof e3 == "string" ? e3 : e3.source, o = { replace: (a, s) => {
    let l = typeof s == "string" ? s : s.source;
    return l = l.replace(kt.caret, "$1"), r = r.replace(a, l), o;
  }, getRegex: () => new RegExp(r, t) };
  return o;
}
var kt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e3) => new RegExp(`^( {0,3}${e3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}#`), htmlBeginRegex: (e3) => new RegExp(`^ {0,${Math.min(3, e3 - 1)}}<(?:[a-z].*>|!--)`, "i") }, HP = /^(?:[ \t]*(?:\n|$))+/, qP = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, jP = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Lo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ZP = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, kc = /(?:[*+-]|\d{1,9}[.)])/, sm = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, um = ke(sm).replace(/bull/g, kc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), GP = ke(sm).replace(/bull/g, kc).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Cc = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, KP = /^[^\n]+/, $c = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, VP = ke(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", $c).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), YP = ke(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, kc).getRegex(), Os = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ic = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, XP = ke("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ic).replace("tag", Os).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), lm = ke(Cc).replace("hr", Lo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Os).getRegex(), JP = ke(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", lm).getRegex(), Lc = { blockquote: JP, code: qP, def: VP, fences: jP, heading: ZP, hr: Lo, html: XP, lheading: um, list: YP, newline: HP, paragraph: lm, table: So, text: KP }, hg = ke("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Lo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Os).getRegex(), QP = { ...Lc, lheading: GP, table: hg, paragraph: ke(Cc).replace("hr", Lo).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", hg).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Os).getRegex() }, ek = { ...Lc, html: ke(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ic).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: So, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: ke(Cc).replace("hr", Lo).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", um).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, tk = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, rk = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, cm = /^( {2,}|\\)\n(?!\s*$)/, nk = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, As = /[\p{P}\p{S}]/u, Mc = /[\s\p{P}\p{S}]/u, fm = /[^\s\p{P}\p{S}]/u, ik = ke(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Mc).getRegex(), dm = /(?!~)[\p{P}\p{S}]/u, ok = /(?!~)[\s\p{P}\p{S}]/u, ak = /(?:[^\s\p{P}\p{S}]|~)/u, sk = /\[(?:[^\[\]`]|`[^`]*?`)*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)|`[^`]*?`|<(?! )[^<>]*?>/g, pm = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, uk = ke(pm, "u").replace(/punct/g, As).getRegex(), lk = ke(pm, "u").replace(/punct/g, dm).getRegex(), hm = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", ck = ke(hm, "gu").replace(/notPunctSpace/g, fm).replace(/punctSpace/g, Mc).replace(/punct/g, As).getRegex(), fk = ke(hm, "gu").replace(/notPunctSpace/g, ak).replace(/punctSpace/g, ok).replace(/punct/g, dm).getRegex(), dk = ke("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, fm).replace(/punctSpace/g, Mc).replace(/punct/g, As).getRegex(), pk = ke(/\\(punct)/, "gu").replace(/punct/g, As).getRegex(), hk = ke(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), gk = ke(Ic).replace("(?:-->|$)", "-->").getRegex(), vk = ke("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", gk).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), us = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, mk = ke(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", us).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), gm = ke(/^!?\[(label)\]\[(ref)\]/).replace("label", us).replace("ref", $c).getRegex(), vm = ke(/^!?\[(ref)\](?:\[\])?/).replace("ref", $c).getRegex(), yk = ke("reflink|nolink(?!\\()", "g").replace("reflink", gm).replace("nolink", vm).getRegex(), gg = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Fc = { _backpedal: So, anyPunctuation: pk, autolink: hk, blockSkip: sk, br: cm, code: rk, del: So, emStrongLDelim: uk, emStrongRDelimAst: ck, emStrongRDelimUnd: dk, escape: tk, link: mk, nolink: vm, punctuation: ik, reflink: gm, reflinkSearch: yk, tag: vk, text: nk, url: So }, wk = { ...Fc, link: ke(/^!?\[(label)\]\((.*?)\)/).replace("label", us).getRegex(), reflink: ke(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", us).getRegex() }, Jl = { ...Fc, emStrongRDelimAst: fk, emStrongLDelim: lk, url: ke(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", gg).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: ke(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", gg).getRegex() }, bk = { ...Jl, br: ke(cm).replace("{2,}", "*").getRegex(), text: ke(Jl.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Ua = { normal: Lc, gfm: QP, pedantic: ek }, so = { normal: Fc, gfm: Jl, breaks: bk, pedantic: wk }, Sk = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, vg = (e3) => Sk[e3];
function Or(e3, t) {
  if (t) {
    if (kt.escapeTest.test(e3)) return e3.replace(kt.escapeReplace, vg);
  } else if (kt.escapeTestNoEncode.test(e3)) return e3.replace(kt.escapeReplaceNoEncode, vg);
  return e3;
}
function mg(e3) {
  try {
    e3 = encodeURI(e3).replace(kt.percentDecode, "%");
  } catch {
    return null;
  }
  return e3;
}
function yg(e3, t) {
  var s;
  let r = e3.replace(kt.findPipe, (l, c, h) => {
    let y = false, v = c;
    for (; --v >= 0 && h[v] === "\\"; ) y = !y;
    return y ? "|" : " |";
  }), o = r.split(kt.splitPipe), a = 0;
  if (o[0].trim() || o.shift(), o.length > 0 && !((s = o.at(-1)) != null && s.trim()) && o.pop(), t) if (o.length > t) o.splice(t);
  else for (; o.length < t; ) o.push("");
  for (; a < o.length; a++) o[a] = o[a].trim().replace(kt.slashPipe, "|");
  return o;
}
function uo(e3, t, r) {
  let o = e3.length;
  if (o === 0) return "";
  let a = 0;
  for (; a < o && e3.charAt(o - a - 1) === t; )
    a++;
  return e3.slice(0, o - a);
}
function xk(e3, t) {
  if (e3.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let o = 0; o < e3.length; o++) if (e3[o] === "\\") o++;
  else if (e3[o] === t[0]) r++;
  else if (e3[o] === t[1] && (r--, r < 0)) return o;
  return r > 0 ? -2 : -1;
}
function wg(e3, t, r, o, a) {
  let s = t.href, l = t.title || null, c = e3[1].replace(a.other.outputLinkReplace, "$1");
  o.state.inLink = true;
  let h = { type: e3[0].charAt(0) === "!" ? "image" : "link", raw: r, href: s, title: l, text: c, tokens: o.inlineTokens(c) };
  return o.state.inLink = false, h;
}
function _k(e3, t, r) {
  let o = e3.match(r.other.indentCodeCompensation);
  if (o === null) return t;
  let a = o[1];
  return t.split(`
`).map((s) => {
    let l = s.match(r.other.beginningSpace);
    if (l === null) return s;
    let [c] = l;
    return c.length >= a.length ? s.slice(a.length) : s;
  }).join(`
`);
}
var ls = class {
  constructor(e3) {
    ve(this, "options");
    ve(this, "rules");
    ve(this, "lexer");
    this.options = e3 || Gn;
  }
  space(e3) {
    let t = this.rules.block.newline.exec(e3);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e3) {
    let t = this.rules.block.code.exec(e3);
    if (t) {
      let r = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : uo(r, `
`) };
    }
  }
  fences(e3) {
    let t = this.rules.block.fences.exec(e3);
    if (t) {
      let r = t[0], o = _k(r, t[3] || "", this.rules);
      return { type: "code", raw: r, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: o };
    }
  }
  heading(e3) {
    let t = this.rules.block.heading.exec(e3);
    if (t) {
      let r = t[2].trim();
      if (this.rules.other.endingHash.test(r)) {
        let o = uo(r, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (r = o.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: r, tokens: this.lexer.inline(r) };
    }
  }
  hr(e3) {
    let t = this.rules.block.hr.exec(e3);
    if (t) return { type: "hr", raw: uo(t[0], `
`) };
  }
  blockquote(e3) {
    let t = this.rules.block.blockquote.exec(e3);
    if (t) {
      let r = uo(t[0], `
`).split(`
`), o = "", a = "", s = [];
      for (; r.length > 0; ) {
        let l = false, c = [], h;
        for (h = 0; h < r.length; h++) if (this.rules.other.blockquoteStart.test(r[h])) c.push(r[h]), l = true;
        else if (!l) c.push(r[h]);
        else break;
        r = r.slice(h);
        let y = c.join(`
`), v = y.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        o = o ? `${o}
${y}` : y, a = a ? `${a}
${v}` : v;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(v, s, true), this.lexer.state.top = g, r.length === 0) break;
        let p = s.at(-1);
        if ((p == null ? void 0 : p.type) === "code") break;
        if ((p == null ? void 0 : p.type) === "blockquote") {
          let w = p, S = w.raw + `
` + r.join(`
`), f = this.blockquote(S);
          s[s.length - 1] = f, o = o.substring(0, o.length - w.raw.length) + f.raw, a = a.substring(0, a.length - w.text.length) + f.text;
          break;
        } else if ((p == null ? void 0 : p.type) === "list") {
          let w = p, S = w.raw + `
` + r.join(`
`), f = this.list(S);
          s[s.length - 1] = f, o = o.substring(0, o.length - p.raw.length) + f.raw, a = a.substring(0, a.length - w.raw.length) + f.raw, r = S.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: s, text: a };
    }
  }
  list(e3) {
    let t = this.rules.block.list.exec(e3);
    if (t) {
      let r = t[1].trim(), o = r.length > 1, a = { type: "list", raw: "", ordered: o, start: o ? +r.slice(0, -1) : "", loose: false, items: [] };
      r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = o ? r : "[*+-]");
      let s = this.rules.other.listItemRegex(r), l = false;
      for (; e3; ) {
        let h = false, y = "", v = "";
        if (!(t = s.exec(e3)) || this.rules.block.hr.test(e3)) break;
        y = t[0], e3 = e3.substring(y.length);
        let g = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (d) => " ".repeat(3 * d.length)), p = e3.split(`
`, 1)[0], w = !g.trim(), S = 0;
        if (this.options.pedantic ? (S = 2, v = g.trimStart()) : w ? S = t[1].length + 1 : (S = t[2].search(this.rules.other.nonSpaceChar), S = S > 4 ? 1 : S, v = g.slice(S), S += t[1].length), w && this.rules.other.blankLine.test(p) && (y += p + `
`, e3 = e3.substring(p.length + 1), h = true), !h) {
          let d = this.rules.other.nextBulletRegex(S), x = this.rules.other.hrRegex(S), _ = this.rules.other.fencesBeginRegex(S), R = this.rules.other.headingBeginRegex(S), A = this.rules.other.htmlBeginRegex(S);
          for (; e3; ) {
            let C = e3.split(`
`, 1)[0], W;
            if (p = C, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), W = p) : W = p.replace(this.rules.other.tabCharGlobal, "    "), _.test(p) || R.test(p) || A.test(p) || d.test(p) || x.test(p)) break;
            if (W.search(this.rules.other.nonSpaceChar) >= S || !p.trim()) v += `
` + W.slice(S);
            else {
              if (w || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || _.test(g) || R.test(g) || x.test(g)) break;
              v += `
` + p;
            }
            !w && !p.trim() && (w = true), y += C + `
`, e3 = e3.substring(C.length + 1), g = W.slice(S);
          }
        }
        a.loose || (l ? a.loose = true : this.rules.other.doubleBlankLine.test(y) && (l = true));
        let f = null, b;
        this.options.gfm && (f = this.rules.other.listIsTask.exec(v), f && (b = f[0] !== "[ ] ", v = v.replace(this.rules.other.listReplaceTask, ""))), a.items.push({ type: "list_item", raw: y, task: !!f, checked: b, loose: false, text: v, tokens: [] }), a.raw += y;
      }
      let c = a.items.at(-1);
      if (c) c.raw = c.raw.trimEnd(), c.text = c.text.trimEnd();
      else return;
      a.raw = a.raw.trimEnd();
      for (let h = 0; h < a.items.length; h++) if (this.lexer.state.top = false, a.items[h].tokens = this.lexer.blockTokens(a.items[h].text, []), !a.loose) {
        let y = a.items[h].tokens.filter((g) => g.type === "space"), v = y.length > 0 && y.some((g) => this.rules.other.anyLine.test(g.raw));
        a.loose = v;
      }
      if (a.loose) for (let h = 0; h < a.items.length; h++) a.items[h].loose = true;
      return a;
    }
  }
  html(e3) {
    let t = this.rules.block.html.exec(e3);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e3) {
    let t = this.rules.block.def.exec(e3);
    if (t) {
      let r = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), o = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: o, title: a };
    }
  }
  table(e3) {
    var l;
    let t = this.rules.block.table.exec(e3);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let r = yg(t[1]), o = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (l = t[3]) != null && l.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (r.length === o.length) {
      for (let c of o) this.rules.other.tableAlignRight.test(c) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(c) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(c) ? s.align.push("left") : s.align.push(null);
      for (let c = 0; c < r.length; c++) s.header.push({ text: r[c], tokens: this.lexer.inline(r[c]), header: true, align: s.align[c] });
      for (let c of a) s.rows.push(yg(c, s.header.length).map((h, y) => ({ text: h, tokens: this.lexer.inline(h), header: false, align: s.align[y] })));
      return s;
    }
  }
  lheading(e3) {
    let t = this.rules.block.lheading.exec(e3);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e3) {
    let t = this.rules.block.paragraph.exec(e3);
    if (t) {
      let r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  text(e3) {
    let t = this.rules.block.text.exec(e3);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e3) {
    let t = this.rules.inline.escape.exec(e3);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e3) {
    let t = this.rules.inline.tag.exec(e3);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e3) {
    let t = this.rules.inline.link.exec(e3);
    if (t) {
      let r = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
        if (!this.rules.other.endAngleBracket.test(r)) return;
        let s = uo(r.slice(0, -1), "\\");
        if ((r.length - s.length) % 2 === 0) return;
      } else {
        let s = xk(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let o = t[2], a = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(o);
        s && (o = s[1], a = s[3]);
      } else a = t[3] ? t[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? o = o.slice(1) : o = o.slice(1, -1)), wg(t, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e3, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e3)) || (r = this.rules.inline.nolink.exec(e3))) {
      let o = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = t[o.toLowerCase()];
      if (!a) {
        let s = r[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return wg(r, a, r[0], this.lexer, this.rules);
    }
  }
  emStrong(e3, t, r = "") {
    let o = this.rules.inline.emStrongLDelim.exec(e3);
    if (!(!o || o[3] && r.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      let a = [...o[0]].length - 1, s, l, c = a, h = 0, y = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (y.lastIndex = 0, t = t.slice(-1 * e3.length + a); (o = y.exec(t)) != null; ) {
        if (s = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !s) continue;
        if (l = [...s].length, o[3] || o[4]) {
          c += l;
          continue;
        } else if ((o[5] || o[6]) && a % 3 && !((a + l) % 3)) {
          h += l;
          continue;
        }
        if (c -= l, c > 0) continue;
        l = Math.min(l, l + c + h);
        let v = [...o[0]][0].length, g = e3.slice(0, a + o.index + v + l);
        if (Math.min(a, l) % 2) {
          let w = g.slice(1, -1);
          return { type: "em", raw: g, text: w, tokens: this.lexer.inlineTokens(w) };
        }
        let p = g.slice(2, -2);
        return { type: "strong", raw: g, text: p, tokens: this.lexer.inlineTokens(p) };
      }
    }
  }
  codespan(e3) {
    let t = this.rules.inline.code.exec(e3);
    if (t) {
      let r = t[2].replace(this.rules.other.newLineCharGlobal, " "), o = this.rules.other.nonSpaceChar.test(r), a = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
      return o && a && (r = r.substring(1, r.length - 1)), { type: "codespan", raw: t[0], text: r };
    }
  }
  br(e3) {
    let t = this.rules.inline.br.exec(e3);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e3) {
    let t = this.rules.inline.del.exec(e3);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e3) {
    let t = this.rules.inline.autolink.exec(e3);
    if (t) {
      let r, o;
      return t[2] === "@" ? (r = t[1], o = "mailto:" + r) : (r = t[1], o = r), { type: "link", raw: t[0], text: r, href: o, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  url(e3) {
    var r;
    let t;
    if (t = this.rules.inline.url.exec(e3)) {
      let o, a;
      if (t[2] === "@") o = t[0], a = "mailto:" + o;
      else {
        let s;
        do
          s = t[0], t[0] = ((r = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : r[0]) ?? "";
        while (s !== t[0]);
        o = t[0], t[1] === "www." ? a = "http://" + t[0] : a = t[0];
      }
      return { type: "link", raw: t[0], text: o, href: a, tokens: [{ type: "text", raw: o, text: o }] };
    }
  }
  inlineText(e3) {
    let t = this.rules.inline.text.exec(e3);
    if (t) {
      let r = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: r };
    }
  }
}, pr = class Ql {
  constructor(t) {
    ve(this, "tokens");
    ve(this, "options");
    ve(this, "state");
    ve(this, "tokenizer");
    ve(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Gn, this.options.tokenizer = this.options.tokenizer || new ls(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let r = { other: kt, block: Ua.normal, inline: so.normal };
    this.options.pedantic ? (r.block = Ua.pedantic, r.inline = so.pedantic) : this.options.gfm && (r.block = Ua.gfm, this.options.breaks ? r.inline = so.breaks : r.inline = so.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: Ua, inline: so };
  }
  static lex(t, r) {
    return new Ql(r).lex(t);
  }
  static lexInline(t, r) {
    return new Ql(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(kt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let o = this.inlineQueue[r];
      this.inlineTokens(o.src, o.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], o = false) {
    var a, s, l;
    for (this.options.pedantic && (t = t.replace(kt.tabCharGlobal, "    ").replace(kt.spaceLine, "")); t; ) {
      let c;
      if ((s = (a = this.options.extensions) == null ? void 0 : a.block) != null && s.some((y) => (c = y.call({ lexer: this }, t, r)) ? (t = t.substring(c.raw.length), r.push(c), true) : false)) continue;
      if (c = this.tokenizer.space(t)) {
        t = t.substring(c.raw.length);
        let y = r.at(-1);
        c.raw.length === 1 && y !== void 0 ? y.raw += `
` : r.push(c);
        continue;
      }
      if (c = this.tokenizer.code(t)) {
        t = t.substring(c.raw.length);
        let y = r.at(-1);
        (y == null ? void 0 : y.type) === "paragraph" || (y == null ? void 0 : y.type) === "text" ? (y.raw += (y.raw.endsWith(`
`) ? "" : `
`) + c.raw, y.text += `
` + c.text, this.inlineQueue.at(-1).src = y.text) : r.push(c);
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
        let y = r.at(-1);
        (y == null ? void 0 : y.type) === "paragraph" || (y == null ? void 0 : y.type) === "text" ? (y.raw += (y.raw.endsWith(`
`) ? "" : `
`) + c.raw, y.text += `
` + c.raw, this.inlineQueue.at(-1).src = y.text) : this.tokens.links[c.tag] || (this.tokens.links[c.tag] = { href: c.href, title: c.title }, r.push(c));
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
      let h = t;
      if ((l = this.options.extensions) != null && l.startBlock) {
        let y = 1 / 0, v = t.slice(1), g;
        this.options.extensions.startBlock.forEach((p) => {
          g = p.call({ lexer: this }, v), typeof g == "number" && g >= 0 && (y = Math.min(y, g));
        }), y < 1 / 0 && y >= 0 && (h = t.substring(0, y + 1));
      }
      if (this.state.top && (c = this.tokenizer.paragraph(h))) {
        let y = r.at(-1);
        o && (y == null ? void 0 : y.type) === "paragraph" ? (y.raw += (y.raw.endsWith(`
`) ? "" : `
`) + c.raw, y.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = y.text) : r.push(c), o = h.length !== t.length, t = t.substring(c.raw.length);
        continue;
      }
      if (c = this.tokenizer.text(t)) {
        t = t.substring(c.raw.length);
        let y = r.at(-1);
        (y == null ? void 0 : y.type) === "text" ? (y.raw += (y.raw.endsWith(`
`) ? "" : `
`) + c.raw, y.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = y.text) : r.push(c);
        continue;
      }
      if (t) {
        let y = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(y);
          break;
        } else throw new Error(y);
      }
    }
    return this.state.top = true, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    var c, h, y, v, g;
    let o = t, a = null;
    if (this.tokens.links) {
      let p = Object.keys(this.tokens.links);
      if (p.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; ) p.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; ) o = o.slice(0, a.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; ) o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    o = ((h = (c = this.options.hooks) == null ? void 0 : c.emStrongMask) == null ? void 0 : h.call({ lexer: this }, o)) ?? o;
    let s = false, l = "";
    for (; t; ) {
      s || (l = ""), s = false;
      let p;
      if ((v = (y = this.options.extensions) == null ? void 0 : y.inline) != null && v.some((S) => (p = S.call({ lexer: this }, t, r)) ? (t = t.substring(p.raw.length), r.push(p), true) : false)) continue;
      if (p = this.tokenizer.escape(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.tag(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.link(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(p.raw.length);
        let S = r.at(-1);
        p.type === "text" && (S == null ? void 0 : S.type) === "text" ? (S.raw += p.raw, S.text += p.text) : r.push(p);
        continue;
      }
      if (p = this.tokenizer.emStrong(t, o, l)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.codespan(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.br(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.del(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (p = this.tokenizer.autolink(t)) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      if (!this.state.inLink && (p = this.tokenizer.url(t))) {
        t = t.substring(p.raw.length), r.push(p);
        continue;
      }
      let w = t;
      if ((g = this.options.extensions) != null && g.startInline) {
        let S = 1 / 0, f = t.slice(1), b;
        this.options.extensions.startInline.forEach((d) => {
          b = d.call({ lexer: this }, f), typeof b == "number" && b >= 0 && (S = Math.min(S, b));
        }), S < 1 / 0 && S >= 0 && (w = t.substring(0, S + 1));
      }
      if (p = this.tokenizer.inlineText(w)) {
        t = t.substring(p.raw.length), p.raw.slice(-1) !== "_" && (l = p.raw.slice(-1)), s = true;
        let S = r.at(-1);
        (S == null ? void 0 : S.type) === "text" ? (S.raw += p.raw, S.text += p.text) : r.push(p);
        continue;
      }
      if (t) {
        let S = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(S);
          break;
        } else throw new Error(S);
      }
    }
    return r;
  }
}, cs = class {
  constructor(e3) {
    ve(this, "options");
    ve(this, "parser");
    this.options = e3 || Gn;
  }
  space(e3) {
    return "";
  }
  code({ text: e3, lang: t, escaped: r }) {
    var s;
    let o = (s = (t || "").match(kt.notSpaceStart)) == null ? void 0 : s[0], a = e3.replace(kt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Or(o) + '">' + (r ? a : Or(a, true)) + `</code></pre>
` : "<pre><code>" + (r ? a : Or(a, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e3 }) {
    return `<blockquote>
${this.parser.parse(e3)}</blockquote>
`;
  }
  html({ text: e3 }) {
    return e3;
  }
  def(e3) {
    return "";
  }
  heading({ tokens: e3, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e3)}</h${t}>
`;
  }
  hr(e3) {
    return `<hr>
`;
  }
  list(e3) {
    let t = e3.ordered, r = e3.start, o = "";
    for (let l = 0; l < e3.items.length; l++) {
      let c = e3.items[l];
      o += this.listitem(c);
    }
    let a = t ? "ol" : "ul", s = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + a + s + `>
` + o + "</" + a + `>
`;
  }
  listitem(e3) {
    var r;
    let t = "";
    if (e3.task) {
      let o = this.checkbox({ checked: !!e3.checked });
      e3.loose ? ((r = e3.tokens[0]) == null ? void 0 : r.type) === "paragraph" ? (e3.tokens[0].text = o + " " + e3.tokens[0].text, e3.tokens[0].tokens && e3.tokens[0].tokens.length > 0 && e3.tokens[0].tokens[0].type === "text" && (e3.tokens[0].tokens[0].text = o + " " + Or(e3.tokens[0].tokens[0].text), e3.tokens[0].tokens[0].escaped = true)) : e3.tokens.unshift({ type: "text", raw: o + " ", text: o + " ", escaped: true }) : t += o + " ";
    }
    return t += this.parser.parse(e3.tokens, !!e3.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e3 }) {
    return "<input " + (e3 ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e3 }) {
    return `<p>${this.parser.parseInline(e3)}</p>
`;
  }
  table(e3) {
    let t = "", r = "";
    for (let a = 0; a < e3.header.length; a++) r += this.tablecell(e3.header[a]);
    t += this.tablerow({ text: r });
    let o = "";
    for (let a = 0; a < e3.rows.length; a++) {
      let s = e3.rows[a];
      r = "";
      for (let l = 0; l < s.length; l++) r += this.tablecell(s[l]);
      o += this.tablerow({ text: r });
    }
    return o && (o = `<tbody>${o}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + o + `</table>
`;
  }
  tablerow({ text: e3 }) {
    return `<tr>
${e3}</tr>
`;
  }
  tablecell(e3) {
    let t = this.parser.parseInline(e3.tokens), r = e3.header ? "th" : "td";
    return (e3.align ? `<${r} align="${e3.align}">` : `<${r}>`) + t + `</${r}>
`;
  }
  strong({ tokens: e3 }) {
    return `<strong>${this.parser.parseInline(e3)}</strong>`;
  }
  em({ tokens: e3 }) {
    return `<em>${this.parser.parseInline(e3)}</em>`;
  }
  codespan({ text: e3 }) {
    return `<code>${Or(e3, true)}</code>`;
  }
  br(e3) {
    return "<br>";
  }
  del({ tokens: e3 }) {
    return `<del>${this.parser.parseInline(e3)}</del>`;
  }
  link({ href: e3, title: t, tokens: r }) {
    let o = this.parser.parseInline(r), a = mg(e3);
    if (a === null) return o;
    e3 = a;
    let s = '<a href="' + e3 + '"';
    return t && (s += ' title="' + Or(t) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: e3, title: t, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = mg(e3);
    if (a === null) return Or(r);
    e3 = a;
    let s = `<img src="${e3}" alt="${r}"`;
    return t && (s += ` title="${Or(t)}"`), s += ">", s;
  }
  text(e3) {
    return "tokens" in e3 && e3.tokens ? this.parser.parseInline(e3.tokens) : "escaped" in e3 && e3.escaped ? e3.text : Or(e3.text);
  }
}, Nc = class {
  strong({ text: e3 }) {
    return e3;
  }
  em({ text: e3 }) {
    return e3;
  }
  codespan({ text: e3 }) {
    return e3;
  }
  del({ text: e3 }) {
    return e3;
  }
  html({ text: e3 }) {
    return e3;
  }
  text({ text: e3 }) {
    return e3;
  }
  link({ text: e3 }) {
    return "" + e3;
  }
  image({ text: e3 }) {
    return "" + e3;
  }
  br() {
    return "";
  }
}, hr = class ec {
  constructor(t) {
    ve(this, "options");
    ve(this, "renderer");
    ve(this, "textRenderer");
    this.options = t || Gn, this.options.renderer = this.options.renderer || new cs(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Nc();
  }
  static parse(t, r) {
    return new ec(r).parse(t);
  }
  static parseInline(t, r) {
    return new ec(r).parseInline(t);
  }
  parse(t, r = true) {
    var a, s;
    let o = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((s = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && s[c.type]) {
        let y = c, v = this.options.extensions.renderers[y.type].call({ parser: this }, y);
        if (v !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(y.type)) {
          o += v || "";
          continue;
        }
      }
      let h = c;
      switch (h.type) {
        case "space": {
          o += this.renderer.space(h);
          continue;
        }
        case "hr": {
          o += this.renderer.hr(h);
          continue;
        }
        case "heading": {
          o += this.renderer.heading(h);
          continue;
        }
        case "code": {
          o += this.renderer.code(h);
          continue;
        }
        case "table": {
          o += this.renderer.table(h);
          continue;
        }
        case "blockquote": {
          o += this.renderer.blockquote(h);
          continue;
        }
        case "list": {
          o += this.renderer.list(h);
          continue;
        }
        case "html": {
          o += this.renderer.html(h);
          continue;
        }
        case "def": {
          o += this.renderer.def(h);
          continue;
        }
        case "paragraph": {
          o += this.renderer.paragraph(h);
          continue;
        }
        case "text": {
          let y = h, v = this.renderer.text(y);
          for (; l + 1 < t.length && t[l + 1].type === "text"; ) y = t[++l], v += `
` + this.renderer.text(y);
          r ? o += this.renderer.paragraph({ type: "paragraph", raw: v, text: v, tokens: [{ type: "text", raw: v, text: v, escaped: true }] }) : o += v;
          continue;
        }
        default: {
          let y = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent) return console.error(y), "";
          throw new Error(y);
        }
      }
    }
    return o;
  }
  parseInline(t, r = this.renderer) {
    var a, s;
    let o = "";
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if ((s = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && s[c.type]) {
        let y = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (y !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(c.type)) {
          o += y || "";
          continue;
        }
      }
      let h = c;
      switch (h.type) {
        case "escape": {
          o += r.text(h);
          break;
        }
        case "html": {
          o += r.html(h);
          break;
        }
        case "link": {
          o += r.link(h);
          break;
        }
        case "image": {
          o += r.image(h);
          break;
        }
        case "strong": {
          o += r.strong(h);
          break;
        }
        case "em": {
          o += r.em(h);
          break;
        }
        case "codespan": {
          o += r.codespan(h);
          break;
        }
        case "br": {
          o += r.br(h);
          break;
        }
        case "del": {
          o += r.del(h);
          break;
        }
        case "text": {
          o += r.text(h);
          break;
        }
        default: {
          let y = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent) return console.error(y), "";
          throw new Error(y);
        }
      }
    }
    return o;
  }
}, Ga, fo = (Ga = class {
  constructor(e3) {
    ve(this, "options");
    ve(this, "block");
    this.options = e3 || Gn;
  }
  preprocess(e3) {
    return e3;
  }
  postprocess(e3) {
    return e3;
  }
  processAllTokens(e3) {
    return e3;
  }
  emStrongMask(e3) {
    return e3;
  }
  provideLexer() {
    return this.block ? pr.lex : pr.lexInline;
  }
  provideParser() {
    return this.block ? hr.parse : hr.parseInline;
  }
}, ve(Ga, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), ve(Ga, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Ga), mm = class {
  constructor(...e3) {
    ve(this, "defaults", Pc());
    ve(this, "options", this.setOptions);
    ve(this, "parse", this.parseMarkdown(true));
    ve(this, "parseInline", this.parseMarkdown(false));
    ve(this, "Parser", hr);
    ve(this, "Renderer", cs);
    ve(this, "TextRenderer", Nc);
    ve(this, "Lexer", pr);
    ve(this, "Tokenizer", ls);
    ve(this, "Hooks", fo);
    this.use(...e3);
  }
  walkTokens(e3, t) {
    var o, a;
    let r = [];
    for (let s of e3) switch (r = r.concat(t.call(this, s)), s.type) {
      case "table": {
        let l = s;
        for (let c of l.header) r = r.concat(this.walkTokens(c.tokens, t));
        for (let c of l.rows) for (let h of c) r = r.concat(this.walkTokens(h.tokens, t));
        break;
      }
      case "list": {
        let l = s;
        r = r.concat(this.walkTokens(l.items, t));
        break;
      }
      default: {
        let l = s;
        (a = (o = this.defaults.extensions) == null ? void 0 : o.childTokens) != null && a[l.type] ? this.defaults.extensions.childTokens[l.type].forEach((c) => {
          let h = l[c].flat(1 / 0);
          r = r.concat(this.walkTokens(h, t));
        }) : l.tokens && (r = r.concat(this.walkTokens(l.tokens, t)));
      }
    }
    return r;
  }
  use(...e3) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e3.forEach((r) => {
      let o = { ...r };
      if (o.async = this.defaults.async || o.async || false, r.extensions && (r.extensions.forEach((a) => {
        if (!a.name) throw new Error("extension name required");
        if ("renderer" in a) {
          let s = t.renderers[a.name];
          s ? t.renderers[a.name] = function(...l) {
            let c = a.renderer.apply(this, l);
            return c === false && (c = s.apply(this, l)), c;
          } : t.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[a.level];
          s ? s.unshift(a.tokenizer) : t[a.level] = [a.tokenizer], a.start && (a.level === "block" ? t.startBlock ? t.startBlock.push(a.start) : t.startBlock = [a.start] : a.level === "inline" && (t.startInline ? t.startInline.push(a.start) : t.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (t.childTokens[a.name] = a.childTokens);
      }), o.extensions = t), r.renderer) {
        let a = this.defaults.renderer || new cs(this.defaults);
        for (let s in r.renderer) {
          if (!(s in a)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let l = s, c = r.renderer[l], h = a[l];
          a[l] = (...y) => {
            let v = c.apply(a, y);
            return v === false && (v = h.apply(a, y)), v || "";
          };
        }
        o.renderer = a;
      }
      if (r.tokenizer) {
        let a = this.defaults.tokenizer || new ls(this.defaults);
        for (let s in r.tokenizer) {
          if (!(s in a)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let l = s, c = r.tokenizer[l], h = a[l];
          a[l] = (...y) => {
            let v = c.apply(a, y);
            return v === false && (v = h.apply(a, y)), v;
          };
        }
        o.tokenizer = a;
      }
      if (r.hooks) {
        let a = this.defaults.hooks || new fo();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let l = s, c = r.hooks[l], h = a[l];
          fo.passThroughHooks.has(s) ? a[l] = (y) => {
            if (this.defaults.async && fo.passThroughHooksRespectAsync.has(s)) return (async () => {
              let g = await c.call(a, y);
              return h.call(a, g);
            })();
            let v = c.call(a, y);
            return h.call(a, v);
          } : a[l] = (...y) => {
            if (this.defaults.async) return (async () => {
              let g = await c.apply(a, y);
              return g === false && (g = await h.apply(a, y)), g;
            })();
            let v = c.apply(a, y);
            return v === false && (v = h.apply(a, y)), v;
          };
        }
        o.hooks = a;
      }
      if (r.walkTokens) {
        let a = this.defaults.walkTokens, s = r.walkTokens;
        o.walkTokens = function(l) {
          let c = [];
          return c.push(s.call(this, l)), a && (c = c.concat(a.call(this, l))), c;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(e3) {
    return this.defaults = { ...this.defaults, ...e3 }, this;
  }
  lexer(e3, t) {
    return pr.lex(e3, t ?? this.defaults);
  }
  parser(e3, t) {
    return hr.parse(e3, t ?? this.defaults);
  }
  parseMarkdown(e3) {
    return (t, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === true && o.async === false) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof t > "u" || t === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof t != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = e3), a.async) return (async () => {
        let l = a.hooks ? await a.hooks.preprocess(t) : t, c = await (a.hooks ? await a.hooks.provideLexer() : e3 ? pr.lex : pr.lexInline)(l, a), h = a.hooks ? await a.hooks.processAllTokens(c) : c;
        a.walkTokens && await Promise.all(this.walkTokens(h, a.walkTokens));
        let y = await (a.hooks ? await a.hooks.provideParser() : e3 ? hr.parse : hr.parseInline)(h, a);
        return a.hooks ? await a.hooks.postprocess(y) : y;
      })().catch(s);
      try {
        a.hooks && (t = a.hooks.preprocess(t));
        let l = (a.hooks ? a.hooks.provideLexer() : e3 ? pr.lex : pr.lexInline)(t, a);
        a.hooks && (l = a.hooks.processAllTokens(l)), a.walkTokens && this.walkTokens(l, a.walkTokens);
        let c = (a.hooks ? a.hooks.provideParser() : e3 ? hr.parse : hr.parseInline)(l, a);
        return a.hooks && (c = a.hooks.postprocess(c)), c;
      } catch (l) {
        return s(l);
      }
    };
  }
  onError(e3, t) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e3) {
        let o = "<p>An error occurred:</p><pre>" + Or(r.message + "", true) + "</pre>";
        return t ? Promise.resolve(o) : o;
      }
      if (t) return Promise.reject(r);
      throw r;
    };
  }
}, Un = new mm();
function Fe(e3, t) {
  return Un.parse(e3, t);
}
Fe.options = Fe.setOptions = function(e3) {
  return Un.setOptions(e3), Fe.defaults = Un.defaults, am(Fe.defaults), Fe;
};
Fe.getDefaults = Pc;
Fe.defaults = Gn;
Fe.use = function(...e3) {
  return Un.use(...e3), Fe.defaults = Un.defaults, am(Fe.defaults), Fe;
};
Fe.walkTokens = function(e3, t) {
  return Un.walkTokens(e3, t);
};
Fe.parseInline = Un.parseInline;
Fe.Parser = hr;
Fe.parser = hr.parse;
Fe.Renderer = cs;
Fe.TextRenderer = Nc;
Fe.Lexer = pr;
Fe.lexer = pr.lex;
Fe.Tokenizer = ls;
Fe.Hooks = fo;
Fe.parse = Fe;
Fe.options;
Fe.setOptions;
Fe.use;
Fe.walkTokens;
Fe.parseInline;
hr.parse;
pr.lex;
const Ek = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}, ym = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g, Ok = RegExp(ym.source), bg = (e3 = "") => Ok.test(e3) ? e3.replace(ym, (t) => Ek[t] || "'") : e3, Sg = (e3, t) => {
  if (!t) return e3;
  try {
    return new URL(e3, t).href;
  } catch {
    return e3;
  }
};
var Ak = class {
  constructor(e3) {
    ve(this, "renderer");
    this.renderer = e3.renderer;
  }
  parse(e3) {
    this.renderer.elIdList.push(0);
    const t = e3.map((r) => {
      switch (r.type) {
        case "space":
          return null;
        case "heading": {
          const o = r.depth;
          return this.renderer.heading(this.parseInline(r.tokens), o);
        }
        case "paragraph":
          return this.renderer.paragraph(this.parseInline(r.tokens));
        case "text": {
          const o = r;
          return o.tokens ? this.parseInline(o.tokens) : r.text;
        }
        case "blockquote": {
          const o = r, a = this.parse(o.tokens);
          return this.renderer.blockquote(a);
        }
        case "list": {
          const o = r;
          this.renderer.elIdList.push(0);
          const a = o.items.map((s) => {
            const l = [];
            return s.task && l.push(this.renderer.checkbox(s.checked ?? false)), l.push(this.parse(s.tokens)), this.renderer.listItem(l);
          });
          return this.renderer.elIdList.pop(), this.renderer.list(a, r.ordered, r.ordered ? r.start : void 0);
        }
        case "code":
          return this.renderer.code(r.text, r.lang);
        case "html":
          return this.renderer.html(r.text);
        case "table": {
          const o = r;
          this.renderer.elIdList.push(0);
          const a = o.header.map((y, v) => this.renderer.tableCell(this.parseInline(y.tokens), {
            header: true,
            align: r.align[v]
          }));
          this.renderer.elIdList.pop();
          const s = this.renderer.tableRow(a), l = this.renderer.tableHeader(s);
          this.renderer.elIdList.push(0);
          const c = o.rows.map((y) => {
            this.renderer.elIdList.push(0);
            const v = y.map((g, p) => this.renderer.tableCell(this.parseInline(g.tokens), {
              header: false,
              align: r.align[p]
            }));
            return this.renderer.elIdList.pop(), this.renderer.tableRow(v);
          });
          this.renderer.elIdList.pop();
          const h = this.renderer.tableBody(c);
          return this.renderer.table([l, h]);
        }
        case "hr":
          return this.renderer.hr();
        default:
          return console.warn(`Token with "${r.type}" type was not found`), null;
      }
    });
    return this.renderer.elIdList.pop(), t;
  }
  parseInline(e3 = []) {
    this.renderer.elIdList.push(0);
    const t = e3.map((r) => {
      switch (r.type) {
        case "text":
          return this.renderer.text(bg(r.text));
        case "strong":
          return this.renderer.strong(this.parseInline(r.tokens));
        case "em":
          return this.renderer.em(this.parseInline(r.tokens));
        case "del":
          return this.renderer.del(this.parseInline(r.tokens));
        case "codespan":
          return this.renderer.codespan(bg(r.text));
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
}, Tk = Ak, pn, Be, et, tc, qg, Rk = (qg = class {
  constructor(e3 = {}) {
    xt(this, Be);
    ve(this, "elIdList", []);
    xt(this, pn);
    const { renderer: t } = e3;
    Xe(this, pn, e3), t && typeof t == "object" && Object.entries(t).forEach(([r, o]) => {
      const a = r, s = o;
      !this[a] || a === "elementId" || a === "elIdList" || typeof s != "function" || Object.defineProperty(this, a, {
        value(...l) {
          return $e(this, Be, tc).call(this), s.apply(this, l);
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
  heading(e3, t) {
    return $e(this, Be, et).call(this, `h${t}`, e3);
  }
  paragraph(e3) {
    return $e(this, Be, et).call(this, "p", e3);
  }
  link(e3, t) {
    const r = Sg(e3, te(this, pn).baseURL), o = te(this, pn).openLinksInNewTab ? "_blank" : null;
    return $e(this, Be, et).call(this, "a", t, {
      href: r,
      target: o
    });
  }
  image(e3, t, r = null) {
    const o = Sg(e3, te(this, pn).baseURL);
    return $e(this, Be, et).call(this, "img", null, {
      src: o,
      alt: t,
      title: r
    });
  }
  codespan(e3, t = null) {
    const r = t ? `${te(this, pn).langPrefix}${t}` : null;
    return $e(this, Be, et).call(this, "code", e3, { className: r });
  }
  code(e3, t) {
    return $e(this, Be, et).call(this, "pre", this.codespan(e3, t));
  }
  blockquote(e3) {
    return $e(this, Be, et).call(this, "blockquote", e3);
  }
  list(e3, t, r) {
    return $e(this, Be, et).call(this, t ? "ol" : "ul", e3, t && r !== 1 ? { start: r } : {});
  }
  listItem(e3) {
    return $e(this, Be, et).call(this, "li", e3);
  }
  checkbox(e3) {
    return $e(this, Be, et).call(this, "input", null, {
      type: "checkbox",
      disabled: true,
      checked: e3
    });
  }
  table(e3) {
    return $e(this, Be, et).call(this, "table", e3);
  }
  tableHeader(e3) {
    return $e(this, Be, et).call(this, "thead", e3);
  }
  tableBody(e3) {
    return $e(this, Be, et).call(this, "tbody", e3);
  }
  tableRow(e3) {
    return $e(this, Be, et).call(this, "tr", e3);
  }
  tableCell(e3, t) {
    const r = t.header ? "th" : "td";
    return $e(this, Be, et).call(this, r, e3, { align: t.align });
  }
  strong(e3) {
    return $e(this, Be, et).call(this, "strong", e3);
  }
  em(e3) {
    return $e(this, Be, et).call(this, "em", e3);
  }
  del(e3) {
    return $e(this, Be, et).call(this, "del", e3);
  }
  text(e3) {
    return e3;
  }
  html(e3) {
    return e3;
  }
  hr() {
    return $e(this, Be, et).call(this, "hr");
  }
  br() {
    return $e(this, Be, et).call(this, "br");
  }
}, pn = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakSet(), et = function(e3, t = null, r = {}) {
  const o = {
    key: `marked-react-${this.elementId}`,
    suppressHydrationWarning: true
  };
  return $e(this, Be, tc).call(this), qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(e3, {
    ...r,
    ...o
  }, t);
}, tc = function() {
  this.elIdList[this.elIdList.length - 1] += 1;
}, qg), Pk = Rk;
const kk = (e3) => {
  if (e3.value && typeof e3.value != "string") throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof e3.value}`);
  if (e3.children && typeof e3.children != "string") throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof e3.children}`);
}, Ck = {
  isInline: false,
  breaks: false,
  gfm: true,
  baseURL: void 0,
  openLinksInNewTab: true,
  langPrefix: "language-",
  renderer: void 0
}, $k = new mm(), Ik = (e3) => {
  kk(e3);
  const t = {
    ...Ck,
    ...e3
  }, r = t.instance ?? $k, o = {
    breaks: t.breaks,
    gfm: t.gfm,
    tokenizer: r.defaults.tokenizer
  }, a = t.value ?? t.children ?? "", s = t.isInline ? r.Lexer.lexInline(a, o) : r.lexer(a, o), l = { renderer: new Pk({
    renderer: t.renderer,
    baseURL: t.baseURL,
    openLinksInNewTab: t.openLinksInNewTab,
    langPrefix: t.langPrefix
  }) }, c = new Tk(l), h = t.isInline ? c.parseInline(s) : c.parse(s);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createElement(qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, null, h);
};
var Lk = Ik, Mk = Lk;
const wI = ({
  children: e3,
  label: t,
  placement: r = "top",
  className: o$1
}) => {
  const [a, s] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(
    null
  ), l = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null), [c, h] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(null), [y, v] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(false), { styles: g, attributes: p } = nv(a, c, {
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
  }), w = o.Children.map(e3, (S) => o.isValidElement(S) ? o.cloneElement(S, {
    ref: s,
    onMouseEnter: () => v(true),
    onMouseLeave: () => {
      l.current = setTimeout(() => v(false), 50);
    }
  }) : S);
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    w,
    y && t && b.createPortal(
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          ref: h,
          style: g.popper,
          ...p.popper,
          className: nt(
            "z-10 select-none rounded bg-purple-200 font-poppins font-medium text-s px-2 py-0.5 text-purple-900 shadow-md",
            o$1
          ),
          onMouseEnter: () => {
            l.current && clearTimeout(l.current), v(true);
          },
          onMouseLeave: () => v(false),
          children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Mk, { openLinksInNewTab: true, children: t })
        }
      ),
      document.querySelector("body")
    )
  ] });
}, Fk = keyframes`
  to {
    fill: url(#d);
    stroke-dashoffset: 0;
  }
`, Nk = is.svg`
  & .e {
    fill: url(#d);
  }

  & #tail {
    stroke: url(#d);
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
    animation: ${Fk} 1.5s ease-in-out infinite alternate-reverse;
  }

  & #circle {
    stroke: #fff;
    stroke-width: 2;
    fill: #fff;
    stroke-dasharray: 700;
    stroke-dashoffset: 700;
  }
`, bI = ({
  message: e3,
  version: t
}) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-fd-gray-default text-white", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col text-center", children: [
  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "relative mr-4 self-center", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center rounded", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(Nk, { className: "h-60 w-60", viewBox: "0 0 143.14 136.27", children: [
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("defs", { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("linearGradient", { id: "d", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "0%", stopColor: "#2743a6", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#ffa4c0; #2743a6;",
          dur: "6s",
          repeatCount: "indefinite"
        }
      ) }),
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("stop", { offset: "100%", stopColor: "#ffa4c0", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "animate",
        {
          attributeName: "stop-color",
          values: "#2743a6; #ffa4c0;",
          dur: "2ds",
          repeatCount: "indefinite"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "a" }),
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "b", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("g", { id: "c", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("g", { children: [
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "tail",
          className: "e",
          d: "M134.13,79.9l.25-1.2h-21.87l-.21,.7c-.03,.08-2.41,7.72-7.11,14.56-5.87,8.54-12.57,12.63-12.63,12.67l-1,.6,24.25,28.96h27.33l-22.61-26.46c2.2-2.67,10.06-13.09,13.6-29.83Z"
        }
      ),
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "path",
        {
          id: "circle",
          className: "f",
          d: "M83.08,113.64l18.93,22.6-33.68,.03-11.17-.03c-9.38,.01-18.55-2.45-26.56-7.11-2.94-1.71-5.72-3.71-8.29-6-8.79-7.8-17.6-19.72-20.92-37.37-.01-.02-.02-.03-.03-.05v-.09c-1.68-9.04-1.93-19.58,0-31.84C8.57,21.67,36.68-.66,69.93,.02c12.81,.27,25.06,4.28,35.59,11.48,.31,.2,.62,.41,.92,.62,.25,.18,.5,.35,.74,.53,8.82,6.31,16.06,14.69,21.02,24.42,.17,.33,.34,.65,.5,.98,.1,.21,.2,.41,.3,.61,4.35,8.92,6.63,18.54,6.54,28.06,0,.36,.02,.71,.02,1.06,0,.82-.03,1.62-.06,2.43h-22c.04-.81,.06-1.61,.06-2.43,0-1.52-.08-3.02-.23-4.5-2.68-22.17-21.26-39.86-43.98-40.63-4.43-.15-8.75,.29-12.88,1.28-.02,0-.04,.01-.05,.01-.48,.12-.95,.24-1.42,.38-.97,.26-1.94,.56-2.89,.9-.23,.07-.46,.15-.69,.24-6.2,2.27-11.84,5.87-16.59,10.67-8.99,9.09-13.84,21.44-13.3,33.9,0,19.98,17.86,39.48,35.59,42.56,6.4,1.37,24.04,1.24,25.96,1.05Z"
        }
      )
    ] }) }) })
  ] }) }) }),
  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { children: [
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "text-xs text-grey-200", children: t }),
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h2", { className: "text-lg text-grey-100", children: e3 })
  ] })
] }) });
var po = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Dk = po.exports, xg;
function zk() {
  return xg || (xg = 1, (function(e3, t) {
    (function() {
      var r, o = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", h = "__lodash_hash_undefined__", y = 500, v = "__lodash_placeholder__", g = 1, p = 2, w = 4, S = 1, f = 2, b = 1, d = 2, x = 4, _ = 8, R = 16, A = 32, C = 64, W = 128, L = 256, M = 512, j = 30, D = "...", I = 800, B = 16, H = 1, k = 2, X = 3, V = 1 / 0, ee = 9007199254740991, fe = 17976931348623157e292, q = NaN, J = 4294967295, oe = J - 1, se = J >>> 1, re = [
        ["ary", W],
        ["bind", b],
        ["bindKey", d],
        ["curry", _],
        ["curryRight", R],
        ["flip", M],
        ["partial", A],
        ["partialRight", C],
        ["rearg", L]
      ], le = "[object Arguments]", ce = "[object Array]", me = "[object AsyncFunction]", ge = "[object Boolean]", xe = "[object Date]", Oe = "[object DOMException]", Ge = "[object Error]", ne = "[object Function]", yt = "[object GeneratorFunction]", ct = "[object Map]", wr = "[object Number]", Mo = "[object Null]", Zt = "[object Object]", Fo = "[object Promise]", Cs = "[object Proxy]", Nt = "[object RegExp]", wt = "[object Set]", Xr = "[object String]", bn = "[object Symbol]", Ei = "[object Undefined]", Jr = "[object WeakMap]", No = "[object WeakSet]", Qr = "[object ArrayBuffer]", Ir = "[object DataView]", $s = "[object Float32Array]", Is = "[object Float64Array]", Ls = "[object Int8Array]", Ms = "[object Int16Array]", Fs = "[object Int32Array]", Ns = "[object Uint8Array]", Ds = "[object Uint8ClampedArray]", zs = "[object Uint16Array]", Ws = "[object Uint32Array]", e0 = /\b__p \+= '';/g, t0 = /\b(__p \+=) '' \+/g, r0 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Uc = /&(?:amp|lt|gt|quot|#39);/g, Hc = /[&<>"']/g, n0 = RegExp(Uc.source), i0 = RegExp(Hc.source), o0 = /<%-([\s\S]+?)%>/g, a0 = /<%([\s\S]+?)%>/g, qc = /<%=([\s\S]+?)%>/g, s0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u0 = /^\w*$/, l0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bs = /[\\^$.*+?()[\]{}|]/g, c0 = RegExp(Bs.source), Us = /^\s+/, f0 = /\s/, d0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, p0 = /\{\n\/\* \[wrapped with (.+)\] \*/, h0 = /,? & /, g0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, v0 = /[()=,{}\[\]\/\s]/, m0 = /\\(\\)?/g, y0 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, jc = /\w*$/, w0 = /^[-+]0x[0-9a-f]+$/i, b0 = /^0b[01]+$/i, S0 = /^\[object .+?Constructor\]$/, x0 = /^0o[0-7]+$/i, _0 = /^(?:0|[1-9]\d*)$/, E0 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Do = /($^)/, O0 = /['\n\r\u2028\u2029\\]/g, zo = "\\ud800-\\udfff", A0 = "\\u0300-\\u036f", T0 = "\\ufe20-\\ufe2f", R0 = "\\u20d0-\\u20ff", Zc = A0 + T0 + R0, Gc = "\\u2700-\\u27bf", Kc = "a-z\\xdf-\\xf6\\xf8-\\xff", P0 = "\\xac\\xb1\\xd7\\xf7", k0 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", C0 = "\\u2000-\\u206f", $0 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Vc = "A-Z\\xc0-\\xd6\\xd8-\\xde", Yc = "\\ufe0e\\ufe0f", Xc = P0 + k0 + C0 + $0, Hs = "['’]", I0 = "[" + zo + "]", Jc = "[" + Xc + "]", Wo = "[" + Zc + "]", Qc = "\\d+", L0 = "[" + Gc + "]", ef = "[" + Kc + "]", tf = "[^" + zo + Xc + Qc + Gc + Kc + Vc + "]", qs = "\\ud83c[\\udffb-\\udfff]", M0 = "(?:" + Wo + "|" + qs + ")", rf = "[^" + zo + "]", js = "(?:\\ud83c[\\udde6-\\uddff]){2}", Zs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Vn = "[" + Vc + "]", nf = "\\u200d", of = "(?:" + ef + "|" + tf + ")", F0 = "(?:" + Vn + "|" + tf + ")", af = "(?:" + Hs + "(?:d|ll|m|re|s|t|ve))?", sf = "(?:" + Hs + "(?:D|LL|M|RE|S|T|VE))?", uf = M0 + "?", lf = "[" + Yc + "]?", N0 = "(?:" + nf + "(?:" + [rf, js, Zs].join("|") + ")" + lf + uf + ")*", D0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", z0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", cf = lf + uf + N0, W0 = "(?:" + [L0, js, Zs].join("|") + ")" + cf, B0 = "(?:" + [rf + Wo + "?", Wo, js, Zs, I0].join("|") + ")", U0 = RegExp(Hs, "g"), H0 = RegExp(Wo, "g"), Gs = RegExp(qs + "(?=" + qs + ")|" + B0 + cf, "g"), q0 = RegExp([
        Vn + "?" + ef + "+" + af + "(?=" + [Jc, Vn, "$"].join("|") + ")",
        F0 + "+" + sf + "(?=" + [Jc, Vn + of, "$"].join("|") + ")",
        Vn + "?" + of + "+" + af,
        Vn + "+" + sf,
        z0,
        D0,
        Qc,
        W0
      ].join("|"), "g"), j0 = RegExp("[" + nf + zo + Zc + Yc + "]"), Z0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, G0 = [
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
      ], K0 = -1, Ue = {};
      Ue[$s] = Ue[Is] = Ue[Ls] = Ue[Ms] = Ue[Fs] = Ue[Ns] = Ue[Ds] = Ue[zs] = Ue[Ws] = true, Ue[le] = Ue[ce] = Ue[Qr] = Ue[ge] = Ue[Ir] = Ue[xe] = Ue[Ge] = Ue[ne] = Ue[ct] = Ue[wr] = Ue[Zt] = Ue[Nt] = Ue[wt] = Ue[Xr] = Ue[Jr] = false;
      var We = {};
      We[le] = We[ce] = We[Qr] = We[Ir] = We[ge] = We[xe] = We[$s] = We[Is] = We[Ls] = We[Ms] = We[Fs] = We[ct] = We[wr] = We[Zt] = We[Nt] = We[wt] = We[Xr] = We[bn] = We[Ns] = We[Ds] = We[zs] = We[Ws] = true, We[Ge] = We[ne] = We[Jr] = false;
      var V0 = {
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
      }, Y0 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, X0 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, J0 = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Q0 = parseFloat, ey = parseInt, ff = typeof Ta == "object" && Ta && Ta.Object === Object && Ta, ty = typeof self == "object" && self && self.Object === Object && self, ht = ff || ty || Function("return this")(), Ks = t && !t.nodeType && t, Sn = Ks && true && e3 && !e3.nodeType && e3, df = Sn && Sn.exports === Ks, Vs = df && ff.process, Gt = (function() {
        try {
          var F = Sn && Sn.require && Sn.require("util").types;
          return F || Vs && Vs.binding && Vs.binding("util");
        } catch {
        }
      })(), pf = Gt && Gt.isArrayBuffer, hf = Gt && Gt.isDate, gf = Gt && Gt.isMap, vf = Gt && Gt.isRegExp, mf = Gt && Gt.isSet, yf = Gt && Gt.isTypedArray;
      function Dt(F, Z, U) {
        switch (U.length) {
          case 0:
            return F.call(Z);
          case 1:
            return F.call(Z, U[0]);
          case 2:
            return F.call(Z, U[0], U[1]);
          case 3:
            return F.call(Z, U[0], U[1], U[2]);
        }
        return F.apply(Z, U);
      }
      function ry(F, Z, U, ae) {
        for (var ye = -1, Re = F == null ? 0 : F.length; ++ye < Re; ) {
          var it = F[ye];
          Z(ae, it, U(it), F);
        }
        return ae;
      }
      function Kt(F, Z) {
        for (var U = -1, ae = F == null ? 0 : F.length; ++U < ae && Z(F[U], U, F) !== false; )
          ;
        return F;
      }
      function ny(F, Z) {
        for (var U = F == null ? 0 : F.length; U-- && Z(F[U], U, F) !== false; )
          ;
        return F;
      }
      function wf(F, Z) {
        for (var U = -1, ae = F == null ? 0 : F.length; ++U < ae; )
          if (!Z(F[U], U, F))
            return false;
        return true;
      }
      function en(F, Z) {
        for (var U = -1, ae = F == null ? 0 : F.length, ye = 0, Re = []; ++U < ae; ) {
          var it = F[U];
          Z(it, U, F) && (Re[ye++] = it);
        }
        return Re;
      }
      function Bo(F, Z) {
        var U = F == null ? 0 : F.length;
        return !!U && Yn(F, Z, 0) > -1;
      }
      function Ys(F, Z, U) {
        for (var ae = -1, ye = F == null ? 0 : F.length; ++ae < ye; )
          if (U(Z, F[ae]))
            return true;
        return false;
      }
      function He(F, Z) {
        for (var U = -1, ae = F == null ? 0 : F.length, ye = Array(ae); ++U < ae; )
          ye[U] = Z(F[U], U, F);
        return ye;
      }
      function tn(F, Z) {
        for (var U = -1, ae = Z.length, ye = F.length; ++U < ae; )
          F[ye + U] = Z[U];
        return F;
      }
      function Xs(F, Z, U, ae) {
        var ye = -1, Re = F == null ? 0 : F.length;
        for (ae && Re && (U = F[++ye]); ++ye < Re; )
          U = Z(U, F[ye], ye, F);
        return U;
      }
      function iy(F, Z, U, ae) {
        var ye = F == null ? 0 : F.length;
        for (ae && ye && (U = F[--ye]); ye--; )
          U = Z(U, F[ye], ye, F);
        return U;
      }
      function Js(F, Z) {
        for (var U = -1, ae = F == null ? 0 : F.length; ++U < ae; )
          if (Z(F[U], U, F))
            return true;
        return false;
      }
      var oy = Qs("length");
      function ay(F) {
        return F.split("");
      }
      function sy(F) {
        return F.match(g0) || [];
      }
      function bf(F, Z, U) {
        var ae;
        return U(F, function(ye, Re, it) {
          if (Z(ye, Re, it))
            return ae = Re, false;
        }), ae;
      }
      function Uo(F, Z, U, ae) {
        for (var ye = F.length, Re = U + (ae ? 1 : -1); ae ? Re-- : ++Re < ye; )
          if (Z(F[Re], Re, F))
            return Re;
        return -1;
      }
      function Yn(F, Z, U) {
        return Z === Z ? wy(F, Z, U) : Uo(F, Sf, U);
      }
      function uy(F, Z, U, ae) {
        for (var ye = U - 1, Re = F.length; ++ye < Re; )
          if (ae(F[ye], Z))
            return ye;
        return -1;
      }
      function Sf(F) {
        return F !== F;
      }
      function xf(F, Z) {
        var U = F == null ? 0 : F.length;
        return U ? tu(F, Z) / U : q;
      }
      function Qs(F) {
        return function(Z) {
          return Z == null ? r : Z[F];
        };
      }
      function eu(F) {
        return function(Z) {
          return F == null ? r : F[Z];
        };
      }
      function _f(F, Z, U, ae, ye) {
        return ye(F, function(Re, it, De) {
          U = ae ? (ae = false, Re) : Z(U, Re, it, De);
        }), U;
      }
      function ly(F, Z) {
        var U = F.length;
        for (F.sort(Z); U--; )
          F[U] = F[U].value;
        return F;
      }
      function tu(F, Z) {
        for (var U, ae = -1, ye = F.length; ++ae < ye; ) {
          var Re = Z(F[ae]);
          Re !== r && (U = U === r ? Re : U + Re);
        }
        return U;
      }
      function ru(F, Z) {
        for (var U = -1, ae = Array(F); ++U < F; )
          ae[U] = Z(U);
        return ae;
      }
      function cy(F, Z) {
        return He(Z, function(U) {
          return [U, F[U]];
        });
      }
      function Ef(F) {
        return F && F.slice(0, Rf(F) + 1).replace(Us, "");
      }
      function zt(F) {
        return function(Z) {
          return F(Z);
        };
      }
      function nu(F, Z) {
        return He(Z, function(U) {
          return F[U];
        });
      }
      function Oi(F, Z) {
        return F.has(Z);
      }
      function Of(F, Z) {
        for (var U = -1, ae = F.length; ++U < ae && Yn(Z, F[U], 0) > -1; )
          ;
        return U;
      }
      function Af(F, Z) {
        for (var U = F.length; U-- && Yn(Z, F[U], 0) > -1; )
          ;
        return U;
      }
      function fy(F, Z) {
        for (var U = F.length, ae = 0; U--; )
          F[U] === Z && ++ae;
        return ae;
      }
      var dy = eu(V0), py = eu(Y0);
      function hy(F) {
        return "\\" + J0[F];
      }
      function gy(F, Z) {
        return F == null ? r : F[Z];
      }
      function Xn(F) {
        return j0.test(F);
      }
      function vy(F) {
        return Z0.test(F);
      }
      function my(F) {
        for (var Z, U = []; !(Z = F.next()).done; )
          U.push(Z.value);
        return U;
      }
      function iu(F) {
        var Z = -1, U = Array(F.size);
        return F.forEach(function(ae, ye) {
          U[++Z] = [ye, ae];
        }), U;
      }
      function Tf(F, Z) {
        return function(U) {
          return F(Z(U));
        };
      }
      function rn(F, Z) {
        for (var U = -1, ae = F.length, ye = 0, Re = []; ++U < ae; ) {
          var it = F[U];
          (it === Z || it === v) && (F[U] = v, Re[ye++] = U);
        }
        return Re;
      }
      function Ho(F) {
        var Z = -1, U = Array(F.size);
        return F.forEach(function(ae) {
          U[++Z] = ae;
        }), U;
      }
      function yy(F) {
        var Z = -1, U = Array(F.size);
        return F.forEach(function(ae) {
          U[++Z] = [ae, ae];
        }), U;
      }
      function wy(F, Z, U) {
        for (var ae = U - 1, ye = F.length; ++ae < ye; )
          if (F[ae] === Z)
            return ae;
        return -1;
      }
      function by(F, Z, U) {
        for (var ae = U + 1; ae--; )
          if (F[ae] === Z)
            return ae;
        return ae;
      }
      function Jn(F) {
        return Xn(F) ? xy(F) : oy(F);
      }
      function ur(F) {
        return Xn(F) ? _y(F) : ay(F);
      }
      function Rf(F) {
        for (var Z = F.length; Z-- && f0.test(F.charAt(Z)); )
          ;
        return Z;
      }
      var Sy = eu(X0);
      function xy(F) {
        for (var Z = Gs.lastIndex = 0; Gs.test(F); )
          ++Z;
        return Z;
      }
      function _y(F) {
        return F.match(Gs) || [];
      }
      function Ey(F) {
        return F.match(q0) || [];
      }
      var Oy = (function F(Z) {
        Z = Z == null ? ht : Qn.defaults(ht.Object(), Z, Qn.pick(ht, G0));
        var U = Z.Array, ae = Z.Date, ye = Z.Error, Re = Z.Function, it = Z.Math, De = Z.Object, ou = Z.RegExp, Ay = Z.String, Vt = Z.TypeError, qo = U.prototype, Ty = Re.prototype, ei = De.prototype, jo = Z["__core-js_shared__"], Zo = Ty.toString, Me = ei.hasOwnProperty, Ry = 0, Pf = (function() {
          var n = /[^.]+$/.exec(jo && jo.keys && jo.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        })(), Go = ei.toString, Py = Zo.call(De), ky = ht._, Cy = ou(
          "^" + Zo.call(Me).replace(Bs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Ko = df ? Z.Buffer : r, nn = Z.Symbol, Vo = Z.Uint8Array, kf = Ko ? Ko.allocUnsafe : r, Yo = Tf(De.getPrototypeOf, De), Cf = De.create, $f = ei.propertyIsEnumerable, Xo = qo.splice, If = nn ? nn.isConcatSpreadable : r, Ai = nn ? nn.iterator : r, xn = nn ? nn.toStringTag : r, Jo = (function() {
          try {
            var n = Tn(De, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        })(), $y = Z.clearTimeout !== ht.clearTimeout && Z.clearTimeout, Iy = ae && ae.now !== ht.Date.now && ae.now, Ly = Z.setTimeout !== ht.setTimeout && Z.setTimeout, Qo = it.ceil, ea = it.floor, au = De.getOwnPropertySymbols, My = Ko ? Ko.isBuffer : r, Lf = Z.isFinite, Fy = qo.join, Ny = Tf(De.keys, De), ot = it.max, bt = it.min, Dy = ae.now, zy = Z.parseInt, Mf = it.random, Wy = qo.reverse, su = Tn(Z, "DataView"), Ti = Tn(Z, "Map"), uu = Tn(Z, "Promise"), ti = Tn(Z, "Set"), Ri = Tn(Z, "WeakMap"), Pi = Tn(De, "create"), ta = Ri && new Ri(), ri = {}, By = Rn(su), Uy = Rn(Ti), Hy = Rn(uu), qy = Rn(ti), jy = Rn(Ri), ra = nn ? nn.prototype : r, ki = ra ? ra.valueOf : r, Ff = ra ? ra.toString : r;
        function O(n) {
          if (Ye(n) && !we(n) && !(n instanceof Ae)) {
            if (n instanceof Yt)
              return n;
            if (Me.call(n, "__wrapped__"))
              return Nd(n);
          }
          return new Yt(n);
        }
        var ni = /* @__PURE__ */ (function() {
          function n() {
          }
          return function(i) {
            if (!Ke(i))
              return {};
            if (Cf)
              return Cf(i);
            n.prototype = i;
            var u = new n();
            return n.prototype = r, u;
          };
        })();
        function na() {
        }
        function Yt(n, i) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
        }
        O.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: o0,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: a0,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: qc,
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
        }, O.prototype = na.prototype, O.prototype.constructor = O, Yt.prototype = ni(na.prototype), Yt.prototype.constructor = Yt;
        function Ae(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = J, this.__views__ = [];
        }
        function Zy() {
          var n = new Ae(this.__wrapped__);
          return n.__actions__ = Ct(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Ct(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Ct(this.__views__), n;
        }
        function Gy() {
          if (this.__filtered__) {
            var n = new Ae(this);
            n.__dir__ = -1, n.__filtered__ = true;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function Ky() {
          var n = this.__wrapped__.value(), i = this.__dir__, u = we(n), m = i < 0, E = u ? n.length : 0, T = a1(0, E, this.__views__), P = T.start, $ = T.end, z = $ - P, K = m ? $ : P - 1, Y = this.__iteratees__, Q = Y.length, ie = 0, ue = bt(z, this.__takeCount__);
          if (!u || !m && E == z && ue == z)
            return ad(n, this.__actions__);
          var pe = [];
          e:
            for (; z-- && ie < ue; ) {
              K += i;
              for (var Se = -1, he = n[K]; ++Se < Q; ) {
                var Ee = Y[Se], Te = Ee.iteratee, Ut = Ee.type, Rt = Te(he);
                if (Ut == k)
                  he = Rt;
                else if (!Rt) {
                  if (Ut == H)
                    continue e;
                  break e;
                }
              }
              pe[ie++] = he;
            }
          return pe;
        }
        Ae.prototype = ni(na.prototype), Ae.prototype.constructor = Ae;
        function _n(n) {
          var i = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++i < u; ) {
            var m = n[i];
            this.set(m[0], m[1]);
          }
        }
        function Vy() {
          this.__data__ = Pi ? Pi(null) : {}, this.size = 0;
        }
        function Yy(n) {
          var i = this.has(n) && delete this.__data__[n];
          return this.size -= i ? 1 : 0, i;
        }
        function Xy(n) {
          var i = this.__data__;
          if (Pi) {
            var u = i[n];
            return u === h ? r : u;
          }
          return Me.call(i, n) ? i[n] : r;
        }
        function Jy(n) {
          var i = this.__data__;
          return Pi ? i[n] !== r : Me.call(i, n);
        }
        function Qy(n, i) {
          var u = this.__data__;
          return this.size += this.has(n) ? 0 : 1, u[n] = Pi && i === r ? h : i, this;
        }
        _n.prototype.clear = Vy, _n.prototype.delete = Yy, _n.prototype.get = Xy, _n.prototype.has = Jy, _n.prototype.set = Qy;
        function Lr(n) {
          var i = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++i < u; ) {
            var m = n[i];
            this.set(m[0], m[1]);
          }
        }
        function ew() {
          this.__data__ = [], this.size = 0;
        }
        function tw(n) {
          var i = this.__data__, u = ia(i, n);
          if (u < 0)
            return false;
          var m = i.length - 1;
          return u == m ? i.pop() : Xo.call(i, u, 1), --this.size, true;
        }
        function rw(n) {
          var i = this.__data__, u = ia(i, n);
          return u < 0 ? r : i[u][1];
        }
        function nw(n) {
          return ia(this.__data__, n) > -1;
        }
        function iw(n, i) {
          var u = this.__data__, m = ia(u, n);
          return m < 0 ? (++this.size, u.push([n, i])) : u[m][1] = i, this;
        }
        Lr.prototype.clear = ew, Lr.prototype.delete = tw, Lr.prototype.get = rw, Lr.prototype.has = nw, Lr.prototype.set = iw;
        function Mr(n) {
          var i = -1, u = n == null ? 0 : n.length;
          for (this.clear(); ++i < u; ) {
            var m = n[i];
            this.set(m[0], m[1]);
          }
        }
        function ow() {
          this.size = 0, this.__data__ = {
            hash: new _n(),
            map: new (Ti || Lr)(),
            string: new _n()
          };
        }
        function aw(n) {
          var i = va(this, n).delete(n);
          return this.size -= i ? 1 : 0, i;
        }
        function sw(n) {
          return va(this, n).get(n);
        }
        function uw(n) {
          return va(this, n).has(n);
        }
        function lw(n, i) {
          var u = va(this, n), m = u.size;
          return u.set(n, i), this.size += u.size == m ? 0 : 1, this;
        }
        Mr.prototype.clear = ow, Mr.prototype.delete = aw, Mr.prototype.get = sw, Mr.prototype.has = uw, Mr.prototype.set = lw;
        function En(n) {
          var i = -1, u = n == null ? 0 : n.length;
          for (this.__data__ = new Mr(); ++i < u; )
            this.add(n[i]);
        }
        function cw(n) {
          return this.__data__.set(n, h), this;
        }
        function fw(n) {
          return this.__data__.has(n);
        }
        En.prototype.add = En.prototype.push = cw, En.prototype.has = fw;
        function lr(n) {
          var i = this.__data__ = new Lr(n);
          this.size = i.size;
        }
        function dw() {
          this.__data__ = new Lr(), this.size = 0;
        }
        function pw(n) {
          var i = this.__data__, u = i.delete(n);
          return this.size = i.size, u;
        }
        function hw(n) {
          return this.__data__.get(n);
        }
        function gw(n) {
          return this.__data__.has(n);
        }
        function vw(n, i) {
          var u = this.__data__;
          if (u instanceof Lr) {
            var m = u.__data__;
            if (!Ti || m.length < a - 1)
              return m.push([n, i]), this.size = ++u.size, this;
            u = this.__data__ = new Mr(m);
          }
          return u.set(n, i), this.size = u.size, this;
        }
        lr.prototype.clear = dw, lr.prototype.delete = pw, lr.prototype.get = hw, lr.prototype.has = gw, lr.prototype.set = vw;
        function Nf(n, i) {
          var u = we(n), m = !u && Pn(n), E = !u && !m && ln(n), T = !u && !m && !E && si(n), P = u || m || E || T, $ = P ? ru(n.length, Ay) : [], z = $.length;
          for (var K in n)
            (i || Me.call(n, K)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
            (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            E && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            T && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
            zr(K, z))) && $.push(K);
          return $;
        }
        function Df(n) {
          var i = n.length;
          return i ? n[wu(0, i - 1)] : r;
        }
        function mw(n, i) {
          return ma(Ct(n), On(i, 0, n.length));
        }
        function yw(n) {
          return ma(Ct(n));
        }
        function lu(n, i, u) {
          (u !== r && !cr(n[i], u) || u === r && !(i in n)) && Fr(n, i, u);
        }
        function Ci(n, i, u) {
          var m = n[i];
          (!(Me.call(n, i) && cr(m, u)) || u === r && !(i in n)) && Fr(n, i, u);
        }
        function ia(n, i) {
          for (var u = n.length; u--; )
            if (cr(n[u][0], i))
              return u;
          return -1;
        }
        function ww(n, i, u, m) {
          return on(n, function(E, T, P) {
            i(m, E, u(E), P);
          }), m;
        }
        function zf(n, i) {
          return n && Sr(i, ft(i), n);
        }
        function bw(n, i) {
          return n && Sr(i, It(i), n);
        }
        function Fr(n, i, u) {
          i == "__proto__" && Jo ? Jo(n, i, {
            configurable: true,
            enumerable: true,
            value: u,
            writable: true
          }) : n[i] = u;
        }
        function cu(n, i) {
          for (var u = -1, m = i.length, E = U(m), T = n == null; ++u < m; )
            E[u] = T ? r : qu(n, i[u]);
          return E;
        }
        function On(n, i, u) {
          return n === n && (u !== r && (n = n <= u ? n : u), i !== r && (n = n >= i ? n : i)), n;
        }
        function Xt(n, i, u, m, E, T) {
          var P, $ = i & g, z = i & p, K = i & w;
          if (u && (P = E ? u(n, m, E, T) : u(n)), P !== r)
            return P;
          if (!Ke(n))
            return n;
          var Y = we(n);
          if (Y) {
            if (P = u1(n), !$)
              return Ct(n, P);
          } else {
            var Q = St(n), ie = Q == ne || Q == yt;
            if (ln(n))
              return ld(n, $);
            if (Q == Zt || Q == le || ie && !E) {
              if (P = z || ie ? {} : Rd(n), !$)
                return z ? Xw(n, bw(P, n)) : Yw(n, zf(P, n));
            } else {
              if (!We[Q])
                return E ? n : {};
              P = l1(n, Q, $);
            }
          }
          T || (T = new lr());
          var ue = T.get(n);
          if (ue)
            return ue;
          T.set(n, P), np(n) ? n.forEach(function(he) {
            P.add(Xt(he, i, u, he, n, T));
          }) : tp(n) && n.forEach(function(he, Ee) {
            P.set(Ee, Xt(he, i, u, Ee, n, T));
          });
          var pe = K ? z ? ku : Pu : z ? It : ft, Se = Y ? r : pe(n);
          return Kt(Se || n, function(he, Ee) {
            Se && (Ee = he, he = n[Ee]), Ci(P, Ee, Xt(he, i, u, Ee, n, T));
          }), P;
        }
        function Sw(n) {
          var i = ft(n);
          return function(u) {
            return Wf(u, n, i);
          };
        }
        function Wf(n, i, u) {
          var m = u.length;
          if (n == null)
            return !m;
          for (n = De(n); m--; ) {
            var E = u[m], T = i[E], P = n[E];
            if (P === r && !(E in n) || !T(P))
              return false;
          }
          return true;
        }
        function Bf(n, i, u) {
          if (typeof n != "function")
            throw new Vt(l);
          return Di(function() {
            n.apply(r, u);
          }, i);
        }
        function $i(n, i, u, m) {
          var E = -1, T = Bo, P = true, $ = n.length, z = [], K = i.length;
          if (!$)
            return z;
          u && (i = He(i, zt(u))), m ? (T = Ys, P = false) : i.length >= a && (T = Oi, P = false, i = new En(i));
          e:
            for (; ++E < $; ) {
              var Y = n[E], Q = u == null ? Y : u(Y);
              if (Y = m || Y !== 0 ? Y : 0, P && Q === Q) {
                for (var ie = K; ie--; )
                  if (i[ie] === Q)
                    continue e;
                z.push(Y);
              } else T(i, Q, m) || z.push(Y);
            }
          return z;
        }
        var on = hd(br), Uf = hd(du, true);
        function xw(n, i) {
          var u = true;
          return on(n, function(m, E, T) {
            return u = !!i(m, E, T), u;
          }), u;
        }
        function oa(n, i, u) {
          for (var m = -1, E = n.length; ++m < E; ) {
            var T = n[m], P = i(T);
            if (P != null && ($ === r ? P === P && !Bt(P) : u(P, $)))
              var $ = P, z = T;
          }
          return z;
        }
        function _w(n, i, u, m) {
          var E = n.length;
          for (u = be(u), u < 0 && (u = -u > E ? 0 : E + u), m = m === r || m > E ? E : be(m), m < 0 && (m += E), m = u > m ? 0 : op(m); u < m; )
            n[u++] = i;
          return n;
        }
        function Hf(n, i) {
          var u = [];
          return on(n, function(m, E, T) {
            i(m, E, T) && u.push(m);
          }), u;
        }
        function gt(n, i, u, m, E) {
          var T = -1, P = n.length;
          for (u || (u = f1), E || (E = []); ++T < P; ) {
            var $ = n[T];
            i > 0 && u($) ? i > 1 ? gt($, i - 1, u, m, E) : tn(E, $) : m || (E[E.length] = $);
          }
          return E;
        }
        var fu = gd(), qf = gd(true);
        function br(n, i) {
          return n && fu(n, i, ft);
        }
        function du(n, i) {
          return n && qf(n, i, ft);
        }
        function aa(n, i) {
          return en(i, function(u) {
            return Wr(n[u]);
          });
        }
        function An(n, i) {
          i = sn(i, n);
          for (var u = 0, m = i.length; n != null && u < m; )
            n = n[xr(i[u++])];
          return u && u == m ? n : r;
        }
        function jf(n, i, u) {
          var m = i(n);
          return we(n) ? m : tn(m, u(n));
        }
        function At(n) {
          return n == null ? n === r ? Ei : Mo : xn && xn in De(n) ? o1(n) : y1(n);
        }
        function pu(n, i) {
          return n > i;
        }
        function Ew(n, i) {
          return n != null && Me.call(n, i);
        }
        function Ow(n, i) {
          return n != null && i in De(n);
        }
        function Aw(n, i, u) {
          return n >= bt(i, u) && n < ot(i, u);
        }
        function hu(n, i, u) {
          for (var m = u ? Ys : Bo, E = n[0].length, T = n.length, P = T, $ = U(T), z = 1 / 0, K = []; P--; ) {
            var Y = n[P];
            P && i && (Y = He(Y, zt(i))), z = bt(Y.length, z), $[P] = !u && (i || E >= 120 && Y.length >= 120) ? new En(P && Y) : r;
          }
          Y = n[0];
          var Q = -1, ie = $[0];
          e:
            for (; ++Q < E && K.length < z; ) {
              var ue = Y[Q], pe = i ? i(ue) : ue;
              if (ue = u || ue !== 0 ? ue : 0, !(ie ? Oi(ie, pe) : m(K, pe, u))) {
                for (P = T; --P; ) {
                  var Se = $[P];
                  if (!(Se ? Oi(Se, pe) : m(n[P], pe, u)))
                    continue e;
                }
                ie && ie.push(pe), K.push(ue);
              }
            }
          return K;
        }
        function Tw(n, i, u, m) {
          return br(n, function(E, T, P) {
            i(m, u(E), T, P);
          }), m;
        }
        function Ii(n, i, u) {
          i = sn(i, n), n = $d(n, i);
          var m = n == null ? n : n[xr(Qt(i))];
          return m == null ? r : Dt(m, n, u);
        }
        function Zf(n) {
          return Ye(n) && At(n) == le;
        }
        function Rw(n) {
          return Ye(n) && At(n) == Qr;
        }
        function Pw(n) {
          return Ye(n) && At(n) == xe;
        }
        function Li(n, i, u, m, E) {
          return n === i ? true : n == null || i == null || !Ye(n) && !Ye(i) ? n !== n && i !== i : kw(n, i, u, m, Li, E);
        }
        function kw(n, i, u, m, E, T) {
          var P = we(n), $ = we(i), z = P ? ce : St(n), K = $ ? ce : St(i);
          z = z == le ? Zt : z, K = K == le ? Zt : K;
          var Y = z == Zt, Q = K == Zt, ie = z == K;
          if (ie && ln(n)) {
            if (!ln(i))
              return false;
            P = true, Y = false;
          }
          if (ie && !Y)
            return T || (T = new lr()), P || si(n) ? Od(n, i, u, m, E, T) : n1(n, i, z, u, m, E, T);
          if (!(u & S)) {
            var ue = Y && Me.call(n, "__wrapped__"), pe = Q && Me.call(i, "__wrapped__");
            if (ue || pe) {
              var Se = ue ? n.value() : n, he = pe ? i.value() : i;
              return T || (T = new lr()), E(Se, he, u, m, T);
            }
          }
          return ie ? (T || (T = new lr()), i1(n, i, u, m, E, T)) : false;
        }
        function Cw(n) {
          return Ye(n) && St(n) == ct;
        }
        function gu(n, i, u, m) {
          var E = u.length, T = E, P = !m;
          if (n == null)
            return !T;
          for (n = De(n); E--; ) {
            var $ = u[E];
            if (P && $[2] ? $[1] !== n[$[0]] : !($[0] in n))
              return false;
          }
          for (; ++E < T; ) {
            $ = u[E];
            var z = $[0], K = n[z], Y = $[1];
            if (P && $[2]) {
              if (K === r && !(z in n))
                return false;
            } else {
              var Q = new lr();
              if (m)
                var ie = m(K, Y, z, n, i, Q);
              if (!(ie === r ? Li(Y, K, S | f, m, Q) : ie))
                return false;
            }
          }
          return true;
        }
        function Gf(n) {
          if (!Ke(n) || p1(n))
            return false;
          var i = Wr(n) ? Cy : S0;
          return i.test(Rn(n));
        }
        function $w(n) {
          return Ye(n) && At(n) == Nt;
        }
        function Iw(n) {
          return Ye(n) && St(n) == wt;
        }
        function Lw(n) {
          return Ye(n) && _a(n.length) && !!Ue[At(n)];
        }
        function Kf(n) {
          return typeof n == "function" ? n : n == null ? Lt : typeof n == "object" ? we(n) ? Xf(n[0], n[1]) : Yf(n) : vp(n);
        }
        function vu(n) {
          if (!Ni(n))
            return Ny(n);
          var i = [];
          for (var u in De(n))
            Me.call(n, u) && u != "constructor" && i.push(u);
          return i;
        }
        function Mw(n) {
          if (!Ke(n))
            return m1(n);
          var i = Ni(n), u = [];
          for (var m in n)
            m == "constructor" && (i || !Me.call(n, m)) || u.push(m);
          return u;
        }
        function mu(n, i) {
          return n < i;
        }
        function Vf(n, i) {
          var u = -1, m = $t(n) ? U(n.length) : [];
          return on(n, function(E, T, P) {
            m[++u] = i(E, T, P);
          }), m;
        }
        function Yf(n) {
          var i = $u(n);
          return i.length == 1 && i[0][2] ? kd(i[0][0], i[0][1]) : function(u) {
            return u === n || gu(u, n, i);
          };
        }
        function Xf(n, i) {
          return Lu(n) && Pd(i) ? kd(xr(n), i) : function(u) {
            var m = qu(u, n);
            return m === r && m === i ? ju(u, n) : Li(i, m, S | f);
          };
        }
        function sa(n, i, u, m, E) {
          n !== i && fu(i, function(T, P) {
            if (E || (E = new lr()), Ke(T))
              Fw(n, i, P, u, sa, m, E);
            else {
              var $ = m ? m(Fu(n, P), T, P + "", n, i, E) : r;
              $ === r && ($ = T), lu(n, P, $);
            }
          }, It);
        }
        function Fw(n, i, u, m, E, T, P) {
          var $ = Fu(n, u), z = Fu(i, u), K = P.get(z);
          if (K) {
            lu(n, u, K);
            return;
          }
          var Y = T ? T($, z, u + "", n, i, P) : r, Q = Y === r;
          if (Q) {
            var ie = we(z), ue = !ie && ln(z), pe = !ie && !ue && si(z);
            Y = z, ie || ue || pe ? we($) ? Y = $ : Je($) ? Y = Ct($) : ue ? (Q = false, Y = ld(z, true)) : pe ? (Q = false, Y = cd(z, true)) : Y = [] : zi(z) || Pn(z) ? (Y = $, Pn($) ? Y = ap($) : (!Ke($) || Wr($)) && (Y = Rd(z))) : Q = false;
          }
          Q && (P.set(z, Y), E(Y, z, m, T, P), P.delete(z)), lu(n, u, Y);
        }
        function Jf(n, i) {
          var u = n.length;
          if (u)
            return i += i < 0 ? u : 0, zr(i, u) ? n[i] : r;
        }
        function Qf(n, i, u) {
          i.length ? i = He(i, function(T) {
            return we(T) ? function(P) {
              return An(P, T.length === 1 ? T[0] : T);
            } : T;
          }) : i = [Lt];
          var m = -1;
          i = He(i, zt(de()));
          var E = Vf(n, function(T, P, $) {
            var z = He(i, function(K) {
              return K(T);
            });
            return { criteria: z, index: ++m, value: T };
          });
          return ly(E, function(T, P) {
            return Vw(T, P, u);
          });
        }
        function Nw(n, i) {
          return ed(n, i, function(u, m) {
            return ju(n, m);
          });
        }
        function ed(n, i, u) {
          for (var m = -1, E = i.length, T = {}; ++m < E; ) {
            var P = i[m], $ = An(n, P);
            u($, P) && Mi(T, sn(P, n), $);
          }
          return T;
        }
        function Dw(n) {
          return function(i) {
            return An(i, n);
          };
        }
        function yu(n, i, u, m) {
          var E = m ? uy : Yn, T = -1, P = i.length, $ = n;
          for (n === i && (i = Ct(i)), u && ($ = He(n, zt(u))); ++T < P; )
            for (var z = 0, K = i[T], Y = u ? u(K) : K; (z = E($, Y, z, m)) > -1; )
              $ !== n && Xo.call($, z, 1), Xo.call(n, z, 1);
          return n;
        }
        function td(n, i) {
          for (var u = n ? i.length : 0, m = u - 1; u--; ) {
            var E = i[u];
            if (u == m || E !== T) {
              var T = E;
              zr(E) ? Xo.call(n, E, 1) : xu(n, E);
            }
          }
          return n;
        }
        function wu(n, i) {
          return n + ea(Mf() * (i - n + 1));
        }
        function zw(n, i, u, m) {
          for (var E = -1, T = ot(Qo((i - n) / (u || 1)), 0), P = U(T); T--; )
            P[m ? T : ++E] = n, n += u;
          return P;
        }
        function bu(n, i) {
          var u = "";
          if (!n || i < 1 || i > ee)
            return u;
          do
            i % 2 && (u += n), i = ea(i / 2), i && (n += n);
          while (i);
          return u;
        }
        function _e(n, i) {
          return Nu(Cd(n, i, Lt), n + "");
        }
        function Ww(n) {
          return Df(ui(n));
        }
        function Bw(n, i) {
          var u = ui(n);
          return ma(u, On(i, 0, u.length));
        }
        function Mi(n, i, u, m) {
          if (!Ke(n))
            return n;
          i = sn(i, n);
          for (var E = -1, T = i.length, P = T - 1, $ = n; $ != null && ++E < T; ) {
            var z = xr(i[E]), K = u;
            if (z === "__proto__" || z === "constructor" || z === "prototype")
              return n;
            if (E != P) {
              var Y = $[z];
              K = m ? m(Y, z, $) : r, K === r && (K = Ke(Y) ? Y : zr(i[E + 1]) ? [] : {});
            }
            Ci($, z, K), $ = $[z];
          }
          return n;
        }
        var rd = ta ? function(n, i) {
          return ta.set(n, i), n;
        } : Lt, Uw = Jo ? function(n, i) {
          return Jo(n, "toString", {
            configurable: true,
            enumerable: false,
            value: Gu(i),
            writable: true
          });
        } : Lt;
        function Hw(n) {
          return ma(ui(n));
        }
        function Jt(n, i, u) {
          var m = -1, E = n.length;
          i < 0 && (i = -i > E ? 0 : E + i), u = u > E ? E : u, u < 0 && (u += E), E = i > u ? 0 : u - i >>> 0, i >>>= 0;
          for (var T = U(E); ++m < E; )
            T[m] = n[m + i];
          return T;
        }
        function qw(n, i) {
          var u;
          return on(n, function(m, E, T) {
            return u = i(m, E, T), !u;
          }), !!u;
        }
        function ua(n, i, u) {
          var m = 0, E = n == null ? m : n.length;
          if (typeof i == "number" && i === i && E <= se) {
            for (; m < E; ) {
              var T = m + E >>> 1, P = n[T];
              P !== null && !Bt(P) && (u ? P <= i : P < i) ? m = T + 1 : E = T;
            }
            return E;
          }
          return Su(n, i, Lt, u);
        }
        function Su(n, i, u, m) {
          var E = 0, T = n == null ? 0 : n.length;
          if (T === 0)
            return 0;
          i = u(i);
          for (var P = i !== i, $ = i === null, z = Bt(i), K = i === r; E < T; ) {
            var Y = ea((E + T) / 2), Q = u(n[Y]), ie = Q !== r, ue = Q === null, pe = Q === Q, Se = Bt(Q);
            if (P)
              var he = m || pe;
            else K ? he = pe && (m || ie) : $ ? he = pe && ie && (m || !ue) : z ? he = pe && ie && !ue && (m || !Se) : ue || Se ? he = false : he = m ? Q <= i : Q < i;
            he ? E = Y + 1 : T = Y;
          }
          return bt(T, oe);
        }
        function nd(n, i) {
          for (var u = -1, m = n.length, E = 0, T = []; ++u < m; ) {
            var P = n[u], $ = i ? i(P) : P;
            if (!u || !cr($, z)) {
              var z = $;
              T[E++] = P === 0 ? 0 : P;
            }
          }
          return T;
        }
        function id(n) {
          return typeof n == "number" ? n : Bt(n) ? q : +n;
        }
        function Wt(n) {
          if (typeof n == "string")
            return n;
          if (we(n))
            return He(n, Wt) + "";
          if (Bt(n))
            return Ff ? Ff.call(n) : "";
          var i = n + "";
          return i == "0" && 1 / n == -V ? "-0" : i;
        }
        function an(n, i, u) {
          var m = -1, E = Bo, T = n.length, P = true, $ = [], z = $;
          if (u)
            P = false, E = Ys;
          else if (T >= a) {
            var K = i ? null : t1(n);
            if (K)
              return Ho(K);
            P = false, E = Oi, z = new En();
          } else
            z = i ? [] : $;
          e:
            for (; ++m < T; ) {
              var Y = n[m], Q = i ? i(Y) : Y;
              if (Y = u || Y !== 0 ? Y : 0, P && Q === Q) {
                for (var ie = z.length; ie--; )
                  if (z[ie] === Q)
                    continue e;
                i && z.push(Q), $.push(Y);
              } else E(z, Q, u) || (z !== $ && z.push(Q), $.push(Y));
            }
          return $;
        }
        function xu(n, i) {
          return i = sn(i, n), n = $d(n, i), n == null || delete n[xr(Qt(i))];
        }
        function od(n, i, u, m) {
          return Mi(n, i, u(An(n, i)), m);
        }
        function la(n, i, u, m) {
          for (var E = n.length, T = m ? E : -1; (m ? T-- : ++T < E) && i(n[T], T, n); )
            ;
          return u ? Jt(n, m ? 0 : T, m ? T + 1 : E) : Jt(n, m ? T + 1 : 0, m ? E : T);
        }
        function ad(n, i) {
          var u = n;
          return u instanceof Ae && (u = u.value()), Xs(i, function(m, E) {
            return E.func.apply(E.thisArg, tn([m], E.args));
          }, u);
        }
        function _u(n, i, u) {
          var m = n.length;
          if (m < 2)
            return m ? an(n[0]) : [];
          for (var E = -1, T = U(m); ++E < m; )
            for (var P = n[E], $ = -1; ++$ < m; )
              $ != E && (T[E] = $i(T[E] || P, n[$], i, u));
          return an(gt(T, 1), i, u);
        }
        function sd(n, i, u) {
          for (var m = -1, E = n.length, T = i.length, P = {}; ++m < E; ) {
            var $ = m < T ? i[m] : r;
            u(P, n[m], $);
          }
          return P;
        }
        function Eu(n) {
          return Je(n) ? n : [];
        }
        function Ou(n) {
          return typeof n == "function" ? n : Lt;
        }
        function sn(n, i) {
          return we(n) ? n : Lu(n, i) ? [n] : Fd(Ce(n));
        }
        var jw = _e;
        function un(n, i, u) {
          var m = n.length;
          return u = u === r ? m : u, !i && u >= m ? n : Jt(n, i, u);
        }
        var ud = $y || function(n) {
          return ht.clearTimeout(n);
        };
        function ld(n, i) {
          if (i)
            return n.slice();
          var u = n.length, m = kf ? kf(u) : new n.constructor(u);
          return n.copy(m), m;
        }
        function Au(n) {
          var i = new n.constructor(n.byteLength);
          return new Vo(i).set(new Vo(n)), i;
        }
        function Zw(n, i) {
          var u = i ? Au(n.buffer) : n.buffer;
          return new n.constructor(u, n.byteOffset, n.byteLength);
        }
        function Gw(n) {
          var i = new n.constructor(n.source, jc.exec(n));
          return i.lastIndex = n.lastIndex, i;
        }
        function Kw(n) {
          return ki ? De(ki.call(n)) : {};
        }
        function cd(n, i) {
          var u = i ? Au(n.buffer) : n.buffer;
          return new n.constructor(u, n.byteOffset, n.length);
        }
        function fd(n, i) {
          if (n !== i) {
            var u = n !== r, m = n === null, E = n === n, T = Bt(n), P = i !== r, $ = i === null, z = i === i, K = Bt(i);
            if (!$ && !K && !T && n > i || T && P && z && !$ && !K || m && P && z || !u && z || !E)
              return 1;
            if (!m && !T && !K && n < i || K && u && E && !m && !T || $ && u && E || !P && E || !z)
              return -1;
          }
          return 0;
        }
        function Vw(n, i, u) {
          for (var m = -1, E = n.criteria, T = i.criteria, P = E.length, $ = u.length; ++m < P; ) {
            var z = fd(E[m], T[m]);
            if (z) {
              if (m >= $)
                return z;
              var K = u[m];
              return z * (K == "desc" ? -1 : 1);
            }
          }
          return n.index - i.index;
        }
        function dd(n, i, u, m) {
          for (var E = -1, T = n.length, P = u.length, $ = -1, z = i.length, K = ot(T - P, 0), Y = U(z + K), Q = !m; ++$ < z; )
            Y[$] = i[$];
          for (; ++E < P; )
            (Q || E < T) && (Y[u[E]] = n[E]);
          for (; K--; )
            Y[$++] = n[E++];
          return Y;
        }
        function pd(n, i, u, m) {
          for (var E = -1, T = n.length, P = -1, $ = u.length, z = -1, K = i.length, Y = ot(T - $, 0), Q = U(Y + K), ie = !m; ++E < Y; )
            Q[E] = n[E];
          for (var ue = E; ++z < K; )
            Q[ue + z] = i[z];
          for (; ++P < $; )
            (ie || E < T) && (Q[ue + u[P]] = n[E++]);
          return Q;
        }
        function Ct(n, i) {
          var u = -1, m = n.length;
          for (i || (i = U(m)); ++u < m; )
            i[u] = n[u];
          return i;
        }
        function Sr(n, i, u, m) {
          var E = !u;
          u || (u = {});
          for (var T = -1, P = i.length; ++T < P; ) {
            var $ = i[T], z = m ? m(u[$], n[$], $, u, n) : r;
            z === r && (z = n[$]), E ? Fr(u, $, z) : Ci(u, $, z);
          }
          return u;
        }
        function Yw(n, i) {
          return Sr(n, Iu(n), i);
        }
        function Xw(n, i) {
          return Sr(n, Ad(n), i);
        }
        function ca(n, i) {
          return function(u, m) {
            var E = we(u) ? ry : ww, T = i ? i() : {};
            return E(u, n, de(m, 2), T);
          };
        }
        function ii(n) {
          return _e(function(i, u) {
            var m = -1, E = u.length, T = E > 1 ? u[E - 1] : r, P = E > 2 ? u[2] : r;
            for (T = n.length > 3 && typeof T == "function" ? (E--, T) : r, P && Tt(u[0], u[1], P) && (T = E < 3 ? r : T, E = 1), i = De(i); ++m < E; ) {
              var $ = u[m];
              $ && n(i, $, m, T);
            }
            return i;
          });
        }
        function hd(n, i) {
          return function(u, m) {
            if (u == null)
              return u;
            if (!$t(u))
              return n(u, m);
            for (var E = u.length, T = i ? E : -1, P = De(u); (i ? T-- : ++T < E) && m(P[T], T, P) !== false; )
              ;
            return u;
          };
        }
        function gd(n) {
          return function(i, u, m) {
            for (var E = -1, T = De(i), P = m(i), $ = P.length; $--; ) {
              var z = P[n ? $ : ++E];
              if (u(T[z], z, T) === false)
                break;
            }
            return i;
          };
        }
        function Jw(n, i, u) {
          var m = i & b, E = Fi(n);
          function T() {
            var P = this && this !== ht && this instanceof T ? E : n;
            return P.apply(m ? u : this, arguments);
          }
          return T;
        }
        function vd(n) {
          return function(i) {
            i = Ce(i);
            var u = Xn(i) ? ur(i) : r, m = u ? u[0] : i.charAt(0), E = u ? un(u, 1).join("") : i.slice(1);
            return m[n]() + E;
          };
        }
        function oi(n) {
          return function(i) {
            return Xs(hp(pp(i).replace(U0, "")), n, "");
          };
        }
        function Fi(n) {
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new n();
              case 1:
                return new n(i[0]);
              case 2:
                return new n(i[0], i[1]);
              case 3:
                return new n(i[0], i[1], i[2]);
              case 4:
                return new n(i[0], i[1], i[2], i[3]);
              case 5:
                return new n(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var u = ni(n.prototype), m = n.apply(u, i);
            return Ke(m) ? m : u;
          };
        }
        function Qw(n, i, u) {
          var m = Fi(n);
          function E() {
            for (var T = arguments.length, P = U(T), $ = T, z = ai(E); $--; )
              P[$] = arguments[$];
            var K = T < 3 && P[0] !== z && P[T - 1] !== z ? [] : rn(P, z);
            if (T -= K.length, T < u)
              return Sd(
                n,
                i,
                fa,
                E.placeholder,
                r,
                P,
                K,
                r,
                r,
                u - T
              );
            var Y = this && this !== ht && this instanceof E ? m : n;
            return Dt(Y, this, P);
          }
          return E;
        }
        function md(n) {
          return function(i, u, m) {
            var E = De(i);
            if (!$t(i)) {
              var T = de(u, 3);
              i = ft(i), u = function($) {
                return T(E[$], $, E);
              };
            }
            var P = n(i, u, m);
            return P > -1 ? E[T ? i[P] : P] : r;
          };
        }
        function yd(n) {
          return Dr(function(i) {
            var u = i.length, m = u, E = Yt.prototype.thru;
            for (n && i.reverse(); m--; ) {
              var T = i[m];
              if (typeof T != "function")
                throw new Vt(l);
              if (E && !P && ga(T) == "wrapper")
                var P = new Yt([], true);
            }
            for (m = P ? m : u; ++m < u; ) {
              T = i[m];
              var $ = ga(T), z = $ == "wrapper" ? Cu(T) : r;
              z && Mu(z[0]) && z[1] == (W | _ | A | L) && !z[4].length && z[9] == 1 ? P = P[ga(z[0])].apply(P, z[3]) : P = T.length == 1 && Mu(T) ? P[$]() : P.thru(T);
            }
            return function() {
              var K = arguments, Y = K[0];
              if (P && K.length == 1 && we(Y))
                return P.plant(Y).value();
              for (var Q = 0, ie = u ? i[Q].apply(this, K) : Y; ++Q < u; )
                ie = i[Q].call(this, ie);
              return ie;
            };
          });
        }
        function fa(n, i, u, m, E, T, P, $, z, K) {
          var Y = i & W, Q = i & b, ie = i & d, ue = i & (_ | R), pe = i & M, Se = ie ? r : Fi(n);
          function he() {
            for (var Ee = arguments.length, Te = U(Ee), Ut = Ee; Ut--; )
              Te[Ut] = arguments[Ut];
            if (ue)
              var Rt = ai(he), Ht = fy(Te, Rt);
            if (m && (Te = dd(Te, m, E, ue)), T && (Te = pd(Te, T, P, ue)), Ee -= Ht, ue && Ee < K) {
              var Qe = rn(Te, Rt);
              return Sd(
                n,
                i,
                fa,
                he.placeholder,
                u,
                Te,
                Qe,
                $,
                z,
                K - Ee
              );
            }
            var fr = Q ? u : this, Ur = ie ? fr[n] : n;
            return Ee = Te.length, $ ? Te = w1(Te, $) : pe && Ee > 1 && Te.reverse(), Y && z < Ee && (Te.length = z), this && this !== ht && this instanceof he && (Ur = Se || Fi(Ur)), Ur.apply(fr, Te);
          }
          return he;
        }
        function wd(n, i) {
          return function(u, m) {
            return Tw(u, n, i(m), {});
          };
        }
        function da(n, i) {
          return function(u, m) {
            var E;
            if (u === r && m === r)
              return i;
            if (u !== r && (E = u), m !== r) {
              if (E === r)
                return m;
              typeof u == "string" || typeof m == "string" ? (u = Wt(u), m = Wt(m)) : (u = id(u), m = id(m)), E = n(u, m);
            }
            return E;
          };
        }
        function Tu(n) {
          return Dr(function(i) {
            return i = He(i, zt(de())), _e(function(u) {
              var m = this;
              return n(i, function(E) {
                return Dt(E, m, u);
              });
            });
          });
        }
        function pa(n, i) {
          i = i === r ? " " : Wt(i);
          var u = i.length;
          if (u < 2)
            return u ? bu(i, n) : i;
          var m = bu(i, Qo(n / Jn(i)));
          return Xn(i) ? un(ur(m), 0, n).join("") : m.slice(0, n);
        }
        function e1(n, i, u, m) {
          var E = i & b, T = Fi(n);
          function P() {
            for (var $ = -1, z = arguments.length, K = -1, Y = m.length, Q = U(Y + z), ie = this && this !== ht && this instanceof P ? T : n; ++K < Y; )
              Q[K] = m[K];
            for (; z--; )
              Q[K++] = arguments[++$];
            return Dt(ie, E ? u : this, Q);
          }
          return P;
        }
        function bd(n) {
          return function(i, u, m) {
            return m && typeof m != "number" && Tt(i, u, m) && (u = m = r), i = Br(i), u === r ? (u = i, i = 0) : u = Br(u), m = m === r ? i < u ? 1 : -1 : Br(m), zw(i, u, m, n);
          };
        }
        function ha(n) {
          return function(i, u) {
            return typeof i == "string" && typeof u == "string" || (i = er(i), u = er(u)), n(i, u);
          };
        }
        function Sd(n, i, u, m, E, T, P, $, z, K) {
          var Y = i & _, Q = Y ? P : r, ie = Y ? r : P, ue = Y ? T : r, pe = Y ? r : T;
          i |= Y ? A : C, i &= ~(Y ? C : A), i & x || (i &= -4);
          var Se = [
            n,
            i,
            E,
            ue,
            Q,
            pe,
            ie,
            $,
            z,
            K
          ], he = u.apply(r, Se);
          return Mu(n) && Id(he, Se), he.placeholder = m, Ld(he, n, i);
        }
        function Ru(n) {
          var i = it[n];
          return function(u, m) {
            if (u = er(u), m = m == null ? 0 : bt(be(m), 292), m && Lf(u)) {
              var E = (Ce(u) + "e").split("e"), T = i(E[0] + "e" + (+E[1] + m));
              return E = (Ce(T) + "e").split("e"), +(E[0] + "e" + (+E[1] - m));
            }
            return i(u);
          };
        }
        var t1 = ti && 1 / Ho(new ti([, -0]))[1] == V ? function(n) {
          return new ti(n);
        } : Yu;
        function xd(n) {
          return function(i) {
            var u = St(i);
            return u == ct ? iu(i) : u == wt ? yy(i) : cy(i, n(i));
          };
        }
        function Nr(n, i, u, m, E, T, P, $) {
          var z = i & d;
          if (!z && typeof n != "function")
            throw new Vt(l);
          var K = m ? m.length : 0;
          if (K || (i &= -97, m = E = r), P = P === r ? P : ot(be(P), 0), $ = $ === r ? $ : be($), K -= E ? E.length : 0, i & C) {
            var Y = m, Q = E;
            m = E = r;
          }
          var ie = z ? r : Cu(n), ue = [
            n,
            i,
            u,
            m,
            E,
            Y,
            Q,
            T,
            P,
            $
          ];
          if (ie && v1(ue, ie), n = ue[0], i = ue[1], u = ue[2], m = ue[3], E = ue[4], $ = ue[9] = ue[9] === r ? z ? 0 : n.length : ot(ue[9] - K, 0), !$ && i & (_ | R) && (i &= -25), !i || i == b)
            var pe = Jw(n, i, u);
          else i == _ || i == R ? pe = Qw(n, i, $) : (i == A || i == (b | A)) && !E.length ? pe = e1(n, i, u, m) : pe = fa.apply(r, ue);
          var Se = ie ? rd : Id;
          return Ld(Se(pe, ue), n, i);
        }
        function _d(n, i, u, m) {
          return n === r || cr(n, ei[u]) && !Me.call(m, u) ? i : n;
        }
        function Ed(n, i, u, m, E, T) {
          return Ke(n) && Ke(i) && (T.set(i, n), sa(n, i, r, Ed, T), T.delete(i)), n;
        }
        function r1(n) {
          return zi(n) ? r : n;
        }
        function Od(n, i, u, m, E, T) {
          var P = u & S, $ = n.length, z = i.length;
          if ($ != z && !(P && z > $))
            return false;
          var K = T.get(n), Y = T.get(i);
          if (K && Y)
            return K == i && Y == n;
          var Q = -1, ie = true, ue = u & f ? new En() : r;
          for (T.set(n, i), T.set(i, n); ++Q < $; ) {
            var pe = n[Q], Se = i[Q];
            if (m)
              var he = P ? m(Se, pe, Q, i, n, T) : m(pe, Se, Q, n, i, T);
            if (he !== r) {
              if (he)
                continue;
              ie = false;
              break;
            }
            if (ue) {
              if (!Js(i, function(Ee, Te) {
                if (!Oi(ue, Te) && (pe === Ee || E(pe, Ee, u, m, T)))
                  return ue.push(Te);
              })) {
                ie = false;
                break;
              }
            } else if (!(pe === Se || E(pe, Se, u, m, T))) {
              ie = false;
              break;
            }
          }
          return T.delete(n), T.delete(i), ie;
        }
        function n1(n, i, u, m, E, T, P) {
          switch (u) {
            case Ir:
              if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
                return false;
              n = n.buffer, i = i.buffer;
            case Qr:
              return !(n.byteLength != i.byteLength || !T(new Vo(n), new Vo(i)));
            case ge:
            case xe:
            case wr:
              return cr(+n, +i);
            case Ge:
              return n.name == i.name && n.message == i.message;
            case Nt:
            case Xr:
              return n == i + "";
            case ct:
              var $ = iu;
            case wt:
              var z = m & S;
              if ($ || ($ = Ho), n.size != i.size && !z)
                return false;
              var K = P.get(n);
              if (K)
                return K == i;
              m |= f, P.set(n, i);
              var Y = Od($(n), $(i), m, E, T, P);
              return P.delete(n), Y;
            case bn:
              if (ki)
                return ki.call(n) == ki.call(i);
          }
          return false;
        }
        function i1(n, i, u, m, E, T) {
          var P = u & S, $ = Pu(n), z = $.length, K = Pu(i), Y = K.length;
          if (z != Y && !P)
            return false;
          for (var Q = z; Q--; ) {
            var ie = $[Q];
            if (!(P ? ie in i : Me.call(i, ie)))
              return false;
          }
          var ue = T.get(n), pe = T.get(i);
          if (ue && pe)
            return ue == i && pe == n;
          var Se = true;
          T.set(n, i), T.set(i, n);
          for (var he = P; ++Q < z; ) {
            ie = $[Q];
            var Ee = n[ie], Te = i[ie];
            if (m)
              var Ut = P ? m(Te, Ee, ie, i, n, T) : m(Ee, Te, ie, n, i, T);
            if (!(Ut === r ? Ee === Te || E(Ee, Te, u, m, T) : Ut)) {
              Se = false;
              break;
            }
            he || (he = ie == "constructor");
          }
          if (Se && !he) {
            var Rt = n.constructor, Ht = i.constructor;
            Rt != Ht && "constructor" in n && "constructor" in i && !(typeof Rt == "function" && Rt instanceof Rt && typeof Ht == "function" && Ht instanceof Ht) && (Se = false);
          }
          return T.delete(n), T.delete(i), Se;
        }
        function Dr(n) {
          return Nu(Cd(n, r, Wd), n + "");
        }
        function Pu(n) {
          return jf(n, ft, Iu);
        }
        function ku(n) {
          return jf(n, It, Ad);
        }
        var Cu = ta ? function(n) {
          return ta.get(n);
        } : Yu;
        function ga(n) {
          for (var i = n.name + "", u = ri[i], m = Me.call(ri, i) ? u.length : 0; m--; ) {
            var E = u[m], T = E.func;
            if (T == null || T == n)
              return E.name;
          }
          return i;
        }
        function ai(n) {
          var i = Me.call(O, "placeholder") ? O : n;
          return i.placeholder;
        }
        function de() {
          var n = O.iteratee || Ku;
          return n = n === Ku ? Kf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function va(n, i) {
          var u = n.__data__;
          return d1(i) ? u[typeof i == "string" ? "string" : "hash"] : u.map;
        }
        function $u(n) {
          for (var i = ft(n), u = i.length; u--; ) {
            var m = i[u], E = n[m];
            i[u] = [m, E, Pd(E)];
          }
          return i;
        }
        function Tn(n, i) {
          var u = gy(n, i);
          return Gf(u) ? u : r;
        }
        function o1(n) {
          var i = Me.call(n, xn), u = n[xn];
          try {
            n[xn] = r;
            var m = true;
          } catch {
          }
          var E = Go.call(n);
          return m && (i ? n[xn] = u : delete n[xn]), E;
        }
        var Iu = au ? function(n) {
          return n == null ? [] : (n = De(n), en(au(n), function(i) {
            return $f.call(n, i);
          }));
        } : Xu, Ad = au ? function(n) {
          for (var i = []; n; )
            tn(i, Iu(n)), n = Yo(n);
          return i;
        } : Xu, St = At;
        (su && St(new su(new ArrayBuffer(1))) != Ir || Ti && St(new Ti()) != ct || uu && St(uu.resolve()) != Fo || ti && St(new ti()) != wt || Ri && St(new Ri()) != Jr) && (St = function(n) {
          var i = At(n), u = i == Zt ? n.constructor : r, m = u ? Rn(u) : "";
          if (m)
            switch (m) {
              case By:
                return Ir;
              case Uy:
                return ct;
              case Hy:
                return Fo;
              case qy:
                return wt;
              case jy:
                return Jr;
            }
          return i;
        });
        function a1(n, i, u) {
          for (var m = -1, E = u.length; ++m < E; ) {
            var T = u[m], P = T.size;
            switch (T.type) {
              case "drop":
                n += P;
                break;
              case "dropRight":
                i -= P;
                break;
              case "take":
                i = bt(i, n + P);
                break;
              case "takeRight":
                n = ot(n, i - P);
                break;
            }
          }
          return { start: n, end: i };
        }
        function s1(n) {
          var i = n.match(p0);
          return i ? i[1].split(h0) : [];
        }
        function Td(n, i, u) {
          i = sn(i, n);
          for (var m = -1, E = i.length, T = false; ++m < E; ) {
            var P = xr(i[m]);
            if (!(T = n != null && u(n, P)))
              break;
            n = n[P];
          }
          return T || ++m != E ? T : (E = n == null ? 0 : n.length, !!E && _a(E) && zr(P, E) && (we(n) || Pn(n)));
        }
        function u1(n) {
          var i = n.length, u = new n.constructor(i);
          return i && typeof n[0] == "string" && Me.call(n, "index") && (u.index = n.index, u.input = n.input), u;
        }
        function Rd(n) {
          return typeof n.constructor == "function" && !Ni(n) ? ni(Yo(n)) : {};
        }
        function l1(n, i, u) {
          var m = n.constructor;
          switch (i) {
            case Qr:
              return Au(n);
            case ge:
            case xe:
              return new m(+n);
            case Ir:
              return Zw(n, u);
            case $s:
            case Is:
            case Ls:
            case Ms:
            case Fs:
            case Ns:
            case Ds:
            case zs:
            case Ws:
              return cd(n, u);
            case ct:
              return new m();
            case wr:
            case Xr:
              return new m(n);
            case Nt:
              return Gw(n);
            case wt:
              return new m();
            case bn:
              return Kw(n);
          }
        }
        function c1(n, i) {
          var u = i.length;
          if (!u)
            return n;
          var m = u - 1;
          return i[m] = (u > 1 ? "& " : "") + i[m], i = i.join(u > 2 ? ", " : " "), n.replace(d0, `{
/* [wrapped with ` + i + `] */
`);
        }
        function f1(n) {
          return we(n) || Pn(n) || !!(If && n && n[If]);
        }
        function zr(n, i) {
          var u = typeof n;
          return i = i ?? ee, !!i && (u == "number" || u != "symbol" && _0.test(n)) && n > -1 && n % 1 == 0 && n < i;
        }
        function Tt(n, i, u) {
          if (!Ke(u))
            return false;
          var m = typeof i;
          return (m == "number" ? $t(u) && zr(i, u.length) : m == "string" && i in u) ? cr(u[i], n) : false;
        }
        function Lu(n, i) {
          if (we(n))
            return false;
          var u = typeof n;
          return u == "number" || u == "symbol" || u == "boolean" || n == null || Bt(n) ? true : u0.test(n) || !s0.test(n) || i != null && n in De(i);
        }
        function d1(n) {
          var i = typeof n;
          return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
        }
        function Mu(n) {
          var i = ga(n), u = O[i];
          if (typeof u != "function" || !(i in Ae.prototype))
            return false;
          if (n === u)
            return true;
          var m = Cu(u);
          return !!m && n === m[0];
        }
        function p1(n) {
          return !!Pf && Pf in n;
        }
        var h1 = jo ? Wr : Ju;
        function Ni(n) {
          var i = n && n.constructor, u = typeof i == "function" && i.prototype || ei;
          return n === u;
        }
        function Pd(n) {
          return n === n && !Ke(n);
        }
        function kd(n, i) {
          return function(u) {
            return u == null ? false : u[n] === i && (i !== r || n in De(u));
          };
        }
        function g1(n) {
          var i = Sa(n, function(m) {
            return u.size === y && u.clear(), m;
          }), u = i.cache;
          return i;
        }
        function v1(n, i) {
          var u = n[1], m = i[1], E = u | m, T = E < (b | d | W), P = m == W && u == _ || m == W && u == L && n[7].length <= i[8] || m == (W | L) && i[7].length <= i[8] && u == _;
          if (!(T || P))
            return n;
          m & b && (n[2] = i[2], E |= u & b ? 0 : x);
          var $ = i[3];
          if ($) {
            var z = n[3];
            n[3] = z ? dd(z, $, i[4]) : $, n[4] = z ? rn(n[3], v) : i[4];
          }
          return $ = i[5], $ && (z = n[5], n[5] = z ? pd(z, $, i[6]) : $, n[6] = z ? rn(n[5], v) : i[6]), $ = i[7], $ && (n[7] = $), m & W && (n[8] = n[8] == null ? i[8] : bt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = E, n;
        }
        function m1(n) {
          var i = [];
          if (n != null)
            for (var u in De(n))
              i.push(u);
          return i;
        }
        function y1(n) {
          return Go.call(n);
        }
        function Cd(n, i, u) {
          return i = ot(i === r ? n.length - 1 : i, 0), function() {
            for (var m = arguments, E = -1, T = ot(m.length - i, 0), P = U(T); ++E < T; )
              P[E] = m[i + E];
            E = -1;
            for (var $ = U(i + 1); ++E < i; )
              $[E] = m[E];
            return $[i] = u(P), Dt(n, this, $);
          };
        }
        function $d(n, i) {
          return i.length < 2 ? n : An(n, Jt(i, 0, -1));
        }
        function w1(n, i) {
          for (var u = n.length, m = bt(i.length, u), E = Ct(n); m--; ) {
            var T = i[m];
            n[m] = zr(T, u) ? E[T] : r;
          }
          return n;
        }
        function Fu(n, i) {
          if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
            return n[i];
        }
        var Id = Md(rd), Di = Ly || function(n, i) {
          return ht.setTimeout(n, i);
        }, Nu = Md(Uw);
        function Ld(n, i, u) {
          var m = i + "";
          return Nu(n, c1(m, b1(s1(m), u)));
        }
        function Md(n) {
          var i = 0, u = 0;
          return function() {
            var m = Dy(), E = B - (m - u);
            if (u = m, E > 0) {
              if (++i >= I)
                return arguments[0];
            } else
              i = 0;
            return n.apply(r, arguments);
          };
        }
        function ma(n, i) {
          var u = -1, m = n.length, E = m - 1;
          for (i = i === r ? m : i; ++u < i; ) {
            var T = wu(u, E), P = n[T];
            n[T] = n[u], n[u] = P;
          }
          return n.length = i, n;
        }
        var Fd = g1(function(n) {
          var i = [];
          return n.charCodeAt(0) === 46 && i.push(""), n.replace(l0, function(u, m, E, T) {
            i.push(E ? T.replace(m0, "$1") : m || u);
          }), i;
        });
        function xr(n) {
          if (typeof n == "string" || Bt(n))
            return n;
          var i = n + "";
          return i == "0" && 1 / n == -V ? "-0" : i;
        }
        function Rn(n) {
          if (n != null) {
            try {
              return Zo.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function b1(n, i) {
          return Kt(re, function(u) {
            var m = "_." + u[0];
            i & u[1] && !Bo(n, m) && n.push(m);
          }), n.sort();
        }
        function Nd(n) {
          if (n instanceof Ae)
            return n.clone();
          var i = new Yt(n.__wrapped__, n.__chain__);
          return i.__actions__ = Ct(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
        }
        function S1(n, i, u) {
          (u ? Tt(n, i, u) : i === r) ? i = 1 : i = ot(be(i), 0);
          var m = n == null ? 0 : n.length;
          if (!m || i < 1)
            return [];
          for (var E = 0, T = 0, P = U(Qo(m / i)); E < m; )
            P[T++] = Jt(n, E, E += i);
          return P;
        }
        function x1(n) {
          for (var i = -1, u = n == null ? 0 : n.length, m = 0, E = []; ++i < u; ) {
            var T = n[i];
            T && (E[m++] = T);
          }
          return E;
        }
        function _1() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var i = U(n - 1), u = arguments[0], m = n; m--; )
            i[m - 1] = arguments[m];
          return tn(we(u) ? Ct(u) : [u], gt(i, 1));
        }
        var E1 = _e(function(n, i) {
          return Je(n) ? $i(n, gt(i, 1, Je, true)) : [];
        }), O1 = _e(function(n, i) {
          var u = Qt(i);
          return Je(u) && (u = r), Je(n) ? $i(n, gt(i, 1, Je, true), de(u, 2)) : [];
        }), A1 = _e(function(n, i) {
          var u = Qt(i);
          return Je(u) && (u = r), Je(n) ? $i(n, gt(i, 1, Je, true), r, u) : [];
        });
        function T1(n, i, u) {
          var m = n == null ? 0 : n.length;
          return m ? (i = u || i === r ? 1 : be(i), Jt(n, i < 0 ? 0 : i, m)) : [];
        }
        function R1(n, i, u) {
          var m = n == null ? 0 : n.length;
          return m ? (i = u || i === r ? 1 : be(i), i = m - i, Jt(n, 0, i < 0 ? 0 : i)) : [];
        }
        function P1(n, i) {
          return n && n.length ? la(n, de(i, 3), true, true) : [];
        }
        function k1(n, i) {
          return n && n.length ? la(n, de(i, 3), true) : [];
        }
        function C1(n, i, u, m) {
          var E = n == null ? 0 : n.length;
          return E ? (u && typeof u != "number" && Tt(n, i, u) && (u = 0, m = E), _w(n, i, u, m)) : [];
        }
        function Dd(n, i, u) {
          var m = n == null ? 0 : n.length;
          if (!m)
            return -1;
          var E = u == null ? 0 : be(u);
          return E < 0 && (E = ot(m + E, 0)), Uo(n, de(i, 3), E);
        }
        function zd(n, i, u) {
          var m = n == null ? 0 : n.length;
          if (!m)
            return -1;
          var E = m - 1;
          return u !== r && (E = be(u), E = u < 0 ? ot(m + E, 0) : bt(E, m - 1)), Uo(n, de(i, 3), E, true);
        }
        function Wd(n) {
          var i = n == null ? 0 : n.length;
          return i ? gt(n, 1) : [];
        }
        function $1(n) {
          var i = n == null ? 0 : n.length;
          return i ? gt(n, V) : [];
        }
        function I1(n, i) {
          var u = n == null ? 0 : n.length;
          return u ? (i = i === r ? 1 : be(i), gt(n, i)) : [];
        }
        function L1(n) {
          for (var i = -1, u = n == null ? 0 : n.length, m = {}; ++i < u; ) {
            var E = n[i];
            m[E[0]] = E[1];
          }
          return m;
        }
        function Bd(n) {
          return n && n.length ? n[0] : r;
        }
        function M1(n, i, u) {
          var m = n == null ? 0 : n.length;
          if (!m)
            return -1;
          var E = u == null ? 0 : be(u);
          return E < 0 && (E = ot(m + E, 0)), Yn(n, i, E);
        }
        function F1(n) {
          var i = n == null ? 0 : n.length;
          return i ? Jt(n, 0, -1) : [];
        }
        var N1 = _e(function(n) {
          var i = He(n, Eu);
          return i.length && i[0] === n[0] ? hu(i) : [];
        }), D1 = _e(function(n) {
          var i = Qt(n), u = He(n, Eu);
          return i === Qt(u) ? i = r : u.pop(), u.length && u[0] === n[0] ? hu(u, de(i, 2)) : [];
        }), z1 = _e(function(n) {
          var i = Qt(n), u = He(n, Eu);
          return i = typeof i == "function" ? i : r, i && u.pop(), u.length && u[0] === n[0] ? hu(u, r, i) : [];
        });
        function W1(n, i) {
          return n == null ? "" : Fy.call(n, i);
        }
        function Qt(n) {
          var i = n == null ? 0 : n.length;
          return i ? n[i - 1] : r;
        }
        function B1(n, i, u) {
          var m = n == null ? 0 : n.length;
          if (!m)
            return -1;
          var E = m;
          return u !== r && (E = be(u), E = E < 0 ? ot(m + E, 0) : bt(E, m - 1)), i === i ? by(n, i, E) : Uo(n, Sf, E, true);
        }
        function U1(n, i) {
          return n && n.length ? Jf(n, be(i)) : r;
        }
        var H1 = _e(Ud);
        function Ud(n, i) {
          return n && n.length && i && i.length ? yu(n, i) : n;
        }
        function q1(n, i, u) {
          return n && n.length && i && i.length ? yu(n, i, de(u, 2)) : n;
        }
        function j1(n, i, u) {
          return n && n.length && i && i.length ? yu(n, i, r, u) : n;
        }
        var Z1 = Dr(function(n, i) {
          var u = n == null ? 0 : n.length, m = cu(n, i);
          return td(n, He(i, function(E) {
            return zr(E, u) ? +E : E;
          }).sort(fd)), m;
        });
        function G1(n, i) {
          var u = [];
          if (!(n && n.length))
            return u;
          var m = -1, E = [], T = n.length;
          for (i = de(i, 3); ++m < T; ) {
            var P = n[m];
            i(P, m, n) && (u.push(P), E.push(m));
          }
          return td(n, E), u;
        }
        function Du(n) {
          return n == null ? n : Wy.call(n);
        }
        function K1(n, i, u) {
          var m = n == null ? 0 : n.length;
          return m ? (u && typeof u != "number" && Tt(n, i, u) ? (i = 0, u = m) : (i = i == null ? 0 : be(i), u = u === r ? m : be(u)), Jt(n, i, u)) : [];
        }
        function V1(n, i) {
          return ua(n, i);
        }
        function Y1(n, i, u) {
          return Su(n, i, de(u, 2));
        }
        function X1(n, i) {
          var u = n == null ? 0 : n.length;
          if (u) {
            var m = ua(n, i);
            if (m < u && cr(n[m], i))
              return m;
          }
          return -1;
        }
        function J1(n, i) {
          return ua(n, i, true);
        }
        function Q1(n, i, u) {
          return Su(n, i, de(u, 2), true);
        }
        function eb(n, i) {
          var u = n == null ? 0 : n.length;
          if (u) {
            var m = ua(n, i, true) - 1;
            if (cr(n[m], i))
              return m;
          }
          return -1;
        }
        function tb(n) {
          return n && n.length ? nd(n) : [];
        }
        function rb(n, i) {
          return n && n.length ? nd(n, de(i, 2)) : [];
        }
        function nb(n) {
          var i = n == null ? 0 : n.length;
          return i ? Jt(n, 1, i) : [];
        }
        function ib(n, i, u) {
          return n && n.length ? (i = u || i === r ? 1 : be(i), Jt(n, 0, i < 0 ? 0 : i)) : [];
        }
        function ob(n, i, u) {
          var m = n == null ? 0 : n.length;
          return m ? (i = u || i === r ? 1 : be(i), i = m - i, Jt(n, i < 0 ? 0 : i, m)) : [];
        }
        function ab(n, i) {
          return n && n.length ? la(n, de(i, 3), false, true) : [];
        }
        function sb(n, i) {
          return n && n.length ? la(n, de(i, 3)) : [];
        }
        var ub = _e(function(n) {
          return an(gt(n, 1, Je, true));
        }), lb = _e(function(n) {
          var i = Qt(n);
          return Je(i) && (i = r), an(gt(n, 1, Je, true), de(i, 2));
        }), cb = _e(function(n) {
          var i = Qt(n);
          return i = typeof i == "function" ? i : r, an(gt(n, 1, Je, true), r, i);
        });
        function fb(n) {
          return n && n.length ? an(n) : [];
        }
        function db(n, i) {
          return n && n.length ? an(n, de(i, 2)) : [];
        }
        function pb(n, i) {
          return i = typeof i == "function" ? i : r, n && n.length ? an(n, r, i) : [];
        }
        function zu(n) {
          if (!(n && n.length))
            return [];
          var i = 0;
          return n = en(n, function(u) {
            if (Je(u))
              return i = ot(u.length, i), true;
          }), ru(i, function(u) {
            return He(n, Qs(u));
          });
        }
        function Hd(n, i) {
          if (!(n && n.length))
            return [];
          var u = zu(n);
          return i == null ? u : He(u, function(m) {
            return Dt(i, r, m);
          });
        }
        var hb = _e(function(n, i) {
          return Je(n) ? $i(n, i) : [];
        }), gb = _e(function(n) {
          return _u(en(n, Je));
        }), vb = _e(function(n) {
          var i = Qt(n);
          return Je(i) && (i = r), _u(en(n, Je), de(i, 2));
        }), mb = _e(function(n) {
          var i = Qt(n);
          return i = typeof i == "function" ? i : r, _u(en(n, Je), r, i);
        }), yb = _e(zu);
        function wb(n, i) {
          return sd(n || [], i || [], Ci);
        }
        function bb(n, i) {
          return sd(n || [], i || [], Mi);
        }
        var Sb = _e(function(n) {
          var i = n.length, u = i > 1 ? n[i - 1] : r;
          return u = typeof u == "function" ? (n.pop(), u) : r, Hd(n, u);
        });
        function qd(n) {
          var i = O(n);
          return i.__chain__ = true, i;
        }
        function xb(n, i) {
          return i(n), n;
        }
        function ya(n, i) {
          return i(n);
        }
        var _b = Dr(function(n) {
          var i = n.length, u = i ? n[0] : 0, m = this.__wrapped__, E = function(T) {
            return cu(T, n);
          };
          return i > 1 || this.__actions__.length || !(m instanceof Ae) || !zr(u) ? this.thru(E) : (m = m.slice(u, +u + (i ? 1 : 0)), m.__actions__.push({
            func: ya,
            args: [E],
            thisArg: r
          }), new Yt(m, this.__chain__).thru(function(T) {
            return i && !T.length && T.push(r), T;
          }));
        });
        function Eb() {
          return qd(this);
        }
        function Ob() {
          return new Yt(this.value(), this.__chain__);
        }
        function Ab() {
          this.__values__ === r && (this.__values__ = ip(this.value()));
          var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
          return { done: n, value: i };
        }
        function Tb() {
          return this;
        }
        function Rb(n) {
          for (var i, u = this; u instanceof na; ) {
            var m = Nd(u);
            m.__index__ = 0, m.__values__ = r, i ? E.__wrapped__ = m : i = m;
            var E = m;
            u = u.__wrapped__;
          }
          return E.__wrapped__ = n, i;
        }
        function Pb() {
          var n = this.__wrapped__;
          if (n instanceof Ae) {
            var i = n;
            return this.__actions__.length && (i = new Ae(this)), i = i.reverse(), i.__actions__.push({
              func: ya,
              args: [Du],
              thisArg: r
            }), new Yt(i, this.__chain__);
          }
          return this.thru(Du);
        }
        function kb() {
          return ad(this.__wrapped__, this.__actions__);
        }
        var Cb = ca(function(n, i, u) {
          Me.call(n, u) ? ++n[u] : Fr(n, u, 1);
        });
        function $b(n, i, u) {
          var m = we(n) ? wf : xw;
          return u && Tt(n, i, u) && (i = r), m(n, de(i, 3));
        }
        function Ib(n, i) {
          var u = we(n) ? en : Hf;
          return u(n, de(i, 3));
        }
        var Lb = md(Dd), Mb = md(zd);
        function Fb(n, i) {
          return gt(wa(n, i), 1);
        }
        function Nb(n, i) {
          return gt(wa(n, i), V);
        }
        function Db(n, i, u) {
          return u = u === r ? 1 : be(u), gt(wa(n, i), u);
        }
        function jd(n, i) {
          var u = we(n) ? Kt : on;
          return u(n, de(i, 3));
        }
        function Zd(n, i) {
          var u = we(n) ? ny : Uf;
          return u(n, de(i, 3));
        }
        var zb = ca(function(n, i, u) {
          Me.call(n, u) ? n[u].push(i) : Fr(n, u, [i]);
        });
        function Wb(n, i, u, m) {
          n = $t(n) ? n : ui(n), u = u && !m ? be(u) : 0;
          var E = n.length;
          return u < 0 && (u = ot(E + u, 0)), Ea(n) ? u <= E && n.indexOf(i, u) > -1 : !!E && Yn(n, i, u) > -1;
        }
        var Bb = _e(function(n, i, u) {
          var m = -1, E = typeof i == "function", T = $t(n) ? U(n.length) : [];
          return on(n, function(P) {
            T[++m] = E ? Dt(i, P, u) : Ii(P, i, u);
          }), T;
        }), Ub = ca(function(n, i, u) {
          Fr(n, u, i);
        });
        function wa(n, i) {
          var u = we(n) ? He : Vf;
          return u(n, de(i, 3));
        }
        function Hb(n, i, u, m) {
          return n == null ? [] : (we(i) || (i = i == null ? [] : [i]), u = m ? r : u, we(u) || (u = u == null ? [] : [u]), Qf(n, i, u));
        }
        var qb = ca(function(n, i, u) {
          n[u ? 0 : 1].push(i);
        }, function() {
          return [[], []];
        });
        function jb(n, i, u) {
          var m = we(n) ? Xs : _f, E = arguments.length < 3;
          return m(n, de(i, 4), u, E, on);
        }
        function Zb(n, i, u) {
          var m = we(n) ? iy : _f, E = arguments.length < 3;
          return m(n, de(i, 4), u, E, Uf);
        }
        function Gb(n, i) {
          var u = we(n) ? en : Hf;
          return u(n, xa(de(i, 3)));
        }
        function Kb(n) {
          var i = we(n) ? Df : Ww;
          return i(n);
        }
        function Vb(n, i, u) {
          (u ? Tt(n, i, u) : i === r) ? i = 1 : i = be(i);
          var m = we(n) ? mw : Bw;
          return m(n, i);
        }
        function Yb(n) {
          var i = we(n) ? yw : Hw;
          return i(n);
        }
        function Xb(n) {
          if (n == null)
            return 0;
          if ($t(n))
            return Ea(n) ? Jn(n) : n.length;
          var i = St(n);
          return i == ct || i == wt ? n.size : vu(n).length;
        }
        function Jb(n, i, u) {
          var m = we(n) ? Js : qw;
          return u && Tt(n, i, u) && (i = r), m(n, de(i, 3));
        }
        var Qb = _e(function(n, i) {
          if (n == null)
            return [];
          var u = i.length;
          return u > 1 && Tt(n, i[0], i[1]) ? i = [] : u > 2 && Tt(i[0], i[1], i[2]) && (i = [i[0]]), Qf(n, gt(i, 1), []);
        }), ba = Iy || function() {
          return ht.Date.now();
        };
        function eS(n, i) {
          if (typeof i != "function")
            throw new Vt(l);
          return n = be(n), function() {
            if (--n < 1)
              return i.apply(this, arguments);
          };
        }
        function Gd(n, i, u) {
          return i = u ? r : i, i = n && i == null ? n.length : i, Nr(n, W, r, r, r, r, i);
        }
        function Kd(n, i) {
          var u;
          if (typeof i != "function")
            throw new Vt(l);
          return n = be(n), function() {
            return --n > 0 && (u = i.apply(this, arguments)), n <= 1 && (i = r), u;
          };
        }
        var Wu = _e(function(n, i, u) {
          var m = b;
          if (u.length) {
            var E = rn(u, ai(Wu));
            m |= A;
          }
          return Nr(n, m, i, u, E);
        }), Vd = _e(function(n, i, u) {
          var m = b | d;
          if (u.length) {
            var E = rn(u, ai(Vd));
            m |= A;
          }
          return Nr(i, m, n, u, E);
        });
        function Yd(n, i, u) {
          i = u ? r : i;
          var m = Nr(n, _, r, r, r, r, r, i);
          return m.placeholder = Yd.placeholder, m;
        }
        function Xd(n, i, u) {
          i = u ? r : i;
          var m = Nr(n, R, r, r, r, r, r, i);
          return m.placeholder = Xd.placeholder, m;
        }
        function Jd(n, i, u) {
          var m, E, T, P, $, z, K = 0, Y = false, Q = false, ie = true;
          if (typeof n != "function")
            throw new Vt(l);
          i = er(i) || 0, Ke(u) && (Y = !!u.leading, Q = "maxWait" in u, T = Q ? ot(er(u.maxWait) || 0, i) : T, ie = "trailing" in u ? !!u.trailing : ie);
          function ue(Qe) {
            var fr = m, Ur = E;
            return m = E = r, K = Qe, P = n.apply(Ur, fr), P;
          }
          function pe(Qe) {
            return K = Qe, $ = Di(Ee, i), Y ? ue(Qe) : P;
          }
          function Se(Qe) {
            var fr = Qe - z, Ur = Qe - K, mp = i - fr;
            return Q ? bt(mp, T - Ur) : mp;
          }
          function he(Qe) {
            var fr = Qe - z, Ur = Qe - K;
            return z === r || fr >= i || fr < 0 || Q && Ur >= T;
          }
          function Ee() {
            var Qe = ba();
            if (he(Qe))
              return Te(Qe);
            $ = Di(Ee, Se(Qe));
          }
          function Te(Qe) {
            return $ = r, ie && m ? ue(Qe) : (m = E = r, P);
          }
          function Ut() {
            $ !== r && ud($), K = 0, m = z = E = $ = r;
          }
          function Rt() {
            return $ === r ? P : Te(ba());
          }
          function Ht() {
            var Qe = ba(), fr = he(Qe);
            if (m = arguments, E = this, z = Qe, fr) {
              if ($ === r)
                return pe(z);
              if (Q)
                return ud($), $ = Di(Ee, i), ue(z);
            }
            return $ === r && ($ = Di(Ee, i)), P;
          }
          return Ht.cancel = Ut, Ht.flush = Rt, Ht;
        }
        var tS = _e(function(n, i) {
          return Bf(n, 1, i);
        }), rS = _e(function(n, i, u) {
          return Bf(n, er(i) || 0, u);
        });
        function nS(n) {
          return Nr(n, M);
        }
        function Sa(n, i) {
          if (typeof n != "function" || i != null && typeof i != "function")
            throw new Vt(l);
          var u = function() {
            var m = arguments, E = i ? i.apply(this, m) : m[0], T = u.cache;
            if (T.has(E))
              return T.get(E);
            var P = n.apply(this, m);
            return u.cache = T.set(E, P) || T, P;
          };
          return u.cache = new (Sa.Cache || Mr)(), u;
        }
        Sa.Cache = Mr;
        function xa(n) {
          if (typeof n != "function")
            throw new Vt(l);
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, i[0]);
              case 2:
                return !n.call(this, i[0], i[1]);
              case 3:
                return !n.call(this, i[0], i[1], i[2]);
            }
            return !n.apply(this, i);
          };
        }
        function iS(n) {
          return Kd(2, n);
        }
        var oS = jw(function(n, i) {
          i = i.length == 1 && we(i[0]) ? He(i[0], zt(de())) : He(gt(i, 1), zt(de()));
          var u = i.length;
          return _e(function(m) {
            for (var E = -1, T = bt(m.length, u); ++E < T; )
              m[E] = i[E].call(this, m[E]);
            return Dt(n, this, m);
          });
        }), Bu = _e(function(n, i) {
          var u = rn(i, ai(Bu));
          return Nr(n, A, r, i, u);
        }), Qd = _e(function(n, i) {
          var u = rn(i, ai(Qd));
          return Nr(n, C, r, i, u);
        }), aS = Dr(function(n, i) {
          return Nr(n, L, r, r, r, i);
        });
        function sS(n, i) {
          if (typeof n != "function")
            throw new Vt(l);
          return i = i === r ? i : be(i), _e(n, i);
        }
        function uS(n, i) {
          if (typeof n != "function")
            throw new Vt(l);
          return i = i == null ? 0 : ot(be(i), 0), _e(function(u) {
            var m = u[i], E = un(u, 0, i);
            return m && tn(E, m), Dt(n, this, E);
          });
        }
        function lS(n, i, u) {
          var m = true, E = true;
          if (typeof n != "function")
            throw new Vt(l);
          return Ke(u) && (m = "leading" in u ? !!u.leading : m, E = "trailing" in u ? !!u.trailing : E), Jd(n, i, {
            leading: m,
            maxWait: i,
            trailing: E
          });
        }
        function cS(n) {
          return Gd(n, 1);
        }
        function fS(n, i) {
          return Bu(Ou(i), n);
        }
        function dS() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return we(n) ? n : [n];
        }
        function pS(n) {
          return Xt(n, w);
        }
        function hS(n, i) {
          return i = typeof i == "function" ? i : r, Xt(n, w, i);
        }
        function gS(n) {
          return Xt(n, g | w);
        }
        function vS(n, i) {
          return i = typeof i == "function" ? i : r, Xt(n, g | w, i);
        }
        function mS(n, i) {
          return i == null || Wf(n, i, ft(i));
        }
        function cr(n, i) {
          return n === i || n !== n && i !== i;
        }
        var yS = ha(pu), wS = ha(function(n, i) {
          return n >= i;
        }), Pn = Zf(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Zf : function(n) {
          return Ye(n) && Me.call(n, "callee") && !$f.call(n, "callee");
        }, we = U.isArray, bS = pf ? zt(pf) : Rw;
        function $t(n) {
          return n != null && _a(n.length) && !Wr(n);
        }
        function Je(n) {
          return Ye(n) && $t(n);
        }
        function SS(n) {
          return n === true || n === false || Ye(n) && At(n) == ge;
        }
        var ln = My || Ju, xS = hf ? zt(hf) : Pw;
        function _S(n) {
          return Ye(n) && n.nodeType === 1 && !zi(n);
        }
        function ES(n) {
          if (n == null)
            return true;
          if ($t(n) && (we(n) || typeof n == "string" || typeof n.splice == "function" || ln(n) || si(n) || Pn(n)))
            return !n.length;
          var i = St(n);
          if (i == ct || i == wt)
            return !n.size;
          if (Ni(n))
            return !vu(n).length;
          for (var u in n)
            if (Me.call(n, u))
              return false;
          return true;
        }
        function OS(n, i) {
          return Li(n, i);
        }
        function AS(n, i, u) {
          u = typeof u == "function" ? u : r;
          var m = u ? u(n, i) : r;
          return m === r ? Li(n, i, r, u) : !!m;
        }
        function Uu(n) {
          if (!Ye(n))
            return false;
          var i = At(n);
          return i == Ge || i == Oe || typeof n.message == "string" && typeof n.name == "string" && !zi(n);
        }
        function TS(n) {
          return typeof n == "number" && Lf(n);
        }
        function Wr(n) {
          if (!Ke(n))
            return false;
          var i = At(n);
          return i == ne || i == yt || i == me || i == Cs;
        }
        function ep(n) {
          return typeof n == "number" && n == be(n);
        }
        function _a(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ee;
        }
        function Ke(n) {
          var i = typeof n;
          return n != null && (i == "object" || i == "function");
        }
        function Ye(n) {
          return n != null && typeof n == "object";
        }
        var tp = gf ? zt(gf) : Cw;
        function RS(n, i) {
          return n === i || gu(n, i, $u(i));
        }
        function PS(n, i, u) {
          return u = typeof u == "function" ? u : r, gu(n, i, $u(i), u);
        }
        function kS(n) {
          return rp(n) && n != +n;
        }
        function CS(n) {
          if (h1(n))
            throw new ye(s);
          return Gf(n);
        }
        function $S(n) {
          return n === null;
        }
        function IS(n) {
          return n == null;
        }
        function rp(n) {
          return typeof n == "number" || Ye(n) && At(n) == wr;
        }
        function zi(n) {
          if (!Ye(n) || At(n) != Zt)
            return false;
          var i = Yo(n);
          if (i === null)
            return true;
          var u = Me.call(i, "constructor") && i.constructor;
          return typeof u == "function" && u instanceof u && Zo.call(u) == Py;
        }
        var Hu = vf ? zt(vf) : $w;
        function LS(n) {
          return ep(n) && n >= -ee && n <= ee;
        }
        var np = mf ? zt(mf) : Iw;
        function Ea(n) {
          return typeof n == "string" || !we(n) && Ye(n) && At(n) == Xr;
        }
        function Bt(n) {
          return typeof n == "symbol" || Ye(n) && At(n) == bn;
        }
        var si = yf ? zt(yf) : Lw;
        function MS(n) {
          return n === r;
        }
        function FS(n) {
          return Ye(n) && St(n) == Jr;
        }
        function NS(n) {
          return Ye(n) && At(n) == No;
        }
        var DS = ha(mu), zS = ha(function(n, i) {
          return n <= i;
        });
        function ip(n) {
          if (!n)
            return [];
          if ($t(n))
            return Ea(n) ? ur(n) : Ct(n);
          if (Ai && n[Ai])
            return my(n[Ai]());
          var i = St(n), u = i == ct ? iu : i == wt ? Ho : ui;
          return u(n);
        }
        function Br(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = er(n), n === V || n === -V) {
            var i = n < 0 ? -1 : 1;
            return i * fe;
          }
          return n === n ? n : 0;
        }
        function be(n) {
          var i = Br(n), u = i % 1;
          return i === i ? u ? i - u : i : 0;
        }
        function op(n) {
          return n ? On(be(n), 0, J) : 0;
        }
        function er(n) {
          if (typeof n == "number")
            return n;
          if (Bt(n))
            return q;
          if (Ke(n)) {
            var i = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = Ke(i) ? i + "" : i;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = Ef(n);
          var u = b0.test(n);
          return u || x0.test(n) ? ey(n.slice(2), u ? 2 : 8) : w0.test(n) ? q : +n;
        }
        function ap(n) {
          return Sr(n, It(n));
        }
        function WS(n) {
          return n ? On(be(n), -ee, ee) : n === 0 ? n : 0;
        }
        function Ce(n) {
          return n == null ? "" : Wt(n);
        }
        var BS = ii(function(n, i) {
          if (Ni(i) || $t(i)) {
            Sr(i, ft(i), n);
            return;
          }
          for (var u in i)
            Me.call(i, u) && Ci(n, u, i[u]);
        }), sp = ii(function(n, i) {
          Sr(i, It(i), n);
        }), Oa = ii(function(n, i, u, m) {
          Sr(i, It(i), n, m);
        }), US = ii(function(n, i, u, m) {
          Sr(i, ft(i), n, m);
        }), HS = Dr(cu);
        function qS(n, i) {
          var u = ni(n);
          return i == null ? u : zf(u, i);
        }
        var jS = _e(function(n, i) {
          n = De(n);
          var u = -1, m = i.length, E = m > 2 ? i[2] : r;
          for (E && Tt(i[0], i[1], E) && (m = 1); ++u < m; )
            for (var T = i[u], P = It(T), $ = -1, z = P.length; ++$ < z; ) {
              var K = P[$], Y = n[K];
              (Y === r || cr(Y, ei[K]) && !Me.call(n, K)) && (n[K] = T[K]);
            }
          return n;
        }), ZS = _e(function(n) {
          return n.push(r, Ed), Dt(up, r, n);
        });
        function GS(n, i) {
          return bf(n, de(i, 3), br);
        }
        function KS(n, i) {
          return bf(n, de(i, 3), du);
        }
        function VS(n, i) {
          return n == null ? n : fu(n, de(i, 3), It);
        }
        function YS(n, i) {
          return n == null ? n : qf(n, de(i, 3), It);
        }
        function XS(n, i) {
          return n && br(n, de(i, 3));
        }
        function JS(n, i) {
          return n && du(n, de(i, 3));
        }
        function QS(n) {
          return n == null ? [] : aa(n, ft(n));
        }
        function ex(n) {
          return n == null ? [] : aa(n, It(n));
        }
        function qu(n, i, u) {
          var m = n == null ? r : An(n, i);
          return m === r ? u : m;
        }
        function tx(n, i) {
          return n != null && Td(n, i, Ew);
        }
        function ju(n, i) {
          return n != null && Td(n, i, Ow);
        }
        var rx = wd(function(n, i, u) {
          i != null && typeof i.toString != "function" && (i = Go.call(i)), n[i] = u;
        }, Gu(Lt)), nx = wd(function(n, i, u) {
          i != null && typeof i.toString != "function" && (i = Go.call(i)), Me.call(n, i) ? n[i].push(u) : n[i] = [u];
        }, de), ix = _e(Ii);
        function ft(n) {
          return $t(n) ? Nf(n) : vu(n);
        }
        function It(n) {
          return $t(n) ? Nf(n, true) : Mw(n);
        }
        function ox(n, i) {
          var u = {};
          return i = de(i, 3), br(n, function(m, E, T) {
            Fr(u, i(m, E, T), m);
          }), u;
        }
        function ax(n, i) {
          var u = {};
          return i = de(i, 3), br(n, function(m, E, T) {
            Fr(u, E, i(m, E, T));
          }), u;
        }
        var sx = ii(function(n, i, u) {
          sa(n, i, u);
        }), up = ii(function(n, i, u, m) {
          sa(n, i, u, m);
        }), ux = Dr(function(n, i) {
          var u = {};
          if (n == null)
            return u;
          var m = false;
          i = He(i, function(T) {
            return T = sn(T, n), m || (m = T.length > 1), T;
          }), Sr(n, ku(n), u), m && (u = Xt(u, g | p | w, r1));
          for (var E = i.length; E--; )
            xu(u, i[E]);
          return u;
        });
        function lx(n, i) {
          return lp(n, xa(de(i)));
        }
        var cx = Dr(function(n, i) {
          return n == null ? {} : Nw(n, i);
        });
        function lp(n, i) {
          if (n == null)
            return {};
          var u = He(ku(n), function(m) {
            return [m];
          });
          return i = de(i), ed(n, u, function(m, E) {
            return i(m, E[0]);
          });
        }
        function fx(n, i, u) {
          i = sn(i, n);
          var m = -1, E = i.length;
          for (E || (E = 1, n = r); ++m < E; ) {
            var T = n == null ? r : n[xr(i[m])];
            T === r && (m = E, T = u), n = Wr(T) ? T.call(n) : T;
          }
          return n;
        }
        function dx(n, i, u) {
          return n == null ? n : Mi(n, i, u);
        }
        function px(n, i, u, m) {
          return m = typeof m == "function" ? m : r, n == null ? n : Mi(n, i, u, m);
        }
        var cp = xd(ft), fp = xd(It);
        function hx(n, i, u) {
          var m = we(n), E = m || ln(n) || si(n);
          if (i = de(i, 4), u == null) {
            var T = n && n.constructor;
            E ? u = m ? new T() : [] : Ke(n) ? u = Wr(T) ? ni(Yo(n)) : {} : u = {};
          }
          return (E ? Kt : br)(n, function(P, $, z) {
            return i(u, P, $, z);
          }), u;
        }
        function gx(n, i) {
          return n == null ? true : xu(n, i);
        }
        function vx(n, i, u) {
          return n == null ? n : od(n, i, Ou(u));
        }
        function mx(n, i, u, m) {
          return m = typeof m == "function" ? m : r, n == null ? n : od(n, i, Ou(u), m);
        }
        function ui(n) {
          return n == null ? [] : nu(n, ft(n));
        }
        function yx(n) {
          return n == null ? [] : nu(n, It(n));
        }
        function wx(n, i, u) {
          return u === r && (u = i, i = r), u !== r && (u = er(u), u = u === u ? u : 0), i !== r && (i = er(i), i = i === i ? i : 0), On(er(n), i, u);
        }
        function bx(n, i, u) {
          return i = Br(i), u === r ? (u = i, i = 0) : u = Br(u), n = er(n), Aw(n, i, u);
        }
        function Sx(n, i, u) {
          if (u && typeof u != "boolean" && Tt(n, i, u) && (i = u = r), u === r && (typeof i == "boolean" ? (u = i, i = r) : typeof n == "boolean" && (u = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = Br(n), i === r ? (i = n, n = 0) : i = Br(i)), n > i) {
            var m = n;
            n = i, i = m;
          }
          if (u || n % 1 || i % 1) {
            var E = Mf();
            return bt(n + E * (i - n + Q0("1e-" + ((E + "").length - 1))), i);
          }
          return wu(n, i);
        }
        var xx = oi(function(n, i, u) {
          return i = i.toLowerCase(), n + (u ? dp(i) : i);
        });
        function dp(n) {
          return Zu(Ce(n).toLowerCase());
        }
        function pp(n) {
          return n = Ce(n), n && n.replace(E0, dy).replace(H0, "");
        }
        function _x(n, i, u) {
          n = Ce(n), i = Wt(i);
          var m = n.length;
          u = u === r ? m : On(be(u), 0, m);
          var E = u;
          return u -= i.length, u >= 0 && n.slice(u, E) == i;
        }
        function Ex(n) {
          return n = Ce(n), n && i0.test(n) ? n.replace(Hc, py) : n;
        }
        function Ox(n) {
          return n = Ce(n), n && c0.test(n) ? n.replace(Bs, "\\$&") : n;
        }
        var Ax = oi(function(n, i, u) {
          return n + (u ? "-" : "") + i.toLowerCase();
        }), Tx = oi(function(n, i, u) {
          return n + (u ? " " : "") + i.toLowerCase();
        }), Rx = vd("toLowerCase");
        function Px(n, i, u) {
          n = Ce(n), i = be(i);
          var m = i ? Jn(n) : 0;
          if (!i || m >= i)
            return n;
          var E = (i - m) / 2;
          return pa(ea(E), u) + n + pa(Qo(E), u);
        }
        function kx(n, i, u) {
          n = Ce(n), i = be(i);
          var m = i ? Jn(n) : 0;
          return i && m < i ? n + pa(i - m, u) : n;
        }
        function Cx(n, i, u) {
          n = Ce(n), i = be(i);
          var m = i ? Jn(n) : 0;
          return i && m < i ? pa(i - m, u) + n : n;
        }
        function $x(n, i, u) {
          return u || i == null ? i = 0 : i && (i = +i), zy(Ce(n).replace(Us, ""), i || 0);
        }
        function Ix(n, i, u) {
          return (u ? Tt(n, i, u) : i === r) ? i = 1 : i = be(i), bu(Ce(n), i);
        }
        function Lx() {
          var n = arguments, i = Ce(n[0]);
          return n.length < 3 ? i : i.replace(n[1], n[2]);
        }
        var Mx = oi(function(n, i, u) {
          return n + (u ? "_" : "") + i.toLowerCase();
        });
        function Fx(n, i, u) {
          return u && typeof u != "number" && Tt(n, i, u) && (i = u = r), u = u === r ? J : u >>> 0, u ? (n = Ce(n), n && (typeof i == "string" || i != null && !Hu(i)) && (i = Wt(i), !i && Xn(n)) ? un(ur(n), 0, u) : n.split(i, u)) : [];
        }
        var Nx = oi(function(n, i, u) {
          return n + (u ? " " : "") + Zu(i);
        });
        function Dx(n, i, u) {
          return n = Ce(n), u = u == null ? 0 : On(be(u), 0, n.length), i = Wt(i), n.slice(u, u + i.length) == i;
        }
        function zx(n, i, u) {
          var m = O.templateSettings;
          u && Tt(n, i, u) && (i = r), n = Ce(n), i = Oa({}, i, m, _d);
          var E = Oa({}, i.imports, m.imports, _d), T = ft(E), P = nu(E, T), $, z, K = 0, Y = i.interpolate || Do, Q = "__p += '", ie = ou(
            (i.escape || Do).source + "|" + Y.source + "|" + (Y === qc ? y0 : Do).source + "|" + (i.evaluate || Do).source + "|$",
            "g"
          ), ue = "//# sourceURL=" + (Me.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++K0 + "]") + `
`;
          n.replace(ie, function(he, Ee, Te, Ut, Rt, Ht) {
            return Te || (Te = Ut), Q += n.slice(K, Ht).replace(O0, hy), Ee && ($ = true, Q += `' +
__e(` + Ee + `) +
'`), Rt && (z = true, Q += `';
` + Rt + `;
__p += '`), Te && (Q += `' +
((__t = (` + Te + `)) == null ? '' : __t) +
'`), K = Ht + he.length, he;
          }), Q += `';
`;
          var pe = Me.call(i, "variable") && i.variable;
          if (!pe)
            Q = `with (obj) {
` + Q + `
}
`;
          else if (v0.test(pe))
            throw new ye(c);
          Q = (z ? Q.replace(e0, "") : Q).replace(t0, "$1").replace(r0, "$1;"), Q = "function(" + (pe || "obj") + `) {
` + (pe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (z ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Q + `return __p
}`;
          var Se = gp(function() {
            return Re(T, ue + "return " + Q).apply(r, P);
          });
          if (Se.source = Q, Uu(Se))
            throw Se;
          return Se;
        }
        function Wx(n) {
          return Ce(n).toLowerCase();
        }
        function Bx(n) {
          return Ce(n).toUpperCase();
        }
        function Ux(n, i, u) {
          if (n = Ce(n), n && (u || i === r))
            return Ef(n);
          if (!n || !(i = Wt(i)))
            return n;
          var m = ur(n), E = ur(i), T = Of(m, E), P = Af(m, E) + 1;
          return un(m, T, P).join("");
        }
        function Hx(n, i, u) {
          if (n = Ce(n), n && (u || i === r))
            return n.slice(0, Rf(n) + 1);
          if (!n || !(i = Wt(i)))
            return n;
          var m = ur(n), E = Af(m, ur(i)) + 1;
          return un(m, 0, E).join("");
        }
        function qx(n, i, u) {
          if (n = Ce(n), n && (u || i === r))
            return n.replace(Us, "");
          if (!n || !(i = Wt(i)))
            return n;
          var m = ur(n), E = Of(m, ur(i));
          return un(m, E).join("");
        }
        function jx(n, i) {
          var u = j, m = D;
          if (Ke(i)) {
            var E = "separator" in i ? i.separator : E;
            u = "length" in i ? be(i.length) : u, m = "omission" in i ? Wt(i.omission) : m;
          }
          n = Ce(n);
          var T = n.length;
          if (Xn(n)) {
            var P = ur(n);
            T = P.length;
          }
          if (u >= T)
            return n;
          var $ = u - Jn(m);
          if ($ < 1)
            return m;
          var z = P ? un(P, 0, $).join("") : n.slice(0, $);
          if (E === r)
            return z + m;
          if (P && ($ += z.length - $), Hu(E)) {
            if (n.slice($).search(E)) {
              var K, Y = z;
              for (E.global || (E = ou(E.source, Ce(jc.exec(E)) + "g")), E.lastIndex = 0; K = E.exec(Y); )
                var Q = K.index;
              z = z.slice(0, Q === r ? $ : Q);
            }
          } else if (n.indexOf(Wt(E), $) != $) {
            var ie = z.lastIndexOf(E);
            ie > -1 && (z = z.slice(0, ie));
          }
          return z + m;
        }
        function Zx(n) {
          return n = Ce(n), n && n0.test(n) ? n.replace(Uc, Sy) : n;
        }
        var Gx = oi(function(n, i, u) {
          return n + (u ? " " : "") + i.toUpperCase();
        }), Zu = vd("toUpperCase");
        function hp(n, i, u) {
          return n = Ce(n), i = u ? r : i, i === r ? vy(n) ? Ey(n) : sy(n) : n.match(i) || [];
        }
        var gp = _e(function(n, i) {
          try {
            return Dt(n, r, i);
          } catch (u) {
            return Uu(u) ? u : new ye(u);
          }
        }), Kx = Dr(function(n, i) {
          return Kt(i, function(u) {
            u = xr(u), Fr(n, u, Wu(n[u], n));
          }), n;
        });
        function Vx(n) {
          var i = n == null ? 0 : n.length, u = de();
          return n = i ? He(n, function(m) {
            if (typeof m[1] != "function")
              throw new Vt(l);
            return [u(m[0]), m[1]];
          }) : [], _e(function(m) {
            for (var E = -1; ++E < i; ) {
              var T = n[E];
              if (Dt(T[0], this, m))
                return Dt(T[1], this, m);
            }
          });
        }
        function Yx(n) {
          return Sw(Xt(n, g));
        }
        function Gu(n) {
          return function() {
            return n;
          };
        }
        function Xx(n, i) {
          return n == null || n !== n ? i : n;
        }
        var Jx = yd(), Qx = yd(true);
        function Lt(n) {
          return n;
        }
        function Ku(n) {
          return Kf(typeof n == "function" ? n : Xt(n, g));
        }
        function e_(n) {
          return Yf(Xt(n, g));
        }
        function t_(n, i) {
          return Xf(n, Xt(i, g));
        }
        var r_ = _e(function(n, i) {
          return function(u) {
            return Ii(u, n, i);
          };
        }), n_ = _e(function(n, i) {
          return function(u) {
            return Ii(n, u, i);
          };
        });
        function Vu(n, i, u) {
          var m = ft(i), E = aa(i, m);
          u == null && !(Ke(i) && (E.length || !m.length)) && (u = i, i = n, n = this, E = aa(i, ft(i)));
          var T = !(Ke(u) && "chain" in u) || !!u.chain, P = Wr(n);
          return Kt(E, function($) {
            var z = i[$];
            n[$] = z, P && (n.prototype[$] = function() {
              var K = this.__chain__;
              if (T || K) {
                var Y = n(this.__wrapped__), Q = Y.__actions__ = Ct(this.__actions__);
                return Q.push({ func: z, args: arguments, thisArg: n }), Y.__chain__ = K, Y;
              }
              return z.apply(n, tn([this.value()], arguments));
            });
          }), n;
        }
        function i_() {
          return ht._ === this && (ht._ = ky), this;
        }
        function Yu() {
        }
        function o_(n) {
          return n = be(n), _e(function(i) {
            return Jf(i, n);
          });
        }
        var a_ = Tu(He), s_ = Tu(wf), u_ = Tu(Js);
        function vp(n) {
          return Lu(n) ? Qs(xr(n)) : Dw(n);
        }
        function l_(n) {
          return function(i) {
            return n == null ? r : An(n, i);
          };
        }
        var c_ = bd(), f_ = bd(true);
        function Xu() {
          return [];
        }
        function Ju() {
          return false;
        }
        function d_() {
          return {};
        }
        function p_() {
          return "";
        }
        function h_() {
          return true;
        }
        function g_(n, i) {
          if (n = be(n), n < 1 || n > ee)
            return [];
          var u = J, m = bt(n, J);
          i = de(i), n -= J;
          for (var E = ru(m, i); ++u < n; )
            i(u);
          return E;
        }
        function v_(n) {
          return we(n) ? He(n, xr) : Bt(n) ? [n] : Ct(Fd(Ce(n)));
        }
        function m_(n) {
          var i = ++Ry;
          return Ce(n) + i;
        }
        var y_ = da(function(n, i) {
          return n + i;
        }, 0), w_ = Ru("ceil"), b_ = da(function(n, i) {
          return n / i;
        }, 1), S_ = Ru("floor");
        function x_(n) {
          return n && n.length ? oa(n, Lt, pu) : r;
        }
        function __(n, i) {
          return n && n.length ? oa(n, de(i, 2), pu) : r;
        }
        function E_(n) {
          return xf(n, Lt);
        }
        function O_(n, i) {
          return xf(n, de(i, 2));
        }
        function A_(n) {
          return n && n.length ? oa(n, Lt, mu) : r;
        }
        function T_(n, i) {
          return n && n.length ? oa(n, de(i, 2), mu) : r;
        }
        var R_ = da(function(n, i) {
          return n * i;
        }, 1), P_ = Ru("round"), k_ = da(function(n, i) {
          return n - i;
        }, 0);
        function C_(n) {
          return n && n.length ? tu(n, Lt) : 0;
        }
        function $_(n, i) {
          return n && n.length ? tu(n, de(i, 2)) : 0;
        }
        return O.after = eS, O.ary = Gd, O.assign = BS, O.assignIn = sp, O.assignInWith = Oa, O.assignWith = US, O.at = HS, O.before = Kd, O.bind = Wu, O.bindAll = Kx, O.bindKey = Vd, O.castArray = dS, O.chain = qd, O.chunk = S1, O.compact = x1, O.concat = _1, O.cond = Vx, O.conforms = Yx, O.constant = Gu, O.countBy = Cb, O.create = qS, O.curry = Yd, O.curryRight = Xd, O.debounce = Jd, O.defaults = jS, O.defaultsDeep = ZS, O.defer = tS, O.delay = rS, O.difference = E1, O.differenceBy = O1, O.differenceWith = A1, O.drop = T1, O.dropRight = R1, O.dropRightWhile = P1, O.dropWhile = k1, O.fill = C1, O.filter = Ib, O.flatMap = Fb, O.flatMapDeep = Nb, O.flatMapDepth = Db, O.flatten = Wd, O.flattenDeep = $1, O.flattenDepth = I1, O.flip = nS, O.flow = Jx, O.flowRight = Qx, O.fromPairs = L1, O.functions = QS, O.functionsIn = ex, O.groupBy = zb, O.initial = F1, O.intersection = N1, O.intersectionBy = D1, O.intersectionWith = z1, O.invert = rx, O.invertBy = nx, O.invokeMap = Bb, O.iteratee = Ku, O.keyBy = Ub, O.keys = ft, O.keysIn = It, O.map = wa, O.mapKeys = ox, O.mapValues = ax, O.matches = e_, O.matchesProperty = t_, O.memoize = Sa, O.merge = sx, O.mergeWith = up, O.method = r_, O.methodOf = n_, O.mixin = Vu, O.negate = xa, O.nthArg = o_, O.omit = ux, O.omitBy = lx, O.once = iS, O.orderBy = Hb, O.over = a_, O.overArgs = oS, O.overEvery = s_, O.overSome = u_, O.partial = Bu, O.partialRight = Qd, O.partition = qb, O.pick = cx, O.pickBy = lp, O.property = vp, O.propertyOf = l_, O.pull = H1, O.pullAll = Ud, O.pullAllBy = q1, O.pullAllWith = j1, O.pullAt = Z1, O.range = c_, O.rangeRight = f_, O.rearg = aS, O.reject = Gb, O.remove = G1, O.rest = sS, O.reverse = Du, O.sampleSize = Vb, O.set = dx, O.setWith = px, O.shuffle = Yb, O.slice = K1, O.sortBy = Qb, O.sortedUniq = tb, O.sortedUniqBy = rb, O.split = Fx, O.spread = uS, O.tail = nb, O.take = ib, O.takeRight = ob, O.takeRightWhile = ab, O.takeWhile = sb, O.tap = xb, O.throttle = lS, O.thru = ya, O.toArray = ip, O.toPairs = cp, O.toPairsIn = fp, O.toPath = v_, O.toPlainObject = ap, O.transform = hx, O.unary = cS, O.union = ub, O.unionBy = lb, O.unionWith = cb, O.uniq = fb, O.uniqBy = db, O.uniqWith = pb, O.unset = gx, O.unzip = zu, O.unzipWith = Hd, O.update = vx, O.updateWith = mx, O.values = ui, O.valuesIn = yx, O.without = hb, O.words = hp, O.wrap = fS, O.xor = gb, O.xorBy = vb, O.xorWith = mb, O.zip = yb, O.zipObject = wb, O.zipObjectDeep = bb, O.zipWith = Sb, O.entries = cp, O.entriesIn = fp, O.extend = sp, O.extendWith = Oa, Vu(O, O), O.add = y_, O.attempt = gp, O.camelCase = xx, O.capitalize = dp, O.ceil = w_, O.clamp = wx, O.clone = pS, O.cloneDeep = gS, O.cloneDeepWith = vS, O.cloneWith = hS, O.conformsTo = mS, O.deburr = pp, O.defaultTo = Xx, O.divide = b_, O.endsWith = _x, O.eq = cr, O.escape = Ex, O.escapeRegExp = Ox, O.every = $b, O.find = Lb, O.findIndex = Dd, O.findKey = GS, O.findLast = Mb, O.findLastIndex = zd, O.findLastKey = KS, O.floor = S_, O.forEach = jd, O.forEachRight = Zd, O.forIn = VS, O.forInRight = YS, O.forOwn = XS, O.forOwnRight = JS, O.get = qu, O.gt = yS, O.gte = wS, O.has = tx, O.hasIn = ju, O.head = Bd, O.identity = Lt, O.includes = Wb, O.indexOf = M1, O.inRange = bx, O.invoke = ix, O.isArguments = Pn, O.isArray = we, O.isArrayBuffer = bS, O.isArrayLike = $t, O.isArrayLikeObject = Je, O.isBoolean = SS, O.isBuffer = ln, O.isDate = xS, O.isElement = _S, O.isEmpty = ES, O.isEqual = OS, O.isEqualWith = AS, O.isError = Uu, O.isFinite = TS, O.isFunction = Wr, O.isInteger = ep, O.isLength = _a, O.isMap = tp, O.isMatch = RS, O.isMatchWith = PS, O.isNaN = kS, O.isNative = CS, O.isNil = IS, O.isNull = $S, O.isNumber = rp, O.isObject = Ke, O.isObjectLike = Ye, O.isPlainObject = zi, O.isRegExp = Hu, O.isSafeInteger = LS, O.isSet = np, O.isString = Ea, O.isSymbol = Bt, O.isTypedArray = si, O.isUndefined = MS, O.isWeakMap = FS, O.isWeakSet = NS, O.join = W1, O.kebabCase = Ax, O.last = Qt, O.lastIndexOf = B1, O.lowerCase = Tx, O.lowerFirst = Rx, O.lt = DS, O.lte = zS, O.max = x_, O.maxBy = __, O.mean = E_, O.meanBy = O_, O.min = A_, O.minBy = T_, O.stubArray = Xu, O.stubFalse = Ju, O.stubObject = d_, O.stubString = p_, O.stubTrue = h_, O.multiply = R_, O.nth = U1, O.noConflict = i_, O.noop = Yu, O.now = ba, O.pad = Px, O.padEnd = kx, O.padStart = Cx, O.parseInt = $x, O.random = Sx, O.reduce = jb, O.reduceRight = Zb, O.repeat = Ix, O.replace = Lx, O.result = fx, O.round = P_, O.runInContext = F, O.sample = Kb, O.size = Xb, O.snakeCase = Mx, O.some = Jb, O.sortedIndex = V1, O.sortedIndexBy = Y1, O.sortedIndexOf = X1, O.sortedLastIndex = J1, O.sortedLastIndexBy = Q1, O.sortedLastIndexOf = eb, O.startCase = Nx, O.startsWith = Dx, O.subtract = k_, O.sum = C_, O.sumBy = $_, O.template = zx, O.times = g_, O.toFinite = Br, O.toInteger = be, O.toLength = op, O.toLower = Wx, O.toNumber = er, O.toSafeInteger = WS, O.toString = Ce, O.toUpper = Bx, O.trim = Ux, O.trimEnd = Hx, O.trimStart = qx, O.truncate = jx, O.unescape = Zx, O.uniqueId = m_, O.upperCase = Gx, O.upperFirst = Zu, O.each = jd, O.eachRight = Zd, O.first = Bd, Vu(O, (function() {
          var n = {};
          return br(O, function(i, u) {
            Me.call(O.prototype, u) || (n[u] = i);
          }), n;
        })(), { chain: false }), O.VERSION = o, Kt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          O[n].placeholder = O;
        }), Kt(["drop", "take"], function(n, i) {
          Ae.prototype[n] = function(u) {
            u = u === r ? 1 : ot(be(u), 0);
            var m = this.__filtered__ && !i ? new Ae(this) : this.clone();
            return m.__filtered__ ? m.__takeCount__ = bt(u, m.__takeCount__) : m.__views__.push({
              size: bt(u, J),
              type: n + (m.__dir__ < 0 ? "Right" : "")
            }), m;
          }, Ae.prototype[n + "Right"] = function(u) {
            return this.reverse()[n](u).reverse();
          };
        }), Kt(["filter", "map", "takeWhile"], function(n, i) {
          var u = i + 1, m = u == H || u == X;
          Ae.prototype[n] = function(E) {
            var T = this.clone();
            return T.__iteratees__.push({
              iteratee: de(E, 3),
              type: u
            }), T.__filtered__ = T.__filtered__ || m, T;
          };
        }), Kt(["head", "last"], function(n, i) {
          var u = "take" + (i ? "Right" : "");
          Ae.prototype[n] = function() {
            return this[u](1).value()[0];
          };
        }), Kt(["initial", "tail"], function(n, i) {
          var u = "drop" + (i ? "" : "Right");
          Ae.prototype[n] = function() {
            return this.__filtered__ ? new Ae(this) : this[u](1);
          };
        }), Ae.prototype.compact = function() {
          return this.filter(Lt);
        }, Ae.prototype.find = function(n) {
          return this.filter(n).head();
        }, Ae.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, Ae.prototype.invokeMap = _e(function(n, i) {
          return typeof n == "function" ? new Ae(this) : this.map(function(u) {
            return Ii(u, n, i);
          });
        }), Ae.prototype.reject = function(n) {
          return this.filter(xa(de(n)));
        }, Ae.prototype.slice = function(n, i) {
          n = be(n);
          var u = this;
          return u.__filtered__ && (n > 0 || i < 0) ? new Ae(u) : (n < 0 ? u = u.takeRight(-n) : n && (u = u.drop(n)), i !== r && (i = be(i), u = i < 0 ? u.dropRight(-i) : u.take(i - n)), u);
        }, Ae.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, Ae.prototype.toArray = function() {
          return this.take(J);
        }, br(Ae.prototype, function(n, i) {
          var u = /^(?:filter|find|map|reject)|While$/.test(i), m = /^(?:head|last)$/.test(i), E = O[m ? "take" + (i == "last" ? "Right" : "") : i], T = m || /^find/.test(i);
          E && (O.prototype[i] = function() {
            var P = this.__wrapped__, $ = m ? [1] : arguments, z = P instanceof Ae, K = $[0], Y = z || we(P), Q = function(Ee) {
              var Te = E.apply(O, tn([Ee], $));
              return m && ie ? Te[0] : Te;
            };
            Y && u && typeof K == "function" && K.length != 1 && (z = Y = false);
            var ie = this.__chain__, ue = !!this.__actions__.length, pe = T && !ie, Se = z && !ue;
            if (!T && Y) {
              P = Se ? P : new Ae(this);
              var he = n.apply(P, $);
              return he.__actions__.push({ func: ya, args: [Q], thisArg: r }), new Yt(he, ie);
            }
            return pe && Se ? n.apply(this, $) : (he = this.thru(Q), pe ? m ? he.value()[0] : he.value() : he);
          });
        }), Kt(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var i = qo[n], u = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(n);
          O.prototype[n] = function() {
            var E = arguments;
            if (m && !this.__chain__) {
              var T = this.value();
              return i.apply(we(T) ? T : [], E);
            }
            return this[u](function(P) {
              return i.apply(we(P) ? P : [], E);
            });
          };
        }), br(Ae.prototype, function(n, i) {
          var u = O[i];
          if (u) {
            var m = u.name + "";
            Me.call(ri, m) || (ri[m] = []), ri[m].push({ name: i, func: u });
          }
        }), ri[fa(r, d).name] = [{
          name: "wrapper",
          func: r
        }], Ae.prototype.clone = Zy, Ae.prototype.reverse = Gy, Ae.prototype.value = Ky, O.prototype.at = _b, O.prototype.chain = Eb, O.prototype.commit = Ob, O.prototype.next = Ab, O.prototype.plant = Rb, O.prototype.reverse = Pb, O.prototype.toJSON = O.prototype.valueOf = O.prototype.value = kb, O.prototype.first = O.prototype.head, Ai && (O.prototype[Ai] = Tb), O;
      }), Qn = Oy();
      Sn ? ((Sn.exports = Qn)._ = Qn, Ks._ = Qn) : ht._ = Qn;
    }).call(Dk);
  })(po, po.exports)), po.exports;
}
var rt = zk();
const _g = {
  FdSave: Z4,
  FdWarningDanger: x3,
  FdInfoCircle: F5,
  FdInfoBold: R5
};
var wm = /* @__PURE__ */ ((e3) => (e3.ALERT = "alert", e3.CONFIRM = "confirm", e3))(wm || {}), vi = /* @__PURE__ */ ((e3) => (e3.PRIMARY = "primary", e3.WARNING = "warning", e3.DANGER = "danger", e3))(vi || {}), ho = /* @__PURE__ */ ((e3) => (e3.CONFIRMED = "confirmed", e3.CANCELED = "canceled", e3))(ho || {});
const bm = {
  [vi.PRIMARY]: {
    icon: "blue-500",
    button: "primary-dark"
  },
  [vi.DANGER]: {
    icon: "red-500",
    button: "primary-dark"
  },
  [vi.WARNING]: {
    icon: "yellow-400",
    button: "primary-dark"
  }
}, $l = ({
  color: e3 = vi.PRIMARY,
  variant: t = "solid",
  children: r,
  autoFocus: o,
  ...a
}) => {
  const s = bm[e3].button, l = t === "outlined" ? `bg-transparent text-white border border-white hover:border-white hover:bg-white hover:text-${s}` : `text-white bg-${s} border border-${s} hover:border-white hover:bg-primary-hover hover:text-white`;
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "button",
    {
      autoFocus: o,
      className: nt(
        "w-16 rounded px-2 py-1 text-xs font-medium hover:font-bold focus:outline-none",
        l
      ),
      ...a,
      children: r
    }
  );
}, Wk = ({
  name: e3,
  color: t = vi.PRIMARY,
  className: r = "w-8 h-8"
}) => {
  const o = _g[e3] || _g.FdInfoCircle, a = `text-${bm[t].icon}`;
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(o, { className: nt(r, a) });
}, SI = ({
  id: e3,
  title: t,
  message: r,
  icon: o,
  type: a,
  color: s,
  zIndex: l = 3e3,
  views: c,
  width: h = 520,
  hasOverlay: y = true,
  onClose: v,
  onEdit: g
}) => {
  const p = (f) => {
    v({
      id: e3,
      reason: f
    });
  };
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    function f(b) {
      b.key === "Escape" && p(ho.CANCELED);
    }
    return window.addEventListener("keyup", f), () => {
      window.removeEventListener("keyup", f);
    };
  }, []);
  const w = rt.merge(
    rt.values(c == null ? void 0 : c.toggles).flatMap((f) => f.value ? f.warnings || [] : []),
    c == null ? void 0 : c.tips
  ), S = (f, b) => {
    var x;
    if (!(c != null && c.toggles)) return;
    const d = rt.cloneDeep(c);
    (x = d.toggles) != null && x[f] && (d.toggles[f].value = b), g({
      id: e3,
      views: d
    });
  };
  return b.createPortal(
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ss, { appear: true, show: true, as: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: nt(
          "absolute inset-0 flex h-full w-full items-center justify-center overflow-y-auto",
          { "bg-black bg-opacity-80": y }
        ),
        style: { zIndex: l },
        onClick: () => p(ho.CANCELED),
        children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          ss.Child,
          {
            as: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "div",
              {
                "data-cy": "confirmation-modal-cy",
                className: "relative rounded-md border border-grey-50 bg-grey-900",
                style: { width: h },
                onClick: (f) => f.stopPropagation(),
                children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col items-center gap-3 p-6 px-12", children: [
                  o ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Wk, { name: o, color: s, className: "w-6 h-6" }) }) : null,
                  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Bk, { condition: t, children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("h4", { className: "w-full text-wrap text-lg font-bold leading-6 text-white text-center", children: t }) }),
                  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: "w-full text-wrap text-center text-sm font-medium text-white", children: r }),
                  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "text-xs text-white", children: rt.values(c == null ? void 0 : c.toggles).map((f) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("label", { htmlFor: f.key, className: "flex items-center", children: [
                    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      UP,
                      {
                        size: "xs",
                        value: f.value,
                        onChange: (b) => S(f.key, b)
                      }
                    ),
                    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "ml-1", children: f.title })
                  ] }) }, f.key)) }),
                  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Uk, { warnings: w }),
                  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex items-center gap-4", children: a === wm.CONFIRM ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
                    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      $l,
                      {
                        autoFocus: true,
                        color: s,
                        onClick: () => p(ho.CONFIRMED),
                        children: "Confirm"
                      }
                    ),
                    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      $l,
                      {
                        color: s,
                        variant: "outlined",
                        onClick: () => p(ho.CANCELED),
                        children: "Cancel"
                      }
                    )
                  ] }) : /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx($l, { autoFocus: true, onClick: () => p(), children: "OK" }) })
                ] })
              }
            )
          }
        )
      }
    ) }),
    document.querySelector("body")
  );
}, Bk = (e3) => e3.condition ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: e3.children }) : null, Uk = (e3) => e3.warnings ? /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ss, { appear: true, show: !!e3.warnings.length, as: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment, children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex flex-col gap-1 rounded-sm bg-grey-600 p-2 text-xs text-white", children: e3.warnings.map((t, r) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  ss.Child,
  {
    as: qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 items-center gap-1 rounded-sm px-2 py-1", children: [
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        x3,
        {
          className: nt(
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
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "flex-1", children: t.message })
    ] })
  },
  `modal-warnings-${r}`
)) }) }) : null;
var Hk = /* @__PURE__ */ ((e3) => (e3[e3.MIN = 0.5] = "MIN", e3[e3.MAX = 10] = "MAX", e3[e3.STEP = 0.5] = "STEP", e3[e3.INIT = 1] = "INIT", e3[e3.TRANSITION = 200] = "TRANSITION", e3))(Hk || {});
const xI = ({
  zoom: e3,
  minZoom: t = 0.5,
  maxZoom: r = 10,
  handleZoomIn: o,
  handleZoomOut: a
}) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center rounded bg-grey-300 p-1", children: [
  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    o2$1,
    {
      onClick: a,
      className: nt("h-5 w-5 p-1", {
        "text-grey-200": e3 <= t,
        "cursor-pointer rounded hover:bg-purple-800": e3 > t
      })
    }
  ),
  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { className: "mx-1 w-10 select-none text-center text-xs", children: [
    (e3 * 100).toFixed(0),
    "%"
  ] }),
  /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    J2$1,
    {
      onClick: o,
      className: nt("h-5 w-5 p-1", {
        "text-grey-200": e3 >= r,
        "cursor-pointer rounded hover:bg-purple-800": e3 < r
      })
    }
  )
] });
function _I(e3, t) {
  const r = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(false);
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    if (r.current) return e3();
    r.current = true;
  }, t);
}
const Il = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function Ll(e3, t, r, o) {
  e3.addEventListener ? e3.addEventListener(t, r, o) : e3.attachEvent && e3.attachEvent("on".concat(t), r);
}
function lo(e3, t, r, o) {
  e3.removeEventListener ? e3.removeEventListener(t, r, o) : e3.detachEvent && e3.detachEvent("on".concat(t), r);
}
function Sm(e3, t) {
  const r = t.slice(0, t.length - 1);
  for (let o = 0; o < r.length; o++) r[o] = e3[r[o].toLowerCase()];
  return r;
}
function xm(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  const t = e3.split(",");
  let r = t.lastIndexOf("");
  for (; r >= 0; )
    t[r - 1] += ",", t.splice(r, 1), r = t.lastIndexOf("");
  return t;
}
function qk(e3, t) {
  const r = e3.length >= t.length ? e3 : t, o = e3.length >= t.length ? t : e3;
  let a = true;
  for (let s = 0; s < r.length; s++)
    o.indexOf(r[s]) === -1 && (a = false);
  return a;
}
const Ao = {
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
  "-": Il ? 173 : 189,
  "=": Il ? 61 : 187,
  ";": Il ? 59 : 186,
  "'": 222,
  "{": 219,
  "}": 221,
  "[": 219,
  "]": 221,
  "\\": 220
}, mr = {
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
}, go = {
  16: "shiftKey",
  18: "altKey",
  17: "ctrlKey",
  91: "metaKey",
  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91
}, mt = {
  16: false,
  18: false,
  17: false,
  91: false
}, Ve = {};
for (let e3 = 1; e3 < 20; e3++)
  Ao["f".concat(e3)] = 111 + e3;
let je = [], xo = null, _m = "all";
const qr = /* @__PURE__ */ new Map(), _i = (e3) => Ao[e3.toLowerCase()] || mr[e3.toLowerCase()] || e3.toUpperCase().charCodeAt(0), jk = (e3) => Object.keys(Ao).find((t) => Ao[t] === e3), Zk = (e3) => Object.keys(mr).find((t) => mr[t] === e3);
function Em(e3) {
  _m = e3 || "all";
}
function To() {
  return _m || "all";
}
function Gk() {
  return je.slice(0);
}
function Kk() {
  return je.map((e3) => jk(e3) || Zk(e3) || String.fromCharCode(e3));
}
function Vk() {
  const e3 = [];
  return Object.keys(Ve).forEach((t) => {
    Ve[t].forEach((r) => {
      let {
        key: o,
        scope: a,
        mods: s,
        shortcut: l
      } = r;
      e3.push({
        scope: a,
        shortcut: l,
        mods: s,
        keys: o.split("+").map((c) => _i(c))
      });
    });
  }), e3;
}
function Yk(e3) {
  const t = e3.target || e3.srcElement, {
    tagName: r
  } = t;
  let o = true;
  const a = r === "INPUT" && !["checkbox", "radio", "range", "button", "file", "reset", "submit", "color"].includes(t.type);
  return (t.isContentEditable || (a || r === "TEXTAREA" || r === "SELECT") && !t.readOnly) && (o = false), o;
}
function Xk(e3) {
  return typeof e3 == "string" && (e3 = _i(e3)), je.indexOf(e3) !== -1;
}
function Jk(e3, t) {
  let r, o;
  e3 || (e3 = To());
  for (const a in Ve)
    if (Object.prototype.hasOwnProperty.call(Ve, a))
      for (r = Ve[a], o = 0; o < r.length; )
        r[o].scope === e3 ? r.splice(o, 1).forEach((l) => {
          let {
            element: c
          } = l;
          return Dc(c);
        }) : o++;
  To() === e3 && Em(t || "all");
}
function Qk(e3) {
  let t = e3.keyCode || e3.which || e3.charCode;
  e3.key && e3.key.toLowerCase() === "capslock" && (t = _i(e3.key));
  const r = je.indexOf(t);
  if (r >= 0 && je.splice(r, 1), e3.key && e3.key.toLowerCase() === "meta" && je.splice(0, je.length), (t === 93 || t === 224) && (t = 91), t in mt) {
    mt[t] = false;
    for (const o in mr) mr[o] === t && (gr[o] = false);
  }
}
function Om(e3) {
  if (typeof e3 > "u")
    Object.keys(Ve).forEach((a) => {
      Array.isArray(Ve[a]) && Ve[a].forEach((s) => Ha(s)), delete Ve[a];
    }), Dc(null);
  else if (Array.isArray(e3))
    e3.forEach((a) => {
      a.key && Ha(a);
    });
  else if (typeof e3 == "object")
    e3.key && Ha(e3);
  else if (typeof e3 == "string") {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      r[o - 1] = arguments[o];
    let [a, s] = r;
    typeof a == "function" && (s = a, a = ""), Ha({
      key: e3,
      scope: a,
      method: s,
      splitKey: "+"
    });
  }
}
const Ha = (e3) => {
  let {
    key: t,
    scope: r,
    method: o,
    splitKey: a = "+"
  } = e3;
  xm(t).forEach((l) => {
    const c = l.split(a), h = c.length, y = c[h - 1], v = y === "*" ? "*" : _i(y);
    if (!Ve[v]) return;
    r || (r = To());
    const g = h > 1 ? Sm(mr, c) : [], p = [];
    Ve[v] = Ve[v].filter((w) => {
      const f = (o ? w.method === o : true) && w.scope === r && qk(w.mods, g);
      return f && p.push(w.element), !f;
    }), p.forEach((w) => Dc(w));
  });
};
function Eg(e3, t, r, o) {
  if (t.element !== o)
    return;
  let a;
  if (t.scope === r || t.scope === "all") {
    a = t.mods.length > 0;
    for (const s in mt)
      Object.prototype.hasOwnProperty.call(mt, s) && (!mt[s] && t.mods.indexOf(+s) > -1 || mt[s] && t.mods.indexOf(+s) === -1) && (a = false);
    (t.mods.length === 0 && !mt[16] && !mt[18] && !mt[17] && !mt[91] || a || t.shortcut === "*") && (t.keys = [], t.keys = t.keys.concat(je), t.method(e3, t) === false && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = true)));
  }
}
function Og(e3, t) {
  const r = Ve["*"];
  let o = e3.keyCode || e3.which || e3.charCode;
  if (e3.key && e3.key.toLowerCase() === "capslock" || !gr.filter.call(this, e3)) return;
  if ((o === 93 || o === 224) && (o = 91), je.indexOf(o) === -1 && o !== 229 && je.push(o), ["metaKey", "ctrlKey", "altKey", "shiftKey"].forEach((c) => {
    const h = go[c];
    e3[c] && je.indexOf(h) === -1 ? je.push(h) : !e3[c] && je.indexOf(h) > -1 ? je.splice(je.indexOf(h), 1) : c === "metaKey" && e3[c] && (je = je.filter((y) => y in go || y === o));
  }), o in mt) {
    mt[o] = true;
    for (const c in mr)
      if (Object.prototype.hasOwnProperty.call(mr, c)) {
        const h = go[mr[c]];
        gr[c] = e3[h];
      }
    if (!r) return;
  }
  for (const c in mt)
    Object.prototype.hasOwnProperty.call(mt, c) && (mt[c] = e3[go[c]]);
  e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (je.indexOf(17) === -1 && je.push(17), je.indexOf(18) === -1 && je.push(18), mt[17] = true, mt[18] = true);
  const a = To();
  if (r)
    for (let c = 0; c < r.length; c++)
      r[c].scope === a && (e3.type === "keydown" && r[c].keydown || e3.type === "keyup" && r[c].keyup) && Eg(e3, r[c], a, t);
  if (!(o in Ve)) return;
  const s = Ve[o], l = s.length;
  for (let c = 0; c < l; c++)
    if ((e3.type === "keydown" && s[c].keydown || e3.type === "keyup" && s[c].keyup) && s[c].key) {
      const h = s[c], {
        splitKey: y
      } = h, v = h.key.split(y), g = [];
      for (let p = 0; p < v.length; p++)
        g.push(_i(v[p]));
      g.sort().join("") === je.sort().join("") && Eg(e3, h, a, t);
    }
}
function gr(e3, t, r) {
  je = [];
  const o = xm(e3);
  let a = [], s = "all", l = document, c = 0, h = false, y = true, v = "+", g = false, p = false;
  for (r === void 0 && typeof t == "function" && (r = t), Object.prototype.toString.call(t) === "[object Object]" && (t.scope && (s = t.scope), t.element && (l = t.element), t.keyup && (h = t.keyup), t.keydown !== void 0 && (y = t.keydown), t.capture !== void 0 && (g = t.capture), typeof t.splitKey == "string" && (v = t.splitKey), t.single === true && (p = true)), typeof t == "string" && (s = t), p && Om(e3, s); c < o.length; c++)
    e3 = o[c].split(v), a = [], e3.length > 1 && (a = Sm(mr, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : _i(e3), e3 in Ve || (Ve[e3] = []), Ve[e3].push({
      keyup: h,
      keydown: y,
      scope: s,
      mods: a,
      shortcut: o[c],
      method: r,
      key: o[c],
      splitKey: v,
      element: l
    });
  if (typeof l < "u" && window) {
    if (!qr.has(l)) {
      const w = function() {
        let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        return Og(f, l);
      }, S = function() {
        let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.event;
        Og(f, l), Qk(f);
      };
      qr.set(l, {
        keydownListener: w,
        keyupListenr: S,
        capture: g
      }), Ll(l, "keydown", w, g), Ll(l, "keyup", S, g);
    }
    if (!xo) {
      const w = () => {
        je = [];
      };
      xo = {
        listener: w,
        capture: g
      }, Ll(window, "focus", w, g);
    }
  }
}
function eC(e3) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(Ve).forEach((r) => {
    Ve[r].filter((a) => a.scope === t && a.shortcut === e3).forEach((a) => {
      a && a.method && a.method();
    });
  });
}
function Dc(e3) {
  const t = Object.values(Ve).flat();
  if (t.findIndex((o) => {
    let {
      element: a
    } = o;
    return a === e3;
  }) < 0) {
    const {
      keydownListener: o,
      keyupListenr: a,
      capture: s
    } = qr.get(e3) || {};
    o && a && (lo(e3, "keyup", a, s), lo(e3, "keydown", o, s), qr.delete(e3));
  }
  if ((t.length <= 0 || qr.size <= 0) && (Object.keys(qr).forEach((a) => {
    const {
      keydownListener: s,
      keyupListenr: l,
      capture: c
    } = qr.get(a) || {};
    s && l && (lo(a, "keyup", l, c), lo(a, "keydown", s, c), qr.delete(a));
  }), qr.clear(), Object.keys(Ve).forEach((a) => delete Ve[a]), xo)) {
    const {
      listener: a,
      capture: s
    } = xo;
    lo(window, "focus", a, s), xo = null;
  }
}
const Ml = {
  getPressedKeyString: Kk,
  setScope: Em,
  getScope: To,
  deleteScope: Jk,
  getPressedKeyCodes: Gk,
  getAllKeyCodes: Vk,
  isPressed: Xk,
  filter: Yk,
  trigger: eC,
  unbind: Om,
  keyMap: Ao,
  modifier: mr,
  modifierMap: go
};
for (const e3 in Ml)
  Object.prototype.hasOwnProperty.call(Ml, e3) && (gr[e3] = Ml[e3]);
if (typeof window < "u") {
  const e3 = window.hotkeys;
  gr.noConflict = (t) => (t && window.hotkeys === gr && (window.hotkeys = e3), gr), window.hotkeys = gr;
}
gr.filter = () => true;
function EI(e3, t, r, o) {
  r instanceof Array && (o = r, r = void 0), o = o || [], r = r || {};
  const { preventDefault: a = true } = r, s = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(
    (c, h) => {
      a && c.preventDefault(), setTimeout(() => t(c, h));
    },
    o
  ), l = () => {
    gr.unbind(e3, s);
  };
  qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => (gr(e3, r, s), l), [e3, r, s]);
}
const OI = (e3) => {
  const t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    const r = (o) => {
      t.current && !t.current.contains(o.target) && e3(o);
    };
    return document.addEventListener("click", r, true), () => {
      document.removeEventListener("click", r, true);
    };
  }, [e3]), t;
};
function AI(e3) {
  const t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef();
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    t.current = e3;
  }, [e3]), t.current;
}
function TI(e3) {
  const t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(e3);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    t.current = e3;
  }, [e3]), t;
}
function RI(e3) {
  const t = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(null);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    e3 && (typeof e3 == "function" ? e3(t.current) : e3.current = t.current);
  }), t;
}
function PI(e3) {
  const [t, r] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(e3), o = (s, l) => {
    r((c) => ({
      ...c,
      features: {
        ...c.features,
        [s]: {
          enabled: l
        }
      }
    }));
  }, a = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(
    (...s) => s.every((l) => {
      var c;
      return (c = t.features[l]) == null ? void 0 : c.enabled;
    }),
    [t.features]
  );
  return {
    setFeature: o,
    isFeatureEnabled: a
  };
}
const Am = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.createContext(""), kI = (e3) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Am.Provider, { value: e3.value, children: e3.children }), CI = () => {
  const e3 = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useContext(Am);
  if (typeof e3 != "string")
    throw new Error(
      "Error while calling useIdentity! Context has incorrect type (expected string)"
    );
  return e3;
};
function $I(e3) {
  const [t, r] = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useState(e3), o = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useMemo(() => tC(t, r), []);
  return {
    state: t,
    actions: {
      ...o,
      set: (a) => {
        r(
          typeof a == "function" ? a : (s) => ({
            ...s,
            ...a
          })
        );
      }
    }
  };
}
function tC(e3, t = () => {
}) {
  return Object.keys(e3).reduce(
    (o, a) => ({
      ...o,
      [`set${rt.upperFirst(a)}`]: (s) => t((l) => ({
        ...l,
        [a]: s
      }))
    }),
    {}
  );
}
const II = (e3, t, r = {}) => {
  r = {
    timeout: 200,
    ...r
  };
  const o = qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useRef(), a = () => {
    o.current && (clearTimeout(o.current), o.current = null);
  };
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useCallback(
    (s, ...l) => {
      a(), t && s.detail === 1 && (o.current = setTimeout(() => {
        t(s, ...l);
      }, r.timeout)), s.detail % 2 === 0 && e3(s, ...l);
    },
    [t, e3, r.timeout]
  );
};
function Gr(e3) {
  return typeof e3 == "function";
}
function Tm(e3) {
  var t = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, r = e3(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Fl = Tm(function(e3) {
  return function(r) {
    e3(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(o, a) {
      return a + 1 + ") " + o.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function rc(e3, t) {
  if (e3) {
    var r = e3.indexOf(t);
    0 <= r && e3.splice(r, 1);
  }
}
var Ts = (function() {
  function e3(t) {
    this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return e3.prototype.unsubscribe = function() {
    var t, r, o, a, s;
    if (!this.closed) {
      this.closed = true;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var c = ql(l), h = c.next(); !h.done; h = c.next()) {
              var y = h.value;
              y.remove(this);
            }
          } catch (f) {
            t = { error: f };
          } finally {
            try {
              h && !h.done && (r = c.return) && r.call(c);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          l.remove(this);
      var v = this.initialTeardown;
      if (Gr(v))
        try {
          v();
        } catch (f) {
          s = f instanceof Fl ? f.errors : [f];
        }
      var g = this._finalizers;
      if (g) {
        this._finalizers = null;
        try {
          for (var p = ql(g), w = p.next(); !w.done; w = p.next()) {
            var S = w.value;
            try {
              Ag(S);
            } catch (f) {
              s = s ?? [], f instanceof Fl ? s = os(os([], jl(s)), jl(f.errors)) : s.push(f);
            }
          }
        } catch (f) {
          o = { error: f };
        } finally {
          try {
            w && !w.done && (a = p.return) && a.call(p);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (s)
        throw new Fl(s);
    }
  }, e3.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        Ag(t);
      else {
        if (t instanceof e3) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e3.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e3.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e3.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && rc(r, t);
  }, e3.prototype.remove = function(t) {
    var r = this._finalizers;
    r && rc(r, t), t instanceof e3 && t._removeParent(this);
  }, e3.EMPTY = (function() {
    var t = new e3();
    return t.closed = true, t;
  })(), e3;
})(), Rm = Ts.EMPTY;
function Pm(e3) {
  return e3 instanceof Ts || e3 && "closed" in e3 && Gr(e3.remove) && Gr(e3.add) && Gr(e3.unsubscribe);
}
function Ag(e3) {
  Gr(e3) ? e3() : e3.unsubscribe();
}
var rC = {
  Promise: void 0
}, nC = {
  setTimeout: function(e3, t) {
    for (var r = [], o = 2; o < arguments.length; o++)
      r[o - 2] = arguments[o];
    return setTimeout.apply(void 0, os([e3, t], jl(r)));
  },
  clearTimeout: function(e3) {
    return clearTimeout(e3);
  },
  delegate: void 0
};
function iC(e3) {
  nC.setTimeout(function() {
    throw e3;
  });
}
function Tg() {
}
function es(e3) {
  e3();
}
var km = (function(e3) {
  bs(t, e3);
  function t(r) {
    var o = e3.call(this) || this;
    return o.isStopped = false, r ? (o.destination = r, Pm(r) && r.add(o)) : o.destination = sC, o;
  }
  return t.create = function(r, o, a) {
    return new nc(r, o, a);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = true, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e3.prototype.unsubscribe.call(this), this.destination = null);
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
})(Ts), oC = (function() {
  function e3(t) {
    this.partialObserver = t;
  }
  return e3.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (o) {
        qa(o);
      }
  }, e3.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (o) {
        qa(o);
      }
    else
      qa(t);
  }, e3.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        qa(r);
      }
  }, e3;
})(), nc = (function(e3) {
  bs(t, e3);
  function t(r, o, a) {
    var s = e3.call(this) || this, l;
    return Gr(r) || !r ? l = {
      next: r ?? void 0,
      error: o ?? void 0,
      complete: a ?? void 0
    } : l = r, s.destination = new oC(l), s;
  }
  return t;
})(km);
function qa(e3) {
  iC(e3);
}
function aC(e3) {
  throw e3;
}
var sC = {
  closed: true,
  next: Tg,
  error: aC,
  complete: Tg
}, uC = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function lC(e3) {
  return e3;
}
function cC(e3) {
  return e3.length === 0 ? lC : e3.length === 1 ? e3[0] : function(r) {
    return e3.reduce(function(o, a) {
      return a(o);
    }, r);
  };
}
var Rg = (function() {
  function e3(t) {
    t && (this._subscribe = t);
  }
  return e3.prototype.lift = function(t) {
    var r = new e3();
    return r.source = this, r.operator = t, r;
  }, e3.prototype.subscribe = function(t, r, o) {
    var a = this, s = dC(t) ? t : new nc(t, r, o);
    return es(function() {
      var l = a, c = l.operator, h = l.source;
      s.add(c ? c.call(s, h) : h ? a._subscribe(s) : a._trySubscribe(s));
    }), s;
  }, e3.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e3.prototype.forEach = function(t, r) {
    var o = this;
    return r = Pg(r), new r(function(a, s) {
      var l = new nc({
        next: function(c) {
          try {
            t(c);
          } catch (h) {
            s(h), l.unsubscribe();
          }
        },
        error: s,
        complete: a
      });
      o.subscribe(l);
    });
  }, e3.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e3.prototype[uC] = function() {
    return this;
  }, e3.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return cC(t)(this);
  }, e3.prototype.toPromise = function(t) {
    var r = this;
    return t = Pg(t), new t(function(o, a) {
      var s;
      r.subscribe(function(l) {
        return s = l;
      }, function(l) {
        return a(l);
      }, function() {
        return o(s);
      });
    });
  }, e3.create = function(t) {
    return new e3(t);
  }, e3;
})();
function Pg(e3) {
  var t;
  return (t = e3 ?? rC.Promise) !== null && t !== void 0 ? t : Promise;
}
function fC(e3) {
  return e3 && Gr(e3.next) && Gr(e3.error) && Gr(e3.complete);
}
function dC(e3) {
  return e3 && e3 instanceof km || fC(e3) && Pm(e3);
}
var pC = Tm(function(e3) {
  return function() {
    e3(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Yr = (function(e3) {
  bs(t, e3);
  function t() {
    var r = e3.call(this) || this;
    return r.closed = false, r.currentObservers = null, r.observers = [], r.isStopped = false, r.hasError = false, r.thrownError = null, r;
  }
  return t.prototype.lift = function(r) {
    var o = new kg(this, this);
    return o.operator = r, o;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new pC();
  }, t.prototype.next = function(r) {
    var o = this;
    es(function() {
      var a, s;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var l = ql(o.currentObservers), c = l.next(); !c.done; c = l.next()) {
            var h = c.value;
            h.next(r);
          }
        } catch (y) {
          a = { error: y };
        } finally {
          try {
            c && !c.done && (s = l.return) && s.call(l);
          } finally {
            if (a) throw a.error;
          }
        }
      }
    });
  }, t.prototype.error = function(r) {
    var o = this;
    es(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = true, o.thrownError = r;
        for (var a = o.observers; a.length; )
          a.shift().error(r);
      }
    });
  }, t.prototype.complete = function() {
    var r = this;
    es(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = true;
        for (var o = r.observers; o.length; )
          o.shift().complete();
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
    return this._throwIfClosed(), e3.prototype._trySubscribe.call(this, r);
  }, t.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, t.prototype._innerSubscribe = function(r) {
    var o = this, a = this, s = a.hasError, l = a.isStopped, c = a.observers;
    return s || l ? Rm : (this.currentObservers = null, c.push(r), new Ts(function() {
      o.currentObservers = null, rc(c, r);
    }));
  }, t.prototype._checkFinalizedStatuses = function(r) {
    var o = this, a = o.hasError, s = o.thrownError, l = o.isStopped;
    a ? r.error(s) : l && r.complete();
  }, t.prototype.asObservable = function() {
    var r = new Rg();
    return r.source = this, r;
  }, t.create = function(r, o) {
    return new kg(r, o);
  }, t;
})(Rg), kg = (function(e3) {
  bs(t, e3);
  function t(r, o) {
    var a = e3.call(this) || this;
    return a.destination = r, a.source = o, a;
  }
  return t.prototype.next = function(r) {
    var o, a;
    (a = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || a === void 0 || a.call(o, r);
  }, t.prototype.error = function(r) {
    var o, a;
    (a = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || a === void 0 || a.call(o, r);
  }, t.prototype.complete = function() {
    var r, o;
    (o = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || o === void 0 || o.call(r);
  }, t.prototype._subscribe = function(r) {
    var o, a;
    return (a = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(r)) !== null && a !== void 0 ? a : Rm;
  }, t;
})(Yr), hC = /* @__PURE__ */ ((e3) => (e3.RELOAD = "reload", e3.RECOMPUTE = "recompute", e3))(hC || {}), gC = /* @__PURE__ */ ((e3) => (e3.RENAME = "rename", e3.TYPE_CHANGE = "type-change", e3))(gC || {});
const LI = new Yr(), MI = new Yr(), vC = new Yr();
var mC = /* @__PURE__ */ ((e3) => (e3.SAVE_ALL = "save-all", e3))(mC || {});
const FI = new Yr();
var yC = /* @__PURE__ */ ((e3) => (e3.WILL_SAVE = "will-save", e3.DID_SAVE = "did-save", e3.WILL_CREATE = "will-create", e3.WILL_RENAME = "will-rename", e3.WILL_DELETE = "will-delete", e3.DID_CREATE = "did-create", e3.DID_RENAME = "did-rename", e3.DID_DELETE = "did-delete", e3.DIAGNOSTIC_REFRESH = "diagnostic-refresh", e3))(yC || {});
const NI = new Yr();
var wC = /* @__PURE__ */ ((e3) => (e3.RESEND_BREAKPOINTS = "resend-breakpoints", e3))(wC || {});
const DI = new Yr(), zI = new Yr();
var fs = /* @__PURE__ */ ((e3) => (e3.EVENT_STARTED = "event-started", e3.EVENT_ENDED = "event-ended", e3.EVENT_EMITED = "event-emited", e3.REQUEST_SENT = "request-sent", e3))(fs || {});
const ic = new Yr(), Cm = 31;
var $m = ((e3) => (e3.EMPTY = "Please enter a valid name", e3.LENGTH_EXCEEDED = `The name is too long, it should not exceed ${Cm} characters`, e3.SHOULD_START_WITH_LETTER = "The name can only start with a letter or a Japanese character", e3.INVALID = "Invalid name", e3))($m || {});
function bC(e3) {
  if (e3 === "")
    throw new Error(
      "Please enter a valid name"
      /* EMPTY */
    );
  if (e3.length > Cm)
    throw new Error($m.LENGTH_EXCEEDED);
  if (!/^[a-zA-Z\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF]/.test(e3))
    throw new Error(
      "The name can only start with a letter or a Japanese character"
      /* SHOULD_START_WITH_LETTER */
    );
  if (!/^[\w\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FAF-]+$/i.test(e3))
    throw new Error(
      "Invalid name"
      /* INVALID */
    );
  return true;
}
function WI(e3) {
  if (!e3) return null;
  if (typeof e3 == "string")
    try {
      bC(e3);
    } catch (t) {
      return t.message;
    }
}
function BI(e3, t) {
  let r = "";
  if (["array", "object"].includes(t))
    try {
      const o = JSON.parse(e3);
      t === "array" && (!Array.isArray(o) || !rt.isObject(o)) && (r = `Invalid value for type ${t}`), t === "object" && (!rt.isObject(o) || Array.isArray(o)) && (r = `Invalid value for type ${t}`);
    } catch {
      r = `Invalid value for type ${t}`;
    }
  return t === "date" && (new RegExp(
    /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/
  ).test(e3) || (r = `Invalid value for type ${t}`)), t === "number" && isNaN(+e3) && (r = `Invalid value for type ${t}`), ["boolean", "bool"].includes(t) && typeof e3 != "boolean" && !["true", "false"].includes(e3) && (r = `Invalid value for type ${t}`), r;
}
function zc(e3) {
  const t = new RegExp(
    ':(?!4D\\.\\w+)[CPK]?\\d+(?=(?:[^"{}\\[\\]\\\\]*(?:\\\\.|"(?:[^"{}\\[\\]\\\\]*\\\\.)*[^"{}\\[\\]\\\\]*"))*[^"}\\]]*$)',
    "gm"
  );
  return e3.replace(t, "");
}
var Im = /* @__PURE__ */ ((e3) => (e3.METHODS = "method", e3.WEBFORMS = "webform", e3.CLASSES = "class", e3.WELCOME = "welcome", e3.SETTINGS = "settings", e3.ROOT = "root", e3.REPORTS = "report", e3))(Im || {});
const Ln = {
  CLASSES: "Classes",
  METHODS: "Methods",
  SHARED: "Shared",
  WEBFORMS: "WebForms",
  CLASSES_FOLDER: "ClassesFolder",
  REPORTS: "Reports",
  DEBUGGER: "Debugger"
};
var _t = /* @__PURE__ */ ((e3) => (e3.FOLDER = "folder", e3.WEBFORM = "webform", e3.REPORT = "report", e3.METHOD = "method", e3.CLASS = "class", e3.CLASS_FOLDER = "classfolder", e3.DEBUGGER = "debugger", e3.WELCOME = "welcome", e3.SETTINGS = "settings", e3.METHODS = "method", e3.WEBFORMS = "webform", e3.CLASSES = "class", e3.DEBUGGERS = "debugger", e3.MODELS = "models", e3.ROLES = "roles", e3.HTTP_HANDLERS = "http-handlers", e3.LOCALIZATION = "localization", e3.MODEL = "model", e3.DATA_EXPLORER = "dataexplorer", e3.MOBILE = "mobile", e3.MOBILEFORM = "mform", e3.FILE = "file", e3.TEXT = "text", e3))(_t || {}), Kn = /* @__PURE__ */ ((e3) => (e3.GET_FOLDER = "getFolder", e3.GET = "get", e3.SAVE = "save", e3.RENAME = "rename", e3.DROP = "drop", e3.ADD_FOLDER = "addFolder", e3.CREATE_FOLDER = "mkdir", e3.RENAME_FOLDER = "renameFolder", e3.DROP_FOLDER = "dropFolder", e3.REMOVE_ITEM = "removeItem", e3.MOVE_ITEM = "moveItem", e3.GET_INFO = "getInfo", e3.SAVE_CONTENT = "save", e3.UPDATE_CHECK = "update:check", e3.UPDATE_INSTALL = "update:install", e3.GET_APP_SETTINGS = "getWebServerInfo", e3.GET_FILE_CONTENT = "getFileContent", e3.SET_FILE_CONTENT = "setFileContent", e3.GET_FILES_INFO = "getFilesInfo", e3))(Kn || {}), Lm = /* @__PURE__ */ ((e3) => (e3[e3.DISABLED = 0] = "DISABLED", e3[e3.ENABLED = 1] = "ENABLED", e3))(Lm || {});
const SC = "roles.json", xC = "qodlyApp.json", UI = "model.4DModel", _C = "HTTPHandlers.json", EC = "Shared/i18n.json";
function HI(e3) {
  const t = Mm(e3);
  switch (t) {
    case _t.SETTINGS:
      return {
        filename: "Settings",
        type: t
      };
    case _t.HTTP_HANDLERS:
      return {
        filename: "HTTP Handlers",
        type: t
      };
    case _t.ROLES:
      return {
        filename: "Roles & Privileges",
        type: t
      };
    case _t.LOCALIZATION:
      return {
        filename: "Localization",
        type: t
      };
    default: {
      const r = e3.split("/"), [o] = r[1].split(".");
      return {
        filename: o,
        type: t
      };
    }
  }
}
function Mm(e3) {
  const t = e3.split("."), r = t.pop(), o = t.join(".").split("/")[0];
  switch (true) {
    case r === "4DModel":
      return _t.MODEL;
    case r === "WebForm":
      return _t.WEBFORM;
    case (["4dm", "4qs", "4qm"].includes(r) && o === Ln.METHODS):
      return _t.METHOD;
    case (["4dm", "4qs", "4qm"].includes(r) && o === Ln.CLASSES):
      return _t.CLASS;
    case e3 === SC:
      return _t.ROLES;
    case e3 === _C:
      return _t.HTTP_HANDLERS;
    case e3 === xC:
      return _t.SETTINGS;
    case e3 === EC:
      return _t.LOCALIZATION;
    default:
      return _t.TEXT;
  }
}
function qI(e3, t = false) {
  switch (e3) {
    case Ln.REPORTS:
    case "report":
      return "QoDoc";
    case Ln.WEBFORMS:
    case "webform":
      return "WebForm";
    case "Mobile":
    case "mform":
      return "MForm";
    case "class":
    case "method":
    case Ln.CLASSES:
    case Ln.METHODS:
      return t ? "4qs" : "4dm";
    default:
      return "";
  }
}
function jI(e3, t = "") {
  const r = new RegExp("(?<=\\/)(\\w+)(?=\\.)").exec(e3);
  return r ? r[1] : t;
}
class OC {
  constructor() {
    this.current = Promise.resolve();
  }
  lock() {
    let t;
    const r = new Promise((a) => {
      t = a;
    }), o = this.current.then(() => t);
    return this.current = r, o;
  }
}
function Fm() {
  const e3 = new OC();
  return async (t) => {
    const r = await e3.lock();
    try {
      const o = await t();
      return r(), o;
    } catch (o) {
      console.error(o), r();
      return;
    }
  };
}
const AC = rt.curry(
  (e3, t, r) => e3 && rt.get(r, e3) === t
), ZI = rt.curry((e3, t, r) => rt.get(r, e3) !== t), GI = rt.curry((e3, t) => rt.get(t, "id") !== e3), KI = rt.curry((e3, t) => rt.get(t, "id") === e3), VI = rt.curry((e3, t) => rt.get(t, "path") === e3);
function YI(e3 = "id", t, r) {
  return r.findIndex(AC(e3, t)) !== -1;
}
function XI(e3) {
  if (!e3) return "";
  const { id: t, namespace: r } = e3;
  return r && t ? `${r}:${t}` : t;
}
function TC(e3) {
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
  ].includes(e3.type || "");
}
function JI(e3) {
  return e3.type === "object";
}
function RC(e3) {
  var t;
  return e3.kind === "relatedEntities" || ((t = e3.type) == null ? void 0 : t.includes("Selection")) || e3.behavior === "relatedEntities";
}
function PC(e3) {
  return e3.kind === "relatedEntity" || e3.behavior === "relatedEntity" || !TC(e3);
}
function QI(e3) {
  return RC(e3) || PC(e3);
}
function e2(e3) {
  return e3.applyTo === "dataStore";
}
function t2(e3) {
  return e3.applyTo === "dataClass";
}
function r2(e3) {
  return e3.applyTo === "entity";
}
function n2(e3) {
  return e3.applyTo === "entityCollection";
}
function i2(e3) {
  return e3.type === "entity";
}
function o2(e3) {
  return e3.type === "entitysel";
}
function kC(e3) {
  return e3.dataType === "array";
}
function CC(e3) {
  return e3.dataType === "object";
}
function $C(e3) {
  return e3.type === "scalar";
}
function a2(e3) {
  return kC(e3) || CC(e3) || $C(e3);
}
const s2 = (e3) => e3 != null && e3.type === "entity", u2 = (e3) => e3.type === "entitysel", l2 = (e3) => e3.type === "array" || e3.type === "scalar" && e3.dataType === "array", c2 = (e3) => e3.type === "object" || e3.type === "scalar" && e3.dataType === "object", f2 = (e3) => e3.type === "scalar" && e3.dataType === "date";
function d2() {
  return new Promise((e3, t) => {
    window.addEventListener("bundle:ready", (r) => r.data ? e3() : t(r.caughtErr));
  });
}
function p2() {
  return new Promise((e3) => {
    window.addEventListener("i18n:ready", () => e3());
  });
}
var ds = /* @__PURE__ */ ((e3) => (e3.capable = "capable", e3.incapable = "incapable", e3.indifferent = "indifferent", e3))(ds || {}), IC = /* @__PURE__ */ ((e3) => (e3.soap = "soap", e3.web = "web", e3.sql = "sql", e3.rest = "rest", e3))(IC || {}), Nm = /* @__PURE__ */ ((e3) => (e3.table = "table", e3.catalog = "catalog", e3.currentRecord = "currentRecord", e3.currentSelection = "currentSelection", e3))(Nm || {});
const h2 = {
  publishedSoap: "soap",
  publishedWeb: "web",
  publishedSql: "sql",
  publishedRest: "rest"
  /* rest */
};
function g2(e3) {
  var s;
  let t = {};
  try {
    const l = ((s = e3.match(/\/\/%attributes = (.*)/)) == null ? void 0 : s[1]) || "";
    t = JSON.parse(l);
  } catch {
  }
  const { published4DMobile: r, ...o } = t;
  return {
    ...{
      invisible: false,
      shared: false,
      executedOnServer: false,
      preemptive: ds.indifferent,
      publishedSoap: false,
      publishedWsdl: false,
      publishedWeb: false,
      publishedSql: false,
      publishedRest: !!r,
      publishedRestOptions: r || {
        table: "",
        scope: Nm.table
      }
    },
    ...o
  };
}
function LC(e3) {
  const t = {};
  return e3.invisible && (t.invisible = true), e3.shared && (t.shared = true), e3.executedOnServer && (t.executedOnServer = true), e3.preemptive && [ds.capable, ds.incapable].includes(e3.preemptive) && (t.preemptive = e3.preemptive), e3.publishedSoap && (t.publishedSoap = true, e3.publishedWsdl && (t.publishedWsdl = true)), e3.publishedWeb && (t.publishedWeb = true), e3.publishedSql && (t.publishedSql = true), e3.publishedRest && e3.publishedRestOptions && (t.published4DMobile = e3.publishedRestOptions), JSON.stringify(t).replace(/"(true|false)"/g, "$1");
}
function v2(e3, t, r = false) {
  const o = rt.isString(t) ? t : LC(t);
  if (!r && MC(e3))
    return e3;
  const a = FC(e3);
  return `//%attributes = ${o}\r
${a}`;
}
function MC(e3) {
  return /^\/\/%attributes.*(?:\r\n|\n)?/g.test(e3);
}
function FC(e3) {
  return e3.replace(/^\/\/%attributes.*(?:\r\n|\n)?/g, "");
}
const m2 = () => wc.uuid().replaceAll("-", "").toUpperCase(), lt = "/rest/$designer", Rs = "/rest/$designer-ext";
function y2(...e3) {
  return (t) => {
    if (e3.length === 0)
      return t;
    const r = { ...t };
    return e3.forEach((o) => {
      typeof r[o] == "string" && (r[o] = new Date(r[o]));
    }), r;
  };
}
class Cg extends Error {
  constructor(t, r, o) {
    super(), this.url = t, this.response = r, this.data = o;
  }
  log() {
    console.error("Error while sending the request", this);
  }
}
async function Ne(e3, t) {
  var a;
  ic.next({ action: fs.REQUEST_SENT });
  const r = await window.fetch(e3, t);
  if (/401/.test(r.status.toString()) && (window.location.href = "/login.html?redirect=studio"), /^[45]/.test(r.status.toString())) {
    let s;
    try {
      const l = await r.json();
      ((a = l == null ? void 0 : l.__ERROR) == null ? void 0 : a.some(
        (h) => h.errCode === 1651
      )) && ic.next({
        action: fs.EVENT_EMITED,
        payload: {
          eventName: "onsessionexpired"
        }
      }), s = new Cg(e3, r, l);
    } catch {
      s = new Cg(e3, r);
    }
    throw s.log(), s;
  }
  return await r.json();
}
function w2(e3) {
  return ic.next({ action: fs.REQUEST_SENT }), e3;
}
var Er = {}, vt = {}, $g;
function Mn() {
  if ($g) return vt;
  $g = 1;
  var e3 = vt.ValidationError = function(f, b, d, x, _, R) {
    if (Array.isArray(x) ? (this.path = x, this.property = x.reduce(function(C, W) {
      return C + c(W);
    }, "instance")) : x !== void 0 && (this.property = x), f && (this.message = f), d) {
      var A = d.$id || d.id;
      this.schema = A || d;
    }
    b !== void 0 && (this.instance = b), this.name = _, this.argument = R, this.stack = this.toString();
  };
  e3.prototype.toString = function() {
    return this.property + " " + this.message;
  };
  var t = vt.ValidatorResult = function(f, b, d, x) {
    this.instance = f, this.schema = b, this.options = d, this.path = x.path, this.propertyPath = x.propertyPath, this.errors = [], this.throwError = d && d.throwError, this.throwFirst = d && d.throwFirst, this.throwAll = d && d.throwAll, this.disableFormat = d && d.disableFormat === true;
  };
  t.prototype.addError = function(f) {
    var b;
    if (typeof f == "string")
      b = new e3(f, this.instance, this.schema, this.path);
    else {
      if (!f) throw new Error("Missing error detail");
      if (!f.message) throw new Error("Missing error message");
      if (!f.name) throw new Error("Missing validator type");
      b = new e3(f.message, this.instance, this.schema, this.path, f.name, f.argument);
    }
    if (this.errors.push(b), this.throwFirst)
      throw new o(this);
    if (this.throwError)
      throw b;
    return b;
  }, t.prototype.importErrors = function(f) {
    typeof f == "string" || f && f.validatorType ? this.addError(f) : f && f.errors && (this.errors = this.errors.concat(f.errors));
  };
  function r(S, f) {
    return f + ": " + S.toString() + `
`;
  }
  t.prototype.toString = function(f) {
    return this.errors.map(r).join("");
  }, Object.defineProperty(t.prototype, "valid", { get: function() {
    return !this.errors.length;
  } }), vt.ValidatorResultError = o;
  function o(S) {
    typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, o), this.instance = S.instance, this.schema = S.schema, this.options = S.options, this.errors = S.errors;
  }
  o.prototype = new Error(), o.prototype.constructor = o, o.prototype.name = "Validation Error";
  var a = vt.SchemaError = function S(f, b) {
    this.message = f, this.schema = b, Error.call(this, f), typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, S);
  };
  a.prototype = Object.create(
    Error.prototype,
    {
      constructor: { value: a, enumerable: false },
      name: { value: "SchemaError", enumerable: false }
    }
  );
  var s = vt.SchemaContext = function(f, b, d, x, _) {
    this.schema = f, this.options = b, Array.isArray(d) ? (this.path = d, this.propertyPath = d.reduce(function(R, A) {
      return R + c(A);
    }, "instance")) : this.propertyPath = d, this.base = x, this.schemas = _;
  };
  s.prototype.resolve = function(f) {
    return w(this.base, f);
  }, s.prototype.makeChild = function(f, b) {
    var d = b === void 0 ? this.path : this.path.concat([b]), x = f.$id || f.id;
    let _ = w(this.base, x || "");
    var R = new s(f, this.options, d, _, Object.create(this.schemas));
    return x && !R.schemas[_] && (R.schemas[_] = f), R;
  };
  var l = vt.FORMAT_REGEXPS = {
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
    "utc-millisec": function(S) {
      return typeof S == "string" && parseFloat(S) === parseInt(S, 10) && !isNaN(S);
    },
    // 7.3.8. regex
    regex: function(S) {
      var f = true;
      try {
        new RegExp(S);
      } catch {
        f = false;
      }
      return f;
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
  l.regexp = l.regex, l.pattern = l.regex, l.ipv4 = l["ip-address"], vt.isFormat = function(f, b, d) {
    if (typeof f == "string" && l[b] !== void 0) {
      if (l[b] instanceof RegExp)
        return l[b].test(f);
      if (typeof l[b] == "function")
        return l[b](f);
    } else if (d && d.customFormats && typeof d.customFormats[b] == "function")
      return d.customFormats[b](f);
    return true;
  };
  var c = vt.makeSuffix = function(f) {
    return f = f.toString(), !f.match(/[.\s\[\]]/) && !f.match(/^[\d]/) ? "." + f : f.match(/^\d+$/) ? "[" + f + "]" : "[" + JSON.stringify(f) + "]";
  };
  vt.deepCompareStrict = function S(f, b) {
    if (typeof f != typeof b)
      return false;
    if (Array.isArray(f))
      return !Array.isArray(b) || f.length !== b.length ? false : f.every(function(_, R) {
        return S(f[R], b[R]);
      });
    if (typeof f == "object") {
      if (!f || !b)
        return f === b;
      var d = Object.keys(f), x = Object.keys(b);
      return d.length !== x.length ? false : d.every(function(_) {
        return S(f[_], b[_]);
      });
    }
    return f === b;
  };
  function h(S, f, b, d) {
    typeof b == "object" ? f[d] = g(S[d], b) : S.indexOf(b) === -1 && f.push(b);
  }
  function y(S, f, b) {
    f[b] = S[b];
  }
  function v(S, f, b, d) {
    typeof f[d] != "object" || !f[d] ? b[d] = f[d] : S[d] ? b[d] = g(S[d], f[d]) : b[d] = f[d];
  }
  function g(S, f) {
    var b = Array.isArray(f), d = b && [] || {};
    return b ? (S = S || [], d = d.concat(S), f.forEach(h.bind(null, S, d))) : (S && typeof S == "object" && Object.keys(S).forEach(y.bind(null, S, d)), Object.keys(f).forEach(v.bind(null, S, f, d))), d;
  }
  vt.deepMerge = g, vt.objectGetPath = function(f, b) {
    for (var d = b.split("/").slice(1), x; typeof (x = d.shift()) == "string"; ) {
      var _ = decodeURIComponent(x.replace(/~0/, "~").replace(/~1/g, "/"));
      if (!(_ in f)) return;
      f = f[_];
    }
    return f;
  };
  function p(S) {
    return "/" + encodeURIComponent(S).replace(/~/g, "%7E");
  }
  vt.encodePath = function(f) {
    return f.map(p).join("");
  }, vt.getDecimalPlaces = function(f) {
    var b = 0;
    if (isNaN(f)) return b;
    typeof f != "number" && (f = Number(f));
    var d = f.toString().split("e");
    if (d.length === 2) {
      if (d[1][0] !== "-")
        return b;
      b = Number(d[1].slice(1));
    }
    var x = d[0].split(".");
    return x.length === 2 && (b += x[1].length), b;
  }, vt.isSchema = function(f) {
    return typeof f == "object" && f || typeof f == "boolean";
  };
  var w = vt.resolveUrl = function(f, b) {
    const d = new URL(b, new URL(f, "resolve://"));
    if (d.protocol === "resolve:") {
      const { pathname: x, search: _, hash: R } = d;
      return x + _ + R;
    }
    return d.toString();
  };
  return vt;
}
var Nl, Ig;
function NC() {
  if (Ig) return Nl;
  Ig = 1;
  var e3 = Mn(), t = e3.ValidatorResult, r = e3.SchemaError, o = {};
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
  a.type = function(g, p, w, S) {
    if (g === void 0)
      return null;
    var f = new t(g, p, w, S), b = Array.isArray(p.type) ? p.type : [p.type];
    if (!b.some(this.testType.bind(this, g, p, w, S))) {
      var d = b.map(function(x) {
        if (x) {
          var _ = x.$id || x.id;
          return _ ? "<" + _ + ">" : x + "";
        }
      });
      f.addError({
        name: "type",
        argument: d,
        message: "is not of a type(s) " + d
      });
    }
    return f;
  };
  function s(v, g, p, w, S) {
    var f = g.throwError, b = g.throwAll;
    g.throwError = false, g.throwAll = false;
    var d = this.validateSchema(v, S, g, p);
    return g.throwError = f, g.throwAll = b, !d.valid && w instanceof Function && w(d), d.valid;
  }
  a.anyOf = function(g, p, w, S) {
    if (g === void 0)
      return null;
    var f = new t(g, p, w, S), b = new t(g, p, w, S);
    if (!Array.isArray(p.anyOf))
      throw new r("anyOf must be an array");
    if (!p.anyOf.some(
      s.bind(
        this,
        g,
        w,
        S,
        function(x) {
          b.importErrors(x);
        }
      )
    )) {
      var d = p.anyOf.map(function(x, _) {
        var R = x.$id || x.id;
        return R ? "<" + R + ">" : x.title && JSON.stringify(x.title) || x.$ref && "<" + x.$ref + ">" || "[subschema " + _ + "]";
      });
      w.nestedErrors && f.importErrors(b), f.addError({
        name: "anyOf",
        argument: d,
        message: "is not any of " + d.join(",")
      });
    }
    return f;
  }, a.allOf = function(g, p, w, S) {
    if (g === void 0)
      return null;
    if (!Array.isArray(p.allOf))
      throw new r("allOf must be an array");
    var f = new t(g, p, w, S), b = this;
    return p.allOf.forEach(function(d, x) {
      var _ = b.validateSchema(g, d, w, S);
      if (!_.valid) {
        var R = d.$id || d.id, A = R || d.title && JSON.stringify(d.title) || d.$ref && "<" + d.$ref + ">" || "[subschema " + x + "]";
        f.addError({
          name: "allOf",
          argument: { id: A, length: _.errors.length, valid: _ },
          message: "does not match allOf schema " + A + " with " + _.errors.length + " error[s]:"
        }), f.importErrors(_);
      }
    }), f;
  }, a.oneOf = function(g, p, w, S) {
    if (g === void 0)
      return null;
    if (!Array.isArray(p.oneOf))
      throw new r("oneOf must be an array");
    var f = new t(g, p, w, S), b = new t(g, p, w, S), d = p.oneOf.filter(
      s.bind(
        this,
        g,
        w,
        S,
        function(_) {
          b.importErrors(_);
        }
      )
    ).length, x = p.oneOf.map(function(_, R) {
      var A = _.$id || _.id;
      return A || _.title && JSON.stringify(_.title) || _.$ref && "<" + _.$ref + ">" || "[subschema " + R + "]";
    });
    return d !== 1 && (w.nestedErrors && f.importErrors(b), f.addError({
      name: "oneOf",
      argument: x,
      message: "is not exactly one from " + x.join(",")
    })), f;
  }, a.if = function(g, p, w, S) {
    if (g === void 0) return null;
    if (!e3.isSchema(p.if)) throw new Error('Expected "if" keyword to be a schema');
    var f = s.call(this, g, w, S, null, p.if), b = new t(g, p, w, S), d;
    if (f) {
      if (p.then === void 0) return;
      if (!e3.isSchema(p.then)) throw new Error('Expected "then" keyword to be a schema');
      d = this.validateSchema(g, p.then, w, S.makeChild(p.then)), b.importErrors(d);
    } else {
      if (p.else === void 0) return;
      if (!e3.isSchema(p.else)) throw new Error('Expected "else" keyword to be a schema');
      d = this.validateSchema(g, p.else, w, S.makeChild(p.else)), b.importErrors(d);
    }
    return b;
  };
  function l(v, g) {
    if (Object.hasOwnProperty.call(v, g)) return v[g];
    if (g in v) {
      for (; v = Object.getPrototypeOf(v); )
        if (Object.propertyIsEnumerable.call(v, g)) return v[g];
    }
  }
  a.propertyNames = function(g, p, w, S) {
    if (this.types.object(g)) {
      var f = new t(g, p, w, S), b = p.propertyNames !== void 0 ? p.propertyNames : {};
      if (!e3.isSchema(b)) throw new r('Expected "propertyNames" to be a schema (object or boolean)');
      for (var d in g)
        if (l(g, d) !== void 0) {
          var x = this.validateSchema(d, b, w, S.makeChild(b));
          f.importErrors(x);
        }
      return f;
    }
  }, a.properties = function(g, p, w, S) {
    if (this.types.object(g)) {
      var f = new t(g, p, w, S), b = p.properties || {};
      for (var d in b) {
        var x = b[d];
        if (x !== void 0) {
          if (x === null)
            throw new r('Unexpected null, expected schema in "properties"');
          typeof w.preValidateProperty == "function" && w.preValidateProperty(g, d, x, w, S);
          var _ = l(g, d), R = this.validateSchema(_, x, w, S.makeChild(x, d));
          R.instance !== f.instance[d] && (f.instance[d] = R.instance), f.importErrors(R);
        }
      }
      return f;
    }
  };
  function c(v, g, p, w, S, f) {
    if (this.types.object(v) && !(g.properties && g.properties[S] !== void 0))
      if (g.additionalProperties === false)
        f.addError({
          name: "additionalProperties",
          argument: S,
          message: "is not allowed to have the additional property " + JSON.stringify(S)
        });
      else {
        var b = g.additionalProperties || {};
        typeof p.preValidateProperty == "function" && p.preValidateProperty(v, S, b, p, w);
        var d = this.validateSchema(v[S], b, p, w.makeChild(b, S));
        d.instance !== f.instance[S] && (f.instance[S] = d.instance), f.importErrors(d);
      }
  }
  a.patternProperties = function(g, p, w, S) {
    if (this.types.object(g)) {
      var f = new t(g, p, w, S), b = p.patternProperties || {};
      for (var d in g) {
        var x = true;
        for (var _ in b) {
          var R = b[_];
          if (R !== void 0) {
            if (R === null)
              throw new r('Unexpected null, expected schema in "patternProperties"');
            try {
              var A = new RegExp(_, "u");
            } catch {
              A = new RegExp(_);
            }
            if (A.test(d)) {
              x = false, typeof w.preValidateProperty == "function" && w.preValidateProperty(g, d, R, w, S);
              var C = this.validateSchema(g[d], R, w, S.makeChild(R, d));
              C.instance !== f.instance[d] && (f.instance[d] = C.instance), f.importErrors(C);
            }
          }
        }
        x && c.call(this, g, p, w, S, d, f);
      }
      return f;
    }
  }, a.additionalProperties = function(g, p, w, S) {
    if (this.types.object(g)) {
      if (p.patternProperties)
        return null;
      var f = new t(g, p, w, S);
      for (var b in g)
        c.call(this, g, p, w, S, b, f);
      return f;
    }
  }, a.minProperties = function(g, p, w, S) {
    if (this.types.object(g)) {
      var f = new t(g, p, w, S), b = Object.keys(g);
      return b.length >= p.minProperties || f.addError({
        name: "minProperties",
        argument: p.minProperties,
        message: "does not meet minimum property length of " + p.minProperties
      }), f;
    }
  }, a.maxProperties = function(g, p, w, S) {
    if (this.types.object(g)) {
      var f = new t(g, p, w, S), b = Object.keys(g);
      return b.length <= p.maxProperties || f.addError({
        name: "maxProperties",
        argument: p.maxProperties,
        message: "does not meet maximum property length of " + p.maxProperties
      }), f;
    }
  }, a.items = function(g, p, w, S) {
    var f = this;
    if (this.types.array(g) && p.items !== void 0) {
      var b = new t(g, p, w, S);
      return g.every(function(d, x) {
        if (Array.isArray(p.items))
          var _ = p.items[x] === void 0 ? p.additionalItems : p.items[x];
        else
          var _ = p.items;
        if (_ === void 0)
          return true;
        if (_ === false)
          return b.addError({
            name: "items",
            message: "additionalItems not permitted"
          }), false;
        var R = f.validateSchema(d, _, w, S.makeChild(_, x));
        return R.instance !== b.instance[x] && (b.instance[x] = R.instance), b.importErrors(R), true;
      }), b;
    }
  }, a.contains = function(g, p, w, S) {
    var f = this;
    if (this.types.array(g) && p.contains !== void 0) {
      if (!e3.isSchema(p.contains)) throw new Error('Expected "contains" keyword to be a schema');
      var b = new t(g, p, w, S), d = g.some(function(x, _) {
        var R = f.validateSchema(x, p.contains, w, S.makeChild(p.contains, _));
        return R.errors.length === 0;
      });
      return d === false && b.addError({
        name: "contains",
        argument: p.contains,
        message: "must contain an item matching given schema"
      }), b;
    }
  }, a.minimum = function(g, p, w, S) {
    if (this.types.number(g)) {
      var f = new t(g, p, w, S);
      return p.exclusiveMinimum && p.exclusiveMinimum === true ? g > p.minimum || f.addError({
        name: "minimum",
        argument: p.minimum,
        message: "must be greater than " + p.minimum
      }) : g >= p.minimum || f.addError({
        name: "minimum",
        argument: p.minimum,
        message: "must be greater than or equal to " + p.minimum
      }), f;
    }
  }, a.maximum = function(g, p, w, S) {
    if (this.types.number(g)) {
      var f = new t(g, p, w, S);
      return p.exclusiveMaximum && p.exclusiveMaximum === true ? g < p.maximum || f.addError({
        name: "maximum",
        argument: p.maximum,
        message: "must be less than " + p.maximum
      }) : g <= p.maximum || f.addError({
        name: "maximum",
        argument: p.maximum,
        message: "must be less than or equal to " + p.maximum
      }), f;
    }
  }, a.exclusiveMinimum = function(g, p, w, S) {
    if (typeof p.exclusiveMinimum != "boolean" && this.types.number(g)) {
      var f = new t(g, p, w, S), b = g > p.exclusiveMinimum;
      return b || f.addError({
        name: "exclusiveMinimum",
        argument: p.exclusiveMinimum,
        message: "must be strictly greater than " + p.exclusiveMinimum
      }), f;
    }
  }, a.exclusiveMaximum = function(g, p, w, S) {
    if (typeof p.exclusiveMaximum != "boolean" && this.types.number(g)) {
      var f = new t(g, p, w, S), b = g < p.exclusiveMaximum;
      return b || f.addError({
        name: "exclusiveMaximum",
        argument: p.exclusiveMaximum,
        message: "must be strictly less than " + p.exclusiveMaximum
      }), f;
    }
  };
  var h = function(g, p, w, S, f, b) {
    if (this.types.number(g)) {
      var d = p[f];
      if (d == 0)
        throw new r(f + " cannot be zero");
      var x = new t(g, p, w, S), _ = e3.getDecimalPlaces(g), R = e3.getDecimalPlaces(d), A = Math.max(_, R), C = Math.pow(10, A);
      return Math.round(g * C) % Math.round(d * C) !== 0 && x.addError({
        name: f,
        argument: d,
        message: b + JSON.stringify(d)
      }), x;
    }
  };
  a.multipleOf = function(g, p, w, S) {
    return h.call(this, g, p, w, S, "multipleOf", "is not a multiple of (divisible by) ");
  }, a.divisibleBy = function(g, p, w, S) {
    return h.call(this, g, p, w, S, "divisibleBy", "is not divisible by (multiple of) ");
  }, a.required = function(g, p, w, S) {
    var f = new t(g, p, w, S);
    return g === void 0 && p.required === true ? f.addError({
      name: "required",
      message: "is required"
    }) : this.types.object(g) && Array.isArray(p.required) && p.required.forEach(function(b) {
      l(g, b) === void 0 && f.addError({
        name: "required",
        argument: b,
        message: "requires property " + JSON.stringify(b)
      });
    }), f;
  }, a.pattern = function(g, p, w, S) {
    if (this.types.string(g)) {
      var f = new t(g, p, w, S), b = p.pattern;
      try {
        var d = new RegExp(b, "u");
      } catch {
        d = new RegExp(b);
      }
      return g.match(d) || f.addError({
        name: "pattern",
        argument: p.pattern,
        message: "does not match pattern " + JSON.stringify(p.pattern.toString())
      }), f;
    }
  }, a.format = function(g, p, w, S) {
    if (g !== void 0) {
      var f = new t(g, p, w, S);
      return !f.disableFormat && !e3.isFormat(g, p.format, this) && f.addError({
        name: "format",
        argument: p.format,
        message: "does not conform to the " + JSON.stringify(p.format) + " format"
      }), f;
    }
  }, a.minLength = function(g, p, w, S) {
    if (this.types.string(g)) {
      var f = new t(g, p, w, S), b = g.match(/[\uDC00-\uDFFF]/g), d = g.length - (b ? b.length : 0);
      return d >= p.minLength || f.addError({
        name: "minLength",
        argument: p.minLength,
        message: "does not meet minimum length of " + p.minLength
      }), f;
    }
  }, a.maxLength = function(g, p, w, S) {
    if (this.types.string(g)) {
      var f = new t(g, p, w, S), b = g.match(/[\uDC00-\uDFFF]/g), d = g.length - (b ? b.length : 0);
      return d <= p.maxLength || f.addError({
        name: "maxLength",
        argument: p.maxLength,
        message: "does not meet maximum length of " + p.maxLength
      }), f;
    }
  }, a.minItems = function(g, p, w, S) {
    if (this.types.array(g)) {
      var f = new t(g, p, w, S);
      return g.length >= p.minItems || f.addError({
        name: "minItems",
        argument: p.minItems,
        message: "does not meet minimum length of " + p.minItems
      }), f;
    }
  }, a.maxItems = function(g, p, w, S) {
    if (this.types.array(g)) {
      var f = new t(g, p, w, S);
      return g.length <= p.maxItems || f.addError({
        name: "maxItems",
        argument: p.maxItems,
        message: "does not meet maximum length of " + p.maxItems
      }), f;
    }
  };
  function y(v, g, p) {
    var w, S = p.length;
    for (w = g + 1, S; w < S; w++)
      if (e3.deepCompareStrict(v, p[w]))
        return false;
    return true;
  }
  return a.uniqueItems = function(g, p, w, S) {
    if (p.uniqueItems === true && this.types.array(g)) {
      var f = new t(g, p, w, S);
      return g.every(y) || f.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
      }), f;
    }
  }, a.dependencies = function(g, p, w, S) {
    if (this.types.object(g)) {
      var f = new t(g, p, w, S);
      for (var b in p.dependencies)
        if (g[b] !== void 0) {
          var d = p.dependencies[b], x = S.makeChild(d, b);
          if (typeof d == "string" && (d = [d]), Array.isArray(d))
            d.forEach(function(R) {
              g[R] === void 0 && f.addError({
                // FIXME there's two different "dependencies" errors here with slightly different outputs
                // Can we make these the same? Or should we create different error types?
                name: "dependencies",
                argument: x.propertyPath,
                message: "property " + R + " not found, required by " + x.propertyPath
              });
            });
          else {
            var _ = this.validateSchema(g, d, w, x);
            f.instance !== _.instance && (f.instance = _.instance), _ && _.errors.length && (f.addError({
              name: "dependencies",
              argument: x.propertyPath,
              message: "does not meet dependency required by " + x.propertyPath
            }), f.importErrors(_));
          }
        }
      return f;
    }
  }, a.enum = function(g, p, w, S) {
    if (g === void 0)
      return null;
    if (!Array.isArray(p.enum))
      throw new r("enum expects an array", p);
    var f = new t(g, p, w, S);
    return p.enum.some(e3.deepCompareStrict.bind(null, g)) || f.addError({
      name: "enum",
      argument: p.enum,
      message: "is not one of enum values: " + p.enum.map(String).join(",")
    }), f;
  }, a.const = function(g, p, w, S) {
    if (g === void 0)
      return null;
    var f = new t(g, p, w, S);
    return e3.deepCompareStrict(p.const, g) || f.addError({
      name: "const",
      argument: p.const,
      message: "does not exactly match expected constant: " + p.const
    }), f;
  }, a.not = a.disallow = function(g, p, w, S) {
    var f = this;
    if (g === void 0) return null;
    var b = new t(g, p, w, S), d = p.not || p.disallow;
    return d ? (Array.isArray(d) || (d = [d]), d.forEach(function(x) {
      if (f.testType(g, p, w, S, x)) {
        var _ = x && (x.$id || x.id), R = _ || x;
        b.addError({
          name: "not",
          argument: R,
          message: "is of prohibited type " + R
        });
      }
    }), b) : null;
  }, Nl = o, Nl;
}
var ja = {}, Lg;
function oc() {
  if (Lg) return ja;
  Lg = 1;
  var e3 = Mn();
  ja.SchemaScanResult = t;
  function t(r, o) {
    this.id = r, this.ref = o;
  }
  return ja.scan = function(o, a) {
    function s(v, g) {
      if (!g || typeof g != "object") return;
      if (g.$ref) {
        let f = e3.resolveUrl(v, g.$ref);
        y[f] = y[f] ? y[f] + 1 : 0;
        return;
      }
      var p = g.$id || g.id;
      let w = e3.resolveUrl(v, p);
      var S = p ? w : v;
      if (S) {
        if (S.indexOf("#") < 0 && (S += "#"), h[S]) {
          if (!e3.deepCompareStrict(h[S], g))
            throw new Error("Schema <" + S + "> already exists with different definition");
          return h[S];
        }
        h[S] = g, S[S.length - 1] == "#" && (h[S.substring(0, S.length - 1)] = g);
      }
      l(S + "/items", Array.isArray(g.items) ? g.items : [g.items]), l(S + "/extends", Array.isArray(g.extends) ? g.extends : [g.extends]), s(S + "/additionalItems", g.additionalItems), c(S + "/properties", g.properties), s(S + "/additionalProperties", g.additionalProperties), c(S + "/definitions", g.definitions), c(S + "/patternProperties", g.patternProperties), c(S + "/dependencies", g.dependencies), l(S + "/disallow", g.disallow), l(S + "/allOf", g.allOf), l(S + "/anyOf", g.anyOf), l(S + "/oneOf", g.oneOf), s(S + "/not", g.not);
    }
    function l(v, g) {
      if (Array.isArray(g))
        for (var p = 0; p < g.length; p++)
          s(v + "/" + p, g[p]);
    }
    function c(v, g) {
      if (!(!g || typeof g != "object"))
        for (var p in g)
          s(v + "/" + p, g[p]);
    }
    var h = {}, y = {};
    return s(o, a), new t(h, y);
  }, ja;
}
var Dl, Mg;
function DC() {
  if (Mg) return Dl;
  Mg = 1;
  var e3 = NC(), t = Mn(), r = oc().scan, o = t.ValidatorResult, a = t.ValidatorResultError, s = t.SchemaError, l = t.SchemaContext, c = "/", h = function g() {
    this.customFormats = Object.create(g.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(v), this.attributes = Object.create(e3.validators);
  };
  h.prototype.customFormats = {}, h.prototype.schemas = null, h.prototype.types = null, h.prototype.attributes = null, h.prototype.unresolvedRefs = null, h.prototype.addSchema = function(p, w) {
    var S = this;
    if (!p)
      return null;
    var f = r(w || c, p), b = w || p.$id || p.id;
    for (var d in f.id)
      this.schemas[d] = f.id[d];
    for (var d in f.ref)
      this.unresolvedRefs.push(d);
    return this.unresolvedRefs = this.unresolvedRefs.filter(function(x) {
      return typeof S.schemas[x] > "u";
    }), this.schemas[b];
  }, h.prototype.addSubSchemaArray = function(p, w) {
    if (Array.isArray(w))
      for (var S = 0; S < w.length; S++)
        this.addSubSchema(p, w[S]);
  }, h.prototype.addSubSchemaObject = function(p, w) {
    if (!(!w || typeof w != "object"))
      for (var S in w)
        this.addSubSchema(p, w[S]);
  }, h.prototype.setSchemas = function(p) {
    this.schemas = p;
  }, h.prototype.getSchema = function(p) {
    return this.schemas[p];
  }, h.prototype.validate = function(p, w, S, f) {
    if (typeof w != "boolean" && typeof w != "object" || w === null)
      throw new s("Expected `schema` to be an object or boolean");
    S || (S = {});
    var b = w.$id || w.id;
    let d = t.resolveUrl(S.base, b || "");
    if (!f) {
      f = new l(w, S, [], d, Object.create(this.schemas)), f.schemas[d] || (f.schemas[d] = w);
      var x = r(d, w);
      for (var _ in x.id) {
        var R = x.id[_];
        f.schemas[_] = R;
      }
    }
    if (S.required && p === void 0) {
      var A = new o(p, w, S, f);
      return A.addError("is required, but is undefined"), A;
    }
    var A = this.validateSchema(p, w, S, f);
    if (A) {
      if (S.throwAll && A.errors.length)
        throw new a(A);
    } else throw new Error("Result undefined");
    return A;
  };
  function y(g) {
    var p = typeof g == "string" ? g : g.$ref;
    return typeof p == "string" ? p : false;
  }
  h.prototype.validateSchema = function(p, w, S, f) {
    var b = new o(p, w, S, f);
    if (typeof w == "boolean")
      w === true ? w = {} : w === false && (w = { type: [] });
    else if (!w)
      throw new Error("schema is undefined");
    if (w.extends)
      if (Array.isArray(w.extends)) {
        var d = { schema: w, ctx: f };
        w.extends.forEach(this.schemaTraverser.bind(this, d)), w = d.schema, d.schema = null, d.ctx = null, d = null;
      } else
        w = t.deepMerge(w, this.superResolve(w.extends, f));
    var x = y(w);
    if (x) {
      var _ = this.resolve(w, x, f), R = new l(_.subschema, S, f.path, _.switchSchema, f.schemas);
      return this.validateSchema(p, _.subschema, S, R);
    }
    var A = S && S.skipAttributes || [];
    for (var C in w)
      if (!e3.ignoreProperties[C] && A.indexOf(C) < 0) {
        var W = null, L = this.attributes[C];
        if (L)
          W = L.call(this, p, w, S, f);
        else if (S.allowUnknownAttributes === false)
          throw new s("Unsupported attribute: " + C, w);
        W && b.importErrors(W);
      }
    if (typeof S.rewrite == "function") {
      var M = S.rewrite.call(this, p, w, S, f);
      b.instance = M;
    }
    return b;
  }, h.prototype.schemaTraverser = function(p, w) {
    p.schema = t.deepMerge(p.schema, this.superResolve(w, p.ctx));
  }, h.prototype.superResolve = function(p, w) {
    var S = y(p);
    return S ? this.resolve(p, S, w).subschema : p;
  }, h.prototype.resolve = function(p, w, S) {
    if (w = S.resolve(w), S.schemas[w])
      return { subschema: S.schemas[w], switchSchema: w };
    let b = new URL(w, "thismessage::/").hash;
    var d = b && b.length && w.substr(0, w.length - b.length);
    if (!d || !S.schemas[d])
      throw new s("no such schema <" + w + ">", p);
    var x = t.objectGetPath(S.schemas[d], b.substr(1));
    if (x === void 0)
      throw new s("no such schema " + b + " located in <" + d + ">", p);
    return { subschema: x, switchSchema: w };
  }, h.prototype.testType = function(p, w, S, f, b) {
    if (b !== void 0) {
      if (b === null)
        throw new s('Unexpected null in "type" keyword');
      if (typeof this.types[b] == "function")
        return this.types[b].call(this, p);
      if (b && typeof b == "object") {
        var d = this.validateSchema(p, b, S, f);
        return d === void 0 || !(d && d.errors.length);
      }
      return true;
    }
  };
  var v = h.prototype.types = {};
  return v.string = function(p) {
    return typeof p == "string";
  }, v.number = function(p) {
    return typeof p == "number" && isFinite(p);
  }, v.integer = function(p) {
    return typeof p == "number" && p % 1 === 0;
  }, v.boolean = function(p) {
    return typeof p == "boolean";
  }, v.array = function(p) {
    return Array.isArray(p);
  }, v.null = function(p) {
    return p === null;
  }, v.date = function(p) {
    return p instanceof Date;
  }, v.any = function(p) {
    return true;
  }, v.object = function(p) {
    return p && typeof p == "object" && !Array.isArray(p) && !(p instanceof Date);
  }, Dl = h, Dl;
}
var Fg;
function zC() {
  if (Fg) return Er;
  Fg = 1;
  var e3 = Er.Validator = DC();
  return Er.ValidatorResult = Mn().ValidatorResult, Er.ValidatorResultError = Mn().ValidatorResultError, Er.ValidationError = Mn().ValidationError, Er.SchemaError = Mn().SchemaError, Er.SchemaScanResult = oc().SchemaScanResult, Er.scan = oc().scan, Er.validate = function(t, r, o) {
    var a = new e3();
    return a.validate(t, r, o);
  }, Er;
}
var WC = zC();
const Dm = (e3, t, r) => {
  const o = e3 instanceof RegExp ? Ng(e3, r) : e3, a = t instanceof RegExp ? Ng(t, r) : t, s = o !== null && a != null && BC(o, a, r);
  return s && {
    start: s[0],
    end: s[1],
    pre: r.slice(0, s[0]),
    body: r.slice(s[0] + o.length, s[1]),
    post: r.slice(s[1] + a.length)
  };
}, Ng = (e3, t) => {
  const r = t.match(e3);
  return r ? r[0] : null;
}, BC = (e3, t, r) => {
  let o, a, s, l, c, h = r.indexOf(e3), y = r.indexOf(t, h + 1), v = h;
  if (h >= 0 && y > 0) {
    if (e3 === t)
      return [h, y];
    for (o = [], s = r.length; v >= 0 && !c; ) {
      if (v === h)
        o.push(v), h = r.indexOf(e3, v + 1);
      else if (o.length === 1) {
        const g = o.pop();
        g !== void 0 && (c = [g, y]);
      } else
        a = o.pop(), a !== void 0 && a < s && (s = a, l = y), y = r.indexOf(t, v + 1);
      v = h < y && h >= 0 ? h : y;
    }
    o.length && l !== void 0 && (c = [s, l]);
  }
  return c;
}, zm = "\0SLASH" + Math.random() + "\0", Wm = "\0OPEN" + Math.random() + "\0", Wc = "\0CLOSE" + Math.random() + "\0", Bm = "\0COMMA" + Math.random() + "\0", Um = "\0PERIOD" + Math.random() + "\0", UC = new RegExp(zm, "g"), HC = new RegExp(Wm, "g"), qC = new RegExp(Wc, "g"), jC = new RegExp(Bm, "g"), ZC = new RegExp(Um, "g"), GC = /\\\\/g, KC = /\\{/g, VC = /\\}/g, YC = /\\,/g, XC = /\\./g;
function zl(e3) {
  return isNaN(e3) ? e3.charCodeAt(0) : parseInt(e3, 10);
}
function JC(e3) {
  return e3.replace(GC, zm).replace(KC, Wm).replace(VC, Wc).replace(YC, Bm).replace(XC, Um);
}
function QC(e3) {
  return e3.replace(UC, "\\").replace(HC, "{").replace(qC, "}").replace(jC, ",").replace(ZC, ".");
}
function Hm(e3) {
  if (!e3)
    return [""];
  const t = [], r = Dm("{", "}", e3);
  if (!r)
    return e3.split(",");
  const { pre: o, body: a, post: s } = r, l = o.split(",");
  l[l.length - 1] += "{" + a + "}";
  const c = Hm(s);
  return s.length && (l[l.length - 1] += c.shift(), l.push.apply(l, c)), t.push.apply(t, l), t;
}
function e$(e3) {
  return e3 ? (e3.slice(0, 2) === "{}" && (e3 = "\\{\\}" + e3.slice(2)), vo(JC(e3), true).map(QC)) : [];
}
function t$(e3) {
  return "{" + e3 + "}";
}
function r$(e3) {
  return /^-?0\d/.test(e3);
}
function n$(e3, t) {
  return e3 <= t;
}
function i$(e3, t) {
  return e3 >= t;
}
function vo(e3, t) {
  const r = [], o = Dm("{", "}", e3);
  if (!o)
    return [e3];
  const a = o.pre, s = o.post.length ? vo(o.post, false) : [""];
  if (/\$$/.test(o.pre))
    for (let l = 0; l < s.length; l++) {
      const c = a + "{" + o.body + "}" + s[l];
      r.push(c);
    }
  else {
    const l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body), c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body), h = l || c, y = o.body.indexOf(",") >= 0;
    if (!h && !y)
      return o.post.match(/,(?!,).*\}/) ? (e3 = o.pre + "{" + o.body + Wc + o.post, vo(e3)) : [e3];
    let v;
    if (h)
      v = o.body.split(/\.\./);
    else if (v = Hm(o.body), v.length === 1 && v[0] !== void 0 && (v = vo(v[0], false).map(t$), v.length === 1))
      return s.map((p) => o.pre + v[0] + p);
    let g;
    if (h && v[0] !== void 0 && v[1] !== void 0) {
      const p = zl(v[0]), w = zl(v[1]), S = Math.max(v[0].length, v[1].length);
      let f = v.length === 3 && v[2] !== void 0 ? Math.abs(zl(v[2])) : 1, b = n$;
      w < p && (f *= -1, b = i$);
      const x = v.some(r$);
      g = [];
      for (let _ = p; b(_, w); _ += f) {
        let R;
        if (c)
          R = String.fromCharCode(_), R === "\\" && (R = "");
        else if (R = String(_), x) {
          const A = S - R.length;
          if (A > 0) {
            const C = new Array(A + 1).join("0");
            _ < 0 ? R = "-" + C + R.slice(1) : R = C + R;
          }
        }
        g.push(R);
      }
    } else {
      g = [];
      for (let p = 0; p < v.length; p++)
        g.push.apply(g, vo(v[p], false));
    }
    for (let p = 0; p < g.length; p++)
      for (let w = 0; w < s.length; w++) {
        const S = a + g[p] + s[w];
        (!t || h || S) && r.push(S);
      }
  }
  return r;
}
const o$ = 1024 * 64, ps = (e3) => {
  if (typeof e3 != "string")
    throw new TypeError("invalid pattern");
  if (e3.length > o$)
    throw new TypeError("pattern is too long");
}, a$ = {
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
}, co = (e3) => e3.replace(/[[\]\\-]/g, "\\$&"), s$ = (e3) => e3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Dg = (e3) => e3.join(""), u$ = (e3, t) => {
  const r = t;
  if (e3.charAt(r) !== "[")
    throw new Error("not in a brace expression");
  const o = [], a = [];
  let s = r + 1, l = false, c = false, h = false, y = false, v = r, g = "";
  e: for (; s < e3.length; ) {
    const f = e3.charAt(s);
    if ((f === "!" || f === "^") && s === r + 1) {
      y = true, s++;
      continue;
    }
    if (f === "]" && l && !h) {
      v = s + 1;
      break;
    }
    if (l = true, f === "\\" && !h) {
      h = true, s++;
      continue;
    }
    if (f === "[" && !h) {
      for (const [b, [d, x, _]] of Object.entries(a$))
        if (e3.startsWith(b, s)) {
          if (g)
            return ["$.", false, e3.length - r, true];
          s += b.length, _ ? a.push(d) : o.push(d), c = c || x;
          continue e;
        }
    }
    if (h = false, g) {
      f > g ? o.push(co(g) + "-" + co(f)) : f === g && o.push(co(f)), g = "", s++;
      continue;
    }
    if (e3.startsWith("-]", s + 1)) {
      o.push(co(f + "-")), s += 2;
      continue;
    }
    if (e3.startsWith("-", s + 1)) {
      g = f, s += 2;
      continue;
    }
    o.push(co(f)), s++;
  }
  if (v < s)
    return ["", false, 0, false];
  if (!o.length && !a.length)
    return ["$.", false, e3.length - r, true];
  if (a.length === 0 && o.length === 1 && /^\\?.$/.test(o[0]) && !y) {
    const f = o[0].length === 2 ? o[0].slice(-1) : o[0];
    return [s$(f), false, v - r, false];
  }
  const p = "[" + (y ? "^" : "") + Dg(o) + "]", w = "[" + (y ? "" : "^") + Dg(a) + "]";
  return [o.length && a.length ? "(" + p + "|" + w + ")" : o.length ? p : w, c, v - r, true];
}, mo = (e3, { windowsPathsNoEscape: t = false } = {}) => t ? e3.replace(/\[([^\/\\])\]/g, "$1") : e3.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), l$ = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), zg = (e3) => l$.has(e3), c$ = "(?!(?:^|/)\\.\\.?(?:$|/))", Za = "(?!\\.)", f$ = /* @__PURE__ */ new Set(["[", "."]), d$ = /* @__PURE__ */ new Set(["..", "."]), p$ = new Set("().*{}+?[]^$\\!"), h$ = (e3) => e3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Bc = "[^/]", Wg = Bc + "*?", Bg = Bc + "+?";
var at, dt, Zr, qe, tt, hn, Fn, gn, Ar, Nn, Ro, Hn, qm, mn, ts, ac, jm;
const Pt = class Pt2 {
  constructor(t, r, o = {}) {
    xt(this, Hn);
    ve(this, "type");
    xt(this, at);
    xt(this, dt);
    xt(this, Zr, false);
    xt(this, qe, []);
    xt(this, tt);
    xt(this, hn);
    xt(this, Fn);
    xt(this, gn, false);
    xt(this, Ar);
    xt(this, Nn);
    xt(this, Ro, false);
    this.type = t, t && Xe(this, dt, true), Xe(this, tt, r), Xe(this, at, te(this, tt) ? te(te(this, tt), at) : this), Xe(this, Ar, te(this, at) === this ? o : te(te(this, at), Ar)), Xe(this, Fn, te(this, at) === this ? [] : te(te(this, at), Fn)), t === "!" && !te(te(this, at), gn) && te(this, Fn).push(this), Xe(this, hn, te(this, tt) ? te(te(this, tt), qe).length : 0);
  }
  get hasMagic() {
    if (te(this, dt) !== void 0)
      return te(this, dt);
    for (const t of te(this, qe))
      if (typeof t != "string" && (t.type || t.hasMagic))
        return Xe(this, dt, true);
    return te(this, dt);
  }
  // reconstructs the pattern
  toString() {
    return te(this, Nn) !== void 0 ? te(this, Nn) : this.type ? Xe(this, Nn, this.type + "(" + te(this, qe).map((t) => String(t)).join("|") + ")") : Xe(this, Nn, te(this, qe).map((t) => String(t)).join(""));
  }
  push(...t) {
    for (const r of t)
      if (r !== "") {
        if (typeof r != "string" && !(r instanceof Pt2 && te(r, tt) === this))
          throw new Error("invalid part: " + r);
        te(this, qe).push(r);
      }
  }
  toJSON() {
    var r;
    const t = this.type === null ? te(this, qe).slice().map((o) => typeof o == "string" ? o : o.toJSON()) : [this.type, ...te(this, qe).map((o) => o.toJSON())];
    return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === te(this, at) || te(te(this, at), gn) && ((r = te(this, tt)) == null ? void 0 : r.type) === "!") && t.push({}), t;
  }
  isStart() {
    var r;
    if (te(this, at) === this)
      return true;
    if (!((r = te(this, tt)) != null && r.isStart()))
      return false;
    if (te(this, hn) === 0)
      return true;
    const t = te(this, tt);
    for (let o = 0; o < te(this, hn); o++) {
      const a = te(t, qe)[o];
      if (!(a instanceof Pt2 && a.type === "!"))
        return false;
    }
    return true;
  }
  isEnd() {
    var r, o, a;
    if (te(this, at) === this || ((r = te(this, tt)) == null ? void 0 : r.type) === "!")
      return true;
    if (!((o = te(this, tt)) != null && o.isEnd()))
      return false;
    if (!this.type)
      return (a = te(this, tt)) == null ? void 0 : a.isEnd();
    const t = te(this, tt) ? te(te(this, tt), qe).length : 0;
    return te(this, hn) === t - 1;
  }
  copyIn(t) {
    typeof t == "string" ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    const r = new Pt2(this.type, t);
    for (const o of te(this, qe))
      r.copyIn(o);
    return r;
  }
  static fromGlob(t, r = {}) {
    var a;
    const o = new Pt2(null, void 0, r);
    return $e(a = Pt2, mn, ts).call(a, t, o, 0, r), o;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== te(this, at))
      return te(this, at).toMMPattern();
    const t = this.toString(), [r, o, a, s] = this.toRegExpSource();
    if (!(a || te(this, dt) || te(this, Ar).nocase && !te(this, Ar).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
      return o;
    const c = (te(this, Ar).nocase ? "i" : "") + (s ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, c), {
      _src: r,
      _glob: t
    });
  }
  get options() {
    return te(this, Ar);
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
    var h;
    const r = t ?? !!te(this, Ar).dot;
    if (te(this, at) === this && $e(this, Hn, qm).call(this), !this.type) {
      const y = this.isStart() && this.isEnd(), v = te(this, qe).map((S) => {
        var _;
        const [f, b, d, x] = typeof S == "string" ? $e(_ = Pt2, mn, jm).call(_, S, te(this, dt), y) : S.toRegExpSource(t);
        return Xe(this, dt, te(this, dt) || d), Xe(this, Zr, te(this, Zr) || x), f;
      }).join("");
      let g = "";
      if (this.isStart() && typeof te(this, qe)[0] == "string" && !(te(this, qe).length === 1 && d$.has(te(this, qe)[0]))) {
        const f = f$, b = (
          // dots are allowed, and the pattern starts with [ or .
          r && f.has(v.charAt(0)) || // the pattern starts with \., and then [ or .
          v.startsWith("\\.") && f.has(v.charAt(2)) || // the pattern starts with \.\., and then [ or .
          v.startsWith("\\.\\.") && f.has(v.charAt(4))
        ), d = !r && !t && f.has(v.charAt(0));
        g = b ? c$ : d ? Za : "";
      }
      let p = "";
      return this.isEnd() && te(te(this, at), gn) && ((h = te(this, tt)) == null ? void 0 : h.type) === "!" && (p = "(?:$|\\/)"), [
        g + v + p,
        mo(v),
        Xe(this, dt, !!te(this, dt)),
        te(this, Zr)
      ];
    }
    const o = this.type === "*" || this.type === "+", a = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let s = $e(this, Hn, ac).call(this, r);
    if (this.isStart() && this.isEnd() && !s && this.type !== "!") {
      const y = this.toString();
      return Xe(this, qe, [y]), this.type = null, Xe(this, dt, void 0), [y, mo(this.toString()), false, false];
    }
    let l = !o || t || r || !Za ? "" : $e(this, Hn, ac).call(this, true);
    l === s && (l = ""), l && (s = `(?:${s})(?:${l})*?`);
    let c = "";
    if (this.type === "!" && te(this, Ro))
      c = (this.isStart() && !r ? Za : "") + Bg;
    else {
      const y = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !r && !t ? Za : "") + Wg + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && l ? ")" : this.type === "*" && l ? ")?" : `)${this.type}`;
      c = a + s + y;
    }
    return [
      c,
      mo(s),
      Xe(this, dt, !!te(this, dt)),
      te(this, Zr)
    ];
  }
};
at = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), qe = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakSet(), qm = function() {
  if (this !== te(this, at))
    throw new Error("should only call on root");
  if (te(this, gn))
    return this;
  this.toString(), Xe(this, gn, true);
  let t;
  for (; t = te(this, Fn).pop(); ) {
    if (t.type !== "!")
      continue;
    let r = t, o = te(r, tt);
    for (; o; ) {
      for (let a = te(r, hn) + 1; !o.type && a < te(o, qe).length; a++)
        for (const s of te(t, qe)) {
          if (typeof s == "string")
            throw new Error("string part in extglob AST??");
          s.copyIn(te(o, qe)[a]);
        }
      r = o, o = te(r, tt);
    }
  }
  return this;
}, mn = /* @__PURE__ */ new WeakSet(), ts = function(t, r, o, a) {
  var w, S;
  let s = false, l = false, c = -1, h = false;
  if (r.type === null) {
    let f = o, b = "";
    for (; f < t.length; ) {
      const d = t.charAt(f++);
      if (s || d === "\\") {
        s = !s, b += d;
        continue;
      }
      if (l) {
        f === c + 1 ? (d === "^" || d === "!") && (h = true) : d === "]" && !(f === c + 2 && h) && (l = false), b += d;
        continue;
      } else if (d === "[") {
        l = true, c = f, h = false, b += d;
        continue;
      }
      if (!a.noext && zg(d) && t.charAt(f) === "(") {
        r.push(b), b = "";
        const x = new Pt(d, r);
        f = $e(w = Pt, mn, ts).call(w, t, x, f, a), r.push(x);
        continue;
      }
      b += d;
    }
    return r.push(b), f;
  }
  let y = o + 1, v = new Pt(null, r);
  const g = [];
  let p = "";
  for (; y < t.length; ) {
    const f = t.charAt(y++);
    if (s || f === "\\") {
      s = !s, p += f;
      continue;
    }
    if (l) {
      y === c + 1 ? (f === "^" || f === "!") && (h = true) : f === "]" && !(y === c + 2 && h) && (l = false), p += f;
      continue;
    } else if (f === "[") {
      l = true, c = y, h = false, p += f;
      continue;
    }
    if (zg(f) && t.charAt(y) === "(") {
      v.push(p), p = "";
      const b = new Pt(f, v);
      v.push(b), y = $e(S = Pt, mn, ts).call(S, t, b, y, a);
      continue;
    }
    if (f === "|") {
      v.push(p), p = "", g.push(v), v = new Pt(null, r);
      continue;
    }
    if (f === ")")
      return p === "" && te(r, qe).length === 0 && Xe(r, Ro, true), v.push(p), p = "", r.push(...g, v), y;
    p += f;
  }
  return r.type = null, Xe(r, dt, void 0), Xe(r, qe, [t.substring(o - 1)]), y;
}, ac = function(t) {
  return te(this, qe).map((r) => {
    if (typeof r == "string")
      throw new Error("string type in extglob ast??");
    const [o, a, s, l] = r.toRegExpSource(t);
    return Xe(this, Zr, te(this, Zr) || l), o;
  }).filter((r) => !(this.isStart() && this.isEnd()) || !!r).join("|");
}, jm = function(t, r, o = false) {
  let a = false, s = "", l = false;
  for (let c = 0; c < t.length; c++) {
    const h = t.charAt(c);
    if (a) {
      a = false, s += (p$.has(h) ? "\\" : "") + h;
      continue;
    }
    if (h === "\\") {
      c === t.length - 1 ? s += "\\\\" : a = true;
      continue;
    }
    if (h === "[") {
      const [y, v, g, p] = u$(t, c);
      if (g) {
        s += y, l = l || v, c += g - 1, r = r || p;
        continue;
      }
    }
    if (h === "*") {
      o && t === "*" ? s += Bg : s += Wg, r = true;
      continue;
    }
    if (h === "?") {
      s += Bc, r = true;
      continue;
    }
    s += h$(h);
  }
  return [s, mo(t), !!r, l];
}, xt(Pt, mn);
let hs = Pt;
const g$ = (e3, { windowsPathsNoEscape: t = false } = {}) => t ? e3.replace(/[?*()[\]]/g, "[$&]") : e3.replace(/[?*()[\]\\]/g, "\\$&"), Ot = (e3, t, r = {}) => (ps(t), !r.nocomment && t.charAt(0) === "#" ? false : new Ps(t, r).match(e3)), v$ = /^\*+([^+@!?\*\[\(]*)$/, m$ = (e3) => (t) => !t.startsWith(".") && t.endsWith(e3), y$ = (e3) => (t) => t.endsWith(e3), w$ = (e3) => (e3 = e3.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(e3)), b$ = (e3) => (e3 = e3.toLowerCase(), (t) => t.toLowerCase().endsWith(e3)), S$ = /^\*+\.\*+$/, x$ = (e3) => !e3.startsWith(".") && e3.includes("."), _$ = (e3) => e3 !== "." && e3 !== ".." && e3.includes("."), E$ = /^\.\*+$/, O$ = (e3) => e3 !== "." && e3 !== ".." && e3.startsWith("."), A$ = /^\*+$/, T$ = (e3) => e3.length !== 0 && !e3.startsWith("."), R$ = (e3) => e3.length !== 0 && e3 !== "." && e3 !== "..", P$ = /^\?+([^+@!?\*\[\(]*)?$/, k$ = ([e3, t = ""]) => {
  const r = Zm([e3]);
  return t ? (t = t.toLowerCase(), (o) => r(o) && o.toLowerCase().endsWith(t)) : r;
}, C$ = ([e3, t = ""]) => {
  const r = Gm([e3]);
  return t ? (t = t.toLowerCase(), (o) => r(o) && o.toLowerCase().endsWith(t)) : r;
}, $$ = ([e3, t = ""]) => {
  const r = Gm([e3]);
  return t ? (o) => r(o) && o.endsWith(t) : r;
}, I$ = ([e3, t = ""]) => {
  const r = Zm([e3]);
  return t ? (o) => r(o) && o.endsWith(t) : r;
}, Zm = ([e3]) => {
  const t = e3.length;
  return (r) => r.length === t && !r.startsWith(".");
}, Gm = ([e3]) => {
  const t = e3.length;
  return (r) => r.length === t && r !== "." && r !== "..";
}, Km = typeof process == "object" && process ? typeof define_process_env_default == "object" && define_process_env_default && define_process_env_default.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Ug = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, L$ = Km === "win32" ? Ug.win32.sep : Ug.posix.sep;
Ot.sep = L$;
const rr = Symbol("globstar **");
Ot.GLOBSTAR = rr;
const M$ = "[^/]", F$ = M$ + "*?", N$ = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", D$ = "(?:(?!(?:\\/|^)\\.).)*?", z$ = (e3, t = {}) => (r) => Ot(r, e3, t);
Ot.filter = z$;
const tr = (e3, t = {}) => Object.assign({}, e3, t), W$ = (e3) => {
  if (!e3 || typeof e3 != "object" || !Object.keys(e3).length)
    return Ot;
  const t = Ot;
  return Object.assign((o, a, s = {}) => t(o, a, tr(e3, s)), {
    Minimatch: class extends t.Minimatch {
      constructor(a, s = {}) {
        super(a, tr(e3, s));
      }
      static defaults(a) {
        return t.defaults(tr(e3, a)).Minimatch;
      }
    },
    AST: class extends t.AST {
      /* c8 ignore start */
      constructor(a, s, l = {}) {
        super(a, s, tr(e3, l));
      }
      /* c8 ignore stop */
      static fromGlob(a, s = {}) {
        return t.AST.fromGlob(a, tr(e3, s));
      }
    },
    unescape: (o, a = {}) => t.unescape(o, tr(e3, a)),
    escape: (o, a = {}) => t.escape(o, tr(e3, a)),
    filter: (o, a = {}) => t.filter(o, tr(e3, a)),
    defaults: (o) => t.defaults(tr(e3, o)),
    makeRe: (o, a = {}) => t.makeRe(o, tr(e3, a)),
    braceExpand: (o, a = {}) => t.braceExpand(o, tr(e3, a)),
    match: (o, a, s = {}) => t.match(o, a, tr(e3, s)),
    sep: t.sep,
    GLOBSTAR: rr
  });
};
Ot.defaults = W$;
const Vm = (e3, t = {}) => (ps(e3), t.nobrace || !/\{(?:(?!\{).)*\}/.test(e3) ? [e3] : e$(e3));
Ot.braceExpand = Vm;
const B$ = (e3, t = {}) => new Ps(e3, t).makeRe();
Ot.makeRe = B$;
const U$ = (e3, t, r = {}) => {
  const o = new Ps(t, r);
  return e3 = e3.filter((a) => o.match(a)), o.options.nonull && !e3.length && e3.push(t), e3;
};
Ot.match = U$;
const Hg = /[?*]|[+@!]\(.*?\)|\[|\]/, H$ = (e3) => e3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class Ps {
  constructor(t, r = {}) {
    ve(this, "options");
    ve(this, "set");
    ve(this, "pattern");
    ve(this, "windowsPathsNoEscape");
    ve(this, "nonegate");
    ve(this, "negate");
    ve(this, "comment");
    ve(this, "empty");
    ve(this, "preserveMultipleSlashes");
    ve(this, "partial");
    ve(this, "globSet");
    ve(this, "globParts");
    ve(this, "nocase");
    ve(this, "isWindows");
    ve(this, "platform");
    ve(this, "windowsNoMagicRoot");
    ve(this, "regexp");
    ps(t), r = r || {}, this.options = r, this.pattern = t, this.platform = r.platform || Km, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === false, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = false, this.nonegate = !!r.nonegate, this.comment = false, this.empty = false, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], r.debug && (this.debug = (...s) => console.error(...s)), this.debug(this.pattern, this.globSet);
    const o = this.globSet.map((s) => this.slashSplit(s));
    this.globParts = this.preprocess(o), this.debug(this.pattern, this.globParts);
    let a = this.globParts.map((s, l, c) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const h = s[0] === "" && s[1] === "" && (s[2] === "?" || !Hg.test(s[2])) && !Hg.test(s[3]), y = /^[a-z]:/i.test(s[0]);
        if (h)
          return [...s.slice(0, 4), ...s.slice(4).map((v) => this.parse(v))];
        if (y)
          return [s[0], ...s.slice(1).map((v) => this.parse(v))];
      }
      return s.map((h) => this.parse(h));
    });
    if (this.debug(this.pattern, a), this.set = a.filter((s) => s.indexOf(false) === -1), this.isWindows)
      for (let s = 0; s < this.set.length; s++) {
        const l = this.set[s];
        l[0] === "" && l[1] === "" && this.globParts[s][2] === "?" && typeof l[3] == "string" && /^[a-z]:$/i.test(l[3]) && (l[2] = "?");
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
      for (let o = 0; o < t.length; o++)
        for (let a = 0; a < t[o].length; a++)
          t[o][a] === "**" && (t[o][a] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : r >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t), t;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(t) {
    return t.map((r) => {
      let o = -1;
      for (; (o = r.indexOf("**", o + 1)) !== -1; ) {
        let a = o;
        for (; r[a + 1] === "**"; )
          a++;
        a !== o && r.splice(o, a - o);
      }
      return r;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(t) {
    return t.map((r) => (r = r.reduce((o, a) => {
      const s = o[o.length - 1];
      return a === "**" && s === "**" ? o : a === ".." && s && s !== ".." && s !== "." && s !== "**" ? (o.pop(), o) : (o.push(a), o);
    }, []), r.length === 0 ? [""] : r));
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let r = false;
    do {
      if (r = false, !this.preserveMultipleSlashes) {
        for (let a = 1; a < t.length - 1; a++) {
          const s = t[a];
          a === 1 && s === "" && t[0] === "" || (s === "." || s === "") && (r = true, t.splice(a, 1), a--);
        }
        t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (r = true, t.pop());
      }
      let o = 0;
      for (; (o = t.indexOf("..", o + 1)) !== -1; ) {
        const a = t[o - 1];
        a && a !== "." && a !== ".." && a !== "**" && (r = true, t.splice(o - 1, 2), o -= 2);
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
      for (let o of t) {
        let a = -1;
        for (; (a = o.indexOf("**", a + 1)) !== -1; ) {
          let l = a;
          for (; o[l + 1] === "**"; )
            l++;
          l > a && o.splice(a + 1, l - a);
          let c = o[a + 1];
          const h = o[a + 2], y = o[a + 3];
          if (c !== ".." || !h || h === "." || h === ".." || !y || y === "." || y === "..")
            continue;
          r = true, o.splice(a, 1);
          const v = o.slice(0);
          v[a] = "**", t.push(v), a--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let l = 1; l < o.length - 1; l++) {
            const c = o[l];
            l === 1 && c === "" && o[0] === "" || (c === "." || c === "") && (r = true, o.splice(l, 1), l--);
          }
          o[0] === "." && o.length === 2 && (o[1] === "." || o[1] === "") && (r = true, o.pop());
        }
        let s = 0;
        for (; (s = o.indexOf("..", s + 1)) !== -1; ) {
          const l = o[s - 1];
          if (l && l !== "." && l !== ".." && l !== "**") {
            r = true;
            const h = s === 1 && o[s + 1] === "**" ? ["."] : [];
            o.splice(s - 1, 2, ...h), o.length === 0 && o.push(""), s -= 2;
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
      for (let o = r + 1; o < t.length; o++) {
        const a = this.partsMatch(t[r], t[o], !this.preserveMultipleSlashes);
        if (a) {
          t[r] = [], t[o] = a;
          break;
        }
      }
    return t.filter((r) => r.length);
  }
  partsMatch(t, r, o = false) {
    let a = 0, s = 0, l = [], c = "";
    for (; a < t.length && s < r.length; )
      if (t[a] === r[s])
        l.push(c === "b" ? r[s] : t[a]), a++, s++;
      else if (o && t[a] === "**" && r[s] === t[a + 1])
        l.push(t[a]), a++;
      else if (o && r[s] === "**" && t[a] === r[s + 1])
        l.push(r[s]), s++;
      else if (t[a] === "*" && r[s] && (this.options.dot || !r[s].startsWith(".")) && r[s] !== "**") {
        if (c === "b")
          return false;
        c = "a", l.push(t[a]), a++, s++;
      } else if (r[s] === "*" && t[a] && (this.options.dot || !t[a].startsWith(".")) && t[a] !== "**") {
        if (c === "a")
          return false;
        c = "b", l.push(r[s]), a++, s++;
      } else
        return false;
    return t.length === r.length && l;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const t = this.pattern;
    let r = false, o = 0;
    for (let a = 0; a < t.length && t.charAt(a) === "!"; a++)
      r = !r, o++;
    o && (this.pattern = t.slice(o)), this.negate = r;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(t, r, o = false) {
    const a = this.options;
    if (this.isWindows) {
      const f = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), b = !f && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]), d = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), x = !d && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]), _ = b ? 3 : f ? 0 : void 0, R = x ? 3 : d ? 0 : void 0;
      if (typeof _ == "number" && typeof R == "number") {
        const [A, C] = [t[_], r[R]];
        A.toLowerCase() === C.toLowerCase() && (r[R] = A, R > _ ? r = r.slice(R) : _ > R && (t = t.slice(_)));
      }
    }
    const { optimizationLevel: s = 1 } = this.options;
    s >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, { file: t, pattern: r }), this.debug("matchOne", t.length, r.length);
    for (var l = 0, c = 0, h = t.length, y = r.length; l < h && c < y; l++, c++) {
      this.debug("matchOne loop");
      var v = r[c], g = t[l];
      if (this.debug(r, v, g), v === false)
        return false;
      if (v === rr) {
        this.debug("GLOBSTAR", [r, v, g]);
        var p = l, w = c + 1;
        if (w === y) {
          for (this.debug("** at the end"); l < h; l++)
            if (t[l] === "." || t[l] === ".." || !a.dot && t[l].charAt(0) === ".")
              return false;
          return true;
        }
        for (; p < h; ) {
          var S = t[p];
          if (this.debug(`
globstar while`, t, p, r, w, S), this.matchOne(t.slice(p), r.slice(w), o))
            return this.debug("globstar found match!", p, h, S), true;
          if (S === "." || S === ".." || !a.dot && S.charAt(0) === ".") {
            this.debug("dot detected!", t, p, r, w);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), p++;
        }
        return !!(o && (this.debug(`
>>> no match, partial?`, t, p, r, w), p === h));
      }
      let f;
      if (typeof v == "string" ? (f = g === v, this.debug("string match", v, g, f)) : (f = v.test(g), this.debug("pattern match", v, g, f)), !f)
        return false;
    }
    if (l === h && c === y)
      return true;
    if (l === h)
      return o;
    if (c === y)
      return l === h - 1 && t[l] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Vm(this.pattern, this.options);
  }
  parse(t) {
    ps(t);
    const r = this.options;
    if (t === "**")
      return rr;
    if (t === "")
      return "";
    let o, a = null;
    (o = t.match(A$)) ? a = r.dot ? R$ : T$ : (o = t.match(v$)) ? a = (r.nocase ? r.dot ? b$ : w$ : r.dot ? y$ : m$)(o[1]) : (o = t.match(P$)) ? a = (r.nocase ? r.dot ? C$ : k$ : r.dot ? $$ : I$)(o) : (o = t.match(S$)) ? a = r.dot ? _$ : x$ : (o = t.match(E$)) && (a = O$);
    const s = hs.fromGlob(t, this.options).toMMPattern();
    return a && typeof s == "object" && Reflect.defineProperty(s, "test", { value: a }), s;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const t = this.set;
    if (!t.length)
      return this.regexp = false, this.regexp;
    const r = this.options, o = r.noglobstar ? F$ : r.dot ? N$ : D$, a = new Set(r.nocase ? ["i"] : []);
    let s = t.map((h) => {
      const y = h.map((v) => {
        if (v instanceof RegExp)
          for (const g of v.flags.split(""))
            a.add(g);
        return typeof v == "string" ? H$(v) : v === rr ? rr : v._src;
      });
      return y.forEach((v, g) => {
        const p = y[g + 1], w = y[g - 1];
        v !== rr || w === rr || (w === void 0 ? p !== void 0 && p !== rr ? y[g + 1] = "(?:\\/|" + o + "\\/)?" + p : y[g] = o : p === void 0 ? y[g - 1] = w + "(?:\\/|" + o + ")?" : p !== rr && (y[g - 1] = w + "(?:\\/|\\/" + o + "\\/)" + p, y[g + 1] = rr));
      }), y.filter((v) => v !== rr).join("/");
    }).join("|");
    const [l, c] = t.length > 1 ? ["(?:", ")"] : ["", ""];
    s = "^" + l + s + c + "$", this.negate && (s = "^(?!" + s + ").+$");
    try {
      this.regexp = new RegExp(s, [...a].join(""));
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
    const o = this.options;
    this.isWindows && (t = t.split("\\").join("/"));
    const a = this.slashSplit(t);
    this.debug(this.pattern, "split", a);
    const s = this.set;
    this.debug(this.pattern, "set", s);
    let l = a[a.length - 1];
    if (!l)
      for (let c = a.length - 2; !l && c >= 0; c--)
        l = a[c];
    for (let c = 0; c < s.length; c++) {
      const h = s[c];
      let y = a;
      if (o.matchBase && h.length === 1 && (y = [l]), this.matchOne(y, h, r))
        return o.flipNegate ? true : !this.negate;
    }
    return o.flipNegate ? false : this.negate;
  }
  static defaults(t) {
    return Ot.defaults(t).Minimatch;
  }
}
Ot.AST = hs;
Ot.Minimatch = Ps;
Ot.escape = g$;
Ot.unescape = mo;
const Ym = "/$shared", q$ = {
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
  "**/*.json": {
    parser: "json",
    content: {}
  }
};
function Xm(e3) {
  const t = Object.entries(q$).find(
    ([r]) => Ot(e3, r)
  );
  return t == null ? void 0 : t[1];
}
function Jm(e3) {
  var o;
  const t = (o = Xm(e3)) == null ? void 0 : o.content;
  if (!t) return;
  const r = e3.replace(`${Ym}/`, "Shared/");
  Qm({
    name: r,
    content: t,
    asText: typeof t == "string"
  });
}
function ks({
  path: e3,
  createIfNotExists: t = false
}) {
  const r = `${Ym}/${e3}`;
  return Ne(`${r}?t=${Date.now()}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((o) => {
    const a = Xm(e3);
    let s = o;
    if (!a) return s;
    if (typeof s == "string")
      try {
        switch (a.parser) {
          case "json":
            s = JSON.parse(s);
            break;
          default:
            break;
        }
      } catch {
        throw new Error("Cannot parse");
      }
    if (a.schema && !new WC.Validator().validate(s, a.schema).valid)
      throw new Error("Invalid Schema");
    return s;
  }).catch((o) => {
    if (j$(o) && t) {
      const a = Z$(o, e3);
      vC.next({
        message: a,
        kind: "warning"
      }), Jm(r);
    }
    throw o;
  });
}
function j$(e3) {
  var t;
  return ((t = e3 == null ? void 0 : e3.response) == null ? void 0 : t.status) === 404 || (e3 == null ? void 0 : e3.message) === "Invalid Schema" || (e3 == null ? void 0 : e3.message) === "Cannot parse" || (e3 == null ? void 0 : e3.name) === "SyntaxError";
}
function Z$(e3, t) {
  var r;
  switch (true) {
    case ((e3 == null ? void 0 : e3.message) === "Cannot parse " || (e3 == null ? void 0 : e3.name) === "SyntaxError"):
      return `Cannot parse file '${t}', resetting...`;
    case (e3 == null ? void 0 : e3.message) === "Invalid Schema":
      return `File '${t}' is corrupt, resetting...`;
    case ((r = e3 == null ? void 0 : e3.response) == null ? void 0 : r.status) === 404:
      return `File '${t}' not found, creating...`;
    default:
      return e3 == null ? void 0 : e3.message;
  }
}
function x2(e3) {
  return Ne(Rs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function _2(e3) {
  return Ne(Rs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
const G$ = () => {
  const { host: e3, protocol: t } = window.location, r = t === "https:";
  return {
    projectOpened: false,
    remoteDebuggerMode: Lm.DISABLED,
    baseUrl: "",
    qodly: true,
    urls: {
      renderer: "/$lib/renderer/",
      debugger: `ws${r ? "s" : ""}://${e3}/remoteDebugger`,
      lsp: `ws${r ? "s" : ""}://${e3}/LSP`
    },
    isRestActive: true
  };
};
async function E2() {
  const { hostname: e3, host: t, protocol: r } = window.location, o = r === "https:";
  try {
    const a = await Ne(lt, {
      method: "POST",
      body: JSON.stringify({
        verb: Kn.GET_APP_SETTINGS
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }), s = (() => {
      if (a.rendererPath)
        return a.rendererPath;
      const l = `http://${e3}:${a.webServerHTTPPort}`, c = `https://${e3}:${a.webServerHTTPSPort}`;
      return a.webServerHTTPPort && a.webServerHTTPSPort ? o ? c : l : a.webServerHTTPPort ? l : c;
    })();
    return {
      projectOpened: a.webServerHTTPSPort > 0 || a.webServerHTTPPort > 0,
      remoteDebuggerMode: a.remoteDebuggerMode,
      baseUrl: s,
      qodly: typeof a.qodly > "u" ? true : a.qodly,
      urls: {
        renderer: a.rendererPath || `${s}/$lib/renderer/`,
        debugger: `ws${o ? "s" : ""}://${t}/remoteDebugger`,
        lsp: `ws${o ? "s" : ""}://${t}/LSP`
      },
      isRestActive: a.isRESTActive
    };
  } catch (a) {
    return console.error(a), G$();
  }
}
async function K$(e3) {
  return await Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function O2(...e3) {
  return (await Promise.all(
    e3.map(
      (o) => K$({
        root: o,
        verb: Kn.GET_FOLDER
      })
    )
  )).map(
    ({ children: o }) => o.map(({ name: a, date: s, type: l }) => ({
      name: a,
      type: l,
      date: s,
      path: `${l}/${a}`
    }))
  ).flat();
}
function A2(e3, t = {}) {
  const { sanitize: r = true } = t;
  return Ne(`/rest/$getWebForm/${e3}`, {
    method: "GET"
  }).then((o) => {
    if (!(o != null && o.components) || !r)
      return o;
    const a = /* @__PURE__ */ new Map();
    return {
      ...o,
      // generate a unique id for webform loaders (fixes qs#397)
      // since the same webform loader might be used inside another webform loader
      components: rt.entries(o.components).map(([s, l]) => {
        const c = s, { resolvedName: h } = l.type;
        if (h === "WebformLoader") {
          const y = wc.generate();
          a.set(s, y), s = y;
        }
        return [s, l, c];
      }).reduce((s, [l, c, h]) => {
        var y;
        return c.nodes && (c.nodes = c.nodes.map((v) => a.get(v) || v)), c.linkedNodes && (c.linkedNodes = rt.entries(c.linkedNodes).reduce(
          (v, [g, p]) => ({
            ...v,
            [g]: a.get(p) || p
          }),
          {}
        )), (y = c.props) != null && y.events && (c.props.events = c.props.events.map(
          (v) => (v.type === "navigation" && v.loader && (v.loader = a.get(v.loader) || v.loader), v)
        )), {
          ...s,
          [l]: {
            ...c,
            props: {
              ...c.props,
              __originalID: h
            }
          }
        };
      }, {})
    };
  });
}
function T2(e3) {
  return Ne(lt, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(e3)
  }).then((t) => ({
    ...t,
    content: [_t.METHOD, _t.CLASS].includes(
      t.type
    ) ? zc(t.content) : t.content
  }));
}
function R2(e3) {
  return e3.type === "folder" ? Ne(Rs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }) : Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function P2(e3) {
  return e3.type === "folder" ? (await Ne(Rs, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted : (await Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
function k2(e3) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function C2(e3) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function $2(e3) {
  return (await Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })).deleted;
}
async function I2(...e3) {
  return await Ne(lt, {
    method: "POST",
    body: JSON.stringify({
      verb: Kn.GET_FILES_INFO,
      files: e3
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
async function L2(e3) {
  const t = await Ne("/api/login", {
    method: "POST",
    body: JSON.stringify({
      accessKey: e3
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
  return t.isLogged && t.success;
}
async function M2() {
  return await Ne(
    "/rest/$catalog/$all?$metadata=full",
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json"
      })
    }
  );
}
async function F2(e3) {
  try {
    const t = false ? "/i18n/languages.json" : `/$lib/${e3 ? "studio" : "renderer"}/i18n/languages.json`, o = await (await fetch(t)).text(), { supported: a } = JSON.parse(o);
    return a;
  } catch {
    return [];
  }
}
async function N2({
  name: e3,
  path: t = "",
  root: r = "root",
  asText: o = false
}) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify({
      verb: "getFileContent",
      root: r,
      path: t,
      name: e3,
      asText: o
    }),
    headers: new Headers({ "Content-Type": "application/json" })
  });
}
async function D2(e3 = {}) {
  try {
    return await ks({
      path: "shared_datasources.json",
      ...e3
    });
  } catch {
    return {};
  }
}
async function z2(e3 = {}) {
  try {
    return await ks({
      path: "shared_app_events.json",
      createIfNotExists: true,
      ...e3
    });
  } catch {
    return [];
  }
}
async function W2(e3 = {}) {
  try {
    return await ks({
      path: "shared_css.json",
      ...e3
    });
  } catch {
    return { classes: [] };
  }
}
async function B2(e3 = {}) {
  try {
    return await ks({
      path: "saved_conditions.json",
      ...e3
    });
  } catch {
    return { conditions: [] };
  }
}
async function U2() {
  try {
    return await Ne(
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
async function H2() {
  try {
    return await (await fetch(`monaco_theme.json?t=${Date.now()}`)).json();
  } catch {
    return null;
  }
}
const V$ = Fm(), q2 = async (e3) => {
  const t = {
    verb: Kn.SET_FILE_CONTENT,
    asText: false,
    name: "shared_datasources.json",
    path: "",
    root: "shared",
    content: e3
  };
  return V$(async () => (await Ne(lt, {
    method: "POST",
    body: JSON.stringify(t),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e3));
}, Y$ = Fm(), j2 = async (e3) => {
  const t = {
    verb: Kn.SET_FILE_CONTENT,
    asText: false,
    name: "shared_app_events.json",
    path: "",
    root: "shared",
    content: e3
  };
  return Y$(async () => (await Ne(lt, {
    method: "POST",
    body: JSON.stringify(t),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), e3));
}, Qm = async (e3) => {
  const t = await Ne(lt, {
    method: "POST",
    body: JSON.stringify({
      ...e3,
      verb: Kn.SET_FILE_CONTENT,
      root: Im.ROOT
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }), r = Mm(
    `${e3.path || "Sources"}/${e3.name}`
  );
  return {
    ...t,
    type: r,
    size: 0
  };
}, Z2 = async (e3) => await Qm({
  name: "crafted_components.json",
  path: Ln.WEBFORMS,
  content: e3
});
function G2(e3) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function K2(e3) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function V2(e3) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function Y2(e3) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((t) => Array.isArray(t) ? t : {
    ...t,
    content: ["4dm", "4qm", "4qs"].includes(t.ext) ? zc(t.content) : t.content
  }).catch((t) => {
    var r, o;
    throw ((o = (r = t.data) == null ? void 0 : r.__ERROR[0]) == null ? void 0 : o.errCode) === 1839 && Jm(e3.path), t;
  });
}
function X2(e3) {
  return Ne(lt, {
    method: "POST",
    body: JSON.stringify(e3),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
}
function X$(e3) {
  const t = new RegExp(/^\((.+)(?=\))/gi).exec(e3);
  return t !== null ? t[1] : "";
}
function J$(e3) {
  const t = new RegExp(/(->)(.*)/gi).exec(e3);
  if (t !== null)
    return t[0].replace("->", "");
  const r = /:([^)]*)$/.exec(e3);
  return r !== null ? `result : ${r[1].trim()}` : "";
}
function Q$(e3) {
  const t = X$(e3).split(/[;,]/g).filter(Boolean).map((a) => {
    const s = a.split(":")[0].trim(), l = a.split(":")[1].trim();
    return {
      name: s,
      type: l
    };
  }), r = J$(e3), o = r ? {
    name: r.split(":")[0].trim(),
    type: r.split(":")[1].trim()
  } : {
    name: "result",
    type: "Variable"
  };
  return {
    params: t,
    result: o
  };
}
async function J2(e3, t) {
  const o = e3.split(".").pop();
  try {
    const a = await Ne(lt, {
      method: "POST",
      body: JSON.stringify({
        verb: "getFunctionContent",
        className: t,
        functionName: o
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    a.content = zc(a.content);
    const { params: s, result: l } = Q$(a.parameters);
    return {
      ...a,
      params: s,
      returns: l
    };
  } catch (a) {
    return console.error(a), {
      className: t,
      functionName: o,
      filePath: e3,
      content: "",
      params: []
    };
  }
}
var eI = /* @__PURE__ */ ((e3) => (e3.STUDIO_LOADED = "UA-1-0", e3.WELCOME_TOUR_INIT = "UA-1-3", e3.WELCOME_TOUR_END = "UA-1-4", e3))(eI || {});
function Q2(e3, t) {
  fetch("/api/v1/activity", {
    body: JSON.stringify({
      AID: e3,
      ...t
    }),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  }).catch((r) => {
  });
}
function eL(e3) {
  window.pagesense = window.pagesense || [], window.pagesense.push(["trackEvent", e3]);
}
var tI = /* @__PURE__ */ ((e3) => (e3.LOCAL = "local", e3.SHARED = "shared", e3.THEME = "theme", e3))(tI || {}), rI = /* @__PURE__ */ ((e3) => (e3[e3.METHOD = 1] = "METHOD", e3[e3.CLASS = 10] = "CLASS", e3))(rI || {}), nI = /* @__PURE__ */ ((e3) => (e3.WelCome = "WelCome", e3.ActionPanel = "ActionPanel", e3.SideBar = "SideBar", e3.Settings = "Settings", e3.Main = "Main", e3.Explorer = "Explorer", e3.Header = "Header", e3.ComponentList = "ComponentList", e3))(nI || {}), iI = /* @__PURE__ */ ((e3) => (e3[e3.FILE_NOT_FOUND = 1839] = "FILE_NOT_FOUND", e3[e3.JSON_MALFORMED = 554] = "JSON_MALFORMED", e3[e3.JSON_MALFORMED_AT_LINE = 550] = "JSON_MALFORMED_AT_LINE", e3))(iI || {});
const tL = {
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
}, rL = {
  Code: {
    key: "editors:code",
    config: { language: "4d", theme: "fd-dark" }
  },
  WebForm: {
    key: "editors:webforms"
  }
};

export { lt as API_PREFIX, bI as AppLoader, UP as ControlledSwitch, tL as DATASOURCE_THEMES, gC as DatasourcesActions, wC as DebuggerActions, Kn as DesignerRequestVerb, fI as Dialog, lO as DialogBody, eI as EActivity, rL as EDITOR, nI as EIDENTIFIERS, iI as ERROR_CODES, tI as EWebFormStyleClassScope, Rs as EXT_API_PREFIX, _t as FileFolderType, Ln as FolderRootPath, Im as FolderRootType, Cg as HTTPError, _C as HTTP_HANDLERS_TAB_PATH, ds as IPreemptive, IC as IPublished, Nm as IPublishedRestScope, kI as IdentityProvider, hI as Incase, CA as IndentLines, EC as LOCALIZATION_TAB_PATH, Nk as LogoSVG, yC as LspActions, Cm as MAX_FILE_NAME_LENGTH, UI as MODEL_TAB_PATH, SI as Modal, ho as ModalCloseReason, vi as ModalColor, _g as ModalIcons, wm as ModalType, OC as Mutex, $m as NameError, uO as Overlay, X_ as Portal, h2 as PublishOptions, SC as ROLES_TAB_PATH, Lm as RemoteDebuggerMode, xC as SETTINGS_TAB_PATH, Ym as SHARED_API_PREFIX, rI as SourceCodeDescriptor, $A as Switcher, mC as TabEventsActions, mI as Tip, vI as TipsProvider, dI as Toast, wI as Tooltip, pI as Tree, vA as TreeIcon, vv as TreeNode, hC as WebformActions, fs as WebformEventsActions, xI as ZoomComponent, Hk as ZoomLevel, l2 as _isArrayDatasource, c2 as _isObjectDatasource, v2 as addAttributesToContent, k2 as addFolder, AC as by, KI as byId, VI as byPath, w2 as callServerSideParser, x2 as checkUpdates, G2 as createFolder, LI as datasourcesSubject, DI as debuggerSubject, P2 as dropFile, $2 as dropFolder, YI as exists, jI as extractWebformName, m2 as generateUUID, E2 as getAppSettings, M2 as getCatalog, XI as getDatasourceId, G$ as getDefaultAppSettings, T2 as getFile, N2 as getFileContent, qI as getFileExtentionFromType, HI as getFilenameAndTypeFromPath, I2 as getFilesInfo, K$ as getFolder, O2 as getFolders, J2 as getFunctionContent, H2 as getMonacoTheme, Y2 as getNodeInfo, B2 as getSavedConditions, z2 as getSharedAppEvents, W2 as getSharedCSS, D2 as getSharedDatasources, ks as getSharedResource, F2 as getSupportedLanguages, Mm as getTypeFromExtension, U2 as getUserPrivileges, A2 as getWebForm, MC as hasAttributesString, Ne as http, _2 as installUpdates, kC as isArrayDatasource, t2 as isDataClassMethod, e2 as isDataStoreMethod, f2 as isDateDatasource, s2 as isEntity, i2 as isEntityDatasource, r2 as isEntityMethod, u2 as isEntitySelection, o2 as isEntitySelectionDatasource, n2 as isEntitySelectionMethod, JI as isObjectAttribute, CC as isObjectDatasource, QI as isRelatedAttribute, RC as isRelatedEntitiesAttribute, PC as isRelatedEntityAttribute, $C as isScalarDatasource, TC as isSimpleAttribute, a2 as isSimpleDatasource, d2 as loadDS, p2 as loadI18n, Q2 as log, L2 as login, NI as lspSubject, V2 as moveItem, ZI as outBy, GI as outById, g2 as parseAttributes, Fm as queue, FC as removeAttributesString, K2 as removeItem, R2 as renameFile, C2 as renameFolder, zc as sanitizeContent, X2 as saveContent, Z2 as setCraftedComponents, Qm as setFileContent, j2 as setSharedAppEvents, q2 as setSharedSources, LC as stringifyAttributes, FI as tabEventsSubject, zI as tasksManagerSubject, vC as toastSubject, eL as trackEvent, y2 as transformDates, Jm as tryCreateSharedResource, _I as useDidMountEffect, II as useDoubleClick, PI as useFeatureFlags, RI as useForwardedRef, EI as useHotkeys, CI as useIdentity, OI as useOutsideClick, AI as usePrevious, $I as useStateObject, TI as useStateRef, jR as useTip, bC as validateName, WI as validateServerSide, BI as validateValue, ic as webformEventsSubject, MI as webformSubject };
