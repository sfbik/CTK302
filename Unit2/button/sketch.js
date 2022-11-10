let state = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {


  
  switch(state) {
    case 0:
      background('green');
      fill('white');
      rect(250, 250, 100, 100);
      fill('black');
      textSize(16);
      text("Click Me!", 250, 250);
      break;

    case 1:
      background('blue');
      fill('white');
      rect(250, 250, 100, 100);
      fill('black');
      textSize(16);
      text("Click Me!", 250, 250);
      break;
  }
  

}

function mouseReleased() {
  
  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
    state++;
    if (state > 1)
    state = 0;
  }
}