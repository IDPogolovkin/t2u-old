
    let $phm = $('#phm');
    let $infor = $('#infor');
    let $gum = $('#gum');
    let $speech = $('#speech');
    let $ns = $('#ns');
    let $other = $('#other');
    let $all = $('#all');

    // id = "english", math, kaz-history, geo, physics, world-history, psycho, logoped, speech-art
    // chess cs chop est competitive  mental-arithmetics

    $phm.click(() => {
        setTimeout(() => {
            $('#math').show(800);
            $('#physics').show(800);
            $('#mental-arithmetics').show(800);
            $('#english').hide(1000);
            $('#kaz-history').hide(1000);
            $('#geo').hide(1000);
            $('#world-history').hide(1000);
            $('#psycho').hide(1000);
            $('#logoped').hide(1000);
            $('#speech-art').hide(1000);
            $('#chess').hide(1000);
            $('#cs').hide(1000);
            $('#chop').hide(1000);
            $('#est').hide(1000);
            $('#competitive').hide(1000);
        }, 500);
    });

    $infor.click(() => {
        setTimeout(() => {
            $('#math').hide(1000);
            $('#physics').hide(1000);
            $('#mental-arithmetics').hide(1000);
            $('#english').hide(1000);
            $('#kaz-history').hide(1000);
            $('#geo').hide(1000);
            $('#world-history').hide(1000);
            $('#psycho').hide(1000);
            $('#logoped').hide(1000);
            $('#speech-art').hide(1000);
            $('#chess').hide(1000);
            $('#cs').show(800);
            $('#chop').hide(1000);
            $('#est').hide(1000);
            $('#competitive').show(800);
        }, 500);
    });

    $gum.click(() => {
        setTimeout(() => {
            $('#math').hide(1000);
            $('#physics').hide(1000);
            $('#mental-arithmetics').hide(1000);
            $('#english').show(800);
            $('#kaz-history').show(800);
            $('#geo').hide(1000);
            $('#world-history').show(800);
            $('#psycho').hide(1000);
            $('#logoped').hide(1000);
            $('#speech-art').hide(1000);
            $('#chess').hide(1000);
            $('#cs').hide(1000);
            $('#chop').show(800);
            $('#est').hide(1000);
            $('#competitive').hide(1000);
        }, 500);
    });
    $speech.click(() => {
        setTimeout(() => {
            $('#math').hide(1000);
            $('#physics').hide(1000);
            $('#mental-arithmetics').hide(1000);
            $('#english').hide(1000);
            $('#kaz-history').hide(1000);
            $('#geo').hide(1000);
            $('#world-history').hide(1000);
            $('#psycho').hide(1000);
            $('#logoped').show(800);
            $('#speech-art').show(800);
            $('#chess').hide(1000);
            $('#cs').hide(1000);
            $('#chop').hide(1000);
            $('#est').hide(1000);
            $('#competitive').hide(1000);
        }, 500);
    });
    $ns.click(() => {
        setTimeout(() => {
            $('#math').hide(1000);
            $('#physics').hide(1000);
            $('#mental-arithmetics').hide(1000);
            $('#english').hide(1000);
            $('#kaz-history').hide(1000);
            $('#geo').show(800);
            $('#world-history').hide(1000);
            $('#psycho').hide(1000);
            $('#logoped').hide(1000);
            $('#speech-art').hide(1000);
            $('#chess').hide(1000);
            $('#cs').hide(1000);
            $('#chop').hide(1000);
            $('#est').show(800);
            $('#competitive').hide(1000);
        }, 500);
    });
    $other.click(() => {
        setTimeout(() => {
            $('#math').hide(1000);
            $('#physics').hide(1000);
            $('#mental-arithmetics').hide(1000);
            $('#english').hide(1000);
            $('#kaz-history').hide(1000);
            $('#geo').hide(1000);
            $('#world-history').hide(1000);
            $('#psycho').show(800);
            $('#logoped').hide(1000);
            $('#speech-art').hide(1000);
            $('#chess').show(800);
            $('#cs').hide(1000);
            $('#chop').hide(1000);
            $('#est').hide(1000);
            $('#competitive').hide(1000);
        }, 500);
    });
    $all.click(() => {
        setTimeout(() => {
            $('#math').show(800);
            $('#physics').show(800);
            $('#mental-arithmetics').show(800);
            $('#english').show(800);
            $('#kaz-history').show(800);
            $('#geo').show(800);
            $('#world-history').show(800);
            $('#psycho').show(800);
            $('#logoped').show(800);
            $('#speech-art').show(800);
            $('#chess').show(800);
            $('#cs').show(800);
            $('#chop').show(800);
            $('#est').show(800);
            $('#competitive').show(800);
        }, 500);
    });
    