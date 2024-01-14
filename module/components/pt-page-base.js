/**
 * Default Page component
 * @author Wald Habets
 */

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, useColorScheme } from "react-native";
import { getColourScheme, pickGrey } from "../theming";

// =============================================================================
// Styling
// =============================================================================

const getStyleSheet = scheme => StyleSheet.create({
  view: {
    backgroundColor: pickGrey(2, scheme),
    color: pickGrey(8, scheme),
    fontWeight: "normal",
    fontSize: 16
  },
  page: {
    display: "flex",
    backgroundColor: pickGrey(2, scheme),
    color: pickGrey(8, scheme),
    fontWeight: "normal",
    fontSize: 16,
    height: "100%"
  },
  scrollbox: {
    flexGrow: 1
  },
  bottomBar: {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: pickGrey(1, scheme),
    borderTopWidth: 2,
    borderColor: pickGrey(5, scheme),
    paddingHorizontal: 16,
    paddingVertical: 8
  }
});

// =============================================================================
// Component
// =============================================================================

const PtPage = ({
  children,
  bottomBarContent = null,
  sticky = -1
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  const bar_style = scheme === "dark" ? "light-content" : "dark-content";
  return /*#__PURE__*/React.createElement(SafeAreaView, {
    style: stylesheet.view
  }, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: bar_style,
    backgroundColor: pickGrey(2, scheme)
  }), /*#__PURE__*/React.createElement(View, {
    style: stylesheet.page
  }, /*#__PURE__*/React.createElement(ScrollView, {
    contentInsetAdjustmentBehavior: "automatic",
    stickyHeaderIndices: [sticky],
    style: stylesheet.scrollbox
  }, children), bottomBarContent && /*#__PURE__*/React.createElement(View, {
    style: stylesheet.bottomBar
  }, bottomBarContent)));
};
export default PtPage;
//# sourceMappingURL=pt-page-base.js.map