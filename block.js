class Block{
    constructor(x, y, width, height) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        this.visibility = 255; 

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

        if (this.body.speed > 3) {
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility - 10;
          tint(255,this.visibility);
          image(this.image,pos.x,pos.y,this.width,this.height);
          pop();
        }
        else {
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width,this.height);
        }
      }
}
