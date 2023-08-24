(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@popperjs/core"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["@popperjs/core", ], factory);
	else if(typeof exports === 'object')
		exports["sisdai-componentes"] = factory(require("@popperjs/core"), require("vue"));
	else
		root["sisdai-componentes"] = factory(root["@popperjs/core"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__5798__, __WEBPACK_EXTERNAL_MODULE__7203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9662:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(614);
var tryToString = __webpack_require__(6330);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 9670:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(111);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 1318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(5656);
var toAbsoluteIndex = __webpack_require__(1400);
var lengthOfArrayLike = __webpack_require__(6244);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 3658:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var isArray = __webpack_require__(3157);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4326:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 9920:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(2597);
var ownKeys = __webpack_require__(3887);
var getOwnPropertyDescriptorModule = __webpack_require__(1236);
var definePropertyModule = __webpack_require__(3070);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 8880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var definePropertyModule = __webpack_require__(3070);
var createPropertyDescriptor = __webpack_require__(9114);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 9114:
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 8052:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(614);
var definePropertyModule = __webpack_require__(3070);
var makeBuiltIn = __webpack_require__(6339);
var defineGlobalProperty = __webpack_require__(3072);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 3072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 9781:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(7293);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4154:
/***/ (function(module) {


var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ 317:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 7207:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 8113:
/***/ (function(module) {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var userAgent = __webpack_require__(8113);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 748:
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 2109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var getOwnPropertyDescriptor = (__webpack_require__(1236).f);
var createNonEnumerableProperty = __webpack_require__(8880);
var defineBuiltIn = __webpack_require__(8052);
var defineGlobalProperty = __webpack_require__(3072);
var copyConstructorProperties = __webpack_require__(9920);
var isForced = __webpack_require__(4705);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 7293:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 4374:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(7293);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 6916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(4374);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 6530:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var hasOwn = __webpack_require__(2597);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(4374);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 5005:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 8173:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(9662);
var isNullOrUndefined = __webpack_require__(8554);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 7854:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || this || Function('return this')();


/***/ }),

/***/ 2597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var toObject = __webpack_require__(7908);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 3501:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 4664:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);
var createElement = __webpack_require__(317);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 8361:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var classof = __webpack_require__(4326);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 2788:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var isCallable = __webpack_require__(614);
var store = __webpack_require__(5465);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 9909:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(4811);
var global = __webpack_require__(7854);
var isObject = __webpack_require__(111);
var createNonEnumerableProperty = __webpack_require__(8880);
var hasOwn = __webpack_require__(2597);
var shared = __webpack_require__(5465);
var sharedKey = __webpack_require__(6200);
var hiddenKeys = __webpack_require__(3501);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 3157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(4326);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 614:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 4705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 8554:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 111:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(614);
var $documentAll = __webpack_require__(4154);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 1913:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 2190:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(5005);
var isCallable = __webpack_require__(614);
var isPrototypeOf = __webpack_require__(7976);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(7466);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 6339:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var fails = __webpack_require__(7293);
var isCallable = __webpack_require__(614);
var hasOwn = __webpack_require__(2597);
var DESCRIPTORS = __webpack_require__(9781);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(6530).CONFIGURABLE);
var inspectSource = __webpack_require__(2788);
var InternalStateModule = __webpack_require__(9909);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 4758:
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var IE8_DOM_DEFINE = __webpack_require__(4664);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var anObject = __webpack_require__(9670);
var toPropertyKey = __webpack_require__(4948);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 1236:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var call = __webpack_require__(6916);
var propertyIsEnumerableModule = __webpack_require__(5296);
var createPropertyDescriptor = __webpack_require__(9114);
var toIndexedObject = __webpack_require__(5656);
var toPropertyKey = __webpack_require__(4948);
var hasOwn = __webpack_require__(2597);
var IE8_DOM_DEFINE = __webpack_require__(4664);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8006:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 5181:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 6324:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);
var hasOwn = __webpack_require__(2597);
var toIndexedObject = __webpack_require__(5656);
var indexOf = (__webpack_require__(1318).indexOf);
var hiddenKeys = __webpack_require__(3501);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 5296:
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 2140:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6916);
var isCallable = __webpack_require__(614);
var isObject = __webpack_require__(111);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 3887:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(5005);
var uncurryThis = __webpack_require__(1702);
var getOwnPropertyNamesModule = __webpack_require__(8006);
var getOwnPropertySymbolsModule = __webpack_require__(5181);
var anObject = __webpack_require__(9670);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4488:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(8554);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6200:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(2309);
var uid = __webpack_require__(9711);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var defineGlobalProperty = __webpack_require__(3072);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 2309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(1913);
var store = __webpack_require__(5465);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.32.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 6293:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7392);
var fails = __webpack_require__(7293);
var global = __webpack_require__(7854);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 1400:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(9303);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5656:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(8361);
var requireObjectCoercible = __webpack_require__(4488);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 9303:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(4758);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7466:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(9303);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 7908:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(4488);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 7593:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(6916);
var isObject = __webpack_require__(111);
var isSymbol = __webpack_require__(2190);
var getMethod = __webpack_require__(8173);
var ordinaryToPrimitive = __webpack_require__(2140);
var wellKnownSymbol = __webpack_require__(5112);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(7593);
var isSymbol = __webpack_require__(2190);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 6330:
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 9711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1702);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 3307:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(6293);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3353:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(9781);
var fails = __webpack_require__(7293);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 4811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var isCallable = __webpack_require__(614);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 5112:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(7854);
var shared = __webpack_require__(2309);
var hasOwn = __webpack_require__(2597);
var uid = __webpack_require__(9711);
var NATIVE_SYMBOL = __webpack_require__(6293);
var USE_SYMBOL_AS_UID = __webpack_require__(3307);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 7658:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(2109);
var toObject = __webpack_require__(7908);
var lengthOfArrayLike = __webpack_require__(6244);
var setArrayLength = __webpack_require__(3658);
var doesNotExceedSafeInteger = __webpack_require__(7207);
var fails = __webpack_require__(7293);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ 5798:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5798__;

/***/ }),

/***/ 7203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

