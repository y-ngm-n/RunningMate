import { useContext } from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../../store/auth-context';

function MypageScreen(){
  const authCtx = useContext(AuthContext);
  function logoutHandler(){
    authCtx.logout();
  }
    return(
      <SafeAreaView style={styles.rootContainer}>
        <Text>MypageScreen</Text>
        <Button title='logout' onPress={logoutHandler}/>
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