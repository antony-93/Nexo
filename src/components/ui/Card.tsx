import { cn } from "@/utils/Styles";
import { useMemo } from "react";
import { View } from "react-native";

export type CardProps = {
    className?: string
    children?: React.ReactNode
}

export function Card({ children, className }: CardProps) {
    const cardCls = useMemo(() => {
        const defaultCls = `bg-card dark:bg-card-dark rounded-xl border border-border dark:border-border-dark`;

        return cn(defaultCls, className);
    }, [className])
    
    return (
        <View className={cardCls}>
            {children}
        </View>
    );
}