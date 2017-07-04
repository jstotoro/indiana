$(function() {
	// 游戏提现
	$('.bottom_Withdraw').click(function(event) {
		$('.geme_Withdraw').fadeIn();
	});
	// 关闭游戏提现
	$('.geme_Withdraw').find('.close_btn').click(function(event) {
		$('.geme_Withdraw').fadeOut();
	});
	// 游戏提现利息与金额超出结果
	$('.geme_Withdraw').find('.ip_money').keyup(function(event) {
		$('.SXF').text($(this).val()/100);
		var This = parseInt($(this).val());
		var geme_Withdraw_Text = $('.geme_Withdraw').find('.YE').text();
		if (This > geme_Withdraw_Text) {
			$('.ye_P').hide();
			$('.chaochu').show();
		}else{
			$('.ye_P').show();
			$('.chaochu').hide();
		}
	});
	// 确认提现按钮
	$('.geme_Withdraw').find('.Withdraw_btn').click(function(event) {
		var This = parseInt($('.ip_money').val());
		if (This >= 2) {
			$('.geme_Withdraw').fadeOut();
			$('.GTR').text('提现成功').fadeIn().delay(3000).fadeOut();
		}else{
			$('.geme_Withdraw').fadeOut();
			$('.GTR').text('提现必须大于1.00').fadeIn().delay(3000).fadeOut();
		}
	});
});

$(function() {
	//团队提现
	$('.bottom_TeamWithdraw').click(function(event) {
		$('.team_Withdraw').fadeIn();
	});
	// 团队提现利息与金额超出结果
	$('.team_Withdraw').find('.ip_money').keyup(function(event) {
		var This = parseInt($(this).val());
		var geme_Withdraw_Text = $('.team_Withdraw').find('.YE').text();
		if (This > geme_Withdraw_Text) {
			$('.ye_P').hide();
			$('.chaochu').show();
		}else{
			$('.ye_P').show();
			$('.chaochu').hide();
		}
	});
	// 确认提现按钮
	$('.team_Withdraw').find('.Withdraw_btn').click(function(event) {
		var This = parseInt($('.ip_money').val());
		if (This > 5) {
			$('.team_Withdraw').fadeOut();
			$('.Team_GTR').text('提现成功').fadeIn().delay(3000).fadeOut();
		}else{
			$('.team_Withdraw').fadeOut();
			$('.Team_GTR').text('团队奖金必须为5的倍数').fadeIn().delay(3000).fadeOut();
		}
	});
	// 关闭游戏提现
	$('.team_Withdraw').find('.close_btn').click(function(event) {
		$('.team_Withdraw').fadeOut();
	});
});

$(function() {
	$('.cons_top_right').click(function(event) {
		var Num = $(this).find('i').text();
		if (Num >= 10) {
			$('.num_time').text('已成功达到10次猜宝,可获奖金2.00元').fadeIn().delay(3000).fadeOut();
		}else{
			$('.num_time').text('未达到竞猜次数').fadeIn().delay(3000).fadeOut();
		}	
	});
});

$(function() {
	// 滑动
	var oWarp = $('.tenyuan_middle_bottom');
	var bol = false;
	
	var score = 0;
	
	function move(_e,t){
		var e = _e,_this = t;
		if(bol){
			var l = e.changedTouches[0].clientX - oWarp.offset().left - ($(".middle_bottom_btn").width()/2);
			if(l<=0){
				l = 0;
				$(".middle_bottom_btn i").css({
				   "background":'url(../img/zero'+0+'.png)no-repeat center',
					"background-size" :'100% 100%'
				});
			}else if(l > ($(_this).width() - $(".middle_bottom_btn").width()) ){
				l = $(_this).width() - ($(".middle_bottom_btn").width());
				$(".middle_bottom_btn i").css({
				   "background":'url(../img/zero'+20+'.png)no-repeat center',
					"background-size" :'100% 100%'
				});
			}else{
				score = parseInt((l/(oWarp.width() - $(".middle_bottom_btn").width()))*20);
				$(".middle_bottom_btn i").css({
				   "background":'url(../img/zero'+score+'.png)no-repeat center',
					"background-size" :'100% 100%'
				});
			}
			$(".tenyuan_middle_loading").css('width',l+($(".middle_bottom_btn").width()/2));
			$(".middle_bottom_btn").css('left',l);
			$('.big').find('.hand').text(score+'手');
			$('.small').find('.hand').text(score+'手');
			var index = $('.cdx_cai').parents('.fatherDiv').find('.cdx_cai').text();
		}
	}
	$(".tenyuan_middle_bottom").bind('touchstart',function(e){
		bol = true;
		console.log(e.changedTouches[0].clientX);
		move(e,oWarp);
	})
	$(".tenyuan_middle_bottom").bind('touchmove', function(e){
		
		move(e,oWarp);
    })
	$(".tenyuan_middle_bottom").bind('touchend', function(e){
		bol = false;
	});
});

$(function() {
	// 点击猜大后的效果
	$('.caibig').click(function(event) {
		$('.big').show();
	});
	// 点击关闭
	$('.big').find('.close_btn').click(function(event) {
		$('.big').hide();
	});
	// 点击确定
	$('.big').find('.confirm_btn').click(function(event) {
		$('.big').hide();
		$('.succeed').show();
	});
	$('.succeed').find('.close_btn').click(function(event) {
		$('.succeed').hide();
	});
	$('.succeed').find('.confirm_btn').click(function(event) {
		$('.succeed').hide();
	});
});

$(function() {
	// 点击猜小后的效果
	$('.caismall').click(function(event) {
		$('.small').show();
	});
	// 点击关闭
	$('.small').find('.close_btn').click(function(event) {
		$('.small').hide();
	});
	// 点击确定
	$('.small').find('.confirm_btn').click(function(event) {
		$('.small').hide();
		$('.succeed').show();
	});
});

$(function() {
	// 游戏说明
	$('.Game_Description').click(function(event) {
		$('.gameexplain_box').show();
	});
	// 关闭游戏说明
	$('.gameexplain_box').find('.close_btn').click(function(event) {
		$('.gameexplain_box').hide();
	});
	$('.gameexplain_box').find('.confirm_btn').click(function(event) {
		$('.gameexplain_box').hide();
	});
});

$(function() {
	// 如何验证
	$('.How_to_Validate').click(function(event) {
		$('.verification_box').show();
	});
	// 点击关闭
	$('.verification_box').find('.close_btn').click(function(event) {
		$('.verification_box').hide();
	});
	$('.verification_box').find('.confirm_btn').click(function(event) {
		$('.verification_box').hide();
	});
});
$(function() {
	$('.Recharge').click(function(event) {
		window.location.href = "recharge.html"
	});
});