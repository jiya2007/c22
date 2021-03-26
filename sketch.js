const Engine=Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies

var engine,world

function setup() {

engine=Engine.create()
world=engine.world
createCanvas(800,400);
  ball=Bodies.circle(200,100,30,{restitution:1})
  World.add(world,ball)
  ground=Bodies.rectangle(400,350,800,10,{isStatic:true})
  World.add(world,ground)
}

function draw() {
  background("blue");
  Engine.update(engine)  
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30)
rectMode(CENTER)
 rect(ground.position.x,ground.position.y,800,10)
}