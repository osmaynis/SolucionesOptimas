/*Funciones*/
$(document).ready(function()
{
	$('#btn_opciones').click(function(event) 
	{
		$('#menu_botones').toggle();
	});

	$('.botones-caja-texto').click(function(event)
	{
		var opcion = $(this).attr('id');
		tamanoTexto(opcion);
	});

	$('.botones-caja-lector').click(function(event)
	{
		var opcion = $(this).attr('id');
		estiloLectura(opcion);
	});


});

function tamanoTexto(opcion)
{
	var arr = ["p","h1","h2","h3","h4","h5","h6","li"];
	var size_general = '14';
	var p = $('p').css('font-size');
	switch(opcion)
	{
	case 'btn_menor':
		if(p > size_general)
		{
			for(var i =0;i<arr.length;i++)
			{
				var tagVi = $(arr[i]).css('font-size');
				var tagVf = parseInt(tagVi) - 1;
				$(arr[i]).css('font-size',tagVf);
			}
		}
		break;

	case 'btn_mayor':
		for(var i =0;i<arr.length;i++)
		{
			var tagVi = $(arr[i]).css('font-size');
			var tagVf = parseInt(tagVi) + 1;
			$(arr[i]).css('font-size',tagVf);
		}
	break;
	} 
}

function estiloLectura(opcion)
{
	switch(opcion)
	{
		case 'btn_normal':
		$('#btn_opciones').css('background','#000000');
			$('body').css('background', '#ffffff');
			$('#contenedor-texto').css('color','#000000');
			$('a').css('color','#000000');
			$('li').css('color','#000000');
			$('ul').css('color','#000000');
			$('#btn_opciones').css('color','#ffffff');
		break;

		case 'btn_sepia':
		$('#btn_opciones').css('background','#ffffff');
			$('body').css('background', '#BC8B5A');
			$('#contenedor-texto').css('color','#ffffff');
			$('a').css('color','#ffffff');
			$('li').css('color','#ffffff');
			$('ol').css('color','#ffffff');
			$('#btn_opciones').css('color','#000000');
		break;

		case 'btn_noche':
			$('#btn_opciones').css('background','#ffffff');
			$('body').css('background', '#000000');
			$('#contenedor-texto').css('color','#ffffff');
			$('a').css('color','#ffffff');
			$('li').css('color','#ffffff');
			$('ul').css('color','#ffffff');
			$('ol').css('color','#ffffff');
			$('#btn_opciones').css('color','#000000');
		break;
	}
}