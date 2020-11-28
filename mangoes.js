class Mango{
    constructor(x,y,width,height){
    var stone_option = {
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.image = loadImage("mango.png")
    this.body = Bodies.rectangle(x,y,width,height,stone_option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position
        image(this.image,pos.x,pos.y,50,50);
        
    }
}