import { Redirect, Route } from "dreamland-router";

import Home from "./routes/Home";
import Contact from "./routes/Contact";

import Layout from "./layout/Layout";
import Error404 from "./routes/404";

export default (
  <Route path="/">
    <Route
      path="home"
      show={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path="contact"
      show={
        <Layout>
          <Contact />
        </Layout>
      }
    />

    <Redirect to="home" path="" />
    <Route
      path=":route"
      show={
        <Layout passthrough={["route"]}>
          <Error404 route="aaa" />
        </Layout>
      }
    />
  </Route>
).$;
