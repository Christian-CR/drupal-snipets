
jQuery(document).ready(function(){

	// selecciona el proyecto y esconde el resto
	function selectorProyectos() {
		jQuery(".selector-proyectos div").click(function(){
			var ecat = jQuery(this).attr('id');
			var tpi = jQuery(".itemProyecto").hasClass(ecat);
			if(tpi === true){
				jQuery(".itemProyecto").hide();
				jQuery("."+ecat).delay().show();
				console.log('si sirve');
			}else{
				console.log('no sirve');
			}
		});
	}
	selectorProyectos();
	
	});
