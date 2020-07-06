
import { put, call, takeLatest } from "redux-saga/effects";

function* getTokenLogout(token) {
    const getLogout = () => {
      return axios({
        method: 'post',
        url: 'http://localhost:8000/api/auth/logout',
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
          'Authorization': `Bearer ${token}`   
        },})
      .then( (response)=>({ response }) )
      .catch( (error) => ({error
      }))
    };
    try {
      const response= yield call(getLogout);
      console.log(response)
      yield put({type: "LOGOUT_SUCCESS",isLogin:true});
      function Redirect() {
        window.location="./login";
    }
   Redirect()
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token")
    } catch (error) {
      // yield put({type: "LOGIN_ERROR", error:"Tài khoản hoặc mật khẩu không chính xác !"})
   }
  }
  
  export default function* Logout() {
      console.log('request')
    yield takeLatest("LOGOUT_REQUEST", getTokenLogout);
  }
  
  
  
  