"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _theming = require("../theming");
/**
 * Text component
 * @author Wald Habets
 * @todo: deprecate
 */

const getStyleSheet = scheme => _reactNative.StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: (0, _theming.pickGrey)(8, scheme)
  },
  formValid: {
    borderColor: (0, _theming.pickColour)(_theming.Theme.Good, 4, scheme),
    borderWidth: 1,
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: (0, _theming.pickGrey)(1, scheme),
    color: (0, _theming.pickGrey)(8, scheme)
  },
  formInvalid: {
    borderColor: (0, _theming.pickColour)(_theming.Theme.Critical, 4, scheme),
    borderWidth: 1,
    borderBottomWidth: 3,
    borderStyle: "solid",
    borderRadius: 4,
    backgroundColor: (0, _theming.pickGrey)(1, scheme),
    color: (0, _theming.pickGrey)(8, scheme)
  }
});
const PtInputValidated = ({
  value,
  placeholder = null,
  onValue = null,
  validator
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStyleSheet(scheme);
  const [valid, setValid] = (0, _react.useState)(validator(value));
  const [state, setState] = (0, _react.useState)(value);
  const onChange = input => {
    setValid(validator(input));
    setState(input);
    if (onValue) onValue(input, valid);
  };
  return /*#__PURE__*/React.createElement(_reactNative.TextInput, {
    style: valid ? stylesheet.formValid : stylesheet.formInvalid,
    onChangeText: onChange,
    value: state,
    keyboardType: "numeric"
  });
};
var _default = exports.default = PtInputValidated;
//# sourceMappingURL=pt-input-validated.js.map