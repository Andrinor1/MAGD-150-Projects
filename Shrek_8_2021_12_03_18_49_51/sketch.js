var comicFont,timesFont,lines;
var shrek8,realdonkey,fionas;
var mom,spd,spdtoggle;
var pdf;

function preload(){
  // This loads all of the fonts, text, and images
  comicFont = loadFont('COMIC.TTF')
  timesFont = loadFont('times.ttf')
  lines = loadStrings('script.txt');
  //image taken from https://www.pinterest.com/pin/329607266479296362/
  shrek8 = loadImage('shrek.jpg')
  // other image taken from https://www.britannica.com/animal/donkey
  realdonkey = loadImage('Donkey.jpg')
  // Fiona image taken from https://www.pinterest.com/pin/568438784195208765/
  fionas = loadImage('fionas.jpg')
}

function setup() {
  // Setup the PDF
  createCanvas(600, 800);
  pdf = createPDF();
  pdf.beginRecord();
  // Setup the animated text variables
  spd = 0;
  mom = 1;
  // Adjust images
  shrek8.resize(250,250)
  realdonkey.resize(500,250)
  fionas.resize(250,250)
  fionas.filter(BLUR,2)
  
}

function draw() {
  background(220);
  // This is a bad attempt at a smooth up and down function- It works I guess.
  if (mom > 0){
    spd -= 0.5;
  } else if (mom < 0) {
    spd += 0.2
  }
  mom += spd;
  
  textAlign(CENTER)
  // This displays all of the text in the correct sizes and fonts
  textFont(comicFont);
  textSize(50)
  text(lines[0],width/2,100);
  push()
  translate(0,mom*5);
  textSize(25)
  text(lines[1],width/2,150)
  pop();
  textFont(timesFont);
  textSize(30);
  text(lines[2],width/2,750);
  // These lines display the images and adjust some of them.
  push();
  tint(0,200,0)
  image(shrek8,300,200)
  pop();
  push();
  realdonkey.filter(THRESHOLD)
  image(realdonkey,50,450)
  pop();
  push();
  image(fionas,50,200);
  pop();
  // These lines separate the images and create a border
  strokeWeight(6)
  line(50,200,550,200);
  line(50,200,50,700);
  line(50,700,550,700);
  line(550,200,550,700);
  line(300,200,300,450);
  line(50,450,550,450);
}

function mousePressed(){
  // This, in theory, saves the PDF. In theory.
  pdf.save();
}