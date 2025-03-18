let train = document.getElementById("train");
let position = 0;
let animation;

function startTrain() {
    clearInterval(animation);
    animation = setInterval(() => {
        if (position < window.innerWidth - 200) {
            position += 5; // Move train to the right
            train.style.left = position + "px";
        } else {
            clearInterval(animation);
        }
    }, 50); // Speed of animation
}

function stopTrain() {
    clearInterval(animation);
}
