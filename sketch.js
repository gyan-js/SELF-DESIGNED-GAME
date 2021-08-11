var bg, bgImg;

function preload() {
  bg = loadImage("assets/bg1.png")
}

function setup() {
createCanvas(2650,1295);
//bgImg = createSprite(400,400,400,400);
//bgImg.addImage(bg);
}

function draw() {
background(bg)



drawSprites();
}