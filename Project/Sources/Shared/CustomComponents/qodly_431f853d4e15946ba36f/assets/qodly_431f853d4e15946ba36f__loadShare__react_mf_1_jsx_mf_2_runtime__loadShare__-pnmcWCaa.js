import { q as qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__ } from './qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__-cyrXPoie.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("react/jsx-runtime", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^17.0.2"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ = exportModule;

export { qodly_431f853d4e15946ba36f__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ as q };
