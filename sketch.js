
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;

  var ground_options = {
    isStatic :true
  }


  ground = Bodies.rectangle(200,370,200,20,ground_options)
  World.add(world,ground);

var ball_options = {
  restitution :1.0,
}

  ball= Bodies.circle(200,100,20,ball_options)
  World.add(world,ball);

  var ball1_options = {
  isStatic :true
  }

  ball1= Bodies.circle(300,100,20,ball1_options)
  World.add(world,ball1);

  
}

function draw() {
  background(0); 
  Engine.update(engine)
rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,400,20)
 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

  ellipseMode(RADIUS)
  ellipse(ball1.position.x,ball1.position.y,20,20)
}