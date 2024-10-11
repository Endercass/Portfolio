import {
  CatppuccinFlavor,
  ColorFormat,
  Colors,
  flavors,
} from "@catppuccin/palette";
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

export type Theme = Colors<Color> & {
  symbolColor: Color;
};

const copyColor = (color: ColorFormat): Color =>
  ({
    hex: color.hex,
    rgb: color.rgb,
    hsl: color.hsl,
  } as Color);

const flavorToTheme = (theme: CatppuccinFlavor, symbolColor: Color): Theme =>
  ({
    ...Object.fromEntries(
      theme.colorEntries.map(([name, color]) => [name, copyColor(color)]),
    ),
    symbolColor,
  } as Theme);

export const mochaTheme = flavorToTheme(
  flavors.mocha,
  copyColor(flavors.mocha.colors.red),
);
export const frappeTheme = flavorToTheme(
  flavors.frappe,
  copyColor(flavors.frappe.colors.peach),
);
export const latteTheme = flavorToTheme(
  flavors.latte,
  copyColor(flavors.latte.colors.yellow),
);
export const macchiatoTheme = flavorToTheme(
  flavors.macchiato,
  copyColor(flavors.macchiato.colors.green),
);
