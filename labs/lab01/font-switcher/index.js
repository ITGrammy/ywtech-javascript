/** 
 * This is the comment notation
 * To make bigger:
 * 1. change "header h1's"  font-size to 3em
 * 2. change "".content" font-size to 2em
 * We will write code so when we click function makeBigger this happens
 * 
 * Put selector you are targeting inside the quotes of the 
 * document.queryselector("thing targeting/selecting id, class or name 
 * in these quotes")
 * To change something's style use .style.name of the thing you want to
 * change 
 * In CSS the thing is name(hyphen)name
 * 
 * 
 * 
 * To make smaller:
 * 1. change "header h1's"  font-size to 1.5em
 * 2. change "".content" font-size to 1em
 * 
 * /**These Functions are the JavaScript we run
 * Then 2nd Function we have to attach our buttons to the event click
 * To attach the Function we wanna run to the button click; add "onclick"
 * to the opening button tag then the = sign quotation marks and the
 * name of the function you wanna change and open parenthesis
 * Now this says when I click the button run this function I just wrote
 * Still haven't built the code just added event handlers
 * Adding this way we can inspect live Server
 * 
 * 
 */





function makeBigger() {

    document.querySelector("h1").style.fontSize = "3em"; 
    document.querySelector(".content").style.fontSize = "2em";
    //console.log("make bigger");
}

function makeSmaller() {

    document.querySelector("h1").style.fontSize = "1.5em"; 
    document.querySelector(".content").style.fontSize = "1em";
    //console.log("make smaller");
}
