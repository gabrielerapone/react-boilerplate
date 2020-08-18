// Set theme according to system theme
const getSystemTheme = (theme: string, stateUpdater: any) => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return stateUpdater(() => (theme = "dark"));
  } else return stateUpdater(() => (theme = "light"));
};

// Listens for system theme changes
const listenSystemThemeChanges = (theme: string, stateUpdater: any) => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", event => {
      event.matches
        ? stateUpdater((theme: string) => (theme = "dark"))
        : stateUpdater((theme: string) => (theme = "light"));
    });
};

export { getSystemTheme, listenSystemThemeChanges };
