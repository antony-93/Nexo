import { MaskInputProps, Masks } from 'react-native-mask-input';
import { Input } from "./Input";

export type TDecimalInput = Omit<MaskInputProps, 'onChangeText' | 'value' | 'onChange'> & {
    value?: number
    onChange?: (value: number) => void
}

export function DecimalInput({
    onChange,
    value = 0,
    ...props
}: TDecimalInput) {
    const handleTextChange = (text: string) => {
        if (!onChange) return;

        // Remove tudo que não é número
        const cleanText = text.replace(/[^\d]/g, '');

        // Se não há números, mantém 0
        if (cleanText === '') {
            onChange(0);
            return;
        }

        // Converte para número e divide por 100 para obter centavos
        const numericValue = parseInt(cleanText, 10) / 100;
        onChange(numericValue);
    };

    const formatNumberToString = (num: number | null | undefined): string => {
        if (num == null || num === undefined) return '';

        // Formata o número para moeda brasileira usando Intl
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(num);
    };

    const handleKeyPress = (event: any) => {
        // Permite apenas números (0-9) e backspace
        const { key } = event.nativeEvent;

        if (key === 'Backspace') {
            // Se o valor atual é 0, não permite apagar
            if (value === 0) {
                event.preventDefault();
                return;
            }
        } else if (!/^\d$/.test(key)) {
            // Bloqueia qualquer tecla que não seja número
            event.preventDefault();
            return;
        }
    };

    return (
        <Input
            value={formatNumberToString(value)}
            onChangeText={handleTextChange}
            onKeyPress={handleKeyPress}
            mask={Masks.BRL_CURRENCY}
            keyboardType="number-pad"
            {...props}
        />
    );
}