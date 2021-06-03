class Game{

        constructor(){
      
        }
      
        getState(){

          var gameStateRef  = database.ref('gameState');

          gameStateRef.on("value",function(data){

             gameState = data.val();

          })
      
        }
      
        update(state){
          database.ref('/').update({
            gameState: state
          });
        }
      
        async start(){
          if(gameState === 0){

            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){

              playerCount = playerCountRef.val();

              player.getCount();

            }

            form = new Form();

            form.display();

          }
      
          man1 = createSprite(500, 200);
          man1.addImage("manImg1", manImg1);
          man2 = createSprite(700, 200);
          man2.addImage("manImg2", manImg2);
          man3 = createSprite(900, 200);
          man3.addImage("manImg3", manImg3);
          man4 = createSprite(1010, 200);
          man4.addImage("manImg4", manImg4);
          man5 = createSprite(1030, 200);
          man5.addImage("manImg5", manImg5);
          players = [man1, man2, man3, man4, man5];
        }
      
        play(){
      
          form.hide();
      
          background(bgImg);
      
          image(bgImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
      
          Player.getPlayerInfo();
          
          if(allPlayers !== undefined){
            
            var index = 0;
      
            var x = 300;
            var y;
      
            for(var plr in allPlayers){

              index = index + 1 ;
      
              x = x + 200;

              y = displayHeight - allPlayers[plr].distance;
              allPlayers[index - 1].x = x;
              allPlayers[index - 1].y = y;
      
              if (index === player.index){

                players[index - 1].shapeColor = "black";
                camera.position.x = displayWidth / 2;
                camera.position.y = allPlayers[index-1].y;

              }
             
            }
      
          }
      
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
      
          drawSprites();
        }

}
