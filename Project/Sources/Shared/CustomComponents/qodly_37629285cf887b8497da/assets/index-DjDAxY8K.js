import { q as qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-swrtfv56.js';
import { q as qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__, i as index_cjs } from './qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__-BpXFY6sD.js';
import { o, q as qodly_37629285cf887b8497da__loadShare__react__loadShare__ } from './qodly_37629285cf887b8497da__loadShare__react__loadShare__-BWhi7Tnk.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { _ as _Stack, i as isObject_1, k as keys_1, a as isObjectLike_1, b as _baseGetTag, c as isArray_1, d as _MapCache, e as _Symbol, f as isLength_1, g as _isIndex, h as isArguments_1 } from './_getTag-B9QEriH0.js';
import { _ as _baseIsEqual } from './_baseIsEqual-DCIZ31ZV.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_37629285cf887b8497da__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.10.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = o.createContext && o.createContext(DefaultContext);

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
    return o.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return o.createElement(IconBase, __assign({
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
    return o.createElement("svg", __assign({
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
    }), title && o.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? o.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdCalendarViewDay (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"}}]})(props);
}function MdCalendarViewWeek (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 2h2.5v12H13V6zm-2 12H8.5V6H11v12zM4 6h2.5v12H4V6zm16 12h-2.5V6H20v12z"}}]})(props);
}function MdKeyboardArrowLeft (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(props);
}function MdKeyboardArrowRight (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0V0z"}},{"tag":"path","attr":{"d":"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(props);
}function MdKeyboardDoubleArrowLeft (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"}},{"tag":"path","attr":{"d":"M11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"}}]})(props);
}function MdKeyboardDoubleArrowRight (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"}},{"tag":"path","attr":{"d":"M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"}}]})(props);
}function MdOutlineCalendarMonth (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}}]})(props);
}

const commonSettings$2 = [
  {
    key: "color",
    label: "Current Day Color",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
    defaultValue: "#1a73e8"
  },
  {
    key: "selectedColor",
    label: "Selected Element Color",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
    defaultValue: "#C084FC"
  },
  {
    key: "language",
    label: "Language",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "en", label: "English" },
      { value: "es", label: "Spanish" },
      { value: "fr", label: "French" },
      { value: "de", label: "German" }
    ],
    defaultValue: "en"
  },
  {
    key: "minutes",
    label: "Minutes Interval",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "60", label: "60 min" },
      { value: "30", label: "30 min" },
      { value: "15", label: "15 min" }
    ],
    defaultValue: "60"
  },
  {
    key: "hours",
    label: "Day Hours",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "all", label: "All" },
      { value: "work", label: "Work Hours" }
    ],
    defaultValue: "all"
  },
  {
    key: "timeFormat",
    label: "Time Format",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "24", label: "24 Hours" },
      { value: "12", label: "12 Hours" }
    ],
    defaultValue: "24"
  },
  {
    key: "headerPosition",
    label: "Header Display",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "auto", label: "Auto" },
      { value: "sticky", label: "Sticky" }
    ],
    defaultValue: "auto"
  },
  {
    key: "todayButton",
    label: "Today Button",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    defaultValue: true
  }
];
const dataAccessSettings$2 = [
  {
    key: "datasource",
    label: "Qodly Source",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "currentElement",
    label: "Selected Element",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "selectedDate",
    label: "Selected Date",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    validateOnEnter: true
  }
];
const attributesSettings$2 = [
  {
    key: "property",
    label: "Property",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "eventDate",
    label: "Date",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "startTime",
    label: "Start Time",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "endTime",
    label: "End Time",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "colorProp",
    label: "Color Property",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "colors",
    name: "Colors",
    label: "Colors",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    titleProperty: "color",
    data: [
      {
        key: "color",
        label: "Color",
        type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
        defaultValue: ""
      }
    ]
  },
  {
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    key: "attributes",
    name: "Attributes",
    label: "Attributes",
    titleProperty: "Attribute",
    data: [
      {
        key: "Attribute",
        label: "Attribute",
        type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
        datasourceProperty: "datasource"
      }
    ]
  }
];
const Settings$2 = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings$2
  },
  {
    key: "dataAccess",
    label: "Data Access",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: dataAccessSettings$2
  },
  {
    key: "attributes",
    label: "Data Attributes",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: attributesSettings$2
  },
  ...qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("dataAccess")
];
const BasicSettings$2 = [
  ...commonSettings$2,
  ...qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow")
];

