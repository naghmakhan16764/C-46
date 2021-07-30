var whiteCounterImg, blackCounterImg, redCounterImg, boradImg, strikerImg;
var white = [],
  black = [],
  redCounter;
striker;

function preload() {
  boradImg = loadImage("images/CarromBoard.jpg");
  whiteCounterImg = loadImage("images/white.png");
  blackCounterImg = loadImage("images/black.png");
  redCounterImg = loadImage("images/red.png");
  strikerImg = loadImage("images/striker.png");
}

function setup() {
  createCanvas(windowHeight, windowHeight);

  createCounters();
  placeCounters();
}

function draw() {
  background(boradImg);
  drawSprites();
}

function mouseDragged() {
  if (striker.x > width / 2 - 120 && striker.x < width / 2 + 120
    && striker.y > 480 && striker.y< 520) {
    striker.x = mouseX;
    striker.y = mouseY;
  }
}
