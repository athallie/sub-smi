import RepoItem from "@/components/RepoItem";
import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

type Repo = {
    id: string,
    name: string,
    html_url: string,
    language: string
}

export default function Profile() {
    const [isLoading, setLoading] = useState(true)
    const  [data, setData] = useState<Repo[]>([])
    const fetchRepos = async () => {
        try {
          fetch("https://api.github.com/users/athallie/repos")
          .then(response => response.json())
          .then(json => {
            console.log(json);
            setData(json)
          })
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
    }
    useEffect(() => {
        fetchRepos()
    }, [])
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bgimage} src="https://images.unsplash.com/photo-1726767305248-e3cfaf9c98b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image src="https://github.com/athallie.png" style={styles.avatar}/> 
                <Text style={styles.name}>Athallah Naufal Rismaputra A</Text>
                <Text style={styles.username}>Sistem Informasi | Universitas Brawijaya</Text>
                <Text style={styles.username}>@athallie</Text>
            </ImageBackground>
            <Text style={styles.title}>Github Repositories</Text>
            {isLoading ? (
                <ActivityIndicator/>
            ) : ( 
                <FlatList 
                style={{flex: 1}}
                data={data}
                keyExtractor={({id}) => id}
                renderItem={({item}) => (
                    <RepoItem name={item.name} html_url={item.html_url} language={item.language}/>
                )}/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgimage: {
        width: screenWidth,
        height: screenHeight / 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    title: {
        textAlign: 'center',
        paddingVertical: 16,
        backgroundColor: '#191919',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    username: {
        color: 'white'
    },
    quickinfo_text: {
        color: 'white',
        marginHorizontal: 10
    },
    name: {
        marginTop: 16,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }
})