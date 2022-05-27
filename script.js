var wrap = document.getElementById("wrap")
var btns = document.querySelectorAll(".color-btn");

window.onload = function () {

// Добавление клеток в переменнную wrap

    for (let hcell = 0; hcell < 26; hcell++) {
        for (let wcell = 0; wcell < 60; wcell++) {
            var div = document.createElement("span")
            div.className = "cell"
            wrap.appendChild(div)
        }
        var br = document.createElement("br")
        wrap.appendChild(br)
    }

// Присваивание цвета фона кнопкам

    for (let btn = 0; btn < btns.length; btn++) {
        btns[btn].style.backgroundColor = btns[btn].value;
    }
}

// Бесконечные цвета
var mouse = {
    down: false
}
var val

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-btn")) {
        val = e.target.value
    }
});

// Рисование

document.addEventListener("mousedown", mouseD)
document.addEventListener("mouseup", mouseU)

function mouseD() {
    document.addEventListener("mousemove", moMove)
}
function mouseU() {
    document.removeEventListener("mousemove", moMove)
}

function moMove(ev) {
    if (ev.target.classList.contains("cell")) {
        if (!val) return
        ev.target.style.backgroundColor = val
        if (val !== "white") {
            ev.target.style.outline = "none"
        } else ev.target.style.outline = "1px solid black"
    }
}

// Стрелочка

var deg = 0
var arrow = document.querySelector(".arrow-btn")
var panel = document.querySelector(".panel")
arrow.onclick = function () {
    deg += 180
    this.style.transform = "rotate(" + deg + "deg)"
    if (deg % 360 !== 0) {
        panel.style.transform = "translateY(0px)"
    } else {
        panel.style.transform = "translateY(90px)"
    }
}