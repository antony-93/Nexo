import { Children, cloneElement, ReactElement, ReactNode, useState } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
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
    const colorScheme = useColorScheme();
    
    const isDark = colorScheme === 'dark';
    const backgroundColor = isDark ? '#1F2937' : '#FFFFFF';
    const textColor = isDark ? '#F9FAFB' : '#111827';

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
                backgroundColor: backgroundColor,
                shadowColor: 'transparent',
                marginTop: 8,
                borderRadius: 8,
                paddingVertical: 0
            }}
            theme={{
                colors: {
                    surface: backgroundColor,
                    onSurface: textColor,
                }
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