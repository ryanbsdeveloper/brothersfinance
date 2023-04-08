import { Image, Text, View, Pressable, GestureResponderEvent } from "react-native";
import { styles } from "./style";
import React from "react";

interface IButton {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
}

const ButtonGoogle = ({ onPress, title }: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.box}>
          <Image style={styles.image} source={require("../../../assets/google.png")} />
          <View>
            <Text style={styles.text}>{title}</Text>
          </View>
      </View>
    </Pressable>
  );
};

export { ButtonGoogle };
