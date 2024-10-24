$(document).ready(function () {
    var $successSection = $('.success');
    var $numElements = $('.num');
    var scrolled = false;

    $(window).scroll(function () {
        var offset = $successSection.offset().top;
        var scrollTop = $(window).scrollTop();
        var height = $(window).height();

        if (scrollTop + height > offset && !scrolled) {
            scrolled = true;
            $numElements.each(function () {
                $(this).prop('counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
}); 

