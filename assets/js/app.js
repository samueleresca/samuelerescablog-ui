(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vars-ponyfill */ "./node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/esm/index.all.js");
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");










Object(css_vars_ponyfill__WEBPACK_IMPORTED_MODULE_0__["default"])({});
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  if (Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isRTL"])()) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('dir', 'rtl').addClass('rtl');
  }

  var $body = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body');
  var $header = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-header');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-menu');
  var $closeMenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-close-menu');
  var $menu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-menu');
  var $toggleSubmenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-toggle-submenu');
  var $submenuOption = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submenu-option')[0];
  var $submenu = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-submenu');
  var $recentArticles = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-recent-articles');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-input-search');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-no-results');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.js-toggle-darkmode');
  var $gistFiles = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.gist-file');
  var currentSavedTheme = localStorage.getItem('theme');
  var fuse = null;
  var submenuIsOpen = false;

  function showSubmenu() {
    $header.addClass('submenu-is-active');
    $toggleSubmenu.addClass('active');
    $submenu.removeClass('closed').addClass('opened');
  }

  function forceGistTheme() {
    $gistFiles.attr('data-theme', 'light');
  }

  var forceDarkMode = function forceDarkMode() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  };

  function hideSubmenu() {
    $header.removeClass('submenu-is-active');
    $toggleSubmenu.removeClass('active');
    $submenu.removeClass('opened').addClass('closed');
  }

  function toggleScrollVertical() {
    $body.toggleClass('no-scroll-y');
  }

  function trySearchFeature() {
    if (typeof ghostSearchApiKey !== 'undefined') {
      getAllPosts(ghostHost, ghostSearchApiKey);
    } else {
      $openSearch.css('visibility', 'hidden');
      $closeSearch.remove();
      $search.remove();
    }
  }

  function getAllPosts(host, key) {
    var api = new GhostContentAPI({
      url: host,
      key: key,
      version: 'v2'
    });
    var allPosts = [];
    var fuseOptions = {
      shouldSort: true,
      threshold: 0,
      location: 0,
      distance: 100,
      tokenize: true,
      matchAllTokens: false,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['title', 'custom_excerpt', 'html']
    };
    api.posts.browse({
      limit: 'all',
      fields: 'id, title, url, published_at, custom_excerpt, html'
    }).then(function (posts) {
      for (var i = 0, len = posts.length; i < len; i++) {
        allPosts.push(posts[i]);
      }

      fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_8___default.a(allPosts, fuseOptions);
    })["catch"](function (err) {
      console.log(err);
    });
  }

  $openMenu.click(function () {
    $header.addClass('mobile-menu-opened');
    $menu.addClass('opened');
    toggleScrollVertical();
  });
  $closeMenu.click(function () {
    $header.removeClass('mobile-menu-opened');
    $menu.removeClass('opened');
    toggleScrollVertical();
  });
  $toggleSubmenu.click(function () {
    submenuIsOpen = !submenuIsOpen;

    if (submenuIsOpen) {
      showSubmenu();
    } else {
      hideSubmenu();
    }
  });
  $openSearch.click(function () {
    $search.addClass('opened');
    setTimeout(function () {
      $inputSearch.focus();
    }, 400);
    toggleScrollVertical();
  });
  $closeSearch.click(function () {
    $inputSearch.blur();
    $search.removeClass('opened');
    toggleScrollVertical();
  });
  $inputSearch.keyup(function () {
    if ($inputSearch.val().length > 0 && fuse) {
      var results = fuse.search($inputSearch.val());
      var htmlString = '';

      if (results.length > 0) {
        for (var i = 0, len = results.length; i < len; i++) {
          htmlString += "\n          <article class=\"m-result\">            <a href=\"".concat(results[i].url, "\" class=\"m-result__link\">              <h3 class=\"m-result__title\">").concat(results[i].title, "</h3>              <span class=\"m-result__date\">").concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["formatDate"])(results[i].published_at), "</span>            </a>          </article>");
        }

        $searchNoResults.hide();
        $searchResults.html(htmlString);
        $searchResults.show();
      } else {
        $searchResults.html('');
        $searchResults.hide();
        $searchNoResults.show();
      }
    } else {
      $searchResults.html('');
      $searchResults.hide();
      $searchNoResults.hide();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).click(function (e) {
    if (submenuIsOpen) {
      if ($submenuOption && !$submenuOption.contains(e.target)) {
        submenuIsOpen = false;
        hideSubmenu();
      }
    }
  });

  if (currentSavedTheme) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('html').attr('data-theme', currentSavedTheme);

    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.attr('checked', true);
    }
  } else {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isDarkMode"])()) {
      $toggleDarkMode.attr('checked', true);
    }
  }

  var headerElement = document.querySelector('.js-header');

  if (headerElement) {
    var headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_3___default.a(headerElement, {
      tolerance: {
        down: 10,
        up: 20
      },
      offset: 15
    });
    headroom.init();
  }

  if ($recentArticles.length > 0) {
    $recentArticles.on('init', function () {
      Object(shave__WEBPACK_IMPORTED_MODULE_6__["default"])('.js-recent-article-title', 50);
    });
    $recentArticles.slick({
      adaptiveHeight: true,
      arrows: false,
      infinite: false,
      mobileFirst: true,
      variableWidth: true,
      rtl: Object(_helpers__WEBPACK_IMPORTED_MODULE_9__["isRTL"])()
    });
  }

  if (typeof disableFadeAnimation === 'undefined' || !disableFadeAnimation) {
    aos__WEBPACK_IMPORTED_MODULE_7___default.a.init({
      once: true,
      startEvent: 'DOMContentLoaded'
    });
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('[data-aos]').addClass('no-aos-animation');
  }

  var observer = lozad__WEBPACK_IMPORTED_MODULE_2___default()('.lozad', {
    loaded: function loaded(el) {
      el.classList.add('loaded');
    }
  });
  observer.observe();
  Object(tippy_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-tooltip');
  Object(shave__WEBPACK_IMPORTED_MODULE_6__["default"])('.js-article-card-title', 100);
  Object(shave__WEBPACK_IMPORTED_MODULE_6__["default"])('.js-article-card-title-no-image', 250);
  trySearchFeature();
  forceDarkMode();
  forceGistTheme();
});

/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDarkMode", function() { return isDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return $html.getAttribute('lang') === 'ar' || $html.getAttribute('lang') === 'he';
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var isDarkMode = function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};

/***/ }),

/***/ 1:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/samuele.resca/Projects/samuelerescablog-ui/src/js/app.js */"./js/app.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);