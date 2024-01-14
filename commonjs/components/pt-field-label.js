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
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: (0, _theming.pickGrey)(8, scheme)
  }
});

// =============================================================================
// Component
// =============================================================================

const PtFieldLabel = ({
  children
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: stylesheet.label
  }, children);
};
var _default = exports.default = PtFieldLabel;
//# sourceMappingURL=pt-field-label.js.map