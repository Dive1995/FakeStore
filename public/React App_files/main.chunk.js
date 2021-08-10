(this["webpackJsonpmy-amazon-clone"] = this["webpackJsonpmy-amazon-clone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla:400|Rubik:400);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*,::before,::after{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root{\n  /* fonts */\n  --headingFont: 'Rubik', sans-serif;\n  --bodyFont:'Karla', sans-serif;\n  --smallText: 0.9rem;\n\n  /* colours */\n  --primay-100:#ffe8d8;\n  --primay-200:#ffd2b1;\n  --primay-300:#ffbb8a;\n  --primay-400:#ffa563;\n  --primay-500:#ff8e3c;\n  --primay-600:#cc7230;\n  --primay-700:#995524;\n  --primay-800:#663918;\n  --primay-900:#331c0c;\n\n  /* grey */\n  --gray-50:#F8FAFC;\n  --gray-100:#F1F5F9;\n  --gray-200:#E2E8F0;\n  --gray-300:#CBD5E1;\n  --gray-400:#94A3B8;\n  --gray-500:#64748B;\n  --gray-600:#475569;\n  --gray-700:#334155;\n  --gray-800:#1E293B;\n  --gray-900:#0F172A;\n\n  --bgColor:#eff0f3;\n  --headingColor: #0d0d0d;\n  --paragraphColor:#2a2a2a;\n\n  --white: #fff;\n  --red-light: #f8d7da;\n  --red-dark: #842029;\n  --green-light: #d1e7dd;\n  --green-dark: #0f5132;\n\n\n  \n  /* border radius */\n  --borderRadius-1:0.25rem;\n  --borderRadius-2: 0.375rem;\n  --borderRadius-3: 0.5rem;\n  --borderRadius-4: 0.75rem;\n  --borderRadius-5: 1rem;\n\n  /* others */\n  --letterSpacing:1px;\n  --transition: 0.3s ease-in-out all;\n  --maxWidth:1120px;\n  --fixedWidth:500px;\n\n  /* shadow */\n  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  --shadow-5: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n\nhtml {font-size: 100%;} /*16px*/\n\nbody {\n  /* background: var(--bgColor); */\n  font-family: var(--bodyFont);\n  font-weight: 400;\n  line-height: 1.75;\n  color: var(--gray-900);\n}\n\np {\n  margin-bottom: 1rem;\n  max-width: 40em;\n  color: var(--paragraphColor);\n}\n\nh1, h2, h3, h4, h5 {\n  /* margin: 3rem 0 1.38rem; */\n  margin: 0;\n\n  margin-bottom: 1.38rem;\n  font-family: var(--headingFont);\n  font-weight: 400;\n  line-height: 1.3;\n  text-transform: capitalize;\n  color: var(--headingColor);\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 3.052rem;\n}\n\nh2 {font-size: 2.441rem;}\n\nh3 {font-size: 1.953rem;}\n\nh4 {font-size: 1.563rem;}\n\nh5 {font-size: 1.25rem;}\n\nsmall, .text_small {font-size: var(--smallText)}\n\na{\n  text-decoration: none;\n  color: var(--primay-500);\n}\n\nul{\n  list-style: none;\n  padding: 0;\n  display: flex;\n}\n\nli{\n  margin-right: 20px;\n  cursor: pointer;\n}\n\n/* image */\n\n.img{\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.container{\n  max-width: 600px;\n}\n\n/* buttons */\n\n.btn{\n  cursor: pointer;\n  color: var(--white);\n  background-color: var(--primay-500);\n  border: transparent;\n  border-radius: var(--borderRadius-1);\n  letter-spacing: var(--letterSpacing);\n  padding: 1rem 1.5rem;\n  margin-right: 5px;\n  transition: var(--transition);\n  display: inline-block;\n  font-weight: bold;\n  /* display: block; */\n  /* width: 200px; */\n  /* margin: 0 auto; */\n  /* text-transform: capitalize; */\n}\n\n.btn-outline{\n  cursor: pointer;\n  border: transparent;\n  border-radius: var(--borderRadius-1);\n  letter-spacing: var(--letterSpacing);\n  padding: 1rem 1.5rem;\n  margin-right: 5px;\n  transition: var(--transition);\n  display: inline-block;\n  font-weight: bold;\n  background-color: #fff;\n  border: 1px solid var(--gray-800);\n}\n\n.btn-outline:hover{\n  background-color: var(--gray-900);\n  color: #fff;\n}\n\n.btn:hover{\n  background-color: var(--primay-600);\n  box-shadow: var(--shadow-3);\n}\n\n.btn-hipster{\n  color: var(--primay-500);\n  background-color: var(--primay-200);\n}\n\n.btn-hipster:hover{\n  color: var(--primay-200);\n  background-color: var(--primay-700);\n}\n\n.btn-block{\n  width: 100%;\n}\n\n/* alert */\n\n.alert{\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 1rem;\n  border: transparent;\n  border-radius: var(--borderRadius-1);\n  text-transform: capitalize;\n  box-shadow: var(--shadow-1);\n}\n\n\n.alert-danger{\n  color: var(--red-dark);\n  background-color: var(--red-light);\n}\n\n.alert-success{\n  color: var(--green-dark);\n  background-color: var(--green-light);\n}\n\n/* form */\n\n.form{\n  width: 90vw;\n  max-width: var(--fixedWidth);\n  background-color: var(--white);\n  border-radius: var(--borderRadius-1);\n  box-shadow: var(--shadow-2);\n  padding: 2rem 2.5rem;\n  margin: 3rem auto;\n}\n.form-label{\n  display: block;\n  font-size: var(--smallText);\n  margin-bottom: 0.5rem;\n  text-transform: capitalize;\n  letter-spacing: var(--letterSpacing);\n}\n\n.form-input, .form-textarea{\n  width: 100% ;\n  padding: 0.375rem 0.75rem;\n  border-radius: var(--borderRadius-1);\n  background-color: var(--bgColor);\n  border: 1px solid var(--gray-200);\n}\n\n.form-row{\n  margin-bottom: 1rem;\n}\n\n.form-textarea{\n  height: 7rem;\n  font-family: inherit;\n}\n\n.form-alert{\n  color: var(--red-dark);\n  text-transform: capitalize;\n}\n\n.form input{\n  padding: 0.75rem;\n  font-size: 0.95rem;\n}\n\ntextarea { resize: vertical; } \n\n::placeholder{\n  font-family: inherit;\n  color: var(--gray-400);\n}\n\n/* loading */\n\n@keyframes spinner {\n  to{\n    transform: rotate(360deg);\n  }\n}\n\n.loading{\n  width: 4rem;\n  height: 4rem;\n  border: 5px solid var(--gray-300);\n  border-radius: 50%;\n  border-top-color: var(--primay-400);\n  animation: spinner 0.6s linear infinite;\n  margin: 0 auto;\n}\n\n/* title inderline */\n.title{\n  text-align: center;\n  text-transform: capitalize;\n}\n\n.title-underline{\n  width: 8rem;\n  height: 0.25rem;\n  background-color: var(--primay-500);\n  margin: 0 auto;\n  margin-top: -1rem;\n}\n\n/* Extra -- no need */\n.primary{\n  color: var(--primay-500);\n}", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,kCAAkC;EAClC,8BAA8B;EAC9B,mBAAmB;;EAEnB,YAAY;EACZ,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;;EAEpB,SAAS;EACT,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;;EAElB,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;;EAExB,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,qBAAqB;;;;EAIrB,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,yBAAyB;EACzB,sBAAsB;;EAEtB,WAAW;EACX,mBAAmB;EACnB,kCAAkC;EAClC,iBAAiB;EACjB,kBAAkB;;EAElB,WAAW;EACX,2EAA2E;EAC3E,iFAAiF;EACjF,mFAAmF;EACnF,qFAAqF;EACrF,iDAAiD;AACnD;;AAKA,MAAM,eAAe,CAAC,EAAE,OAAO;;AAE/B;EACE,gCAAgC;EAChC,4BAA4B;EAC5B,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;EAC5B,SAAS;;EAET,sBAAsB;EACtB,+BAA+B;EAC/B,gBAAgB;EAChB,gBAAgB;EAChB,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA,IAAI,mBAAmB,CAAC;;AAExB,IAAI,mBAAmB,CAAC;;AAExB,IAAI,mBAAmB,CAAC;;AAExB,IAAI,kBAAkB,CAAC;;AAEvB,oBAAoB,2BAA2B;;AAE/C;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA,UAAU;;AAEV;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,YAAY;;AAEZ;EACE,eAAe;EACf,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;EACnB,oCAAoC;EACpC,oCAAoC;EACpC,oBAAoB;EACpB,iBAAiB;EACjB,6BAA6B;EAC7B,qBAAqB;EACrB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,oCAAoC;EACpC,oCAAoC;EACpC,oBAAoB;EACpB,iBAAiB;EACjB,6BAA6B;EAC7B,qBAAqB;EACrB,iBAAiB;EACjB,sBAAsB;EACtB,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,WAAW;AACb;;AAEA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;;AAEA;EACE,wBAAwB;EACxB,mCAAmC;AACrC;;AAEA;EACE,wBAAwB;EACxB,mCAAmC;AACrC;;AAEA;EACE,WAAW;AACb;;AAEA,UAAU;;AAEV;EACE,yBAAyB;EACzB,mBAAmB;EACnB,mBAAmB;EACnB,oCAAoC;EACpC,0BAA0B;EAC1B,2BAA2B;AAC7B;;;AAGA;EACE,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,oCAAoC;AACtC;;AAEA,SAAS;;AAET;EACE,WAAW;EACX,4BAA4B;EAC5B,8BAA8B;EAC9B,oCAAoC;EACpC,2BAA2B;EAC3B,oBAAoB;EACpB,iBAAiB;AACnB;AACA;EACE,cAAc;EACd,2BAA2B;EAC3B,qBAAqB;EACrB,0BAA0B;EAC1B,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,oCAAoC;EACpC,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA,WAAW,gBAAgB,EAAE;;AAE7B;EACE,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA,YAAY;;AAEZ;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,kBAAkB;EAClB,mCAAmC;EACnC,uCAAuC;EACvC,cAAc;AAChB;;AAEA,oBAAoB;AACpB;EACE,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,eAAe;EACf,mCAAmC;EACnC,cAAc;EACd,iBAAiB;AACnB;;AAEA,qBAAqB;AACrB;EACE,wBAAwB;AAC1B","sourcesContent":["*,::before,::after{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root{\n  /* fonts */\n  --headingFont: 'Rubik', sans-serif;\n  --bodyFont:'Karla', sans-serif;\n  --smallText: 0.9rem;\n\n  /* colours */\n  --primay-100:#ffe8d8;\n  --primay-200:#ffd2b1;\n  --primay-300:#ffbb8a;\n  --primay-400:#ffa563;\n  --primay-500:#ff8e3c;\n  --primay-600:#cc7230;\n  --primay-700:#995524;\n  --primay-800:#663918;\n  --primay-900:#331c0c;\n\n  /* grey */\n  --gray-50:#F8FAFC;\n  --gray-100:#F1F5F9;\n  --gray-200:#E2E8F0;\n  --gray-300:#CBD5E1;\n  --gray-400:#94A3B8;\n  --gray-500:#64748B;\n  --gray-600:#475569;\n  --gray-700:#334155;\n  --gray-800:#1E293B;\n  --gray-900:#0F172A;\n\n  --bgColor:#eff0f3;\n  --headingColor: #0d0d0d;\n  --paragraphColor:#2a2a2a;\n\n  --white: #fff;\n  --red-light: #f8d7da;\n  --red-dark: #842029;\n  --green-light: #d1e7dd;\n  --green-dark: #0f5132;\n\n\n  \n  /* border radius */\n  --borderRadius-1:0.25rem;\n  --borderRadius-2: 0.375rem;\n  --borderRadius-3: 0.5rem;\n  --borderRadius-4: 0.75rem;\n  --borderRadius-5: 1rem;\n\n  /* others */\n  --letterSpacing:1px;\n  --transition: 0.3s ease-in-out all;\n  --maxWidth:1120px;\n  --fixedWidth:500px;\n\n  /* shadow */\n  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  --shadow-5: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n\n\n@import url('https://fonts.googleapis.com/css?family=Karla:400|Rubik:400');\n\nhtml {font-size: 100%;} /*16px*/\n\nbody {\n  /* background: var(--bgColor); */\n  font-family: var(--bodyFont);\n  font-weight: 400;\n  line-height: 1.75;\n  color: var(--gray-900);\n}\n\np {\n  margin-bottom: 1rem;\n  max-width: 40em;\n  color: var(--paragraphColor);\n}\n\nh1, h2, h3, h4, h5 {\n  /* margin: 3rem 0 1.38rem; */\n  margin: 0;\n\n  margin-bottom: 1.38rem;\n  font-family: var(--headingFont);\n  font-weight: 400;\n  line-height: 1.3;\n  text-transform: capitalize;\n  color: var(--headingColor);\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 3.052rem;\n}\n\nh2 {font-size: 2.441rem;}\n\nh3 {font-size: 1.953rem;}\n\nh4 {font-size: 1.563rem;}\n\nh5 {font-size: 1.25rem;}\n\nsmall, .text_small {font-size: var(--smallText)}\n\na{\n  text-decoration: none;\n  color: var(--primay-500);\n}\n\nul{\n  list-style: none;\n  padding: 0;\n  display: flex;\n}\n\nli{\n  margin-right: 20px;\n  cursor: pointer;\n}\n\n/* image */\n\n.img{\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.container{\n  max-width: 600px;\n}\n\n/* buttons */\n\n.btn{\n  cursor: pointer;\n  color: var(--white);\n  background-color: var(--primay-500);\n  border: transparent;\n  border-radius: var(--borderRadius-1);\n  letter-spacing: var(--letterSpacing);\n  padding: 1rem 1.5rem;\n  margin-right: 5px;\n  transition: var(--transition);\n  display: inline-block;\n  font-weight: bold;\n  /* display: block; */\n  /* width: 200px; */\n  /* margin: 0 auto; */\n  /* text-transform: capitalize; */\n}\n\n.btn-outline{\n  cursor: pointer;\n  border: transparent;\n  border-radius: var(--borderRadius-1);\n  letter-spacing: var(--letterSpacing);\n  padding: 1rem 1.5rem;\n  margin-right: 5px;\n  transition: var(--transition);\n  display: inline-block;\n  font-weight: bold;\n  background-color: #fff;\n  border: 1px solid var(--gray-800);\n}\n\n.btn-outline:hover{\n  background-color: var(--gray-900);\n  color: #fff;\n}\n\n.btn:hover{\n  background-color: var(--primay-600);\n  box-shadow: var(--shadow-3);\n}\n\n.btn-hipster{\n  color: var(--primay-500);\n  background-color: var(--primay-200);\n}\n\n.btn-hipster:hover{\n  color: var(--primay-200);\n  background-color: var(--primay-700);\n}\n\n.btn-block{\n  width: 100%;\n}\n\n/* alert */\n\n.alert{\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 1rem;\n  border: transparent;\n  border-radius: var(--borderRadius-1);\n  text-transform: capitalize;\n  box-shadow: var(--shadow-1);\n}\n\n\n.alert-danger{\n  color: var(--red-dark);\n  background-color: var(--red-light);\n}\n\n.alert-success{\n  color: var(--green-dark);\n  background-color: var(--green-light);\n}\n\n/* form */\n\n.form{\n  width: 90vw;\n  max-width: var(--fixedWidth);\n  background-color: var(--white);\n  border-radius: var(--borderRadius-1);\n  box-shadow: var(--shadow-2);\n  padding: 2rem 2.5rem;\n  margin: 3rem auto;\n}\n.form-label{\n  display: block;\n  font-size: var(--smallText);\n  margin-bottom: 0.5rem;\n  text-transform: capitalize;\n  letter-spacing: var(--letterSpacing);\n}\n\n.form-input, .form-textarea{\n  width: 100% ;\n  padding: 0.375rem 0.75rem;\n  border-radius: var(--borderRadius-1);\n  background-color: var(--bgColor);\n  border: 1px solid var(--gray-200);\n}\n\n.form-row{\n  margin-bottom: 1rem;\n}\n\n.form-textarea{\n  height: 7rem;\n  font-family: inherit;\n}\n\n.form-alert{\n  color: var(--red-dark);\n  text-transform: capitalize;\n}\n\n.form input{\n  padding: 0.75rem;\n  font-size: 0.95rem;\n}\n\ntextarea { resize: vertical; } \n\n::placeholder{\n  font-family: inherit;\n  color: var(--gray-400);\n}\n\n/* loading */\n\n@keyframes spinner {\n  to{\n    transform: rotate(360deg);\n  }\n}\n\n.loading{\n  width: 4rem;\n  height: 4rem;\n  border: 5px solid var(--gray-300);\n  border-radius: 50%;\n  border-top-color: var(--primay-400);\n  animation: spinner 0.6s linear infinite;\n  margin: 0 auto;\n}\n\n/* title inderline */\n.title{\n  text-align: center;\n  text-transform: capitalize;\n}\n\n.title-underline{\n  width: 8rem;\n  height: 0.25rem;\n  background-color: var(--primay-500);\n  margin: 0 auto;\n  margin-top: -1rem;\n}\n\n/* Extra -- no need */\n.primary{\n  color: var(--primay-500);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/style.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n:root{\n    /* fonts */\n    --headingFont: 'Rubik', sans-serif;\n    --bodyFont:'Karla', sans-serif;\n    --smallText: 0.9rem;\n  \n    /* colours */\n    --primay-100:#ffe8d8;\n    --primay-200:#ffd2b1;\n    --primay-300:#ffbb8a;\n    --primay-400:#ffa563;\n    --primay-500:#ff8e3c;\n    --primay-600:#cc7230;\n    --primay-700:#995524;\n    --primay-800:#663918;\n    --primay-900:#331c0c;\n  \n    /* grey */\n    --gray-50:#F8FAFC;\n    --gray-100:#F1F5F9;\n    --gray-200:#E2E8F0;\n    --gray-300:#CBD5E1;\n    --gray-400:#94A3B8;\n    --gray-500:#64748B;\n    --gray-600:#475569;\n    --gray-700:#334155;\n    --gray-800:#1E293B;\n    --gray-900:#0F172A;\n  \n    --bgColor:#eff0f3;\n    --headingColor: #0d0d0d;\n    --paragraphColor:#2a2a2a;\n  \n    --white: #fff;\n    --red-light: #f8d7da;\n    --red-dark: #842029;\n    --green-light: #d1e7dd;\n    --green-dark: #0f5132;\n  \n  \n    \n    /* border radius */\n    --borderRadius-1:0.25rem;\n    --borderRadius-2: 0.375rem;\n    --borderRadius-3: 0.5rem;\n    --borderRadius-4: 0.75rem;\n    --borderRadius-5: 1rem;\n  \n    /* others */\n    --letterSpacing:1px;\n    --transition: 0.3s ease-in-out all;\n    --maxWidth:1120px;\n    --fixedWidth:500px;\n  \n    /* shadow */\n    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n    --shadow-5: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\n    --margin-default:3rem;\n}\n\n/* app */\n.App{\n    position: relative;\n}\n\n/* navbar */\n.nav-container{\n    position: fixed;\n    /* background-color: #fff; */\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 100;\n    box-shadow: var(--shadow-2);\n}\n.navbar{\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    padding: 0.75rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fff;\n    z-index: 99;\n}\n\n.nav-logo h2{\n    margin: 0;\n}\n\n.nav-menu li a{\n    color: var(--gray-800);\n}\n\n/* header */\n\n.header{\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    margin-top: 75px;\n}\n\n.header .img{\n    max-height: 400px;\n}\n\n/* Trending now */\n.trending{\n    margin: var(--margin-default) auto;\n    max-width: var(--maxWidth);\n}\n\n/* card */\n.cards{\n    display: flex;\n    flex-wrap: wrap;\n    margin: var(--margin-default) 0;\n}\n\n.card{\n    background: #fff;\n    border-radius: var(--borderRadius-2);\n    box-shadow: var(--shadow-2);\n    display: flex;\n    grid-gap: 5px;\n    gap: 5px;\n    flex-direction: column;\n    width: 250px;\n    height: auto;\n    overflow: hidden;\n    margin: 10px;\n    padding-top: 1rem;\n}\n\n.card .card-image{\n    padding: 0.9rem 1.25rem;\n    margin: 0 auto;\n    /* max-width: 150px; */\n    /* min-height: 200px; */\n    flex-grow: 0;\n    flex-shrink: 0;\n    /* flex-basis: 150px; */\n    /* max-height: 200px; */\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    position: relative;\n    height: 160px; \n    width: 160px; \n}\n\n.card-image img{\n    max-height: 100%;\n    max-width: 100%;\n    width: auto;\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n.card-content{\n    padding: 0.5rem 1rem;\n    \n}\n\n.card-gap{\n    flex-grow: 1;\n}\n\n.card .card-title{\n    text-align: center;\n    font-size: 0.9rem;\n    font-weight: 700;\n}\n\n.card .card-desc{\n    font-size: 0.9rem;\n    text-align: center;\n    color: var(--primay-500);\n}\n\n/* featured */\n\n.feature{\n    margin: 0 auto;\n    max-width: var(--maxWidth);\n}\n\n/* category */\n.category-tabs{\n    display: flex;\n    justify-content: center;\n    margin-top: var(--margin-default);\n    /* max-width: var(--maxWidth); */\n}\n\n.category{\n    display: inline-block;\n    margin-right: 1rem;\n}\n\n.category a{\n    color: var(--gray-700);\n    cursor: pointer;\n}\n\n.category .title-underline {\n    margin-top: 0;\n    width: 2rem;\n    /* text-decoration-thickness: from-font; */\n    height: 0.125rem;\n}\n\n/***************************************************************/\n\n/* Products */\n.products , .single-product{\n    margin: 0 auto;\n    margin-top: 95px;\n    max-width: var(--maxWidth);\n}\n\n.product-container{\n    display: grid;\n    grid-template-columns: repeat(4 , 1fr);\n}\n\n/* main content */\n.product-main-content{\n    /* background-color: rgb(189, 224, 189); */\n    grid-column-start: 2;\n    grid-column-end: 5;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n.main-product{\n    /* margin-bottom: 1rem; */\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    padding: 1rem 2rem;\n    grid-gap: 2rem;\n    gap: 2rem;\n      /* border-left: 1px solid var(--gray-500); */\n    border-bottom: 1px solid var(--gray-300);\n}\n\n.main-product:last-child{\n    border-bottom:transparent;\n}\n\n.main-product .image{\n    max-width: 200px;\n}\n\n.main-product .image img{\n    width: 100%;\n}\n\n.main-product .content{\n    grid-column-start: 2;\n    grid-column-end: 6;\n}\n\n.main-product .content h5,p,a{\n    margin:0.5rem 0;\n}\n\n.content .see-product{\n    color: var(--gray-600);\n    margin:0 ;\n}\n\n.main-product .content h5{\n    color: var(--primay-400);\n}\n\n.main-product .content p{\n    height: 3rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 1.5rem;\n}\n\n\n\n/* sidebar   */\n.sidebar{\n    padding: 1rem ;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* border-right: 1px solid var(--gray-400); */\n    /* max-height: 600px; */\n}\n\n.sidebar-category{\n    margin-bottom: 30px;\n}\n\n.sidebar-category h5{\n    font-weight: bold;\n}\n\n.sidebar-category ul, .sidebar-price ul{\n    display: flex;\n    flex-direction: column;\n    text-transform: capitalize;\n    \n}\n\n.sidebar-category a, .sidebar-price a{\n    color: var(--gray-700);   \n}\n\n/* single product */\n.single-product{\n    margin-top: 7rem;\n}\n\n.single-product-item{\n    margin-top: 5rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 1rem;\n    gap: 1rem;\n}\n\n.single-image{\n    /* background-color: green; */\n}\n\n.single-image img{\n    width: 100%;\n}\n\n.single-details{\n    grid-column-start: 2;\n    grid-column-end: 4;\n    padding: 2rem;\n    /* background-color: red; */\n}\n\n.single-details .price{\n   color: var(--primay-500);\n   font-weight: bold;\n}\n\n.back a{\n    color: var(--gray-700);\n}", "",{"version":3,"sources":["webpack://src/style.css"],"names":[],"mappings":";AACA;IACI,UAAU;IACV,kCAAkC;IAClC,8BAA8B;IAC9B,mBAAmB;;IAEnB,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;;IAEpB,SAAS;IACT,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;;IAElB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;;IAExB,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;;;;IAIrB,kBAAkB;IAClB,wBAAwB;IACxB,0BAA0B;IAC1B,wBAAwB;IACxB,yBAAyB;IACzB,sBAAsB;;IAEtB,WAAW;IACX,mBAAmB;IACnB,kCAAkC;IAClC,iBAAiB;IACjB,kBAAkB;;IAElB,WAAW;IACX,2EAA2E;IAC3E,iFAAiF;IACjF,mFAAmF;IACnF,qFAAqF;IACrF,iDAAiD;;IAEjD,qBAAqB;AACzB;;AAEA,QAAQ;AACR;IACI,kBAAkB;AACtB;;AAEA,WAAW;AACX;IACI,eAAe;IACf,4BAA4B;IAC5B,OAAO;IACP,QAAQ;IACR,MAAM;IACN,YAAY;IACZ,2BAA2B;AAC/B;AACA;IACI,0BAA0B;IAC1B,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,WAAW;;AAEX;IACI,0BAA0B;IAC1B,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,iBAAiB;AACjB;IACI,kCAAkC;IAClC,0BAA0B;AAC9B;;AAEA,SAAS;AACT;IACI,aAAa;IACb,eAAe;IACf,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,2BAA2B;IAC3B,aAAa;IACb,aAAQ;IAAR,QAAQ;IACR,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,uBAAuB;IACvB,sBAAsB;IACtB,4BAA4B;IAC5B,kCAAkC;IAClC,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,OAAO;IACP,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,oBAAoB;;AAExB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA,aAAa;;AAEb;IACI,cAAc;IACd,0BAA0B;AAC9B;;AAEA,aAAa;AACb;IACI,aAAa;IACb,uBAAuB;IACvB,iCAAiC;IACjC,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,0CAA0C;IAC1C,gBAAgB;AACpB;;AAEA,gEAAgE;;AAEhE,aAAa;AACb;IACI,cAAc;IACd,gBAAgB;IAChB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;;AAEA,iBAAiB;AACjB;IACI,0CAA0C;IAC1C,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;;;AAGA;IACI,yBAAyB;IACzB,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,cAAS;IAAT,SAAS;MACP,4CAA4C;IAC9C,wCAAwC;AAC5C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;AACvB;;;;AAIA,cAAc;AACd;IACI,cAAc;IACd,eAAe;IACf,MAAM;IACN,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,6CAA6C;IAC7C,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,0BAA0B;;AAE9B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA,mBAAmB;AACnB;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qCAAqC;IACrC,cAAS;IAAT,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,2BAA2B;AAC/B;;AAEA;GACG,wBAAwB;GACxB,iBAAiB;AACpB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["\n:root{\n    /* fonts */\n    --headingFont: 'Rubik', sans-serif;\n    --bodyFont:'Karla', sans-serif;\n    --smallText: 0.9rem;\n  \n    /* colours */\n    --primay-100:#ffe8d8;\n    --primay-200:#ffd2b1;\n    --primay-300:#ffbb8a;\n    --primay-400:#ffa563;\n    --primay-500:#ff8e3c;\n    --primay-600:#cc7230;\n    --primay-700:#995524;\n    --primay-800:#663918;\n    --primay-900:#331c0c;\n  \n    /* grey */\n    --gray-50:#F8FAFC;\n    --gray-100:#F1F5F9;\n    --gray-200:#E2E8F0;\n    --gray-300:#CBD5E1;\n    --gray-400:#94A3B8;\n    --gray-500:#64748B;\n    --gray-600:#475569;\n    --gray-700:#334155;\n    --gray-800:#1E293B;\n    --gray-900:#0F172A;\n  \n    --bgColor:#eff0f3;\n    --headingColor: #0d0d0d;\n    --paragraphColor:#2a2a2a;\n  \n    --white: #fff;\n    --red-light: #f8d7da;\n    --red-dark: #842029;\n    --green-light: #d1e7dd;\n    --green-dark: #0f5132;\n  \n  \n    \n    /* border radius */\n    --borderRadius-1:0.25rem;\n    --borderRadius-2: 0.375rem;\n    --borderRadius-3: 0.5rem;\n    --borderRadius-4: 0.75rem;\n    --borderRadius-5: 1rem;\n  \n    /* others */\n    --letterSpacing:1px;\n    --transition: 0.3s ease-in-out all;\n    --maxWidth:1120px;\n    --fixedWidth:500px;\n  \n    /* shadow */\n    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n    --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n    --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n    --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n    --shadow-5: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\n    --margin-default:3rem;\n}\n\n/* app */\n.App{\n    position: relative;\n}\n\n/* navbar */\n.nav-container{\n    position: fixed;\n    /* background-color: #fff; */\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 100;\n    box-shadow: var(--shadow-2);\n}\n.navbar{\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    padding: 0.75rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fff;\n    z-index: 99;\n}\n\n.nav-logo h2{\n    margin: 0;\n}\n\n.nav-menu li a{\n    color: var(--gray-800);\n}\n\n/* header */\n\n.header{\n    max-width: var(--maxWidth);\n    margin: 0 auto;\n    margin-top: 75px;\n}\n\n.header .img{\n    max-height: 400px;\n}\n\n/* Trending now */\n.trending{\n    margin: var(--margin-default) auto;\n    max-width: var(--maxWidth);\n}\n\n/* card */\n.cards{\n    display: flex;\n    flex-wrap: wrap;\n    margin: var(--margin-default) 0;\n}\n\n.card{\n    background: #fff;\n    border-radius: var(--borderRadius-2);\n    box-shadow: var(--shadow-2);\n    display: flex;\n    gap: 5px;\n    flex-direction: column;\n    width: 250px;\n    height: auto;\n    overflow: hidden;\n    margin: 10px;\n    padding-top: 1rem;\n}\n\n.card .card-image{\n    padding: 0.9rem 1.25rem;\n    margin: 0 auto;\n    /* max-width: 150px; */\n    /* min-height: 200px; */\n    flex-grow: 0;\n    flex-shrink: 0;\n    /* flex-basis: 150px; */\n    /* max-height: 200px; */\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    position: relative;\n    height: 160px; \n    width: 160px; \n}\n\n.card-image img{\n    max-height: 100%;\n    max-width: 100%;\n    width: auto;\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n.card-content{\n    padding: 0.5rem 1rem;\n    \n}\n\n.card-gap{\n    flex-grow: 1;\n}\n\n.card .card-title{\n    text-align: center;\n    font-size: 0.9rem;\n    font-weight: 700;\n}\n\n.card .card-desc{\n    font-size: 0.9rem;\n    text-align: center;\n    color: var(--primay-500);\n}\n\n/* featured */\n\n.feature{\n    margin: 0 auto;\n    max-width: var(--maxWidth);\n}\n\n/* category */\n.category-tabs{\n    display: flex;\n    justify-content: center;\n    margin-top: var(--margin-default);\n    /* max-width: var(--maxWidth); */\n}\n\n.category{\n    display: inline-block;\n    margin-right: 1rem;\n}\n\n.category a{\n    color: var(--gray-700);\n    cursor: pointer;\n}\n\n.category .title-underline {\n    margin-top: 0;\n    width: 2rem;\n    /* text-decoration-thickness: from-font; */\n    height: 0.125rem;\n}\n\n/***************************************************************/\n\n/* Products */\n.products , .single-product{\n    margin: 0 auto;\n    margin-top: 95px;\n    max-width: var(--maxWidth);\n}\n\n.product-container{\n    display: grid;\n    grid-template-columns: repeat(4 , 1fr);\n}\n\n/* main content */\n.product-main-content{\n    /* background-color: rgb(189, 224, 189); */\n    grid-column-start: 2;\n    grid-column-end: 5;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n}\n\n\n.main-product{\n    /* margin-bottom: 1rem; */\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    padding: 1rem 2rem;\n    gap: 2rem;\n      /* border-left: 1px solid var(--gray-500); */\n    border-bottom: 1px solid var(--gray-300);\n}\n\n.main-product:last-child{\n    border-bottom:transparent;\n}\n\n.main-product .image{\n    max-width: 200px;\n}\n\n.main-product .image img{\n    width: 100%;\n}\n\n.main-product .content{\n    grid-column-start: 2;\n    grid-column-end: 6;\n}\n\n.main-product .content h5,p,a{\n    margin:0.5rem 0;\n}\n\n.content .see-product{\n    color: var(--gray-600);\n    margin:0 ;\n}\n\n.main-product .content h5{\n    color: var(--primay-400);\n}\n\n.main-product .content p{\n    height: 3rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 1.5rem;\n}\n\n\n\n/* sidebar   */\n.sidebar{\n    padding: 1rem ;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* border-right: 1px solid var(--gray-400); */\n    /* max-height: 600px; */\n}\n\n.sidebar-category{\n    margin-bottom: 30px;\n}\n\n.sidebar-category h5{\n    font-weight: bold;\n}\n\n.sidebar-category ul, .sidebar-price ul{\n    display: flex;\n    flex-direction: column;\n    text-transform: capitalize;\n    \n}\n\n.sidebar-category a, .sidebar-price a{\n    color: var(--gray-700);   \n}\n\n/* single product */\n.single-product{\n    margin-top: 7rem;\n}\n\n.single-product-item{\n    margin-top: 5rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1rem;\n}\n\n.single-image{\n    /* background-color: green; */\n}\n\n.single-image img{\n    width: 100%;\n}\n\n.single-details{\n    grid-column-start: 2;\n    grid-column-end: 4;\n    padding: 2rem;\n    /* background-color: red; */\n}\n\n.single-details .price{\n   color: var(--primay-500);\n   font-weight: bold;\n}\n\n.back a{\n    color: var(--gray-700);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _FakeStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FakeStore */ "./src/FakeStore.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/Navbar.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./src/Sidebar.js");
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Products */ "./src/Products.js");
/* harmony import */ var _TrendingNow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrendingNow */ "./src/TrendingNow.js");
/* harmony import */ var _FeaturedProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeaturedProducts */ "./src/FeaturedProducts.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_productSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux/productSlice */ "./src/redux/productSlice.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SingleProduct */ "./src/SingleProduct.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();















const url = "https://fakestoreapi.com/products";

function App() {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    dispatch(Object(_redux_productSlice__WEBPACK_IMPORTED_MODULE_8__["getProducts"])(url));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["BrowserRouter"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "App",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
          exact: true,
          path: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Home__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
          path: "/products",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Products__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
          path: "/product/:id",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_SingleProduct__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(App, "rAh3tY+Iv6hWC9AI4Dm+rCbkwNE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"]];
});

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Categories.js":
/*!***************************!*\
  !*** ./src/Categories.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/Categories.js";



function Categories({
  category,
  handleCategories,
  activeTab
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "category title",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
      onClick: () => handleCategories(category),
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: activeTab === category ? 'title-underline' : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c;

__webpack_require__.$Refresh$.register(_c, "Categories");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/FakeStore.js":
/*!**************************!*\
  !*** ./src/FakeStore.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_productSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/productSlice */ "./src/redux/productSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/FakeStore.js",
    _s = __webpack_require__.$Refresh$.signature();



 // const url = 'https://fakestoreapi.com/products';



function FakeStore() {
  _s();

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.products);
  console.log(products);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_productSlice__WEBPACK_IMPORTED_MODULE_1__["getProducts"])());
  }, [dispatch]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(FakeStore, "uEB8r4sRk93KWVY0WsleMFy/RLI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = FakeStore;
/* harmony default export */ __webpack_exports__["default"] = (FakeStore);

var _c;

__webpack_require__.$Refresh$.register(_c, "FakeStore");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/FeaturedProducts.js":
/*!*********************************!*\
  !*** ./src/FeaturedProducts.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem */ "./src/ProductItem.js");
