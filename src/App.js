import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import OrdersList from "./views/OrdersList";
import GlobalStyle from "./stylesheets/global";

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Layout>
              <GlobalStyle />
              <Route path="/" exact={true} component={OrdersList} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
