$(document).ready(function () {
    var tasteFilter = $(".submenu input");
    var targetList = $(".carouselBox > .itemBox");

    tasteFilter.click(function () {
    var targetValue = [];
    tasteFilter.filter(":checked").each(function () {
        targetValue.push("." + $(this).val());
    });

    var targetClass = targetValue.join(", ");
    targetList.hide();
    $(targetClass).fadeIn();

    console.log(targetClass);
    });

    $(".toLeft").click(function(){
        $('.carouselBox').stop().animate({scrollLeft: "-=200"}, 30, 'swing');
        return false;
    });
    $(".toRight").click(function(){
        $('.carouselBox').stop().animate({scrollLeft: "+=200"}, 30, 'swing');
        return false;
    });


    $(".itemShow").hide();
    $("#searchBtn").click(function(){
        $(".itemShow").fadeToggle();
    });

});