class Bird extends BaseClass{
  //extends lets the subclass inherit but super() lets us transfer the properties to the subclass
    constructor(x, y) {
      super(x, y, 50, 50);

      this.image = loadImage("sprites/bird.png");      
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }