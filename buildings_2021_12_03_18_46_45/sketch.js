function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(40);
  fill(255)
  strokeJoin(MITER);
  strokeWeight(2);
  ellipse(325, 75, 100);
  push();
      noStroke();
      fill(40);
      ellipse(310,80,75)
  pop();
  push();
      strokeWeight(10);
      stroke(230);
      point(25,25);
      point(50,75);
      point(93,40)
      point(163,29)
      point(200,50)
      point(168,80)
      point(275,80);
  pop();
  push();
      noStroke();
      fill(100);
      ellipse(60, 100, 50);
      ellipse(75, 110, 50);
      ellipse(75, 90, 50);
      ellipse(100, 100, 50);
      ellipse(100, 110, 50);
      ellipse(100, 90, 50);
      ellipse(115, 100, 50);
  pop();
  rectMode(CORNERS);
  fill(30)
  rect(0,300,400,400)
  fill(50);
  rectMode(CENTER);
  rect(200,200,150,200);
  fill(45);
  rect(200,270,50,60);
  push();
      rectMode(CORNERS);
      fill(5);
      rect(0,325,400,375);
  pop();
  push();
      stroke(255);
      strokeWeight(5);
      strokeCap(SQUARE);
      line(0,350,25,350);
      line(50,350,75,350);
      line(100,350,125,350);
      line(150,350,175,350);
      line(200,350,225,350);
      line(250,350,275,350);
      line(300,350,325,350);
      line(350,350,375,350);
  pop();
  rectMode(CENTER);
  fill(30);
  strokeJoin(BEVEL);
  push();
  //Bottom Left Window
  rect(150,200,20);
  rect(150,220,20);
  rect(170,200,20);
  rect(170,220,20);
  //Top Left Window
  rect(150,160,20);
  rect(150,140,20);
  rect(170,160,20);
  rect(170,140,20);
  //Bottom Right Window
  rect(230,200,20);
  rect(230,220,20);
  rect(250,200,20);
  rect(250,220,20);
  //Top Right Window
  rect(230,160,20);
  rect(230,140,20);
  rect(250,160,20);
  rect(250,140,20);
  pop();
}