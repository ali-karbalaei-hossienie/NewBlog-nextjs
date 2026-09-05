// src/theme.ts
"use client";

import { createTheme } from "@mui/material/styles";
import vazirFont from "@/constants/localFont";

declare module "@mui/material/styles" {
  interface PaletteColor {
    900?: string;
    800?: string;
    700?: string;
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
    50?: string;
    0?: string;
  }
  interface SimplePaletteColorOptions {
    900?: string;
    800?: string;
    700?: string;
    600?: string;
    500?: string;
    400?: string;
    300?: string;
    200?: string;
    100?: string;
    50?: string;
    0?: string;
  }
}

export const getAppTheme = (mode: "light" | "dark" = "light") => {
  const isLight = mode === "light";

  return createTheme({
    direction: "rtl",
    typography: {
      fontFamily: vazirFont.style.fontFamily,
    },
    palette: {
      mode,
      background: {
        default: isLight ? "rgb(249, 250, 251)" : "rgb(20, 20, 20)",
        paper: isLight ? "#ffffff" : "rgb(24, 33, 47)",
      },
      primary: {
        main: "rgb(128, 153, 255)",
        light: "rgb(183, 197, 255)",
        dark: "rgb(74, 109, 255)",
        contrastText: "#ffffff",
        900: "rgb(74, 109, 255)",
        800: "rgb(92, 124, 255)",
        700: "rgb(110, 138, 255)",
        600: "rgb(128, 153, 255)",
        500: "rgb(146, 167, 255)",
        400: "rgb(164, 182, 255)",
        300: "rgb(183, 197, 255)",
        200: "rgb(201, 211, 255)",
        100: "rgb(219, 226, 255)",
        50: "rgb(228, 233, 255)",
      },
      secondary: isLight
        ? {
            main: "rgb(75, 85, 99)",
            light: "rgb(209, 213, 219)",
            dark: "rgb(17, 24, 39)",
            contrastText: "#ffffff",
            900: "rgb(17, 24, 39)",
            800: "rgb(31, 41, 55)",
            700: "rgb(55, 65, 81)",
            600: "rgb(75, 85, 99)",
            500: "rgb(107, 114, 128)",
            400: "rgb(156, 163, 175)",
            300: "rgb(209, 213, 219)",
            200: "rgb(229, 231, 235)",
            100: "rgb(243, 244, 246)",
            50: "rgb(249, 250, 251)",
            0: "rgb(255, 255, 255)",
          }
        : {
            main: "rgb(209, 213, 219)",
            light: "rgb(249, 250, 251)",
            dark: "rgb(31, 41, 55)",
            contrastText: "#111827",
            900: "rgb(249, 250, 251)",
            800: "rgb(243, 244, 246)",
            700: "rgb(229, 231, 235)",
            600: "rgb(209, 213, 219)",
            500: "rgb(156, 163, 175)",
            400: "rgb(107, 114, 128)",
            300: "rgb(75, 85, 99)",
            200: "rgb(55, 65, 81)",
            100: "rgb(31, 41, 55)",
            50: "rgb(17, 24, 39)",
            0: "rgb(24, 33, 47)",
          },
      success: {
        main: "rgb(0, 192, 115)",
      },
      warning: {
        main: "rgb(255, 153, 0)",
      },
      error: {
        main: "rgb(255, 71, 87)",
        light: "rgb(255, 116, 128)",
        dark: "rgb(220, 38, 52)",

        900: "rgb(127, 29, 29)",
        800: "rgb(153, 27, 27)",
        700: "rgb(185, 28, 28)",
        600: "rgb(220, 38, 52)",
        500: "rgb(239, 68, 68)",
        400: "rgb(248, 113, 113)",
        300: "rgb(252, 165, 165)",
        200: "rgb(254, 202, 202)",
        100: "rgb(254, 226, 226)",
        50: "rgb(254, 242, 242)",
      },
    },
  });
};

const theme = getAppTheme("dark");
export default theme;
