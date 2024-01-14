/**
 * Page Header Component
 * @author Wald Habets
 */

import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Theme, pickColour, getColourScheme, pickGrey } from '../theming';

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = (theme, scheme) => {
  return StyleSheet.create({
    header: {
      alignItems: 'flex-start',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomColor: pickGrey(5, scheme),
      borderBottomWidth: 1
    },
    title: {
      color: pickColour(theme, 5, scheme),
      fontSize: 48,
      fontWeight: "800",
      // todo: update
      marginBottom: 0
    },
    blurb: {
      color: pickGrey(8, scheme),
      fontSize: 18,
      fontWeight: "800",
      // todo: update
      marginTop: 4
    }
  });
};

// =============================================================================
// Component
// =============================================================================

const PtPageHeader = ({
  title,
  blurb = null,
  theme = Theme.Accent
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(theme, scheme);
  return /*#__PURE__*/React.createElement(View, {
    style: stylesheet.header
  }, /*#__PURE__*/React.createElement(Text, {
    numberOfLines: 1,
    adjustsFontSizeToFit: true,
    style: stylesheet.title
  }, title), blurb && /*#__PURE__*/React.createElement(Text, {
    style: stylesheet.blurb
  }, blurb));
};
export default PtPageHeader;
//# sourceMappingURL=pt-page-header.js.map