const config$2 = {
  craft: {
    displayName: "DayView",
    rules: {
      canMoveIn: () => true,
      canMoveOut: () => true
    },
    kind: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings$2, BasicSettings$2)
    }
  },
  info: {
    displayName: "DayView",
    exposed: true,
    icon: MdCalendarViewDay,
    events: [
      {
        label: "On Item Click",
        value: "onItemClick"
      },
      {
        label: "On Day Change",
        value: "onDayChange"
      },
      {
        label: "On Date Click",
        value: "onDateClick"
      }
    ],
    datasources: {
      accept: ["array", "entitysel"],
      declarations: (props) => {
        const {
          property,
          eventDate,
          startTime,
          endTime,
          colorProp,
          attributes,
          datasource = ""
        } = props;
        const declarations = [
          { path: datasource, iterable: true }
        ];
        if (property) {
          const { id: propertySrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(property);
          declarations.push({ path: `${datasource}.[].${propertySrc}` });
        }
        if (eventDate) {
          const { id: eventDateSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(eventDate);
          declarations.push({ path: `${datasource}.[].${eventDateSrc}` });
        }
        if (startTime) {
          const { id: startTimeSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startTime);
          declarations.push({ path: `${datasource}.[].${startTimeSrc}` });
        }
        if (endTime) {
          const { id: endTimeSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(endTime);
          declarations.push({ path: `${datasource}.[].${endTimeSrc}` });
        }
        if (colorProp) {
          const { id: colorPropSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(colorProp);
          declarations.push({ path: `${datasource}.[].${colorPropSrc}` });
        }
        if (attributes) {
          attributes.forEach((attr) => {
            const { id: attrSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(attr.Attribute);
            declarations.push({ path: `${datasource}.[].${attrSrc}` });
          });
        }
        return declarations;
      }
    }
  },
  defaultProps: {
    days: "full",
    color: "#1a73e8",
    selectedColor: "#C084FC",
    timeFormat: "24",
    minutes: "60",
    todayButton: true,
    headerPosition: "",
    language: "en"
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

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function toInteger$2(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger$2(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger$2(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  var dayOfMonth = date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger$2(dirtyAmount);
  return new Date(timestamp + amount);
}

var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  var days = amount * 7;
  return addDays(dirtyDate, days);
}

/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDayOfInterval(dirtyInterval, options) {
  var _options$step;
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = Number((_options$step = void 0 ) !== null && _options$step !== void 0 ? _options$step : 1);
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = toDate(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var weekStartsOn = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions = getDefaultOptions();
  var firstWeekContainsDate = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters$1 = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var dayPeriodEnum = {
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return formatters$1.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);

    // Padding
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return formatters$1.M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = getUTCWeek(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = getUTCISOWeek(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return formatters$1.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return formatters$1.h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return formatters$1.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return formatters$1.m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return formatters$1.s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return formatters$1.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter;
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

var formatDistanceLocale$3 = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance$3 = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale$3[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};

function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats$3 = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats$3 = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats$3 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong$3 = {
  date: buildFormatLongFn({
    formats: dateFormats$3,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats$3,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$3,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale$3 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative$3 = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale$3[token];
};

function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

var eraValues$3 = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues$3 = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues$3 = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues$3 = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues$3 = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues$2 = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber$3 = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize$3 = {
  ordinalNumber: ordinalNumber$3,
  era: buildLocalizeFn({
    values: eraValues$3,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$3,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues$3,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues$3,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$3,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues$2,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex$2(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex$2(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

var matchOrdinalNumberPattern$3 = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern$3 = /\d+/i;
var matchEraPatterns$3 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns$3 = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns$3 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns$3 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns$3 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns$3 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns$3 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns$3 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns$3 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns$3 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match$3 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$3,
    parsePattern: parseOrdinalNumberPattern$3,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$3,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns$3,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$3,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns$3,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$3,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns$3,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$3,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns$3,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$3,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns$3,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale$3 = {
  code: 'en-US',
  formatDistance: formatDistance$3,
  formatLong: formatLong$3,
  formatRelative: formatRelative$3,
  localize: localize$3,
  match: match$3,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = getDefaultOptions();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : locale$3;
  var firstWeekContainsDate = toInteger$2((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = toInteger$2((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * const result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual$2(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  requiredArgs(1, arguments);
  return isSameDay(dirtyDate, Date.now());
}

/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  return addDays(dirtyDate, -amount);
}

/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var hours = toInteger$2(dirtyHours);
  date.setHours(hours);
  return date;
}

/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var minutes = toInteger$2(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  return addMonths(dirtyDate, -amount);
}

/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  return addWeeks(dirtyDate, -amount);
}

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    const isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (Number(n) <= 1) {
        return `${Number(n) * 100}%`;
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h, s, l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    let r;
    let g;
    let b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    const v = max;
    const d = max - min;
    const s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h, s, v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    const i = Math.floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    const mod = i % 6;
    const r = [v, q, p, p, t, v][mod];
    const g = [t, v, v, q, p, p][mod];
    const b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255]
 * *Returns:* a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    const hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * *Assumes:* r, g, b are contained in the set [0, 255] and a in [0, 1]
 * *Returns:* a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    const hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts CMYK to RBG
 * Assumes c, m, y, k are in the set [0, 100]
 */
function cmykToRgb(c, m, y, k) {
    const cConv = c / 100;
    const mConv = m / 100;
    const yConv = y / 100;
    const kConv = k / 100;
    const r = 255 * (1 - cConv) * (1 - kConv);
    const g = 255 * (1 - mConv) * (1 - kConv);
    const b = 255 * (1 - yConv) * (1 - kConv);
    return { r, g, b };
}
function rgbToCmyk(r, g, b) {
    let c = 1 - r / 255;
    let m = 1 - g / 255;
    let y = 1 - b / 255;
    let k = Math.min(c, m, y);
    if (k === 1) {
        c = 0;
        m = 0;
        y = 0;
    }
    else {
        c = ((c - k) / (1 - k)) * 100;
        m = ((m - k) / (1 - k)) * 100;
        y = ((y - k) / (1 - k)) * 100;
    }
    k *= 100;
    return {
        c: Math.round(c),
        m: Math.round(m),
        y: Math.round(y),
        k: Math.round(k),
    };
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
const names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * "cmyk(0, 20, 0, 0)" or "cmyk 0 20 0 0"
 * ```
 */
function inputToRGB(color) {
    let rgb = { r: 0, g: 0, b: 0 };
    let a = 1;
    let s = null;
    let v = null;
    let l = null;
    let ok = false;
    let format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        else if (isValidCSSUnit(color.c) &&
            isValidCSSUnit(color.m) &&
            isValidCSSUnit(color.y) &&
            isValidCSSUnit(color.k)) {
            rgb = cmykToRgb(color.c, color.m, color.y, color.k);
            ok = true;
            format = 'cmyk';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
const CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
const CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
const CSS_UNIT = '(?:' + CSS_NUMBER + ')|(?:' + CSS_INTEGER + ')';
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
// eslint-disable-next-line prettier/prettier
const PERMISSIVE_MATCH3 = '[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
const PERMISSIVE_MATCH4 = 
// eslint-disable-next-line prettier/prettier
'[\\s|\\(]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')[,|\\s]+(' + CSS_UNIT + ')\\s*\\)?';
const matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    cmyk: new RegExp('cmyk' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}` or `{c, m, y, k}` or `{c, m, y, k, a}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    let named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    let match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.cmyk.exec(color);
    if (match) {
        return {
            c: match[1],
            m: match[2],
            y: match[3],
            k: match[4],
        };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    if (typeof color === 'number') {
        return !Number.isNaN(color);
    }
    return matchers.CSS_UNIT.test(color);
}

class TinyColor {
    constructor(color = '', opts = {}) {
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        const rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = opts.format ?? rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    isDark() {
        return this.getBrightness() < 128;
    }
    isLight() {
        return !this.isDark();
    }
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    getBrightness() {
        // http://www.w3.org/TR/AERT#color-contrast
        const rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    }
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    getLuminance() {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        const rgb = this.toRgb();
        let R;
        let G;
        let B;
        const RsRGB = rgb.r / 255;
        const GsRGB = rgb.g / 255;
        const BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    }
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    getAlpha() {
        return this.a;
    }
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    setAlpha(alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    }
    /**
     * Returns whether the color is monochrome.
     */
    isMonochrome() {
        const { s } = this.toHsl();
        return s === 0;
    }
    /**
     * Returns the object as a HSVA object.
     */
    toHsv() {
        const hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    }
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    toHsvString() {
        const hsv = rgbToHsv(this.r, this.g, this.b);
        const h = Math.round(hsv.h * 360);
        const s = Math.round(hsv.s * 100);
        const v = Math.round(hsv.v * 100);
        return this.a === 1 ? `hsv(${h}, ${s}%, ${v}%)` : `hsva(${h}, ${s}%, ${v}%, ${this.roundA})`;
    }
    /**
     * Returns the object as a HSLA object.
     */
    toHsl() {
        const hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    }
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    toHslString() {
        const hsl = rgbToHsl(this.r, this.g, this.b);
        const h = Math.round(hsl.h * 360);
        const s = Math.round(hsl.s * 100);
        const l = Math.round(hsl.l * 100);
        return this.a === 1 ? `hsl(${h}, ${s}%, ${l}%)` : `hsla(${h}, ${s}%, ${l}%, ${this.roundA})`;
    }
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    toHex(allow3Char = false) {
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    }
    /**
     * Returns the hex value of the color -with a # prefixed.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    toHexString(allow3Char = false) {
        return '#' + this.toHex(allow3Char);
    }
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    toHex8(allow4Char = false) {
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    }
    /**
     * Returns the hex 8 value of the color -with a # prefixed.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    toHex8String(allow4Char = false) {
        return '#' + this.toHex8(allow4Char);
    }
    /**
     * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
     * @param allowShortChar will shorten hex value to 3 or 4 char if possible
     */
    toHexShortString(allowShortChar = false) {
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    }
    /**
     * Returns the object as a RGBA object.
     */
    toRgb() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    }
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    toRgbString() {
        const r = Math.round(this.r);
        const g = Math.round(this.g);
        const b = Math.round(this.b);
        return this.a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${this.roundA})`;
    }
    /**
     * Returns the object as a RGBA object.
     */
    toPercentageRgb() {
        const fmt = (x) => `${Math.round(bound01(x, 255) * 100)}%`;
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    }
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    toPercentageRgbString() {
        const rnd = (x) => Math.round(bound01(x, 255) * 100);
        return this.a === 1
            ? `rgb(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%)`
            : `rgba(${rnd(this.r)}%, ${rnd(this.g)}%, ${rnd(this.b)}%, ${this.roundA})`;
    }
    toCmyk() {
        return {
            ...rgbToCmyk(this.r, this.g, this.b),
        };
    }
    toCmykString() {
        const { c, m, y, k } = rgbToCmyk(this.r, this.g, this.b);
        return `cmyk(${c}, ${m}, ${y}, ${k})`;
    }
    /**
     * The 'real' name of the color -if there is one.
     */
    toName() {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        const hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (const [key, value] of Object.entries(names)) {
            if (hex === value) {
                return key;
            }
        }
        return false;
    }
    toString(format) {
        const formatSet = Boolean(format);
        format = format ?? this.format;
        let formattedString = false;
        const hasAlpha = this.a < 1 && this.a >= 0;
        const needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        if (format === 'cmyk') {
            formattedString = this.toCmykString();
        }
        return formattedString || this.toHexString();
    }
    toNumber() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }
    clone() {
        return new TinyColor(this.toString());
    }
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    lighten(amount = 10) {
        const hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    }
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    brighten(amount = 10) {
        const rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    }
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    darken(amount = 10) {
        const hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    }
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    tint(amount = 10) {
        return this.mix('white', amount);
    }
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    shade(amount = 10) {
        return this.mix('black', amount);
    }
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    desaturate(amount = 10) {
        const hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    }
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    saturate(amount = 10) {
        const hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    }
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    greyscale() {
        return this.desaturate(100);
    }
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    spin(amount) {
        const hsl = this.toHsl();
        const hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    }
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    mix(color, amount = 50) {
        const rgb1 = this.toRgb();
        const rgb2 = new TinyColor(color).toRgb();
        const p = amount / 100;
        const rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    }
    analogous(results = 6, slices = 30) {
        const hsl = this.toHsl();
        const part = 360 / slices;
        const ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    }
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    complement() {
        const hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    }
    monochromatic(results = 6) {
        const hsv = this.toHsv();
        const { h } = hsv;
        const { s } = hsv;
        let { v } = hsv;
        const res = [];
        const modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h, s, v }));
            v = (v + modification) % 1;
        }
        return res;
    }
    splitcomplement() {
        const hsl = this.toHsl();
        const { h } = hsl;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    }
    /**
     * Compute how the color would appear on a background
     */
    onBackground(background) {
        const fg = this.toRgb();
        const bg = new TinyColor(background).toRgb();
        const alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor({
            r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
            g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
            b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
            a: alpha,
        });
    }
    /**
     * Alias for `polyad(3)`
     */
    triad() {
        return this.polyad(3);
    }
    /**
     * Alias for `polyad(4)`
     */
    tetrad() {
        return this.polyad(4);
    }
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    polyad(n) {
        const hsl = this.toHsl();
        const { h } = hsl;
        const result = [this];
        const increment = 360 / n;
        for (let i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    }
    /**
     * compare color vs current color
     */
    equals(color) {
        const comparedColor = new TinyColor(color);
        /**
         * RGB and CMYK do not have the same color gamut, so a CMYK conversion will never be 100%.
         * This means we need to compare CMYK to CMYK to ensure accuracy of the equals function.
         */
        if (this.format === 'cmyk' || comparedColor.format === 'cmyk') {
            return this.toCmykString() === comparedColor.toCmykString();
        }
        return this.toRgbString() === comparedColor.toRgbString();
    }
}

// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/
function random(options = {}) {
    // Check if we need to generate multiple colors
    if (options.count !== undefined &&
        options.count !== null) {
        const totalColors = options.count;
        const colors = [];
        options.count = undefined;
        while (totalColors > colors.length) {
            // Since we're generating multiple colors,
            // incremement the seed. Otherwise we'd just
            // generate the same color each time...
            options.count = null;
            if (options.seed) {
                options.seed += 1;
            }
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    // First we pick a hue (H)
    const h = pickHue(options.hue, options.seed);
    // Then use H to determine saturation (S)
    const s = pickSaturation(h, options);
    // Then use S and H to determine brightness (B).
    const v = pickBrightness(h, s, options);
    const res = { h, s, v };
    if (options.alpha !== undefined) {
        res.a = options.alpha;
    }
    // Then we return the HSB color in the desired format
    return new TinyColor(res);
}
function pickHue(hue, seed) {
    const hueRange = getHueRange(hue);
    let res = randomWithin(hueRange, seed);
    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (res < 0) {
        res = 360 + res;
    }
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
        return 0;
    }
    if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
    }
    const { saturationRange } = getColorInfo(hue);
    let sMin = saturationRange[0];
    let sMax = saturationRange[1];
    switch (options.luminosity) {
        case 'bright':
            sMin = 55;
            break;
        case 'dark':
            sMin = sMax - 10;
            break;
        case 'light':
            sMax = 55;
            break;
    }
    return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
    let bMin = getMinimumBrightness(H, S);
    let bMax = 100;
    switch (options.luminosity) {
        case 'dark':
            bMax = bMin + 20;
            break;
        case 'light':
            bMin = (bMax + bMin) / 2;
            break;
        case 'random':
            bMin = 0;
            bMax = 100;
            break;
    }
    return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
    const { lowerBounds } = getColorInfo(H);
    for (let i = 0; i < lowerBounds.length - 1; i++) {
        const s1 = lowerBounds[i][0];
        const v1 = lowerBounds[i][1];
        const s2 = lowerBounds[i + 1][0];
        const v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            const m = (v2 - v1) / (s2 - s1);
            const b = v1 - m * s1;
            return m * S + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    const num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
    }
    if (typeof colorInput === 'string') {
        const namedColor = bounds.find(n => n.name === colorInput);
        if (namedColor) {
            const color = defineColor(namedColor);
            if (color.hueRange) {
                return color.hueRange;
            }
        }
        const parsed = new TinyColor(colorInput);
        if (parsed.isValid) {
            const hue = parsed.toHsv().h;
            return [hue, hue];
        }
    }
    return [0, 360];
}
function getColorInfo(hue) {
    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
        hue -= 360;
    }
    for (const bound of bounds) {
        const color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
        }
    }
    throw Error('Color not found');
}
function randomWithin(range, seed) {
    if (seed === undefined) {
        return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
    }
    // Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
    const max = range[1] || 1;
    const min = range[0] || 0;
    seed = (seed * 9301 + 49297) % 233280;
    const rnd = seed / 233280.0;
    return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
    const sMin = bound.lowerBounds[0][0];
    const sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    const bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    const bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax],
    };
}
/**
 * @hidden
 */
const bounds = [
    {
        name: 'monochrome',
        hueRange: null,
        lowerBounds: [
            [0, 0],
            [100, 0],
        ],
    },
    {
        name: 'red',
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
        ],
    },
    {
        name: 'orange',
        hueRange: [19, 46],
        lowerBounds: [
            [20, 100],
            [30, 93],
            [40, 88],
            [50, 86],
            [60, 85],
            [70, 70],
            [100, 70],
        ],
    },
    {
        name: 'yellow',
        hueRange: [47, 62],
        lowerBounds: [
            [25, 100],
            [40, 94],
            [50, 89],
            [60, 86],
            [70, 84],
            [80, 82],
            [90, 80],
            [100, 75],
        ],
    },
    {
        name: 'green',
        hueRange: [63, 178],
        lowerBounds: [
            [30, 100],
            [40, 90],
            [50, 85],
            [60, 81],
            [70, 74],
            [80, 64],
            [90, 50],
            [100, 40],
        ],
    },
    {
        name: 'blue',
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
        ],
    },
    {
        name: 'purple',
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
        ],
    },
    {
        name: 'pink',
        hueRange: [283, 334],
        lowerBounds: [
            [20, 100],
            [30, 90],
            [40, 86],
            [60, 84],
            [80, 80],
            [90, 75],
            [100, 73],
        ],
    },
];

const randomColor = () => {
  const color = random();
  return color.toHexString();
};
const colorToHex = (baseColor) => {
  const color = new TinyColor(baseColor);
  return color.toHexString();
};
const generateColorPalette = (numberOfColorsPerColor, ...baseColors) => {
  const colorPalette = [];
  let colors;
  if (baseColors.length === 0) {
    colors = new TinyColor(randomColor()).polyad(numberOfColorsPerColor);
  } else if (baseColors.length === 1) {
    colors = new TinyColor(baseColors[0]).polyad(numberOfColorsPerColor);
  } else {
    const len = numberOfColorsPerColor > baseColors.length ? Math.round(numberOfColorsPerColor / baseColors.length) > 1 ? Math.round(numberOfColorsPerColor / baseColors.length) : 2 : 1;
    colors = baseColors.reduce((acc, color) => {
      const polyad = new TinyColor(color).polyad(len);
      return [...acc, ...polyad].slice(0, numberOfColorsPerColor);
    }, []);
  }
  colorPalette.push(...colors.map((t) => t.toHexString()));
  return colorPalette;
};

var formatDistanceLocale$2 = {
  lessThanXSeconds: {
    standalone: {
      one: 'weniger als 1 Sekunde',
      other: 'weniger als {{count}} Sekunden'
    },
    withPreposition: {
      one: 'weniger als 1 Sekunde',
      other: 'weniger als {{count}} Sekunden'
    }
  },
  xSeconds: {
    standalone: {
      one: '1 Sekunde',
      other: '{{count}} Sekunden'
    },
    withPreposition: {
      one: '1 Sekunde',
      other: '{{count}} Sekunden'
    }
  },
  halfAMinute: {
    standalone: 'halbe Minute',
    withPreposition: 'halben Minute'
  },
  lessThanXMinutes: {
    standalone: {
      one: 'weniger als 1 Minute',
      other: 'weniger als {{count}} Minuten'
    },
    withPreposition: {
      one: 'weniger als 1 Minute',
      other: 'weniger als {{count}} Minuten'
    }
  },
  xMinutes: {
    standalone: {
      one: '1 Minute',
      other: '{{count}} Minuten'
    },
    withPreposition: {
      one: '1 Minute',
      other: '{{count}} Minuten'
    }
  },
  aboutXHours: {
    standalone: {
      one: 'etwa 1 Stunde',
      other: 'etwa {{count}} Stunden'
    },
    withPreposition: {
      one: 'etwa 1 Stunde',
      other: 'etwa {{count}} Stunden'
    }
  },
  xHours: {
    standalone: {
      one: '1 Stunde',
      other: '{{count}} Stunden'
    },
    withPreposition: {
      one: '1 Stunde',
      other: '{{count}} Stunden'
    }
  },
  xDays: {
    standalone: {
      one: '1 Tag',
      other: '{{count}} Tage'
    },
    withPreposition: {
      one: '1 Tag',
      other: '{{count}} Tagen'
    }
  },
  aboutXWeeks: {
    standalone: {
      one: 'etwa 1 Woche',
      other: 'etwa {{count}} Wochen'
    },
    withPreposition: {
      one: 'etwa 1 Woche',
      other: 'etwa {{count}} Wochen'
    }
  },
  xWeeks: {
    standalone: {
      one: '1 Woche',
      other: '{{count}} Wochen'
    },
    withPreposition: {
      one: '1 Woche',
      other: '{{count}} Wochen'
    }
  },
  aboutXMonths: {
    standalone: {
      one: 'etwa 1 Monat',
      other: 'etwa {{count}} Monate'
    },
    withPreposition: {
      one: 'etwa 1 Monat',
      other: 'etwa {{count}} Monaten'
    }
  },
  xMonths: {
    standalone: {
      one: '1 Monat',
      other: '{{count}} Monate'
    },
    withPreposition: {
      one: '1 Monat',
      other: '{{count}} Monaten'
    }
  },
  aboutXYears: {
    standalone: {
      one: 'etwa 1 Jahr',
      other: 'etwa {{count}} Jahre'
    },
    withPreposition: {
      one: 'etwa 1 Jahr',
      other: 'etwa {{count}} Jahren'
    }
  },
  xYears: {
    standalone: {
      one: '1 Jahr',
      other: '{{count}} Jahre'
    },
    withPreposition: {
      one: '1 Jahr',
      other: '{{count}} Jahren'
    }
  },
  overXYears: {
    standalone: {
      one: 'mehr als 1 Jahr',
      other: 'mehr als {{count}} Jahre'
    },
    withPreposition: {
      one: 'mehr als 1 Jahr',
      other: 'mehr als {{count}} Jahren'
    }
  },
  almostXYears: {
    standalone: {
      one: 'fast 1 Jahr',
      other: 'fast {{count}} Jahre'
    },
    withPreposition: {
      one: 'fast 1 Jahr',
      other: 'fast {{count}} Jahren'
    }
  }
};
var formatDistance$2 = function formatDistance(token, count, options) {
  var result;
  var tokenValue = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale$2[token].withPreposition : formatDistanceLocale$2[token].standalone;
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return 'vor ' + result;
    }
  }
  return result;
};

// DIN 5008: https://de.wikipedia.org/wiki/Datumsformat#DIN_5008
var dateFormats$2 = {
  full: 'EEEE, do MMMM y',
  // Montag, 7. Januar 2018
  long: 'do MMMM y',
  // 7. Januar 2018
  medium: 'do MMM y',
  // 7. Jan. 2018
  short: 'dd.MM.y' // 07.01.2018
};

var timeFormats$2 = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats$2 = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: '{{date}} {{time}}',
  short: '{{date}} {{time}}'
};
var formatLong$2 = {
  date: buildFormatLongFn({
    formats: dateFormats$2,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats$2,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$2,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale$2 = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: 'P'
};
var formatRelative$2 = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale$2[token];
};

var eraValues$2 = {
  narrow: ['v.Chr.', 'n.Chr.'],
  abbreviated: ['v.Chr.', 'n.Chr.'],
  wide: ['vor Christus', 'nach Christus']
};
var quarterValues$2 = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal']
};

// Note: in German, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues$2 = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  wide: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
};

// https://st.unicode.org/cldr-apps/v#/de/Gregorian/
var formattingMonthValues = {
  narrow: monthValues$2.narrow,
  abbreviated: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
  wide: monthValues$2.wide
};
var dayValues$2 = {
  narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
  short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  abbreviated: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  wide: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
};

// https://www.unicode.org/cldr/charts/32/summary/de.html#1881
var dayPeriodValues$2 = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachm.',
    evening: 'Abend',
    night: 'Nacht'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'Morgen',
    afternoon: 'Nachmittag',
    evening: 'Abend',
    night: 'Nacht'
  }
};
var formattingDayPeriodValues$1 = {
  narrow: {
    am: 'vm.',
    pm: 'nm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachm.',
    evening: 'abends',
    night: 'nachts'
  },
  abbreviated: {
    am: 'vorm.',
    pm: 'nachm.',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  },
  wide: {
    am: 'vormittags',
    pm: 'nachmittags',
    midnight: 'Mitternacht',
    noon: 'Mittag',
    morning: 'morgens',
    afternoon: 'nachmittags',
    evening: 'abends',
    night: 'nachts'
  }
};
var ordinalNumber$2 = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + '.';
};
var localize$2 = {
  ordinalNumber: ordinalNumber$2,
  era: buildLocalizeFn({
    values: eraValues$2,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$2,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues$2,
    formattingValues: formattingMonthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues$2,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$2,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues$1,
    defaultFormattingWidth: 'wide'
  })
};

var matchOrdinalNumberPattern$2 = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern$2 = /\d+/i;
var matchEraPatterns$2 = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
};
var parseEraPatterns$2 = {
  any: [/^v/i, /^n/i]
};
var matchQuarterPatterns$2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
};
var parseQuarterPatterns$2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns$2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
};
var parseMonthPatterns$2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns$2 = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
};
var parseDayPatterns$2 = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns$2 = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
};
var parseDayPeriodPatterns$2 = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i // will never be matched. Night is matched by `pm`
  }
};

