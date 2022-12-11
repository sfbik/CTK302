let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
<<<<<<< HEAD
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

=======

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
>>>>>>> b500fa1a4045a4a8856001c8283cdc97dcf464e7
