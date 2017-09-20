function llamadaAjax() {
	$('#example tbody').empty();
	$.ajax({
		type : "GET",
		dataType : "xml",
		url:"data/test.xml",
		cache:false,
		async : true, // blocks window close
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
		},

		beforeSend : function() {
		},

		error : function() {
			alert("Error, servidor no encontrado");
		}
	});
}; 