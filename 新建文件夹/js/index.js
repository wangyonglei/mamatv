$(document).ready(function () {
	// 视频外面div的宽度和高度
	var divWidth = $('.divWidth').width();
	console.log(divWidth)
	var divHeight = divWidth*9/16;
	console.log(divHeight)
	$('.ivideodetail_video').height(divHeight);

	// 设置视频的宽度和高度
	$('.videoWidth').width(divWidth);
	$('.videoWidth').height(divHeight);
	


})