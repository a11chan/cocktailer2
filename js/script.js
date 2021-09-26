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

    // console.log(targetClass);
    });



    // 라디오-체크박스 적용 (inline-block처럼 서로의 특징 혼합)
    $("#noseBtn").click(function(){
        $('input[name="taste"]').not("#noseBtn").prop("checked",false);
    });
    $("#palateBtn").click(function(){
        $('input[name="taste"]').not("#palateBtn").prop("checked",false);
    });
    $("#finishBtn").click(function(){
        $('input[name="taste"]').not("#finishBtn").prop("checked",false);
    });
    $("#typeBtn").click(function(){
        $('input[name="taste"]').not("#typeBtn").prop("checked",false);
    });
    // console.log($("#noseBtn").is(":checked"))
    

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