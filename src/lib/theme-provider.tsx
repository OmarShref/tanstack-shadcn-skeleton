import { createContext, useContext, useEffect, useState } from "react";

export type ThemeName = keyof typeof themes;
export type Mode = "light" | "dark" | "system";

type ThemeProviderState = {
  themeName: ThemeName;
  mode: Mode;
  setThemeName: (t: ThemeName) => void;
  setMode: (m: Mode) => void;
};

const initialState: ThemeProviderState = {
  themeName: "nutral",
  mode: "system",
  setThemeName: () => null,
  setMode: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  initialState,
);

export function ThemeProvider({
  children,
  defaultTheme = "nutral",
  defaultMode = "system",
}: {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  defaultMode?: Mode;
}) {
  const [themeName, setThemeName] = useState<ThemeName>(
    () => (localStorage.getItem("app-theme") as ThemeName) || defaultTheme,
  );

  const [mode, setMode] = useState<Mode>(
    () => (localStorage.getItem("app-mode") as Mode) || defaultMode,
  );

  useEffect(() => {
    // apply light/dark class
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const effective =
      mode === "system" ? (systemDark ? "dark" : "light") : mode;
    root.classList.add(effective);

    // apply all CSS vars for selected theme
    applyThemeVars(themeName, mode);

    // persist
    localStorage.setItem("app-theme", themeName);
    localStorage.setItem("app-mode", mode);
  }, [themeName, mode]);

  return (
    <ThemeProviderContext.Provider
      value={{
        themeName,
        mode,
        setThemeName,
        setMode,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeProviderContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export const themes = {
  nutral: {
    light: {
      radius: "0.625rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.145 0 0)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.145 0 0)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.145 0 0)",
      primary: "oklch(0.205 0 0)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.97 0 0)",
      secondaryForeground: "oklch(0.205 0 0)",
      muted: "oklch(0.97 0 0)",
      mutedForeground: "oklch(0.556 0 0)",
      accent: "oklch(0.97 0 0)",
      accentForeground: "oklch(0.205 0 0)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.922 0 0)",
      input: "oklch(0.922 0 0)",
      ring: "oklch(0.708 0 0)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.145 0 0)",
      sidebarPrimary: "oklch(0.205 0 0)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.97 0 0)",
      sidebarAccentForeground: "oklch(0.205 0 0)",
      sidebarBorder: "oklch(0.922 0 0)",
      sidebarRing: "oklch(0.708 0 0)",
    },
    dark: {
      background: "oklch(0.145 0 0)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.205 0 0)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.205 0 0)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.922 0 0)",
      primaryForeground: "oklch(0.205 0 0)",
      secondary: "oklch(0.269 0 0)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.269 0 0)",
      mutedForeground: "oklch(0.708 0 0)",
      accent: "oklch(0.269 0 0)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.556 0 0)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.205 0 0)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.488 0.243 264.376)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.269 0 0)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.556 0 0)",
    },
  },
  stone: {
    light: {
      radius: "0.625rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.147 0.004 49.25)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.147 0.004 49.25)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.147 0.004 49.25)",
      primary: "oklch(0.216 0.006 56.043)",
      primaryForeground: "oklch(0.985 0.001 106.423)",
      secondary: "oklch(0.97 0.001 106.424)",
      secondaryForeground: "oklch(0.216 0.006 56.043)",
      muted: "oklch(0.97 0.001 106.424)",
      mutedForeground: "oklch(0.553 0.013 58.071)",
      accent: "oklch(0.97 0.001 106.424)",
      accentForeground: "oklch(0.216 0.006 56.043)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.923 0.003 48.717)",
      input: "oklch(0.923 0.003 48.717)",
      ring: "oklch(0.709 0.01 56.259)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0.001 106.423)",
      sidebarForeground: "oklch(0.147 0.004 49.25)",
      sidebarPrimary: "oklch(0.216 0.006 56.043)",
      sidebarPrimaryForeground: "oklch(0.985 0.001 106.423)",
      sidebarAccent: "oklch(0.97 0.001 106.424)",
      sidebarAccentForeground: "oklch(0.216 0.006 56.043)",
      sidebarBorder: "oklch(0.923 0.003 48.717)",
      sidebarRing: "oklch(0.709 0.01 56.259)",
    },
    dark: {
      background: "oklch(0.147 0.004 49.25)",
      foreground: "oklch(0.985 0.001 106.423)",
      card: "oklch(0.216 0.006 56.043)",
      cardForeground: "oklch(0.985 0.001 106.423)",
      popover: "oklch(0.216 0.006 56.043)",
      popoverForeground: "oklch(0.985 0.001 106.423)",
      primary: "oklch(0.923 0.003 48.717)",
      primaryForeground: "oklch(0.216 0.006 56.043)",
      secondary: "oklch(0.268 0.007 34.298)",
      secondaryForeground: "oklch(0.985 0.001 106.423)",
      muted: "oklch(0.268 0.007 34.298)",
      mutedForeground: "oklch(0.709 0.01 56.259)",
      accent: "oklch(0.268 0.007 34.298)",
      accentForeground: "oklch(0.985 0.001 106.423)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.553 0.013 58.071)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.216 0.006 56.043)",
      sidebarForeground: "oklch(0.985 0.001 106.423)",
      sidebarPrimary: "oklch(0.488 0.243 264.376)",
      sidebarPrimaryForeground: "oklch(0.985 0.001 106.423)",
      sidebarAccent: "oklch(0.268 0.007 34.298)",
      sidebarAccentForeground: "oklch(0.985 0.001 106.423)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.553 0.013 58.071)",
    },
  },
  zinc: {
    light: {
      radius: "0.625rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.141 0.005 285.823)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.141 0.005 285.823)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.141 0.005 285.823)",
      primary: "oklch(0.21 0.006 285.885)",
      primaryForeground: "oklch(0.985 0 0)",
      secondary: "oklch(0.967 0.001 286.375)",
      secondaryForeground: "oklch(0.21 0.006 285.885)",
      muted: "oklch(0.967 0.001 286.375)",
      mutedForeground: "oklch(0.552 0.016 285.938)",
      accent: "oklch(0.967 0.001 286.375)",
      accentForeground: "oklch(0.21 0.006 285.885)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.92 0.004 286.32)",
      input: "oklch(0.92 0.004 286.32)",
      ring: "oklch(0.705 0.015 286.067)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.141 0.005 285.823)",
      sidebarPrimary: "oklch(0.21 0.006 285.885)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.967 0.001 286.375)",
      sidebarAccentForeground: "oklch(0.21 0.006 285.885)",
      sidebarBorder: "oklch(0.92 0.004 286.32)",
      sidebarRing: "oklch(0.705 0.015 286.067)",
    },
    dark: {
      background: "oklch(0.141 0.005 285.823)",
      foreground: "oklch(0.985 0 0)",
      card: "oklch(0.21 0.006 285.885)",
      cardForeground: "oklch(0.985 0 0)",
      popover: "oklch(0.21 0.006 285.885)",
      popoverForeground: "oklch(0.985 0 0)",
      primary: "oklch(0.92 0.004 286.32)",
      primaryForeground: "oklch(0.21 0.006 285.885)",
      secondary: "oklch(0.274 0.006 286.033)",
      secondaryForeground: "oklch(0.985 0 0)",
      muted: "oklch(0.274 0.006 286.033)",
      mutedForeground: "oklch(0.705 0.015 286.067)",
      accent: "oklch(0.274 0.006 286.033)",
      accentForeground: "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.552 0.016 285.938)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.006 285.885)",
      sidebarForeground: "oklch(0.985 0 0)",
      sidebarPrimary: "oklch(0.488 0.243 264.376)",
      sidebarPrimaryForeground: "oklch(0.985 0 0)",
      sidebarAccent: "oklch(0.274 0.006 286.033)",
      sidebarAccentForeground: "oklch(0.985 0 0)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.552 0.016 285.938)",
    },
  },
  gray: {
    light: {
      radius: "0.625rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.13 0.028 261.692)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.13 0.028 261.692)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.13 0.028 261.692)",
      primary: "oklch(0.21 0.034 264.665)",
      primaryForeground: "oklch(0.985 0.002 247.839)",
      secondary: "oklch(0.967 0.003 264.542)",
      secondaryForeground: "oklch(0.21 0.034 264.665)",
      muted: "oklch(0.967 0.003 264.542)",
      mutedForeground: "oklch(0.551 0.027 264.364)",
      accent: "oklch(0.967 0.003 264.542)",
      accentForeground: "oklch(0.21 0.034 264.665)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.928 0.006 264.531)",
      input: "oklch(0.928 0.006 264.531)",
      ring: "oklch(0.707 0.022 261.325)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.985 0.002 247.839)",
      sidebarForeground: "oklch(0.13 0.028 261.692)",
      sidebarPrimary: "oklch(0.21 0.034 264.665)",
      sidebarPrimaryForeground: "oklch(0.985 0.002 247.839)",
      sidebarAccent: "oklch(0.967 0.003 264.542)",
      sidebarAccentForeground: "oklch(0.21 0.034 264.665)",
      sidebarBorder: "oklch(0.928 0.006 264.531)",
      sidebarRing: "oklch(0.707 0.022 261.325)",
    },
    dark: {
      background: "oklch(0.13 0.028 261.692)",
      foreground: "oklch(0.985 0.002 247.839)",
      card: "oklch(0.21 0.034 264.665)",
      cardForeground: "oklch(0.985 0.002 247.839)",
      popover: "oklch(0.21 0.034 264.665)",
      popoverForeground: "oklch(0.985 0.002 247.839)",
      primary: "oklch(0.928 0.006 264.531)",
      primaryForeground: "oklch(0.21 0.034 264.665)",
      secondary: "oklch(0.278 0.033 256.848)",
      secondaryForeground: "oklch(0.985 0.002 247.839)",
      muted: "oklch(0.278 0.033 256.848)",
      mutedForeground: "oklch(0.707 0.022 261.325)",
      accent: "oklch(0.278 0.033 256.848)",
      accentForeground: "oklch(0.985 0.002 247.839)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.551 0.027 264.364)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.21 0.034 264.665)",
      sidebarForeground: "oklch(0.985 0.002 247.839)",
      sidebarPrimary: "oklch(0.488 0.243 264.376)",
      sidebarPrimaryForeground: "oklch(0.985 0.002 247.839)",
      sidebarAccent: "oklch(0.278 0.033 256.848)",
      sidebarAccentForeground: "oklch(0.985 0.002 247.839)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.551 0.027 264.364)",
    },
  },
  slate: {
    light: {
      radius: "0.625rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.129 0.042 264.695)",
      card: "oklch(1 0 0)",
      cardForeground: "oklch(0.129 0.042 264.695)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.129 0.042 264.695)",
      primary: "oklch(0.208 0.042 265.755)",
      primaryForeground: "oklch(0.984 0.003 247.858)",
      secondary: "oklch(0.968 0.007 247.896)",
      secondaryForeground: "oklch(0.208 0.042 265.755)",
      muted: "oklch(0.968 0.007 247.896)",
      mutedForeground: "oklch(0.554 0.046 257.417)",
      accent: "oklch(0.968 0.007 247.896)",
      accentForeground: "oklch(0.208 0.042 265.755)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.929 0.013 255.508)",
      input: "oklch(0.929 0.013 255.508)",
      ring: "oklch(0.704 0.04 256.788)",
      chart1: "oklch(0.646 0.222 41.116)",
      chart2: "oklch(0.6 0.118 184.704)",
      chart3: "oklch(0.398 0.07 227.392)",
      chart4: "oklch(0.828 0.189 84.429)",
      chart5: "oklch(0.769 0.188 70.08)",
      sidebar: "oklch(0.984 0.003 247.858)",
      sidebarForeground: "oklch(0.129 0.042 264.695)",
      sidebarPrimary: "oklch(0.208 0.042 265.755)",
      sidebarPrimaryForeground: "oklch(0.984 0.003 247.858)",
      sidebarAccent: "oklch(0.968 0.007 247.896)",
      sidebarAccentForeground: "oklch(0.208 0.042 265.755)",
      sidebarBorder: "oklch(0.929 0.013 255.508)",
      sidebarRing: "oklch(0.704 0.04 256.788)",
    },
    dark: {
      background: "oklch(0.129 0.042 264.695)",
      foreground: "oklch(0.984 0.003 247.858)",
      card: "oklch(0.208 0.042 265.755)",
      cardForeground: "oklch(0.984 0.003 247.858)",
      popover: "oklch(0.208 0.042 265.755)",
      popoverForeground: "oklch(0.984 0.003 247.858)",
      primary: "oklch(0.929 0.013 255.508)",
      primaryForeground: "oklch(0.208 0.042 265.755)",
      secondary: "oklch(0.279 0.041 260.031)",
      secondaryForeground: "oklch(0.984 0.003 247.858)",
      muted: "oklch(0.279 0.041 260.031)",
      mutedForeground: "oklch(0.704 0.04 256.788)",
      accent: "oklch(0.279 0.041 260.031)",
      accentForeground: "oklch(0.984 0.003 247.858)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.551 0.027 264.364)",
      chart1: "oklch(0.488 0.243 264.376)",
      chart2: "oklch(0.696 0.17 162.48)",
      chart3: "oklch(0.769 0.188 70.08)",
      chart4: "oklch(0.627 0.265 303.9)",
      chart5: "oklch(0.645 0.246 16.439)",
      sidebar: "oklch(0.208 0.042 265.755)",
      sidebarForeground: "oklch(0.984 0.003 247.858)",
      sidebarPrimary: "oklch(0.488 0.243 264.376)",
      sidebarPrimaryForeground: "oklch(0.984 0.003 247.858)",
      sidebarAccent: "oklch(0.279 0.041 260.031)",
      sidebarAccentForeground: "oklch(0.984 0.003 247.858)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.551 0.027 264.364)",
    },
  },
  ads: {
    light: {
      radius: "0.625rem",
      background: "oklch(1 0 0)",
      foreground: "oklch(0.14 0.03 250)",
      card: "oklch(0.98 0 0)",
      cardForeground: "oklch(0.14 0.03 250)",
      popover: "oklch(1 0 0)",
      popoverForeground: "oklch(0.14 0.03 250)",

      primary: "oklch(0.65 0.21 259.5)", // Google blue
      primaryForeground: "oklch(0.98 0.02 250)",

      secondary: "oklch(0.95 0.01 260)",
      secondaryForeground: "oklch(0.25 0.02 260)",

      muted: "oklch(0.96 0.01 260)",
      mutedForeground: "oklch(0.55 0.02 260)",

      // accent = neutral blue/gray for general UI highlighting
      accent: "oklch(0.88 0.02 250)",
      accentForeground: "oklch(0.25 0.02 260)",

      // ✅ new dedicated success palette
      success: "oklch(0.75 0.19 145)",
      successForeground: "oklch(0.14 0.03 250)",

      destructive: "oklch(0.65 0.23 25)",

      border: "oklch(0.92 0.01 260)",
      input: "oklch(0.92 0.01 260)",
      ring: "oklch(0.65 0.21 259.5)",

      chart1: "oklch(0.65 0.21 259.5)", // blue
      chart2: "oklch(0.75 0.19 145)", // green (success)
      chart3: "oklch(0.85 0.2 95)", // yellow
      chart4: "oklch(0.65 0.23 25)", // red
      chart5: "oklch(0.7 0.2 200)", // purple/blue

      sidebar: "oklch(0.985 0 0)",
      sidebarForeground: "oklch(0.14 0.03 250)",
      sidebarPrimary: "oklch(0.65 0.21 259.5)",
      sidebarPrimaryForeground: "oklch(0.98 0.02 250)",
      sidebarAccent: "oklch(0.88 0.02 250)",
      sidebarAccentForeground: "oklch(0.25 0.02 260)",
      sidebarBorder: "oklch(0.92 0.01 260)",
      sidebarRing: "oklch(0.65 0.21 259.5)",
    },
    dark: {
      background: "oklch(0.15 0.02 260)",
      foreground: "oklch(0.98 0.01 250)",
      card: "oklch(0.20 0.02 260)",
      cardForeground: "oklch(0.98 0.01 250)",
      popover: "oklch(0.20 0.02 260)",
      popoverForeground: "oklch(0.98 0.01 250)",

      primary: "oklch(0.55 0.21 259.5)",
      primaryForeground: "oklch(0.98 0.01 250)",

      secondary: "oklch(0.30 0.02 260)",
      secondaryForeground: "oklch(0.98 0.01 250)",

      muted: "oklch(0.30 0.02 260)",
      mutedForeground: "oklch(0.70 0.01 260)",

      // neutral accent in dark
      accent: "oklch(0.35 0.02 260)",
      accentForeground: "oklch(0.98 0.01 250)",

      // ✅ success in dark
      success: "oklch(0.65 0.19 145)",
      successForeground: "oklch(0.98 0.01 250)",

      destructive: "oklch(0.65 0.23 25)",

      border: "oklch(1 0 0 / 10%)",
      input: "oklch(1 0 0 / 15%)",
      ring: "oklch(0.55 0.21 259.5)",

      chart1: "oklch(0.55 0.21 259.5)", // blue
      chart2: "oklch(0.65 0.19 145)", // green
      chart3: "oklch(0.75 0.2 95)", // yellow
      chart4: "oklch(0.65 0.23 25)", // red
      chart5: "oklch(0.65 0.18 200)", // purple/blue

      sidebar: "oklch(0.20 0.02 260)",
      sidebarForeground: "oklch(0.98 0.01 250)",
      sidebarPrimary: "oklch(0.55 0.21 259.5)",
      sidebarPrimaryForeground: "oklch(0.98 0.01 250)",
      sidebarAccent: "oklch(0.35 0.02 260)",
      sidebarAccentForeground: "oklch(0.98 0.01 250)",
      sidebarBorder: "oklch(1 0 0 / 10%)",
      sidebarRing: "oklch(0.55 0.21 259.5)",
    },
  },
} as const;

export function applyThemeVars(themeName: ThemeName, mode: Mode) {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const effective = mode === "system" ? (systemDark ? "dark" : "light") : mode;

  const t = themes[themeName][effective];
  const root = document.documentElement;
  Object.entries(t).forEach(([k, v]) => {
    root.style.setProperty(
      `--${k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())}`,
      v,
    );
  });
}
