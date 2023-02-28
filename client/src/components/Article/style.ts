import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 165,
    width: 273,
  },
  image: {
    height: 126,
    width: "100%",

    borderRadius: 15,
  },
  view: {
    height: 69,
    width: "100%",

    borderRadius: 15,
    backgroundColor: "#0B0D0D",

    marginTop: -30,
    paddingVertical: 6,
    paddingHorizontal: 18,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,

    color: "#FFFFFF",
  },
  link: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 15,

    color: "#22548E",
    textAlign: "right"
  },
});

export { styles };
