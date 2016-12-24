$(document).ready(function() {
	var InitUrl = 'http://api.golfabc.cn/';
	
	$.ajax({
		url: 'js/recommend.json',
		type: 'GET',
		dataType: 'json',
		data: {},
		// success: function(data) {
		// },
		// error: function(data) {
		// }
	})
	.done(function(data) {
		var recommenddata =data;
		var htmlt = '';
		var htmlb = '';
		var recommendlength = data.length;
		// 推荐默认第一个
		for (var i = 0; i < 1; i++) {
			if (recommenddata[i].type == 'video')  {
				htmlt +='<a href="videodetail'+recommenddata[i].id+'.html">';
			}else{
				htmlt +='<a href="article/geth'+recommenddata[i].id+'.html">';
			}
				htmlt +='<div class="recommend_img">'+
							'<img src="'+InitUrl+''+recommenddata[i].img+'" class="recommend_topimg" alt="">'
							if (recommenddata[i].type == 'video') {
								htmlt +='<div class="video_icon"></div>'
							}
				htmlt +='</div>'+
						'<div class="recommend_des">'+
							'<h1>'+recommenddata[i].title+'</h1>'+
							'<span class="tag_yuanchuang">原创</span>'+
							'<span class="tag_name">宝宝君</span>'+
						'</div>'+
					'</a>'
		}
		$('.recommend_top').html(htmlt)
		for (var i = 1; i < recommendlength; i++) {
			if (recommenddata[i].type == 'video')  {
				htmlb +='<li><a href="videodetail.html">';
			}else{
				htmlb +='<li><a href="videodetail.html">';
			}
				htmlb +='<div class="recommend_right">'+
							'<img src="'+InitUrl+''+recommenddata[i].img+'" class="recommend_liimg" alt="">'
							if (recommenddata[i].type == 'video') {
							htmlb +='<div class="video_icon"></div>';
							}
				htmlb +='</div>'+
						'<h1>'+recommenddata[i].title+'</h1>'+
						'<span class="tag_source">宝宝夜谈</span>'+
					'</a></li>'
		}
		$('.recommend_li ul').html(htmlb)

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

	
	
	
});