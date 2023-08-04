var btn = document.querySelector(".no");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener("touchstart", function () {
        const parOuImparX = Math.floor(Math.random() * 2) === 1 ? -1 : 1
        const parOuImparY = Math.floor(Math.random() * 2) === 1 ? -1 : 1
        const positionX = Math.floor(Math.random() * 250)*parOuImparX
        const positionY = Math.floor(Math.random() * 250)*parOuImparY
        btn.style.transform = `translate(${positionX}px,${positionY}px)`;
        btn.style.transition = "all 1s ease";
    });

    btn.addEventListener("touchend", function () {
        const parOuImparX = Math.floor(Math.random() * 2) === 1 ? -1 : 1
        const parOuImparY = Math.floor(Math.random() * 2) === 1 ? -1 : 1
        const positionX = Math.floor(Math.random() * 250)*parOuImparX
        const positionY = Math.floor(Math.random() * 150)*parOuImparY
        btn.style.transform = `translate(${positionX}px,${positionY}px)`;
        btn.style.transition = "all 1s ease";
    });
} else {
    btn.addEventListener("mouseover", function () {
        const parOuImparX = Math.floor(Math.random() * 2) === 1 ? -1 : 1
        const parOuImparY = Math.floor(Math.random() * 2) === 1 ? -1 : 1
        const positionX = Math.floor(Math.random() * 250)*parOuImparX
        const positionY = Math.floor(Math.random() * 150)*parOuImparY
        btn.style.transform = `translate(${positionX}px,${positionY}px)`;
        btn.style.transition = "all 1s ease";
    });
}

function not() {
    alert("O Naruto pode ser um pouco duro às vezes... Mas no fim ele vai fazer o certo , volte lá e clique no sim com força! :/")
}  

function yes() {
    window.open('https://www.youtube.com/watch?v=vcS7MXjupgk&ab_channel=AnaCastela', '_blank');
}