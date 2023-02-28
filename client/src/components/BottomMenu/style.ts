import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#0B0D0D",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    position: "absolute",
    bottom: 0,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#22548E",
    borderRadius: 150,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: -30,
  },
});

export { styles };
