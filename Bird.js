class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    push()
    if(this.body.velocity.x > 10 && this.body.position.x > 225){
       var pause = [this.body.position.x,this.body.position.y];
       this.trajectory.push(pause);
    }
    for(var i = 0;i < this.trajectory.length; i++){
      image(this.image2,this.trajectory[i][0],this.trajectory[i][1]);
      pop()
    }
  }
}
