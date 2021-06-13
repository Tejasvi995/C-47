const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bella;
var engine,world;
var obstacleGrp;

function preload(){
kitty = loadAnimation("kitty/kitty1.png","kitty/kitty3.png","kitty/kitty4.png","kitty/kitty5.png","kitty/kitty6.png","kitty/kitty7.png","kitty/kitty8.png");
backgroundImg = loadImage("background-self.png");
groundImg = loadImage("ground.png");
obstacleImg = loadImage("obstacle1.png");
obstacle1Img = loadImage("obstacle2.png");
}

function setup(){
createCanvas(800,800);
engine = Engine.create();
world = engine.world;
ground = createSprite(400,750,1000,20);
ground.shapeColor = 'brown';
ground.x = ground.width/2;
//ground.addImage(groundImg);
//ground.velocityX = -4;
//ground = new Ground(400,750,800,20);
bella = createSprite(100,700,50,50);
bella.addAnimation("running",kitty);
bella.scale =0.5;
obstacleGrp = new Group();
}

function draw(){
Engine.update(engine);
background(backgroundImg);
if(keyDown("space")&& bella.y>=100){
  bella.velocityY = -12
}
if(ground.x<0){
  ground.x = ground.width/2;
}
if(bella.isTouching(obstacleGrp)){
  obstacleGrp.destroyEach();
}
bella.velocityY = bella.velocityY+0.8;
bella.collide(ground);
ground.display();
//spawnFlowers();
spawnObstacles();
drawSprites();
}
function spawnObstacles(){
  if(frameCount % 200 === 0){
    var obstacle = createSprite(800,700,50,50);
    obstacle.x = Math.round(random(750,800));
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacle.addImage(obstacleImg);
              break;
      case 2: obstacle.addImage(obstacle1Img);
              break;
      default:break;
    }
    obstacle.scale = 0.2;
    obstacle.velocityX = -7;
    obstacle.lifetime = 300;
    obstacleGrp.add(obstacle);
  }
}
/*function spawnFlowers(){
  if(frameCount % 400 === 0){
    var obstacle1 = createSprite(800,690,50,50);
    obstacle1.addImage(obstacle1Img);
    obstacle1.scale = 0.2;
    obstacle1.velocityX = -4;
    obstacle1.lifetime = 300;
  }
}*/