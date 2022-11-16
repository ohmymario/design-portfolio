// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
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

    @media only screen and (max-width: 840px) {
       font-size: 2.75rem; // 44px
       line-height: 55px;
     }

    @media only screen and (max-width: 650px) {
      font-size: 2.25rem; // 36px
      line-height: 45px;
  }

  }

  h2 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 2.5rem; // 40px
    line-height: 51px;
    color: var(--black);
    margin: 0;

    @media only screen and (max-width: 950px) {
      font-size: 2rem; // 32px
      line-height: 40px;
    }

    @media only screen and (max-width: 650px) {
      font-size: 26px; // 26px
      line-height: 33px;
    }

  }

  h3 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 2rem; // 32px
    line-height: 40px;
    color: var(--black);
    margin: 0;
  }

  h4 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 1.5rem; // 24px
    line-height: 30px;
    color: #FFFFFF;
    margin: 0;
  }

  p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 1.125rem; // 18px
    line-height: 28px;
    color: var(--medium-brown);
    margin: 0;

    @media only screen and (max-width: 650px) {
      font-size: 1rem; // 16px
      line-height: 26px;
    }
  }



`;

export default GlobalStyle;
