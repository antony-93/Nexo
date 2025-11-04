import { useMemo } from "react";
import { View, ViewProps } from "react-native";
import { cn } from "../utils/Styles";

export type ContainerProps = ViewProps & {
    children?: React.ReactNode;
    className?: string;
    direction?: 'horizontal' | 'vertical';
}

export function Container({ children, className, direction = 'vertical', ...props }: ContainerProps) {
    const containerCls = useMemo(() => {
        const directionCls = direction === 'horizontal' 
            ? 'flex-row' 
            : 'flex-col';

        return cn(directionCls, className);
    }, [className, direction]);
    
    return (
        <View className={containerCls} {...props}>
            {children}
        </View>
    );
}