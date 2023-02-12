import { View } from "react-native";
import React, { FC } from "react";
import { styles } from "./style";

interface ICardFly {
  children: React.ReactNode;
}

const CardFly: FC<ICardFly> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export { CardFly };
