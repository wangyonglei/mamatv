$(document).ready(function() {
	var InitUrl = 'http://api.golfabc.cn/';
	var el_nav = $('.videolist_nav .swiper-slide');
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
		spaceBetween: 0,
		controlBy: 'container',
		// effect : 'flip',
		onSlideChangeEnd: function(swiper) {
			var content_index = swiper.activeIndex
			el_nav.eq(content_index).addClass('nav_act').siblings().removeClass('nav_act')
			var lengthz = 20; //默认导航边距
			for (var i = 0; i < content_index; i++) {
				length = el_nav.eq(i).width() + 40;
				lengthz = lengthz + length;
			}
			var nav_W = el_nav.eq(content_index).width();
			$('.videolist_nav').find('p').stop(true).animate({
				'width': nav_W,
				'left': lengthz
			});

			currentPage = content_index
			currentPageDate()
		}
	});
	swiper2.params.control = swiper1;
	// 默认的导航条状态
	var morenW = el_nav.eq(0).width();
	$('.videolist_nav').find('p').css({
		'width': morenW + 'px',
		'left': '20px'
	});
	// 默认第一屏数据加载
	var html_video = '';
	var currentPage = 1
	var thisNum = 0;
	
		
	function currentPageDate() {
		$.ajax({
				url: 'js/list.json',
				type: 'GET',
				dataType: 'json',
				data: {
					currentPage: currentPage
				},
				success: function(data) {
					var videolistdata = data.data;
					for (var i = 0; i < 1; i++) {
						html_video += '<div class="videolist_top">' +
							'<a href="videodetail.html">' +
							'<div class="videolist_img">' +
							'<img src="' + InitUrl + '' + videolistdata[i].img + '" class="videolist_topimg" alt="">' +
							'<div class="videolist_toptitle">' + videolistdata[i].title + '</div>' +
							'<div class="videolist_toptime">' +
							'<p class="videolist_topbg"></p>' +
							'<p class="videolist_topdate">' + videolistdata[i].duration + '</p>' +
							'</div>' +
							'</div>' +
							'</a>' +
							'</div>'
					}
					html_video += '<div class="videolist_title">' +
						'热门推荐' +
						'<span><a href="allvideo.html">···</a></span>' +
						'</div>' +
						'<div class="videolist_con">' +
						'<ul>'
					for (var i = 1; i < videolistdata.length; i++) {
						html_video += '<li>' +
							'<a href="videodetail.html">' +
							'<div class="videolist_conimg">' +
							'<img src="' + InitUrl + '' + videolistdata[i].img + '" alt=""></div>' +
							'<div class="videolist_contit">' + videolistdata[i].title + '</div>' +
							'<div class="videolist_num">' + videolistdata[i].viewCount + '</div>' +
							'<div class="videolist_toptime">' +
							'<p class="videolist_topbg"></p>' +
							'<p class="videolist_topdate">' + videolistdata[i].duration + '</p>' +
							'</div>' +
							'</a>' +
							'</li>'
					}
					html_video += '</ul></div>'
					$('.videolist_content').find('.swiper-slide').eq(thisNum).html(html_video)
				}
			})
	}

	currentPageDate()
	// 导航与内容上下关联
	// var el_content = $('.videolist_content .swiper-slide');
	el_nav.click(function() {
		var nav_index = el_nav.index($(this));
		el_nav.eq(nav_index).addClass("nav_act").siblings().removeClass('nav_act');
		swiper2.slideTo(nav_index, 300, false)
		var nav_width = $(this).width();
		var lengths = 20; //默认导航边距
		for (var i = 0; i < nav_index; i++) {
			length = el_nav.eq(i).width() + 40;
			lengths = lengths + length;
		}
		$('.videolist_nav').find('p').stop(true).animate({
			'width': nav_width,
			'left': lengths
		});
		currentPage = nav_index + 1
		thisNum = nav_index
			// 点击对应数据加载
		currentPageDate()
	});



// 滚动加载
	// var stop = true;
	// page = 2;
	// $(window).scroll(function() {
	// 	var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
	// 	if ($(document).height() <= totalheight) {
	// 		if (stop == true) {
	// 			stop = false;
	// 			$.ajax({
	// 				url: 'http://v.jgsports.com.cn/user/Venue/getList',
	// 				type: 'Get',
	// 				dataType: 'json',
	// 				data: {
	// 					page: page,
	// 					limit: 10,
	// 				},
	// 				success: function(data) {
	// 					var listdata = data.data;
	// 					var ballhtml = "";
	// 					for (var i = 0; i < listdata.length; i++) {
	// 						ballhtml += '<li><a href="golfdetail.html?id=' + listdata[i].id + '">' + listdata[i].title + '<p class="jiao"></p></a></li>';
	// 					};
	// 					$(".loading").before(ballhtml);
	// 					stop = true;
	// 					page++;
	// 				}
	// 			})
	// 		}
	// 	}
	// });




});