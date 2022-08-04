import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider} from "react-native-safe-area-context";

//screens
import SignupScreen from "./screens/InitialScreen/SignupScreen";
import LoginScreen from "./screens/InitialScreen/LoginScreen";

const InitialStack = createNativeStackNavigator();

function InitialScreen() {
  return (
      <NavigationContainer>
        <InitialStack.Navigator screenOptions={
          {headerShown:false,}}>
          <InitialStack.Screen name="Login" component={LoginScreen} />
          <InitialStack.Screen name="SignUp" component={SignupScreen} />
        </InitialStack.Navigator>
      </NavigationContainer>
  );
}
export default function App() {
  return (
    <SafeAreaProvider>
      <InitialScreen />
    </SafeAreaProvider>
  );
}

const styles=StyleSheet.create({

})