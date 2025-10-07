import { NumberInput, TNumberInput } from "../inputs/NumberInput";
import { Field, TField } from "./Field";

type TNumberField = TNumberInput & Omit<TField, 'input'>

export default function NumberField({ className, error, label, ...props }: TNumberField) {
    return (
        <Field 
            className={className}
            error={error}
            label={label}
            input={
                <NumberInput {...props} />
            }
        />
    );
}