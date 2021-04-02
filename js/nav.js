$(function() {
    $(".nav-list li").hover(function() {
        var $subNav = $(this).children(".nav-list-sub");
        $subNav.stop().slideToggle(180);
    });
});