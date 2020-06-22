
function randomPodcast(){


var randomNumber1 = Math.floor(Math.random()* 3) +1;

var randomDiceImage = "pod" + randomNumber1 + ".png";

var randomImageSource = "images-podcasts/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

}
