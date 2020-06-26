import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *:before,
        *after {
          box-sizing: border-box;
        }
        body {
          margin: 0px;
          height: 100vh;
          width: 100vw;
          background-color: red;
        }
      `}
    />
  );
}

export default GlobalStyles;