var match$2 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$2,
    parsePattern: parseOrdinalNumberPattern$2,
    valueCallback: function valueCallback(value) {
      return parseInt(value);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$2,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns$2,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$2,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns$2,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$2,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns$2,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$2,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns$2,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$2,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPeriodPatterns$2,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary German locale.
 * @language German
 * @iso-639-2 deu
 * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
 * @author Asia [@asia-t]{@link https://github.com/asia-t}
 * @author Van Vuong Ngo [@vanvuongngo]{@link https://github.com/vanvuongngo}
 * @author RomanErnst [@pex]{@link https://github.com/pex}
 * @author Philipp Keck [@Philipp91]{@link https://github.com/Philipp91}
 */
var locale$2 = {
  code: 'de',
  formatDistance: formatDistance$2,
  formatLong: formatLong$2,
  formatRelative: formatRelative$2,
  localize: localize$2,
  match: match$2,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
  }
};

var formatDistanceLocale$1 = {
  lessThanXSeconds: {
    one: 'menos de un segundo',
    other: 'menos de {{count}} segundos'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },
  halfAMinute: 'medio minuto',
  lessThanXMinutes: {
    one: 'menos de un minuto',
    other: 'menos de {{count}} minutos'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },
  aboutXHours: {
    one: 'alrededor de 1 hora',
    other: 'alrededor de {{count}} horas'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },
  xDays: {
    one: '1 día',
    other: '{{count}} días'
  },
  aboutXWeeks: {
    one: 'alrededor de 1 semana',
    other: 'alrededor de {{count}} semanas'
  },
  xWeeks: {
    one: '1 semana',
    other: '{{count}} semanas'
  },
  aboutXMonths: {
    one: 'alrededor de 1 mes',
    other: 'alrededor de {{count}} meses'
  },
  xMonths: {
    one: '1 mes',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'alrededor de 1 año',
    other: 'alrededor de {{count}} años'
  },
  xYears: {
    one: '1 año',
    other: '{{count}} años'
  },
  overXYears: {
    one: 'más de 1 año',
    other: 'más de {{count}} años'
  },
  almostXYears: {
    one: 'casi 1 año',
    other: 'casi {{count}} años'
  }
};
var formatDistance$1 = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale$1[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'en ' + result;
    } else {
      return 'hace ' + result;
    }
  }
  return result;
};

var dateFormats$1 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: 'd MMM y',
  short: 'dd/MM/y'
};
var timeFormats$1 = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats$1 = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong$1 = {
  date: buildFormatLongFn({
    formats: dateFormats$1,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats$1,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$1,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale$1 = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: 'P'
};
var formatRelativeLocalePlural = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: 'P'
};
var formatRelative$1 = function formatRelative(token, date, _baseDate, _options) {
  if (date.getUTCHours() !== 1) {
    return formatRelativeLocalePlural[token];
  } else {
    return formatRelativeLocale$1[token];
  }
};

var eraValues$1 = {
  narrow: ['AC', 'DC'],
  abbreviated: ['AC', 'DC'],
  wide: ['antes de cristo', 'después de cristo']
};
var quarterValues$1 = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues$1 = {
  narrow: ['e', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  wide: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
};
var dayValues$1 = {
  narrow: ['d', 'l', 'm', 'm', 'j', 'v', 's'],
  short: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'],
  abbreviated: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  wide: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
};
var dayPeriodValues$1 = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'mañana',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noche'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'medianoche',
    noon: 'mediodia',
    morning: 'mañana',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noche'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'medianoche',
    noon: 'mediodia',
    morning: 'mañana',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noche'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'de la mañana',
    afternoon: 'de la tarde',
    evening: 'de la tarde',
    night: 'de la noche'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'medianoche',
    noon: 'mediodia',
    morning: 'de la mañana',
    afternoon: 'de la tarde',
    evening: 'de la tarde',
    night: 'de la noche'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'medianoche',
    noon: 'mediodia',
    morning: 'de la mañana',
    afternoon: 'de la tarde',
    evening: 'de la tarde',
    night: 'de la noche'
  }
};
var ordinalNumber$1 = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + 'º';
};
var localize$1 = {
  ordinalNumber: ordinalNumber$1,
  era: buildLocalizeFn({
    values: eraValues$1,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$1,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues$1,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues$1,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$1,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

var matchOrdinalNumberPattern$1 = /^(\d+)(º)?/i;
var parseOrdinalNumberPattern$1 = /\d+/i;
var matchEraPatterns$1 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
};
var parseEraPatterns$1 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
};
var matchQuarterPatterns$1 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns$1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns$1 = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
};
var parseMonthPatterns$1 = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
};
var matchDayPatterns$1 = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
};
var parseDayPatterns$1 = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
};
var matchDayPeriodPatterns$1 = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
};
var parseDayPeriodPatterns$1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
};
var match$1 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$1,
    parsePattern: parseOrdinalNumberPattern$1,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns$1,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns$1,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns$1,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns$1,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$1,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns$1,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary Spanish locale.
 * @language Spanish
 * @iso-639-2 spa
 * @author Juan Angosto [@juanangosto]{@link https://github.com/juanangosto}
 * @author Guillermo Grau [@guigrpa]{@link https://github.com/guigrpa}
 * @author Fernando Agüero [@fjaguero]{@link https://github.com/fjaguero}
 * @author Gastón Haro [@harogaston]{@link https://github.com/harogaston}
 * @author Yago Carballo [@YagoCarballo]{@link https://github.com/YagoCarballo}
 */
var locale$1 = {
  code: 'es',
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1
  }
};

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'moins d’une seconde',
    other: 'moins de {{count}} secondes'
  },
  xSeconds: {
    one: '1 seconde',
    other: '{{count}} secondes'
  },
  halfAMinute: '30 secondes',
  lessThanXMinutes: {
    one: 'moins d’une minute',
    other: 'moins de {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'environ 1 heure',
    other: 'environ {{count}} heures'
  },
  xHours: {
    one: '1 heure',
    other: '{{count}} heures'
  },
  xDays: {
    one: '1 jour',
    other: '{{count}} jours'
  },
  aboutXWeeks: {
    one: 'environ 1 semaine',
    other: 'environ {{count}} semaines'
  },
  xWeeks: {
    one: '1 semaine',
    other: '{{count}} semaines'
  },
  aboutXMonths: {
    one: 'environ 1 mois',
    other: 'environ {{count}} mois'
  },
  xMonths: {
    one: '1 mois',
    other: '{{count}} mois'
  },
  aboutXYears: {
    one: 'environ 1 an',
    other: 'environ {{count}} ans'
  },
  xYears: {
    one: '1 an',
    other: '{{count}} ans'
  },
  overXYears: {
    one: 'plus d’un an',
    other: 'plus de {{count}} ans'
  },
  almostXYears: {
    one: 'presqu’un an',
    other: 'presque {{count}} ans'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var form = formatDistanceLocale[token];
  if (typeof form === 'string') {
    result = form;
  } else if (count === 1) {
    result = form.one;
  } else {
    result = form.other.replace('{{count}}', String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'dans ' + result;
    } else {
      return 'il y a ' + result;
    }
  }
  return result;
};

var dateFormats = {
  full: 'EEEE d MMMM y',
  long: 'd MMMM y',
  medium: 'd MMM y',
  short: 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'à' {{time}}",
  long: "{{date}} 'à' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

var eraValues = {
  narrow: ['av. J.-C', 'ap. J.-C'],
  abbreviated: ['av. J.-C', 'ap. J.-C'],
  wide: ['avant Jésus-Christ', 'après Jésus-Christ']
};
var quarterValues = {
  narrow: ['T1', 'T2', 'T3', 'T4'],
  abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
  wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre']
};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  wide: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
};
var dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
  short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
  abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'mat.',
    afternoon: 'ap.m.',
    evening: 'soir',
    night: 'mat.'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'matin',
    afternoon: 'après-midi',
    evening: 'soir',
    night: 'matin'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'minuit',
    noon: 'midi',
    morning: 'du matin',
    afternoon: 'de l’après-midi',
    evening: 'du soir',
    night: 'du matin'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (number === 0) return '0';
  var feminineUnits = ['year', 'week', 'hour', 'minute', 'second'];
  var suffix;
  if (number === 1) {
    suffix = unit && feminineUnits.includes(unit) ? 'ère' : 'er';
  } else {
    suffix = 'ème';
  }
  return number + suffix;
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
};

var matchOrdinalNumberPattern = /^(\d+)(ième|ère|ème|er|e)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
  abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
};
var parseEraPatterns = {
  any: [/^av/i, /^ap/i]
};
var matchQuarterPatterns = {
  narrow: /^T?[1234]/i,
  abbreviated: /^[1234](er|ème|e)? trim\.?/i,
  wide: /^[1234](er|ème|e)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
  wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[lmjvsd]/i,
  short: /^(di|lu|ma|me|je|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
  wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
  any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /soir/i,
    night: /nuit/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary French locale.
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 */
var locale = {
  code: 'fr',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
  }
};

const DayView$2 = ({
  attributes = [],
  minutes,
  property,
  language,
  todayButton,
  headerPosition,
  color,
  selectedColor,
  hours,
  timeFormat,
  style,
  className,
  classNames = []
}) => {
  const {
    connectors: { connect }
  } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const date = /* @__PURE__ */ new Date();
  const firstHour = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (hours === "work") {
      return 8;
    }
    return 0;
  }, [hours]);
  const isCurrentHour = (hourIndex, mins) => {
    const currentHour = (/* @__PURE__ */ new Date()).getHours();
    switch (minutes) {
      case "15": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 15 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "30": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 30 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "60": {
        return currentHour === hourIndex;
      }
    }
  };
  const timeList = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    switch (minutes) {
      case "15": {
        return hours === "work" ? Array.from({ length: 44 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 96 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        });
      }
      case "30": {
        return hours === "work" ? Array.from({ length: 22 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 48 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        });
      }
      case "60": {
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
      }
      default:
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index + 8;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
    }
  }, [hours, minutes]);
  let checkHours = (i) => {
    if (hours === "work") {
      return i + 8;
    }
    return i;
  };
  const locale$3 = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return { locale: locale };
    if (language === "es") return { locale: locale$1 };
    if (language === "de") return { locale: locale$2 };
    return {};
  }, [language]);
  const todayLabel = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return "Aujourd'hui";
    if (language === "es") return "Hoy";
    if (language === "de") return "Heute";
    return "Today";
  }, [language]);
  return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { ref: connect, style, className: cn(className, classNames), children: [
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: `dayview-header current-day text-center ${style?.fontSize ? style?.fontSize : "text-xl"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
        children: format(date, "dd MMMM yyyy", locale$3)
      }
    ),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "dayview w-full h-full", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("table", { className: "table-fixed w-full h-full border-collapse", children: [
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("thead", { className: "dayview-header", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("tr", { children: [
        /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
          "th",
          {
            className: `w-40 ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
            children: [
              /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "navigation flex items-center justify-center ", children: [
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    title: "Previous Day",
                    className: "nav-button last-day p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                    children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
                  }
                ),
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    className: "today-button p-1 rounded-lg hover:bg-gray-300 duration-300",
                    style: { display: todayButton ? "block" : "none" },
                    children: todayLabel
                  }
                ),
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    title: "Next Day",
                    className: "nav-button next-day p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                    children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
                  }
                )
              ] }),
              /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "timezone font-medium text-xs text-gray-400", children: format(date, "OOOO") })
            ]
          }
        ),
        /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "th",
          {
            className: `w-full ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
            children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "div",
              {
                title: format(date, "EEEE dd MMMM yyyy", locale$3),
                className: "weekday-title ml-4 flex flex-col items-start justify-center font-medium",
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { children: [
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "span",
                    {
                      className: "weekday-day text-sm",
                      style: { color: isToday(date) ? color : "" },
                      children: format(date, "EEE", locale$3).charAt(0).toUpperCase() + format(date, "EEE", locale$3).slice(1)
                    }
                  ),
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "span",
                    {
                      className: "weekday-number rounded-full text-xl mb-1 h-10 w-10 flex items-center justify-center font-medium",
                      style: {
                        backgroundColor: isToday(date) ? color : "",
                        color: isToday(date) ? "white" : ""
                      },
                      children: format(date, "dd")
                    }
                  )
                ] })
              }
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("tbody", { className: "dayview-body", children: timeList.map(({ hour, minutes: minutes2 }, hourIndex) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
        "tr",
        {
          className: `dayview-row ${isEqual$2(firstHour, checkHours(hourIndex)) ? "h-20" : "h-14"}`,
          children: [
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("td", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "span",
              {
                className: `timeline text-gray-400 ${style?.fontSize ? style?.fontSize : "text-[12px]"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
                style: {
                  color: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? color : ""
                },
                children: timeFormat === "12" ? format(
                  setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                  "KK:mm a"
                ) : format(
                  setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                  "HH:mm"
                )
              }
            ) }),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "td",
              {
                className: "time-cell border border-gray-200 p-1",
                style: {
                  backgroundColor: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? colorToHex(color) + "30" : "",
                  borderLeft: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? "5px solid " + color : ""
                },
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "time-content flex flex-col flex-wrap w-1/3 h-full gap-1 overflow-x-auto", children: isToday(date) && isEqual$2(firstHour, checkHours(hourIndex)) ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                  "div",
                  {
                    className: "event p-2 border-t-4 overflow-y-auto h-full flex flex-col gap-1",
                    style: {
                      backgroundColor: colorToHex(selectedColor) + "50",
                      borderTopColor: colorToHex(selectedColor)
                    },
                    children: [
                      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        "span",
                        {
                          className: `event-title ${style?.fontWeight ? style?.fontWeight : "font-medium"}`,
                          children: property ? "{" + property + "}" : "No Property Set"
                        }
                      ),
                      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "attributes flex flex-wrap", children: attributes?.map((attribute, index) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        "span",
                        {
                          className: `attribute ${style?.fontSize ? style?.fontSize : "text-sm"} basis-1/2 text-start`,
                          children: attribute.Attribute
                        },
                        index
                      )) })
                    ]
                  }
                ) : null })
              },
              format(date, "yyyy-MM-dd") + "-" + hourIndex
            )
          ]
        },
        `${hour}-${minutes2}`
      )) })
    ] }) })
  ] });
};

