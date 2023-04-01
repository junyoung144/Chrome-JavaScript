const imges = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImg = imges[Math.floor(Math.random() * imges.length)];

const divBox = document.createElement("div");
const bgImage = document.createElement("img");

divBox.classList.add("img-box");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(divBox);
divBox.appendChild(bgImage);
