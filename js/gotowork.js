var viaje = $('#panel-resultados');

$('#buscaViaje').click(function(){

	var placeWork = $('#work').val();

	var goToWork = placeWork.toLowerCase();

	$.get('http://localhost:3000/js/usuarios.json', function(data){
		/*console.log(data.usuarios.length)*/
		for(i = 0; i < data.usuarios.length; i++){
  		/*console.log(data.usuarios[i].nombre);*/

  			if(goToWork === data.usuarios[i].destino.toLowerCase()){
  				/*console.log(data.usuarios[i].destino);
  				console.log(data.usuarios[i].nombre);*/
  			

  				var driver = '<div class="col-12">\
								<div class="card resultados" style="width: 20rem;">\
									<img class="card-img-top-driver" src="'+ data.usuarios[i].fotografia +'" alt="Conductor">\
	  								<div class="card-body">\
	    								<h4 class="card-title">'+data.usuarios[i].nombre+'</h4>\
	    								<p class="card-text">'+data.usuarios[i].descripcion+'</p>\
	  								</div>\
	  								<ul class="list-group list-caracteristicas">\
	    								<li class="list-group-item caracteristicas">'+data.usuarios[i].modelo_de_coche+'</li>\
	    								<li class="list-group-item">'+data.usuarios[i].hora_de_salida+'</li>\
	    								<li class="list-group-item">'+data.usuarios[i].salida+'</li>\
	  								</ul>\
	  								<div class="card-body">\
	    								<a href="#" class="card-link">Contactar</a>\
	  								</div>\
							</div>'


					viaje.append(driver);


  			};

		};
	});

});