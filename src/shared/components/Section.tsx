import { ReactNode, useMemo } from "react";
import { Text } from "react-native";
import { cn } from "../utils/Styles";
import { Container, ContainerProps } from "./Container";

type SectionProps = ContainerProps & {
    label?: string;
    labelClassName?: string;
    children?: ReactNode;
}

export function Section({ label, labelClassName, children, ...props }: SectionProps) {
    const labelCls = useMemo(() => {
        const defaultCls = `
            text-content-secondary mb-2 tracking-wider
            text-base font-medium
        `;

        return cn(defaultCls, labelClassName);
    }, [labelClassName]);
    
    return (
        <Container {...props}>
            <Text className={labelCls}>
                {label}
            </Text>

            {children}
        </Container>
    );
}