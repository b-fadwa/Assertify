import { q as qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-C8b325vj.js';
import { q as qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__-C_RToFvF.js';
import { F, q as qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__ } from './qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__-Ddss5I0C.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ } from './qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-RYGQDSnO.js';
import { q as qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__ } from './qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__-DNYH2Lwv.js';
import { i as isObjectLike_1, _ as _baseGetTag, a as isArray_1, b as _Symbol } from './isObjectLike-Bwq787f3.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_5df9f8bf97cd814323f8__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.6.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

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
function MdArrowDropDown (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 10l5 5 5-5z"}}]})(props);
}

const commonSettings = [
  {
    key: "position",
    label: "Position",
    type: qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "bottom-center", label: "Bottom Center" },
      { value: "bottom-left", label: "Bottom Left" },
      { value: "bottom-right", label: "Bottom Right" },
      { value: "top-center", label: "Top Center" },
      { value: "top-left", label: "Top Left" },
      { value: "top-right", label: "Top Right" },
      { value: "left-center", label: "Left Center" },
      { value: "right-center", label: "Right Center" }
    ],
    defaultValue: "bottom-center"
  },
  {
    key: "action",
    label: "Action",
    type: qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "click", label: "Click" },
      { value: "hover", label: "Hover" }
    ],
    defaultValue: "click"
  },
  {
    key: "isShown",
    label: "Is Shown in Build Mode",
    type: qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    defaultValue: false
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  },
  ...qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS
];
const BasicSettings = [
  ...commonSettings,
  ...qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow")
];

const config = {
  craft: {
    displayName: "Popover",
    kind: qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "Popover",
    exposed: true,
    icon: MdArrowDropDown,
    events: [],
    datasources: {}
  },
  defaultProps: {
    position: "bottom-center",
    isShown: false,
    action: "click",
    style: {
      minWidth: "48px",
      width: "fit-content"
    }
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

const Popover$3 = ({
  children,
  trigger,
  position = "bottom-center",
  isShown = false,
  handleToggle = () => {
  },
  dialogRoot,
  action = "click"
}) => {
  const [coords, setCoords] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState({
    left: 0,
    top: 0
  });
  const [display, setDisplay] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState("hidden");
  const triggerRef = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null);
  const contentRef = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useRef(null);
  let qodlyCanva = document.getElementsByClassName("fd-canvas")[0];
  const updatePopoverPosition = () => {
    if (isShown && triggerRef.current && contentRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = contentRef.current.getBoundingClientRect();
      let calculatedCoords = getPopoverCoords(triggerRect, popoverRect, position);
      calculatedCoords = adjustPopoverPosition(calculatedCoords, popoverRect);
      setCoords(calculatedCoords);
    }
    if (triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      if (triggerRect.top < 0 || triggerRect.bottom > window.innerHeight) {
        setDisplay("hidden");
      } else {
        setDisplay("block");
      }
    }
  };
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    const observer = new MutationObserver((mutationRecords) => {
      mutationRecords.forEach((mutation) => {
        if (mutation.attributeName === "style" || mutation.attributeName === "class") {
          updatePopoverPosition();
        }
      });
    });
    if (qodlyCanva) {
      observer.observe(qodlyCanva, {
        attributes: true,
        attributeFilter: ["style", "class"],
        childList: true
      });
    }
    return () => {
      if (qodlyCanva) {
        observer.disconnect();
      }
    };
  }, [qodlyCanva]);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (isShown) {
      updatePopoverPosition();
      window.addEventListener("scroll", updatePopoverPosition, true);
      window.addEventListener("resize", updatePopoverPosition);
    }
    return () => {
      window.removeEventListener("scroll", updatePopoverPosition);
      window.removeEventListener("resize", updatePopoverPosition);
    };
  }, [isShown, position, dialogRoot, triggerRef.current, contentRef.current]);
  qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useEffect(() => {
    if (action !== "click") return;
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
        handleToggle(false);
      }
    };
    if (isShown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [action, isShown, handleToggle]);
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "popover", children: [
    /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: "trigger",
        ref: triggerRef,
        onClick: () => action === "click" && handleToggle(!isShown),
        onMouseEnter: () => action === "hover" && handleToggle(true),
        children: trigger
      }
    ),
    dialogRoot && isShown && qodly_5df9f8bf97cd814323f8__loadShare__react_mf_2_dom__loadShare__.createPortal(
      /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        "div",
        {
          onMouseLeave: () => action === "hover" && handleToggle(false),
          ref: contentRef,
          className: `popover-content fixed ${display} ${position}`,
          style: { ...coords, minWidth: "48px" },
          children
        }
      ),
      dialogRoot
    )
  ] });
};
const getPopoverCoords = (triggerRect, popoverRect, position) => {
  const coords = { top: 0, left: 0 };
  switch (position) {
    case "bottom-center":
      coords.top = triggerRect.bottom;
      coords.left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
      break;
    case "bottom-left":
      coords.top = triggerRect.bottom;
      coords.left = triggerRect.left;
      break;
    case "bottom-right":
      coords.top = triggerRect.bottom;
      coords.left = triggerRect.right - popoverRect.width;
      break;
    case "top-center":
      coords.top = triggerRect.top - popoverRect.height;
      coords.left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
      break;
    case "top-left":
      coords.top = triggerRect.top - popoverRect.height;
      coords.left = triggerRect.left;
      break;
    case "top-right":
      coords.top = triggerRect.top - popoverRect.height;
      coords.left = triggerRect.right - popoverRect.width;
      break;
    case "left-center":
      coords.top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
      coords.left = triggerRect.left - popoverRect.width;
      break;
    case "right-center":
      coords.top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
      coords.left = triggerRect.right;
      break;
  }
  return coords;
};
const adjustPopoverPosition = (coords, popoverRect) => {
  const adjustedCoords = { ...coords };
  if (coords.left < 0) {
    adjustedCoords.left = 0;
  }
  if (coords.left + popoverRect.width > window.innerWidth) {
    adjustedCoords.left = window.innerWidth - popoverRect.width;
  }
  if (coords.top < 0) {
    adjustedCoords.top = 0;
  }
  if (coords.top + popoverRect.height > window.innerHeight) {
    adjustedCoords.top = window.innerHeight - popoverRect.height;
  }
  return adjustedCoords;
};

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */

