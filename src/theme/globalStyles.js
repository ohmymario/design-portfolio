// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap');
  :root {
    --black: #030303;
    --medium-brown: #7A746E;
    --light-cream: #FFF7F0;
    --galactic-blue: #755CDE;
    --summer-yellow: #F6A560;
    --pink: #F3939E;
    --light-red: #EB7565;
    --cyan: #61C4B7;
    --dark-purple: #552049;
    --font-family: 'Plus Jakarta Sans', sans-serif;

    --max-width: 1110px;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--light-cream);
    font-family: var(--font-family);
  }

  h1 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 3.5rem; // 56px
    line-height: 70px;
    color: var(--black);
    margin: 0;
  }

  h2 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 2.5rem; // 40px
    line-height: 51px;
    color: var(--black);
    margin: 0;
  }

  h3 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 2rem; // 32px
    line-height: 40px;
    color: var(--black);
    margin: 0;
  }

  p {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px; // 18px
    line-height: 28px;
    color: var(--medium-brown);
    margin: 0;
  }



`;

export default GlobalStyle;
