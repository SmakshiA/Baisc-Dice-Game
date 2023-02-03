var randomNum = Math.floor(Math.random() * 6) + 1 ;
var randomdice = randomNum+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdice);

var randomNum2 = Math.floor(Math.random() * 6) + 1 ;
var randomdice2 = randomNum2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomdice2);

if(randomNum>randomNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(randomNum<randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML = "TIE";
}