
var fontSizeSelected = 0;
var contrastOn = 0;

window.onload = function () {


	// ACCESSIBILITY - BEGIN

	bindAccessibilityEvents();

	resetAccesibilityParameters();

	// PARSE VARS IN URL HASH
	var stateVars = window.location.hash.substring(1).split(",");
	changeToLegibleFont(parseInt(stateVars[0]));
	changeBackgroundColor(parseInt(stateVars[1]));

	// ACCESSIBILITY - END


}

function resetAccesibilityParameters() {
	fontSizeSelected = 3; // 3 = NO LEGIBILITY CHANGE
	contrastOn = 0; // GRADIENT BACKGROUND
}

function resetAccessibilityMode() {
	resetAccesibilityParameters();

	changeToLegibleFont(fontSizeSelected);
	changeBackgroundColor(contrastOn);
}

function bindAccessibilityEvents() {
	// ACCESS BUTTON --
	var access = $("#access-button");

	access.click(function () {
		moveAccessibilityPanel();
	});

	access.keypress(function (e) {
		if (e.which == 13) { // ENTER KEY (JQUERY SHOULD MAKE IT CONSISTENT ACROSS BROWSERS)
			moveAccessibilityPanel()
		}
	});

	// GO TO CONTENT BUTTON --
	var gotoContent = $("#access-goToContent");

	gotoContent.click(function () {
		let idString = "#" + $(this).attr("data-jumpTo");
		$(idString).focus();
		// console.log($(":focus").html());
		moveAccessibilityPanel();
	});
	gotoContent.keypress(function (e) {
		if (e.which == 13) {
			let idString = "#" + $(this).attr("data-jumpTo");
			$(idString).focus();
			moveAccessibilityPanel();
		}
	});

	// GO TO MENU BUTTON --
	var gotoMenu = $("#access-goToMenu");

	gotoMenu.click(function () {
		$("#firstMenuItem").focus();

		moveAccessibilityPanel();
	});
	gotoMenu.keypress(function (e) {
		if (e.which == 13) {
			$("#firstMenuItem").focus();
			moveAccessibilityPanel();
		}
	});

	// BIGGER FONT BUTTON --
	var biggerFont = $("#access-biggerFont");

	biggerFont.click(function () {
		fontSizeSelected = (fontSizeSelected + 1) % 3;
		changeToLegibleFont(fontSizeSelected);

	});
	biggerFont.keypress(function (e) {
		if (e.which == 13) {
			fontSizeSelected = (fontSizeSelected + 1) % 3;
			changeToLegibleFont(fontSizeSelected);
		}
	});

	// CONTRAST BUTTON --
	var changeContrast = $("#access-changeContrast");

	changeContrast.click(function () {
		changeBackgroundColor((contrastOn + 1) % 2);
	});
	changeContrast.keypress(function (e) {
		if (e.which == 13) {
			changeBackgroundColor((contrastOn + 1) % 2);
		}
	});

	// RESET ACCESSIBILITY BUTTON --
	var resetAccess = $("#access-resetAccessibility");

	resetAccess.click(function () {
		resetAccessibilityMode();
	});
	resetAccess.keypress(function (e) {
		if (e.which == 13) {
			resetAccessibilityMode();
		}
	});
}



function moveAccessibilityPanel() {

	let toPosition = $("#accessPanel").css("top") == "0px" ? "-206px" : "0px";

	$("#accessPanel").animate({ top: toPosition }, 500, function () {
		//callback to whichever fuzzyNeeds
	});
}

function changeToLegibleFont(state) {

	if (state != 3 && !isNaN(state)) { // 3 = NO LEGIBILITY CHANGE

		fontSizeSelected = state;

		let fontSizes = ["25px", "30px", "40px"];

		$(".textBlockFuzzy").addClass("textBlockFuzzy-legible");
		$(".textBlockFuzzy").find("p").css("font-size", fontSizes[state]);

		$("li").addClass("textBlockFuzzy-legible");
		$("li").css("font-size", fontSizes[state]);

		// TODO: ADD THIS FONT CHANGE TO MINI-BIO DIVS
		
	} else {
		$(".textBlockFuzzy").removeClass("textBlockFuzzy-legible");
		$(".textBlockFuzzy").find("p").css("font-size", 17);

		$("li").removeClass("textBlockFuzzy-legible");
		$("li").css("font-size", 17);

	}
}

function changeBackgroundColor(state) {
	var bodyTag = $("body");
	bodyTag.removeClass(); // remove all classes;

	if (state == 0 || isNaN(state)) {
		var gradientSelect = "gradient-" + Math.floor((Math.random() * 2.99) + 1);
		bodyTag.addClass(gradientSelect);
		contrastOn = 0;
	} else {
		bodyTag.addClass("fullBack");
		// $("body").css("background", "rgb(0,45,208)");
		contrastOn = state;
	}

}