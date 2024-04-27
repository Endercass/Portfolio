import { Colors, flavors } from "@catppuccin/palette";
export type Color = {
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
  hsl: {
    h: number;
    s: number;
    l: number;
  };
};
export type Theme = Colors<Color>;

export const mochaTheme = Object.fromEntries(
  flavors.mocha.colorEntries.map(([name, color]) => [
    name,
    {
      hex: color.hex,
      rgb: color.rgb,
      hsl: color.hsl,
    } as Color,
  ]),
) as Theme;
