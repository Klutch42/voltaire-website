(() => {
  const form = document.querySelector("[data-waitlist]");
  const status = document.querySelector("[data-form-status]");
  const openButton = document.querySelector("[data-open-waitlist]");
  const success = document.querySelector("[data-waitlist-success]");
  const waitlistPanel = document.querySelector("#waitlist");
  const waitlistCtas = document.querySelectorAll("[data-waitlist-cta]");
  if (!form || !status || !openButton || !success || !waitlistPanel) return;

  const showForm = () => {
    waitlistPanel.hidden = false;
    openButton.hidden = true;
    openButton.setAttribute("aria-expanded", "true");
    success.hidden = true;
    form.hidden = false;
    requestAnimationFrame(() => {
      waitlistPanel.scrollIntoView({ behavior: "smooth", block: "center" });
      form.querySelector("input")?.focus({ preventScroll: true });
    });
  };

  openButton.addEventListener("click", showForm);
  waitlistCtas.forEach((button) => button.addEventListener("click", showForm));

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
