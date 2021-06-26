
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var b1,b2;
var r1,r2,r3;
var a1=60;
var a2=60;
var a3=60;
var ball1,ball2,ball3;


function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    plane=Bodies.rectangle(400,780,800,20,{isStatic:true})
    World.add(world,plane)
	b1=Bodies.rectangle(200,400,100,20,{isStatic:true})
    World.add(world,b1)
	b2=Bodies.rectangle(600,400,100,20,{isStatic:true})
    World.add(world,b2)
	r1=Bodies.rectangle(400,200,100,20,{isStatic:true})
	World.add(world,r1)
	r2=Bodies.rectangle(400,200,100,20,{isStatic:true})
	World.add(world,r2)
	r3=Bodies.rectangle(400,200,100,20,{isStatic:true})
	World.add(world,r3)
    ball1=Bodies.circle(300,15,10,{restitution:0.5,friction:0.5})
    World.add(world,ball1)
    ball2=Bodies.circle(380,15,10,{restitution:0.5,friction:0.5})
    World.add(world,ball2)
    ball3=Bodies.circle(450,15,10,{restitution:0.5,friction:0.5})
    World.add(world,ball3)
	Engine.run(engine);
  
}


function draw() {
  
  background("purple");
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown")
  rect(plane.position.x,plane.position.y,800,20)
  rect(b1.position.x,b1.position.y,100,20)
  rect(b2.position.x,b2.position.y,100,20)
  
  Matter.Body.rotate(r1,a1)
  push()
 translate(r1.position.x,r1.position.y)
 rotate(a1)
 rect(0,0,200,20)
 pop()
 a1=a1+7;
 Matter.Body.rotate(r2,a2)
  push()
 translate(r2.position.x,r2.position.y)
 rotate(a2)
 rect(0,0,200,20)
 pop()
 a2=a2+3;
 Matter.Body.rotate(r3,a3)
 push()
translate(r3.position.x,r3.position.y)
rotate(a3)
rect(0,0,200,20)
pop()
a3=a3+5;

ellipseMode(RADIUS)
fill(random(10,25),random(0,255),random(0,255))
ellipse(ball1.position.x,ball1.position.y,10,10)
ellipse(ball2.position.x,ball2.position.y,10,10)
ellipse(ball3.position.x,ball3.position.y,10,10)
}



