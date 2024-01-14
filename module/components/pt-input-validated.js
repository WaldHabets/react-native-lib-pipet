/**
 * Text component
 * @author Wald Habets
 * @todo: deprecate
 */

import { useState } from 'react';
import { StyleSheet, TextInput, useColorScheme } from 'react-native';
import { getColourScheme, pickColour, pickGrey, Theme } from '../theming';
const getStyleSheet = scheme => StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: pickGrey(8, scheme)
  },
  formValid: {
    borderColor: pickColour(Theme.Good, 4, scheme),
    borderWidth: 1,
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: pickGrey(1, scheme),
    color: pickGrey(8, scheme)
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
const PtInputValidated = ({
  value,
  placeholder = null,
  onValue = null,
  validator
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStyleSheet(scheme);
  const [valid, setValid] = useState(validator(value));
  const [state, setState] = useState(value);
  const onChange = input => {
    setValid(validator(input));
    setState(input);
    if (onValue) onValue(input, valid);
  };
  return /*#__PURE__*/React.createElement(TextInput, {
    style: valid ? stylesheet.formValid : stylesheet.formInvalid,
    onChangeText: onChange,
    value: state,
    keyboardType: "numeric"
  });
};
export default PtInputValidated;
//# sourceMappingURL=pt-input-validated.js.map