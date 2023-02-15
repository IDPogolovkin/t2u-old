$(document).ready(function() {
    $(".schedule-btn").click(function() {
        $(this).parent().css({ "color": "#b00000" });
    });
});
document.querySelector('.close').addEventListener('click',function() {
    document.querySelector('.popUp').style.display = 'none';
});