// UNUSED EXPORTS: GlobosInformacion, SisdaiColapsableNavegacion, SisdaiIndiceDeContenido, SisdaiInfoDeDespliegue, SisdaiMenuAccesibilidad, SisdaiMenuLateral, SisdaiNarrativaScroll, SisdaiNavegacionGobMx, SisdaiNavegacionPrincipal, SisdaiPiePaginaConahcyt, SisdaiPiePaginaGobMx

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=template&id=340e856c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('section', {
    staticClass: "contenedor narrativa-scroll",
    attrs: {
      "id": _vm.id_scroll
    }
  }, [_c('div', {
    staticClass: "depurador",
    style: {
      opacity: _vm.depurador ? 1 : 0,
      top: _vm.altura_sensor * 100 + 'vh'
    }
  }), _c('div', {
    staticClass: "contenedor-portada"
  }, _vm._l(_vm.bullets, function (bullet, i) {
    return _c('img', {
      key: i,
      class: `portada fondo-${i}`,
      style: {
        opacity: _setup.seccion_visible == i ? 1 : 0
      },
      attrs: {
        "srcset": bullet.imagen,
        "alt": ""
      }
    });
  }), 0), _c('article', _vm._l(_vm.bullets, function (bullet, i) {
    return _c('div', {
      key: i,
      class: `bullet`,
      attrs: {
        "data-step": i
      },
      domProps: {
        "innerHTML": _vm._s(bullet.html)
      }
    });
  }), 0)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(7203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var SisdaiNarrativaScrollvue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiNarrativaScroll',
  props: {
    id_scroll: {
      type: String,
      default: 'id-de-narrativa-scroll'
    },
    bullets: {
      default: () => [{
        html: `<div class="contenedor-portada">
          <div class="degradado-negro-abajo">
            <div class="contenido-abajo">
              <div class="contenedor ancho-lectura p-1">
                <h1 class="texto-centrado texto-color-1">
                  Sistema de Diseño y Accesibilidad para la Investigación
                </h1>
              </div>
            </div>
          </div>
        </div>`,
        imagen: 'https://placekitten.com/1920/1080'
      }, {
        html: '<p>bullet 1</p>',
        imagen: 'https://placekitten.com/1920/1082'
      }, {
        html: '<p>bullet 2</p>',
        imagen: 'https://placekitten.com/1920/1042'
      }],
      type: Array
    },
    depurador: {
      type: Boolean,
      default: false
    },
    altura_sensor: {
      type: Number,
      default: 0.5
    },
    degradado_inicial: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(0);

    /**
     * Esta funcion selecciona todos los ementos a, extrae de los href
     * el último elemento al separar por el caracter '#', es decir
     * los id
     */

    const obtenerElementos = () => {
      lista_elementos.value = [...document.querySelectorAll(`section#${props.id_scroll}.narrativa-scroll article div.bullet`)];
    };
    /**
     * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
     * la sección activa
     */

    function scroleando() {
      const posicion_sensor = document.querySelector(`section#${props.id_scroll}.narrativa-scroll div.depurador`).getBoundingClientRect().top;

      // Checando elementos activos
      let posicion_actual;
      lista_elementos.value.forEach((el, i) => {
        if (el.getBoundingClientRect().top < posicion_sensor && posicion_sensor < el.getBoundingClientRect().bottom) {
          posicion_actual = i;
        } else if (posicion_sensor < lista_elementos.value[0].getBoundingClientRect().top) {
          posicion_actual = 0;
        } else if (posicion_sensor >= lista_elementos.value.slice(-1)[0].getBoundingClientRect().bottom) {
          posicion_actual = lista_elementos.value.length - 1;
        }
      });
      if (props.degradado_inicial) {
        let posicion_normalizada = (posicion_sensor - lista_elementos.value[0].getBoundingClientRect().bottom) / lista_elementos.value[0].getBoundingClientRect().height;
        lista_elementos.value[0].querySelector('.degradado-negro-abajo').style.background = 'linear-gradient(transparent,rgba(0,0,0,' + -posicion_normalizada + '))';
        lista_elementos.value[1].style.background = 'linear-gradient(rgba(0,0,0,' + -posicion_normalizada + '),transparent)';
      }
      if (posicion_actual !== seccion_visible.value) {
        seccion_visible.value = posicion_actual;
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      obtenerElementos();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      window.removeEventListener('scroll', scroleando);
    });
    return {
      __sfc: true,
      lista_elementos,
      seccion_visible,
      props,
      obtenerElementos,
      scroleando
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var narrativa_scroll_SisdaiNarrativaScrollvue_type_script_setup_true_lang_js_ = (SisdaiNarrativaScrollvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=340e856c&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=340e856c&prod&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue



;


/* normalize component */

var component = normalizeComponent(
  narrativa_scroll_SisdaiNarrativaScrollvue_type_script_setup_true_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNarrativaScroll = (component.exports);
;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/index.js

const narrativa_scroll_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNarrativaScroll', SisdaiNarrativaScroll);
  }
};
/* harmony default export */ var narrativa_scroll = (narrativa_scroll_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=template&id=69c6e7bb&
var SisdaiColapsableNavegacionvue_type_template_id_69c6e7bb_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('li', {
    staticClass: "colapsable-navegacion",
    class: {
      activo: _setup.esta_activo
    }
  }, [_c('button', {
    staticClass: "colapsable-boton-submenu",
    attrs: {
      "aria-expanded": _setup.esta_activo ? 'true' : 'false'
    },
    on: {
      "click": function ($event) {
        _setup.esta_activo = !_setup.esta_activo;
      }
    }
  }, [_vm._v(" " + _vm._s(_setup.props.titulo) + " "), _c('span', {
    staticClass: "nav-boton-submenu",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _c('ul', {
    staticClass: "colapsable-submenu",
    attrs: {
      "id": _setup.id_aleatorio
    }
  }, [_vm._t("listado-contenido", function () {
    return [_vm._m(0)];
  })], 2)]);
};
var SisdaiColapsableNavegacionvue_type_template_id_69c6e7bb_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/salsa-community/sisdai-componentes/",
      "target": "_blank",
      "tabindex": "-1"
    }
  }, [_vm._v(" Elemento desplegado")])]);
}];

;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=template&id=69c6e7bb&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiColapsableNavegacion',
  props: {
    titulo: {
      type: String,
      default: 'Titulo de colapsable'
    },
    activo: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;

    // eslint-disable-next-line
    const esta_activo = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(props.activo);
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    const listadoContenido = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});

    /**
     * Agrega el atributo tabindex a los elementos de lista,
     * si la navegación está colapsada
     */
    function agregaAtributoTabIndex() {
      if (esta_activo.value === false) {
        for (let index = 0; index < listadoContenido.value.length; index++) {
          const elemento = listadoContenido.value[index]['children'][0];
          elemento.tabIndex = '-1';
        }
      }
    }

    /**
     * Si el menú está desplegado, remueve el atributo tabIndex.
     * Si está colapsado, agrega el atributo tabIndex en -1 para
     * saltarse los enlaces con el teclado secuencial.
     */
    function actualizaAtributoTabIndex(estaAbierto) {
      if (estaAbierto) {
        for (let index = 0; index < listadoContenido.value.length; index++) {
          const elemento = listadoContenido.value[index]['children'][0];
          elemento.removeAttribute('tabIndex');
        }
      } else {
        for (let index = 0; index < listadoContenido.value.length; index++) {
          const elemento = listadoContenido.value[index]['children'][0];
          elemento.tabIndex = '-1';
        }
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      listadoContenido.value = document.getElementById(id_aleatorio)['children'];
      agregaAtributoTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(esta_activo, () => {
      actualizaAtributoTabIndex(esta_activo.value);
    });
    return {
      __sfc: true,
      props,
      esta_activo,
      idAleatorio,
      id_aleatorio,
      listadoContenido,
      agregaAtributoTabIndex,
      actualizaAtributoTabIndex
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var colapsable_navegacion_SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js_ = (SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue





/* normalize component */
;
var SisdaiColapsableNavegacion_component = normalizeComponent(
  colapsable_navegacion_SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js_,
  SisdaiColapsableNavegacionvue_type_template_id_69c6e7bb_render,
  SisdaiColapsableNavegacionvue_type_template_id_69c6e7bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiColapsableNavegacion = (SisdaiColapsableNavegacion_component.exports);
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/index.js

const colapsable_navegacion_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiColapsableNavegacion', SisdaiColapsableNavegacion);
  }
};
/* harmony default export */ var colapsable_navegacion = (colapsable_navegacion_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=template&id=974b05e8&
var SisdaiMenuLateralvue_type_template_id_974b05e8_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "menu-lateral-contenedor",
    attrs: {
      "aria-label": "Menú secundario"
    }
  }, [_c('div', {
    staticClass: "menu-mov",
    class: {
      abierto: _setup.menu_abierto
    },
    on: {
      "click": function ($event) {
        _setup.menu_abierto = !_setup.menu_abierto;
      }
    }
  }, [_c('button', {
    staticClass: "boton-icono boton-menu",
    attrs: {
      "aria-expanded": _setup.menu_abierto ? 'true' : 'false'
    }
  }, [_setup.menu_abierto ? _c('span', {
    staticClass: "icono-angulo-doble-izquierda",
    attrs: {
      "aria-hidden": "true"
    }
  }) : _c('span', {
    staticClass: "icono-angulo-doble-derecha",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" Expandir o colapsar navegación")])])]), _c('div', {
    staticClass: "menu-colapsable",
    class: {
      abierto: _setup.menu_abierto
    },
    attrs: {
      "id": _setup.id_aleatorio
    }
  }, [_c('div', {
    ref: "contenidoMenuLateral",
    staticClass: "menu-max-height"
  }, [_vm._t("contenido-menu-lateral", function () {
    return [_vm._m(0)];
  })], 2)])]);
};
var SisdaiMenuLateralvue_type_template_id_974b05e8_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#anchore"
    }
  }, [_vm._v(" anchore link prueba ")])]), _c('li', [_c('a', {
    attrs: {
      "href": "https://github.com/salsa-community/sisdai-componentes",
      "rel": "noopener",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "icono-social-github",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" ejemplo github ")])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=template&id=974b05e8&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var SisdaiMenuLateralvue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiMenuLateral',
  setup(__props) {
    const menu_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    const elementosLista = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});

    /**
     * Agrega el atributo tabindex a los elementos de lista,
     * si está en versión móvil
     */
    function agregaAtributoTabIndex() {
      if (window.innerWidth < 768) {
        for (let index = 0; index < elementosLista.value.length; index++) {
          const elemento = elementosLista.value[index]['children'][0];
          elemento.tabIndex = '-1';
        }
      }
    }

    /**
     * Si el menú está abierto en móvil, remueve el atributo tabIndex.
     * Si está cerrado, agrega el atributo tabIndex en -1 para
     * saltarse los enlaces con el teclado secuencial.
     */
    function actualizaAtributoTabIndex(estaAbierto) {
      if (window.innerWidth < 768) {
        if (estaAbierto) {
          for (let i = 0; i < elementosLista.value.length; i++) {
            const elemento = elementosLista.value[i]['children'][0];
            elemento.removeAttribute('tabIndex');
          }
        } else {
          for (let j = 0; j < elementosLista.value.length; j++) {
            const elemento = elementosLista.value[j]['children'][0];
            elemento.tabIndex = '-1';
          }
        }
      }
    }
    const contenidoMenuLateral = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      elementosLista.value = document.getElementById(id_aleatorio)['children'][0]['children'][0]['children'];
      agregaAtributoTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(menu_abierto, () => {
      actualizaAtributoTabIndex(menu_abierto.value);
    });
    return {
      __sfc: true,
      menu_abierto,
      idAleatorio,
      id_aleatorio,
      elementosLista,
      agregaAtributoTabIndex,
      actualizaAtributoTabIndex,
      contenidoMenuLateral
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var menu_lateral_SisdaiMenuLateralvue_type_script_setup_true_lang_js_ = (SisdaiMenuLateralvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/SisdaiMenuLateral.vue





/* normalize component */
;
var SisdaiMenuLateral_component = normalizeComponent(
  menu_lateral_SisdaiMenuLateralvue_type_script_setup_true_lang_js_,
  SisdaiMenuLateralvue_type_template_id_974b05e8_render,
  SisdaiMenuLateralvue_type_template_id_974b05e8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiMenuLateral = (SisdaiMenuLateral_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/index.js

const menu_lateral_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiMenuLateral', SisdaiMenuLateral);
  }
};
/* harmony default export */ var menu_lateral = (menu_lateral_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=template&id=fcf31012&
var SisdaiMenuAccesibilidadvue_type_template_id_fcf31012_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-menu-accesibilidad",
    class: {
      abierto: _setup.menuAccesibilidadEstaAbierto
    }
  }, [_c('button', {
    staticClass: "icono-boton-accesibilidad",
    attrs: {
      "aria-expanded": _setup.menuAccesibilidadEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarAbiertoCerrado
    }
  }, [_c('span', {
    staticClass: "icono-accesibilidad icono-5",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v(" abrir y cerrar menú de accesibilidad ")])]), _c('menu', {
    staticClass: "menu-accesibilidad"
  }, [_c('p', {
    staticClass: "titulo"
  }, [_vm._v("Herramientas de accesibilidad")]), _c('hr'), _vm._l(_setup.opciones, function (opcion, idx) {
    return _c('button', {
      key: `opcion-accesibilidad-${idx}`,
      staticClass: "opcion-accesibilidad",
      attrs: {
        "tabindex": _setup.menuAccesibilidadEstaAbierto ? undefined : -1
      },
      on: {
        "click": function ($event) {
          return _setup.seleccionarOpcion(opcion);
        }
      }
    }, [_c('span', {
      staticClass: "icono-4",
      class: opcion.icono,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" " + _vm._s(opcion.titulo) + " " + _vm._s(opcion.titulo === 'Vista' ? _setup.nombreTemaActual : '') + " ")]);
  }), _c('button', {
    staticClass: "opcion-accesibilidad",
    attrs: {
      "tabindex": _setup.menuAccesibilidadEstaAbierto ? undefined : -1
    },
    on: {
      "click": _setup.restablecer
    }
  }, [_c('span', {
    staticClass: "icono-4 icono-restablecer",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Restablecer ")])], 2)]);
};
var SisdaiMenuAccesibilidadvue_type_template_id_fcf31012_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(7658);
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/opcionesDefault.js
/**
 * Lista de opciones por defecto del Menú de accesibilidad, cada opción debe ser un objeto
 * con los siguientes atributos:
 * - accion {`String`}: Nombre de la acción al dar click en la opción.
 * - claseCss: {`String`}: Nombre de la clase css de la opción.
 * - icono {`String`}: Visible a un costado del titulo.
 * - titulo {`String`}: Visible en la lista del menú abierto.
 * @type Array
 */
/* harmony default export */ var opcionesDefault = ([{
  accion: 'alternarVistaOscura',
  claseCss: 'a11y-oscura',
  icono: 'icono-contraste',
  titulo: 'Vista'
}, {
  accion: 'alternarTipografiaAccesible',
  claseCss: 'a11y-tipografia',
  icono: 'icono-cambio-tipografia',
  titulo: 'Cambio de fuente'
}, {
  accion: 'alternarVistaSimplificada',
  claseCss: 'a11y-simplificada',
  icono: 'icono-vista-simplificada',
  titulo: 'Vista simplificada'
}, {
  accion: 'alternarEnlacesSubrayados',
  claseCss: 'a11y-hipervinculos',
  icono: 'icono-enlace-subrayado',
  titulo: 'Enlaces subrayados'
}]);
;// CONCATENATED MODULE: ./src/stores/accesibilidad.js
/* harmony default export */ var accesibilidad = ({
  namespaced: true,
  state: {
    // menu_accesibilidad_abierto: false,
    tipografia_accesible: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
    vista_oscura: false,
    tema: 'claro',
    // 'claro' | 'auto' | 'oscuro'
    perfil: 'eni' // 'eni' | 'sisdai' | 'gema'
  },

  getters: {
    clasesAccesibles: state => ({
      'a11y-oscura': state.vista_oscura,
      'a11y-tipografia': state.tipografia_accesible,
      'a11y-simplificada': state.vista_simplificada,
      'a11y-hipervinculos': state.enlaces_subrayados
    })
  },
  mutations: {
    alternarVistaOscura(state) {
      //rotar entre estos 3 valores
      const temas = ['claro', 'auto', 'oscuro'];
      state.tema = temas[(temas.indexOf(state.tema) + 1) % 3];

      //setear el tema del localStorage
      localStorage.setItem('tema', state.tema);

      //prender y apagar la vista oscura
      state.vista_oscura = !state.vista_oscura;
    },
    alternarTipografiaAccesible(state) {
      state.tipografia_accesible = !state.tipografia_accesible;
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada;
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados;
    },
    restablecer(state) {
      state.tipografia_accesible = false;
      state.vista_simplificada = false;
      state.enlaces_subrayados = false;
      state.vista_oscura = false;
      state.tema = 'claro';
    }
  }
});
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js&





const propiedades = {
  /**
   * Lista de opciones que se agregará al Menú de accesibilidad, cada opción debe ser un objeto
   * con los siguientes atributos:
   * - accion {`String`}: Nombre de la acción al dar click en la opción.
   * - claseCss: {`String`}: Nombre de la clase css de la opción.
   * - icono {`String`}: Visible a un costado del titulo.
   * - titulo {`String`}: Visible en la lista del menú abierto.
   */
  agregarOpciones: {
    type: Array,
    default: () => []
  },
  /**
   * Objeto store completo del proyecto.
   */
  objetoStore: {
    type: Object,
    default: () => {}
  },
  /**
   * Si el nombre del modulo de accesibilidad en el store del proyecto es diferente de
   * `accesibilidad`, se debe introducir el nombre del modulo en esta propiedad.
   */
  nombreModuloStore: {
    type: String,
    default: 'accesibilidad'
  }
};
const eventos = {
  /**
   * Se ejecuta al dar click en una opción del munú de accesibilidad.
   * @param {Object} opcion Objeto que contiene los atributos de la opción seleccionada al dar
   * click.
   */
  alSeleccionarOpcion: 'alSeleccionarOpcion',
  /**
   * Se ejecuta cuando se ha dado click en el botón "Restablecer".
   */
  alRestablecer: 'alRestablecer'
};
/* harmony default export */ var SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiMenuAccesibilidad',
  props: propiedades,
  emits: Object.values(eventos),
  setup(__props, {
    expose,
    emit: emits
  }) {
    const props = __props;
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.useCssVars)((_vm, _setup) => ({
      "adbf4754": _setup.alturaMenuAbierto
    }));
    const {
      agregarOpciones,
      nombreModuloStore,
      objetoStore
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);

    /**
     * Opciones que se mostrarán en el menú de accesibilidad.
     */
    const opciones = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => [...opcionesDefault, ...agregarOpciones.value]);

    /**
     * Indica si el Menú de accesibilidad está abierto.
     * - Abierto: `true`
     * - Cerrado: `false`
     * @type {Boolean}
     */
    const menuAccesibilidadEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);

    /**
     * Arreglo de clases que se mantienen activas con el menú de accesibilidad, use esta variable
     * para facilitar la relación de interacción del menú de accesibilidad con la vista.
     * @type {Array<String>}
     */
    const clasesSelecciondas = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);

    /**
     * Agrega y quita clases del arrelo `clasesSelecciondas`.
     * @param {String} claseCss
     */
    function agregarQuitarClaseSeleccionda(claseCss) {
      if (!clasesSelecciondas.value.includes(claseCss)) {
        clasesSelecciondas.value.push(claseCss);
      } else {
        clasesSelecciondas.value = clasesSelecciondas.value.filter(clase => clase !== claseCss);
      }
    }

    /**
     * Ejecuta un cambio en el store si dicho objeto permite hacer commits (si se esta usando la
     * pripiedad `objetoStore`).
     * @param {String} accion nombre del mutation en el modulo del store.
     */
    function ejecutarEnStore(accion) {
      if (objetoStore.value !== undefined && Object.prototype.hasOwnProperty.call(objetoStore.value, 'commit')) {
        objetoStore.value.commit(`${nombreModuloStore.value}/${accion}`);
      }
    }

    /**
     * Desencadena el emit 'alSeleccionarOpcion' al mismo tiempo que cierra el menú.
     * @param {Object} Opcion seleccionada.
     */
    function seleccionarOpcion(opcion) {
      alternarAbiertoCerrado();
      agregarQuitarClaseSeleccionda(opcion.claseCss);
      emits(eventos.alSeleccionarOpcion, opcion);
      ejecutarEnStore(opcion.accion);
    }

    /**
     * Desencadena el emit 'alRestablecer' al mismo tiempo que cierra el menú.
     */
    function restablecer() {
      alternarAbiertoCerrado();
      clasesSelecciondas.value = [];
      emits(eventos.alRestablecer);
      ejecutarEnStore('restablecer');
    }

    /**
     * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
     * Menú de accesibilidad.
     */
    function alternarAbiertoCerrado() {
      menuAccesibilidadEstaAbierto.value = !menuAccesibilidadEstaAbierto.value;
    }
    expose({
      alternarAbiertoCerrado,
      clasesSelecciondas
    });

    /**
     * Módulo de vista oscura.
     */
    const tema = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => accesibilidad.state.tema);
    const perfil = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => accesibilidad.state.perfil);

    /**
     * Muestra el nombre actual según el tema seleccionado.
     */
    const nombreTemaActual = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      const nombres = {
        claro: 'Clara',
        oscuro: 'Oscura',
        auto: 'Automática'
      };
      return nombres[tema.value];
    });

    /**
     * Elige el tema en el documento en modo oscuro,
     * si la variable del query es dark y el tema del store es auto
     * ó si el tema del store es oscuro.
     */
    function elegirTemaEnDocumento() {
      const modoOscuro = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && tema.value === 'auto' || tema.value === 'oscuro');

      // Asignar el perfil de color para el atributo css del query.
      if (perfil.value !== null) document.documentElement.setAttribute(
      // se puede nombrar como quieras.
      `data-dark-theme-${perfil.value}`, modoOscuro.value);

      // Reasignando la variable del store.
      modoOscuro.value === true ? accesibilidad.state.vista_oscura = true : accesibilidad.state.vista_oscura = false;
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeMount)(() => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', elegirTemaEnDocumento);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      elegirTemaEnDocumento();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', elegirTemaEnDocumento);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(tema, () => {
      elegirTemaEnDocumento();
    });

    // if (localStorage.getItem('theme')) {
    //   store.state.tema = localStorage.getItem('theme')
    // }

    /**
     * Altura en pixeles del menú abierto, se calcula dando 50 pixeles a cada opción sumando la
     * opción de restablecer y el titulo del menú.
     */
    const alturaMenuAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => `${(opciones.value.length + 1) * 40 + 84}px`);
    return {
      __sfc: true,
      propiedades,
      eventos,
      props,
      emits,
      agregarOpciones,
      nombreModuloStore,
      objetoStore,
      opciones,
      menuAccesibilidadEstaAbierto,
      clasesSelecciondas,
      agregarQuitarClaseSeleccionda,
      ejecutarEnStore,
      seleccionarOpcion,
      restablecer,
      alternarAbiertoCerrado,
      tema,
      perfil,
      nombreTemaActual,
      elegirTemaEnDocumento,
      alturaMenuAbierto
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js_ = (SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=style&index=0&id=fcf31012&prod&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=style&index=0&id=fcf31012&prod&lang=scss&

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue



;


/* normalize component */

var SisdaiMenuAccesibilidad_component = normalizeComponent(
  menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js_,
  SisdaiMenuAccesibilidadvue_type_template_id_fcf31012_render,
  SisdaiMenuAccesibilidadvue_type_template_id_fcf31012_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiMenuAccesibilidad = (SisdaiMenuAccesibilidad_component.exports);
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/index.js

const menu_accesibilidad_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiMenuAccesibilidad', SisdaiMenuAccesibilidad);
  }
};
/* harmony default export */ var menu_accesibilidad = (menu_accesibilidad_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=template&id=f819c696&
var SisdaiBotonFlotantevue_type_template_id_f819c696_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-boton-flotante",
    class: {
      abierto: _setup.botonFlotanteEstaAbierto
    }
  }, [_c('button', {
    class: `boton-flotante-alternador borde-r-redondeado-20 borde-l-redondeado-${_setup.botonFlotanteEstaAbierto ? '' : '2'}0`,
    attrs: {
      "aria-expanded": _setup.botonFlotanteEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarEstado
    }
  }, [_c('span', {
    class: `icono ${_setup.botonFlotanteEstaAbierto ? 'icono-restar' : 'icono-agregar'} icono-3`,
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir o cerrar botón flotante")])]), _c('div', {
    staticClass: "boton-flotante-contenido borde-l-redondeado-20",
    class: {
      'borde-l': _setup.botonFlotanteEstaAbierto
    }
  }, _vm._l(_setup.enlaces, function ({
    enlace,
    clasesCss,
    icono,
    contenido
  }, idx) {
    return _c('a', {
      key: `boton-flotante-enlace-${idx}`,
      class: `enlace p-x-1 borde-redondeado-0 ${clasesCss === undefined ? '' : clasesCss}`,
      attrs: {
        "id": `boton_flotante_enlace_${idx}`,
        "href": enlace,
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    }, [_c('span', {
      class: `icono ${icono === undefined ? 'icono-enlace-externo' : icono}`,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" " + _vm._s(contenido === undefined ? 'Enlace externo' : contenido) + " ")]);
  }), 0)]);
};
var SisdaiBotonFlotantevue_type_template_id_f819c696_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=script&setup=true&lang=js&

const SisdaiBotonFlotantevue_type_script_setup_true_lang_js_propiedades = {
  /**
   * Lista de enlaces que se mostrarán en el Botón flotante abierto, cada opción debe ser un
   * objeto con los siguientes atributos:
   * - clasesCss {`String`}: Nombre de la clase css de la opción.
   * - contenido: {`String`}: Contenido en texto que se mostrará en la interfaz.
   * - enlace {`String`}: Dirección url a la que dirigirá el botón.
   * - icono {`String`}: Visible al costado izquierdo del contenido.
   */
  enlaces: {
    type: Array,
    required: true
  }
};
/* harmony default export */ var SisdaiBotonFlotantevue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiBotonFlotante',
  props: SisdaiBotonFlotantevue_type_script_setup_true_lang_js_propiedades,
  setup(__props, {
    expose
  }) {
    const props = __props;
    const {
      enlaces
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);

    /**
     * Indica si el Botón flotante está abierto.
     * - Abierto: `true`
     * - Cerrado: `false`
     * @type Boolean
     */
    const botonFlotanteEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(true);

    /**
     * Cambia el estado (contrario de su valor actual al ejecutar el evento, abierto o cerrado) del
     * Botón flotante.
     */
    function alternarEstado() {
      botonFlotanteEstaAbierto.value = !botonFlotanteEstaAbierto.value;
    }
    expose({
      alternarEstado
    });

    /**
     * Si el botón está abierto, remueve el atributo tabIndex.
     * Si está cerrado, agrega el atributo tabIndex en -1 para
     * saltarse los enlaces con el teclado secuencial.
     */
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(botonFlotanteEstaAbierto, () => {
      if (botonFlotanteEstaAbierto.value) {
        enlaces.value.forEach((element, idx) => {
          document.getElementById(`boton_flotante_enlace_${idx}`).removeAttribute('tabIndex');
        });
      } else {
        enlaces.value.forEach((element, idx) => {
          document.getElementById(`boton_flotante_enlace_${idx}`).tabIndex = '-1';
        });
      }
    });
    return {
      __sfc: true,
      propiedades: SisdaiBotonFlotantevue_type_script_setup_true_lang_js_propiedades,
      props,
      enlaces,
      botonFlotanteEstaAbierto,
      alternarEstado
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var boton_flotante_SisdaiBotonFlotantevue_type_script_setup_true_lang_js_ = (SisdaiBotonFlotantevue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/SisdaiBotonFlotante.vue





/* normalize component */
;
var SisdaiBotonFlotante_component = normalizeComponent(
  boton_flotante_SisdaiBotonFlotantevue_type_script_setup_true_lang_js_,
  SisdaiBotonFlotantevue_type_template_id_f819c696_render,
  SisdaiBotonFlotantevue_type_template_id_f819c696_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiBotonFlotante = (SisdaiBotonFlotante_component.exports);
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/index.js

const boton_flotante_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiBotonFlotante', SisdaiBotonFlotante);
  }
};
/* harmony default export */ var boton_flotante = (boton_flotante_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=29602b0c&
var SisdaiNavegacionPrincipalvue_type_template_id_29602b0c_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    ref: "navegacionPrincipal",
    staticClass: "navegacion navegacion-conahcyt",
    class: {
      'navegacion-pegada': _vm.fija
    },
    attrs: {
      "aria-label": "Menú principal"
    }
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._t("identidad", function () {
    return [_vm._m(0)];
  }), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto
    },
    attrs: {
      "aria-expanded": _setup.menuEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_c('span', {
    staticClass: "nav-icono-menu",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir y cerrar navegacion principal")])]), _c('div', {
    staticClass: "nav-informacion",
    domProps: {
      "innerHTML": _vm._s(_vm.navInformacion)
    }
  })], 2), _c('div', {
    staticClass: "nav-menu-contedor",
    class: {
      abierto: _setup.menuEstaAbierto
    }
  }, [_c('div', {
    ref: "cuadroElementosMenu",
    staticClass: "nav-menu-principal",
    on: {
      "click": _setup.alternarMenu
    }
  }, [_vm._t("default", function () {
    return [_vm._m(1)];
  })], 2)])]);
};
var SisdaiNavegacionPrincipalvue_type_template_id_29602b0c_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://conahcyt.mx/",
      "target": "_blank"
    }
  }, [_c('img', {
    staticClass: "nav-logo invertir",
    attrs: {
      "width": "130",
      "height": "38",
      "src": "https://cdn.conacyt.mx/sisdai-archivos/conahcyt-azul.svg",
      "alt": "Conahcyt."
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('ul', {
    staticClass: "nav-menu"
  }, [_c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Inicio")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "/acerca-de"
    }
  }, [_vm._v("Acerca de")])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=29602b0c&

;// CONCATENATED MODULE: ./src/composables/useMenuDesenfocable.js


/**
 * @typedef { import("vue").Ref } Ref
 */

/**
 * @typedef {Object} UseMenuDesenfocableObject
 * @property {Ref<boolean>} menuEstaAbierto  Indica el estado del menu si esta abierto o no
 * @property {function} abrirMenu  pone `menuEstaAbierto = true`
 * @property {function} cerrarMenu  pone `menuEstaAbierto = false`
 * @property {function} alternarMenu  pone `menuEstaAbierto =  !menuEstaAbierto`
 * @property {Ref<boolean>} submenuEstaAbierto  Indica el estado del submenu si esta abierto o no
 * @property {function} abrirSubmenu  pone `submenuEstaAbierto = true` y agrega el selector de estilo `abierto` al submenu
 * @property {function} cerrarSubmenu  pone `submenuEstaAbierto = false` y remueve el selector de estilo `abierto` al submenu
 * @property {function} alternarSubmenu  pone `submenuEstaAbierto =  !menuEstaAbierto`
 */

/**
 *  Composable que maneja el estado de *abierto-cerrado* de un menu (en los menus colapsables), adicionalmente
 *  administra los eventos *focus-blur* para cerrar el menu automaticamente al momento de que el menu pierda el foco
 *
 * @param {Ref<HTMLElement>} elementoMenuEnfocable Referecia del elemento html que contiene los
 * elementos del menu colapsable `ref<HTMLElement>`. Debe ser enfocable, si es un div o algun elemento que no
 * tenga focus por si mismo, debe agregarse el atributo [tab-index](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
 *
 * @returns {UseMenuDesenfocableObject} Metodos y propiedades del composable
 * - `menuEstaAbierto: ref<boolean>`
 * - `abrirMenu: function`
 * - `cerrarMenu: function`
 * - `alternarMenu: function`
 * - `submenuEstaAbierto: ref<boolean>`
 * - `abrirSubmenu: function`
 * - `cerrarSubmenu: function`
 * - `alternarSubmenu: function`
 */
function useMenuDesenfocable(elementoMenuEnfocable) {
  const menuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const submenuEstaAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  function updateBlur() {
    //revisar que no tengo foco ningun elemento hijo

    if (menuEstaAbierto.value || submenuEstaAbierto.value) {
      setTimeout(() => {
        if (elementoMenuEnfocable.value && !elementoMenuEnfocable.value.contains(document.activeElement)) {
          menuEstaAbierto.value = false;
          cerrarSubmenu();
        }
      }, 200);
    }
  }
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.addEventListener('blur', updateBlur);
  });
  function abrirMenu() {
    menuEstaAbierto.value = true;
  }
  function cerrarMenu() {
    menuEstaAbierto.value = false;
  }
  function alternarMenu() {
    if (menuEstaAbierto.value === false && submenuEstaAbierto.value === true) {
      cerrarSubmenu();
    } else {
      menuEstaAbierto.value = !menuEstaAbierto.value;
    }
  }
  function abrirSubmenu() {
    if (document.querySelector('.nav-submenu')) {
      const navSubmenu = document.querySelector('.nav-submenu');
      const list = navSubmenu.classList;
      list.add('abierto');
      submenuEstaAbierto.value = true;
    }
  }
  function cerrarSubmenu() {
    if (document.querySelector('.nav-submenu')) {
      const navSubmenu = document.querySelector('.nav-submenu');
      const list = navSubmenu.classList;
      list.remove('abierto');
      submenuEstaAbierto.value = false;
    }
  }
  function alternarSubmenu() {
    submenuEstaAbierto.value = !submenuEstaAbierto.value;
    submenuEstaAbierto.value ? abrirSubmenu() : cerrarSubmenu();
  }
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)([menuEstaAbierto, submenuEstaAbierto], (menuEstaAbierto, submenuEstaAbierto) => {
    if (menuEstaAbierto || submenuEstaAbierto) {
      elementoMenuEnfocable.value.focus();
    }
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
    if (elementoMenuEnfocable.value) elementoMenuEnfocable.value.removeEventListener('blur', updateBlur);
  });
  return {
    menuEstaAbierto,
    abrirMenu,
    cerrarMenu,
    alternarMenu,
    alternarSubmenu
  };
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=script&setup=true&lang=js&


/* harmony default export */ var SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiNavegacionPrincipal',
  props: {
    navInformacion: {
      default: '',
      type: String
    },
    fija: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    //Que el menu se pueda cerrar automaticamente al enfocar otra cosa
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const navegacionPrincipal = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const {
      menuEstaAbierto,
      alternarMenu,
      // eslint-disable-next-line
      alternarSubmenu
    } = useMenuDesenfocable(cuadroElementosMenu);
    const navMenuConahcyt = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});

    /**
     * Agrega el atributo tabindex a los elementos de lista,
     * si está en versión móvil
     */
    function agregaAtributoTabIndex() {
      if (window.innerWidth < 768) {
        for (let index = 0; index < navMenuConahcyt.value.length; index++) {
          const elemento = navMenuConahcyt.value[index]['children'][0];
          elemento.tabIndex = '-1';
        }
      }
    }

    /**
     * Si el menú está abierto en móvil, remueve el atributo tabIndex.
     * Si está cerrado, agrega el atributo tabIndex en -1 para
     * saltarse los enlaces con el teclado secuencial.
     */
    function actualizaAtributoTabIndex(estaAbierto) {
      if (window.innerWidth < 768) {
        if (estaAbierto) {
          for (let i = 0; i < navMenuConahcyt.value.length; i++) {
            const elemento = navMenuConahcyt.value[i]['children'][0];
            elemento.removeAttribute('tabIndex');
          }
        } else {
          for (let j = 0; j < navMenuConahcyt.value.length; j++) {
            const elemento = navMenuConahcyt.value[j]['children'][0];
            elemento.tabIndex = '-1';
          }
        }
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      navMenuConahcyt.value = document.getElementsByClassName('nav-menu')[1]['children'];
      agregaAtributoTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(menuEstaAbierto, () => {
      actualizaAtributoTabIndex(menuEstaAbierto.value);
    });
    return {
      __sfc: true,
      cuadroElementosMenu,
      navegacionPrincipal,
      menuEstaAbierto,
      alternarMenu,
      alternarSubmenu,
      navMenuConahcyt,
      agregaAtributoTabIndex,
      actualizaAtributoTabIndex
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var navegacion_principal_SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js_ = (SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue





/* normalize component */
;
var SisdaiNavegacionPrincipal_component = normalizeComponent(
  navegacion_principal_SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js_,
  SisdaiNavegacionPrincipalvue_type_template_id_29602b0c_render,
  SisdaiNavegacionPrincipalvue_type_template_id_29602b0c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNavegacionPrincipal = (SisdaiNavegacionPrincipal_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/index.js

const navegacion_principal_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNavegacionPrincipal', SisdaiNavegacionPrincipal);
  }
};
/* harmony default export */ var navegacion_principal = (navegacion_principal_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=template&id=1a8fe0af&
var SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "indice-de-contenido",
    attrs: {
      "id": _vm.id_indice
    }
  }, [_c('p', {
    staticClass: "titulo-indice",
    attrs: {
      "id": "indice"
    }
  }, [_vm._v(" " + _vm._s(_vm.titulo) + " ")]), _c('nav', {
    attrs: {
      "aria-labelledby": "indice"
    }
  }, [_c('div', {
    staticClass: "contenedor-indice-de-contenido"
  }, [_vm._t("contenido-indice-de-contenido", function () {
    return [_c('router-link', {
      attrs: {
        "to": "#routerlink"
      }
    }, [_vm._v(" router link prueba ")]), _c('a', {
      attrs: {
        "href": "#anchore"
      }
    }, [_vm._v(" anchore link prueba ")])];
  })], 2)])]);
};
var SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=script&setup=true&lang=js&

/* harmony default export */ var SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiIndiceDeContenido',
  props: {
    titulo: {
      type: String,
      default: 'Índice'
    },
    altura: {
      type: Number,
      default: 50
    },
    id_indice: {
      type: String,
      defaul: 'id-del-indice-de-contenido'
    }
  },
  setup(__props) {
    const props = __props;
    const lista_elementos = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)([]);
    const seccion_visible = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();

    /**
     * Esta funcion selecciona todos los ementos a, extrae de los href
     * el último elemento al separar por el caracter '#', es decir
     * los id
     */

    const obtenerRutas = () => {
      lista_elementos.value = [...document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`)].map(d => {
        return {
          id: d.href.split('#').slice(-1).pop()
        };
      });
    };

    /**
     * Esta funcion detecta la posición escroleada de la navegación y calcula cual es
     * la sección activa.
     */
    function scroleando() {
      lista_elementos.value.forEach(d => {
        if (document.getElementById(d.id)) {
          d.elemento = document.getElementById(d.id);
          d.y_min = d.elemento.offsetTop;
          d.y_max = d.elemento.offsetTop + d.elemento.offsetHeight;
        } else {
          // eslint-disable-next-line
          console.warn('Los href que introdujiste en el slot "contenido-indice-de-contenido" no hacen referencia a ningún id de esta vista');
        }
      });
      let posicion_scroll_y = window.pageYOffset + 100;
      lista_elementos.value.map(d => {
        if (d.y_min + props.altura <= posicion_scroll_y && posicion_scroll_y <= d.y_max + props.altura) {
          seccion_visible.value = d.id;
        }
      });
    }

    /**
     * Caracteristicas del autoscroll suave al clickear un link. Además modifica el focus
     */

    function autoScrollSuave() {
      document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`).forEach(anchor => {
        anchor.addEventListener('click', () => {
          seccion_visible.value = anchor.href.split('#').slice(-1).pop();
          document.querySelector('#' + seccion_visible.value).focus();
          //e.preventDefault()

          window.scrollTo({
            top: document.querySelector('#' + seccion_visible.value).offsetTop - props.altura,
            behavior: 'smooth'
          });
        });
      });
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(seccion_visible, () => {
      document.querySelectorAll(`div#${props.id_indice}.indice-de-contenido a`).forEach(d => {
        if (d.href.split('#').slice(-1).pop() === seccion_visible.value) {
          d.classList.add('link-activo');
        } else {
          d.classList.remove('link-activo');
          d.classList.remove('router-link-exact-active');
        }
      });
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      obtenerRutas();
      autoScrollSuave();
      window.addEventListener('scroll', scroleando);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onUnmounted)(() => {
      window.removeEventListener('scroll', scroleando);
    });
    return {
      __sfc: true,
      lista_elementos,
      seccion_visible,
      props,
      obtenerRutas,
      scroleando,
      autoScrollSuave
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var indice_de_contenido_SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js_ = (SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue





/* normalize component */
;
var SisdaiIndiceDeContenido_component = normalizeComponent(
  indice_de_contenido_SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js_,
  SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_render,
  SisdaiIndiceDeContenidovue_type_template_id_1a8fe0af_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiIndiceDeContenido = (SisdaiIndiceDeContenido_component.exports);
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/index.js

const indice_de_contenido_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiIndiceDeContenido', SisdaiIndiceDeContenido);
  }
};
/* harmony default export */ var indice_de_contenido = (indice_de_contenido_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=578194de&
var SisdaiNavegacionGobMxvue_type_template_id_578194de_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('nav', {
    staticClass: "navegacion navegacion-gobmx",
    attrs: {
      "aria-label": "Menú Gobierno de México"
    }
  }, [_c('div', {
    staticClass: "nav-contenedor-identidad"
  }, [_vm._m(0), _c('button', {
    staticClass: "nav-boton-menu",
    class: {
      abierto: _setup.menuEstaAbierto
    },
    attrs: {
      "aria-expanded": _setup.menuEstaAbierto ? 'true' : 'false'
    },
    on: {
      "click": _setup.alternarMenu
    }
  }, [_c('span', {
    staticClass: "nav-icono-menu"
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("abrir y cerrar navegacion del gobierno de México")])])]), _c('div', {
    staticClass: "nav-menu-contedor",
    class: {
      abierto: _setup.menuEstaAbierto
    }
  }, [_c('div', {
    ref: "cuadroElementosMenu",
    staticClass: "nav-menu-principal",
    on: {
      "click": _setup.alternarMenu
    }
  }, [_vm._m(1)])])]);
};
var SisdaiNavegacionGobMxvue_type_template_id_578194de_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    staticClass: "nav-hiperviculo-logo",
    attrs: {
      "href": "https://www.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('img', {
    staticClass: "nav-logo",
    attrs: {
      "width": "128",
      "height": "38",
      "src": "https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg",
      "alt": "Gobierno de México."
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('ul', {
    staticClass: "nav-menu",
    attrs: {
      "id": "nav_menu_gobmx"
    }
  }, [_c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://mivacuna.salud.gob.mx/index.php",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Registro para vacunación")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://coronavirus.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Información sobre COVID-19")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/tramites",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Trámites")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/gobierno",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Gobierno")])]), _c('li', [_c('a', {
    staticClass: "nav-hipervinculo",
    attrs: {
      "href": "https://www.gob.mx/busqueda",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("ir al buscador")]), _c('span', {
    staticClass: "icono-buscar",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=578194de&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=script&setup=true&lang=js&



//Que el menu se pueda cerrar automaticamente al enfocar otra cosa

/* harmony default export */ var SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiNavegacionGobMx',
  setup(__props) {
    const cuadroElementosMenu = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    const {
      menuEstaAbierto,
      alternarMenu
    } = useMenuDesenfocable(cuadroElementosMenu);
    const navMenuGobMx = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)({});

    /**
     * Agrega el atributo tabindex a los elementos de lista,
     * si está en versión móvil
     */
    function agregaAtributoTabIndex() {
      if (window.innerWidth < 768) {
        for (let index = 0; index < navMenuGobMx.value.length; index++) {
          const elemento = navMenuGobMx.value[index]['children'][0];
          elemento.tabIndex = '-1';
        }
      }
    }

    /**
     * Si el menú está abierto en móvil, remueve el atributo tabIndex.
     * Si está cerrado, agrega el atributo tabIndex en -1 para
     * saltarse los enlaces con el teclado secuencial.
     */
    function actualizaAtributoTabIndex(estaAbierto) {
      if (window.innerWidth < 768) {
        if (estaAbierto) {
          for (let i = 0; i < navMenuGobMx.value.length; i++) {
            const elemento = navMenuGobMx.value[i]['children'][0];
            elemento.removeAttribute('tabIndex');
          }
        } else {
          for (let j = 0; j < navMenuGobMx.value.length; j++) {
            const elemento = navMenuGobMx.value[j]['children'][0];
            elemento.tabIndex = '-1';
          }
        }
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
      navMenuGobMx.value = document.getElementsByClassName('nav-menu')[0]['children'];
      agregaAtributoTabIndex();
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(menuEstaAbierto, () => {
      actualizaAtributoTabIndex(menuEstaAbierto.value);
    });
    return {
      __sfc: true,
      cuadroElementosMenu,
      menuEstaAbierto,
      alternarMenu,
      navMenuGobMx,
      agregaAtributoTabIndex,
      actualizaAtributoTabIndex
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var navegacion_gob_mx_SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js_ = (SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue





/* normalize component */
;
var SisdaiNavegacionGobMx_component = normalizeComponent(
  navegacion_gob_mx_SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js_,
  SisdaiNavegacionGobMxvue_type_template_id_578194de_render,
  SisdaiNavegacionGobMxvue_type_template_id_578194de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiNavegacionGobMx = (SisdaiNavegacionGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/index.js

const navegacion_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiNavegacionGobMx', SisdaiNavegacionGobMx);
  }
};
/* harmony default export */ var navegacion_gob_mx = (navegacion_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=1282e6bc&
var SisdaiPiePaginaGobMxvue_type_template_id_1282e6bc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var SisdaiPiePaginaGobMxvue_type_template_id_1282e6bc_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "contenedor gobmx-fondo-oscuro-1 piepagina-gobmx gobmx-piepagina p-t-4 p-b-10",
    attrs: {
      "aria-label": "Gobierno de México"
    }
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('img', {
    staticClass: "foot-logo",
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai-archivos/gobmx.svg",
      "alt": "Gobierno de México",
      "width": "200px",
      "height": "60px"
    }
  })]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("Enlaces")]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.participa.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Participa")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/publicaciones",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Publicaciones Oficiales")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "http://www.ordenjuridico.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Marco Jurídico")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://consultapublicamx.inai.org.mx/vut-web/faces/view/consultaPublica.xhtml",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Plataforma Nacional de Transparencia")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("¿Qué es gob.mx?")]), _c('p', [_c('span', [_vm._v("Es el portal único de trámites, información y participación ciudadana. ")]), _c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/que-es-gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Leer más")])]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://datos.gob.mx/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Portal de datos abiertos")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/accesibilidad",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Declaración de accesibilidad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/aviso_de_privacidad",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Aviso de privacidad integral")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/privacidadsimplificado",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Aviso de privacidad simplificado")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Términos y Condiciones")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/terminos#medidas-seguridad-informacion",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Política de seguridad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/sitemap",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Mapa de sitio")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Denuncia contra servidores públicos")])]), _c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('ul', {
    staticClass: "lista-redes-sociales"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx m-r-3",
    attrs: {
      "href": "https://www.facebook.com/gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-facebook icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("feisbuk")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-gobmx",
    attrs: {
      "href": "https://twitter.com/gobmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-twitter icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("tuiter.")])])])])])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=1282e6bc&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=style&index=0&id=1282e6bc&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=style&index=0&id=1282e6bc&prod&lang=css&

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue

var script = {}
;


/* normalize component */

var SisdaiPiePaginaGobMx_component = normalizeComponent(
  script,
  SisdaiPiePaginaGobMxvue_type_template_id_1282e6bc_render,
  SisdaiPiePaginaGobMxvue_type_template_id_1282e6bc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiPiePaginaGobMx = (SisdaiPiePaginaGobMx_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/index.js

const pie_pagina_gob_mx_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiPiePaginaGobMx', SisdaiPiePaginaGobMx);
  }
};
/* harmony default export */ var pie_pagina_gob_mx = (pie_pagina_gob_mx_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=f8b3a9c4&
var SisdaiPiePaginaConahcytvue_type_template_id_f8b3a9c4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var SisdaiPiePaginaConahcytvue_type_template_id_f8b3a9c4_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "contenedor conahcyt-fondo-degradado conahcyt-texto-claro-1 conahcyt-piepagina p-y-4",
    attrs: {
      "aria-label": "Conahcyt"
    }
  }, [_c('div', {
    staticClass: "flex flex-wrap"
  }, [_c('div', {
    staticClass: "columna-8 columna-8-esc"
  }, [_c('img', {
    staticClass: "foot-logo",
    attrs: {
      "src": "https://cdn.conacyt.mx/sisdai-archivos/conahcyt-blanco.svg",
      "alt": "Conahcyt",
      "width": "200px",
      "height": "60px"
    }
  }), _c('p', [_vm._v(" Av. Insurgentes Sur 1582, Col. Crédito Constructor,"), _c('br'), _vm._v(" Demarcación Territorial Benito Juárez, C.P. 03940,"), _c('br'), _vm._v(" Ciudad de México Tel: (55) 5322-7700 ")]), _c('p', [_vm._v("©2023 Conahcyt Derechos Reservados en trámite")])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v("Enlaces")]), _c('ul', {
    staticClass: "lista-plana"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/directorio/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Directorio")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/centro-de-contacto-de-atencion/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Centro de Contacto")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://conahcyt.mx/aviso-de-privacidad/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Política de Privacidad")])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "http://comunidad.conahcyt.mx/index.php",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_vm._v("Intranet Conahcyt")])])])]), _c('div', {
    staticClass: "columna-8 columna-4-esc"
  }, [_c('p', {
    staticClass: "titulo-lista"
  }, [_vm._v(" Síguenos en "), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("nuestras redes sociales:")])]), _c('ul', {
    staticClass: "lista-redes-sociales"
  }, [_c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt m-r-3",
    attrs: {
      "href": "https://www.facebook.com/ConahcytMX",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-facebook icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("feisbuk,")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt m-r-3",
    attrs: {
      "href": "https://twitter.com/Conahcyt_Mex",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-twitter icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("tuiter,")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt m-r-3",
    attrs: {
      "href": "https://www.instagram.com/conahcyt_mex/",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-instagram icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("instagram ")])])]), _c('li', [_c('a', {
    staticClass: "hipervinculo-conahcyt",
    attrs: {
      "href": "https://www.youtube.com/@Conahcytmx",
      "target": "_blank",
      "rel": "noopener"
    }
  }, [_c('span', {
    staticClass: "icono-social-youtube icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("yutub")])])])])])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=f8b3a9c4&

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=style&index=0&id=f8b3a9c4&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=style&index=0&id=f8b3a9c4&prod&lang=css&

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue

var SisdaiPiePaginaConahcyt_script = {}
;


/* normalize component */

var SisdaiPiePaginaConahcyt_component = normalizeComponent(
  SisdaiPiePaginaConahcyt_script,
  SisdaiPiePaginaConahcytvue_type_template_id_f8b3a9c4_render,
  SisdaiPiePaginaConahcytvue_type_template_id_f8b3a9c4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiPiePaginaConahcyt = (SisdaiPiePaginaConahcyt_component.exports);
;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/index.js

const pie_pagina_conahcyt_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiPiePaginaConahcyt', SisdaiPiePaginaConahcyt);
  }
};
/* harmony default export */ var pie_pagina_conahcyt = (pie_pagina_conahcyt_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"33a834b4-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=template&id=17e6b268&
var SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _vm.entornoProyecto !== 'production' ? _c('div', {
    attrs: {
      "id": "info_despliegue"
    }
  }, [_c('dl', {
    staticClass: "info-entorno"
  }, [_c('dt', [_vm._v("V")]), _c('dd', [_vm._v(_vm._s(_vm.versionProyecto))]), _c('dt', [_vm._v("Ambiente:")]), _c('dd', [_vm._v(_vm._s(_vm.entornoProyecto))]), _c('dt', [_vm._v("Actualización:")]), _c('dd', [_vm._v(_vm._s(_vm.actualizacionProyecto))])])]) : _vm._e();
};
var SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=script&setup=true&lang=js&
/* harmony default export */ var SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js_ = ({
  __name: 'SisdaiInfoDeDespliegue',
  props: {
    versionProyecto: {
      type: String,
      required: true
    },
    entornoProyecto: {
      type: String,
      required: true
    },
    actualizacionProyecto: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=script&setup=true&lang=js&
 /* harmony default export */ var info_de_despliegue_SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js_ = (SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=style&index=0&id=17e6b268&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=style&index=0&id=17e6b268&prod&lang=css&

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue



;


/* normalize component */

var SisdaiInfoDeDespliegue_component = normalizeComponent(
  info_de_despliegue_SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js_,
  SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_render,
  SisdaiInfoDeDesplieguevue_type_template_id_17e6b268_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiInfoDeDespliegue = (SisdaiInfoDeDespliegue_component.exports);
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/index.js

const info_de_despliegue_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiInfoDeDespliegue', SisdaiInfoDeDespliegue);
  }
};
/* harmony default export */ var info_de_despliegue = (info_de_despliegue_plugin);
;// CONCATENATED MODULE: ./src/componentes/index.js











// EXTERNAL MODULE: external "@popperjs/core"
var core_ = __webpack_require__(5798);
;// CONCATENATED MODULE: ./src/directivas/tooltips/GloboInformacion.js

const GLOBAL_NAME = '__VTOOLTIP__';
globalThis[GLOBAL_NAME] = globalThis[GLOBAL_NAME] || {};
const globo_informacion = {
  name: 'globo-informacion',
  bind(el, binding) {
    const unique_id = Math.random().toString(36).substring(4);
    el.setAttribute('host-tooltip-id', unique_id);
    const modifiers = binding.modifiers;
    const interactable = modifiers['interactivo'] ? true : false;
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-globo-info',
      interactable: interactable
    };
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id');

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    const props = globalThis[GLOBAL_NAME][unique_id];
    props.placement = placement;
    props.offset = offset;
    props.value = binding.value;
    updateTooltipElement(unique_id, props.value);
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id');
    const props = globalThis[GLOBAL_NAME][unique_id];
    el.removeEventListener('focusin', props.mouseEnterListener);
    el.removeEventListener('focusout', props.mouseLeaveListener);
    el.removeEventListener('mouseenter', props.mouseEnterListener);
    el.removeEventListener('mouseleave', props.mouseLeaveListener);
  }
};
const globo_informacion_extendido = {
  name: 'globo-informacion-extendido',
  bind(el, binding) {
    const unique_id = 'info-' + Math.random().toString(36).substring(4);
    el.setAttribute('host-tooltip-id', unique_id);
    const modifiers = binding.modifiers;
    const interactable = modifiers['interactivo'] ? true : false;
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    globalThis[GLOBAL_NAME][unique_id] = {
      placement: placement,
      offset: offset,
      value: binding.value,
      mouseEnterListener: addMouseEnterListenerTooltip(el, unique_id),
      mouseLeaveListener: addMouseLeaveListenerTooltip(el, unique_id),
      classTooltip: 'contenedor-globo-info-ext',
      interactable: interactable
    };
  },
  update(el, binding) {
    let unique_id = el.getAttribute('host-tooltip-id');

    //volviendo a leer lo que haya cambiado del binding
    const placement_es = binding.arg ? binding.arg : 'derecha';
    const placement = getPosicionParaPopper(placement_es);
    let offset = offsetsBase[placement.split('-')[0]];
    if (typeof binding.value === 'object') {
      offset = binding.value['desfase'] ? binding.value['desfase'] : offset;
    }
    const props = globalThis[GLOBAL_NAME][unique_id];
    props.placement = placement;
    props.offset = offset;
    props.value = binding.value;
    updateTooltipElement(unique_id, props.value);
  },
  unbind(el) {
    let unique_id = el.getAttribute('host-tooltip-id');
    const props = globalThis[GLOBAL_NAME][unique_id];
    el.removeEventListener('focusin', props.mouseEnterListener);
    el.removeEventListener('focusout', props.mouseLeaveListener);
    el.removeEventListener('mouseenter', props.mouseEnterListener);
    el.removeEventListener('mouseleave', props.mouseLeaveListener);
  }
};
const addMouseEnterListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];

    //revisar que no exista un timer para limpiar el toltip, si no cancelarlo, ya que esta funcion creara otro
    if ('timerToClear' in globalProps) {
      cancelTimerToRemove(globalProps);
      return;
    }
    removeAllTooltips();
    const tooltip = getTooltipElement(unique_id, globalProps.value, globalProps.classTooltip, el);
    let elementToDesignate = el;
    if (typeof globalProps.value === 'object') {
      elementToDesignate = globalProps.value['asignadoAElemento'] ? document.querySelector(globalProps.value['asignadoAElemento']) : el;
    }
    (0,core_.createPopper)(elementToDesignate, tooltip, {
      placement: globalProps.placement,
      modifiers: [{
        name: 'offset',
        options: {
          offset: globalProps.offset
        }
      }]
    });
  };
  el.addEventListener('focus', fn);
  el.addEventListener('mouseenter', fn);
  return fn;
};
const addMouseLeaveListenerTooltip = (el, unique_id) => {
  const fn = () => {
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];
    //const tooltip = getTooltipElement(unique_id,globalProps.value, globalProps.classTooltip)

    if (globalProps.interactable) {
      waitToRemoveTooltip(unique_id);
      const tooltip = getTooltipElement(unique_id, globalProps.value, globalProps.classTooltip, el);
      tooltip.addEventListener('focusin', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps);
      });
      tooltip.addEventListener('focusout', () => {
        //console.log("listener invocado");
        waitToRemoveTooltip(unique_id, 500);
      });
      tooltip.addEventListener('mouseenter', () => {
        //console.log("listener invocado");
        cancelTimerToRemove(globalProps);
      });
      tooltip.addEventListener('mouseleave', () => {
        waitToRemoveTooltip(unique_id, 500);
        //removeTooltip(unique_id)
      });

      return;
    }
    removeTooltip(unique_id);
  };
  el.addEventListener('mouseleave', fn);
  el.addEventListener('focusout', fn);
  return fn;
};

/**
 * Espera antes de remover un tooltip, 1 segundo de tiempo por default
 * @param {*} unique_id identificador del tooltip
 * @param {number} ms 1000 milisegundos
 */
const waitToRemoveTooltip = (unique_id, ms = 1000) => {
  const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][unique_id];
  cancelTimerToRemove(globalProps);
  const timer = setTimeout(() => {
    removeTooltip(unique_id);
    delete globalProps['timerToClear'];
  }, ms);
  globalProps['timerToClear'] = timer;
};
const cancelTimerToRemove = propsOfTooltip => {
  if ('timerToClear' in propsOfTooltip) {
    //console.log("cancelando el removido porque volvio a entrar")
    const timer = propsOfTooltip['timerToClear'];
    clearTimeout(timer);
    delete propsOfTooltip['timerToClear'];
    //return
  }
};

const removeTooltip = unique_id => {
  if (document.querySelector("[tooltip-id='" + unique_id + "']") !== null) {
    document.querySelector("[tooltip-id='" + unique_id + "']").remove();
  }
};
const removeAllTooltips = () => {
  const tooltips = globalThis.document.querySelectorAll('[tooltip-id]');
  tooltips.forEach(tooltip => {
    const id = tooltip.getAttribute('tooltip-id');
    const globalProps = globalThis[GLOBAL_NAME] && globalThis[GLOBAL_NAME][id];
    cancelTimerToRemove(globalProps);
    tooltip.remove();
  });
};

/**
 *  Create if not exists
 * @param {string} id
 * @param {object} value
 * @param {string} classTooltip
 * @returns
 */

function getTooltipElement(id, value, classTooltip, elemento) {
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    return document.querySelector("[tooltip-id='" + id + "']");
  }
  //crearlo
  const tooltip = document.createElement('div');
  tooltip.setAttribute('tooltip-id', id);
  tooltip.classList.add(classTooltip);
  let contenido = typeof value === 'object' ? value['contenido'] : value;
  tooltip.innerHTML = `<div class="cuerpo-globo-info">${contenido}</div>`;
  //document.body.appendChild(tooltip)
  elemento.parentNode.insertBefore(tooltip, elemento.nextSibling);
  return tooltip;
}
function updateTooltipElement(id, value) {
  //solo se actualiza si existe
  if (document.querySelector("[tooltip-id='" + id + "']")) {
    const tooltip = document.querySelector("[tooltip-id='" + id + "']");
    let contenido = typeof value === 'object' ? value['contenido'] : value;
    tooltip.innerHTML = `<div class="cuerpo">${contenido}</div>`;
  }
}
const posiciones_espanol = {
  'izquierda-inicio': 'left-start',
  izquierda: 'left',
  'izquierda-final': 'left-end',
  'derecha-inicio': 'right-start',
  derecha: 'right',
  'derecha-final': 'right-end',
  'arriba-inicio': 'top-start',
  arriba: 'top',
  'arriba-final': 'top-end',
  'abajo-inicio': 'bottom-start',
  abajo: 'bottom',
  'abajo-final': 'bottom-end',
  inicio: 'start',
  final: 'end'
};
function getPosicionParaPopper(posicion_es) {
  return posiciones_espanol[posicion_es];
}
const offsetsBase = {
  top: [0, 8],
  bottom: [0, 8],
  right: [0, 8],
  left: [0, 8]
};

;// CONCATENATED MODULE: ./src/directivas/tooltips/index.js

const tooltips_plugin = {
  install: function (Vue) {
    Vue.directive(globo_informacion.name, globo_informacion);
    Vue.directive(globo_informacion_extendido.name, globo_informacion_extendido);
  }
};
/* harmony default export */ var tooltips = (tooltips_plugin);
;// CONCATENATED MODULE: ./src/directivas/index.js


;// CONCATENATED MODULE: ./src/index.js


const src_plugin = {
  install: function (Vue) {
    //UI base
    Vue.use(navegacion_gob_mx);
    Vue.use(navegacion_principal);
    Vue.use(pie_pagina_gob_mx);
    Vue.use(pie_pagina_conahcyt);
    Vue.use(colapsable_navegacion);
    Vue.use(menu_lateral);
    Vue.use(indice_de_contenido);
    Vue.use(info_de_despliegue);
    //accesibilidad
    Vue.use(menu_accesibilidad);
    //auxiliares
    Vue.use(tooltips);
    //otros
    Vue.use(narrativa_scroll);
    Vue.use(boton_flotante);
  }
};

/* harmony default export */ var src_0 = (src_plugin);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_0);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});