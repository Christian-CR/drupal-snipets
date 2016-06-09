
jQuery(document).ready(function () {

	var mn = jQuery("#block-menu-menu-top-menu");
	var mr = jQuery(".menurayas");
	var mx = jQuery(".menuequis");

	// toggle para menu 
	mr.click(function() {
		mn.slideDown();
		jQuery(this).hide();
		mx.show();
	});

	mx.click(function() {
		mn.slideUp();
		jQuery(this).hide();
		mr.show();
	});

	// mostrar en resize 
	var mnw = mn.width();
	jQuery(window, document).resize(function() {
		if( mnw > 992 ) {
		  		mn.show();
			}
		});

	// mostrar submenu

	jQuery("ul.menu li.expanded a").mouseover(function(){
		jQuery(this).next().show();
	});

	jQuery("ul.menu li").mouseover(function(){
		jQuery("ul.menu li.expanded ul").hide();
		jQuery(this).find('ul').show();
	});
	jQuery("ul.menu li.expanded ul").mouseout(function(){
		jQuery(this).hide();
	});

});
