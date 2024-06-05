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
