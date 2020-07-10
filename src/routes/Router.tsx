import React from "react";
import Home from "../containers/home/Home";
import About from "../containers/about/About";
import Blog from "../containers/blog/Blog";

type RouterProps = {
  id?: string;
};

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/blog": () => <Blog />,
};

export default routes;
