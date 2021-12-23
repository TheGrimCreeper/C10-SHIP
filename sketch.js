var ship1

var seaImg, shipImg

var ship

function preload() {
  ship1 = loadImage("ship-1.png");
  seaImg = loadImage('sea.png');
  
}
function setup() {
  createCanvas(windowHeight, windowWidth);

 sea  = createSprite(400,400)
 sea.addImage(seaImg);
 sea.velocityX=3

 ship = createSprite(300,500,30,30);
 ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 ship.scale = 0.5
 

}

function draw() {




 if(sea.x > 1000){
  sea.x = 1
 }
  drawSprites();
}