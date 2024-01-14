"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
/**
 * Menubar component
 * @author Wald Habets
 */

// =============================================================================
// Styling
// =============================================================================
const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  menubar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: (0, _theming.pickGrey)(1, scheme),
    borderBottomColor: (0, _theming.pickGrey)(5, scheme),
    borderBottomWidth: 1,
    minHeight: 48
  }
});
// =============================================================================
// Component
// =============================================================================
const PtMenubar = ({
  children
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.menubar
  }, children);
};
var _default = exports.default = PtMenubar;
//# sourceMappingURL=pt-menubar.js.mapmap