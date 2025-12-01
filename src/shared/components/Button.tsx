import { useMemo } from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { cn } from "../utils/Styles";
import { Container } from "./Container";

type ButtonProps = TouchableOpacityProps & {
    text: string;
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loading?: boolean;
};

export function Button({
    children,
    text,
    icon,
    rightIcon,
    loading,
    className,
    disabled,
    ...props
}: ButtonProps) {
    const cls = useMemo(() => {
        const defaultCls = `
            py-5 rounded-lg bg-action-primary 
            items-center justify-center
        `;

        return cn(defaultCls, className);
    }, [className]);

    return (
        <TouchableOpacity
            className={cls}
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

                {!loading && icon}

                <Text className="text-white font-semibold text-base">
                    {text}
                </Text>

                {rightIcon}
            </Container>
        </TouchableOpacity>
    );
}

export type ButtonCardProps = TouchableOpacityProps & {
    children?: React.ReactNode;
    className?: string;
    direction?: 'horizontal' | 'vertical';
}

export function ButtonCard({ children, className, direction = 'vertical', ...props }: ButtonCardProps) {
    const containerCls = useMemo(() => {
        const directionCls = direction === 'horizontal'
            ? 'flex-row'
            : 'flex-col';

        const defaultCls = `
            bg-surface-secondary shadow-card
            border border-surface-highlight
            rounded-lg py-3 px-4
        `;

        return cn(defaultCls, directionCls, className);
    }, [className, direction]);

    return (
        <TouchableOpacity className={containerCls} {...props}>
            {children}
        </TouchableOpacity>
    );
}