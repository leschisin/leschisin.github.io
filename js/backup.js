$(document).ready(function() {

  // NAV AND MENU
  $(".navbar-burger").click(function() {

      $(".navbar-burger").toggleClass("is-active");
			$(".site-menu").toggleClass("is-hidden");
			$("html").toggleClass("overflow-hidden");
			$(".site-badge").toggleClass("active");
			$(".navbar").toggleClass("whitebg");

  });

	$(window).scroll(function() {

		let scrollTop = $(window).scrollTop();
		let scaleAmt = 1 - (scrollTop / 1000);
		if(scaleAmt > 0) {
			$('.hero-img').css('transform', 'scale(' + scaleAmt + ')');
		}

	});

	AOS.init();

	// SCROLL BADGE
	let scroll_position = 0;
	let ticking = false;

	window.addEventListener('scroll', function(e) {
		scroll_position = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(function() {
				if(scroll_position > 500) {
					$(".site-badge").addClass("active");
				} else {
					$(".site-badge").removeClass("active");
				}
				ticking = false;
			});

			ticking = true;
		}
	});

});