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

/***/ 5798:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5798__;

/***/ }),

/***/ 7203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7203__;

/***/ }),

/***/ 509:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(9985);
var tryToString = __webpack_require__(3691);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 5027:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(8999);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 4328:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(5290);
var toAbsoluteIndex = __webpack_require__(7578);
var lengthOfArrayLike = __webpack_require__(6310);

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

/***/ 5649:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(7697);
var isArray = __webpack_require__(2297);

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
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 6648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 8758:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(6812);
var ownKeys = __webpack_require__(9152);
var getOwnPropertyDescriptorModule = __webpack_require__(2474);
var definePropertyModule = __webpack_require__(2560);

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

/***/ 5773:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(7697);
var definePropertyModule = __webpack_require__(2560);
var createPropertyDescriptor = __webpack_require__(5684);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 5684:
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

/***/ 1880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(9985);
var definePropertyModule = __webpack_require__(2560);
var makeBuiltIn = __webpack_require__(8702);
var defineGlobalProperty = __webpack_require__(5014);

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

/***/ 5014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);

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

/***/ 7697:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(3689);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 2659:
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

/***/ 6420:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);
var isObject = __webpack_require__(8999);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 5565:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 71:
/***/ (function(module) {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 3615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);
var userAgent = __webpack_require__(71);

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

/***/ 2739:
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

/***/ 9989:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);
var getOwnPropertyDescriptor = (__webpack_require__(2474).f);
var createNonEnumerableProperty = __webpack_require__(5773);
var defineBuiltIn = __webpack_require__(1880);
var defineGlobalProperty = __webpack_require__(5014);
var copyConstructorProperties = __webpack_require__(8758);
var isForced = __webpack_require__(5266);

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

/***/ 3689:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 7215:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(3689);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 2615:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(7215);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 1236:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(7697);
var hasOwn = __webpack_require__(6812);

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

/***/ 8844:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(7215);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 6058:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);
var isCallable = __webpack_require__(9985);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 4849:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(509);
var isNullOrUndefined = __webpack_require__(981);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 9037:
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
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6812:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);
var toObject = __webpack_require__(690);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 7248:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 8506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(7697);
var fails = __webpack_require__(3689);
var createElement = __webpack_require__(6420);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 4413:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);
var fails = __webpack_require__(3689);
var classof = __webpack_require__(6648);

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

/***/ 6738:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);
var isCallable = __webpack_require__(9985);
var store = __webpack_require__(4091);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 618:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(9834);
var global = __webpack_require__(9037);
var isObject = __webpack_require__(8999);
var createNonEnumerableProperty = __webpack_require__(5773);
var hasOwn = __webpack_require__(6812);
var shared = __webpack_require__(4091);
var sharedKey = __webpack_require__(2713);
var hiddenKeys = __webpack_require__(7248);

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
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
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
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
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
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
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

/***/ 2297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(6648);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 9985:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var $documentAll = __webpack_require__(2659);

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 5266:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(3689);
var isCallable = __webpack_require__(9985);

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

/***/ 981:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 8999:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(9985);
var $documentAll = __webpack_require__(2659);

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 3931:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 734:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(6058);
var isCallable = __webpack_require__(9985);
var isPrototypeOf = __webpack_require__(3622);
var USE_SYMBOL_AS_UID = __webpack_require__(9525);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(3126);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 8702:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);
var fails = __webpack_require__(3689);
var isCallable = __webpack_require__(9985);
var hasOwn = __webpack_require__(6812);
var DESCRIPTORS = __webpack_require__(7697);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(1236).CONFIGURABLE);
var inspectSource = __webpack_require__(6738);
var InternalStateModule = __webpack_require__(618);

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

/***/ 8828:
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

/***/ 2560:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(7697);
var IE8_DOM_DEFINE = __webpack_require__(8506);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(5648);
var anObject = __webpack_require__(5027);
var toPropertyKey = __webpack_require__(8360);

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
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 2474:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(7697);
var call = __webpack_require__(2615);
var propertyIsEnumerableModule = __webpack_require__(9556);
var createPropertyDescriptor = __webpack_require__(5684);
var toIndexedObject = __webpack_require__(5290);
var toPropertyKey = __webpack_require__(8360);
var hasOwn = __webpack_require__(6812);
var IE8_DOM_DEFINE = __webpack_require__(8506);

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

