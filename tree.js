class Tree{
    constructor(){
       // var tree_option={
        //    isStatic:true
       // }
        this.image = loadImage("tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,600,520,400,400);
    }
}