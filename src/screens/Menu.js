import {
  View,
  Text,
  Touchable,
  TouchableNativeFeedback,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import SideBar from '../components/SideBar'
import { sideBarSlidingIn } from "../Animations/sideBarAnimation";
import { useStore } from "../store/store";

export default function Menu() {
  const { categories, getCategories } = useStore();
  useEffect(()=>{
    getCategories();
  },[])
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.backdrop}></View>
        <View style={styles.nav}>
          <AntDesign name="bars" size={28} color="white" onPress={sideBarSlidingIn} />
        </View>
        <SideBar/>
        <View style={styles.header}>
          <View>
            <Text>Hello Jhon cena</Text>
            <Text>Today you have 25 Task r</Text>
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
        <View>
          {
            categories.map((category,index) => (<Text key={index}>{category.name}</Text>))
          }
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
