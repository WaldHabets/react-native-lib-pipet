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
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: pickGrey(8, scheme)
  },
  textFlex: {
    flexGrow: 1,
    flexBasis: 0
  }
});

// =============================================================================
// Component
// =============================================================================

const PtText = ({
  children,
  flex = false
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(Text, {
    style: [stylesheet.text, flex ? stylesheet.textFlex : null]
  }, children);
};
export default PtText;
//# sourceMappingURL=pt-text.js.map