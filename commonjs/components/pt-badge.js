"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _ptText = _interopRequireDefault(require("./pt-text"));
var _ptSymbolic = _interopRequireDefault(require("./pt-symbolic"));
var _theming = require("../theming");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Badge Component
 * @author Wald Habets
 */

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = (theme, scheme) => _reactNative.StyleSheet.create({
  badge: {
    backgroundColor: (0, _theming.pickColour)(theme, 1, scheme),
    borderColor: (0, _theming.pickColour)(theme, 4, scheme),
    borderWidth: 1,
    borderRadius: 4
  }
});

// =============================================================================
// Component
// =============================================================================

const PtBadge = ({
  symbolic = null,
  theme = _theming.Theme.Default,
  children
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(theme, scheme);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.badge
  }, symbolic ? /*#__PURE__*/React.createElement(_ptSymbolic.default, {
    path: symbolic,
    dim: 24,
    fill: (0, _theming.pickGrey)(8, scheme)
  }) : null, /*#__PURE__*/React.createElement(_ptText.default, null, children));
};
var _default = exports.default = PtBadge;
//# sourceMappingURL=pt-badge.js.map