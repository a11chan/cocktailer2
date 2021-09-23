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
});