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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectTask": () => (/* binding */ displayProjectTask)
/* harmony export */ });
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
  // console.log(e);

  e.preventDefault();
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskList, (0,_task__WEBPACK_IMPORTED_MODULE_2__.formValue)(e));
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.updateTaskNum)();
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.updateTaskDB)((0,_task__WEBPACK_IMPORTED_MODULE_2__.formValue)(e));
  taskForm.reset();
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.closeTaskForm)(mainBody, taskForm);
})

// When no tasks or projects on localStorage, make sure no crash
// storage.js... Update storage content here
const projectObj = JSON.parse(localStorage.projects);
const projectList = document.querySelector('#project-list');

Object.keys(projectObj).forEach(key => {
  projectList.appendChild((0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectObj[key]));
})

const taskObj = JSON.parse(localStorage.tasks);
Object.keys(taskObj).forEach(key => {
  (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskList, taskObj[key]);
})

// Method to display all task (inbox) on page
function displayInboxTask() {
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  const allTask = JSON.parse(localStorage.getItem('tasks'));
  Object.keys(allTask).forEach((key) => {
    (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskList, allTask[key]);
  });  
};

// Add this event to Inbox
const inbox = document.querySelector('#inbox');
inbox.addEventListener('click', () => {
  // console.log();
  displayInboxTask();
});

// Method to display project task on page
function displayProjectTask(event) {
  const selectedProject = event.target.textContent;
  const heading = document.querySelector('#right-body > h2');
  heading.textContent = selectedProject;
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  const storedObj = JSON.parse(localStorage.getItem('tasks'));
  Object.keys(storedObj).forEach((key) => {
    if (storedObj[key].project === selectedProject) {
      (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskList, storedObj[key])
    }
  })
};




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "openProjectForm": () => (/* binding */ openProjectForm)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function createProject(title) {
  const newProject = document.createElement("div");
  const projectTitle = document.createElement("p");
  let removeBtn = document.createElement("button");

  newProject.setAttribute('class', 'projects');
  projectTitle.textContent = title;
  removeBtn.textContent = "✖";
  
  projectTitle.addEventListener('click', (e) => {
    // console.log(e);
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.displayProjectTask)(e);
  });

  removeBtn.addEventListener('click', (e) => {
    removeProject(e);
    removeProjectDB(e);
  });

  newProject.appendChild(projectTitle);
  newProject.appendChild(removeBtn);
  
  return newProject;
}

function removeProject(event) {
  // console.log(event);
  // const title = event.target.previousSibling.textContent;
  // const dropDown = document.querySelector('#project');
  // const unwantedDOM = dropDown.querySelector(`option[value=${title}]`); 
  // console.log(unwantedDOM);

  const unwantedProject = event.target.parentElement;
  const projectContainer = unwantedProject.parentElement;
  projectContainer.removeChild(unwantedProject);

  return;
}

function updateProjectNum() {
  if (localStorage.getItem('projNum') == null) {
    localStorage.setItem('projNum', '1');
  } else {
    let projectNum = parseInt(localStorage.getItem('projNum'));
    projectNum += 1;
    localStorage.setItem('projNum', projectNum);
  }
} 

function updateProjectDB(newProject) {
  let projectNum = localStorage.getItem('projNum');
  let currentProjectList = JSON.parse(localStorage.getItem('projects'));
  if (currentProjectList == null) { 
    let projectObj = {};
    projectObj[projectNum] = newProject;
    localStorage.setItem('projects', JSON.stringify(projectObj));
  } else {
    currentProjectList[projectNum] = newProject;
    localStorage.setItem('projects', JSON.stringify(currentProjectList));
  }
}

function removeProjectDB(event) {
  // console.log(event);
  const project2Remove = event.target.previousElementSibling.innerText;
  // console.log(project2Remove);
  let currentProjectList = JSON.parse(localStorage.getItem('projects'));
  // console.log(currentProjectList);
  const objIndex2Remove = Object.keys(currentProjectList).find(key => currentProjectList[key] === project2Remove);
  // console.log(test);
  delete(currentProjectList[objIndex2Remove]);
  // console.log(currentProjectList);
  localStorage.setItem('projects', JSON.stringify(currentProjectList));
}

function openProjectForm() {
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
      updateProjectNum();
      updateProjectDB(newProjectTitle);
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
/* harmony export */   "openTaskForm": () => (/* binding */ openTaskForm),
/* harmony export */   "updateTaskDB": () => (/* binding */ updateTaskDB),
/* harmony export */   "updateTaskNum": () => (/* binding */ updateTaskNum)
/* harmony export */ });
function openTaskForm(toBlur, form) {
  toBlur.setAttribute('class', 'blur');
  form.classList.remove('hidden');
  taskFormProjectList();
  return;
}

function closeTaskForm(unBlur, form) {
  unBlur.classList.remove('blur');
  form.setAttribute('class', 'hidden');
  return;
}

function taskFormProjectList() {
  // const taskForm = document.querySelector('#taskForm');
  const dropDown = document.querySelector('#project');
  const currentProject = JSON.parse(localStorage.getItem('projects'));
  const DOMProjects = document.querySelectorAll('#project > option');
  
  let domArray = [];
  Array.from(DOMProjects).forEach((item) => {
    domArray.push(item.value);
  });

  // const dropDown = document.querySelector('#project');
  let storageArray = [];
  Object.keys(currentProject).forEach((key) => {
    storageArray.push(currentProject[key]);
    if (!domArray.includes(currentProject[key])) {
      let option = document.createElement('option');
      option.textContent = currentProject[key];
      option.setAttribute('value', currentProject[key]);
      dropDown.appendChild(option);
    };
  });

  // const document.querySelectorAll('#project > option');
  domArray.forEach((item) => {
    if (!storageArray.includes(item)) {
      let elementWithItem;
      // Method to find element to remove...
      for (let i = 0; i < DOMProjects.length; i++) {
        // const element = array[i];
        if (DOMProjects[i].value === item) {
          elementWithItem = DOMProjects[i];
        }
      }
      dropDown.removeChild(elementWithItem);
    }
  });

  // Avoid creating project list when there's no project
  // if (localStorage.projects == null) {
  //   return;
  // }
}

// Refactor this code to find index based on value then use the key to operate function
function formValue(receivedForm) {
  // console.log(receivedForm);
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[1].value;
  const newDate = receivedForm.target[2].value;
  const newPriority = receivedForm.target[3].value;
  const newProject = receivedForm.target[4].value;

  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority,
    project: newProject
  };
}

function updatedFormValue(receivedForm) {
  // console.log(receivedForm);
  const newTitle = receivedForm.target[0].value;
  const newText = receivedForm.target[2].value;
  const newDate = receivedForm.target[3].value;
  const newPriority = receivedForm.target[1].value;
  const newProject = receivedForm.target[6].value;


  return {
    title: newTitle,
    text: newText,
    dueDate: newDate,
    priority: newPriority,
    project: newProject
  };
}

