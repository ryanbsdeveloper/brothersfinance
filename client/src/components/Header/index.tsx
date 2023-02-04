import { Image, Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IHeader {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: IHeader) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Vector.png")} />

      <View style={styles.content}>
        <View style={styles.viewTexts}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

export { Header };
