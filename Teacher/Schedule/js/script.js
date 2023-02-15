$(document).ready(function() {

    $("#add").click(function() {
        save = $(".example").clone().appendTo(".timeSetter").removeClass();
        $(save).addClass("schedule-lesson")
        $(".delete").click(function() {
            if ($(this).parent().hasClass("schedule-lesson")) {
                del = $(".schedule-lesson").removeClass();
                del.addClass("schedule-lesson");
                detachBtn = $(this).parent().remove();
            } else {
                detachBtn = $(this).parent().remove();
            }

        });
    });
});