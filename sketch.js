var box;
function setup() {
  createCanvas(windowWidth,windowHeight);
  box=createSprite(500,500,50,50)
  background(30);
}

function draw() 
{
 


if (keyIsDown(RIGHT_ARROW)){
  background("red")
  box.x=box.x+10;
   
}
if (keyIsDown(LEFT_ARROW)){
  background("blue")
  box.x=box.x-10;
  
}
if (keyIsDown(UP_ARROW)){
  background("darkgreen")
  box.y=box.y-10
}
if (keyIsDown(DOWN_ARROW)){
  background("cyan")
  box.y=box.y+10
}
drawSprites();
}


