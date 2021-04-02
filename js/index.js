$(function() {
    var offset = 0;
    var timer = 0;
    function autoPlay() {
        timer = setInterval(function() {
            offset -= 1;
            if (offset <= -340)
                offset = 0;
            $(".side-inform-main-min").css("marginTop", offset);
        }, 50);
    }
    autoPlay();
   $(".side-inform-main").hover(function() {
       clearInterval(timer);
   }, function() {
       autoPlay();
   });
});