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

		// Au chargement de la page

		if ($(window).width() < 768) {

			// On donne la width du browser à chaque colonnedu tableau 
			$(".productTable-column").css("width", $(window).width());

			// On compte le nombre de colonnes qu'on aura à slider
			var nbCols = $(".productTable-column").length;

			// On donne la taille totale au conteneur
			// -- soit "largeur du browser" X "nombre de colonnes à slider"
			var calcx5 = $(window).width() * nbCols;
			$(".productTable-table").css("width", calcx5);

		}
		
		//
		// Slide between columns in responsive table
		$('.js-nextColumn').click(function(e) {
	        e.preventDefault();
	        $('.productTable-wrapper').animate(
	        	{ scrollLeft:'+='+$(window).width() }, 'slow'
	        );        
	    });
	    $('.js-prevColumn').click(function(e) {
	        e.preventDefault();
	        $('.productTable-wrapper').animate(
	        	{ scrollLeft:'-='+$(window).width() }, 'slow'
	        );        
	    });

		
	

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


	//
	// STICKY JS
	$(".js-sticky").sticky({topSpacing:0});
	//


});



// Resize


jQuery(window).resize(function() {

	//
	// Responsive NAV
	if ( $(window).width() < 992 ) {
            //$(".navbar-wrapper").css("display","none");
        console.log($(window).width());
        $(".navbar-wrapper").css("display","none");
    }
    else {
    	$(".navbar-wrapper").css("display","block");
    	$(".nav-opened").removeClass("nav-opened");
    }
    //

    //
    //
    	if ( $(window).width() < 768 ) {

    		// On donne la width du browser à chaque colonne du tableau 
			$(".productTable-column").css("width", $(window).width());

			// On compte le nombre de colonnes qu'on aura à slider
			var nbCols = $(".productTable-column").length;

			// On donne la taille totale au conteneur
			// -- soit "largeur du browser" X "nombre de colonnes à slider"
			var calcx5 = $(window).width() * nbCols;
			$(".productTable-table").css("width", calcx5);
    	}
    	else {
    		var nbCols2 = $(".productTable-column").length;
    		var calcsize = 100 / nbCols2;

    		$(".productTable-column").css("width", calcsize+"%");
    		$(".productTable-table").css("width", "100%");
    	}
    //

});














