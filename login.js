const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

if (localStorage.getItem("currentUser")) {
  window.location.href = "index.html";
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const validUser = users.find(
    user => user.email === email && user.password === password
  );

  if (!validUser) {
    loginError.innerText = "Invalid credentials.";
    return;
  }

  localStorage.setItem("currentUser", email);
  window.location.href = "index.html";
});