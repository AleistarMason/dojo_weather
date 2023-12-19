function kill(element) {
    document.querySelector(element).remove()
}
var Temps = [24, 18, 27, 19, 21, 16, 26, 21]
var Celcius = true

function converter() {
    if (Celcius == true) {
        for (var i = 0; i < Temps.length; i++ ) {
            Temps[i] = (Temps[i] * 1.8) + 32
            Celcius = false
        }
    }
    else {
        for (var i = 0; i < Temps.length; i++ ) {
            Temps[i] = (Temps[i] -32) * (5/9)
            Celcius = true
        }
    }
}

function tempAdjust() {
    converter()
    document.querySelector("h4.high.today").innerText = Math.trunc(Temps[0])+"\u00B0"
    document.querySelector("h4.low.today").innerText = Math.trunc(Temps[1])+"\u00B0"
    document.querySelector("h4.high.tomorrow").innerText = Math.trunc(Temps[2])+"\u00B0"
    document.querySelector("h4.low.tomorrow").innerText = Math.trunc(Temps[3])+"\u00B0"
    document.querySelector("h4.high.friday").innerText = Math.trunc(Temps[4])+"\u00B0"
    document.querySelector("h4.low.friday").innerText = Math.trunc(Temps[5])+"\u00B0"
    document.querySelector("h4.high.saturday").innerText = Math.trunc(Temps[6])+"\u00B0"
    document.querySelector("h4.low.saturday").innerText = Math.trunc(Temps[7])+"\u00B0"
}