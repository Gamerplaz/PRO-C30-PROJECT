class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);
        console.log(this.body.speed)
        if(this.body.speed < 6){
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{

          World.remove(world, this.body);
          push();
          
        
          this.visiblity - this.visiblity - 5
          this.visiblity = this.x;
          this.visiblity = this.body.position.x;
          
        
          
          
          tint(255, 0);
          /*The work done here is a little cheaped out
          sorry for now */
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          pop();
        }


        }
}