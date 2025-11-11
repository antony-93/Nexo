import MaskInput, { MaskInputProps } from "react-native-mask-input";

export function Input(props: MaskInputProps) {
    return (
        <MaskInput
            className="text-content-primary text-lg py-5 px-3"
            style={{ lineHeight: 18 }}
            placeholderTextColor={'#6B7280'}
            {...props}
        />
    );
}