/* harmony import */ var _redux_productSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/productSlice */ "./src/redux/productSlice.js");
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Categories */ "./src/Categories.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/FeaturedProducts.js",
    _s = __webpack_require__.$Refresh$.signature();









function FeaturedProducts() {
  _s();

  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.products.products);
  const isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.products.status);
  const categories = [...new Set(products.map(item => item.category))];
  const [activeTab, setActiveTab] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // const [categories,setCategories] = useState(allCategories);

  const [categorizedProducts, setCategorizedProducts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // console.log(categories[0]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    filterProducts(categories[0]);
    setActiveTab(categories[0]);
  }, [products]);

  const filterProducts = category => {
    const prod = products.filter(product => product.category === category);
    setCategorizedProducts(prod);
  };

  const handleCategories = category => {
    filterProducts(category);
    setActiveTab(category);
  };

  if (isLoading === "loading") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "feature",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "title",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h4", {
        children: "Featured Products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "title-underline"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "category-tabs",
        children: categories.map(category => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_Categories__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activeTab: activeTab,
          handleCategories: handleCategories,
          category: category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 49
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "cards",
        children: categorizedProducts.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], { ...product
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 57
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(FeaturedProducts, "SAx6PE/Dfsy2QFFVrzZJm7By4zw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = FeaturedProducts;
/* harmony default export */ __webpack_exports__["default"] = (FeaturedProducts);

var _c;

__webpack_require__.$Refresh$.register(_c, "FeaturedProducts");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/Header.js";



function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: "./bg1.jpeg",
      alt: "",
      className: "img"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeaturedProducts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedProducts */ "./src/FeaturedProducts.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _TrendingNow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrendingNow */ "./src/TrendingNow.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/Home.js";






function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_TrendingNow__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_FeaturedProducts__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

__webpack_require__.$Refresh$.register(_c, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/MainProductList.js":
/*!********************************!*\
  !*** ./src/MainProductList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/MainProductList.js";




function MainProductList({
  id,
  price,
  title,
  description,
  image
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "main-product",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "image",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
        src: image,
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: `/product/${id}`,
        className: "see-product",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h5", {
        children: ["$ ", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: `/product/${id}`,
        className: "see-product",
        children: "See product > "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, id, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = MainProductList;
/* harmony default export */ __webpack_exports__["default"] = (MainProductList);

var _c;

__webpack_require__.$Refresh$.register(_c, "MainProductList");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Navbar.js":
/*!***********************!*\
  !*** ./src/Navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/Navbar.js";




function Navbar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "nav-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "navbar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "nav-logo",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h2", {
          children: ["Fake", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "primary",
            children: "Store"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
          className: "nav-menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            className: "list",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              to: "/",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            className: "list",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              to: "/products",
              children: "Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            className: "list",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
            className: "list",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
              children: "About us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "nav-login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
          className: "login",
          href: "#",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Navbar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/ProductItem.js":
/*!****************************!*\
  !*** ./src/ProductItem.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/ProductItem.js";



function ProductItem({
  id,
  title,
  image,
  price,
  description,
  category
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "product-item card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "card-image",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: image,
        alt: title,
        className: "img"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "card-gap"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "card-content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "card-title",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "card-desc",
        children: ["$ ", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, id, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);

var _c;

__webpack_require__.$Refresh$.register(_c, "ProductItem");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Products.js":
/*!*************************!*\
  !*** ./src/Products.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainProductList */ "./src/MainProductList.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar */ "./src/Sidebar.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/Products.js",
    _s = __webpack_require__.$Refresh$.signature();







function Products() {
  _s();

  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.products.products); // console.log(products);

  const categories = [...new Set(products.map(item => item.category))];
  const [categorizedProducts, setcategorizedProducts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [currentCategory, setCurrentCatogory] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.products.status);

  const setProducts = category => {
    const prod = products.filter(item => item.category === category);
    setcategorizedProducts(prod);
    setCurrentCatogory(category);
  };

  const filterProductsByPrice = (lower, upper) => {
    const filteredProd = products.filter(prod => prod.price <= upper && prod.price > lower && prod.category === currentCategory);
    setcategorizedProducts(filteredProd);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setProducts(categories[0]);
  }, [products]);

  const handleCategories = category => {
    setProducts(category);
  }; // console.log(categorizedProducts);
  // if(products.length < 1){
  //     return <div product-loading>
  //         <div className="loading">sfd</div>
  //     </div>
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "products",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "product-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "product-sidebar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
          filterProductsByPrice: filterProductsByPrice,
          categories: categories,
          handleCategories: handleCategories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "product-main-content",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
            children: currentCategory
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this), products.length < 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "loading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 49
          }, this), categorizedProducts.length < 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
            children: "No products found"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 60
          }, this), products.length > 1 && categorizedProducts && categorizedProducts.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_MainProductList__WEBPACK_IMPORTED_MODULE_1__["default"], { ...item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 104
          }, this))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

