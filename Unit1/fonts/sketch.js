let f1, f2, f3;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/LEDLIGHT.otf");
  f2 = loadFont("assets/Linebeam.ttf");
  f3 = loadFont("assets/neuropol.otf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48);
  text("weird fonts", width/2, 100);
  textFont(f2, 48);
  text("are really", width/2, 250);
  textFont(f3, 48);
  text("cool!", width/2, 400);
}
