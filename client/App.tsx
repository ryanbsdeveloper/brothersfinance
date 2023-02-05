import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font'
import { Login } from "./src/screens/Login";
import { Register } from "./src/screens/Register";


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
        
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="SignUp" component={Register} />
        {/* <Stack.Screen name="Home" component={} /> */}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}