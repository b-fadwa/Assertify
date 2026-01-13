import { q as qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-FBGdLX05.js';
import { q as qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__ } from './qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__-If-MPiLV.js';
import { F, q as qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__ } from './qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__-8RC_LqNr.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__ } from './qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-D1YUtFZO.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_d26e0edccfcc06391f2d__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/webform-editor", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^1.10.3"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

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
function TfiLayoutAccordionMerged (props) {
  return GenIcon({"attr":{"version":"1.1","viewBox":"0 0 17 17"},"child":[{"tag":"g","attr":{},"child":[]},{"tag":"path","attr":{"d":"M0 0v17h17v-17h-17zM16 1v9h-15v-9h15zM16 11v2h-15v-2h15zM1 16v-2h15v2h-15z"}}]})(props);
}

var commonjsBrowser = {};

var v1$1 = {};

var rng$1 = {};

Object.defineProperty(rng$1, "__esModule", {
  value: true
});
rng$1.default = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var stringify$1 = {};

var validate$1 = {};

var regex = {};

Object.defineProperty(regex, "__esModule", {
  value: true
});
regex.default = void 0;
var _default$c = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
regex.default = _default$c;

Object.defineProperty(validate$1, "__esModule", {
  value: true
});
validate$1.default = void 0;

var _regex = _interopRequireDefault$8(regex);

function _interopRequireDefault$8(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default$b = validate;
validate$1.default = _default$b;

Object.defineProperty(stringify$1, "__esModule", {
  value: true
});
stringify$1.default = void 0;
stringify$1.unsafeStringify = unsafeStringify;

var _validate$2 = _interopRequireDefault$7(validate$1);

function _interopRequireDefault$7(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate$2.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default$a = stringify;
stringify$1.default = _default$a;

Object.defineProperty(v1$1, "__esModule", {
  value: true
});
v1$1.default = void 0;

var _rng$1 = _interopRequireDefault$6(rng$1);

var _stringify$2 = stringify$1;

function _interopRequireDefault$6(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng$1.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify$2.unsafeStringify)(b);
}

var _default$9 = v1;
v1$1.default = _default$9;

var v3$1 = {};

var v35$1 = {};

var parse$1 = {};

Object.defineProperty(parse$1, "__esModule", {
  value: true
});
parse$1.default = void 0;

var _validate$1 = _interopRequireDefault$5(validate$1);

function _interopRequireDefault$5(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate$1.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default$8 = parse;
parse$1.default = _default$8;

Object.defineProperty(v35$1, "__esModule", {
  value: true
});
v35$1.URL = v35$1.DNS = void 0;
v35$1.default = v35;

var _stringify$1 = stringify$1;

var _parse = _interopRequireDefault$4(parse$1);

function _interopRequireDefault$4(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
v35$1.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
v35$1.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify$1.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

var md5$1 = {};

Object.defineProperty(md5$1, "__esModule", {
  value: true
});
md5$1.default = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default$7 = md5;
md5$1.default = _default$7;

Object.defineProperty(v3$1, "__esModule", {
  value: true
});
v3$1.default = void 0;

var _v$1 = _interopRequireDefault$3(v35$1);

var _md = _interopRequireDefault$3(md5$1);

function _interopRequireDefault$3(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v$1.default)('v3', 0x30, _md.default);
var _default$6 = v3;
v3$1.default = _default$6;

var v4$1 = {};

var native = {};

Object.defineProperty(native, "__esModule", {
  value: true
});
native.default = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default$5 = {
  randomUUID
};
native.default = _default$5;

Object.defineProperty(v4$1, "__esModule", {
  value: true
});
v4$1.default = void 0;

var _native = _interopRequireDefault$2(native);

var _rng = _interopRequireDefault$2(rng$1);

var _stringify = stringify$1;

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default$4 = v4;
v4$1.default = _default$4;

var v5$1 = {};

var sha1$1 = {};

Object.defineProperty(sha1$1, "__esModule", {
  value: true
});
sha1$1.default = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default$3 = sha1;
sha1$1.default = _default$3;

Object.defineProperty(v5$1, "__esModule", {
  value: true
});
v5$1.default = void 0;

var _v = _interopRequireDefault$1(v35$1);

var _sha = _interopRequireDefault$1(sha1$1);

function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default$2 = v5;
v5$1.default = _default$2;

var nil = {};

Object.defineProperty(nil, "__esModule", {
  value: true
});
nil.default = void 0;
var _default$1 = '00000000-0000-0000-0000-000000000000';
nil.default = _default$1;

var version$1 = {};

Object.defineProperty(version$1, "__esModule", {
  value: true
});
version$1.default = void 0;

var _validate = _interopRequireDefault(validate$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
version$1.default = _default;

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "NIL", {
	  enumerable: true,
	  get: function get() {
	    return _nil.default;
	  }
	});
	Object.defineProperty(exports, "parse", {
	  enumerable: true,
	  get: function get() {
	    return _parse.default;
	  }
	});
	Object.defineProperty(exports, "stringify", {
	  enumerable: true,
	  get: function get() {
	    return _stringify.default;
	  }
	});
	Object.defineProperty(exports, "v1", {
	  enumerable: true,
	  get: function get() {
	    return _v.default;
	  }
	});
	Object.defineProperty(exports, "v3", {
	  enumerable: true,
	  get: function get() {
	    return _v2.default;
	  }
	});
	Object.defineProperty(exports, "v4", {
	  enumerable: true,
	  get: function get() {
	    return _v3.default;
	  }
	});
	Object.defineProperty(exports, "v5", {
	  enumerable: true,
	  get: function get() {
	    return _v4.default;
	  }
	});
	Object.defineProperty(exports, "validate", {
	  enumerable: true,
	  get: function get() {
	    return _validate.default;
	  }
	});
	Object.defineProperty(exports, "version", {
	  enumerable: true,
	  get: function get() {
	    return _version.default;
	  }
	});

	var _v = _interopRequireDefault(v1$1);

	var _v2 = _interopRequireDefault(v3$1);

	var _v3 = _interopRequireDefault(v4$1);

	var _v4 = _interopRequireDefault(v5$1);

	var _nil = _interopRequireDefault(nil);

	var _version = _interopRequireDefault(version$1);

	var _validate = _interopRequireDefault(validate$1);

	var _stringify = _interopRequireDefault(stringify$1);

	var _parse = _interopRequireDefault(parse$1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } 
} (commonjsBrowser));

/**
 * Converter
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 * @constructor
 */
function Converter$1(srcAlphabet, dstAlphabet) {
    if (!srcAlphabet || !dstAlphabet || !srcAlphabet.length || !dstAlphabet.length) {
        throw new Error('Bad alphabet');
    }
    this.srcAlphabet = srcAlphabet;
    this.dstAlphabet = dstAlphabet;
}

/**
 * Convert number from source alphabet to destination alphabet
 *
 * @param {string|Array} number - number represented as a string or array of points
 *
 * @returns {string|Array}
 */
Converter$1.prototype.convert = function(number) {
    var i, divide, newlen,
    numberMap = {},
    fromBase = this.srcAlphabet.length,
    toBase = this.dstAlphabet.length,
    length = number.length,
    result = typeof number === 'string' ? '' : [];

    if (!this.isValid(number)) {
        throw new Error('Number "' + number + '" contains of non-alphabetic digits (' + this.srcAlphabet + ')');
    }

    if (this.srcAlphabet === this.dstAlphabet) {
        return number;
    }

    for (i = 0; i < length; i++) {
        numberMap[i] = this.srcAlphabet.indexOf(number[i]);
    }
    do {
        divide = 0;
        newlen = 0;
        for (i = 0; i < length; i++) {
            divide = divide * fromBase + numberMap[i];
            if (divide >= toBase) {
                numberMap[newlen++] = parseInt(divide / toBase, 10);
                divide = divide % toBase;
            } else if (newlen > 0) {
                numberMap[newlen++] = 0;
            }
        }
        length = newlen;
        result = this.dstAlphabet.slice(divide, divide + 1).concat(result);
    } while (newlen !== 0);

    return result;
};

/**
 * Valid number with source alphabet
 *
 * @param {number} number
 *
 * @returns {boolean}
 */
Converter$1.prototype.isValid = function(number) {
    var i = 0;
    for (; i < number.length; ++i) {
        if (this.srcAlphabet.indexOf(number[i]) === -1) {
            return false;
        }
    }
    return true;
};

var converter = Converter$1;

var Converter = converter;

/**
 * Function get source and destination alphabet and return convert function
 *
 * @param {string|Array} srcAlphabet
 * @param {string|Array} dstAlphabet
 *
 * @returns {function(number|Array)}
 */
function anyBase$1(srcAlphabet, dstAlphabet) {
    var converter = new Converter(srcAlphabet, dstAlphabet);
    /**
     * Convert function
     *
     * @param {string|Array} number
     *
     * @return {string|Array} number
     */
    return function (number) {
        return converter.convert(number);
    }
}
anyBase$1.BIN = '01';
anyBase$1.OCT = '01234567';
anyBase$1.DEC = '0123456789';
anyBase$1.HEX = '0123456789abcdef';

var anyBase_1 = anyBase$1;

/**
 * Created by Samuel on 6/4/2016.
 * Simple wrapper functions to produce shorter UUIDs for cookies, maybe everything?
 */

const { v4: uuidV4, validate: uuidValidate } = commonjsBrowser;
const anyBase = anyBase_1;

const constants = {
  cookieBase90: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+-./:<=>?@[]^_`{|}~",
  flickrBase58: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
  uuid25Base36: '0123456789abcdefghijklmnopqrstuvwxyz',
};

const baseOptions = {
  consistentLength: true,
};

// A default generator, instantiated only if used.
let toFlickr;

/**
 * Takes a UUID, strips the dashes, and translates.
 * @param {string} longId
 * @param {function(string):string} translator
 * @param {Object} [paddingParams]
 * @returns {string}
 */
const shortenUUID = (longId, translator, paddingParams) => {
  const translated = translator(longId.toLowerCase().replace(/-/g, ''));

  if (!paddingParams || !paddingParams.consistentLength) return translated;

  return translated.padStart(
    paddingParams.shortIdLength,
    paddingParams.paddingChar,
  );
};

/**
 * Translate back to hex and turn back into UUID format, with dashes
 * @param {string} shortId
 * @param {function(string)} translator
 * @returns {string}
 */
const enlargeUUID = (shortId, translator) => {
  const uu1 = translator(shortId).padStart(32, '0');

  // Join the zero padding and the UUID and then slice it up with match
  const m = uu1.match(/(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})/);

  // Accumulate the matches and join them.
  return [m[1], m[2], m[3], m[4], m[5]].join('-');
};

/**
 * Calculate length for the shortened ID
 * @param {number} alphabetLength
 * @returns {number}
 */
const getShortIdLength = (alphabetLength) => (
  Math.ceil(Math.log(2 ** 128) / Math.log(alphabetLength)));

var shortUuid = (() => {
  /**
   * @param {string} toAlphabet
   * @param {{ consistentLength: boolean }} [options]
   * @returns {{
   *  alphabet: string,
   *  fromUUID: (function(*): string),
   *  generate: (function(): string),
   *  maxLength: number,
   *  new: (function(): string),
   *  toUUID: (function(*): string),
   *  uuid: ((function(*, *, *): (*))|*),
   *  validate: ((function(*, boolean=false): (boolean))|*)}}
   */
  const makeConvertor = (toAlphabet, options) => {
    // Default to Flickr 58
    const useAlphabet = toAlphabet || constants.flickrBase58;

    // Default to baseOptions
    const selectedOptions = { ...baseOptions, ...options };

    // Check alphabet for duplicate entries
    if ([...new Set(Array.from(useAlphabet))].length !== useAlphabet.length) {
      throw new Error('The provided Alphabet has duplicate characters resulting in unreliable results');
    }

    const shortIdLength = getShortIdLength(useAlphabet.length);

    // Padding Params
    const paddingParams = {
      shortIdLength,
      consistentLength: selectedOptions.consistentLength,
      paddingChar: useAlphabet[0],
    };

    // UUIDs are in hex, so we translate to and from.
    const fromHex = anyBase(anyBase.HEX, useAlphabet);
    const toHex = anyBase(useAlphabet, anyBase.HEX);
    /**
     * @returns {string} - short id
     */
    const generate = () => shortenUUID(uuidV4(), fromHex, paddingParams);

    /**
     * Confirm if string is a valid id. Checks length and alphabet.
     * If the second parameter is true it will translate to standard UUID
     *  and check the result for UUID validity.
     * @param {string} shortId - The string to check for validity
     * @param {boolean} [rigorous=false] - If true, also check for a valid UUID
     * @returns {boolean}
     */
    const validate = (shortId, rigorous = false) => {
      if (!shortId || typeof shortId !== 'string') return false;
      const isCorrectLength = selectedOptions.consistentLength
        ? shortId.length === shortIdLength
        : shortId.length <= shortIdLength;
      const onlyAlphabet = shortId.split('').every((letter) => useAlphabet.includes(letter));
      if (rigorous === false) return isCorrectLength && onlyAlphabet;
      return isCorrectLength && onlyAlphabet && uuidValidate(enlargeUUID(shortId, toHex));
    };

    const translator = {
      alphabet: useAlphabet,
      fromUUID: (uuid) => shortenUUID(uuid, fromHex, paddingParams),
      maxLength: shortIdLength,
      generate,
      new: generate,
      toUUID: (shortUuid) => enlargeUUID(shortUuid, toHex),
      uuid: uuidV4,
      validate,
    };

    Object.freeze(translator);

    return translator;
  };

  // Expose the constants for other purposes.
  makeConvertor.constants = constants;

  // Expose the generic v4 UUID generator for convenience
  makeConvertor.uuid = uuidV4;

  // Provide a generic generator
  makeConvertor.generate = () => {
    if (!toFlickr) {
      // Generate on first use;
      toFlickr = makeConvertor(constants.flickrBase58).generate;
    }
    return toFlickr();
  };

  return makeConvertor;
})();

// THIS FILE IS AUTO GENERATED
function FaHandPointLeft (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M44.8 155.826h149.234c-5.841-8.248-10.57-16.558-14.153-24.918C166.248 99.098 189.778 63.986 224 64c18.616.008 32.203 10.897 40 29.092 12.122 28.286 78.648 64.329 107.534 77.323 17.857 7.956 28.453 25.479 28.464 43.845l.002.001v171.526c0 11.812-8.596 21.897-20.269 23.703-46.837 7.25-61.76 38.483-123.731 38.315-2.724-.007-13.254.195-16 .195-50.654 0-81.574-22.122-72.6-71.263-18.597-9.297-30.738-39.486-16.45-62.315-24.645-21.177-22.639-53.896-6.299-70.944H44.8c-24.15 0-44.8-20.201-44.8-43.826 0-23.283 21.35-43.826 44.8-43.826zM440 176h48c13.255 0 24 10.745 24 24v192c0 13.255-10.745 24-24 24h-48c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24zm24 212c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"}}]})(props);
}function FaHandPointRight (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M512 199.652c0 23.625-20.65 43.826-44.8 43.826h-99.851c16.34 17.048 18.346 49.766-6.299 70.944 14.288 22.829 2.147 53.017-16.45 62.315C353.574 425.878 322.654 448 272 448c-2.746 0-13.276-.203-16-.195-61.971.168-76.894-31.065-123.731-38.315C120.596 407.683 112 397.599 112 385.786V214.261l.002-.001c.011-18.366 10.607-35.889 28.464-43.845 28.886-12.994 95.413-49.038 107.534-77.323 7.797-18.194 21.384-29.084 40-29.092 34.222-.014 57.752 35.098 44.119 66.908-3.583 8.359-8.312 16.67-14.153 24.918H467.2c23.45 0 44.8 20.543 44.8 43.826zM96 200v192c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V200c0-13.255 10.745-24 24-24h48c13.255 0 24 10.745 24 24zM68 368c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"}}]})(props);
}

const commonSettings = [
  {
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    label: "Variant",
    isClearable: false,
    options: [
      {
        label: "Default",
        value: "default"
      },
      {
        label: "Contained",
        value: "contained"
      },
      {
        label: "Filled",
        value: "filled"
      },
      {
        label: "Separated",
        value: "separated"
      }
    ],
    key: "variant",
    isSearchable: false
  },
  {
    key: "openChevron",
    label: "Open Chevron",
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.ICON_PICKER,
    defaultValue: "fa-chevron-up"
  },
  {
    key: "closeChevron",
    label: "CLose Chevron",
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.ICON_PICKER,
    defaultValue: "fa-chevron-down"
  },
  {
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    label: "radius",
    key: "radius",
    isClearable: false,
    isSearchable: false,
    options: [
      {
        label: "None",
        value: "rounded-none"
      },
      {
        label: "Small",
        value: "rounded-sm"
      },
      {
        label: "Medium",
        value: "rounded"
      },
      {
        label: "Large",
        value: "rounded-lg"
      },
      {
        label: "Extra Large",
        value: "rounded-xl"
      },
      {
        label: "Extra Extra Large",
        value: "rounded-2xl"
      },
      {
        label: "Extra Extra Extra Large",
        value: "rounded-3xl"
      }
    ]
  },
  {
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.CHECKBOX,
    label: "Multiple",
    key: "multiple",
    defaultValue: false
  },
  {
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.RADIOGROUP,
    label: "Chevron Position",
    key: "position",
    defaultValue: "right",
    options: [
      {
        icon: FaHandPointRight,
        value: "right"
      },
      {
        icon: FaHandPointLeft,
        value: "left"
      }
    ]
  },
  {
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.SELECT,
    label: "Transition",
    key: "transition",
    defaultValue: "ease-in-out",
    options: [
      {
        label: "0 ms",
        value: "duration-0"
      },
      {
        label: "75 ms",
        value: "duration-75"
      },
      {
        label: "100 ms",
        value: "duration-100"
      },
      {
        label: "150 ms",
        value: "duration-150"
      },
      {
        label: "200 ms",
        value: "duration-200"
      },
      {
        label: "300 ms",
        value: "duration-300"
      },
      {
        label: "500 ms",
        value: "duration-500"
      },
      {
        label: "700 ms",
        value: "duration-700"
      },
      {
        label: "1000 ms",
        value: "duration-1000"
      }
    ]
  },
  {
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.DATAGRID,
    key: "items",
    name: "Items",
    label: "Items",
    titleProperty: "title",
    data: [
      {
        key: "title",
        label: "Title",
        type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.TEXT_FIELD,
        defaultValue: ""
      }
    ]
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  },
  ...qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("datasource")
];
const BasicSettings = [
  ...commonSettings,
  ...qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter(
    "display",
    "style.overflow",
    "style.overflow",
    "style.textAlign",
    "style.fontSize",
    "style.fontWeight",
    "style.fontFamily"
  )
];

const config = {
  craft: {
    displayName: "Accordion",
    rules: {
      canMoveIn: () => true,
      canMoveOut: () => true
    },
    kind: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      name: "",
      classNames: [],
      events: [],
      items: [
        {
          id: shortUuid.generate(),
          title: "Accordion 1",
          initialSsRef: "accordion_1"
        }
      ],
      variant: "default"
    },
    related: {
      settings: qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "Accordion",
    exposed: true,
    icon: TfiLayoutAccordionMerged,
    events: [
      {
        label: "On Change",
        value: "onchange"
      },
      {
        label: "On Click",
        value: "onclick"
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
      canAttach: () => false
    }
  },
  defaultProps: {
    multiple: false,
    transition: "duration-300",
    position: "right",
    radius: "rounded-none",
    openChevron: "fa-chevron-up",
    closeChevron: "fa-chevron-down"
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

const AccordionItem = ({
  variant,
  onClick,
  active,
  item,
  resolver,
  transition,
  position,
  radius,
  openChevron,
  closeChevron
}) => {
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
    "div",
    {
      className: cn(
        "accordion-item",
        `${variant === "filled" || variant === "separated" ? radius : ""}`,
        {
          active,
          "m-1": variant === "separated" || variant === "filled",
          "bg-gray-100": variant === "separated" && !active || variant === "filled" && active || variant === "contained" && active,
          border: variant === "separated" && active
        }
      ),
      children: [
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(
          "div",
          {
            className: cn("accordion-title", "flex mx-1 justify-between items-center gap-2", {
              "flex-row-reverse": position === "left"
            }),
            children: [
              /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
                {
                  id: `accordion_${item.id}`,
                  className: "h-fit",
                  role: "accordion-header",
                  is: resolver.StyleBox,
                  deletable: false,
                  canvas: true
                }
              ),
              /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
                "span",
                {
                  onClick,
                  className: cn(
                    "fa cursor-pointer self-center p-2",
                    "accordion-chevron",
                    active ? openChevron : closeChevron
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
          "div",
          {
            className: cn(
              "accordion-content p-1 overflow-hidden transition-max-height ease-in-out",
              `${transition}`,
              {
                "max-h-0 opacity-0": !active,
                "max-h-screen opacity-100": active
              }
            ),
            children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
              qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__.Element,
              {
                serverSideRef: item.initialSsRef,
                id: `body${item.id}`,
                role: "accordion-content",
                is: resolver.StyleBox,
                deletable: false,
                canvas: true
              }
            )
          }
        )
      ]
    }
  );
};

const Accordion$2 = ({
  style,
  variant,
  className,
  multiple,
  classNames = [],
  items,
  transition,
  position,
  radius,
  openChevron,
  closeChevron
}) => {
  const {
    connectors: { connect }
  } = qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  const [accordion, setAccordion] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState([]);
  const toggleAccordion = (i) => {
    multiple ? accordion.includes(i) ? setAccordion(accordion.filter((item) => item !== i)) : setAccordion([...accordion, i]) : accordion.includes(i) ? setAccordion([]) : setAccordion([i]);
  };
  const { resolver } = qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: cn(
        "accordion",
        "overflow-hidden",
        {
          "divide-y": variant === "default" || variant === "contained",
          border: variant === "contained"
        },
        `${variant === "contained" ? radius : ""}`
      ),
      children: items?.map((item, index) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        AccordionItem,
        {
          position,
          resolver,
          onClick: () => toggleAccordion(index),
          active: accordion.includes(index),
          item,
          variant,
          transition,
          radius,
          openChevron,
          closeChevron
        },
        item.id
      ))
    }
  ) });
};

const Accordion$1 = ({
  style,
  variant,
  className,
  multiple,
  classNames = [],
  items,
  transition,
  position,
  radius,
  openChevron,
  closeChevron
}) => {
  const { connect } = qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const { resolver } = qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor(qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.selectResolver);
  const [accordion, setAccordion] = qodly_d26e0edccfcc06391f2d__loadShare__react__loadShare__.useState([]);
  const toggleAccordion = (i) => {
    multiple ? accordion.includes(i) ? setAccordion(accordion.filter((item) => item !== i)) : setAccordion([...accordion, i]) : accordion.includes(i) ? setAccordion([]) : setAccordion([i]);
  };
  return /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    "div",
    {
      className: cn(
        "accordion",
        "overflow-hidden",
        {
          "divide-y": variant === "default" || variant === "contained",
          border: variant === "contained"
        },
        `${variant === "contained" ? radius : ""}`
      ),
      children: items?.map((item, index) => /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        AccordionItem,
        {
          resolver,
          onClick: () => toggleAccordion(index),
          active: accordion.includes(index),
          item,
          variant,
          transition,
          position,
          radius,
          openChevron,
          closeChevron
        },
        item.id
      ))
    }
  ) });
};

const Accordion = (props) => {
  const { enabled } = qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Accordion$2, { ...props }) : /* @__PURE__ */ qodly_d26e0edccfcc06391f2d__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Accordion$1, { ...props });
};
Accordion.craft = config.craft;
Accordion.info = config.info;
Accordion.defaultProps = config.defaultProps;

const components = {
  // components
  Accordion
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_d26e0edccfcc06391f2d__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
