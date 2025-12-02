import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_6d6a0bc25cb016943714__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_6d6a0bc25cb016943714__mf_v__runtimeInit__mf_v__-oukryKlh.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_6d6a0bc25cb016943714__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_6d6a0bc25cb016943714__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(qodly_6d6a0bc25cb016943714__loadShare__react_mf_2_dom__loadShare__);

export { ReactDOM as R, qodly_6d6a0bc25cb016943714__loadShare__react_mf_2_dom__loadShare__ as q };
