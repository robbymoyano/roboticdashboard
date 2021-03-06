function llamadaAjax() {
	$('#operaciones tbody').empty();
	$("#operaciones").css("opacity" , "0");
	$("#operaciones").removeClass("animated fadeIn");
	$.ajax({
		type : "GET",
		dataType : "xml",
		url:"data/test.xml",
		cache:false,
		async : false, // blocks window close
		timeout: 240000, // sets timeout
		success : function(xml) {
			$('#operaciones tbody').empty();
			$('#operaciones').removeClass('hidden');
			$(xml).find('step').each(
				function() {
					console.log("Elemento encontrado");
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
			$("#operaciones").css(
				"opacity" , "1"
			);

			$("#operaciones").addClass("animated fadeIn");
			console.info("tabla cargada");
		},

		beforeSend : function() {
		},

		error : function() {
			alert("Error, servidor no encontrado");
		}
	});
}; 