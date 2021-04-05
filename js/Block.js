class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        if(this.body.speed < 2.5){
          rect(0,0,this.width, this.height);
        }
        else{
          World.remove(world,this.body);
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
         
        }
       
        pop();
      }
      score(){
        if(this.Visiblity <0 && this.Visiblity>=-500){
          score++;
        }
      }



}