_s(Products, "lObNpKpmp3aXddmE4WqybqLEszA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = Products;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c;

__webpack_require__.$Refresh$.register(_c, "Products");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Sidebar.js":
/*!************************!*\
  !*** ./src/Sidebar.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/Sidebar.js";



function Sidebar({
  categories,
  handleCategories,
  filterProductsByPrice
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "sidebar",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "sidebar-category",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
        children: "Categories"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        children: categories.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            onClick: () => handleCategories(item),
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 49
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 45
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "sidebar-price",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
        children: "Price"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            onClick: () => filterProductsByPrice(0, 100),
            children: "less than $100"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            onClick: () => filterProductsByPrice(100, 200),
            children: "$100 - $200"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            onClick: () => filterProductsByPrice(200, 300),
            children: "$200 - $300"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            onClick: () => filterProductsByPrice(300, 400),
            children: "$300 - $400"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            onClick: () => filterProductsByPrice(400, 10000),
            children: "above $400"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = Sidebar;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Sidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/SingleProduct.js":
/*!******************************!*\
  !*** ./src/SingleProduct.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/SingleProduct.js",
    _s = __webpack_require__.$Refresh$.signature();






function SingleProduct() {
  _s();

  const {
    id
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.products.products);
  const product = products.filter(prod => prod.id == id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "single-product",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "back",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
        onClick: () => history.goBack(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "feather feather-arrow-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("line", {
            x1: "19",
            y1: "12",
            x2: "5",
            y2: "12"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 265
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("polyline", {
            points: "12 19 5 12 12 5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 309
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 49
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), product.map(item => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "single-product-item",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "single-image",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
            src: item.image,
            alt: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "single-details",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
            className: "price",
            children: ["$ ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
            className: "btn",
            children: "Add to cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 24
      }, this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_s(SingleProduct, "nXoxSPMuaP8sqqzGGxjO9fSJeos=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = SingleProduct;
/* harmony default export */ __webpack_exports__["default"] = (SingleProduct);

var _c;

__webpack_require__.$Refresh$.register(_c, "SingleProduct");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/TrendingNow.js":
/*!****************************!*\
  !*** ./src/TrendingNow.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem */ "./src/ProductItem.js");
