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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/header/desktop/auth.js":
/*!*********************************************!*\
  !*** ./resources/js/header/desktop/auth.js ***!
  \*********************************************/
/*! exports provided: desktopAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopAuth", function() { return desktopAuth; });
function desktopAuth() {
  // alert(window.is_logged_in);
  return "\n    <div class=\"desktop-menu-items d-flex my-0 align-items-center ps-4 ms-auto me-0\">\n        <ul class=\"list-unstyled d-flex mb-0 align-items-center\">\n            ".concat(window.first_load ? "" : !window.is_logged_in ? showAuthButtons() : showLoggedInUserDropdown(), "\n        </ul>\n    </div>\n    ");
}

function showAuthButtons() {
  return "\n    <li class=\"sign-in-btn d-none d-lg-block\">\n        <a href data-bs-toggle=\"modal\" data-bs-target=\"#signinModal\" class=\"text-decoration-none fw-semi-bold\">\n            <i class=\"far fa-user me-2\"></i>".concat(window.translations.common.desktop_menu.signin, "\n        </a>\n    </li>\n    <li class=\"join-us-btn\">\n        <a href data-bs-toggle=\"modal\" data-bs-target=\"#joinusModal\"\n            class=\"btn secondary-btn text-decoration-none fw-semi-bold btn-shadow d-none d-lg-inline-block\">\n            <i class=\"fas fa-plus me-0 me-lg-2\"></i>\n            <span class=\"d-none d-lg-inline-block\">").concat(window.translations.common.desktop_menu.join_us, "</span>\n        </a>\n    </li>\n    ");
}

function showLoggedInUserDropdown() {
  var _window$routes;

  var userModuleMenuItem = function userModuleMenuItem(userModule) {
    var moduleRoute = window.home_url.replace(/\/$/, "") + window.preact_config.USER_URL_PREFIX + userModule.route.replace("{:action?}", "payments").replace("{:type?}", "cashback");
    return "\n        <li>\n            <a href=\"".concat(moduleRoute, "\">\n                ").concat(userModule.icon ? '<img src="' + userModule.icon + '" alt="' + __pbt(userModule.menu_name) + '">' : "", "\n                ").concat(__pbt(userModule.menu_name), "\n            </a>\n        </li>\n        ");
  };

  var renderAppExtnBtns = function renderAppExtnBtns() {
    var htmlStr = "";
    htmlStr += window.downloadOptions.app_android ? "<a href=\"".concat(window.downloadOptions.app_android, "\" target=\"_blank\"><i class=\"fab fa-android\"></i>").concat(window.translations.common.android, "</a>") : "";
    htmlStr += window.downloadOptions.app_ios ? "<a href=\"".concat(window.downloadOptions.app_ios, "\" target=\"_blank\"><i class=\"fab fa-app-store-ios\"></i>").concat(window.translations.common.apple, "</a>") : "";
    htmlStr += window.downloadOptions.extn_chrome ? "<a class=\"d-chrome d-none\" href=\"".concat(window.downloadOptions.extn_chrome, "\" target=\"_blank\"><i class=\"fab fa-chrome\"></i>").concat(window.translations.common.chrome, "</a>") : "";
    htmlStr += window.downloadOptions.extn_firefox ? "<a class=\"d-firefox d-none\" href=\"".concat(window.downloadOptions.extn_firefox, "\" target=\"_blank\"><i class=\"fab fa-firefox-browser\"></i>").concat(window.translations.common.firefox, "</a>") : "";
    htmlStr += window.downloadOptions.extn_safari ? "<a class=\"d-safari d-none\" href=\"".concat(window.downloadOptions.extn_safari, "\" target=\"_blank\"><i class=\"fab fa-safari\"></i>").concat(window.translations.common.safari, "</a>") : "";
    htmlStr += window.downloadOptions.extn_edge ? "<a class=\"d-edge d-none\" href=\"".concat(window.downloadOptions.extn_edge, "\" target=\"_blank\"><i class=\"fab fa-edge\"></i>").concat(window.translations.common.edge, "</a>") : "";
    return htmlStr;
  };

  return "\n    <li class=\"plain-menu after-signin-menu text-end me-3\">\n        <a class=\"menu-item\" role=\"button\">\n        <span class=\"me-3\"><i class=\"me-1 far fa-user\"></i> ".concat(window.user.first_name || window.user.last_name || window.user.email, "</span>\n            <span>").concat(formatCurrency(window.earning.total.cashback + window.earning.total.reward - window.earning.total.paid), "  </span>\n        </a>\n        <div class=\"lb-plain-menu-container after-signin-menu-items text-start\">\n            <ul class=\"plain-sub-menu-area p-0\">\n                <div class=\"mb-3\">\n                    ").concat(window.user_modules.map(userModuleMenuItem).join(""), "\n                </div>\n                <div>\n                    <div class=\"after-signin-apps\">\n                        ").concat(renderAppExtnBtns(), "\n                    </div>\n                </div>\n                <div>\n                    <li>\n                        <a href=\"").concat((_window$routes = window.routes) === null || _window$routes === void 0 ? void 0 : _window$routes.logout, "\"><img src=\"").concat(window.pcb_ui_image("user-logout-icon.svg"), "\" alt=\"acc\">").concat(window.translations.auth.button.logout, "</a>\n                    </li>\n                </div>\n            </ul>\n        </div>\n    </li>\n    ");
}

/***/ }),

