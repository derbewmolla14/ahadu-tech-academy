


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



//enroll

//    let cource = document.getElementById("course").value;
    // let logoutBtn = document.getElementById("logout-btn");
    let enroll = document.getElementById("enroll");


    localStorage.setItem("course", course);



    enroll.onclick = ()=>{

let course = document.getElementById("course").value;

if(course === ""){
alert("Please select Your interest tutorial");
return;
}
 else {
        alert(`you are select ${course}.there fore please send payments by paypal or bank account`);
        window.prompt("please enter the birr by paypal");
        window.location.href = "csscourse.html";
    }
let email = localStorage.getItem("loggedUser");

let enrollments = JSON.parse(localStorage.getItem("enrollments")) || [];

enrollments.push({
email: email,
course: course
});

localStorage.setItem("enrollments", JSON.stringify(enrollments));

document.getElementById("message").innerText = "Successfully Enrolled in " + course;

}





function account(){
let bankAccount=document.getElementById(bankAccount);
}



/* Load Profile */

if(window.location.pathname.includes("profile.html")){

let email = localStorage.getItem("loggedUser");

let user = JSON.parse(localStorage.getItem(email));

document.getElementById("userName").innerText = "Username: " + user.username;

document.getElementById("userEmail").innerText = "Email: " + user.email;

document.getElementById("userPhone").innerText = "Phone: " + user.phone;

}

/* Logout */
let logout = document.getElementById("logout");

logout.onclick= ()=>{

localStorage.removeItem("loggedUser");

window.location.href="html/login.html";

}


var swiper = new Swiper(".mySwiper", {

  loop: true,

  autoplay: {
    delay: 2000,              // 2 seconds
    disableOnInteraction: false,
  },

  //pagination: {
    //el: ".swiper-pagination",
    //clickable: true,
  //}

});

        var swiper = new Swiper(".mySwiper", {
            loop: true,
            autoplay: {
                delay: 3000, // 3000ms = 3 seconds
                disableOnInteraction: false, // continue autoplay after clicking
            },
            navigation: {
                nextEl: "#next",
                prevEl: "#prev",
            },
        });