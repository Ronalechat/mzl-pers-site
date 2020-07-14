import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Blog from "./containers/blog/Blog";
import NoPageFound from "./containers/no-page-found/NoPageFound";
import Navbar from "./components/navbar/Navbar";
// import Home from "./containers/home/Home";
// import Background from "./components/background/Background";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Navbar, commented for now til you know what to do with it. */}
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/blog" component={Blog} exact={true} />
          <Route component={NoPageFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
// const rootElement = document.getElementById("root");

export default App;
