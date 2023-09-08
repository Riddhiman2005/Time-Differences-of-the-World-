
zone = "Latitude";
deg = 0;

setInterval(function () {
    document.getElementById("earth").style.backgroundPositionX = document.getElementById("spinnerX").value + "%";
    document.getElementById("earth").style.backgroundPositionY = document.getElementById("spinnerY").value + "%";

    if (document.getElementById("spinnerX").value > 35) {
        deg = (Math.round((document.getElementById("spinnerX").value - 35) * 3.83))
    } else if (document.getElementById("spinnerX").value < 35) {
        deg = ((Math.round((document.getElementById("spinnerX").value - 35) * 4.2857)))
    } else {
        deg = (Math.round((document.getElementById("spinnerX").value - 35) * 3.83))
    }

    document.getElementById("degs").innerHTML = "Degrees: " + deg + "°";

    if (deg / 15 >= 0) {
        document.getElementById("tc").innerHTML = "Time Change: " + Math.floor(deg / 15) + " Hours " + Math.floor((((deg / 15) - Math.floor(deg / 15)).toFixed(2)) * 300 / 5) + " Minutes";
    } else {
        document.getElementById("tc").innerHTML = "Time Change: " + Math.ceil(deg / 15) + " Hours " + Math.ceil((((deg / 15) - Math.ceil(deg / 15)).toFixed(2)) * 300 / 5) + " Minutes";
    }

    if (document.getElementById("spinnerX").value > 35) {
        document.getElementById("hor").innerHTML = " East"
    } else if (document.getElementById("spinnerX").value < 35) {
        document.getElementById("hor").innerHTML = " West"
    } else if (document.getElementById("spinnerX").value === "35") {
        document.getElementById("hor").innerHTML = ""
    }

    if (document.getElementById("spinnerY").value > 50) {
        document.getElementById("ver").innerHTML = "South "
    } else if (document.getElementById("spinnerY").value < 50) {
        document.getElementById("ver").innerHTML = "North "
    } else if (document.getElementById("spinnerY").value === "50") {
        document.getElementById("ver").innerHTML = ""
    }

    if ((document.getElementById("spinnerY").value > 50 || document.getElementById("spinnerY").value < 50) && (document.getElementById("spinnerX").value > 35 || document.getElementById("spinnerX").value < 35)) {
        document.getElementById("mid").innerHTML = " - "
    } else {
        document.getElementById("mid").innerHTML = ""
    }

    if (document.getElementById("spinnerY").value === "50" && document.getElementById("spinnerX").value === "35") {
        document.getElementById("org").innerHTML = " At Origin"
    } else {
        document.getElementById("org").innerHTML = ""
    }
}, 100);

function god() {
    document.getElementById("spinnerY").style.marginLeft = document.getElementById("earth").offsetLeft + document.getElementById("earth").offsetWidth + document.getElementById("spinnerX").offsetWidth / 2
    document.getElementById("spinnerY").style.marginTop = document.getElementById("earth").offsetTop - document.getElementById("spinnerX").offsetWidth / 8
    document.getElementById("spinnerX").style.marginLeft = document.getElementById("earth").offsetLeft + document.getElementById("earth").offsetWidth / 2 - document.getElementById("spinnerX").offsetWidth / 2
    document.getElementById("spinnerX").style.marginTop = document.getElementById("earth").offsetTop + document.getElementById("earth").offsetHeight / 1.75
}
