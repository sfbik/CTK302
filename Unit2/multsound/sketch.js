let state = -1;
let s1, s2, s3;

function preload() {
  s1 = loadSound("assets/learn2learn.mp3");
  s2 = loadSound("assets/max1080.mp3");
  s3 = loadSound("assets/weightless.mp3");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  background(100);

  switch(state) {
    case -1:
      background('white');
      fill('black');
      textSize(15);
      text("Click to Begin.", 250, 250);
      break;

    case 0:
      background('green');
      fill('white');
      textSize(15);
      text("NOW PLAYING:", 250, 220);
      textSize(20);
      text("Satin Sheets - Learn 2 Learn", 250, 250);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 1:
      background('black');
      fill('white');
      textSize(15);
      text("NOW PLAYING:", 250, 220);
      textSize(20);
      text("MAX1080 - Kate", 250, 250);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;

    case 2:
      background('purple');
      fill('white');
      textSize(15);
      text("NOW PLAYING:", 250, 220);
      textSize(20);
      text("Satin Sheets - Weightless", 250, 250);
      if (!s3.isPlaying()) {
        s3.play();
      }
      break;
  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();

  state++;
  if (state > 2) {
    state = 0;
  }
}

function touchStarted() {
  getAudioContext().resume();
}