(() => {
  const form = document.querySelector("[data-waitlist]");
  const status = document.querySelector("[data-form-status]");
  if (!form || !status) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(form).get("email")?.toString().trim();
    const input = form.querySelector("input[type='email']");

    if (!email || !input.checkValidity()) {
      status.textContent = "Enter a valid email to continue.";
      input.focus();
      return;
    }

    status.textContent = "Opening your email app to confirm your place…";
    const subject = encodeURIComponent("Join the Voltaire Research waitlist");
    const body = encodeURIComponent(`Please add ${email} to the Voltaire Research waitlist.`);
    window.location.href = `mailto:krushnadash@utexas.edu?subject=${subject}&body=${body}`;
  });
})();
