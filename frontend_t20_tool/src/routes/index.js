import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlexBox from "../components/atoms/FlexBox";
import Screen from "../components/atoms/Screen";
import Header from "../components/molecules/Header";

const SimpleText = ({ text, ...props }) => {
  return <>{props.children}</>;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Screen>
            <Header />
            <FlexBox>
              
            </FlexBox>
          </Screen>
        </Route>
        <Route path="/loading">
          <SimpleText>Olá</SimpleText>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