function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce$1;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */

function basePropertyOf$1(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf$1;

var basePropertyOf = _basePropertyOf;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter$1 = basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;

var Symbol$1 = _Symbol,
    arrayMap = _arrayMap,
    isArray = isArray_1,
    isSymbol = isSymbol_1;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$2(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$2;

var deburrLetter = _deburrLetter,
    toString$1 = toString_1;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;

/** Used to compose unicode capture groups. */
var rsCombo$1 = '[' + rsComboRange$1 + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo$1, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr$1(string) {
  string = toString$1(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr$1;

/** Used to match words composed of alphanumeric characters. */

var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords$1(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords$1;

/** Used to detect strings that need a more robust regexp to match words. */

var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord$1(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord$1;

/** Used to compose unicode character classes. */

var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords$1(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords$1;

var asciiWords = _asciiWords,
    hasUnicodeWord = _hasUnicodeWord,
    toString = toString_1,
    unicodeWords = _unicodeWords;

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words$1(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

var words_1 = words$1;

var arrayReduce = _arrayReduce,
    deburr = deburr_1,
    words = words_1;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder$1(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder$1;

var createCompounder = _createCompounder;

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

var kebabCase_1 = kebabCase;

const kebabCase$1 = /*@__PURE__*/getDefaultExportFromCjs(kebabCase_1);

const Popover$2 = ({ position, isShown, style, className, classNames = [] }) => {
  const {
    connectors: { connect }
  } = qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const { resolver } = qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const path = qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useWebformPath();
  const dialogRoot = document.querySelector(`#__wf-${kebabCase$1(path)} .craftjs-renderer`);
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    Popover$3,
    {
      position,
      isShown,
      handleToggle: () => true,
      dialogRoot,
      trigger: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element, { id: "PopoverTrigger", is: resolver.StyleBox, canvas: true, children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          is: resolver.Text,
          doc: [
            {
              type: "paragraph",
              children: [{ text: "Pop Over Trigger (you can delete this!)." }]
            }
          ]
        }
      ) }),
      children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
        {
          id: "PopoverContent",
          is: resolver.StyleBox,
          canvas: true,
          style: { boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" },
          children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
            {
              is: resolver.Text,
              doc: [
                {
                  type: "paragraph",
                  children: [{ text: "Pop Over Content (you can delete this!)." }]
                }
              ]
            }
          )
        }
      )
    }
  ) });
};

const Popover$1 = ({ action, position, style, className, classNames = [] }) => {
  const { connect } = qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const { resolver } = qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const dialogRoot = document.getElementById("dialogs-root");
  const [isShown, setIsShown] = qodly_5df9f8bf97cd814323f8__loadShare__react__loadShare__.useState(false);
  return /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    Popover$3,
    {
      position,
      trigger: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element, { id: "PopoverTrigger", is: resolver.StyleBox, canvas: true }),
      isShown,
      action,
      handleToggle: setIsShown,
      dialogRoot,
      children: /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element, { id: "PopoverContent", is: resolver.StyleBox, canvas: true })
    }
  ) });
};

const Popover = (props) => {
  const { enabled } = qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Popover$2, { ...props }) : /* @__PURE__ */ qodly_5df9f8bf97cd814323f8__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Popover$1, { ...props });
};
Popover.craft = config.craft;
Popover.info = config.info;
Popover.defaultProps = config.defaultProps;

const components = {
  // components
  Popover
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_5df9f8bf97cd814323f8__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
