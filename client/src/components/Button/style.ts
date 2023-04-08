import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 42,
    backgroundColor: "#222222",
    borderWidth: 2,
    borderColor: "#22548E",
    borderRadius: 4,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,

    color: "#FFFFFF",
  },
});

export { styles };
