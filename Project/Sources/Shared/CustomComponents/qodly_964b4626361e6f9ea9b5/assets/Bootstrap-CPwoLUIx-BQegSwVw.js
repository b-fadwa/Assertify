import { _ as __vitePreload } from './preload-helper-CqoC6PUU.js';
import { q as qodly_964b4626361e6f9ea9b5__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_964b4626361e6f9ea9b5__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-BlPUhvsO.js';
import { q as qodly_964b4626361e6f9ea9b5__loadShare__react__loadShare__ } from './qodly_964b4626361e6f9ea9b5__loadShare__react__loadShare__-Dk-jmpWe.js';
import { T as Tk, K as KI, I as Iir, G as Gd, N as ND, q as qodly_964b4626361e6f9ea9b5__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, l as lir } from './index.es-qCfm0agO.js';
import './qodly_964b4626361e6f9ea9b5__mf_v__runtimeInit__mf_v__-nhGdadVP.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './emotion-react.browser.esm-V_1F8ACi.js';
import './tiny-invariant-w-EUxzzv.js';
import './qodly_964b4626361e6f9ea9b5__loadShare__react_mf_2_dom__loadShare__-BWAShKv4.js';
import './qodly_964b4626361e6f9ea9b5__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-D4lkm3-o.js';
import '@ws-ui/code-editor';

const t = {}, r = (t == null ? void 0 : t.VITE_WEBFORM) || "standalone", u = {
  name: r,
  path: `WebForms/${r}.WebForm`,
  content: ND(qodly_964b4626361e6f9ea9b5__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM, {}),
  date: (/* @__PURE__ */ new Date()).toISOString()
};
async function E() {
  try {
    await qodly_964b4626361e6f9ea9b5__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.loadI18n();
  } catch {
  }
  return __vitePreload(() => import('./Editor-nF9kAahy-CBwo7FlG.js'),true              ?[]:void 0);
}
const I = qodly_964b4626361e6f9ea9b5__loadShare__react__loadShare__.lazy(E), b = Gd("i18n"), O = ({
  onChange: o,
  userComponents: n
}) => /* @__PURE__ */ qodly_964b4626361e6f9ea9b5__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  qodly_964b4626361e6f9ea9b5__loadShare__react__loadShare__.Suspense,
  {
    fallback: /* @__PURE__ */ qodly_964b4626361e6f9ea9b5__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_964b4626361e6f9ea9b5__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.AppLoader, { message: "Initializing...", version: lir }),
    children: /* @__PURE__ */ qodly_964b4626361e6f9ea9b5__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tk, { store: KI(), children: /* @__PURE__ */ qodly_964b4626361e6f9ea9b5__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Iir, { isI18nEnabled: b, children: /* @__PURE__ */ qodly_964b4626361e6f9ea9b5__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      I,
      {
        webform: u,
        userComponents: n,
        onChange: o
      }
    ) }) })
  }
);

export { O as default };
