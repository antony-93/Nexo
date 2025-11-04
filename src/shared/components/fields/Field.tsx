import { cn } from "@/shared/utils/Styles";
import { useMemo } from "react";
import { Text, View } from "react-native";

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
            bg-secondary
            border border-primary
            rounded-lg
            shadow-card
        `;

        return cn(
            defaultClsField,
            error ? 'border-red-500 dark:border-red-400' : ''
        );

    }, [error]);

    return (
        <View className={className}>
            {label && (
                <Text className="text-lg text-primary mb-2 font-medium">
                    {label}
                </Text>
            )}

            <View className={clsField}>
                {input}
            </View>

            {error && (
                <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                    {error}
                </Text>
            )}
        </View>
    );
}