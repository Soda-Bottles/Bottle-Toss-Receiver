/*
Bottle Flipping

NOTES: Both ground, ball, and box variables go from top to bottom order. (ie. ground3 on the bottom section and ball1 is on the top section). All object variables use CENTER mode in case you want to shift anything over
*/

//Variables for matter.js
let world;
let engine;

//Variables for dividers in ground
let ground1;
let ground2;
let ground3;


//Variable for each ball in each section
let ball1;
let ball2;
let ball3;

//Variables for bottles being knocked over
let box;
const boxes1 = [];
const boxes2 = [];
const boxes3 = [];

let glass;
var which;

//Variables for pubnub
var dataServer;
var pubKey = 'pub-c-bb1495b0-a9a1-4f33-b4c1-0d5bb876aff7';
var subKey = 'sub-c-2d85f2ba-0cbb-11ea-9d22-32c7c2eb6eff';
var channelName = "flippingBot";

//Function to load images 
function preload(){
  glass= loadImage('Glass_Bottle.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  dataServer = new PubNub({
    publish_key: pubKey,
    subscribe_key: subKey,
    ssl: true
  });
  
  dataServer.subscribe({
    channels: ['flippingBot']
  });
  dataServer.addListener({
    message: function(message) {
            which = message.message.which;

      console.log(message.message.x)
      if(which == "ball1"){
          Matter.Body.applyForce( ball3.body, {x: ball3.body.position.x, y: ball3.body.position.y}, {x: message.message.x, y: message.message.y});
      }
      if(which == "ball2"){
          Matter.Body.applyForce( ball1.body, {x: ball1.body.position.x, y: ball1.body.position.y}, {x: message.message.x, y: message.message.y});
      }
      if(which == "ball3"){
          Matter.Body.applyForce( ball2.body, {x: ball2.body.position.x, y: ball2.body.position.y}, {x: message.message.x, y: message.message.y});
      }
      if(message.message.reset == "balls"){
        ball1= new Ball(width/3, height/2, 20);
   ball2= new Ball(width/3, height/3*2, 20);
   ball3= new Ball(width/3, height/6, 20);
      } else if (message.message.reset == "bottles"){
        for(let i=0; i<9; i++){
        // Matter.World.remove(world, boxes[0].body);
          // Matter.World.remove(world, boxes2[i].body);
          // Matter.World.remove(world, boxes3[i].body);
        }
        for(let i=0; i<3; i++){
  boxes1[i]= new Box(width/4*3, (height/3*2)+[i]*75, 200, 150);
  }
 for(let i=0; i<3; i++){
  boxes2[i]= new Box(width/4*3, (height/3)+[i]*75, 200, 150);
  }
  for(let i=0; i<3; i++){
  boxes3[i]= new Box(width/4*3, (height/6)+[i]*75, 200, 150);
  } 
      }
    }
  })
  
  //Set up for matter.js
  engine=Matter.Engine.create();
  world=engine.world;
  
  //Rectangles used to divide the screen into three different sections
  ground1= new Ground(width/2, height-10, 10, width);
 ground2= new Ground(width/2, height/3, 10, width);
 ground3= new Ground(width/2, height/3*2, 10, width);
  
  for(let i=0; i<3; i++){
  boxes1[i]= new Box(width/4*3, (height/3*2)+[i]*75, 200, 150);
  }
 for(let i=0; i<3; i++){
  boxes2[i]= new Box(width/4*3, (height/3)+[i]*75, 200, 150);
  }
  for(let i=0; i<3; i++){
  boxes3[i]= new Box(width/4*3, (height/6)+[i]*75, 200, 150);
  } 
  
   ball1= new Ball(width/3, height/2, 20);
   ball2= new Ball(width/3, height/3*2, 20);
   ball3= new Ball(width/3, height/6, 20);
  
}

function draw() {
  //BG colour. Feel free to change to image or different colour
  background(114, 202, 224);
  
  //Runs the matter.js engine
  Matter.Engine.update(engine);
  
  //Call dividers between sections. Order of divider on the bottom to divider on the top
  ground1.show();
  ground2.show();
  ground3.show();
  
  //Call one ball for each section 
  ball1.show();
  ball2.show();
  ball3.show();
  
  //Calls three sets of three bottles for each section
  for (let box of boxes1){
    box.show();
  } 
    for (let box of boxes2){
    box.show();
  }
   for (let box of boxes3){
    box.show();
  } 
}