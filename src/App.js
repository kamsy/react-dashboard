import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Icons from "./components/Icons";
import Maps from "./components/Maps";
import User from "./components/User";
import Notifications from "./components/Notifications";
import Upgrade from "./components/Upgrade";
import Table from "./components/Table";
import Typography from "./components/Typography";

class App extends Component {
    componentDidMount() {
        return <Redirect push to={{ pathname: "/dashboard" }} />;
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/icons" component={Icons} />
                    <Route exact path="/maps" component={Maps} />
                    <Route exact path="/user" component={User} />
                    <Route
                        exact
                        path="/notifications"
                        component={Notifications}
                    />
                    <Route exact path="/upgrade" component={Upgrade} />
                    <Route exact path="/table" component={Table} />
                    <Route exact path="/typography" component={Typography} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
