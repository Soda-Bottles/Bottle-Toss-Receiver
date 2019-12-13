/*
This class is used in order to reuse the format of the Box class while not using an image

The body is set to static, anything made with this class will not move on it's own or when it is hit
*/

class Ground extends Box{
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.body.isStatic = true;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();

  }
}