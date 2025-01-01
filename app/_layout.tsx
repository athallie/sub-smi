import { Link, Stack } from "expo-router";
import IconButton from "@/components/IconButton";

export default function RootLayout() {

  const profileButton = () => <IconButton href={`/profile`} iconName="person"/>

  return (
    <Stack
      
    >

    <Stack.Screen name="index" options={{
      title: 'Home',
      headerTitleAlign: 'center',
      headerLeft: profileButton,
    }}/>

    <Stack.Screen name="post" options={{
      title: 'Post',
      headerTitleAlign: 'center',
    }}/>

    <Stack.Screen name="profile" options={{
      title: 'Profile',
      headerTitleAlign: 'center',
    }}/>

    
    <Stack.Screen name="modal" options={{
      title: 'Repository',
      headerTitleAlign: 'center',
      presentation: 'modal'
    }}/>

    </Stack>
  )
}