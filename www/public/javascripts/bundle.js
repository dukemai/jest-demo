webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(81)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(230)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Title = __webpack_require__(258);

Object.defineProperty(exports, 'Title', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Title).default;
  }
});

var _SubTitle = __webpack_require__(259);

Object.defineProperty(exports, 'SubTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SubTitle).default;
  }
});

var _Brand = __webpack_require__(110);

Object.defineProperty(exports, 'Brand', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Brand).default;
  }
});

var _Hero = __webpack_require__(260);

Object.defineProperty(exports, 'Hero', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hero).default;
  }
});

var _NavBar = __webpack_require__(261);

Object.defineProperty(exports, 'NavBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavBar).default;
  }
});

var _Footer = __webpack_require__(263);

Object.defineProperty(exports, 'Footer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Footer).default;
  }
});

var _Section = __webpack_require__(264);

Object.defineProperty(exports, 'Section', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Section).default;
  }
});
Object.defineProperty(exports, 'SectionTitle', {
  enumerable: true,
  get: function get() {
    return _Section.SectionTitle;
  }
});
Object.defineProperty(exports, 'SubSectionTitle', {
  enumerable: true,
  get: function get() {
    return _Section.SubSectionTitle;
  }
});

var _Card = __webpack_require__(267);

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Card).default;
  }
});
Object.defineProperty(exports, 'CardImage', {
  enumerable: true,
  get: function get() {
    return _Card.CardImage;
  }
});
Object.defineProperty(exports, 'CardContent', {
  enumerable: true,
  get: function get() {
    return _Card.CardContent;
  }
});
Object.defineProperty(exports, 'CardMediaContent', {
  enumerable: true,
  get: function get() {
    return _Card.CardMediaContent;
  }
});

var _Box = __webpack_require__(271);

Object.defineProperty(exports, 'Box', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Box).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(244);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(246);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(247);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(253);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(255);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prompt__ = __webpack_require__(236);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Redirect__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StaticRouter__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch__ = __webpack_require__(241);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matchPath__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__withRouter__ = __webpack_require__(242);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__withRouter__["a"]; });



















/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(274);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(232);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(233);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(25);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict;

  var _compilePath = compilePath(path, { end: exact, strict: strict }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matchPath__ = __webpack_require__(70);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, _ref2) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact;
    var route = _ref2.route;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    var pathname = (location || route.location).pathname;

    return path ? Object(__WEBPACK_IMPORTED_MODULE_3__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        component = _props.component,
        render = _props.render,
        children = _props.children;


    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props2 = this.props,
        children = _props2.children,
        component = _props2.component,
        render = _props2.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.Children.only(children) : null : null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        props = _objectWithoutProperties(_props, ['replace', 'to']); // eslint-disable-line no-unused-vars

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var Brand = function Brand() {
    return _react2.default.createElement(
        "div",
        { className: "navbar-brand" },
        _react2.default.createElement(
            "a",
            { href: "https://niteco.se", className: "navbar-item" },
            _react2.default.createElement("img", { src: "/images/niteco.svg", width: "112px", height: "28px" })
        )
    );
};

Brand.propTypes = propTypes;
Brand.defaultProps = defaultProps;

exports.default = Brand;

/***/ }),
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

__webpack_require__(290);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var content = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
            'strong',
            null,
            'Express'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 4'
        )
    ),
    _react2.default.createElement(
        'pre',
        null,
        'express --view=ejs www'
    )
);

var Express = function Express() {
    return _react2.default.createElement(_share.Box, {
        boxImage: '/images/express.svg',
        content: content,
        className: 'express-box'
    });
};

Express.propTypes = propTypes;
Express.defaultProps = defaultProps;

exports.default = Express;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

__webpack_require__(298);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var webpackScript = 'module.exports = {\n  entry: {\n    bundle: path.join(__dirname, \'client\', \'index.js\'),\n    vendor: [\'react\', \'lodash\', ...],\n  },\n  output: {\n    path: path.join(__dirname, \'public\', \'dist\', \'scripts\'),\n    publicPath: \'/dist/scripts/\',\n    filename: \'[name].js\',\n  },\n  module: {\n    loaders: [\n      {\n        test: path.join(__dirname, \'client\'),\n        loader: \'babel-loader\',\n        query: {\n          cacheDirectory: \'babel_cache\',\n          presets: [\'es2015\', \'stage-0\', \'react\'],\n        },\n      },\n      {\n        test: /.css$/,\n        use: [\'style-loader\', \'css-loader\'],\n      },\n    ],\n  },\n  plugins: [\n    new Dotenv({\n      path: \'./.env\',\n      safe: false,\n    }),\n    new webpack.optimize.CommonsChunkPlugin({\n      name: \'vendor\',\n      filename: \'vendor.js\',\n    }),\n    new webpack.optimize.OccurrenceOrderPlugin(),\n    new UglifyJsPlugin({ sourceMap: true }),\n    new ProgressBarPlugin({\n      clear: false,\n    }),\n  ],\n  devServer: {\n    contentBase: \'/dist/scripts/\',\n    compress: true,\n    port: 9000,\n  },\n};\n';
var content = _react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'p',
    null,
    _react2.default.createElement(
      'strong',
      null,
      'Webpack'
    ),
    ' ',
    _react2.default.createElement(
      'small',
      null,
      '@version 2'
    )
  ),
  _react2.default.createElement(
    'pre',
    null,
    webpackScript
  )
);

var Webpack = function Webpack() {
  return _react2.default.createElement(_share.Box, {
    boxImage: '/images/webpack.svg',
    content: content,
    className: 'webpack-box'
  });
};

Webpack.propTypes = propTypes;
Webpack.defaultProps = defaultProps;

exports.default = Webpack;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

__webpack_require__(303);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var content = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
            'strong',
            null,
            'Eslint'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 4'
        ),
        _react2.default.createElement('br', null),
        'Coupled with ',
        _react2.default.createElement(
            'strong',
            null,
            'AirBnB rules'
        )
    ),
    _react2.default.createElement(
        'pre',
        null,
        '"eslint": "^3.19.0",',
        _react2.default.createElement('br', null),
        '"eslint-config-airbnb": "^15.0.1",',
        _react2.default.createElement('br', null),
        '"eslint-find-rules": "^1.14.3",',
        _react2.default.createElement('br', null),
        '"eslint-plugin-babel": "^4.1.1",',
        _react2.default.createElement('br', null),
        '"eslint-plugin-import": "^2.2.0",',
        _react2.default.createElement('br', null),
        '"eslint-plugin-jsx-a11y": "^5.0.3",',
        _react2.default.createElement('br', null),
        '"eslint-plugin-react": "^7.0.1",'
    )
);

var Eslint = function Eslint() {
    return _react2.default.createElement(_share.Box, {
        boxImage: '/images/airbnb.svg',
        content: content,
        className: 'eslint-box'
    });
};

Eslint.propTypes = propTypes;
Eslint.defaultProps = defaultProps;

exports.default = Eslint;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = __webpack_require__(116);

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = (0, _socket2.default)('/');
exports.default = socket;

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(339);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(50);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(10);

var _components = __webpack_require__(256);

var _io = __webpack_require__(115);

var _io2 = _interopRequireDefault(_io);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
            'div',
            { className: 'app' },
            _react2.default.createElement(_reactRouterDom.Route, { path: '/admin', component: _components.Remote }),
            _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(_components.NavBar, null)
            ),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/', component: _components.FirstPage }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/intro', component: _components.Intro }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/agenda', component: _components.Agenda }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/technicalstacks/:scrollTo?', component: _components.TechnicalStacks }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/jest', component: _components.JestIntro }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/jest/setup', component: _components.JestSetup }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/jest/testing-against-database', component: _components.TestingAgainstDatabase }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/jest/testing-api', component: _components.TestingAPI }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/jest/testing-react', component: _components.TestingReact }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '(/admin)?/the-end', component: _components.TheEnd })
        )
    );
};

_io2.default.on('remote-command', function (data) {
    window.location.hash = '/' + data.action;
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('mainContent'));

/***/ }),
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_2_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["e" /* Router */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(13);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(49);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(25);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(45);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(67);

var _PathUtils = __webpack_require__(36);

var _createTransitionManager = __webpack_require__(68);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

module.exports = resolvePathname;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var valueEqual = function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
    return valueEqual(item, b[index]);
  });

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
};

exports.default = valueEqual;

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Router__ = __webpack_require__(69);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_2_history_createMemoryHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(25);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(36);

var _LocationUtils = __webpack_require__(67);

var _createTransitionManager = __webpack_require__(68);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * The public API for updating the location programatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;


    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object])
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(239)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_PathUtils__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(69);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: Object(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["addLeadingSlash"])(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = Object(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["addLeadingSlash"])(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["parsePath"])(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : Object(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return Object(__WEBPACK_IMPORTED_MODULE_3_history_PathUtils__["addLeadingSlash"])(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matchPath__ = __webpack_require__(70);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? Object(__WEBPACK_IMPORTED_MODULE_3__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(108);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], { render: function render(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};


/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createHashHistory__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(15);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_2_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router__["e" /* Router */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(25);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(45);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(67);

var _PathUtils = __webpack_require__(36);

var _createTransitionManager = __webpack_require__(68);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["a"]; });


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(109);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["d" /* Route */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [activeClassName, className].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

NavLink.defaultProps = {
  activeClassName: 'active'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["b"]; });


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["c"]; });


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["d"]; });


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["e"]; });


/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["f"]; });


/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["g"]; });


/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["h"]; });


/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["i"]; });


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Agenda = __webpack_require__(257);

Object.defineProperty(exports, 'Agenda', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Agenda).default;
  }
});

var _Intro = __webpack_require__(275);

Object.defineProperty(exports, 'Intro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Intro).default;
  }
});

var _FirstPage = __webpack_require__(281);

Object.defineProperty(exports, 'FirstPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FirstPage).default;
  }
});

var _TechnicalStacks = __webpack_require__(284);

Object.defineProperty(exports, 'TechnicalStacks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TechnicalStacks).default;
  }
});

var _share = __webpack_require__(5);

Object.defineProperty(exports, 'NavBar', {
  enumerable: true,
  get: function get() {
    return _share.NavBar;
  }
});

var _Remote = __webpack_require__(307);

Object.defineProperty(exports, 'Remote', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Remote).default;
  }
});

var _Eslint = __webpack_require__(114);

Object.defineProperty(exports, 'Eslint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Eslint).default;
  }
});

var _Express = __webpack_require__(112);

Object.defineProperty(exports, 'Express', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Express).default;
  }
});

var _Webpack = __webpack_require__(113);

Object.defineProperty(exports, 'Webpack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Webpack).default;
  }
});

var _TheEnd = __webpack_require__(332);

Object.defineProperty(exports, 'TheEnd', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TheEnd).default;
  }
});

var _Jest = __webpack_require__(333);

Object.defineProperty(exports, 'JestIntro', {
  enumerable: true,
  get: function get() {
    return _Jest.JestIntro;
  }
});
Object.defineProperty(exports, 'JestSetup', {
  enumerable: true,
  get: function get() {
    return _Jest.JestSetup;
  }
});
Object.defineProperty(exports, 'TestingAgainstDatabase', {
  enumerable: true,
  get: function get() {
    return _Jest.TestingAgainstDatabase;
  }
});
Object.defineProperty(exports, 'TestingAPI', {
  enumerable: true,
  get: function get() {
    return _Jest.TestingAPI;
  }
});
Object.defineProperty(exports, 'TestingReact', {
  enumerable: true,
  get: function get() {
    return _Jest.TestingReact;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var Agenda = function Agenda() {
    return _react2.default.createElement(
        'div',
        { className: 'agenda' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'Agenda'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'The main topic is testing with ',
                        _react2.default.createElement(
                            'a',
                            null,
                            '#Jest'
                        ),
                        _react2.default.createElement('br', null),
                        'Walk through a setup for NodeJS project and look at how Jest helps a project.',
                        _react2.default.createElement('br', null),
                        'Today bullet points',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/TechnicalStacks' },
                            'Technical Stacks'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'container content' },
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/TechnicalStacks' },
                        'Technical Stacks(typical setup)'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/TechnicalStacks/Express' },
                                'Express, MongoDB, Mongoose'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/TechnicalStacks' },
                                'Eslint, AirBnB Rules, Webpack, Gulp'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/TechnicalStacks/Docker' },
                                'Docker, Swagger'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/TechnicalStacks/React' },
                                'ES6, React, Redux, Redux Thunk, Axios'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/Jest' },
                        'Testing with Jest'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Jest' },
                                'Short Intro'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Jest' },
                                'Setup and simple testing'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'Jest in action',
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Jest/testing-against-database' },
                                'Testing against databases'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Jest/testing-api' },
                                'Testing APIs'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/Jest/testing-react' },
                                'Testing React'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/the-end' },
                        'The End'
                    )
                )
            )
        ),
        _react2.default.createElement(_share.Footer, null)
    );
};

Agenda.propTypes = propTypes;
Agenda.defaultProps = defaultProps;

exports.default = Agenda;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var Title = function Title(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'p',
        { className: 'title' },
        children
    );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

exports.default = Title;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var SubTitle = function SubTitle(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'p',
        { className: 'subtitle' },
        children
    );
};

SubTitle.propTypes = propTypes;
SubTitle.defaultProps = defaultProps;

exports.default = SubTitle;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var Hero = function Hero(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'section',
        { className: 'hero is-primary' },
        _react2.default.createElement(
            'div',
            { className: 'hero-body' },
            _react2.default.createElement(
                'div',
                { className: 'container' },
                children
            )
        )
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

exports.default = Hero;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Brand = __webpack_require__(110);

var _Brand2 = _interopRequireDefault(_Brand);

var _NavBarItem = __webpack_require__(262);

var _NavBarItem2 = _interopRequireDefault(_NavBarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {};

var defaultProps = {};

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

        _this.state = {
            isActive: false
        };
        _this.toggleMenu = _this.toggleMenu.bind(_this);
        return _this;
    }

    _createClass(NavBar, [{
        key: 'toggleMenu',
        value: function toggleMenu() {
            var isActive = this.state.isActive;

            this.setState({
                isActive: !isActive
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var isActive = this.state.isActive;

            var activeClass = isActive ? 'is-active' : '';
            return _react2.default.createElement(
                'nav',
                { className: 'navbar' },
                _react2.default.createElement(_Brand2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-menu' },
                    _react2.default.createElement(
                        'div',
                        { onClick: this.toggleMenu, className: 'navbar-item has-dropdown ' + activeClass },
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-link' },
                            'Content'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'navbar-dropdown' },
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Start', link: '/' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Intro', link: '/Intro' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Agenda', link: '/Agenda' }),
                            _react2.default.createElement('hr', { className: 'navbar-divider' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Technical Stacks', link: '/TechnicalStacks' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'MongoDB', link: '/TechnicalStacks/MongoDB' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Express', link: '/TechnicalStacks/Express' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Docker', link: '/TechnicalStacks/Docker' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Webpack', link: '/TechnicalStacks/Webpack' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'React', link: '/TechnicalStacks/React' }),
                            _react2.default.createElement('hr', { className: 'navbar-divider' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Jest', link: '/Jest' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Setup and simple demo', link: '/jest/setup' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Test against database', link: '/jest/testing-against-database' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Test APIs', link: '/jest/testing-api' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'Test React', link: '/jest/testing-react' }),
                            _react2.default.createElement('hr', { className: 'navbar-divider' }),
                            _react2.default.createElement(_NavBarItem2.default, { text: 'The End', link: '/the-end' })
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

exports.default = NavBar;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    text: _propTypes2.default.string,
    link: _propTypes2.default.string
};

var defaultProps = {
    text: '',
    link: ''
};

var NavBarItem = function NavBarItem(_ref) {
    var text = _ref.text,
        link = _ref.link;
    return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: link, className: 'navbar-item' },
        text
    );
};

NavBarItem.propTypes = propTypes;
NavBarItem.defaultProps = defaultProps;

exports.default = NavBarItem;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var Footer = function Footer() {
    return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                'div',
                { className: 'content has-text-centered' },
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'An introduction to Jest'
                    ),
                    ' by ',
                    _react2.default.createElement(
                        'a',
                        { href: 'mailto:duc.mai@niteco.se' },
                        'Duc Mai'
                    ),
                    '. The source code is licensed',
                    _react2.default.createElement(
                        'a',
                        { href: 'http://opensource.org/licenses/mit-license.php' },
                        'MIT'
                    ),
                    '. The website content is licensed ',
                    _react2.default.createElement(
                        'a',
                        { href: 'http://creativecommons.org/licenses/by-nc-sa/4.0/' },
                        'CC ANS 4.0'
                    ),
                    '.'
                )
            )
        )
    );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

exports.default = Footer;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SectionTitle = exports.SubSectionTitle = undefined;

var _SubSectionTitle = __webpack_require__(265);

Object.defineProperty(exports, 'SubSectionTitle', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_SubSectionTitle).default;
    }
});

var _SectionTitle = __webpack_require__(266);

Object.defineProperty(exports, 'SectionTitle', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_SectionTitle).default;
    }
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var Section = function Section(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'section',
        { className: 'section' },
        _react2.default.createElement(
            'div',
            { className: 'container' },
            children
        )
    );
};

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

exports.default = Section;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    text: _propTypes2.default.string
};

var defaultProps = {
    text: ''
};

var SubSectionTitle = function SubSectionTitle(_ref) {
    var text = _ref.text;
    return _react2.default.createElement(
        'h2',
        { className: 'subtitle' },
        text
    );
};

SubSectionTitle.propTypes = propTypes;
SubSectionTitle.defaultProps = defaultProps;

exports.default = SubSectionTitle;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    text: _propTypes2.default.string
};

var defaultProps = {
    text: ''
};

var SectionTitle = function SectionTitle(_ref) {
    var text = _ref.text;
    return _react2.default.createElement(
        'h1',
        { className: 'title' },
        text
    );
};

SectionTitle.propTypes = propTypes;
SectionTitle.defaultProps = defaultProps;

exports.default = SectionTitle;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMediaContent = exports.CardContent = exports.CardImage = undefined;

var _CardImage = __webpack_require__(268);

Object.defineProperty(exports, 'CardImage', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_CardImage).default;
    }
});

var _CardContent = __webpack_require__(269);

Object.defineProperty(exports, 'CardContent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_CardContent).default;
    }
});

var _CardMediaContent = __webpack_require__(270);

Object.defineProperty(exports, 'CardMediaContent', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_CardMediaContent).default;
    }
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var Card = function Card(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'card' },
        children
    );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

exports.default = Card;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var CardImage = function CardImage() {
    return _react2.default.createElement(
        'div',
        { className: 'card-image' },
        _react2.default.createElement(
            'figure',
            { className: 'image is-4by3' },
            _react2.default.createElement('img', { src: 'http://bulma.io/images/placeholders/1280x960.png', alt: 'Image' })
        )
    );
};

CardImage.propTypes = propTypes;
CardImage.defaultProps = defaultProps;

exports.default = CardImage;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var CardContent = function CardContent(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'card-content' },
        children
    );
};

CardContent.propTypes = propTypes;
CardContent.defaultProps = defaultProps;

exports.default = CardContent;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    thumbnail: _propTypes2.default.node,
    authorCredit: _propTypes2.default.node
};

var defaultProps = {
    thumbnail: null,
    authorCredit: null
};

var CardMediaContent = function CardMediaContent(_ref) {
    var thumbnail = _ref.thumbnail,
        authorCredit = _ref.authorCredit;
    return _react2.default.createElement(
        'div',
        { className: 'media' },
        _react2.default.createElement(
            'div',
            { className: 'media-left' },
            thumbnail
        ),
        _react2.default.createElement(
            'div',
            { className: 'media-content' },
            authorCredit
        )
    );
};

CardMediaContent.propTypes = propTypes;
CardMediaContent.defaultProps = defaultProps;

exports.default = CardMediaContent;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(272);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    boxImage: _propTypes2.default.string,
    content: _propTypes2.default.node,
    className: _propTypes2.default.string
};

var defaultProps = {
    boxImage: '',
    content: null,
    className: ''
};

var BoxImage = function BoxImage(boxImage) {
    if (boxImage) {
        return _react2.default.createElement(
            'div',
            { className: 'media-left' },
            _react2.default.createElement(
                'figure',
                { className: 'image is-64x64' },
                _react2.default.createElement('img', { src: boxImage, alt: 'Image' })
            )
        );
    }
};

var Box = function Box(_ref) {
    var boxImage = _ref.boxImage,
        content = _ref.content,
        className = _ref.className;
    return _react2.default.createElement(
        'div',
        { className: 'box ' + className },
        _react2.default.createElement(
            'article',
            { className: 'media' },
            BoxImage(boxImage),
            _react2.default.createElement(
                'div',
                { className: 'media-content' },
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    content
                )
            )
        )
    );
};

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

exports.default = Box;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".box pre {\n  max-width: 640px; }\n", ""]);

// exports


/***/ }),
/* 274 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

var _Avatar = __webpack_require__(276);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _AuthorCredit = __webpack_require__(277);

var _AuthorCredit2 = _interopRequireDefault(_AuthorCredit);

var _AuthorIntro = __webpack_require__(278);

var _AuthorIntro2 = _interopRequireDefault(_AuthorIntro);

__webpack_require__(279);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};
var thumbnail = _react2.default.createElement(_Avatar2.default, null);
var authorCredit = _react2.default.createElement(_AuthorCredit2.default, null);
var Intro = function Intro() {
    return _react2.default.createElement(
        'div',
        { className: 'intro' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'Short Intro'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'the project showcase used in this presentation',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/Agenda' },
                            'Agenda'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            _share.Section,
            null,
            _react2.default.createElement(_share.SubSectionTitle, { text: '#BNP #React #NodeJS #Episerver' }),
            _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                    'div',
                    { className: 'column is-one-third' },
                    _react2.default.createElement(
                        _share.Card,
                        null,
                        _react2.default.createElement(
                            _share.CardContent,
                            null,
                            _react2.default.createElement(_share.CardMediaContent, { thumbnail: thumbnail, authorCredit: authorCredit }),
                            _react2.default.createElement(
                                'div',
                                { className: 'content' },
                                _react2.default.createElement(_AuthorIntro2.default, null)
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'column content' },
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'tag is-info' },
                            'Purpose'
                        ),
                        _react2.default.createElement('br', null),
                        'I started a project two months ago. The project is to report statuses of connections between nodes(',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Epi CMS'
                        ),
                        ', ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Klara CMS'
                        ),
                        ', ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Nav'
                        ),
                        ', ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'FrontEnd Sites DN.se, Di.se'
                        ),
                        ') in the ecosystem.'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'tag is-info' },
                            'History'
                        ),
                        _react2.default.createElement('br', null),
                        'The project was built upon ',
                        _react2.default.createElement(
                            'a',
                            { className: 'is-primary' },
                            ' #.Net and #React '
                        ),
                        ' and later was changed to ',
                        _react2.default.createElement(
                            'a',
                            null,
                            '#NodeJS, #Express, #React '
                        ),
                        '. The project was then using Jest for testing features.'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        _react2.default.createElement(
                            'span',
                            { className: 'tag is-primary' },
                            'Testing with #Jest'
                        ),
                        _react2.default.createElement('br', null),
                        'Tests were created for ensure the businesses and reducing the time for repetitions.'
                    )
                )
            )
        )
    );
};

Intro.propTypes = propTypes;
Intro.defaultProps = defaultProps;

exports.default = Intro;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var Avatar = function Avatar() {
    return _react2.default.createElement(
        'figure',
        { className: 'image is-48x48' },
        _react2.default.createElement('img', { src: 'http://bulma.io/images/placeholders/96x96.png', alt: 'Image' })
    );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

exports.default = Avatar;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var AuthorCredit = function AuthorCredit() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            { className: 'title is-4' },
            'Duc Mai'
        ),
        _react2.default.createElement(
            'p',
            { className: 'subtitle is-6' },
            '@duc-mai-niteco',
            _react2.default.createElement('br', null),
            'duc.mai@niteco.se'
        )
    );
};

AuthorCredit.propTypes = propTypes;
AuthorCredit.defaultProps = defaultProps;

exports.default = AuthorCredit;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node
};

var defaultProps = {
    children: null
};

var AuthorIntro = function AuthorIntro() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Department: ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'Bonnier Program'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'Team: ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'Core CMS'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'Position: ',
                _react2.default.createElement(
                    'strong',
                    null,
                    'Bridge Engineer'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'A full stack developer(5 years experience).'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Competent skills: .Net, ',
                _react2.default.createElement(
                    'a',
                    null,
                    '#Episerver'
                ),
                ', Javascript, CSS.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Transition to: ',
                _react2.default.createElement(
                    'a',
                    null,
                    '#NodeJS'
                ),
                ', ',
                _react2.default.createElement(
                    'a',
                    null,
                    '#React'
                ),
                '.'
            )
        ),
        _react2.default.createElement(
            'a',
            null,
            '#javascriptlover'
        ),
        ' ',
        _react2.default.createElement(
            'a',
            null,
            '#BNP'
        )
    );
};

AuthorIntro.propTypes = propTypes;
AuthorIntro.defaultProps = defaultProps;

exports.default = AuthorIntro;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(280);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".credit {\n  color: #000; }\n", ""]);

// exports


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

__webpack_require__(282);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var FirstPage = function FirstPage() {
    return _react2.default.createElement(
        'div',
        { className: 'first-page' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'An alternative for development with Node'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'A presentation by ',
                        _react2.default.createElement(
                            'span',
                            { className: 'credit' },
                            ' Duc Mai '
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/Intro' },
                            'Intro'
                        )
                    )
                )
            )
        )
    );
};

FirstPage.propTypes = propTypes;
FirstPage.defaultProps = defaultProps;

exports.default = FirstPage;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".credit {\n  color: #000; }\n", ""]);

// exports


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(50);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(10);

var _scrollTo2 = __webpack_require__(111);

var _scrollTo3 = _interopRequireDefault(_scrollTo2);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

var _Express = __webpack_require__(112);

var _Express2 = _interopRequireDefault(_Express);

var _MongoDB = __webpack_require__(292);

var _MongoDB2 = _interopRequireDefault(_MongoDB);

var _Docker = __webpack_require__(295);

var _Docker2 = _interopRequireDefault(_Docker);

var _Webpack = __webpack_require__(113);

var _Webpack2 = _interopRequireDefault(_Webpack);

var _React = __webpack_require__(300);

var _React2 = _interopRequireDefault(_React);

var _Eslint = __webpack_require__(114);

var _Eslint2 = _interopRequireDefault(_Eslint);

__webpack_require__(305);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    match: _propTypes2.default.shape({
        params: _propTypes2.default.shape({
            scrollTo: _propTypes2.default.string
        })
    })
};

var defaultProps = {
    match: {}
};

var TechnicalStacks = function (_React$Component) {
    _inherits(TechnicalStacks, _React$Component);

    function TechnicalStacks(props) {
        _classCallCheck(this, TechnicalStacks);

        var _this = _possibleConstructorReturn(this, (TechnicalStacks.__proto__ || Object.getPrototypeOf(TechnicalStacks)).call(this, props));

        _this.mongoDbElement = null;
        _this.expressElement = null;
        _this.dockerElement = null;
        _this.webpackElement = null;
        _this.reactElement = null;
        _this.mongoDbPosition = _this.expressPosition = _this.reactPosition = _this.dockerPosition = _this.webpackPosition = 0;
        return _this;
    }

    _createClass(TechnicalStacks, [{
        key: 'scrollTo',
        value: function scrollTo(element) {
            var scroll = null;
            switch (element) {
                case 'MongoDB':
                    scroll = this.mongoDbPosition;
                    break;
                case 'Express':
                    scroll = this.expressPosition;
                    break;
                case 'Docker':
                    scroll = this.dockerPosition;
                    break;
                case 'Webpack':
                    scroll = this.webpackPosition;
                    break;
                case 'React':
                    scroll = this.reactPosition;
                    break;
            }
            if (!scroll) {
                return;
            }
            (0, _scrollTo3.default)(0, scroll);
        }
    }, {
        key: 'getPosition',
        value: function getPosition(element) {
            return element.getBoundingClientRect().top;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.match.params.scrollTo) {
                this.scrollTo(this.props.match.params.scrollTo);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.mongoDbPosition = this.getPosition(this.mongoDbElement);
            this.expressPosition = this.getPosition(this.expressElement);
            this.dockerPosition = this.getPosition(this.dockerElement);
            this.webpackPosition = this.getPosition(this.webpackElement);
            this.reactPosition = this.getPosition(this.reactElement);

            if (this.props.match.params.scrollTo) {
                this.scrollTo(this.props.match.params.scrollTo);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'technical-stacks' },
                _react2.default.createElement(
                    _share.Hero,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'columns is-vcentered' },
                        _react2.default.createElement(
                            'div',
                            { className: 'column' },
                            _react2.default.createElement(
                                _share.Title,
                                null,
                                'Technical Stacks'
                            ),
                            _react2.default.createElement(
                                _share.SubTitle,
                                null,
                                'A typical suite when developing NodeJS Web Applications',
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/Jest' },
                                    'Jest'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _share.Section,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'columns' },
                        _react2.default.createElement(
                            'div',
                            { className: 'column' },
                            _react2.default.createElement(
                                'div',
                                { className: 'stack-row' },
                                _react2.default.createElement(_Eslint2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'stack-row', ref: function ref(c) {
                                        _this2.expressElement = c;
                                    } },
                                _react2.default.createElement(_Express2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'stack-row', ref: function ref(c) {
                                        _this2.mongoDbElement = c;
                                    } },
                                _react2.default.createElement(_MongoDB2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'stack-row', ref: function ref(c) {
                                        _this2.dockerElement = c;
                                    } },
                                _react2.default.createElement(_Docker2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'stack-row', ref: function ref(c) {
                                        _this2.webpackElement = c;
                                    } },
                                _react2.default.createElement(_Webpack2.default, null)
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'stack-row', ref: function ref(c) {
                                        _this2.reactElement = c;
                                    } },
                                _react2.default.createElement(_React2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'column is-one-third' },
                            _react2.default.createElement('img', { src: '/images/folder-structure.png', alt: 'project structures' })
                        )
                    )
                ),
                _react2.default.createElement(_share.Footer, null)
            );
        }
    }]);

    return TechnicalStacks;
}(_react2.default.Component);

TechnicalStacks.propTypes = propTypes;
TechnicalStacks.defaultProps = defaultProps;

exports.default = (0, _reactRouterDom.withRouter)(TechnicalStacks);

/***/ }),
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".express-box .image {\n  overflow: hidden; }\n  .express-box .image img {\n    margin-top: 20px; }\n", ""]);

// exports


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

