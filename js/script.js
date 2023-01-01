jQuery(function () {
    var pagetop = $('.top_btn');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});
$(function () {
    $(".hum_menu,.sp_nav li").on('click', function () {
        $('.sp_nav').fadeToggle();
        $('.hum_menu').toggleClass('open');
    });
        $(".hum_menu").click(function () {
            $(this).toggleClass('active');
        });
});
