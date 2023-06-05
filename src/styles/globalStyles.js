import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root, body{
        width: 100%;
        height: 100%;
        background: #E5E5E5;
    }
`