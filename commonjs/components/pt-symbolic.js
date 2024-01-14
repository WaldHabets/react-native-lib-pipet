"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _reactNativeSvg = require("react-native-svg");
var _theming = require("../theming");
/**
 * Simple Box Header component
 * @author Wald Habets
 */

// =============================================================================
// Component
// =============================================================================

const PtSymbolic = ({
  path,
  width = 24,
  height = 24,
  dim = null,
  style = null,
  fill = null
}) => {
  // todo: complete
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  if (dim) {
    width = dim;
    height = dim;
  }
  fill = fill ? fill : (0, _theming.pickGrey)(8, scheme);
  return /*#__PURE__*/React.createElement(_reactNativeSvg.Svg, {
    viewBox: "0 0 24 24",
    style: style,
    width: width,
    height: height,
    fill: fill
  }, /*#__PURE__*/React.createElement(_reactNativeSvg.Path, {
    d: path
  }));
};
var _default = exports.default = PtSymbolic;
//# sourceMappingURL=pt-symbolic.js.map