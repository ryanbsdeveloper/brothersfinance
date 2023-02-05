import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: '100%',
    borderColor: '#22548E',
    borderTopWidth: 5,
    borderBottomWidth: 5,
    backgroundColor: "#222222",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: 'Lexend',
    color: '#8F8F8F',
    fontWeight: '400',
    fontSize: 17
  },
  title: {
    fontFamily: 'Lexend',
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center'
  },
  subTitle: {
    fontFamily: 'Lexend',
    color: '#8F8F8F',
    fontWeight: '400',
    textAlign: 'center'
  },
  textBlue: {
    fontFamily: 'Lexend',
    color: '#22548E',
    fontWeight: '500',
    fontSize: 17,
    marginLeft: 5
  },
  aling: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textFooter: {
    fontFamily: 'Lexend',
    color: '#8F8F8F',
    fontWeight: '400'
  },
  footer: {
    bottom: -120,
    width: '90%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});

export { styles };
