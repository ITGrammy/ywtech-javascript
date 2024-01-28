function makeRed () {
    console.log("turn first div red");
    document.querySelector("#section1").style.background="red";
}

function makeBlue () {
    console.log("turn 2nd div blue");
    document.querySelector("#section2").style.background="blue";
}

function makePink () {
    console.log("turn 3rd div pink");
    document.querySelector("#section3").style.background="pink";
}

function makeOrange () {
    console.log("turn 4th div orange");
    document.querySelector("#section4").style.background="orange";
}

function doReset () {
    console.log("reset everything");
    document.querySelector("#section1").style.background="white";
    document.querySelector("#section2").style.background="white";
    document.querySelector("#section3").style.background="white";
    document.querySelector("#section4").style.background="white";
}

