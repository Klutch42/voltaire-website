(() => {
  const STORAGE_KEY = "voltaireWaitlistEntries";
  const form = document.querySelector("[data-waitlist]");
  const status = document.querySelector("[data-form-status]");
  const openButton = document.querySelector("[data-open-waitlist]");
  const success = document.querySelector("[data-waitlist-success]");
  const addAnotherButton = document.querySelector("[data-add-another]");
  const exportButton = document.querySelector("[data-export-waitlist]");
  if (!form || !status || !openButton || !success || !exportButton) return;

  const readEntries = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
      return [];
    }
  };

  const refreshExportButton = () => {
    exportButton.hidden = readEntries().length === 0;
  };

  const showForm = () => {
    openButton.hidden = true;
    openButton.setAttribute("aria-expanded", "true");
    success.hidden = true;
    form.hidden = false;
    form.querySelector("input")?.focus();
  };

  openButton.addEventListener("click", showForm);
  addAnotherButton?.addEventListener("click", () => {
    form.reset();
    status.textContent = "";
    showForm();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = new FormData(form);
    const firstName = fields.get("firstName")?.toString().trim();
    const lastName = fields.get("lastName")?.toString().trim();
    const email = fields.get("email")?.toString().trim().toLowerCase();
    const role = fields.get("role")?.toString();

    if (!form.checkValidity() || !firstName || !lastName || !email || !role) {
      status.textContent = "Complete each field to continue.";
      form.querySelector(":invalid")?.focus();
      return;
    }

    const entries = readEntries();
    const existingIndex = entries.findIndex((entry) => entry.email === email);
    const entry = {
      id: crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      firstName,
      lastName,
      email,
      role,
      submittedAt: new Date().toISOString()
    };

    if (existingIndex >= 0) entries[existingIndex] = { ...entries[existingIndex], ...entry };
    else entries.push(entry);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    form.hidden = true;
    success.hidden = false;
    refreshExportButton();
  });

  exportButton.addEventListener("click", () => {
    const payload = JSON.stringify({ exportedAt: new Date().toISOString(), entries: readEntries() }, null, 2);
    const url = URL.createObjectURL(new Blob([payload], { type: "application/json" }));
    const download = document.createElement("a");
    download.href = url;
    download.download = `voltaire-waitlist-${new Date().toISOString().slice(0, 10)}.json`;
    download.click();
    URL.revokeObjectURL(url);
  });

  refreshExportButton();
})();
