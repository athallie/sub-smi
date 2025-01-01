import { useLocalSearchParams } from 'expo-router'
import { WebView } from 'react-native-webview'

export default function Modal() {
    const uri = useLocalSearchParams<{uri?: string}>()
    console.log(uri.uri);
    return (
        <WebView source={{uri: `${uri.uri}`}}/>
    )
}