// THIS FILE IS AUTO GENERATED
function BsFillInfoCircleFill (props) {
  return GenIcon({"attr":{"fill":"currentColor","viewBox":"0 0 16 16"},"child":[{"tag":"path","attr":{"d":"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"}}]})(props);
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex$1;

var Stack = _Stack,
    baseIsEqual$2 = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$1 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$2(value) {
  return value === value && !isObject$1(value);
}

var _isStrictComparable = isStrictComparable$2;

var isStrictComparable$1 = _isStrictComparable,
    keys = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$2;

var baseIsMatch = _baseIsMatch,
    getMatchData = _getMatchData,
    matchesStrictComparable$1 = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

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
function isSymbol$4(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$4;

var isArray$4 = isArray_1,
    isSymbol$3 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$3(value, object) {
  if (isArray$4(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$3;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

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

var Symbol$1 = _Symbol,
    arrayMap = _arrayMap,
    isArray$3 = isArray_1,
    isSymbol$2 = isSymbol_1;

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
  if (isArray$3(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol$2(value)) {
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
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray$2 = isArray_1,
    isKey$2 = _isKey,
    stringToPath = _stringToPath,
    toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$2(value, object) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$2;

var isSymbol$1 = isSymbol_1;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$4(value) {
  if (typeof value == 'string' || isSymbol$1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -Infinity) ? '-0' : result;
}

var _toKey = toKey$4;

var castPath$1 = _castPath,
    toKey$3 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$2(object, path) {
  path = castPath$1(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$2;

var baseGet$1 = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet$1(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath = _castPath,
    isArguments = isArguments_1,
    isArray$1 = isArray_1,
    isIndex = _isIndex,
    isLength = isLength_1,
    toKey$2 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray$1(object) || isArguments(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn,
    hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual$1 = _baseIsEqual,
    get = get_1,
    hasIn = hasIn_1,
    isKey$1 = _isKey,
    isStrictComparable = _isStrictComparable,
    matchesStrictComparable = _matchesStrictComparable,
    toKey$1 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity$1(value) {
  return value;
}

var identity_1 = identity$1;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty,
    basePropertyDeep = _basePropertyDeep,
    isKey = _isKey,
    toKey = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches,
    baseMatchesProperty = _baseMatchesProperty,
    identity = identity_1,
    isArray = isArray_1,
    property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$1;

/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$1(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$1;

var baseTrim = _baseTrim,
    isObject = isObject_1,
    isSymbol = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var toNumber = toNumber_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -Infinity) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite$1;

var toFinite = toFinite_1;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger$1;

var baseFindIndex = _baseFindIndex,
    baseIteratee = _baseIteratee,
    toInteger = toInteger_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate), index);
}

var findIndex_1 = findIndex;

const findIndex$1 = /*@__PURE__*/getDefaultExportFromCjs(findIndex_1);

var baseIsEqual = _baseIsEqual;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

const isEqual$1 = /*@__PURE__*/getDefaultExportFromCjs(isEqual_1);

async function updateEntity({
  index,
  newIndex,
  datasource,
  currentElement,
  fireEvent = true,
  onBeforeUpdate
}) {
  const { entitysel: sel } = datasource;
  if (!sel) {
    return;
  }
  const entity = index >= 0 ? await sel.getEntity(index) : null;
  const hasDifferentNamespace = datasource && currentElement ? datasource.namespace !== currentElement.namespace : false;
  const needRefresh = !currentElement.parentSource || hasDifferentNamespace;
  onBeforeUpdate?.();
  await currentElement.setValue(null, entity, !needRefresh && fireEvent);
  if (newIndex !== void 0) {
    currentElement.entity?.setPos(newIndex);
  }
  if (needRefresh) {
    await refreshCurrentEntity(currentElement, entity);
  }
}
async function refreshCurrentEntity(source, entity, doFireEvent = true) {
  if (entity) {
    const sourceAttributes = source.filterAttributesText.split(",").filter(Boolean);
    const entityAttributes = (entity._private.filterAttributes || "").split(",").filter(Boolean);
    if (!isEqual$1(sourceAttributes, entityAttributes)) {
      source.filterAttributesText = Array.from(
        /* @__PURE__ */ new Set([...sourceAttributes, ...entityAttributes])
      ).join(",");
      entity._private.filterAttributes = source.filterAttributesText;
      entity._private.inited = false;
      await entity.fetch();
      entity._private.inited = true;
    }
  }
  await source.recomputeChildren(doFireEvent);
  if (doFireEvent) source.fireEvent("changed");
}

function Spinner() {
  return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "calendar-spinner absolute bg-white opacity-70 flex-col gap-4 w-full h-full flex items-center justify-center ", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "calendar-outer-spinner relative w-20 h-20 border-4 border-transparent text-4xl animate-spin flex items-center justify-center border-t-indigo-700 rounded-full", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "calendar-inner-spinner relative w-16 h-16 border-4 border-transparent text-2xl animate-spin flex items-center justify-center border-t-indigo-400 rounded-full" }) }) });
}

const DayView$1 = ({
  language,
  todayButton,
  colorProp,
  colors = [],
  attributes = [],
  selectedDate,
  property,
  headerPosition,
  eventDate,
  startTime,
  endTime,
  color,
  selectedColor,
  hours,
  minutes,
  timeFormat,
  style,
  className,
  classNames = []
}) => {
  const { connect, emit } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const {
    sources: { datasource, currentElement: ce }
  } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  let { entities, fetchIndex, setStep, query, loaderDatasource } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDataLoader({
    source: datasource
  });
  const [date, setDate] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(/* @__PURE__ */ new Date());
  const [selDate, setSelDate] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(/* @__PURE__ */ new Date());
  const [selEvent, setSelEvent] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(null);
  const hasMounted = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useRef(false);
  const path = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useWebformPath();
  const [loading, setLoading] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(true);
  const [value, setValue] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState([]);
  const attrs = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => datasource?.type === "entitysel" ? datasource.filterAttributesText?.split(",") : qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.isLocalArrayDataSource(datasource) ? Object.keys(datasource.value[0] || {}) : [],
    [datasource]
  );
  let attributeList = attributes?.map((e) => e.Attribute);
  const { id: propertyId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(property);
  property = propertyId;
  const { id: eventDateId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(eventDate);
  eventDate = eventDateId;
  const { id: startTimeId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startTime);
  startTime = startTimeId;
  const { id: endTimeId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(endTime);
  endTime = endTimeId;
  const { id: colorPropId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(colorProp);
  colorProp = colorPropId;
  for (let index = 0; index < attributeList.length; index++) {
    const { id: attributeId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(attributeList[index]);
    attributeList[index] = attributeId;
  }
  function convertMilliseconds(ms) {
    const seconds = Math.floor(ms / 1e3);
    const minutes2 = Math.floor(seconds / 60);
    const hours2 = Math.floor(minutes2 / 60);
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes2 % 60;
    return `${hours2.toString().padStart(2, "0")}:${remainingMinutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
  const dayQuery = async (source, date2) => {
    setLoading(true);
    if (!source) return;
    if (source.type === "entitysel") {
      if (attrs?.includes(eventDate.split(".")[0])) {
        const queryStr = `${eventDate} == :1`;
        const placeholders = [format(date2, "yyyy-MM-dd")];
        query.entitysel({
          queryString: queryStr,
          placeholders
        });
      } else {
        checkParams = `${eventDate} does not exist as an attribute`;
      }
    } else if (source.dataType === "array") {
      setValue(await source.getValue());
    }
    setLoading(false);
  };
  let checkParams = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (!datasource) {
      return 'Please set "Datasource"';
    } else if (!entities[0] || !entities.length) {
      return "";
    }
    if (!property) {
      return 'Please set "Property"';
    } else if (!attrs?.includes(property)) {
      return `${property} does not exist as an attribute`;
    }
    if (!eventDate) {
      return 'Please set "event date"';
    } else if (!attrs?.includes(eventDate)) {
      return `${eventDate} does not exist as an attribute`;
    }
    if (!startTime) {
      return 'Please set the "start time"';
    } else if (!attrs?.includes(startTime)) {
      return `${startTime} does not exist as an attribute`;
    }
    if (!endTime) {
      return 'Please set the "end time"';
    } else if (!attrs?.includes(endTime)) {
      return `${endTime} does not exist as an attribute`;
    }
    return "";
  }, [entities, property]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (hasMounted.current) {
      emit("onDayChange", { currentDate: date });
    } else {
      hasMounted.current = true;
    }
  }, [date]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!datasource || datasource.type == "entitysel" && !datasource.entitysel) {
      setLoading(false);
      return;
    }
    const fetch = async () => {
      dayQuery(loaderDatasource, date);
    };
    fetch();
  }, []);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!datasource) return;
    const cb = () => {
      dayQuery(loaderDatasource, date);
    };
    datasource.addListener("changed", cb);
    return () => {
      qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.unsubscribeFromDatasource(datasource, cb);
    };
  }, [datasource, date, loaderDatasource, datasource.entitysel]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    const fetchData = async () => {
      let selLength = await loaderDatasource.getValue("length");
      setStep({ start: 0, end: selLength });
      await fetchIndex(0);
    };
    fetchData();
  }, [loaderDatasource]);
  const isCurrentHour = (hourIndex, mins) => {
    const currentHour = (/* @__PURE__ */ new Date()).getHours();
    switch (minutes) {
      case "15": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 15 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "30": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 30 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "60": {
        return currentHour === hourIndex;
      }
    }
  };
  const isSelected = (date2) => {
    return isEqual$2(date2, selDate);
  };
  const isSelectedEvent = (event) => {
    return event[property] === selEvent?.[property] && event[eventDate] === selEvent?.[eventDate] && event[startTime] === selEvent?.[startTime] && event[endTime] === selEvent?.[endTime] || false;
  };
  let checkHours = (i) => {
    if (hours === "work") {
      return i + 8;
    }
    return i;
  };
  const numberMin = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    switch (minutes) {
      case "15": {
        return 0.25;
      }
      case "30": {
        return 0.5;
      }
      case "60": {
        return 1;
      }
    }
  }, [minutes]);
  const timeToFloat = (hour, minutes2) => {
    const minutesFraction = minutes2 / 60;
    return hour + minutesFraction;
  };
  const timeList = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    switch (minutes) {
      case "15": {
        return hours === "work" ? Array.from({ length: 44 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 96 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        });
      }
      case "30": {
        return hours === "work" ? Array.from({ length: 22 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 48 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        });
      }
      case "60": {
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
      }
      default:
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index + 8;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
    }
  }, [hours, minutes]);
  const todayButt = () => {
    dayQuery(loaderDatasource, /* @__PURE__ */ new Date());
    setDate(/* @__PURE__ */ new Date());
  };
  const handlePrevDay = () => {
    dayQuery(loaderDatasource, subDays(date, 1));
    setDate(subDays(date, 1));
  };
  const handleNextDay = () => {
    dayQuery(loaderDatasource, addDays(date, 1));
    setDate(addDays(date, 1));
  };
  const colorgenerated = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => generateColorPalette(entities.length, ...colors.map((e) => e.color || randomColor())),
    [entities.length]
  );
  const data = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => (datasource.dataType === "array" ? value : entities).map((obj, index) => ({
      ...obj,
      color: obj[colorProp] || colorgenerated[index],
      attributes: attributeList?.reduce((acc, e) => {
        acc[e] = obj[e];
        return acc;
      }, {})
    })),
    [entities]
  );
  const handleItemClick = async (item) => {
    setSelEvent(item);
    if (!ce) return;
    switch (ce.type) {
      case "scalar":
        ce.setValue(null, item);
        emit("onItemClick", { selectedData: ce });
        break;
      case "entity":
        const index = findIndex$1(
          entities,
          (e) => e[property] === item[property] && e[eventDate] === item[eventDate] && e[startTime] === item[startTime] && e[endTime] === item[endTime]
        );
        await updateEntity({ index, datasource: loaderDatasource, currentElement: ce });
        emit("onItemClick", { selectedData: ce });
        break;
    }
  };
  const handleDateClick = async (value2) => {
    setSelDate(value2);
    if (!selectedDate) return;
    const { id, namespace } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(selectedDate);
    const ds = window.DataSource.getSource(id, namespace) || window.DataSource.getSource(selectedDate, path);
    ds?.setValue(
      null,
      value2 instanceof Date && !isNaN(value2.valueOf()) ? qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.dateTo4DFormat(value2) : value2
    );
    const ce2 = await ds?.getValue();
    emit("onDateClick", { selectedDate: ce2 });
  };
  const locale$3 = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return { locale: locale };
    if (language === "es") return { locale: locale$1 };
    if (language === "de") return { locale: locale$2 };
    return {};
  }, [language]);
  const todayLabel = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return "Aujourd'hui";
    if (language === "es") return "Hoy";
    if (language === "de") return "Heute";
    return "Today";
  }, [language]);
  return !checkParams ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { ref: connect, style, className: cn(className, classNames), children: [
    loading && /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Spinner, {}),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      "div",
      {
        className: `current-day text-center ${style?.fontSize ? style?.fontSize : "text-xl"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
        children: format(date, "dd MMMM yyyy", locale$3)
      }
    ),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "dayview w-full h-full", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("table", { className: "table-fixed w-full h-full border-collapse", children: [
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("thead", { children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("tr", { className: "dayview-header", children: [
        /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
          "th",
          {
            className: `w-40 ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
            children: [
              /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "navigation w-full flex items-center justify-center", children: [
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    title: "Previous Day",
                    onClick: handlePrevDay,
                    className: "nav-button last-day p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                    children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
                  }
                ),
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    onClick: todayButt,
                    className: "today-button p-1 rounded-lg hover:bg-gray-300 duration-300",
                    style: { display: todayButton ? "block" : "none" },
                    children: todayLabel
                  }
                ),
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    title: "Next Day",
                    onClick: handleNextDay,
                    className: "nav-button next-day p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                    children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
                  }
                )
              ] }),
              /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "timezone font-medium text-xs text-gray-400", children: format(date, "OOOO") })
            ]
          }
        ),
        /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "th",
          {
            className: `w-full ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
            children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "div",
              {
                title: format(date, "EEEE dd MMMM yyyy", locale$3),
                className: "weekday-title ml-4 flex flex-col items-start justify-center font-medium",
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("span", { children: [
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "span",
                    {
                      className: "weekday-day text-sm",
                      style: { color: isToday(date) ? color : "" },
                      children: format(date, "EEE", locale$3).charAt(0).toUpperCase() + format(date, "EEE", locale$3).slice(1)
                    }
                  ),
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "span",
                    {
                      className: "weekday-number rounded-full text-xl mb-1 h-10 w-10 flex items-center justify-center font-medium cursor-pointer",
                      style: {
                        backgroundColor: isToday(date) ? color : "",
                        border: isSelected(date) ? `2px solid ${colorToHex(color)}` : "",
                        color: isToday(date) ? "white" : ""
                      },
                      onClick: () => handleDateClick(date),
                      children: format(date, "dd")
                    }
                  )
                ] })
              }
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("tbody", { className: "dayview-body", children: timeList.map(({ hour, minutes: minutes2 }, hourIndex) => {
        const events = data.filter((event) => {
          const eventStartHour = datasource.type === "scalar" ? parseInt(event[startTime].split(":")[0]) : parseInt(convertMilliseconds(event[startTime]).split(":")[0]);
          const eventStartMinutes = datasource.type === "scalar" ? parseInt(event[startTime].split(":")[1]) : parseInt(convertMilliseconds(event[startTime]).split(":")[1]);
          const eventEndHour = datasource.type === "scalar" ? parseInt(event[endTime].split(":")[0]) : parseInt(convertMilliseconds(event[endTime]).split(":")[0]);
          const eventEndMinutes = datasource.type === "scalar" ? parseInt(event[endTime].split(":")[1]) : parseInt(convertMilliseconds(event[endTime]).split(":")[1]);
          const eventStartTime = timeToFloat(eventStartHour, eventStartMinutes);
          const eventEndTime = timeToFloat(eventEndHour, eventEndMinutes);
          return format(new Date(event[eventDate]), "yyyy-MM-dd") === format(date, "yyyy-MM-dd") && timeToFloat(checkHours(hour), minutes2) > eventStartTime - numberMin && timeToFloat(checkHours(hour), minutes2) <= eventEndTime;
        });
        return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("tr", { className: "dayview-row w-36 h-16", children: [
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("td", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "span",
            {
              className: `timeline text-gray-400 ${style?.fontSize ? style?.fontSize : "text-[12px]"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
              style: {
                color: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? color : ""
              },
              children: timeFormat === "12" ? format(
                setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                "KK:mm a"
              ) : format(
                setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                "HH:mm"
              )
            }
          ) }),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "td",
            {
              className: "time-cell border border-gray-200",
              style: {
                backgroundColor: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? colorToHex(color) + "30" : "",
                borderLeft: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? "5px solid " + color : ""
              },
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "time-content flex flex-col flex-wrap w-full h-full gap-0.5 overflow-x-auto", children: events.map((event, index) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "div",
                {
                  title: event[property],
                  className: "event px-2 border-t-4 overflow-y-auto h-full flex flex-col gap-1 cursor-pointer z-10",
                  style: {
                    backgroundColor: isSelectedEvent(event) ? colorToHex(selectedColor) + "70" : colorToHex(event.color) + "30",
                    borderTopColor: isSelectedEvent(event) ? colorToHex(selectedColor) : colorToHex(event.color)
                  },
                  onClick: () => handleItemClick(event),
                  children: [
                    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      "span",
                      {
                        className: `event-title ${style?.fontWeight ? style?.fontWeight : "font-medium"}`,
                        children: event[property]
                      }
                    ),
                    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "attributes flex flex-wrap", children: attributeList?.map((e) => {
                      return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        "span",
                        {
                          className: `attribute ${style?.fontSize ? style?.fontSize : "text-sm"} basis-1/2 text-start`,
                          title: event?.attributes[e]?.toString(),
                          children: event.attributes[e]
                        },
                        `attribute-${index}-${e}`
                      );
                    }) }, `attributes-${index}`)
                  ]
                },
                index
              )) })
            },
            format(date, "yyyy-MM-dd") + "-" + hourIndex
          )
        ] }, checkHours(hourIndex));
      }) })
    ] }) })
  ] }) : /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex h-24 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-red-600 py-4 text-red-700", children: [
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BsFillInfoCircleFill, { className: " h-6 w-6" }),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: " font-medium", children: checkParams })
  ] });
};

const DayView = (props) => {
  const { enabled } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(DayView$2, { ...props }) : /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(DayView$1, { ...props });
};
DayView.craft = config$2.craft;
DayView.info = config$2.info;
DayView.defaultProps = config$2.defaultProps;

const commonSettings$1 = [
  {
    key: "color",
    label: "Current Day Color",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
    defaultValue: "#1a73e8"
  },
  {
    key: "selectedColor",
    label: "Selected Element Color",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
    defaultValue: "#C084FC"
  },
  {
    key: "weekStart",
    label: "First Day of Week",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    defaultValue: "1",
    options: [
      { value: "1", label: "Monday" },
      { value: "0", label: "Sunday" }
    ]
  },
  {
    key: "language",
    label: "Language",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "en", label: "English" },
      { value: "fr", label: "French" },
      { value: "es", label: "Spanish" },
      { value: "de", label: "German" }
    ],
    defaultValue: "en"
  },
  {
    key: "minutes",
    label: "Minutes Interval",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "60", label: "60 min" },
      { value: "30", label: "30 min" },
      { value: "15", label: "15 min" }
    ],
    defaultValue: "60"
  },
  {
    key: "hours",
    label: "Day Hours",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "work", label: "Work Hours" },
      { value: "all", label: "All" }
    ],
    defaultValue: "all"
  },
  {
    key: "days",
    label: "Week Days",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "full", label: "All" },
      { value: "work", label: "Business Days" }
    ],
    defaultValue: "full"
  },
  {
    key: "timeFormat",
    label: "Time Format",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "24", label: "24 Hours" },
      { value: "12", label: "12 Hours" }
    ],
    defaultValue: "24"
  },
  {
    key: "headerPosition",
    label: "Header Display",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    options: [
      { value: "", label: "Auto" },
      { value: "sticky", label: "Sticky" }
    ],
    defaultValue: ""
  },
  {
    key: "height",
    label: "Row Height",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.UNITFIELD,
    hasLabel: true,
    defaultValue: "64px"
  },
  {
    key: "todayButton",
    label: "Today Button",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    defaultValue: true
  },
  {
    key: "yearNav",
    label: "Year Navigation",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    defaultValue: true
  }
];
const dataAccessSettings$1 = [
  {
    key: "datasource",
    label: "Qodly Source",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "currentElement",
    label: "Selected Element",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "selectedDate",
    label: "Selected Date",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    validateOnEnter: true
  }
];
const attributesSettings$1 = [
  {
    key: "property",
    label: "Property",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "startDate",
    label: "Date",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "startTime",
    label: "Start Time",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "endTime",
    label: "End Time",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "colorProp",
    label: "Color Property",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "colors",
    name: "Colors",
    label: "Colors",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    titleProperty: "color",
    data: [
      {
        key: "color",
        label: "Color",
        type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
        defaultValue: ""
      }
    ]
  },
  {
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    key: "attributes",
    name: "Attributes",
    label: "Attributes",
    titleProperty: "Attribute",
    data: [
      {
        key: "Attribute",
        label: "Attribute",
        type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
        datasourceProperty: "datasource"
      }
    ]
  }
];
const Settings$1 = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings$1
  },
  {
    key: "dataAccess",
    label: "Data Access",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: dataAccessSettings$1
  },
  {
    key: "attributes",
    label: "Data Attributes",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: attributesSettings$1
  },
  ...qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("dataAccess")
];
const BasicSettings$1 = [
  ...commonSettings$1,
  ...qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow")
];

const config$1 = {
  craft: {
    displayName: "WeekView",
    rules: {
      canMoveIn: () => true,
      canMoveOut: () => true
    },
    kind: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings$1, BasicSettings$1)
    }
  },
  info: {
    displayName: "WeekView",
    exposed: true,
    icon: MdCalendarViewWeek,
    events: [
      {
        label: "On Item Click",
        value: "onItemClick"
      },
      {
        label: "On Week Change",
        value: "onWeekChange"
      },
      {
        label: "On Date Click",
        value: "onDateClick"
      }
    ],
    datasources: {
      accept: ["array", "entitysel"],
      declarations: (props) => {
        const {
          property,
          startDate,
          startTime,
          endTime,
          colorProp,
          attributes,
          datasource = ""
        } = props;
        const declarations = [
          { path: datasource, iterable: true }
        ];
        if (property) {
          const { id: propertySrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(property);
          declarations.push({ path: `${datasource}.[].${propertySrc}` });
        }
        if (startDate) {
          const { id: startDateSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startDate);
          declarations.push({ path: `${datasource}.[].${startDateSrc}` });
        }
        if (startTime) {
          const { id: startTimeSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startTime);
          declarations.push({ path: `${datasource}.[].${startTimeSrc}` });
        }
        if (endTime) {
          const { id: endTimeSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(endTime);
          declarations.push({ path: `${datasource}.[].${endTimeSrc}` });
        }
        if (colorProp) {
          const { id: colorPropSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(colorProp);
          declarations.push({ path: `${datasource}.[].${colorPropSrc}` });
        }
        if (attributes) {
          attributes.forEach((attr) => {
            const { id: attrSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(attr.Attribute);
            declarations.push({ path: `${datasource}.[].${attrSrc}` });
          });
        }
        return declarations;
      }
    }
  },
  defaultProps: {
    language: "en",
    weekStart: "1",
    yearNav: true,
    minutes: "60",
    days: "full",
    color: "#1a73e8",
    selectedColor: "#C084FC",
    timeFormat: "24",
    height: "64px",
    headerPosition: "",
    todayButton: true
  }
};

const Scheduler$2 = ({
  yearNav,
  property,
  todayButton,
  weekStart,
  language,
  minutes,
  days,
  hours,
  height,
  timeFormat,
  headerPosition,
  color,
  selectedColor,
  attributes = [],
  style,
  className,
  classNames = []
}) => {
  const {
    connectors: { connect }
  } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const date = /* @__PURE__ */ new Date();
  const startOfWeekInt = parseInt(weekStart, 10);
  const firstDayOfWeek = startOfWeek(date, { weekStartsOn: startOfWeekInt });
  const firstHour = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (hours === "work") {
      return 8;
    }
    return 0;
  }, [hours]);
  const getWeekDates = (startDate) => {
    const dates = [];
    const startOfCurrentWeek = startOfWeek(startDate, { weekStartsOn: startOfWeekInt });
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(startOfCurrentWeek, i));
    }
    return dates;
  };
  const isCurrentHour = (hourIndex, mins) => {
    const currentHour = (/* @__PURE__ */ new Date()).getHours();
    switch (minutes) {
      case "15": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 15 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "30": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 30 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "60": {
        return currentHour === hourIndex;
      }
    }
  };
  let checkHours = (i) => {
    if (hours === "work") {
      return i + 8;
    }
    return i;
  };
  const weekDates = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    let dates = getWeekDates(date);
    if (days === "work") dates = dates.slice(0, 5);
    return dates;
  }, [date, days, getWeekDates]);
  const timeList = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    switch (minutes) {
      case "15": {
        return hours === "work" ? Array.from({ length: 44 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 96 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        });
      }
      case "30": {
        return hours === "work" ? Array.from({ length: 22 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 48 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        });
      }
      case "60": {
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
      }
      default:
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index + 8;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
    }
  }, [hours, minutes]);
  const locale$3 = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return { locale: locale };
    if (language === "es") return { locale: locale$1 };
    if (language === "de") return { locale: locale$2 };
    return {};
  }, [language]);
  const todayLabel = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return "Aujourd'hui";
    if (language === "es") return "Hoy";
    if (language === "de") return "Heute";
    return "Today";
  }, [language]);
  return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col gap-4 h-full", children: [
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      "div",
      {
        className: `scheduler-navigation flex items-center justify-center gap-2 ${style?.fontSize ? style?.fontSize : "text-xl"}`,
        children: [
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Previous year",
              className: "nav-button last-year rounded-full p-1 hover:bg-gray-300 duration-300",
              style: { display: yearNav ? "block" : "none" },
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowLeft, {})
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Previous month",
              className: "nav-button last-month rounded-full p-1 hover:bg-gray-300 duration-300",
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "span",
            {
              className: `current-month ${style?.fontSize ? style?.fontSize : "text-xl"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"} `,
              children: format(date, "MMMM yyyy", locale$3).charAt(0).toUpperCase() + format(date, "MMMM yyyy", locale$3).slice(1)
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Next month",
              className: "nav-button next-month rounded-full p-1 hover:bg-gray-300 duration-300",
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Next year",
              className: "nav-button next-year rounded-full p-1 hover:bg-gray-300 duration-300",
              style: { display: yearNav ? "block" : "none" },
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowRight, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "scheduler w-full h-full flex justify-center", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("table", { className: "table-fixed w-full h-full border-collapse", children: [
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("thead", { children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("tr", { className: "scheduler-header-row", children: [
        /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
          "th",
          {
            className: `scheduler-header time-column w-24 ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
            children: [
              /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "nav-buttons w-full flex items-center justify-center", children: [
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    title: "Previous week",
                    className: "nav-button last-week p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                    children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
                  }
                ),
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    className: "today-button p-1 rounded-lg hover:bg-gray-300 duration-300",
                    style: { display: todayButton ? "block" : "none" },
                    children: todayLabel
                  }
                ),
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "button",
                  {
                    title: "Next week",
                    className: "nav-button next-week p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                    children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
                  }
                )
              ] }),
              /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "timezone font-medium text-xs text-gray-400", children: format(date, "OOOO") })
            ]
          }
        ),
        weekDates.map((day, index) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "th",
          {
            className: `scheduler-header ${isEqual$2(day, firstDayOfWeek) && isEqual$2(firstHour, checkHours(index)) ? "w-32" : "w-24"} ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
            children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
              "div",
              {
                title: format(day, "EEEE", locale$3),
                className: "weekday-title flex flex-col items-center font-medium text-center",
                children: [
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "span",
                    {
                      className: "weekday-day text-sm",
                      style: { color: isToday(day) ? color : "" },
                      children: format(day, "EEE", locale$3).charAt(0).toUpperCase() + format(day, "EEE", locale$3).slice(1)
                    }
                  ),
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "span",
                    {
                      className: "weekday-number rounded-full text-xl mb-1 h-10 w-10 flex items-center justify-center font-medium",
                      style: {
                        backgroundColor: isToday(day) ? color : "",
                        color: isToday(day) ? "white" : ""
                      },
                      children: format(day, "dd", locale$3)
                    }
                  )
                ]
              },
              index
            )
          },
          index
        ))
      ] }) }),
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("tbody", { className: "scheduler-body", children: timeList.map(({ hour, minutes: minutes2 }, hourIndex) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
        "tr",
        {
          className: "w-32",
          style: {
            height
          },
          children: [
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("td", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "span",
              {
                className: `timeline text-gray-400 ${style?.fontSize ? style?.fontSize : "text-[12px]"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
                style: {
                  color: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? color : ""
                },
                children: timeFormat === "12" ? format(
                  setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                  "KK:mm a"
                ) : format(
                  setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                  "HH:mm"
                )
              }
            ) }),
            weekDates.map((day, dayIndex) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "td",
              {
                className: `time-cell border border-gray-200 p-1 ${isEqual$2(day, firstDayOfWeek) && isEqual$2(firstHour, checkHours(hourIndex)) ? "h-20" : "h-12"}`,
                style: {
                  backgroundColor: isToday(day) && isCurrentHour(checkHours(hour), minutes2) ? colorToHex(color) + "30" : "",
                  borderTop: isToday(day) && isCurrentHour(checkHours(hour), minutes2) ? "3px solid " + color : ""
                },
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "time-content flex flex-col flex-wrap w-full h-full gap-1 overflow-x-auto", children: isEqual$2(day, firstDayOfWeek) && isEqual$2(firstHour, checkHours(hourIndex)) ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                  "div",
                  {
                    className: "event p-1 border-t-4 overflow-y-auto h-full flex flex-col gap-1",
                    style: {
                      backgroundColor: colorToHex(selectedColor) + "50",
                      borderTopColor: colorToHex(selectedColor)
                    },
                    children: [
                      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        "span",
                        {
                          className: `event-title ${style?.fontWeight ? style?.fontWeight : "font-medium"}`,
                          children: property ? "{" + property + "}" : "No Property Set"
                        }
                      ),
                      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "attributes flex flex-wrap", children: attributes?.map((attribute, index) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        "span",
                        {
                          className: `attribute ${style?.fontSize ? style?.fontSize : "text-sm"} basis-1/2 text-start`,
                          children: attribute.Attribute
                        },
                        index
                      )) })
                    ]
                  }
                ) : null })
              },
              format(day, "yyyy-MM-dd") + "-" + dayIndex
            ))
          ]
        },
        `${hour}-${minutes2}`
      )) })
    ] }) })
  ] }) });
};

const Scheduler$1 = ({
  todayButton,
  language,
  weekStart,
  yearNav,
  minutes,
  hours,
  days,
  height,
  selectedDate,
  property,
  startDate,
  startTime,
  endTime,
  timeFormat,
  color,
  selectedColor,
  colorProp,
  colors = [],
  attributes = [],
  headerPosition,
  style,
  className,
  classNames = []
}) => {
  const { connect, emit } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const {
    sources: { datasource, currentElement: ce }
  } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  let { entities, fetchIndex, setStep, query, loaderDatasource } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDataLoader({
    source: datasource
  });
  const [date, setDate] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(/* @__PURE__ */ new Date());
  const [selDate, setSelDate] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(/* @__PURE__ */ new Date());
  const [selEvent, setSelEvent] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(null);
  const hasMounted = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useRef(false);
  const path = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useWebformPath();
  const [loading, setLoading] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(true);
  const [value, setValue] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState([]);
  const startOfWeekInt = parseInt(weekStart, 10);
  const attrs = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => datasource?.type === "entitysel" ? datasource.filterAttributesText?.split(",") : qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.isLocalArrayDataSource(datasource) ? Object.keys(datasource.value[0] || {}) : [],
    [datasource]
  );
  function convertMilliseconds(ms) {
    const seconds = Math.floor(ms / 1e3);
    const minutes2 = Math.floor(seconds / 60);
    const hours2 = Math.floor(minutes2 / 60);
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes2 % 60;
    return `${hours2.toString().padStart(2, "0")}:${remainingMinutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
  let attributeList = attributes?.map((e) => e.Attribute);
  const { id: propertyId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(property);
  property = propertyId;
  const { id: startDateId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startDate);
  startDate = startDateId;
  const { id: startTimeId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startTime);
  startTime = startTimeId;
  const { id: endTimeId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(endTime);
  endTime = endTimeId;
  const { id: colorPropId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(colorProp);
  colorProp = colorPropId;
  for (let index = 0; index < attributeList.length; index++) {
    const { id: attributeId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(attributeList[index]);
    attributeList[index] = attributeId;
  }
  const weekQuery = async (source, date2) => {
    setLoading(true);
    if (!source) return;
    if (source.type === "entitysel") {
      if (attrs?.includes(startDate.split(".")[0])) {
        const startOfWeekDate = format(startOfWeek(date2, { weekStartsOn: 1 }), "yyyy-MM-dd");
        const endOfWeekDate = format(endOfWeek(date2, { weekStartsOn: 1 }), "yyyy-MM-dd");
        const queryStr = `${startDate} >= :1 AND ${startDate} <= :2`;
        const placeholders = [startOfWeekDate, endOfWeekDate];
        query.entitysel({
          queryString: queryStr,
          placeholders
        });
      } else {
        checkParams = `"${startDate}" does not exist as an attribute`;
      }
    } else if (source.dataType === "array") {
      setValue(await source.getValue());
    }
    setLoading(false);
  };
  let checkParams = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (!datasource) {
      return 'Please set "Datasource"';
    } else if (!entities[0] || !entities.length) {
      return "";
    }
    if (!property) {
      return 'Please set "Property"';
    } else if (!attrs?.includes(property)) {
      return `${property} does not exist as an attribute`;
    }
    if (!startDate) {
      return 'Please set "event date"';
    } else if (!attrs?.includes(startDate)) {
      return `${startDate} does not exist as an attribute`;
    }
    if (!startTime) {
      return 'Please set "start time"';
    } else if (!attrs?.includes(startTime)) {
      return `${startTime} does not exist as an attribute`;
    }
    if (!endTime) {
      return 'Please set "end time"';
    } else if (!attrs?.includes(endTime)) {
      return `${endTime} does not exist as an attribute`;
    }
    return "";
  }, [datasource, entities]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (hasMounted.current) {
      emit("onWeekChange", { currentDate: date });
    } else {
      hasMounted.current = true;
    }
  }, [date]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!datasource || datasource.type == "entitysel" && !datasource.entitysel) {
      setLoading(false);
      return;
    }
    const fetch = async () => {
      weekQuery(loaderDatasource, date);
    };
    fetch();
  }, []);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!datasource) return;
    const cb = () => {
      weekQuery(loaderDatasource, date);
    };
    datasource.addListener("changed", cb);
    return () => {
      qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.unsubscribeFromDatasource(datasource, cb);
    };
  }, [datasource, date, loaderDatasource, datasource.entitysel]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    const fetchData = async () => {
      let selLength = await loaderDatasource.getValue("length");
      setStep({ start: 0, end: selLength });
      await fetchIndex(0);
    };
    fetchData();
  }, [loaderDatasource]);
  const colorgenerated = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    return generateColorPalette(entities.length, ...colors.map((e) => e.color || randomColor()));
  }, [entities.length]);
  const data = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    return (datasource.dataType === "array" ? value : entities).map((obj, index) => ({
      ...obj,
      color: obj[colorProp] || colorgenerated[index],
      attributes: attributeList?.reduce((acc, e) => {
        acc[e] = obj[e];
        return acc;
      }, {})
    }));
  }, [entities, colorgenerated, colorProp, attributeList]);
  const getWeekDates = (startDate2) => {
    const dates = [];
    const startOfCurrentWeek = startOfWeek(startDate2, { weekStartsOn: startOfWeekInt });
    for (let i = 0; i < 7; i++) {
      dates.push(addDays(startOfCurrentWeek, i));
    }
    return dates;
  };
  const isCurrentHour = (hourIndex, mins) => {
    const currentHour = (/* @__PURE__ */ new Date()).getHours();
    switch (minutes) {
      case "15": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 15 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "30": {
        return currentHour === hourIndex && (/* @__PURE__ */ new Date()).getMinutes() <= mins + 30 && (/* @__PURE__ */ new Date()).getMinutes() > mins;
      }
      case "60": {
        return currentHour === hourIndex;
      }
    }
  };
  const isSelectedDate = (date2) => {
    return isEqual$2(date2, selDate);
  };
  const isSelectedEvent = (event) => {
    return event[property] === selEvent?.[property] && event[startDate] === selEvent?.[startDate] && event[startTime] === selEvent?.[startTime] && event[endTime] === selEvent?.[endTime] || false;
  };
  const todayButt = () => {
    weekQuery(datasource, /* @__PURE__ */ new Date());
    setDate(/* @__PURE__ */ new Date());
  };
  const goToPreviousWeek = () => {
    weekQuery(datasource, subWeeks(date, 1));
    setDate(subWeeks(date, 1));
  };
  const goToNextWeek = () => {
    weekQuery(datasource, addWeeks(date, 1));
    setDate(addWeeks(date, 1));
  };
  const prevMonth = () => {
    weekQuery(datasource, subMonths(date, 1));
    setDate(subMonths(date, 1));
  };
  const nextMonth = () => {
    weekQuery(datasource, addMonths(date, 1));
    setDate(addMonths(date, 1));
  };
  const nextYear = () => {
    weekQuery(datasource, addMonths(date, 12));
    setDate(addMonths(date, 12));
  };
  const prevYear = () => {
    weekQuery(datasource, subMonths(date, 12));
    setDate(subMonths(date, 12));
  };
  const handleItemClick = async (item) => {
    setSelEvent(item);
    if (!ce) return;
    switch (ce.type) {
      case "scalar":
        ce.setValue(null, item);
        emit("onItemClick", { selectedData: ce });
        break;
      case "entity":
        const index = findIndex$1(
          entities,
          (e) => e[property] === item[property] && e[startDate] === item[startDate] && e[startTime] === item[startTime] && e[endTime] === item[endTime]
        );
        await updateEntity({ index, datasource: loaderDatasource, currentElement: ce });
        emit("onItemClick", { selectedData: ce });
        break;
    }
  };
  const handleDateClick = async (value2) => {
    setSelDate(value2);
    if (!selectedDate) return;
    const { id, namespace } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(selectedDate);
    const ds = window.DataSource.getSource(id, namespace) || window.DataSource.getSource(selectedDate, path);
    ds?.setValue(
      null,
      value2 instanceof Date && !isNaN(value2.valueOf()) ? qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.dateTo4DFormat(value2) : value2
    );
    const ce2 = await ds?.getValue();
    emit("onDateClick", { selectedDate: ce2 });
  };
  let checkHours = (i) => {
    if (hours === "work") {
      return i + 8;
    }
    return i;
  };
  const numberMin = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    switch (minutes) {
      case "15": {
        return 0.25;
      }
      case "30": {
        return 0.5;
      }
      case "60": {
        return 1;
      }
    }
  }, [minutes]);
  const timeToFloat = (hour, minutes2) => {
    const minutesFraction = minutes2 / 60;
    return hour + minutesFraction;
  };
  const weekDates = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    let dates = getWeekDates(date);
    if (days === "work") dates = dates.slice(0, 5);
    return dates;
  }, [date, days, getWeekDates]);
  const timeList = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    switch (minutes) {
      case "15": {
        return hours === "work" ? Array.from({ length: 44 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 96 }, (_, index) => {
          const hour = Math.floor(index / 4);
          const minutes2 = index % 4 * 15;
          return { hour, minutes: minutes2 };
        });
      }
      case "30": {
        return hours === "work" ? Array.from({ length: 22 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 48 }, (_, index) => {
          const hour = Math.floor(index / 2);
          const minutes2 = index % 2 * 30;
          return { hour, minutes: minutes2 };
        });
      }
      case "60": {
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
      }
      default:
        return hours === "work" ? Array.from({ length: 11 }, (_, index) => {
          const hour = index + 8;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        }) : Array.from({ length: 24 }, (_, index) => {
          const hour = index;
          const minutes2 = 0;
          return { hour, minutes: minutes2 };
        });
    }
  }, [hours, minutes]);
  const locale$3 = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return { locale: locale };
    if (language === "es") return { locale: locale$1 };
    if (language === "de") return { locale: locale$2 };
    return {};
  }, [language]);
  const todayLabel = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (language === "fr") return "Aujourd'hui";
    if (language === "es") return "Hoy";
    if (language === "de") return "Heute";
    return "Today";
  }, [language]);
  return !checkParams ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { ref: connect, style, className: cn(className, classNames), children: [
    loading && /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Spinner, {}),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-col gap-4 h-full", children: [
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
        "div",
        {
          className: `scheduler-navigation flex items-center justify-center gap-2 ${style?.fontSize ? style?.fontSize : "text-xl"}`,
          children: [
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Previous Year",
                className: "nav-button last-year rounded-full p-1 hover:bg-gray-300 duration-300",
                style: { display: yearNav ? "block" : "none" },
                onClick: prevYear,
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowLeft, {})
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Previous Month",
                className: "nav-button last-month rounded-full p-1 hover:bg-gray-300 duration-300",
                onClick: prevMonth,
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "span",
              {
                className: `current-month text-center w-44 ${style?.fontSize ? style?.fontSize : "text-xl"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"} `,
                children: format(date, "MMMM yyyy", locale$3).charAt(0).toUpperCase() + format(date, "MMMM yyyy", locale$3).slice(1)
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Next Month",
                className: "nav-button next-month rounded-full p-1 hover:bg-gray-300 duration-300",
                onClick: nextMonth,
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Next Year",
                className: "nav-button next-year rounded-full p-1 hover:bg-gray-300 duration-300",
                style: { display: yearNav ? "block" : "none" },
                onClick: nextYear,
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowRight, {})
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "scheduler w-full h-full flex justify-center", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("table", { className: "table-fixed w-full h-full border-collapse ", children: [
        /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("thead", { children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("tr", { className: "scheduler-header-row", children: [
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
            "th",
            {
              className: `scheduler-header time-column w-24 ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
              children: [
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "week-navigation w-full flex items-center justify-center", children: [
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "button",
                    {
                      title: "Previous Week",
                      className: "nav-button last-week p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                      onClick: goToPreviousWeek,
                      children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
                    }
                  ),
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "button",
                    {
                      onClick: todayButt,
                      className: "today-button p-1 rounded-lg hover:bg-gray-300 duration-300",
                      style: {
                        display: todayButton ? "block" : "none"
                      },
                      children: todayLabel
                    }
                  ),
                  /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                    "button",
                    {
                      title: "Next Week",
                      className: "nav-button next-week p-1 text-2xl rounded-full hover:bg-gray-300 duration-300",
                      onClick: goToNextWeek,
                      children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
                    }
                  )
                ] }),
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("span", { className: "timezone font-medium text-xs text-gray-400", children: format(date, "OOOO") })
              ]
            }
          ),
          weekDates.map((day, index) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "th",
            {
              className: `scheduler-header week-row w-32 ${headerPosition === "sticky" ? "sticky" : ""} top-0 z-[1] ${style?.backgroundColor ? style?.backgroundColor : "bg-white"}`,
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "div",
                {
                  title: format(day, "EEEE", locale$3),
                  className: "weekday-title flex flex-col items-center font-medium text-center",
                  children: [
                    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      "span",
                      {
                        className: "weekday-day text-sm cursor-pointer",
                        style: {
                          color: isToday(day) ? color : ""
                        },
                        children: format(day, "EEE", locale$3).charAt(0).toUpperCase() + format(day, "EEE", locale$3).slice(1)
                      }
                    ),
                    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      "span",
                      {
                        className: "weekday-number rounded-full text-xl mb-1 h-10 w-10 flex items-center justify-center font-medium cursor-pointer",
                        style: {
                          border: isSelectedDate(day) ? `2px solid ${colorToHex(color)}` : "",
                          backgroundColor: isToday(day) ? color : "",
                          color: isToday(day) ? "white" : ""
                        },
                        onClick: () => handleDateClick(day),
                        children: format(day, "dd")
                      }
                    )
                  ]
                },
                index
              )
            },
            index
          ))
        ] }) }),
        /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("tbody", { className: "scheduler-body", children: timeList.map(({ hour, minutes: minutes2 }, hIndex) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
          "tr",
          {
            className: "w-36",
            style: {
              height
            },
            children: [
              /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("td", { className: "flex items-center justify-center", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "span",
                {
                  className: `timeline text-gray-400 ${style?.fontSize ? style?.fontSize : "text-[12px]"} ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
                  style: {
                    color: isToday(date) && isCurrentHour(checkHours(hour), minutes2) ? color : ""
                  },
                  children: timeFormat === "12" ? format(
                    setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                    "KK:mm a"
                  ) : format(
                    setMinutes(setHours(/* @__PURE__ */ new Date(), checkHours(hour)), minutes2),
                    "HH:mm"
                  )
                }
              ) }),
              weekDates.map((day, dayIndex) => {
                const events = data.filter((event) => {
                  const eventStartHour = datasource.type === "scalar" ? parseInt(event[startTime].split(":")[0]) : parseInt(convertMilliseconds(event[startTime]).split(":")[0]);
                  const eventStartMinutes = datasource.type === "scalar" ? parseInt(event[startTime].split(":")[1]) : parseInt(convertMilliseconds(event[startTime]).split(":")[1]);
                  const eventEndHour = datasource.type === "scalar" ? parseInt(event[endTime].split(":")[0]) : parseInt(convertMilliseconds(event[endTime]).split(":")[0]);
                  const eventEndMinutes = datasource.type === "scalar" ? parseInt(event[endTime].split(":")[1]) : parseInt(convertMilliseconds(event[endTime]).split(":")[1]);
                  const eventStartTime = timeToFloat(eventStartHour, eventStartMinutes);
                  const eventEndTime = timeToFloat(eventEndHour, eventEndMinutes);
                  return format(new Date(event[startDate]), "yyyy-MM-dd") === format(day, "yyyy-MM-dd") && timeToFloat(checkHours(hour), minutes2) > eventStartTime - numberMin && timeToFloat(checkHours(hour), minutes2) <= eventEndTime;
                });
                return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "td",
                  {
                    className: "time-cell border border-gray-200",
                    style: {
                      backgroundColor: isToday(day) && isCurrentHour(checkHours(hour), minutes2) ? colorToHex(color) + "30" : "",
                      borderTop: isToday(day) && isCurrentHour(checkHours(hour), minutes2) ? "3px solid " + color : ""
                    },
                    children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "time-content flex flex-col flex-wrap w-full h-full gap-0.5 overflow-auto", children: events.map((event, index) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                      "div",
                      {
                        className: `event px-2 border-t-4 overflow-y-auto h-full flex flex-col gap-1 cursor-pointer z-10`,
                        style: {
                          backgroundColor: isSelectedEvent(event) ? colorToHex(selectedColor) + "70" : colorToHex(event.color) + "30",
                          borderTopColor: isSelectedEvent(event) ? colorToHex(selectedColor) : colorToHex(event.color)
                        },
                        onClick: () => handleItemClick(event),
                        children: [
                          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                            "span",
                            {
                              className: `event-title ${style?.fontWeight ? style?.fontWeight : "font-medium"}`,
                              title: event[property],
                              children: event[property]
                            }
                          ),
                          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                            "div",
                            {
                              className: "attributes flex flex-wrap",
                              children: attributeList?.map((e) => {
                                return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                                  "span",
                                  {
                                    className: `attribute ${style?.fontSize ? style?.fontSize : "text-sm"} basis-1/2 text-start`,
                                    title: event?.attributes[e]?.toString(),
                                    children: event.attributes[e]
                                  },
                                  `attribute-${index}-${e}`
                                );
                              })
                            },
                            `attributes-${index}`
                          )
                        ]
                      },
                      index
                    )) })
                  },
                  format(day, "yyyy-MM-dd") + "-" + dayIndex
                );
              })
            ]
          },
          checkHours(hIndex)
        )) })
      ] }) })
    ] })
  ] }) : /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex h-24 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-red-600 py-4 text-red-700", children: [
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BsFillInfoCircleFill, { className: " h-6 w-6" }),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: " font-medium", children: checkParams })
  ] });
};

