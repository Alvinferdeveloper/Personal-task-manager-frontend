import { Controller } from "react-hook-form";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function InputController({
  control,
  name,
  rules,
  ...restOfProps
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChange(text)}
            value={value}
            onBlur={onBlur}
            {...restOfProps}
          />
          {error && <Text style={{ color: "blue", fontSize:20 }}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: { height: "15%", width: "80%" },
  input: {
    backgroundColor: "#EFEBEA",
    width: "100%",
    height: "80%",
    borderRadius: 5,
    paddingLeft: 8,
  },
});
