/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pokemon_list = __webpack_require__(1);

document.addEventListener('DOMContentLoaded', function () {
  var canva = document.getElementById('colours-canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Testing
  window.pokemon = _pokemon_list.POKEMON;
  console.log("Hello from inside cartooncolours.js");
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var POKEMON = exports.POKEMON = {
  1: ["Bulbasaur"],
  2: ["Ivysaur"],
  3: ["Venusaur"],
  4: ["Charmander"],
  5: ["Charmeleon"],
  6: ["Charizard"],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [],
  19: [],
  20: [],
  21: [],
  22: [],
  23: [],
  24: [],
  25: [],
  26: [],
  27: [],
  28: [],
  29: [],
  30: [],
  31: [],
  32: [],
  33: [],
  34: [],
  35: [],
  36: [],
  37: [],
  38: [],
  39: [],
  40: [],
  41: [],
  42: [],
  43: [],
  44: [],
  45: [],
  46: [],
  47: [],
  48: [],
  49: [],
  50: [],
  51: [],
  52: [],
  53: [],
  54: [],
  55: [],
  56: [],
  57: [],
  58: [],
  59: [],
  60: [],
  61: [],
  62: [],
  63: [],
  64: [],
  65: [],
  66: [],
  67: [],
  68: [],
  69: [],
  70: [],
  71: [],
  72: [],
  73: [],
  74: [],
  75: [],
  76: [],
  77: [],
  78: [],
  79: [],
  80: [],
  81: [],
  82: [],
  83: [],
  84: [],
  85: [],
  86: [],
  87: [],
  88: [],
  89: [],
  90: [],
  91: [],
  92: [],
  93: [],
  94: [],
  95: [],
  96: [],
  97: [],
  98: [],
  99: [],
  100: [],
  101: [],
  102: [],
  103: [],
  104: [],
  105: [],
  106: [],
  107: [],
  108: [],
  109: [],
  110: [],
  111: [],
  112: [],
  113: [],
  114: [],
  115: [],
  116: [],
  117: [],
  118: [],
  119: [],
  120: [],
  121: [],
  122: [],
  123: [],
  124: [],
  125: [],
  126: [],
  127: [],
  128: [],
  129: [],
  130: [],
  131: [],
  132: [],
  133: [],
  134: [],
  135: [],
  136: [],
  137: [],
  138: [],
  139: [],
  140: [],
  141: [],
  142: [],
  143: ["Snorlax", "http://res.cloudinary.com/dfazwubvc/image/upload/v1494345959/cartooncolours/143_snorlax.svg"],
  144: [],
  145: [],
  146: [],
  147: [],
  148: [],
  149: [],
  150: [],
  151: []
};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map