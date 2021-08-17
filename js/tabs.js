$(document).ready(function() {
	$('.tabs-triggers__item').click(function(e){
		e.preventDefault();
		$('.tabs-triggers__item').removeClass('active');
		$('.works__row').removeClass('active');
		$(this).addClass('active');
		$($(this).attr('href')).addClass('active')
	});
});