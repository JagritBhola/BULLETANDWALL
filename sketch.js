var bullet,wall;
var deformation;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200, 50, 50);

  wall=createSprite(1500,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500)
  thickness=random(22,83)
  bullet.velocityX=speed;
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
  }



  drawSprites();

}
function hasCollided(bullet1,wall1){
  if(wall.x-bullet.x < bullet.width/2+wall.width/2){
    return true ;
}
  else {
   return false ;
}
}