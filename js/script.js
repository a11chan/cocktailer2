$(document).ready(function () {
    
    
    // 조건 필터링
    var tasteFilter = $(".submenu input");
    var targetList = $(".carouselBox > .itemBox");
    var targetList2 = $(".pickedBox > li > label");
    targetList2.hide();
    
    tasteFilter.click(function () {
        targetList.hide();
        targetList2.hide();
        var targetValue = [];
        tasteFilter.filter(":checked").each(function () {
            targetValue.push("." + $(this).val());
        });

        var targetClass = targetValue.join(", ");

        $(targetClass).fadeIn();
        console.log(targetClass);

    });


    /* 선택된 taste 모든 모양 먼저 만들고
    $(targetClass).fadeIn(); 에 들어갈 클래스 이름이랑 같게 해서 보여지게 하기
    선택된 항목을 클릭하면 필터링 취소되도록
    체크박스로 만들고, 체크 해제되면 사라지게도

    스크립트보다는 라벨이랑 체크박스 연동해서 처리 가능한지 우선 알아보기

    label for 는 input과 사촌 관계여도 되는가?
        1. 가능
            css로 가면 코드가 너무 늘어남, 각각의 TASTE마다 트리거 설정 필요
        2. 불가능

    그렇다면 targetClass처럼 이미 생성된 배열 활용하는 게 간단할 듯
        선택된 클래스를 보이게
        반대로 선택된 클래스를 .pickedBox에서 클릭하면 선택해제
    13행에서처럼 체크된 항목을 담아서 숨겨주면 됨, 그 대상들은
        1. pickingBox label
        2. pickedBox label(클릭한 자기자신)
        3. .itemBox
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