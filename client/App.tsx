import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
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
