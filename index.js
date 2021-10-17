let song1 = document.getElementById('music1');
let song2 = document.getElementById('music2');
let song3 = document.getElementById('music3');
let song4 = document.getElementById('music4');


function firstSongOn() {
    song1.play();
}
function firstSongPause() {
    song1.pause()
}
function firstSongStop() {
    song1.pause();
    song1.currentTime = 0;
}

function secondSongOn() {
    song2.play();
}
function secondSongPause() {
    song2.pause()
}
function secondSongStop() {
    song2.pause();
    song2.currentTime = 0;
}

function thirdSongOn() {
    song3.play();
}
function thirdSongPause() {
    song3.pause()
}
function thirdSongStop() {
    song3.pause();
    song3.currentTime = 0;
}

function fourthSongOn() {
    song4.play();
}
function fourthSongPause() {
    song4.pause()
}
function fourthSongStop() {
    song4.pause();
    song4.currentTime = 0;
}