class Box{
  constructor(x, y, h, w){
    this.body= Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
   this.h=h;
  this.w=w;
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
    imageMode(CENTER);
      image(glass, 0, 0, this.w, this.h);
  //  rect(0, 0, this.h, this.w);
    pop();
  }
}