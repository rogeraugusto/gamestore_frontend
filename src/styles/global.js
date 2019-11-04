import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFFFFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
