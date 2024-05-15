import { useEffect, useState } from "react"; 
import { TextInput } from "react-native";
import { Text, View, StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { useStore } from "../store/store";

export default function Login({ navigation}){
    const [password, setPassword] = useState("");
    const [ email, setEmail] = useState("");
    const { error, authenticated, logIn, setErrorToNull } = useStore();
    const handleSubmit =async ()=>{
        await logIn(email,password);
        Keyboard.dismiss();
    }
    useEffect(()=>{
        if(!error && authenticated){
            setEmail("");
            setPassword("");
            navigation.navigate("Menu");
        }
    },[error, authenticated]);

    useEffect(()=>{
        setErrorToNull();
    },[email, password])
    return (
        <View style={styles.container}>
            <View style={styles.form}>
            <TextInput placeholder="Email" style={styles.textInput}
                onChangeText={(text)=>{setEmail(text)}}
                value={email}
            />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.textInput}
                onChangeText={(text)=>setPassword(text)}
                value={password}
            />
            { error && <View style={styles.errorAlert}><Text style={{color:"white"}}>{error}</Text></View> }
            <TouchableOpacity activeOpacity={0.7} style={styles.submit} onPress={handleSubmit}>
                <Text style={{fontSize:17,color:"white"}}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:"blue",
    },
    form:{
        width:"80%",
        minHeight:400,
        height:"50%",
        backgroundColor:"white",
        borderRadius:8,
        alignItems: 'center',
        justifyContent:"space-evenly"
    },
    textInput:{
        backgroundColor: "#EFEBEA",
        width: "80%",
        height: "12%",
        borderColor:"black",
        borderRadius: 5,
        paddingLeft: 8,
    },
    submit:{
        width:"80%",
        backgroundColor:"green",
        height:"10%",
        borderRadius:8,
        justifyContent:"center",
        alignItems: 'center',
    },

    errorAlert:{
        width:"80%",
        height:"10%",
        backgroundColor:"red",
        borderRadius:8,
        justifyContent:"center",
        alignItems: 'center',
    }
});