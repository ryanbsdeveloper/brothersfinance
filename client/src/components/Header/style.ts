import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 66,
    backgroundColor: "#22548E",

    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  content: {
    left: 120,
  },
  viewTexts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 19,
    color: "#FFFFFF",
  },
});

export { styles };
