import { q as qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__-D1mjxk44.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react/jsx-runtime", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ = exportModule;

export { qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ as q };
