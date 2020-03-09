import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "../screens/login/login.jsx";
import SignupScreen from "../screens/signup/signup.jsx";
import appScreen from "../screens/appScreen/appScreen.jsx";


class Routers extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/signup" component={SignupScreen} />
            <Route  path="/" component={appScreen} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default Routers;
