$(document).ready(function () {
    $(".product-title").click(function () {
        $(".issues").slideUp(500);
        $(this).next().slideDown(500);
        $(".product-title .green-outer").addClass("orange-outer");
        $(this).children().eq(0).removeClass("orange-outer");
    });
});