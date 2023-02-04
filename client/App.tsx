import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { BottomMenu } from "./src/components/BottomMenu";
import { Header } from "./src/components/Header";

export default function App() {
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Header title="Objetivo" subtitle="1 de 4" />
      <BottomMenu />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
