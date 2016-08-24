	// cambiar titular
	function changeTit(){
		var tit = jQuery('#block-block-4 h1');
		var titdr = jQuery('h1.page-title');
		var titd = jQuery('h1.page-title').text();
		tit.text(titd);
		titdr.hide();
	}
	changeTit();
