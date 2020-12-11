class Slingshot{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:10
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(option);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;
    }
    display(){
        image(this.sling1,210,172);
        image(this.sling2,180,172);

        if(this.sling.bodyA){
    var pa = this.sling.bodyA.position
    var pb = this.pointB
        push()
        strokeWeight(5);
        stroke(48,22,8);
        if(pa.x<220){
        line(pa.x-20,pa.y,pb.x-10,pb.y);
        line(pa.x-20,pa.y,pb.x+30,pb.y);
        image(this.sling3,pa.x-30,pa.y-10,15,20);
        }
        else{
        line(pa.x+25,pa.y,pb.x-10,pb.y);
        line(pa.x+25,pa.y,pb.x+30,pb.y);
        image(this.sling3,pa.x+25,pa.y-10,15,20);

        }
        pop()
    }
}
}