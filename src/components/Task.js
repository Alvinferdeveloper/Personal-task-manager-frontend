import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useStore } from "../store/store";
export default function Task({ task }) {
  const { removeTask, updateTaskState } = useStore();
  const handleDeleteTask = ()=>{
    removeTask(task.id);
  }

  const handleUpdateTaskState = ()=>{
    updateTaskState(task.id);
  }
  return (
    <View style={styles.task}>
      {task.state ? (
        <Ionicons
          name="checkmark-done"
          size={34}
          color="green"
          style={styles.icon}
          onPress={handleUpdateTaskState}
        />
      ) : (
        <MaterialIcons name="pending-actions" size={24} style={styles.icon}onPress={handleUpdateTaskState} />
      )}
      <Text style={styles.taskName}>{task.name}</Text>
      <AntDesign name="delete" size={24} color="red" style={styles.icon} onPress={handleDeleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: "20%",
    textAlign: "center",
  },
  taskName: {
    fontSize: 20,
    width: "60%",
    textAlign: "center",
  },
});
