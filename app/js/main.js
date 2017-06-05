$(document).ready(function($) {

	// - mobile menu
	$body = $("body");
	$menuTrigger = $("#menu__trigger");

	$menuTrigger.on("click", function () {
		if ($body.hasClass("menu__open")) {
			$body.removeClass("menu__open");
			$(this).removeClass("active__mod");
		} else {
			$body.addClass("menu__open");
			$(this).addClass("active__mod");
		}
	});

	// - smooth scroll
	$(".header__menu-list, .hero").on("click", "a", function(event) {
		event.preventDefault();

		var el = $(this).attr("href");
		$("body,html").animate({
			scrollTop: $(el).offset().top
		}, 2000);
		return false;
	});
});
