import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import main from "./themes/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
