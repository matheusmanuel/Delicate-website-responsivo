$('#scroll-up').css('display', 'none');
$('.menu-mobile').click(function () {
    $('.menu-mobile ul').slideToggle();
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    var header = document.querySelector('.fixed');
    if (scroll_position > 500) {
        header.style.backgroundColor = 'rgb(194, 139, 64)';
        header.style.boxShadow = "-3px 2px 10px rgba(0, 0, 0, 0.281)";      
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = "-3px 2px 10px transparent";      
     
    }
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 532) {
        $('#scroll-up').fadeIn(1000);
    } else {
        $('#scroll-up').css('display', 'none');
    }
});

$('nav a,.scrollup').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();
    $('html,boby').animate({
        scrollTop: targetOffset - menuHeight - 30
        }, 700);
});