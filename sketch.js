const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    b1=new Buildings(800,550,100,100)
    b2=new Buildings(800,450,100,100)
    b3=new Buildings(800,350,100,100)
    b4=new Buildings(800,250,100,100)
    b5=new Buildings(800,150,100,100)
    ball=new Ball(300,150,50,50);
    rope=new Rope(ball.body,{x:650 ,y:100})
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    rope.display();
    ball.display();
}