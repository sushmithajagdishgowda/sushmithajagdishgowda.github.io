$(document).ready(function() {
    // Splits text into spans for the shaking effect
    $(".shake-text").lettering();

    $(".skill-item").click(function() {
        var $letters = $(this).find(".shake-text span");
        $letters.each(function(index) {
            var $letter = $(this);
            setTimeout(function() {
                $letter.addClass('animate__animated animate__headShake');
                $letter.one('animationend', function() {
                    $letter.removeClass('animate__animated animate__headShake');
                });
            }, index * 60);
        });
    });
});