/***/ "./resources/js/header/desktop/langs.js":
/*!**********************************************!*\
  !*** ./resources/js/header/desktop/langs.js ***!
  \**********************************************/
/*! exports provided: desktopLangs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopLangs", function() { return desktopLangs; });
function desktopLangs() {
  if (Object.entries(window.availableLangs).length <= 1) return "";
  return "\n        <div class=\"lang-dropdown-wrapper dropdown\">\n            <a class=\"menu-item\" type=\"button\" id=\"lang-dropdown\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <i class=\"fas fa-globe\"></i>\n                ".concat(window.availableLangs[window.lang].name, "\n            </a>\n            <ul id=\"select-lang-dropdown\" class=\"list-unstyled1 mb-01 d-flex1 align-items-center1 dropdown-menu\" aria-labelledby=\"lang-dropdown\">\n                ").concat(Object.entries(window.availableLangs).filter(function (item) {
    return item[0] !== window.lang;
  }).map(function (item) {
    return "<li class=\"dropdown-item\" ><a data-lang=".concat(item[0], " class=\"lang-icon-").concat(item[0], "\" href=").concat(item[1].url, "> ").concat(item[0].toUpperCase(), " - ").concat(item[1].name, "</a></li>");
  }).join(""), "\n            </ul>\n        </div>\n    ");
}

/***/ }),

/***/ "./resources/js/header/desktop/navitems.js":
/*!*************************************************!*\
  !*** ./resources/js/header/desktop/navitems.js ***!
  \*************************************************/
