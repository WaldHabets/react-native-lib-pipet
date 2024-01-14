/**
 * Box Header component
 * @author wald-habets
 */

import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { getColourScheme, pickGrey } from "../theming";
import PtText from "./pt-text";

// ============================================================================
// Styling
// ============================================================================

const getStyleSheet = scheme => StyleSheet.create({
  boxHeader: {
    marginBottom: 8
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: pickGrey(8, scheme)
  }
});

// ============================================================================
// Component
// ============================================================================

const PtBoxHeader = ({
  title,
  blurb = null
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(View, {
    style: stylesheet.boxHeader
  }, /*#__PURE__*/React.createElement(Text, {
    style: stylesheet.title
  }, title), blurb && /*#__PURE__*/React.createElement(PtText, null, blurb));
};
export default PtBoxHeader;
//# sourceMappingURL=pt-box-header.js.map