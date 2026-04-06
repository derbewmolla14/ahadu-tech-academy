document.getElementById("Code").addEventListener("submit", (e) => {
    e.preventDefault();



    let username = document.getElementById("username").value;
    let newpassword = document.getElementById("newpassword").value;
    let comfurmpassword = document.getElementById("confurmpassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("newpassword", newpassword);
    localStorage.setItem("confurmpassword", confurmpassword);
    // Save as JSON
   
    if (newpassword ==="1234" && confurmpassword==="1234") {
        alert("Create new account Successful!");
        window.location.href = "page1login.html";
        window.location.href = "page1login.html";
    } else {
        alert("Invalid Username or Password! please enter the correct info");
        window.location.href = "page5newpassword.html";
        window.location.href = "page5newpassword.html";
    }

});
