import { q as qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-swrtfv56.js';
import { LSPProvider, useLSP } from '@ws-ui/code-editor';
import { F as Fir, a as aM, b as Fr, c as cN, O as OD, d as Il, D as Dl, e as Nl, R as Rn, f as b_, M as Ml, g as Dir, q as qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, L as Lir, H as H8t, h as Tie, i as Hir, K as KI, j as h5, k as qr, m as jM, n as Ol, _ as _I, o as Mt, X as XM, s as sL, p as aL } from './index.es-LzM0aJQf.js';
import { q as qodly_37629285cf887b8497da__loadShare__react__loadShare__ } from './qodly_37629285cf887b8497da__loadShare__react__loadShare__-BWhi7Tnk.js';
import './qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-ufRHCw64.js';
import './qodly_37629285cf887b8497da__loadShare__react_mf_2_dom__loadShare__-Csxi__PV.js';
import './qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__-BpXFY6sD.js';
import './preload-helper-CqoC6PUU.js';
import './index.es-DvjEl9uV.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './tiny-invariant-w-EUxzzv.js';

const J = () => {
  const t = Fr(XM), s = aM();
  return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: t.map((o, i) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.Modal,
    {
      hasOverlay: i === 0,
      ...o,
      onClose: (r) => s(aL(r)),
      onEdit: (r) => s(sL(r))
    },
    o.id
  )) });
};
function K(t) {
  const s = aM(), o = Fr(qr(t.path)), i = Fr(jM);
  return qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    o ? (t.replace && t.date && o && o.date !== t.date && s(Ol(o)), i !== t.path && s(_I(t.path))) : s(
      Mt({
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
        type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM,
        initialContent: t.content,
        content: t.content
      })
    );
  }, []), o;
}
function Q({ webform: t, onChange: s, userComponents: o }) {
  const { inited: i, lastError: r, reload: u } = useLSP(), a = aM(), c = K(t), d = Fr(
    cN("studio.tips", "studio.tipsBaseUrl")
  ), S = d["studio.tips"], f = d["studio.tipsBaseUrl"];
  return qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    a(OD()), a(Il()), a(Dl()), a(Nl()), a(Rn()), a(b_()), a(Ml());
  }, []), /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 bg-grey-900 h-screen", children: [
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Dir, { isInsideStudio: true, isStandaloneEditor: true, children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.TipsProvider, { enabled: S, baseUrl: f, children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Lir, { children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(H8t, { children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(Tie, { children: [
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        Hir,
        {
          useDispatch: aM,
          useSelector: Fr,
          store: KI(),
          lspProps: {
            inited: i,
            lastError: r,
            reload: u
          },
          path: t.path,
          content: (c == null ? void 0 : c.content) || t.content,
          userComponents: o,
          onChange: s
        }
      ),
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(h5.Global, {})
    ] }) }) }) }) }),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(J, {})
  ] });
}
const it = (t) => {
  const s = `ws${location.protocol === "https:" ? "s" : ""}://${location.host}/LSP`;
  return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Fir, { children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    LSPProvider,
    {
      url: s,
      qodly: true,
      defaultZoom: 0,
      defaultInited: true,
      children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Q, { ...t })
    }
  ) });
};

export { it as default };
