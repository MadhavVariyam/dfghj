const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Box1
function setup(){
   engine = Engine.create();
    world = engine.world;
   Ground1 = new Ground(200,400,300,10)
   Box1 = new Box(200,250,50,50)
   Box2 = new Box(250,250,50,50)
   Box3 = new Box(300,250,50,50)
   Box4 = new Box(150,250,50,50)
   Box5 = new Box(100,250,50,50)
   Box6 = new Box(125,200,50,50)
   Box7 = new Box(175,200,50,50)
   Box8 = new Box(225,200,50,50)
   Box9 = new Box(275,200,50,50)
   Box10 = new Box(200,140,50,50)
   Box11 = new Box(250,140,50,50)
   Box12 = new Box(150,140,50,50)
   Box13 = new Box(225,90,50,50)
   Box14 = new Box(175,90,50,50)
   Box15 = new Box(200,40,50,50)
}

function draw(){
   background("black");
   Engine.update(engine);
   Ground1.display();
   Box1.display();
   Box2.display();
   Box3.display();
   Box4.display();
   Box5.display();
   Box6.display();
   Box7.display();
   Box8.display();
   Box9.display();
   Box10.display();
   Box11.display();
   Box12.display();
   Box13.display();
   Box14.display();
   Box15.display();
}

score(){
   if(this.visibility<0 && this.visibility>-105){
      score++;
   }
}