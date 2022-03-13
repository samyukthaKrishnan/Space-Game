let ground;
let lander;
var lander_img;
var bg_img;
var asteroid_img, asteroid
var score = 0

//Game States
var PLAY=1;
var END=0;
var gameState=1;

var vy = 0;
var vx = 0
var xy = 0;
var g = 0.05;
var asteroidGroup
function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  asteroid_img = loadImage('asteroid.jpg')

}

function setup() {
  createCanvas(1000,700);
 frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)

// asteroid = createSprite(Math.round(random(100,700)),0,30,30)
  asteroidGroup = createGroup()





//rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  //push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
 
 // pop();
 if(gameState===PLAY){
  spawnAsteroids();
  if(asteroidGroup.isTouching(lander)){
    score = score+1
    console.log(score)
  }



  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x += vx;
 

  if(keyIsDown(UP_ARROW))
  {
    vy = - 3
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    vx = 3
  }

  if(keyIsDown(LEFT_ARROW))
  {
    vx = -3
  }
  
  if(keyIsDown(DOWN_ARROW )){
    vy = 3
  }

 }
 
else{
  gameState=END;
  asteroidGroup.destroyEach();
}

  drawSprites();
  fill(255);
  text("Score: "+ score,850, 50)
}
function spawnAsteroids(){
  if(frameCount%200 === 0){
    asteroid = createSprite(Math.round(random(100,700)),0,30,30)
    asteroid.addImage(asteroid_img);
    asteroid.scale = 0.1;
    asteroid.velocityY = Math.round(random(1,4))
    asteroidGroup.add(asteroid)
  }
  
}





