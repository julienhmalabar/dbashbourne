$(document).ready(function() {

	// Select Box
	// $('.js-fancySelect').fancySelect({
	// 	includeBlank: true
	// });

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
	//
	$(".js-footerCollapse").click(function() {
		$(this).find("i").toggleClass("hidden");
	})
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