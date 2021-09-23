import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/user/:id">
                  <Profile />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;