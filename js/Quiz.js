class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background('yellow');
    var pos=230;
    textSize(30)
    text('result',340,50)
    text('-----------------------------------------------------------------------',320,65)
    Contestant.getPlayerInfo();
    if(allContestants!=undefined){
      fill('blue')
      textSize(20)
      text('correct answers are highlighted in green',130,230)
      for(var plr in allContestants){
        var ans="2";
        if(ans===allContestants[plr].answer){
          fill('green')
        }
        else{
          fill('red')
        }
pos +=30;
textSize(30)
text(allContestants[plr].name+'='+allContestants[plr].answer, 250,pos)
      }

    }



    
    
  }

}
