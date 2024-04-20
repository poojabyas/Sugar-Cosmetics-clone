let authContainer = document.querySelector("#auth");
let login = document.querySelector("#login");
let signup = document.querySelector("#signup");
let loggedStatus = JSON.parse(localStorage.getItem("loggedStatus"))

if(loggedStatus){
    login.innerHTML = `${loggedStatus.username}`
}

login.addEventListener("click", function(){
    window.location.href = "login.html";
});

signup.addEventListener("click", function(){
    window.location.href = "signup.html";
});


// home.js

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


let slideTimer = setInterval(function() {
plusSlides(1);
}, 1000); 