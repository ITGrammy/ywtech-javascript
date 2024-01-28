function defaultTheme () {
    document.querySelector("body").className = "";
    console.log("remove all classes from the body");
}

function oceanTheme () {
    document.querySelector("body").className = "ocean";
    console.log("apply ocean class to the body");
}

function desertTheme () {
    document.querySelector("body").className = "desert";
    console.log("apply desert class to the body");
}

function highContrastTheme () {
    document.querySelector("body").className = "high-contrast";
    console.log("apply high-contrast class to the body");
} 