const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;
function preload(){
  bagImg=loadImage("bag.jpg")
}
function setup() {
	createCanvas(3000, 800);

	engine = Engine.create();
	world = engine.world;


   ball1 = new Bob(200,200,80,80);
	//bobObject2 = new Bob(450,400);
//	bobObject3 = new Bob(500,400);
	//bobObject4 = new Bob(350,400);
//	bobObject5 = new Bob(300,400);

  roof= new Ground(400,200,550,30); 
ground1=new Ground(600,600,1000,200,20)

 rope1 = new Rope(ball1.body, roof.body, 0, 0);
  //rope2 = new Rope(bobObject2.body, roofObject.body,50,0);
 // rope3 = new Rope(bobObject3.body, roofObject.body,100, 0);
 // rope4 = new Rope(bobObject4.body, roofObject.body, -50, 0);
  //rope5 = new Rope(bobObject5.body, roofObject.body, -100, 0);
b1= new Box(900,100)
b2= new Box(900,100)
b3= new Box(900,100)
b4= new Box(900,100)
b5= new Box(900,100)
b6= new Box(900,100)
b7= new Box(800,100)
b8= new Box(800,100)
b9= new Box(800,100)
b10= new Box(800,100)
b11= new Box(800,100)
b12= new Box(800,100)
b13= new Box(700,100)
b14= new Box(700,100)
b15= new Box(700,100)
b16= new Box(700,100)
b17= new Box(700,100)
b18= new Box(700,100)
b19= new Box(700,100)
b20= new Box(700,100)
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");


  //roof.display();

  rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  //rope5.display();
  ball1.display();
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  b13.display()
  b14.display()
  b15.display()
  b16.display()
  b17.display()
  b18.display()
  b19.display()
  b20.display()
 // bobObject2.display();
 // bobObject3.display();
 // bobObject4.display();
  //bobObject5.display();
  ground1.display();
  drawSprites();
 }


 
 function mouseDraaged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
 }
 