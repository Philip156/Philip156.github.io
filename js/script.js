$(document).ready(function() {
    
    $('#loader').delay(1000).fadeOut();
    $('#preloader').delay(1500).fadeOut("slow");
    
    $('#goFirst').delay(1500).animate({top: '+=50px'}, 1000);
    $('#goSecond').delay(2000).animate({top: '+=50px'}, 1000);
    $('#goThird').delay(2500).animate({top: '+=50px'}, 1000);
    $('#goFourth').delay(0000).animate({top: '+=50px'}, 1000);
        
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    
    function toggleGradients() {
        var gradientTargetCopy = $(".gradientTarget").clone();
        var gradientsOff = true;
        return function() {
            if(gradientsOff) {
            $('.gradientTarget').gradientify({
                gradients: [
                { start: [49,76,172], stop: [242,159,191] },
                { start: [255,103,69], stop: [240,154,241] },
                { start: [33,229,241], stop: [235,236,117] }
                ]
            });
            } else {
                $('.gradientTarget').remove();
                $('.header').after(gradientTargetCopy);
                gradientTargetCopy = $(".gradientTarget").clone();
            };
            gradientsOff =! gradientsOff;
        };
    };
    $('#goFourth').click(toggleGradients());
    
    $('.header a').click(function() {
        $(this).find('span').toggleClass("glyphicon-minus");
    });
    
    scrollTo();
    
});

function scrollTo() {
    $('.header a').click(function(e) {
        //e.preventDefault();
        var sectionId = e.currentTarget.id + "Section";
        $('html body').animate(
            {scrollTop: $("#" + sectionId).offset().top}, 1000
        );
    });    
};