/*! exports provided: desktopNavItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopNavItems", function() { return desktopNavItems; });
function desktopNavItems() {
  return "\n    <ul class=\"navbar-nav lb-desktop-menu align-items-center list-unstyled\">\n        <div class=\"d-flex\">\n            ".concat(window.menuItems.map(renderMenuItem).join(''), "    \n        </div>\n    </ul>\n    ");
}

function renderMenuItem(menuItem) {
  return "\n    <li class=\"".concat(menuItem["class"] || 'plain-menu', " ").concat(!menuItem.sub_menu ? 'no-child-menu' : '', "\">\n        <a class=\"menu-item\" href=\"").concat(menuItem.menu_link || '#', "\">").concat(__pbt(menuItem.label), "</a>\n        ").concat(menuItem.type == 'menu' && menuItem.sub_menu ? renderSubmenuDropdown(menuItem) : '', "\n    </li>\n    ");
}

function renderSubmenuDropdown(menuItem) {
  return "\n    <div class=\"lb-menu-container lb-plain-menu-container shadow border\">\n        ".concat(menuItem["class"] === 'mega-menu' ? renderMegaMenuSubmenu(menuItem) : renderPlainSubmenu(menuItem), "\n    </div>\n    ");
}

function renderMegaMenuSubmenu(menuItem) {
  var megaMenuSubmenuItem = function megaMenuSubmenuItem(item) {
    return "\n        <li>\n            <a href=\"".concat(item.menu_link, "\" class=\"submenu-title fw-bold text-dark d-block mb-2\">").concat(__pbt(item.label), "</a>\n            <ul class=\"m-0 p-0\">\n                ").concat(item.child.map(function (child) {
      return '<li><a href="' + child.menu_link + '"> ' + __pbt(child.label) + ' </a></li>';
    }).join(''), "\n            </ul>\n        </li>\n        ");
  };

  return "\n    <ul class=\"sub-menu-area four-col-grid p-0\">\n        ".concat(menuItem.sub_menu.items.map(megaMenuSubmenuItem).join(''), "\n    </ul>\n    ");
}

function renderPlainSubmenu(menuItem) {
  return "\n    <ul class=\"plain-sub-menu-area p-0\">\n        ".concat(menuItem.sub_menu.items.map(function (item) {
    return '<li><a href="' + item.menu_link + '"> ' + __pbt(item.label) + ' </a></li>';
  }).join(''), "\n    </ul>\n    ");
}

/***/ }),

/***/ "./resources/js/header/desktop/search.js":
/*!***********************************************!*\
  !*** ./resources/js/header/desktop/search.js ***!
  \***********************************************/
/*! exports provided: desktopSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktopSearch", function() { return desktopSearch; });
function desktopSearch() {
  var _window$routes;

  return "\n    <div class=\"header-search-cont mx-auto\">\n        <form class=\"form-inline my-2 my-lg-0 header-search-form\" action=\"".concat((_window$routes = window.routes) === null || _window$routes === void 0 ? void 0 : _window$routes.search, "\" method=\"GET\" autocomplete=\"off\" id=\"headerSearchForm\">\n            <div class=\"input-group\">\n                <input class=\"desktop-search-input search-input form-control\" required minlength=\"3\" type=\"text\"\n                autocomplete=\"off\"  placeholder=\"").concat(window.translations.common.header_search.search_placehoder, "\" name=\"keyword\" aria-label=\"Search\" onkeyup=\"headerSearch(this)\">\n                <div class=\"input-group-append\">\n                    <a role=\"button\" id=\"desktop-search-clear-btn\" onclick=\"clearNCloseSearchInput()\" class=\"p-2 text-primary search-clear d-none\" type=\"button\">\n                        <i class=\"fas fa-times\"></i>\n                    </a>\n                    <button class=\"btn\" type=\"submit\">\n                        <i class=\"fas fa-search\"></i>\n                    </button>\n                </div>\n                \n                <div class=\"desktop-search-results  d-none\" id=\"header-search-results\">\n                </div>\n            </div>\n        </form>\n    </div>\n    ");
}

/***/ }),

/***/ "./resources/js/header/index.js":
/*!**************************************!*\
  !*** ./resources/js/header/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _desktop_navitems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop/navitems */ "./resources/js/header/desktop/navitems.js");
/* harmony import */ var _desktop_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop/search */ "./resources/js/header/desktop/search.js");
/* harmony import */ var _desktop_langs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop/langs */ "./resources/js/header/desktop/langs.js");
/* harmony import */ var _desktop_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop/auth */ "./resources/js/header/desktop/auth.js");
/* harmony import */ var _mobile_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/sidebar */ "./resources/js/header/mobile/sidebar/index.js");
/* harmony import */ var _mobile_search_auth_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile/search-auth-home */ "./resources/js/header/mobile/search-auth-home.js");
// Get Dependencies





 // Base Function

