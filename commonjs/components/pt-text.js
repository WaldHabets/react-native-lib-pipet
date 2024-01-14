"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
/**
 * Text component
 * @author Wald Habets
 */

// =============================================================================
// Styling
// =============================================================================
const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: (0, _theming.pickGrey)(8, scheme)
  },
  textFlex: {
    flexGrow: 1,
    flexBasis: 0
  }
});
// =============================================================================
// Component
// =============================================================================
const PtText = ({
  children,
  flex = false
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [stylesheet.text, flex ? stylesheet.textFlex : null]
  }, children);
};
var _default = exports.default = PtText;
//# sourceMappingURL=pt-text.js.mapmap