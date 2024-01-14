/**
 * Banner Component
 * @author wald-habets
 */
import { getColourScheme, pickColour, pickGrey, Theme } from "../theming";
import { StyleSheet, useColorScheme, View } from "react-native";
import Symbolics from "../symbolics";
import { Path, Svg } from "react-native-svg";
// ============================================================================
// Styling
// ============================================================================
const getStylesheet = (theme, scheme) => StyleSheet.create({
  banner: {
    color: pickGrey(8, scheme),
    padding: 8,
    borderTopWidth: 8,
    borderTopColor: pickColour(theme, 4, scheme),
    columnGap: 8,
    borderRadius: 4,
    backgroundColor: pickColour(theme, 1, scheme)
  }
});
// ============================================================================
// Component
// ============================================================================
const PtBanner = ({
  theme = Theme.Default,
  children
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStylesheet(theme, scheme);
  return /*#__PURE__*/React.createElement(View, {
    style: [stylesheet.banner]
  }, /*#__PURE__*/React.createElement(Svg, {
    width: 32,
    height: 32,
    viewBox: "0 0 24 24",
    fill: pickColour(theme, 4, scheme)
  }, /*#__PURE__*/React.createElement(Path, {
    d: Symbolics.about
  })), children);
};
export default PtBanner;
//# sourceMappingURL=pt-banner.js.maps.map