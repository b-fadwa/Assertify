import { i as index_cjs, q as qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__ } from './assets/qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__-BpXFY6sD.js';
import exposesMap from './assets/virtualExposes-DXJubmNG.js';
import { _ as __vitePreload } from './assets/preload-helper-CqoC6PUU.js';

const importMap = {
      
        "react/jsx-runtime": async () => {
          let pkg = await __vitePreload(() => import('./assets/jsx-runtime-jFexPxNf.js').then(n => n.j),true              ?[]:void 0);
          return pkg
        }
      ,
        "react": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BrSEIiFz.js').then(n => n.i),true              ?[]:void 0);
          return pkg
        }
      ,
        "react-dom": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-xgI_xHL0.js').then(n => n.i),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/webform-editor": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-LzM0aJQf.js').then(n => n.r),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/shared": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-BxNaPi31.js'),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/craftjs-core": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-Aamrk3wL.js'),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/craftjs-layers": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-C6XhOW_u.js'),true              ?[]:void 0);
          return pkg
        }
      ,
        "@ws-ui/craftjs-utils": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BtBW3Pl4.js'),true              ?[]:void 0);
          return pkg
        }
      
    };
      const usedShared = {
      
          "react/jsx-runtime": {
            name: "react/jsx-runtime",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["react/jsx-runtime"].loaded = true;
              const {"react/jsx-runtime": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "react": {
            name: "react",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["react"].loaded = true;
              const {"react": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["react-dom"].loaded = true;
              const {"react-dom": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^17.0.2"
            }
          }
        ,
          "@ws-ui/webform-editor": {
            name: "@ws-ui/webform-editor",
            version: "1.10.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["@ws-ui/webform-editor"].loaded = true;
              const {"@ws-ui/webform-editor": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.10.2"
            }
          }
        ,
          "@ws-ui/shared": {
            name: "@ws-ui/shared",
            version: "1.10.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["@ws-ui/shared"].loaded = true;
              const {"@ws-ui/shared": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.10.2"
            }
          }
        ,
          "@ws-ui/craftjs-core": {
            name: "@ws-ui/craftjs-core",
            version: "0.2.26",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["@ws-ui/craftjs-core"].loaded = true;
              const {"@ws-ui/craftjs-core": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.26"
            }
          }
        ,
          "@ws-ui/craftjs-layers": {
            name: "@ws-ui/craftjs-layers",
            version: "0.2.4",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["@ws-ui/craftjs-layers"].loaded = true;
              const {"@ws-ui/craftjs-layers": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.4"
            }
          }
        ,
          "@ws-ui/craftjs-utils": {
            name: "@ws-ui/craftjs-utils",
            version: "0.2.3",
            scope: ["default"],
            loaded: false,
            from: "qodly_37629285cf887b8497da",
            async get () {
              usedShared["@ws-ui/craftjs-utils"].loaded = true;
              const {"@ws-ui/craftjs-utils": pkgDynamicImport} = importMap; 
              const res = await pkgDynamicImport();
              const exportModule = {...res};
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              });
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.2.3"
            }
          }
        
    };
      const usedRemotes = [
      ];

const initTokens = {};
  const shareScopeName = "default";
  const mfName = "qodly_37629285cf887b8497da";
  async function init(shared = {}, initScope = []) {
    const initRes = index_cjs.init({
      name: mfName,
      remotes: usedRemotes,
      shared: usedShared,
      plugins: [],
      shareStrategy: 'version-first'
    });
    // handling circular init calls
    var initToken = initTokens[shareScopeName];
    if (!initToken)
      initToken = initTokens[shareScopeName] = { from: mfName };
    if (initScope.indexOf(initToken) >= 0) return;
    initScope.push(initToken);
    initRes.initShareScopeMap('default', shared);
    try {
      await Promise.all(await initRes.initializeSharing('default', {
        strategy: 'version-first',
        from: "build",
        initScope
      }));
    } catch (e) {
      console.error(e);
    }
    qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__.initResolve(initRes);
    return initRes
  }

  function getExposes(moduleName) {
    if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
(function () {
	'use strict';

	try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode("@tailwind base;\n@tailwind components;\n@tailwind utilities;"));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}

})();
