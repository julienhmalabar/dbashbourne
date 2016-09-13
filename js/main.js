$(document).ready(function() {

	// Select Box
	$('.js-fancySelect').fancySelect();
	
	var select = $('.js-fancySelectUrl');
	select.fancySelect().on('change.fs', function() {
	    var url = $(this).val();
          if (url) {
              window.location = url;
          }
          return false;
	});
	//


	//
	// Auto open collapse when ID is load in URL
		var anchor = window.location.hash.replace("#", "");
	    $(".collapse").collapse('hide');
	    $("#" + anchor).collapse('show');
	//

	//
	// Footer collapse icons
	$(".js-footerCollapse").click(function() {
		$(this).find("i").toggleClass("hidden");
	})
	//


	//
	// Responsive table to SLIDER table

		
		// VARS
		var windowWidth = $(window).width();

		if (windowWidth < 768) {

			$(".productTable-column").css("width", windowWidth);

			var nbCols = $(".productTable-column").length;

			var calcx5 = windowWidth * nbCols;
			$(".productTable-table").css("width", calcx5);


			//
			$('.js-nextColumn').click(function(e) {
		        e.preventDefault();
		        $('.productTable-wrapper').animate(
		        	{ scrollLeft:'+='+windowWidth }, 'slow'
		        );        
		    });
		    $('.js-prevColumn').click(function(e) {
		        e.preventDefault();
		        $('.productTable-wrapper').animate(
		        	{ scrollLeft:'-='+windowWidth }, 'slow'
		        );        
		    });

		}
		
	

	//



	//
	// MOBILE NAV OPEN - CLOSE
	$(".js-nav").click(function(e) {
		e.preventDefault();

		$(this).find("i").toggleClass("hidden");

		if ($(".logobar").hasClass("nav-opened")) {

			$(".logobar").removeClass("nav-opened");

		} else {
			$(".logobar").addClass("nav-opened");
		}

		//$(".logobar").addClass("nav-opened");

		$(".navbar-wrapper").slideToggle( "slow" );

	});


});



// Resize


jQuery(window).resize(function() {

	if ( $(window).width() < 992 ) {
            //$(".navbar-wrapper").css("display","none");
        console.log($(window).width());
        $(".navbar-wrapper").css("display","none");
    }
    else {
    	$(".navbar-wrapper").css("display","block");
    	$(".nav-opened").removeClass("nav-opened");
    }

});




