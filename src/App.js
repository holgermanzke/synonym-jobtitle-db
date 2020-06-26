import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import main from "./themes/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
