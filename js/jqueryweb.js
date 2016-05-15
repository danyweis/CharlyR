$(function () {
	var
	$webBiogr = $('.biogr');
	$biogr = $('.section__biogr');

	$webOeuvres = $('.oeuvres');
	$oeuvres = $('.section__oeuvres');

	$webPhilo =  $('.philo');
	$philo = $('.section__philo');

	$webContact = $('.contact');
	$contact = $('.section__contact');

	$webCitation = $('.citation');
	$citation = $('.footer');

	$webBiogr.on('click', function(){
		$biogr.delay(1000).fadeIn(1000);
		$oeuvres.fadeOut(1000);
		$philo.fadeOut(1000);
		$contact.fadeOut(1000);
		$citation.fadeOut(1000);
	});
	$webOeuvres.on('click', function(){
		$oeuvres.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$philo.fadeOut(1000);
		$contact.fadeOut(1000);
		$citation.fadeOut(1000);
	});
	$webPhilo.on('click', function(){
		$philo.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$oeuvres.fadeOut(1000);
		$contact.fadeOut(1000);
		$citation.fadeOut(1000);
	});
	$webContact.on('click', function(){
		$contact.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$oeuvres.fadeOut(1000);
		$philo.fadeOut(1000);
		$citation.fadeOut(1000);
	});
	$webCitation.on('click', function(){
		$citation.delay(1000).fadeIn(1000);
		$biogr.fadeOut(1000);
		$oeuvres.fadeOut(1000);
		$philo.fadeOut(1000);
		$contact.fadeOut(1000);
	});
});
