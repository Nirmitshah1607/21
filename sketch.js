var canvas;
var music;
var fixedRect1;
var fixedRect2;
var fixedRect3;
var fixedRect4;
var movingRect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    var fixedRect1=createSprite(600,400,50,80);
    fixedRect1.shapeColor="green";
    var fixedRect2=createSprite(500,400,50,80);
    fixedRect2.shapeColor="yellow";
    var fixedRect3=createSprite(400,400,50,80);
    fixedRect3.shapeColor="red";
    var fixedRect4=createSprite(300,400,50,80);
    fixedRect4.shapeColor="blue";
    var movingRect=createSprite(random(20,750));
    movingRect.shapeColor="white";
    
   
    

    


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    movingRect.x=World.mouseX;
    movingRect.y=World.mouseY;
    
    drawSprites();
    //create edgeSpritee



    //add condition to check if box touching surface and make it box
}
