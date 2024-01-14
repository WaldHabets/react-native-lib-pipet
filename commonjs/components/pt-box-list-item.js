"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
/**
 * Simple Box Header component
 * @author Wald Habets
 */

// ============================================================================
// Styling
// ============================================================================

const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  listItem: {
    padding: 8,
    minHeight: 48
  },
  border: {
    borderColor: (0, _theming.pickGrey)(5, scheme),
    borderBottomWidth: 1
  }
});

// ============================================================================
// Component
// ============================================================================

const PtBoxListItem = ({
  children,
  last = false
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [stylesheet.listItem, !last && stylesheet.border]
  }, children);
};
var _default = exports.default = PtBoxListItem;
//# sourceMappingURL=pt-box-list-item.js.map