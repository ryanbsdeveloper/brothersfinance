import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: 345,
    height: 50,
    backgroundColor: "#1A1A1A",
    borderRadius: 4,
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontFamily: 'Lexend',
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    color: "#FFFFFF",
  },
  image: {
    width: 25,
    height: 25,
    left: -20
  }
});

export { styles };
