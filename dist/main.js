/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Light.ttf */ "./src/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'roboto';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\nbody {\n  margin: 0;\n  font-family: 'roboto';\n}\n\n#header {\n  display: flex;  \n  align-items: center;\n  justify-content: space-between;\n  background-color: #db4c3f;\n  padding: 11px 21px;\n}\n\n#header > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;  \n}\n\n#header > div > svg,\n#header > div > h1 {\n  color: #fff;  \n  margin: 0; \n}\n\n#header > div > svg:hover,\n#header > div > img:hover {\n  cursor: pointer; \n}\n\nimg[src=\"../src/company.png\"] {\n  height: 38px;\n}\n\nimg[src=\"../src/doggo.jpeg\"] {\n  border-radius: 50%;  \n  height: 38px;\n}\n\n#main-body {\n  display: flex;\n  gap: 13vw;\n  padding: 21px 25px 0;\n}\n\n\n/* Task Form Content */\n#taskForm {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  padding: 1em;\n  border-radius: 1em;\n  border: 1px solid #ccc;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 55;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.blur {\n  filter: blur(8px);\n}\n\n\n/* Left Tab Content */\n\n.task-inbox {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n#project-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n#left-body {\n  width: 165px;\n}\n\n#left-body > h3 {\n  padding-bottom: 5px;\n  border-bottom: 1px solid;\n}\n\n#left-body > button {\n  margin-top: 11px;\n}\n\n.projects {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  \n}\n\n.projects > p {\n  margin: 0;\n}\n\n.projects > input {\n  width: 120px;\n}\n\n\n/* Right Tab Content */\n\n#right-body {\n  flex: 1;\n}\n\n#right-body > button {\n  margin-top: 11px;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n\n.task > div {\n  flex: 1;\n}\n\n.task > div > .task-name > h4,\n.task > div > p {\n  margin: 0;\n}\n\n.task > div > p {\n  padding-top: 8px;\n}\n\n.radio-btn {\n  height: 13px;\n  width: 13px;\n  border-radius: 50%;\n  border: 2px solid;\n}\n\n.checked::before {\n  content: \"✔\";\n  position: relative;\n  top: -2px;\n}\n\n.cross-text {\n  text-decoration: line-through;\n}\n/* For strikethpugh texts */\n/* text-decoration: line-through; */\n\n.task-name {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n\n.task-name > h5 {\n  color: red;\n  border: 1px solid red;\n  padding: 3px;\n  margin: 0;\n  cursor: pointer;\n}\n\n.task-name > h4,\n.task > div > p,\n.task > span {\n  cursor: pointer;\n}\n\n.title-nowrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100px;\n  /* min: 83px */\n  /* max: 686px */\n}\n\n.text-nowrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100px;\n  /* min: 175px */\n  /* max: 777px */\n}\n/* set the min and max value for width  */\n/* Refer CSS Functions page on TOP */\n\n.edit-task {\n  display: grid;\n  grid-template-columns: 25px 1fr 100px 30px 30px;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  column-gap: 8px;\n}\n\n.edit-task > span[class='radio-btn'] {\n  grid-column-start: 1;\n  grid-row-start: span 2;\n}\n\n.edit-task > input[type='text'] {\n  grid-column-start: 2;\n  /* grid-column-end: 2; */\n  grid-row-start: 1;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > textarea {\n  grid-column-start: 2;\n  /* grid-column-end: 2; */\n  grid-row-start: 2;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > select {\n  grid-column-start: 3;\n  /* grid-column-end: 2; */\n  grid-row-start: 1;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > input[placeholder='YYYY/MM/DD'] {\n  grid-column-start: 3;\n  /* grid-column-end: 2; */\n  grid-row-start: 2;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > button[value='✔'] {\n  grid-column-start: 4;\n  /* grid-column-end: 2; */\n  grid-row-start: span 2;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > button[value='✖'] {\n  grid-column-start: 5;\n  /* grid-column-end: 2; */\n  grid-row-start: span 2;\n  /* grid-row-end: span 2; */\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,+DAAiD;AACnD;;AAEA;EACE,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,WAAW;EACX,SAAS;AACX;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,oBAAoB;AACtB;;;AAGA,sBAAsB;AACtB;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;;AAGA,qBAAqB;;AAErB;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;;AAEX;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;;AAGA,sBAAsB;;AAEtB;EACE,OAAO;AACT;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,OAAO;AACT;;AAEA;;EAEE,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,6BAA6B;AAC/B;AACA,2BAA2B;AAC3B,mCAAmC;;AAEnC;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,qBAAqB;EACrB,YAAY;EACZ,SAAS;EACT,eAAe;AACjB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;AACA,yCAAyC;AACzC,oCAAoC;;AAEpC;EACE,aAAa;EACb,+CAA+C;EAC/C,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,oBAAoB;EACpB,wBAAwB;EACxB,sBAAsB;EACtB,0BAA0B;AAC5B","sourcesContent":["@font-face {\n  font-family: 'roboto';\n  src: url('./Roboto-Light.ttf') format('truetype');\n}\n\nbody {\n  margin: 0;\n  font-family: 'roboto';\n}\n\n#header {\n  display: flex;  \n  align-items: center;\n  justify-content: space-between;\n  background-color: #db4c3f;\n  padding: 11px 21px;\n}\n\n#header > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;  \n}\n\n#header > div > svg,\n#header > div > h1 {\n  color: #fff;  \n  margin: 0; \n}\n\n#header > div > svg:hover,\n#header > div > img:hover {\n  cursor: pointer; \n}\n\nimg[src=\"../src/company.png\"] {\n  height: 38px;\n}\n\nimg[src=\"../src/doggo.jpeg\"] {\n  border-radius: 50%;  \n  height: 38px;\n}\n\n#main-body {\n  display: flex;\n  gap: 13vw;\n  padding: 21px 25px 0;\n}\n\n\n/* Task Form Content */\n#taskForm {\n  display: flex;\n  flex-direction: column;\n  gap: 11px;\n  padding: 1em;\n  border-radius: 1em;\n  border: 1px solid #ccc;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 55;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.blur {\n  filter: blur(8px);\n}\n\n\n/* Left Tab Content */\n\n.task-inbox {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n#project-list {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n#left-body {\n  width: 165px;\n}\n\n#left-body > h3 {\n  padding-bottom: 5px;\n  border-bottom: 1px solid;\n}\n\n#left-body > button {\n  margin-top: 11px;\n}\n\n.projects {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  \n}\n\n.projects > p {\n  margin: 0;\n}\n\n.projects > input {\n  width: 120px;\n}\n\n\n/* Right Tab Content */\n\n#right-body {\n  flex: 1;\n}\n\n#right-body > button {\n  margin-top: 11px;\n}\n\n.task {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n\n.task > div {\n  flex: 1;\n}\n\n.task > div > .task-name > h4,\n.task > div > p {\n  margin: 0;\n}\n\n.task > div > p {\n  padding-top: 8px;\n}\n\n.radio-btn {\n  height: 13px;\n  width: 13px;\n  border-radius: 50%;\n  border: 2px solid;\n}\n\n.checked::before {\n  content: \"✔\";\n  position: relative;\n  top: -2px;\n}\n\n.cross-text {\n  text-decoration: line-through;\n}\n/* For strikethpugh texts */\n/* text-decoration: line-through; */\n\n.task-name {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n}\n\n.task-name > h5 {\n  color: red;\n  border: 1px solid red;\n  padding: 3px;\n  margin: 0;\n  cursor: pointer;\n}\n\n.task-name > h4,\n.task > div > p,\n.task > span {\n  cursor: pointer;\n}\n\n.title-nowrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100px;\n  /* min: 83px */\n  /* max: 686px */\n}\n\n.text-nowrap {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100px;\n  /* min: 175px */\n  /* max: 777px */\n}\n/* set the min and max value for width  */\n/* Refer CSS Functions page on TOP */\n\n.edit-task {\n  display: grid;\n  grid-template-columns: 25px 1fr 100px 30px 30px;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  column-gap: 8px;\n}\n\n.edit-task > span[class='radio-btn'] {\n  grid-column-start: 1;\n  grid-row-start: span 2;\n}\n\n.edit-task > input[type='text'] {\n  grid-column-start: 2;\n  /* grid-column-end: 2; */\n  grid-row-start: 1;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > textarea {\n  grid-column-start: 2;\n  /* grid-column-end: 2; */\n  grid-row-start: 2;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > select {\n  grid-column-start: 3;\n  /* grid-column-end: 2; */\n  grid-row-start: 1;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > input[placeholder='YYYY/MM/DD'] {\n  grid-column-start: 3;\n  /* grid-column-end: 2; */\n  grid-row-start: 2;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > button[value='✔'] {\n  grid-column-start: 4;\n  /* grid-column-end: 2; */\n  grid-row-start: span 2;\n  /* grid-row-end: span 2; */\n}\n\n.edit-task > button[value='✖'] {\n  grid-column-start: 5;\n  /* grid-column-end: 2; */\n  grid-row-start: span 2;\n  /* grid-row-end: span 2; */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm)
/* harmony export */ });
function createProject(title) {
  const newProject = document.createElement("div");
  const projectTitle = document.createElement("p");
  let removeBtn = document.createElement("button");

  newProject.setAttribute('class', 'projects');
  projectTitle.textContent = title;
  removeBtn.textContent = "✖";
  
  removeBtn.addEventListener('click', (e) => {
    removeProject(e);
  })

  newProject.appendChild(projectTitle);
  newProject.appendChild(removeBtn);
  
  return newProject;
}

