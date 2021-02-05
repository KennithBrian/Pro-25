const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box1,box3;
var paper;
var ground;
var dustbin, dustbinImg;

function preload(){
  dustbinImg = loadImage("dustbin.png");
}

function setup() 
{
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(601,350,1202,10);
	box1 = new Box(1000,340,150,10);
	box2 = new Box(925,295,10,100);
  box3 = new Box(1075,295,10,100);
  dustbin = createSprite(1000,275,5,5);
  dustbin.addImage(dustbinImg);
  dustbin.scale = 0.5;

	paper = new Paper();

	Engine.run(engine);  
}


function draw()
{
  rectMode(CENTER);
  background(255);
  
  ground.display();
  paper.display();

  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 70,
      y: -70
    });
  }
}