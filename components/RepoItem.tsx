import { Link } from "expo-router"
import { View, StyleSheet, Text, ActivityIndicator, Pressable } from "react-native"

type Props = {
    name: string,
    html_url: string,
    language: string
}

export default function RepoItem({name, html_url, language}: Props) {
    return (
        <Link href={`/modal?uri=${html_url}`} asChild>
            <Pressable
                onPress={() => {}}
                style={({pressed}) => [{
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
                }, styles.wrapperCustom]}
            >
                <View style={styles.item}>
                    <Text style={styles.repotitle}>{name}</Text>
                    <Text style={styles.repolang}>{language}</Text>
                </View>           
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    item: {
        borderColor: 'black',
        borderBottomWidth: .8,
        padding: 16,
        backgroundColor: '#D3F1DF'
    },
    subText: {
        fontSize: 13
    },
    wrapperCustom: {},
    repotitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    repolang: {
        fontSize: 12
    }
})