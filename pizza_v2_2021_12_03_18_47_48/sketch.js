var clicks = 0;
var angle;
var r;
var step;
var textcolor = 255;

function setup() {
  createCanvas(800, 600);
  background(220);
  textXspeed = random(-2, 2);
  textYspeed = random(-2, 2);
  textX = random(-400, 300);
  textY = random(-275, 300);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  stroke("#996A48");
  fill(255, 0, 0);
  strokeWeight(40);
  circle(0, 0, 510);
  noStroke();
  fill("#FFF7AD");
  circle(0, 0, 450);
  if (clicks % 3 == 1) {
    stroke(0);
    strokeWeight(1);
    fill("#BE0000");
    // Points around a circle adjusted from https://editor.p5js.org/ftobon@heartofla.org/sketches/SkBy9XP97
    //Pepperonis!
    for (x = 0; x < 17; x++) {
      r = 175;
      step = TWO_PI / 16;
      var circx = r * sin(angle);
      var circy = r * cos(angle);
      circle(circx, circy, 75);
      angle = 0 + step * x;
    }
    for (x = 0; x < 9; x++) {
      r = 100;
      step = TWO_PI / 8;
      let circx = r * sin(angle);
      let circy = r * cos(angle);
      circle(circx, circy, 75);
      angle = 0 + step * x;
    }
    circle(0, 0, 75);
  } else if (clicks % 3 == 2) {
    //Margherita!
    stroke("#996A48");
    fill(255, 0, 0);
    strokeWeight(40);
    circle(0, 0, 510);
    noStroke();
    fill("#FFF7AD");
    for (x = 0; x < 8; x++) {
      r = 175;
      step = TWO_PI / 7;
      let circx = r * sin(angle);
      let circy = r * cos(angle);
      circle(circx, circy, 100);
      angle = 0 + step * x;
    }
    for (x = 0; x < 10; x++) {
      r = 100;
      step = TWO_PI / 9;
      let circx = r * sin(angle);
      let circy = r * cos(angle);
      circle(circx, circy, 80);
      angle = 0 + step * x;
    }
    circle(0, 0, 70);
    strokeWeight(5);
    stroke("#146622");
    fill("#146622");
    //Basil!
    strokeCap(ROUND);
    line(30, 30, 15, 15);
    ellipse(40, 30, 45, 10);
    line(-200, -74, -180, -83);
    ellipse(-200, -74, 30, 10);
    line(-173, 84, -160, 100);
    ellipse(-180, 80, 20, 5);
    line(45, -200, 60, -215);
    ellipse(62, -230, 7, 30);
    line(100, -30, 115, -45);
    ellipse(110, -45, 10, 30);
  }
  stroke(0);
  strokeWeight(1);
  line(-105, 255, 105, -255);
  line(255, -105, -255, 105);
  line(-255, -105, 255, 105);
  line(105, 255, -105, -255);
  //bouncing pizza text
  textSize(32);
  fill(textcolor, 0, 0);
  text("PIZZA", textX, textY);
  if (-401 < textX && textX < 310) {
    textX += textXspeed;
  } else {
    print("test");
    textXspeed = -textXspeed;
    textX += textXspeed;
  }
  if (-276 < textY && textY < 300) {
    textY += textYspeed;
  } else {
    textYspeed = -textYspeed;
    textY += textYspeed;
  }
}

function mouseClicked() {
  clicks++;
}

function keyPressed() {
  textcolor = millis() % 250;
}
