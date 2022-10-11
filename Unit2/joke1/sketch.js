let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state) {
    case 0:
      background('green');
      fill('white');
      textSize(16);
      text("There are three types of people in this world...", 250, 250);
      break;

    case 1:
      background('blue');
      fill('white');
      textSize(16);
      text("...those who can count and those who can't.", 250, 250);
      break;
  }

}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}