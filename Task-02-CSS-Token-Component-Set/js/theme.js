/**
 * Theme switcher.
 * Flips [data-theme] on <html>, which is the single hook every color,
 * shadow, and surface token in css/00-tokens is written against.
 * No component file needs to know dark mode exists.
 */
(function () {
  const STORAGE_KEY = "appverse-token-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
    localStorage.setItem(STORAGE_KEY, theme);
  }

  applyTheme(getPreferredTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      const current = root.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // Keep in sync if the OS theme changes and the user hasn't chosen manually.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY + "-manual")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  if (toggle) {
    toggle.addEventListener("click", function () {
      localStorage.setItem(STORAGE_KEY + "-manual", "true");
    });
  }
})();
