$(document).ready(function () {
  $('.feedback-slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  $('[data-toggle="popover"]').popover();

  $('.custom-button-navbar-toggler').on("click", function () {
    if ($('.fas.fa-bars').hasClass('hidden')) {
      $('.fas.fa-bars').removeClass('hidden');
      $('.fas.fa-times').addClass('hidden');
      $('.addition-class').addClass('hidden');
    } else {
      {
        $('.custom-button-navbar-toggler .fas.fa-bars').addClass('hidden');
        $('.custom-button-navbar-toggler .fas.fa-times').removeClass('hidden');
        $('.addition-class').removeClass('hidden');
      }
    }
  });

  $('.logo-messenger').click(function () {
    $('.chatbox').addClass('active');
  });

  $('.close-button').on('click', function () {
    $('.chatbox').removeClass('active');
  })
});
