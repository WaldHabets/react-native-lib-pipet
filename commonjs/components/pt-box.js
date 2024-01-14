"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
/**
 * Box Header component
 * @author wald-habets
 */

// ============================================================================
// Styling
// ============================================================================

const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  box: {
    backgroundColor: (0, _theming.pickGrey)(1, scheme),
    borderColor: (0, _theming.pickGrey)(5, scheme),
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 32
  },
  padded: {
    padding: 8
  }
});

// ============================================================================
// Component
// ============================================================================

const PtBox = ({
  children,
  list = false,
  style = null
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [stylesheet.box, !list && stylesheet.padded, style]
  }, children);
};
var _default = exports.default = PtBox;
//# sourceMappingURL=pt-box.js.map