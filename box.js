class Box{
    constructor(x, y, width, height) {
      
        this.body = Bodies.rectangle(x, y, width, height)
        this.height = height; 
        this.width=width;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
       
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y, this.width, this.height);
        
      }


}