/***/ 2741:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(4948);
var enumBugKeys = __webpack_require__(2739);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 7518:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 3622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 4948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);
var hasOwn = __webpack_require__(6812);
var toIndexedObject = __webpack_require__(5290);
var indexOf = (__webpack_require__(4328).indexOf);
var hiddenKeys = __webpack_require__(7248);

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

/***/ 9556:
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

/***/ 5899:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2615);
var isCallable = __webpack_require__(9985);
var isObject = __webpack_require__(8999);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 9152:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(6058);
var uncurryThis = __webpack_require__(8844);
var getOwnPropertyNamesModule = __webpack_require__(2741);
var getOwnPropertySymbolsModule = __webpack_require__(7518);
var anObject = __webpack_require__(5027);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 4684:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(981);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 2713:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(3430);
var uid = __webpack_require__(4630);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 4091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);
var defineGlobalProperty = __webpack_require__(5014);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ 3430:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(3931);
var store = __webpack_require__(4091);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.34.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 146:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(3615);
var fails = __webpack_require__(3689);
var global = __webpack_require__(9037);

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

/***/ 7578:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(8700);

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

/***/ 5290:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(4413);
var requireObjectCoercible = __webpack_require__(4684);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 8700:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(8828);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 3126:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(8700);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 690:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(4684);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 8732:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2615);
var isObject = __webpack_require__(8999);
var isSymbol = __webpack_require__(734);
var getMethod = __webpack_require__(4849);
var ordinaryToPrimitive = __webpack_require__(5899);
var wellKnownSymbol = __webpack_require__(4201);

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
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 8360:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(8732);
var isSymbol = __webpack_require__(734);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 3691:
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

/***/ 4630:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(8844);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 9525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(146);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 5648:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(7697);
var fails = __webpack_require__(3689);

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

/***/ 9834:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);
var isCallable = __webpack_require__(9985);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 4201:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(9037);
var shared = __webpack_require__(3430);
var hasOwn = __webpack_require__(6812);
var uid = __webpack_require__(4630);
var NATIVE_SYMBOL = __webpack_require__(146);
var USE_SYMBOL_AS_UID = __webpack_require__(9525);

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

/***/ 560:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(9989);
var toObject = __webpack_require__(690);
var lengthOfArrayLike = __webpack_require__(6310);
var setArrayLength = __webpack_require__(5649);
var doesNotExceedSafeInteger = __webpack_require__(5565);
var fails = __webpack_require__(3689);

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

// UNUSED EXPORTS: GlobosInformacion, SisdaiBotonFlotante, SisdaiColapsableNavegacion, SisdaiEnlaceExterno, SisdaiImagenPngWebp, SisdaiIndiceDeContenido, SisdaiInfoDeDespliegue, SisdaiMenuAccesibilidad, SisdaiMenuLateral, SisdaiModal, SisdaiNarrativaScroll, SisdaiNavegacionGobMx, SisdaiNavegacionPrincipal, SisdaiPiePaginaConahcyt, SisdaiPiePaginaGobMx

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

