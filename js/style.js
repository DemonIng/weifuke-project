var obj = {
	btnLeftNode: $('.brand-btn-left'),
	btnRightNode: $('.brand-btn-right'),
	brandUlNode: $('.brand-choose ul'),
	loginNode:$('.login'),
	recruitLiNode:$('.recruit-main li'),
	spanNode:$('.agency-main span'),
	diquLiNode:$('.diqu li'),
	bool: true,
	recruitBool:true,//true表示展开
	recruitOnlyOne:true,
	agencyClick:function(){
		var _this = this;
		_this.spanNode.click(function(){
			var curPos = $(this).index();
			if(curPos==2){
				$('.support-main').css({background:'#97c310'});
				$('.agencyer').show();
				$('.chanpin').hide();
			}
			else{
				$('.support-main').css({background:'#2d9daa'});
				$('.agencyer').hide();
				$('.chanpin').show();
			}
			
		})
	},
	recruitClick:function(){
		var _this = this;
		_this.recruitLiNode.click(function(){
			if(_this.recruitOnlyOne){
				_this.recruitOnlyOne=false;
				if($(this).hasClass('current')){
					_this.recruitBool=false;
				}
				if(_this.recruitBool){
					$(this).find('i').css({background:'url(img/recruitment_icon.png) no-repeat -2px -2px'});
					$(this).animate({height:'264px'},500,function(){
						_this.recruitOnlyOne=true;//动画执行完才可再次执行
					});
					_this.recruitBool = false;
					$(this).addClass('current');
					$(this).find('p').show();
				}
				else{
					$(this).find('i').css({background:'url(img/recruitment_icon.png) no-repeat -2px -23px'});
					$(this).animate({height:'20px'},500,function(){
						$(this).find('p').hide();
						_this.recruitOnlyOne=true;
					});
					_this.recruitBool = true;
					$(this).removeClass('current');
					
					
				}
			}
		})
	},
	fixFun:function(height){
		var _this = this;
		_this.loginNode.click(function(){
			//alert(1);
			$('.fix-login').show().animate({marginTop:0},500);
		})
		$('.Js_close').click(function(){
			//console.log(height)
			$('.fix-login').animate({marginTop:-height+'px'},500,function(){
				$(this).hide();
			});
			setTimeout(function(){
				$('.Js_login').css({display:'block',marginTop:'-194px'});
				$('.Js_register').css({display:'none',marginTop:-height+'px'});
			},500)
			
		})
		$('#register').click(function(){
			
			$('.Js_login').animate({marginTop:-height+'px'},500,function(){
				$(this).css({display:'none'});
			});
			$('.Js_register').css({display:'block'}).animate({marginTop:'-215px'},500);
		})
		$('#login').click(function(){
			$('.Js_login').css({display:'block'}).animate({marginTop:'-194px'},500);
			$('.Js_register').animate({marginTop:-height+'px'},500,function(){
				$(this).css({display:'none'});
				
			})
		})
	},
	textImgMoveOut: function(num, time1, time2, left1, left2, left3) {
		$('.all-Text-Img .h1-text-' + num).animate({
			marginLeft: left1 + 'px'
		}, time1)
		$('.all-Text-Img .h1-text-' + num).animate({
			marginLeft: left2 + 'px',
			opacity: '0'
		}, time2)
		$('.all-Text-Img .p-text-' + num).delay(time2 - time1).animate({
			marginLeft: left1 + 'px'
		}, time1)
		$('.all-Text-Img .p-text-' + num).animate({
			marginLeft: left2 + 'px',
			opacity: '0'
		}, time2)
		$('.all-Text-Img .i-img-' + num).delay(time2 + time1).animate({
			marginLeft: left3 + 'px'
		}, time1)
		$('.all-Text-Img .i-img-' + num).animate({
			marginLeft: left2 + 'px',
			opacity: '0'
		}, time2)
	},
	textImgMoveIn: function(num, time1, left1, left2) {
		$('.all-Text-Img .h1-text-' + num).delay(700).animate({
			marginLeft: left1 + 'px',
			opacity: '1'
		}, time1)
		$('.all-Text-Img .p-text-' + num).delay(700).animate({
			marginLeft: left1 + 'px',
			opacity: '1'
		}, time1)
		$('.all-Text-Img .i-img-' + num).delay(700).animate({
			marginLeft: left2 + 'px',
			opacity: '1'
		}, time1)
	},
	moveFun: function(Pos1, Pos2) {
		//console.log(Pos1,Pos2)
		var _this = this;
		if(Pos1 == 1) {
			_this.textImgMoveIn(Pos1, 500, -380, 164);
			$('.all-Text-Img ul').fadeIn(1000);
			$('.all-Text-Img .i-bg-2').delay(400).animate({
				marginLeft: '-1000px',
				opacity: '0'
			}, 500)
			$('.all-Text-Img .i-bg-3').delay(400).animate({
				marginLeft: '1000px',
				opacity: '0'
			}, 500)
			if(Pos2 == 2) _this.textImgMoveOut(Pos2, 200, 500, -300, -1000, 190);
			else _this.textImgMoveOut(Pos2, 200, 500, 380, 1000, 50);
		}
		if(Pos1 == 2) {
			_this.textImgMoveIn(Pos1, 500, -380, 100);
			$('.all-Text-Img ul').delay(700).fadeOut(500);
			$('.all-Text-Img .i-bg-3').delay(400).animate({
				marginLeft: '1000px',
				opacity: '0'
			}, 500)
			$('.all-Text-Img .i-bg-2').delay(400).animate({
				marginLeft: '-340px',
				opacity: '1'
			}, 500)
			if(Pos2 == 1) _this.textImgMoveOut(Pos2, 200, 500, -300, -1000, 190);
			else _this.textImgMoveOut(Pos2, 200, 500, 380, 1000, 50);
		}
		if(Pos1 == 3) {
			$('.all-Text-Img ul').delay(700).fadeOut(500);
			_this.textImgMoveIn(Pos1, 500, -380, 164);
			$('.all-Text-Img .i-bg-2').delay(400).animate({
				marginLeft: '-1000px',
				opacity: '0'
			}, 500)
			$('.all-Text-Img .i-bg-3').delay(400).animate({
				marginLeft: '-340px',
				opacity: '1'
			});
			_this.textImgMoveOut(Pos2, 200, 500, -300, -1000, 190);
		}
	},
	flashHoverFun: function() {
		var _this = this;
		$('.flash-btn span').hover(function() {
			var curPos = $(this).index();
			var oldPos = $('.flash-btn .current').index();
			if($(this).hasClass('current')) {
				return;
			}
			$(this).addClass('current').siblings().removeClass('current');
			$('.flash-bg-ul li').eq(curPos).stop(false, true).fadeIn(500);
			$('.flash-bg-ul li').eq(oldPos).stop(false, true).fadeOut(500);
			var Pos1 = curPos + 1; //当前第几个span移入
			var Pos2 = oldPos + 1; //之前第几个span移出
			_this.moveFun(Pos1, Pos2);
		})

		//			_this.textImgMoveOut(1,200,500,-300,-1000,190);//第一个span的移出动画
		//			_this.textImgMoveOut(2,200,500,-300,-1000,190);//第二个span的移出动画
		//			_this.textImgMoveOut(3,200,500,380,1000,50);//第三个span的移出动画
		//			_this.textImgMoveIn(1,500,-380,164);//第一个span的移入动画
		//			_this.textImgMoveIn(2,500,-340,164);//第二个span的移入动画
		//			_this.textImgMoveIn(3,500,-380,85);//第三个span的移入动画

	},
	blurChangeFocus:function(node,textVal){
		var _this = this;
		node.blur(function(){
			var val = $.trim($(this).val());//去除两端的空格
			if(val==''||val==textVal){
				$(this).val(textVal);
				if($(this).siblings('i')){
					$(this).siblings('i').hide();
				}
			}
		})
		node.change(function(){
			var val = $.trim($(this).val());
			//console.log(node.isEqualNode($('.Js_focus4')),node,$('.Js_focus4'))
			if(node.hasClass('Js_focus3')){
				if(!_this.reg3.test(val)){		
					$(this).siblings('i').css({background:'url(img/login_btn.png) no-repeat -382px -401px'}).show()
				}
				else{
					$(this).siblings('i').css({background:'url(img/login_btn.png) no-repeat -378px -336px'}).show()
				}
			}
			if(node.hasClass('Js_focus4')){
					$(this).siblings('i').css({background:'url(img/login_btn.png) no-repeat -378px -336px'}).show();
			}
			if(node.hasClass('Js_focus5')){
				var val = $(this).val();
				if(val==$('.Js_focus4').val()){
					$(this).siblings('i').css({background:'url(img/login_btn.png) no-repeat -378px -336px'}).show();
				}
				else{
					$(this).siblings('i').css({background:'url(img/login_btn.png) no-repeat -382px -401px'}).show()
				}
			}
		})
		node.focus(function(){
			var val = $.trim($(this).val());
			if(val==textVal){
				$(this).val('');
			}
			else{
				return
			}
		})
	},
	regInspect:function(){//用户名、密码、邮箱检测
		var _this = this;
		var reg1 = /^[\u4e00-\u9fa5]+$/;
		var reg2 = /^(((13|18)[0-9]{9})|(15[012356789]{1}[0-9]{8})|(17[3768]{1}[0-9]{8})|(14[57]{1}[0-9]{8})|(170[05689]{1}[0-9]{7}))$/;
		_this.reg3 = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		_this.diquLiNode.eq(2).find('input').change(function(){
			if(!reg1.test($(this).val())){
				alert('请使用中文！')
			}
		})
		_this.diquLiNode.eq(3).find('input').change(function(){
			if(!reg2.test($(this).val())){
				alert('请输入正确的手机号码！')
			}
		})
		_this.diquLiNode.eq(4).find('input').change(function(){
			if(!_this.reg3.test($(this).val())){
				alert('请输入正确的邮箱！')
			}
		})
		_this.blurChangeFocus($('.Js_focus'),'输入您的邮箱');
		_this.blurChangeFocus($('.Js_focus2'),'输入您的密码');
		_this.blurChangeFocus($('.Js_focus3'),'输入邮箱');
		_this.blurChangeFocus($('.Js_focus4'),'输入密码');
		_this.blurChangeFocus($('.Js_focus5'),'再次输入');
		
	},
	init: function() {
		var _this = this;
		_this.flashHoverFun();
		_this.recruitClick();
		_this.agencyClick();
		_this.regInspect();
		var left = $('.top-nav i').css('left');
		var scrHeight = $('.fix-login').height();
		$('.fix-login').css({marginTop:-scrHeight+'px'});
		$('.Js_register').css({marginTop:-scrHeight+'px',display:'none'});
		_this.fixFun(scrHeight);
//		$('.Js_focus,.Js_focus2,.Js_focus3,.Js_focus4,.Js_focus5').focus(function(){
//			$(this).val('');
//		})
//		$('.Js_focus').blur(function(){
//				$(this).val('输入您的邮箱');
//		})
//
//		$('.Js_focus2').blur(function(){
//				$(this).val('输入您的密码');
//		})
//		
//
//		$('.Js_focus4').blur(function(){
//				$(this).val('输入密码');
//		})
//		$('.Js_focus5').blur(function(){
//				$(this).val('再次输入');
//		})
		
		$('.top-nav li').mouseover(function() {
			var curPos = $(this).index();
			$('.top-nav i').stop().animate({
				'left': 102 * curPos + 'px'
			}, 300)
			//console.log($('.top-nav i').css('left'))
		})
		$('.top-nav li').mouseout(function() {
			$('.top-nav i').stop().animate({
				'left': left
			}, 300)
		})
		_this.btnLeftNode.click(function() {
			_this.brandUlNode = $('.brand-choose ul');
			if(_this.bool == true) {
				_this.bool = false;
				_this.brandUlNode.eq(0).animate({
					marginLeft: '-1100px'
				}, 500, function() {
					_this.brandUlNode.eq(1).after($(this).css({
						marginLeft: 0
					}));
					_this.bool = true;
				})
			}
		})
		_this.btnRightNode.click(function() {
			_this.brandUlNode = $('.brand-choose ul');
			if(_this.bool == true) {
				_this.bool = false;
				_this.brandUlNode.eq(0).before(_this.brandUlNode.eq(1).css({
					marginLeft: '-1100px'
				}))

				_this.brandUlNode.eq(1).animate({
					marginLeft: 0
				}, 500, function() {
					_this.bool = true;
				})
			}
		})

		var dingshiqi = setInterval(function() {
			var oldPos = $('.flash-btn .current').index();
			var curPos = oldPos == 2 ? 0 : oldPos + 1;
			//console.log(curPos,nextPos)
			$('.flash-bg-ul li').eq(curPos).stop(false, true).fadeIn(500);
			$('.flash-bg-ul li').eq(oldPos).stop(false, true).fadeOut(500);
			$('.flash-btn span').eq(curPos).addClass('current').siblings().removeClass('current');
			_this.moveFun(curPos + 1, oldPos + 1);
			oldPos = curPos;
		}, 3000)
		$('.flash').mouseenter(function() {
			clearInterval(dingshiqi)
		})
		$('.flash').mouseleave(function() {
			dingshiqi = setInterval(function() {
				var oldPos = $('.flash-btn .current').index();
				var curPos = oldPos == 2 ? 0 : oldPos + 1;
				//console.log(curPos,nextPos)
				$('.flash-btn span').eq(curPos).addClass('current').siblings().removeClass('current');
				$('.flash-bg-ul li').eq(curPos).stop(false, true).fadeIn(500);
				$('.flash-bg-ul li').eq(oldPos).stop(false, true).fadeOut(500);
				_this.moveFun(curPos + 1, oldPos + 1);
				oldPos = curPos;
			}, 3000)
		})
	}
}
obj.init();


