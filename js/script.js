// Replace Name
function replaceName() {
    let name = prompt("Hello, what do you want to be called?", "");
    document.getElementById("name").innerHTML = name;
}


replaceName();

// Image Banner
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-slideshow");
    if (n > x.length) {slideIndex = 1}
    else if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() =>{
    plusDivs(1);
}, 2000);  

// Current Time
const now = new Date();
const dateTimeString = now.toLocaleString();

// Form Result
function validateForm(){
    const name = document.forms["message-form"]["nama-input"].value;
    const birthDate = document.forms["message-form"]["tanggal-input"].value;
    const gender = document.forms["message-form"]["kelamin"].value;
    const message = document.forms["message-form"]["message"].value;

    setSenderUI(name, birthDate, gender, message);

    return false;
}

function setSenderUI(name, birthDate, gender, message){
    document.getElementById("waktu-sekarang").innerHTML = now;
    document.getElementById("sender-nama-input").innerHTML = name;
    document.getElementById("sender-tanggal-input").innerHTML = birthDate;
    document.getElementById("sender-kelamin").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = message;
}
