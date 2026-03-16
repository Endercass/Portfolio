import { ColorName } from "@catppuccin/palette";

import "./index.css";
import {
  mochaTheme,
  frappeTheme,
  latteTheme,
  macchiatoTheme,
  Color,
} from "./theme.tsx";
import { Component, createState, createStore, css } from "dreamland/core";
import { Route, Router, router } from "dreamland/router";
import Layout from "./layout/Layout.tsx";
import Home from "./routes/Home.tsx";
import Contact from "./routes/Contact.tsx";
import Error404 from "./routes/404.tsx";

window.config = createStore<Config>(
  {
    theme: createState(mochaTheme),
    themes: [mochaTheme, frappeTheme, latteTheme, macchiatoTheme],
    currentTheme: 0,
  },
  {
    ident: "config",
    backing: "localstorage",
    autosave: "auto",
  },
);

for (const color in config.theme) {
  use(config.theme[color as ColorName]).listen((val: Color) => {
    document.documentElement.style.setProperty(`--${color}`, val.hex);
  });

  config.theme[color as ColorName] = config.theme[color as ColorName]
}

const App: Component = function (cx) {
  cx.mount = () => {
    router.route();
  };

  return <div id="app">
    <Router>
      <Route show={<Layout />}>
        <Route show={<Home />} />
        <Route path="contact" show={<Contact />} />

        <Route path="*" show={<Error404 />} />
      </Route>
    </Router>
  </div>
};

App.style = css`
  :scope {
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: var(--base);
    color: var(--text);
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

document.body.appendChild(<App />);

