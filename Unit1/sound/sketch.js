let cover;
let song;

function preload() {
  song = loadSound("assets/newworldredux.mp3");
}


function setup() {
  createCanvas(500, 500);
  cover = loadImage("assets/thunderandrain.png");
  imageMode(CENTER);
  textAlign(CENTER);

  song.play();
}

function draw() {
  image(cover, width/2, height/2, 400, 400);
  text("Song: Ahero - New World Redux (Unreleased)", width/2, 30);


}

function mouseReleased() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}