function valueBeforeEdit(clickedElement) {
  const taskDiv = clickedElement.closest('.task');
  const title = taskDiv.querySelector('.task-name > h4').textContent;
  const text = taskDiv.querySelector('p').textContent;
  const priority = taskDiv.querySelector('.task-name > h5').textContent;
  const date = taskDiv.querySelector('span:last-of-type').textContent;
  // console.log(clickedElement);
  const project = taskDiv.querySelector('input[type="hidden"]').value;

  return {
    title,
    text,
    priority,
    date, 
    project
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
  const taskProjectInput = receivedFormValue.project;

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

  const taskProject = document.createElement('input');
  taskProject.setAttribute('type', 'hidden');
  taskProject.setAttribute('value', taskProjectInput);


  miniTaskDiv.append(taskTitle,taskPriority);
  mainTaskDiv.append(miniTaskDiv, taskDescription);
  parentDiv.append(radioBtn, mainTaskDiv, dueDate, edit, closeBtn, taskProject);
  taskList.appendChild(parentDiv);

  closeBtn.addEventListener('click', (e) => {
    const task2Remove = e.target.parentElement;
    taskList.removeChild(task2Remove);
    removeTaskDB(e);
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

function projectListEditForm(newProjectSelectElement, selectedProject) {
  const availbleProject = JSON.parse(localStorage.getItem('projects'));
  Object.keys(availbleProject).forEach((key) => {
    const newOption = document.createElement('option');
    newOption.textContent = availbleProject[key];
    newProjectSelectElement.appendChild(newOption);
  });

  // document.querySelectorAll('.edit-task > select:nth-last-child(1) > option');

  const optionDOM = newProjectSelectElement.querySelectorAll('option');
  // console.log(optionDOM);
  optionDOM.forEach((option) => {
    // console.log(option.innerText);
    // console.log(selectedProject);
    if (option.innerText === selectedProject) {
      option.setAttribute('selected', true);
    }
  }); 
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

  const newProject = document.createElement('select');
  projectListEditForm(newProject, currentValue.project);
  newProject.setAttribute('id', 'project');

  newPriority.append(lowPrio, medPrio, highPrio);
  newForm.append(radioBtn, newTaskTitle, newPriority, newText, newDate, confirmBtn, cancelBtn, newProject);

  newForm.addEventListener('submit', (e) => {
    // console.log(e);
    e.preventDefault();
    editTaskDB(e, currentValue);
    const updatedValue = updatedFormValue(e);
    createTask(e.target.parentElement, updatedValue);
    closeUpdateForm(e.target);
  });

  cancelBtn.addEventListener('click', () => {});

  return parentNode.replaceChild(newForm, elementToReplace);
}

function updateTaskNum() {
  if (localStorage.getItem('taskNum') == null) {
    localStorage.setItem('taskNum', '1');
  } else {
    let taskNum = parseInt(localStorage.getItem('taskNum'));
    taskNum += 1;
    localStorage.setItem('taskNum', taskNum);
  }
} 

function updateTaskDB(newTask) {
  let taskNum = localStorage.getItem('taskNum');
  let currentTaskList = JSON.parse(localStorage.getItem('tasks'));
  if (currentTaskList == null) { 
    let taskObj = {};
    taskObj[taskNum] = newTask;
    localStorage.setItem('tasks', JSON.stringify(taskObj));
  } else {
    currentTaskList[taskNum] = newTask;
    localStorage.setItem('tasks', JSON.stringify(currentTaskList));
  }
}

function removeTaskDB(event) {
  // console.log(event);
  const task2Remove = event.target.parentElement.querySelector('.task-name > h4').textContent;
  let currentTaskList = JSON.parse(localStorage.getItem('tasks'));
  const objIndex2Remove = Object.keys(currentTaskList).find(key => currentTaskList[key].title === task2Remove);
  // console.log(objIndex2Remove);
  delete(currentTaskList[objIndex2Remove]);
  localStorage.setItem('tasks', JSON.stringify(currentTaskList));
}

function editTaskDB(event, valueBeforeEdit) {
  // console.log(event);
  const newTitle = event.target.querySelector('#taskTitle').value;
  const newText = event.target.querySelector('#taskDescription').value;
  const newDate = event.target.querySelector('#dueDate').value;
  const newPriority = event.target.querySelector('#priority').value;
  const newProject = event.target.querySelector('#project').value;
  let currentTaskList = JSON.parse(localStorage.getItem('tasks'));
  const objIndex2Remove = Object.keys(currentTaskList).find(key => currentTaskList[key].title === valueBeforeEdit.title);

  currentTaskList[objIndex2Remove].title = newTitle;
  currentTaskList[objIndex2Remove].text = newText;
  currentTaskList[objIndex2Remove].dueDate = newDate;
  currentTaskList[objIndex2Remove].priority = newPriority;
  currentTaskList[objIndex2Remove].project = newProject;

  localStorage.setItem('tasks', JSON.stringify(currentTaskList));
}




// Compulsory (In terms of priority)
// Click inbox - List all task
// Click specific project - Only list related task

// Optional
// Make task title & description width expand/responsive
// Priority having green, orange, red option
// Include 'Today' & 'Next 7 Days' to be interactive

// Bugs to fix
// Only 1 of '+ Project' can be active at a time (No multiple form input allowed)
// Completed task should remained checked after done edit
// Order of task should remained upon editing
// Prevent web crashing when theres no localStorage
// 

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlIQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsMEJBQTBCLDRFQUE0RSxHQUFHLFVBQVUsY0FBYywwQkFBMEIsR0FBRyxhQUFhLG9CQUFvQix3QkFBd0IsbUNBQW1DLDhCQUE4Qix1QkFBdUIsR0FBRyxtQkFBbUIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsR0FBRyw4Q0FBOEMsa0JBQWtCLGVBQWUsR0FBRywyREFBMkQscUJBQXFCLEdBQUcscUNBQXFDLGlCQUFpQixHQUFHLG9DQUFvQyx5QkFBeUIsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQixjQUFjLHlCQUF5QixHQUFHLDBDQUEwQyxrQkFBa0IsMkJBQTJCLGNBQWMsaUJBQWlCLHVCQUF1QiwyQkFBMkIsb0JBQW9CLGFBQWEsY0FBYyxxQ0FBcUMsZ0JBQWdCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLDZDQUE2QyxrQkFBa0Isd0JBQXdCLGFBQWEsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQix3QkFBd0IsNkJBQTZCLEdBQUcseUJBQXlCLHFCQUFxQixHQUFHLGVBQWUsa0JBQWtCLHdCQUF3QixjQUFjLE9BQU8sbUJBQW1CLGNBQWMsR0FBRyx1QkFBdUIsaUJBQWlCLEdBQUcsOENBQThDLFlBQVksR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsV0FBVyxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxpQkFBaUIsWUFBWSxHQUFHLHFEQUFxRCxjQUFjLEdBQUcscUJBQXFCLHFCQUFxQixHQUFHLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixzQkFBc0IsR0FBRyxzQkFBc0IsbUJBQW1CLHVCQUF1QixjQUFjLEdBQUcsaUJBQWlCLGtDQUFrQyxHQUFHLGtFQUFrRSxrQkFBa0Isa0JBQWtCLHdCQUF3QixjQUFjLEdBQUcscUJBQXFCLGVBQWUsMEJBQTBCLGlCQUFpQixjQUFjLG9CQUFvQixHQUFHLHNEQUFzRCxvQkFBb0IsR0FBRyxtQkFBbUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLDBDQUEwQyxrQkFBa0Isd0JBQXdCLHFCQUFxQiw0QkFBNEIsaUJBQWlCLDJDQUEyQyxtR0FBbUcsa0JBQWtCLG9EQUFvRCxnQ0FBZ0Msd0JBQXdCLG9CQUFvQixHQUFHLDBDQUEwQyx5QkFBeUIsMkJBQTJCLEdBQUcscUNBQXFDLHlCQUF5QiwyQkFBMkIsd0JBQXdCLDZCQUE2QixLQUFLLDJCQUEyQix5QkFBeUIsMkJBQTJCLHdCQUF3Qiw2QkFBNkIsS0FBSyx5QkFBeUIseUJBQXlCLDJCQUEyQix3QkFBd0IsNkJBQTZCLEtBQUssa0RBQWtELHlCQUF5QiwyQkFBMkIsd0JBQXdCLDZCQUE2QixLQUFLLG9DQUFvQyx5QkFBeUIsMkJBQTJCLDZCQUE2Qiw2QkFBNkIsS0FBSyxvQ0FBb0MseUJBQXlCLDJCQUEyQiw2QkFBNkIsNkJBQTZCLEtBQUssT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLFlBQVksY0FBYyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLHNDQUFzQywwQkFBMEIsc0RBQXNELEdBQUcsVUFBVSxjQUFjLDBCQUEwQixHQUFHLGFBQWEsb0JBQW9CLHdCQUF3QixtQ0FBbUMsOEJBQThCLHVCQUF1QixHQUFHLG1CQUFtQixrQkFBa0Isd0JBQXdCLGdCQUFnQixHQUFHLDhDQUE4QyxrQkFBa0IsZUFBZSxHQUFHLDJEQUEyRCxxQkFBcUIsR0FBRyxxQ0FBcUMsaUJBQWlCLEdBQUcsb0NBQW9DLHlCQUF5QixpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLGNBQWMseUJBQXlCLEdBQUcsMENBQTBDLGtCQUFrQiwyQkFBMkIsY0FBYyxpQkFBaUIsdUJBQXVCLDJCQUEyQixvQkFBb0IsYUFBYSxjQUFjLHFDQUFxQyxnQkFBZ0IsR0FBRyxhQUFhLHVCQUF1QixHQUFHLFdBQVcsc0JBQXNCLEdBQUcsNkNBQTZDLGtCQUFrQix3QkFBd0IsYUFBYSxHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLGFBQWEsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcscUJBQXFCLHdCQUF3Qiw2QkFBNkIsR0FBRyx5QkFBeUIscUJBQXFCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLGNBQWMsT0FBTyxtQkFBbUIsY0FBYyxHQUFHLHVCQUF1QixpQkFBaUIsR0FBRyw4Q0FBOEMsWUFBWSxHQUFHLDBCQUEwQixxQkFBcUIsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0IsY0FBYyxHQUFHLGlCQUFpQixZQUFZLEdBQUcscURBQXFELGNBQWMsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLHNCQUFzQixHQUFHLHNCQUFzQixtQkFBbUIsdUJBQXVCLGNBQWMsR0FBRyxpQkFBaUIsa0NBQWtDLEdBQUcsa0VBQWtFLGtCQUFrQixrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxxQkFBcUIsZUFBZSwwQkFBMEIsaUJBQWlCLGNBQWMsb0JBQW9CLEdBQUcsc0RBQXNELG9CQUFvQixHQUFHLG1CQUFtQix3QkFBd0IscUJBQXFCLDRCQUE0QixpQkFBaUIsMENBQTBDLGtCQUFrQix3QkFBd0IscUJBQXFCLDRCQUE0QixpQkFBaUIsMkNBQTJDLG1HQUFtRyxrQkFBa0Isb0RBQW9ELGdDQUFnQyx3QkFBd0Isb0JBQW9CLEdBQUcsMENBQTBDLHlCQUF5QiwyQkFBMkIsR0FBRyxxQ0FBcUMseUJBQXlCLDJCQUEyQix3QkFBd0IsNkJBQTZCLEtBQUssMkJBQTJCLHlCQUF5QiwyQkFBMkIsd0JBQXdCLDZCQUE2QixLQUFLLHlCQUF5Qix5QkFBeUIsMkJBQTJCLHdCQUF3Qiw2QkFBNkIsS0FBSyxrREFBa0QseUJBQXlCLDJCQUEyQix3QkFBd0IsNkJBQTZCLEtBQUssb0NBQW9DLHlCQUF5QiwyQkFBMkIsNkJBQTZCLDZCQUE2QixLQUFLLG9DQUFvQyx5QkFBeUIsMkJBQTJCLDZCQUE2Qiw2QkFBNkIsS0FBSyxtQkFBbUI7QUFDaDhUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNzQztBQUM4Qzs7QUFFekc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsRUFBRSx5REFBZTtBQUNqQixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxtREFBWTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsb0RBQWE7QUFDZixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGlEQUFVLFdBQVcsZ0RBQVM7QUFDaEMsRUFBRSxvREFBYTtBQUNmLEVBQUUsbURBQVksQ0FBQyxnREFBUztBQUN4QjtBQUNBLEVBQUUsb0RBQWE7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHVEQUFhO0FBQ3ZDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEVBQUUsaURBQVU7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaURBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saURBQVU7QUFDaEI7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RzZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFrQjtBQUN0QixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxNQUFNO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUV5Qzs7QUFFekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxFQUFFO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILDhDQUE4Qzs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBRzJGOztBQUUzRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDNVZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7ICBcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzNmO1xcbiAgcGFkZGluZzogMTFweCAyMXB4O1xcbn1cXG5cXG4jaGVhZGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4OyAgXFxufVxcblxcbiNoZWFkZXIgPiBkaXYgPiBzdmcsXFxuI2hlYWRlciA+IGRpdiA+IGgxIHtcXG4gIGNvbG9yOiAjZmZmOyAgXFxuICBtYXJnaW46IDA7IFxcbn1cXG5cXG4jaGVhZGVyID4gZGl2ID4gc3ZnOmhvdmVyLFxcbiNoZWFkZXIgPiBkaXYgPiBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyBcXG59XFxuXFxuaW1nW3NyYz1cXFwiLi4vc3JjL2NvbXBhbnkucG5nXFxcIl0ge1xcbiAgaGVpZ2h0OiAzOHB4O1xcbn1cXG5cXG5pbWdbc3JjPVxcXCIuLi9zcmMvZG9nZ28uanBlZ1xcXCJdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgIFxcbiAgaGVpZ2h0OiAzOHB4O1xcbn1cXG5cXG4jbWFpbi1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEzdnc7XFxuICBwYWRkaW5nOiAyMXB4IDI1cHggMDtcXG59XFxuXFxuXFxuLyogVGFzayBGb3JtIENvbnRlbnQgKi9cXG4jdGFza0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDExcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDU1O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJsdXIge1xcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxufVxcblxcblxcbi8qIExlZnQgVGFiIENvbnRlbnQgKi9cXG5cXG4udGFzay1pbmJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3cHg7XFxufVxcblxcbiNsZWZ0LWJvZHkge1xcbiAgd2lkdGg6IDE2NXB4O1xcbn1cXG5cXG4jbGVmdC1ib2R5ID4gaDMge1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcXG59XFxuXFxuI2xlZnQtYm9keSA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMXB4O1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDExcHg7XFxuICBcXG59XFxuXFxuLnByb2plY3RzID4gcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wcm9qZWN0cyA+IGlucHV0IHtcXG4gIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuXFxuLyogUmlnaHQgVGFiIENvbnRlbnQgKi9cXG5cXG4jcmlnaHQtYm9keSB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4jcmlnaHQtYm9keSA+IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMXB4O1xcbn1cXG5cXG4udGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTFweDtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnRhc2sgPiBkaXYgPiAudGFzay1uYW1lID4gaDQsXFxuLnRhc2sgPiBkaXYgPiBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2sgPiBkaXYgPiBwIHtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcblxcbi5yYWRpby1idG4ge1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgd2lkdGg6IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG59XFxuXFxuLmNoZWNrZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyUXFxcIjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTJweDtcXG59XFxuXFxuLmNyb3NzLXRleHQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi8qIEZvciBzdHJpa2V0aHB1Z2ggdGV4dHMgKi9cXG4vKiB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgKi9cXG5cXG4udGFzay1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMXB4O1xcbn1cXG5cXG4udGFzay1uYW1lID4gaDUge1xcbiAgY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbmFtZSA+IGg0LFxcbi50YXNrID4gZGl2ID4gcCxcXG4udGFzayA+IHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGUtbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aWR0aDogMTAwcHg7XFxuICAvKiBtaW46IDgzcHggKi9cXG4gIC8qIG1heDogNjg2cHggKi9cXG59XFxuXFxuLnRleHQtbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aWR0aDogMTAwcHg7XFxuICAvKiBtaW46IDE3NXB4ICovXFxuICAvKiBtYXg6IDc3N3B4ICovXFxufVxcbi8qIHNldCB0aGUgbWluIGFuZCBtYXggdmFsdWUgZm9yIHdpZHRoICAqL1xcbi8qIFJlZmVyIENTUyBGdW5jdGlvbnMgcGFnZSBvbiBUT1AgKi9cXG5cXG4uZWRpdC10YXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1cHggMWZyIDEwMHB4IDMwcHggMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2x1bW4tZ2FwOiA4cHg7XFxufVxcblxcbi5lZGl0LXRhc2sgPiBzcGFuW2NsYXNzPSdyYWRpby1idG4nXSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtcm93LXN0YXJ0OiBzcGFuIDI7XFxufVxcblxcbi5lZGl0LXRhc2sgPiBpbnB1dFt0eXBlPSd0ZXh0J10ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDI7ICovXFxuICBncmlkLXJvdy1zdGFydDogMTtcXG4gIC8qIGdyaWQtcm93LWVuZDogc3BhbiAyOyAqL1xcbn1cXG5cXG4uZWRpdC10YXNrID4gdGV4dGFyZWEge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDI7ICovXFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIC8qIGdyaWQtcm93LWVuZDogc3BhbiAyOyAqL1xcbn1cXG5cXG4uZWRpdC10YXNrID4gc2VsZWN0IHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IGlucHV0W3BsYWNlaG9sZGVyPSdZWVlZL01NL0REJ10ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDI7ICovXFxuICBncmlkLXJvdy1zdGFydDogMjtcXG4gIC8qIGdyaWQtcm93LWVuZDogc3BhbiAyOyAqL1xcbn1cXG5cXG4uZWRpdC10YXNrID4gYnV0dG9uW3ZhbHVlPSfinJQnXSB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNDtcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogMjsgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiBzcGFuIDI7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IGJ1dHRvblt2YWx1ZT0n4pyWJ10ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDU7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDI7ICovXFxuICBncmlkLXJvdy1zdGFydDogc3BhbiAyO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsK0RBQWlEO0FBQ25EOztBQUVBO0VBQ0UsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxvQkFBb0I7QUFDdEI7OztBQUdBLHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUdBLHFCQUFxQjs7QUFFckI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUzs7QUFFWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBR0Esc0JBQXNCOztBQUV0QjtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBOztFQUVFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0EsMkJBQTJCO0FBQzNCLG1DQUFtQzs7QUFFbkM7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0EseUNBQXlDO0FBQ3pDLG9DQUFvQzs7QUFFcEM7RUFDRSxhQUFhO0VBQ2IsK0NBQStDO0VBQy9DLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ3JvYm90byc7XFxuICBzcmM6IHVybCgnLi9Sb2JvdG8tTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG59XFxuXFxuI2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4OyAgXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIHBhZGRpbmc6IDExcHggMjFweDtcXG59XFxuXFxuI2hlYWRlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDsgIFxcbn1cXG5cXG4jaGVhZGVyID4gZGl2ID4gc3ZnLFxcbiNoZWFkZXIgPiBkaXYgPiBoMSB7XFxuICBjb2xvcjogI2ZmZjsgIFxcbiAgbWFyZ2luOiAwOyBcXG59XFxuXFxuI2hlYWRlciA+IGRpdiA+IHN2Zzpob3ZlcixcXG4jaGVhZGVyID4gZGl2ID4gaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgXFxufVxcblxcbmltZ1tzcmM9XFxcIi4uL3NyYy9jb21wYW55LnBuZ1xcXCJdIHtcXG4gIGhlaWdodDogMzhweDtcXG59XFxuXFxuaW1nW3NyYz1cXFwiLi4vc3JjL2RvZ2dvLmpwZWdcXFwiXSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7ICBcXG4gIGhlaWdodDogMzhweDtcXG59XFxuXFxuI21haW4tYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxM3Z3O1xcbiAgcGFkZGluZzogMjFweCAyNXB4IDA7XFxufVxcblxcblxcbi8qIFRhc2sgRm9ybSBDb250ZW50ICovXFxuI3Rhc2tGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMXB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiA1NTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5ibHVyIHtcXG4gIGZpbHRlcjogYmx1cig4cHgpO1xcbn1cXG5cXG5cXG4vKiBMZWZ0IFRhYiBDb250ZW50ICovXFxuXFxuLnRhc2staW5ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogN3B4O1xcbn1cXG5cXG4jbGVmdC1ib2R5IHtcXG4gIHdpZHRoOiAxNjVweDtcXG59XFxuXFxuI2xlZnQtYm9keSA+IGgzIHtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxufVxcblxcbiNsZWZ0LWJvZHkgPiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTFweDtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMXB4O1xcbiAgXFxufVxcblxcbi5wcm9qZWN0cyA+IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvamVjdHMgPiBpbnB1dCB7XFxuICB3aWR0aDogMTIwcHg7XFxufVxcblxcblxcbi8qIFJpZ2h0IFRhYiBDb250ZW50ICovXFxuXFxuI3JpZ2h0LWJvZHkge1xcbiAgZmxleDogMTtcXG59XFxuXFxuI3JpZ2h0LWJvZHkgPiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTFweDtcXG59XFxuXFxuLnRhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDExcHg7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi50YXNrID4gZGl2ID4gLnRhc2stbmFtZSA+IGg0LFxcbi50YXNrID4gZGl2ID4gcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi50YXNrID4gZGl2ID4gcCB7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5cXG4ucmFkaW8tYnRuIHtcXG4gIGhlaWdodDogMTNweDtcXG4gIHdpZHRoOiAxM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxufVxcblxcbi5jaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKclFxcXCI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0ycHg7XFxufVxcblxcbi5jcm9zcy10ZXh0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4vKiBGb3Igc3RyaWtldGhwdWdoIHRleHRzICovXFxuLyogdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7ICovXFxuXFxuLnRhc2stbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTFweDtcXG59XFxuXFxuLnRhc2stbmFtZSA+IGg1IHtcXG4gIGNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW46IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLW5hbWUgPiBoNCxcXG4udGFzayA+IGRpdiA+IHAsXFxuLnRhc2sgPiBzcGFuIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlLW5vd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgLyogbWluOiA4M3B4ICovXFxuICAvKiBtYXg6IDY4NnB4ICovXFxufVxcblxcbi50ZXh0LW5vd3JhcCB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgLyogbWluOiAxNzVweCAqL1xcbiAgLyogbWF4OiA3NzdweCAqL1xcbn1cXG4vKiBzZXQgdGhlIG1pbiBhbmQgbWF4IHZhbHVlIGZvciB3aWR0aCAgKi9cXG4vKiBSZWZlciBDU1MgRnVuY3Rpb25zIHBhZ2Ugb24gVE9QICovXFxuXFxuLmVkaXQtdGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDFmciAxMDBweCAzMHB4IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogOHB4O1xcbn1cXG5cXG4uZWRpdC10YXNrID4gc3BhbltjbGFzcz0ncmFkaW8tYnRuJ10ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLXJvdy1zdGFydDogc3BhbiAyO1xcbn1cXG5cXG4uZWRpdC10YXNrID4gaW5wdXRbdHlwZT0ndGV4dCddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IHRleHRhcmVhIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IHNlbGVjdCB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMztcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogMjsgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVxcblxcbi5lZGl0LXRhc2sgPiBpbnB1dFtwbGFjZWhvbGRlcj0nWVlZWS9NTS9ERCddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAvKiBncmlkLXJvdy1lbmQ6IHNwYW4gMjsgKi9cXG59XFxuXFxuLmVkaXQtdGFzayA+IGJ1dHRvblt2YWx1ZT0n4pyUJ10ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDI7ICovXFxuICBncmlkLXJvdy1zdGFydDogc3BhbiAyO1xcbiAgLyogZ3JpZC1yb3ctZW5kOiBzcGFuIDI7ICovXFxufVxcblxcbi5lZGl0LXRhc2sgPiBidXR0b25bdmFsdWU9J+KcliddIHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA1O1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiAyOyAqL1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gMjtcXG4gIC8qIGdyaWQtcm93LWVuZDogc3BhbiAyOyAqL1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBvcGVuUHJvamVjdEZvcm0sIGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgb3BlblRhc2tGb3JtLCBjbG9zZVRhc2tGb3JtLCBjcmVhdGVUYXNrLCBmb3JtVmFsdWUsIHVwZGF0ZVRhc2tOdW0sIHVwZGF0ZVRhc2tEQiB9IGZyb20gJy4vdGFzayc7XG5cbi8vIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OFpLcTByLWc4N01cblxuLy8gdG9kby1pdGVtcyBtdXN0IGhhdmUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHlcbi8vIEV2ZW50IGZvciBjcmVhdGUgdGFza1xuLy8gRXZlbnQgZm9yIGVkaXQgdGFza1xuLy8gRXZlbnQgZm9yIGRlbGV0ZSB0YXNrXG4vLyBFdmVudCB0byBzZWxlY3QgaW5ib3ggb3IgcHJvamVjdCB0YWJzXG4vLyBQcm9qZWN0cyBzaG91bGQgaGF2ZSB0aGVpciBvd24gdG9kbyBsaXN0IFxuXG5mdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7ICBcbn1cblxuXG4vLyBpbmRleC5qczsgTWFpbiBpbnRlcmZhY2UgdG8gb3RoZXIganMgbW9kdWxlc1xuY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsZWZ0LWJvZHkgPiBidXR0b24nKTtcbnByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3BlblByb2plY3RGb3JtKCk7XG59KTtcblxuXG5jb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWJvZHknKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tGb3JtJyk7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0Zvcm0gPiBkaXYgPiBidXR0b25bdmFsdWU9XCJDYW5jZWxcIl0nKTtcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG5jb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0LWJvZHkgPiBidXR0b24nKTtcbnRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3BlblRhc2tGb3JtKG1haW5Cb2R5LCB0YXNrRm9ybSk7XG59KTtcblxuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjbG9zZVRhc2tGb3JtKG1haW5Cb2R5LCB0YXNrRm9ybSk7XG59KVxuXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhlKTtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVRhc2sodGFza0xpc3QsIGZvcm1WYWx1ZShlKSk7XG4gIHVwZGF0ZVRhc2tOdW0oKTtcbiAgdXBkYXRlVGFza0RCKGZvcm1WYWx1ZShlKSk7XG4gIHRhc2tGb3JtLnJlc2V0KCk7XG4gIGNsb3NlVGFza0Zvcm0obWFpbkJvZHksIHRhc2tGb3JtKTtcbn0pXG5cbi8vIFdoZW4gbm8gdGFza3Mgb3IgcHJvamVjdHMgb24gbG9jYWxTdG9yYWdlLCBtYWtlIHN1cmUgbm8gY3Jhc2hcbi8vIHN0b3JhZ2UuanMuLi4gVXBkYXRlIHN0b3JhZ2UgY29udGVudCBoZXJlXG5jb25zdCBwcm9qZWN0T2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UucHJvamVjdHMpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG5cbk9iamVjdC5rZXlzKHByb2plY3RPYmopLmZvckVhY2goa2V5ID0+IHtcbiAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChwcm9qZWN0T2JqW2tleV0pKTtcbn0pXG5cbmNvbnN0IHRhc2tPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcyk7XG5PYmplY3Qua2V5cyh0YXNrT2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gIGNyZWF0ZVRhc2sodGFza0xpc3QsIHRhc2tPYmpba2V5XSk7XG59KVxuXG4vLyBNZXRob2QgdG8gZGlzcGxheSBhbGwgdGFzayAoaW5ib3gpIG9uIHBhZ2VcbmZ1bmN0aW9uIGRpc3BsYXlJbmJveFRhc2soKSB7XG4gIHdoaWxlKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGNvbnN0IGFsbFRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgT2JqZWN0LmtleXMoYWxsVGFzaykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY3JlYXRlVGFzayh0YXNrTGlzdCwgYWxsVGFza1trZXldKTtcbiAgfSk7ICBcbn07XG5cbi8vIEFkZCB0aGlzIGV2ZW50IHRvIEluYm94XG5jb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveCcpO1xuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKCk7XG4gIGRpc3BsYXlJbmJveFRhc2soKTtcbn0pO1xuXG4vLyBNZXRob2QgdG8gZGlzcGxheSBwcm9qZWN0IHRhc2sgb24gcGFnZVxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RUYXNrKGV2ZW50KSB7XG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC1ib2R5ID4gaDInKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdDtcbiAgd2hpbGUodGFza0xpc3QuZmlyc3RDaGlsZCkge1xuICAgIHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tMaXN0LmZpcnN0Q2hpbGQpO1xuICB9XG4gIGNvbnN0IHN0b3JlZE9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICBPYmplY3Qua2V5cyhzdG9yZWRPYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChzdG9yZWRPYmpba2V5XS5wcm9qZWN0ID09PSBzZWxlY3RlZFByb2plY3QpIHtcbiAgICAgIGNyZWF0ZVRhc2sodGFza0xpc3QsIHN0b3JlZE9ialtrZXldKVxuICAgIH1cbiAgfSlcbn07XG5cblxuZXhwb3J0IHsgZGlzcGxheVByb2plY3RUYXNrIH07IiwiaW1wb3J0IHsgZGlzcGxheVByb2plY3RUYXNrIH0gZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpIHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMnKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9IFwi4pyWXCI7XG4gIFxuICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xuICAgIGRpc3BsYXlQcm9qZWN0VGFzayhlKTtcbiAgfSk7XG5cbiAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICByZW1vdmVQcm9qZWN0KGUpO1xuICAgIHJlbW92ZVByb2plY3REQihlKTtcbiAgfSk7XG5cbiAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gIFxuICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChldmVudCkge1xuICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gIC8vIGNvbnN0IHRpdGxlID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudDtcbiAgLy8gY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAvLyBjb25zdCB1bndhbnRlZERPTSA9IGRyb3BEb3duLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT0ke3RpdGxlfV1gKTsgXG4gIC8vIGNvbnNvbGUubG9nKHVud2FudGVkRE9NKTtcblxuICBjb25zdCB1bndhbnRlZFByb2plY3QgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IHVud2FudGVkUHJvamVjdC5wYXJlbnRFbGVtZW50O1xuICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHVud2FudGVkUHJvamVjdCk7XG5cbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TnVtKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pOdW0nKSA9PSBudWxsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2pOdW0nLCAnMScpO1xuICB9IGVsc2Uge1xuICAgIGxldCBwcm9qZWN0TnVtID0gcGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pOdW0nKSk7XG4gICAgcHJvamVjdE51bSArPSAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qTnVtJywgcHJvamVjdE51bSk7XG4gIH1cbn0gXG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3REQihuZXdQcm9qZWN0KSB7XG4gIGxldCBwcm9qZWN0TnVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2pOdW0nKTtcbiAgbGV0IGN1cnJlbnRQcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICBpZiAoY3VycmVudFByb2plY3RMaXN0ID09IG51bGwpIHsgXG4gICAgbGV0IHByb2plY3RPYmogPSB7fTtcbiAgICBwcm9qZWN0T2JqW3Byb2plY3ROdW1dID0gbmV3UHJvamVjdDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0T2JqKSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFByb2plY3RMaXN0W3Byb2plY3ROdW1dID0gbmV3UHJvamVjdDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdExpc3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0REIoZXZlbnQpIHtcbiAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICBjb25zdCBwcm9qZWN0MlJlbW92ZSA9IGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmlubmVyVGV4dDtcbiAgLy8gY29uc29sZS5sb2cocHJvamVjdDJSZW1vdmUpO1xuICBsZXQgY3VycmVudFByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0TGlzdCk7XG4gIGNvbnN0IG9iakluZGV4MlJlbW92ZSA9IE9iamVjdC5rZXlzKGN1cnJlbnRQcm9qZWN0TGlzdCkuZmluZChrZXkgPT4gY3VycmVudFByb2plY3RMaXN0W2tleV0gPT09IHByb2plY3QyUmVtb3ZlKTtcbiAgLy8gY29uc29sZS5sb2codGVzdCk7XG4gIGRlbGV0ZShjdXJyZW50UHJvamVjdExpc3Rbb2JqSW5kZXgyUmVtb3ZlXSk7XG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0TGlzdCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQcm9qZWN0TGlzdCkpO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBub2RlUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuXG4gIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnZXhhbXBsZS5jb20vJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAnZXZlbnQucHJldmVudERlZmF1bHQoKScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMnKTtcbiAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnTmV3IFByb2plY3QuLi4nKTtcbiAgXG4gIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCLinJZcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlbW92ZVByb2plY3QoZSk7XG4gIH0pXG5cbiAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zdCBuZXdQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtwbGFjZWhvbGRlcj1cIk5ldyBQcm9qZWN0Li4uXCJdJykudmFsdWU7XG4gICAgICBjb25zdCBub2RlUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICAgICAgbm9kZVBhcmVudC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KG5ld1Byb2plY3RUaXRsZSkpO1xuICAgICAgdXBkYXRlUHJvamVjdE51bSgpO1xuICAgICAgdXBkYXRlUHJvamVjdERCKG5ld1Byb2plY3RUaXRsZSk7XG4gICAgfVxuICB9KVxuICBcbiAgcmV0dXJuIG5vZGVQYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cbmV4cG9ydCB7IG9wZW5Qcm9qZWN0Rm9ybSwgY3JlYXRlUHJvamVjdCB9XG5cbi8vIEZ1dHVyZSBXb3JrOiBPbmx5IGFsbG93IDEgZm9ybSB0byBwb3AgdXAiLCJmdW5jdGlvbiBvcGVuVGFza0Zvcm0odG9CbHVyLCBmb3JtKSB7XG4gIHRvQmx1ci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2JsdXInKTtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgdGFza0Zvcm1Qcm9qZWN0TGlzdCgpO1xuICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0odW5CbHVyLCBmb3JtKSB7XG4gIHVuQmx1ci5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdoaWRkZW4nKTtcbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiB0YXNrRm9ybVByb2plY3RMaXN0KCkge1xuICAvLyBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRm9ybScpO1xuICBjb25zdCBkcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Jyk7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XG4gIGNvbnN0IERPTVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3QgPiBvcHRpb24nKTtcbiAgXG4gIGxldCBkb21BcnJheSA9IFtdO1xuICBBcnJheS5mcm9tKERPTVByb2plY3RzKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgZG9tQXJyYXkucHVzaChpdGVtLnZhbHVlKTtcbiAgfSk7XG5cbiAgLy8gY29uc3QgZHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICBsZXQgc3RvcmFnZUFycmF5ID0gW107XG4gIE9iamVjdC5rZXlzKGN1cnJlbnRQcm9qZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBzdG9yYWdlQXJyYXkucHVzaChjdXJyZW50UHJvamVjdFtrZXldKTtcbiAgICBpZiAoIWRvbUFycmF5LmluY2x1ZGVzKGN1cnJlbnRQcm9qZWN0W2tleV0pKSB7XG4gICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdFtrZXldO1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50UHJvamVjdFtrZXldKTtcbiAgICAgIGRyb3BEb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gY29uc3QgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3Byb2plY3QgPiBvcHRpb24nKTtcbiAgZG9tQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmICghc3RvcmFnZUFycmF5LmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICBsZXQgZWxlbWVudFdpdGhJdGVtO1xuICAgICAgLy8gTWV0aG9kIHRvIGZpbmQgZWxlbWVudCB0byByZW1vdmUuLi5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRE9NUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gY29uc3QgZWxlbWVudCA9IGFycmF5W2ldO1xuICAgICAgICBpZiAoRE9NUHJvamVjdHNbaV0udmFsdWUgPT09IGl0ZW0pIHtcbiAgICAgICAgICBlbGVtZW50V2l0aEl0ZW0gPSBET01Qcm9qZWN0c1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZHJvcERvd24ucmVtb3ZlQ2hpbGQoZWxlbWVudFdpdGhJdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEF2b2lkIGNyZWF0aW5nIHByb2plY3QgbGlzdCB3aGVuIHRoZXJlJ3Mgbm8gcHJvamVjdFxuICAvLyBpZiAobG9jYWxTdG9yYWdlLnByb2plY3RzID09IG51bGwpIHtcbiAgLy8gICByZXR1cm47XG4gIC8vIH1cbn1cblxuLy8gUmVmYWN0b3IgdGhpcyBjb2RlIHRvIGZpbmQgaW5kZXggYmFzZWQgb24gdmFsdWUgdGhlbiB1c2UgdGhlIGtleSB0byBvcGVyYXRlIGZ1bmN0aW9uXG5mdW5jdGlvbiBmb3JtVmFsdWUocmVjZWl2ZWRGb3JtKSB7XG4gIC8vIGNvbnNvbGUubG9nKHJlY2VpdmVkRm9ybSk7XG4gIGNvbnN0IG5ld1RpdGxlID0gcmVjZWl2ZWRGb3JtLnRhcmdldFswXS52YWx1ZTtcbiAgY29uc3QgbmV3VGV4dCA9IHJlY2VpdmVkRm9ybS50YXJnZXRbMV0udmFsdWU7XG4gIGNvbnN0IG5ld0RhdGUgPSByZWNlaXZlZEZvcm0udGFyZ2V0WzJdLnZhbHVlO1xuICBjb25zdCBuZXdQcmlvcml0eSA9IHJlY2VpdmVkRm9ybS50YXJnZXRbM10udmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSByZWNlaXZlZEZvcm0udGFyZ2V0WzRdLnZhbHVlO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IG5ld1RpdGxlLFxuICAgIHRleHQ6IG5ld1RleHQsXG4gICAgZHVlRGF0ZTogbmV3RGF0ZSxcbiAgICBwcmlvcml0eTogbmV3UHJpb3JpdHksXG4gICAgcHJvamVjdDogbmV3UHJvamVjdFxuICB9O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVkRm9ybVZhbHVlKHJlY2VpdmVkRm9ybSkge1xuICAvLyBjb25zb2xlLmxvZyhyZWNlaXZlZEZvcm0pO1xuICBjb25zdCBuZXdUaXRsZSA9IHJlY2VpdmVkRm9ybS50YXJnZXRbMF0udmFsdWU7XG4gIGNvbnN0IG5ld1RleHQgPSByZWNlaXZlZEZvcm0udGFyZ2V0WzJdLnZhbHVlO1xuICBjb25zdCBuZXdEYXRlID0gcmVjZWl2ZWRGb3JtLnRhcmdldFszXS52YWx1ZTtcbiAgY29uc3QgbmV3UHJpb3JpdHkgPSByZWNlaXZlZEZvcm0udGFyZ2V0WzFdLnZhbHVlO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcmVjZWl2ZWRGb3JtLnRhcmdldFs2XS52YWx1ZTtcblxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IG5ld1RpdGxlLFxuICAgIHRleHQ6IG5ld1RleHQsXG4gICAgZHVlRGF0ZTogbmV3RGF0ZSxcbiAgICBwcmlvcml0eTogbmV3UHJpb3JpdHksXG4gICAgcHJvamVjdDogbmV3UHJvamVjdFxuICB9O1xufVxuXG5mdW5jdGlvbiB2YWx1ZUJlZm9yZUVkaXQoY2xpY2tlZEVsZW1lbnQpIHtcbiAgY29uc3QgdGFza0RpdiA9IGNsaWNrZWRFbGVtZW50LmNsb3Nlc3QoJy50YXNrJyk7XG4gIGNvbnN0IHRpdGxlID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lID4gaDQnKS50ZXh0Q29udGVudDtcbiAgY29uc3QgdGV4dCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcigncCcpLnRleHRDb250ZW50O1xuICBjb25zdCBwcmlvcml0eSA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZSA+IGg1JykudGV4dENvbnRlbnQ7XG4gIGNvbnN0IGRhdGUgPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoJ3NwYW46bGFzdC1vZi10eXBlJykudGV4dENvbnRlbnQ7XG4gIC8vIGNvbnNvbGUubG9nKGNsaWNrZWRFbGVtZW50KTtcbiAgY29uc3QgcHJvamVjdCA9IHRhc2tEaXYucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImhpZGRlblwiXScpLnZhbHVlO1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdGV4dCxcbiAgICBwcmlvcml0eSxcbiAgICBkYXRlLCBcbiAgICBwcm9qZWN0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsb3NlVXBkYXRlRm9ybShmb3JtVG9DbG9zZSkge1xuICBmb3JtVG9DbG9zZS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGZvcm1Ub0Nsb3NlKTtcbiAgcmV0dXJuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2tMaXN0LCByZWNlaXZlZEZvcm1WYWx1ZSkge1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dCA9IHJlY2VpdmVkRm9ybVZhbHVlLnRpdGxlO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IHJlY2VpdmVkRm9ybVZhbHVlLnRleHQ7XG4gIGNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSByZWNlaXZlZEZvcm1WYWx1ZS5kdWVEYXRlO1xuICBjb25zdCB0YXNrUHJpb3JpdHlJbnB1dCA9IHJlY2VpdmVkRm9ybVZhbHVlLnByaW9yaXR5O1xuICBjb25zdCB0YXNrUHJvamVjdElucHV0ID0gcmVjZWl2ZWRGb3JtVmFsdWUucHJvamVjdDtcblxuICBjb25zdCBwYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFyZW50RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzaycpO1xuXG4gIGxldCByYWRpb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcmFkaW9CdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyYWRpby1idG4nKTtcblxuICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrRGVzY3JpcHRpb25JbnB1dDtcblxuICBsZXQgbWFpblRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IG1pbmlUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1pbmlUYXNrRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFzay1uYW1lJyk7XG5cbiAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZUlucHV0O1xuXG4gIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrUHJpb3JpdHlJbnB1dDtcblxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEdWVEYXRlSW5wdXQ7XG5cbiAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICfinJYnO1xuXG4gIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdGFza1Byb2plY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuICB0YXNrUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFza1Byb2plY3RJbnB1dCk7XG5cblxuICBtaW5pVGFza0Rpdi5hcHBlbmQodGFza1RpdGxlLHRhc2tQcmlvcml0eSk7XG4gIG1haW5UYXNrRGl2LmFwcGVuZChtaW5pVGFza0RpdiwgdGFza0Rlc2NyaXB0aW9uKTtcbiAgcGFyZW50RGl2LmFwcGVuZChyYWRpb0J0biwgbWFpblRhc2tEaXYsIGR1ZURhdGUsIGVkaXQsIGNsb3NlQnRuLCB0YXNrUHJvamVjdCk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHBhcmVudERpdik7XG5cbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2syUmVtb3ZlID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrMlJlbW92ZSk7XG4gICAgcmVtb3ZlVGFza0RCKGUpO1xuICB9KTtcblxuICByYWRpb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocGFyZW50RGl2LmNsYXNzTGlzdC5jb250YWlucygnY3Jvc3MtdGV4dCcpKSB7XG4gICAgICBwYXJlbnREaXYuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3MtdGV4dCcpO1xuICAgICAgcmFkaW9CdG4uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnREaXYuY2xhc3NMaXN0LmFkZCgnY3Jvc3MtdGV4dCcpO1xuICAgICAgcmFkaW9CdG4uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfSlcblxuICAvLyBFZGl0IGZvcm0gZXZlbnRcbiAgY29uc3QgY2FuRWRpdEZvcm0gPSBbdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tQcmlvcml0eSwgZHVlRGF0ZV07XG4gIGNhbkVkaXRGb3JtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7ICAgICAgXG4gICAgICBlZGl0VGFzayhwYXJlbnREaXYucGFyZW50RWxlbWVudCwgcGFyZW50RGl2LCB2YWx1ZUJlZm9yZUVkaXQoZS50YXJnZXQpKTtcbiAgICB9KVxuICB9KTtcblxuICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgICAgICBcbiAgICBlZGl0VGFzayhwYXJlbnREaXYucGFyZW50RWxlbWVudCwgcGFyZW50RGl2LCB2YWx1ZUJlZm9yZUVkaXQoZS50YXJnZXQpKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gcHJvamVjdExpc3RFZGl0Rm9ybShuZXdQcm9qZWN0U2VsZWN0RWxlbWVudCwgc2VsZWN0ZWRQcm9qZWN0KSB7XG4gIGNvbnN0IGF2YWlsYmxlUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICBPYmplY3Qua2V5cyhhdmFpbGJsZVByb2plY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IGF2YWlsYmxlUHJvamVjdFtrZXldO1xuICAgIG5ld1Byb2plY3RTZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG4gIH0pO1xuXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRhc2sgPiBzZWxlY3Q6bnRoLWxhc3QtY2hpbGQoMSkgPiBvcHRpb24nKTtcblxuICBjb25zdCBvcHRpb25ET00gPSBuZXdQcm9qZWN0U2VsZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcbiAgLy8gY29uc29sZS5sb2cob3B0aW9uRE9NKTtcbiAgb3B0aW9uRE9NLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKG9wdGlvbi5pbm5lclRleHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdCk7XG4gICAgaWYgKG9wdGlvbi5pbm5lclRleHQgPT09IHNlbGVjdGVkUHJvamVjdCkge1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICB9XG4gIH0pOyBcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2socGFyZW50Tm9kZSwgZWxlbWVudFRvUmVwbGFjZSwgY3VycmVudFZhbHVlKSB7XG4gIC8vIERPTSB0byBjcmVhdGUgJ2VkaXQnIGZvcm1cbiAgY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbmV3Rm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQtdGFzaycpO1xuICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2V4YW1wbGUuY29tLycpO1xuICBuZXdGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgY29uc3QgcmFkaW9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHJhZGlvQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFkaW8tYnRuJyk7XG4gIGNvbnN0IG5ld1Rhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld1Rhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBuZXdUYXNrVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrVGl0bGUnKTtcbiAgbmV3VGFza1RpdGxlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50VmFsdWUudGl0bGUpO1xuICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBuZXdQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gIGNvbnN0IGxvd1ByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93UHJpby50ZXh0Q29udGVudCA9ICdMb3ctUHJpb3JpdHknO1xuICBjb25zdCBtZWRQcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG1lZFByaW8udGV4dENvbnRlbnQgPSAnTWVkLVByaW9yaXR5JztcbiAgY29uc3QgaGlnaFByaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaFByaW8udGV4dENvbnRlbnQgPSAnSGlnaC1Qcmlvcml0eSc7XG4gIHN3aXRjaCAoY3VycmVudFZhbHVlLnByaW9yaXR5KSB7XG4gICAgY2FzZSBsb3dQcmlvLnRleHRDb250ZW50OlxuICAgICAgbG93UHJpby5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIG1lZFByaW8udGV4dENvbnRlbnQ6XG4gICAgICBtZWRQcmlvLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgaGlnaFByaW8udGV4dENvbnRlbnQ6XG4gICAgICBoaWdoUHJpby5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgfVxuICBjb25zdCBuZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbmV3VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICBuZXdUZXh0LnRleHRDb250ZW50ID0gY3VycmVudFZhbHVlLnRleHQ7XG4gIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBuZXdEYXRlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWVlZWS9NTS9ERCcpO1xuICBuZXdEYXRlLnNldEF0dHJpYnV0ZSgncGF0dGVybicsICcoWzEyXVxcXFxkezN9LygwWzEtOV18MVswLTJdKS8oMFsxLTldfFsxMl1cXFxcZHwzWzAxXSkpJyk7XG4gIG5ld0RhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gIG5ld0RhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnRWYWx1ZS5kYXRlKTtcblxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbmZpcm1CdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICfinJQnKTtcbiAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAn4pyUJztcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ+KclicpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAn4pyWJztcblxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByb2plY3RMaXN0RWRpdEZvcm0obmV3UHJvamVjdCwgY3VycmVudFZhbHVlLnByb2plY3QpO1xuICBuZXdQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdCcpO1xuXG4gIG5ld1ByaW9yaXR5LmFwcGVuZChsb3dQcmlvLCBtZWRQcmlvLCBoaWdoUHJpbyk7XG4gIG5ld0Zvcm0uYXBwZW5kKHJhZGlvQnRuLCBuZXdUYXNrVGl0bGUsIG5ld1ByaW9yaXR5LCBuZXdUZXh0LCBuZXdEYXRlLCBjb25maXJtQnRuLCBjYW5jZWxCdG4sIG5ld1Byb2plY3QpO1xuXG4gIG5ld0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFRhc2tEQihlLCBjdXJyZW50VmFsdWUpO1xuICAgIGNvbnN0IHVwZGF0ZWRWYWx1ZSA9IHVwZGF0ZWRGb3JtVmFsdWUoZSk7XG4gICAgY3JlYXRlVGFzayhlLnRhcmdldC5wYXJlbnRFbGVtZW50LCB1cGRhdGVkVmFsdWUpO1xuICAgIGNsb3NlVXBkYXRlRm9ybShlLnRhcmdldCk7XG4gIH0pO1xuXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcblxuICByZXR1cm4gcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Rm9ybSwgZWxlbWVudFRvUmVwbGFjZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tOdW0oKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza051bScpID09IG51bGwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza051bScsICcxJyk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHRhc2tOdW0gPSBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza051bScpKTtcbiAgICB0YXNrTnVtICs9IDE7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tOdW0nLCB0YXNrTnVtKTtcbiAgfVxufSBcblxuZnVuY3Rpb24gdXBkYXRlVGFza0RCKG5ld1Rhc2spIHtcbiAgbGV0IHRhc2tOdW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza051bScpO1xuICBsZXQgY3VycmVudFRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGlmIChjdXJyZW50VGFza0xpc3QgPT0gbnVsbCkgeyBcbiAgICBsZXQgdGFza09iaiA9IHt9O1xuICAgIHRhc2tPYmpbdGFza051bV0gPSBuZXdUYXNrO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tPYmopKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50VGFza0xpc3RbdGFza051bV0gPSBuZXdUYXNrO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRUYXNrTGlzdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tEQihldmVudCkge1xuICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gIGNvbnN0IHRhc2syUmVtb3ZlID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZSA+IGg0JykudGV4dENvbnRlbnQ7XG4gIGxldCBjdXJyZW50VGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgY29uc3Qgb2JqSW5kZXgyUmVtb3ZlID0gT2JqZWN0LmtleXMoY3VycmVudFRhc2tMaXN0KS5maW5kKGtleSA9PiBjdXJyZW50VGFza0xpc3Rba2V5XS50aXRsZSA9PT0gdGFzazJSZW1vdmUpO1xuICAvLyBjb25zb2xlLmxvZyhvYmpJbmRleDJSZW1vdmUpO1xuICBkZWxldGUoY3VycmVudFRhc2tMaXN0W29iakluZGV4MlJlbW92ZV0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza0xpc3QpKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2tEQihldmVudCwgdmFsdWVCZWZvcmVFZGl0KSB7XG4gIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgY29uc3QgbmV3VGl0bGUgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignI3Rhc2tUaXRsZScpLnZhbHVlO1xuICBjb25zdCBuZXdUZXh0ID0gZXZlbnQudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgbmV3RGF0ZSA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlO1xuICBjb25zdCBuZXdQcmlvcml0eSA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLnZhbHVlO1xuICBsZXQgY3VycmVudFRhc2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gIGNvbnN0IG9iakluZGV4MlJlbW92ZSA9IE9iamVjdC5rZXlzKGN1cnJlbnRUYXNrTGlzdCkuZmluZChrZXkgPT4gY3VycmVudFRhc2tMaXN0W2tleV0udGl0bGUgPT09IHZhbHVlQmVmb3JlRWRpdC50aXRsZSk7XG5cbiAgY3VycmVudFRhc2tMaXN0W29iakluZGV4MlJlbW92ZV0udGl0bGUgPSBuZXdUaXRsZTtcbiAgY3VycmVudFRhc2tMaXN0W29iakluZGV4MlJlbW92ZV0udGV4dCA9IG5ld1RleHQ7XG4gIGN1cnJlbnRUYXNrTGlzdFtvYmpJbmRleDJSZW1vdmVdLmR1ZURhdGUgPSBuZXdEYXRlO1xuICBjdXJyZW50VGFza0xpc3Rbb2JqSW5kZXgyUmVtb3ZlXS5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICBjdXJyZW50VGFza0xpc3Rbb2JqSW5kZXgyUmVtb3ZlXS5wcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50VGFza0xpc3QpKTtcbn1cblxuXG5leHBvcnQgeyBvcGVuVGFza0Zvcm0sIGNsb3NlVGFza0Zvcm0sIGNyZWF0ZVRhc2ssIGZvcm1WYWx1ZSwgdXBkYXRlVGFza051bSwgdXBkYXRlVGFza0RCIH07XG5cbi8vIENvbXB1bHNvcnkgKEluIHRlcm1zIG9mIHByaW9yaXR5KVxuLy8gQ2xpY2sgaW5ib3ggLSBMaXN0IGFsbCB0YXNrXG4vLyBDbGljayBzcGVjaWZpYyBwcm9qZWN0IC0gT25seSBsaXN0IHJlbGF0ZWQgdGFza1xuXG4vLyBPcHRpb25hbFxuLy8gTWFrZSB0YXNrIHRpdGxlICYgZGVzY3JpcHRpb24gd2lkdGggZXhwYW5kL3Jlc3BvbnNpdmVcbi8vIFByaW9yaXR5IGhhdmluZyBncmVlbiwgb3JhbmdlLCByZWQgb3B0aW9uXG4vLyBJbmNsdWRlICdUb2RheScgJiAnTmV4dCA3IERheXMnIHRvIGJlIGludGVyYWN0aXZlXG5cbi8vIEJ1Z3MgdG8gZml4XG4vLyBPbmx5IDEgb2YgJysgUHJvamVjdCcgY2FuIGJlIGFjdGl2ZSBhdCBhIHRpbWUgKE5vIG11bHRpcGxlIGZvcm0gaW5wdXQgYWxsb3dlZClcbi8vIENvbXBsZXRlZCB0YXNrIHNob3VsZCByZW1haW5lZCBjaGVja2VkIGFmdGVyIGRvbmUgZWRpdFxuLy8gT3JkZXIgb2YgdGFzayBzaG91bGQgcmVtYWluZWQgdXBvbiBlZGl0aW5nXG4vLyBQcmV2ZW50IHdlYiBjcmFzaGluZyB3aGVuIHRoZXJlcyBubyBsb2NhbFN0b3JhZ2Vcbi8vICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==