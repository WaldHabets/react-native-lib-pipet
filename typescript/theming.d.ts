import { ColorSchemeName } from "react-native";
export declare const Units: {
    spacing: {
        tiny: number;
        small: number;
        medium: number;
    };
    minTouchableHeight: number;
    text: {
        default: number;
        formElements: number;
        boxHeader: number;
    };
    borderRadius: {
        formElements: number;
    };
    header: {
        title: {
            fontSize: number;
            fontWeight: string;
        };
        blurb: {
            fontSize: number;
            fontWeight: string;
        };
    };
};
export declare const Colours: {
    light: {
        body: string;
        box: {
            default: string;
            highlight: string;
        };
        border: string;
        text: {
            default: string;
            disabled: string;
        };
        grey: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
        };
        accent: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        info: {
            soft: string;
            button: string;
            default: string;
            border: string;
            standalone: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        warn: {
            soft: string;
            button: string;
            default: string;
            border: string;
            standalone: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        critical: {
            soft: string;
            button: string;
            default: string;
            border: string;
            standalone: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        good: {
            soft: string;
            button: string;
            default: string;
            border: string;
            standalone: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        button: {
            gradientStart: string;
            gradientEnd: string;
            disabled: {
                background: string;
                border: string;
            };
        };
    };
    dark: {
        grey: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
        };
        accent: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        info: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        warn: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        critical: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        good: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
    };
};
export declare enum Theme {
    Accent = 0,
    Info = 1,
    Warning = 2,
    Critical = 3,
    Good = 4,
    Default = 5
}
export type AccentVariant = 1 | 2 | 3 | 4 | 5;
export type GreyVariant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type ColourScheme = 'light' | 'dark';
export declare function pickColour(theme: Theme, variant: AccentVariant, scheme?: ColourScheme): string;
export declare function pickGrey(variant: GreyVariant, scheme?: ColourScheme): string;
export declare function getColourScheme(schemeName: ColorSchemeName): ColourScheme;
export declare const Layouts: {
    horizontal: {
        display: "flex";
        flexDirection: "row";
        alignItems: "center";
        gap: number;
    };
    horizontalSpaced: {
        display: "flex";
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "space-between";
        gap: number;
    };
    img_large: {
        width: number;
        height: number;
    };
    img_medium: {
        width: number;
        height: number;
    };
    img_small: {
        width: number;
        height: number;
    };
};
export declare const DefaultStyles: {
    main: {
        paddingHorizontal: number;
        paddingVertical: number;
    };
    bottomBarSingleButton: {
        display: "flex";
        flex: number;
    };
    growWidth: {
        width: "100%";
    };
    grow: {
        flexGrow: number;
        flexBasis: number;
    };
    gridGaps: {
        columnGap: number;
        rowGap: number;
    };
    text: {
        fontSize: number;
        fontWeight: "normal";
        color: string;
    };
};
//# sourceMappingURL=theming.d.ts.map