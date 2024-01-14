/**
 * Back Button Component
 * @author Wald Habets
 */

import { Pressable, StyleSheet, Text, useColorScheme } from "react-native";
import { Theme, getColourScheme, pickColour, pickGrey } from "../theming";
import PtSymbolic from "./pt-symbolic";
import PtsChevronLeft from "../symbolics/pts-chevron-left";

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = scheme => StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: pickGrey(8, scheme),
    textDecorationLine: "underline"
  }
});

// =============================================================================
// Component
// =============================================================================

const PtButtonBack = ({
  text,
  onPress
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(Pressable, {
    style: stylesheet.button,
    onPress: onPress
  }, /*#__PURE__*/React.createElement(PtSymbolic, {
    dim: 32,
    path: PtsChevronLeft,
    fill: pickColour(Theme.Accent, 5, scheme)
  }), /*#__PURE__*/React.createElement(Text, {
    style: stylesheet.text
  }, text));
};
export default PtButtonBack;
//# sourceMappingURL=pt-button-back.js.map