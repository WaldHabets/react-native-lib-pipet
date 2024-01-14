/**
 * Button Component
 * @author wald-habets
 * @todo: refactor styling logic
 */

import { useState } from 'react';
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getColourScheme, pickColour, pickGrey, Theme, Units } from '../theming';
import PtSymbolic from "./pt-symbolic";

// ============================================================================
// Styling
// ============================================================================

const getStylesheet = (theme, scheme) => StyleSheet.create({
  button: {
    minHeight: Units.minTouchableHeight,
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  disabled: {
    backgroundColor: pickGrey(3, scheme),
    borderColor: pickGrey(4, scheme)
  },
  enabled: {
    borderBottomWidth: 3,
    borderColor: pickGrey(5, scheme)
  },
  pressed: {
    borderBottomWidth: 1,
    borderColor: pickGrey(5, scheme)
  },
  text: {
    textAlign: 'center',
    color: pickGrey(8, scheme),
    fontWeight: '600',
    fontSize: 18,
    flexWrap: 'wrap'
  },
  textDisabled: {
    color: pickGrey(7, scheme)
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
    case Theme.Default:
      return StyleSheet.create({
        button: {
          borderColor: pickGrey(5, scheme)
        },
        text: {
          color: pickGrey(8, scheme)
        }
      });
    default:
      return StyleSheet.create({
        button: {
          borderColor: pickColour(theme, 4)
        },
        text: {
          color: pickGrey(8, scheme)
        }
      });
  }
};
const buildButtonStyle = (theme, scheme) => {
  switch (theme) {
    case Theme.Default:
      return {
        style: getTypeSheet(theme, scheme),
        gradient: [pickColour(theme, 4), pickColour(theme, 2)]
      };
    default:
      return {
        style: getTypeSheet(theme, scheme),
        gradient: [pickColour(theme, 3), pickColour(theme, 1)]
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
  theme = Theme.Default,
  style = null,
  onPress = null
}) => {
  const scheme = getColourScheme(useColorScheme());
  const stylesheet = getStylesheet(Theme.Info, scheme);
  let [pressed, setPressed] = useState(false);
  const typeSheet = buildButtonStyle(theme, scheme);
  const styles = [stylesheet.button];
  if (disabled) styles.push(stylesheet.disabled);else {
    if (pressed) styles.push(stylesheet.pressed);else styles.push(stylesheet.enabled);
    styles.push(typeSheet.style.button);
  }
  return /*#__PURE__*/React.createElement(Pressable, {
    style: [styles, style],
    onPress: onPress,
    onPressIn: () => setPressed(true),
    onPressOut: () => setPressed(false)
  }, !disabled ? pressed ? /*#__PURE__*/React.createElement(LinearGradient, {
    colors: typeSheet.gradient.reverse(),
    start: {
      x: 0,
      y: 1
    },
    end: {
      x: 0,
      y: 0.35
    },
    style: [StyleSheet.absoluteFill, stylesheet.gradient]
  }) : /*#__PURE__*/React.createElement(LinearGradient, {
    colors: typeSheet.gradient,
    start: {
      x: 0,
      y: 0.65
    },
    end: {
      x: 0,
      y: 0
    },
    style: [StyleSheet.absoluteFill, stylesheet.gradient]
  }) : null, symbolic && /*#__PURE__*/React.createElement(PtSymbolic, {
    path: symbolic,
    dim: 24,
    fill: pickGrey(8, scheme)
  }), text && /*#__PURE__*/React.createElement(Text, {
    style: [disabled ? stylesheet.textDisabled : stylesheet.text]
  }, text));
};
export default PtButton;
//# sourceMappingURL=pt-button.js.map