function renderBaseHeader() {
  var _window$routes;

  var showOnSmallScreen = window.screen.is_mobile || window.screen.is_ipad || window.screen.is_tablet;
  var showOnLargeScreen = window.screen.is_desktop || window.screen.is_laptop;
  return "\n    <div class=\"container\">\n        <nav class=\"navbar navbar-expand-lg\">\n            <div class=\"row w-100\">\n                <div class=\"col-2 ms-0 ps-0 brand-col\">\n                    <a class=\"".concat(showOnSmallScreen ? 'mob-' : '', "navbar-brand\" href=\"").concat((_window$routes = window.routes) === null || _window$routes === void 0 ? void 0 : _window$routes.home, "\">\n                        <img class=\"img-fluid\" src=\"").concat(window.app_logo, "\" alt=\"Logo\">\n                    </a>\n                    ").concat(showOnSmallScreen ? Object(_mobile_sidebar__WEBPACK_IMPORTED_MODULE_4__["mobileSidebar"])() : '', "\n                </div>\n\n                <div class=\"col-10 d-flex align-items-center position-static pe-0 me-0\">\n                    <!-- @desktop -->\n                    ").concat(showOnLargeScreen ? Object(_desktop_navitems__WEBPACK_IMPORTED_MODULE_0__["desktopNavItems"])() : '', "\n                    ").concat(showOnLargeScreen ? Object(_desktop_search__WEBPACK_IMPORTED_MODULE_1__["desktopSearch"])() : '', "\n                    ").concat(showOnLargeScreen ? Object(_desktop_langs__WEBPACK_IMPORTED_MODULE_2__["desktopLangs"])() : '', "\n                    ").concat(showOnLargeScreen ? Object(_desktop_auth__WEBPACK_IMPORTED_MODULE_3__["desktopAuth"])() : '', "\n                    <!-- @elsedesktop -->\n                    ").concat(showOnSmallScreen ? Object(_mobile_search_auth_home__WEBPACK_IMPORTED_MODULE_5__["searchAuthHome"])() : '', "                    \n                    <!-- @enddesktop -->                    \n                </div>\n            </div>\n        </nav>\n    </div>\n    ");
} // Render menu


window.renderHeader = function () {
  if (document.querySelector('.main-header')) {
    document.querySelector('.main-header').innerHTML = renderBaseHeader();
    document.querySelector('.main-header').classList.remove('loading');
  }
};

window.renderHeader();

/***/ }),

/***/ "./resources/js/header/mobile/search-auth-home.js":
/*!********************************************************!*\
  !*** ./resources/js/header/mobile/search-auth-home.js ***!
  \********************************************************/
