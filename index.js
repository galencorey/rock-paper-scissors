$(function(){
  var game = new Game();

  $('.choice').click(function(e){
    var choice = $(this).data().name;
    var currentTurn = game.currentTurn;
    $('#player-choice').text(choice);
    $('#computer-choice').text(currentTurn.computerChoice);
    currentTurn.addPlayerChoice(choice);
    game.newTurn();

  });

});


