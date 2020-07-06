import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "../modules/Auth/components/auth";
import IndexStudent from "../modules/Student-Client/components";

function RouterIndex() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Auth />
                </Route>
                <Route path="/student">
                    <IndexStudent />
                </Route>
            </Switch>
        </Router>
    );
}
export default RouterIndex;
