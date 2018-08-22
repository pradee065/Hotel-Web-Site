
$(document).ready(function(){

	// invoke the carousel
	$('#myCarousel').carousel({
		interval: false
	});

	// scroll slides on mouse scroll 
	$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
			$(this).carousel('prev');

		}
		else{
			$(this).carousel('next');

		}
	});

	//scroll slides on swipe for touch enabled devices 

	$("#myCarousel").on("touchstart", function(event){

		var yClick = event.originalEvent.touches[0].pageY;
		$(this).one("touchmove", function(event){

			var yMove = event.originalEvent.touches[0].pageY;
			if( Math.floor(yClick - yMove) > 1 ){
				$(".carousel").carousel('next');
			}
			else if( Math.floor(yClick - yMove) < -1 ){
				$(".carousel").carousel('prev');
			}
		});
		$(".carousel").on("touchend", function(){
			$(this).off("touchmove");
		});

		$("nav").find("li").on("click", "a", function () {
			$('.navbar-collapse.in').collapse('hide');
		}); 

	});
	







	$(function() {
		function init() {
			$('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
			$('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
		};

		function toggleMenuIcon() {
			$(this).toggleClass('menu-icon--open');
			$('[data-element="toggle-nav"]').toggleClass('nav--active');
		};

		function toggleSubMenu() {
			$(this).toggleClass('nav__link--plus nav__link--minus');
			$('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
		};

		init()
	});

	$(".open-scroll").click(function(){
		$(".slider-pop").removeClass("off-mode").addClass("on-mode");
		$(".modal-content").addClass("off-mode");

		$('.multiple-items').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});

	});
	$(".open-pop").click(function(){
		$(".modal-content").removeClass("off-mode");
		$(".slider-pop").removeClass("on-mode").addClass("off-mode");
	});
$(window).on('load', function() { // makes sure the whole site is loaded 
$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website. 
});
	
	$("#One").click(function(){
		$('html').scrollTop(0);
		$(".buffet-menu2").css("display", "block");
		$(".requirements").css("display", "none");
	});

	$("#Two").click(function(){
		$('html').scrollTop(0);
		$(".customer-summary").css("display", "block");
		$(".buffet-menu2").css("display", "none");
	});

	$("#Three").click(function(){
		$('html').scrollTop(0);
		$(".catering-form").css("display", "block");
		$(".customer-summary").css("display", "none");
	});

	$("#Four").click(function(){
		$('html').scrollTop(0);
		$(".customer-receipt").css("display", "block");
		$(".catering-form").css("display", "none");
	});

	

});
