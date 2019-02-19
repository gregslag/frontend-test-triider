import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RequestsList from "./views/RequestsList";

class App extends Component {
  render() {
    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <Layout>
            <Route path="/" exact={true} component={RequestsList} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
