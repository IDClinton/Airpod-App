const signupForm = document.getElementById("signupForm");
const signupError = document.getElementById("signupError");

if (localStorage.getItem("currentUser")) {
  window.location.href = "index.html";
}

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!email || !password) {
    signupError.innerText = "All fields are required.";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some(user => user.email === email);

  if (userExists) {
    signupError.innerText = "User already exists.";
    return;
  }

  users.push({ email, password });

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", email);

  window.location.href = "index.html";
});