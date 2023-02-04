import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import React from "react";

const SimpleInput = ({ label, ...inputProps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={"#8F8F8F"}
        {...inputProps}
      />
    </View>
  );
};

export { SimpleInput };
