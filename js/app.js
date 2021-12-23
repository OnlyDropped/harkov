$('.slider__inner').slick({
  arrows: true,
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1,
  //fade: true,
  cssEase: 'linear',
  //autoplay: true,
  //autoplaySpeed: 500,
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-right.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-left.svg" alt=""></button>',
})
$('.hit__inner').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: 'linear',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-right.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-left.svg" alt=""></button>',
})

$('.collection__inner').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-right.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-left.svg" alt=""></button>',
})

	$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});