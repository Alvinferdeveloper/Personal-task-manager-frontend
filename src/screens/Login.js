import { Link } from "@react-navigation/native";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:25, color:"white"}}>Welcome to formik</Text>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nombre" />
        <TextInput style={styles.input} placeholder="Apellido" />
        <TextInput style={styles.input} placeholder="Correo" />
        <TextInput style={styles.input} placeholder="Contrasena" />
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.controls__send} activeOpacity={0.7}>
          <Text style={{fontSize:16}}>Send</Text>
        </TouchableOpacity>
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
    width: "80%",
    height: "10%",
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
    height: 35,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
