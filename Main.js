class Jsen
{
    
}
class App extends Jsen
{

}
class Vector2
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
    }
    Up=()=>new Vector(0,1);
    Left=()=>new Vector(1,0);
}
class Rect
{

    constructor(color="black",size,position)
    {
        const Box=document.createElement("div");
        Box.style.display="relative";
        Box.style.backgroundColor=color;

        Box.style.height=size.y;
        Box.style.width=size.x;
        Box.style.left=position.x;
        Box.style.top=position.y;

    }
}
console.log("JSGW is running");
