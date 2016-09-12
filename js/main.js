$(document).ready(function() {

	// Select Box
	var select = $('.js-fancySelect');
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

			var calcx5 = windowWidth*5;
			$(".productTable-table").css("width", calcx5);



			// $(window).resize(function() {
			// 	$(".productTable-column").css("width", windowWidth);

			// 	var calcx5 = windowWidth*5;
			// 	$(".productTable-table").css("width", calcx5);
			// });



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



$(window).resize(function() {
	var windowWidth2 = $(window).width();
	console.log("windowWidth2 : " + windowWidth2);

	$(".productTable-column").css("width", windowWidth2+" !important");

	var calcx5 = windowWidth2*5;
	$(".productTable-table").css("width", calcx5);
});