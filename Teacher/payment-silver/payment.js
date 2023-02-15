$(document).ready(function() {
    $(".number-minus").click(function() {
        quantity = $(".input-num").val();
        cost = $(".cost1").text();
        save = cost.split(' ');
        str = save[0] * quantity + " " + save[1];
        $(".cost").text(str);
        $(".total").text(str);

    });
    $(".number-plus").click(function() {
        quantity = $(".input-num").val();
        cost = $(".cost1").text();
        save = cost.split(' ');
        str = save[0] * quantity + " " + save[1];
        $(".cost").text(str);
        $(".total").text(str);
    });
});