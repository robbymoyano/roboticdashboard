function ajaxTablaDia() {
    	$('.alert').addClass('hidden');
	    $('#example tbody').empty();

	$.ajax({
		type : "GET",
		dataType : "xml",
		url:"ConsultaPuntos",
		//url:"data/pruebaIndividual.xml",
		cache:false,
		async : true, // blocks window close
		timeout: 240000, // sets timeout
		success : function(xml) {
			var code = $(xml).find('code').text();
			var msg = $(xml).find('msg').text();

			console.log("code: "+code);
			if(code=='OK'){
				            $('#example tbody').empty();

				$('.alert-success').removeClass('hidden');
					$('#example').removeClass('hidden');
				console.log("El rest responde correctamente");
			//	alert("vamos a pintar la tabla");
				
				 $(xml).find('step').each(
					
                function() {
                    var name = $(this).find('name').text();
                    var valor = $(this).find('valor').text();
					var result = $(this).find('result').text();
					
                    $("#contenidoTabla").append(
                        '<tr>'
						+'<td>'+name+'</td>'
						+'<td>' + valor+'</td>'
					    +'<td class="'+result+'">' + result+'</td>'
						+'</tr>').fadeIn(
                        'slow');
                });

				
				
				
				
			}
			else{
				$('.alert-danger').removeClass('hidden');
				console.log(msg);
				$('#textError').text(msg);
			}
		},

		beforeSend : function() {
		},

		error : function() {
			alert("Error, servidor no encontrado");
		}
	});
}; 