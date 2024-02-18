import { StyleSheet, View, Text,Animated, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ViewXPosition, sideBarSlidingOut } from "../Animations/sideBarAnimation";


export default function SideBar() {
  return (
    <Animated.View style={{...styles.container,transform:[{ translateX:ViewXPosition}]}}>
      <View style={styles.toogle_container}>
        <AntDesign name="bars" size={28} color="white" onPress={sideBarSlidingOut} />
      </View>
      <Text>Hola mundo</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "absolute",
    width: "70%",
    left:0,
    backgroundColor: "red",
    zIndex: 20,
  },
  toogle_container: {
    height: "7%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 10,
  },
});
