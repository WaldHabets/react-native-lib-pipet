"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
/**
 * Page Header Component
 * @author Wald Habets
 */

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = (theme, scheme) => {
  return _reactNative.StyleSheet.create({
    header: {
      alignItems: 'flex-start',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomColor: (0, _theming.pickGrey)(5, scheme),
      borderBottomWidth: 1
    },
    title: {
      color: (0, _theming.pickColour)(theme, 5, scheme),
      fontSize: 48,
      fontWeight: "800",
      // todo: update
      marginBottom: 0
    },
    blurb: {
      color: (0, _theming.pickGrey)(8, scheme),
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
  theme = _theming.Theme.Accent
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(theme, scheme);
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.header
  }, /*#__PURE__*/React.createElement(_reactNative.Text, {
    numberOfLines: 1,
    adjustsFontSizeToFit: true,
    style: stylesheet.title
  }, title), blurb && /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: stylesheet.blurb
  }, blurb));
};
var _default = exports.default = PtPageHeader;
//# sourceMappingURL=pt-page-header.js.map