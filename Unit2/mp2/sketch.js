let state = 0;

let mX;
let mY;

var mic;
var vol = 0;

let p1, p2, p3, bg;

function setup() {
  createCanvas(800, 800);

  getAudioContext().resume();

  imageMode(CENTER);
  p1 = loadImage("assets/phone1.png");
  p2 = loadImage("assets/phone2.png");
  p3 = loadImage("assets/phone3.png");
  bg = loadImage("assets/gradient1.png");

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  background(100);
  image(bg, width/2, height/2, 800, 800);

  vol = mic.getLevel();
  //text("Volume: " + vol.toFixed(3), 100, 50);


  //text("Mouse Position - X: " + mX + ", Y: " + mY, 100, 75);
  mX = mouseX;
  mY = mouseY;


  
  switch (state) {

    case 0:
      image(p1, width/2, height/2, 300, 550);
      if (vol.toFixed(3) > 0.150) {
        state = 1;
      }
      break;

    case 1:
      image(p2, width/2, height/2, 300, 550);
      break;

    case 2:
      image(p3, width/2, height/2, 300, 550);
      break;

  }
}

function mouseReleased() {
  if (mouseX > 250 && mouseX < 550 && mouseY > 125 && mouseY < 675) {
    if (state > 0) {
      state++;
      if (state > 2) state = 2;
    }
  }
}