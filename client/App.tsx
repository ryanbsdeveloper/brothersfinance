import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { BottomMenu } from "./src/components/BottomMenu";
import { Header } from "./src/components/Header";
import { SimpleInput } from "./src/components/SimpleInput";
import { ButtonGoogle } from "./src/components/ButtonGoogle";
import { ButtonFacebook } from "./src/components/ButtonFacebook";

export default function App() {
  return (
    <>
      <StatusBar
        hidden={false}
        backgroundColor="#FFFFFF"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <ButtonGoogle
        onPress={() => console.log('clique')}
        title='Entrar com o Google' />
      <ButtonFacebook
        onPress={() => console.log('clique')}
        title='Entrar com o Facebook'/>
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