function removeProject(event) {
  const unwantedProject = event.target.parentElement;
  const projectContainer = unwantedProject.parentElement;
  
  return projectContainer.removeChild(unwantedProject);
}

function updateProjectDB(database, newProject) {
  return database.appendChild(newProject);
}

function openProjectForm(database) {
  const form = document.createElement("form");
  const inputField = document.createElement("input");
  const closeBtn = document.createElement("button");
  const nodeParent = document.querySelector('#project-list');

  form.setAttribute('action', 'example.com/');
  form.setAttribute('method', 'post');
  form.setAttribute('onsubmit', 'event.preventDefault()');
  form.setAttribute('class', 'projects');
  inputField.setAttribute('type', 'text');
  inputField.setAttribute('placeholder', 'New Project...');
  
  closeBtn.textContent = "✖";
  form.appendChild(inputField);
  form.appendChild(closeBtn);

  closeBtn.addEventListener('click', (e) => {
    removeProject(e);
  })

  inputField.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const newProjectTitle = document.querySelector('input[placeholder="New Project..."]').value;
      const nodeParent = document.querySelector('#project-list');
      nodeParent.appendChild(createProject(newProjectTitle));
      // updateProjectDB(database, newProjectTitle);
    }
  })
  
  return nodeParent.appendChild(form);
}



// Future Work: Only allow 1 form to pop up

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeTaskForm": () => (/* binding */ closeTaskForm),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "formValue": () => (/* binding */ formValue),
/* harmony export */   "openTaskForm": () => (/* binding */ openTaskForm)
/* harmony export */ });
function openTaskForm(toBlur, form) {
  toBlur.setAttribute('class', 'blur');
  form.classList.remove('hidden');
  return;
}

function closeTaskForm(unBlur, form) {
  unBlur.classList.remove('blur');
  form.setAttribute('class', 'hidden');
  return;
}

