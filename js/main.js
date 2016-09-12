$(document).ready(function() {

	// Select Box
	$('.js-fancySelect').fancySelect();


	//
	// Auto open collapse when ID is load in URL
		var anchor = window.location.hash.replace("#", "");
	    $(".collapse").collapse('hide');
	    $("#" + anchor).collapse('show');
	//



});