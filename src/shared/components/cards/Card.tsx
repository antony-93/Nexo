import { cn } from "@/shared/utils/Styles";
import { useMemo } from "react";
import { Container, ContainerProps } from "../Container";

export function Card({ className, ...props }: ContainerProps) {
    const cardCls = useMemo(() => {
        const defaultCls = `
            bg-surface-secondary shadow-card
            border border-surface-highlight
            rounded-lg py-3 px-4
        `;

        return cn(defaultCls, className);
    }, [className]);

    return <Container className={cardCls} {...props} />;
}