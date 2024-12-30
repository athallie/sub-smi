import { Button } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
    iconName: 'person' | 'dark-mode' | 'arrow-back-ios-new'
}

export default function IconButton({iconName}: Props) {
    return (
        <MaterialIcons.Button
            name={iconName}
            onPress={() => console.log}
            color='black'
            backgroundColor='transparent'
            iconStyle={{marginRight: 0}}
        />
    )
}