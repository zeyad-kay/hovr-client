import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Calculator from './routes/Calculator';
import Home from './routes/Home';
import Login from './routes/Login';
import Signup from './routes/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/calculate">
          <Calculator />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
