$(document).ready(function () {

    // This is the Fullpage jQuery plugin that provides an smooth transtion between sections on your page.
    $('#fullpage').fullpage();

    // This is the Splitchar jQuery Plugin that splits the characters of an element and allows you to style them individually.
    $('.splitchar').splitchar();
    // This is my custom jQuery code that doubles the social media icons when hovered upon and returns it back to it's initial size when no longer hovered upon.
    $('.social').hover(function () {
        $(this).css('transform', 'scale(1.5,1.5)');
    }, function () {
        $(this).css('transform', 'scale(1,1)');
    });
});
