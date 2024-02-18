import {
  View,
  Text,
  Touchable,
  TouchableNativeFeedback,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function Menu({ navigation }) {
  const [isMenuOpened, setIsMenuOpened] = useState(true);
  const toogleMenu = () => {
    setIsMenuOpened((state) => !state);
  };
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.backdrop}></View>
        <View style={styles.nav}>
          <AntDesign name="bars" size={28} color="white" onPress={toogleMenu} />
        </View>
        {isMenuOpened ? (
          <View
            style={{
              height: "100%",
              position: "absolute",
              width: "70%",
              left: 0,
              backgroundColor: "red",
              zIndex: 20,
            }}
          >
            <View style={ {
    height: "7%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 10,
  }}>
            <AntDesign
              name="bars"
              size={28}
              color="white"
              onPress={toogleMenu}
            />
            </View>
            <Text>Hola</Text>
          </View>
        ) : (
          <View></View>
        )}
        <View style={styles.header}>
          <View>
            <Text>Hello Jhon</Text>
            <Text>Today you have 25 Task</Text>
          </View>
          <View>
            <Image
              style={styles.header__img}
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              }}
              width={100}
              height={100}
            ></Image>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  backdrop: {
    height: 900,
    width: 900,
    backgroundColor: "blue",
    borderRadius: 450,
    position: "absolute",
    top: -500,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "white",
  },
  nav: {
    height: "7%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  header: {
    height: "15%",
    flexDirection: "row",
    columnGap: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  header__img: {
    borderRadius: 50,
    objectFit: "contain",
  },
});
