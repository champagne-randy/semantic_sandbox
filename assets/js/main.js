$(function () {
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	});

	$('.accordion').accordion();


var validationObj = {
	firstName: {
		identifier  : 'first-name',
		rules: [
		{
			type   : 'empty',
			prompt : 'Please enter your first name'
		}
		]
	},
	lastName: {
		identifier  : 'last-name',
		rules: [
		{
			type   : 'empty',
			prompt : 'Please enter your last name'
		}
		]
	},
	username: {
		identifier : 'username',
		rules: [
		{
			type   : 'empty',
			prompt : 'Please enter a username'
		}
		]
	},
	password: {
		identifier : 'password',
		rules: [
		{
			type   : 'empty',
			prompt : 'Please enter a password'
		},
		{
			type   : 'length[6]',
			prompt : 'Your password must be at least 6 characters'
		},
		{
			type: 'containsNumbers',
			prompt : 'Need a number'
		}
		]
	}
};

	$.fn.form.settings.rules.containsNumbers = function(value){
		var regex = new RegExp("[0-9]");
		return regex.test(value);
	}

$('.form').form(validationObj, {
	inline: false,
	onSuccess: function(){
		$('.ui.modal').modal('show');
	} 
});
});
