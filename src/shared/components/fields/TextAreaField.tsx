import { TextAreaInput, TextAreaInputProps } from "../inputs";
import { Field, TField } from "./Field";

type TextAreaFieldProps = TextAreaInputProps & Omit<TField, 'input'>

export function TextAreaField({ className, error, label, ...props }: TextAreaFieldProps) {
    return (
        <Field
            className={className}
            error={error}
            label={label}
            input={
                <TextAreaInput {...props}/>
            }
        />
    );
}