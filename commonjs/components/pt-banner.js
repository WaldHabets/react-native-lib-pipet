"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _theming = require("../theming");
var _reactNative = require("react-native");
var _symbolics = _interopRequireDefault(require("../symbolics"));
var _reactNativeSvg = require("react-native-svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Banner Component
 * @author wald-habets
 */

// ============================================================================
// Styling
// ============================================================================

const getStylesheet = (theme, scheme) => _reactNative.StyleSheet.create({
  banner: {
    color: (0, _theming.pickGrey)(8, scheme),
    padding: 8,
    borderTopWidth: 8,
    borderTopColor: (0, _theming.pickColour)(theme, 4, scheme),
    columnGap: 8,
    borderRadius: 4,
    backgroundColor: (0, _theming.pickColour)(theme, 1, scheme)
  }
});

// ============================================================================
// Component
// ============================================================================

const PtBanner = ({
  theme = _theming.Theme.Default,
  children
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStylesheet(theme, scheme);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [stylesheet.banner]
  }, /*#__PURE__*/React.createElement(_reactNativeSvg.Svg, {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: (0, _theming.pickColour)(theme, 4, scheme)
  }, /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
    d: _symbolics.default.about
  })), children);
};
var _default = exports.default = PtBanner;
//# sourceMappingURL=pt-banner.js.map