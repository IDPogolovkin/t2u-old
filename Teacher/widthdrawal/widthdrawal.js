$(document).ready(function() {
    $(".input-item").on('input', function() {
        calculaton();
    });

    function calculaton() {
        cost = $(".input-item").val();
        save = cost.split(' ');
        str = save[0] * 1200 + " тг";
        coins = save[0]  + " coins";
        $(".showing").text(str);
        $(".num_coins").text(coins);
    };

    $('.input-card-item1').keyup(function() {
        var foo = $(this).val().split("-").join(""); // remove hyphens
        if (foo.length > 0) {
            foo = foo.match(new RegExp('.{1,4}', 'g')).join("-");
        }
        $(this).val(foo);
    });
});