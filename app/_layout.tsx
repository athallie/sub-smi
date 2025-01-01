import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import IconButton from "@/components/IconButton";

export default function RootLayout() {

  const darkMode = () => <IconButton iconName="dark-mode"/>

  return (
    <Stack
      
    >

    <Stack.Screen name="index" options={{
      title: 'Home',
      headerTitleAlign: 'center',
      headerLeft: () => <IconButton iconName="person"/>,
      headerRight: darkMode
    }}/>
    <Stack.Screen name="post" options={{
      title: 'Post',
      headerTitleAlign: 'center',
      headerRight: darkMode
    }}/>

    </Stack>
  )
}