__webpack_require__(293);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var mongooseCode = 'export function connect() {\n    mongoose.Promise = Promise;\n    return mongoose.connect(process.env.MONGO_URI, \n        { useMongoClient: true }, (err, res) => {\n    });\n}\nexport function disconnect() {\n    return mongoose.disconnect();\n}';
var content = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
            'strong',
            null,
            'MongDB'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 3.14'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'strong',
            null,
            'Mongoose'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 4.14'
        ),
        ' to facilitate communications with MongoDB'
    ),
    _react2.default.createElement(
        'pre',
        null,
        mongooseCode
    )
);

var MongoDB = function MongoDB() {
    return _react2.default.createElement(_share.Box, {
        boxImage: '/images/mongodb.png',
        content: content,
        className: 'mongodb-box'
    });
};

MongoDB.propTypes = propTypes;
MongoDB.defaultProps = defaultProps;

exports.default = MongoDB;

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".mongodb-box .image {\n  background: #272727;\n  overflow: hidden; }\n  .mongodb-box .image img {\n    margin-top: 20px; }\n", ""]);

// exports


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

__webpack_require__(296);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var content = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
            'strong',
            null,
            'Docker'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 4'
        )
    ),
    _react2.default.createElement(
        'p',
        null,
        'Dockerfile'
    ),
    _react2.default.createElement(
        'pre',
        null,
        'FROM mhart/alpine-node:latest',
        _react2.default.createElement('br', null),
        'ADD package.json /tmp/package.json',
        _react2.default.createElement('br', null),
        'RUN cd /tmp && npm install',
        _react2.default.createElement('br', null),
        'RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/',
        _react2.default.createElement('br', null),
        'WORKDIR /opt/app',
        _react2.default.createElement('br', null),
        'ADD . /opt/app',
        _react2.default.createElement('br', null),
        'EXPOSE 3000',
        _react2.default.createElement('br', null),
        'CMD ["npm", "run", "start-dev"]'
    ),
    _react2.default.createElement(
        'p',
        null,
        'docker-compose.yml'
    ),
    _react2.default.createElement(
        'pre',
        null,
        'version: "2"',
        _react2.default.createElement('br', null),
        'services:',
        _react2.default.createElement('br', null),
        'web:',
        _react2.default.createElement('br', null),
        'build: .',
        _react2.default.createElement('br', null),
        'ports:',
        _react2.default.createElement('br', null),
        '- "3000:3000"',
        _react2.default.createElement('br', null),
        'links:',
        _react2.default.createElement('br', null),
        '- mongo',
        _react2.default.createElement('br', null),
        'mongo:',
        _react2.default.createElement('br', null),
        'image: mongo',
        _react2.default.createElement('br', null),
        'ports:',
        _react2.default.createElement('br', null),
        '- "27017:27017"',
        _react2.default.createElement('br', null),
        'swager:',
        _react2.default.createElement('br', null),
        'image: swaggerapi/swagger-ui',
        _react2.default.createElement('br', null),
        'ports:',
        _react2.default.createElement('br', null),
        '- "3001:8080"',
        _react2.default.createElement('br', null),
        'environment:',
        _react2.default.createElement('br', null),
        '- API_URL=http://localhost:3000/swagger.json'
    )
);
var Docker = function Docker() {
    return _react2.default.createElement(_share.Box, {
        boxImage: '/images/docker.svg',
        content: content,
        className: 'docker-box'
    });
};

Docker.propTypes = propTypes;
Docker.defaultProps = defaultProps;

exports.default = Docker;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(297);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".docker-box .image {\n  background: #0C6FA5;\n  overflow: hidden; }\n  .docker-box .image img {\n    margin-top: 22px; }\n", ""]);

// exports


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(299);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".webpack-box .image {\n  background: #2B3A42;\n  overflow: hidden; }\n  .webpack-box .image img {\n    margin-top: 20px; }\n", ""]);

// exports


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

__webpack_require__(301);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var mongooseCode = 'const App = () => (\n  <Provider store={store}>\n    <ConnectedRouter history={history}>\n      <HashRouter>\n        <div>\n          <LoadingBar />\n          <Route exact path="/" component={Home} />\n          <Route exact path="/list/:product" component={List} />\n          <Route exact path="/search/:searchText?" component={Search} />\n          <Route exact path="/log/:id" component={Detail} />\n        </div>\n      </HashRouter>\n    </ConnectedRouter>\n  </Provider>\n);';
var content = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
            'strong',
            null,
            'React'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 15.6'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'strong',
            null,
            'Redux'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 4.4.x'
        ),
        ' to manipulate states.',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'strong',
            null,
            'React Router'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version 4.x'
        ),
        ' to handle routing.'
    ),
    _react2.default.createElement(
        'pre',
        null,
        mongooseCode
    )
);

var ReactContent = function ReactContent() {
    return _react2.default.createElement(_share.Box, {
        boxImage: '/images/react.svg',
        content: content,
        className: 'react-box'
    });
};

ReactContent.propTypes = propTypes;
ReactContent.defaultProps = defaultProps;

exports.default = ReactContent;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(302);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".eslint-box .image {\n  overflow: hidden; }\n  .eslint-box .image img {\n    margin-top: 20px; }\n", ""]);

// exports


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(306);
if (typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {};
options.transform = transform;
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if (content.locals) module.exports = content.locals;
// Hot Module Replacement
if (false) {
	// When the styles change, update the <style> tags
	if (!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss", function () {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function () {
		update();
	});
}

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".stack-row {\n  margin-bottom: 1.5rem; }\n", ""]);

// exports


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

var _io = __webpack_require__(115);

var _io2 = _interopRequireDefault(_io);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    children: _propTypes2.default.node,
    history: _propTypes2.default.shape({
        push: _propTypes2.default.func
    })
};

var defaultProps = {
    children: null,
    history: {}
};

var goTo = function goTo(action, history) {
    _io2.default.emit('send-command', { action: action });
    history.push('/admin/' + action);
};

var Remote = function Remote(_ref) {
    var children = _ref.children,
        history = _ref.history;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'ul',
            { className: 'navbar-menu' },
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('', history);
                        } },
                    'First Page'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('Intro', history);
                        } },
                    'Intro'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('Agenda', history);
                        } },
                    'Agenda'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('TechnicalStacks', history);
                        } },
                    'Technical Stacks'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('TechnicalStacks/Express', history);
                        } },
                    'Express'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('TechnicalStacks/MongoDB', history);
                        } },
                    'MongoDB'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('TechnicalStacks/Docker', history);
                        } },
                    'Docker'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('TechnicalStacks/Webpack', history);
                        } },
                    'Webpack'
                )
            )
        ),
        _react2.default.createElement(
            'ul',
            { className: 'navbar-menu' },
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('Jest', history);
                        } },
                    'Jest Introduction'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('Jest/setup', history);
                        } },
                    'Jest Setup'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('Jest/testing-against-database', history);
                        } },
                    'Test Database'
                )
            ),
            _react2.default.createElement(
                'li',
                { className: 'navbar-item' },
                _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                            return goTo('Jest/testing-api', history);
                        } },
                    'Test API'
                )
            )
        )
    );
};

Remote.propTypes = propTypes;
Remote.defaultProps = defaultProps;

exports.default = (0, _reactRouterDom.withRouter)(Remote);

/***/ }),
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var TheEnd = function TheEnd() {
    return _react2.default.createElement(
        _share.Hero,
        null,
        _react2.default.createElement(
            'div',
            { className: 'columns is-vcentered' },
            _react2.default.createElement(
                'div',
                { className: 'column' },
                _react2.default.createElement(
                    _share.Title,
                    null,
                    'The End!!!'
                ),
                _react2.default.createElement(
                    _share.SubTitle,
                    null,
                    'Thank you for your listening.',
                    _react2.default.createElement('br', null),
                    'You can reach me @ duc.mai@niteco.se',
                    _react2.default.createElement('br', null),
                    'Follow me on medium https://medium.com/@mrducmv88'
                )
            )
        )
    );
};

TheEnd.propTypes = propTypes;
TheEnd.defaultProps = defaultProps;

exports.default = TheEnd;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Intro = __webpack_require__(334);

Object.defineProperty(exports, 'JestIntro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Intro).default;
  }
});

var _JestSetup = __webpack_require__(340);

Object.defineProperty(exports, 'JestSetup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_JestSetup).default;
  }
});

var _TestingAgainstDatabase = __webpack_require__(344);

Object.defineProperty(exports, 'TestingAgainstDatabase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TestingAgainstDatabase).default;
  }
});

var _TestingReact = __webpack_require__(347);

Object.defineProperty(exports, 'TestingReact', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TestingReact).default;
  }
});

var _TestingAPI = __webpack_require__(351);

Object.defineProperty(exports, 'TestingAPI', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TestingAPI).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

var _EasySetup = __webpack_require__(335);

var _EasySetup2 = _interopRequireDefault(_EasySetup);

var _ZeroConfiguration = __webpack_require__(336);

var _ZeroConfiguration2 = _interopRequireDefault(_ZeroConfiguration);

var _PowerfulMockup = __webpack_require__(337);

var _PowerfulMockup2 = _interopRequireDefault(_PowerfulMockup);

var _TestingBenefit = __webpack_require__(338);

var _TestingBenefit2 = _interopRequireDefault(_TestingBenefit);

__webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var JestIntro = function JestIntro() {
    return _react2.default.createElement(
        'div',
        { className: 'first-page' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'Introduction to Jest'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'a testing framework by ',
                        _react2.default.createElement(
                            'strong',
                            null,
                            'Facebook'
                        ),
                        ' designed for any React project.',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/jest/setup' },
                            'Setup-Simple Demo'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            _share.Section,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                    'div',
                    { className: 'column is-half' },
                    _react2.default.createElement(_TestingBenefit2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'column is-half' },
                    _react2.default.createElement(_EasySetup2.default, null),
                    _react2.default.createElement(_ZeroConfiguration2.default, null),
                    _react2.default.createElement(_PowerfulMockup2.default, null)
                )
            )
        )
    );
};

JestIntro.propTypes = propTypes;
JestIntro.defaultProps = defaultProps;

exports.default = JestIntro;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var EasySetup = function EasySetup() {
    return _react2.default.createElement(
        _share.Card,
        null,
        _react2.default.createElement(
            _share.CardContent,
            null,
            _react2.default.createElement(
                _share.Title,
                null,
                'Easy Setup'
            ),
            _react2.default.createElement(
                'p',
                { className: 'content' },
                'Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project.'
            )
        )
    );
};

EasySetup.propTypes = propTypes;
EasySetup.defaultProps = defaultProps;

exports.default = EasySetup;

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var ZeroConfiguration = function ZeroConfiguration() {
    return _react2.default.createElement(
        _share.Card,
        null,
        _react2.default.createElement(
            _share.CardContent,
            null,
            _react2.default.createElement(
                _share.Title,
                null,
                'Zero configuration testing platform'
            ),
            _react2.default.createElement(
                'p',
                { className: 'content' },
                'Place tests in a __tests__ folder, or name your test files with a .spec.js or .test.js extension.'
            )
        )
    );
};

ZeroConfiguration.propTypes = propTypes;
ZeroConfiguration.defaultProps = defaultProps;

exports.default = ZeroConfiguration;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var PowerfulMockup = function PowerfulMockup() {
    return _react2.default.createElement(
        _share.Card,
        null,
        _react2.default.createElement(
            _share.CardContent,
            null,
            _react2.default.createElement(
                _share.Title,
                null,
                'Powerful mocking library'
            ),
            _react2.default.createElement(
                'p',
                { className: 'content' },
                'Powerful mocking library for functions and modules.'
            )
        )
    );
};

PowerfulMockup.propTypes = propTypes;
PowerfulMockup.defaultProps = defaultProps;

exports.default = PowerfulMockup;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var TestingBenefit = function TestingBenefit() {
    return _react2.default.createElement(
        _share.Card,
        null,
        _react2.default.createElement(
            _share.CardContent,
            null,
            _react2.default.createElement(
                _share.Title,
                null,
                'Benefits of having tests'
            ),
            _react2.default.createElement(
                _share.SubTitle,
                null,
                'it is no doubt that having tests brings a lot of benefits.'
            ),
            _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        'Ensure the chains of the app logic when making changes.'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'Avoid boring and repeatition steps when verifying.'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'Automate generating data for testing.'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        'Code logic is securer when delivering.'
                    )
                )
            )
        )
    );
};

TestingBenefit.propTypes = propTypes;
TestingBenefit.defaultProps = defaultProps;

exports.default = TestingBenefit;

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, ".credit {\n  color: #000; }\n\n.installation pre {\n  max-width: 100%; }\n", ""]);

// exports


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

var _Installation = __webpack_require__(341);

var _Installation2 = _interopRequireDefault(_Installation);

var _SimpleDemo = __webpack_require__(342);

var _SimpleDemo2 = _interopRequireDefault(_SimpleDemo);

var _Notes = __webpack_require__(343);

var _Notes2 = _interopRequireDefault(_Notes);

__webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var JestSetup = function JestSetup() {
    return _react2.default.createElement(
        'div',
        { className: 'first-page' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'Setup Jest'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'Jest is so easy to setup. By default, jest will look for *.test.* files.',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/jest/testing-against-database' },
                            'Testing against database'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            _share.Section,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns' },
                _react2.default.createElement(
                    'div',
                    { className: 'column is-half' },
                    _react2.default.createElement(_Installation2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'column is-half' },
                    _react2.default.createElement(_Notes2.default, null)
                )
            ),
            _react2.default.createElement(_SimpleDemo2.default, null)
        )
    );
};

JestSetup.propTypes = propTypes;
JestSetup.defaultProps = defaultProps;

exports.default = JestSetup;

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var content = _react2.default.createElement(
    'div',
    { className: 'installation' },
    _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
            'strong',
            null,
            'jest'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '@version ^20.0.4'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
            'strong',
            null,
            'babel-jest'
        ),
        ' ',
        _react2.default.createElement(
            'small',
            null,
            '^20.0.3'
        )
    ),
    'Package.json',
    _react2.default.createElement(
        'pre',
        null,
        '"test": "jest --runInBand && set NODE_ENV=test",'
    ),
    'jest.config.js',
    _react2.default.createElement(
        'pre',
        null,
        'module.exports = {\n                    verbose: true,\n                    testPathIgnorePatterns:\n                    [\'/node_modules/\', \'/client/\'],\n                };'
    )
);

var Installation = function Installation() {
    return _react2.default.createElement(_share.Box, { content: content });
};

Installation.propTypes = propTypes;
Installation.defaultProps = defaultProps;

exports.default = Installation;

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var basicUsage = 'test(\'name of test suite\', () => {\n});\ndescribe(\'group of related test suites\', () => {\n});';
var content = _react2.default.createElement(
    'div',
    { className: 'installation' },
    'basic usage',
    _react2.default.createElement(
        'pre',
        null,
        basicUsage
    ),
    'validHelper.js',
    _react2.default.createElement(
        'pre',
        null,
        'export default function isDate(date) {\n                    return (new Date(date) !== \'Invalid Date\') && !isNaN(new Date(date));\n                }'
    ),
    'validHelper.test.js',
    _react2.default.createElement(
        'pre',
        null,
        'import isDate from \'../validHelper\';\n\n                export default function testValidHelper() {\n                describe(\'Date validator testing\', () => {\n                    test(\'isDate invalid\', () => {\n                    const value = isDate(\'abc\');\n                    expect(value).toBe(false);\n                    });\n\n                    test(\'[1] isDate valid\', () => {\n                    const value = isDate(\'2017/06/21 11:21:00\');\n                    expect(value).toBe(true);\n                    });\n\n                    test(\'[2] isDate valid\', () => {\n                    const value = isDate(\'Wed Jun 21 2017 11:29:50 GMT+0200 (CEST)\');\n                    expect(value).toBe(true);\n                    });\n                });\n                }\n                '
    )
);

var SimpleDemo = function SimpleDemo() {
    return _react2.default.createElement(_share.Box, { content: content });
};

SimpleDemo.propTypes = propTypes;
SimpleDemo.defaultProps = defaultProps;

exports.default = SimpleDemo;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var content = _react2.default.createElement(
    'div',
    { className: 'installation' },
    'Few notes to share',
    _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
            'li',
            null,
            'Jest is sensitive with asynchronous code. Remember to return and handle properly your async code.'
        ),
        _react2.default.createElement(
            'li',
            null,
            'Export test functions and combine in an one final test to control the order of tests.'
        ),
        _react2.default.createElement(
            'li',
            null,
            'User before all/after all to do one time setup tasks.'
        ),
        _react2.default.createElement(
            'li',
            null,
            'Set environment to Test when running tests to setup some specific logic.'
        ),
        _react2.default.createElement(
            'li',
            null,
            'Remember to disconnect from mongodb when testing against mongodb'
        )
    )
);

var Notes = function Notes() {
    return _react2.default.createElement(_share.Box, { content: content });
};

Notes.propTypes = propTypes;
Notes.defaultProps = defaultProps;

exports.default = Notes;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

var _Solution = __webpack_require__(345);

var _Solution2 = _interopRequireDefault(_Solution);

var _Solution3 = __webpack_require__(346);

var _Solution4 = _interopRequireDefault(_Solution3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var TestingAgainstDatabase = function TestingAgainstDatabase() {
    return _react2.default.createElement(
        'div',
        { className: 'first-page' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'Testing Against Database'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'Some tips for testing logic interacting with Database.',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/jest/testing-api' },
                            'Testing APIs'
                        ),
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'a',
                            null,
                            '#MongoDB'
                        ),
                        ' and ',
                        _react2.default.createElement(
                            'a',
                            null,
                            '#Mongoose'
                        ),
                        ' are used for demontrastrion'
                    )
                )
            )
        ),
        _react2.default.createElement(
            _share.Section,
            null,
            _react2.default.createElement(_Solution2.default, null),
            _react2.default.createElement(_Solution4.default, null)
        )
    );
};

TestingAgainstDatabase.propTypes = propTypes;
TestingAgainstDatabase.defaultProps = defaultProps;

exports.default = TestingAgainstDatabase;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var content = _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
        'div',
        { className: 'column is-half' },
        '#Solution 1: Mockup mongoose by using Mockgoose',
        _react2.default.createElement(
            'pre',
            null,
            'npm install mockgoose --save-dev'
        ),
        'Setup',
        _react2.default.createElement(
            'pre',
            null,
            'var mongoose = require(\'mongoose\');\n                var Mockgoose = require(\'mockgoose\').Mockgoose;\n                var mockgoose = new Mockgoose(mongoose);\n\n                mockgoose.prepareStorage().then(function() {\n                    // fake connection\t\t\n                });'
        )
    ),
    _react2.default.createElement(
        'div',
        { className: 'column is-half content' },
        'Benefit',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'In memory data'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Do not require a real Mongo installation'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Data is reset every run'
            )
        ),
        'Disadvantages',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Cannot shutdown MongoDB server which keeps Jest cannot terminate processes'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Upgrading mongodb or mongoose might break the mockup code'
            )
        )
    )
);

var Solution1 = function Solution1() {
    return _react2.default.createElement(_share.Box, { content: content });
};

Solution1.propTypes = propTypes;
Solution1.defaultProps = defaultProps;

exports.default = Solution1;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var loadConfig = 'dotenv.config({ path: `.${process.env.NODE_ENV}.env` }); \ndotenv.load();';

var content = _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
        'div',
        { className: 'column is-half' },
        '#Solution 2: Setup a separate database for testing',
        _react2.default.createElement(
            'pre',
            null,
            'set NODE_ENV=test'
        ),
        'Setup',
        _react2.default.createElement(
            'pre',
            null,
            loadConfig
        )
    ),
    _react2.default.createElement(
        'div',
        { className: 'column is-half content' },
        'Benefit',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Test real transactions with database'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Can reuse test data for development'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Can disconnect from MongoDB server so jest can exit properly'
            )
        ),
        'Disadvantages',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Need a mongodb installation'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Need to clear data everytime running tests'
            )
        )
    )
);

var Solution2 = function Solution2() {
    return _react2.default.createElement(_share.Box, { content: content });
};

Solution2.propTypes = propTypes;
Solution2.defaultProps = defaultProps;

exports.default = Solution2;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

var _Enzyme = __webpack_require__(348);

var _Enzyme2 = _interopRequireDefault(_Enzyme);

var _ReduxTesting = __webpack_require__(349);

var _ReduxTesting2 = _interopRequireDefault(_ReduxTesting);

var _Tips = __webpack_require__(350);

var _Tips2 = _interopRequireDefault(_Tips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var TestingReact = function TestingReact() {
    return _react2.default.createElement(
        'div',
        { className: 'first-page' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'Testing React'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'Jest is designed to test any React Project.',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/the-end' },
                            'The End'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            _share.Section,
            null,
            _react2.default.createElement(_Enzyme2.default, null),
            _react2.default.createElement(_ReduxTesting2.default, null),
            _react2.default.createElement(_Tips2.default, null)
        )
    );
};

TestingReact.propTypes = propTypes;
TestingReact.defaultProps = defaultProps;

exports.default = TestingReact;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var script = 'import { shallow, mount, render } from \'enzyme\';\nappInstance = mount(\n      <App />,\n)\n\n//events\nconst homeColumn = appInstance.find(\'HomeColumn\').first();       \nhomeColumn.find(\'Link\').simulate(\'click\', { button: 0 });   \n\n//verify\nexpect(appInstance.find(\'HomeColumn\').length).toEqual(3);\n';

var content = _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
        'div',
        { className: 'column is-half' },
        _react2.default.createElement(
            'strong',
            null,
            'Enzyme'
        ),
        _react2.default.createElement('br', null),
        'Install',
        _react2.default.createElement(
            'pre',
            null,
            'npm install enzyme --save-dev'
        ),
        'Setup',
        _react2.default.createElement(
            'pre',
            null,
            script
        )
    ),
    _react2.default.createElement(
        'div',
        { className: 'column is-half content' },
        _react2.default.createElement(
            'strong',
            null,
            'Enzyme'
        ),
        ' is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components\' output.',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'able to render react components'
            ),
            _react2.default.createElement(
                'li',
                null,
                'able to mount react components'
            ),
            _react2.default.createElement(
                'li',
                null,
                'able to find react components'
            ),
            _react2.default.createElement(
                'li',
                null,
                'able to simulate events'
            )
        )
    )
);

var Enzyme = function Enzyme() {
    return _react2.default.createElement(_share.Box, { content: content });
};

Enzyme.propTypes = propTypes;
Enzyme.defaultProps = defaultProps;

exports.default = Enzyme;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var script = 'import configureStore from \'redux-mock-store\'\n\nconst middlewares = []\nconst mockStore = configureStore(middlewares)\n\n// You would import the action from your codebase in a real scenario\nconst addTodo = () => ({ type: \'ADD_TODO\' })\n\nit(\'should dispatch action\', () => {\n\n  // Initialize mockstore with empty state\n  const initialState = {}\n  const store = mockStore(initialState)\n\n  // Dispatch the action\n  store.dispatch(addTodo())\n\n  // Test if your store dispatched the expected actions\n  const actions = store.getActions()\n  const expectedPayload = { type: \'ADD_TODO\' }\n  expect(actions).toEqual([expectedPayload])\n})\n';

var content = _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
        'div',
        { className: 'column is-half' },
        _react2.default.createElement(
            'strong',
            null,
            'Redux Testing - redux-mock-store'
        ),
        _react2.default.createElement('br', null),
        'Install',
        _react2.default.createElement(
            'pre',
            null,
            'npm install redux-mock-store --save-dev'
        ),
        'Usage',
        _react2.default.createElement(
            'pre',
            null,
            script
        )
    ),
    _react2.default.createElement(
        'div',
        { className: 'column is-half content' },
        _react2.default.createElement(
            'strong',
            null,
            'redux-mock-store'
        ),
        ' is a good for testing Redux separately.',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Recommended by Redux'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Able to test async actions'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Able to test with middlewares'
            )
        )
    )
);

var ReduxTesting = function ReduxTesting() {
    return _react2.default.createElement(_share.Box, { content: content });
};

ReduxTesting.propTypes = propTypes;
ReduxTesting.defaultProps = defaultProps;

exports.default = ReduxTesting;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var script = 'appInstance = mount(\n    <App />,\n)';

var triggerEvents = 'return delayClickOnEpi()\n.then(delayGetState)\n.then((state) => {\n    const stateListing = state.listing;\n\n    expect(stateListing.items.length).toEqual(6);\n    expect(stateListing.totalPages).toEqual(1);\n    expect(stateListing.totalItems).toEqual(6);\n    \n    const listingPage = appInstance.find(\'List\');\n    expect(listingPage.length).toEqual(1);\n    \n});';

var nockContent = 'const productResult = await request(app)\n.get(\'/api/products\')\n.expect(200)\n.then(res => res.body);\n\nnock(baseUrl)\n.get(\'/api/products\')\n.reply(200, productResult, {\'Access-Control-Allow-Origin\': \'*\'});';

var delayScript = 'export function delay(fn, timeout){\n  const t = timeout || defaultTimeout;\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {            \n      const result = fn();\n      \n      if(result) {\n        resolve(result);\n      } else {  \n        resolve(true);\n      }\n\n    }, t);\n  });\n}';

var content = _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
        'div',
        { className: 'column is-half' },
        'Nock + Supertest to mockup requests',
        _react2.default.createElement(
            'pre',
            null,
            nockContent
        ),
        'Mount the app',
        _react2.default.createElement(
            'pre',
            null,
            script
        ),
        'Trigger events + Delay verification',
        _react2.default.createElement(
            'pre',
            null,
            triggerEvents
        ),
        'Delay function',
        _react2.default.createElement(
            'pre',
            null,
            delayScript
        )
    ),
    _react2.default.createElement(
        'div',
        { className: 'column is-half content' },
        _react2.default.createElement(
            'strong',
            null,
            'Tips'
        ),
        _react2.default.createElement(
            'p',
            null,
            'We can test features of an application by using Jest, Enzyme, Nock and Delay.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Stacks for testing features',
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Enzyme'
                    ),
                    ' to mount the App which enable full length cycle of rendering.'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Nock'
                    ),
                    ' to hjack all requests to servers and returns some mockup data.'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Supertest'
                    ),
                    ' to feed data for Nock.'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Store'
                    ),
                    ' should be exported from the application for verification.'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        'strong',
                        null,
                        'setTimeOut'
                    ),
                    ' for delaying to verify UI updated after every trigger. setTimeOut needs to have a special implementation'
                )
            )
        )
    )
);

var Tips = function Tips() {
    return _react2.default.createElement(_share.Box, { content: content });
};

Tips.propTypes = propTypes;
Tips.defaultProps = defaultProps;

exports.default = Tips;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(10);

var _share = __webpack_require__(5);

var _SuperTest = __webpack_require__(352);

var _SuperTest2 = _interopRequireDefault(_SuperTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var TestingAPI = function TestingAPI() {
    return _react2.default.createElement(
        'div',
        { className: 'first-page' },
        _react2.default.createElement(
            _share.Hero,
            null,
            _react2.default.createElement(
                'div',
                { className: 'columns is-vcentered' },
                _react2.default.createElement(
                    'div',
                    { className: 'column' },
                    _react2.default.createElement(
                        _share.Title,
                        null,
                        'Testing API'
                    ),
                    _react2.default.createElement(
                        _share.SubTitle,
                        null,
                        'Supertest is a strong mocking library for testing requests.',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { className: 'is-pulled-right button is-primary is-inverted is-outlined', to: '/jest/testing-react' },
                            'Testing React'
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            _share.Section,
            null,
            _react2.default.createElement(_SuperTest2.default, null)
        )
    );
};

TestingAPI.propTypes = propTypes;
TestingAPI.defaultProps = defaultProps;

exports.default = TestingAPI;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {};

var defaultProps = {};

var superTestScript = 'import request from \'supertest\';\nimport app from \'../../../app\';\n\nrequest(app)\n        .get(\'url\')\n        .query({\n         ...\n        })\n        .expect(200)\n        .then((res) => {\n          expect(res.body.Data.length).toBeGreaterThan(0);         \n        })';

var content = _react2.default.createElement(
    'div',
    { className: 'columns' },
    _react2.default.createElement(
        'div',
        { className: 'column is-half' },
        'Install',
        _react2.default.createElement(
            'pre',
            null,
            'npm install supertest --save-dev'
        ),
        'Setup',
        _react2.default.createElement(
            'pre',
            null,
            superTestScript
        )
    ),
    _react2.default.createElement(
        'div',
        { className: 'column is-half content' },
        'Benefit',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Be-able to test real requests as made by client'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Do not need to have a separate server for testing'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Can cooperate with react testing to feed data for it'
            )
        ),
        'Notes',
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                'Remember to return in every async code made by SuperTest so Jest will run correctly'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Need exporting Express App'
            )
        )
    )
);

var SuperTest = function SuperTest() {
    return _react2.default.createElement(_share.Box, { content: content });
};

SuperTest.propTypes = propTypes;
SuperTest.defaultProps = defaultProps;

exports.default = SuperTest;

