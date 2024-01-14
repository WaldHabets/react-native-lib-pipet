"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _theming = require("../theming");
var _ptSymbolic = _interopRequireDefault(require("./pt-symbolic"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Button Component
 * @author wald-habets
 * @todo: refactor styling logic
 */

// ============================================================================
// Styling
// ============================================================================

const getStylesheet = (theme, scheme) => _reactNative.StyleSheet.create({
  button: {
    minHeight: _theming.Units.minTouchableHeight,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  disabled: {
    backgroundColor: (0, _theming.pickGrey)(3, scheme),
    borderColor: (0, _theming.pickGrey)(4, scheme)
  },
  enabled: {
    borderBottomWidth: 3,
    borderColor: (0, _theming.pickGrey)(5, scheme)
  },
  pressed: {
    borderBottomWidth: 1,
    borderColor: (0, _theming.pickGrey)(5, scheme)
  },
  text: {
    textAlign: 'center',
    color: (0, _theming.pickGrey)(8, scheme),
    fontWeight: '600',
    fontSize: 18,
    flexWrap: 'wrap'
  },
  textDisabled: {
    color: (0, _theming.pickGrey)(7, scheme)
  },
  flatText: {
    fontWeight: '600'
  },
  gradient: {
    borderRadius: 2
  }
});
const getTypeSheet = (theme, scheme) => {
  switch (theme) {
    case _theming.Theme.Default:
      return _reactNative.StyleSheet.create({
        button: {
          borderColor: (0, _theming.pickGrey)(5, scheme)
        },
        text: {
          color: (0, _theming.pickGrey)(8, scheme)
        }
      });
    default:
      return _reactNative.StyleSheet.create({
        button: {
          borderColor: (0, _theming.pickColour)(theme, 4)
        },
        text: {
          color: (0, _theming.pickGrey)(8, scheme)
        }
      });
  }
};
const buildButtonStyle = (theme, scheme) => {
  switch (theme) {
    case _theming.Theme.Default:
      return {
        style: getTypeSheet(theme, scheme),
        gradient: [(0, _theming.pickColour)(theme, 4), (0, _theming.pickColour)(theme, 2)]
      };
    default:
      return {
        style: getTypeSheet(theme, scheme),
        gradient: [(0, _theming.pickColour)(theme, 3), (0, _theming.pickColour)(theme, 1)]
      };
  }
};

// ============================================================================
// Component
// ============================================================================

const PtButton = ({
  disabled = false,
  symbolic = null,
  text = null,
  theme = _theming.Theme.Default,
  style = null,
  onPress = null
}) => {
  const scheme = (0, _theming.getColourScheme)((0, _reactNative.useColorScheme)());
  const stylesheet = getStylesheet(_theming.Theme.Info, scheme);
  let [pressed, setPressed] = (0, _react.useState)(false);
  const typeSheet = buildButtonStyle(theme, scheme);
  const styles = [stylesheet.button];
  if (disabled) styles.push(stylesheet.disabled);else {
    if (pressed) styles.push(stylesheet.pressed);else styles.push(stylesheet.enabled);
    styles.push(typeSheet.style.button);
  }
  return /*#__PURE__*/React.createElement(_reactNative.Pressable, {
    style: [styles, style],
    onPress: onPress,
    onPressIn: () => setPressed(true),
    onPressOut: () => setPressed(false)
  }, !disabled ? pressed ? /*#__PURE__*/React.createElement(_reactNativeLinearGradient.default, {
    colors: typeSheet.gradient.reverse(),
    start: {
      x: 0,
      y: 1
    },
    end: {
      x: 0,
      y: 0.35
    },
    style: [_reactNative.StyleSheet.absoluteFill, stylesheet.gradient]
  }) : /*#__PURE__*/React.createElement(_reactNativeLinearGradient.default, {
    colors: typeSheet.gradient,
    start: {
      x: 0,
      y: 0.65
    },
    end: {
      x: 0,
      y: 0
    },
    style: [_reactNative.StyleSheet.absoluteFill, stylesheet.gradient]
  }) : null, symbolic && /*#__PURE__*/React.createElement(_ptSymbolic.default, {
    path: symbolic,
    dim: 24,
    fill: (0, _theming.pickGrey)(8, scheme)
  }), text && /*#__PURE__*/React.createElement(_reactNative.Text, {
    style: [disabled ? stylesheet.textDisabled : stylesheet.text]
  }, text));
};
var _default = exports.default = PtButton;
//# sourceMappingURL=pt-button.js.map