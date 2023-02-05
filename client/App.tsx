import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator();


export default function App() {
  const [loaded] = useFonts({
    'Lexend': require('./assets/fonts/Lexend-VariableFont_wght.ttf'), // 100
  })

  if (!loaded) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/*
        <Stack.Screen name="SignIn" component={} />
        <Stack.Screen name="SignUp" component={} />
        <Stack.Screen name="Home" component={} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}