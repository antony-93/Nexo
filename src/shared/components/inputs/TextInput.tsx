import { MaskInputProps } from "react-native-mask-input";
import Input from "./Input";

export type TTextInput = Omit<MaskInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value?: string
    onChange?: (value: string) => void
}

export function TextInput({ 
    onChange,
    value, 
    ...props 
}: TTextInput) {
    return (
        <Input
            value={value}
            onChangeText={onChange}
            {...props}
        />
    );
}