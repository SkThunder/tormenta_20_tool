import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlexBox from "../components/atoms/FlexBox";
import InputText from "../components/atoms/InputText";
import Header from "../components/molecules/Header";
import FlexScreen from "../components/atoms/FlexScreen";

const SimpleText = ({ text, ...props }) => {
  return <>{props.children}</>;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FlexScreen>
            <Header />
            <FlexBox>
              <InputText placeholder="Teste"/>
            </FlexBox>
          </FlexScreen>
        </Route>
        <Route path="/loading">
          <SimpleText>Olá</SimpleText>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
