/*
This class creates the bottles that get knocked over in the game
*/

class Bottles {
  constructor(x, y, w, h) {
    
    //The restitution makes the bottles bounce/clink. Feel free to adjust of remove it (values of 0-1 only)
    const options = {
      restitution: 0.8
    }    
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    
  }
  
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(boxImg, 0, 0, this.w, this.h);
    pop();
    
  }
  
  


}