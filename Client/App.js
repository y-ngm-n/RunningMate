import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens

import SignupScreen from "./screens/InitialScreen/SignupScreen";
import LoginScreen from "./screens/InitialScreen/LoginScreen";
import HomeScreen from "./screens/AuthScreen/HomeScreen";
import MypageScreen from "./screens/AuthScreen/MypageScreen";
import CommunityScreen from "./screens/AuthScreen/CommunityScreen";

//contextAPI
import AuthContextProvider from "./store/auth-context";


//components

const InitialStack = createNativeStackNavigator();
const AuthStackTab = createBottomTabNavigator();

function AuthScreen() {
  return (
    <NavigationContainer>
      <AuthStackTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStackTab.Screen name="Home" component={HomeScreen} />
        <AuthStackTab.Screen name="Mypage" component={MypageScreen} />
        <AuthStackTab.Screen name="Community" component={CommunityScreen} />
      </AuthStackTab.Navigator>
    </NavigationContainer>
  );
}

function InitialScreen() {
  return (
    <NavigationContainer>
      <InitialStack.Navigator screenOptions={{ headerShown: false }}>
        <InitialStack.Screen name="Login" component={LoginScreen} />
        <InitialStack.Screen name="SignUp" component={SignupScreen} />
      </InitialStack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <AuthScreen />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
