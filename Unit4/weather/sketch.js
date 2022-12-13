// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let i1, i2;
let f1;

function setup() {
  createCanvas(800, 400);

  imageMode(CENTER);
  textAlign(screenLeft);

  i1 = loadImage("assets/sky.jpg");
  i2 = loadImage("assets/cloud.png");
  f1 = loadFont("assets/monofonto.otf");

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Orlando,FL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=2ab3fd961cc8c4aacb1786ddb79e8da5" ;

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

      fill("white");
      stroke('black');
      textFont(f1, 20);
      text("What is the weather in " + weather.name + "?", 20, 40);
      text("windspeed is " + windspeed, 20, 60);
      text("temp is " + temperature, 20, 80);
      text("temp feels like " + feelslike, 20, 100);

      // cloud
      fill("white");
      stroke('black');
      image(i2, x, 300, 200, 100);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width+100) x = -100;

      break;
  }
}
