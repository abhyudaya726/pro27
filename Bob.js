class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:1.2,
            friction:0.4,
            density:1
        }
        this.radius = 32
        this.bodies = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.bodies);
    }
    display(){
        var pos = this.bodies.position;

        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius*2,this.radius*2);
        pop();
    }
}