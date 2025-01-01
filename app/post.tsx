import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View, Text, Dimensions, StyleSheet } from "react-native";

type Post = {
    userId: string,
    title: string,
    body: string
  }

const screenWidth = Dimensions.get("window").width

export default function Post() {
    const { id, image } = useLocalSearchParams<{id?: string, image?: string}>()
    const [isLoading, setLoading] = useState(true)
    const  [data, setData] = useState<Post>()
    const fetchContent = async () => {
        try {
          fetch("https://jsonplaceholder.typicode.com/posts/"+id)
          .then(response => response.json())
          .then(json => {
            setData(json)
          })
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
    }
    useEffect(() => {
        fetchContent()
    }, [])
    return (
        <View>
            <Image source={{uri: image}} style={styles.image}/>
            <Text style={styles.title}>{data?.title}</Text>
            <Text style={styles.content}>{data?.body}</Text>
            {/* Comments */}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: screenWidth, 
        height: screenWidth / 2
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        marginHorizontal: 24,
        marginVertical: 24
    },
    content: {
        marginHorizontal: 24,
        fontSize: 16
    }
})