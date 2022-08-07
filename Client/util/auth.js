import axios from "axios";

//token 발급 함수
export async function login(email, password) {
  const url = `http://localhost:3000/auth/login`;
  const response = await axios.post(url, {
    email: email,
    password: password,
  });
  return response.data;
}
