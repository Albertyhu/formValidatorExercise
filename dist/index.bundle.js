"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mystyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mystyle.css */ "./src/mystyle.css");

 //for watching the html file 

__webpack_require__(/*! ./index.html */ "./src/index.html");

const data = {
  email: '',
  country: '',
  zipcode: 0,
  password: 0,
  confirmation: 0,
  emailValid: false,
  countryValid: false,
  zipValid: false,
  passValid: false,
  confirmationValid: false,
  isValid: false,

  setEmail(item) {
    this.email = item;
  },

  setCountry(item) {
    this.country = item;
  },

  setZip(item) {
    this.zipcode = item;
  },

  setPassword(item) {
    this.password = item;
  },

  setConfirmation(item) {
    this.confirmation = item;
  }

};

function validityListener() {
  console.log('email: ' + data.emailValid);
  console.log('country: ' + data.countryValid);
  console.log('zip: ' + data.zipValid);
  console.log('password: ' + data.passValid);
  console.log('confirmation: ' + data.confirmationValid);

  if (data.emailValid && data.countryValid && data.zipValid && data.passValid && data.confirmationValid) {
    document.getElementById('submitButton').disabled = false;
  } else {
    document.getElementById('submitButton').disabled = true;
  }
}

validityListener();
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmation = document.getElementById('confirmPassword');
email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please, make sure that your email format is the correct form of \"Example@email.com\"');
    email.reportValidity();
    data.emailValid = false;
  } else if (email.validity.valueMissing) {
    email.setCustomValidity('This field cannot be empty.');
    email.reportValidity();
    data.emailValid = false;
  } else {
    email.setCustomValidity('');
    data.emailValid = true;
  }

  validityListener();
});
country.addEventListener('input', function (event) {
  if (country.validity.valueMissing) {
    country.setCustomValidity('This field cannot be empty.');
    country.reportValidity();
    data.countryValid = false;
  } else {
    country.setCustomValidity('');
    data.countryValid = true;
  }

  validityListener();
});
zip.addEventListener('input', function (event) {
  if (zip.validity.valueMissing) {
    zip.setCustomValidity('This field cannot be empty.');
    zip.reportValidity();
    data.zipValid = false;
  } else if (zip.validity.rangeUnderflow) {
    zip.setCustomValidity('Your zipcode is too short');
    zip.reportValidity();
    data.zipValid = false;
  } else if (zip.validity.patternMismatch) {
    zip.setCustomValidity('Please, enter numeric characters only.');
    zip.reportValidity();
    data.zipValid = false;
  } else {
    zip.setCustomValidity('');
    data.zipValid = true;
  }

  validityListener();
});
password.addEventListener('input', function (event) {
  if (password.validity.valueMissing) {
    password.setCustomValidity('This field cannot be empty.');
    password.reportValidity();
    data.passValid = false;
  } else if (password.validity.tooShort) {
    password.setCustomValidity('Your password is too short. It must be at least 4 digits long.');
    password.reportValidity();
    data.passValid = false;
  } else {
    password.setCustomValidity('');
    data.passValid = true;
  }

  validityListener();
});
confirmation.addEventListener('input', function (event) {
  if (confirmation.validity.valueMissing) {
    confirmation.setCustomValidity('This field cannot be empty.');
    confirmation.reportValidity();
    data.confirmationValid = false;
  } else if (confirmation.value !== password.value) {
    confirmation.setCustomValidity('The passwords you type do not match. Please, try again.');
    confirmation.reportValidity();
    data.confirmationValid = false;
  } else {
    confirmation.setCustomValidity('');
    data.confirmationValid = true;
  }

  validityListener();
});

const handleSubmission = () => {
  alert('Your information has been submitted.');
};

