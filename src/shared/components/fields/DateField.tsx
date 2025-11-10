import { DateInput, TDateInput } from "../inputs/DateInput";
import { Field, TField } from "./Field";

type TDateField = TDateInput & Omit<TField, 'input'>

export function DateField({ className, error, label, ...props }: TDateField) {
    return (
        <Field
            className={className}
            error={error}
            label={label}
            input={
                <DateInput {...props} />
            }
        />
    );
}