$(document).ready(function() {
    $(".button").click(function() {
        save = $(this).parent().parent().find(".name_job").text();
        $("#popName").text(save);
    });
});