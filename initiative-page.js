(() => {
  const slug = document.body.dataset.initiative;
  const item = window.VOLTAIRE_INITIATIVES?.find((initiative) => initiative.slug === slug);
  if (!item) return;

  const root = document.body.dataset.root || "../../";
  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  document.title = `${item.name} — Voltaire Research`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", item.overview);
  setText("[data-initiative-meta]", `${item.id} / ${item.domain.toUpperCase()}`);
  setText("[data-initiative-name]", item.name);
  setText("[data-initiative-subtitle]", item.subtitle);
  setText("[data-initiative-overview]", item.overview);
  setText("[data-initiative-disciplines]", item.disciplines);
  setText("[data-initiative-status]", item.status);
  setText("[data-initiative-note]", item.note);

  const image = document.querySelector("[data-initiative-image]");
  if (image) {
    image.src = `${root}${item.image}`;
    image.alt = item.imageAlt;
  }

  const renderList = (selector, values) => {
    const list = document.querySelector(selector);
    if (list) list.innerHTML = values.map((value) => `<li>${value}</li>`).join("");
  };
  renderList("[data-directions]", item.directions);
  renderList("[data-experiments]", item.experiments);

  const related = document.querySelector("[data-related]");
  if (related) {
    related.innerHTML = window.VOLTAIRE_INITIATIVES
      .filter((initiative) => initiative.slug !== slug)
      .map((initiative) => `<a href="../${initiative.slug}/"><span>${initiative.id}</span>${initiative.name}</a>`)
      .join("");
  }

  if (slug === "overture") document.querySelector("[data-overture-access]")?.removeAttribute("hidden");
})();
