import { Text, View } from "react-native";
import { styles } from "./style";
import React from "react";

interface IObjetivo {
  title: string;
  terminationDate: string;
  savedValue: string;
  missingValue: string;
  percentage: string;
}

const Objetivo = ({
  title,
  terminationDate,
  savedValue,
  missingValue,
  percentage,
}: IObjetivo) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTexts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.terminationDate}>Faltam {terminationDate}</Text>
      </View>

      <View>
        <View style={styles.viewValues}>
          <Text style={styles.savedValue}>{savedValue}</Text>
          <Text style={styles.missingValue}>de {missingValue}</Text>
        </View>

        <View style={styles.viewProgressBar}>
          <View style={styles.progressBar}>
            <View style={styles.progress}></View>
          </View>

          <Text style={styles.percentage}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export { Objetivo };
