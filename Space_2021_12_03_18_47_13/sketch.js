function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(5);
  colorMode(RGB);
  strokeWeight(3);
  point(15,15);
  point(150,60);
  point(285,40);
  point(250,394);
  point(170,316);
  point(43,275);
  point(100,200);
  point(300,63);
  point(340,87);
  point(370,184);
  point(250,120);
  fill('#F5532E');
  noStroke();
  circle(200,200,100);
  stroke(255,255,255);
  colorMode(HSB);
  fill(157,15,100);
  bezier(153,190,120,195,300,235,247,220);
  colorMode(RGB);
  fill(255,0,255);
  noStroke();
  circle(100,100,50);
  noFill();
  stroke(255);
  strokeWeight(4);
  arc(100,100,50,30,0,PI);
  strokeWeight(1);
  fill(100);
  triangle(325,325,350,300,290,260);
  fill(140)
  quad(310,290,325,310,335,300,320,283)
}