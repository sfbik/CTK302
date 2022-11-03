let cars = [];
let i1;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/lighter.png");

  //for (let i = 0; i < 20; i++) {
  //  cars.push(new Car());
  //}
  noStroke();
}

function draw() {

  background('grey');
  image(i1, 207, 360, 100, 100);

  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
  
}




class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2, height-144);  // initialize your attributes here
    this.vel = createVector(random(-.8, .8), random(-10, -5));
    this.r = 255;
    this.g = random(0, 69);
    this.b = 0;
    this.a = random(150, 200);

  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel) ;
    this.a = this.a - 5;
    //if (this.pos.x > width) this.pos.x = 0;
    //if (this.pos.x < 0) this.pos.x = width;
    //if (this.pos.x > height) this.pos.y = 0;
    //if (this.pos.x < 0) this.pos.y = height;

  }
  
}