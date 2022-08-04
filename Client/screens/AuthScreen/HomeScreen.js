import {View,Text,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen(){
    return(
      <SafeAreaView style={styles.rootContainer}>
        <Text>HomeScreen</Text>
      </SafeAreaView>
    );
}
export default HomeScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'white',
    }
})