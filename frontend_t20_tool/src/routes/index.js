import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlexBox from "../components/atoms/FlexBox";
import InputText from "../components/atoms/InputText";
import Header from "../components/molecules/Header";

import ThemeButton from "../components/molecules/ThemeButton";

const SimpleText = ({ text, ...props }) => {
  return <>{props.children}</>;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header>
            <FlexBox>
              <InputText placeholder="Teste" />
              <ThemeButton style={{ margin: "0 0 0 15px" }} />
            </FlexBox>
          </Header>
        </Route>
        <Route path="/loading">
          <SimpleText>Olá</SimpleText>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
