import TextField from "./TextField";

type TNumberInput = React.ComponentProps<typeof TextField>

export default function NumberInput({ onChange, ...props }: TNumberInput) {
    const handleTextChange = (text: string) => {
        const cleanText = text.replace(/[^0-9]/g, '');
        
        if (cleanText === '') {
            onChange(0);
            return;
        }
        
        const numericValue = parseInt(cleanText, 10);
        
        if (!isNaN(numericValue) && numericValue > 0) {
            onChange(numericValue);
        }
    };

    return (
        <TextField
            onChange={handleTextChange}
            {...props}
        />
    )
}