document.getElementById('submitButton').addEventListener('click', handleSubmission);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mystyle.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\nfont-family: Verdana;\r\nfont-size: 20px; \r\n}\r\n\r\n#container {\r\nwidth: 100%; \r\nheight: 100%; \r\nalign-content: center; \r\nbackground-color: #04b2ff; \r\n}\r\n#innerContainer {\r\n    width: 90%;\r\n    height: 90%;\r\n    margin: auto; \r\n    display: block;\r\n    background-color: #2269cc; \r\n}\r\n\r\n#h1Title_container {\r\n    padding-top: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n#secondInner {\r\n    width: 80%;\r\n    height: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.field {\r\ntext-align: left; \r\nborder: 1px solid #575757;\r\nborder-radius: 5px; \r\nheight: 30px; \r\nmargin-top: 10px;\r\nmargin-bottom: 10px; \r\nwidth: 100%;\r\n}\r\n\r\n.error_field {\r\ncolor: #ff0000;\r\nheight: 0px;\r\nfont-size: 25px;\r\n}\r\n#submitButtonCont {\r\nmargin-left: auto;\r\nmargin-right: auto;\r\ndisplay: block;\r\nwidth: 100%;\r\ntext-align: center;\r\npadding-top: 30px;\r\n}\r\n\r\n#submitButton {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #fff;\r\n    color: #000;\r\n    font-family: inherit;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#submitButton:active {\r\nbackground-color: #acacac;\r\n}\r\n\r\n#submitButton:disabled {\r\n    color: #c1c1c1;\r\n}\r\n\r\n#email {\r\n}\r\n\r\n#country {\r\n}\r\n\r\n#zipcode {\r\n}\r\n\r\n#password {\r\n}\r\n\r\n#confirmPassword {\r\n}\r\n\r\n#email:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#country:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#zipcode:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#password:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#confirmPassword:invalid {\r\n    border: red solid 3px;\r\n}", "",{"version":3,"sources":["webpack://./src/mystyle.css"],"names":[],"mappings":"AAAA;AACA,oBAAoB;AACpB,eAAe;AACf;;AAEA;AACA,WAAW;AACX,YAAY;AACZ,qBAAqB;AACrB,yBAAyB;AACzB;AACA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,kBAAkB;AACtB;AACA;IACI,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;AACA,gBAAgB;AAChB,yBAAyB;AACzB,kBAAkB;AAClB,YAAY;AACZ,gBAAgB;AAChB,mBAAmB;AACnB,WAAW;AACX;;AAEA;AACA,cAAc;AACd,WAAW;AACX,eAAe;AACf;AACA;AACA,iBAAiB;AACjB,kBAAkB;AAClB,cAAc;AACd,WAAW;AACX,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,WAAW;IACX,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;IACb,mBAAmB;AACvB;;AAEA;AACA,yBAAyB;AACzB;;AAEA;IACI,cAAc;AAClB;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["body {\r\nfont-family: Verdana;\r\nfont-size: 20px; \r\n}\r\n\r\n#container {\r\nwidth: 100%; \r\nheight: 100%; \r\nalign-content: center; \r\nbackground-color: #04b2ff; \r\n}\r\n#innerContainer {\r\n    width: 90%;\r\n    height: 90%;\r\n    margin: auto; \r\n    display: block;\r\n    background-color: #2269cc; \r\n}\r\n\r\n#h1Title_container {\r\n    padding-top: 20px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n#secondInner {\r\n    width: 80%;\r\n    height: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.field {\r\ntext-align: left; \r\nborder: 1px solid #575757;\r\nborder-radius: 5px; \r\nheight: 30px; \r\nmargin-top: 10px;\r\nmargin-bottom: 10px; \r\nwidth: 100%;\r\n}\r\n\r\n.error_field {\r\ncolor: #ff0000;\r\nheight: 0px;\r\nfont-size: 25px;\r\n}\r\n#submitButtonCont {\r\nmargin-left: auto;\r\nmargin-right: auto;\r\ndisplay: block;\r\nwidth: 100%;\r\ntext-align: center;\r\npadding-top: 30px;\r\n}\r\n\r\n#submitButton {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #fff;\r\n    color: #000;\r\n    font-family: inherit;\r\n    border-radius: 15px;\r\n    padding: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#submitButton:active {\r\nbackground-color: #acacac;\r\n}\r\n\r\n#submitButton:disabled {\r\n    color: #c1c1c1;\r\n}\r\n\r\n#email {\r\n}\r\n\r\n#country {\r\n}\r\n\r\n#zipcode {\r\n}\r\n\r\n#password {\r\n}\r\n\r\n#confirmPassword {\r\n}\r\n\r\n#email:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#country:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#zipcode:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#password:invalid {\r\n    border: red solid 3px;\r\n}\r\n\r\n#confirmPassword:invalid {\r\n    border: red solid 3px;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>New Project</title>\r\n</head>\r\n<body>\r\n    <div id=\"container\">\r\n        <div id=\"innerContainer\">\r\n            <div id=\"h1Title_container\">\r\n                <h1>Submission Form</h1>\r\n            </div>\r\n            <div id=\"secondInner\">\r\n                <div id=\"fieldContainer\">\r\n                    <h2 class=\"fieldTitle\">Email</h2>\r\n                    <input type=\"email\" class=\"field\" id=\"email\" required />\r\n                    <div id=\"email-error\" class=\"error_field\"></div>\r\n                </div>\r\n                <div id=\"fieldContainer\">\r\n                    <h2 class=\"fieldTitle\">Country</h2>\r\n                    <input type=\"text\" class=\"field\" id=\"country\" required />\r\n                    <div id=\"country-error\" class=\"error_field\"></div>\r\n                </div>\r\n                <div id=\"fieldContainer\">\r\n                    <h2 class=\"fieldTitle\">Zipcode</h2>\r\n                    <input type=\"number\" pattern =\"{0,9}\" class=\"field\" id=\"zipcode\" min = \"10000\" required />\r\n                    <div id=\"zip-error\" class=\"error_field\"></div>\r\n                </div>\r\n                <div id=\"fieldContainer\">\r\n                    <h2 class=\"fieldTitle\">Password</h2>\r\n                    <input type=\"text\" class=\"field\" id=\"password\" minlength=\"4\" required />\r\n                    <div id=\"password-error\" class=\"error_field\"></div>\r\n                </div>\r\n                <div id=\"fieldContainer\">\r\n                    <h2 class=\"fieldTitle\">Confirm your password</h2>\r\n                    <input type=\"text\" class=\"field\" id=\"confirmPassword\" required />\r\n                    <div id=\"confirmation-error\" class=\"error_field\"></div>\r\n                </div>\r\n\r\n                <div id=\"submitButtonCont\">\r\n                    <button id=\"submitButton\">Submit</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/mystyle.css":
/*!*************************!*\
  !*** ./src/mystyle.css ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mystyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9teXN0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbXlzdHlsZS5jc3M/ZGQ1MCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAnLi9teXN0eWxlLmNzcyc7IFxyXG5cclxuLy9mb3Igd2F0Y2hpbmcgdGhlIGh0bWwgZmlsZSBcclxucmVxdWlyZSgnLi9pbmRleC5odG1sJylcclxuXHJcbmNvbnN0IGRhdGEgPSB7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBjb3VudHJ5OiAnJyxcclxuICAgIHppcGNvZGU6IDAsXHJcbiAgICBwYXNzd29yZDogMCxcclxuICAgIGNvbmZpcm1hdGlvbjogMCxcclxuICAgIGVtYWlsVmFsaWQ6IGZhbHNlLCBcclxuICAgIGNvdW50cnlWYWxpZDogZmFsc2UsIFxyXG4gICAgemlwVmFsaWQ6IGZhbHNlLCBcclxuICAgIHBhc3NWYWxpZDogZmFsc2UsIFxyXG4gICAgY29uZmlybWF0aW9uVmFsaWQ6IGZhbHNlLCBcclxuICAgIGlzVmFsaWQ6IGZhbHNlLCBcclxuICAgIHNldEVtYWlsKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmVtYWlsPSBpdGVtOyBcclxuICAgIH0sXHJcbiAgICBzZXRDb3VudHJ5KGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSBpdGVtO1xyXG4gICAgfSxcclxuICAgIHNldFppcChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy56aXBjb2RlID0gaXRlbTtcclxuICAgIH0sXHJcbiAgICBzZXRQYXNzd29yZChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IGl0ZW07XHJcbiAgICB9LFxyXG4gICAgc2V0Q29uZmlybWF0aW9uKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLmNvbmZpcm1hdGlvbiA9IGl0ZW07XHJcbiAgICB9LFxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGl0eUxpc3RlbmVyKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdlbWFpbDogJyArIGRhdGEuZW1haWxWYWxpZClcclxuICAgIGNvbnNvbGUubG9nKCdjb3VudHJ5OiAnICsgZGF0YS5jb3VudHJ5VmFsaWQgKVxyXG4gICAgY29uc29sZS5sb2coJ3ppcDogJyArIGRhdGEuemlwVmFsaWQpXHJcbiAgICBjb25zb2xlLmxvZygncGFzc3dvcmQ6ICcgKyBkYXRhLnBhc3NWYWxpZCApXHJcbiAgICBjb25zb2xlLmxvZygnY29uZmlybWF0aW9uOiAnICsgZGF0YS5jb25maXJtYXRpb25WYWxpZClcclxuXHJcbiAgICBpZiAoZGF0YS5lbWFpbFZhbGlkICYmIGRhdGEuY291bnRyeVZhbGlkICYmIGRhdGEuemlwVmFsaWQgJiYgZGF0YS5wYXNzVmFsaWQgJiYgZGF0YS5jb25maXJtYXRpb25WYWxpZCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEJ1dHRvbicpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxudmFsaWRpdHlMaXN0ZW5lcigpOyBcclxuXHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsJyk7IFxyXG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnknKTtcclxuY29uc3QgemlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcGNvZGUnKVxyXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpXHJcbmNvbnN0IGNvbmZpcm1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtUGFzc3dvcmQnKVxyXG5cclxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChlbWFpbC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcclxuICAgICAgICBlbWFpbC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlLCBtYWtlIHN1cmUgdGhhdCB5b3VyIGVtYWlsIGZvcm1hdCBpcyB0aGUgY29ycmVjdCBmb3JtIG9mIFxcXCJFeGFtcGxlQGVtYWlsLmNvbVxcXCInKTtcclxuICAgICAgICBlbWFpbC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIGRhdGEuZW1haWxWYWxpZCA9IGZhbHNlOyBcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgICAgIGVtYWlsLnNldEN1c3RvbVZhbGlkaXR5KCdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eS4nKTtcclxuICAgICAgICBlbWFpbC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIGRhdGEuZW1haWxWYWxpZCA9IGZhbHNlOyBcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGVtYWlsLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgICAgICBkYXRhLmVtYWlsVmFsaWQgPSB0cnVlOyBcclxuICAgIH1cclxuICAgIHZhbGlkaXR5TGlzdGVuZXIoKSBcclxufSlcclxuXHJcblxyXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoY291bnRyeS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgICAgICBjb3VudHJ5LnNldEN1c3RvbVZhbGlkaXR5KCdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eS4nKTtcclxuICAgICAgICBjb3VudHJ5LnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgZGF0YS5jb3VudHJ5VmFsaWQgPSBmYWxzZTsgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb3VudHJ5LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgICAgICBkYXRhLmNvdW50cnlWYWxpZCA9IHRydWU7IFxyXG4gICAgfVxyXG4gICAgdmFsaWRpdHlMaXN0ZW5lcigpIFxyXG59KVxyXG5cclxuXHJcbnppcC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKHppcC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgICAgICB6aXAuc2V0Q3VzdG9tVmFsaWRpdHkoJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5LicpO1xyXG4gICAgICAgIHppcC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIGRhdGEuemlwVmFsaWQgPSBmYWxzZTsgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh6aXAudmFsaWRpdHkucmFuZ2VVbmRlcmZsb3cpIHtcclxuICAgICAgICB6aXAuc2V0Q3VzdG9tVmFsaWRpdHkoJ1lvdXIgemlwY29kZSBpcyB0b28gc2hvcnQnKVxyXG4gICAgICAgIHppcC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIGRhdGEuemlwVmFsaWQgPSBmYWxzZTsgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh6aXAudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XHJcbiAgICAgICAgemlwLnNldEN1c3RvbVZhbGlkaXR5KCdQbGVhc2UsIGVudGVyIG51bWVyaWMgY2hhcmFjdGVycyBvbmx5LicpXHJcbiAgICAgICAgemlwLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgZGF0YS56aXBWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgemlwLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgICAgICBkYXRhLnppcFZhbGlkID0gdHJ1ZTsgXHJcbiAgICB9XHJcbiAgICB2YWxpZGl0eUxpc3RlbmVyKCkgXHJcbn0pXHJcblxyXG5wYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKHBhc3N3b3JkLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgICAgIHBhc3N3b3JkLnNldEN1c3RvbVZhbGlkaXR5KCdUaGlzIGZpZWxkIGNhbm5vdCBiZSBlbXB0eS4nKTtcclxuICAgICAgICBwYXNzd29yZC5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIGRhdGEucGFzc1ZhbGlkID0gZmFsc2U7IFxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocGFzc3dvcmQudmFsaWRpdHkudG9vU2hvcnQpIHtcclxuICAgICAgICBwYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eSgnWW91ciBwYXNzd29yZCBpcyB0b28gc2hvcnQuIEl0IG11c3QgYmUgYXQgbGVhc3QgNCBkaWdpdHMgbG9uZy4nKVxyXG4gICAgICAgIHBhc3N3b3JkLnJlcG9ydFZhbGlkaXR5KCk7XHJcbiAgICAgICAgZGF0YS5wYXNzVmFsaWQgPSBmYWxzZTsgXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XHJcbiAgICAgICAgZGF0YS5wYXNzVmFsaWQgPSB0cnVlOyBcclxuICAgIH1cclxuICAgIHZhbGlkaXR5TGlzdGVuZXIoKSBcclxufSlcclxuXHJcbmNvbmZpcm1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGNvbmZpcm1hdGlvbi52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgICAgICBjb25maXJtYXRpb24uc2V0Q3VzdG9tVmFsaWRpdHkoJ1RoaXMgZmllbGQgY2Fubm90IGJlIGVtcHR5LicpO1xyXG4gICAgICAgIGNvbmZpcm1hdGlvbi5yZXBvcnRWYWxpZGl0eSgpO1xyXG4gICAgICAgIGRhdGEuY29uZmlybWF0aW9uVmFsaWQgPSBmYWxzZTsgXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjb25maXJtYXRpb24udmFsdWUgIT09IHBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgY29uZmlybWF0aW9uLnNldEN1c3RvbVZhbGlkaXR5KCdUaGUgcGFzc3dvcmRzIHlvdSB0eXBlIGRvIG5vdCBtYXRjaC4gUGxlYXNlLCB0cnkgYWdhaW4uJylcclxuICAgICAgICBjb25maXJtYXRpb24ucmVwb3J0VmFsaWRpdHkoKTtcclxuICAgICAgICBkYXRhLmNvbmZpcm1hdGlvblZhbGlkID0gZmFsc2U7IFxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uZmlybWF0aW9uLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuICAgICAgICBkYXRhLmNvbmZpcm1hdGlvblZhbGlkID0gdHJ1ZTsgXHJcbiAgICB9XHJcbiAgICB2YWxpZGl0eUxpc3RlbmVyKCk7XHJcbn0pXHJcblxyXG5jb25zdCBoYW5kbGVTdWJtaXNzaW9uID0gKCkgPT4ge1xyXG4gICAgYWxlcnQoJ1lvdXIgaW5mb3JtYXRpb24gaGFzIGJlZW4gc3VibWl0dGVkLicpXHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN1Ym1pc3Npb24pIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG5mb250LWZhbWlseTogVmVyZGFuYTtcXHJcXG5mb250LXNpemU6IDIwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG53aWR0aDogMTAwJTsgXFxyXFxuaGVpZ2h0OiAxMDAlOyBcXHJcXG5hbGlnbi1jb250ZW50OiBjZW50ZXI7IFxcclxcbmJhY2tncm91bmQtY29sb3I6ICMwNGIyZmY7IFxcclxcbn1cXHJcXG4jaW5uZXJDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjY5Y2M7IFxcclxcbn1cXHJcXG5cXHJcXG4jaDFUaXRsZV9jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI3NlY29uZElubmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5maWVsZCB7XFxyXFxudGV4dC1hbGlnbjogbGVmdDsgXFxyXFxuYm9yZGVyOiAxcHggc29saWQgIzU3NTc1NztcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7IFxcclxcbmhlaWdodDogMzBweDsgXFxyXFxubWFyZ2luLXRvcDogMTBweDtcXHJcXG5tYXJnaW4tYm90dG9tOiAxMHB4OyBcXHJcXG53aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yX2ZpZWxkIHtcXHJcXG5jb2xvcjogI2ZmMDAwMDtcXHJcXG5oZWlnaHQ6IDBweDtcXHJcXG5mb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcbiNzdWJtaXRCdXR0b25Db250IHtcXHJcXG5tYXJnaW4tbGVmdDogYXV0bztcXHJcXG5tYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuZGlzcGxheTogYmxvY2s7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbnBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnV0dG9uOmFjdGl2ZSB7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogI2FjYWNhYztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICAgIGNvbG9yOiAjYzFjMWMxO1xcclxcbn1cXHJcXG5cXHJcXG4jZW1haWwge1xcclxcbn1cXHJcXG5cXHJcXG4jY291bnRyeSB7XFxyXFxufVxcclxcblxcclxcbiN6aXBjb2RlIHtcXHJcXG59XFxyXFxuXFxyXFxuI3Bhc3N3b3JkIHtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm1QYXNzd29yZCB7XFxyXFxufVxcclxcblxcclxcbiNlbWFpbDppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY291bnRyeTppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jemlwY29kZTppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFzc3dvcmQ6aW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogcmVkIHNvbGlkIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm1QYXNzd29yZDppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbXlzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxvQkFBb0I7QUFDcEIsZUFBZTtBQUNmOztBQUVBO0FBQ0EsV0FBVztBQUNYLFlBQVk7QUFDWixxQkFBcUI7QUFDckIseUJBQXlCO0FBQ3pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGNBQWM7QUFDZCxXQUFXO0FBQ1gsZUFBZTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG5mb250LWZhbWlseTogVmVyZGFuYTtcXHJcXG5mb250LXNpemU6IDIwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG53aWR0aDogMTAwJTsgXFxyXFxuaGVpZ2h0OiAxMDAlOyBcXHJcXG5hbGlnbi1jb250ZW50OiBjZW50ZXI7IFxcclxcbmJhY2tncm91bmQtY29sb3I6ICMwNGIyZmY7IFxcclxcbn1cXHJcXG4jaW5uZXJDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjY5Y2M7IFxcclxcbn1cXHJcXG5cXHJcXG4jaDFUaXRsZV9jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI3NlY29uZElubmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5maWVsZCB7XFxyXFxudGV4dC1hbGlnbjogbGVmdDsgXFxyXFxuYm9yZGVyOiAxcHggc29saWQgIzU3NTc1NztcXHJcXG5ib3JkZXItcmFkaXVzOiA1cHg7IFxcclxcbmhlaWdodDogMzBweDsgXFxyXFxubWFyZ2luLXRvcDogMTBweDtcXHJcXG5tYXJnaW4tYm90dG9tOiAxMHB4OyBcXHJcXG53aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yX2ZpZWxkIHtcXHJcXG5jb2xvcjogI2ZmMDAwMDtcXHJcXG5oZWlnaHQ6IDBweDtcXHJcXG5mb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcbiNzdWJtaXRCdXR0b25Db250IHtcXHJcXG5tYXJnaW4tbGVmdDogYXV0bztcXHJcXG5tYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuZGlzcGxheTogYmxvY2s7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbnBhZGRpbmctdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnV0dG9uOmFjdGl2ZSB7XFxyXFxuYmFja2dyb3VuZC1jb2xvcjogI2FjYWNhYztcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ1dHRvbjpkaXNhYmxlZCB7XFxyXFxuICAgIGNvbG9yOiAjYzFjMWMxO1xcclxcbn1cXHJcXG5cXHJcXG4jZW1haWwge1xcclxcbn1cXHJcXG5cXHJcXG4jY291bnRyeSB7XFxyXFxufVxcclxcblxcclxcbiN6aXBjb2RlIHtcXHJcXG59XFxyXFxuXFxyXFxuI3Bhc3N3b3JkIHtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm1QYXNzd29yZCB7XFxyXFxufVxcclxcblxcclxcbiNlbWFpbDppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY291bnRyeTppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jemlwY29kZTppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jcGFzc3dvcmQ6aW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogcmVkIHNvbGlkIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbmZpcm1QYXNzd29yZDppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiByZWQgc29saWQgM3B4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcblxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cclxuXHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuXHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG5cclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG5cclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sPlxcclxcbjxoZWFkPlxcclxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXHJcXG4gICAgPHRpdGxlPk5ldyBQcm9qZWN0PC90aXRsZT5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICAgIDxkaXYgaWQ9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJpbm5lckNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwiaDFUaXRsZV9jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDE+U3VibWlzc2lvbiBGb3JtPC9oMT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzZWNvbmRJbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImZpZWxkQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZmllbGRUaXRsZVxcXCI+RW1haWw8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZmllbGRcXFwiIGlkPVxcXCJlbWFpbFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImVtYWlsLWVycm9yXFxcIiBjbGFzcz1cXFwiZXJyb3JfZmllbGRcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiZmllbGRDb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJmaWVsZFRpdGxlXFxcIj5Db3VudHJ5PC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZmllbGRcXFwiIGlkPVxcXCJjb3VudHJ5XFxcIiByZXF1aXJlZCAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiY291bnRyeS1lcnJvclxcXCIgY2xhc3M9XFxcImVycm9yX2ZpZWxkXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImZpZWxkQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZmllbGRUaXRsZVxcXCI+WmlwY29kZTwvaDI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBwYXR0ZXJuID1cXFwiezAsOX1cXFwiIGNsYXNzPVxcXCJmaWVsZFxcXCIgaWQ9XFxcInppcGNvZGVcXFwiIG1pbiA9IFxcXCIxMDAwMFxcXCIgcmVxdWlyZWQgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInppcC1lcnJvclxcXCIgY2xhc3M9XFxcImVycm9yX2ZpZWxkXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImZpZWxkQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZmllbGRUaXRsZVxcXCI+UGFzc3dvcmQ8L2gyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmaWVsZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJwYXNzd29yZC1lcnJvclxcXCIgY2xhc3M9XFxcImVycm9yX2ZpZWxkXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImZpZWxkQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwiZmllbGRUaXRsZVxcXCI+Q29uZmlybSB5b3VyIHBhc3N3b3JkPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZmllbGRcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHJlcXVpcmVkIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJjb25maXJtYXRpb24tZXJyb3JcXFwiIGNsYXNzPVxcXCJlcnJvcl9maWVsZFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdWJtaXRCdXR0b25Db250XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XFxcInN1Ym1pdEJ1dHRvblxcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXlzdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuXHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcblxyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuXHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcblxyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcblxyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG5cclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuXHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG5cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG5cclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgY3NzICs9IG9iai5jc3M7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9IC8vIEZvciBvbGQgSUVcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG5cclxuXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiZGF0YSIsImVtYWlsIiwiY291bnRyeSIsInppcGNvZGUiLCJwYXNzd29yZCIsImNvbmZpcm1hdGlvbiIsImVtYWlsVmFsaWQiLCJjb3VudHJ5VmFsaWQiLCJ6aXBWYWxpZCIsInBhc3NWYWxpZCIsImNvbmZpcm1hdGlvblZhbGlkIiwiaXNWYWxpZCIsInNldEVtYWlsIiwiaXRlbSIsInNldENvdW50cnkiLCJzZXRaaXAiLCJzZXRQYXNzd29yZCIsInNldENvbmZpcm1hdGlvbiIsInZhbGlkaXR5TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc2FibGVkIiwiemlwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidmFsaWRpdHkiLCJ0eXBlTWlzbWF0Y2giLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwicmFuZ2VVbmRlcmZsb3ciLCJwYXR0ZXJuTWlzbWF0Y2giLCJ0b29TaG9ydCIsInZhbHVlIiwiaGFuZGxlU3VibWlzc2lvbiIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==