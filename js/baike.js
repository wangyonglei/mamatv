$(document).ready(function() {
	var el_nav = $('.baike_nav .swiper-slide');


	var swiper1 = new Swiper('.baike_nav', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 0,
	});
	var swiper2 = new Swiper('.baike_content', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween:0 ,
		controlBy:'container',
		// effect : 'flip',
		onSlideChangeEnd: function(swiper){
		      var content_index = swiper.activeIndex
		      el_nav.eq(content_index).addClass('nav_act').siblings().removeClass('nav_act')
		      var lengthz=20;//默认导航边距
		      for (var i = 0; i < content_index; i++) {
		      	length = el_nav.eq(i).width()+40;
		      	lengthz = lengthz + length;
		      	
		      }
		      var nav_W = el_nav.eq(content_index).width();

		      $('.baike_nav').find('p').stop(true).animate({
		      			'width':nav_W,
		      			'left':lengthz
		      		});

		    }
		
	});
	swiper2.params.control = swiper1;


// 默认的导航条状态
	var morenW = el_nav.eq(0).width();
	$('.baike_nav').find('p').css({
		'width':morenW+'px',
		'left': '20px'
	});

// 导航与内容上下关联
	// var el_content = $('.baike_content .swiper-slide');
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
		$('.baike_nav').find('p').stop(true).animate({
					'width':nav_width,
					'left':lengths
				});
		

	});	




	// 切换标题
	var flg = 0; //0为展开 1为闭合
	$('.baike_title').click(function(){
		
		$(this).parent().toggleClass('addli')
		$(this).find('.j').toggleClass('addj')
		
	})
});