import { q as qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ } from './qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__-D3RpXBpD.js';
import { F, q as qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__ } from './qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__-CO-DFPBr.js';
import { i as invariant } from './tiny-invariant-w-EUxzzv.js';
import { l as lodashExports } from './lodash-LXAsj4Au.js';
import { _ as _getNative, e as eq_1, k as keys_1, i as isObject_1, a as _isPrototype, b as _arrayLikeKeys, c as isArrayLike_1, d as _root, f as _getSymbols, g as _overArg, s as stubArray_1, h as _arrayPush, j as _baseGetAllKeys, l as _Uint8Array, m as _Symbol, n as isObjectLike_1, o as _getTag, p as _baseUnary, q as _nodeUtilExports, r as isBufferExports, t as _Stack, u as _getAllKeys, v as isArray_1, W } from './_Uint8Array-CVmOElyI.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import './qodly_4b73e4fdf8fb53606fa0__mf_v__runtimeInit__mf_v__-DeeVpxRz.js';

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */

function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;

var getNative = _getNative;

var defineProperty$1 = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$1;

var defineProperty = _defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$2(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$2;

var baseAssignValue$1 = _baseAssignValue,
    eq = eq_1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$1(object, key, value);
  }
}

var _assignValue = assignValue$2;

var assignValue$1 = _assignValue,
    baseAssignValue = _baseAssignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$4(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject$4;

var copyObject$3 = _copyObject,
    keys$1 = keys_1;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$1(source), object);
}

var _baseAssign = baseAssign$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn$1;

var isObject$2 = isObject_1,
    isPrototype$1 = _isPrototype,
    nativeKeysIn = _nativeKeysIn;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject$2(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeysIn = _baseKeysIn,
    isArrayLike = isArrayLike_1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

var keysIn_1 = keysIn$3;

var copyObject$2 = _copyObject,
    keysIn$2 = keysIn_1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}

var _baseAssignIn = baseAssignIn$1;

var _cloneBuffer = {exports: {}};

_cloneBuffer.exports;

(function (module, exports) {
	var root = _root;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer; 
} (_cloneBuffer, _cloneBuffer.exports));

var _cloneBufferExports = _cloneBuffer.exports;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

var copyObject$1 = _copyObject,
    getSymbols$1 = _getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$1(source), object);
}

var _copySymbols = copySymbols$1;

var overArg = _overArg;

/** Built-in value references. */
var getPrototype$2 = overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$2;

var arrayPush = _arrayPush,
    getPrototype$1 = _getPrototype,
    getSymbols = _getSymbols,
    stubArray = stubArray_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype$1(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn$2;

var copyObject = _copyObject,
    getSymbolsIn$1 = _getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}

var _copySymbolsIn = copySymbolsIn$1;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbolsIn = _getSymbolsIn,
    keysIn$1 = keysIn_1;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn$1;

/** Used for built-in method references. */

var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray$1(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray$1;

var Uint8Array = _Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$3;

var cloneArrayBuffer$2 = _cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView$1;

/** Used to match `RegExp` flags from their coerced string values. */

var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp$1;

var Symbol$1 = _Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol$1;

var cloneArrayBuffer$1 = _cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;

var cloneArrayBuffer = _cloneArrayBuffer,
    cloneDataView = _cloneDataView,
    cloneRegExp = _cloneRegExp,
    cloneSymbol = _cloneSymbol,
    cloneTypedArray = _cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$1:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor;

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return cloneRegExp(object);

    case setTag$2:
      return new Ctor;

    case symbolTag$1:
      return cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag$1;

var isObject$1 = isObject_1;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate$1 = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate$1;

var baseCreate = _baseCreate,
    getPrototype = _getPrototype,
    isPrototype = _isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$1(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject$1;

var getTag$2 = _getTag,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}

var _baseIsMap = baseIsMap$1;

var baseIsMap = _baseIsMap,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;

var isMap_1 = isMap$1;

var getTag$1 = _getTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var setTag$1 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}

var _baseIsSet = baseIsSet$1;

var baseIsSet = _baseIsSet,
    baseUnary = _baseUnary,
    nodeUtil = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

var isSet_1 = isSet$1;

var Stack = _Stack,
    arrayEach = _arrayEach,
    assignValue = _assignValue,
    baseAssign = _baseAssign,
    baseAssignIn = _baseAssignIn,
    cloneBuffer = _cloneBufferExports,
    copyArray = _copyArray,
    copySymbols = _copySymbols,
    copySymbolsIn = _copySymbolsIn,
    getAllKeys = _getAllKeys,
    getAllKeysIn = _getAllKeysIn,
    getTag = _getTag,
    initCloneArray = _initCloneArray,
    initCloneByTag = _initCloneByTag,
    initCloneObject = _initCloneObject,
    isArray = isArray_1,
    isBuffer = isBufferExports,
    isMap = isMap_1,
    isObject = isObject_1,
    isSet = isSet_1,
    keys = keys_1,
    keysIn = keysIn_1;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone$1;

var baseClone = _baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

var cloneDeep_1 = cloneDeep;

const V = /*@__PURE__*/getDefaultExportFromCjs(cloneDeep_1);

