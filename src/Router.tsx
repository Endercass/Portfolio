import { Route, Router } from "dreamland-router";

import Home from "./routes/Home";
import Contact from "./routes/Contact";

import Error404 from "./routes/404";
import Layout from "./layout/Layout";

export default new Router(
  (
    <Route show={<Layout />}>
      <Route path="/" show={<Home />} />
      <Route path="/contact" show={<Contact />} />

      <Route path="*" show={<Error404 />} />
    </Route>
  ),
);
