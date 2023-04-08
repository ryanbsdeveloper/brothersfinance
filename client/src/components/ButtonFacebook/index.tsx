import { Image, Text, View, Pressable, GestureResponderEvent } from "react-native";
import { styles } from "./style";
import React from "react";

interface IButton {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
}

const ButtonFacebook = ({ onPress, title }: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.box}>
          <Image style={styles.image} source={require("../../../assets/facebook.png")} />
          <View>
            <Text style={styles.text}>{title}</Text>
          </View>
      </View>
    </Pressable>
  );
};

export { ButtonFacebook };
