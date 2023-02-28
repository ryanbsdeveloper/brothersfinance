import { StatusBar } from "expo-status-bar";
import { ButtonGoogle } from "../../components/ButtonGoogle";
import { ButtonFacebook } from "../../components/ButtonFacebook";
import { Logo } from "../../components/Logo";
import { styles } from "../../layout/session";

import { View, Text, ScrollView } from 'react-native'


function Login() {
  return (
    <View style={styles.layout}>
      <Logo />
      <View style={{marginVertical:25, width: 250}}>
        <Text style={styles.title}>Bem vindo novamente</Text>
        <Text style={styles.subTitle}>Acesse sua conta, e controle seu dinheiro.</Text>
      </View>
      <View>
        <ButtonGoogle
          onPress={() => console.log('clique')}
          title='Entrar com o Google' />
        <ButtonFacebook
          onPress={() => console.log('clique')}
          title='Entrar com o Facebook' />
      </View>
      <View style={styles.aling}>
        <Text style={styles.text}>Ainda não tem uma conta?</Text>
        <Text style={styles.textBlue}>Cadastre-se</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Termos de uso</Text>
        <Text style={styles.textFooter}>Política de privaciade</Text>
      </View>
    </View>
  );
}

export { Login };