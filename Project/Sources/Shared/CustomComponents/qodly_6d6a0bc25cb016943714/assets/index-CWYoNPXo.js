import { q as qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-Ca9w4HbG.js';
import { q as qodly_6d6a0bc25cb016943714__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_6d6a0bc25cb016943714__mf_v__runtimeInit__mf_v__-oukryKlh.js';
import { R as React, q as qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__ } from './qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__-BfBu_2Z3.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_6d6a0bc25cb016943714__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.9.1"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

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
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React.createElement(IconBase, __assign({
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
    return React.createElement("svg", __assign({
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
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdOutlineTextSnippet (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M14.17 5L19 9.83V19H5V5h9.17m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59zM7 15h10v2H7v-2zm0-4h10v2H7v-2zm0-4h7v2H7V7z"}}]})(props);
}

const commonSettings = [
  {
    key: "expand",
    label: "Expand",
    type: qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    defaultValue: true
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  },
  ...qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS
];
const BasicSettings = [
  ...commonSettings,
  ...qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow")
];

const config = {
  craft: {
    displayName: "Tree",
    kind: qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "Tree",
    exposed: true,
    icon: MdOutlineTextSnippet,
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
      },
      {
        label: "On KeyDown",
        value: "onkeydown"
      },
      {
        label: "On KeyUp",
        value: "onkeyup"
      }
    ],
    datasources: {
      accept: ["string"]
    }
  },
  defaultProps: {
    expand: true
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

const treeData = [
  {
    key: "1",
    icon: "fa-regular fa-folder",
    label: "Node 1",
    children: [
      {
        key: "2",
        label: "Node 1.1",
        icon: "fa-solid fa-inbox",
        children: [
          { key: "4", label: "Node 1.1.1", icon: "fa-regular fa-file" },
          { key: "5", label: "Node 1.1.2", icon: "fa-regular fa-file" }
        ]
      },
      { key: "3", icon: "fa-regular fa-calendar-days", label: "Node 1.2" }
    ]
  },
  { key: "4", icon: "fa-regular fa-folder", label: "Node 2" }
];
const Tree$2 = ({ style, className, classNames = [] }) => {
  const {
    connectors: { connect }
  } = qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  return /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(TreeNodeComponent$1, { treeData }) });
};
function TreeNodeComponent$1({ treeData: treeData2, onLastItemClick }) {
  return /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("ul", { children: treeData2?.map((node, index) => /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    TreeNode$1,
    {
      node,
      isLast: index === treeData2.length - 1,
      onLastItemClick
    },
    node.key
  )) });
}
function TreeNode$1({ node, isLast, onLastItemClick, expand }) {
  const { children, label, icon } = node;
  const [showChildren, setShowChildren] = qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__.useState(expand || false);
  const handleClick = () => {
    if (isLast) {
      setShowChildren(!showChildren);
      if (onLastItemClick) {
        onLastItemClick(node);
      }
    } else {
      setShowChildren(!showChildren);
    }
  };
  return /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { onClick: handleClick, style: { marginBottom: "10px" }, children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center gap-1", style: { cursor: children ? "pointer" : "" }, children: [
      children && /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("i", { className: `fa-solid ${showChildren ? "fa-angle-down" : "fa-angle-right"} mr-2` }),
      icon && /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("i", { className: ` ${icon} mr-1` }),
      /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { children: label })
    ] }) }),
    /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("ul", { style: { paddingLeft: "10px", marginLeft: "27px" }, children: showChildren && /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(TreeNodeComponent$1, { treeData: children }) })
  ] });
}

function TreeNode({ node, isLast, onLastItemClick, expand }) {
  const { children, label, icon, url, webform, target } = node;
  const [showChildren, setShowChildren] = qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__.useState(expand || false);
  const handleClick = () => {
    if (isLast) {
      setShowChildren(!showChildren);
      if (onLastItemClick) {
        onLastItemClick(node);
      }
    } else {
      setShowChildren(!showChildren);
    }
  };
  const handleChildClick = () => {
    if (webform && target) {
      qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.webformLoaderSubject.next({
        id: webform,
        action: qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.WebformLoaderActions.NAVIGATE,
        payload: { target }
      });
    }
  };
  return /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: [
    /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { onClick: handleClick, style: { marginBottom: "10px" }, children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center gap-1", style: { cursor: children ? "pointer" : "" }, children: [
      children && /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("i", { className: `fa-solid ${showChildren ? "fa-angle-down" : "fa-angle-right"} mr-2` }),
      icon && /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("i", { className: `${icon} mr-1` }),
      url ? /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("a", { href: url, children: label }) : /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: `${webform && "cursor-pointer"}  `, onClick: handleChildClick, children: label })
    ] }) }),
    showChildren && children && /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("ul", { style: { paddingLeft: "10px", marginLeft: "27px" }, children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(TreeNodeComponent, { treeData: children, expand }) })
  ] });
}

function TreeNodeComponent({ treeData, onLastItemClick, expand }) {
  return /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("ul", { children: treeData?.map((node, index) => /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    TreeNode,
    {
      node,
      isLast: index === treeData.length - 1,
      onLastItemClick,
      expand
    },
    node.key
  )) });
}

const Tree$1 = ({ expand, style, className, classNames = [] }) => {
  const { connect } = qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const [value, setValue] = qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__.useState([]);
  const {
    sources: { datasource: ds }
  } = qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  qodly_6d6a0bc25cb016943714__loadShare__react__loadShare__.useEffect(() => {
    if (!ds) return;
    const listener = async () => {
      const v = await ds.getValue();
      setValue(v);
    };
    listener();
    ds.addListener("changed", listener);
    return () => {
      ds.removeListener("changed", listener);
    };
  }, [ds]);
  return /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(TreeNodeComponent, { treeData: value, expand }) });
};

const Tree = (props) => {
  const { enabled } = qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tree$2, { ...props }) : /* @__PURE__ */ qodly_6d6a0bc25cb016943714__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tree$1, { ...props });
};
Tree.craft = config.craft;
Tree.info = config.info;
Tree.defaultProps = config.defaultProps;

const components = {
  // components
  Tree
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_6d6a0bc25cb016943714__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
