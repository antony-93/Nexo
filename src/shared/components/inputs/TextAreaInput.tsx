import { cn } from "@/shared/utils/Styles";
import { useMemo } from "react";
import { MaskInputProps } from "react-native-mask-input";
import { Input } from "./Input";

export type TextAreaInputProps = Omit<MaskInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value?: string
    onChange?: (value: string) => void
}

export function TextAreaInput({
    onChange,
    value,
    className,
    ...props
}: TextAreaInputProps) {
    const inputCls = useMemo(() => {
        return cn('h-36 text-start py-4', className);
    }, [className]);

    return (
        <Input
            multiline
            value={value}
            onChangeText={onChange}
            className={inputCls}
            {...props}
        />
    );
}