import { q as qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-C8b325vj.js';
import { LSPProvider, useLSP } from '@ws-ui/code-editor';
import { n as nk, M as MI, q as qnr, W as WI, a as qr, z as zM, p as pD, R as Rf, A as Af, P as Pf, C as Cn, h as h_, b as Anr, c as qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, G as Gnr, d as n8t, v as vie, t as tir, e as p5, F as Fr, T as TM, f as Tf, g as aI, I as It, k as kM, B as BN, j as jN } from './index.es-0e7-oYyK.js';
import { q as qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__ } from './qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__-Ddss5I0C.js';
import './qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__-DNYH2Lwv.js';
import './qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-RYGQDSnO.js';
import './qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__-C_RToFvF.js';
import './preload-helper-CqoC6PUU.js';
import './emotion-react.browser.esm-CmotHgrU.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './tiny-invariant-w-EUxzzv.js';

const J = () => {
  const t = qr(kM), s = WI();
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: t.map((o, n) => /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.Modal,
    {
      hasOverlay: n === 0,
      ...o,
      onClose: (r) => s(jN(r)),
      onEdit: (r) => s(BN(r))
    },
    o.id
  )) });
};
function K(t) {
  const s = WI(), o = qr(Fr(t.path)), n = qr(TM);
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    o ? (t.replace && t.date && o && o.date !== t.date && s(Tf(o)), n !== t.path && s(aI(t.path))) : s(
      It({
        date: t.date,
        view: {
          panel: {
            isOpen: false,
            type: "",
            current: ""
          }
        },
        flags: { enabled: true },
        name: t.name,
        path: t.path,
        type: qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM,
        initialContent: t.content,
        content: t.content
      })
    );
  }, []), o;
}
function Q({ webform: t, onChange: s, userComponents: o }) {
  const { inited: n, lastError: r, reload: S } = useLSP(), i = WI(), c = K(t), d = qr(
    zM("studio.tips", "studio.tipsBaseUrl")
  ), f = d["studio.tips"], m = d["studio.tipsBaseUrl"];
  return qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    i(pD()), i(Rf()), i(Af()), i(Pf()), i(Cn()), i(h_());
  }, []), /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 bg-grey-900 h-screen", children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Anr, { isInsideStudio: true, isStandaloneEditor: true, children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.TipsProvider, { enabled: f, baseUrl: m, children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Gnr, { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(n8t, { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(vie, { children: [
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        tir,
        {
          useDispatch: WI,
          useSelector: qr,
          store: MI(),
          lspProps: {
            inited: n,
            lastError: r,
            reload: S
          },
          path: t.path,
          content: (c == null ? void 0 : c.content) || t.content,
          userComponents: o,
          onChange: s
        }
      ),
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(p5.Global, {})
    ] }) }) }) }) }),
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(J, {})
  ] });
}
const nt = (t) => {
  const s = `ws${location.protocol === "https:" ? "s" : ""}://${location.host}/LSP`;
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(nk, { store: MI(), children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qnr, { children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    LSPProvider,
    {
      url: s,
      qodly: true,
      defaultZoom: 0,
      defaultInited: true,
      children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Q, { ...t })
    }
  ) }) });
};

export { nt as default };
