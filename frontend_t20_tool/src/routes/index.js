import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/molecules/Header";

const SimpleText = ({ text, ...props }) => {
  return <>{props.children}</>;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header/>
        </Route>
        <Route path="/loading">
          <SimpleText>Olá</SimpleText>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
