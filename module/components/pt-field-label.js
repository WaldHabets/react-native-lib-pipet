/**
 * Text component
 * @author Wald Habets
 */

import { StyleSheet, Text, useColorScheme } from 'react-native';
import { getColourScheme, pickGrey } from '../theming';

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = scheme => StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: pickGrey(8, scheme)
  }
});

// =============================================================================
// Component
// =============================================================================

const PtFieldLabel = ({
  children
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(Text, {
    style: stylesheet.label
  }, children);
};
export default PtFieldLabel;
//# sourceMappingURL=pt-field-label.js.map