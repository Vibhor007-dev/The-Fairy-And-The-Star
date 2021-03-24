var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var invisibleBlock;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	


function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	//fairy.debug=true;
	fairy.setCollider("rectangle",500,10,50,50,30);
	
	star = createSprite(550,30,5,5);
	star.addImage(starImg);
	star.scale = 0.2;
	//star.debug=true;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(550 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	starBody.isStatic=false;
	
	

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  edges=createEdgeSprites();
  fairy.collide(edges);
  //World.gravity.y(starBody);
fairy.velocityX=4;
star.velocityY=2;


drawSprites();
keyPressed();


if(fairy.isTouching(star)){
	textSize(18);
	text("Fairy got the star",400,100);
	fairy.velocityX=0;
	star.velocityY=0;
	//fairyVoice.play();
	}
	
}	

function keyPressed() {
	//write code here
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX=4;
	}
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX=-4;
	}
}
