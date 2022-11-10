let cars = [] ;
let state = 0;
let timer = 0;
var frogPos = 0;

let cari;
let phi;
let f1;
let s1, s2, s3;

let score = 0;


function preload() {
  s1 = loadSound("assets/game.mp3");
  s2 = loadSound("assets/win.mp3");
  s3 = loadSound("assets/lose.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER);
  rectMode(CENTER);

  text("Potholes hit:" + score, width/2, height/2);
  
  cari = loadImage("assets/whitebmw.png");
  phi = loadImage("assets/pothole.png");
  f1 = loadFont("assets/max.ttf");

  // Spawn objects

  for (let i = 0 ; i < 40 ; i++) {
    cars.push(new Car()) ;
  }
  
  // initialize the "frog position" vector
  frogPos = createVector(width/2, height/2);
 
}

function draw() {

  
  
  switch(state) {
    case 0:
      background(0);
      fill("red");
      textFont(f1, 40);
      text("CHICAGO DRIVING SIM 2k22", width/2, height/2-50);

      fill("white");
      textFont(f1, 25);
      text("Avoid the potholes at all costs!", width/2, height/2-30);
      textFont(f1, 20);
      text("(click to start)", width/2, height/2+50);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;
      
    case 1:
      game();
      
      timer++;
      if (timer > 5*60) {
        timer = 0;
        state = 2;
        s1.stop();
        s2.stop();
        s3.stop();
      }
      break;
      
    case 2:
      background(0);
      fill("white");
      text("you win! ", width/2, height/2);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;
      
    case 3:
      background(0);
      fill("white");
      text("you lost! better luck next time...", width/2, height/2);
      if (!s3.isPlaying()) {
        s3.play();
      }
      break;
  }
  
}

function mouseReleased() {
  s1.stop();
    s2.stop();
    s3.stop();
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
  background(50);

  // operate on every car
   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
     
     // collision detection
     if ((cars[i].pos.dist(frogPos)) < 50) {
       cars.splice(i,1);
     }
     
   }

   if (cars.length < 38) {
    state = 3;
    
   }
  
  // add a "frog"
  image(cari, frogPos.x, frogPos.y, 180, 80);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  for (let i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height/2);
  timer = 0;
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
    this.pos = createVector(random(100, 200), random(100, 400)); // initialize your attributes here
    this.velocity = createVector(random(-6, 6), random(-6, 6));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = random(60, 80) ;
  }
  // methods

  display() {
 
    // this can be text, images, or shapes
    image(phi, this.pos.x, this.pos.y, this.size, 60);
 
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function touchStarted() {
  getAudioContext().resume();
}
