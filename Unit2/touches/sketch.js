let numberOfTouches ;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/cat2.jpg");
  i2 = loadImage("assets/cat1.jpg");
  i3 = loadImage("assets/evil.jpg");
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text('The screen is now ' + numberOfTouches + '% dirtier.', 200, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("Please keep your fingers off the screen.", 200, 22) ; 
      break ;
      
      case 1: 
      text("what did I just say", 5, 22) ; 
      image(i1, width/2, height/2, 200, 200);
      break ;
      
      case 2:
      text("I'm serious stop touching the screen", 200, 22) ; 
      image(i2, width/2, height/2, 200, 200);
      break ;
      
      case 3:
      text("Alright cops have been called you got 5 minutes", 200, 22) ; 
      image(i3, width/2, height/2, 200, 200);
      break ;
    
      
  }
}