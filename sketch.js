
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

 monkey = createSprite(50,315,20,20) ;
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(400,360,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  
  
  
}


function draw() {
background(255);
  
  if (ground.x < 400){
      ground.x = ground.width/2;
    }
    
if(keyDown("space") && monkey.y >= 300){
  monkey.velocityY = -12;
 
  }
  
  
  
 monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  
  
  
  
  
  drawSprites()
}






