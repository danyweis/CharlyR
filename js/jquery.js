$(function () {
	var
	$open = $('#menu-open');
	$close = $('#menu-close');
	$nav = $('.nav__charlyr');

	$tete = $('.section__tete');

	$mobBiogr = $('#mobBiogr');
	$biogr = $('.section__biogr');

	$mobOeuvres = $('#mobOeuvres');
	$oeuvres = $('.section__oeuvres');

	$mobPhilo =  $('#mobPhilo');
	$philo = $('.section__philo');

	$mobContact = $('#mobContact');
	$contact = $('.section__contact');

	$mobCitation = $('#mobCitation');
	$citation = $('.footer');

	$open.on('click', function(){
		$open.fadeOut(1000);
		$close.delay(1000).fadeIn(1000);
		$nav.slideDown(1500);
	});
	$close.on('click', function(){
		$close.fadeOut(1000);
		$open.delay(1000).fadeIn(1000);
		$nav.slideUp(1500);
	});
	$mobBiogr.on('click', function(){
		$biogr.delay(1000).fadeIn(1000);
		$oeuvres.fadeOut(1000);
		$philo.fadeOut(1000);
		$contact.fadeOut(1000);
		$citation.fadeOut(1000);
		$nav.slideUp(1500);
		$close.fadeOut(1000);
		$open.delay(1000).fadeIn(1000);

	});
	$mobOeuvres.on('click', function(){
		$oeuvres.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$philo.fadeOut(1000);
		$contact.fadeOut(1000);
		$citation.fadeOut(1000);
		$nav.slideUp(1500);
		$close.fadeOut(1000);
		$open.delay(1000).fadeIn(1000);
	});
	$mobPhilo.on('click', function(){
		$philo.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$oeuvres.fadeOut(1000);
		$contact.fadeOut(1000);
		$citation.fadeOut(1000);
		$nav.slideUp(1500);
		$close.fadeOut(1000);
		$open.delay(1000).fadeIn(1000);
	});
	$mobContact.on('click', function(){
		$contact.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$oeuvres.fadeOut(1000);
		$philo.fadeOut(1000);
		$citation.fadeOut(1000);
		$nav.slideUp(1500);
		$close.fadeOut(1000);
		$open.delay(1000).fadeIn(1000);
	});
	$mobCitation.on('click', function(){
		$citation.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$oeuvres.fadeOut(1000);
		$philo.fadeOut(1000);
		$contact.fadeOut(1000);
		$nav.slideUp(1500);
		$close.fadeOut(1000);
		$open.delay(1000).fadeIn(1000);
	});
});
