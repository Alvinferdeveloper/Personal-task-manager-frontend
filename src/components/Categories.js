import { FlatList, StyleSheet } from "react-native";
import Category from "./Category";
export default function Categories({ categories }) {
  return (
    <FlatList
      style={styles.categories}
      data={categories}
      renderItem={({ item }) => <Category category={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  categories: {
    marginTop: 15,
    width: "100%",
  },
});
