import { Button } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, RelativePathString } from "expo-router";

type Props = {
    iconName: 'person' | 'dark-mode' | 'arrow-back-ios-new'
    href?: string
}

export default function IconButton({href, iconName}: Props) {
    const button = 
    <MaterialIcons.Button
        name={iconName}
        onPress={() => console.log}
        color='black'
        backgroundColor='transparent'
        iconStyle={{marginRight: 0}}/>

    return (href !== null) ? (
        <Link href={`${href as RelativePathString}`} asChild>
            {button}
        </Link>
    ) : (
        button
    )
}