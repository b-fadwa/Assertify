import { _ as __vitePreload } from './preload-helper-CqoC6PUU.js';
import { q as qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-FBGdLX05.js';
import { q as qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__ } from './qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__-8RC_LqNr.js';
import { T as Tk, K as KI, I as Iir, G as Gd, N as ND, q as qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, l as lir } from './index.es-BtxY5ISy.js';
import './qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__-If-MPiLV.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './emotion-react.browser.esm-NEgb9cUP.js';
import './tiny-invariant-w-EUxzzv.js';
import './qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__-Dddk7f1s.js';
import './qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-D1YUtFZO.js';
import '@ws-ui/code-editor';
import './tslib.es6-Cp7OSAX2.js';

const t = {}, r = (t == null ? void 0 : t.VITE_WEBFORM) || "standalone", u = {
  name: r,
  path: `WebForms/${r}.WebForm`,
  content: ND(qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM, {}),
  date: (/* @__PURE__ */ new Date()).toISOString()
};
async function E() {
  try {
    await qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.loadI18n();
  } catch {
  }
  return __vitePreload(() => import('./Editor-nF9kAahy-CMLF3KAf.js'),true              ?[]:void 0);
}
const I = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.lazy(E), b = Gd("i18n"), O = ({
  onChange: o,
  userComponents: n
}) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.Suspense,
  {
    fallback: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.AppLoader, { message: "Initializing...", version: lir }),
    children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tk, { store: KI(), children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Iir, { isI18nEnabled: b, children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
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
