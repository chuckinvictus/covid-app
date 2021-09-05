import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    header {
        a {
            color: inherit;
            text-decoration: none;
            text-align: center;
            border-color: transparent;
            border-radius: 8px;
            margin: 1%;
            padding: .3em 1.8em .3em 1.8em;
            font-size: 1.3em;
            background-color: transparent;
            font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
            cursor: pointer;
            transition: .3s;

            :hover {
                background-color: white;
                transition: .2s;
                box-shadow: 0 2px 5px #707070;
            }

            :active {
                transition: .2s;
                box-shadow: 0 0 5px #707070;
            }
        }
    }

    body {
        background: #fcfcfc;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;

`;