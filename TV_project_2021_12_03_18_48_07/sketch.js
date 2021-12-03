var power= 0;
var channel;
var cbuttonx,cbuttony;
var cbuttonrad = 40;
var cfill = 255;
var rfill = 255;
var rbuttonx,rbuttony;
var rbuttonw = 40;
var rbuttonh = 30;
var channel = false;
var circX;
var circSpeed = 3;
var textX,textY,textXspeed,textYspeed;

function setup() {
  createCanvas(800, 600);
  circX = 60;
  textX = width/2;
  textY = height/2;
  textXspeed = random(-3,3);
  textYspeed = random(-3,3);
}

function draw() {
  if (75 < textX && textX < width-246) {
        textX += textXspeed;
      } else {
        textXspeed = -textXspeed;
        textX += textXspeed;
      }
      if (85 < textY && textY < height-60) {
        textY += textYspeed;
      } else {
        textYspeed = -textYspeed;
        textY += textYspeed;
      }
  background('#804120');
  rectMode(CENTER);
  
  cbuttonx = width-35;
  cbuttony = 100,  
  push();
  fill(cfill);
  circle(cbuttonx,cbuttony,cbuttonrad)
  pop();
  
  rbuttonx = width-35;
  rbuttony=150;
  push();
  fill(rfill);
  rect(rbuttonx,rbuttony,rbuttonw,rbuttonh);
  pop();
  
  cfill = 255;
  rfill = 255;
  
  push();
  fill(0);
  text('PWR',cbuttonx-13,cbuttony+4)
  text('CHA',rbuttonx-12,rbuttony+4)
  pop();
  
  if (!power){
    //blank screen
    push();
    fill(0);
    rect(width/2,height/2,width-150,height-120,10,10,10,10);
    pop();
  } else {
    //screen on
    fill('#C4E6FF');
    rect(width/2,height/2,width-150,height-120,10,10,10,10);
    if (channel){
      //bouncing text
      push();
      textSize(32);
      fill(255, 0, 0);
      text("WOOO TV!!", textX, textY);
      pop();
    } else {
      push();
      fill(0);
      textSize(32);
      text('This channel is no longer available.', 150, height/2);
      text('We apologize.', 300, height/2-100);
      text('Have a good day.', 275, height/2+100);
      pop();
    }
  }
  
  // mouseover circle button
  if (mouseX > cbuttonx-cbuttonrad/2 && mouseY < cbuttony+cbuttonrad/2 && mouseX < cbuttonx+cbuttonrad/2 && mouseY > cbuttony-cbuttonrad/2){
    cfill=200;
  }
  // mouseover rectangle button
  if (mouseX > rbuttonx-rbuttonw/2 && mouseY < rbuttony+rbuttonh/2 && mouseX < rbuttonx+rbuttonw/2 && mouseY > rbuttony-rbuttonh/2){
    rfill=200;
  }
}

function mouseClicked(){
  // toggle power if power button is clicked
  if (mouseX > cbuttonx-cbuttonrad/2 && mouseY < cbuttony+cbuttonrad/2 && mouseX < cbuttonx+cbuttonrad/2 && mouseY > cbuttony-cbuttonrad/2){
    power = !power;
  }
  // toggle channel if channel button is clicked
  if (mouseX > rbuttonx-rbuttonw/2 && mouseY < rbuttony+rbuttonh/2 && mouseX < rbuttonx+rbuttonw/2 && mouseY > rbuttony-rbuttonh/2 && power){
    channel = !channel;
  }
}