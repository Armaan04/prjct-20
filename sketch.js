var car, wall
var speed, weight

function setup() {
  createCanvas(1600,400);
  speed= random (55,90)
weight= random (400.1500)
car=createSprite (50,200,50,50)
car.velocityX= speed
car.shapeColor ="red"

wall=createSprite (1500, 200, 60, height/2)
wall.shapeColor ="grey"

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-car.x < (car.width = wall.width)/2){
    car.velocityX= 0;
    var deformation= 0.5 * weight * speed * speed/22509
    if(deformation >180){

      car.shapeColoe=color(red);
    }
    if (deformation <180 && deformation  > 100){
      car.shapeColoe=color(230, 230, 0);
    }
    
  }
  if(deformation<100){
    car.shapeColoe=color(0, 255, 0);
  }
}
