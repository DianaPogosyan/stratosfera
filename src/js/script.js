$(document).ready(function() {
    let burger = $('.menu__btn');
    let hiddenMenu = $('.menu__inner');
    let back = $('.menu__back')
    burger.on('click', function() {
        hiddenMenu.slideToggle('fast');
        burger.toggleClass('menu__btn-close');
        hiddenMenu.animate({left: '0'}, 'fast');
    });
    
    let menu1 = $('.menu__1lvl');
    let menu2 = $('.menu__2lvl');


    function menuSlide(item, left, close) {
        item.children().find('a').on("click", function (e) {
            e.preventDefault();   
            hiddenMenu.addClass('slide-left').animate({left: left});
            $(this).parent().siblings().find('ul').hide();
            $(this).siblings('ul').show().addClass('menu-active');
            $(this).parent().parent().find(back).on('click', function(){
                hiddenMenu.animate({left: close}, 'fast');
            });
        });
    }

    menuSlide(menu1, '-100%', '0');
    menuSlide(menu2, '-200%', '-100%');

});