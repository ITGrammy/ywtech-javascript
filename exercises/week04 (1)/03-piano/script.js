
function playNote(note) {
    const folder = document.querySelector("#folder").value;

    const audio = document.querySelector("audio");
    audio.src = "scales/" + folder + '/' + note + ".mp3";
    audio.play();
}