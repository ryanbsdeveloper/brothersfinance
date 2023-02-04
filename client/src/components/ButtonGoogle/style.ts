import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 345,
    height: 60,
    backgroundColor: "#1A1A1A",
    borderRadius: 4,
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 10,    
  },
  text: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,

    color: "#FFFFFF",
  },
});

export { styles };
