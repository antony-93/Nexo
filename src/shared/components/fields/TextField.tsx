import { TextInput, TTextInput } from "../inputs/TextInput";
import { Field, TField } from "./Field";

type TTextField = TTextInput & Omit<TField, 'input'>

export function TextField({ className, error, label, ...props }: TTextField) {
    return (
        <Field
            className={className}
            error={error}
            label={label}
            input={
                <TextInput {...props}/>
            }
        />
    );
}