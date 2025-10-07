import { cn } from "@/utils/Styles";
import { useMemo } from "react";
import { View } from "react-native";

export type CardProps = {
    className?: string;
    children?: React.ReactNode;
};

export function Card({ children, className }: CardProps) {
    const cardCls = useMemo(() => {
        const defaultCls = `
            bg-secondary
            border border-primary
            rounded-lg py-3 px-4
            shadow-card
        `;

        return cn(defaultCls, className);
    }, [className]);

    return (
        <View className={cardCls}>
            {children}
        </View>
    );
}