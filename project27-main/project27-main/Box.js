class Box {
    constructor(x,y) {
      var options = {
          isStatic:false,
         restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.rectangle(x,y,70,70);
      this.width=70
      this.height=70
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectangleMode(CENTER);
      fill("black");
      rect(0, 0, this.width,this.height );
      pop();
    }
  }