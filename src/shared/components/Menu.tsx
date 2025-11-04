import { Children, cloneElement, ReactElement, ReactNode, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Menu as MaterialMenu, MenuItem as MaterialMenuItem } from 'react-native-material-menu';

type TMenuItem = {
    title: string
    onPress: () => void
}

export function MenuItem({ title, onPress }: TMenuItem) {
    return (
        <MaterialMenuItem onPress={onPress}>
            <Text className="text-content-primary text-base font-medium">
                {title}
            </Text>
        </MaterialMenuItem>
    )
}

type TMenu = {
    anchor: ReactNode
    children: ReactElement<TMenuItem> | ReactElement<TMenuItem>[]
}

export function Menu({ children, anchor }: TMenu) {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <MaterialMenu
            visible={menuVisible}
            onRequestClose={() => setMenuVisible(false)}
            anchor={
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    {anchor}
                </TouchableOpacity>
            }
            style={{
                borderRadius: 8,
                marginTop: 28
            }}
            animationDuration={0}
        >
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    onPress: () => {
                        setMenuVisible(false);
                        child.props.onPress();
                    }
                });
            })}
        </MaterialMenu>
    )
}