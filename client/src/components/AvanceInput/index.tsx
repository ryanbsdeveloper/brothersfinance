import { Image, Text, TextInput, View } from "react-native";
import React from "react";
import { styles } from "./style";

interface IAvanceInput {
  label: string;
  linkIcon: string;
  placeholder: string;
}

const AvanceInput = ({ label, linkIcon, placeholder }: IAvanceInput) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.content}>
        <Image source={require(linkIcon)} style={styles.image} />
        <TextInput
          placeholderTextColor="#868686"
          style={styles.input}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export { AvanceInput };
