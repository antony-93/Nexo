import { Text, TextInput, View } from "react-native";

type TNumberField = Omit<React.ComponentProps<typeof TextInput>, 'onChangeText' | 'value' | 'onChange'> & {
    value?: number | null
    error?: string | null
    onChange?: (value: number | null) => void
}

export default function NumberField({ onChange, className, error, value, ...props }: TNumberField) {
    const handleTextChange = (text: string) => {
        if (!onChange) return;

        const cleanText = text.replace(/[^0-9]/g, '');
        
        if (cleanText === '') return onChange(null);
        
        const numericValue = parseInt(cleanText, 10);
        
        if (!isNaN(numericValue) && numericValue > 0) {
            onChange(numericValue);
        }
    };

    return (
        <View className={className}>
            <TextInput
                className={`
                    leading-6 border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-lg
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    ${error ? 'border-red-500 dark:border-red-400' : ''}
                `}
                {...props}
                value={value != null ? value.toString() : ''}
                onChangeText={handleTextChange}
                keyboardType="numeric"
            />

            {error && (
                <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                    {error}
                </Text>
            )}
        </View>
    )
}