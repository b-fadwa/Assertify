import { q as qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DGp1nhFM.js';
import { q as qodly_4b73e4fdf8fb53606fa0__mf_v__runtimeInit__mf_v__ } from './qodly_4b73e4fdf8fb53606fa0__mf_v__runtimeInit__mf_v__-DeeVpxRz.js';
import { F, q as qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__ } from './qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__-CO-DFPBr.js';
import { q as qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ } from './qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-McOimjEu.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { l as lodashExports } from './lodash-LXAsj4Au.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_4b73e4fdf8fb53606fa0__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/webform-editor", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^1.10.3"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = F.createContext && F.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return F.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return F.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return F.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && F.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? F.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function BsBoundingBoxCircles (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}}]})(props);
}

const commonSettings = [
  {
    key: "parameters",
    label: "Parameters",
    titleProperty: "name",
    type: qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    data: [
      {
        key: "name",
        label: "Name",
        type: qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD
      },
      {
        key: "source",
        label: "Source",
        type: qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
      },
      {
        key: "defaultValue",
        label: "Default Value",
        type: qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD
      }
    ]
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  }
];
const BasicSettings = [...commonSettings];

const config = {
  craft: {
    displayName: "StylishBox",
    kind: qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "StylishBox",
    exposed: true,
    icon: BsBoundingBoxCircles,
    events: [
      {
        label: "On Click",
        value: "onclick"
      },
      {
        label: "On Blur",
        value: "onblur"
      },
      {
        label: "On Focus",
        value: "onfocus"
      },
      {
        label: "On MouseEnter",
        value: "onmouseenter"
      },
      {
        label: "On MouseLeave",
        value: "onmouseleave"
      }
    ],
    datasources: {
      accept: ["entitySel", "array"],
      declarations: (props) => {
        const { parameters } = props;
        const declarations = [];
        parameters?.forEach((param) => {
          declarations.push({
            path: param.source,
            iterable: true
          });
        });
        return declarations;
      }
    }
  },
  defaultProps: {
    iterableChild: true
  }
};

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
const cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

const StylishBox$2 = ({ parameters, className, classNames = [] }) => {
  const {
    connectors: { connect }
  } = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const { resolver } = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const transformedObject = lodashExports.chain(parameters).keyBy("name").mapValues("source").value();
  const style = transformedObject;
  return /* @__PURE__ */ qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      style: { ...style, width: "100%" },
      className: (cn(className, classNames), "p-2"),
      children: /* @__PURE__ */ qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element, { id: "container", is: resolver.StyleBox, canvas: true })
    }
  );
};

const StylishBox$1 = ({ parameters, className, classNames = [] }) => {
  const { connect } = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const { resolver } = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const [transformedObject, setTransformedObject] = qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useState({});
  const {
    actions: { getDatasource }
  } = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  const entity = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEntity();
  const processArray = qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useCallback(
    async (arr) => {
      const transformed = {};
      for (const obj of arr) {
        const ds = getDatasource(
          obj.source,
          obj.source.startsWith("$") || obj.source.includes(":$")
        );
        if (ds) {
          const value = await ds.getValue();
          const propertyName = `--${obj.name}`;
          const tempObj = {
            [propertyName]: value ? value : obj.defaultValue
          };
          Object.assign(transformed, tempObj);
        }
      }
      setTransformedObject(transformed);
    },
    [parameters]
  );
  qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useEffect(() => {
    const main = async () => {
      await processArray(parameters);
      for (const obj of parameters) {
        const ds = getDatasource(
          obj.source,
          obj.source.startsWith("$") || obj.source.includes(":$")
        );
        if (ds) {
          ds.addListener("changed", () => {
            processArray(parameters);
          });
        }
      }
    };
    main();
    return () => {
      parameters.forEach((obj) => {
        const ds = getDatasource(
          obj.source,
          obj.source.startsWith("$") || obj.source.includes(":$")
        );
        if (ds) {
          ds.removeListener("changed", () => processArray(parameters));
        }
      });
    };
  }, [parameters, entity]);
  return /* @__PURE__ */ qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      ref: connect,
      style: { width: "100%", ...transformedObject },
      className: cn(className, classNames),
      children: /* @__PURE__ */ qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "container",
          style: { width: "100%", height: "100%" },
          is: resolver.StyleBox,
          canvas: true
        }
      )
    }
  );
};

const StylishBox = (props) => {
  const { enabled } = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(StylishBox$2, { ...props }) : /* @__PURE__ */ qodly_4b73e4fdf8fb53606fa0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(StylishBox$1, { ...props });
};
StylishBox.craft = config.craft;
StylishBox.info = config.info;
StylishBox.defaultProps = config.defaultProps;

const components = {
  // components
  StylishBox
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
