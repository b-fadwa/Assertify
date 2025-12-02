import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__-DnKYtz-H.js';

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_8bff58004fb5e4e0207f__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__ = exportModule;

const o = /*@__PURE__*/getDefaultExportFromCjs(qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__);

const N = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: o
}, [qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__]);

export { N, o, qodly_8bff58004fb5e4e0207f__loadShare__react__loadShare__ as q };
