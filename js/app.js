 $('.product-content__slider-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  arrows: true,
  fade: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-right.svg" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-left.svg" alt=""></button>',
  asNavFor: '.product-content__slider-small'
});
$('.product-content__slider-small').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-content__slider-big',
  dots: true,
  //centerMode: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
});




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

$('.slider-inner').slick({
  cssEase: 'linear',
  arrows: true,
  dots: false,
  fade: true,
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

$('.content-header__select').styler({

});





$('.content-header__select').on('click', function () {
  $('.content-header .jq-selectbox__trigger').toggleClass('active');
});
 $(".filter-sidebar__range").ionRangeSlider({
   type: "double",
   onStart: function (data){
    $('.filter-sidebar__price-from').text(data.from);
    $('.filter-sidebar__price-to').text(data.to);
  },
  onChange: function (data) {
    $('.filter-sidebar__price-from').text(data.from);
    $('.filter-sidebar__price-to').text(data.to);
  },
 });

 $(".filter-sidebar__height").ionRangeSlider({
   type: "double",
   onStart: function (data){
    $('.filter-sidebar__from').text(data.from);
    $('.filter-sidebar__to').text(data.to);
  },
  onChange: function (data) {
    $('.filter-sidebar__from').text(data.from);
    $('.filter-sidebar__to').text(data.to);
  },
 });

$(".filter-sidebar__width").ionRangeSlider({
   type: "double",
   onStart: function (data){
    $('.filter-sidebar__from-price').text(data.from);
    $('.filter-sidebar__from-to').text(data.to);
  },
  onChange: function (data) {
    $('.filter-sidebar__from-price').text(data.from);
    $('.filter-sidebar__from-to').text(data.to);
  },
 });


$(".filter-sidebar__length").ionRangeSlider({
   type: "double",
   onStart: function (data){
    $('.filter-sidebar__old').text(data.from);
    $('.filter-sidebar__new').text(data.to);
  },
  onChange: function (data) {
    $('.filter-sidebar__old').text(data.from);
    $('.filter-sidebar__new').text(data.to);
  },
 });

 $(".filter-sidebar__base").ionRangeSlider({
   type: "double",
   onStart: function (data){
    $('.filter-sidebar__base-to').text(data.from);
    $('.filter-sidebar__base-from').text(data.to);
  },
  onChange: function (data) {
    $('.filter-sidebar__base-to').text(data.from);
    $('.filter-sidebar__base-from').text(data.to);
  },
 });




jQuery(document).ready(function($){
	//open/close mega-navigation
	$('.cd-dropdown-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//close meganavigation
	$('.cd-dropdown .cd-close').on('click', function(event){
		event.preventDefault();
		toggleNav();
	});

	//on mobile - open submenu
	$('.has-children').children('a').on('click', function(event){
		//prevent default clicking on direct children of .has-children 
		event.preventDefault();
		var selected = $(this);
		selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
	});

	//on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
	var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
	$('.cd-dropdown-content').menuAim({
        activate: function(row) {
        	$(row).children().addClass('is-active').removeClass('fade-out');
        	if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
        },
        deactivate: function(row) {
        	$(row).children().removeClass('is-active');
        	if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
        		$('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
        		$(row).children('ul').addClass('fade-out')
        	}
        },
        exitMenu: function() {
        	$('.cd-dropdown-content').find('.is-active').removeClass('is-active');
        	return true;
        },
        submenuDirection: submenuDirection,
    });

	//submenu items - go back link
	$('.go-back').on('click', function(){
		var selected = $(this),
			visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
		selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
	}); 

	function toggleNav(){
		var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
		$('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
		$('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
		if( !navIsVisible ) {
			$('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('.has-children ul').addClass('is-hidden');
				$('.move-out').removeClass('move-out');
				$('.is-active').removeClass('is-active');
			});	
		}
	}

	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}
});



