import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Oswald", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    color: #000;
    background: #fff;
  }

  button {
    font-family: inherit;
  }
`

export default GlobalStyle
