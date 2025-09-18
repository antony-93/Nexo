import { TextInput as RNTextInput, Text, View } from "react-native";

type TDecimalInput = Omit<React.ComponentProps<typeof RNTextInput>, 'onChangeText' | 'value'> & {
    value: number
    error: string | null
    onChange: (value: number) => void
}

export default function DecimalInput({ onChange, className, error, value, ...props }: TDecimalInput) {
    const formatCurrency = (value: number): string => {
        if (value === 0) return '';
        
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };

    const parseCurrency = (text: string): number => {
        // Remove R$, espaços e pontos (separadores de milhares)
        const cleanText = text.replace(/[R$\s.]/g, '');
        
        // Substitui vírgula por ponto para parseFloat
        const normalizedText = cleanText.replace(',', '.');
        
        if (normalizedText === '' || normalizedText === '.') {
            return 0;
        }
        
        const numericValue = parseFloat(normalizedText);
        return isNaN(numericValue) ? 0 : numericValue;
    };

    const handleTextChange = (text: string) => {
        const numericValue = parseCurrency(text);
        onChange(numericValue);
    };

    return (
        <View className={className}>
            <RNTextInput
                className={`
                    leading-6 border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-lg
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-right
                    ${error ? 'border-red-500 dark:border-red-400' : ''}
                `}
                {...props}
                value={formatCurrency(value)}
                onChangeText={handleTextChange}
                keyboardType="numeric"
                placeholder={props.placeholder || "R$ 0,00"}
            />

            {error && (
                <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                    {error}
                </Text>
            )}
        </View>
    )
}
