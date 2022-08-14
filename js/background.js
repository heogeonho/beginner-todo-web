const body = document.querySelector("body");

const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

body.style.background = `url('img/${chosenImg}') no-repeat 0 0`;
body.style.backgroundPosition = "bottom";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "repeat";
