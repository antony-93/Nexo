import { ChevronRightCircle } from "lucide-react-native";
import { Button, ButtonProps } from "./Button";

export function NextButton(props: ButtonProps) {
    return (
        <Button 
            text="Próximo"
            leftIcon={ChevronRightCircle}
            {...props}
        />
    )
}