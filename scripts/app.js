(function(){
	$(window).scroll(function(){
			var wScroll = $(this).scrollTop();
			var windowHeight = $(window).height();
			console.log(wScroll);
			console.log('window height:  ' + windowHeight);
			var diff = windowHeight - wScroll;
			console.log('DIFF: ' + diff);
		if(wScroll > 60){
			$('.hidden-nav img').css({'bottom' : -67 + 'px'});
		}else{
			$('.hidden-nav').removeClass('show');
			$('.hidden-nav img').css({'bottom' : 0});
		}
		if(wScroll >= 0){
			var marginTop = -40;
			$('#clouds').css({'top':  ((wScroll) / 2)});
			$('.about').css({'margin-top':  marginTop - ((wScroll) / 4)});
		}
		if(wScroll > $('.info-images').offset().top - windowHeight / 1.2){
				$('.image').each(function(i){
					setTimeout(function(){
						$('.image').eq(i).addClass('trans-show');	
					},200 * (i + 1));
				});
		}if(wScroll < 20){
			$('.image').removeClass('trans-show');
		}
		
		if(wScroll > $('.info-images').offset().top - windowHeight / 1.7){
						$('.info-div').addClass('slide-up');	
			}if(wScroll < 20){
				$('.info-div').removeClass('slide-up');	
			}
		
	});
	
	
	
	
	
	
	
	$('.hidden-nav img').click(function(){
		$('.hidden-nav').toggleClass('show');
	});
	
	
	//$('.image').addClass('trans-show');
	
})();