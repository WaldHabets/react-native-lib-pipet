/**
 * Menubar component
 * @author Wald Habets
 */

import { StyleSheet, View, useColorScheme } from 'react-native';
import { getColourScheme, pickGrey } from '../theming';

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = scheme => StyleSheet.create({
  menubar: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: pickGrey(1, scheme),
    borderBottomColor: pickGrey(5, scheme),
    borderBottomWidth: 1,
    minHeight: 48
  }
});

// =============================================================================
// Component
// =============================================================================

const PtMenubar = ({
  children
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(View, {
    style: stylesheet.menubar
  }, children);
};
export default PtMenubar;
//# sourceMappingURL=pt-menubar.js.map