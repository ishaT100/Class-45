var bg, bgImg
var bottomground
var topground
var balloon, balloonImg

function preload() {
  bgImg = loadImage("assets/bg.png")
  balloonImg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}
function setup() {
  //background image
  bg = createSprite(165, 485, 1, 1)
  bg.addImage(bgImg)
  bg.scale = 1.3
  //create top and bottom ground 
  bottomground=createSprite(200,390,800,20)
  topground=createSprite(200,10,800,20)
  topground.visible=false
  bottomground.visible=false
  //creating balloon
  balloon=createSprite(100,200,20,50)
  balloon.addAnimation("balloon",balloonImg)
  balloon.scale=0.2
}

function draw() {
  background("black")
  //making the hot air balloon jump 
  if(keyDown("space")){
  balloon.velocityY=-6
  }
  //adding gravity
  balloon.velocityY=balloon.velocityY+2
  drawSprites()
}