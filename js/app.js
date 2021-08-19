//Para que cuando la pagina cargue, ejecute una funcion es el add addEventListener
//se puede hacer con funcion de flecha, pero para navegadores viejos dejamos la funcion normal.

//ES FIRST MOBILE, por eso comenzamos con una configuracion responsive para celu y dsp a medida que hacemos mas grande se va ajustando
window.addEventListener('load', function(){
	//aca creamos el Glider, y hacemos un querySelector, de la clase en la que tenemos los elementos del carousel.
	new Glider(document.querySelector('.carousel__lista'), {
		//OPCIONES DEL CAROUSEL, en la pagina podemos ver la cantidad de opciones!
		//De a cuantos slides queremos mostrar en nuestro carousel.
		slidesToShow: 1,
		//cuantos slides queremos desplazarnos.
		slidesToScroll: 1,
		//Si queremos poder moverlo con el mouse "agarrandolos" a los elementos del carousel
		draggable: true,
		//los indicadores
		dots: '.carousel__indicadores',
		//Los elementos de anterior y siguiente! (las flechas)
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});