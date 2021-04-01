var hr;
var min;
var sec;
var hrangle,minangle,secangle;



function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);
  
  hr=hour();
  min=minute();
  sec=second();

  secangle=map(sec,0,60,0,360);
  minangle=map(min,0,60,0,360);
  hrangle=map(hr%12,0,60,0,360);
  //drawing seconds hand
  push();
  rotate(secangle)
  stroke("red");
  strokeWeight(3)
  line(0,0,100,0);
  pop();
  strokeWeight(10);
  stroke("red");
  noFill();
  arc(0,0,300,300,0,secangle) 
 
  push();
  rotate(minangle)
  stroke("blue");
  strokeWeight(3)
  line(0,0,100,0);
  pop();
  strokeWeight(10);
  stroke("blue");
  noFill();
  arc(0,0,280,280,0,minangle) 

  push();
  rotate(hrangle)
  stroke("green");
  strokeWeight(3)
  line(0,0,100,0);
  pop();
  strokeWeight(10);
  stroke("green");
  noFill();
  arc(0,0,260,260,0,hrangle) 
 
 
  
}