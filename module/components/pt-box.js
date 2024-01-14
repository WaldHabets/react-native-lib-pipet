/**
 * Box Header component
 * @author wald-habets
 */

import { StyleSheet, View, useColorScheme } from "react-native";
import { getColourScheme, pickGrey } from "../theming";

// ============================================================================
// Styling
// ============================================================================

const getStyleSheet = scheme => StyleSheet.create({
  box: {
    backgroundColor: pickGrey(1, scheme),
    borderColor: pickGrey(5, scheme),
    borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 32
  },
  padded: {
    padding: 8
  }
});

// ============================================================================
// Component
// ============================================================================

const PtBox = ({
  children,
  list = false,
  style = null
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(View, {
    style: [stylesheet.box, !list && stylesheet.padded, style]
  }, children);
};
export default PtBox;
//# sourceMappingURL=pt-box.js.map