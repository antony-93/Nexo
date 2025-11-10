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
            rounded-md
        `;

        return cn(
            defaultClsField,
            error ? 'border-red-500 dark:border-red-400' : ''
        );
    }, [error]);

    return (
        <Container className={className}>
            {label && (
                <Text className="text-base text-content-primary mb-1">
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