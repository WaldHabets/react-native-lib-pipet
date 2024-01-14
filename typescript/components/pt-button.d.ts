/**
 * Button Component
 * @author wald-habets
 * @todo: refactor styling logic
 */
import { FC, PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../theming';
declare const PtButton: FC<PropsWithChildren<{
    disabled?: boolean | null;
    symbolic?: string | null;
    text?: string;
    theme?: Theme;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}>>;
export default PtButton;
//# sourceMappingURL=pt-button.d.ts.map