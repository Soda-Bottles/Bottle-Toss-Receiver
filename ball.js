/*
This class is used for each individual ball in the game using the matter.js library. Similar to the code in the box.js file, only with an ellipse rather than an image
*/
class Ball{
  constructor(x, y, r){
    
    //The restitution makes the ball bounce. Feel free to adjust (values from 0-1 only) 
      const options = {
      restitution: 1
    }
    this.body= Matter.Bodies.circle(x, y, r, options);
    Matter.World.add(world, this.body);
   this.r=r*2;
  }
  
  
  show(){
    const pos= this.body.position;
    const angle= this.body.angle;
    push();
    translate(pos.x, pos.y)
    rotate(angle);
    fill(255);
    noStroke();
   rectMode(CENTER);
    circle(0, 0, this.r*2);
    pop();
  }
}