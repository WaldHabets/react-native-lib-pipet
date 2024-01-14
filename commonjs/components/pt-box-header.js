"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
var _ptText = _interopRequireDefault(require("./pt-text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Box Header component
 * @author wald-habets
 */

// ============================================================================
// Styling
// ============================================================================

const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  boxHeader: {
    marginBottom: 8
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: (0, _theming.pickGrey)(8, scheme)
  }
});

// ============================================================================
// Component
// ============================================================================

const PtBoxHeader = ({
  title,
  blurb = null
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.boxHeader
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: stylesheet.title
  }, title), blurb && /*#__PURE__*/React.createElement(_ptText.default, null, blurb));
};
var _default = exports.default = PtBoxHeader;
//# sourceMappingURL=pt-box-header.js.map