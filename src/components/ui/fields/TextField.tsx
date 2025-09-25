import { TextInput, TTextInput } from "../inputs/TextInput";
import { Field, TField } from "./Field";

type TTextField = TTextInput & Omit<TField, 'input'>

export default function TextField({ className, error, label, ...props }: TTextField) {
    return (
        <Field 
            className={className}
            error={error}
            label={label}
            input={
                <TextInput
                    className="leading-6 px-5 py-4 text-lg text-gray-900 dark:text-gray-100"
                    {...props}
                />
            }
        />
    );
}