var bubbles = [];
let url = "";
let bubbleImage;

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
  
  let key = "1o18uKeDES1hubteas6nMOyyZNfT3z0fdm9lxvx5S4ho"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  bubbleImage = loadImage("assets/rocket1.png");

  createCanvas(600, 600);
  imageMode(CENTER);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Favorite color?"],
        data[i]["Favorite audio type?"],
        data[i]["Least favorite day of the week?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("white");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(color, audio, day) {
    // only the order of these parameters matters!
    this.color = color;
    this.audio = audio;
    this.day = day;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("black");
    noFill();
    image(bubbleImage, this.pos.x, this.pos.y+10, 140, 120);
    fill("black");
    text(
      this.day + "\n" + this.color + "\n" + this.audio,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ; 
    
  }
  
  
}
