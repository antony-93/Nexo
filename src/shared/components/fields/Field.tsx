import { cn } from "@/shared/utils/Styles";
import { useMemo } from "react";
import { Text } from "react-native";
import { Container } from "../Container";

export type TField = {
    input: React.ReactNode
    className?: string
    label?: string
    error?: string | null
}

export function Field({ 
    input, 
    className = '',
    label, 
    error
}: TField) {
    const clsField = useMemo(() => {
        const defaultClsField: string = `
            bg-surface-primary
            border border-surface-highlight
            rounded-[10px]
        `;

        return cn(
            defaultClsField,
            error ? 'border-red-500 dark:border-red-400' : ''
        );
    }, [error]);

    return (
        <Container className={className}>
            {label && (
                <Text className="font-medium text-base text-content-secondary mb-1">
                    {label}
                </Text>
            )}

            <Container className={clsField}>
                {input}
            </Container>

            {error && (
                <Text className="text-red-500 dark:text-red-400 text-sm mt-1">
                    {error}
                </Text>
            )}
        </Container>
    );
}