const Scheduler = (props) => {
  const { enabled } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Scheduler$2, { ...props }) : /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Scheduler$1, { ...props });
};
Scheduler.craft = config$1.craft;
Scheduler.info = config$1.info;
Scheduler.defaultProps = config$1.defaultProps;

const commonSettings = [
  {
    key: "color",
    label: "Current Day Color",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
    defaultValue: "#1a73e8"
  },
  {
    key: "selectedColor",
    label: "Selected Element Color",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
    defaultValue: "#C084FC"
  },
  {
    key: "weekStart",
    label: "First Day of Week",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    defaultValue: "1",
    options: [
      { value: "1", label: "Monday" },
      { value: "0", label: "Sunday" }
    ]
  },
  {
    key: "language",
    label: "Language",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    defaultValue: "en",
    options: [
      { value: "en", label: "English" },
      { value: "fr", label: "French" },
      { value: "es", label: "Spanish" },
      { value: "de", label: "German" }
    ]
  },
  {
    key: "type",
    label: "Week Days",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    defaultValue: "full",
    options: [
      { value: "full", label: "All" },
      { value: "work", label: "Business days" }
    ]
  },
  {
    key: "rowHeight",
    label: "Row Height",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.UNITFIELD,
    defaultValue: "150px",
    hasLabel: true
  },
  {
    key: "borderRadius",
    label: "Border Radius",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.UNITFIELD,
    defaultValue: "6px",
    hasLabel: true
  },
  {
    key: "yearNav",
    label: "Year Navigation",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    defaultValue: true
  }
];
const attributesSettings = [
  {
    key: "property",
    label: "Property",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "startDate",
    label: "First Date",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "endDate",
    label: "Last Date",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    key: "colorProp",
    label: "Color Property",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
    datasourceProperty: "datasource"
  },
  {
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    key: "colors",
    name: "Colors",
    label: "Colors",
    titleProperty: "color",
    data: [
      {
        key: "color",
        label: "Color",
        type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
        defaultValue: ""
      }
    ]
  },
  {
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    key: "attributes",
    name: "Attributes",
    label: "Attributes",
    titleProperty: "Attribute",
    data: [
      {
        key: "Attribute",
        label: "Attribute",
        type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST,
        datasourceProperty: "datasource"
      }
    ]
  }
];
const dataAccessSettings = [
  {
    key: "datasource",
    label: "Qodly Source",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "currentElement",
    label: "Selected Element",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "selectedDate",
    label: "Selected Date",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DS_AUTO_SUGGEST
  },
  {
    key: "serverSideRef",
    label: "Server Side",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
    validateOnEnter: true
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  },
  {
    key: "dataAccess",
    label: "Data Access",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: dataAccessSettings
  },
  {
    key: "attributes",
    label: "Data Attributes",
    type: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: attributesSettings
  },
  ...qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("dataAccess")
];
const BasicSettings = [
  ...commonSettings,
  ...qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow")
];

