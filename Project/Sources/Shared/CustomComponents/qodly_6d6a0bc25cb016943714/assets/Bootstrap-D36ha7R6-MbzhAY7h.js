import { _ as __vitePreload } from './preload-helper-CqoC6PUU.js';
import { q as qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-Ca9w4HbG.js';
import { q as qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__ } from './qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__-BfBu_2Z3.js';
import { C as Ck, Q as QI, d as dir, z as zd, N as NP, q as qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, a as znr } from './index.es-Bw0hiMFl.js';
import './qodly_6d6a0bc25cb016943714__mf_v__runtimeInit__mf_v__-oukryKlh.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index.es-BvuHrdRX.js';
import './tiny-invariant-w-EUxzzv.js';
import './qodly_6d6a0bc25cb016943714__loadShare__react_mf_2_dom__loadShare__-B5Slzd4O.js';
import './qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-po3ioQiJ.js';
import '@ws-ui/code-editor';

const t = {}, r = (t == null ? void 0 : t.VITE_WEBFORM) || "standalone", u = {
  name: r,
  path: `WebForms/${r}.WebForm`,
  content: NP(qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM, {}),
  date: (/* @__PURE__ */ new Date()).toISOString()
};
async function E() {
  try {
    await qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.loadI18n();
  } catch {
  }
  return __vitePreload(() => import('./Editor-BIsMT8rH-BWsCy87V.js'),true              ?[]:void 0);
}
const I = qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__.lazy(E), b = zd("i18n"), O = ({
  onChange: o,
  userComponents: n
}) => /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__.Suspense,
  {
    fallback: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.AppLoader, { message: "Initializing...", version: znr }),
    children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Ck, { store: QI(), children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(dir, { isI18nEnabled: b, children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
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
