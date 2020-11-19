const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.constraint;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000,800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 50;
	roof = new Roof (350,150,500,30);
	bob1 = new Bob (225,350,50);
	bob2 = new Bob (275,350,50)
	bob3 = new Bob (400,350,50)
	bob3 = new Bob (400,350,50)
	bob4 = new Bob (450,350,50)
	bob5 = new Bob(340,350,50);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0); 
 	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  drawSprites();
  console.log(bob1.x)
 
}



