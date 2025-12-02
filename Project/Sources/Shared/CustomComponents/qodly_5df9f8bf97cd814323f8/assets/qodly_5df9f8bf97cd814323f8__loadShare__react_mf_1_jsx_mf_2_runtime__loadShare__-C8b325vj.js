import { q as qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__-C_RToFvF.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react/jsx-runtime", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ = exportModule;

export { qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ as q };
