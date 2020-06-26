import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
import main from "./themes/main";

function App() {
  return (
    <ThemeProvider theme={main}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
