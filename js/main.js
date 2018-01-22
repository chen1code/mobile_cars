//底部导航栏
$('.foot a').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
	$(this).find('b').addClass('active').parent().siblings().find('b').removeClass('active');
})

//消息的通讯录
$('.tongxun').click(function() {
	$('.message-list').hide();
	$('.address-panel').show();
//	$('.right-tool').animate({
//		'right': '.3rem',
//	});
	$('.headL').show();
	$('.headC span').html('通讯录')
})
$('.msgL').click(function() {
	$('.message-list').show();
	$('.address-panel').hide();
	$('.new-friend-panel').hide();
	$('.msgL').hide();
	$('.msgC span').html('消息')
})

//新的好友
$('.n-friend').click(function() {
	$('.new-friend-panel').show();
	$('.message-list').hide();
	$('.headL').show();
})

//返回顶部
$(window).scroll(function() {
	if($(window).scrollTop() > 200) {
		$('.back-top').show();
	} else {
		$('.back-top').hide();
	}
})

//filter
$('.filter a').click(function() {
	var Index = $(this).index() - 1;
	if(Index == -1) {} else {
		$(this).toggleClass('active').siblings().removeClass('active');
		$('.filter-detail').eq(Index).toggleClass('hide').siblings('.filter-detail').addClass('hide');
	}
})

//下拉
$('.group-head').click(function() {
	var dis = $(this).next('.group-detail').css('display');
	$(this).next('.group-detail').slideToggle();
	$(this).siblings().next('.group-detail').slideUp();
	if(dis == 'none') {
		$(this).addClass('active').siblings().removeClass('active');
	} else {
		$(this).removeClass('active');
	}
})
$('.group-detail li').click(function() {
		var span1 = $(this).html();
		$(this).parents('.group-detail').prev().find('span').html(span1);
		$(this).parents('.group-detail').slideUp();
		$(this).parents('.group-detail').prev().removeClass('active')
	})
	//取消
$('.qx').click(function() {
		$('.more-filter').addClass('hide');
		$('.filter a').removeClass('active');
	})
	//搜车批发
$('.pifa').click(function() {
	$('.kuang img').toggle();
})

//对话发送
function putText() {
	var msg = $('.write-msg').val();
	if(msg != "") {
		$('.clear-text').show();
	} else {
		$('.clear-text').hide();
	}
	$('.send-msg').css('background-color', '#F0BB00')
}
$('.clear-text').click(function() {
		$('.write-msg').val('');
		$('.clear-text').hide();
		$('.send-msg').css('background-color', '#DEDEDE')
	})
	//发送消息以及消息始终显示在最底部
$('.send-msg').click(function() {
	var msg = $('.write-msg').val();
	$('.write-msg').val("");
	$('.clear-text').hide();
	$('.send-msg').css('background-color', '#DEDEDE')
	var html = "";
	html += "<div class='chat-right'> ";
	html += "<div class='user-tx-r'><img src='img/tx-test.jpg'></div>";
	html += "<p>nickname</p>";
	html += "<div class='dialog-box'>" + msg + "<div class='triangle-r'></div>";
	html += "</div>";
	if(msg != "") {
		$('.dialog-out').append(html);
		$('html,body').animate({
			scrollTop: $('.foot-tc').offset().top
		}, 800);
	}
})

//车辆详情分享
$('.share-other').click(function() {
	$('.mask2').fadeToggle();
	$('.cy-modal').fadeToggle();
})

//举报
$('.jubao').click(function() {
	$('.mask').show();
	$('.cy-modal2').show();
})
$('.cy-qx').click(function() {
	$('.mask').hide();
	$('.cy-modal2').hide();
})
$('.jubao-qd').click(function() {
	if($('.wenben-write').val() != "") {
		$('.cy-modal2').hide();
		$('.cy-modal3').show();
		setTimeout(function() {
			$('.mask').hide();
			$('.cy-modal3').hide();
		}, 2000)
	} else {
		$('.wenben-write').css('border', '1px solid #eb4f38')
	}
})

//查看检测报告的弹窗
$('.c-report').click(function() {
	$('.mask').show();
	$('.jiance').show();
})
$('.qx').click(function() {
	$('.mask').hide();
	$('.jiance').hide();
	$('.chujia').hide();
	$('.yuyue').hide()
})

//price span
$('.price span').click(function() {
	$(this).addClass('active').siblings().removeClass('active');
})

//同城急购
$('.option-cardetail span').click(function() {
	var $this = $(this);
	if($this.hasClass('active')) {
		$this.removeClass('active');
		$('.wenben-write').val($('.wenben-write').val().replace($this.text() + '，', ''));
	} else {
		$this.addClass('active');
		$('.wenben-write').val($('.wenben-write').val() + $this.text() + '，');
	}
})

//textarea里面
function doKey(e) {
		var group = $('.option-cardetail span');
		var ww = $('.wenben-write').val();
		$.each(group, function(i, v) {
			var $this = $(v);
			var s = $this.html()
			if(ww.indexOf(s) >=0){
				$this.addClass('active')
			}
			else{
				$this.removeClass('active')
			}
		})
}

//function doKey(e) {
//	var ev = e || window.event; //获取event对象   
//	if(ev.keyCode == 8) {
//		var group = $('.option-cardetail span');
//		$.each(group, function(i, v) {
//			var $this = $(v);
//			var s = $this.text();
//			if($('.wenben-write').val().indexOf(s) == -1) {
//				$this.removeClass('active');
//			}
//		})
//	}
//}

//客户管理
//搜索客户
$('.search-client').click(function() {
	$('#wrap').hide();
	$('.search-client-head').show();
})
$('.client-back').click(function() {
	$('#wrap').show();
	$('.search-client-head').hide();
})

//添加客户
//头像选择
$('.achead-detailR span').click(function() {
		var img = $(this).find('img').attr('src');
		$('.achead-detailL').find('img').attr('src', img);
		$('.achead-detailL span').hide();
	})
	//性别
$('.client-sex span').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
	//车辆信息的省市选择
$('.plate').click(function() {
	$('.province-simple').slideToggle();
})
$('.province-simple li').click(function() {
		$('.plate').html($(this).html())
	})
	//筛选
$('.filter-contentL li').click(function() {
		var Index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.filter-contentR ul').eq(Index).show().siblings().hide();
	})
	//筛选点击
$('.shaixuan').click(function() {
	$('.clist-item').toggle();
	$('.filter-content').toggle()
})

$('.filter-contentR li').click(function() {
	var html = "";
	$(this).parent().find('i').remove();
	html += "<i class='duigou'></i>";
	$(this).append(html);
})

//客户管理取消
$('.clientList-qx').click(function() {
	$('.clist-item').show();
	$('.filter-content').hide();
})


//客户详情tab点击
$('.body-tab li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
})


//已发布tab点击事件
$('.ptab-item').click(function(){
	var Index = $(this).index();
	$(this).addClass('active').siblings().removeClass('active');
	$('.ptab-content').eq(Index).show().siblings('.ptab-content').hide();
})

//个人资料编辑
$('.myEdit').click(function(){
	var s = $('.myEdit').html();
	$('.user-data li').toggleClass('active');
	if(s == '编辑'){
		$('.myEdit').html('完成');
		$('.change').one('click',function(){
			$(this).find('.rightSpan').hide();
			$(this).find('input').removeClass('hide');
		})
	}else{
		$('.myEdit').html('编辑');
	}
})
