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

  $('[data-toggle="popover"]').popover({
    html: true
  });

  $('.custom-button-navbar-toggler').on("click", function () {
    if ($('.fas.fa-bars').hasClass('hidden')) {
      $('.fas.fa-bars').removeClass('hidden');
      $('.fas.fa-times').addClass('hidden');
      $('.addition-class').addClass('hidden');
    } else {
      {
        $('.fas.fa-bars').addClass('hidden');
        $('.fas.fa-times').removeClass('hidden');
        $('.addition-class').removeClass('hidden');
      }
    }
  });
});