/*! exports provided: searchAuthHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAuthHome", function() { return searchAuthHome; });
function searchAuthHome() {
  return "\n    <div class=\"ms-auto\">\n        <ul class=\"list-unstyled mb-0 d-flex align-items-center\">\n            <li>\n                <div class=\"mob-search\">\n                    <i class=\"fas fa-search\" onclick=\"displayMobileSearchBox()\"></i>\n                </div>\n            </li>\n            ".concat(!window.is_logged_in ? showAuthButtons() : showLoggedUserOverviewBtn(), "\n            ").concat(searchResults(), "\n        </ul>\n    </div>\n    ");
}

function showAuthButtons() {
  return "\n    <li class=\"join-us-btn\">\n        <div class=\"btn-group d-inline-block dropdown\">\n            <button class=\"btn dropdown-toggle\" type=\"button\" id=\"SignInJoinUsBtn\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                <i class=\"far fa-user\"></i>\n            </button>\n            <ul class=\"dropdown-menu user-dropdown\" aria-labelledby=\"SignInJoinUsBtn\">\n                <li><a class=\"dropdown-item\" href data-bs-toggle=\"modal\" data-bs-target=\"#signinModal\"> ".concat(window.translations["public"].header.signin, "</a></li>\n                <li><a class=\"dropdown-item\" href data-bs-toggle=\"modal\" data-bs-target=\"#joinusModal\"> ").concat(window.translations["public"].header.join_us, "</a></li>\n            </ul>\n        </div>\n    </li>\n    ");
}

function showLoggedUserOverviewBtn() {
  var _window$routes;

  return "\n    <li class=\"join-us-btn\">\n        <a class=\"btn\" href=\"".concat((_window$routes = window.routes) === null || _window$routes === void 0 ? void 0 : _window$routes.user_overview, "\"> <i class=\"fas fa-user-check\"></i></a>\n    </li>\n    ");
}

function searchResults() {
  var _window$routes2;

  return "\n    <div style=\"top: 0px;\" class=\"mobile-search-results\">\n        <form  action=\"".concat((_window$routes2 = window.routes) === null || _window$routes2 === void 0 ? void 0 : _window$routes2.search, "\" method=\"GET\" autocomplete=\"off\">\n        <div class=\"d-flex align-items-center pb-3\">\n            <i class=\"fas fa-arrow-left mx-3\" onclick=\"document.querySelector('.mobile-search-results').classList.remove('open')\"></i>\n            <input type=\"text\" name=\"keyword\" required class=\"form-control\" id=\"mobile-search-input\" oninput=\"headerSearch(this)\" class=\"mob-search-in search-input\" placeholder=\"").concat(window.translations.common.header_search.search_placehoder, "\" inputmode=\"search\" />\n            <i class=\"fas fa-times p-2 ps-3 mobile-search-clear search-clear\" onclick=\"document.querySelector('#mobile-search-input').value = ''; headerSearch({value: ''})\"></i>\n        </div>\n        </form>\n        <div id=\"header-search-results\"></div>\n    </div>\n    ");
}

/***/ }),

/***/ "./resources/js/header/mobile/sidebar/auth.js":
/*!****************************************************!*\
  !*** ./resources/js/header/mobile/sidebar/auth.js ***!
  \****************************************************/
/*! exports provided: mobileSidebarAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSidebarAuth", function() { return mobileSidebarAuth; });
function mobileSidebarAuth() {
  return !window.is_logged_in ? showAuthButtons() : showAccountOptions();
}

function showAuthButtons() {
  var _window$routes;

  return "\n    <div class=\"mob-auth-menu-items\">\n        <a href data-bs-toggle=\"modal\" data-bs-target=\"#signinModal\" class=\"text-black text-decoration-none fw-semi-bold purple-on-hover signin-link\">\n            <i class=\"far fa-user me-2\"></i>".concat(window.translations.common.mobile_menu.signin, "\n        </a>\n        <a href=\"").concat((_window$routes = window.routes) === null || _window$routes === void 0 ? void 0 : _window$routes.register, "\" class=\"jion-btn btn sm-btn text-decoration-none fw-semi-bold btn-shadow \">\n            <i class=\"fas fa-plus me-0 me-lg-2\"></i>\n            <span class=\"\">").concat(window.translations.common.mobile_menu.join_us, "</span>\n        </a>\n    </div>\n    ");
}

function showAccountOptions() {
  var _window$routes2;

  var userModuleMenuItem = function userModuleMenuItem(userModule) {
    var moduleRoute = window.home_url.replace(/\/$/, '') + window.preact_config.USER_URL_PREFIX + userModule.route.replace("{:action?}", "payments").replace("{:type?}", "cashback");
    return "\n        <li>\n            <a class=\"text-purple fw-medium\" href=\"".concat(moduleRoute, "\">\n                ").concat(userModule.icon ? '<img src="' + userModule.icon + '" alt="' + userModule.menu_name[window.lang] + '">' : '', "\n                <label>").concat(userModule.menu_name[window.lang], "</label>\n            </a>\n        </li>\n        ");
  };

  return "\n    <li>\n        <label class=\"a-label__chevron\" for=\"user-name-item\">".concat(window.translations.common.mobile_menu.my_account, "</label>\n        <input type=\"checkbox\" id=\"user-name-item\" name=\"user-name-item\" class=\"m-menu__checkbox\">\n        <div class=\"m-menu\">\n            <div class=\"m-menu__header\">\n                <label class=\"m-menu__toggle\" for=\"user-name-item\"><i class=\"fas fa-arrow-left\"></i></label>\n                <span> ").concat(window.user.first_name || window.user.last_name || window.user.email, " </span>\n            </div>\n\n            <ul class=\"mobile-user-menu\">\n                ").concat(window.user_modules.map(userModuleMenuItem).join(''), "\n                <li>\n                    <a href=\"").concat((_window$routes2 = window.routes) === null || _window$routes2 === void 0 ? void 0 : _window$routes2.logout, "\">\n                        <img src=\"").concat(window.pcb_ui_image('user-logout-icon.svg'), "\" alt=\"acc\">\n                        ").concat(window.translations.common.mobile_menu.logout, "\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </li>\n    ");
}

/***/ }),

