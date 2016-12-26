$(document).ready(function() {
	var InitUrl = 'http://api.golfabc.cn/'
	var fileName = decodeURIComponent((new RegExp('[?|&]fileName=' + '([^&;]+?)(&|#|;|$)', "ig").exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
	var id = decodeURIComponent((new RegExp('[?|&]id=' + '([^&;]+?)(&|#|;|$)', "ig").exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
	$.ajax({
			url: 'js/get.json',
			type: 'GET',
			dataType: 'json',
			data: {
				id: id
			},
		})
		.done(function(data) {
			var videodetail = data.data;
			var detail = '';
			detail += ' <div class="main-wrap">' +
				'<video ishivideo="true" autoplay="true" isrotate="false" autoHide="true">' +
				'<source src="' + InitUrl + 'videosX/babystep/' + fileName + '" type="video/mp4"></video>' +
				'</div>' +
				'<div class="bo_title">' + videodetail.title + '</div>' +
				'<div class="bo_tag">'
			for (var i = 0; i < videodetail.tags.length; i++) {
				detail += '<span>#' + videodetail.tags[i].name + '</span>'
			}
			detail += '</div>'
			$('.videodetail_v').html(detail);
			var det_rec = ''
			for (var j = 0; j < data.recommends.length; j++) {
				det_rec += ' <div class="swiper-slide" data-fileNames="'+data.recommends[j].fileName+'" data-id="'+data.recommends[j].id+'">' +
					// '<a href="videodetail.html?id=' + data.recommends[j].id + '&fileName=' + data.recommends[j].fileName + '">' +
					'<img src="' + InitUrl + '' + data.recommends[j].img + '" class="like_img" alt="">' +
					'<div class="like_toptime">' +
					'<p class="like_topbg"></p>' +
					'<p class="like_topdate">02:01</p>' +
					'</div>' +
					'<div class="like_title">站着换尿布</div>' +
					// '</a>' +
					'</div>'
			}
			$('.like_video .swiper-wrapper').html(det_rec)
			var swiper = new Swiper('.like_video', {
				pagination: '.swiper-pagination',
				slidesPerView: 2,
				paginationClickable: true,
				spaceBetween: 10,
				freeMode: true
			});
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

	$('.like_video').on('click', '.swiper-slide', function(event) {
		var fileNames = $(this).attr('data-fileNames')
		var ids = $(this).attr('data-id')
		console.log(ids)
		console.log(fileNames)
		$.ajax({
				url: 'js/get.json',
				type: 'GET',
				dataType: 'json',
				data: {
					id: ids
				},
			})
			.done(function(data) {
				var videodetails = data.data;
				$('.videodetail_v').html('');
				var details = '';
				details += ' <div class="main-wrap">' +
					'<video ishivideo="true" autoplay="true" isrotate="false" autoHide="true">' +
					'<source src="' + InitUrl + 'videosX/babystep/' + fileNames + '" type="video/mp4"></video>' +
					'</div>' +
					'<div class="bo_title">' + videodetails.title + '</div>' +
					'<div class="bo_tag">'
				for (var i = 0; i < videodetails.tags.length; i++) {
					details += '<span>#' + videodetails.tags[i].name + '</span>'
				}
				details += '</div>'
				$('.videodetail_v').html(details);



			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
	});



	function tuijian_video() {
		
	}
});