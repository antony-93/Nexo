import { useIsInBottomSheet } from "@/shared/hooks/useIsInBottomSheet";
import { cn } from "@/shared/utils/Styles";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { forwardRef, useMemo } from "react";
import { TextInput, TextInputProps } from "react-native";

export const Input = forwardRef<TextInput, TextInputProps>(({
    className,
    onFocus,
    onBlur,
    onLayout,
    ...props
}, ref) => {
    const inputCls = useMemo(() => {
        return cn("text-content-primary text-lg py-5 px-3", className);
    }, [className]);

    const inSheet = useIsInBottomSheet();

    const InputComponent = useMemo(() => {
        return inSheet
            ? BottomSheetTextInput
            : TextInput;
    }, [inSheet]);

    return (
        <InputComponent
            ref={ref as any}
            onFocus={onFocus}
            onBlur={onBlur}
            onLayout={onLayout}
            className={inputCls}
            style={{ lineHeight: 18 }}
            placeholderTextColor={"#6B7280"}
            {...props}
        />
    );
});

Input.displayName = "Input";
