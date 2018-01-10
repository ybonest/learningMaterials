$(function () {
  $('#fullpage').fullpage({
    sectionsColor: ['#F9DD67', '#84A2D4', '#EF674D', '#FFEEDD'],
    navigation: true,
    afterLoad: function (anchorLink, index) {
      if (index == 2) {
        $('.section-two').find('.list-sofa-right').delay(200).animate({ right: 200, opacity: 1 }, 1500, 'easeOutExpo', function () {
          $(this).children('.list-sofa-font').fadeIn(function () {
            $('.section-two .list-worda').fadeOut(1000).next('.list-wordb').fadeIn(1000);
            $('.list-sofa-more').animate({ height: 218, width: 441 }, 1000, 'easeOutExpo');
            $('.section-two .list-sofa-right').hide();
            $('.section-two .list-sofa-finish').show().animate({ right: 60, top: 20, height: 30, width: 150 }, 1000, 'easeOutExpo');
          });
        });
        $('.down').fadeIn();
      }
      if (index == 3){
        // console.log('dddd');
        $('.down').fadeIn();
      }
      if (index == 4){
        $('.down').fadeIn();
      }
      if (index == 5){
        $('.down').fadeIn();
      }
      if (index == 6){
        $('.down').fadeIn();
      }
      if (index == 7){
        $('.down').fadeIn();
      }
      if(index == 8){
        $(document).on('mousemove',function(e){
          $('.section-eight .qbh-shopping-hands').fadeIn();
          var left = e.pageX - $('.section-eight .qbh-shopping-hands').width()/2;
          var top = e.pageY+10;
          var nowtop = $('.section-eight .qbh-shopping-hands').offset().top;
          if(top <=220){
            $('.section-eight .qbh-shopping-hands').css({zIndex:3,left:left,top:'220px'});
          }else{
            $('.section-eight .qbh-shopping-hands').css({zIndex:3,left:left,top:top});
          }
        })
        $('.section-eight .btn-buy').hover(function(){
          $('.section-eight .qbh-shopping-start-shopping').hide();
          $('.section-eight .qhb-shopping-dong').show();
        },function(){
          $('.section-eight .qbh-shopping-start-shopping').show();
          $('.section-eight .qhb-shopping-dong').hide();
        })
        $('.section-eight .qbh-shopping-again').on('click',function(){
          $.fn.fullpage.moveTo(1);
        });
      }
      // if(index == 3){
      //   $('.section-three .buy-choose-sofa').animate({height:166,width:207,bottom:210,left:'16%'},
      //       900,'easeOutExpo',function () {
      //         $('.section-three .buy-choose-rightO').fadeOut().next('.buy-choose-rightT').fadeIn();
      //         $('.section-three .buy-buy-sofaS').fadeOut().next('.buy-buy-sofaE').fadeIn();
      //   });
      // }
    },
    onLeave: function (index, nextIndex, direction) {
      if(index == 1 && nextIndex == 2){
        $('.down').hide();
      }
      if (index == 2 && nextIndex == 3) {
        $('.section-two .zong-sofa').show().animate({ width: 207, bottom: -365, right: 327 }, 800, function () {
          $('.section-three .buy-choose-rightO').fadeOut().next('.buy-choose-rightT').fadeIn();
          $('.section-three .buy-buy-sofaS').fadeOut().next('.buy-buy-sofaE').fadeIn();
        });
        $('.down').hide();
      }
      if (index == 3 && nextIndex == 4) {
        $('.section-two .zong-sofa').attr('src', './image/qbh-info-rotate-sofa.png').css({ 'bottom': '-400px' }).animate({ width: 207, bottom: -1064, right: 146 }, 800, function () {
          $('.section-four .qbh-info-cart').animate({ left: 1600 }, 800);
          $(this).animate({ right: -800 }, 800, function () {
            $('.section-four .qbh-info-address-box').fadeIn(800);
            $('.section-four .qbh-info-worda').fadeOut(800).next('.qbh-info-wordb').fadeIn(800);
            $('.section-four .qbh-info-cart').css('display', 'none');
            $(this).css('opacity', '0');
          });
        });
        $('.down').hide();
      }
      if (index == 4 && nextIndex == 5) {
        $('.section-five div.hand').animate({ height: 375 }, 1000, function () {
          $('.section-five .qbh-payment-monse-start').css('opacity', '0');
          $('.section-four .qbh-info-rotate-sofa').show().animate({ bottom: '-598px', left: '382px' }, 800, function () {
            $(this).hide();
            $('.section-five .qbh-info-rotate-sofa').show();
          });
          $('.section-five .qbh-payment-bill').animate({ top: '54px' }, 800);
        });
        $('.down').hide();
      }
      if (index == 5 && nextIndex == 6) {
        $('.section-four .qbh-info-rotate-sofa').show().animate({width:'70px',left: '424px',bottom: '-917px'},1200);
        $('.section-six .qbh-delivery-box').animate({ right: '840px', bottom: '410px' }, 1200, function () {
          $('.section-six .qbh-delivery-font-end').show();
          $('.section-four .qbh-info-rotate-sofa').css('opacity','0');
          $(this).animate({right: '800px', bottom: '92px', width: '30px'},1000,function(){
            $('.section-six .qbh-delivery-truck-font').animate({opacity:'1'},400);
            $(this).css('opacity','0');
            $('.section-six').animate({'background-position-x': '100%'},1500,function(){
              $('.section-six .qbh-delivery-deliveryman').show().animate({width: '252px', top: '-295px', right: '-158px'},1000,function(){
                //请收货
                $('.qbh-delivery-shouhuo').show().animate({width:'139px'},400,function(){
                  $('.section-six .qbh-delivery-door').show(400,function(){
                    $('.section-six .qbh-delivery-buyer').show().animate({width:'87px'},800);
                  });
                });
              });
            });
          });
        })
        $('.down').hide();
      }
      if(index == 6 && nextIndex == 7){
        $('.section-seven .main-star').addClass('activeforimgwidth');
        $('.down').hide();
      }
    }
  });
});