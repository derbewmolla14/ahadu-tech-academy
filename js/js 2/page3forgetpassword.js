// document.getElementById("Email").addEventListener("submit", (e)=>{
//     e.preventDefault();
  

//     let userData = {
//         username: document.getElementById("username").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("phonenumber").value,
//     };


//     // Save as JSON
//     localStorage.setItem("user", JSON.stringify(userData));

//     window.location.href = "page4getcode.html";
//     window.location.href = "page4getcode.html";
// });
let otpCode;

/* Send phone verification code */
function sendCode(){

otpCode = Math.floor(1000 + Math.random() * 9000);

alert("Your OTP Code: " + otpCode);

}