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
  handle(use(config.theme[color as ColorName]), (val) => {
    document.documentElement.style.setProperty(`--${color}`, val.hex);
  });
}

const App: Component<EmptyArgs, EmptyArgs> = function () {
  this.css = css`
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: var(--base);
    color: var(--text);
    overflow-y: auto;
    overflow-x: hidden;
  `;

  this.mount = () => {
    Router.render(this.root);
    const scrollpos = localStorage.getItem("scrollpos");
    if (scrollpos) {
      console.log(scrollpos);
      // setTimeout(() => {
      //   this.root.scrollTo(0, parseInt(scrollpos));
      // }, 0);
      this.root.scrollTo(0, parseInt(scrollpos));
    }
    window.onbeforeunload = () => {
      localStorage.setItem("scrollpos", this.root.scrollTop.toString());
    };
  };

  return <div id="app" />;
};

document.body.appendChild(<App />);