/***/ "./resources/js/header/mobile/sidebar/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/header/mobile/sidebar/index.js ***!
  \*****************************************************/
/*! exports provided: mobileSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSidebar", function() { return mobileSidebar; });
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./resources/js/header/mobile/sidebar/auth.js");
/* harmony import */ var _langs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./langs */ "./resources/js/header/mobile/sidebar/langs.js");
/* harmony import */ var _navItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navItems */ "./resources/js/header/mobile/sidebar/navItems.js");



function mobileSidebar() {
  return "\n    <div class=\"mobie-menu-wrapper wrapper\">\n        <nav>\n            <input type=\"checkbox\" id=\"menu\" name=\"menu\" class=\"m-menu__checkbox\">\n            <label class=\"m-menu__toggle\" for=\"menu\">\n                <div class=\"nav-toggler\">\n                    <span class=\"nav toggler-icon\"></span>\n                </div>\n            </label>\n            <label class=\"m-menu__overlay\" for=\"menu\"></label>\n\n            <div class=\"m-menu\">\n                <div class=\"m-menu__header\">\n                    <span>".concat(window.app_name, "</span>\n                    <label class=\"m-menu__toggle close-menu\" for=\"menu\">\n                        <i class=\"fas fa-times\"></i>\n                    </label>\n                </div>\n\n                <ul>\n                    <!-- mobile/sidebar/auth -->\n                    ").concat(Object(_auth__WEBPACK_IMPORTED_MODULE_0__["mobileSidebarAuth"])(), "\n                    <!-- mobile/sidebar/navItems -->\n                    ").concat(Object(_navItems__WEBPACK_IMPORTED_MODULE_2__["mobileSidebarNavItems"])(), "                    \n                    <!-- mobile/sidebar/lang -->\n                    ").concat(Object(_langs__WEBPACK_IMPORTED_MODULE_1__["mobileSidebarLangs"])(), "\n                </ul>\n            </div>\n        </nav>\n    </div>\n    ");
}

/***/ }),

/***/ "./resources/js/header/mobile/sidebar/langs.js":
/*!*****************************************************!*\
  !*** ./resources/js/header/mobile/sidebar/langs.js ***!
  \*****************************************************/
/*! exports provided: mobileSidebarLangs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSidebarLangs", function() { return mobileSidebarLangs; });
function mobileSidebarLangs() {
  if (Object.entries(window.availableLangs).length <= 1) return '';
  return "\n    <li>\n        <label class=\"a-label__chevron\" for=\"lang-item\">".concat(window.translations.common.mobile_menu.language, "</label>\n        <input type=\"checkbox\" id=\"lang-item\" name=\"lang-item\" class=\"m-menu__checkbox\">\n        <div class=\"m-menu\">\n            <div class=\"m-menu__header\">\n                <label class=\"m-menu__toggle\" for=\"lang-item\"><i class=\"fas fa-arrow-left\"></i></label>\n                <span>").concat(window.translations.common.mobile_menu.language, "</span>\n            </div>\n            <ul>\n            ").concat(Object.entries(window.availableLangs) // .filter(item => item[0] !== window.lang)
  .map(function (item) {
    return '<li class="dropdown-item"><a class="lang-icon-' + item[0] + ' text-purple fw-medium" href="' + item[1].url + '"><label>' + item[1].name + '</label></a></li>';
  }).join(''), "\n            </ul>\n        </div>\n    </li>\n    ");
}

/***/ }),

