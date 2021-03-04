var player_box, ground, background;
var player_boxImage, groundImage, backgroundImage;

function preload(){
  groundImage = loadImage("ground.png")
}

function setup(){
  createCanvas(1200,600)
  //b g

  // ground sprite

  ground = createSprite(600,500)
  ground.scale = 0.7
  ground.velocityX = -7
  ground.addImage(groundImage)
 
}

function draw(){
  background("black")
  

  drawSprites()
}
