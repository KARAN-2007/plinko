const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300
var d
function setup() {
  var canvas=createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
 
    ground=new Ground(width/2,height,width,20)
    for(var k=0;k<=width;k=k+80){
      divisions.push(new Division(k,height-divisionheight/2,10,divisionheight))
      
    }
    for(var i=50;i<=width-10;i=i+50){
      plinkos.push(new Plinko(i,100))
    }
    for(var j=75;j<=width-30;j=j+50){
      plinkos.push(new Plinko(j,175))
    }
    
    Engine.run(engine);
}

function draw() {
  //background(0);  
  Engine.update(engine);
  ground.display();
  for(var i=0;i<=plinkos.lenght;i++){
    plinkos[i].display()
  }
  for(var k=0;k<divisions.length;k++){
    divisions[k].display()
    
  }
  console.log(plinkos)
  
  
}