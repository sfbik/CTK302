let timer = 0;
let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {

  switch(state) {
    case 0:
      background('red');
      fill('black');
      textSize(16);
      text("Why couldn't the junior pirate go to the movies?", 250, 250);
      break;

    case 1:
      background('yellow');
      fill('black');
      textSize(16);
      text("Because it was rated ARR!", 250, 250);
      break;
  }

  timer++;
  if (timer > 3 * 60) {
    timer = 0;
    state++;
    if (state > 1) {
      state = 0;
    }
  }

}
