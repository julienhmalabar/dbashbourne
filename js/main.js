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
	    $(".filter-selector .collapse").collapse('hide');
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
			//$(".productTable-column").css("width", $(window).width());
			$(".js-table-column").css("width", $(window).width());

			// On compte le nombre de colonnes qu'on aura à slider
			var nbCols = $(".js-table-column").length;

			// On donne la taille totale au conteneur
			// -- soit "largeur du browser" X "nombre de colonnes à slider"
			var calcx = $(window).width() * nbCols;
			$(".js-table-table").css("width", calcx);

			// Fallback for CSC Table
			colsclean = nbCols - 1;
			
			var calcx1 = $(window).width() * colsclean;
			$(".js-table-tablex1").css("width", calcx1);

			//console.log("calcx1" + calcx1);

		}
		
		//
		// Slide between columns in responsive table
		$('.js-nextColumn').click(function(e) {
	        e.preventDefault();
	        $('.js-table-wrapper').animate(
	        	{ scrollLeft:'+='+$(window).width() }, 'slow'
	        );        
	    });
	    $('.js-prevColumn').click(function(e) {
	        e.preventDefault();
	        $('.js-table-wrapper').animate(
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
			$(".js-table-column").css("width", $(window).width());

			// On compte le nombre de colonnes qu'on aura à slider
			var nbCols = $(".js-table-column").length;

			// On donne la taille totale au conteneur
			// -- soit "largeur du browser" X "nombre de colonnes à slider"
			var calcx = $(window).width() * nbCols;
			$(".js-table-table").css("width", calcx);


			colsclean = nbCols - 1;

			var calcx1 = $(window).width() * colsclean;
			$(".js-table-tablex1").css("width", calcx1);
    	}
    	else {
    		var nbCols2 = $(".js-table-column").length;
    		var calcsize = 100 / nbCols2;

    		$(".js-table-column").css("width", calcsize+"%");
    		$(".js-table-table").css("width", "100%");
    		$(".js-table-tablex1").css("width", "100%");
    	}
    //

});














