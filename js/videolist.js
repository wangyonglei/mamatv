$(document).ready(function() {


	var swiper1 = new Swiper('.videolist_nav', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 0,
	});
	var swiper2 = new Swiper('.videolist_content', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween:0 ,
		controlBy:'container',
		// effect : 'flip',
		onSlideChangeEnd: function(swiper){
		      alert(swiper.activeIndex)
		    }
		
	});
	swiper2.params.control = swiper1;


// 默认的导航条状态
	var el_nav = $('.videolist_nav .swiper-slide');
	var morenW = el_nav.eq(0).width();
	$('.videolist_nav').find('p').css({
		'width':morenW+'px',
		'left': '20px'
	});

// 导航与内容上下关联
	// var el_content = $('.videolist_content .swiper-slide');
	el_nav.click(function() {
		var nav_index = el_nav.index($(this));
		el_nav.eq(nav_index).addClass("nav_act").siblings().removeClass('nav_act');

		swiper2.slideTo(nav_index, 300, false)


		var nav_width = $(this).width();
		var lengths=20;//默认导航边距
		for (var i = 0; i < nav_index; i++) {
			length = el_nav.eq(i).width()+40;
			lengths = lengths + length;
			
		}
		$('.videolist_nav').find('p').stop(true).animate({
					'width':nav_width,
					'left':lengths
				});
		

	});	
});