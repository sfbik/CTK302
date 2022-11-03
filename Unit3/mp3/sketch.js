let cars = [] ;
let state = 0;
let timer = 0;
var frogPos = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);

  // Spawn objects

  for (let i = 0 ; i < 40 ; i++) {
    cars.push(new Car()) ;
  }
  
  // initialize the "frog position" vector
  frogPos = createVector(width/2, height-80);
 
}

function draw() {
  
  switch(state) {
    case 0:
      background(100);
      fill("white");
      text("click to start", width/2, height/2);
      break;
      
    case 1:
      game();
      timer++;
      if (timer > 5*60) {
        timer = 0;
        state = 3;
      }
      break;
      
    case 2:
      background(100);
      fill("white");
      text("you win!", width/2, height/2);
      break;
      
    case 3:
      background(100);
      fill("white");
      text("you lost!", width/2, height/2);
      break;
  }
  
}

function mouseReleased() {
  switch(state) {
    case 0:
      state = 1; //go to game
      break;
      
    case 2: //win state
      resetTheGame();
      state = 0;
      break;
      
    case 3: //lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background("white");

  // operate on every car
   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
     
     // collision detection
     if ((cars[i].pos.dist(frogPos)) < 30) {
       cars.splice(i,1);
     }
     
   }
  
  // add a "frog"
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(48, 128) ;
  }
  // methods

  display() {
 
    // this can be text, images, or shapes
    fill(this.r, this.g, this.b, this.o); 
    rect(this.pos.x, this.pos.y, this.size, 25);
 
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
