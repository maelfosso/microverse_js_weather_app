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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial_page_load */ \"./src/initial_page_load.js\");\n\n\n\nconsole.log(\"Here is Weather APP\");\nObject(_initial_page_load__WEBPACK_IMPORTED_MODULE_0__[\"initialLoad\"])();\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initial_page_load.js":
/*!**********************************!*\
  !*** ./src/initial_page_load.js ***!
  \**********************************/
/*! exports provided: initialLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialLoad\", function() { return initialLoad; });\nconst API_KEY = '3f55a3bf69cf3a5883c01ec269cecaba';\nconst API_URL = 'https://api.openweathermap.org/data/2.5/weather';\n\nconst initialLoad = () => {\n  let content = `\n    <div class='header'>\n      <div style=\"width:100%;height:0;padding-bottom:75%;position:relative;\"><iframe src=\"https://giphy.com/embed/26BGDQxDCZDFHW5Ne\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/animation-loop-sun-26BGDQxDCZDFHW5Ne\">via GIPHY</a></p>\n      \n    <h1>Wheather APP</h1>\n    </div>\n    <form class=\"weather_form\" action=\"\" method=\"post\">\n      <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"location\" placeholder=\"Enter your location\">\n          <span class=\"input-group-btn\">\n              <button class=\"btn btn-default\" type=\"submit\">Search</button>\n          </span>\n      </div>\n    </form>\n    <div id=\"result\" class=\"mt-5\">\n      \n    </div>\n  `;\n  document.getElementById('content').innerHTML = content;\n\n  addListener();\n}\n\nconst apiURL = (name) => {\n  return `${API_URL}?q=${name}&appid=${API_KEY}`;\n}\n\nconst iconURL = (icon) => {\n  return `http://openweathermap.org/img/wn/${icon}@2x.png`\n}\n\nconst setResult = (data) => {\n\n  let result = `\n    <h2>${data.town} <small class=\"text-muted\">${data.country}</small></h2>\n    <div class='d-flex flex-row'>\n      <div><img src='${iconURL(data.weather.icon)}' alt='icon'/></div>\n      <div class='weather d-flex flex-column'>\n        <div class='main'>\n          <strong>${data.weather.main}</strong> ${data.weather.description}\n        </div>\n        <div class='d-flex flex-row justify-content-between'>\n          <dl>\n            <dt class=\"\">Humidity</dt>\n            <dd class=\"\">${data.main.humidity} %</dd>\n          </dl>\n          <dl>\n            <dt class=\"\">Pressure</dt>\n            <dd class=\"\">${data.main.pressure}</dd>\n          </dl>\n          <dl>\n            <dt class=\"\">Temperature</dt>\n            <dd class=\"\">${data.main.temp} °C</dd>\n          </dl>\n        </div>\n      </div>\n    </div>\n  `;\n  document.getElementById('result').innerHTML = result;\n}\n\nconst addListener = () => {\n  let form = document.querySelector('form');\n  form.onsubmit = function (submitEvent) {\n    submitEvent.preventDefault();\n\n    var name = document.querySelector('input').value;\n    console.log(name);\n    this.reset();\n\n    fetch(apiURL(name), {\n      mode: 'cors'\n    })\n    .then(function(response) {\n      return response.json();\n    })\n    .then(function(response) {\n      console.log(response);\n      let data = {\n        town: response.name,\n        country: response.sys.country,\n        weather: {\n          main: response.weather[0].main,\n          icon: response.weather[0].icon.split('.')[0],\n          description: response.weather[0].description\n        },\n        main: {\n          humidity: response.main.humidity,\n          pressure: response.main.pressure,\n          temp: response.main.temp\n        }\n      }\n\n      console.log(data);\n\n      setResult(data);\n    });\n  }\n  \n};\n\n\n\n//# sourceURL=webpack:///./src/initial_page_load.js?");

/***/ })

/******/ });