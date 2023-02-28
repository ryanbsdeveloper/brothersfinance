import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 68,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",

    backgroundColor: "#1A1A1A",
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,

    color: "#FFFFFF",
    paddingLeft: 15,
    paddingBottom: 7,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    borderBottomWidth: 1,
    borderBottomColor: "#868686",
    paddingLeft: 15,
  },
  image: {
    width: 18,
    height: 18,

    resizeMode: "contain",
  },
  input: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 18,
    color: "#FFFFFF",
    paddingLeft: 10,
  },
});

export { styles };
