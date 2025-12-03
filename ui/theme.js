export function applyTheme(root, theme) {
  const vars = {
    dark: {
      "--bg": "lch(12% 4 260)",
      "--card": "lch(16% 4 260)",
      "--accent": "lch(70% 25 200)",
      "--text": "white"
    }
  }[theme || "dark"];

  for (const k in vars) {
    root.style.setProperty(k, vars[k]);
  }
}
