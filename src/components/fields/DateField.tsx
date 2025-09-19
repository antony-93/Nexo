import { useState } from "react";
import { Text, TextInputProps, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';

type TDateField = Omit<TextInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value: Date
    error?: string | null
    onChange?: (value: Date) => void
}

export default function DateField({ 
    onChange, 
    className, 
    error, 
    value = new Date(), 
    placeholder, 
    ...props 
}: TDateField) {
    const [date, setDate] = useState('22/01/2005');

    return (
        <View className={className}>
            <MaskInput
                keyboardType="numeric"
                value={date}
                onChangeText={setDate}
                mask={Masks.DATE_DDMMYYYY}  
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