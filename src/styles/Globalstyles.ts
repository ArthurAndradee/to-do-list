import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vh;
        height: 100%;
        width: 100%;
    }
    html {
        background-color: #D8D8D8;
    }
    :root {
    --white: #FFFFFF;
    --black: #000000;
    }
`;