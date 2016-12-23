$(document).ready(function(){
	setTimeout(function(){
		document.getElementById('video').play();
	},1000);

	$('#fullpage').fullpage({
		// scrollOverflow: true,
		responsiveWidth : 770
		// scrollBar:true 
	});

	// вызов полной формы регистрации
	$('button[data-target="#registration"]').click(function(e){
		e.preventDefault;
		$('#registration .email').show();
		$('#registration').modal('show');
	});

	// вызов укороченной формы регистрации
	$('#plate_form .submit').click(function(e){
		e.preventDefault;
		$(this).closest('form').submit();
	});


	// VALIDATE
	// форма входа
	$('#auth_form').validate({
		submitHandler: function(form){
			// при прохождении валидации, дальнейший код тут (ajax)
			console.log("Валидация пройдена");
		}
	});

	// плашка на первом слайдере
	$('#plate_form').validate({
		submitHandler: function(form){
			// скрываем поле с email
			$('#registration .email').val($('#plate_form .email').val()).hide();

			// показываем модальное окно регистрации
			$('#registration').modal('show');
		}
	});
	
	// форма регистрации
	$('#registration_form').validate({
		submitHandler: function(form){
			// при прохождении валидации, дальнейший код тут
			console.log("Валидация пройдена");
		}
	});
})
