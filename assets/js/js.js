



$(document).bind('mousemove', function(e){
    $('.cursor').css({
       left:  e.pageX - 20,
       top:   e.pageY - 20
    });

});
