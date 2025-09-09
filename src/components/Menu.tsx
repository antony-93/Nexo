import { MoreHorizontalIcon } from "lucide-react-native";
import { useState, Children, cloneElement, ReactElement, ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { Menu as MenuPaper } from 'react-native-paper';

type TMenuItem = {
    title: string
    onPress: () => void
}

export function MenuItem({ title, onPress }: TMenuItem) {
    return (
        <MenuPaper.Item title={title} onPress={onPress} />
    )
}

type TMenu = {
    anchor: ReactNode
    children: ReactElement<TMenuItem> | ReactElement<TMenuItem>[]
}

export function Menu({ children, anchor }: TMenu) {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <MenuPaper
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    {anchor}
                </TouchableOpacity>
            }
            anchorPosition="bottom"
            contentStyle={{
                backgroundColor: 'white',
                shadowColor: 'transparent',
                marginTop: 8,
                borderRadius: 8,
                paddingVertical: 0
            }}
        >
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    onPress: () => {
                        setMenuVisible(false);
                        child.props.onPress();
                    }
                });
            })}
        </MenuPaper>
    )
}