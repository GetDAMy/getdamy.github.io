$( document ).ready(function() {	
	// slider area
	$('.bxslider').bxSlider({
		//mode: 'fade',
  		slideWidth: 235,
  		auto: true,
        infiniteLoop: true,
        hideControlOnEnd: true,
        useCSS: false,
        controls: false,
        duration: 950
	});
	$('.bxslider1').bxSlider({
		//mode: 'fade',
  		slideWidth: 216,
  		auto: true,
        infiniteLoop: true,
        hideControlOnEnd: true,
        useCSS: false,
        controls: false,
        duration: 950
	});
});