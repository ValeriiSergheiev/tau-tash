jQuery(document).ready(function($) {

	//Preloader
	setTimeout(function(){
		$('body').addClass('loaded');
		//$('.booking-box').css({right:-250}).animate({"right":"0px"}, "slow");
	}, 3300);

	//Бронирование(анимация). Строка пути относительно корня веб-сайта
	if (window.location.pathname == '/tau-tash/' || window.location.pathname == '/tau-tash/index.html') {
		setTimeout(function(){
			$('.booking-box, .booking-btn').show().css({right:-250}).animate({'right':'0px'}, 'slow');
		}, 3700);
	} else {
		$('.booking-btn').show()
		.find('i').removeClass('icon-close').addClass('icon-booking-menu');
	};
	
	//Menu
	$('.menu-btn a').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.main-menu').slideToggle('fast');
		$(this ).find('i').toggleClass('icon-menu').toggleClass('icon-close');
	});

	$('.booking-btn a').click(function(event) {
		event.preventDefault();
		event.stopPropagation();
		$('.booking-box').slideToggle('fast');
		$(this ).find('i').toggleClass('icon-booking-menu').toggleClass('icon-close');
		//$('.booking-box').css({right:-250}).animate({"right":"0px"}, "slow");
	});

	$(window).click(function() {
		$('.main-menu').slideUp('fast');
		$('.menu-btn a i').removeClass('icon-close').addClass('icon-menu');
	});

	//Slider
	$('.main-slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1500,
		pauseOnHover: false
	});

	//Slider About us
	$('.reviews-slider').slick({
		infinite: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		autoplay: true
	});

	//Popups
	$('.open-aboutus-popup').magnificPopup({
		type:'inline',
		midClick: true,
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	//Gallery show 
	$('.gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled:true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out'
			},
			image: {
				titleSrc: 'title'
			}
		});
	});

	

	//Validations
	jQuery.validator.setDefaults({
		debug: true,
		success: 'valid'
	});

	$( '#aboutus-form, #contacts-form' ).validate({
		rules: {
			field: {
				required: true
			}
		},
		messages: {
			field: {
				required: 'Заполните это поле'
			}
		}
	});
	//$.validator.messages.required = 'required';

	//Select menu
	$('#select-period-menu').niceSelect();

	$('.nice-select').click(function() {
		$(this).toggleClass('nice-select-arrow-top');
	});

	//Hotel room gallery
	$('.slideshow-item a:first-child').click(function(event) {
		event.preventDefault();
	});
	$('.slideshow-item a').click(function(event) {
		//event.preventDefault();
		var
		path = $(this).find('img').attr('src'),
		title = $(this).attr('title'),
		//cut = "<p>frfrf</p>",
		item_index = $(this).closest('.slideshow-item').index() + 2;

		if (!$(this).closest('.slideshow-item').hasClass('active')) {
			$(this).closest('.slideshow-item').addClass('active').siblings().removeClass('active');
			//$(cut).appendTo('.slideshow-display');
			//cut = "";
			//cut = $('.slideshow-display a:nth-child(' + item_index + ')').clone();
			//$('.slideshow-display a:nth-child(' + item_index + ')').remove();
			//$('.slideshow-display a:nth-child(' + item_index + ')').replaceWith($('.slideshow-display a:nth-child(1)'));
			
				//$('.d-item').stopPropagation();


				$('.slideshow-display img').fadeOut(200, function() {
					$(this).attr('src', path).fadeIn(200);
					$(this).closest('a').attr('href', path);
					$(this).closest('a').attr('title', title);
				});
				$('.zoom-block').fadeOut(200, function() {
					$(this).fadeIn(200);
				});
			};
		});

	//Calendar
	$('#booking-datepicker').datepicker({
		autoClose: true,
		offset: 10
	});

	//Booking counter
	var i = 0;
	$('.booking-form-input-wrapper:nth-child(2) i.icon-plus').click(function() {
		i++;
		$('.booking-form-input-wrapper:nth-child(2) input').val(i);
	});
	$('.booking-form-input-wrapper:nth-child(2) i.icon-minus').click(function() {
		i--;
		$('.booking-form-input-wrapper:nth-child(2) input').val(i);
		if (i <= 0) {
			i = 0;
			$('.booking-form-input-wrapper:nth-child(2) input').val(i);
		};
	});
	var k = 0;
	$('.booking-form-input-wrapper:nth-child(3) i.icon-plus').click(function() {
		k++;
		$('.booking-form-input-wrapper:nth-child(3) input').val(k);
	});
	$('.booking-form-input-wrapper:nth-child(3) i.icon-minus').click(function() {
		k--;
		$('.booking-form-input-wrapper:nth-child(3) input').val(k);
		if (k <= 0) {
			k = 0;
			$('.booking-form-input-wrapper:nth-child(3) input').val(k);
		};
	});

}); //End Document Ready

//Google map
var map;
var LatLng = {lat: 53.809469, lng: 58.638794};
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: LatLng,
		zoom: 15,
		scrollwheel: false,
		disableDefaultUI: true,
		styles: [
		{
			'featureType': 'all',
			'elementType': 'all',
			'stylers': [
			{
				'hue': '#e7ecf0'
			}
			]
		},
		{
			'featureType': 'administrative',
			'elementType': 'all',
			'stylers': [
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'administrative.country',
			'elementType': 'all',
			'stylers': [
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'poi',
			'elementType': 'all',
			'stylers': [
			{
				'visibility': 'off'
			}
			]
		},
		{
			'featureType': 'poi.business',
			'elementType': 'all',
			'stylers': [
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'poi.business',
			'elementType': 'geometry',
			'stylers': [
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'poi.business',
			'elementType': 'labels',
			'stylers': [
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'poi.place_of_worship',
			'elementType': 'all',
			'stylers': [
			{
				'visibility': 'on'
			}
			]
		},
		{
			'featureType': 'road',
			'elementType': 'all',
			'stylers': [
			{
				'saturation': -70
			}
			]
		},
		{
			'featureType': 'transit',
			'elementType': 'all',
			'stylers': [
			{
				'visibility': 'off'
			}
			]
		},
		{
			'featureType': 'water',
			'elementType': 'all',
			'stylers': [
			{
				'visibility': 'simplified'
			},
			{
				'saturation': -60
			}
			]
		}
		]
	});
	//Map Marker 
	var image = './images/map-marker.png';
	var marker = new google.maps.Marker({
		position: {lat: 53.80725, lng: 58.635850},
		map: map,
		icon: image
	});
}

