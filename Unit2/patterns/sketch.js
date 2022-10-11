let state = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background(0, 200, 250);
      for (let j = 0; j <= height; j += 34) {
        for (let i = 0; i <= width; i += 34) {
          fill(0);
          rect(i, j, 20, 20);
        }
      }
      for (let j = 0; j <= height; j += 35) {
        for (let i = 0; i <= width; i += 35) {
          fill(255, 0, 100);
          rect(i, j, 20, 20);
        }
      }
      break;

    case 1:
      background("green");
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 35) {
          fill(255, 255, 100);
          rect(i, j, 30, 20);
        }
      }
      break;

    case 2:
      background("gray");
      for (let j = 0; j <= height; j += 15) {
        for (let i = 0; i <= width; i += 65) {
          fill('blue');
          rect(i, j, 50, 10, 15, 15, 15, 15);
        }
      }
      break;

    case 3:
      background("brown");
      for (let j = 0; j <= height; j += 65) {
        for (let i = 0; i <= width; i += 65) {
          fill(255, 248, 220, 35);
          rect(i, j, 60, 60);
        }
      }
      break;
  
    case 4:
      background("white");
      for (let j = 0; j <= height; j += 15) {
        for (let i = 0; i <= width; i += 15) {
          fill(random(220, 255));
          ellipse(i, j, 20, 20);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
