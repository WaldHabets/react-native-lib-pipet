/**
 * Simple Box Header component
 * @author Wald Habets
 */
import { useColorScheme } from "react-native";
import { Path, Svg } from "react-native-svg";
import { getColourScheme, pickGrey } from "../theming";
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
  const scheme = getColourScheme(useColorScheme());
  if (dim) {
    width = dim;
    height = dim;
  }
  fill = fill ? fill : pickGrey(8, scheme);
  return /*#__PURE__*/React.createElement(Svg, {
    viewBox: "0 0 24 24",
    style: style,
    width: width,
    height: height,
    fill: fill
  }, /*#__PURE__*/React.createElement(Path, {
    d: path
  }));
};
export default PtSymbolic;
//# sourceMappingURL=pt-symbolic.js.mapmap