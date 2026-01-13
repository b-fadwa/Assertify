import { i as init_1 } from './assets/index.cjs-DfOq2DoA.js';
import exposesMap from './assets/virtualExposes-BCl5YWRY.js';
import { _ as __vitePreload } from './assets/preload-helper-CqoC6PUU.js';
import { q as qodly_964b4626361e6f9ea9b5__mf_v__runtimeInit__mf_v__ } from './assets/qodly_964b4626361e6f9ea9b5__mf_v__runtimeInit__mf_v__-nhGdadVP.js';

const importMap = {
      
        "@ws-ui/craftjs-core": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-dBSgl2xG.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/craftjs-layers": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BsLB79zw.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/craftjs-utils": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-FWPvVM2h.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/shared": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-RD4DXI3Z.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/webform-editor": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-qCfm0agO.js').then(n => n.r),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BrSEIiFz.js').then(n => n.i),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BYPMxCyR.js').then(n => n.i),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react/jsx-runtime": async () => {
          let pkg = await __vitePreload(() => import('./assets/jsx-runtime-GKDi2ZSy.js').then(n => n.j),true              ?[]:void 0);
            return pkg;
        }
      
    };
      const usedShared = {
      
          "@ws-ui/craftjs-core": {
            name: "@ws-ui/craftjs-core",
            version: "0.2.26",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^0.2.26",
              
            }
          }
        ,
          "@ws-ui/craftjs-layers": {
            name: "@ws-ui/craftjs-layers",
            version: "0.2.4",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^0.2.4",
              
            }
          }
        ,
          "@ws-ui/craftjs-utils": {
            name: "@ws-ui/craftjs-utils",
            version: "0.2.3",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^0.2.3",
              
            }
          }
        ,
          "@ws-ui/shared": {
            name: "@ws-ui/shared",
            version: "1.10.4-rc2",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^1.10.4-rc2",
              
            }
          }
        ,
          "@ws-ui/webform-editor": {
            name: "@ws-ui/webform-editor",
            version: "1.10.3",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^1.10.3",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^17.0.2",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^17.0.2",
              
            }
          }
        ,
          "react/jsx-runtime": {
            name: "react/jsx-runtime",
            version: "17.0.2",
            scope: ["default"],
            loaded: false,
            from: "qodly_964b4626361e6f9ea9b5",
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
              requiredVersion: "^17.0.2",
              
            }
          }
        
    };
      const usedRemotes = [
      ];

const initTokens = {};
  const shareScopeName = "default";
  const mfName = "qodly_964b4626361e6f9ea9b5";
  async function init(shared = {}, initScope = []) {
    const initRes = init_1({
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
    qodly_964b4626361e6f9ea9b5__mf_v__runtimeInit__mf_v__.initResolve(initRes);
    return initRes
  }

  function getExposes(moduleName) {
    if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
(function () {
	'use strict';

	try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode(".dropZoneHeader {\n  flex: 1;\n  width: 100%;\n  border: 2px dashed royalblue;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.dropZoneHeader:hover {\n  background-color: rgba(0, 110, 255, 0.075);\n}\n\n.dropZoneHeader p {\n  text-align: center;\n}\n\n.dropZoneFooter {\n  background-color: rgba(0, 110, 255, 0.075);\n  width: 100%;\n  min-height: 40px;\n  max-height: fit-content;\n  padding: 8px;\n  border-radius: 10px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: black;\n  border: none;\n}\n\n.dropZoneFooter > div {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n}\n\n.dropZoneFooter > div > p {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}

})();
