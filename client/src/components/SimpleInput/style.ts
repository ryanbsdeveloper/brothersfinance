import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 100,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  label: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,

    color: "#8F8F8F",
  },
  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#222222",
    borderWidth: 1.5,
    borderColor: "#8F8F8F",
    borderRadius: 4,
    paddingLeft: 15,

    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
    color: "#FFFFFF",
  },
});

export { styles };
