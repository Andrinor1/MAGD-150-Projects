let camera;
let cracks = [];
let sound;

function preload(){
  // sound is from https://www.soundfishing.eu/sound/glass-breaking
  sound = loadSound('impact-window61-SF.mp3');
}

function setup() {
  createCanvas(800, 600);
  // Set up the camera
  camera = createCapture(VIDEO);
  camera.size(700,500)
  camera.hide();
  imageMode(CENTER)
}

function draw() {
  // Draw the mirror's background
  background('#4f2b1d');
  rectMode(CORNERS)
  fill('#e8fdff')
  rect(25,25,775,575)
  line(25,25,50,50)
  line(25,575,50,550)
  line(775,25,750,50)
  line(775,575,750,550)
  // Add in the image
  push()
  translate(width/2,height/2)
  scale (-1,1)
  image(camera,0,0,700,500);
  pop()
  // Draw any cracks on the mirror
  for (let x = 0; x < cracks.length; x++){
    push()
    translate(cracks[x].x,cracks[x].y);
    rotate(cracks[x].rotation)
    cracks[x].draw();
    pop();
  }
}

function mousePressed(){
  // Create cracks in the mirror and make a noise
  if (mouseX > 50 && mouseX < 750 && mouseY > 50 && mouseY < 550){
    // Overlap a few cracks to make a better visual effect
    for (let x = 0; x < random(5,10); x++){
      let a = new Crack(mouseX,mouseY);
      cracks[cracks.length] = a;
    }
    // Play the glass break at a random rate
    sound.rate(random(1,3))
    sound.play();
  }
  //print("Array has", cracks.length, "item(s) in it");
}

class Crack{
  // This class is for the cracks in the mirror
  constructor(mx,my){
    this.x = mx;
    this.y = my;
    this.sizemulti = random(1,2);
    this.rotation = random(0,TWO_PI)
  }
  
  draw(){
    push()
    noFill();
    circle(0,0,30*this.sizemulti);
    pop();
    push();
    line(-20*this.sizemulti,0,20*this.sizemulti,0)
    line(0,-20*this.sizemulti,0,20*this.sizemulti)
    pop();
  }
}