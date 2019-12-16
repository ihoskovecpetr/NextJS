webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20__);











var _jsxFileName = "/Users/macuser/Desktop/code/with-apollo-auth/lib/apollo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }











/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr;

  var WithApollo = function WithApollo(_ref2) {
    var apolloClient = _ref2.apolloClient,
        apolloState = _ref2.apolloState,
        pageProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref2, ["apolloClient", "apolloState"]);

    console.log("apolloState: ", apolloState);
    console.log("apolloClient: ");
    console.log("...pageProps: ");
    var client = apolloClient || initApolloClient(apolloState, {
      getToken: _getToken
    });
    console.log("client: ");
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_19__["ApolloProvider"], {
      client: client,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(PageComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })));
  };

  if (true) {
    // Find correct display name
    var displayName = PageComponent.displayName || PageComponent.name || "Component"; // Warn if old way of installing apollo is used

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    } // Set correct display name for devtools


    WithApollo.displayName = "withApollo(".concat(displayName, ")"); // Add some prop types

    WithApollo.propTypes = {
      // Used for getDataFromTree rendering
      apolloClient: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object,
      // Used for client/server rendering
      apolloState: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object
    };
  }

  if (ssr || PageComponent.getInitialProps) {
    console.log("Pass> ", WithApollo);

    WithApollo.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(ctx) {
        var AppTree, apolloClient, pageProps, _ref4, getDataFromTree, apolloState;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                AppTree = ctx.AppTree;
                console.log("CTX E: "); // Run all GraphQL queries in the component tree
                // and extract the resulting data

                apolloClient = ctx.apolloClient = initApolloClient({}, {
                  getToken: function getToken() {
                    return _getToken(ctx.req);
                  }
                });

                if (!PageComponent.getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return PageComponent.getInitialProps(ctx);

              case 6:
                _context.t0 = _context.sent;
                _context.next = 10;
                break;

              case 9:
                _context.t0 = {};

              case 10:
                pageProps = _context.t0;
                console.log("pageProps1: ", pageProps); // Only on the server

                if (true) {
                  _context.next = 30;
                  break;
                }

                if (!(ctx.res && ctx.res.finished)) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", {});

              case 15:
                if (!ssr) {
                  _context.next = 29;
                  break;
                }

                _context.prev = 16;
                // Run all GraphQL queries
                console.log("pageProps2: ", pageProps);
                _context.next = 20;
                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @apollo/react-ssr */ "./node_modules/@apollo/react-ssr/lib/react-ssr.esm.js"));

              case 20:
                _ref4 = _context.sent;
                getDataFromTree = _ref4.getDataFromTree;
                _context.next = 24;
                return getDataFromTree(__jsx(AppTree, {
                  pageProps: _objectSpread({}, pageProps, {
                    apolloClient: apolloClient
                  }),
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                  },
                  __self: this
                }));

              case 24:
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t1 = _context["catch"](16);
                // Prevent Apollo Client GraphQL errors from crashing SSR.
                // Handle them in components via the data.error prop:
                // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                console.error("Error while running `getDataFromTree`", _context.t1);

              case 29:
                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                next_head__WEBPACK_IMPORTED_MODULE_14___default.a.rewind();

              case 30:
                // Extract query data from the Apollo store
                apolloState = apolloClient.cache.extract();
                return _context.abrupt("return", _objectSpread({}, pageProps, {
                  apolloState: apolloState
                }));

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[16, 26]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();
  }

  return WithApollo;
}
var apolloClient = null;
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */

function initApolloClient() {
  var _console;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  (_console = console).log.apply(_console, ["initApolloClient ...args: "].concat(args));

  if (false) {} // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient.apply(void 0, args);
  }

  return apolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */


function createApolloClient() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref5 = arguments.length > 1 ? arguments[1] : undefined,
      getToken = _ref5.getToken;

  var fetchOptions = {}; // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module

  console.log("restoring CACHE INSTATE 0: ", initialState);

  if (false) {}

  var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_17__["HttpLink"]({
    uri: "https://api.graph.cool/simple/v1/cj5geu3slxl7t0127y8sity9r",
    // Server URL (must be absolute)
    credentials: "same-origin",
    fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_20___default.a,
    fetchOptions: fetchOptions
  });
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_18__["setContext"])(function (request, _ref6) {
    var headers = _ref6.headers;
    var token = getToken();
    return {
      headers: _objectSpread({}, headers, {
        authorization: token ? "Bearer ".concat(token) : ""
      })
    };
  });
  console.log("restoring CACHE INSTATE: ", initialState); // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient

  return new apollo_client__WEBPACK_IMPORTED_MODULE_15__["ApolloClient"]({
    ssrMode: false,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_16__["InMemoryCache"]().restore(initialState)
  });
}
/**
 * Get the user token from cookie
 * @param {Object} req
 */


function _getToken(req) {
  var cookies = cookie__WEBPACK_IMPORTED_MODULE_13___default.a.parse(req ? req.headers.cookie || "" : document.cookie);
  console.log("Got token: ", cookies.token);
  return cookies.token;
}

/***/ })

})
//# sourceMappingURL=index.js.8ed8c5640bc768473d74.hot-update.js.map