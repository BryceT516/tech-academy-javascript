$('document').ready( function(){
	console.log("Document ready function executing.");
	$('#quickInfo').html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");
	$('#quickInfoButton').html("jQuery Info");


});


$(function() {
	var mainHeading = $('#mainHeading');
	var backgrounds = [
		`url(./images/satellite.jpg) no-repeat`,
		`url(./images/create.jpg) no-repeat`
	];

	var current=0;

	function nextBackground() {
		mainHeading.css(
			{'background':backgrounds[current = ++current % backgrounds.length],
			'background-size':'100%',
			'background-position':'center'
			});

		setTimeout(nextBackground, 10000);
	}

	setTimeout(nextBackground, 10000);
	mainHeading.css({'background':backgrounds[0],
			'background-size':'100%',
			'background-position':'center'
			});
});



$('#sidebarFormSubmit').click(function(){
	console.log("Form submit");
	$('#colorInput').addClass('has-success has-feedback');
	$('#nameInput').addClass('has-error has-feedback');


	var $form = $('#sidebarFormForm');

	$form.find('.group:nth-child(1)')
				.addClass('inputError')
				.append('<span class="glyphicon glyphicon-exclamation-sign form-control-feedback"></span>');

	$form.find('.group:nth-child(2)')
				.addClass('formFeedbackMsg')
				.append('<span class="glyphicon glyphicon-ok form-control-feedback"></span><p>Good Choice!</p>');

});

