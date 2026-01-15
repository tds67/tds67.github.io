(function(){
  const root = document.documentElement;
  const THEME_KEY = "ck_theme";
  const defaultTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? "light" : "dark";
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || defaultTheme;
  root.setAttribute("data-theme", theme);

  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn){
    themeBtn.addEventListener("click", () => {
      const next = (root.getAttribute("data-theme") === "light") ? "dark" : "light";
      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
      themeBtn.setAttribute("aria-label", next === "light" ? "Switch to dark theme" : "Switch to light theme");
    });
  }

  const ham = document.getElementById("hamburger");
  const panel = document.getElementById("mobilePanel");
  if(ham && panel){
    ham.addEventListener("click", () => {
      const open = panel.classList.toggle("open");
      ham.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Set aria-current based on page
  const page = document.body.getAttribute("data-page");
  if(page){
    const links = document.querySelectorAll(`a[data-nav]`);
    links.forEach(a => {
      if(a.getAttribute("data-nav") === page){
        a.setAttribute("aria-current","page");
      }else{
        a.removeAttribute("aria-current");
      }
    });
  }

  // Footer year
  const y = document.getElementById("year");
  if(y){ y.textContent = new Date().getFullYear(); }

})();
