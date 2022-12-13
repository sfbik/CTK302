// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let i1, i2;
let f1;
let x1;
let song;

var xwingPos = 0;

function preload() {
  song = loadSound("assets/starwars.mp3");
}

function setup() {
  createCanvas(800, 400);

  song.play();

  imageMode(CENTER);
  textAlign(CENTER);

  i1 = loadImage("assets/nightsky.png");
  i2 = loadImage("assets/asteroid1.png");
  f1 = loadFont("assets/monofonto.otf");

  x1 = loadImage("assets/xwing1.png");
  xwingPos = createVector(width/2, height/2);



  // HERE is the call to get the weather. We build the string first.

  let myCityString = "https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=f37bd010b6c7b5dd9397e498e137cfa4" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  feelslike = weather.main.feels_like;

}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(200);
      image(i1, width/2, height/2, width, height);

      game();

      fill("gray");
      stroke('black');
      textFont(f1, 20);
      text("What is the weather in Space? (" + weather.name + ")", 400, 40);
      text("windspeed is " + windspeed, 400, 60);
      text("temp is " + temperature, 400, 80);
      text("temp feels like " + feelslike, 400, 100);

      // cloud
      fill("white");
      stroke('black');
      image(i2, x, 300, 100, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      
      if (x > width+100) x = -100;

      break;
  }
}

function game() {
  image(x1, xwingPos.x, xwingPos.y, 140, 140);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    xwingPos.x -= 5;
    x1 = loadImage("assets/xwing1.png");
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xwingPos.x += 5;
    x1 = loadImage("assets/xwingforward.png");
  } 
  if (keyIsDown(UP_ARROW)) {
    xwingPos.y -= 5;
    x1 = loadImage("assets/xwingup.png");
  }
  if (keyIsDown(DOWN_ARROW)) {
    xwingPos.y += 5;
    x1 = loadImage("assets/xwingdown.png");
  }
  if (!keyIsDown(DOWN_ARROW) && !keyIsDown(UP_ARROW) && !keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW)) {
    x1 = loadImage("assets/xwing1.png");
  }
}

function touchStarted() {
  getAudioContext().resume();
}
