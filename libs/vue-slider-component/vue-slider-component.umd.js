(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-slider-component"] = factory(require("vue"));
	else
		root["vue-slider-component"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "091b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4abb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7a57");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b2af7572", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4ed8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("091b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("2f6bee1a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "556c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("eef2");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1209fd47", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7a57":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "eef2":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return /* reexport */ ERROR_TYPE; });
__webpack_require__.d(__webpack_exports__, "VueSliderMark", function() { return /* reexport */ vue_slider_mark; });
__webpack_require__.d(__webpack_exports__, "VueSliderDot", function() { return /* reexport */ vue_slider_dot; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue","amd":"vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm-bundler.js
/**
  * vue-class-component v8.0.0-beta.4
  * (c) 2015-present Evan You
  * @license MIT
  */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function defineGetter(obj, key, getter) {
  Object.defineProperty(obj, key, {
    get: getter,
    enumerable: false,
    configurable: true
  });
}

function defineProxy(proxy, key, target) {
  Object.defineProperty(proxy, key, {
    get: function get() {
      return target[key].value;
    },
    set: function set(value) {
      target[key].value = value;
    },
    enumerable: true,
    configurable: true
  });
}

function getSuper(Ctor) {
  var superProto = Object.getPrototypeOf(Ctor.prototype);

  if (!superProto) {
    return undefined;
  }

  return superProto.constructor;
}

var vue_class_component_esm_bundler_VueImpl = /*#__PURE__*/function () {
  function VueImpl(props, ctx) {
    var _this = this;

    _classCallCheck(this, VueImpl);

    defineGetter(this, '$props', function () {
      return props;
    });
    defineGetter(this, '$attrs', function () {
      return ctx.attrs;
    });
    defineGetter(this, '$slots', function () {
      return ctx.slots;
    });
    defineGetter(this, '$emit', function () {
      return ctx.emit;
    });
    Object.keys(props).forEach(function (key) {
      Object.defineProperty(_this, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: props[key]
      });
    });
  }
  /** @internal */


  _createClass(VueImpl, null, [{
    key: "__vccExtend",
    value: function __vccExtend(options) {
      options.mixins = options.mixins || [];
      options.mixins.push(this.__vccOpts);
    }
    /** @internal */

  }, {
    key: "registerHooks",
    value: function registerHooks(keys) {
      var _this$__vccHooks;

      (_this$__vccHooks = this.__vccHooks).push.apply(_this$__vccHooks, _toConsumableArray(keys));
    }
  }, {
    key: "props",
    value: function props(Props) {
      var propsMeta = new Props();
      var props = {};
      Object.keys(propsMeta).forEach(function (key) {
        var meta = propsMeta[key];
        props[key] = meta !== null && meta !== void 0 ? meta : null;
      });

      var PropsMixin = /*#__PURE__*/function (_this2) {
        _inherits(PropsMixin, _this2);

        var _super = _createSuper(PropsMixin);

        function PropsMixin() {
          _classCallCheck(this, PropsMixin);

          return _super.apply(this, arguments);
        }

        _createClass(PropsMixin, null, [{
          key: "__vccExtend",
          value: function __vccExtend(options) {
            options.props = props;
          }
        }]);

        return PropsMixin;
      }(this);

      return PropsMixin;
    }
  }, {
    key: "__vccOpts",
    get: function get() {
      // Early return if `this` is base class as it does not have any options
      if (this === Vue) {
        return {};
      }

      var cache = this.hasOwnProperty('__vccCache') && this.__vccCache;

      if (cache) {
        return cache;
      }

      var Ctor = this; // If the options are provided via decorator use it as a base

      var options = this.__vccCache = this.hasOwnProperty('__vccBase') ? _objectSpread2({}, this.__vccBase) : {}; // Handle super class options

      var Super = getSuper(Ctor);

      if (Super) {
        Super.__vccExtend(options);
      }

      options.methods = _objectSpread2({}, options.methods);
      options.computed = _objectSpread2({}, options.computed);
      var proto = Ctor.prototype;
      Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
          return;
        } // hooks


        if (Ctor.__vccHooks.indexOf(key) > -1) {
          options[key] = proto[key];
          return;
        }

        var descriptor = Object.getOwnPropertyDescriptor(proto, key); // methods

        if (typeof descriptor.value === 'function') {
          options.methods[key] = descriptor.value;
          return;
        } // computed properties


        if (descriptor.get || descriptor.set) {
          options.computed[key] = {
            get: descriptor.get,
            set: descriptor.set
          };
          return;
        }
      });

      options.setup = function (props, ctx) {
        var _promise;

        var data = new Ctor(props, ctx);
        var dataKeys = Object.keys(data);
        var plainData = {};
        var promise = null; // Initialize reactive data and convert constructor `this` to a proxy

        dataKeys.forEach(function (key) {
          // Skip if the value is undefined not to make it reactive.
          // If the value has `__s`, it's a value from `setup` helper, proceed it later.
          if (data[key] === undefined || data[key] && data[key].__s) {
            return;
          }

          plainData[key] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["ref"])(data[key]);
          defineProxy(data, key, plainData);
        }); // Invoke composition functions

        dataKeys.forEach(function (key) {
          if (data[key] && data[key].__s) {
            var setupState = data[key].__s();

            if (setupState instanceof Promise) {
              if (!promise) {
                promise = Promise.resolve(plainData);
              }

              promise = promise.then(function () {
                return setupState.then(function (value) {
                  plainData[key] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["proxyRefs"])(value);
                  return plainData;
                });
              });
            } else {
              plainData[key] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["proxyRefs"])(setupState);
            }
          }
        });
        return (_promise = promise) !== null && _promise !== void 0 ? _promise : plainData;
      };

      var decorators = this.hasOwnProperty('__vccDecorators') && this.__vccDecorators;

      if (decorators) {
        decorators.forEach(function (fn) {
          return fn(options);
        });
      } // from Vue Loader


      var injections = ['render', 'ssrRender', '__file', '__cssModules', '__scopeId', '__hmrId'];
      injections.forEach(function (key) {
        if (Ctor[key]) {
          options[key] = Ctor[key];
        }
      });
      return options;
    }
  }]);

  return VueImpl;
}();
/** @internal */


vue_class_component_esm_bundler_VueImpl.__vccHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUnmount', 'unmounted', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch'];
var Vue = vue_class_component_esm_bundler_VueImpl;

function Options(options) {
  return function (Component) {
    Component.__vccBase = options;
    return Component;
  };
}
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__vccDecorators) {
      Ctor.__vccDecorators = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__vccDecorators.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return /*#__PURE__*/function (_Vue) {
    _inherits(MixedVue, _Vue);

    var _super = _createSuper(MixedVue);

    _createClass(MixedVue, null, [{
      key: "__vccExtend",
      value: function __vccExtend(options) {
        Ctors.forEach(function (Ctor) {
          return Ctor.__vccExtend(options);
        });
      }
    }]);

    function MixedVue() {
      var _this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _classCallCheck(this, MixedVue);

      _this = _super.call.apply(_super, [this].concat(args));
      Ctors.forEach(function (Ctor) {
        var data = _construct(Ctor, args);

        Object.keys(data).forEach(function (key) {
          _this[key] = data[key];
        });
      });
      return _this;
    }

    return MixedVue;
  }(Vue);
}
function setup(setupFn) {
  // Hack to delay the invocation of setup function.
  // Will be called after dealing with class properties.
  return {
    __s: setupFn
  };
}

// Actual implementation
function prop(options) {
  return options;
}



// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 9.0.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
function inheritInjected(componentOptions) {
    // inject parent reactive services (if any)
    if (!Array.isArray(componentOptions.inject)) {
        componentOptions.inject = componentOptions.inject || {};
        componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
        };
    }
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, [emitName].concat(args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, [emitName].concat(args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// EXTERNAL MODULE: ./lib/styles/dot.scss
var styles_dot = __webpack_require__("4ed8");

// CONCATENATED MODULE: ./lib/vue-slider-dot.tsx


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function vue_slider_dot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vue_slider_dot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vue_slider_dot_createClass(Constructor, protoProps, staticProps) { if (protoProps) vue_slider_dot_defineProperties(Constructor.prototype, protoProps); if (staticProps) vue_slider_dot_defineProperties(Constructor, staticProps); return Constructor; }

function vue_slider_dot_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) vue_slider_dot_setPrototypeOf(subClass, superClass); }

function vue_slider_dot_setPrototypeOf(o, p) { vue_slider_dot_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return vue_slider_dot_setPrototypeOf(o, p); }

function vue_slider_dot_createSuper(Derived) { var hasNativeReflectConstruct = vue_slider_dot_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = vue_slider_dot_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = vue_slider_dot_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return vue_slider_dot_possibleConstructorReturn(this, result); }; }

function vue_slider_dot_possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return vue_slider_dot_assertThisInitialized(self); }

function vue_slider_dot_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vue_slider_dot_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function vue_slider_dot_getPrototypeOf(o) { vue_slider_dot_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return vue_slider_dot_getPrototypeOf(o); }






