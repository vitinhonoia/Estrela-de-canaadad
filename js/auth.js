function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// CADASTRO
function register(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const users = getUsers();
  if (users.find(u => u.user === user)) {
    alert("Usuário já existe");
    return;
  }

  users.push({ user, pass });
  saveUsers(users);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// LOGIN
function login(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const users = getUsers();
  const found = users.find(u => u.user === user && u.pass === pass);

  if (!found) {
    alert("Usuário ou senha inválidos");
    return;
  }

  localStorage.setItem("logged", "true");
  localStorage.setItem("currentUser", user);
  window.location.href = "dashboard.html";
}

// PROTEGER DASHBOARD
function protect() {
  if (localStorage.getItem("logged") !== "true") {
    window.location.href = "login.html";
  } else {
    document.getElementById("username").innerText =
      localStorage.getItem("currentUser");
  }
}

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
