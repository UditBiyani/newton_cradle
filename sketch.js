
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
var b1,b2,b3,b4,b5;
var c1,c2,c3,c4,c5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,500,50);
	b1 = new Bob(350,250,35,35);
	c1 = new Chain(b1.body,{x:200,y:100});
	b2 = new Bob(420,250,35,35);
	c2 = new Chain(b2.body,{x:270,y:100});
	b3 = new Bob(490,250,35,35);
	c3 = new Chain(b3.body,{x:340,y:100});
	b4 = new Bob(560,250,35,35);
	c4 = new Chain(b4.body,{x:410,y:100});
	b5 = new Bob(630,250,35,35);
	c5 = new Chain(b5.body,{x:480,y:100});

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  roof.display();

  b1.display();
  c1.display();
  b2.display();
  c2.display();
  b3.display();
  c3.display();
  b4.display();
  c4.display();
  b5.display();
  c5.display();
 
}
function mouseDragged(){
	Matter.Body.setPosition(b1.body,{x:mouseX,y : mouseY});
  }


