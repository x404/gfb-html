$(document).ready(function(){
	setTimeout(function(){
		document.getElementById('video').play();
	},1000);

	$('#fullpage').fullpage({
		responsiveWidth : 770,
		autoScrolling : false
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



// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE