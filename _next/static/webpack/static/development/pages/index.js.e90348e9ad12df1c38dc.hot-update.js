webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Kontakt/kontaktForm.jsx":
/*!********************************************!*\
  !*** ./components/Kontakt/kontaktForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Telegram */ "./node_modules/@material-ui/icons/Telegram.js");
/* harmony import */ var _material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Room */ "./node_modules/@material-ui/icons/Room.js");
/* harmony import */ var _material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_10__);




var _this = undefined,
    _jsxFileName = "D:\\development\\AMANDA.public\\components\\Kontakt\\kontaktForm.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {
    '& > *': {
      paddingTop: '60px',
      paddingBottom: '60px',
      width: '90%'
    }
  },
  formControl: {
    marginTop: '20px',
    width: '100%'
  },
  icon: {
    margin: '10px'
  }
});

var kontaktForm = function kontaktForm() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null
    }
  }),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    email: '',
    betreff: '',
    message: ''
  }),
      inputs = _useState2[0],
      setInputs = _useState2[1];

  var handleResponse = function handleResponse(status, msg) {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg
        }
      });
      setInputs({
        name: '',
        email: '',
        betreff: '',
        message: ''
      });
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg
        }
      });
    }
  };

  var handleOnChange = function handleOnChange(e) {
    e.persist();
    setInputs(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.id, e.target.value));
    });
    setStatus({
      submitted: false,
      submitting: false,
      info: {
        error: false,
        msg: null
      }
    });
  };

  var handleOnSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, text;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setStatus(function (prevStatus) {
                return _objectSpread(_objectSpread({}, prevStatus), {}, {
                  submitting: true
                });
              });
              _context.next = 4;
              return fetch('/api/send', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
              });

            case 4:
              res = _context.sent;
              _context.next = 7;
              return res.text();

            case 7:
              text = _context.sent;
              handleResponse(res.status, text);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOnSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "jsx-2932751237" + " " + "kontaktContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 2
    }
  }, __jsx("div", {
    className: "jsx-2932751237" + " " + "address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2932751237" + " " + "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "jsx-2932751237" + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "Kontakt"), __jsx("p", {
    className: "jsx-2932751237" + " " + "description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "Momentan erreichst du uns am besten per Mail."), __jsx("div", {
    className: "jsx-2932751237" + " " + 'contactInfo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2932751237" + " " + 'contactDetails',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-2932751237",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, "+41 coming soon")), __jsx("div", {
    className: "jsx-2932751237" + " " + 'contactDetails',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Telegram__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-2932751237",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "info@amanda-technology.ch")), __jsx("div", {
    className: "jsx-2932751237" + " " + 'contactDetails',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Room__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }), __jsx("p", {
    className: "jsx-2932751237",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, "AMDANDA Technology GmbH", __jsx("br", {
    className: "jsx-2932751237",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 40
    }
  }), "B\xE4chlisbrunnenstrasse 47, 1713 St. Antoni"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2932751237",
    __self: _this
  }, ".submitButton.jsx-2932751237{margin-top:50px;background:linear-gradient(90deg,#ff8f00,#ffe180);color:#fff;font-size:12px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;padding:15px 30px;height:40px;border:1px solid;border-radius:30px;}.contactInfo.jsx-2932751237{color:#fff;padding-top:50px;}.formLabel.jsx-2932751237{color:#4c5462;font-size:30px;font-weight:800;text-align:left;}.icon.jsx-2932751237{padding-right:10px;}.title.jsx-2932751237{color:#fff;font-size:30px;font-weight:800;text-align:left;}.fieldsContainer.jsx-2932751237{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:80px;}.contactDetails.jsx-2932751237{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.kontaktContainer.jsx-2932751237{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:auto;padding-top:20px;padding-bottom:100px;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.address.jsx-2932751237{width:45%;height:700px;background-color:#4c5462;}.kontakt.jsx-2932751237{width:65%;height:700px;background-color:#fff;}.content.jsx-2932751237{padding-left:100px;padding-right:100px;padding-bottom:100px;padding-top:20px;color:#fff;}.footer.jsx-2932751237{width:100%;padding-top:340px;background-color:#2b323f;}@media (min-width:768px) and (max-width:1367px){.content.jsx-2932751237{padding-left:20px;padding-right:20px;}.fieldsContainer.jsx-2932751237{padding-left:40px;padding-right:40px;}}@media (max-width:767px){.kontaktContainer.jsx-2932751237{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.address.jsx-2932751237{width:45%;height:400px;background-color:#4c5462;}.kontakt.jsx-2932751237{width:65%;height:400px;background-color:#fff;}}@media (max-width:768px){.address.jsx-2932751237{width:90%;height:500px;background-color:#4c5462;}.kontakt.jsx-2932751237{width:90%;height:600px;background-color:#fff;}.kontaktContainer.jsx-2932751237{width:100%;padding-top:30px;padding-bottom:30px;}.fieldsContainer.jsx-2932751237{padding:10px;}.footer.jsx-2932751237{padding-top:40px;}.content.jsx-2932751237{padding-left:20px;padding-right:20px;padding-bottom:50px;padding-top:50px;color:#fff;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxkZXZlbG9wbWVudFxcQU1BTkRBLnB1YmxpY1xcY29tcG9uZW50c1xcS29udGFrdFxca29udGFrdEZvcm0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIa0IsQUFHMkIsQUFXTCxBQUlHLEFBTUssQUFHUixBQU1RLEFBTU4sQUFLRixBQVVELEFBS0EsQUFLUyxBQU9SLEFBT1MsQUFJQSxBQU1JLEFBR1osQUFLQSxBQU9BLEFBS0EsQUFLQyxBQUtFLEFBR0ksQUFHQyxVQXJFUCxBQUtBLEFBZ0NFLEFBS0EsQUFPQSxBQUtBLENBOUZFLEFBYUYsQUFpQkYsQUEyQkssQUEwQ0MsRUFLbkIsQ0FwR2UsRUFmbUMsQ0FzSGxELENBM0NxQixBQUlBLEFBMENBLENBcEd2QixBQXdDc0IsSUFUSyxBQUtILEFBZ0NLLEFBS0gsQUFPRyxBQUtILEdBakZSLEVBYmxCLEFBbUd3QixDQS9GTixBQXFEUyxRQU96QixBQUlBLEFBMENzQixFQTVERCxHQXBDTCxHQVRBLEFBeUNsQixBQXFDRSxBQVlBLEdBdERGLEFBcUNFLEFBWUEsQUFVQSxNQTFDRixHQXFEcUIsQ0FoR3JCLEVBb0NtQixDQTdDbkIsS0FqQmEsUUFtQ1EsQUF3Rk4sR0ExSEUsQUE4REosQ0FxQlgsT0EzQ3VCLEFBbUZ2QixHQTVERixJQTlEcUIsQ0EyQkksa0RBUTFCLHlDQUtzQixDQXZDRCxPQTJCSSxXQTFCVixZQUNLLGlCQUVwQixJQThCQyxlQTlCQSxtQkF3QmUsT0FZRCxNQVhkLE1BWW1CLGlCQUNJLHFCQUNGLHFFQUNyQiIsImZpbGUiOiJEOlxcZGV2ZWxvcG1lbnRcXEFNQU5EQS5wdWJsaWNcXGNvbXBvbmVudHNcXEtvbnRha3RcXGtvbnRha3RGb3JtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBJbnB1dExhYmVsLCBJbnB1dCwgRm9ybUNvbnRyb2wsIEZvcm1IZWxwZXJUZXh0ICAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBUZWxlZ3JhbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RlbGVncmFtJztcclxuaW1wb3J0IFBob25lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmUnO1xyXG5pbXBvcnQgUm9vbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Jvb20nO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgJyYgPiAqJzoge1xyXG4gICAgICBwYWRkaW5nVG9wOiAnNjBweCcsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICc2MHB4JyxcclxuICAgICAgd2lkdGg6ICc5MCUnXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybUNvbnRyb2w6IHtcclxuICAgIG1hcmdpblRvcDogJzIwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJ1xyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgbWFyZ2luOiAnMTBweCdcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qga29udGFrdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSh7XHJcbiAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgc3VibWl0dGluZzogZmFsc2UsXHJcbiAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBudWxsIH1cclxuICB9KVxyXG5cclxuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBiZXRyZWZmOiAnJyxcclxuICAgIG1lc3NhZ2U6ICcnXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAoc3RhdHVzLCBtc2cpID0+IHtcclxuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBzZXRTdGF0dXMoe1xyXG4gICAgICAgIHN1Ym1pdHRlZDogdHJ1ZSxcclxuICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBtc2cgfVxyXG4gICAgICB9KVxyXG4gICAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBiZXRyZWZmOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3RhdHVzKHtcclxuICAgICAgICBpbmZvOiB7IGVycm9yOiB0cnVlLCBtc2c6IG1zZyB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgZS5wZXJzaXN0KClcclxuICAgIHNldElucHV0cyhwcmV2ID0+ICh7XHJcbiAgICAgIC4uLnByZXYsXHJcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KSlcclxuICAgIHNldFN0YXR1cyh7XHJcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXHJcbiAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBudWxsIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRTdGF0dXMocHJldlN0YXR1cyA9PiAoeyAuLi5wcmV2U3RhdHVzLCBzdWJtaXR0aW5nOiB0cnVlIH0pKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvc2VuZCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGlucHV0cylcclxuICAgIH0pXHJcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKVxyXG4gICAgaGFuZGxlUmVzcG9uc2UocmVzLnN0YXR1cywgdGV4dClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiA8ZGl2IGNsYXNzTmFtZT1cImtvbnRha3RDb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRyZXNzXCI+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRpdGxlXCI+S29udGFrdDwvaDQ+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPk1vbWVudGFuIGVycmVpY2hzdCBkdSB1bnMgYW0gYmVzdGVuIHBlciBNYWlsLjwvcD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdEluZm8nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdERldGFpbHMnPlxyXG4gICAgICAgICAgICAgIDxQaG9uZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICA8cD4rNDEgY29taW5nIHNvb248L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdERldGFpbHMnPlxyXG4gICAgICAgICAgICAgIDxUZWxlZ3JhbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICA8cD5pbmZvQGFtYW5kYS10ZWNobm9sb2d5LmNoPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3REZXRhaWxzJz5cclxuICAgICAgICAgICAgICA8Um9vbUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmljb259Lz5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEFNREFOREEgVGVjaG5vbG9neSBHbWJIPGJyLz5cclxuICAgICAgICAgICAgICAgIFNhbnRpaGFuc3dlZyAxMEEsIDMxODYgRMO8ZGluZ2VuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuc3VibWl0QnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2ZmOGYwMCwjZmZlMTgwKTtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdEluZm8ge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm1MYWJlbCB7XHJcbiAgICAgICAgICBjb2xvcjogIzRjNTQ2MjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkc0NvbnRhaW5lcntcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBwYWRkaW5nOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdERldGFpbHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5rb250YWt0Q29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM1NDYyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAua29udGFrdCB7XHJcbiAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzQwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMjNmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTM2N3B4KSB7XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5maWVsZHNDb250YWluZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSAge1xyXG4gICAgICAgICAgLmtvbnRha3RDb250YWluZXIge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFkZHJlc3Mge1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGM1NDYyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmtvbnRha3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNTQ2MjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5rb250YWt0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5rb250YWt0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5maWVsZHNDb250YWluZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBrb250YWt0Rm9ybSJdfQ== */\n/*@ sourceURL=D:\\\\development\\\\AMANDA.public\\\\components\\\\Kontakt\\\\kontaktForm.jsx */"));
};

