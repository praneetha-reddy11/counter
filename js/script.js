var countDown = document.getElementById('countdown');
var bgImage = document.getElementById('bg-image');

var initialCountdown = parseInt(countDown.innerHTML);
var maxCountdown = initialCountdown;

var interval = setInterval(function () {
    initialCountdown = initialCountdown > 0 ? initialCountdown - 1 : 0;
    countDown.innerHTML = initialCountdown;

    
    var imagePath = initialCountdown % 2 === 0 ? './images/bg1.jpg' : './images/bg2.jpg';
    bgImage.src = imagePath;

    
    let scale = initialCountdown / maxCountdown;
    scale = Math.max(scale, 0.2); 

    
    bgImage.style.transform = `scale(${scale})`;
    countDown.style.fontSize = `${scale * 70}px`;

    if (initialCountdown <= 0) {
        clearInterval(interval);
    }
}, 1000);