import { GestureResponderEvent, Pressable, Text, Image, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IButton {
  onPress?: (event: GestureResponderEvent) => void;
  title: string;
}

const ButtonGoogle = ({ onPress, title }: IButton) => { 
  return (
    <View>
       <Image source={require("../../../assets/Vector.png")} />
       <Pressable onPress={onPress} style={styles.container}>
           <Text style={styles.text}>{title}</Text>
       </Pressable>
    </View>
  );
};

export { ButtonGoogle };
