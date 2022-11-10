var mic;
var vol = 0;

let f1;

function setup() {
  createCanvas(400, 400);
  f1 = loadFont("assets/kart.ttf");
  noStroke();

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();
}

function draw() {
  background("black");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // text on the screen for debugging
  fill('white');
  textFont(f1, 17);
  text(
    "AUDIOIN NEEDS YOUR PERMISSION TO WORK!\nCLICK TO ALLOW.\nMY VOLUME IS   " +
      vol.toFixed(3),
    10,
    60
  );
  rect(0, 200, 400, 50);

  // this moves the box
  //  x = vol*200 ;
  fill('orange');
  x = map(vol, 0, 1, 0, width);
  rect(x, 200, 50, 50);
  
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