const config = {
  craft: {
    displayName: "Calendar",
    rules: {
      canMoveIn: () => true,
      canMoveOut: () => true
    },
    kind: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "Calendar",
    exposed: true,
    icon: MdOutlineCalendarMonth,
    events: [
      {
        label: "On Date Click",
        value: "onDateClick"
      },
      {
        label: "On Item Click",
        value: "onItemClick"
      },
      {
        label: "On Month Change",
        value: "onMonthChange"
      }
    ],
    datasources: {
      accept: ["array", "entitysel"],
      declarations: (props) => {
        const {
          property,
          startDate,
          endDate,
          colorProp,
          attributes,
          datasource = ""
        } = props;
        const declarations = [
          { path: datasource, iterable: true }
        ];
        if (property) {
          const { id: propertySrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(property);
          declarations.push({ path: `${datasource}.[].${propertySrc}` });
        }
        if (startDate) {
          const { id: startDateSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startDate);
          declarations.push({ path: `${datasource}.[].${startDateSrc}` });
        }
        if (endDate) {
          const { id: endDateSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(endDate);
          declarations.push({ path: `${datasource}.[].${endDateSrc}` });
        }
        if (colorProp) {
          const { id: colorPropSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(colorProp);
          declarations.push({ path: `${datasource}.[].${colorPropSrc}` });
        }
        if (attributes) {
          attributes.forEach((attr) => {
            const { id: attrSrc } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(attr.Attribute);
            declarations.push({ path: `${datasource}.[].${attrSrc}` });
          });
        }
        return declarations;
      }
    }
  },
  defaultProps: {
    weekStart: "1",
    color: "#1a73e8",
    language: "en",
    type: "full",
    selectedColor: "#C084FC",
    yearNav: true,
    borderRadius: "6px",
    rowHeight: "150px",
    colorProp: ""
  }
};

const Calendar$2 = ({
  type,
  weekStart,
  language,
  attributes,
  property,
  rowHeight,
  color,
  selectedColor,
  yearNav,
  borderRadius,
  style,
  className,
  classNames = []
}) => {
  const {
    connectors: { connect }
  } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const date = /* @__PURE__ */ new Date();
  const startOfWeekInt = parseInt(weekStart, 10);
  const firstDayOfMonth = startOfWeek(startOfMonth(date), { weekStartsOn: startOfWeekInt });
  const daysInMonth = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => eachDayOfInterval({
      start: startOfWeek(startOfMonth(date), { weekStartsOn: startOfWeekInt }),
      end: endOfWeek(endOfMonth(date), { weekStartsOn: startOfWeekInt })
    }),
    [date]
  );
  let localeVar = language === "fr" ? locale : language === "es" ? locale$1 : language === "de" ? locale$2 : locale$3;
  let weekDays = Array.from({ length: type === "work" ? 5 : 7 }, (_, i) => {
    return {
      index: addDays(startOfWeek(date, { weekStartsOn: startOfWeekInt }), i),
      title: format(addDays(startOfWeek(date, { weekStartsOn: startOfWeekInt }), i), "EE", {
        locale: localeVar
      }),
      day: format(addDays(startOfWeek(date, { weekStartsOn: startOfWeekInt }), i), "EEEE", {
        locale: localeVar
      })
    };
  });
  const filteredDays = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => daysInMonth.filter((day) => {
      if (type === "work") {
        const dayOfWeek = day.getDay();
        return (startOfWeekInt === 0 ? dayOfWeek >= 0 : dayOfWeek >= 1) && (startOfWeekInt === 0 ? dayOfWeek <= 4 : dayOfWeek <= 5);
      }
      return true;
    }),
    [daysInMonth, type]
  );
  return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "calendar-container flex flex-col gap-4 w-full h-full", children: [
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      "div",
      {
        className: `calendar-header w-full flex justify-center gap-2 items-center ${style?.fontSize ? style?.fontSize : "text-xl"}`,
        children: [
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Previous year",
              className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
              style: { display: yearNav ? "" : "none" },
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowLeft, {})
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Previous month",
              className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "h2",
            {
              className: `month-title w-44 text-center ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
              children: format(date, "MMMM yyyy", { locale: localeVar }).charAt(0).toUpperCase() + format(date, "MMMM yyyy", { locale: localeVar }).slice(1)
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Next month",
              className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
            }
          ),
          /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "button",
            {
              title: "Next year",
              className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
              style: { display: yearNav ? "" : "none" },
              children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowRight, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
      "div",
      {
        className: "calendar-grid w-full grid justify-center",
        style: {
          gridTemplateColumns: `repeat(${weekDays.length}, minmax(0, 1fr))`
        },
        children: [
          weekDays.map((day) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
            "div",
            {
              title: day.day,
              className: `weekday-title ${style?.fontWeight ? style?.fontWeight : "font-medium"} ${style?.fontSize ? style?.fontSize : "text-lg"} text-center`,
              children: format(day.index, "EEE", { locale: localeVar }).charAt(0).toUpperCase() + format(day.index, "EEE", { locale: localeVar }).slice(1)
            },
            day.title
          )),
          filteredDays.map((day, index) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
            "div",
            {
              className: `day-container flex flex-col justify-start items-start gap-1 p-1 w-full`,
              style: {
                color: isSameMonth(day, date) ? style?.color ? style?.color : "black" : "#C0C0C0",
                borderWidth: style?.borderWidth ? style?.borderWidth : "1px",
                borderColor: style?.borderColor ? style?.borderColor : "#E0E0E0",
                backgroundColor: isSameMonth(day, date) ? style?.backgroundColor ? style?.backgroundColor : "white" : "#F3F4F6",
                height: rowHeight
              },
              children: [
                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-fit w-full", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                  "span",
                  {
                    className: `day-number h-7 w-7 flex items-center justify-center ${style?.fontWeight ? style?.fontWeight : "font-medium"} rounded-full cursor-pointer hover:bg-gray-300 duration-300`,
                    style: {
                      backgroundColor: isToday(day) ? color : "",
                      color: isToday(day) ? "white" : ""
                    },
                    children: format(day, "d")
                  }
                ) }),
                isEqual$2(day, firstDayOfMonth) ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                  "div",
                  {
                    className: "element-container px-2 py-1 flex flex-col w-full border-l-4 text-black",
                    style: {
                      borderRadius,
                      backgroundColor: colorToHex(selectedColor) + "50",
                      borderLeftColor: colorToHex(selectedColor)
                    },
                    children: [
                      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        "span",
                        {
                          className: `element-title ${style?.fontWeight ? style?.fontWeight : "font-medium"} line-clamp-2`,
                          children: property ? "{" + property + "}" : "No Property Set"
                        }
                      ),
                      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "element-detail flex flex-wrap", children: attributes?.map((attribute, index2) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                        "span",
                        {
                          className: `attribute ${style?.fontSize ? style?.fontSize : "text-sm"} basis-1/2 text-start`,
                          children: attribute.Attribute
                        },
                        index2
                      )) })
                    ]
                  }
                ) : null
              ]
            },
            index
          ))
        ]
      }
    )
  ] }) });
};

const Calendar$1 = ({
  type,
  weekStart,
  language,
  selectedDate,
  property,
  startDate,
  endDate,
  rowHeight,
  color,
  selectedColor,
  colors = [],
  attributes = [],
  colorProp,
  yearNav,
  borderRadius,
  style,
  className,
  classNames = []
}) => {
  const { connect, emit } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const {
    sources: { datasource, currentElement: selectedElement }
  } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  let { entities, fetchIndex, setStep, query, loaderDatasource } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useDataLoader({
    source: datasource
  });
  const [date, setDate] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(/* @__PURE__ */ new Date());
  const [selDate, setSelDate] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(/* @__PURE__ */ new Date());
  const [selEvent, setSelEvent] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(null);
  const hasMounted = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useRef(false);
  const path = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useWebformPath();
  const [loading, setLoading] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState(true);
  const [value, setValue] = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useState([]);
  const attrs = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => datasource?.type === "entitysel" ? datasource.filterAttributesText?.split(",") : qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.isLocalArrayDataSource(datasource) ? Object.keys(datasource.value[0] || {}) : [],
    [datasource]
  );
  const colorgenerated = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => generateColorPalette(entities.length, ...colors.map((e) => e.color || randomColor())),
    [entities.length, colors]
  );
  let attributeList = attributes?.map((e) => e.Attribute);
  const { id: propertyId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(property);
  property = propertyId;
  const { id: startDateId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(startDate);
  startDate = startDateId;
  const { id: endDateId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(endDate);
  endDate = endDateId;
  const { id: colorPropId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(colorProp);
  colorProp = colorPropId;
  for (let index = 0; index < attributeList.length; index++) {
    const { id: attributeId } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(attributeList[index]);
    attributeList[index] = attributeId;
  }
  const monthQuery = async (source, newMonth) => {
    setLoading(true);
    if (!source) return;
    if (source.type === "entitysel") {
      if (attrs?.includes(startDate.split(".")[0])) {
        const startOfWeekDate = format(
          startOfWeek(startOfMonth(newMonth), { weekStartsOn: 1 }),
          "yyyy-MM-dd"
        );
        const endOfMonthDate = format(
          endOfWeek(endOfMonth(newMonth), { weekStartsOn: 1 }),
          "yyyy-MM-dd"
        );
        const queryStr = `${startDate} >= :1 AND ${startDate} <= :2`;
        const placeholders = [startOfWeekDate, endOfMonthDate];
        query.entitysel({
          queryString: queryStr,
          placeholders
        });
      } else {
        checkParams = `"${startDate}" does not exist as an attribute`;
      }
    } else if (source.dataType === "array") {
      setValue(await source.getValue());
    }
    setLoading(false);
  };
  let checkParams = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(() => {
    if (!datasource) {
      return 'Please set "Datasource"';
    } else if (!entities[0] || !entities.length) {
      return "";
    }
    if (!property) {
      return 'Please set "Property"';
    } else if (!attrs?.includes(property)) {
      return `"${property}" does not exist as an attribute`;
    }
    if (!startDate) {
      return 'Please set the "Start Date"';
    } else if (!attrs?.includes(startDate)) {
      return `"${startDate}" does not exist as an attribute`;
    }
    if (!endDate) {
      return 'Please set the "End Date"';
    } else if (!attrs?.includes(endDate)) {
      return `"${endDate}" does not exist as an attribute`;
    }
    return "";
  }, [datasource, entities]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (hasMounted.current) {
      emit("onMonthChange", { currentDate: date });
    } else {
      hasMounted.current = true;
    }
  }, [date]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!datasource || datasource.type == "entitysel" && !datasource.entitysel) {
      setLoading(false);
      return;
    }
    const fetch = async () => {
      monthQuery(loaderDatasource, date);
    };
    fetch();
  }, []);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!datasource) return;
    const cb = () => {
      monthQuery(loaderDatasource, date);
    };
    datasource.addListener("changed", cb);
    return () => {
      qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.unsubscribeFromDatasource(datasource, cb);
    };
  }, [datasource, date, loaderDatasource, datasource.entitysel]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    const fetchData = async () => {
      let selLength = await loaderDatasource.getValue("length");
      setStep({ start: 0, end: selLength });
      await fetchIndex(0);
    };
    fetchData();
  }, [loaderDatasource]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!selectedElement || !loaderDatasource || !attrs?.length) return;
    const handleChange = async () => {
      const value2 = await selectedElement.getValue();
      if (!value2) return;
      setSelEvent(value2);
      if (value2[startDate]) {
        const parsedDate = new Date(value2[startDate]);
        if (!isNaN(parsedDate.getTime())) {
          setDate(parsedDate);
          monthQuery(loaderDatasource, parsedDate);
        }
      }
    };
    selectedElement.addListener("changed", handleChange);
    return () => {
      qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.unsubscribeFromDatasource(selectedElement, handleChange);
    };
  }, [selectedElement, startDate, loaderDatasource]);
  qodly_37629285cf887b8497da__loadShare__react__loadShare__.useEffect(() => {
    if (!selectedDate) return;
    const { id, namespace } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(selectedDate);
    const inputDate = window.DataSource.getSource(id, namespace) || window.DataSource.getSource(selectedDate, path);
    if (!inputDate) return;
    const updateDate = async () => {
      const val = await inputDate.getValue();
      if (!val) return;
      setDate(val);
      setSelDate(val);
      monthQuery(loaderDatasource, val);
    };
    updateDate();
    inputDate.addListener("changed", updateDate);
    return () => qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.unsubscribeFromDatasource(inputDate, updateDate);
  }, [selectedDate, path]);
  const isSelectedEvent = (event) => {
    return event[property] === selEvent?.[property] && event[startDate] === selEvent?.[startDate] && event[endDate] === selEvent?.[endDate] || false;
  };
  const prevMonth = () => {
    monthQuery(loaderDatasource, subMonths(date, 1));
    setDate(subMonths(date, 1));
  };
  const nextMonth = () => {
    monthQuery(loaderDatasource, addMonths(date, 1));
    setDate(addMonths(date, 1));
  };
  const nextYear = () => {
    monthQuery(loaderDatasource, addMonths(date, 12));
    setDate(addMonths(date, 12));
  };
  const prevYear = () => {
    monthQuery(loaderDatasource, subMonths(date, 12));
    setDate(subMonths(date, 12));
  };
  let coloredData = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => (datasource.dataType === "array" ? value : entities).map((obj, index) => ({
      ...obj,
      color: obj[colorProp] || colorgenerated[index],
      attributes: attributeList?.reduce((acc, e) => {
        acc[e] = obj[e];
        return acc;
      }, {})
    })),
    [entities, colorgenerated, colorProp, attributeList]
  );
  const handleDateClick = async (value2) => {
    setSelDate(value2);
    if (!selectedDate) return;
    const { id, namespace } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.splitDatasourceID(selectedDate);
    const ds = window.DataSource.getSource(id, namespace) || window.DataSource.getSource(selectedDate, path);
    ds?.setValue(
      null,
      value2 instanceof Date && !isNaN(value2.valueOf()) ? qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.dateTo4DFormat(value2) : value2
    );
    const ce = await ds?.getValue();
    emit("onDateClick", { selectedDate: ce });
  };
  const handleItemClick = async (item) => {
    setSelEvent(item);
    if (!selectedElement) return;
    switch (selectedElement.type) {
      case "scalar":
        selectedElement.setValue(null, item);
        const serializedData = {
          [property]: item[property],
          [startDate]: item[startDate],
          [endDate]: item[endDate],
          color: item.color,
          attributes: item.attributes
        };
        emit("onItemClick", { selectedData: serializedData });
        break;
      case "entity":
        const index = findIndex$1(
          entities,
          (e) => e[property] === item[property] && e[startDate] === item[startDate] && e[endDate] === item[endDate]
        );
        await updateEntity({
          index,
          datasource: loaderDatasource,
          currentElement: selectedElement
        });
        const serializedEntity = {
          [property]: item[property],
          [startDate]: item[startDate],
          [endDate]: item[endDate],
          color: item.color,
          attributes: item.attributes
        };
        emit("onItemClick", { selectedData: serializedEntity });
        break;
    }
  };
  const startOfWeekInt = parseInt(weekStart, 10);
  const daysInMonth = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => eachDayOfInterval({
      start: startOfWeek(startOfMonth(date), { weekStartsOn: startOfWeekInt }),
      end: endOfWeek(endOfMonth(date), { weekStartsOn: startOfWeekInt })
    }),
    [date]
  );
  let localeVar = language === "fr" ? locale : language === "es" ? locale$1 : language === "de" ? locale$2 : locale$3;
  let weekDays = Array.from({ length: type === "work" ? 5 : 7 }, (_2, i) => {
    return {
      index: addDays(startOfWeek(date, { weekStartsOn: startOfWeekInt }), i),
      title: format(addDays(startOfWeek(date, { weekStartsOn: startOfWeekInt }), i), "EE", {
        locale: localeVar
      }),
      day: format(addDays(startOfWeek(date, { weekStartsOn: startOfWeekInt }), i), "EEEE", {
        locale: localeVar
      })
    };
  });
  const filteredDays = qodly_37629285cf887b8497da__loadShare__react__loadShare__.useMemo(
    () => daysInMonth.filter((day) => {
      if (type === "work") {
        const dayOfWeek = day.getDay();
        return (startOfWeekInt === 0 ? dayOfWeek >= 0 : dayOfWeek >= 1) && (startOfWeekInt === 0 ? dayOfWeek <= 4 : dayOfWeek <= 5);
      }
      return true;
    }),
    [daysInMonth, type]
  );
  return !checkParams ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { ref: connect, style, className: cn(className, classNames), children: [
    loading && /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Spinner, {}),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "calendar-container flex flex-col gap-4 w-full h-full", children: [
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
        "div",
        {
          className: `calendar-header w-full flex justify-center gap-2 items-center ${style?.fontSize ? style?.fontSize : "text-xl"}`,
          children: [
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Previous year",
                className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
                onClick: prevYear,
                style: { display: yearNav ? "" : "none" },
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowLeft, {})
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Previous month",
                className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
                onClick: prevMonth,
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowLeft, {})
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "h2",
              {
                className: `month-title w-44 text-center ${style?.fontWeight ? style?.fontWeight : "font-semibold"}`,
                children: format(date, "MMMM yyyy", { locale: localeVar }).charAt(0).toUpperCase() + format(date, "MMMM yyyy", { locale: localeVar }).slice(1)
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Next month",
                className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
                onClick: nextMonth,
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardArrowRight, {})
              }
            ),
            /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "button",
              {
                title: "Next year",
                className: "nav-button rounded-full p-1 hover:bg-gray-300 duration-300",
                onClick: nextYear,
                style: { display: yearNav ? "" : "none" },
                children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(MdKeyboardDoubleArrowRight, {})
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
        "div",
        {
          className: "calendar-grid w-full grid justify-center",
          style: {
            gridTemplateColumns: `repeat(${weekDays.length}, minmax(0, 1fr))`
          },
          children: [
            weekDays.map((day) => /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              "span",
              {
                title: day.day,
                className: `weekday-title ${style?.fontWeight ? style?.fontWeight : "font-medium"} ${style?.fontSize ? style?.fontSize : "text-lg"} text-center`,
                children: format(day.index, "EEE", { locale: localeVar }).charAt(0).toUpperCase() + format(day.index, "EEE", { locale: localeVar }).slice(1)
              },
              day.title
            )),
            filteredDays.map((day) => {
              const data = coloredData.filter((item) => {
                const itemStartDate = new Date(item[startDate]);
                const itemEndDate = new Date(item[endDate]);
                return datasource.type === "scalar" ? day >= itemStartDate && day <= itemEndDate : day >= new Date(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.dateTo4DFormat(itemStartDate)) && day <= new Date(qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.dateTo4DFormat(itemEndDate));
              });
              return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                "div",
                {
                  className: `day-container flex flex-col justify-start items-start gap-1 p-1 w-full`,
                  style: {
                    color: isSameMonth(day, date) ? style?.color ? style?.color : "black" : "#C0C0C0",
                    borderWidth: style?.borderWidth ? style?.borderWidth : "1px",
                    borderColor: style?.borderColor ? style?.borderColor : "#E0E0E0",
                    backgroundColor: isSameMonth(day, date) ? style?.backgroundColor ? style?.backgroundColor : "white" : "#F3F4F6",
                    height: rowHeight
                  },
                  children: [
                    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "h-fit w-full", children: /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      "span",
                      {
                        className: `day-number h-7 w-7 flex items-center justify-center ${style?.fontWeight ? style?.fontWeight : "font-medium"} rounded-full cursor-pointer hover:bg-gray-300 duration-300`,
                        style: {
                          border: day === selDate ? `2px solid ${colorToHex(color)}` : "",
                          backgroundColor: isToday(day) ? color : "",
                          color: isToday(day) ? "white" : ""
                        },
                        onClick: () => handleDateClick(day),
                        children: format(day, "d")
                      }
                    ) }),
                    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                      "div",
                      {
                        className: `date-content w-full grid grid-cols-1 gap-1 overflow-hidden overflow-y-auto`,
                        children: data.map((item, index) => {
                          return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
                            "div",
                            {
                              className: `element-container cursor-pointer px-2 py-1 flex flex-col w-full border-l-4 text-black`,
                              style: {
                                color: isSameMonth(day, date) ? "black" : "#969696",
                                backgroundColor: isSameMonth(day, date) ? isSelectedEvent(item) ? colorToHex(selectedColor) + "70" : colorToHex(item?.color) + "50" : "#E3E3E3",
                                borderRadius,
                                borderLeftColor: isSameMonth(day, date) ? isSelectedEvent(item) ? colorToHex(selectedColor) : colorToHex(item?.color) : "#C0C0C0"
                              },
                              onClick: () => handleItemClick(item),
                              children: [
                                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                                  "span",
                                  {
                                    title: item[property],
                                    className: `element-title ${style?.fontWeight ? style?.fontWeight : "font-medium"} line-clamp-2`,
                                    children: item[property]
                                  },
                                  index
                                ),
                                /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "element-detail flex flex-wrap", children: attributeList?.map((e) => {
                                  return /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                                    "span",
                                    {
                                      className: `attribute ${style?.fontSize ? style?.fontSize : "text-sm"} basis-1/2 text-start`,
                                      title: item?.attributes[e]?.toString(),
                                      children: item.attributes[e]
                                    },
                                    `attribute-${index}-${e}`
                                  );
                                }) }, `attributes-${index}`)
                              ]
                            },
                            `${item[property]}-${item[startDate]}`
                          );
                        })
                      }
                    )
                  ]
                },
                day.toString()
              );
            })
          ]
        }
      )
    ] })
  ] }) : /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex h-24 w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-red-600 py-4 text-red-700", children: [
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(BsFillInfoCircleFill, { className: " h-6 w-6" }),
    /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("p", { className: " font-medium", children: checkParams })
  ] });
};

const Calendar = (props) => {
  const { enabled } = qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Calendar$2, { ...props }) : /* @__PURE__ */ qodly_37629285cf887b8497da__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Calendar$1, { ...props });
};
Calendar.craft = config.craft;
Calendar.info = config.info;
Calendar.defaultProps = config.defaultProps;

const components = {
  // components
  DayView,
  Scheduler,
  Calendar
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_37629285cf887b8497da__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
