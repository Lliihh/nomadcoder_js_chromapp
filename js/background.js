const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
]

const randomImage = images[Math.floor(Math.random()*images.length)];

const createImg = document.createElement("img");
createImg.src = `img/${randomImage}`;

document.body.appendChild(createImg);


