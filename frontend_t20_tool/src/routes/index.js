import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";

const SimpleText = ({ text, ...props }) => {
  return <>{props.children}</>;
};

export default function Routes() {
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  // const onClick = () => {
  //   if (darkMode) {
  //     theme.dispatch({type: "LIGHTMODE"});
  //   } else {
  //     theme.dispatch({type: "DARKMODE"});
  //   }
  // };
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