/***/ })
],[129]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L0xvY2F0aW9uVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9tYXRjaFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9Sb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9MaW5rLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0JyYW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0V4cHJlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvV2VicGFjay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Fc2xpbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2lvLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0plc3Qvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzL0Jyb3dzZXJSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL01lbW9yeVJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvUHJvbXB0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9ub2RlX21vZHVsZXMvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9TdGF0aWNSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy93aXRoUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9IYXNoUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZUhhc2hIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzL05hdkxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvQWdlbmRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL1RpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL1N1YlRpdGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvTmF2QmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL05hdkJhci9OYXZCYXJJdGVtLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9TZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL1NlY3Rpb24vU3ViU2VjdGlvblRpdGxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL1NlY3Rpb24vU2VjdGlvblRpdGxlLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0NhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvQ2FyZC9DYXJkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvQ2FyZC9DYXJkQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9DYXJkL0NhcmRNZWRpYUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvQm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0JveC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0JveC9zdHlsZS5zY3NzPzY1OTEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9JbnRyby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9JbnRyby9BdmF0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSW50cm8vQXV0aG9yQ3JlZGl0LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0ludHJvL0F1dGhvckludHJvLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0ludHJvL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSW50cm8vc3R5bGUuc2Nzcz84ZDBmIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0ZpcnN0UGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9GaXJzdFBhZ2Uvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9GaXJzdFBhZ2Uvc3R5bGUuc2Nzcz85NTRmIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1RlY2huaWNhbFN0YWNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9FeHByZXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRXhwcmVzcy9zdHlsZS5zY3NzPzQ5NmQiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTW9uZ29EQi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9Nb25nb0RCL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvTW9uZ29EQi9zdHlsZS5zY3NzPzRkNjIiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvRG9ja2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0RvY2tlci9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0RvY2tlci9zdHlsZS5zY3NzP2Q4ZGUiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvV2VicGFjay9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1dlYnBhY2svc3R5bGUuc2Nzcz8zMzJlIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL1JlYWN0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvUmVhY3Qvc3R5bGUuc2Nzcz9iMzUwIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0VzbGludC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0VzbGludC9zdHlsZS5zY3NzP2ZhZWYiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVGVjaG5pY2FsU3RhY2tzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVGVjaG5pY2FsU3RhY2tzL3N0eWxlLnNjc3M/NzM2MSIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9SZW1vdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvVGhlRW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0plc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9JbnRyby5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L0Vhc3lTZXR1cC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1plcm9Db25maWd1cmF0aW9uLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0plc3QvUG93ZXJmdWxNb2NrdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9UZXN0aW5nQmVuZWZpdC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L3N0eWxlLnNjc3M/OWY0MCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L0plc3RTZXR1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L0plc3RTZXR1cC9JbnN0YWxsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9KZXN0U2V0dXAvU2ltcGxlRGVtby5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L0plc3RTZXR1cC9Ob3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdBZ2FpbnN0RGF0YWJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9UZXN0aW5nQWdhaW5zdERhdGFiYXNlL1NvbHV0aW9uMS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdBZ2FpbnN0RGF0YWJhc2UvU29sdXRpb24yLmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0plc3QvVGVzdGluZ1JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0plc3QvVGVzdGluZ1JlYWN0L0VuenltZS5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdSZWFjdC9SZWR1eFRlc3RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9UZXN0aW5nUmVhY3QvVGlwcy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdBUEkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9UZXN0aW5nQVBJL1N1cGVyVGVzdC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiU2VjdGlvblRpdGxlIiwiU3ViU2VjdGlvblRpdGxlIiwiQ2FyZEltYWdlIiwiQ2FyZENvbnRlbnQiLCJDYXJkTWVkaWFDb250ZW50IiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiQnJhbmQiLCJjb250ZW50IiwiRXhwcmVzcyIsIndlYnBhY2tTY3JpcHQiLCJXZWJwYWNrIiwiRXNsaW50Iiwic29ja2V0IiwicmVxdWlyZSIsInRyYW5zZm9ybSIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJsb2NhbHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiaG90IiwiYWNjZXB0IiwibmV3Q29udGVudCIsImlkIiwiZGlzcG9zZSIsIkFwcCIsIm9uIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImFjdGlvbiIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJOYXZCYXIiLCJKZXN0SW50cm8iLCJKZXN0U2V0dXAiLCJUZXN0aW5nQWdhaW5zdERhdGFiYXNlIiwiVGVzdGluZ0FQSSIsIlRlc3RpbmdSZWFjdCIsIkFnZW5kYSIsImNoaWxkcmVuIiwibm9kZSIsIlRpdGxlIiwiU3ViVGl0bGUiLCJIZXJvIiwicHJvcHMiLCJzdGF0ZSIsImlzQWN0aXZlIiwidG9nZ2xlTWVudSIsImJpbmQiLCJzZXRTdGF0ZSIsImFjdGl2ZUNsYXNzIiwiQ29tcG9uZW50IiwidGV4dCIsInN0cmluZyIsImxpbmsiLCJOYXZCYXJJdGVtIiwiRm9vdGVyIiwiU2VjdGlvbiIsIkNhcmQiLCJ0aHVtYm5haWwiLCJhdXRob3JDcmVkaXQiLCJib3hJbWFnZSIsImNsYXNzTmFtZSIsIkJveEltYWdlIiwiQm94IiwiSW50cm8iLCJBdmF0YXIiLCJBdXRob3JDcmVkaXQiLCJBdXRob3JJbnRybyIsIkZpcnN0UGFnZSIsIm1hdGNoIiwic2hhcGUiLCJwYXJhbXMiLCJzY3JvbGxUbyIsIlRlY2huaWNhbFN0YWNrcyIsIm1vbmdvRGJFbGVtZW50IiwiZXhwcmVzc0VsZW1lbnQiLCJkb2NrZXJFbGVtZW50Iiwid2VicGFja0VsZW1lbnQiLCJyZWFjdEVsZW1lbnQiLCJtb25nb0RiUG9zaXRpb24iLCJleHByZXNzUG9zaXRpb24iLCJyZWFjdFBvc2l0aW9uIiwiZG9ja2VyUG9zaXRpb24iLCJ3ZWJwYWNrUG9zaXRpb24iLCJlbGVtZW50Iiwic2Nyb2xsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiZ2V0UG9zaXRpb24iLCJjIiwibW9uZ29vc2VDb2RlIiwiTW9uZ29EQiIsIkRvY2tlciIsIlJlYWN0Q29udGVudCIsImhpc3RvcnkiLCJwdXNoIiwiZnVuYyIsImdvVG8iLCJlbWl0IiwiUmVtb3RlIiwiVGhlRW5kIiwiRWFzeVNldHVwIiwiWmVyb0NvbmZpZ3VyYXRpb24iLCJQb3dlcmZ1bE1vY2t1cCIsIlRlc3RpbmdCZW5lZml0IiwiSW5zdGFsbGF0aW9uIiwiYmFzaWNVc2FnZSIsIlNpbXBsZURlbW8iLCJOb3RlcyIsIlNvbHV0aW9uMSIsImxvYWRDb25maWciLCJTb2x1dGlvbjIiLCJzY3JpcHQiLCJFbnp5bWUiLCJSZWR1eFRlc3RpbmciLCJ0cmlnZ2VyRXZlbnRzIiwibm9ja0NvbnRlbnQiLCJkZWxheVNjcmlwdCIsIlRpcHMiLCJzdXBlclRlc3RTY3JpcHQiLCJTdXBlclRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQzdCU0EsTzs7Ozs7Ozs7OzZDQUNBQSxPOzs7Ozs7Ozs7MENBQ0FBLE87Ozs7Ozs7Ozt5Q0FDQUEsTzs7Ozs7Ozs7OzJDQUNBQSxPOzs7Ozs7Ozs7MkNBQ0FBLE87Ozs7Ozs7Ozs0Q0FDQUEsTzs7Ozs7O29CQUFvQkMsWTs7Ozs7O29CQUFjQyxlOzs7Ozs7Ozs7eUNBQ2xDRixPOzs7Ozs7aUJBQWlCRyxTOzs7Ozs7aUJBQVdDLFc7Ozs7OztpQkFBYUMsZ0I7Ozs7Ozs7Ozt3Q0FDekNMLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JUO0FBQ1E7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSO0FBQ1E7QUFDUjtBQUNRO0FBQ1I7QUFDUTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7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RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsV0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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TW5DLFlBQVksRUFBbEI7O0FBSUEsSUFBTUMsZUFBZSxFQUFyQjs7QUFJQSxJQUFNc0gsNlNBQU47O0FBYUEsSUFBTXBILFVBQ0Y7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQ0k7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUFBO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZKO0FBQUE7QUFNSTtBQUFBO0FBQUE7QUFDS29IO0FBREw7QUFOSixLQURKO0FBWUk7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUFBO0FBRUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKLFNBRko7QUFBQTtBQWNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQWRKO0FBWkosQ0FESjs7QUF1Q0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZO0FBQUEsV0FDZCw0Q0FBSyxTQUFTckgsT0FBZCxHQURjO0FBQUEsQ0FBbEI7O0FBSUFxSCxVQUFVeEgsU0FBVixHQUFzQkEsU0FBdEI7QUFDQXdILFVBQVV2SCxZQUFWLEdBQXlCQSxZQUF6Qjs7a0JBRWV1SCxTIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVGl0bGUgfSBmcm9tICcuL1RpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ViVGl0bGUgfSBmcm9tICcuL1N1YlRpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnJhbmQgfSBmcm9tICcuL0JyYW5kJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVybyB9IGZyb20gJy4vSGVybyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5hdkJhciB9IGZyb20gJy4vTmF2QmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSAnLi9Gb290ZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN0aW9uLCBTZWN0aW9uVGl0bGUsIFN1YlNlY3Rpb25UaXRsZSB9IGZyb20gJy4vU2VjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmQsIENhcmRJbWFnZSwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYUNvbnRlbnQgfSBmcm9tICcuL0NhcmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL0JveCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9pbmRleC5qcyIsImltcG9ydCBfQnJvd3NlclJvdXRlciBmcm9tICcuL0Jyb3dzZXJSb3V0ZXInO1xuZXhwb3J0IHsgX0Jyb3dzZXJSb3V0ZXIgYXMgQnJvd3NlclJvdXRlciB9O1xuaW1wb3J0IF9IYXNoUm91dGVyIGZyb20gJy4vSGFzaFJvdXRlcic7XG5leHBvcnQgeyBfSGFzaFJvdXRlciBhcyBIYXNoUm91dGVyIH07XG5pbXBvcnQgX0xpbmsgZnJvbSAnLi9MaW5rJztcbmV4cG9ydCB7IF9MaW5rIGFzIExpbmsgfTtcbmltcG9ydCBfTWVtb3J5Um91dGVyIGZyb20gJy4vTWVtb3J5Um91dGVyJztcbmV4cG9ydCB7IF9NZW1vcnlSb3V0ZXIgYXMgTWVtb3J5Um91dGVyIH07XG5pbXBvcnQgX05hdkxpbmsgZnJvbSAnLi9OYXZMaW5rJztcbmV4cG9ydCB7IF9OYXZMaW5rIGFzIE5hdkxpbmsgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gJy4vUHJvbXB0JztcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gJy4vUmVkaXJlY3QnO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gJy4vUm91dGUnO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tICcuL1JvdXRlcic7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSAnLi9TdGF0aWNSb3V0ZXInO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gJy4vU3dpdGNoJztcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tICcuL21hdGNoUGF0aCc7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gJy4vd2l0aFJvdXRlcic7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF9NZW1vcnlSb3V0ZXIgZnJvbSAnLi9NZW1vcnlSb3V0ZXInO1xuZXhwb3J0IHsgX01lbW9yeVJvdXRlciBhcyBNZW1vcnlSb3V0ZXIgfTtcbmltcG9ydCBfUHJvbXB0IGZyb20gJy4vUHJvbXB0JztcbmV4cG9ydCB7IF9Qcm9tcHQgYXMgUHJvbXB0IH07XG5pbXBvcnQgX1JlZGlyZWN0IGZyb20gJy4vUmVkaXJlY3QnO1xuZXhwb3J0IHsgX1JlZGlyZWN0IGFzIFJlZGlyZWN0IH07XG5pbXBvcnQgX1JvdXRlIGZyb20gJy4vUm91dGUnO1xuZXhwb3J0IHsgX1JvdXRlIGFzIFJvdXRlIH07XG5pbXBvcnQgX1JvdXRlciBmcm9tICcuL1JvdXRlcic7XG5leHBvcnQgeyBfUm91dGVyIGFzIFJvdXRlciB9O1xuaW1wb3J0IF9TdGF0aWNSb3V0ZXIgZnJvbSAnLi9TdGF0aWNSb3V0ZXInO1xuZXhwb3J0IHsgX1N0YXRpY1JvdXRlciBhcyBTdGF0aWNSb3V0ZXIgfTtcbmltcG9ydCBfU3dpdGNoIGZyb20gJy4vU3dpdGNoJztcbmV4cG9ydCB7IF9Td2l0Y2ggYXMgU3dpdGNoIH07XG5pbXBvcnQgX21hdGNoUGF0aCBmcm9tICcuL21hdGNoUGF0aCc7XG5leHBvcnQgeyBfbWF0Y2hQYXRoIGFzIG1hdGNoUGF0aCB9O1xuaW1wb3J0IF93aXRoUm91dGVyIGZyb20gJy4vd2l0aFJvdXRlcic7XG5leHBvcnQgeyBfd2l0aFJvdXRlciBhcyB3aXRoUm91dGVyIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhZGRMZWFkaW5nU2xhc2ggPSBleHBvcnRzLmFkZExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nID8gcGF0aCA6ICcvJyArIHBhdGg7XG59O1xuXG52YXIgc3RyaXBMZWFkaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwTGVhZGluZ1NsYXNoID0gZnVuY3Rpb24gc3RyaXBMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGguc3Vic3RyKDEpIDogcGF0aDtcbn07XG5cbnZhciBoYXNCYXNlbmFtZSA9IGV4cG9ydHMuaGFzQmFzZW5hbWUgPSBmdW5jdGlvbiBoYXNCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcHJlZml4ICsgJyhcXFxcL3xcXFxcP3wjfCQpJywgJ2knKS50ZXN0KHBhdGgpO1xufTtcblxudmFyIHN0cmlwQmFzZW5hbWUgPSBleHBvcnRzLnN0cmlwQmFzZW5hbWUgPSBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGgsIHByZWZpeCkge1xuICByZXR1cm4gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSA/IHBhdGguc3Vic3RyKHByZWZpeC5sZW5ndGgpIDogcGF0aDtcbn07XG5cbnZhciBzdHJpcFRyYWlsaW5nU2xhc2ggPSBleHBvcnRzLnN0cmlwVHJhaWxpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59O1xuXG52YXIgcGFyc2VQYXRoID0gZXhwb3J0cy5wYXJzZVBhdGggPSBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICB2YXIgcGF0aG5hbWUgPSBwYXRoIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn07XG5cbnZhciBjcmVhdGVQYXRoID0gZXhwb3J0cy5jcmVhdGVQYXRoID0gZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG5cbiAgdmFyIHBhdGggPSBwYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09ICc/JykgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSAnPycgPyBzZWFyY2ggOiAnPycgKyBzZWFyY2g7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gJyMnKSBwYXRoICs9IGhhc2guY2hhckF0KDApID09PSAnIycgPyBoYXNoIDogJyMnICsgaGFzaDtcblxuICByZXR1cm4gcGF0aDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9QYXRoVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lID0gcmVxdWlyZSgncmVzb2x2ZS1wYXRobmFtZScpO1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlUGF0aG5hbWUpO1xuXG52YXIgX3ZhbHVlRXF1YWwgPSByZXF1aXJlKCd2YWx1ZS1lcXVhbCcpO1xuXG52YXIgX3ZhbHVlRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVFcXVhbCk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZUxvY2F0aW9uID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXksIGN1cnJlbnRMb2NhdGlvbikge1xuICB2YXIgbG9jYXRpb24gPSB2b2lkIDA7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUd28tYXJnIGZvcm06IHB1c2gocGF0aCwgc3RhdGUpXG4gICAgbG9jYXRpb24gPSAoMCwgX1BhdGhVdGlscy5wYXJzZVBhdGgpKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnBhdGhuYW1lID0gJyc7XG5cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBsb2NhdGlvbi5zZWFyY2ggPSAnPycgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLnNlYXJjaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgbG9jYXRpb24uaGFzaCA9ICcjJyArIGxvY2F0aW9uLmhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGRlY29kZVVSSShsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVSSUVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVVJJRXJyb3IoJ1BhdGhuYW1lIFwiJyArIGxvY2F0aW9uLnBhdGhuYW1lICsgJ1wiIGNvdWxkIG5vdCBiZSBkZWNvZGVkLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBhbiBpbnZhbGlkIHBlcmNlbnQtZW5jb2RpbmcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSkgbG9jYXRpb24ua2V5ID0ga2V5O1xuXG4gIGlmIChjdXJyZW50TG9jYXRpb24pIHtcbiAgICAvLyBSZXNvbHZlIGluY29tcGxldGUvcmVsYXRpdmUgcGF0aG5hbWUgcmVsYXRpdmUgdG8gY3VycmVudCBsb2NhdGlvbi5cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICgwLCBfcmVzb2x2ZVBhdGhuYW1lMi5kZWZhdWx0KShsb2NhdGlvbi5wYXRobmFtZSwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufTtcblxudmFyIGxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiAoMCwgX3ZhbHVlRXF1YWwyLmRlZmF1bHQpKGEuc3RhdGUsIGIuc3RhdGUpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L0xvY2F0aW9uVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCkge1xuICB2YXIgcHJvbXB0ID0gbnVsbDtcblxuICB2YXIgc2V0UHJvbXB0ID0gZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKTtcblxuICAgIHByb21wdCA9IG5leHRQcm9tcHQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb21wdCA9PT0gbmV4dFByb21wdCkgcHJvbXB0ID0gbnVsbDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjb25maXJtVHJhbnNpdGlvblRvID0gZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE86IElmIGFub3RoZXIgdHJhbnNpdGlvbiBzdGFydHMgd2hpbGUgd2UncmUgc3RpbGwgY29uZmlybWluZ1xuICAgIC8vIHRoZSBwcmV2aW91cyBvbmUsIHdlIG1heSBlbmQgdXAgaW4gYSB3ZWlyZCBzdGF0ZS4gRmlndXJlIG91dCB0aGVcbiAgICAvLyBiZXN0IHdheSB0byBoYW5kbGUgdGhpcy5cbiAgICBpZiAocHJvbXB0ICE9IG51bGwpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0eXBlb2YgcHJvbXB0ID09PSAnZnVuY3Rpb24nID8gcHJvbXB0KGxvY2F0aW9uLCBhY3Rpb24pIDogcHJvbXB0O1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVc2VyQ29uZmlybWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihyZXN1bHQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnQSBoaXN0b3J5IG5lZWRzIGEgZ2V0VXNlckNvbmZpcm1hdGlvbiBmdW5jdGlvbiBpbiBvcmRlciB0byB1c2UgYSBwcm9tcHQgbWVzc2FnZScpO1xuXG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgdmFyIGFwcGVuZExpc3RlbmVyID0gZnVuY3Rpb24gYXBwZW5kTGlzdGVuZXIoZm4pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICBpZiAoaXNBY3RpdmUpIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIG5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcHV0dGluZyBoaXN0b3J5IG9uIGNvbnRleHQuXG4gKi9cblxudmFyIFJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBtYXRjaDogX3RoaXMuY29tcHV0ZU1hdGNoKF90aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBSb3V0ZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVyOiBfZXh0ZW5kcyh7fSwgdGhpcy5jb250ZXh0LnJvdXRlciwge1xuICAgICAgICBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3RvcnksXG4gICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgbG9jYXRpb246IHRoaXMucHJvcHMuaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgICBtYXRjaDogdGhpcy5zdGF0ZS5tYXRjaFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH07XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wdXRlTWF0Y2ggPSBmdW5jdGlvbiBjb21wdXRlTWF0Y2gocGF0aG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgdXJsOiAnLycsXG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgaXNFeGFjdDogcGF0aG5hbWUgPT09ICcvJ1xuICAgIH07XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGhpc3RvcnkgPSBfcHJvcHMuaGlzdG9yeTtcblxuXG4gICAgaW52YXJpYW50KGNoaWxkcmVuID09IG51bGwgfHwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAxLCAnQSA8Um91dGVyPiBtYXkgaGF2ZSBvbmx5IG9uZSBjaGlsZCBlbGVtZW50Jyk7XG5cbiAgICAvLyBEbyB0aGlzIGhlcmUgc28gd2UgY2FuIHNldFN0YXRlIHdoZW4gYSA8UmVkaXJlY3Q+IGNoYW5nZXMgdGhlXG4gICAgLy8gbG9jYXRpb24gaW4gY29tcG9uZW50V2lsbE1vdW50LiBUaGlzIGhhcHBlbnMgZS5nLiB3aGVuIGRvaW5nXG4gICAgLy8gc2VydmVyIHJlbmRlcmluZyB1c2luZyBhIDxTdGF0aWNSb3V0ZXI+LlxuICAgIHRoaXMudW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICBtYXRjaDogX3RoaXMyLmNvbXB1dGVNYXRjaChoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB3YXJuaW5nKHRoaXMucHJvcHMuaGlzdG9yeSA9PT0gbmV4dFByb3BzLmhpc3RvcnksICdZb3UgY2Fubm90IGNoYW5nZSA8Um91dGVyIGhpc3Rvcnk+Jyk7XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5saXN0ZW4oKTtcbiAgfTtcblxuICBSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbikgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblJvdXRlci5wcm9wVHlwZXMgPSB7XG4gIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuUm91dGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuUm91dGVyLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL1JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5cbnZhciBwYXR0ZXJuQ2FjaGUgPSB7fTtcbnZhciBjYWNoZUxpbWl0ID0gMTAwMDA7XG52YXIgY2FjaGVDb3VudCA9IDA7XG5cbnZhciBjb21waWxlUGF0aCA9IGZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgdmFyIGNhY2hlS2V5ID0gJycgKyBvcHRpb25zLmVuZCArIG9wdGlvbnMuc3RyaWN0O1xuICB2YXIgY2FjaGUgPSBwYXR0ZXJuQ2FjaGVbY2FjaGVLZXldIHx8IChwYXR0ZXJuQ2FjaGVbY2FjaGVLZXldID0ge30pO1xuXG4gIGlmIChjYWNoZVtwYXR0ZXJuXSkgcmV0dXJuIGNhY2hlW3BhdHRlcm5dO1xuXG4gIHZhciBrZXlzID0gW107XG4gIHZhciByZSA9IHBhdGhUb1JlZ2V4cChwYXR0ZXJuLCBrZXlzLCBvcHRpb25zKTtcbiAgdmFyIGNvbXBpbGVkUGF0dGVybiA9IHsgcmU6IHJlLCBrZXlzOiBrZXlzIH07XG5cbiAgaWYgKGNhY2hlQ291bnQgPCBjYWNoZUxpbWl0KSB7XG4gICAgY2FjaGVbcGF0dGVybl0gPSBjb21waWxlZFBhdHRlcm47XG4gICAgY2FjaGVDb3VudCsrO1xuICB9XG5cbiAgcmV0dXJuIGNvbXBpbGVkUGF0dGVybjtcbn07XG5cbi8qKlxuICogUHVibGljIEFQSSBmb3IgbWF0Y2hpbmcgYSBVUkwgcGF0aG5hbWUgdG8gYSBwYXRoIHBhdHRlcm4uXG4gKi9cbnZhciBtYXRjaFBhdGggPSBmdW5jdGlvbiBtYXRjaFBhdGgocGF0aG5hbWUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIG9wdGlvbnMgPSB7IHBhdGg6IG9wdGlvbnMgfTtcblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkcGF0aCA9IF9vcHRpb25zLnBhdGgsXG4gICAgICBwYXRoID0gX29wdGlvbnMkcGF0aCA9PT0gdW5kZWZpbmVkID8gJy8nIDogX29wdGlvbnMkcGF0aCxcbiAgICAgIF9vcHRpb25zJGV4YWN0ID0gX29wdGlvbnMuZXhhY3QsXG4gICAgICBleGFjdCA9IF9vcHRpb25zJGV4YWN0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJGV4YWN0LFxuICAgICAgX29wdGlvbnMkc3RyaWN0ID0gX29wdGlvbnMuc3RyaWN0LFxuICAgICAgc3RyaWN0ID0gX29wdGlvbnMkc3RyaWN0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9vcHRpb25zJHN0cmljdDtcblxuICB2YXIgX2NvbXBpbGVQYXRoID0gY29tcGlsZVBhdGgocGF0aCwgeyBlbmQ6IGV4YWN0LCBzdHJpY3Q6IHN0cmljdCB9KSxcbiAgICAgIHJlID0gX2NvbXBpbGVQYXRoLnJlLFxuICAgICAga2V5cyA9IF9jb21waWxlUGF0aC5rZXlzO1xuXG4gIHZhciBtYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuXG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuXG4gIHZhciB1cmwgPSBtYXRjaFswXSxcbiAgICAgIHZhbHVlcyA9IG1hdGNoLnNsaWNlKDEpO1xuXG4gIHZhciBpc0V4YWN0ID0gcGF0aG5hbWUgPT09IHVybDtcblxuICBpZiAoZXhhY3QgJiYgIWlzRXhhY3QpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aDogcGF0aCwgLy8gdGhlIHBhdGggcGF0dGVybiB1c2VkIHRvIG1hdGNoXG4gICAgdXJsOiBwYXRoID09PSAnLycgJiYgdXJsID09PSAnJyA/ICcvJyA6IHVybCwgLy8gdGhlIG1hdGNoZWQgcG9ydGlvbiBvZiB0aGUgVVJMXG4gICAgaXNFeGFjdDogaXNFeGFjdCwgLy8gd2hldGhlciBvciBub3Qgd2UgbWF0Y2hlZCBleGFjdGx5XG4gICAgcGFyYW1zOiBrZXlzLnJlZHVjZShmdW5jdGlvbiAobWVtbywga2V5LCBpbmRleCkge1xuICAgICAgbWVtb1trZXkubmFtZV0gPSB2YWx1ZXNbaW5kZXhdO1xuICAgICAgcmV0dXJuIG1lbW87XG4gICAgfSwge30pXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXRjaFBhdGg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL21hdGNoUGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhblVzZURPTSA9IGV4cG9ydHMuY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxudmFyIGFkZEV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5hZGRFdmVudExpc3RlbmVyID8gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbnZhciByZW1vdmVFdmVudExpc3RlbmVyID0gZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA/IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKSA6IG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG59O1xuXG52YXIgZ2V0Q29uZmlybWF0aW9uID0gZXhwb3J0cy5nZXRDb25maXJtYXRpb24gPSBmdW5jdGlvbiBnZXRDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTtcbn07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tYWxlcnRcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xudmFyIHN1cHBvcnRzSGlzdG9yeSA9IGV4cG9ydHMuc3VwcG9ydHNIaXN0b3J5ID0gZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBicm93c2VyIGZpcmVzIHBvcHN0YXRlIG9uIGhhc2ggY2hhbmdlLlxuICogSUUxMCBhbmQgSUUxMSBkbyBub3QuXG4gKi9cbnZhciBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZXhwb3J0cy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlID0gZnVuY3Rpb24gc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSgpIHtcbiAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA9PT0gLTE7XG59O1xuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xudmFyIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gZXhwb3J0cy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IGZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgZ2l2ZW4gcG9wc3RhdGUgZXZlbnQgaXMgYW4gZXh0cmFuZW91cyBXZWJLaXQgZXZlbnQuXG4gKiBBY2NvdW50cyBmb3IgdGhlIGZhY3QgdGhhdCBDaHJvbWUgb24gaU9TIGZpcmVzIHJlYWwgcG9wc3RhdGUgZXZlbnRzXG4gKiBjb250YWluaW5nIHVuZGVmaW5lZCBzdGF0ZSB3aGVuIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbi5cbiAqL1xudmFyIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBleHBvcnRzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQgPSBmdW5jdGlvbiBpc0V4dHJhbmVvdXNQb3BzdGF0ZUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ3JpT1MnKSA9PT0gLTE7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvRE9NVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbWF0Y2hQYXRoIGZyb20gJy4vbWF0Y2hQYXRoJztcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgbWF0Y2hpbmcgYSBzaW5nbGUgcGF0aCBhbmQgcmVuZGVyaW5nLlxuICovXG5cbnZhciBSb3V0ZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSb3V0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm91dGUoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBtYXRjaDogX3RoaXMuY29tcHV0ZU1hdGNoKF90aGlzLnByb3BzLCBfdGhpcy5jb250ZXh0LnJvdXRlcilcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIFJvdXRlLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlcjogX2V4dGVuZHMoe30sIHRoaXMuY29udGV4dC5yb3V0ZXIsIHtcbiAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICBsb2NhdGlvbjogdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCB0aGlzLmNvbnRleHQucm91dGVyLnJvdXRlLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoOiB0aGlzLnN0YXRlLm1hdGNoXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUuY29tcHV0ZU1hdGNoID0gZnVuY3Rpb24gY29tcHV0ZU1hdGNoKF9yZWYsIF9yZWYyKSB7XG4gICAgdmFyIGNvbXB1dGVkTWF0Y2ggPSBfcmVmLmNvbXB1dGVkTWF0Y2gsXG4gICAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgICAgcGF0aCA9IF9yZWYucGF0aCxcbiAgICAgICAgc3RyaWN0ID0gX3JlZi5zdHJpY3QsXG4gICAgICAgIGV4YWN0ID0gX3JlZi5leGFjdDtcbiAgICB2YXIgcm91dGUgPSBfcmVmMi5yb3V0ZTtcblxuICAgIGlmIChjb21wdXRlZE1hdGNoKSByZXR1cm4gY29tcHV0ZWRNYXRjaDsgLy8gPFN3aXRjaD4gYWxyZWFkeSBjb21wdXRlZCB0aGUgbWF0Y2ggZm9yIHVzXG5cbiAgICB2YXIgcGF0aG5hbWUgPSAobG9jYXRpb24gfHwgcm91dGUubG9jYXRpb24pLnBhdGhuYW1lO1xuXG4gICAgcmV0dXJuIHBhdGggPyBtYXRjaFBhdGgocGF0aG5hbWUsIHsgcGF0aDogcGF0aCwgc3RyaWN0OiBzdHJpY3QsIGV4YWN0OiBleGFjdCB9KSA6IHJvdXRlLm1hdGNoO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNvbXBvbmVudCA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgIHJlbmRlciA9IF9wcm9wcy5yZW5kZXIsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG5cbiAgICB3YXJuaW5nKCEoY29tcG9uZW50ICYmIHJlbmRlciksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlIGNvbXBvbmVudD4gYW5kIDxSb3V0ZSByZW5kZXI+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgcmVuZGVyPiB3aWxsIGJlIGlnbm9yZWQnKTtcblxuICAgIHdhcm5pbmcoIShjb21wb25lbnQgJiYgY2hpbGRyZW4pLCAnWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgY2hpbGRyZW4+IGluIHRoZSBzYW1lIHJvdXRlOyA8Um91dGUgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZCcpO1xuXG4gICAgd2FybmluZyghKHJlbmRlciAmJiBjaGlsZHJlbiksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPFJvdXRlIHJlbmRlcj4gYW5kIDxSb3V0ZSBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgcm91dGU7IDxSb3V0ZSBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgbmV4dENvbnRleHQpIHtcbiAgICB3YXJuaW5nKCEobmV4dFByb3BzLmxvY2F0aW9uICYmICF0aGlzLnByb3BzLmxvY2F0aW9uKSwgJzxSb3V0ZT4gZWxlbWVudHMgc2hvdWxkIG5vdCBjaGFuZ2UgZnJvbSB1bmNvbnRyb2xsZWQgdG8gY29udHJvbGxlZCAob3IgdmljZSB2ZXJzYSkuIFlvdSBpbml0aWFsbHkgdXNlZCBubyBcImxvY2F0aW9uXCIgcHJvcCBhbmQgdGhlbiBwcm92aWRlZCBvbmUgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKTtcblxuICAgIHdhcm5pbmcoISghbmV4dFByb3BzLmxvY2F0aW9uICYmIHRoaXMucHJvcHMubG9jYXRpb24pLCAnPFJvdXRlPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hdGNoOiB0aGlzLmNvbXB1dGVNYXRjaChuZXh0UHJvcHMsIG5leHRDb250ZXh0LnJvdXRlcilcbiAgICB9KTtcbiAgfTtcblxuICBSb3V0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMuc3RhdGUubWF0Y2g7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgIGNvbXBvbmVudCA9IF9wcm9wczIuY29tcG9uZW50LFxuICAgICAgICByZW5kZXIgPSBfcHJvcHMyLnJlbmRlcjtcbiAgICB2YXIgX2NvbnRleHQkcm91dGVyID0gdGhpcy5jb250ZXh0LnJvdXRlcixcbiAgICAgICAgaGlzdG9yeSA9IF9jb250ZXh0JHJvdXRlci5oaXN0b3J5LFxuICAgICAgICByb3V0ZSA9IF9jb250ZXh0JHJvdXRlci5yb3V0ZSxcbiAgICAgICAgc3RhdGljQ29udGV4dCA9IF9jb250ZXh0JHJvdXRlci5zdGF0aWNDb250ZXh0O1xuXG4gICAgdmFyIGxvY2F0aW9uID0gdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCByb3V0ZS5sb2NhdGlvbjtcbiAgICB2YXIgcHJvcHMgPSB7IG1hdGNoOiBtYXRjaCwgbG9jYXRpb246IGxvY2F0aW9uLCBoaXN0b3J5OiBoaXN0b3J5LCBzdGF0aWNDb250ZXh0OiBzdGF0aWNDb250ZXh0IH07XG5cbiAgICByZXR1cm4gY29tcG9uZW50ID8gLy8gY29tcG9uZW50IHByb3AgZ2V0cyBmaXJzdCBwcmlvcml0eSwgb25seSBjYWxsZWQgaWYgdGhlcmUncyBhIG1hdGNoXG4gICAgbWF0Y2ggPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogbnVsbCA6IHJlbmRlciA/IC8vIHJlbmRlciBwcm9wIGlzIG5leHQsIG9ubHkgY2FsbGVkIGlmIHRoZXJlJ3MgYSBtYXRjaFxuICAgIG1hdGNoID8gcmVuZGVyKHByb3BzKSA6IG51bGwgOiBjaGlsZHJlbiA/IC8vIGNoaWxkcmVuIGNvbWUgbGFzdCwgYWx3YXlzIGNhbGxlZFxuICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKHByb3BzKSA6ICFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSB8fCBjaGlsZHJlbi5sZW5ndGggPyAvLyBQcmVhY3QgZGVmYXVsdHMgdG8gZW1wdHkgY2hpbGRyZW4gYXJyYXlcbiAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGwgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBSb3V0ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUm91dGUucHJvcFR5cGVzID0ge1xuICBjb21wdXRlZE1hdGNoOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBwcml2YXRlLCBmcm9tIDxTd2l0Y2g+XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4YWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgc3RyaWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdFxufTtcblJvdXRlLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHN0YXRpY0NvbnRleHQ6IFByb3BUeXBlcy5vYmplY3RcbiAgfSlcbn07XG5Sb3V0ZS5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm91dGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL1JvdXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgaXNNb2RpZmllZEV2ZW50ID0gZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiAhIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcbn07XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cbnZhciBMaW5rID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExpbmssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5rKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xpY2spIF90aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuXG4gICAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgJiYgLy8gb25DbGljayBwcmV2ZW50ZWQgZGVmYXVsdFxuICAgICAgZXZlbnQuYnV0dG9uID09PSAwICYmIC8vIGlnbm9yZSByaWdodCBjbGlja3NcbiAgICAgICFfdGhpcy5wcm9wcy50YXJnZXQgJiYgLy8gbGV0IGJyb3dzZXIgaGFuZGxlIFwidGFyZ2V0PV9ibGFua1wiIGV0Yy5cbiAgICAgICFpc01vZGlmaWVkRXZlbnQoZXZlbnQpIC8vIGlnbm9yZSBjbGlja3Mgd2l0aCBtb2RpZmllciBrZXlzXG4gICAgICApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgdmFyIGhpc3RvcnkgPSBfdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5O1xuICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICByZXBsYWNlID0gX3RoaXMkcHJvcHMucmVwbGFjZSxcbiAgICAgICAgICAgICAgdG8gPSBfdGhpcyRwcm9wcy50bztcblxuXG4gICAgICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh0byk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCh0byk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBMaW5rLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHJlcGxhY2UgPSBfcHJvcHMucmVwbGFjZSxcbiAgICAgICAgdG8gPSBfcHJvcHMudG8sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydyZXBsYWNlJywgJ3RvJ10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cbiAgICB2YXIgaHJlZiA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeS5jcmVhdGVIcmVmKHR5cGVvZiB0byA9PT0gJ3N0cmluZycgPyB7IHBhdGhuYW1lOiB0byB9IDogdG8pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljaywgaHJlZjogaHJlZiB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIExpbms7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdG86IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkXG59O1xuTGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcGxhY2U6IGZhbHNlXG59O1xuTGluay5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgcHVzaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlcGxhY2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBjcmVhdGVIcmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9MaW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5jb25zdCBCcmFuZCA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uaXRlY28uc2VcIiBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL25pdGVjby5zdmdcIiAgd2lkdGg9XCIxMTJweFwiIGhlaWdodD1cIjI4cHhcIiAvPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+IFxuKVxuXG5CcmFuZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5CcmFuZC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEJyYW5kO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0JyYW5kL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9zaGFyZSc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG59XG5cbmNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkV4cHJlc3M8L3N0cm9uZz4gPHNtYWxsPkB2ZXJzaW9uIDQ8L3NtYWxsPiAgICBcbiAgICAgICAgPC9wPlxuICAgICAgICA8cHJlPlxuICAgICAgICAgICAgZXhwcmVzcyAtLXZpZXc9ZWpzIHd3d1xuICAgICAgICA8L3ByZT5cbiAgICA8L2Rpdj4gICAgICAgICAgICBcbilcblxuY29uc3QgRXhwcmVzcyA9ICgpID0+IChcbiAgICA8Qm94IFxuICAgICAgICBib3hJbWFnZT1cIi9pbWFnZXMvZXhwcmVzcy5zdmdcIlxuICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICBjbGFzc05hbWU9XCJleHByZXNzLWJveFwiXG4gICAgLz4gICAgICAgICAgICBcbilcblxuRXhwcmVzcy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5FeHByZXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9FeHByZXNzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi9zaGFyZSc7XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG59XG5cbmNvbnN0IHdlYnBhY2tTY3JpcHQgPSBgbW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVudHJ5OiB7XG4gICAgYnVuZGxlOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnY2xpZW50JywgJ2luZGV4LmpzJyksXG4gICAgdmVuZG9yOiBbJ3JlYWN0JywgJ2xvZGFzaCcsIC4uLl0sXG4gIH0sXG4gIG91dHB1dDoge1xuICAgIHBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnLCAnZGlzdCcsICdzY3JpcHRzJyksXG4gICAgcHVibGljUGF0aDogJy9kaXN0L3NjcmlwdHMvJyxcbiAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcycsXG4gIH0sXG4gIG1vZHVsZToge1xuICAgIGxvYWRlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgdGVzdDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2NsaWVudCcpLFxuICAgICAgICBsb2FkZXI6ICdiYWJlbC1sb2FkZXInLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIGNhY2hlRGlyZWN0b3J5OiAnYmFiZWxfY2FjaGUnLFxuICAgICAgICAgIHByZXNldHM6IFsnZXMyMDE1JywgJ3N0YWdlLTAnLCAncmVhY3QnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICAgICAgdXNlOiBbJ3N0eWxlLWxvYWRlcicsICdjc3MtbG9hZGVyJ10sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBuZXcgRG90ZW52KHtcbiAgICAgIHBhdGg6ICcuLy5lbnYnLFxuICAgICAgc2FmZTogZmFsc2UsXG4gICAgfSksXG4gICAgbmV3IHdlYnBhY2sub3B0aW1pemUuQ29tbW9uc0NodW5rUGx1Z2luKHtcbiAgICAgIG5hbWU6ICd2ZW5kb3InLFxuICAgICAgZmlsZW5hbWU6ICd2ZW5kb3IuanMnLFxuICAgIH0pLFxuICAgIG5ldyB3ZWJwYWNrLm9wdGltaXplLk9jY3VycmVuY2VPcmRlclBsdWdpbigpLFxuICAgIG5ldyBVZ2xpZnlKc1BsdWdpbih7IHNvdXJjZU1hcDogdHJ1ZSB9KSxcbiAgICBuZXcgUHJvZ3Jlc3NCYXJQbHVnaW4oe1xuICAgICAgY2xlYXI6IGZhbHNlLFxuICAgIH0pLFxuICBdLFxuICBkZXZTZXJ2ZXI6IHtcbiAgICBjb250ZW50QmFzZTogJy9kaXN0L3NjcmlwdHMvJyxcbiAgICBjb21wcmVzczogdHJ1ZSxcbiAgICBwb3J0OiA5MDAwLFxuICB9LFxufTtcbmBcbmNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPldlYnBhY2s8L3N0cm9uZz4gPHNtYWxsPkB2ZXJzaW9uIDI8L3NtYWxsPiAgICBcbiAgICAgICAgPC9wPlxuICAgICAgICA8cHJlPlxuICAgICAgICAgICAge3dlYnBhY2tTY3JpcHR9XG4gICAgICAgIDwvcHJlPlxuICAgIDwvZGl2PiAgICAgICAgICAgIFxuKVxuXG5jb25zdCBXZWJwYWNrID0gKCkgPT4gKFxuICAgIDxCb3ggXG4gICAgICAgIGJveEltYWdlPVwiL2ltYWdlcy93ZWJwYWNrLnN2Z1wiXG4gICAgICAgIGNvbnRlbnQ9e2NvbnRlbnR9XG4gICAgICAgIGNsYXNzTmFtZT1cIndlYnBhY2stYm94XCJcbiAgICAvPiAgICAgICAgICAgIFxuKVxuXG5XZWJwYWNrLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbldlYnBhY2suZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBXZWJwYWNrO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1dlYnBhY2svaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbn1cblxuY29uc3QgY29udGVudCA9IChcbiAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+RXNsaW50PC9zdHJvbmc+IDxzbWFsbD5AdmVyc2lvbiA0PC9zbWFsbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgQ291cGxlZCB3aXRoIDxzdHJvbmc+QWlyQm5CIHJ1bGVzPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHByZT5cbiAgICAgICAgICAgIFwiZXNsaW50XCI6IFwiXjMuMTkuMFwiLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBcImVzbGludC1jb25maWctYWlyYm5iXCI6IFwiXjE1LjAuMVwiLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBcImVzbGludC1maW5kLXJ1bGVzXCI6IFwiXjEuMTQuM1wiLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBcImVzbGludC1wbHVnaW4tYmFiZWxcIjogXCJeNC4xLjFcIixcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjIuMFwiLFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeNS4wLjNcIixcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMC4xXCIsXG4gICAgICAgIDwvcHJlPlxuICAgIDwvZGl2PiAgICAgICAgICAgIFxuKVxuXG5jb25zdCBFc2xpbnQgPSAoKSA9PiAoXG4gICAgPEJveCBcbiAgICAgICAgYm94SW1hZ2U9XCIvaW1hZ2VzL2FpcmJuYi5zdmdcIlxuICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICBjbGFzc05hbWU9XCJlc2xpbnQtYm94XCJcbiAgICAvPiAgICAgICAgICAgIFxuKVxuXG5Fc2xpbnQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRXNsaW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgRXNsaW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0VzbGludC9pbmRleC5qcyIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxudmFyIHNvY2tldCA9IGlvKCcvJyk7XG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2lvLmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3Qvc3R5bGUuc2NzcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IEFnZW5kYSwgSW50cm8sIE5hdkJhciwgVGVjaG5pY2FsU3RhY2tzLCBcbiAgICBGaXJzdFBhZ2UsIFJlbW90ZSwgSmVzdEludHJvLCBKZXN0U2V0dXAsXG4gICAgVGVzdGluZ0FnYWluc3REYXRhYmFzZSwgVGVzdGluZ0FQSSwgVGVzdGluZ1JlYWN0LCBUaGVFbmQgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHNvY2tldCBmcm9tICcuL2lvJztcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDxIYXNoUm91dGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWRtaW5cIiBjb21wb25lbnQ9e1JlbW90ZX0vPiAgXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiKC9hZG1pbik/L1wiIGNvbXBvbmVudD17Rmlyc3RQYWdlfS8+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIigvYWRtaW4pPy9pbnRyb1wiIGNvbXBvbmVudD17SW50cm99Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiKC9hZG1pbik/L2FnZW5kYVwiIGNvbXBvbmVudD17QWdlbmRhfS8+IFxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIoL2FkbWluKT8vdGVjaG5pY2Fsc3RhY2tzLzpzY3JvbGxUbz9cIiBjb21wb25lbnQ9e1RlY2huaWNhbFN0YWNrc30vPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIoL2FkbWluKT8vamVzdFwiIGNvbXBvbmVudD17SmVzdEludHJvfS8+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIigvYWRtaW4pPy9qZXN0L3NldHVwXCIgY29tcG9uZW50PXtKZXN0U2V0dXB9Lz5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiKC9hZG1pbik/L2plc3QvdGVzdGluZy1hZ2FpbnN0LWRhdGFiYXNlXCIgY29tcG9uZW50PXtUZXN0aW5nQWdhaW5zdERhdGFiYXNlfS8+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIigvYWRtaW4pPy9qZXN0L3Rlc3RpbmctYXBpXCIgY29tcG9uZW50PXtUZXN0aW5nQVBJfS8+XG4gICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIigvYWRtaW4pPy9qZXN0L3Rlc3RpbmctcmVhY3RcIiBjb21wb25lbnQ9e1Rlc3RpbmdSZWFjdH0vPlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIoL2FkbWluKT8vdGhlLWVuZFwiIGNvbXBvbmVudD17VGhlRW5kfS8+XG4gICAgICAgIDwvZGl2PiAgXG4gICAgPC9IYXNoUm91dGVyPiAgXG4pXG5cbnNvY2tldC5vbigncmVtb3RlLWNvbW1hbmQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gYC8ke2RhdGEuYWN0aW9ufWA7XG59KTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9hcHAuanMiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnkgZnJvbSAnaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG5cbnZhciBCcm93c2VyUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJyb3dzZXJSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcm93c2VyUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlSGlzdG9yeShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBCcm93c2VyUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Ccm93c2VyUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvcmNlUmVmcmVzaDogUHJvcFR5cGVzLmJvb2wsXG4gIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBCcm93c2VyUm91dGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZXMvQnJvd3NlclJvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFBvcFN0YXRlRXZlbnQgPSAncG9wc3RhdGUnO1xudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIGdldEhpc3RvcnlTdGF0ZSA9IGZ1bmN0aW9uIGdldEhpc3RvcnlTdGF0ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBJRSAxMSBzb21ldGltZXMgdGhyb3dzIHdoZW4gYWNjZXNzaW5nIHdpbmRvdy5oaXN0b3J5LnN0YXRlXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9SZWFjdFRyYWluaW5nL2hpc3RvcnkvcHVsbC8yODlcbiAgICByZXR1cm4ge307XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaW5jbHVkaW5nXG4gKiBwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudC5cbiAqL1xudmFyIGNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuVXNlSGlzdG9yeSA9ICgwLCBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KSgpO1xuICB2YXIgbmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIgPSAhKDAsIF9ET01VdGlscy5zdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKSgpO1xuXG4gIHZhciBfcHJvcHMkZm9yY2VSZWZyZXNoID0gcHJvcHMuZm9yY2VSZWZyZXNoLFxuICAgICAgZm9yY2VSZWZyZXNoID0gX3Byb3BzJGZvcmNlUmVmcmVzaCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcHJvcHMkZm9yY2VSZWZyZXNoLFxuICAgICAgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBnZXRET01Mb2NhdGlvbiA9IGZ1bmN0aW9uIGdldERPTUxvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIHZhciBfcmVmID0gaGlzdG9yeVN0YXRlIHx8IHt9LFxuICAgICAgICBrZXkgPSBfcmVmLmtleSxcbiAgICAgICAgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgdmFyIF93aW5kb3ckbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb24sXG4gICAgICAgIHBhdGhuYW1lID0gX3dpbmRvdyRsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoID0gX3dpbmRvdyRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2ggPSBfd2luZG93JGxvY2F0aW9uLmhhc2g7XG5cblxuICAgIHZhciBwYXRoID0gcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwga2V5KTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wU3RhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BTdGF0ZShldmVudCkge1xuICAgIC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG4gICAgaWYgKCgwLCBfRE9NVXRpbHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCkoZXZlbnQpKSByZXR1cm47XG5cbiAgICBoYW5kbGVQb3AoZ2V0RE9NTG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKSk7XG4gIH07XG5cbiAgdmFyIGZvcmNlTmV4dFBvcCA9IGZhbHNlO1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2Yga2V5cyB3ZSd2ZSBzZWVuIGluIHNlc3Npb25TdG9yYWdlLlxuICAgIC8vIEluc3RlYWQsIHdlIGp1c3QgZGVmYXVsdCB0byAwIGZvciBrZXlzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbEtleXMuaW5kZXhPZih0b0xvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAodG9JbmRleCA9PT0gLTEpIHRvSW5kZXggPSAwO1xuXG4gICAgdmFyIGZyb21JbmRleCA9IGFsbEtleXMuaW5kZXhPZihmcm9tTG9jYXRpb24ua2V5KTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKGdldEhpc3RvcnlTdGF0ZSgpKTtcbiAgdmFyIGFsbEtleXMgPSBbaW5pdGlhbExvY2F0aW9uLmtleV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiBiYXNlbmFtZSArICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG4gICAgICAgICAgdmFyIG5leHRLZXlzID0gYWxsS2V5cy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgICAgbmV4dEtleXMucHVzaChsb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIGFsbEtleXMgPSBuZXh0S2V5cztcblxuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KShzdGF0ZSA9PT0gdW5kZWZpbmVkLCAnQnJvd3NlciBoaXN0b3J5IGNhbm5vdCBwdXNoIHN0YXRlIGluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgSFRNTDUgaGlzdG9yeScpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHJlcGxhY2Ugd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1JFUExBQ0UnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBocmVmID0gY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5LFxuICAgICAgICAgIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG5cblxuICAgICAgaWYgKGNhblVzZUhpc3RvcnkpIHtcbiAgICAgICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlIH0sIG51bGwsIGhyZWYpO1xuXG4gICAgICAgIGlmIChmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJldkluZGV4ID0gYWxsS2V5cy5pbmRleE9mKGhpc3RvcnkubG9jYXRpb24ua2V5KTtcblxuICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxLZXlzW3ByZXZJbmRleF0gPSBsb2NhdGlvbi5rZXk7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShocmVmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgUG9wU3RhdGVFdmVudCwgaGFuZGxlUG9wU3RhdGUpO1xuXG4gICAgICBpZiAobmVlZHNIYXNoQ2hhbmdlTGlzdGVuZXIpICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGlzQmxvY2tlZCA9IGZhbHNlO1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgdmFyIHVuYmxvY2sgPSB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcblxuICAgIGlmICghaXNCbG9ja2VkKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcbiAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0Jsb2NrZWQpIHtcbiAgICAgICAgaXNCbG9ja2VkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuYmxvY2soKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICB2YXIgdW5saXN0ZW4gPSB0cmFuc2l0aW9uTWFuYWdlci5hcHBlbmRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgdW5saXN0ZW4oKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZ2xvYmFsSGlzdG9yeS5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogaW5pdGlhbExvY2F0aW9uLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDIzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlID0gZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRobmFtZSkge1xuICByZXR1cm4gcGF0aG5hbWUuY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBBYm91dCAxLjV4IGZhc3RlciB0aGFuIHRoZSB0d28tYXJnIHZlcnNpb24gb2YgQXJyYXkjc3BsaWNlKClcbnZhciBzcGxpY2VPbmUgPSBmdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4LCBrID0gaSArIDEsIG4gPSBsaXN0Lmxlbmd0aDsgayA8IG47IGkgKz0gMSwgayArPSAxKSB7XG4gICAgbGlzdFtpXSA9IGxpc3Rba107XG4gIH1saXN0LnBvcCgpO1xufTtcblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBoZWF2aWx5IG9uIG5vZGUncyB1cmwucGFyc2VcbnZhciByZXNvbHZlUGF0aG5hbWUgPSBmdW5jdGlvbiByZXNvbHZlUGF0aG5hbWUodG8pIHtcbiAgdmFyIGZyb20gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcnO1xuXG4gIHZhciB0b1BhcnRzID0gdG8gJiYgdG8uc3BsaXQoJy8nKSB8fCBbXTtcbiAgdmFyIGZyb21QYXJ0cyA9IGZyb20gJiYgZnJvbS5zcGxpdCgnLycpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkge1xuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcuLicpO1xuICB9aWYgKG11c3RFbmRBYnMgJiYgZnJvbVBhcnRzWzBdICE9PSAnJyAmJiAoIWZyb21QYXJ0c1swXSB8fCAhaXNBYnNvbHV0ZShmcm9tUGFydHNbMF0pKSkgZnJvbVBhcnRzLnVuc2hpZnQoJycpO1xuXG4gIHZhciByZXN1bHQgPSBmcm9tUGFydHMuam9pbignLycpO1xuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIHJlc3VsdC5zdWJzdHIoLTEpICE9PSAnLycpIHJlc3VsdCArPSAnLyc7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzb2x2ZVBhdGhuYW1lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtcGF0aG5hbWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIHZhbHVlRXF1YWwgPSBmdW5jdGlvbiB2YWx1ZUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIHJldHVybiB2YWx1ZUVxdWFsKGl0ZW0sIGJbaW5kZXhdKTtcbiAgfSk7XG5cbiAgdmFyIGFUeXBlID0gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGEpO1xuICB2YXIgYlR5cGUgPSB0eXBlb2YgYiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYik7XG5cbiAgaWYgKGFUeXBlICE9PSBiVHlwZSkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChhVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYVZhbHVlID0gYS52YWx1ZU9mKCk7XG4gICAgdmFyIGJWYWx1ZSA9IGIudmFsdWVPZigpO1xuXG4gICAgaWYgKGFWYWx1ZSAhPT0gYSB8fCBiVmFsdWUgIT09IGIpIHJldHVybiB2YWx1ZUVxdWFsKGFWYWx1ZSwgYlZhbHVlKTtcblxuICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuXG4gICAgaWYgKGFLZXlzLmxlbmd0aCAhPT0gYktleXMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gYUtleXMuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHZhbHVlRXF1YWwoYVtrZXldLCBiW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdmFsdWVFcXVhbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92YWx1ZS1lcXVhbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZU1lbW9yeUhpc3RvcnknO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL1JvdXRlcic7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgbG9jYXRpb24gaW4gbWVtb3J5LlxuICovXG5cbnZhciBNZW1vcnlSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTWVtb3J5Um91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW1vcnlSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNZW1vcnlSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KF90aGlzLnByb3BzKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBNZW1vcnlSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHsgaGlzdG9yeTogdGhpcy5oaXN0b3J5LCBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB9KTtcbiAgfTtcblxuICByZXR1cm4gTWVtb3J5Um91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5NZW1vcnlSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBpbml0aWFsRW50cmllczogUHJvcFR5cGVzLmFycmF5LFxuICBpbml0aWFsSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBNZW1vcnlSb3V0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL01lbW9yeVJvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG4sIGxvd2VyQm91bmQsIHVwcGVyQm91bmQpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIGxvd2VyQm91bmQpLCB1cHBlckJvdW5kKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgc3RvcmVzIGxvY2F0aW9ucyBpbiBtZW1vcnkuXG4gKi9cbnZhciBjcmVhdGVNZW1vcnlIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgX3Byb3BzJGluaXRpYWxFbnRyaWVzID0gcHJvcHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsRW50cmllcyA9IF9wcm9wcyRpbml0aWFsRW50cmllcyA9PT0gdW5kZWZpbmVkID8gWycvJ10gOiBfcHJvcHMkaW5pdGlhbEVudHJpZXMsXG4gICAgICBfcHJvcHMkaW5pdGlhbEluZGV4ID0gcHJvcHMuaW5pdGlhbEluZGV4LFxuICAgICAgaW5pdGlhbEluZGV4ID0gX3Byb3BzJGluaXRpYWxJbmRleCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wcm9wcyRpbml0aWFsSW5kZXgsXG4gICAgICBfcHJvcHMka2V5TGVuZ3RoID0gcHJvcHMua2V5TGVuZ3RoLFxuICAgICAga2V5TGVuZ3RoID0gX3Byb3BzJGtleUxlbmd0aCA9PT0gdW5kZWZpbmVkID8gNiA6IF9wcm9wcyRrZXlMZW5ndGg7XG5cblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9O1xuXG4gIHZhciBjcmVhdGVLZXkgPSBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBrZXlMZW5ndGgpO1xuICB9O1xuXG4gIHZhciBpbmRleCA9IGNsYW1wKGluaXRpYWxJbmRleCwgMCwgaW5pdGlhbEVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIHZhciBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnID8gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShlbnRyeSwgdW5kZWZpbmVkLCBjcmVhdGVLZXkoKSkgOiAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKGVudHJ5LCB1bmRlZmluZWQsIGVudHJ5LmtleSB8fCBjcmVhdGVLZXkoKSk7XG4gIH0pO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IF9QYXRoVXRpbHMuY3JlYXRlUGF0aDtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCEoKHR5cGVvZiBwYXRoID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXRoKSkgPT09ICdvYmplY3QnICYmIHBhdGguc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSwgJ1lvdSBzaG91bGQgYXZvaWQgcHJvdmlkaW5nIGEgMm5kIHN0YXRlIGFyZ3VtZW50IHRvIHB1c2ggd2hlbiB0aGUgMXN0ICcgKyAnYXJndW1lbnQgaXMgYSBsb2NhdGlvbi1saWtlIG9iamVjdCB0aGF0IGFscmVhZHkgaGFzIHN0YXRlOyBpdCBpcyBpZ25vcmVkJyk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BVU0gnO1xuICAgIHZhciBsb2NhdGlvbiA9ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGNyZWF0ZUtleSgpLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBwcmV2SW5kZXggPSBoaXN0b3J5LmluZGV4O1xuICAgICAgdmFyIG5leHRJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgIHZhciBuZXh0RW50cmllcyA9IGhpc3RvcnkuZW50cmllcy5zbGljZSgwKTtcbiAgICAgIGlmIChuZXh0RW50cmllcy5sZW5ndGggPiBuZXh0SW5kZXgpIHtcbiAgICAgICAgbmV4dEVudHJpZXMuc3BsaWNlKG5leHRJbmRleCwgbmV4dEVudHJpZXMubGVuZ3RoIC0gbmV4dEluZGV4LCBsb2NhdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0RW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBpbmRleDogbmV4dEluZGV4LFxuICAgICAgICBlbnRyaWVzOiBuZXh0RW50cmllc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICBoaXN0b3J5LmVudHJpZXNbaGlzdG9yeS5pbmRleF0gPSBsb2NhdGlvbjtcblxuICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gY2xhbXAoaGlzdG9yeS5pbmRleCArIG4sIDAsIGhpc3RvcnkuZW50cmllcy5sZW5ndGggLSAxKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUE9QJztcbiAgICB2YXIgbG9jYXRpb24gPSBoaXN0b3J5LmVudHJpZXNbbmV4dEluZGV4XTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAob2spIHtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgICBpbmRleDogbmV4dEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWltaWMgdGhlIGJlaGF2aW9yIG9mIERPTSBoaXN0b3JpZXMgYnlcbiAgICAgICAgLy8gY2F1c2luZyBhIHJlbmRlciBhZnRlciBhIGNhbmNlbGxlZCBQT1AuXG4gICAgICAgIHNldFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBjYW5HbyA9IGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgbmV4dEluZGV4ID0gaGlzdG9yeS5pbmRleCArIG47XG4gICAgcmV0dXJuIG5leHRJbmRleCA+PSAwICYmIG5leHRJbmRleCA8IGhpc3RvcnkuZW50cmllcy5sZW5ndGg7XG4gIH07XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9O1xuXG4gIHZhciBoaXN0b3J5ID0ge1xuICAgIGxlbmd0aDogZW50cmllcy5sZW5ndGgsXG4gICAgYWN0aW9uOiAnUE9QJyxcbiAgICBsb2NhdGlvbjogZW50cmllc1tpbmRleF0sXG4gICAgaW5kZXg6IGluZGV4LFxuICAgIGVudHJpZXM6IGVudHJpZXMsXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGNhbkdvOiBjYW5HbyxcbiAgICBibG9jazogYmxvY2ssXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcHJvbXB0aW5nIHRoZSB1c2VyIGJlZm9yZSBuYXZpZ2F0aW5nIGF3YXlcbiAqIGZyb20gYSBzY3JlZW4gd2l0aCBhIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgUHJvbXB0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFByb21wdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUHJvbXB0KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9tcHQpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQcm9tcHQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZShtZXNzYWdlKSB7XG4gICAgaWYgKHRoaXMudW5ibG9jaykgdGhpcy51bmJsb2NrKCk7XG5cbiAgICB0aGlzLnVuYmxvY2sgPSB0aGlzLmNvbnRleHQucm91dGVyLmhpc3RvcnkuYmxvY2sobWVzc2FnZSk7XG4gIH07XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy51bmJsb2NrKSB7XG4gICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICAgIHRoaXMudW5ibG9jayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFByb21wdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLndoZW4pIHRoaXMuZW5hYmxlKHRoaXMucHJvcHMubWVzc2FnZSk7XG4gIH07XG5cbiAgUHJvbXB0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLndoZW4pIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy53aGVuIHx8IHRoaXMucHJvcHMubWVzc2FnZSAhPT0gbmV4dFByb3BzLm1lc3NhZ2UpIHRoaXMuZW5hYmxlKG5leHRQcm9wcy5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9O1xuXG4gIFByb21wdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfTtcblxuICBQcm9tcHQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gUHJvbXB0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Qcm9tcHQucHJvcFR5cGVzID0ge1xuICB3aGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkXG59O1xuUHJvbXB0LmRlZmF1bHRQcm9wcyA9IHtcbiAgd2hlbjogdHJ1ZVxufTtcblByb21wdC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYmxvY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUHJvbXB0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9Qcm9tcHQuanNcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciB1cGRhdGluZyB0aGUgbG9jYXRpb24gcHJvZ3JhbWF0aWNhbGx5XG4gKiB3aXRoIGEgY29tcG9uZW50LlxuICovXG5cbnZhciBSZWRpcmVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWRpcmVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVkaXJlY3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlZGlyZWN0KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLmlzU3RhdGljID0gZnVuY3Rpb24gaXNTdGF0aWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5yb3V0ZXIgJiYgdGhpcy5jb250ZXh0LnJvdXRlci5zdGF0aWNDb250ZXh0O1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuaXNTdGF0aWMoKSkgdGhpcy5wZXJmb3JtKCk7XG4gIH07XG5cbiAgUmVkaXJlY3QucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzU3RhdGljKCkpIHRoaXMucGVyZm9ybSgpO1xuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5wZXJmb3JtID0gZnVuY3Rpb24gcGVyZm9ybSgpIHtcbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcHVzaCA9IF9wcm9wcy5wdXNoLFxuICAgICAgICB0byA9IF9wcm9wcy50bztcblxuXG4gICAgaWYgKHB1c2gpIHtcbiAgICAgIGhpc3RvcnkucHVzaCh0byk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZSh0byk7XG4gICAgfVxuICB9O1xuXG4gIFJlZGlyZWN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIFJlZGlyZWN0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZWRpcmVjdC5wcm9wVHlwZXMgPSB7XG4gIHB1c2g6IFByb3BUeXBlcy5ib29sLFxuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0bzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pXG59O1xuUmVkaXJlY3QuZGVmYXVsdFByb3BzID0ge1xuICBwdXNoOiBmYWxzZVxufTtcblJlZGlyZWN0LmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBwdXNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgcmVwbGFjZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgc3RhdGljQ29udGV4dDogUHJvcFR5cGVzLm9iamVjdFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lcy9SZWRpcmVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc2FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhUb1JlZ2V4cFxubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZVxubW9kdWxlLmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGVcbm1vZHVsZS5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cy50b2tlbnNUb1JlZ0V4cCA9IHRva2Vuc1RvUmVnRXhwXG5cbi8qKlxuICogVGhlIG1haW4gcGF0aCBtYXRjaGluZyByZWdleHAgdXRpbGl0eS5cbiAqXG4gKiBAdHlwZSB7UmVnRXhwfVxuICovXG52YXIgUEFUSF9SRUdFWFAgPSBuZXcgUmVnRXhwKFtcbiAgLy8gTWF0Y2ggZXNjYXBlZCBjaGFyYWN0ZXJzIHRoYXQgd291bGQgb3RoZXJ3aXNlIGFwcGVhciBpbiBmdXR1cmUgbWF0Y2hlcy5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gZXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IHdvbid0IHRyYW5zZm9ybS5cbiAgJyhcXFxcXFxcXC4pJyxcbiAgLy8gTWF0Y2ggRXhwcmVzcy1zdHlsZSBwYXJhbWV0ZXJzIGFuZCB1bi1uYW1lZCBwYXJhbWV0ZXJzIHdpdGggYSBwcmVmaXhcbiAgLy8gYW5kIG9wdGlvbmFsIHN1ZmZpeGVzLiBNYXRjaGVzIGFwcGVhciBhczpcbiAgLy9cbiAgLy8gXCIvOnRlc3QoXFxcXGQrKT9cIiA9PiBbXCIvXCIsIFwidGVzdFwiLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCBcIj9cIiwgdW5kZWZpbmVkXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIlxcZCtcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gIC8vIFwiLypcIiAgICAgICAgICAgID0+IFtcIi9cIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBcIipcIl1cbiAgJyhbXFxcXC8uXSk/KD86KD86XFxcXDooXFxcXHcrKSg/OlxcXFwoKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKCldKSspXFxcXCkpP3xcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKShbKyo/XSk/fChcXFxcKikpJ1xuXS5qb2luKCd8JyksICdnJylcblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgc3RyXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJuIHshQXJyYXl9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlIChzdHIsIG9wdGlvbnMpIHtcbiAgdmFyIHRva2VucyA9IFtdXG4gIHZhciBrZXkgPSAwXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIHBhdGggPSAnJ1xuICB2YXIgZGVmYXVsdERlbGltaXRlciA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWxpbWl0ZXIgfHwgJy8nXG4gIHZhciByZXNcblxuICB3aGlsZSAoKHJlcyA9IFBBVEhfUkVHRVhQLmV4ZWMoc3RyKSkgIT0gbnVsbCkge1xuICAgIHZhciBtID0gcmVzWzBdXG4gICAgdmFyIGVzY2FwZWQgPSByZXNbMV1cbiAgICB2YXIgb2Zmc2V0ID0gcmVzLmluZGV4XG4gICAgcGF0aCArPSBzdHIuc2xpY2UoaW5kZXgsIG9mZnNldClcbiAgICBpbmRleCA9IG9mZnNldCArIG0ubGVuZ3RoXG5cbiAgICAvLyBJZ25vcmUgYWxyZWFkeSBlc2NhcGVkIHNlcXVlbmNlcy5cbiAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgcGF0aCArPSBlc2NhcGVkWzFdXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhciBuZXh0ID0gc3RyW2luZGV4XVxuICAgIHZhciBwcmVmaXggPSByZXNbMl1cbiAgICB2YXIgbmFtZSA9IHJlc1szXVxuICAgIHZhciBjYXB0dXJlID0gcmVzWzRdXG4gICAgdmFyIGdyb3VwID0gcmVzWzVdXG4gICAgdmFyIG1vZGlmaWVyID0gcmVzWzZdXG4gICAgdmFyIGFzdGVyaXNrID0gcmVzWzddXG5cbiAgICAvLyBQdXNoIHRoZSBjdXJyZW50IHBhdGggb250byB0aGUgdG9rZW5zLlxuICAgIGlmIChwYXRoKSB7XG4gICAgICB0b2tlbnMucHVzaChwYXRoKVxuICAgICAgcGF0aCA9ICcnXG4gICAgfVxuXG4gICAgdmFyIHBhcnRpYWwgPSBwcmVmaXggIT0gbnVsbCAmJiBuZXh0ICE9IG51bGwgJiYgbmV4dCAhPT0gcHJlZml4XG4gICAgdmFyIHJlcGVhdCA9IG1vZGlmaWVyID09PSAnKycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBvcHRpb25hbCA9IG1vZGlmaWVyID09PSAnPycgfHwgbW9kaWZpZXIgPT09ICcqJ1xuICAgIHZhciBkZWxpbWl0ZXIgPSByZXNbMl0gfHwgZGVmYXVsdERlbGltaXRlclxuICAgIHZhciBwYXR0ZXJuID0gY2FwdHVyZSB8fCBncm91cFxuXG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgIHByZWZpeDogcHJlZml4IHx8ICcnLFxuICAgICAgZGVsaW1pdGVyOiBkZWxpbWl0ZXIsXG4gICAgICBvcHRpb25hbDogb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6IHJlcGVhdCxcbiAgICAgIHBhcnRpYWw6IHBhcnRpYWwsXG4gICAgICBhc3RlcmlzazogISFhc3RlcmlzayxcbiAgICAgIHBhdHRlcm46IHBhdHRlcm4gPyBlc2NhcGVHcm91cChwYXR0ZXJuKSA6IChhc3RlcmlzayA/ICcuKicgOiAnW14nICsgZXNjYXBlU3RyaW5nKGRlbGltaXRlcikgKyAnXSs/JylcbiAgICB9KVxuICB9XG5cbiAgLy8gTWF0Y2ggYW55IGNoYXJhY3RlcnMgc3RpbGwgcmVtYWluaW5nLlxuICBpZiAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgcGF0aCArPSBzdHIuc3Vic3RyKGluZGV4KVxuICB9XG5cbiAgLy8gSWYgdGhlIHBhdGggZXhpc3RzLCBwdXNoIGl0IG9udG8gdGhlIGVuZC5cbiAgaWYgKHBhdGgpIHtcbiAgICB0b2tlbnMucHVzaChwYXRoKVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgICBzdHJcbiAqIEBwYXJhbSAge09iamVjdD19ICAgICAgICAgICAgb3B0aW9uc1xuICogQHJldHVybiB7IWZ1bmN0aW9uKE9iamVjdD0sIE9iamVjdD0pfVxuICovXG5mdW5jdGlvbiBjb21waWxlIChzdHIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBlbmNvZGluZyBvZiBVUkkgcGF0aCBzZWdtZW50cy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bXFwvPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgYXN0ZXJpc2sgcGFyYW1ldGVyLiBTaW1pbGFyIHRvIGBwcmV0dHlgLCBidXQgYWxsb3dzIHNsYXNoZXMuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbmNvZGVBc3RlcmlzayAoc3RyKSB7XG4gIHJldHVybiBlbmNvZGVVUkkoc3RyKS5yZXBsYWNlKC9bPyNdL2csIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKVxuICB9KVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uICh0b2tlbnMpIHtcbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gIHZhciBtYXRjaGVzID0gbmV3IEFycmF5KHRva2Vucy5sZW5ndGgpXG5cbiAgLy8gQ29tcGlsZSBhbGwgdGhlIHBhdHRlcm5zIGJlZm9yZSBjb21waWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodHlwZW9mIHRva2Vuc1tpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1hdGNoZXNbaV0gPSBuZXcgUmVnRXhwKCdeKD86JyArIHRva2Vuc1tpXS5wYXR0ZXJuICsgJykkJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuICAgIHZhciBwYXRoID0gJydcbiAgICB2YXIgZGF0YSA9IG9iaiB8fCB7fVxuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fVxuICAgIHZhciBlbmNvZGUgPSBvcHRpb25zLnByZXR0eSA/IGVuY29kZVVSSUNvbXBvbmVudFByZXR0eSA6IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICBwYXRoICs9IHRva2VuXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlID0gZGF0YVt0b2tlbi5uYW1lXVxuICAgICAgdmFyIHNlZ21lbnRcblxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgaWYgKHRva2VuLm9wdGlvbmFsKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBwYXJ0aWFsIHNlZ21lbnQgcHJlZml4ZXMuXG4gICAgICAgICAgaWYgKHRva2VuLnBhcnRpYWwpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIGJlIGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc2FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoIXRva2VuLnJlcGVhdCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJyArIHRva2VuLm5hbWUgKyAnXCIgdG8gbm90IHJlcGVhdCwgYnV0IHJlY2VpdmVkIGAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpICsgJ2AnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGlmICh0b2tlbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInICsgdG9rZW4ubmFtZSArICdcIiB0byBub3QgYmUgZW1wdHknKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdKVxuXG4gICAgICAgICAgaWYgKCFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBgJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQpICsgJ2AnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdGggKz0gKGogPT09IDAgPyB0b2tlbi5wcmVmaXggOiB0b2tlbi5kZWxpbWl0ZXIpICsgc2VnbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc2VnbWVudCA9IHRva2VuLmFzdGVyaXNrID8gZW5jb2RlQXN0ZXJpc2sodmFsdWUpIDogZW5jb2RlKHZhbHVlKVxuXG4gICAgICBpZiAoIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicgKyB0b2tlbi5uYW1lICsgJ1wiIHRvIG1hdGNoIFwiJyArIHRva2VuLnBhdHRlcm4gKyAnXCIsIGJ1dCByZWNlaXZlZCBcIicgKyBzZWdtZW50ICsgJ1wiJylcbiAgICAgIH1cblxuICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGhcbiAgfVxufVxuXG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfFxcL1xcXFxdKS9nLCAnXFxcXCQxJylcbn1cblxuLyoqXG4gKiBFc2NhcGUgdGhlIGNhcHR1cmluZyBncm91cCBieSBlc2NhcGluZyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG1lYW5pbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBncm91cFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVHcm91cCAoZ3JvdXApIHtcbiAgcmV0dXJuIGdyb3VwLnJlcGxhY2UoLyhbPSE6JFxcLygpXSkvZywgJ1xcXFwkMScpXG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHshUmVnRXhwfSByZVxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXNcbiAgcmV0dXJuIHJlXG59XG5cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmxhZ3MgKG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuc2Vuc2l0aXZlID8gJycgOiAnaSdcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IVJlZ0V4cH0gcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpXG5cbiAgaWYgKGdyb3Vwcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXlzLnB1c2goe1xuICAgICAgICBuYW1lOiBpLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIGRlbGltaXRlcjogbnVsbCxcbiAgICAgICAgb3B0aW9uYWw6IGZhbHNlLFxuICAgICAgICByZXBlYXQ6IGZhbHNlLFxuICAgICAgICBwYXJ0aWFsOiBmYWxzZSxcbiAgICAgICAgYXN0ZXJpc2s6IGZhbHNlLFxuICAgICAgICBwYXR0ZXJuOiBudWxsXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgIHBhcnRzLnB1c2gocGF0aFRvUmVnZXhwKHBhdGhbaV0sIGtleXMsIG9wdGlvbnMpLnNvdXJjZSlcbiAgfVxuXG4gIHZhciByZWdleHAgPSBuZXcgUmVnRXhwKCcoPzonICsgcGFydHMuam9pbignfCcpICsgJyknLCBmbGFncyhvcHRpb25zKSlcblxuICByZXR1cm4gYXR0YWNoS2V5cyhyZWdleHAsIGtleXMpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgcGF0aFxuICogQHBhcmFtICB7IUFycmF5fSAga2V5c1xuICogQHBhcmFtICB7IU9iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7IVJlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAgKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1RvUmVnRXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKlxuICogQHBhcmFtICB7IUFycmF5fSAgICAgICAgICB0b2tlbnNcbiAqIEBwYXJhbSAgeyhBcnJheXxPYmplY3QpPX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0PX0gICAgICAgICBvcHRpb25zXG4gKiBAcmV0dXJuIHshUmVnRXhwfVxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ0V4cCAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gIGlmICghaXNhcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSAvKiogQHR5cGUgeyFPYmplY3R9ICovIChrZXlzIHx8IG9wdGlvbnMpXG4gICAga2V5cyA9IFtdXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdFxuICB2YXIgZW5kID0gb3B0aW9ucy5lbmQgIT09IGZhbHNlXG4gIHZhciByb3V0ZSA9ICcnXG5cbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcodG9rZW4pXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcodG9rZW4ucHJlZml4KVxuICAgICAgdmFyIGNhcHR1cmUgPSAnKD86JyArIHRva2VuLnBhdHRlcm4gKyAnKSdcblxuICAgICAga2V5cy5wdXNoKHRva2VuKVxuXG4gICAgICBpZiAodG9rZW4ucmVwZWF0KSB7XG4gICAgICAgIGNhcHR1cmUgKz0gJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJ1xuICAgICAgfVxuXG4gICAgICBpZiAodG9rZW4ub3B0aW9uYWwpIHtcbiAgICAgICAgaWYgKCF0b2tlbi5wYXJ0aWFsKSB7XG4gICAgICAgICAgY2FwdHVyZSA9ICcoPzonICsgcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpKT8nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FwdHVyZSA9IHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKT8nXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcHR1cmUgPSBwcmVmaXggKyAnKCcgKyBjYXB0dXJlICsgJyknXG4gICAgICB9XG5cbiAgICAgIHJvdXRlICs9IGNhcHR1cmVcbiAgICB9XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8ICcvJylcbiAgdmFyIGVuZHNXaXRoRGVsaW1pdGVyID0gcm91dGUuc2xpY2UoLWRlbGltaXRlci5sZW5ndGgpID09PSBkZWxpbWl0ZXJcblxuICAvLyBJbiBub24tc3RyaWN0IG1vZGUgd2UgYWxsb3cgYSBzbGFzaCBhdCB0aGUgZW5kIG9mIG1hdGNoLiBJZiB0aGUgcGF0aCB0b1xuICAvLyBtYXRjaCBhbHJlYWR5IGVuZHMgd2l0aCBhIHNsYXNoLCB3ZSByZW1vdmUgaXQgZm9yIGNvbnNpc3RlbmN5LiBUaGUgc2xhc2hcbiAgLy8gaXMgdmFsaWQgYXQgdGhlIGVuZCBvZiBhIHBhdGggbWF0Y2gsIG5vdCBpbiB0aGUgbWlkZGxlLiBUaGlzIGlzIGltcG9ydGFudFxuICAvLyBpbiBub24tZW5kaW5nIG1vZGUsIHdoZXJlIFwiL3Rlc3QvXCIgc2hvdWxkbid0IG1hdGNoIFwiL3Rlc3QvL3JvdXRlXCIuXG4gIGlmICghc3RyaWN0KSB7XG4gICAgcm91dGUgPSAoZW5kc1dpdGhEZWxpbWl0ZXIgPyByb3V0ZS5zbGljZSgwLCAtZGVsaW1pdGVyLmxlbmd0aCkgOiByb3V0ZSkgKyAnKD86JyArIGRlbGltaXRlciArICcoPz0kKSk/J1xuICB9XG5cbiAgaWYgKGVuZCkge1xuICAgIHJvdXRlICs9ICckJ1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhEZWxpbWl0ZXIgPyAnJyA6ICcoPz0nICsgZGVsaW1pdGVyICsgJ3wkKSdcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICpcbiAqIEBwYXJhbSAgeyhzdHJpbmd8UmVnRXhwfEFycmF5KX0gcGF0aFxuICogQHBhcmFtICB7KEFycmF5fE9iamVjdCk9fSAgICAgICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3Q9fSAgICAgICAgICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm4geyFSZWdFeHB9XG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICBpZiAoIWlzYXJyYXkoa2V5cykpIHtcbiAgICBvcHRpb25zID0gLyoqIEB0eXBlIHshT2JqZWN0fSAqLyAoa2V5cyB8fCBvcHRpb25zKVxuICAgIGtleXMgPSBbXVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpKVxuICB9XG5cbiAgaWYgKGlzYXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cCgvKiogQHR5cGUgeyFBcnJheX0gKi8gKHBhdGgpLCAvKiogQHR5cGUgeyFBcnJheX0gKi8gKGtleXMpLCBvcHRpb25zKVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocGF0aCksIC8qKiBAdHlwZSB7IUFycmF5fSAqLyAoa2V5cyksIG9wdGlvbnMpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvbm9kZV9tb2R1bGVzL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGFkZExlYWRpbmdTbGFzaCwgY3JlYXRlUGF0aCwgcGFyc2VQYXRoIH0gZnJvbSAnaGlzdG9yeS9QYXRoVXRpbHMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL1JvdXRlcic7XG5cbnZhciBub3JtYWxpemVMb2NhdGlvbiA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2F0aW9uKG9iamVjdCkge1xuICB2YXIgX29iamVjdCRwYXRobmFtZSA9IG9iamVjdC5wYXRobmFtZSxcbiAgICAgIHBhdGhuYW1lID0gX29iamVjdCRwYXRobmFtZSA9PT0gdW5kZWZpbmVkID8gJy8nIDogX29iamVjdCRwYXRobmFtZSxcbiAgICAgIF9vYmplY3Qkc2VhcmNoID0gb2JqZWN0LnNlYXJjaCxcbiAgICAgIHNlYXJjaCA9IF9vYmplY3Qkc2VhcmNoID09PSB1bmRlZmluZWQgPyAnJyA6IF9vYmplY3Qkc2VhcmNoLFxuICAgICAgX29iamVjdCRoYXNoID0gb2JqZWN0Lmhhc2gsXG4gICAgICBoYXNoID0gX29iamVjdCRoYXNoID09PSB1bmRlZmluZWQgPyAnJyA6IF9vYmplY3QkaGFzaDtcblxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoID09PSAnPycgPyAnJyA6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoID09PSAnIycgPyAnJyA6IGhhc2hcbiAgfTtcbn07XG5cbnZhciBhZGRCYXNlbmFtZSA9IGZ1bmN0aW9uIGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIHBhdGhuYW1lOiBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUpICsgbG9jYXRpb24ucGF0aG5hbWVcbiAgfSk7XG59O1xuXG52YXIgc3RyaXBCYXNlbmFtZSA9IGZ1bmN0aW9uIHN0cmlwQmFzZW5hbWUoYmFzZW5hbWUsIGxvY2F0aW9uKSB7XG4gIGlmICghYmFzZW5hbWUpIHJldHVybiBsb2NhdGlvbjtcblxuICB2YXIgYmFzZSA9IGFkZExlYWRpbmdTbGFzaChiYXNlbmFtZSk7XG5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoYmFzZSkgIT09IDApIHJldHVybiBsb2NhdGlvbjtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cihiYXNlLmxlbmd0aClcbiAgfSk7XG59O1xuXG52YXIgY3JlYXRlTG9jYXRpb24gPSBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikge1xuICByZXR1cm4gdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJyA/IHBhcnNlUGF0aChsb2NhdGlvbikgOiBub3JtYWxpemVMb2NhdGlvbihsb2NhdGlvbik7XG59O1xuXG52YXIgY3JlYXRlVVJMID0gZnVuY3Rpb24gY3JlYXRlVVJMKGxvY2F0aW9uKSB7XG4gIHJldHVybiB0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnID8gbG9jYXRpb24gOiBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbn07XG5cbnZhciBzdGF0aWNIYW5kbGVyID0gZnVuY3Rpb24gc3RhdGljSGFuZGxlcihtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaW52YXJpYW50KGZhbHNlLCAnWW91IGNhbm5vdCAlcyB3aXRoIDxTdGF0aWNSb3V0ZXI+JywgbWV0aG9kTmFtZSk7XG4gIH07XG59O1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuLyoqXG4gKiBUaGUgcHVibGljIHRvcC1sZXZlbCBBUEkgZm9yIGEgXCJzdGF0aWNcIiA8Um91dGVyPiwgc28tY2FsbGVkIGJlY2F1c2UgaXRcbiAqIGNhbid0IGFjdHVhbGx5IGNoYW5nZSB0aGUgY3VycmVudCBsb2NhdGlvbi4gSW5zdGVhZCwgaXQganVzdCByZWNvcmRzXG4gKiBsb2NhdGlvbiBjaGFuZ2VzIGluIGEgY29udGV4dCBvYmplY3QuIFVzZWZ1bCBtYWlubHkgaW4gdGVzdGluZyBhbmRcbiAqIHNlcnZlci1yZW5kZXJpbmcgc2NlbmFyaW9zLlxuICovXG5cbnZhciBTdGF0aWNSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3RhdGljUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdGF0aWNSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aWNSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmNyZWF0ZUhyZWYgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdTbGFzaChfdGhpcy5wcm9wcy5iYXNlbmFtZSArIGNyZWF0ZVVSTChwYXRoKSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlUHVzaCA9IGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYmFzZW5hbWUgPSBfdGhpcyRwcm9wcy5iYXNlbmFtZSxcbiAgICAgICAgICBjb250ZXh0ID0gX3RoaXMkcHJvcHMuY29udGV4dDtcblxuICAgICAgY29udGV4dC5hY3Rpb24gPSAnUFVTSCc7XG4gICAgICBjb250ZXh0LmxvY2F0aW9uID0gYWRkQmFzZW5hbWUoYmFzZW5hbWUsIGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKSk7XG4gICAgICBjb250ZXh0LnVybCA9IGNyZWF0ZVVSTChjb250ZXh0LmxvY2F0aW9uKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXBsYWNlID0gZnVuY3Rpb24gKGxvY2F0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYmFzZW5hbWUgPSBfdGhpcyRwcm9wczIuYmFzZW5hbWUsXG4gICAgICAgICAgY29udGV4dCA9IF90aGlzJHByb3BzMi5jb250ZXh0O1xuXG4gICAgICBjb250ZXh0LmFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICAgIGNvbnRleHQubG9jYXRpb24gPSBhZGRCYXNlbmFtZShiYXNlbmFtZSwgY3JlYXRlTG9jYXRpb24obG9jYXRpb24pKTtcbiAgICAgIGNvbnRleHQudXJsID0gY3JlYXRlVVJMKGNvbnRleHQubG9jYXRpb24pO1xuICAgIH0sIF90aGlzLmhhbmRsZUxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH0sIF90aGlzLmhhbmRsZUJsb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBTdGF0aWNSb3V0ZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVyOiB7XG4gICAgICAgIHN0YXRpY0NvbnRleHQ6IHRoaXMucHJvcHMuY29udGV4dFxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgU3RhdGljUm91dGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGJhc2VuYW1lID0gX3Byb3BzLmJhc2VuYW1lLFxuICAgICAgICBjb250ZXh0ID0gX3Byb3BzLmNvbnRleHQsXG4gICAgICAgIGxvY2F0aW9uID0gX3Byb3BzLmxvY2F0aW9uLFxuICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnYmFzZW5hbWUnLCAnY29udGV4dCcsICdsb2NhdGlvbiddKTtcblxuICAgIHZhciBoaXN0b3J5ID0ge1xuICAgICAgY3JlYXRlSHJlZjogdGhpcy5jcmVhdGVIcmVmLFxuICAgICAgYWN0aW9uOiAnUE9QJyxcbiAgICAgIGxvY2F0aW9uOiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpLFxuICAgICAgcHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgcmVwbGFjZTogdGhpcy5oYW5kbGVSZXBsYWNlLFxuICAgICAgZ286IHN0YXRpY0hhbmRsZXIoJ2dvJyksXG4gICAgICBnb0JhY2s6IHN0YXRpY0hhbmRsZXIoJ2dvQmFjaycpLFxuICAgICAgZ29Gb3J3YXJkOiBzdGF0aWNIYW5kbGVyKCdnb0ZvcndhcmQnKSxcbiAgICAgIGxpc3RlbjogdGhpcy5oYW5kbGVMaXN0ZW4sXG4gICAgICBibG9jazogdGhpcy5oYW5kbGVCbG9ja1xuICAgIH07XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBoaXN0b3J5OiBoaXN0b3J5IH0pKTtcbiAgfTtcblxuICByZXR1cm4gU3RhdGljUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TdGF0aWNSb3V0ZXIucHJvcFR5cGVzID0ge1xuICBiYXNlbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGV4dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pXG59O1xuU3RhdGljUm91dGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmFzZW5hbWU6ICcnLFxuICBsb2NhdGlvbjogJy8nXG59O1xuU3RhdGljUm91dGVyLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWNSb3V0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL1N0YXRpY1JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBtYXRjaFBhdGggZnJvbSAnLi9tYXRjaFBhdGgnO1xuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgdGhlIGZpcnN0IDxSb3V0ZT4gdGhhdCBtYXRjaGVzLlxuICovXG5cbnZhciBTd2l0Y2ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3dpdGNoLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTd2l0Y2goKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3aXRjaCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFN3aXRjaC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgd2FybmluZyghKG5leHRQcm9wcy5sb2NhdGlvbiAmJiAhdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IGluaXRpYWxseSB1c2VkIG5vIFwibG9jYXRpb25cIiBwcm9wIGFuZCB0aGVuIHByb3ZpZGVkIG9uZSBvbiBhIHN1YnNlcXVlbnQgcmVuZGVyLicpO1xuXG4gICAgd2FybmluZyghKCFuZXh0UHJvcHMubG9jYXRpb24gJiYgdGhpcy5wcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJyk7XG4gIH07XG5cbiAgU3dpdGNoLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJvdXRlID0gdGhpcy5jb250ZXh0LnJvdXRlci5yb3V0ZTtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGxvY2F0aW9uID0gdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCByb3V0ZS5sb2NhdGlvbjtcblxuICAgIHZhciBtYXRjaCA9IHZvaWQgMCxcbiAgICAgICAgY2hpbGQgPSB2b2lkIDA7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHJldHVybjtcblxuICAgICAgdmFyIF9lbGVtZW50JHByb3BzID0gZWxlbWVudC5wcm9wcyxcbiAgICAgICAgICBwYXRoUHJvcCA9IF9lbGVtZW50JHByb3BzLnBhdGgsXG4gICAgICAgICAgZXhhY3QgPSBfZWxlbWVudCRwcm9wcy5leGFjdCxcbiAgICAgICAgICBzdHJpY3QgPSBfZWxlbWVudCRwcm9wcy5zdHJpY3QsXG4gICAgICAgICAgZnJvbSA9IF9lbGVtZW50JHByb3BzLmZyb207XG5cbiAgICAgIHZhciBwYXRoID0gcGF0aFByb3AgfHwgZnJvbTtcblxuICAgICAgaWYgKG1hdGNoID09IG51bGwpIHtcbiAgICAgICAgY2hpbGQgPSBlbGVtZW50O1xuICAgICAgICBtYXRjaCA9IHBhdGggPyBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIHsgcGF0aDogcGF0aCwgZXhhY3Q6IGV4YWN0LCBzdHJpY3Q6IHN0cmljdCB9KSA6IHJvdXRlLm1hdGNoO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoID8gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IGxvY2F0aW9uOiBsb2NhdGlvbiwgY29tcHV0ZWRNYXRjaDogbWF0Y2ggfSkgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBTd2l0Y2g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblN3aXRjaC5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICByb3V0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWRcbn07XG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZXMvU3dpdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJvdXRlIGZyb20gJy4vUm91dGUnO1xuXG4vKipcbiAqIEEgcHVibGljIGhpZ2hlci1vcmRlciBjb21wb25lbnQgdG8gYWNjZXNzIHRoZSBpbXBlcmF0aXZlIEFQSVxuICovXG52YXIgd2l0aFJvdXRlciA9IGZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9uZW50KSB7XG4gIHZhciBDID0gZnVuY3Rpb24gQyhwcm9wcykge1xuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50UmVmID0gcHJvcHMud3JhcHBlZENvbXBvbmVudFJlZixcbiAgICAgICAgcmVtYWluaW5nUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsnd3JhcHBlZENvbXBvbmVudFJlZiddKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlLCB7IHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKHJvdXRlQ29tcG9uZW50UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcmVtYWluaW5nUHJvcHMsIHJvdXRlQ29tcG9uZW50UHJvcHMsIHsgcmVmOiB3cmFwcGVkQ29tcG9uZW50UmVmIH0pKTtcbiAgICAgIH0gfSk7XG4gIH07XG5cbiAgQy5kaXNwbGF5TmFtZSA9ICd3aXRoUm91dGVyKCcgKyAoQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lKSArICcpJztcbiAgQy5XcmFwcGVkQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICBDLnByb3BUeXBlcyA9IHtcbiAgICB3cmFwcGVkQ29tcG9uZW50UmVmOiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIHJldHVybiBob2lzdFN0YXRpY3MoQywgQ29tcG9uZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2VzL3dpdGhSb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gICAgbmFtZTogdHJ1ZSxcbiAgICBsZW5ndGg6IHRydWUsXG4gICAgcHJvdG90eXBlOiB0cnVlLFxuICAgIGNhbGxlcjogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBpc0dldE93blByb3BlcnR5U3ltYm9sc0F2YWlsYWJsZSA9IHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBjdXN0b21TdGF0aWNzKSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoaXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHNBdmFpbGFibGUpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIVJFQUNUX1NUQVRJQ1Nba2V5c1tpXV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5c1tpXV0gJiYgKCFjdXN0b21TdGF0aWNzIHx8ICFjdXN0b21TdGF0aWNzW2tleXNbaV1dKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldENvbXBvbmVudFtrZXlzW2ldXSA9IHNvdXJjZUNvbXBvbmVudFtrZXlzW2ldXTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUhhc2hIaXN0b3J5JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCB1c2VzIHdpbmRvdy5sb2NhdGlvbi5oYXNoLlxuICovXG5cbnZhciBIYXNoUm91dGVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEhhc2hSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEhhc2hSb3V0ZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIYXNoUm91dGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oaXN0b3J5ID0gY3JlYXRlSGlzdG9yeShfdGhpcy5wcm9wcyksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgSGFzaFJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5IYXNoUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldFVzZXJDb25maXJtYXRpb246IFByb3BUeXBlcy5mdW5jLFxuICBoYXNoVHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnaGFzaGJhbmcnLCAnbm9zbGFzaCcsICdzbGFzaCddKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEhhc2hSb3V0ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9lcy9IYXNoUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbnZhciBIYXNoUGF0aENvZGVycyA9IHtcbiAgaGFzaGJhbmc6IHtcbiAgICBlbmNvZGVQYXRoOiBmdW5jdGlvbiBlbmNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aCA6ICchLycgKyAoMCwgX1BhdGhVdGlscy5zdHJpcExlYWRpbmdTbGFzaCkocGF0aCk7XG4gICAgfSxcbiAgICBkZWNvZGVQYXRoOiBmdW5jdGlvbiBkZWNvZGVQYXRoKHBhdGgpIHtcbiAgICAgIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJyEnID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xuICAgIH1cbiAgfSxcbiAgbm9zbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IF9QYXRoVXRpbHMuc3RyaXBMZWFkaW5nU2xhc2gsXG4gICAgZGVjb2RlUGF0aDogX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2hcbiAgfSxcbiAgc2xhc2g6IHtcbiAgICBlbmNvZGVQYXRoOiBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaFxuICB9XG59O1xuXG52YXIgZ2V0SGFzaFBhdGggPSBmdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICB2YXIgaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICB2YXIgaGFzaEluZGV4ID0gaHJlZi5pbmRleE9mKCcjJyk7XG4gIHJldHVybiBoYXNoSW5kZXggPT09IC0xID8gJycgOiBocmVmLnN1YnN0cmluZyhoYXNoSW5kZXggKyAxKTtcbn07XG5cbnZhciBwdXNoSGFzaFBhdGggPSBmdW5jdGlvbiBwdXNoSGFzaFBhdGgocGF0aCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xufTtcblxudmFyIHJlcGxhY2VIYXNoUGF0aCA9IGZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHZhciBoYXNoSW5kZXggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCcjJyk7XG5cbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoMCwgaGFzaEluZGV4ID49IDAgPyBoYXNoSW5kZXggOiAwKSArICcjJyArIHBhdGgpO1xufTtcblxudmFyIGNyZWF0ZUhhc2hIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKF9ET01VdGlscy5jYW5Vc2VET00sICdIYXNoIGhpc3RvcnkgbmVlZHMgYSBET00nKTtcblxuICB2YXIgZ2xvYmFsSGlzdG9yeSA9IHdpbmRvdy5oaXN0b3J5O1xuICB2YXIgY2FuR29XaXRob3V0UmVsb2FkID0gKDAsIF9ET01VdGlscy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCkoKTtcblxuICB2YXIgX3Byb3BzJGdldFVzZXJDb25maXJtID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIGdldFVzZXJDb25maXJtYXRpb24gPSBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPT09IHVuZGVmaW5lZCA/IF9ET01VdGlscy5nZXRDb25maXJtYXRpb24gOiBfcHJvcHMkZ2V0VXNlckNvbmZpcm0sXG4gICAgICBfcHJvcHMkaGFzaFR5cGUgPSBwcm9wcy5oYXNoVHlwZSxcbiAgICAgIGhhc2hUeXBlID0gX3Byb3BzJGhhc2hUeXBlID09PSB1bmRlZmluZWQgPyAnc2xhc2gnIDogX3Byb3BzJGhhc2hUeXBlO1xuXG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gKDAsIF9QYXRoVXRpbHMuc3RyaXBUcmFpbGluZ1NsYXNoKSgoMCwgX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2gpKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICB2YXIgX0hhc2hQYXRoQ29kZXJzJGhhc2hUID0gSGFzaFBhdGhDb2RlcnNbaGFzaFR5cGVdLFxuICAgICAgZW5jb2RlUGF0aCA9IF9IYXNoUGF0aENvZGVycyRoYXNoVC5lbmNvZGVQYXRoLFxuICAgICAgZGVjb2RlUGF0aCA9IF9IYXNoUGF0aENvZGVycyRoYXNoVC5kZWNvZGVQYXRoO1xuXG5cbiAgdmFyIGdldERPTUxvY2F0aW9uID0gZnVuY3Rpb24gZ2V0RE9NTG9jYXRpb24oKSB7XG4gICAgdmFyIHBhdGggPSBkZWNvZGVQYXRoKGdldEhhc2hQYXRoKCkpO1xuXG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghYmFzZW5hbWUgfHwgKDAsIF9QYXRoVXRpbHMuaGFzQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKSwgJ1lvdSBhcmUgYXR0ZW1wdGluZyB0byB1c2UgYSBiYXNlbmFtZSBvbiBhIHBhZ2Ugd2hvc2UgVVJMIHBhdGggZG9lcyBub3QgYmVnaW4gJyArICd3aXRoIHRoZSBiYXNlbmFtZS4gRXhwZWN0ZWQgcGF0aCBcIicgKyBwYXRoICsgJ1wiIHRvIGJlZ2luIHdpdGggXCInICsgYmFzZW5hbWUgKyAnXCIuJyk7XG5cbiAgICBpZiAoYmFzZW5hbWUpIHBhdGggPSAoMCwgX1BhdGhVdGlscy5zdHJpcEJhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSk7XG5cbiAgICByZXR1cm4gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoKTtcbiAgfTtcblxuICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KSgpO1xuXG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKG5leHRTdGF0ZSkge1xuICAgIF9leHRlbmRzKGhpc3RvcnksIG5leHRTdGF0ZSk7XG5cbiAgICBoaXN0b3J5Lmxlbmd0aCA9IGdsb2JhbEhpc3RvcnkubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gIHZhciBpZ25vcmVQYXRoID0gbnVsbDtcblxuICB2YXIgaGFuZGxlSGFzaENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoKSB7XG4gICAgdmFyIHBhdGggPSBnZXRIYXNoUGF0aCgpO1xuICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG5cbiAgICBpZiAocGF0aCAhPT0gZW5jb2RlZFBhdGgpIHtcbiAgICAgIC8vIEVuc3VyZSB3ZSBhbHdheXMgaGF2ZSBhIHByb3Blcmx5LWVuY29kZWQgaGFzaC5cbiAgICAgIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gICAgICB2YXIgcHJldkxvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgICAgaWYgKCFmb3JjZU5leHRQb3AgJiYgKDAsIF9Mb2NhdGlvblV0aWxzLmxvY2F0aW9uc0FyZUVxdWFsKShwcmV2TG9jYXRpb24sIGxvY2F0aW9uKSkgcmV0dXJuOyAvLyBBIGhhc2hjaGFuZ2UgZG9lc24ndCBhbHdheXMgPT0gbG9jYXRpb24gY2hhbmdlLlxuXG4gICAgICBpZiAoaWdub3JlUGF0aCA9PT0gKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pKSByZXR1cm47IC8vIElnbm9yZSB0aGlzIGNoYW5nZTsgd2UgYWxyZWFkeSBzZXRTdGF0ZSBpbiBwdXNoL3JlcGxhY2UuXG5cbiAgICAgIGlnbm9yZVBhdGggPSBudWxsO1xuXG4gICAgICBoYW5kbGVQb3AobG9jYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlUG9wID0gZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG5cbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJldmVydFBvcCA9IGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIHBhdGhzIHdlJ3ZlIHNlZW4gaW4gc2Vzc2lvblN0b3JhZ2UuXG4gICAgLy8gSW5zdGVhZCwgd2UganVzdCBkZWZhdWx0IHRvIDAgZm9yIHBhdGhzIHdlIGRvbid0IGtub3cuXG5cbiAgICB2YXIgdG9JbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKCgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKHRvTG9jYXRpb24pKTtcblxuICAgIGlmICh0b0luZGV4ID09PSAtMSkgdG9JbmRleCA9IDA7XG5cbiAgICB2YXIgZnJvbUluZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoZnJvbUxvY2F0aW9uKSk7XG5cbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcblxuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEVuc3VyZSB0aGUgaGFzaCBpcyBlbmNvZGVkIHByb3Blcmx5IGJlZm9yZSBkb2luZyBhbnl0aGluZyBlbHNlLlxuICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgocGF0aCk7XG5cbiAgaWYgKHBhdGggIT09IGVuY29kZWRQYXRoKSByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbigpO1xuICB2YXIgYWxsUGF0aHMgPSBbKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkoaW5pdGlhbExvY2F0aW9uKV07XG5cbiAgLy8gUHVibGljIGludGVyZmFjZVxuXG4gIHZhciBjcmVhdGVIcmVmID0gZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgIHJldHVybiAnIycgKyBlbmNvZGVQYXRoKGJhc2VuYW1lICsgKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pKTtcbiAgfTtcblxuICB2YXIgcHVzaCA9IGZ1bmN0aW9uIHB1c2gocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHB1c2ggc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUFVTSCc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBQVVNILCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICBwdXNoSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuXG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZigoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShoaXN0b3J5LmxvY2F0aW9uKSk7XG4gICAgICAgIHZhciBuZXh0UGF0aHMgPSBhbGxQYXRocy5zbGljZSgwLCBwcmV2SW5kZXggPT09IC0xID8gMCA6IHByZXZJbmRleCArIDEpO1xuXG4gICAgICAgIG5leHRQYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICBhbGxQYXRocyA9IG5leHRQYXRocztcblxuICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnSGFzaCBoaXN0b3J5IGNhbm5vdCBQVVNIIHRoZSBzYW1lIHBhdGg7IGEgbmV3IGVudHJ5IHdpbGwgbm90IGJlIGFkZGVkIHRvIHRoZSBoaXN0b3J5IHN0YWNrJyk7XG5cbiAgICAgICAgc2V0U3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2UocGF0aCwgc3RhdGUpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdIYXNoIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGxvY2F0aW9uKTtcbiAgICAgIHZhciBlbmNvZGVkUGF0aCA9IGVuY29kZVBhdGgoYmFzZW5hbWUgKyBwYXRoKTtcbiAgICAgIHZhciBoYXNoQ2hhbmdlZCA9IGdldEhhc2hQYXRoKCkgIT09IGVuY29kZWRQYXRoO1xuXG4gICAgICBpZiAoaGFzaENoYW5nZWQpIHtcbiAgICAgICAgLy8gV2UgY2Fubm90IHRlbGwgaWYgYSBoYXNoY2hhbmdlIHdhcyBjYXVzZWQgYnkgYSBSRVBMQUNFLCBzbyB3ZSdkXG4gICAgICAgIC8vIHJhdGhlciBzZXRTdGF0ZSBoZXJlIGFuZCBpZ25vcmUgdGhlIGhhc2hjaGFuZ2UuIFRoZSBjYXZlYXQgaGVyZVxuICAgICAgICAvLyBpcyB0aGF0IG90aGVyIGhhc2ggaGlzdG9yaWVzIGluIHRoZSBwYWdlIHdpbGwgY29uc2lkZXIgaXQgYSBQT1AuXG4gICAgICAgIGlnbm9yZVBhdGggPSBwYXRoO1xuICAgICAgICByZXBsYWNlSGFzaFBhdGgoZW5jb2RlZFBhdGgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldkluZGV4ID0gYWxsUGF0aHMuaW5kZXhPZigoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShoaXN0b3J5LmxvY2F0aW9uKSk7XG5cbiAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSBhbGxQYXRoc1twcmV2SW5kZXhdID0gcGF0aDtcblxuICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnbyA9IGZ1bmN0aW9uIGdvKG4pIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGNhbkdvV2l0aG91dFJlbG9hZCwgJ0hhc2ggaGlzdG9yeSBnbyhuKSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkIGluIHRoaXMgYnJvd3NlcicpO1xuXG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgfTtcblxuICB2YXIgZ29CYWNrID0gZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIHJldHVybiBnbygtMSk7XG4gIH07XG5cbiAgdmFyIGdvRm9yd2FyZCA9IGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICByZXR1cm4gZ28oMSk7XG4gIH07XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwO1xuXG4gIHZhciBjaGVja0RPTUxpc3RlbmVycyA9IGZ1bmN0aW9uIGNoZWNrRE9NTGlzdGVuZXJzKGRlbHRhKSB7XG4gICAgbGlzdGVuZXJDb3VudCArPSBkZWx0YTtcblxuICAgIGlmIChsaXN0ZW5lckNvdW50ID09PSAxKSB7XG4gICAgICAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgdmFyIGJsb2NrID0gZnVuY3Rpb24gYmxvY2soKSB7XG4gICAgdmFyIHByb21wdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG5cbiAgICB2YXIgdW5ibG9jayA9IHRyYW5zaXRpb25NYW5hZ2VyLnNldFByb21wdChwcm9tcHQpO1xuXG4gICAgaWYgKCFpc0Jsb2NrZWQpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzQmxvY2tlZCkge1xuICAgICAgICBpc0Jsb2NrZWQgPSBmYWxzZTtcbiAgICAgICAgY2hlY2tET01MaXN0ZW5lcnMoLTEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5ibG9jaygpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIHZhciB1bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICBjaGVja0RPTUxpc3RlbmVycygxKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhpc3RvcnkgPSB7XG4gICAgbGVuZ3RoOiBnbG9iYWxIaXN0b3J5Lmxlbmd0aCxcbiAgICBhY3Rpb246ICdQT1AnLFxuICAgIGxvY2F0aW9uOiBpbml0aWFsTG9jYXRpb24sXG4gICAgY3JlYXRlSHJlZjogY3JlYXRlSHJlZixcbiAgICBwdXNoOiBwdXNoLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgZ286IGdvLFxuICAgIGdvQmFjazogZ29CYWNrLFxuICAgIGdvRm9yd2FyZDogZ29Gb3J3YXJkLFxuICAgIGJsb2NrOiBibG9jayxcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9O1xuXG4gIHJldHVybiBoaXN0b3J5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlSGFzaEhpc3Rvcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMjQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluayc7XG5cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cbnZhciBOYXZMaW5rID0gZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciB0byA9IF9yZWYudG8sXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBnZXRJc0FjdGl2ZSA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsndG8nLCAnZXhhY3QnLCAnc3RyaWN0JywgJ2xvY2F0aW9uJywgJ2FjdGl2ZUNsYXNzTmFtZScsICdjbGFzc05hbWUnLCAnYWN0aXZlU3R5bGUnLCAnc3R5bGUnLCAnaXNBY3RpdmUnXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGUsIHtcbiAgICBwYXRoOiAodHlwZW9mIHRvID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0bykpID09PSAnb2JqZWN0JyA/IHRvLnBhdGhuYW1lIDogdG8sXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIHN0cmljdDogc3RyaWN0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9yZWYyLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoID0gX3JlZjIubWF0Y2g7XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGdldElzQWN0aXZlID8gZ2V0SXNBY3RpdmUobWF0Y2gsIGxvY2F0aW9uKSA6IG1hdGNoKTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgX2V4dGVuZHMoe1xuICAgICAgICB0bzogdG8sXG4gICAgICAgIGNsYXNzTmFtZTogaXNBY3RpdmUgPyBbYWN0aXZlQ2xhc3NOYW1lLCBjbGFzc05hbWVdLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9KS5qb2luKCcgJykgOiBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBpc0FjdGl2ZSA/IF9leHRlbmRzKHt9LCBzdHlsZSwgYWN0aXZlU3R5bGUpIDogc3R5bGVcbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuTmF2TGluay5wcm9wVHlwZXMgPSB7XG4gIHRvOiBMaW5rLnByb3BUeXBlcy50byxcbiAgZXhhY3Q6IFByb3BUeXBlcy5ib29sLFxuICBzdHJpY3Q6IFByb3BUeXBlcy5ib29sLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXNBY3RpdmU6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5OYXZMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlQ2xhc3NOYW1lOiAnYWN0aXZlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TGluaztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2VzL05hdkxpbmsuanNcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFnZW5kYX0gZnJvbSAnLi9BZ2VuZGEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnRyb30gZnJvbSAnLi9JbnRybyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpcnN0UGFnZX0gZnJvbSAnLi9GaXJzdFBhZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZWNobmljYWxTdGFja3N9IGZyb20gJy4vVGVjaG5pY2FsU3RhY2tzJztcbmV4cG9ydCB7IE5hdkJhcn0gZnJvbSAnLi9zaGFyZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlbW90ZSB9IGZyb20gJy4vUmVtb3RlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXNsaW50IH0gZnJvbSAnLi9Fc2xpbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFeHByZXNzIH0gZnJvbSAnLi9FeHByZXNzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2VicGFjayB9IGZyb20gJy4vV2VicGFjayc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRoZUVuZCB9IGZyb20gJy4vVGhlRW5kJztcbmV4cG9ydCB7IEplc3RJbnRybywgSmVzdFNldHVwLCBUZXN0aW5nQWdhaW5zdERhdGFiYXNlLCBUZXN0aW5nQVBJLCBUZXN0aW5nUmVhY3QgfSBmcm9tICcuL0plc3QnO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IEhlcm8sIFRpdGxlLCBTdWJUaXRsZSwgTmF2QmFyLCBGb290ZXIgfSBmcm9tICcuLi9zaGFyZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgQWdlbmRhID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdlbmRhXCI+XG4gICAgICAgIDxIZXJvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICBBZ2VuZGFcbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFN1YlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBtYWluIHRvcGljIGlzIHRlc3Rpbmcgd2l0aCA8YT4jSmVzdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICBXYWxrIHRocm91Z2ggYSBzZXR1cCBmb3IgTm9kZUpTIHByb2plY3QgYW5kIGxvb2sgYXQgaG93IEplc3QgaGVscHMgYSBwcm9qZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFRvZGF5IGJ1bGxldCBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJpcy1wdWxsZWQtcmlnaHQgYnV0dG9uIGlzLXByaW1hcnkgaXMtaW52ZXJ0ZWQgaXMtb3V0bGluZWRcIiB0bz17Jy9UZWNobmljYWxTdGFja3MnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZWNobmljYWwgU3RhY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvU3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8L0hlcm8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1RlY2huaWNhbFN0YWNrc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGVjaG5pY2FsIFN0YWNrcyh0eXBpY2FsIHNldHVwKVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgIFxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvVGVjaG5pY2FsU3RhY2tzL0V4cHJlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwcmVzcywgTW9uZ29EQiwgTW9uZ29vc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1RlY2huaWNhbFN0YWNrc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFc2xpbnQsIEFpckJuQiBSdWxlcywgV2VicGFjaywgR3VscFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvVGVjaG5pY2FsU3RhY2tzL0RvY2tlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2NrZXIsIFN3YWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1RlY2huaWNhbFN0YWNrcy9SZWFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFUzYsIFJlYWN0LCBSZWR1eCwgUmVkdXggVGh1bmssIEF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD4gICAgXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL0plc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3Rpbmcgd2l0aCBKZXN0XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL0plc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvcnQgSW50cm9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9KZXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHVwIGFuZCBzaW1wbGUgdGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIEplc3QgaW4gYWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9KZXN0L3Rlc3RpbmctYWdhaW5zdC1kYXRhYmFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW5nIGFnYWluc3QgZGF0YWJhc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvSmVzdC90ZXN0aW5nLWFwaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW5nIEFQSXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL0plc3QvdGVzdGluZy1yZWFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW5nIFJlYWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3RoZS1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBFbmRcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+ICAgXG4gICAgICAgICAgICA8L3VsPiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+ICAgICAgXG4gICAgPC9kaXY+ICAgIFxuKVxuXG5BZ2VuZGEucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQWdlbmRhLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgQWdlbmRhO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0FnZW5kYS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbn1cblxuY29uc3QgVGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICB7KGNoaWxkcmVuKX1cbiAgICA8L3A+ICAgICAgICAgICAgICAgIFxuKVxuXG5UaXRsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5UaXRsZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL1RpdGxlL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxufVxuXG5jb25zdCBTdWJUaXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgIHsoY2hpbGRyZW4pfVxuICAgIDwvcD4gICAgICAgICAgICAgICAgXG4pXG5cblN1YlRpdGxlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblN1YlRpdGxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgU3ViVGl0bGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvU3ViVGl0bGUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG59XG5cbmNvbnN0IEhlcm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1wcmltYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHsoY2hpbGRyZW4pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4gICAgICAgICAgICAgICBcbilcblxuSGVyby5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5IZXJvLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9IZXJvL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJyYW5kIGZyb20gJy4uL0JyYW5kJztcbmltcG9ydCBOYXZCYXJJdGVtIGZyb20gJy4vTmF2QmFySXRlbSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUgPSB0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgY29uc3QgeyBpc0FjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0FjdGl2ZTogIWlzQWN0aXZlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNBY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNsYXNzID0gaXNBY3RpdmU/ICdpcy1hY3RpdmUnIDogJyc7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgPEJyYW5kIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtgbmF2YmFyLWl0ZW0gaGFzLWRyb3Bkb3duICR7YWN0aXZlQ2xhc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkJhckl0ZW0gdGV4dD1cIlN0YXJ0XCIgbGluaz1cIi9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXJJdGVtIHRleHQ9XCJJbnRyb1wiIGxpbms9XCIvSW50cm9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXJJdGVtIHRleHQ9XCJBZ2VuZGFcIiBsaW5rPVwiL0FnZW5kYVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm5hdmJhci1kaXZpZGVyXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXJJdGVtIHRleHQ9XCJUZWNobmljYWwgU3RhY2tzXCIgbGluaz1cIi9UZWNobmljYWxTdGFja3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXJJdGVtIHRleHQ9XCJNb25nb0RCXCIgbGluaz1cIi9UZWNobmljYWxTdGFja3MvTW9uZ29EQlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkJhckl0ZW0gdGV4dD1cIkV4cHJlc3NcIiBsaW5rPVwiL1RlY2huaWNhbFN0YWNrcy9FeHByZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFySXRlbSB0ZXh0PVwiRG9ja2VyXCIgbGluaz1cIi9UZWNobmljYWxTdGFja3MvRG9ja2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFySXRlbSB0ZXh0PVwiV2VicGFja1wiIGxpbms9XCIvVGVjaG5pY2FsU3RhY2tzL1dlYnBhY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXJJdGVtIHRleHQ9XCJSZWFjdFwiIGxpbms9XCIvVGVjaG5pY2FsU3RhY2tzL1JlYWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibmF2YmFyLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXJJdGVtIHRleHQ9XCJKZXN0XCIgbGluaz1cIi9KZXN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFySXRlbSB0ZXh0PVwiU2V0dXAgYW5kIHNpbXBsZSBkZW1vXCIgbGluaz1cIi9qZXN0L3NldHVwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2QmFySXRlbSB0ZXh0PVwiVGVzdCBhZ2FpbnN0IGRhdGFiYXNlXCIgbGluaz1cIi9qZXN0L3Rlc3RpbmctYWdhaW5zdC1kYXRhYmFzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkJhckl0ZW0gdGV4dD1cIlRlc3QgQVBJc1wiIGxpbms9XCIvamVzdC90ZXN0aW5nLWFwaVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkJhckl0ZW0gdGV4dD1cIlRlc3QgUmVhY3RcIiBsaW5rPVwiL2plc3QvdGVzdGluZy1yZWFjdFwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibmF2YmFyLWRpdmlkZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZCYXJJdGVtIHRleHQ9XCJUaGUgRW5kXCIgbGluaz1cIi90aGUtZW5kXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuTmF2QmFyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk5hdkJhci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9OYXZCYXIvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHtcbiAgTGlua1xufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogJycsXG4gICAgbGluazogJycsXG59XG5cbmNvbnN0IE5hdkJhckl0ZW0gPSAoeyB0ZXh0LCBsaW5rIH0pID0+IChcbiAgICA8TGluayB0bz17bGlua30gY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAge3RleHR9XG4gICAgPC9MaW5rPiAgICAgICAgICAgXG4pXG5cbk5hdkJhckl0ZW0ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuTmF2QmFySXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhckl0ZW07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvTmF2QmFyL05hdkJhckl0ZW0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG59XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+QW4gaW50cm9kdWN0aW9uIHRvIEplc3Q8L3N0cm9uZz4gYnkgPGEgaHJlZj1cIm1haWx0bzpkdWMubWFpQG5pdGVjby5zZVwiPkR1YyBNYWk8L2E+LiBUaGUgc291cmNlIGNvZGUgaXMgbGljZW5zZWRcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcIj5NSVQ8L2E+LiBUaGUgd2Vic2l0ZSBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGlzIGxpY2Vuc2VkIDxhIGhyZWY9XCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1uYy1zYS80LjAvXCI+Q0MgQU5TIDQuMDwvYT4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPiAgICAgICAgICAgICAgXG4pXG5cbkZvb3Rlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Gb290ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9Gb290ZXIvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG59XG5cbmNvbnN0IFNlY3Rpb24gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgeyhjaGlsZHJlbil9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4gICAgICAgICAgICBcbilcblxuU2VjdGlvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5TZWN0aW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdWJTZWN0aW9uVGl0bGUgfSBmcm9tICcuL1N1YlNlY3Rpb25UaXRsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4vU2VjdGlvblRpdGxlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9TZWN0aW9uL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnJyxcbn1cblxuY29uc3QgU3ViU2VjdGlvblRpdGxlID0gKHsgdGV4dCB9KSA9PiAoXG4gICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+e3RleHR9PC9oMj4gICAgICAgICAgICAgIFxuKVxuXG5TdWJTZWN0aW9uVGl0bGUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuU3ViU2VjdGlvblRpdGxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgU3ViU2VjdGlvblRpdGxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL1NlY3Rpb24vU3ViU2VjdGlvblRpdGxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnJyxcbn1cblxuY29uc3QgU2VjdGlvblRpdGxlID0gKHsgdGV4dCB9KSA9PiAoXG4gICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RleHR9PC9oMT4gICAgICAgICAgICAgIFxuKVxuXG5TZWN0aW9uVGl0bGUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuU2VjdGlvblRpdGxlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRpdGxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL1NlY3Rpb24vU2VjdGlvblRpdGxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxufVxuXG5jb25zdCBDYXJkID0gKHtjaGlsZHJlbn0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgeyhjaGlsZHJlbil9XG4gICAgPC9kaXY+ICAgICAgIFxuKVxuXG5DYXJkLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNhcmQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIENhcmRJbWFnZSB9IGZyb20gJy4vQ2FyZEltYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZENvbnRlbnQgfSBmcm9tICcuL0NhcmRDb250ZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FyZE1lZGlhQ29udGVudCB9IGZyb20gJy4vQ2FyZE1lZGlhQ29udGVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvQ2FyZC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbn1cblxuY29uc3QgQ2FyZEltYWdlID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTRieTNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2J1bG1hLmlvL2ltYWdlcy9wbGFjZWhvbGRlcnMvMTI4MHg5NjAucG5nXCIgYWx0PVwiSW1hZ2VcIiAvPlxuICAgICAgICA8L2ZpZ3VyZT5cbiAgICA8L2Rpdj5cbilcblxuQ2FyZEltYWdlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNhcmRJbWFnZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJbWFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9DYXJkL0NhcmRJbWFnZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG59XG5cbmNvbnN0IENhcmRDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIHsoY2hpbGRyZW4pfVxuICAgIDwvZGl2PlxuKVxuXG5DYXJkQ29udGVudC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5DYXJkQ29udGVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRDb250ZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0NhcmQvQ2FyZENvbnRlbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIHRodW1ibmFpbDogUHJvcFR5cGVzLm5vZGUsXG4gICAgYXV0aG9yQ3JlZGl0OiBQcm9wVHlwZXMubm9kZSxcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIHRodW1ibmFpbDogbnVsbCxcbiAgICBhdXRob3JDcmVkaXQ6IG51bGxcbn1cblxuY29uc3QgQ2FyZE1lZGlhQ29udGVudCA9ICh7IHRodW1ibmFpbCwgYXV0aG9yQ3JlZGl0IH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdFwiPlxuICAgICAgICAgICAgeyh0aHVtYm5haWwpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250ZW50XCI+XG4gICAgICAgICAgICB7KGF1dGhvckNyZWRpdCl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5DYXJkTWVkaWFDb250ZW50LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkNhcmRNZWRpYUNvbnRlbnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkTWVkaWFDb250ZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL3NoYXJlL0NhcmQvQ2FyZE1lZGlhQ29udGVudC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBib3hJbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMubm9kZSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGJveEltYWdlOiAnJyxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNsYXNzTmFtZTogJydcbn1cblxuY29uc3QgQm94SW1hZ2UgPSAoYm94SW1hZ2UpID0+IHtcbiAgICBpZiAoYm94SW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtNjR4NjRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JveEltYWdlfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgQm94ID0gKHsgYm94SW1hZ2UsIGNvbnRlbnQsIGNsYXNzTmFtZSB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bib3ggJHtjbGFzc05hbWV9YH0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICB7Qm94SW1hZ2UoYm94SW1hZ2UpfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHsoY29udGVudCl9ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbilcblxuQm94LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkJveC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9zaGFyZS9Cb3gvaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvQm94L3N0eWxlLnNjc3MiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm94IHByZSB7XFxuICBtYXgtd2lkdGg6IDY0MHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2xpZW50L2NvbXBvbmVudHMvc2hhcmUvQm94L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IEhlcm8sIFRpdGxlLCBTdWJUaXRsZSwgTmF2QmFyLCBDYXJkLCBTZWN0aW9uLFxuICAgICAgICBTdWJTZWN0aW9uVGl0bGUsIENhcmRJbWFnZSwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYUNvbnRlbnQgfSBmcm9tICcuLi9zaGFyZSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJztcbmltcG9ydCBBdXRob3JDcmVkaXQgZnJvbSAnLi9BdXRob3JDcmVkaXQnO1xuaW1wb3J0IEF1dGhvckludHJvIGZyb20gJy4vQXV0aG9ySW50cm8nO1xuXG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblxufVxuY29uc3QgdGh1bWJuYWlsID0gPEF2YXRhciAvPjtcbmNvbnN0IGF1dGhvckNyZWRpdCA9IDxBdXRob3JDcmVkaXQgLz47XG5jb25zdCBJbnRybyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvXCI+XG4gICAgICAgIDxIZXJvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNob3J0IEludHJvXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBwcm9qZWN0IHNob3djYXNlIHVzZWQgaW4gdGhpcyBwcmVzZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImlzLXB1bGxlZC1yaWdodCBidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZCBpcy1vdXRsaW5lZFwiIHRvPXsnL0FnZW5kYSd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZW5kYVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9TdWJUaXRsZT4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8L0hlcm8+XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPFN1YlNlY3Rpb25UaXRsZSB0ZXh0PVwiI0JOUCAjUmVhY3QgI05vZGVKUyAjRXBpc2VydmVyXCIgLz4gIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFDb250ZW50IHRodW1ibmFpbD17dGh1bWJuYWlsfSBhdXRob3JDcmVkaXQ9e2F1dGhvckNyZWRpdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dGhvckludHJvIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD4gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gY29udGVudFwiPiAgXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnIGlzLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdXJwb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEkgc3RhcnRlZCBhIHByb2plY3QgdHdvIG1vbnRocyBhZ28uIFRoZSBwcm9qZWN0IGlzIHRvIHJlcG9ydCBzdGF0dXNlcyBvZiBjb25uZWN0aW9ucyBiZXR3ZWVuIFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXMoPHN0cm9uZz5FcGkgQ01TPC9zdHJvbmc+LCA8c3Ryb25nPktsYXJhIENNUzwvc3Ryb25nPiwgPHN0cm9uZz5OYXY8L3N0cm9uZz4sIDxzdHJvbmc+RnJvbnRFbmQgU2l0ZXMgRE4uc2UsIERpLnNlPC9zdHJvbmc+KSBpbiB0aGUgZWNvc3lzdGVtLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFnIGlzLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBwcm9qZWN0IHdhcyBidWlsdCB1cG9uIDxhIGNsYXNzTmFtZT1cImlzLXByaW1hcnlcIj4gIy5OZXQgYW5kICNSZWFjdCA8L2E+IGFuZCBsYXRlciB3YXMgY2hhbmdlZCB0byA8YT4jTm9kZUpTLCAjRXhwcmVzcywgI1JlYWN0IDwvYT4uIFRoZSBwcm9qZWN0IHdhcyB0aGVuIHVzaW5nIEplc3QgZm9yIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdGluZyBmZWF0dXJlcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhZyBpcy1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGluZyB3aXRoICNKZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RzIHdlcmUgY3JlYXRlZCBmb3IgZW5zdXJlIHRoZSBidXNpbmVzc2VzIGFuZCByZWR1Y2luZyB0aGUgdGltZSBmb3IgcmVwZXRpdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD4gICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgPC9kaXY+IFxuKVxuXG5JbnRyby5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5JbnRyby5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0ludHJvL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxufVxuXG5jb25zdCBBdmF0YXIgPSAoKSA9PiAoXG4gICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy00OHg0OFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9idWxtYS5pby9pbWFnZXMvcGxhY2Vob2xkZXJzLzk2eDk2LnBuZ1wiIGFsdD1cIkltYWdlXCIgLz5cbiAgICA8L2ZpZ3VyZT5cbilcblxuQXZhdGFyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkF2YXRhci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9JbnRyby9BdmF0YXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hpbGRyZW46IG51bGwsXG59XG5cbmNvbnN0IEF1dGhvckNyZWRpdCA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+RHVjIE1haTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNlwiPlxuICAgICAgICAgICAgQGR1Yy1tYWktbml0ZWNvXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGR1Yy5tYWlAbml0ZWNvLnNlXG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj4gICAgXG4pXG5cbkF1dGhvckNyZWRpdC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5BdXRob3JDcmVkaXQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3JDcmVkaXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSW50cm8vQXV0aG9yQ3JlZGl0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoaWxkcmVuOiBudWxsLFxufVxuXG5jb25zdCBBdXRob3JJbnRybyA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgRGVwYXJ0bWVudDogPHN0cm9uZz5Cb25uaWVyIFByb2dyYW08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgVGVhbTogPHN0cm9uZz5Db3JlIENNUzwvc3Ryb25nPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBQb3NpdGlvbjogPHN0cm9uZz5CcmlkZ2UgRW5naW5lZXI8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgQSBmdWxsIHN0YWNrIGRldmVsb3Blcig1IHllYXJzIGV4cGVyaWVuY2UpLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBDb21wZXRlbnQgc2tpbGxzOiAuTmV0LCA8YT4jRXBpc2VydmVyPC9hPiwgSmF2YXNjcmlwdCwgQ1NTLlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBUcmFuc2l0aW9uIHRvOiA8YT4jTm9kZUpTPC9hPiwgPGE+I1JlYWN0PC9hPi5cbiAgICAgICAgICAgIDwvbGk+ICAgIFxuICAgICAgICA8L3VsPiAgICBcbiAgICAgICAgPGE+I2phdmFzY3JpcHRsb3ZlcjwvYT4gPGE+I0JOUDwvYT5cbiAgICA8L2Rpdj4gICAgXG4pXG5cbkF1dGhvckludHJvLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkF1dGhvckludHJvLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9ySW50cm87XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSW50cm8vQXV0aG9ySW50cm8uanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSW50cm8vc3R5bGUuc2NzcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jcmVkaXQge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jbGllbnQvY29tcG9uZW50cy9JbnRyby9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSGVybywgVGl0bGUsIFN1YlRpdGxlLCBOYXZCYXIgfSBmcm9tICcuLi9zaGFyZSc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgRmlyc3RQYWdlID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtcGFnZVwiPlxuICAgICAgICA8SGVybz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12Y2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbiBhbHRlcm5hdGl2ZSBmb3IgZGV2ZWxvcG1lbnQgd2l0aCBOb2RlXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEEgcHJlc2VudGF0aW9uIGJ5IDxzcGFuIGNsYXNzTmFtZT1cImNyZWRpdFwiPiBEdWMgTWFpIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImlzLXB1bGxlZC1yaWdodCBidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZCBpcy1vdXRsaW5lZFwiIHRvPXsnL0ludHJvJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50cm9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdWJUaXRsZT4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgPC9IZXJvPiAgICBcbiAgICA8L2Rpdj4gXG4pXG5cbkZpcnN0UGFnZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5GaXJzdFBhZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBGaXJzdFBhZ2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvRmlyc3RQYWdlL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0ZpcnN0UGFnZS9zdHlsZS5zY3NzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNyZWRpdCB7XFxuICBjb2xvcjogIzAwMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NsaWVudC9jb21wb25lbnRzL0ZpcnN0UGFnZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgTGluaywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHNjcm9sbFRvIGZyb20gJ3Njcm9sbC10byc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBIZXJvLCBUaXRsZSwgU3ViVGl0bGUsIE5hdkJhciwgRm9vdGVyLCBTZWN0aW9uLCBCb3ggfSBmcm9tICcuLi9zaGFyZSc7XG5pbXBvcnQgRXhwcmVzcyBmcm9tICcuLi9FeHByZXNzJztcbmltcG9ydCBNb25nb0RCIGZyb20gJy4uL01vbmdvREInO1xuaW1wb3J0IERvY2tlciBmcm9tICcuLi9Eb2NrZXInO1xuaW1wb3J0IFdlYnBhY2sgZnJvbSAnLi4vV2VicGFjayc7XG5pbXBvcnQgUmVhY3RDb250ZW50IGZyb20gJy4uL1JlYWN0JztcbmltcG9ydCBFc2xpbnQgZnJvbSAnLi4vRXNsaW50JztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gICAgbWF0Y2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtYXRjaDoge1xuXG4gICAgfVxufVxuXG5jbGFzcyBUZWNobmljYWxTdGFja3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm1vbmdvRGJFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5leHByZXNzRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZG9ja2VyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMud2VicGFja0VsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlYWN0RWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMubW9uZ29EYlBvc2l0aW9uID0gdGhpcy5leHByZXNzUG9zaXRpb24gPSB0aGlzLnJlYWN0UG9zaXRpb24gPSBcbiAgICAgICAgdGhpcy5kb2NrZXJQb3NpdGlvbiA9IHRoaXMud2VicGFja1Bvc2l0aW9uID0gMDtcbiAgICB9XG4gICAgc2Nyb2xsVG8oZWxlbWVudCkge1xuICAgICAgICBsZXQgc2Nyb2xsID0gbnVsbDtcbiAgICAgICAgc3dpdGNoKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNhc2UgJ01vbmdvREInOlxuICAgICAgICAgICAgICAgIHNjcm9sbCA9IHRoaXMubW9uZ29EYlBvc2l0aW9uO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFeHByZXNzJzpcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSB0aGlzLmV4cHJlc3NQb3NpdGlvbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnRG9ja2VyJzpcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSB0aGlzLmRvY2tlclBvc2l0aW9uO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdXZWJwYWNrJzpcbiAgICAgICAgICAgICAgICBzY3JvbGwgPSB0aGlzLndlYnBhY2tQb3NpdGlvbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnUmVhY3QnOlxuICAgICAgICAgICAgICAgIHNjcm9sbCA9IHRoaXMucmVhY3RQb3NpdGlvbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmKCFzY3JvbGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxUbygwLCBzY3JvbGwpO1xuICAgIH1cbiAgICBnZXRQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkgeyBcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnNjcm9sbFRvKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnNjcm9sbFRvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5tb25nb0RiUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMubW9uZ29EYkVsZW1lbnQpO1xuICAgICAgICB0aGlzLmV4cHJlc3NQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5leHByZXNzRWxlbWVudCk7XG4gICAgICAgIHRoaXMuZG9ja2VyUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKHRoaXMuZG9ja2VyRWxlbWVudCk7XG4gICAgICAgIHRoaXMud2VicGFja1Bvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLndlYnBhY2tFbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZWFjdFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbih0aGlzLnJlYWN0RWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnNjcm9sbFRvKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnNjcm9sbFRvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwidGVjaG5pY2FsLXN0YWNrc1wiPlxuICAgICAgICAgICAgPEhlcm8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlY2huaWNhbCBTdGFja3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQSB0eXBpY2FsIHN1aXRlIHdoZW4gZGV2ZWxvcGluZyBOb2RlSlMgV2ViIEFwcGxpY2F0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImlzLXB1bGxlZC1yaWdodCBidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZCBpcy1vdXRsaW5lZFwiIHRvPXsnL0plc3QnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L0hlcm8+XG4gICAgICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhY2stcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVzbGludCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWNrLXJvd1wiIHJlZj17KGMpID0+IHsgdGhpcy5leHByZXNzRWxlbWVudCA9IGM7IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeHByZXNzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWNrLXJvd1wiIHJlZj17KGMpID0+IHsgdGhpcy5tb25nb0RiRWxlbWVudCA9IGM7IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25nb0RCIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhY2stcm93XCIgcmVmPXsoYykgPT4geyB0aGlzLmRvY2tlckVsZW1lbnQgPSBjOyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9ja2VyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWNrLXJvd1wiIHJlZj17KGMpID0+IHsgdGhpcy53ZWJwYWNrRWxlbWVudCA9IGM7IH19PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdlYnBhY2sgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFjay1yb3dcIiByZWY9eyhjKSA9PiB7IHRoaXMucmVhY3RFbGVtZW50ID0gYzsgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q29udGVudCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mb2xkZXItc3RydWN0dXJlLnBuZ1wiIGFsdD1cInByb2plY3Qgc3RydWN0dXJlc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9TZWN0aW9uPiAgICBcbiAgICAgICAgICAgIDxGb290ZXIgLz4gICAgICBcbiAgICAgIDwvZGl2PikgXG4gICAgfVxufVxuXG5UZWNobmljYWxTdGFja3MucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuVGVjaG5pY2FsU3RhY2tzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihUZWNobmljYWxTdGFja3MpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1RlY2huaWNhbFN0YWNrcy9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9FeHByZXNzL3N0eWxlLnNjc3MiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZXhwcmVzcy1ib3ggLmltYWdlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC5leHByZXNzLWJveCAuaW1hZ2UgaW1nIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NsaWVudC9jb21wb25lbnRzL0V4cHJlc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vc2hhcmUnO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xufVxuXG5jb25zdCBtb25nb29zZUNvZGUgPSBgZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgbW9uZ29vc2UuUHJvbWlzZSA9IFByb21pc2U7XG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJLCBcbiAgICAgICAgeyB1c2VNb25nb0NsaWVudDogdHJ1ZSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgIHJldHVybiBtb25nb29zZS5kaXNjb25uZWN0KCk7XG59YDtcbmNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPk1vbmdEQjwvc3Ryb25nPiA8c21hbGw+QHZlcnNpb24gMy4xNDwvc21hbGw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzdHJvbmc+TW9uZ29vc2U8L3N0cm9uZz4gPHNtYWxsPkB2ZXJzaW9uIDQuMTQ8L3NtYWxsPiB0byBmYWNpbGl0YXRlIGNvbW11bmljYXRpb25zIHdpdGggTW9uZ29EQlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgICB7bW9uZ29vc2VDb2RlfVxuICAgICAgICA8L3ByZT5cbiAgICA8L2Rpdj4gICAgICAgICAgICBcbilcblxuY29uc3QgTW9uZ29EQiA9ICgpID0+IChcbiAgICA8Qm94IFxuICAgICAgICBib3hJbWFnZT1cIi9pbWFnZXMvbW9uZ29kYi5wbmdcIlxuICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICBjbGFzc05hbWU9XCJtb25nb2RiLWJveFwiXG4gICAgLz4gICAgICAgICAgICBcbilcblxuTW9uZ29EQi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Nb25nb0RCLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTW9uZ29EQjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Nb25nb0RCL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL01vbmdvREIvc3R5bGUuc2NzcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tb25nb2RiLWJveCAuaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogIzI3MjcyNztcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC5tb25nb2RiLWJveCAuaW1hZ2UgaW1nIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NsaWVudC9jb21wb25lbnRzL01vbmdvREIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vc2hhcmUnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbn1cblxuY29uc3QgY29udGVudCA9IChcbiAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+RG9ja2VyPC9zdHJvbmc+IDxzbWFsbD5AdmVyc2lvbiA0PC9zbWFsbD4gICAgXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBEb2NrZXJmaWxlXG4gICAgICAgIDwvcD4gICAgXG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgICBGUk9NIG1oYXJ0L2FscGluZS1ub2RlOmxhdGVzdFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBBREQgcGFja2FnZS5qc29uIC90bXAvcGFja2FnZS5qc29uXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFJVTiBjZCAvdG1wICYmIG5wbSBpbnN0YWxsXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFJVTiBta2RpciAtcCAvb3B0L2FwcCAmJiBjcCAtYSAvdG1wL25vZGVfbW9kdWxlcyAvb3B0L2FwcC9cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgV09SS0RJUiAvb3B0L2FwcFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBBREQgLiAvb3B0L2FwcFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBFWFBPU0UgMzAwMFxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBDTUQgW1wibnBtXCIsIFwicnVuXCIsIFwic3RhcnQtZGV2XCJdXG4gICAgICAgIDwvcHJlPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIGRvY2tlci1jb21wb3NlLnltbFxuICAgICAgICA8L3A+ICAgIFxuICAgICAgICA8cHJlPlxuICAgICAgICAgICAgdmVyc2lvbjogXCIyXCJcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgc2VydmljZXM6XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHdlYjpcbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGJ1aWxkOiAuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgcG9ydHM6XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgLSBcIjMwMDA6MzAwMFwiXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgbGlua3M6XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgLSBtb25nb1xuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgbW9uZ286XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICBpbWFnZTogbW9uZ29cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICBwb3J0czpcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAtIFwiMjcwMTc6MjcwMTdcIlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBzd2FnZXI6ICAgIFxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGltYWdlOiBzd2FnZ2VyYXBpL3N3YWdnZXItdWlcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICBwb3J0czpcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAtIFwiMzAwMTo4MDgwXCJcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICBlbnZpcm9ubWVudDpcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAtIEFQSV9VUkw9aHR0cDovL2xvY2FsaG9zdDozMDAwL3N3YWdnZXIuanNvblxuICAgICAgICA8L3ByZT5cbiAgICA8L2Rpdj5cbik7XG5jb25zdCBEb2NrZXIgPSAoKSA9PiAoXG4gICAgPEJveCBcbiAgICAgICAgYm94SW1hZ2U9XCIvaW1hZ2VzL2RvY2tlci5zdmdcIlxuICAgICAgICBjb250ZW50PXtjb250ZW50fVxuICAgICAgICBjbGFzc05hbWU9XCJkb2NrZXItYm94XCJcbiAgICAvPiAgICAgICAgIFxuKVxuXG5Eb2NrZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRG9ja2VyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgRG9ja2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0RvY2tlci9pbmRleC5qcyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Eb2NrZXIvc3R5bGUuc2NzcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kb2NrZXItYm94IC5pbWFnZSB7XFxuICBiYWNrZ3JvdW5kOiAjMEM2RkE1O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgLmRvY2tlci1ib3ggLmltYWdlIGltZyB7XFxuICAgIG1hcmdpbi10b3A6IDIycHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jbGllbnQvY29tcG9uZW50cy9Eb2NrZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9XZWJwYWNrL3N0eWxlLnNjc3MiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIud2VicGFjay1ib3ggLmltYWdlIHtcXG4gIGJhY2tncm91bmQ6ICMyQjNBNDI7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAud2VicGFjay1ib3ggLmltYWdlIGltZyB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jbGllbnQvY29tcG9uZW50cy9XZWJwYWNrL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEJveCB9IGZyb20gJy4uL3NoYXJlJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbn1cblxuY29uc3QgbW9uZ29vc2VDb2RlID0gYGNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMb2FkaW5nQmFyIC8+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xpc3QvOnByb2R1Y3RcIiBjb21wb25lbnQ9e0xpc3R9IC8+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvc2VhcmNoLzpzZWFyY2hUZXh0P1wiIGNvbXBvbmVudD17U2VhcmNofSAvPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2xvZy86aWRcIiBjb21wb25lbnQ9e0RldGFpbH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hhc2hSb3V0ZXI+XG4gICAgPC9Db25uZWN0ZWRSb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pO2A7XG5jb25zdCBjb250ZW50ID0gKFxuICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5SZWFjdDwvc3Ryb25nPiA8c21hbGw+QHZlcnNpb24gMTUuNjwvc21hbGw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzdHJvbmc+UmVkdXg8L3N0cm9uZz4gPHNtYWxsPkB2ZXJzaW9uIDQuNC54PC9zbWFsbD4gdG8gbWFuaXB1bGF0ZSBzdGF0ZXMuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzdHJvbmc+UmVhY3QgUm91dGVyPC9zdHJvbmc+IDxzbWFsbD5AdmVyc2lvbiA0Lng8L3NtYWxsPiB0byBoYW5kbGUgcm91dGluZy5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cHJlPlxuICAgICAgICAgICAge21vbmdvb3NlQ29kZX1cbiAgICAgICAgPC9wcmU+XG4gICAgPC9kaXY+ICAgICAgICAgICAgXG4pXG5cbmNvbnN0IFJlYWN0Q29udGVudCA9ICgpID0+IChcbiAgICA8Qm94IFxuICAgICAgICBib3hJbWFnZT1cIi9pbWFnZXMvcmVhY3Quc3ZnXCJcbiAgICAgICAgY29udGVudD17Y29udGVudH1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVhY3QtYm94XCJcbiAgICAvPiAgICAgICAgICAgIFxuKVxuXG5SZWFjdENvbnRlbnQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUmVhY3RDb250ZW50LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RDb250ZW50O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1JlYWN0L2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1JlYWN0L3N0eWxlLnNjc3MiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jbGllbnQvY29tcG9uZW50cy9SZWFjdC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0VzbGludC9zdHlsZS5zY3NzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVzbGludC1ib3ggLmltYWdlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC5lc2xpbnQtYm94IC5pbWFnZSBpbWcge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vY2xpZW50L2NvbXBvbmVudHMvRXNsaW50L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvVGVjaG5pY2FsU3RhY2tzL3N0eWxlLnNjc3MiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhY2stcm93IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2NsaWVudC9jb21wb25lbnRzL1RlY2huaWNhbFN0YWNrcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IEhlcm8sIFRpdGxlLCBTdWJUaXRsZSwgTmF2QmFyLCBTZWN0aW9uLFxuICAgICAgICBTdWJTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi9zaGFyZSc7XG5pbXBvcnQgc29ja2V0IGZyb20gJy4uLy4uL2lvJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBoaXN0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBwdXNoOiBQcm9wVHlwZXMuZnVuY1xuICAgIH0pXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGlsZHJlbjogbnVsbCxcbiAgICBoaXN0b3J5OiB7fVxufVxuXG5jb25zdCBnb1RvID0gKGFjdGlvbiwgaGlzdG9yeSkgPT4ge1xuICAgIHNvY2tldC5lbWl0KCdzZW5kLWNvbW1hbmQnLCB7IGFjdGlvbiB9KTtcbiAgICBoaXN0b3J5LnB1c2goYC9hZG1pbi8ke2FjdGlvbn1gKVxufVxuXG5jb25zdCBSZW1vdGUgPSAoeyBjaGlsZHJlbiwgaGlzdG9yeSB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBnb1RvKCcnLCBoaXN0b3J5KX0+Rmlyc3QgUGFnZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBnb1RvKCdJbnRybycsIGhpc3RvcnkpfT5JbnRybzwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBnb1RvKCdBZ2VuZGEnLCBoaXN0b3J5KX0+QWdlbmRhPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGdvVG8oJ1RlY2huaWNhbFN0YWNrcycsIGhpc3RvcnkpfT5UZWNobmljYWwgU3RhY2tzPC9hPiAgICBcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBnb1RvKCdUZWNobmljYWxTdGFja3MvRXhwcmVzcycsIGhpc3RvcnkpfT5FeHByZXNzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGdvVG8oJ1RlY2huaWNhbFN0YWNrcy9Nb25nb0RCJywgaGlzdG9yeSl9Pk1vbmdvREI8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmJhci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gZ29UbygnVGVjaG5pY2FsU3RhY2tzL0RvY2tlcicsIGhpc3RvcnkpfT5Eb2NrZXI8L2E+XG4gICAgICAgICAgICA8L2xpPiAgICBcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGdvVG8oJ1RlY2huaWNhbFN0YWNrcy9XZWJwYWNrJywgaGlzdG9yeSl9PldlYnBhY2s8L2E+XG4gICAgICAgICAgICA8L2xpPiAgICBcbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1tZW51XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBnb1RvKCdKZXN0JywgaGlzdG9yeSl9Pkplc3QgSW50cm9kdWN0aW9uPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGdvVG8oJ0plc3Qvc2V0dXAnLCBoaXN0b3J5KX0+SmVzdCBTZXR1cDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBnb1RvKCdKZXN0L3Rlc3RpbmctYWdhaW5zdC1kYXRhYmFzZScsIGhpc3RvcnkpfT5UZXN0IERhdGFiYXNlPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGdvVG8oJ0plc3QvdGVzdGluZy1hcGknLCBoaXN0b3J5KX0+VGVzdCBBUEk8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPiAgICBcbiAgICA8L2Rpdj5cbilcblxuUmVtb3RlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblJlbW90ZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUmVtb3RlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9SZW1vdGUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEhlcm8sIFRpdGxlLCBTdWJUaXRsZSwgTmF2QmFyLCBGb290ZXIgfSBmcm9tICcuLi9zaGFyZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xufVxuXG5jb25zdCBUaGVFbmQgPSAoKSA9PiAoXG4gICAgPEhlcm8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12Y2VudGVyZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEVuZCEhIVxuICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPFN1YlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciB5b3VyIGxpc3RlbmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiByZWFjaCBtZSBAIGR1Yy5tYWlAbml0ZWNvLnNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvdyBtZSBvbiBtZWRpdW0gaHR0cHM6Ly9tZWRpdW0uY29tL0BtcmR1Y212ODhcbiAgICAgICAgICAgICAgICA8L1N1YlRpdGxlPlxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8L2Rpdj4gICAgXG4gICAgPC9IZXJvPlxuKVxuXG5UaGVFbmQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuVGhlRW5kLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgVGhlRW5kO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL1RoZUVuZC9pbmRleC5qcyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSmVzdEludHJvIH0gZnJvbSAnLi9JbnRybyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzICBKZXN0U2V0dXAgfSBmcm9tICcuL0plc3RTZXR1cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzICBUZXN0aW5nQWdhaW5zdERhdGFiYXNlIH0gZnJvbSAnLi9UZXN0aW5nQWdhaW5zdERhdGFiYXNlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgIFRlc3RpbmdSZWFjdCB9IGZyb20gJy4vVGVzdGluZ1JlYWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgIFRlc3RpbmdBUEkgfSBmcm9tICcuL1Rlc3RpbmdBUEknO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBIZXJvLCBUaXRsZSwgU3ViVGl0bGUsIE5hdkJhciwgQ2FyZCwgQ2FyZENvbnRlbnQsIFNlY3Rpb24gfSBmcm9tICcuLi9zaGFyZSc7XG5pbXBvcnQgRWFzeVNldHVwIGZyb20gJy4vRWFzeVNldHVwJztcbmltcG9ydCBaZXJvQ29uZmlndXJhdGlvbiBmcm9tICcuL1plcm9Db25maWd1cmF0aW9uJztcbmltcG9ydCBQb3dlcmZ1bE1vY2t1cCBmcm9tICcuL1Bvd2VyZnVsTW9ja3VwJztcbmltcG9ydCBUZXN0aW5nQmVuZWZpdCBmcm9tICcuL1Rlc3RpbmdCZW5lZml0JztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5jb25zdCBKZXN0SW50cm8gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1wYWdlXCI+XG4gICAgICAgIDxIZXJvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEludHJvZHVjdGlvbiB0byBKZXN0XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgYSB0ZXN0aW5nIGZyYW1ld29yayBieSA8c3Ryb25nPkZhY2Vib29rPC9zdHJvbmc+IGRlc2lnbmVkIGZvciBhbnkgUmVhY3QgcHJvamVjdC5cbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaXMtcHVsbGVkLXJpZ2h0IGJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkIGlzLW91dGxpbmVkXCIgdG89eycvamVzdC9zZXR1cCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHVwLVNpbXBsZSBEZW1vXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvU3ViVGl0bGU+ICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgIDwvSGVybz5cbiAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXN0aW5nQmVuZWZpdCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEVhc3lTZXR1cCAvPlxuICAgICAgICAgICAgICAgICAgICA8WmVyb0NvbmZpZ3VyYXRpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPFBvd2VyZnVsTW9ja3VwIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TZWN0aW9uPiAgIFxuICAgIDwvZGl2PiBcbilcblxuSmVzdEludHJvLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkplc3RJbnRyby5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IEplc3RJbnRybztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L0ludHJvLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSGVybywgVGl0bGUsIFN1YlRpdGxlLCBOYXZCYXIsIENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnLi4vc2hhcmUnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG5cbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXG59XG5cbmNvbnN0IEVhc3lTZXR1cCA9ICgpID0+IChcbiAgICA8Q2FyZD5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgIEVhc3kgU2V0dXBcbiAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgQ29tcGxldGUgYW5kIGVhc3kgdG8gc2V0LXVwIEphdmFTY3JpcHQgdGVzdGluZyBzb2x1dGlvbi4gV29ya3Mgb3V0IG9mIHRoZSBib3ggZm9yIGFueSBSZWFjdCBwcm9qZWN0LlxuICAgICAgICAgICAgPC9wPiAgICAgICBcbiAgICAgICAgPC9DYXJkQ29udGVudD4gICAgXG4gICAgPC9DYXJkPlxuKVxuXG5FYXN5U2V0dXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuRWFzeVNldHVwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgRWFzeVNldHVwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvRWFzeVNldHVwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSGVybywgVGl0bGUsIFN1YlRpdGxlLCBOYXZCYXIsIENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnLi4vc2hhcmUnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG5cbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXG59XG5cbmNvbnN0IFplcm9Db25maWd1cmF0aW9uID0gKCkgPT4gKFxuICAgIDxDYXJkPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgWmVybyBjb25maWd1cmF0aW9uIHRlc3RpbmcgcGxhdGZvcm1cbiAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgUGxhY2UgdGVzdHMgaW4gYSBfX3Rlc3RzX18gZm9sZGVyLCBvciBuYW1lIHlvdXIgdGVzdCBmaWxlcyB3aXRoIGEgLnNwZWMuanMgb3IgLnRlc3QuanMgZXh0ZW5zaW9uLiBcbiAgICAgICAgICAgIDwvcD4gICAgICAgXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+ICAgIFxuICAgIDwvQ2FyZD5cbilcblxuWmVyb0NvbmZpZ3VyYXRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuWmVyb0NvbmZpZ3VyYXRpb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBaZXJvQ29uZmlndXJhdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1plcm9Db25maWd1cmF0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSGVybywgVGl0bGUsIFN1YlRpdGxlLCBOYXZCYXIsIENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnLi4vc2hhcmUnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG5cbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXG59XG5cbmNvbnN0IFBvd2VyZnVsTW9ja3VwID0gKCkgPT4gKFxuICAgIDxDYXJkPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgUG93ZXJmdWwgbW9ja2luZyBsaWJyYXJ5XG4gICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIFBvd2VyZnVsIG1vY2tpbmcgbGlicmFyeSBmb3IgZnVuY3Rpb25zIGFuZCBtb2R1bGVzLlxuICAgICAgICAgICAgPC9wPiAgICAgICBcbiAgICAgICAgPC9DYXJkQ29udGVudD4gICAgXG4gICAgPC9DYXJkPlxuKVxuXG5Qb3dlcmZ1bE1vY2t1cC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Qb3dlcmZ1bE1vY2t1cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFBvd2VyZnVsTW9ja3VwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvUG93ZXJmdWxNb2NrdXAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBIZXJvLCBUaXRsZSwgU3ViVGl0bGUsIE5hdkJhciwgQ2FyZCwgQ2FyZENvbnRlbnQgfSBmcm9tICcuLi9zaGFyZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgVGVzdGluZ0JlbmVmaXQgPSAoKSA9PiAoXG4gICAgPENhcmQ+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICBCZW5lZml0cyBvZiBoYXZpbmcgdGVzdHNcbiAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICA8U3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgaXQgaXMgbm8gZG91YnQgdGhhdCBoYXZpbmcgdGVzdHMgYnJpbmdzIGEgbG90IG9mIGJlbmVmaXRzLlxuICAgICAgICAgICAgPC9TdWJUaXRsZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5zdXJlIHRoZSBjaGFpbnMgb2YgdGhlIGFwcCBsb2dpYyB3aGVuIG1ha2luZyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBBdm9pZCBib3JpbmcgYW5kIHJlcGVhdGl0aW9uIHN0ZXBzIHdoZW4gdmVyaWZ5aW5nLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRvbWF0ZSBnZW5lcmF0aW5nIGRhdGEgZm9yIHRlc3RpbmcuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvZGUgbG9naWMgaXMgc2VjdXJlciB3aGVuIGRlbGl2ZXJpbmcuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgIFxuICAgICAgICAgICAgICAgIDwvdWw+ICAgIFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8L0NhcmRDb250ZW50PiAgICBcbiAgICA8L0NhcmQ+XG4pXG5cblRlc3RpbmdCZW5lZml0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblRlc3RpbmdCZW5lZml0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGluZ0JlbmVmaXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9UZXN0aW5nQmVuZWZpdC5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jcmVkaXQge1xcbiAgY29sb3I6ICMwMDA7IH1cXG5cXG4uaW5zdGFsbGF0aW9uIHByZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBIZXJvLCBUaXRsZSwgU3ViVGl0bGUsIE5hdkJhciwgQ2FyZCwgQ2FyZENvbnRlbnQsIFNlY3Rpb24gfSBmcm9tICcuLi8uLi9zaGFyZSc7XG5pbXBvcnQgSW5zdGFsbGF0aW9uIGZyb20gJy4vSW5zdGFsbGF0aW9uJztcbmltcG9ydCBTaW1wbGVEZW1vIGZyb20gJy4vU2ltcGxlRGVtbyc7XG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9Ob3Rlcyc7XG5cbmltcG9ydCAnLi4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgSmVzdFNldHVwID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtcGFnZVwiPlxuICAgICAgICA8SGVybz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12Y2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZXR1cCBKZXN0XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgSmVzdCBpcyBzbyBlYXN5IHRvIHNldHVwLiBCeSBkZWZhdWx0LCBqZXN0IHdpbGwgbG9vayBmb3IgKi50ZXN0LiogZmlsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImlzLXB1bGxlZC1yaWdodCBidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZCBpcy1vdXRsaW5lZFwiIHRvPXsnL2plc3QvdGVzdGluZy1hZ2FpbnN0LWRhdGFiYXNlJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGluZyBhZ2FpbnN0IGRhdGFiYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvU3ViVGl0bGU+ICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgIDwvSGVybz5cbiAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbnN0YWxsYXRpb24gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOb3RlcyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2ltcGxlRGVtbyAvPlxuICAgICAgICA8L1NlY3Rpb24+ICAgXG4gICAgPC9kaXY+IFxuKVxuXG5KZXN0U2V0dXAucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuSmVzdFNldHVwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgSmVzdFNldHVwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvSmVzdFNldHVwL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmUnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG5cbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXG59XG5cbmNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnN0YWxsYXRpb25cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPmplc3Q8L3N0cm9uZz4gPHNtYWxsPkB2ZXJzaW9uIF4yMC4wLjQ8L3NtYWxsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3Ryb25nPmJhYmVsLWplc3Q8L3N0cm9uZz4gPHNtYWxsPl4yMC4wLjM8L3NtYWxsPlxuICAgICAgICA8L3A+XG4gICAgICAgIFBhY2thZ2UuanNvblxuICAgICAgICA8cHJlPlxuICAgICAgICAgICAgXCJ0ZXN0XCI6IFwiamVzdCAtLXJ1bkluQmFuZCAmJiBzZXQgTk9ERV9FTlY9dGVzdFwiLFxuICAgICAgICA8L3ByZT5cbiAgICAgICAgamVzdC5jb25maWcuanNcbiAgICAgICAgPHByZT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHZlcmJvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRlc3RQYXRoSWdub3JlUGF0dGVybnM6XG4gICAgICAgICAgICAgICAgICAgIFsnL25vZGVfbW9kdWxlcy8nLCAnL2NsaWVudC8nXSxcbiAgICAgICAgICAgICAgICB9O2BcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9wcmU+XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBJbnN0YWxsYXRpb24gPSAoKSA9PiAoXG4gICAgPEJveCBjb250ZW50PXtjb250ZW50fSAvPlxuKVxuXG5JbnN0YWxsYXRpb24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuSW5zdGFsbGF0aW9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFsbGF0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvSmVzdFNldHVwL0luc3RhbGxhdGlvbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5jb25zdCBiYXNpY1VzYWdlID0gYHRlc3QoJ25hbWUgb2YgdGVzdCBzdWl0ZScsICgpID0+IHtcbn0pO1xuZGVzY3JpYmUoJ2dyb3VwIG9mIHJlbGF0ZWQgdGVzdCBzdWl0ZXMnLCAoKSA9PiB7XG59KTtgXG5jb25zdCBjb250ZW50ID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdGFsbGF0aW9uXCI+XG4gICAgICAgIGJhc2ljIHVzYWdlXG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgICB7YmFzaWNVc2FnZX1cbiAgICAgICAgPC9wcmU+XG4gICAgICAgIHZhbGlkSGVscGVyLmpzXG4gICAgICAgIDxwcmU+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZShkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobmV3IERhdGUoZGF0ZSkgIT09ICdJbnZhbGlkIERhdGUnKSAmJiAhaXNOYU4obmV3IERhdGUoZGF0ZSkpO1xuICAgICAgICAgICAgICAgIH1gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPC9wcmU+XG4gICAgICAgIHZhbGlkSGVscGVyLnRlc3QuanNcbiAgICAgICAgPHByZT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBgaW1wb3J0IGlzRGF0ZSBmcm9tICcuLi92YWxpZEhlbHBlcic7XG5cbiAgICAgICAgICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0VmFsaWRIZWxwZXIoKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpYmUoJ0RhdGUgdmFsaWRhdG9yIHRlc3RpbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3QoJ2lzRGF0ZSBpbnZhbGlkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlzRGF0ZSgnYWJjJyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdCh2YWx1ZSkudG9CZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRlc3QoJ1sxXSBpc0RhdGUgdmFsaWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaXNEYXRlKCcyMDE3LzA2LzIxIDExOjIxOjAwJyk7XG4gICAgICAgICAgICAgICAgICAgIGV4cGVjdCh2YWx1ZSkudG9CZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGVzdCgnWzJdIGlzRGF0ZSB2YWxpZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpc0RhdGUoJ1dlZCBKdW4gMjEgMjAxNyAxMToyOTo1MCBHTVQrMDIwMCAoQ0VTVCknKTtcbiAgICAgICAgICAgICAgICAgICAgZXhwZWN0KHZhbHVlKS50b0JlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICA8L3ByZT5cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IFNpbXBsZURlbW8gPSAoKSA9PiAoXG4gICAgPEJveCBjb250ZW50PXtjb250ZW50fSAvPlxuKVxuXG5TaW1wbGVEZW1vLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblNpbXBsZURlbW8uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVEZW1vO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvSmVzdFNldHVwL1NpbXBsZURlbW8uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgY29udGVudCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImluc3RhbGxhdGlvblwiPlxuICAgICAgICBGZXcgbm90ZXMgdG8gc2hhcmVcbiAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIEplc3QgaXMgc2Vuc2l0aXZlIHdpdGggYXN5bmNocm9ub3VzIGNvZGUuIFJlbWVtYmVyIHRvIHJldHVybiBhbmQgaGFuZGxlIHByb3Blcmx5IHlvdXIgYXN5bmMgY29kZS5cbiAgICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIEV4cG9ydCB0ZXN0IGZ1bmN0aW9ucyBhbmQgY29tYmluZSBpbiBhbiBvbmUgZmluYWwgdGVzdCB0byBjb250cm9sIHRoZSBvcmRlciBvZiB0ZXN0cy5cbiAgICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIFVzZXIgYmVmb3JlIGFsbC9hZnRlciBhbGwgdG8gZG8gb25lIHRpbWUgc2V0dXAgdGFza3MuXG4gICAgICAgICAgICA8L2xpPiBcbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBTZXQgZW52aXJvbm1lbnQgdG8gVGVzdCB3aGVuIHJ1bm5pbmcgdGVzdHMgdG8gc2V0dXAgc29tZSBzcGVjaWZpYyBsb2dpYy5cbiAgICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIFJlbWVtYmVyIHRvIGRpc2Nvbm5lY3QgZnJvbSBtb25nb2RiIHdoZW4gdGVzdGluZyBhZ2FpbnN0IG1vbmdvZGJcbiAgICAgICAgICAgIDwvbGk+ICBcbiAgICAgICAgPC91bD4gICAgXG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBOb3RlcyA9ICgpID0+IChcbiAgICA8Qm94IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4pXG5cbk5vdGVzLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk5vdGVzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTm90ZXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9KZXN0U2V0dXAvTm90ZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBIZXJvLCBUaXRsZSwgU3ViVGl0bGUsIE5hdkJhciwgQ2FyZCwgQ2FyZENvbnRlbnQsIFNlY3Rpb24gfSBmcm9tICcuLi8uLi9zaGFyZSc7XG5cbmltcG9ydCBTb2x1dGlvbjEgZnJvbSAnLi9Tb2x1dGlvbjEnO1xuaW1wb3J0IFNvbHV0aW9uMiBmcm9tICcuL1NvbHV0aW9uMic7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgVGVzdGluZ0FnYWluc3REYXRhYmFzZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0LXBhZ2VcIj5cbiAgICAgICAgPEhlcm8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtdmNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGluZyBBZ2FpbnN0IERhdGFiYXNlXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgU29tZSB0aXBzIGZvciB0ZXN0aW5nIGxvZ2ljIGludGVyYWN0aW5nIHdpdGggRGF0YWJhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImlzLXB1bGxlZC1yaWdodCBidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZCBpcy1vdXRsaW5lZFwiIHRvPXsnL2plc3QvdGVzdGluZy1hcGknfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW5nIEFQSXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIDxhPiNNb25nb0RCPC9hPiBhbmQgPGE+I01vbmdvb3NlPC9hPiBhcmUgdXNlZCBmb3IgZGVtb250cmFzdHJpb25cbiAgICAgICAgICAgICAgICAgICAgPC9TdWJUaXRsZT4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgPC9IZXJvPlxuICAgICAgICA8U2VjdGlvbj5cbiAgICAgICAgICAgIDxTb2x1dGlvbjEgLz5cbiAgICAgICAgICAgIDxTb2x1dGlvbjIgLz5cbiAgICAgICAgPC9TZWN0aW9uPiAgIFxuICAgIDwvZGl2PiBcbilcblxuVGVzdGluZ0FnYWluc3REYXRhYmFzZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5UZXN0aW5nQWdhaW5zdERhdGFiYXNlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgVGVzdGluZ0FnYWluc3REYXRhYmFzZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdBZ2FpbnN0RGF0YWJhc2UvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgY29udGVudCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZlwiPlxuICAgICAgICAgICAgI1NvbHV0aW9uIDE6XG4gICAgICAgICAgICBNb2NrdXAgbW9uZ29vc2UgYnkgdXNpbmcgTW9ja2dvb3NlXG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIG5wbSBpbnN0YWxsIG1vY2tnb29zZSAtLXNhdmUtZGV2XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIFNldHVwXG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYHZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG4gICAgICAgICAgICAgICAgdmFyIE1vY2tnb29zZSA9IHJlcXVpcmUoJ21vY2tnb29zZScpLk1vY2tnb29zZTtcbiAgICAgICAgICAgICAgICB2YXIgbW9ja2dvb3NlID0gbmV3IE1vY2tnb29zZShtb25nb29zZSk7XG5cbiAgICAgICAgICAgICAgICBtb2NrZ29vc2UucHJlcGFyZVN0b3JhZ2UoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWtlIGNvbm5lY3Rpb25cdFx0XG4gICAgICAgICAgICAgICAgfSk7YCAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmIGNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICBCZW5lZml0XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBJbiBtZW1vcnkgZGF0YVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBEbyBub3QgcmVxdWlyZSBhIHJlYWwgTW9uZ28gaW5zdGFsbGF0aW9uXG4gICAgICAgICAgICAgICAgPC9saT4gXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBEYXRhIGlzIHJlc2V0IGV2ZXJ5IHJ1blxuICAgICAgICAgICAgICAgIDwvbGk+ICAgIFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIERpc2FkdmFudGFnZXNcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIENhbm5vdCBzaHV0ZG93biBNb25nb0RCIHNlcnZlciB3aGljaCBrZWVwcyBKZXN0IGNhbm5vdCB0ZXJtaW5hdGUgcHJvY2Vzc2VzXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIFVwZ3JhZGluZyBtb25nb2RiIG9yIG1vbmdvb3NlIG1pZ2h0IGJyZWFrIHRoZSBtb2NrdXAgY29kZVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPiAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBTb2x1dGlvbjEgPSAoKSA9PiAoXG4gICAgPEJveCBjb250ZW50PXtjb250ZW50fSAvPlxuKVxuXG5Tb2x1dGlvbjEucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuU29sdXRpb24xLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgU29sdXRpb24xO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvVGVzdGluZ0FnYWluc3REYXRhYmFzZS9Tb2x1dGlvbjEuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9zaGFyZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgbG9hZENvbmZpZyA9IGBkb3RlbnYuY29uZmlnKHsgcGF0aDogXFxgLlxcJHtwcm9jZXNzLmVudi5OT0RFX0VOVn0uZW52XFxgIH0pOyBcbmRvdGVudi5sb2FkKCk7YDtcblxuY29uc3QgY29udGVudCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZlwiPlxuICAgICAgICAgICAgI1NvbHV0aW9uIDI6XG4gICAgICAgICAgICBTZXR1cCBhIHNlcGFyYXRlIGRhdGFiYXNlIGZvciB0ZXN0aW5nXG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHNldCBOT0RFX0VOVj10ZXN0XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIFNldHVwXG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHtsb2FkQ29uZmlnfVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmIGNvbnRlbnRcIj5cbiAgICAgICAgICAgIEJlbmVmaXRcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIFRlc3QgcmVhbCB0cmFuc2FjdGlvbnMgd2l0aCBkYXRhYmFzZVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBDYW4gcmV1c2UgdGVzdCBkYXRhIGZvciBkZXZlbG9wbWVudFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBDYW4gZGlzY29ubmVjdCBmcm9tIE1vbmdvREIgc2VydmVyIHNvIGplc3QgY2FuIGV4aXQgcHJvcGVybHlcbiAgICAgICAgICAgICAgICA8L2xpPiAgIFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIERpc2FkdmFudGFnZXNcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIE5lZWQgYSBtb25nb2RiIGluc3RhbGxhdGlvblxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBOZWVkIHRvIGNsZWFyIGRhdGEgZXZlcnl0aW1lIHJ1bm5pbmcgdGVzdHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgU29sdXRpb24yID0gKCkgPT4gKFxuICAgIDxCb3ggY29udGVudD17Y29udGVudH0gLz5cbilcblxuU29sdXRpb24yLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblNvbHV0aW9uMi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFNvbHV0aW9uMjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdBZ2FpbnN0RGF0YWJhc2UvU29sdXRpb24yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSGVybywgVGl0bGUsIFN1YlRpdGxlLCBOYXZCYXIsIENhcmQsIENhcmRDb250ZW50LCBTZWN0aW9uIH0gZnJvbSAnLi4vLi4vc2hhcmUnO1xuaW1wb3J0IEVuenltZSBmcm9tICcuL0VuenltZSc7XG5pbXBvcnQgUmVkdXhUZXN0aW5nIGZyb20gJy4vUmVkdXhUZXN0aW5nJztcbmltcG9ydCBUaXBzIGZyb20gJy4vVGlwcyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcblxufVxuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuY29uc3QgVGVzdGluZ1JlYWN0ID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3QtcGFnZVwiPlxuICAgICAgICA8SGVybz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy12Y2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW5nIFJlYWN0XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgSmVzdCBpcyBkZXNpZ25lZCB0byB0ZXN0IGFueSBSZWFjdCBQcm9qZWN0LlxuICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJpcy1wdWxsZWQtcmlnaHQgYnV0dG9uIGlzLXByaW1hcnkgaXMtaW52ZXJ0ZWQgaXMtb3V0bGluZWRcIiB0bz17Jy90aGUtZW5kJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEVuZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L1N1YlRpdGxlPiAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8L0hlcm8+XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPEVuenltZSAvPlxuICAgICAgICAgICAgPFJlZHV4VGVzdGluZyAvPlxuICAgICAgICAgICAgPFRpcHMgLz5cbiAgICAgICAgPC9TZWN0aW9uPiAgIFxuICAgIDwvZGl2PiBcbilcblxuVGVzdGluZ1JlYWN0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblRlc3RpbmdSZWFjdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbmdSZWFjdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdSZWFjdC9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5jb25zdCBzY3JpcHQgPWBpbXBvcnQgeyBzaGFsbG93LCBtb3VudCwgcmVuZGVyIH0gZnJvbSAnZW56eW1lJztcbmFwcEluc3RhbmNlID0gbW91bnQoXG4gICAgICA8QXBwIC8+LFxuKVxuXG4vL2V2ZW50c1xuY29uc3QgaG9tZUNvbHVtbiA9IGFwcEluc3RhbmNlLmZpbmQoJ0hvbWVDb2x1bW4nKS5maXJzdCgpOyAgICAgICBcbmhvbWVDb2x1bW4uZmluZCgnTGluaycpLnNpbXVsYXRlKCdjbGljaycsIHsgYnV0dG9uOiAwIH0pOyAgIFxuXG4vL3ZlcmlmeVxuZXhwZWN0KGFwcEluc3RhbmNlLmZpbmQoJ0hvbWVDb2x1bW4nKS5sZW5ndGgpLnRvRXF1YWwoMyk7XG5gO1xuXG5jb25zdCBjb250ZW50ID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmXCI+XG4gICAgICAgICAgICA8c3Ryb25nPkVuenltZTwvc3Ryb25nPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIEluc3RhbGxcbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgbnBtIGluc3RhbGwgZW56eW1lIC0tc2F2ZS1kZXZcbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgU2V0dXBcbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAge3NjcmlwdH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmIGNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+RW56eW1lPC9zdHJvbmc+IGlzIGEgSmF2YVNjcmlwdCBUZXN0aW5nIHV0aWxpdHkgZm9yIFJlYWN0IHRoYXQgbWFrZXMgaXQgZWFzaWVyIHRvIGFzc2VydCwgbWFuaXB1bGF0ZSwgYW5kIHRyYXZlcnNlIHlvdXIgUmVhY3QgQ29tcG9uZW50cycgb3V0cHV0LlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgYWJsZSB0byByZW5kZXIgcmVhY3QgY29tcG9uZW50c1xuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICBhYmxlIHRvIG1vdW50IHJlYWN0IGNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgYWJsZSB0byBmaW5kIHJlYWN0IGNvbXBvbmVudHNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgYWJsZSB0byBzaW11bGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICA8L2xpPiAgXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbmNvbnN0IEVuenltZSA9ICgpID0+IChcbiAgICA8Qm94IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4pXG5cbkVuenltZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5Fbnp5bWUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBFbnp5bWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9UZXN0aW5nUmVhY3QvRW56eW1lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vc2hhcmUnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG5cbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXG59XG5cbmNvbnN0IHNjcmlwdCA9YGltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICdyZWR1eC1tb2NrLXN0b3JlJ1xuXG5jb25zdCBtaWRkbGV3YXJlcyA9IFtdXG5jb25zdCBtb2NrU3RvcmUgPSBjb25maWd1cmVTdG9yZShtaWRkbGV3YXJlcylcblxuLy8gWW91IHdvdWxkIGltcG9ydCB0aGUgYWN0aW9uIGZyb20geW91ciBjb2RlYmFzZSBpbiBhIHJlYWwgc2NlbmFyaW9cbmNvbnN0IGFkZFRvZG8gPSAoKSA9PiAoeyB0eXBlOiAnQUREX1RPRE8nIH0pXG5cbml0KCdzaG91bGQgZGlzcGF0Y2ggYWN0aW9uJywgKCkgPT4ge1xuXG4gIC8vIEluaXRpYWxpemUgbW9ja3N0b3JlIHdpdGggZW1wdHkgc3RhdGVcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge31cbiAgY29uc3Qgc3RvcmUgPSBtb2NrU3RvcmUoaW5pdGlhbFN0YXRlKVxuXG4gIC8vIERpc3BhdGNoIHRoZSBhY3Rpb25cbiAgc3RvcmUuZGlzcGF0Y2goYWRkVG9kbygpKVxuXG4gIC8vIFRlc3QgaWYgeW91ciBzdG9yZSBkaXNwYXRjaGVkIHRoZSBleHBlY3RlZCBhY3Rpb25zXG4gIGNvbnN0IGFjdGlvbnMgPSBzdG9yZS5nZXRBY3Rpb25zKClcbiAgY29uc3QgZXhwZWN0ZWRQYXlsb2FkID0geyB0eXBlOiAnQUREX1RPRE8nIH1cbiAgZXhwZWN0KGFjdGlvbnMpLnRvRXF1YWwoW2V4cGVjdGVkUGF5bG9hZF0pXG59KVxuYDtcblxuY29uc3QgY29udGVudCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZlwiPlxuICAgICAgICAgICAgPHN0cm9uZz5SZWR1eCBUZXN0aW5nIC0gcmVkdXgtbW9jay1zdG9yZTwvc3Ryb25nPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBJbnN0YWxsXG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIG5wbSBpbnN0YWxsIHJlZHV4LW1vY2stc3RvcmUgLS1zYXZlLWRldlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICBVc2FnZVxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICB7c2NyaXB0fVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGYgY29udGVudFwiPlxuICAgICAgICAgICAgPHN0cm9uZz5yZWR1eC1tb2NrLXN0b3JlPC9zdHJvbmc+IGlzIGEgZ29vZCBmb3IgdGVzdGluZyBSZWR1eCBzZXBhcmF0ZWx5LlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgUmVjb21tZW5kZWQgYnkgUmVkdXhcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgQWJsZSB0byB0ZXN0IGFzeW5jIGFjdGlvbnNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgQWJsZSB0byB0ZXN0IHdpdGggbWlkZGxld2FyZXNcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4pO1xuXG5jb25zdCBSZWR1eFRlc3RpbmcgPSAoKSA9PiAoXG4gICAgPEJveCBjb250ZW50PXtjb250ZW50fSAvPlxuKVxuXG5SZWR1eFRlc3RpbmcucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuUmVkdXhUZXN0aW5nLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgUmVkdXhUZXN0aW5nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvVGVzdGluZ1JlYWN0L1JlZHV4VGVzdGluZy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5jb25zdCBzY3JpcHQgPWBhcHBJbnN0YW5jZSA9IG1vdW50KFxuICAgIDxBcHAgLz4sXG4pYDtcblxuY29uc3QgdHJpZ2dlckV2ZW50cyA9YHJldHVybiBkZWxheUNsaWNrT25FcGkoKVxuLnRoZW4oZGVsYXlHZXRTdGF0ZSlcbi50aGVuKChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHN0YXRlTGlzdGluZyA9IHN0YXRlLmxpc3Rpbmc7XG5cbiAgICBleHBlY3Qoc3RhdGVMaXN0aW5nLml0ZW1zLmxlbmd0aCkudG9FcXVhbCg2KTtcbiAgICBleHBlY3Qoc3RhdGVMaXN0aW5nLnRvdGFsUGFnZXMpLnRvRXF1YWwoMSk7XG4gICAgZXhwZWN0KHN0YXRlTGlzdGluZy50b3RhbEl0ZW1zKS50b0VxdWFsKDYpO1xuICAgIFxuICAgIGNvbnN0IGxpc3RpbmdQYWdlID0gYXBwSW5zdGFuY2UuZmluZCgnTGlzdCcpO1xuICAgIGV4cGVjdChsaXN0aW5nUGFnZS5sZW5ndGgpLnRvRXF1YWwoMSk7XG4gICAgXG59KTtgO1xuXG5jb25zdCBub2NrQ29udGVudCA9IGBjb25zdCBwcm9kdWN0UmVzdWx0ID0gYXdhaXQgcmVxdWVzdChhcHApXG4uZ2V0KCcvYXBpL3Byb2R1Y3RzJylcbi5leHBlY3QoMjAwKVxuLnRoZW4ocmVzID0+IHJlcy5ib2R5KTtcblxubm9jayhiYXNlVXJsKVxuLmdldCgnL2FwaS9wcm9kdWN0cycpXG4ucmVwbHkoMjAwLCBwcm9kdWN0UmVzdWx0LCB7J0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ30pO2A7XG5cbmNvbnN0IGRlbGF5U2NyaXB0ID0gYGV4cG9ydCBmdW5jdGlvbiBkZWxheShmbiwgdGltZW91dCl7XG4gIGNvbnN0IHQgPSB0aW1lb3V0IHx8IGRlZmF1bHRUaW1lb3V0O1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICAgICAgICAgIFxuICAgICAgY29uc3QgcmVzdWx0ID0gZm4oKTtcbiAgICAgIFxuICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH1cblxuICAgIH0sIHQpO1xuICB9KTtcbn1gO1xuXG5jb25zdCBjb250ZW50ID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmXCI+XG4gICAgICAgICAgICBOb2NrICsgU3VwZXJ0ZXN0IHRvIG1vY2t1cCByZXF1ZXN0c1xuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAgICB7bm9ja0NvbnRlbnR9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIE1vdW50IHRoZSBhcHBcbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAge3NjcmlwdH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgVHJpZ2dlciBldmVudHMgKyBEZWxheSB2ZXJpZmljYXRpb25cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAge3RyaWdnZXJFdmVudHN9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIERlbGF5IGZ1bmN0aW9uXG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICAgIHtkZWxheVNjcmlwdH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZiBjb250ZW50XCI+XG4gICAgICAgICAgICA8c3Ryb25nPlRpcHM8L3N0cm9uZz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFdlIGNhbiB0ZXN0IGZlYXR1cmVzIG9mIGFuIGFwcGxpY2F0aW9uIGJ5IHVzaW5nIEplc3QsIEVuenltZSwgTm9jayBhbmQgRGVsYXkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBTdGFja3MgZm9yIHRlc3RpbmcgZmVhdHVyZXNcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Fbnp5bWU8L3N0cm9uZz4gdG8gbW91bnQgdGhlIEFwcCB3aGljaCBlbmFibGUgZnVsbCBsZW5ndGggY3ljbGUgb2YgcmVuZGVyaW5nLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vY2s8L3N0cm9uZz4gdG8gaGphY2sgYWxsIHJlcXVlc3RzIHRvIHNlcnZlcnMgYW5kIHJldHVybnMgc29tZSBtb2NrdXAgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TdXBlcnRlc3Q8L3N0cm9uZz4gdG8gZmVlZCBkYXRhIGZvciBOb2NrLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlN0b3JlPC9zdHJvbmc+IHNob3VsZCBiZSBleHBvcnRlZCBmcm9tIHRoZSBhcHBsaWNhdGlvbiBmb3IgdmVyaWZpY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnNldFRpbWVPdXQ8L3N0cm9uZz4gZm9yIGRlbGF5aW5nIHRvIHZlcmlmeSBVSSB1cGRhdGVkIGFmdGVyIGV2ZXJ5IHRyaWdnZXIuIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZU91dCBuZWVkcyB0byBoYXZlIGEgc3BlY2lhbCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAgXG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvcD4gICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgVGlwcyA9ICgpID0+IChcbiAgICA8Qm94IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XG4pXG5cblRpcHMucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuVGlwcy5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFRpcHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L2NvbXBvbmVudHMvSmVzdC9UZXN0aW5nUmVhY3QvVGlwcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEhlcm8sIFRpdGxlLCBTdWJUaXRsZSwgTmF2QmFyLCBDYXJkLCBDYXJkQ29udGVudCwgU2VjdGlvbiB9IGZyb20gJy4uLy4uL3NoYXJlJztcbmltcG9ydCBTdXBlclRlc3QgZnJvbSAnLi9TdXBlclRlc3QnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG5cbn1cblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuXG59XG5cbmNvbnN0IFRlc3RpbmdBUEkgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdC1wYWdlXCI+XG4gICAgICAgIDxIZXJvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGlzLXZjZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RpbmcgQVBJXG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgU3VwZXJ0ZXN0IGlzIGEgc3Ryb25nIG1vY2tpbmcgbGlicmFyeSBmb3IgdGVzdGluZyByZXF1ZXN0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaXMtcHVsbGVkLXJpZ2h0IGJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkIGlzLW91dGxpbmVkXCIgdG89eycvamVzdC90ZXN0aW5nLXJlYWN0J30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdGluZyBSZWFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L1N1YlRpdGxlPiAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICA8L0hlcm8+XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgICAgPFN1cGVyVGVzdCAvPlxuICAgICAgICA8L1NlY3Rpb24+ICAgXG4gICAgPC9kaXY+IFxuKVxuXG5UZXN0aW5nQVBJLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblRlc3RpbmdBUEkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW5nQVBJO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9jb21wb25lbnRzL0plc3QvVGVzdGluZ0FQSS9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL3NoYXJlJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuXG59XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcblxufVxuXG5jb25zdCBzdXBlclRlc3RTY3JpcHQgPWBpbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi8uLi9hcHAnO1xuXG5yZXF1ZXN0KGFwcClcbiAgICAgICAgLmdldCgndXJsJylcbiAgICAgICAgLnF1ZXJ5KHtcbiAgICAgICAgIC4uLlxuICAgICAgICB9KVxuICAgICAgICAuZXhwZWN0KDIwMClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGV4cGVjdChyZXMuYm9keS5EYXRhLmxlbmd0aCkudG9CZUdyZWF0ZXJUaGFuKDApOyAgICAgICAgIFxuICAgICAgICB9KWA7XG5cbmNvbnN0IGNvbnRlbnQgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLWhhbGZcIj5cbiAgICAgICAgICAgIEluc3RhbGxcbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAgbnBtIGluc3RhbGwgc3VwZXJ0ZXN0IC0tc2F2ZS1kZXZcbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgU2V0dXBcbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgICAge3N1cGVyVGVzdFNjcmlwdH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy1oYWxmIGNvbnRlbnRcIj5cbiAgICAgICAgICAgIEJlbmVmaXRcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIEJlLWFibGUgdG8gdGVzdCByZWFsIHJlcXVlc3RzIGFzIG1hZGUgYnkgY2xpZW50XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIERvIG5vdCBuZWVkIHRvIGhhdmUgYSBzZXBhcmF0ZSBzZXJ2ZXIgZm9yIHRlc3RpbmdcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgQ2FuIGNvb3BlcmF0ZSB3aXRoIHJlYWN0IHRlc3RpbmcgdG8gZmVlZCBkYXRhIGZvciBpdFxuICAgICAgICAgICAgICAgIDwvbGk+ICBcbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICBOb3Rlc1xuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgdG8gcmV0dXJuIGluIGV2ZXJ5IGFzeW5jIGNvZGUgbWFkZSBieSBTdXBlclRlc3Qgc28gSmVzdCB3aWxsIHJ1biBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgTmVlZCBleHBvcnRpbmcgRXhwcmVzcyBBcHBcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD4gICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKTtcblxuY29uc3QgU3VwZXJUZXN0ID0gKCkgPT4gKFxuICAgIDxCb3ggY29udGVudD17Y29udGVudH0gLz5cbilcblxuU3VwZXJUZXN0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblN1cGVyVGVzdC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IFN1cGVyVGVzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvY29tcG9uZW50cy9KZXN0L1Rlc3RpbmdBUEkvU3VwZXJUZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==