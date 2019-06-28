$(document).ready(function (){
    $('.accordeon > div:not(div:first)').hide();
    $('.accordeon > h2').on('click',function(){
        let content = $(this).next('div');
        if (!content.is(':visible')){
            $('.accordeon > div').slideUp();
            content.slideDown();
        }
    })
});


