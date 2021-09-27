$(document).ready(function () {
    
    
    // 조건 필터링
    var tasteFilter = $(".submenu input");
    var targetList = $(".carouselBox > .itemBox");
    var targetList2 = $(".pickedBox > li > label");
    var chevron = $(".Lchevron, .Rchevron, .Bchevron");

    targetList.hide();
    targetList2.hide();
    chevron.hide();
    
    tasteFilter.click(function () {
        targetList.hide();
        targetList2.hide();

        var targetValue = [];
        tasteFilter.filter(":checked").each(function () {
            targetValue.push("." + $(this).val());
        });
        var targetClass = targetValue.join(", ");

        $(targetClass).fadeIn(); // 선택된 클래스 전부 표시(문서전체)
        
        if (targetClass == "") { chevron.hide(); }
        if (targetClass != "") { chevron.fadeIn(); }
        console.log(targetClass);

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
        // console.log($("#noseBtn").is(":checked"))
    });
    


    // 검색 결과 출력 토글
    $(".itemShow").hide();
    $("#searchBtn").click(function(){
        $(".itemShow").fadeToggle();
    });
    


    // .pickedBox 좌우 스크롤
    $(".toLeft1").click(function(){
        $('.pickedBox > li').eq(0).animate({scrollLeft: "-=100"}, 30, 'swing');
    });
    $(".toRight1").click(function(){
        $('.pickedBox > li').eq(0).animate({scrollLeft: "+=100"}, 30, 'swing');
    });
    $(".toLeft2").click(function(){
        $('.pickedBox > li').eq(1).animate({scrollLeft: "-=100"}, 30, 'swing');
    });
    $(".toRight2").click(function(){
        $('.pickedBox > li').eq(1).animate({scrollLeft: "+=100"}, 30, 'swing');
    });
    $(".toLeft3").click(function(){
        $('.pickedBox > li').eq(2).animate({scrollLeft: "-=100"}, 30, 'swing');
    });
    $(".toRight3").click(function(){
        $('.pickedBox > li').eq(2).animate({scrollLeft: "+=100"}, 30, 'swing');
    });
    $(".toLeft4").click(function(){
        $('.pickedBox > li').eq(3).animate({scrollLeft: "-=100"}, 30, 'swing');
    });
    $(".toRight4").click(function(){
        $('.pickedBox > li').eq(3).animate({scrollLeft: "+=100"}, 30, 'swing');
    });


    // .itemShow 좌우 스크롤
    $(".toLeft").click(function(){
        $('.carouselBox').animate({scrollLeft: "-=200"}, 30, 'swing');
    });
    $(".toRight").click(function(){
        $('.carouselBox').animate({scrollLeft: "+=200"}, 30, 'swing');
    });


}); // end of script