;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=template&id=340e856c
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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiNarrativaScrollvue_type_script_setup_true_lang_js = ({
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
;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var narrativa_scroll_SisdaiNarrativaScrollvue_type_script_setup_true_lang_js = (SisdaiNarrativaScrollvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=340e856c&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/narrativa-scroll/SisdaiNarrativaScroll.vue?vue&type=style&index=0&id=340e856c&prod&lang=css

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
  narrativa_scroll_SisdaiNarrativaScrollvue_type_script_setup_true_lang_js,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=template&id=5a4414ba
var SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-colapsable",
    class: {
      activo: _setup._colapsado
    }
  }, [_c('button', {
    staticClass: "colapsable-boton p-x-5-esc p-x-3-mov p-y-1",
    attrs: {
      "aria-expanded": _setup._colapsado,
      "tabindex": _setup.avisarMenuLateral ? undefined : -1
    },
    on: {
      "click": function ($event) {
        _setup._colapsado = !_setup._colapsado;
      }
    }
  }, [_c('div', {
    staticClass: "contenedor-encabezado-colapsable"
  }, [_vm._t("encabezado", function () {
    return [_c('p', {
      staticClass: "m-0"
    }, [_vm._v("Encabezado colapsable")])];
  })], 2), _vm._m(0)]), _c('div', {
    staticClass: "contenedor-colapsable-contenido"
  }, [_vm._t("contenido", function () {
    return [_c('ul', {
      attrs: {
        "id": _setup.id_aleatorio
      }
    }, [_c('li', [_c('a', {
      staticClass: "p-x-5-esc p-x-3-mov p-y-1",
      attrs: {
        "href": "https://codigo.conahcyt.mx/sisdai/sisdai-componentes",
        "target": "_blank",
        "tabindex": _setup._colapsado ? undefined : -1
      }
    }, [_vm._v(" Elemento desplegado")])])])];
  })], 2)]);
};
var SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "p-t-1"
  }, [_c('span', {
    staticClass: "nav-boton-submenu",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}];

;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=template&id=5a4414ba

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiColapsableNavegacion',
  props: {
    titulo: {
      type: String,
      default: 'Titulo de colapsable'
    },
    colapsado: {
      type: Boolean,
      default: false
    },
    avisarMenuLateral: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;

    // eslint-disable-next-line
    const {
      colapsado,
      avisarMenuLateral
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);
    const _colapsado = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(colapsado.value);
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(colapsado, nv => _colapsado.value = nv);
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();

    //const emits = defineEmits(['alAlternarColapsable'])

    /*watch(esta_activo, () => {
      emits('alAlternarColapsable', esta_activo.value)
    })*/

    return {
      __sfc: true,
      props,
      colapsado,
      avisarMenuLateral,
      _colapsado,
      idAleatorio,
      id_aleatorio
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var colapsable_navegacion_SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js = (SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/colapsable-navegacion/SisdaiColapsableNavegacion.vue





/* normalize component */
;
var SisdaiColapsableNavegacion_component = normalizeComponent(
  colapsable_navegacion_SisdaiColapsableNavegacionvue_type_script_setup_true_lang_js,
  SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_render,
  SisdaiColapsableNavegacionvue_type_template_id_5a4414ba_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=template&id=afd48694
var SisdaiMenuLateralvue_type_template_id_afd48694_render = function render() {
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
    return [_c('ul', {
      staticClass: "colapsable-submenu"
    }, [_c('li', [_c('a', {
      staticClass: "p-x-5-esc p-x-3-mov p-y-1",
      attrs: {
        "href": "#anchore",
        "tabindex": _setup.menu_abierto ? undefined : -1
      }
    }, [_vm._v(" anchore link prueba ")])]), _c('li', [_c('a', {
      staticClass: "p-x-5-esc p-x-3-mov p-y-1",
      attrs: {
        "href": "https://codigo.conahcyt.mx/sisdai/sisdai-componentes",
        "rel": "noopener",
        "target": "_blank",
        "tabindex": _setup.menu_abierto ? undefined : -1
      }
    }, [_c('span', {
      staticClass: "icono-social-github",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" ejemplo github ")])])])];
  })], 2)])]);
};
var SisdaiMenuLateralvue_type_template_id_afd48694_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiMenuLateralvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiMenuLateral',
  emits: ['alAlternarMenu'],
  setup(__props, {
    emit: emits
  }) {
    const menu_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
    const contenidoMenuLateral = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(null);
    if (typeof window !== 'undefined') {
      menu_abierto.value = window.innerWidth < 768 ? false : true;
    }
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(menu_abierto, () => {
      emits('alAlternarMenu', menu_abierto.value);
    });
    return {
      __sfc: true,
      menu_abierto,
      contenidoMenuLateral,
      idAleatorio,
      id_aleatorio,
      emits
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/SisdaiMenuLateral.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var menu_lateral_SisdaiMenuLateralvue_type_script_setup_true_lang_js = (SisdaiMenuLateralvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/menu-lateral/SisdaiMenuLateral.vue





/* normalize component */
;
var SisdaiMenuLateral_component = normalizeComponent(
  menu_lateral_SisdaiMenuLateralvue_type_script_setup_true_lang_js,
  SisdaiMenuLateralvue_type_template_id_afd48694_render,
  SisdaiMenuLateralvue_type_template_id_afd48694_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=template&id=69ae586f
var SisdaiMenuAccesibilidadvue_type_template_id_69ae586f_render = function render() {
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
    return _c('div', {
      key: `opcion-accesibilidad-${idx}`,
      staticClass: "controlador-vis m-y-1"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _setup.clasesSelecciondas,
        expression: "clasesSelecciondas"
      }],
      attrs: {
        "id": `${opcion.claseCss}_${_setup.id}`,
        "type": "checkbox",
        "tabindex": _setup.menuAccesibilidadEstaAbierto ? undefined : -1
      },
      domProps: {
        "value": opcion.claseCss,
        "checked": Array.isArray(_setup.clasesSelecciondas) ? _vm._i(_setup.clasesSelecciondas, opcion.claseCss) > -1 : _setup.clasesSelecciondas
      },
      on: {
        "change": function ($event) {
          var $$a = _setup.clasesSelecciondas,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = opcion.claseCss,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_setup.clasesSelecciondas = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_setup.clasesSelecciondas = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _setup.clasesSelecciondas = $$c;
          }
        }
      }
    }), _c('label', {
      attrs: {
        "for": `${opcion.claseCss}_${_setup.id}`
      }
    }, [_c('span', {
      staticClass: "figura-variable icono-4",
      class: opcion.icono,
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('span', {
      staticClass: "nombre-variable"
    }, [_c('b', [_vm._v(" " + _vm._s(opcion.titulo) + " ")])])])]);
  }), _c('button', {
    staticClass: "hipervinculo",
    attrs: {
      "tabindex": _setup.menuAccesibilidadEstaAbierto ? undefined : -1,
      "disabled": !_setup.clasesSelecciondas.length
    },
    on: {
      "click": _setup.restablecer
    }
  }, [_c('b', [_vm._v("Restablecer")])])], 2)]);
};
var SisdaiMenuAccesibilidadvue_type_template_id_69ae586f_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(560);
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
  accion: 'alternarTipografiaAccesible',
  claseCss: 'a11y-tipografia',
  icono: 'icono-cambio-tipografia',
  titulo: 'Cambio de fuente'
}, {
  accion: 'alternarEnlacesSubrayados',
  claseCss: 'a11y-hipervinculos',
  icono: 'icono-enlace-subrayado',
  titulo: 'Enlaces subrayados'
}, {
  accion: 'alternarVistaSimplificada',
  claseCss: 'a11y-simplificada',
  icono: 'icono-vista-simplificada',
  titulo: 'Mostrar solo texto'
}, {
  accion: 'alternarVistaOscura',
  claseCss: 'a11y-oscura',
  icono: 'icono-contraste',
  titulo: 'Vista Oscura'
}]);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js




