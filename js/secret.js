
var kkeys = [], secret = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {

  kkeys.push( e.keyCode );

  if ( kkeys.toString().indexOf( secret ) >= 0 ) {

    $(document).unbind('keydown',arguments.callee);
    
    window.location.href = "http://www.youtube.com/watch?v=oHg5SJYRHA0&feature=player_embedded";
    $("body").addClass("secret");
  
  }

});