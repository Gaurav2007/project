class Sling
{
    constructor(bodyA,pointB)
    {
        var options =
        {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            angulartiffness : 1,
            length : 220,
        };
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    display()
    {
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}