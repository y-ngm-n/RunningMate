import {View,Text,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function MypageScreen(){
    return(
      <SafeAreaView style={styles.rootContainer}>
        <Text>MypageScreen</Text>
      </SafeAreaView>
    );
}
export default MypageScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'white',
    }
})