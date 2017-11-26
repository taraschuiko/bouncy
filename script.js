jQuery(document).ready(function($) {
	var $grid = $('.portfolio-grid').isotope({
		itemSelector: '.portfolio-grid > img',
		percentPosition: true,
		gutter: 10
	});

	$('#all-works_filter').on('click', function(event) {
		event.preventDefault();
		$grid.isotope({ filter: '.portfolio-grid > img' });
		$('.portfolio-selector__item').removeClass('portfolio-selector__item--active');
		$(this).addClass('portfolio-selector__item--active');
	});

	$('#print_filter').on('click', function(event) {
		event.preventDefault();
		$grid.isotope({ filter: '.print-item' });
		$('.portfolio-selector__item').removeClass('portfolio-selector__item--active');
		$(this).addClass('portfolio-selector__item--active');
	});

	$('#branding_filter').on('click', function(event) {
		event.preventDefault();
		$grid.isotope({ filter: '.branding-item' });
		$('.portfolio-selector__item').removeClass('portfolio-selector__item--active');
		$(this).addClass('portfolio-selector__item--active');
	});

	$('#web_filter').on('click', function(event) {
		event.preventDefault();
		$grid.isotope({ filter: '.web-item' });
		$('.portfolio-selector__item').removeClass('portfolio-selector__item--active');
		$(this).addClass('portfolio-selector__item--active');
	});

	$('#html_filter').on('click', function(event) {
		event.preventDefault();
		$grid.isotope({ filter: '.html-item' });
		$('.portfolio-selector__item').removeClass('portfolio-selector__item--active');
		$(this).addClass('portfolio-selector__item--active');
	});

	$('.slider').slick({
		dots: true,
		arrows: false
	});
});

function initMap() {
	var uluru = {lat: 48.916631, lng: 24.707579};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: 'img/marker.png',
	});
}

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    	&& 
    	location.hostname == this.hostname
    	) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
        	scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
          	return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
        };
    });
    }
}
});