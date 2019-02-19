import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequestsList from "./views/RequestsList";
import GlobalStyle from "./stylesheets/global";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <GlobalStyle />
            <Route path="/" exact={true} component={RequestsList} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
