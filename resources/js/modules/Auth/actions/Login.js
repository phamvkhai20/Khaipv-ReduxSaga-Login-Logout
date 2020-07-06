export const infoUserLogin=(login)=>{
    return {
        type: 'INFO_USER_LOGIN',
        payload:login,
    }
}
export const getUserSuccess =(login)=>{
    return {
        type: 'GET_LOGIN_REQUEST',
        payload:login,
    }
}

export const loginError =(login)=>{
    return {
        type: 'LOGIN_ERROR',
        payload:login,
    }
}
export const LOGOUT_REQUEST =(token)=>{
    return {
        type: 'LOGOUT_REQUEST',
        payload:token,
    }
}
export const LOGOUT_ERROR =(error)=>{
    return {
        type: 'LOGIN_ERROR',
        payload:error,
    }
}