import type { Theme } from "./theme";

declare global {
  interface Window {
    config: Stateful<Config>;
  }
  declare var config: Stateful<Config>;
  type Config = {
    theme: Stateful<Theme>;
    themes: Theme[];
    currentTheme: number;
  };
}
