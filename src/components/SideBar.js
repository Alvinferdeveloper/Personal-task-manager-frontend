import { StyleSheet, View, Text,Animated, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ViewXPosition, sideBarSlidingIn, sideBarSlidingOut } from "../Animations/sideBarAnimation";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SideBar({toogleMenu, isMenuOpened}) {
    const leftValue = new Animated.Value(0);

    const sideBarSliding = () => {
      Animated.timing(
        leftValue,
        {
          toValue:-(SCREEN_WIDTH * 0.7), // 0.7 COMES FROM THE WITH OF THE VIEW
          duration: 500,
          useNativeDriver: true,
        }
      ).start();

    };

    const sideBarSliding2 = () => {
        Animated.timing(
            leftValue,
            {
              toValue: (SCREEN_WIDTH * 0.7),
              duration: 500,
              useNativeDriver: true,
            }
          ).start();
        
    }


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
