
//**STICKY MENU**//

$(".js--services-section").waypoint(function(direction){
    if(direction=="down"){
        $("nav").addClass("sticky");
    }else{
        $("nav").removeClass("sticky");
    }
});


//**MIXITUP(PORTFOLIO-SECTION) **//

$(document).ready(function(){
    var mixer=mixitup(".container");
})