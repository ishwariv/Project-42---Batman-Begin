class RainDrops{
    constructor(x,y,radius){
        var options={
            friction:0.1,
            restitution:0.4
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    updatePos() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)});
        }
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
  
        push();
        fill('blue');
  
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
     }
}