var vue_slider_dot_VueSliderDot =
/** @class */
function () {
  var VueSliderDot = /*#__PURE__*/function (_Vue) {
    vue_slider_dot_inherits(VueSliderDot, _Vue);

    var _super = vue_slider_dot_createSuper(VueSliderDot);

    function VueSliderDot() {
      vue_slider_dot_classCallCheck(this, VueSliderDot);

      return _super.apply(this, arguments);
    }

    vue_slider_dot_createClass(VueSliderDot, [{
      key: "dragStart",
      value: function dragStart(e) {
        if (this.disabled) {
          return false;
        }

        this.$emit('DragStart');
      }
    }, {
      key: "render",
      value: function render() {
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "ref": "dot",
          "class": this.dotClasses,
          "aria-valuetext": this.tooltipValue,
          "onMousedown": this.dragStart,
          "onTouchstart": this.dragStart
        }, [this.dotSlot || Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": this.handleClasses,
          "style": this.dotStyle
        }, null), this.tooltip !== 'none' ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": this.tooltipClasses
        }, [this.tooltipSlot || Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": this.tooltipInnerClasses,
          "style": this.tooltipStyle
        }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("span", {
          "class": 'vue-slider-dot-tooltip-text'
        }, [this.tooltipValue])])]) : null]);
      }
    }, {
      key: "dotClasses",
      get: function get() {
        return ['vue-slider-dot', {
          'vue-slider-dot-hover': this.tooltip === 'hover' || this.tooltip === 'active',
          'vue-slider-dot-disabled': this.disabled,
          'vue-slider-dot-focus': this.focus
        }];
      }
    }, {
      key: "handleClasses",
      get: function get() {
        return ['vue-slider-dot-handle', {
          'vue-slider-dot-handle-disabled': this.disabled,
          'vue-slider-dot-handle-focus': this.focus
        }];
      }
    }, {
      key: "tooltipClasses",
      get: function get() {
        return ['vue-slider-dot-tooltip', ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], {
          'vue-slider-dot-tooltip-show': this.showTooltip
        }];
      }
    }, {
      key: "tooltipInnerClasses",
      get: function get() {
        return ['vue-slider-dot-tooltip-inner', ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], {
          'vue-slider-dot-tooltip-inner-disabled': this.disabled,
          'vue-slider-dot-tooltip-inner-focus': this.focus
        }];
      }
    }, {
      key: "showTooltip",
      get: function get() {
        switch (this.tooltip) {
          case 'always':
            return true;

          case 'none':
            return false;

          case 'focus':
          case 'active':
            return !!this.focus;

          default:
            return false;
        }
      }
    }, {
      key: "tooltipValue",
      get: function get() {
        if (this.tooltipFormatter) {
          return typeof this.tooltipFormatter === 'string' ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value);
        } else {
          return this.value;
        }
      }
    }]);

    return VueSliderDot;
  }(Vue);

  __decorate([Prop({
    default: 0
  })], VueSliderDot.prototype, "value", void 0);

  __decorate([Prop()], VueSliderDot.prototype, "tooltip", void 0);

  __decorate([Prop()], VueSliderDot.prototype, "dotStyle", void 0);

  __decorate([Prop()], VueSliderDot.prototype, "tooltipStyle", void 0);

  __decorate([Prop({
    type: String,
    validator: function validator(val) {
      return ['top', 'right', 'bottom', 'left'].indexOf(val) > -1;
    },
    required: true
  })], VueSliderDot.prototype, "tooltipPlacement", void 0);

  __decorate([Prop({
    type: [String, Function]
  })], VueSliderDot.prototype, "tooltipFormatter", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], VueSliderDot.prototype, "focus", void 0);

  __decorate([Prop({
    default: false
  })], VueSliderDot.prototype, "disabled", void 0);

  __decorate([Prop(Object)], VueSliderDot.prototype, "dotSlot", void 0);

  __decorate([Prop(Object)], VueSliderDot.prototype, "tooltipSlot", void 0);

  VueSliderDot = __decorate([Options({
    name: 'VueSliderDot',
    emits: ['DragStart']
  })], VueSliderDot);
  return VueSliderDot;
}();

/* harmony default export */ var vue_slider_dot = (vue_slider_dot_VueSliderDot);
// EXTERNAL MODULE: ./lib/styles/mark.scss
var styles_mark = __webpack_require__("556c");

// CONCATENATED MODULE: ./lib/vue-slider-mark.tsx


function vue_slider_mark_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { vue_slider_mark_typeof = function _typeof(obj) { return typeof obj; }; } else { vue_slider_mark_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return vue_slider_mark_typeof(obj); }

function vue_slider_mark_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vue_slider_mark_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vue_slider_mark_createClass(Constructor, protoProps, staticProps) { if (protoProps) vue_slider_mark_defineProperties(Constructor.prototype, protoProps); if (staticProps) vue_slider_mark_defineProperties(Constructor, staticProps); return Constructor; }

function vue_slider_mark_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) vue_slider_mark_setPrototypeOf(subClass, superClass); }

function vue_slider_mark_setPrototypeOf(o, p) { vue_slider_mark_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return vue_slider_mark_setPrototypeOf(o, p); }

function vue_slider_mark_createSuper(Derived) { var hasNativeReflectConstruct = vue_slider_mark_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = vue_slider_mark_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = vue_slider_mark_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return vue_slider_mark_possibleConstructorReturn(this, result); }; }

function vue_slider_mark_possibleConstructorReturn(self, call) { if (call && (vue_slider_mark_typeof(call) === "object" || typeof call === "function")) { return call; } return vue_slider_mark_assertThisInitialized(self); }

function vue_slider_mark_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vue_slider_mark_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function vue_slider_mark_getPrototypeOf(o) { vue_slider_mark_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return vue_slider_mark_getPrototypeOf(o); }






var vue_slider_mark_VueSlideMark =
/** @class */
function () {
  var VueSlideMark = /*#__PURE__*/function (_Vue) {
    vue_slider_mark_inherits(VueSlideMark, _Vue);

    var _super = vue_slider_mark_createSuper(VueSlideMark);

    function VueSlideMark() {
      vue_slider_mark_classCallCheck(this, VueSlideMark);

      return _super.apply(this, arguments);
    }

    vue_slider_mark_createClass(VueSlideMark, [{
      key: "labelClickHandle",
      value: function labelClickHandle(e) {
        e.stopPropagation();
        this.$emit('PressLabel', this.mark.pos);
      }
    }, {
      key: "render",
      value: function render() {
        var mark = this.mark;
        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": this.marksClasses
        }, [this.stepSlot || Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": this.stepClasses,
          "style": [this.stepStyle, mark.style, mark.active ? this.stepActiveStyle : null, mark.active ? mark.activeStyle : null]
        }, null), !this.hideLabel ? this.labelSlot || Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": this.labelClasses,
          "style": [this.labelStyle, mark.labelStyle, mark.active ? this.labelActiveStyle : null, mark.active ? mark.labelActiveStyle : null],
          "onClick": this.labelClickHandle
        }, [mark.label]) : null]);
      }
    }, {
      key: "marksClasses",
      get: function get() {
        return ['vue-slider-mark', {
          'vue-slider-mark-active': this.mark.active
        }];
      }
    }, {
      key: "stepClasses",
      get: function get() {
        return ['vue-slider-mark-step', {
          'vue-slider-mark-step-active': this.mark.active
        }];
      }
    }, {
      key: "labelClasses",
      get: function get() {
        return ['vue-slider-mark-label', {
          'vue-slider-mark-label-active': this.mark.active
        }];
      }
    }]);

    return VueSlideMark;
  }(Vue);

  __decorate([Prop({
    required: true
  })], VueSlideMark.prototype, "mark", void 0);

  __decorate([Prop(Boolean)], VueSlideMark.prototype, "hideLabel", void 0);

  __decorate([Prop()], VueSlideMark.prototype, "stepStyle", void 0);

  __decorate([Prop()], VueSlideMark.prototype, "stepActiveStyle", void 0);

  __decorate([Prop()], VueSlideMark.prototype, "labelStyle", void 0);

  __decorate([Prop()], VueSlideMark.prototype, "labelActiveStyle", void 0);

  __decorate([Prop(Object)], VueSlideMark.prototype, "stepSlot", void 0);

  __decorate([Prop(Object)], VueSlideMark.prototype, "labelSlot", void 0);

  VueSlideMark = __decorate([Options({
    name: 'VueSliderMark',
    emits: ['PressLabel']
  })], VueSlideMark);
  return VueSlideMark;
}();

/* harmony default export */ var vue_slider_mark = (vue_slider_mark_VueSlideMark);
// CONCATENATED MODULE: ./lib/utils/index.ts
var getSize = function getSize(value) {
  return typeof value === 'number' ? "".concat(value, "px") : value;
};
/** Get the distance of the element from the top/left of the page */

var getOffset = function getOffset(elem) {
  var doc = document.documentElement;
  var body = document.body;
  var rect = elem.getBoundingClientRect();
  var offset = {
    y: rect.top + (window.pageYOffset || doc.scrollTop) - (doc.clientTop || body.clientTop || 0),
    x: rect.left + (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || body.clientLeft || 0)
  };
  return offset;
};
/**
 * Get the position of the mouse/finger in the element
 * @param e Trigger event
 * @param elem Container element
 * @param isReverse From the right/bottom
 */

var getPos = function getPos(e, elem, isReverse) {
  var event = 'targetTouches' in e ? e.targetTouches[0] : e;
  var offset = getOffset(elem);
  var posObj = {
    x: event.pageX - offset.x,
    y: event.pageY - offset.y
  };
  return {
    x: isReverse ? elem.offsetWidth - posObj.x : posObj.x,
    y: isReverse ? elem.offsetHeight - posObj.y : posObj.y
  };
};
var KEY_CODE;

(function (KEY_CODE) {
  KEY_CODE[KEY_CODE["PAGE_UP"] = 33] = "PAGE_UP";
  KEY_CODE[KEY_CODE["PAGE_DOWN"] = 34] = "PAGE_DOWN";
  KEY_CODE[KEY_CODE["END"] = 35] = "END";
  KEY_CODE[KEY_CODE["HOME"] = 36] = "HOME";
  KEY_CODE[KEY_CODE["LEFT"] = 37] = "LEFT";
  KEY_CODE[KEY_CODE["UP"] = 38] = "UP";
  KEY_CODE[KEY_CODE["RIGHT"] = 39] = "RIGHT";
  KEY_CODE[KEY_CODE["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));

var getKeyboardHandleFunc = function getKeyboardHandleFunc(e, params) {
  if (params.hook) {
    var result = params.hook(e);
    if (typeof result === 'function') return result;
    if (!result) return null;
  }

  switch (e.keyCode) {
    case KEY_CODE.UP:
      return function (i) {
        return params.direction === 'ttb' ? i - 1 : i + 1;
      };

    case KEY_CODE.RIGHT:
      return function (i) {
        return params.direction === 'rtl' ? i - 1 : i + 1;
      };

    case KEY_CODE.DOWN:
      return function (i) {
        return params.direction === 'ttb' ? i + 1 : i - 1;
      };

    case KEY_CODE.LEFT:
      return function (i) {
        return params.direction === 'rtl' ? i + 1 : i - 1;
      };

    case KEY_CODE.END:
      return function () {
        return params.max;
      };

    case KEY_CODE.HOME:
      return function () {
        return params.min;
      };

    case KEY_CODE.PAGE_UP:
      return function (i) {
        return i + 10;
      };

    case KEY_CODE.PAGE_DOWN:
      return function (i) {
        return i - 10;
      };

    default:
      return null;
  }
};
// CONCATENATED MODULE: ./lib/utils/decimal.ts
function decimal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function decimal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function decimal_createClass(Constructor, protoProps, staticProps) { if (protoProps) decimal_defineProperties(Constructor.prototype, protoProps); if (staticProps) decimal_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * For any precise floating point calculation
 *
 * @export
 * @class Decimal
 */
var Decimal = /*#__PURE__*/function () {
  function Decimal(num) {
    decimal_classCallCheck(this, Decimal);

    this.num = num;
  }

  decimal_createClass(Decimal, [{
    key: "decimal",
    value: function decimal(num2, operator) {
      var num1 = this.num;
      var len1 = this.getDecimalLen(num1);
      var len2 = this.getDecimalLen(num2);
      var base = 0;

      switch (operator) {
        case '+':
          base = this.getExponent(len1, len2);
          this.num = (this.safeRoundUp(num1, base) + this.safeRoundUp(num2, base)) / base;
          break;

        case '-':
          base = this.getExponent(len1, len2);
          this.num = (this.safeRoundUp(num1, base) - this.safeRoundUp(num2, base)) / base;
          break;

        case '*':
          this.num = this.safeRoundUp(this.safeRoundUp(num1, this.getExponent(len1)), this.safeRoundUp(num2, this.getExponent(len2))) / this.getExponent(len1 + len2);
          break;

        case '/':
          base = this.getExponent(len1, len2);
          this.num = this.safeRoundUp(num1, base) / this.safeRoundUp(num2, base);
          break;

        case '%':
          base = this.getExponent(len1, len2);
          this.num = this.safeRoundUp(num1, base) % this.safeRoundUp(num2, base) / base;
          break;
      }

      return this;
    }
  }, {
    key: "plus",
    value: function plus(num2) {
      return this.decimal(num2, '+');
    }
  }, {
    key: "minus",
    value: function minus(num2) {
      return this.decimal(num2, '-');
    }
  }, {
    key: "multiply",
    value: function multiply(num2) {
      return this.decimal(num2, '*');
    }
  }, {
    key: "divide",
    value: function divide(num2) {
      return this.decimal(num2, '/');
    }
  }, {
    key: "remainder",
    value: function remainder(num2) {
      return this.decimal(num2, '%');
    }
  }, {
    key: "toNumber",
    value: function toNumber() {
      return this.num;
    }
  }, {
    key: "getDecimalLen",
    value: function getDecimalLen(num) {
      var strArr = "".concat(num).split('e');
      return ("".concat(strArr[0]).split('.')[1] || '').length - (strArr[1] ? +strArr[1] : 0);
    }
  }, {
    key: "getExponent",
    value: function getExponent(num1, num2) {
      return Math.pow(10, num2 !== void 0 ? Math.max(num1, num2) : num1);
    } // fix: 9999999.99995 * 100000 = 999999999994.9999

  }, {
    key: "safeRoundUp",
    value: function safeRoundUp(num, exponent) {
      return Math.round(num * exponent);
    }
  }]);

  return Decimal;
}();


// CONCATENATED MODULE: ./lib/utils/control.ts
var _ERROR_MSG;

function control_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { control_ownKeys(Object(source), true).forEach(function (key) { control_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { control_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || control_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function control_toConsumableArray(arr) { return control_arrayWithoutHoles(arr) || control_iterableToArray(arr) || control_unsupportedIterableToArray(arr) || control_nonIterableSpread(); }

function control_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function control_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return control_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return control_arrayLikeToArray(o, minLen); }

function control_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function control_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return control_arrayLikeToArray(arr); }

function control_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function control_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function control_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function control_createClass(Constructor, protoProps, staticProps) { if (protoProps) control_defineProperties(Constructor.prototype, protoProps); if (staticProps) control_defineProperties(Constructor, staticProps); return Constructor; }

function control_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ERROR_TYPE;

(function (ERROR_TYPE) {
  ERROR_TYPE[ERROR_TYPE["VALUE"] = 1] = "VALUE";
  ERROR_TYPE[ERROR_TYPE["INTERVAL"] = 2] = "INTERVAL";
  ERROR_TYPE[ERROR_TYPE["MIN"] = 3] = "MIN";
  ERROR_TYPE[ERROR_TYPE["MAX"] = 4] = "MAX";
  ERROR_TYPE[ERROR_TYPE["ORDER"] = 5] = "ORDER";
})(ERROR_TYPE || (ERROR_TYPE = {}));

var ERROR_MSG = (_ERROR_MSG = {}, control_defineProperty(_ERROR_MSG, ERROR_TYPE.VALUE, 'The type of the "value" is illegal'), control_defineProperty(_ERROR_MSG, ERROR_TYPE.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), control_defineProperty(_ERROR_MSG, ERROR_TYPE.MIN, 'The "value" must be greater than or equal to the "min".'), control_defineProperty(_ERROR_MSG, ERROR_TYPE.MAX, 'The "value" must be less than or equal to the "max".'), control_defineProperty(_ERROR_MSG, ERROR_TYPE.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), _ERROR_MSG);
/**
 * Slider logic control center
 *
 * @export
 * @class Control
 */

var control_Control = /*#__PURE__*/function () {
  function Control(options) {
    control_classCallCheck(this, Control);

    this.dotsPos = []; // The position of each slider

    this.dotsValue = []; // The value of each slider

    this.cacheRangeDir = {};
    this.data = options.data;
    this.max = options.max;
    this.min = options.min;
    this.interval = options.interval;
    this.order = options.order;
    this.marks = options.marks;
    this.included = options.included;
    this.process = options.process;
    this.adsorb = options.adsorb;
    this.dotOptions = options.dotOptions;
    this.onError = options.onError;

    if (this.order) {
      this.minRange = options.minRange || 0;
      this.maxRange = options.maxRange || 0;
      this.enableCross = options.enableCross;
      this.fixed = options.fixed;
    } else {
      if (options.minRange || options.maxRange || !options.enableCross || options.fixed) {
        this.emitError(ERROR_TYPE.ORDER);
      }

      this.minRange = 0;
      this.maxRange = 0;
      this.enableCross = true;
      this.fixed = false;
    }

    this.setValue(options.value);
  }

  control_createClass(Control, [{
    key: "setValue",
    value: function setValue(value) {
      this.setDotsValue(Array.isArray(value) ? control_toConsumableArray(value) : [value], true);
    }
  }, {
    key: "setDotsValue",
    value: function setDotsValue(value, syncPos) {
      this.dotsValue = value;

      if (syncPos) {
        this.syncDotsPos();
      }
    } // Set the slider position

  }, {
    key: "setDotsPos",
    value: function setDotsPos(dotsPos) {
      var _this = this;

      var list = this.order ? control_toConsumableArray(dotsPos).sort(function (a, b) {
        return a - b;
      }) : dotsPos;
      this.dotsPos = list;
      this.setDotsValue(list.map(function (dotPos) {
        return _this.getValueByPos(dotPos);
      }), this.adsorb);
    } // Get value by position

  }, {
    key: "getValueByPos",
    value: function getValueByPos(pos) {
      var value = this.parsePos(pos); // When included is true, the return value is the value of the nearest mark

      if (this.included) {
        var dir = 100;
        this.markList.forEach(function (mark) {
          var curDir = Math.abs(mark.pos - pos);

          if (curDir < dir) {
            dir = curDir;
            value = mark.value;
          }
        });
      }

      return value;
    } // Sync slider position

  }, {
    key: "syncDotsPos",
    value: function syncDotsPos() {
      var _this2 = this;

      this.dotsPos = this.dotsValue.map(function (v) {
        return _this2.parseValue(v);
      });
    }
    /**
     * Get all the marks
     *
     * @readonly
     * @type {Mark[]}
     * @memberof Control
     */

  }, {
    key: "getRecentDot",

    /**
     * Get the most recent slider index by position
     *
     * @param {number} pos
     * @returns {number}
     * @memberof Control
     */
    value: function getRecentDot(pos) {
      var arr = this.dotsPos.map(function (dotPos) {
        return Math.abs(dotPos - pos);
      });
      return arr.indexOf(Math.min.apply(Math, control_toConsumableArray(arr)));
    }
    /**
     * Get index by value
     *
     * @param {Value} value
     * @returns {number}
     * @memberof Control
     */

  }, {
    key: "getIndexByValue",
    value: function getIndexByValue(value) {
      if (this.data) {
        return this.data.indexOf(value);
      }

      return new Decimal(+value).minus(this.min).divide(this.interval).toNumber();
    }
    /**
     * Get value by index
     *
     * @param {index} number
     * @returns {Value}
     * @memberof Control
     */

  }, {
    key: "getValueByIndex",
    value: function getValueByIndex(index) {
      if (index < 0) {
        index = 0;
      } else if (index > this.total) {
        index = this.total;
      }

      return this.data ? this.data[index] : new Decimal(index).multiply(this.interval).plus(this.min).toNumber();
    }
    /**
     * Set the position of a single slider
     *
     * @param {number} pos
     * @param {number} index
     */

  }, {
    key: "setDotPos",
    value: function setDotPos(pos, index) {
      pos = this.getValidPos(pos, index).pos;
      var changePos = pos - this.dotsPos[index];

      if (!changePos) {
        return;
      }

      var changePosArr = new Array(this.dotsPos.length);

      if (this.fixed) {
        changePosArr = this.getFixedChangePosArr(changePos, index);
      } else if (this.minRange || this.maxRange) {
        changePosArr = this.getLimitRangeChangePosArr(pos, changePos, index);
      } else {
        changePosArr[index] = changePos;
      }

      this.setDotsPos(this.dotsPos.map(function (curPos, i) {
        return curPos + (changePosArr[i] || 0);
      }));
    }
    /**
     * In fixed mode, get the position of all slider changes
     *
     * @param {number} changePos Change distance of a single slider
     * @param {number} index slider index
     * @returns {DotsPosChangeArray}
     * @memberof Control
     */

  }, {
    key: "getFixedChangePosArr",
    value: function getFixedChangePosArr(changePos, index) {
      var _this3 = this;

      this.dotsPos.forEach(function (originPos, i) {
        if (i !== index) {
          var _this3$getValidPos = _this3.getValidPos(originPos + changePos, i),
              lastPos = _this3$getValidPos.pos,
              inRange = _this3$getValidPos.inRange;

          if (!inRange) {
            changePos = Math.min(Math.abs(lastPos - originPos), Math.abs(changePos)) * (changePos < 0 ? -1 : 1);
          }
        }
      });
      return this.dotsPos.map(function (_) {
        return changePos;
      });
    }
    /**
     * In minRange/maxRange mode, get the position of all slider changes
     *
     * @param {number} pos position of a single slider
     * @param {number} changePos Change distance of a single slider
     * @param {number} index slider index
     * @returns {DotsPosChangeArray}
     * @memberof Control
     */

  }, {
    key: "getLimitRangeChangePosArr",
    value: function getLimitRangeChangePosArr(pos, changePos, index) {
      var _this4 = this;

      var changeDots = [{
        index: index,
        changePos: changePos
      }];
      var newChangePos = changePos;
      [this.minRange, this.maxRange].forEach(function (isLimitRange, rangeIndex) {
        if (!isLimitRange) {
          return false;
        }

        var isMinRange = rangeIndex === 0;
        var isForward = changePos > 0;
        var next = 0;

        if (isMinRange) {
          next = isForward ? 1 : -1;
        } else {
          next = isForward ? -1 : 1;
        } // Determine if the two positions are within the legal interval


        var inLimitRange = function inLimitRange(pos2, pos1) {
          var diff = Math.abs(pos2 - pos1);
          return isMinRange ? diff < _this4.minRangeDir : diff > _this4.maxRangeDir;
        };

        var i = index + next;
        var nextPos = _this4.dotsPos[i];
        var curPos = pos;

        while (_this4.isPos(nextPos) && inLimitRange(nextPos, curPos)) {
          var _this4$getValidPos = _this4.getValidPos(nextPos + newChangePos, i),
              lastPos = _this4$getValidPos.pos;

          changeDots.push({
            index: i,
            changePos: lastPos - nextPos
          });
          i = i + next;
          curPos = lastPos;
          nextPos = _this4.dotsPos[i];
        }
      });
      return this.dotsPos.map(function (_, i) {
        var changeDot = changeDots.filter(function (dot) {
          return dot.index === i;
        });
        return changeDot.length ? changeDot[0].changePos : 0;
      });
    }
  }, {
    key: "isPos",
    value: function isPos(pos) {
      return typeof pos === 'number';
    }
    /**
     * Get a valid position by pos
     *
     * @param {number} pos
     * @param {number} index
     * @returns {{ pos: number, inRange: boolean }}
     */

  }, {
    key: "getValidPos",
    value: function getValidPos(pos, index) {
      var range = this.valuePosRange[index];
      var inRange = true;

      if (pos < range[0]) {
        pos = range[0];
        inRange = false;
      } else if (pos > range[1]) {
        pos = range[1];
        inRange = false;
      }

      return {
        pos: pos,
        inRange: inRange
      };
    }
    /**
     * Calculate the position of the slider by value
     *
     * @param {Value} val
     * @returns {number}
     */

  }, {
    key: "parseValue",
    value: function parseValue(val) {
      if (this.data) {
        val = this.data.indexOf(val);
      } else if (typeof val === 'number' || typeof val === 'string') {
        val = +val;

        if (val < this.min) {
          this.emitError(ERROR_TYPE.MIN);
          return 0;
        }

        if (val > this.max) {
          this.emitError(ERROR_TYPE.MAX);
          return 0;
        }

        if (typeof val !== 'number' || val !== val) {
          this.emitError(ERROR_TYPE.VALUE);
          return 0;
        }

        val = new Decimal(val).minus(this.min).divide(this.interval).toNumber();
      }

      var pos = new Decimal(val).multiply(this.gap).toNumber();
      return pos < 0 ? 0 : pos > 100 ? 100 : pos;
    }
    /**
     * Calculate the value by position
     *
     * @param {number} pos
     * @returns {Value}
     * @memberof Control
     */

  }, {
    key: "parsePos",
    value: function parsePos(pos) {
      var index = Math.round(pos / this.gap);
      return this.getValueByIndex(index);
    }
    /**
     * Determine if the location is active
     *
     * @param {number} pos
     * @returns {boolean}
     * @memberof Control
     */

  }, {
    key: "isActiveByPos",
    value: function isActiveByPos(pos) {
      return this.processArray.some(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            start = _ref2[0],
            end = _ref2[1];

        return pos >= start && pos <= end;
      });
    }
    /**
     * Get each value
     *
     * @returns {Value[]}
     * @memberof Control
     */

  }, {
    key: "getValues",
    value: function getValues() {
      if (this.data) {
        return this.data;
      } else {
        var values = [];

        for (var i = 0; i <= this.total; i++) {
          values.push(new Decimal(i).multiply(this.interval).plus(this.min).toNumber());
        }

        return values;
      }
    }
    /**
     * Calculate the distance of the range
     * @param range number
     */

  }, {
    key: "getRangeDir",
    value: function getRangeDir(range) {
      return range ? new Decimal(range).divide(new Decimal(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
    }
  }, {
    key: "emitError",
    value: function emitError(type) {
      if (this.onError) {
        this.onError(type, ERROR_MSG[type]);
      }
    }
  }, {
    key: "getDotRange",
    value: function getDotRange(index, key, defaultValue) {
      if (!this.dotOptions) {
        return defaultValue;
      }

      var option = Array.isArray(this.dotOptions) ? this.dotOptions[index] : this.dotOptions;
      return option && option[key] !== void 0 ? this.parseValue(option[key]) : defaultValue;
    }
    /**
     * Sliding range of each slider
     *
     * @type {Array<[number, number]>}
     * @memberof Control
     */

  }, {
    key: "markList",
    get: function get() {
      var _this5 = this;

      if (!this.marks) {
        return [];
      }

      var getMarkByValue = function getMarkByValue(value, mark) {
        var pos = _this5.parseValue(value);

        return _objectSpread({
          pos: pos,
          value: value,
          label: value,
          active: _this5.isActiveByPos(pos)
        }, mark);
      };

      if (this.marks === true) {
        return this.getValues().map(function (value) {
          return getMarkByValue(value);
        });
      } else if (Object.prototype.toString.call(this.marks) === '[object Object]') {
        return Object.keys(this.marks).sort(function (a, b) {
          return +a - +b;
        }).map(function (value) {
          var item = _this5.marks[value];
          return getMarkByValue(value, typeof item !== 'string' ? item : {
            label: item
          });
        });
      } else if (Array.isArray(this.marks)) {
        return this.marks.map(function (value) {
          return getMarkByValue(value);
        });
      } else if (typeof this.marks === 'function') {
        return this.getValues().map(function (value) {
          return {
            value: value,
            result: _this5.marks(value)
          };
        }).filter(function (_ref3) {
          var result = _ref3.result;
          return !!result;
        }).map(function (_ref4) {
          var value = _ref4.value,
              result = _ref4.result;
          return getMarkByValue(value, result);
        });
      } else {
        return [];
      }
    }
  }, {
    key: "processArray",
    get: function get() {
      if (this.process) {
        if (typeof this.process === 'function') {
          return this.process(this.dotsPos);
        } else if (this.dotsPos.length === 1) {
          return [[0, this.dotsPos[0]]];
        } else if (this.dotsPos.length > 1) {
          return [[Math.min.apply(Math, control_toConsumableArray(this.dotsPos)), Math.max.apply(Math, control_toConsumableArray(this.dotsPos))]];
        }
      }

      return [];
    }
    /**
     * The total number of values
     *
     * @type {number}
     * @memberof Control
     */

  }, {
    key: "total",
    get: function get() {
      var total = 0;

      if (this.data) {
        total = this.data.length - 1;
      } else {
        total = new Decimal(this.max).minus(this.min).divide(this.interval).toNumber();
      }

      if (total - Math.floor(total) !== 0) {
        this.emitError(ERROR_TYPE.INTERVAL);
        return 0;
      }

      return total;
    } // Distance between each value

  }, {
    key: "gap",
    get: function get() {
      return 100 / this.total;
    } // The minimum distance between the two sliders

  }, {
    key: "minRangeDir",
    get: function get() {
      if (this.cacheRangeDir[this.minRange]) {
        return this.cacheRangeDir[this.minRange];
      }

      return this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
    } // Maximum distance between the two sliders

  }, {
    key: "maxRangeDir",
    get: function get() {
      if (this.cacheRangeDir[this.maxRange]) return this.cacheRangeDir[this.maxRange];
      return this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
    }
  }, {
    key: "valuePosRange",
    get: function get() {
      var _this6 = this;

      var dotsPos = this.dotsPos;
      var valuePosRange = [];
      dotsPos.forEach(function (pos, i) {
        valuePosRange.push([Math.max(_this6.minRange ? _this6.minRangeDir * i : 0, !_this6.enableCross ? dotsPos[i - 1] || 0 : 0, _this6.getDotRange(i, 'min', 0)), Math.min(_this6.minRange ? 100 - _this6.minRangeDir * (dotsPos.length - 1 - i) : 100, !_this6.enableCross ? dotsPos[i + 1] || 100 : 100, _this6.getDotRange(i, 'max', 100))]);
      });
      return valuePosRange;
    }
  }, {
    key: "dotsIndex",
    get: function get() {
      var _this7 = this;

      return this.dotsValue.map(function (val) {
        return _this7.getIndexByValue(val);
      });
    }
  }]);

  return Control;
}();


// CONCATENATED MODULE: ./lib/utils/state.ts
function state_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function state_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function state_createClass(Constructor, protoProps, staticProps) { if (protoProps) state_defineProperties(Constructor.prototype, protoProps); if (staticProps) state_defineProperties(Constructor, staticProps); return Constructor; }

var State = /*#__PURE__*/function () {
  function State(map) {
    state_classCallCheck(this, State);

    this.states = 0;
    this.map = map;
  }

  state_createClass(State, [{
    key: "add",
    value: function add(state) {
      this.states |= state;
    }
  }, {
    key: "delete",
    value: function _delete(state) {
      this.states &= ~state;
    }
  }, {
    key: "toggle",
    value: function toggle(state) {
      if (this.has(state)) {
        this.delete(state);
      } else {
        this.add(state);
      }
    }
  }, {
    key: "has",
    value: function has(state) {
      return !!(this.states & state);
    }
  }]);

  return State;
}();


// EXTERNAL MODULE: ./lib/styles/slider.scss
var slider = __webpack_require__("4abb");

// CONCATENATED MODULE: ./lib/vue-slider.tsx


function vue_slider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function vue_slider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { vue_slider_ownKeys(Object(source), true).forEach(function (key) { vue_slider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { vue_slider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function vue_slider_slicedToArray(arr, i) { return vue_slider_arrayWithHoles(arr) || vue_slider_iterableToArrayLimit(arr, i) || vue_slider_unsupportedIterableToArray(arr, i) || vue_slider_nonIterableRest(); }

function vue_slider_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function vue_slider_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function vue_slider_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function vue_slider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function vue_slider_toConsumableArray(arr) { return vue_slider_arrayWithoutHoles(arr) || vue_slider_iterableToArray(arr) || vue_slider_unsupportedIterableToArray(arr) || vue_slider_nonIterableSpread(); }

function vue_slider_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function vue_slider_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return vue_slider_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return vue_slider_arrayLikeToArray(o, minLen); }

function vue_slider_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function vue_slider_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return vue_slider_arrayLikeToArray(arr); }

function vue_slider_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function vue_slider_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { vue_slider_typeof = function _typeof(obj) { return typeof obj; }; } else { vue_slider_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return vue_slider_typeof(obj); }

function vue_slider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function vue_slider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function vue_slider_createClass(Constructor, protoProps, staticProps) { if (protoProps) vue_slider_defineProperties(Constructor.prototype, protoProps); if (staticProps) vue_slider_defineProperties(Constructor, staticProps); return Constructor; }

function vue_slider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) vue_slider_setPrototypeOf(subClass, superClass); }

function vue_slider_setPrototypeOf(o, p) { vue_slider_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return vue_slider_setPrototypeOf(o, p); }

function vue_slider_createSuper(Derived) { var hasNativeReflectConstruct = vue_slider_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = vue_slider_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = vue_slider_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return vue_slider_possibleConstructorReturn(this, result); }; }

function vue_slider_possibleConstructorReturn(self, call) { if (call && (vue_slider_typeof(call) === "object" || typeof call === "function")) { return call; } return vue_slider_assertThisInitialized(self); }

function vue_slider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function vue_slider_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function vue_slider_getPrototypeOf(o) { vue_slider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return vue_slider_getPrototypeOf(o); }











var SliderState = {
  None: 0,
  Drag: 1 << 1,
  Focus: 1 << 2
};
var DEFAULT_SLIDER_SIZE = 4;

var vue_slider_VueSlider =
/** @class */
function () {
  var VueSlider = /*#__PURE__*/function (_Vue) {
    vue_slider_inherits(VueSlider, _Vue);

    var _super = vue_slider_createSuper(VueSlider);

    function VueSlider() {
      var _this;

      vue_slider_classCallCheck(this, VueSlider);

      _this = _super.apply(this, arguments);
      _this.states = new State(SliderState); // The width of the component is divided into one hundred, the width of each one.

      _this.scale = 1; // Currently dragged slider index

      _this.focusDotIndex = 0;
      return _this;
    }

    vue_slider_createClass(VueSlider, [{
      key: "isObjectData",
      value: function isObjectData(data) {
        return !!data && Object.prototype.toString.call(data) === '[object Object]';
      }
    }, {
      key: "isObjectArrayData",
      value: function isObjectArrayData(data) {
        return !!data && Array.isArray(data) && data.length > 0 && vue_slider_typeof(data[0]) === 'object';
      }
    }, {
      key: "onValueChanged",
      value: function onValueChanged() {
        if (this.control && !this.states.has(SliderState.Drag) && this.isNotSync) {
          this.control.setValue(this.modelValue);
        }
      }
    }, {
      key: "created",
      value: function created() {
        this.initControl();
      }
    }, {
      key: "mounted",
      value: function mounted() {
        this.bindEvent();
      }
    }, {
      key: "beforeDestroy",
      value: function beforeDestroy() {
        this.unbindEvent();
      }
    }, {
      key: "bindEvent",
      value: function bindEvent() {
        document.addEventListener('touchmove', this.dragMove, {
          passive: false
        });
        document.addEventListener('touchend', this.dragEnd, {
          passive: false
        });
        document.addEventListener('mousedown', this.blurHandle);
        document.addEventListener('mousemove', this.dragMove);
        document.addEventListener('mouseup', this.dragEnd);
        document.addEventListener('mouseleave', this.dragEnd);
        document.addEventListener('keydown', this.keydownHandle);
      }
    }, {
      key: "unbindEvent",
      value: function unbindEvent() {
        document.removeEventListener('touchmove', this.dragMove);
        document.removeEventListener('touchend', this.dragEnd);
        document.removeEventListener('mousedown', this.blurHandle);
        document.removeEventListener('mousemove', this.dragMove);
        document.removeEventListener('mouseup', this.dragEnd);
        document.removeEventListener('mouseleave', this.dragEnd);
        document.removeEventListener('keydown', this.keydownHandle);
      }
    }, {
      key: "setScale",
      value: function setScale() {
        this.scale = new Decimal(Math.floor(this.isHorizontal ? this.$el.offsetWidth : this.$el.offsetHeight)).divide(100).toNumber();
      }
    }, {
      key: "initControl",
      value: function initControl() {
        var _this2 = this;

        this.control = new control_Control({
          value: this.modelValue,
          data: this.sliderData,
          enableCross: this.enableCross,
          fixed: this.fixed,
          max: this.max,
          min: this.min,
          interval: this.interval,
          minRange: this.minRange,
          maxRange: this.maxRange,
          order: this.order,
          marks: this.sliderMarks,
          included: this.included,
          process: this.process,
          adsorb: this.adsorb,
          dotOptions: this.dotOptions,
          onError: this.emitError
        });
        ['data', 'enableCross', 'fixed', 'max', 'min', 'interval', 'minRange', 'maxRange', 'order', 'marks', 'process', 'adsorb', 'included', 'dotOptions'].forEach(function (name) {
          _this2.$watch(name, function (val) {
            if (name === 'data' && Array.isArray(_this2.control.data) && Array.isArray(val) && _this2.control.data.length === val.length && val.every(function (item, index) {
              return item === _this2.control.data[index];
            })) {
              return false;
            }

            switch (name) {
              case 'data':
              case 'dataLabel':
              case 'dataValue':
                _this2.control.data = _this2.sliderData;
                break;

              case 'mark':
                _this2.control.marks = _this2.sliderMarks;
                break;

              default:
                ;
                _this2.control[name] = val;
            }

            if (['data', 'max', 'min', 'interval'].indexOf(name) > -1) {
              _this2.control.syncDotsPos();
            }
          });
        });
      }
    }, {
      key: "syncValueByPos",
      value: function syncValueByPos() {
        var values = this.control.dotsValue;

        if (this.isDiff(values, Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue])) {
          var newValue = values.length === 1 ? values[0] : vue_slider_toConsumableArray(values);
          this.$emit('change', newValue, this.focusDotIndex);
          this.$emit('update:modelValue', newValue);
        }
      } // Slider value and component internal value are inconsistent

    }, {
      key: "isDiff",
      value: function isDiff(value1, value2) {
        return value1.length !== value2.length || value1.some(function (val, index) {
          return val !== value2[index];
        });
      }
    }, {
      key: "emitError",
      value: function emitError(type, message) {
        if (!this.silent) {
          console.error("[VueSlider error]: ".concat(message));
        }

        this.$emit('error', type, message);
      }
      /**
       * Get the drag range of the slider
       *
       * @private
       * @param {number} index slider index
       * @returns {[number, number]} range [start, end]
       * @memberof VueSlider
       */

    }, {
      key: "dragStartOnProcess",
      value: function dragStartOnProcess(e) {
        if (this.dragOnClick) {
          this.setScale();
          var pos = this.getPosByEvent(e);
          var index = this.control.getRecentDot(pos);

          if (this.dots[index].disabled) {
            return;
          }

          this.dragStart(index);
          this.control.setDotPos(pos, this.focusDotIndex);

          if (!this.lazy) {
            this.syncValueByPos();
          }
        }
      }
    }, {
      key: "dragStart",
      value: function dragStart(index) {
        this.focusDotIndex = index;
        this.setScale();
        this.states.add(SliderState.Drag);
        this.states.add(SliderState.Focus);
        this.$emit('drag-start', this.focusDotIndex);
      }
    }, {
      key: "dragMove",
      value: function dragMove(e) {
        if (!this.states.has(SliderState.Drag)) {
          return false;
        }

        e.preventDefault();
        var pos = this.getPosByEvent(e);
        this.isCrossDot(pos);
        this.control.setDotPos(pos, this.focusDotIndex);

        if (!this.lazy) {
          this.syncValueByPos();
        }

        var value = this.control.dotsValue;
        this.$emit('dragging', value.length === 1 ? value[0] : vue_slider_toConsumableArray(value), this.focusDotIndex);
      } // If the component is sorted, then when the slider crosses, toggle the currently selected slider index

    }, {
      key: "isCrossDot",
      value: function isCrossDot(pos) {
        if (this.canSort) {
          var curIndex = this.focusDotIndex;
          var curPos = pos;

          if (curPos > this.dragRange[1]) {
            curPos = this.dragRange[1];
            this.focusDotIndex++;
          } else if (curPos < this.dragRange[0]) {
            curPos = this.dragRange[0];
            this.focusDotIndex--;
          }

          if (curIndex !== this.focusDotIndex) {
            var dotVm = this.$refs["dot-".concat(this.focusDotIndex)];

            if (dotVm && dotVm.$el) {
              dotVm.$el.focus();
            }

            this.control.setDotPos(curPos, curIndex);
          }
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this3 = this;

        if (!this.states.has(SliderState.Drag)) {
          return false;
        }

        setTimeout(function () {
          if (_this3.lazy) {
            _this3.syncValueByPos();
          }

          if (_this3.included && _this3.isNotSync) {
            _this3.control.setValue(_this3.modelValue);
          } else {
            // Sync slider position
            _this3.control.syncDotsPos();
          }

          _this3.states.delete(SliderState.Drag); // If useKeyboard is true, keep focus status after dragging


          if (!_this3.useKeyboard || 'targetTouches' in e) {
            _this3.states.delete(SliderState.Focus);
          }

          _this3.$emit('drag-end', _this3.focusDotIndex);
        });
      }
    }, {
      key: "blurHandle",
      value: function blurHandle(e) {
        if (!this.states.has(SliderState.Focus) || !this.$refs.container || this.$refs.container.contains(e.target)) {
          return false;
        }

        this.states.delete(SliderState.Focus);
      }
    }, {
      key: "clickHandle",
      value: function clickHandle(e) {
        if (!this.clickable || this.disabled) {
          return false;
        }

        if (this.states.has(SliderState.Drag)) {
          return;
        }

        this.setScale();
        var pos = this.getPosByEvent(e);
        this.setValueByPos(pos);
      }
    }, {
      key: "focus",
      value: function focus(dot) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (dot.disabled) return;
        this.states.add(SliderState.Focus);
        this.focusDotIndex = index;
      }
    }, {
      key: "blur",
      value: function blur() {
        this.states.delete(SliderState.Focus);
      }
    }, {
      key: "getValue",
      value: function getValue() {
        var values = this.control.dotsValue;
        return values.length === 1 ? values[0] : values;
      }
    }, {
      key: "getIndex",
      value: function getIndex() {
        var indexes = this.control.dotsIndex;
        return indexes.length === 1 ? indexes[0] : indexes;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.control.setValue(Array.isArray(value) ? vue_slider_toConsumableArray(value) : [value]);
        this.syncValueByPos();
      }
    }, {
      key: "setIndex",
      value: function setIndex(index) {
        var _this4 = this;

        var value = Array.isArray(index) ? index.map(function (n) {
          return _this4.control.getValueByIndex(n);
        }) : this.control.getValueByIndex(index);
        this.setValue(value);
      }
    }, {
      key: "setValueByPos",
      value: function setValueByPos(pos) {
        var _this5 = this;

        var index = this.control.getRecentDot(pos);

        if (this.disabled || this.dots[index].disabled) {
          return false;
        }

        this.focusDotIndex = index;
        this.control.setDotPos(pos, index);
        this.syncValueByPos();

        if (this.useKeyboard) {
          this.states.add(SliderState.Focus);
        }

        setTimeout(function () {
          if (_this5.included && _this5.isNotSync) {
            _this5.control.setValue(_this5.modelValue);
          } else {
            _this5.control.syncDotsPos();
          }
        });
      }
    }, {
      key: "keydownHandle",
      value: function keydownHandle(e) {
        var _this6 = this;

        if (!this.useKeyboard || !this.states.has(SliderState.Focus)) {
          return false;
        }

        var isInclude = this.included && this.marks;
        var handleFunc = getKeyboardHandleFunc(e, {
          direction: this.direction,
          max: isInclude ? this.control.markList.length - 1 : this.control.total,
          min: 0,
          hook: this.keydownHook
        });

        if (handleFunc) {
          e.preventDefault();
          var newIndex = -1;
          var pos = 0;

          if (isInclude) {
            this.control.markList.some(function (mark, index) {
              if (mark.value === _this6.control.dotsValue[_this6.focusDotIndex]) {
                newIndex = handleFunc(index);
                return true;
              }

              return false;
            });

            if (newIndex < 0) {
              newIndex = 0;
            } else if (newIndex > this.control.markList.length - 1) {
              newIndex = this.control.markList.length - 1;
            }

            pos = this.control.markList[newIndex].pos;
          } else {
            newIndex = handleFunc(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex]));
            pos = this.control.parseValue(this.control.getValueByIndex(newIndex));
          }

          this.isCrossDot(pos);
          this.control.setDotPos(pos, this.focusDotIndex);
          this.syncValueByPos();
        }
      }
    }, {
      key: "getPosByEvent",
      value: function getPosByEvent(e) {
        return getPos(e, this.$el, this.isReverse)[this.isHorizontal ? 'x' : 'y'] / this.scale;
      }
    }, {
      key: "renderSlot",
      value: function renderSlot(name, data, defaultSlot) {
        var scopedSlot = this.$slots[name];
        return scopedSlot ? scopedSlot(data) : defaultSlot;
      }
    }, {
      key: "render",
      value: function render() {
        var _this7 = this;

        return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["mergeProps"])({
          "ref": "container",
          "class": this.containerClasses,
          "style": this.containerStyles,
          "onClick": this.clickHandle,
          "onTouchstart": this.dragStartOnProcess,
          "onMousedown": this.dragStartOnProcess
        }, this.$attrs), [Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": "vue-slider-rail",
          "style": this.railStyle
        }, [this.processArray.map(function (item, index) {
          return _this7.renderSlot('process', item, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
            "class": "vue-slider-process",
            "key": "process-".concat(index),
            "style": item.style
          }, null));
        }), this.sliderMarks ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])("div", {
          "class": "vue-slider-marks"
        }, [this.control.markList.map(function (mark, index) {
          var _ref;

          var stepSlot = _this7.renderSlot('step', mark, null);

          var labelSlot = _this7.renderSlot('label', mark, null);

          return _this7.renderSlot('mark', mark, Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("vue-slider-mark"), {
            "key": "mark-".concat(index),
            "mark": mark,
            "hideLabel": _this7.hideLabel,
            "style": (_ref = {}, vue_slider_defineProperty(_ref, _this7.isHorizontal ? 'height' : 'width', '100%'), vue_slider_defineProperty(_ref, _this7.isHorizontal ? 'width' : 'height', _this7.tailSize), vue_slider_defineProperty(_ref, _this7.mainDirection, "".concat(mark.pos, "%")), _ref),
            "stepStyle": _this7.stepStyle,
            "stepActiveStyle": _this7.stepActiveStyle,
            "labelStyle": _this7.labelStyle,
            "labelActiveStyle": _this7.labelActiveStyle,
            "onPressLabel": function onPressLabel(pos) {
              return _this7.clickable && _this7.setValueByPos(pos);
            },
            "stepSlot": stepSlot,
            "labelSlot": labelSlot
          }, null));
        })]) : null, this.dots.map(function (dot, index) {
          var _ref2;

          var dotSlot = _this7.renderSlot('dot', dot, null);

          var tooltipSlot = _this7.renderSlot('tooltip', dot, null);

          return Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["createVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["resolveComponent"])("vue-slider-dot"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_amd_vue_["mergeProps"])({
            "ref": "dot-".concat(index),
            "key": "dot-".concat(index),
            "value": dot.value,
            "disabled": dot.disabled,
            "focus": dot.focus,
            "dot-style": [dot.style, dot.disabled ? dot.disabledStyle : null, dot.focus ? dot.focusStyle : null],
            "tooltip": dot.tooltip || _this7.tooltip,
            "tooltip-style": [_this7.tooltipStyle, dot.tooltipStyle, dot.disabled ? dot.tooltipDisabledStyle : null, dot.focus ? dot.tooltipFocusStyle : null],
            "tooltip-formatter": Array.isArray(_this7.sliderTooltipFormatter) ? _this7.sliderTooltipFormatter[index] : _this7.sliderTooltipFormatter,
            "tooltip-placement": _this7.tooltipDirections[index],
            "style": [_this7.dotBaseStyle, (_ref2 = {}, vue_slider_defineProperty(_ref2, _this7.mainDirection, "".concat(dot.pos, "%")), vue_slider_defineProperty(_ref2, "transition", "".concat(_this7.mainDirection, " ").concat(_this7.animateTime, "s")), _ref2)],
            "onDragStart": function onDragStart() {
              return _this7.dragStart(index);
            },
            "role": "slider",
            "aria-valuenow": dot.value,
            "aria-valuemin": _this7.min,
            "aria-valuemax": _this7.max,
            "aria-orientation": _this7.isHorizontal ? 'horizontal' : 'vertical',
            "tabindex": "0",
            "nativeOnFocus": function nativeOnFocus() {
              return _this7.focus(dot, index);
            },
            "nativeOnBlur": function nativeOnBlur() {
              return _this7.blur();
            }
          }, {
            attrs: _this7.dotAttrs
          }, {
            "dotSlot": dotSlot,
            "tooltipSlot": tooltipSlot
          }), null);
        }), this.renderSlot('default', {
          value: this.getValue()
        }, null)])]);
      }
    }, {
      key: "tailSize",
      get: function get() {
        return getSize((this.isHorizontal ? this.height : this.width) || DEFAULT_SLIDER_SIZE);
      }
    }, {
      key: "containerClasses",
      get: function get() {
        return ['vue-slider', ["vue-slider-".concat(this.direction)], {
          'vue-slider-disabled': this.disabled
        }];
      }
    }, {
      key: "containerStyles",
      get: function get() {
        var _ref3 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize],
            _ref4 = vue_slider_slicedToArray(_ref3, 2),
            dotWidth = _ref4[0],
            dotHeight = _ref4[1];

        var containerWidth = this.width ? getSize(this.width) : this.isHorizontal ? 'auto' : getSize(DEFAULT_SLIDER_SIZE);
        var containerHeight = this.height ? getSize(this.height) : this.isHorizontal ? getSize(DEFAULT_SLIDER_SIZE) : 'auto';
        return {
          padding: this.contained ? "".concat(dotHeight / 2, "px ").concat(dotWidth / 2, "px") : this.isHorizontal ? "".concat(dotHeight / 2, "px 0") : "0 ".concat(dotWidth / 2, "px"),
          width: containerWidth,
          height: containerHeight
        };
      }
    }, {
      key: "processArray",
      get: function get() {
        var _this8 = this;

        return this.control.processArray.map(function (_ref5, index) {
          var _objectSpread2;

          var _ref6 = vue_slider_slicedToArray(_ref5, 3),
              start = _ref6[0],
              end = _ref6[1],
              style = _ref6[2];

          if (start > end) {
            ;
            var _ref7 = [end, start];
            start = _ref7[0];
            end = _ref7[1];
          }

          var sizeStyleKey = _this8.isHorizontal ? 'width' : 'height';
          return {
            start: start,
            end: end,
            index: index,
            style: vue_slider_objectSpread(vue_slider_objectSpread((_objectSpread2 = {}, vue_slider_defineProperty(_objectSpread2, _this8.isHorizontal ? 'height' : 'width', '100%'), vue_slider_defineProperty(_objectSpread2, _this8.isHorizontal ? 'top' : 'left', 0), vue_slider_defineProperty(_objectSpread2, _this8.mainDirection, "".concat(start, "%")), vue_slider_defineProperty(_objectSpread2, sizeStyleKey, "".concat(end - start, "%")), vue_slider_defineProperty(_objectSpread2, "transitionProperty", "".concat(sizeStyleKey, ",").concat(_this8.mainDirection)), vue_slider_defineProperty(_objectSpread2, "transitionDuration", "".concat(_this8.animateTime, "s")), _objectSpread2), _this8.processStyle), style)
          };
        });
      }
    }, {
      key: "dotBaseStyle",
      get: function get() {
        var _ref8 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize],
            _ref9 = vue_slider_slicedToArray(_ref8, 2),
            dotWidth = _ref9[0],
            dotHeight = _ref9[1];

        var dotPos;

        if (this.isHorizontal) {
          dotPos = vue_slider_defineProperty({
            transform: "translate(".concat(this.isReverse ? '50%' : '-50%', ", -50%)"),
            WebkitTransform: "translate(".concat(this.isReverse ? '50%' : '-50%', ", -50%)"),
            top: '50%'
          }, this.direction === 'ltr' ? 'left' : 'right', '0');
        } else {
          dotPos = vue_slider_defineProperty({
            transform: "translate(-50%, ".concat(this.isReverse ? '50%' : '-50%', ")"),
            WebkitTransform: "translate(-50%, ".concat(this.isReverse ? '50%' : '-50%', ")"),
            left: '50%'
          }, this.direction === 'btt' ? 'bottom' : 'top', '0');
        }

        return vue_slider_objectSpread({
          width: "".concat(dotWidth, "px"),
          height: "".concat(dotHeight, "px")
        }, dotPos);
      }
    }, {
      key: "mainDirection",
      get: function get() {
        switch (this.direction) {
          case 'ltr':
            return 'left';

          case 'rtl':
            return 'right';

          case 'btt':
            return 'bottom';

          case 'ttb':
            return 'top';
        }
      }
    }, {
      key: "isHorizontal",
      get: function get() {
        return this.direction === 'ltr' || this.direction === 'rtl';
      }
    }, {
      key: "isReverse",
      get: function get() {
        return this.direction === 'rtl' || this.direction === 'btt';
      }
    }, {
      key: "tooltipDirections",
      get: function get() {
        var dir = this.tooltipPlacement || (this.isHorizontal ? 'top' : 'left');

        if (Array.isArray(dir)) {
          return dir;
        } else {
          return this.dots.map(function () {
            return dir;
          });
        }
      }
    }, {
      key: "dots",
      get: function get() {
        var _this9 = this;

        return this.control.dotsPos.map(function (pos, index) {
          return vue_slider_objectSpread({
            pos: pos,
            index: index,
            value: _this9.control.dotsValue[index],
            focus: _this9.states.has(SliderState.Focus) && _this9.focusDotIndex === index,
            disabled: _this9.disabled,
            style: _this9.dotStyle
          }, (Array.isArray(_this9.dotOptions) ? _this9.dotOptions[index] : _this9.dotOptions) || {});
        });
      }
    }, {
      key: "animateTime",
      get: function get() {
        if (this.states.has(SliderState.Drag)) {
          return 0;
        }

        return this.duration;
      }
    }, {
      key: "canSort",
      get: function get() {
        return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
      }
    }, {
      key: "sliderData",
      get: function get() {
        var _this10 = this;

        if (this.isObjectArrayData(this.vData)) {
          return this.vData.map(function (obj) {
            return obj[_this10.dataValue];
          });
        } else if (this.isObjectData(this.vData)) {
          return Object.keys(this.vData);
        } else {
          return this.vData;
        }
      }
    }, {
      key: "sliderMarks",
      get: function get() {
        var _this11 = this;

        if (this.marks) {
          return this.marks;
        } else if (this.isObjectArrayData(this.vData)) {
          return function (val) {
            var mark = {
              label: val
            };

            _this11.vData.some(function (obj) {
              if (obj[_this11.dataValue] === val) {
                mark.label = obj[_this11.dataLabel];
                return true;
              }

              return false;
            });

            return mark;
          };
        } else if (this.isObjectData(this.vData)) {
          return this.vData;
        }
      }
    }, {
      key: "sliderTooltipFormatter",
      get: function get() {
        var _this12 = this;

        if (this.tooltipFormatter) {
          return this.tooltipFormatter;
        } else if (this.isObjectArrayData(this.vData)) {
          return function (val) {
            var tooltipText = '' + val;

            _this12.vData.some(function (obj) {
              if (obj[_this12.dataValue] === val) {
                tooltipText = obj[_this12.dataLabel];
                return true;
              }

              return false;
            });

            return tooltipText;
          };
        } else if (this.isObjectData(this.vData)) {
          var data = this.vData;
          return function (val) {
            return data[val];
          };
        }
      }
    }, {
      key: "isNotSync",
      get: function get() {
        var values = this.control.dotsValue;
        return Array.isArray(this.modelValue) ? this.modelValue.length !== values.length || this.modelValue.some(function (val, index) {
          return val !== values[index];
        }) : this.modelValue !== values[0];
      }
    }, {
      key: "dragRange",
      get: function get() {
        var prevDot = this.dots[this.focusDotIndex - 1];
        var nextDot = this.dots[this.focusDotIndex + 1];
        return [prevDot ? prevDot.pos : -Infinity, nextDot ? nextDot.pos : Infinity];
      }
    }]);

    return VueSlider;
  }(Vue);

  __decorate([Prop({
    default: 0
  })], VueSlider.prototype, "modelValue", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], VueSlider.prototype, "silent", void 0);

  __decorate([Prop({
    default: 'ltr',
    validator: function validator(dir) {
      return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(dir) > -1;
    }
  })], VueSlider.prototype, "direction", void 0);

  __decorate([Prop({
    type: [Number, String]
  })], VueSlider.prototype, "width", void 0);

  __decorate([Prop({
    type: [Number, String]
  })], VueSlider.prototype, "height", void 0);

  __decorate([Prop({
    default: 14
  })], VueSlider.prototype, "dotSize", void 0);

  __decorate([Prop({
    default: false
  })], VueSlider.prototype, "contained", void 0);

  __decorate([Prop({
    type: Number,
    default: 0
  })], VueSlider.prototype, "min", void 0);

  __decorate([Prop({
    type: Number,
    default: 100
  })], VueSlider.prototype, "max", void 0);

  __decorate([Prop({
    type: Number,
    default: 1
  })], VueSlider.prototype, "interval", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], VueSlider.prototype, "disabled", void 0);

  __decorate([Prop({
    type: Boolean,
    default: true
  })], VueSlider.prototype, "clickable", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], VueSlider.prototype, "dragOnClick", void 0);

  __decorate([Prop({
    type: Number,
    default: 0.5
  })], VueSlider.prototype, "duration", void 0);

  __decorate([Prop({
    type: [Array, Object]
  })], VueSlider.prototype, "vData", void 0);

  __decorate([Prop({
    type: String,
    default: 'value'
  })], VueSlider.prototype, "dataValue", void 0);

  __decorate([Prop({
    type: String,
    default: 'label'
  })], VueSlider.prototype, "dataLabel", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], VueSlider.prototype, "lazy", void 0);

  __decorate([Prop({
    type: String,
    validator: function validator(val) {
      return ['none', 'always', 'focus', 'hover', 'active'].indexOf(val) > -1;
    },
    default: 'active'
  })], VueSlider.prototype, "tooltip", void 0);

  __decorate([Prop({
    type: [String, Array],
    validator: function validator(data) {
      return (Array.isArray(data) ? data : [data]).every(function (val) {
        return ['top', 'right', 'bottom', 'left'].indexOf(val) > -1;
      });
    }
  })], VueSlider.prototype, "tooltipPlacement", void 0);

  __decorate([Prop({
    type: [String, Array, Function]
  })], VueSlider.prototype, "tooltipFormatter", void 0);

  __decorate([Prop({
    type: Boolean,
    default: true
  })], VueSlider.prototype, "useKeyboard", void 0);

  __decorate([Prop(Function)], VueSlider.prototype, "keydownHook", void 0);

  __decorate([Prop({
    type: Boolean,
    default: true
  })], VueSlider.prototype, "enableCross", void 0);

  __decorate([Prop({
    type: Boolean,
    default: false
  })], VueSlider.prototype, "fixed", void 0);

  __decorate([Prop({
    type: Boolean,
    default: true
  })], VueSlider.prototype, "order", void 0);

  __decorate([Prop(Number)], VueSlider.prototype, "minRange", void 0);

  __decorate([Prop(Number)], VueSlider.prototype, "maxRange", void 0);

  __decorate([Prop({
    type: [Boolean, Object, Array, Function],
    default: false
  })], VueSlider.prototype, "marks", void 0);

  __decorate([Prop({
    type: [Boolean, Function],
    default: true
  })], VueSlider.prototype, "process", void 0);

  __decorate([Prop(Boolean)], VueSlider.prototype, "included", void 0);

  __decorate([Prop(Boolean)], VueSlider.prototype, "adsorb", void 0);

  __decorate([Prop(Boolean)], VueSlider.prototype, "hideLabel", void 0);

  __decorate([Prop()], VueSlider.prototype, "dotOptions", void 0);

  __decorate([Prop()], VueSlider.prototype, "dotAttrs", void 0);

  __decorate([Prop()], VueSlider.prototype, "railStyle", void 0);

  __decorate([Prop()], VueSlider.prototype, "processStyle", void 0);

  __decorate([Prop()], VueSlider.prototype, "dotStyle", void 0);

  __decorate([Prop()], VueSlider.prototype, "tooltipStyle", void 0);

  __decorate([Prop()], VueSlider.prototype, "stepStyle", void 0);

  __decorate([Prop()], VueSlider.prototype, "stepActiveStyle", void 0);

  __decorate([Prop()], VueSlider.prototype, "labelStyle", void 0);

  __decorate([Prop()], VueSlider.prototype, "labelActiveStyle", void 0);

  __decorate([Watch('modelValue')], VueSlider.prototype, "onValueChanged", null);

  VueSlider = __decorate([Options({
    name: 'VueSlider',
    emits: ['change', 'drag-start', 'dragging', 'drag-end', 'error', 'update:modelValue'],
    data: function data() {
      return {
        control: null
      };
    },
    components: {
      VueSliderDot: vue_slider_dot,
      VueSliderMark: vue_slider_mark
    }
  })], VueSlider);
  return VueSlider;
}();

/* harmony default export */ var vue_slider = (vue_slider_VueSlider);
// CONCATENATED MODULE: ./lib/index.ts
/* tslint:disable:import-spacing */




vue_slider.VueSliderMark = vue_slider_mark;
vue_slider.VueSliderDot = vue_slider_dot;
/* harmony default export */ var lib = (vue_slider);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-slider-component.umd.js.map