const logoDVD = document.getElementById('dvd_logo');
let x = 0,
    y = 0,
    dx = "➡",
    dy = "↓";
setInterval(() => {
    logoDVD.style.left = `${dx === "➡" ? x++ : x--}px`
    logoDVD.style.top = `${dy === "↓" ? y++ : y--}px`
    dx = x < 0 ? "➡" : x > (window.innerWidth - logoDVD.clientWidth) ? "←" : dx
    dy = y < 0 ? "↓" : y > (window.innerHeight - logoDVD.clientHeight) ? "↑" : dy
}, 1);