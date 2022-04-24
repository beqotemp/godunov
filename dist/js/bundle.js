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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_temporary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/temporary */ "./src/js/scripts/temporary.js");
/* harmony import */ var _scripts_temporary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_temporary__WEBPACK_IMPORTED_MODULE_0__);
// JS
// import './scripts/simblebar.js'
// import './scripts/glide.js'
// import './scripts/range-slider.js'
// import './scripts/sticky.js'
// import './scripts/slick-slider'
// import './scripts/azazlyst'
// import "./scripts/menu";
// import "./scripts/scrollbar";
// import "./scripts/slider";
// import "./scripts/tabs";
// import "./scripts/menu-scroll"


// // Vue
// import Vue from 'vue/dist/vue.common.dev';
// import VCalendar from 'v-calendar/lib/components/date-picker.umd';
// new Vue({
//     el:'#app',
//     data:{
//     	date: '',
//     },
//     components: {
//         VCalendar
//     }
// })


/***/ }),

/***/ "./src/js/scripts/temporary.js":
/*!*************************************!*\
  !*** ./src/js/scripts/temporary.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// //menu
document.getElementById('menu-cross').addEventListener("click", ()=>{
    document.getElementById("menu").classList.remove('active')
})
document.getElementById('menu-caller').addEventListener("click",()=>{
    document.getElementById("menu").classList.add('active')
})
// cookies
// window.addEventListener("load",()=>{
//     setTimeout(()=>{
//         document.getElementById("cookies").classList.add("show")
//     },2000)    
//     document.getElementById("close-cookies").addEventListener("click", ()=>{
//         document.getElementById("cookies").classList.remove("show")
//     })
// })


// modals
document.getElementById("modal-close").addEventListener('click', ()=>{
    document.getElementById("site").classList.remove("overflow")
    document.getElementById("modal").className = '';
})
document.getElementById("special-modal-close").addEventListener('click', ()=>{
    document.getElementById("site").classList.remove("overflow")
    document.getElementById("special-modal").className = '';
})
// Portfolios 
let fullProjectName = ['Технокультура', 'Eventoutlet', 'Rocket Shina','ПСК','Balkan LPG Market','Hamcore']
let PortfolioClasses = ['techno','event','rocket','psk','balcan','hamcore']
let modal = document.getElementById("modal")
document.querySelectorAll('.case').forEach((item)=>{
    
    item.addEventListener("click",(event)=>{
        event.preventDefault()
        modal.classList.add('active')
        modal.classList.add( PortfolioClasses[item.dataset.number])
        document.getElementById("site").classList.add("overflow")
        document.getElementById("project-name-modal").innerHTML = fullProjectName[item.dataset.number]
    })
})

let articClasses = [
    'what-know-art', 
    'philosophy-art', 
    'four-hell-circles-art',
    'why-tilda-art',
    'how-much-art',
    'micro-interface-art',
    'dark-patternt-art',
    'harizmatic-art',
    'balkan-conf-art',
    'eventoutleet-art'
]

document.querySelectorAll('.article-cart').forEach((item)=>{
    item.addEventListener("click", (event)=>{
        event.preventDefault()
        modal.classList.add('active')
        modal.classList.add('headless')
        document.getElementById("site").classList.add("overflow")
        modal.classList.add( articClasses[item.dataset.number])
    })
})
function showOffer() {
    setTimeout(()=>{
        document.getElementById("special-modal").classList.add("active")
        document.getElementById("site").classList.add("overflow")
    },30000)
}

if(window.location.href.indexOf("why-tilda") > -1) {
    modal.classList.add('active')
    modal.classList.add('headless')
    document.getElementById("site").classList.add("overflow")
    modal.classList.add( articClasses[3])
    showOffer();
 }
 if(window.location.href.indexOf("how-much") > -1) {
    modal.classList.add('active')
    modal.classList.add('headless')
    document.getElementById("site").classList.add("overflow")
    modal.classList.add( articClasses[4])
    showOffer();
 }
 if(window.location.href.indexOf("what-know") > -1) {
    modal.classList.add('active')
    modal.classList.add('headless')
    document.getElementById("site").classList.add("overflow")
    modal.classList.add( articClasses[0])
    showOffer();
 }

 


 

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map