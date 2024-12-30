import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import IconButton from "@/components/IconButton";

export default function RootLayout() {
  return (
    <Stack
      
    >

    <Stack.Screen name="index" options={{
      title: 'Home',
      headerTitleAlign: 'center',
      headerLeft: () => <IconButton iconName="person"/>,
      headerRight: () => <IconButton iconName="dark-mode"/>
    }}/>

    </Stack>
  )
}