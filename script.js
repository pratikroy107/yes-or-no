const yes = document.getElementsByClassName("yes-button");
const no = document.getElementsByClassName("no-button");
var text = document.getElementsByClassName("heading");

//console.log(yes);
yes[0].addEventListener('click', function () {
    text[0].textContent = "i knew it! :)";
    //console.log(text);
    yes[0].style.display = "none";
    no[0].style.display = "none";
});

//left = 10-60
//right = 10-60
//top = 0-30
//let l = Math.floor((Math.random() * 10) + 1);
no[0].addEventListener('click', function() {
    no[0].style.marginLeft = "100px";
    console.log(Math.floor((Math.random() * 60) + 10));
    /*no[0].style.marginRight = "100px";
    no[0].style.marginTop = "40px";
    no[0].style.marginBottom = "40px";*/
});