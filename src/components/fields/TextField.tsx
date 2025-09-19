import { Text, TextInput, TextInputProps, View } from "react-native";

type TTextField = Omit<TextInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value?: string | null
    error?: string | null
    onChange?: (text: string) => void
}

export default function TextField({ onChange, className, error, value, ...props }: TTextField) {
    return (
        <View className={className}>
            <TextInput
                className={`
                    leading-6 rounded-xl px-5 py-4 text-lg border border-gray-300 dark:border-gray-600 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    ${error ? 'border-red-500 dark:border-red-400' : ''}
                `}
                {...props}
                value={value || ''}
                onChangeText={onChange}
            />

            {error && (
                <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                    {error}
                </Text>
            )}
        </View>
    )
}