(function () {
  var root = document.documentElement;

  // Light/dark theme toggle. The choice is remembered; otherwise the OS setting wins.
  var toggle = document.querySelector("[data-theme-toggle]");
  function isDark() {
    var theme = root.getAttribute("data-theme");
    if (theme) return theme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function syncToggle() {
    if (toggle) toggle.setAttribute("aria-pressed", isDark() ? "true" : "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = isDark() ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncToggle();
    });
    syncToggle();
  }

  // "Print / save as PDF" buttons on the CV page.
  document.querySelectorAll("[data-print]").forEach(function (button) {
    button.addEventListener("click", function () { window.print(); });
  });

  // On the Persian site, show post dates in the Solar Hijri calendar (e.g. ۵ مهر ۱۴۰۵).
  // The Gregorian date rendered by Hugo stays available as a tooltip.
  if (root.lang === "fa") {
    try {
      var persian = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        year: "numeric", month: "long", day: "numeric", timeZone: "UTC"
      });
      document.querySelectorAll("time[datetime]").forEach(function (el) {
        var date = new Date(el.getAttribute("datetime") + "T00:00:00Z");
        if (isNaN(date)) return;
        el.title = el.textContent.trim();
        el.textContent = persian.format(date);
      });
    } catch (e) {}
  }
})();
