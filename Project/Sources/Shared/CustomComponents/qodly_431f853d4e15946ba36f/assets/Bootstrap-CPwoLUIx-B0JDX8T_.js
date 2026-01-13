import { _ as __vitePreload } from './preload-helper-CqoC6PUU.js';
import { q as qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-pnmcWCaa.js';
import { q as qodly_431f853d4e15946ba36f__loadShare__react__loadShare__ } from './qodly_431f853d4e15946ba36f__loadShare__react__loadShare__-DVBNNWSE.js';
import { T as Tk, K as KI, I as Iir, G as Gd, N as ND, q as qodly_431f853d4e15946ba36f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, l as lir } from './index.es-6i0P6dOz.js';
import './qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__-cyrXPoie.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './emotion-react.browser.esm-BLBwmQRv.js';
import './tiny-invariant-w-EUxzzv.js';
import './qodly_431f853d4e15946ba36f__loadShare__react_mf_2_dom__loadShare__-1YGOsJMG.js';
import './qodly_431f853d4e15946ba36f__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-COJx83hm.js';
import '@ws-ui/code-editor';

const t = {}, r = (t == null ? void 0 : t.VITE_WEBFORM) || "standalone", u = {
  name: r,
  path: `WebForms/${r}.WebForm`,
  content: ND(qodly_431f853d4e15946ba36f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM, {}),
  date: (/* @__PURE__ */ new Date()).toISOString()
};
async function E() {
  try {
    await qodly_431f853d4e15946ba36f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.loadI18n();
  } catch {
  }
  return __vitePreload(() => import('./Editor-nF9kAahy-CQIstTsD.js'),true              ?[]:void 0);
}
const I = qodly_431f853d4e15946ba36f__loadShare__react__loadShare__.lazy(E), b = Gd("i18n"), O = ({
  onChange: o,
  userComponents: n
}) => /* @__PURE__ */ qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  qodly_431f853d4e15946ba36f__loadShare__react__loadShare__.Suspense,
  {
    fallback: /* @__PURE__ */ qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_431f853d4e15946ba36f__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.AppLoader, { message: "Initializing...", version: lir }),
    children: /* @__PURE__ */ qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tk, { store: KI(), children: /* @__PURE__ */ qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Iir, { isI18nEnabled: b, children: /* @__PURE__ */ qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
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
