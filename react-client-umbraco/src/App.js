import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Employee } from "./Pages/Employee";
import { Country } from "./Pages/Country";
import { Department } from "./Pages/Department";
import { NavBar } from "./Components/NavBar";
import { Layout } from "./Components/Layout";
import { Jumbotron } from "./Components/Jumbotron";
import { getAccessToken } from "./umbraco-api.js";

class App extends Component {
  componentDidMount() {
    getAccessToken().then(token => {
      localStorage.setItem("accessToken", token);
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/employee" component={Employee} />
            <Route path="/country" component={Country} />
            <Route path="/department" component={Department} />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
