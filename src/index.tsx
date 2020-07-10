import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { useRoutes, A } from "hookrouter";
import Routes from "./routes/Router";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import NoPageFound from "./containers/no-page-found/NoPageFound";

function App() {
  const routeResult = useRoutes(Routes);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <A href="/">Home page</A>
        <A href="/about">About</A>
        <A href="/blog">Blog</A>
        {routeResult || <NoPageFound />}
      </ThemeProvider>
    </React.StrictMode>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
