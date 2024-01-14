"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Units = exports.Theme = exports.Layouts = exports.DefaultStyles = exports.Colours = void 0;
exports.getColourScheme = getColourScheme;
exports.pickColour = pickColour;
exports.pickGrey = pickGrey;
var _reactNative = require("react-native");
const Units = exports.Units = {
  spacing: {
    tiny: 4,
    small: 8,
    medium: 16
  },
  minTouchableHeight: 44,
  text: {
    default: 16,
    formElements: 16,
    boxHeader: 18
  },
  borderRadius: {
    formElements: 4
  },
  header: {
    title: {
      fontSize: 48,
      fontWeight: "600"
    },
    blurb: {
      fontSize: 18,
      fontWeight: "600"
    }
  }
};
const Colours = exports.Colours = {
  "light": {
    body: "#f7f7f7",
    box: {
      default: "#fff",
      highlight: "#eee"
    },
    border: "#999",
    text: {
      default: "#1a1a1a",
      disabled: "#8c8c8c"
    },
    grey: {
      1: "hsl(  0,   0%, 100%)",
      2: "hsl(  0,   0%, 95%)",
      3: "hsl(  0,   0%, 90%)",
      4: "hsl(  0,   0%, 75%)",
      5: "hsl(  0,   0%, 60%)",
      6: "hsl(  0,   0%, 40%)",
      7: "hsl(  0,   0%, 20%)",
      8: "hsl(  0,   0%, 10%)"
    },
    accent: {
      1: "hsl(180,  80%,  90%)",
      2: "hsl(180,  80%,  75%)",
      3: "hsl(180,  80%,  60%)",
      4: "hsl(180,  80%,  40%)",
      5: "hsl(180,  80%,  20%)"
    },
    info: {
      soft: "#99ccffff",
      button: "#4da6ffff",
      default: "#0080ffff",
      border: "#0059b3ff",
      standalone: "#003366ff",
      1: "hsl(210, 100%,  90%)",
      2: "hsl(210, 100%,  75%)",
      3: "hsl(210, 100%,  60%)",
      4: "hsl(210, 100%,  40%)",
      5: "hsl(210, 100%,  20%)"
    },
    warn: {
      soft: "#ffdd99ff",
      button: "#ffc34dff",
      default: "#ffaa00ff",
      border: "#b37700ff",
      standalone: "#664400ff",
      1: "hsl( 40, 100%,  90%)",
      2: "hsl( 40, 100%,  75%)",
      3: "hsl( 40, 100%,  60%)",
      4: "hsl( 40, 100%,  40%)",
      5: "hsl( 40, 100%,  20%)"
    },
    critical: {
      soft: "#ffccccff",
      button: "#ff8080ff",
      default: "#ff333dff",
      border: "#b32424ff",
      standalone: "#661414ff",
      1: "hsl(  0, 100%,  90%)",
      2: "hsl(  0, 100%,  75%)",
      3: "hsl(  0, 100%,  60%)",
      4: "hsl(  0, 100%,  40%)",
      5: "hsl(  0, 100%,  20%)"
    },
    good: {
      soft: "#b8e6d0ff",
      button: "#73e6b0ff",
      default: "#2ee690ff",
      border: "#1f9960ff",
      standalone: "#0f4d30ff",
      1: "hsl(152,  70%,  90%)",
      2: "hsl(152,  70%,  75%)",
      3: "hsl(152,  70%,  60%)",
      4: "hsl(152,  70%,  40%)",
      5: "hsl(152,  70%,  20%)"
    },
    button: {
      gradientStart: "#ccc",
      gradientEnd: "#fff",
      disabled: {
        background: "#e5e5e5",
        border: "#cccccc"
      }
    }
  },
  "dark": {
    grey: {
      1: "hsl(  0,   0%, 5%)",
      2: "hsl(  0,   0%, 10%)",
      3: "hsl(  0,   0%, 15%)",
      4: "hsl(  0,   0%, 30%)",
      5: "hsl(  0,   0%, 45%)",
      6: "hsl(  0,   0%, 65%)",
      7: "hsl(  0,   0%, 85%)",
      8: "hsl(  0,   0%, 95%)"
    },
    accent: {
      1: "hsl(180,  80%,  10%)",
      2: "hsl(180,  80%,  25%)",
      3: "hsl(180,  80%,  40%)",
      4: "hsl(180,  80%,  60%)",
      5: "hsl(180,  80%,  80%)"
    },
    info: {
      1: "hsl(210, 100%,  10%)",
      2: "hsl(210, 100%,  25%)",
      3: "hsl(210, 100%,  40%)",
      4: "hsl(210, 100%,  60%)",
      5: "hsl(210, 100%,  80%)"
    },
    warn: {
      1: "hsl( 40, 100%,  10%)",
      2: "hsl( 40, 100%,  25%)",
      3: "hsl( 40, 100%,  40%)",
      4: "hsl( 40, 100%,  60%)",
      5: "hsl( 40, 100%,  80%)"
    },
    critical: {
      1: "hsl(  0, 100%,  10%)",
      2: "hsl(  0, 100%,  25%)",
      3: "hsl(  0, 100%,  40%)",
      4: "hsl(  0, 100%,  60%)",
      5: "hsl(  0, 100%,  80%)"
    },
    good: {
      1: "hsl(152,  70%,  10%)",
      2: "hsl(152,  70%,  25%)",
      3: "hsl(152,  70%,  40%)",
      4: "hsl(152,  70%,  60%)",
      5: "hsl(152,  70%,  80%)"
    }
  }
};
var Theme;
(function (Theme) {
  Theme[Theme["Accent"] = 0] = "Accent";
  Theme[Theme["Info"] = 1] = "Info";
  Theme[Theme["Warning"] = 2] = "Warning";
  Theme[Theme["Critical"] = 3] = "Critical";
  Theme[Theme["Good"] = 4] = "Good";
  Theme[Theme["Default"] = 5] = "Default";
})(Theme || (exports.Theme = Theme = {}));
function pickColour(theme, variant, scheme = "light") {
  switch (theme) {
    case Theme.Info:
      return Colours[scheme].info[variant];
    case Theme.Warning:
      return Colours[scheme].warn[variant];
    case Theme.Critical:
      return Colours[scheme].critical[variant];
    case Theme.Good:
      return Colours[scheme].good[variant];
    case Theme.Accent:
      return Colours[scheme].accent[variant];
    default:
      return Colours[scheme].grey[variant];
  }
}
function pickGrey(variant, scheme = "light") {
  return Colours[scheme].grey[variant];
}
function getColourScheme(schemeName) {
  return schemeName === "dark" ? "dark" : "light";
}
const Layouts = exports.Layouts = _reactNative.StyleSheet.create({
  horizontal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  horizontalSpaced: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
  },
  img_large: {
    width: 64,
    height: 64
  },
  img_medium: {
    width: 48,
    height: 48
  },
  img_small: {
    width: 32,
    height: 32
  }
});
const DefaultStyles = exports.DefaultStyles = _reactNative.StyleSheet.create({
  main: {
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  bottomBarSingleButton: {
    display: "flex",
    flex: 1
  },
  growWidth: {
    width: "100%"
  },
  grow: {
    flexGrow: 1,
    flexBasis: 0
  },
  gridGaps: {
    columnGap: 8,
    rowGap: 8
  },
  text: {
    fontSize: 16,
    fontWeight: "normal",
    color: Colours.light.text.default
  }
});
//# sourceMappingURL=theming.js.mapng.js.map