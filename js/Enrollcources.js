
let menus = document.getElementById("navMenus");
menus.onclick = () => {
    let menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
}

var swiper = new Swiper(".mySwiper", {

    loop: true,
    autoplay: {
        delay: 2000,              // 2 seconds
        disableOnInteraction: false,
    },
});


let cart = JSON.parse(localStorage.getItem("cart")) || [];

const enrollBtns1 = document.querySelectorAll(".enroll-btn1");
const enrollBtns2 = document.querySelectorAll(".enroll-btn2");
const enrollBtns3 = document.querySelectorAll(".enroll-btn3");
// const enrollBtns4 = document.querySelectorAll(".enroll-btn4");
// const enrollBtns5 = document.querySelectorAll(".enroll-btn5");

const cartValues = document.querySelectorAll(".cart-value");
const cartIcons = document.querySelectorAll(".cart-icon");

const cartItems = document.getElementById("cartItems");
const cartBox = document.getElementById("cartBox");
const totalPrice = document.getElementById("totalPrice");

function addToCart(buttons) {

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const courseName = btn.dataset.course;
            const price = Number(btn.dataset.price);

            cart.push({
                name: courseName,
                price: price
            });

            updateCart();

        });

    });

}

addToCart(enrollBtns1);
addToCart(enrollBtns2);
addToCart(enrollBtns3);
// ddToCart(enrollBtns4);
// addToCart(enrollBtns5);

function updateCart() {

    cartValues.forEach(value => {
        value.textContent = cart.length;
    });

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const li = document.createElement("li");

        li.innerHTML = `
${item.name} - $${item.price}
<button onclick="removeItem(${index})">❌</button>
`;

        cartItems.appendChild(li);

    });

    totalPrice.textContent = total;

    localStorage.setItem("cart", JSON.stringify(cart));

}

function removeItem(index) {

    cart.splice(index, 1);
    updateCart();

}

cartIcons.forEach(icon => {

    icon.addEventListener("click", () => {
        if (cartBox.style.display === "block") {
            cartBox.style.display = "none";
        } else {
            cartBox.style.display = "block";
        }
    });

});

updateCart();

let about = document.getElementById("about");
let abouts = document.querySelector("#abouts");

about.addEventListener("click", ()=>{
    main.textContent = abouts;
})