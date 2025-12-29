// ===== CONFIGURAÇÃO =====
const LOGIN_PAGE = "login.html";
const DASHBOARD_PAGE = "dashboard.html";

// ===== INJETAR CSS AUTOMATICAMENTE =====
(function loadStyle() {
  if (!document.querySelector("link[data-auto-style]")) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/style.css";
    link.setAttribute("data-auto-style", "true");
    document.head.appendChild(link);
  }
})();

// ===== VERIFICAR LOGIN =====
function isLogged() {
  return localStorage.getItem("demolay_logged") === "true";
}

// ===== PROTEGER PÁGINAS =====
function protectPage() {
  const page = location.pathname.split("/").pop();

  if (page === "dashboard.html" && !isLogged()) {
    window.location.href = LOGIN_PAGE;
  }

  if (page === "login.html" && isLogged()) {
    window.location.href = DASHBOARD_PAGE;
  }
}

// ===== LOGIN =====
function login(event) {
  event.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  // LOGIN SIMPLES (exemplo)
  if (user === "demolay" && pass === "123456") {
    localStorage.setItem("demolay_logged", "true");
    localStorage.setItem("demolay_user", user);
    window.location.href = DASHBOARD_PAGE;
  } else {
    alert("Usuário ou senha inválidos");
  }
}

// ===== LOGOUT =====
function logout() {
  localStorage.clear();
  window.location.href = LOGIN_PAGE;
}

// ===== EXECUTAR AO CARREGAR =====
document.addEventListener("DOMContentLoaded", protectPage);
