$('document').ready( function(){


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

