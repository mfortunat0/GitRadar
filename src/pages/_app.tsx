import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content:center;
    align-items: center;
    height: 100vh;
    background-color: #3a4750;
  }
`;

const theme = {
  black: "#3a4750",
  dark: "#303841",
  purple: "#8d27f5",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
