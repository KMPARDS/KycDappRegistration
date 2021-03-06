import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Homepage } from "./containers/Homepage";
import "./App.css";
import { RegisterKyc } from "./containers/RegisterKyc";
import { ApproveKyc } from "./containers/ApproveKyc";
import { ResolveAddress } from "./containers/ResolveAddress/";
import { ResolveUsername } from "./containers/ResolveUsername";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="text-center">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/resolve-address" component={ResolveAddress} />
          <Route exact path="/resolve-username" component={ResolveUsername} />
          <Route exact path="/register" component={RegisterKyc} />
          <Route exact path="/approve" component={ApproveKyc} />
        </Switch>
      </Router>

      {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
