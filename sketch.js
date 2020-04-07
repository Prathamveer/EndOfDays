var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sunImg,mercuryImg,venusImg,earthgImg,marsImg,jupiterImg,saturnImg,uranusImg,neptuneImg;

var angle=0;
var angleSpeed=0.2;
var sunRadius;

function preload(){
  sunImg=loadImage("sun.png");
  mercuryImg=loadImage("mercury.png");
  venusImg=loadImage("venus.png");
  earthImg=loadImage("earth.png");
  marsImg=loadImage("mars.png");
  jupiterImg=loadImage("jupiter.png");
  saturnImg=loadImage("saturn.png");
  uranusImg=loadImage("uranus.png");
  neptuneImg=loadImage("neptune.png");

}
function setup(){
  createCanvas(800,600);

  sun=createSprite(-200,-200);
  sun.addImage("sun",sunImg);
  sun.setCollider("circle");
  sun.scale=0.5;
  //sun.debug=true;

  mercury=createSprite(0,0);
  mercury.addImage("mercury",mercuryImg);
  mercury.setCollider("circle",-85,-60,140);
  mercury.scale=0.06;
  //mercury.debug=true;

  venus=createSprite(100,0);
  venus.addImage("venus",venusImg);
  venus.setCollider("circle",-85,-60,140);
  venus.scale=0.1;
  //venus.debug=true;

  earth=createSprite(0,-100);
  earth.addImage("earth",earthImg);
  earth.setCollider("circle",-85,-60,140);
  earth.scale=0.05;
  //earth.debug=true;

  mars=createSprite(0,100);
  mars.addImage("mars",marsImg);
  mars.setCollider("circle",-85,-60,140);
  mars.scale=0.1;
  //mars.debug=true;

  jupiter=createSprite(-200,200);
  jupiter.addImage("jupiter",jupiterImg);
  jupiter.setCollider("circle");
  jupiter.scale=0.9;
  //jupiter.debug=true;

  saturn=createSprite(100,-200);
  saturn.addImage("saturn",saturnImg);
  saturn.setCollider("circle",-85,-60,140);
  saturn.scale=0.3;
  //saturn.debug=true;

  uranus=createSprite(250,100);
  uranus.addImage("uranus",uranusImg);
  uranus.setCollider("circle",-85,-60,140);
  uranus.scale=0.1;
  //uranus.debug=true;

  neptune=createSprite(300,-100);
  neptune.addImage("neptune",neptuneImg);
  neptune.setCollider("circle",-85,-60,140);
  neptune.scale=0.2;
  //neptune.debug=true;

  
  //pluto.debug=true;
}

  function draw(){
    background("black");
    angleMode(DEGREES);
    translate(width/2,height/2);
    rotate(angle);

    if(sun.collide(mercury)){
      mercury.destroy();
    }

    if(sun.collide(venus)){
      venus.destroy();
    }

    if(sun.collide(earth)){
      earth.destroy();
    }

    if(sun.collide(mars)){
      mars.destroy();
    }

    if(sun.collide(jupiter)){
      jupiter.destroy();
    }

    if(sun.collide(saturn)){
      saturn.destroy();
    }

    if(sun.collide(uranus)){
      uranus.destroy();
    }

    if(sun.collide(neptune)){
      neptune.destroy();
    }

    
    angle=angle+angleSpeed
    if(frameCount%1===0){
      sun.scale=sun.scale+0.01
    }
    drawSprites();

  }
  
