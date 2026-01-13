import { q as qodly_964b4626361e6f9ea9b5__mf_v__runtimeInit__mf_v__ } from './qodly_964b4626361e6f9ea9b5__mf_v__runtimeInit__mf_v__-nhGdadVP.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_964b4626361e6f9ea9b5__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/craftjs-utils", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^0.2.3"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_964b4626361e6f9ea9b5__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ = exportModule;

export { qodly_964b4626361e6f9ea9b5__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ as q };
