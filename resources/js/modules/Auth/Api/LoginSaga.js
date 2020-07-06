import { put, call, takeLatest } from "redux-saga/effects";
function* getUsersSaga(user) {
  const getUsers = () => {
    return axios({
      method: 'post',
      url: 'http://localhost:8000/api/auth/login',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'},
      params:user.payload,
      })
    .then( (response)=>({ response }) )
    .catch( (error) => ({error
    }))
  };
  try {
    const response= yield call(getUsers);
    const data= response.response.data;
    console.log(data)
    yield put({ type: "LOGIN_SUCCESS",payload:data,token:data.data.access_token,refresh_token:data.data.refresh_token});
    localStorage.setItem('access_token',data.data.access_token);
    localStorage.setItem('refresh_token',data.data.refresh_token);
  } catch (error) {
    yield put({type: "LOGIN_ERROR", error:"Tài khoản hoặc mật khẩu không chính xác !"})
 }
}

export default function* Login() {
  yield takeLatest("GET_LOGIN_REQUEST", getUsersSaga);
}
