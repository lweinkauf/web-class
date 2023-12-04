$(document).ready(function(){

    // flowers

$(".div1").click(function(){
    $(".div2,.div3,.div4").fadeToggle("slow");
    $(".div1-text").toggle();
    $(this).toggleClass("front","slow");
});

$(".div2").click(function(){
    $(".div1,.div3,.div4").fadeToggle("slow");
    $(".div2-text").fadeToggle("slow");
    $(this).toggleClass("front","slow");
});

$(".div3").click(function(){
    $(".div1,.div2,.div4").fadeToggle("slow");
    $(".div3-text").fadeToggle("slow");
    $(this).toggleClass("front","slow");
});

$(".div4").click(function(){
    $(".div1,.div3,.div2").fadeToggle("slow");
    $(".div4-text").toggle();
    $(this).toggleClass("front","slow");
});






});