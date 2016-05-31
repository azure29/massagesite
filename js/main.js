$(document).on('ready', function() {
	$('.navbar a').on('click', function(event){
		console.log(event);
		event.preventDefault();
		//scroll page associate with this
		var pageToscrollTo = $(this).attr('href');
		console.log(pageToscrollTo);
		//using page to scroll in a .scroll function
		//$(window).scrollTo(pageToscrollTo, 1000, {offset: -offset});
		$(window).scrollTo(pageToscrollTo, 1000, {axis: 'x'});
	});
	

});