import { Save } from "lucide-react-native";
import { Button, ButtonProps } from "./Button";

export function SaveButton(props: ButtonProps) {
    return (
        <Button 
            text="Salvar"
            leftIcon={Save}
            {...props}
        />
    )
}