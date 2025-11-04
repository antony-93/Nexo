import MaskInput, { MaskInputProps } from "react-native-mask-input";

export default function Input(props: MaskInputProps) {
    return (
        <MaskInput
            className="text-lg border-action-primary border text-primary"
            placeholderClassName="text-primary"
            {...props}
        />
    );
}