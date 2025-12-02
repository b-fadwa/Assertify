import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__-C_RToFvF.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const Mi = /*@__PURE__*/getDefaultExportFromCjs(qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__);

export { Mi as M, qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__ as q };
