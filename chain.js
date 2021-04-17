class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 1.2,
            length : 350 
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push();
        stroke("black");
        strokeWeight(5);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}