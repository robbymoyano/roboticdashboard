function llamadaAjax(fecha, vista) {
	$('#example tbody').empty();
	$("#example").css("opacity" , "0");
	$("#example").removeClass("animated fadeIn");

	$.ajax({
		type : "GET",
		dataType : "xml",
		url : 'data/estadisticas.xml',
		//url: 'http://localhost:7001/AppMonitorServlet/resource/getDashboard?fecha='+fecha+'&vista='+vista,
		cache:false,
		async : false, // blocks window close
		timeout: 120000, // sets timeout to 120 seconds
		success : function(xml) {


			$(xml).find('registro').each(
				function() {
					var seccion = $(this).find('seccion').text();
					var funcionalidad = $(this).find('funcionalidad').text();
					var mesa = $(this).find('mesa').text();
					var contrato= $(this).find('contrato').text();
					var tiempo = $(this).find('tiempo').text();

					var id = $(this).find('id').text();
					var n = $(this).find('valores').text().split(",");
					var c = $(this).find('colores').text().split(",");


					$("#contenidoTabla").append(
						'<tr flujo="'+seccion+' - '+funcionalidad+'" id="'+id+'">'
						+'<td class="success grupo">'+seccion+'</td>'
						+'<td class="success grupo">'+contrato+'</td>'
						+'<td class="success grupo">' + mesa+'</a></td>'
						+'<td class="success grupo">' + funcionalidad+'</a></td>'
						+'<td class="success grupo">' + tiempo+'</a></td>'

						+'<td class="' + c[0] + '">' + n[0] + '</td>'
						+'<td class="' + c[1] + ' linkOk">' + n[1] + '</td>'
						+'<td flujo="algo" class="' + c[2] + ' linkError">' + n[2] + '</td>'
						+'</tr>').fadeIn(
						'slow');
				});

			$("#example").css(
				"opacity" , "1"
			);

			$("#example").addClass("animated fadeIn");
			console.info("tabla cargada");

			$("#contenidoTabla tr").click(function(){				
				var idflujo= $(this).attr('id');
				var flujo= $(this).attr('flujo');
				//window.open("tabla.jsp?id="+idflujo+"&vista="+vista+"&fecha="+fecha+"&title="+flujo,"_self");
				window.open("tabla.html?id="+idflujo+"&vista="+vista+"&fecha="+fecha+"&title="+flujo,"_self");
			});

			$(xml).find('dashboard').each(
				function() {
					var mifecha = $(this).attr("fecha");
					console.info("fecha es:"+mifecha);
					//$("#fecha").text(mifecha);
				});
		},

		beforeSend : function() {

		},

		error : function() {

		}
	});
};