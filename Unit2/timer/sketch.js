let state = 0;
let timer = 0;

let i1, i2, i3;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/image1.jpg");
  i2 = loadImage("assets/image2.jpg");
  i3 = loadImage("assets/image3.jpg");
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(220);

  switch(state) {
    case 0:
      background("red");
      fill('white'); 
      text("A picture of a club in Bloomington.", 250, 70);
      image(i1, width/2, height/2, 300, 300);
      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
      background("green");
      fill('white'); 
      text("Turns out Bloomington runs on burger energy.", 250, 430);
      image(i2, width/2, height/2, 300, 300);
      timer++;
      if (timer > 2 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      background("blue");
      fill('white'); 
      text("An old book I saw in a thrift store on how to get a ham radio license.", 250, 70);
      image(i3, width/2, height/2, 300, 300);
      timer++;
      if (timer > 5 * 60) {
        timer = 0;
        state = 0;
      }
      break;
  }
}