// import store from '../../stores/accesibilidad'

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
  },
  /**
   * id Aleatorio.
   */
  id: {
    type: String,
    default: 'menu_accesibilidad'
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

/**
 * Devuelve una cadena de texto aleatoreo.
 * @returns {String}
 */
// function idAleatorio() {
//   return Math.random().toString(36).substring(2)
// }

/* harmony default export */ var SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiMenuAccesibilidad',
  props: propiedades,
  emits: Object.values(eventos),
  setup(__props, {
    expose,
    emit: emits
  }) {
    const props = __props;
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.useCssVars)((_vm, _setup) => ({
      "87415f34": _setup.alturaMenuAbierto
    }));
    const {
      agregarOpciones,
      id,
      objetoStore,
      nombreModuloStore
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
     * Ejecuta un cambio en el store si dicho objeto permite hacer commits (si se esta usando la
     * pripiedad `objetoStore`).
     * @param {String} accion nombre del mutation en el modulo del store.
     * @param {Array<String>} valor es decir las clases seleccionadas.
     */
    function ejecutarEnStore(accion, valor) {
      if (objetoStore.value !== undefined && Object.prototype.hasOwnProperty.call(objetoStore.value, 'commit')) {
        objetoStore.value.commit(`${nombreModuloStore.value}/${accion}`, valor);
      }
    }

    /**
     * Desencadena el emit 'alRestablecer' al mismo tiempo que cierra el menú.
     */
    function restablecer() {
      clasesSelecciondas.value = [];
      emits(eventos.alRestablecer);
      ejecutarEnStore('restablecer');
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.watch)(clasesSelecciondas, (nv, ov) => {
      ejecutarEnStore('modificarClasesAccesibles', nv);
      if (nv.find(clase => clase === 'a11y-oscura') && !ov.find(clase => clase === 'a11y-oscura')) {
        // poner
        if (tema.value === 'auto') {
          ejecutarEnStore('alternarVistaOscura', nv);
        }
        tema.value = 'oscura';
        localStorage.setItem('theme', tema.value);
      }
      if (!nv.find(clase => clase === 'a11y-oscura') && ov.find(clase => clase === 'a11y-oscura')) {
        // quitar
        if (tema.value === 'auto') {
          ejecutarEnStore('alternarVistaOscura', nv);
        }
        tema.value = 'clara';
        localStorage.setItem('theme', tema.value);
      }
    });

    /**
     * Módulo de vista oscura.
     */
    const tema = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('auto'); // 'oscura' | 'clara' | 'auto'
    localStorage.setItem('theme', tema.value);
    const perfil = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)('eni'); // 'eni' | 'sisdai' | 'gema'

    // function alternarTema() {
    //   //rotar entre estos 3 valores
    //   const themes = ['clara', 'oscura', 'auto']
    //   tema.value = themes[(themes.indexOf(tema.value) + 1) % 3]

    //   localStorage.setItem('theme', tema.value)
    // }

    /**
     * Elige el tema en el documento en modo oscuro,
     * si la variable del query es dark y el tema del store es auto
     * ó si el tema del store es oscuro.
     */
    function elegirTemaEnDocumento() {
      const modoOscuro = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && tema.value === 'auto' || tema.value === 'oscura';
      // Asignar el perfil de color para el atributo css del query.
      if (perfil.value !== null) {
        document.documentElement.setAttribute(
        // se puede nombrar como quieras.
        `data-dark-theme-${perfil.value}`, modoOscuro);
        document.documentElement.setAttribute(
        // se puede nombrar como quieras.
        `data-light-theme-${perfil.value}`, !modoOscuro);
        // Agrega claseSeleccionada .a11y-oscura
        if (modoOscuro && !clasesSelecciondas.value.includes('a11y-oscura')) {
          // Esta línea es necesaria para tener un registro de las clases
          // seleccionadas y para checkear la opción en el menú
          clasesSelecciondas.value.push('a11y-oscura');
          // Esta línea es necesaria para poner la clase en el html
          ejecutarEnStore('modificarClasesAccesibles', 'a11y-oscura');
        } else {
          // clasesSelecciondas.value = clasesSelecciondas.value.filter(
          //   clase => clase !== 'a11y-oscura'
          // )
        }
      }
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
    //   tema.value = localStorage.getItem('theme')
    // }

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
     * Altura en pixeles del menú abierto, se calcula dando 50 pixeles a cada opción sumando la
     * opción de restablecer y el titulo del menú.
     */
    const alturaMenuAbierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => `${(opciones.value.length + 1) * 48 + 145}px`);
    return {
      __sfc: true,
      propiedades,
      eventos,
      props,
      emits,
      agregarOpciones,
      id,
      objetoStore,
      nombreModuloStore,
      opciones,
      menuAccesibilidadEstaAbierto,
      clasesSelecciondas,
      ejecutarEnStore,
      restablecer,
      tema,
      perfil,
      elegirTemaEnDocumento,
      alternarAbiertoCerrado,
      alturaMenuAbierto
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js = (SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=style&index=0&id=69ae586f&prod&lang=scss
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue?vue&type=style&index=0&id=69ae586f&prod&lang=scss

;// CONCATENATED MODULE: ./src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad.vue



;


/* normalize component */

var SisdaiMenuAccesibilidad_component = normalizeComponent(
  menu_accesibilidad_SisdaiMenuAccesibilidadvue_type_script_setup_true_lang_js,
  SisdaiMenuAccesibilidadvue_type_template_id_69ae586f_render,
  SisdaiMenuAccesibilidadvue_type_template_id_69ae586f_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=template&id=4ca57805
var SisdaiBotonFlotantevue_type_template_id_4ca57805_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "contenedor-boton-flotante",
    class: {
      abierto: _setup.botonFlotanteEstaAbierto
    },
    attrs: {
      "id": _setup.id_aleatorio
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
      class: `enlace p-x-2 borde-redondeado-0 ${clasesCss === undefined ? '' : clasesCss}`,
      attrs: {
        "id": `boton_flotante_enlace_${idx}`,
        "href": enlace,
        "target": "_blank",
        "rel": "noopener noreferrer",
        "tabindex": _setup.botonFlotanteEstaAbierto ? undefined : -1
      }
    }, [_c('span', {
      class: `icono ${icono === undefined ? 'icono-enlace-externo' : icono}`,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" " + _vm._s(contenido === undefined ? 'Enlace externo' : contenido) + " ")]);
  }), 0)]);
};
var SisdaiBotonFlotantevue_type_template_id_4ca57805_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=script&setup=true&lang=js

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
/* harmony default export */ var SisdaiBotonFlotantevue_type_script_setup_true_lang_js = ({
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
    function idAleatorio() {
      return Math.random().toString(36).substring(2);
    }
    const id_aleatorio = idAleatorio();
    return {
      __sfc: true,
      propiedades: SisdaiBotonFlotantevue_type_script_setup_true_lang_js_propiedades,
      props,
      enlaces,
      botonFlotanteEstaAbierto,
      alternarEstado,
      idAleatorio,
      id_aleatorio
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/SisdaiBotonFlotante.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var boton_flotante_SisdaiBotonFlotantevue_type_script_setup_true_lang_js = (SisdaiBotonFlotantevue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/boton-flotante/SisdaiBotonFlotante.vue





/* normalize component */
;
var SisdaiBotonFlotante_component = normalizeComponent(
  boton_flotante_SisdaiBotonFlotantevue_type_script_setup_true_lang_js,
  SisdaiBotonFlotantevue_type_template_id_4ca57805_render,
  SisdaiBotonFlotantevue_type_template_id_4ca57805_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=a9ac8aea
var SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_render = function render() {
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
    staticClass: "nav-menu-complementario"
  }, [_vm._t("complementario")], 2), _c('div', {
    ref: "cuadroElementosMenu",
    staticClass: "nav-menu-principal",
    on: {
      "click": _setup.alternarMenu
    }
  }, [_vm._t("default", function () {
    return [_vm._m(1)];
  })], 2)])]);
};
var SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=template&id=a9ac8aea

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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=script&setup=true&lang=js


