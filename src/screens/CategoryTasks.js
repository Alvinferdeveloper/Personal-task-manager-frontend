import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useStore } from "../store/store";
import useGetTasks from "../customHooks/useGetTasks";
import { useNavigation } from "@react-navigation/native";
import Tasks from "../components/Tasks";

export default function CategoryTasks({ route }) {
  const { categoryId } = route.params;
  const navigation = useNavigation();
  const [newTask, setNewTask] = useState("");
  const { addTask } = useStore();
  const { tasks } = useGetTasks(categoryId);
  const handlePress = () => {
    addTask(newTask, categoryId);
    setNewTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <AntDesign name="arrowleft" size={28} color="white" onPress={()=>navigation.goBack()}/>
      </View>
      <Text style={styles.headerText}>Your Tasks</Text>
      <Tasks tasks={tasks}/>

      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          left: 15,
          height: 70,
        }}
      >
        <TextInput
          style={{
            width: "60%",
            backgroundColor: "white",
            borderRadius: 20,
            height: "80%",
            paddingLeft: 15,
          }}
          placeholder="Add a new task"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <TouchableOpacity
          onPress={handlePress}
          activeOpacity={0.7}
          style={{
            width: 80,
            height: 80,
            backgroundColor: "white",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#A6A5B4",
    flex: 1,
    position: "relative",
  },

  headerText: {
    fontSize: 24,
    marginLeft: 20,
    color: "black",
    fontWeight: "bold",
  },
  nav: {
    minHeight:50,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 10,
    paddingTop:15
  },
});
