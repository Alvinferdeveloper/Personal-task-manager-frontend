import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MaterialIcons } from "@expo/vector-icons";
import z from "zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputController from "../components/InputController";
import { useStore } from "../store/store";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(3, { message: "se requieren almenos 3 caracteres" }),
  lastName: z.string().min(3, { message: "se requieren almenos 3 caractes" }),
  email: z.string().email({ message: "Asegurese de ingresar un email" }),
  password: z
    .string()
    .regex(
      new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{8,}$/
      ),
      { message: "Contasena demasiado debil" }
    ),
});

export default function Login({ navigation }) {
  const { handleSubmit, control } = useForm({
    defaultValues: { name: "", lastName: "", email: "", password: "" },
    resolver: zodResolver(formSchema),
  });
  const { setUser, error, authenticated } = useStore();
  useEffect(()=>{
    if(!error && authenticated)
    navigation.navigate("Menu");
  },[authenticated,error])
  const onSubmit = async (datos) => {
    setUser(datos);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 25, color: "white" }}>Welcome to formik</Text>
      </View>
      <View style={styles.form}>
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
          name="lastName"
          rules={{ required: true, minLength: 3 }}
          placeholder="Last Name"
        />
        <InputController
          control={control}
          name="email"
          rules={{
            required: { message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
          }}
          placeholder="Email"
        />
        <InputController
          control={control}
          name="password"
          rules={{
            required: { message: "Campo requerido" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
          }}
          placeholder="Password"
        />
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.controls__send}
          activeOpacity={0.7}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={{ fontSize: 16 }}>Send</Text>
        </TouchableOpacity>
       {
        error && (
          <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
          <MaterialIcons name="error" size={24} color="white" />
        </View>
        )
       }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
  },
  form: {
    width: "80%",
    height: "60%",
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#EFEBEA",
    width: "100%",
    height: "80%",
    borderRadius: 5,
    paddingLeft: 8,
  },
  header: {
    fontSize: 25,
    color: "red",
    height: "20%",
    justifyContent: "center",
  },
  controls: {
    height: "20%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  controls__send: {
    backgroundColor: "#5FE863",
    color: "white",
    width: "80%",
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    marginTop: 20,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
    borderRadius: 5,
    backgroundColor: "red",
  },
  error: {
    color: "white",
    fontSize: 18,
  },
});
