(function ($, root, undefined) {
	$(function () {
		'use strict';
		window.addEventListener("scroll",function() {
		   if(window.scrollY > 2300) {
		      $('.past-jobs').slideDown("slow");
		   }
		   else {
		      $('.past-jobs').slideUp("slow");
		   }
		},false);

	});
})(jQuery, this);
