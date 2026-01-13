import { q as qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__ } from './qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__-If-MPiLV.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/craftjs-core", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^0.2.26"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ = exportModule;

export { qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ as q };
