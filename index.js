$(function(){
  $('.choice').click(function(e){
    $('#player-choice').text($(this).data().name)
  });
});