_s(kontaktForm, "+By3yq8GVt8lF0ze4WFr6TqAkc4=", false, function () {
  return [useStyles];
});

/* harmony default export */ __webpack_exports__["default"] = (kontaktForm);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0tvbnRha3Qva29udGFrdEZvcm0uanN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJ3aWR0aCIsImZvcm1Db250cm9sIiwibWFyZ2luVG9wIiwiaWNvbiIsIm1hcmdpbiIsImtvbnRha3RGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic3VibWl0dGVkIiwic3VibWl0dGluZyIsImluZm8iLCJlcnJvciIsIm1zZyIsInN0YXR1cyIsInNldFN0YXR1cyIsIm5hbWUiLCJlbWFpbCIsImJldHJlZmYiLCJtZXNzYWdlIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlUmVzcG9uc2UiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJwZXJzaXN0IiwicHJldiIsInRhcmdldCIsImlkIiwidmFsdWUiLCJoYW5kbGVPblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHJldlN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxNQUFJLEVBQUU7QUFDSixhQUFTO0FBQ1BDLGdCQUFVLEVBQUUsTUFETDtBQUVQQyxtQkFBYSxFQUFFLE1BRlI7QUFHUEMsV0FBSyxFQUFFO0FBSEE7QUFETCxHQURxQjtBQVEzQkMsYUFBVyxFQUFFO0FBQ1hDLGFBQVMsRUFBRSxNQURBO0FBRVhGLFNBQUssRUFBRTtBQUZJLEdBUmM7QUFZM0JHLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFESjtBQVpxQixDQUFELENBQTVCOztBQWlCQSxJQUFN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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHpCLHVDQUZGLENBVEYsQ0FKRixDQURGLENBREw7QUFBQTtBQUFBO0FBQUEsNjRaQURDO0FBZ0tELENBOU5EOztHQUFNRSxXO1VBQ1lWLFM7OztBQThOSFUsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmU5MDM0OGU5YWQxMmRmMWMzOGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgSW5wdXRMYWJlbCwgSW5wdXQsIEZvcm1Db250cm9sLCBGb3JtSGVscGVyVGV4dCAgIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UZWxlZ3JhbSc7XHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lJztcclxuaW1wb3J0IFJvb21JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Sb29tJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgICcmID4gKic6IHtcclxuICAgICAgcGFkZGluZ1RvcDogJzYwcHgnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnNjBweCcsXHJcbiAgICAgIHdpZHRoOiAnOTAlJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvcm1Db250cm9sOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJSdcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIG1hcmdpbjogJzEwcHgnXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGtvbnRha3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoe1xyXG4gICAgc3VibWl0dGVkOiBmYWxzZSxcclxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxyXG4gICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgYmV0cmVmZjogJycsXHJcbiAgICBtZXNzYWdlOiAnJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHN0YXR1cywgbXNnKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgc2V0U3RhdHVzKHtcclxuICAgICAgICBzdWJtaXR0ZWQ6IHRydWUsXHJcbiAgICAgICAgc3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbXNnIH1cclxuICAgICAgfSlcclxuICAgICAgc2V0SW5wdXRzKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgYmV0cmVmZjogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJydcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXR1cyh7XHJcbiAgICAgICAgaW5mbzogeyBlcnJvcjogdHJ1ZSwgbXNnOiBtc2cgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGUucGVyc2lzdCgpXHJcbiAgICBzZXRJbnB1dHMocHJldiA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSkpXHJcbiAgICBzZXRTdGF0dXMoe1xyXG4gICAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgaW5mbzogeyBlcnJvcjogZmFsc2UsIG1zZzogbnVsbCB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0U3RhdHVzKHByZXZTdGF0dXMgPT4gKHsgLi4ucHJldlN0YXR1cywgc3VibWl0dGluZzogdHJ1ZSB9KSlcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3NlbmQnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnB1dHMpXHJcbiAgICB9KVxyXG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KClcclxuICAgIGhhbmRsZVJlc3BvbnNlKHJlcy5zdGF0dXMsIHRleHQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gPGRpdiBjbGFzc05hbWU9XCJrb250YWt0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkcmVzc1wiPiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPktvbnRha3Q8L2g0PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5Nb21lbnRhbiBlcnJlaWNoc3QgZHUgdW5zIGFtIGJlc3RlbiBwZXIgTWFpbC48L3A+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3RJbmZvJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3REZXRhaWxzJz5cclxuICAgICAgICAgICAgICA8UGhvbmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgPHA+KzQxIGNvbWluZyBzb29uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhY3REZXRhaWxzJz5cclxuICAgICAgICAgICAgICA8VGVsZWdyYW1JY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgPHA+aW5mb0BhbWFuZGEtdGVjaG5vbG9neS5jaDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWN0RGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgPFJvb21JY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufS8+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBBTURBTkRBIFRlY2hub2xvZ3kgR21iSDxici8+XHJcbiAgICAgICAgICAgICAgICBTYW50aWhhbnN3ZWcgMTBBLCAzMTg2IETDvGRpbmdlblxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnN1Ym1pdEJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCNmZjhmMDAsI2ZmZTE4MCk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHhcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RJbmZvIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtTGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICM0YzU0NjI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5maWVsZHNDb250YWluZXJ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgcGFkZGluZzogODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3REZXRhaWxzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgICAgIH1cclxuICAgICAgICAua29udGFrdENvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNTQ2MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmtvbnRha3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDM0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzIzZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEzNjdweCkge1xyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmllbGRzQ29udGFpbmVye1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgIHtcclxuICAgICAgICAgIC5rb250YWt0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGRyZXNzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRjNTQ2MjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5rb250YWt0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YzU0NjI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAua29udGFrdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAua29udGFrdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmllbGRzQ29udGFpbmVye1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQga29udGFrdEZvcm0iXSwic291cmNlUm9vdCI6IiJ9