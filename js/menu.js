$(document).ready(function() {
    
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    
    $('.overlay a').click(function() {
        $('#overlay').removeClass('open');
        $('#toggle').toggleClass('active');
    });
});
