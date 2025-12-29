import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// CADASTRO
window.register = function (e) {
  e.preventDefault();
  const email = user.value;
  const password = pass.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(err => alert(err.message));
};

// LOGIN
window.login = function (e) {
  e.preventDefault();
  const email = user.value;
  const password = pass.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = "dashboard.html")
    .catch(() => alert("Login inválido"));
};

// PROTEÇÃO
window.protect = function () {
  onAuthStateChanged(auth, user => {
    if (!user) window.location.href = "login.html";
    else document.getElementById("username").innerText = user.email;
  });
};

// LOGOUT
window.logout = function () {
  signOut(auth).then(() => window.location.href = "login.html");
};
