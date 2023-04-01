const imges = ["1.PNG", "2.PNG", "3.PNG"];

const chosenImg = imges[Math.floor(Math.random() * imges.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);
 