let song;
let playIcon;
let pauseIcon;
let mainFont;
let subFont;
let timeStamp;

let bx;
let by;
let alignLeft;
let alignRight;
let small = 15;
let boxSize = small;
let big =  25;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let opacity = .7;
let opacityBoi = true;
let fadeAway = false;

let aboveSongTitle;


function preload(){

  mainFont = loadFont('fonts/modeNine.ttf')
  subFont = loadFont('fonts/hacked.ttf')
  playIcon = loadImage('images/icons/playIcon.png');
  pauseIcon = loadImage('images/icons/pauseIcon.png')
  song = loadSound('sounds/fm.mp3');

}

function setup() {

  alignLeft = windowWidth*.06896;
  alightRight = windowWidth*.931;
  bx = width / 2.0;
  by = windowHeight*.84;

  aboveSongTitle = windowHeight*(2/3)

  rectMode(RADIUS);
  strokeWeight(2);
  createCanvas(windowWidth, windowHeight);


}

// function circleMove(){
//   map(timeStamp, 0, song.duration(), 0, 100, true)
//   if(song.isPlaying){
//     timeStamp++
//
//   }
// }


function draw() {


// if(fadeAway){
// opacity = 0;
// }else{
//   opacity = .7
// }
//   fill(255,255,255,opacity)
//   rect(0,0, 50, 50);


  if(opacityBoi == true){

    background(0,0,0);

    fadeAway = false;

    fill(128);
    rect(windowWidth*.5, windowHeight*.84, windowWidth*.44, 3, 10);


    if (
      mouseX > bx - boxSize &&
      mouseX < bx + boxSize &&
      mouseY > by - boxSize &&
      mouseY < by + boxSize
    ) {
      overBox = true;
      if (!locked) {
        stroke(255);
      }
    } else {
      overBox = false;
    }

    fill(255,255,255);
    ellipse(bx, by, boxSize, boxSize);


    textFont(mainFont);
    textSize(windowWidth/10)
    fill(255, 255, 255);
    text("feed me", windowWidth*.05, windowHeight*.8-(windowWidth/15));

    fill(128,128,128);
    textFont(subFont);
    textSize(windowWidth/20)
    fill(128, 128, 128)
    text("pink phantom", windowWidth*.07, windowHeight*.8);

    if(song.isPlaying()){
      image(pauseIcon, (windowWidth/2)-50, windowHeight*.85, 100, 100);
    }else{
      image(playIcon, (windowWidth/2)-50, windowHeight*.85, 100, 100);
    }

  }else{
    clear();
    background(0,0,0,0)
    fadeAway = true;
  }

}


function mousePressed() {
console.log(mouseX, mouseY)

if(mouseY<aboveSongTitle){
  if(opacityBoi == true){
    opacityBoi = false;
  }else{
    opacityBoi = true;
  }
}

  if (overBox) {
    boxSize = big;
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;


  if(
    mouseX>314 &&
    mouseX<414 &&
    mouseY>615 &&
    mouseY<717){

  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause();
  } else{
    song.play();
  }
}

}

function mouseDragged() {
  if(bx>=50 && bx<=675){

  if (locked) {
    bx = mouseX - xOffset;
  }
}else{
  locked = false;
  if(mouseX<50){
    bx = 50;
  }
  if(mouseX>675){
    bx = 675;
  }
}
}

function mouseReleased() {
  locked = false;
  boxSize = small;
}
