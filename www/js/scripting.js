
// SET BACKGROUND GRADIENT
var bodyTag = $("body");
var gradientSelect = "gradient-" + Math.floor((Math.random() * 2.9) + 1);
bodyTag.addClass(gradientSelect);


window.onscroll = function () {

	// NAVBAR FADING WHEN SCROLLING DOWN
	if ($(window).width() >= 768) { // BOOSTRAT SWITCHES NAV TO MOBILE AT 768
		// WHEN DEPASSING 10px
		if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
			let alpha = mathClamp(((document.documentElement.scrollTop - 10.0) / 100.0), 0, 0.5); // LITTLE FADE-IN EFFECT
			$(".navbar-fuzzy").css("background", "rgb(0,0,0," + alpha + ")");
		} else {
			$(".navbar-fuzzy").css("background", "none");
		}

	} else {
		// IF SCREEN WIDTH IS SMALLER THAN BOOSTRAP'S MOBILE, THE NAV BAR SWITCHES TO DROPDOWN
		// SO, NO DARK BACKGROUND
		$(".navbar-fuzzy").css("background", "none");
	}
}

function mathClamp(value, min, max) {
	return Math.min(Math.max(min, value), max)
}