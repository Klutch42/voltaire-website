(() => {
  const root = document.body.dataset.root || "./";
  const headerMount = document.querySelector("[data-site-header]");
  const footerMount = document.querySelector("[data-site-footer]");

  if (headerMount) {
    headerMount.innerHTML = `
      <header class="site-header">
        <nav class="site-shell nav" aria-label="Primary navigation">
          <a class="brand" href="${root}" aria-label="Voltaire Research home">
            <img src="${root}assets/voltaire-mark.png" alt="" />
            <span>Voltaire</span>
          </a>
          <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="primary-links">Menu</button>
          <div class="nav-links" id="primary-links" data-nav-links>
            <a href="${root}research/">Research</a>
            <a href="${root}publications/">Publications</a>
            <a href="${root}index/">Index</a>
            <a href="${root}about/">About</a>
          </div>
        </nav>
      </header>`;

    const toggle = headerMount.querySelector("[data-menu-toggle]");
    const links = headerMount.querySelector("[data-nav-links]");
    toggle?.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links?.classList.toggle("is-open", !open);
    });
  }

  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="site-footer">
        <div class="site-shell footer-grid">
          <div>
            <p class="footer-wordmark">Voltaire Research</p>
            <p class="footer-description">Independent computational research.</p>
          </div>
          <nav class="footer-links" aria-label="Footer navigation">
            <a href="${root}research/">Research</a>
            <a href="${root}publications/">Publications</a>
            <a href="${root}index/">Experiments</a>
            <a href="${root}index/">Software</a>
          </nav>
          <p class="footer-copy">© 2026 Voltaire Research</p>
        </div>
      </footer>`;
  }
})();
