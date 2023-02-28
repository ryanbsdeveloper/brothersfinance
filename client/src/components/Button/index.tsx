import { GestureResponderEvent, Pressable, Text } from "react-native";
import { styles } from "./style";
import React from "react";

interface IButton {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
}

const Button = ({ onPress, title }: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export { Button };
