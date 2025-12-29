document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderQuickAccess();
  renderNews();
  renderEvents();
  renderTourism();
});

// ===== COMPONENTES (substituem React) =====

function renderQuickAccess() {
  document.getElementById("quick-access").innerHTML = `
    <h2>Acesso Rápido</h2>
    <ul>
      <li>Prefeitura</li>
      <li>Eventos</li>
      <li>Notícias</li>
    </ul>
  `;
}

function renderNews() {
  const news = [
    { title: "Nova praça inaugurada", date: "2025-01-10" },
    { title: "Festival cultural", date: "2025-01-08" }
  ];

  document.getElementById("news").innerHTML = `
    <h2>Notícias</h2>
    ${news.map(n => `<p><strong>${n.title}</strong> – ${n.date}</p>`).join("")}
  `;
}

function renderEvents() {
  const events = [
    { name: "Aniversário da cidade", date: "2025-02-15" },
    { name: "Feira agrícola", date: "2025-03-01" }
  ];

  document.getElementById("events").innerHTML = `
    <h2>Próximos Eventos</h2>
    ${events.map(e => `<p>${e.name} – ${e.date}</p>`).join("")}
  `;
}

function renderTourism() {
  const spots = [
    "Cachoeira Municipal",
    "Praça Central",
    "Mirante da Cidade"
  ];

  document.getElementById("tourism").innerHTML = `
    <h2>Pontos Turísticos</h2>
    <ul>${spots.map(s => `<li>${s}</li>`).join("")}</ul>
  `;
}
