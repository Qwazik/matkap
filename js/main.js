$('.answer').css('display','none')

$('.quest__wrapper').on('click', function(){
	$(this).toggleClass('active')
	$(this).next().stop(true,true).slideToggle();
})

$('#form1, #form2').submit(function(){
    var dataForm = $(this).serialize();
    $.ajax({
        method : 'POST',
        url: '../mail.php',
        data: dataForm
    })
    .success(function() {
        alert('Спасибо за сообщение! Мы с вами обязательно свяжемся.')
    });
    return false;
})
