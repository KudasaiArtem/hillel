$(document).ready(function () {
    $("#rectangle").click((e) => {
        $(".block")
        .animate({
            left: 720,
        }, 1000)

        .animate({
            top: 256,
        }, 1000)

        .animate({
            left: 0,
        }, 1000)

        .animate({
            top: 0,
        }, 1000)
    })

    let side = 512;

    $("#triangle").click((e) => {
        $(".block")
        .animate({
            left: side,
        }, 650)

        .animate({
            left: side / 2,
            top: Math.sqrt(side**2 - (side / 2)**2),
        }, 650)

        .animate({
            left: 0,
            top: 0,
        }, 650)
    })

    let status = false;
    const widthVar = $(".block").css("width");
    const heightVar = $(".block").css("height");

    console.log(widthVar);
    console.log(heightVar);

    $("#scale").click((e) => {
        if (status === false) {
            $(".block").animate({
                height: 400,
                width: 400,
                opacity: 0,
            })

            status = true;
        } else if (status === true) {
            $(".block").animate({
                height: widthVar,
                width: heightVar,
                opacity: 1,
            })

            status = false;
        }
    })
});