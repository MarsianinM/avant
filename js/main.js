$(function($) {

    const section = $('.section'),
        nav = $('.nav-menu'),
        navHeight = nav.outerHeight(); // получаем высоту навигации

    // поворот экрана
    window.addEventListener('orientationchange', function () {
        navHeight = nav.outerHeight();
    }, false);

    $(window).on('scroll', function () {
        addClassMenu();
    });

    function addClassMenu(text_stop = false){
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - navHeight - 15,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active');
                section.removeClass('active');

                $(this).addClass('active1');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
                let text_a = nav.find('a[href="#' + $(this).attr('id') + '"] .title').text();
                if($(this).hasClass('bg-black')){
                    nav.addClass('white');
                }else{
                    nav.removeClass('white');
                }
                let activ_text = $('.nav-menu a.active .title').text();
                let text_this = nav.find('#text').text();
                if(activ_text != text_this){
                    nav.find('#text').fadeOut(100);
                    setTimeout(function(){
                        nav.find('#text').text($('.nav-menu a.active .title').text());
                        nav.find('#text').fadeIn(100);
                    },488);
                }
            }
        });
    }
    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - navHeight
        }, 487);

        return false;
    });
    addClassMenu();
    /*if(nav.find('a.active').length == 0){
        nav.find('li:last-child a').addClass('active');
    }*/
});