import { FlatList} from "react-native";
import Task from "./Task";
export default function Tasks({ tasks }) {
  return (
    <FlatList
      style={{ marginTop: 10, marginBottom:80 }}
      data={tasks}
      renderItem={({ item }) =><Task task={item}/> }
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}