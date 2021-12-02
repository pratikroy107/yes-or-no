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

no[0].addEventListener('click', function() {
    let l = Math.floor((Math.random() * 60) + 10);
    no[0].style.marginLeft = `${l}px`;
    //console.log(Math.floor((Math.random() * 60) + 10));

    let r = Math.floor((Math.random() * 60) + 10);
    no[0].style.marginRight = `${r}px`;

    let t = Math.floor((Math.random() * 30) + 1);
    no[0].style.marginTop = `${t}px`;
});