import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Auth/Reducers";
import Login from "../Auth/Api/LoginSaga";
import Logout from "../Auth/Api/LogoutSaga";

function* rootsaga(){
    sagaMiddleware.run(Login);
    sagaMiddleware.run(Logout);
}
const sagaMiddleware = createSagaMiddleware();
export  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootsaga);


