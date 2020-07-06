import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Footer from "./layout/footer";
import RouterStudent from "./router/router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../rootSaga";
import HeaderContainer from "../container/HeaderContainer";
import Dashboard from "./dashboard";


function IndexStudent() {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                        <HeaderContainer />
                        <br></br>
                        <Dashboard />
                    <Footer />
                </div>
            </Router>
        </Provider>
        
    );
}

if (document.getElementById("student-client")) {
    ReactDOM.render(
        <IndexStudent />,
        document.getElementById("student-client")
    );
}

export default IndexStudent;
