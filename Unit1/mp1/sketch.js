let song;

function preload() {
  song = loadSound("assets/nights.mp3");
}

function setup() {
  createCanvas(500, 500);
  background(0, 160, 255);
  angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER);

  song.play();
  
}

function draw() {

  if (mouseIsPressed) {
    //When Clicked

    //background scene
    background(0, 160, 255);
    text("This is Harold. Harold loves to dance, but he can't do it by himself! Click to make him dance!", width/2, 20)
    text("He grew up on the dance floor and brings one in his pocket wherever he goes.", width/2, 50)
    text("He's not a superhero or a good samaritan. He just loves to dance and avoid conflict!", width/2, 80)
    fill(100, 200, 100);
    rect(width/2, 480, 550, 100)

    fill(random(10, 255), random(10, 255), random(10, 255));
    rect(width/2, 490, 100, 100)


    //arms
    fill(255);
    push();
    translate(width/2 + 45, 300);
    rotate(180);
    rect(0, 0, 80, 5);
    pop();

    push();
    translate(width/2 - 45, 300);
    rotate(-180);
    rect(0, 0, 80, 5);
    pop();

    //legs
    push();
    translate(width/2 + 45, 420);
    rotate(230);
    rect(0, 0, 80, 5);
    pop();

    push();
    translate(width/2 - 45, 420);
    rotate(-230);
    rect(0, 0, 80, 5);
    pop();

    //torso
    fill(255, 0, 0);
    rect(width/2, 350, 50, 100);

    //head
    fill(255);
    ellipse(width/2, 270, 80);

    //facial features
    fill(0);
    ellipse(width/2 - 20, 270, 10);
    ellipse(width/2 + 20, 270, 10);
    arc(width/2, 280, 50, 50, 0, 180, PIE);

  } else {
    //Not Clicked


    //background scene
    background(0, 160, 255);
    text("This is Harold. Harold loves to dance, but he can't do it by himself! Click to make him dance!", width/2, 20)
    text("He grew up on the dance floor and brings one in his pocket wherever he goes.", width/2, 50)
    text("He's not a superhero or a good samaritan. He just loves to dance and avoid conflict!", width/2, 80)
    fill(100, 200, 100);
    rect(width/2, 480, 550, 100)

    fill("blue");
    rect(width/2, 490, 100, 100)


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
  
  
}
