
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var ground;
var box1,box2,box3;
var engine;
var world;
var ball;
var can1,can2,can3;
var can,canimg;
function preload()
{
	canimg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	 
	paperObject = new Paper(100,380,40);
	World.add(world,paperObject);

	ground = new Ground(600,600,1200,500);
	World.add(world, ground);

	can1 = new Can(850,505,10,120);
	World.add(world, can1);
	can1.visible = false;

	can2 = new Can(900,565,130,10);
	World.add(world, can2);
	can2.visible = false;

	can3 = new Can(950,505,10,120);
	World.add(world, can3);
	can3.visible = false;

	can = createSprite(900,500,50,120);
	can.addImage("cang",canimg);
	can.scale = 0.5;
	// engine = Engine.create();
	// world = engine.world; 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  fill("white");
  textSize(40);
  text("Please make sure to throw all your trash in the trashcan",100,50)
  
  paperObject.display();
  ground.display();
  can1.display();
  can2.display();
  can3.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {		 
		Body.applyForce(paperObject.body, paperObject.body.position, {x:65,y:-100});
		//Body.applyForce( paperObject.body, {x:paperObject.x, y:paperObject.y}, {x:0, y:-0.1});
	}

}

