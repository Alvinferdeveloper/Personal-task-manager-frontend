import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text, StyleSheet, Image} from "react-native";
export default function Category({ category }) {
    const navigation = useNavigation();
    const handlePress = ()=>{
      navigation.navigate("Tasks", {categoryId:category.id });
    }
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
        <View style={styles.category}>
        <View style={{width:"40%", alignItems:'center'}}>
          <Image style={{width:"80%",height:"100%"}} source={{uri:category.img_url}}></Image>
        </View>
        <View  style={{width:"60%",justifyContent:'center'}}>
          <Text style={{fontWeight:"bold", fontSize:20}}>{category.name}</Text>
          <Text style={{fontSize:15}}>{category.tasks.length}</Text>
          
        </View>
      </View>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    category: {
        height: 100,
        width: "80%",
        marginBottom: 15,
        backgroundColor: "#F7FCF8",
        alignSelf: "center",
        borderRadius: 10,
        elevation: 5,
        flexDirection: "row",
        justifyContent:'space-around'
      },
  });