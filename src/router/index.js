import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "../screens/login/login.jsx"
import Dashboard from "../screens/appScreen/appScreen.jsx"


class Routers extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/app" component={Dashboard} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default Routers;
