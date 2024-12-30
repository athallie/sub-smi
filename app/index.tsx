import { Text, View, FlatList } from "react-native";
import PostItem from "@/components/PostItem";

const DATA = [
  {text: 'a'},
  {text: 'b'},
  {text: 'c'},
  {text: 'd'},
  {text: 'e'},
]

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center"
      }}
    >
      <FlatList 
      data={DATA}
      renderItem={({item}) => <PostItem text={item.text} />}/>
      <PostItem text="Tes" />
    </View>
  );
}
