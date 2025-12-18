import { LucideIcon } from "lucide-react-native";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { cn } from "../../utils/Styles";
import { Container } from "../Container";

export type ButtonProps = TouchableOpacityProps & {
    loading?: boolean;
    textClassName?: string;
    text?: string;
    iconColor?: string;
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
};

export function Button({
    children,
    text,
    textClassName,
    leftIcon,
    rightIcon,
    loading,
    className,
    disabled,
    iconColor = '#fff',
    ...props
}: ButtonProps) {
    const btnCls = cn(
        `py-5 rounded-[10px] bg-action-primary 
        items-center justify-center`, 
        className
    );

    const textCls = cn(
        `text-white font-medium text-xl`,
        textClassName
    )

    const LeftIcon = leftIcon;
    const RightIcon = rightIcon;

    return (
        <TouchableOpacity
            className={btnCls}
            {...props}
            disabled={loading || disabled}
        >
            <Container direction="horizontal" className="gap-2 items-center">
                {loading && (
                    <ActivityIndicator
                        size="small"
                        color="#FFFFFF"
                    />
                )}

                {!loading && LeftIcon && <LeftIcon color={iconColor} size={20} />}

                <Text className={textCls}>
                    {text}
                </Text>

                {RightIcon && <RightIcon color={iconColor} size={20} />}
            </Container>
        </TouchableOpacity>
    );
}