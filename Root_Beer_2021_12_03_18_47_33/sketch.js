// This is supposed to represent bubbles in a can of root beer
// Bubbles will randomly change size, speed, starting position, etc to seem like new bubbles
// The red bubble is controllable.
// Click left/right to make it smaller/bigger.
// Click up/down to make it faster/slower until it respawns

function setup() {
  createCanvas(400,400);
  // starting x and y for each bubble
  y = 400+random(-400,150);
  y2 = 400+random(-400,150);
  y3 = 400+random(-400,150);
  y4 = 400+random(-400,150);
  y5 = 400+random(-400,150);
  x = random(0,width/5);
  x2 = random(width/5,2*width/5);
  x3 = random(2*width/5,3*width/5);
  x4 = random(3*width/5,4*width/5);
  x5 = random(4*width/5,width);
  // starting bubble speed
  ySpeed = random(0.2,1.2);
  y2Speed = random(0.2,1.2);
  y3Speed = random(0.2,1.2);
  y4Speed = random(0.2,1.2);
  y5Speed = random(0.2,1.2);
  // starting bubble radius
  c1r = random(10,40);
  c2r = random(10,40);
  c3r = random(10,40);
  c4r = random(10,40);
  c5r = random(10,40);
}

function draw() {
  background('#382307');
  // Make bubbles rise according to speed
  y -= ySpeed;
  y2 -= y2Speed;
  y3 -= y3Speed;
  y4 -= y4Speed;
  y5 -= y5Speed;
  // make bubbles jiggle
  // Jiggling inspired by https://p5js.org/examples/hello-p5-animation.html
  x += .5*random(-1,1)
  x2 += .5*random(-1,1)
  x3 += .5*random(-1,1)
  x4 += .5*random(-1,1)
  x5 += .5*random(-1,1)
  // Keep bubbles on screen
  x = constrain(x,0,x);
  x2 = constrain(x2,0,x2);
  x3 = constrain(x3,0,x3);
  x4 = constrain(x4,0,x4);
  x5 = constrain(x5,0,x5);
  // Reset bubbles, give new speed and radius, adjust position
  if (y<1-c1r){
    y = height+random(0,150);
    x += random(-50,50);
    ySpeed = random(0.2,1.2);
    c1r = random(10,40);
  }
  if (y2<1-c2r){
    y2 = height+random(0,150);
    x2 += random(-50,50);
    y2Speed = random(0.2,1.2);
    c2r = random(10,40);
  }
  if (y3<1-c3r){
    y3 = height+random(0,150);
    x3 += random(-50,50);
    y3Speed = random(0.2,1.2);
    c3r = random(10,40);
  }
  if (y4<1-c4r){
    y4 = height+random(0,150);
    x4 += random(-50,50);
    y4Speed = random(0.2,1.2);
    c4r = random(10,40);
  }
  if (y5<1-c5r){
    y5 = height+random(0,150);
    x5 += random(-50,50);
    y5Speed = random(0.2,1.2);
    c5r = random(10,40);
  }
  // create bubbles
  circle(x,y,c1r);
  circle(x2,y2,c2r);
  push();
    fill('#FA1200')
    circle(x3,y3,c3r);
  pop();
  circle(x4,y4,c4r);
  circle(x5,y5,c5r);
}

function mousePressed(){
  // adjust speed based on where you click on the screen
  speedAdjust = floor((height/200)-round(mouseY/100));
  y3Speed += speedAdjust;
  y3Speed = constrain(y3Speed, 0.1, y3Speed);
  console.log("speed change", speedAdjust);
  // adjust radius based on where you click on the screen
  c3r += ceil(((mouseX)-(width/2))/50);
  c3r = constrain(c3r, 10, c3r);
  console.log("radius change",ceil(((mouseX)-(width/2))/50));
}