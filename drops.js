class RainDrops{
    constructor(x,y,r){
        var options={
            friction:0.4,
            restitution:3
        }
        this.r = 7;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,7,options);
        this.velocity=Math.round(random(5,10));;
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
        noStroke();
        fill("#1527ad");       
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
     }
}