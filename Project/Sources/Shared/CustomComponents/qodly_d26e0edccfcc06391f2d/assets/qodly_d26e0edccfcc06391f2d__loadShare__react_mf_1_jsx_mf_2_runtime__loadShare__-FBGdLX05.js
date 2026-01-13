import { q as qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__ } from './qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__-If-MPiLV.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("react/jsx-runtime", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^17.0.2"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ = exportModule;

export { qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ as q };
