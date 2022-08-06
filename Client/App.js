// react native module import
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext, useEffect,useState } from "react";

//screens

import SignupScreen from "./screens/InitialScreen/SignupScreen";
import LoginScreen from "./screens/InitialScreen/LoginScreen";
import HomeScreen from "./screens/AuthScreen/HomeScreen";
import MypageScreen from "./screens/AuthScreen/MypageScreen";
import CommunityScreen from "./screens/AuthScreen/CommunityScreen";
import LoadingScreen from "./screens/LoadingScreen";
//contextAPI
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";




//components

const InitialStack = createNativeStackNavigator();
const AuthStackTab = createBottomTabNavigator();

function AuthScreen() {
  return (
      <AuthStackTab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStackTab.Screen name="Home" component={HomeScreen} />
        <AuthStackTab.Screen name="Mypage" component={MypageScreen} />
        <AuthStackTab.Screen name="Community" component={CommunityScreen} />
      </AuthStackTab.Navigator>
  );
}

function InitialScreen() {
  return (
      <InitialStack.Navigator screenOptions={{ headerShown: false }}>
        <InitialStack.Screen name="Login" component={LoginScreen} />
        <InitialStack.Screen name="SignUp" component={SignupScreen} />
      </InitialStack.Navigator>
  );
}

function Navigation(){
  const authCtx = useContext(AuthContext);
  return(
    <NavigationContainer>
    {authCtx.isAuthenticated&&<AuthScreen />}
    {!authCtx.isAuthenticated&&<InitialScreen />}
    </NavigationContainer>

  )
}

function Root(){
  const [isTryingLogin,setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken(){
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        authCtx.saveAuthenticate(storedToken);
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  },[]);

  if (isTryingLogin){
    return <LoadingScreen />
  }
  return <Navigation />
}

export default function App() {
  const authCtx = useContext(AuthContext);
  console.log('isAuthenticated: ',authCtx.isAuthenticated);
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
