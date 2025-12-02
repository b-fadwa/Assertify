import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__-DnKYtz-H.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const b = /*@__PURE__*/getDefaultExportFromCjs(qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__);

export { b, qodly_8bff58004fb5e4e0207f__loadShare__react_mf_2_dom__loadShare__ as q };
