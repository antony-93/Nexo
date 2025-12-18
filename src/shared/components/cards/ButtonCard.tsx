import { cn } from "@/shared/utils/Styles";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export type ButtonCardProps = TouchableOpacityProps & {
    children?: React.ReactNode;
    className?: string;
    direction?: 'horizontal' | 'vertical';
}

export function ButtonCard({ 
    children, 
    className, 
    direction = 'vertical', 
    ...props 
}: ButtonCardProps) {
    const directionCls = direction === 'horizontal'
        ? 'flex-row'
        : 'flex-col';

    const btnCardCls = cn(
        `bg-surface-secondary shadow-card
        border border-surface-highlight
        rounded-[10px] py-3 px-4`,
        directionCls,
        className
    );

    return (
        <TouchableOpacity className={btnCardCls} {...props}>
            {children}
        </TouchableOpacity>
    );
}