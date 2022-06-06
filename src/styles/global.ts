import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #fff;

        --gray-100: #e1e1e6;
        --gray-300: #c4c4cc;
        --gray-400: #8d8d99;
        --gray-600: #323238;
        --gray-700: #29292e;
        --gray-800: #202024;
        --gray-900: #121214;
        
        --green-300: #00b37e;
        --green-500: #00875f;

        --red-500: #f75a68;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px var(--green-500);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: var(--gray-900);
        color: var(--gray-300);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
    }

    @media (max-width: 768px) {
        font-size: 50%;
    }
`;
