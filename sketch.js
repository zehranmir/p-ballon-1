var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage=loadImage("blueballoon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}
//creating contionues enemies
var select_balloon=Math.round(random(1,4));
if(world.frameCount%100==0){
  if(select_balloon==1)
redBalloon();
}
else if (select_balloon==2){
  greenBalloon();
}
else if (select_balloon==3){
  blueBalloon();
}

else {
  pinkBalloon();
}
function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons

var red1=createSprite(0,math.round(random(20,370)),10,10);
red1.addImage(blue_balloonImage);
red1.velocityX=1;
red1.lifetime=150;
red1.scale=0.1;  
}

function greenBalloon() {
  //write code for spwaning green balloons
  var red2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red2.addImage(green_balloonImage);
  red2.velocityX = 3;
  red2.lifetime = 150;
  red2.scale = 0.1;



}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var red3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red3.addImage(pink_balloonImage);
  red3.velocityX = 3;
  red3.lifetime = 150;
  red3.scale = 0.1;
}
// creating contionues ballons
var slect_balloon=Math.round(random(1,1));
if(world.frameCount%100==0){
  if(select_balloon==1){
    redBalloon();
  }
}














