document.getElementById("Code").addEventListener("get", (e) => {
    e.preventDefault();

    let otp = document.getElementById("otp").value;

    localStorage.setItem("otp", otp);

if(otp != otpCode){

alert("Invalid OTP");
return;

}
    // Simple demo validation
    if (otp === " ") {
        alert("Please enter your new password and username!");
        window.location.href = "page5newpassword.html";
        window.location.href = "page5newpassword.html";
    } else {
        alert("Invalid Code! please enter the correct code");
        window.location.href = "page4getcode.html";
        window.location.href = "page4getcode.html";
    }
});

// /* Register User */

// function register(){

// let username = document.getElementById("username").value;
// let email = document.getElementById("email").value;
// let phone = document.getElementById("phone").value;
// let password = document.getElementById("password").value;
// let otp = document.getElementById("otp").value;

// if(otp != otpCode){

// alert("Invalid OTP");
// return;

// }

// let user = {

// username: username,
// email: email,
// phone: phone,
// password: password

// };

// localStorage.setItem(email, JSON.stringify(user));

// alert("Registration Successful");

// window.location.href="login.html";

// }

