// // if already logged in, redirect to home page
// if (localStorage.getItem("currentUser")) {
//   location.href = "./home.html";
// }

// let form = document.getElementById("form");
// console.log(form);

// form.addEventListener("submit", (e) => {
//   console.log(1);
  
//   e.preventDefault();

//   let username = document.getElementById("username").value.trim();
//   let email = document.getElementById("email").value.trim();
//   let password = document.getElementById("password").value;

//   let lowerCaseLetter = /[a-z]/g;
//   let upperCaseLetter = /[A-Z]/g;
//   let numbers = /[0-9]/g;

//   if (username.length < 6) {
//     alert("Username must be at least 6 characters");
//   } else if (password.length < 8) {
//     alert("Password must be at least 8 characters");
//   } else if (!password.match(lowerCaseLetter)) {
//     alert("Password must  contain a lowercase letter");
//   } else if (!password.match(upperCaseLetter)) {
//     alert("Password must  contain a uppercase letter");
//   } else if (!password.match(numbers)) {
//     alert("Password must  contain a number or special character");
//   } else {
//     if (localStorage.getItem("users")) {
//       let users = JSON.parse(localStorage.getItem("users"));

//       users.push({
//         email,
//         password,
//         username,
//       });

//       localStorage.setItem("users", JSON.stringify(users));
//     } else {
//       localStorage.setItem(
//         "users",
//         JSON.stringify([
//           {
//             email,
//             password,
//             username,
//           },
//         ])
//       );
//     }

//     alert("User created successfully, please login");
//     location.href = "./login.html";
//   }
// });
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const check = document.getElementById("check");
const showHide = document.getElementById("showHide");

// Ẩn/hiện mật khẩu
showHide.addEventListener("click", (e) => {
  e.preventDefault();
  password.type = password.type === "password" ? "text" : "password";
});

// Hàm kiểm tra email hợp lệ
function validateEmail(mail) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

// Kiểm tra mật khẩu mạnh
function validatePassword(pass) {
  return (
    pass.length >= 8 &&
    /[A-Z]/.test(pass) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(pass)
  );
}

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!username.value.trim() || !email.value.trim() || !password.value.trim()) {
    alert("⚠️ Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (!validateEmail(email.value)) {
    alert("⚠️ Email không hợp lệ!");
    return;
  }

  if (!validatePassword(password.value)) {
    alert("⚠️ Mật khẩu phải >=8 ký tự, có chữ in hoa và ký tự đặc biệt!");
    return;
  }

  if (!check.checked) {
    alert("⚠️ Bạn phải đồng ý với điều khoản!");
    return;
  }

  alert("✅ Đăng ký thành công!");
});
