const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box2,box3,box4,box5,box6;
var head1,head2,head3;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box2=new Box(80,350,20,190);
    box3=new Box(100,350,60,220);
    box4=new Box(160,350,80,270);
    box5=new Box(240,350,60,220);
    box6=new Box(300,350,20,190);
    
    ground=new Ground();

    head1=new Head(100,145,3,30);
    head2=new Head(165,100,3,50);
    head3=new Head(245,145,3,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   
   ground.display();
   head1.display();
   head2.display();
   head3.display();
}