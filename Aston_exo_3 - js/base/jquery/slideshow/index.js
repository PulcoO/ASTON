$(document).ready(function(){

    $('.slideshow').css('position','relative');
    $('.slideshow > img').css('position','absolute');
    
    $('.slideshow > img:gt(0)').hide();

    $('.slideshow').append('<div class="btns"><a href="#" class:"before">PRECEDENT</a> | <a href="#" class:"next">SUIVANT</a></div>');

    $('.btns').css({
        position : 'absolute',
    });


    $('.slideshow > .btns > a.next').on('click', function(event){
        event.preventDefault();
        console.log(event)
        let nextImg = $('.slideshow > img:visible').next('img');

            if(nextImg.length < 1){
                nextImg = $('.slideshow > img:first');
            }
        $('.slideshow > img:visible').fadeOut();
        nextImg.fadeIn();
    });



    $('.slideshow > .btns > a.before').on('click', function(event){
        event.preventDefault();
        console.log(event)
        let beforeImg = $('.slideshow > img:visible').prev('img');

            if(beforeImg.length < 1){
                beforeImg = $('.slideshow > img:last');
            }
        $('.slideshow > img:visible').fadeOut();
        beforeImg.fadeIn();
    });

    function autoplay(){
        $('.slideshow .next').trigger('click');
    }

    setInterval(autoplay, 3000);
})