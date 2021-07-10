import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Home = ({ text }) => {
  return <h1>{text}</h1>;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home text="Teste!" />
        </Route>
        <Route path="/loading">
          <Home text="Carregando..." />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
