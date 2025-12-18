import { Plus } from "lucide-react-native";
import { Button, ButtonProps } from "./Button";

export function AddButton({ className, textClassName, ...props }: ButtonProps) {
    return (
        <Button
            leftIcon={Plus}
            text="Adicionar"
            {...props}
        />
    )
}