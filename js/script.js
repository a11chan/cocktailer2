$(document).ready(function () {
    
    
    // 조건 필터링
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


    // 검색 결과 출력 토글
    $(".itemShow").hide();
    $("#searchBtn").click(function(){
        $(".itemShow").fadeToggle();
    });
    

    // 좌우 스크롤
    $(".toLeft").click(function(){
        $('.carouselBox').animate({scrollLeft: "-=200"}, 30, 'swing');
    });
    $(".toRight").click(function(){
        $('.carouselBox').animate({scrollLeft: "+=200"}, 30, 'swing');
    });


}); // end of jQuery