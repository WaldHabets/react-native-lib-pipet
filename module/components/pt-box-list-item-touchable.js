/**
 * Simple Box Header component
 * @author Wald Habets
 */

import { StyleSheet, TouchableHighlight, View, useColorScheme } from "react-native";
import { getColourScheme, pickGrey } from "../theming";
import { Path, Svg } from "react-native-svg";
import PtsChevronRight from "../symbolics/pts-chevron-right";

// ============================================================================
// Styling
// ============================================================================

const getStyleSheet = scheme => StyleSheet.create({
  listItem: {
    padding: 8,
    minHeight: 64,
    justifyContent: "center"
  },
  border: {
    borderColor: pickGrey(5, scheme),
    borderBottomWidth: 1
  },
  innerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap"
  },
  childWrapper: {
    flexBasis: 0,
    flexGrow: 1,
    justifyContent: "center"
  },
  actionIndicator: {
    width: 32,
    height: 32,
    flexShrink: 0
  }
});

// ============================================================================
// Component
// ============================================================================

const PtBoxListItemTouchable = ({
  children,
  last = false,
  onPress = () => {}
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  return /*#__PURE__*/React.createElement(TouchableHighlight, {
    activeOpacity: 1,
    underlayColor: pickGrey(3, scheme),
    onPress: onPress,
    style: [stylesheet.listItem, !last && stylesheet.border]
  }, /*#__PURE__*/React.createElement(View, {
    style: stylesheet.innerWrapper
  }, /*#__PURE__*/React.createElement(View, {
    style: stylesheet.childWrapper
  }, children), /*#__PURE__*/React.createElement(Svg, {
    style: stylesheet.actionIndicator,
    viewBox: "0 0 24 24",
    width: 32,
    height: 32,
    fill: pickGrey(5, scheme)
  }, /*#__PURE__*/React.createElement(Path, {
    d: PtsChevronRight
  }))));
};
export default PtBoxListItemTouchable;
//# sourceMappingURL=pt-box-list-item-touchable.js.map