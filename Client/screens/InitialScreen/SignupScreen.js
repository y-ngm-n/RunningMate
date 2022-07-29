import { View, Text, StyleSheet,Button } from "react-native";
import { useState } from "react";
import Input from "../../components/ui/Input";
import axios from "axios";

function SignupScreen() {
  const [inputEmail, setInputEmail] = useState();
  const [inputPw, setInputPw] = useState();

  async function submitHandler(){
    console.log('press');
    try{
        const url = 'http://localhost:3000/auth/register';
        const response = await axios.post(url,{
            email:inputEmail,
            password:inputPw,
        });
        console.log(response);
    }
    catch (e){
        console.log(e);
    }

  }
  return (
    <View style={styles.rootContainer}>
      <Input
        text={"이메일을 입력하세요"}
        onChangeText={setInputEmail}
        value={inputEmail}
      >
      </Input>
      <Input 
        text={"비밀번호를 입력하세요"}
        onChangeText={setInputPw}
        value={inputPw}
        encrypt={true}
      />
      <Button title='submit' onPress={submitHandler}/>
    </View>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
