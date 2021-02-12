class Dustbin{
    constructor(dustbinWidth, dustbinHeight, wallThickness, angle) {
        
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}