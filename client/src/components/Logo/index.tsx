import { Image, Text, View, Pressable, GestureResponderEvent } from "react-native";
import { styles } from "./style";
import React from "react";


const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/logo.png")} />
      <Text style={styles.text}>
        Controle seu dinheiro com <Text style={styles.textBlue}>facilidade</Text> e <Text style={styles.textBlue}>eficiência</Text>
      </Text>
    </View>
  );
};

export { Logo };
