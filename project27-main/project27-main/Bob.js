class Bob {
    constructor(x,y,width,height,angle) {
      var options = {
          isStatic:false,
         restitution:1,
          friction:1,
          density:0.005
      }
      this.body = Bodies.rectangle(x,y,width,height);
      this.width=width
      this.height=height
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.angle

      push();
      translate(pos.x,pos.y);
      rotatate(angle)
      ellipseMode(CENTER);
      fill("black");
      ellipse(0, 0, this.width,this.height);
      pop();
    }
  }