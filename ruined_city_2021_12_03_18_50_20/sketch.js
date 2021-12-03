// I was going for a "Ruined City lost in the sand" vibe
// It didn't turn out exactly how I hoped :(

let cam, table;

function preload(){
  table = loadTable('csv.csv','csv')
}

function setup() {
  createCanvas(400, 400, WEBGL);
  cam = createCamera();
  print(table.getString(1,0), 'has', table.getString(1,1), table.getString(0,1))
  print(table.getString(1,0), 'has', table.getString(1,2), table.getString(0,2))
}

function draw() {
  camera(mouseX-200,mouseY,255)
  ambientLight(200)
  directionalLight(255,255,0,100,100,0)
  background(220);
  
  normalMaterial();
  fill('#C2B280')
  plane(300,300,100)
  
  push();
  translate(100,100)
  fill(50)
  rotateX(QUARTER_PI);
  rotateZ(QUARTER_PI)
  box(50,50,50);
  pop();
  
  push();
  specularMaterial(250);
  shininess(1);
  translate(27,0)
  rotateX(0.45);
  rotateZ(HALF_PI)
  box(50,75,200);
  pop();
  
  push();
  translate(-172,-179,300)
  fill(255,255,0)
  rotateX(QUARTER_PI);
  rotateZ(QUARTER_PI)
  sphere(50,50,50);
  pop();
  
  
}