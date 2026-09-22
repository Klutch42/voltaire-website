(() => {
  const form = document.querySelector("[data-waitlist]");
  const status = document.querySelector("[data-form-status]");
  const openButton = document.querySelector("[data-open-waitlist]");
  const success = document.querySelector("[data-waitlist-success]");
  if (!form || !status || !openButton || !success) return;

  const showForm = () => {
    openButton.hidden = true;
    openButton.setAttribute("aria-expanded", "true");
    success.hidden = true;
    form.hidden = false;
    form.querySelector("input")?.focus();
  };

  openButton.addEventListener("click", showForm);

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
