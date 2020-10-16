"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _planodefundo = _interopRequireDefault(require("./assets/planodefundo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: {
      main: '#FFCB47'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    h1: {
      fontFamily: 'Elsie Swash Caps',
      fontWeight: 900
    },
    h2: {
      fontFamily: 'Elsie Swash Caps',
      fontWeight: 900
    },
    h3: {
      fontFamily: 'Elsie Swash Caps',
      fontWeight: 900
    },
    h4: {
      fontFamily: 'Elsie Swash Caps',
      fontWeight: 900
    },
    h5: {
      fontFamily: 'Elsie Swash Caps',
      fontWeight: 900
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "url(".concat(_planodefundo["default"], ")"),
          backgroundSize: 'cover'
        }
      }
    }
  }
});
var _default = theme;
exports["default"] = _default;