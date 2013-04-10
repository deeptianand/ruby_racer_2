function advance_player (player) {
var tr = $("#player"+player+"_strip");
var tds = tr.children().length
var td = $("#player"+player+"_strip").find('.active');
if (td.index() + 1 == tds){
td.toggleClass('winner')
}
else{
td.toggleClass('active');
td.next().toggleClass('active');
}
}
 
$(document).ready(function() {
$(document).on('keyup',function (event) {
if(event.which == 81) {
advance_player(1)
}
else {
advance_player(2)
}
});
});

$.ajax({
     url: '/game/'+game_id,
        type: 'PUT',
        data: "winner_id="+player1_id+"&time_played="+time_played,
        success: function(data) {
          
        }
      });
