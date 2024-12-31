import { useEffect, useState } from "react"
import { View, StyleSheet, Text, ActivityIndicator } from "react-native"
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
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (
                <View style={styles.item}>
                    <Image source={{uri: data?.url}} style={{width: 100, height: 100}}/> 
                    <View>
                        <Text>{userId}</Text>
                        <Text>{title}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    item: {
        flexDirection: 'row'
    }
})