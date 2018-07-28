$(document).ready(() => {

    $("#button1").click(function () {
        $("#modalMain").css("display", "block");
    })
    $(".close").click(function () {
        $("#modalMain").css("display", "none");
    })
    $(".close1").click(function () {
        $("#modalMain").css("display", "none");
    })
    $(window).click(function (event) {
        if ($(event.target).is("#modalMain")) {
            $("#modalMain").css("display", "none");
        }
    })

}) // end doc ready