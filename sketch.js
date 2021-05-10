var canvas;
var music;
var a,b,c,d,ball;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    a = createSprite(100,550,200,20);
    a.shapeColor = "red";

    b = createSprite(300,550,200,20);
    b.shapeColor = "blue";

    c = createSprite(500,550,200,20);
    c.shapeColor = "yellow";

    d = createSprite(700,550,200,20);
    d.shapeColor = "green";


    //create box sprite and give velocity
    ball = createSprite(400,100,20,20);
    ball.shapeColor = "black";
    ball.velocityX = -5;
    ball.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges= createEdgeSprites();


    //add condition to check if box touching surface and make it box
    //ball.bounceOff(a);
    //ball.bounceOff(b);
    //ball.bounceOff(c);
    //ball.bounceOff(d);
    ball.bounceOff(edges);
    
    if(ball.isTouching(a) && ball.bounceOff(a)){
        ball.shapeColor = "red";
    }
    if(ball.isTouching(b)&& ball.bounceOff(b)){
        ball.shapeColor = "blue";
        music.play();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    if(ball.isTouching(c)&& ball.bounceOff(c)){
        ball.shapeColor = "yellow";
    }
    if(ball.isTouching(d)&& ball.bounceOff(d)){
        ball.shapeColor = "green";
    }
}
