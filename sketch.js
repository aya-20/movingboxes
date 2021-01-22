var canvas;
var music;
var edges;
var moving;
var box1, box2, box3, box4;
var b1, b2, colour;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(300, 580, 100, 10);
    box1.shapeColor = "blue";
    
    box2 = createSprite(500, 580, 100, 10);
    box2.shapeColor = "black";

    box3 = createSprite(100, 580, 100, 10);
    box3.shapeColor = "green";

    box4 = createSprite(700, 580, 100, 10);
    box4.shapeColor = "pink";

    //create box sprite and give velocity

    moving = createSprite(random(20, 750), random(20, 500), 20, 20);
    moving.shapeColor = "white";
    moving.velocityX = 5;
    moving.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites();
    moving.bounceOff(edges);
    
    Touch(); 
    if (Touch(moving, box1)){
        moving.shapeColor = "blue";

    }
    if (Touch(moving, box2)){
        moving.shapeColor = "black";
    }
    if (Touch(moving, box3)){
        moving.shapeColor = "green";
    }
    if (Touch(moving, box3)){
        moving.shapeColor = "pink";
    }
    drawSprites();


    //add condition to check if box touching surface and make it box
}
