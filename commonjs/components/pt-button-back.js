"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
var _ptSymbolic = _interopRequireDefault(require("./pt-symbolic"));
var _ptsChevronLeft = _interopRequireDefault(require("../symbolics/pts-chevron-left"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Back Button Component
 * @author Wald Habets
 */

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: (0, _theming.pickGrey)(8, scheme),
    textDecorationLine: "underline"
  }
});

// =============================================================================
// Component
// =============================================================================

const PtButtonBack = ({
  text,
  onPress
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    style: stylesheet.button,
    onPress: onPress
  }, /*#__PURE__*/React.createElement(_ptSymbolic.default, {
    dim: 32,
    path: _ptsChevronLeft.default,
    fill: (0, _theming.pickColour)(_theming.Theme.Accent, 5, scheme)
  }), /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: stylesheet.text
  }, text));
};
var _default = exports.default = PtButtonBack;
//# sourceMappingURL=pt-button-back.js.map