$(function(){
  $('.choice').click(function(e){
    var choice = $(this).data().name;
    $('#player-choice').text(choice);
  });

});


