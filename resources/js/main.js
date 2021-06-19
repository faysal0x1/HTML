$(document).ready(function(){
    // Sticky Menu 

    $('.js--services-section').waypoint(function(direction){
        if(direction=="down"){
$("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });
    //Mixitup
    var mixer = mixitup('.container');

    //Smooth Scrollf
    $("a").on('click',function(event){
if(this.hash!== ""){
    event.preventDefault();

    var hash = this.hash;

    $('html,body').animate({
screenTop:$(hash).offset().top
},800, function(){
    window.location.hash = hash;
    });
}
    });
});

function openNav(){
    document.getElementById("mynav").style.width="100%";
}

function closenav(){
    document.getElementById("mynav").style.width="0%";
}
