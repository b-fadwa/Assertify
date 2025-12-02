import { q as qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__-B52JeagX.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react/jsx-runtime", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ = exportModule;

export { qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ as q };