/* harmony default export */ var SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js = ({
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
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var navegacion_principal_SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js = (SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-principal/SisdaiNavegacionPrincipal.vue





/* normalize component */
;
var SisdaiNavegacionPrincipal_component = normalizeComponent(
  navegacion_principal_SisdaiNavegacionPrincipalvue_type_script_setup_true_lang_js,
  SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_render,
  SisdaiNavegacionPrincipalvue_type_template_id_a9ac8aea_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=template&id=1a8fe0af
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

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=script&setup=true&lang=js

/* harmony default export */ var SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js = ({
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
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var indice_de_contenido_SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js = (SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/indice-de-contenido/SisdaiIndiceDeContenido.vue





/* normalize component */
;
var SisdaiIndiceDeContenido_component = normalizeComponent(
  indice_de_contenido_SisdaiIndiceDeContenidovue_type_script_setup_true_lang_js,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=19aa1ecb
var SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_render = function render() {
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
var SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_staticRenderFns = [function () {
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

;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=template&id=19aa1ecb

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=script&setup=true&lang=js



//Que el menu se pueda cerrar automaticamente al enfocar otra cosa

/* harmony default export */ var SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js = ({
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
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var navegacion_gob_mx_SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js = (SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/navegacion-gob-mx/SisdaiNavegacionGobMx.vue





/* normalize component */
;
var SisdaiNavegacionGobMx_component = normalizeComponent(
  navegacion_gob_mx_SisdaiNavegacionGobMxvue_type_script_setup_true_lang_js,
  SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_render,
  SisdaiNavegacionGobMxvue_type_template_id_19aa1ecb_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=1915ec7e
var SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_staticRenderFns = [function () {
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
    staticClass: "icono-social-x icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("x.")])])])])])])]);
}];

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=template&id=1915ec7e

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=style&index=0&id=1915ec7e&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue?vue&type=style&index=0&id=1915ec7e&prod&lang=css

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-gob-mx/SisdaiPiePaginaGobMx.vue

var script = {}
;


/* normalize component */

var SisdaiPiePaginaGobMx_component = normalizeComponent(
  script,
  SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_render,
  SisdaiPiePaginaGobMxvue_type_template_id_1915ec7e_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=830c3a28
var SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_staticRenderFns = [function () {
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
    staticClass: "icono-social-x icono-3",
    attrs: {
      "aria-hidden": "true"
    }
  }), _c('span', {
    staticClass: "a11y-solo-lectura"
  }, [_vm._v("x,")])])]), _c('li', [_c('a', {
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

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=template&id=830c3a28

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=style&index=0&id=830c3a28&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue?vue&type=style&index=0&id=830c3a28&prod&lang=css

;// CONCATENATED MODULE: ./src/componentes/pie-pagina-conahcyt/SisdaiPiePaginaConahcyt.vue

var SisdaiPiePaginaConahcyt_script = {}
;


/* normalize component */

var SisdaiPiePaginaConahcyt_component = normalizeComponent(
  SisdaiPiePaginaConahcyt_script,
  SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_render,
  SisdaiPiePaginaConahcytvue_type_template_id_830c3a28_staticRenderFns,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=template&id=17e6b268
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

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ var SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js = ({
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
;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var info_de_despliegue_SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js = (SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=style&index=0&id=17e6b268&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue?vue&type=style&index=0&id=17e6b268&prod&lang=css

;// CONCATENATED MODULE: ./src/componentes/info-de-despliegue/SisdaiInfoDeDespliegue.vue



;


/* normalize component */

var SisdaiInfoDeDespliegue_component = normalizeComponent(
  info_de_despliegue_SisdaiInfoDeDesplieguevue_type_script_setup_true_lang_js,
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
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=template&id=62bfe724&scoped=true
var SisdaiModalvue_type_template_id_62bfe724_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_setup.esta_abierto ? _c('div', {
    staticClass: "modal",
    class: _setup.overflowYX
  }, [_c('div', {
    staticClass: "modal-fondo-trasero",
    on: {
      "click": function ($event) {
        return _setup.cerrarModal();
      }
    }
  }), _c('div', {
    staticClass: "modal-contenedor",
    class: _setup.tamanio
  }, [_c('div', {
    staticClass: "modal-encabezado"
  }, [_vm._t("encabezado"), _c('button', {
    staticClass: "btn-icono icono-cerrar modal-cerrar",
    on: {
      "click": function ($event) {
        return _setup.cerrarModal();
      }
    }
  })], 2), _c('div', {
    staticClass: "modal-cuerpo"
  }, [_vm._t("cuerpo")], 2), _c('div', {
    staticClass: "modal-pie"
  }, [_vm._t("pie")], 2)])]) : _vm._e()]);
};
var SisdaiModalvue_type_template_id_62bfe724_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=script&setup=true&lang=js

const SisdaiModalvue_type_script_setup_true_lang_js_propiedades = {
  tamanio: {
    type: String,
    default: 'chico'
  }
};
/* harmony default export */ var SisdaiModalvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiModal',
  props: SisdaiModalvue_type_script_setup_true_lang_js_propiedades,
  setup(__props) {
    const props = __props;
    const esta_abierto = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
    const {
      tamanio
    } = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toRefs)(props);
    function cerrarModal() {
      esta_abierto.value = false;
      document.querySelector('body').classList.remove('overflow-hidden');
    }
    /* eslint-disable */
    function abrirModal() {
      esta_abierto.value = true;
      document.querySelector('body').classList.add('overflow-hidden');
    }
    function onEscapeKeyUp(event) {
      if (event.which === 27) {
        cerrarModal();
      }
    }
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeMount)(() => {
      window.addEventListener('keyup', onEscapeKeyUp);
    });
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeUnmount)(() => {
      window.removeEventListener('keyup', onEscapeKeyUp);
    });
    const overflowYX = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => {
      if (tamanio.value === 'pantalla-completa') {
        return 'overflow-x-y';
      }
      return '';
    });
    return {
      __sfc: true,
      propiedades: SisdaiModalvue_type_script_setup_true_lang_js_propiedades,
      esta_abierto,
      props,
      tamanio,
      cerrarModal,
      abrirModal,
      onEscapeKeyUp,
      overflowYX
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var modal_SisdaiModalvue_type_script_setup_true_lang_js = (SisdaiModalvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/@vue/cli-service/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/modal/SisdaiModal.vue?vue&type=style&index=0&id=62bfe724&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue?vue&type=style&index=0&id=62bfe724&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./src/componentes/modal/SisdaiModal.vue



;


/* normalize component */

var SisdaiModal_component = normalizeComponent(
  modal_SisdaiModalvue_type_script_setup_true_lang_js,
  SisdaiModalvue_type_template_id_62bfe724_scoped_true_render,
  SisdaiModalvue_type_template_id_62bfe724_scoped_true_staticRenderFns,
  false,
  null,
  "62bfe724",
  null
  
)

/* harmony default export */ var SisdaiModal = (SisdaiModal_component.exports);
;// CONCATENATED MODULE: ./src/componentes/modal/index.js

const modal_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiModal', SisdaiModal);
  }
};
/* harmony default export */ var modal = (modal_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=template&id=471db523
var SisdaiEnlaceExternovue_type_template_id_471db523_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('a', {
    attrs: {
      "href": _vm.enlace,
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v(" " + _vm._s(_vm.texto) + " "), _c('span', {
    staticClass: "icono-enlace-externo",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
};
var SisdaiEnlaceExternovue_type_template_id_471db523_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ var SisdaiEnlaceExternovue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiEnlaceExterno',
  props: {
    enlace: {
      type: String,
      default: '#'
    },
    texto: {
      type: String,
      default: 'Enlace externo'
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var enlace_externo_SisdaiEnlaceExternovue_type_script_setup_true_lang_js = (SisdaiEnlaceExternovue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/enlace-externo/SisdaiEnlaceExterno.vue





/* normalize component */
;
var SisdaiEnlaceExterno_component = normalizeComponent(
  enlace_externo_SisdaiEnlaceExternovue_type_script_setup_true_lang_js,
  SisdaiEnlaceExternovue_type_template_id_471db523_render,
  SisdaiEnlaceExternovue_type_template_id_471db523_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiEnlaceExterno = (SisdaiEnlaceExterno_component.exports);
;// CONCATENATED MODULE: ./src/componentes/enlace-externo/index.js

const enlace_externo_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiEnlaceExterno', SisdaiEnlaceExterno);
  }
};
/* harmony default export */ var enlace_externo = (enlace_externo_plugin);
;// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3031fe68-vue-loader-template"}!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=template&id=088f7d63
var SisdaiImagenPngWebpvue_type_template_id_088f7d63_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('figure', {
    staticClass: "m-y-2"
  }, [_c('picture', [_c('source', {
    attrs: {
      "srcset": `${_vm.dominio}${_vm.ruta}.webp`,
      "type": "image/webp"
    }
  }), _c('source', {
    attrs: {
      "type": "image/png",
      "srcset": `${_vm.dominio}${_vm.ruta}.png`
    }
  }), _c('img', {
    style: {
      maxWidth: _vm.ancho_maximo,
      width: '100%'
    },
    attrs: {
      "loading": "lazy",
      "src": `${_vm.dominio}${_vm.ruta}.png`,
      "alt": _vm.textoAlternativo
    }
  })]), _c('figcaption', {
    attrs: {
      "aria-hidden": "true"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.leyenda)
    }
  })]);
};
var SisdaiImagenPngWebpvue_type_template_id_088f7d63_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/cache-loader/dist/cjs.js??ruleSet[0].use[0]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=script&setup=true&lang=js
/* harmony default export */ var SisdaiImagenPngWebpvue_type_script_setup_true_lang_js = ({
  __name: 'SisdaiImagenPngWebp',
  props: {
    dominio: {
      type: String,
      default: ''
    },
    ruta: {
      type: String,
      default: ''
    },
    textoAlternativo: {
      type: String,
      default: ''
    },
    leyenda: {
      type: String,
      default: ''
    },
    ancho_maximo: {
      type: String,
      default: '100%'
    }
  },
  setup(__props) {
    return {
      __sfc: true
    };
  }
});
;// CONCATENATED MODULE: ./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var imagen_png_webp_SisdaiImagenPngWebpvue_type_script_setup_true_lang_js = (SisdaiImagenPngWebpvue_type_script_setup_true_lang_js); 
;// CONCATENATED MODULE: ./src/componentes/imagen-png-webp/SisdaiImagenPngWebp.vue





/* normalize component */
;
var SisdaiImagenPngWebp_component = normalizeComponent(
  imagen_png_webp_SisdaiImagenPngWebpvue_type_script_setup_true_lang_js,
  SisdaiImagenPngWebpvue_type_template_id_088f7d63_render,
  SisdaiImagenPngWebpvue_type_template_id_088f7d63_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SisdaiImagenPngWebp = (SisdaiImagenPngWebp_component.exports);
;// CONCATENATED MODULE: ./src/componentes/imagen-png-webp/index.js

const imagen_png_webp_plugin = {
  install: function (Vue) {
    Vue.component('SisdaiImagenPngWebp', SisdaiImagenPngWebp);
  }
};
/* harmony default export */ var imagen_png_webp = (imagen_png_webp_plugin);
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
      strategy: 'fixed',
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
    Vue.use(enlace_externo);

    //accesibilidad
    Vue.use(menu_accesibilidad);
    Vue.use(imagen_png_webp);

    //auxiliares
    Vue.use(tooltips);
    //otros
    Vue.use(narrativa_scroll);
    Vue.use(boton_flotante);
    Vue.use(modal);
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