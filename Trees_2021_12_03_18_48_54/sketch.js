let treeArray = [];
let treeArray2 = [];
let treeArray3 = [];
let treeArray4 = [];

function setup() {
  createCanvas(800, 600);
  // This set of loops creates 4 groupings of trees at different base Y values
  for (x=0;x<random(5,7);x++){
    treeArray[x] = new Tree(height/2);
  }
  for (x=0;x<random(5,7);x++){
    treeArray2[x] = new Tree(height/2+75);
  }
  for (x=0;x<random(5,7);x++){
    treeArray3[x] = new Tree(height/2+150);
  }
  for (x=0;x<random(5,7);x++){
    treeArray4[x] = new Tree(height/2+225);
  }
}

function draw() {
  background('#c2f0ed');
  rectMode(CORNER)
  fill('#3d8507')
  rect(0,height/2,width,height/2)
  // This group of for loops draws each of the trees in each array.
  for (x=0;x<treeArray.length;x++){
    treeArray[x].draw();
  }
  for (x=0;x<treeArray2.length;x++){
    treeArray2[x].draw();
  }
  for (x=0;x<treeArray3.length;x++){
    treeArray3[x].draw();
  }
  for (x=0;x<treeArray4.length;x++){
    treeArray4[x].draw();
  }
}

class Tree {
  // The constructor sets up random values for each tree, including width, height,
  // x position, and details about the leaves.
  constructor(y){
    this.height = random(100,150);
    this.width = random(30,50);
    this.x = random(0,width);
    this.y = y+random(-25,25);
    this.leaves = round(random(0,3))
    this.leafw = random(70,200);
    this.leafh = random(70,100);
    this.offset = this.height/2.5;
  }
  
  draw(){
    rectMode(CENTER)
    fill('#40291d')
    noStroke();
    rect(this.x,this.y,this.width,this.height);
    
    // The switch-case statement causes the leaves to be different colors.
    switch (this.leaves){
      case 0: // Yellow Green
        fill(193,199,8,245);
        break;
      case 1: // Yellow
        fill(250,250,57,240);
        break;
      case 2: // Orange
        fill(211,144,0,245);
        break;
      case 3: // Red
        fill(184,58,24,245);
        break;
    }
    ellipse(this.x,this.y-this.offset,this.leafw,this.leafh)
  }
}

