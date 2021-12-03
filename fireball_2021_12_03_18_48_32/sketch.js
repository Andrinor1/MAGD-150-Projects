var swidth, sheight,c;
var tx = 0;
var ty = 0;
var sc = 1;
var rt = 0;
var gridvar = true;

function setup() {
  createCanvas(400, 400);
  //The swidth/sheight are representations of how many "squares" wide the canvas is
  swidth = width/40;
  sheight= height/40;
}

function draw() {
  frameRate(10)
  //This makes the center 0,0
  translate(width/2,height/2);
  background(220);
  //Scale, translate and rotate the screen if needed
  scale(sc);
  rotate(rt);
  translate(tx,ty);
  //Draw the visuals
  fireball();
  anim();
  grid();
}

function fireball(){
  //This draws out the base of the fireball
  c = color(255,0,0);
  gridrect(5,5,c);
  gridrect(5,6,c);
  gridrect(6,5,c);
  gridrect(6,6,c);
  c=color('#FFB12C')
  gridrect(4,4,c);
  gridrect(5,4,c);
  gridrect(6,4,c);
  gridrect(4,5,c);
  gridrect(4,6,c);
  gridrect(3,5,c);
  gridrect(3,3,c);
  gridrect(5,3,c);
  c=color(255,255,0);
  gridrect(3,4,c);
  gridrect(4,3,c);
  gridrect(2,2,c);
  gridrect(2,5,c);
  gridrect(2,4,c);
  gridrect(2,3,c);
  gridrect(3,2,c);
  gridrect(4,2,c);
  gridrect(5,2,c);
}

function anim(){
  //This draws the animated tail of the bodyguard
  if (millis()%2==1){
    gridrect(1,2,c);
    gridrect(1,4,c);
    gridrect(3,1,c);
    gridrect(5,1,c);
  } else {
    gridrect(1,3,c);
    gridrect(1,5,c);
    gridrect(2,1,c);
    gridrect(4,1,c);
  }
}

function grid(){
  //This creates a grid based on the canvas size
  if (gridvar){
    for (let x = -swidth/2; x<swidth/2+1; x++){
      line(x*40,-height/2,x*40,height/2);
    }
    for (let x = -sheight/2; x<sheight/2+1; x++){
      line(-width/2,x*40,width/2,x*40);
    }
  }
}

function gridrect(x,y,color){ 
  push();
  //This will center the position of the pixel and place it.
  x -= 5;
  y -= 5;
  x = x*40-20;
  y = y*40-20;
  rectMode(CENTER);
  noStroke();
  fill(color);
  rect(x,y,40,40)
  pop();
}

function keyPressed(){
  //The Up and Down arrow keys control scale.
  //The Left and Right arrow keys control rotation.
  //The WASD keys controls movement.
  //The Spacebar key toggles the grid.
  if (keyCode == UP_ARROW){
    sc+= 0.1;
  } else if (keyCode == DOWN_ARROW){
    sc-= 0.1;
  } else if (keyCode == LEFT_ARROW){
    rt -= PI/8;
  } else if (keyCode == RIGHT_ARROW){
    rt += PI/8;
  } else if (keyCode == 32){
    gridvar = !gridvar;
  } else if (keyCode == 65){
    tx += 40
  } else if (keyCode == 83){
    ty -= 40
  } else if (keyCode == 87){
    ty += 40
  } else if (keyCode == 68){
    tx -= 40
  }
}