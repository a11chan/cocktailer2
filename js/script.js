$(document).ready(function () {
    
    
    // 조건 필터링
    var tasteFilter = $(".submenu input");
    var targetList = $(".carouselBox > .itemBox");
    // var targetList2 = $(".pickedBox > li > label");
    targetList.hide();
    // targetList2.hide();

    tasteFilter.click(function () {
    var targetValue = [];
    tasteFilter.filter(":checked").each(function () {
        targetValue.push("." + $(this).val());
    });

    var targetClass = targetValue.join(", ");


    $(targetClass).fadeIn();
    // console.log(targetClass);
    });


    /* 선택된 taste 모든 모양 먼저 만들고
    $(targetClass).fadeIn(); 에 들어갈 클래스 이름이랑 같게 해서 보여지게 하기
    선택된 항목을 클릭하면 필터링 취소되도록
    체크박스로 만들고, 체크 해제되면 사라지게도

    스크립트보다는 라벨이랑 체크박스 연동해서 처리 가능한지 우선 알아보기

    */


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
    

    // 좌우 스크롤
    $(".toLeft").click(function(){
        $('.carouselBox').animate({scrollLeft: "-=200"}, 30, 'swing');
    });
    $(".toRight").click(function(){
        $('.carouselBox').animate({scrollLeft: "+=200"}, 30, 'swing');
    });


}); // end of jQuery