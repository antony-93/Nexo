import MaskInput, { MaskInputProps } from "react-native-mask-input";

export default function Input(props: MaskInputProps) {
    return (
        <MaskInput
            className="leading-6 px-5 py-4 text-lg text-gray-900 dark:text-gray-100"
            {...props}
        />
    );
}