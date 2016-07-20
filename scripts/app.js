(function(){
	
	var blackBox = "<div class='black-box'></div>";
	var courseImages = "<div class='pop-image'><img src='assets/images/Course_Layout/CourseLayout.jpg' class='black-image' alt=''><img src='assets/images/Course_Layout/CloseButton.png' class='close' alt=''></div>";
	var map = "<div class='pop-image'><iframe class='black-image' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5966856902155!2d-89.18422024890877!3d42.47886577907686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88089c0fdcf21237%3A0xabfd506e9c7dfd9f!2s7330+Yale+Bridge+Rd%2C+Rockton%2C+IL+61072!5e0!3m2!1sen!2sus!4v1468881271147' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe><img src='assets/images/Course_Layout/CloseButton.png' class='close' alt=''></div>";
	
	var imageGallery = "<div class='pop-image'><img src='assets/images/Gallery/GalleryImage_1.jpg' class='black-image'><img src='assets/images/Gallery/Arrow_Left.png' id='left'><img src='assets/images/Gallery/Arrow_Right.png' id='right'><img src='assets/images/Course_Layout/CloseButton.png' class='close' alt=''></div>";
	
	var imageArray = ['assets/images/Gallery/GalleryImage_1.jpg','assets/images/Gallery/GalleryImage_2.jpg','assets/images/Gallery/GalleryImage_3.jpg'];
	
	
	
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
		
		var pricing = (($('.pricing').offset().top - wScroll) - windowHeight) / 6;
		console.log('dafafafaf' + pricing);
		if(pricing < 0){
			$('.pricing').css({'margin-top':  (pricing) + 'px'});
			if(pricing < -200){
				$('.pricing').css({'margin-top':  -200 + 'px'});
			}
		}
		
		
		//when images come into view, addClass to each, 200ms apart
		if(wScroll > $('.info-images').offset().top - windowHeight / 1.2){
				$('.image').each(function(i){
					setTimeout(function(){
						$('.image').eq(i).addClass('trans-show');	
					},200 * (i + 1));
				});
			//removeClass 200ms apart
		}if(wScroll < 150){
			//$('.image').removeClass('trans-show');
			$('.image').each(function(i){
					setTimeout(function(){
						$('.image').eq(i).removeClass('trans-show');	
					},200 * (i + 1));
				});
		}
		
		
		if(wScroll > $('.info-images').offset().top - windowHeight / 1.7){
						$('.info-div').addClass('slide-up');	
			}if(wScroll < 20){
				$('.info-div').removeClass('slide-up');	
			}
		
	});
	
	function clickScroll(class, targetClass){
		$(class).click(function(){
			$('html, body').animate({
				scrollTop: ($(targetClass).offset().top-150)
			}, 'slow');
		});
	}
	clickScroll('.price-scroll','.pricing');
	clickScroll('#scroll','#about');
	clickScroll('.about-scroll','#about');
	clickScroll('.contact-scroll','.contact');

		
	
	
	
	$('.hidden-nav img').click(function(){
		$('.hidden-nav').toggleClass('show');
	});
	
	$('body').on('click', '.close', function(){
		$('.site-container').removeClass('non-click');
		$('.black-box').removeClass('show-black');
		setTimeout(function(){
			$('.pop-image').remove();
			$('.black-box').remove();				 
		}, 500 );
	});
	
	function addBox(clicked,append){
		$(clicked).click(function(){
		$('.site-container').addClass('non-click');
		$('.site-container').append(blackBox);
		$('.black-box').append(append);
			setTimeout(function(){
				$('.black-box').addClass('show-black');
			}, 100);
		});
	}
	
	var i = 0;
	$('body').on('click', '#right',function(){
		i += 1;
		if(i > imageArray.length -1){
			i = 0;
		}
		$('.black-image').fadeOut(300, function(){
			$('.black-image').attr('src', imageArray[i]);
			$('.black-image').fadeIn(600);
		});
	});
	
	$('body').on('click', '#left',function(){
			i -= 1;
			if(i < 0){
				i = imageArray.length - 1;
			}
			$('.black-image').fadeOut(300, function(){
				$('.black-image').attr('src', imageArray[i]);
				$('.black-image').fadeIn(600);
			});
		});
		
	addBox('.location', map);
	addBox('.course', courseImages);
	addBox('.images',imageGallery);
	
})();