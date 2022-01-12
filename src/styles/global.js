import { createGlobalStyle } from "styled-components";

import background from "../assets/images/background.svg";

export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
}
body {
    background: #fff url(${background}) no-repeat;
    background-size: cover;
    font-family: Montserrat, sans-serif;
}
`;
