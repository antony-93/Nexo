import { cn } from "@/shared/utils/Styles";
import { ChevronDown, LucideIcon } from "lucide-react-native";
import { useMemo } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Card } from "../cards/Card";

export type ActionProps = TouchableOpacityProps & {
    description: string;
    active: boolean;
    icon?: LucideIcon;
}

export function Action({ 
    description, 
    active = false,
    icon: Icon,
    ...props 
}: ActionProps) {
    const cardCls = useMemo(() => {
        const activeCls = active 
            ? 'bg-action-primary'
            : ''; 

        return cn('items-center gap-2', activeCls);
    }, [active]);

    const textCls = useMemo(() => {
        const activeCls = active 
            ? 'text-white'
            : 'text-content-primary'; 

        return cn('text-base font-semibold', activeCls);
    }, [active]);

    const activeSurfaceColor = useMemo(() => {
        return active ? '#FFFFFF' : '#1A1A1A'
    }, [active]);
    
    return (
        <TouchableOpacity {...props}>
            <Card direction="horizontal" className={cardCls}>
                {Icon && <Icon size={18} color={activeSurfaceColor} strokeWidth={2} />}
                <Text className={textCls}>{description}</Text>
                <ChevronDown size={18} color={activeSurfaceColor} strokeWidth={2} />
            </Card>
        </TouchableOpacity>
    )
}