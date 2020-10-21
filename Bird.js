class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var disco = [this.body.position.x, this.body.position.y];
      this.trajectory.push(disco);
    }  
    for(var dancer = 0; dancer < this.trajectory.length; dancer++){
      image(this.smokeImage, this.trajectory[dancer][0], this.trajectory[dancer][1]);
    }
  }
}