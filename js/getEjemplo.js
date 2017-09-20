function llamadaAjax() {
	//$('#example tbody').empty();
	$.ajax({
		type : "GET",
		dataType : "xml",
		url : 'data/estadisticas.xml',
		cache:false,
		async : true, // blocks window close
		timeout: 120000, // sets timeout to 120 seconds
		success : function(xml) {
			$(xml).find('registro').each(
				function() {
					var seccion = $(this).find('seccion').text();
					var funcionalidad = $(this).find('funcionalidad').text();
					var n = $(this).find('valores').text().split(",");

					$("#contenidoTabla").html(
						'<tr>'
						+'<td class="success grupo">'+seccion+'</td>'
						+'<td class="success grupo">' + funcionalidad+'</a></td>'
						+'<td>' + n[0] + '</td>'
						+'<td>' + n[1] + '</td>'
						+'<td>' + n[2] + '</td>'
						+'<td>' + n[3] + '</td>'
						+'</tr>').fadeIn(
						'slow');
				});

			$(xml).find('dashboard').each(
				function() {
					var mifecha = $(this).attr("fecha");
					console.info("fecha es:"+mifecha);
					$("#fecha").text(mifecha);
				});
		},

		beforeSend : function() {

		},

		error : function() {

		}
	});
};