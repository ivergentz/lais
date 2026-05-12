import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #f4f1ea;
    --fg: #0a0a0a;
    --muted: #5a5a5a;
    --line: #0a0a0a;
    --accent: #e63946;
    --accent-fg: #ffffff;
    --grid-bg: #0a0a0a;
    --tile-bg: #1a1a1a;
    --tile-fg: #f4f1ea;
    --invert-bg: #0a0a0a;
    --invert-fg: #f4f1ea;
    --invert-muted: rgba(244, 241, 234, 0.7);
  }

  [data-theme="dark"] {
    --bg: #0a0a0a;
    --fg: #f4f1ea;
    --muted: #9a9a9a;
    --line: #f4f1ea;
    --accent: #ff3b3b;
    --accent-fg: #ffffff;
    --grid-bg: #f4f1ea;
    --tile-bg: #1a1a1a;
    --tile-fg: #f4f1ea;
    --invert-bg: #f4f1ea;
    --invert-fg: #0a0a0a;
    --invert-muted: rgba(10, 10, 10, 0.7);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    font-family: "JetBrains Mono", ui-monospace, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    color: var(--fg);
    background: var(--bg);
    transition: background 0.3s ease, color 0.3s ease;
  }

  button {
    font-family: inherit;
    color: inherit;
  }

  a {
    color: inherit;
  }

  ::selection {
    background: var(--accent);
    color: #fff;
  }
`

export default GlobalStyle
