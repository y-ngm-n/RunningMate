import {View,Text,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function CommunityScreen(){
    return(
      <SafeAreaView style={styles.rootContainer}>
        <Text>CommunityScreen</Text>
      </SafeAreaView>
    );
}
export default CommunityScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor:'white',
    }
})