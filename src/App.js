import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import {Provider} from 'mobx-react';
import store from "./stores/pianoStore";
import history from './hisroty';
import NavBar from "./components/NavBar";
import Piano from "./components/Piano";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider pianoStore={store}>
        <Router history={history}>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Piano} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
