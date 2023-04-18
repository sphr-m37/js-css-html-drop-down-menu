$(document).ready(function () {
    console.log("hiii")
    $(".menu-icon").click(function () {
        $(this).toggleClass("fa-times");
        $(this).toggleClass("fa-bars");
        $(".menu").toggleClass("menu-left");
    });
});