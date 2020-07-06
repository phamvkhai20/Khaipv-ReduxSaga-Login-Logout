const initialState ={
    infoUser:{},
    isLogin:false,
    dataUser:{},
    error:''
}
const LoginReducer =(state = initialState,action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('LOGIN_SUCCESS')
            return {...state,isLogin:true,dataUser:action.payload};
        case 'LOGIN_ERROR':
            console.log('LOGIN_ERROR')
            return {...state,error:action.error};
        case 'INFO_USER_LOGIN':
            console.log('INFO_USER_LOGIN')
            return {...state,infoUser:action.payload};
        case 'LOGIN_ERROR':
            return {...state};
        case 'LOGOUT_SUCCESS':
            console.log('LOGOUT_SUCCESS')
            return {...state,isLogin:false};
        default:
            return state;
    }
}
export default LoginReducer;




