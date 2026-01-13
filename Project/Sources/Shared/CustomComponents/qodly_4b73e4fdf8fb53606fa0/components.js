import { i as init_1 } from './assets/index.cjs-DfOq2DoA.js';
import exposesMap from './assets/virtualExposes-BvU15WZF.js';
import { _ as __vitePreload } from './assets/preload-helper-CqoC6PUU.js';
import { q as qodly_4b73e4fdf8fb53606fa0__mf_v__runtimeInit__mf_v__ } from './assets/qodly_4b73e4fdf8fb53606fa0__mf_v__runtimeInit__mf_v__-DeeVpxRz.js';

const importMap = {
      
        "@ws-ui/craftjs-core": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-B1EFKhB3.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/craftjs-layers": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BimK6Idv.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/craftjs-utils": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-Ble89c9v.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/shared": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-DgDSkrP0.js'),true              ?[]:void 0);
            return pkg;
        }
      ,
        "@ws-ui/webform-editor": async () => {
          let pkg = await __vitePreload(() => import('./assets/index.es-CSQz14V0.js').then(n => n.r),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-BrSEIiFz.js').then(n => n.i),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await __vitePreload(() => import('./assets/index-Ch1tQ8Xn.js').then(n => n.i),true              ?[]:void 0);
            return pkg;
        }
      ,
        "react/jsx-runtime": async () => {
          let pkg = await __vitePreload(() => import('./assets/jsx-runtime-YKjCJ6x4.js').then(n => n.j),true              ?[]:void 0);
            return pkg;
        }
      
    };
      const usedShared = {
      
          "@ws-ui/craftjs-core": {
            name: "@ws-ui/craftjs-core",
            version: "0.2.26",
            scope: ["default"],
            loaded: false,
            from: "qodly_4b73e4fdf8fb53606fa0",
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
            from: "qodly_4b73e4fdf8fb53606fa0",
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
            from: "qodly_4b73e4fdf8fb53606fa0",
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
            from: "qodly_4b73e4fdf8fb53606fa0",
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
            from: "qodly_4b73e4fdf8fb53606fa0",
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
            from: "qodly_4b73e4fdf8fb53606fa0",
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
            from: "qodly_4b73e4fdf8fb53606fa0",
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
            from: "qodly_4b73e4fdf8fb53606fa0",
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
  const mfName = "qodly_4b73e4fdf8fb53606fa0";
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
    qodly_4b73e4fdf8fb53606fa0__mf_v__runtimeInit__mf_v__.initResolve(initRes);
    return initRes
  }

  function getExposes(moduleName) {
    if (!(moduleName in exposesMap)) throw new Error(`Module ${moduleName} does not exist in container.`)
    return (exposesMap[moduleName])().then(res => () => res)
  }

export { getExposes as get, init };
(function () {
	'use strict';

	try{if(typeof document != 'undefined'){var elementStyle = document.createElement('style');elementStyle.appendChild(document.createTextNode(""));document.head.appendChild(elementStyle);}}catch(e){console.error('vite-plugin-css-injected-by-js', e);}

})();
