import { cn } from "@/shared/utils/Styles";
import { Trash } from "lucide-react-native";
import { Button, ButtonProps } from "./Button";

export function DeleteButton({ className, textClassName, ...props }: ButtonProps) {
    const btnCls = cn(
        'bg-transparent border-negative-primary border-2',
        className
    );

    const textCls = cn(
        'text-negative-primary',
        textClassName
    )
    
    return (
        <Button
            className={btnCls}
            textClassName={textCls}
            leftIcon={Trash}
            text="Excluir"
            iconColor="#FF4D4F"
            {...props}
        />
    )
}