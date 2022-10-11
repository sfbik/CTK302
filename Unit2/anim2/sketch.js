let x = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(255);
  translate(x, 0);

  avatar();
  x += 5;
  if (x > width) {
    x = -300;
  }

}

function avatar() {
  //arms
  fill(255);
  push();
  translate(width/2 + 40, 320);
  rotate(70);
  rect(0, 0, 80, 5);
  pop();

  push();
  translate(width/2 - 40, 320);
  rotate(-70);
  rect(0, 0, 80, 5);
  pop();

  //legs
  rect(width/2 + 22, 420, 5, 80);
  rect(width/2 - 22, 420, 5, 80);

  //torso
  fill(255, 0, 0);
  rect(width/2, 330, 50, 100);

  //head
  fill(255);
  ellipse(width/2, 250, 80);

  //facial features
  fill(0);
  ellipse(width/2 - 20, 250, 10);
  ellipse(width/2 + 20, 250, 10);
  arc(width/2, 260, 50, 50, 0, 180, PIE);
    
}