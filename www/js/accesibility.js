
var fontSizeSelected = 0;

window.onload = function () {
	bindAccessibilityEvents();
}

function bindAccessibilityEvents(){
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
		location.href = "#motivation-title";
		moveAccessibilityPanel();
	});
	gotoContent.keypress(function (e) {
		if (e.which == 13) {
			location.href = "#motivation-title";
			moveAccessibilityPanel();
		}
	});

	// GO TO CONTENT BUTTON --
	var biggerFont = $("#access-biggerFont");

	biggerFont.click(function () {
		changeToLegibleFont();
	});
	biggerFont.keypress(function (e) {
		if (e.which == 13) {
			changeToLegibleFont();
		}
	});
}



function moveAccessibilityPanel() {

	let toPosition = $("#accessPanel").css("top") == "0px" ? "-123px" : "0px";

	$("#accessPanel").animate({ top: toPosition }, 500, function () {
		//callback to whichever fuzzyNeeds
	});
}

function changeToLegibleFont() {

	let fontSizes = ["25px", "30px", "40px"];

	$(".textBlockFuzzy").addClass("textBlockFuzzy-legible");
	$(".textBlockFuzzy").find("p").css("font-size", fontSizes[fontSizeSelected % fontSizes.length]);

	$("li").addClass("textBlockFuzzy-legible");
	$("li").css("font-size", fontSizes[fontSizeSelected % fontSizes.length]);


	fontSizeSelected++;
}