function advance_player (player) {
 var tr = $("#player"+player+"_strip");
 var tds = tr.children().length
 var td = $("#player"+player+"_strip").find('.active');
 td.toggleClass('active');
 var next = td.next()
 next.toggleClass('active');
 if(next.index() + 1 == tds){
     //set the text on the winner element.winner element is still hidden
 	$('#winner').text("Yaaaaay!!!!  Player "+player+" is the winner...Starting next game")
    //fade in the winner elment ..take about 5 seconds
    $('#winner').fadeIn('5000')
 	//wait for 3 seconds before we restart the game, and hide the winner element
 	window.setTimeout(function (){restart_game(); $('#winner').hide()}, 3000);
 }

}

function restart_game() {
 var trs = $('tr')
 	$.each ( trs, function () {
          var tds = $(this).find('td');
	      $.each(tds,function () {
		      $(this).removeClass('active')
		      $(this).removeClass('winner')
	      });
	     $(this).find(">:first-child").addClass('active')
      });
}

$(document).ready(function() {
	$(document).on('keyup',function (event) {
	  if(event.which == 81) {
	  advance_player(1)
	  }
	  if(event.which ==80){
	  	advance_player(2)  
	  }
});
});
