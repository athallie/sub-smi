import { View, StyleSheet, Text } from "react-native"

type Props = {
    text: string
}

export default function PostItem({text}: Props) {
    return (
        <View style={styles.container}>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        backgroundColor: 'red'
    }
})