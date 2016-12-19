jQuery(document).ready(function($) {

	//Preloader
	setTimeout(function(){
		$('body').addClass('loaded');
		//$('.booking-box').css({right:-250}).animate({"right":"0px"}, "slow");
	}, 3300);

	//alert(window.location.href);
	//alert(top.location.pathname);

	setTimeout(function(){
		//$('.booking-btn').show();
		$('.booking-box, .booking-btn').show().css({right:-250}).animate({'right':'0px'}, 'slow');
		//$('.booking-btn a i').removeClass('icon-booking-menu').addClass('icon-close');
	}, 3700);
	
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

}); //End Ready

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

