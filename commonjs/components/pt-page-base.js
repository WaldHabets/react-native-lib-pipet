"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _theming = require("../theming");
/**
 * Default Page component
 * @author Wald Habets
 */

// =============================================================================
// Styling
// =============================================================================
const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  view: {
    backgroundColor: (0, _theming.pickGrey)(2, scheme),
    color: (0, _theming.pickGrey)(8, scheme),
    fontWeight: "normal",
    fontSize: 16
  },
  page: {
    display: "flex",
    backgroundColor: (0, _theming.pickGrey)(2, scheme),
    color: (0, _theming.pickGrey)(8, scheme),
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
    backgroundColor: (0, _theming.pickGrey)(1, scheme),
    borderTopWidth: 2,
    borderColor: (0, _theming.pickGrey)(5, scheme),
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
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  const bar_style = scheme === "dark" ? "light-content" : "dark-content";
  return /*#__PURE__*/React.createElement(_reactNative.SafeAreaView, {
    style: stylesheet.view
  }, /*#__PURE__*/React.createElement(_reactNative.StatusBar, {
    barStyle: bar_style,
    backgroundColor: (0, _theming.pickGrey)(2, scheme)
  }), /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.page
  }, /*#__PURE__*/React.createElement(_reactNative.ScrollView, {
    contentInsetAdjustmentBehavior: "automatic",
    stickyHeaderIndices: [sticky],
    style: stylesheet.scrollbox
  }, children), bottomBarContent && /*#__PURE__*/React.createElement(_reactNative.View, {
    style: stylesheet.bottomBar
  }, bottomBarContent)));
};
var _default = exports.default = PtPage;
//# sourceMappingURL=pt-page-base.js.mapmap