"undefined"!=typeof window&&(window.__CRAFTJS__||(window.__CRAFTJS__={}),window.__CRAFTJS__["@ws-ui/craftjs-core"]="0.2.26");const X=F.createContext(null),Y=({id:e,related:t=false,children:n})=>F.createElement(X.Provider,{value:{id:e,related:t}},n);function G(e,t,n){return (t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r);}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),true).forEach(function(t){G(e,t,n[t]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));});}return e}function Q(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r];}return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++) -1===t.indexOf(n=s[r])&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}const Z=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.createContext(null),ee=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.createContext(null),te=()=>qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useContext(ee);function ne(r){const o=te(),s=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useContext(Z);invariant(s);const d=qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.useCollector(s,r),a=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useMemo(()=>o&&o.createConnectorsUsage(),[o]);qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useEffect(()=>(a.register(),()=>{a.cleanup();}),[a]);const i=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useMemo(()=>a&&qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.wrapConnectorHooks(a.connectors),[a]);return U(U({},d),{},{connectors:i,inContext:!!s,store:s})}const re=["actions","query","connectors"];function oe(e){const t=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useContext(X);invariant(t);const{id:o,related:s}=t,d=ne(t=>o&&t.nodes[o]&&e&&e(t.nodes[o])),{actions:a,connectors:i}=d,l=Q(d,re),c=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useMemo(()=>qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.wrapConnectorHooks({connect:e=>i.connect(e,o),drag:e=>i.drag(e,o)}),[i,o]),p=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useMemo(()=>({setProp:(e,t)=>{t?a.history.throttle(t).setProp(o,e):a.setProp(o,e);},setCustom:(e,t)=>{t?a.history.throttle(t).setCustom(o,e):a.setCustom(o,e);},setHidden:e=>a.setHidden(o,e)}),[a,o]);return U(U({},l),{},{id:o,related:s,inNodeContext:!!t,actions:p,connectors:c})}const se=["id","related","actions","inNodeContext","connectors"];function de(e){const t=oe(e),{id:n,related:r,actions:s,inNodeContext:d,connectors:a}=t;return U(U({},Q(t,se)),{},{actions:s,id:n,related:r,setProp:(e,t)=>(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning("useNode().setProp()",{suggest:"useNode().actions.setProp()"}),s.setProp(e,t)),inNodeContext:d,connectors:a})}const ae=({render:e})=>{const{connectors:{connect:t,drag:n}}=de();return "string"==typeof e.type?t(n(F.cloneElement(e))):e},ie=()=>{const{query:e}=ne(),{type:t,props:n,nodes:r,hydrationTimestamp:o}=oe(e=>({type:e.data.type,props:e.data.props,nodes:e.data.nodes,hydrationTimestamp:e._hydrationTimestamp})),s=(t=[])=>0===t.length?[]:t.reduce((t,n)=>{const r=e.node(n).get();return [...t,r?._hydrationTimestamp||n,...s(r?.data?.nodes||[])]},[]),d=s(r).join(",");return qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useMemo(()=>{let o=n?.children;r&&r.length>0&&(o=F.createElement(F.Fragment,null,r.map(t=>{const n=e.node(t).get();return F.createElement(ce,{id:t,key:n?._hydrationTimestamp||t})})));const s=t?F.createElement(t,n,o):null;return "string"==typeof t?F.createElement(ae,{render:s}):s},[t,n,o,r,e,d])},le=({render:e})=>{const{hidden:t}=oe(e=>({hidden:e.data.hidden})),{onRender:n,enabled:r}=ne(e=>({onRender:e.options.onRender,enabled:e.options.enabled}));return t&&r?null:F.createElement(n,{render:e||F.createElement(ie,null)})},ce=({id:e,render:t})=>F.createElement(Y,{id:e},F.createElement(le,{render:t})),pe={is:"div",canvas:false,custom:{},hidden:false},ue={is:"type",canvas:"isCanvas"};function he({id:e,children:t,...n}){const{is:r}={...pe,...n},{query:o,actions:a}=ne(),{id:i,inNodeContext:l}=oe(),[c,p]=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useState(null);return qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.useEffectOnce(()=>{invariant(!!e);const s=o.node(i).get();if(l){let d;const l=s?.data?.linkedNodes[e]?o.node(s.data.linkedNodes[e]).get():null;if(l&&l.data.type===r)d=l.id;else {const r=F.createElement(he,n,t),s=o.parseReactElement(r).toNodeTree();d=s.rootNodeId,a.history.ignore().addLinkedNodeFromTree(s,i,e);}p(d);}}),c?F.createElement(ce,{id:c}):null}const ge=()=>qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning("<Canvas />",{suggest:"<Element canvas={true} />"});function Canvas({...e}){return qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useEffect(()=>ge(),[]),F.createElement(he,{...e,canvas:true})}const me=()=>{const{timestamp:e,enabled:t}=ne(e=>({timestamp:e.nodes[qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE]&&e.nodes[qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE]._hydrationTimestamp,enabled:e.options.enabled}));return e?F.createElement(ce,{id:qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE,key:t?e:void 0}):null},fe=({children:e,json:t,data:n})=>{const{actions:r,query:d}=ne();t&&qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning("<Frame json={...} />",{suggest:"<Frame data={...} />"});const i=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useRef(false);return qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.useEffectOnce(()=>{if(!i.current){const o=n||t;if(o)r.history.ignore().deserialize(o);else if(e){const t=F.Children.only(e),n=d.parseReactElement(t).toNodeTree((e,n)=>(n===t&&(e.id=qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE),e));r.history.ignore().addNodeTree(n);}i.current=true;}}),F.createElement(me,null)};var ve;!function(e){e[e.Any=0]="Any",e[e.Id=1]="Id",e[e.Obj=2]="Obj";}(ve||(ve={}));const ye=e=>{const{addLinkedNodeFromTree:t,setDOM:n,setNodeEvent:r,replaceNodes:o,reset:s,...d}=e;return d};function Ne(e){const{connectors:t,actions:n,query:r,store:o,...s}=ne(e),d=ye(n);return {connectors:t,actions:qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useMemo(()=>({...d,history:{...d.history,ignore:(...e)=>ye(d.history.ignore(...e)),throttle:(...e)=>ye(d.history.throttle(...e))}}),[d]),query:r,store:o,...s}}function Ee(e){return t=>n=>{const r=e?Ne(e):Ne();return F.createElement(t,{...r,...n})}}function be(e){return function(t){return n=>{const r=de(e);return F.createElement(t,{...r,...n})}}}const Oe=e=>Object.fromEntries?Object.fromEntries(e):e.reduce((e,t)=>{let[n,r]=t;return U(U({},e),{},{[n]:r})},{}),Te=(e,t,n)=>{const r=Array.isArray(t)?t:[t],o=U({existOnly:false,idOnly:false},n||{}),s=r.filter(e=>!!e).map(t=>"string"==typeof t?{node:e[t],exists:!!e[t]}:"object"!=typeof t||o.idOnly?{node:null,exists:false}:{node:t,exists:!!e[t.id]});return o.existOnly&&invariant(0===s.filter(e=>!e.exists).length),s},we=["history"],Ce=(e,t)=>{const n=(t,n,o)=>{const s=(n,r)=>{const o=t.nodes[n];"string"!=typeof o.data.type&&invariant(e.options.resolver[o.data.name],qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_NOT_IN_RESOLVER.replace("%node_type%",`${o.data.type.name}`)),e.nodes[n]=U(U({},o),{},{data:U(U({},o.data),{},{parent:r})}),o.data.nodes.length>0&&(delete e.nodes[n].data.props.children,o.data.nodes.forEach(e=>s(e,o.id))),Object.values(o.data.linkedNodes).forEach(e=>s(e,o.id));};if(s(t.rootNodeId,n),!n&&t.rootNodeId===qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE)return;const d=r(n);if("child"===o.type){const e=o.index;return void(null!=e?d.data.nodes.splice(e,0,t.rootNodeId):d.data.nodes.push(t.rootNodeId))}d.data.linkedNodes[o.id]=t.rootNodeId;},r=t=>{invariant(t);const n=e.nodes[t];return invariant(n),n},s=t=>{const n=e.nodes[t],r=e.nodes[n.data.parent];if(n.data.nodes&&[...n.data.nodes].forEach(e=>s(e)),n.data.linkedNodes&&Object.values(n.data.linkedNodes).map(e=>s(e)),r.data.nodes.includes(t)){const e=r.data.nodes;e.splice(e.indexOf(t),1);}else {const e=Object.keys(r.data.linkedNodes).find(e=>r.data.linkedNodes[e]===e);e&&delete r.data.linkedNodes[e];}((e,t)=>{Object.keys(e.events).forEach(n=>{const r=e.events[n];r&&r.has&&r.has(t)&&(e.events[n]=new Set(Array.from(r).filter(e=>t!==e)));});})(e,t),delete e.nodes[t];};return {addLinkedNodeFromTree(e,t,o){const d=r(t).data.linkedNodes[o];d&&s(d),n(e,t,{type:"linked",id:o});},add(e,t,r){let s=[e];Array.isArray(e)&&(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning("actions.add(node: Node[])",{suggest:"actions.add(node: Node)"}),s=e),s.forEach(e=>{n({nodes:{[e.id]:e},rootNodeId:e.id},t,{type:"child",index:r});});},addNodeTree(e,t,r){n(e,t,{type:"child",index:r});},delete(n){Te(e.nodes,n,{existOnly:true,idOnly:true}).forEach(e=>{let{node:n}=e;invariant(!t.node(n.id).isTopLevelNode()),s(n.id);});},deserialize(e){const n="string"==typeof e?JSON.parse(e):e,r=Object.keys(n).map(e=>{let r=e;return e===qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.DEPRECATED_ROOT_NODE&&(r=qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE),[r,t.parseSerializedNode(n[e]).toNode(e=>e.id=r)]});this.replaceNodes(Oe(r));},patch(n){const r="string"==typeof n?JSON.parse(n):n;let o=Object.keys(r).map(e=>{let n=e;return e===qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.DEPRECATED_ROOT_NODE&&(n=qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE),[n,t.parseSerializedNode(r[e]).toNode(e=>e.id=n)]});e.options.enabled||(o=o.map(t=>{const n=t[0],r=t[1];return n===qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE?t:e.nodes[n]&&lodashExports.isEqual(e.nodes[n].data.props,r.data.props)?[n,U(U({},r),{},{_hydrationTimestamp:e.nodes[n]._hydrationTimestamp})]:t})),this.replaceNodes(Oe(o));},move(n,r,o){const s=Te(e.nodes,n,{existOnly:true}),d=e.nodes[r],a=new Set;s.forEach((n,s)=>{let{node:i}=n;const l=i.id,c=i.data.parent;t.node(r).isDroppable([l],e=>{throw new Error(e)}),e.options.onBeforeMoveEnd(i,d,e.nodes[c]);const p=e.nodes[c].data.nodes;a.add(p);const u=p.indexOf(l);p[u]="$$",d.data.nodes.splice(o+s,0,l),e.nodes[l].data.parent=r;}),a.forEach(e=>{const t=e.length;[...e].reverse().forEach((n,r)=>{"$$"===n&&e.splice(t-1-r,1);});});},replaceNodes(t){this.clearEvents(),e.nodes=t;},clearEvents(){this.setNodeEvent("selected",null),this.setNodeEvent("hovered",null),this.setNodeEvent("dragged",null),this.setIndicator(null);},reset(){this.clearEvents(),this.replaceNodes({});},setOptions(t){t(e.options);},setNodeEvent(t,n){if(e.events[t].forEach(n=>{e.nodes[n]&&(e.nodes[n].events[t]=false);}),e.events[t]=new Set,!n)return;const r=Te(e.nodes,n,{idOnly:true,existOnly:true}),o=new Set(r.map(e=>{let{node:t}=e;return t.id}));o.forEach(n=>{e.nodes[n].events[t]=true;}),e.events[t]=o;},setCustom(t,n){Te(e.nodes,t,{idOnly:true,existOnly:true}).forEach(t=>{let{node:r}=t;return n(e.nodes[r.id].data.custom)});},setDOM(t,n){e.nodes[t]&&(e.nodes[t].dom=n);},setIndicator(t){t&&(!t.placement.parent.dom||t.placement.currentNode&&!t.placement.currentNode.dom)||(e.indicator=t);},setHidden(t,n){e.nodes[t].data.hidden=n;},setProp(t,n){Te(e.nodes,t,{idOnly:true,existOnly:true}).forEach(t=>{let{node:r}=t;return n(e.nodes[r.id].data.props)});},selectNode(t){if(t){const n=Te(e.nodes,t,{idOnly:true,existOnly:true});this.setNodeEvent("selected",n.map(e=>{let{node:t}=e;return t.id}));}else this.setNodeEvent("selected",null);this.setNodeEvent("hovered",null);}}};let ke=null;const De=e=>e.name||e.displayName,Se=(e,t)=>{if("string"==typeof t)return t;const n=((e,t)=>{const n=(e=>{if(ke&&ke.resolver===e)return ke.reversed;ke={resolver:e,reversed:new Map};for(const[t,n]of Object.entries(e))ke.reversed.set(n,t);return ke.reversed})(e).get(t);return void 0!==n?n:null})(e,t);return invariant(n,qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_NOT_IN_RESOLVER.replace("%node_type%",De(t))),n},xe=(e,t)=>{let{type:n,isCanvas:r,props:o}=e;o=Object.keys(o).reduce((e,n)=>{const r=o[n];return null==r||"function"==typeof r||(e[n]="children"===n&&"string"!=typeof r?qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.Children.map(r,e=>"string"==typeof e?e:xe(e,t)):"function"==typeof r.type?xe(r,t):r),e},{});const s="string"==typeof n&&"Fallback"===n||"string"!=typeof n&&"Fallback"===n.name?{resolvedName:o.componentName}:((e,t)=>"string"==typeof e?e:{resolvedName:Se(t,e)})(n,t);return {type:s,isCanvas:!!r,props:o}},Ie=(e,t)=>{const{type:n,props:r,isCanvas:o,name:s,...d}=e;return {...xe({type:n,isCanvas:o,props:r},t),...d}};function je(e,t){invariant("string"==typeof t);const n=e.nodes[t],r=t=>je(e,t);return {isCanvas:()=>!!n.data.isCanvas,isRoot:()=>n.id===qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE,isLinkedNode:()=>n.data.parent&&r(n.data.parent).linkedNodes().includes(n.id),isTopLevelNode(){return this.isRoot()||this.isLinkedNode()},isDeletable(){return !this.isTopLevelNode()},isParentOfTopLevelNodes:()=>n.data.linkedNodes&&Object.keys(n.data.linkedNodes).length>0,isParentOfTopLevelCanvas(){return qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning("query.node(id).isParentOfTopLevelCanvas",{suggest:"query.node(id).isParentOfTopLevelNodes"}),this.isParentOfTopLevelNodes()},isSelected:()=>e.events.selected.has(t),isHovered:()=>e.events.hovered.has(t),isDragged:()=>e.events.dragged.has(t),get:()=>n,ancestors(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function n(r){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const d=e.nodes[r];return d?(o.push(r),d.data.parent?((t||!t&&0===s)&&(o=n(d.data.parent,o,s+1)),o):o):o}(n.data.parent)},descendants(){let n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=arguments.length>1?arguments[1]:void 0;return function t(s){let d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return (n||!n&&0===a)&&e.nodes[s]?("childNodes"!==o&&r(s).linkedNodes().forEach(e=>{d.push(e),d=t(e,d,a+1);}),"linkedNodes"!==o&&r(s).childNodes().forEach(e=>{d.push(e),d=t(e,d,a+1);}),d):d}(t)},linkedNodes:()=>Object.values(n.data.linkedNodes||{}),childNodes:()=>n.data.nodes||[],isDraggable(t){try{const t=n;return invariant(!this.isTopLevelNode(),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_TOP_LEVEL_NODE),invariant(je(e,t.data.parent).isCanvas(),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_NONCANVAS_CHILD),invariant(t.rules.canDrag(t,r),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_CANNOT_DRAG),!0}catch(e){return t&&t(e),false}},isDroppable(t,o){const s=Te(e.nodes,t),d=n;try{invariant(this.isCanvas(),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_TO_NONCANVAS_PARENT),invariant(d.rules.canMoveIn(s.map(e=>e.node),d,r),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_INCOMING_PARENT);const t={};return s.forEach(n=>{let{node:o,exists:s}=n;if(invariant(o.rules.canDrop(d,o,r),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_CANNOT_DROP),!s)return;invariant(!r(o.id).isTopLevelNode(),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_TOP_LEVEL_NODE);const a=r(o.id).descendants(!0);invariant(!a.includes(d.id)&&d.id!==o.id,qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_TO_DESCENDANT);const i=o.data.parent&&e.nodes[o.data.parent];invariant(i.data.isCanvas,qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_NONCANVAS_CHILD),invariant(i||!i&&!e.nodes[o.id],qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_DUPLICATE_NODEID),i.id!==d.id&&(t[i.id]||(t[i.id]=[]),t[i.id].push(o));}),Object.keys(t).forEach(n=>{const o=e.nodes[n];invariant(o.rules.canMoveOut(t[n],o,r),qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_MOVE_OUTGOING_PARENT);}),!0}catch(e){return o&&o(e),false}},toSerializedNode:()=>Ie(n.data,e.options.resolver),toNodeTree(e){const n=[t,...this.descendants(true,e)].reduce((e,t)=>(e[t]=r(t).get(),e),{});return {rootNodeId:t,nodes:n}},decendants(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning("query.node(id).decendants",{suggest:"query.node(id).descendants"}),this.descendants(e)},isTopLevelCanvas(){return !this.isRoot()&&!n.data.parent}}}function Le(e,t,n,r){let o={parent:e,index:0,where:"before"},s=0,d=0,a=0,i=0,l=0,c=0,p=0;for(let e=0,u=t.length;e<u;e++){const u=t[e];if(a=u.left+u.outerWidth,p=u.top+u.outerHeight,l=u.left+u.outerWidth/2,c=u.top+u.outerHeight/2,!(d&&u.left>d||i&&c>=i||s&&a<s||0===a&&0===p))if(o.index=e,u.inFlow){if(r<c){o.where="before";break}o.where="after";}else r<p&&(i=p),n<l?(d=l,o.where="before"):(s=l,o.where="after");}return o}const Pe=e=>"string"==typeof e?e:e.name;function qe(e,t){let n=e.data.type;const r={id:e.id||qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getRandomId(),_hydrationTimestamp:qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getRandomId(),data:U({type:n,name:Pe(n),displayName:Pe(n),props:{},custom:{},parent:null,isCanvas:false,hidden:false,nodes:[],linkedNodes:{}},e.data),info:{},related:{},events:{selected:false,dragged:false,hovered:false},rules:{canDrag:()=>true,canDrop:()=>true,canMoveIn:()=>true,canMoveOut:()=>true},dom:null};if(r.data.type===he||r.data.type===Canvas){const e=U(U({},pe),r.data.props);r.data.props=Object.keys(r.data.props).reduce((t,n)=>(Object.keys(pe).includes(n)?r.data[ue[n]||n]=e[n]:t[n]=r.data.props[n],t),{}),n=r.data.type,r.data.name=Pe(n),r.data.displayName=Pe(n),r.data.type===Canvas&&(r.data.isCanvas=true,ge());}t&&t(r);const o=n.craft;if(o){if(r.data.displayName=o.displayName||o.name||r.data.displayName,r.data.props=U(U({},o.props||o.defaultProps||{}),r.data.props),r.data.custom=U(U({},o.custom||{}),r.data.custom),null!=o.isCanvas&&(r.data.isCanvas=o.isCanvas),o.rules&&Object.keys(o.rules).forEach(e=>{["canDrag","canDrop","canMoveIn","canMoveOut"].includes(e)&&(r.rules[e]=o.rules[e]);}),o.related){const e={id:r.id,related:true};Object.keys(o.related).forEach(t=>{r.related[t]=n=>F.createElement(Y,e,F.createElement(o.related[t],n));});}o.info&&(r.info=o.info);}return r}const Re=(e,t,n,r)=>{let{type:o,props:s}=e;const d=((e,t)=>"object"==typeof e&&e.resolvedName?"Canvas"===e.resolvedName?Canvas:t[e.resolvedName]:"string"==typeof e?e:null)(o,t)||r;if(!d)return;s=Object.keys(s).reduce((e,n)=>{const a=s[n];return d===r&&(e.componentName=s.componentName||o.resolvedName),e[n]=null==a?null:"object"==typeof a&&a.resolvedName?Re(a,t):"children"===n&&Array.isArray(a)?a.map(e=>"string"==typeof e?e:Re(e,t)):a,e},{});const a={...F.createElement(d,{...s})};return {...a,name:Se(t,a.type)}},_e=(e,t)=>{if(t.length<1)return {[e.id]:e};const n=t.map(({rootNodeId:e})=>e),r={...e,data:{...e.data,nodes:n}};return t.reduce((t,n)=>{const r=n.nodes[n.rootNodeId];return {...t,...n.nodes,[r.id]:{...r,data:{...r.data,parent:e.id}}}},{[e.id]:r})};function Ae(e){const t=e&&e.options,n=()=>Ae(e);return {getDropPlaceholder:(t,r,o,s=t=>e.nodes[t.id].dom)=>{const d=e.nodes[r],a=n().node(d.id).isCanvas()?d:e.nodes[d.data.parent];if(!a)return;const i=a.data.nodes||[],l=Le(a,i?i.reduce((t,n)=>{const r=s(e.nodes[n]);if(r){const e={id:n,...qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getDOMInfo(r)};t.push(e);}return t},[]):[],o.x,o.y),c=i.length&&e.nodes[i[l.index]],p={placement:{...l,currentNode:c},error:null};return Te(e.nodes,t).forEach(({node:e,exists:t})=>{t&&n().node(e.id).isDraggable(e=>p.error=e);}),n().node(a.id).isDroppable(t,e=>p.error=e),p},getOptions:()=>t,getNodes:()=>e.nodes,node:t=>je(e,t),getSerializedNodes(){const t=Object.keys(e.nodes).map(e=>[e,this.node(e).toSerializedNode()]);return Oe(t)},getEvent:t=>function(e,t){const n=e.events[t];return {contains:e=>n.has(e),isEmpty(){return 0===this.all().length},first(){return this.all()[0]},last(){const e=this.all();return e[e.length-1]},all:()=>Array.from(n),size(){return this.all().length},at(e){return this.all()[e]},raw:()=>n}}(e,t),serialize(){return JSON.stringify(this.getSerializedNodes())},parseReactElement:t=>({toNodeTree(r){let o=function(e,t){let n=e;return "string"==typeof n&&(n=F.createElement(qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.Fragment,{},n)),qe({data:{type:n.type,props:{...n.props}}},e=>{t&&t(e,n);})}(t,(t,n)=>{const o=Se(e.options.resolver,t.data.type);t.data.displayName=t.data.displayName||o,t.data.name=o,r&&r(t,n);}),s=[];return t.props&&t.props.children&&(s=F.Children.toArray(t.props.children).reduce((e,t)=>(F.isValidElement(t)&&e.push(n().parseReactElement(t).toNodeTree(r)),e),[])),((e,t)=>({rootNodeId:e.id,nodes:_e(e,t)}))(o,s)}}),parseSerializedNode:t=>({toNode(r){const s=((e,t,n)=>{const{type:r,props:o,...s}=e;invariant(void 0!==r&&"string"==typeof r||void 0!==r&&void 0!==r.resolvedName,qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ERROR_DESERIALIZE_COMPONENT_NOT_IN_RESOLVER.replace("%displayName%",e.displayName).replace("%availableComponents%",Object.keys(t).join(", ")));const{type:d,name:a,props:i}=Re(e,t,void 0,n),{parent:l,custom:c,displayName:p,isCanvas:u,nodes:h,hidden:g}=s;return {type:d,name:a,displayName:p||a,props:i,custom:c||{},isCanvas:!!u,hidden:!!g,parent:l,linkedNodes:s.linkedNodes||s._childCanvas||{},nodes:h||[]}})(t,e.options.resolver,e.options.fallback);invariant(s.type);const d="string"==typeof r&&r;return d&&qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning("query.parseSerializedNode(...).toNode(id)",{suggest:"query.parseSerializedNode(...).toNode(node => node.id = id)"}),n().parseFreshNode({...d?{id:d}:{},data:s}).toNode(!d&&r)}}),parseFreshNode:t=>({toNode:n=>qe(t,t=>{t.data.parent===qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.DEPRECATED_ROOT_NODE&&(t.data.parent=qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE);const r=Se(e.options.resolver,t.data.type);invariant(null!==r),t.data.displayName=t.data.displayName||r,t.data.name=r,n&&n(t);})}),createNode(e,t){qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.deprecationWarning(`query.createNode(${e})`,{suggest:`query.parseReactElement(${e}).toNodeTree()`});const n=this.parseReactElement(e).toNodeTree(),r=n.nodes[n.rootNodeId];return t?(t.id&&(r.id=t.id),t.data&&(r.data={...r.data,...t.data}),r):r},getState:()=>e}}class Fe extends qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.EventHandlers{handlers(){return {connect:(e,t)=>{},select:(e,t)=>{},hover:(e,t)=>{},drag:(e,t)=>{},drop:(e,t)=>{},create:(e,t,n)=>{}}}}class ze extends qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.DerivedEventHandlers{}const Me=e=>{e.preventDefault();};class $e{constructor(e,t){G(this,"store",void 0),G(this,"dragTarget",void 0),G(this,"currentDropTargetId",void 0),G(this,"currentDropTargetCanvasAncestorId",void 0),G(this,"currentIndicator",null),G(this,"currentTargetId",void 0),G(this,"currentTargetChildDimensions",void 0),G(this,"dragError",void 0),G(this,"draggedNodes",void 0),G(this,"onScrollListener",void 0),this.store=e,this.dragTarget=t,this.currentDropTargetId=null,this.currentDropTargetCanvasAncestorId=null,this.currentTargetId=null,this.currentTargetChildDimensions=null,this.currentIndicator=null,this.dragError=null,this.draggedNodes=this.getDraggedNodes(),this.validateDraggedNodes(),this.onScrollListener=this.onScroll.bind(this),window.addEventListener("scroll",this.onScrollListener,true),window.addEventListener("dragover",Me,false);}cleanup(){window.removeEventListener("scroll",this.onScrollListener,true),window.removeEventListener("dragover",Me,false);}onScroll(e){const t=e.target,n=this.store.query.node(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE).get();t instanceof Element&&n&&n.dom&&t.contains(n.dom)&&(this.currentTargetChildDimensions=null);}getDraggedNodes(){return Te(this.store.query.getNodes(),"new"===this.dragTarget.type?this.dragTarget.tree.nodes[this.dragTarget.tree.rootNodeId]:this.dragTarget.nodes)}validateDraggedNodes(){"new"!==this.dragTarget.type&&this.draggedNodes.forEach(e=>{let{node:t,exists:n}=e;n&&this.store.query.node(t.id).isDraggable(e=>{this.dragError=e;});});}isNearBorders(e,t,n){const{top:r,bottom:o,left:s,right:d}=e;return r+$e.BORDER_OFFSET>n||o-$e.BORDER_OFFSET<n||s+$e.BORDER_OFFSET>t||d-$e.BORDER_OFFSET<t}isDiff(e){return !this.currentIndicator||this.currentIndicator.placement.parent.id!==e.parent.id||this.currentIndicator.placement.index!==e.index||this.currentIndicator.placement.where!==e.where}getChildDimensions(e){const t=this.currentTargetChildDimensions;return this.currentTargetId===e.id&&t?t:e.data.nodes.reduce((e,t)=>{const n=this.store.query.node(t).get().dom;return n&&e.push(U({id:t},qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getDOMInfo(n))),e},[])}getCanvasAncestor(e){if(e===this.currentDropTargetId&&this.currentDropTargetCanvasAncestorId){const e=this.store.query.node(this.currentDropTargetCanvasAncestorId).get();if(e)return e}const t=e=>{const n=this.store.query.node(e).get();return n&&n.data.isCanvas?n:n.data.parent?t(n.data.parent):null};return t(e)}computeIndicator(e,t,n){let r=this.getCanvasAncestor(e);if(!r)return;if(this.currentDropTargetId=e,this.currentDropTargetCanvasAncestorId=r.id,r.data.parent&&this.isNearBorders(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getDOMInfo(r.dom),t,n)&&!this.store.query.node(r.id).isLinkedNode()&&(r=this.store.query.node(r.data.parent).get()),!r)return;this.currentTargetChildDimensions=this.getChildDimensions(r),this.currentTargetId=r.id;const o=Le(r,this.currentTargetChildDimensions,t,n);if(!this.isDiff(o))return;let s=this.dragError;s||this.store.query.node(r.id).isDroppable(this.draggedNodes.map(e=>e.node),e=>{s=e;});const d=r.data.nodes[o.index],a=d&&this.store.query.node(d).get();return this.currentIndicator={placement:U(U({},o),{},{currentNode:a}),error:s},this.currentIndicator}getIndicator(){return this.currentIndicator}}G($e,"BORDER_OFFSET",2);const He=function(e,t){if(1===t.length||arguments.length>2&&void 0!==arguments[2]&&arguments[2]){const{width:n,height:r}=t[0].getBoundingClientRect(),o=t[0].cloneNode(true);return o.style.position="absolute",o.style.left="-100%",o.style.top="-100%",o.style.width=`${n}px`,o.style.height=`${r}px`,o.style.pointerEvents="none",o.classList.add("drag-shadow"),document.body.appendChild(o),e.dataTransfer.setDragImage(o,0,0),o}const n=document.createElement("div");return n.style.position="absolute",n.style.left="-100%",n.style.top="-100%",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.classList.add("drag-shadow-container"),t.forEach(e=>{const{width:t,height:r,top:o,left:s}=e.getBoundingClientRect(),d=e.cloneNode(true);d.style.position="absolute",d.style.left=`${s}px`,d.style.top=`${o}px`,d.style.width=`${t}px`,d.style.height=`${r}px`,d.classList.add("drag-shadow"),n.appendChild(d);}),document.body.appendChild(n),e.dataTransfer.setDragImage(n,e.clientX,e.clientY),n};class Be extends Fe{constructor(){super(...arguments),G(this,"draggedElementShadow",void 0),G(this,"dragTarget",void 0),G(this,"positioner",null),G(this,"currentSelectedElementIds",[]),G(this,"dropEnabled",false);}onDisable(){this.options.store.actions.clearEvents();}handlers(){const e=this.options.store;return {connect:(t,n)=>(e.actions.setDOM(n,t),this.reflect(e=>{e.select(t,n),e.hover(t,n),e.drop(t,n);})),select:(t,n)=>{const r=this.addCraftEventListener(t,"mousedown",t=>{t.craft.stopPropagation();let r=[];if(n){const{query:o}=e,s=o.getEvent("selected").all();(this.options.isMultiSelectEnabled(t)||s.includes(n))&&(r=s.filter(e=>{const t=o.node(e).descendants(true),r=o.node(e).ancestors(true);return !t.includes(n)&&!r.includes(n)})),r.includes(n)||r.push(n);}e.actions.setNodeEvent("selected",r);}),o=this.addCraftEventListener(t,"click",t=>{t.craft.stopPropagation();const{query:r}=e,o=r.getEvent("selected").all(),s=this.options.isMultiSelectEnabled(t),d=this.currentSelectedElementIds.includes(n);let a=[...o];s&&d?(a.splice(a.indexOf(n),1),e.actions.setNodeEvent("selected",a)):!s&&o.length>1&&(a=[n],e.actions.setNodeEvent("selected",a)),this.currentSelectedElementIds=a;});return ()=>{r(),o();}},hover:(t,n)=>{const r=this.addCraftEventListener(t,"mouseover",t=>{t.craft.stopPropagation(),e.actions.setNodeEvent("hovered",n);});return this.options.removeHoverOnMouseleave&&this.addCraftEventListener(t,"mouseleave",t=>{t.craft.stopPropagation(),e.actions.setNodeEvent("hovered",null);}),()=>{r();}},drop:(t,n)=>{const r=this.addCraftEventListener(t,"dragover",t=>{t.craft.stopPropagation(),t.preventDefault(),this.dropEnabled=true;const r=e.query.node(n).get();if("Dialog"===r.data.name)return this.dropEnabled=false,e.actions.setIndicator(null),void e.actions.setNodeEvent("dragged",null);if(t.dataTransfer?.types?.includes("datasource")?r.data.isCanvas?this.createDatasourcePositioner():(e.actions.setIndicator(null),this.dragTarget=null,this.positioner&&(this.positioner.cleanup(),this.positioner=null)):t.dataTransfer?.types?.includes("cssclass")&&this.positioner&&(this.positioner.cleanup(),this.dragTarget=null,this.positioner=null),!this.positioner)return;const o=this.positioner.computeIndicator(n,t.clientX,t.clientY);o&&e.actions.setIndicator(o);}),o=this.addCraftEventListener(t,"dragenter",e=>{e.craft.stopPropagation(),e.preventDefault();});return ()=>{o(),r();}},drag:(t,n)=>{if(!e.query.node(n).isDraggable())return ()=>{};t.setAttribute("draggable","true");const r=this.addCraftEventListener(t,"dragstart",t=>{t.craft.stopPropagation();const{query:r,actions:o}=e;let s=r.getEvent("selected").all();const d=this.options.isMultiSelectEnabled(t);this.currentSelectedElementIds.includes(n)||(s=d?[...s,n]:[n],e.actions.setNodeEvent("selected",s)),o.setNodeEvent("dragged",s);const a=s.map(e=>r.node(e).get().dom);this.draggedElementShadow=He(t,a,Be.forceSingleDragShadow),this.dragTarget={type:"existing",nodes:s},this.positioner=new $e(this.options.store,this.dragTarget);}),o=this.addCraftEventListener(t,"dragend",t=>{t.craft.stopPropagation(),this.dropElement((t,n)=>{"new"!==t.type&&e.actions.move(t.nodes,n.placement.parent.id,n.placement.index+("after"===n.placement.where?1:0));});});return ()=>{t.setAttribute("draggable","false"),r(),o();}},create:(t,n,r)=>{t.setAttribute("draggable","true");const{query:o}=e,s=o.node(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE).get(),d=()=>{this.dropEnabled=false;},i=()=>{this.dropEnabled=true;};s?.dom?.addEventListener("dragleave",d),s?.dom?.addEventListener("dragenter",i);const l=this.addCraftEventListener(t,"dragstart",t=>{let r;if(t.craft.stopPropagation(),"function"==typeof n){const t=n();r=F.isValidElement(t)?e.query.parseReactElement(t).toNodeTree():t;}else r=e.query.parseReactElement(n).toNodeTree();this.draggedElementShadow=He(t,[t.currentTarget],Be.forceSingleDragShadow),this.dragTarget={type:"new",tree:r},this.positioner=new $e(this.options.store,this.dragTarget);}),c=this.addCraftEventListener(t,"dragend",t=>{t.craft.stopPropagation(),this.dropElement((t,n)=>{"existing"!==t.type&&this.dropEnabled&&(e.actions.addNodeTree(t.tree,n.placement.parent.id,n.placement.index+("after"===n.placement.where?1:0)),r&&W(r.onCreate)&&r.onCreate(t.tree));});});return ()=>{t.removeAttribute("draggable"),l(),c(),s?.dom?.removeEventListener("dragleave",d),s?.dom?.removeEventListener("dragenter",i);}}}}createDatasourcePositioner(){if(this.positioner)return;const e=this.options.store,t=F.createElement("div");this.dragTarget={type:"new",tree:e.query.parseReactElement(t).toNodeTree()},this.positioner=new $e(this.options.store,this.dragTarget);}dropElement(e){const t=this.options.store;if(!this.positioner)return;const n=this.draggedElementShadow,r=this.positioner.getIndicator();this.dragTarget&&r&&!r.error&&e(this.dragTarget,r),n&&(n.parentNode.removeChild(n),this.draggedElementShadow=null),this.dragTarget=null,t.actions.setIndicator(null),t.actions.setNodeEvent("dragged",null),this.positioner.cleanup(),this.positioner=null;}}function Je(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,o=0,s=0,d=0,a=0,i=e.where;return n?n.inFlow?(d=n.outerWidth,a=r,o="before"===i?n.top:n.bottom,s=n.left):(d=r,a=n.outerHeight,o=n.top,s="before"===i?n.left:n.left+n.outerWidth):t&&(o=t.top+t.padding.top,s=t.left+t.padding.left,d=t.outerWidth-t.padding.right-t.padding.left-t.margin.left-t.margin.right,a=r),{top:`${o}px`,left:`${s}px`,width:`${d}px`,height:`${a}px`}}G(Be,"forceSingleDragShadow",qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.isChromium()&&qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.isLinux());const We=()=>{const{indicator:e,indicatorOptions:t,enabled:n,nodes:r}=ne(e=>({indicator:e.indicator,indicatorOptions:e.options.indicator,enabled:e.options.enabled,nodes:e.nodes})),o=te();if(qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useEffect(()=>{o&&(n?o.enable():o.disable());},[n,o]),!e)return null;const s=function(){let t=1;for(;;){const n=e.placement.parent.data.nodes[e.placement.index-t];if(!r[n])return null;if(!r[n].dom.classList.contains("hidden"))return r[n];t++;}}();return F.createElement(qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.RenderIndicator,{className:t.className,style:{...Je(e.placement,qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getDOMInfo(e.placement.parent?.dom),e.placement.currentNode?.dom&&!e.placement.currentNode.dom.classList.contains("hidden")?qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getDOMInfo(e.placement.currentNode?.dom):s?qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.getDOMInfo(s?.dom):null,t.thickness),backgroundColor:e.error?t.error:t.success,transition:t.transition||"0.2s ease-in",...t.style??{}},parentDom:e.placement.parent.dom})},Ve=({children:e})=>{const t=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useContext(Z),n=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useMemo(()=>t.query.getOptions().handlers(t),[t]);return n?F.createElement(ee.Provider,{value:n},F.createElement(We,null),e):null},Xe={nodes:{},events:{dragged:new Set,selected:new Set,hovered:new Set},indicator:null,options:{onNodesChange:()=>null,onRender:({render:e})=>e,onBeforeMoveEnd:()=>null,resolver:{},fallback:void 0,enabled:true,indicator:{error:"red",success:"rgb(98, 196, 98)"},handlers:e=>new Be({store:e,removeHoverOnMouseleave:false,isMultiSelectEnabled:e=>!!e.metaKey}),normalizeNodes:()=>{}}},Ye={methods:(e,t)=>U(U({},Ce(e,t)),{},{setState(t){const n=Q(this,we);t(e,n);}}),ignoreHistoryForActions:["setDOM","setNodeEvent","selectNode","clearEvents","setOptions","setIndicator"],normalizeHistory:e=>{Object.keys(e.events).forEach(t=>{Array.from(e.events[t]||[]).forEach(n=>{e.nodes[n]||e.events[t].delete(n);});}),Object.keys(e.nodes).forEach(t=>{const n=e.nodes[t];Object.keys(n.events).forEach(t=>{n.events[t]&&e.events[t]&&!e.events[t].has(n.id)&&(n.events[t]=false);});});}},Ge=(e,t)=>qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.useMethods(Ye,{...Xe,options:{...Xe.options,...e}},Ae,t),Ke=({children:e,...t})=>{ void 0!==t.resolver&&invariant("object"==typeof t.resolver&&!Array.isArray(t.resolver)&&null!==t.resolver);const n=qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useRef(t),r=Ge(n.current,(e,t,n,r,o)=>{if(!n)return;const{patches:s,...d}=n;for(let n=0;n<s.length;n++){const{path:a}=s[n],i=a.length>2&&"nodes"===a[0]&&"data"===a[2];if([qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.HISTORY_ACTIONS.IGNORE,qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.HISTORY_ACTIONS.THROTTLE].includes(d.type)&&d.params&&(d.type=d.params[0]),["setState","deserialize","patch"].includes(d.type)||i){o(n=>{e.options.normalizeNodes&&e.options.normalizeNodes(n,t,d,r);});break}}});return qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useEffect(()=>{r&&void 0!==t.enabled&&r.query.getOptions().enabled!==t.enabled&&r.actions.setOptions(e=>{e.enabled=t.enabled;});},[r,t.enabled]),qodly_4b73e4fdf8fb53606fa0__loadShare__react__loadShare__.useEffect(()=>{r.subscribe(e=>({json:r.query.serialize()}),()=>{r.query.getOptions().onNodesChange(r.query);});},[r]),r?F.createElement(Z.Provider,{value:r},F.createElement(Ve,null,e)):null},Ue=["events","data"],Qe=["nodes"],Ze=["nodes"],et=["_hydrationTimestamp","rules"],tt=["_hydrationTimestamp","rules"],nt=e=>{const{events:t,data:{nodes:n,linkedNodes:r}}=e,o=Q(e,Ue),s=qe(V(e));return {node:e=U(U(U({},s),o),{},{events:U(U({},s.events),t),dom:e.dom||s.dom}),childNodes:n,linkedNodes:r}},rt=(e,t)=>{const{nodes:n}=t,r=Q(t,Qe),{nodes:o}=e,s=Q(e,Ze);expect(s).toEqual(r);const d=Object.keys(n).reduce((e,t)=>{const r=Q(n[t],et);return e[t]=r,e},{}),a=Object.keys(o).reduce((e,t)=>{const n=Q(o[t],tt);return e[t]=n,e},{});expect(a).toEqual(d);},ot=e=>{const t={},n=e=>{const{node:r,childNodes:o,linkedNodes:s}=nt(e);t[r.id]=r,o&&o.forEach((e,o)=>{const{node:s,childNodes:d,linkedNodes:a}=nt(e);s.data.parent=r.id,t[s.id]=s,r.data.nodes[o]=s.id,n(U(U({},s),{},{data:U(U({},s.data),{},{nodes:d||[],linkedNodes:a||{}})}));}),s&&Object.keys(s).forEach(e=>{const{node:o,childNodes:d,linkedNodes:a}=nt(s[e]);r.data.linkedNodes[e]=o.id,o.data.parent=r.id,t[o.id]=o,n(U(U({},o),{},{data:U(U({},o.data),{},{nodes:d||[],linkedNodes:a||{}})}));});};return n(e),t},st=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{nodes:t,events:n}=e;return U(U(U({},Xe),e),{},{nodes:t?ot(t):{},events:U(U({},Xe.events),n||{})})};

const ROOT_NODE = qodly_4b73e4fdf8fb53606fa0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__.ROOT_NODE;
export { Ye as ActionMethodsWithConfig, Canvas, Fe as CoreEventHandlers, Be as DefaultEventHandlers, ze as DerivedCoreEventHandlers, Ke as Editor, he as Element, Ve as Events, fe as Frame, ce as NodeElement, je as NodeHelpers, Y as NodeProvider, ve as NodeSelectorType, $e as Positioner, Ae as QueryMethods, ROOT_NODE, Ee as connectEditor, be as connectNode, He as createShadow, ot as createTestNodes, st as createTestState, pe as defaultElementProps, ge as deprecateCanvasComponent, Xe as editorInitialState, ue as elementPropToNodeData, rt as expectEditorState, De as getComponentName, Se as resolveComponent, Ie as serializeNode, Ne as useEditor, Ge as useEditorStore, te as useEventHandler, de as useNode };
