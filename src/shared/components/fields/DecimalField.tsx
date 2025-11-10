import { DecimalInput } from "../inputs/DecimalInput";
import { TNumberInput } from "../inputs/NumberInput";
import { Field, TField } from "./Field";

type TDecimalField = TNumberInput & Omit<TField, 'input'>

export function DecimalField({ className, error, label, ...props }: TDecimalField) {
    return (
        <Field
            className={className}
            error={error}
            label={label}
            input={
                <DecimalInput {...props} />
            }
        />
    );
}
