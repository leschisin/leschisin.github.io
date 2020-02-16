document.addEventListener('DOMContentLoaded', function() {

	// WINDOW SCROLL FUNCTIONS
	window.addEventListener('scroll', () => {

		debounce(transformNavbar(), 250);
		debounce(transformHero(), 250);

	});

	// WINDOW RESIZE FUNCTIONS
	window.addEventListener('resize', () => {

		debounce(navReset(), 250);

	});

	// WINDOW RESIZE FUNCTIONS
	window.addEventListener('load', () => {

		navReset();

		// MOBILE MENU LOAD FLICKER FIX
		document.querySelector('.menu.mobile').style.display = 'block';

		//EMAILJS INIT
		emailjs.init('user_2vEou5iRO1ol0t7D1s3TT');

	});

	// CONTACT FORM
	document.getElementById('contact-form').addEventListener('submit', function(e) {

		e.preventDefault();

		let user_name_value = document.getElementById('user_name').value;
		let user_email_value = document.getElementById('user_email').value;
		let user_subject_value = document.getElementById('user_subject').value;
		let user_message_value = document.getElementById('user_message').value;

		var template_params = {
			user_name: user_name_value,
			user_email: user_email_value,
			subject: user_subject_value,
			message: user_message_value
		}

		var service_id = 'default_service';
		var template_id = 'portfolio';
		emailjs.send(service_id, template_id, template_params);

		$('#email-modal').modal('show');

		document.getElementById('contact-form').reset();

	});

	// HAMBURGER CLICKS
	document.querySelector('.hamburger').addEventListener('click', () => {

		transformBurger();

	});

	// RESET NAV CLASSES
	navReset = () => {
		if(window.innerWidth >= 768) {
			document.body.classList.remove('no-overflow');
			document.querySelector('.menu.mobile').classList.remove('is-active');
			document.querySelector('.hamburger').classList.remove('is-active');
			if(window.pageYOffset === 0) {
				document.querySelector('.sticky-navbar').classList.remove('dark');
			} else if(window.pageYOffset > 0) {
				document.querySelector('.sticky-navbar').classList.add('dark');
			}
		} else {
			if(window.pageYOffset > 0) {
				document.querySelector('.sticky-navbar').classList.add('dark');
			}
		}
	}

	// HAMBURGER ACTIONS
	transformBurger = () => {
		document.querySelector('.hamburger').classList.toggle('is-active');
		document.querySelector('.menu.mobile').classList.toggle('is-active');
		document.body.classList.toggle('no-overflow');
		let scrollHeight = window.pageYOffset;
		let navbar			 = document.querySelector('.sticky-navbar');
		if(scrollHeight === 0) {
			document.querySelector('.sticky-navbar').classList.toggle('dark');
		}
	}

	// NAVBAR
	transformNavbar = () => {
		let scrollHeight = window.pageYOffset;
		let navbar			 = document.querySelector('.sticky-navbar');
		if(scrollHeight > 0) {
			navbar.classList.add("dark");
		} else {
			navbar.classList.remove("dark");
		}
	}

	// PARALLAX/SCALE/BRIGHTNESS FOR HERO ON SCROLL
	transformHero = () => {
		let scrollHeight = window.pageYOffset;
		let heroBox			 = document.querySelector('.hero-bg');
		heroBox.style.transform = 'translateY(' + (scrollHeight * 0.1) + '%) scale(' + ((scrollHeight / 1000) + 1) + ',' + ((scrollHeight / 1000) + 1) + ')';
		heroBox.style.filter = 'brightness(' + (50 - (scrollHeight * 0.05)) + '%) grayscale(1)';
	}

	// DEBOUNCE
	debounce = (func, wait, immediate) => {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

});