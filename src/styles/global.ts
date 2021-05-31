import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --red: tomato;
    --blue: indigo;
    --green: LightSeaGreen;
    --blue-light: skyblue;
    --text-title: darkslategray;
    --text-body: silver;
    --background: whitesmoke;
    --shape: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
    font-size: 100%;
    line-height: 1.5em;
  }

  body, input, textarea, button {
    font-family: 'Work Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0,.4);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    background-color: var(--shape);
    width: 100%;
    max-width: 32rem;
    padding: 2rem 1rem;
    border-radius: .8rem;
    position: relative;
  }

  .react-modal-close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    background-color: transparent
  }

`;