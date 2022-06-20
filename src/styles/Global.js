import { createGlobalStyle } from "styled-components";
import px2vw from "../../utils/px2vw";

export const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #404040;
mix-blend-mode: normal;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  :root {
    font-family: 'Nunito', sans-serif;
      font-size: ${px2vw(24)};

      @media (min-width: 47em) { font-size: ${px2vw(18)}; } /* 752px */
@media (min-width: 68em) {         font-size: ${px2vw(16)};} /* 1088px */
      }



`;

export default Global;
