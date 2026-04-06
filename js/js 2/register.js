// GET USERS
function getUsers(){
return JSON.parse(localStorage.getItem("users")) || [];
}

// SAVE USERS
function saveUsers(users){
localStorage.setItem("users", JSON.stringify(users));
}

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("regEmail").value;
    let username = document.getElementById("username").value;
    let country = document.getElementById("country").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let gender = document.getElementById("gender").value;
    let submit = document.getElementById("submit").value;
    
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
     localStorage.setItem("username", username);
    localStorage.setItem("regEmail", regEmail);
    localStorage.setItem("password", password);
    localStorage.setItem("country", country);
    localStorage.setItem("phonenumber", phonenumber);
    localStorage.setItem("gender", gender);
    
    let users = getUsers();

users.push({firstname,lastname,username,regEmail,password,country,phonenumber,gender});

saveUsers(users);

 alert("Account  Created Successful!");
        window.location.href = "/login.html";
}

    // Simple demo validation
    if (username === "username" && password === "password") {
        alert("Create account Successful!");
        window.location.href = "page1login.html";
        window.location.href = "page1login.html";
    } else {
        alert("Invalid Username or Password! please enter the correct info");
        window.location.href = "page2signUp.html";
        window.location.href = "page2signUp.html";
    };
/* ---------- LOGOUT ---------- */

function logout(){
localStorage.removeItem("loggedUser")
window.location="login.html";
}

// REGISTER
function register(){


let password = document.getElementById("regPassword").value;

if(!validEmail(email)){
alert("Invalid Email");
return;
}

let users = getUsers();

let exists = users.find(u => u.email === email);

if(exists){
alert("User already exists");
return;
}

users.push({email,password});

saveUsers(users);

alert("Registration Successful");

window.location.href="index.html";
}
