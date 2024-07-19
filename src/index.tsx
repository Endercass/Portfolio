import "dreamland";
import { ColorName } from "@catppuccin/palette";

import "./index.css";
import { mochaTheme } from "./theme.tsx";
import Router from "./Router.tsx";

window.config = $store<Config>(
  {
    theme: $state(mochaTheme),
  },
  {
    ident: "config",
    backing: "localstorage",
    autosave: "auto",
  },
);

for (const color in config.theme) {
  useChange(use(config.theme[color as ColorName]), (val) => {
    document.documentElement.style.setProperty(`--${color}`, val.hex);
  });
}

const App: Component = function () {
  this.css = `
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: var(--base);
    color: var(--text);
    overflow-y: auto;
    overflow-x: hidden;
  `;

  this.mount = () => {
    Router.mount(this.root as HTMLElement);
  };

  return <div id="app" />;
};

document.body.appendChild(<App />);