// Refactor this code to find index based on value then use the key to operate function
function formValue(receivedForm) {
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[1].value;
  const newDate = receivedForm.target[2].value;
  const newPriority = receivedForm.target[3].value;

  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority
  };
}

function updatedFormValue(receivedForm) {
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[2].value;
  const newDate = receivedForm.target[3].value;
  const newPriority = receivedForm.target[1].value;

  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority
  };
}

function valueBeforeEdit(clickedElement) {
  const taskDiv = clickedElement.closest('.task');
  const title = taskDiv.querySelector('.task-name > h4').textContent;
  const text = taskDiv.querySelector('p').textContent;
  const priority = taskDiv.querySelector('.task-name > h5').textContent;
  const date = taskDiv.querySelector('span:last-of-type').textContent;

  return {
    title,
    text,
    priority,
    date
  };
}

function closeUpdateForm(formToClose) {
  formToClose.parentElement.removeChild(formToClose);
  return;
}

function createTask(taskList, receivedFormValue) {
  const taskTitleInput = receivedFormValue.title;
  const taskDescriptionInput = receivedFormValue.text;
  const taskDueDateInput = receivedFormValue.dueDate;
  const taskPriorityInput = receivedFormValue.priority;

  const parentDiv = document.createElement('div');
  parentDiv.setAttribute('class', 'task');

  let radioBtn = document.createElement('span');
  radioBtn.setAttribute('class', 'radio-btn');

  let taskDescription = document.createElement('p');
  taskDescription.textContent = taskDescriptionInput;

  let mainTaskDiv = document.createElement('div');
  let miniTaskDiv = document.createElement('div');
  miniTaskDiv.setAttribute('class', 'task-name');

  let taskTitle = document.createElement('h4');
  taskTitle.textContent = taskTitleInput;

  let taskPriority = document.createElement('h5');
  taskPriority.textContent = taskPriorityInput;

  let dueDate = document.createElement('span');
  dueDate.textContent = taskDueDateInput;

  const edit = document.createElement('button');
  edit.textContent = 'Edit';
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✖';

  miniTaskDiv.append(taskTitle,taskPriority);
  mainTaskDiv.append(miniTaskDiv, taskDescription);
  parentDiv.append(radioBtn, mainTaskDiv, dueDate, edit, closeBtn);
  taskList.appendChild(parentDiv);

  closeBtn.addEventListener('click', (e) => {
    const task2Remove = e.target.parentElement;
    taskList.removeChild(task2Remove);
  });

  radioBtn.addEventListener('click', () => {
    if (parentDiv.classList.contains('cross-text')) {
      parentDiv.classList.remove('cross-text');
      radioBtn.classList.remove('checked');
    } else {
      parentDiv.classList.add('cross-text');
      radioBtn.classList.add('checked');
    }
  })

  // Edit form event
  const canEditForm = [taskTitle, taskDescription, taskPriority, dueDate];
  canEditForm.forEach(item => {
    item.addEventListener('dblclick', (e) => {      
      editTask(parentDiv.parentElement, parentDiv, valueBeforeEdit(e.target));
    })
  });
  edit.addEventListener('click', (e) => {      
    editTask(parentDiv.parentElement, parentDiv, valueBeforeEdit(e.target));
  })
}

function editTask(parentNode, elementToReplace, currentValue) {
  // DOM to create 'edit' form
  const newForm = document.createElement('form');
  newForm.setAttribute('class', 'edit-task');
  newForm.setAttribute('action', 'example.com/');
  newForm.setAttribute('method', 'post');
  const radioBtn = document.createElement('span');
  radioBtn.setAttribute('class', 'radio-btn');
  const newTaskTitle = document.createElement('input');
  newTaskTitle.setAttribute('type', 'text');
  newTaskTitle.setAttribute('id', 'taskTitle');
  newTaskTitle.setAttribute('value', currentValue.title);
  const newPriority = document.createElement('select');
  newPriority.setAttribute('id', 'priority');
  const lowPrio = document.createElement('option');
  lowPrio.textContent = 'Low-Priority';
  const medPrio = document.createElement('option');
  medPrio.textContent = 'Med-Priority';
  const highPrio = document.createElement('option');
  highPrio.textContent = 'High-Priority';
  switch (currentValue.priority) {
    case lowPrio.textContent:
      lowPrio.setAttribute('selected', true);
      break;
    case medPrio.textContent:
      medPrio.setAttribute('selected', true);
      break;
    case highPrio.textContent:
      highPrio.setAttribute('selected', true);
      break;
  }
  const newText = document.createElement('textarea');
  newText.setAttribute('id', 'taskDescription');
  newText.textContent = currentValue.text;
  const newDate = document.createElement('input');
  newDate.setAttribute('placeholder', 'YYYY/MM/DD');
  newDate.setAttribute('pattern', '([12]\\d{3}/(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01]))');
  newDate.setAttribute('id', 'dueDate');
  newDate.setAttribute('value', currentValue.date);

  const confirmBtn = document.createElement('button');
  confirmBtn.setAttribute('value', '✔');
  confirmBtn.setAttribute('type', 'submit');
  confirmBtn.textContent = '✔';
  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute('value', '✖');
  cancelBtn.textContent = '✖';

  newPriority.append(lowPrio, medPrio, highPrio);
  newForm.append(radioBtn, newTaskTitle, newPriority, newText, newDate, confirmBtn, cancelBtn);

  newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const updatedValue = updatedFormValue(e);
    createTask(e.target.parentElement, updatedValue);
    closeUpdateForm(e.target);
  });

  cancelBtn.addEventListener('click', () => {});

  return parentNode.replaceChild(newForm, elementToReplace);
}




