"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
var _reactNativeSvg = require("react-native-svg");
var _ptsChevronRight = _interopRequireDefault(require("../symbolics/pts-chevron-right"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
    minHeight: 64,
    justifyContent: "center"
  },
  border: {
    borderColor: (0, _theming.pickGrey)(5, scheme),
    borderBottomWidth: 1
  },
  innerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap"
  },
  childWrapper: {
    flexBasis: 0,
    flexGrow: 1,
    justifyContent: "center"
  },
  actionIndicator: {
    width: 32,
    height: 32,
    flexShrink: 0
  }
});
// ============================================================================
// Component
// ============================================================================
const PtBoxListItemTouchable = ({
  children,
  last = false,
  onPress = () => {}
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(_reactNative.TouchableHighlight, {
    activeOpacity: 1,
    underlayColor: (0, _theming.pickGrey)(3, scheme),
    onPress: onPress,
    style: [stylesheet.listItem, !last && stylesheet.border]
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.innerWrapper
  }, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.childWrapper
  }, children), /*#__PURE__*/React.createElement(_reactNativeSvg.Svg, {
    style: stylesheet.actionIndicator,
    viewBox: "0 0 24 24",
    width: 32,
    height: 32,
    fill: (0, _theming.pickGrey)(5, scheme)
  }, /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
    d: _ptsChevronRight.default
  }))));
};
var _default = exports.default = PtBoxListItemTouchable;
//# sourceMappingURL=pt-box-list-item-touchable.js.mapmap