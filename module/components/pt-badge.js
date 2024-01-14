/**
 * Badge Component
 * @author Wald Habets
 */
import { StyleSheet, useColorScheme, View } from "react-native";
import PtText from "./pt-text";
import PtSymbolic from "./pt-symbolic";
import { getColourScheme, pickColour, pickGrey, Theme } from "../theming";
// =============================================================================
// Styling
// =============================================================================
const getStyleSheet = (theme, scheme) => StyleSheet.create({
  badge: {
    backgroundColor: pickColour(theme, 1, scheme),
    borderColor: pickColour(theme, 4, scheme),
    borderWidth: 1,
    borderRadius: 4
  }
});
// =============================================================================
// Component
// =============================================================================
const PtBadge = ({
  symbolic = null,
  theme = Theme.Default,
  children
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(theme, scheme);
  return /*#__PURE__*/React.createElement(View, {
    style: stylesheet.badge
  }, symbolic ? /*#__PURE__*/React.createElement(PtSymbolic, {
    path: symbolic,
    dim: 24,
    fill: pickGrey(8, scheme)
  }) : null, /*#__PURE__*/React.createElement(PtText, null, children));
};
export default PtBadge;
//# sourceMappingURL=pt-badge.js.map