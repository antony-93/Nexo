import { useState } from "react";
import { Text, TextInputProps, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';

type TDecimalField = Omit<TextInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value?: number | null
    error?: string | null
    onChange?: (value: number) => void
}

export default function DecimalField({ onChange, className, error, value, ...props }: TDecimalField) {
    const [numberState, setState] = useState('');

    return (
        <View className={className}>
            <MaskInput
                value={numberState}
                onChangeText={setState}
                mask={Masks.BRL_CURRENCY}
                keyboardType="numeric"
                placeholder="R$ 0,00"
                className={`
                    leading-6 border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-lg
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    ${error ? 'border-red-500 dark:border-red-400' : ''}
                `}
            />

            {error && (
                <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                    {error}
                </Text>
            )}
        </View>
    )
}
