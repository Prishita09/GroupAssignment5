let users = JSON.parse(localStorage.getItem("bloodDonorUsers")) || [];

function showSignupForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "block";
}

function showLoginForm() {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = users.find((u) => u.email === email);

  if (!user) return showAlert("Account not found", "danger");
  if (user.password !== password) return showAlert("Wrong password", "danger");

  showAlert("Login successful! Redirecting...", "success");
  
  // Redirect to blood availability page
  setTimeout(() => (window.location.href = "availability.html"), 1500);
  return true;
}

function validateSignup(event) {
  event.preventDefault();
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (users.some((u) => u.email === email)) {
    return showAlert("Email already registered", "danger");
  }

  users.push({ name, email, password });
  localStorage.setItem("bloodDonorUsers", JSON.stringify(users));

  showAlert("Registration successful! Please login.", "success");
  showLoginForm();
  return true;
}

function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;

  const cardBody = document.querySelector(".card-body");
  cardBody.prepend(alertDiv);

  setTimeout(() => alertDiv.remove(), 3000);
}
