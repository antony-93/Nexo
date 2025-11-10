import { MaskInputProps } from "react-native-mask-input";
import { Input } from "./Input";

export type TNumberInput = Omit<MaskInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value?: number
    onChange?: (value: number) => void
}

export function NumberInput({
    onChange,
    value = 0,
    ...props
}: TNumberInput) {
    const handleTextChange = (text: string) => {
        const newValue: number = text
            ? parseInt(text)
            : 0;

        onChange?.(newValue);
    };

    return (
        <Input
            value={value?.toString() || ''}
            onChangeText={handleTextChange}
            keyboardType="number-pad"
            {...props}
        />
    );
}
