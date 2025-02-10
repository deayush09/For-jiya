function moveRandomEl(elm) {
elm.style.position = "absolute";
elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
elm.style.transform = "scale(" + (Math.random() * 0.5 + 0.5) + ")";
}

const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("mouseenter", function (e) {
moveRandomEl(e.target);
setTimeout(() => {
moveRandomEl(e.target);
}, 500);
});
