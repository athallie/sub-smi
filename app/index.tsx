import { Text, View, FlatList, ActivityIndicator } from "react-native";
import PostItem from "@/components/PostItem";
import { useEffect, useState } from "react";

type Post = {
  userId: string,
  id: string,
  title: string,
}

export default function Index() {
  const [isLoading, setLoading] = useState(true)
  const  [data, setData] = useState<Post[]>([])
  const fetchPosts = async () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
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
    fetchPosts()
  }, [])

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {isLoading ? (
        <ActivityIndicator/>
      ) : (
        <FlatList 
        style={{flex: 1}}
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <PostItem id={item.id} userId={item.userId} title={item.title}/>
        )}/>
      )}
    </View>
  );
}
