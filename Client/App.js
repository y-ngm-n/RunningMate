import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//screens
import SignupScreen from './screens/InitialScreen/SignupScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <SignupScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
