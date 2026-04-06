
// GET USERS
function getUsers(){
return JSON.parse(localStorage.getItem("users")) || [];
}

// SAVE USERS
function saveUsers(users){
localStorage.setItem("users", JSON.stringify(users));
}

//send code
let otpCode;

/* Send phone verification code */
function sendCode(){

otpCode = Math.floor(1000 + Math.random() * 9000);

alert("Your OTP Code: " + otpCode);

}

/* Register User */

function register(){
 let firstname = document.getElementById("firstname").value;
 let lastname = document.getElementById("lastname").value;
 let password = document.getElementById("password").value;

 let username = document.getElementById("username").value;
 let country = document.getElementById("country").value;
 let images = document.getElementById("images").value;
 let gender = document.getElementById("gender").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let otp = document.getElementById("otp").value;

if(otp != otpCode){

alert("Invalid OTP");
return;

}

let user = {
firstname: firstname,
lastname: lastname,
password:password,
username:username,
country:country,
images:images,
gender:gender,
email: email,
phone: phone,
otp: otp
};

localStorage.setItem(email,username, JSON.stringify(user));
alert("Registration Successful");
window.location.href="login.html";

}
/* Login */

function login(){

let email = document.getElementById("loginEmail").value;
let password = document.getElementById("loginPassword").value;

let user = JSON.parse(localStorage.getItem(email));

if(user && user.password === password){

localStorage.setItem("loggedUser",email);

window.location.href="profile.html";
window.location.href="/profile.html";

}else{

alert("Invalid Login");

}


}



/* Reset Password */

function resetPassword(){

let email = document.getElementById("email2").value;
let newPass = document.getElementById("phone").value;
let user = JSON.parse(localStorage.getItem(email));

if(user){
user.password = newPass;
localStorage.setItem(email, JSON.stringify(user));
alert("Password Updated");
window.location.href="register.html";

}else{

alert("User not found");

}

}



// CERTEFICATE 

/* ---------- CERTIFICATE ---------- */

function generateCertificate(course){

localStorage.setItem("fullstackwebdevelopment",course)

window.location="certificate.html"

}

window.onload=function(){
let studentName = this.document.getElementById("studentName");
let student=document.getElementById("studentName");
let course=document.getElementById("courseName");

if(student){
student.innerText=localStorage.getItem("loggedUser");
course.innerText=localStorage.getItem("fullstackwebdevelopment");

}

}

/* ---------- DOWNLOAD CERTIFICATE ---------- */

function downloadCertificate(){

window.print()

}