$(document).ready(function() {
	$.ajax({
		url: list_inf,
		type: 'GET',
		dataType: 'json',
		data: {},
		success: function(data) {
			succ_video();

			if (listdata.length <= 10) {
				$('.loading').html('全部加载完！')
			}
		},
		error: function(data) {
			console.log('error')
		}
	})
	// 成功播放
	function  succ_video(){
		var listdata = data;
		var ballhtml = "";
		for (var i = 0; i < listdata.length; i++) {
			ballhtml += '<li><a href="'+list_de+'?id='+listdata[i].id+'"><div class="information_img"><img src="' + listdata[i].img + '" class="lazy" data-original="' + listdata[i].img + '" alt=""></div><div class="information_r"><h1>' + listdata[i].title + '</h1><p>' + listdata[i].source + '</p></div></a>	</li>';
		};
		$(".loading").before(ballhtml);
	}

	//滑动加载
	var stop = true;
	page = 2;
	$(window).scroll(function() {
		var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop() + 45);
		if ($(document).height() <= totalheight) {
			if (stop == true) {
				stop = false;
				$.ajax({
					url: list_inf,
					type: 'GET',
					dataType: 'json',
					data: {
						page: page,
						limit: 10,
					},
					success: function(data) {
						succ_video();

						stop = true;

						var total = Math.ceil(((page-1) * 10+listdata.length)/10);
						if(page ==total){
							$(".loading").html('Loaded successfully');
							stop = false;
						}
						page++;

					},
					error: function(data) {
						console.log('error')
					}
				})
			}

		}
	});
});