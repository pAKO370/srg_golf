(function(){
	$(window).scroll(function(){
			var wScroll = $(this).scrollTop();
			var windowHeight = $(window).height();
			console.log(wScroll);
			console.log('window height:  ' + windowHeight);
			var diff = wScroll - windowHeight;
			console.log('DIFF: ' + diff)
		if(wScroll > 60){
			$('.hidden-nav img').css({'bottom' : -67 + 'px'});
		}else{
			$('.hidden-nav').removeClass('show');
			$('.hidden-nav img').css({'bottom' : 0});
		}
		if(wScroll >= 0){
			var marginTop = -40;
			$('#clouds').css({'top':  ((wScroll) / 2)})
			$('.about').css({'margin-top':  marginTop - ((wScroll) / 4)})
		}
	});
	
	
	$('.hidden-nav img').click(function(){
		$('.hidden-nav').toggleClass('show');
	});
	
	
	
	
})();