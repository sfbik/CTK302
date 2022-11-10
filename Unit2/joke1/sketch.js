let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background("grey");
      text("why did the ctx", width/2, height/2);
      break;
    
    case 1:
      background("blue");
      text("because", width/2, height/2);
      break;
  }

  rect(width/2, height/2, 100, 100);

}

function mouseReleased() {
  if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    state++;
    if (state > 1) state = 0;
  }
}

