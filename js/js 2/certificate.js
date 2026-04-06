
// GET USERS
function getUsers(){
return JSON.parse(localStorage.getItem("users")) || [];
}

// SAVE USERS
function saveUsers(users){
localStorage.setItem("users", JSON.stringify(users));
}
/* ---------- CERTIFICATE ---------- */

function generateCertificate(course){

localStorage.setItem("certificateCourse",course)

window.location="certificate.html"

}

window.onload=function(){

let student=document.getElementById("studentName")
let course=document.getElementById("courseName")

if(student){

student.innerText=localStorage.getItem("loggedUser")
course.innerText=localStorage.getItem("certificateCourse")

}

}

/* ---------- DOWNLOAD CERTIFICATE ---------- */

function downloadCertificate(){

window.print()

}