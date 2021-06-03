var canvas;

var playerCount, database, distance, allPlayers, players;

var gameState = 0;

var bgImg;

var form, game, player;

var man1, manImg1, man2, manImg2, man3, manImg3, man4, manImg4, man5, manImg5;

function preload(){

    manImg1 = loadImage("1.png");

    manImg2 = loadImage("2.png");

    manImg3 = loadImage("3.png");

    manImg4 = loadImage("4.png");

    manImg5 = loadImage("5.png");

    bgImg = loadImage("bg.jpg");

}

function setup(){

    canvas = createCanvas(displayWidth - 20, displayHeight - 30);

    database = firebase.database();

    game = new Game();

  game.getState();

  game.start();

}

function draw(){

    if(playerCount === 5){

        game.update(1);
    
      }
    
      if(gameState === 1){
        
        game.play();
    
      }
    
}
