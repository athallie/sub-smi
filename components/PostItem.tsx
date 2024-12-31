import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { View, StyleSheet, Text, ActivityIndicator, Pressable } from "react-native"
// import { Image, type ImageSource} from "expo-image"
import { Image } from "react-native"

type Props = {
    id: string
    userId: string
    title: string
}

type Photo = {
    url: string
}

export default function PostItem({id, userId, title}: Props) {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState<Photo | null>(null)
    const getImage = async () => {
        try {
            fetch("https://jsonplaceholder.typicode.com/photos?id="+id)
            .then(response => response.json())
            .then(json => setData(json[0]))
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getImage()
    }, [])
    return (
        <Link href="/post" style={styles.container} asChild>
            <Pressable
                onPress={() => {
                    console.log({title});
                }}
                style={({pressed}) => [{
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
                }, styles.wrapperCustom]}
            >
                {isLoading ? (
                    <ActivityIndicator/>
                ) : (
                    <View style={styles.item}>
                        <Image source={{uri: data?.url}} style={styles.photo}/> 
                        <View style={styles.texts}>
                            <Text style={styles.subText}>User {userId}</Text>
                            <Text numberOfLines={2} style={styles.titleText}>{title}</Text>
                        </View>
                    </View>
                )}                  
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    item: {
        flexDirection: 'row'
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    texts: {
        justifyContent: 'center',
        marginStart: 15,
        marginEnd: 15,
        flexShrink: 1
    },
    subText: {
        fontSize: 13
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    wrapperCustom: {}
})