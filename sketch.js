var player1,player1Img,player2,player2Img,space;
var plr1lsr,plr2lsr;
var players;
var database;
var gameState=0;
var playerCount;
var canvas;
var allPlayers;

var form,game,player;

function preload(){
    player1Img=loadImage("../Images/Player1.png");
    player2Img=loadImage("../Images/Player2.png");
    space=loadImage("../Images/minor-planets.jpg");
    plr1lsr=loadImage("../Images/plr1lsr.png");
    plr2lsr=loadImage("../Images/plr2lsr.png");
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount === 2){
        game.update(1);
    }
    if(gameState === 1){
    clear();
    game.play();
    drawSprites();
    }
    if(gameState === 2){
    game.end();
    }
}