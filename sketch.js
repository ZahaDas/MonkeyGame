var monkey, monkey_running;
var bananaImage;
var FoodGroup, obstacleGroup;
var obstacleImage;
var ground;
var survivalTime = 0;
var score;

function preload(){

    monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;  
  
}

function draw() {
  createCanvas(400, 400);
  background ("white");
  
  if (ground.x < 0) {
      ground.x = ground.width / 2;
    }
  console.log(ground.x);
  
  stroke ("white");
  textSize (20);
  fill ("white");
  text ("Score: "+ score, 500,50);
  
  stroke ("black");
  textSize (20);
  fill ("black");
  survivalTime=Math.ceil (frameCount/frameRate());
  text ("Survival Time: "+ survivalTime, 100,50);
  
  if (keyDown ("space")) {
    monkey.velocityY = -10; 
  }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide (ground);
  
  food();
  obstacles();

drawSprites();
}


function food(){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite (401,200,20,20);
    banana.addImage (bananaImage);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4;
    banana.lifetime = 110;
    banana.scale = 0.1;
  }
}

function obstacles(){
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite (401,327,20,20);
    obstacle.addImage (obstaceImage);
    obstacle.velocityX = -4;
    obstacle.lifetime = 110;
    obstacle.scale = 0.1;
  }
}