/* harmony import */ var _redux_productSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/productSlice */ "./src/redux/productSlice.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/TrendingNow.js",
    _s = __webpack_require__.$Refresh$.signature();








function TrendingNow() {
  _s();

  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.products.products);
  const isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.products.status);
  const trendingProducts = products.filter(product => product.id % 2 === 0 && product.id < 10);
  console.log(trendingProducts); // if(isLoading === "loading"){
  //     return <div className="loading"></div>
  // }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "trending",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "title",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
        children: "Trending now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "title-underline"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "trending-products cards",
      children: trendingProducts.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], { ...product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 50
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_s(TrendingNow, "IPYPwBSpnvQtuBFf6+ZFWh8YjLg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = TrendingNow;
/* harmony default export */ __webpack_exports__["default"] = (TrendingNow);

var _c;

__webpack_require__.$Refresh$.register(_c, "TrendingNow");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/index.js";








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["store"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/productSlice.js":
/*!***********************************!*\
  !*** ./src/redux/productSlice.js ***!
  \***********************************/
/*! exports provided: getProducts, getProductCategory, getLimittedProducts, productSlice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCategory", function() { return getProductCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLimittedProducts", function() { return getLimittedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productSlice", function() { return productSlice; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

 // const url = 'https://fakestoreapi.com/products'

const getProducts = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('products/getProducts', async url => {
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      let msg = `Error ${resp.status} occured`;
      throw new Error(msg);
    } else if (resp.status == 522) {
      let msg = "Connection Time Out, Please try again later.";
      throw new Error(msg);
    }

    const products = await resp.json();
    return products;
  } catch (error) {
    console.log(error);
  }
});
const getProductCategory = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('products/getProductCategory', async (url, category) => {
  try {
    const resp = await fetch(`${url}/category/${category}`);

    if (!resp.ok) {
      throw new Error(`Error occured ${resp.status}`);
    }

    const result = await resp.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});
const getLimittedProducts = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])("products/getLimittedProducts", async (url, limitNumber) => {
  try {
    const resp = await fetch(`${url}?limit=${limitNumber}`);
    const result = await resp.json();
    return result;
  } catch (err) {
    console.log(err);
  }
});
const productSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "products",
  initialState: {
    products: [],
    status: null
  },
  // reducers:{
  // },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      // return action.payload.products;
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      // return action.payload.products;
      state.status = "success";
      state.products.push(...action.payload);
    } // [getProductCategory.pending] : (state, action) => {
    //     state.status = 'loading'
    // },
    // [getProductCategory.fulfilled] : (state, action) => {
    //     state.status = "success"
    //     state.category.push(...action.payload)
    //     // return action.payload.result
    // },
    // [getLimittedProducts.pending] : (state, action) => {
    //     state.status = "loading";
    // },
    // [getLimittedProducts.fulfilled] : (state, action) => {
    //     state.limitted.push(action.payload);
    // }

  }
}); // export const {getProducts} = productSlice.actions;

/* harmony default export */ __webpack_exports__["default"] = (productSlice.reducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _productSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productSlice */ "./src/redux/productSlice.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    products: _productSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/dive95/Documents/All-React-Projects/my-amazon-clone/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/dive95/Documents/All-React-Projects/my-amazon-clone/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/dive95/Documents/All-React-Projects/my-amazon-clone/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/dive95/Documents/All-React-Projects/my-amazon-clone/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map