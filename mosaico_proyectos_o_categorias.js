
jQuery(document).ready(function(){

	// selecciona el proyecto y esconde el resto
	function selectorProyectos() {
		jQuery(".selector-proyectos div").click(function(){
			var ecat = jQuery(this).attr('id'); // obtiene el id del boton
			var tpi = jQuery(".itemProyecto").hasClass(ecat); //compara si la existe una clase que se llame igual
			if(tpi === true){ // si es verdad que existe la clase, esconde las demás y muestra la seleccionada
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
