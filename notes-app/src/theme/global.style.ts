import { createGlobalStyle } from "styled-components";
import theme from "theme";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${colors.background.light};
    font-family: 'Graphik', Sans-Serif;
    overflow-x: hidden;
  }

  .react-grid-item.react-grid-placeholder {
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.background.light} !important;
  }
`;

export default GlobalStyle;
