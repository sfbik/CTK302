function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);
  fill('black');
  textSize(56);
  rect("Box", x, 100, 100, 100);
  x += 5;
  if (x > width) {
    x = 0;
  }
}
