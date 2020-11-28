
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree
var ground
var stone
var boy,img
var mango1,mango2,mango3,mango4
var sling
function preload()
{
	img = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree();
    ground = new Ground(400,700,800,20);
    stone = new Stone(165,570,70,70);
    
    mango1 = new Mango(500,500,20,20);
    mango2 = new Mango(600,450,20,20);
    mango3 = new Mango(660,400,20,20);
    mango4 = new Mango(700,450,20,20);

    sling = new Sling(stone.body,{x:165,y:570})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  boy = image(img,150,540,200,200);
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
  sling.attach(stone.body);
}
}
