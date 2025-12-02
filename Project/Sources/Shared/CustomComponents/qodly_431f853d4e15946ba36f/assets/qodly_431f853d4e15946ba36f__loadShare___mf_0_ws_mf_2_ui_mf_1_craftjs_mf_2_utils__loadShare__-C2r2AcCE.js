import { q as qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__-D1mjxk44.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_431f853d4e15946ba36f__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/craftjs-utils", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^0.2.3"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_431f853d4e15946ba36f__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ = exportModule;

export { qodly_431f853d4e15946ba36f__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ as q };
