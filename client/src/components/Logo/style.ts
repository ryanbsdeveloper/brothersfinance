import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: 'Lexend',
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: 'center'
  },
  textBlue: {
    fontFamily: 'Lexend',
    color: '#22548E',
    fontSize: 18,
    fontWeight: '600'
  },
  image: {
    width: 150,
    height: 150
  }
});

export { styles };
