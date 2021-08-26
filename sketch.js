
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);//Creates canvas

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {//The properties for the ball
    restitution: 0.95,//Bounciness of the ball
  }
   
  
  btn2 = createImg('up.png');//Giving "btn2" the "Up Image"
  btn2.position(20,30);//Writes the positions of "btn2"
  btn2.size(50,50);//Sets the size of "btn2"
  btn2.mouseClicked(vForce);//Makes "btn2" clickable
  
   
  
  

  ground =new Ground(200,390,400,20);//Creates ground


  ball = Bodies.circle(100,200,20,ball_options);//Creates ball
  World.add(world,ball);//Puts ball in the world
  
  con = Matter.Constraint.create({//Creates the constraint
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,x:0},
    length:100,
    stiffness:0.1
  })
  World.add(world,con);//Adds the constraint to the world

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);//Colors the background
  Engine.update(engine);//Updates the engine
  push()
  strokeWeight(2);//Changes the stroke's weight
  stroke(255);//Changes the color of the stroke
  line(con.pointA.x,con.pointB.y,ball.position.x,ball.position.y)//Creates the line
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();//Shows the ground
  pop();
  Engine.update(engine);//Updates the engine
}


function vForce()//Applies force
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
}