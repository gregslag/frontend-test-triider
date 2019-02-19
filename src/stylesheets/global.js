import { createGlobalStyle } from "styled-components";
import { colors } from "./index";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: ${colors.greyLighter};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: ${colors.gray}
    }
    html, body, #root {
        height: 100%;
    }
`;
