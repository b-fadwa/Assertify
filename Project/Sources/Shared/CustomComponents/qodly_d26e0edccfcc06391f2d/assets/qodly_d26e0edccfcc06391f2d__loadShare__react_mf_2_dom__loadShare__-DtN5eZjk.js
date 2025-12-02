import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__-EIM9-22L.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const Mi = /*@__PURE__*/getDefaultExportFromCjs(qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__);

export { Mi as M, qodly_d26e0edccfcc06391f2d__loadShare__react_mf_2_dom__loadShare__ as q };
