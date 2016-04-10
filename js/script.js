(function($) {
'use strict';
$(".selecter_basic").selecter();

$(".accordeon .hide-tab").hide().prev().click(function() {
  $(this).parents(".accordeon").find(".hide-tab").not(this).slideUp().prev().removeClass("active");
  $(this).next().not(":visible").slideDown().prev().addClass("active");
});

$('.accordeon li').each(function(i) {
  var number = i + 1;
  $(this).find('.num-tab').text(number);
});

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
  $(this).removeClass('open');
});
    //dropdown-menu hover
    $(".dropdown-menu-lcol a[data-tabname]").mouseenter(function(){
      var tabname = $(this).data('tabname');
      $('.dropdown-menu-rcol[data-source]').hide();
      $('.dropdown-menu-rcol[data-source = ' + tabname + ']').show();
    });
    //dropdown-menu
    $('.navbar-toggle').on('click', function() {
      $('#navbar-mainmenu').show(200);
    });
    $('.close').on('click', function() {
      $('#navbar-mainmenu').hide();
    });
    var w = $(window).width();
    $(window).on('resize', function() {
      if (w >= 992 && $('#navbar-mainmenu').is(':hidden')) {
        $('#navbar-mainmenu').removeAttr('style');
      }
    })

    //открытие формы подбра
    $(".open_filter, .hidden_filter").on('click', function () {
      $(".filter_row").toggleClass('hidden');
      $(".open_filter").toggleClass('hidden');
    });

    //tabs
    $('.presentation a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    })
    //tabs

    // start: radiobox__radio
    $(document).on('click','.radiobox__radio',function(e){
    //$('.radiobox__radio').click(function(e){
      e.preventDefault();
      if ( $(this).hasClass('radiobox__radio_disabled') ){
        return false;
      }
      var control = $(this).find('.radiobox__control'),
      name = $(control).attr('name');

      $('.radiobox__radio:has(input[name="'+ name +'"])')
      .removeClass('radiobox__radio_checked_yes')
      .find('input').prop('checked',false).attr('checked',false);
      $(this).addClass('radiobox__radio_checked_yes');
      $(control).prop('checked', true).attr('checked',true).trigger("change");
    });

    $(document).on('click','.radiobox__radio_label',function(e){
      var label_for = $(this).attr('for'),
      $control   = $('#'+label_for),
      name = $('#'+label_for).attr('name');

      $('label[for='+label_for+'].radiobox__radio').trigger('click');

    });
    // end: radiobox__radio

    var actions_slider = $('.pop-slider');
    actions_slider.owlCarousel({
      items     : 3,
      navClass: [ 'owl-prev', 'owl-next' ],
      loop: true,
      autoplay: true,
      autoplaySpeed : 1000,
      responsiveBaseElement: '.bg-page-bottom',
      margin: 20,
      responsive:{
        0:{
          items:1
        },
        580:{
          items:2
        },
        1000:{
          items:3
        },
        1200:{
          items:3
        },
        1400:{
          items:3
        }
      }
    });
    var actions_slider = $('.actions-slider');
    actions_slider.owlCarousel({
      items: 1,
      dotClass  : "slider-dot",
      dots      : true,
      loop: true,
      autoplay: true,
      autoplaySpeed : 1000
    });

    var drivesfit__carousel = $('.drives-fit__owl-carousel');
    drivesfit__carousel.owlCarousel({
      margin: 6,
      autoWidth: false,
      mouseDrag: false,
        //responsiveBaseWidth: window,
        responsiveBaseElement: '.bg-page-bottom',
        responsive:{
          0:{
            items:1
          },
          580:{
            items:2
          },
          1000:{
            items:3
          },
          1200:{
            items:3
          },
          1400:{
            items:4
          }
        }
      });
    $('.drives-fit__nav-next').click(function() {
      drivesfit__carousel.trigger('next.owl.carousel', [400]);
    });
    $('.drives-fit__nav-prev').click(function() {
      drivesfit__carousel.trigger('prev.owl.carousel', [400]);
    });
})(jQuery);





