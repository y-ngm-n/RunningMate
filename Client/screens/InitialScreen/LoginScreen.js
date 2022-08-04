import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaView, withSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";



//components
import FlatButton from "../../components/Button/FlatButton";
import Header from "../../components/ui/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Input from "../../components/ui/Input";
import { deviceHeight, deviceWidth } from "../../util/device-information";
import { login } from "../../util/auth";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
    const navigation=useNavigation();
  function signUp(){
    navigation.navigate('SignUp');
  }
  async function loginButtonHandler(){
    if (email && email.includes('@')){
      if (password){
        //check email and password with server
        try{
          const token = await login(email,password);
          console.log(token.data);
        }
        catch (e){
          console.log('로그인에러!!',e);
          Alert.alert('로그인 실패','서버 오류');
        }
        
      }
      else{
        Alert.alert('로그인 실패','패스워드를 입력하세요!');
        return;
      }
    }
    else{
        Alert.alert('로그인 실패','이메일을 입력하지 않았거나 잘못된 이메일 형식입니다!');
        return;
    }
  }
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header>Running Mate</Header>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Input text={"이메일"} onChangeText={setEmail} value={email} />
          </View>
          <View style={styles.inputContainer}>
            <Input
              text={"비밀번호"}
              onChangeText={setPassword}
              value={password}
              encrypt={true}
            />
          </View>
        </View>
      </View>
      <View style={styles.flatButton}>
        <View style={styles.flatButtonContainer}>
          <FlatButton onPress={signUp}>회원가입</FlatButton>
          <Text style={styles.temp}> | </Text>
          <FlatButton>아이디 찾기</FlatButton>
          <Text style={styles.temp}> | </Text>
          <FlatButton>비밀번호 찾기</FlatButton>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={loginButtonHandler}>로그인</PrimaryButton>
      </View>
    </SafeAreaView>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
  },
  form: {
    flex: 1,
    marginHorizontal: 30,
  },
  formContainer: {
    height: deviceHeight * 0.2,
  },

  inputContainer: {
    marginVertical: 8,
  },
  flatButtonContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flatButton: {
    width: deviceWidth * 0.5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    paddingVertical: 6,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 200,
  },
});
