import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

//components
import Input from "../../components/ui/Input";
import { deviceHeight } from "../../util/device-information";
import Header from "../../components/ui/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import FlatButton from "../../components/Button/FlatButton";

function checkId(id) {
  if (id && id.includes("@")) {
    return true;
  }
  Alert.alert("이메일을 확인하세요!", "이메일 형식이 아닙니다");
  return false;
}

function checkPassword(pw) {
  const len = pw.length;
  if (pw) {
    if (6 <= len && len <= 15) {
      return true;
    }
  }
  Alert.alert("비밀번호를 확인하세요!", "비밀번호는 6~15자여야 합니다!");
}

function SignupScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [confirm, setConfirm] = useState();
  const navigation = useNavigation();

  function checkConfirmPassword(pw) {
    setConfirmPassword(pw);
    if (pw === password) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }

  function backScreen() {
    navigation.goBack();
  }
  async function submitHandler() {
    try {
      const url = "http://localhost:3000/auth/register";
      //should check id duplicate
      const dupCheck = (await axios.post(url + "/overlap", { email: email })).data.success;
      if (!dupCheck){
        Alert.alert('회원가입 실패','중복된 이메일입니다.');
        return;
      }

      //check Id format
      const emailCheck = checkId(email);

      //check password
      const passwordCheck = checkPassword(password);

      //go to DB
      if (emailCheck && passwordCheck) {
        const response = await axios.post(url, {
          email: email,
          password: password,
        });

        if (response.data.success){
          Alert.alert('회원가입 완료','환영합니다!');
          navigation.replace('Login');
        }
        else{
          Alert.alert('회원가입 실패','다시 시도해주세요');
          return;
        }
      }
    } catch (e) {
      console.log(e);
      Alert.alert("오류");
    }
  }
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Header>회원 가입 정보를 {"\n"}입력해주세요</Header>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Input
            text={"이메일 (example@example.com"}
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            text={"비밀번호 (6~15자)"}
            onChangeText={setPassword}
            value={password}
            encrypt={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            text={"비밀번호 확인"}
            onChangeText={checkConfirmPassword}
            value={confirmPassword}
            encrypt={true}
          />
          {confirm && password && confirmPassword ? (
            <Text style={styles.confirmText}>일치합니다</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={submitHandler}>다음</PrimaryButton>
        <FlatButton onPress={backScreen}>뒤로가기</FlatButton>
      </View>
    </SafeAreaView>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
  confirmText: {
    marginVertical: 6,
    marginHorizontal: 6,
    fontSize: 12,
    color: "#818181",
  },
  buttonContainer: {},
});
