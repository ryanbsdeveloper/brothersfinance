import React, { useState } from "react";
import { Image, Pressable, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./style";

const BottomMenu = () => {
  const [toggleIcon, setToggleIcon] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      {toggleIcon ? (
        <TouchableWithoutFeedback>
          <Image source={require("../../../assets/homeBlue.png")} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            setToggleIcon(true);
          }}
        >
          <Image source={require("../../../assets/homeGray.png")} />
        </TouchableWithoutFeedback>
      )}

      <Pressable style={styles.circle}>
        <Image source={require("../../../assets/more.png")} />
      </Pressable>

      {toggleIcon ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setToggleIcon(false);
          }}
        >
          <Image source={require("../../../assets/financeGray.png")} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback>
          <Image source={require("../../../assets/financeBlue.png")} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export { BottomMenu };
