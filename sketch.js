var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1, car2, car3, car4;
var cars;

var car_img1, car_img2, car_img3, car_img4;
var track;
var ground;

function preload(){

car_img1 = loadImage("car1.png")
car_img2 = loadImage("car2.png")
car_img3 = loadImage("car3.png")
car_img4 = loadImage("car4.png")

track = loadImage("track.jpg")

ground = loadImage("ground.png")

}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
     game.end()
  }
}
