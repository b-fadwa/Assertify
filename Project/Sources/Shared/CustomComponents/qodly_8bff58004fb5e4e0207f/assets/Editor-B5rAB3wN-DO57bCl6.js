import { q as qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DU4PkoF4.js';
import { LSPProvider, useLSP } from '@ws-ui/code-editor';
import { p as pk, U as UI, d as dir, Z as ZI, F as Fr, r as rN, E as ED, D as Df, P as Pf, M as Mf, O as On, m as m_, I as If, J as Jnr, q as qodly_8bff58004fb5e4e0207f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, f as fir, w as w8t, N as Nie, b as bir, g as g5, a as qr, c as NM, C as Cf, e as pI, h as It, Y as YM, i as ZN, Q as QN } from './index.es-KE0BIIWK.js';
import { q as qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__ } from './qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__-Ce2zDrQn.js';
import './qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__-CAf6bgMw.js';
import './qodly_8bff58004fb5e4e0207f__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-CGVZNqr0.js';
import './qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__-DnKYtz-H.js';
import './preload-helper-CqoC6PUU.js';
import './index.es-Cv6aJD34.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './tiny-invariant-w-EUxzzv.js';

const K = () => {
  const t = Fr(YM), s = ZI();
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: t.map((o, n) => /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    qodly_8bff58004fb5e4e0207f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.Modal,
    {
      hasOverlay: n === 0,
      ...o,
      onClose: (i) => s(QN(i)),
      onEdit: (i) => s(ZN(i))
    },
    o.id
  )) });
};
function Q(t) {
  const s = ZI(), o = Fr(qr(t.path)), n = Fr(NM);
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    o ? (t.replace && t.date && o && o.date !== t.date && s(Cf(o)), n !== t.path && s(pI(t.path))) : s(
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
        type: qodly_8bff58004fb5e4e0207f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM,
        initialContent: t.content,
        content: t.content
      })
    );
  }, []), o;
}
function V({ webform: t, onChange: s, userComponents: o }) {
  const { inited: n, lastError: i, reload: S } = useLSP(), r = ZI(), c = Q(t), d = Fr(
    rN("studio.tips", "studio.tipsBaseUrl")
  ), f = d["studio.tips"], v = d["studio.tipsBaseUrl"];
  return qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__.useEffect(() => {
    r(ED()), r(Df()), r(Pf()), r(Mf()), r(On()), r(m_()), r(If());
  }, []), /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 bg-grey-900 h-screen", children: [
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Jnr, { isInsideStudio: true, isStandaloneEditor: true, children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_8bff58004fb5e4e0207f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.TipsProvider, { enabled: f, baseUrl: v, children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(fir, { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(w8t, { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(Nie, { children: [
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        bir,
        {
          useDispatch: ZI,
          useSelector: Fr,
          store: UI(),
          lspProps: {
            inited: n,
            lastError: i,
            reload: S
          },
          path: t.path,
          content: (c == null ? void 0 : c.content) || t.content,
          userComponents: o,
          onChange: s
        }
      ),
      /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(g5.Global, {})
    ] }) }) }) }) }),
    /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(K, {})
  ] });
}
const at = (t) => {
  const s = `ws${location.protocol === "https:" ? "s" : ""}://${location.host}/LSP`;
  return /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(pk, { store: UI(), children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(dir, { children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    LSPProvider,
    {
      url: s,
      qodly: true,
      defaultZoom: 0,
      defaultInited: true,
      children: /* @__PURE__ */ qodly_8bff58004fb5e4e0207f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V, { ...t })
    }
  ) }) });
};

export { at as default };
