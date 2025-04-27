window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options_self = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 12000,
    }

		// Initialize all div with carousel class
    var carousels_self = bulmaCarousel.attach('.carousel_self', options_self);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels_self.length; i++) {
    	// Add listener to event
    	carousels_self[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    bulmaSlider.attach();
    
    var options_side_1 = {
			slidesToScroll: 1,
			slidesToShow: 4,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 25000,
    }
    // Initialize all div with carousel class
    var carousels_side_1 = bulmaCarousel.attach('.carousel_side_1', options_side_1);
    // // Loop on each carousel initialized
    // for(var i = 0; i < carousels_side.length; i++) {
    // 	// Add listener to event
    // 	carousels_side[i].on('before:show', state => {
    // 		console.log(state);
    // 	});
    // }

    // // Access to bulmaCarousel instance of an element
    // var element = document.querySelector('#my-element');
    // if (element && element.bulmaCarousel) {
    // 	// bulmaCarousel instance is available as element.bulmaCarousel
    // 	element.bulmaCarousel.on('before-show', function(state) {
    // 		console.log(state);
    // 	});
    // }
    bulmaSlider.attach();

    var options_side_2 = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 12000,
    }
    // Initialize all div with carousel class
    var carousels_side_2 = bulmaCarousel.attach('.carousel_side_2', options_side_2);
    bulmaSlider.attach();

    var options_stereo = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 12000,
    }
    // Initialize all div with carousel class
    var carousels_stereo = bulmaCarousel.attach('.carousel_stereo', options_stereo);
    bulmaSlider.attach();

    var options_synthetic = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 12000,
    }
    // Initialize all div with carousel class
    var carousels_synthetic = bulmaCarousel.attach('.carousel_synthetic', options_synthetic);
    bulmaSlider.attach();

    var options_long = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 35000,
    }
    // Initialize all div with carousel class
    var carousels_long = bulmaCarousel.attach('.carousel_long', options_long);
    bulmaSlider.attach();
    
})
