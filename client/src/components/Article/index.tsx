import { Image, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import { styles } from "./style";
import React from "react";

interface IArticle {
  src: string;
  title: string;
  link: string;
}

const Article = ({ src, title, link }: IArticle) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require(src)} />

      <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>

        <Link style={styles.link} to={link}>
          Ler mais
        </Link>
      </View>
    </View>
  );
};

export { Article };
