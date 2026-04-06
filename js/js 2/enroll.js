
// let document.getElementById("auth-container").addEventListener("enroll", (e) => {
//     e.preventDefault();

   let cource = document.getElementById("course").value;
    let logoutBtn = document.getElementById("logout-btn");
    let enroll = document.getElementById("enroll");

    localStorage.setItem("course", course);

    enroll.onclick = ()=>{    
    // Simple demo validation
    if (course === " ") {
        alert("Please select your interest tutorial!");
        return;
    } 
    else {
        alert(`you are select {course}.there fore please send payments by paypal or bank account`);
        window.prompt("please enter the birr by paypal")
        window.location.href = "page2signUp.html";
    }

}

function account(){
let bankAccount=document.getElementById(bankAccount);
}