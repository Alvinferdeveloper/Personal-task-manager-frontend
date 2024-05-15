import { View, StyleSheet, Text } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputController from "./InputController";
import { newCategorySchema } from "../utils/schemas";
import { TouchableOpacity } from "react-native";
import { useStore } from "../store/store";


export default function CategoryForm() {
    const { addCategory } = useStore();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { name: "", description: "" },
    resolver: zodResolver(newCategorySchema),
  });

  const onSubmit = (data)=>{
    addCategory(data);
    reset();
  }
  return (
    <View style={styles.container}>
      <InputController
        control={control}
        name="name"
        rules={{
          required: { message: "Campo requerido" },
          minLength: { value: 3, message: "Minimo 3 caracteres" },
        }}
        placeholder="Name"
      />

      <InputController
        control={control}
        name="description"
        placeholder="Description"
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button_send}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: "100%",
    backgroundColor: "red",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  button_send:{
    backgroundColor:"green",
    paddingVertical:20,
    paddingHorizontal:50,
    borderRadius:8,
  }
});
