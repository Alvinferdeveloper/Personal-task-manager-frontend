import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";
import SideBar from "../components/SideBar";
import { sideBarSlidingIn } from "../Animations/sideBarAnimation";
import { useStore } from "../store/store";
import Categories from "../components/Categories";
import CategoryForm from "../components/CategoryForm";

export default function Menu() {
  const { categories, getCategories, user } = useStore();
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backdrop}></View>
      <View style={styles.nav}>
        <AntDesign
          name="bars"
          size={28}
          color="white"
          onPress={sideBarSlidingIn}
        />
      </View>
      <SideBar />
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, color: "white" }}>
            Hello {user.name}
          </Text>
          <Text style={{ color: "white" }}>
            Today you have {categories.totalTasks} tasks
          </Text>
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
      <Categories categories={categories.categories} />
      <CategoryForm/>
    </View>
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
  nav: {
    minHeight: 70,
    width: "100%",
    justifyContent: "center",
    paddingTop: 30,
    paddingLeft: 10,
  },
  header: {
    height: "15%",
    flexDirection: "row",
    columnGap: 30,
    justifyContent: "center",
    alignItems: "center",
    minHeight:135,
  },
  header__img: {
    borderRadius: 50,
    objectFit: "contain",
  },
});
