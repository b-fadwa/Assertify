import { q as qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__-C_RToFvF.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/craftjs-core", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^0.2.26"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ = exportModule;

export { qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ as q };
