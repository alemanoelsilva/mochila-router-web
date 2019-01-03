import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/router";

import logo from "./logo.svg";
import "./App.css";
import Main from "./screens/main";
import Create from "./screens/create";
import Menu from "./components/menu";
import Infos from "./components/infos";
import Search from "./components/search";
import Footnote from "./components/footnote";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Infos />
        <Search />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Main />} />
            <PrivateRoute exact path="/create" component={Create} />
            <Route render={() => <h1>Página não encontrada</h1>} />
          </Switch>
        </BrowserRouter>
        <Footnote />
      </div>
    );
  }
}

export default App;
