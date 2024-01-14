/**
 * Simple Box Header component
 * @author Wald Habets
 */
import { StyleSheet, View, useColorScheme } from "react-native";
import { getColourScheme, pickGrey } from "../theming";
// ============================================================================
// Styling
// ============================================================================
const getStyleSheet = scheme => StyleSheet.create({
  listItem: {
    padding: 8,
    minHeight: 48
  },
  border: {
    borderColor: pickGrey(5, scheme),
    borderBottomWidth: 1
  }
});
// ============================================================================
// Component
// ============================================================================
const PtBoxListItem = ({
  children,
  last = false
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(View, {
    style: [stylesheet.listItem, !last && stylesheet.border]
  }, children);
};
export default PtBoxListItem;
//# sourceMappingURL=pt-box-list-item.js.maps.map