import { q as qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__-EIM9-22L.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/craftjs-core", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^0.2.26"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ = exportModule;

export { qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ as q };
