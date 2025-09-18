import { TextInput as RNTextInput, Text, View } from "react-native";

type TDateInput = Omit<React.ComponentProps<typeof RNTextInput>, 'onChangeText' | 'value'> & {
    value: Date
    error: string | null
    onChange: (value: Date) => void
}

export default function DateInput({ onChange, className, error, value, ...props }: TDateInput) {
    const formatDate = (value: Date): string => {
        if (!value) return '';
        
        const month = String(value.getMonth() + 1).padStart(2, '0');
        const year = value.getFullYear();
        
        return `${month}/${year}`;
    };

    const parseDate = (text: string): Date | null => {
        // Remove caracteres não numéricos exceto barra
        const cleanText = text.replace(/[^0-9/]/g, '');
        
        // Verifica se tem formato mm/yyyy
        const dateRegex = /^(\d{1,2})\/(\d{4})$/;
        const match = cleanText.match(dateRegex);
        
        if (!match) return null;
        
        const month = parseInt(match[1], 10);
        const year = parseInt(match[2], 10);
        
        // Validação básica
        if (month < 1 || month > 12 || year < 1900 || year > 2100) {
            return null;
        }
        
        return new Date(year, month - 1, 1);
    };

    const handleTextChange = (text: string) => {
        // Aplica máscara automática
        let maskedText = text.replace(/[^0-9]/g, '');
        
        // Adiciona barra após 2 dígitos
        if (maskedText.length >= 2) {
            maskedText = maskedText.substring(0, 2) + '/' + maskedText.substring(2, 6);
        }
        
        // Limita a 7 caracteres (mm/yyyy)
        if (maskedText.length > 7) {
            maskedText = maskedText.substring(0, 7);
        }
        
        const parsedDate = parseDate(maskedText);
        if (parsedDate) {
            onChange(parsedDate);
        }
    };

    return (
        <View className={className}>
            <RNTextInput
                className={`
                    leading-6 border border-gray-300 dark:border-gray-600 rounded-xl px-5 py-4 text-lg
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    ${error ? 'border-red-500 dark:border-red-400' : ''}
                `}
                {...props}
                value={formatDate(value)}
                onChangeText={handleTextChange}
                keyboardType="numeric"
                placeholder={props.placeholder || "mm/yyyy"}
                maxLength={7}
            />

            {error && (
                <Text className="text-red-500 dark:text-red-400 text-sm mt-2">
                    {error}
                </Text>
            )}
        </View>
    )
}
