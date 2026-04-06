 document.getElementById("loginForm").addEventListener("submit", (e)=>{
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if(username === " " && password === " "){
            alert("Please fill in all fields.");
            return;
        }

        // Simple demo validation
        else if(username === "admin" && password === "1234"){
            alert("Login Successful!");
        } else {
            alert("Invalid Username or Password!");
        }
    });
    let bot = document.getElementById("toggleDarkMode");
    bot.onclick =  () => {

document.body.classList.toggle("dark");

}