/***/ "./resources/js/header/mobile/sidebar/navItems.js":
/*!********************************************************!*\
  !*** ./resources/js/header/mobile/sidebar/navItems.js ***!
  \********************************************************/
/*! exports provided: mobileSidebarNavItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileSidebarNavItems", function() { return mobileSidebarNavItems; });
function mobileSidebarNavItems() {
  return window.menuItems.map(renderMenuItem).join('');
}

function renderMenuItem(menuItem) {
  if (menuItem.value && menuItem.value.length > 0) return "<li><a href=\"".concat(menuItem.menu_link, "\">").concat(__pbt(menuItem.label), "</a></li>");else return "\n        <li>\n            <label class=\"a-label__chevron\" for=\"item-par-".concat(menuItem.id, "\">").concat(__pbt(menuItem.label), "</label>\n            <input type=\"checkbox\" id=\"item-par-").concat(menuItem.id, "\" name=\"item-par-").concat(menuItem.id, "\" class=\"m-menu__checkbox\">\n            <div class=\"m-menu\">\n            \n                <div class=\"m-menu__header\">\n                    <label class=\"m-menu__toggle\" for=\"item-par-").concat(menuItem.id, "\"><i class=\"fas fa-arrow-left\"></i></label>\n                    <span class=\"pointer\" >").concat(__pbt(menuItem.label), "</span>\n                </div>\n\n                ").concat(menuItem.type == 'menu' && menuItem.sub_menu ? renderSubMenu(menuItem) : '', "\n            </div>\n        </li>\n        ");
}

function renderSubMenu(menuItem) {
  if (menuItem["class"] == 'mega-menu') return "<ul>".concat(menuItem.sub_menu.items.map(renderMegamenuSubmenuItems).join(''), "</ul>");else return "<ul>".concat(menuItem.sub_menu.items.map(renderPlainSubmenuItems).join(''), "</ul>");
}

function renderMegamenuSubmenuItems(item) {
  if (item.value && item.value.length > 1) return "<li><a href=\"".concat(item.menu_link, "\">").concat(__pbt(item.label), "</a></li>");else return "\n        <li>\n            <label class=\"a-label__chevron\" for=\"item-chi-".concat(item.id, "\">").concat(__pbt(item.label), "</label>\n            <input type=\"checkbox\" id=\"item-chi-").concat(item.id, "\" name=\"item-chi-").concat(item.id, "\" class=\"m-menu__checkbox\">\n            <div class=\"m-menu\">\n                <div class=\"m-menu__header\">\n                    <label class=\"m-menu__toggle\" for=\"item-chi-").concat(item.id, "\"><i class=\"fas fa-arrow-left\"></i></label>\n                    <span>").concat(__pbt(item.label), "</span>\n                </div>\n                <ul>\n                ").concat(item.child.map(function (child) {
    return '<li><a href="' + child.menu_link + '"> ' + __pbt(child.label) + '</a></li>';
  }).join(''), "\n                </ul>\n            </div>\n        </li>\n        ");
}

function renderPlainSubmenuItems(item) {
  return "<li><a href=\"".concat(item.menu_link, "\"> ").concat(__pbt(item.label), " </a></li>");
}

/***/ }),

/***/ 2:
/*!********************************************!*\
  !*** multi ./resources/js/header/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/dev/lbp8/packages/ui/resources/js/header/index.js */"./resources/js/header/index.js");


/***/ })

/******/ });