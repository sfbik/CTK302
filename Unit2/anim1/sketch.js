let x = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/theory.otf");
  textAlign(CENTER);
}

function draw() {
  background(100);
  fill('yellow');
  textFont(f1, 56);
  text("Epic", x, 200, 100, 100);
  x += 5;
  if (x > 550) {
    x = -100;
  }
}
