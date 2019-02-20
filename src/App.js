import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import OrdersList from "./views/OrdersList";
import OrderDetail from "./views/OrderDetail";

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
              <OrderDetail path="/orcamentos/:id" component={OrderDetail} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
