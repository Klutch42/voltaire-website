(() => {
  const form = document.querySelector("[data-waitlist]");
  const status = document.querySelector("[data-form-status]");
  const success = document.querySelector("[data-waitlist-success]");
  const dialog = document.querySelector("[data-waitlist-dialog]");
  const closeButton = document.querySelector("[data-close-waitlist]");
  const waitlistCtas = document.querySelectorAll("[data-waitlist-cta]");
  const platformLabel = document.querySelector("[data-platform-label]");
  const platformIcon = document.querySelector("[data-platform-icon]");
  if (!form || !status || !success || !dialog || !closeButton || !platformLabel || !platformIcon) return;

  const platform = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent;
  if (/mac|iphone|ipad|ipod/i.test(platform)) {
    platformLabel.textContent = "Download for macOS";
    platformIcon.dataset.platform = "macos";
  } else if (/win/i.test(platform)) {
    platformLabel.textContent = "Download for Windows";
    platformIcon.dataset.platform = "windows";
  } else {
    platformLabel.textContent = "Download for desktop";
    platformIcon.dataset.platform = "desktop";
  }

  const showForm = () => {
    form.reset();
    status.textContent = "";
    success.hidden = true;
    form.hidden = false;
    dialog.showModal();
    requestAnimationFrame(() => {
      form.querySelector("input")?.focus();
    });
  };

  waitlistCtas.forEach((button) => button.addEventListener("click", showForm));
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Complete each field to continue.";
      form.querySelector(":invalid")?.focus();
      return;
    }

    form.hidden = true;
    success.hidden = false;
  });
})();
