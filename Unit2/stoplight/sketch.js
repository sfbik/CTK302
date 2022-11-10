let state = 0;
let timer = 0;
let x = -40;
let vel = 8;

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  
  background(100);
  fill('yellow');
  rect(width/2, height/2, 200, 600);

  fill('blue');
  rect(x, 750, 75, 20);
  x = x + vel;
  if (x > 840) {
    x = -40;
  }

  
  switch (state) {

    case 0: //red
      text("0", 100, 100);
      fill('gray');
      ellipse(width/2, height/2, 150, 150);
      fill('red');
      ellipse(width/2, height/2-200, 150, 150);
      fill('gray');
      ellipse(width/2, height/2+200, 150, 150);

      vel = 0;
      break;

    case 1: //green
      text("1", 100, 100);
      fill('gray');
      ellipse(width/2, height/2, 150, 150);
      fill('gray');
      ellipse(width/2, height/2-200, 150, 150);
      fill('green');
      ellipse(width/2, height/2+200, 150, 150);

      vel = 8;
      break;

    case 2: //yellow
      text("2", 100, 100);
      fill('yellow');
      ellipse(width/2, height/2, 150, 150);
      fill('gray');
      ellipse(width/2, height/2-200, 150, 150);
      fill('gray');
      ellipse(width/2, height/2+200, 150, 150);
      
      vel = 4;
      break;

  }


  timer = timer + 1;
  if (timer > 100) {
    timer = 0;
    state++;
  if (state > 2) state = 0;
  }


}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
