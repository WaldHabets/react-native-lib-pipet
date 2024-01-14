/**
 * Text component
 * @author Wald Habets
 */

import { useState } from 'react';
import { StyleSheet, TextInput, useColorScheme, View } from 'react-native';
import { getColourScheme, Layouts, pickColour, pickGrey, Theme } from '../theming';
import PtText from "./pt-text";
const getStyleSheet = scheme => StyleSheet.create({
  wrapper: {
    // flexGrow: 0,
    // flexBasis: 0,
  },
  inputGroup: {
    // display: "flex",
    // flexDirection: "row",
    // flexGrow: 1,
    // flexBasis: 0,
    // alignItems: "center"
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: pickGrey(8, scheme)
  },
  formValid: {
    height: 44,
    width: 44,
    borderColor: pickGrey(5, scheme),
    borderWidth: 1,
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: pickGrey(1, scheme),
    color: pickGrey(8, scheme),
    // flexGrow: 1,
    // flexBasis: 0,
    textAlign: "center"
  },
  button_left: {
    minWidth: 44,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  button_right: {
    minWidth: 44,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  formInvalid: {
    borderColor: pickColour(Theme.Critical, 4, scheme),
    borderWidth: 1,
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: pickGrey(1, scheme),
    color: pickGrey(8, scheme)
  }
});
const PtTimeInput = ({
  value = 600,
  placeholder = null,
  onChange = null
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  const h = Math.floor(value / 100);
  const m = value % 100;
  const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const onChangeHours = new_value => {
    let newHours;
    if (new_value === "") {
      newHours = 0;
    } else {
      let int = parseInt(new_value, 10);
      if (isNaN(int)) {
        return;
      }
      int = Math.max(0, int);
      int = Math.min(23, int);
      newHours = int;
    }
    if (onChange) onChange(newHours * 100 + minutes);
    setHours(newHours);
  };
  const onChangeMinutes = new_value => {
    let newMinutes;
    if (new_value === "") {
      newMinutes = 0;
    } else {
      let int = parseInt(new_value, 10);
      if (isNaN(int)) {
        return;
      }
      int = Math.max(0, int);
      int = Math.min(59, int);
      newMinutes = int;
    }
    if (onChange) onChange(hours * 100 + newMinutes);
    setMinutes(newMinutes);
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [Layouts.horizontal, stylesheet.wrapper]
  }, /*#__PURE__*/React.createElement(View, {
    style: stylesheet.inputGroup
  }, /*#__PURE__*/React.createElement(TextInput, {
    style: stylesheet.formValid,
    onChangeText: onChangeHours,
    value: hours.toString(),
    keyboardType: "numeric",
    selectTextOnFocus: true
  })), /*#__PURE__*/React.createElement(PtText, null, ":"), /*#__PURE__*/React.createElement(View, {
    style: stylesheet.inputGroup
  }, /*#__PURE__*/React.createElement(TextInput, {
    style: stylesheet.formValid,
    onChangeText: onChangeMinutes,
    value: minutes.toString(),
    keyboardType: "numeric",
    selectTextOnFocus: true
  })));
};
export default PtTimeInput;
//# sourceMappingURL=pt-time-input.js.map