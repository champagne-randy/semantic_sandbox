$(function () {
    $('.item').click(function () {
        $('.item').removeClass('active');
        $(this).addClass('active');
    });

    $('.flip-up').click(function(){
      $('.shape').shape('flip up').shape({
        name: 'text shape',
        debug: true,
        verbose: true
      });
    });
    var validationRules = {
        username: {
            identifier: 'username',
            rules: [{
                type: 'empty',
                prompt: 'Please enter a username'
            }]
        },
        password: {
            identifier: 'password',
            rules: [{
                type: 'empty',
                prompt: 'Please enter a password'
            }, {
                type: 'length[6]',
                prompt: 'Your password must be at least 6 characters'
            }]
        }
    };

    var submitForm = function () {
        $('.ui.modal').modal('show');
        for (var i = 0; i <= 100; i++) {
            $('.bar').width(i + '%');
        }
    };

    $('.ui.form').form(validationRules, {
        inline: false,
        on: 'blur',
        onSuccess: submitForm
    });
});
