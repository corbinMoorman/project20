var bg 
var astronaut
var sleep
var brush
var drink
var eat
var gym
var move
var bath

function preload(){
bg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
drink = loadAnimation("drink1.png","drink2.png")
gym = loadAnimation("gym1.png","gym2.png")
eat = loadAnimation("eat1.png","eat2.png")
move = loadAnimation("move.png","move1.png")
bath = loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(800,400);
iss = createSprite(400,200)
iss.addImage(bg)
iss.scale = 0.2


astronaut = createSprite(300,230)
astronaut.addAnimation("sleeping",sleep)
astronaut.scale = 0.1

createEdgeSprites()

}

function draw() {
  background(255,255,255); 
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
  }
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("exercing",gym);
  astronaut.changeAnimation("exercing")
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath)
  astronaut.changeAnimation("bathing")

}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating")
}

if(keyDown("m")){
 
  astronaut.velocityX = 3
  astronaut.velocityY = 3
}


 drawSprites();


 textSize(20);
 fill(255);
 text("Instructions:",20,20)
 
fill(255);
textSize(15);
 text("rightArrow = eat",20,40);

fill(255)
textSize(15)
 text("leftArrow = bath",20,60)

 fill(255)
 textSize(15)
text("upArrow = brush",20,80)

fill(255)
textSize(15)
text("downArrow = gym",20,100)


fill(255)
textSize(15)
text("m = move",130,20)
}