// Compulsory (In terms of priority)
// Make "inbox", "Projects" interactive... clicking them list all the related task out
// localStorage function to store todo list


// Optional
// Make task title & description width responsive
// Priority having green, orange, red option
// Only 1 of '+ Project' can be active at a time (No multiple form input allowed)
// Include 'Today' & 'Next 7 Days' to be interactive

/***/ }),

/***/ "./src/Roboto-Light.ttf":
/*!******************************!*\
  !*** ./src/Roboto-Light.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




// https://www.youtube.com/watch?v=8ZKq0r-g87M

// todo-items must have following properties: title, description, duedate, priority
// Event for create task
// Event for edit task
// Event for delete task
// Event to select inbox or project tabs
// Projects should have their own todo list 

let allProject = [];
let allTask = [];

function Project(name) {
  this.name = name;
}

function Task(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;  
}


// index.js; Main interface to other js modules
const projectBtn = document.querySelector('#left-body > button');
projectBtn.addEventListener("click", () => {
  (0,_project__WEBPACK_IMPORTED_MODULE_1__.openProjectForm)();
});


const mainBody = document.querySelector('#main-body');
const taskForm = document.querySelector('#taskForm');
const cancelBtn = document.querySelector('#taskForm > div > button[value="Cancel"]');
const taskList = document.querySelector('#task-list');

const taskBtn = document.querySelector('#right-body > button');
taskBtn.addEventListener("click", () => {
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.openTaskForm)(mainBody, taskForm);
});

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault();
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.closeTaskForm)(mainBody, taskForm);
})

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskList, (0,_task__WEBPACK_IMPORTED_MODULE_2__.formValue)(e));
  taskForm.reset();
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.closeTaskForm)(mainBody, taskForm);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUUwQjs7QUFFMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEVBQUU7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILDhDQUE4Qzs7QUFFOUM7QUFDQTs7QUFFOEQ7OztBQUc5RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6TUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNnQzs7QUFFNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxFQUFFLHlEQUFlO0FBQ2pCLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1EQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSxvREFBYTtBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsaURBQVUsV0FBVyxnREFBUztBQUNoQztBQUNBLEVBQUUsb0RBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3JvYm90byc7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4OyAgXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIHBhZGRpbmc6IDExcHggMjFweDtcXG59XFxuXFxuI2hlYWRlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDsgIFxcbn1cXG5cXG4jaGVhZGVyID4gZGl2ID4gc3ZnLFxcbiNoZWFkZXIgPiBkaXYgPiBoMSB7XFxuICBjb2xvcjogI2ZmZjsgIFxcbiAgbWFyZ2luOiAwOyBcXG59XFxuXFxuI2hlYWRlciA+IGRpdiA+IHN2Zzpob3ZlcixcXG4jaGVhZGVyID4gZGl2ID4gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgXFxufVxcblxcbmltZ1tzcmM9XFxcIi4uL3NyYy9jb21wYW55LnBuZ1xcXCJdIHtcXG4gIGhlaWdodDogMzhweDtcXG59XFxuXFxuaW1nW3NyYz1cXFwiLi4vc3JjL2RvZ2dvLmpwZWdcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7ICBcXG4gIGhlaWdodDogMzhweDtcXG59XFxuXFxuI21haW4tYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxM3Z3O1xcbiAgcGFkZGluZzogMjFweCAyNXB4IDA7XFxufVxcblxcblxcbi8qIFRhc2sgRm9ybSBDb250ZW50ICovXFxuI3Rhc2tGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMXB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA1NTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5ibHVyIHtcXG4gIGZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG5cXG4vKiBMZWZ0IFRhYiBDb250ZW50ICovXFxuXFxuLnRhc2staW5ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogN3B4O1xcbn1cXG5cXG4jbGVmdC1ib2R5IHtcXG4gIHdpZHRoOiAxNjVweDtcXG59XFxuXFxuI2xlZnQtYm9keSA+IGgzIHtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxufVxcblxcbiNsZWZ0LWJvZHkgPiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTFweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMXB4O1xcbiAgXFxufVxcblxcbi5wcm9qZWN0cyA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdHMgPiBpbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcblxcbi8qIFJpZ2h0IFRhYiBDb250ZW50ICovXFxuXFxuI3JpZ2h0LWJvZHkge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI3JpZ2h0LWJvZHkgPiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTFweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDExcHg7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrID4gZGl2ID4gLnRhc2stbmFtZSA+IGg0LFxcbi50YXNrID4gZGl2ID4gcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrID4gZGl2ID4gcCB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5cXG4ucmFkaW8tYnRuIHtcXG4gIGhlaWdodDogMTNweDtcXG4gIHdpZHRoOiAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxufVxcblxcbi5jaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKclFxcXCI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0ycHg7XFxufVxcblxcbi5jcm9zcy10ZXh0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4vKiBGb3Igc3RyaWtldGhwdWdoIHRleHRzICovXFxuLyogdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7ICovXFxuXFxuLnRhc2stbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTFweDtcXG59XFxuXFxuLnRhc2stbmFtZSA+IGg1IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLW5hbWUgPiBoNCxcXG4udGFzayA+IGRpdiA+IHAsXFxuLnRhc2sgPiBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlLW5vd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgLyogbWluOiA4M3B4ICovXFxuICAvKiBtYXg6IDY4NnB4ICovXFxufVxcblxcbi50ZXh0LW5vd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgLyogbWluOiAxNzVweCAqL1xcbiAgLyogbWF4OiA3NzdweCAqL1xcbn1cXG4vKiBzZXQgdGhlIG1pbiBhbmQgbWF4IHZhbHVlIGZvciB3aWR0aCAgKi9cXG4vKiBSZWZlciBDU1MgRnVuY3Rpb25zIHBhZ2Ugb24gVE9QICovXFxuXFxuLmVkaXQtdGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAxMDBweCAzMHB4IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogOHB4O1xcbn1cXG5cXG4uZWRpdC10YXNrID4gc3BhbltjbGFzcz0ncmFkaW8tYnRuJ10ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogc3BhbiAyO1xcbn1cXG5cXG4uZWRpdC10YXNrID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IHRleHRhcmVhIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IHNlbGVjdCB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogMjsgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVxcblxcbi5lZGl0LXRhc2sgPiBpbnB1dFtwbGFjZWhvbGRlcj0nWVlZWS9NTS9ERCddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IGJ1dHRvblt2YWx1ZT0n4pyUJ10ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDI7ICovXFxuICBncmlkLXJvdy1zdGFydDogc3BhbiAyO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVxcblxcbi5lZGl0LXRhc2sgPiBidXR0b25bdmFsdWU9J+KcliddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA1O1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gMjtcXG4gIC8qIGdyaWQtcm93LWVuZDogc3BhbiAyOyAqL1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLCtEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCOzs7QUFHQSxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFHQSxxQkFBcUI7O0FBRXJCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUdBLHNCQUFzQjs7QUFFdEI7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBLDJCQUEyQjtBQUMzQixtQ0FBbUM7O0FBRW5DO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBLHlDQUF5QztBQUN6QyxvQ0FBb0M7O0FBRXBDO0VBQ0UsYUFBYTtFQUNiLCtDQUErQztFQUMvQywyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ3JvYm90byc7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDsgIFxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjM2Y7XFxuICBwYWRkaW5nOiAxMXB4IDIxcHg7XFxufVxcblxcbiNoZWFkZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7ICBcXG59XFxuXFxuI2hlYWRlciA+IGRpdiA+IHN2ZyxcXG4jaGVhZGVyID4gZGl2ID4gaDEge1xcbiAgY29sb3I6ICNmZmY7ICBcXG4gIG1hcmdpbjogMDsgXFxufVxcblxcbiNoZWFkZXIgPiBkaXYgPiBzdmc6aG92ZXIsXFxuI2hlYWRlciA+IGRpdiA+IGltZzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IFxcbn1cXG5cXG5pbWdbc3JjPVxcXCIuLi9zcmMvY29tcGFueS5wbmdcXFwiXSB7XFxuICBoZWlnaHQ6IDM4cHg7XFxufVxcblxcbmltZ1tzcmM9XFxcIi4uL3NyYy9kb2dnby5qcGVnXFxcIl0ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyAgXFxuICBoZWlnaHQ6IDM4cHg7XFxufVxcblxcbiNtYWluLWJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTN2dztcXG4gIHBhZGRpbmc6IDIxcHggMjVweCAwO1xcbn1cXG5cXG5cXG4vKiBUYXNrIEZvcm0gQ29udGVudCAqL1xcbiN0YXNrRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTFweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogNTU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcXG59XFxuXFxuXFxuLyogTGVmdCBUYWIgQ29udGVudCAqL1xcblxcbi50YXNrLWluYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxufVxcblxcbiNwcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDdweDtcXG59XFxuXFxuI2xlZnQtYm9keSB7XFxuICB3aWR0aDogMTY1cHg7XFxufVxcblxcbiNsZWZ0LWJvZHkgPiBoMyB7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbn1cXG5cXG4jbGVmdC1ib2R5ID4gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDExcHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTFweDtcXG4gIFxcbn1cXG5cXG4ucHJvamVjdHMgPiBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3RzID4gaW5wdXQge1xcbiAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG5cXG4vKiBSaWdodCBUYWIgQ29udGVudCAqL1xcblxcbiNyaWdodC1ib2R5IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbiNyaWdodC1ib2R5ID4gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDExcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMXB4O1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4udGFzayA+IGRpdiA+IC50YXNrLW5hbWUgPiBoNCxcXG4udGFzayA+IGRpdiA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzayA+IGRpdiA+IHAge1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuXFxuLnJhZGlvLWJ0biB7XFxuICBoZWlnaHQ6IDEzcHg7XFxuICB3aWR0aDogMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xcbn1cXG5cXG4uY2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJRcXFwiO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMnB4O1xcbn1cXG5cXG4uY3Jvc3MtdGV4dCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLyogRm9yIHN0cmlrZXRocHVnaCB0ZXh0cyAqL1xcbi8qIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyAqL1xcblxcbi50YXNrLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDExcHg7XFxufVxcblxcbi50YXNrLW5hbWUgPiBoNSB7XFxuICBjb2xvcjogcmVkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1uYW1lID4gaDQsXFxuLnRhc2sgPiBkaXYgPiBwLFxcbi50YXNrID4gc3BhbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aXRsZS1ub3dyYXAge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdpZHRoOiAxMDBweDtcXG4gIC8qIG1pbjogODNweCAqL1xcbiAgLyogbWF4OiA2ODZweCAqL1xcbn1cXG5cXG4udGV4dC1ub3dyYXAge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdpZHRoOiAxMDBweDtcXG4gIC8qIG1pbjogMTc1cHggKi9cXG4gIC8qIG1heDogNzc3cHggKi9cXG59XFxuLyogc2V0IHRoZSBtaW4gYW5kIG1heCB2YWx1ZSBmb3Igd2lkdGggICovXFxuLyogUmVmZXIgQ1NTIEZ1bmN0aW9ucyBwYWdlIG9uIFRPUCAqL1xcblxcbi5lZGl0LXRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCAxZnIgMTAwcHggMzBweCAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbHVtbi1nYXA6IDhweDtcXG59XFxuXFxuLmVkaXQtdGFzayA+IHNwYW5bY2xhc3M9J3JhZGlvLWJ0biddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gMjtcXG59XFxuXFxuLmVkaXQtdGFzayA+IGlucHV0W3R5cGU9J3RleHQnXSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogMjsgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVxcblxcbi5lZGl0LXRhc2sgPiB0ZXh0YXJlYSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogMjsgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVxcblxcbi5lZGl0LXRhc2sgPiBzZWxlY3Qge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDI7ICovXFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIC8qIGdyaWQtcm93LWVuZDogc3BhbiAyOyAqL1xcbn1cXG5cXG4uZWRpdC10YXNrID4gaW5wdXRbcGxhY2Vob2xkZXI9J1lZWVkvTU0vREQnXSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogMjsgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVxcblxcbi5lZGl0LXRhc2sgPiBidXR0b25bdmFsdWU9J+KclCddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gMjtcXG4gIC8qIGdyaWQtcm93LWVuZDogc3BhbiAyOyAqL1xcbn1cXG5cXG4uZWRpdC10YXNrID4gYnV0dG9uW3ZhbHVlPSfinJYnXSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNTtcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogMjsgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiBzcGFuIDI7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMnKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwi4pyWXCI7XG4gIFxuICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlbW92ZVByb2plY3QoZSk7XG4gIH0pXG5cbiAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gIFxuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChldmVudCkge1xuICBjb25zdCB1bndhbnRlZFByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHVud2FudGVkUHJvamVjdC5wYXJlbnRFbGVtZW50O1xuICBcbiAgcmV0dXJuIHByb2plY3RDb250YWluZXIucmVtb3ZlQ2hpbGQodW53YW50ZWRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdERCKGRhdGFiYXNlLCBuZXdQcm9qZWN0KSB7XG4gIHJldHVybiBkYXRhYmFzZS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3RGb3JtKGRhdGFiYXNlKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBub2RlUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuXG4gIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnZXhhbXBsZS5jb20vJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAnZXZlbnQucHJldmVudERlZmF1bHQoKScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMnKTtcbiAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QuLi4nKTtcbiAgXG4gIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCLinJZcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlbW92ZVByb2plY3QoZSk7XG4gIH0pXG5cbiAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtwbGFjZWhvbGRlcj1cIk5ldyBQcm9qZWN0Li4uXCJdJykudmFsdWU7XG4gICAgICBjb25zdCBub2RlUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgICAgbm9kZVBhcmVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSkpO1xuICAgICAgLy8gdXBkYXRlUHJvamVjdERCKGRhdGFiYXNlLCBuZXdQcm9qZWN0VGl0bGUpO1xuICAgIH1cbiAgfSlcbiAgXG4gIHJldHVybiBub2RlUGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG5leHBvcnQgeyBvcGVuUHJvamVjdEZvcm0gfVxuXG4vLyBGdXR1cmUgV29yazogT25seSBhbGxvdyAxIGZvcm0gdG8gcG9wIHVwIiwiZnVuY3Rpb24gb3BlblRhc2tGb3JtKHRvQmx1ciwgZm9ybSkge1xuICB0b0JsdXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdibHVyJyk7XG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSh1bkJsdXIsIGZvcm0pIHtcbiAgdW5CbHVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hpZGRlbicpO1xuICByZXR1cm47XG59XG5cbi8vIFJlZmFjdG9yIHRoaXMgY29kZSB0byBmaW5kIGluZGV4IGJhc2VkIG9uIHZhbHVlIHRoZW4gdXNlIHRoZSBrZXkgdG8gb3BlcmF0ZSBmdW5jdGlvblxuZnVuY3Rpb24gZm9ybVZhbHVlKHJlY2VpdmVkRm9ybSkge1xuICBjb25zdCBuZXdUaXRsZSA9IHJlY2VpdmVkRm9ybS50YXJnZXRbMF0udmFsdWU7XG4gIGNvbnN0IG5ld1RleHQgPSByZWNlaXZlZEZvcm0udGFyZ2V0WzFdLnZhbHVlO1xuICBjb25zdCBuZXdEYXRlID0gcmVjZWl2ZWRGb3JtLnRhcmdldFsyXS52YWx1ZTtcbiAgY29uc3QgbmV3UHJpb3JpdHkgPSByZWNlaXZlZEZvcm0udGFyZ2V0WzNdLnZhbHVlO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IG5ld1RpdGxlLFxuICAgIHRleHQ6IG5ld1RleHQsXG4gICAgZHVlRGF0ZTogbmV3RGF0ZSxcbiAgICBwcmlvcml0eTogbmV3UHJpb3JpdHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlZEZvcm1WYWx1ZShyZWNlaXZlZEZvcm0pIHtcbiAgY29uc3QgbmV3VGl0bGUgPSByZWNlaXZlZEZvcm0udGFyZ2V0WzBdLnZhbHVlO1xuICBjb25zdCBuZXdUZXh0ID0gcmVjZWl2ZWRGb3JtLnRhcmdldFsyXS52YWx1ZTtcbiAgY29uc3QgbmV3RGF0ZSA9IHJlY2VpdmVkRm9ybS50YXJnZXRbM10udmFsdWU7XG4gIGNvbnN0IG5ld1ByaW9yaXR5ID0gcmVjZWl2ZWRGb3JtLnRhcmdldFsxXS52YWx1ZTtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlOiBuZXdUaXRsZSxcbiAgICB0ZXh0OiBuZXdUZXh0LFxuICAgIGR1ZURhdGU6IG5ld0RhdGUsXG4gICAgcHJpb3JpdHk6IG5ld1ByaW9yaXR5XG4gIH07XG59XG5cbmZ1bmN0aW9uIHZhbHVlQmVmb3JlRWRpdChjbGlja2VkRWxlbWVudCkge1xuICBjb25zdCB0YXNrRGl2ID0gY2xpY2tlZEVsZW1lbnQuY2xvc2VzdCgnLnRhc2snKTtcbiAgY29uc3QgdGl0bGUgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUgPiBoNCcpLnRleHRDb250ZW50O1xuICBjb25zdCB0ZXh0ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lID4gaDUnKS50ZXh0Q29udGVudDtcbiAgY29uc3QgZGF0ZSA9IHRhc2tEaXYucXVlcnlTZWxlY3Rvcignc3BhbjpsYXN0LW9mLXR5cGUnKS50ZXh0Q29udGVudDtcblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRleHQsXG4gICAgcHJpb3JpdHksXG4gICAgZGF0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjbG9zZVVwZGF0ZUZvcm0oZm9ybVRvQ2xvc2UpIHtcbiAgZm9ybVRvQ2xvc2UucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtVG9DbG9zZSk7XG4gIHJldHVybjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrTGlzdCwgcmVjZWl2ZWRGb3JtVmFsdWUpIHtcbiAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSByZWNlaXZlZEZvcm1WYWx1ZS50aXRsZTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSByZWNlaXZlZEZvcm1WYWx1ZS50ZXh0O1xuICBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gcmVjZWl2ZWRGb3JtVmFsdWUuZHVlRGF0ZTtcbiAgY29uc3QgdGFza1ByaW9yaXR5SW5wdXQgPSByZWNlaXZlZEZvcm1WYWx1ZS5wcmlvcml0eTtcblxuICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFyZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzaycpO1xuXG4gIGxldCByYWRpb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYWRpby1idG4nKTtcblxuICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25JbnB1dDtcblxuICBsZXQgbWFpblRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IG1pbmlUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pbmlUYXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZUlucHV0O1xuXG4gIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrUHJpb3JpdHlJbnB1dDtcblxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEdWVEYXRlSW5wdXQ7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICfinJYnO1xuXG4gIG1pbmlUYXNrRGl2LmFwcGVuZCh0YXNrVGl0bGUsdGFza1ByaW9yaXR5KTtcbiAgbWFpblRhc2tEaXYuYXBwZW5kKG1pbmlUYXNrRGl2LCB0YXNrRGVzY3JpcHRpb24pO1xuICBwYXJlbnREaXYuYXBwZW5kKHJhZGlvQnRuLCBtYWluVGFza0RpdiwgZHVlRGF0ZSwgZWRpdCwgY2xvc2VCdG4pO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZChwYXJlbnREaXYpO1xuXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXNrMlJlbW92ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFzazJSZW1vdmUpO1xuICB9KTtcblxuICByYWRpb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGFyZW50RGl2LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MtdGV4dCcpKSB7XG4gICAgICBwYXJlbnREaXYuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3MtdGV4dCcpO1xuICAgICAgcmFkaW9CdG4uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnREaXYuY2xhc3NMaXN0LmFkZCgnY3Jvc3MtdGV4dCcpO1xuICAgICAgcmFkaW9CdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfSlcblxuICAvLyBFZGl0IGZvcm0gZXZlbnRcbiAgY29uc3QgY2FuRWRpdEZvcm0gPSBbdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tQcmlvcml0eSwgZHVlRGF0ZV07XG4gIGNhbkVkaXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7ICAgICAgXG4gICAgICBlZGl0VGFzayhwYXJlbnREaXYucGFyZW50RWxlbWVudCwgcGFyZW50RGl2LCB2YWx1ZUJlZm9yZUVkaXQoZS50YXJnZXQpKTtcbiAgICB9KVxuICB9KTtcbiAgZWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7ICAgICAgXG4gICAgZWRpdFRhc2socGFyZW50RGl2LnBhcmVudEVsZW1lbnQsIHBhcmVudERpdiwgdmFsdWVCZWZvcmVFZGl0KGUudGFyZ2V0KSk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKHBhcmVudE5vZGUsIGVsZW1lbnRUb1JlcGxhY2UsIGN1cnJlbnRWYWx1ZSkge1xuICAvLyBET00gdG8gY3JlYXRlICdlZGl0JyBmb3JtXG4gIGNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG5ld0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LXRhc2snKTtcbiAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdleGFtcGxlLmNvbS8nKTtcbiAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gIGNvbnN0IHJhZGlvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICByYWRpb0J0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JhZGlvLWJ0bicpO1xuICBjb25zdCBuZXdUYXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdUYXNrVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmV3VGFza1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza1RpdGxlJyk7XG4gIG5ld1Rhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VycmVudFZhbHVlLnRpdGxlKTtcbiAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgbmV3UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBjb25zdCBsb3dQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGxvd1ByaW8udGV4dENvbnRlbnQgPSAnTG93LVByaW9yaXR5JztcbiAgY29uc3QgbWVkUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBtZWRQcmlvLnRleHRDb250ZW50ID0gJ01lZC1Qcmlvcml0eSc7XG4gIGNvbnN0IGhpZ2hQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGhpZ2hQcmlvLnRleHRDb250ZW50ID0gJ0hpZ2gtUHJpb3JpdHknO1xuICBzd2l0Y2ggKGN1cnJlbnRWYWx1ZS5wcmlvcml0eSkge1xuICAgIGNhc2UgbG93UHJpby50ZXh0Q29udGVudDpcbiAgICAgIGxvd1ByaW8uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBtZWRQcmlvLnRleHRDb250ZW50OlxuICAgICAgbWVkUHJpby5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGhpZ2hQcmlvLnRleHRDb250ZW50OlxuICAgICAgaGlnaFByaW8uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgY29uc3QgbmV3VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIG5ld1RleHQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrRGVzY3JpcHRpb24nKTtcbiAgbmV3VGV4dC50ZXh0Q29udGVudCA9IGN1cnJlbnRWYWx1ZS50ZXh0O1xuICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmV3RGF0ZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lZWVkvTU0vREQnKTtcbiAgbmV3RGF0ZS5zZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nLCAnKFsxMl1cXFxcZHszfS8oMFsxLTldfDFbMC0yXSkvKDBbMS05XXxbMTJdXFxcXGR8M1swMV0pKScpO1xuICBuZXdEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICBuZXdEYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50VmFsdWUuZGF0ZSk7XG5cbiAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAn4pyUJyk7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ+KclCc7XG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICfinJYnKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ+Kclic7XG5cbiAgbmV3UHJpb3JpdHkuYXBwZW5kKGxvd1ByaW8sIG1lZFByaW8sIGhpZ2hQcmlvKTtcbiAgbmV3Rm9ybS5hcHBlbmQocmFkaW9CdG4sIG5ld1Rhc2tUaXRsZSwgbmV3UHJpb3JpdHksIG5ld1RleHQsIG5ld0RhdGUsIGNvbmZpcm1CdG4sIGNhbmNlbEJ0bik7XG5cbiAgbmV3Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cGRhdGVkVmFsdWUgPSB1cGRhdGVkRm9ybVZhbHVlKGUpO1xuICAgIGNyZWF0ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudCwgdXBkYXRlZFZhbHVlKTtcbiAgICBjbG9zZVVwZGF0ZUZvcm0oZS50YXJnZXQpO1xuICB9KTtcblxuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG5cbiAgcmV0dXJuIHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0Zvcm0sIGVsZW1lbnRUb1JlcGxhY2UpO1xufVxuXG5leHBvcnQgeyBvcGVuVGFza0Zvcm0sIGNsb3NlVGFza0Zvcm0sIGNyZWF0ZVRhc2ssIGZvcm1WYWx1ZSB9O1xuXG5cbi8vIENvbXB1bHNvcnkgKEluIHRlcm1zIG9mIHByaW9yaXR5KVxuLy8gTWFrZSBcImluYm94XCIsIFwiUHJvamVjdHNcIiBpbnRlcmFjdGl2ZS4uLiBjbGlja2luZyB0aGVtIGxpc3QgYWxsIHRoZSByZWxhdGVkIHRhc2sgb3V0XG4vLyBsb2NhbFN0b3JhZ2UgZnVuY3Rpb24gdG8gc3RvcmUgdG9kbyBsaXN0XG5cblxuLy8gT3B0aW9uYWxcbi8vIE1ha2UgdGFzayB0aXRsZSAmIGRlc2NyaXB0aW9uIHdpZHRoIHJlc3BvbnNpdmVcbi8vIFByaW9yaXR5IGhhdmluZyBncmVlbiwgb3JhbmdlLCByZWQgb3B0aW9uXG4vLyBPbmx5IDEgb2YgJysgUHJvamVjdCcgY2FuIGJlIGFjdGl2ZSBhdCBhIHRpbWUgKE5vIG11bHRpcGxlIGZvcm0gaW5wdXQgYWxsb3dlZClcbi8vIEluY2x1ZGUgJ1RvZGF5JyAmICdOZXh0IDcgRGF5cycgdG8gYmUgaW50ZXJhY3RpdmUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBvcGVuUHJvamVjdEZvcm0gfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgb3BlblRhc2tGb3JtLCBjbG9zZVRhc2tGb3JtLCBjcmVhdGVUYXNrLCBmb3JtVmFsdWUgfSBmcm9tICcuL3Rhc2snO1xuXG4vLyBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PThaS3Ewci1nODdNXG5cbi8vIHRvZG8taXRlbXMgbXVzdCBoYXZlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOiB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5XG4vLyBFdmVudCBmb3IgY3JlYXRlIHRhc2tcbi8vIEV2ZW50IGZvciBlZGl0IHRhc2tcbi8vIEV2ZW50IGZvciBkZWxldGUgdGFza1xuLy8gRXZlbnQgdG8gc2VsZWN0IGluYm94IG9yIHByb2plY3QgdGFic1xuLy8gUHJvamVjdHMgc2hvdWxkIGhhdmUgdGhlaXIgb3duIHRvZG8gbGlzdCBcblxubGV0IGFsbFByb2plY3QgPSBbXTtcbmxldCBhbGxUYXNrID0gW107XG5cbmZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xufVxuXG5mdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTsgIFxufVxuXG5cbi8vIGluZGV4LmpzOyBNYWluIGludGVyZmFjZSB0byBvdGhlciBqcyBtb2R1bGVzXG5jb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xlZnQtYm9keSA+IGJ1dHRvbicpO1xucHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuUHJvamVjdEZvcm0oKTtcbn0pO1xuXG5cbmNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tYm9keScpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Zvcm0nKTtcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybSA+IGRpdiA+IGJ1dHRvblt2YWx1ZT1cIkNhbmNlbFwiXScpO1xuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG5cbmNvbnN0IHRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQtYm9keSA+IGJ1dHRvbicpO1xudGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBvcGVuVGFza0Zvcm0obWFpbkJvZHksIHRhc2tGb3JtKTtcbn0pO1xuXG5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNsb3NlVGFza0Zvcm0obWFpbkJvZHksIHRhc2tGb3JtKTtcbn0pXG5cbnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlVGFzayh0YXNrTGlzdCwgZm9ybVZhbHVlKGUpKTtcbiAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgY2xvc2VUYXNrRm9ybShtYWluQm9keSwgdGFza0Zvcm0pO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9