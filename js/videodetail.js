$(document).ready(function() {
	var swiper = new Swiper('.like_video', {
		pagination: '.swiper-pagination',
		slidesPerView: 2,
		paginationClickable: true,
		spaceBetween: 10,
		freeMode: true
	});
	var id = decodeURIComponent((new RegExp('[?|&]id=' + '([^&;]+?)(&|#|;|$)', "ig").exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
	$.ajax({
			url: '',
			type: 'GET',
			dataType: 'json',
			data: {
				id: id
			},
		})
		.done(function() {
			var detail = '';
			detail += ' <div class="main-wrap">' +
				'<video ishivideo="true" autoplay="true" isrotate="false" autoHide="true">' +
				'<source src="http://www.html5videoplayer.net/videos/madagascar3.mp4" type="video/mp4"></video>' +
				'</div>' +
				'<div class="bo_title">站着换尿布</div>' +
				'<div class="bo_tag">卫生<span>#幼儿早教#</span></div>'
			$('.videodetail_v').html(detail)
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
});