var car, speed, speed, height;


function setup() {

  createCanvas(1200,400);
  

 speed = random(55,90) 
 weight = random(4000,500)

 car = createSprite(50, 200, 50, 50);
wall = createSprite(1100,200,60,height=/2 )

car.velocityX = speed;
}

function draw() {
  background(0);  

if(wall.x-car.x < car.width/2 | wall.width/2){
  car.velocityX=0;
var deformation = 0.5*width*speed*speed/22500;
if(deformation<100){
  car.shapeColour = color(0,255,0)
}

if(deformation>100 && deformation<180){
  car.shapeColour = color(230,230,0)
}
if(deformation>180){
  car.shapeColour = color(255,0,0)
}

}


  drawSprites();
}