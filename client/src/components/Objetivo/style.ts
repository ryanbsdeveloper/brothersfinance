import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 346,
    height: 105,

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    backgroundColor: "#1A1A1A",
    borderRadius: 4,

    padding: 5,
  },
  viewTexts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,

    color: "#FFFFFF",
  },
  terminationDate: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 15,

    color: "#8F8F8F",
  },
  viewValues: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingBottom: 2.5,
  },
  savedValue: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,

    color: "#FFFFFF",
    paddingRight: 5,
  },
  missingValue: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,

    color: "#8F8F8F",
  },
  viewProgressBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressBar: {
    width: 289,
    height: 10,
    backgroundColor: "#222222",
    borderRadius: 20,
  },
  progress: {
    width: 28,
    height: 10,
    borderRadius: 20,
    backgroundColor: "#025839",
  },
  percentage: {
    fontWeight: "500",
    fontSize: 8,
    lineHeight: 10,

    color: "#FFFFFF",
  },
});

export { styles };
