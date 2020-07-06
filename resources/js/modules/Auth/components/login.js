import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { infoUserLogin } from "../actions/Login";
import { useDispatch, useSelector } from "react-redux";


function Login({ getUserReq }) {
    function Redirect() {
        window.location="./student";
    }
    const trangthai = useSelector(state => state.login.isLogin);
    if(trangthai) { Redirect()}
    const error = useSelector(state => state.login.error);
    const infos = useSelector(state => state.login.infoUser);
    const dispatch = useDispatch();
    const [InfoUser, setInfoUser] = useState({
        email: "",
        password: ""
    })
    const HandleLoiginInput = (event) => {
        const { name, value } = event.target;
        setInfoUser(prevInfo => {
            return {
                ...prevInfo, [name]: value
            }
        })
    }
    const submitInfoUser = () => {
        const action = infoUserLogin(InfoUser);
        dispatch(action);
    }

    return (
        <div>
            <div className="m-login__signin">
                <div className="m-login__head">
                    <h3 className="m-login__title">Sign In To Admin</h3>
                    <p className="m-login__title" style={{fontSize:'15px',color:"red"}}>{error}</p>
                </div>
                <form onSubmit={(e) => {getUserReq(infos); e.preventDefault(); }}>
                    <div className="form-group m-form__group">
                        <input
                            onChange={HandleLoiginInput}
                            className="form-control m-input"
                            type="text"
                            value={InfoUser.email}
                            placeholder="Email"
                            name="email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group m-form__group">
                        <input
                            onChange={HandleLoiginInput}
                            className="form-control m-input m-login__form-input--last"
                            type="password"
                            value={InfoUser.password}
                            placeholder="Password"
                            name="password"
                        />
                    </div>
                    <div className="row m-login__form-sub">
                        <div className="col m--align-left">
                            <label className="m-checkbox m-checkbox--focus">
                                <input type="checkbox" name="remember" />{" "}
                                Remember me
                                <span></span>
                            </label>
                        </div>
                        <div className="col m--align-right">
                            <Link to="/forgotpassword">Forgot password ?</Link>
                        </div>
                    </div>
                    <div className="m-login__form-action">
                        <button onClick={submitInfoUser}
                            id="m_login_signin_submit"
                            className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
                        >
                            Sign In
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;
