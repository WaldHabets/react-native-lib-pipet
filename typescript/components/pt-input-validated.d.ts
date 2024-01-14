/**
 * Text component
 * @author Wald Habets
 * @todo: deprecate
 */
import { FC } from 'react';
declare const PtInputValidated: FC<{
    value: string;
    onValue?: ((value: string, valid: boolean) => void) | null;
    placeholder?: string | null;
    validator: ((value: string) => boolean);
}>;
export default PtInputValidated;
//# sourceMappingURL=pt-input-validated.d.ts.map